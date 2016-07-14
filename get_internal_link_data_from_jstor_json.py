import sys, os, time, json, codecs
from datetime import datetime
import pandas as pd
import numpy as np
import networkx as nx
from networkx.readwrite import json_graph

from DBConnectJSTOR import DBConnectJSTOR
from settings_db import DATABASE_SETTINGS

import logging
logging.basicConfig(format='%(asctime)s %(name)s.%(lineno)d %(levelname)s : %(message)s',
        datefmt="%H:%M:%S",
        level=logging.INFO)
logger = logging.getLogger(__name__)

paper_id_fieldname = 'pID'

def load_json(fname):
    with codecs.open(fname, "r", "utf8") as f:
        data = json.load(f)
    return data

def add_paper_id(data, url_fieldname='stable_url'):
    """parse the article urls to get paper ids

    :data: data loaded from json (list of dicts)
    :returns: data with additional field for paper id

    """
    for item in data:
        item[paper_id_fieldname] = item[url_fieldname].split('/')[-1]
    return data

def load_jstor_db():
    settings = DATABASE_SETTINGS['default']
    return DBConnectJSTOR(**settings)

def add_graph_nodes(data):
    """Initialize the graph with nodes
    each node has paper ID as the ID and the rest of the data as node attribute

    :data: TODO
    :returns: networkx DiGraph (directed graph) with nodes but no links

    """
    G = nx.DiGraph()
    for item in data:
        G.add_node(item[paper_id_fieldname], item)
    return G

def get_internal_links(paper_ids, db, citing_colname='citing', cited_colname='cited'):
    """Get links (only where both cited and citing are within the existing graph)

    :paper_ids: list of strings
    :returns: links as list of tuples

    """
    out_links_df = db.query_for_citations(paper_ids, return_df=True)
    internal_links_df = out_links_df[out_links_df[cited_colname].astype(str).isin(paper_ids)]
    links = []
    for _, row in internal_links_df.iterrows():
        citing = str(row[citing_colname])
        cited = str(row[cited_colname])
        tup = (citing, cited)
        links.append(tup)
    return links

def add_links_to_graph(G, links):
    G.add_edges_from(links)
    return G

def save_to_json(G, name_substring):
    d = json_graph.node_link_data(G)
    # fname = 'static/cached_data/' + name_substring + '.json'
    # fname = name_substring + '.json'
    # fname = '/var/www/scholarapp/app/static/cached_data/' + name_substring + '.json'
    # fname = app.static_folder + '/cached_data/' +  name_substring + '.json'
    if name_substring[-5:] == '.json':
        fname = name_substring
    else:
        fname = name_substring + '.json'
    json.dump(d, codecs.open(fname, 'w', encoding='utf-8'), ensure_ascii=False, encoding='utf-8')

def get_graph(data):
    G = add_graph_nodes(data)
    db = load_jstor_db()
    links = get_internal_links(G.nodes(), db)
    G = add_links_to_graph(G, links)
    return G


def main(args):
    data = load_json(args.fname)
    data = add_paper_id(data)
    G = get_graph(data)
    save_to_json(G, args.output)

if __name__ == "__main__":
    total_start = time.time()
    logger.info(" ".join(sys.argv))
    logger.info( '{:%Y-%m-%d %H:%M:%S}'.format(datetime.now()) )
    import argparse
    parser = argparse.ArgumentParser(description="")
    parser.add_argument("fname", help="input filename (JSON)")
    parser.add_argument("-o", "--output", default="", help="output filename (JSON)")
    parser.add_argument("--debug", action='store_true', help="output debugging info")
    global args
    args = parser.parse_args()
    if args.debug:
        logger.setLevel(logging.DEBUG)
        logger.debug('debug mode is on')
    if args.output == "":
        args.output = "{}_network.json".format(os.path.splitext(args.fname)[0])
    main(args)
    total_end = time.time()
    logger.info('all finished. total time: {:.2f} seconds'.format(total_end-total_start))

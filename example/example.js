// var TimelineVis = d3_article_timeline.TimelineVis;

// d3.json(json_endpoint).then(function(data) {
d3.json(json_endpoint, function(error, graph) {
	var sel = d3.select('#timeline');
	var data = graph.nodes;
	console.log(sel);
	var width = 960,
		height = 550;
	timelinevis = new TimelineVis({data: data, el: sel, width: width, height: height});
	// nodelinkvis = new NodeLinkCoauthorshipVis().width(960)
	// 	.data(graph);
	// d3.select("#chartDiv").call(nodelinkvis);
	// // nodelinkvis.data(graph);
    //

});


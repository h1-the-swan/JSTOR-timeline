var TimelineVis = d3_article_timeline.TimelineVis;

// d3.json(json_endpoint).then(function(data) {
d3.json(json_endpoint, function(error, data) {
	var sel = d3.select('#timeline');
	console.log(sel);
	var width = 960,
		height = 350;
	timelinevis = new TimelineVis({data: data, el: sel, width: width, height: height});
	// nodelinkvis = new NodeLinkCoauthorshipVis().width(960)
	// 	.data(graph);
	// d3.select("#chartDiv").call(nodelinkvis);
	// // nodelinkvis.data(graph);
    //

});


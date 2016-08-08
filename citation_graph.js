var json_fname = 'Climate_change_network.json'

d3.json(json_fname, function(error, data) {
	var w = 960,
		h = 400;
	var efScale = d3.scale.linear()
			.domain(d3.extent(data.nodes, function(d) { return d.eigenfactor_score; }))
			.range([0, 5]);

	var force = d3.layout.force()
				.charge(-60)
				.linkDistance(30)
				.size([w,h]);
	// http://stackoverflow.com/questions/17953106/why-does-d3-js-v3-break-my-force-graph-when-implementing-zooming-when-v2-doesnt/17976205#17976205
	var drag = force.drag()
		.on("dragstart", function() { d3.event.sourceEvent.stopPropagation(); });

	console.log(data);
	force.nodes(data.nodes)
		.links(data.links)
		.start();

	var chart = d3.select("#graph")
				.append("svg")
				.attr("width", w)
				.attr("height", h)
				.attr("class", "chart");

	var link = chart.selectAll(".link")
		.data(data.links)
		.enter().append("line")
		.attr("class", "link");

	var node = chart.selectAll(".nodeG")
		.data(data.nodes)
		.enter().append("g");
	node.append("circle")
		.attr("class", "node")
		.attr("r", function(d) {
			return 4 + efScale(d.eigenfactor_score);
			})
		.style("fill", "darksalmon")
		// .call(force.drag);
		.call(drag);

	force.on("tick", function() {
		link.attr("x1", function(d) { return d.source.x; })
			.attr("y1", function(d) { return d.source.y; })
			.attr("x2", function(d) { return d.target.x; })
			.attr("y2", function(d) { return d.target.y; });
		
		// node.attr("cx", function(d) { return d.x; })
		// 	.attr("cy", function(d) { return d.y; });
		node.attr("transform", function(d) {
			return "translate(" + d.x + "," + d.y + ")";
		});
	});

	node.append("text")
		.attr("class", "nodeLabel")
		.text(function(d) {
			var AuthorName = d.authors[0].split(" ").slice(-1);
			return AuthorName + "," + d.year;
		});
	chart.call(d3.behavior.zoom()
		.on('zoom', function() {
			chart.attr(
				'transform',
				'translate(' + d3.event.translate + ')' +
					'scale(' + d3.event.scale + ')'
			);
		})
	);
	// node.on("mouseover", function(d) {
	// 		d3.selectAll(".nodeLabel").remove();
	// 		d3.select(this).append("text")
	// 			.text(d.title + ", " + d.year)
	// 			.attr("class", "nodeLabel")
	// 			.on("click", function(dd) {
	// 				var url = "http://labs.jstor.org" + d.stable_url;
	// 				window.open(url,'_blank');
	// 			});
	// 	});

		
});

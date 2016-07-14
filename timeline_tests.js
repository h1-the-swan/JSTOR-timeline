// building off http://bl.ocks.org/bunkat/2338034
//
var json_fname = 'Climate_change.json'

// http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

d3.json(json_fname, function(error, data_total) {
	data_total.forEach(function(d) {
		d.lane = 0;
	});
	var markType = getParameterByName('m');
	if ( (markType != 'icon') && (markType != 'circle') ) {
		markType = 'circle'  // default
	}

	var dataByYear = d3.nest()
						.key(function(d) {return d.year;})
						.sortValues(function(a, b) {
							return d3.descending(a.eigenfactor_score, b.eigenfactor_score);
						})
						// .map(data_total, d3.map);
						.entries(data_total);
	dataByYear.forEach(function(d) {
		d.firstTitle = d.values[0].id;
		d.sum_eigenfactor = d3.sum(d.values, function(dd) {return dd.eigenfactor_score;});
		d.lane = 0;
		d.year = +d.key;
	});

	var lanes = ["Climate change"],
				laneLength = lanes.length,
			// timeBegin = new Date(String(minYear-1)),
			timeBegin = +d3.min(dataByYear, function(d) { return d.year; }) - 1,
			timeEnd = +d3.max(dataByYear, function(d) { return d.year; }) + 1;

		var m = [20, 15, 15, 15], //top right bottom left
			w = 960 - m[1] - m[3],
			h = 350 - m[0] - m[2],
			miniHeight = laneLength * 12 + 30,
			mainHeight = h - miniHeight - 50;

		var mainMinRad = 10;

		var minExtent, maxExtent;  // these will be the lower and upper years displayed in main

		var stylesBase = {
			'opacity': .2
		};
		var stylesVisible = {
			'opacity': 1
		};

		//scales
		var x = d3.scale.linear()
				.domain([timeBegin, timeEnd])
				.range([0, w]);
		var x1 = d3.scale.linear()
				.range([0, w]);
		var y1 = d3.scale.linear()
				.domain([0, laneLength])
				.range([0, mainHeight]);
		var y2 = d3.scale.linear()
				.domain([0, laneLength])
				.range([0, miniHeight]);
		var efScale = d3.scale.linear()
				.domain(d3.extent(data_total, function(d) { return d.eigenfactor_score; }))
				.range([0, 5]);
		var efSumScale = d3.scale.linear()
				.domain(d3.extent(dataByYear, function(d) { return d.sum_eigenfactor; }))
				.range([0, 5]);

		var chart = d3.select("#timeline")
					.append("svg")
					.attr("width", w + m[1] + m[3])
					.attr("height", h + m[0] + m[2])
					.attr("class", "chart");
		
		chart.append("defs").append("clipPath")
			.attr("id", "clip")
			.append("rect")
			.attr("width", w)
			.attr("height", mainHeight);

		var main = chart.append("g")
					.attr("transform", "translate(" + m[3] + "," + m[0] + ")")
					.attr("width", w)
					.attr("height", mainHeight)
					.attr("class", "main");

		var mini = chart.append("g")
					.attr("transform", "translate(" + m[3] + "," + (mainHeight + m[0]) + ")")
					.attr("width", w)
					.attr("height", miniHeight)
					.attr("class", "mini");
		
		//main lanes and texts
		var mainLaneLinesG = main.append("g");
		for (var i = 0, len = lanes.length; i < len; i++) {
			mainLaneLinesG.append("line")
				.attr("x1", m[1])
				.attr("y1", function() {return y2(i);})
				.attr("x2", w)
				.attr("y2", function() {return y2(i);})
				.attr("class", "laneLine")
				.attr("stroke", "lightgray");
		}

		// main.append("g").selectAll(".laneText")
		// 	.data(lanes)
		// 	.enter().append("text")
		// 	.text(function(d) {return d;})
		// 	.attr("x", -m[1])
		// 	.attr("y", function(d, i) {return y1(i + .5);})
		// 	.attr("dy", ".5ex")
		// 	.attr("text-anchor", "end")
		// 	.attr("class", "laneText");
		
		//mini lanes and texts
		var miniLaneLinesG = mini.append("g");
		for (var i = 0, len = lanes.length; i < len; i++) {
			miniLaneLinesG.append("line")
				.attr("x1", m[1])
				.attr("y1", function() {return y2(i);})
				.attr("x2", w)
				.attr("y2", function() {return y2(i);})
				.attr("class", "laneLine")
				.attr("stroke", "lightgray");
		}

		// mini.append("g").selectAll(".laneText")
		// 	.data(lanes)
		// 	.enter().append("text")
		// 	.text(function(d) {return d;})
		// 	.attr("x", -m[1])
		// 	.attr("y", function(d, i) {return y2(i + .5);})
		// 	.attr("dy", ".5ex")
		// 	.attr("text-anchor", "end")
		// 	.attr("class", "laneText");

		// Axes
		var xAxisMini = d3.svg.axis()
			.orient("bottom")
			// .ticks(5)
			.scale(x)
			.tickFormat(d3.format("d"));

		mini.append("g")
			.attr("class", "xaxis")
			.attr("transform", "translate(0," + (miniHeight) + ")")
			.call(xAxisMini);

		var xAxisMain = d3.svg.axis()
			.orient("top")
			.scale(x1)
			.tickFormat(d3.format("d"));

		var xAxisMainObj = main.append("g")
			.attr("class", "xaxis")
			.call(xAxisMain);

		var mainClipPath = main.append("g")
							.attr("clip-path", "url(#clip)");

		var scrollItems = mainClipPath.append("g")
							.attr("class", "scrollItems")
							.attr("transform", "translate(0," + (mainHeight*0.7) + ")");
		var scrollDur = 150;
		scrollItems.append("text")
			.attr("class", "leftArrow")
			.style("font-family", "FontAwesome")
			.text("\uf060")
			.attr("x", 0)
			// .attr("y", mainHeight / 2)
			// .style("font-size", "1.5em")
			.on("click", function() {
				changeExtent(Math.round(minExtent-1), Math.round(maxExtent-1), scrollDur, "linear");
				});
		scrollItems.append("text")
			.attr("class", "rightArrow")
			.style("font-family", "FontAwesome")
			.text("\uf061")
			.attr("text-anchor", "end")
			.attr("x", w)
			// .attr("y", mainHeight / 2)
			// .style("font-size", "1.5em")
			.on("click", function() {
				changeExtent(Math.round(minExtent+1), Math.round(maxExtent+1), scrollDur, "linear");
				});
		scrollItems.append("text")
			.attr("class", "zoomIn")
			.style("font-family", "FontAwesome")
			.text("\uf196")  // http://fontawesome.io/icon/plus-square-o/
			.attr("x", 10)
			.attr("y", 30)
			// .attr("y", mainHeight / 2)
			// .style("font-size", "1.5em")
			.on("click", function() {
				changeExtent(Math.round(minExtent+1), Math.round(maxExtent-1), scrollDur, "linear");
				});
		scrollItems.append("text")
			.attr("class", "zoomOut")
			.style("font-family", "FontAwesome")
			.text("\uf147")  // http://fontawesome.io/icon/minus-square-o/
			.attr("x", 10)
			.attr("y", 50)
			// .attr("y", mainHeight / 2)
			// .style("font-size", "1.5em")
			.on("click", function() {
				changeExtent(Math.round(minExtent-1), Math.round(maxExtent+1), scrollDur, "linear");
				});
		
		//mini items
		// note: mouseover events will not play well with the brush
		var miniItems = mini.append("g").selectAll(".miniItem")
			.data(data_total)
			.enter().append("g")
			.attr("class", "miniItem")
			.attr("transform", function(d) {
				d.x = x(d.year);
				// d.y = 0;  // for now
				d.y = miniHeight / 2;
				d.radius = 5 + efScale(d.eigenfactor_score);
				return "translate(" + d.x + "," + d.y + ")";
			});

		function stackItems(items, scale) {
			var yearsList = [];
			items.each(function(d) {
				if ( !(d.year in yearsList) ) {
					yearsList.push(d.year);
				}
			});
			var maxRad = d3.max(items[0], function(d) {return d.__data__.radius});
			for (var i = 0, len = yearsList.length; i < len; i++) {
				thisYearMini = items.filter(function(d) {return d.year==yearsList[i]});
				var y = 0;
				thisYearMini.each(function(d) {
					if (y == 0) {
						y = scale(d.lane) + maxRad;
					} else {
						y = y + 2*d.radius;
					}
					d.y = y;
					d3.select(this).attr("transform", function(d) {
						return "translate(" + d.x + "," + d.y + ")";
					});
				});
			}
		}
		// stackItems(miniItems, y2);

		var miniMarks = miniItems.append("circle")
			.attr("class", "miniMark")
			.attr("r", function(d) {return d.radius;})
			.style(stylesBase);


		switch (markType) {
			case 'circle':
				//main items
				var yearItems = mainClipPath.append("g").selectAll(".yearItem")
					.data(dataByYear)
					.enter().append("g")
					.attr("class", "yearItem")
					.attr("transform", function(d) {
						d.x = 0;  //for now
						d.y = 0;  //for now
						d.radius = mainMinRad + (2 * efSumScale(d.sum_eigenfactor));
						return "translate(" + d.x + "," + d.y + ")";
					});

				var yearMarks = yearItems.append("circle")
					.attr("class", "yearMark")
					// .on('mouseover', expand)
					.on('mouseover', function(d) {
						contract();
						var sel = paperItems.filter(function(dd) {return dd.year===d.year});
						expand(sel);
						})
					// .on('mouseout', contract)
					.style(stylesVisible);
					
				//label for number of papers
				yearItems.append("text")
					.attr("text-anchor", "middle")
					.attr("y", ".3em")  //nudge
					.attr("class", "numIndicator")
					.text(function(d) {return d.values.length;});

				var paperItems = yearItems.append("g").selectAll(".paperItem")
					.data(function(d) {return d.values})
					.enter().append("g")
					.attr("class", "paperItem")
					.attr("transform", function(d, i) {
						d.x = 0;  //for now
						d.y = 0;  //for now
						d.idx = i;
						d.radius = mainMinRad + (2 * efScale(d.eigenfactor_score));
						return "translate(" + d.x + "," + d.y + ")";
					});

				var paperMarks = paperItems.append("circle")
					.attr("r", 0)  //for now
					.attr("class", "paperMark");

				var paperLabels = paperItems.append("text")
					.attr("text-anchor", "end")
					.attr("class", "paperLabel")
					.style("display", "none")
					.text(function(d) {return d.title;})

				break;
			
			case 'icon':
				//main items
				var yearItems = mainClipPath.append("g").selectAll(".yearItem")
					.data(dataByYear)
					.enter().append("g")
					.attr("class", "yearItem")
					.attr("transform", function(d) {
						d.x = 0;  //for now
						d.y = 0;  //for now
						d.radius = mainMinRad + (2 * efSumScale(d.sum_eigenfactor));
						return "translate(" + d.x + "," + d.y + ")";
					});
				var paperItems = yearItems.append("g").selectAll(".paperItem")
					.data(function(d) {return d.values})
					.enter().append("g")
					.attr("class", "paperItem")
					.attr("transform", function(d, i) {
						d.x = 0;  //for now
						d.y = 0;  //for now
						d.idx = i;
						d.radius = mainMinRad + (2 * efScale(d.eigenfactor_score));
						return "translate(" + d.x + "," + d.y + ")";
					});


				var paperMarks = paperItems.append("text")
					.attr("class", "paperMark")
					.style("font-family", "FontAwesome")
					.text("\uf0f6")
					// .on('mouseover', expand)
					.attr("text-anchor", "middle")
					.on('mouseover', function(d) {
						contract();
						var sel = paperItems.filter(function(dd) {return dd.year===d.year});
						expand(sel);
						});
					// .on('mouseout', contract)

				var bbox = paperMarks.node().getBBox();
				paperItems.insert("rect", ".paperMark")
					.attr("x", bbox.x)
					.attr("y", bbox.y)
					.attr("width", bbox.width)
					.attr("height", bbox.height)
					.style("fill", "white");

				var paperLabels = paperItems.append("text")
					.attr("text-anchor", "end")
					.attr("class", "paperLabel")
					.style("display", "none")
					.text(function(d) {return d.title;})
				// //main items
				// var paperItems = mainClipPath.append("g").selectAll(".paperItem")
				// 	.data(data_total)
				// 	.enter().append("g")
				// 	.attr("class", "paperItem")
				// 	.attr("transform", function(d) {
				// 		d.x = 0;  //for now
				// 		d.y = 0;  //for now
				// 		d.radius = mainMinRad + (2 * efSumScale(d.sum_eigenfactor));
				// 		return "translate(" + d.x + "," + d.y + ")";
				// 	});
				// var paperMarks = paperItems.append("text")
				// 	.attr("class", "paperMark")
				// 	.style("font-family", "FontAwesome")
				// 	.text("\uf0f6")
				// 	// .on('mouseover', expand)
				// 	.on('mouseover', function(d) {
				// 		contract();
				// 		var sel = paperItems.filter(function(dd) {return dd.year===d.year});
				// 		expand(sel);
				// 		});
				// 	// .on('mouseout', contract)

				// var yearItems = mainClipPath.append("g").selectAll(".yearItem")
				// 	.data(dataByYear)
				// 	.enter().append("g")
				// 	.attr("class", "yearItem")
				// 	.attr("transform", function(d) {
				// 		d.x = 0;  //for now
				// 		d.y = 0;  //for now
				// 		d.radius = mainMinRad + (2 * efSumScale(d.sum_eigenfactor));
				// 		return "translate(" + d.x + "," + d.y + ")";
				// 	});
				// var yearMarks = yearItems.append("text")
				// 	.attr("class", "yearMark")
				// 	.style("font-family", "FontAwesome")
				// 	.text("\uf0f6")
				// 	// .on('mouseover', expand)
				// 	.on('mouseover', function(d) {
				// 		contract();
				// 		var sel = paperItems.filter(function(dd) {return dd.year===d.year});
				// 		expand(sel);
				// 		});
				// 	// .on('mouseout', contract)

				break;
				
		}





		//mini labels
		// mini.append("g").selectAll(".miniLabels")
		// 	.data(data)
		// 	.enter().append("text")
		// 	.text(function(d) {return d.id;})
		// 	.attr("x", function(d) {return x(d.start);})
		// 	.attr("y", function(d) {return y2(d.lane + .5);})
		// 	.attr("dy", ".5ex");

		//brush
		var brush = d3.svg.brush()
							.x(x)
							.on("brush", display);

		mini.append("g")
			.attr("class", "x brush")
			.call(brush)
			.selectAll("rect")
			.attr("y", 1)
			.attr("height", miniHeight - 1);

		var extentLines = [];
		for (var i = 0; i < 2 ; i++) {
			extentLines.push(chart.append("line").attr("class", "extentLine"));
		}
		function updateExtentLines(left, right) {
			if (brush.empty()) {
				extentLines.forEach(function(sel) {sel.style("display", "none");})
			} else {
				extentLines.forEach(function(sel) {sel.style("display", "");})
				extentLines[0].attr("x1", m[3])
					.attr("y1", m[0])
					.attr("x2", left + m[3])
					.attr("y2", (mainHeight + m[0]));
				extentLines[1].attr("x1", w+m[3])
					.attr("y1", m[0])
					.attr("x2", right + m[3])
					.attr("y2", (mainHeight + m[0]));
			}
		}

		// initialize brush
		var brushInit = [
			1975, 1990
			];
		// brush.extent(brushInit);
		mini.select(".brush").call(brush.extent(brushInit));

		display();


		// // I'm not sure there's a way to use d3 transitions to control the brush, but here's a hacky way of doing it manually.
		// var dly = 30;
		// function brushTransition(dly) {
		// 	currExtent = [brush.extent()[0], brush.extent()[1]];
		// 	brush(d3.select(".brush").transition().duration(dly).call(display));
		// 	// brush.event(d3.select(".brush").transition().delay(dly).duration(0));
		// }
		// // brush.extent([1970,2000]);
		// var minExtent = brush.extent()[0],
		// 	maxExtent = brush.extent()[1];
		// var destinationExtent = 1998;
		// var i = maxExtent;
		// var refreshIntervalId = setInterval(function() {
		// 	   	i = i + 0.2;
		// 		brush.extent([minExtent, i]);
		// 		brushTransition(dly);
		// 		if (i >= destinationExtent) {
		// 			clearInterval(refreshIntervalId);
		// 		}
		// 	}, dly);

		// // attempt to use tween function to do it. not really working
		// brush.extent([1970, 2005]);
		// brush(d3.select(".brush").transition().duration(5000)
		// 		.tween("side-effects", function() { return function(t, tt, ttt) { console.log(brush.extent()[0]);
		// 			brush.event(d3.select(".brush").transition().delay(t).duration(0));
		// 		};}));
		// brush(d3.select(".brush").transition().duration(1000));
		// brush.event(d3.select(".brush").transition().delay(1000).duration(0));


		function changeExtent(year1, year2, duration, ease, delay) {
			if (duration === undefined) {
				duration = 1000;
			}
			if (ease === undefined) {
				ease = "cubic-in-out";
			}
			if (delay === undefined) {
				delay = 0;
			}
			if (year1 < timeBegin) {
				year1 = timeBegin;
			}
			if (year2 > timeEnd) {
				year2 = timeEnd;
			}
			brush.event(mini.select(".brush").transition().delay(delay).duration(duration).ease(ease).call(brush.extent([year1, year2])));

		}
		//
		// This works! (after modifying the display() function. see the note at the top of display())
		// brush.event(mini.select(".brush").transition().delay(1000).duration(1000).call(brush.extent([1970, 2000]))
		// 		.each("end", function() {console.log("initialized");}));
		changeExtent(1970, 2000, 1000, "cubic-in-out", 1000);

		// not using this currently
		function expandAll() {
			expand(paperItems);
		}
		var maxEF = d3.max(data_total, function(d) {return d.eigenfactor_score;});

		
		function display() {
			// note: calculating the brush extent using brush.extent() doesn't really work here (with transition ticks)
			// because it goes the final extent values at the beginning of the transition.
			// So instead, get the measurements of the brush element and calculate the extent using the scale (x.invert())
			var extentSelect = mini.select(".brush").select(".extent");
			var minExtentScreen = +extentSelect.attr("x");
			var maxExtentScreen = minExtentScreen + (+extentSelect.attr("width"));
			// console.log(x.invert(maxExtentScreen));
			// var minExtent = brush.extent()[0],
			// 	maxExtent = brush.extent()[1],
			minExtent = x.invert(minExtentScreen);
			maxExtent = x.invert(maxExtentScreen);



			// hide arrows if you can't go any further
			if (minExtent <= timeBegin) {
				d3.select(".leftArrow").style("display", "none");
			} else {
				d3.select(".leftArrow").style("display", "");
			}
			if (maxExtent >= timeEnd) {
				d3.select(".rightArrow").style("display", "none");
			} else {
				d3.select(".rightArrow").style("display", "");
			}
			// hide the zoomIn button if we're zoomed in too far
			if (maxExtent - minExtent <= 2) {
				d3.select(".zoomIn").style("display", "none");
			} else {
				d3.select(".zoomIn").style("display", "");
			}


			switch (markType) {
				case 'circle':
					var visItems = yearItems.filter(function(d) {return d.year < maxExtent && d.year > minExtent;})
					var notVisItems = yearItems.filter(function(d) {return d.year>= maxExtent || d.year <= minExtent;});
					visItems.style("display", "");
					notVisItems.style("display", "none");
					// console.log(brush.extent());

					// mini.select(".brush")
					// 	.call(brush.extent([minExtent, maxExtent]));
					// console.log(maxExtent-minExtent);
					updateExtentLines(minExtentScreen, maxExtentScreen);

					x1.domain([minExtent, maxExtent]);

					// update styles of mini items that are visible in the main display.
					// reset all to normal, then style just the visible ones
					miniItems.style(stylesBase);
					miniItems.filter(function(d) {
						var match = false;
						visItems.forEach(function(dd) {
							if (d.id==dd.firstTitle) {
								match = true;
							}
						});
						return match;
						}).style(stylesVisible);

					//update main item marks
					visItems.attr("transform", function(d) {
						d.x = x1(d.year);
						d.y = y1(d.lane) + mainMinRad;
						return "translate(" + d.x + "," + d.y + ")";
					});

					yearMarks.attr("r", function(d) {return d.radius;});

					break;

				case 'icon':
					var visItems = yearItems.filter(function(d) {return d.year < maxExtent && d.year > minExtent;})
					var notVisItems = yearItems.filter(function(d) {return d.year>= maxExtent || d.year <= minExtent;});
					visItems.style("display", "");
					notVisItems.style("display", "none");
					// console.log(brush.extent());

					// mini.select(".brush")
					// 	.call(brush.extent([minExtent, maxExtent]));
					// console.log(maxExtent-minExtent);
					updateExtentLines(minExtentScreen, maxExtentScreen);

					x1.domain([minExtent, maxExtent]);

					// update styles of mini items that are visible in the main display.
					// reset all to normal, then style just the visible ones
					miniItems.style(stylesBase);
					miniItems.filter(function(d) {
						var match = false;
						visItems.forEach(function(dd) {
							if (d.id==dd.firstTitle) {
								match = true;
							}
						});
						return match;
						}).style(stylesVisible);

					//update main item marks
					visItems.attr("transform", function(d) {
						// d.x = x1(d.year) - 10;
						d.x = x1(d.year);
						d.y = y1(d.lane) + 20;
						return "translate(" + d.x + "," + d.y + ")";
					});

					paperMarks.attr("transform", function(d) {
								return "translate(" + d.idx/2 + "," + d.idx*3 + ")";
								// return "translate(" + "0" + "," + d.idx*3 + ")";
							})
						.style("fill", "black")
						.style("opacity", 1)
						.style("font-size", "1.5em");
						// .style("font-size", function(d) {return (d.radius/10) + "em";});

					paperItems.each(function(d) {
						var item = d3.select(this);
						var m = item.select(".paperMark");
						var bbox = m.node().getBBox();
						item.select("rect")
							.attr("x", bbox.x)
							.attr("y", bbox.y)
							.attr("width", bbox.width)
							.attr("height", bbox.height)
							.attr("transform", m.attr("transform"))
							.style("fill", "white");
						console.log(m.attr("transform"));
					});

					break;
				
			}

			//update the item labels
			// var rotate = -20;
			function _rotate(rotation) {
				labels.attr("transform", function(d) { 
					return "rotate(" + rotation + "," + d.x + "," + d.y + ")"; 
				});
			}
			// constraint relaxation
			// http://bl.ocks.org/syntagmatic/4053096
			var alpha = 1;
			var spacing = 15;
			function relax(labels) {
				// Move text if overlapping (recursively)
				var again = false;
				labels.each(function(d) {
					// console.log(d3.select(this).attr("x"));
					var a = this;
					var da = d3.select(a);
					var ax = da.attr("x");
					// console.log(ax);
					labels.each(function(dd) {
						var b = this;
						// if (a == b) {
						// 	return;
						// }
						var db = d3.select(b);
						var bx = db.attr("x");
						var deltaX = ax - bx;
						// console.log(deltaX);
						// if (Math.abs(deltaX) > spacing) {
						// 	return;
						// }
						if ( (a != b) && Math.abs(deltaX) < spacing) {
							// console.log(deltaX);
							// collision detected
							again = true;
							var sign = deltaX > 0 ? 1 : -1;
							// console.log(a);
							// console.log(db.attr("x"));
							d.x = +ax + (sign*alpha);
							dd.x = +bx - (sign*alpha);
							da.attr("x", d.x);
							db.attr("x", dd.x);
							// d3.select(this).attr("transform", "translate(500, 0)");
							// console.log(db.attr("x"));
							// d.x += sign*alpha;
							// a.x += 1;
						}
					});
				});
				if (again) {
					// setTimeout(function() {
					// 	relax(labels);
					// }, 2);
					relax(labels);
				} else {
					_rotate(-20);
					//
				}

			}
			// labels = itemRects.selectAll(".yearItemLabel")
			// 	.attr("x", function(d) {d.x = x1(Math.max(d.key, minExtent)); return d.x;})
			// 	.attr("y", function(d) {d.y = d.cy; return d.y;})
			// 	.data(visItems);
			// 	// .attr("x", function(d) {return x1(Math.max(d.start, minExtent) + 2);});
			// 	// .attr("transform", function(d) { return "rotate(" + rotate + "," + d.x + "," + d.y + ")"; });
            //
			// labels.enter().append("text")
			// 	.text(function(d) {return d.year + ": " + d.values.length + " papers";})
			// 	.attr("x", function(d) {d.x = x1(Math.max(d.key, minExtent)); return d.x;})
			// 	// .attr("y", function(d) {d.y = y1(d.lane + .5); return d.y;})
			// 	// .attr("y", function(d) {d.y = y1(d.lane)+rad; return d.y;})
			// 	.attr("y", function(d) {d.y = d.cy; return d.y;})
			// 	.attr("class", "yearItemLabel")
			// 	.attr("text-anchor", "end")
			// 	// .attr("transform", function(d) { return "rotate(" + rotate + "," + d.x + "," + d.y + ")"; })
			// 	.on('mouseover', function(d) {
			// 			console.log(d.x);
			// 		});
            //
            //
			// labels.exit().remove();

			//update axis
			xAxisMainObj.call(xAxisMain);

			// // only use one of the following (or none)
			// _rotate(-20);
			// relax(labels);

			// Hide main items if the brush is empty
			if (brush.empty()) {
				yearItems.style("display", "none");
			}
		}
	
	var afterTransitionX = function(d, i) {
		// return x1(+d.year) + ((i*i)*3);
		return (i*i)*3;
	};
	var afterTransitionY = function(d, i) {
		// return y1(d.lane) + 2.2*rad*i+5*rad;
		return 2.1*mainMinRad*i+3*mainMinRad;
	};
	// function expand(yearData) {
	function expand(sel) {
		console.log(sel);
		// contract();
		var dur = 500;
		// var sel = paperItems.filter(function(d) {return d.year===yearData.year});
		sel.style("pointer-events", "none")
			.transition().duration(dur)
			.attr("transform", function(d, i) {
				return "translate(" + afterTransitionX(d, i) + "," + afterTransitionY(d, i) + ")";
			})
			.each("start", function() {d3.select(this).classed("expanded", true)});
			// .style("pointer-events", "auto");
		sel.selectAll(".paperMark").transition().duration(dur)
						// .style("font-size", function(d) {return (d.radius/10) + "em";})
			.styleTween("font-size", function(d) {
				return d3.interpolate(
						this.style.getPropertyValue("font-size"),
						(d.radius/10) + "em");
			})
			.attr("r", function(d) {return d.radius;});
		//make labels appear
		sel.selectAll(".paperLabel")
			.style("pointer-events", "none")
			.style("display", "")
			.style("opacity", 0)
			.transition()
			.delay(function(d) {return dur/2 + d.idx*75;})
			.duration(dur)
			.style("opacity", 1);
	}
	// function contract(yearData) {
	function contract() {
		var dur = 500;
		// var sel = paperItems.filter(function(d) {return d.year===yearData.year});
		var sel = d3.selectAll(".expanded");
		console.log(sel.empty());
		sel.transition().duration(dur)
			.attr("transform", "translate(0,0)")
			.each("end", function() {
				d3.select(this).classed("expanded", false)
					.style("pointer-events", "");
			})
		sel.selectAll(".paperMark").transition().duration(dur*1.5)
			.styleTween("font-size", function(d) {
				return d3.interpolate(
						this.style.getPropertyValue("font-size"),
						"1.5em")
			})
			.attr("r", 0);
		sel.selectAll(".paperLabel").style("display", "none");
	}
	// function expand(yearData) {
	// 	console.log(yearData);
	// 	if (!yearData.expanded) {
	// 		
	// 		// d3.selectAll(".yearItemLabel").classed("hidden");
	// 		$( '.yearItemLabel' ).hide();
	// 		var dur = 500;
	// 		// var rad = yearData.radius;
	// 		var rad = 10;
	// 		var parentY = yearData.cy;
	// 		var marks = mainClipPath.selectAll(".paperItem")
	// 					// .data(visItems, function(d) { return d.id; })
	// 					.data(yearData.values);
	// 		marks.enter().append("circle")
	// 				// .attr("class", function(d) {return "mainItem miniItem" + d.lane;})
	// 				.attr("class", "paperItem")
	// 				.on('mouseover', function(d) {console.log(d);}).append('text').text('d');
	// 		// marks.exit().transition().duration(1000).attr("cy", parentY).remove();
	// 		// itemRects.selectAll('text').data(yearData.values).enter().append('text').attr("x", function(d) {console.log(d); return d.cx;}).attr("y", function(d) {return d.cy;}).text(function(d) {return d.title;});
	// 		marks.exit().remove();
    //
	// 		var labels = mainClipPath.selectAll(".paperItemLabel")
	// 			.data(yearData.values);
	// 		labels.enter().append("text")
	// 			.attr("class", "paperItemLabel")
	// 			.attr("text-anchor", "end");
	// 		labels.exit().remove();
    //
	// 		marks.attr("cx", beforeTransitionX)
	// 				.attr('r', function(d) {
	// 						// d.radius = rad + (2 * efSumScale(d.sum_eigenfactor));
	// 						d.radius = rad + (2 * efScale(d.eigenfactor_score));
	// 						return d.radius;
	// 					})
	// 				.attr("cy", beforeTransitionY)
	// 				.transition().duration(dur)
	// 				.attr("cx", afterTransitionX)
	// 				.attr("cy", afterTransitionY)
	// 				.style(stylesVisible);
	// 		labels.attr("x", beforeTransitionX)
	// 			.text(function(d) {return d.title;})
	// 			.attr("y", beforeTransitionY)
	// 			.transition().duration(dur)
	// 			.attr("x", afterTransitionX)
	// 			.attr("y", afterTransitionY);
	// 	yearData.expanded = true;
	// 	}
	// }
    //
	// function contract(d) {
	// 	var dur = 500;
	// 	if (d.expanded) {
	// 		var marks = mainClipPath.selectAll(".paperItem")
	// 			.interrupt("contract")
	// 			.transition("contract").delay(2000).duration(dur)
	// 			.attr("cx", beforeTransitionX)
	// 			.attr("cy", 0)
	// 			.each("end", function(_, i) {
	// 				if (i === 0) d.expanded = false;
	// 				})
	// 			.remove();
	// 		var labels = mainClipPath.selectAll(".paperItemLabel")
	// 			.interrupt("contract")
	// 			.transition("contract").delay(2000).duration(dur)
	// 			.attr("x", beforeTransitionX)
	// 			.attr("y", 0)
	// 			.remove();
	// 	}
	// }
	
	var testButton = d3.select("body").append("button")
						.attr("id", "testButton")
						.html("testButton")
						.on("click", function() {
							changeExtent(Math.round(minExtent+1), Math.round(maxExtent+1), 250, "linear");
						});
});

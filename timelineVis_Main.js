// building off http://bl.ocks.org/bunkat/2338034
//
//
var timelineVis = timelineVis || {};

timelineVis.timelineVis = (function() {

	function deconstructTranslate(translateString) {
		// takes a string like "translate(100,200)" and returns the numbers [100, 200]
		translateString = translateString.replace("(", "").replace(")", "");
		var regex = new RegExp(/translate([\d\.]+),([\d\.]+)/);
		var match = regex.exec(translateString);
		return {
			x: +match[1],
			y: +match[2]
		};
	}

	function constructTranslate(x, y) {
		return "translate(" + x + "," + y + ")";
	}


	var wrap = d3.textwrap().method("tspans");

	var config = timelineVis.config,
		w = config.width,
		h = config.height;


	d3.json(json_endpoint, function(error, data_total) {
		d3.select(window).on("resize", display)
		data_total = config.parseData(data_total);
		data_total.forEach(function(d) {
			d.lane = 0;
			if (d.eigenfactor === null) {
				d.eigenfactor = 0;
			}
		});
		var markType = getParameterByName('m');
		if ( (markType != 'icon') && (markType != 'circle') ) {
			markType = 'circle'  // default
		}

		var dataByYear = d3.nest()
							.key(function(d) {return d.year;})
							.sortValues(function(a, b) {
								// return d3.descending(a.eigenfactor_score, b.eigenfactor_score);
								// return d3.ascending(a.pubdate, b.pubdate);
								return d3.ascending(a.title, b.title);
							})
							// .map(data_total, d3.map);
							.entries(data_total);
		dataByYear.forEach(function(d) {
			d.firstTitle = d.values[0].id;
			d.sum_eigenfactor = d3.sum(d.values, function(dd) {return dd.eigenfactor;});
			d.lane = 0;
			d.year = +d.key;
		});

		var lanes = ["Climate change"],
					laneLength = lanes.length,
				// timeBegin = new Date(String(minYear-1)),
				timeBegin = +d3.min(dataByYear, function(d) { return d.year; }) - 1,
				timeEnd = +d3.max(dataByYear, function(d) { return d.year; }) + 1;

			var m = [20, 15, 15, 150]; //top right bottom left
				// w = 960 - m[1] - m[3],
				// h = 350 - m[0] - m[2],
			w = w - m[1] - m[3];
			h = h - m[0] - m[2];
			var miniHeight = laneLength * 12 + 30,
				mainHeight = h - miniHeight - 50;

			var mainMinRad = 8,
				mainMaxRad = 18,
				miniMinRad = 5,
				miniMaxRad = 10;

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
			var efExtent = d3.extent(data_total, function(d) { return d.eigenfactor; });
			var efScaleMini = d3.scale.linear()
					.domain(efExtent)
					// .range([0, 5]);
					.range([miniMinRad, miniMaxRad]);
			var efScaleMain = d3.scale.linear()
					.domain(efExtent)
					// .range([0, 5]);
					.range([mainMinRad, mainMaxRad]);
			var efSumScale = d3.scale.linear()
					.domain(d3.extent(dataByYear, function(d) { return d.sum_eigenfactor; }))
					// .range([0, 5]);
					.range([mainMinRad, mainMaxRad]);

			var chartWidth = w + m[1] + m[3],
				chartHeight = h + m[0] + m[2];

			var chart = d3.select("#timeline")
						.append("svg")
						// .attr("width", chartWidth)
						// .attr("height", chartHeight)
						.attr("data-maximizedHeight", chartHeight)
						.attr("data-currHeight", chartHeight)
						.attr("viewBox", "0 0 " + chartWidth + " " + chartHeight)
						.attr("preserveAspectRatio", "xMidYMid meet")
						.attr("class", "chart");
			
			chart.append("defs").append("clipPath")
				.attr("id", "clip")
				.append("rect")
				.attr("width", w)
				.attr("height", mainHeight);

			var mainContainer = chart.append("g")
						.attr("transform", "translate(0," + m[0] + ")")
						.attr("width", chartWidth)
						.attr("height", mainHeight)
						.attr("class", "mainContainer");

			// var main = chart.append("g")
			var main = mainContainer.append("g")
						// .attr("transform", "translate(" + m[3] + "," + m[0] + ")")
						.attr("transform", "translate(" + m[3] + ",0)")
						.attr("width", w)
						.attr("height", mainHeight)
						.attr("class", "main");

			var miniContainer = chart.append("g")
						.attr("transform", "translate(0," + (mainHeight + m[0]) + ")")
						.attr("width", chartWidth)
						.attr("height", mainHeight)
						.attr("class", "miniContainer");

			// var mini = chart.append("g")
			var mini = miniContainer.append("g")
						// .attr("transform", "translate(" + m[3] + "," + (mainHeight + m[0]) + ")")
						.attr("transform", "translate(" + m[3] + ",0)")
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

			var mainLabelG = mainContainer.append("g")
				.attr("transform", "translate(0,"+(m[0])+")");
			var mainLabel = mainLabelG.append("text")
				.text("Number of influential articles in the year")
				// .attr("x", -m[1])
				// .attr("x", 0)
				// .attr("y", 10)
				.style("font-size", "14px")
				// .attr("text-anchor", "end")
				.attr("class", "laneText")
				.attr("id", "mainLabel");
		
			// wrap.bounds({height: mainHeight, width: m[3]}).method("tspans");
			wrap.bounds({height: mainHeight, width: (m[3] * .9)});
			// d3.select(".laneText").call(wrap);
			mainLabel.call(wrap);

			var subOffset = $( '#mainLabel' ).height();  // y offset for the sub label
			var mainLabelSub = mainLabelG.append("text")
				.attr("transform", "translate(0," + subOffset + ")")
				.text("Size of circles indicates level of influence")
				.style("font-size", "11px")
				.attr("class", "laneText")
				.attr("id", "mainLabelSub");

			wrap.bounds({height: mainHeight - subOffset, width: (m[3] * .9)});
			mainLabelSub.call(wrap);
			
			
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

			var miniLabel = miniContainer.append("g")
				.attr("transform", "translate(0,"+ m[0] +")")
				.append("text")
				.text("Select date range to focus on:")
				// .attr("x", -m[1])
				// .attr("x", 0)
				// .attr("y", 10)
				.style("font-size", "14px")
				// .attr("text-anchor", "end")
				.attr("class", "laneText");

			wrap.bounds({height: miniHeight, width: (m[3] * .9)});
			// d3.select(".laneText").call(wrap);
			miniLabel.call(wrap);

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
								.attr("class", "mainClipPath")
								.attr("clip-path", "url(#clip)");

			
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
					// d.radius = 5 + efScale(d.eigenfactor_score);
					d.radius = 1 + ( efScaleMini(d.eigenfactor) );
					return "translate(" + d.x + "," + d.y + ")";
				});

			// not currently using this
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
							// d.radius = mainMinRad + (2 * efSumScale(d.sum_eigenfactor));
							d.radius = efSumScale(d.sum_eigenfactor);
							// d.radius = mainMinRad + (d.values.length*2);
							return "translate(" + d.x + "," + d.y + ")";
						});

					var yearMarks = yearItems.append("circle")
						.attr("class", "yearMark")
						// .on('mouseover', expand)
						.on('mouseover', function(d) {
							contract();
							var sel = paperItems.filter(function(dd) {return dd.year===d.year});
							var thisYearItem = d3.select(this);
							expand(sel, thisYearItem);
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
						.attr("data-year", function(d) {return d.year;})
						.attr("transform", function(d, i) {
							d.x = 0;  //for now
							d.y = 0;  //for now
							d.idx = i;
							// d.radius = mainMinRad + (2 * efScale(d.eigenfactor));
							d.radius = efScaleMain(d.eigenfactor);
							return "translate(" + d.x + "," + d.y + ")";
						})
						.attr("title", function(d) {
								// for tooltip
								// var text = d.title
								// 			+ ", "
								// 			+ d.authors.join(", ")
								// 			+ ", "
								// 			+ d.journal
								// 			+ ", "
								// 			+ d.year;
								// return text;
							var span = $( '<span>' );
							span.append( $( '<p class="tooltip title">' ).text(d.title) ); 
							span.append( $( '<p class="tooltip authors">' ).text(d.authors.join(", ")) );
							span.append( $( '<p class="tooltip journal">' ).text(d.venue) ); 
							span.append( $( '<p class="tooltip year">' ).text(d.year) ); 
							return span.html();

							})
						.on("mouseover", function(d) {
								// var t = d3.select(this).select('.paperLabel');
								// console.log(this.getBoundingClientRect());
								// console.log($( this ).position());
								// console.log($( '.main' ).position().top + mainHeight);
							})
						.on("click", function(d) {
							var url = d.url;
							// window.open(url,'_blank');
						});

					var paperMarks = paperItems.append("circle")
						.attr("r", 0)  //for now
						.attr("class", "paperMark");

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
							// d.radius = mainMinRad + (2 * efSumScale(d.sum_eigenfactor));
							d.radius = efSumScale(d.sum_eigenfactor);
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
							// d.radius = mainMinRad + (2 * efScale(d.eigenfactor));
							d.radius = efScaleMain(d.eigenfactor);
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


			var paperLabels = paperItems.append("text")
				.attr("text-anchor", "end")
				.attr("class", "paperLabel")
				.style("display", "none")
				.attr("transform", "translate(-15,0)")  // nudge left
				// .text(function(d) {return d.title;});
				.html(function(d) {return '<a target="_blank" href="' + d.url + '">' + d.title + '</a>';});



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

			var scrollDur = 150;
			function moveBrush(direction) {
				switch (direction) {
					case 'left':
						changeExtent(Math.round(minExtent-1), Math.round(maxExtent-1), scrollDur, "linear");
						break;

					case 'right':
						changeExtent(Math.round(minExtent+1), Math.round(maxExtent+1), scrollDur, "linear");
						break;

					case 'zoomIn':
						changeExtent(Math.round(minExtent+1), Math.round(maxExtent-1), scrollDur, "linear");
						break;

					case 'zoomOut':
						changeExtent(Math.round(minExtent-1), Math.round(maxExtent+1), scrollDur, "linear");
						break;
						
				}
				return;
			}

			var scrollItems = mainClipPath.append("g")
								.attr("class", "scrollItems")
								.attr("transform", "translate(0," + (mainHeight*0.7) + ")");
			scrollItems.append("text")
				.attr("class", "leftArrow")
				.style("font-family", "FontAwesome")
				.text("\uf060")
				.attr("x", 0)
				// .attr("y", mainHeight / 2)
				// .style("font-size", "1.5em")
				.on("click", function() {
					// changeExtent(Math.round(minExtent-1), Math.round(maxExtent-1), scrollDur, "linear");
					moveBrush('left');
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
					// changeExtent(Math.round(minExtent+1), Math.round(maxExtent+1), scrollDur, "linear");
					moveBrush('right');
					});

			var zoomItems = scrollItems.append("g")
								.attr("class", "zoomItems")
								.attr("transform", "translate(" + (w-m[1]-10) + ",30)")
								.style("opacity", .01)
								.on("mouseover", zoomMouseOver)
								.on("mouseout", zoomMouseOut);
			// scrollItems.append("text")
			zoomItems.append("text")
				.attr("class", "zoomIn")
				.style("font-family", "FontAwesome")
				.text("\uf196")  // http://fontawesome.io/icon/plus-square-o/
				// .attr("x", 10)
				// .attr("y", mainHeight / 2)
				// .attr("x", w-m[1]-10)
				// .attr("y", 30)
				// .style("font-size", "1.5em")
				.on("click", function() {
					// changeExtent(Math.round(minExtent+1), Math.round(maxExtent-1), scrollDur, "linear");
					moveBrush('zoomIn')
					});
			zoomItems.append("text")
				.attr("class", "zoomOut")
				.style("font-family", "FontAwesome")
				.text("\uf147")  // http://fontawesome.io/icon/minus-square-o/
				// .attr("y", mainHeight / 2)
				// .attr("x", w-m[1]-10)
				// .attr("y", 50)
				.attr("y", 20)
				// .style("font-size", "1.5em")
				.on("click", function() {
					// changeExtent(Math.round(minExtent-1), Math.round(maxExtent+1), scrollDur, "linear");
					moveBrush('zoomOut');
					});

			function zoomMouseOver() {
				// $( '.zoomIn, .zoomOut' ).fadeTo(400, 1);
				$( '.zoomItems' ).stop().fadeTo(400, 1);
			}
			function zoomMouseOut() {
				// $( '.zoomIn, .zoomOut' ).fadeTo(400, .01);
				$( '.zoomItems' ).stop().fadeTo(400, .01);
			}

			// Icon to clear the brush. Finish initializing it in display()
			// var clearBrushIcon = d3.select(".brush").append("text")
			var clearBrushIcon = mini.append("text")
				.attr("class", "clearBrushIcon")
				.style("font-family", "FontAwesome")
				.style("font-size", "1em")
				.attr("text-anchor", "end")
				.attr("title", "Clear the timeline in order to draw a new region")
				.text("\uf00d");

			chart.on("wheel.zoom", function() {
					if (d3.event.wheelDeltaY>0) {
						moveBrush('zoomIn');
					} else if (d3.event.wheelDeltaY<0) {
						moveBrush('zoomOut');
					}
					if (d3.event.wheelDeltaX>0) {
						moveBrush('left');
					} else if (d3.event.wheelDeltaX<0) {
						moveBrush('right');
					}
				});

			// initialize brush
			var midpointYear = ( timeEnd - timeBegin ) / 2,
				brushInit = [midpointYear, midpointYear];
		
			// brush.extent(brushInit);
			mini.select(".brush").call(brush.extent(brushInit));

			display();
			
			$( document ).trigger( "timelineVis:initComplete" );


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
			// var initDuration = 1000,
			// 	initDelay = 1000;
			// changeExtent(1970, 2000, initDuration, "cubic-in-out", initDelay);
			// d3.transition("initDemoTransition").delay(initDelay + initDuration)
			// 	.each("end", demoExpand);
			// demoInit();

			// not using this currently
			function expandAll() {
				expand(paperItems);
			}
			var maxEF = d3.max(data_total, function(d) {return d.eigenfactor;});

			function clearBrush() {
				var mid = (brush.extent()[1] + brush.extent()[0]) / 2;
				changeExtent(mid, mid, 0);
			}
			
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
					// d3.select(".zoomIn").style("display", "none");
					d3.select(".zoomIn").classed("hidden", true);
				} else {
					// d3.select(".zoomIn").style("display", "");
					d3.select(".zoomIn").classed("hidden", false);
				}

				if (brush.empty()) {
					clearBrushIcon.style("display", "none");
				} else {
					clearBrushIcon.style("display", "")
						.style("opacity", 0)
						// .style("z-index", -99)
						.attr("transform", constructTranslate(maxExtentScreen-2, 15))
						.transition().duration(300)
						.style("opacity", .4);
					clearBrushIcon.on("click", function() {
						clearBrush();
						contract();
					});
				}



				// Hide main items if the brush is empty
				if (brush.empty()) {
					// yearItems.style("display", "none");
					// changeExtent(timeBegin, timeEnd, 0);
					//
					// show all main items, but keep the brush hidden
					updateMain(timeBegin,timeEnd);
					// this will remove the extent lines:
					updateExtentLines();
				} else {
					// d3.select(".brush").attr("display", "");
					updateMain(minExtent, maxExtent);
					updateExtentLines(minExtentScreen, maxExtentScreen);
				}
			}

		function updateMain(minExtent, maxExtent) {
			
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
					// updateExtentLines(minExtentScreen, maxExtentScreen);

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
						// console.log(m.attr("transform"));
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
			//
			// console.log($('.mainClipPath')[0].getBoundingClientRect());
			// console.log($('.chart')[0].getBoundingClientRect());
			labelsCollisionDetect();

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
		function expand(sel, yearItem) {
			var thisYear = sel.attr("data-year");
			var thisYearItem = yearItems.filter(function(d) {return d.year==thisYear});
			// console.log(thisYearItem);
			// contract();
			var dur = 500;
			// var sel = paperItems.filter(function(d) {return d.year===yearData.year});
			var transitionStartStyle = {'pointer-events': 'none', 'cursor': 'default'},
				transitionEndStyle = {'pointer-events': 'auto', 'cursor': 'pointer'};
			// sel.style("pointer-events", "none")
			var line = d3.svg.line().x(function(d) {return d[0]}).y(function(d) {return d[1]});
			// linedata will be an array of [x, y] values that start at the year circle and track the paper circles
			var linedata = [];
			linedata.push([0,0]);
			sel.style(transitionStartStyle)
				.transition().duration(dur)
				.attr("transform", function(d, i) {
					linedata.push([afterTransitionX(d, i), afterTransitionY(d, i)]);
					return "translate(" + afterTransitionX(d, i) + "," + afterTransitionY(d, i) + ")";
				})
				.each("start", function() {d3.select(this).classed("expanded", true)})
				// .each("end", function() {d3.select(this).style("pointer-events", "auto");});
				.each("end", function() {
					d3.select(this).style(transitionEndStyle);
				});
				
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
				// .style("pointer-events", "none")
				.style("display", "")
				.style("opacity", 0)
				.transition()
				.delay(function(d) {return dur/2 + d.idx*75;})
				.duration(dur)
				.style("opacity", 1);
			// labelsCollisionDetect();
			d3.transition().duration(dur).each("end", function() {
				thisYearItem.append("path").datum(linedata).attr("class", "joinLine").attr("d", line);
				display()
			});
		}
		// function contract(yearData) {
		function contract() {
			d3.selectAll(".joinLine").remove();
			var dur = 500;
			// var sel = paperItems.filter(function(d) {return d.year===yearData.year});
			var sel = d3.selectAll(".expanded");
			// console.log(sel.empty());
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

		function labelsCollisionDetect() {
			// detect if labels go off screen

			// function checkSingleLabel(d) {
			// 	var boundingRect = this.getBoundingClientRect();
			// 	console.log(boundingRect.width + $( this ).position().left);
			// 	if ($( this ).position().left<0) {
			// 		d3.select(this).select(".paperLabel").attr("text-anchor", "start");
			// 	} else {
			// 		d3.select(this).select(".paperLabel").attr("text-anchor", "end");
			// 	}
			// }
			function checkSingleLabel(d) {
				function wrapInAnchor(stable_url, text) {
					// return '<a target="_blank" href="http://labs.jstor.org' + stable_url + '">' + text + '</a>'
					return '<a target="_blank" href="' + stable_url + '">' + text + '</a>'
				}
				// var boundingRect = this.getBoundingClientRect();
				var thisLabel = d3.select(this).select(".paperLabel");
				// var words = thisLabel.text().split(" ");
				// thisLabel.text(d.title);
				thisLabel.html(wrapInAnchor(d.url, d.title));
				var words = d.title.split(" ");
				var giveUpThreshold = 20;
				var i = 0;
				var viewLeftEdge = $( '#timeline svg' ).position().left + m[3];
				while (true) {
					i++;
					if (i>giveUpThreshold) {
						break;
					}
					var leftPos = $( this ).position().left;
					// if (leftPos < 20) {
					// if (leftPos < m[3]) {
					if (leftPos < viewLeftEdge) {
						var numWords = words.length;
						words = words.slice(0, numWords-2);
						var shortenedTitle = words.join(" ")+"...";
						// thisLabel.text(words.join(" ")+"...");
						thisLabel.html(wrapInAnchor(d.url, shortenedTitle));
					} else {
						break;
					}
				}
				// var leftPos = $( this ).position().left;
				//
				// if (leftPos<0) {
				// 	d3.select(this).select(".paperLabel")
				// 		.text(d.title.slice(0, 10));
				// 	checkSingleLabel(d);
				// } else {
				// 	console.log('leaving recursive function')
				// }
				// return;
			}
			d3.selectAll(".paperItem.expanded")
				.each(checkSingleLabel);
		}
		
		function demoInit() {
			chart.classed("demoInProgress", true);
			clearBrush();
			contract();
			disableInteraction();
			mini.on("mousedown", demoQuit);
			function demoQuit() {
				chart.classed("demoInProgress", false);
				cursorIcon.transition(0).remove();
			}
			var transitionTimes = [
					750,  // 0: initial delay before anything happens
					1000,  // 1: time to move the cursor to the mini area
					2000,  // 2: time to draw the initial brush
					200,   // 3: delay after brush
					2000,  // 4: time to move the cursor to a main item
					3000,  // 5: delay to remove and end the demo
				];
			var cursorIcon = chart.append("text")
				.attr("class", "cursorIcon")
				.style("font-family", "FontAwesome")
				.style("font-size", "1em")
				.text("\uf245")
				// .attr("x", 100)
				// .attr("y", 300);
				// .attr("transform", "translate(100,300)");
				.attr("transform", "translate(" + w + "," + mainHeight + ")");
			// var initDuration = 1000,
			// 	initDelay = 1000;
			// changeExtent(1970, 2000, initDuration, "cubic-in-out", initDelay);
			// d3.transition("initDemoTransition").delay(initDelay + initDuration)
			// 	.each("end", demoExpand);
			var extentSelect = mini.select(".brush").select(".extent");
			// var initBrushRange = [1970, 2000];
			var yearRange = timeEnd - timeBegin;
			if (yearRange < 6) {
				var initBrushRange = [timeBegin, timeEnd];
			} else {
				var initBrushRange = [timeBegin + Math.floor(yearRange*.3), timeEnd - Math.floor(yearRange*.2)];
			}
			changeExtent(initBrushRange[0], initBrushRange[0], 0);
			// var initBrushPosition = +extentSelect.attr("x");
			var initBrushPosition = x(brush.extent()[1]) + m[3];

			// select a yearItem to expand for the demo
			var visItems = yearItems.filter(function(d) {return d.year < initBrushRange[1] && d.year > initBrushRange[0];}),
				numVisItems = visItems.size();
			if (numVisItems === 0) {
				// if there are no visible items in the range, just give up
				return;
			} else if (numVisItems === 1) {
				// if there is only one visible item, use it
				var selIndex = 0;
			} else {
				// else, use an item a little to the right of center
				var selIndex = Math.ceil(numVisItems*.55);
			};
			var demoYearItem = visItems.filter(function(d, i) {
									return i === selIndex;
								});

			if (!chart.classed("demoInProgress")) {
				// quit
				return;
			}
			

			cursorIcon.transition().delay(transitionTimes[0])
				.duration(transitionTimes[1])
				.attr("transform", 
						// constructTranslate(initBrushPosition+15, mainHeight+m[0]+(miniHeight/2))
						constructTranslate(initBrushPosition, mainHeight+m[0]+(miniHeight/2))
						)
				.each("end", function() {
					if (chart.classed("demoInProgress")) {
						demoDrawBrush();
					} else {
						demoEnd(0);
					}
				});

			function demoDrawBrush() {
				changeExtent(initBrushRange[0], initBrushRange[1], transitionTimes[2]);
				var minExtentScreen = +extentSelect.attr("x");
				var maxExtentScreen = minExtentScreen + (+extentSelect.attr("width"));
				x1.domain(brush.extent());
				cursorIcon.transition()
					.duration(transitionTimes[2])
					.attr("transform", function() {
						var xPos = x(brush.extent()[1]) + m[3];
						return constructTranslate(xPos, mainHeight+m[0]+(miniHeight/2));
					})
				.each("end", function() {
					if (chart.classed("demoInProgress")) {
						demoExpand();
					} else {
						demoEnd(0);
					}
				});
			}
			
			function demoExpand() {
				// var demoTransitionTime = 2000;
				// var demoDelayToRemove = 2000;
				// var cursorIcon = mainClipPath.append("text")
				// 	.attr("class", "cursorIcon")
				// 	.style("font-family", "FontAwesome")
				// 	.style("font-size", "1em")
				// 	.text("\uf245")
				// 	// .attr("x", 100)
				// 	// .attr("y", 300);
				// 	// .attr("transform", "translate(100,300)");
				// 	.attr("transform", "translate(" + w + "," + mainHeight + ")");

				var demoYearMark = demoYearItem.select(".yearMark");
				// console.log(demoYearItem);
				// console.log(demoYearMark);
				// console.log(demoYearMark.attr("r"));
				var translateStr = demoYearItem.attr("transform");
				// console.log(translateStr);
				var translateCoord = deconstructTranslate(translateStr);
				translateCoord.x = translateCoord.x + m[3];
				translateCoord.y = translateCoord.y + m[0] + (+demoYearMark.attr("r"));
				var translate = constructTranslate(translateCoord.x, translateCoord.y);
				// move the cursor to a year, then manually expand the year
				cursorIcon.transition("demoExpand").delay(transitionTimes[3])
					.duration(transitionTimes[4])
					.attr("transform", translate)
					.each("end", function() {
						if (chart.classed("demoInProgress")) {
							var sel = paperItems.filter(function(dd) {return dd.year==demoYearItem[0][0].__data__.year});
							expand(sel);
							demoEnd(transitionTimes[5]);
						} else {
							demoEnd(0);
						}
					});
				// cursorIcon.transition("demoEnd").delay(demoTransitionTime)
				// 	.duration(demoDelayToRemove)
				// 	.each("end", function() {
				// 		cursorIcon.remove();
				// 		contract();
				// 	});
			}

			function demoEnd(delay) {
				cursorIcon.transition("demoEnd")
					.delay(delay)
					.duration(0)
					.remove()
					.each("end", function() {
						contract();
						enableInteraction();
					});
				
			}
		}


		function testPlaceCursor() {
			var extentSelect = mini.select(".brush").select(".extent");
			// console.log(extentSelect);
			var minExtentScreen = +extentSelect.attr("x");
			var cursorIcon = mainClipPath.append("text")
				.attr("class", "cursorIcon")
				.style("font-family", "FontAwesome")
				.style("font-size", "1em")
				.text("\uf245")
				// .attr("x", 100)
				// .attr("y", 300);
				// .attr("transform", "translate(100,300)");
				.attr("transform", "translate(" + minExtentScreen + "," + (mainHeight-20) + ")");
			
		}

		function testChangeHeight() {
			// changeExtent(Math.round(minExtent+1), Math.round(maxExtent+1), 250, "linear");
			var chartHeight = +chart.attr("height");
			var currMainHeight = +main.attr("height");
			chart.transition().duration(1000).attr("height", chartHeight+100);
			main.transition().duration(1000).attr("height", currMainHeight+100);
			mini.transition().duration(1000)
				.attr("transform", "translate(" + m[3] + "," + (currMainHeight+100 + m[0]) + ")");
			d3.select("#clip rect").attr("height", currMainHeight+100);
			display();
			// console.log(d3.select("#clip").attr("height"));
		}

		// var testButton = d3.select("body").append("button")
		// 					.attr("id", "testButton")
		// 					.html("testButton")
		// 					.on("click", function() {
		// 						// minimizeTimeline();
		// 						demoInit();
		// 					});
		d3.select(".clickForDemo")
			.on("click", demoInit);

		function disableInteraction() {
			d3.select("#timeline svg").style("pointer-events", "none");
		}

		function enableInteraction() {
			d3.select("#timeline svg").style("pointer-events", null);
		}

		$( document ).on("timelineVis:contract", function() {
			contract();
		});

		$( document ).on("timelineVis:display", function() {
			display();
		});

		$( document ).on("timelineVis:clearBrush", function() {
			clearBrush();
		});
	});


}());

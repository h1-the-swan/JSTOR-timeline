// add a minimize toggle to the timeline vis

var timelineVis = timelineVis || {};

timelineVis.minimize = (function() {
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

	// should the visualization be minimized at first? true if yes (by url parameter 'minimize')
	var minimizedInit = (getParameterByName('minimize')!=null) ? true : false;;

	$( document ).on( "timelineVis:initComplete", function() {
		var chartWidth = timelineVis.config.width;
		var m = [20, 15, 15, 150]; //top right bottom left

		var chart = d3.select(".chart"),
			mainContainer = d3.select(".mainContainer"),
			miniContainer = d3.select(".miniContainer");

		var toggleMinimizeSwitch = d3.select("#timeline").insert("span", ":first-child")
					.attr("class", "toggleMinimize")
					.text("Minimize")
					.on("click", toggleMinimize);

		chart.on("click", function() {
			if (chart.classed("minimized")) {
				maximizeTimeline();
			}
		});

		if (minimizedInit) {
			minimizeTimeline();
		}


		function toggleMinimize() {
			var isMinimized = chart.classed("minimized");
			if (isMinimized) {
				maximizeTimeline();
			} else {
				minimizeTimeline();
			}
		}

		function minimizeTimeline() {
			// clearBrush();
			var currChartHeight = chart.attr("data-maximizedHeight");
			var currMainHeight = mainContainer.attr("height");
			var currMiniTranslate = miniContainer.attr("transform");
			mainContainer.transition("minimize").duration(500)
				.attr("data-maximizedHeight", currMainHeight)
				.attr("height", 0)
				.style("opacity", 0)
				.each("end", function() {
					d3.select(this).attr("display", "none");
				});
				// .attr("display", "none");
			chart.classed("minimized", true)
				.transition("minimize").duration(500)
				// .attr("data-maximizedHeight", currChartHeight)
				.attr("data-currHeight", currChartHeight-currMainHeight)
				.attr("viewBox", "0 0 " + chartWidth + " " + (currChartHeight-currMainHeight));
				// .attr("height", currChartHeight-currMainHeight);
			miniContainer.transition("minimize").duration(500)
				.attr("data-maximizedTranslate", currMiniTranslate)
				// .attr("transform", "translate(" + m[3] + "," + m[0] + ")")
				.attr("transform", "translate(0," + m[0] + ")")
				// .each("end", clearBrush);
				.each("end", function() {
					$( document ).trigger( "timelineVis:clearBrush" );
				});
			// extentLines.forEach(function(sel) {sel.style("display", "none");});
			toggleMinimizeSwitch.text("Maximize");
			// contract();
			// display();
			$( document ).trigger( "timelineVis:contract" );
			$( document ).trigger( "timelineVis:display" );
		}

		function maximizeTimeline() {
			var maximizedChartHeight = chart.attr("data-maximizedHeight") || (h + m[0] + m[2]);
			var maximizedMainHeight = mainContainer.attr("data-maximizedHeight") || mainHeight;
			var maximizedMiniTranslate = miniContainer.attr("data-maximizedTranslate") || "translate(" + m[3] + "," + (maximizedMainHeight + m[0]) + ")";
			mainContainer.attr("display", "")
				.transition("maximize").duration(500)
				.attr("height", maximizedMainHeight)
				.each("end", function() {
					d3.select(this).transition("maximize").duration(300)
						.style("opacity", 1);
				});
				// .style("opacity", 1);
			chart.classed("minimized", false)
				.transition("maximize").duration(500)
				.attr("data-currHeight", maximizedChartHeight)
				.attr("viewBox", "0 0 " + chartWidth + " " + maximizedChartHeight);
				// .attr("height", maximizedChartHeight);
			miniContainer.transition("maximize").duration(500)
				.attr("transform", maximizedMiniTranslate);
			toggleMinimizeSwitch.text("Minimize");
			// display();
			$( document ).trigger( "timelineVis:display" );
		}

	});

}());

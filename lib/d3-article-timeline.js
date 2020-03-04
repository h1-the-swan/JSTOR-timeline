(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("d3-article-timeline", [], factory);
	else if(typeof exports === 'object')
		exports["d3-article-timeline"] = factory();
	else
		root["d3-article-timeline"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "timelineVis", {
  enumerable: true,
  get: function get() {
    return _timelineVis_Main.default;
  }
});

var _timelineVis_Main = _interopRequireDefault(__webpack_require__(/*! ./timelineVis_Main.js */ "./src/timelineVis_Main.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/timelineVis_Main.js":
/*!*********************************!*\
  !*** ./src/timelineVis_Main.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// building off http://bl.ocks.org/bunkat/2338034
//
//
var timelineVis = timelineVis || {};

timelineVis.config = function () {
  var width = 960,
      height = 350; // these properties ("authors", "eigenfactor", etc.) need to be set properly according to the data

  var parseData = function parseData(data) {
    data.forEach(function (d) {
      d.authors = d["authors"]; // list of author names

      d.eigenfactor = d["eigenfactor_score"];
      d.venue = d["journal"];
      d.year = d["year"];
      d.url = "http://labs.jstor.org" + d["stable_url"];
    });
    return data;
  };

  return {
    width: width,
    height: height,
    parseData: parseData
  };
}();

timelineVis.timelineVis = function () {
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
  d3.json(json_endpoint, function (error, data_total) {
    d3.select(window).on("resize", display);
    data_total = config.parseData(data_total);
    data_total.forEach(function (d) {
      d.lane = 0;

      if (d.eigenfactor === null) {
        d.eigenfactor = 0;
      }
    });
    var markType = getParameterByName('m');

    if (markType != 'icon' && markType != 'circle') {
      markType = 'circle'; // default
    }

    var dataByYear = d3.nest().key(function (d) {
      return d.year;
    }).sortValues(function (a, b) {
      // return d3.descending(a.eigenfactor_score, b.eigenfactor_score);
      // return d3.ascending(a.pubdate, b.pubdate);
      return d3.ascending(a.title, b.title);
    }) // .map(data_total, d3.map);
    .entries(data_total);
    dataByYear.forEach(function (d) {
      d.firstTitle = d.values[0].id;
      d.sum_eigenfactor = d3.sum(d.values, function (dd) {
        return dd.eigenfactor;
      });
      d.lane = 0;
      d.year = +d.key;
    });
    var maxDataByYear = d3.max(dataByYear, function (d) {
      return d.values.length;
    });
    var lanes = ["Climate change"],
        laneLength = lanes.length,
        // timeBegin = new Date(String(minYear-1)),
    timeBegin = +d3.min(dataByYear, function (d) {
      return d.year;
    }) - 1,
        timeEnd = +d3.max(dataByYear, function (d) {
      return d.year;
    }) + 1;
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
    var minExtent, maxExtent; // these will be the lower and upper years displayed in main

    var stylesBase = {
      'opacity': .2
    };
    var stylesVisible = {
      'opacity': 1
    }; //scales

    var x = d3.scale.linear().domain([timeBegin, timeEnd]).range([0, w]);
    var x1 = d3.scale.linear().range([0, w]);
    var y1 = d3.scale.linear().domain([0, laneLength]).range([0, mainHeight]);
    var y2 = d3.scale.linear().domain([0, laneLength]).range([0, miniHeight]);
    var efExtent = d3.extent(data_total, function (d) {
      return d.eigenfactor;
    });
    var efScaleMini = d3.scale.linear().domain(efExtent) // .range([0, 5]);
    .range([miniMinRad, miniMaxRad]);
    var efScaleMain = d3.scale.linear().domain(efExtent) // .range([0, 5]);
    .range([mainMinRad, mainMaxRad]);
    var efSumScale = d3.scale.linear().domain(d3.extent(dataByYear, function (d) {
      return d.sum_eigenfactor;
    })) // .range([0, 5]);
    .range([mainMinRad, mainMaxRad]);
    var chartWidth = w + m[1] + m[3],
        chartHeight = h + m[0] + m[2];
    var chart = d3.select("#timeline").append("svg") // .attr("width", chartWidth)
    // .attr("height", chartHeight)
    .attr("data-maximizedHeight", chartHeight).attr("data-currHeight", chartHeight).attr("viewBox", "0 0 " + chartWidth + " " + chartHeight).attr("preserveAspectRatio", "xMidYMid meet").attr("class", "chart");
    chart.append("defs").append("clipPath").attr("id", "clip").append("rect").attr("width", w).attr("height", mainHeight);
    var mainContainer = chart.append("g").attr("transform", "translate(0," + m[0] + ")").attr("width", chartWidth).attr("height", mainHeight).attr("class", "mainContainer"); // var main = chart.append("g")

    var main = mainContainer.append("g") // .attr("transform", "translate(" + m[3] + "," + m[0] + ")")
    .attr("transform", "translate(" + m[3] + ",0)").attr("width", w).attr("height", mainHeight).attr("class", "main");
    var miniContainer = chart.append("g").attr("transform", "translate(0," + (mainHeight + m[0]) + ")").attr("width", chartWidth).attr("height", mainHeight).attr("class", "miniContainer"); // var mini = chart.append("g")

    var mini = miniContainer.append("g") // .attr("transform", "translate(" + m[3] + "," + (mainHeight + m[0]) + ")")
    .attr("transform", "translate(" + m[3] + ",0)").attr("width", w).attr("height", miniHeight).attr("class", "mini"); //main lanes and texts

    var mainLaneLinesG = main.append("g");

    for (var i = 0, len = lanes.length; i < len; i++) {
      mainLaneLinesG.append("line").attr("x1", m[1]).attr("y1", function () {
        return y2(i);
      }).attr("x2", w).attr("y2", function () {
        return y2(i);
      }).attr("class", "laneLine").attr("stroke", "lightgray");
    }

    var mainLabelG = mainContainer.append("g").attr("transform", "translate(0," + m[0] + ")");
    var mainLabel = mainLabelG.append("text").text("Number of influential articles in the year") // .attr("x", -m[1])
    // .attr("x", 0)
    // .attr("y", 10)
    .style("font-size", "14px") // .attr("text-anchor", "end")
    .attr("class", "laneText").attr("id", "mainLabel"); // wrap.bounds({height: mainHeight, width: m[3]}).method("tspans");

    wrap.bounds({
      height: mainHeight,
      width: m[3] * .9
    }); // d3.select(".laneText").call(wrap);

    mainLabel.call(wrap);
    var subOffset = $('#mainLabel').height(); // y offset for the sub label

    var mainLabelSub = mainLabelG.append("text").attr("transform", "translate(0," + subOffset + ")").text("Size of circles indicates level of influence").style("font-size", "11px").attr("class", "laneText").attr("id", "mainLabelSub");
    wrap.bounds({
      height: mainHeight - subOffset,
      width: m[3] * .9
    });
    mainLabelSub.call(wrap); //mini lanes and texts

    var miniLaneLinesG = mini.append("g");

    for (var i = 0, len = lanes.length; i < len; i++) {
      miniLaneLinesG.append("line").attr("x1", m[1]).attr("y1", function () {
        return y2(i);
      }).attr("x2", w).attr("y2", function () {
        return y2(i);
      }).attr("class", "laneLine").attr("stroke", "lightgray");
    }

    var miniLabel = miniContainer.append("g").attr("transform", "translate(0," + m[0] + ")").append("text").text("Select date range to focus on:") // .attr("x", -m[1])
    // .attr("x", 0)
    // .attr("y", 10)
    .style("font-size", "14px") // .attr("text-anchor", "end")
    .attr("class", "laneText");
    wrap.bounds({
      height: miniHeight,
      width: m[3] * .9
    }); // d3.select(".laneText").call(wrap);

    miniLabel.call(wrap); // mini.append("g").selectAll(".laneText")
    // 	.data(lanes)
    // 	.enter().append("text")
    // 	.text(function(d) {return d;})
    // 	.attr("x", -m[1])
    // 	.attr("y", function(d, i) {return y2(i + .5);})
    // 	.attr("dy", ".5ex")
    // 	.attr("text-anchor", "end")
    // 	.attr("class", "laneText");
    // Axes

    var xAxisMini = d3.svg.axis().orient("bottom") // .ticks(5)
    .scale(x).tickFormat(d3.format("d"));
    mini.append("g").attr("class", "xaxis").attr("transform", "translate(0," + miniHeight + ")").call(xAxisMini);
    var xAxisMain = d3.svg.axis().orient("top").scale(x1).tickFormat(d3.format("d"));
    var xAxisMainObj = main.append("g").attr("class", "xaxis").call(xAxisMain);
    var mainClipPath = main.append("g").attr("class", "mainClipPath").attr("clip-path", "url(#clip)"); //mini items
    // note: mouseover events will not play well with the brush

    var miniItems = mini.append("g").selectAll(".miniItem").data(data_total).enter().append("g").attr("class", "miniItem").attr("transform", function (d) {
      d.x = x(d.year); // d.y = 0;  // for now

      d.y = miniHeight / 2; // d.radius = 5 + efScale(d.eigenfactor_score);

      d.radius = 1 + efScaleMini(d.eigenfactor);
      return "translate(" + d.x + "," + d.y + ")";
    }); // not currently using this

    function stackItems(items, scale) {
      var yearsList = [];
      items.each(function (d) {
        if (!(d.year in yearsList)) {
          yearsList.push(d.year);
        }
      });
      var maxRad = d3.max(items[0], function (d) {
        return d.__data__.radius;
      });

      for (var i = 0, len = yearsList.length; i < len; i++) {
        thisYearMini = items.filter(function (d) {
          return d.year == yearsList[i];
        });
        var y = 0;
        thisYearMini.each(function (d) {
          if (y == 0) {
            y = scale(d.lane) + maxRad;
          } else {
            y = y + 2 * d.radius;
          }

          d.y = y;
          d3.select(this).attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
          });
        });
      }
    } // stackItems(miniItems, y2);


    var miniMarkOpacity = Math.max(1 / maxDataByYear, 0.3);
    var miniMarks = miniItems.append("circle").attr("class", "miniMark").attr("r", function (d) {
      return d.radius;
    }) // .style(stylesBase);
    .style("opacity", miniMarkOpacity);

    switch (markType) {
      case 'circle':
        //main items
        var yearItems = mainClipPath.append("g").selectAll(".yearItem").data(dataByYear).enter().append("g").attr("class", "yearItem").attr("transform", function (d) {
          d.x = 0; //for now

          d.y = 0; //for now
          // d.radius = mainMinRad + (2 * efSumScale(d.sum_eigenfactor));

          d.radius = efSumScale(d.sum_eigenfactor); // d.radius = mainMinRad + (d.values.length*2);

          return "translate(" + d.x + "," + d.y + ")";
        });
        var yearMarks = yearItems.append("circle").attr("class", "yearMark") // .on('mouseover', expand)
        .on('mouseover', function (d) {
          contract();
          var sel = paperItems.filter(function (dd) {
            return dd.year === d.year;
          });
          var thisYearItem = d3.select(this);
          expand(sel, thisYearItem);
        }) // .on('mouseout', contract)
        .style(stylesVisible); //label for number of papers

        yearItems.append("text").attr("text-anchor", "middle").attr("y", ".3em") //nudge
        .attr("class", "numIndicator").text(function (d) {
          return d.values.length;
        });
        var paperItems = yearItems.append("g").selectAll(".paperItem").data(function (d) {
          return d.values;
        }).enter().append("g").attr("class", "paperItem").attr("data-year", function (d) {
          return d.year;
        }).attr("transform", function (d, i) {
          d.x = 0; //for now

          d.y = 0; //for now

          d.idx = i; // d.radius = mainMinRad + (2 * efScale(d.eigenfactor));

          d.radius = efScaleMain(d.eigenfactor);
          return "translate(" + d.x + "," + d.y + ")";
        }).attr("title", function (d) {
          // for tooltip
          // var text = d.title
          // 			+ ", "
          // 			+ d.authors.join(", ")
          // 			+ ", "
          // 			+ d.journal
          // 			+ ", "
          // 			+ d.year;
          // return text;
          var span = $('<span>');
          span.append($('<p class="tooltip title">').text(d.title));
          span.append($('<p class="tooltip authors">').text(d.authors.join(", ")));
          span.append($('<p class="tooltip journal">').text(d.venue));
          span.append($('<p class="tooltip year">').text(d.year));
          return span.html();
        }).on("mouseover", function (d) {// var t = d3.select(this).select('.paperLabel');
          // console.log(this.getBoundingClientRect());
          // console.log($( this ).position());
          // console.log($( '.main' ).position().top + mainHeight);
        }).on("click", function (d) {
          var url = d.url; // window.open(url,'_blank');
        });
        var paperMarks = paperItems.append("circle").attr("r", 0) //for now
        .attr("class", "paperMark");
        break;

      case 'icon':
        //main items
        var yearItems = mainClipPath.append("g").selectAll(".yearItem").data(dataByYear).enter().append("g").attr("class", "yearItem").attr("transform", function (d) {
          d.x = 0; //for now

          d.y = 0; //for now
          // d.radius = mainMinRad + (2 * efSumScale(d.sum_eigenfactor));

          d.radius = efSumScale(d.sum_eigenfactor);
          return "translate(" + d.x + "," + d.y + ")";
        });
        var paperItems = yearItems.append("g").selectAll(".paperItem").data(function (d) {
          return d.values;
        }).enter().append("g").attr("class", "paperItem").attr("transform", function (d, i) {
          d.x = 0; //for now

          d.y = 0; //for now

          d.idx = i; // d.radius = mainMinRad + (2 * efScale(d.eigenfactor));

          d.radius = efScaleMain(d.eigenfactor);
          return "translate(" + d.x + "," + d.y + ")";
        });
        var paperMarks = paperItems.append("text").attr("class", "paperMark").style("font-family", "FontAwesome").text("\uF0F6") // .on('mouseover', expand)
        .attr("text-anchor", "middle").on('mouseover', function (d) {
          contract();
          var sel = paperItems.filter(function (dd) {
            return dd.year === d.year;
          });
          expand(sel);
        }); // .on('mouseout', contract)

        var bbox = paperMarks.node().getBBox();
        paperItems.insert("rect", ".paperMark").attr("x", bbox.x).attr("y", bbox.y).attr("width", bbox.width).attr("height", bbox.height).style("fill", "white"); // //main items
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

    var paperLabels = paperItems.append("text").attr("text-anchor", "end").attr("class", "paperLabel").style("display", "none").attr("transform", "translate(-15,0)") // nudge left
    // .text(function(d) {return d.title;});
    .html(function (d) {
      return '<a target="_blank" href="' + d.url + '">' + d.title + '</a>';
    }); //mini labels
    // mini.append("g").selectAll(".miniLabels")
    // 	.data(data)
    // 	.enter().append("text")
    // 	.text(function(d) {return d.id;})
    // 	.attr("x", function(d) {return x(d.start);})
    // 	.attr("y", function(d) {return y2(d.lane + .5);})
    // 	.attr("dy", ".5ex");
    //brush

    var brush = d3.svg.brush().x(x).on("brush", display);
    mini.append("g").attr("class", "x brush").call(brush).selectAll("rect").attr("y", 1).attr("height", miniHeight - 1);
    var extentLines = [];

    for (var i = 0; i < 2; i++) {
      extentLines.push(chart.append("line").attr("class", "extentLine"));
    }

    function updateExtentLines(left, right) {
      if (brush.empty()) {
        extentLines.forEach(function (sel) {
          sel.style("display", "none");
        });
      } else {
        extentLines.forEach(function (sel) {
          sel.style("display", "");
        });
        extentLines[0].attr("x1", m[3]).attr("y1", m[0]).attr("x2", left + m[3]).attr("y2", mainHeight + m[0]);
        extentLines[1].attr("x1", w + m[3]).attr("y1", m[0]).attr("x2", right + m[3]).attr("y2", mainHeight + m[0]);
      }
    }

    var scrollDur = 150;

    function moveBrush(direction) {
      // if (brush.empty() || minExtent<timeBegin || maxExtent>timeEnd) {
      if (brush.empty()) {
        minExtent = (timeEnd + timeBegin) / 2;
        maxExtent = (timeEnd + timeBegin) / 2 + 1;
        changeExtent(minExtent, maxExtent, 0);
        return;
      }

      switch (direction) {
        case 'left':
          changeExtent(Math.round(minExtent - 1), Math.round(maxExtent - 1), scrollDur, "linear");
          break;

        case 'right':
          changeExtent(Math.round(minExtent + 1), Math.round(maxExtent + 1), scrollDur, "linear");
          break;

        case 'zoomIn':
          changeExtent(Math.round(minExtent + 1), Math.round(maxExtent - 1), scrollDur, "linear");
          break;

        case 'zoomOut':
          changeExtent(Math.round(minExtent - 1), Math.round(maxExtent + 1), scrollDur, "linear");
          break;
      }

      return;
    }

    var scrollItems = mainClipPath.append("g").attr("class", "scrollItems").attr("transform", "translate(0," + mainHeight * 0.7 + ")");
    scrollItems.append("text").attr("class", "leftArrow").style("font-family", "FontAwesome").text("\uF060").attr("x", 0) // .attr("y", mainHeight / 2)
    // .style("font-size", "1.5em")
    .on("click", function () {
      // changeExtent(Math.round(minExtent-1), Math.round(maxExtent-1), scrollDur, "linear");
      moveBrush('left');
    });
    scrollItems.append("text").attr("class", "rightArrow").style("font-family", "FontAwesome").text("\uF061").attr("text-anchor", "end").attr("x", w) // .attr("y", mainHeight / 2)
    // .style("font-size", "1.5em")
    .on("click", function () {
      // changeExtent(Math.round(minExtent+1), Math.round(maxExtent+1), scrollDur, "linear");
      moveBrush('right');
    });
    var zoomItems = scrollItems.append("g").attr("class", "zoomItems").attr("transform", "translate(" + (w - m[1] - 10) + ",30)").style("opacity", .01).on("mouseover", zoomMouseOver).on("mouseout", zoomMouseOut); // scrollItems.append("text")

    zoomItems.append("text").attr("class", "zoomIn").style("font-family", "FontAwesome").text("\uF196") // http://fontawesome.io/icon/plus-square-o/
    // .attr("x", 10)
    // .attr("y", mainHeight / 2)
    // .attr("x", w-m[1]-10)
    // .attr("y", 30)
    // .style("font-size", "1.5em")
    .on("click", function () {
      // changeExtent(Math.round(minExtent+1), Math.round(maxExtent-1), scrollDur, "linear");
      moveBrush('zoomIn');
    });
    zoomItems.append("text").attr("class", "zoomOut").style("font-family", "FontAwesome").text("\uF147") // http://fontawesome.io/icon/minus-square-o/
    // .attr("y", mainHeight / 2)
    // .attr("x", w-m[1]-10)
    // .attr("y", 50)
    .attr("y", 20) // .style("font-size", "1.5em")
    .on("click", function () {
      // changeExtent(Math.round(minExtent-1), Math.round(maxExtent+1), scrollDur, "linear");
      moveBrush('zoomOut');
    });

    function zoomMouseOver() {
      // $( '.zoomIn, .zoomOut' ).fadeTo(400, 1);
      $('.zoomItems').stop().fadeTo(400, 1);
    }

    function zoomMouseOut() {
      // $( '.zoomIn, .zoomOut' ).fadeTo(400, .01);
      $('.zoomItems').stop().fadeTo(400, .01);
    } // Icon to clear the brush. Finish initializing it in display()
    // var clearBrushIcon = d3.select(".brush").append("text")


    var clearBrushIcon = mini.append("text").attr("class", "clearBrushIcon").style("font-family", "FontAwesome").style("font-size", "1em").attr("text-anchor", "end").attr("title", "Clear the timeline in order to draw a new region").text("\uF00D");
    chart.on("wheel.zoom", function () {
      if (d3.event.wheelDeltaY > 0) {
        moveBrush('zoomIn');
      } else if (d3.event.wheelDeltaY < 0) {
        moveBrush('zoomOut');
      }

      if (d3.event.wheelDeltaX > 0) {
        moveBrush('left');
      } else if (d3.event.wheelDeltaX < 0) {
        moveBrush('right');
      }
    }); // initialize brush

    var midpointYear = (timeEnd + timeBegin) / 2,
        brushInit = [midpointYear, midpointYear]; // brush.extent(brushInit);

    mini.select(".brush").call(brush.extent(brushInit));
    display();
    $(document).trigger("timelineVis:initComplete"); // // I'm not sure there's a way to use d3 transitions to control the brush, but here's a hacky way of doing it manually.
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
    } //
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

    var maxEF = d3.max(data_total, function (d) {
      return d.eigenfactor;
    });

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
      var maxExtentScreen = minExtentScreen + +extentSelect.attr("width"); // console.log(x.invert(maxExtentScreen));
      // var minExtent = brush.extent()[0],
      // 	maxExtent = brush.extent()[1],

      minExtent = x.invert(minExtentScreen);
      maxExtent = x.invert(maxExtentScreen); // hide arrows if you can't go any further

      if (minExtent <= timeBegin) {
        d3.select(".leftArrow").style("display", "none");
      } else {
        d3.select(".leftArrow").style("display", "");
      }

      if (maxExtent >= timeEnd) {
        d3.select(".rightArrow").style("display", "none");
      } else {
        d3.select(".rightArrow").style("display", "");
      } // hide the zoomIn button if we're zoomed in too far


      if (maxExtent - minExtent <= 2) {
        // d3.select(".zoomIn").style("display", "none");
        d3.select(".zoomIn").classed("hidden", true);
      } else {
        // d3.select(".zoomIn").style("display", "");
        d3.select(".zoomIn").classed("hidden", false);
      }

      if (brush.empty()) {
        clearBrushIcon.style("display", "none");
        d3.select(".leftArrow").style("display", "none");
        d3.select(".rightArrow").style("display", "none");
      } else {
        clearBrushIcon.style("display", "").style("opacity", 0) // .style("z-index", -99)
        .attr("transform", constructTranslate(maxExtentScreen - 2, 15)).transition().duration(300).style("opacity", .4);
        clearBrushIcon.on("click", function () {
          clearBrush();
          contract();
        });
      } // Hide main items if the brush is empty


      if (brush.empty()) {
        // yearItems.style("display", "none");
        // changeExtent(timeBegin, timeEnd, 0);
        //
        // show all main items, but keep the brush hidden
        updateMain(timeBegin, timeEnd); // this will remove the extent lines:

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
          var visItems = yearItems.filter(function (d) {
            return d.year < maxExtent && d.year > minExtent;
          });
          var notVisItems = yearItems.filter(function (d) {
            return d.year >= maxExtent || d.year <= minExtent;
          });
          visItems.style("display", "");
          notVisItems.style("display", "none"); // console.log(brush.extent());
          // mini.select(".brush")
          // 	.call(brush.extent([minExtent, maxExtent]));
          // console.log(maxExtent-minExtent);

          x1.domain([minExtent, maxExtent]); // update styles of mini items that are visible in the main display.
          // reset all to normal, then style just the visible ones
          // miniItems.style(stylesBase);

          miniItems.style(stylesVisible);
          miniItems.filter(function (d) {
            console.log(minExtent);
            var match = false;
            visItems.forEach(function (dd) {
              if (d.id == dd.firstTitle) {
                match = true;
              }
            });
            return match;
          }).style(stylesVisible); //update main item marks

          visItems.attr("transform", function (d) {
            d.x = x1(d.year);
            d.y = y1(d.lane) + mainMinRad;
            return "translate(" + d.x + "," + d.y + ")";
          });
          yearMarks.attr("r", function (d) {
            return d.radius;
          });
          break;

        case 'icon':
          var visItems = yearItems.filter(function (d) {
            return d.year < maxExtent && d.year > minExtent;
          });
          var notVisItems = yearItems.filter(function (d) {
            return d.year >= maxExtent || d.year <= minExtent;
          });
          visItems.style("display", "");
          notVisItems.style("display", "none"); // console.log(brush.extent());
          // mini.select(".brush")
          // 	.call(brush.extent([minExtent, maxExtent]));
          // console.log(maxExtent-minExtent);
          // updateExtentLines(minExtentScreen, maxExtentScreen);

          x1.domain([minExtent, maxExtent]); // update styles of mini items that are visible in the main display.
          // reset all to normal, then style just the visible ones

          miniItems.style(stylesBase);
          miniItems.filter(function (d) {
            var match = false;
            visItems.forEach(function (dd) {
              if (d.id == dd.firstTitle) {
                match = true;
              }
            });
            return match;
          }).style(stylesVisible); //update main item marks

          visItems.attr("transform", function (d) {
            // d.x = x1(d.year) - 10;
            d.x = x1(d.year);
            d.y = y1(d.lane) + 20;
            return "translate(" + d.x + "," + d.y + ")";
          });
          paperMarks.attr("transform", function (d) {
            return "translate(" + d.idx / 2 + "," + d.idx * 3 + ")"; // return "translate(" + "0" + "," + d.idx*3 + ")";
          }).style("fill", "black").style("opacity", 1).style("font-size", "1.5em"); // .style("font-size", function(d) {return (d.radius/10) + "em";});

          paperItems.each(function (d) {
            var item = d3.select(this);
            var m = item.select(".paperMark");
            var bbox = m.node().getBBox();
            item.select("rect").attr("x", bbox.x).attr("y", bbox.y).attr("width", bbox.width).attr("height", bbox.height).attr("transform", m.attr("transform")).style("fill", "white"); // console.log(m.attr("transform"));
          });
          break;
      } //update the item labels
      // var rotate = -20;


      function _rotate(rotation) {
        labels.attr("transform", function (d) {
          return "rotate(" + rotation + "," + d.x + "," + d.y + ")";
        });
      } // constraint relaxation
      // http://bl.ocks.org/syntagmatic/4053096


      var alpha = 1;
      var spacing = 15;

      function relax(labels) {
        // Move text if overlapping (recursively)
        var again = false;
        labels.each(function (d) {
          // console.log(d3.select(this).attr("x"));
          var a = this;
          var da = d3.select(a);
          var ax = da.attr("x"); // console.log(ax);

          labels.each(function (dd) {
            var b = this; // if (a == b) {
            // 	return;
            // }

            var db = d3.select(b);
            var bx = db.attr("x");
            var deltaX = ax - bx; // console.log(deltaX);
            // if (Math.abs(deltaX) > spacing) {
            // 	return;
            // }

            if (a != b && Math.abs(deltaX) < spacing) {
              // console.log(deltaX);
              // collision detected
              again = true;
              var sign = deltaX > 0 ? 1 : -1; // console.log(a);
              // console.log(db.attr("x"));

              d.x = +ax + sign * alpha;
              dd.x = +bx - sign * alpha;
              da.attr("x", d.x);
              db.attr("x", dd.x); // d3.select(this).attr("transform", "translate(500, 0)");
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
          _rotate(-20); //

        }
      } // labels = itemRects.selectAll(".yearItemLabel")
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


      xAxisMainObj.call(xAxisMain); // // only use one of the following (or none)
      // _rotate(-20);
      // relax(labels);
      //
      // console.log($('.mainClipPath')[0].getBoundingClientRect());
      // console.log($('.chart')[0].getBoundingClientRect());

      labelsCollisionDetect();
    }

    var afterTransitionX = function afterTransitionX(d, i) {
      // return x1(+d.year) + ((i*i)*3);
      return i * i * 3;
    };

    var afterTransitionY = function afterTransitionY(d, i) {
      // return y1(d.lane) + 2.2*rad*i+5*rad;
      return 2.1 * mainMinRad * i + 3 * mainMinRad;
    }; // function expand(yearData) {


    function expand(sel, yearItem) {
      var thisYear = sel.attr("data-year");
      var thisYearItem = yearItems.filter(function (d) {
        return d.year == thisYear;
      }); // console.log(thisYearItem);
      // contract();

      var dur = 500; // var sel = paperItems.filter(function(d) {return d.year===yearData.year});

      var transitionStartStyle = {
        'pointer-events': 'none',
        'cursor': 'default'
      },
          transitionEndStyle = {
        'pointer-events': 'auto',
        'cursor': 'pointer'
      }; // sel.style("pointer-events", "none")

      var line = d3.svg.line().x(function (d) {
        return d[0];
      }).y(function (d) {
        return d[1];
      }); // linedata will be an array of [x, y] values that start at the year circle and track the paper circles

      var linedata = [];
      linedata.push([0, 0]);
      sel.style(transitionStartStyle).transition().duration(dur).attr("transform", function (d, i) {
        linedata.push([afterTransitionX(d, i), afterTransitionY(d, i)]);
        return "translate(" + afterTransitionX(d, i) + "," + afterTransitionY(d, i) + ")";
      }).each("start", function () {
        d3.select(this).classed("expanded", true);
      }) // .each("end", function() {d3.select(this).style("pointer-events", "auto");});
      .each("end", function () {
        d3.select(this).style(transitionEndStyle);
      }); // .style("pointer-events", "auto");

      sel.selectAll(".paperMark").transition().duration(dur) // .style("font-size", function(d) {return (d.radius/10) + "em";})
      .styleTween("font-size", function (d) {
        return d3.interpolate(this.style.getPropertyValue("font-size"), d.radius / 10 + "em");
      }).attr("r", function (d) {
        return d.radius;
      }); //make labels appear

      sel.selectAll(".paperLabel") // .style("pointer-events", "none")
      .style("display", "").style("opacity", 0).transition().delay(function (d) {
        return dur / 2 + d.idx * 75;
      }).duration(dur).style("opacity", 1); // labelsCollisionDetect();

      d3.transition().duration(dur).each("end", function () {
        thisYearItem.append("path").datum(linedata).attr("class", "joinLine").attr("d", line);
        display();
      });
    } // function contract(yearData) {


    function contract() {
      d3.selectAll(".joinLine").remove();
      var dur = 500; // var sel = paperItems.filter(function(d) {return d.year===yearData.year});

      var sel = d3.selectAll(".expanded"); // console.log(sel.empty());

      sel.transition().duration(dur).attr("transform", "translate(0,0)").each("end", function () {
        d3.select(this).classed("expanded", false).style("pointer-events", "");
      });
      sel.selectAll(".paperMark").transition().duration(dur * 1.5).styleTween("font-size", function (d) {
        return d3.interpolate(this.style.getPropertyValue("font-size"), "1.5em");
      }).attr("r", 0);
      sel.selectAll(".paperLabel").style("display", "none");
    } // function expand(yearData) {
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
          return '<a target="_blank" href="' + stable_url + '">' + text + '</a>';
        } // var boundingRect = this.getBoundingClientRect();


        var thisLabel = d3.select(this).select(".paperLabel"); // var words = thisLabel.text().split(" ");
        // thisLabel.text(d.title);

        thisLabel.html(wrapInAnchor(d.url, d.title));
        var words = d.title.split(" ");
        var giveUpThreshold = 20;
        var i = 0;
        var viewLeftEdge = $('#timeline svg').position().left + m[3];

        while (true) {
          i++;

          if (i > giveUpThreshold) {
            break;
          }

          var leftPos = $(this).position().left; // if (leftPos < 20) {
          // if (leftPos < m[3]) {

          if (leftPos < viewLeftEdge) {
            var numWords = words.length;
            words = words.slice(0, numWords - 2);
            var shortenedTitle = words.join(" ") + "..."; // thisLabel.text(words.join(" ")+"...");

            thisLabel.html(wrapInAnchor(d.url, shortenedTitle));
          } else {
            break;
          }
        } // var leftPos = $( this ).position().left;
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

      d3.selectAll(".paperItem.expanded").each(checkSingleLabel);
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

      var transitionTimes = [750, // 0: initial delay before anything happens
      1000, // 1: time to move the cursor to the mini area
      2000, // 2: time to draw the initial brush
      200, // 3: delay after brush
      2000, // 4: time to move the cursor to a main item
      3000 // 5: delay to remove and end the demo
      ];
      var cursorIcon = chart.append("text").attr("class", "cursorIcon").style("font-family", "FontAwesome").style("font-size", "1em").text("\uF245") // .attr("x", 100)
      // .attr("y", 300);
      // .attr("transform", "translate(100,300)");
      .attr("transform", "translate(" + w + "," + mainHeight + ")"); // var initDuration = 1000,
      // 	initDelay = 1000;
      // changeExtent(1970, 2000, initDuration, "cubic-in-out", initDelay);
      // d3.transition("initDemoTransition").delay(initDelay + initDuration)
      // 	.each("end", demoExpand);

      var extentSelect = mini.select(".brush").select(".extent"); // var initBrushRange = [1970, 2000];

      var yearRange = timeEnd - timeBegin;

      if (yearRange < 6) {
        var initBrushRange = [timeBegin, timeEnd];
      } else {
        var initBrushRange = [timeBegin + Math.floor(yearRange * .3), timeEnd - Math.floor(yearRange * .2)];
      }

      changeExtent(initBrushRange[0], initBrushRange[0], 0); // var initBrushPosition = +extentSelect.attr("x");

      var initBrushPosition = x(brush.extent()[1]) + m[3]; // select a yearItem to expand for the demo

      var visItems = yearItems.filter(function (d) {
        return d.year < initBrushRange[1] && d.year > initBrushRange[0];
      }),
          numVisItems = visItems.size();

      if (numVisItems === 0) {
        // if there are no visible items in the range, just give up
        return;
      } else if (numVisItems === 1) {
        // if there is only one visible item, use it
        var selIndex = 0;
      } else {
        // else, use an item a little to the right of center
        var selIndex = Math.ceil(numVisItems * .55);
      }

      ;
      var demoYearItem = visItems.filter(function (d, i) {
        return i === selIndex;
      });

      if (!chart.classed("demoInProgress")) {
        // quit
        return;
      }

      cursorIcon.transition().delay(transitionTimes[0]).duration(transitionTimes[1]).attr("transform", // constructTranslate(initBrushPosition+15, mainHeight+m[0]+(miniHeight/2))
      constructTranslate(initBrushPosition, mainHeight + m[0] + miniHeight / 2)).each("end", function () {
        if (chart.classed("demoInProgress")) {
          demoDrawBrush();
        } else {
          demoEnd(0);
        }
      });

      function demoDrawBrush() {
        changeExtent(initBrushRange[0], initBrushRange[1], transitionTimes[2]);
        var minExtentScreen = +extentSelect.attr("x");
        var maxExtentScreen = minExtentScreen + +extentSelect.attr("width");
        x1.domain(brush.extent());
        cursorIcon.transition().duration(transitionTimes[2]).attr("transform", function () {
          var xPos = x(brush.extent()[1]) + m[3];
          return constructTranslate(xPos, mainHeight + m[0] + miniHeight / 2);
        }).each("end", function () {
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
        var demoYearMark = demoYearItem.select(".yearMark"); // console.log(demoYearItem);
        // console.log(demoYearMark);
        // console.log(demoYearMark.attr("r"));

        var translateStr = demoYearItem.attr("transform"); // console.log(translateStr);

        var translateCoord = deconstructTranslate(translateStr);
        translateCoord.x = translateCoord.x + m[3];
        translateCoord.y = translateCoord.y + m[0] + +demoYearMark.attr("r");
        var translate = constructTranslate(translateCoord.x, translateCoord.y); // move the cursor to a year, then manually expand the year

        cursorIcon.transition("demoExpand").delay(transitionTimes[3]).duration(transitionTimes[4]).attr("transform", translate).each("end", function () {
          if (chart.classed("demoInProgress")) {
            var sel = paperItems.filter(function (dd) {
              return dd.year == demoYearItem[0][0].__data__.year;
            });
            expand(sel);
            demoEnd(transitionTimes[5]);
          } else {
            demoEnd(0);
          }
        }); // cursorIcon.transition("demoEnd").delay(demoTransitionTime)
        // 	.duration(demoDelayToRemove)
        // 	.each("end", function() {
        // 		cursorIcon.remove();
        // 		contract();
        // 	});
      }

      function demoEnd(delay) {
        cursorIcon.transition("demoEnd").delay(delay).duration(0).remove().each("end", function () {
          contract();
          enableInteraction();
        });
      }
    }

    function testPlaceCursor() {
      var extentSelect = mini.select(".brush").select(".extent"); // console.log(extentSelect);

      var minExtentScreen = +extentSelect.attr("x");
      var cursorIcon = mainClipPath.append("text").attr("class", "cursorIcon").style("font-family", "FontAwesome").style("font-size", "1em").text("\uF245") // .attr("x", 100)
      // .attr("y", 300);
      // .attr("transform", "translate(100,300)");
      .attr("transform", "translate(" + minExtentScreen + "," + (mainHeight - 20) + ")");
    }

    function testChangeHeight() {
      // changeExtent(Math.round(minExtent+1), Math.round(maxExtent+1), 250, "linear");
      var chartHeight = +chart.attr("height");
      var currMainHeight = +main.attr("height");
      chart.transition().duration(1000).attr("height", chartHeight + 100);
      main.transition().duration(1000).attr("height", currMainHeight + 100);
      mini.transition().duration(1000).attr("transform", "translate(" + m[3] + "," + (currMainHeight + 100 + m[0]) + ")");
      d3.select("#clip rect").attr("height", currMainHeight + 100);
      display(); // console.log(d3.select("#clip").attr("height"));
    } // var testButton = d3.select("body").append("button")
    // 					.attr("id", "testButton")
    // 					.html("testButton")
    // 					.on("click", function() {
    // 						// minimizeTimeline();
    // 						demoInit();
    // 					});


    d3.select(".clickForDemo").on("click", demoInit);

    function disableInteraction() {
      d3.select("#timeline svg").style("pointer-events", "none");
    }

    function enableInteraction() {
      d3.select("#timeline svg").style("pointer-events", null);
    }

    $(document).on("timelineVis:contract", function () {
      contract();
    });
    $(document).on("timelineVis:display", function () {
      display();
    });
    $(document).on("timelineVis:clearBrush", function () {
      clearBrush();
    });
  });
}();

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kMy1hcnRpY2xlLXRpbWVsaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kMy1hcnRpY2xlLXRpbWVsaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2QzLWFydGljbGUtdGltZWxpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZDMtYXJ0aWNsZS10aW1lbGluZS8uL3NyYy90aW1lbGluZVZpc19NYWluLmpzIl0sIm5hbWVzIjpbInRpbWVsaW5lVmlzIiwiY29uZmlnIiwid2lkdGgiLCJoZWlnaHQiLCJwYXJzZURhdGEiLCJkYXRhIiwiZm9yRWFjaCIsImQiLCJhdXRob3JzIiwiZWlnZW5mYWN0b3IiLCJ2ZW51ZSIsInllYXIiLCJ1cmwiLCJkZWNvbnN0cnVjdFRyYW5zbGF0ZSIsInRyYW5zbGF0ZVN0cmluZyIsInJlcGxhY2UiLCJyZWdleCIsIlJlZ0V4cCIsIm1hdGNoIiwiZXhlYyIsIngiLCJ5IiwiY29uc3RydWN0VHJhbnNsYXRlIiwid3JhcCIsImQzIiwidGV4dHdyYXAiLCJtZXRob2QiLCJ3IiwiaCIsImpzb24iLCJqc29uX2VuZHBvaW50IiwiZXJyb3IiLCJkYXRhX3RvdGFsIiwic2VsZWN0Iiwid2luZG93Iiwib24iLCJkaXNwbGF5IiwibGFuZSIsIm1hcmtUeXBlIiwiZ2V0UGFyYW1ldGVyQnlOYW1lIiwiZGF0YUJ5WWVhciIsIm5lc3QiLCJrZXkiLCJzb3J0VmFsdWVzIiwiYSIsImIiLCJhc2NlbmRpbmciLCJ0aXRsZSIsImVudHJpZXMiLCJmaXJzdFRpdGxlIiwidmFsdWVzIiwiaWQiLCJzdW1fZWlnZW5mYWN0b3IiLCJzdW0iLCJkZCIsIm1heERhdGFCeVllYXIiLCJtYXgiLCJsZW5ndGgiLCJsYW5lcyIsImxhbmVMZW5ndGgiLCJ0aW1lQmVnaW4iLCJtaW4iLCJ0aW1lRW5kIiwibSIsIm1pbmlIZWlnaHQiLCJtYWluSGVpZ2h0IiwibWFpbk1pblJhZCIsIm1haW5NYXhSYWQiLCJtaW5pTWluUmFkIiwibWluaU1heFJhZCIsIm1pbkV4dGVudCIsIm1heEV4dGVudCIsInN0eWxlc0Jhc2UiLCJzdHlsZXNWaXNpYmxlIiwic2NhbGUiLCJsaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsIngxIiwieTEiLCJ5MiIsImVmRXh0ZW50IiwiZXh0ZW50IiwiZWZTY2FsZU1pbmkiLCJlZlNjYWxlTWFpbiIsImVmU3VtU2NhbGUiLCJjaGFydFdpZHRoIiwiY2hhcnRIZWlnaHQiLCJjaGFydCIsImFwcGVuZCIsImF0dHIiLCJtYWluQ29udGFpbmVyIiwibWFpbiIsIm1pbmlDb250YWluZXIiLCJtaW5pIiwibWFpbkxhbmVMaW5lc0ciLCJpIiwibGVuIiwibWFpbkxhYmVsRyIsIm1haW5MYWJlbCIsInRleHQiLCJzdHlsZSIsImJvdW5kcyIsImNhbGwiLCJzdWJPZmZzZXQiLCIkIiwibWFpbkxhYmVsU3ViIiwibWluaUxhbmVMaW5lc0ciLCJtaW5pTGFiZWwiLCJ4QXhpc01pbmkiLCJzdmciLCJheGlzIiwib3JpZW50IiwidGlja0Zvcm1hdCIsImZvcm1hdCIsInhBeGlzTWFpbiIsInhBeGlzTWFpbk9iaiIsIm1haW5DbGlwUGF0aCIsIm1pbmlJdGVtcyIsInNlbGVjdEFsbCIsImVudGVyIiwicmFkaXVzIiwic3RhY2tJdGVtcyIsIml0ZW1zIiwieWVhcnNMaXN0IiwiZWFjaCIsInB1c2giLCJtYXhSYWQiLCJfX2RhdGFfXyIsInRoaXNZZWFyTWluaSIsImZpbHRlciIsIm1pbmlNYXJrT3BhY2l0eSIsIk1hdGgiLCJtaW5pTWFya3MiLCJ5ZWFySXRlbXMiLCJ5ZWFyTWFya3MiLCJjb250cmFjdCIsInNlbCIsInBhcGVySXRlbXMiLCJ0aGlzWWVhckl0ZW0iLCJleHBhbmQiLCJpZHgiLCJzcGFuIiwiam9pbiIsImh0bWwiLCJwYXBlck1hcmtzIiwiYmJveCIsIm5vZGUiLCJnZXRCQm94IiwiaW5zZXJ0IiwicGFwZXJMYWJlbHMiLCJicnVzaCIsImV4dGVudExpbmVzIiwidXBkYXRlRXh0ZW50TGluZXMiLCJsZWZ0IiwicmlnaHQiLCJlbXB0eSIsInNjcm9sbER1ciIsIm1vdmVCcnVzaCIsImRpcmVjdGlvbiIsImNoYW5nZUV4dGVudCIsInJvdW5kIiwic2Nyb2xsSXRlbXMiLCJ6b29tSXRlbXMiLCJ6b29tTW91c2VPdmVyIiwiem9vbU1vdXNlT3V0Iiwic3RvcCIsImZhZGVUbyIsImNsZWFyQnJ1c2hJY29uIiwiZXZlbnQiLCJ3aGVlbERlbHRhWSIsIndoZWVsRGVsdGFYIiwibWlkcG9pbnRZZWFyIiwiYnJ1c2hJbml0IiwiZG9jdW1lbnQiLCJ0cmlnZ2VyIiwieWVhcjEiLCJ5ZWFyMiIsImR1cmF0aW9uIiwiZWFzZSIsImRlbGF5IiwidW5kZWZpbmVkIiwidHJhbnNpdGlvbiIsImV4cGFuZEFsbCIsIm1heEVGIiwiY2xlYXJCcnVzaCIsIm1pZCIsImV4dGVudFNlbGVjdCIsIm1pbkV4dGVudFNjcmVlbiIsIm1heEV4dGVudFNjcmVlbiIsImludmVydCIsImNsYXNzZWQiLCJ1cGRhdGVNYWluIiwidmlzSXRlbXMiLCJub3RWaXNJdGVtcyIsImNvbnNvbGUiLCJsb2ciLCJpdGVtIiwiX3JvdGF0ZSIsInJvdGF0aW9uIiwibGFiZWxzIiwiYWxwaGEiLCJzcGFjaW5nIiwicmVsYXgiLCJhZ2FpbiIsImRhIiwiYXgiLCJkYiIsImJ4IiwiZGVsdGFYIiwiYWJzIiwic2lnbiIsImxhYmVsc0NvbGxpc2lvbkRldGVjdCIsImFmdGVyVHJhbnNpdGlvblgiLCJhZnRlclRyYW5zaXRpb25ZIiwieWVhckl0ZW0iLCJ0aGlzWWVhciIsImR1ciIsInRyYW5zaXRpb25TdGFydFN0eWxlIiwidHJhbnNpdGlvbkVuZFN0eWxlIiwibGluZSIsImxpbmVkYXRhIiwic3R5bGVUd2VlbiIsImludGVycG9sYXRlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImRhdHVtIiwicmVtb3ZlIiwiY2hlY2tTaW5nbGVMYWJlbCIsIndyYXBJbkFuY2hvciIsInN0YWJsZV91cmwiLCJ0aGlzTGFiZWwiLCJ3b3JkcyIsInNwbGl0IiwiZ2l2ZVVwVGhyZXNob2xkIiwidmlld0xlZnRFZGdlIiwicG9zaXRpb24iLCJsZWZ0UG9zIiwibnVtV29yZHMiLCJzbGljZSIsInNob3J0ZW5lZFRpdGxlIiwiZGVtb0luaXQiLCJkaXNhYmxlSW50ZXJhY3Rpb24iLCJkZW1vUXVpdCIsImN1cnNvckljb24iLCJ0cmFuc2l0aW9uVGltZXMiLCJ5ZWFyUmFuZ2UiLCJpbml0QnJ1c2hSYW5nZSIsImZsb29yIiwiaW5pdEJydXNoUG9zaXRpb24iLCJudW1WaXNJdGVtcyIsInNpemUiLCJzZWxJbmRleCIsImNlaWwiLCJkZW1vWWVhckl0ZW0iLCJkZW1vRHJhd0JydXNoIiwiZGVtb0VuZCIsInhQb3MiLCJkZW1vRXhwYW5kIiwiZGVtb1llYXJNYXJrIiwidHJhbnNsYXRlU3RyIiwidHJhbnNsYXRlQ29vcmQiLCJ0cmFuc2xhdGUiLCJlbmFibGVJbnRlcmFjdGlvbiIsInRlc3RQbGFjZUN1cnNvciIsInRlc3RDaGFuZ2VIZWlnaHQiLCJjdXJyTWFpbkhlaWdodCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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R0FBc0IsR0FBdEIsSUFBNkIwTSxjQUFjLEdBQUMsR0FBZixHQUFxQjFNLENBQUMsQ0FBQyxDQUFELENBQW5ELElBQTBELEdBRDlFO0FBRUF2QyxRQUFFLENBQUNTLE1BQUgsQ0FBVSxZQUFWLEVBQXdCeUQsSUFBeEIsQ0FBNkIsUUFBN0IsRUFBdUMrSyxjQUFjLEdBQUMsR0FBdEQ7QUFDQXJPLGFBQU8sR0FUb0IsQ0FVM0I7QUFDQSxLQW4zQ2lELENBcTNDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBWixNQUFFLENBQUNTLE1BQUgsQ0FBVSxlQUFWLEVBQ0VFLEVBREYsQ0FDSyxPQURMLEVBQ2M2TSxRQURkOztBQUdBLGFBQVNDLGtCQUFULEdBQThCO0FBQzdCek4sUUFBRSxDQUFDUyxNQUFILENBQVUsZUFBVixFQUEyQm9FLEtBQTNCLENBQWlDLGdCQUFqQyxFQUFtRCxNQUFuRDtBQUNBOztBQUVELGFBQVNpSyxpQkFBVCxHQUE2QjtBQUM1QjlPLFFBQUUsQ0FBQ1MsTUFBSCxDQUFVLGVBQVYsRUFBMkJvRSxLQUEzQixDQUFpQyxnQkFBakMsRUFBbUQsSUFBbkQ7QUFDQTs7QUFFREksS0FBQyxDQUFFcUUsUUFBRixDQUFELENBQWMzSSxFQUFkLENBQWlCLHNCQUFqQixFQUF5QyxZQUFXO0FBQ25EcUcsY0FBUTtBQUNSLEtBRkQ7QUFJQS9CLEtBQUMsQ0FBRXFFLFFBQUYsQ0FBRCxDQUFjM0ksRUFBZCxDQUFpQixxQkFBakIsRUFBd0MsWUFBVztBQUNsREMsYUFBTztBQUNQLEtBRkQ7QUFJQXFFLEtBQUMsQ0FBRXFFLFFBQUYsQ0FBRCxDQUFjM0ksRUFBZCxDQUFpQix3QkFBakIsRUFBMkMsWUFBVztBQUNyRHNKLGdCQUFVO0FBQ1YsS0FGRDtBQUlBLEdBbjVDRDtBQXM1Q0EsQ0EvNkMwQixFQUEzQixDIiwiZmlsZSI6ImQzLWFydGljbGUtdGltZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImQzLWFydGljbGUtdGltZWxpbmVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZDMtYXJ0aWNsZS10aW1lbGluZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkMy1hcnRpY2xlLXRpbWVsaW5lXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHRpbWVsaW5lVmlzIGZyb20gJy4vdGltZWxpbmVWaXNfTWFpbi5qcyc7XG5leHBvcnQgeyB0aW1lbGluZVZpcyB9O1xuXG4iLCIvLyBidWlsZGluZyBvZmYgaHR0cDovL2JsLm9ja3Mub3JnL2J1bmthdC8yMzM4MDM0XG4vL1xuLy9cbnZhciB0aW1lbGluZVZpcyA9IHRpbWVsaW5lVmlzIHx8IHt9O1xuXG50aW1lbGluZVZpcy5jb25maWcgPSAoZnVuY3Rpb24oKSB7XG5cdHZhciB3aWR0aCA9IDk2MCxcblx0XHRoZWlnaHQgPSAzNTA7XG5cblx0Ly8gdGhlc2UgcHJvcGVydGllcyAoXCJhdXRob3JzXCIsIFwiZWlnZW5mYWN0b3JcIiwgZXRjLikgbmVlZCB0byBiZSBzZXQgcHJvcGVybHkgYWNjb3JkaW5nIHRvIHRoZSBkYXRhXG5cdHZhciBwYXJzZURhdGEgPSBmdW5jdGlvbihkYXRhKSB7XG5cdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcblx0XHRcdGQuYXV0aG9ycyA9IGRbXCJhdXRob3JzXCJdOyAgLy8gbGlzdCBvZiBhdXRob3IgbmFtZXNcblx0XHRcdGQuZWlnZW5mYWN0b3IgPSBkW1wiZWlnZW5mYWN0b3Jfc2NvcmVcIl07XG5cdFx0XHRkLnZlbnVlID0gZFtcImpvdXJuYWxcIl07XG5cdFx0XHRkLnllYXIgPSBkW1wieWVhclwiXTtcblx0XHRcdGQudXJsID0gXCJodHRwOi8vbGFicy5qc3Rvci5vcmdcIiArIGRbXCJzdGFibGVfdXJsXCJdO1xuXHRcdH0pO1xuXHRcdHJldHVybiBkYXRhO1xuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0d2lkdGg6IHdpZHRoLFxuXHRcdGhlaWdodDogaGVpZ2h0LFxuXHRcdHBhcnNlRGF0YTogcGFyc2VEYXRhXG5cdH1cblxufSgpKTtcblxudGltZWxpbmVWaXMudGltZWxpbmVWaXMgPSAoZnVuY3Rpb24oKSB7XG5cblx0ZnVuY3Rpb24gZGVjb25zdHJ1Y3RUcmFuc2xhdGUodHJhbnNsYXRlU3RyaW5nKSB7XG5cdFx0Ly8gdGFrZXMgYSBzdHJpbmcgbGlrZSBcInRyYW5zbGF0ZSgxMDAsMjAwKVwiIGFuZCByZXR1cm5zIHRoZSBudW1iZXJzIFsxMDAsIDIwMF1cblx0XHR0cmFuc2xhdGVTdHJpbmcgPSB0cmFuc2xhdGVTdHJpbmcucmVwbGFjZShcIihcIiwgXCJcIikucmVwbGFjZShcIilcIiwgXCJcIik7XG5cdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgvdHJhbnNsYXRlKFtcXGRcXC5dKyksKFtcXGRcXC5dKykvKTtcblx0XHR2YXIgbWF0Y2ggPSByZWdleC5leGVjKHRyYW5zbGF0ZVN0cmluZyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHg6ICttYXRjaFsxXSxcblx0XHRcdHk6ICttYXRjaFsyXVxuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBjb25zdHJ1Y3RUcmFuc2xhdGUoeCwgeSkge1xuXHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIjtcblx0fVxuXG5cblx0dmFyIHdyYXAgPSBkMy50ZXh0d3JhcCgpLm1ldGhvZChcInRzcGFuc1wiKTtcblxuXHR2YXIgY29uZmlnID0gdGltZWxpbmVWaXMuY29uZmlnLFxuXHRcdHcgPSBjb25maWcud2lkdGgsXG5cdFx0aCA9IGNvbmZpZy5oZWlnaHQ7XG5cblxuXHRkMy5qc29uKGpzb25fZW5kcG9pbnQsIGZ1bmN0aW9uKGVycm9yLCBkYXRhX3RvdGFsKSB7XG5cdFx0ZDMuc2VsZWN0KHdpbmRvdykub24oXCJyZXNpemVcIiwgZGlzcGxheSlcblx0XHRkYXRhX3RvdGFsID0gY29uZmlnLnBhcnNlRGF0YShkYXRhX3RvdGFsKTtcblx0XHRkYXRhX3RvdGFsLmZvckVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0ZC5sYW5lID0gMDtcblx0XHRcdGlmIChkLmVpZ2VuZmFjdG9yID09PSBudWxsKSB7XG5cdFx0XHRcdGQuZWlnZW5mYWN0b3IgPSAwO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHZhciBtYXJrVHlwZSA9IGdldFBhcmFtZXRlckJ5TmFtZSgnbScpO1xuXHRcdGlmICggKG1hcmtUeXBlICE9ICdpY29uJykgJiYgKG1hcmtUeXBlICE9ICdjaXJjbGUnKSApIHtcblx0XHRcdG1hcmtUeXBlID0gJ2NpcmNsZScgIC8vIGRlZmF1bHRcblx0XHR9XG5cblx0XHR2YXIgZGF0YUJ5WWVhciA9IGQzLm5lc3QoKVxuXHRcdFx0XHRcdFx0XHQua2V5KGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyO30pXG5cdFx0XHRcdFx0XHRcdC5zb3J0VmFsdWVzKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyByZXR1cm4gZDMuZGVzY2VuZGluZyhhLmVpZ2VuZmFjdG9yX3Njb3JlLCBiLmVpZ2VuZmFjdG9yX3Njb3JlKTtcblx0XHRcdFx0XHRcdFx0XHQvLyByZXR1cm4gZDMuYXNjZW5kaW5nKGEucHViZGF0ZSwgYi5wdWJkYXRlKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZDMuYXNjZW5kaW5nKGEudGl0bGUsIGIudGl0bGUpO1xuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQvLyAubWFwKGRhdGFfdG90YWwsIGQzLm1hcCk7XG5cdFx0XHRcdFx0XHRcdC5lbnRyaWVzKGRhdGFfdG90YWwpO1xuXHRcdGRhdGFCeVllYXIuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRkLmZpcnN0VGl0bGUgPSBkLnZhbHVlc1swXS5pZDtcblx0XHRcdGQuc3VtX2VpZ2VuZmFjdG9yID0gZDMuc3VtKGQudmFsdWVzLCBmdW5jdGlvbihkZCkge3JldHVybiBkZC5laWdlbmZhY3Rvcjt9KTtcblx0XHRcdGQubGFuZSA9IDA7XG5cdFx0XHRkLnllYXIgPSArZC5rZXk7XG5cdFx0fSk7XG5cdFx0dmFyIG1heERhdGFCeVllYXIgPSBkMy5tYXgoZGF0YUJ5WWVhciwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC52YWx1ZXMubGVuZ3RoOyB9KTtcblxuXHRcdHZhciBsYW5lcyA9IFtcIkNsaW1hdGUgY2hhbmdlXCJdLFxuXHRcdFx0XHRcdGxhbmVMZW5ndGggPSBsYW5lcy5sZW5ndGgsXG5cdFx0XHRcdC8vIHRpbWVCZWdpbiA9IG5ldyBEYXRlKFN0cmluZyhtaW5ZZWFyLTEpKSxcblx0XHRcdFx0dGltZUJlZ2luID0gK2QzLm1pbihkYXRhQnlZZWFyLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnllYXI7IH0pIC0gMSxcblx0XHRcdFx0dGltZUVuZCA9ICtkMy5tYXgoZGF0YUJ5WWVhciwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC55ZWFyOyB9KSArIDE7XG5cblx0XHR2YXIgbSA9IFsyMCwgMTUsIDE1LCAxNTBdOyAvL3RvcCByaWdodCBib3R0b20gbGVmdFxuXHRcdFx0Ly8gdyA9IDk2MCAtIG1bMV0gLSBtWzNdLFxuXHRcdFx0Ly8gaCA9IDM1MCAtIG1bMF0gLSBtWzJdLFxuXHRcdHcgPSB3IC0gbVsxXSAtIG1bM107XG5cdFx0aCA9IGggLSBtWzBdIC0gbVsyXTtcblx0XHR2YXIgbWluaUhlaWdodCA9IGxhbmVMZW5ndGggKiAxMiArIDMwLFxuXHRcdFx0bWFpbkhlaWdodCA9IGggLSBtaW5pSGVpZ2h0IC0gNTA7XG5cblx0XHR2YXIgbWFpbk1pblJhZCA9IDgsXG5cdFx0XHRtYWluTWF4UmFkID0gMTgsXG5cdFx0XHRtaW5pTWluUmFkID0gNSxcblx0XHRcdG1pbmlNYXhSYWQgPSAxMDtcblxuXHRcdHZhciBtaW5FeHRlbnQsIG1heEV4dGVudDsgIC8vIHRoZXNlIHdpbGwgYmUgdGhlIGxvd2VyIGFuZCB1cHBlciB5ZWFycyBkaXNwbGF5ZWQgaW4gbWFpblxuXG5cdFx0dmFyIHN0eWxlc0Jhc2UgPSB7XG5cdFx0XHQnb3BhY2l0eSc6IC4yXG5cdFx0fTtcblx0XHR2YXIgc3R5bGVzVmlzaWJsZSA9IHtcblx0XHRcdCdvcGFjaXR5JzogMVxuXHRcdH07XG5cblx0XHQvL3NjYWxlc1xuXHRcdHZhciB4ID0gZDMuc2NhbGUubGluZWFyKClcblx0XHRcdFx0LmRvbWFpbihbdGltZUJlZ2luLCB0aW1lRW5kXSlcblx0XHRcdFx0LnJhbmdlKFswLCB3XSk7XG5cdFx0dmFyIHgxID0gZDMuc2NhbGUubGluZWFyKClcblx0XHRcdFx0LnJhbmdlKFswLCB3XSk7XG5cdFx0dmFyIHkxID0gZDMuc2NhbGUubGluZWFyKClcblx0XHRcdFx0LmRvbWFpbihbMCwgbGFuZUxlbmd0aF0pXG5cdFx0XHRcdC5yYW5nZShbMCwgbWFpbkhlaWdodF0pO1xuXHRcdHZhciB5MiA9IGQzLnNjYWxlLmxpbmVhcigpXG5cdFx0XHRcdC5kb21haW4oWzAsIGxhbmVMZW5ndGhdKVxuXHRcdFx0XHQucmFuZ2UoWzAsIG1pbmlIZWlnaHRdKTtcblx0XHR2YXIgZWZFeHRlbnQgPSBkMy5leHRlbnQoZGF0YV90b3RhbCwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5laWdlbmZhY3RvcjsgfSk7XG5cdFx0dmFyIGVmU2NhbGVNaW5pID0gZDMuc2NhbGUubGluZWFyKClcblx0XHRcdFx0LmRvbWFpbihlZkV4dGVudClcblx0XHRcdFx0Ly8gLnJhbmdlKFswLCA1XSk7XG5cdFx0XHRcdC5yYW5nZShbbWluaU1pblJhZCwgbWluaU1heFJhZF0pO1xuXHRcdHZhciBlZlNjYWxlTWFpbiA9IGQzLnNjYWxlLmxpbmVhcigpXG5cdFx0XHRcdC5kb21haW4oZWZFeHRlbnQpXG5cdFx0XHRcdC8vIC5yYW5nZShbMCwgNV0pO1xuXHRcdFx0XHQucmFuZ2UoW21haW5NaW5SYWQsIG1haW5NYXhSYWRdKTtcblx0XHR2YXIgZWZTdW1TY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpXG5cdFx0XHRcdC5kb21haW4oZDMuZXh0ZW50KGRhdGFCeVllYXIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc3VtX2VpZ2VuZmFjdG9yOyB9KSlcblx0XHRcdFx0Ly8gLnJhbmdlKFswLCA1XSk7XG5cdFx0XHRcdC5yYW5nZShbbWFpbk1pblJhZCwgbWFpbk1heFJhZF0pO1xuXG5cblx0XHR2YXIgY2hhcnRXaWR0aCA9IHcgKyBtWzFdICsgbVszXSxcblx0XHRcdGNoYXJ0SGVpZ2h0ID0gaCArIG1bMF0gKyBtWzJdO1xuXG5cdFx0dmFyIGNoYXJ0ID0gZDMuc2VsZWN0KFwiI3RpbWVsaW5lXCIpXG5cdFx0XHRcdFx0LmFwcGVuZChcInN2Z1wiKVxuXHRcdFx0XHRcdC8vIC5hdHRyKFwid2lkdGhcIiwgY2hhcnRXaWR0aClcblx0XHRcdFx0XHQvLyAuYXR0cihcImhlaWdodFwiLCBjaGFydEhlaWdodClcblx0XHRcdFx0XHQuYXR0cihcImRhdGEtbWF4aW1pemVkSGVpZ2h0XCIsIGNoYXJ0SGVpZ2h0KVxuXHRcdFx0XHRcdC5hdHRyKFwiZGF0YS1jdXJySGVpZ2h0XCIsIGNoYXJ0SGVpZ2h0KVxuXHRcdFx0XHRcdC5hdHRyKFwidmlld0JveFwiLCBcIjAgMCBcIiArIGNoYXJ0V2lkdGggKyBcIiBcIiArIGNoYXJ0SGVpZ2h0KVxuXHRcdFx0XHRcdC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaWRZTWlkIG1lZXRcIilcblx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwiY2hhcnRcIik7XG5cdFx0XG5cdFx0Y2hhcnQuYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJjbGlwUGF0aFwiKVxuXHRcdFx0LmF0dHIoXCJpZFwiLCBcImNsaXBcIilcblx0XHRcdC5hcHBlbmQoXCJyZWN0XCIpXG5cdFx0XHQuYXR0cihcIndpZHRoXCIsIHcpXG5cdFx0XHQuYXR0cihcImhlaWdodFwiLCBtYWluSGVpZ2h0KTtcblxuXHRcdHZhciBtYWluQ29udGFpbmVyID0gY2hhcnQuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBtWzBdICsgXCIpXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJ3aWR0aFwiLCBjaGFydFdpZHRoKVxuXHRcdFx0XHRcdC5hdHRyKFwiaGVpZ2h0XCIsIG1haW5IZWlnaHQpXG5cdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcIm1haW5Db250YWluZXJcIik7XG5cblx0XHQvLyB2YXIgbWFpbiA9IGNoYXJ0LmFwcGVuZChcImdcIilcblx0XHR2YXIgbWFpbiA9IG1haW5Db250YWluZXIuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbVszXSArIFwiLFwiICsgbVswXSArIFwiKVwiKVxuXHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbVszXSArIFwiLDApXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJ3aWR0aFwiLCB3KVxuXHRcdFx0XHRcdC5hdHRyKFwiaGVpZ2h0XCIsIG1haW5IZWlnaHQpXG5cdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcIm1haW5cIik7XG5cblx0XHR2YXIgbWluaUNvbnRhaW5lciA9IGNoYXJ0LmFwcGVuZChcImdcIilcblx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgKG1haW5IZWlnaHQgKyBtWzBdKSArIFwiKVwiKVxuXHRcdFx0XHRcdC5hdHRyKFwid2lkdGhcIiwgY2hhcnRXaWR0aClcblx0XHRcdFx0XHQuYXR0cihcImhlaWdodFwiLCBtYWluSGVpZ2h0KVxuXHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJtaW5pQ29udGFpbmVyXCIpO1xuXG5cdFx0Ly8gdmFyIG1pbmkgPSBjaGFydC5hcHBlbmQoXCJnXCIpXG5cdFx0dmFyIG1pbmkgPSBtaW5pQ29udGFpbmVyLmFwcGVuZChcImdcIilcblx0XHRcdFx0XHQvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1bM10gKyBcIixcIiArIChtYWluSGVpZ2h0ICsgbVswXSkgKyBcIilcIilcblx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1bM10gKyBcIiwwKVwiKVxuXHRcdFx0XHRcdC5hdHRyKFwid2lkdGhcIiwgdylcblx0XHRcdFx0XHQuYXR0cihcImhlaWdodFwiLCBtaW5pSGVpZ2h0KVxuXHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJtaW5pXCIpO1xuXHRcdFxuXHRcdC8vbWFpbiBsYW5lcyBhbmQgdGV4dHNcblx0XHR2YXIgbWFpbkxhbmVMaW5lc0cgPSBtYWluLmFwcGVuZChcImdcIik7XG5cdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGxhbmVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRtYWluTGFuZUxpbmVzRy5hcHBlbmQoXCJsaW5lXCIpXG5cdFx0XHRcdC5hdHRyKFwieDFcIiwgbVsxXSlcblx0XHRcdFx0LmF0dHIoXCJ5MVwiLCBmdW5jdGlvbigpIHtyZXR1cm4geTIoaSk7fSlcblx0XHRcdFx0LmF0dHIoXCJ4MlwiLCB3KVxuXHRcdFx0XHQuYXR0cihcInkyXCIsIGZ1bmN0aW9uKCkge3JldHVybiB5MihpKTt9KVxuXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibGFuZUxpbmVcIilcblx0XHRcdFx0LmF0dHIoXCJzdHJva2VcIiwgXCJsaWdodGdyYXlcIik7XG5cdFx0fVxuXG5cdFx0dmFyIG1haW5MYWJlbEcgPSBtYWluQ29udGFpbmVyLmFwcGVuZChcImdcIilcblx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIrKG1bMF0pK1wiKVwiKTtcblx0XHR2YXIgbWFpbkxhYmVsID0gbWFpbkxhYmVsRy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHQudGV4dChcIk51bWJlciBvZiBpbmZsdWVudGlhbCBhcnRpY2xlcyBpbiB0aGUgeWVhclwiKVxuXHRcdFx0Ly8gLmF0dHIoXCJ4XCIsIC1tWzFdKVxuXHRcdFx0Ly8gLmF0dHIoXCJ4XCIsIDApXG5cdFx0XHQvLyAuYXR0cihcInlcIiwgMTApXG5cdFx0XHQuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxNHB4XCIpXG5cdFx0XHQvLyAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG5cdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibGFuZVRleHRcIilcblx0XHRcdC5hdHRyKFwiaWRcIiwgXCJtYWluTGFiZWxcIik7XG5cdFxuXHRcdC8vIHdyYXAuYm91bmRzKHtoZWlnaHQ6IG1haW5IZWlnaHQsIHdpZHRoOiBtWzNdfSkubWV0aG9kKFwidHNwYW5zXCIpO1xuXHRcdHdyYXAuYm91bmRzKHtoZWlnaHQ6IG1haW5IZWlnaHQsIHdpZHRoOiAobVszXSAqIC45KX0pO1xuXHRcdC8vIGQzLnNlbGVjdChcIi5sYW5lVGV4dFwiKS5jYWxsKHdyYXApO1xuXHRcdG1haW5MYWJlbC5jYWxsKHdyYXApO1xuXG5cdFx0dmFyIHN1Yk9mZnNldCA9ICQoICcjbWFpbkxhYmVsJyApLmhlaWdodCgpOyAgLy8geSBvZmZzZXQgZm9yIHRoZSBzdWIgbGFiZWxcblx0XHR2YXIgbWFpbkxhYmVsU3ViID0gbWFpbkxhYmVsRy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgc3ViT2Zmc2V0ICsgXCIpXCIpXG5cdFx0XHQudGV4dChcIlNpemUgb2YgY2lyY2xlcyBpbmRpY2F0ZXMgbGV2ZWwgb2YgaW5mbHVlbmNlXCIpXG5cdFx0XHQuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxMXB4XCIpXG5cdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibGFuZVRleHRcIilcblx0XHRcdC5hdHRyKFwiaWRcIiwgXCJtYWluTGFiZWxTdWJcIik7XG5cblx0XHR3cmFwLmJvdW5kcyh7aGVpZ2h0OiBtYWluSGVpZ2h0IC0gc3ViT2Zmc2V0LCB3aWR0aDogKG1bM10gKiAuOSl9KTtcblx0XHRtYWluTGFiZWxTdWIuY2FsbCh3cmFwKTtcblx0XHRcblx0XHRcblx0XHQvL21pbmkgbGFuZXMgYW5kIHRleHRzXG5cdFx0dmFyIG1pbmlMYW5lTGluZXNHID0gbWluaS5hcHBlbmQoXCJnXCIpO1xuXHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSBsYW5lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0bWluaUxhbmVMaW5lc0cuYXBwZW5kKFwibGluZVwiKVxuXHRcdFx0XHQuYXR0cihcIngxXCIsIG1bMV0pXG5cdFx0XHRcdC5hdHRyKFwieTFcIiwgZnVuY3Rpb24oKSB7cmV0dXJuIHkyKGkpO30pXG5cdFx0XHRcdC5hdHRyKFwieDJcIiwgdylcblx0XHRcdFx0LmF0dHIoXCJ5MlwiLCBmdW5jdGlvbigpIHtyZXR1cm4geTIoaSk7fSlcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImxhbmVMaW5lXCIpXG5cdFx0XHRcdC5hdHRyKFwic3Ryb2tlXCIsIFwibGlnaHRncmF5XCIpO1xuXHRcdH1cblxuXHRcdHZhciBtaW5pTGFiZWwgPSBtaW5pQ29udGFpbmVyLmFwcGVuZChcImdcIilcblx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIrIG1bMF0gK1wiKVwiKVxuXHRcdFx0LmFwcGVuZChcInRleHRcIilcblx0XHRcdC50ZXh0KFwiU2VsZWN0IGRhdGUgcmFuZ2UgdG8gZm9jdXMgb246XCIpXG5cdFx0XHQvLyAuYXR0cihcInhcIiwgLW1bMV0pXG5cdFx0XHQvLyAuYXR0cihcInhcIiwgMClcblx0XHRcdC8vIC5hdHRyKFwieVwiLCAxMClcblx0XHRcdC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjE0cHhcIilcblx0XHRcdC8vIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcblx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJsYW5lVGV4dFwiKTtcblxuXHRcdHdyYXAuYm91bmRzKHtoZWlnaHQ6IG1pbmlIZWlnaHQsIHdpZHRoOiAobVszXSAqIC45KX0pO1xuXHRcdC8vIGQzLnNlbGVjdChcIi5sYW5lVGV4dFwiKS5jYWxsKHdyYXApO1xuXHRcdG1pbmlMYWJlbC5jYWxsKHdyYXApO1xuXG5cdFx0Ly8gbWluaS5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcIi5sYW5lVGV4dFwiKVxuXHRcdC8vIFx0LmRhdGEobGFuZXMpXG5cdFx0Ly8gXHQuZW50ZXIoKS5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0Ly8gXHQudGV4dChmdW5jdGlvbihkKSB7cmV0dXJuIGQ7fSlcblx0XHQvLyBcdC5hdHRyKFwieFwiLCAtbVsxXSlcblx0XHQvLyBcdC5hdHRyKFwieVwiLCBmdW5jdGlvbihkLCBpKSB7cmV0dXJuIHkyKGkgKyAuNSk7fSlcblx0XHQvLyBcdC5hdHRyKFwiZHlcIiwgXCIuNWV4XCIpXG5cdFx0Ly8gXHQuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG5cdFx0Ly8gXHQuYXR0cihcImNsYXNzXCIsIFwibGFuZVRleHRcIik7XG5cblx0XHQvLyBBeGVzXG5cdFx0dmFyIHhBeGlzTWluaSA9IGQzLnN2Zy5heGlzKClcblx0XHRcdC5vcmllbnQoXCJib3R0b21cIilcblx0XHRcdC8vIC50aWNrcyg1KVxuXHRcdFx0LnNjYWxlKHgpXG5cdFx0XHQudGlja0Zvcm1hdChkMy5mb3JtYXQoXCJkXCIpKTtcblxuXHRcdG1pbmkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInhheGlzXCIpXG5cdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgKG1pbmlIZWlnaHQpICsgXCIpXCIpXG5cdFx0XHQuY2FsbCh4QXhpc01pbmkpO1xuXG5cdFx0dmFyIHhBeGlzTWFpbiA9IGQzLnN2Zy5heGlzKClcblx0XHRcdC5vcmllbnQoXCJ0b3BcIilcblx0XHRcdC5zY2FsZSh4MSlcblx0XHRcdC50aWNrRm9ybWF0KGQzLmZvcm1hdChcImRcIikpO1xuXG5cdFx0dmFyIHhBeGlzTWFpbk9iaiA9IG1haW4uYXBwZW5kKFwiZ1wiKVxuXHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInhheGlzXCIpXG5cdFx0XHQuY2FsbCh4QXhpc01haW4pO1xuXG5cdFx0dmFyIG1haW5DbGlwUGF0aCA9IG1haW4uYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibWFpbkNsaXBQYXRoXCIpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKFwiY2xpcC1wYXRoXCIsIFwidXJsKCNjbGlwKVwiKTtcblxuXHRcdFxuXHRcdC8vbWluaSBpdGVtc1xuXHRcdC8vIG5vdGU6IG1vdXNlb3ZlciBldmVudHMgd2lsbCBub3QgcGxheSB3ZWxsIHdpdGggdGhlIGJydXNoXG5cdFx0dmFyIG1pbmlJdGVtcyA9IG1pbmkuYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoXCIubWluaUl0ZW1cIilcblx0XHRcdC5kYXRhKGRhdGFfdG90YWwpXG5cdFx0XHQuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG5cdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibWluaUl0ZW1cIilcblx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0ZC54ID0geChkLnllYXIpO1xuXHRcdFx0XHQvLyBkLnkgPSAwOyAgLy8gZm9yIG5vd1xuXHRcdFx0XHRkLnkgPSBtaW5pSGVpZ2h0IC8gMjtcblx0XHRcdFx0Ly8gZC5yYWRpdXMgPSA1ICsgZWZTY2FsZShkLmVpZ2VuZmFjdG9yX3Njb3JlKTtcblx0XHRcdFx0ZC5yYWRpdXMgPSAxICsgKCBlZlNjYWxlTWluaShkLmVpZ2VuZmFjdG9yKSApO1xuXHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiO1xuXHRcdFx0fSk7XG5cblx0XHQvLyBub3QgY3VycmVudGx5IHVzaW5nIHRoaXNcblx0XHRmdW5jdGlvbiBzdGFja0l0ZW1zKGl0ZW1zLCBzY2FsZSkge1xuXHRcdFx0dmFyIHllYXJzTGlzdCA9IFtdO1xuXHRcdFx0aXRlbXMuZWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdGlmICggIShkLnllYXIgaW4geWVhcnNMaXN0KSApIHtcblx0XHRcdFx0XHR5ZWFyc0xpc3QucHVzaChkLnllYXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHZhciBtYXhSYWQgPSBkMy5tYXgoaXRlbXNbMF0sIGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC5fX2RhdGFfXy5yYWRpdXN9KTtcblx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSB5ZWFyc0xpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0dGhpc1llYXJNaW5pID0gaXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyPT15ZWFyc0xpc3RbaV19KTtcblx0XHRcdFx0dmFyIHkgPSAwO1xuXHRcdFx0XHR0aGlzWWVhck1pbmkuZWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0aWYgKHkgPT0gMCkge1xuXHRcdFx0XHRcdFx0eSA9IHNjYWxlKGQubGFuZSkgKyBtYXhSYWQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHkgPSB5ICsgMipkLnJhZGl1cztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZC55ID0geTtcblx0XHRcdFx0XHRkMy5zZWxlY3QodGhpcykuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gc3RhY2tJdGVtcyhtaW5pSXRlbXMsIHkyKTtcblxuXHRcdHZhciBtaW5pTWFya09wYWNpdHkgPSBNYXRoLm1heCggKDEvbWF4RGF0YUJ5WWVhciksIDAuMyApO1xuXHRcdHZhciBtaW5pTWFya3MgPSBtaW5pSXRlbXMuYXBwZW5kKFwiY2lyY2xlXCIpXG5cdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibWluaU1hcmtcIilcblx0XHRcdC5hdHRyKFwiclwiLCBmdW5jdGlvbihkKSB7cmV0dXJuIGQucmFkaXVzO30pXG5cdFx0XHQvLyAuc3R5bGUoc3R5bGVzQmFzZSk7XG5cdFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIG1pbmlNYXJrT3BhY2l0eSk7XG5cblxuXHRcdHN3aXRjaCAobWFya1R5cGUpIHtcblx0XHRcdGNhc2UgJ2NpcmNsZSc6XG5cdFx0XHRcdC8vbWFpbiBpdGVtc1xuXHRcdFx0XHR2YXIgeWVhckl0ZW1zID0gbWFpbkNsaXBQYXRoLmFwcGVuZChcImdcIikuc2VsZWN0QWxsKFwiLnllYXJJdGVtXCIpXG5cdFx0XHRcdFx0LmRhdGEoZGF0YUJ5WWVhcilcblx0XHRcdFx0XHQuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInllYXJJdGVtXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0ZC54ID0gMDsgIC8vZm9yIG5vd1xuXHRcdFx0XHRcdFx0ZC55ID0gMDsgIC8vZm9yIG5vd1xuXHRcdFx0XHRcdFx0Ly8gZC5yYWRpdXMgPSBtYWluTWluUmFkICsgKDIgKiBlZlN1bVNjYWxlKGQuc3VtX2VpZ2VuZmFjdG9yKSk7XG5cdFx0XHRcdFx0XHRkLnJhZGl1cyA9IGVmU3VtU2NhbGUoZC5zdW1fZWlnZW5mYWN0b3IpO1xuXHRcdFx0XHRcdFx0Ly8gZC5yYWRpdXMgPSBtYWluTWluUmFkICsgKGQudmFsdWVzLmxlbmd0aCoyKTtcblx0XHRcdFx0XHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dmFyIHllYXJNYXJrcyA9IHllYXJJdGVtcy5hcHBlbmQoXCJjaXJjbGVcIilcblx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwieWVhck1hcmtcIilcblx0XHRcdFx0XHQvLyAub24oJ21vdXNlb3ZlcicsIGV4cGFuZClcblx0XHRcdFx0XHQub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdGNvbnRyYWN0KCk7XG5cdFx0XHRcdFx0XHR2YXIgc2VsID0gcGFwZXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZGQpIHtyZXR1cm4gZGQueWVhcj09PWQueWVhcn0pO1xuXHRcdFx0XHRcdFx0dmFyIHRoaXNZZWFySXRlbSA9IGQzLnNlbGVjdCh0aGlzKTtcblx0XHRcdFx0XHRcdGV4cGFuZChzZWwsIHRoaXNZZWFySXRlbSk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC8vIC5vbignbW91c2VvdXQnLCBjb250cmFjdClcblx0XHRcdFx0XHQuc3R5bGUoc3R5bGVzVmlzaWJsZSk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdC8vbGFiZWwgZm9yIG51bWJlciBvZiBwYXBlcnNcblx0XHRcdFx0eWVhckl0ZW1zLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0XHQuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJ5XCIsIFwiLjNlbVwiKSAgLy9udWRnZVxuXHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJudW1JbmRpY2F0b3JcIilcblx0XHRcdFx0XHQudGV4dChmdW5jdGlvbihkKSB7cmV0dXJuIGQudmFsdWVzLmxlbmd0aDt9KTtcblxuXHRcdFx0XHR2YXIgcGFwZXJJdGVtcyA9IHllYXJJdGVtcy5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcIi5wYXBlckl0ZW1cIilcblx0XHRcdFx0XHQuZGF0YShmdW5jdGlvbihkKSB7cmV0dXJuIGQudmFsdWVzfSlcblx0XHRcdFx0XHQuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInBhcGVySXRlbVwiKVxuXHRcdFx0XHRcdC5hdHRyKFwiZGF0YS15ZWFyXCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyO30pXG5cdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCwgaSkge1xuXHRcdFx0XHRcdFx0ZC54ID0gMDsgIC8vZm9yIG5vd1xuXHRcdFx0XHRcdFx0ZC55ID0gMDsgIC8vZm9yIG5vd1xuXHRcdFx0XHRcdFx0ZC5pZHggPSBpO1xuXHRcdFx0XHRcdFx0Ly8gZC5yYWRpdXMgPSBtYWluTWluUmFkICsgKDIgKiBlZlNjYWxlKGQuZWlnZW5mYWN0b3IpKTtcblx0XHRcdFx0XHRcdGQucmFkaXVzID0gZWZTY2FsZU1haW4oZC5laWdlbmZhY3Rvcik7XG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmF0dHIoXCJ0aXRsZVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdC8vIGZvciB0b29sdGlwXG5cdFx0XHRcdFx0XHRcdC8vIHZhciB0ZXh0ID0gZC50aXRsZVxuXHRcdFx0XHRcdFx0XHQvLyBcdFx0XHQrIFwiLCBcIlxuXHRcdFx0XHRcdFx0XHQvLyBcdFx0XHQrIGQuYXV0aG9ycy5qb2luKFwiLCBcIilcblx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0KyBcIiwgXCJcblx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0KyBkLmpvdXJuYWxcblx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0KyBcIiwgXCJcblx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0KyBkLnllYXI7XG5cdFx0XHRcdFx0XHRcdC8vIHJldHVybiB0ZXh0O1xuXHRcdFx0XHRcdFx0dmFyIHNwYW4gPSAkKCAnPHNwYW4+JyApO1xuXHRcdFx0XHRcdFx0c3Bhbi5hcHBlbmQoICQoICc8cCBjbGFzcz1cInRvb2x0aXAgdGl0bGVcIj4nICkudGV4dChkLnRpdGxlKSApOyBcblx0XHRcdFx0XHRcdHNwYW4uYXBwZW5kKCAkKCAnPHAgY2xhc3M9XCJ0b29sdGlwIGF1dGhvcnNcIj4nICkudGV4dChkLmF1dGhvcnMuam9pbihcIiwgXCIpKSApO1xuXHRcdFx0XHRcdFx0c3Bhbi5hcHBlbmQoICQoICc8cCBjbGFzcz1cInRvb2x0aXAgam91cm5hbFwiPicgKS50ZXh0KGQudmVudWUpICk7IFxuXHRcdFx0XHRcdFx0c3Bhbi5hcHBlbmQoICQoICc8cCBjbGFzcz1cInRvb2x0aXAgeWVhclwiPicgKS50ZXh0KGQueWVhcikgKTsgXG5cdFx0XHRcdFx0XHRyZXR1cm4gc3Bhbi5odG1sKCk7XG5cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Lm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0Ly8gdmFyIHQgPSBkMy5zZWxlY3QodGhpcykuc2VsZWN0KCcucGFwZXJMYWJlbCcpO1xuXHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcblx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJCggdGhpcyApLnBvc2l0aW9uKCkpO1xuXHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygkKCAnLm1haW4nICkucG9zaXRpb24oKS50b3AgKyBtYWluSGVpZ2h0KTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0dmFyIHVybCA9IGQudXJsO1xuXHRcdFx0XHRcdFx0Ly8gd2luZG93Lm9wZW4odXJsLCdfYmxhbmsnKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHR2YXIgcGFwZXJNYXJrcyA9IHBhcGVySXRlbXMuYXBwZW5kKFwiY2lyY2xlXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJyXCIsIDApICAvL2ZvciBub3dcblx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwicGFwZXJNYXJrXCIpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0XG5cdFx0XHRjYXNlICdpY29uJzpcblx0XHRcdFx0Ly9tYWluIGl0ZW1zXG5cdFx0XHRcdHZhciB5ZWFySXRlbXMgPSBtYWluQ2xpcFBhdGguYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoXCIueWVhckl0ZW1cIilcblx0XHRcdFx0XHQuZGF0YShkYXRhQnlZZWFyKVxuXHRcdFx0XHRcdC5lbnRlcigpLmFwcGVuZChcImdcIilcblx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwieWVhckl0ZW1cIilcblx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRkLnggPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0XHRkLnkgPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0XHQvLyBkLnJhZGl1cyA9IG1haW5NaW5SYWQgKyAoMiAqIGVmU3VtU2NhbGUoZC5zdW1fZWlnZW5mYWN0b3IpKTtcblx0XHRcdFx0XHRcdGQucmFkaXVzID0gZWZTdW1TY2FsZShkLnN1bV9laWdlbmZhY3Rvcik7XG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR2YXIgcGFwZXJJdGVtcyA9IHllYXJJdGVtcy5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcIi5wYXBlckl0ZW1cIilcblx0XHRcdFx0XHQuZGF0YShmdW5jdGlvbihkKSB7cmV0dXJuIGQudmFsdWVzfSlcblx0XHRcdFx0XHQuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInBhcGVySXRlbVwiKVxuXHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQsIGkpIHtcblx0XHRcdFx0XHRcdGQueCA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHRcdGQueSA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHRcdGQuaWR4ID0gaTtcblx0XHRcdFx0XHRcdC8vIGQucmFkaXVzID0gbWFpbk1pblJhZCArICgyICogZWZTY2FsZShkLmVpZ2VuZmFjdG9yKSk7XG5cdFx0XHRcdFx0XHRkLnJhZGl1cyA9IGVmU2NhbGVNYWluKGQuZWlnZW5mYWN0b3IpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjtcblx0XHRcdFx0XHR9KTtcblxuXG5cdFx0XHRcdHZhciBwYXBlck1hcmtzID0gcGFwZXJJdGVtcy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInBhcGVyTWFya1wiKVxuXHRcdFx0XHRcdC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwiRm9udEF3ZXNvbWVcIilcblx0XHRcdFx0XHQudGV4dChcIlxcdWYwZjZcIilcblx0XHRcdFx0XHQvLyAub24oJ21vdXNlb3ZlcicsIGV4cGFuZClcblx0XHRcdFx0XHQuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG5cdFx0XHRcdFx0Lm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRjb250cmFjdCgpO1xuXHRcdFx0XHRcdFx0dmFyIHNlbCA9IHBhcGVySXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGRkKSB7cmV0dXJuIGRkLnllYXI9PT1kLnllYXJ9KTtcblx0XHRcdFx0XHRcdGV4cGFuZChzZWwpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Ly8gLm9uKCdtb3VzZW91dCcsIGNvbnRyYWN0KVxuXG5cdFx0XHRcdHZhciBiYm94ID0gcGFwZXJNYXJrcy5ub2RlKCkuZ2V0QkJveCgpO1xuXHRcdFx0XHRwYXBlckl0ZW1zLmluc2VydChcInJlY3RcIiwgXCIucGFwZXJNYXJrXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJ4XCIsIGJib3gueClcblx0XHRcdFx0XHQuYXR0cihcInlcIiwgYmJveC55KVxuXHRcdFx0XHRcdC5hdHRyKFwid2lkdGhcIiwgYmJveC53aWR0aClcblx0XHRcdFx0XHQuYXR0cihcImhlaWdodFwiLCBiYm94LmhlaWdodClcblx0XHRcdFx0XHQuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIik7XG5cblx0XHRcdFx0Ly8gLy9tYWluIGl0ZW1zXG5cdFx0XHRcdC8vIHZhciBwYXBlckl0ZW1zID0gbWFpbkNsaXBQYXRoLmFwcGVuZChcImdcIikuc2VsZWN0QWxsKFwiLnBhcGVySXRlbVwiKVxuXHRcdFx0XHQvLyBcdC5kYXRhKGRhdGFfdG90YWwpXG5cdFx0XHRcdC8vIFx0LmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHQvLyBcdC5hdHRyKFwiY2xhc3NcIiwgXCJwYXBlckl0ZW1cIilcblx0XHRcdFx0Ly8gXHQuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdC8vIFx0XHRkLnggPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdC8vIFx0XHRkLnkgPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdC8vIFx0XHRkLnJhZGl1cyA9IG1haW5NaW5SYWQgKyAoMiAqIGVmU3VtU2NhbGUoZC5zdW1fZWlnZW5mYWN0b3IpKTtcblx0XHRcdFx0Ly8gXHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdC8vIFx0fSk7XG5cdFx0XHRcdC8vIHZhciBwYXBlck1hcmtzID0gcGFwZXJJdGVtcy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdC8vIFx0LmF0dHIoXCJjbGFzc1wiLCBcInBhcGVyTWFya1wiKVxuXHRcdFx0XHQvLyBcdC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwiRm9udEF3ZXNvbWVcIilcblx0XHRcdFx0Ly8gXHQudGV4dChcIlxcdWYwZjZcIilcblx0XHRcdFx0Ly8gXHQvLyAub24oJ21vdXNlb3ZlcicsIGV4cGFuZClcblx0XHRcdFx0Ly8gXHQub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0Ly8gXHRcdGNvbnRyYWN0KCk7XG5cdFx0XHRcdC8vIFx0XHR2YXIgc2VsID0gcGFwZXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZGQpIHtyZXR1cm4gZGQueWVhcj09PWQueWVhcn0pO1xuXHRcdFx0XHQvLyBcdFx0ZXhwYW5kKHNlbCk7XG5cdFx0XHRcdC8vIFx0XHR9KTtcblx0XHRcdFx0Ly8gXHQvLyAub24oJ21vdXNlb3V0JywgY29udHJhY3QpXG5cblx0XHRcdFx0Ly8gdmFyIHllYXJJdGVtcyA9IG1haW5DbGlwUGF0aC5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcIi55ZWFySXRlbVwiKVxuXHRcdFx0XHQvLyBcdC5kYXRhKGRhdGFCeVllYXIpXG5cdFx0XHRcdC8vIFx0LmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHQvLyBcdC5hdHRyKFwiY2xhc3NcIiwgXCJ5ZWFySXRlbVwiKVxuXHRcdFx0XHQvLyBcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0Ly8gXHRcdGQueCA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0Ly8gXHRcdGQueSA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0Ly8gXHRcdGQucmFkaXVzID0gbWFpbk1pblJhZCArICgyICogZWZTdW1TY2FsZShkLnN1bV9laWdlbmZhY3RvcikpO1xuXHRcdFx0XHQvLyBcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjtcblx0XHRcdFx0Ly8gXHR9KTtcblx0XHRcdFx0Ly8gdmFyIHllYXJNYXJrcyA9IHllYXJJdGVtcy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdC8vIFx0LmF0dHIoXCJjbGFzc1wiLCBcInllYXJNYXJrXCIpXG5cdFx0XHRcdC8vIFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0XHQvLyBcdC50ZXh0KFwiXFx1ZjBmNlwiKVxuXHRcdFx0XHQvLyBcdC8vIC5vbignbW91c2VvdmVyJywgZXhwYW5kKVxuXHRcdFx0XHQvLyBcdC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHQvLyBcdFx0Y29udHJhY3QoKTtcblx0XHRcdFx0Ly8gXHRcdHZhciBzZWwgPSBwYXBlckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkZCkge3JldHVybiBkZC55ZWFyPT09ZC55ZWFyfSk7XG5cdFx0XHRcdC8vIFx0XHRleHBhbmQoc2VsKTtcblx0XHRcdFx0Ly8gXHRcdH0pO1xuXHRcdFx0XHQvLyBcdC8vIC5vbignbW91c2VvdXQnLCBjb250cmFjdClcblxuXHRcdFx0XHRicmVhaztcblx0XHRcdFx0XG5cdFx0fVxuXG5cblx0XHR2YXIgcGFwZXJMYWJlbHMgPSBwYXBlckl0ZW1zLmFwcGVuZChcInRleHRcIilcblx0XHRcdC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcblx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJwYXBlckxhYmVsXCIpXG5cdFx0XHQuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKVxuXHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoLTE1LDApXCIpICAvLyBudWRnZSBsZWZ0XG5cdFx0XHQvLyAudGV4dChmdW5jdGlvbihkKSB7cmV0dXJuIGQudGl0bGU7fSk7XG5cdFx0XHQuaHRtbChmdW5jdGlvbihkKSB7cmV0dXJuICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJyArIGQudXJsICsgJ1wiPicgKyBkLnRpdGxlICsgJzwvYT4nO30pO1xuXG5cblxuXHRcdC8vbWluaSBsYWJlbHNcblx0XHQvLyBtaW5pLmFwcGVuZChcImdcIikuc2VsZWN0QWxsKFwiLm1pbmlMYWJlbHNcIilcblx0XHQvLyBcdC5kYXRhKGRhdGEpXG5cdFx0Ly8gXHQuZW50ZXIoKS5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0Ly8gXHQudGV4dChmdW5jdGlvbihkKSB7cmV0dXJuIGQuaWQ7fSlcblx0XHQvLyBcdC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7cmV0dXJuIHgoZC5zdGFydCk7fSlcblx0XHQvLyBcdC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7cmV0dXJuIHkyKGQubGFuZSArIC41KTt9KVxuXHRcdC8vIFx0LmF0dHIoXCJkeVwiLCBcIi41ZXhcIik7XG5cblx0XHQvL2JydXNoXG5cdFx0dmFyIGJydXNoID0gZDMuc3ZnLmJydXNoKClcblx0XHRcdFx0XHRcdFx0LngoeClcblx0XHRcdFx0XHRcdFx0Lm9uKFwiYnJ1c2hcIiwgZGlzcGxheSk7XG5cblx0XHRtaW5pLmFwcGVuZChcImdcIilcblx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJ4IGJydXNoXCIpXG5cdFx0XHQuY2FsbChicnVzaClcblx0XHRcdC5zZWxlY3RBbGwoXCJyZWN0XCIpXG5cdFx0XHQuYXR0cihcInlcIiwgMSlcblx0XHRcdC5hdHRyKFwiaGVpZ2h0XCIsIG1pbmlIZWlnaHQgLSAxKTtcblxuXHRcdHZhciBleHRlbnRMaW5lcyA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMiA7IGkrKykge1xuXHRcdFx0ZXh0ZW50TGluZXMucHVzaChjaGFydC5hcHBlbmQoXCJsaW5lXCIpLmF0dHIoXCJjbGFzc1wiLCBcImV4dGVudExpbmVcIikpO1xuXHRcdH1cblx0XHRmdW5jdGlvbiB1cGRhdGVFeHRlbnRMaW5lcyhsZWZ0LCByaWdodCkge1xuXHRcdFx0aWYgKGJydXNoLmVtcHR5KCkpIHtcblx0XHRcdFx0ZXh0ZW50TGluZXMuZm9yRWFjaChmdW5jdGlvbihzZWwpIHtzZWwuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTt9KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZXh0ZW50TGluZXMuZm9yRWFjaChmdW5jdGlvbihzZWwpIHtzZWwuc3R5bGUoXCJkaXNwbGF5XCIsIFwiXCIpO30pXG5cdFx0XHRcdGV4dGVudExpbmVzWzBdLmF0dHIoXCJ4MVwiLCBtWzNdKVxuXHRcdFx0XHRcdC5hdHRyKFwieTFcIiwgbVswXSlcblx0XHRcdFx0XHQuYXR0cihcIngyXCIsIGxlZnQgKyBtWzNdKVxuXHRcdFx0XHRcdC5hdHRyKFwieTJcIiwgKG1haW5IZWlnaHQgKyBtWzBdKSk7XG5cdFx0XHRcdGV4dGVudExpbmVzWzFdLmF0dHIoXCJ4MVwiLCB3K21bM10pXG5cdFx0XHRcdFx0LmF0dHIoXCJ5MVwiLCBtWzBdKVxuXHRcdFx0XHRcdC5hdHRyKFwieDJcIiwgcmlnaHQgKyBtWzNdKVxuXHRcdFx0XHRcdC5hdHRyKFwieTJcIiwgKG1haW5IZWlnaHQgKyBtWzBdKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIHNjcm9sbER1ciA9IDE1MDtcblx0XHRmdW5jdGlvbiBtb3ZlQnJ1c2goZGlyZWN0aW9uKSB7XG5cdFx0XHQvLyBpZiAoYnJ1c2guZW1wdHkoKSB8fCBtaW5FeHRlbnQ8dGltZUJlZ2luIHx8IG1heEV4dGVudD50aW1lRW5kKSB7XG5cdFx0XHRpZiAoYnJ1c2guZW1wdHkoKSkge1xuXHRcdFx0XHRtaW5FeHRlbnQgPSAodGltZUVuZCArIHRpbWVCZWdpbikgLyAyO1xuXHRcdFx0XHRtYXhFeHRlbnQgPSAoICh0aW1lRW5kICsgdGltZUJlZ2luKSAvIDIgKSArIDE7XG5cdFx0XHRcdGNoYW5nZUV4dGVudChtaW5FeHRlbnQsIG1heEV4dGVudCwgMCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAoZGlyZWN0aW9uKSB7XG5cdFx0XHRcdGNhc2UgJ2xlZnQnOlxuXHRcdFx0XHRcdGNoYW5nZUV4dGVudChNYXRoLnJvdW5kKG1pbkV4dGVudC0xKSwgTWF0aC5yb3VuZChtYXhFeHRlbnQtMSksIHNjcm9sbER1ciwgXCJsaW5lYXJcIik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAncmlnaHQnOlxuXHRcdFx0XHRcdGNoYW5nZUV4dGVudChNYXRoLnJvdW5kKG1pbkV4dGVudCsxKSwgTWF0aC5yb3VuZChtYXhFeHRlbnQrMSksIHNjcm9sbER1ciwgXCJsaW5lYXJcIik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnem9vbUluJzpcblx0XHRcdFx0XHRjaGFuZ2VFeHRlbnQoTWF0aC5yb3VuZChtaW5FeHRlbnQrMSksIE1hdGgucm91bmQobWF4RXh0ZW50LTEpLCBzY3JvbGxEdXIsIFwibGluZWFyXCIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ3pvb21PdXQnOlxuXHRcdFx0XHRcdGNoYW5nZUV4dGVudChNYXRoLnJvdW5kKG1pbkV4dGVudC0xKSwgTWF0aC5yb3VuZChtYXhFeHRlbnQrMSksIHNjcm9sbER1ciwgXCJsaW5lYXJcIik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIHNjcm9sbEl0ZW1zID0gbWFpbkNsaXBQYXRoLmFwcGVuZChcImdcIilcblx0XHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInNjcm9sbEl0ZW1zXCIpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyAobWFpbkhlaWdodCowLjcpICsgXCIpXCIpO1xuXHRcdHNjcm9sbEl0ZW1zLmFwcGVuZChcInRleHRcIilcblx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJsZWZ0QXJyb3dcIilcblx0XHRcdC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwiRm9udEF3ZXNvbWVcIilcblx0XHRcdC50ZXh0KFwiXFx1ZjA2MFwiKVxuXHRcdFx0LmF0dHIoXCJ4XCIsIDApXG5cdFx0XHQvLyAuYXR0cihcInlcIiwgbWFpbkhlaWdodCAvIDIpXG5cdFx0XHQvLyAuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxLjVlbVwiKVxuXHRcdFx0Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8vIGNoYW5nZUV4dGVudChNYXRoLnJvdW5kKG1pbkV4dGVudC0xKSwgTWF0aC5yb3VuZChtYXhFeHRlbnQtMSksIHNjcm9sbER1ciwgXCJsaW5lYXJcIik7XG5cdFx0XHRcdG1vdmVCcnVzaCgnbGVmdCcpO1xuXHRcdFx0XHR9KTtcblx0XHRzY3JvbGxJdGVtcy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHQuYXR0cihcImNsYXNzXCIsIFwicmlnaHRBcnJvd1wiKVxuXHRcdFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0LnRleHQoXCJcXHVmMDYxXCIpXG5cdFx0XHQuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG5cdFx0XHQuYXR0cihcInhcIiwgdylcblx0XHRcdC8vIC5hdHRyKFwieVwiLCBtYWluSGVpZ2h0IC8gMilcblx0XHRcdC8vIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjEuNWVtXCIpXG5cdFx0XHQub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gY2hhbmdlRXh0ZW50KE1hdGgucm91bmQobWluRXh0ZW50KzEpLCBNYXRoLnJvdW5kKG1heEV4dGVudCsxKSwgc2Nyb2xsRHVyLCBcImxpbmVhclwiKTtcblx0XHRcdFx0bW92ZUJydXNoKCdyaWdodCcpO1xuXHRcdFx0XHR9KTtcblxuXHRcdHZhciB6b29tSXRlbXMgPSBzY3JvbGxJdGVtcy5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJ6b29tSXRlbXNcIilcblx0XHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAody1tWzFdLTEwKSArIFwiLDMwKVwiKVxuXHRcdFx0XHRcdFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIC4wMSlcblx0XHRcdFx0XHRcdFx0Lm9uKFwibW91c2VvdmVyXCIsIHpvb21Nb3VzZU92ZXIpXG5cdFx0XHRcdFx0XHRcdC5vbihcIm1vdXNlb3V0XCIsIHpvb21Nb3VzZU91dCk7XG5cdFx0Ly8gc2Nyb2xsSXRlbXMuYXBwZW5kKFwidGV4dFwiKVxuXHRcdHpvb21JdGVtcy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHQuYXR0cihcImNsYXNzXCIsIFwiem9vbUluXCIpXG5cdFx0XHQuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcIkZvbnRBd2Vzb21lXCIpXG5cdFx0XHQudGV4dChcIlxcdWYxOTZcIikgIC8vIGh0dHA6Ly9mb250YXdlc29tZS5pby9pY29uL3BsdXMtc3F1YXJlLW8vXG5cdFx0XHQvLyAuYXR0cihcInhcIiwgMTApXG5cdFx0XHQvLyAuYXR0cihcInlcIiwgbWFpbkhlaWdodCAvIDIpXG5cdFx0XHQvLyAuYXR0cihcInhcIiwgdy1tWzFdLTEwKVxuXHRcdFx0Ly8gLmF0dHIoXCJ5XCIsIDMwKVxuXHRcdFx0Ly8gLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMS41ZW1cIilcblx0XHRcdC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBjaGFuZ2VFeHRlbnQoTWF0aC5yb3VuZChtaW5FeHRlbnQrMSksIE1hdGgucm91bmQobWF4RXh0ZW50LTEpLCBzY3JvbGxEdXIsIFwibGluZWFyXCIpO1xuXHRcdFx0XHRtb3ZlQnJ1c2goJ3pvb21JbicpXG5cdFx0XHRcdH0pO1xuXHRcdHpvb21JdGVtcy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHQuYXR0cihcImNsYXNzXCIsIFwiem9vbU91dFwiKVxuXHRcdFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0LnRleHQoXCJcXHVmMTQ3XCIpICAvLyBodHRwOi8vZm9udGF3ZXNvbWUuaW8vaWNvbi9taW51cy1zcXVhcmUtby9cblx0XHRcdC8vIC5hdHRyKFwieVwiLCBtYWluSGVpZ2h0IC8gMilcblx0XHRcdC8vIC5hdHRyKFwieFwiLCB3LW1bMV0tMTApXG5cdFx0XHQvLyAuYXR0cihcInlcIiwgNTApXG5cdFx0XHQuYXR0cihcInlcIiwgMjApXG5cdFx0XHQvLyAuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxLjVlbVwiKVxuXHRcdFx0Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8vIGNoYW5nZUV4dGVudChNYXRoLnJvdW5kKG1pbkV4dGVudC0xKSwgTWF0aC5yb3VuZChtYXhFeHRlbnQrMSksIHNjcm9sbER1ciwgXCJsaW5lYXJcIik7XG5cdFx0XHRcdG1vdmVCcnVzaCgnem9vbU91dCcpO1xuXHRcdFx0XHR9KTtcblxuXHRcdGZ1bmN0aW9uIHpvb21Nb3VzZU92ZXIoKSB7XG5cdFx0XHQvLyAkKCAnLnpvb21JbiwgLnpvb21PdXQnICkuZmFkZVRvKDQwMCwgMSk7XG5cdFx0XHQkKCAnLnpvb21JdGVtcycgKS5zdG9wKCkuZmFkZVRvKDQwMCwgMSk7XG5cdFx0fVxuXHRcdGZ1bmN0aW9uIHpvb21Nb3VzZU91dCgpIHtcblx0XHRcdC8vICQoICcuem9vbUluLCAuem9vbU91dCcgKS5mYWRlVG8oNDAwLCAuMDEpO1xuXHRcdFx0JCggJy56b29tSXRlbXMnICkuc3RvcCgpLmZhZGVUbyg0MDAsIC4wMSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWNvbiB0byBjbGVhciB0aGUgYnJ1c2guIEZpbmlzaCBpbml0aWFsaXppbmcgaXQgaW4gZGlzcGxheSgpXG5cdFx0Ly8gdmFyIGNsZWFyQnJ1c2hJY29uID0gZDMuc2VsZWN0KFwiLmJydXNoXCIpLmFwcGVuZChcInRleHRcIilcblx0XHR2YXIgY2xlYXJCcnVzaEljb24gPSBtaW5pLmFwcGVuZChcInRleHRcIilcblx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJjbGVhckJydXNoSWNvblwiKVxuXHRcdFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0LnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMWVtXCIpXG5cdFx0XHQuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG5cdFx0XHQuYXR0cihcInRpdGxlXCIsIFwiQ2xlYXIgdGhlIHRpbWVsaW5lIGluIG9yZGVyIHRvIGRyYXcgYSBuZXcgcmVnaW9uXCIpXG5cdFx0XHQudGV4dChcIlxcdWYwMGRcIik7XG5cblx0XHRjaGFydC5vbihcIndoZWVsLnpvb21cIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmIChkMy5ldmVudC53aGVlbERlbHRhWT4wKSB7XG5cdFx0XHRcdFx0bW92ZUJydXNoKCd6b29tSW4nKTtcblx0XHRcdFx0fSBlbHNlIGlmIChkMy5ldmVudC53aGVlbERlbHRhWTwwKSB7XG5cdFx0XHRcdFx0bW92ZUJydXNoKCd6b29tT3V0Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGQzLmV2ZW50LndoZWVsRGVsdGFYPjApIHtcblx0XHRcdFx0XHRtb3ZlQnJ1c2goJ2xlZnQnKTtcblx0XHRcdFx0fSBlbHNlIGlmIChkMy5ldmVudC53aGVlbERlbHRhWDwwKSB7XG5cdFx0XHRcdFx0bW92ZUJydXNoKCdyaWdodCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdC8vIGluaXRpYWxpemUgYnJ1c2hcblx0XHR2YXIgbWlkcG9pbnRZZWFyID0gKCB0aW1lRW5kICsgdGltZUJlZ2luICkgLyAyLFxuXHRcdFx0YnJ1c2hJbml0ID0gW21pZHBvaW50WWVhciwgbWlkcG9pbnRZZWFyXTtcblx0XG5cdFx0Ly8gYnJ1c2guZXh0ZW50KGJydXNoSW5pdCk7XG5cdFx0bWluaS5zZWxlY3QoXCIuYnJ1c2hcIikuY2FsbChicnVzaC5leHRlbnQoYnJ1c2hJbml0KSk7XG5cblx0XHRkaXNwbGF5KCk7XG5cdFx0XG5cdFx0JCggZG9jdW1lbnQgKS50cmlnZ2VyKCBcInRpbWVsaW5lVmlzOmluaXRDb21wbGV0ZVwiICk7XG5cblxuXHRcdC8vIC8vIEknbSBub3Qgc3VyZSB0aGVyZSdzIGEgd2F5IHRvIHVzZSBkMyB0cmFuc2l0aW9ucyB0byBjb250cm9sIHRoZSBicnVzaCwgYnV0IGhlcmUncyBhIGhhY2t5IHdheSBvZiBkb2luZyBpdCBtYW51YWxseS5cblx0XHQvLyB2YXIgZGx5ID0gMzA7XG5cdFx0Ly8gZnVuY3Rpb24gYnJ1c2hUcmFuc2l0aW9uKGRseSkge1xuXHRcdC8vIFx0Y3VyckV4dGVudCA9IFticnVzaC5leHRlbnQoKVswXSwgYnJ1c2guZXh0ZW50KClbMV1dO1xuXHRcdC8vIFx0YnJ1c2goZDMuc2VsZWN0KFwiLmJydXNoXCIpLnRyYW5zaXRpb24oKS5kdXJhdGlvbihkbHkpLmNhbGwoZGlzcGxheSkpO1xuXHRcdC8vIFx0Ly8gYnJ1c2guZXZlbnQoZDMuc2VsZWN0KFwiLmJydXNoXCIpLnRyYW5zaXRpb24oKS5kZWxheShkbHkpLmR1cmF0aW9uKDApKTtcblx0XHQvLyB9XG5cdFx0Ly8gLy8gYnJ1c2guZXh0ZW50KFsxOTcwLDIwMDBdKTtcblx0XHQvLyB2YXIgbWluRXh0ZW50ID0gYnJ1c2guZXh0ZW50KClbMF0sXG5cdFx0Ly8gXHRtYXhFeHRlbnQgPSBicnVzaC5leHRlbnQoKVsxXTtcblx0XHQvLyB2YXIgZGVzdGluYXRpb25FeHRlbnQgPSAxOTk4O1xuXHRcdC8vIHZhciBpID0gbWF4RXh0ZW50O1xuXHRcdC8vIHZhciByZWZyZXNoSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdC8vIFx0ICAgXHRpID0gaSArIDAuMjtcblx0XHQvLyBcdFx0YnJ1c2guZXh0ZW50KFttaW5FeHRlbnQsIGldKTtcblx0XHQvLyBcdFx0YnJ1c2hUcmFuc2l0aW9uKGRseSk7XG5cdFx0Ly8gXHRcdGlmIChpID49IGRlc3RpbmF0aW9uRXh0ZW50KSB7XG5cdFx0Ly8gXHRcdFx0Y2xlYXJJbnRlcnZhbChyZWZyZXNoSW50ZXJ2YWxJZCk7XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH0sIGRseSk7XG5cblx0XHQvLyAvLyBhdHRlbXB0IHRvIHVzZSB0d2VlbiBmdW5jdGlvbiB0byBkbyBpdC4gbm90IHJlYWxseSB3b3JraW5nXG5cdFx0Ly8gYnJ1c2guZXh0ZW50KFsxOTcwLCAyMDA1XSk7XG5cdFx0Ly8gYnJ1c2goZDMuc2VsZWN0KFwiLmJydXNoXCIpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig1MDAwKVxuXHRcdC8vIFx0XHQudHdlZW4oXCJzaWRlLWVmZmVjdHNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbih0LCB0dCwgdHR0KSB7IGNvbnNvbGUubG9nKGJydXNoLmV4dGVudCgpWzBdKTtcblx0XHQvLyBcdFx0XHRicnVzaC5ldmVudChkMy5zZWxlY3QoXCIuYnJ1c2hcIikudHJhbnNpdGlvbigpLmRlbGF5KHQpLmR1cmF0aW9uKDApKTtcblx0XHQvLyBcdFx0fTt9KSk7XG5cdFx0Ly8gYnJ1c2goZDMuc2VsZWN0KFwiLmJydXNoXCIpLnRyYW5zaXRpb24oKS5kdXJhdGlvbigxMDAwKSk7XG5cdFx0Ly8gYnJ1c2guZXZlbnQoZDMuc2VsZWN0KFwiLmJydXNoXCIpLnRyYW5zaXRpb24oKS5kZWxheSgxMDAwKS5kdXJhdGlvbigwKSk7XG5cblxuXHRcdGZ1bmN0aW9uIGNoYW5nZUV4dGVudCh5ZWFyMSwgeWVhcjIsIGR1cmF0aW9uLCBlYXNlLCBkZWxheSkge1xuXHRcdFx0aWYgKGR1cmF0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZHVyYXRpb24gPSAxMDAwO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVhc2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRlYXNlID0gXCJjdWJpYy1pbi1vdXRcIjtcblx0XHRcdH1cblx0XHRcdGlmIChkZWxheSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGRlbGF5ID0gMDtcblx0XHRcdH1cblx0XHRcdGlmICh5ZWFyMSA8IHRpbWVCZWdpbikge1xuXHRcdFx0XHR5ZWFyMSA9IHRpbWVCZWdpbjtcblx0XHRcdH1cblx0XHRcdGlmICh5ZWFyMiA+IHRpbWVFbmQpIHtcblx0XHRcdFx0eWVhcjIgPSB0aW1lRW5kO1xuXHRcdFx0fVxuXHRcdFx0YnJ1c2guZXZlbnQobWluaS5zZWxlY3QoXCIuYnJ1c2hcIikudHJhbnNpdGlvbigpLmRlbGF5KGRlbGF5KS5kdXJhdGlvbihkdXJhdGlvbikuZWFzZShlYXNlKS5jYWxsKGJydXNoLmV4dGVudChbeWVhcjEsIHllYXIyXSkpKTtcblxuXHRcdH1cblx0XHQvL1xuXHRcdC8vIFRoaXMgd29ya3MhIChhZnRlciBtb2RpZnlpbmcgdGhlIGRpc3BsYXkoKSBmdW5jdGlvbi4gc2VlIHRoZSBub3RlIGF0IHRoZSB0b3Agb2YgZGlzcGxheSgpKVxuXHRcdC8vIGJydXNoLmV2ZW50KG1pbmkuc2VsZWN0KFwiLmJydXNoXCIpLnRyYW5zaXRpb24oKS5kZWxheSgxMDAwKS5kdXJhdGlvbigxMDAwKS5jYWxsKGJydXNoLmV4dGVudChbMTk3MCwgMjAwMF0pKVxuXHRcdC8vIFx0XHQuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtjb25zb2xlLmxvZyhcImluaXRpYWxpemVkXCIpO30pKTtcblx0XHQvLyB2YXIgaW5pdER1cmF0aW9uID0gMTAwMCxcblx0XHQvLyBcdGluaXREZWxheSA9IDEwMDA7XG5cdFx0Ly8gY2hhbmdlRXh0ZW50KDE5NzAsIDIwMDAsIGluaXREdXJhdGlvbiwgXCJjdWJpYy1pbi1vdXRcIiwgaW5pdERlbGF5KTtcblx0XHQvLyBkMy50cmFuc2l0aW9uKFwiaW5pdERlbW9UcmFuc2l0aW9uXCIpLmRlbGF5KGluaXREZWxheSArIGluaXREdXJhdGlvbilcblx0XHQvLyBcdC5lYWNoKFwiZW5kXCIsIGRlbW9FeHBhbmQpO1xuXHRcdC8vIGRlbW9Jbml0KCk7XG5cblx0XHQvLyBub3QgdXNpbmcgdGhpcyBjdXJyZW50bHlcblx0XHRmdW5jdGlvbiBleHBhbmRBbGwoKSB7XG5cdFx0XHRleHBhbmQocGFwZXJJdGVtcyk7XG5cdFx0fVxuXHRcdHZhciBtYXhFRiA9IGQzLm1heChkYXRhX3RvdGFsLCBmdW5jdGlvbihkKSB7cmV0dXJuIGQuZWlnZW5mYWN0b3I7fSk7XG5cblx0XHRmdW5jdGlvbiBjbGVhckJydXNoKCkge1xuXHRcdFx0dmFyIG1pZCA9IChicnVzaC5leHRlbnQoKVsxXSArIGJydXNoLmV4dGVudCgpWzBdKSAvIDI7XG5cdFx0XHRjaGFuZ2VFeHRlbnQobWlkLCBtaWQsIDApO1xuXHRcdH1cblx0XHRcblx0XHRmdW5jdGlvbiBkaXNwbGF5KCkge1xuXHRcdFx0Ly8gbm90ZTogY2FsY3VsYXRpbmcgdGhlIGJydXNoIGV4dGVudCB1c2luZyBicnVzaC5leHRlbnQoKSBkb2Vzbid0IHJlYWxseSB3b3JrIGhlcmUgKHdpdGggdHJhbnNpdGlvbiB0aWNrcylcblx0XHRcdC8vIGJlY2F1c2UgaXQgZ29lcyB0aGUgZmluYWwgZXh0ZW50IHZhbHVlcyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSB0cmFuc2l0aW9uLlxuXHRcdFx0Ly8gU28gaW5zdGVhZCwgZ2V0IHRoZSBtZWFzdXJlbWVudHMgb2YgdGhlIGJydXNoIGVsZW1lbnQgYW5kIGNhbGN1bGF0ZSB0aGUgZXh0ZW50IHVzaW5nIHRoZSBzY2FsZSAoeC5pbnZlcnQoKSlcblx0XHRcdHZhciBleHRlbnRTZWxlY3QgPSBtaW5pLnNlbGVjdChcIi5icnVzaFwiKS5zZWxlY3QoXCIuZXh0ZW50XCIpO1xuXHRcdFx0dmFyIG1pbkV4dGVudFNjcmVlbiA9ICtleHRlbnRTZWxlY3QuYXR0cihcInhcIik7XG5cdFx0XHR2YXIgbWF4RXh0ZW50U2NyZWVuID0gbWluRXh0ZW50U2NyZWVuICsgKCtleHRlbnRTZWxlY3QuYXR0cihcIndpZHRoXCIpKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHguaW52ZXJ0KG1heEV4dGVudFNjcmVlbikpO1xuXHRcdFx0Ly8gdmFyIG1pbkV4dGVudCA9IGJydXNoLmV4dGVudCgpWzBdLFxuXHRcdFx0Ly8gXHRtYXhFeHRlbnQgPSBicnVzaC5leHRlbnQoKVsxXSxcblx0XHRcdG1pbkV4dGVudCA9IHguaW52ZXJ0KG1pbkV4dGVudFNjcmVlbik7XG5cdFx0XHRtYXhFeHRlbnQgPSB4LmludmVydChtYXhFeHRlbnRTY3JlZW4pO1xuXG5cblxuXHRcdFx0Ly8gaGlkZSBhcnJvd3MgaWYgeW91IGNhbid0IGdvIGFueSBmdXJ0aGVyXG5cdFx0XHRpZiAobWluRXh0ZW50IDw9IHRpbWVCZWdpbikge1xuXHRcdFx0XHRkMy5zZWxlY3QoXCIubGVmdEFycm93XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkMy5zZWxlY3QoXCIubGVmdEFycm93XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIlwiKTtcblx0XHRcdH1cblx0XHRcdGlmIChtYXhFeHRlbnQgPj0gdGltZUVuZCkge1xuXHRcdFx0XHRkMy5zZWxlY3QoXCIucmlnaHRBcnJvd1wiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZDMuc2VsZWN0KFwiLnJpZ2h0QXJyb3dcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwiXCIpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gaGlkZSB0aGUgem9vbUluIGJ1dHRvbiBpZiB3ZSdyZSB6b29tZWQgaW4gdG9vIGZhclxuXHRcdFx0aWYgKG1heEV4dGVudCAtIG1pbkV4dGVudCA8PSAyKSB7XG5cdFx0XHRcdC8vIGQzLnNlbGVjdChcIi56b29tSW5cIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdFx0ZDMuc2VsZWN0KFwiLnpvb21JblwiKS5jbGFzc2VkKFwiaGlkZGVuXCIsIHRydWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gZDMuc2VsZWN0KFwiLnpvb21JblwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJcIik7XG5cdFx0XHRcdGQzLnNlbGVjdChcIi56b29tSW5cIikuY2xhc3NlZChcImhpZGRlblwiLCBmYWxzZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChicnVzaC5lbXB0eSgpKSB7XG5cdFx0XHRcdGNsZWFyQnJ1c2hJY29uLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdGQzLnNlbGVjdChcIi5sZWZ0QXJyb3dcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdFx0ZDMuc2VsZWN0KFwiLnJpZ2h0QXJyb3dcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsZWFyQnJ1c2hJY29uLnN0eWxlKFwiZGlzcGxheVwiLCBcIlwiKVxuXHRcdFx0XHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgMClcblx0XHRcdFx0XHQvLyAuc3R5bGUoXCJ6LWluZGV4XCIsIC05OSlcblx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBjb25zdHJ1Y3RUcmFuc2xhdGUobWF4RXh0ZW50U2NyZWVuLTIsIDE1KSlcblx0XHRcdFx0XHQudHJhbnNpdGlvbigpLmR1cmF0aW9uKDMwMClcblx0XHRcdFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIC40KTtcblx0XHRcdFx0Y2xlYXJCcnVzaEljb24ub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRjbGVhckJydXNoKCk7XG5cdFx0XHRcdFx0Y29udHJhY3QoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblxuXG5cdFx0XHQvLyBIaWRlIG1haW4gaXRlbXMgaWYgdGhlIGJydXNoIGlzIGVtcHR5XG5cdFx0XHRpZiAoYnJ1c2guZW1wdHkoKSkge1xuXHRcdFx0XHQvLyB5ZWFySXRlbXMuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdFx0Ly8gY2hhbmdlRXh0ZW50KHRpbWVCZWdpbiwgdGltZUVuZCwgMCk7XG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIHNob3cgYWxsIG1haW4gaXRlbXMsIGJ1dCBrZWVwIHRoZSBicnVzaCBoaWRkZW5cblx0XHRcdFx0dXBkYXRlTWFpbih0aW1lQmVnaW4sdGltZUVuZCk7XG5cdFx0XHRcdC8vIHRoaXMgd2lsbCByZW1vdmUgdGhlIGV4dGVudCBsaW5lczpcblx0XHRcdFx0dXBkYXRlRXh0ZW50TGluZXMoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGQzLnNlbGVjdChcIi5icnVzaFwiKS5hdHRyKFwiZGlzcGxheVwiLCBcIlwiKTtcblx0XHRcdFx0dXBkYXRlTWFpbihtaW5FeHRlbnQsIG1heEV4dGVudCk7XG5cdFx0XHRcdHVwZGF0ZUV4dGVudExpbmVzKG1pbkV4dGVudFNjcmVlbiwgbWF4RXh0ZW50U2NyZWVuKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiB1cGRhdGVNYWluKG1pbkV4dGVudCwgbWF4RXh0ZW50KSB7XG5cdFx0XHRcblx0XHRcdHN3aXRjaCAobWFya1R5cGUpIHtcblx0XHRcdFx0Y2FzZSAnY2lyY2xlJzpcblx0XHRcdFx0XHR2YXIgdmlzSXRlbXMgPSB5ZWFySXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyIDwgbWF4RXh0ZW50ICYmIGQueWVhciA+IG1pbkV4dGVudDt9KVxuXHRcdFx0XHRcdHZhciBub3RWaXNJdGVtcyA9IHllYXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXI+PSBtYXhFeHRlbnQgfHwgZC55ZWFyIDw9IG1pbkV4dGVudDt9KTtcblx0XHRcdFx0XHR2aXNJdGVtcy5zdHlsZShcImRpc3BsYXlcIiwgXCJcIik7XG5cdFx0XHRcdFx0bm90VmlzSXRlbXMuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhicnVzaC5leHRlbnQoKSk7XG5cblx0XHRcdFx0XHQvLyBtaW5pLnNlbGVjdChcIi5icnVzaFwiKVxuXHRcdFx0XHRcdC8vIFx0LmNhbGwoYnJ1c2guZXh0ZW50KFttaW5FeHRlbnQsIG1heEV4dGVudF0pKTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhtYXhFeHRlbnQtbWluRXh0ZW50KTtcblxuXHRcdFx0XHRcdHgxLmRvbWFpbihbbWluRXh0ZW50LCBtYXhFeHRlbnRdKTtcblxuXHRcdFx0XHRcdC8vIHVwZGF0ZSBzdHlsZXMgb2YgbWluaSBpdGVtcyB0aGF0IGFyZSB2aXNpYmxlIGluIHRoZSBtYWluIGRpc3BsYXkuXG5cdFx0XHRcdFx0Ly8gcmVzZXQgYWxsIHRvIG5vcm1hbCwgdGhlbiBzdHlsZSBqdXN0IHRoZSB2aXNpYmxlIG9uZXNcblx0XHRcdFx0XHQvLyBtaW5pSXRlbXMuc3R5bGUoc3R5bGVzQmFzZSk7XG5cdFx0XHRcdFx0bWluaUl0ZW1zLnN0eWxlKHN0eWxlc1Zpc2libGUpO1xuXHRcdFx0XHRcdG1pbmlJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cobWluRXh0ZW50KTtcblx0XHRcdFx0XHRcdHZhciBtYXRjaCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0dmlzSXRlbXMuZm9yRWFjaChmdW5jdGlvbihkZCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoZC5pZD09ZGQuZmlyc3RUaXRsZSkge1xuXHRcdFx0XHRcdFx0XHRcdG1hdGNoID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHRcdFx0XHR9KS5zdHlsZShzdHlsZXNWaXNpYmxlKTtcblxuXHRcdFx0XHRcdC8vdXBkYXRlIG1haW4gaXRlbSBtYXJrc1xuXHRcdFx0XHRcdHZpc0l0ZW1zLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0ZC54ID0geDEoZC55ZWFyKTtcblx0XHRcdFx0XHRcdGQueSA9IHkxKGQubGFuZSkgKyBtYWluTWluUmFkO1xuXHRcdFx0XHRcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHllYXJNYXJrcy5hdHRyKFwiclwiLCBmdW5jdGlvbihkKSB7cmV0dXJuIGQucmFkaXVzO30pO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnaWNvbic6XG5cdFx0XHRcdFx0dmFyIHZpc0l0ZW1zID0geWVhckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhciA8IG1heEV4dGVudCAmJiBkLnllYXIgPiBtaW5FeHRlbnQ7fSlcblx0XHRcdFx0XHR2YXIgbm90VmlzSXRlbXMgPSB5ZWFySXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyPj0gbWF4RXh0ZW50IHx8IGQueWVhciA8PSBtaW5FeHRlbnQ7fSk7XG5cdFx0XHRcdFx0dmlzSXRlbXMuc3R5bGUoXCJkaXNwbGF5XCIsIFwiXCIpO1xuXHRcdFx0XHRcdG5vdFZpc0l0ZW1zLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coYnJ1c2guZXh0ZW50KCkpO1xuXG5cdFx0XHRcdFx0Ly8gbWluaS5zZWxlY3QoXCIuYnJ1c2hcIilcblx0XHRcdFx0XHQvLyBcdC5jYWxsKGJydXNoLmV4dGVudChbbWluRXh0ZW50LCBtYXhFeHRlbnRdKSk7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cobWF4RXh0ZW50LW1pbkV4dGVudCk7XG5cdFx0XHRcdFx0Ly8gdXBkYXRlRXh0ZW50TGluZXMobWluRXh0ZW50U2NyZWVuLCBtYXhFeHRlbnRTY3JlZW4pO1xuXG5cdFx0XHRcdFx0eDEuZG9tYWluKFttaW5FeHRlbnQsIG1heEV4dGVudF0pO1xuXG5cdFx0XHRcdFx0Ly8gdXBkYXRlIHN0eWxlcyBvZiBtaW5pIGl0ZW1zIHRoYXQgYXJlIHZpc2libGUgaW4gdGhlIG1haW4gZGlzcGxheS5cblx0XHRcdFx0XHQvLyByZXNldCBhbGwgdG8gbm9ybWFsLCB0aGVuIHN0eWxlIGp1c3QgdGhlIHZpc2libGUgb25lc1xuXHRcdFx0XHRcdG1pbmlJdGVtcy5zdHlsZShzdHlsZXNCYXNlKTtcblx0XHRcdFx0XHRtaW5pSXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdHZhciBtYXRjaCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0dmlzSXRlbXMuZm9yRWFjaChmdW5jdGlvbihkZCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoZC5pZD09ZGQuZmlyc3RUaXRsZSkge1xuXHRcdFx0XHRcdFx0XHRcdG1hdGNoID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHRcdFx0XHR9KS5zdHlsZShzdHlsZXNWaXNpYmxlKTtcblxuXHRcdFx0XHRcdC8vdXBkYXRlIG1haW4gaXRlbSBtYXJrc1xuXHRcdFx0XHRcdHZpc0l0ZW1zLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0Ly8gZC54ID0geDEoZC55ZWFyKSAtIDEwO1xuXHRcdFx0XHRcdFx0ZC54ID0geDEoZC55ZWFyKTtcblx0XHRcdFx0XHRcdGQueSA9IHkxKGQubGFuZSkgKyAyMDtcblx0XHRcdFx0XHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRwYXBlck1hcmtzLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQuaWR4LzIgKyBcIixcIiArIGQuaWR4KjMgKyBcIilcIjtcblx0XHRcdFx0XHRcdFx0XHQvLyByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBcIjBcIiArIFwiLFwiICsgZC5pZHgqMyArIFwiKVwiO1xuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LnN0eWxlKFwiZmlsbFwiLCBcImJsYWNrXCIpXG5cdFx0XHRcdFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG5cdFx0XHRcdFx0XHQuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxLjVlbVwiKTtcblx0XHRcdFx0XHRcdC8vIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBmdW5jdGlvbihkKSB7cmV0dXJuIChkLnJhZGl1cy8xMCkgKyBcImVtXCI7fSk7XG5cblx0XHRcdFx0XHRwYXBlckl0ZW1zLmVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0dmFyIGl0ZW0gPSBkMy5zZWxlY3QodGhpcyk7XG5cdFx0XHRcdFx0XHR2YXIgbSA9IGl0ZW0uc2VsZWN0KFwiLnBhcGVyTWFya1wiKTtcblx0XHRcdFx0XHRcdHZhciBiYm94ID0gbS5ub2RlKCkuZ2V0QkJveCgpO1xuXHRcdFx0XHRcdFx0aXRlbS5zZWxlY3QoXCJyZWN0XCIpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKFwieFwiLCBiYm94LngpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKFwieVwiLCBiYm94LnkpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKFwid2lkdGhcIiwgYmJveC53aWR0aClcblx0XHRcdFx0XHRcdFx0LmF0dHIoXCJoZWlnaHRcIiwgYmJveC5oZWlnaHQpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIG0uYXR0cihcInRyYW5zZm9ybVwiKSlcblx0XHRcdFx0XHRcdFx0LnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cobS5hdHRyKFwidHJhbnNmb3JtXCIpKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcblx0XHRcdH1cblxuXG5cdFx0XHQvL3VwZGF0ZSB0aGUgaXRlbSBsYWJlbHNcblx0XHRcdC8vIHZhciByb3RhdGUgPSAtMjA7XG5cdFx0XHRmdW5jdGlvbiBfcm90YXRlKHJvdGF0aW9uKSB7XG5cdFx0XHRcdGxhYmVscy5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgXG5cdFx0XHRcdFx0cmV0dXJuIFwicm90YXRlKFwiICsgcm90YXRpb24gKyBcIixcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7IFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdC8vIGNvbnN0cmFpbnQgcmVsYXhhdGlvblxuXHRcdFx0Ly8gaHR0cDovL2JsLm9ja3Mub3JnL3N5bnRhZ21hdGljLzQwNTMwOTZcblx0XHRcdHZhciBhbHBoYSA9IDE7XG5cdFx0XHR2YXIgc3BhY2luZyA9IDE1O1xuXHRcdFx0ZnVuY3Rpb24gcmVsYXgobGFiZWxzKSB7XG5cdFx0XHRcdC8vIE1vdmUgdGV4dCBpZiBvdmVybGFwcGluZyAocmVjdXJzaXZlbHkpXG5cdFx0XHRcdHZhciBhZ2FpbiA9IGZhbHNlO1xuXHRcdFx0XHRsYWJlbHMuZWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZDMuc2VsZWN0KHRoaXMpLmF0dHIoXCJ4XCIpKTtcblx0XHRcdFx0XHR2YXIgYSA9IHRoaXM7XG5cdFx0XHRcdFx0dmFyIGRhID0gZDMuc2VsZWN0KGEpO1xuXHRcdFx0XHRcdHZhciBheCA9IGRhLmF0dHIoXCJ4XCIpO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGF4KTtcblx0XHRcdFx0XHRsYWJlbHMuZWFjaChmdW5jdGlvbihkZCkge1xuXHRcdFx0XHRcdFx0dmFyIGIgPSB0aGlzO1xuXHRcdFx0XHRcdFx0Ly8gaWYgKGEgPT0gYikge1xuXHRcdFx0XHRcdFx0Ly8gXHRyZXR1cm47XG5cdFx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdFx0XHR2YXIgZGIgPSBkMy5zZWxlY3QoYik7XG5cdFx0XHRcdFx0XHR2YXIgYnggPSBkYi5hdHRyKFwieFwiKTtcblx0XHRcdFx0XHRcdHZhciBkZWx0YVggPSBheCAtIGJ4O1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGVsdGFYKTtcblx0XHRcdFx0XHRcdC8vIGlmIChNYXRoLmFicyhkZWx0YVgpID4gc3BhY2luZykge1xuXHRcdFx0XHRcdFx0Ly8gXHRyZXR1cm47XG5cdFx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdFx0XHRpZiAoIChhICE9IGIpICYmIE1hdGguYWJzKGRlbHRhWCkgPCBzcGFjaW5nKSB7XG5cdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRlbHRhWCk7XG5cdFx0XHRcdFx0XHRcdC8vIGNvbGxpc2lvbiBkZXRlY3RlZFxuXHRcdFx0XHRcdFx0XHRhZ2FpbiA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdHZhciBzaWduID0gZGVsdGFYID4gMCA/IDEgOiAtMTtcblx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coYSk7XG5cdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRiLmF0dHIoXCJ4XCIpKTtcblx0XHRcdFx0XHRcdFx0ZC54ID0gK2F4ICsgKHNpZ24qYWxwaGEpO1xuXHRcdFx0XHRcdFx0XHRkZC54ID0gK2J4IC0gKHNpZ24qYWxwaGEpO1xuXHRcdFx0XHRcdFx0XHRkYS5hdHRyKFwieFwiLCBkLngpO1xuXHRcdFx0XHRcdFx0XHRkYi5hdHRyKFwieFwiLCBkZC54KTtcblx0XHRcdFx0XHRcdFx0Ly8gZDMuc2VsZWN0KHRoaXMpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoNTAwLCAwKVwiKTtcblx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGIuYXR0cihcInhcIikpO1xuXHRcdFx0XHRcdFx0XHQvLyBkLnggKz0gc2lnbiphbHBoYTtcblx0XHRcdFx0XHRcdFx0Ly8gYS54ICs9IDE7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZiAoYWdhaW4pIHtcblx0XHRcdFx0XHQvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdC8vIFx0cmVsYXgobGFiZWxzKTtcblx0XHRcdFx0XHQvLyB9LCAyKTtcblx0XHRcdFx0XHRyZWxheChsYWJlbHMpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdF9yb3RhdGUoLTIwKTtcblx0XHRcdFx0XHQvL1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHRcdC8vIGxhYmVscyA9IGl0ZW1SZWN0cy5zZWxlY3RBbGwoXCIueWVhckl0ZW1MYWJlbFwiKVxuXHRcdFx0Ly8gXHQuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkge2QueCA9IHgxKE1hdGgubWF4KGQua2V5LCBtaW5FeHRlbnQpKTsgcmV0dXJuIGQueDt9KVxuXHRcdFx0Ly8gXHQuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkge2QueSA9IGQuY3k7IHJldHVybiBkLnk7fSlcblx0XHRcdC8vIFx0LmRhdGEodmlzSXRlbXMpO1xuXHRcdFx0Ly8gXHQvLyAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkge3JldHVybiB4MShNYXRoLm1heChkLnN0YXJ0LCBtaW5FeHRlbnQpICsgMik7fSk7XG5cdFx0XHQvLyBcdC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIFwicm90YXRlKFwiICsgcm90YXRlICsgXCIsXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiOyB9KTtcblx0XHRcdC8vXG5cdFx0XHQvLyBsYWJlbHMuZW50ZXIoKS5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHQvLyBcdC50ZXh0KGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyICsgXCI6IFwiICsgZC52YWx1ZXMubGVuZ3RoICsgXCIgcGFwZXJzXCI7fSlcblx0XHRcdC8vIFx0LmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHtkLnggPSB4MShNYXRoLm1heChkLmtleSwgbWluRXh0ZW50KSk7IHJldHVybiBkLng7fSlcblx0XHRcdC8vIFx0Ly8gLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHtkLnkgPSB5MShkLmxhbmUgKyAuNSk7IHJldHVybiBkLnk7fSlcblx0XHRcdC8vIFx0Ly8gLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHtkLnkgPSB5MShkLmxhbmUpK3JhZDsgcmV0dXJuIGQueTt9KVxuXHRcdFx0Ly8gXHQuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkge2QueSA9IGQuY3k7IHJldHVybiBkLnk7fSlcblx0XHRcdC8vIFx0LmF0dHIoXCJjbGFzc1wiLCBcInllYXJJdGVtTGFiZWxcIilcblx0XHRcdC8vIFx0LmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuXHRcdFx0Ly8gXHQvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBcInJvdGF0ZShcIiArIHJvdGF0ZSArIFwiLFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjsgfSlcblx0XHRcdC8vIFx0Lm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihkKSB7XG5cdFx0XHQvLyBcdFx0XHRjb25zb2xlLmxvZyhkLngpO1xuXHRcdFx0Ly8gXHRcdH0pO1xuXHRcdFx0Ly9cblx0XHRcdC8vXG5cdFx0XHQvLyBsYWJlbHMuZXhpdCgpLnJlbW92ZSgpO1xuXG5cdFx0XHQvL3VwZGF0ZSBheGlzXG5cdFx0XHR4QXhpc01haW5PYmouY2FsbCh4QXhpc01haW4pO1xuXG5cdFx0XHQvLyAvLyBvbmx5IHVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZyAob3Igbm9uZSlcblx0XHRcdC8vIF9yb3RhdGUoLTIwKTtcblx0XHRcdC8vIHJlbGF4KGxhYmVscyk7XG5cdFx0XHQvL1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJCgnLm1haW5DbGlwUGF0aCcpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCQoJy5jaGFydCcpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcblx0XHRcdGxhYmVsc0NvbGxpc2lvbkRldGVjdCgpO1xuXG5cdFx0fVxuXHRcdFxuXHRcdHZhciBhZnRlclRyYW5zaXRpb25YID0gZnVuY3Rpb24oZCwgaSkge1xuXHRcdFx0Ly8gcmV0dXJuIHgxKCtkLnllYXIpICsgKChpKmkpKjMpO1xuXHRcdFx0cmV0dXJuIChpKmkpKjM7XG5cdFx0fTtcblx0XHR2YXIgYWZ0ZXJUcmFuc2l0aW9uWSA9IGZ1bmN0aW9uKGQsIGkpIHtcblx0XHRcdC8vIHJldHVybiB5MShkLmxhbmUpICsgMi4yKnJhZCppKzUqcmFkO1xuXHRcdFx0cmV0dXJuIDIuMSptYWluTWluUmFkKmkrMyptYWluTWluUmFkO1xuXHRcdH07XG5cdFx0Ly8gZnVuY3Rpb24gZXhwYW5kKHllYXJEYXRhKSB7XG5cdFx0ZnVuY3Rpb24gZXhwYW5kKHNlbCwgeWVhckl0ZW0pIHtcblx0XHRcdHZhciB0aGlzWWVhciA9IHNlbC5hdHRyKFwiZGF0YS15ZWFyXCIpO1xuXHRcdFx0dmFyIHRoaXNZZWFySXRlbSA9IHllYXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXI9PXRoaXNZZWFyfSk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzWWVhckl0ZW0pO1xuXHRcdFx0Ly8gY29udHJhY3QoKTtcblx0XHRcdHZhciBkdXIgPSA1MDA7XG5cdFx0XHQvLyB2YXIgc2VsID0gcGFwZXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXI9PT15ZWFyRGF0YS55ZWFyfSk7XG5cdFx0XHR2YXIgdHJhbnNpdGlvblN0YXJ0U3R5bGUgPSB7J3BvaW50ZXItZXZlbnRzJzogJ25vbmUnLCAnY3Vyc29yJzogJ2RlZmF1bHQnfSxcblx0XHRcdFx0dHJhbnNpdGlvbkVuZFN0eWxlID0geydwb2ludGVyLWV2ZW50cyc6ICdhdXRvJywgJ2N1cnNvcic6ICdwb2ludGVyJ307XG5cdFx0XHQvLyBzZWwuc3R5bGUoXCJwb2ludGVyLWV2ZW50c1wiLCBcIm5vbmVcIilcblx0XHRcdHZhciBsaW5lID0gZDMuc3ZnLmxpbmUoKS54KGZ1bmN0aW9uKGQpIHtyZXR1cm4gZFswXX0pLnkoZnVuY3Rpb24oZCkge3JldHVybiBkWzFdfSk7XG5cdFx0XHQvLyBsaW5lZGF0YSB3aWxsIGJlIGFuIGFycmF5IG9mIFt4LCB5XSB2YWx1ZXMgdGhhdCBzdGFydCBhdCB0aGUgeWVhciBjaXJjbGUgYW5kIHRyYWNrIHRoZSBwYXBlciBjaXJjbGVzXG5cdFx0XHR2YXIgbGluZWRhdGEgPSBbXTtcblx0XHRcdGxpbmVkYXRhLnB1c2goWzAsMF0pO1xuXHRcdFx0c2VsLnN0eWxlKHRyYW5zaXRpb25TdGFydFN0eWxlKVxuXHRcdFx0XHQudHJhbnNpdGlvbigpLmR1cmF0aW9uKGR1cilcblx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCwgaSkge1xuXHRcdFx0XHRcdGxpbmVkYXRhLnB1c2goW2FmdGVyVHJhbnNpdGlvblgoZCwgaSksIGFmdGVyVHJhbnNpdGlvblkoZCwgaSldKTtcblx0XHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBhZnRlclRyYW5zaXRpb25YKGQsIGkpICsgXCIsXCIgKyBhZnRlclRyYW5zaXRpb25ZKGQsIGkpICsgXCIpXCI7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5lYWNoKFwic3RhcnRcIiwgZnVuY3Rpb24oKSB7ZDMuc2VsZWN0KHRoaXMpLmNsYXNzZWQoXCJleHBhbmRlZFwiLCB0cnVlKX0pXG5cdFx0XHRcdC8vIC5lYWNoKFwiZW5kXCIsIGZ1bmN0aW9uKCkge2QzLnNlbGVjdCh0aGlzKS5zdHlsZShcInBvaW50ZXItZXZlbnRzXCIsIFwiYXV0b1wiKTt9KTtcblx0XHRcdFx0LmVhY2goXCJlbmRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZDMuc2VsZWN0KHRoaXMpLnN0eWxlKHRyYW5zaXRpb25FbmRTdHlsZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8gLnN0eWxlKFwicG9pbnRlci1ldmVudHNcIiwgXCJhdXRvXCIpO1xuXHRcdFx0c2VsLnNlbGVjdEFsbChcIi5wYXBlck1hcmtcIikudHJhbnNpdGlvbigpLmR1cmF0aW9uKGR1cilcblx0XHRcdFx0XHRcdFx0Ly8gLnN0eWxlKFwiZm9udC1zaXplXCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gKGQucmFkaXVzLzEwKSArIFwiZW1cIjt9KVxuXHRcdFx0XHQuc3R5bGVUd2VlbihcImZvbnQtc2l6ZVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGQzLmludGVycG9sYXRlKFxuXHRcdFx0XHRcdFx0XHR0aGlzLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIiksXG5cdFx0XHRcdFx0XHRcdChkLnJhZGl1cy8xMCkgKyBcImVtXCIpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuYXR0cihcInJcIiwgZnVuY3Rpb24oZCkge3JldHVybiBkLnJhZGl1czt9KTtcblxuXHRcdFx0Ly9tYWtlIGxhYmVscyBhcHBlYXJcblx0XHRcdHNlbC5zZWxlY3RBbGwoXCIucGFwZXJMYWJlbFwiKVxuXHRcdFx0XHQvLyAuc3R5bGUoXCJwb2ludGVyLWV2ZW50c1wiLCBcIm5vbmVcIilcblx0XHRcdFx0LnN0eWxlKFwiZGlzcGxheVwiLCBcIlwiKVxuXHRcdFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIDApXG5cdFx0XHRcdC50cmFuc2l0aW9uKClcblx0XHRcdFx0LmRlbGF5KGZ1bmN0aW9uKGQpIHtyZXR1cm4gZHVyLzIgKyBkLmlkeCo3NTt9KVxuXHRcdFx0XHQuZHVyYXRpb24oZHVyKVxuXHRcdFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuXHRcdFx0Ly8gbGFiZWxzQ29sbGlzaW9uRGV0ZWN0KCk7XG5cdFx0XHRkMy50cmFuc2l0aW9uKCkuZHVyYXRpb24oZHVyKS5lYWNoKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0aGlzWWVhckl0ZW0uYXBwZW5kKFwicGF0aFwiKS5kYXR1bShsaW5lZGF0YSkuYXR0cihcImNsYXNzXCIsIFwiam9pbkxpbmVcIikuYXR0cihcImRcIiwgbGluZSk7XG5cdFx0XHRcdGRpc3BsYXkoKVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdC8vIGZ1bmN0aW9uIGNvbnRyYWN0KHllYXJEYXRhKSB7XG5cdFx0ZnVuY3Rpb24gY29udHJhY3QoKSB7XG5cdFx0XHRkMy5zZWxlY3RBbGwoXCIuam9pbkxpbmVcIikucmVtb3ZlKCk7XG5cdFx0XHR2YXIgZHVyID0gNTAwO1xuXHRcdFx0Ly8gdmFyIHNlbCA9IHBhcGVySXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyPT09eWVhckRhdGEueWVhcn0pO1xuXHRcdFx0dmFyIHNlbCA9IGQzLnNlbGVjdEFsbChcIi5leHBhbmRlZFwiKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHNlbC5lbXB0eSgpKTtcblx0XHRcdHNlbC50cmFuc2l0aW9uKCkuZHVyYXRpb24oZHVyKVxuXHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLDApXCIpXG5cdFx0XHRcdC5lYWNoKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKFwiZXhwYW5kZWRcIiwgZmFsc2UpXG5cdFx0XHRcdFx0XHQuc3R5bGUoXCJwb2ludGVyLWV2ZW50c1wiLCBcIlwiKTtcblx0XHRcdFx0fSlcblx0XHRcdHNlbC5zZWxlY3RBbGwoXCIucGFwZXJNYXJrXCIpLnRyYW5zaXRpb24oKS5kdXJhdGlvbihkdXIqMS41KVxuXHRcdFx0XHQuc3R5bGVUd2VlbihcImZvbnQtc2l6ZVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGQzLmludGVycG9sYXRlKFxuXHRcdFx0XHRcdFx0XHR0aGlzLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIiksXG5cdFx0XHRcdFx0XHRcdFwiMS41ZW1cIilcblx0XHRcdFx0fSlcblx0XHRcdFx0LmF0dHIoXCJyXCIsIDApO1xuXHRcdFx0c2VsLnNlbGVjdEFsbChcIi5wYXBlckxhYmVsXCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0fVxuXHRcdC8vIGZ1bmN0aW9uIGV4cGFuZCh5ZWFyRGF0YSkge1xuXHRcdC8vIFx0Y29uc29sZS5sb2coeWVhckRhdGEpO1xuXHRcdC8vIFx0aWYgKCF5ZWFyRGF0YS5leHBhbmRlZCkge1xuXHRcdC8vIFx0XHRcblx0XHQvLyBcdFx0Ly8gZDMuc2VsZWN0QWxsKFwiLnllYXJJdGVtTGFiZWxcIikuY2xhc3NlZChcImhpZGRlblwiKTtcblx0XHQvLyBcdFx0JCggJy55ZWFySXRlbUxhYmVsJyApLmhpZGUoKTtcblx0XHQvLyBcdFx0dmFyIGR1ciA9IDUwMDtcblx0XHQvLyBcdFx0Ly8gdmFyIHJhZCA9IHllYXJEYXRhLnJhZGl1cztcblx0XHQvLyBcdFx0dmFyIHJhZCA9IDEwO1xuXHRcdC8vIFx0XHR2YXIgcGFyZW50WSA9IHllYXJEYXRhLmN5O1xuXHRcdC8vIFx0XHR2YXIgbWFya3MgPSBtYWluQ2xpcFBhdGguc2VsZWN0QWxsKFwiLnBhcGVySXRlbVwiKVxuXHRcdC8vIFx0XHRcdFx0XHQvLyAuZGF0YSh2aXNJdGVtcywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5pZDsgfSlcblx0XHQvLyBcdFx0XHRcdFx0LmRhdGEoeWVhckRhdGEudmFsdWVzKTtcblx0XHQvLyBcdFx0bWFya3MuZW50ZXIoKS5hcHBlbmQoXCJjaXJjbGVcIilcblx0XHQvLyBcdFx0XHRcdC8vIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24oZCkge3JldHVybiBcIm1haW5JdGVtIG1pbmlJdGVtXCIgKyBkLmxhbmU7fSlcblx0XHQvLyBcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJwYXBlckl0ZW1cIilcblx0XHQvLyBcdFx0XHRcdC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oZCkge2NvbnNvbGUubG9nKGQpO30pLmFwcGVuZCgndGV4dCcpLnRleHQoJ2QnKTtcblx0XHQvLyBcdFx0Ly8gbWFya3MuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbigxMDAwKS5hdHRyKFwiY3lcIiwgcGFyZW50WSkucmVtb3ZlKCk7XG5cdFx0Ly8gXHRcdC8vIGl0ZW1SZWN0cy5zZWxlY3RBbGwoJ3RleHQnKS5kYXRhKHllYXJEYXRhLnZhbHVlcykuZW50ZXIoKS5hcHBlbmQoJ3RleHQnKS5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7Y29uc29sZS5sb2coZCk7IHJldHVybiBkLmN4O30pLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC5jeTt9KS50ZXh0KGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC50aXRsZTt9KTtcblx0XHQvLyBcdFx0bWFya3MuZXhpdCgpLnJlbW92ZSgpO1xuXHRcdC8vXG5cdFx0Ly8gXHRcdHZhciBsYWJlbHMgPSBtYWluQ2xpcFBhdGguc2VsZWN0QWxsKFwiLnBhcGVySXRlbUxhYmVsXCIpXG5cdFx0Ly8gXHRcdFx0LmRhdGEoeWVhckRhdGEudmFsdWVzKTtcblx0XHQvLyBcdFx0bGFiZWxzLmVudGVyKCkuYXBwZW5kKFwidGV4dFwiKVxuXHRcdC8vIFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJwYXBlckl0ZW1MYWJlbFwiKVxuXHRcdC8vIFx0XHRcdC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIik7XG5cdFx0Ly8gXHRcdGxhYmVscy5leGl0KCkucmVtb3ZlKCk7XG5cdFx0Ly9cblx0XHQvLyBcdFx0bWFya3MuYXR0cihcImN4XCIsIGJlZm9yZVRyYW5zaXRpb25YKVxuXHRcdC8vIFx0XHRcdFx0LmF0dHIoJ3InLCBmdW5jdGlvbihkKSB7XG5cdFx0Ly8gXHRcdFx0XHRcdFx0Ly8gZC5yYWRpdXMgPSByYWQgKyAoMiAqIGVmU3VtU2NhbGUoZC5zdW1fZWlnZW5mYWN0b3IpKTtcblx0XHQvLyBcdFx0XHRcdFx0XHRkLnJhZGl1cyA9IHJhZCArICgyICogZWZTY2FsZShkLmVpZ2VuZmFjdG9yX3Njb3JlKSk7XG5cdFx0Ly8gXHRcdFx0XHRcdFx0cmV0dXJuIGQucmFkaXVzO1xuXHRcdC8vIFx0XHRcdFx0XHR9KVxuXHRcdC8vIFx0XHRcdFx0LmF0dHIoXCJjeVwiLCBiZWZvcmVUcmFuc2l0aW9uWSlcblx0XHQvLyBcdFx0XHRcdC50cmFuc2l0aW9uKCkuZHVyYXRpb24oZHVyKVxuXHRcdC8vIFx0XHRcdFx0LmF0dHIoXCJjeFwiLCBhZnRlclRyYW5zaXRpb25YKVxuXHRcdC8vIFx0XHRcdFx0LmF0dHIoXCJjeVwiLCBhZnRlclRyYW5zaXRpb25ZKVxuXHRcdC8vIFx0XHRcdFx0LnN0eWxlKHN0eWxlc1Zpc2libGUpO1xuXHRcdC8vIFx0XHRsYWJlbHMuYXR0cihcInhcIiwgYmVmb3JlVHJhbnNpdGlvblgpXG5cdFx0Ly8gXHRcdFx0LnRleHQoZnVuY3Rpb24oZCkge3JldHVybiBkLnRpdGxlO30pXG5cdFx0Ly8gXHRcdFx0LmF0dHIoXCJ5XCIsIGJlZm9yZVRyYW5zaXRpb25ZKVxuXHRcdC8vIFx0XHRcdC50cmFuc2l0aW9uKCkuZHVyYXRpb24oZHVyKVxuXHRcdC8vIFx0XHRcdC5hdHRyKFwieFwiLCBhZnRlclRyYW5zaXRpb25YKVxuXHRcdC8vIFx0XHRcdC5hdHRyKFwieVwiLCBhZnRlclRyYW5zaXRpb25ZKTtcblx0XHQvLyBcdHllYXJEYXRhLmV4cGFuZGVkID0gdHJ1ZTtcblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cdFx0Ly9cblx0XHQvLyBmdW5jdGlvbiBjb250cmFjdChkKSB7XG5cdFx0Ly8gXHR2YXIgZHVyID0gNTAwO1xuXHRcdC8vIFx0aWYgKGQuZXhwYW5kZWQpIHtcblx0XHQvLyBcdFx0dmFyIG1hcmtzID0gbWFpbkNsaXBQYXRoLnNlbGVjdEFsbChcIi5wYXBlckl0ZW1cIilcblx0XHQvLyBcdFx0XHQuaW50ZXJydXB0KFwiY29udHJhY3RcIilcblx0XHQvLyBcdFx0XHQudHJhbnNpdGlvbihcImNvbnRyYWN0XCIpLmRlbGF5KDIwMDApLmR1cmF0aW9uKGR1cilcblx0XHQvLyBcdFx0XHQuYXR0cihcImN4XCIsIGJlZm9yZVRyYW5zaXRpb25YKVxuXHRcdC8vIFx0XHRcdC5hdHRyKFwiY3lcIiwgMClcblx0XHQvLyBcdFx0XHQuZWFjaChcImVuZFwiLCBmdW5jdGlvbihfLCBpKSB7XG5cdFx0Ly8gXHRcdFx0XHRpZiAoaSA9PT0gMCkgZC5leHBhbmRlZCA9IGZhbHNlO1xuXHRcdC8vIFx0XHRcdFx0fSlcblx0XHQvLyBcdFx0XHQucmVtb3ZlKCk7XG5cdFx0Ly8gXHRcdHZhciBsYWJlbHMgPSBtYWluQ2xpcFBhdGguc2VsZWN0QWxsKFwiLnBhcGVySXRlbUxhYmVsXCIpXG5cdFx0Ly8gXHRcdFx0LmludGVycnVwdChcImNvbnRyYWN0XCIpXG5cdFx0Ly8gXHRcdFx0LnRyYW5zaXRpb24oXCJjb250cmFjdFwiKS5kZWxheSgyMDAwKS5kdXJhdGlvbihkdXIpXG5cdFx0Ly8gXHRcdFx0LmF0dHIoXCJ4XCIsIGJlZm9yZVRyYW5zaXRpb25YKVxuXHRcdC8vIFx0XHRcdC5hdHRyKFwieVwiLCAwKVxuXHRcdC8vIFx0XHRcdC5yZW1vdmUoKTtcblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cblx0XHRmdW5jdGlvbiBsYWJlbHNDb2xsaXNpb25EZXRlY3QoKSB7XG5cdFx0XHQvLyBkZXRlY3QgaWYgbGFiZWxzIGdvIG9mZiBzY3JlZW5cblxuXHRcdFx0Ly8gZnVuY3Rpb24gY2hlY2tTaW5nbGVMYWJlbChkKSB7XG5cdFx0XHQvLyBcdHZhciBib3VuZGluZ1JlY3QgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0Ly8gXHRjb25zb2xlLmxvZyhib3VuZGluZ1JlY3Qud2lkdGggKyAkKCB0aGlzICkucG9zaXRpb24oKS5sZWZ0KTtcblx0XHRcdC8vIFx0aWYgKCQoIHRoaXMgKS5wb3NpdGlvbigpLmxlZnQ8MCkge1xuXHRcdFx0Ly8gXHRcdGQzLnNlbGVjdCh0aGlzKS5zZWxlY3QoXCIucGFwZXJMYWJlbFwiKS5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJzdGFydFwiKTtcblx0XHRcdC8vIFx0fSBlbHNlIHtcblx0XHRcdC8vIFx0XHRkMy5zZWxlY3QodGhpcykuc2VsZWN0KFwiLnBhcGVyTGFiZWxcIikuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpO1xuXHRcdFx0Ly8gXHR9XG5cdFx0XHQvLyB9XG5cdFx0XHRmdW5jdGlvbiBjaGVja1NpbmdsZUxhYmVsKGQpIHtcblx0XHRcdFx0ZnVuY3Rpb24gd3JhcEluQW5jaG9yKHN0YWJsZV91cmwsIHRleHQpIHtcblx0XHRcdFx0XHQvLyByZXR1cm4gJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vbGFicy5qc3Rvci5vcmcnICsgc3RhYmxlX3VybCArICdcIj4nICsgdGV4dCArICc8L2E+J1xuXHRcdFx0XHRcdHJldHVybiAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIicgKyBzdGFibGVfdXJsICsgJ1wiPicgKyB0ZXh0ICsgJzwvYT4nXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gdmFyIGJvdW5kaW5nUmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdHZhciB0aGlzTGFiZWwgPSBkMy5zZWxlY3QodGhpcykuc2VsZWN0KFwiLnBhcGVyTGFiZWxcIik7XG5cdFx0XHRcdC8vIHZhciB3b3JkcyA9IHRoaXNMYWJlbC50ZXh0KCkuc3BsaXQoXCIgXCIpO1xuXHRcdFx0XHQvLyB0aGlzTGFiZWwudGV4dChkLnRpdGxlKTtcblx0XHRcdFx0dGhpc0xhYmVsLmh0bWwod3JhcEluQW5jaG9yKGQudXJsLCBkLnRpdGxlKSk7XG5cdFx0XHRcdHZhciB3b3JkcyA9IGQudGl0bGUuc3BsaXQoXCIgXCIpO1xuXHRcdFx0XHR2YXIgZ2l2ZVVwVGhyZXNob2xkID0gMjA7XG5cdFx0XHRcdHZhciBpID0gMDtcblx0XHRcdFx0dmFyIHZpZXdMZWZ0RWRnZSA9ICQoICcjdGltZWxpbmUgc3ZnJyApLnBvc2l0aW9uKCkubGVmdCArIG1bM107XG5cdFx0XHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRcdFx0aSsrO1xuXHRcdFx0XHRcdGlmIChpPmdpdmVVcFRocmVzaG9sZCkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciBsZWZ0UG9zID0gJCggdGhpcyApLnBvc2l0aW9uKCkubGVmdDtcblx0XHRcdFx0XHQvLyBpZiAobGVmdFBvcyA8IDIwKSB7XG5cdFx0XHRcdFx0Ly8gaWYgKGxlZnRQb3MgPCBtWzNdKSB7XG5cdFx0XHRcdFx0aWYgKGxlZnRQb3MgPCB2aWV3TGVmdEVkZ2UpIHtcblx0XHRcdFx0XHRcdHZhciBudW1Xb3JkcyA9IHdvcmRzLmxlbmd0aDtcblx0XHRcdFx0XHRcdHdvcmRzID0gd29yZHMuc2xpY2UoMCwgbnVtV29yZHMtMik7XG5cdFx0XHRcdFx0XHR2YXIgc2hvcnRlbmVkVGl0bGUgPSB3b3Jkcy5qb2luKFwiIFwiKStcIi4uLlwiO1xuXHRcdFx0XHRcdFx0Ly8gdGhpc0xhYmVsLnRleHQod29yZHMuam9pbihcIiBcIikrXCIuLi5cIik7XG5cdFx0XHRcdFx0XHR0aGlzTGFiZWwuaHRtbCh3cmFwSW5BbmNob3IoZC51cmwsIHNob3J0ZW5lZFRpdGxlKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyB2YXIgbGVmdFBvcyA9ICQoIHRoaXMgKS5wb3NpdGlvbigpLmxlZnQ7XG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIGlmIChsZWZ0UG9zPDApIHtcblx0XHRcdFx0Ly8gXHRkMy5zZWxlY3QodGhpcykuc2VsZWN0KFwiLnBhcGVyTGFiZWxcIilcblx0XHRcdFx0Ly8gXHRcdC50ZXh0KGQudGl0bGUuc2xpY2UoMCwgMTApKTtcblx0XHRcdFx0Ly8gXHRjaGVja1NpbmdsZUxhYmVsKGQpO1xuXHRcdFx0XHQvLyB9IGVsc2Uge1xuXHRcdFx0XHQvLyBcdGNvbnNvbGUubG9nKCdsZWF2aW5nIHJlY3Vyc2l2ZSBmdW5jdGlvbicpXG5cdFx0XHRcdC8vIH1cblx0XHRcdFx0Ly8gcmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0ZDMuc2VsZWN0QWxsKFwiLnBhcGVySXRlbS5leHBhbmRlZFwiKVxuXHRcdFx0XHQuZWFjaChjaGVja1NpbmdsZUxhYmVsKTtcblx0XHR9XG5cdFx0XG5cdFx0ZnVuY3Rpb24gZGVtb0luaXQoKSB7XG5cdFx0XHRjaGFydC5jbGFzc2VkKFwiZGVtb0luUHJvZ3Jlc3NcIiwgdHJ1ZSk7XG5cdFx0XHRjbGVhckJydXNoKCk7XG5cdFx0XHRjb250cmFjdCgpO1xuXHRcdFx0ZGlzYWJsZUludGVyYWN0aW9uKCk7XG5cdFx0XHRtaW5pLm9uKFwibW91c2Vkb3duXCIsIGRlbW9RdWl0KTtcblx0XHRcdGZ1bmN0aW9uIGRlbW9RdWl0KCkge1xuXHRcdFx0XHRjaGFydC5jbGFzc2VkKFwiZGVtb0luUHJvZ3Jlc3NcIiwgZmFsc2UpO1xuXHRcdFx0XHRjdXJzb3JJY29uLnRyYW5zaXRpb24oMCkucmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgdHJhbnNpdGlvblRpbWVzID0gW1xuXHRcdFx0XHRcdDc1MCwgIC8vIDA6IGluaXRpYWwgZGVsYXkgYmVmb3JlIGFueXRoaW5nIGhhcHBlbnNcblx0XHRcdFx0XHQxMDAwLCAgLy8gMTogdGltZSB0byBtb3ZlIHRoZSBjdXJzb3IgdG8gdGhlIG1pbmkgYXJlYVxuXHRcdFx0XHRcdDIwMDAsICAvLyAyOiB0aW1lIHRvIGRyYXcgdGhlIGluaXRpYWwgYnJ1c2hcblx0XHRcdFx0XHQyMDAsICAgLy8gMzogZGVsYXkgYWZ0ZXIgYnJ1c2hcblx0XHRcdFx0XHQyMDAwLCAgLy8gNDogdGltZSB0byBtb3ZlIHRoZSBjdXJzb3IgdG8gYSBtYWluIGl0ZW1cblx0XHRcdFx0XHQzMDAwLCAgLy8gNTogZGVsYXkgdG8gcmVtb3ZlIGFuZCBlbmQgdGhlIGRlbW9cblx0XHRcdFx0XTtcblx0XHRcdHZhciBjdXJzb3JJY29uID0gY2hhcnQuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwiY3Vyc29ySWNvblwiKVxuXHRcdFx0XHQuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcIkZvbnRBd2Vzb21lXCIpXG5cdFx0XHRcdC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjFlbVwiKVxuXHRcdFx0XHQudGV4dChcIlxcdWYyNDVcIilcblx0XHRcdFx0Ly8gLmF0dHIoXCJ4XCIsIDEwMClcblx0XHRcdFx0Ly8gLmF0dHIoXCJ5XCIsIDMwMCk7XG5cdFx0XHRcdC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDEwMCwzMDApXCIpO1xuXHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHcgKyBcIixcIiArIG1haW5IZWlnaHQgKyBcIilcIik7XG5cdFx0XHQvLyB2YXIgaW5pdER1cmF0aW9uID0gMTAwMCxcblx0XHRcdC8vIFx0aW5pdERlbGF5ID0gMTAwMDtcblx0XHRcdC8vIGNoYW5nZUV4dGVudCgxOTcwLCAyMDAwLCBpbml0RHVyYXRpb24sIFwiY3ViaWMtaW4tb3V0XCIsIGluaXREZWxheSk7XG5cdFx0XHQvLyBkMy50cmFuc2l0aW9uKFwiaW5pdERlbW9UcmFuc2l0aW9uXCIpLmRlbGF5KGluaXREZWxheSArIGluaXREdXJhdGlvbilcblx0XHRcdC8vIFx0LmVhY2goXCJlbmRcIiwgZGVtb0V4cGFuZCk7XG5cdFx0XHR2YXIgZXh0ZW50U2VsZWN0ID0gbWluaS5zZWxlY3QoXCIuYnJ1c2hcIikuc2VsZWN0KFwiLmV4dGVudFwiKTtcblx0XHRcdC8vIHZhciBpbml0QnJ1c2hSYW5nZSA9IFsxOTcwLCAyMDAwXTtcblx0XHRcdHZhciB5ZWFyUmFuZ2UgPSB0aW1lRW5kIC0gdGltZUJlZ2luO1xuXHRcdFx0aWYgKHllYXJSYW5nZSA8IDYpIHtcblx0XHRcdFx0dmFyIGluaXRCcnVzaFJhbmdlID0gW3RpbWVCZWdpbiwgdGltZUVuZF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgaW5pdEJydXNoUmFuZ2UgPSBbdGltZUJlZ2luICsgTWF0aC5mbG9vcih5ZWFyUmFuZ2UqLjMpLCB0aW1lRW5kIC0gTWF0aC5mbG9vcih5ZWFyUmFuZ2UqLjIpXTtcblx0XHRcdH1cblx0XHRcdGNoYW5nZUV4dGVudChpbml0QnJ1c2hSYW5nZVswXSwgaW5pdEJydXNoUmFuZ2VbMF0sIDApO1xuXHRcdFx0Ly8gdmFyIGluaXRCcnVzaFBvc2l0aW9uID0gK2V4dGVudFNlbGVjdC5hdHRyKFwieFwiKTtcblx0XHRcdHZhciBpbml0QnJ1c2hQb3NpdGlvbiA9IHgoYnJ1c2guZXh0ZW50KClbMV0pICsgbVszXTtcblxuXHRcdFx0Ly8gc2VsZWN0IGEgeWVhckl0ZW0gdG8gZXhwYW5kIGZvciB0aGUgZGVtb1xuXHRcdFx0dmFyIHZpc0l0ZW1zID0geWVhckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhciA8IGluaXRCcnVzaFJhbmdlWzFdICYmIGQueWVhciA+IGluaXRCcnVzaFJhbmdlWzBdO30pLFxuXHRcdFx0XHRudW1WaXNJdGVtcyA9IHZpc0l0ZW1zLnNpemUoKTtcblx0XHRcdGlmIChudW1WaXNJdGVtcyA9PT0gMCkge1xuXHRcdFx0XHQvLyBpZiB0aGVyZSBhcmUgbm8gdmlzaWJsZSBpdGVtcyBpbiB0aGUgcmFuZ2UsIGp1c3QgZ2l2ZSB1cFxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9IGVsc2UgaWYgKG51bVZpc0l0ZW1zID09PSAxKSB7XG5cdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lIHZpc2libGUgaXRlbSwgdXNlIGl0XG5cdFx0XHRcdHZhciBzZWxJbmRleCA9IDA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBlbHNlLCB1c2UgYW4gaXRlbSBhIGxpdHRsZSB0byB0aGUgcmlnaHQgb2YgY2VudGVyXG5cdFx0XHRcdHZhciBzZWxJbmRleCA9IE1hdGguY2VpbChudW1WaXNJdGVtcyouNTUpO1xuXHRcdFx0fTtcblx0XHRcdHZhciBkZW1vWWVhckl0ZW0gPSB2aXNJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCwgaSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGkgPT09IHNlbEluZGV4O1xuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoIWNoYXJ0LmNsYXNzZWQoXCJkZW1vSW5Qcm9ncmVzc1wiKSkge1xuXHRcdFx0XHQvLyBxdWl0XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdFxuXG5cdFx0XHRjdXJzb3JJY29uLnRyYW5zaXRpb24oKS5kZWxheSh0cmFuc2l0aW9uVGltZXNbMF0pXG5cdFx0XHRcdC5kdXJhdGlvbih0cmFuc2l0aW9uVGltZXNbMV0pXG5cdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFxuXHRcdFx0XHRcdFx0Ly8gY29uc3RydWN0VHJhbnNsYXRlKGluaXRCcnVzaFBvc2l0aW9uKzE1LCBtYWluSGVpZ2h0K21bMF0rKG1pbmlIZWlnaHQvMikpXG5cdFx0XHRcdFx0XHRjb25zdHJ1Y3RUcmFuc2xhdGUoaW5pdEJydXNoUG9zaXRpb24sIG1haW5IZWlnaHQrbVswXSsobWluaUhlaWdodC8yKSlcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0LmVhY2goXCJlbmRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKGNoYXJ0LmNsYXNzZWQoXCJkZW1vSW5Qcm9ncmVzc1wiKSkge1xuXHRcdFx0XHRcdFx0ZGVtb0RyYXdCcnVzaCgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRkZW1vRW5kKDApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdGZ1bmN0aW9uIGRlbW9EcmF3QnJ1c2goKSB7XG5cdFx0XHRcdGNoYW5nZUV4dGVudChpbml0QnJ1c2hSYW5nZVswXSwgaW5pdEJydXNoUmFuZ2VbMV0sIHRyYW5zaXRpb25UaW1lc1syXSk7XG5cdFx0XHRcdHZhciBtaW5FeHRlbnRTY3JlZW4gPSArZXh0ZW50U2VsZWN0LmF0dHIoXCJ4XCIpO1xuXHRcdFx0XHR2YXIgbWF4RXh0ZW50U2NyZWVuID0gbWluRXh0ZW50U2NyZWVuICsgKCtleHRlbnRTZWxlY3QuYXR0cihcIndpZHRoXCIpKTtcblx0XHRcdFx0eDEuZG9tYWluKGJydXNoLmV4dGVudCgpKTtcblx0XHRcdFx0Y3Vyc29ySWNvbi50cmFuc2l0aW9uKClcblx0XHRcdFx0XHQuZHVyYXRpb24odHJhbnNpdGlvblRpbWVzWzJdKVxuXHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0dmFyIHhQb3MgPSB4KGJydXNoLmV4dGVudCgpWzFdKSArIG1bM107XG5cdFx0XHRcdFx0XHRyZXR1cm4gY29uc3RydWN0VHJhbnNsYXRlKHhQb3MsIG1haW5IZWlnaHQrbVswXSsobWluaUhlaWdodC8yKSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0LmVhY2goXCJlbmRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKGNoYXJ0LmNsYXNzZWQoXCJkZW1vSW5Qcm9ncmVzc1wiKSkge1xuXHRcdFx0XHRcdFx0ZGVtb0V4cGFuZCgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRkZW1vRW5kKDApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGZ1bmN0aW9uIGRlbW9FeHBhbmQoKSB7XG5cdFx0XHRcdC8vIHZhciBkZW1vVHJhbnNpdGlvblRpbWUgPSAyMDAwO1xuXHRcdFx0XHQvLyB2YXIgZGVtb0RlbGF5VG9SZW1vdmUgPSAyMDAwO1xuXHRcdFx0XHQvLyB2YXIgY3Vyc29ySWNvbiA9IG1haW5DbGlwUGF0aC5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdC8vIFx0LmF0dHIoXCJjbGFzc1wiLCBcImN1cnNvckljb25cIilcblx0XHRcdFx0Ly8gXHQuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcIkZvbnRBd2Vzb21lXCIpXG5cdFx0XHRcdC8vIFx0LnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMWVtXCIpXG5cdFx0XHRcdC8vIFx0LnRleHQoXCJcXHVmMjQ1XCIpXG5cdFx0XHRcdC8vIFx0Ly8gLmF0dHIoXCJ4XCIsIDEwMClcblx0XHRcdFx0Ly8gXHQvLyAuYXR0cihcInlcIiwgMzAwKTtcblx0XHRcdFx0Ly8gXHQvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgxMDAsMzAwKVwiKTtcblx0XHRcdFx0Ly8gXHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHcgKyBcIixcIiArIG1haW5IZWlnaHQgKyBcIilcIik7XG5cblx0XHRcdFx0dmFyIGRlbW9ZZWFyTWFyayA9IGRlbW9ZZWFySXRlbS5zZWxlY3QoXCIueWVhck1hcmtcIik7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRlbW9ZZWFySXRlbSk7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRlbW9ZZWFyTWFyayk7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRlbW9ZZWFyTWFyay5hdHRyKFwiclwiKSk7XG5cdFx0XHRcdHZhciB0cmFuc2xhdGVTdHIgPSBkZW1vWWVhckl0ZW0uYXR0cihcInRyYW5zZm9ybVwiKTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2codHJhbnNsYXRlU3RyKTtcblx0XHRcdFx0dmFyIHRyYW5zbGF0ZUNvb3JkID0gZGVjb25zdHJ1Y3RUcmFuc2xhdGUodHJhbnNsYXRlU3RyKTtcblx0XHRcdFx0dHJhbnNsYXRlQ29vcmQueCA9IHRyYW5zbGF0ZUNvb3JkLnggKyBtWzNdO1xuXHRcdFx0XHR0cmFuc2xhdGVDb29yZC55ID0gdHJhbnNsYXRlQ29vcmQueSArIG1bMF0gKyAoK2RlbW9ZZWFyTWFyay5hdHRyKFwiclwiKSk7XG5cdFx0XHRcdHZhciB0cmFuc2xhdGUgPSBjb25zdHJ1Y3RUcmFuc2xhdGUodHJhbnNsYXRlQ29vcmQueCwgdHJhbnNsYXRlQ29vcmQueSk7XG5cdFx0XHRcdC8vIG1vdmUgdGhlIGN1cnNvciB0byBhIHllYXIsIHRoZW4gbWFudWFsbHkgZXhwYW5kIHRoZSB5ZWFyXG5cdFx0XHRcdGN1cnNvckljb24udHJhbnNpdGlvbihcImRlbW9FeHBhbmRcIikuZGVsYXkodHJhbnNpdGlvblRpbWVzWzNdKVxuXHRcdFx0XHRcdC5kdXJhdGlvbih0cmFuc2l0aW9uVGltZXNbNF0pXG5cdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgdHJhbnNsYXRlKVxuXHRcdFx0XHRcdC5lYWNoKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYgKGNoYXJ0LmNsYXNzZWQoXCJkZW1vSW5Qcm9ncmVzc1wiKSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgc2VsID0gcGFwZXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZGQpIHtyZXR1cm4gZGQueWVhcj09ZGVtb1llYXJJdGVtWzBdWzBdLl9fZGF0YV9fLnllYXJ9KTtcblx0XHRcdFx0XHRcdFx0ZXhwYW5kKHNlbCk7XG5cdFx0XHRcdFx0XHRcdGRlbW9FbmQodHJhbnNpdGlvblRpbWVzWzVdKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGRlbW9FbmQoMCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIGN1cnNvckljb24udHJhbnNpdGlvbihcImRlbW9FbmRcIikuZGVsYXkoZGVtb1RyYW5zaXRpb25UaW1lKVxuXHRcdFx0XHQvLyBcdC5kdXJhdGlvbihkZW1vRGVsYXlUb1JlbW92ZSlcblx0XHRcdFx0Ly8gXHQuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gXHRcdGN1cnNvckljb24ucmVtb3ZlKCk7XG5cdFx0XHRcdC8vIFx0XHRjb250cmFjdCgpO1xuXHRcdFx0XHQvLyBcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBkZW1vRW5kKGRlbGF5KSB7XG5cdFx0XHRcdGN1cnNvckljb24udHJhbnNpdGlvbihcImRlbW9FbmRcIilcblx0XHRcdFx0XHQuZGVsYXkoZGVsYXkpXG5cdFx0XHRcdFx0LmR1cmF0aW9uKDApXG5cdFx0XHRcdFx0LnJlbW92ZSgpXG5cdFx0XHRcdFx0LmVhY2goXCJlbmRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRjb250cmFjdCgpO1xuXHRcdFx0XHRcdFx0ZW5hYmxlSW50ZXJhY3Rpb24oKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0fVxuXG5cblx0XHRmdW5jdGlvbiB0ZXN0UGxhY2VDdXJzb3IoKSB7XG5cdFx0XHR2YXIgZXh0ZW50U2VsZWN0ID0gbWluaS5zZWxlY3QoXCIuYnJ1c2hcIikuc2VsZWN0KFwiLmV4dGVudFwiKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKGV4dGVudFNlbGVjdCk7XG5cdFx0XHR2YXIgbWluRXh0ZW50U2NyZWVuID0gK2V4dGVudFNlbGVjdC5hdHRyKFwieFwiKTtcblx0XHRcdHZhciBjdXJzb3JJY29uID0gbWFpbkNsaXBQYXRoLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImN1cnNvckljb25cIilcblx0XHRcdFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0XHQuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxZW1cIilcblx0XHRcdFx0LnRleHQoXCJcXHVmMjQ1XCIpXG5cdFx0XHRcdC8vIC5hdHRyKFwieFwiLCAxMDApXG5cdFx0XHRcdC8vIC5hdHRyKFwieVwiLCAzMDApO1xuXHRcdFx0XHQvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgxMDAsMzAwKVwiKTtcblx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtaW5FeHRlbnRTY3JlZW4gKyBcIixcIiArIChtYWluSGVpZ2h0LTIwKSArIFwiKVwiKTtcblx0XHRcdFxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRlc3RDaGFuZ2VIZWlnaHQoKSB7XG5cdFx0XHQvLyBjaGFuZ2VFeHRlbnQoTWF0aC5yb3VuZChtaW5FeHRlbnQrMSksIE1hdGgucm91bmQobWF4RXh0ZW50KzEpLCAyNTAsIFwibGluZWFyXCIpO1xuXHRcdFx0dmFyIGNoYXJ0SGVpZ2h0ID0gK2NoYXJ0LmF0dHIoXCJoZWlnaHRcIik7XG5cdFx0XHR2YXIgY3Vyck1haW5IZWlnaHQgPSArbWFpbi5hdHRyKFwiaGVpZ2h0XCIpO1xuXHRcdFx0Y2hhcnQudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApLmF0dHIoXCJoZWlnaHRcIiwgY2hhcnRIZWlnaHQrMTAwKTtcblx0XHRcdG1haW4udHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApLmF0dHIoXCJoZWlnaHRcIiwgY3Vyck1haW5IZWlnaHQrMTAwKTtcblx0XHRcdG1pbmkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApXG5cdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbVszXSArIFwiLFwiICsgKGN1cnJNYWluSGVpZ2h0KzEwMCArIG1bMF0pICsgXCIpXCIpO1xuXHRcdFx0ZDMuc2VsZWN0KFwiI2NsaXAgcmVjdFwiKS5hdHRyKFwiaGVpZ2h0XCIsIGN1cnJNYWluSGVpZ2h0KzEwMCk7XG5cdFx0XHRkaXNwbGF5KCk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhkMy5zZWxlY3QoXCIjY2xpcFwiKS5hdHRyKFwiaGVpZ2h0XCIpKTtcblx0XHR9XG5cblx0XHQvLyB2YXIgdGVzdEJ1dHRvbiA9IGQzLnNlbGVjdChcImJvZHlcIikuYXBwZW5kKFwiYnV0dG9uXCIpXG5cdFx0Ly8gXHRcdFx0XHRcdC5hdHRyKFwiaWRcIiwgXCJ0ZXN0QnV0dG9uXCIpXG5cdFx0Ly8gXHRcdFx0XHRcdC5odG1sKFwidGVzdEJ1dHRvblwiKVxuXHRcdC8vIFx0XHRcdFx0XHQub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0XHQvLyBcdFx0XHRcdFx0XHQvLyBtaW5pbWl6ZVRpbWVsaW5lKCk7XG5cdFx0Ly8gXHRcdFx0XHRcdFx0ZGVtb0luaXQoKTtcblx0XHQvLyBcdFx0XHRcdFx0fSk7XG5cdFx0ZDMuc2VsZWN0KFwiLmNsaWNrRm9yRGVtb1wiKVxuXHRcdFx0Lm9uKFwiY2xpY2tcIiwgZGVtb0luaXQpO1xuXG5cdFx0ZnVuY3Rpb24gZGlzYWJsZUludGVyYWN0aW9uKCkge1xuXHRcdFx0ZDMuc2VsZWN0KFwiI3RpbWVsaW5lIHN2Z1wiKS5zdHlsZShcInBvaW50ZXItZXZlbnRzXCIsIFwibm9uZVwiKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBlbmFibGVJbnRlcmFjdGlvbigpIHtcblx0XHRcdGQzLnNlbGVjdChcIiN0aW1lbGluZSBzdmdcIikuc3R5bGUoXCJwb2ludGVyLWV2ZW50c1wiLCBudWxsKTtcblx0XHR9XG5cblx0XHQkKCBkb2N1bWVudCApLm9uKFwidGltZWxpbmVWaXM6Y29udHJhY3RcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRjb250cmFjdCgpO1xuXHRcdH0pO1xuXG5cdFx0JCggZG9jdW1lbnQgKS5vbihcInRpbWVsaW5lVmlzOmRpc3BsYXlcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRkaXNwbGF5KCk7XG5cdFx0fSk7XG5cblx0XHQkKCBkb2N1bWVudCApLm9uKFwidGltZWxpbmVWaXM6Y2xlYXJCcnVzaFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdGNsZWFyQnJ1c2goKTtcblx0XHR9KTtcblxuXHR9KTtcblxuXG59KCkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
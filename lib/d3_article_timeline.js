(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("d3"), require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define("d3_article_timeline", ["d3", "jQuery"], factory);
	else if(typeof exports === 'object')
		exports["d3_article_timeline"] = factory(require("d3"), require("jQuery"));
	else
		root["d3_article_timeline"] = factory(root["d3"], root["jQuery"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_d3__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
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
Object.defineProperty(exports, "TimelineVis", {
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var d3 = _interopRequireWildcard(__webpack_require__(/*! d3 */ "d3"));

var _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ "jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var $ = _jquery.default; // reusable chart pattern inspired by:
// https://bost.ocks.org/mike/chart/
// and
// https://www.toptal.com/d3-js/towards-reusable-d3-js-charts

var TimelineVis = /*#__PURE__*/function () {
  function TimelineVis() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, TimelineVis);

    var defaults = {
      el: null,
      data: null,
      width: 960,
      color: d3.scale.ordinal(d3.schemeCategory10),
      forceStrength: -2
    };
    Object.assign(this, defaults, opts); // opts will overwrite defaults

    this._data = this.data;
    this.data = this.updateData;

    if (typeof this.height === 'undefined') {
      this.height = .625 * this.width;
    } // this.manyBody = d3.forceManyBody()
    // 					.strength(this.forceStrength);


    this.init = false;
    console.log(this._data);

    if (this.el !== null && this._data !== null) {
      this.draw(this.el);
      this.init = true;
    }
  }

  _createClass(TimelineVis, [{
    key: "updateData",
    value: function updateData(value) {
      if (!arguments.length) return this._data;
      this._data = value;

      if (this.init === false) {
        this.draw(this.el);
        this.init = true;
      } else {
        // this.updateData();
        // NOT IMPLEMENTED
        console.log("UPDATING DATA NOT YET IMPLEMENTED");
      } // console.log(typeof updateData);
      // if (typeof updateData === 'function') updateData();


      return this;
    }
  }, {
    key: "draw",
    value: function draw(selection) {
      var obj = this;
      var w = this.width;
      var h = this.height;
      var data_total = this._data;
      selection.each(function () {
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

        function parseData(data) {
          data.forEach(function (d) {
            d.authors = d["display_authors"]; // string representing author names

            if (d.authors === undefined) {
              d.authors = null;
            }

            d.node_rank = d["node_rank"];
            d.venue = d["venue"];

            if (d.venue === undefined) {
              d.venue = null;
            }

            d.year = d["year"];
            d.url = d["url"];
            d.title = d["display_title"];
          });
          return data;
        }

        d3.select(window).on("resize", display);
        data_total = parseData(data_total);
        data_total.forEach(function (d) {
          d.lane = 0;

          if (d.node_rank === null) {
            d.node_rank = 0;
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
            return dd.node_rank;
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
          return d.node_rank;
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
        var mainLabel = mainLabelG.append("text").text("Number of articles in the year") // .attr("x", -m[1])
        // .attr("x", 0)
        // .attr("y", 10)
        .style("font-size", "14px") // .attr("text-anchor", "end")
        .attr("class", "laneText").attr("id", "mainLabel"); // wrap.bounds({height: mainHeight, width: m[3]}).method("tspans");

        wrap.bounds({
          height: mainHeight,
          width: m[3] * .9
        }); // d3.select(".laneText").call(wrap);

        mainLabel.call(wrap); // var subOffset = $( '#mainLabel' ).height();  // y offset for the sub label
        // var mainLabelSub = mainLabelG.append("text")
        // 	.attr("transform", "translate(0," + subOffset + ")")
        // 	.text("Size of circles indicates level of influence")
        // 	.style("font-size", "11px")
        // 	.attr("class", "laneText")
        // 	.attr("id", "mainLabelSub");
        //
        // wrap.bounds({height: mainHeight - subOffset, width: (m[3] * .9)});
        // mainLabelSub.call(wrap);
        //mini lanes and texts

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

          d.radius = 1 + efScaleMini(d.node_rank);
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

              d.radius = efScaleMain(d.node_rank);
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
              span.append($('<p class="tooltip title">').text(d.title)); // span.append( $( '<p class="tooltip authors">' ).text(d.authors.join(", ")) );

              span.append($('<p class="tooltip authors">').text(d.authors));
              if (d.venue) span.append($('<p class="tooltip journal">').text(d.venue));
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

              d.radius = efScaleMain(d.node_rank);
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
          return d.node_rank;
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
      return this;
    } // updateData() {
    // 	// use D3 update pattern with data
    //
    // 	var graph = this._data;
    // 	graph.nodes.forEach(function(d) {
    // 		d.id = d.id.toString();
    // 	})
    // 	graph.links.forEach(function(d) {
    // 		d.id = getLinkId(d, graph.directed);
    // 	});
    // 	this.simulation
    // 		.nodes(graph.nodes)
    // 		.on("tick", ticked);
    //
    // 	simulation.force("link")
    // 		.links(graph.links);
    // 	console.log(graph);
    // 	simulation.stop();
    // 	node = node.data(graph.nodes, function(d) { return d.id; });
    // 	var nodeExit = node.exit();
    // 	// nodeExit.selectAll("circle").attr("fill", "red");
    // 	var t = d3.transition('updateData').duration(5000);
    // 	nodeExit.selectAll("circle").style("stroke", "red").transition(t).attr("r", 0);
    // 	node = enterNodes(node, t);
    // 	// node = node.call(enterNodes, t);
    //
    //
    //
    // 	link = link
    // 		.data(graph.links, function(d) {
    // 			// d.id = getLinkId(d);
    // 			return d.id;
    // 		});
    // 	var linkExit = link.exit();
    // 	linkExit.style("stroke", "red").transition(t).style("opacity", 0).remove();
    // 	// linkExit.remove();
    // 	link = enterLinks(link, t);
    // 	simulation.on("tick").call();
    //
    //
    // 	t.end().then(function(d) {
    // 		nodeExit.remove();
    // 		// simulation.alpha(1).restart();
    // 		// simulation
    // 			// .alphaDecay(.0005)
    // 			// .velocityDecay(0.9)
    // 			// .alpha(.1)
    // 			// .restart();
    // 	});
    // 	
    // 	// setTimeout(function() {
    // 	// }, 4000);
    // }

  }]);

  return TimelineVis;
}();

var _default = TimelineVis;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3__;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZDNfYXJ0aWNsZV90aW1lbGluZS8uL3NyYy90aW1lbGluZVZpc19NYWluLmpzIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvZXh0ZXJuYWwgXCJkM1wiIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyIkIiwiVGltZWxpbmVWaXMiLCJvcHRzIiwiZGVmYXVsdHMiLCJlbCIsImRhdGEiLCJ3aWR0aCIsImNvbG9yIiwiZDMiLCJzY2FsZSIsIm9yZGluYWwiLCJzY2hlbWVDYXRlZ29yeTEwIiwiZm9yY2VTdHJlbmd0aCIsIk9iamVjdCIsImFzc2lnbiIsIl9kYXRhIiwidXBkYXRlRGF0YSIsImhlaWdodCIsImluaXQiLCJjb25zb2xlIiwibG9nIiwiZHJhdyIsInZhbHVlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic2VsZWN0aW9uIiwib2JqIiwidyIsImgiLCJkYXRhX3RvdGFsIiwiZWFjaCIsImRlY29uc3RydWN0VHJhbnNsYXRlIiwidHJhbnNsYXRlU3RyaW5nIiwicmVwbGFjZSIsInJlZ2V4IiwiUmVnRXhwIiwibWF0Y2giLCJleGVjIiwieCIsInkiLCJjb25zdHJ1Y3RUcmFuc2xhdGUiLCJ3cmFwIiwidGV4dHdyYXAiLCJtZXRob2QiLCJwYXJzZURhdGEiLCJmb3JFYWNoIiwiZCIsImF1dGhvcnMiLCJ1bmRlZmluZWQiLCJub2RlX3JhbmsiLCJ2ZW51ZSIsInllYXIiLCJ1cmwiLCJ0aXRsZSIsInNlbGVjdCIsIndpbmRvdyIsIm9uIiwiZGlzcGxheSIsImxhbmUiLCJtYXJrVHlwZSIsImdldFBhcmFtZXRlckJ5TmFtZSIsImRhdGFCeVllYXIiLCJuZXN0Iiwia2V5Iiwic29ydFZhbHVlcyIsImEiLCJiIiwiYXNjZW5kaW5nIiwiZW50cmllcyIsImZpcnN0VGl0bGUiLCJ2YWx1ZXMiLCJpZCIsInN1bV9laWdlbmZhY3RvciIsInN1bSIsImRkIiwibWF4RGF0YUJ5WWVhciIsIm1heCIsImxhbmVzIiwibGFuZUxlbmd0aCIsInRpbWVCZWdpbiIsIm1pbiIsInRpbWVFbmQiLCJtIiwibWluaUhlaWdodCIsIm1haW5IZWlnaHQiLCJtYWluTWluUmFkIiwibWFpbk1heFJhZCIsIm1pbmlNaW5SYWQiLCJtaW5pTWF4UmFkIiwibWluRXh0ZW50IiwibWF4RXh0ZW50Iiwic3R5bGVzQmFzZSIsInN0eWxlc1Zpc2libGUiLCJsaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsIngxIiwieTEiLCJ5MiIsImVmRXh0ZW50IiwiZXh0ZW50IiwiZWZTY2FsZU1pbmkiLCJlZlNjYWxlTWFpbiIsImVmU3VtU2NhbGUiLCJjaGFydFdpZHRoIiwiY2hhcnRIZWlnaHQiLCJjaGFydCIsImFwcGVuZCIsImF0dHIiLCJtYWluQ29udGFpbmVyIiwibWFpbiIsIm1pbmlDb250YWluZXIiLCJtaW5pIiwibWFpbkxhbmVMaW5lc0ciLCJpIiwibGVuIiwibWFpbkxhYmVsRyIsIm1haW5MYWJlbCIsInRleHQiLCJzdHlsZSIsImJvdW5kcyIsImNhbGwiLCJtaW5pTGFuZUxpbmVzRyIsIm1pbmlMYWJlbCIsInhBeGlzTWluaSIsInN2ZyIsImF4aXMiLCJvcmllbnQiLCJ0aWNrRm9ybWF0IiwiZm9ybWF0IiwieEF4aXNNYWluIiwieEF4aXNNYWluT2JqIiwibWFpbkNsaXBQYXRoIiwibWluaUl0ZW1zIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJyYWRpdXMiLCJzdGFja0l0ZW1zIiwiaXRlbXMiLCJ5ZWFyc0xpc3QiLCJwdXNoIiwibWF4UmFkIiwiX19kYXRhX18iLCJ0aGlzWWVhck1pbmkiLCJmaWx0ZXIiLCJtaW5pTWFya09wYWNpdHkiLCJNYXRoIiwibWluaU1hcmtzIiwieWVhckl0ZW1zIiwieWVhck1hcmtzIiwiY29udHJhY3QiLCJzZWwiLCJwYXBlckl0ZW1zIiwidGhpc1llYXJJdGVtIiwiZXhwYW5kIiwiaWR4Iiwic3BhbiIsImh0bWwiLCJwYXBlck1hcmtzIiwiYmJveCIsIm5vZGUiLCJnZXRCQm94IiwiaW5zZXJ0IiwicGFwZXJMYWJlbHMiLCJicnVzaCIsImV4dGVudExpbmVzIiwidXBkYXRlRXh0ZW50TGluZXMiLCJsZWZ0IiwicmlnaHQiLCJlbXB0eSIsInNjcm9sbER1ciIsIm1vdmVCcnVzaCIsImRpcmVjdGlvbiIsImNoYW5nZUV4dGVudCIsInJvdW5kIiwic2Nyb2xsSXRlbXMiLCJ6b29tSXRlbXMiLCJ6b29tTW91c2VPdmVyIiwiem9vbU1vdXNlT3V0Iiwic3RvcCIsImZhZGVUbyIsImNsZWFyQnJ1c2hJY29uIiwiZXZlbnQiLCJ3aGVlbERlbHRhWSIsIndoZWVsRGVsdGFYIiwibWlkcG9pbnRZZWFyIiwiYnJ1c2hJbml0IiwiZG9jdW1lbnQiLCJ0cmlnZ2VyIiwieWVhcjEiLCJ5ZWFyMiIsImR1cmF0aW9uIiwiZWFzZSIsImRlbGF5IiwidHJhbnNpdGlvbiIsImV4cGFuZEFsbCIsIm1heEVGIiwiY2xlYXJCcnVzaCIsIm1pZCIsImV4dGVudFNlbGVjdCIsIm1pbkV4dGVudFNjcmVlbiIsIm1heEV4dGVudFNjcmVlbiIsImludmVydCIsImNsYXNzZWQiLCJ1cGRhdGVNYWluIiwidmlzSXRlbXMiLCJub3RWaXNJdGVtcyIsIml0ZW0iLCJfcm90YXRlIiwicm90YXRpb24iLCJsYWJlbHMiLCJhbHBoYSIsInNwYWNpbmciLCJyZWxheCIsImFnYWluIiwiZGEiLCJheCIsImRiIiwiYngiLCJkZWx0YVgiLCJhYnMiLCJzaWduIiwibGFiZWxzQ29sbGlzaW9uRGV0ZWN0IiwiYWZ0ZXJUcmFuc2l0aW9uWCIsImFmdGVyVHJhbnNpdGlvblkiLCJ5ZWFySXRlbSIsInRoaXNZZWFyIiwiZHVyIiwidHJhbnNpdGlvblN0YXJ0U3R5bGUiLCJ0cmFuc2l0aW9uRW5kU3R5bGUiLCJsaW5lIiwibGluZWRhdGEiLCJzdHlsZVR3ZWVuIiwiaW50ZXJwb2xhdGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZGF0dW0iLCJyZW1vdmUiLCJjaGVja1NpbmdsZUxhYmVsIiwid3JhcEluQW5jaG9yIiwic3RhYmxlX3VybCIsInRoaXNMYWJlbCIsIndvcmRzIiwic3BsaXQiLCJnaXZlVXBUaHJlc2hvbGQiLCJ2aWV3TGVmdEVkZ2UiLCJwb3NpdGlvbiIsImxlZnRQb3MiLCJudW1Xb3JkcyIsInNsaWNlIiwic2hvcnRlbmVkVGl0bGUiLCJqb2luIiwiZGVtb0luaXQiLCJkaXNhYmxlSW50ZXJhY3Rpb24iLCJkZW1vUXVpdCIsImN1cnNvckljb24iLCJ0cmFuc2l0aW9uVGltZXMiLCJ5ZWFyUmFuZ2UiLCJpbml0QnJ1c2hSYW5nZSIsImZsb29yIiwiaW5pdEJydXNoUG9zaXRpb24iLCJudW1WaXNJdGVtcyIsInNpemUiLCJzZWxJbmRleCIsImNlaWwiLCJkZW1vWWVhckl0ZW0iLCJkZW1vRHJhd0JydXNoIiwiZGVtb0VuZCIsInhQb3MiLCJkZW1vRXhwYW5kIiwiZGVtb1llYXJNYXJrIiwidHJhbnNsYXRlU3RyIiwidHJhbnNsYXRlQ29vcmQiLCJ0cmFuc2xhdGUiLCJlbmFibGVJbnRlcmFjdGlvbiIsInRlc3RQbGFjZUN1cnNvciIsInRlc3RDaGFuZ2VIZWlnaHQiLCJjdXJyTWFpbkhlaWdodCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFD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QTtBQUNBO0FBQ0c7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRztBQUNBO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7ZUFHY3BNLFc7Ozs7Ozs7Ozs7Ozs7QUM3aURmLGdEOzs7Ozs7Ozs7OztBQ0FBLG9EIiwiZmlsZSI6ImQzX2FydGljbGVfdGltZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJkM1wiKSwgcmVxdWlyZShcImpRdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImQzX2FydGljbGVfdGltZWxpbmVcIiwgW1wiZDNcIiwgXCJqUXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZDNfYXJ0aWNsZV90aW1lbGluZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImQzXCIpLCByZXF1aXJlKFwialF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkM19hcnRpY2xlX3RpbWVsaW5lXCJdID0gZmFjdG9yeShyb290W1wiZDNcIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFRpbWVsaW5lVmlzIGZyb20gJy4vdGltZWxpbmVWaXNfTWFpbi5qcyc7XG5leHBvcnQgeyBUaW1lbGluZVZpcyB9O1xuXG4iLCIvLyBidWlsZGluZyBvZmYgaHR0cDovL2JsLm9ja3Mub3JnL2J1bmthdC8yMzM4MDM0XG4vL1xuLy9cbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcbmNvbnN0ICQgPSBqUXVlcnk7XG5cbi8vIHJldXNhYmxlIGNoYXJ0IHBhdHRlcm4gaW5zcGlyZWQgYnk6XG4vLyBodHRwczovL2Jvc3Qub2Nrcy5vcmcvbWlrZS9jaGFydC9cbi8vIGFuZFxuLy8gaHR0cHM6Ly93d3cudG9wdGFsLmNvbS9kMy1qcy90b3dhcmRzLXJldXNhYmxlLWQzLWpzLWNoYXJ0c1xuY2xhc3MgVGltZWxpbmVWaXMge1xuXHRjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcblx0XHRjb25zdCBkZWZhdWx0cyA9IHtcblx0XHRcdGVsOiBudWxsLFxuXHRcdFx0ZGF0YTogbnVsbCxcblx0XHRcdHdpZHRoOiA5NjAsXG5cdFx0XHRjb2xvcjogZDMuc2NhbGUub3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKSxcblx0XHRcdGZvcmNlU3RyZW5ndGg6IC0yLFxuXHRcdH07XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBkZWZhdWx0cywgb3B0cyk7ICAvLyBvcHRzIHdpbGwgb3ZlcndyaXRlIGRlZmF1bHRzXG5cdFx0dGhpcy5fZGF0YSA9IHRoaXMuZGF0YTtcblx0XHR0aGlzLmRhdGEgPSB0aGlzLnVwZGF0ZURhdGE7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmhlaWdodCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHRoaXMuaGVpZ2h0ID0gLjYyNSAqIHRoaXMud2lkdGg7XG5cdFx0fVxuXHRcdC8vIHRoaXMubWFueUJvZHkgPSBkMy5mb3JjZU1hbnlCb2R5KClcblx0XHQvLyBcdFx0XHRcdFx0LnN0cmVuZ3RoKHRoaXMuZm9yY2VTdHJlbmd0aCk7XG5cdFx0dGhpcy5pbml0ID0gZmFsc2U7XG5cdFx0Y29uc29sZS5sb2codGhpcy5fZGF0YSk7XG5cdFx0aWYgKHRoaXMuZWwgIT09IG51bGwgJiYgdGhpcy5fZGF0YSAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5kcmF3KHRoaXMuZWwpO1xuXHRcdFx0dGhpcy5pbml0ID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHR1cGRhdGVEYXRhKHZhbHVlKSB7XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fZGF0YTtcblx0XHR0aGlzLl9kYXRhID0gdmFsdWU7XG5cdFx0aWYgKHRoaXMuaW5pdCA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMuZHJhdyh0aGlzLmVsKTtcblx0XHRcdHRoaXMuaW5pdCA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHRoaXMudXBkYXRlRGF0YSgpO1xuXHRcdFx0Ly8gTk9UIElNUExFTUVOVEVEXG5cdFx0XHRjb25zb2xlLmxvZyhcIlVQREFUSU5HIERBVEEgTk9UIFlFVCBJTVBMRU1FTlRFRFwiKTtcblx0XHR9XG5cdFx0Ly8gY29uc29sZS5sb2codHlwZW9mIHVwZGF0ZURhdGEpO1xuXHRcdC8vIGlmICh0eXBlb2YgdXBkYXRlRGF0YSA9PT0gJ2Z1bmN0aW9uJykgdXBkYXRlRGF0YSgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdGRyYXcoc2VsZWN0aW9uKSB7XG5cdFx0dmFyIG9iaiA9IHRoaXM7XG5cdFx0dmFyIHcgPSB0aGlzLndpZHRoO1xuXHRcdHZhciBoID0gdGhpcy5oZWlnaHQ7XG5cdFx0dmFyIGRhdGFfdG90YWwgPSB0aGlzLl9kYXRhO1xuXHRcdHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0ZnVuY3Rpb24gZGVjb25zdHJ1Y3RUcmFuc2xhdGUodHJhbnNsYXRlU3RyaW5nKSB7XG5cdFx0XHRcdC8vIHRha2VzIGEgc3RyaW5nIGxpa2UgXCJ0cmFuc2xhdGUoMTAwLDIwMClcIiBhbmQgcmV0dXJucyB0aGUgbnVtYmVycyBbMTAwLCAyMDBdXG5cdFx0XHRcdHRyYW5zbGF0ZVN0cmluZyA9IHRyYW5zbGF0ZVN0cmluZy5yZXBsYWNlKFwiKFwiLCBcIlwiKS5yZXBsYWNlKFwiKVwiLCBcIlwiKTtcblx0XHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgvdHJhbnNsYXRlKFtcXGRcXC5dKyksKFtcXGRcXC5dKykvKTtcblx0XHRcdFx0dmFyIG1hdGNoID0gcmVnZXguZXhlYyh0cmFuc2xhdGVTdHJpbmcpO1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHg6ICttYXRjaFsxXSxcblx0XHRcdFx0XHR5OiArbWF0Y2hbMl1cblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gY29uc3RydWN0VHJhbnNsYXRlKHgsIHkpIHtcblx0XHRcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgeCArIFwiLFwiICsgeSArIFwiKVwiO1xuXHRcdFx0fVxuXG5cblx0XHRcdHZhciB3cmFwID0gZDMudGV4dHdyYXAoKS5tZXRob2QoXCJ0c3BhbnNcIik7XG5cblx0XHRcdGZ1bmN0aW9uIHBhcnNlRGF0YShkYXRhKSB7XG5cdFx0XHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0ZC5hdXRob3JzID0gZFtcImRpc3BsYXlfYXV0aG9yc1wiXTsgIC8vIHN0cmluZyByZXByZXNlbnRpbmcgYXV0aG9yIG5hbWVzXG5cdFx0XHRcdFx0aWYgKGQuYXV0aG9ycyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRkLmF1dGhvcnMgPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkLm5vZGVfcmFuayA9IGRbXCJub2RlX3JhbmtcIl07XG5cdFx0XHRcdFx0ZC52ZW51ZSA9IGRbXCJ2ZW51ZVwiXTtcblx0XHRcdFx0XHRpZiAoZC52ZW51ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRkLnZlbnVlID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZC55ZWFyID0gZFtcInllYXJcIl07XG5cdFx0XHRcdFx0ZC51cmwgPSBkW1widXJsXCJdO1xuXHRcdFx0XHRcdGQudGl0bGUgPSBkW1wiZGlzcGxheV90aXRsZVwiXTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0fVxuXG5cblx0XHRcdGQzLnNlbGVjdCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIGRpc3BsYXkpXG5cdFx0XHRkYXRhX3RvdGFsID0gcGFyc2VEYXRhKGRhdGFfdG90YWwpO1xuXHRcdFx0ZGF0YV90b3RhbC5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0ZC5sYW5lID0gMDtcblx0XHRcdFx0aWYgKGQubm9kZV9yYW5rID09PSBudWxsKSB7XG5cdFx0XHRcdFx0ZC5ub2RlX3JhbmsgPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHZhciBtYXJrVHlwZSA9IGdldFBhcmFtZXRlckJ5TmFtZSgnbScpO1xuXHRcdFx0aWYgKCAobWFya1R5cGUgIT0gJ2ljb24nKSAmJiAobWFya1R5cGUgIT0gJ2NpcmNsZScpICkge1xuXHRcdFx0XHRtYXJrVHlwZSA9ICdjaXJjbGUnICAvLyBkZWZhdWx0XG5cdFx0XHR9XG5cblx0XHRcdHZhciBkYXRhQnlZZWFyID0gZDMubmVzdCgpXG5cdFx0XHRcdFx0XHRcdFx0LmtleShmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhcjt9KVxuXHRcdFx0XHRcdFx0XHRcdC5zb3J0VmFsdWVzKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIHJldHVybiBkMy5kZXNjZW5kaW5nKGEuZWlnZW5mYWN0b3Jfc2NvcmUsIGIuZWlnZW5mYWN0b3Jfc2NvcmUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gcmV0dXJuIGQzLmFzY2VuZGluZyhhLnB1YmRhdGUsIGIucHViZGF0ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZDMuYXNjZW5kaW5nKGEudGl0bGUsIGIudGl0bGUpO1xuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0Ly8gLm1hcChkYXRhX3RvdGFsLCBkMy5tYXApO1xuXHRcdFx0XHRcdFx0XHRcdC5lbnRyaWVzKGRhdGFfdG90YWwpO1xuXHRcdFx0ZGF0YUJ5WWVhci5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0ZC5maXJzdFRpdGxlID0gZC52YWx1ZXNbMF0uaWQ7XG5cdFx0XHRcdGQuc3VtX2VpZ2VuZmFjdG9yID0gZDMuc3VtKGQudmFsdWVzLCBmdW5jdGlvbihkZCkge3JldHVybiBkZC5ub2RlX3Jhbms7fSk7XG5cdFx0XHRcdGQubGFuZSA9IDA7XG5cdFx0XHRcdGQueWVhciA9ICtkLmtleTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG1heERhdGFCeVllYXIgPSBkMy5tYXgoZGF0YUJ5WWVhciwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC52YWx1ZXMubGVuZ3RoOyB9KTtcblxuXHRcdFx0dmFyIGxhbmVzID0gW1wiQ2xpbWF0ZSBjaGFuZ2VcIl0sXG5cdFx0XHRcdFx0XHRsYW5lTGVuZ3RoID0gbGFuZXMubGVuZ3RoLFxuXHRcdFx0XHRcdC8vIHRpbWVCZWdpbiA9IG5ldyBEYXRlKFN0cmluZyhtaW5ZZWFyLTEpKSxcblx0XHRcdFx0XHR0aW1lQmVnaW4gPSArZDMubWluKGRhdGFCeVllYXIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueWVhcjsgfSkgLSAxLFxuXHRcdFx0XHRcdHRpbWVFbmQgPSArZDMubWF4KGRhdGFCeVllYXIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueWVhcjsgfSkgKyAxO1xuXG5cdFx0XHR2YXIgbSA9IFsyMCwgMTUsIDE1LCAxNTBdOyAvL3RvcCByaWdodCBib3R0b20gbGVmdFxuXHRcdFx0XHQvLyB3ID0gOTYwIC0gbVsxXSAtIG1bM10sXG5cdFx0XHRcdC8vIGggPSAzNTAgLSBtWzBdIC0gbVsyXSxcblx0XHRcdHcgPSB3IC0gbVsxXSAtIG1bM107XG5cdFx0XHRoID0gaCAtIG1bMF0gLSBtWzJdO1xuXHRcdFx0dmFyIG1pbmlIZWlnaHQgPSBsYW5lTGVuZ3RoICogMTIgKyAzMCxcblx0XHRcdFx0bWFpbkhlaWdodCA9IGggLSBtaW5pSGVpZ2h0IC0gNTA7XG5cblx0XHRcdHZhciBtYWluTWluUmFkID0gOCxcblx0XHRcdFx0bWFpbk1heFJhZCA9IDE4LFxuXHRcdFx0XHRtaW5pTWluUmFkID0gNSxcblx0XHRcdFx0bWluaU1heFJhZCA9IDEwO1xuXG5cdFx0XHR2YXIgbWluRXh0ZW50LCBtYXhFeHRlbnQ7ICAvLyB0aGVzZSB3aWxsIGJlIHRoZSBsb3dlciBhbmQgdXBwZXIgeWVhcnMgZGlzcGxheWVkIGluIG1haW5cblxuXHRcdFx0dmFyIHN0eWxlc0Jhc2UgPSB7XG5cdFx0XHRcdCdvcGFjaXR5JzogLjJcblx0XHRcdH07XG5cdFx0XHR2YXIgc3R5bGVzVmlzaWJsZSA9IHtcblx0XHRcdFx0J29wYWNpdHknOiAxXG5cdFx0XHR9O1xuXG5cdFx0XHQvL3NjYWxlc1xuXHRcdFx0dmFyIHggPSBkMy5zY2FsZS5saW5lYXIoKVxuXHRcdFx0XHRcdC5kb21haW4oW3RpbWVCZWdpbiwgdGltZUVuZF0pXG5cdFx0XHRcdFx0LnJhbmdlKFswLCB3XSk7XG5cdFx0XHR2YXIgeDEgPSBkMy5zY2FsZS5saW5lYXIoKVxuXHRcdFx0XHRcdC5yYW5nZShbMCwgd10pO1xuXHRcdFx0dmFyIHkxID0gZDMuc2NhbGUubGluZWFyKClcblx0XHRcdFx0XHQuZG9tYWluKFswLCBsYW5lTGVuZ3RoXSlcblx0XHRcdFx0XHQucmFuZ2UoWzAsIG1haW5IZWlnaHRdKTtcblx0XHRcdHZhciB5MiA9IGQzLnNjYWxlLmxpbmVhcigpXG5cdFx0XHRcdFx0LmRvbWFpbihbMCwgbGFuZUxlbmd0aF0pXG5cdFx0XHRcdFx0LnJhbmdlKFswLCBtaW5pSGVpZ2h0XSk7XG5cdFx0XHR2YXIgZWZFeHRlbnQgPSBkMy5leHRlbnQoZGF0YV90b3RhbCwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5ub2RlX3Jhbms7IH0pO1xuXHRcdFx0dmFyIGVmU2NhbGVNaW5pID0gZDMuc2NhbGUubGluZWFyKClcblx0XHRcdFx0XHQuZG9tYWluKGVmRXh0ZW50KVxuXHRcdFx0XHRcdC8vIC5yYW5nZShbMCwgNV0pO1xuXHRcdFx0XHRcdC5yYW5nZShbbWluaU1pblJhZCwgbWluaU1heFJhZF0pO1xuXHRcdFx0dmFyIGVmU2NhbGVNYWluID0gZDMuc2NhbGUubGluZWFyKClcblx0XHRcdFx0XHQuZG9tYWluKGVmRXh0ZW50KVxuXHRcdFx0XHRcdC8vIC5yYW5nZShbMCwgNV0pO1xuXHRcdFx0XHRcdC5yYW5nZShbbWFpbk1pblJhZCwgbWFpbk1heFJhZF0pO1xuXHRcdFx0dmFyIGVmU3VtU2NhbGUgPSBkMy5zY2FsZS5saW5lYXIoKVxuXHRcdFx0XHRcdC5kb21haW4oZDMuZXh0ZW50KGRhdGFCeVllYXIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc3VtX2VpZ2VuZmFjdG9yOyB9KSlcblx0XHRcdFx0XHQvLyAucmFuZ2UoWzAsIDVdKTtcblx0XHRcdFx0XHQucmFuZ2UoW21haW5NaW5SYWQsIG1haW5NYXhSYWRdKTtcblxuXG5cdFx0XHR2YXIgY2hhcnRXaWR0aCA9IHcgKyBtWzFdICsgbVszXSxcblx0XHRcdFx0Y2hhcnRIZWlnaHQgPSBoICsgbVswXSArIG1bMl07XG5cblx0XHRcdHZhciBjaGFydCA9IGQzLnNlbGVjdChcIiN0aW1lbGluZVwiKVxuXHRcdFx0XHRcdFx0LmFwcGVuZChcInN2Z1wiKVxuXHRcdFx0XHRcdFx0Ly8gLmF0dHIoXCJ3aWR0aFwiLCBjaGFydFdpZHRoKVxuXHRcdFx0XHRcdFx0Ly8gLmF0dHIoXCJoZWlnaHRcIiwgY2hhcnRIZWlnaHQpXG5cdFx0XHRcdFx0XHQuYXR0cihcImRhdGEtbWF4aW1pemVkSGVpZ2h0XCIsIGNoYXJ0SGVpZ2h0KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJkYXRhLWN1cnJIZWlnaHRcIiwgY2hhcnRIZWlnaHQpXG5cdFx0XHRcdFx0XHQuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyBjaGFydFdpZHRoICsgXCIgXCIgKyBjaGFydEhlaWdodClcblx0XHRcdFx0XHRcdC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaWRZTWlkIG1lZXRcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJjaGFydFwiKTtcblx0XHRcdFxuXHRcdFx0Y2hhcnQuYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJjbGlwUGF0aFwiKVxuXHRcdFx0XHQuYXR0cihcImlkXCIsIFwiY2xpcFwiKVxuXHRcdFx0XHQuYXBwZW5kKFwicmVjdFwiKVxuXHRcdFx0XHQuYXR0cihcIndpZHRoXCIsIHcpXG5cdFx0XHRcdC5hdHRyKFwiaGVpZ2h0XCIsIG1haW5IZWlnaHQpO1xuXG5cdFx0XHR2YXIgbWFpbkNvbnRhaW5lciA9IGNoYXJ0LmFwcGVuZChcImdcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBtWzBdICsgXCIpXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcIndpZHRoXCIsIGNoYXJ0V2lkdGgpXG5cdFx0XHRcdFx0XHQuYXR0cihcImhlaWdodFwiLCBtYWluSGVpZ2h0KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcIm1haW5Db250YWluZXJcIik7XG5cblx0XHRcdC8vIHZhciBtYWluID0gY2hhcnQuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0dmFyIG1haW4gPSBtYWluQ29udGFpbmVyLmFwcGVuZChcImdcIilcblx0XHRcdFx0XHRcdC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbVszXSArIFwiLFwiICsgbVswXSArIFwiKVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtWzNdICsgXCIsMClcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwid2lkdGhcIiwgdylcblx0XHRcdFx0XHRcdC5hdHRyKFwiaGVpZ2h0XCIsIG1haW5IZWlnaHQpXG5cdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibWFpblwiKTtcblxuXHRcdFx0dmFyIG1pbmlDb250YWluZXIgPSBjaGFydC5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgKG1haW5IZWlnaHQgKyBtWzBdKSArIFwiKVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ3aWR0aFwiLCBjaGFydFdpZHRoKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJoZWlnaHRcIiwgbWFpbkhlaWdodClcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJtaW5pQ29udGFpbmVyXCIpO1xuXG5cdFx0XHQvLyB2YXIgbWluaSA9IGNoYXJ0LmFwcGVuZChcImdcIilcblx0XHRcdHZhciBtaW5pID0gbWluaUNvbnRhaW5lci5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdFx0XHQvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1bM10gKyBcIixcIiArIChtYWluSGVpZ2h0ICsgbVswXSkgKyBcIilcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbVszXSArIFwiLDApXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcIndpZHRoXCIsIHcpXG5cdFx0XHRcdFx0XHQuYXR0cihcImhlaWdodFwiLCBtaW5pSGVpZ2h0KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcIm1pbmlcIik7XG5cdFx0XHRcblx0XHRcdC8vbWFpbiBsYW5lcyBhbmQgdGV4dHNcblx0XHRcdHZhciBtYWluTGFuZUxpbmVzRyA9IG1haW4uYXBwZW5kKFwiZ1wiKTtcblx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSBsYW5lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRtYWluTGFuZUxpbmVzRy5hcHBlbmQoXCJsaW5lXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJ4MVwiLCBtWzFdKVxuXHRcdFx0XHRcdC5hdHRyKFwieTFcIiwgZnVuY3Rpb24oKSB7cmV0dXJuIHkyKGkpO30pXG5cdFx0XHRcdFx0LmF0dHIoXCJ4MlwiLCB3KVxuXHRcdFx0XHRcdC5hdHRyKFwieTJcIiwgZnVuY3Rpb24oKSB7cmV0dXJuIHkyKGkpO30pXG5cdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImxhbmVMaW5lXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJzdHJva2VcIiwgXCJsaWdodGdyYXlcIik7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBtYWluTGFiZWxHID0gbWFpbkNvbnRhaW5lci5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIrKG1bMF0pK1wiKVwiKTtcblx0XHRcdHZhciBtYWluTGFiZWwgPSBtYWluTGFiZWxHLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0LnRleHQoXCJOdW1iZXIgb2YgYXJ0aWNsZXMgaW4gdGhlIHllYXJcIilcblx0XHRcdFx0Ly8gLmF0dHIoXCJ4XCIsIC1tWzFdKVxuXHRcdFx0XHQvLyAuYXR0cihcInhcIiwgMClcblx0XHRcdFx0Ly8gLmF0dHIoXCJ5XCIsIDEwKVxuXHRcdFx0XHQuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxNHB4XCIpXG5cdFx0XHRcdC8vIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImxhbmVUZXh0XCIpXG5cdFx0XHRcdC5hdHRyKFwiaWRcIiwgXCJtYWluTGFiZWxcIik7XG5cdFx0XG5cdFx0XHQvLyB3cmFwLmJvdW5kcyh7aGVpZ2h0OiBtYWluSGVpZ2h0LCB3aWR0aDogbVszXX0pLm1ldGhvZChcInRzcGFuc1wiKTtcblx0XHRcdHdyYXAuYm91bmRzKHtoZWlnaHQ6IG1haW5IZWlnaHQsIHdpZHRoOiAobVszXSAqIC45KX0pO1xuXHRcdFx0Ly8gZDMuc2VsZWN0KFwiLmxhbmVUZXh0XCIpLmNhbGwod3JhcCk7XG5cdFx0XHRtYWluTGFiZWwuY2FsbCh3cmFwKTtcblxuXHRcdFx0Ly8gdmFyIHN1Yk9mZnNldCA9ICQoICcjbWFpbkxhYmVsJyApLmhlaWdodCgpOyAgLy8geSBvZmZzZXQgZm9yIHRoZSBzdWIgbGFiZWxcblx0XHRcdC8vIHZhciBtYWluTGFiZWxTdWIgPSBtYWluTGFiZWxHLmFwcGVuZChcInRleHRcIilcblx0XHRcdC8vIFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIHN1Yk9mZnNldCArIFwiKVwiKVxuXHRcdFx0Ly8gXHQudGV4dChcIlNpemUgb2YgY2lyY2xlcyBpbmRpY2F0ZXMgbGV2ZWwgb2YgaW5mbHVlbmNlXCIpXG5cdFx0XHQvLyBcdC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjExcHhcIilcblx0XHRcdC8vIFx0LmF0dHIoXCJjbGFzc1wiLCBcImxhbmVUZXh0XCIpXG5cdFx0XHQvLyBcdC5hdHRyKFwiaWRcIiwgXCJtYWluTGFiZWxTdWJcIik7XG4gICAgICAgICAgICAvL1xuXHRcdFx0Ly8gd3JhcC5ib3VuZHMoe2hlaWdodDogbWFpbkhlaWdodCAtIHN1Yk9mZnNldCwgd2lkdGg6IChtWzNdICogLjkpfSk7XG5cdFx0XHQvLyBtYWluTGFiZWxTdWIuY2FsbCh3cmFwKTtcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHQvL21pbmkgbGFuZXMgYW5kIHRleHRzXG5cdFx0XHR2YXIgbWluaUxhbmVMaW5lc0cgPSBtaW5pLmFwcGVuZChcImdcIik7XG5cdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gbGFuZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0bWluaUxhbmVMaW5lc0cuYXBwZW5kKFwibGluZVwiKVxuXHRcdFx0XHRcdC5hdHRyKFwieDFcIiwgbVsxXSlcblx0XHRcdFx0XHQuYXR0cihcInkxXCIsIGZ1bmN0aW9uKCkge3JldHVybiB5MihpKTt9KVxuXHRcdFx0XHRcdC5hdHRyKFwieDJcIiwgdylcblx0XHRcdFx0XHQuYXR0cihcInkyXCIsIGZ1bmN0aW9uKCkge3JldHVybiB5MihpKTt9KVxuXHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJsYW5lTGluZVwiKVxuXHRcdFx0XHRcdC5hdHRyKFwic3Ryb2tlXCIsIFwibGlnaHRncmF5XCIpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbWluaUxhYmVsID0gbWluaUNvbnRhaW5lci5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIrIG1bMF0gK1wiKVwiKVxuXHRcdFx0XHQuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHQudGV4dChcIlNlbGVjdCBkYXRlIHJhbmdlIHRvIGZvY3VzIG9uOlwiKVxuXHRcdFx0XHQvLyAuYXR0cihcInhcIiwgLW1bMV0pXG5cdFx0XHRcdC8vIC5hdHRyKFwieFwiLCAwKVxuXHRcdFx0XHQvLyAuYXR0cihcInlcIiwgMTApXG5cdFx0XHRcdC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjE0cHhcIilcblx0XHRcdFx0Ly8gLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibGFuZVRleHRcIik7XG5cblx0XHRcdHdyYXAuYm91bmRzKHtoZWlnaHQ6IG1pbmlIZWlnaHQsIHdpZHRoOiAobVszXSAqIC45KX0pO1xuXHRcdFx0Ly8gZDMuc2VsZWN0KFwiLmxhbmVUZXh0XCIpLmNhbGwod3JhcCk7XG5cdFx0XHRtaW5pTGFiZWwuY2FsbCh3cmFwKTtcblxuXHRcdFx0Ly8gbWluaS5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcIi5sYW5lVGV4dFwiKVxuXHRcdFx0Ly8gXHQuZGF0YShsYW5lcylcblx0XHRcdC8vIFx0LmVudGVyKCkuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0Ly8gXHQudGV4dChmdW5jdGlvbihkKSB7cmV0dXJuIGQ7fSlcblx0XHRcdC8vIFx0LmF0dHIoXCJ4XCIsIC1tWzFdKVxuXHRcdFx0Ly8gXHQuYXR0cihcInlcIiwgZnVuY3Rpb24oZCwgaSkge3JldHVybiB5MihpICsgLjUpO30pXG5cdFx0XHQvLyBcdC5hdHRyKFwiZHlcIiwgXCIuNWV4XCIpXG5cdFx0XHQvLyBcdC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcblx0XHRcdC8vIFx0LmF0dHIoXCJjbGFzc1wiLCBcImxhbmVUZXh0XCIpO1xuXG5cdFx0XHQvLyBBeGVzXG5cdFx0XHR2YXIgeEF4aXNNaW5pID0gZDMuc3ZnLmF4aXMoKVxuXHRcdFx0XHQub3JpZW50KFwiYm90dG9tXCIpXG5cdFx0XHRcdC8vIC50aWNrcyg1KVxuXHRcdFx0XHQuc2NhbGUoeClcblx0XHRcdFx0LnRpY2tGb3JtYXQoZDMuZm9ybWF0KFwiZFwiKSk7XG5cblx0XHRcdG1pbmkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwieGF4aXNcIilcblx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIChtaW5pSGVpZ2h0KSArIFwiKVwiKVxuXHRcdFx0XHQuY2FsbCh4QXhpc01pbmkpO1xuXG5cdFx0XHR2YXIgeEF4aXNNYWluID0gZDMuc3ZnLmF4aXMoKVxuXHRcdFx0XHQub3JpZW50KFwidG9wXCIpXG5cdFx0XHRcdC5zY2FsZSh4MSlcblx0XHRcdFx0LnRpY2tGb3JtYXQoZDMuZm9ybWF0KFwiZFwiKSk7XG5cblx0XHRcdHZhciB4QXhpc01haW5PYmogPSBtYWluLmFwcGVuZChcImdcIilcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInhheGlzXCIpXG5cdFx0XHRcdC5jYWxsKHhBeGlzTWFpbik7XG5cblx0XHRcdHZhciBtYWluQ2xpcFBhdGggPSBtYWluLmFwcGVuZChcImdcIilcblx0XHRcdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibWFpbkNsaXBQYXRoXCIpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoXCJjbGlwLXBhdGhcIiwgXCJ1cmwoI2NsaXApXCIpO1xuXG5cdFx0XHRcblx0XHRcdC8vbWluaSBpdGVtc1xuXHRcdFx0Ly8gbm90ZTogbW91c2VvdmVyIGV2ZW50cyB3aWxsIG5vdCBwbGF5IHdlbGwgd2l0aCB0aGUgYnJ1c2hcblx0XHRcdHZhciBtaW5pSXRlbXMgPSBtaW5pLmFwcGVuZChcImdcIikuc2VsZWN0QWxsKFwiLm1pbmlJdGVtXCIpXG5cdFx0XHRcdC5kYXRhKGRhdGFfdG90YWwpXG5cdFx0XHRcdC5lbnRlcigpLmFwcGVuZChcImdcIilcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcIm1pbmlJdGVtXCIpXG5cdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRkLnggPSB4KGQueWVhcik7XG5cdFx0XHRcdFx0Ly8gZC55ID0gMDsgIC8vIGZvciBub3dcblx0XHRcdFx0XHRkLnkgPSBtaW5pSGVpZ2h0IC8gMjtcblx0XHRcdFx0XHQvLyBkLnJhZGl1cyA9IDUgKyBlZlNjYWxlKGQuZWlnZW5mYWN0b3Jfc2NvcmUpO1xuXHRcdFx0XHRcdGQucmFkaXVzID0gMSArICggZWZTY2FsZU1pbmkoZC5ub2RlX3JhbmspICk7XG5cdFx0XHRcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjtcblx0XHRcdFx0fSk7XG5cblx0XHRcdC8vIG5vdCBjdXJyZW50bHkgdXNpbmcgdGhpc1xuXHRcdFx0ZnVuY3Rpb24gc3RhY2tJdGVtcyhpdGVtcywgc2NhbGUpIHtcblx0XHRcdFx0dmFyIHllYXJzTGlzdCA9IFtdO1xuXHRcdFx0XHRpdGVtcy5lYWNoKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRpZiAoICEoZC55ZWFyIGluIHllYXJzTGlzdCkgKSB7XG5cdFx0XHRcdFx0XHR5ZWFyc0xpc3QucHVzaChkLnllYXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdHZhciBtYXhSYWQgPSBkMy5tYXgoaXRlbXNbMF0sIGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC5fX2RhdGFfXy5yYWRpdXN9KTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHllYXJzTGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRcdHRoaXNZZWFyTWluaSA9IGl0ZW1zLmZpbHRlcihmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhcj09eWVhcnNMaXN0W2ldfSk7XG5cdFx0XHRcdFx0dmFyIHkgPSAwO1xuXHRcdFx0XHRcdHRoaXNZZWFyTWluaS5lYWNoKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdGlmICh5ID09IDApIHtcblx0XHRcdFx0XHRcdFx0eSA9IHNjYWxlKGQubGFuZSkgKyBtYXhSYWQ7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR5ID0geSArIDIqZC5yYWRpdXM7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRkLnkgPSB5O1xuXHRcdFx0XHRcdFx0ZDMuc2VsZWN0KHRoaXMpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIHN0YWNrSXRlbXMobWluaUl0ZW1zLCB5Mik7XG5cblx0XHRcdHZhciBtaW5pTWFya09wYWNpdHkgPSBNYXRoLm1heCggKDEvbWF4RGF0YUJ5WWVhciksIDAuMyApO1xuXHRcdFx0dmFyIG1pbmlNYXJrcyA9IG1pbmlJdGVtcy5hcHBlbmQoXCJjaXJjbGVcIilcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcIm1pbmlNYXJrXCIpXG5cdFx0XHRcdC5hdHRyKFwiclwiLCBmdW5jdGlvbihkKSB7cmV0dXJuIGQucmFkaXVzO30pXG5cdFx0XHRcdC8vIC5zdHlsZShzdHlsZXNCYXNlKTtcblx0XHRcdFx0LnN0eWxlKFwib3BhY2l0eVwiLCBtaW5pTWFya09wYWNpdHkpO1xuXG5cblx0XHRcdHN3aXRjaCAobWFya1R5cGUpIHtcblx0XHRcdFx0Y2FzZSAnY2lyY2xlJzpcblx0XHRcdFx0XHQvL21haW4gaXRlbXNcblx0XHRcdFx0XHR2YXIgeWVhckl0ZW1zID0gbWFpbkNsaXBQYXRoLmFwcGVuZChcImdcIikuc2VsZWN0QWxsKFwiLnllYXJJdGVtXCIpXG5cdFx0XHRcdFx0XHQuZGF0YShkYXRhQnlZZWFyKVxuXHRcdFx0XHRcdFx0LmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInllYXJJdGVtXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdGQueCA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHRcdFx0ZC55ID0gMDsgIC8vZm9yIG5vd1xuXHRcdFx0XHRcdFx0XHQvLyBkLnJhZGl1cyA9IG1haW5NaW5SYWQgKyAoMiAqIGVmU3VtU2NhbGUoZC5zdW1fZWlnZW5mYWN0b3IpKTtcblx0XHRcdFx0XHRcdFx0ZC5yYWRpdXMgPSBlZlN1bVNjYWxlKGQuc3VtX2VpZ2VuZmFjdG9yKTtcblx0XHRcdFx0XHRcdFx0Ly8gZC5yYWRpdXMgPSBtYWluTWluUmFkICsgKGQudmFsdWVzLmxlbmd0aCoyKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjtcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0dmFyIHllYXJNYXJrcyA9IHllYXJJdGVtcy5hcHBlbmQoXCJjaXJjbGVcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJ5ZWFyTWFya1wiKVxuXHRcdFx0XHRcdFx0Ly8gLm9uKCdtb3VzZW92ZXInLCBleHBhbmQpXG5cdFx0XHRcdFx0XHQub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0Y29udHJhY3QoKTtcblx0XHRcdFx0XHRcdFx0dmFyIHNlbCA9IHBhcGVySXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGRkKSB7cmV0dXJuIGRkLnllYXI9PT1kLnllYXJ9KTtcblx0XHRcdFx0XHRcdFx0dmFyIHRoaXNZZWFySXRlbSA9IGQzLnNlbGVjdCh0aGlzKTtcblx0XHRcdFx0XHRcdFx0ZXhwYW5kKHNlbCwgdGhpc1llYXJJdGVtKTtcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC8vIC5vbignbW91c2VvdXQnLCBjb250cmFjdClcblx0XHRcdFx0XHRcdC5zdHlsZShzdHlsZXNWaXNpYmxlKTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdC8vbGFiZWwgZm9yIG51bWJlciBvZiBwYXBlcnNcblx0XHRcdFx0XHR5ZWFySXRlbXMuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ5XCIsIFwiLjNlbVwiKSAgLy9udWRnZVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcIm51bUluZGljYXRvclwiKVxuXHRcdFx0XHRcdFx0LnRleHQoZnVuY3Rpb24oZCkge3JldHVybiBkLnZhbHVlcy5sZW5ndGg7fSk7XG5cblx0XHRcdFx0XHR2YXIgcGFwZXJJdGVtcyA9IHllYXJJdGVtcy5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcIi5wYXBlckl0ZW1cIilcblx0XHRcdFx0XHRcdC5kYXRhKGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC52YWx1ZXN9KVxuXHRcdFx0XHRcdFx0LmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInBhcGVySXRlbVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJkYXRhLXllYXJcIiwgZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXI7fSlcblx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQsIGkpIHtcblx0XHRcdFx0XHRcdFx0ZC54ID0gMDsgIC8vZm9yIG5vd1xuXHRcdFx0XHRcdFx0XHRkLnkgPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0XHRcdGQuaWR4ID0gaTtcblx0XHRcdFx0XHRcdFx0Ly8gZC5yYWRpdXMgPSBtYWluTWluUmFkICsgKDIgKiBlZlNjYWxlKGQuZWlnZW5mYWN0b3IpKTtcblx0XHRcdFx0XHRcdFx0ZC5yYWRpdXMgPSBlZlNjYWxlTWFpbihkLm5vZGVfcmFuayk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0aXRsZVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gZm9yIHRvb2x0aXBcblx0XHRcdFx0XHRcdFx0XHQvLyB2YXIgdGV4dCA9IGQudGl0bGVcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0XHQrIFwiLCBcIlxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHRcdCsgZC5hdXRob3JzLmpvaW4oXCIsIFwiKVxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHRcdCsgXCIsIFwiXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0KyBkLmpvdXJuYWxcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0XHQrIFwiLCBcIlxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHRcdCsgZC55ZWFyO1xuXHRcdFx0XHRcdFx0XHRcdC8vIHJldHVybiB0ZXh0O1xuXHRcdFx0XHRcdFx0XHR2YXIgc3BhbiA9ICQoICc8c3Bhbj4nICk7XG5cdFx0XHRcdFx0XHRcdHNwYW4uYXBwZW5kKCAkKCAnPHAgY2xhc3M9XCJ0b29sdGlwIHRpdGxlXCI+JyApLnRleHQoZC50aXRsZSkgKTsgXG5cdFx0XHRcdFx0XHRcdC8vIHNwYW4uYXBwZW5kKCAkKCAnPHAgY2xhc3M9XCJ0b29sdGlwIGF1dGhvcnNcIj4nICkudGV4dChkLmF1dGhvcnMuam9pbihcIiwgXCIpKSApO1xuXHRcdFx0XHRcdFx0XHRzcGFuLmFwcGVuZCggJCggJzxwIGNsYXNzPVwidG9vbHRpcCBhdXRob3JzXCI+JyApLnRleHQoZC5hdXRob3JzKSApO1xuXHRcdFx0XHRcdFx0XHRpZiAoZC52ZW51ZSkgc3Bhbi5hcHBlbmQoICQoICc8cCBjbGFzcz1cInRvb2x0aXAgam91cm5hbFwiPicgKS50ZXh0KGQudmVudWUpICk7IFxuXHRcdFx0XHRcdFx0XHRzcGFuLmFwcGVuZCggJCggJzxwIGNsYXNzPVwidG9vbHRpcCB5ZWFyXCI+JyApLnRleHQoZC55ZWFyKSApOyBcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNwYW4uaHRtbCgpO1xuXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIHZhciB0ID0gZDMuc2VsZWN0KHRoaXMpLnNlbGVjdCgnLnBhcGVyTGFiZWwnKTtcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygkKCB0aGlzICkucG9zaXRpb24oKSk7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJCggJy5tYWluJyApLnBvc2l0aW9uKCkudG9wICsgbWFpbkhlaWdodCk7XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQub24oXCJjbGlja1wiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdHZhciB1cmwgPSBkLnVybDtcblx0XHRcdFx0XHRcdFx0Ly8gd2luZG93Lm9wZW4odXJsLCdfYmxhbmsnKTtcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0dmFyIHBhcGVyTWFya3MgPSBwYXBlckl0ZW1zLmFwcGVuZChcImNpcmNsZVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJyXCIsIDApICAvL2ZvciBub3dcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJwYXBlck1hcmtcIik7XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XG5cdFx0XHRcdGNhc2UgJ2ljb24nOlxuXHRcdFx0XHRcdC8vbWFpbiBpdGVtc1xuXHRcdFx0XHRcdHZhciB5ZWFySXRlbXMgPSBtYWluQ2xpcFBhdGguYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoXCIueWVhckl0ZW1cIilcblx0XHRcdFx0XHRcdC5kYXRhKGRhdGFCeVllYXIpXG5cdFx0XHRcdFx0XHQuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwieWVhckl0ZW1cIilcblx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0ZC54ID0gMDsgIC8vZm9yIG5vd1xuXHRcdFx0XHRcdFx0XHRkLnkgPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0XHRcdC8vIGQucmFkaXVzID0gbWFpbk1pblJhZCArICgyICogZWZTdW1TY2FsZShkLnN1bV9laWdlbmZhY3RvcikpO1xuXHRcdFx0XHRcdFx0XHRkLnJhZGl1cyA9IGVmU3VtU2NhbGUoZC5zdW1fZWlnZW5mYWN0b3IpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dmFyIHBhcGVySXRlbXMgPSB5ZWFySXRlbXMuYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoXCIucGFwZXJJdGVtXCIpXG5cdFx0XHRcdFx0XHQuZGF0YShmdW5jdGlvbihkKSB7cmV0dXJuIGQudmFsdWVzfSlcblx0XHRcdFx0XHRcdC5lbnRlcigpLmFwcGVuZChcImdcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJwYXBlckl0ZW1cIilcblx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQsIGkpIHtcblx0XHRcdFx0XHRcdFx0ZC54ID0gMDsgIC8vZm9yIG5vd1xuXHRcdFx0XHRcdFx0XHRkLnkgPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0XHRcdGQuaWR4ID0gaTtcblx0XHRcdFx0XHRcdFx0Ly8gZC5yYWRpdXMgPSBtYWluTWluUmFkICsgKDIgKiBlZlNjYWxlKGQuZWlnZW5mYWN0b3IpKTtcblx0XHRcdFx0XHRcdFx0ZC5yYWRpdXMgPSBlZlNjYWxlTWFpbihkLm5vZGVfcmFuayk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdFx0XHR9KTtcblxuXG5cdFx0XHRcdFx0dmFyIHBhcGVyTWFya3MgPSBwYXBlckl0ZW1zLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJwYXBlck1hcmtcIilcblx0XHRcdFx0XHRcdC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwiRm9udEF3ZXNvbWVcIilcblx0XHRcdFx0XHRcdC50ZXh0KFwiXFx1ZjBmNlwiKVxuXHRcdFx0XHRcdFx0Ly8gLm9uKCdtb3VzZW92ZXInLCBleHBhbmQpXG5cdFx0XHRcdFx0XHQuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG5cdFx0XHRcdFx0XHQub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0Y29udHJhY3QoKTtcblx0XHRcdFx0XHRcdFx0dmFyIHNlbCA9IHBhcGVySXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGRkKSB7cmV0dXJuIGRkLnllYXI9PT1kLnllYXJ9KTtcblx0XHRcdFx0XHRcdFx0ZXhwYW5kKHNlbCk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0Ly8gLm9uKCdtb3VzZW91dCcsIGNvbnRyYWN0KVxuXG5cdFx0XHRcdFx0dmFyIGJib3ggPSBwYXBlck1hcmtzLm5vZGUoKS5nZXRCQm94KCk7XG5cdFx0XHRcdFx0cGFwZXJJdGVtcy5pbnNlcnQoXCJyZWN0XCIsIFwiLnBhcGVyTWFya1wiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ4XCIsIGJib3gueClcblx0XHRcdFx0XHRcdC5hdHRyKFwieVwiLCBiYm94LnkpXG5cdFx0XHRcdFx0XHQuYXR0cihcIndpZHRoXCIsIGJib3gud2lkdGgpXG5cdFx0XHRcdFx0XHQuYXR0cihcImhlaWdodFwiLCBiYm94LmhlaWdodClcblx0XHRcdFx0XHRcdC5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcblxuXHRcdFx0XHRcdC8vIC8vbWFpbiBpdGVtc1xuXHRcdFx0XHRcdC8vIHZhciBwYXBlckl0ZW1zID0gbWFpbkNsaXBQYXRoLmFwcGVuZChcImdcIikuc2VsZWN0QWxsKFwiLnBhcGVySXRlbVwiKVxuXHRcdFx0XHRcdC8vIFx0LmRhdGEoZGF0YV90b3RhbClcblx0XHRcdFx0XHQvLyBcdC5lbnRlcigpLmFwcGVuZChcImdcIilcblx0XHRcdFx0XHQvLyBcdC5hdHRyKFwiY2xhc3NcIiwgXCJwYXBlckl0ZW1cIilcblx0XHRcdFx0XHQvLyBcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHQvLyBcdFx0ZC54ID0gMDsgIC8vZm9yIG5vd1xuXHRcdFx0XHRcdC8vIFx0XHRkLnkgPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0Ly8gXHRcdGQucmFkaXVzID0gbWFpbk1pblJhZCArICgyICogZWZTdW1TY2FsZShkLnN1bV9laWdlbmZhY3RvcikpO1xuXHRcdFx0XHRcdC8vIFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiO1xuXHRcdFx0XHRcdC8vIFx0fSk7XG5cdFx0XHRcdFx0Ly8gdmFyIHBhcGVyTWFya3MgPSBwYXBlckl0ZW1zLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0XHQvLyBcdC5hdHRyKFwiY2xhc3NcIiwgXCJwYXBlck1hcmtcIilcblx0XHRcdFx0XHQvLyBcdC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwiRm9udEF3ZXNvbWVcIilcblx0XHRcdFx0XHQvLyBcdC50ZXh0KFwiXFx1ZjBmNlwiKVxuXHRcdFx0XHRcdC8vIFx0Ly8gLm9uKCdtb3VzZW92ZXInLCBleHBhbmQpXG5cdFx0XHRcdFx0Ly8gXHQub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHQvLyBcdFx0Y29udHJhY3QoKTtcblx0XHRcdFx0XHQvLyBcdFx0dmFyIHNlbCA9IHBhcGVySXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGRkKSB7cmV0dXJuIGRkLnllYXI9PT1kLnllYXJ9KTtcblx0XHRcdFx0XHQvLyBcdFx0ZXhwYW5kKHNlbCk7XG5cdFx0XHRcdFx0Ly8gXHRcdH0pO1xuXHRcdFx0XHRcdC8vIFx0Ly8gLm9uKCdtb3VzZW91dCcsIGNvbnRyYWN0KVxuXG5cdFx0XHRcdFx0Ly8gdmFyIHllYXJJdGVtcyA9IG1haW5DbGlwUGF0aC5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcIi55ZWFySXRlbVwiKVxuXHRcdFx0XHRcdC8vIFx0LmRhdGEoZGF0YUJ5WWVhcilcblx0XHRcdFx0XHQvLyBcdC5lbnRlcigpLmFwcGVuZChcImdcIilcblx0XHRcdFx0XHQvLyBcdC5hdHRyKFwiY2xhc3NcIiwgXCJ5ZWFySXRlbVwiKVxuXHRcdFx0XHRcdC8vIFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdC8vIFx0XHRkLnggPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0Ly8gXHRcdGQueSA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHQvLyBcdFx0ZC5yYWRpdXMgPSBtYWluTWluUmFkICsgKDIgKiBlZlN1bVNjYWxlKGQuc3VtX2VpZ2VuZmFjdG9yKSk7XG5cdFx0XHRcdFx0Ly8gXHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdFx0Ly8gXHR9KTtcblx0XHRcdFx0XHQvLyB2YXIgeWVhck1hcmtzID0geWVhckl0ZW1zLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0XHQvLyBcdC5hdHRyKFwiY2xhc3NcIiwgXCJ5ZWFyTWFya1wiKVxuXHRcdFx0XHRcdC8vIFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0XHRcdC8vIFx0LnRleHQoXCJcXHVmMGY2XCIpXG5cdFx0XHRcdFx0Ly8gXHQvLyAub24oJ21vdXNlb3ZlcicsIGV4cGFuZClcblx0XHRcdFx0XHQvLyBcdC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdC8vIFx0XHRjb250cmFjdCgpO1xuXHRcdFx0XHRcdC8vIFx0XHR2YXIgc2VsID0gcGFwZXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZGQpIHtyZXR1cm4gZGQueWVhcj09PWQueWVhcn0pO1xuXHRcdFx0XHRcdC8vIFx0XHRleHBhbmQoc2VsKTtcblx0XHRcdFx0XHQvLyBcdFx0fSk7XG5cdFx0XHRcdFx0Ly8gXHQvLyAub24oJ21vdXNlb3V0JywgY29udHJhY3QpXG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcblx0XHRcdH1cblxuXG5cdFx0XHR2YXIgcGFwZXJMYWJlbHMgPSBwYXBlckl0ZW1zLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0LmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwicGFwZXJMYWJlbFwiKVxuXHRcdFx0XHQuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKVxuXHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgtMTUsMClcIikgIC8vIG51ZGdlIGxlZnRcblx0XHRcdFx0Ly8gLnRleHQoZnVuY3Rpb24oZCkge3JldHVybiBkLnRpdGxlO30pO1xuXHRcdFx0XHQuaHRtbChmdW5jdGlvbihkKSB7cmV0dXJuICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJyArIGQudXJsICsgJ1wiPicgKyBkLnRpdGxlICsgJzwvYT4nO30pO1xuXG5cblxuXHRcdFx0Ly9taW5pIGxhYmVsc1xuXHRcdFx0Ly8gbWluaS5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcIi5taW5pTGFiZWxzXCIpXG5cdFx0XHQvLyBcdC5kYXRhKGRhdGEpXG5cdFx0XHQvLyBcdC5lbnRlcigpLmFwcGVuZChcInRleHRcIilcblx0XHRcdC8vIFx0LnRleHQoZnVuY3Rpb24oZCkge3JldHVybiBkLmlkO30pXG5cdFx0XHQvLyBcdC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7cmV0dXJuIHgoZC5zdGFydCk7fSlcblx0XHRcdC8vIFx0LmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4geTIoZC5sYW5lICsgLjUpO30pXG5cdFx0XHQvLyBcdC5hdHRyKFwiZHlcIiwgXCIuNWV4XCIpO1xuXG5cdFx0XHQvL2JydXNoXG5cdFx0XHR2YXIgYnJ1c2ggPSBkMy5zdmcuYnJ1c2goKVxuXHRcdFx0XHRcdFx0XHRcdC54KHgpXG5cdFx0XHRcdFx0XHRcdFx0Lm9uKFwiYnJ1c2hcIiwgZGlzcGxheSk7XG5cblx0XHRcdG1pbmkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwieCBicnVzaFwiKVxuXHRcdFx0XHQuY2FsbChicnVzaClcblx0XHRcdFx0LnNlbGVjdEFsbChcInJlY3RcIilcblx0XHRcdFx0LmF0dHIoXCJ5XCIsIDEpXG5cdFx0XHRcdC5hdHRyKFwiaGVpZ2h0XCIsIG1pbmlIZWlnaHQgLSAxKTtcblxuXHRcdFx0dmFyIGV4dGVudExpbmVzID0gW107XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDIgOyBpKyspIHtcblx0XHRcdFx0ZXh0ZW50TGluZXMucHVzaChjaGFydC5hcHBlbmQoXCJsaW5lXCIpLmF0dHIoXCJjbGFzc1wiLCBcImV4dGVudExpbmVcIikpO1xuXHRcdFx0fVxuXHRcdFx0ZnVuY3Rpb24gdXBkYXRlRXh0ZW50TGluZXMobGVmdCwgcmlnaHQpIHtcblx0XHRcdFx0aWYgKGJydXNoLmVtcHR5KCkpIHtcblx0XHRcdFx0XHRleHRlbnRMaW5lcy5mb3JFYWNoKGZ1bmN0aW9uKHNlbCkge3NlbC5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO30pXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZXh0ZW50TGluZXMuZm9yRWFjaChmdW5jdGlvbihzZWwpIHtzZWwuc3R5bGUoXCJkaXNwbGF5XCIsIFwiXCIpO30pXG5cdFx0XHRcdFx0ZXh0ZW50TGluZXNbMF0uYXR0cihcIngxXCIsIG1bM10pXG5cdFx0XHRcdFx0XHQuYXR0cihcInkxXCIsIG1bMF0pXG5cdFx0XHRcdFx0XHQuYXR0cihcIngyXCIsIGxlZnQgKyBtWzNdKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ5MlwiLCAobWFpbkhlaWdodCArIG1bMF0pKTtcblx0XHRcdFx0XHRleHRlbnRMaW5lc1sxXS5hdHRyKFwieDFcIiwgdyttWzNdKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ5MVwiLCBtWzBdKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ4MlwiLCByaWdodCArIG1bM10pXG5cdFx0XHRcdFx0XHQuYXR0cihcInkyXCIsIChtYWluSGVpZ2h0ICsgbVswXSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzY3JvbGxEdXIgPSAxNTA7XG5cdFx0XHRmdW5jdGlvbiBtb3ZlQnJ1c2goZGlyZWN0aW9uKSB7XG5cdFx0XHRcdC8vIGlmIChicnVzaC5lbXB0eSgpIHx8IG1pbkV4dGVudDx0aW1lQmVnaW4gfHwgbWF4RXh0ZW50PnRpbWVFbmQpIHtcblx0XHRcdFx0aWYgKGJydXNoLmVtcHR5KCkpIHtcblx0XHRcdFx0XHRtaW5FeHRlbnQgPSAodGltZUVuZCArIHRpbWVCZWdpbikgLyAyO1xuXHRcdFx0XHRcdG1heEV4dGVudCA9ICggKHRpbWVFbmQgKyB0aW1lQmVnaW4pIC8gMiApICsgMTtcblx0XHRcdFx0XHRjaGFuZ2VFeHRlbnQobWluRXh0ZW50LCBtYXhFeHRlbnQsIDApO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRzd2l0Y2ggKGRpcmVjdGlvbikge1xuXHRcdFx0XHRcdGNhc2UgJ2xlZnQnOlxuXHRcdFx0XHRcdFx0Y2hhbmdlRXh0ZW50KE1hdGgucm91bmQobWluRXh0ZW50LTEpLCBNYXRoLnJvdW5kKG1heEV4dGVudC0xKSwgc2Nyb2xsRHVyLCBcImxpbmVhclwiKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSAncmlnaHQnOlxuXHRcdFx0XHRcdFx0Y2hhbmdlRXh0ZW50KE1hdGgucm91bmQobWluRXh0ZW50KzEpLCBNYXRoLnJvdW5kKG1heEV4dGVudCsxKSwgc2Nyb2xsRHVyLCBcImxpbmVhclwiKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSAnem9vbUluJzpcblx0XHRcdFx0XHRcdGNoYW5nZUV4dGVudChNYXRoLnJvdW5kKG1pbkV4dGVudCsxKSwgTWF0aC5yb3VuZChtYXhFeHRlbnQtMSksIHNjcm9sbER1ciwgXCJsaW5lYXJcIik7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgJ3pvb21PdXQnOlxuXHRcdFx0XHRcdFx0Y2hhbmdlRXh0ZW50KE1hdGgucm91bmQobWluRXh0ZW50LTEpLCBNYXRoLnJvdW5kKG1heEV4dGVudCsxKSwgc2Nyb2xsRHVyLCBcImxpbmVhclwiKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgc2Nyb2xsSXRlbXMgPSBtYWluQ2xpcFBhdGguYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJzY3JvbGxJdGVtc1wiKVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyAobWFpbkhlaWdodCowLjcpICsgXCIpXCIpO1xuXHRcdFx0c2Nyb2xsSXRlbXMuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibGVmdEFycm93XCIpXG5cdFx0XHRcdC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwiRm9udEF3ZXNvbWVcIilcblx0XHRcdFx0LnRleHQoXCJcXHVmMDYwXCIpXG5cdFx0XHRcdC5hdHRyKFwieFwiLCAwKVxuXHRcdFx0XHQvLyAuYXR0cihcInlcIiwgbWFpbkhlaWdodCAvIDIpXG5cdFx0XHRcdC8vIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjEuNWVtXCIpXG5cdFx0XHRcdC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdC8vIGNoYW5nZUV4dGVudChNYXRoLnJvdW5kKG1pbkV4dGVudC0xKSwgTWF0aC5yb3VuZChtYXhFeHRlbnQtMSksIHNjcm9sbER1ciwgXCJsaW5lYXJcIik7XG5cdFx0XHRcdFx0bW92ZUJydXNoKCdsZWZ0Jyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRzY3JvbGxJdGVtcy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJyaWdodEFycm93XCIpXG5cdFx0XHRcdC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwiRm9udEF3ZXNvbWVcIilcblx0XHRcdFx0LnRleHQoXCJcXHVmMDYxXCIpXG5cdFx0XHRcdC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcblx0XHRcdFx0LmF0dHIoXCJ4XCIsIHcpXG5cdFx0XHRcdC8vIC5hdHRyKFwieVwiLCBtYWluSGVpZ2h0IC8gMilcblx0XHRcdFx0Ly8gLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMS41ZW1cIilcblx0XHRcdFx0Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Ly8gY2hhbmdlRXh0ZW50KE1hdGgucm91bmQobWluRXh0ZW50KzEpLCBNYXRoLnJvdW5kKG1heEV4dGVudCsxKSwgc2Nyb2xsRHVyLCBcImxpbmVhclwiKTtcblx0XHRcdFx0XHRtb3ZlQnJ1c2goJ3JpZ2h0Jyk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdHZhciB6b29tSXRlbXMgPSBzY3JvbGxJdGVtcy5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInpvb21JdGVtc1wiKVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgKHctbVsxXS0xMCkgKyBcIiwzMClcIilcblx0XHRcdFx0XHRcdFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIC4wMSlcblx0XHRcdFx0XHRcdFx0XHQub24oXCJtb3VzZW92ZXJcIiwgem9vbU1vdXNlT3Zlcilcblx0XHRcdFx0XHRcdFx0XHQub24oXCJtb3VzZW91dFwiLCB6b29tTW91c2VPdXQpO1xuXHRcdFx0Ly8gc2Nyb2xsSXRlbXMuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0em9vbUl0ZW1zLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInpvb21JblwiKVxuXHRcdFx0XHQuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcIkZvbnRBd2Vzb21lXCIpXG5cdFx0XHRcdC50ZXh0KFwiXFx1ZjE5NlwiKSAgLy8gaHR0cDovL2ZvbnRhd2Vzb21lLmlvL2ljb24vcGx1cy1zcXVhcmUtby9cblx0XHRcdFx0Ly8gLmF0dHIoXCJ4XCIsIDEwKVxuXHRcdFx0XHQvLyAuYXR0cihcInlcIiwgbWFpbkhlaWdodCAvIDIpXG5cdFx0XHRcdC8vIC5hdHRyKFwieFwiLCB3LW1bMV0tMTApXG5cdFx0XHRcdC8vIC5hdHRyKFwieVwiLCAzMClcblx0XHRcdFx0Ly8gLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMS41ZW1cIilcblx0XHRcdFx0Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Ly8gY2hhbmdlRXh0ZW50KE1hdGgucm91bmQobWluRXh0ZW50KzEpLCBNYXRoLnJvdW5kKG1heEV4dGVudC0xKSwgc2Nyb2xsRHVyLCBcImxpbmVhclwiKTtcblx0XHRcdFx0XHRtb3ZlQnJ1c2goJ3pvb21JbicpXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR6b29tSXRlbXMuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwiem9vbU91dFwiKVxuXHRcdFx0XHQuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcIkZvbnRBd2Vzb21lXCIpXG5cdFx0XHRcdC50ZXh0KFwiXFx1ZjE0N1wiKSAgLy8gaHR0cDovL2ZvbnRhd2Vzb21lLmlvL2ljb24vbWludXMtc3F1YXJlLW8vXG5cdFx0XHRcdC8vIC5hdHRyKFwieVwiLCBtYWluSGVpZ2h0IC8gMilcblx0XHRcdFx0Ly8gLmF0dHIoXCJ4XCIsIHctbVsxXS0xMClcblx0XHRcdFx0Ly8gLmF0dHIoXCJ5XCIsIDUwKVxuXHRcdFx0XHQuYXR0cihcInlcIiwgMjApXG5cdFx0XHRcdC8vIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjEuNWVtXCIpXG5cdFx0XHRcdC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdC8vIGNoYW5nZUV4dGVudChNYXRoLnJvdW5kKG1pbkV4dGVudC0xKSwgTWF0aC5yb3VuZChtYXhFeHRlbnQrMSksIHNjcm9sbER1ciwgXCJsaW5lYXJcIik7XG5cdFx0XHRcdFx0bW92ZUJydXNoKCd6b29tT3V0Jyk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdGZ1bmN0aW9uIHpvb21Nb3VzZU92ZXIoKSB7XG5cdFx0XHRcdC8vICQoICcuem9vbUluLCAuem9vbU91dCcgKS5mYWRlVG8oNDAwLCAxKTtcblx0XHRcdFx0JCggJy56b29tSXRlbXMnICkuc3RvcCgpLmZhZGVUbyg0MDAsIDEpO1xuXHRcdFx0fVxuXHRcdFx0ZnVuY3Rpb24gem9vbU1vdXNlT3V0KCkge1xuXHRcdFx0XHQvLyAkKCAnLnpvb21JbiwgLnpvb21PdXQnICkuZmFkZVRvKDQwMCwgLjAxKTtcblx0XHRcdFx0JCggJy56b29tSXRlbXMnICkuc3RvcCgpLmZhZGVUbyg0MDAsIC4wMSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEljb24gdG8gY2xlYXIgdGhlIGJydXNoLiBGaW5pc2ggaW5pdGlhbGl6aW5nIGl0IGluIGRpc3BsYXkoKVxuXHRcdFx0Ly8gdmFyIGNsZWFyQnJ1c2hJY29uID0gZDMuc2VsZWN0KFwiLmJydXNoXCIpLmFwcGVuZChcInRleHRcIilcblx0XHRcdHZhciBjbGVhckJydXNoSWNvbiA9IG1pbmkuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwiY2xlYXJCcnVzaEljb25cIilcblx0XHRcdFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0XHQuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxZW1cIilcblx0XHRcdFx0LmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuXHRcdFx0XHQuYXR0cihcInRpdGxlXCIsIFwiQ2xlYXIgdGhlIHRpbWVsaW5lIGluIG9yZGVyIHRvIGRyYXcgYSBuZXcgcmVnaW9uXCIpXG5cdFx0XHRcdC50ZXh0KFwiXFx1ZjAwZFwiKTtcblxuXHRcdFx0Y2hhcnQub24oXCJ3aGVlbC56b29tXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmIChkMy5ldmVudC53aGVlbERlbHRhWT4wKSB7XG5cdFx0XHRcdFx0XHRtb3ZlQnJ1c2goJ3pvb21JbicpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZDMuZXZlbnQud2hlZWxEZWx0YVk8MCkge1xuXHRcdFx0XHRcdFx0bW92ZUJydXNoKCd6b29tT3V0Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChkMy5ldmVudC53aGVlbERlbHRhWD4wKSB7XG5cdFx0XHRcdFx0XHRtb3ZlQnJ1c2goJ2xlZnQnKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGQzLmV2ZW50LndoZWVsRGVsdGFYPDApIHtcblx0XHRcdFx0XHRcdG1vdmVCcnVzaCgncmlnaHQnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHQvLyBpbml0aWFsaXplIGJydXNoXG5cdFx0XHR2YXIgbWlkcG9pbnRZZWFyID0gKCB0aW1lRW5kICsgdGltZUJlZ2luICkgLyAyLFxuXHRcdFx0XHRicnVzaEluaXQgPSBbbWlkcG9pbnRZZWFyLCBtaWRwb2ludFllYXJdO1xuXHRcdFxuXHRcdFx0Ly8gYnJ1c2guZXh0ZW50KGJydXNoSW5pdCk7XG5cdFx0XHRtaW5pLnNlbGVjdChcIi5icnVzaFwiKS5jYWxsKGJydXNoLmV4dGVudChicnVzaEluaXQpKTtcblxuXHRcdFx0ZGlzcGxheSgpO1xuXHRcdFx0XG5cdFx0XHQkKCBkb2N1bWVudCApLnRyaWdnZXIoIFwidGltZWxpbmVWaXM6aW5pdENvbXBsZXRlXCIgKTtcblxuXG5cdFx0XHQvLyAvLyBJJ20gbm90IHN1cmUgdGhlcmUncyBhIHdheSB0byB1c2UgZDMgdHJhbnNpdGlvbnMgdG8gY29udHJvbCB0aGUgYnJ1c2gsIGJ1dCBoZXJlJ3MgYSBoYWNreSB3YXkgb2YgZG9pbmcgaXQgbWFudWFsbHkuXG5cdFx0XHQvLyB2YXIgZGx5ID0gMzA7XG5cdFx0XHQvLyBmdW5jdGlvbiBicnVzaFRyYW5zaXRpb24oZGx5KSB7XG5cdFx0XHQvLyBcdGN1cnJFeHRlbnQgPSBbYnJ1c2guZXh0ZW50KClbMF0sIGJydXNoLmV4dGVudCgpWzFdXTtcblx0XHRcdC8vIFx0YnJ1c2goZDMuc2VsZWN0KFwiLmJydXNoXCIpLnRyYW5zaXRpb24oKS5kdXJhdGlvbihkbHkpLmNhbGwoZGlzcGxheSkpO1xuXHRcdFx0Ly8gXHQvLyBicnVzaC5ldmVudChkMy5zZWxlY3QoXCIuYnJ1c2hcIikudHJhbnNpdGlvbigpLmRlbGF5KGRseSkuZHVyYXRpb24oMCkpO1xuXHRcdFx0Ly8gfVxuXHRcdFx0Ly8gLy8gYnJ1c2guZXh0ZW50KFsxOTcwLDIwMDBdKTtcblx0XHRcdC8vIHZhciBtaW5FeHRlbnQgPSBicnVzaC5leHRlbnQoKVswXSxcblx0XHRcdC8vIFx0bWF4RXh0ZW50ID0gYnJ1c2guZXh0ZW50KClbMV07XG5cdFx0XHQvLyB2YXIgZGVzdGluYXRpb25FeHRlbnQgPSAxOTk4O1xuXHRcdFx0Ly8gdmFyIGkgPSBtYXhFeHRlbnQ7XG5cdFx0XHQvLyB2YXIgcmVmcmVzaEludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdC8vIFx0ICAgXHRpID0gaSArIDAuMjtcblx0XHRcdC8vIFx0XHRicnVzaC5leHRlbnQoW21pbkV4dGVudCwgaV0pO1xuXHRcdFx0Ly8gXHRcdGJydXNoVHJhbnNpdGlvbihkbHkpO1xuXHRcdFx0Ly8gXHRcdGlmIChpID49IGRlc3RpbmF0aW9uRXh0ZW50KSB7XG5cdFx0XHQvLyBcdFx0XHRjbGVhckludGVydmFsKHJlZnJlc2hJbnRlcnZhbElkKTtcblx0XHRcdC8vIFx0XHR9XG5cdFx0XHQvLyBcdH0sIGRseSk7XG5cblx0XHRcdC8vIC8vIGF0dGVtcHQgdG8gdXNlIHR3ZWVuIGZ1bmN0aW9uIHRvIGRvIGl0LiBub3QgcmVhbGx5IHdvcmtpbmdcblx0XHRcdC8vIGJydXNoLmV4dGVudChbMTk3MCwgMjAwNV0pO1xuXHRcdFx0Ly8gYnJ1c2goZDMuc2VsZWN0KFwiLmJydXNoXCIpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig1MDAwKVxuXHRcdFx0Ly8gXHRcdC50d2VlbihcInNpZGUtZWZmZWN0c1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKHQsIHR0LCB0dHQpIHsgY29uc29sZS5sb2coYnJ1c2guZXh0ZW50KClbMF0pO1xuXHRcdFx0Ly8gXHRcdFx0YnJ1c2guZXZlbnQoZDMuc2VsZWN0KFwiLmJydXNoXCIpLnRyYW5zaXRpb24oKS5kZWxheSh0KS5kdXJhdGlvbigwKSk7XG5cdFx0XHQvLyBcdFx0fTt9KSk7XG5cdFx0XHQvLyBicnVzaChkMy5zZWxlY3QoXCIuYnJ1c2hcIikudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApKTtcblx0XHRcdC8vIGJydXNoLmV2ZW50KGQzLnNlbGVjdChcIi5icnVzaFwiKS50cmFuc2l0aW9uKCkuZGVsYXkoMTAwMCkuZHVyYXRpb24oMCkpO1xuXG5cblx0XHRcdGZ1bmN0aW9uIGNoYW5nZUV4dGVudCh5ZWFyMSwgeWVhcjIsIGR1cmF0aW9uLCBlYXNlLCBkZWxheSkge1xuXHRcdFx0XHRpZiAoZHVyYXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGR1cmF0aW9uID0gMTAwMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZWFzZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0ZWFzZSA9IFwiY3ViaWMtaW4tb3V0XCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRlbGF5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRkZWxheSA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHllYXIxIDwgdGltZUJlZ2luKSB7XG5cdFx0XHRcdFx0eWVhcjEgPSB0aW1lQmVnaW47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHllYXIyID4gdGltZUVuZCkge1xuXHRcdFx0XHRcdHllYXIyID0gdGltZUVuZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRicnVzaC5ldmVudChtaW5pLnNlbGVjdChcIi5icnVzaFwiKS50cmFuc2l0aW9uKCkuZGVsYXkoZGVsYXkpLmR1cmF0aW9uKGR1cmF0aW9uKS5lYXNlKGVhc2UpLmNhbGwoYnJ1c2guZXh0ZW50KFt5ZWFyMSwgeWVhcjJdKSkpO1xuXG5cdFx0XHR9XG5cdFx0XHQvL1xuXHRcdFx0Ly8gVGhpcyB3b3JrcyEgKGFmdGVyIG1vZGlmeWluZyB0aGUgZGlzcGxheSgpIGZ1bmN0aW9uLiBzZWUgdGhlIG5vdGUgYXQgdGhlIHRvcCBvZiBkaXNwbGF5KCkpXG5cdFx0XHQvLyBicnVzaC5ldmVudChtaW5pLnNlbGVjdChcIi5icnVzaFwiKS50cmFuc2l0aW9uKCkuZGVsYXkoMTAwMCkuZHVyYXRpb24oMTAwMCkuY2FsbChicnVzaC5leHRlbnQoWzE5NzAsIDIwMDBdKSlcblx0XHRcdC8vIFx0XHQuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtjb25zb2xlLmxvZyhcImluaXRpYWxpemVkXCIpO30pKTtcblx0XHRcdC8vIHZhciBpbml0RHVyYXRpb24gPSAxMDAwLFxuXHRcdFx0Ly8gXHRpbml0RGVsYXkgPSAxMDAwO1xuXHRcdFx0Ly8gY2hhbmdlRXh0ZW50KDE5NzAsIDIwMDAsIGluaXREdXJhdGlvbiwgXCJjdWJpYy1pbi1vdXRcIiwgaW5pdERlbGF5KTtcblx0XHRcdC8vIGQzLnRyYW5zaXRpb24oXCJpbml0RGVtb1RyYW5zaXRpb25cIikuZGVsYXkoaW5pdERlbGF5ICsgaW5pdER1cmF0aW9uKVxuXHRcdFx0Ly8gXHQuZWFjaChcImVuZFwiLCBkZW1vRXhwYW5kKTtcblx0XHRcdC8vIGRlbW9Jbml0KCk7XG5cblx0XHRcdC8vIG5vdCB1c2luZyB0aGlzIGN1cnJlbnRseVxuXHRcdFx0ZnVuY3Rpb24gZXhwYW5kQWxsKCkge1xuXHRcdFx0XHRleHBhbmQocGFwZXJJdGVtcyk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgbWF4RUYgPSBkMy5tYXgoZGF0YV90b3RhbCwgZnVuY3Rpb24oZCkge3JldHVybiBkLm5vZGVfcmFuazt9KTtcblxuXHRcdFx0ZnVuY3Rpb24gY2xlYXJCcnVzaCgpIHtcblx0XHRcdFx0dmFyIG1pZCA9IChicnVzaC5leHRlbnQoKVsxXSArIGJydXNoLmV4dGVudCgpWzBdKSAvIDI7XG5cdFx0XHRcdGNoYW5nZUV4dGVudChtaWQsIG1pZCwgMCk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGZ1bmN0aW9uIGRpc3BsYXkoKSB7XG5cdFx0XHRcdC8vIG5vdGU6IGNhbGN1bGF0aW5nIHRoZSBicnVzaCBleHRlbnQgdXNpbmcgYnJ1c2guZXh0ZW50KCkgZG9lc24ndCByZWFsbHkgd29yayBoZXJlICh3aXRoIHRyYW5zaXRpb24gdGlja3MpXG5cdFx0XHRcdC8vIGJlY2F1c2UgaXQgZ29lcyB0aGUgZmluYWwgZXh0ZW50IHZhbHVlcyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSB0cmFuc2l0aW9uLlxuXHRcdFx0XHQvLyBTbyBpbnN0ZWFkLCBnZXQgdGhlIG1lYXN1cmVtZW50cyBvZiB0aGUgYnJ1c2ggZWxlbWVudCBhbmQgY2FsY3VsYXRlIHRoZSBleHRlbnQgdXNpbmcgdGhlIHNjYWxlICh4LmludmVydCgpKVxuXHRcdFx0XHR2YXIgZXh0ZW50U2VsZWN0ID0gbWluaS5zZWxlY3QoXCIuYnJ1c2hcIikuc2VsZWN0KFwiLmV4dGVudFwiKTtcblx0XHRcdFx0dmFyIG1pbkV4dGVudFNjcmVlbiA9ICtleHRlbnRTZWxlY3QuYXR0cihcInhcIik7XG5cdFx0XHRcdHZhciBtYXhFeHRlbnRTY3JlZW4gPSBtaW5FeHRlbnRTY3JlZW4gKyAoK2V4dGVudFNlbGVjdC5hdHRyKFwid2lkdGhcIikpO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyh4LmludmVydChtYXhFeHRlbnRTY3JlZW4pKTtcblx0XHRcdFx0Ly8gdmFyIG1pbkV4dGVudCA9IGJydXNoLmV4dGVudCgpWzBdLFxuXHRcdFx0XHQvLyBcdG1heEV4dGVudCA9IGJydXNoLmV4dGVudCgpWzFdLFxuXHRcdFx0XHRtaW5FeHRlbnQgPSB4LmludmVydChtaW5FeHRlbnRTY3JlZW4pO1xuXHRcdFx0XHRtYXhFeHRlbnQgPSB4LmludmVydChtYXhFeHRlbnRTY3JlZW4pO1xuXG5cblxuXHRcdFx0XHQvLyBoaWRlIGFycm93cyBpZiB5b3UgY2FuJ3QgZ28gYW55IGZ1cnRoZXJcblx0XHRcdFx0aWYgKG1pbkV4dGVudCA8PSB0aW1lQmVnaW4pIHtcblx0XHRcdFx0XHRkMy5zZWxlY3QoXCIubGVmdEFycm93XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZDMuc2VsZWN0KFwiLmxlZnRBcnJvd1wiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG1heEV4dGVudCA+PSB0aW1lRW5kKSB7XG5cdFx0XHRcdFx0ZDMuc2VsZWN0KFwiLnJpZ2h0QXJyb3dcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkMy5zZWxlY3QoXCIucmlnaHRBcnJvd1wiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gaGlkZSB0aGUgem9vbUluIGJ1dHRvbiBpZiB3ZSdyZSB6b29tZWQgaW4gdG9vIGZhclxuXHRcdFx0XHRpZiAobWF4RXh0ZW50IC0gbWluRXh0ZW50IDw9IDIpIHtcblx0XHRcdFx0XHQvLyBkMy5zZWxlY3QoXCIuem9vbUluXCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdFx0ZDMuc2VsZWN0KFwiLnpvb21JblwiKS5jbGFzc2VkKFwiaGlkZGVuXCIsIHRydWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIGQzLnNlbGVjdChcIi56b29tSW5cIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwiXCIpO1xuXHRcdFx0XHRcdGQzLnNlbGVjdChcIi56b29tSW5cIikuY2xhc3NlZChcImhpZGRlblwiLCBmYWxzZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYnJ1c2guZW1wdHkoKSkge1xuXHRcdFx0XHRcdGNsZWFyQnJ1c2hJY29uLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdFx0ZDMuc2VsZWN0KFwiLmxlZnRBcnJvd1wiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdFx0XHRcdGQzLnNlbGVjdChcIi5yaWdodEFycm93XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2xlYXJCcnVzaEljb24uc3R5bGUoXCJkaXNwbGF5XCIsIFwiXCIpXG5cdFx0XHRcdFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIDApXG5cdFx0XHRcdFx0XHQvLyAuc3R5bGUoXCJ6LWluZGV4XCIsIC05OSlcblx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGNvbnN0cnVjdFRyYW5zbGF0ZShtYXhFeHRlbnRTY3JlZW4tMiwgMTUpKVxuXHRcdFx0XHRcdFx0LnRyYW5zaXRpb24oKS5kdXJhdGlvbigzMDApXG5cdFx0XHRcdFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIC40KTtcblx0XHRcdFx0XHRjbGVhckJydXNoSWNvbi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0Y2xlYXJCcnVzaCgpO1xuXHRcdFx0XHRcdFx0Y29udHJhY3QoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cblxuXHRcdFx0XHQvLyBIaWRlIG1haW4gaXRlbXMgaWYgdGhlIGJydXNoIGlzIGVtcHR5XG5cdFx0XHRcdGlmIChicnVzaC5lbXB0eSgpKSB7XG5cdFx0XHRcdFx0Ly8geWVhckl0ZW1zLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdFx0Ly8gY2hhbmdlRXh0ZW50KHRpbWVCZWdpbiwgdGltZUVuZCwgMCk7XG5cdFx0XHRcdFx0Ly9cblx0XHRcdFx0XHQvLyBzaG93IGFsbCBtYWluIGl0ZW1zLCBidXQga2VlcCB0aGUgYnJ1c2ggaGlkZGVuXG5cdFx0XHRcdFx0dXBkYXRlTWFpbih0aW1lQmVnaW4sdGltZUVuZCk7XG5cdFx0XHRcdFx0Ly8gdGhpcyB3aWxsIHJlbW92ZSB0aGUgZXh0ZW50IGxpbmVzOlxuXHRcdFx0XHRcdHVwZGF0ZUV4dGVudExpbmVzKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gZDMuc2VsZWN0KFwiLmJydXNoXCIpLmF0dHIoXCJkaXNwbGF5XCIsIFwiXCIpO1xuXHRcdFx0XHRcdHVwZGF0ZU1haW4obWluRXh0ZW50LCBtYXhFeHRlbnQpO1xuXHRcdFx0XHRcdHVwZGF0ZUV4dGVudExpbmVzKG1pbkV4dGVudFNjcmVlbiwgbWF4RXh0ZW50U2NyZWVuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiB1cGRhdGVNYWluKG1pbkV4dGVudCwgbWF4RXh0ZW50KSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRzd2l0Y2ggKG1hcmtUeXBlKSB7XG5cdFx0XHRcdFx0Y2FzZSAnY2lyY2xlJzpcblx0XHRcdFx0XHRcdHZhciB2aXNJdGVtcyA9IHllYXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXIgPCBtYXhFeHRlbnQgJiYgZC55ZWFyID4gbWluRXh0ZW50O30pXG5cdFx0XHRcdFx0XHR2YXIgbm90VmlzSXRlbXMgPSB5ZWFySXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyPj0gbWF4RXh0ZW50IHx8IGQueWVhciA8PSBtaW5FeHRlbnQ7fSk7XG5cdFx0XHRcdFx0XHR2aXNJdGVtcy5zdHlsZShcImRpc3BsYXlcIiwgXCJcIik7XG5cdFx0XHRcdFx0XHRub3RWaXNJdGVtcy5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coYnJ1c2guZXh0ZW50KCkpO1xuXG5cdFx0XHRcdFx0XHQvLyBtaW5pLnNlbGVjdChcIi5icnVzaFwiKVxuXHRcdFx0XHRcdFx0Ly8gXHQuY2FsbChicnVzaC5leHRlbnQoW21pbkV4dGVudCwgbWF4RXh0ZW50XSkpO1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cobWF4RXh0ZW50LW1pbkV4dGVudCk7XG5cblx0XHRcdFx0XHRcdHgxLmRvbWFpbihbbWluRXh0ZW50LCBtYXhFeHRlbnRdKTtcblxuXHRcdFx0XHRcdFx0Ly8gdXBkYXRlIHN0eWxlcyBvZiBtaW5pIGl0ZW1zIHRoYXQgYXJlIHZpc2libGUgaW4gdGhlIG1haW4gZGlzcGxheS5cblx0XHRcdFx0XHRcdC8vIHJlc2V0IGFsbCB0byBub3JtYWwsIHRoZW4gc3R5bGUganVzdCB0aGUgdmlzaWJsZSBvbmVzXG5cdFx0XHRcdFx0XHQvLyBtaW5pSXRlbXMuc3R5bGUoc3R5bGVzQmFzZSk7XG5cdFx0XHRcdFx0XHRtaW5pSXRlbXMuc3R5bGUoc3R5bGVzVmlzaWJsZSk7XG5cdFx0XHRcdFx0XHRtaW5pSXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cobWluRXh0ZW50KTtcblx0XHRcdFx0XHRcdFx0dmFyIG1hdGNoID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdHZpc0l0ZW1zLmZvckVhY2goZnVuY3Rpb24oZGQpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoZC5pZD09ZGQuZmlyc3RUaXRsZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWF0Y2ggPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdFx0XHRcdFx0fSkuc3R5bGUoc3R5bGVzVmlzaWJsZSk7XG5cblx0XHRcdFx0XHRcdC8vdXBkYXRlIG1haW4gaXRlbSBtYXJrc1xuXHRcdFx0XHRcdFx0dmlzSXRlbXMuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdGQueCA9IHgxKGQueWVhcik7XG5cdFx0XHRcdFx0XHRcdGQueSA9IHkxKGQubGFuZSkgKyBtYWluTWluUmFkO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdHllYXJNYXJrcy5hdHRyKFwiclwiLCBmdW5jdGlvbihkKSB7cmV0dXJuIGQucmFkaXVzO30pO1xuXG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgJ2ljb24nOlxuXHRcdFx0XHRcdFx0dmFyIHZpc0l0ZW1zID0geWVhckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhciA8IG1heEV4dGVudCAmJiBkLnllYXIgPiBtaW5FeHRlbnQ7fSlcblx0XHRcdFx0XHRcdHZhciBub3RWaXNJdGVtcyA9IHllYXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXI+PSBtYXhFeHRlbnQgfHwgZC55ZWFyIDw9IG1pbkV4dGVudDt9KTtcblx0XHRcdFx0XHRcdHZpc0l0ZW1zLnN0eWxlKFwiZGlzcGxheVwiLCBcIlwiKTtcblx0XHRcdFx0XHRcdG5vdFZpc0l0ZW1zLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhicnVzaC5leHRlbnQoKSk7XG5cblx0XHRcdFx0XHRcdC8vIG1pbmkuc2VsZWN0KFwiLmJydXNoXCIpXG5cdFx0XHRcdFx0XHQvLyBcdC5jYWxsKGJydXNoLmV4dGVudChbbWluRXh0ZW50LCBtYXhFeHRlbnRdKSk7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhtYXhFeHRlbnQtbWluRXh0ZW50KTtcblx0XHRcdFx0XHRcdC8vIHVwZGF0ZUV4dGVudExpbmVzKG1pbkV4dGVudFNjcmVlbiwgbWF4RXh0ZW50U2NyZWVuKTtcblxuXHRcdFx0XHRcdFx0eDEuZG9tYWluKFttaW5FeHRlbnQsIG1heEV4dGVudF0pO1xuXG5cdFx0XHRcdFx0XHQvLyB1cGRhdGUgc3R5bGVzIG9mIG1pbmkgaXRlbXMgdGhhdCBhcmUgdmlzaWJsZSBpbiB0aGUgbWFpbiBkaXNwbGF5LlxuXHRcdFx0XHRcdFx0Ly8gcmVzZXQgYWxsIHRvIG5vcm1hbCwgdGhlbiBzdHlsZSBqdXN0IHRoZSB2aXNpYmxlIG9uZXNcblx0XHRcdFx0XHRcdG1pbmlJdGVtcy5zdHlsZShzdHlsZXNCYXNlKTtcblx0XHRcdFx0XHRcdG1pbmlJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgbWF0Y2ggPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0dmlzSXRlbXMuZm9yRWFjaChmdW5jdGlvbihkZCkge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChkLmlkPT1kZC5maXJzdFRpdGxlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtYXRjaCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0XHRcdFx0XHR9KS5zdHlsZShzdHlsZXNWaXNpYmxlKTtcblxuXHRcdFx0XHRcdFx0Ly91cGRhdGUgbWFpbiBpdGVtIG1hcmtzXG5cdFx0XHRcdFx0XHR2aXNJdGVtcy5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0Ly8gZC54ID0geDEoZC55ZWFyKSAtIDEwO1xuXHRcdFx0XHRcdFx0XHRkLnggPSB4MShkLnllYXIpO1xuXHRcdFx0XHRcdFx0XHRkLnkgPSB5MShkLmxhbmUpICsgMjA7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0cGFwZXJNYXJrcy5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQuaWR4LzIgKyBcIixcIiArIGQuaWR4KjMgKyBcIilcIjtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIHJldHVybiBcInRyYW5zbGF0ZShcIiArIFwiMFwiICsgXCIsXCIgKyBkLmlkeCozICsgXCIpXCI7XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0LnN0eWxlKFwiZmlsbFwiLCBcImJsYWNrXCIpXG5cdFx0XHRcdFx0XHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcblx0XHRcdFx0XHRcdFx0LnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMS41ZW1cIik7XG5cdFx0XHRcdFx0XHRcdC8vIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBmdW5jdGlvbihkKSB7cmV0dXJuIChkLnJhZGl1cy8xMCkgKyBcImVtXCI7fSk7XG5cblx0XHRcdFx0XHRcdHBhcGVySXRlbXMuZWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBpdGVtID0gZDMuc2VsZWN0KHRoaXMpO1xuXHRcdFx0XHRcdFx0XHR2YXIgbSA9IGl0ZW0uc2VsZWN0KFwiLnBhcGVyTWFya1wiKTtcblx0XHRcdFx0XHRcdFx0dmFyIGJib3ggPSBtLm5vZGUoKS5nZXRCQm94KCk7XG5cdFx0XHRcdFx0XHRcdGl0ZW0uc2VsZWN0KFwicmVjdFwiKVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKFwieFwiLCBiYm94LngpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoXCJ5XCIsIGJib3gueSlcblx0XHRcdFx0XHRcdFx0XHQuYXR0cihcIndpZHRoXCIsIGJib3gud2lkdGgpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoXCJoZWlnaHRcIiwgYmJveC5oZWlnaHQpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgbS5hdHRyKFwidHJhbnNmb3JtXCIpKVxuXHRcdFx0XHRcdFx0XHRcdC5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcblx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cobS5hdHRyKFwidHJhbnNmb3JtXCIpKTtcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXG5cblx0XHRcdFx0Ly91cGRhdGUgdGhlIGl0ZW0gbGFiZWxzXG5cdFx0XHRcdC8vIHZhciByb3RhdGUgPSAtMjA7XG5cdFx0XHRcdGZ1bmN0aW9uIF9yb3RhdGUocm90YXRpb24pIHtcblx0XHRcdFx0XHRsYWJlbHMuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IFxuXHRcdFx0XHRcdFx0cmV0dXJuIFwicm90YXRlKFwiICsgcm90YXRpb24gKyBcIixcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7IFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGNvbnN0cmFpbnQgcmVsYXhhdGlvblxuXHRcdFx0XHQvLyBodHRwOi8vYmwub2Nrcy5vcmcvc3ludGFnbWF0aWMvNDA1MzA5NlxuXHRcdFx0XHR2YXIgYWxwaGEgPSAxO1xuXHRcdFx0XHR2YXIgc3BhY2luZyA9IDE1O1xuXHRcdFx0XHRmdW5jdGlvbiByZWxheChsYWJlbHMpIHtcblx0XHRcdFx0XHQvLyBNb3ZlIHRleHQgaWYgb3ZlcmxhcHBpbmcgKHJlY3Vyc2l2ZWx5KVxuXHRcdFx0XHRcdHZhciBhZ2FpbiA9IGZhbHNlO1xuXHRcdFx0XHRcdGxhYmVscy5lYWNoKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwieFwiKSk7XG5cdFx0XHRcdFx0XHR2YXIgYSA9IHRoaXM7XG5cdFx0XHRcdFx0XHR2YXIgZGEgPSBkMy5zZWxlY3QoYSk7XG5cdFx0XHRcdFx0XHR2YXIgYXggPSBkYS5hdHRyKFwieFwiKTtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGF4KTtcblx0XHRcdFx0XHRcdGxhYmVscy5lYWNoKGZ1bmN0aW9uKGRkKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBiID0gdGhpcztcblx0XHRcdFx0XHRcdFx0Ly8gaWYgKGEgPT0gYikge1xuXHRcdFx0XHRcdFx0XHQvLyBcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRcdFx0XHR2YXIgZGIgPSBkMy5zZWxlY3QoYik7XG5cdFx0XHRcdFx0XHRcdHZhciBieCA9IGRiLmF0dHIoXCJ4XCIpO1xuXHRcdFx0XHRcdFx0XHR2YXIgZGVsdGFYID0gYXggLSBieDtcblx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGVsdGFYKTtcblx0XHRcdFx0XHRcdFx0Ly8gaWYgKE1hdGguYWJzKGRlbHRhWCkgPiBzcGFjaW5nKSB7XG5cdFx0XHRcdFx0XHRcdC8vIFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdFx0XHRcdGlmICggKGEgIT0gYikgJiYgTWF0aC5hYnMoZGVsdGFYKSA8IHNwYWNpbmcpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkZWx0YVgpO1xuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbGxpc2lvbiBkZXRlY3RlZFxuXHRcdFx0XHRcdFx0XHRcdGFnYWluID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgc2lnbiA9IGRlbHRhWCA+IDAgPyAxIDogLTE7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coYSk7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGIuYXR0cihcInhcIikpO1xuXHRcdFx0XHRcdFx0XHRcdGQueCA9ICtheCArIChzaWduKmFscGhhKTtcblx0XHRcdFx0XHRcdFx0XHRkZC54ID0gK2J4IC0gKHNpZ24qYWxwaGEpO1xuXHRcdFx0XHRcdFx0XHRcdGRhLmF0dHIoXCJ4XCIsIGQueCk7XG5cdFx0XHRcdFx0XHRcdFx0ZGIuYXR0cihcInhcIiwgZGQueCk7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gZDMuc2VsZWN0KHRoaXMpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoNTAwLCAwKVwiKTtcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkYi5hdHRyKFwieFwiKSk7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gZC54ICs9IHNpZ24qYWxwaGE7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gYS54ICs9IDE7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGlmIChhZ2Fpbikge1xuXHRcdFx0XHRcdFx0Ly8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdC8vIFx0cmVsYXgobGFiZWxzKTtcblx0XHRcdFx0XHRcdC8vIH0sIDIpO1xuXHRcdFx0XHRcdFx0cmVsYXgobGFiZWxzKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0X3JvdGF0ZSgtMjApO1xuXHRcdFx0XHRcdFx0Ly9cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBsYWJlbHMgPSBpdGVtUmVjdHMuc2VsZWN0QWxsKFwiLnllYXJJdGVtTGFiZWxcIilcblx0XHRcdFx0Ly8gXHQuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkge2QueCA9IHgxKE1hdGgubWF4KGQua2V5LCBtaW5FeHRlbnQpKTsgcmV0dXJuIGQueDt9KVxuXHRcdFx0XHQvLyBcdC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7ZC55ID0gZC5jeTsgcmV0dXJuIGQueTt9KVxuXHRcdFx0XHQvLyBcdC5kYXRhKHZpc0l0ZW1zKTtcblx0XHRcdFx0Ly8gXHQvLyAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkge3JldHVybiB4MShNYXRoLm1heChkLnN0YXJ0LCBtaW5FeHRlbnQpICsgMik7fSk7XG5cdFx0XHRcdC8vIFx0Ly8gLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gXCJyb3RhdGUoXCIgKyByb3RhdGUgKyBcIixcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7IH0pO1xuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBsYWJlbHMuZW50ZXIoKS5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdC8vIFx0LnRleHQoZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXIgKyBcIjogXCIgKyBkLnZhbHVlcy5sZW5ndGggKyBcIiBwYXBlcnNcIjt9KVxuXHRcdFx0XHQvLyBcdC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7ZC54ID0geDEoTWF0aC5tYXgoZC5rZXksIG1pbkV4dGVudCkpOyByZXR1cm4gZC54O30pXG5cdFx0XHRcdC8vIFx0Ly8gLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHtkLnkgPSB5MShkLmxhbmUgKyAuNSk7IHJldHVybiBkLnk7fSlcblx0XHRcdFx0Ly8gXHQvLyAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkge2QueSA9IHkxKGQubGFuZSkrcmFkOyByZXR1cm4gZC55O30pXG5cdFx0XHRcdC8vIFx0LmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHtkLnkgPSBkLmN5OyByZXR1cm4gZC55O30pXG5cdFx0XHRcdC8vIFx0LmF0dHIoXCJjbGFzc1wiLCBcInllYXJJdGVtTGFiZWxcIilcblx0XHRcdFx0Ly8gXHQuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG5cdFx0XHRcdC8vIFx0Ly8gLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gXCJyb3RhdGUoXCIgKyByb3RhdGUgKyBcIixcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7IH0pXG5cdFx0XHRcdC8vIFx0Lm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdC8vIFx0XHRcdGNvbnNvbGUubG9nKGQueCk7XG5cdFx0XHRcdC8vIFx0XHR9KTtcblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly8gbGFiZWxzLmV4aXQoKS5yZW1vdmUoKTtcblxuXHRcdFx0XHQvL3VwZGF0ZSBheGlzXG5cdFx0XHRcdHhBeGlzTWFpbk9iai5jYWxsKHhBeGlzTWFpbik7XG5cblx0XHRcdFx0Ly8gLy8gb25seSB1c2Ugb25lIG9mIHRoZSBmb2xsb3dpbmcgKG9yIG5vbmUpXG5cdFx0XHRcdC8vIF9yb3RhdGUoLTIwKTtcblx0XHRcdFx0Ly8gcmVsYXgobGFiZWxzKTtcblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJCgnLm1haW5DbGlwUGF0aCcpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJCgnLmNoYXJ0JylbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xuXHRcdFx0XHRsYWJlbHNDb2xsaXNpb25EZXRlY3QoKTtcblxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR2YXIgYWZ0ZXJUcmFuc2l0aW9uWCA9IGZ1bmN0aW9uKGQsIGkpIHtcblx0XHRcdFx0Ly8gcmV0dXJuIHgxKCtkLnllYXIpICsgKChpKmkpKjMpO1xuXHRcdFx0XHRyZXR1cm4gKGkqaSkqMztcblx0XHRcdH07XG5cdFx0XHR2YXIgYWZ0ZXJUcmFuc2l0aW9uWSA9IGZ1bmN0aW9uKGQsIGkpIHtcblx0XHRcdFx0Ly8gcmV0dXJuIHkxKGQubGFuZSkgKyAyLjIqcmFkKmkrNSpyYWQ7XG5cdFx0XHRcdHJldHVybiAyLjEqbWFpbk1pblJhZCppKzMqbWFpbk1pblJhZDtcblx0XHRcdH07XG5cdFx0XHQvLyBmdW5jdGlvbiBleHBhbmQoeWVhckRhdGEpIHtcblx0XHRcdGZ1bmN0aW9uIGV4cGFuZChzZWwsIHllYXJJdGVtKSB7XG5cdFx0XHRcdHZhciB0aGlzWWVhciA9IHNlbC5hdHRyKFwiZGF0YS15ZWFyXCIpO1xuXHRcdFx0XHR2YXIgdGhpc1llYXJJdGVtID0geWVhckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhcj09dGhpc1llYXJ9KTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpc1llYXJJdGVtKTtcblx0XHRcdFx0Ly8gY29udHJhY3QoKTtcblx0XHRcdFx0dmFyIGR1ciA9IDUwMDtcblx0XHRcdFx0Ly8gdmFyIHNlbCA9IHBhcGVySXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyPT09eWVhckRhdGEueWVhcn0pO1xuXHRcdFx0XHR2YXIgdHJhbnNpdGlvblN0YXJ0U3R5bGUgPSB7J3BvaW50ZXItZXZlbnRzJzogJ25vbmUnLCAnY3Vyc29yJzogJ2RlZmF1bHQnfSxcblx0XHRcdFx0XHR0cmFuc2l0aW9uRW5kU3R5bGUgPSB7J3BvaW50ZXItZXZlbnRzJzogJ2F1dG8nLCAnY3Vyc29yJzogJ3BvaW50ZXInfTtcblx0XHRcdFx0Ly8gc2VsLnN0eWxlKFwicG9pbnRlci1ldmVudHNcIiwgXCJub25lXCIpXG5cdFx0XHRcdHZhciBsaW5lID0gZDMuc3ZnLmxpbmUoKS54KGZ1bmN0aW9uKGQpIHtyZXR1cm4gZFswXX0pLnkoZnVuY3Rpb24oZCkge3JldHVybiBkWzFdfSk7XG5cdFx0XHRcdC8vIGxpbmVkYXRhIHdpbGwgYmUgYW4gYXJyYXkgb2YgW3gsIHldIHZhbHVlcyB0aGF0IHN0YXJ0IGF0IHRoZSB5ZWFyIGNpcmNsZSBhbmQgdHJhY2sgdGhlIHBhcGVyIGNpcmNsZXNcblx0XHRcdFx0dmFyIGxpbmVkYXRhID0gW107XG5cdFx0XHRcdGxpbmVkYXRhLnB1c2goWzAsMF0pO1xuXHRcdFx0XHRzZWwuc3R5bGUodHJhbnNpdGlvblN0YXJ0U3R5bGUpXG5cdFx0XHRcdFx0LnRyYW5zaXRpb24oKS5kdXJhdGlvbihkdXIpXG5cdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCwgaSkge1xuXHRcdFx0XHRcdFx0bGluZWRhdGEucHVzaChbYWZ0ZXJUcmFuc2l0aW9uWChkLCBpKSwgYWZ0ZXJUcmFuc2l0aW9uWShkLCBpKV0pO1xuXHRcdFx0XHRcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgYWZ0ZXJUcmFuc2l0aW9uWChkLCBpKSArIFwiLFwiICsgYWZ0ZXJUcmFuc2l0aW9uWShkLCBpKSArIFwiKVwiO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmVhY2goXCJzdGFydFwiLCBmdW5jdGlvbigpIHtkMy5zZWxlY3QodGhpcykuY2xhc3NlZChcImV4cGFuZGVkXCIsIHRydWUpfSlcblx0XHRcdFx0XHQvLyAuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtkMy5zZWxlY3QodGhpcykuc3R5bGUoXCJwb2ludGVyLWV2ZW50c1wiLCBcImF1dG9cIik7fSk7XG5cdFx0XHRcdFx0LmVhY2goXCJlbmRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRkMy5zZWxlY3QodGhpcykuc3R5bGUodHJhbnNpdGlvbkVuZFN0eWxlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQvLyAuc3R5bGUoXCJwb2ludGVyLWV2ZW50c1wiLCBcImF1dG9cIik7XG5cdFx0XHRcdHNlbC5zZWxlY3RBbGwoXCIucGFwZXJNYXJrXCIpLnRyYW5zaXRpb24oKS5kdXJhdGlvbihkdXIpXG5cdFx0XHRcdFx0XHRcdFx0Ly8gLnN0eWxlKFwiZm9udC1zaXplXCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gKGQucmFkaXVzLzEwKSArIFwiZW1cIjt9KVxuXHRcdFx0XHRcdC5zdHlsZVR3ZWVuKFwiZm9udC1zaXplXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBkMy5pbnRlcnBvbGF0ZShcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIiksXG5cdFx0XHRcdFx0XHRcdFx0KGQucmFkaXVzLzEwKSArIFwiZW1cIik7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuYXR0cihcInJcIiwgZnVuY3Rpb24oZCkge3JldHVybiBkLnJhZGl1czt9KTtcblxuXHRcdFx0XHQvL21ha2UgbGFiZWxzIGFwcGVhclxuXHRcdFx0XHRzZWwuc2VsZWN0QWxsKFwiLnBhcGVyTGFiZWxcIilcblx0XHRcdFx0XHQvLyAuc3R5bGUoXCJwb2ludGVyLWV2ZW50c1wiLCBcIm5vbmVcIilcblx0XHRcdFx0XHQuc3R5bGUoXCJkaXNwbGF5XCIsIFwiXCIpXG5cdFx0XHRcdFx0LnN0eWxlKFwib3BhY2l0eVwiLCAwKVxuXHRcdFx0XHRcdC50cmFuc2l0aW9uKClcblx0XHRcdFx0XHQuZGVsYXkoZnVuY3Rpb24oZCkge3JldHVybiBkdXIvMiArIGQuaWR4Kjc1O30pXG5cdFx0XHRcdFx0LmR1cmF0aW9uKGR1cilcblx0XHRcdFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuXHRcdFx0XHQvLyBsYWJlbHNDb2xsaXNpb25EZXRlY3QoKTtcblx0XHRcdFx0ZDMudHJhbnNpdGlvbigpLmR1cmF0aW9uKGR1cikuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0aGlzWWVhckl0ZW0uYXBwZW5kKFwicGF0aFwiKS5kYXR1bShsaW5lZGF0YSkuYXR0cihcImNsYXNzXCIsIFwiam9pbkxpbmVcIikuYXR0cihcImRcIiwgbGluZSk7XG5cdFx0XHRcdFx0ZGlzcGxheSgpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZnVuY3Rpb24gY29udHJhY3QoeWVhckRhdGEpIHtcblx0XHRcdGZ1bmN0aW9uIGNvbnRyYWN0KCkge1xuXHRcdFx0XHRkMy5zZWxlY3RBbGwoXCIuam9pbkxpbmVcIikucmVtb3ZlKCk7XG5cdFx0XHRcdHZhciBkdXIgPSA1MDA7XG5cdFx0XHRcdC8vIHZhciBzZWwgPSBwYXBlckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhcj09PXllYXJEYXRhLnllYXJ9KTtcblx0XHRcdFx0dmFyIHNlbCA9IGQzLnNlbGVjdEFsbChcIi5leHBhbmRlZFwiKTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coc2VsLmVtcHR5KCkpO1xuXHRcdFx0XHRzZWwudHJhbnNpdGlvbigpLmR1cmF0aW9uKGR1cilcblx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLDApXCIpXG5cdFx0XHRcdFx0LmVhY2goXCJlbmRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRkMy5zZWxlY3QodGhpcykuY2xhc3NlZChcImV4cGFuZGVkXCIsIGZhbHNlKVxuXHRcdFx0XHRcdFx0XHQuc3R5bGUoXCJwb2ludGVyLWV2ZW50c1wiLCBcIlwiKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRzZWwuc2VsZWN0QWxsKFwiLnBhcGVyTWFya1wiKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oZHVyKjEuNSlcblx0XHRcdFx0XHQuc3R5bGVUd2VlbihcImZvbnQtc2l6ZVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZDMuaW50ZXJwb2xhdGUoXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1zaXplXCIpLFxuXHRcdFx0XHRcdFx0XHRcdFwiMS41ZW1cIilcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5hdHRyKFwiclwiLCAwKTtcblx0XHRcdFx0c2VsLnNlbGVjdEFsbChcIi5wYXBlckxhYmVsXCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHR9XG5cdFx0XHQvLyBmdW5jdGlvbiBleHBhbmQoeWVhckRhdGEpIHtcblx0XHRcdC8vIFx0Y29uc29sZS5sb2coeWVhckRhdGEpO1xuXHRcdFx0Ly8gXHRpZiAoIXllYXJEYXRhLmV4cGFuZGVkKSB7XG5cdFx0XHQvLyBcdFx0XG5cdFx0XHQvLyBcdFx0Ly8gZDMuc2VsZWN0QWxsKFwiLnllYXJJdGVtTGFiZWxcIikuY2xhc3NlZChcImhpZGRlblwiKTtcblx0XHRcdC8vIFx0XHQkKCAnLnllYXJJdGVtTGFiZWwnICkuaGlkZSgpO1xuXHRcdFx0Ly8gXHRcdHZhciBkdXIgPSA1MDA7XG5cdFx0XHQvLyBcdFx0Ly8gdmFyIHJhZCA9IHllYXJEYXRhLnJhZGl1cztcblx0XHRcdC8vIFx0XHR2YXIgcmFkID0gMTA7XG5cdFx0XHQvLyBcdFx0dmFyIHBhcmVudFkgPSB5ZWFyRGF0YS5jeTtcblx0XHRcdC8vIFx0XHR2YXIgbWFya3MgPSBtYWluQ2xpcFBhdGguc2VsZWN0QWxsKFwiLnBhcGVySXRlbVwiKVxuXHRcdFx0Ly8gXHRcdFx0XHRcdC8vIC5kYXRhKHZpc0l0ZW1zLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLmlkOyB9KVxuXHRcdFx0Ly8gXHRcdFx0XHRcdC5kYXRhKHllYXJEYXRhLnZhbHVlcyk7XG5cdFx0XHQvLyBcdFx0bWFya3MuZW50ZXIoKS5hcHBlbmQoXCJjaXJjbGVcIilcblx0XHRcdC8vIFx0XHRcdFx0Ly8gLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbihkKSB7cmV0dXJuIFwibWFpbkl0ZW0gbWluaUl0ZW1cIiArIGQubGFuZTt9KVxuXHRcdFx0Ly8gXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwicGFwZXJJdGVtXCIpXG5cdFx0XHQvLyBcdFx0XHRcdC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oZCkge2NvbnNvbGUubG9nKGQpO30pLmFwcGVuZCgndGV4dCcpLnRleHQoJ2QnKTtcblx0XHRcdC8vIFx0XHQvLyBtYXJrcy5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApLmF0dHIoXCJjeVwiLCBwYXJlbnRZKS5yZW1vdmUoKTtcblx0XHRcdC8vIFx0XHQvLyBpdGVtUmVjdHMuc2VsZWN0QWxsKCd0ZXh0JykuZGF0YSh5ZWFyRGF0YS52YWx1ZXMpLmVudGVyKCkuYXBwZW5kKCd0ZXh0JykuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkge2NvbnNvbGUubG9nKGQpOyByZXR1cm4gZC5jeDt9KS5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7cmV0dXJuIGQuY3k7fSkudGV4dChmdW5jdGlvbihkKSB7cmV0dXJuIGQudGl0bGU7fSk7XG5cdFx0XHQvLyBcdFx0bWFya3MuZXhpdCgpLnJlbW92ZSgpO1xuXHRcdFx0Ly9cblx0XHRcdC8vIFx0XHR2YXIgbGFiZWxzID0gbWFpbkNsaXBQYXRoLnNlbGVjdEFsbChcIi5wYXBlckl0ZW1MYWJlbFwiKVxuXHRcdFx0Ly8gXHRcdFx0LmRhdGEoeWVhckRhdGEudmFsdWVzKTtcblx0XHRcdC8vIFx0XHRsYWJlbHMuZW50ZXIoKS5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHQvLyBcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwicGFwZXJJdGVtTGFiZWxcIilcblx0XHRcdC8vIFx0XHRcdC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIik7XG5cdFx0XHQvLyBcdFx0bGFiZWxzLmV4aXQoKS5yZW1vdmUoKTtcblx0XHRcdC8vXG5cdFx0XHQvLyBcdFx0bWFya3MuYXR0cihcImN4XCIsIGJlZm9yZVRyYW5zaXRpb25YKVxuXHRcdFx0Ly8gXHRcdFx0XHQuYXR0cigncicsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdC8vIFx0XHRcdFx0XHRcdC8vIGQucmFkaXVzID0gcmFkICsgKDIgKiBlZlN1bVNjYWxlKGQuc3VtX2VpZ2VuZmFjdG9yKSk7XG5cdFx0XHQvLyBcdFx0XHRcdFx0XHRkLnJhZGl1cyA9IHJhZCArICgyICogZWZTY2FsZShkLmVpZ2VuZmFjdG9yX3Njb3JlKSk7XG5cdFx0XHQvLyBcdFx0XHRcdFx0XHRyZXR1cm4gZC5yYWRpdXM7XG5cdFx0XHQvLyBcdFx0XHRcdFx0fSlcblx0XHRcdC8vIFx0XHRcdFx0LmF0dHIoXCJjeVwiLCBiZWZvcmVUcmFuc2l0aW9uWSlcblx0XHRcdC8vIFx0XHRcdFx0LnRyYW5zaXRpb24oKS5kdXJhdGlvbihkdXIpXG5cdFx0XHQvLyBcdFx0XHRcdC5hdHRyKFwiY3hcIiwgYWZ0ZXJUcmFuc2l0aW9uWClcblx0XHRcdC8vIFx0XHRcdFx0LmF0dHIoXCJjeVwiLCBhZnRlclRyYW5zaXRpb25ZKVxuXHRcdFx0Ly8gXHRcdFx0XHQuc3R5bGUoc3R5bGVzVmlzaWJsZSk7XG5cdFx0XHQvLyBcdFx0bGFiZWxzLmF0dHIoXCJ4XCIsIGJlZm9yZVRyYW5zaXRpb25YKVxuXHRcdFx0Ly8gXHRcdFx0LnRleHQoZnVuY3Rpb24oZCkge3JldHVybiBkLnRpdGxlO30pXG5cdFx0XHQvLyBcdFx0XHQuYXR0cihcInlcIiwgYmVmb3JlVHJhbnNpdGlvblkpXG5cdFx0XHQvLyBcdFx0XHQudHJhbnNpdGlvbigpLmR1cmF0aW9uKGR1cilcblx0XHRcdC8vIFx0XHRcdC5hdHRyKFwieFwiLCBhZnRlclRyYW5zaXRpb25YKVxuXHRcdFx0Ly8gXHRcdFx0LmF0dHIoXCJ5XCIsIGFmdGVyVHJhbnNpdGlvblkpO1xuXHRcdFx0Ly8gXHR5ZWFyRGF0YS5leHBhbmRlZCA9IHRydWU7XG5cdFx0XHQvLyBcdH1cblx0XHRcdC8vIH1cblx0XHRcdC8vXG5cdFx0XHQvLyBmdW5jdGlvbiBjb250cmFjdChkKSB7XG5cdFx0XHQvLyBcdHZhciBkdXIgPSA1MDA7XG5cdFx0XHQvLyBcdGlmIChkLmV4cGFuZGVkKSB7XG5cdFx0XHQvLyBcdFx0dmFyIG1hcmtzID0gbWFpbkNsaXBQYXRoLnNlbGVjdEFsbChcIi5wYXBlckl0ZW1cIilcblx0XHRcdC8vIFx0XHRcdC5pbnRlcnJ1cHQoXCJjb250cmFjdFwiKVxuXHRcdFx0Ly8gXHRcdFx0LnRyYW5zaXRpb24oXCJjb250cmFjdFwiKS5kZWxheSgyMDAwKS5kdXJhdGlvbihkdXIpXG5cdFx0XHQvLyBcdFx0XHQuYXR0cihcImN4XCIsIGJlZm9yZVRyYW5zaXRpb25YKVxuXHRcdFx0Ly8gXHRcdFx0LmF0dHIoXCJjeVwiLCAwKVxuXHRcdFx0Ly8gXHRcdFx0LmVhY2goXCJlbmRcIiwgZnVuY3Rpb24oXywgaSkge1xuXHRcdFx0Ly8gXHRcdFx0XHRpZiAoaSA9PT0gMCkgZC5leHBhbmRlZCA9IGZhbHNlO1xuXHRcdFx0Ly8gXHRcdFx0XHR9KVxuXHRcdFx0Ly8gXHRcdFx0LnJlbW92ZSgpO1xuXHRcdFx0Ly8gXHRcdHZhciBsYWJlbHMgPSBtYWluQ2xpcFBhdGguc2VsZWN0QWxsKFwiLnBhcGVySXRlbUxhYmVsXCIpXG5cdFx0XHQvLyBcdFx0XHQuaW50ZXJydXB0KFwiY29udHJhY3RcIilcblx0XHRcdC8vIFx0XHRcdC50cmFuc2l0aW9uKFwiY29udHJhY3RcIikuZGVsYXkoMjAwMCkuZHVyYXRpb24oZHVyKVxuXHRcdFx0Ly8gXHRcdFx0LmF0dHIoXCJ4XCIsIGJlZm9yZVRyYW5zaXRpb25YKVxuXHRcdFx0Ly8gXHRcdFx0LmF0dHIoXCJ5XCIsIDApXG5cdFx0XHQvLyBcdFx0XHQucmVtb3ZlKCk7XG5cdFx0XHQvLyBcdH1cblx0XHRcdC8vIH1cblxuXHRcdFx0ZnVuY3Rpb24gbGFiZWxzQ29sbGlzaW9uRGV0ZWN0KCkge1xuXHRcdFx0XHQvLyBkZXRlY3QgaWYgbGFiZWxzIGdvIG9mZiBzY3JlZW5cblxuXHRcdFx0XHQvLyBmdW5jdGlvbiBjaGVja1NpbmdsZUxhYmVsKGQpIHtcblx0XHRcdFx0Ly8gXHR2YXIgYm91bmRpbmdSZWN0ID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0Ly8gXHRjb25zb2xlLmxvZyhib3VuZGluZ1JlY3Qud2lkdGggKyAkKCB0aGlzICkucG9zaXRpb24oKS5sZWZ0KTtcblx0XHRcdFx0Ly8gXHRpZiAoJCggdGhpcyApLnBvc2l0aW9uKCkubGVmdDwwKSB7XG5cdFx0XHRcdC8vIFx0XHRkMy5zZWxlY3QodGhpcykuc2VsZWN0KFwiLnBhcGVyTGFiZWxcIikuYXR0cihcInRleHQtYW5jaG9yXCIsIFwic3RhcnRcIik7XG5cdFx0XHRcdC8vIFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gXHRcdGQzLnNlbGVjdCh0aGlzKS5zZWxlY3QoXCIucGFwZXJMYWJlbFwiKS5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIik7XG5cdFx0XHRcdC8vIFx0fVxuXHRcdFx0XHQvLyB9XG5cdFx0XHRcdGZ1bmN0aW9uIGNoZWNrU2luZ2xlTGFiZWwoZCkge1xuXHRcdFx0XHRcdGZ1bmN0aW9uIHdyYXBJbkFuY2hvcihzdGFibGVfdXJsLCB0ZXh0KSB7XG5cdFx0XHRcdFx0XHQvLyByZXR1cm4gJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vbGFicy5qc3Rvci5vcmcnICsgc3RhYmxlX3VybCArICdcIj4nICsgdGV4dCArICc8L2E+J1xuXHRcdFx0XHRcdFx0cmV0dXJuICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJyArIHN0YWJsZV91cmwgKyAnXCI+JyArIHRleHQgKyAnPC9hPidcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gdmFyIGJvdW5kaW5nUmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdFx0dmFyIHRoaXNMYWJlbCA9IGQzLnNlbGVjdCh0aGlzKS5zZWxlY3QoXCIucGFwZXJMYWJlbFwiKTtcblx0XHRcdFx0XHQvLyB2YXIgd29yZHMgPSB0aGlzTGFiZWwudGV4dCgpLnNwbGl0KFwiIFwiKTtcblx0XHRcdFx0XHQvLyB0aGlzTGFiZWwudGV4dChkLnRpdGxlKTtcblx0XHRcdFx0XHR0aGlzTGFiZWwuaHRtbCh3cmFwSW5BbmNob3IoZC51cmwsIGQudGl0bGUpKTtcblx0XHRcdFx0XHR2YXIgd29yZHMgPSBkLnRpdGxlLnNwbGl0KFwiIFwiKTtcblx0XHRcdFx0XHR2YXIgZ2l2ZVVwVGhyZXNob2xkID0gMjA7XG5cdFx0XHRcdFx0dmFyIGkgPSAwO1xuXHRcdFx0XHRcdHZhciB2aWV3TGVmdEVkZ2UgPSAkKCAnI3RpbWVsaW5lIHN2ZycgKS5wb3NpdGlvbigpLmxlZnQgKyBtWzNdO1xuXHRcdFx0XHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRcdFx0XHRpKys7XG5cdFx0XHRcdFx0XHRpZiAoaT5naXZlVXBUaHJlc2hvbGQpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR2YXIgbGVmdFBvcyA9ICQoIHRoaXMgKS5wb3NpdGlvbigpLmxlZnQ7XG5cdFx0XHRcdFx0XHQvLyBpZiAobGVmdFBvcyA8IDIwKSB7XG5cdFx0XHRcdFx0XHQvLyBpZiAobGVmdFBvcyA8IG1bM10pIHtcblx0XHRcdFx0XHRcdGlmIChsZWZ0UG9zIDwgdmlld0xlZnRFZGdlKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBudW1Xb3JkcyA9IHdvcmRzLmxlbmd0aDtcblx0XHRcdFx0XHRcdFx0d29yZHMgPSB3b3Jkcy5zbGljZSgwLCBudW1Xb3Jkcy0yKTtcblx0XHRcdFx0XHRcdFx0dmFyIHNob3J0ZW5lZFRpdGxlID0gd29yZHMuam9pbihcIiBcIikrXCIuLi5cIjtcblx0XHRcdFx0XHRcdFx0Ly8gdGhpc0xhYmVsLnRleHQod29yZHMuam9pbihcIiBcIikrXCIuLi5cIik7XG5cdFx0XHRcdFx0XHRcdHRoaXNMYWJlbC5odG1sKHdyYXBJbkFuY2hvcihkLnVybCwgc2hvcnRlbmVkVGl0bGUpKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyB2YXIgbGVmdFBvcyA9ICQoIHRoaXMgKS5wb3NpdGlvbigpLmxlZnQ7XG5cdFx0XHRcdFx0Ly9cblx0XHRcdFx0XHQvLyBpZiAobGVmdFBvczwwKSB7XG5cdFx0XHRcdFx0Ly8gXHRkMy5zZWxlY3QodGhpcykuc2VsZWN0KFwiLnBhcGVyTGFiZWxcIilcblx0XHRcdFx0XHQvLyBcdFx0LnRleHQoZC50aXRsZS5zbGljZSgwLCAxMCkpO1xuXHRcdFx0XHRcdC8vIFx0Y2hlY2tTaW5nbGVMYWJlbChkKTtcblx0XHRcdFx0XHQvLyB9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIFx0Y29uc29sZS5sb2coJ2xlYXZpbmcgcmVjdXJzaXZlIGZ1bmN0aW9uJylcblx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdFx0Ly8gcmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGQzLnNlbGVjdEFsbChcIi5wYXBlckl0ZW0uZXhwYW5kZWRcIilcblx0XHRcdFx0XHQuZWFjaChjaGVja1NpbmdsZUxhYmVsKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0ZnVuY3Rpb24gZGVtb0luaXQoKSB7XG5cdFx0XHRcdGNoYXJ0LmNsYXNzZWQoXCJkZW1vSW5Qcm9ncmVzc1wiLCB0cnVlKTtcblx0XHRcdFx0Y2xlYXJCcnVzaCgpO1xuXHRcdFx0XHRjb250cmFjdCgpO1xuXHRcdFx0XHRkaXNhYmxlSW50ZXJhY3Rpb24oKTtcblx0XHRcdFx0bWluaS5vbihcIm1vdXNlZG93blwiLCBkZW1vUXVpdCk7XG5cdFx0XHRcdGZ1bmN0aW9uIGRlbW9RdWl0KCkge1xuXHRcdFx0XHRcdGNoYXJ0LmNsYXNzZWQoXCJkZW1vSW5Qcm9ncmVzc1wiLCBmYWxzZSk7XG5cdFx0XHRcdFx0Y3Vyc29ySWNvbi50cmFuc2l0aW9uKDApLnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciB0cmFuc2l0aW9uVGltZXMgPSBbXG5cdFx0XHRcdFx0XHQ3NTAsICAvLyAwOiBpbml0aWFsIGRlbGF5IGJlZm9yZSBhbnl0aGluZyBoYXBwZW5zXG5cdFx0XHRcdFx0XHQxMDAwLCAgLy8gMTogdGltZSB0byBtb3ZlIHRoZSBjdXJzb3IgdG8gdGhlIG1pbmkgYXJlYVxuXHRcdFx0XHRcdFx0MjAwMCwgIC8vIDI6IHRpbWUgdG8gZHJhdyB0aGUgaW5pdGlhbCBicnVzaFxuXHRcdFx0XHRcdFx0MjAwLCAgIC8vIDM6IGRlbGF5IGFmdGVyIGJydXNoXG5cdFx0XHRcdFx0XHQyMDAwLCAgLy8gNDogdGltZSB0byBtb3ZlIHRoZSBjdXJzb3IgdG8gYSBtYWluIGl0ZW1cblx0XHRcdFx0XHRcdDMwMDAsICAvLyA1OiBkZWxheSB0byByZW1vdmUgYW5kIGVuZCB0aGUgZGVtb1xuXHRcdFx0XHRcdF07XG5cdFx0XHRcdHZhciBjdXJzb3JJY29uID0gY2hhcnQuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJjdXJzb3JJY29uXCIpXG5cdFx0XHRcdFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0XHRcdC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjFlbVwiKVxuXHRcdFx0XHRcdC50ZXh0KFwiXFx1ZjI0NVwiKVxuXHRcdFx0XHRcdC8vIC5hdHRyKFwieFwiLCAxMDApXG5cdFx0XHRcdFx0Ly8gLmF0dHIoXCJ5XCIsIDMwMCk7XG5cdFx0XHRcdFx0Ly8gLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMTAwLDMwMClcIik7XG5cdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB3ICsgXCIsXCIgKyBtYWluSGVpZ2h0ICsgXCIpXCIpO1xuXHRcdFx0XHQvLyB2YXIgaW5pdER1cmF0aW9uID0gMTAwMCxcblx0XHRcdFx0Ly8gXHRpbml0RGVsYXkgPSAxMDAwO1xuXHRcdFx0XHQvLyBjaGFuZ2VFeHRlbnQoMTk3MCwgMjAwMCwgaW5pdER1cmF0aW9uLCBcImN1YmljLWluLW91dFwiLCBpbml0RGVsYXkpO1xuXHRcdFx0XHQvLyBkMy50cmFuc2l0aW9uKFwiaW5pdERlbW9UcmFuc2l0aW9uXCIpLmRlbGF5KGluaXREZWxheSArIGluaXREdXJhdGlvbilcblx0XHRcdFx0Ly8gXHQuZWFjaChcImVuZFwiLCBkZW1vRXhwYW5kKTtcblx0XHRcdFx0dmFyIGV4dGVudFNlbGVjdCA9IG1pbmkuc2VsZWN0KFwiLmJydXNoXCIpLnNlbGVjdChcIi5leHRlbnRcIik7XG5cdFx0XHRcdC8vIHZhciBpbml0QnJ1c2hSYW5nZSA9IFsxOTcwLCAyMDAwXTtcblx0XHRcdFx0dmFyIHllYXJSYW5nZSA9IHRpbWVFbmQgLSB0aW1lQmVnaW47XG5cdFx0XHRcdGlmICh5ZWFyUmFuZ2UgPCA2KSB7XG5cdFx0XHRcdFx0dmFyIGluaXRCcnVzaFJhbmdlID0gW3RpbWVCZWdpbiwgdGltZUVuZF07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIGluaXRCcnVzaFJhbmdlID0gW3RpbWVCZWdpbiArIE1hdGguZmxvb3IoeWVhclJhbmdlKi4zKSwgdGltZUVuZCAtIE1hdGguZmxvb3IoeWVhclJhbmdlKi4yKV07XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hhbmdlRXh0ZW50KGluaXRCcnVzaFJhbmdlWzBdLCBpbml0QnJ1c2hSYW5nZVswXSwgMCk7XG5cdFx0XHRcdC8vIHZhciBpbml0QnJ1c2hQb3NpdGlvbiA9ICtleHRlbnRTZWxlY3QuYXR0cihcInhcIik7XG5cdFx0XHRcdHZhciBpbml0QnJ1c2hQb3NpdGlvbiA9IHgoYnJ1c2guZXh0ZW50KClbMV0pICsgbVszXTtcblxuXHRcdFx0XHQvLyBzZWxlY3QgYSB5ZWFySXRlbSB0byBleHBhbmQgZm9yIHRoZSBkZW1vXG5cdFx0XHRcdHZhciB2aXNJdGVtcyA9IHllYXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXIgPCBpbml0QnJ1c2hSYW5nZVsxXSAmJiBkLnllYXIgPiBpbml0QnJ1c2hSYW5nZVswXTt9KSxcblx0XHRcdFx0XHRudW1WaXNJdGVtcyA9IHZpc0l0ZW1zLnNpemUoKTtcblx0XHRcdFx0aWYgKG51bVZpc0l0ZW1zID09PSAwKSB7XG5cdFx0XHRcdFx0Ly8gaWYgdGhlcmUgYXJlIG5vIHZpc2libGUgaXRlbXMgaW4gdGhlIHJhbmdlLCBqdXN0IGdpdmUgdXBcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gZWxzZSBpZiAobnVtVmlzSXRlbXMgPT09IDEpIHtcblx0XHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSB2aXNpYmxlIGl0ZW0sIHVzZSBpdFxuXHRcdFx0XHRcdHZhciBzZWxJbmRleCA9IDA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gZWxzZSwgdXNlIGFuIGl0ZW0gYSBsaXR0bGUgdG8gdGhlIHJpZ2h0IG9mIGNlbnRlclxuXHRcdFx0XHRcdHZhciBzZWxJbmRleCA9IE1hdGguY2VpbChudW1WaXNJdGVtcyouNTUpO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHR2YXIgZGVtb1llYXJJdGVtID0gdmlzSXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGQsIGkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGkgPT09IHNlbEluZGV4O1xuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKCFjaGFydC5jbGFzc2VkKFwiZGVtb0luUHJvZ3Jlc3NcIikpIHtcblx0XHRcdFx0XHQvLyBxdWl0XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXG5cdFx0XHRcdGN1cnNvckljb24udHJhbnNpdGlvbigpLmRlbGF5KHRyYW5zaXRpb25UaW1lc1swXSlcblx0XHRcdFx0XHQuZHVyYXRpb24odHJhbnNpdGlvblRpbWVzWzFdKVxuXHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFxuXHRcdFx0XHRcdFx0XHQvLyBjb25zdHJ1Y3RUcmFuc2xhdGUoaW5pdEJydXNoUG9zaXRpb24rMTUsIG1haW5IZWlnaHQrbVswXSsobWluaUhlaWdodC8yKSlcblx0XHRcdFx0XHRcdFx0Y29uc3RydWN0VHJhbnNsYXRlKGluaXRCcnVzaFBvc2l0aW9uLCBtYWluSGVpZ2h0K21bMF0rKG1pbmlIZWlnaHQvMikpXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmIChjaGFydC5jbGFzc2VkKFwiZGVtb0luUHJvZ3Jlc3NcIikpIHtcblx0XHRcdFx0XHRcdFx0ZGVtb0RyYXdCcnVzaCgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZGVtb0VuZCgwKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRmdW5jdGlvbiBkZW1vRHJhd0JydXNoKCkge1xuXHRcdFx0XHRcdGNoYW5nZUV4dGVudChpbml0QnJ1c2hSYW5nZVswXSwgaW5pdEJydXNoUmFuZ2VbMV0sIHRyYW5zaXRpb25UaW1lc1syXSk7XG5cdFx0XHRcdFx0dmFyIG1pbkV4dGVudFNjcmVlbiA9ICtleHRlbnRTZWxlY3QuYXR0cihcInhcIik7XG5cdFx0XHRcdFx0dmFyIG1heEV4dGVudFNjcmVlbiA9IG1pbkV4dGVudFNjcmVlbiArICgrZXh0ZW50U2VsZWN0LmF0dHIoXCJ3aWR0aFwiKSk7XG5cdFx0XHRcdFx0eDEuZG9tYWluKGJydXNoLmV4dGVudCgpKTtcblx0XHRcdFx0XHRjdXJzb3JJY29uLnRyYW5zaXRpb24oKVxuXHRcdFx0XHRcdFx0LmR1cmF0aW9uKHRyYW5zaXRpb25UaW1lc1syXSlcblx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgeFBvcyA9IHgoYnJ1c2guZXh0ZW50KClbMV0pICsgbVszXTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGNvbnN0cnVjdFRyYW5zbGF0ZSh4UG9zLCBtYWluSGVpZ2h0K21bMF0rKG1pbmlIZWlnaHQvMikpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmIChjaGFydC5jbGFzc2VkKFwiZGVtb0luUHJvZ3Jlc3NcIikpIHtcblx0XHRcdFx0XHRcdFx0ZGVtb0V4cGFuZCgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZGVtb0VuZCgwKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0ZnVuY3Rpb24gZGVtb0V4cGFuZCgpIHtcblx0XHRcdFx0XHQvLyB2YXIgZGVtb1RyYW5zaXRpb25UaW1lID0gMjAwMDtcblx0XHRcdFx0XHQvLyB2YXIgZGVtb0RlbGF5VG9SZW1vdmUgPSAyMDAwO1xuXHRcdFx0XHRcdC8vIHZhciBjdXJzb3JJY29uID0gbWFpbkNsaXBQYXRoLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0XHQvLyBcdC5hdHRyKFwiY2xhc3NcIiwgXCJjdXJzb3JJY29uXCIpXG5cdFx0XHRcdFx0Ly8gXHQuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcIkZvbnRBd2Vzb21lXCIpXG5cdFx0XHRcdFx0Ly8gXHQuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxZW1cIilcblx0XHRcdFx0XHQvLyBcdC50ZXh0KFwiXFx1ZjI0NVwiKVxuXHRcdFx0XHRcdC8vIFx0Ly8gLmF0dHIoXCJ4XCIsIDEwMClcblx0XHRcdFx0XHQvLyBcdC8vIC5hdHRyKFwieVwiLCAzMDApO1xuXHRcdFx0XHRcdC8vIFx0Ly8gLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMTAwLDMwMClcIik7XG5cdFx0XHRcdFx0Ly8gXHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHcgKyBcIixcIiArIG1haW5IZWlnaHQgKyBcIilcIik7XG5cblx0XHRcdFx0XHR2YXIgZGVtb1llYXJNYXJrID0gZGVtb1llYXJJdGVtLnNlbGVjdChcIi55ZWFyTWFya1wiKTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkZW1vWWVhckl0ZW0pO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRlbW9ZZWFyTWFyayk7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGVtb1llYXJNYXJrLmF0dHIoXCJyXCIpKTtcblx0XHRcdFx0XHR2YXIgdHJhbnNsYXRlU3RyID0gZGVtb1llYXJJdGVtLmF0dHIoXCJ0cmFuc2Zvcm1cIik7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codHJhbnNsYXRlU3RyKTtcblx0XHRcdFx0XHR2YXIgdHJhbnNsYXRlQ29vcmQgPSBkZWNvbnN0cnVjdFRyYW5zbGF0ZSh0cmFuc2xhdGVTdHIpO1xuXHRcdFx0XHRcdHRyYW5zbGF0ZUNvb3JkLnggPSB0cmFuc2xhdGVDb29yZC54ICsgbVszXTtcblx0XHRcdFx0XHR0cmFuc2xhdGVDb29yZC55ID0gdHJhbnNsYXRlQ29vcmQueSArIG1bMF0gKyAoK2RlbW9ZZWFyTWFyay5hdHRyKFwiclwiKSk7XG5cdFx0XHRcdFx0dmFyIHRyYW5zbGF0ZSA9IGNvbnN0cnVjdFRyYW5zbGF0ZSh0cmFuc2xhdGVDb29yZC54LCB0cmFuc2xhdGVDb29yZC55KTtcblx0XHRcdFx0XHQvLyBtb3ZlIHRoZSBjdXJzb3IgdG8gYSB5ZWFyLCB0aGVuIG1hbnVhbGx5IGV4cGFuZCB0aGUgeWVhclxuXHRcdFx0XHRcdGN1cnNvckljb24udHJhbnNpdGlvbihcImRlbW9FeHBhbmRcIikuZGVsYXkodHJhbnNpdGlvblRpbWVzWzNdKVxuXHRcdFx0XHRcdFx0LmR1cmF0aW9uKHRyYW5zaXRpb25UaW1lc1s0XSlcblx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIHRyYW5zbGF0ZSlcblx0XHRcdFx0XHRcdC5lYWNoKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoY2hhcnQuY2xhc3NlZChcImRlbW9JblByb2dyZXNzXCIpKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHNlbCA9IHBhcGVySXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGRkKSB7cmV0dXJuIGRkLnllYXI9PWRlbW9ZZWFySXRlbVswXVswXS5fX2RhdGFfXy55ZWFyfSk7XG5cdFx0XHRcdFx0XHRcdFx0ZXhwYW5kKHNlbCk7XG5cdFx0XHRcdFx0XHRcdFx0ZGVtb0VuZCh0cmFuc2l0aW9uVGltZXNbNV0pO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGRlbW9FbmQoMCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdC8vIGN1cnNvckljb24udHJhbnNpdGlvbihcImRlbW9FbmRcIikuZGVsYXkoZGVtb1RyYW5zaXRpb25UaW1lKVxuXHRcdFx0XHRcdC8vIFx0LmR1cmF0aW9uKGRlbW9EZWxheVRvUmVtb3ZlKVxuXHRcdFx0XHRcdC8vIFx0LmVhY2goXCJlbmRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Ly8gXHRcdGN1cnNvckljb24ucmVtb3ZlKCk7XG5cdFx0XHRcdFx0Ly8gXHRcdGNvbnRyYWN0KCk7XG5cdFx0XHRcdFx0Ly8gXHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZ1bmN0aW9uIGRlbW9FbmQoZGVsYXkpIHtcblx0XHRcdFx0XHRjdXJzb3JJY29uLnRyYW5zaXRpb24oXCJkZW1vRW5kXCIpXG5cdFx0XHRcdFx0XHQuZGVsYXkoZGVsYXkpXG5cdFx0XHRcdFx0XHQuZHVyYXRpb24oMClcblx0XHRcdFx0XHRcdC5yZW1vdmUoKVxuXHRcdFx0XHRcdFx0LmVhY2goXCJlbmRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRyYWN0KCk7XG5cdFx0XHRcdFx0XHRcdGVuYWJsZUludGVyYWN0aW9uKCk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cblx0XHRcdGZ1bmN0aW9uIHRlc3RQbGFjZUN1cnNvcigpIHtcblx0XHRcdFx0dmFyIGV4dGVudFNlbGVjdCA9IG1pbmkuc2VsZWN0KFwiLmJydXNoXCIpLnNlbGVjdChcIi5leHRlbnRcIik7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGV4dGVudFNlbGVjdCk7XG5cdFx0XHRcdHZhciBtaW5FeHRlbnRTY3JlZW4gPSArZXh0ZW50U2VsZWN0LmF0dHIoXCJ4XCIpO1xuXHRcdFx0XHR2YXIgY3Vyc29ySWNvbiA9IG1haW5DbGlwUGF0aC5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImN1cnNvckljb25cIilcblx0XHRcdFx0XHQuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcIkZvbnRBd2Vzb21lXCIpXG5cdFx0XHRcdFx0LnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMWVtXCIpXG5cdFx0XHRcdFx0LnRleHQoXCJcXHVmMjQ1XCIpXG5cdFx0XHRcdFx0Ly8gLmF0dHIoXCJ4XCIsIDEwMClcblx0XHRcdFx0XHQvLyAuYXR0cihcInlcIiwgMzAwKTtcblx0XHRcdFx0XHQvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgxMDAsMzAwKVwiKTtcblx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1pbkV4dGVudFNjcmVlbiArIFwiLFwiICsgKG1haW5IZWlnaHQtMjApICsgXCIpXCIpO1xuXHRcdFx0XHRcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gdGVzdENoYW5nZUhlaWdodCgpIHtcblx0XHRcdFx0Ly8gY2hhbmdlRXh0ZW50KE1hdGgucm91bmQobWluRXh0ZW50KzEpLCBNYXRoLnJvdW5kKG1heEV4dGVudCsxKSwgMjUwLCBcImxpbmVhclwiKTtcblx0XHRcdFx0dmFyIGNoYXJ0SGVpZ2h0ID0gK2NoYXJ0LmF0dHIoXCJoZWlnaHRcIik7XG5cdFx0XHRcdHZhciBjdXJyTWFpbkhlaWdodCA9ICttYWluLmF0dHIoXCJoZWlnaHRcIik7XG5cdFx0XHRcdGNoYXJ0LnRyYW5zaXRpb24oKS5kdXJhdGlvbigxMDAwKS5hdHRyKFwiaGVpZ2h0XCIsIGNoYXJ0SGVpZ2h0KzEwMCk7XG5cdFx0XHRcdG1haW4udHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApLmF0dHIoXCJoZWlnaHRcIiwgY3Vyck1haW5IZWlnaHQrMTAwKTtcblx0XHRcdFx0bWluaS50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMClcblx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1bM10gKyBcIixcIiArIChjdXJyTWFpbkhlaWdodCsxMDAgKyBtWzBdKSArIFwiKVwiKTtcblx0XHRcdFx0ZDMuc2VsZWN0KFwiI2NsaXAgcmVjdFwiKS5hdHRyKFwiaGVpZ2h0XCIsIGN1cnJNYWluSGVpZ2h0KzEwMCk7XG5cdFx0XHRcdGRpc3BsYXkoKTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coZDMuc2VsZWN0KFwiI2NsaXBcIikuYXR0cihcImhlaWdodFwiKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIHZhciB0ZXN0QnV0dG9uID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJidXR0b25cIilcblx0XHRcdC8vIFx0XHRcdFx0XHQuYXR0cihcImlkXCIsIFwidGVzdEJ1dHRvblwiKVxuXHRcdFx0Ly8gXHRcdFx0XHRcdC5odG1sKFwidGVzdEJ1dHRvblwiKVxuXHRcdFx0Ly8gXHRcdFx0XHRcdC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gXHRcdFx0XHRcdFx0Ly8gbWluaW1pemVUaW1lbGluZSgpO1xuXHRcdFx0Ly8gXHRcdFx0XHRcdFx0ZGVtb0luaXQoKTtcblx0XHRcdC8vIFx0XHRcdFx0XHR9KTtcblx0XHRcdGQzLnNlbGVjdChcIi5jbGlja0ZvckRlbW9cIilcblx0XHRcdFx0Lm9uKFwiY2xpY2tcIiwgZGVtb0luaXQpO1xuXG5cdFx0XHRmdW5jdGlvbiBkaXNhYmxlSW50ZXJhY3Rpb24oKSB7XG5cdFx0XHRcdGQzLnNlbGVjdChcIiN0aW1lbGluZSBzdmdcIikuc3R5bGUoXCJwb2ludGVyLWV2ZW50c1wiLCBcIm5vbmVcIik7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGVuYWJsZUludGVyYWN0aW9uKCkge1xuXHRcdFx0XHRkMy5zZWxlY3QoXCIjdGltZWxpbmUgc3ZnXCIpLnN0eWxlKFwicG9pbnRlci1ldmVudHNcIiwgbnVsbCk7XG5cdFx0XHR9XG5cblx0XHRcdCQoIGRvY3VtZW50ICkub24oXCJ0aW1lbGluZVZpczpjb250cmFjdFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0Y29udHJhY3QoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQkKCBkb2N1bWVudCApLm9uKFwidGltZWxpbmVWaXM6ZGlzcGxheVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGlzcGxheSgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdCQoIGRvY3VtZW50ICkub24oXCJ0aW1lbGluZVZpczpjbGVhckJydXNoXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjbGVhckJydXNoKCk7XG5cdFx0XHR9KTtcblxuXHRcdH0pO1xuXHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8vIHVwZGF0ZURhdGEoKSB7XG5cdC8vIFx0Ly8gdXNlIEQzIHVwZGF0ZSBwYXR0ZXJuIHdpdGggZGF0YVxuICAgIC8vXG5cdC8vIFx0dmFyIGdyYXBoID0gdGhpcy5fZGF0YTtcblx0Ly8gXHRncmFwaC5ub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcblx0Ly8gXHRcdGQuaWQgPSBkLmlkLnRvU3RyaW5nKCk7XG5cdC8vIFx0fSlcblx0Ly8gXHRncmFwaC5saW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcblx0Ly8gXHRcdGQuaWQgPSBnZXRMaW5rSWQoZCwgZ3JhcGguZGlyZWN0ZWQpO1xuXHQvLyBcdH0pO1xuXHQvLyBcdHRoaXMuc2ltdWxhdGlvblxuXHQvLyBcdFx0Lm5vZGVzKGdyYXBoLm5vZGVzKVxuXHQvLyBcdFx0Lm9uKFwidGlja1wiLCB0aWNrZWQpO1xuICAgIC8vXG5cdC8vIFx0c2ltdWxhdGlvbi5mb3JjZShcImxpbmtcIilcblx0Ly8gXHRcdC5saW5rcyhncmFwaC5saW5rcyk7XG5cdC8vIFx0Y29uc29sZS5sb2coZ3JhcGgpO1xuXHQvLyBcdHNpbXVsYXRpb24uc3RvcCgpO1xuXHQvLyBcdG5vZGUgPSBub2RlLmRhdGEoZ3JhcGgubm9kZXMsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuaWQ7IH0pO1xuXHQvLyBcdHZhciBub2RlRXhpdCA9IG5vZGUuZXhpdCgpO1xuXHQvLyBcdC8vIG5vZGVFeGl0LnNlbGVjdEFsbChcImNpcmNsZVwiKS5hdHRyKFwiZmlsbFwiLCBcInJlZFwiKTtcblx0Ly8gXHR2YXIgdCA9IGQzLnRyYW5zaXRpb24oJ3VwZGF0ZURhdGEnKS5kdXJhdGlvbig1MDAwKTtcblx0Ly8gXHRub2RlRXhpdC5zZWxlY3RBbGwoXCJjaXJjbGVcIikuc3R5bGUoXCJzdHJva2VcIiwgXCJyZWRcIikudHJhbnNpdGlvbih0KS5hdHRyKFwiclwiLCAwKTtcblx0Ly8gXHRub2RlID0gZW50ZXJOb2Rlcyhub2RlLCB0KTtcblx0Ly8gXHQvLyBub2RlID0gbm9kZS5jYWxsKGVudGVyTm9kZXMsIHQpO1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuXHQvLyBcdGxpbmsgPSBsaW5rXG5cdC8vIFx0XHQuZGF0YShncmFwaC5saW5rcywgZnVuY3Rpb24oZCkge1xuXHQvLyBcdFx0XHQvLyBkLmlkID0gZ2V0TGlua0lkKGQpO1xuXHQvLyBcdFx0XHRyZXR1cm4gZC5pZDtcblx0Ly8gXHRcdH0pO1xuXHQvLyBcdHZhciBsaW5rRXhpdCA9IGxpbmsuZXhpdCgpO1xuXHQvLyBcdGxpbmtFeGl0LnN0eWxlKFwic3Ryb2tlXCIsIFwicmVkXCIpLnRyYW5zaXRpb24odCkuc3R5bGUoXCJvcGFjaXR5XCIsIDApLnJlbW92ZSgpO1xuXHQvLyBcdC8vIGxpbmtFeGl0LnJlbW92ZSgpO1xuXHQvLyBcdGxpbmsgPSBlbnRlckxpbmtzKGxpbmssIHQpO1xuXHQvLyBcdHNpbXVsYXRpb24ub24oXCJ0aWNrXCIpLmNhbGwoKTtcbiAgICAvL1xuICAgIC8vXG5cdC8vIFx0dC5lbmQoKS50aGVuKGZ1bmN0aW9uKGQpIHtcblx0Ly8gXHRcdG5vZGVFeGl0LnJlbW92ZSgpO1xuXHQvLyBcdFx0Ly8gc2ltdWxhdGlvbi5hbHBoYSgxKS5yZXN0YXJ0KCk7XG5cdC8vIFx0XHQvLyBzaW11bGF0aW9uXG5cdC8vIFx0XHRcdC8vIC5hbHBoYURlY2F5KC4wMDA1KVxuXHQvLyBcdFx0XHQvLyAudmVsb2NpdHlEZWNheSgwLjkpXG5cdC8vIFx0XHRcdC8vIC5hbHBoYSguMSlcblx0Ly8gXHRcdFx0Ly8gLnJlc3RhcnQoKTtcblx0Ly8gXHR9KTtcblx0Ly8gXHRcblx0Ly8gXHQvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHQvLyBcdC8vIH0sIDQwMDApO1xuXHQvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lVmlzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyJdLCJzb3VyY2VSb290IjoiIn0=
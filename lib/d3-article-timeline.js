(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("d3"), require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define("TimelineVis", ["d3", "jQuery"], factory);
	else if(typeof exports === 'object')
		exports["TimelineVis"] = factory(require("d3"), require("jQuery"));
	else
		root["TimelineVis"] = factory(root["d3"], root["jQuery"]);
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
exports.default = void 0;

var _timelineVis_Main = _interopRequireDefault(__webpack_require__(/*! ./timelineVis_Main.js */ "./src/timelineVis_Main.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export { TimelineVis };
var _default = _timelineVis_Main.default;
exports.default = _default;
module.exports = exports["default"];

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

var $ = _jquery.default;

function D3VersionException() {
  this.name = 'D3VersionException';
  this.message = 'd3 v3 required. detected version ' + d3.version;
  this.stack = new Error().stack;
}

D3VersionException.prototype = new Error(); // D3 v3 is required

if (d3.version[0] != 3) {
  throw new D3VersionException();
} // reusable chart pattern inspired by:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UaW1lbGluZVZpcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vVGltZWxpbmVWaXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVGltZWxpbmVWaXMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vVGltZWxpbmVWaXMvLi9zcmMvdGltZWxpbmVWaXNfTWFpbi5qcyIsIndlYnBhY2s6Ly9UaW1lbGluZVZpcy9leHRlcm5hbCBcImQzXCIiLCJ3ZWJwYWNrOi8vVGltZWxpbmVWaXMvZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyIkIiwiRDNWZXJzaW9uRXhjZXB0aW9uIiwibmFtZSIsIm1lc3NhZ2UiLCJkMyIsInZlcnNpb24iLCJzdGFjayIsIkVycm9yIiwicHJvdG90eXBlIiwiVGltZWxpbmVWaXMiLCJvcHRzIiwiZGVmYXVsdHMiLCJlbCIsImRhdGEiLCJ3aWR0aCIsImNvbG9yIiwic2NhbGUiLCJvcmRpbmFsIiwic2NoZW1lQ2F0ZWdvcnkxMCIsImZvcmNlU3RyZW5ndGgiLCJPYmplY3QiLCJhc3NpZ24iLCJfZGF0YSIsInVwZGF0ZURhdGEiLCJoZWlnaHQiLCJpbml0IiwiY29uc29sZSIsImxvZyIsImRyYXciLCJ2YWx1ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNlbGVjdGlvbiIsIm9iaiIsInciLCJoIiwiZGF0YV90b3RhbCIsImVhY2giLCJkZWNvbnN0cnVjdFRyYW5zbGF0ZSIsInRyYW5zbGF0ZVN0cmluZyIsInJlcGxhY2UiLCJyZWdleCIsIlJlZ0V4cCIsIm1hdGNoIiwiZXhlYyIsIngiLCJ5IiwiY29uc3RydWN0VHJhbnNsYXRlIiwid3JhcCIsInRleHR3cmFwIiwibWV0aG9kIiwicGFyc2VEYXRhIiwiZm9yRWFjaCIsImQiLCJhdXRob3JzIiwidW5kZWZpbmVkIiwibm9kZV9yYW5rIiwidmVudWUiLCJ5ZWFyIiwidXJsIiwidGl0bGUiLCJzZWxlY3QiLCJ3aW5kb3ciLCJvbiIsImRpc3BsYXkiLCJsYW5lIiwibWFya1R5cGUiLCJnZXRQYXJhbWV0ZXJCeU5hbWUiLCJkYXRhQnlZZWFyIiwibmVzdCIsImtleSIsInNvcnRWYWx1ZXMiLCJhIiwiYiIsImFzY2VuZGluZyIsImVudHJpZXMiLCJmaXJzdFRpdGxlIiwidmFsdWVzIiwiaWQiLCJzdW1fZWlnZW5mYWN0b3IiLCJzdW0iLCJkZCIsIm1heERhdGFCeVllYXIiLCJtYXgiLCJsYW5lcyIsImxhbmVMZW5ndGgiLCJ0aW1lQmVnaW4iLCJtaW4iLCJ0aW1lRW5kIiwibSIsIm1pbmlIZWlnaHQiLCJtYWluSGVpZ2h0IiwibWFpbk1pblJhZCIsIm1haW5NYXhSYWQiLCJtaW5pTWluUmFkIiwibWluaU1heFJhZCIsIm1pbkV4dGVudCIsIm1heEV4dGVudCIsInN0eWxlc0Jhc2UiLCJzdHlsZXNWaXNpYmxlIiwibGluZWFyIiwiZG9tYWluIiwicmFuZ2UiLCJ4MSIsInkxIiwieTIiLCJlZkV4dGVudCIsImV4dGVudCIsImVmU2NhbGVNaW5pIiwiZWZTY2FsZU1haW4iLCJlZlN1bVNjYWxlIiwiY2hhcnRXaWR0aCIsImNoYXJ0SGVpZ2h0IiwiY2hhcnQiLCJhcHBlbmQiLCJhdHRyIiwibWFpbkNvbnRhaW5lciIsIm1haW4iLCJtaW5pQ29udGFpbmVyIiwibWluaSIsIm1haW5MYW5lTGluZXNHIiwiaSIsImxlbiIsIm1haW5MYWJlbEciLCJtYWluTGFiZWwiLCJ0ZXh0Iiwic3R5bGUiLCJib3VuZHMiLCJjYWxsIiwibWluaUxhbmVMaW5lc0ciLCJtaW5pTGFiZWwiLCJ4QXhpc01pbmkiLCJzdmciLCJheGlzIiwib3JpZW50IiwidGlja0Zvcm1hdCIsImZvcm1hdCIsInhBeGlzTWFpbiIsInhBeGlzTWFpbk9iaiIsIm1haW5DbGlwUGF0aCIsIm1pbmlJdGVtcyIsInNlbGVjdEFsbCIsImVudGVyIiwicmFkaXVzIiwic3RhY2tJdGVtcyIsIml0ZW1zIiwieWVhcnNMaXN0IiwicHVzaCIsIm1heFJhZCIsIl9fZGF0YV9fIiwidGhpc1llYXJNaW5pIiwiZmlsdGVyIiwibWluaU1hcmtPcGFjaXR5IiwiTWF0aCIsIm1pbmlNYXJrcyIsInllYXJJdGVtcyIsInllYXJNYXJrcyIsImNvbnRyYWN0Iiwic2VsIiwicGFwZXJJdGVtcyIsInRoaXNZZWFySXRlbSIsImV4cGFuZCIsImlkeCIsInNwYW4iLCJodG1sIiwicGFwZXJNYXJrcyIsImJib3giLCJub2RlIiwiZ2V0QkJveCIsImluc2VydCIsInBhcGVyTGFiZWxzIiwiYnJ1c2giLCJleHRlbnRMaW5lcyIsInVwZGF0ZUV4dGVudExpbmVzIiwibGVmdCIsInJpZ2h0IiwiZW1wdHkiLCJzY3JvbGxEdXIiLCJtb3ZlQnJ1c2giLCJkaXJlY3Rpb24iLCJjaGFuZ2VFeHRlbnQiLCJyb3VuZCIsInNjcm9sbEl0ZW1zIiwiem9vbUl0ZW1zIiwiem9vbU1vdXNlT3ZlciIsInpvb21Nb3VzZU91dCIsInN0b3AiLCJmYWRlVG8iLCJjbGVhckJydXNoSWNvbiIsImV2ZW50Iiwid2hlZWxEZWx0YVkiLCJ3aGVlbERlbHRhWCIsIm1pZHBvaW50WWVhciIsImJydXNoSW5pdCIsImRvY3VtZW50IiwidHJpZ2dlciIsInllYXIxIiwieWVhcjIiLCJkdXJhdGlvbiIsImVhc2UiLCJkZWxheSIsInRyYW5zaXRpb24iLCJleHBhbmRBbGwiLCJtYXhFRiIsImNsZWFyQnJ1c2giLCJtaWQiLCJleHRlbnRTZWxlY3QiLCJtaW5FeHRlbnRTY3JlZW4iLCJtYXhFeHRlbnRTY3JlZW4iLCJpbnZlcnQiLCJjbGFzc2VkIiwidXBkYXRlTWFpbiIsInZpc0l0ZW1zIiwibm90VmlzSXRlbXMiLCJpdGVtIiwiX3JvdGF0ZSIsInJvdGF0aW9uIiwibGFiZWxzIiwiYWxwaGEiLCJzcGFjaW5nIiwicmVsYXgiLCJhZ2FpbiIsImRhIiwiYXgiLCJkYiIsImJ4IiwiZGVsdGFYIiwiYWJzIiwic2lnbiIsImxhYmVsc0NvbGxpc2lvbkRldGVjdCIsImFmdGVyVHJhbnNpdGlvblgiLCJhZnRlclRyYW5zaXRpb25ZIiwieWVhckl0ZW0iLCJ0aGlzWWVhciIsImR1ciIsInRyYW5zaXRpb25TdGFydFN0eWxlIiwidHJhbnNpdGlvbkVuZFN0eWxlIiwibGluZSIsImxpbmVkYXRhIiwic3R5bGVUd2VlbiIsImludGVycG9sYXRlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImRhdHVtIiwicmVtb3ZlIiwiY2hlY2tTaW5nbGVMYWJlbCIsIndyYXBJbkFuY2hvciIsInN0YWJsZV91cmwiLCJ0aGlzTGFiZWwiLCJ3b3JkcyIsInNwbGl0IiwiZ2l2ZVVwVGhyZXNob2xkIiwidmlld0xlZnRFZGdlIiwicG9zaXRpb24iLCJsZWZ0UG9zIiwibnVtV29yZHMiLCJzbGljZSIsInNob3J0ZW5lZFRpdGxlIiwiam9pbiIsImRlbW9Jbml0IiwiZGlzYWJsZUludGVyYWN0aW9uIiwiZGVtb1F1aXQiLCJjdXJzb3JJY29uIiwidHJhbnNpdGlvblRpbWVzIiwieWVhclJhbmdlIiwiaW5pdEJydXNoUmFuZ2UiLCJmbG9vciIsImluaXRCcnVzaFBvc2l0aW9uIiwibnVtVmlzSXRlbXMiLCJzaXplIiwic2VsSW5kZXgiLCJjZWlsIiwiZGVtb1llYXJJdGVtIiwiZGVtb0RyYXdCcnVzaCIsImRlbW9FbmQiLCJ4UG9zIiwiZGVtb0V4cGFuZCIsImRlbW9ZZWFyTWFyayIsInRyYW5zbGF0ZVN0ciIsInRyYW5zbGF0ZUNvb3JkIiwidHJhbnNsYXRlIiwiZW5hYmxlSW50ZXJhY3Rpb24iLCJ0ZXN0UGxhY2VDdXJzb3IiLCJ0ZXN0Q2hhbmdlSGVpZ2h0IiwiY3Vyck1haW5IZWlnaHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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QUFjbkksRUFBZCxDQUFpQixzQkFBakIsRUFBeUMsWUFBVztBQUNuRDhGLGtCQUFRO0FBQ1IsU0FGRDtBQUlBN0osU0FBQyxDQUFFa00sUUFBRixDQUFELENBQWNuSSxFQUFkLENBQWlCLHFCQUFqQixFQUF3QyxZQUFXO0FBQ2xEQyxpQkFBTztBQUNQLFNBRkQ7QUFJQWhFLFNBQUMsQ0FBRWtNLFFBQUYsQ0FBRCxDQUFjbkksRUFBZCxDQUFpQix3QkFBakIsRUFBMkMsWUFBVztBQUNyRDZJLG9CQUFVO0FBQ1YsU0FGRDtBQUlBLE9BejdDRDtBQTA3Q0QsYUFBTyxJQUFQO0FBQ0MsSyxDQUVEO0FBQ0E7QUFDRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0c7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRztBQUNBO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7ZUFHY25NLFc7Ozs7Ozs7Ozs7Ozs7QUN6akRmLGdEOzs7Ozs7Ozs7OztBQ0FBLG9EIiwiZmlsZSI6ImQzLWFydGljbGUtdGltZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJkM1wiKSwgcmVxdWlyZShcImpRdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlRpbWVsaW5lVmlzXCIsIFtcImQzXCIsIFwialF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlRpbWVsaW5lVmlzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiZDNcIiksIHJlcXVpcmUoXCJqUXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlRpbWVsaW5lVmlzXCJdID0gZmFjdG9yeShyb290W1wiZDNcIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFRpbWVsaW5lVmlzIGZyb20gJy4vdGltZWxpbmVWaXNfTWFpbi5qcyc7XG4vLyBleHBvcnQgeyBUaW1lbGluZVZpcyB9O1xuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmVWaXM7XG5cbiIsIi8vIGJ1aWxkaW5nIG9mZiBodHRwOi8vYmwub2Nrcy5vcmcvYnVua2F0LzIzMzgwMzRcbi8vXG4vL1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknO1xuY29uc3QgJCA9IGpRdWVyeTtcblxuZnVuY3Rpb24gRDNWZXJzaW9uRXhjZXB0aW9uKCkge1xuXHR0aGlzLm5hbWUgPSAnRDNWZXJzaW9uRXhjZXB0aW9uJztcblx0dGhpcy5tZXNzYWdlID0gJ2QzIHYzIHJlcXVpcmVkLiBkZXRlY3RlZCB2ZXJzaW9uICcgKyBkMy52ZXJzaW9uO1xuXHR0aGlzLnN0YWNrID0gKG5ldyBFcnJvcigpKS5zdGFjaztcbn1cbkQzVmVyc2lvbkV4Y2VwdGlvbi5wcm90b3R5cGUgPSBuZXcgRXJyb3I7XG5cbi8vIEQzIHYzIGlzIHJlcXVpcmVkXG5pZiAoZDMudmVyc2lvblswXSAhPSAzKSB7XG5cdHRocm93IG5ldyBEM1ZlcnNpb25FeGNlcHRpb24oKTtcbn1cblxuLy8gcmV1c2FibGUgY2hhcnQgcGF0dGVybiBpbnNwaXJlZCBieTpcbi8vIGh0dHBzOi8vYm9zdC5vY2tzLm9yZy9taWtlL2NoYXJ0L1xuLy8gYW5kXG4vLyBodHRwczovL3d3dy50b3B0YWwuY29tL2QzLWpzL3Rvd2FyZHMtcmV1c2FibGUtZDMtanMtY2hhcnRzXG5jbGFzcyBUaW1lbGluZVZpcyB7XG5cdGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuXHRcdGNvbnN0IGRlZmF1bHRzID0ge1xuXHRcdFx0ZWw6IG51bGwsXG5cdFx0XHRkYXRhOiBudWxsLFxuXHRcdFx0d2lkdGg6IDk2MCxcblx0XHRcdGNvbG9yOiBkMy5zY2FsZS5vcmRpbmFsKGQzLnNjaGVtZUNhdGVnb3J5MTApLFxuXHRcdFx0Zm9yY2VTdHJlbmd0aDogLTIsXG5cdFx0fTtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRzLCBvcHRzKTsgIC8vIG9wdHMgd2lsbCBvdmVyd3JpdGUgZGVmYXVsdHNcblx0XHR0aGlzLl9kYXRhID0gdGhpcy5kYXRhO1xuXHRcdHRoaXMuZGF0YSA9IHRoaXMudXBkYXRlRGF0YTtcblx0XHRpZiAodHlwZW9mIHRoaXMuaGVpZ2h0ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0dGhpcy5oZWlnaHQgPSAuNjI1ICogdGhpcy53aWR0aDtcblx0XHR9XG5cdFx0Ly8gdGhpcy5tYW55Qm9keSA9IGQzLmZvcmNlTWFueUJvZHkoKVxuXHRcdC8vIFx0XHRcdFx0XHQuc3RyZW5ndGgodGhpcy5mb3JjZVN0cmVuZ3RoKTtcblx0XHR0aGlzLmluaXQgPSBmYWxzZTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLl9kYXRhKTtcblx0XHRpZiAodGhpcy5lbCAhPT0gbnVsbCAmJiB0aGlzLl9kYXRhICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmRyYXcodGhpcy5lbCk7XG5cdFx0XHR0aGlzLmluaXQgPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZURhdGEodmFsdWUpIHtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9kYXRhO1xuXHRcdHRoaXMuX2RhdGEgPSB2YWx1ZTtcblx0XHRpZiAodGhpcy5pbml0ID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5kcmF3KHRoaXMuZWwpO1xuXHRcdFx0dGhpcy5pbml0ID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gdGhpcy51cGRhdGVEYXRhKCk7XG5cdFx0XHQvLyBOT1QgSU1QTEVNRU5URURcblx0XHRcdGNvbnNvbGUubG9nKFwiVVBEQVRJTkcgREFUQSBOT1QgWUVUIElNUExFTUVOVEVEXCIpO1xuXHRcdH1cblx0XHQvLyBjb25zb2xlLmxvZyh0eXBlb2YgdXBkYXRlRGF0YSk7XG5cdFx0Ly8gaWYgKHR5cGVvZiB1cGRhdGVEYXRhID09PSAnZnVuY3Rpb24nKSB1cGRhdGVEYXRhKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0ZHJhdyhzZWxlY3Rpb24pIHtcblx0XHR2YXIgb2JqID0gdGhpcztcblx0XHR2YXIgdyA9IHRoaXMud2lkdGg7XG5cdFx0dmFyIGggPSB0aGlzLmhlaWdodDtcblx0XHR2YXIgZGF0YV90b3RhbCA9IHRoaXMuX2RhdGE7XG5cdFx0c2VsZWN0aW9uLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRmdW5jdGlvbiBkZWNvbnN0cnVjdFRyYW5zbGF0ZSh0cmFuc2xhdGVTdHJpbmcpIHtcblx0XHRcdFx0Ly8gdGFrZXMgYSBzdHJpbmcgbGlrZSBcInRyYW5zbGF0ZSgxMDAsMjAwKVwiIGFuZCByZXR1cm5zIHRoZSBudW1iZXJzIFsxMDAsIDIwMF1cblx0XHRcdFx0dHJhbnNsYXRlU3RyaW5nID0gdHJhbnNsYXRlU3RyaW5nLnJlcGxhY2UoXCIoXCIsIFwiXCIpLnJlcGxhY2UoXCIpXCIsIFwiXCIpO1xuXHRcdFx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKC90cmFuc2xhdGUoW1xcZFxcLl0rKSwoW1xcZFxcLl0rKS8pO1xuXHRcdFx0XHR2YXIgbWF0Y2ggPSByZWdleC5leGVjKHRyYW5zbGF0ZVN0cmluZyk7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0eDogK21hdGNoWzFdLFxuXHRcdFx0XHRcdHk6ICttYXRjaFsyXVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBjb25zdHJ1Y3RUcmFuc2xhdGUoeCwgeSkge1xuXHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCI7XG5cdFx0XHR9XG5cblxuXHRcdFx0dmFyIHdyYXAgPSBkMy50ZXh0d3JhcCgpLm1ldGhvZChcInRzcGFuc1wiKTtcblxuXHRcdFx0ZnVuY3Rpb24gcGFyc2VEYXRhKGRhdGEpIHtcblx0XHRcdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRkLmF1dGhvcnMgPSBkW1wiZGlzcGxheV9hdXRob3JzXCJdOyAgLy8gc3RyaW5nIHJlcHJlc2VudGluZyBhdXRob3IgbmFtZXNcblx0XHRcdFx0XHRpZiAoZC5hdXRob3JzID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdGQuYXV0aG9ycyA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGQubm9kZV9yYW5rID0gZFtcIm5vZGVfcmFua1wiXTtcblx0XHRcdFx0XHRkLnZlbnVlID0gZFtcInZlbnVlXCJdO1xuXHRcdFx0XHRcdGlmIChkLnZlbnVlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdGQudmVudWUgPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkLnllYXIgPSBkW1wieWVhclwiXTtcblx0XHRcdFx0XHRkLnVybCA9IGRbXCJ1cmxcIl07XG5cdFx0XHRcdFx0ZC50aXRsZSA9IGRbXCJkaXNwbGF5X3RpdGxlXCJdO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0XHR9XG5cblxuXHRcdFx0ZDMuc2VsZWN0KHdpbmRvdykub24oXCJyZXNpemVcIiwgZGlzcGxheSlcblx0XHRcdGRhdGFfdG90YWwgPSBwYXJzZURhdGEoZGF0YV90b3RhbCk7XG5cdFx0XHRkYXRhX3RvdGFsLmZvckVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRkLmxhbmUgPSAwO1xuXHRcdFx0XHRpZiAoZC5ub2RlX3JhbmsgPT09IG51bGwpIHtcblx0XHRcdFx0XHRkLm5vZGVfcmFuayA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0dmFyIG1hcmtUeXBlID0gZ2V0UGFyYW1ldGVyQnlOYW1lKCdtJyk7XG5cdFx0XHRpZiAoIChtYXJrVHlwZSAhPSAnaWNvbicpICYmIChtYXJrVHlwZSAhPSAnY2lyY2xlJykgKSB7XG5cdFx0XHRcdG1hcmtUeXBlID0gJ2NpcmNsZScgIC8vIGRlZmF1bHRcblx0XHRcdH1cblxuXHRcdFx0dmFyIGRhdGFCeVllYXIgPSBkMy5uZXN0KClcblx0XHRcdFx0XHRcdFx0XHQua2V5KGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyO30pXG5cdFx0XHRcdFx0XHRcdFx0LnNvcnRWYWx1ZXMoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gcmV0dXJuIGQzLmRlc2NlbmRpbmcoYS5laWdlbmZhY3Rvcl9zY29yZSwgYi5laWdlbmZhY3Rvcl9zY29yZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyByZXR1cm4gZDMuYXNjZW5kaW5nKGEucHViZGF0ZSwgYi5wdWJkYXRlKTtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBkMy5hc2NlbmRpbmcoYS50aXRsZSwgYi50aXRsZSk7XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHQvLyAubWFwKGRhdGFfdG90YWwsIGQzLm1hcCk7XG5cdFx0XHRcdFx0XHRcdFx0LmVudHJpZXMoZGF0YV90b3RhbCk7XG5cdFx0XHRkYXRhQnlZZWFyLmZvckVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRkLmZpcnN0VGl0bGUgPSBkLnZhbHVlc1swXS5pZDtcblx0XHRcdFx0ZC5zdW1fZWlnZW5mYWN0b3IgPSBkMy5zdW0oZC52YWx1ZXMsIGZ1bmN0aW9uKGRkKSB7cmV0dXJuIGRkLm5vZGVfcmFuazt9KTtcblx0XHRcdFx0ZC5sYW5lID0gMDtcblx0XHRcdFx0ZC55ZWFyID0gK2Qua2V5O1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgbWF4RGF0YUJ5WWVhciA9IGQzLm1heChkYXRhQnlZZWFyLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnZhbHVlcy5sZW5ndGg7IH0pO1xuXG5cdFx0XHR2YXIgbGFuZXMgPSBbXCJDbGltYXRlIGNoYW5nZVwiXSxcblx0XHRcdFx0XHRcdGxhbmVMZW5ndGggPSBsYW5lcy5sZW5ndGgsXG5cdFx0XHRcdFx0Ly8gdGltZUJlZ2luID0gbmV3IERhdGUoU3RyaW5nKG1pblllYXItMSkpLFxuXHRcdFx0XHRcdHRpbWVCZWdpbiA9ICtkMy5taW4oZGF0YUJ5WWVhciwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC55ZWFyOyB9KSAtIDEsXG5cdFx0XHRcdFx0dGltZUVuZCA9ICtkMy5tYXgoZGF0YUJ5WWVhciwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC55ZWFyOyB9KSArIDE7XG5cblx0XHRcdHZhciBtID0gWzIwLCAxNSwgMTUsIDE1MF07IC8vdG9wIHJpZ2h0IGJvdHRvbSBsZWZ0XG5cdFx0XHRcdC8vIHcgPSA5NjAgLSBtWzFdIC0gbVszXSxcblx0XHRcdFx0Ly8gaCA9IDM1MCAtIG1bMF0gLSBtWzJdLFxuXHRcdFx0dyA9IHcgLSBtWzFdIC0gbVszXTtcblx0XHRcdGggPSBoIC0gbVswXSAtIG1bMl07XG5cdFx0XHR2YXIgbWluaUhlaWdodCA9IGxhbmVMZW5ndGggKiAxMiArIDMwLFxuXHRcdFx0XHRtYWluSGVpZ2h0ID0gaCAtIG1pbmlIZWlnaHQgLSA1MDtcblxuXHRcdFx0dmFyIG1haW5NaW5SYWQgPSA4LFxuXHRcdFx0XHRtYWluTWF4UmFkID0gMTgsXG5cdFx0XHRcdG1pbmlNaW5SYWQgPSA1LFxuXHRcdFx0XHRtaW5pTWF4UmFkID0gMTA7XG5cblx0XHRcdHZhciBtaW5FeHRlbnQsIG1heEV4dGVudDsgIC8vIHRoZXNlIHdpbGwgYmUgdGhlIGxvd2VyIGFuZCB1cHBlciB5ZWFycyBkaXNwbGF5ZWQgaW4gbWFpblxuXG5cdFx0XHR2YXIgc3R5bGVzQmFzZSA9IHtcblx0XHRcdFx0J29wYWNpdHknOiAuMlxuXHRcdFx0fTtcblx0XHRcdHZhciBzdHlsZXNWaXNpYmxlID0ge1xuXHRcdFx0XHQnb3BhY2l0eSc6IDFcblx0XHRcdH07XG5cblx0XHRcdC8vc2NhbGVzXG5cdFx0XHR2YXIgeCA9IGQzLnNjYWxlLmxpbmVhcigpXG5cdFx0XHRcdFx0LmRvbWFpbihbdGltZUJlZ2luLCB0aW1lRW5kXSlcblx0XHRcdFx0XHQucmFuZ2UoWzAsIHddKTtcblx0XHRcdHZhciB4MSA9IGQzLnNjYWxlLmxpbmVhcigpXG5cdFx0XHRcdFx0LnJhbmdlKFswLCB3XSk7XG5cdFx0XHR2YXIgeTEgPSBkMy5zY2FsZS5saW5lYXIoKVxuXHRcdFx0XHRcdC5kb21haW4oWzAsIGxhbmVMZW5ndGhdKVxuXHRcdFx0XHRcdC5yYW5nZShbMCwgbWFpbkhlaWdodF0pO1xuXHRcdFx0dmFyIHkyID0gZDMuc2NhbGUubGluZWFyKClcblx0XHRcdFx0XHQuZG9tYWluKFswLCBsYW5lTGVuZ3RoXSlcblx0XHRcdFx0XHQucmFuZ2UoWzAsIG1pbmlIZWlnaHRdKTtcblx0XHRcdHZhciBlZkV4dGVudCA9IGQzLmV4dGVudChkYXRhX3RvdGFsLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLm5vZGVfcmFuazsgfSk7XG5cdFx0XHR2YXIgZWZTY2FsZU1pbmkgPSBkMy5zY2FsZS5saW5lYXIoKVxuXHRcdFx0XHRcdC5kb21haW4oZWZFeHRlbnQpXG5cdFx0XHRcdFx0Ly8gLnJhbmdlKFswLCA1XSk7XG5cdFx0XHRcdFx0LnJhbmdlKFttaW5pTWluUmFkLCBtaW5pTWF4UmFkXSk7XG5cdFx0XHR2YXIgZWZTY2FsZU1haW4gPSBkMy5zY2FsZS5saW5lYXIoKVxuXHRcdFx0XHRcdC5kb21haW4oZWZFeHRlbnQpXG5cdFx0XHRcdFx0Ly8gLnJhbmdlKFswLCA1XSk7XG5cdFx0XHRcdFx0LnJhbmdlKFttYWluTWluUmFkLCBtYWluTWF4UmFkXSk7XG5cdFx0XHR2YXIgZWZTdW1TY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpXG5cdFx0XHRcdFx0LmRvbWFpbihkMy5leHRlbnQoZGF0YUJ5WWVhciwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5zdW1fZWlnZW5mYWN0b3I7IH0pKVxuXHRcdFx0XHRcdC8vIC5yYW5nZShbMCwgNV0pO1xuXHRcdFx0XHRcdC5yYW5nZShbbWFpbk1pblJhZCwgbWFpbk1heFJhZF0pO1xuXG5cblx0XHRcdHZhciBjaGFydFdpZHRoID0gdyArIG1bMV0gKyBtWzNdLFxuXHRcdFx0XHRjaGFydEhlaWdodCA9IGggKyBtWzBdICsgbVsyXTtcblxuXHRcdFx0dmFyIGNoYXJ0ID0gZDMuc2VsZWN0KFwiI3RpbWVsaW5lXCIpXG5cdFx0XHRcdFx0XHQuYXBwZW5kKFwic3ZnXCIpXG5cdFx0XHRcdFx0XHQvLyAuYXR0cihcIndpZHRoXCIsIGNoYXJ0V2lkdGgpXG5cdFx0XHRcdFx0XHQvLyAuYXR0cihcImhlaWdodFwiLCBjaGFydEhlaWdodClcblx0XHRcdFx0XHRcdC5hdHRyKFwiZGF0YS1tYXhpbWl6ZWRIZWlnaHRcIiwgY2hhcnRIZWlnaHQpXG5cdFx0XHRcdFx0XHQuYXR0cihcImRhdGEtY3VyckhlaWdodFwiLCBjaGFydEhlaWdodClcblx0XHRcdFx0XHRcdC5hdHRyKFwidmlld0JveFwiLCBcIjAgMCBcIiArIGNoYXJ0V2lkdGggKyBcIiBcIiArIGNoYXJ0SGVpZ2h0KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pZFlNaWQgbWVldFwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImNoYXJ0XCIpO1xuXHRcdFx0XG5cdFx0XHRjaGFydC5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcImNsaXBQYXRoXCIpXG5cdFx0XHRcdC5hdHRyKFwiaWRcIiwgXCJjbGlwXCIpXG5cdFx0XHRcdC5hcHBlbmQoXCJyZWN0XCIpXG5cdFx0XHRcdC5hdHRyKFwid2lkdGhcIiwgdylcblx0XHRcdFx0LmF0dHIoXCJoZWlnaHRcIiwgbWFpbkhlaWdodCk7XG5cblx0XHRcdHZhciBtYWluQ29udGFpbmVyID0gY2hhcnQuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIG1bMF0gKyBcIilcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwid2lkdGhcIiwgY2hhcnRXaWR0aClcblx0XHRcdFx0XHRcdC5hdHRyKFwiaGVpZ2h0XCIsIG1haW5IZWlnaHQpXG5cdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibWFpbkNvbnRhaW5lclwiKTtcblxuXHRcdFx0Ly8gdmFyIG1haW4gPSBjaGFydC5hcHBlbmQoXCJnXCIpXG5cdFx0XHR2YXIgbWFpbiA9IG1haW5Db250YWluZXIuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdFx0Ly8gLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtWzNdICsgXCIsXCIgKyBtWzBdICsgXCIpXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1bM10gKyBcIiwwKVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ3aWR0aFwiLCB3KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJoZWlnaHRcIiwgbWFpbkhlaWdodClcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJtYWluXCIpO1xuXG5cdFx0XHR2YXIgbWluaUNvbnRhaW5lciA9IGNoYXJ0LmFwcGVuZChcImdcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyAobWFpbkhlaWdodCArIG1bMF0pICsgXCIpXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcIndpZHRoXCIsIGNoYXJ0V2lkdGgpXG5cdFx0XHRcdFx0XHQuYXR0cihcImhlaWdodFwiLCBtYWluSGVpZ2h0KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcIm1pbmlDb250YWluZXJcIik7XG5cblx0XHRcdC8vIHZhciBtaW5pID0gY2hhcnQuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0dmFyIG1pbmkgPSBtaW5pQ29udGFpbmVyLmFwcGVuZChcImdcIilcblx0XHRcdFx0XHRcdC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbVszXSArIFwiLFwiICsgKG1haW5IZWlnaHQgKyBtWzBdKSArIFwiKVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtWzNdICsgXCIsMClcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwid2lkdGhcIiwgdylcblx0XHRcdFx0XHRcdC5hdHRyKFwiaGVpZ2h0XCIsIG1pbmlIZWlnaHQpXG5cdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibWluaVwiKTtcblx0XHRcdFxuXHRcdFx0Ly9tYWluIGxhbmVzIGFuZCB0ZXh0c1xuXHRcdFx0dmFyIG1haW5MYW5lTGluZXNHID0gbWFpbi5hcHBlbmQoXCJnXCIpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGxhbmVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdG1haW5MYW5lTGluZXNHLmFwcGVuZChcImxpbmVcIilcblx0XHRcdFx0XHQuYXR0cihcIngxXCIsIG1bMV0pXG5cdFx0XHRcdFx0LmF0dHIoXCJ5MVwiLCBmdW5jdGlvbigpIHtyZXR1cm4geTIoaSk7fSlcblx0XHRcdFx0XHQuYXR0cihcIngyXCIsIHcpXG5cdFx0XHRcdFx0LmF0dHIoXCJ5MlwiLCBmdW5jdGlvbigpIHtyZXR1cm4geTIoaSk7fSlcblx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibGFuZUxpbmVcIilcblx0XHRcdFx0XHQuYXR0cihcInN0cm9rZVwiLCBcImxpZ2h0Z3JheVwiKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIG1haW5MYWJlbEcgPSBtYWluQ29udGFpbmVyLmFwcGVuZChcImdcIilcblx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIisobVswXSkrXCIpXCIpO1xuXHRcdFx0dmFyIG1haW5MYWJlbCA9IG1haW5MYWJlbEcuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHQudGV4dChcIk51bWJlciBvZiBhcnRpY2xlcyBpbiB0aGUgeWVhclwiKVxuXHRcdFx0XHQvLyAuYXR0cihcInhcIiwgLW1bMV0pXG5cdFx0XHRcdC8vIC5hdHRyKFwieFwiLCAwKVxuXHRcdFx0XHQvLyAuYXR0cihcInlcIiwgMTApXG5cdFx0XHRcdC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjE0cHhcIilcblx0XHRcdFx0Ly8gLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibGFuZVRleHRcIilcblx0XHRcdFx0LmF0dHIoXCJpZFwiLCBcIm1haW5MYWJlbFwiKTtcblx0XHRcblx0XHRcdC8vIHdyYXAuYm91bmRzKHtoZWlnaHQ6IG1haW5IZWlnaHQsIHdpZHRoOiBtWzNdfSkubWV0aG9kKFwidHNwYW5zXCIpO1xuXHRcdFx0d3JhcC5ib3VuZHMoe2hlaWdodDogbWFpbkhlaWdodCwgd2lkdGg6IChtWzNdICogLjkpfSk7XG5cdFx0XHQvLyBkMy5zZWxlY3QoXCIubGFuZVRleHRcIikuY2FsbCh3cmFwKTtcblx0XHRcdG1haW5MYWJlbC5jYWxsKHdyYXApO1xuXG5cdFx0XHQvLyB2YXIgc3ViT2Zmc2V0ID0gJCggJyNtYWluTGFiZWwnICkuaGVpZ2h0KCk7ICAvLyB5IG9mZnNldCBmb3IgdGhlIHN1YiBsYWJlbFxuXHRcdFx0Ly8gdmFyIG1haW5MYWJlbFN1YiA9IG1haW5MYWJlbEcuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0Ly8gXHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgc3ViT2Zmc2V0ICsgXCIpXCIpXG5cdFx0XHQvLyBcdC50ZXh0KFwiU2l6ZSBvZiBjaXJjbGVzIGluZGljYXRlcyBsZXZlbCBvZiBpbmZsdWVuY2VcIilcblx0XHRcdC8vIFx0LnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMTFweFwiKVxuXHRcdFx0Ly8gXHQuYXR0cihcImNsYXNzXCIsIFwibGFuZVRleHRcIilcblx0XHRcdC8vIFx0LmF0dHIoXCJpZFwiLCBcIm1haW5MYWJlbFN1YlwiKTtcbiAgICAgICAgICAgIC8vXG5cdFx0XHQvLyB3cmFwLmJvdW5kcyh7aGVpZ2h0OiBtYWluSGVpZ2h0IC0gc3ViT2Zmc2V0LCB3aWR0aDogKG1bM10gKiAuOSl9KTtcblx0XHRcdC8vIG1haW5MYWJlbFN1Yi5jYWxsKHdyYXApO1xuXHRcdFx0XG5cdFx0XHRcblx0XHRcdC8vbWluaSBsYW5lcyBhbmQgdGV4dHNcblx0XHRcdHZhciBtaW5pTGFuZUxpbmVzRyA9IG1pbmkuYXBwZW5kKFwiZ1wiKTtcblx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSBsYW5lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRtaW5pTGFuZUxpbmVzRy5hcHBlbmQoXCJsaW5lXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJ4MVwiLCBtWzFdKVxuXHRcdFx0XHRcdC5hdHRyKFwieTFcIiwgZnVuY3Rpb24oKSB7cmV0dXJuIHkyKGkpO30pXG5cdFx0XHRcdFx0LmF0dHIoXCJ4MlwiLCB3KVxuXHRcdFx0XHRcdC5hdHRyKFwieTJcIiwgZnVuY3Rpb24oKSB7cmV0dXJuIHkyKGkpO30pXG5cdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImxhbmVMaW5lXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJzdHJva2VcIiwgXCJsaWdodGdyYXlcIik7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBtaW5pTGFiZWwgPSBtaW5pQ29udGFpbmVyLmFwcGVuZChcImdcIilcblx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIisgbVswXSArXCIpXCIpXG5cdFx0XHRcdC5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdC50ZXh0KFwiU2VsZWN0IGRhdGUgcmFuZ2UgdG8gZm9jdXMgb246XCIpXG5cdFx0XHRcdC8vIC5hdHRyKFwieFwiLCAtbVsxXSlcblx0XHRcdFx0Ly8gLmF0dHIoXCJ4XCIsIDApXG5cdFx0XHRcdC8vIC5hdHRyKFwieVwiLCAxMClcblx0XHRcdFx0LnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMTRweFwiKVxuXHRcdFx0XHQvLyAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJsYW5lVGV4dFwiKTtcblxuXHRcdFx0d3JhcC5ib3VuZHMoe2hlaWdodDogbWluaUhlaWdodCwgd2lkdGg6IChtWzNdICogLjkpfSk7XG5cdFx0XHQvLyBkMy5zZWxlY3QoXCIubGFuZVRleHRcIikuY2FsbCh3cmFwKTtcblx0XHRcdG1pbmlMYWJlbC5jYWxsKHdyYXApO1xuXG5cdFx0XHQvLyBtaW5pLmFwcGVuZChcImdcIikuc2VsZWN0QWxsKFwiLmxhbmVUZXh0XCIpXG5cdFx0XHQvLyBcdC5kYXRhKGxhbmVzKVxuXHRcdFx0Ly8gXHQuZW50ZXIoKS5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHQvLyBcdC50ZXh0KGZ1bmN0aW9uKGQpIHtyZXR1cm4gZDt9KVxuXHRcdFx0Ly8gXHQuYXR0cihcInhcIiwgLW1bMV0pXG5cdFx0XHQvLyBcdC5hdHRyKFwieVwiLCBmdW5jdGlvbihkLCBpKSB7cmV0dXJuIHkyKGkgKyAuNSk7fSlcblx0XHRcdC8vIFx0LmF0dHIoXCJkeVwiLCBcIi41ZXhcIilcblx0XHRcdC8vIFx0LmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuXHRcdFx0Ly8gXHQuYXR0cihcImNsYXNzXCIsIFwibGFuZVRleHRcIik7XG5cblx0XHRcdC8vIEF4ZXNcblx0XHRcdHZhciB4QXhpc01pbmkgPSBkMy5zdmcuYXhpcygpXG5cdFx0XHRcdC5vcmllbnQoXCJib3R0b21cIilcblx0XHRcdFx0Ly8gLnRpY2tzKDUpXG5cdFx0XHRcdC5zY2FsZSh4KVxuXHRcdFx0XHQudGlja0Zvcm1hdChkMy5mb3JtYXQoXCJkXCIpKTtcblxuXHRcdFx0bWluaS5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJ4YXhpc1wiKVxuXHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgKG1pbmlIZWlnaHQpICsgXCIpXCIpXG5cdFx0XHRcdC5jYWxsKHhBeGlzTWluaSk7XG5cblx0XHRcdHZhciB4QXhpc01haW4gPSBkMy5zdmcuYXhpcygpXG5cdFx0XHRcdC5vcmllbnQoXCJ0b3BcIilcblx0XHRcdFx0LnNjYWxlKHgxKVxuXHRcdFx0XHQudGlja0Zvcm1hdChkMy5mb3JtYXQoXCJkXCIpKTtcblxuXHRcdFx0dmFyIHhBeGlzTWFpbk9iaiA9IG1haW4uYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwieGF4aXNcIilcblx0XHRcdFx0LmNhbGwoeEF4aXNNYWluKTtcblxuXHRcdFx0dmFyIG1haW5DbGlwUGF0aCA9IG1haW4uYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJtYWluQ2xpcFBhdGhcIilcblx0XHRcdFx0XHRcdFx0XHQuYXR0cihcImNsaXAtcGF0aFwiLCBcInVybCgjY2xpcClcIik7XG5cblx0XHRcdFxuXHRcdFx0Ly9taW5pIGl0ZW1zXG5cdFx0XHQvLyBub3RlOiBtb3VzZW92ZXIgZXZlbnRzIHdpbGwgbm90IHBsYXkgd2VsbCB3aXRoIHRoZSBicnVzaFxuXHRcdFx0dmFyIG1pbmlJdGVtcyA9IG1pbmkuYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoXCIubWluaUl0ZW1cIilcblx0XHRcdFx0LmRhdGEoZGF0YV90b3RhbClcblx0XHRcdFx0LmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibWluaUl0ZW1cIilcblx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdGQueCA9IHgoZC55ZWFyKTtcblx0XHRcdFx0XHQvLyBkLnkgPSAwOyAgLy8gZm9yIG5vd1xuXHRcdFx0XHRcdGQueSA9IG1pbmlIZWlnaHQgLyAyO1xuXHRcdFx0XHRcdC8vIGQucmFkaXVzID0gNSArIGVmU2NhbGUoZC5laWdlbmZhY3Rvcl9zY29yZSk7XG5cdFx0XHRcdFx0ZC5yYWRpdXMgPSAxICsgKCBlZlNjYWxlTWluaShkLm5vZGVfcmFuaykgKTtcblx0XHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0Ly8gbm90IGN1cnJlbnRseSB1c2luZyB0aGlzXG5cdFx0XHRmdW5jdGlvbiBzdGFja0l0ZW1zKGl0ZW1zLCBzY2FsZSkge1xuXHRcdFx0XHR2YXIgeWVhcnNMaXN0ID0gW107XG5cdFx0XHRcdGl0ZW1zLmVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdGlmICggIShkLnllYXIgaW4geWVhcnNMaXN0KSApIHtcblx0XHRcdFx0XHRcdHllYXJzTGlzdC5wdXNoKGQueWVhcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dmFyIG1heFJhZCA9IGQzLm1heChpdGVtc1swXSwgZnVuY3Rpb24oZCkge3JldHVybiBkLl9fZGF0YV9fLnJhZGl1c30pO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0geWVhcnNMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdFx0dGhpc1llYXJNaW5pID0gaXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyPT15ZWFyc0xpc3RbaV19KTtcblx0XHRcdFx0XHR2YXIgeSA9IDA7XG5cdFx0XHRcdFx0dGhpc1llYXJNaW5pLmVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0aWYgKHkgPT0gMCkge1xuXHRcdFx0XHRcdFx0XHR5ID0gc2NhbGUoZC5sYW5lKSArIG1heFJhZDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHkgPSB5ICsgMipkLnJhZGl1cztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGQueSA9IHk7XG5cdFx0XHRcdFx0XHRkMy5zZWxlY3QodGhpcykuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gc3RhY2tJdGVtcyhtaW5pSXRlbXMsIHkyKTtcblxuXHRcdFx0dmFyIG1pbmlNYXJrT3BhY2l0eSA9IE1hdGgubWF4KCAoMS9tYXhEYXRhQnlZZWFyKSwgMC4zICk7XG5cdFx0XHR2YXIgbWluaU1hcmtzID0gbWluaUl0ZW1zLmFwcGVuZChcImNpcmNsZVwiKVxuXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibWluaU1hcmtcIilcblx0XHRcdFx0LmF0dHIoXCJyXCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC5yYWRpdXM7fSlcblx0XHRcdFx0Ly8gLnN0eWxlKHN0eWxlc0Jhc2UpO1xuXHRcdFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIG1pbmlNYXJrT3BhY2l0eSk7XG5cblxuXHRcdFx0c3dpdGNoIChtYXJrVHlwZSkge1xuXHRcdFx0XHRjYXNlICdjaXJjbGUnOlxuXHRcdFx0XHRcdC8vbWFpbiBpdGVtc1xuXHRcdFx0XHRcdHZhciB5ZWFySXRlbXMgPSBtYWluQ2xpcFBhdGguYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoXCIueWVhckl0ZW1cIilcblx0XHRcdFx0XHRcdC5kYXRhKGRhdGFCeVllYXIpXG5cdFx0XHRcdFx0XHQuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwieWVhckl0ZW1cIilcblx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0ZC54ID0gMDsgIC8vZm9yIG5vd1xuXHRcdFx0XHRcdFx0XHRkLnkgPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0XHRcdC8vIGQucmFkaXVzID0gbWFpbk1pblJhZCArICgyICogZWZTdW1TY2FsZShkLnN1bV9laWdlbmZhY3RvcikpO1xuXHRcdFx0XHRcdFx0XHRkLnJhZGl1cyA9IGVmU3VtU2NhbGUoZC5zdW1fZWlnZW5mYWN0b3IpO1xuXHRcdFx0XHRcdFx0XHQvLyBkLnJhZGl1cyA9IG1haW5NaW5SYWQgKyAoZC52YWx1ZXMubGVuZ3RoKjIpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHR2YXIgeWVhck1hcmtzID0geWVhckl0ZW1zLmFwcGVuZChcImNpcmNsZVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInllYXJNYXJrXCIpXG5cdFx0XHRcdFx0XHQvLyAub24oJ21vdXNlb3ZlcicsIGV4cGFuZClcblx0XHRcdFx0XHRcdC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRjb250cmFjdCgpO1xuXHRcdFx0XHRcdFx0XHR2YXIgc2VsID0gcGFwZXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZGQpIHtyZXR1cm4gZGQueWVhcj09PWQueWVhcn0pO1xuXHRcdFx0XHRcdFx0XHR2YXIgdGhpc1llYXJJdGVtID0gZDMuc2VsZWN0KHRoaXMpO1xuXHRcdFx0XHRcdFx0XHRleHBhbmQoc2VsLCB0aGlzWWVhckl0ZW0pO1xuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0Ly8gLm9uKCdtb3VzZW91dCcsIGNvbnRyYWN0KVxuXHRcdFx0XHRcdFx0LnN0eWxlKHN0eWxlc1Zpc2libGUpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0Ly9sYWJlbCBmb3IgbnVtYmVyIG9mIHBhcGVyc1xuXHRcdFx0XHRcdHllYXJJdGVtcy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcInlcIiwgXCIuM2VtXCIpICAvL251ZGdlXG5cdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibnVtSW5kaWNhdG9yXCIpXG5cdFx0XHRcdFx0XHQudGV4dChmdW5jdGlvbihkKSB7cmV0dXJuIGQudmFsdWVzLmxlbmd0aDt9KTtcblxuXHRcdFx0XHRcdHZhciBwYXBlckl0ZW1zID0geWVhckl0ZW1zLmFwcGVuZChcImdcIikuc2VsZWN0QWxsKFwiLnBhcGVySXRlbVwiKVxuXHRcdFx0XHRcdFx0LmRhdGEoZnVuY3Rpb24oZCkge3JldHVybiBkLnZhbHVlc30pXG5cdFx0XHRcdFx0XHQuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwicGFwZXJJdGVtXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcImRhdGEteWVhclwiLCBmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhcjt9KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCwgaSkge1xuXHRcdFx0XHRcdFx0XHRkLnggPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0XHRcdGQueSA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHRcdFx0ZC5pZHggPSBpO1xuXHRcdFx0XHRcdFx0XHQvLyBkLnJhZGl1cyA9IG1haW5NaW5SYWQgKyAoMiAqIGVmU2NhbGUoZC5laWdlbmZhY3RvcikpO1xuXHRcdFx0XHRcdFx0XHRkLnJhZGl1cyA9IGVmU2NhbGVNYWluKGQubm9kZV9yYW5rKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuYXR0cihcInRpdGxlXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBmb3IgdG9vbHRpcFxuXHRcdFx0XHRcdFx0XHRcdC8vIHZhciB0ZXh0ID0gZC50aXRsZVxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHRcdCsgXCIsIFwiXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0KyBkLmF1dGhvcnMuam9pbihcIiwgXCIpXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0KyBcIiwgXCJcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0XHQrIGQuam91cm5hbFxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHRcdCsgXCIsIFwiXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0KyBkLnllYXI7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gcmV0dXJuIHRleHQ7XG5cdFx0XHRcdFx0XHRcdHZhciBzcGFuID0gJCggJzxzcGFuPicgKTtcblx0XHRcdFx0XHRcdFx0c3Bhbi5hcHBlbmQoICQoICc8cCBjbGFzcz1cInRvb2x0aXAgdGl0bGVcIj4nICkudGV4dChkLnRpdGxlKSApOyBcblx0XHRcdFx0XHRcdFx0Ly8gc3Bhbi5hcHBlbmQoICQoICc8cCBjbGFzcz1cInRvb2x0aXAgYXV0aG9yc1wiPicgKS50ZXh0KGQuYXV0aG9ycy5qb2luKFwiLCBcIikpICk7XG5cdFx0XHRcdFx0XHRcdHNwYW4uYXBwZW5kKCAkKCAnPHAgY2xhc3M9XCJ0b29sdGlwIGF1dGhvcnNcIj4nICkudGV4dChkLmF1dGhvcnMpICk7XG5cdFx0XHRcdFx0XHRcdGlmIChkLnZlbnVlKSBzcGFuLmFwcGVuZCggJCggJzxwIGNsYXNzPVwidG9vbHRpcCBqb3VybmFsXCI+JyApLnRleHQoZC52ZW51ZSkgKTsgXG5cdFx0XHRcdFx0XHRcdHNwYW4uYXBwZW5kKCAkKCAnPHAgY2xhc3M9XCJ0b29sdGlwIHllYXJcIj4nICkudGV4dChkLnllYXIpICk7IFxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gc3Bhbi5odG1sKCk7XG5cblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gdmFyIHQgPSBkMy5zZWxlY3QodGhpcykuc2VsZWN0KCcucGFwZXJMYWJlbCcpO1xuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCQoIHRoaXMgKS5wb3NpdGlvbigpKTtcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygkKCAnLm1haW4nICkucG9zaXRpb24oKS50b3AgKyBtYWluSGVpZ2h0KTtcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0dmFyIHVybCA9IGQudXJsO1xuXHRcdFx0XHRcdFx0XHQvLyB3aW5kb3cub3Blbih1cmwsJ19ibGFuaycpO1xuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHR2YXIgcGFwZXJNYXJrcyA9IHBhcGVySXRlbXMuYXBwZW5kKFwiY2lyY2xlXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcInJcIiwgMCkgIC8vZm9yIG5vd1xuXHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInBhcGVyTWFya1wiKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcblx0XHRcdFx0Y2FzZSAnaWNvbic6XG5cdFx0XHRcdFx0Ly9tYWluIGl0ZW1zXG5cdFx0XHRcdFx0dmFyIHllYXJJdGVtcyA9IG1haW5DbGlwUGF0aC5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcIi55ZWFySXRlbVwiKVxuXHRcdFx0XHRcdFx0LmRhdGEoZGF0YUJ5WWVhcilcblx0XHRcdFx0XHRcdC5lbnRlcigpLmFwcGVuZChcImdcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJ5ZWFySXRlbVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRkLnggPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0XHRcdGQueSA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHRcdFx0Ly8gZC5yYWRpdXMgPSBtYWluTWluUmFkICsgKDIgKiBlZlN1bVNjYWxlKGQuc3VtX2VpZ2VuZmFjdG9yKSk7XG5cdFx0XHRcdFx0XHRcdGQucmFkaXVzID0gZWZTdW1TY2FsZShkLnN1bV9laWdlbmZhY3Rvcik7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR2YXIgcGFwZXJJdGVtcyA9IHllYXJJdGVtcy5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcIi5wYXBlckl0ZW1cIilcblx0XHRcdFx0XHRcdC5kYXRhKGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC52YWx1ZXN9KVxuXHRcdFx0XHRcdFx0LmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInBhcGVySXRlbVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCwgaSkge1xuXHRcdFx0XHRcdFx0XHRkLnggPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0XHRcdGQueSA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHRcdFx0ZC5pZHggPSBpO1xuXHRcdFx0XHRcdFx0XHQvLyBkLnJhZGl1cyA9IG1haW5NaW5SYWQgKyAoMiAqIGVmU2NhbGUoZC5laWdlbmZhY3RvcikpO1xuXHRcdFx0XHRcdFx0XHRkLnJhZGl1cyA9IGVmU2NhbGVNYWluKGQubm9kZV9yYW5rKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjtcblx0XHRcdFx0XHRcdH0pO1xuXG5cblx0XHRcdFx0XHR2YXIgcGFwZXJNYXJrcyA9IHBhcGVySXRlbXMuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInBhcGVyTWFya1wiKVxuXHRcdFx0XHRcdFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0XHRcdFx0LnRleHQoXCJcXHVmMGY2XCIpXG5cdFx0XHRcdFx0XHQvLyAub24oJ21vdXNlb3ZlcicsIGV4cGFuZClcblx0XHRcdFx0XHRcdC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcblx0XHRcdFx0XHRcdC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRjb250cmFjdCgpO1xuXHRcdFx0XHRcdFx0XHR2YXIgc2VsID0gcGFwZXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZGQpIHtyZXR1cm4gZGQueWVhcj09PWQueWVhcn0pO1xuXHRcdFx0XHRcdFx0XHRleHBhbmQoc2VsKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHQvLyAub24oJ21vdXNlb3V0JywgY29udHJhY3QpXG5cblx0XHRcdFx0XHR2YXIgYmJveCA9IHBhcGVyTWFya3Mubm9kZSgpLmdldEJCb3goKTtcblx0XHRcdFx0XHRwYXBlckl0ZW1zLmluc2VydChcInJlY3RcIiwgXCIucGFwZXJNYXJrXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcInhcIiwgYmJveC54KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ5XCIsIGJib3gueSlcblx0XHRcdFx0XHRcdC5hdHRyKFwid2lkdGhcIiwgYmJveC53aWR0aClcblx0XHRcdFx0XHRcdC5hdHRyKFwiaGVpZ2h0XCIsIGJib3guaGVpZ2h0KVxuXHRcdFx0XHRcdFx0LnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xuXG5cdFx0XHRcdFx0Ly8gLy9tYWluIGl0ZW1zXG5cdFx0XHRcdFx0Ly8gdmFyIHBhcGVySXRlbXMgPSBtYWluQ2xpcFBhdGguYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoXCIucGFwZXJJdGVtXCIpXG5cdFx0XHRcdFx0Ly8gXHQuZGF0YShkYXRhX3RvdGFsKVxuXHRcdFx0XHRcdC8vIFx0LmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdC8vIFx0LmF0dHIoXCJjbGFzc1wiLCBcInBhcGVySXRlbVwiKVxuXHRcdFx0XHRcdC8vIFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdC8vIFx0XHRkLnggPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0Ly8gXHRcdGQueSA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHQvLyBcdFx0ZC5yYWRpdXMgPSBtYWluTWluUmFkICsgKDIgKiBlZlN1bVNjYWxlKGQuc3VtX2VpZ2VuZmFjdG9yKSk7XG5cdFx0XHRcdFx0Ly8gXHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdFx0Ly8gXHR9KTtcblx0XHRcdFx0XHQvLyB2YXIgcGFwZXJNYXJrcyA9IHBhcGVySXRlbXMuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHRcdC8vIFx0LmF0dHIoXCJjbGFzc1wiLCBcInBhcGVyTWFya1wiKVxuXHRcdFx0XHRcdC8vIFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0XHRcdC8vIFx0LnRleHQoXCJcXHVmMGY2XCIpXG5cdFx0XHRcdFx0Ly8gXHQvLyAub24oJ21vdXNlb3ZlcicsIGV4cGFuZClcblx0XHRcdFx0XHQvLyBcdC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdC8vIFx0XHRjb250cmFjdCgpO1xuXHRcdFx0XHRcdC8vIFx0XHR2YXIgc2VsID0gcGFwZXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZGQpIHtyZXR1cm4gZGQueWVhcj09PWQueWVhcn0pO1xuXHRcdFx0XHRcdC8vIFx0XHRleHBhbmQoc2VsKTtcblx0XHRcdFx0XHQvLyBcdFx0fSk7XG5cdFx0XHRcdFx0Ly8gXHQvLyAub24oJ21vdXNlb3V0JywgY29udHJhY3QpXG5cblx0XHRcdFx0XHQvLyB2YXIgeWVhckl0ZW1zID0gbWFpbkNsaXBQYXRoLmFwcGVuZChcImdcIikuc2VsZWN0QWxsKFwiLnllYXJJdGVtXCIpXG5cdFx0XHRcdFx0Ly8gXHQuZGF0YShkYXRhQnlZZWFyKVxuXHRcdFx0XHRcdC8vIFx0LmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdC8vIFx0LmF0dHIoXCJjbGFzc1wiLCBcInllYXJJdGVtXCIpXG5cdFx0XHRcdFx0Ly8gXHQuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0Ly8gXHRcdGQueCA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHQvLyBcdFx0ZC55ID0gMDsgIC8vZm9yIG5vd1xuXHRcdFx0XHRcdC8vIFx0XHRkLnJhZGl1cyA9IG1haW5NaW5SYWQgKyAoMiAqIGVmU3VtU2NhbGUoZC5zdW1fZWlnZW5mYWN0b3IpKTtcblx0XHRcdFx0XHQvLyBcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjtcblx0XHRcdFx0XHQvLyBcdH0pO1xuXHRcdFx0XHRcdC8vIHZhciB5ZWFyTWFya3MgPSB5ZWFySXRlbXMuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHRcdC8vIFx0LmF0dHIoXCJjbGFzc1wiLCBcInllYXJNYXJrXCIpXG5cdFx0XHRcdFx0Ly8gXHQuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcIkZvbnRBd2Vzb21lXCIpXG5cdFx0XHRcdFx0Ly8gXHQudGV4dChcIlxcdWYwZjZcIilcblx0XHRcdFx0XHQvLyBcdC8vIC5vbignbW91c2VvdmVyJywgZXhwYW5kKVxuXHRcdFx0XHRcdC8vIFx0Lm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0Ly8gXHRcdGNvbnRyYWN0KCk7XG5cdFx0XHRcdFx0Ly8gXHRcdHZhciBzZWwgPSBwYXBlckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkZCkge3JldHVybiBkZC55ZWFyPT09ZC55ZWFyfSk7XG5cdFx0XHRcdFx0Ly8gXHRcdGV4cGFuZChzZWwpO1xuXHRcdFx0XHRcdC8vIFx0XHR9KTtcblx0XHRcdFx0XHQvLyBcdC8vIC5vbignbW91c2VvdXQnLCBjb250cmFjdClcblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFxuXHRcdFx0fVxuXG5cblx0XHRcdHZhciBwYXBlckxhYmVscyA9IHBhcGVySXRlbXMuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHQuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJwYXBlckxhYmVsXCIpXG5cdFx0XHRcdC5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpXG5cdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC0xNSwwKVwiKSAgLy8gbnVkZ2UgbGVmdFxuXHRcdFx0XHQvLyAudGV4dChmdW5jdGlvbihkKSB7cmV0dXJuIGQudGl0bGU7fSk7XG5cdFx0XHRcdC5odG1sKGZ1bmN0aW9uKGQpIHtyZXR1cm4gJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCInICsgZC51cmwgKyAnXCI+JyArIGQudGl0bGUgKyAnPC9hPic7fSk7XG5cblxuXG5cdFx0XHQvL21pbmkgbGFiZWxzXG5cdFx0XHQvLyBtaW5pLmFwcGVuZChcImdcIikuc2VsZWN0QWxsKFwiLm1pbmlMYWJlbHNcIilcblx0XHRcdC8vIFx0LmRhdGEoZGF0YSlcblx0XHRcdC8vIFx0LmVudGVyKCkuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0Ly8gXHQudGV4dChmdW5jdGlvbihkKSB7cmV0dXJuIGQuaWQ7fSlcblx0XHRcdC8vIFx0LmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4geChkLnN0YXJ0KTt9KVxuXHRcdFx0Ly8gXHQuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkge3JldHVybiB5MihkLmxhbmUgKyAuNSk7fSlcblx0XHRcdC8vIFx0LmF0dHIoXCJkeVwiLCBcIi41ZXhcIik7XG5cblx0XHRcdC8vYnJ1c2hcblx0XHRcdHZhciBicnVzaCA9IGQzLnN2Zy5icnVzaCgpXG5cdFx0XHRcdFx0XHRcdFx0LngoeClcblx0XHRcdFx0XHRcdFx0XHQub24oXCJicnVzaFwiLCBkaXNwbGF5KTtcblxuXHRcdFx0bWluaS5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJ4IGJydXNoXCIpXG5cdFx0XHRcdC5jYWxsKGJydXNoKVxuXHRcdFx0XHQuc2VsZWN0QWxsKFwicmVjdFwiKVxuXHRcdFx0XHQuYXR0cihcInlcIiwgMSlcblx0XHRcdFx0LmF0dHIoXCJoZWlnaHRcIiwgbWluaUhlaWdodCAtIDEpO1xuXG5cdFx0XHR2YXIgZXh0ZW50TGluZXMgPSBbXTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMiA7IGkrKykge1xuXHRcdFx0XHRleHRlbnRMaW5lcy5wdXNoKGNoYXJ0LmFwcGVuZChcImxpbmVcIikuYXR0cihcImNsYXNzXCIsIFwiZXh0ZW50TGluZVwiKSk7XG5cdFx0XHR9XG5cdFx0XHRmdW5jdGlvbiB1cGRhdGVFeHRlbnRMaW5lcyhsZWZ0LCByaWdodCkge1xuXHRcdFx0XHRpZiAoYnJ1c2guZW1wdHkoKSkge1xuXHRcdFx0XHRcdGV4dGVudExpbmVzLmZvckVhY2goZnVuY3Rpb24oc2VsKSB7c2VsLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7fSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRleHRlbnRMaW5lcy5mb3JFYWNoKGZ1bmN0aW9uKHNlbCkge3NlbC5zdHlsZShcImRpc3BsYXlcIiwgXCJcIik7fSlcblx0XHRcdFx0XHRleHRlbnRMaW5lc1swXS5hdHRyKFwieDFcIiwgbVszXSlcblx0XHRcdFx0XHRcdC5hdHRyKFwieTFcIiwgbVswXSlcblx0XHRcdFx0XHRcdC5hdHRyKFwieDJcIiwgbGVmdCArIG1bM10pXG5cdFx0XHRcdFx0XHQuYXR0cihcInkyXCIsIChtYWluSGVpZ2h0ICsgbVswXSkpO1xuXHRcdFx0XHRcdGV4dGVudExpbmVzWzFdLmF0dHIoXCJ4MVwiLCB3K21bM10pXG5cdFx0XHRcdFx0XHQuYXR0cihcInkxXCIsIG1bMF0pXG5cdFx0XHRcdFx0XHQuYXR0cihcIngyXCIsIHJpZ2h0ICsgbVszXSlcblx0XHRcdFx0XHRcdC5hdHRyKFwieTJcIiwgKG1haW5IZWlnaHQgKyBtWzBdKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dmFyIHNjcm9sbER1ciA9IDE1MDtcblx0XHRcdGZ1bmN0aW9uIG1vdmVCcnVzaChkaXJlY3Rpb24pIHtcblx0XHRcdFx0Ly8gaWYgKGJydXNoLmVtcHR5KCkgfHwgbWluRXh0ZW50PHRpbWVCZWdpbiB8fCBtYXhFeHRlbnQ+dGltZUVuZCkge1xuXHRcdFx0XHRpZiAoYnJ1c2guZW1wdHkoKSkge1xuXHRcdFx0XHRcdG1pbkV4dGVudCA9ICh0aW1lRW5kICsgdGltZUJlZ2luKSAvIDI7XG5cdFx0XHRcdFx0bWF4RXh0ZW50ID0gKCAodGltZUVuZCArIHRpbWVCZWdpbikgLyAyICkgKyAxO1xuXHRcdFx0XHRcdGNoYW5nZUV4dGVudChtaW5FeHRlbnQsIG1heEV4dGVudCwgMCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN3aXRjaCAoZGlyZWN0aW9uKSB7XG5cdFx0XHRcdFx0Y2FzZSAnbGVmdCc6XG5cdFx0XHRcdFx0XHRjaGFuZ2VFeHRlbnQoTWF0aC5yb3VuZChtaW5FeHRlbnQtMSksIE1hdGgucm91bmQobWF4RXh0ZW50LTEpLCBzY3JvbGxEdXIsIFwibGluZWFyXCIpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlICdyaWdodCc6XG5cdFx0XHRcdFx0XHRjaGFuZ2VFeHRlbnQoTWF0aC5yb3VuZChtaW5FeHRlbnQrMSksIE1hdGgucm91bmQobWF4RXh0ZW50KzEpLCBzY3JvbGxEdXIsIFwibGluZWFyXCIpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlICd6b29tSW4nOlxuXHRcdFx0XHRcdFx0Y2hhbmdlRXh0ZW50KE1hdGgucm91bmQobWluRXh0ZW50KzEpLCBNYXRoLnJvdW5kKG1heEV4dGVudC0xKSwgc2Nyb2xsRHVyLCBcImxpbmVhclwiKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSAnem9vbU91dCc6XG5cdFx0XHRcdFx0XHRjaGFuZ2VFeHRlbnQoTWF0aC5yb3VuZChtaW5FeHRlbnQtMSksIE1hdGgucm91bmQobWF4RXh0ZW50KzEpLCBzY3JvbGxEdXIsIFwibGluZWFyXCIpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzY3JvbGxJdGVtcyA9IG1haW5DbGlwUGF0aC5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInNjcm9sbEl0ZW1zXCIpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIChtYWluSGVpZ2h0KjAuNykgKyBcIilcIik7XG5cdFx0XHRzY3JvbGxJdGVtcy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJsZWZ0QXJyb3dcIilcblx0XHRcdFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0XHQudGV4dChcIlxcdWYwNjBcIilcblx0XHRcdFx0LmF0dHIoXCJ4XCIsIDApXG5cdFx0XHRcdC8vIC5hdHRyKFwieVwiLCBtYWluSGVpZ2h0IC8gMilcblx0XHRcdFx0Ly8gLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMS41ZW1cIilcblx0XHRcdFx0Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Ly8gY2hhbmdlRXh0ZW50KE1hdGgucm91bmQobWluRXh0ZW50LTEpLCBNYXRoLnJvdW5kKG1heEV4dGVudC0xKSwgc2Nyb2xsRHVyLCBcImxpbmVhclwiKTtcblx0XHRcdFx0XHRtb3ZlQnJ1c2goJ2xlZnQnKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdHNjcm9sbEl0ZW1zLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInJpZ2h0QXJyb3dcIilcblx0XHRcdFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0XHQudGV4dChcIlxcdWYwNjFcIilcblx0XHRcdFx0LmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuXHRcdFx0XHQuYXR0cihcInhcIiwgdylcblx0XHRcdFx0Ly8gLmF0dHIoXCJ5XCIsIG1haW5IZWlnaHQgLyAyKVxuXHRcdFx0XHQvLyAuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxLjVlbVwiKVxuXHRcdFx0XHQub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQvLyBjaGFuZ2VFeHRlbnQoTWF0aC5yb3VuZChtaW5FeHRlbnQrMSksIE1hdGgucm91bmQobWF4RXh0ZW50KzEpLCBzY3JvbGxEdXIsIFwibGluZWFyXCIpO1xuXHRcdFx0XHRcdG1vdmVCcnVzaCgncmlnaHQnKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0dmFyIHpvb21JdGVtcyA9IHNjcm9sbEl0ZW1zLmFwcGVuZChcImdcIilcblx0XHRcdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwiem9vbUl0ZW1zXCIpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAody1tWzFdLTEwKSArIFwiLDMwKVwiKVxuXHRcdFx0XHRcdFx0XHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgLjAxKVxuXHRcdFx0XHRcdFx0XHRcdC5vbihcIm1vdXNlb3ZlclwiLCB6b29tTW91c2VPdmVyKVxuXHRcdFx0XHRcdFx0XHRcdC5vbihcIm1vdXNlb3V0XCIsIHpvb21Nb3VzZU91dCk7XG5cdFx0XHQvLyBzY3JvbGxJdGVtcy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHR6b29tSXRlbXMuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwiem9vbUluXCIpXG5cdFx0XHRcdC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwiRm9udEF3ZXNvbWVcIilcblx0XHRcdFx0LnRleHQoXCJcXHVmMTk2XCIpICAvLyBodHRwOi8vZm9udGF3ZXNvbWUuaW8vaWNvbi9wbHVzLXNxdWFyZS1vL1xuXHRcdFx0XHQvLyAuYXR0cihcInhcIiwgMTApXG5cdFx0XHRcdC8vIC5hdHRyKFwieVwiLCBtYWluSGVpZ2h0IC8gMilcblx0XHRcdFx0Ly8gLmF0dHIoXCJ4XCIsIHctbVsxXS0xMClcblx0XHRcdFx0Ly8gLmF0dHIoXCJ5XCIsIDMwKVxuXHRcdFx0XHQvLyAuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxLjVlbVwiKVxuXHRcdFx0XHQub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQvLyBjaGFuZ2VFeHRlbnQoTWF0aC5yb3VuZChtaW5FeHRlbnQrMSksIE1hdGgucm91bmQobWF4RXh0ZW50LTEpLCBzY3JvbGxEdXIsIFwibGluZWFyXCIpO1xuXHRcdFx0XHRcdG1vdmVCcnVzaCgnem9vbUluJylcblx0XHRcdFx0XHR9KTtcblx0XHRcdHpvb21JdGVtcy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJ6b29tT3V0XCIpXG5cdFx0XHRcdC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwiRm9udEF3ZXNvbWVcIilcblx0XHRcdFx0LnRleHQoXCJcXHVmMTQ3XCIpICAvLyBodHRwOi8vZm9udGF3ZXNvbWUuaW8vaWNvbi9taW51cy1zcXVhcmUtby9cblx0XHRcdFx0Ly8gLmF0dHIoXCJ5XCIsIG1haW5IZWlnaHQgLyAyKVxuXHRcdFx0XHQvLyAuYXR0cihcInhcIiwgdy1tWzFdLTEwKVxuXHRcdFx0XHQvLyAuYXR0cihcInlcIiwgNTApXG5cdFx0XHRcdC5hdHRyKFwieVwiLCAyMClcblx0XHRcdFx0Ly8gLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMS41ZW1cIilcblx0XHRcdFx0Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Ly8gY2hhbmdlRXh0ZW50KE1hdGgucm91bmQobWluRXh0ZW50LTEpLCBNYXRoLnJvdW5kKG1heEV4dGVudCsxKSwgc2Nyb2xsRHVyLCBcImxpbmVhclwiKTtcblx0XHRcdFx0XHRtb3ZlQnJ1c2goJ3pvb21PdXQnKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0ZnVuY3Rpb24gem9vbU1vdXNlT3ZlcigpIHtcblx0XHRcdFx0Ly8gJCggJy56b29tSW4sIC56b29tT3V0JyApLmZhZGVUbyg0MDAsIDEpO1xuXHRcdFx0XHQkKCAnLnpvb21JdGVtcycgKS5zdG9wKCkuZmFkZVRvKDQwMCwgMSk7XG5cdFx0XHR9XG5cdFx0XHRmdW5jdGlvbiB6b29tTW91c2VPdXQoKSB7XG5cdFx0XHRcdC8vICQoICcuem9vbUluLCAuem9vbU91dCcgKS5mYWRlVG8oNDAwLCAuMDEpO1xuXHRcdFx0XHQkKCAnLnpvb21JdGVtcycgKS5zdG9wKCkuZmFkZVRvKDQwMCwgLjAxKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWNvbiB0byBjbGVhciB0aGUgYnJ1c2guIEZpbmlzaCBpbml0aWFsaXppbmcgaXQgaW4gZGlzcGxheSgpXG5cdFx0XHQvLyB2YXIgY2xlYXJCcnVzaEljb24gPSBkMy5zZWxlY3QoXCIuYnJ1c2hcIikuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0dmFyIGNsZWFyQnJ1c2hJY29uID0gbWluaS5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJjbGVhckJydXNoSWNvblwiKVxuXHRcdFx0XHQuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcIkZvbnRBd2Vzb21lXCIpXG5cdFx0XHRcdC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjFlbVwiKVxuXHRcdFx0XHQuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG5cdFx0XHRcdC5hdHRyKFwidGl0bGVcIiwgXCJDbGVhciB0aGUgdGltZWxpbmUgaW4gb3JkZXIgdG8gZHJhdyBhIG5ldyByZWdpb25cIilcblx0XHRcdFx0LnRleHQoXCJcXHVmMDBkXCIpO1xuXG5cdFx0XHRjaGFydC5vbihcIndoZWVsLnpvb21cIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKGQzLmV2ZW50LndoZWVsRGVsdGFZPjApIHtcblx0XHRcdFx0XHRcdG1vdmVCcnVzaCgnem9vbUluJyk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChkMy5ldmVudC53aGVlbERlbHRhWTwwKSB7XG5cdFx0XHRcdFx0XHRtb3ZlQnJ1c2goJ3pvb21PdXQnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGQzLmV2ZW50LndoZWVsRGVsdGFYPjApIHtcblx0XHRcdFx0XHRcdG1vdmVCcnVzaCgnbGVmdCcpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZDMuZXZlbnQud2hlZWxEZWx0YVg8MCkge1xuXHRcdFx0XHRcdFx0bW92ZUJydXNoKCdyaWdodCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdC8vIGluaXRpYWxpemUgYnJ1c2hcblx0XHRcdHZhciBtaWRwb2ludFllYXIgPSAoIHRpbWVFbmQgKyB0aW1lQmVnaW4gKSAvIDIsXG5cdFx0XHRcdGJydXNoSW5pdCA9IFttaWRwb2ludFllYXIsIG1pZHBvaW50WWVhcl07XG5cdFx0XG5cdFx0XHQvLyBicnVzaC5leHRlbnQoYnJ1c2hJbml0KTtcblx0XHRcdG1pbmkuc2VsZWN0KFwiLmJydXNoXCIpLmNhbGwoYnJ1c2guZXh0ZW50KGJydXNoSW5pdCkpO1xuXG5cdFx0XHRkaXNwbGF5KCk7XG5cdFx0XHRcblx0XHRcdCQoIGRvY3VtZW50ICkudHJpZ2dlciggXCJ0aW1lbGluZVZpczppbml0Q29tcGxldGVcIiApO1xuXG5cblx0XHRcdC8vIC8vIEknbSBub3Qgc3VyZSB0aGVyZSdzIGEgd2F5IHRvIHVzZSBkMyB0cmFuc2l0aW9ucyB0byBjb250cm9sIHRoZSBicnVzaCwgYnV0IGhlcmUncyBhIGhhY2t5IHdheSBvZiBkb2luZyBpdCBtYW51YWxseS5cblx0XHRcdC8vIHZhciBkbHkgPSAzMDtcblx0XHRcdC8vIGZ1bmN0aW9uIGJydXNoVHJhbnNpdGlvbihkbHkpIHtcblx0XHRcdC8vIFx0Y3VyckV4dGVudCA9IFticnVzaC5leHRlbnQoKVswXSwgYnJ1c2guZXh0ZW50KClbMV1dO1xuXHRcdFx0Ly8gXHRicnVzaChkMy5zZWxlY3QoXCIuYnJ1c2hcIikudHJhbnNpdGlvbigpLmR1cmF0aW9uKGRseSkuY2FsbChkaXNwbGF5KSk7XG5cdFx0XHQvLyBcdC8vIGJydXNoLmV2ZW50KGQzLnNlbGVjdChcIi5icnVzaFwiKS50cmFuc2l0aW9uKCkuZGVsYXkoZGx5KS5kdXJhdGlvbigwKSk7XG5cdFx0XHQvLyB9XG5cdFx0XHQvLyAvLyBicnVzaC5leHRlbnQoWzE5NzAsMjAwMF0pO1xuXHRcdFx0Ly8gdmFyIG1pbkV4dGVudCA9IGJydXNoLmV4dGVudCgpWzBdLFxuXHRcdFx0Ly8gXHRtYXhFeHRlbnQgPSBicnVzaC5leHRlbnQoKVsxXTtcblx0XHRcdC8vIHZhciBkZXN0aW5hdGlvbkV4dGVudCA9IDE5OTg7XG5cdFx0XHQvLyB2YXIgaSA9IG1heEV4dGVudDtcblx0XHRcdC8vIHZhciByZWZyZXNoSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gXHQgICBcdGkgPSBpICsgMC4yO1xuXHRcdFx0Ly8gXHRcdGJydXNoLmV4dGVudChbbWluRXh0ZW50LCBpXSk7XG5cdFx0XHQvLyBcdFx0YnJ1c2hUcmFuc2l0aW9uKGRseSk7XG5cdFx0XHQvLyBcdFx0aWYgKGkgPj0gZGVzdGluYXRpb25FeHRlbnQpIHtcblx0XHRcdC8vIFx0XHRcdGNsZWFySW50ZXJ2YWwocmVmcmVzaEludGVydmFsSWQpO1xuXHRcdFx0Ly8gXHRcdH1cblx0XHRcdC8vIFx0fSwgZGx5KTtcblxuXHRcdFx0Ly8gLy8gYXR0ZW1wdCB0byB1c2UgdHdlZW4gZnVuY3Rpb24gdG8gZG8gaXQuIG5vdCByZWFsbHkgd29ya2luZ1xuXHRcdFx0Ly8gYnJ1c2guZXh0ZW50KFsxOTcwLCAyMDA1XSk7XG5cdFx0XHQvLyBicnVzaChkMy5zZWxlY3QoXCIuYnJ1c2hcIikudHJhbnNpdGlvbigpLmR1cmF0aW9uKDUwMDApXG5cdFx0XHQvLyBcdFx0LnR3ZWVuKFwic2lkZS1lZmZlY3RzXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24odCwgdHQsIHR0dCkgeyBjb25zb2xlLmxvZyhicnVzaC5leHRlbnQoKVswXSk7XG5cdFx0XHQvLyBcdFx0XHRicnVzaC5ldmVudChkMy5zZWxlY3QoXCIuYnJ1c2hcIikudHJhbnNpdGlvbigpLmRlbGF5KHQpLmR1cmF0aW9uKDApKTtcblx0XHRcdC8vIFx0XHR9O30pKTtcblx0XHRcdC8vIGJydXNoKGQzLnNlbGVjdChcIi5icnVzaFwiKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkpO1xuXHRcdFx0Ly8gYnJ1c2guZXZlbnQoZDMuc2VsZWN0KFwiLmJydXNoXCIpLnRyYW5zaXRpb24oKS5kZWxheSgxMDAwKS5kdXJhdGlvbigwKSk7XG5cblxuXHRcdFx0ZnVuY3Rpb24gY2hhbmdlRXh0ZW50KHllYXIxLCB5ZWFyMiwgZHVyYXRpb24sIGVhc2UsIGRlbGF5KSB7XG5cdFx0XHRcdGlmIChkdXJhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0ZHVyYXRpb24gPSAxMDAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlYXNlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRlYXNlID0gXCJjdWJpYy1pbi1vdXRcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGVsYXkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGRlbGF5ID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoeWVhcjEgPCB0aW1lQmVnaW4pIHtcblx0XHRcdFx0XHR5ZWFyMSA9IHRpbWVCZWdpbjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoeWVhcjIgPiB0aW1lRW5kKSB7XG5cdFx0XHRcdFx0eWVhcjIgPSB0aW1lRW5kO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJydXNoLmV2ZW50KG1pbmkuc2VsZWN0KFwiLmJydXNoXCIpLnRyYW5zaXRpb24oKS5kZWxheShkZWxheSkuZHVyYXRpb24oZHVyYXRpb24pLmVhc2UoZWFzZSkuY2FsbChicnVzaC5leHRlbnQoW3llYXIxLCB5ZWFyMl0pKSk7XG5cblx0XHRcdH1cblx0XHRcdC8vXG5cdFx0XHQvLyBUaGlzIHdvcmtzISAoYWZ0ZXIgbW9kaWZ5aW5nIHRoZSBkaXNwbGF5KCkgZnVuY3Rpb24uIHNlZSB0aGUgbm90ZSBhdCB0aGUgdG9wIG9mIGRpc3BsYXkoKSlcblx0XHRcdC8vIGJydXNoLmV2ZW50KG1pbmkuc2VsZWN0KFwiLmJydXNoXCIpLnRyYW5zaXRpb24oKS5kZWxheSgxMDAwKS5kdXJhdGlvbigxMDAwKS5jYWxsKGJydXNoLmV4dGVudChbMTk3MCwgMjAwMF0pKVxuXHRcdFx0Ly8gXHRcdC5lYWNoKFwiZW5kXCIsIGZ1bmN0aW9uKCkge2NvbnNvbGUubG9nKFwiaW5pdGlhbGl6ZWRcIik7fSkpO1xuXHRcdFx0Ly8gdmFyIGluaXREdXJhdGlvbiA9IDEwMDAsXG5cdFx0XHQvLyBcdGluaXREZWxheSA9IDEwMDA7XG5cdFx0XHQvLyBjaGFuZ2VFeHRlbnQoMTk3MCwgMjAwMCwgaW5pdER1cmF0aW9uLCBcImN1YmljLWluLW91dFwiLCBpbml0RGVsYXkpO1xuXHRcdFx0Ly8gZDMudHJhbnNpdGlvbihcImluaXREZW1vVHJhbnNpdGlvblwiKS5kZWxheShpbml0RGVsYXkgKyBpbml0RHVyYXRpb24pXG5cdFx0XHQvLyBcdC5lYWNoKFwiZW5kXCIsIGRlbW9FeHBhbmQpO1xuXHRcdFx0Ly8gZGVtb0luaXQoKTtcblxuXHRcdFx0Ly8gbm90IHVzaW5nIHRoaXMgY3VycmVudGx5XG5cdFx0XHRmdW5jdGlvbiBleHBhbmRBbGwoKSB7XG5cdFx0XHRcdGV4cGFuZChwYXBlckl0ZW1zKTtcblx0XHRcdH1cblx0XHRcdHZhciBtYXhFRiA9IGQzLm1heChkYXRhX3RvdGFsLCBmdW5jdGlvbihkKSB7cmV0dXJuIGQubm9kZV9yYW5rO30pO1xuXG5cdFx0XHRmdW5jdGlvbiBjbGVhckJydXNoKCkge1xuXHRcdFx0XHR2YXIgbWlkID0gKGJydXNoLmV4dGVudCgpWzFdICsgYnJ1c2guZXh0ZW50KClbMF0pIC8gMjtcblx0XHRcdFx0Y2hhbmdlRXh0ZW50KG1pZCwgbWlkLCAwKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0ZnVuY3Rpb24gZGlzcGxheSgpIHtcblx0XHRcdFx0Ly8gbm90ZTogY2FsY3VsYXRpbmcgdGhlIGJydXNoIGV4dGVudCB1c2luZyBicnVzaC5leHRlbnQoKSBkb2Vzbid0IHJlYWxseSB3b3JrIGhlcmUgKHdpdGggdHJhbnNpdGlvbiB0aWNrcylcblx0XHRcdFx0Ly8gYmVjYXVzZSBpdCBnb2VzIHRoZSBmaW5hbCBleHRlbnQgdmFsdWVzIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHRyYW5zaXRpb24uXG5cdFx0XHRcdC8vIFNvIGluc3RlYWQsIGdldCB0aGUgbWVhc3VyZW1lbnRzIG9mIHRoZSBicnVzaCBlbGVtZW50IGFuZCBjYWxjdWxhdGUgdGhlIGV4dGVudCB1c2luZyB0aGUgc2NhbGUgKHguaW52ZXJ0KCkpXG5cdFx0XHRcdHZhciBleHRlbnRTZWxlY3QgPSBtaW5pLnNlbGVjdChcIi5icnVzaFwiKS5zZWxlY3QoXCIuZXh0ZW50XCIpO1xuXHRcdFx0XHR2YXIgbWluRXh0ZW50U2NyZWVuID0gK2V4dGVudFNlbGVjdC5hdHRyKFwieFwiKTtcblx0XHRcdFx0dmFyIG1heEV4dGVudFNjcmVlbiA9IG1pbkV4dGVudFNjcmVlbiArICgrZXh0ZW50U2VsZWN0LmF0dHIoXCJ3aWR0aFwiKSk7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHguaW52ZXJ0KG1heEV4dGVudFNjcmVlbikpO1xuXHRcdFx0XHQvLyB2YXIgbWluRXh0ZW50ID0gYnJ1c2guZXh0ZW50KClbMF0sXG5cdFx0XHRcdC8vIFx0bWF4RXh0ZW50ID0gYnJ1c2guZXh0ZW50KClbMV0sXG5cdFx0XHRcdG1pbkV4dGVudCA9IHguaW52ZXJ0KG1pbkV4dGVudFNjcmVlbik7XG5cdFx0XHRcdG1heEV4dGVudCA9IHguaW52ZXJ0KG1heEV4dGVudFNjcmVlbik7XG5cblxuXG5cdFx0XHRcdC8vIGhpZGUgYXJyb3dzIGlmIHlvdSBjYW4ndCBnbyBhbnkgZnVydGhlclxuXHRcdFx0XHRpZiAobWluRXh0ZW50IDw9IHRpbWVCZWdpbikge1xuXHRcdFx0XHRcdGQzLnNlbGVjdChcIi5sZWZ0QXJyb3dcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkMy5zZWxlY3QoXCIubGVmdEFycm93XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIlwiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobWF4RXh0ZW50ID49IHRpbWVFbmQpIHtcblx0XHRcdFx0XHRkMy5zZWxlY3QoXCIucmlnaHRBcnJvd1wiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGQzLnNlbGVjdChcIi5yaWdodEFycm93XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIlwiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBoaWRlIHRoZSB6b29tSW4gYnV0dG9uIGlmIHdlJ3JlIHpvb21lZCBpbiB0b28gZmFyXG5cdFx0XHRcdGlmIChtYXhFeHRlbnQgLSBtaW5FeHRlbnQgPD0gMikge1xuXHRcdFx0XHRcdC8vIGQzLnNlbGVjdChcIi56b29tSW5cIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdFx0XHRkMy5zZWxlY3QoXCIuem9vbUluXCIpLmNsYXNzZWQoXCJoaWRkZW5cIiwgdHJ1ZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gZDMuc2VsZWN0KFwiLnpvb21JblwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJcIik7XG5cdFx0XHRcdFx0ZDMuc2VsZWN0KFwiLnpvb21JblwiKS5jbGFzc2VkKFwiaGlkZGVuXCIsIGZhbHNlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChicnVzaC5lbXB0eSgpKSB7XG5cdFx0XHRcdFx0Y2xlYXJCcnVzaEljb24uc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdFx0XHRkMy5zZWxlY3QoXCIubGVmdEFycm93XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdFx0ZDMuc2VsZWN0KFwiLnJpZ2h0QXJyb3dcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjbGVhckJydXNoSWNvbi5zdHlsZShcImRpc3BsYXlcIiwgXCJcIilcblx0XHRcdFx0XHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgMClcblx0XHRcdFx0XHRcdC8vIC5zdHlsZShcInotaW5kZXhcIiwgLTk5KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgY29uc3RydWN0VHJhbnNsYXRlKG1heEV4dGVudFNjcmVlbi0yLCAxNSkpXG5cdFx0XHRcdFx0XHQudHJhbnNpdGlvbigpLmR1cmF0aW9uKDMwMClcblx0XHRcdFx0XHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgLjQpO1xuXHRcdFx0XHRcdGNsZWFyQnJ1c2hJY29uLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRjbGVhckJydXNoKCk7XG5cdFx0XHRcdFx0XHRjb250cmFjdCgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblxuXG5cdFx0XHRcdC8vIEhpZGUgbWFpbiBpdGVtcyBpZiB0aGUgYnJ1c2ggaXMgZW1wdHlcblx0XHRcdFx0aWYgKGJydXNoLmVtcHR5KCkpIHtcblx0XHRcdFx0XHQvLyB5ZWFySXRlbXMuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdFx0XHQvLyBjaGFuZ2VFeHRlbnQodGltZUJlZ2luLCB0aW1lRW5kLCAwKTtcblx0XHRcdFx0XHQvL1xuXHRcdFx0XHRcdC8vIHNob3cgYWxsIG1haW4gaXRlbXMsIGJ1dCBrZWVwIHRoZSBicnVzaCBoaWRkZW5cblx0XHRcdFx0XHR1cGRhdGVNYWluKHRpbWVCZWdpbix0aW1lRW5kKTtcblx0XHRcdFx0XHQvLyB0aGlzIHdpbGwgcmVtb3ZlIHRoZSBleHRlbnQgbGluZXM6XG5cdFx0XHRcdFx0dXBkYXRlRXh0ZW50TGluZXMoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBkMy5zZWxlY3QoXCIuYnJ1c2hcIikuYXR0cihcImRpc3BsYXlcIiwgXCJcIik7XG5cdFx0XHRcdFx0dXBkYXRlTWFpbihtaW5FeHRlbnQsIG1heEV4dGVudCk7XG5cdFx0XHRcdFx0dXBkYXRlRXh0ZW50TGluZXMobWluRXh0ZW50U2NyZWVuLCBtYXhFeHRlbnRTY3JlZW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIHVwZGF0ZU1haW4obWluRXh0ZW50LCBtYXhFeHRlbnQpIHtcblx0XHRcdFx0XG5cdFx0XHRcdHN3aXRjaCAobWFya1R5cGUpIHtcblx0XHRcdFx0XHRjYXNlICdjaXJjbGUnOlxuXHRcdFx0XHRcdFx0dmFyIHZpc0l0ZW1zID0geWVhckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhciA8IG1heEV4dGVudCAmJiBkLnllYXIgPiBtaW5FeHRlbnQ7fSlcblx0XHRcdFx0XHRcdHZhciBub3RWaXNJdGVtcyA9IHllYXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXI+PSBtYXhFeHRlbnQgfHwgZC55ZWFyIDw9IG1pbkV4dGVudDt9KTtcblx0XHRcdFx0XHRcdHZpc0l0ZW1zLnN0eWxlKFwiZGlzcGxheVwiLCBcIlwiKTtcblx0XHRcdFx0XHRcdG5vdFZpc0l0ZW1zLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhicnVzaC5leHRlbnQoKSk7XG5cblx0XHRcdFx0XHRcdC8vIG1pbmkuc2VsZWN0KFwiLmJydXNoXCIpXG5cdFx0XHRcdFx0XHQvLyBcdC5jYWxsKGJydXNoLmV4dGVudChbbWluRXh0ZW50LCBtYXhFeHRlbnRdKSk7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhtYXhFeHRlbnQtbWluRXh0ZW50KTtcblxuXHRcdFx0XHRcdFx0eDEuZG9tYWluKFttaW5FeHRlbnQsIG1heEV4dGVudF0pO1xuXG5cdFx0XHRcdFx0XHQvLyB1cGRhdGUgc3R5bGVzIG9mIG1pbmkgaXRlbXMgdGhhdCBhcmUgdmlzaWJsZSBpbiB0aGUgbWFpbiBkaXNwbGF5LlxuXHRcdFx0XHRcdFx0Ly8gcmVzZXQgYWxsIHRvIG5vcm1hbCwgdGhlbiBzdHlsZSBqdXN0IHRoZSB2aXNpYmxlIG9uZXNcblx0XHRcdFx0XHRcdC8vIG1pbmlJdGVtcy5zdHlsZShzdHlsZXNCYXNlKTtcblx0XHRcdFx0XHRcdG1pbmlJdGVtcy5zdHlsZShzdHlsZXNWaXNpYmxlKTtcblx0XHRcdFx0XHRcdG1pbmlJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhtaW5FeHRlbnQpO1xuXHRcdFx0XHRcdFx0XHR2YXIgbWF0Y2ggPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0dmlzSXRlbXMuZm9yRWFjaChmdW5jdGlvbihkZCkge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChkLmlkPT1kZC5maXJzdFRpdGxlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtYXRjaCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0XHRcdFx0XHR9KS5zdHlsZShzdHlsZXNWaXNpYmxlKTtcblxuXHRcdFx0XHRcdFx0Ly91cGRhdGUgbWFpbiBpdGVtIG1hcmtzXG5cdFx0XHRcdFx0XHR2aXNJdGVtcy5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0ZC54ID0geDEoZC55ZWFyKTtcblx0XHRcdFx0XHRcdFx0ZC55ID0geTEoZC5sYW5lKSArIG1haW5NaW5SYWQ7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0eWVhck1hcmtzLmF0dHIoXCJyXCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC5yYWRpdXM7fSk7XG5cblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSAnaWNvbic6XG5cdFx0XHRcdFx0XHR2YXIgdmlzSXRlbXMgPSB5ZWFySXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyIDwgbWF4RXh0ZW50ICYmIGQueWVhciA+IG1pbkV4dGVudDt9KVxuXHRcdFx0XHRcdFx0dmFyIG5vdFZpc0l0ZW1zID0geWVhckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhcj49IG1heEV4dGVudCB8fCBkLnllYXIgPD0gbWluRXh0ZW50O30pO1xuXHRcdFx0XHRcdFx0dmlzSXRlbXMuc3R5bGUoXCJkaXNwbGF5XCIsIFwiXCIpO1xuXHRcdFx0XHRcdFx0bm90VmlzSXRlbXMuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGJydXNoLmV4dGVudCgpKTtcblxuXHRcdFx0XHRcdFx0Ly8gbWluaS5zZWxlY3QoXCIuYnJ1c2hcIilcblx0XHRcdFx0XHRcdC8vIFx0LmNhbGwoYnJ1c2guZXh0ZW50KFttaW5FeHRlbnQsIG1heEV4dGVudF0pKTtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKG1heEV4dGVudC1taW5FeHRlbnQpO1xuXHRcdFx0XHRcdFx0Ly8gdXBkYXRlRXh0ZW50TGluZXMobWluRXh0ZW50U2NyZWVuLCBtYXhFeHRlbnRTY3JlZW4pO1xuXG5cdFx0XHRcdFx0XHR4MS5kb21haW4oW21pbkV4dGVudCwgbWF4RXh0ZW50XSk7XG5cblx0XHRcdFx0XHRcdC8vIHVwZGF0ZSBzdHlsZXMgb2YgbWluaSBpdGVtcyB0aGF0IGFyZSB2aXNpYmxlIGluIHRoZSBtYWluIGRpc3BsYXkuXG5cdFx0XHRcdFx0XHQvLyByZXNldCBhbGwgdG8gbm9ybWFsLCB0aGVuIHN0eWxlIGp1c3QgdGhlIHZpc2libGUgb25lc1xuXHRcdFx0XHRcdFx0bWluaUl0ZW1zLnN0eWxlKHN0eWxlc0Jhc2UpO1xuXHRcdFx0XHRcdFx0bWluaUl0ZW1zLmZpbHRlcihmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBtYXRjaCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHR2aXNJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGRkKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGQuaWQ9PWRkLmZpcnN0VGl0bGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdG1hdGNoID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHRcdFx0XHRcdH0pLnN0eWxlKHN0eWxlc1Zpc2libGUpO1xuXG5cdFx0XHRcdFx0XHQvL3VwZGF0ZSBtYWluIGl0ZW0gbWFya3Ncblx0XHRcdFx0XHRcdHZpc0l0ZW1zLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHQvLyBkLnggPSB4MShkLnllYXIpIC0gMTA7XG5cdFx0XHRcdFx0XHRcdGQueCA9IHgxKGQueWVhcik7XG5cdFx0XHRcdFx0XHRcdGQueSA9IHkxKGQubGFuZSkgKyAyMDtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjtcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRwYXBlck1hcmtzLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC5pZHgvMiArIFwiLFwiICsgZC5pZHgqMyArIFwiKVwiO1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgXCIwXCIgKyBcIixcIiArIGQuaWR4KjMgKyBcIilcIjtcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQuc3R5bGUoXCJmaWxsXCIsIFwiYmxhY2tcIilcblx0XHRcdFx0XHRcdFx0LnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuXHRcdFx0XHRcdFx0XHQuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxLjVlbVwiKTtcblx0XHRcdFx0XHRcdFx0Ly8gLnN0eWxlKFwiZm9udC1zaXplXCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gKGQucmFkaXVzLzEwKSArIFwiZW1cIjt9KTtcblxuXHRcdFx0XHRcdFx0cGFwZXJJdGVtcy5lYWNoKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0dmFyIGl0ZW0gPSBkMy5zZWxlY3QodGhpcyk7XG5cdFx0XHRcdFx0XHRcdHZhciBtID0gaXRlbS5zZWxlY3QoXCIucGFwZXJNYXJrXCIpO1xuXHRcdFx0XHRcdFx0XHR2YXIgYmJveCA9IG0ubm9kZSgpLmdldEJCb3goKTtcblx0XHRcdFx0XHRcdFx0aXRlbS5zZWxlY3QoXCJyZWN0XCIpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoXCJ4XCIsIGJib3gueClcblx0XHRcdFx0XHRcdFx0XHQuYXR0cihcInlcIiwgYmJveC55KVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKFwid2lkdGhcIiwgYmJveC53aWR0aClcblx0XHRcdFx0XHRcdFx0XHQuYXR0cihcImhlaWdodFwiLCBiYm94LmhlaWdodClcblx0XHRcdFx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBtLmF0dHIoXCJ0cmFuc2Zvcm1cIikpXG5cdFx0XHRcdFx0XHRcdFx0LnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xuXHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhtLmF0dHIoXCJ0cmFuc2Zvcm1cIikpO1xuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cblxuXHRcdFx0XHQvL3VwZGF0ZSB0aGUgaXRlbSBsYWJlbHNcblx0XHRcdFx0Ly8gdmFyIHJvdGF0ZSA9IC0yMDtcblx0XHRcdFx0ZnVuY3Rpb24gX3JvdGF0ZShyb3RhdGlvbikge1xuXHRcdFx0XHRcdGxhYmVscy5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgXG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJyb3RhdGUoXCIgKyByb3RhdGlvbiArIFwiLFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjsgXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gY29uc3RyYWludCByZWxheGF0aW9uXG5cdFx0XHRcdC8vIGh0dHA6Ly9ibC5vY2tzLm9yZy9zeW50YWdtYXRpYy80MDUzMDk2XG5cdFx0XHRcdHZhciBhbHBoYSA9IDE7XG5cdFx0XHRcdHZhciBzcGFjaW5nID0gMTU7XG5cdFx0XHRcdGZ1bmN0aW9uIHJlbGF4KGxhYmVscykge1xuXHRcdFx0XHRcdC8vIE1vdmUgdGV4dCBpZiBvdmVybGFwcGluZyAocmVjdXJzaXZlbHkpXG5cdFx0XHRcdFx0dmFyIGFnYWluID0gZmFsc2U7XG5cdFx0XHRcdFx0bGFiZWxzLmVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZDMuc2VsZWN0KHRoaXMpLmF0dHIoXCJ4XCIpKTtcblx0XHRcdFx0XHRcdHZhciBhID0gdGhpcztcblx0XHRcdFx0XHRcdHZhciBkYSA9IGQzLnNlbGVjdChhKTtcblx0XHRcdFx0XHRcdHZhciBheCA9IGRhLmF0dHIoXCJ4XCIpO1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coYXgpO1xuXHRcdFx0XHRcdFx0bGFiZWxzLmVhY2goZnVuY3Rpb24oZGQpIHtcblx0XHRcdFx0XHRcdFx0dmFyIGIgPSB0aGlzO1xuXHRcdFx0XHRcdFx0XHQvLyBpZiAoYSA9PSBiKSB7XG5cdFx0XHRcdFx0XHRcdC8vIFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdFx0XHRcdHZhciBkYiA9IGQzLnNlbGVjdChiKTtcblx0XHRcdFx0XHRcdFx0dmFyIGJ4ID0gZGIuYXR0cihcInhcIik7XG5cdFx0XHRcdFx0XHRcdHZhciBkZWx0YVggPSBheCAtIGJ4O1xuXHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkZWx0YVgpO1xuXHRcdFx0XHRcdFx0XHQvLyBpZiAoTWF0aC5hYnMoZGVsdGFYKSA+IHNwYWNpbmcpIHtcblx0XHRcdFx0XHRcdFx0Ly8gXHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XHRcdFx0aWYgKCAoYSAhPSBiKSAmJiBNYXRoLmFicyhkZWx0YVgpIDwgc3BhY2luZykge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRlbHRhWCk7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29sbGlzaW9uIGRldGVjdGVkXG5cdFx0XHRcdFx0XHRcdFx0YWdhaW4gPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdHZhciBzaWduID0gZGVsdGFYID4gMCA/IDEgOiAtMTtcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhhKTtcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkYi5hdHRyKFwieFwiKSk7XG5cdFx0XHRcdFx0XHRcdFx0ZC54ID0gK2F4ICsgKHNpZ24qYWxwaGEpO1xuXHRcdFx0XHRcdFx0XHRcdGRkLnggPSArYnggLSAoc2lnbiphbHBoYSk7XG5cdFx0XHRcdFx0XHRcdFx0ZGEuYXR0cihcInhcIiwgZC54KTtcblx0XHRcdFx0XHRcdFx0XHRkYi5hdHRyKFwieFwiLCBkZC54KTtcblx0XHRcdFx0XHRcdFx0XHQvLyBkMy5zZWxlY3QodGhpcykuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSg1MDAsIDApXCIpO1xuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRiLmF0dHIoXCJ4XCIpKTtcblx0XHRcdFx0XHRcdFx0XHQvLyBkLnggKz0gc2lnbiphbHBoYTtcblx0XHRcdFx0XHRcdFx0XHQvLyBhLnggKz0gMTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0aWYgKGFnYWluKSB7XG5cdFx0XHRcdFx0XHQvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0Ly8gXHRyZWxheChsYWJlbHMpO1xuXHRcdFx0XHRcdFx0Ly8gfSwgMik7XG5cdFx0XHRcdFx0XHRyZWxheChsYWJlbHMpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRfcm90YXRlKC0yMCk7XG5cdFx0XHRcdFx0XHQvL1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGxhYmVscyA9IGl0ZW1SZWN0cy5zZWxlY3RBbGwoXCIueWVhckl0ZW1MYWJlbFwiKVxuXHRcdFx0XHQvLyBcdC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7ZC54ID0geDEoTWF0aC5tYXgoZC5rZXksIG1pbkV4dGVudCkpOyByZXR1cm4gZC54O30pXG5cdFx0XHRcdC8vIFx0LmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHtkLnkgPSBkLmN5OyByZXR1cm4gZC55O30pXG5cdFx0XHRcdC8vIFx0LmRhdGEodmlzSXRlbXMpO1xuXHRcdFx0XHQvLyBcdC8vIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7cmV0dXJuIHgxKE1hdGgubWF4KGQuc3RhcnQsIG1pbkV4dGVudCkgKyAyKTt9KTtcblx0XHRcdFx0Ly8gXHQvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBcInJvdGF0ZShcIiArIHJvdGF0ZSArIFwiLFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjsgfSk7XG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIGxhYmVscy5lbnRlcigpLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0Ly8gXHQudGV4dChmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhciArIFwiOiBcIiArIGQudmFsdWVzLmxlbmd0aCArIFwiIHBhcGVyc1wiO30pXG5cdFx0XHRcdC8vIFx0LmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHtkLnggPSB4MShNYXRoLm1heChkLmtleSwgbWluRXh0ZW50KSk7IHJldHVybiBkLng7fSlcblx0XHRcdFx0Ly8gXHQvLyAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkge2QueSA9IHkxKGQubGFuZSArIC41KTsgcmV0dXJuIGQueTt9KVxuXHRcdFx0XHQvLyBcdC8vIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7ZC55ID0geTEoZC5sYW5lKStyYWQ7IHJldHVybiBkLnk7fSlcblx0XHRcdFx0Ly8gXHQuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkge2QueSA9IGQuY3k7IHJldHVybiBkLnk7fSlcblx0XHRcdFx0Ly8gXHQuYXR0cihcImNsYXNzXCIsIFwieWVhckl0ZW1MYWJlbFwiKVxuXHRcdFx0XHQvLyBcdC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcblx0XHRcdFx0Ly8gXHQvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBcInJvdGF0ZShcIiArIHJvdGF0ZSArIFwiLFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjsgfSlcblx0XHRcdFx0Ly8gXHQub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0Ly8gXHRcdFx0Y29uc29sZS5sb2coZC54KTtcblx0XHRcdFx0Ly8gXHRcdH0pO1xuXHRcdFx0XHQvL1xuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBsYWJlbHMuZXhpdCgpLnJlbW92ZSgpO1xuXG5cdFx0XHRcdC8vdXBkYXRlIGF4aXNcblx0XHRcdFx0eEF4aXNNYWluT2JqLmNhbGwoeEF4aXNNYWluKTtcblxuXHRcdFx0XHQvLyAvLyBvbmx5IHVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZyAob3Igbm9uZSlcblx0XHRcdFx0Ly8gX3JvdGF0ZSgtMjApO1xuXHRcdFx0XHQvLyByZWxheChsYWJlbHMpO1xuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygkKCcubWFpbkNsaXBQYXRoJylbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygkKCcuY2hhcnQnKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XG5cdFx0XHRcdGxhYmVsc0NvbGxpc2lvbkRldGVjdCgpO1xuXG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHZhciBhZnRlclRyYW5zaXRpb25YID0gZnVuY3Rpb24oZCwgaSkge1xuXHRcdFx0XHQvLyByZXR1cm4geDEoK2QueWVhcikgKyAoKGkqaSkqMyk7XG5cdFx0XHRcdHJldHVybiAoaSppKSozO1xuXHRcdFx0fTtcblx0XHRcdHZhciBhZnRlclRyYW5zaXRpb25ZID0gZnVuY3Rpb24oZCwgaSkge1xuXHRcdFx0XHQvLyByZXR1cm4geTEoZC5sYW5lKSArIDIuMipyYWQqaSs1KnJhZDtcblx0XHRcdFx0cmV0dXJuIDIuMSptYWluTWluUmFkKmkrMyptYWluTWluUmFkO1xuXHRcdFx0fTtcblx0XHRcdC8vIGZ1bmN0aW9uIGV4cGFuZCh5ZWFyRGF0YSkge1xuXHRcdFx0ZnVuY3Rpb24gZXhwYW5kKHNlbCwgeWVhckl0ZW0pIHtcblx0XHRcdFx0dmFyIHRoaXNZZWFyID0gc2VsLmF0dHIoXCJkYXRhLXllYXJcIik7XG5cdFx0XHRcdHZhciB0aGlzWWVhckl0ZW0gPSB5ZWFySXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyPT10aGlzWWVhcn0pO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzWWVhckl0ZW0pO1xuXHRcdFx0XHQvLyBjb250cmFjdCgpO1xuXHRcdFx0XHR2YXIgZHVyID0gNTAwO1xuXHRcdFx0XHQvLyB2YXIgc2VsID0gcGFwZXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXI9PT15ZWFyRGF0YS55ZWFyfSk7XG5cdFx0XHRcdHZhciB0cmFuc2l0aW9uU3RhcnRTdHlsZSA9IHsncG9pbnRlci1ldmVudHMnOiAnbm9uZScsICdjdXJzb3InOiAnZGVmYXVsdCd9LFxuXHRcdFx0XHRcdHRyYW5zaXRpb25FbmRTdHlsZSA9IHsncG9pbnRlci1ldmVudHMnOiAnYXV0bycsICdjdXJzb3InOiAncG9pbnRlcid9O1xuXHRcdFx0XHQvLyBzZWwuc3R5bGUoXCJwb2ludGVyLWV2ZW50c1wiLCBcIm5vbmVcIilcblx0XHRcdFx0dmFyIGxpbmUgPSBkMy5zdmcubGluZSgpLngoZnVuY3Rpb24oZCkge3JldHVybiBkWzBdfSkueShmdW5jdGlvbihkKSB7cmV0dXJuIGRbMV19KTtcblx0XHRcdFx0Ly8gbGluZWRhdGEgd2lsbCBiZSBhbiBhcnJheSBvZiBbeCwgeV0gdmFsdWVzIHRoYXQgc3RhcnQgYXQgdGhlIHllYXIgY2lyY2xlIGFuZCB0cmFjayB0aGUgcGFwZXIgY2lyY2xlc1xuXHRcdFx0XHR2YXIgbGluZWRhdGEgPSBbXTtcblx0XHRcdFx0bGluZWRhdGEucHVzaChbMCwwXSk7XG5cdFx0XHRcdHNlbC5zdHlsZSh0cmFuc2l0aW9uU3RhcnRTdHlsZSlcblx0XHRcdFx0XHQudHJhbnNpdGlvbigpLmR1cmF0aW9uKGR1cilcblx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkLCBpKSB7XG5cdFx0XHRcdFx0XHRsaW5lZGF0YS5wdXNoKFthZnRlclRyYW5zaXRpb25YKGQsIGkpLCBhZnRlclRyYW5zaXRpb25ZKGQsIGkpXSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBhZnRlclRyYW5zaXRpb25YKGQsIGkpICsgXCIsXCIgKyBhZnRlclRyYW5zaXRpb25ZKGQsIGkpICsgXCIpXCI7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuZWFjaChcInN0YXJ0XCIsIGZ1bmN0aW9uKCkge2QzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKFwiZXhwYW5kZWRcIiwgdHJ1ZSl9KVxuXHRcdFx0XHRcdC8vIC5lYWNoKFwiZW5kXCIsIGZ1bmN0aW9uKCkge2QzLnNlbGVjdCh0aGlzKS5zdHlsZShcInBvaW50ZXItZXZlbnRzXCIsIFwiYXV0b1wiKTt9KTtcblx0XHRcdFx0XHQuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGQzLnNlbGVjdCh0aGlzKS5zdHlsZSh0cmFuc2l0aW9uRW5kU3R5bGUpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC8vIC5zdHlsZShcInBvaW50ZXItZXZlbnRzXCIsIFwiYXV0b1wiKTtcblx0XHRcdFx0c2VsLnNlbGVjdEFsbChcIi5wYXBlck1hcmtcIikudHJhbnNpdGlvbigpLmR1cmF0aW9uKGR1cilcblx0XHRcdFx0XHRcdFx0XHQvLyAuc3R5bGUoXCJmb250LXNpemVcIiwgZnVuY3Rpb24oZCkge3JldHVybiAoZC5yYWRpdXMvMTApICsgXCJlbVwiO30pXG5cdFx0XHRcdFx0LnN0eWxlVHdlZW4oXCJmb250LXNpemVcIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGQzLmludGVycG9sYXRlKFxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc2l6ZVwiKSxcblx0XHRcdFx0XHRcdFx0XHQoZC5yYWRpdXMvMTApICsgXCJlbVwiKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5hdHRyKFwiclwiLCBmdW5jdGlvbihkKSB7cmV0dXJuIGQucmFkaXVzO30pO1xuXG5cdFx0XHRcdC8vbWFrZSBsYWJlbHMgYXBwZWFyXG5cdFx0XHRcdHNlbC5zZWxlY3RBbGwoXCIucGFwZXJMYWJlbFwiKVxuXHRcdFx0XHRcdC8vIC5zdHlsZShcInBvaW50ZXItZXZlbnRzXCIsIFwibm9uZVwiKVxuXHRcdFx0XHRcdC5zdHlsZShcImRpc3BsYXlcIiwgXCJcIilcblx0XHRcdFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIDApXG5cdFx0XHRcdFx0LnRyYW5zaXRpb24oKVxuXHRcdFx0XHRcdC5kZWxheShmdW5jdGlvbihkKSB7cmV0dXJuIGR1ci8yICsgZC5pZHgqNzU7fSlcblx0XHRcdFx0XHQuZHVyYXRpb24oZHVyKVxuXHRcdFx0XHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG5cdFx0XHRcdC8vIGxhYmVsc0NvbGxpc2lvbkRldGVjdCgpO1xuXHRcdFx0XHRkMy50cmFuc2l0aW9uKCkuZHVyYXRpb24oZHVyKS5lYWNoKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHRoaXNZZWFySXRlbS5hcHBlbmQoXCJwYXRoXCIpLmRhdHVtKGxpbmVkYXRhKS5hdHRyKFwiY2xhc3NcIiwgXCJqb2luTGluZVwiKS5hdHRyKFwiZFwiLCBsaW5lKTtcblx0XHRcdFx0XHRkaXNwbGF5KClcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBmdW5jdGlvbiBjb250cmFjdCh5ZWFyRGF0YSkge1xuXHRcdFx0ZnVuY3Rpb24gY29udHJhY3QoKSB7XG5cdFx0XHRcdGQzLnNlbGVjdEFsbChcIi5qb2luTGluZVwiKS5yZW1vdmUoKTtcblx0XHRcdFx0dmFyIGR1ciA9IDUwMDtcblx0XHRcdFx0Ly8gdmFyIHNlbCA9IHBhcGVySXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyPT09eWVhckRhdGEueWVhcn0pO1xuXHRcdFx0XHR2YXIgc2VsID0gZDMuc2VsZWN0QWxsKFwiLmV4cGFuZGVkXCIpO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhzZWwuZW1wdHkoKSk7XG5cdFx0XHRcdHNlbC50cmFuc2l0aW9uKCkuZHVyYXRpb24oZHVyKVxuXHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsMClcIilcblx0XHRcdFx0XHQuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKFwiZXhwYW5kZWRcIiwgZmFsc2UpXG5cdFx0XHRcdFx0XHRcdC5zdHlsZShcInBvaW50ZXItZXZlbnRzXCIsIFwiXCIpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdHNlbC5zZWxlY3RBbGwoXCIucGFwZXJNYXJrXCIpLnRyYW5zaXRpb24oKS5kdXJhdGlvbihkdXIqMS41KVxuXHRcdFx0XHRcdC5zdHlsZVR3ZWVuKFwiZm9udC1zaXplXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBkMy5pbnRlcnBvbGF0ZShcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIiksXG5cdFx0XHRcdFx0XHRcdFx0XCIxLjVlbVwiKVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmF0dHIoXCJyXCIsIDApO1xuXHRcdFx0XHRzZWwuc2VsZWN0QWxsKFwiLnBhcGVyTGFiZWxcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdH1cblx0XHRcdC8vIGZ1bmN0aW9uIGV4cGFuZCh5ZWFyRGF0YSkge1xuXHRcdFx0Ly8gXHRjb25zb2xlLmxvZyh5ZWFyRGF0YSk7XG5cdFx0XHQvLyBcdGlmICgheWVhckRhdGEuZXhwYW5kZWQpIHtcblx0XHRcdC8vIFx0XHRcblx0XHRcdC8vIFx0XHQvLyBkMy5zZWxlY3RBbGwoXCIueWVhckl0ZW1MYWJlbFwiKS5jbGFzc2VkKFwiaGlkZGVuXCIpO1xuXHRcdFx0Ly8gXHRcdCQoICcueWVhckl0ZW1MYWJlbCcgKS5oaWRlKCk7XG5cdFx0XHQvLyBcdFx0dmFyIGR1ciA9IDUwMDtcblx0XHRcdC8vIFx0XHQvLyB2YXIgcmFkID0geWVhckRhdGEucmFkaXVzO1xuXHRcdFx0Ly8gXHRcdHZhciByYWQgPSAxMDtcblx0XHRcdC8vIFx0XHR2YXIgcGFyZW50WSA9IHllYXJEYXRhLmN5O1xuXHRcdFx0Ly8gXHRcdHZhciBtYXJrcyA9IG1haW5DbGlwUGF0aC5zZWxlY3RBbGwoXCIucGFwZXJJdGVtXCIpXG5cdFx0XHQvLyBcdFx0XHRcdFx0Ly8gLmRhdGEodmlzSXRlbXMsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuaWQ7IH0pXG5cdFx0XHQvLyBcdFx0XHRcdFx0LmRhdGEoeWVhckRhdGEudmFsdWVzKTtcblx0XHRcdC8vIFx0XHRtYXJrcy5lbnRlcigpLmFwcGVuZChcImNpcmNsZVwiKVxuXHRcdFx0Ly8gXHRcdFx0XHQvLyAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gXCJtYWluSXRlbSBtaW5pSXRlbVwiICsgZC5sYW5lO30pXG5cdFx0XHQvLyBcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJwYXBlckl0ZW1cIilcblx0XHRcdC8vIFx0XHRcdFx0Lm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihkKSB7Y29uc29sZS5sb2coZCk7fSkuYXBwZW5kKCd0ZXh0JykudGV4dCgnZCcpO1xuXHRcdFx0Ly8gXHRcdC8vIG1hcmtzLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuYXR0cihcImN5XCIsIHBhcmVudFkpLnJlbW92ZSgpO1xuXHRcdFx0Ly8gXHRcdC8vIGl0ZW1SZWN0cy5zZWxlY3RBbGwoJ3RleHQnKS5kYXRhKHllYXJEYXRhLnZhbHVlcykuZW50ZXIoKS5hcHBlbmQoJ3RleHQnKS5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7Y29uc29sZS5sb2coZCk7IHJldHVybiBkLmN4O30pLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC5jeTt9KS50ZXh0KGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC50aXRsZTt9KTtcblx0XHRcdC8vIFx0XHRtYXJrcy5leGl0KCkucmVtb3ZlKCk7XG5cdFx0XHQvL1xuXHRcdFx0Ly8gXHRcdHZhciBsYWJlbHMgPSBtYWluQ2xpcFBhdGguc2VsZWN0QWxsKFwiLnBhcGVySXRlbUxhYmVsXCIpXG5cdFx0XHQvLyBcdFx0XHQuZGF0YSh5ZWFyRGF0YS52YWx1ZXMpO1xuXHRcdFx0Ly8gXHRcdGxhYmVscy5lbnRlcigpLmFwcGVuZChcInRleHRcIilcblx0XHRcdC8vIFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJwYXBlckl0ZW1MYWJlbFwiKVxuXHRcdFx0Ly8gXHRcdFx0LmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKTtcblx0XHRcdC8vIFx0XHRsYWJlbHMuZXhpdCgpLnJlbW92ZSgpO1xuXHRcdFx0Ly9cblx0XHRcdC8vIFx0XHRtYXJrcy5hdHRyKFwiY3hcIiwgYmVmb3JlVHJhbnNpdGlvblgpXG5cdFx0XHQvLyBcdFx0XHRcdC5hdHRyKCdyJywgZnVuY3Rpb24oZCkge1xuXHRcdFx0Ly8gXHRcdFx0XHRcdFx0Ly8gZC5yYWRpdXMgPSByYWQgKyAoMiAqIGVmU3VtU2NhbGUoZC5zdW1fZWlnZW5mYWN0b3IpKTtcblx0XHRcdC8vIFx0XHRcdFx0XHRcdGQucmFkaXVzID0gcmFkICsgKDIgKiBlZlNjYWxlKGQuZWlnZW5mYWN0b3Jfc2NvcmUpKTtcblx0XHRcdC8vIFx0XHRcdFx0XHRcdHJldHVybiBkLnJhZGl1cztcblx0XHRcdC8vIFx0XHRcdFx0XHR9KVxuXHRcdFx0Ly8gXHRcdFx0XHQuYXR0cihcImN5XCIsIGJlZm9yZVRyYW5zaXRpb25ZKVxuXHRcdFx0Ly8gXHRcdFx0XHQudHJhbnNpdGlvbigpLmR1cmF0aW9uKGR1cilcblx0XHRcdC8vIFx0XHRcdFx0LmF0dHIoXCJjeFwiLCBhZnRlclRyYW5zaXRpb25YKVxuXHRcdFx0Ly8gXHRcdFx0XHQuYXR0cihcImN5XCIsIGFmdGVyVHJhbnNpdGlvblkpXG5cdFx0XHQvLyBcdFx0XHRcdC5zdHlsZShzdHlsZXNWaXNpYmxlKTtcblx0XHRcdC8vIFx0XHRsYWJlbHMuYXR0cihcInhcIiwgYmVmb3JlVHJhbnNpdGlvblgpXG5cdFx0XHQvLyBcdFx0XHQudGV4dChmdW5jdGlvbihkKSB7cmV0dXJuIGQudGl0bGU7fSlcblx0XHRcdC8vIFx0XHRcdC5hdHRyKFwieVwiLCBiZWZvcmVUcmFuc2l0aW9uWSlcblx0XHRcdC8vIFx0XHRcdC50cmFuc2l0aW9uKCkuZHVyYXRpb24oZHVyKVxuXHRcdFx0Ly8gXHRcdFx0LmF0dHIoXCJ4XCIsIGFmdGVyVHJhbnNpdGlvblgpXG5cdFx0XHQvLyBcdFx0XHQuYXR0cihcInlcIiwgYWZ0ZXJUcmFuc2l0aW9uWSk7XG5cdFx0XHQvLyBcdHllYXJEYXRhLmV4cGFuZGVkID0gdHJ1ZTtcblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gfVxuXHRcdFx0Ly9cblx0XHRcdC8vIGZ1bmN0aW9uIGNvbnRyYWN0KGQpIHtcblx0XHRcdC8vIFx0dmFyIGR1ciA9IDUwMDtcblx0XHRcdC8vIFx0aWYgKGQuZXhwYW5kZWQpIHtcblx0XHRcdC8vIFx0XHR2YXIgbWFya3MgPSBtYWluQ2xpcFBhdGguc2VsZWN0QWxsKFwiLnBhcGVySXRlbVwiKVxuXHRcdFx0Ly8gXHRcdFx0LmludGVycnVwdChcImNvbnRyYWN0XCIpXG5cdFx0XHQvLyBcdFx0XHQudHJhbnNpdGlvbihcImNvbnRyYWN0XCIpLmRlbGF5KDIwMDApLmR1cmF0aW9uKGR1cilcblx0XHRcdC8vIFx0XHRcdC5hdHRyKFwiY3hcIiwgYmVmb3JlVHJhbnNpdGlvblgpXG5cdFx0XHQvLyBcdFx0XHQuYXR0cihcImN5XCIsIDApXG5cdFx0XHQvLyBcdFx0XHQuZWFjaChcImVuZFwiLCBmdW5jdGlvbihfLCBpKSB7XG5cdFx0XHQvLyBcdFx0XHRcdGlmIChpID09PSAwKSBkLmV4cGFuZGVkID0gZmFsc2U7XG5cdFx0XHQvLyBcdFx0XHRcdH0pXG5cdFx0XHQvLyBcdFx0XHQucmVtb3ZlKCk7XG5cdFx0XHQvLyBcdFx0dmFyIGxhYmVscyA9IG1haW5DbGlwUGF0aC5zZWxlY3RBbGwoXCIucGFwZXJJdGVtTGFiZWxcIilcblx0XHRcdC8vIFx0XHRcdC5pbnRlcnJ1cHQoXCJjb250cmFjdFwiKVxuXHRcdFx0Ly8gXHRcdFx0LnRyYW5zaXRpb24oXCJjb250cmFjdFwiKS5kZWxheSgyMDAwKS5kdXJhdGlvbihkdXIpXG5cdFx0XHQvLyBcdFx0XHQuYXR0cihcInhcIiwgYmVmb3JlVHJhbnNpdGlvblgpXG5cdFx0XHQvLyBcdFx0XHQuYXR0cihcInlcIiwgMClcblx0XHRcdC8vIFx0XHRcdC5yZW1vdmUoKTtcblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gfVxuXG5cdFx0XHRmdW5jdGlvbiBsYWJlbHNDb2xsaXNpb25EZXRlY3QoKSB7XG5cdFx0XHRcdC8vIGRldGVjdCBpZiBsYWJlbHMgZ28gb2ZmIHNjcmVlblxuXG5cdFx0XHRcdC8vIGZ1bmN0aW9uIGNoZWNrU2luZ2xlTGFiZWwoZCkge1xuXHRcdFx0XHQvLyBcdHZhciBib3VuZGluZ1JlY3QgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHQvLyBcdGNvbnNvbGUubG9nKGJvdW5kaW5nUmVjdC53aWR0aCArICQoIHRoaXMgKS5wb3NpdGlvbigpLmxlZnQpO1xuXHRcdFx0XHQvLyBcdGlmICgkKCB0aGlzICkucG9zaXRpb24oKS5sZWZ0PDApIHtcblx0XHRcdFx0Ly8gXHRcdGQzLnNlbGVjdCh0aGlzKS5zZWxlY3QoXCIucGFwZXJMYWJlbFwiKS5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJzdGFydFwiKTtcblx0XHRcdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBcdFx0ZDMuc2VsZWN0KHRoaXMpLnNlbGVjdChcIi5wYXBlckxhYmVsXCIpLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKTtcblx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdC8vIH1cblx0XHRcdFx0ZnVuY3Rpb24gY2hlY2tTaW5nbGVMYWJlbChkKSB7XG5cdFx0XHRcdFx0ZnVuY3Rpb24gd3JhcEluQW5jaG9yKHN0YWJsZV91cmwsIHRleHQpIHtcblx0XHRcdFx0XHRcdC8vIHJldHVybiAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly9sYWJzLmpzdG9yLm9yZycgKyBzdGFibGVfdXJsICsgJ1wiPicgKyB0ZXh0ICsgJzwvYT4nXG5cdFx0XHRcdFx0XHRyZXR1cm4gJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCInICsgc3RhYmxlX3VybCArICdcIj4nICsgdGV4dCArICc8L2E+J1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyB2YXIgYm91bmRpbmdSZWN0ID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0XHR2YXIgdGhpc0xhYmVsID0gZDMuc2VsZWN0KHRoaXMpLnNlbGVjdChcIi5wYXBlckxhYmVsXCIpO1xuXHRcdFx0XHRcdC8vIHZhciB3b3JkcyA9IHRoaXNMYWJlbC50ZXh0KCkuc3BsaXQoXCIgXCIpO1xuXHRcdFx0XHRcdC8vIHRoaXNMYWJlbC50ZXh0KGQudGl0bGUpO1xuXHRcdFx0XHRcdHRoaXNMYWJlbC5odG1sKHdyYXBJbkFuY2hvcihkLnVybCwgZC50aXRsZSkpO1xuXHRcdFx0XHRcdHZhciB3b3JkcyA9IGQudGl0bGUuc3BsaXQoXCIgXCIpO1xuXHRcdFx0XHRcdHZhciBnaXZlVXBUaHJlc2hvbGQgPSAyMDtcblx0XHRcdFx0XHR2YXIgaSA9IDA7XG5cdFx0XHRcdFx0dmFyIHZpZXdMZWZ0RWRnZSA9ICQoICcjdGltZWxpbmUgc3ZnJyApLnBvc2l0aW9uKCkubGVmdCArIG1bM107XG5cdFx0XHRcdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdFx0XHRcdGkrKztcblx0XHRcdFx0XHRcdGlmIChpPmdpdmVVcFRocmVzaG9sZCkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHZhciBsZWZ0UG9zID0gJCggdGhpcyApLnBvc2l0aW9uKCkubGVmdDtcblx0XHRcdFx0XHRcdC8vIGlmIChsZWZ0UG9zIDwgMjApIHtcblx0XHRcdFx0XHRcdC8vIGlmIChsZWZ0UG9zIDwgbVszXSkge1xuXHRcdFx0XHRcdFx0aWYgKGxlZnRQb3MgPCB2aWV3TGVmdEVkZ2UpIHtcblx0XHRcdFx0XHRcdFx0dmFyIG51bVdvcmRzID0gd29yZHMubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHR3b3JkcyA9IHdvcmRzLnNsaWNlKDAsIG51bVdvcmRzLTIpO1xuXHRcdFx0XHRcdFx0XHR2YXIgc2hvcnRlbmVkVGl0bGUgPSB3b3Jkcy5qb2luKFwiIFwiKStcIi4uLlwiO1xuXHRcdFx0XHRcdFx0XHQvLyB0aGlzTGFiZWwudGV4dCh3b3Jkcy5qb2luKFwiIFwiKStcIi4uLlwiKTtcblx0XHRcdFx0XHRcdFx0dGhpc0xhYmVsLmh0bWwod3JhcEluQW5jaG9yKGQudXJsLCBzaG9ydGVuZWRUaXRsZSkpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIHZhciBsZWZ0UG9zID0gJCggdGhpcyApLnBvc2l0aW9uKCkubGVmdDtcblx0XHRcdFx0XHQvL1xuXHRcdFx0XHRcdC8vIGlmIChsZWZ0UG9zPDApIHtcblx0XHRcdFx0XHQvLyBcdGQzLnNlbGVjdCh0aGlzKS5zZWxlY3QoXCIucGFwZXJMYWJlbFwiKVxuXHRcdFx0XHRcdC8vIFx0XHQudGV4dChkLnRpdGxlLnNsaWNlKDAsIDEwKSk7XG5cdFx0XHRcdFx0Ly8gXHRjaGVja1NpbmdsZUxhYmVsKGQpO1xuXHRcdFx0XHRcdC8vIH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gXHRjb25zb2xlLmxvZygnbGVhdmluZyByZWN1cnNpdmUgZnVuY3Rpb24nKVxuXHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XHQvLyByZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0ZDMuc2VsZWN0QWxsKFwiLnBhcGVySXRlbS5leHBhbmRlZFwiKVxuXHRcdFx0XHRcdC5lYWNoKGNoZWNrU2luZ2xlTGFiZWwpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRmdW5jdGlvbiBkZW1vSW5pdCgpIHtcblx0XHRcdFx0Y2hhcnQuY2xhc3NlZChcImRlbW9JblByb2dyZXNzXCIsIHRydWUpO1xuXHRcdFx0XHRjbGVhckJydXNoKCk7XG5cdFx0XHRcdGNvbnRyYWN0KCk7XG5cdFx0XHRcdGRpc2FibGVJbnRlcmFjdGlvbigpO1xuXHRcdFx0XHRtaW5pLm9uKFwibW91c2Vkb3duXCIsIGRlbW9RdWl0KTtcblx0XHRcdFx0ZnVuY3Rpb24gZGVtb1F1aXQoKSB7XG5cdFx0XHRcdFx0Y2hhcnQuY2xhc3NlZChcImRlbW9JblByb2dyZXNzXCIsIGZhbHNlKTtcblx0XHRcdFx0XHRjdXJzb3JJY29uLnRyYW5zaXRpb24oMCkucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIHRyYW5zaXRpb25UaW1lcyA9IFtcblx0XHRcdFx0XHRcdDc1MCwgIC8vIDA6IGluaXRpYWwgZGVsYXkgYmVmb3JlIGFueXRoaW5nIGhhcHBlbnNcblx0XHRcdFx0XHRcdDEwMDAsICAvLyAxOiB0aW1lIHRvIG1vdmUgdGhlIGN1cnNvciB0byB0aGUgbWluaSBhcmVhXG5cdFx0XHRcdFx0XHQyMDAwLCAgLy8gMjogdGltZSB0byBkcmF3IHRoZSBpbml0aWFsIGJydXNoXG5cdFx0XHRcdFx0XHQyMDAsICAgLy8gMzogZGVsYXkgYWZ0ZXIgYnJ1c2hcblx0XHRcdFx0XHRcdDIwMDAsICAvLyA0OiB0aW1lIHRvIG1vdmUgdGhlIGN1cnNvciB0byBhIG1haW4gaXRlbVxuXHRcdFx0XHRcdFx0MzAwMCwgIC8vIDU6IGRlbGF5IHRvIHJlbW92ZSBhbmQgZW5kIHRoZSBkZW1vXG5cdFx0XHRcdFx0XTtcblx0XHRcdFx0dmFyIGN1cnNvckljb24gPSBjaGFydC5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImN1cnNvckljb25cIilcblx0XHRcdFx0XHQuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcIkZvbnRBd2Vzb21lXCIpXG5cdFx0XHRcdFx0LnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMWVtXCIpXG5cdFx0XHRcdFx0LnRleHQoXCJcXHVmMjQ1XCIpXG5cdFx0XHRcdFx0Ly8gLmF0dHIoXCJ4XCIsIDEwMClcblx0XHRcdFx0XHQvLyAuYXR0cihcInlcIiwgMzAwKTtcblx0XHRcdFx0XHQvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgxMDAsMzAwKVwiKTtcblx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHcgKyBcIixcIiArIG1haW5IZWlnaHQgKyBcIilcIik7XG5cdFx0XHRcdC8vIHZhciBpbml0RHVyYXRpb24gPSAxMDAwLFxuXHRcdFx0XHQvLyBcdGluaXREZWxheSA9IDEwMDA7XG5cdFx0XHRcdC8vIGNoYW5nZUV4dGVudCgxOTcwLCAyMDAwLCBpbml0RHVyYXRpb24sIFwiY3ViaWMtaW4tb3V0XCIsIGluaXREZWxheSk7XG5cdFx0XHRcdC8vIGQzLnRyYW5zaXRpb24oXCJpbml0RGVtb1RyYW5zaXRpb25cIikuZGVsYXkoaW5pdERlbGF5ICsgaW5pdER1cmF0aW9uKVxuXHRcdFx0XHQvLyBcdC5lYWNoKFwiZW5kXCIsIGRlbW9FeHBhbmQpO1xuXHRcdFx0XHR2YXIgZXh0ZW50U2VsZWN0ID0gbWluaS5zZWxlY3QoXCIuYnJ1c2hcIikuc2VsZWN0KFwiLmV4dGVudFwiKTtcblx0XHRcdFx0Ly8gdmFyIGluaXRCcnVzaFJhbmdlID0gWzE5NzAsIDIwMDBdO1xuXHRcdFx0XHR2YXIgeWVhclJhbmdlID0gdGltZUVuZCAtIHRpbWVCZWdpbjtcblx0XHRcdFx0aWYgKHllYXJSYW5nZSA8IDYpIHtcblx0XHRcdFx0XHR2YXIgaW5pdEJydXNoUmFuZ2UgPSBbdGltZUJlZ2luLCB0aW1lRW5kXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgaW5pdEJydXNoUmFuZ2UgPSBbdGltZUJlZ2luICsgTWF0aC5mbG9vcih5ZWFyUmFuZ2UqLjMpLCB0aW1lRW5kIC0gTWF0aC5mbG9vcih5ZWFyUmFuZ2UqLjIpXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGFuZ2VFeHRlbnQoaW5pdEJydXNoUmFuZ2VbMF0sIGluaXRCcnVzaFJhbmdlWzBdLCAwKTtcblx0XHRcdFx0Ly8gdmFyIGluaXRCcnVzaFBvc2l0aW9uID0gK2V4dGVudFNlbGVjdC5hdHRyKFwieFwiKTtcblx0XHRcdFx0dmFyIGluaXRCcnVzaFBvc2l0aW9uID0geChicnVzaC5leHRlbnQoKVsxXSkgKyBtWzNdO1xuXG5cdFx0XHRcdC8vIHNlbGVjdCBhIHllYXJJdGVtIHRvIGV4cGFuZCBmb3IgdGhlIGRlbW9cblx0XHRcdFx0dmFyIHZpc0l0ZW1zID0geWVhckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhciA8IGluaXRCcnVzaFJhbmdlWzFdICYmIGQueWVhciA+IGluaXRCcnVzaFJhbmdlWzBdO30pLFxuXHRcdFx0XHRcdG51bVZpc0l0ZW1zID0gdmlzSXRlbXMuc2l6ZSgpO1xuXHRcdFx0XHRpZiAobnVtVmlzSXRlbXMgPT09IDApIHtcblx0XHRcdFx0XHQvLyBpZiB0aGVyZSBhcmUgbm8gdmlzaWJsZSBpdGVtcyBpbiB0aGUgcmFuZ2UsIGp1c3QgZ2l2ZSB1cFxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fSBlbHNlIGlmIChudW1WaXNJdGVtcyA9PT0gMSkge1xuXHRcdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lIHZpc2libGUgaXRlbSwgdXNlIGl0XG5cdFx0XHRcdFx0dmFyIHNlbEluZGV4ID0gMDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBlbHNlLCB1c2UgYW4gaXRlbSBhIGxpdHRsZSB0byB0aGUgcmlnaHQgb2YgY2VudGVyXG5cdFx0XHRcdFx0dmFyIHNlbEluZGV4ID0gTWF0aC5jZWlsKG51bVZpc0l0ZW1zKi41NSk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdHZhciBkZW1vWWVhckl0ZW0gPSB2aXNJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCwgaSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gaSA9PT0gc2VsSW5kZXg7XG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAoIWNoYXJ0LmNsYXNzZWQoXCJkZW1vSW5Qcm9ncmVzc1wiKSkge1xuXHRcdFx0XHRcdC8vIHF1aXRcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cblx0XHRcdFx0Y3Vyc29ySWNvbi50cmFuc2l0aW9uKCkuZGVsYXkodHJhbnNpdGlvblRpbWVzWzBdKVxuXHRcdFx0XHRcdC5kdXJhdGlvbih0cmFuc2l0aW9uVGltZXNbMV0pXG5cdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXG5cdFx0XHRcdFx0XHRcdC8vIGNvbnN0cnVjdFRyYW5zbGF0ZShpbml0QnJ1c2hQb3NpdGlvbisxNSwgbWFpbkhlaWdodCttWzBdKyhtaW5pSGVpZ2h0LzIpKVxuXHRcdFx0XHRcdFx0XHRjb25zdHJ1Y3RUcmFuc2xhdGUoaW5pdEJydXNoUG9zaXRpb24sIG1haW5IZWlnaHQrbVswXSsobWluaUhlaWdodC8yKSlcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC5lYWNoKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYgKGNoYXJ0LmNsYXNzZWQoXCJkZW1vSW5Qcm9ncmVzc1wiKSkge1xuXHRcdFx0XHRcdFx0XHRkZW1vRHJhd0JydXNoKCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRkZW1vRW5kKDApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGZ1bmN0aW9uIGRlbW9EcmF3QnJ1c2goKSB7XG5cdFx0XHRcdFx0Y2hhbmdlRXh0ZW50KGluaXRCcnVzaFJhbmdlWzBdLCBpbml0QnJ1c2hSYW5nZVsxXSwgdHJhbnNpdGlvblRpbWVzWzJdKTtcblx0XHRcdFx0XHR2YXIgbWluRXh0ZW50U2NyZWVuID0gK2V4dGVudFNlbGVjdC5hdHRyKFwieFwiKTtcblx0XHRcdFx0XHR2YXIgbWF4RXh0ZW50U2NyZWVuID0gbWluRXh0ZW50U2NyZWVuICsgKCtleHRlbnRTZWxlY3QuYXR0cihcIndpZHRoXCIpKTtcblx0XHRcdFx0XHR4MS5kb21haW4oYnJ1c2guZXh0ZW50KCkpO1xuXHRcdFx0XHRcdGN1cnNvckljb24udHJhbnNpdGlvbigpXG5cdFx0XHRcdFx0XHQuZHVyYXRpb24odHJhbnNpdGlvblRpbWVzWzJdKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHZhciB4UG9zID0geChicnVzaC5leHRlbnQoKVsxXSkgKyBtWzNdO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gY29uc3RydWN0VHJhbnNsYXRlKHhQb3MsIG1haW5IZWlnaHQrbVswXSsobWluaUhlaWdodC8yKSk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5lYWNoKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYgKGNoYXJ0LmNsYXNzZWQoXCJkZW1vSW5Qcm9ncmVzc1wiKSkge1xuXHRcdFx0XHRcdFx0XHRkZW1vRXhwYW5kKCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRkZW1vRW5kKDApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRmdW5jdGlvbiBkZW1vRXhwYW5kKCkge1xuXHRcdFx0XHRcdC8vIHZhciBkZW1vVHJhbnNpdGlvblRpbWUgPSAyMDAwO1xuXHRcdFx0XHRcdC8vIHZhciBkZW1vRGVsYXlUb1JlbW92ZSA9IDIwMDA7XG5cdFx0XHRcdFx0Ly8gdmFyIGN1cnNvckljb24gPSBtYWluQ2xpcFBhdGguYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHRcdC8vIFx0LmF0dHIoXCJjbGFzc1wiLCBcImN1cnNvckljb25cIilcblx0XHRcdFx0XHQvLyBcdC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwiRm9udEF3ZXNvbWVcIilcblx0XHRcdFx0XHQvLyBcdC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjFlbVwiKVxuXHRcdFx0XHRcdC8vIFx0LnRleHQoXCJcXHVmMjQ1XCIpXG5cdFx0XHRcdFx0Ly8gXHQvLyAuYXR0cihcInhcIiwgMTAwKVxuXHRcdFx0XHRcdC8vIFx0Ly8gLmF0dHIoXCJ5XCIsIDMwMCk7XG5cdFx0XHRcdFx0Ly8gXHQvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgxMDAsMzAwKVwiKTtcblx0XHRcdFx0XHQvLyBcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgdyArIFwiLFwiICsgbWFpbkhlaWdodCArIFwiKVwiKTtcblxuXHRcdFx0XHRcdHZhciBkZW1vWWVhck1hcmsgPSBkZW1vWWVhckl0ZW0uc2VsZWN0KFwiLnllYXJNYXJrXCIpO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRlbW9ZZWFySXRlbSk7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGVtb1llYXJNYXJrKTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkZW1vWWVhck1hcmsuYXR0cihcInJcIikpO1xuXHRcdFx0XHRcdHZhciB0cmFuc2xhdGVTdHIgPSBkZW1vWWVhckl0ZW0uYXR0cihcInRyYW5zZm9ybVwiKTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0cmFuc2xhdGVTdHIpO1xuXHRcdFx0XHRcdHZhciB0cmFuc2xhdGVDb29yZCA9IGRlY29uc3RydWN0VHJhbnNsYXRlKHRyYW5zbGF0ZVN0cik7XG5cdFx0XHRcdFx0dHJhbnNsYXRlQ29vcmQueCA9IHRyYW5zbGF0ZUNvb3JkLnggKyBtWzNdO1xuXHRcdFx0XHRcdHRyYW5zbGF0ZUNvb3JkLnkgPSB0cmFuc2xhdGVDb29yZC55ICsgbVswXSArICgrZGVtb1llYXJNYXJrLmF0dHIoXCJyXCIpKTtcblx0XHRcdFx0XHR2YXIgdHJhbnNsYXRlID0gY29uc3RydWN0VHJhbnNsYXRlKHRyYW5zbGF0ZUNvb3JkLngsIHRyYW5zbGF0ZUNvb3JkLnkpO1xuXHRcdFx0XHRcdC8vIG1vdmUgdGhlIGN1cnNvciB0byBhIHllYXIsIHRoZW4gbWFudWFsbHkgZXhwYW5kIHRoZSB5ZWFyXG5cdFx0XHRcdFx0Y3Vyc29ySWNvbi50cmFuc2l0aW9uKFwiZGVtb0V4cGFuZFwiKS5kZWxheSh0cmFuc2l0aW9uVGltZXNbM10pXG5cdFx0XHRcdFx0XHQuZHVyYXRpb24odHJhbnNpdGlvblRpbWVzWzRdKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgdHJhbnNsYXRlKVxuXHRcdFx0XHRcdFx0LmVhY2goXCJlbmRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChjaGFydC5jbGFzc2VkKFwiZGVtb0luUHJvZ3Jlc3NcIikpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgc2VsID0gcGFwZXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZGQpIHtyZXR1cm4gZGQueWVhcj09ZGVtb1llYXJJdGVtWzBdWzBdLl9fZGF0YV9fLnllYXJ9KTtcblx0XHRcdFx0XHRcdFx0XHRleHBhbmQoc2VsKTtcblx0XHRcdFx0XHRcdFx0XHRkZW1vRW5kKHRyYW5zaXRpb25UaW1lc1s1XSk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0ZGVtb0VuZCgwKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Ly8gY3Vyc29ySWNvbi50cmFuc2l0aW9uKFwiZGVtb0VuZFwiKS5kZWxheShkZW1vVHJhbnNpdGlvblRpbWUpXG5cdFx0XHRcdFx0Ly8gXHQuZHVyYXRpb24oZGVtb0RlbGF5VG9SZW1vdmUpXG5cdFx0XHRcdFx0Ly8gXHQuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQvLyBcdFx0Y3Vyc29ySWNvbi5yZW1vdmUoKTtcblx0XHRcdFx0XHQvLyBcdFx0Y29udHJhY3QoKTtcblx0XHRcdFx0XHQvLyBcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZnVuY3Rpb24gZGVtb0VuZChkZWxheSkge1xuXHRcdFx0XHRcdGN1cnNvckljb24udHJhbnNpdGlvbihcImRlbW9FbmRcIilcblx0XHRcdFx0XHRcdC5kZWxheShkZWxheSlcblx0XHRcdFx0XHRcdC5kdXJhdGlvbigwKVxuXHRcdFx0XHRcdFx0LnJlbW92ZSgpXG5cdFx0XHRcdFx0XHQuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0Y29udHJhY3QoKTtcblx0XHRcdFx0XHRcdFx0ZW5hYmxlSW50ZXJhY3Rpb24oKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblxuXHRcdFx0ZnVuY3Rpb24gdGVzdFBsYWNlQ3Vyc29yKCkge1xuXHRcdFx0XHR2YXIgZXh0ZW50U2VsZWN0ID0gbWluaS5zZWxlY3QoXCIuYnJ1c2hcIikuc2VsZWN0KFwiLmV4dGVudFwiKTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coZXh0ZW50U2VsZWN0KTtcblx0XHRcdFx0dmFyIG1pbkV4dGVudFNjcmVlbiA9ICtleHRlbnRTZWxlY3QuYXR0cihcInhcIik7XG5cdFx0XHRcdHZhciBjdXJzb3JJY29uID0gbWFpbkNsaXBQYXRoLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwiY3Vyc29ySWNvblwiKVxuXHRcdFx0XHRcdC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwiRm9udEF3ZXNvbWVcIilcblx0XHRcdFx0XHQuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxZW1cIilcblx0XHRcdFx0XHQudGV4dChcIlxcdWYyNDVcIilcblx0XHRcdFx0XHQvLyAuYXR0cihcInhcIiwgMTAwKVxuXHRcdFx0XHRcdC8vIC5hdHRyKFwieVwiLCAzMDApO1xuXHRcdFx0XHRcdC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDEwMCwzMDApXCIpO1xuXHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWluRXh0ZW50U2NyZWVuICsgXCIsXCIgKyAobWFpbkhlaWdodC0yMCkgKyBcIilcIik7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiB0ZXN0Q2hhbmdlSGVpZ2h0KCkge1xuXHRcdFx0XHQvLyBjaGFuZ2VFeHRlbnQoTWF0aC5yb3VuZChtaW5FeHRlbnQrMSksIE1hdGgucm91bmQobWF4RXh0ZW50KzEpLCAyNTAsIFwibGluZWFyXCIpO1xuXHRcdFx0XHR2YXIgY2hhcnRIZWlnaHQgPSArY2hhcnQuYXR0cihcImhlaWdodFwiKTtcblx0XHRcdFx0dmFyIGN1cnJNYWluSGVpZ2h0ID0gK21haW4uYXR0cihcImhlaWdodFwiKTtcblx0XHRcdFx0Y2hhcnQudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApLmF0dHIoXCJoZWlnaHRcIiwgY2hhcnRIZWlnaHQrMTAwKTtcblx0XHRcdFx0bWFpbi50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuYXR0cihcImhlaWdodFwiLCBjdXJyTWFpbkhlaWdodCsxMDApO1xuXHRcdFx0XHRtaW5pLnRyYW5zaXRpb24oKS5kdXJhdGlvbigxMDAwKVxuXHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbVszXSArIFwiLFwiICsgKGN1cnJNYWluSGVpZ2h0KzEwMCArIG1bMF0pICsgXCIpXCIpO1xuXHRcdFx0XHRkMy5zZWxlY3QoXCIjY2xpcCByZWN0XCIpLmF0dHIoXCJoZWlnaHRcIiwgY3Vyck1haW5IZWlnaHQrMTAwKTtcblx0XHRcdFx0ZGlzcGxheSgpO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkMy5zZWxlY3QoXCIjY2xpcFwiKS5hdHRyKFwiaGVpZ2h0XCIpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gdmFyIHRlc3RCdXR0b24gPSBkMy5zZWxlY3QoXCJib2R5XCIpLmFwcGVuZChcImJ1dHRvblwiKVxuXHRcdFx0Ly8gXHRcdFx0XHRcdC5hdHRyKFwiaWRcIiwgXCJ0ZXN0QnV0dG9uXCIpXG5cdFx0XHQvLyBcdFx0XHRcdFx0Lmh0bWwoXCJ0ZXN0QnV0dG9uXCIpXG5cdFx0XHQvLyBcdFx0XHRcdFx0Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBcdFx0XHRcdFx0XHQvLyBtaW5pbWl6ZVRpbWVsaW5lKCk7XG5cdFx0XHQvLyBcdFx0XHRcdFx0XHRkZW1vSW5pdCgpO1xuXHRcdFx0Ly8gXHRcdFx0XHRcdH0pO1xuXHRcdFx0ZDMuc2VsZWN0KFwiLmNsaWNrRm9yRGVtb1wiKVxuXHRcdFx0XHQub24oXCJjbGlja1wiLCBkZW1vSW5pdCk7XG5cblx0XHRcdGZ1bmN0aW9uIGRpc2FibGVJbnRlcmFjdGlvbigpIHtcblx0XHRcdFx0ZDMuc2VsZWN0KFwiI3RpbWVsaW5lIHN2Z1wiKS5zdHlsZShcInBvaW50ZXItZXZlbnRzXCIsIFwibm9uZVwiKTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gZW5hYmxlSW50ZXJhY3Rpb24oKSB7XG5cdFx0XHRcdGQzLnNlbGVjdChcIiN0aW1lbGluZSBzdmdcIikuc3R5bGUoXCJwb2ludGVyLWV2ZW50c1wiLCBudWxsKTtcblx0XHRcdH1cblxuXHRcdFx0JCggZG9jdW1lbnQgKS5vbihcInRpbWVsaW5lVmlzOmNvbnRyYWN0XCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjb250cmFjdCgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdCQoIGRvY3VtZW50ICkub24oXCJ0aW1lbGluZVZpczpkaXNwbGF5XCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkaXNwbGF5KCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0JCggZG9jdW1lbnQgKS5vbihcInRpbWVsaW5lVmlzOmNsZWFyQnJ1c2hcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNsZWFyQnJ1c2goKTtcblx0XHRcdH0pO1xuXG5cdFx0fSk7XG5cdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Ly8gdXBkYXRlRGF0YSgpIHtcblx0Ly8gXHQvLyB1c2UgRDMgdXBkYXRlIHBhdHRlcm4gd2l0aCBkYXRhXG4gICAgLy9cblx0Ly8gXHR2YXIgZ3JhcGggPSB0aGlzLl9kYXRhO1xuXHQvLyBcdGdyYXBoLm5vZGVzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuXHQvLyBcdFx0ZC5pZCA9IGQuaWQudG9TdHJpbmcoKTtcblx0Ly8gXHR9KVxuXHQvLyBcdGdyYXBoLmxpbmtzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuXHQvLyBcdFx0ZC5pZCA9IGdldExpbmtJZChkLCBncmFwaC5kaXJlY3RlZCk7XG5cdC8vIFx0fSk7XG5cdC8vIFx0dGhpcy5zaW11bGF0aW9uXG5cdC8vIFx0XHQubm9kZXMoZ3JhcGgubm9kZXMpXG5cdC8vIFx0XHQub24oXCJ0aWNrXCIsIHRpY2tlZCk7XG4gICAgLy9cblx0Ly8gXHRzaW11bGF0aW9uLmZvcmNlKFwibGlua1wiKVxuXHQvLyBcdFx0LmxpbmtzKGdyYXBoLmxpbmtzKTtcblx0Ly8gXHRjb25zb2xlLmxvZyhncmFwaCk7XG5cdC8vIFx0c2ltdWxhdGlvbi5zdG9wKCk7XG5cdC8vIFx0bm9kZSA9IG5vZGUuZGF0YShncmFwaC5ub2RlcywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5pZDsgfSk7XG5cdC8vIFx0dmFyIG5vZGVFeGl0ID0gbm9kZS5leGl0KCk7XG5cdC8vIFx0Ly8gbm9kZUV4aXQuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLmF0dHIoXCJmaWxsXCIsIFwicmVkXCIpO1xuXHQvLyBcdHZhciB0ID0gZDMudHJhbnNpdGlvbigndXBkYXRlRGF0YScpLmR1cmF0aW9uKDUwMDApO1xuXHQvLyBcdG5vZGVFeGl0LnNlbGVjdEFsbChcImNpcmNsZVwiKS5zdHlsZShcInN0cm9rZVwiLCBcInJlZFwiKS50cmFuc2l0aW9uKHQpLmF0dHIoXCJyXCIsIDApO1xuXHQvLyBcdG5vZGUgPSBlbnRlck5vZGVzKG5vZGUsIHQpO1xuXHQvLyBcdC8vIG5vZGUgPSBub2RlLmNhbGwoZW50ZXJOb2RlcywgdCk7XG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG5cdC8vIFx0bGluayA9IGxpbmtcblx0Ly8gXHRcdC5kYXRhKGdyYXBoLmxpbmtzLCBmdW5jdGlvbihkKSB7XG5cdC8vIFx0XHRcdC8vIGQuaWQgPSBnZXRMaW5rSWQoZCk7XG5cdC8vIFx0XHRcdHJldHVybiBkLmlkO1xuXHQvLyBcdFx0fSk7XG5cdC8vIFx0dmFyIGxpbmtFeGl0ID0gbGluay5leGl0KCk7XG5cdC8vIFx0bGlua0V4aXQuc3R5bGUoXCJzdHJva2VcIiwgXCJyZWRcIikudHJhbnNpdGlvbih0KS5zdHlsZShcIm9wYWNpdHlcIiwgMCkucmVtb3ZlKCk7XG5cdC8vIFx0Ly8gbGlua0V4aXQucmVtb3ZlKCk7XG5cdC8vIFx0bGluayA9IGVudGVyTGlua3MobGluaywgdCk7XG5cdC8vIFx0c2ltdWxhdGlvbi5vbihcInRpY2tcIikuY2FsbCgpO1xuICAgIC8vXG4gICAgLy9cblx0Ly8gXHR0LmVuZCgpLnRoZW4oZnVuY3Rpb24oZCkge1xuXHQvLyBcdFx0bm9kZUV4aXQucmVtb3ZlKCk7XG5cdC8vIFx0XHQvLyBzaW11bGF0aW9uLmFscGhhKDEpLnJlc3RhcnQoKTtcblx0Ly8gXHRcdC8vIHNpbXVsYXRpb25cblx0Ly8gXHRcdFx0Ly8gLmFscGhhRGVjYXkoLjAwMDUpXG5cdC8vIFx0XHRcdC8vIC52ZWxvY2l0eURlY2F5KDAuOSlcblx0Ly8gXHRcdFx0Ly8gLmFscGhhKC4xKVxuXHQvLyBcdFx0XHQvLyAucmVzdGFydCgpO1xuXHQvLyBcdH0pO1xuXHQvLyBcdFxuXHQvLyBcdC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdC8vIFx0Ly8gfSwgNDAwMCk7XG5cdC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmVWaXM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X187Il0sInNvdXJjZVJvb3QiOiIifQ==
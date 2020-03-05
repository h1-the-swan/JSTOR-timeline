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
            d.authors = d["authors"]; // list of author names

            if (d.authors === undefined) {
              d.authors = [];
            }

            d.node_rank = d["node_rank"];
            d.venue = d["journal"];

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
              span.append($('<p class="tooltip title">').text(d.title));
              span.append($('<p class="tooltip authors">').text(d.authors.join(", ")));
              span.append($('<p class="tooltip journal">').text(d.venue ? d.venue : "Journal Unknown"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZDNfYXJ0aWNsZV90aW1lbGluZS8uL3NyYy90aW1lbGluZVZpc19NYWluLmpzIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvZXh0ZXJuYWwgXCJkM1wiIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyIkIiwiVGltZWxpbmVWaXMiLCJvcHRzIiwiZGVmYXVsdHMiLCJlbCIsImRhdGEiLCJ3aWR0aCIsImNvbG9yIiwiZDMiLCJzY2FsZSIsIm9yZGluYWwiLCJzY2hlbWVDYXRlZ29yeTEwIiwiZm9yY2VTdHJlbmd0aCIsIk9iamVjdCIsImFzc2lnbiIsIl9kYXRhIiwidXBkYXRlRGF0YSIsImhlaWdodCIsImluaXQiLCJjb25zb2xlIiwibG9nIiwiZHJhdyIsInZhbHVlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic2VsZWN0aW9uIiwib2JqIiwidyIsImgiLCJkYXRhX3RvdGFsIiwiZWFjaCIsImRlY29uc3RydWN0VHJhbnNsYXRlIiwidHJhbnNsYXRlU3RyaW5nIiwicmVwbGFjZSIsInJlZ2V4IiwiUmVnRXhwIiwibWF0Y2giLCJleGVjIiwieCIsInkiLCJjb25zdHJ1Y3RUcmFuc2xhdGUiLCJ3cmFwIiwidGV4dHdyYXAiLCJtZXRob2QiLCJwYXJzZURhdGEiLCJmb3JFYWNoIiwiZCIsImF1dGhvcnMiLCJ1bmRlZmluZWQiLCJub2RlX3JhbmsiLCJ2ZW51ZSIsInllYXIiLCJ1cmwiLCJ0aXRsZSIsInNlbGVjdCIsIndpbmRvdyIsIm9uIiwiZGlzcGxheSIsImxhbmUiLCJtYXJrVHlwZSIsImdldFBhcmFtZXRlckJ5TmFtZSIsImRhdGFCeVllYXIiLCJuZXN0Iiwia2V5Iiwic29ydFZhbHVlcyIsImEiLCJiIiwiYXNjZW5kaW5nIiwiZW50cmllcyIsImZpcnN0VGl0bGUiLCJ2YWx1ZXMiLCJpZCIsInN1bV9laWdlbmZhY3RvciIsInN1bSIsImRkIiwibWF4RGF0YUJ5WWVhciIsIm1heCIsImxhbmVzIiwibGFuZUxlbmd0aCIsInRpbWVCZWdpbiIsIm1pbiIsInRpbWVFbmQiLCJtIiwibWluaUhlaWdodCIsIm1haW5IZWlnaHQiLCJtYWluTWluUmFkIiwibWFpbk1heFJhZCIsIm1pbmlNaW5SYWQiLCJtaW5pTWF4UmFkIiwibWluRXh0ZW50IiwibWF4RXh0ZW50Iiwic3R5bGVzQmFzZSIsInN0eWxlc1Zpc2libGUiLCJsaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsIngxIiwieTEiLCJ5MiIsImVmRXh0ZW50IiwiZXh0ZW50IiwiZWZTY2FsZU1pbmkiLCJlZlNjYWxlTWFpbiIsImVmU3VtU2NhbGUiLCJjaGFydFdpZHRoIiwiY2hhcnRIZWlnaHQiLCJjaGFydCIsImFwcGVuZCIsImF0dHIiLCJtYWluQ29udGFpbmVyIiwibWFpbiIsIm1pbmlDb250YWluZXIiLCJtaW5pIiwibWFpbkxhbmVMaW5lc0ciLCJpIiwibGVuIiwibWFpbkxhYmVsRyIsIm1haW5MYWJlbCIsInRleHQiLCJzdHlsZSIsImJvdW5kcyIsImNhbGwiLCJtaW5pTGFuZUxpbmVzRyIsIm1pbmlMYWJlbCIsInhBeGlzTWluaSIsInN2ZyIsImF4aXMiLCJvcmllbnQiLCJ0aWNrRm9ybWF0IiwiZm9ybWF0IiwieEF4aXNNYWluIiwieEF4aXNNYWluT2JqIiwibWFpbkNsaXBQYXRoIiwibWluaUl0ZW1zIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJyYWRpdXMiLCJzdGFja0l0ZW1zIiwiaXRlbXMiLCJ5ZWFyc0xpc3QiLCJwdXNoIiwibWF4UmFkIiwiX19kYXRhX18iLCJ0aGlzWWVhck1pbmkiLCJmaWx0ZXIiLCJtaW5pTWFya09wYWNpdHkiLCJNYXRoIiwibWluaU1hcmtzIiwieWVhckl0ZW1zIiwieWVhck1hcmtzIiwiY29udHJhY3QiLCJzZWwiLCJwYXBlckl0ZW1zIiwidGhpc1llYXJJdGVtIiwiZXhwYW5kIiwiaWR4Iiwic3BhbiIsImpvaW4iLCJodG1sIiwicGFwZXJNYXJrcyIsImJib3giLCJub2RlIiwiZ2V0QkJveCIsImluc2VydCIsInBhcGVyTGFiZWxzIiwiYnJ1c2giLCJleHRlbnRMaW5lcyIsInVwZGF0ZUV4dGVudExpbmVzIiwibGVmdCIsInJpZ2h0IiwiZW1wdHkiLCJzY3JvbGxEdXIiLCJtb3ZlQnJ1c2giLCJkaXJlY3Rpb24iLCJjaGFuZ2VFeHRlbnQiLCJyb3VuZCIsInNjcm9sbEl0ZW1zIiwiem9vbUl0ZW1zIiwiem9vbU1vdXNlT3ZlciIsInpvb21Nb3VzZU91dCIsInN0b3AiLCJmYWRlVG8iLCJjbGVhckJydXNoSWNvbiIsImV2ZW50Iiwid2hlZWxEZWx0YVkiLCJ3aGVlbERlbHRhWCIsIm1pZHBvaW50WWVhciIsImJydXNoSW5pdCIsImRvY3VtZW50IiwidHJpZ2dlciIsInllYXIxIiwieWVhcjIiLCJkdXJhdGlvbiIsImVhc2UiLCJkZWxheSIsInRyYW5zaXRpb24iLCJleHBhbmRBbGwiLCJtYXhFRiIsImNsZWFyQnJ1c2giLCJtaWQiLCJleHRlbnRTZWxlY3QiLCJtaW5FeHRlbnRTY3JlZW4iLCJtYXhFeHRlbnRTY3JlZW4iLCJpbnZlcnQiLCJjbGFzc2VkIiwidXBkYXRlTWFpbiIsInZpc0l0ZW1zIiwibm90VmlzSXRlbXMiLCJpdGVtIiwiX3JvdGF0ZSIsInJvdGF0aW9uIiwibGFiZWxzIiwiYWxwaGEiLCJzcGFjaW5nIiwicmVsYXgiLCJhZ2FpbiIsImRhIiwiYXgiLCJkYiIsImJ4IiwiZGVsdGFYIiwiYWJzIiwic2lnbiIsImxhYmVsc0NvbGxpc2lvbkRldGVjdCIsImFmdGVyVHJhbnNpdGlvblgiLCJhZnRlclRyYW5zaXRpb25ZIiwieWVhckl0ZW0iLCJ0aGlzWWVhciIsImR1ciIsInRyYW5zaXRpb25TdGFydFN0eWxlIiwidHJhbnNpdGlvbkVuZFN0eWxlIiwibGluZSIsImxpbmVkYXRhIiwic3R5bGVUd2VlbiIsImludGVycG9sYXRlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImRhdHVtIiwicmVtb3ZlIiwiY2hlY2tTaW5nbGVMYWJlbCIsIndyYXBJbkFuY2hvciIsInN0YWJsZV91cmwiLCJ0aGlzTGFiZWwiLCJ3b3JkcyIsInNwbGl0IiwiZ2l2ZVVwVGhyZXNob2xkIiwidmlld0xlZnRFZGdlIiwicG9zaXRpb24iLCJsZWZ0UG9zIiwibnVtV29yZHMiLCJzbGljZSIsInNob3J0ZW5lZFRpdGxlIiwiZGVtb0luaXQiLCJkaXNhYmxlSW50ZXJhY3Rpb24iLCJkZW1vUXVpdCIsImN1cnNvckljb24iLCJ0cmFuc2l0aW9uVGltZXMiLCJ5ZWFyUmFuZ2UiLCJpbml0QnJ1c2hSYW5nZSIsImZsb29yIiwiaW5pdEJydXNoUG9zaXRpb24iLCJudW1WaXNJdGVtcyIsInNpemUiLCJzZWxJbmRleCIsImNlaWwiLCJkZW1vWWVhckl0ZW0iLCJkZW1vRHJhd0JydXNoIiwiZGVtb0VuZCIsInhQb3MiLCJkZW1vRXhwYW5kIiwiZGVtb1llYXJNYXJrIiwidHJhbnNsYXRlU3RyIiwidHJhbnNsYXRlQ29vcmQiLCJ0cmFuc2xhdGUiLCJlbmFibGVJbnRlcmFjdGlvbiIsInRlc3RQbGFjZUN1cnNvciIsInRlc3RDaGFuZ2VIZWlnaHQiLCJjdXJyTWFpbkhlaWdodCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0c7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRztBQUNBO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7ZUFHY3JNLFc7Ozs7Ozs7Ozs7Ozs7QUM1aURmLGdEOzs7Ozs7Ozs7OztBQ0FBLG9EIiwiZmlsZSI6ImQzX2FydGljbGVfdGltZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJkM1wiKSwgcmVxdWlyZShcImpRdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImQzX2FydGljbGVfdGltZWxpbmVcIiwgW1wiZDNcIiwgXCJqUXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZDNfYXJ0aWNsZV90aW1lbGluZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImQzXCIpLCByZXF1aXJlKFwialF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkM19hcnRpY2xlX3RpbWVsaW5lXCJdID0gZmFjdG9yeShyb290W1wiZDNcIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFRpbWVsaW5lVmlzIGZyb20gJy4vdGltZWxpbmVWaXNfTWFpbi5qcyc7XG5leHBvcnQgeyBUaW1lbGluZVZpcyB9O1xuXG4iLCIvLyBidWlsZGluZyBvZmYgaHR0cDovL2JsLm9ja3Mub3JnL2J1bmthdC8yMzM4MDM0XG4vL1xuLy9cbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcbmNvbnN0ICQgPSBqUXVlcnk7XG5cbi8vIHJldXNhYmxlIGNoYXJ0IHBhdHRlcm4gaW5zcGlyZWQgYnk6XG4vLyBodHRwczovL2Jvc3Qub2Nrcy5vcmcvbWlrZS9jaGFydC9cbi8vIGFuZFxuLy8gaHR0cHM6Ly93d3cudG9wdGFsLmNvbS9kMy1qcy90b3dhcmRzLXJldXNhYmxlLWQzLWpzLWNoYXJ0c1xuY2xhc3MgVGltZWxpbmVWaXMge1xuXHRjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcblx0XHRjb25zdCBkZWZhdWx0cyA9IHtcblx0XHRcdGVsOiBudWxsLFxuXHRcdFx0ZGF0YTogbnVsbCxcblx0XHRcdHdpZHRoOiA5NjAsXG5cdFx0XHRjb2xvcjogZDMuc2NhbGUub3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKSxcblx0XHRcdGZvcmNlU3RyZW5ndGg6IC0yLFxuXHRcdH07XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBkZWZhdWx0cywgb3B0cyk7ICAvLyBvcHRzIHdpbGwgb3ZlcndyaXRlIGRlZmF1bHRzXG5cdFx0dGhpcy5fZGF0YSA9IHRoaXMuZGF0YTtcblx0XHR0aGlzLmRhdGEgPSB0aGlzLnVwZGF0ZURhdGE7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmhlaWdodCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHRoaXMuaGVpZ2h0ID0gLjYyNSAqIHRoaXMud2lkdGg7XG5cdFx0fVxuXHRcdC8vIHRoaXMubWFueUJvZHkgPSBkMy5mb3JjZU1hbnlCb2R5KClcblx0XHQvLyBcdFx0XHRcdFx0LnN0cmVuZ3RoKHRoaXMuZm9yY2VTdHJlbmd0aCk7XG5cdFx0dGhpcy5pbml0ID0gZmFsc2U7XG5cdFx0Y29uc29sZS5sb2codGhpcy5fZGF0YSk7XG5cdFx0aWYgKHRoaXMuZWwgIT09IG51bGwgJiYgdGhpcy5fZGF0YSAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5kcmF3KHRoaXMuZWwpO1xuXHRcdFx0dGhpcy5pbml0ID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHR1cGRhdGVEYXRhKHZhbHVlKSB7XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fZGF0YTtcblx0XHR0aGlzLl9kYXRhID0gdmFsdWU7XG5cdFx0aWYgKHRoaXMuaW5pdCA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMuZHJhdyh0aGlzLmVsKTtcblx0XHRcdHRoaXMuaW5pdCA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHRoaXMudXBkYXRlRGF0YSgpO1xuXHRcdFx0Ly8gTk9UIElNUExFTUVOVEVEXG5cdFx0XHRjb25zb2xlLmxvZyhcIlVQREFUSU5HIERBVEEgTk9UIFlFVCBJTVBMRU1FTlRFRFwiKTtcblx0XHR9XG5cdFx0Ly8gY29uc29sZS5sb2codHlwZW9mIHVwZGF0ZURhdGEpO1xuXHRcdC8vIGlmICh0eXBlb2YgdXBkYXRlRGF0YSA9PT0gJ2Z1bmN0aW9uJykgdXBkYXRlRGF0YSgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdGRyYXcoc2VsZWN0aW9uKSB7XG5cdFx0dmFyIG9iaiA9IHRoaXM7XG5cdFx0dmFyIHcgPSB0aGlzLndpZHRoO1xuXHRcdHZhciBoID0gdGhpcy5oZWlnaHQ7XG5cdFx0dmFyIGRhdGFfdG90YWwgPSB0aGlzLl9kYXRhO1xuXHRcdHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0ZnVuY3Rpb24gZGVjb25zdHJ1Y3RUcmFuc2xhdGUodHJhbnNsYXRlU3RyaW5nKSB7XG5cdFx0XHRcdC8vIHRha2VzIGEgc3RyaW5nIGxpa2UgXCJ0cmFuc2xhdGUoMTAwLDIwMClcIiBhbmQgcmV0dXJucyB0aGUgbnVtYmVycyBbMTAwLCAyMDBdXG5cdFx0XHRcdHRyYW5zbGF0ZVN0cmluZyA9IHRyYW5zbGF0ZVN0cmluZy5yZXBsYWNlKFwiKFwiLCBcIlwiKS5yZXBsYWNlKFwiKVwiLCBcIlwiKTtcblx0XHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgvdHJhbnNsYXRlKFtcXGRcXC5dKyksKFtcXGRcXC5dKykvKTtcblx0XHRcdFx0dmFyIG1hdGNoID0gcmVnZXguZXhlYyh0cmFuc2xhdGVTdHJpbmcpO1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHg6ICttYXRjaFsxXSxcblx0XHRcdFx0XHR5OiArbWF0Y2hbMl1cblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gY29uc3RydWN0VHJhbnNsYXRlKHgsIHkpIHtcblx0XHRcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgeCArIFwiLFwiICsgeSArIFwiKVwiO1xuXHRcdFx0fVxuXG5cblx0XHRcdHZhciB3cmFwID0gZDMudGV4dHdyYXAoKS5tZXRob2QoXCJ0c3BhbnNcIik7XG5cblx0XHRcdGZ1bmN0aW9uIHBhcnNlRGF0YShkYXRhKSB7XG5cdFx0XHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0ZC5hdXRob3JzID0gZFtcImF1dGhvcnNcIl07ICAvLyBsaXN0IG9mIGF1dGhvciBuYW1lc1xuXHRcdFx0XHRcdGlmIChkLmF1dGhvcnMgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0ZC5hdXRob3JzID0gW107XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGQubm9kZV9yYW5rID0gZFtcIm5vZGVfcmFua1wiXTtcblx0XHRcdFx0XHRkLnZlbnVlID0gZFtcImpvdXJuYWxcIl07XG5cdFx0XHRcdFx0aWYgKGQudmVudWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0ZC52ZW51ZSA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGQueWVhciA9IGRbXCJ5ZWFyXCJdO1xuXHRcdFx0XHRcdGQudXJsID0gZFtcInVybFwiXTtcblx0XHRcdFx0XHRkLnRpdGxlID0gZFtcImRpc3BsYXlfdGl0bGVcIl07XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gZGF0YTtcblx0XHRcdH1cblxuXG5cdFx0XHRkMy5zZWxlY3Qod2luZG93KS5vbihcInJlc2l6ZVwiLCBkaXNwbGF5KVxuXHRcdFx0ZGF0YV90b3RhbCA9IHBhcnNlRGF0YShkYXRhX3RvdGFsKTtcblx0XHRcdGRhdGFfdG90YWwuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdGQubGFuZSA9IDA7XG5cdFx0XHRcdGlmIChkLm5vZGVfcmFuayA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGQubm9kZV9yYW5rID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHR2YXIgbWFya1R5cGUgPSBnZXRQYXJhbWV0ZXJCeU5hbWUoJ20nKTtcblx0XHRcdGlmICggKG1hcmtUeXBlICE9ICdpY29uJykgJiYgKG1hcmtUeXBlICE9ICdjaXJjbGUnKSApIHtcblx0XHRcdFx0bWFya1R5cGUgPSAnY2lyY2xlJyAgLy8gZGVmYXVsdFxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgZGF0YUJ5WWVhciA9IGQzLm5lc3QoKVxuXHRcdFx0XHRcdFx0XHRcdC5rZXkoZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXI7fSlcblx0XHRcdFx0XHRcdFx0XHQuc29ydFZhbHVlcyhmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyByZXR1cm4gZDMuZGVzY2VuZGluZyhhLmVpZ2VuZmFjdG9yX3Njb3JlLCBiLmVpZ2VuZmFjdG9yX3Njb3JlKTtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIHJldHVybiBkMy5hc2NlbmRpbmcoYS5wdWJkYXRlLCBiLnB1YmRhdGUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGQzLmFzY2VuZGluZyhhLnRpdGxlLCBiLnRpdGxlKTtcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdC8vIC5tYXAoZGF0YV90b3RhbCwgZDMubWFwKTtcblx0XHRcdFx0XHRcdFx0XHQuZW50cmllcyhkYXRhX3RvdGFsKTtcblx0XHRcdGRhdGFCeVllYXIuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdGQuZmlyc3RUaXRsZSA9IGQudmFsdWVzWzBdLmlkO1xuXHRcdFx0XHRkLnN1bV9laWdlbmZhY3RvciA9IGQzLnN1bShkLnZhbHVlcywgZnVuY3Rpb24oZGQpIHtyZXR1cm4gZGQubm9kZV9yYW5rO30pO1xuXHRcdFx0XHRkLmxhbmUgPSAwO1xuXHRcdFx0XHRkLnllYXIgPSArZC5rZXk7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBtYXhEYXRhQnlZZWFyID0gZDMubWF4KGRhdGFCeVllYXIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudmFsdWVzLmxlbmd0aDsgfSk7XG5cblx0XHRcdHZhciBsYW5lcyA9IFtcIkNsaW1hdGUgY2hhbmdlXCJdLFxuXHRcdFx0XHRcdFx0bGFuZUxlbmd0aCA9IGxhbmVzLmxlbmd0aCxcblx0XHRcdFx0XHQvLyB0aW1lQmVnaW4gPSBuZXcgRGF0ZShTdHJpbmcobWluWWVhci0xKSksXG5cdFx0XHRcdFx0dGltZUJlZ2luID0gK2QzLm1pbihkYXRhQnlZZWFyLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnllYXI7IH0pIC0gMSxcblx0XHRcdFx0XHR0aW1lRW5kID0gK2QzLm1heChkYXRhQnlZZWFyLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnllYXI7IH0pICsgMTtcblxuXHRcdFx0dmFyIG0gPSBbMjAsIDE1LCAxNSwgMTUwXTsgLy90b3AgcmlnaHQgYm90dG9tIGxlZnRcblx0XHRcdFx0Ly8gdyA9IDk2MCAtIG1bMV0gLSBtWzNdLFxuXHRcdFx0XHQvLyBoID0gMzUwIC0gbVswXSAtIG1bMl0sXG5cdFx0XHR3ID0gdyAtIG1bMV0gLSBtWzNdO1xuXHRcdFx0aCA9IGggLSBtWzBdIC0gbVsyXTtcblx0XHRcdHZhciBtaW5pSGVpZ2h0ID0gbGFuZUxlbmd0aCAqIDEyICsgMzAsXG5cdFx0XHRcdG1haW5IZWlnaHQgPSBoIC0gbWluaUhlaWdodCAtIDUwO1xuXG5cdFx0XHR2YXIgbWFpbk1pblJhZCA9IDgsXG5cdFx0XHRcdG1haW5NYXhSYWQgPSAxOCxcblx0XHRcdFx0bWluaU1pblJhZCA9IDUsXG5cdFx0XHRcdG1pbmlNYXhSYWQgPSAxMDtcblxuXHRcdFx0dmFyIG1pbkV4dGVudCwgbWF4RXh0ZW50OyAgLy8gdGhlc2Ugd2lsbCBiZSB0aGUgbG93ZXIgYW5kIHVwcGVyIHllYXJzIGRpc3BsYXllZCBpbiBtYWluXG5cblx0XHRcdHZhciBzdHlsZXNCYXNlID0ge1xuXHRcdFx0XHQnb3BhY2l0eSc6IC4yXG5cdFx0XHR9O1xuXHRcdFx0dmFyIHN0eWxlc1Zpc2libGUgPSB7XG5cdFx0XHRcdCdvcGFjaXR5JzogMVxuXHRcdFx0fTtcblxuXHRcdFx0Ly9zY2FsZXNcblx0XHRcdHZhciB4ID0gZDMuc2NhbGUubGluZWFyKClcblx0XHRcdFx0XHQuZG9tYWluKFt0aW1lQmVnaW4sIHRpbWVFbmRdKVxuXHRcdFx0XHRcdC5yYW5nZShbMCwgd10pO1xuXHRcdFx0dmFyIHgxID0gZDMuc2NhbGUubGluZWFyKClcblx0XHRcdFx0XHQucmFuZ2UoWzAsIHddKTtcblx0XHRcdHZhciB5MSA9IGQzLnNjYWxlLmxpbmVhcigpXG5cdFx0XHRcdFx0LmRvbWFpbihbMCwgbGFuZUxlbmd0aF0pXG5cdFx0XHRcdFx0LnJhbmdlKFswLCBtYWluSGVpZ2h0XSk7XG5cdFx0XHR2YXIgeTIgPSBkMy5zY2FsZS5saW5lYXIoKVxuXHRcdFx0XHRcdC5kb21haW4oWzAsIGxhbmVMZW5ndGhdKVxuXHRcdFx0XHRcdC5yYW5nZShbMCwgbWluaUhlaWdodF0pO1xuXHRcdFx0dmFyIGVmRXh0ZW50ID0gZDMuZXh0ZW50KGRhdGFfdG90YWwsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQubm9kZV9yYW5rOyB9KTtcblx0XHRcdHZhciBlZlNjYWxlTWluaSA9IGQzLnNjYWxlLmxpbmVhcigpXG5cdFx0XHRcdFx0LmRvbWFpbihlZkV4dGVudClcblx0XHRcdFx0XHQvLyAucmFuZ2UoWzAsIDVdKTtcblx0XHRcdFx0XHQucmFuZ2UoW21pbmlNaW5SYWQsIG1pbmlNYXhSYWRdKTtcblx0XHRcdHZhciBlZlNjYWxlTWFpbiA9IGQzLnNjYWxlLmxpbmVhcigpXG5cdFx0XHRcdFx0LmRvbWFpbihlZkV4dGVudClcblx0XHRcdFx0XHQvLyAucmFuZ2UoWzAsIDVdKTtcblx0XHRcdFx0XHQucmFuZ2UoW21haW5NaW5SYWQsIG1haW5NYXhSYWRdKTtcblx0XHRcdHZhciBlZlN1bVNjYWxlID0gZDMuc2NhbGUubGluZWFyKClcblx0XHRcdFx0XHQuZG9tYWluKGQzLmV4dGVudChkYXRhQnlZZWFyLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnN1bV9laWdlbmZhY3RvcjsgfSkpXG5cdFx0XHRcdFx0Ly8gLnJhbmdlKFswLCA1XSk7XG5cdFx0XHRcdFx0LnJhbmdlKFttYWluTWluUmFkLCBtYWluTWF4UmFkXSk7XG5cblxuXHRcdFx0dmFyIGNoYXJ0V2lkdGggPSB3ICsgbVsxXSArIG1bM10sXG5cdFx0XHRcdGNoYXJ0SGVpZ2h0ID0gaCArIG1bMF0gKyBtWzJdO1xuXG5cdFx0XHR2YXIgY2hhcnQgPSBkMy5zZWxlY3QoXCIjdGltZWxpbmVcIilcblx0XHRcdFx0XHRcdC5hcHBlbmQoXCJzdmdcIilcblx0XHRcdFx0XHRcdC8vIC5hdHRyKFwid2lkdGhcIiwgY2hhcnRXaWR0aClcblx0XHRcdFx0XHRcdC8vIC5hdHRyKFwiaGVpZ2h0XCIsIGNoYXJ0SGVpZ2h0KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJkYXRhLW1heGltaXplZEhlaWdodFwiLCBjaGFydEhlaWdodClcblx0XHRcdFx0XHRcdC5hdHRyKFwiZGF0YS1jdXJySGVpZ2h0XCIsIGNoYXJ0SGVpZ2h0KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIFwiICsgY2hhcnRXaWR0aCArIFwiIFwiICsgY2hhcnRIZWlnaHQpXG5cdFx0XHRcdFx0XHQuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWlkWU1pZCBtZWV0XCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwiY2hhcnRcIik7XG5cdFx0XHRcblx0XHRcdGNoYXJ0LmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwiY2xpcFBhdGhcIilcblx0XHRcdFx0LmF0dHIoXCJpZFwiLCBcImNsaXBcIilcblx0XHRcdFx0LmFwcGVuZChcInJlY3RcIilcblx0XHRcdFx0LmF0dHIoXCJ3aWR0aFwiLCB3KVxuXHRcdFx0XHQuYXR0cihcImhlaWdodFwiLCBtYWluSGVpZ2h0KTtcblxuXHRcdFx0dmFyIG1haW5Db250YWluZXIgPSBjaGFydC5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgbVswXSArIFwiKVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ3aWR0aFwiLCBjaGFydFdpZHRoKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJoZWlnaHRcIiwgbWFpbkhlaWdodClcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJtYWluQ29udGFpbmVyXCIpO1xuXG5cdFx0XHQvLyB2YXIgbWFpbiA9IGNoYXJ0LmFwcGVuZChcImdcIilcblx0XHRcdHZhciBtYWluID0gbWFpbkNvbnRhaW5lci5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdFx0XHQvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1bM10gKyBcIixcIiArIG1bMF0gKyBcIilcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbVszXSArIFwiLDApXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcIndpZHRoXCIsIHcpXG5cdFx0XHRcdFx0XHQuYXR0cihcImhlaWdodFwiLCBtYWluSGVpZ2h0KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcIm1haW5cIik7XG5cblx0XHRcdHZhciBtaW5pQ29udGFpbmVyID0gY2hhcnQuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIChtYWluSGVpZ2h0ICsgbVswXSkgKyBcIilcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwid2lkdGhcIiwgY2hhcnRXaWR0aClcblx0XHRcdFx0XHRcdC5hdHRyKFwiaGVpZ2h0XCIsIG1haW5IZWlnaHQpXG5cdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibWluaUNvbnRhaW5lclwiKTtcblxuXHRcdFx0Ly8gdmFyIG1pbmkgPSBjaGFydC5hcHBlbmQoXCJnXCIpXG5cdFx0XHR2YXIgbWluaSA9IG1pbmlDb250YWluZXIuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdFx0Ly8gLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtWzNdICsgXCIsXCIgKyAobWFpbkhlaWdodCArIG1bMF0pICsgXCIpXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1bM10gKyBcIiwwKVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ3aWR0aFwiLCB3KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJoZWlnaHRcIiwgbWluaUhlaWdodClcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJtaW5pXCIpO1xuXHRcdFx0XG5cdFx0XHQvL21haW4gbGFuZXMgYW5kIHRleHRzXG5cdFx0XHR2YXIgbWFpbkxhbmVMaW5lc0cgPSBtYWluLmFwcGVuZChcImdcIik7XG5cdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gbGFuZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0bWFpbkxhbmVMaW5lc0cuYXBwZW5kKFwibGluZVwiKVxuXHRcdFx0XHRcdC5hdHRyKFwieDFcIiwgbVsxXSlcblx0XHRcdFx0XHQuYXR0cihcInkxXCIsIGZ1bmN0aW9uKCkge3JldHVybiB5MihpKTt9KVxuXHRcdFx0XHRcdC5hdHRyKFwieDJcIiwgdylcblx0XHRcdFx0XHQuYXR0cihcInkyXCIsIGZ1bmN0aW9uKCkge3JldHVybiB5MihpKTt9KVxuXHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJsYW5lTGluZVwiKVxuXHRcdFx0XHRcdC5hdHRyKFwic3Ryb2tlXCIsIFwibGlnaHRncmF5XCIpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbWFpbkxhYmVsRyA9IG1haW5Db250YWluZXIuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiKyhtWzBdKStcIilcIik7XG5cdFx0XHR2YXIgbWFpbkxhYmVsID0gbWFpbkxhYmVsRy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdC50ZXh0KFwiTnVtYmVyIG9mIGFydGljbGVzIGluIHRoZSB5ZWFyXCIpXG5cdFx0XHRcdC8vIC5hdHRyKFwieFwiLCAtbVsxXSlcblx0XHRcdFx0Ly8gLmF0dHIoXCJ4XCIsIDApXG5cdFx0XHRcdC8vIC5hdHRyKFwieVwiLCAxMClcblx0XHRcdFx0LnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMTRweFwiKVxuXHRcdFx0XHQvLyAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJsYW5lVGV4dFwiKVxuXHRcdFx0XHQuYXR0cihcImlkXCIsIFwibWFpbkxhYmVsXCIpO1xuXHRcdFxuXHRcdFx0Ly8gd3JhcC5ib3VuZHMoe2hlaWdodDogbWFpbkhlaWdodCwgd2lkdGg6IG1bM119KS5tZXRob2QoXCJ0c3BhbnNcIik7XG5cdFx0XHR3cmFwLmJvdW5kcyh7aGVpZ2h0OiBtYWluSGVpZ2h0LCB3aWR0aDogKG1bM10gKiAuOSl9KTtcblx0XHRcdC8vIGQzLnNlbGVjdChcIi5sYW5lVGV4dFwiKS5jYWxsKHdyYXApO1xuXHRcdFx0bWFpbkxhYmVsLmNhbGwod3JhcCk7XG5cblx0XHRcdC8vIHZhciBzdWJPZmZzZXQgPSAkKCAnI21haW5MYWJlbCcgKS5oZWlnaHQoKTsgIC8vIHkgb2Zmc2V0IGZvciB0aGUgc3ViIGxhYmVsXG5cdFx0XHQvLyB2YXIgbWFpbkxhYmVsU3ViID0gbWFpbkxhYmVsRy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHQvLyBcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBzdWJPZmZzZXQgKyBcIilcIilcblx0XHRcdC8vIFx0LnRleHQoXCJTaXplIG9mIGNpcmNsZXMgaW5kaWNhdGVzIGxldmVsIG9mIGluZmx1ZW5jZVwiKVxuXHRcdFx0Ly8gXHQuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxMXB4XCIpXG5cdFx0XHQvLyBcdC5hdHRyKFwiY2xhc3NcIiwgXCJsYW5lVGV4dFwiKVxuXHRcdFx0Ly8gXHQuYXR0cihcImlkXCIsIFwibWFpbkxhYmVsU3ViXCIpO1xuICAgICAgICAgICAgLy9cblx0XHRcdC8vIHdyYXAuYm91bmRzKHtoZWlnaHQ6IG1haW5IZWlnaHQgLSBzdWJPZmZzZXQsIHdpZHRoOiAobVszXSAqIC45KX0pO1xuXHRcdFx0Ly8gbWFpbkxhYmVsU3ViLmNhbGwod3JhcCk7XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0Ly9taW5pIGxhbmVzIGFuZCB0ZXh0c1xuXHRcdFx0dmFyIG1pbmlMYW5lTGluZXNHID0gbWluaS5hcHBlbmQoXCJnXCIpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGxhbmVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdG1pbmlMYW5lTGluZXNHLmFwcGVuZChcImxpbmVcIilcblx0XHRcdFx0XHQuYXR0cihcIngxXCIsIG1bMV0pXG5cdFx0XHRcdFx0LmF0dHIoXCJ5MVwiLCBmdW5jdGlvbigpIHtyZXR1cm4geTIoaSk7fSlcblx0XHRcdFx0XHQuYXR0cihcIngyXCIsIHcpXG5cdFx0XHRcdFx0LmF0dHIoXCJ5MlwiLCBmdW5jdGlvbigpIHtyZXR1cm4geTIoaSk7fSlcblx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibGFuZUxpbmVcIilcblx0XHRcdFx0XHQuYXR0cihcInN0cm9rZVwiLCBcImxpZ2h0Z3JheVwiKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIG1pbmlMYWJlbCA9IG1pbmlDb250YWluZXIuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiKyBtWzBdICtcIilcIilcblx0XHRcdFx0LmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0LnRleHQoXCJTZWxlY3QgZGF0ZSByYW5nZSB0byBmb2N1cyBvbjpcIilcblx0XHRcdFx0Ly8gLmF0dHIoXCJ4XCIsIC1tWzFdKVxuXHRcdFx0XHQvLyAuYXR0cihcInhcIiwgMClcblx0XHRcdFx0Ly8gLmF0dHIoXCJ5XCIsIDEwKVxuXHRcdFx0XHQuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxNHB4XCIpXG5cdFx0XHRcdC8vIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImxhbmVUZXh0XCIpO1xuXG5cdFx0XHR3cmFwLmJvdW5kcyh7aGVpZ2h0OiBtaW5pSGVpZ2h0LCB3aWR0aDogKG1bM10gKiAuOSl9KTtcblx0XHRcdC8vIGQzLnNlbGVjdChcIi5sYW5lVGV4dFwiKS5jYWxsKHdyYXApO1xuXHRcdFx0bWluaUxhYmVsLmNhbGwod3JhcCk7XG5cblx0XHRcdC8vIG1pbmkuYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoXCIubGFuZVRleHRcIilcblx0XHRcdC8vIFx0LmRhdGEobGFuZXMpXG5cdFx0XHQvLyBcdC5lbnRlcigpLmFwcGVuZChcInRleHRcIilcblx0XHRcdC8vIFx0LnRleHQoZnVuY3Rpb24oZCkge3JldHVybiBkO30pXG5cdFx0XHQvLyBcdC5hdHRyKFwieFwiLCAtbVsxXSlcblx0XHRcdC8vIFx0LmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQsIGkpIHtyZXR1cm4geTIoaSArIC41KTt9KVxuXHRcdFx0Ly8gXHQuYXR0cihcImR5XCIsIFwiLjVleFwiKVxuXHRcdFx0Ly8gXHQuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG5cdFx0XHQvLyBcdC5hdHRyKFwiY2xhc3NcIiwgXCJsYW5lVGV4dFwiKTtcblxuXHRcdFx0Ly8gQXhlc1xuXHRcdFx0dmFyIHhBeGlzTWluaSA9IGQzLnN2Zy5heGlzKClcblx0XHRcdFx0Lm9yaWVudChcImJvdHRvbVwiKVxuXHRcdFx0XHQvLyAudGlja3MoNSlcblx0XHRcdFx0LnNjYWxlKHgpXG5cdFx0XHRcdC50aWNrRm9ybWF0KGQzLmZvcm1hdChcImRcIikpO1xuXG5cdFx0XHRtaW5pLmFwcGVuZChcImdcIilcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInhheGlzXCIpXG5cdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyAobWluaUhlaWdodCkgKyBcIilcIilcblx0XHRcdFx0LmNhbGwoeEF4aXNNaW5pKTtcblxuXHRcdFx0dmFyIHhBeGlzTWFpbiA9IGQzLnN2Zy5heGlzKClcblx0XHRcdFx0Lm9yaWVudChcInRvcFwiKVxuXHRcdFx0XHQuc2NhbGUoeDEpXG5cdFx0XHRcdC50aWNrRm9ybWF0KGQzLmZvcm1hdChcImRcIikpO1xuXG5cdFx0XHR2YXIgeEF4aXNNYWluT2JqID0gbWFpbi5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJ4YXhpc1wiKVxuXHRcdFx0XHQuY2FsbCh4QXhpc01haW4pO1xuXG5cdFx0XHR2YXIgbWFpbkNsaXBQYXRoID0gbWFpbi5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcIm1haW5DbGlwUGF0aFwiKVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKFwiY2xpcC1wYXRoXCIsIFwidXJsKCNjbGlwKVwiKTtcblxuXHRcdFx0XG5cdFx0XHQvL21pbmkgaXRlbXNcblx0XHRcdC8vIG5vdGU6IG1vdXNlb3ZlciBldmVudHMgd2lsbCBub3QgcGxheSB3ZWxsIHdpdGggdGhlIGJydXNoXG5cdFx0XHR2YXIgbWluaUl0ZW1zID0gbWluaS5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcIi5taW5pSXRlbVwiKVxuXHRcdFx0XHQuZGF0YShkYXRhX3RvdGFsKVxuXHRcdFx0XHQuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJtaW5pSXRlbVwiKVxuXHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0ZC54ID0geChkLnllYXIpO1xuXHRcdFx0XHRcdC8vIGQueSA9IDA7ICAvLyBmb3Igbm93XG5cdFx0XHRcdFx0ZC55ID0gbWluaUhlaWdodCAvIDI7XG5cdFx0XHRcdFx0Ly8gZC5yYWRpdXMgPSA1ICsgZWZTY2FsZShkLmVpZ2VuZmFjdG9yX3Njb3JlKTtcblx0XHRcdFx0XHRkLnJhZGl1cyA9IDEgKyAoIGVmU2NhbGVNaW5pKGQubm9kZV9yYW5rKSApO1xuXHRcdFx0XHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHQvLyBub3QgY3VycmVudGx5IHVzaW5nIHRoaXNcblx0XHRcdGZ1bmN0aW9uIHN0YWNrSXRlbXMoaXRlbXMsIHNjYWxlKSB7XG5cdFx0XHRcdHZhciB5ZWFyc0xpc3QgPSBbXTtcblx0XHRcdFx0aXRlbXMuZWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0aWYgKCAhKGQueWVhciBpbiB5ZWFyc0xpc3QpICkge1xuXHRcdFx0XHRcdFx0eWVhcnNMaXN0LnB1c2goZC55ZWFyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR2YXIgbWF4UmFkID0gZDMubWF4KGl0ZW1zWzBdLCBmdW5jdGlvbihkKSB7cmV0dXJuIGQuX19kYXRhX18ucmFkaXVzfSk7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSB5ZWFyc0xpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0XHR0aGlzWWVhck1pbmkgPSBpdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXI9PXllYXJzTGlzdFtpXX0pO1xuXHRcdFx0XHRcdHZhciB5ID0gMDtcblx0XHRcdFx0XHR0aGlzWWVhck1pbmkuZWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRpZiAoeSA9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHkgPSBzY2FsZShkLmxhbmUpICsgbWF4UmFkO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0eSA9IHkgKyAyKmQucmFkaXVzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZC55ID0geTtcblx0XHRcdFx0XHRcdGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBzdGFja0l0ZW1zKG1pbmlJdGVtcywgeTIpO1xuXG5cdFx0XHR2YXIgbWluaU1hcmtPcGFjaXR5ID0gTWF0aC5tYXgoICgxL21heERhdGFCeVllYXIpLCAwLjMgKTtcblx0XHRcdHZhciBtaW5pTWFya3MgPSBtaW5pSXRlbXMuYXBwZW5kKFwiY2lyY2xlXCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJtaW5pTWFya1wiKVxuXHRcdFx0XHQuYXR0cihcInJcIiwgZnVuY3Rpb24oZCkge3JldHVybiBkLnJhZGl1czt9KVxuXHRcdFx0XHQvLyAuc3R5bGUoc3R5bGVzQmFzZSk7XG5cdFx0XHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgbWluaU1hcmtPcGFjaXR5KTtcblxuXG5cdFx0XHRzd2l0Y2ggKG1hcmtUeXBlKSB7XG5cdFx0XHRcdGNhc2UgJ2NpcmNsZSc6XG5cdFx0XHRcdFx0Ly9tYWluIGl0ZW1zXG5cdFx0XHRcdFx0dmFyIHllYXJJdGVtcyA9IG1haW5DbGlwUGF0aC5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcIi55ZWFySXRlbVwiKVxuXHRcdFx0XHRcdFx0LmRhdGEoZGF0YUJ5WWVhcilcblx0XHRcdFx0XHRcdC5lbnRlcigpLmFwcGVuZChcImdcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJ5ZWFySXRlbVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRkLnggPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0XHRcdGQueSA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHRcdFx0Ly8gZC5yYWRpdXMgPSBtYWluTWluUmFkICsgKDIgKiBlZlN1bVNjYWxlKGQuc3VtX2VpZ2VuZmFjdG9yKSk7XG5cdFx0XHRcdFx0XHRcdGQucmFkaXVzID0gZWZTdW1TY2FsZShkLnN1bV9laWdlbmZhY3Rvcik7XG5cdFx0XHRcdFx0XHRcdC8vIGQucmFkaXVzID0gbWFpbk1pblJhZCArIChkLnZhbHVlcy5sZW5ndGgqMik7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHZhciB5ZWFyTWFya3MgPSB5ZWFySXRlbXMuYXBwZW5kKFwiY2lyY2xlXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwieWVhck1hcmtcIilcblx0XHRcdFx0XHRcdC8vIC5vbignbW91c2VvdmVyJywgZXhwYW5kKVxuXHRcdFx0XHRcdFx0Lm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRyYWN0KCk7XG5cdFx0XHRcdFx0XHRcdHZhciBzZWwgPSBwYXBlckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkZCkge3JldHVybiBkZC55ZWFyPT09ZC55ZWFyfSk7XG5cdFx0XHRcdFx0XHRcdHZhciB0aGlzWWVhckl0ZW0gPSBkMy5zZWxlY3QodGhpcyk7XG5cdFx0XHRcdFx0XHRcdGV4cGFuZChzZWwsIHRoaXNZZWFySXRlbSk7XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQvLyAub24oJ21vdXNlb3V0JywgY29udHJhY3QpXG5cdFx0XHRcdFx0XHQuc3R5bGUoc3R5bGVzVmlzaWJsZSk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHQvL2xhYmVsIGZvciBudW1iZXIgb2YgcGFwZXJzXG5cdFx0XHRcdFx0eWVhckl0ZW1zLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwieVwiLCBcIi4zZW1cIikgIC8vbnVkZ2Vcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJudW1JbmRpY2F0b3JcIilcblx0XHRcdFx0XHRcdC50ZXh0KGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC52YWx1ZXMubGVuZ3RoO30pO1xuXG5cdFx0XHRcdFx0dmFyIHBhcGVySXRlbXMgPSB5ZWFySXRlbXMuYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoXCIucGFwZXJJdGVtXCIpXG5cdFx0XHRcdFx0XHQuZGF0YShmdW5jdGlvbihkKSB7cmV0dXJuIGQudmFsdWVzfSlcblx0XHRcdFx0XHRcdC5lbnRlcigpLmFwcGVuZChcImdcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJwYXBlckl0ZW1cIilcblx0XHRcdFx0XHRcdC5hdHRyKFwiZGF0YS15ZWFyXCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyO30pXG5cdFx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkLCBpKSB7XG5cdFx0XHRcdFx0XHRcdGQueCA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHRcdFx0ZC55ID0gMDsgIC8vZm9yIG5vd1xuXHRcdFx0XHRcdFx0XHRkLmlkeCA9IGk7XG5cdFx0XHRcdFx0XHRcdC8vIGQucmFkaXVzID0gbWFpbk1pblJhZCArICgyICogZWZTY2FsZShkLmVpZ2VuZmFjdG9yKSk7XG5cdFx0XHRcdFx0XHRcdGQucmFkaXVzID0gZWZTY2FsZU1haW4oZC5ub2RlX3JhbmspO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5hdHRyKFwidGl0bGVcIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGZvciB0b29sdGlwXG5cdFx0XHRcdFx0XHRcdFx0Ly8gdmFyIHRleHQgPSBkLnRpdGxlXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0KyBcIiwgXCJcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0XHQrIGQuYXV0aG9ycy5qb2luKFwiLCBcIilcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0XHQrIFwiLCBcIlxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHRcdCsgZC5qb3VybmFsXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0KyBcIiwgXCJcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0XHQrIGQueWVhcjtcblx0XHRcdFx0XHRcdFx0XHQvLyByZXR1cm4gdGV4dDtcblx0XHRcdFx0XHRcdFx0dmFyIHNwYW4gPSAkKCAnPHNwYW4+JyApO1xuXHRcdFx0XHRcdFx0XHRzcGFuLmFwcGVuZCggJCggJzxwIGNsYXNzPVwidG9vbHRpcCB0aXRsZVwiPicgKS50ZXh0KGQudGl0bGUpICk7IFxuXHRcdFx0XHRcdFx0XHRzcGFuLmFwcGVuZCggJCggJzxwIGNsYXNzPVwidG9vbHRpcCBhdXRob3JzXCI+JyApLnRleHQoZC5hdXRob3JzLmpvaW4oXCIsIFwiKSkgKTtcblx0XHRcdFx0XHRcdFx0c3Bhbi5hcHBlbmQoICQoICc8cCBjbGFzcz1cInRvb2x0aXAgam91cm5hbFwiPicgKS50ZXh0KGQudmVudWUgPyBkLnZlbnVlIDogXCJKb3VybmFsIFVua25vd25cIikgKTsgXG5cdFx0XHRcdFx0XHRcdHNwYW4uYXBwZW5kKCAkKCAnPHAgY2xhc3M9XCJ0b29sdGlwIHllYXJcIj4nICkudGV4dChkLnllYXIpICk7IFxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gc3Bhbi5odG1sKCk7XG5cblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gdmFyIHQgPSBkMy5zZWxlY3QodGhpcykuc2VsZWN0KCcucGFwZXJMYWJlbCcpO1xuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCQoIHRoaXMgKS5wb3NpdGlvbigpKTtcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygkKCAnLm1haW4nICkucG9zaXRpb24oKS50b3AgKyBtYWluSGVpZ2h0KTtcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0dmFyIHVybCA9IGQudXJsO1xuXHRcdFx0XHRcdFx0XHQvLyB3aW5kb3cub3Blbih1cmwsJ19ibGFuaycpO1xuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHR2YXIgcGFwZXJNYXJrcyA9IHBhcGVySXRlbXMuYXBwZW5kKFwiY2lyY2xlXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcInJcIiwgMCkgIC8vZm9yIG5vd1xuXHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInBhcGVyTWFya1wiKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcblx0XHRcdFx0Y2FzZSAnaWNvbic6XG5cdFx0XHRcdFx0Ly9tYWluIGl0ZW1zXG5cdFx0XHRcdFx0dmFyIHllYXJJdGVtcyA9IG1haW5DbGlwUGF0aC5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcIi55ZWFySXRlbVwiKVxuXHRcdFx0XHRcdFx0LmRhdGEoZGF0YUJ5WWVhcilcblx0XHRcdFx0XHRcdC5lbnRlcigpLmFwcGVuZChcImdcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJ5ZWFySXRlbVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRkLnggPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0XHRcdGQueSA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHRcdFx0Ly8gZC5yYWRpdXMgPSBtYWluTWluUmFkICsgKDIgKiBlZlN1bVNjYWxlKGQuc3VtX2VpZ2VuZmFjdG9yKSk7XG5cdFx0XHRcdFx0XHRcdGQucmFkaXVzID0gZWZTdW1TY2FsZShkLnN1bV9laWdlbmZhY3Rvcik7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR2YXIgcGFwZXJJdGVtcyA9IHllYXJJdGVtcy5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcIi5wYXBlckl0ZW1cIilcblx0XHRcdFx0XHRcdC5kYXRhKGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC52YWx1ZXN9KVxuXHRcdFx0XHRcdFx0LmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInBhcGVySXRlbVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCwgaSkge1xuXHRcdFx0XHRcdFx0XHRkLnggPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0XHRcdGQueSA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHRcdFx0ZC5pZHggPSBpO1xuXHRcdFx0XHRcdFx0XHQvLyBkLnJhZGl1cyA9IG1haW5NaW5SYWQgKyAoMiAqIGVmU2NhbGUoZC5laWdlbmZhY3RvcikpO1xuXHRcdFx0XHRcdFx0XHRkLnJhZGl1cyA9IGVmU2NhbGVNYWluKGQubm9kZV9yYW5rKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjtcblx0XHRcdFx0XHRcdH0pO1xuXG5cblx0XHRcdFx0XHR2YXIgcGFwZXJNYXJrcyA9IHBhcGVySXRlbXMuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInBhcGVyTWFya1wiKVxuXHRcdFx0XHRcdFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0XHRcdFx0LnRleHQoXCJcXHVmMGY2XCIpXG5cdFx0XHRcdFx0XHQvLyAub24oJ21vdXNlb3ZlcicsIGV4cGFuZClcblx0XHRcdFx0XHRcdC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcblx0XHRcdFx0XHRcdC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRjb250cmFjdCgpO1xuXHRcdFx0XHRcdFx0XHR2YXIgc2VsID0gcGFwZXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZGQpIHtyZXR1cm4gZGQueWVhcj09PWQueWVhcn0pO1xuXHRcdFx0XHRcdFx0XHRleHBhbmQoc2VsKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHQvLyAub24oJ21vdXNlb3V0JywgY29udHJhY3QpXG5cblx0XHRcdFx0XHR2YXIgYmJveCA9IHBhcGVyTWFya3Mubm9kZSgpLmdldEJCb3goKTtcblx0XHRcdFx0XHRwYXBlckl0ZW1zLmluc2VydChcInJlY3RcIiwgXCIucGFwZXJNYXJrXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcInhcIiwgYmJveC54KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ5XCIsIGJib3gueSlcblx0XHRcdFx0XHRcdC5hdHRyKFwid2lkdGhcIiwgYmJveC53aWR0aClcblx0XHRcdFx0XHRcdC5hdHRyKFwiaGVpZ2h0XCIsIGJib3guaGVpZ2h0KVxuXHRcdFx0XHRcdFx0LnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xuXG5cdFx0XHRcdFx0Ly8gLy9tYWluIGl0ZW1zXG5cdFx0XHRcdFx0Ly8gdmFyIHBhcGVySXRlbXMgPSBtYWluQ2xpcFBhdGguYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoXCIucGFwZXJJdGVtXCIpXG5cdFx0XHRcdFx0Ly8gXHQuZGF0YShkYXRhX3RvdGFsKVxuXHRcdFx0XHRcdC8vIFx0LmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdC8vIFx0LmF0dHIoXCJjbGFzc1wiLCBcInBhcGVySXRlbVwiKVxuXHRcdFx0XHRcdC8vIFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdC8vIFx0XHRkLnggPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0Ly8gXHRcdGQueSA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHQvLyBcdFx0ZC5yYWRpdXMgPSBtYWluTWluUmFkICsgKDIgKiBlZlN1bVNjYWxlKGQuc3VtX2VpZ2VuZmFjdG9yKSk7XG5cdFx0XHRcdFx0Ly8gXHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdFx0Ly8gXHR9KTtcblx0XHRcdFx0XHQvLyB2YXIgcGFwZXJNYXJrcyA9IHBhcGVySXRlbXMuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHRcdC8vIFx0LmF0dHIoXCJjbGFzc1wiLCBcInBhcGVyTWFya1wiKVxuXHRcdFx0XHRcdC8vIFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0XHRcdC8vIFx0LnRleHQoXCJcXHVmMGY2XCIpXG5cdFx0XHRcdFx0Ly8gXHQvLyAub24oJ21vdXNlb3ZlcicsIGV4cGFuZClcblx0XHRcdFx0XHQvLyBcdC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdC8vIFx0XHRjb250cmFjdCgpO1xuXHRcdFx0XHRcdC8vIFx0XHR2YXIgc2VsID0gcGFwZXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZGQpIHtyZXR1cm4gZGQueWVhcj09PWQueWVhcn0pO1xuXHRcdFx0XHRcdC8vIFx0XHRleHBhbmQoc2VsKTtcblx0XHRcdFx0XHQvLyBcdFx0fSk7XG5cdFx0XHRcdFx0Ly8gXHQvLyAub24oJ21vdXNlb3V0JywgY29udHJhY3QpXG5cblx0XHRcdFx0XHQvLyB2YXIgeWVhckl0ZW1zID0gbWFpbkNsaXBQYXRoLmFwcGVuZChcImdcIikuc2VsZWN0QWxsKFwiLnllYXJJdGVtXCIpXG5cdFx0XHRcdFx0Ly8gXHQuZGF0YShkYXRhQnlZZWFyKVxuXHRcdFx0XHRcdC8vIFx0LmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdC8vIFx0LmF0dHIoXCJjbGFzc1wiLCBcInllYXJJdGVtXCIpXG5cdFx0XHRcdFx0Ly8gXHQuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0Ly8gXHRcdGQueCA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHQvLyBcdFx0ZC55ID0gMDsgIC8vZm9yIG5vd1xuXHRcdFx0XHRcdC8vIFx0XHRkLnJhZGl1cyA9IG1haW5NaW5SYWQgKyAoMiAqIGVmU3VtU2NhbGUoZC5zdW1fZWlnZW5mYWN0b3IpKTtcblx0XHRcdFx0XHQvLyBcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjtcblx0XHRcdFx0XHQvLyBcdH0pO1xuXHRcdFx0XHRcdC8vIHZhciB5ZWFyTWFya3MgPSB5ZWFySXRlbXMuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHRcdC8vIFx0LmF0dHIoXCJjbGFzc1wiLCBcInllYXJNYXJrXCIpXG5cdFx0XHRcdFx0Ly8gXHQuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcIkZvbnRBd2Vzb21lXCIpXG5cdFx0XHRcdFx0Ly8gXHQudGV4dChcIlxcdWYwZjZcIilcblx0XHRcdFx0XHQvLyBcdC8vIC5vbignbW91c2VvdmVyJywgZXhwYW5kKVxuXHRcdFx0XHRcdC8vIFx0Lm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0Ly8gXHRcdGNvbnRyYWN0KCk7XG5cdFx0XHRcdFx0Ly8gXHRcdHZhciBzZWwgPSBwYXBlckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkZCkge3JldHVybiBkZC55ZWFyPT09ZC55ZWFyfSk7XG5cdFx0XHRcdFx0Ly8gXHRcdGV4cGFuZChzZWwpO1xuXHRcdFx0XHRcdC8vIFx0XHR9KTtcblx0XHRcdFx0XHQvLyBcdC8vIC5vbignbW91c2VvdXQnLCBjb250cmFjdClcblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFxuXHRcdFx0fVxuXG5cblx0XHRcdHZhciBwYXBlckxhYmVscyA9IHBhcGVySXRlbXMuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHQuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJwYXBlckxhYmVsXCIpXG5cdFx0XHRcdC5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpXG5cdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC0xNSwwKVwiKSAgLy8gbnVkZ2UgbGVmdFxuXHRcdFx0XHQvLyAudGV4dChmdW5jdGlvbihkKSB7cmV0dXJuIGQudGl0bGU7fSk7XG5cdFx0XHRcdC5odG1sKGZ1bmN0aW9uKGQpIHtyZXR1cm4gJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCInICsgZC51cmwgKyAnXCI+JyArIGQudGl0bGUgKyAnPC9hPic7fSk7XG5cblxuXG5cdFx0XHQvL21pbmkgbGFiZWxzXG5cdFx0XHQvLyBtaW5pLmFwcGVuZChcImdcIikuc2VsZWN0QWxsKFwiLm1pbmlMYWJlbHNcIilcblx0XHRcdC8vIFx0LmRhdGEoZGF0YSlcblx0XHRcdC8vIFx0LmVudGVyKCkuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0Ly8gXHQudGV4dChmdW5jdGlvbihkKSB7cmV0dXJuIGQuaWQ7fSlcblx0XHRcdC8vIFx0LmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4geChkLnN0YXJ0KTt9KVxuXHRcdFx0Ly8gXHQuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkge3JldHVybiB5MihkLmxhbmUgKyAuNSk7fSlcblx0XHRcdC8vIFx0LmF0dHIoXCJkeVwiLCBcIi41ZXhcIik7XG5cblx0XHRcdC8vYnJ1c2hcblx0XHRcdHZhciBicnVzaCA9IGQzLnN2Zy5icnVzaCgpXG5cdFx0XHRcdFx0XHRcdFx0LngoeClcblx0XHRcdFx0XHRcdFx0XHQub24oXCJicnVzaFwiLCBkaXNwbGF5KTtcblxuXHRcdFx0bWluaS5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJ4IGJydXNoXCIpXG5cdFx0XHRcdC5jYWxsKGJydXNoKVxuXHRcdFx0XHQuc2VsZWN0QWxsKFwicmVjdFwiKVxuXHRcdFx0XHQuYXR0cihcInlcIiwgMSlcblx0XHRcdFx0LmF0dHIoXCJoZWlnaHRcIiwgbWluaUhlaWdodCAtIDEpO1xuXG5cdFx0XHR2YXIgZXh0ZW50TGluZXMgPSBbXTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMiA7IGkrKykge1xuXHRcdFx0XHRleHRlbnRMaW5lcy5wdXNoKGNoYXJ0LmFwcGVuZChcImxpbmVcIikuYXR0cihcImNsYXNzXCIsIFwiZXh0ZW50TGluZVwiKSk7XG5cdFx0XHR9XG5cdFx0XHRmdW5jdGlvbiB1cGRhdGVFeHRlbnRMaW5lcyhsZWZ0LCByaWdodCkge1xuXHRcdFx0XHRpZiAoYnJ1c2guZW1wdHkoKSkge1xuXHRcdFx0XHRcdGV4dGVudExpbmVzLmZvckVhY2goZnVuY3Rpb24oc2VsKSB7c2VsLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7fSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRleHRlbnRMaW5lcy5mb3JFYWNoKGZ1bmN0aW9uKHNlbCkge3NlbC5zdHlsZShcImRpc3BsYXlcIiwgXCJcIik7fSlcblx0XHRcdFx0XHRleHRlbnRMaW5lc1swXS5hdHRyKFwieDFcIiwgbVszXSlcblx0XHRcdFx0XHRcdC5hdHRyKFwieTFcIiwgbVswXSlcblx0XHRcdFx0XHRcdC5hdHRyKFwieDJcIiwgbGVmdCArIG1bM10pXG5cdFx0XHRcdFx0XHQuYXR0cihcInkyXCIsIChtYWluSGVpZ2h0ICsgbVswXSkpO1xuXHRcdFx0XHRcdGV4dGVudExpbmVzWzFdLmF0dHIoXCJ4MVwiLCB3K21bM10pXG5cdFx0XHRcdFx0XHQuYXR0cihcInkxXCIsIG1bMF0pXG5cdFx0XHRcdFx0XHQuYXR0cihcIngyXCIsIHJpZ2h0ICsgbVszXSlcblx0XHRcdFx0XHRcdC5hdHRyKFwieTJcIiwgKG1haW5IZWlnaHQgKyBtWzBdKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dmFyIHNjcm9sbER1ciA9IDE1MDtcblx0XHRcdGZ1bmN0aW9uIG1vdmVCcnVzaChkaXJlY3Rpb24pIHtcblx0XHRcdFx0Ly8gaWYgKGJydXNoLmVtcHR5KCkgfHwgbWluRXh0ZW50PHRpbWVCZWdpbiB8fCBtYXhFeHRlbnQ+dGltZUVuZCkge1xuXHRcdFx0XHRpZiAoYnJ1c2guZW1wdHkoKSkge1xuXHRcdFx0XHRcdG1pbkV4dGVudCA9ICh0aW1lRW5kICsgdGltZUJlZ2luKSAvIDI7XG5cdFx0XHRcdFx0bWF4RXh0ZW50ID0gKCAodGltZUVuZCArIHRpbWVCZWdpbikgLyAyICkgKyAxO1xuXHRcdFx0XHRcdGNoYW5nZUV4dGVudChtaW5FeHRlbnQsIG1heEV4dGVudCwgMCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN3aXRjaCAoZGlyZWN0aW9uKSB7XG5cdFx0XHRcdFx0Y2FzZSAnbGVmdCc6XG5cdFx0XHRcdFx0XHRjaGFuZ2VFeHRlbnQoTWF0aC5yb3VuZChtaW5FeHRlbnQtMSksIE1hdGgucm91bmQobWF4RXh0ZW50LTEpLCBzY3JvbGxEdXIsIFwibGluZWFyXCIpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlICdyaWdodCc6XG5cdFx0XHRcdFx0XHRjaGFuZ2VFeHRlbnQoTWF0aC5yb3VuZChtaW5FeHRlbnQrMSksIE1hdGgucm91bmQobWF4RXh0ZW50KzEpLCBzY3JvbGxEdXIsIFwibGluZWFyXCIpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlICd6b29tSW4nOlxuXHRcdFx0XHRcdFx0Y2hhbmdlRXh0ZW50KE1hdGgucm91bmQobWluRXh0ZW50KzEpLCBNYXRoLnJvdW5kKG1heEV4dGVudC0xKSwgc2Nyb2xsRHVyLCBcImxpbmVhclwiKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSAnem9vbU91dCc6XG5cdFx0XHRcdFx0XHRjaGFuZ2VFeHRlbnQoTWF0aC5yb3VuZChtaW5FeHRlbnQtMSksIE1hdGgucm91bmQobWF4RXh0ZW50KzEpLCBzY3JvbGxEdXIsIFwibGluZWFyXCIpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzY3JvbGxJdGVtcyA9IG1haW5DbGlwUGF0aC5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInNjcm9sbEl0ZW1zXCIpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIChtYWluSGVpZ2h0KjAuNykgKyBcIilcIik7XG5cdFx0XHRzY3JvbGxJdGVtcy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJsZWZ0QXJyb3dcIilcblx0XHRcdFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0XHQudGV4dChcIlxcdWYwNjBcIilcblx0XHRcdFx0LmF0dHIoXCJ4XCIsIDApXG5cdFx0XHRcdC8vIC5hdHRyKFwieVwiLCBtYWluSGVpZ2h0IC8gMilcblx0XHRcdFx0Ly8gLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMS41ZW1cIilcblx0XHRcdFx0Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Ly8gY2hhbmdlRXh0ZW50KE1hdGgucm91bmQobWluRXh0ZW50LTEpLCBNYXRoLnJvdW5kKG1heEV4dGVudC0xKSwgc2Nyb2xsRHVyLCBcImxpbmVhclwiKTtcblx0XHRcdFx0XHRtb3ZlQnJ1c2goJ2xlZnQnKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdHNjcm9sbEl0ZW1zLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInJpZ2h0QXJyb3dcIilcblx0XHRcdFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0XHQudGV4dChcIlxcdWYwNjFcIilcblx0XHRcdFx0LmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuXHRcdFx0XHQuYXR0cihcInhcIiwgdylcblx0XHRcdFx0Ly8gLmF0dHIoXCJ5XCIsIG1haW5IZWlnaHQgLyAyKVxuXHRcdFx0XHQvLyAuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxLjVlbVwiKVxuXHRcdFx0XHQub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQvLyBjaGFuZ2VFeHRlbnQoTWF0aC5yb3VuZChtaW5FeHRlbnQrMSksIE1hdGgucm91bmQobWF4RXh0ZW50KzEpLCBzY3JvbGxEdXIsIFwibGluZWFyXCIpO1xuXHRcdFx0XHRcdG1vdmVCcnVzaCgncmlnaHQnKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0dmFyIHpvb21JdGVtcyA9IHNjcm9sbEl0ZW1zLmFwcGVuZChcImdcIilcblx0XHRcdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwiem9vbUl0ZW1zXCIpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAody1tWzFdLTEwKSArIFwiLDMwKVwiKVxuXHRcdFx0XHRcdFx0XHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgLjAxKVxuXHRcdFx0XHRcdFx0XHRcdC5vbihcIm1vdXNlb3ZlclwiLCB6b29tTW91c2VPdmVyKVxuXHRcdFx0XHRcdFx0XHRcdC5vbihcIm1vdXNlb3V0XCIsIHpvb21Nb3VzZU91dCk7XG5cdFx0XHQvLyBzY3JvbGxJdGVtcy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHR6b29tSXRlbXMuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwiem9vbUluXCIpXG5cdFx0XHRcdC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwiRm9udEF3ZXNvbWVcIilcblx0XHRcdFx0LnRleHQoXCJcXHVmMTk2XCIpICAvLyBodHRwOi8vZm9udGF3ZXNvbWUuaW8vaWNvbi9wbHVzLXNxdWFyZS1vL1xuXHRcdFx0XHQvLyAuYXR0cihcInhcIiwgMTApXG5cdFx0XHRcdC8vIC5hdHRyKFwieVwiLCBtYWluSGVpZ2h0IC8gMilcblx0XHRcdFx0Ly8gLmF0dHIoXCJ4XCIsIHctbVsxXS0xMClcblx0XHRcdFx0Ly8gLmF0dHIoXCJ5XCIsIDMwKVxuXHRcdFx0XHQvLyAuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxLjVlbVwiKVxuXHRcdFx0XHQub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQvLyBjaGFuZ2VFeHRlbnQoTWF0aC5yb3VuZChtaW5FeHRlbnQrMSksIE1hdGgucm91bmQobWF4RXh0ZW50LTEpLCBzY3JvbGxEdXIsIFwibGluZWFyXCIpO1xuXHRcdFx0XHRcdG1vdmVCcnVzaCgnem9vbUluJylcblx0XHRcdFx0XHR9KTtcblx0XHRcdHpvb21JdGVtcy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJ6b29tT3V0XCIpXG5cdFx0XHRcdC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwiRm9udEF3ZXNvbWVcIilcblx0XHRcdFx0LnRleHQoXCJcXHVmMTQ3XCIpICAvLyBodHRwOi8vZm9udGF3ZXNvbWUuaW8vaWNvbi9taW51cy1zcXVhcmUtby9cblx0XHRcdFx0Ly8gLmF0dHIoXCJ5XCIsIG1haW5IZWlnaHQgLyAyKVxuXHRcdFx0XHQvLyAuYXR0cihcInhcIiwgdy1tWzFdLTEwKVxuXHRcdFx0XHQvLyAuYXR0cihcInlcIiwgNTApXG5cdFx0XHRcdC5hdHRyKFwieVwiLCAyMClcblx0XHRcdFx0Ly8gLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMS41ZW1cIilcblx0XHRcdFx0Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Ly8gY2hhbmdlRXh0ZW50KE1hdGgucm91bmQobWluRXh0ZW50LTEpLCBNYXRoLnJvdW5kKG1heEV4dGVudCsxKSwgc2Nyb2xsRHVyLCBcImxpbmVhclwiKTtcblx0XHRcdFx0XHRtb3ZlQnJ1c2goJ3pvb21PdXQnKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0ZnVuY3Rpb24gem9vbU1vdXNlT3ZlcigpIHtcblx0XHRcdFx0Ly8gJCggJy56b29tSW4sIC56b29tT3V0JyApLmZhZGVUbyg0MDAsIDEpO1xuXHRcdFx0XHQkKCAnLnpvb21JdGVtcycgKS5zdG9wKCkuZmFkZVRvKDQwMCwgMSk7XG5cdFx0XHR9XG5cdFx0XHRmdW5jdGlvbiB6b29tTW91c2VPdXQoKSB7XG5cdFx0XHRcdC8vICQoICcuem9vbUluLCAuem9vbU91dCcgKS5mYWRlVG8oNDAwLCAuMDEpO1xuXHRcdFx0XHQkKCAnLnpvb21JdGVtcycgKS5zdG9wKCkuZmFkZVRvKDQwMCwgLjAxKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWNvbiB0byBjbGVhciB0aGUgYnJ1c2guIEZpbmlzaCBpbml0aWFsaXppbmcgaXQgaW4gZGlzcGxheSgpXG5cdFx0XHQvLyB2YXIgY2xlYXJCcnVzaEljb24gPSBkMy5zZWxlY3QoXCIuYnJ1c2hcIikuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0dmFyIGNsZWFyQnJ1c2hJY29uID0gbWluaS5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJjbGVhckJydXNoSWNvblwiKVxuXHRcdFx0XHQuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcIkZvbnRBd2Vzb21lXCIpXG5cdFx0XHRcdC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjFlbVwiKVxuXHRcdFx0XHQuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG5cdFx0XHRcdC5hdHRyKFwidGl0bGVcIiwgXCJDbGVhciB0aGUgdGltZWxpbmUgaW4gb3JkZXIgdG8gZHJhdyBhIG5ldyByZWdpb25cIilcblx0XHRcdFx0LnRleHQoXCJcXHVmMDBkXCIpO1xuXG5cdFx0XHRjaGFydC5vbihcIndoZWVsLnpvb21cIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKGQzLmV2ZW50LndoZWVsRGVsdGFZPjApIHtcblx0XHRcdFx0XHRcdG1vdmVCcnVzaCgnem9vbUluJyk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChkMy5ldmVudC53aGVlbERlbHRhWTwwKSB7XG5cdFx0XHRcdFx0XHRtb3ZlQnJ1c2goJ3pvb21PdXQnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGQzLmV2ZW50LndoZWVsRGVsdGFYPjApIHtcblx0XHRcdFx0XHRcdG1vdmVCcnVzaCgnbGVmdCcpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZDMuZXZlbnQud2hlZWxEZWx0YVg8MCkge1xuXHRcdFx0XHRcdFx0bW92ZUJydXNoKCdyaWdodCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdC8vIGluaXRpYWxpemUgYnJ1c2hcblx0XHRcdHZhciBtaWRwb2ludFllYXIgPSAoIHRpbWVFbmQgKyB0aW1lQmVnaW4gKSAvIDIsXG5cdFx0XHRcdGJydXNoSW5pdCA9IFttaWRwb2ludFllYXIsIG1pZHBvaW50WWVhcl07XG5cdFx0XG5cdFx0XHQvLyBicnVzaC5leHRlbnQoYnJ1c2hJbml0KTtcblx0XHRcdG1pbmkuc2VsZWN0KFwiLmJydXNoXCIpLmNhbGwoYnJ1c2guZXh0ZW50KGJydXNoSW5pdCkpO1xuXG5cdFx0XHRkaXNwbGF5KCk7XG5cdFx0XHRcblx0XHRcdCQoIGRvY3VtZW50ICkudHJpZ2dlciggXCJ0aW1lbGluZVZpczppbml0Q29tcGxldGVcIiApO1xuXG5cblx0XHRcdC8vIC8vIEknbSBub3Qgc3VyZSB0aGVyZSdzIGEgd2F5IHRvIHVzZSBkMyB0cmFuc2l0aW9ucyB0byBjb250cm9sIHRoZSBicnVzaCwgYnV0IGhlcmUncyBhIGhhY2t5IHdheSBvZiBkb2luZyBpdCBtYW51YWxseS5cblx0XHRcdC8vIHZhciBkbHkgPSAzMDtcblx0XHRcdC8vIGZ1bmN0aW9uIGJydXNoVHJhbnNpdGlvbihkbHkpIHtcblx0XHRcdC8vIFx0Y3VyckV4dGVudCA9IFticnVzaC5leHRlbnQoKVswXSwgYnJ1c2guZXh0ZW50KClbMV1dO1xuXHRcdFx0Ly8gXHRicnVzaChkMy5zZWxlY3QoXCIuYnJ1c2hcIikudHJhbnNpdGlvbigpLmR1cmF0aW9uKGRseSkuY2FsbChkaXNwbGF5KSk7XG5cdFx0XHQvLyBcdC8vIGJydXNoLmV2ZW50KGQzLnNlbGVjdChcIi5icnVzaFwiKS50cmFuc2l0aW9uKCkuZGVsYXkoZGx5KS5kdXJhdGlvbigwKSk7XG5cdFx0XHQvLyB9XG5cdFx0XHQvLyAvLyBicnVzaC5leHRlbnQoWzE5NzAsMjAwMF0pO1xuXHRcdFx0Ly8gdmFyIG1pbkV4dGVudCA9IGJydXNoLmV4dGVudCgpWzBdLFxuXHRcdFx0Ly8gXHRtYXhFeHRlbnQgPSBicnVzaC5leHRlbnQoKVsxXTtcblx0XHRcdC8vIHZhciBkZXN0aW5hdGlvbkV4dGVudCA9IDE5OTg7XG5cdFx0XHQvLyB2YXIgaSA9IG1heEV4dGVudDtcblx0XHRcdC8vIHZhciByZWZyZXNoSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gXHQgICBcdGkgPSBpICsgMC4yO1xuXHRcdFx0Ly8gXHRcdGJydXNoLmV4dGVudChbbWluRXh0ZW50LCBpXSk7XG5cdFx0XHQvLyBcdFx0YnJ1c2hUcmFuc2l0aW9uKGRseSk7XG5cdFx0XHQvLyBcdFx0aWYgKGkgPj0gZGVzdGluYXRpb25FeHRlbnQpIHtcblx0XHRcdC8vIFx0XHRcdGNsZWFySW50ZXJ2YWwocmVmcmVzaEludGVydmFsSWQpO1xuXHRcdFx0Ly8gXHRcdH1cblx0XHRcdC8vIFx0fSwgZGx5KTtcblxuXHRcdFx0Ly8gLy8gYXR0ZW1wdCB0byB1c2UgdHdlZW4gZnVuY3Rpb24gdG8gZG8gaXQuIG5vdCByZWFsbHkgd29ya2luZ1xuXHRcdFx0Ly8gYnJ1c2guZXh0ZW50KFsxOTcwLCAyMDA1XSk7XG5cdFx0XHQvLyBicnVzaChkMy5zZWxlY3QoXCIuYnJ1c2hcIikudHJhbnNpdGlvbigpLmR1cmF0aW9uKDUwMDApXG5cdFx0XHQvLyBcdFx0LnR3ZWVuKFwic2lkZS1lZmZlY3RzXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24odCwgdHQsIHR0dCkgeyBjb25zb2xlLmxvZyhicnVzaC5leHRlbnQoKVswXSk7XG5cdFx0XHQvLyBcdFx0XHRicnVzaC5ldmVudChkMy5zZWxlY3QoXCIuYnJ1c2hcIikudHJhbnNpdGlvbigpLmRlbGF5KHQpLmR1cmF0aW9uKDApKTtcblx0XHRcdC8vIFx0XHR9O30pKTtcblx0XHRcdC8vIGJydXNoKGQzLnNlbGVjdChcIi5icnVzaFwiKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkpO1xuXHRcdFx0Ly8gYnJ1c2guZXZlbnQoZDMuc2VsZWN0KFwiLmJydXNoXCIpLnRyYW5zaXRpb24oKS5kZWxheSgxMDAwKS5kdXJhdGlvbigwKSk7XG5cblxuXHRcdFx0ZnVuY3Rpb24gY2hhbmdlRXh0ZW50KHllYXIxLCB5ZWFyMiwgZHVyYXRpb24sIGVhc2UsIGRlbGF5KSB7XG5cdFx0XHRcdGlmIChkdXJhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0ZHVyYXRpb24gPSAxMDAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlYXNlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRlYXNlID0gXCJjdWJpYy1pbi1vdXRcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGVsYXkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGRlbGF5ID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoeWVhcjEgPCB0aW1lQmVnaW4pIHtcblx0XHRcdFx0XHR5ZWFyMSA9IHRpbWVCZWdpbjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoeWVhcjIgPiB0aW1lRW5kKSB7XG5cdFx0XHRcdFx0eWVhcjIgPSB0aW1lRW5kO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJydXNoLmV2ZW50KG1pbmkuc2VsZWN0KFwiLmJydXNoXCIpLnRyYW5zaXRpb24oKS5kZWxheShkZWxheSkuZHVyYXRpb24oZHVyYXRpb24pLmVhc2UoZWFzZSkuY2FsbChicnVzaC5leHRlbnQoW3llYXIxLCB5ZWFyMl0pKSk7XG5cblx0XHRcdH1cblx0XHRcdC8vXG5cdFx0XHQvLyBUaGlzIHdvcmtzISAoYWZ0ZXIgbW9kaWZ5aW5nIHRoZSBkaXNwbGF5KCkgZnVuY3Rpb24uIHNlZSB0aGUgbm90ZSBhdCB0aGUgdG9wIG9mIGRpc3BsYXkoKSlcblx0XHRcdC8vIGJydXNoLmV2ZW50KG1pbmkuc2VsZWN0KFwiLmJydXNoXCIpLnRyYW5zaXRpb24oKS5kZWxheSgxMDAwKS5kdXJhdGlvbigxMDAwKS5jYWxsKGJydXNoLmV4dGVudChbMTk3MCwgMjAwMF0pKVxuXHRcdFx0Ly8gXHRcdC5lYWNoKFwiZW5kXCIsIGZ1bmN0aW9uKCkge2NvbnNvbGUubG9nKFwiaW5pdGlhbGl6ZWRcIik7fSkpO1xuXHRcdFx0Ly8gdmFyIGluaXREdXJhdGlvbiA9IDEwMDAsXG5cdFx0XHQvLyBcdGluaXREZWxheSA9IDEwMDA7XG5cdFx0XHQvLyBjaGFuZ2VFeHRlbnQoMTk3MCwgMjAwMCwgaW5pdER1cmF0aW9uLCBcImN1YmljLWluLW91dFwiLCBpbml0RGVsYXkpO1xuXHRcdFx0Ly8gZDMudHJhbnNpdGlvbihcImluaXREZW1vVHJhbnNpdGlvblwiKS5kZWxheShpbml0RGVsYXkgKyBpbml0RHVyYXRpb24pXG5cdFx0XHQvLyBcdC5lYWNoKFwiZW5kXCIsIGRlbW9FeHBhbmQpO1xuXHRcdFx0Ly8gZGVtb0luaXQoKTtcblxuXHRcdFx0Ly8gbm90IHVzaW5nIHRoaXMgY3VycmVudGx5XG5cdFx0XHRmdW5jdGlvbiBleHBhbmRBbGwoKSB7XG5cdFx0XHRcdGV4cGFuZChwYXBlckl0ZW1zKTtcblx0XHRcdH1cblx0XHRcdHZhciBtYXhFRiA9IGQzLm1heChkYXRhX3RvdGFsLCBmdW5jdGlvbihkKSB7cmV0dXJuIGQubm9kZV9yYW5rO30pO1xuXG5cdFx0XHRmdW5jdGlvbiBjbGVhckJydXNoKCkge1xuXHRcdFx0XHR2YXIgbWlkID0gKGJydXNoLmV4dGVudCgpWzFdICsgYnJ1c2guZXh0ZW50KClbMF0pIC8gMjtcblx0XHRcdFx0Y2hhbmdlRXh0ZW50KG1pZCwgbWlkLCAwKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0ZnVuY3Rpb24gZGlzcGxheSgpIHtcblx0XHRcdFx0Ly8gbm90ZTogY2FsY3VsYXRpbmcgdGhlIGJydXNoIGV4dGVudCB1c2luZyBicnVzaC5leHRlbnQoKSBkb2Vzbid0IHJlYWxseSB3b3JrIGhlcmUgKHdpdGggdHJhbnNpdGlvbiB0aWNrcylcblx0XHRcdFx0Ly8gYmVjYXVzZSBpdCBnb2VzIHRoZSBmaW5hbCBleHRlbnQgdmFsdWVzIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHRyYW5zaXRpb24uXG5cdFx0XHRcdC8vIFNvIGluc3RlYWQsIGdldCB0aGUgbWVhc3VyZW1lbnRzIG9mIHRoZSBicnVzaCBlbGVtZW50IGFuZCBjYWxjdWxhdGUgdGhlIGV4dGVudCB1c2luZyB0aGUgc2NhbGUgKHguaW52ZXJ0KCkpXG5cdFx0XHRcdHZhciBleHRlbnRTZWxlY3QgPSBtaW5pLnNlbGVjdChcIi5icnVzaFwiKS5zZWxlY3QoXCIuZXh0ZW50XCIpO1xuXHRcdFx0XHR2YXIgbWluRXh0ZW50U2NyZWVuID0gK2V4dGVudFNlbGVjdC5hdHRyKFwieFwiKTtcblx0XHRcdFx0dmFyIG1heEV4dGVudFNjcmVlbiA9IG1pbkV4dGVudFNjcmVlbiArICgrZXh0ZW50U2VsZWN0LmF0dHIoXCJ3aWR0aFwiKSk7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHguaW52ZXJ0KG1heEV4dGVudFNjcmVlbikpO1xuXHRcdFx0XHQvLyB2YXIgbWluRXh0ZW50ID0gYnJ1c2guZXh0ZW50KClbMF0sXG5cdFx0XHRcdC8vIFx0bWF4RXh0ZW50ID0gYnJ1c2guZXh0ZW50KClbMV0sXG5cdFx0XHRcdG1pbkV4dGVudCA9IHguaW52ZXJ0KG1pbkV4dGVudFNjcmVlbik7XG5cdFx0XHRcdG1heEV4dGVudCA9IHguaW52ZXJ0KG1heEV4dGVudFNjcmVlbik7XG5cblxuXG5cdFx0XHRcdC8vIGhpZGUgYXJyb3dzIGlmIHlvdSBjYW4ndCBnbyBhbnkgZnVydGhlclxuXHRcdFx0XHRpZiAobWluRXh0ZW50IDw9IHRpbWVCZWdpbikge1xuXHRcdFx0XHRcdGQzLnNlbGVjdChcIi5sZWZ0QXJyb3dcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkMy5zZWxlY3QoXCIubGVmdEFycm93XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIlwiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobWF4RXh0ZW50ID49IHRpbWVFbmQpIHtcblx0XHRcdFx0XHRkMy5zZWxlY3QoXCIucmlnaHRBcnJvd1wiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGQzLnNlbGVjdChcIi5yaWdodEFycm93XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIlwiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBoaWRlIHRoZSB6b29tSW4gYnV0dG9uIGlmIHdlJ3JlIHpvb21lZCBpbiB0b28gZmFyXG5cdFx0XHRcdGlmIChtYXhFeHRlbnQgLSBtaW5FeHRlbnQgPD0gMikge1xuXHRcdFx0XHRcdC8vIGQzLnNlbGVjdChcIi56b29tSW5cIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdFx0XHRkMy5zZWxlY3QoXCIuem9vbUluXCIpLmNsYXNzZWQoXCJoaWRkZW5cIiwgdHJ1ZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gZDMuc2VsZWN0KFwiLnpvb21JblwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJcIik7XG5cdFx0XHRcdFx0ZDMuc2VsZWN0KFwiLnpvb21JblwiKS5jbGFzc2VkKFwiaGlkZGVuXCIsIGZhbHNlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChicnVzaC5lbXB0eSgpKSB7XG5cdFx0XHRcdFx0Y2xlYXJCcnVzaEljb24uc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdFx0XHRkMy5zZWxlY3QoXCIubGVmdEFycm93XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdFx0ZDMuc2VsZWN0KFwiLnJpZ2h0QXJyb3dcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjbGVhckJydXNoSWNvbi5zdHlsZShcImRpc3BsYXlcIiwgXCJcIilcblx0XHRcdFx0XHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgMClcblx0XHRcdFx0XHRcdC8vIC5zdHlsZShcInotaW5kZXhcIiwgLTk5KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgY29uc3RydWN0VHJhbnNsYXRlKG1heEV4dGVudFNjcmVlbi0yLCAxNSkpXG5cdFx0XHRcdFx0XHQudHJhbnNpdGlvbigpLmR1cmF0aW9uKDMwMClcblx0XHRcdFx0XHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgLjQpO1xuXHRcdFx0XHRcdGNsZWFyQnJ1c2hJY29uLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRjbGVhckJydXNoKCk7XG5cdFx0XHRcdFx0XHRjb250cmFjdCgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblxuXG5cdFx0XHRcdC8vIEhpZGUgbWFpbiBpdGVtcyBpZiB0aGUgYnJ1c2ggaXMgZW1wdHlcblx0XHRcdFx0aWYgKGJydXNoLmVtcHR5KCkpIHtcblx0XHRcdFx0XHQvLyB5ZWFySXRlbXMuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdFx0XHQvLyBjaGFuZ2VFeHRlbnQodGltZUJlZ2luLCB0aW1lRW5kLCAwKTtcblx0XHRcdFx0XHQvL1xuXHRcdFx0XHRcdC8vIHNob3cgYWxsIG1haW4gaXRlbXMsIGJ1dCBrZWVwIHRoZSBicnVzaCBoaWRkZW5cblx0XHRcdFx0XHR1cGRhdGVNYWluKHRpbWVCZWdpbix0aW1lRW5kKTtcblx0XHRcdFx0XHQvLyB0aGlzIHdpbGwgcmVtb3ZlIHRoZSBleHRlbnQgbGluZXM6XG5cdFx0XHRcdFx0dXBkYXRlRXh0ZW50TGluZXMoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBkMy5zZWxlY3QoXCIuYnJ1c2hcIikuYXR0cihcImRpc3BsYXlcIiwgXCJcIik7XG5cdFx0XHRcdFx0dXBkYXRlTWFpbihtaW5FeHRlbnQsIG1heEV4dGVudCk7XG5cdFx0XHRcdFx0dXBkYXRlRXh0ZW50TGluZXMobWluRXh0ZW50U2NyZWVuLCBtYXhFeHRlbnRTY3JlZW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIHVwZGF0ZU1haW4obWluRXh0ZW50LCBtYXhFeHRlbnQpIHtcblx0XHRcdFx0XG5cdFx0XHRcdHN3aXRjaCAobWFya1R5cGUpIHtcblx0XHRcdFx0XHRjYXNlICdjaXJjbGUnOlxuXHRcdFx0XHRcdFx0dmFyIHZpc0l0ZW1zID0geWVhckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhciA8IG1heEV4dGVudCAmJiBkLnllYXIgPiBtaW5FeHRlbnQ7fSlcblx0XHRcdFx0XHRcdHZhciBub3RWaXNJdGVtcyA9IHllYXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXI+PSBtYXhFeHRlbnQgfHwgZC55ZWFyIDw9IG1pbkV4dGVudDt9KTtcblx0XHRcdFx0XHRcdHZpc0l0ZW1zLnN0eWxlKFwiZGlzcGxheVwiLCBcIlwiKTtcblx0XHRcdFx0XHRcdG5vdFZpc0l0ZW1zLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhicnVzaC5leHRlbnQoKSk7XG5cblx0XHRcdFx0XHRcdC8vIG1pbmkuc2VsZWN0KFwiLmJydXNoXCIpXG5cdFx0XHRcdFx0XHQvLyBcdC5jYWxsKGJydXNoLmV4dGVudChbbWluRXh0ZW50LCBtYXhFeHRlbnRdKSk7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhtYXhFeHRlbnQtbWluRXh0ZW50KTtcblxuXHRcdFx0XHRcdFx0eDEuZG9tYWluKFttaW5FeHRlbnQsIG1heEV4dGVudF0pO1xuXG5cdFx0XHRcdFx0XHQvLyB1cGRhdGUgc3R5bGVzIG9mIG1pbmkgaXRlbXMgdGhhdCBhcmUgdmlzaWJsZSBpbiB0aGUgbWFpbiBkaXNwbGF5LlxuXHRcdFx0XHRcdFx0Ly8gcmVzZXQgYWxsIHRvIG5vcm1hbCwgdGhlbiBzdHlsZSBqdXN0IHRoZSB2aXNpYmxlIG9uZXNcblx0XHRcdFx0XHRcdC8vIG1pbmlJdGVtcy5zdHlsZShzdHlsZXNCYXNlKTtcblx0XHRcdFx0XHRcdG1pbmlJdGVtcy5zdHlsZShzdHlsZXNWaXNpYmxlKTtcblx0XHRcdFx0XHRcdG1pbmlJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhtaW5FeHRlbnQpO1xuXHRcdFx0XHRcdFx0XHR2YXIgbWF0Y2ggPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0dmlzSXRlbXMuZm9yRWFjaChmdW5jdGlvbihkZCkge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChkLmlkPT1kZC5maXJzdFRpdGxlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtYXRjaCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0XHRcdFx0XHR9KS5zdHlsZShzdHlsZXNWaXNpYmxlKTtcblxuXHRcdFx0XHRcdFx0Ly91cGRhdGUgbWFpbiBpdGVtIG1hcmtzXG5cdFx0XHRcdFx0XHR2aXNJdGVtcy5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0ZC54ID0geDEoZC55ZWFyKTtcblx0XHRcdFx0XHRcdFx0ZC55ID0geTEoZC5sYW5lKSArIG1haW5NaW5SYWQ7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0eWVhck1hcmtzLmF0dHIoXCJyXCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC5yYWRpdXM7fSk7XG5cblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSAnaWNvbic6XG5cdFx0XHRcdFx0XHR2YXIgdmlzSXRlbXMgPSB5ZWFySXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyIDwgbWF4RXh0ZW50ICYmIGQueWVhciA+IG1pbkV4dGVudDt9KVxuXHRcdFx0XHRcdFx0dmFyIG5vdFZpc0l0ZW1zID0geWVhckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhcj49IG1heEV4dGVudCB8fCBkLnllYXIgPD0gbWluRXh0ZW50O30pO1xuXHRcdFx0XHRcdFx0dmlzSXRlbXMuc3R5bGUoXCJkaXNwbGF5XCIsIFwiXCIpO1xuXHRcdFx0XHRcdFx0bm90VmlzSXRlbXMuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGJydXNoLmV4dGVudCgpKTtcblxuXHRcdFx0XHRcdFx0Ly8gbWluaS5zZWxlY3QoXCIuYnJ1c2hcIilcblx0XHRcdFx0XHRcdC8vIFx0LmNhbGwoYnJ1c2guZXh0ZW50KFttaW5FeHRlbnQsIG1heEV4dGVudF0pKTtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKG1heEV4dGVudC1taW5FeHRlbnQpO1xuXHRcdFx0XHRcdFx0Ly8gdXBkYXRlRXh0ZW50TGluZXMobWluRXh0ZW50U2NyZWVuLCBtYXhFeHRlbnRTY3JlZW4pO1xuXG5cdFx0XHRcdFx0XHR4MS5kb21haW4oW21pbkV4dGVudCwgbWF4RXh0ZW50XSk7XG5cblx0XHRcdFx0XHRcdC8vIHVwZGF0ZSBzdHlsZXMgb2YgbWluaSBpdGVtcyB0aGF0IGFyZSB2aXNpYmxlIGluIHRoZSBtYWluIGRpc3BsYXkuXG5cdFx0XHRcdFx0XHQvLyByZXNldCBhbGwgdG8gbm9ybWFsLCB0aGVuIHN0eWxlIGp1c3QgdGhlIHZpc2libGUgb25lc1xuXHRcdFx0XHRcdFx0bWluaUl0ZW1zLnN0eWxlKHN0eWxlc0Jhc2UpO1xuXHRcdFx0XHRcdFx0bWluaUl0ZW1zLmZpbHRlcihmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBtYXRjaCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHR2aXNJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGRkKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGQuaWQ9PWRkLmZpcnN0VGl0bGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdG1hdGNoID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHRcdFx0XHRcdH0pLnN0eWxlKHN0eWxlc1Zpc2libGUpO1xuXG5cdFx0XHRcdFx0XHQvL3VwZGF0ZSBtYWluIGl0ZW0gbWFya3Ncblx0XHRcdFx0XHRcdHZpc0l0ZW1zLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHQvLyBkLnggPSB4MShkLnllYXIpIC0gMTA7XG5cdFx0XHRcdFx0XHRcdGQueCA9IHgxKGQueWVhcik7XG5cdFx0XHRcdFx0XHRcdGQueSA9IHkxKGQubGFuZSkgKyAyMDtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjtcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRwYXBlck1hcmtzLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC5pZHgvMiArIFwiLFwiICsgZC5pZHgqMyArIFwiKVwiO1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgXCIwXCIgKyBcIixcIiArIGQuaWR4KjMgKyBcIilcIjtcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQuc3R5bGUoXCJmaWxsXCIsIFwiYmxhY2tcIilcblx0XHRcdFx0XHRcdFx0LnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuXHRcdFx0XHRcdFx0XHQuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxLjVlbVwiKTtcblx0XHRcdFx0XHRcdFx0Ly8gLnN0eWxlKFwiZm9udC1zaXplXCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gKGQucmFkaXVzLzEwKSArIFwiZW1cIjt9KTtcblxuXHRcdFx0XHRcdFx0cGFwZXJJdGVtcy5lYWNoKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0dmFyIGl0ZW0gPSBkMy5zZWxlY3QodGhpcyk7XG5cdFx0XHRcdFx0XHRcdHZhciBtID0gaXRlbS5zZWxlY3QoXCIucGFwZXJNYXJrXCIpO1xuXHRcdFx0XHRcdFx0XHR2YXIgYmJveCA9IG0ubm9kZSgpLmdldEJCb3goKTtcblx0XHRcdFx0XHRcdFx0aXRlbS5zZWxlY3QoXCJyZWN0XCIpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoXCJ4XCIsIGJib3gueClcblx0XHRcdFx0XHRcdFx0XHQuYXR0cihcInlcIiwgYmJveC55KVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKFwid2lkdGhcIiwgYmJveC53aWR0aClcblx0XHRcdFx0XHRcdFx0XHQuYXR0cihcImhlaWdodFwiLCBiYm94LmhlaWdodClcblx0XHRcdFx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBtLmF0dHIoXCJ0cmFuc2Zvcm1cIikpXG5cdFx0XHRcdFx0XHRcdFx0LnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xuXHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhtLmF0dHIoXCJ0cmFuc2Zvcm1cIikpO1xuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cblxuXHRcdFx0XHQvL3VwZGF0ZSB0aGUgaXRlbSBsYWJlbHNcblx0XHRcdFx0Ly8gdmFyIHJvdGF0ZSA9IC0yMDtcblx0XHRcdFx0ZnVuY3Rpb24gX3JvdGF0ZShyb3RhdGlvbikge1xuXHRcdFx0XHRcdGxhYmVscy5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgXG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJyb3RhdGUoXCIgKyByb3RhdGlvbiArIFwiLFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjsgXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gY29uc3RyYWludCByZWxheGF0aW9uXG5cdFx0XHRcdC8vIGh0dHA6Ly9ibC5vY2tzLm9yZy9zeW50YWdtYXRpYy80MDUzMDk2XG5cdFx0XHRcdHZhciBhbHBoYSA9IDE7XG5cdFx0XHRcdHZhciBzcGFjaW5nID0gMTU7XG5cdFx0XHRcdGZ1bmN0aW9uIHJlbGF4KGxhYmVscykge1xuXHRcdFx0XHRcdC8vIE1vdmUgdGV4dCBpZiBvdmVybGFwcGluZyAocmVjdXJzaXZlbHkpXG5cdFx0XHRcdFx0dmFyIGFnYWluID0gZmFsc2U7XG5cdFx0XHRcdFx0bGFiZWxzLmVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZDMuc2VsZWN0KHRoaXMpLmF0dHIoXCJ4XCIpKTtcblx0XHRcdFx0XHRcdHZhciBhID0gdGhpcztcblx0XHRcdFx0XHRcdHZhciBkYSA9IGQzLnNlbGVjdChhKTtcblx0XHRcdFx0XHRcdHZhciBheCA9IGRhLmF0dHIoXCJ4XCIpO1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coYXgpO1xuXHRcdFx0XHRcdFx0bGFiZWxzLmVhY2goZnVuY3Rpb24oZGQpIHtcblx0XHRcdFx0XHRcdFx0dmFyIGIgPSB0aGlzO1xuXHRcdFx0XHRcdFx0XHQvLyBpZiAoYSA9PSBiKSB7XG5cdFx0XHRcdFx0XHRcdC8vIFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdFx0XHRcdHZhciBkYiA9IGQzLnNlbGVjdChiKTtcblx0XHRcdFx0XHRcdFx0dmFyIGJ4ID0gZGIuYXR0cihcInhcIik7XG5cdFx0XHRcdFx0XHRcdHZhciBkZWx0YVggPSBheCAtIGJ4O1xuXHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkZWx0YVgpO1xuXHRcdFx0XHRcdFx0XHQvLyBpZiAoTWF0aC5hYnMoZGVsdGFYKSA+IHNwYWNpbmcpIHtcblx0XHRcdFx0XHRcdFx0Ly8gXHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XHRcdFx0aWYgKCAoYSAhPSBiKSAmJiBNYXRoLmFicyhkZWx0YVgpIDwgc3BhY2luZykge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRlbHRhWCk7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29sbGlzaW9uIGRldGVjdGVkXG5cdFx0XHRcdFx0XHRcdFx0YWdhaW4gPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdHZhciBzaWduID0gZGVsdGFYID4gMCA/IDEgOiAtMTtcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhhKTtcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkYi5hdHRyKFwieFwiKSk7XG5cdFx0XHRcdFx0XHRcdFx0ZC54ID0gK2F4ICsgKHNpZ24qYWxwaGEpO1xuXHRcdFx0XHRcdFx0XHRcdGRkLnggPSArYnggLSAoc2lnbiphbHBoYSk7XG5cdFx0XHRcdFx0XHRcdFx0ZGEuYXR0cihcInhcIiwgZC54KTtcblx0XHRcdFx0XHRcdFx0XHRkYi5hdHRyKFwieFwiLCBkZC54KTtcblx0XHRcdFx0XHRcdFx0XHQvLyBkMy5zZWxlY3QodGhpcykuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSg1MDAsIDApXCIpO1xuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRiLmF0dHIoXCJ4XCIpKTtcblx0XHRcdFx0XHRcdFx0XHQvLyBkLnggKz0gc2lnbiphbHBoYTtcblx0XHRcdFx0XHRcdFx0XHQvLyBhLnggKz0gMTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0aWYgKGFnYWluKSB7XG5cdFx0XHRcdFx0XHQvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0Ly8gXHRyZWxheChsYWJlbHMpO1xuXHRcdFx0XHRcdFx0Ly8gfSwgMik7XG5cdFx0XHRcdFx0XHRyZWxheChsYWJlbHMpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRfcm90YXRlKC0yMCk7XG5cdFx0XHRcdFx0XHQvL1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGxhYmVscyA9IGl0ZW1SZWN0cy5zZWxlY3RBbGwoXCIueWVhckl0ZW1MYWJlbFwiKVxuXHRcdFx0XHQvLyBcdC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7ZC54ID0geDEoTWF0aC5tYXgoZC5rZXksIG1pbkV4dGVudCkpOyByZXR1cm4gZC54O30pXG5cdFx0XHRcdC8vIFx0LmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHtkLnkgPSBkLmN5OyByZXR1cm4gZC55O30pXG5cdFx0XHRcdC8vIFx0LmRhdGEodmlzSXRlbXMpO1xuXHRcdFx0XHQvLyBcdC8vIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7cmV0dXJuIHgxKE1hdGgubWF4KGQuc3RhcnQsIG1pbkV4dGVudCkgKyAyKTt9KTtcblx0XHRcdFx0Ly8gXHQvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBcInJvdGF0ZShcIiArIHJvdGF0ZSArIFwiLFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjsgfSk7XG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIGxhYmVscy5lbnRlcigpLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0Ly8gXHQudGV4dChmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhciArIFwiOiBcIiArIGQudmFsdWVzLmxlbmd0aCArIFwiIHBhcGVyc1wiO30pXG5cdFx0XHRcdC8vIFx0LmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHtkLnggPSB4MShNYXRoLm1heChkLmtleSwgbWluRXh0ZW50KSk7IHJldHVybiBkLng7fSlcblx0XHRcdFx0Ly8gXHQvLyAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkge2QueSA9IHkxKGQubGFuZSArIC41KTsgcmV0dXJuIGQueTt9KVxuXHRcdFx0XHQvLyBcdC8vIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7ZC55ID0geTEoZC5sYW5lKStyYWQ7IHJldHVybiBkLnk7fSlcblx0XHRcdFx0Ly8gXHQuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkge2QueSA9IGQuY3k7IHJldHVybiBkLnk7fSlcblx0XHRcdFx0Ly8gXHQuYXR0cihcImNsYXNzXCIsIFwieWVhckl0ZW1MYWJlbFwiKVxuXHRcdFx0XHQvLyBcdC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcblx0XHRcdFx0Ly8gXHQvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBcInJvdGF0ZShcIiArIHJvdGF0ZSArIFwiLFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjsgfSlcblx0XHRcdFx0Ly8gXHQub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0Ly8gXHRcdFx0Y29uc29sZS5sb2coZC54KTtcblx0XHRcdFx0Ly8gXHRcdH0pO1xuXHRcdFx0XHQvL1xuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBsYWJlbHMuZXhpdCgpLnJlbW92ZSgpO1xuXG5cdFx0XHRcdC8vdXBkYXRlIGF4aXNcblx0XHRcdFx0eEF4aXNNYWluT2JqLmNhbGwoeEF4aXNNYWluKTtcblxuXHRcdFx0XHQvLyAvLyBvbmx5IHVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZyAob3Igbm9uZSlcblx0XHRcdFx0Ly8gX3JvdGF0ZSgtMjApO1xuXHRcdFx0XHQvLyByZWxheChsYWJlbHMpO1xuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygkKCcubWFpbkNsaXBQYXRoJylbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygkKCcuY2hhcnQnKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XG5cdFx0XHRcdGxhYmVsc0NvbGxpc2lvbkRldGVjdCgpO1xuXG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHZhciBhZnRlclRyYW5zaXRpb25YID0gZnVuY3Rpb24oZCwgaSkge1xuXHRcdFx0XHQvLyByZXR1cm4geDEoK2QueWVhcikgKyAoKGkqaSkqMyk7XG5cdFx0XHRcdHJldHVybiAoaSppKSozO1xuXHRcdFx0fTtcblx0XHRcdHZhciBhZnRlclRyYW5zaXRpb25ZID0gZnVuY3Rpb24oZCwgaSkge1xuXHRcdFx0XHQvLyByZXR1cm4geTEoZC5sYW5lKSArIDIuMipyYWQqaSs1KnJhZDtcblx0XHRcdFx0cmV0dXJuIDIuMSptYWluTWluUmFkKmkrMyptYWluTWluUmFkO1xuXHRcdFx0fTtcblx0XHRcdC8vIGZ1bmN0aW9uIGV4cGFuZCh5ZWFyRGF0YSkge1xuXHRcdFx0ZnVuY3Rpb24gZXhwYW5kKHNlbCwgeWVhckl0ZW0pIHtcblx0XHRcdFx0dmFyIHRoaXNZZWFyID0gc2VsLmF0dHIoXCJkYXRhLXllYXJcIik7XG5cdFx0XHRcdHZhciB0aGlzWWVhckl0ZW0gPSB5ZWFySXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyPT10aGlzWWVhcn0pO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzWWVhckl0ZW0pO1xuXHRcdFx0XHQvLyBjb250cmFjdCgpO1xuXHRcdFx0XHR2YXIgZHVyID0gNTAwO1xuXHRcdFx0XHQvLyB2YXIgc2VsID0gcGFwZXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXI9PT15ZWFyRGF0YS55ZWFyfSk7XG5cdFx0XHRcdHZhciB0cmFuc2l0aW9uU3RhcnRTdHlsZSA9IHsncG9pbnRlci1ldmVudHMnOiAnbm9uZScsICdjdXJzb3InOiAnZGVmYXVsdCd9LFxuXHRcdFx0XHRcdHRyYW5zaXRpb25FbmRTdHlsZSA9IHsncG9pbnRlci1ldmVudHMnOiAnYXV0bycsICdjdXJzb3InOiAncG9pbnRlcid9O1xuXHRcdFx0XHQvLyBzZWwuc3R5bGUoXCJwb2ludGVyLWV2ZW50c1wiLCBcIm5vbmVcIilcblx0XHRcdFx0dmFyIGxpbmUgPSBkMy5zdmcubGluZSgpLngoZnVuY3Rpb24oZCkge3JldHVybiBkWzBdfSkueShmdW5jdGlvbihkKSB7cmV0dXJuIGRbMV19KTtcblx0XHRcdFx0Ly8gbGluZWRhdGEgd2lsbCBiZSBhbiBhcnJheSBvZiBbeCwgeV0gdmFsdWVzIHRoYXQgc3RhcnQgYXQgdGhlIHllYXIgY2lyY2xlIGFuZCB0cmFjayB0aGUgcGFwZXIgY2lyY2xlc1xuXHRcdFx0XHR2YXIgbGluZWRhdGEgPSBbXTtcblx0XHRcdFx0bGluZWRhdGEucHVzaChbMCwwXSk7XG5cdFx0XHRcdHNlbC5zdHlsZSh0cmFuc2l0aW9uU3RhcnRTdHlsZSlcblx0XHRcdFx0XHQudHJhbnNpdGlvbigpLmR1cmF0aW9uKGR1cilcblx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkLCBpKSB7XG5cdFx0XHRcdFx0XHRsaW5lZGF0YS5wdXNoKFthZnRlclRyYW5zaXRpb25YKGQsIGkpLCBhZnRlclRyYW5zaXRpb25ZKGQsIGkpXSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBhZnRlclRyYW5zaXRpb25YKGQsIGkpICsgXCIsXCIgKyBhZnRlclRyYW5zaXRpb25ZKGQsIGkpICsgXCIpXCI7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuZWFjaChcInN0YXJ0XCIsIGZ1bmN0aW9uKCkge2QzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKFwiZXhwYW5kZWRcIiwgdHJ1ZSl9KVxuXHRcdFx0XHRcdC8vIC5lYWNoKFwiZW5kXCIsIGZ1bmN0aW9uKCkge2QzLnNlbGVjdCh0aGlzKS5zdHlsZShcInBvaW50ZXItZXZlbnRzXCIsIFwiYXV0b1wiKTt9KTtcblx0XHRcdFx0XHQuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGQzLnNlbGVjdCh0aGlzKS5zdHlsZSh0cmFuc2l0aW9uRW5kU3R5bGUpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC8vIC5zdHlsZShcInBvaW50ZXItZXZlbnRzXCIsIFwiYXV0b1wiKTtcblx0XHRcdFx0c2VsLnNlbGVjdEFsbChcIi5wYXBlck1hcmtcIikudHJhbnNpdGlvbigpLmR1cmF0aW9uKGR1cilcblx0XHRcdFx0XHRcdFx0XHQvLyAuc3R5bGUoXCJmb250LXNpemVcIiwgZnVuY3Rpb24oZCkge3JldHVybiAoZC5yYWRpdXMvMTApICsgXCJlbVwiO30pXG5cdFx0XHRcdFx0LnN0eWxlVHdlZW4oXCJmb250LXNpemVcIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGQzLmludGVycG9sYXRlKFxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc2l6ZVwiKSxcblx0XHRcdFx0XHRcdFx0XHQoZC5yYWRpdXMvMTApICsgXCJlbVwiKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5hdHRyKFwiclwiLCBmdW5jdGlvbihkKSB7cmV0dXJuIGQucmFkaXVzO30pO1xuXG5cdFx0XHRcdC8vbWFrZSBsYWJlbHMgYXBwZWFyXG5cdFx0XHRcdHNlbC5zZWxlY3RBbGwoXCIucGFwZXJMYWJlbFwiKVxuXHRcdFx0XHRcdC8vIC5zdHlsZShcInBvaW50ZXItZXZlbnRzXCIsIFwibm9uZVwiKVxuXHRcdFx0XHRcdC5zdHlsZShcImRpc3BsYXlcIiwgXCJcIilcblx0XHRcdFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIDApXG5cdFx0XHRcdFx0LnRyYW5zaXRpb24oKVxuXHRcdFx0XHRcdC5kZWxheShmdW5jdGlvbihkKSB7cmV0dXJuIGR1ci8yICsgZC5pZHgqNzU7fSlcblx0XHRcdFx0XHQuZHVyYXRpb24oZHVyKVxuXHRcdFx0XHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG5cdFx0XHRcdC8vIGxhYmVsc0NvbGxpc2lvbkRldGVjdCgpO1xuXHRcdFx0XHRkMy50cmFuc2l0aW9uKCkuZHVyYXRpb24oZHVyKS5lYWNoKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHRoaXNZZWFySXRlbS5hcHBlbmQoXCJwYXRoXCIpLmRhdHVtKGxpbmVkYXRhKS5hdHRyKFwiY2xhc3NcIiwgXCJqb2luTGluZVwiKS5hdHRyKFwiZFwiLCBsaW5lKTtcblx0XHRcdFx0XHRkaXNwbGF5KClcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBmdW5jdGlvbiBjb250cmFjdCh5ZWFyRGF0YSkge1xuXHRcdFx0ZnVuY3Rpb24gY29udHJhY3QoKSB7XG5cdFx0XHRcdGQzLnNlbGVjdEFsbChcIi5qb2luTGluZVwiKS5yZW1vdmUoKTtcblx0XHRcdFx0dmFyIGR1ciA9IDUwMDtcblx0XHRcdFx0Ly8gdmFyIHNlbCA9IHBhcGVySXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyPT09eWVhckRhdGEueWVhcn0pO1xuXHRcdFx0XHR2YXIgc2VsID0gZDMuc2VsZWN0QWxsKFwiLmV4cGFuZGVkXCIpO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhzZWwuZW1wdHkoKSk7XG5cdFx0XHRcdHNlbC50cmFuc2l0aW9uKCkuZHVyYXRpb24oZHVyKVxuXHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsMClcIilcblx0XHRcdFx0XHQuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKFwiZXhwYW5kZWRcIiwgZmFsc2UpXG5cdFx0XHRcdFx0XHRcdC5zdHlsZShcInBvaW50ZXItZXZlbnRzXCIsIFwiXCIpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdHNlbC5zZWxlY3RBbGwoXCIucGFwZXJNYXJrXCIpLnRyYW5zaXRpb24oKS5kdXJhdGlvbihkdXIqMS41KVxuXHRcdFx0XHRcdC5zdHlsZVR3ZWVuKFwiZm9udC1zaXplXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBkMy5pbnRlcnBvbGF0ZShcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIiksXG5cdFx0XHRcdFx0XHRcdFx0XCIxLjVlbVwiKVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmF0dHIoXCJyXCIsIDApO1xuXHRcdFx0XHRzZWwuc2VsZWN0QWxsKFwiLnBhcGVyTGFiZWxcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdH1cblx0XHRcdC8vIGZ1bmN0aW9uIGV4cGFuZCh5ZWFyRGF0YSkge1xuXHRcdFx0Ly8gXHRjb25zb2xlLmxvZyh5ZWFyRGF0YSk7XG5cdFx0XHQvLyBcdGlmICgheWVhckRhdGEuZXhwYW5kZWQpIHtcblx0XHRcdC8vIFx0XHRcblx0XHRcdC8vIFx0XHQvLyBkMy5zZWxlY3RBbGwoXCIueWVhckl0ZW1MYWJlbFwiKS5jbGFzc2VkKFwiaGlkZGVuXCIpO1xuXHRcdFx0Ly8gXHRcdCQoICcueWVhckl0ZW1MYWJlbCcgKS5oaWRlKCk7XG5cdFx0XHQvLyBcdFx0dmFyIGR1ciA9IDUwMDtcblx0XHRcdC8vIFx0XHQvLyB2YXIgcmFkID0geWVhckRhdGEucmFkaXVzO1xuXHRcdFx0Ly8gXHRcdHZhciByYWQgPSAxMDtcblx0XHRcdC8vIFx0XHR2YXIgcGFyZW50WSA9IHllYXJEYXRhLmN5O1xuXHRcdFx0Ly8gXHRcdHZhciBtYXJrcyA9IG1haW5DbGlwUGF0aC5zZWxlY3RBbGwoXCIucGFwZXJJdGVtXCIpXG5cdFx0XHQvLyBcdFx0XHRcdFx0Ly8gLmRhdGEodmlzSXRlbXMsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuaWQ7IH0pXG5cdFx0XHQvLyBcdFx0XHRcdFx0LmRhdGEoeWVhckRhdGEudmFsdWVzKTtcblx0XHRcdC8vIFx0XHRtYXJrcy5lbnRlcigpLmFwcGVuZChcImNpcmNsZVwiKVxuXHRcdFx0Ly8gXHRcdFx0XHQvLyAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gXCJtYWluSXRlbSBtaW5pSXRlbVwiICsgZC5sYW5lO30pXG5cdFx0XHQvLyBcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJwYXBlckl0ZW1cIilcblx0XHRcdC8vIFx0XHRcdFx0Lm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihkKSB7Y29uc29sZS5sb2coZCk7fSkuYXBwZW5kKCd0ZXh0JykudGV4dCgnZCcpO1xuXHRcdFx0Ly8gXHRcdC8vIG1hcmtzLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuYXR0cihcImN5XCIsIHBhcmVudFkpLnJlbW92ZSgpO1xuXHRcdFx0Ly8gXHRcdC8vIGl0ZW1SZWN0cy5zZWxlY3RBbGwoJ3RleHQnKS5kYXRhKHllYXJEYXRhLnZhbHVlcykuZW50ZXIoKS5hcHBlbmQoJ3RleHQnKS5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7Y29uc29sZS5sb2coZCk7IHJldHVybiBkLmN4O30pLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC5jeTt9KS50ZXh0KGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC50aXRsZTt9KTtcblx0XHRcdC8vIFx0XHRtYXJrcy5leGl0KCkucmVtb3ZlKCk7XG5cdFx0XHQvL1xuXHRcdFx0Ly8gXHRcdHZhciBsYWJlbHMgPSBtYWluQ2xpcFBhdGguc2VsZWN0QWxsKFwiLnBhcGVySXRlbUxhYmVsXCIpXG5cdFx0XHQvLyBcdFx0XHQuZGF0YSh5ZWFyRGF0YS52YWx1ZXMpO1xuXHRcdFx0Ly8gXHRcdGxhYmVscy5lbnRlcigpLmFwcGVuZChcInRleHRcIilcblx0XHRcdC8vIFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJwYXBlckl0ZW1MYWJlbFwiKVxuXHRcdFx0Ly8gXHRcdFx0LmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKTtcblx0XHRcdC8vIFx0XHRsYWJlbHMuZXhpdCgpLnJlbW92ZSgpO1xuXHRcdFx0Ly9cblx0XHRcdC8vIFx0XHRtYXJrcy5hdHRyKFwiY3hcIiwgYmVmb3JlVHJhbnNpdGlvblgpXG5cdFx0XHQvLyBcdFx0XHRcdC5hdHRyKCdyJywgZnVuY3Rpb24oZCkge1xuXHRcdFx0Ly8gXHRcdFx0XHRcdFx0Ly8gZC5yYWRpdXMgPSByYWQgKyAoMiAqIGVmU3VtU2NhbGUoZC5zdW1fZWlnZW5mYWN0b3IpKTtcblx0XHRcdC8vIFx0XHRcdFx0XHRcdGQucmFkaXVzID0gcmFkICsgKDIgKiBlZlNjYWxlKGQuZWlnZW5mYWN0b3Jfc2NvcmUpKTtcblx0XHRcdC8vIFx0XHRcdFx0XHRcdHJldHVybiBkLnJhZGl1cztcblx0XHRcdC8vIFx0XHRcdFx0XHR9KVxuXHRcdFx0Ly8gXHRcdFx0XHQuYXR0cihcImN5XCIsIGJlZm9yZVRyYW5zaXRpb25ZKVxuXHRcdFx0Ly8gXHRcdFx0XHQudHJhbnNpdGlvbigpLmR1cmF0aW9uKGR1cilcblx0XHRcdC8vIFx0XHRcdFx0LmF0dHIoXCJjeFwiLCBhZnRlclRyYW5zaXRpb25YKVxuXHRcdFx0Ly8gXHRcdFx0XHQuYXR0cihcImN5XCIsIGFmdGVyVHJhbnNpdGlvblkpXG5cdFx0XHQvLyBcdFx0XHRcdC5zdHlsZShzdHlsZXNWaXNpYmxlKTtcblx0XHRcdC8vIFx0XHRsYWJlbHMuYXR0cihcInhcIiwgYmVmb3JlVHJhbnNpdGlvblgpXG5cdFx0XHQvLyBcdFx0XHQudGV4dChmdW5jdGlvbihkKSB7cmV0dXJuIGQudGl0bGU7fSlcblx0XHRcdC8vIFx0XHRcdC5hdHRyKFwieVwiLCBiZWZvcmVUcmFuc2l0aW9uWSlcblx0XHRcdC8vIFx0XHRcdC50cmFuc2l0aW9uKCkuZHVyYXRpb24oZHVyKVxuXHRcdFx0Ly8gXHRcdFx0LmF0dHIoXCJ4XCIsIGFmdGVyVHJhbnNpdGlvblgpXG5cdFx0XHQvLyBcdFx0XHQuYXR0cihcInlcIiwgYWZ0ZXJUcmFuc2l0aW9uWSk7XG5cdFx0XHQvLyBcdHllYXJEYXRhLmV4cGFuZGVkID0gdHJ1ZTtcblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gfVxuXHRcdFx0Ly9cblx0XHRcdC8vIGZ1bmN0aW9uIGNvbnRyYWN0KGQpIHtcblx0XHRcdC8vIFx0dmFyIGR1ciA9IDUwMDtcblx0XHRcdC8vIFx0aWYgKGQuZXhwYW5kZWQpIHtcblx0XHRcdC8vIFx0XHR2YXIgbWFya3MgPSBtYWluQ2xpcFBhdGguc2VsZWN0QWxsKFwiLnBhcGVySXRlbVwiKVxuXHRcdFx0Ly8gXHRcdFx0LmludGVycnVwdChcImNvbnRyYWN0XCIpXG5cdFx0XHQvLyBcdFx0XHQudHJhbnNpdGlvbihcImNvbnRyYWN0XCIpLmRlbGF5KDIwMDApLmR1cmF0aW9uKGR1cilcblx0XHRcdC8vIFx0XHRcdC5hdHRyKFwiY3hcIiwgYmVmb3JlVHJhbnNpdGlvblgpXG5cdFx0XHQvLyBcdFx0XHQuYXR0cihcImN5XCIsIDApXG5cdFx0XHQvLyBcdFx0XHQuZWFjaChcImVuZFwiLCBmdW5jdGlvbihfLCBpKSB7XG5cdFx0XHQvLyBcdFx0XHRcdGlmIChpID09PSAwKSBkLmV4cGFuZGVkID0gZmFsc2U7XG5cdFx0XHQvLyBcdFx0XHRcdH0pXG5cdFx0XHQvLyBcdFx0XHQucmVtb3ZlKCk7XG5cdFx0XHQvLyBcdFx0dmFyIGxhYmVscyA9IG1haW5DbGlwUGF0aC5zZWxlY3RBbGwoXCIucGFwZXJJdGVtTGFiZWxcIilcblx0XHRcdC8vIFx0XHRcdC5pbnRlcnJ1cHQoXCJjb250cmFjdFwiKVxuXHRcdFx0Ly8gXHRcdFx0LnRyYW5zaXRpb24oXCJjb250cmFjdFwiKS5kZWxheSgyMDAwKS5kdXJhdGlvbihkdXIpXG5cdFx0XHQvLyBcdFx0XHQuYXR0cihcInhcIiwgYmVmb3JlVHJhbnNpdGlvblgpXG5cdFx0XHQvLyBcdFx0XHQuYXR0cihcInlcIiwgMClcblx0XHRcdC8vIFx0XHRcdC5yZW1vdmUoKTtcblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gfVxuXG5cdFx0XHRmdW5jdGlvbiBsYWJlbHNDb2xsaXNpb25EZXRlY3QoKSB7XG5cdFx0XHRcdC8vIGRldGVjdCBpZiBsYWJlbHMgZ28gb2ZmIHNjcmVlblxuXG5cdFx0XHRcdC8vIGZ1bmN0aW9uIGNoZWNrU2luZ2xlTGFiZWwoZCkge1xuXHRcdFx0XHQvLyBcdHZhciBib3VuZGluZ1JlY3QgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHQvLyBcdGNvbnNvbGUubG9nKGJvdW5kaW5nUmVjdC53aWR0aCArICQoIHRoaXMgKS5wb3NpdGlvbigpLmxlZnQpO1xuXHRcdFx0XHQvLyBcdGlmICgkKCB0aGlzICkucG9zaXRpb24oKS5sZWZ0PDApIHtcblx0XHRcdFx0Ly8gXHRcdGQzLnNlbGVjdCh0aGlzKS5zZWxlY3QoXCIucGFwZXJMYWJlbFwiKS5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJzdGFydFwiKTtcblx0XHRcdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBcdFx0ZDMuc2VsZWN0KHRoaXMpLnNlbGVjdChcIi5wYXBlckxhYmVsXCIpLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKTtcblx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdC8vIH1cblx0XHRcdFx0ZnVuY3Rpb24gY2hlY2tTaW5nbGVMYWJlbChkKSB7XG5cdFx0XHRcdFx0ZnVuY3Rpb24gd3JhcEluQW5jaG9yKHN0YWJsZV91cmwsIHRleHQpIHtcblx0XHRcdFx0XHRcdC8vIHJldHVybiAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly9sYWJzLmpzdG9yLm9yZycgKyBzdGFibGVfdXJsICsgJ1wiPicgKyB0ZXh0ICsgJzwvYT4nXG5cdFx0XHRcdFx0XHRyZXR1cm4gJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCInICsgc3RhYmxlX3VybCArICdcIj4nICsgdGV4dCArICc8L2E+J1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyB2YXIgYm91bmRpbmdSZWN0ID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0XHR2YXIgdGhpc0xhYmVsID0gZDMuc2VsZWN0KHRoaXMpLnNlbGVjdChcIi5wYXBlckxhYmVsXCIpO1xuXHRcdFx0XHRcdC8vIHZhciB3b3JkcyA9IHRoaXNMYWJlbC50ZXh0KCkuc3BsaXQoXCIgXCIpO1xuXHRcdFx0XHRcdC8vIHRoaXNMYWJlbC50ZXh0KGQudGl0bGUpO1xuXHRcdFx0XHRcdHRoaXNMYWJlbC5odG1sKHdyYXBJbkFuY2hvcihkLnVybCwgZC50aXRsZSkpO1xuXHRcdFx0XHRcdHZhciB3b3JkcyA9IGQudGl0bGUuc3BsaXQoXCIgXCIpO1xuXHRcdFx0XHRcdHZhciBnaXZlVXBUaHJlc2hvbGQgPSAyMDtcblx0XHRcdFx0XHR2YXIgaSA9IDA7XG5cdFx0XHRcdFx0dmFyIHZpZXdMZWZ0RWRnZSA9ICQoICcjdGltZWxpbmUgc3ZnJyApLnBvc2l0aW9uKCkubGVmdCArIG1bM107XG5cdFx0XHRcdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdFx0XHRcdGkrKztcblx0XHRcdFx0XHRcdGlmIChpPmdpdmVVcFRocmVzaG9sZCkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHZhciBsZWZ0UG9zID0gJCggdGhpcyApLnBvc2l0aW9uKCkubGVmdDtcblx0XHRcdFx0XHRcdC8vIGlmIChsZWZ0UG9zIDwgMjApIHtcblx0XHRcdFx0XHRcdC8vIGlmIChsZWZ0UG9zIDwgbVszXSkge1xuXHRcdFx0XHRcdFx0aWYgKGxlZnRQb3MgPCB2aWV3TGVmdEVkZ2UpIHtcblx0XHRcdFx0XHRcdFx0dmFyIG51bVdvcmRzID0gd29yZHMubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHR3b3JkcyA9IHdvcmRzLnNsaWNlKDAsIG51bVdvcmRzLTIpO1xuXHRcdFx0XHRcdFx0XHR2YXIgc2hvcnRlbmVkVGl0bGUgPSB3b3Jkcy5qb2luKFwiIFwiKStcIi4uLlwiO1xuXHRcdFx0XHRcdFx0XHQvLyB0aGlzTGFiZWwudGV4dCh3b3Jkcy5qb2luKFwiIFwiKStcIi4uLlwiKTtcblx0XHRcdFx0XHRcdFx0dGhpc0xhYmVsLmh0bWwod3JhcEluQW5jaG9yKGQudXJsLCBzaG9ydGVuZWRUaXRsZSkpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIHZhciBsZWZ0UG9zID0gJCggdGhpcyApLnBvc2l0aW9uKCkubGVmdDtcblx0XHRcdFx0XHQvL1xuXHRcdFx0XHRcdC8vIGlmIChsZWZ0UG9zPDApIHtcblx0XHRcdFx0XHQvLyBcdGQzLnNlbGVjdCh0aGlzKS5zZWxlY3QoXCIucGFwZXJMYWJlbFwiKVxuXHRcdFx0XHRcdC8vIFx0XHQudGV4dChkLnRpdGxlLnNsaWNlKDAsIDEwKSk7XG5cdFx0XHRcdFx0Ly8gXHRjaGVja1NpbmdsZUxhYmVsKGQpO1xuXHRcdFx0XHRcdC8vIH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gXHRjb25zb2xlLmxvZygnbGVhdmluZyByZWN1cnNpdmUgZnVuY3Rpb24nKVxuXHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XHQvLyByZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0ZDMuc2VsZWN0QWxsKFwiLnBhcGVySXRlbS5leHBhbmRlZFwiKVxuXHRcdFx0XHRcdC5lYWNoKGNoZWNrU2luZ2xlTGFiZWwpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRmdW5jdGlvbiBkZW1vSW5pdCgpIHtcblx0XHRcdFx0Y2hhcnQuY2xhc3NlZChcImRlbW9JblByb2dyZXNzXCIsIHRydWUpO1xuXHRcdFx0XHRjbGVhckJydXNoKCk7XG5cdFx0XHRcdGNvbnRyYWN0KCk7XG5cdFx0XHRcdGRpc2FibGVJbnRlcmFjdGlvbigpO1xuXHRcdFx0XHRtaW5pLm9uKFwibW91c2Vkb3duXCIsIGRlbW9RdWl0KTtcblx0XHRcdFx0ZnVuY3Rpb24gZGVtb1F1aXQoKSB7XG5cdFx0XHRcdFx0Y2hhcnQuY2xhc3NlZChcImRlbW9JblByb2dyZXNzXCIsIGZhbHNlKTtcblx0XHRcdFx0XHRjdXJzb3JJY29uLnRyYW5zaXRpb24oMCkucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIHRyYW5zaXRpb25UaW1lcyA9IFtcblx0XHRcdFx0XHRcdDc1MCwgIC8vIDA6IGluaXRpYWwgZGVsYXkgYmVmb3JlIGFueXRoaW5nIGhhcHBlbnNcblx0XHRcdFx0XHRcdDEwMDAsICAvLyAxOiB0aW1lIHRvIG1vdmUgdGhlIGN1cnNvciB0byB0aGUgbWluaSBhcmVhXG5cdFx0XHRcdFx0XHQyMDAwLCAgLy8gMjogdGltZSB0byBkcmF3IHRoZSBpbml0aWFsIGJydXNoXG5cdFx0XHRcdFx0XHQyMDAsICAgLy8gMzogZGVsYXkgYWZ0ZXIgYnJ1c2hcblx0XHRcdFx0XHRcdDIwMDAsICAvLyA0OiB0aW1lIHRvIG1vdmUgdGhlIGN1cnNvciB0byBhIG1haW4gaXRlbVxuXHRcdFx0XHRcdFx0MzAwMCwgIC8vIDU6IGRlbGF5IHRvIHJlbW92ZSBhbmQgZW5kIHRoZSBkZW1vXG5cdFx0XHRcdFx0XTtcblx0XHRcdFx0dmFyIGN1cnNvckljb24gPSBjaGFydC5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImN1cnNvckljb25cIilcblx0XHRcdFx0XHQuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcIkZvbnRBd2Vzb21lXCIpXG5cdFx0XHRcdFx0LnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMWVtXCIpXG5cdFx0XHRcdFx0LnRleHQoXCJcXHVmMjQ1XCIpXG5cdFx0XHRcdFx0Ly8gLmF0dHIoXCJ4XCIsIDEwMClcblx0XHRcdFx0XHQvLyAuYXR0cihcInlcIiwgMzAwKTtcblx0XHRcdFx0XHQvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgxMDAsMzAwKVwiKTtcblx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHcgKyBcIixcIiArIG1haW5IZWlnaHQgKyBcIilcIik7XG5cdFx0XHRcdC8vIHZhciBpbml0RHVyYXRpb24gPSAxMDAwLFxuXHRcdFx0XHQvLyBcdGluaXREZWxheSA9IDEwMDA7XG5cdFx0XHRcdC8vIGNoYW5nZUV4dGVudCgxOTcwLCAyMDAwLCBpbml0RHVyYXRpb24sIFwiY3ViaWMtaW4tb3V0XCIsIGluaXREZWxheSk7XG5cdFx0XHRcdC8vIGQzLnRyYW5zaXRpb24oXCJpbml0RGVtb1RyYW5zaXRpb25cIikuZGVsYXkoaW5pdERlbGF5ICsgaW5pdER1cmF0aW9uKVxuXHRcdFx0XHQvLyBcdC5lYWNoKFwiZW5kXCIsIGRlbW9FeHBhbmQpO1xuXHRcdFx0XHR2YXIgZXh0ZW50U2VsZWN0ID0gbWluaS5zZWxlY3QoXCIuYnJ1c2hcIikuc2VsZWN0KFwiLmV4dGVudFwiKTtcblx0XHRcdFx0Ly8gdmFyIGluaXRCcnVzaFJhbmdlID0gWzE5NzAsIDIwMDBdO1xuXHRcdFx0XHR2YXIgeWVhclJhbmdlID0gdGltZUVuZCAtIHRpbWVCZWdpbjtcblx0XHRcdFx0aWYgKHllYXJSYW5nZSA8IDYpIHtcblx0XHRcdFx0XHR2YXIgaW5pdEJydXNoUmFuZ2UgPSBbdGltZUJlZ2luLCB0aW1lRW5kXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgaW5pdEJydXNoUmFuZ2UgPSBbdGltZUJlZ2luICsgTWF0aC5mbG9vcih5ZWFyUmFuZ2UqLjMpLCB0aW1lRW5kIC0gTWF0aC5mbG9vcih5ZWFyUmFuZ2UqLjIpXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGFuZ2VFeHRlbnQoaW5pdEJydXNoUmFuZ2VbMF0sIGluaXRCcnVzaFJhbmdlWzBdLCAwKTtcblx0XHRcdFx0Ly8gdmFyIGluaXRCcnVzaFBvc2l0aW9uID0gK2V4dGVudFNlbGVjdC5hdHRyKFwieFwiKTtcblx0XHRcdFx0dmFyIGluaXRCcnVzaFBvc2l0aW9uID0geChicnVzaC5leHRlbnQoKVsxXSkgKyBtWzNdO1xuXG5cdFx0XHRcdC8vIHNlbGVjdCBhIHllYXJJdGVtIHRvIGV4cGFuZCBmb3IgdGhlIGRlbW9cblx0XHRcdFx0dmFyIHZpc0l0ZW1zID0geWVhckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhciA8IGluaXRCcnVzaFJhbmdlWzFdICYmIGQueWVhciA+IGluaXRCcnVzaFJhbmdlWzBdO30pLFxuXHRcdFx0XHRcdG51bVZpc0l0ZW1zID0gdmlzSXRlbXMuc2l6ZSgpO1xuXHRcdFx0XHRpZiAobnVtVmlzSXRlbXMgPT09IDApIHtcblx0XHRcdFx0XHQvLyBpZiB0aGVyZSBhcmUgbm8gdmlzaWJsZSBpdGVtcyBpbiB0aGUgcmFuZ2UsIGp1c3QgZ2l2ZSB1cFxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fSBlbHNlIGlmIChudW1WaXNJdGVtcyA9PT0gMSkge1xuXHRcdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lIHZpc2libGUgaXRlbSwgdXNlIGl0XG5cdFx0XHRcdFx0dmFyIHNlbEluZGV4ID0gMDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBlbHNlLCB1c2UgYW4gaXRlbSBhIGxpdHRsZSB0byB0aGUgcmlnaHQgb2YgY2VudGVyXG5cdFx0XHRcdFx0dmFyIHNlbEluZGV4ID0gTWF0aC5jZWlsKG51bVZpc0l0ZW1zKi41NSk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdHZhciBkZW1vWWVhckl0ZW0gPSB2aXNJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCwgaSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gaSA9PT0gc2VsSW5kZXg7XG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAoIWNoYXJ0LmNsYXNzZWQoXCJkZW1vSW5Qcm9ncmVzc1wiKSkge1xuXHRcdFx0XHRcdC8vIHF1aXRcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cblx0XHRcdFx0Y3Vyc29ySWNvbi50cmFuc2l0aW9uKCkuZGVsYXkodHJhbnNpdGlvblRpbWVzWzBdKVxuXHRcdFx0XHRcdC5kdXJhdGlvbih0cmFuc2l0aW9uVGltZXNbMV0pXG5cdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXG5cdFx0XHRcdFx0XHRcdC8vIGNvbnN0cnVjdFRyYW5zbGF0ZShpbml0QnJ1c2hQb3NpdGlvbisxNSwgbWFpbkhlaWdodCttWzBdKyhtaW5pSGVpZ2h0LzIpKVxuXHRcdFx0XHRcdFx0XHRjb25zdHJ1Y3RUcmFuc2xhdGUoaW5pdEJydXNoUG9zaXRpb24sIG1haW5IZWlnaHQrbVswXSsobWluaUhlaWdodC8yKSlcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC5lYWNoKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYgKGNoYXJ0LmNsYXNzZWQoXCJkZW1vSW5Qcm9ncmVzc1wiKSkge1xuXHRcdFx0XHRcdFx0XHRkZW1vRHJhd0JydXNoKCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRkZW1vRW5kKDApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGZ1bmN0aW9uIGRlbW9EcmF3QnJ1c2goKSB7XG5cdFx0XHRcdFx0Y2hhbmdlRXh0ZW50KGluaXRCcnVzaFJhbmdlWzBdLCBpbml0QnJ1c2hSYW5nZVsxXSwgdHJhbnNpdGlvblRpbWVzWzJdKTtcblx0XHRcdFx0XHR2YXIgbWluRXh0ZW50U2NyZWVuID0gK2V4dGVudFNlbGVjdC5hdHRyKFwieFwiKTtcblx0XHRcdFx0XHR2YXIgbWF4RXh0ZW50U2NyZWVuID0gbWluRXh0ZW50U2NyZWVuICsgKCtleHRlbnRTZWxlY3QuYXR0cihcIndpZHRoXCIpKTtcblx0XHRcdFx0XHR4MS5kb21haW4oYnJ1c2guZXh0ZW50KCkpO1xuXHRcdFx0XHRcdGN1cnNvckljb24udHJhbnNpdGlvbigpXG5cdFx0XHRcdFx0XHQuZHVyYXRpb24odHJhbnNpdGlvblRpbWVzWzJdKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHZhciB4UG9zID0geChicnVzaC5leHRlbnQoKVsxXSkgKyBtWzNdO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gY29uc3RydWN0VHJhbnNsYXRlKHhQb3MsIG1haW5IZWlnaHQrbVswXSsobWluaUhlaWdodC8yKSk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5lYWNoKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYgKGNoYXJ0LmNsYXNzZWQoXCJkZW1vSW5Qcm9ncmVzc1wiKSkge1xuXHRcdFx0XHRcdFx0XHRkZW1vRXhwYW5kKCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRkZW1vRW5kKDApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRmdW5jdGlvbiBkZW1vRXhwYW5kKCkge1xuXHRcdFx0XHRcdC8vIHZhciBkZW1vVHJhbnNpdGlvblRpbWUgPSAyMDAwO1xuXHRcdFx0XHRcdC8vIHZhciBkZW1vRGVsYXlUb1JlbW92ZSA9IDIwMDA7XG5cdFx0XHRcdFx0Ly8gdmFyIGN1cnNvckljb24gPSBtYWluQ2xpcFBhdGguYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHRcdC8vIFx0LmF0dHIoXCJjbGFzc1wiLCBcImN1cnNvckljb25cIilcblx0XHRcdFx0XHQvLyBcdC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwiRm9udEF3ZXNvbWVcIilcblx0XHRcdFx0XHQvLyBcdC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjFlbVwiKVxuXHRcdFx0XHRcdC8vIFx0LnRleHQoXCJcXHVmMjQ1XCIpXG5cdFx0XHRcdFx0Ly8gXHQvLyAuYXR0cihcInhcIiwgMTAwKVxuXHRcdFx0XHRcdC8vIFx0Ly8gLmF0dHIoXCJ5XCIsIDMwMCk7XG5cdFx0XHRcdFx0Ly8gXHQvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgxMDAsMzAwKVwiKTtcblx0XHRcdFx0XHQvLyBcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgdyArIFwiLFwiICsgbWFpbkhlaWdodCArIFwiKVwiKTtcblxuXHRcdFx0XHRcdHZhciBkZW1vWWVhck1hcmsgPSBkZW1vWWVhckl0ZW0uc2VsZWN0KFwiLnllYXJNYXJrXCIpO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRlbW9ZZWFySXRlbSk7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGVtb1llYXJNYXJrKTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkZW1vWWVhck1hcmsuYXR0cihcInJcIikpO1xuXHRcdFx0XHRcdHZhciB0cmFuc2xhdGVTdHIgPSBkZW1vWWVhckl0ZW0uYXR0cihcInRyYW5zZm9ybVwiKTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0cmFuc2xhdGVTdHIpO1xuXHRcdFx0XHRcdHZhciB0cmFuc2xhdGVDb29yZCA9IGRlY29uc3RydWN0VHJhbnNsYXRlKHRyYW5zbGF0ZVN0cik7XG5cdFx0XHRcdFx0dHJhbnNsYXRlQ29vcmQueCA9IHRyYW5zbGF0ZUNvb3JkLnggKyBtWzNdO1xuXHRcdFx0XHRcdHRyYW5zbGF0ZUNvb3JkLnkgPSB0cmFuc2xhdGVDb29yZC55ICsgbVswXSArICgrZGVtb1llYXJNYXJrLmF0dHIoXCJyXCIpKTtcblx0XHRcdFx0XHR2YXIgdHJhbnNsYXRlID0gY29uc3RydWN0VHJhbnNsYXRlKHRyYW5zbGF0ZUNvb3JkLngsIHRyYW5zbGF0ZUNvb3JkLnkpO1xuXHRcdFx0XHRcdC8vIG1vdmUgdGhlIGN1cnNvciB0byBhIHllYXIsIHRoZW4gbWFudWFsbHkgZXhwYW5kIHRoZSB5ZWFyXG5cdFx0XHRcdFx0Y3Vyc29ySWNvbi50cmFuc2l0aW9uKFwiZGVtb0V4cGFuZFwiKS5kZWxheSh0cmFuc2l0aW9uVGltZXNbM10pXG5cdFx0XHRcdFx0XHQuZHVyYXRpb24odHJhbnNpdGlvblRpbWVzWzRdKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgdHJhbnNsYXRlKVxuXHRcdFx0XHRcdFx0LmVhY2goXCJlbmRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChjaGFydC5jbGFzc2VkKFwiZGVtb0luUHJvZ3Jlc3NcIikpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgc2VsID0gcGFwZXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZGQpIHtyZXR1cm4gZGQueWVhcj09ZGVtb1llYXJJdGVtWzBdWzBdLl9fZGF0YV9fLnllYXJ9KTtcblx0XHRcdFx0XHRcdFx0XHRleHBhbmQoc2VsKTtcblx0XHRcdFx0XHRcdFx0XHRkZW1vRW5kKHRyYW5zaXRpb25UaW1lc1s1XSk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0ZGVtb0VuZCgwKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Ly8gY3Vyc29ySWNvbi50cmFuc2l0aW9uKFwiZGVtb0VuZFwiKS5kZWxheShkZW1vVHJhbnNpdGlvblRpbWUpXG5cdFx0XHRcdFx0Ly8gXHQuZHVyYXRpb24oZGVtb0RlbGF5VG9SZW1vdmUpXG5cdFx0XHRcdFx0Ly8gXHQuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQvLyBcdFx0Y3Vyc29ySWNvbi5yZW1vdmUoKTtcblx0XHRcdFx0XHQvLyBcdFx0Y29udHJhY3QoKTtcblx0XHRcdFx0XHQvLyBcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZnVuY3Rpb24gZGVtb0VuZChkZWxheSkge1xuXHRcdFx0XHRcdGN1cnNvckljb24udHJhbnNpdGlvbihcImRlbW9FbmRcIilcblx0XHRcdFx0XHRcdC5kZWxheShkZWxheSlcblx0XHRcdFx0XHRcdC5kdXJhdGlvbigwKVxuXHRcdFx0XHRcdFx0LnJlbW92ZSgpXG5cdFx0XHRcdFx0XHQuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0Y29udHJhY3QoKTtcblx0XHRcdFx0XHRcdFx0ZW5hYmxlSW50ZXJhY3Rpb24oKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblxuXHRcdFx0ZnVuY3Rpb24gdGVzdFBsYWNlQ3Vyc29yKCkge1xuXHRcdFx0XHR2YXIgZXh0ZW50U2VsZWN0ID0gbWluaS5zZWxlY3QoXCIuYnJ1c2hcIikuc2VsZWN0KFwiLmV4dGVudFwiKTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coZXh0ZW50U2VsZWN0KTtcblx0XHRcdFx0dmFyIG1pbkV4dGVudFNjcmVlbiA9ICtleHRlbnRTZWxlY3QuYXR0cihcInhcIik7XG5cdFx0XHRcdHZhciBjdXJzb3JJY29uID0gbWFpbkNsaXBQYXRoLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwiY3Vyc29ySWNvblwiKVxuXHRcdFx0XHRcdC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwiRm9udEF3ZXNvbWVcIilcblx0XHRcdFx0XHQuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxZW1cIilcblx0XHRcdFx0XHQudGV4dChcIlxcdWYyNDVcIilcblx0XHRcdFx0XHQvLyAuYXR0cihcInhcIiwgMTAwKVxuXHRcdFx0XHRcdC8vIC5hdHRyKFwieVwiLCAzMDApO1xuXHRcdFx0XHRcdC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDEwMCwzMDApXCIpO1xuXHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWluRXh0ZW50U2NyZWVuICsgXCIsXCIgKyAobWFpbkhlaWdodC0yMCkgKyBcIilcIik7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiB0ZXN0Q2hhbmdlSGVpZ2h0KCkge1xuXHRcdFx0XHQvLyBjaGFuZ2VFeHRlbnQoTWF0aC5yb3VuZChtaW5FeHRlbnQrMSksIE1hdGgucm91bmQobWF4RXh0ZW50KzEpLCAyNTAsIFwibGluZWFyXCIpO1xuXHRcdFx0XHR2YXIgY2hhcnRIZWlnaHQgPSArY2hhcnQuYXR0cihcImhlaWdodFwiKTtcblx0XHRcdFx0dmFyIGN1cnJNYWluSGVpZ2h0ID0gK21haW4uYXR0cihcImhlaWdodFwiKTtcblx0XHRcdFx0Y2hhcnQudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApLmF0dHIoXCJoZWlnaHRcIiwgY2hhcnRIZWlnaHQrMTAwKTtcblx0XHRcdFx0bWFpbi50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuYXR0cihcImhlaWdodFwiLCBjdXJyTWFpbkhlaWdodCsxMDApO1xuXHRcdFx0XHRtaW5pLnRyYW5zaXRpb24oKS5kdXJhdGlvbigxMDAwKVxuXHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbVszXSArIFwiLFwiICsgKGN1cnJNYWluSGVpZ2h0KzEwMCArIG1bMF0pICsgXCIpXCIpO1xuXHRcdFx0XHRkMy5zZWxlY3QoXCIjY2xpcCByZWN0XCIpLmF0dHIoXCJoZWlnaHRcIiwgY3Vyck1haW5IZWlnaHQrMTAwKTtcblx0XHRcdFx0ZGlzcGxheSgpO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkMy5zZWxlY3QoXCIjY2xpcFwiKS5hdHRyKFwiaGVpZ2h0XCIpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gdmFyIHRlc3RCdXR0b24gPSBkMy5zZWxlY3QoXCJib2R5XCIpLmFwcGVuZChcImJ1dHRvblwiKVxuXHRcdFx0Ly8gXHRcdFx0XHRcdC5hdHRyKFwiaWRcIiwgXCJ0ZXN0QnV0dG9uXCIpXG5cdFx0XHQvLyBcdFx0XHRcdFx0Lmh0bWwoXCJ0ZXN0QnV0dG9uXCIpXG5cdFx0XHQvLyBcdFx0XHRcdFx0Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBcdFx0XHRcdFx0XHQvLyBtaW5pbWl6ZVRpbWVsaW5lKCk7XG5cdFx0XHQvLyBcdFx0XHRcdFx0XHRkZW1vSW5pdCgpO1xuXHRcdFx0Ly8gXHRcdFx0XHRcdH0pO1xuXHRcdFx0ZDMuc2VsZWN0KFwiLmNsaWNrRm9yRGVtb1wiKVxuXHRcdFx0XHQub24oXCJjbGlja1wiLCBkZW1vSW5pdCk7XG5cblx0XHRcdGZ1bmN0aW9uIGRpc2FibGVJbnRlcmFjdGlvbigpIHtcblx0XHRcdFx0ZDMuc2VsZWN0KFwiI3RpbWVsaW5lIHN2Z1wiKS5zdHlsZShcInBvaW50ZXItZXZlbnRzXCIsIFwibm9uZVwiKTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gZW5hYmxlSW50ZXJhY3Rpb24oKSB7XG5cdFx0XHRcdGQzLnNlbGVjdChcIiN0aW1lbGluZSBzdmdcIikuc3R5bGUoXCJwb2ludGVyLWV2ZW50c1wiLCBudWxsKTtcblx0XHRcdH1cblxuXHRcdFx0JCggZG9jdW1lbnQgKS5vbihcInRpbWVsaW5lVmlzOmNvbnRyYWN0XCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjb250cmFjdCgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdCQoIGRvY3VtZW50ICkub24oXCJ0aW1lbGluZVZpczpkaXNwbGF5XCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkaXNwbGF5KCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0JCggZG9jdW1lbnQgKS5vbihcInRpbWVsaW5lVmlzOmNsZWFyQnJ1c2hcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNsZWFyQnJ1c2goKTtcblx0XHRcdH0pO1xuXG5cdFx0fSk7XG5cdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Ly8gdXBkYXRlRGF0YSgpIHtcblx0Ly8gXHQvLyB1c2UgRDMgdXBkYXRlIHBhdHRlcm4gd2l0aCBkYXRhXG4gICAgLy9cblx0Ly8gXHR2YXIgZ3JhcGggPSB0aGlzLl9kYXRhO1xuXHQvLyBcdGdyYXBoLm5vZGVzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuXHQvLyBcdFx0ZC5pZCA9IGQuaWQudG9TdHJpbmcoKTtcblx0Ly8gXHR9KVxuXHQvLyBcdGdyYXBoLmxpbmtzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuXHQvLyBcdFx0ZC5pZCA9IGdldExpbmtJZChkLCBncmFwaC5kaXJlY3RlZCk7XG5cdC8vIFx0fSk7XG5cdC8vIFx0dGhpcy5zaW11bGF0aW9uXG5cdC8vIFx0XHQubm9kZXMoZ3JhcGgubm9kZXMpXG5cdC8vIFx0XHQub24oXCJ0aWNrXCIsIHRpY2tlZCk7XG4gICAgLy9cblx0Ly8gXHRzaW11bGF0aW9uLmZvcmNlKFwibGlua1wiKVxuXHQvLyBcdFx0LmxpbmtzKGdyYXBoLmxpbmtzKTtcblx0Ly8gXHRjb25zb2xlLmxvZyhncmFwaCk7XG5cdC8vIFx0c2ltdWxhdGlvbi5zdG9wKCk7XG5cdC8vIFx0bm9kZSA9IG5vZGUuZGF0YShncmFwaC5ub2RlcywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5pZDsgfSk7XG5cdC8vIFx0dmFyIG5vZGVFeGl0ID0gbm9kZS5leGl0KCk7XG5cdC8vIFx0Ly8gbm9kZUV4aXQuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLmF0dHIoXCJmaWxsXCIsIFwicmVkXCIpO1xuXHQvLyBcdHZhciB0ID0gZDMudHJhbnNpdGlvbigndXBkYXRlRGF0YScpLmR1cmF0aW9uKDUwMDApO1xuXHQvLyBcdG5vZGVFeGl0LnNlbGVjdEFsbChcImNpcmNsZVwiKS5zdHlsZShcInN0cm9rZVwiLCBcInJlZFwiKS50cmFuc2l0aW9uKHQpLmF0dHIoXCJyXCIsIDApO1xuXHQvLyBcdG5vZGUgPSBlbnRlck5vZGVzKG5vZGUsIHQpO1xuXHQvLyBcdC8vIG5vZGUgPSBub2RlLmNhbGwoZW50ZXJOb2RlcywgdCk7XG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG5cdC8vIFx0bGluayA9IGxpbmtcblx0Ly8gXHRcdC5kYXRhKGdyYXBoLmxpbmtzLCBmdW5jdGlvbihkKSB7XG5cdC8vIFx0XHRcdC8vIGQuaWQgPSBnZXRMaW5rSWQoZCk7XG5cdC8vIFx0XHRcdHJldHVybiBkLmlkO1xuXHQvLyBcdFx0fSk7XG5cdC8vIFx0dmFyIGxpbmtFeGl0ID0gbGluay5leGl0KCk7XG5cdC8vIFx0bGlua0V4aXQuc3R5bGUoXCJzdHJva2VcIiwgXCJyZWRcIikudHJhbnNpdGlvbih0KS5zdHlsZShcIm9wYWNpdHlcIiwgMCkucmVtb3ZlKCk7XG5cdC8vIFx0Ly8gbGlua0V4aXQucmVtb3ZlKCk7XG5cdC8vIFx0bGluayA9IGVudGVyTGlua3MobGluaywgdCk7XG5cdC8vIFx0c2ltdWxhdGlvbi5vbihcInRpY2tcIikuY2FsbCgpO1xuICAgIC8vXG4gICAgLy9cblx0Ly8gXHR0LmVuZCgpLnRoZW4oZnVuY3Rpb24oZCkge1xuXHQvLyBcdFx0bm9kZUV4aXQucmVtb3ZlKCk7XG5cdC8vIFx0XHQvLyBzaW11bGF0aW9uLmFscGhhKDEpLnJlc3RhcnQoKTtcblx0Ly8gXHRcdC8vIHNpbXVsYXRpb25cblx0Ly8gXHRcdFx0Ly8gLmFscGhhRGVjYXkoLjAwMDUpXG5cdC8vIFx0XHRcdC8vIC52ZWxvY2l0eURlY2F5KDAuOSlcblx0Ly8gXHRcdFx0Ly8gLmFscGhhKC4xKVxuXHQvLyBcdFx0XHQvLyAucmVzdGFydCgpO1xuXHQvLyBcdH0pO1xuXHQvLyBcdFxuXHQvLyBcdC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdC8vIFx0Ly8gfSwgNDAwMCk7XG5cdC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmVWaXM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X187Il0sInNvdXJjZVJvb3QiOiIifQ==
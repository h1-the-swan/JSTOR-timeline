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

            d.eigenfactor = d["eigenfactor_score"];
            d.venue = d["journal"];
            d.year = d["year"];
            d.url = "http://labs.jstor.org" + d["stable_url"];
          });
          return data;
        }

        d3.select(window).on("resize", display);
        data_total = parseData(data_total);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZDNfYXJ0aWNsZV90aW1lbGluZS8uL3NyYy90aW1lbGluZVZpc19NYWluLmpzIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvZXh0ZXJuYWwgXCJkM1wiIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyIkIiwiVGltZWxpbmVWaXMiLCJvcHRzIiwiZGVmYXVsdHMiLCJlbCIsImRhdGEiLCJ3aWR0aCIsImNvbG9yIiwiZDMiLCJzY2FsZSIsIm9yZGluYWwiLCJzY2hlbWVDYXRlZ29yeTEwIiwiZm9yY2VTdHJlbmd0aCIsIk9iamVjdCIsImFzc2lnbiIsIl9kYXRhIiwidXBkYXRlRGF0YSIsImhlaWdodCIsImluaXQiLCJjb25zb2xlIiwibG9nIiwiZHJhdyIsInZhbHVlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic2VsZWN0aW9uIiwib2JqIiwidyIsImgiLCJkYXRhX3RvdGFsIiwiZWFjaCIsImRlY29uc3RydWN0VHJhbnNsYXRlIiwidHJhbnNsYXRlU3RyaW5nIiwicmVwbGFjZSIsInJlZ2V4IiwiUmVnRXhwIiwibWF0Y2giLCJleGVjIiwieCIsInkiLCJjb25zdHJ1Y3RUcmFuc2xhdGUiLCJ3cmFwIiwidGV4dHdyYXAiLCJtZXRob2QiLCJwYXJzZURhdGEiLCJmb3JFYWNoIiwiZCIsImF1dGhvcnMiLCJlaWdlbmZhY3RvciIsInZlbnVlIiwieWVhciIsInVybCIsInNlbGVjdCIsIndpbmRvdyIsIm9uIiwiZGlzcGxheSIsImxhbmUiLCJtYXJrVHlwZSIsImdldFBhcmFtZXRlckJ5TmFtZSIsImRhdGFCeVllYXIiLCJuZXN0Iiwia2V5Iiwic29ydFZhbHVlcyIsImEiLCJiIiwiYXNjZW5kaW5nIiwidGl0bGUiLCJlbnRyaWVzIiwiZmlyc3RUaXRsZSIsInZhbHVlcyIsImlkIiwic3VtX2VpZ2VuZmFjdG9yIiwic3VtIiwiZGQiLCJtYXhEYXRhQnlZZWFyIiwibWF4IiwibGFuZXMiLCJsYW5lTGVuZ3RoIiwidGltZUJlZ2luIiwibWluIiwidGltZUVuZCIsIm0iLCJtaW5pSGVpZ2h0IiwibWFpbkhlaWdodCIsIm1haW5NaW5SYWQiLCJtYWluTWF4UmFkIiwibWluaU1pblJhZCIsIm1pbmlNYXhSYWQiLCJtaW5FeHRlbnQiLCJtYXhFeHRlbnQiLCJzdHlsZXNCYXNlIiwic3R5bGVzVmlzaWJsZSIsImxpbmVhciIsImRvbWFpbiIsInJhbmdlIiwieDEiLCJ5MSIsInkyIiwiZWZFeHRlbnQiLCJleHRlbnQiLCJlZlNjYWxlTWluaSIsImVmU2NhbGVNYWluIiwiZWZTdW1TY2FsZSIsImNoYXJ0V2lkdGgiLCJjaGFydEhlaWdodCIsImNoYXJ0IiwiYXBwZW5kIiwiYXR0ciIsIm1haW5Db250YWluZXIiLCJtYWluIiwibWluaUNvbnRhaW5lciIsIm1pbmkiLCJtYWluTGFuZUxpbmVzRyIsImkiLCJsZW4iLCJtYWluTGFiZWxHIiwibWFpbkxhYmVsIiwidGV4dCIsInN0eWxlIiwiYm91bmRzIiwiY2FsbCIsInN1Yk9mZnNldCIsIm1haW5MYWJlbFN1YiIsIm1pbmlMYW5lTGluZXNHIiwibWluaUxhYmVsIiwieEF4aXNNaW5pIiwic3ZnIiwiYXhpcyIsIm9yaWVudCIsInRpY2tGb3JtYXQiLCJmb3JtYXQiLCJ4QXhpc01haW4iLCJ4QXhpc01haW5PYmoiLCJtYWluQ2xpcFBhdGgiLCJtaW5pSXRlbXMiLCJzZWxlY3RBbGwiLCJlbnRlciIsInJhZGl1cyIsInN0YWNrSXRlbXMiLCJpdGVtcyIsInllYXJzTGlzdCIsInB1c2giLCJtYXhSYWQiLCJfX2RhdGFfXyIsInRoaXNZZWFyTWluaSIsImZpbHRlciIsIm1pbmlNYXJrT3BhY2l0eSIsIk1hdGgiLCJtaW5pTWFya3MiLCJ5ZWFySXRlbXMiLCJ5ZWFyTWFya3MiLCJjb250cmFjdCIsInNlbCIsInBhcGVySXRlbXMiLCJ0aGlzWWVhckl0ZW0iLCJleHBhbmQiLCJpZHgiLCJzcGFuIiwiam9pbiIsImh0bWwiLCJwYXBlck1hcmtzIiwiYmJveCIsIm5vZGUiLCJnZXRCQm94IiwiaW5zZXJ0IiwicGFwZXJMYWJlbHMiLCJicnVzaCIsImV4dGVudExpbmVzIiwidXBkYXRlRXh0ZW50TGluZXMiLCJsZWZ0IiwicmlnaHQiLCJlbXB0eSIsInNjcm9sbER1ciIsIm1vdmVCcnVzaCIsImRpcmVjdGlvbiIsImNoYW5nZUV4dGVudCIsInJvdW5kIiwic2Nyb2xsSXRlbXMiLCJ6b29tSXRlbXMiLCJ6b29tTW91c2VPdmVyIiwiem9vbU1vdXNlT3V0Iiwic3RvcCIsImZhZGVUbyIsImNsZWFyQnJ1c2hJY29uIiwiZXZlbnQiLCJ3aGVlbERlbHRhWSIsIndoZWVsRGVsdGFYIiwibWlkcG9pbnRZZWFyIiwiYnJ1c2hJbml0IiwiZG9jdW1lbnQiLCJ0cmlnZ2VyIiwieWVhcjEiLCJ5ZWFyMiIsImR1cmF0aW9uIiwiZWFzZSIsImRlbGF5IiwidW5kZWZpbmVkIiwidHJhbnNpdGlvbiIsImV4cGFuZEFsbCIsIm1heEVGIiwiY2xlYXJCcnVzaCIsIm1pZCIsImV4dGVudFNlbGVjdCIsIm1pbkV4dGVudFNjcmVlbiIsIm1heEV4dGVudFNjcmVlbiIsImludmVydCIsImNsYXNzZWQiLCJ1cGRhdGVNYWluIiwidmlzSXRlbXMiLCJub3RWaXNJdGVtcyIsIml0ZW0iLCJfcm90YXRlIiwicm90YXRpb24iLCJsYWJlbHMiLCJhbHBoYSIsInNwYWNpbmciLCJyZWxheCIsImFnYWluIiwiZGEiLCJheCIsImRiIiwiYngiLCJkZWx0YVgiLCJhYnMiLCJzaWduIiwibGFiZWxzQ29sbGlzaW9uRGV0ZWN0IiwiYWZ0ZXJUcmFuc2l0aW9uWCIsImFmdGVyVHJhbnNpdGlvblkiLCJ5ZWFySXRlbSIsInRoaXNZZWFyIiwiZHVyIiwidHJhbnNpdGlvblN0YXJ0U3R5bGUiLCJ0cmFuc2l0aW9uRW5kU3R5bGUiLCJsaW5lIiwibGluZWRhdGEiLCJzdHlsZVR3ZWVuIiwiaW50ZXJwb2xhdGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZGF0dW0iLCJyZW1vdmUiLCJjaGVja1NpbmdsZUxhYmVsIiwid3JhcEluQW5jaG9yIiwic3RhYmxlX3VybCIsInRoaXNMYWJlbCIsIndvcmRzIiwic3BsaXQiLCJnaXZlVXBUaHJlc2hvbGQiLCJ2aWV3TGVmdEVkZ2UiLCJwb3NpdGlvbiIsImxlZnRQb3MiLCJudW1Xb3JkcyIsInNsaWNlIiwic2hvcnRlbmVkVGl0bGUiLCJkZW1vSW5pdCIsImRpc2FibGVJbnRlcmFjdGlvbiIsImRlbW9RdWl0IiwiY3Vyc29ySWNvbiIsInRyYW5zaXRpb25UaW1lcyIsInllYXJSYW5nZSIsImluaXRCcnVzaFJhbmdlIiwiZmxvb3IiLCJpbml0QnJ1c2hQb3NpdGlvbiIsIm51bVZpc0l0ZW1zIiwic2l6ZSIsInNlbEluZGV4IiwiY2VpbCIsImRlbW9ZZWFySXRlbSIsImRlbW9EcmF3QnJ1c2giLCJkZW1vRW5kIiwieFBvcyIsImRlbW9FeHBhbmQiLCJkZW1vWWVhck1hcmsiLCJ0cmFuc2xhdGVTdHIiLCJ0cmFuc2xhdGVDb29yZCIsInRyYW5zbGF0ZSIsImVuYWJsZUludGVyYWN0aW9uIiwidGVzdFBsYWNlQ3Vyc29yIiwidGVzdENoYW5nZUhlaWdodCIsImN1cnJNYWluSGVpZ2h0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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SSxFQUFkLENBQWlCLHFCQUFqQixFQUF3QyxZQUFXO0FBQ2xEQyxpQkFBTztBQUNQLFNBRkQ7QUFJQXZELFNBQUMsQ0FBRTZMLFFBQUYsQ0FBRCxDQUFjdkksRUFBZCxDQUFpQix3QkFBakIsRUFBMkMsWUFBVztBQUNyRGtKLG9CQUFVO0FBQ1YsU0FGRDtBQUlBLE9BajdDRDtBQWs3Q0QsYUFBTyxJQUFQO0FBQ0MsSyxDQUVEO0FBQ0E7QUFDRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0c7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRztBQUNBO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7ZUFHY3ZNLFc7Ozs7Ozs7Ozs7Ozs7QUNyaURmLGdEOzs7Ozs7Ozs7OztBQ0FBLG9EIiwiZmlsZSI6ImQzX2FydGljbGVfdGltZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJkM1wiKSwgcmVxdWlyZShcImpRdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImQzX2FydGljbGVfdGltZWxpbmVcIiwgW1wiZDNcIiwgXCJqUXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZDNfYXJ0aWNsZV90aW1lbGluZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImQzXCIpLCByZXF1aXJlKFwialF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkM19hcnRpY2xlX3RpbWVsaW5lXCJdID0gZmFjdG9yeShyb290W1wiZDNcIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFRpbWVsaW5lVmlzIGZyb20gJy4vdGltZWxpbmVWaXNfTWFpbi5qcyc7XG5leHBvcnQgeyBUaW1lbGluZVZpcyB9O1xuXG4iLCIvLyBidWlsZGluZyBvZmYgaHR0cDovL2JsLm9ja3Mub3JnL2J1bmthdC8yMzM4MDM0XG4vL1xuLy9cbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcbmNvbnN0ICQgPSBqUXVlcnk7XG5cbi8vIHJldXNhYmxlIGNoYXJ0IHBhdHRlcm4gaW5zcGlyZWQgYnk6XG4vLyBodHRwczovL2Jvc3Qub2Nrcy5vcmcvbWlrZS9jaGFydC9cbi8vIGFuZFxuLy8gaHR0cHM6Ly93d3cudG9wdGFsLmNvbS9kMy1qcy90b3dhcmRzLXJldXNhYmxlLWQzLWpzLWNoYXJ0c1xuY2xhc3MgVGltZWxpbmVWaXMge1xuXHRjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcblx0XHRjb25zdCBkZWZhdWx0cyA9IHtcblx0XHRcdGVsOiBudWxsLFxuXHRcdFx0ZGF0YTogbnVsbCxcblx0XHRcdHdpZHRoOiA5NjAsXG5cdFx0XHRjb2xvcjogZDMuc2NhbGUub3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKSxcblx0XHRcdGZvcmNlU3RyZW5ndGg6IC0yLFxuXHRcdH07XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBkZWZhdWx0cywgb3B0cyk7ICAvLyBvcHRzIHdpbGwgb3ZlcndyaXRlIGRlZmF1bHRzXG5cdFx0dGhpcy5fZGF0YSA9IHRoaXMuZGF0YTtcblx0XHR0aGlzLmRhdGEgPSB0aGlzLnVwZGF0ZURhdGE7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmhlaWdodCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHRoaXMuaGVpZ2h0ID0gLjYyNSAqIHRoaXMud2lkdGg7XG5cdFx0fVxuXHRcdC8vIHRoaXMubWFueUJvZHkgPSBkMy5mb3JjZU1hbnlCb2R5KClcblx0XHQvLyBcdFx0XHRcdFx0LnN0cmVuZ3RoKHRoaXMuZm9yY2VTdHJlbmd0aCk7XG5cdFx0dGhpcy5pbml0ID0gZmFsc2U7XG5cdFx0Y29uc29sZS5sb2codGhpcy5fZGF0YSk7XG5cdFx0aWYgKHRoaXMuZWwgIT09IG51bGwgJiYgdGhpcy5fZGF0YSAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5kcmF3KHRoaXMuZWwpO1xuXHRcdFx0dGhpcy5pbml0ID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHR1cGRhdGVEYXRhKHZhbHVlKSB7XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fZGF0YTtcblx0XHR0aGlzLl9kYXRhID0gdmFsdWU7XG5cdFx0aWYgKHRoaXMuaW5pdCA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMuZHJhdyh0aGlzLmVsKTtcblx0XHRcdHRoaXMuaW5pdCA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHRoaXMudXBkYXRlRGF0YSgpO1xuXHRcdFx0Ly8gTk9UIElNUExFTUVOVEVEXG5cdFx0XHRjb25zb2xlLmxvZyhcIlVQREFUSU5HIERBVEEgTk9UIFlFVCBJTVBMRU1FTlRFRFwiKTtcblx0XHR9XG5cdFx0Ly8gY29uc29sZS5sb2codHlwZW9mIHVwZGF0ZURhdGEpO1xuXHRcdC8vIGlmICh0eXBlb2YgdXBkYXRlRGF0YSA9PT0gJ2Z1bmN0aW9uJykgdXBkYXRlRGF0YSgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdGRyYXcoc2VsZWN0aW9uKSB7XG5cdFx0dmFyIG9iaiA9IHRoaXM7XG5cdFx0dmFyIHcgPSB0aGlzLndpZHRoO1xuXHRcdHZhciBoID0gdGhpcy5oZWlnaHQ7XG5cdFx0dmFyIGRhdGFfdG90YWwgPSB0aGlzLl9kYXRhO1xuXHRcdHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0ZnVuY3Rpb24gZGVjb25zdHJ1Y3RUcmFuc2xhdGUodHJhbnNsYXRlU3RyaW5nKSB7XG5cdFx0XHRcdC8vIHRha2VzIGEgc3RyaW5nIGxpa2UgXCJ0cmFuc2xhdGUoMTAwLDIwMClcIiBhbmQgcmV0dXJucyB0aGUgbnVtYmVycyBbMTAwLCAyMDBdXG5cdFx0XHRcdHRyYW5zbGF0ZVN0cmluZyA9IHRyYW5zbGF0ZVN0cmluZy5yZXBsYWNlKFwiKFwiLCBcIlwiKS5yZXBsYWNlKFwiKVwiLCBcIlwiKTtcblx0XHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgvdHJhbnNsYXRlKFtcXGRcXC5dKyksKFtcXGRcXC5dKykvKTtcblx0XHRcdFx0dmFyIG1hdGNoID0gcmVnZXguZXhlYyh0cmFuc2xhdGVTdHJpbmcpO1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHg6ICttYXRjaFsxXSxcblx0XHRcdFx0XHR5OiArbWF0Y2hbMl1cblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gY29uc3RydWN0VHJhbnNsYXRlKHgsIHkpIHtcblx0XHRcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgeCArIFwiLFwiICsgeSArIFwiKVwiO1xuXHRcdFx0fVxuXG5cblx0XHRcdHZhciB3cmFwID0gZDMudGV4dHdyYXAoKS5tZXRob2QoXCJ0c3BhbnNcIik7XG5cblx0XHRcdGZ1bmN0aW9uIHBhcnNlRGF0YShkYXRhKSB7XG5cdFx0XHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0ZC5hdXRob3JzID0gZFtcImF1dGhvcnNcIl07ICAvLyBsaXN0IG9mIGF1dGhvciBuYW1lc1xuXHRcdFx0XHRcdGQuZWlnZW5mYWN0b3IgPSBkW1wiZWlnZW5mYWN0b3Jfc2NvcmVcIl07XG5cdFx0XHRcdFx0ZC52ZW51ZSA9IGRbXCJqb3VybmFsXCJdO1xuXHRcdFx0XHRcdGQueWVhciA9IGRbXCJ5ZWFyXCJdO1xuXHRcdFx0XHRcdGQudXJsID0gXCJodHRwOi8vbGFicy5qc3Rvci5vcmdcIiArIGRbXCJzdGFibGVfdXJsXCJdO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0XHR9XG5cblxuXHRcdFx0ZDMuc2VsZWN0KHdpbmRvdykub24oXCJyZXNpemVcIiwgZGlzcGxheSlcblx0XHRcdGRhdGFfdG90YWwgPSBwYXJzZURhdGEoZGF0YV90b3RhbCk7XG5cdFx0XHRkYXRhX3RvdGFsLmZvckVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRkLmxhbmUgPSAwO1xuXHRcdFx0XHRpZiAoZC5laWdlbmZhY3RvciA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGQuZWlnZW5mYWN0b3IgPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHZhciBtYXJrVHlwZSA9IGdldFBhcmFtZXRlckJ5TmFtZSgnbScpO1xuXHRcdFx0aWYgKCAobWFya1R5cGUgIT0gJ2ljb24nKSAmJiAobWFya1R5cGUgIT0gJ2NpcmNsZScpICkge1xuXHRcdFx0XHRtYXJrVHlwZSA9ICdjaXJjbGUnICAvLyBkZWZhdWx0XG5cdFx0XHR9XG5cblx0XHRcdHZhciBkYXRhQnlZZWFyID0gZDMubmVzdCgpXG5cdFx0XHRcdFx0XHRcdFx0LmtleShmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhcjt9KVxuXHRcdFx0XHRcdFx0XHRcdC5zb3J0VmFsdWVzKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIHJldHVybiBkMy5kZXNjZW5kaW5nKGEuZWlnZW5mYWN0b3Jfc2NvcmUsIGIuZWlnZW5mYWN0b3Jfc2NvcmUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gcmV0dXJuIGQzLmFzY2VuZGluZyhhLnB1YmRhdGUsIGIucHViZGF0ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZDMuYXNjZW5kaW5nKGEudGl0bGUsIGIudGl0bGUpO1xuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0Ly8gLm1hcChkYXRhX3RvdGFsLCBkMy5tYXApO1xuXHRcdFx0XHRcdFx0XHRcdC5lbnRyaWVzKGRhdGFfdG90YWwpO1xuXHRcdFx0ZGF0YUJ5WWVhci5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0ZC5maXJzdFRpdGxlID0gZC52YWx1ZXNbMF0uaWQ7XG5cdFx0XHRcdGQuc3VtX2VpZ2VuZmFjdG9yID0gZDMuc3VtKGQudmFsdWVzLCBmdW5jdGlvbihkZCkge3JldHVybiBkZC5laWdlbmZhY3Rvcjt9KTtcblx0XHRcdFx0ZC5sYW5lID0gMDtcblx0XHRcdFx0ZC55ZWFyID0gK2Qua2V5O1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgbWF4RGF0YUJ5WWVhciA9IGQzLm1heChkYXRhQnlZZWFyLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnZhbHVlcy5sZW5ndGg7IH0pO1xuXG5cdFx0XHR2YXIgbGFuZXMgPSBbXCJDbGltYXRlIGNoYW5nZVwiXSxcblx0XHRcdFx0XHRcdGxhbmVMZW5ndGggPSBsYW5lcy5sZW5ndGgsXG5cdFx0XHRcdFx0Ly8gdGltZUJlZ2luID0gbmV3IERhdGUoU3RyaW5nKG1pblllYXItMSkpLFxuXHRcdFx0XHRcdHRpbWVCZWdpbiA9ICtkMy5taW4oZGF0YUJ5WWVhciwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC55ZWFyOyB9KSAtIDEsXG5cdFx0XHRcdFx0dGltZUVuZCA9ICtkMy5tYXgoZGF0YUJ5WWVhciwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC55ZWFyOyB9KSArIDE7XG5cblx0XHRcdHZhciBtID0gWzIwLCAxNSwgMTUsIDE1MF07IC8vdG9wIHJpZ2h0IGJvdHRvbSBsZWZ0XG5cdFx0XHRcdC8vIHcgPSA5NjAgLSBtWzFdIC0gbVszXSxcblx0XHRcdFx0Ly8gaCA9IDM1MCAtIG1bMF0gLSBtWzJdLFxuXHRcdFx0dyA9IHcgLSBtWzFdIC0gbVszXTtcblx0XHRcdGggPSBoIC0gbVswXSAtIG1bMl07XG5cdFx0XHR2YXIgbWluaUhlaWdodCA9IGxhbmVMZW5ndGggKiAxMiArIDMwLFxuXHRcdFx0XHRtYWluSGVpZ2h0ID0gaCAtIG1pbmlIZWlnaHQgLSA1MDtcblxuXHRcdFx0dmFyIG1haW5NaW5SYWQgPSA4LFxuXHRcdFx0XHRtYWluTWF4UmFkID0gMTgsXG5cdFx0XHRcdG1pbmlNaW5SYWQgPSA1LFxuXHRcdFx0XHRtaW5pTWF4UmFkID0gMTA7XG5cblx0XHRcdHZhciBtaW5FeHRlbnQsIG1heEV4dGVudDsgIC8vIHRoZXNlIHdpbGwgYmUgdGhlIGxvd2VyIGFuZCB1cHBlciB5ZWFycyBkaXNwbGF5ZWQgaW4gbWFpblxuXG5cdFx0XHR2YXIgc3R5bGVzQmFzZSA9IHtcblx0XHRcdFx0J29wYWNpdHknOiAuMlxuXHRcdFx0fTtcblx0XHRcdHZhciBzdHlsZXNWaXNpYmxlID0ge1xuXHRcdFx0XHQnb3BhY2l0eSc6IDFcblx0XHRcdH07XG5cblx0XHRcdC8vc2NhbGVzXG5cdFx0XHR2YXIgeCA9IGQzLnNjYWxlLmxpbmVhcigpXG5cdFx0XHRcdFx0LmRvbWFpbihbdGltZUJlZ2luLCB0aW1lRW5kXSlcblx0XHRcdFx0XHQucmFuZ2UoWzAsIHddKTtcblx0XHRcdHZhciB4MSA9IGQzLnNjYWxlLmxpbmVhcigpXG5cdFx0XHRcdFx0LnJhbmdlKFswLCB3XSk7XG5cdFx0XHR2YXIgeTEgPSBkMy5zY2FsZS5saW5lYXIoKVxuXHRcdFx0XHRcdC5kb21haW4oWzAsIGxhbmVMZW5ndGhdKVxuXHRcdFx0XHRcdC5yYW5nZShbMCwgbWFpbkhlaWdodF0pO1xuXHRcdFx0dmFyIHkyID0gZDMuc2NhbGUubGluZWFyKClcblx0XHRcdFx0XHQuZG9tYWluKFswLCBsYW5lTGVuZ3RoXSlcblx0XHRcdFx0XHQucmFuZ2UoWzAsIG1pbmlIZWlnaHRdKTtcblx0XHRcdHZhciBlZkV4dGVudCA9IGQzLmV4dGVudChkYXRhX3RvdGFsLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLmVpZ2VuZmFjdG9yOyB9KTtcblx0XHRcdHZhciBlZlNjYWxlTWluaSA9IGQzLnNjYWxlLmxpbmVhcigpXG5cdFx0XHRcdFx0LmRvbWFpbihlZkV4dGVudClcblx0XHRcdFx0XHQvLyAucmFuZ2UoWzAsIDVdKTtcblx0XHRcdFx0XHQucmFuZ2UoW21pbmlNaW5SYWQsIG1pbmlNYXhSYWRdKTtcblx0XHRcdHZhciBlZlNjYWxlTWFpbiA9IGQzLnNjYWxlLmxpbmVhcigpXG5cdFx0XHRcdFx0LmRvbWFpbihlZkV4dGVudClcblx0XHRcdFx0XHQvLyAucmFuZ2UoWzAsIDVdKTtcblx0XHRcdFx0XHQucmFuZ2UoW21haW5NaW5SYWQsIG1haW5NYXhSYWRdKTtcblx0XHRcdHZhciBlZlN1bVNjYWxlID0gZDMuc2NhbGUubGluZWFyKClcblx0XHRcdFx0XHQuZG9tYWluKGQzLmV4dGVudChkYXRhQnlZZWFyLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnN1bV9laWdlbmZhY3RvcjsgfSkpXG5cdFx0XHRcdFx0Ly8gLnJhbmdlKFswLCA1XSk7XG5cdFx0XHRcdFx0LnJhbmdlKFttYWluTWluUmFkLCBtYWluTWF4UmFkXSk7XG5cblxuXHRcdFx0dmFyIGNoYXJ0V2lkdGggPSB3ICsgbVsxXSArIG1bM10sXG5cdFx0XHRcdGNoYXJ0SGVpZ2h0ID0gaCArIG1bMF0gKyBtWzJdO1xuXG5cdFx0XHR2YXIgY2hhcnQgPSBkMy5zZWxlY3QoXCIjdGltZWxpbmVcIilcblx0XHRcdFx0XHRcdC5hcHBlbmQoXCJzdmdcIilcblx0XHRcdFx0XHRcdC8vIC5hdHRyKFwid2lkdGhcIiwgY2hhcnRXaWR0aClcblx0XHRcdFx0XHRcdC8vIC5hdHRyKFwiaGVpZ2h0XCIsIGNoYXJ0SGVpZ2h0KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJkYXRhLW1heGltaXplZEhlaWdodFwiLCBjaGFydEhlaWdodClcblx0XHRcdFx0XHRcdC5hdHRyKFwiZGF0YS1jdXJySGVpZ2h0XCIsIGNoYXJ0SGVpZ2h0KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIFwiICsgY2hhcnRXaWR0aCArIFwiIFwiICsgY2hhcnRIZWlnaHQpXG5cdFx0XHRcdFx0XHQuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWlkWU1pZCBtZWV0XCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwiY2hhcnRcIik7XG5cdFx0XHRcblx0XHRcdGNoYXJ0LmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwiY2xpcFBhdGhcIilcblx0XHRcdFx0LmF0dHIoXCJpZFwiLCBcImNsaXBcIilcblx0XHRcdFx0LmFwcGVuZChcInJlY3RcIilcblx0XHRcdFx0LmF0dHIoXCJ3aWR0aFwiLCB3KVxuXHRcdFx0XHQuYXR0cihcImhlaWdodFwiLCBtYWluSGVpZ2h0KTtcblxuXHRcdFx0dmFyIG1haW5Db250YWluZXIgPSBjaGFydC5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgbVswXSArIFwiKVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ3aWR0aFwiLCBjaGFydFdpZHRoKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJoZWlnaHRcIiwgbWFpbkhlaWdodClcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJtYWluQ29udGFpbmVyXCIpO1xuXG5cdFx0XHQvLyB2YXIgbWFpbiA9IGNoYXJ0LmFwcGVuZChcImdcIilcblx0XHRcdHZhciBtYWluID0gbWFpbkNvbnRhaW5lci5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdFx0XHQvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1bM10gKyBcIixcIiArIG1bMF0gKyBcIilcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbVszXSArIFwiLDApXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcIndpZHRoXCIsIHcpXG5cdFx0XHRcdFx0XHQuYXR0cihcImhlaWdodFwiLCBtYWluSGVpZ2h0KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcIm1haW5cIik7XG5cblx0XHRcdHZhciBtaW5pQ29udGFpbmVyID0gY2hhcnQuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIChtYWluSGVpZ2h0ICsgbVswXSkgKyBcIilcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwid2lkdGhcIiwgY2hhcnRXaWR0aClcblx0XHRcdFx0XHRcdC5hdHRyKFwiaGVpZ2h0XCIsIG1haW5IZWlnaHQpXG5cdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibWluaUNvbnRhaW5lclwiKTtcblxuXHRcdFx0Ly8gdmFyIG1pbmkgPSBjaGFydC5hcHBlbmQoXCJnXCIpXG5cdFx0XHR2YXIgbWluaSA9IG1pbmlDb250YWluZXIuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdFx0Ly8gLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtWzNdICsgXCIsXCIgKyAobWFpbkhlaWdodCArIG1bMF0pICsgXCIpXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1bM10gKyBcIiwwKVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ3aWR0aFwiLCB3KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJoZWlnaHRcIiwgbWluaUhlaWdodClcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJtaW5pXCIpO1xuXHRcdFx0XG5cdFx0XHQvL21haW4gbGFuZXMgYW5kIHRleHRzXG5cdFx0XHR2YXIgbWFpbkxhbmVMaW5lc0cgPSBtYWluLmFwcGVuZChcImdcIik7XG5cdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gbGFuZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0bWFpbkxhbmVMaW5lc0cuYXBwZW5kKFwibGluZVwiKVxuXHRcdFx0XHRcdC5hdHRyKFwieDFcIiwgbVsxXSlcblx0XHRcdFx0XHQuYXR0cihcInkxXCIsIGZ1bmN0aW9uKCkge3JldHVybiB5MihpKTt9KVxuXHRcdFx0XHRcdC5hdHRyKFwieDJcIiwgdylcblx0XHRcdFx0XHQuYXR0cihcInkyXCIsIGZ1bmN0aW9uKCkge3JldHVybiB5MihpKTt9KVxuXHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJsYW5lTGluZVwiKVxuXHRcdFx0XHRcdC5hdHRyKFwic3Ryb2tlXCIsIFwibGlnaHRncmF5XCIpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbWFpbkxhYmVsRyA9IG1haW5Db250YWluZXIuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiKyhtWzBdKStcIilcIik7XG5cdFx0XHR2YXIgbWFpbkxhYmVsID0gbWFpbkxhYmVsRy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdC50ZXh0KFwiTnVtYmVyIG9mIGluZmx1ZW50aWFsIGFydGljbGVzIGluIHRoZSB5ZWFyXCIpXG5cdFx0XHRcdC8vIC5hdHRyKFwieFwiLCAtbVsxXSlcblx0XHRcdFx0Ly8gLmF0dHIoXCJ4XCIsIDApXG5cdFx0XHRcdC8vIC5hdHRyKFwieVwiLCAxMClcblx0XHRcdFx0LnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMTRweFwiKVxuXHRcdFx0XHQvLyAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJsYW5lVGV4dFwiKVxuXHRcdFx0XHQuYXR0cihcImlkXCIsIFwibWFpbkxhYmVsXCIpO1xuXHRcdFxuXHRcdFx0Ly8gd3JhcC5ib3VuZHMoe2hlaWdodDogbWFpbkhlaWdodCwgd2lkdGg6IG1bM119KS5tZXRob2QoXCJ0c3BhbnNcIik7XG5cdFx0XHR3cmFwLmJvdW5kcyh7aGVpZ2h0OiBtYWluSGVpZ2h0LCB3aWR0aDogKG1bM10gKiAuOSl9KTtcblx0XHRcdC8vIGQzLnNlbGVjdChcIi5sYW5lVGV4dFwiKS5jYWxsKHdyYXApO1xuXHRcdFx0bWFpbkxhYmVsLmNhbGwod3JhcCk7XG5cblx0XHRcdHZhciBzdWJPZmZzZXQgPSAkKCAnI21haW5MYWJlbCcgKS5oZWlnaHQoKTsgIC8vIHkgb2Zmc2V0IGZvciB0aGUgc3ViIGxhYmVsXG5cdFx0XHR2YXIgbWFpbkxhYmVsU3ViID0gbWFpbkxhYmVsRy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBzdWJPZmZzZXQgKyBcIilcIilcblx0XHRcdFx0LnRleHQoXCJTaXplIG9mIGNpcmNsZXMgaW5kaWNhdGVzIGxldmVsIG9mIGluZmx1ZW5jZVwiKVxuXHRcdFx0XHQuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxMXB4XCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJsYW5lVGV4dFwiKVxuXHRcdFx0XHQuYXR0cihcImlkXCIsIFwibWFpbkxhYmVsU3ViXCIpO1xuXG5cdFx0XHR3cmFwLmJvdW5kcyh7aGVpZ2h0OiBtYWluSGVpZ2h0IC0gc3ViT2Zmc2V0LCB3aWR0aDogKG1bM10gKiAuOSl9KTtcblx0XHRcdG1haW5MYWJlbFN1Yi5jYWxsKHdyYXApO1xuXHRcdFx0XG5cdFx0XHRcblx0XHRcdC8vbWluaSBsYW5lcyBhbmQgdGV4dHNcblx0XHRcdHZhciBtaW5pTGFuZUxpbmVzRyA9IG1pbmkuYXBwZW5kKFwiZ1wiKTtcblx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSBsYW5lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRtaW5pTGFuZUxpbmVzRy5hcHBlbmQoXCJsaW5lXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJ4MVwiLCBtWzFdKVxuXHRcdFx0XHRcdC5hdHRyKFwieTFcIiwgZnVuY3Rpb24oKSB7cmV0dXJuIHkyKGkpO30pXG5cdFx0XHRcdFx0LmF0dHIoXCJ4MlwiLCB3KVxuXHRcdFx0XHRcdC5hdHRyKFwieTJcIiwgZnVuY3Rpb24oKSB7cmV0dXJuIHkyKGkpO30pXG5cdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImxhbmVMaW5lXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJzdHJva2VcIiwgXCJsaWdodGdyYXlcIik7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBtaW5pTGFiZWwgPSBtaW5pQ29udGFpbmVyLmFwcGVuZChcImdcIilcblx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIisgbVswXSArXCIpXCIpXG5cdFx0XHRcdC5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdC50ZXh0KFwiU2VsZWN0IGRhdGUgcmFuZ2UgdG8gZm9jdXMgb246XCIpXG5cdFx0XHRcdC8vIC5hdHRyKFwieFwiLCAtbVsxXSlcblx0XHRcdFx0Ly8gLmF0dHIoXCJ4XCIsIDApXG5cdFx0XHRcdC8vIC5hdHRyKFwieVwiLCAxMClcblx0XHRcdFx0LnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMTRweFwiKVxuXHRcdFx0XHQvLyAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJsYW5lVGV4dFwiKTtcblxuXHRcdFx0d3JhcC5ib3VuZHMoe2hlaWdodDogbWluaUhlaWdodCwgd2lkdGg6IChtWzNdICogLjkpfSk7XG5cdFx0XHQvLyBkMy5zZWxlY3QoXCIubGFuZVRleHRcIikuY2FsbCh3cmFwKTtcblx0XHRcdG1pbmlMYWJlbC5jYWxsKHdyYXApO1xuXG5cdFx0XHQvLyBtaW5pLmFwcGVuZChcImdcIikuc2VsZWN0QWxsKFwiLmxhbmVUZXh0XCIpXG5cdFx0XHQvLyBcdC5kYXRhKGxhbmVzKVxuXHRcdFx0Ly8gXHQuZW50ZXIoKS5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHQvLyBcdC50ZXh0KGZ1bmN0aW9uKGQpIHtyZXR1cm4gZDt9KVxuXHRcdFx0Ly8gXHQuYXR0cihcInhcIiwgLW1bMV0pXG5cdFx0XHQvLyBcdC5hdHRyKFwieVwiLCBmdW5jdGlvbihkLCBpKSB7cmV0dXJuIHkyKGkgKyAuNSk7fSlcblx0XHRcdC8vIFx0LmF0dHIoXCJkeVwiLCBcIi41ZXhcIilcblx0XHRcdC8vIFx0LmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuXHRcdFx0Ly8gXHQuYXR0cihcImNsYXNzXCIsIFwibGFuZVRleHRcIik7XG5cblx0XHRcdC8vIEF4ZXNcblx0XHRcdHZhciB4QXhpc01pbmkgPSBkMy5zdmcuYXhpcygpXG5cdFx0XHRcdC5vcmllbnQoXCJib3R0b21cIilcblx0XHRcdFx0Ly8gLnRpY2tzKDUpXG5cdFx0XHRcdC5zY2FsZSh4KVxuXHRcdFx0XHQudGlja0Zvcm1hdChkMy5mb3JtYXQoXCJkXCIpKTtcblxuXHRcdFx0bWluaS5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJ4YXhpc1wiKVxuXHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgKG1pbmlIZWlnaHQpICsgXCIpXCIpXG5cdFx0XHRcdC5jYWxsKHhBeGlzTWluaSk7XG5cblx0XHRcdHZhciB4QXhpc01haW4gPSBkMy5zdmcuYXhpcygpXG5cdFx0XHRcdC5vcmllbnQoXCJ0b3BcIilcblx0XHRcdFx0LnNjYWxlKHgxKVxuXHRcdFx0XHQudGlja0Zvcm1hdChkMy5mb3JtYXQoXCJkXCIpKTtcblxuXHRcdFx0dmFyIHhBeGlzTWFpbk9iaiA9IG1haW4uYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwieGF4aXNcIilcblx0XHRcdFx0LmNhbGwoeEF4aXNNYWluKTtcblxuXHRcdFx0dmFyIG1haW5DbGlwUGF0aCA9IG1haW4uYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJtYWluQ2xpcFBhdGhcIilcblx0XHRcdFx0XHRcdFx0XHQuYXR0cihcImNsaXAtcGF0aFwiLCBcInVybCgjY2xpcClcIik7XG5cblx0XHRcdFxuXHRcdFx0Ly9taW5pIGl0ZW1zXG5cdFx0XHQvLyBub3RlOiBtb3VzZW92ZXIgZXZlbnRzIHdpbGwgbm90IHBsYXkgd2VsbCB3aXRoIHRoZSBicnVzaFxuXHRcdFx0dmFyIG1pbmlJdGVtcyA9IG1pbmkuYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoXCIubWluaUl0ZW1cIilcblx0XHRcdFx0LmRhdGEoZGF0YV90b3RhbClcblx0XHRcdFx0LmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibWluaUl0ZW1cIilcblx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdGQueCA9IHgoZC55ZWFyKTtcblx0XHRcdFx0XHQvLyBkLnkgPSAwOyAgLy8gZm9yIG5vd1xuXHRcdFx0XHRcdGQueSA9IG1pbmlIZWlnaHQgLyAyO1xuXHRcdFx0XHRcdC8vIGQucmFkaXVzID0gNSArIGVmU2NhbGUoZC5laWdlbmZhY3Rvcl9zY29yZSk7XG5cdFx0XHRcdFx0ZC5yYWRpdXMgPSAxICsgKCBlZlNjYWxlTWluaShkLmVpZ2VuZmFjdG9yKSApO1xuXHRcdFx0XHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHQvLyBub3QgY3VycmVudGx5IHVzaW5nIHRoaXNcblx0XHRcdGZ1bmN0aW9uIHN0YWNrSXRlbXMoaXRlbXMsIHNjYWxlKSB7XG5cdFx0XHRcdHZhciB5ZWFyc0xpc3QgPSBbXTtcblx0XHRcdFx0aXRlbXMuZWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0aWYgKCAhKGQueWVhciBpbiB5ZWFyc0xpc3QpICkge1xuXHRcdFx0XHRcdFx0eWVhcnNMaXN0LnB1c2goZC55ZWFyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR2YXIgbWF4UmFkID0gZDMubWF4KGl0ZW1zWzBdLCBmdW5jdGlvbihkKSB7cmV0dXJuIGQuX19kYXRhX18ucmFkaXVzfSk7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSB5ZWFyc0xpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0XHR0aGlzWWVhck1pbmkgPSBpdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXI9PXllYXJzTGlzdFtpXX0pO1xuXHRcdFx0XHRcdHZhciB5ID0gMDtcblx0XHRcdFx0XHR0aGlzWWVhck1pbmkuZWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRpZiAoeSA9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHkgPSBzY2FsZShkLmxhbmUpICsgbWF4UmFkO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0eSA9IHkgKyAyKmQucmFkaXVzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZC55ID0geTtcblx0XHRcdFx0XHRcdGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBzdGFja0l0ZW1zKG1pbmlJdGVtcywgeTIpO1xuXG5cdFx0XHR2YXIgbWluaU1hcmtPcGFjaXR5ID0gTWF0aC5tYXgoICgxL21heERhdGFCeVllYXIpLCAwLjMgKTtcblx0XHRcdHZhciBtaW5pTWFya3MgPSBtaW5pSXRlbXMuYXBwZW5kKFwiY2lyY2xlXCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJtaW5pTWFya1wiKVxuXHRcdFx0XHQuYXR0cihcInJcIiwgZnVuY3Rpb24oZCkge3JldHVybiBkLnJhZGl1czt9KVxuXHRcdFx0XHQvLyAuc3R5bGUoc3R5bGVzQmFzZSk7XG5cdFx0XHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgbWluaU1hcmtPcGFjaXR5KTtcblxuXG5cdFx0XHRzd2l0Y2ggKG1hcmtUeXBlKSB7XG5cdFx0XHRcdGNhc2UgJ2NpcmNsZSc6XG5cdFx0XHRcdFx0Ly9tYWluIGl0ZW1zXG5cdFx0XHRcdFx0dmFyIHllYXJJdGVtcyA9IG1haW5DbGlwUGF0aC5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcIi55ZWFySXRlbVwiKVxuXHRcdFx0XHRcdFx0LmRhdGEoZGF0YUJ5WWVhcilcblx0XHRcdFx0XHRcdC5lbnRlcigpLmFwcGVuZChcImdcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJ5ZWFySXRlbVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRkLnggPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0XHRcdGQueSA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHRcdFx0Ly8gZC5yYWRpdXMgPSBtYWluTWluUmFkICsgKDIgKiBlZlN1bVNjYWxlKGQuc3VtX2VpZ2VuZmFjdG9yKSk7XG5cdFx0XHRcdFx0XHRcdGQucmFkaXVzID0gZWZTdW1TY2FsZShkLnN1bV9laWdlbmZhY3Rvcik7XG5cdFx0XHRcdFx0XHRcdC8vIGQucmFkaXVzID0gbWFpbk1pblJhZCArIChkLnZhbHVlcy5sZW5ndGgqMik7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHZhciB5ZWFyTWFya3MgPSB5ZWFySXRlbXMuYXBwZW5kKFwiY2lyY2xlXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwieWVhck1hcmtcIilcblx0XHRcdFx0XHRcdC8vIC5vbignbW91c2VvdmVyJywgZXhwYW5kKVxuXHRcdFx0XHRcdFx0Lm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRyYWN0KCk7XG5cdFx0XHRcdFx0XHRcdHZhciBzZWwgPSBwYXBlckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkZCkge3JldHVybiBkZC55ZWFyPT09ZC55ZWFyfSk7XG5cdFx0XHRcdFx0XHRcdHZhciB0aGlzWWVhckl0ZW0gPSBkMy5zZWxlY3QodGhpcyk7XG5cdFx0XHRcdFx0XHRcdGV4cGFuZChzZWwsIHRoaXNZZWFySXRlbSk7XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQvLyAub24oJ21vdXNlb3V0JywgY29udHJhY3QpXG5cdFx0XHRcdFx0XHQuc3R5bGUoc3R5bGVzVmlzaWJsZSk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHQvL2xhYmVsIGZvciBudW1iZXIgb2YgcGFwZXJzXG5cdFx0XHRcdFx0eWVhckl0ZW1zLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwieVwiLCBcIi4zZW1cIikgIC8vbnVkZ2Vcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJudW1JbmRpY2F0b3JcIilcblx0XHRcdFx0XHRcdC50ZXh0KGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC52YWx1ZXMubGVuZ3RoO30pO1xuXG5cdFx0XHRcdFx0dmFyIHBhcGVySXRlbXMgPSB5ZWFySXRlbXMuYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoXCIucGFwZXJJdGVtXCIpXG5cdFx0XHRcdFx0XHQuZGF0YShmdW5jdGlvbihkKSB7cmV0dXJuIGQudmFsdWVzfSlcblx0XHRcdFx0XHRcdC5lbnRlcigpLmFwcGVuZChcImdcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJwYXBlckl0ZW1cIilcblx0XHRcdFx0XHRcdC5hdHRyKFwiZGF0YS15ZWFyXCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyO30pXG5cdFx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkLCBpKSB7XG5cdFx0XHRcdFx0XHRcdGQueCA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHRcdFx0ZC55ID0gMDsgIC8vZm9yIG5vd1xuXHRcdFx0XHRcdFx0XHRkLmlkeCA9IGk7XG5cdFx0XHRcdFx0XHRcdC8vIGQucmFkaXVzID0gbWFpbk1pblJhZCArICgyICogZWZTY2FsZShkLmVpZ2VuZmFjdG9yKSk7XG5cdFx0XHRcdFx0XHRcdGQucmFkaXVzID0gZWZTY2FsZU1haW4oZC5laWdlbmZhY3Rvcik7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0aXRsZVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gZm9yIHRvb2x0aXBcblx0XHRcdFx0XHRcdFx0XHQvLyB2YXIgdGV4dCA9IGQudGl0bGVcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0XHQrIFwiLCBcIlxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHRcdCsgZC5hdXRob3JzLmpvaW4oXCIsIFwiKVxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHRcdCsgXCIsIFwiXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0KyBkLmpvdXJuYWxcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0XHQrIFwiLCBcIlxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHRcdCsgZC55ZWFyO1xuXHRcdFx0XHRcdFx0XHRcdC8vIHJldHVybiB0ZXh0O1xuXHRcdFx0XHRcdFx0XHR2YXIgc3BhbiA9ICQoICc8c3Bhbj4nICk7XG5cdFx0XHRcdFx0XHRcdHNwYW4uYXBwZW5kKCAkKCAnPHAgY2xhc3M9XCJ0b29sdGlwIHRpdGxlXCI+JyApLnRleHQoZC50aXRsZSkgKTsgXG5cdFx0XHRcdFx0XHRcdHNwYW4uYXBwZW5kKCAkKCAnPHAgY2xhc3M9XCJ0b29sdGlwIGF1dGhvcnNcIj4nICkudGV4dChkLmF1dGhvcnMuam9pbihcIiwgXCIpKSApO1xuXHRcdFx0XHRcdFx0XHRzcGFuLmFwcGVuZCggJCggJzxwIGNsYXNzPVwidG9vbHRpcCBqb3VybmFsXCI+JyApLnRleHQoZC52ZW51ZSkgKTsgXG5cdFx0XHRcdFx0XHRcdHNwYW4uYXBwZW5kKCAkKCAnPHAgY2xhc3M9XCJ0b29sdGlwIHllYXJcIj4nICkudGV4dChkLnllYXIpICk7IFxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gc3Bhbi5odG1sKCk7XG5cblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gdmFyIHQgPSBkMy5zZWxlY3QodGhpcykuc2VsZWN0KCcucGFwZXJMYWJlbCcpO1xuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCQoIHRoaXMgKS5wb3NpdGlvbigpKTtcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygkKCAnLm1haW4nICkucG9zaXRpb24oKS50b3AgKyBtYWluSGVpZ2h0KTtcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0dmFyIHVybCA9IGQudXJsO1xuXHRcdFx0XHRcdFx0XHQvLyB3aW5kb3cub3Blbih1cmwsJ19ibGFuaycpO1xuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHR2YXIgcGFwZXJNYXJrcyA9IHBhcGVySXRlbXMuYXBwZW5kKFwiY2lyY2xlXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcInJcIiwgMCkgIC8vZm9yIG5vd1xuXHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInBhcGVyTWFya1wiKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcblx0XHRcdFx0Y2FzZSAnaWNvbic6XG5cdFx0XHRcdFx0Ly9tYWluIGl0ZW1zXG5cdFx0XHRcdFx0dmFyIHllYXJJdGVtcyA9IG1haW5DbGlwUGF0aC5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcIi55ZWFySXRlbVwiKVxuXHRcdFx0XHRcdFx0LmRhdGEoZGF0YUJ5WWVhcilcblx0XHRcdFx0XHRcdC5lbnRlcigpLmFwcGVuZChcImdcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJ5ZWFySXRlbVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRkLnggPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0XHRcdGQueSA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHRcdFx0Ly8gZC5yYWRpdXMgPSBtYWluTWluUmFkICsgKDIgKiBlZlN1bVNjYWxlKGQuc3VtX2VpZ2VuZmFjdG9yKSk7XG5cdFx0XHRcdFx0XHRcdGQucmFkaXVzID0gZWZTdW1TY2FsZShkLnN1bV9laWdlbmZhY3Rvcik7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR2YXIgcGFwZXJJdGVtcyA9IHllYXJJdGVtcy5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcIi5wYXBlckl0ZW1cIilcblx0XHRcdFx0XHRcdC5kYXRhKGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC52YWx1ZXN9KVxuXHRcdFx0XHRcdFx0LmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInBhcGVySXRlbVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCwgaSkge1xuXHRcdFx0XHRcdFx0XHRkLnggPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0XHRcdGQueSA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHRcdFx0ZC5pZHggPSBpO1xuXHRcdFx0XHRcdFx0XHQvLyBkLnJhZGl1cyA9IG1haW5NaW5SYWQgKyAoMiAqIGVmU2NhbGUoZC5laWdlbmZhY3RvcikpO1xuXHRcdFx0XHRcdFx0XHRkLnJhZGl1cyA9IGVmU2NhbGVNYWluKGQuZWlnZW5mYWN0b3IpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cblxuXHRcdFx0XHRcdHZhciBwYXBlck1hcmtzID0gcGFwZXJJdGVtcy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwicGFwZXJNYXJrXCIpXG5cdFx0XHRcdFx0XHQuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcIkZvbnRBd2Vzb21lXCIpXG5cdFx0XHRcdFx0XHQudGV4dChcIlxcdWYwZjZcIilcblx0XHRcdFx0XHRcdC8vIC5vbignbW91c2VvdmVyJywgZXhwYW5kKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuXHRcdFx0XHRcdFx0Lm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRyYWN0KCk7XG5cdFx0XHRcdFx0XHRcdHZhciBzZWwgPSBwYXBlckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkZCkge3JldHVybiBkZC55ZWFyPT09ZC55ZWFyfSk7XG5cdFx0XHRcdFx0XHRcdGV4cGFuZChzZWwpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdC8vIC5vbignbW91c2VvdXQnLCBjb250cmFjdClcblxuXHRcdFx0XHRcdHZhciBiYm94ID0gcGFwZXJNYXJrcy5ub2RlKCkuZ2V0QkJveCgpO1xuXHRcdFx0XHRcdHBhcGVySXRlbXMuaW5zZXJ0KFwicmVjdFwiLCBcIi5wYXBlck1hcmtcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwieFwiLCBiYm94LngpXG5cdFx0XHRcdFx0XHQuYXR0cihcInlcIiwgYmJveC55KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ3aWR0aFwiLCBiYm94LndpZHRoKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJoZWlnaHRcIiwgYmJveC5oZWlnaHQpXG5cdFx0XHRcdFx0XHQuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIik7XG5cblx0XHRcdFx0XHQvLyAvL21haW4gaXRlbXNcblx0XHRcdFx0XHQvLyB2YXIgcGFwZXJJdGVtcyA9IG1haW5DbGlwUGF0aC5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcIi5wYXBlckl0ZW1cIilcblx0XHRcdFx0XHQvLyBcdC5kYXRhKGRhdGFfdG90YWwpXG5cdFx0XHRcdFx0Ly8gXHQuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdFx0Ly8gXHQuYXR0cihcImNsYXNzXCIsIFwicGFwZXJJdGVtXCIpXG5cdFx0XHRcdFx0Ly8gXHQuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0Ly8gXHRcdGQueCA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHQvLyBcdFx0ZC55ID0gMDsgIC8vZm9yIG5vd1xuXHRcdFx0XHRcdC8vIFx0XHRkLnJhZGl1cyA9IG1haW5NaW5SYWQgKyAoMiAqIGVmU3VtU2NhbGUoZC5zdW1fZWlnZW5mYWN0b3IpKTtcblx0XHRcdFx0XHQvLyBcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjtcblx0XHRcdFx0XHQvLyBcdH0pO1xuXHRcdFx0XHRcdC8vIHZhciBwYXBlck1hcmtzID0gcGFwZXJJdGVtcy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdFx0Ly8gXHQuYXR0cihcImNsYXNzXCIsIFwicGFwZXJNYXJrXCIpXG5cdFx0XHRcdFx0Ly8gXHQuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcIkZvbnRBd2Vzb21lXCIpXG5cdFx0XHRcdFx0Ly8gXHQudGV4dChcIlxcdWYwZjZcIilcblx0XHRcdFx0XHQvLyBcdC8vIC5vbignbW91c2VvdmVyJywgZXhwYW5kKVxuXHRcdFx0XHRcdC8vIFx0Lm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0Ly8gXHRcdGNvbnRyYWN0KCk7XG5cdFx0XHRcdFx0Ly8gXHRcdHZhciBzZWwgPSBwYXBlckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkZCkge3JldHVybiBkZC55ZWFyPT09ZC55ZWFyfSk7XG5cdFx0XHRcdFx0Ly8gXHRcdGV4cGFuZChzZWwpO1xuXHRcdFx0XHRcdC8vIFx0XHR9KTtcblx0XHRcdFx0XHQvLyBcdC8vIC5vbignbW91c2VvdXQnLCBjb250cmFjdClcblxuXHRcdFx0XHRcdC8vIHZhciB5ZWFySXRlbXMgPSBtYWluQ2xpcFBhdGguYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoXCIueWVhckl0ZW1cIilcblx0XHRcdFx0XHQvLyBcdC5kYXRhKGRhdGFCeVllYXIpXG5cdFx0XHRcdFx0Ly8gXHQuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdFx0Ly8gXHQuYXR0cihcImNsYXNzXCIsIFwieWVhckl0ZW1cIilcblx0XHRcdFx0XHQvLyBcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHQvLyBcdFx0ZC54ID0gMDsgIC8vZm9yIG5vd1xuXHRcdFx0XHRcdC8vIFx0XHRkLnkgPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0Ly8gXHRcdGQucmFkaXVzID0gbWFpbk1pblJhZCArICgyICogZWZTdW1TY2FsZShkLnN1bV9laWdlbmZhY3RvcikpO1xuXHRcdFx0XHRcdC8vIFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiO1xuXHRcdFx0XHRcdC8vIFx0fSk7XG5cdFx0XHRcdFx0Ly8gdmFyIHllYXJNYXJrcyA9IHllYXJJdGVtcy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdFx0Ly8gXHQuYXR0cihcImNsYXNzXCIsIFwieWVhck1hcmtcIilcblx0XHRcdFx0XHQvLyBcdC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwiRm9udEF3ZXNvbWVcIilcblx0XHRcdFx0XHQvLyBcdC50ZXh0KFwiXFx1ZjBmNlwiKVxuXHRcdFx0XHRcdC8vIFx0Ly8gLm9uKCdtb3VzZW92ZXInLCBleHBhbmQpXG5cdFx0XHRcdFx0Ly8gXHQub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHQvLyBcdFx0Y29udHJhY3QoKTtcblx0XHRcdFx0XHQvLyBcdFx0dmFyIHNlbCA9IHBhcGVySXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGRkKSB7cmV0dXJuIGRkLnllYXI9PT1kLnllYXJ9KTtcblx0XHRcdFx0XHQvLyBcdFx0ZXhwYW5kKHNlbCk7XG5cdFx0XHRcdFx0Ly8gXHRcdH0pO1xuXHRcdFx0XHRcdC8vIFx0Ly8gLm9uKCdtb3VzZW91dCcsIGNvbnRyYWN0KVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XG5cdFx0XHR9XG5cblxuXHRcdFx0dmFyIHBhcGVyTGFiZWxzID0gcGFwZXJJdGVtcy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInBhcGVyTGFiZWxcIilcblx0XHRcdFx0LnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIilcblx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoLTE1LDApXCIpICAvLyBudWRnZSBsZWZ0XG5cdFx0XHRcdC8vIC50ZXh0KGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC50aXRsZTt9KTtcblx0XHRcdFx0Lmh0bWwoZnVuY3Rpb24oZCkge3JldHVybiAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIicgKyBkLnVybCArICdcIj4nICsgZC50aXRsZSArICc8L2E+Jzt9KTtcblxuXG5cblx0XHRcdC8vbWluaSBsYWJlbHNcblx0XHRcdC8vIG1pbmkuYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoXCIubWluaUxhYmVsc1wiKVxuXHRcdFx0Ly8gXHQuZGF0YShkYXRhKVxuXHRcdFx0Ly8gXHQuZW50ZXIoKS5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHQvLyBcdC50ZXh0KGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC5pZDt9KVxuXHRcdFx0Ly8gXHQuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkge3JldHVybiB4KGQuc3RhcnQpO30pXG5cdFx0XHQvLyBcdC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7cmV0dXJuIHkyKGQubGFuZSArIC41KTt9KVxuXHRcdFx0Ly8gXHQuYXR0cihcImR5XCIsIFwiLjVleFwiKTtcblxuXHRcdFx0Ly9icnVzaFxuXHRcdFx0dmFyIGJydXNoID0gZDMuc3ZnLmJydXNoKClcblx0XHRcdFx0XHRcdFx0XHQueCh4KVxuXHRcdFx0XHRcdFx0XHRcdC5vbihcImJydXNoXCIsIGRpc3BsYXkpO1xuXG5cdFx0XHRtaW5pLmFwcGVuZChcImdcIilcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInggYnJ1c2hcIilcblx0XHRcdFx0LmNhbGwoYnJ1c2gpXG5cdFx0XHRcdC5zZWxlY3RBbGwoXCJyZWN0XCIpXG5cdFx0XHRcdC5hdHRyKFwieVwiLCAxKVxuXHRcdFx0XHQuYXR0cihcImhlaWdodFwiLCBtaW5pSGVpZ2h0IC0gMSk7XG5cblx0XHRcdHZhciBleHRlbnRMaW5lcyA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAyIDsgaSsrKSB7XG5cdFx0XHRcdGV4dGVudExpbmVzLnB1c2goY2hhcnQuYXBwZW5kKFwibGluZVwiKS5hdHRyKFwiY2xhc3NcIiwgXCJleHRlbnRMaW5lXCIpKTtcblx0XHRcdH1cblx0XHRcdGZ1bmN0aW9uIHVwZGF0ZUV4dGVudExpbmVzKGxlZnQsIHJpZ2h0KSB7XG5cdFx0XHRcdGlmIChicnVzaC5lbXB0eSgpKSB7XG5cdFx0XHRcdFx0ZXh0ZW50TGluZXMuZm9yRWFjaChmdW5jdGlvbihzZWwpIHtzZWwuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTt9KVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGV4dGVudExpbmVzLmZvckVhY2goZnVuY3Rpb24oc2VsKSB7c2VsLnN0eWxlKFwiZGlzcGxheVwiLCBcIlwiKTt9KVxuXHRcdFx0XHRcdGV4dGVudExpbmVzWzBdLmF0dHIoXCJ4MVwiLCBtWzNdKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ5MVwiLCBtWzBdKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ4MlwiLCBsZWZ0ICsgbVszXSlcblx0XHRcdFx0XHRcdC5hdHRyKFwieTJcIiwgKG1haW5IZWlnaHQgKyBtWzBdKSk7XG5cdFx0XHRcdFx0ZXh0ZW50TGluZXNbMV0uYXR0cihcIngxXCIsIHcrbVszXSlcblx0XHRcdFx0XHRcdC5hdHRyKFwieTFcIiwgbVswXSlcblx0XHRcdFx0XHRcdC5hdHRyKFwieDJcIiwgcmlnaHQgKyBtWzNdKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ5MlwiLCAobWFpbkhlaWdodCArIG1bMF0pKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgc2Nyb2xsRHVyID0gMTUwO1xuXHRcdFx0ZnVuY3Rpb24gbW92ZUJydXNoKGRpcmVjdGlvbikge1xuXHRcdFx0XHQvLyBpZiAoYnJ1c2guZW1wdHkoKSB8fCBtaW5FeHRlbnQ8dGltZUJlZ2luIHx8IG1heEV4dGVudD50aW1lRW5kKSB7XG5cdFx0XHRcdGlmIChicnVzaC5lbXB0eSgpKSB7XG5cdFx0XHRcdFx0bWluRXh0ZW50ID0gKHRpbWVFbmQgKyB0aW1lQmVnaW4pIC8gMjtcblx0XHRcdFx0XHRtYXhFeHRlbnQgPSAoICh0aW1lRW5kICsgdGltZUJlZ2luKSAvIDIgKSArIDE7XG5cdFx0XHRcdFx0Y2hhbmdlRXh0ZW50KG1pbkV4dGVudCwgbWF4RXh0ZW50LCAwKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0c3dpdGNoIChkaXJlY3Rpb24pIHtcblx0XHRcdFx0XHRjYXNlICdsZWZ0Jzpcblx0XHRcdFx0XHRcdGNoYW5nZUV4dGVudChNYXRoLnJvdW5kKG1pbkV4dGVudC0xKSwgTWF0aC5yb3VuZChtYXhFeHRlbnQtMSksIHNjcm9sbER1ciwgXCJsaW5lYXJcIik7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgJ3JpZ2h0Jzpcblx0XHRcdFx0XHRcdGNoYW5nZUV4dGVudChNYXRoLnJvdW5kKG1pbkV4dGVudCsxKSwgTWF0aC5yb3VuZChtYXhFeHRlbnQrMSksIHNjcm9sbER1ciwgXCJsaW5lYXJcIik7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgJ3pvb21Jbic6XG5cdFx0XHRcdFx0XHRjaGFuZ2VFeHRlbnQoTWF0aC5yb3VuZChtaW5FeHRlbnQrMSksIE1hdGgucm91bmQobWF4RXh0ZW50LTEpLCBzY3JvbGxEdXIsIFwibGluZWFyXCIpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlICd6b29tT3V0Jzpcblx0XHRcdFx0XHRcdGNoYW5nZUV4dGVudChNYXRoLnJvdW5kKG1pbkV4dGVudC0xKSwgTWF0aC5yb3VuZChtYXhFeHRlbnQrMSksIHNjcm9sbER1ciwgXCJsaW5lYXJcIik7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHNjcm9sbEl0ZW1zID0gbWFpbkNsaXBQYXRoLmFwcGVuZChcImdcIilcblx0XHRcdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwic2Nyb2xsSXRlbXNcIilcblx0XHRcdFx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgKG1haW5IZWlnaHQqMC43KSArIFwiKVwiKTtcblx0XHRcdHNjcm9sbEl0ZW1zLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImxlZnRBcnJvd1wiKVxuXHRcdFx0XHQuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcIkZvbnRBd2Vzb21lXCIpXG5cdFx0XHRcdC50ZXh0KFwiXFx1ZjA2MFwiKVxuXHRcdFx0XHQuYXR0cihcInhcIiwgMClcblx0XHRcdFx0Ly8gLmF0dHIoXCJ5XCIsIG1haW5IZWlnaHQgLyAyKVxuXHRcdFx0XHQvLyAuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxLjVlbVwiKVxuXHRcdFx0XHQub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQvLyBjaGFuZ2VFeHRlbnQoTWF0aC5yb3VuZChtaW5FeHRlbnQtMSksIE1hdGgucm91bmQobWF4RXh0ZW50LTEpLCBzY3JvbGxEdXIsIFwibGluZWFyXCIpO1xuXHRcdFx0XHRcdG1vdmVCcnVzaCgnbGVmdCcpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0c2Nyb2xsSXRlbXMuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwicmlnaHRBcnJvd1wiKVxuXHRcdFx0XHQuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcIkZvbnRBd2Vzb21lXCIpXG5cdFx0XHRcdC50ZXh0KFwiXFx1ZjA2MVwiKVxuXHRcdFx0XHQuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG5cdFx0XHRcdC5hdHRyKFwieFwiLCB3KVxuXHRcdFx0XHQvLyAuYXR0cihcInlcIiwgbWFpbkhlaWdodCAvIDIpXG5cdFx0XHRcdC8vIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjEuNWVtXCIpXG5cdFx0XHRcdC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdC8vIGNoYW5nZUV4dGVudChNYXRoLnJvdW5kKG1pbkV4dGVudCsxKSwgTWF0aC5yb3VuZChtYXhFeHRlbnQrMSksIHNjcm9sbER1ciwgXCJsaW5lYXJcIik7XG5cdFx0XHRcdFx0bW92ZUJydXNoKCdyaWdodCcpO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHR2YXIgem9vbUl0ZW1zID0gc2Nyb2xsSXRlbXMuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJ6b29tSXRlbXNcIilcblx0XHRcdFx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArICh3LW1bMV0tMTApICsgXCIsMzApXCIpXG5cdFx0XHRcdFx0XHRcdFx0LnN0eWxlKFwib3BhY2l0eVwiLCAuMDEpXG5cdFx0XHRcdFx0XHRcdFx0Lm9uKFwibW91c2VvdmVyXCIsIHpvb21Nb3VzZU92ZXIpXG5cdFx0XHRcdFx0XHRcdFx0Lm9uKFwibW91c2VvdXRcIiwgem9vbU1vdXNlT3V0KTtcblx0XHRcdC8vIHNjcm9sbEl0ZW1zLmFwcGVuZChcInRleHRcIilcblx0XHRcdHpvb21JdGVtcy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJ6b29tSW5cIilcblx0XHRcdFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0XHQudGV4dChcIlxcdWYxOTZcIikgIC8vIGh0dHA6Ly9mb250YXdlc29tZS5pby9pY29uL3BsdXMtc3F1YXJlLW8vXG5cdFx0XHRcdC8vIC5hdHRyKFwieFwiLCAxMClcblx0XHRcdFx0Ly8gLmF0dHIoXCJ5XCIsIG1haW5IZWlnaHQgLyAyKVxuXHRcdFx0XHQvLyAuYXR0cihcInhcIiwgdy1tWzFdLTEwKVxuXHRcdFx0XHQvLyAuYXR0cihcInlcIiwgMzApXG5cdFx0XHRcdC8vIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjEuNWVtXCIpXG5cdFx0XHRcdC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdC8vIGNoYW5nZUV4dGVudChNYXRoLnJvdW5kKG1pbkV4dGVudCsxKSwgTWF0aC5yb3VuZChtYXhFeHRlbnQtMSksIHNjcm9sbER1ciwgXCJsaW5lYXJcIik7XG5cdFx0XHRcdFx0bW92ZUJydXNoKCd6b29tSW4nKVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0em9vbUl0ZW1zLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInpvb21PdXRcIilcblx0XHRcdFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0XHQudGV4dChcIlxcdWYxNDdcIikgIC8vIGh0dHA6Ly9mb250YXdlc29tZS5pby9pY29uL21pbnVzLXNxdWFyZS1vL1xuXHRcdFx0XHQvLyAuYXR0cihcInlcIiwgbWFpbkhlaWdodCAvIDIpXG5cdFx0XHRcdC8vIC5hdHRyKFwieFwiLCB3LW1bMV0tMTApXG5cdFx0XHRcdC8vIC5hdHRyKFwieVwiLCA1MClcblx0XHRcdFx0LmF0dHIoXCJ5XCIsIDIwKVxuXHRcdFx0XHQvLyAuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxLjVlbVwiKVxuXHRcdFx0XHQub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQvLyBjaGFuZ2VFeHRlbnQoTWF0aC5yb3VuZChtaW5FeHRlbnQtMSksIE1hdGgucm91bmQobWF4RXh0ZW50KzEpLCBzY3JvbGxEdXIsIFwibGluZWFyXCIpO1xuXHRcdFx0XHRcdG1vdmVCcnVzaCgnem9vbU91dCcpO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRmdW5jdGlvbiB6b29tTW91c2VPdmVyKCkge1xuXHRcdFx0XHQvLyAkKCAnLnpvb21JbiwgLnpvb21PdXQnICkuZmFkZVRvKDQwMCwgMSk7XG5cdFx0XHRcdCQoICcuem9vbUl0ZW1zJyApLnN0b3AoKS5mYWRlVG8oNDAwLCAxKTtcblx0XHRcdH1cblx0XHRcdGZ1bmN0aW9uIHpvb21Nb3VzZU91dCgpIHtcblx0XHRcdFx0Ly8gJCggJy56b29tSW4sIC56b29tT3V0JyApLmZhZGVUbyg0MDAsIC4wMSk7XG5cdFx0XHRcdCQoICcuem9vbUl0ZW1zJyApLnN0b3AoKS5mYWRlVG8oNDAwLCAuMDEpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJY29uIHRvIGNsZWFyIHRoZSBicnVzaC4gRmluaXNoIGluaXRpYWxpemluZyBpdCBpbiBkaXNwbGF5KClcblx0XHRcdC8vIHZhciBjbGVhckJydXNoSWNvbiA9IGQzLnNlbGVjdChcIi5icnVzaFwiKS5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHR2YXIgY2xlYXJCcnVzaEljb24gPSBtaW5pLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImNsZWFyQnJ1c2hJY29uXCIpXG5cdFx0XHRcdC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwiRm9udEF3ZXNvbWVcIilcblx0XHRcdFx0LnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMWVtXCIpXG5cdFx0XHRcdC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcblx0XHRcdFx0LmF0dHIoXCJ0aXRsZVwiLCBcIkNsZWFyIHRoZSB0aW1lbGluZSBpbiBvcmRlciB0byBkcmF3IGEgbmV3IHJlZ2lvblwiKVxuXHRcdFx0XHQudGV4dChcIlxcdWYwMGRcIik7XG5cblx0XHRcdGNoYXJ0Lm9uKFwid2hlZWwuem9vbVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoZDMuZXZlbnQud2hlZWxEZWx0YVk+MCkge1xuXHRcdFx0XHRcdFx0bW92ZUJydXNoKCd6b29tSW4nKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGQzLmV2ZW50LndoZWVsRGVsdGFZPDApIHtcblx0XHRcdFx0XHRcdG1vdmVCcnVzaCgnem9vbU91dCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZDMuZXZlbnQud2hlZWxEZWx0YVg+MCkge1xuXHRcdFx0XHRcdFx0bW92ZUJydXNoKCdsZWZ0Jyk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChkMy5ldmVudC53aGVlbERlbHRhWDwwKSB7XG5cdFx0XHRcdFx0XHRtb3ZlQnJ1c2goJ3JpZ2h0Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0Ly8gaW5pdGlhbGl6ZSBicnVzaFxuXHRcdFx0dmFyIG1pZHBvaW50WWVhciA9ICggdGltZUVuZCArIHRpbWVCZWdpbiApIC8gMixcblx0XHRcdFx0YnJ1c2hJbml0ID0gW21pZHBvaW50WWVhciwgbWlkcG9pbnRZZWFyXTtcblx0XHRcblx0XHRcdC8vIGJydXNoLmV4dGVudChicnVzaEluaXQpO1xuXHRcdFx0bWluaS5zZWxlY3QoXCIuYnJ1c2hcIikuY2FsbChicnVzaC5leHRlbnQoYnJ1c2hJbml0KSk7XG5cblx0XHRcdGRpc3BsYXkoKTtcblx0XHRcdFxuXHRcdFx0JCggZG9jdW1lbnQgKS50cmlnZ2VyKCBcInRpbWVsaW5lVmlzOmluaXRDb21wbGV0ZVwiICk7XG5cblxuXHRcdFx0Ly8gLy8gSSdtIG5vdCBzdXJlIHRoZXJlJ3MgYSB3YXkgdG8gdXNlIGQzIHRyYW5zaXRpb25zIHRvIGNvbnRyb2wgdGhlIGJydXNoLCBidXQgaGVyZSdzIGEgaGFja3kgd2F5IG9mIGRvaW5nIGl0IG1hbnVhbGx5LlxuXHRcdFx0Ly8gdmFyIGRseSA9IDMwO1xuXHRcdFx0Ly8gZnVuY3Rpb24gYnJ1c2hUcmFuc2l0aW9uKGRseSkge1xuXHRcdFx0Ly8gXHRjdXJyRXh0ZW50ID0gW2JydXNoLmV4dGVudCgpWzBdLCBicnVzaC5leHRlbnQoKVsxXV07XG5cdFx0XHQvLyBcdGJydXNoKGQzLnNlbGVjdChcIi5icnVzaFwiKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oZGx5KS5jYWxsKGRpc3BsYXkpKTtcblx0XHRcdC8vIFx0Ly8gYnJ1c2guZXZlbnQoZDMuc2VsZWN0KFwiLmJydXNoXCIpLnRyYW5zaXRpb24oKS5kZWxheShkbHkpLmR1cmF0aW9uKDApKTtcblx0XHRcdC8vIH1cblx0XHRcdC8vIC8vIGJydXNoLmV4dGVudChbMTk3MCwyMDAwXSk7XG5cdFx0XHQvLyB2YXIgbWluRXh0ZW50ID0gYnJ1c2guZXh0ZW50KClbMF0sXG5cdFx0XHQvLyBcdG1heEV4dGVudCA9IGJydXNoLmV4dGVudCgpWzFdO1xuXHRcdFx0Ly8gdmFyIGRlc3RpbmF0aW9uRXh0ZW50ID0gMTk5ODtcblx0XHRcdC8vIHZhciBpID0gbWF4RXh0ZW50O1xuXHRcdFx0Ly8gdmFyIHJlZnJlc2hJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBcdCAgIFx0aSA9IGkgKyAwLjI7XG5cdFx0XHQvLyBcdFx0YnJ1c2guZXh0ZW50KFttaW5FeHRlbnQsIGldKTtcblx0XHRcdC8vIFx0XHRicnVzaFRyYW5zaXRpb24oZGx5KTtcblx0XHRcdC8vIFx0XHRpZiAoaSA+PSBkZXN0aW5hdGlvbkV4dGVudCkge1xuXHRcdFx0Ly8gXHRcdFx0Y2xlYXJJbnRlcnZhbChyZWZyZXNoSW50ZXJ2YWxJZCk7XG5cdFx0XHQvLyBcdFx0fVxuXHRcdFx0Ly8gXHR9LCBkbHkpO1xuXG5cdFx0XHQvLyAvLyBhdHRlbXB0IHRvIHVzZSB0d2VlbiBmdW5jdGlvbiB0byBkbyBpdC4gbm90IHJlYWxseSB3b3JraW5nXG5cdFx0XHQvLyBicnVzaC5leHRlbnQoWzE5NzAsIDIwMDVdKTtcblx0XHRcdC8vIGJydXNoKGQzLnNlbGVjdChcIi5icnVzaFwiKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oNTAwMClcblx0XHRcdC8vIFx0XHQudHdlZW4oXCJzaWRlLWVmZmVjdHNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbih0LCB0dCwgdHR0KSB7IGNvbnNvbGUubG9nKGJydXNoLmV4dGVudCgpWzBdKTtcblx0XHRcdC8vIFx0XHRcdGJydXNoLmV2ZW50KGQzLnNlbGVjdChcIi5icnVzaFwiKS50cmFuc2l0aW9uKCkuZGVsYXkodCkuZHVyYXRpb24oMCkpO1xuXHRcdFx0Ly8gXHRcdH07fSkpO1xuXHRcdFx0Ly8gYnJ1c2goZDMuc2VsZWN0KFwiLmJydXNoXCIpLnRyYW5zaXRpb24oKS5kdXJhdGlvbigxMDAwKSk7XG5cdFx0XHQvLyBicnVzaC5ldmVudChkMy5zZWxlY3QoXCIuYnJ1c2hcIikudHJhbnNpdGlvbigpLmRlbGF5KDEwMDApLmR1cmF0aW9uKDApKTtcblxuXG5cdFx0XHRmdW5jdGlvbiBjaGFuZ2VFeHRlbnQoeWVhcjEsIHllYXIyLCBkdXJhdGlvbiwgZWFzZSwgZGVsYXkpIHtcblx0XHRcdFx0aWYgKGR1cmF0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRkdXJhdGlvbiA9IDEwMDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVhc2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGVhc2UgPSBcImN1YmljLWluLW91dFwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkZWxheSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0ZGVsYXkgPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh5ZWFyMSA8IHRpbWVCZWdpbikge1xuXHRcdFx0XHRcdHllYXIxID0gdGltZUJlZ2luO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh5ZWFyMiA+IHRpbWVFbmQpIHtcblx0XHRcdFx0XHR5ZWFyMiA9IHRpbWVFbmQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJ1c2guZXZlbnQobWluaS5zZWxlY3QoXCIuYnJ1c2hcIikudHJhbnNpdGlvbigpLmRlbGF5KGRlbGF5KS5kdXJhdGlvbihkdXJhdGlvbikuZWFzZShlYXNlKS5jYWxsKGJydXNoLmV4dGVudChbeWVhcjEsIHllYXIyXSkpKTtcblxuXHRcdFx0fVxuXHRcdFx0Ly9cblx0XHRcdC8vIFRoaXMgd29ya3MhIChhZnRlciBtb2RpZnlpbmcgdGhlIGRpc3BsYXkoKSBmdW5jdGlvbi4gc2VlIHRoZSBub3RlIGF0IHRoZSB0b3Agb2YgZGlzcGxheSgpKVxuXHRcdFx0Ly8gYnJ1c2guZXZlbnQobWluaS5zZWxlY3QoXCIuYnJ1c2hcIikudHJhbnNpdGlvbigpLmRlbGF5KDEwMDApLmR1cmF0aW9uKDEwMDApLmNhbGwoYnJ1c2guZXh0ZW50KFsxOTcwLCAyMDAwXSkpXG5cdFx0XHQvLyBcdFx0LmVhY2goXCJlbmRcIiwgZnVuY3Rpb24oKSB7Y29uc29sZS5sb2coXCJpbml0aWFsaXplZFwiKTt9KSk7XG5cdFx0XHQvLyB2YXIgaW5pdER1cmF0aW9uID0gMTAwMCxcblx0XHRcdC8vIFx0aW5pdERlbGF5ID0gMTAwMDtcblx0XHRcdC8vIGNoYW5nZUV4dGVudCgxOTcwLCAyMDAwLCBpbml0RHVyYXRpb24sIFwiY3ViaWMtaW4tb3V0XCIsIGluaXREZWxheSk7XG5cdFx0XHQvLyBkMy50cmFuc2l0aW9uKFwiaW5pdERlbW9UcmFuc2l0aW9uXCIpLmRlbGF5KGluaXREZWxheSArIGluaXREdXJhdGlvbilcblx0XHRcdC8vIFx0LmVhY2goXCJlbmRcIiwgZGVtb0V4cGFuZCk7XG5cdFx0XHQvLyBkZW1vSW5pdCgpO1xuXG5cdFx0XHQvLyBub3QgdXNpbmcgdGhpcyBjdXJyZW50bHlcblx0XHRcdGZ1bmN0aW9uIGV4cGFuZEFsbCgpIHtcblx0XHRcdFx0ZXhwYW5kKHBhcGVySXRlbXMpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIG1heEVGID0gZDMubWF4KGRhdGFfdG90YWwsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC5laWdlbmZhY3Rvcjt9KTtcblxuXHRcdFx0ZnVuY3Rpb24gY2xlYXJCcnVzaCgpIHtcblx0XHRcdFx0dmFyIG1pZCA9IChicnVzaC5leHRlbnQoKVsxXSArIGJydXNoLmV4dGVudCgpWzBdKSAvIDI7XG5cdFx0XHRcdGNoYW5nZUV4dGVudChtaWQsIG1pZCwgMCk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGZ1bmN0aW9uIGRpc3BsYXkoKSB7XG5cdFx0XHRcdC8vIG5vdGU6IGNhbGN1bGF0aW5nIHRoZSBicnVzaCBleHRlbnQgdXNpbmcgYnJ1c2guZXh0ZW50KCkgZG9lc24ndCByZWFsbHkgd29yayBoZXJlICh3aXRoIHRyYW5zaXRpb24gdGlja3MpXG5cdFx0XHRcdC8vIGJlY2F1c2UgaXQgZ29lcyB0aGUgZmluYWwgZXh0ZW50IHZhbHVlcyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSB0cmFuc2l0aW9uLlxuXHRcdFx0XHQvLyBTbyBpbnN0ZWFkLCBnZXQgdGhlIG1lYXN1cmVtZW50cyBvZiB0aGUgYnJ1c2ggZWxlbWVudCBhbmQgY2FsY3VsYXRlIHRoZSBleHRlbnQgdXNpbmcgdGhlIHNjYWxlICh4LmludmVydCgpKVxuXHRcdFx0XHR2YXIgZXh0ZW50U2VsZWN0ID0gbWluaS5zZWxlY3QoXCIuYnJ1c2hcIikuc2VsZWN0KFwiLmV4dGVudFwiKTtcblx0XHRcdFx0dmFyIG1pbkV4dGVudFNjcmVlbiA9ICtleHRlbnRTZWxlY3QuYXR0cihcInhcIik7XG5cdFx0XHRcdHZhciBtYXhFeHRlbnRTY3JlZW4gPSBtaW5FeHRlbnRTY3JlZW4gKyAoK2V4dGVudFNlbGVjdC5hdHRyKFwid2lkdGhcIikpO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyh4LmludmVydChtYXhFeHRlbnRTY3JlZW4pKTtcblx0XHRcdFx0Ly8gdmFyIG1pbkV4dGVudCA9IGJydXNoLmV4dGVudCgpWzBdLFxuXHRcdFx0XHQvLyBcdG1heEV4dGVudCA9IGJydXNoLmV4dGVudCgpWzFdLFxuXHRcdFx0XHRtaW5FeHRlbnQgPSB4LmludmVydChtaW5FeHRlbnRTY3JlZW4pO1xuXHRcdFx0XHRtYXhFeHRlbnQgPSB4LmludmVydChtYXhFeHRlbnRTY3JlZW4pO1xuXG5cblxuXHRcdFx0XHQvLyBoaWRlIGFycm93cyBpZiB5b3UgY2FuJ3QgZ28gYW55IGZ1cnRoZXJcblx0XHRcdFx0aWYgKG1pbkV4dGVudCA8PSB0aW1lQmVnaW4pIHtcblx0XHRcdFx0XHRkMy5zZWxlY3QoXCIubGVmdEFycm93XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZDMuc2VsZWN0KFwiLmxlZnRBcnJvd1wiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG1heEV4dGVudCA+PSB0aW1lRW5kKSB7XG5cdFx0XHRcdFx0ZDMuc2VsZWN0KFwiLnJpZ2h0QXJyb3dcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkMy5zZWxlY3QoXCIucmlnaHRBcnJvd1wiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gaGlkZSB0aGUgem9vbUluIGJ1dHRvbiBpZiB3ZSdyZSB6b29tZWQgaW4gdG9vIGZhclxuXHRcdFx0XHRpZiAobWF4RXh0ZW50IC0gbWluRXh0ZW50IDw9IDIpIHtcblx0XHRcdFx0XHQvLyBkMy5zZWxlY3QoXCIuem9vbUluXCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdFx0ZDMuc2VsZWN0KFwiLnpvb21JblwiKS5jbGFzc2VkKFwiaGlkZGVuXCIsIHRydWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIGQzLnNlbGVjdChcIi56b29tSW5cIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwiXCIpO1xuXHRcdFx0XHRcdGQzLnNlbGVjdChcIi56b29tSW5cIikuY2xhc3NlZChcImhpZGRlblwiLCBmYWxzZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYnJ1c2guZW1wdHkoKSkge1xuXHRcdFx0XHRcdGNsZWFyQnJ1c2hJY29uLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdFx0ZDMuc2VsZWN0KFwiLmxlZnRBcnJvd1wiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdFx0XHRcdGQzLnNlbGVjdChcIi5yaWdodEFycm93XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2xlYXJCcnVzaEljb24uc3R5bGUoXCJkaXNwbGF5XCIsIFwiXCIpXG5cdFx0XHRcdFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIDApXG5cdFx0XHRcdFx0XHQvLyAuc3R5bGUoXCJ6LWluZGV4XCIsIC05OSlcblx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGNvbnN0cnVjdFRyYW5zbGF0ZShtYXhFeHRlbnRTY3JlZW4tMiwgMTUpKVxuXHRcdFx0XHRcdFx0LnRyYW5zaXRpb24oKS5kdXJhdGlvbigzMDApXG5cdFx0XHRcdFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIC40KTtcblx0XHRcdFx0XHRjbGVhckJydXNoSWNvbi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0Y2xlYXJCcnVzaCgpO1xuXHRcdFx0XHRcdFx0Y29udHJhY3QoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cblxuXHRcdFx0XHQvLyBIaWRlIG1haW4gaXRlbXMgaWYgdGhlIGJydXNoIGlzIGVtcHR5XG5cdFx0XHRcdGlmIChicnVzaC5lbXB0eSgpKSB7XG5cdFx0XHRcdFx0Ly8geWVhckl0ZW1zLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdFx0Ly8gY2hhbmdlRXh0ZW50KHRpbWVCZWdpbiwgdGltZUVuZCwgMCk7XG5cdFx0XHRcdFx0Ly9cblx0XHRcdFx0XHQvLyBzaG93IGFsbCBtYWluIGl0ZW1zLCBidXQga2VlcCB0aGUgYnJ1c2ggaGlkZGVuXG5cdFx0XHRcdFx0dXBkYXRlTWFpbih0aW1lQmVnaW4sdGltZUVuZCk7XG5cdFx0XHRcdFx0Ly8gdGhpcyB3aWxsIHJlbW92ZSB0aGUgZXh0ZW50IGxpbmVzOlxuXHRcdFx0XHRcdHVwZGF0ZUV4dGVudExpbmVzKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gZDMuc2VsZWN0KFwiLmJydXNoXCIpLmF0dHIoXCJkaXNwbGF5XCIsIFwiXCIpO1xuXHRcdFx0XHRcdHVwZGF0ZU1haW4obWluRXh0ZW50LCBtYXhFeHRlbnQpO1xuXHRcdFx0XHRcdHVwZGF0ZUV4dGVudExpbmVzKG1pbkV4dGVudFNjcmVlbiwgbWF4RXh0ZW50U2NyZWVuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiB1cGRhdGVNYWluKG1pbkV4dGVudCwgbWF4RXh0ZW50KSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRzd2l0Y2ggKG1hcmtUeXBlKSB7XG5cdFx0XHRcdFx0Y2FzZSAnY2lyY2xlJzpcblx0XHRcdFx0XHRcdHZhciB2aXNJdGVtcyA9IHllYXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXIgPCBtYXhFeHRlbnQgJiYgZC55ZWFyID4gbWluRXh0ZW50O30pXG5cdFx0XHRcdFx0XHR2YXIgbm90VmlzSXRlbXMgPSB5ZWFySXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyPj0gbWF4RXh0ZW50IHx8IGQueWVhciA8PSBtaW5FeHRlbnQ7fSk7XG5cdFx0XHRcdFx0XHR2aXNJdGVtcy5zdHlsZShcImRpc3BsYXlcIiwgXCJcIik7XG5cdFx0XHRcdFx0XHRub3RWaXNJdGVtcy5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coYnJ1c2guZXh0ZW50KCkpO1xuXG5cdFx0XHRcdFx0XHQvLyBtaW5pLnNlbGVjdChcIi5icnVzaFwiKVxuXHRcdFx0XHRcdFx0Ly8gXHQuY2FsbChicnVzaC5leHRlbnQoW21pbkV4dGVudCwgbWF4RXh0ZW50XSkpO1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cobWF4RXh0ZW50LW1pbkV4dGVudCk7XG5cblx0XHRcdFx0XHRcdHgxLmRvbWFpbihbbWluRXh0ZW50LCBtYXhFeHRlbnRdKTtcblxuXHRcdFx0XHRcdFx0Ly8gdXBkYXRlIHN0eWxlcyBvZiBtaW5pIGl0ZW1zIHRoYXQgYXJlIHZpc2libGUgaW4gdGhlIG1haW4gZGlzcGxheS5cblx0XHRcdFx0XHRcdC8vIHJlc2V0IGFsbCB0byBub3JtYWwsIHRoZW4gc3R5bGUganVzdCB0aGUgdmlzaWJsZSBvbmVzXG5cdFx0XHRcdFx0XHQvLyBtaW5pSXRlbXMuc3R5bGUoc3R5bGVzQmFzZSk7XG5cdFx0XHRcdFx0XHRtaW5pSXRlbXMuc3R5bGUoc3R5bGVzVmlzaWJsZSk7XG5cdFx0XHRcdFx0XHRtaW5pSXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cobWluRXh0ZW50KTtcblx0XHRcdFx0XHRcdFx0dmFyIG1hdGNoID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdHZpc0l0ZW1zLmZvckVhY2goZnVuY3Rpb24oZGQpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoZC5pZD09ZGQuZmlyc3RUaXRsZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWF0Y2ggPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdFx0XHRcdFx0fSkuc3R5bGUoc3R5bGVzVmlzaWJsZSk7XG5cblx0XHRcdFx0XHRcdC8vdXBkYXRlIG1haW4gaXRlbSBtYXJrc1xuXHRcdFx0XHRcdFx0dmlzSXRlbXMuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdGQueCA9IHgxKGQueWVhcik7XG5cdFx0XHRcdFx0XHRcdGQueSA9IHkxKGQubGFuZSkgKyBtYWluTWluUmFkO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdHllYXJNYXJrcy5hdHRyKFwiclwiLCBmdW5jdGlvbihkKSB7cmV0dXJuIGQucmFkaXVzO30pO1xuXG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgJ2ljb24nOlxuXHRcdFx0XHRcdFx0dmFyIHZpc0l0ZW1zID0geWVhckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhciA8IG1heEV4dGVudCAmJiBkLnllYXIgPiBtaW5FeHRlbnQ7fSlcblx0XHRcdFx0XHRcdHZhciBub3RWaXNJdGVtcyA9IHllYXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXI+PSBtYXhFeHRlbnQgfHwgZC55ZWFyIDw9IG1pbkV4dGVudDt9KTtcblx0XHRcdFx0XHRcdHZpc0l0ZW1zLnN0eWxlKFwiZGlzcGxheVwiLCBcIlwiKTtcblx0XHRcdFx0XHRcdG5vdFZpc0l0ZW1zLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhicnVzaC5leHRlbnQoKSk7XG5cblx0XHRcdFx0XHRcdC8vIG1pbmkuc2VsZWN0KFwiLmJydXNoXCIpXG5cdFx0XHRcdFx0XHQvLyBcdC5jYWxsKGJydXNoLmV4dGVudChbbWluRXh0ZW50LCBtYXhFeHRlbnRdKSk7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhtYXhFeHRlbnQtbWluRXh0ZW50KTtcblx0XHRcdFx0XHRcdC8vIHVwZGF0ZUV4dGVudExpbmVzKG1pbkV4dGVudFNjcmVlbiwgbWF4RXh0ZW50U2NyZWVuKTtcblxuXHRcdFx0XHRcdFx0eDEuZG9tYWluKFttaW5FeHRlbnQsIG1heEV4dGVudF0pO1xuXG5cdFx0XHRcdFx0XHQvLyB1cGRhdGUgc3R5bGVzIG9mIG1pbmkgaXRlbXMgdGhhdCBhcmUgdmlzaWJsZSBpbiB0aGUgbWFpbiBkaXNwbGF5LlxuXHRcdFx0XHRcdFx0Ly8gcmVzZXQgYWxsIHRvIG5vcm1hbCwgdGhlbiBzdHlsZSBqdXN0IHRoZSB2aXNpYmxlIG9uZXNcblx0XHRcdFx0XHRcdG1pbmlJdGVtcy5zdHlsZShzdHlsZXNCYXNlKTtcblx0XHRcdFx0XHRcdG1pbmlJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgbWF0Y2ggPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0dmlzSXRlbXMuZm9yRWFjaChmdW5jdGlvbihkZCkge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChkLmlkPT1kZC5maXJzdFRpdGxlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtYXRjaCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0XHRcdFx0XHR9KS5zdHlsZShzdHlsZXNWaXNpYmxlKTtcblxuXHRcdFx0XHRcdFx0Ly91cGRhdGUgbWFpbiBpdGVtIG1hcmtzXG5cdFx0XHRcdFx0XHR2aXNJdGVtcy5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0Ly8gZC54ID0geDEoZC55ZWFyKSAtIDEwO1xuXHRcdFx0XHRcdFx0XHRkLnggPSB4MShkLnllYXIpO1xuXHRcdFx0XHRcdFx0XHRkLnkgPSB5MShkLmxhbmUpICsgMjA7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0cGFwZXJNYXJrcy5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQuaWR4LzIgKyBcIixcIiArIGQuaWR4KjMgKyBcIilcIjtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIHJldHVybiBcInRyYW5zbGF0ZShcIiArIFwiMFwiICsgXCIsXCIgKyBkLmlkeCozICsgXCIpXCI7XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0LnN0eWxlKFwiZmlsbFwiLCBcImJsYWNrXCIpXG5cdFx0XHRcdFx0XHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcblx0XHRcdFx0XHRcdFx0LnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMS41ZW1cIik7XG5cdFx0XHRcdFx0XHRcdC8vIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBmdW5jdGlvbihkKSB7cmV0dXJuIChkLnJhZGl1cy8xMCkgKyBcImVtXCI7fSk7XG5cblx0XHRcdFx0XHRcdHBhcGVySXRlbXMuZWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBpdGVtID0gZDMuc2VsZWN0KHRoaXMpO1xuXHRcdFx0XHRcdFx0XHR2YXIgbSA9IGl0ZW0uc2VsZWN0KFwiLnBhcGVyTWFya1wiKTtcblx0XHRcdFx0XHRcdFx0dmFyIGJib3ggPSBtLm5vZGUoKS5nZXRCQm94KCk7XG5cdFx0XHRcdFx0XHRcdGl0ZW0uc2VsZWN0KFwicmVjdFwiKVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKFwieFwiLCBiYm94LngpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoXCJ5XCIsIGJib3gueSlcblx0XHRcdFx0XHRcdFx0XHQuYXR0cihcIndpZHRoXCIsIGJib3gud2lkdGgpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoXCJoZWlnaHRcIiwgYmJveC5oZWlnaHQpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgbS5hdHRyKFwidHJhbnNmb3JtXCIpKVxuXHRcdFx0XHRcdFx0XHRcdC5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcblx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cobS5hdHRyKFwidHJhbnNmb3JtXCIpKTtcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXG5cblx0XHRcdFx0Ly91cGRhdGUgdGhlIGl0ZW0gbGFiZWxzXG5cdFx0XHRcdC8vIHZhciByb3RhdGUgPSAtMjA7XG5cdFx0XHRcdGZ1bmN0aW9uIF9yb3RhdGUocm90YXRpb24pIHtcblx0XHRcdFx0XHRsYWJlbHMuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IFxuXHRcdFx0XHRcdFx0cmV0dXJuIFwicm90YXRlKFwiICsgcm90YXRpb24gKyBcIixcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7IFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGNvbnN0cmFpbnQgcmVsYXhhdGlvblxuXHRcdFx0XHQvLyBodHRwOi8vYmwub2Nrcy5vcmcvc3ludGFnbWF0aWMvNDA1MzA5NlxuXHRcdFx0XHR2YXIgYWxwaGEgPSAxO1xuXHRcdFx0XHR2YXIgc3BhY2luZyA9IDE1O1xuXHRcdFx0XHRmdW5jdGlvbiByZWxheChsYWJlbHMpIHtcblx0XHRcdFx0XHQvLyBNb3ZlIHRleHQgaWYgb3ZlcmxhcHBpbmcgKHJlY3Vyc2l2ZWx5KVxuXHRcdFx0XHRcdHZhciBhZ2FpbiA9IGZhbHNlO1xuXHRcdFx0XHRcdGxhYmVscy5lYWNoKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwieFwiKSk7XG5cdFx0XHRcdFx0XHR2YXIgYSA9IHRoaXM7XG5cdFx0XHRcdFx0XHR2YXIgZGEgPSBkMy5zZWxlY3QoYSk7XG5cdFx0XHRcdFx0XHR2YXIgYXggPSBkYS5hdHRyKFwieFwiKTtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGF4KTtcblx0XHRcdFx0XHRcdGxhYmVscy5lYWNoKGZ1bmN0aW9uKGRkKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBiID0gdGhpcztcblx0XHRcdFx0XHRcdFx0Ly8gaWYgKGEgPT0gYikge1xuXHRcdFx0XHRcdFx0XHQvLyBcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRcdFx0XHR2YXIgZGIgPSBkMy5zZWxlY3QoYik7XG5cdFx0XHRcdFx0XHRcdHZhciBieCA9IGRiLmF0dHIoXCJ4XCIpO1xuXHRcdFx0XHRcdFx0XHR2YXIgZGVsdGFYID0gYXggLSBieDtcblx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGVsdGFYKTtcblx0XHRcdFx0XHRcdFx0Ly8gaWYgKE1hdGguYWJzKGRlbHRhWCkgPiBzcGFjaW5nKSB7XG5cdFx0XHRcdFx0XHRcdC8vIFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdFx0XHRcdGlmICggKGEgIT0gYikgJiYgTWF0aC5hYnMoZGVsdGFYKSA8IHNwYWNpbmcpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkZWx0YVgpO1xuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbGxpc2lvbiBkZXRlY3RlZFxuXHRcdFx0XHRcdFx0XHRcdGFnYWluID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgc2lnbiA9IGRlbHRhWCA+IDAgPyAxIDogLTE7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coYSk7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGIuYXR0cihcInhcIikpO1xuXHRcdFx0XHRcdFx0XHRcdGQueCA9ICtheCArIChzaWduKmFscGhhKTtcblx0XHRcdFx0XHRcdFx0XHRkZC54ID0gK2J4IC0gKHNpZ24qYWxwaGEpO1xuXHRcdFx0XHRcdFx0XHRcdGRhLmF0dHIoXCJ4XCIsIGQueCk7XG5cdFx0XHRcdFx0XHRcdFx0ZGIuYXR0cihcInhcIiwgZGQueCk7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gZDMuc2VsZWN0KHRoaXMpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoNTAwLCAwKVwiKTtcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkYi5hdHRyKFwieFwiKSk7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gZC54ICs9IHNpZ24qYWxwaGE7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gYS54ICs9IDE7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGlmIChhZ2Fpbikge1xuXHRcdFx0XHRcdFx0Ly8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdC8vIFx0cmVsYXgobGFiZWxzKTtcblx0XHRcdFx0XHRcdC8vIH0sIDIpO1xuXHRcdFx0XHRcdFx0cmVsYXgobGFiZWxzKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0X3JvdGF0ZSgtMjApO1xuXHRcdFx0XHRcdFx0Ly9cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBsYWJlbHMgPSBpdGVtUmVjdHMuc2VsZWN0QWxsKFwiLnllYXJJdGVtTGFiZWxcIilcblx0XHRcdFx0Ly8gXHQuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkge2QueCA9IHgxKE1hdGgubWF4KGQua2V5LCBtaW5FeHRlbnQpKTsgcmV0dXJuIGQueDt9KVxuXHRcdFx0XHQvLyBcdC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7ZC55ID0gZC5jeTsgcmV0dXJuIGQueTt9KVxuXHRcdFx0XHQvLyBcdC5kYXRhKHZpc0l0ZW1zKTtcblx0XHRcdFx0Ly8gXHQvLyAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkge3JldHVybiB4MShNYXRoLm1heChkLnN0YXJ0LCBtaW5FeHRlbnQpICsgMik7fSk7XG5cdFx0XHRcdC8vIFx0Ly8gLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gXCJyb3RhdGUoXCIgKyByb3RhdGUgKyBcIixcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7IH0pO1xuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBsYWJlbHMuZW50ZXIoKS5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdC8vIFx0LnRleHQoZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXIgKyBcIjogXCIgKyBkLnZhbHVlcy5sZW5ndGggKyBcIiBwYXBlcnNcIjt9KVxuXHRcdFx0XHQvLyBcdC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7ZC54ID0geDEoTWF0aC5tYXgoZC5rZXksIG1pbkV4dGVudCkpOyByZXR1cm4gZC54O30pXG5cdFx0XHRcdC8vIFx0Ly8gLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHtkLnkgPSB5MShkLmxhbmUgKyAuNSk7IHJldHVybiBkLnk7fSlcblx0XHRcdFx0Ly8gXHQvLyAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkge2QueSA9IHkxKGQubGFuZSkrcmFkOyByZXR1cm4gZC55O30pXG5cdFx0XHRcdC8vIFx0LmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHtkLnkgPSBkLmN5OyByZXR1cm4gZC55O30pXG5cdFx0XHRcdC8vIFx0LmF0dHIoXCJjbGFzc1wiLCBcInllYXJJdGVtTGFiZWxcIilcblx0XHRcdFx0Ly8gXHQuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG5cdFx0XHRcdC8vIFx0Ly8gLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gXCJyb3RhdGUoXCIgKyByb3RhdGUgKyBcIixcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7IH0pXG5cdFx0XHRcdC8vIFx0Lm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdC8vIFx0XHRcdGNvbnNvbGUubG9nKGQueCk7XG5cdFx0XHRcdC8vIFx0XHR9KTtcblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly8gbGFiZWxzLmV4aXQoKS5yZW1vdmUoKTtcblxuXHRcdFx0XHQvL3VwZGF0ZSBheGlzXG5cdFx0XHRcdHhBeGlzTWFpbk9iai5jYWxsKHhBeGlzTWFpbik7XG5cblx0XHRcdFx0Ly8gLy8gb25seSB1c2Ugb25lIG9mIHRoZSBmb2xsb3dpbmcgKG9yIG5vbmUpXG5cdFx0XHRcdC8vIF9yb3RhdGUoLTIwKTtcblx0XHRcdFx0Ly8gcmVsYXgobGFiZWxzKTtcblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJCgnLm1haW5DbGlwUGF0aCcpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJCgnLmNoYXJ0JylbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xuXHRcdFx0XHRsYWJlbHNDb2xsaXNpb25EZXRlY3QoKTtcblxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR2YXIgYWZ0ZXJUcmFuc2l0aW9uWCA9IGZ1bmN0aW9uKGQsIGkpIHtcblx0XHRcdFx0Ly8gcmV0dXJuIHgxKCtkLnllYXIpICsgKChpKmkpKjMpO1xuXHRcdFx0XHRyZXR1cm4gKGkqaSkqMztcblx0XHRcdH07XG5cdFx0XHR2YXIgYWZ0ZXJUcmFuc2l0aW9uWSA9IGZ1bmN0aW9uKGQsIGkpIHtcblx0XHRcdFx0Ly8gcmV0dXJuIHkxKGQubGFuZSkgKyAyLjIqcmFkKmkrNSpyYWQ7XG5cdFx0XHRcdHJldHVybiAyLjEqbWFpbk1pblJhZCppKzMqbWFpbk1pblJhZDtcblx0XHRcdH07XG5cdFx0XHQvLyBmdW5jdGlvbiBleHBhbmQoeWVhckRhdGEpIHtcblx0XHRcdGZ1bmN0aW9uIGV4cGFuZChzZWwsIHllYXJJdGVtKSB7XG5cdFx0XHRcdHZhciB0aGlzWWVhciA9IHNlbC5hdHRyKFwiZGF0YS15ZWFyXCIpO1xuXHRcdFx0XHR2YXIgdGhpc1llYXJJdGVtID0geWVhckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhcj09dGhpc1llYXJ9KTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpc1llYXJJdGVtKTtcblx0XHRcdFx0Ly8gY29udHJhY3QoKTtcblx0XHRcdFx0dmFyIGR1ciA9IDUwMDtcblx0XHRcdFx0Ly8gdmFyIHNlbCA9IHBhcGVySXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyPT09eWVhckRhdGEueWVhcn0pO1xuXHRcdFx0XHR2YXIgdHJhbnNpdGlvblN0YXJ0U3R5bGUgPSB7J3BvaW50ZXItZXZlbnRzJzogJ25vbmUnLCAnY3Vyc29yJzogJ2RlZmF1bHQnfSxcblx0XHRcdFx0XHR0cmFuc2l0aW9uRW5kU3R5bGUgPSB7J3BvaW50ZXItZXZlbnRzJzogJ2F1dG8nLCAnY3Vyc29yJzogJ3BvaW50ZXInfTtcblx0XHRcdFx0Ly8gc2VsLnN0eWxlKFwicG9pbnRlci1ldmVudHNcIiwgXCJub25lXCIpXG5cdFx0XHRcdHZhciBsaW5lID0gZDMuc3ZnLmxpbmUoKS54KGZ1bmN0aW9uKGQpIHtyZXR1cm4gZFswXX0pLnkoZnVuY3Rpb24oZCkge3JldHVybiBkWzFdfSk7XG5cdFx0XHRcdC8vIGxpbmVkYXRhIHdpbGwgYmUgYW4gYXJyYXkgb2YgW3gsIHldIHZhbHVlcyB0aGF0IHN0YXJ0IGF0IHRoZSB5ZWFyIGNpcmNsZSBhbmQgdHJhY2sgdGhlIHBhcGVyIGNpcmNsZXNcblx0XHRcdFx0dmFyIGxpbmVkYXRhID0gW107XG5cdFx0XHRcdGxpbmVkYXRhLnB1c2goWzAsMF0pO1xuXHRcdFx0XHRzZWwuc3R5bGUodHJhbnNpdGlvblN0YXJ0U3R5bGUpXG5cdFx0XHRcdFx0LnRyYW5zaXRpb24oKS5kdXJhdGlvbihkdXIpXG5cdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCwgaSkge1xuXHRcdFx0XHRcdFx0bGluZWRhdGEucHVzaChbYWZ0ZXJUcmFuc2l0aW9uWChkLCBpKSwgYWZ0ZXJUcmFuc2l0aW9uWShkLCBpKV0pO1xuXHRcdFx0XHRcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgYWZ0ZXJUcmFuc2l0aW9uWChkLCBpKSArIFwiLFwiICsgYWZ0ZXJUcmFuc2l0aW9uWShkLCBpKSArIFwiKVwiO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmVhY2goXCJzdGFydFwiLCBmdW5jdGlvbigpIHtkMy5zZWxlY3QodGhpcykuY2xhc3NlZChcImV4cGFuZGVkXCIsIHRydWUpfSlcblx0XHRcdFx0XHQvLyAuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtkMy5zZWxlY3QodGhpcykuc3R5bGUoXCJwb2ludGVyLWV2ZW50c1wiLCBcImF1dG9cIik7fSk7XG5cdFx0XHRcdFx0LmVhY2goXCJlbmRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRkMy5zZWxlY3QodGhpcykuc3R5bGUodHJhbnNpdGlvbkVuZFN0eWxlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQvLyAuc3R5bGUoXCJwb2ludGVyLWV2ZW50c1wiLCBcImF1dG9cIik7XG5cdFx0XHRcdHNlbC5zZWxlY3RBbGwoXCIucGFwZXJNYXJrXCIpLnRyYW5zaXRpb24oKS5kdXJhdGlvbihkdXIpXG5cdFx0XHRcdFx0XHRcdFx0Ly8gLnN0eWxlKFwiZm9udC1zaXplXCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gKGQucmFkaXVzLzEwKSArIFwiZW1cIjt9KVxuXHRcdFx0XHRcdC5zdHlsZVR3ZWVuKFwiZm9udC1zaXplXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBkMy5pbnRlcnBvbGF0ZShcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIiksXG5cdFx0XHRcdFx0XHRcdFx0KGQucmFkaXVzLzEwKSArIFwiZW1cIik7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuYXR0cihcInJcIiwgZnVuY3Rpb24oZCkge3JldHVybiBkLnJhZGl1czt9KTtcblxuXHRcdFx0XHQvL21ha2UgbGFiZWxzIGFwcGVhclxuXHRcdFx0XHRzZWwuc2VsZWN0QWxsKFwiLnBhcGVyTGFiZWxcIilcblx0XHRcdFx0XHQvLyAuc3R5bGUoXCJwb2ludGVyLWV2ZW50c1wiLCBcIm5vbmVcIilcblx0XHRcdFx0XHQuc3R5bGUoXCJkaXNwbGF5XCIsIFwiXCIpXG5cdFx0XHRcdFx0LnN0eWxlKFwib3BhY2l0eVwiLCAwKVxuXHRcdFx0XHRcdC50cmFuc2l0aW9uKClcblx0XHRcdFx0XHQuZGVsYXkoZnVuY3Rpb24oZCkge3JldHVybiBkdXIvMiArIGQuaWR4Kjc1O30pXG5cdFx0XHRcdFx0LmR1cmF0aW9uKGR1cilcblx0XHRcdFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuXHRcdFx0XHQvLyBsYWJlbHNDb2xsaXNpb25EZXRlY3QoKTtcblx0XHRcdFx0ZDMudHJhbnNpdGlvbigpLmR1cmF0aW9uKGR1cikuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0aGlzWWVhckl0ZW0uYXBwZW5kKFwicGF0aFwiKS5kYXR1bShsaW5lZGF0YSkuYXR0cihcImNsYXNzXCIsIFwiam9pbkxpbmVcIikuYXR0cihcImRcIiwgbGluZSk7XG5cdFx0XHRcdFx0ZGlzcGxheSgpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZnVuY3Rpb24gY29udHJhY3QoeWVhckRhdGEpIHtcblx0XHRcdGZ1bmN0aW9uIGNvbnRyYWN0KCkge1xuXHRcdFx0XHRkMy5zZWxlY3RBbGwoXCIuam9pbkxpbmVcIikucmVtb3ZlKCk7XG5cdFx0XHRcdHZhciBkdXIgPSA1MDA7XG5cdFx0XHRcdC8vIHZhciBzZWwgPSBwYXBlckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhcj09PXllYXJEYXRhLnllYXJ9KTtcblx0XHRcdFx0dmFyIHNlbCA9IGQzLnNlbGVjdEFsbChcIi5leHBhbmRlZFwiKTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coc2VsLmVtcHR5KCkpO1xuXHRcdFx0XHRzZWwudHJhbnNpdGlvbigpLmR1cmF0aW9uKGR1cilcblx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLDApXCIpXG5cdFx0XHRcdFx0LmVhY2goXCJlbmRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRkMy5zZWxlY3QodGhpcykuY2xhc3NlZChcImV4cGFuZGVkXCIsIGZhbHNlKVxuXHRcdFx0XHRcdFx0XHQuc3R5bGUoXCJwb2ludGVyLWV2ZW50c1wiLCBcIlwiKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRzZWwuc2VsZWN0QWxsKFwiLnBhcGVyTWFya1wiKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oZHVyKjEuNSlcblx0XHRcdFx0XHQuc3R5bGVUd2VlbihcImZvbnQtc2l6ZVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZDMuaW50ZXJwb2xhdGUoXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1zaXplXCIpLFxuXHRcdFx0XHRcdFx0XHRcdFwiMS41ZW1cIilcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5hdHRyKFwiclwiLCAwKTtcblx0XHRcdFx0c2VsLnNlbGVjdEFsbChcIi5wYXBlckxhYmVsXCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHR9XG5cdFx0XHQvLyBmdW5jdGlvbiBleHBhbmQoeWVhckRhdGEpIHtcblx0XHRcdC8vIFx0Y29uc29sZS5sb2coeWVhckRhdGEpO1xuXHRcdFx0Ly8gXHRpZiAoIXllYXJEYXRhLmV4cGFuZGVkKSB7XG5cdFx0XHQvLyBcdFx0XG5cdFx0XHQvLyBcdFx0Ly8gZDMuc2VsZWN0QWxsKFwiLnllYXJJdGVtTGFiZWxcIikuY2xhc3NlZChcImhpZGRlblwiKTtcblx0XHRcdC8vIFx0XHQkKCAnLnllYXJJdGVtTGFiZWwnICkuaGlkZSgpO1xuXHRcdFx0Ly8gXHRcdHZhciBkdXIgPSA1MDA7XG5cdFx0XHQvLyBcdFx0Ly8gdmFyIHJhZCA9IHllYXJEYXRhLnJhZGl1cztcblx0XHRcdC8vIFx0XHR2YXIgcmFkID0gMTA7XG5cdFx0XHQvLyBcdFx0dmFyIHBhcmVudFkgPSB5ZWFyRGF0YS5jeTtcblx0XHRcdC8vIFx0XHR2YXIgbWFya3MgPSBtYWluQ2xpcFBhdGguc2VsZWN0QWxsKFwiLnBhcGVySXRlbVwiKVxuXHRcdFx0Ly8gXHRcdFx0XHRcdC8vIC5kYXRhKHZpc0l0ZW1zLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLmlkOyB9KVxuXHRcdFx0Ly8gXHRcdFx0XHRcdC5kYXRhKHllYXJEYXRhLnZhbHVlcyk7XG5cdFx0XHQvLyBcdFx0bWFya3MuZW50ZXIoKS5hcHBlbmQoXCJjaXJjbGVcIilcblx0XHRcdC8vIFx0XHRcdFx0Ly8gLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbihkKSB7cmV0dXJuIFwibWFpbkl0ZW0gbWluaUl0ZW1cIiArIGQubGFuZTt9KVxuXHRcdFx0Ly8gXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwicGFwZXJJdGVtXCIpXG5cdFx0XHQvLyBcdFx0XHRcdC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oZCkge2NvbnNvbGUubG9nKGQpO30pLmFwcGVuZCgndGV4dCcpLnRleHQoJ2QnKTtcblx0XHRcdC8vIFx0XHQvLyBtYXJrcy5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApLmF0dHIoXCJjeVwiLCBwYXJlbnRZKS5yZW1vdmUoKTtcblx0XHRcdC8vIFx0XHQvLyBpdGVtUmVjdHMuc2VsZWN0QWxsKCd0ZXh0JykuZGF0YSh5ZWFyRGF0YS52YWx1ZXMpLmVudGVyKCkuYXBwZW5kKCd0ZXh0JykuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkge2NvbnNvbGUubG9nKGQpOyByZXR1cm4gZC5jeDt9KS5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7cmV0dXJuIGQuY3k7fSkudGV4dChmdW5jdGlvbihkKSB7cmV0dXJuIGQudGl0bGU7fSk7XG5cdFx0XHQvLyBcdFx0bWFya3MuZXhpdCgpLnJlbW92ZSgpO1xuXHRcdFx0Ly9cblx0XHRcdC8vIFx0XHR2YXIgbGFiZWxzID0gbWFpbkNsaXBQYXRoLnNlbGVjdEFsbChcIi5wYXBlckl0ZW1MYWJlbFwiKVxuXHRcdFx0Ly8gXHRcdFx0LmRhdGEoeWVhckRhdGEudmFsdWVzKTtcblx0XHRcdC8vIFx0XHRsYWJlbHMuZW50ZXIoKS5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHQvLyBcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwicGFwZXJJdGVtTGFiZWxcIilcblx0XHRcdC8vIFx0XHRcdC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIik7XG5cdFx0XHQvLyBcdFx0bGFiZWxzLmV4aXQoKS5yZW1vdmUoKTtcblx0XHRcdC8vXG5cdFx0XHQvLyBcdFx0bWFya3MuYXR0cihcImN4XCIsIGJlZm9yZVRyYW5zaXRpb25YKVxuXHRcdFx0Ly8gXHRcdFx0XHQuYXR0cigncicsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdC8vIFx0XHRcdFx0XHRcdC8vIGQucmFkaXVzID0gcmFkICsgKDIgKiBlZlN1bVNjYWxlKGQuc3VtX2VpZ2VuZmFjdG9yKSk7XG5cdFx0XHQvLyBcdFx0XHRcdFx0XHRkLnJhZGl1cyA9IHJhZCArICgyICogZWZTY2FsZShkLmVpZ2VuZmFjdG9yX3Njb3JlKSk7XG5cdFx0XHQvLyBcdFx0XHRcdFx0XHRyZXR1cm4gZC5yYWRpdXM7XG5cdFx0XHQvLyBcdFx0XHRcdFx0fSlcblx0XHRcdC8vIFx0XHRcdFx0LmF0dHIoXCJjeVwiLCBiZWZvcmVUcmFuc2l0aW9uWSlcblx0XHRcdC8vIFx0XHRcdFx0LnRyYW5zaXRpb24oKS5kdXJhdGlvbihkdXIpXG5cdFx0XHQvLyBcdFx0XHRcdC5hdHRyKFwiY3hcIiwgYWZ0ZXJUcmFuc2l0aW9uWClcblx0XHRcdC8vIFx0XHRcdFx0LmF0dHIoXCJjeVwiLCBhZnRlclRyYW5zaXRpb25ZKVxuXHRcdFx0Ly8gXHRcdFx0XHQuc3R5bGUoc3R5bGVzVmlzaWJsZSk7XG5cdFx0XHQvLyBcdFx0bGFiZWxzLmF0dHIoXCJ4XCIsIGJlZm9yZVRyYW5zaXRpb25YKVxuXHRcdFx0Ly8gXHRcdFx0LnRleHQoZnVuY3Rpb24oZCkge3JldHVybiBkLnRpdGxlO30pXG5cdFx0XHQvLyBcdFx0XHQuYXR0cihcInlcIiwgYmVmb3JlVHJhbnNpdGlvblkpXG5cdFx0XHQvLyBcdFx0XHQudHJhbnNpdGlvbigpLmR1cmF0aW9uKGR1cilcblx0XHRcdC8vIFx0XHRcdC5hdHRyKFwieFwiLCBhZnRlclRyYW5zaXRpb25YKVxuXHRcdFx0Ly8gXHRcdFx0LmF0dHIoXCJ5XCIsIGFmdGVyVHJhbnNpdGlvblkpO1xuXHRcdFx0Ly8gXHR5ZWFyRGF0YS5leHBhbmRlZCA9IHRydWU7XG5cdFx0XHQvLyBcdH1cblx0XHRcdC8vIH1cblx0XHRcdC8vXG5cdFx0XHQvLyBmdW5jdGlvbiBjb250cmFjdChkKSB7XG5cdFx0XHQvLyBcdHZhciBkdXIgPSA1MDA7XG5cdFx0XHQvLyBcdGlmIChkLmV4cGFuZGVkKSB7XG5cdFx0XHQvLyBcdFx0dmFyIG1hcmtzID0gbWFpbkNsaXBQYXRoLnNlbGVjdEFsbChcIi5wYXBlckl0ZW1cIilcblx0XHRcdC8vIFx0XHRcdC5pbnRlcnJ1cHQoXCJjb250cmFjdFwiKVxuXHRcdFx0Ly8gXHRcdFx0LnRyYW5zaXRpb24oXCJjb250cmFjdFwiKS5kZWxheSgyMDAwKS5kdXJhdGlvbihkdXIpXG5cdFx0XHQvLyBcdFx0XHQuYXR0cihcImN4XCIsIGJlZm9yZVRyYW5zaXRpb25YKVxuXHRcdFx0Ly8gXHRcdFx0LmF0dHIoXCJjeVwiLCAwKVxuXHRcdFx0Ly8gXHRcdFx0LmVhY2goXCJlbmRcIiwgZnVuY3Rpb24oXywgaSkge1xuXHRcdFx0Ly8gXHRcdFx0XHRpZiAoaSA9PT0gMCkgZC5leHBhbmRlZCA9IGZhbHNlO1xuXHRcdFx0Ly8gXHRcdFx0XHR9KVxuXHRcdFx0Ly8gXHRcdFx0LnJlbW92ZSgpO1xuXHRcdFx0Ly8gXHRcdHZhciBsYWJlbHMgPSBtYWluQ2xpcFBhdGguc2VsZWN0QWxsKFwiLnBhcGVySXRlbUxhYmVsXCIpXG5cdFx0XHQvLyBcdFx0XHQuaW50ZXJydXB0KFwiY29udHJhY3RcIilcblx0XHRcdC8vIFx0XHRcdC50cmFuc2l0aW9uKFwiY29udHJhY3RcIikuZGVsYXkoMjAwMCkuZHVyYXRpb24oZHVyKVxuXHRcdFx0Ly8gXHRcdFx0LmF0dHIoXCJ4XCIsIGJlZm9yZVRyYW5zaXRpb25YKVxuXHRcdFx0Ly8gXHRcdFx0LmF0dHIoXCJ5XCIsIDApXG5cdFx0XHQvLyBcdFx0XHQucmVtb3ZlKCk7XG5cdFx0XHQvLyBcdH1cblx0XHRcdC8vIH1cblxuXHRcdFx0ZnVuY3Rpb24gbGFiZWxzQ29sbGlzaW9uRGV0ZWN0KCkge1xuXHRcdFx0XHQvLyBkZXRlY3QgaWYgbGFiZWxzIGdvIG9mZiBzY3JlZW5cblxuXHRcdFx0XHQvLyBmdW5jdGlvbiBjaGVja1NpbmdsZUxhYmVsKGQpIHtcblx0XHRcdFx0Ly8gXHR2YXIgYm91bmRpbmdSZWN0ID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0Ly8gXHRjb25zb2xlLmxvZyhib3VuZGluZ1JlY3Qud2lkdGggKyAkKCB0aGlzICkucG9zaXRpb24oKS5sZWZ0KTtcblx0XHRcdFx0Ly8gXHRpZiAoJCggdGhpcyApLnBvc2l0aW9uKCkubGVmdDwwKSB7XG5cdFx0XHRcdC8vIFx0XHRkMy5zZWxlY3QodGhpcykuc2VsZWN0KFwiLnBhcGVyTGFiZWxcIikuYXR0cihcInRleHQtYW5jaG9yXCIsIFwic3RhcnRcIik7XG5cdFx0XHRcdC8vIFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gXHRcdGQzLnNlbGVjdCh0aGlzKS5zZWxlY3QoXCIucGFwZXJMYWJlbFwiKS5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIik7XG5cdFx0XHRcdC8vIFx0fVxuXHRcdFx0XHQvLyB9XG5cdFx0XHRcdGZ1bmN0aW9uIGNoZWNrU2luZ2xlTGFiZWwoZCkge1xuXHRcdFx0XHRcdGZ1bmN0aW9uIHdyYXBJbkFuY2hvcihzdGFibGVfdXJsLCB0ZXh0KSB7XG5cdFx0XHRcdFx0XHQvLyByZXR1cm4gJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vbGFicy5qc3Rvci5vcmcnICsgc3RhYmxlX3VybCArICdcIj4nICsgdGV4dCArICc8L2E+J1xuXHRcdFx0XHRcdFx0cmV0dXJuICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJyArIHN0YWJsZV91cmwgKyAnXCI+JyArIHRleHQgKyAnPC9hPidcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gdmFyIGJvdW5kaW5nUmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdFx0dmFyIHRoaXNMYWJlbCA9IGQzLnNlbGVjdCh0aGlzKS5zZWxlY3QoXCIucGFwZXJMYWJlbFwiKTtcblx0XHRcdFx0XHQvLyB2YXIgd29yZHMgPSB0aGlzTGFiZWwudGV4dCgpLnNwbGl0KFwiIFwiKTtcblx0XHRcdFx0XHQvLyB0aGlzTGFiZWwudGV4dChkLnRpdGxlKTtcblx0XHRcdFx0XHR0aGlzTGFiZWwuaHRtbCh3cmFwSW5BbmNob3IoZC51cmwsIGQudGl0bGUpKTtcblx0XHRcdFx0XHR2YXIgd29yZHMgPSBkLnRpdGxlLnNwbGl0KFwiIFwiKTtcblx0XHRcdFx0XHR2YXIgZ2l2ZVVwVGhyZXNob2xkID0gMjA7XG5cdFx0XHRcdFx0dmFyIGkgPSAwO1xuXHRcdFx0XHRcdHZhciB2aWV3TGVmdEVkZ2UgPSAkKCAnI3RpbWVsaW5lIHN2ZycgKS5wb3NpdGlvbigpLmxlZnQgKyBtWzNdO1xuXHRcdFx0XHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRcdFx0XHRpKys7XG5cdFx0XHRcdFx0XHRpZiAoaT5naXZlVXBUaHJlc2hvbGQpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR2YXIgbGVmdFBvcyA9ICQoIHRoaXMgKS5wb3NpdGlvbigpLmxlZnQ7XG5cdFx0XHRcdFx0XHQvLyBpZiAobGVmdFBvcyA8IDIwKSB7XG5cdFx0XHRcdFx0XHQvLyBpZiAobGVmdFBvcyA8IG1bM10pIHtcblx0XHRcdFx0XHRcdGlmIChsZWZ0UG9zIDwgdmlld0xlZnRFZGdlKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBudW1Xb3JkcyA9IHdvcmRzLmxlbmd0aDtcblx0XHRcdFx0XHRcdFx0d29yZHMgPSB3b3Jkcy5zbGljZSgwLCBudW1Xb3Jkcy0yKTtcblx0XHRcdFx0XHRcdFx0dmFyIHNob3J0ZW5lZFRpdGxlID0gd29yZHMuam9pbihcIiBcIikrXCIuLi5cIjtcblx0XHRcdFx0XHRcdFx0Ly8gdGhpc0xhYmVsLnRleHQod29yZHMuam9pbihcIiBcIikrXCIuLi5cIik7XG5cdFx0XHRcdFx0XHRcdHRoaXNMYWJlbC5odG1sKHdyYXBJbkFuY2hvcihkLnVybCwgc2hvcnRlbmVkVGl0bGUpKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyB2YXIgbGVmdFBvcyA9ICQoIHRoaXMgKS5wb3NpdGlvbigpLmxlZnQ7XG5cdFx0XHRcdFx0Ly9cblx0XHRcdFx0XHQvLyBpZiAobGVmdFBvczwwKSB7XG5cdFx0XHRcdFx0Ly8gXHRkMy5zZWxlY3QodGhpcykuc2VsZWN0KFwiLnBhcGVyTGFiZWxcIilcblx0XHRcdFx0XHQvLyBcdFx0LnRleHQoZC50aXRsZS5zbGljZSgwLCAxMCkpO1xuXHRcdFx0XHRcdC8vIFx0Y2hlY2tTaW5nbGVMYWJlbChkKTtcblx0XHRcdFx0XHQvLyB9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIFx0Y29uc29sZS5sb2coJ2xlYXZpbmcgcmVjdXJzaXZlIGZ1bmN0aW9uJylcblx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdFx0Ly8gcmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGQzLnNlbGVjdEFsbChcIi5wYXBlckl0ZW0uZXhwYW5kZWRcIilcblx0XHRcdFx0XHQuZWFjaChjaGVja1NpbmdsZUxhYmVsKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0ZnVuY3Rpb24gZGVtb0luaXQoKSB7XG5cdFx0XHRcdGNoYXJ0LmNsYXNzZWQoXCJkZW1vSW5Qcm9ncmVzc1wiLCB0cnVlKTtcblx0XHRcdFx0Y2xlYXJCcnVzaCgpO1xuXHRcdFx0XHRjb250cmFjdCgpO1xuXHRcdFx0XHRkaXNhYmxlSW50ZXJhY3Rpb24oKTtcblx0XHRcdFx0bWluaS5vbihcIm1vdXNlZG93blwiLCBkZW1vUXVpdCk7XG5cdFx0XHRcdGZ1bmN0aW9uIGRlbW9RdWl0KCkge1xuXHRcdFx0XHRcdGNoYXJ0LmNsYXNzZWQoXCJkZW1vSW5Qcm9ncmVzc1wiLCBmYWxzZSk7XG5cdFx0XHRcdFx0Y3Vyc29ySWNvbi50cmFuc2l0aW9uKDApLnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciB0cmFuc2l0aW9uVGltZXMgPSBbXG5cdFx0XHRcdFx0XHQ3NTAsICAvLyAwOiBpbml0aWFsIGRlbGF5IGJlZm9yZSBhbnl0aGluZyBoYXBwZW5zXG5cdFx0XHRcdFx0XHQxMDAwLCAgLy8gMTogdGltZSB0byBtb3ZlIHRoZSBjdXJzb3IgdG8gdGhlIG1pbmkgYXJlYVxuXHRcdFx0XHRcdFx0MjAwMCwgIC8vIDI6IHRpbWUgdG8gZHJhdyB0aGUgaW5pdGlhbCBicnVzaFxuXHRcdFx0XHRcdFx0MjAwLCAgIC8vIDM6IGRlbGF5IGFmdGVyIGJydXNoXG5cdFx0XHRcdFx0XHQyMDAwLCAgLy8gNDogdGltZSB0byBtb3ZlIHRoZSBjdXJzb3IgdG8gYSBtYWluIGl0ZW1cblx0XHRcdFx0XHRcdDMwMDAsICAvLyA1OiBkZWxheSB0byByZW1vdmUgYW5kIGVuZCB0aGUgZGVtb1xuXHRcdFx0XHRcdF07XG5cdFx0XHRcdHZhciBjdXJzb3JJY29uID0gY2hhcnQuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJjdXJzb3JJY29uXCIpXG5cdFx0XHRcdFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0XHRcdC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjFlbVwiKVxuXHRcdFx0XHRcdC50ZXh0KFwiXFx1ZjI0NVwiKVxuXHRcdFx0XHRcdC8vIC5hdHRyKFwieFwiLCAxMDApXG5cdFx0XHRcdFx0Ly8gLmF0dHIoXCJ5XCIsIDMwMCk7XG5cdFx0XHRcdFx0Ly8gLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMTAwLDMwMClcIik7XG5cdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB3ICsgXCIsXCIgKyBtYWluSGVpZ2h0ICsgXCIpXCIpO1xuXHRcdFx0XHQvLyB2YXIgaW5pdER1cmF0aW9uID0gMTAwMCxcblx0XHRcdFx0Ly8gXHRpbml0RGVsYXkgPSAxMDAwO1xuXHRcdFx0XHQvLyBjaGFuZ2VFeHRlbnQoMTk3MCwgMjAwMCwgaW5pdER1cmF0aW9uLCBcImN1YmljLWluLW91dFwiLCBpbml0RGVsYXkpO1xuXHRcdFx0XHQvLyBkMy50cmFuc2l0aW9uKFwiaW5pdERlbW9UcmFuc2l0aW9uXCIpLmRlbGF5KGluaXREZWxheSArIGluaXREdXJhdGlvbilcblx0XHRcdFx0Ly8gXHQuZWFjaChcImVuZFwiLCBkZW1vRXhwYW5kKTtcblx0XHRcdFx0dmFyIGV4dGVudFNlbGVjdCA9IG1pbmkuc2VsZWN0KFwiLmJydXNoXCIpLnNlbGVjdChcIi5leHRlbnRcIik7XG5cdFx0XHRcdC8vIHZhciBpbml0QnJ1c2hSYW5nZSA9IFsxOTcwLCAyMDAwXTtcblx0XHRcdFx0dmFyIHllYXJSYW5nZSA9IHRpbWVFbmQgLSB0aW1lQmVnaW47XG5cdFx0XHRcdGlmICh5ZWFyUmFuZ2UgPCA2KSB7XG5cdFx0XHRcdFx0dmFyIGluaXRCcnVzaFJhbmdlID0gW3RpbWVCZWdpbiwgdGltZUVuZF07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIGluaXRCcnVzaFJhbmdlID0gW3RpbWVCZWdpbiArIE1hdGguZmxvb3IoeWVhclJhbmdlKi4zKSwgdGltZUVuZCAtIE1hdGguZmxvb3IoeWVhclJhbmdlKi4yKV07XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hhbmdlRXh0ZW50KGluaXRCcnVzaFJhbmdlWzBdLCBpbml0QnJ1c2hSYW5nZVswXSwgMCk7XG5cdFx0XHRcdC8vIHZhciBpbml0QnJ1c2hQb3NpdGlvbiA9ICtleHRlbnRTZWxlY3QuYXR0cihcInhcIik7XG5cdFx0XHRcdHZhciBpbml0QnJ1c2hQb3NpdGlvbiA9IHgoYnJ1c2guZXh0ZW50KClbMV0pICsgbVszXTtcblxuXHRcdFx0XHQvLyBzZWxlY3QgYSB5ZWFySXRlbSB0byBleHBhbmQgZm9yIHRoZSBkZW1vXG5cdFx0XHRcdHZhciB2aXNJdGVtcyA9IHllYXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXIgPCBpbml0QnJ1c2hSYW5nZVsxXSAmJiBkLnllYXIgPiBpbml0QnJ1c2hSYW5nZVswXTt9KSxcblx0XHRcdFx0XHRudW1WaXNJdGVtcyA9IHZpc0l0ZW1zLnNpemUoKTtcblx0XHRcdFx0aWYgKG51bVZpc0l0ZW1zID09PSAwKSB7XG5cdFx0XHRcdFx0Ly8gaWYgdGhlcmUgYXJlIG5vIHZpc2libGUgaXRlbXMgaW4gdGhlIHJhbmdlLCBqdXN0IGdpdmUgdXBcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gZWxzZSBpZiAobnVtVmlzSXRlbXMgPT09IDEpIHtcblx0XHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSB2aXNpYmxlIGl0ZW0sIHVzZSBpdFxuXHRcdFx0XHRcdHZhciBzZWxJbmRleCA9IDA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gZWxzZSwgdXNlIGFuIGl0ZW0gYSBsaXR0bGUgdG8gdGhlIHJpZ2h0IG9mIGNlbnRlclxuXHRcdFx0XHRcdHZhciBzZWxJbmRleCA9IE1hdGguY2VpbChudW1WaXNJdGVtcyouNTUpO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHR2YXIgZGVtb1llYXJJdGVtID0gdmlzSXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGQsIGkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGkgPT09IHNlbEluZGV4O1xuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKCFjaGFydC5jbGFzc2VkKFwiZGVtb0luUHJvZ3Jlc3NcIikpIHtcblx0XHRcdFx0XHQvLyBxdWl0XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXG5cdFx0XHRcdGN1cnNvckljb24udHJhbnNpdGlvbigpLmRlbGF5KHRyYW5zaXRpb25UaW1lc1swXSlcblx0XHRcdFx0XHQuZHVyYXRpb24odHJhbnNpdGlvblRpbWVzWzFdKVxuXHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFxuXHRcdFx0XHRcdFx0XHQvLyBjb25zdHJ1Y3RUcmFuc2xhdGUoaW5pdEJydXNoUG9zaXRpb24rMTUsIG1haW5IZWlnaHQrbVswXSsobWluaUhlaWdodC8yKSlcblx0XHRcdFx0XHRcdFx0Y29uc3RydWN0VHJhbnNsYXRlKGluaXRCcnVzaFBvc2l0aW9uLCBtYWluSGVpZ2h0K21bMF0rKG1pbmlIZWlnaHQvMikpXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmIChjaGFydC5jbGFzc2VkKFwiZGVtb0luUHJvZ3Jlc3NcIikpIHtcblx0XHRcdFx0XHRcdFx0ZGVtb0RyYXdCcnVzaCgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZGVtb0VuZCgwKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRmdW5jdGlvbiBkZW1vRHJhd0JydXNoKCkge1xuXHRcdFx0XHRcdGNoYW5nZUV4dGVudChpbml0QnJ1c2hSYW5nZVswXSwgaW5pdEJydXNoUmFuZ2VbMV0sIHRyYW5zaXRpb25UaW1lc1syXSk7XG5cdFx0XHRcdFx0dmFyIG1pbkV4dGVudFNjcmVlbiA9ICtleHRlbnRTZWxlY3QuYXR0cihcInhcIik7XG5cdFx0XHRcdFx0dmFyIG1heEV4dGVudFNjcmVlbiA9IG1pbkV4dGVudFNjcmVlbiArICgrZXh0ZW50U2VsZWN0LmF0dHIoXCJ3aWR0aFwiKSk7XG5cdFx0XHRcdFx0eDEuZG9tYWluKGJydXNoLmV4dGVudCgpKTtcblx0XHRcdFx0XHRjdXJzb3JJY29uLnRyYW5zaXRpb24oKVxuXHRcdFx0XHRcdFx0LmR1cmF0aW9uKHRyYW5zaXRpb25UaW1lc1syXSlcblx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgeFBvcyA9IHgoYnJ1c2guZXh0ZW50KClbMV0pICsgbVszXTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGNvbnN0cnVjdFRyYW5zbGF0ZSh4UG9zLCBtYWluSGVpZ2h0K21bMF0rKG1pbmlIZWlnaHQvMikpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmIChjaGFydC5jbGFzc2VkKFwiZGVtb0luUHJvZ3Jlc3NcIikpIHtcblx0XHRcdFx0XHRcdFx0ZGVtb0V4cGFuZCgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZGVtb0VuZCgwKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0ZnVuY3Rpb24gZGVtb0V4cGFuZCgpIHtcblx0XHRcdFx0XHQvLyB2YXIgZGVtb1RyYW5zaXRpb25UaW1lID0gMjAwMDtcblx0XHRcdFx0XHQvLyB2YXIgZGVtb0RlbGF5VG9SZW1vdmUgPSAyMDAwO1xuXHRcdFx0XHRcdC8vIHZhciBjdXJzb3JJY29uID0gbWFpbkNsaXBQYXRoLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0XHQvLyBcdC5hdHRyKFwiY2xhc3NcIiwgXCJjdXJzb3JJY29uXCIpXG5cdFx0XHRcdFx0Ly8gXHQuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcIkZvbnRBd2Vzb21lXCIpXG5cdFx0XHRcdFx0Ly8gXHQuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxZW1cIilcblx0XHRcdFx0XHQvLyBcdC50ZXh0KFwiXFx1ZjI0NVwiKVxuXHRcdFx0XHRcdC8vIFx0Ly8gLmF0dHIoXCJ4XCIsIDEwMClcblx0XHRcdFx0XHQvLyBcdC8vIC5hdHRyKFwieVwiLCAzMDApO1xuXHRcdFx0XHRcdC8vIFx0Ly8gLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMTAwLDMwMClcIik7XG5cdFx0XHRcdFx0Ly8gXHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHcgKyBcIixcIiArIG1haW5IZWlnaHQgKyBcIilcIik7XG5cblx0XHRcdFx0XHR2YXIgZGVtb1llYXJNYXJrID0gZGVtb1llYXJJdGVtLnNlbGVjdChcIi55ZWFyTWFya1wiKTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkZW1vWWVhckl0ZW0pO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRlbW9ZZWFyTWFyayk7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGVtb1llYXJNYXJrLmF0dHIoXCJyXCIpKTtcblx0XHRcdFx0XHR2YXIgdHJhbnNsYXRlU3RyID0gZGVtb1llYXJJdGVtLmF0dHIoXCJ0cmFuc2Zvcm1cIik7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codHJhbnNsYXRlU3RyKTtcblx0XHRcdFx0XHR2YXIgdHJhbnNsYXRlQ29vcmQgPSBkZWNvbnN0cnVjdFRyYW5zbGF0ZSh0cmFuc2xhdGVTdHIpO1xuXHRcdFx0XHRcdHRyYW5zbGF0ZUNvb3JkLnggPSB0cmFuc2xhdGVDb29yZC54ICsgbVszXTtcblx0XHRcdFx0XHR0cmFuc2xhdGVDb29yZC55ID0gdHJhbnNsYXRlQ29vcmQueSArIG1bMF0gKyAoK2RlbW9ZZWFyTWFyay5hdHRyKFwiclwiKSk7XG5cdFx0XHRcdFx0dmFyIHRyYW5zbGF0ZSA9IGNvbnN0cnVjdFRyYW5zbGF0ZSh0cmFuc2xhdGVDb29yZC54LCB0cmFuc2xhdGVDb29yZC55KTtcblx0XHRcdFx0XHQvLyBtb3ZlIHRoZSBjdXJzb3IgdG8gYSB5ZWFyLCB0aGVuIG1hbnVhbGx5IGV4cGFuZCB0aGUgeWVhclxuXHRcdFx0XHRcdGN1cnNvckljb24udHJhbnNpdGlvbihcImRlbW9FeHBhbmRcIikuZGVsYXkodHJhbnNpdGlvblRpbWVzWzNdKVxuXHRcdFx0XHRcdFx0LmR1cmF0aW9uKHRyYW5zaXRpb25UaW1lc1s0XSlcblx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIHRyYW5zbGF0ZSlcblx0XHRcdFx0XHRcdC5lYWNoKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoY2hhcnQuY2xhc3NlZChcImRlbW9JblByb2dyZXNzXCIpKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHNlbCA9IHBhcGVySXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGRkKSB7cmV0dXJuIGRkLnllYXI9PWRlbW9ZZWFySXRlbVswXVswXS5fX2RhdGFfXy55ZWFyfSk7XG5cdFx0XHRcdFx0XHRcdFx0ZXhwYW5kKHNlbCk7XG5cdFx0XHRcdFx0XHRcdFx0ZGVtb0VuZCh0cmFuc2l0aW9uVGltZXNbNV0pO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGRlbW9FbmQoMCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdC8vIGN1cnNvckljb24udHJhbnNpdGlvbihcImRlbW9FbmRcIikuZGVsYXkoZGVtb1RyYW5zaXRpb25UaW1lKVxuXHRcdFx0XHRcdC8vIFx0LmR1cmF0aW9uKGRlbW9EZWxheVRvUmVtb3ZlKVxuXHRcdFx0XHRcdC8vIFx0LmVhY2goXCJlbmRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Ly8gXHRcdGN1cnNvckljb24ucmVtb3ZlKCk7XG5cdFx0XHRcdFx0Ly8gXHRcdGNvbnRyYWN0KCk7XG5cdFx0XHRcdFx0Ly8gXHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZ1bmN0aW9uIGRlbW9FbmQoZGVsYXkpIHtcblx0XHRcdFx0XHRjdXJzb3JJY29uLnRyYW5zaXRpb24oXCJkZW1vRW5kXCIpXG5cdFx0XHRcdFx0XHQuZGVsYXkoZGVsYXkpXG5cdFx0XHRcdFx0XHQuZHVyYXRpb24oMClcblx0XHRcdFx0XHRcdC5yZW1vdmUoKVxuXHRcdFx0XHRcdFx0LmVhY2goXCJlbmRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRyYWN0KCk7XG5cdFx0XHRcdFx0XHRcdGVuYWJsZUludGVyYWN0aW9uKCk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cblx0XHRcdGZ1bmN0aW9uIHRlc3RQbGFjZUN1cnNvcigpIHtcblx0XHRcdFx0dmFyIGV4dGVudFNlbGVjdCA9IG1pbmkuc2VsZWN0KFwiLmJydXNoXCIpLnNlbGVjdChcIi5leHRlbnRcIik7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGV4dGVudFNlbGVjdCk7XG5cdFx0XHRcdHZhciBtaW5FeHRlbnRTY3JlZW4gPSArZXh0ZW50U2VsZWN0LmF0dHIoXCJ4XCIpO1xuXHRcdFx0XHR2YXIgY3Vyc29ySWNvbiA9IG1haW5DbGlwUGF0aC5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImN1cnNvckljb25cIilcblx0XHRcdFx0XHQuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcIkZvbnRBd2Vzb21lXCIpXG5cdFx0XHRcdFx0LnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMWVtXCIpXG5cdFx0XHRcdFx0LnRleHQoXCJcXHVmMjQ1XCIpXG5cdFx0XHRcdFx0Ly8gLmF0dHIoXCJ4XCIsIDEwMClcblx0XHRcdFx0XHQvLyAuYXR0cihcInlcIiwgMzAwKTtcblx0XHRcdFx0XHQvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgxMDAsMzAwKVwiKTtcblx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1pbkV4dGVudFNjcmVlbiArIFwiLFwiICsgKG1haW5IZWlnaHQtMjApICsgXCIpXCIpO1xuXHRcdFx0XHRcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gdGVzdENoYW5nZUhlaWdodCgpIHtcblx0XHRcdFx0Ly8gY2hhbmdlRXh0ZW50KE1hdGgucm91bmQobWluRXh0ZW50KzEpLCBNYXRoLnJvdW5kKG1heEV4dGVudCsxKSwgMjUwLCBcImxpbmVhclwiKTtcblx0XHRcdFx0dmFyIGNoYXJ0SGVpZ2h0ID0gK2NoYXJ0LmF0dHIoXCJoZWlnaHRcIik7XG5cdFx0XHRcdHZhciBjdXJyTWFpbkhlaWdodCA9ICttYWluLmF0dHIoXCJoZWlnaHRcIik7XG5cdFx0XHRcdGNoYXJ0LnRyYW5zaXRpb24oKS5kdXJhdGlvbigxMDAwKS5hdHRyKFwiaGVpZ2h0XCIsIGNoYXJ0SGVpZ2h0KzEwMCk7XG5cdFx0XHRcdG1haW4udHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApLmF0dHIoXCJoZWlnaHRcIiwgY3Vyck1haW5IZWlnaHQrMTAwKTtcblx0XHRcdFx0bWluaS50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMClcblx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1bM10gKyBcIixcIiArIChjdXJyTWFpbkhlaWdodCsxMDAgKyBtWzBdKSArIFwiKVwiKTtcblx0XHRcdFx0ZDMuc2VsZWN0KFwiI2NsaXAgcmVjdFwiKS5hdHRyKFwiaGVpZ2h0XCIsIGN1cnJNYWluSGVpZ2h0KzEwMCk7XG5cdFx0XHRcdGRpc3BsYXkoKTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coZDMuc2VsZWN0KFwiI2NsaXBcIikuYXR0cihcImhlaWdodFwiKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIHZhciB0ZXN0QnV0dG9uID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJidXR0b25cIilcblx0XHRcdC8vIFx0XHRcdFx0XHQuYXR0cihcImlkXCIsIFwidGVzdEJ1dHRvblwiKVxuXHRcdFx0Ly8gXHRcdFx0XHRcdC5odG1sKFwidGVzdEJ1dHRvblwiKVxuXHRcdFx0Ly8gXHRcdFx0XHRcdC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gXHRcdFx0XHRcdFx0Ly8gbWluaW1pemVUaW1lbGluZSgpO1xuXHRcdFx0Ly8gXHRcdFx0XHRcdFx0ZGVtb0luaXQoKTtcblx0XHRcdC8vIFx0XHRcdFx0XHR9KTtcblx0XHRcdGQzLnNlbGVjdChcIi5jbGlja0ZvckRlbW9cIilcblx0XHRcdFx0Lm9uKFwiY2xpY2tcIiwgZGVtb0luaXQpO1xuXG5cdFx0XHRmdW5jdGlvbiBkaXNhYmxlSW50ZXJhY3Rpb24oKSB7XG5cdFx0XHRcdGQzLnNlbGVjdChcIiN0aW1lbGluZSBzdmdcIikuc3R5bGUoXCJwb2ludGVyLWV2ZW50c1wiLCBcIm5vbmVcIik7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGVuYWJsZUludGVyYWN0aW9uKCkge1xuXHRcdFx0XHRkMy5zZWxlY3QoXCIjdGltZWxpbmUgc3ZnXCIpLnN0eWxlKFwicG9pbnRlci1ldmVudHNcIiwgbnVsbCk7XG5cdFx0XHR9XG5cblx0XHRcdCQoIGRvY3VtZW50ICkub24oXCJ0aW1lbGluZVZpczpjb250cmFjdFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0Y29udHJhY3QoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQkKCBkb2N1bWVudCApLm9uKFwidGltZWxpbmVWaXM6ZGlzcGxheVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGlzcGxheSgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdCQoIGRvY3VtZW50ICkub24oXCJ0aW1lbGluZVZpczpjbGVhckJydXNoXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjbGVhckJydXNoKCk7XG5cdFx0XHR9KTtcblxuXHRcdH0pO1xuXHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8vIHVwZGF0ZURhdGEoKSB7XG5cdC8vIFx0Ly8gdXNlIEQzIHVwZGF0ZSBwYXR0ZXJuIHdpdGggZGF0YVxuICAgIC8vXG5cdC8vIFx0dmFyIGdyYXBoID0gdGhpcy5fZGF0YTtcblx0Ly8gXHRncmFwaC5ub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcblx0Ly8gXHRcdGQuaWQgPSBkLmlkLnRvU3RyaW5nKCk7XG5cdC8vIFx0fSlcblx0Ly8gXHRncmFwaC5saW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcblx0Ly8gXHRcdGQuaWQgPSBnZXRMaW5rSWQoZCwgZ3JhcGguZGlyZWN0ZWQpO1xuXHQvLyBcdH0pO1xuXHQvLyBcdHRoaXMuc2ltdWxhdGlvblxuXHQvLyBcdFx0Lm5vZGVzKGdyYXBoLm5vZGVzKVxuXHQvLyBcdFx0Lm9uKFwidGlja1wiLCB0aWNrZWQpO1xuICAgIC8vXG5cdC8vIFx0c2ltdWxhdGlvbi5mb3JjZShcImxpbmtcIilcblx0Ly8gXHRcdC5saW5rcyhncmFwaC5saW5rcyk7XG5cdC8vIFx0Y29uc29sZS5sb2coZ3JhcGgpO1xuXHQvLyBcdHNpbXVsYXRpb24uc3RvcCgpO1xuXHQvLyBcdG5vZGUgPSBub2RlLmRhdGEoZ3JhcGgubm9kZXMsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuaWQ7IH0pO1xuXHQvLyBcdHZhciBub2RlRXhpdCA9IG5vZGUuZXhpdCgpO1xuXHQvLyBcdC8vIG5vZGVFeGl0LnNlbGVjdEFsbChcImNpcmNsZVwiKS5hdHRyKFwiZmlsbFwiLCBcInJlZFwiKTtcblx0Ly8gXHR2YXIgdCA9IGQzLnRyYW5zaXRpb24oJ3VwZGF0ZURhdGEnKS5kdXJhdGlvbig1MDAwKTtcblx0Ly8gXHRub2RlRXhpdC5zZWxlY3RBbGwoXCJjaXJjbGVcIikuc3R5bGUoXCJzdHJva2VcIiwgXCJyZWRcIikudHJhbnNpdGlvbih0KS5hdHRyKFwiclwiLCAwKTtcblx0Ly8gXHRub2RlID0gZW50ZXJOb2Rlcyhub2RlLCB0KTtcblx0Ly8gXHQvLyBub2RlID0gbm9kZS5jYWxsKGVudGVyTm9kZXMsIHQpO1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuXHQvLyBcdGxpbmsgPSBsaW5rXG5cdC8vIFx0XHQuZGF0YShncmFwaC5saW5rcywgZnVuY3Rpb24oZCkge1xuXHQvLyBcdFx0XHQvLyBkLmlkID0gZ2V0TGlua0lkKGQpO1xuXHQvLyBcdFx0XHRyZXR1cm4gZC5pZDtcblx0Ly8gXHRcdH0pO1xuXHQvLyBcdHZhciBsaW5rRXhpdCA9IGxpbmsuZXhpdCgpO1xuXHQvLyBcdGxpbmtFeGl0LnN0eWxlKFwic3Ryb2tlXCIsIFwicmVkXCIpLnRyYW5zaXRpb24odCkuc3R5bGUoXCJvcGFjaXR5XCIsIDApLnJlbW92ZSgpO1xuXHQvLyBcdC8vIGxpbmtFeGl0LnJlbW92ZSgpO1xuXHQvLyBcdGxpbmsgPSBlbnRlckxpbmtzKGxpbmssIHQpO1xuXHQvLyBcdHNpbXVsYXRpb24ub24oXCJ0aWNrXCIpLmNhbGwoKTtcbiAgICAvL1xuICAgIC8vXG5cdC8vIFx0dC5lbmQoKS50aGVuKGZ1bmN0aW9uKGQpIHtcblx0Ly8gXHRcdG5vZGVFeGl0LnJlbW92ZSgpO1xuXHQvLyBcdFx0Ly8gc2ltdWxhdGlvbi5hbHBoYSgxKS5yZXN0YXJ0KCk7XG5cdC8vIFx0XHQvLyBzaW11bGF0aW9uXG5cdC8vIFx0XHRcdC8vIC5hbHBoYURlY2F5KC4wMDA1KVxuXHQvLyBcdFx0XHQvLyAudmVsb2NpdHlEZWNheSgwLjkpXG5cdC8vIFx0XHRcdC8vIC5hbHBoYSguMSlcblx0Ly8gXHRcdFx0Ly8gLnJlc3RhcnQoKTtcblx0Ly8gXHR9KTtcblx0Ly8gXHRcblx0Ly8gXHQvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHQvLyBcdC8vIH0sIDQwMDApO1xuXHQvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lVmlzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyJdLCJzb3VyY2VSb290IjoiIn0=
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

/***/ "./node_modules/d3-selection/src/constant.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/constant.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-selection/src/create.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/create.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creator */ "./node_modules/d3-selection/src/creator.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select */ "./node_modules/d3-selection/src/select.js");



/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  return Object(_select__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_creator__WEBPACK_IMPORTED_MODULE_0__["default"])(name).call(document.documentElement));
});


/***/ }),

/***/ "./node_modules/d3-selection/src/creator.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/creator.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespace */ "./node_modules/d3-selection/src/namespace.js");
/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./namespaces */ "./node_modules/d3-selection/src/namespaces.js");



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === _namespaces__WEBPACK_IMPORTED_MODULE_1__["xhtml"] && document.documentElement.namespaceURI === _namespaces__WEBPACK_IMPORTED_MODULE_1__["xhtml"]
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var fullname = Object(_namespace__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/index.js ***!
  \************************************************/
/*! exports provided: create, creator, local, matcher, mouse, namespace, namespaces, clientPoint, select, selectAll, selection, selector, selectorAll, style, touch, touches, window, event, customEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/d3-selection/src/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _create__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creator */ "./node_modules/d3-selection/src/creator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "creator", function() { return _creator__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local */ "./node_modules/d3-selection/src/local.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "local", function() { return _local__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matcher */ "./node_modules/d3-selection/src/matcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return _matcher__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _mouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mouse */ "./node_modules/d3-selection/src/mouse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return _mouse__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./namespace */ "./node_modules/d3-selection/src/namespace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return _namespace__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./namespaces */ "./node_modules/d3-selection/src/namespaces.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespaces", function() { return _namespaces__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clientPoint", function() { return _point__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select */ "./node_modules/d3-selection/src/select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _select__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _selectAll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selectAll */ "./node_modules/d3-selection/src/selectAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _selectAll__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selection/index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selection", function() { return _selection_index__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./selector */ "./node_modules/d3-selection/src/selector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return _selector__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _selectorAll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selectorAll */ "./node_modules/d3-selection/src/selectorAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectorAll", function() { return _selectorAll__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _selection_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./selection/style */ "./node_modules/d3-selection/src/selection/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "style", function() { return _selection_style__WEBPACK_IMPORTED_MODULE_13__["styleValue"]; });

/* harmony import */ var _touch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./touch */ "./node_modules/d3-selection/src/touch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "touch", function() { return _touch__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _touches__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./touches */ "./node_modules/d3-selection/src/touches.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "touches", function() { return _touches__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./window */ "./node_modules/d3-selection/src/window.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _window__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _selection_on__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./selection/on */ "./node_modules/d3-selection/src/selection/on.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "event", function() { return _selection_on__WEBPACK_IMPORTED_MODULE_17__["event"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customEvent", function() { return _selection_on__WEBPACK_IMPORTED_MODULE_17__["customEvent"]; });





















/***/ }),

/***/ "./node_modules/d3-selection/src/local.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/local.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return local; });
var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};


/***/ }),

/***/ "./node_modules/d3-selection/src/matcher.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/matcher.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return function() {
    return this.matches(selector);
  };
});


/***/ }),

/***/ "./node_modules/d3-selection/src/mouse.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/mouse.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent */ "./node_modules/d3-selection/src/sourceEvent.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");



/* harmony default export */ __webpack_exports__["default"] = (function(node) {
  var event = Object(_sourceEvent__WEBPACK_IMPORTED_MODULE_0__["default"])();
  if (event.changedTouches) event = event.changedTouches[0];
  return Object(_point__WEBPACK_IMPORTED_MODULE_1__["default"])(node, event);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/namespace.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespace.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespaces */ "./node_modules/d3-selection/src/namespaces.js");


/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProperty(prefix) ? {space: _namespaces__WEBPACK_IMPORTED_MODULE_0__["default"][prefix], local: name} : name;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/namespaces.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespaces.js ***!
  \*****************************************************/
/*! exports provided: xhtml, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xhtml", function() { return xhtml; });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ __webpack_exports__["default"] = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),

/***/ "./node_modules/d3-selection/src/point.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/point.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
});


/***/ }),

/***/ "./node_modules/d3-selection/src/select.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/select.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return typeof selector === "string"
      ? new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([[document.querySelector(selector)]], [document.documentElement])
      : new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([[selector]], _selection_index__WEBPACK_IMPORTED_MODULE_0__["root"]);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selectAll.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/selectAll.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return typeof selector === "string"
      ? new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([document.querySelectorAll(selector)], [document.documentElement])
      : new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([selector == null ? [] : selector], _selection_index__WEBPACK_IMPORTED_MODULE_0__["root"]);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/append.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/append.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator */ "./node_modules/d3-selection/src/creator.js");


/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var create = typeof name === "function" ? name : Object(_creator__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/attr.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/attr.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../namespace */ "./node_modules/d3-selection/src/namespace.js");


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var fullname = Object(_namespace__WEBPACK_IMPORTED_MODULE_0__["default"])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/call.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/call.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/classed.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/classed.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/clone.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/clone.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

/* harmony default export */ __webpack_exports__["default"] = (function(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/data.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/data.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _enter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enter */ "./node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "./node_modules/d3-selection/src/constant.js");




var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new _enter__WEBPACK_IMPORTED_MODULE_1__["EnterNode"](parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new _enter__WEBPACK_IMPORTED_MODULE_1__["EnterNode"](parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/datum.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/datum.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/dispatch.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/dispatch.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window */ "./node_modules/d3-selection/src/window.js");


function dispatchEvent(node, type, params) {
  var window = Object(_window__WEBPACK_IMPORTED_MODULE_0__["default"])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/each.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/each.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/empty.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/empty.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  return !this.node();
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/enter.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/enter.js ***!
  \**********************************************************/
/*! exports provided: default, EnterNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterNode", function() { return EnterNode; });
/* harmony import */ var _sparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sparse */ "./node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new _index__WEBPACK_IMPORTED_MODULE_1__["Selection"](this._enter || this._groups.map(_sparse__WEBPACK_IMPORTED_MODULE_0__["default"]), this._parents);
});

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/exit.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/exit.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sparse */ "./node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new _index__WEBPACK_IMPORTED_MODULE_1__["Selection"](this._exit || this._groups.map(_sparse__WEBPACK_IMPORTED_MODULE_0__["default"]), this._parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/filter.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/filter.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _matcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../matcher */ "./node_modules/d3-selection/src/matcher.js");



/* harmony default export */ __webpack_exports__["default"] = (function(match) {
  if (typeof match !== "function") match = Object(_matcher__WEBPACK_IMPORTED_MODULE_1__["default"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, this._parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/html.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/html.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/index.js ***!
  \**********************************************************/
/*! exports provided: root, Selection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select */ "./node_modules/d3-selection/src/selection/select.js");
/* harmony import */ var _selectAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectAll */ "./node_modules/d3-selection/src/selection/selectAll.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ "./node_modules/d3-selection/src/selection/filter.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./node_modules/d3-selection/src/selection/data.js");
/* harmony import */ var _enter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enter */ "./node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _exit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exit */ "./node_modules/d3-selection/src/selection/exit.js");
/* harmony import */ var _join__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./join */ "./node_modules/d3-selection/src/selection/join.js");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./merge */ "./node_modules/d3-selection/src/selection/merge.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order */ "./node_modules/d3-selection/src/selection/order.js");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sort */ "./node_modules/d3-selection/src/selection/sort.js");
/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./call */ "./node_modules/d3-selection/src/selection/call.js");
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nodes */ "./node_modules/d3-selection/src/selection/nodes.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node */ "./node_modules/d3-selection/src/selection/node.js");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./size */ "./node_modules/d3-selection/src/selection/size.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./empty */ "./node_modules/d3-selection/src/selection/empty.js");
/* harmony import */ var _each__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./each */ "./node_modules/d3-selection/src/selection/each.js");
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./attr */ "./node_modules/d3-selection/src/selection/attr.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./style */ "./node_modules/d3-selection/src/selection/style.js");
/* harmony import */ var _property__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./property */ "./node_modules/d3-selection/src/selection/property.js");
/* harmony import */ var _classed__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./classed */ "./node_modules/d3-selection/src/selection/classed.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./text */ "./node_modules/d3-selection/src/selection/text.js");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./html */ "./node_modules/d3-selection/src/selection/html.js");
/* harmony import */ var _raise__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./raise */ "./node_modules/d3-selection/src/selection/raise.js");
/* harmony import */ var _lower__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lower */ "./node_modules/d3-selection/src/selection/lower.js");
/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./append */ "./node_modules/d3-selection/src/selection/append.js");
/* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./insert */ "./node_modules/d3-selection/src/selection/insert.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./remove */ "./node_modules/d3-selection/src/selection/remove.js");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./clone */ "./node_modules/d3-selection/src/selection/clone.js");
/* harmony import */ var _datum__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./datum */ "./node_modules/d3-selection/src/selection/datum.js");
/* harmony import */ var _on__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./on */ "./node_modules/d3-selection/src/selection/on.js");
/* harmony import */ var _dispatch__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dispatch */ "./node_modules/d3-selection/src/selection/dispatch.js");
































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: _select__WEBPACK_IMPORTED_MODULE_0__["default"],
  selectAll: _selectAll__WEBPACK_IMPORTED_MODULE_1__["default"],
  filter: _filter__WEBPACK_IMPORTED_MODULE_2__["default"],
  data: _data__WEBPACK_IMPORTED_MODULE_3__["default"],
  enter: _enter__WEBPACK_IMPORTED_MODULE_4__["default"],
  exit: _exit__WEBPACK_IMPORTED_MODULE_5__["default"],
  join: _join__WEBPACK_IMPORTED_MODULE_6__["default"],
  merge: _merge__WEBPACK_IMPORTED_MODULE_7__["default"],
  order: _order__WEBPACK_IMPORTED_MODULE_8__["default"],
  sort: _sort__WEBPACK_IMPORTED_MODULE_9__["default"],
  call: _call__WEBPACK_IMPORTED_MODULE_10__["default"],
  nodes: _nodes__WEBPACK_IMPORTED_MODULE_11__["default"],
  node: _node__WEBPACK_IMPORTED_MODULE_12__["default"],
  size: _size__WEBPACK_IMPORTED_MODULE_13__["default"],
  empty: _empty__WEBPACK_IMPORTED_MODULE_14__["default"],
  each: _each__WEBPACK_IMPORTED_MODULE_15__["default"],
  attr: _attr__WEBPACK_IMPORTED_MODULE_16__["default"],
  style: _style__WEBPACK_IMPORTED_MODULE_17__["default"],
  property: _property__WEBPACK_IMPORTED_MODULE_18__["default"],
  classed: _classed__WEBPACK_IMPORTED_MODULE_19__["default"],
  text: _text__WEBPACK_IMPORTED_MODULE_20__["default"],
  html: _html__WEBPACK_IMPORTED_MODULE_21__["default"],
  raise: _raise__WEBPACK_IMPORTED_MODULE_22__["default"],
  lower: _lower__WEBPACK_IMPORTED_MODULE_23__["default"],
  append: _append__WEBPACK_IMPORTED_MODULE_24__["default"],
  insert: _insert__WEBPACK_IMPORTED_MODULE_25__["default"],
  remove: _remove__WEBPACK_IMPORTED_MODULE_26__["default"],
  clone: _clone__WEBPACK_IMPORTED_MODULE_27__["default"],
  datum: _datum__WEBPACK_IMPORTED_MODULE_28__["default"],
  on: _on__WEBPACK_IMPORTED_MODULE_29__["default"],
  dispatch: _dispatch__WEBPACK_IMPORTED_MODULE_30__["default"]
};

/* harmony default export */ __webpack_exports__["default"] = (selection);


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/insert.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/insert.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator */ "./node_modules/d3-selection/src/creator.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector */ "./node_modules/d3-selection/src/selector.js");



function constantNull() {
  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, before) {
  var create = typeof name === "function" ? name : Object(_creator__WEBPACK_IMPORTED_MODULE_0__["default"])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : Object(_selector__WEBPACK_IMPORTED_MODULE_1__["default"])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/join.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/join.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null) update = onupdate(update);
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/lower.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/lower.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(lower);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/merge.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/merge.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](merges, this._parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/node.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/node.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/nodes.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/nodes.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/on.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/on.js ***!
  \*******************************************************/
/*! exports provided: event, default, customEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customEvent", function() { return customEvent; });
var filterEvents = {};

var event = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = event; // Events can be reentrant (e.g., focus).
    event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
});

function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    event = event0;
  }
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/order.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/order.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/property.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/property.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/raise.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/raise.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(raise);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/remove.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/remove.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(remove);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/select.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/select.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector */ "./node_modules/d3-selection/src/selector.js");



/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  if (typeof select !== "function") select = Object(_selector__WEBPACK_IMPORTED_MODULE_1__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, this._parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectAll.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectAll.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _selectorAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectorAll */ "./node_modules/d3-selection/src/selectorAll.js");



/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  if (typeof select !== "function") select = Object(_selectorAll__WEBPACK_IMPORTED_MODULE_1__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/size.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/size.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sort.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sort.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](sortgroups, this._parents).order();
});

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sparse.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sparse.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(update) {
  return new Array(update.length);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/style.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/style.js ***!
  \**********************************************************/
/*! exports provided: default, styleValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleValue", function() { return styleValue; });
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window */ "./node_modules/d3-selection/src/window.js");


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
});

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || Object(_window__WEBPACK_IMPORTED_MODULE_0__["default"])(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/text.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/text.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selector.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/selector.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function none() {}

/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selectorAll.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/selectorAll.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function empty() {
  return [];
}

/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
});


/***/ }),

/***/ "./node_modules/d3-selection/src/sourceEvent.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/sourceEvent.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_on__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/on */ "./node_modules/d3-selection/src/selection/on.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  var current = _selection_on__WEBPACK_IMPORTED_MODULE_0__["event"], source;
  while (source = current.sourceEvent) current = source;
  return current;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/touch.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/touch.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent */ "./node_modules/d3-selection/src/sourceEvent.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");



/* harmony default export */ __webpack_exports__["default"] = (function(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = Object(_sourceEvent__WEBPACK_IMPORTED_MODULE_0__["default"])().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return Object(_point__WEBPACK_IMPORTED_MODULE_1__["default"])(node, touch);
    }
  }

  return null;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/touches.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/touches.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent */ "./node_modules/d3-selection/src/sourceEvent.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");



/* harmony default export */ __webpack_exports__["default"] = (function(node, touches) {
  if (touches == null) touches = Object(_sourceEvent__WEBPACK_IMPORTED_MODULE_0__["default"])().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = Object(_point__WEBPACK_IMPORTED_MODULE_1__["default"])(node, touches[i]);
  }

  return points;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/window.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/window.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
});


/***/ }),

/***/ "./node_modules/d3-textwrap/build/d3-textwrap.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-textwrap/build/d3-textwrap.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports, __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js")) :
    undefined;
}(this, function (exports,d3Selection) { 'use strict';

    var method;
    var verify_bounds;
    var resolve_bounds;
    var resolve_padding;
    var pad;
    var dimensions;
    var wrap;
    var textwrap;
    // test for foreignObject support and determine wrapping strategy
    method = typeof SVGForeignObjectElement === 'undefined' ? 'tspans' : 'foreignobject';

    // accept multiple input types as boundaries
    verify_bounds = function(bounds) {
        var bounds_object,
            bounds_function;
        bounds_function = typeof bounds === 'function';
        if (typeof bounds === 'object' && ! bounds.nodeType) {
            if (! bounds.height || ! bounds.width) {
                console.error('text wrapping bounds must specify height and width');
                return false;
            } else {
                return true;
            }
        }
        // convert a selection to bounds
        if (
            bounds instanceof d3Selection.selection ||
            bounds.nodeType ||
            bounds_function ||
            bounds_object
        ) {
            return true;
        // use input as bounds directly
        } else {
            console.error('invalid bounds specified for text wrapping');
            return false;
        }
    };

    resolve_bounds = function(bounds) {
        var properties,
            dimensions,
            result,
            i;
        properties = ['height', 'width'];
        if (typeof bounds === 'function') {
            dimensions = bounds();
        } else if (bounds.nodeType) {
            dimensions = bounds.getBoundingClientRect();
        } else if (typeof bounds === 'object') {
            dimensions = bounds;
        }
        result = Object.create(null);
        for (i = 0; i < properties.length; i++) {
            result[properties[i]] = dimensions[properties[i]];
        }
        return result;
    };

    resolve_padding = function(padding) {
        var result;
        if (typeof padding === 'function') {
            result = padding();
        } else if (typeof padding === 'number') {
            result = padding;
        } else if (typeof padding === 'undefined') {
            result = 0;
        }
        if (typeof result !== 'number') {
            console.error('padding could not be converted into a number');
        } else {
            return result;
        }
    };

    pad = function(dimensions, padding) {
        var padded;
        padded = {
            height: dimensions.height - padding * 2,
            width: dimensions.width - padding * 2
        };
        return padded;
    };

    dimensions = function(bounds, padding) {
        var padded;
        padded = pad(resolve_bounds(bounds), resolve_padding(padding));
        return padded;
    };


    wrap = {};

    // wrap text using foreignobject html
    wrap.foreignobject = function(text, dimensions, padding) {
        var content,
            parent,
            foreignobject,
            div;
        // extract our desired content from the single text element
        content = text.text();
        // remove the text node and replace with a foreign object
        parent = d3Selection.select(text.node().parentNode);
        text.remove();
        foreignobject = parent.append('foreignObject');
        // add foreign object and set dimensions, position, etc
        foreignobject
            .attr('requiredFeatures', 'http://www.w3.org/TR/SVG11/feature#Extensibility')
            .attr('width', dimensions.width)
            .attr('height', dimensions.height);
        if (typeof padding === 'number') {
            foreignobject
                .attr('x', padding)
                .attr('y', padding);
        }
        // insert an HTML div
        div = foreignobject
            .append('xhtml:div');
        // set div to same dimensions as foreign object
        div
            .style('height', dimensions.height)
            .style('width', dimensions.width)
            // insert text content
            .html(content);
        return div;
    };

    // wrap text using tspans
    wrap.tspans = function(text, dimensions, padding) {
        var pieces,
            piece,
            line_width,
            x_offset,
            tspan,
            previous_content;
        pieces = text.text().split(' ').reverse();
        text.text('');
        tspan = text.append('tspan');
        tspan
            .attr('dx', 0)
            .attr('dy', 0);
        x_offset = 0;
        while (pieces.length > 0) {
            piece = pieces.pop();
            tspan.text(tspan.text() + ' ' + piece);
            line_width = tspan.node().getComputedTextLength() || 0;
            if (line_width > dimensions.width) {
                previous_content = tspan.text()
                    .split(' ')
                    .slice(0, -1)
                    .join(' ');
                tspan.text(previous_content);
                x_offset = tspan.node().getComputedTextLength() * -1;
                tspan = text.append('tspan');
                tspan
                    .attr('dx', x_offset)
                    .attr('dy', '1em')
                    .text(piece);
            }
        }
        if (typeof padding === 'number') {
            text
                .attr('y', text.attr('y') + padding)
                .attr('x', text.attr('x') + padding);
        }
    };

    // factory to generate text wrap functions
    textwrap = function() {
        // text wrap function instance
        var wrapper,
            bounds,
            padding;
        wrapper = function(targets) {
            targets.each(function() {
                d3Selection.select(this).call(wrap[method], dimensions(bounds, padding), resolve_padding(padding));
            });
        };
        // get or set wrapping boundaries
        wrapper.bounds = function(new_bounds) {
            if (new_bounds) {
                if (verify_bounds(new_bounds)) {
                    bounds = new_bounds;
                    return wrapper;
                } else {
                    console.error('invalid text wrapping bounds');
                    return false;
                }
            } else {
                return bounds;
            }
        };
        // get or set padding applied on top of boundaries
        wrapper.padding = function(new_padding) {
            if (new_padding) {
                if (typeof new_padding === 'number' || typeof new_padding === 'function') {
                    padding = new_padding;
                    return wrapper;
                } else {
                    console.error('text wrap padding value must be either a number or a function');
                    return false;
                }
            } else {
                return padding;
            }
        };
        // get or set wrapping method
        wrapper.method = function(new_method) {
            if (new_method) {
                method = new_method;
                return wrapper;
            } else {
                return method;
            }
        };
        return wrapper;
    };

    var textwrap$1 = textwrap;

    exports.selection = d3Selection.selection;
    exports.select = d3Selection.select;
    exports.textwrap = textwrap$1;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

/***/ }),

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

var d3_textwrap = _interopRequireWildcard(__webpack_require__(/*! d3-textwrap */ "./node_modules/d3-textwrap/build/d3-textwrap.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var $ = _jquery.default;
console.log(d3_textwrap); // reusable chart pattern inspired by:
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
      color: d3.scaleOrdinal(d3.schemeCategory10),
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
        } // var wrap = d3.textwrap().method("tspans");


        var wrap = d3_textwrap.textwrap().method("tspans");

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
        // var stylesBase = {
        // 	'opacity': .2
        // };
        // var stylesVisible = {
        // 	'opacity': 1
        // };

        var stylesBase = "opacity: .2;";
        var stylesVisible = "opacity: 1;"; //scales

        var x = d3.scaleLinear().domain([timeBegin, timeEnd]).range([0, w]);
        var x1 = d3.scaleLinear().range([0, w]);
        var y1 = d3.scaleLinear().domain([0, laneLength]).range([0, mainHeight]);
        var y2 = d3.scaleLinear().domain([0, laneLength]).range([0, miniHeight]);
        var efExtent = d3.extent(data_total, function (d) {
          return d.eigenfactor;
        });
        var efScaleMini = d3.scaleLinear().domain(efExtent) // .range([0, 5]);
        .range([miniMinRad, miniMaxRad]);
        var efScaleMain = d3.scaleLinear().domain(efExtent) // .range([0, 5]);
        .range([mainMinRad, mainMaxRad]);
        var efSumScale = d3.scaleLinear().domain(d3.extent(dataByYear, function (d) {
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

        var xAxisMini = d3.axisBottom() // .orient("bottom")
        // .ticks(5)
        .scale(x).tickFormat(d3.format("d"));
        mini.append("g").attr("class", "xaxis").attr("transform", "translate(0," + miniHeight + ")").call(xAxisMini);
        var xAxisMain = d3.axisTop() // .orient("top")
        .scale(x1).tickFormat(d3.format("d"));
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
            }).on('mouseout', contract) // .style(stylesVisible);
            .attr("style", stylesVisible); //label for number of papers

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
        } // var paperLabels = paperItems.append("text")
        // 	.attr("text-anchor", "end")
        // 	.attr("class", "paperLabel")
        // 	.style("display", "none")
        // 	.attr("transform", "translate(-15,0)")  // nudge left
        // 	// .text(function(d) {return d.title;});
        // 	.html(function(d) {return '<a target="_blank" href="' + d.url + '">' + d.title + '</a>';});
        //mini labels
        // mini.append("g").selectAll(".miniLabels")
        // 	.data(data)
        // 	.enter().append("text")
        // 	.text(function(d) {return d.id;})
        // 	.attr("x", function(d) {return x(d.start);})
        // 	.attr("y", function(d) {return y2(d.lane + .5);})
        // 	.attr("dy", ".5ex");
        //brush
        // var brush = d3.svg.brush()


        var brush = d3.brushX() // .x(x)
        .extent([[x.range()[0], 0], [x.range()[1], miniHeight - 1]]) // .on("brush", display);
        .on("end", display);
        var brushEmpty = true;
        mini.append("g").attr("class", "x brush").call(brush).selectAll("rect").attr("y", 1).attr("height", miniHeight - 1);
        var extentLines = [];

        for (var i = 0; i < 2; i++) {
          extentLines.push(chart.append("line").attr("class", "extentLine"));
        }

        function updateExtentLines(left, right) {
          // if (brush.empty()) {
          if (brushEmpty) {
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
        console.log(brush);

        function moveBrush(direction) {
          // if (brush.empty() || minExtent<timeBegin || maxExtent>timeEnd) {
          // if (brush.empty()) {
          if (brushEmpty) {
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
          // var extentSelect = mini.select(".brush").select(".extent");
          var extentSelect = mini.select(".brush").select(".selection");
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
          } // 	// if (brush.empty()) {
          // 	if (d3.event.selection === null) {


          clearBrushIcon.style("display", "none");
          d3.select(".leftArrow").style("display", "none");
          d3.select(".rightArrow").style("display", "none"); // 	} else {
          // 		clearBrushIcon.style("display", "")
          // 			.style("opacity", 0)
          // 			// .style("z-index", -99)
          // 			.attr("transform", constructTranslate(maxExtentScreen-2, 15))
          // 			.transition().duration(300)
          // 			.style("opacity", .4);
          // 		clearBrushIcon.on("click", function() {
          // 			clearBrush();
          // 			contract();
          // 		});
          // 	}
          //
          //
          //
          // 	// Hide main items if the brush is empty
          // 	// if (brush.empty()) {
          // 	if (d3.event.selection === null) {
          // yearItems.style("display", "none");
          // changeExtent(timeBegin, timeEnd, 0);
          //
          // show all main items, but keep the brush hidden

          updateMain(timeBegin, timeEnd); // this will remove the extent lines:

          updateExtentLines(); // 	} else {
          // 		// d3.select(".brush").attr("display", "");
          // 		updateMain(minExtent, maxExtent);
          // 		updateExtentLines(minExtentScreen, maxExtentScreen);
          // 	}
        }

        function updateMain(minExtent, maxExtent) {
          switch (markType) {
            case 'circle':
              var visItems = yearItems.filter(function (d) {
                return d.year < maxExtent && d.year > minExtent;
              });
              console.log(visItems);
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
              // miniItems.style(stylesVisible);

              miniItems.attr("style", stylesVisible);
              miniItems.filter(function (d) {
                console.log(minExtent);
                var match = false; // visItems.forEach(function(dd) {

                visItems.each(function (dd) {
                  if (d.id == dd.firstTitle) {
                    match = true;
                  }
                });
                return match; // }).style(stylesVisible);
              }).attr("style", stylesVisible); //update main item marks

              visItems.attr("transform", function (d) {
                d.x = x1(d.year);
                d.y = y1(d.lane) + mainMinRad;
                return "translate(" + d.x + "," + d.y + ")";
              });
              console.log(yearMarks);
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
              // miniItems.style(stylesBase);

              miniItems.attr("style", stylesBase);
              miniItems.filter(function (d) {
                var match = false; // visItems.forEach(function(dd) {

                visItems.each(function (dd) {
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
          // var transitionStartStyle = {'pointer-events': 'none', 'cursor': 'default'},
          // 	transitionEndStyle = {'pointer-events': 'auto', 'cursor': 'pointer'};

          var transitionStartStyle = "pointer-events: none; cursor: default;",
              transitionEndStyle = "pointer-events: auto; cursor: pointer;"; // sel.style("pointer-events", "none")
          // var line = d3.svg.line().x(function(d) {return d[0]}).y(function(d) {return d[1]});

          var line = d3.line().x(function (d) {
            return d[0];
          }).y(function (d) {
            return d[1];
          }); // linedata will be an array of [x, y] values that start at the year circle and track the paper circles

          var linedata = [];
          linedata.push([0, 0]); // sel.style(transitionStartStyle)

          console.log('dddddd');
          sel.attr("style", transitionStartStyle).transition().duration(dur).attr("transform", function (d, i) {
            linedata.push([afterTransitionX(d, i), afterTransitionY(d, i)]);
            return "translate(" + afterTransitionX(d, i) + "," + afterTransitionY(d, i) + ")";
          }) // .each("start", function() {d3.select(this).classed("expanded", true)})
          .on("start", function () {
            d3.select(this).classed("expanded", true);
          }) // .each("end", function() {d3.select(this).style("pointer-events", "auto");});
          // .each("end", function() {
          .on("end", function () {
            // d3.select(this).style(transitionEndStyle);
            d3.select(this).attr("style", transitionEndStyle);
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
          // d3.transition().duration(dur).each("end", function() {

          d3.transition().duration(dur).on("end", function () {
            thisYearItem.append("path").datum(linedata).attr("class", "joinLine").attr("d", line);
            display();
          });
        } // function contract(yearData) {


        function contract() {
          d3.selectAll(".joinLine").remove();
          var dur = 500; // var sel = paperItems.filter(function(d) {return d.year===yearData.year});

          var sel = d3.selectAll(".expanded"); // console.log(sel.empty());

          sel.transition().duration(dur).attr("transform", "translate(0,0)") // .each("end", function() {
          .on("end", function () {
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
          constructTranslate(initBrushPosition, mainHeight + m[0] + miniHeight / 2)) // .each("end", function() {
          .on("end", function () {
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
            }) // .each("end", function() {
            .on("end", function () {
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

            cursorIcon.transition("demoExpand").delay(transitionTimes[3]).duration(transitionTimes[4]).attr("transform", translate) // .each("end", function() {
            .on("end", function () {
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
            cursorIcon.transition("demoEnd").delay(delay).duration(0).remove() // .each("end", function() {
            .on("end", function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvY3JlYXRlLmpzIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9jcmVhdG9yLmpzIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbG9jYWwuanMiLCJ3ZWJwYWNrOi8vZDNfYXJ0aWNsZV90aW1lbGluZS8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL21hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vZDNfYXJ0aWNsZV90aW1lbGluZS8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL21vdXNlLmpzIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vZDNfYXJ0aWNsZV90aW1lbGluZS8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL25hbWVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vZDNfYXJ0aWNsZV90aW1lbGluZS8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3BvaW50LmpzIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vZDNfYXJ0aWNsZV90aW1lbGluZS8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdEFsbC5qcyIsIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2FwcGVuZC5qcyIsIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2F0dHIuanMiLCJ3ZWJwYWNrOi8vZDNfYXJ0aWNsZV90aW1lbGluZS8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9jYWxsLmpzIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vY2xhc3NlZC5qcyIsIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2Nsb25lLmpzIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZGF0YS5qcyIsIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2RhdHVtLmpzIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZGlzcGF0Y2guanMiLCJ3ZWJwYWNrOi8vZDNfYXJ0aWNsZV90aW1lbGluZS8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9lYWNoLmpzIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZW1wdHkuanMiLCJ3ZWJwYWNrOi8vZDNfYXJ0aWNsZV90aW1lbGluZS8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9lbnRlci5qcyIsIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2V4aXQuanMiLCJ3ZWJwYWNrOi8vZDNfYXJ0aWNsZV90aW1lbGluZS8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vZDNfYXJ0aWNsZV90aW1lbGluZS8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9odG1sLmpzIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZDNfYXJ0aWNsZV90aW1lbGluZS8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9pbnNlcnQuanMiLCJ3ZWJwYWNrOi8vZDNfYXJ0aWNsZV90aW1lbGluZS8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9qb2luLmpzIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vbG93ZXIuanMiLCJ3ZWJwYWNrOi8vZDNfYXJ0aWNsZV90aW1lbGluZS8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9tZXJnZS5qcyIsIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL25vZGUuanMiLCJ3ZWJwYWNrOi8vZDNfYXJ0aWNsZV90aW1lbGluZS8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9ub2Rlcy5qcyIsIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL29uLmpzIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vb3JkZXIuanMiLCJ3ZWJwYWNrOi8vZDNfYXJ0aWNsZV90aW1lbGluZS8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3JhaXNlLmpzIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vcmVtb3ZlLmpzIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0LmpzIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0QWxsLmpzIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2l6ZS5qcyIsIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NvcnQuanMiLCJ3ZWJwYWNrOi8vZDNfYXJ0aWNsZV90aW1lbGluZS8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zcGFyc2UuanMiLCJ3ZWJwYWNrOi8vZDNfYXJ0aWNsZV90aW1lbGluZS8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zdHlsZS5qcyIsIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3RleHQuanMiLCJ3ZWJwYWNrOi8vZDNfYXJ0aWNsZV90aW1lbGluZS8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdG9yLmpzIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3RvckFsbC5qcyIsIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc291cmNlRXZlbnQuanMiLCJ3ZWJwYWNrOi8vZDNfYXJ0aWNsZV90aW1lbGluZS8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3RvdWNoLmpzIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy90b3VjaGVzLmpzIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy93aW5kb3cuanMiLCJ3ZWJwYWNrOi8vZDNfYXJ0aWNsZV90aW1lbGluZS8uL25vZGVfbW9kdWxlcy9kMy10ZXh0d3JhcC9idWlsZC9kMy10ZXh0d3JhcC5qcyIsIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2QzX2FydGljbGVfdGltZWxpbmUvLi9zcmMvdGltZWxpbmVWaXNfTWFpbi5qcyIsIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lL2V4dGVybmFsIFwiZDNcIiIsIndlYnBhY2s6Ly9kM19hcnRpY2xlX3RpbWVsaW5lL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiJCIsImNvbnNvbGUiLCJsb2ciLCJkM190ZXh0d3JhcCIsIlRpbWVsaW5lVmlzIiwib3B0cyIsImRlZmF1bHRzIiwiZWwiLCJkYXRhIiwid2lkdGgiLCJjb2xvciIsImQzIiwic2NhbGVPcmRpbmFsIiwic2NoZW1lQ2F0ZWdvcnkxMCIsImZvcmNlU3RyZW5ndGgiLCJPYmplY3QiLCJhc3NpZ24iLCJfZGF0YSIsInVwZGF0ZURhdGEiLCJoZWlnaHQiLCJpbml0IiwiZHJhdyIsInZhbHVlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic2VsZWN0aW9uIiwib2JqIiwidyIsImgiLCJkYXRhX3RvdGFsIiwiZWFjaCIsImRlY29uc3RydWN0VHJhbnNsYXRlIiwidHJhbnNsYXRlU3RyaW5nIiwicmVwbGFjZSIsInJlZ2V4IiwiUmVnRXhwIiwibWF0Y2giLCJleGVjIiwieCIsInkiLCJjb25zdHJ1Y3RUcmFuc2xhdGUiLCJ3cmFwIiwidGV4dHdyYXAiLCJtZXRob2QiLCJwYXJzZURhdGEiLCJmb3JFYWNoIiwiZCIsImF1dGhvcnMiLCJlaWdlbmZhY3RvciIsInZlbnVlIiwieWVhciIsInVybCIsInNlbGVjdCIsIndpbmRvdyIsIm9uIiwiZGlzcGxheSIsImxhbmUiLCJtYXJrVHlwZSIsImdldFBhcmFtZXRlckJ5TmFtZSIsImRhdGFCeVllYXIiLCJuZXN0Iiwia2V5Iiwic29ydFZhbHVlcyIsImEiLCJiIiwiYXNjZW5kaW5nIiwidGl0bGUiLCJlbnRyaWVzIiwiZmlyc3RUaXRsZSIsInZhbHVlcyIsImlkIiwic3VtX2VpZ2VuZmFjdG9yIiwic3VtIiwiZGQiLCJtYXhEYXRhQnlZZWFyIiwibWF4IiwibGFuZXMiLCJsYW5lTGVuZ3RoIiwidGltZUJlZ2luIiwibWluIiwidGltZUVuZCIsIm0iLCJtaW5pSGVpZ2h0IiwibWFpbkhlaWdodCIsIm1haW5NaW5SYWQiLCJtYWluTWF4UmFkIiwibWluaU1pblJhZCIsIm1pbmlNYXhSYWQiLCJtaW5FeHRlbnQiLCJtYXhFeHRlbnQiLCJzdHlsZXNCYXNlIiwic3R5bGVzVmlzaWJsZSIsInNjYWxlTGluZWFyIiwiZG9tYWluIiwicmFuZ2UiLCJ4MSIsInkxIiwieTIiLCJlZkV4dGVudCIsImV4dGVudCIsImVmU2NhbGVNaW5pIiwiZWZTY2FsZU1haW4iLCJlZlN1bVNjYWxlIiwiY2hhcnRXaWR0aCIsImNoYXJ0SGVpZ2h0IiwiY2hhcnQiLCJhcHBlbmQiLCJhdHRyIiwibWFpbkNvbnRhaW5lciIsIm1haW4iLCJtaW5pQ29udGFpbmVyIiwibWluaSIsIm1haW5MYW5lTGluZXNHIiwiaSIsImxlbiIsIm1haW5MYWJlbEciLCJtYWluTGFiZWwiLCJ0ZXh0Iiwic3R5bGUiLCJib3VuZHMiLCJjYWxsIiwic3ViT2Zmc2V0IiwibWFpbkxhYmVsU3ViIiwibWluaUxhbmVMaW5lc0ciLCJtaW5pTGFiZWwiLCJ4QXhpc01pbmkiLCJheGlzQm90dG9tIiwic2NhbGUiLCJ0aWNrRm9ybWF0IiwiZm9ybWF0IiwieEF4aXNNYWluIiwiYXhpc1RvcCIsInhBeGlzTWFpbk9iaiIsIm1haW5DbGlwUGF0aCIsIm1pbmlJdGVtcyIsInNlbGVjdEFsbCIsImVudGVyIiwicmFkaXVzIiwic3RhY2tJdGVtcyIsIml0ZW1zIiwieWVhcnNMaXN0IiwicHVzaCIsIm1heFJhZCIsIl9fZGF0YV9fIiwidGhpc1llYXJNaW5pIiwiZmlsdGVyIiwibWluaU1hcmtPcGFjaXR5IiwiTWF0aCIsIm1pbmlNYXJrcyIsInllYXJJdGVtcyIsInllYXJNYXJrcyIsImNvbnRyYWN0Iiwic2VsIiwicGFwZXJJdGVtcyIsInRoaXNZZWFySXRlbSIsImV4cGFuZCIsImlkeCIsInNwYW4iLCJqb2luIiwiaHRtbCIsInBhcGVyTWFya3MiLCJiYm94Iiwibm9kZSIsImdldEJCb3giLCJpbnNlcnQiLCJicnVzaCIsImJydXNoWCIsImJydXNoRW1wdHkiLCJleHRlbnRMaW5lcyIsInVwZGF0ZUV4dGVudExpbmVzIiwibGVmdCIsInJpZ2h0Iiwic2Nyb2xsRHVyIiwibW92ZUJydXNoIiwiZGlyZWN0aW9uIiwiY2hhbmdlRXh0ZW50Iiwicm91bmQiLCJzY3JvbGxJdGVtcyIsInpvb21JdGVtcyIsInpvb21Nb3VzZU92ZXIiLCJ6b29tTW91c2VPdXQiLCJzdG9wIiwiZmFkZVRvIiwiY2xlYXJCcnVzaEljb24iLCJldmVudCIsIndoZWVsRGVsdGFZIiwid2hlZWxEZWx0YVgiLCJtaWRwb2ludFllYXIiLCJicnVzaEluaXQiLCJkb2N1bWVudCIsInRyaWdnZXIiLCJ5ZWFyMSIsInllYXIyIiwiZHVyYXRpb24iLCJlYXNlIiwiZGVsYXkiLCJ1bmRlZmluZWQiLCJ0cmFuc2l0aW9uIiwiZXhwYW5kQWxsIiwibWF4RUYiLCJjbGVhckJydXNoIiwibWlkIiwiZXh0ZW50U2VsZWN0IiwibWluRXh0ZW50U2NyZWVuIiwibWF4RXh0ZW50U2NyZWVuIiwiaW52ZXJ0IiwiY2xhc3NlZCIsInVwZGF0ZU1haW4iLCJ2aXNJdGVtcyIsIm5vdFZpc0l0ZW1zIiwiaXRlbSIsIl9yb3RhdGUiLCJyb3RhdGlvbiIsImxhYmVscyIsImFscGhhIiwic3BhY2luZyIsInJlbGF4IiwiYWdhaW4iLCJkYSIsImF4IiwiZGIiLCJieCIsImRlbHRhWCIsImFicyIsInNpZ24iLCJsYWJlbHNDb2xsaXNpb25EZXRlY3QiLCJhZnRlclRyYW5zaXRpb25YIiwiYWZ0ZXJUcmFuc2l0aW9uWSIsInllYXJJdGVtIiwidGhpc1llYXIiLCJkdXIiLCJ0cmFuc2l0aW9uU3RhcnRTdHlsZSIsInRyYW5zaXRpb25FbmRTdHlsZSIsImxpbmUiLCJsaW5lZGF0YSIsInN0eWxlVHdlZW4iLCJpbnRlcnBvbGF0ZSIsImdldFByb3BlcnR5VmFsdWUiLCJkYXR1bSIsInJlbW92ZSIsImNoZWNrU2luZ2xlTGFiZWwiLCJ3cmFwSW5BbmNob3IiLCJzdGFibGVfdXJsIiwidGhpc0xhYmVsIiwid29yZHMiLCJzcGxpdCIsImdpdmVVcFRocmVzaG9sZCIsInZpZXdMZWZ0RWRnZSIsInBvc2l0aW9uIiwibGVmdFBvcyIsIm51bVdvcmRzIiwic2xpY2UiLCJzaG9ydGVuZWRUaXRsZSIsImRlbW9Jbml0IiwiZGlzYWJsZUludGVyYWN0aW9uIiwiZGVtb1F1aXQiLCJjdXJzb3JJY29uIiwidHJhbnNpdGlvblRpbWVzIiwieWVhclJhbmdlIiwiaW5pdEJydXNoUmFuZ2UiLCJmbG9vciIsImluaXRCcnVzaFBvc2l0aW9uIiwibnVtVmlzSXRlbXMiLCJzaXplIiwic2VsSW5kZXgiLCJjZWlsIiwiZGVtb1llYXJJdGVtIiwiZGVtb0RyYXdCcnVzaCIsImRlbW9FbmQiLCJ4UG9zIiwiZGVtb0V4cGFuZCIsImRlbW9ZZWFyTWFyayIsInRyYW5zbGF0ZVN0ciIsInRyYW5zbGF0ZUNvb3JkIiwidHJhbnNsYXRlIiwiZW5hYmxlSW50ZXJhY3Rpb24iLCJ0ZXN0UGxhY2VDdXJzb3IiLCJ0ZXN0Q2hhbmdlSGVpZ2h0IiwiY3Vyck1haW5IZWlnaHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxz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O0FBQzFHLElBQUksU0FDa0Q7QUFDdEQsQ0FBQyx1Q0FBdUM7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNHO0FBQ0E7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztlQUdjcE0sVzs7Ozs7Ozs7Ozs7OztBQzNrRGYsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsb0QiLCJmaWxlIjoiZDNfYXJ0aWNsZV90aW1lbGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImQzXCIpLCByZXF1aXJlKFwialF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZDNfYXJ0aWNsZV90aW1lbGluZVwiLCBbXCJkM1wiLCBcImpRdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkM19hcnRpY2xlX3RpbWVsaW5lXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiZDNcIiksIHJlcXVpcmUoXCJqUXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImQzX2FydGljbGVfdGltZWxpbmVcIl0gPSBmYWN0b3J5KHJvb3RbXCJkM1wiXSwgcm9vdFtcImpRdWVyeVwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cbiIsImltcG9ydCBjcmVhdG9yIGZyb20gXCIuL2NyZWF0b3JcIjtcbmltcG9ydCBzZWxlY3QgZnJvbSBcIi4vc2VsZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHNlbGVjdChjcmVhdG9yKG5hbWUpLmNhbGwoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSk7XG59XG4iLCJpbXBvcnQgbmFtZXNwYWNlIGZyb20gXCIuL25hbWVzcGFjZVwiO1xuaW1wb3J0IHt4aHRtbH0gZnJvbSBcIi4vbmFtZXNwYWNlc1wiO1xuXG5mdW5jdGlvbiBjcmVhdG9ySW5oZXJpdChuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgZG9jdW1lbnQgPSB0aGlzLm93bmVyRG9jdW1lbnQsXG4gICAgICAgIHVyaSA9IHRoaXMubmFtZXNwYWNlVVJJO1xuICAgIHJldHVybiB1cmkgPT09IHhodG1sICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IHhodG1sXG4gICAgICAgID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKVxuICAgICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh1cmksIG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdG9yRml4ZWQoZnVsbG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIGZ1bGxuYW1lID0gbmFtZXNwYWNlKG5hbWUpO1xuICByZXR1cm4gKGZ1bGxuYW1lLmxvY2FsXG4gICAgICA/IGNyZWF0b3JGaXhlZFxuICAgICAgOiBjcmVhdG9ySW5oZXJpdCkoZnVsbG5hbWUpO1xufVxuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGNyZWF0ZX0gZnJvbSBcIi4vY3JlYXRlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3JlYXRvcn0gZnJvbSBcIi4vY3JlYXRvclwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGxvY2FsfSBmcm9tIFwiLi9sb2NhbFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1hdGNoZXJ9IGZyb20gXCIuL21hdGNoZXJcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBtb3VzZX0gZnJvbSBcIi4vbW91c2VcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBuYW1lc3BhY2V9IGZyb20gXCIuL25hbWVzcGFjZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG5hbWVzcGFjZXN9IGZyb20gXCIuL25hbWVzcGFjZXNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjbGllbnRQb2ludH0gZnJvbSBcIi4vcG9pbnRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzZWxlY3R9IGZyb20gXCIuL3NlbGVjdFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdEFsbH0gZnJvbSBcIi4vc2VsZWN0QWxsXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc2VsZWN0aW9ufSBmcm9tIFwiLi9zZWxlY3Rpb24vaW5kZXhcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzZWxlY3Rvcn0gZnJvbSBcIi4vc2VsZWN0b3JcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzZWxlY3RvckFsbH0gZnJvbSBcIi4vc2VsZWN0b3JBbGxcIjtcbmV4cG9ydCB7c3R5bGVWYWx1ZSBhcyBzdHlsZX0gZnJvbSBcIi4vc2VsZWN0aW9uL3N0eWxlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdG91Y2h9IGZyb20gXCIuL3RvdWNoXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdG91Y2hlc30gZnJvbSBcIi4vdG91Y2hlc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHdpbmRvd30gZnJvbSBcIi4vd2luZG93XCI7XG5leHBvcnQge2V2ZW50LCBjdXN0b21FdmVudH0gZnJvbSBcIi4vc2VsZWN0aW9uL29uXCI7XG4iLCJ2YXIgbmV4dElkID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9jYWwoKSB7XG4gIHJldHVybiBuZXcgTG9jYWw7XG59XG5cbmZ1bmN0aW9uIExvY2FsKCkge1xuICB0aGlzLl8gPSBcIkBcIiArICgrK25leHRJZCkudG9TdHJpbmcoMzYpO1xufVxuXG5Mb2NhbC5wcm90b3R5cGUgPSBsb2NhbC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBMb2NhbCxcbiAgZ2V0OiBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIGlkID0gdGhpcy5fO1xuICAgIHdoaWxlICghKGlkIGluIG5vZGUpKSBpZiAoIShub2RlID0gbm9kZS5wYXJlbnROb2RlKSkgcmV0dXJuO1xuICAgIHJldHVybiBub2RlW2lkXTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihub2RlLCB2YWx1ZSkge1xuICAgIHJldHVybiBub2RlW3RoaXMuX10gPSB2YWx1ZTtcbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbihub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuXyBpbiBub2RlICYmIGRlbGV0ZSBub2RlW3RoaXMuX107XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fO1xuICB9XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9O1xufVxuIiwiaW1wb3J0IHNvdXJjZUV2ZW50IGZyb20gXCIuL3NvdXJjZUV2ZW50XCI7XG5pbXBvcnQgcG9pbnQgZnJvbSBcIi4vcG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSkge1xuICB2YXIgZXZlbnQgPSBzb3VyY2VFdmVudCgpO1xuICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXMpIGV2ZW50ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gIHJldHVybiBwb2ludChub2RlLCBldmVudCk7XG59XG4iLCJpbXBvcnQgbmFtZXNwYWNlcyBmcm9tIFwiLi9uYW1lc3BhY2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIHByZWZpeCA9IG5hbWUgKz0gXCJcIiwgaSA9IHByZWZpeC5pbmRleE9mKFwiOlwiKTtcbiAgaWYgKGkgPj0gMCAmJiAocHJlZml4ID0gbmFtZS5zbGljZSgwLCBpKSkgIT09IFwieG1sbnNcIikgbmFtZSA9IG5hbWUuc2xpY2UoaSArIDEpO1xuICByZXR1cm4gbmFtZXNwYWNlcy5oYXNPd25Qcm9wZXJ0eShwcmVmaXgpID8ge3NwYWNlOiBuYW1lc3BhY2VzW3ByZWZpeF0sIGxvY2FsOiBuYW1lfSA6IG5hbWU7XG59XG4iLCJleHBvcnQgdmFyIHhodG1sID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3ZnOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHhodG1sOiB4aHRtbCxcbiAgeGxpbms6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLFxuICB4bWw6IFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCIsXG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvXCJcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlLCBldmVudCkge1xuICB2YXIgc3ZnID0gbm9kZS5vd25lclNWR0VsZW1lbnQgfHwgbm9kZTtcblxuICBpZiAoc3ZnLmNyZWF0ZVNWR1BvaW50KSB7XG4gICAgdmFyIHBvaW50ID0gc3ZnLmNyZWF0ZVNWR1BvaW50KCk7XG4gICAgcG9pbnQueCA9IGV2ZW50LmNsaWVudFgsIHBvaW50LnkgPSBldmVudC5jbGllbnRZO1xuICAgIHBvaW50ID0gcG9pbnQubWF0cml4VHJhbnNmb3JtKG5vZGUuZ2V0U2NyZWVuQ1RNKCkuaW52ZXJzZSgpKTtcbiAgICByZXR1cm4gW3BvaW50LngsIHBvaW50LnldO1xuICB9XG5cbiAgdmFyIHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4gW2V2ZW50LmNsaWVudFggLSByZWN0LmxlZnQgLSBub2RlLmNsaWVudExlZnQsIGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcCAtIG5vZGUuY2xpZW50VG9wXTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9uLCByb290fSBmcm9tIFwiLi9zZWxlY3Rpb24vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIlxuICAgICAgPyBuZXcgU2VsZWN0aW9uKFtbZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcildXSwgW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudF0pXG4gICAgICA6IG5ldyBTZWxlY3Rpb24oW1tzZWxlY3Rvcl1dLCByb290KTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9uLCByb290fSBmcm9tIFwiLi9zZWxlY3Rpb24vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIlxuICAgICAgPyBuZXcgU2VsZWN0aW9uKFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKV0sIFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRdKVxuICAgICAgOiBuZXcgU2VsZWN0aW9uKFtzZWxlY3RvciA9PSBudWxsID8gW10gOiBzZWxlY3Rvcl0sIHJvb3QpO1xufVxuIiwiaW1wb3J0IGNyZWF0b3IgZnJvbSBcIi4uL2NyZWF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgY3JlYXRlID0gdHlwZW9mIG5hbWUgPT09IFwiZnVuY3Rpb25cIiA/IG5hbWUgOiBjcmVhdG9yKG5hbWUpO1xuICByZXR1cm4gdGhpcy5zZWxlY3QoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwZW5kQ2hpbGQoY3JlYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9KTtcbn1cbiIsImltcG9ydCBuYW1lc3BhY2UgZnJvbSBcIi4uL25hbWVzcGFjZVwiO1xuXG5mdW5jdGlvbiBhdHRyUmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyUmVtb3ZlTlMoZnVsbG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50KG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJDb25zdGFudE5TKGZ1bGxuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwsIHZhbHVlKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgZWxzZSB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckZ1bmN0aW9uTlMoZnVsbG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICAgIGVsc2UgdGhpcy5zZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwsIHYpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSk7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIG5vZGUgPSB0aGlzLm5vZGUoKTtcbiAgICByZXR1cm4gZnVsbG5hbWUubG9jYWxcbiAgICAgICAgPyBub2RlLmdldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbClcbiAgICAgICAgOiBub2RlLmdldEF0dHJpYnV0ZShmdWxsbmFtZSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICA/IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJSZW1vdmVOUyA6IGF0dHJSZW1vdmUpIDogKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJGdW5jdGlvbk5TIDogYXR0ckZ1bmN0aW9uKVxuICAgICAgOiAoZnVsbG5hbWUubG9jYWwgPyBhdHRyQ29uc3RhbnROUyA6IGF0dHJDb25zdGFudCkpKShmdWxsbmFtZSwgdmFsdWUpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHNbMF07XG4gIGFyZ3VtZW50c1swXSA9IHRoaXM7XG4gIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0aGlzO1xufVxuIiwiZnVuY3Rpb24gY2xhc3NBcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy50cmltKCkuc3BsaXQoL158XFxzKy8pO1xufVxuXG5mdW5jdGlvbiBjbGFzc0xpc3Qobm9kZSkge1xuICByZXR1cm4gbm9kZS5jbGFzc0xpc3QgfHwgbmV3IENsYXNzTGlzdChub2RlKTtcbn1cblxuZnVuY3Rpb24gQ2xhc3NMaXN0KG5vZGUpIHtcbiAgdGhpcy5fbm9kZSA9IG5vZGU7XG4gIHRoaXMuX25hbWVzID0gY2xhc3NBcnJheShub2RlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCIpO1xufVxuXG5DbGFzc0xpc3QucHJvdG90eXBlID0ge1xuICBhZGQ6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgaSA9IHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSk7XG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICB0aGlzLl9uYW1lcy5wdXNoKG5hbWUpO1xuICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLl9uYW1lcy5qb2luKFwiIFwiKSk7XG4gICAgfVxuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgaSA9IHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSk7XG4gICAgaWYgKGkgPj0gMCkge1xuICAgICAgdGhpcy5fbmFtZXMuc3BsaWNlKGksIDEpO1xuICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLl9uYW1lcy5qb2luKFwiIFwiKSk7XG4gICAgfVxuICB9LFxuICBjb250YWluczogZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lcy5pbmRleE9mKG5hbWUpID49IDA7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNsYXNzZWRBZGQobm9kZSwgbmFtZXMpIHtcbiAgdmFyIGxpc3QgPSBjbGFzc0xpc3Qobm9kZSksIGkgPSAtMSwgbiA9IG5hbWVzLmxlbmd0aDtcbiAgd2hpbGUgKCsraSA8IG4pIGxpc3QuYWRkKG5hbWVzW2ldKTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZFJlbW92ZShub2RlLCBuYW1lcykge1xuICB2YXIgbGlzdCA9IGNsYXNzTGlzdChub2RlKSwgaSA9IC0xLCBuID0gbmFtZXMubGVuZ3RoO1xuICB3aGlsZSAoKytpIDwgbikgbGlzdC5yZW1vdmUobmFtZXNbaV0pO1xufVxuXG5mdW5jdGlvbiBjbGFzc2VkVHJ1ZShuYW1lcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY2xhc3NlZEFkZCh0aGlzLCBuYW1lcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRGYWxzZShuYW1lcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY2xhc3NlZFJlbW92ZSh0aGlzLCBuYW1lcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRGdW5jdGlvbihuYW1lcywgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICh2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpID8gY2xhc3NlZEFkZCA6IGNsYXNzZWRSZW1vdmUpKHRoaXMsIG5hbWVzKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIG5hbWVzID0gY2xhc3NBcnJheShuYW1lICsgXCJcIik7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIGxpc3QgPSBjbGFzc0xpc3QodGhpcy5ub2RlKCkpLCBpID0gLTEsIG4gPSBuYW1lcy5sZW5ndGg7XG4gICAgd2hpbGUgKCsraSA8IG4pIGlmICghbGlzdC5jb250YWlucyhuYW1lc1tpXSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVhY2goKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IGNsYXNzZWRGdW5jdGlvbiA6IHZhbHVlXG4gICAgICA/IGNsYXNzZWRUcnVlXG4gICAgICA6IGNsYXNzZWRGYWxzZSkobmFtZXMsIHZhbHVlKSk7XG59XG4iLCJmdW5jdGlvbiBzZWxlY3Rpb25fY2xvbmVTaGFsbG93KCkge1xuICB2YXIgY2xvbmUgPSB0aGlzLmNsb25lTm9kZShmYWxzZSksIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgcmV0dXJuIHBhcmVudCA/IHBhcmVudC5pbnNlcnRCZWZvcmUoY2xvbmUsIHRoaXMubmV4dFNpYmxpbmcpIDogY2xvbmU7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGlvbl9jbG9uZURlZXAoKSB7XG4gIHZhciBjbG9uZSA9IHRoaXMuY2xvbmVOb2RlKHRydWUpLCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gIHJldHVybiBwYXJlbnQgPyBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNsb25lLCB0aGlzLm5leHRTaWJsaW5nKSA6IGNsb25lO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkZWVwKSB7XG4gIHJldHVybiB0aGlzLnNlbGVjdChkZWVwID8gc2VsZWN0aW9uX2Nsb25lRGVlcCA6IHNlbGVjdGlvbl9jbG9uZVNoYWxsb3cpO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQge0VudGVyTm9kZX0gZnJvbSBcIi4vZW50ZXJcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi4vY29uc3RhbnRcIjtcblxudmFyIGtleVByZWZpeCA9IFwiJFwiOyAvLyBQcm90ZWN0IGFnYWluc3Qga2V5cyBsaWtlIOKAnF9fcHJvdG9fX+KAnS5cblxuZnVuY3Rpb24gYmluZEluZGV4KHBhcmVudCwgZ3JvdXAsIGVudGVyLCB1cGRhdGUsIGV4aXQsIGRhdGEpIHtcbiAgdmFyIGkgPSAwLFxuICAgICAgbm9kZSxcbiAgICAgIGdyb3VwTGVuZ3RoID0gZ3JvdXAubGVuZ3RoLFxuICAgICAgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoO1xuXG4gIC8vIFB1dCBhbnkgbm9uLW51bGwgbm9kZXMgdGhhdCBmaXQgaW50byB1cGRhdGUuXG4gIC8vIFB1dCBhbnkgbnVsbCBub2RlcyBpbnRvIGVudGVyLlxuICAvLyBQdXQgYW55IHJlbWFpbmluZyBkYXRhIGludG8gZW50ZXIuXG4gIGZvciAoOyBpIDwgZGF0YUxlbmd0aDsgKytpKSB7XG4gICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgbm9kZS5fX2RhdGFfXyA9IGRhdGFbaV07XG4gICAgICB1cGRhdGVbaV0gPSBub2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRlcltpXSA9IG5ldyBFbnRlck5vZGUocGFyZW50LCBkYXRhW2ldKTtcbiAgICB9XG4gIH1cblxuICAvLyBQdXQgYW55IG5vbi1udWxsIG5vZGVzIHRoYXQgZG9u4oCZdCBmaXQgaW50byBleGl0LlxuICBmb3IgKDsgaSA8IGdyb3VwTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICBleGl0W2ldID0gbm9kZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYmluZEtleShwYXJlbnQsIGdyb3VwLCBlbnRlciwgdXBkYXRlLCBleGl0LCBkYXRhLCBrZXkpIHtcbiAgdmFyIGksXG4gICAgICBub2RlLFxuICAgICAgbm9kZUJ5S2V5VmFsdWUgPSB7fSxcbiAgICAgIGdyb3VwTGVuZ3RoID0gZ3JvdXAubGVuZ3RoLFxuICAgICAgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoLFxuICAgICAga2V5VmFsdWVzID0gbmV3IEFycmF5KGdyb3VwTGVuZ3RoKSxcbiAgICAgIGtleVZhbHVlO1xuXG4gIC8vIENvbXB1dGUgdGhlIGtleSBmb3IgZWFjaCBub2RlLlxuICAvLyBJZiBtdWx0aXBsZSBub2RlcyBoYXZlIHRoZSBzYW1lIGtleSwgdGhlIGR1cGxpY2F0ZXMgYXJlIGFkZGVkIHRvIGV4aXQuXG4gIGZvciAoaSA9IDA7IGkgPCBncm91cExlbmd0aDsgKytpKSB7XG4gICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAga2V5VmFsdWVzW2ldID0ga2V5VmFsdWUgPSBrZXlQcmVmaXggKyBrZXkuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCk7XG4gICAgICBpZiAoa2V5VmFsdWUgaW4gbm9kZUJ5S2V5VmFsdWUpIHtcbiAgICAgICAgZXhpdFtpXSA9IG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlQnlLZXlWYWx1ZVtrZXlWYWx1ZV0gPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENvbXB1dGUgdGhlIGtleSBmb3IgZWFjaCBkYXR1bS5cbiAgLy8gSWYgdGhlcmUgYSBub2RlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGtleSwgam9pbiBhbmQgYWRkIGl0IHRvIHVwZGF0ZS5cbiAgLy8gSWYgdGhlcmUgaXMgbm90IChvciB0aGUga2V5IGlzIGEgZHVwbGljYXRlKSwgYWRkIGl0IHRvIGVudGVyLlxuICBmb3IgKGkgPSAwOyBpIDwgZGF0YUxlbmd0aDsgKytpKSB7XG4gICAga2V5VmFsdWUgPSBrZXlQcmVmaXggKyBrZXkuY2FsbChwYXJlbnQsIGRhdGFbaV0sIGksIGRhdGEpO1xuICAgIGlmIChub2RlID0gbm9kZUJ5S2V5VmFsdWVba2V5VmFsdWVdKSB7XG4gICAgICB1cGRhdGVbaV0gPSBub2RlO1xuICAgICAgbm9kZS5fX2RhdGFfXyA9IGRhdGFbaV07XG4gICAgICBub2RlQnlLZXlWYWx1ZVtrZXlWYWx1ZV0gPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRlcltpXSA9IG5ldyBFbnRlck5vZGUocGFyZW50LCBkYXRhW2ldKTtcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgYW55IHJlbWFpbmluZyBub2RlcyB0aGF0IHdlcmUgbm90IGJvdW5kIHRvIGRhdGEgdG8gZXhpdC5cbiAgZm9yIChpID0gMDsgaSA8IGdyb3VwTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgKG5vZGVCeUtleVZhbHVlW2tleVZhbHVlc1tpXV0gPT09IG5vZGUpKSB7XG4gICAgICBleGl0W2ldID0gbm9kZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgZGF0YSA9IG5ldyBBcnJheSh0aGlzLnNpemUoKSksIGogPSAtMTtcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24oZCkgeyBkYXRhWysral0gPSBkOyB9KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHZhciBiaW5kID0ga2V5ID8gYmluZEtleSA6IGJpbmRJbmRleCxcbiAgICAgIHBhcmVudHMgPSB0aGlzLl9wYXJlbnRzLFxuICAgICAgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdmFsdWUgPSBjb25zdGFudCh2YWx1ZSk7XG5cbiAgZm9yICh2YXIgbSA9IGdyb3Vwcy5sZW5ndGgsIHVwZGF0ZSA9IG5ldyBBcnJheShtKSwgZW50ZXIgPSBuZXcgQXJyYXkobSksIGV4aXQgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgdmFyIHBhcmVudCA9IHBhcmVudHNbal0sXG4gICAgICAgIGdyb3VwID0gZ3JvdXBzW2pdLFxuICAgICAgICBncm91cExlbmd0aCA9IGdyb3VwLmxlbmd0aCxcbiAgICAgICAgZGF0YSA9IHZhbHVlLmNhbGwocGFyZW50LCBwYXJlbnQgJiYgcGFyZW50Ll9fZGF0YV9fLCBqLCBwYXJlbnRzKSxcbiAgICAgICAgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoLFxuICAgICAgICBlbnRlckdyb3VwID0gZW50ZXJbal0gPSBuZXcgQXJyYXkoZGF0YUxlbmd0aCksXG4gICAgICAgIHVwZGF0ZUdyb3VwID0gdXBkYXRlW2pdID0gbmV3IEFycmF5KGRhdGFMZW5ndGgpLFxuICAgICAgICBleGl0R3JvdXAgPSBleGl0W2pdID0gbmV3IEFycmF5KGdyb3VwTGVuZ3RoKTtcblxuICAgIGJpbmQocGFyZW50LCBncm91cCwgZW50ZXJHcm91cCwgdXBkYXRlR3JvdXAsIGV4aXRHcm91cCwgZGF0YSwga2V5KTtcblxuICAgIC8vIE5vdyBjb25uZWN0IHRoZSBlbnRlciBub2RlcyB0byB0aGVpciBmb2xsb3dpbmcgdXBkYXRlIG5vZGUsIHN1Y2ggdGhhdFxuICAgIC8vIGFwcGVuZENoaWxkIGNhbiBpbnNlcnQgdGhlIG1hdGVyaWFsaXplZCBlbnRlciBub2RlIGJlZm9yZSB0aGlzIG5vZGUsXG4gICAgLy8gcmF0aGVyIHRoYW4gYXQgdGhlIGVuZCBvZiB0aGUgcGFyZW50IG5vZGUuXG4gICAgZm9yICh2YXIgaTAgPSAwLCBpMSA9IDAsIHByZXZpb3VzLCBuZXh0OyBpMCA8IGRhdGFMZW5ndGg7ICsraTApIHtcbiAgICAgIGlmIChwcmV2aW91cyA9IGVudGVyR3JvdXBbaTBdKSB7XG4gICAgICAgIGlmIChpMCA+PSBpMSkgaTEgPSBpMCArIDE7XG4gICAgICAgIHdoaWxlICghKG5leHQgPSB1cGRhdGVHcm91cFtpMV0pICYmICsraTEgPCBkYXRhTGVuZ3RoKTtcbiAgICAgICAgcHJldmlvdXMuX25leHQgPSBuZXh0IHx8IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlID0gbmV3IFNlbGVjdGlvbih1cGRhdGUsIHBhcmVudHMpO1xuICB1cGRhdGUuX2VudGVyID0gZW50ZXI7XG4gIHVwZGF0ZS5fZXhpdCA9IGV4aXQ7XG4gIHJldHVybiB1cGRhdGU7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLnByb3BlcnR5KFwiX19kYXRhX19cIiwgdmFsdWUpXG4gICAgICA6IHRoaXMubm9kZSgpLl9fZGF0YV9fO1xufVxuIiwiaW1wb3J0IGRlZmF1bHRWaWV3IGZyb20gXCIuLi93aW5kb3dcIjtcblxuZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChub2RlLCB0eXBlLCBwYXJhbXMpIHtcbiAgdmFyIHdpbmRvdyA9IGRlZmF1bHRWaWV3KG5vZGUpLFxuICAgICAgZXZlbnQgPSB3aW5kb3cuQ3VzdG9tRXZlbnQ7XG5cbiAgaWYgKHR5cGVvZiBldmVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZXZlbnQgPSBuZXcgZXZlbnQodHlwZSwgcGFyYW1zKTtcbiAgfSBlbHNlIHtcbiAgICBldmVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO1xuICAgIGlmIChwYXJhbXMpIGV2ZW50LmluaXRFdmVudCh0eXBlLCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUpLCBldmVudC5kZXRhaWwgPSBwYXJhbXMuZGV0YWlsO1xuICAgIGVsc2UgZXZlbnQuaW5pdEV2ZW50KHR5cGUsIGZhbHNlLCBmYWxzZSk7XG4gIH1cblxuICBub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaENvbnN0YW50KHR5cGUsIHBhcmFtcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoRXZlbnQodGhpcywgdHlwZSwgcGFyYW1zKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hGdW5jdGlvbih0eXBlLCBwYXJhbXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkaXNwYXRjaEV2ZW50KHRoaXMsIHR5cGUsIHBhcmFtcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odHlwZSwgcGFyYW1zKSB7XG4gIHJldHVybiB0aGlzLmVhY2goKHR5cGVvZiBwYXJhbXMgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyBkaXNwYXRjaEZ1bmN0aW9uXG4gICAgICA6IGRpc3BhdGNoQ29uc3RhbnQpKHR5cGUsIHBhcmFtcykpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2spIHtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAwLCBtID0gZ3JvdXBzLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gMCwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZTsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkgY2FsbGJhY2suY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICF0aGlzLm5vZGUoKTtcbn1cbiIsImltcG9ydCBzcGFyc2UgZnJvbSBcIi4vc3BhcnNlXCI7XG5pbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHRoaXMuX2VudGVyIHx8IHRoaXMuX2dyb3Vwcy5tYXAoc3BhcnNlKSwgdGhpcy5fcGFyZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFbnRlck5vZGUocGFyZW50LCBkYXR1bSkge1xuICB0aGlzLm93bmVyRG9jdW1lbnQgPSBwYXJlbnQub3duZXJEb2N1bWVudDtcbiAgdGhpcy5uYW1lc3BhY2VVUkkgPSBwYXJlbnQubmFtZXNwYWNlVVJJO1xuICB0aGlzLl9uZXh0ID0gbnVsbDtcbiAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICB0aGlzLl9fZGF0YV9fID0gZGF0dW07XG59XG5cbkVudGVyTm9kZS5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBFbnRlck5vZGUsXG4gIGFwcGVuZENoaWxkOiBmdW5jdGlvbihjaGlsZCkgeyByZXR1cm4gdGhpcy5fcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgdGhpcy5fbmV4dCk7IH0sXG4gIGluc2VydEJlZm9yZTogZnVuY3Rpb24oY2hpbGQsIG5leHQpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5pbnNlcnRCZWZvcmUoY2hpbGQsIG5leHQpOyB9LFxuICBxdWVyeVNlbGVjdG9yOiBmdW5jdGlvbihzZWxlY3RvcikgeyByZXR1cm4gdGhpcy5fcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpOyB9LFxuICBxdWVyeVNlbGVjdG9yQWxsOiBmdW5jdGlvbihzZWxlY3RvcikgeyByZXR1cm4gdGhpcy5fcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpOyB9XG59O1xuIiwiaW1wb3J0IHNwYXJzZSBmcm9tIFwiLi9zcGFyc2VcIjtcbmltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24odGhpcy5fZXhpdCB8fCB0aGlzLl9ncm91cHMubWFwKHNwYXJzZSksIHRoaXMuX3BhcmVudHMpO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgbWF0Y2hlciBmcm9tIFwiLi4vbWF0Y2hlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXRjaCkge1xuICBpZiAodHlwZW9mIG1hdGNoICE9PSBcImZ1bmN0aW9uXCIpIG1hdGNoID0gbWF0Y2hlcihtYXRjaCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzdWJncm91cCA9IHN1Ymdyb3Vwc1tqXSA9IFtdLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIG1hdGNoLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApKSB7XG4gICAgICAgIHN1Ymdyb3VwLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc3ViZ3JvdXBzLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsImZ1bmN0aW9uIGh0bWxSZW1vdmUoKSB7XG4gIHRoaXMuaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gaHRtbENvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlubmVySFRNTCA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBodG1sRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmlubmVySFRNTCA9IHYgPT0gbnVsbCA/IFwiXCIgOiB2O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2godmFsdWUgPT0gbnVsbFxuICAgICAgICAgID8gaHRtbFJlbW92ZSA6ICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gaHRtbEZ1bmN0aW9uXG4gICAgICAgICAgOiBodG1sQ29uc3RhbnQpKHZhbHVlKSlcbiAgICAgIDogdGhpcy5ub2RlKCkuaW5uZXJIVE1MO1xufVxuIiwiaW1wb3J0IHNlbGVjdGlvbl9zZWxlY3QgZnJvbSBcIi4vc2VsZWN0XCI7XG5pbXBvcnQgc2VsZWN0aW9uX3NlbGVjdEFsbCBmcm9tIFwiLi9zZWxlY3RBbGxcIjtcbmltcG9ydCBzZWxlY3Rpb25fZmlsdGVyIGZyb20gXCIuL2ZpbHRlclwiO1xuaW1wb3J0IHNlbGVjdGlvbl9kYXRhIGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCBzZWxlY3Rpb25fZW50ZXIgZnJvbSBcIi4vZW50ZXJcIjtcbmltcG9ydCBzZWxlY3Rpb25fZXhpdCBmcm9tIFwiLi9leGl0XCI7XG5pbXBvcnQgc2VsZWN0aW9uX2pvaW4gZnJvbSBcIi4vam9pblwiO1xuaW1wb3J0IHNlbGVjdGlvbl9tZXJnZSBmcm9tIFwiLi9tZXJnZVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9vcmRlciBmcm9tIFwiLi9vcmRlclwiO1xuaW1wb3J0IHNlbGVjdGlvbl9zb3J0IGZyb20gXCIuL3NvcnRcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2FsbCBmcm9tIFwiLi9jYWxsXCI7XG5pbXBvcnQgc2VsZWN0aW9uX25vZGVzIGZyb20gXCIuL25vZGVzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX25vZGUgZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9zaXplIGZyb20gXCIuL3NpemVcIjtcbmltcG9ydCBzZWxlY3Rpb25fZW1wdHkgZnJvbSBcIi4vZW1wdHlcIjtcbmltcG9ydCBzZWxlY3Rpb25fZWFjaCBmcm9tIFwiLi9lYWNoXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2F0dHIgZnJvbSBcIi4vYXR0clwiO1xuaW1wb3J0IHNlbGVjdGlvbl9zdHlsZSBmcm9tIFwiLi9zdHlsZVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9wcm9wZXJ0eSBmcm9tIFwiLi9wcm9wZXJ0eVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9jbGFzc2VkIGZyb20gXCIuL2NsYXNzZWRcIjtcbmltcG9ydCBzZWxlY3Rpb25fdGV4dCBmcm9tIFwiLi90ZXh0XCI7XG5pbXBvcnQgc2VsZWN0aW9uX2h0bWwgZnJvbSBcIi4vaHRtbFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9yYWlzZSBmcm9tIFwiLi9yYWlzZVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9sb3dlciBmcm9tIFwiLi9sb3dlclwiO1xuaW1wb3J0IHNlbGVjdGlvbl9hcHBlbmQgZnJvbSBcIi4vYXBwZW5kXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2luc2VydCBmcm9tIFwiLi9pbnNlcnRcIjtcbmltcG9ydCBzZWxlY3Rpb25fcmVtb3ZlIGZyb20gXCIuL3JlbW92ZVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9jbG9uZSBmcm9tIFwiLi9jbG9uZVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9kYXR1bSBmcm9tIFwiLi9kYXR1bVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9vbiBmcm9tIFwiLi9vblwiO1xuaW1wb3J0IHNlbGVjdGlvbl9kaXNwYXRjaCBmcm9tIFwiLi9kaXNwYXRjaFwiO1xuXG5leHBvcnQgdmFyIHJvb3QgPSBbbnVsbF07XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3Rpb24oZ3JvdXBzLCBwYXJlbnRzKSB7XG4gIHRoaXMuX2dyb3VwcyA9IGdyb3VwcztcbiAgdGhpcy5fcGFyZW50cyA9IHBhcmVudHM7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oW1tkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRdXSwgcm9vdCk7XG59XG5cblNlbGVjdGlvbi5wcm90b3R5cGUgPSBzZWxlY3Rpb24ucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogU2VsZWN0aW9uLFxuICBzZWxlY3Q6IHNlbGVjdGlvbl9zZWxlY3QsXG4gIHNlbGVjdEFsbDogc2VsZWN0aW9uX3NlbGVjdEFsbCxcbiAgZmlsdGVyOiBzZWxlY3Rpb25fZmlsdGVyLFxuICBkYXRhOiBzZWxlY3Rpb25fZGF0YSxcbiAgZW50ZXI6IHNlbGVjdGlvbl9lbnRlcixcbiAgZXhpdDogc2VsZWN0aW9uX2V4aXQsXG4gIGpvaW46IHNlbGVjdGlvbl9qb2luLFxuICBtZXJnZTogc2VsZWN0aW9uX21lcmdlLFxuICBvcmRlcjogc2VsZWN0aW9uX29yZGVyLFxuICBzb3J0OiBzZWxlY3Rpb25fc29ydCxcbiAgY2FsbDogc2VsZWN0aW9uX2NhbGwsXG4gIG5vZGVzOiBzZWxlY3Rpb25fbm9kZXMsXG4gIG5vZGU6IHNlbGVjdGlvbl9ub2RlLFxuICBzaXplOiBzZWxlY3Rpb25fc2l6ZSxcbiAgZW1wdHk6IHNlbGVjdGlvbl9lbXB0eSxcbiAgZWFjaDogc2VsZWN0aW9uX2VhY2gsXG4gIGF0dHI6IHNlbGVjdGlvbl9hdHRyLFxuICBzdHlsZTogc2VsZWN0aW9uX3N0eWxlLFxuICBwcm9wZXJ0eTogc2VsZWN0aW9uX3Byb3BlcnR5LFxuICBjbGFzc2VkOiBzZWxlY3Rpb25fY2xhc3NlZCxcbiAgdGV4dDogc2VsZWN0aW9uX3RleHQsXG4gIGh0bWw6IHNlbGVjdGlvbl9odG1sLFxuICByYWlzZTogc2VsZWN0aW9uX3JhaXNlLFxuICBsb3dlcjogc2VsZWN0aW9uX2xvd2VyLFxuICBhcHBlbmQ6IHNlbGVjdGlvbl9hcHBlbmQsXG4gIGluc2VydDogc2VsZWN0aW9uX2luc2VydCxcbiAgcmVtb3ZlOiBzZWxlY3Rpb25fcmVtb3ZlLFxuICBjbG9uZTogc2VsZWN0aW9uX2Nsb25lLFxuICBkYXR1bTogc2VsZWN0aW9uX2RhdHVtLFxuICBvbjogc2VsZWN0aW9uX29uLFxuICBkaXNwYXRjaDogc2VsZWN0aW9uX2Rpc3BhdGNoXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWxlY3Rpb247XG4iLCJpbXBvcnQgY3JlYXRvciBmcm9tIFwiLi4vY3JlYXRvclwiO1xuaW1wb3J0IHNlbGVjdG9yIGZyb20gXCIuLi9zZWxlY3RvclwiO1xuXG5mdW5jdGlvbiBjb25zdGFudE51bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCBiZWZvcmUpIHtcbiAgdmFyIGNyZWF0ZSA9IHR5cGVvZiBuYW1lID09PSBcImZ1bmN0aW9uXCIgPyBuYW1lIDogY3JlYXRvcihuYW1lKSxcbiAgICAgIHNlbGVjdCA9IGJlZm9yZSA9PSBudWxsID8gY29uc3RhbnROdWxsIDogdHlwZW9mIGJlZm9yZSA9PT0gXCJmdW5jdGlvblwiID8gYmVmb3JlIDogc2VsZWN0b3IoYmVmb3JlKTtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0KGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShjcmVhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgc2VsZWN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgbnVsbCk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob25lbnRlciwgb251cGRhdGUsIG9uZXhpdCkge1xuICB2YXIgZW50ZXIgPSB0aGlzLmVudGVyKCksIHVwZGF0ZSA9IHRoaXMsIGV4aXQgPSB0aGlzLmV4aXQoKTtcbiAgZW50ZXIgPSB0eXBlb2Ygb25lbnRlciA9PT0gXCJmdW5jdGlvblwiID8gb25lbnRlcihlbnRlcikgOiBlbnRlci5hcHBlbmQob25lbnRlciArIFwiXCIpO1xuICBpZiAob251cGRhdGUgIT0gbnVsbCkgdXBkYXRlID0gb251cGRhdGUodXBkYXRlKTtcbiAgaWYgKG9uZXhpdCA9PSBudWxsKSBleGl0LnJlbW92ZSgpOyBlbHNlIG9uZXhpdChleGl0KTtcbiAgcmV0dXJuIGVudGVyICYmIHVwZGF0ZSA/IGVudGVyLm1lcmdlKHVwZGF0ZSkub3JkZXIoKSA6IHVwZGF0ZTtcbn1cbiIsImZ1bmN0aW9uIGxvd2VyKCkge1xuICBpZiAodGhpcy5wcmV2aW91c1NpYmxpbmcpIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcywgdGhpcy5wYXJlbnROb2RlLmZpcnN0Q2hpbGQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChsb3dlcik7XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0aW9uKSB7XG5cbiAgZm9yICh2YXIgZ3JvdXBzMCA9IHRoaXMuX2dyb3VwcywgZ3JvdXBzMSA9IHNlbGVjdGlvbi5fZ3JvdXBzLCBtMCA9IGdyb3VwczAubGVuZ3RoLCBtMSA9IGdyb3VwczEubGVuZ3RoLCBtID0gTWF0aC5taW4obTAsIG0xKSwgbWVyZ2VzID0gbmV3IEFycmF5KG0wKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cDAgPSBncm91cHMwW2pdLCBncm91cDEgPSBncm91cHMxW2pdLCBuID0gZ3JvdXAwLmxlbmd0aCwgbWVyZ2UgPSBtZXJnZXNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwMFtpXSB8fCBncm91cDFbaV0pIHtcbiAgICAgICAgbWVyZ2VbaV0gPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBqIDwgbTA7ICsraikge1xuICAgIG1lcmdlc1tqXSA9IGdyb3VwczBbal07XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihtZXJnZXMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBqID0gMCwgbSA9IGdyb3Vwcy5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgaSA9IDAsIG4gPSBncm91cC5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgIHZhciBub2RlID0gZ3JvdXBbaV07XG4gICAgICBpZiAobm9kZSkgcmV0dXJuIG5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIG5vZGVzID0gbmV3IEFycmF5KHRoaXMuc2l6ZSgpKSwgaSA9IC0xO1xuICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7IG5vZGVzWysraV0gPSB0aGlzOyB9KTtcbiAgcmV0dXJuIG5vZGVzO1xufVxuIiwidmFyIGZpbHRlckV2ZW50cyA9IHt9O1xuXG5leHBvcnQgdmFyIGV2ZW50ID0gbnVsbDtcblxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgaWYgKCEoXCJvbm1vdXNlZW50ZXJcIiBpbiBlbGVtZW50KSkge1xuICAgIGZpbHRlckV2ZW50cyA9IHttb3VzZWVudGVyOiBcIm1vdXNlb3ZlclwiLCBtb3VzZWxlYXZlOiBcIm1vdXNlb3V0XCJ9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbHRlckNvbnRleHRMaXN0ZW5lcihsaXN0ZW5lciwgaW5kZXgsIGdyb3VwKSB7XG4gIGxpc3RlbmVyID0gY29udGV4dExpc3RlbmVyKGxpc3RlbmVyLCBpbmRleCwgZ3JvdXApO1xuICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgcmVsYXRlZCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQ7XG4gICAgaWYgKCFyZWxhdGVkIHx8IChyZWxhdGVkICE9PSB0aGlzICYmICEocmVsYXRlZC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbih0aGlzKSAmIDgpKSkge1xuICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBjb250ZXh0TGlzdGVuZXIobGlzdGVuZXIsIGluZGV4LCBncm91cCkge1xuICByZXR1cm4gZnVuY3Rpb24oZXZlbnQxKSB7XG4gICAgdmFyIGV2ZW50MCA9IGV2ZW50OyAvLyBFdmVudHMgY2FuIGJlIHJlZW50cmFudCAoZS5nLiwgZm9jdXMpLlxuICAgIGV2ZW50ID0gZXZlbnQxO1xuICAgIHRyeSB7XG4gICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIHRoaXMuX19kYXRhX18sIGluZGV4LCBncm91cCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGV2ZW50ID0gZXZlbnQwO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUeXBlbmFtZXModHlwZW5hbWVzKSB7XG4gIHJldHVybiB0eXBlbmFtZXMudHJpbSgpLnNwbGl0KC9efFxccysvKS5tYXAoZnVuY3Rpb24odCkge1xuICAgIHZhciBuYW1lID0gXCJcIiwgaSA9IHQuaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKGkgPj0gMCkgbmFtZSA9IHQuc2xpY2UoaSArIDEpLCB0ID0gdC5zbGljZSgwLCBpKTtcbiAgICByZXR1cm4ge3R5cGU6IHQsIG5hbWU6IG5hbWV9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb25SZW1vdmUodHlwZW5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBvbiA9IHRoaXMuX19vbjtcbiAgICBpZiAoIW9uKSByZXR1cm47XG4gICAgZm9yICh2YXIgaiA9IDAsIGkgPSAtMSwgbSA9IG9uLmxlbmd0aCwgbzsgaiA8IG07ICsraikge1xuICAgICAgaWYgKG8gPSBvbltqXSwgKCF0eXBlbmFtZS50eXBlIHx8IG8udHlwZSA9PT0gdHlwZW5hbWUudHlwZSkgJiYgby5uYW1lID09PSB0eXBlbmFtZS5uYW1lKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLnR5cGUsIG8ubGlzdGVuZXIsIG8uY2FwdHVyZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvblsrK2ldID0gbztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCsraSkgb24ubGVuZ3RoID0gaTtcbiAgICBlbHNlIGRlbGV0ZSB0aGlzLl9fb247XG4gIH07XG59XG5cbmZ1bmN0aW9uIG9uQWRkKHR5cGVuYW1lLCB2YWx1ZSwgY2FwdHVyZSkge1xuICB2YXIgd3JhcCA9IGZpbHRlckV2ZW50cy5oYXNPd25Qcm9wZXJ0eSh0eXBlbmFtZS50eXBlKSA/IGZpbHRlckNvbnRleHRMaXN0ZW5lciA6IGNvbnRleHRMaXN0ZW5lcjtcbiAgcmV0dXJuIGZ1bmN0aW9uKGQsIGksIGdyb3VwKSB7XG4gICAgdmFyIG9uID0gdGhpcy5fX29uLCBvLCBsaXN0ZW5lciA9IHdyYXAodmFsdWUsIGksIGdyb3VwKTtcbiAgICBpZiAob24pIGZvciAodmFyIGogPSAwLCBtID0gb24ubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgICBpZiAoKG8gPSBvbltqXSkudHlwZSA9PT0gdHlwZW5hbWUudHlwZSAmJiBvLm5hbWUgPT09IHR5cGVuYW1lLm5hbWUpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKG8udHlwZSwgby5saXN0ZW5lciwgby5jYXB0dXJlKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKG8udHlwZSwgby5saXN0ZW5lciA9IGxpc3RlbmVyLCBvLmNhcHR1cmUgPSBjYXB0dXJlKTtcbiAgICAgICAgby52YWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcih0eXBlbmFtZS50eXBlLCBsaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgbyA9IHt0eXBlOiB0eXBlbmFtZS50eXBlLCBuYW1lOiB0eXBlbmFtZS5uYW1lLCB2YWx1ZTogdmFsdWUsIGxpc3RlbmVyOiBsaXN0ZW5lciwgY2FwdHVyZTogY2FwdHVyZX07XG4gICAgaWYgKCFvbikgdGhpcy5fX29uID0gW29dO1xuICAgIGVsc2Ugb24ucHVzaChvKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odHlwZW5hbWUsIHZhbHVlLCBjYXB0dXJlKSB7XG4gIHZhciB0eXBlbmFtZXMgPSBwYXJzZVR5cGVuYW1lcyh0eXBlbmFtZSArIFwiXCIpLCBpLCBuID0gdHlwZW5hbWVzLmxlbmd0aCwgdDtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgb24gPSB0aGlzLm5vZGUoKS5fX29uO1xuICAgIGlmIChvbikgZm9yICh2YXIgaiA9IDAsIG0gPSBvbi5sZW5ndGgsIG87IGogPCBtOyArK2opIHtcbiAgICAgIGZvciAoaSA9IDAsIG8gPSBvbltqXTsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAoKHQgPSB0eXBlbmFtZXNbaV0pLnR5cGUgPT09IG8udHlwZSAmJiB0Lm5hbWUgPT09IG8ubmFtZSkge1xuICAgICAgICAgIHJldHVybiBvLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIG9uID0gdmFsdWUgPyBvbkFkZCA6IG9uUmVtb3ZlO1xuICBpZiAoY2FwdHVyZSA9PSBudWxsKSBjYXB0dXJlID0gZmFsc2U7XG4gIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHRoaXMuZWFjaChvbih0eXBlbmFtZXNbaV0sIHZhbHVlLCBjYXB0dXJlKSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3VzdG9tRXZlbnQoZXZlbnQxLCBsaXN0ZW5lciwgdGhhdCwgYXJncykge1xuICB2YXIgZXZlbnQwID0gZXZlbnQ7XG4gIGV2ZW50MS5zb3VyY2VFdmVudCA9IGV2ZW50O1xuICBldmVudCA9IGV2ZW50MTtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbGlzdGVuZXIuYXBwbHkodGhhdCwgYXJncyk7XG4gIH0gZmluYWxseSB7XG4gICAgZXZlbnQgPSBldmVudDA7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgaiA9IC0xLCBtID0gZ3JvdXBzLmxlbmd0aDsgKytqIDwgbTspIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgaSA9IGdyb3VwLmxlbmd0aCAtIDEsIG5leHQgPSBncm91cFtpXSwgbm9kZTsgLS1pID49IDA7KSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIGlmIChuZXh0ICYmIG5vZGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24obmV4dCkgXiA0KSBuZXh0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIG5leHQpO1xuICAgICAgICBuZXh0ID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cbiIsImZ1bmN0aW9uIHByb3BlcnR5UmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGRlbGV0ZSB0aGlzW25hbWVdO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eUNvbnN0YW50KG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzW25hbWVdID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHByb3BlcnR5RnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSBkZWxldGUgdGhpc1tuYW1lXTtcbiAgICBlbHNlIHRoaXNbbmFtZV0gPSB2O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDFcbiAgICAgID8gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgPyBwcm9wZXJ0eVJlbW92ZSA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBwcm9wZXJ0eUZ1bmN0aW9uXG4gICAgICAgICAgOiBwcm9wZXJ0eUNvbnN0YW50KShuYW1lLCB2YWx1ZSkpXG4gICAgICA6IHRoaXMubm9kZSgpW25hbWVdO1xufVxuIiwiZnVuY3Rpb24gcmFpc2UoKSB7XG4gIGlmICh0aGlzLm5leHRTaWJsaW5nKSB0aGlzLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5lYWNoKHJhaXNlKTtcbn1cbiIsImZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgaWYgKHBhcmVudCkgcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChyZW1vdmUpO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgc2VsZWN0b3IgZnJvbSBcIi4uL3NlbGVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdCkge1xuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvcihzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc3ViZ3JvdXAgPSBzdWJncm91cHNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIHN1Ym5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgKHN1Ym5vZGUgPSBzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpKSB7XG4gICAgICAgIGlmIChcIl9fZGF0YV9fXCIgaW4gbm9kZSkgc3Vibm9kZS5fX2RhdGFfXyA9IG5vZGUuX19kYXRhX187XG4gICAgICAgIHN1Ymdyb3VwW2ldID0gc3Vibm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgc2VsZWN0b3JBbGwgZnJvbSBcIi4uL3NlbGVjdG9yQWxsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdCkge1xuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvckFsbChzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IFtdLCBwYXJlbnRzID0gW10sIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHN1Ymdyb3Vwcy5wdXNoKHNlbGVjdC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSk7XG4gICAgICAgIHBhcmVudHMucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdWJncm91cHMsIHBhcmVudHMpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBzaXplID0gMDtcbiAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkgeyArK3NpemU7IH0pO1xuICByZXR1cm4gc2l6ZTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb21wYXJlKSB7XG4gIGlmICghY29tcGFyZSkgY29tcGFyZSA9IGFzY2VuZGluZztcblxuICBmdW5jdGlvbiBjb21wYXJlTm9kZShhLCBiKSB7XG4gICAgcmV0dXJuIGEgJiYgYiA/IGNvbXBhcmUoYS5fX2RhdGFfXywgYi5fX2RhdGFfXykgOiAhYSAtICFiO1xuICB9XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc29ydGdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc29ydGdyb3VwID0gc29ydGdyb3Vwc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgc29ydGdyb3VwW2ldID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgc29ydGdyb3VwLnNvcnQoY29tcGFyZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc29ydGdyb3VwcywgdGhpcy5fcGFyZW50cykub3JkZXIoKTtcbn1cblxuZnVuY3Rpb24gYXNjZW5kaW5nKGEsIGIpIHtcbiAgcmV0dXJuIGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiBhID49IGIgPyAwIDogTmFOO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odXBkYXRlKSB7XG4gIHJldHVybiBuZXcgQXJyYXkodXBkYXRlLmxlbmd0aCk7XG59XG4iLCJpbXBvcnQgZGVmYXVsdFZpZXcgZnJvbSBcIi4uL3dpbmRvd1wiO1xuXG5mdW5jdGlvbiBzdHlsZVJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZUNvbnN0YW50KG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZUZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh2ID09IG51bGwpIHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSk7XG4gICAgZWxzZSB0aGlzLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHYsIHByaW9yaXR5KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMVxuICAgICAgPyB0aGlzLmVhY2goKHZhbHVlID09IG51bGxcbiAgICAgICAgICAgID8gc3R5bGVSZW1vdmUgOiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgPyBzdHlsZUZ1bmN0aW9uXG4gICAgICAgICAgICA6IHN0eWxlQ29uc3RhbnQpKG5hbWUsIHZhbHVlLCBwcmlvcml0eSA9PSBudWxsID8gXCJcIiA6IHByaW9yaXR5KSlcbiAgICAgIDogc3R5bGVWYWx1ZSh0aGlzLm5vZGUoKSwgbmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZVZhbHVlKG5vZGUsIG5hbWUpIHtcbiAgcmV0dXJuIG5vZGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKVxuICAgICAgfHwgZGVmYXVsdFZpZXcobm9kZSkuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpO1xufVxuIiwiZnVuY3Rpb24gdGV4dFJlbW92ZSgpIHtcbiAgdGhpcy50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIHRleHRDb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0ZXh0RnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdiA9PSBudWxsID8gXCJcIiA6IHY7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgPyB0ZXh0UmVtb3ZlIDogKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyB0ZXh0RnVuY3Rpb25cbiAgICAgICAgICA6IHRleHRDb25zdGFudCkodmFsdWUpKVxuICAgICAgOiB0aGlzLm5vZGUoKS50ZXh0Q29udGVudDtcbn1cbiIsImZ1bmN0aW9uIG5vbmUoKSB7fVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gc2VsZWN0b3IgPT0gbnVsbCA/IG5vbmUgOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfTtcbn1cbiIsImZ1bmN0aW9uIGVtcHR5KCkge1xuICByZXR1cm4gW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIHJldHVybiBzZWxlY3RvciA9PSBudWxsID8gZW1wdHkgOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7ZXZlbnR9IGZyb20gXCIuL3NlbGVjdGlvbi9vblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGN1cnJlbnQgPSBldmVudCwgc291cmNlO1xuICB3aGlsZSAoc291cmNlID0gY3VycmVudC5zb3VyY2VFdmVudCkgY3VycmVudCA9IHNvdXJjZTtcbiAgcmV0dXJuIGN1cnJlbnQ7XG59XG4iLCJpbXBvcnQgc291cmNlRXZlbnQgZnJvbSBcIi4vc291cmNlRXZlbnRcIjtcbmltcG9ydCBwb2ludCBmcm9tIFwiLi9wb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlLCB0b3VjaGVzLCBpZGVudGlmaWVyKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykgaWRlbnRpZmllciA9IHRvdWNoZXMsIHRvdWNoZXMgPSBzb3VyY2VFdmVudCgpLmNoYW5nZWRUb3VjaGVzO1xuXG4gIGZvciAodmFyIGkgPSAwLCBuID0gdG91Y2hlcyA/IHRvdWNoZXMubGVuZ3RoIDogMCwgdG91Y2g7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAoKHRvdWNoID0gdG91Y2hlc1tpXSkuaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmV0dXJuIHBvaW50KG5vZGUsIHRvdWNoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbiIsImltcG9ydCBzb3VyY2VFdmVudCBmcm9tIFwiLi9zb3VyY2VFdmVudFwiO1xuaW1wb3J0IHBvaW50IGZyb20gXCIuL3BvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIHRvdWNoZXMpIHtcbiAgaWYgKHRvdWNoZXMgPT0gbnVsbCkgdG91Y2hlcyA9IHNvdXJjZUV2ZW50KCkudG91Y2hlcztcblxuICBmb3IgKHZhciBpID0gMCwgbiA9IHRvdWNoZXMgPyB0b3VjaGVzLmxlbmd0aCA6IDAsIHBvaW50cyA9IG5ldyBBcnJheShuKTsgaSA8IG47ICsraSkge1xuICAgIHBvaW50c1tpXSA9IHBvaW50KG5vZGUsIHRvdWNoZXNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHBvaW50cztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUpIHtcbiAgcmV0dXJuIChub2RlLm93bmVyRG9jdW1lbnQgJiYgbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KSAvLyBub2RlIGlzIGEgTm9kZVxuICAgICAgfHwgKG5vZGUuZG9jdW1lbnQgJiYgbm9kZSkgLy8gbm9kZSBpcyBhIFdpbmRvd1xuICAgICAgfHwgbm9kZS5kZWZhdWx0VmlldzsgLy8gbm9kZSBpcyBhIERvY3VtZW50XG59XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZSgnZDMtc2VsZWN0aW9uJykpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJywgJ2QzLXNlbGVjdGlvbiddLCBmYWN0b3J5KSA6XG4gICAgKGZhY3RvcnkoKGdsb2JhbC5kMyA9IGdsb2JhbC5kMyB8fCB7fSksZ2xvYmFsLmQzKSk7XG59KHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLGQzU2VsZWN0aW9uKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBtZXRob2Q7XG4gICAgdmFyIHZlcmlmeV9ib3VuZHM7XG4gICAgdmFyIHJlc29sdmVfYm91bmRzO1xuICAgIHZhciByZXNvbHZlX3BhZGRpbmc7XG4gICAgdmFyIHBhZDtcbiAgICB2YXIgZGltZW5zaW9ucztcbiAgICB2YXIgd3JhcDtcbiAgICB2YXIgdGV4dHdyYXA7XG4gICAgLy8gdGVzdCBmb3IgZm9yZWlnbk9iamVjdCBzdXBwb3J0IGFuZCBkZXRlcm1pbmUgd3JhcHBpbmcgc3RyYXRlZ3lcbiAgICBtZXRob2QgPSB0eXBlb2YgU1ZHRm9yZWlnbk9iamVjdEVsZW1lbnQgPT09ICd1bmRlZmluZWQnID8gJ3RzcGFucycgOiAnZm9yZWlnbm9iamVjdCc7XG5cbiAgICAvLyBhY2NlcHQgbXVsdGlwbGUgaW5wdXQgdHlwZXMgYXMgYm91bmRhcmllc1xuICAgIHZlcmlmeV9ib3VuZHMgPSBmdW5jdGlvbihib3VuZHMpIHtcbiAgICAgICAgdmFyIGJvdW5kc19vYmplY3QsXG4gICAgICAgICAgICBib3VuZHNfZnVuY3Rpb247XG4gICAgICAgIGJvdW5kc19mdW5jdGlvbiA9IHR5cGVvZiBib3VuZHMgPT09ICdmdW5jdGlvbic7XG4gICAgICAgIGlmICh0eXBlb2YgYm91bmRzID09PSAnb2JqZWN0JyAmJiAhIGJvdW5kcy5ub2RlVHlwZSkge1xuICAgICAgICAgICAgaWYgKCEgYm91bmRzLmhlaWdodCB8fCAhIGJvdW5kcy53aWR0aCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3RleHQgd3JhcHBpbmcgYm91bmRzIG11c3Qgc3BlY2lmeSBoZWlnaHQgYW5kIHdpZHRoJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjb252ZXJ0IGEgc2VsZWN0aW9uIHRvIGJvdW5kc1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBib3VuZHMgaW5zdGFuY2VvZiBkM1NlbGVjdGlvbi5zZWxlY3Rpb24gfHxcbiAgICAgICAgICAgIGJvdW5kcy5ub2RlVHlwZSB8fFxuICAgICAgICAgICAgYm91bmRzX2Z1bmN0aW9uIHx8XG4gICAgICAgICAgICBib3VuZHNfb2JqZWN0XG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIC8vIHVzZSBpbnB1dCBhcyBib3VuZHMgZGlyZWN0bHlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2ludmFsaWQgYm91bmRzIHNwZWNpZmllZCBmb3IgdGV4dCB3cmFwcGluZycpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJlc29sdmVfYm91bmRzID0gZnVuY3Rpb24oYm91bmRzKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzLFxuICAgICAgICAgICAgZGltZW5zaW9ucyxcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIGk7XG4gICAgICAgIHByb3BlcnRpZXMgPSBbJ2hlaWdodCcsICd3aWR0aCddO1xuICAgICAgICBpZiAodHlwZW9mIGJvdW5kcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZGltZW5zaW9ucyA9IGJvdW5kcygpO1xuICAgICAgICB9IGVsc2UgaWYgKGJvdW5kcy5ub2RlVHlwZSkge1xuICAgICAgICAgICAgZGltZW5zaW9ucyA9IGJvdW5kcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm91bmRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZGltZW5zaW9ucyA9IGJvdW5kcztcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0W3Byb3BlcnRpZXNbaV1dID0gZGltZW5zaW9uc1twcm9wZXJ0aWVzW2ldXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICByZXNvbHZlX3BhZGRpbmcgPSBmdW5jdGlvbihwYWRkaW5nKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIGlmICh0eXBlb2YgcGFkZGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmVzdWx0ID0gcGFkZGluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYWRkaW5nID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmVzdWx0ID0gcGFkZGluZztcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGFkZGluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdwYWRkaW5nIGNvdWxkIG5vdCBiZSBjb252ZXJ0ZWQgaW50byBhIG51bWJlcicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwYWQgPSBmdW5jdGlvbihkaW1lbnNpb25zLCBwYWRkaW5nKSB7XG4gICAgICAgIHZhciBwYWRkZWQ7XG4gICAgICAgIHBhZGRlZCA9IHtcbiAgICAgICAgICAgIGhlaWdodDogZGltZW5zaW9ucy5oZWlnaHQgLSBwYWRkaW5nICogMixcbiAgICAgICAgICAgIHdpZHRoOiBkaW1lbnNpb25zLndpZHRoIC0gcGFkZGluZyAqIDJcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHBhZGRlZDtcbiAgICB9O1xuXG4gICAgZGltZW5zaW9ucyA9IGZ1bmN0aW9uKGJvdW5kcywgcGFkZGluZykge1xuICAgICAgICB2YXIgcGFkZGVkO1xuICAgICAgICBwYWRkZWQgPSBwYWQocmVzb2x2ZV9ib3VuZHMoYm91bmRzKSwgcmVzb2x2ZV9wYWRkaW5nKHBhZGRpbmcpKTtcbiAgICAgICAgcmV0dXJuIHBhZGRlZDtcbiAgICB9O1xuXG5cbiAgICB3cmFwID0ge307XG5cbiAgICAvLyB3cmFwIHRleHQgdXNpbmcgZm9yZWlnbm9iamVjdCBodG1sXG4gICAgd3JhcC5mb3JlaWdub2JqZWN0ID0gZnVuY3Rpb24odGV4dCwgZGltZW5zaW9ucywgcGFkZGluZykge1xuICAgICAgICB2YXIgY29udGVudCxcbiAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgIGZvcmVpZ25vYmplY3QsXG4gICAgICAgICAgICBkaXY7XG4gICAgICAgIC8vIGV4dHJhY3Qgb3VyIGRlc2lyZWQgY29udGVudCBmcm9tIHRoZSBzaW5nbGUgdGV4dCBlbGVtZW50XG4gICAgICAgIGNvbnRlbnQgPSB0ZXh0LnRleHQoKTtcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSB0ZXh0IG5vZGUgYW5kIHJlcGxhY2Ugd2l0aCBhIGZvcmVpZ24gb2JqZWN0XG4gICAgICAgIHBhcmVudCA9IGQzU2VsZWN0aW9uLnNlbGVjdCh0ZXh0Lm5vZGUoKS5wYXJlbnROb2RlKTtcbiAgICAgICAgdGV4dC5yZW1vdmUoKTtcbiAgICAgICAgZm9yZWlnbm9iamVjdCA9IHBhcmVudC5hcHBlbmQoJ2ZvcmVpZ25PYmplY3QnKTtcbiAgICAgICAgLy8gYWRkIGZvcmVpZ24gb2JqZWN0IGFuZCBzZXQgZGltZW5zaW9ucywgcG9zaXRpb24sIGV0Y1xuICAgICAgICBmb3JlaWdub2JqZWN0XG4gICAgICAgICAgICAuYXR0cigncmVxdWlyZWRGZWF0dXJlcycsICdodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHknKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgZGltZW5zaW9ucy53aWR0aClcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBkaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIGlmICh0eXBlb2YgcGFkZGluZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGZvcmVpZ25vYmplY3RcbiAgICAgICAgICAgICAgICAuYXR0cigneCcsIHBhZGRpbmcpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3knLCBwYWRkaW5nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbnNlcnQgYW4gSFRNTCBkaXZcbiAgICAgICAgZGl2ID0gZm9yZWlnbm9iamVjdFxuICAgICAgICAgICAgLmFwcGVuZCgneGh0bWw6ZGl2Jyk7XG4gICAgICAgIC8vIHNldCBkaXYgdG8gc2FtZSBkaW1lbnNpb25zIGFzIGZvcmVpZ24gb2JqZWN0XG4gICAgICAgIGRpdlxuICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCBkaW1lbnNpb25zLmhlaWdodClcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCBkaW1lbnNpb25zLndpZHRoKVxuICAgICAgICAgICAgLy8gaW5zZXJ0IHRleHQgY29udGVudFxuICAgICAgICAgICAgLmh0bWwoY29udGVudCk7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfTtcblxuICAgIC8vIHdyYXAgdGV4dCB1c2luZyB0c3BhbnNcbiAgICB3cmFwLnRzcGFucyA9IGZ1bmN0aW9uKHRleHQsIGRpbWVuc2lvbnMsIHBhZGRpbmcpIHtcbiAgICAgICAgdmFyIHBpZWNlcyxcbiAgICAgICAgICAgIHBpZWNlLFxuICAgICAgICAgICAgbGluZV93aWR0aCxcbiAgICAgICAgICAgIHhfb2Zmc2V0LFxuICAgICAgICAgICAgdHNwYW4sXG4gICAgICAgICAgICBwcmV2aW91c19jb250ZW50O1xuICAgICAgICBwaWVjZXMgPSB0ZXh0LnRleHQoKS5zcGxpdCgnICcpLnJldmVyc2UoKTtcbiAgICAgICAgdGV4dC50ZXh0KCcnKTtcbiAgICAgICAgdHNwYW4gPSB0ZXh0LmFwcGVuZCgndHNwYW4nKTtcbiAgICAgICAgdHNwYW5cbiAgICAgICAgICAgIC5hdHRyKCdkeCcsIDApXG4gICAgICAgICAgICAuYXR0cignZHknLCAwKTtcbiAgICAgICAgeF9vZmZzZXQgPSAwO1xuICAgICAgICB3aGlsZSAocGllY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHBpZWNlID0gcGllY2VzLnBvcCgpO1xuICAgICAgICAgICAgdHNwYW4udGV4dCh0c3Bhbi50ZXh0KCkgKyAnICcgKyBwaWVjZSk7XG4gICAgICAgICAgICBsaW5lX3dpZHRoID0gdHNwYW4ubm9kZSgpLmdldENvbXB1dGVkVGV4dExlbmd0aCgpIHx8IDA7XG4gICAgICAgICAgICBpZiAobGluZV93aWR0aCA+IGRpbWVuc2lvbnMud2lkdGgpIHtcbiAgICAgICAgICAgICAgICBwcmV2aW91c19jb250ZW50ID0gdHNwYW4udGV4dCgpXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAtMSlcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJyAnKTtcbiAgICAgICAgICAgICAgICB0c3Bhbi50ZXh0KHByZXZpb3VzX2NvbnRlbnQpO1xuICAgICAgICAgICAgICAgIHhfb2Zmc2V0ID0gdHNwYW4ubm9kZSgpLmdldENvbXB1dGVkVGV4dExlbmd0aCgpICogLTE7XG4gICAgICAgICAgICAgICAgdHNwYW4gPSB0ZXh0LmFwcGVuZCgndHNwYW4nKTtcbiAgICAgICAgICAgICAgICB0c3BhblxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZHgnLCB4X29mZnNldClcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2R5JywgJzFlbScpXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KHBpZWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHBhZGRpbmcgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgLmF0dHIoJ3knLCB0ZXh0LmF0dHIoJ3knKSArIHBhZGRpbmcpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3gnLCB0ZXh0LmF0dHIoJ3gnKSArIHBhZGRpbmcpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGZhY3RvcnkgdG8gZ2VuZXJhdGUgdGV4dCB3cmFwIGZ1bmN0aW9uc1xuICAgIHRleHR3cmFwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIHRleHQgd3JhcCBmdW5jdGlvbiBpbnN0YW5jZVxuICAgICAgICB2YXIgd3JhcHBlcixcbiAgICAgICAgICAgIGJvdW5kcyxcbiAgICAgICAgICAgIHBhZGRpbmc7XG4gICAgICAgIHdyYXBwZXIgPSBmdW5jdGlvbih0YXJnZXRzKSB7XG4gICAgICAgICAgICB0YXJnZXRzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZDNTZWxlY3Rpb24uc2VsZWN0KHRoaXMpLmNhbGwod3JhcFttZXRob2RdLCBkaW1lbnNpb25zKGJvdW5kcywgcGFkZGluZyksIHJlc29sdmVfcGFkZGluZyhwYWRkaW5nKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gZ2V0IG9yIHNldCB3cmFwcGluZyBib3VuZGFyaWVzXG4gICAgICAgIHdyYXBwZXIuYm91bmRzID0gZnVuY3Rpb24obmV3X2JvdW5kcykge1xuICAgICAgICAgICAgaWYgKG5ld19ib3VuZHMpIHtcbiAgICAgICAgICAgICAgICBpZiAodmVyaWZ5X2JvdW5kcyhuZXdfYm91bmRzKSkge1xuICAgICAgICAgICAgICAgICAgICBib3VuZHMgPSBuZXdfYm91bmRzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd3JhcHBlcjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdpbnZhbGlkIHRleHQgd3JhcHBpbmcgYm91bmRzJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBib3VuZHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIGdldCBvciBzZXQgcGFkZGluZyBhcHBsaWVkIG9uIHRvcCBvZiBib3VuZGFyaWVzXG4gICAgICAgIHdyYXBwZXIucGFkZGluZyA9IGZ1bmN0aW9uKG5ld19wYWRkaW5nKSB7XG4gICAgICAgICAgICBpZiAobmV3X3BhZGRpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5ld19wYWRkaW5nID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgbmV3X3BhZGRpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZyA9IG5ld19wYWRkaW5nO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd3JhcHBlcjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd0ZXh0IHdyYXAgcGFkZGluZyB2YWx1ZSBtdXN0IGJlIGVpdGhlciBhIG51bWJlciBvciBhIGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYWRkaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBnZXQgb3Igc2V0IHdyYXBwaW5nIG1ldGhvZFxuICAgICAgICB3cmFwcGVyLm1ldGhvZCA9IGZ1bmN0aW9uKG5ld19tZXRob2QpIHtcbiAgICAgICAgICAgIGlmIChuZXdfbWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kID0gbmV3X21ldGhvZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gd3JhcHBlcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGhvZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHdyYXBwZXI7XG4gICAgfTtcblxuICAgIHZhciB0ZXh0d3JhcCQxID0gdGV4dHdyYXA7XG5cbiAgICBleHBvcnRzLnNlbGVjdGlvbiA9IGQzU2VsZWN0aW9uLnNlbGVjdGlvbjtcbiAgICBleHBvcnRzLnNlbGVjdCA9IGQzU2VsZWN0aW9uLnNlbGVjdDtcbiAgICBleHBvcnRzLnRleHR3cmFwID0gdGV4dHdyYXAkMTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKTsiLCJpbXBvcnQgVGltZWxpbmVWaXMgZnJvbSAnLi90aW1lbGluZVZpc19NYWluLmpzJztcbmV4cG9ydCB7IFRpbWVsaW5lVmlzIH07XG5cbiIsIi8vIGJ1aWxkaW5nIG9mZiBodHRwOi8vYmwub2Nrcy5vcmcvYnVua2F0LzIzMzgwMzRcbi8vXG4vL1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknO1xuY29uc3QgJCA9IGpRdWVyeTtcblxuaW1wb3J0ICogYXMgZDNfdGV4dHdyYXAgZnJvbSAnZDMtdGV4dHdyYXAnO1xuY29uc29sZS5sb2coZDNfdGV4dHdyYXApO1xuXG4vLyByZXVzYWJsZSBjaGFydCBwYXR0ZXJuIGluc3BpcmVkIGJ5OlxuLy8gaHR0cHM6Ly9ib3N0Lm9ja3Mub3JnL21pa2UvY2hhcnQvXG4vLyBhbmRcbi8vIGh0dHBzOi8vd3d3LnRvcHRhbC5jb20vZDMtanMvdG93YXJkcy1yZXVzYWJsZS1kMy1qcy1jaGFydHNcbmNsYXNzIFRpbWVsaW5lVmlzIHtcblx0Y29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG5cdFx0Y29uc3QgZGVmYXVsdHMgPSB7XG5cdFx0XHRlbDogbnVsbCxcblx0XHRcdGRhdGE6IG51bGwsXG5cdFx0XHR3aWR0aDogOTYwLFxuXHRcdFx0Y29sb3I6IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKSxcblx0XHRcdGZvcmNlU3RyZW5ndGg6IC0yLFxuXHRcdH07XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBkZWZhdWx0cywgb3B0cyk7ICAvLyBvcHRzIHdpbGwgb3ZlcndyaXRlIGRlZmF1bHRzXG5cdFx0dGhpcy5fZGF0YSA9IHRoaXMuZGF0YTtcblx0XHR0aGlzLmRhdGEgPSB0aGlzLnVwZGF0ZURhdGE7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmhlaWdodCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHRoaXMuaGVpZ2h0ID0gLjYyNSAqIHRoaXMud2lkdGg7XG5cdFx0fVxuXHRcdC8vIHRoaXMubWFueUJvZHkgPSBkMy5mb3JjZU1hbnlCb2R5KClcblx0XHQvLyBcdFx0XHRcdFx0LnN0cmVuZ3RoKHRoaXMuZm9yY2VTdHJlbmd0aCk7XG5cdFx0dGhpcy5pbml0ID0gZmFsc2U7XG5cdFx0Y29uc29sZS5sb2codGhpcy5fZGF0YSk7XG5cdFx0aWYgKHRoaXMuZWwgIT09IG51bGwgJiYgdGhpcy5fZGF0YSAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5kcmF3KHRoaXMuZWwpO1xuXHRcdFx0dGhpcy5pbml0ID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHR1cGRhdGVEYXRhKHZhbHVlKSB7XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fZGF0YTtcblx0XHR0aGlzLl9kYXRhID0gdmFsdWU7XG5cdFx0aWYgKHRoaXMuaW5pdCA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMuZHJhdyh0aGlzLmVsKTtcblx0XHRcdHRoaXMuaW5pdCA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHRoaXMudXBkYXRlRGF0YSgpO1xuXHRcdFx0Ly8gTk9UIElNUExFTUVOVEVEXG5cdFx0XHRjb25zb2xlLmxvZyhcIlVQREFUSU5HIERBVEEgTk9UIFlFVCBJTVBMRU1FTlRFRFwiKTtcblx0XHR9XG5cdFx0Ly8gY29uc29sZS5sb2codHlwZW9mIHVwZGF0ZURhdGEpO1xuXHRcdC8vIGlmICh0eXBlb2YgdXBkYXRlRGF0YSA9PT0gJ2Z1bmN0aW9uJykgdXBkYXRlRGF0YSgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdGRyYXcoc2VsZWN0aW9uKSB7XG5cdFx0dmFyIG9iaiA9IHRoaXM7XG5cdFx0dmFyIHcgPSB0aGlzLndpZHRoO1xuXHRcdHZhciBoID0gdGhpcy5oZWlnaHQ7XG5cdFx0dmFyIGRhdGFfdG90YWwgPSB0aGlzLl9kYXRhO1xuXHRcdHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0ZnVuY3Rpb24gZGVjb25zdHJ1Y3RUcmFuc2xhdGUodHJhbnNsYXRlU3RyaW5nKSB7XG5cdFx0XHRcdC8vIHRha2VzIGEgc3RyaW5nIGxpa2UgXCJ0cmFuc2xhdGUoMTAwLDIwMClcIiBhbmQgcmV0dXJucyB0aGUgbnVtYmVycyBbMTAwLCAyMDBdXG5cdFx0XHRcdHRyYW5zbGF0ZVN0cmluZyA9IHRyYW5zbGF0ZVN0cmluZy5yZXBsYWNlKFwiKFwiLCBcIlwiKS5yZXBsYWNlKFwiKVwiLCBcIlwiKTtcblx0XHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgvdHJhbnNsYXRlKFtcXGRcXC5dKyksKFtcXGRcXC5dKykvKTtcblx0XHRcdFx0dmFyIG1hdGNoID0gcmVnZXguZXhlYyh0cmFuc2xhdGVTdHJpbmcpO1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHg6ICttYXRjaFsxXSxcblx0XHRcdFx0XHR5OiArbWF0Y2hbMl1cblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gY29uc3RydWN0VHJhbnNsYXRlKHgsIHkpIHtcblx0XHRcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgeCArIFwiLFwiICsgeSArIFwiKVwiO1xuXHRcdFx0fVxuXG5cblx0XHRcdC8vIHZhciB3cmFwID0gZDMudGV4dHdyYXAoKS5tZXRob2QoXCJ0c3BhbnNcIik7XG5cdFx0XHR2YXIgd3JhcCA9IGQzX3RleHR3cmFwLnRleHR3cmFwKCkubWV0aG9kKFwidHNwYW5zXCIpO1xuXG5cdFx0XHRmdW5jdGlvbiBwYXJzZURhdGEoZGF0YSkge1xuXHRcdFx0XHRkYXRhLmZvckVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdGQuYXV0aG9ycyA9IGRbXCJhdXRob3JzXCJdOyAgLy8gbGlzdCBvZiBhdXRob3IgbmFtZXNcblx0XHRcdFx0XHRkLmVpZ2VuZmFjdG9yID0gZFtcImVpZ2VuZmFjdG9yX3Njb3JlXCJdO1xuXHRcdFx0XHRcdGQudmVudWUgPSBkW1wiam91cm5hbFwiXTtcblx0XHRcdFx0XHRkLnllYXIgPSBkW1wieWVhclwiXTtcblx0XHRcdFx0XHRkLnVybCA9IFwiaHR0cDovL2xhYnMuanN0b3Iub3JnXCIgKyBkW1wic3RhYmxlX3VybFwiXTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0fVxuXG5cblx0XHRcdGQzLnNlbGVjdCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIGRpc3BsYXkpXG5cdFx0XHRkYXRhX3RvdGFsID0gcGFyc2VEYXRhKGRhdGFfdG90YWwpO1xuXHRcdFx0ZGF0YV90b3RhbC5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0ZC5sYW5lID0gMDtcblx0XHRcdFx0aWYgKGQuZWlnZW5mYWN0b3IgPT09IG51bGwpIHtcblx0XHRcdFx0XHRkLmVpZ2VuZmFjdG9yID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHR2YXIgbWFya1R5cGUgPSBnZXRQYXJhbWV0ZXJCeU5hbWUoJ20nKTtcblx0XHRcdGlmICggKG1hcmtUeXBlICE9ICdpY29uJykgJiYgKG1hcmtUeXBlICE9ICdjaXJjbGUnKSApIHtcblx0XHRcdFx0bWFya1R5cGUgPSAnY2lyY2xlJyAgLy8gZGVmYXVsdFxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgZGF0YUJ5WWVhciA9IGQzLm5lc3QoKVxuXHRcdFx0XHRcdFx0XHRcdC5rZXkoZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXI7fSlcblx0XHRcdFx0XHRcdFx0XHQuc29ydFZhbHVlcyhmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyByZXR1cm4gZDMuZGVzY2VuZGluZyhhLmVpZ2VuZmFjdG9yX3Njb3JlLCBiLmVpZ2VuZmFjdG9yX3Njb3JlKTtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIHJldHVybiBkMy5hc2NlbmRpbmcoYS5wdWJkYXRlLCBiLnB1YmRhdGUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGQzLmFzY2VuZGluZyhhLnRpdGxlLCBiLnRpdGxlKTtcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdC8vIC5tYXAoZGF0YV90b3RhbCwgZDMubWFwKTtcblx0XHRcdFx0XHRcdFx0XHQuZW50cmllcyhkYXRhX3RvdGFsKTtcblx0XHRcdGRhdGFCeVllYXIuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdGQuZmlyc3RUaXRsZSA9IGQudmFsdWVzWzBdLmlkO1xuXHRcdFx0XHRkLnN1bV9laWdlbmZhY3RvciA9IGQzLnN1bShkLnZhbHVlcywgZnVuY3Rpb24oZGQpIHtyZXR1cm4gZGQuZWlnZW5mYWN0b3I7fSk7XG5cdFx0XHRcdGQubGFuZSA9IDA7XG5cdFx0XHRcdGQueWVhciA9ICtkLmtleTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG1heERhdGFCeVllYXIgPSBkMy5tYXgoZGF0YUJ5WWVhciwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC52YWx1ZXMubGVuZ3RoOyB9KTtcblxuXHRcdFx0dmFyIGxhbmVzID0gW1wiQ2xpbWF0ZSBjaGFuZ2VcIl0sXG5cdFx0XHRcdFx0XHRsYW5lTGVuZ3RoID0gbGFuZXMubGVuZ3RoLFxuXHRcdFx0XHRcdC8vIHRpbWVCZWdpbiA9IG5ldyBEYXRlKFN0cmluZyhtaW5ZZWFyLTEpKSxcblx0XHRcdFx0XHR0aW1lQmVnaW4gPSArZDMubWluKGRhdGFCeVllYXIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueWVhcjsgfSkgLSAxLFxuXHRcdFx0XHRcdHRpbWVFbmQgPSArZDMubWF4KGRhdGFCeVllYXIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueWVhcjsgfSkgKyAxO1xuXG5cdFx0XHR2YXIgbSA9IFsyMCwgMTUsIDE1LCAxNTBdOyAvL3RvcCByaWdodCBib3R0b20gbGVmdFxuXHRcdFx0XHQvLyB3ID0gOTYwIC0gbVsxXSAtIG1bM10sXG5cdFx0XHRcdC8vIGggPSAzNTAgLSBtWzBdIC0gbVsyXSxcblx0XHRcdHcgPSB3IC0gbVsxXSAtIG1bM107XG5cdFx0XHRoID0gaCAtIG1bMF0gLSBtWzJdO1xuXHRcdFx0dmFyIG1pbmlIZWlnaHQgPSBsYW5lTGVuZ3RoICogMTIgKyAzMCxcblx0XHRcdFx0bWFpbkhlaWdodCA9IGggLSBtaW5pSGVpZ2h0IC0gNTA7XG5cblx0XHRcdHZhciBtYWluTWluUmFkID0gOCxcblx0XHRcdFx0bWFpbk1heFJhZCA9IDE4LFxuXHRcdFx0XHRtaW5pTWluUmFkID0gNSxcblx0XHRcdFx0bWluaU1heFJhZCA9IDEwO1xuXG5cdFx0XHR2YXIgbWluRXh0ZW50LCBtYXhFeHRlbnQ7ICAvLyB0aGVzZSB3aWxsIGJlIHRoZSBsb3dlciBhbmQgdXBwZXIgeWVhcnMgZGlzcGxheWVkIGluIG1haW5cblxuXHRcdFx0Ly8gdmFyIHN0eWxlc0Jhc2UgPSB7XG5cdFx0XHQvLyBcdCdvcGFjaXR5JzogLjJcblx0XHRcdC8vIH07XG5cdFx0XHQvLyB2YXIgc3R5bGVzVmlzaWJsZSA9IHtcblx0XHRcdC8vIFx0J29wYWNpdHknOiAxXG5cdFx0XHQvLyB9O1xuXHRcdFx0dmFyIHN0eWxlc0Jhc2UgPSBcIm9wYWNpdHk6IC4yO1wiO1xuXHRcdFx0dmFyIHN0eWxlc1Zpc2libGUgPSBcIm9wYWNpdHk6IDE7XCI7XG5cblx0XHRcdC8vc2NhbGVzXG5cdFx0XHR2YXIgeCA9IGQzLnNjYWxlTGluZWFyKClcblx0XHRcdFx0XHQuZG9tYWluKFt0aW1lQmVnaW4sIHRpbWVFbmRdKVxuXHRcdFx0XHRcdC5yYW5nZShbMCwgd10pO1xuXHRcdFx0dmFyIHgxID0gZDMuc2NhbGVMaW5lYXIoKVxuXHRcdFx0XHRcdC5yYW5nZShbMCwgd10pO1xuXHRcdFx0dmFyIHkxID0gZDMuc2NhbGVMaW5lYXIoKVxuXHRcdFx0XHRcdC5kb21haW4oWzAsIGxhbmVMZW5ndGhdKVxuXHRcdFx0XHRcdC5yYW5nZShbMCwgbWFpbkhlaWdodF0pO1xuXHRcdFx0dmFyIHkyID0gZDMuc2NhbGVMaW5lYXIoKVxuXHRcdFx0XHRcdC5kb21haW4oWzAsIGxhbmVMZW5ndGhdKVxuXHRcdFx0XHRcdC5yYW5nZShbMCwgbWluaUhlaWdodF0pO1xuXHRcdFx0dmFyIGVmRXh0ZW50ID0gZDMuZXh0ZW50KGRhdGFfdG90YWwsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuZWlnZW5mYWN0b3I7IH0pO1xuXHRcdFx0dmFyIGVmU2NhbGVNaW5pID0gZDMuc2NhbGVMaW5lYXIoKVxuXHRcdFx0XHRcdC5kb21haW4oZWZFeHRlbnQpXG5cdFx0XHRcdFx0Ly8gLnJhbmdlKFswLCA1XSk7XG5cdFx0XHRcdFx0LnJhbmdlKFttaW5pTWluUmFkLCBtaW5pTWF4UmFkXSk7XG5cdFx0XHR2YXIgZWZTY2FsZU1haW4gPSBkMy5zY2FsZUxpbmVhcigpXG5cdFx0XHRcdFx0LmRvbWFpbihlZkV4dGVudClcblx0XHRcdFx0XHQvLyAucmFuZ2UoWzAsIDVdKTtcblx0XHRcdFx0XHQucmFuZ2UoW21haW5NaW5SYWQsIG1haW5NYXhSYWRdKTtcblx0XHRcdHZhciBlZlN1bVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuXHRcdFx0XHRcdC5kb21haW4oZDMuZXh0ZW50KGRhdGFCeVllYXIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc3VtX2VpZ2VuZmFjdG9yOyB9KSlcblx0XHRcdFx0XHQvLyAucmFuZ2UoWzAsIDVdKTtcblx0XHRcdFx0XHQucmFuZ2UoW21haW5NaW5SYWQsIG1haW5NYXhSYWRdKTtcblxuXG5cdFx0XHR2YXIgY2hhcnRXaWR0aCA9IHcgKyBtWzFdICsgbVszXSxcblx0XHRcdFx0Y2hhcnRIZWlnaHQgPSBoICsgbVswXSArIG1bMl07XG5cblx0XHRcdHZhciBjaGFydCA9IGQzLnNlbGVjdChcIiN0aW1lbGluZVwiKVxuXHRcdFx0XHRcdFx0LmFwcGVuZChcInN2Z1wiKVxuXHRcdFx0XHRcdFx0Ly8gLmF0dHIoXCJ3aWR0aFwiLCBjaGFydFdpZHRoKVxuXHRcdFx0XHRcdFx0Ly8gLmF0dHIoXCJoZWlnaHRcIiwgY2hhcnRIZWlnaHQpXG5cdFx0XHRcdFx0XHQuYXR0cihcImRhdGEtbWF4aW1pemVkSGVpZ2h0XCIsIGNoYXJ0SGVpZ2h0KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJkYXRhLWN1cnJIZWlnaHRcIiwgY2hhcnRIZWlnaHQpXG5cdFx0XHRcdFx0XHQuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyBjaGFydFdpZHRoICsgXCIgXCIgKyBjaGFydEhlaWdodClcblx0XHRcdFx0XHRcdC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaWRZTWlkIG1lZXRcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJjaGFydFwiKTtcblx0XHRcdFxuXHRcdFx0Y2hhcnQuYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJjbGlwUGF0aFwiKVxuXHRcdFx0XHQuYXR0cihcImlkXCIsIFwiY2xpcFwiKVxuXHRcdFx0XHQuYXBwZW5kKFwicmVjdFwiKVxuXHRcdFx0XHQuYXR0cihcIndpZHRoXCIsIHcpXG5cdFx0XHRcdC5hdHRyKFwiaGVpZ2h0XCIsIG1haW5IZWlnaHQpO1xuXG5cdFx0XHR2YXIgbWFpbkNvbnRhaW5lciA9IGNoYXJ0LmFwcGVuZChcImdcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBtWzBdICsgXCIpXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcIndpZHRoXCIsIGNoYXJ0V2lkdGgpXG5cdFx0XHRcdFx0XHQuYXR0cihcImhlaWdodFwiLCBtYWluSGVpZ2h0KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcIm1haW5Db250YWluZXJcIik7XG5cblx0XHRcdC8vIHZhciBtYWluID0gY2hhcnQuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0dmFyIG1haW4gPSBtYWluQ29udGFpbmVyLmFwcGVuZChcImdcIilcblx0XHRcdFx0XHRcdC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbVszXSArIFwiLFwiICsgbVswXSArIFwiKVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtWzNdICsgXCIsMClcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwid2lkdGhcIiwgdylcblx0XHRcdFx0XHRcdC5hdHRyKFwiaGVpZ2h0XCIsIG1haW5IZWlnaHQpXG5cdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibWFpblwiKTtcblxuXHRcdFx0dmFyIG1pbmlDb250YWluZXIgPSBjaGFydC5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgKG1haW5IZWlnaHQgKyBtWzBdKSArIFwiKVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ3aWR0aFwiLCBjaGFydFdpZHRoKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJoZWlnaHRcIiwgbWFpbkhlaWdodClcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJtaW5pQ29udGFpbmVyXCIpO1xuXG5cdFx0XHQvLyB2YXIgbWluaSA9IGNoYXJ0LmFwcGVuZChcImdcIilcblx0XHRcdHZhciBtaW5pID0gbWluaUNvbnRhaW5lci5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdFx0XHQvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1bM10gKyBcIixcIiArIChtYWluSGVpZ2h0ICsgbVswXSkgKyBcIilcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbVszXSArIFwiLDApXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcIndpZHRoXCIsIHcpXG5cdFx0XHRcdFx0XHQuYXR0cihcImhlaWdodFwiLCBtaW5pSGVpZ2h0KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcIm1pbmlcIik7XG5cdFx0XHRcblx0XHRcdC8vbWFpbiBsYW5lcyBhbmQgdGV4dHNcblx0XHRcdHZhciBtYWluTGFuZUxpbmVzRyA9IG1haW4uYXBwZW5kKFwiZ1wiKTtcblx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSBsYW5lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRtYWluTGFuZUxpbmVzRy5hcHBlbmQoXCJsaW5lXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJ4MVwiLCBtWzFdKVxuXHRcdFx0XHRcdC5hdHRyKFwieTFcIiwgZnVuY3Rpb24oKSB7cmV0dXJuIHkyKGkpO30pXG5cdFx0XHRcdFx0LmF0dHIoXCJ4MlwiLCB3KVxuXHRcdFx0XHRcdC5hdHRyKFwieTJcIiwgZnVuY3Rpb24oKSB7cmV0dXJuIHkyKGkpO30pXG5cdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImxhbmVMaW5lXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJzdHJva2VcIiwgXCJsaWdodGdyYXlcIik7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBtYWluTGFiZWxHID0gbWFpbkNvbnRhaW5lci5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIrKG1bMF0pK1wiKVwiKTtcblx0XHRcdHZhciBtYWluTGFiZWwgPSBtYWluTGFiZWxHLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0LnRleHQoXCJOdW1iZXIgb2YgaW5mbHVlbnRpYWwgYXJ0aWNsZXMgaW4gdGhlIHllYXJcIilcblx0XHRcdFx0Ly8gLmF0dHIoXCJ4XCIsIC1tWzFdKVxuXHRcdFx0XHQvLyAuYXR0cihcInhcIiwgMClcblx0XHRcdFx0Ly8gLmF0dHIoXCJ5XCIsIDEwKVxuXHRcdFx0XHQuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxNHB4XCIpXG5cdFx0XHRcdC8vIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImxhbmVUZXh0XCIpXG5cdFx0XHRcdC5hdHRyKFwiaWRcIiwgXCJtYWluTGFiZWxcIik7XG5cdFx0XG5cdFx0XHQvLyB3cmFwLmJvdW5kcyh7aGVpZ2h0OiBtYWluSGVpZ2h0LCB3aWR0aDogbVszXX0pLm1ldGhvZChcInRzcGFuc1wiKTtcblx0XHRcdHdyYXAuYm91bmRzKHtoZWlnaHQ6IG1haW5IZWlnaHQsIHdpZHRoOiAobVszXSAqIC45KX0pO1xuXHRcdFx0Ly8gZDMuc2VsZWN0KFwiLmxhbmVUZXh0XCIpLmNhbGwod3JhcCk7XG5cdFx0XHRtYWluTGFiZWwuY2FsbCh3cmFwKTtcblxuXHRcdFx0dmFyIHN1Yk9mZnNldCA9ICQoICcjbWFpbkxhYmVsJyApLmhlaWdodCgpOyAgLy8geSBvZmZzZXQgZm9yIHRoZSBzdWIgbGFiZWxcblx0XHRcdHZhciBtYWluTGFiZWxTdWIgPSBtYWluTGFiZWxHLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIHN1Yk9mZnNldCArIFwiKVwiKVxuXHRcdFx0XHQudGV4dChcIlNpemUgb2YgY2lyY2xlcyBpbmRpY2F0ZXMgbGV2ZWwgb2YgaW5mbHVlbmNlXCIpXG5cdFx0XHRcdC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjExcHhcIilcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImxhbmVUZXh0XCIpXG5cdFx0XHRcdC5hdHRyKFwiaWRcIiwgXCJtYWluTGFiZWxTdWJcIik7XG5cblx0XHRcdHdyYXAuYm91bmRzKHtoZWlnaHQ6IG1haW5IZWlnaHQgLSBzdWJPZmZzZXQsIHdpZHRoOiAobVszXSAqIC45KX0pO1xuXHRcdFx0bWFpbkxhYmVsU3ViLmNhbGwod3JhcCk7XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0Ly9taW5pIGxhbmVzIGFuZCB0ZXh0c1xuXHRcdFx0dmFyIG1pbmlMYW5lTGluZXNHID0gbWluaS5hcHBlbmQoXCJnXCIpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGxhbmVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdG1pbmlMYW5lTGluZXNHLmFwcGVuZChcImxpbmVcIilcblx0XHRcdFx0XHQuYXR0cihcIngxXCIsIG1bMV0pXG5cdFx0XHRcdFx0LmF0dHIoXCJ5MVwiLCBmdW5jdGlvbigpIHtyZXR1cm4geTIoaSk7fSlcblx0XHRcdFx0XHQuYXR0cihcIngyXCIsIHcpXG5cdFx0XHRcdFx0LmF0dHIoXCJ5MlwiLCBmdW5jdGlvbigpIHtyZXR1cm4geTIoaSk7fSlcblx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibGFuZUxpbmVcIilcblx0XHRcdFx0XHQuYXR0cihcInN0cm9rZVwiLCBcImxpZ2h0Z3JheVwiKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIG1pbmlMYWJlbCA9IG1pbmlDb250YWluZXIuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiKyBtWzBdICtcIilcIilcblx0XHRcdFx0LmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0LnRleHQoXCJTZWxlY3QgZGF0ZSByYW5nZSB0byBmb2N1cyBvbjpcIilcblx0XHRcdFx0Ly8gLmF0dHIoXCJ4XCIsIC1tWzFdKVxuXHRcdFx0XHQvLyAuYXR0cihcInhcIiwgMClcblx0XHRcdFx0Ly8gLmF0dHIoXCJ5XCIsIDEwKVxuXHRcdFx0XHQuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxNHB4XCIpXG5cdFx0XHRcdC8vIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImxhbmVUZXh0XCIpO1xuXG5cdFx0XHR3cmFwLmJvdW5kcyh7aGVpZ2h0OiBtaW5pSGVpZ2h0LCB3aWR0aDogKG1bM10gKiAuOSl9KTtcblx0XHRcdC8vIGQzLnNlbGVjdChcIi5sYW5lVGV4dFwiKS5jYWxsKHdyYXApO1xuXHRcdFx0bWluaUxhYmVsLmNhbGwod3JhcCk7XG5cblx0XHRcdC8vIG1pbmkuYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoXCIubGFuZVRleHRcIilcblx0XHRcdC8vIFx0LmRhdGEobGFuZXMpXG5cdFx0XHQvLyBcdC5lbnRlcigpLmFwcGVuZChcInRleHRcIilcblx0XHRcdC8vIFx0LnRleHQoZnVuY3Rpb24oZCkge3JldHVybiBkO30pXG5cdFx0XHQvLyBcdC5hdHRyKFwieFwiLCAtbVsxXSlcblx0XHRcdC8vIFx0LmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQsIGkpIHtyZXR1cm4geTIoaSArIC41KTt9KVxuXHRcdFx0Ly8gXHQuYXR0cihcImR5XCIsIFwiLjVleFwiKVxuXHRcdFx0Ly8gXHQuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG5cdFx0XHQvLyBcdC5hdHRyKFwiY2xhc3NcIiwgXCJsYW5lVGV4dFwiKTtcblxuXHRcdFx0Ly8gQXhlc1xuXHRcdFx0dmFyIHhBeGlzTWluaSA9IGQzLmF4aXNCb3R0b20oKVxuXHRcdFx0XHQvLyAub3JpZW50KFwiYm90dG9tXCIpXG5cdFx0XHRcdC8vIC50aWNrcyg1KVxuXHRcdFx0XHQuc2NhbGUoeClcblx0XHRcdFx0LnRpY2tGb3JtYXQoZDMuZm9ybWF0KFwiZFwiKSk7XG5cblx0XHRcdG1pbmkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwieGF4aXNcIilcblx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIChtaW5pSGVpZ2h0KSArIFwiKVwiKVxuXHRcdFx0XHQuY2FsbCh4QXhpc01pbmkpO1xuXG5cdFx0XHR2YXIgeEF4aXNNYWluID0gZDMuYXhpc1RvcCgpXG5cdFx0XHRcdC8vIC5vcmllbnQoXCJ0b3BcIilcblx0XHRcdFx0LnNjYWxlKHgxKVxuXHRcdFx0XHQudGlja0Zvcm1hdChkMy5mb3JtYXQoXCJkXCIpKTtcblxuXHRcdFx0dmFyIHhBeGlzTWFpbk9iaiA9IG1haW4uYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwieGF4aXNcIilcblx0XHRcdFx0LmNhbGwoeEF4aXNNYWluKTtcblxuXHRcdFx0dmFyIG1haW5DbGlwUGF0aCA9IG1haW4uYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJtYWluQ2xpcFBhdGhcIilcblx0XHRcdFx0XHRcdFx0XHQuYXR0cihcImNsaXAtcGF0aFwiLCBcInVybCgjY2xpcClcIik7XG5cblx0XHRcdFxuXHRcdFx0Ly9taW5pIGl0ZW1zXG5cdFx0XHQvLyBub3RlOiBtb3VzZW92ZXIgZXZlbnRzIHdpbGwgbm90IHBsYXkgd2VsbCB3aXRoIHRoZSBicnVzaFxuXHRcdFx0dmFyIG1pbmlJdGVtcyA9IG1pbmkuYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoXCIubWluaUl0ZW1cIilcblx0XHRcdFx0LmRhdGEoZGF0YV90b3RhbClcblx0XHRcdFx0LmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibWluaUl0ZW1cIilcblx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdGQueCA9IHgoZC55ZWFyKTtcblx0XHRcdFx0XHQvLyBkLnkgPSAwOyAgLy8gZm9yIG5vd1xuXHRcdFx0XHRcdGQueSA9IG1pbmlIZWlnaHQgLyAyO1xuXHRcdFx0XHRcdC8vIGQucmFkaXVzID0gNSArIGVmU2NhbGUoZC5laWdlbmZhY3Rvcl9zY29yZSk7XG5cdFx0XHRcdFx0ZC5yYWRpdXMgPSAxICsgKCBlZlNjYWxlTWluaShkLmVpZ2VuZmFjdG9yKSApO1xuXHRcdFx0XHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHQvLyBub3QgY3VycmVudGx5IHVzaW5nIHRoaXNcblx0XHRcdGZ1bmN0aW9uIHN0YWNrSXRlbXMoaXRlbXMsIHNjYWxlKSB7XG5cdFx0XHRcdHZhciB5ZWFyc0xpc3QgPSBbXTtcblx0XHRcdFx0aXRlbXMuZWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0aWYgKCAhKGQueWVhciBpbiB5ZWFyc0xpc3QpICkge1xuXHRcdFx0XHRcdFx0eWVhcnNMaXN0LnB1c2goZC55ZWFyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR2YXIgbWF4UmFkID0gZDMubWF4KGl0ZW1zWzBdLCBmdW5jdGlvbihkKSB7cmV0dXJuIGQuX19kYXRhX18ucmFkaXVzfSk7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSB5ZWFyc0xpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0XHR0aGlzWWVhck1pbmkgPSBpdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXI9PXllYXJzTGlzdFtpXX0pO1xuXHRcdFx0XHRcdHZhciB5ID0gMDtcblx0XHRcdFx0XHR0aGlzWWVhck1pbmkuZWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRpZiAoeSA9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHkgPSBzY2FsZShkLmxhbmUpICsgbWF4UmFkO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0eSA9IHkgKyAyKmQucmFkaXVzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZC55ID0geTtcblx0XHRcdFx0XHRcdGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBzdGFja0l0ZW1zKG1pbmlJdGVtcywgeTIpO1xuXG5cdFx0XHR2YXIgbWluaU1hcmtPcGFjaXR5ID0gTWF0aC5tYXgoICgxL21heERhdGFCeVllYXIpLCAwLjMgKTtcblx0XHRcdHZhciBtaW5pTWFya3MgPSBtaW5pSXRlbXMuYXBwZW5kKFwiY2lyY2xlXCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJtaW5pTWFya1wiKVxuXHRcdFx0XHQuYXR0cihcInJcIiwgZnVuY3Rpb24oZCkge3JldHVybiBkLnJhZGl1czt9KVxuXHRcdFx0XHQvLyAuc3R5bGUoc3R5bGVzQmFzZSk7XG5cdFx0XHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgbWluaU1hcmtPcGFjaXR5KTtcblxuXG5cdFx0XHRzd2l0Y2ggKG1hcmtUeXBlKSB7XG5cdFx0XHRcdGNhc2UgJ2NpcmNsZSc6XG5cdFx0XHRcdFx0Ly9tYWluIGl0ZW1zXG5cdFx0XHRcdFx0dmFyIHllYXJJdGVtcyA9IG1haW5DbGlwUGF0aC5hcHBlbmQoXCJnXCIpLnNlbGVjdEFsbChcIi55ZWFySXRlbVwiKVxuXHRcdFx0XHRcdFx0LmRhdGEoZGF0YUJ5WWVhcilcblx0XHRcdFx0XHRcdC5lbnRlcigpLmFwcGVuZChcImdcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJ5ZWFySXRlbVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRkLnggPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0XHRcdGQueSA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHRcdFx0Ly8gZC5yYWRpdXMgPSBtYWluTWluUmFkICsgKDIgKiBlZlN1bVNjYWxlKGQuc3VtX2VpZ2VuZmFjdG9yKSk7XG5cdFx0XHRcdFx0XHRcdGQucmFkaXVzID0gZWZTdW1TY2FsZShkLnN1bV9laWdlbmZhY3Rvcik7XG5cdFx0XHRcdFx0XHRcdC8vIGQucmFkaXVzID0gbWFpbk1pblJhZCArIChkLnZhbHVlcy5sZW5ndGgqMik7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHZhciB5ZWFyTWFya3MgPSB5ZWFySXRlbXMuYXBwZW5kKFwiY2lyY2xlXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwieWVhck1hcmtcIilcblx0XHRcdFx0XHRcdC8vIC5vbignbW91c2VvdmVyJywgZXhwYW5kKVxuXHRcdFx0XHRcdFx0Lm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRyYWN0KCk7XG5cdFx0XHRcdFx0XHRcdHZhciBzZWwgPSBwYXBlckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkZCkge3JldHVybiBkZC55ZWFyPT09ZC55ZWFyfSk7XG5cdFx0XHRcdFx0XHRcdHZhciB0aGlzWWVhckl0ZW0gPSBkMy5zZWxlY3QodGhpcyk7XG5cdFx0XHRcdFx0XHRcdGV4cGFuZChzZWwsIHRoaXNZZWFySXRlbSk7XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQub24oJ21vdXNlb3V0JywgY29udHJhY3QpXG5cdFx0XHRcdFx0XHQvLyAuc3R5bGUoc3R5bGVzVmlzaWJsZSk7XG5cdFx0XHRcdFx0XHQuYXR0cihcInN0eWxlXCIsIHN0eWxlc1Zpc2libGUpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0Ly9sYWJlbCBmb3IgbnVtYmVyIG9mIHBhcGVyc1xuXHRcdFx0XHRcdHllYXJJdGVtcy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcInlcIiwgXCIuM2VtXCIpICAvL251ZGdlXG5cdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibnVtSW5kaWNhdG9yXCIpXG5cdFx0XHRcdFx0XHQudGV4dChmdW5jdGlvbihkKSB7cmV0dXJuIGQudmFsdWVzLmxlbmd0aDt9KTtcblxuXHRcdFx0XHRcdHZhciBwYXBlckl0ZW1zID0geWVhckl0ZW1zLmFwcGVuZChcImdcIikuc2VsZWN0QWxsKFwiLnBhcGVySXRlbVwiKVxuXHRcdFx0XHRcdFx0LmRhdGEoZnVuY3Rpb24oZCkge3JldHVybiBkLnZhbHVlc30pXG5cdFx0XHRcdFx0XHQuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwicGFwZXJJdGVtXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcImRhdGEteWVhclwiLCBmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhcjt9KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCwgaSkge1xuXHRcdFx0XHRcdFx0XHRkLnggPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0XHRcdGQueSA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHRcdFx0ZC5pZHggPSBpO1xuXHRcdFx0XHRcdFx0XHQvLyBkLnJhZGl1cyA9IG1haW5NaW5SYWQgKyAoMiAqIGVmU2NhbGUoZC5laWdlbmZhY3RvcikpO1xuXHRcdFx0XHRcdFx0XHRkLnJhZGl1cyA9IGVmU2NhbGVNYWluKGQuZWlnZW5mYWN0b3IpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5hdHRyKFwidGl0bGVcIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGZvciB0b29sdGlwXG5cdFx0XHRcdFx0XHRcdFx0Ly8gdmFyIHRleHQgPSBkLnRpdGxlXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0KyBcIiwgXCJcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0XHQrIGQuYXV0aG9ycy5qb2luKFwiLCBcIilcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0XHQrIFwiLCBcIlxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHRcdCsgZC5qb3VybmFsXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0KyBcIiwgXCJcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0XHQrIGQueWVhcjtcblx0XHRcdFx0XHRcdFx0XHQvLyByZXR1cm4gdGV4dDtcblx0XHRcdFx0XHRcdFx0dmFyIHNwYW4gPSAkKCAnPHNwYW4+JyApO1xuXHRcdFx0XHRcdFx0XHRzcGFuLmFwcGVuZCggJCggJzxwIGNsYXNzPVwidG9vbHRpcCB0aXRsZVwiPicgKS50ZXh0KGQudGl0bGUpICk7IFxuXHRcdFx0XHRcdFx0XHRzcGFuLmFwcGVuZCggJCggJzxwIGNsYXNzPVwidG9vbHRpcCBhdXRob3JzXCI+JyApLnRleHQoZC5hdXRob3JzLmpvaW4oXCIsIFwiKSkgKTtcblx0XHRcdFx0XHRcdFx0c3Bhbi5hcHBlbmQoICQoICc8cCBjbGFzcz1cInRvb2x0aXAgam91cm5hbFwiPicgKS50ZXh0KGQudmVudWUpICk7IFxuXHRcdFx0XHRcdFx0XHRzcGFuLmFwcGVuZCggJCggJzxwIGNsYXNzPVwidG9vbHRpcCB5ZWFyXCI+JyApLnRleHQoZC55ZWFyKSApOyBcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNwYW4uaHRtbCgpO1xuXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIHZhciB0ID0gZDMuc2VsZWN0KHRoaXMpLnNlbGVjdCgnLnBhcGVyTGFiZWwnKTtcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygkKCB0aGlzICkucG9zaXRpb24oKSk7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJCggJy5tYWluJyApLnBvc2l0aW9uKCkudG9wICsgbWFpbkhlaWdodCk7XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQub24oXCJjbGlja1wiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdHZhciB1cmwgPSBkLnVybDtcblx0XHRcdFx0XHRcdFx0Ly8gd2luZG93Lm9wZW4odXJsLCdfYmxhbmsnKTtcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0dmFyIHBhcGVyTWFya3MgPSBwYXBlckl0ZW1zLmFwcGVuZChcImNpcmNsZVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJyXCIsIDApICAvL2ZvciBub3dcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJwYXBlck1hcmtcIik7XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XG5cdFx0XHRcdGNhc2UgJ2ljb24nOlxuXHRcdFx0XHRcdC8vbWFpbiBpdGVtc1xuXHRcdFx0XHRcdHZhciB5ZWFySXRlbXMgPSBtYWluQ2xpcFBhdGguYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoXCIueWVhckl0ZW1cIilcblx0XHRcdFx0XHRcdC5kYXRhKGRhdGFCeVllYXIpXG5cdFx0XHRcdFx0XHQuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwieWVhckl0ZW1cIilcblx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0ZC54ID0gMDsgIC8vZm9yIG5vd1xuXHRcdFx0XHRcdFx0XHRkLnkgPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0XHRcdC8vIGQucmFkaXVzID0gbWFpbk1pblJhZCArICgyICogZWZTdW1TY2FsZShkLnN1bV9laWdlbmZhY3RvcikpO1xuXHRcdFx0XHRcdFx0XHRkLnJhZGl1cyA9IGVmU3VtU2NhbGUoZC5zdW1fZWlnZW5mYWN0b3IpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dmFyIHBhcGVySXRlbXMgPSB5ZWFySXRlbXMuYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoXCIucGFwZXJJdGVtXCIpXG5cdFx0XHRcdFx0XHQuZGF0YShmdW5jdGlvbihkKSB7cmV0dXJuIGQudmFsdWVzfSlcblx0XHRcdFx0XHRcdC5lbnRlcigpLmFwcGVuZChcImdcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJwYXBlckl0ZW1cIilcblx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQsIGkpIHtcblx0XHRcdFx0XHRcdFx0ZC54ID0gMDsgIC8vZm9yIG5vd1xuXHRcdFx0XHRcdFx0XHRkLnkgPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0XHRcdGQuaWR4ID0gaTtcblx0XHRcdFx0XHRcdFx0Ly8gZC5yYWRpdXMgPSBtYWluTWluUmFkICsgKDIgKiBlZlNjYWxlKGQuZWlnZW5mYWN0b3IpKTtcblx0XHRcdFx0XHRcdFx0ZC5yYWRpdXMgPSBlZlNjYWxlTWFpbihkLmVpZ2VuZmFjdG9yKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjtcblx0XHRcdFx0XHRcdH0pO1xuXG5cblx0XHRcdFx0XHR2YXIgcGFwZXJNYXJrcyA9IHBhcGVySXRlbXMuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInBhcGVyTWFya1wiKVxuXHRcdFx0XHRcdFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0XHRcdFx0LnRleHQoXCJcXHVmMGY2XCIpXG5cdFx0XHRcdFx0XHQvLyAub24oJ21vdXNlb3ZlcicsIGV4cGFuZClcblx0XHRcdFx0XHRcdC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcblx0XHRcdFx0XHRcdC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRjb250cmFjdCgpO1xuXHRcdFx0XHRcdFx0XHR2YXIgc2VsID0gcGFwZXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZGQpIHtyZXR1cm4gZGQueWVhcj09PWQueWVhcn0pO1xuXHRcdFx0XHRcdFx0XHRleHBhbmQoc2VsKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHQvLyAub24oJ21vdXNlb3V0JywgY29udHJhY3QpXG5cblx0XHRcdFx0XHR2YXIgYmJveCA9IHBhcGVyTWFya3Mubm9kZSgpLmdldEJCb3goKTtcblx0XHRcdFx0XHRwYXBlckl0ZW1zLmluc2VydChcInJlY3RcIiwgXCIucGFwZXJNYXJrXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcInhcIiwgYmJveC54KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ5XCIsIGJib3gueSlcblx0XHRcdFx0XHRcdC5hdHRyKFwid2lkdGhcIiwgYmJveC53aWR0aClcblx0XHRcdFx0XHRcdC5hdHRyKFwiaGVpZ2h0XCIsIGJib3guaGVpZ2h0KVxuXHRcdFx0XHRcdFx0LnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xuXG5cdFx0XHRcdFx0Ly8gLy9tYWluIGl0ZW1zXG5cdFx0XHRcdFx0Ly8gdmFyIHBhcGVySXRlbXMgPSBtYWluQ2xpcFBhdGguYXBwZW5kKFwiZ1wiKS5zZWxlY3RBbGwoXCIucGFwZXJJdGVtXCIpXG5cdFx0XHRcdFx0Ly8gXHQuZGF0YShkYXRhX3RvdGFsKVxuXHRcdFx0XHRcdC8vIFx0LmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdC8vIFx0LmF0dHIoXCJjbGFzc1wiLCBcInBhcGVySXRlbVwiKVxuXHRcdFx0XHRcdC8vIFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdC8vIFx0XHRkLnggPSAwOyAgLy9mb3Igbm93XG5cdFx0XHRcdFx0Ly8gXHRcdGQueSA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHQvLyBcdFx0ZC5yYWRpdXMgPSBtYWluTWluUmFkICsgKDIgKiBlZlN1bVNjYWxlKGQuc3VtX2VpZ2VuZmFjdG9yKSk7XG5cdFx0XHRcdFx0Ly8gXHRcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7XG5cdFx0XHRcdFx0Ly8gXHR9KTtcblx0XHRcdFx0XHQvLyB2YXIgcGFwZXJNYXJrcyA9IHBhcGVySXRlbXMuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHRcdC8vIFx0LmF0dHIoXCJjbGFzc1wiLCBcInBhcGVyTWFya1wiKVxuXHRcdFx0XHRcdC8vIFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0XHRcdC8vIFx0LnRleHQoXCJcXHVmMGY2XCIpXG5cdFx0XHRcdFx0Ly8gXHQvLyAub24oJ21vdXNlb3ZlcicsIGV4cGFuZClcblx0XHRcdFx0XHQvLyBcdC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdC8vIFx0XHRjb250cmFjdCgpO1xuXHRcdFx0XHRcdC8vIFx0XHR2YXIgc2VsID0gcGFwZXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZGQpIHtyZXR1cm4gZGQueWVhcj09PWQueWVhcn0pO1xuXHRcdFx0XHRcdC8vIFx0XHRleHBhbmQoc2VsKTtcblx0XHRcdFx0XHQvLyBcdFx0fSk7XG5cdFx0XHRcdFx0Ly8gXHQvLyAub24oJ21vdXNlb3V0JywgY29udHJhY3QpXG5cblx0XHRcdFx0XHQvLyB2YXIgeWVhckl0ZW1zID0gbWFpbkNsaXBQYXRoLmFwcGVuZChcImdcIikuc2VsZWN0QWxsKFwiLnllYXJJdGVtXCIpXG5cdFx0XHRcdFx0Ly8gXHQuZGF0YShkYXRhQnlZZWFyKVxuXHRcdFx0XHRcdC8vIFx0LmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdC8vIFx0LmF0dHIoXCJjbGFzc1wiLCBcInllYXJJdGVtXCIpXG5cdFx0XHRcdFx0Ly8gXHQuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0Ly8gXHRcdGQueCA9IDA7ICAvL2ZvciBub3dcblx0XHRcdFx0XHQvLyBcdFx0ZC55ID0gMDsgIC8vZm9yIG5vd1xuXHRcdFx0XHRcdC8vIFx0XHRkLnJhZGl1cyA9IG1haW5NaW5SYWQgKyAoMiAqIGVmU3VtU2NhbGUoZC5zdW1fZWlnZW5mYWN0b3IpKTtcblx0XHRcdFx0XHQvLyBcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjtcblx0XHRcdFx0XHQvLyBcdH0pO1xuXHRcdFx0XHRcdC8vIHZhciB5ZWFyTWFya3MgPSB5ZWFySXRlbXMuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHRcdC8vIFx0LmF0dHIoXCJjbGFzc1wiLCBcInllYXJNYXJrXCIpXG5cdFx0XHRcdFx0Ly8gXHQuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcIkZvbnRBd2Vzb21lXCIpXG5cdFx0XHRcdFx0Ly8gXHQudGV4dChcIlxcdWYwZjZcIilcblx0XHRcdFx0XHQvLyBcdC8vIC5vbignbW91c2VvdmVyJywgZXhwYW5kKVxuXHRcdFx0XHRcdC8vIFx0Lm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0Ly8gXHRcdGNvbnRyYWN0KCk7XG5cdFx0XHRcdFx0Ly8gXHRcdHZhciBzZWwgPSBwYXBlckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkZCkge3JldHVybiBkZC55ZWFyPT09ZC55ZWFyfSk7XG5cdFx0XHRcdFx0Ly8gXHRcdGV4cGFuZChzZWwpO1xuXHRcdFx0XHRcdC8vIFx0XHR9KTtcblx0XHRcdFx0XHQvLyBcdC8vIC5vbignbW91c2VvdXQnLCBjb250cmFjdClcblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFxuXHRcdFx0fVxuXG5cblx0XHRcdC8vIHZhciBwYXBlckxhYmVscyA9IHBhcGVySXRlbXMuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0Ly8gXHQuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG5cdFx0XHQvLyBcdC5hdHRyKFwiY2xhc3NcIiwgXCJwYXBlckxhYmVsXCIpXG5cdFx0XHQvLyBcdC5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpXG5cdFx0XHQvLyBcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC0xNSwwKVwiKSAgLy8gbnVkZ2UgbGVmdFxuXHRcdFx0Ly8gXHQvLyAudGV4dChmdW5jdGlvbihkKSB7cmV0dXJuIGQudGl0bGU7fSk7XG5cdFx0XHQvLyBcdC5odG1sKGZ1bmN0aW9uKGQpIHtyZXR1cm4gJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCInICsgZC51cmwgKyAnXCI+JyArIGQudGl0bGUgKyAnPC9hPic7fSk7XG5cblxuXG5cdFx0XHQvL21pbmkgbGFiZWxzXG5cdFx0XHQvLyBtaW5pLmFwcGVuZChcImdcIikuc2VsZWN0QWxsKFwiLm1pbmlMYWJlbHNcIilcblx0XHRcdC8vIFx0LmRhdGEoZGF0YSlcblx0XHRcdC8vIFx0LmVudGVyKCkuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0Ly8gXHQudGV4dChmdW5jdGlvbihkKSB7cmV0dXJuIGQuaWQ7fSlcblx0XHRcdC8vIFx0LmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4geChkLnN0YXJ0KTt9KVxuXHRcdFx0Ly8gXHQuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkge3JldHVybiB5MihkLmxhbmUgKyAuNSk7fSlcblx0XHRcdC8vIFx0LmF0dHIoXCJkeVwiLCBcIi41ZXhcIik7XG5cblx0XHRcdC8vYnJ1c2hcblx0XHRcdC8vIHZhciBicnVzaCA9IGQzLnN2Zy5icnVzaCgpXG5cdFx0XHR2YXIgYnJ1c2ggPSBkMy5icnVzaFgoKVxuXHRcdFx0XHRcdFx0XHRcdC8vIC54KHgpXG5cdFx0XHRcdFx0XHRcdFx0LmV4dGVudChbW3gucmFuZ2UoKVswXSwgMF0sIFt4LnJhbmdlKClbMV0sIG1pbmlIZWlnaHQgLSAxXV0pXG5cdFx0XHRcdFx0XHRcdFx0Ly8gLm9uKFwiYnJ1c2hcIiwgZGlzcGxheSk7XG5cdFx0XHRcdFx0XHRcdFx0Lm9uKFwiZW5kXCIsIGRpc3BsYXkpO1xuXHRcdFx0dmFyIGJydXNoRW1wdHkgPSB0cnVlO1xuXG5cdFx0XHRtaW5pLmFwcGVuZChcImdcIilcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInggYnJ1c2hcIilcblx0XHRcdFx0LmNhbGwoYnJ1c2gpXG5cdFx0XHRcdC5zZWxlY3RBbGwoXCJyZWN0XCIpXG5cdFx0XHRcdC5hdHRyKFwieVwiLCAxKVxuXHRcdFx0XHQuYXR0cihcImhlaWdodFwiLCBtaW5pSGVpZ2h0IC0gMSk7XG5cblx0XHRcdHZhciBleHRlbnRMaW5lcyA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAyIDsgaSsrKSB7XG5cdFx0XHRcdGV4dGVudExpbmVzLnB1c2goY2hhcnQuYXBwZW5kKFwibGluZVwiKS5hdHRyKFwiY2xhc3NcIiwgXCJleHRlbnRMaW5lXCIpKTtcblx0XHRcdH1cblx0XHRcdGZ1bmN0aW9uIHVwZGF0ZUV4dGVudExpbmVzKGxlZnQsIHJpZ2h0KSB7XG5cdFx0XHRcdC8vIGlmIChicnVzaC5lbXB0eSgpKSB7XG5cdFx0XHRcdGlmIChicnVzaEVtcHR5KSB7XG5cdFx0XHRcdFx0ZXh0ZW50TGluZXMuZm9yRWFjaChmdW5jdGlvbihzZWwpIHtzZWwuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTt9KVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGV4dGVudExpbmVzLmZvckVhY2goZnVuY3Rpb24oc2VsKSB7c2VsLnN0eWxlKFwiZGlzcGxheVwiLCBcIlwiKTt9KVxuXHRcdFx0XHRcdGV4dGVudExpbmVzWzBdLmF0dHIoXCJ4MVwiLCBtWzNdKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ5MVwiLCBtWzBdKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ4MlwiLCBsZWZ0ICsgbVszXSlcblx0XHRcdFx0XHRcdC5hdHRyKFwieTJcIiwgKG1haW5IZWlnaHQgKyBtWzBdKSk7XG5cdFx0XHRcdFx0ZXh0ZW50TGluZXNbMV0uYXR0cihcIngxXCIsIHcrbVszXSlcblx0XHRcdFx0XHRcdC5hdHRyKFwieTFcIiwgbVswXSlcblx0XHRcdFx0XHRcdC5hdHRyKFwieDJcIiwgcmlnaHQgKyBtWzNdKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJ5MlwiLCAobWFpbkhlaWdodCArIG1bMF0pKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgc2Nyb2xsRHVyID0gMTUwO1xuXHRcdFx0Y29uc29sZS5sb2coYnJ1c2gpO1xuXHRcdFx0ZnVuY3Rpb24gbW92ZUJydXNoKGRpcmVjdGlvbikge1xuXHRcdFx0XHQvLyBpZiAoYnJ1c2guZW1wdHkoKSB8fCBtaW5FeHRlbnQ8dGltZUJlZ2luIHx8IG1heEV4dGVudD50aW1lRW5kKSB7XG5cdFx0XHRcdC8vIGlmIChicnVzaC5lbXB0eSgpKSB7XG5cdFx0XHRcdGlmIChicnVzaEVtcHR5KSB7XG5cdFx0XHRcdFx0bWluRXh0ZW50ID0gKHRpbWVFbmQgKyB0aW1lQmVnaW4pIC8gMjtcblx0XHRcdFx0XHRtYXhFeHRlbnQgPSAoICh0aW1lRW5kICsgdGltZUJlZ2luKSAvIDIgKSArIDE7XG5cdFx0XHRcdFx0Y2hhbmdlRXh0ZW50KG1pbkV4dGVudCwgbWF4RXh0ZW50LCAwKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0c3dpdGNoIChkaXJlY3Rpb24pIHtcblx0XHRcdFx0XHRjYXNlICdsZWZ0Jzpcblx0XHRcdFx0XHRcdGNoYW5nZUV4dGVudChNYXRoLnJvdW5kKG1pbkV4dGVudC0xKSwgTWF0aC5yb3VuZChtYXhFeHRlbnQtMSksIHNjcm9sbER1ciwgXCJsaW5lYXJcIik7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgJ3JpZ2h0Jzpcblx0XHRcdFx0XHRcdGNoYW5nZUV4dGVudChNYXRoLnJvdW5kKG1pbkV4dGVudCsxKSwgTWF0aC5yb3VuZChtYXhFeHRlbnQrMSksIHNjcm9sbER1ciwgXCJsaW5lYXJcIik7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgJ3pvb21Jbic6XG5cdFx0XHRcdFx0XHRjaGFuZ2VFeHRlbnQoTWF0aC5yb3VuZChtaW5FeHRlbnQrMSksIE1hdGgucm91bmQobWF4RXh0ZW50LTEpLCBzY3JvbGxEdXIsIFwibGluZWFyXCIpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlICd6b29tT3V0Jzpcblx0XHRcdFx0XHRcdGNoYW5nZUV4dGVudChNYXRoLnJvdW5kKG1pbkV4dGVudC0xKSwgTWF0aC5yb3VuZChtYXhFeHRlbnQrMSksIHNjcm9sbER1ciwgXCJsaW5lYXJcIik7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHNjcm9sbEl0ZW1zID0gbWFpbkNsaXBQYXRoLmFwcGVuZChcImdcIilcblx0XHRcdFx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwic2Nyb2xsSXRlbXNcIilcblx0XHRcdFx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgKG1haW5IZWlnaHQqMC43KSArIFwiKVwiKTtcblx0XHRcdHNjcm9sbEl0ZW1zLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImxlZnRBcnJvd1wiKVxuXHRcdFx0XHQuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcIkZvbnRBd2Vzb21lXCIpXG5cdFx0XHRcdC50ZXh0KFwiXFx1ZjA2MFwiKVxuXHRcdFx0XHQuYXR0cihcInhcIiwgMClcblx0XHRcdFx0Ly8gLmF0dHIoXCJ5XCIsIG1haW5IZWlnaHQgLyAyKVxuXHRcdFx0XHQvLyAuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxLjVlbVwiKVxuXHRcdFx0XHQub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQvLyBjaGFuZ2VFeHRlbnQoTWF0aC5yb3VuZChtaW5FeHRlbnQtMSksIE1hdGgucm91bmQobWF4RXh0ZW50LTEpLCBzY3JvbGxEdXIsIFwibGluZWFyXCIpO1xuXHRcdFx0XHRcdG1vdmVCcnVzaCgnbGVmdCcpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0c2Nyb2xsSXRlbXMuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwicmlnaHRBcnJvd1wiKVxuXHRcdFx0XHQuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcIkZvbnRBd2Vzb21lXCIpXG5cdFx0XHRcdC50ZXh0KFwiXFx1ZjA2MVwiKVxuXHRcdFx0XHQuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG5cdFx0XHRcdC5hdHRyKFwieFwiLCB3KVxuXHRcdFx0XHQvLyAuYXR0cihcInlcIiwgbWFpbkhlaWdodCAvIDIpXG5cdFx0XHRcdC8vIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjEuNWVtXCIpXG5cdFx0XHRcdC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdC8vIGNoYW5nZUV4dGVudChNYXRoLnJvdW5kKG1pbkV4dGVudCsxKSwgTWF0aC5yb3VuZChtYXhFeHRlbnQrMSksIHNjcm9sbER1ciwgXCJsaW5lYXJcIik7XG5cdFx0XHRcdFx0bW92ZUJydXNoKCdyaWdodCcpO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHR2YXIgem9vbUl0ZW1zID0gc2Nyb2xsSXRlbXMuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJ6b29tSXRlbXNcIilcblx0XHRcdFx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArICh3LW1bMV0tMTApICsgXCIsMzApXCIpXG5cdFx0XHRcdFx0XHRcdFx0LnN0eWxlKFwib3BhY2l0eVwiLCAuMDEpXG5cdFx0XHRcdFx0XHRcdFx0Lm9uKFwibW91c2VvdmVyXCIsIHpvb21Nb3VzZU92ZXIpXG5cdFx0XHRcdFx0XHRcdFx0Lm9uKFwibW91c2VvdXRcIiwgem9vbU1vdXNlT3V0KTtcblx0XHRcdC8vIHNjcm9sbEl0ZW1zLmFwcGVuZChcInRleHRcIilcblx0XHRcdHpvb21JdGVtcy5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJ6b29tSW5cIilcblx0XHRcdFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0XHQudGV4dChcIlxcdWYxOTZcIikgIC8vIGh0dHA6Ly9mb250YXdlc29tZS5pby9pY29uL3BsdXMtc3F1YXJlLW8vXG5cdFx0XHRcdC8vIC5hdHRyKFwieFwiLCAxMClcblx0XHRcdFx0Ly8gLmF0dHIoXCJ5XCIsIG1haW5IZWlnaHQgLyAyKVxuXHRcdFx0XHQvLyAuYXR0cihcInhcIiwgdy1tWzFdLTEwKVxuXHRcdFx0XHQvLyAuYXR0cihcInlcIiwgMzApXG5cdFx0XHRcdC8vIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjEuNWVtXCIpXG5cdFx0XHRcdC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdC8vIGNoYW5nZUV4dGVudChNYXRoLnJvdW5kKG1pbkV4dGVudCsxKSwgTWF0aC5yb3VuZChtYXhFeHRlbnQtMSksIHNjcm9sbER1ciwgXCJsaW5lYXJcIik7XG5cdFx0XHRcdFx0bW92ZUJydXNoKCd6b29tSW4nKVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0em9vbUl0ZW1zLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInpvb21PdXRcIilcblx0XHRcdFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0XHQudGV4dChcIlxcdWYxNDdcIikgIC8vIGh0dHA6Ly9mb250YXdlc29tZS5pby9pY29uL21pbnVzLXNxdWFyZS1vL1xuXHRcdFx0XHQvLyAuYXR0cihcInlcIiwgbWFpbkhlaWdodCAvIDIpXG5cdFx0XHRcdC8vIC5hdHRyKFwieFwiLCB3LW1bMV0tMTApXG5cdFx0XHRcdC8vIC5hdHRyKFwieVwiLCA1MClcblx0XHRcdFx0LmF0dHIoXCJ5XCIsIDIwKVxuXHRcdFx0XHQvLyAuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxLjVlbVwiKVxuXHRcdFx0XHQub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQvLyBjaGFuZ2VFeHRlbnQoTWF0aC5yb3VuZChtaW5FeHRlbnQtMSksIE1hdGgucm91bmQobWF4RXh0ZW50KzEpLCBzY3JvbGxEdXIsIFwibGluZWFyXCIpO1xuXHRcdFx0XHRcdG1vdmVCcnVzaCgnem9vbU91dCcpO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRmdW5jdGlvbiB6b29tTW91c2VPdmVyKCkge1xuXHRcdFx0XHQvLyAkKCAnLnpvb21JbiwgLnpvb21PdXQnICkuZmFkZVRvKDQwMCwgMSk7XG5cdFx0XHRcdCQoICcuem9vbUl0ZW1zJyApLnN0b3AoKS5mYWRlVG8oNDAwLCAxKTtcblx0XHRcdH1cblx0XHRcdGZ1bmN0aW9uIHpvb21Nb3VzZU91dCgpIHtcblx0XHRcdFx0Ly8gJCggJy56b29tSW4sIC56b29tT3V0JyApLmZhZGVUbyg0MDAsIC4wMSk7XG5cdFx0XHRcdCQoICcuem9vbUl0ZW1zJyApLnN0b3AoKS5mYWRlVG8oNDAwLCAuMDEpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJY29uIHRvIGNsZWFyIHRoZSBicnVzaC4gRmluaXNoIGluaXRpYWxpemluZyBpdCBpbiBkaXNwbGF5KClcblx0XHRcdC8vIHZhciBjbGVhckJydXNoSWNvbiA9IGQzLnNlbGVjdChcIi5icnVzaFwiKS5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHR2YXIgY2xlYXJCcnVzaEljb24gPSBtaW5pLmFwcGVuZChcInRleHRcIilcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImNsZWFyQnJ1c2hJY29uXCIpXG5cdFx0XHRcdC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwiRm9udEF3ZXNvbWVcIilcblx0XHRcdFx0LnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMWVtXCIpXG5cdFx0XHRcdC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcblx0XHRcdFx0LmF0dHIoXCJ0aXRsZVwiLCBcIkNsZWFyIHRoZSB0aW1lbGluZSBpbiBvcmRlciB0byBkcmF3IGEgbmV3IHJlZ2lvblwiKVxuXHRcdFx0XHQudGV4dChcIlxcdWYwMGRcIik7XG5cblx0XHRcdGNoYXJ0Lm9uKFwid2hlZWwuem9vbVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoZDMuZXZlbnQud2hlZWxEZWx0YVk+MCkge1xuXHRcdFx0XHRcdFx0bW92ZUJydXNoKCd6b29tSW4nKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGQzLmV2ZW50LndoZWVsRGVsdGFZPDApIHtcblx0XHRcdFx0XHRcdG1vdmVCcnVzaCgnem9vbU91dCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZDMuZXZlbnQud2hlZWxEZWx0YVg+MCkge1xuXHRcdFx0XHRcdFx0bW92ZUJydXNoKCdsZWZ0Jyk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChkMy5ldmVudC53aGVlbERlbHRhWDwwKSB7XG5cdFx0XHRcdFx0XHRtb3ZlQnJ1c2goJ3JpZ2h0Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0Ly8gaW5pdGlhbGl6ZSBicnVzaFxuXHRcdFx0dmFyIG1pZHBvaW50WWVhciA9ICggdGltZUVuZCArIHRpbWVCZWdpbiApIC8gMixcblx0XHRcdFx0YnJ1c2hJbml0ID0gW21pZHBvaW50WWVhciwgbWlkcG9pbnRZZWFyXTtcblxuXHRcdFx0Ly8gYnJ1c2guZXh0ZW50KGJydXNoSW5pdCk7XG5cdFx0XHRtaW5pLnNlbGVjdChcIi5icnVzaFwiKS5jYWxsKGJydXNoLmV4dGVudChicnVzaEluaXQpKTtcblxuXHRcdFx0ZGlzcGxheSgpO1xuXHRcdFx0XG5cdFx0XHQkKCBkb2N1bWVudCApLnRyaWdnZXIoIFwidGltZWxpbmVWaXM6aW5pdENvbXBsZXRlXCIgKTtcblxuXG5cdFx0XHQvLyAvLyBJJ20gbm90IHN1cmUgdGhlcmUncyBhIHdheSB0byB1c2UgZDMgdHJhbnNpdGlvbnMgdG8gY29udHJvbCB0aGUgYnJ1c2gsIGJ1dCBoZXJlJ3MgYSBoYWNreSB3YXkgb2YgZG9pbmcgaXQgbWFudWFsbHkuXG5cdFx0XHQvLyB2YXIgZGx5ID0gMzA7XG5cdFx0XHQvLyBmdW5jdGlvbiBicnVzaFRyYW5zaXRpb24oZGx5KSB7XG5cdFx0XHQvLyBcdGN1cnJFeHRlbnQgPSBbYnJ1c2guZXh0ZW50KClbMF0sIGJydXNoLmV4dGVudCgpWzFdXTtcblx0XHRcdC8vIFx0YnJ1c2goZDMuc2VsZWN0KFwiLmJydXNoXCIpLnRyYW5zaXRpb24oKS5kdXJhdGlvbihkbHkpLmNhbGwoZGlzcGxheSkpO1xuXHRcdFx0Ly8gXHQvLyBicnVzaC5ldmVudChkMy5zZWxlY3QoXCIuYnJ1c2hcIikudHJhbnNpdGlvbigpLmRlbGF5KGRseSkuZHVyYXRpb24oMCkpO1xuXHRcdFx0Ly8gfVxuXHRcdFx0Ly8gLy8gYnJ1c2guZXh0ZW50KFsxOTcwLDIwMDBdKTtcblx0XHRcdC8vIHZhciBtaW5FeHRlbnQgPSBicnVzaC5leHRlbnQoKVswXSxcblx0XHRcdC8vIFx0bWF4RXh0ZW50ID0gYnJ1c2guZXh0ZW50KClbMV07XG5cdFx0XHQvLyB2YXIgZGVzdGluYXRpb25FeHRlbnQgPSAxOTk4O1xuXHRcdFx0Ly8gdmFyIGkgPSBtYXhFeHRlbnQ7XG5cdFx0XHQvLyB2YXIgcmVmcmVzaEludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdC8vIFx0ICAgXHRpID0gaSArIDAuMjtcblx0XHRcdC8vIFx0XHRicnVzaC5leHRlbnQoW21pbkV4dGVudCwgaV0pO1xuXHRcdFx0Ly8gXHRcdGJydXNoVHJhbnNpdGlvbihkbHkpO1xuXHRcdFx0Ly8gXHRcdGlmIChpID49IGRlc3RpbmF0aW9uRXh0ZW50KSB7XG5cdFx0XHQvLyBcdFx0XHRjbGVhckludGVydmFsKHJlZnJlc2hJbnRlcnZhbElkKTtcblx0XHRcdC8vIFx0XHR9XG5cdFx0XHQvLyBcdH0sIGRseSk7XG5cblx0XHRcdC8vIC8vIGF0dGVtcHQgdG8gdXNlIHR3ZWVuIGZ1bmN0aW9uIHRvIGRvIGl0LiBub3QgcmVhbGx5IHdvcmtpbmdcblx0XHRcdC8vIGJydXNoLmV4dGVudChbMTk3MCwgMjAwNV0pO1xuXHRcdFx0Ly8gYnJ1c2goZDMuc2VsZWN0KFwiLmJydXNoXCIpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig1MDAwKVxuXHRcdFx0Ly8gXHRcdC50d2VlbihcInNpZGUtZWZmZWN0c1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKHQsIHR0LCB0dHQpIHsgY29uc29sZS5sb2coYnJ1c2guZXh0ZW50KClbMF0pO1xuXHRcdFx0Ly8gXHRcdFx0YnJ1c2guZXZlbnQoZDMuc2VsZWN0KFwiLmJydXNoXCIpLnRyYW5zaXRpb24oKS5kZWxheSh0KS5kdXJhdGlvbigwKSk7XG5cdFx0XHQvLyBcdFx0fTt9KSk7XG5cdFx0XHQvLyBicnVzaChkMy5zZWxlY3QoXCIuYnJ1c2hcIikudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApKTtcblx0XHRcdC8vIGJydXNoLmV2ZW50KGQzLnNlbGVjdChcIi5icnVzaFwiKS50cmFuc2l0aW9uKCkuZGVsYXkoMTAwMCkuZHVyYXRpb24oMCkpO1xuXG5cblx0XHRcdGZ1bmN0aW9uIGNoYW5nZUV4dGVudCh5ZWFyMSwgeWVhcjIsIGR1cmF0aW9uLCBlYXNlLCBkZWxheSkge1xuXHRcdFx0XHRpZiAoZHVyYXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGR1cmF0aW9uID0gMTAwMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZWFzZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0ZWFzZSA9IFwiY3ViaWMtaW4tb3V0XCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRlbGF5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRkZWxheSA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHllYXIxIDwgdGltZUJlZ2luKSB7XG5cdFx0XHRcdFx0eWVhcjEgPSB0aW1lQmVnaW47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHllYXIyID4gdGltZUVuZCkge1xuXHRcdFx0XHRcdHllYXIyID0gdGltZUVuZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRicnVzaC5ldmVudChtaW5pLnNlbGVjdChcIi5icnVzaFwiKS50cmFuc2l0aW9uKCkuZGVsYXkoZGVsYXkpLmR1cmF0aW9uKGR1cmF0aW9uKS5lYXNlKGVhc2UpLmNhbGwoYnJ1c2guZXh0ZW50KFt5ZWFyMSwgeWVhcjJdKSkpO1xuXG5cdFx0XHR9XG5cdFx0XHQvL1xuXHRcdFx0Ly8gVGhpcyB3b3JrcyEgKGFmdGVyIG1vZGlmeWluZyB0aGUgZGlzcGxheSgpIGZ1bmN0aW9uLiBzZWUgdGhlIG5vdGUgYXQgdGhlIHRvcCBvZiBkaXNwbGF5KCkpXG5cdFx0XHQvLyBicnVzaC5ldmVudChtaW5pLnNlbGVjdChcIi5icnVzaFwiKS50cmFuc2l0aW9uKCkuZGVsYXkoMTAwMCkuZHVyYXRpb24oMTAwMCkuY2FsbChicnVzaC5leHRlbnQoWzE5NzAsIDIwMDBdKSlcblx0XHRcdC8vIFx0XHQuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtjb25zb2xlLmxvZyhcImluaXRpYWxpemVkXCIpO30pKTtcblx0XHRcdC8vIHZhciBpbml0RHVyYXRpb24gPSAxMDAwLFxuXHRcdFx0Ly8gXHRpbml0RGVsYXkgPSAxMDAwO1xuXHRcdFx0Ly8gY2hhbmdlRXh0ZW50KDE5NzAsIDIwMDAsIGluaXREdXJhdGlvbiwgXCJjdWJpYy1pbi1vdXRcIiwgaW5pdERlbGF5KTtcblx0XHRcdC8vIGQzLnRyYW5zaXRpb24oXCJpbml0RGVtb1RyYW5zaXRpb25cIikuZGVsYXkoaW5pdERlbGF5ICsgaW5pdER1cmF0aW9uKVxuXHRcdFx0Ly8gXHQuZWFjaChcImVuZFwiLCBkZW1vRXhwYW5kKTtcblx0XHRcdC8vIGRlbW9Jbml0KCk7XG5cblx0XHRcdC8vIG5vdCB1c2luZyB0aGlzIGN1cnJlbnRseVxuXHRcdFx0ZnVuY3Rpb24gZXhwYW5kQWxsKCkge1xuXHRcdFx0XHRleHBhbmQocGFwZXJJdGVtcyk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgbWF4RUYgPSBkMy5tYXgoZGF0YV90b3RhbCwgZnVuY3Rpb24oZCkge3JldHVybiBkLmVpZ2VuZmFjdG9yO30pO1xuXG5cdFx0XHRmdW5jdGlvbiBjbGVhckJydXNoKCkge1xuXHRcdFx0XHR2YXIgbWlkID0gKGJydXNoLmV4dGVudCgpWzFdICsgYnJ1c2guZXh0ZW50KClbMF0pIC8gMjtcblx0XHRcdFx0Y2hhbmdlRXh0ZW50KG1pZCwgbWlkLCAwKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0ZnVuY3Rpb24gZGlzcGxheSgpIHtcblx0XHRcdFx0Ly8gbm90ZTogY2FsY3VsYXRpbmcgdGhlIGJydXNoIGV4dGVudCB1c2luZyBicnVzaC5leHRlbnQoKSBkb2Vzbid0IHJlYWxseSB3b3JrIGhlcmUgKHdpdGggdHJhbnNpdGlvbiB0aWNrcylcblx0XHRcdFx0Ly8gYmVjYXVzZSBpdCBnb2VzIHRoZSBmaW5hbCBleHRlbnQgdmFsdWVzIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHRyYW5zaXRpb24uXG5cdFx0XHRcdC8vIFNvIGluc3RlYWQsIGdldCB0aGUgbWVhc3VyZW1lbnRzIG9mIHRoZSBicnVzaCBlbGVtZW50IGFuZCBjYWxjdWxhdGUgdGhlIGV4dGVudCB1c2luZyB0aGUgc2NhbGUgKHguaW52ZXJ0KCkpXG5cdFx0XHRcdC8vIHZhciBleHRlbnRTZWxlY3QgPSBtaW5pLnNlbGVjdChcIi5icnVzaFwiKS5zZWxlY3QoXCIuZXh0ZW50XCIpO1xuXHRcdFx0XHR2YXIgZXh0ZW50U2VsZWN0ID0gbWluaS5zZWxlY3QoXCIuYnJ1c2hcIikuc2VsZWN0KFwiLnNlbGVjdGlvblwiKTtcblx0XHRcdFx0dmFyIG1pbkV4dGVudFNjcmVlbiA9ICtleHRlbnRTZWxlY3QuYXR0cihcInhcIik7XG5cdFx0XHRcdHZhciBtYXhFeHRlbnRTY3JlZW4gPSBtaW5FeHRlbnRTY3JlZW4gKyAoK2V4dGVudFNlbGVjdC5hdHRyKFwid2lkdGhcIikpO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyh4LmludmVydChtYXhFeHRlbnRTY3JlZW4pKTtcblx0XHRcdFx0Ly8gdmFyIG1pbkV4dGVudCA9IGJydXNoLmV4dGVudCgpWzBdLFxuXHRcdFx0XHQvLyBcdG1heEV4dGVudCA9IGJydXNoLmV4dGVudCgpWzFdLFxuXHRcdFx0XHRtaW5FeHRlbnQgPSB4LmludmVydChtaW5FeHRlbnRTY3JlZW4pO1xuXHRcdFx0XHRtYXhFeHRlbnQgPSB4LmludmVydChtYXhFeHRlbnRTY3JlZW4pO1xuXG5cblxuXHRcdFx0XHQvLyBoaWRlIGFycm93cyBpZiB5b3UgY2FuJ3QgZ28gYW55IGZ1cnRoZXJcblx0XHRcdFx0aWYgKG1pbkV4dGVudCA8PSB0aW1lQmVnaW4pIHtcblx0XHRcdFx0XHRkMy5zZWxlY3QoXCIubGVmdEFycm93XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZDMuc2VsZWN0KFwiLmxlZnRBcnJvd1wiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG1heEV4dGVudCA+PSB0aW1lRW5kKSB7XG5cdFx0XHRcdFx0ZDMuc2VsZWN0KFwiLnJpZ2h0QXJyb3dcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkMy5zZWxlY3QoXCIucmlnaHRBcnJvd1wiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gaGlkZSB0aGUgem9vbUluIGJ1dHRvbiBpZiB3ZSdyZSB6b29tZWQgaW4gdG9vIGZhclxuXHRcdFx0XHRpZiAobWF4RXh0ZW50IC0gbWluRXh0ZW50IDw9IDIpIHtcblx0XHRcdFx0XHQvLyBkMy5zZWxlY3QoXCIuem9vbUluXCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdFx0ZDMuc2VsZWN0KFwiLnpvb21JblwiKS5jbGFzc2VkKFwiaGlkZGVuXCIsIHRydWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIGQzLnNlbGVjdChcIi56b29tSW5cIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwiXCIpO1xuXHRcdFx0XHRcdGQzLnNlbGVjdChcIi56b29tSW5cIikuY2xhc3NlZChcImhpZGRlblwiLCBmYWxzZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gXHQvLyBpZiAoYnJ1c2guZW1wdHkoKSkge1xuXHRcdFx0Ly8gXHRpZiAoZDMuZXZlbnQuc2VsZWN0aW9uID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Y2xlYXJCcnVzaEljb24uc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdFx0XHRkMy5zZWxlY3QoXCIubGVmdEFycm93XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdFx0ZDMuc2VsZWN0KFwiLnJpZ2h0QXJyb3dcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdC8vIFx0fSBlbHNlIHtcblx0XHRcdC8vIFx0XHRjbGVhckJydXNoSWNvbi5zdHlsZShcImRpc3BsYXlcIiwgXCJcIilcblx0XHRcdC8vIFx0XHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgMClcblx0XHRcdC8vIFx0XHRcdC8vIC5zdHlsZShcInotaW5kZXhcIiwgLTk5KVxuXHRcdFx0Ly8gXHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgY29uc3RydWN0VHJhbnNsYXRlKG1heEV4dGVudFNjcmVlbi0yLCAxNSkpXG5cdFx0XHQvLyBcdFx0XHQudHJhbnNpdGlvbigpLmR1cmF0aW9uKDMwMClcblx0XHRcdC8vIFx0XHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgLjQpO1xuXHRcdFx0Ly8gXHRcdGNsZWFyQnJ1c2hJY29uLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBcdFx0XHRjbGVhckJydXNoKCk7XG5cdFx0XHQvLyBcdFx0XHRjb250cmFjdCgpO1xuXHRcdFx0Ly8gXHRcdH0pO1xuXHRcdFx0Ly8gXHR9XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vXG5cdFx0XHQvLyBcdC8vIEhpZGUgbWFpbiBpdGVtcyBpZiB0aGUgYnJ1c2ggaXMgZW1wdHlcblx0XHRcdC8vIFx0Ly8gaWYgKGJydXNoLmVtcHR5KCkpIHtcblx0XHRcdC8vIFx0aWYgKGQzLmV2ZW50LnNlbGVjdGlvbiA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIHllYXJJdGVtcy5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdFx0XHRcdC8vIGNoYW5nZUV4dGVudCh0aW1lQmVnaW4sIHRpbWVFbmQsIDApO1xuXHRcdFx0XHRcdC8vXG5cdFx0XHRcdFx0Ly8gc2hvdyBhbGwgbWFpbiBpdGVtcywgYnV0IGtlZXAgdGhlIGJydXNoIGhpZGRlblxuXHRcdFx0XHRcdHVwZGF0ZU1haW4odGltZUJlZ2luLHRpbWVFbmQpO1xuXHRcdFx0XHRcdC8vIHRoaXMgd2lsbCByZW1vdmUgdGhlIGV4dGVudCBsaW5lczpcblx0XHRcdFx0XHR1cGRhdGVFeHRlbnRMaW5lcygpO1xuXHRcdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdFx0Ly8gXHRcdC8vIGQzLnNlbGVjdChcIi5icnVzaFwiKS5hdHRyKFwiZGlzcGxheVwiLCBcIlwiKTtcblx0XHRcdC8vIFx0XHR1cGRhdGVNYWluKG1pbkV4dGVudCwgbWF4RXh0ZW50KTtcblx0XHRcdC8vIFx0XHR1cGRhdGVFeHRlbnRMaW5lcyhtaW5FeHRlbnRTY3JlZW4sIG1heEV4dGVudFNjcmVlbik7XG5cdFx0XHQvLyBcdH1cblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gdXBkYXRlTWFpbihtaW5FeHRlbnQsIG1heEV4dGVudCkge1xuXHRcdFx0XHRcblx0XHRcdFx0c3dpdGNoIChtYXJrVHlwZSkge1xuXHRcdFx0XHRcdGNhc2UgJ2NpcmNsZSc6XG5cdFx0XHRcdFx0XHR2YXIgdmlzSXRlbXMgPSB5ZWFySXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyIDwgbWF4RXh0ZW50ICYmIGQueWVhciA+IG1pbkV4dGVudDt9KVxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2codmlzSXRlbXMpO1xuXHRcdFx0XHRcdFx0dmFyIG5vdFZpc0l0ZW1zID0geWVhckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhcj49IG1heEV4dGVudCB8fCBkLnllYXIgPD0gbWluRXh0ZW50O30pO1xuXHRcdFx0XHRcdFx0dmlzSXRlbXMuc3R5bGUoXCJkaXNwbGF5XCIsIFwiXCIpO1xuXHRcdFx0XHRcdFx0bm90VmlzSXRlbXMuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGJydXNoLmV4dGVudCgpKTtcblxuXHRcdFx0XHRcdFx0Ly8gbWluaS5zZWxlY3QoXCIuYnJ1c2hcIilcblx0XHRcdFx0XHRcdC8vIFx0LmNhbGwoYnJ1c2guZXh0ZW50KFttaW5FeHRlbnQsIG1heEV4dGVudF0pKTtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKG1heEV4dGVudC1taW5FeHRlbnQpO1xuXG5cdFx0XHRcdFx0XHR4MS5kb21haW4oW21pbkV4dGVudCwgbWF4RXh0ZW50XSk7XG5cblx0XHRcdFx0XHRcdC8vIHVwZGF0ZSBzdHlsZXMgb2YgbWluaSBpdGVtcyB0aGF0IGFyZSB2aXNpYmxlIGluIHRoZSBtYWluIGRpc3BsYXkuXG5cdFx0XHRcdFx0XHQvLyByZXNldCBhbGwgdG8gbm9ybWFsLCB0aGVuIHN0eWxlIGp1c3QgdGhlIHZpc2libGUgb25lc1xuXHRcdFx0XHRcdFx0Ly8gbWluaUl0ZW1zLnN0eWxlKHN0eWxlc0Jhc2UpO1xuXHRcdFx0XHRcdFx0Ly8gbWluaUl0ZW1zLnN0eWxlKHN0eWxlc1Zpc2libGUpO1xuXHRcdFx0XHRcdFx0bWluaUl0ZW1zLmF0dHIoXCJzdHlsZVwiLCBzdHlsZXNWaXNpYmxlKTtcblx0XHRcdFx0XHRcdG1pbmlJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhtaW5FeHRlbnQpO1xuXHRcdFx0XHRcdFx0XHR2YXIgbWF0Y2ggPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0Ly8gdmlzSXRlbXMuZm9yRWFjaChmdW5jdGlvbihkZCkge1xuXHRcdFx0XHRcdFx0XHR2aXNJdGVtcy5lYWNoKGZ1bmN0aW9uKGRkKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGQuaWQ9PWRkLmZpcnN0VGl0bGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdG1hdGNoID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHRcdFx0XHRcdC8vIH0pLnN0eWxlKHN0eWxlc1Zpc2libGUpO1xuXHRcdFx0XHRcdFx0XHR9KS5hdHRyKFwic3R5bGVcIiwgc3R5bGVzVmlzaWJsZSk7XG5cblx0XHRcdFx0XHRcdC8vdXBkYXRlIG1haW4gaXRlbSBtYXJrc1xuXHRcdFx0XHRcdFx0dmlzSXRlbXMuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdGQueCA9IHgxKGQueWVhcik7XG5cdFx0XHRcdFx0XHRcdGQueSA9IHkxKGQubGFuZSkgKyBtYWluTWluUmFkO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHllYXJNYXJrcyk7XG5cdFx0XHRcdFx0XHR5ZWFyTWFya3MuYXR0cihcInJcIiwgZnVuY3Rpb24oZCkge3JldHVybiBkLnJhZGl1czt9KTtcblxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlICdpY29uJzpcblx0XHRcdFx0XHRcdHZhciB2aXNJdGVtcyA9IHllYXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXIgPCBtYXhFeHRlbnQgJiYgZC55ZWFyID4gbWluRXh0ZW50O30pXG5cdFx0XHRcdFx0XHR2YXIgbm90VmlzSXRlbXMgPSB5ZWFySXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyPj0gbWF4RXh0ZW50IHx8IGQueWVhciA8PSBtaW5FeHRlbnQ7fSk7XG5cdFx0XHRcdFx0XHR2aXNJdGVtcy5zdHlsZShcImRpc3BsYXlcIiwgXCJcIik7XG5cdFx0XHRcdFx0XHRub3RWaXNJdGVtcy5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coYnJ1c2guZXh0ZW50KCkpO1xuXG5cdFx0XHRcdFx0XHQvLyBtaW5pLnNlbGVjdChcIi5icnVzaFwiKVxuXHRcdFx0XHRcdFx0Ly8gXHQuY2FsbChicnVzaC5leHRlbnQoW21pbkV4dGVudCwgbWF4RXh0ZW50XSkpO1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cobWF4RXh0ZW50LW1pbkV4dGVudCk7XG5cdFx0XHRcdFx0XHQvLyB1cGRhdGVFeHRlbnRMaW5lcyhtaW5FeHRlbnRTY3JlZW4sIG1heEV4dGVudFNjcmVlbik7XG5cblx0XHRcdFx0XHRcdHgxLmRvbWFpbihbbWluRXh0ZW50LCBtYXhFeHRlbnRdKTtcblxuXHRcdFx0XHRcdFx0Ly8gdXBkYXRlIHN0eWxlcyBvZiBtaW5pIGl0ZW1zIHRoYXQgYXJlIHZpc2libGUgaW4gdGhlIG1haW4gZGlzcGxheS5cblx0XHRcdFx0XHRcdC8vIHJlc2V0IGFsbCB0byBub3JtYWwsIHRoZW4gc3R5bGUganVzdCB0aGUgdmlzaWJsZSBvbmVzXG5cdFx0XHRcdFx0XHQvLyBtaW5pSXRlbXMuc3R5bGUoc3R5bGVzQmFzZSk7XG5cdFx0XHRcdFx0XHRtaW5pSXRlbXMuYXR0cihcInN0eWxlXCIsIHN0eWxlc0Jhc2UpO1xuXHRcdFx0XHRcdFx0bWluaUl0ZW1zLmZpbHRlcihmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBtYXRjaCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHQvLyB2aXNJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGRkKSB7XG5cdFx0XHRcdFx0XHRcdHZpc0l0ZW1zLmVhY2goZnVuY3Rpb24oZGQpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoZC5pZD09ZGQuZmlyc3RUaXRsZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWF0Y2ggPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdFx0XHRcdFx0fSkuc3R5bGUoc3R5bGVzVmlzaWJsZSk7XG5cblx0XHRcdFx0XHRcdC8vdXBkYXRlIG1haW4gaXRlbSBtYXJrc1xuXHRcdFx0XHRcdFx0dmlzSXRlbXMuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdC8vIGQueCA9IHgxKGQueWVhcikgLSAxMDtcblx0XHRcdFx0XHRcdFx0ZC54ID0geDEoZC55ZWFyKTtcblx0XHRcdFx0XHRcdFx0ZC55ID0geTEoZC5sYW5lKSArIDIwO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdHBhcGVyTWFya3MuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLmlkeC8yICsgXCIsXCIgKyBkLmlkeCozICsgXCIpXCI7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBcIjBcIiArIFwiLFwiICsgZC5pZHgqMyArIFwiKVwiO1xuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdC5zdHlsZShcImZpbGxcIiwgXCJibGFja1wiKVxuXHRcdFx0XHRcdFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG5cdFx0XHRcdFx0XHRcdC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjEuNWVtXCIpO1xuXHRcdFx0XHRcdFx0XHQvLyAuc3R5bGUoXCJmb250LXNpemVcIiwgZnVuY3Rpb24oZCkge3JldHVybiAoZC5yYWRpdXMvMTApICsgXCJlbVwiO30pO1xuXG5cdFx0XHRcdFx0XHRwYXBlckl0ZW1zLmVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgaXRlbSA9IGQzLnNlbGVjdCh0aGlzKTtcblx0XHRcdFx0XHRcdFx0dmFyIG0gPSBpdGVtLnNlbGVjdChcIi5wYXBlck1hcmtcIik7XG5cdFx0XHRcdFx0XHRcdHZhciBiYm94ID0gbS5ub2RlKCkuZ2V0QkJveCgpO1xuXHRcdFx0XHRcdFx0XHRpdGVtLnNlbGVjdChcInJlY3RcIilcblx0XHRcdFx0XHRcdFx0XHQuYXR0cihcInhcIiwgYmJveC54KVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKFwieVwiLCBiYm94LnkpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoXCJ3aWR0aFwiLCBiYm94LndpZHRoKVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKFwiaGVpZ2h0XCIsIGJib3guaGVpZ2h0KVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIG0uYXR0cihcInRyYW5zZm9ybVwiKSlcblx0XHRcdFx0XHRcdFx0XHQuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIik7XG5cdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKG0uYXR0cihcInRyYW5zZm9ybVwiKSk7XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblxuXG5cdFx0XHRcdC8vdXBkYXRlIHRoZSBpdGVtIGxhYmVsc1xuXHRcdFx0XHQvLyB2YXIgcm90YXRlID0gLTIwO1xuXHRcdFx0XHRmdW5jdGlvbiBfcm90YXRlKHJvdGF0aW9uKSB7XG5cdFx0XHRcdFx0bGFiZWxzLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyBcblx0XHRcdFx0XHRcdHJldHVybiBcInJvdGF0ZShcIiArIHJvdGF0aW9uICsgXCIsXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiOyBcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBjb25zdHJhaW50IHJlbGF4YXRpb25cblx0XHRcdFx0Ly8gaHR0cDovL2JsLm9ja3Mub3JnL3N5bnRhZ21hdGljLzQwNTMwOTZcblx0XHRcdFx0dmFyIGFscGhhID0gMTtcblx0XHRcdFx0dmFyIHNwYWNpbmcgPSAxNTtcblx0XHRcdFx0ZnVuY3Rpb24gcmVsYXgobGFiZWxzKSB7XG5cdFx0XHRcdFx0Ly8gTW92ZSB0ZXh0IGlmIG92ZXJsYXBwaW5nIChyZWN1cnNpdmVseSlcblx0XHRcdFx0XHR2YXIgYWdhaW4gPSBmYWxzZTtcblx0XHRcdFx0XHRsYWJlbHMuZWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkMy5zZWxlY3QodGhpcykuYXR0cihcInhcIikpO1xuXHRcdFx0XHRcdFx0dmFyIGEgPSB0aGlzO1xuXHRcdFx0XHRcdFx0dmFyIGRhID0gZDMuc2VsZWN0KGEpO1xuXHRcdFx0XHRcdFx0dmFyIGF4ID0gZGEuYXR0cihcInhcIik7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhheCk7XG5cdFx0XHRcdFx0XHRsYWJlbHMuZWFjaChmdW5jdGlvbihkZCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgYiA9IHRoaXM7XG5cdFx0XHRcdFx0XHRcdC8vIGlmIChhID09IGIpIHtcblx0XHRcdFx0XHRcdFx0Ly8gXHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XHRcdFx0dmFyIGRiID0gZDMuc2VsZWN0KGIpO1xuXHRcdFx0XHRcdFx0XHR2YXIgYnggPSBkYi5hdHRyKFwieFwiKTtcblx0XHRcdFx0XHRcdFx0dmFyIGRlbHRhWCA9IGF4IC0gYng7XG5cdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRlbHRhWCk7XG5cdFx0XHRcdFx0XHRcdC8vIGlmIChNYXRoLmFicyhkZWx0YVgpID4gc3BhY2luZykge1xuXHRcdFx0XHRcdFx0XHQvLyBcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRcdFx0XHRpZiAoIChhICE9IGIpICYmIE1hdGguYWJzKGRlbHRhWCkgPCBzcGFjaW5nKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGVsdGFYKTtcblx0XHRcdFx0XHRcdFx0XHQvLyBjb2xsaXNpb24gZGV0ZWN0ZWRcblx0XHRcdFx0XHRcdFx0XHRhZ2FpbiA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHNpZ24gPSBkZWx0YVggPiAwID8gMSA6IC0xO1xuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGEpO1xuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRiLmF0dHIoXCJ4XCIpKTtcblx0XHRcdFx0XHRcdFx0XHRkLnggPSArYXggKyAoc2lnbiphbHBoYSk7XG5cdFx0XHRcdFx0XHRcdFx0ZGQueCA9ICtieCAtIChzaWduKmFscGhhKTtcblx0XHRcdFx0XHRcdFx0XHRkYS5hdHRyKFwieFwiLCBkLngpO1xuXHRcdFx0XHRcdFx0XHRcdGRiLmF0dHIoXCJ4XCIsIGRkLngpO1xuXHRcdFx0XHRcdFx0XHRcdC8vIGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDUwMCwgMClcIik7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGIuYXR0cihcInhcIikpO1xuXHRcdFx0XHRcdFx0XHRcdC8vIGQueCArPSBzaWduKmFscGhhO1xuXHRcdFx0XHRcdFx0XHRcdC8vIGEueCArPSAxO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRpZiAoYWdhaW4pIHtcblx0XHRcdFx0XHRcdC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQvLyBcdHJlbGF4KGxhYmVscyk7XG5cdFx0XHRcdFx0XHQvLyB9LCAyKTtcblx0XHRcdFx0XHRcdHJlbGF4KGxhYmVscyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdF9yb3RhdGUoLTIwKTtcblx0XHRcdFx0XHRcdC8vXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gbGFiZWxzID0gaXRlbVJlY3RzLnNlbGVjdEFsbChcIi55ZWFySXRlbUxhYmVsXCIpXG5cdFx0XHRcdC8vIFx0LmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHtkLnggPSB4MShNYXRoLm1heChkLmtleSwgbWluRXh0ZW50KSk7IHJldHVybiBkLng7fSlcblx0XHRcdFx0Ly8gXHQuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkge2QueSA9IGQuY3k7IHJldHVybiBkLnk7fSlcblx0XHRcdFx0Ly8gXHQuZGF0YSh2aXNJdGVtcyk7XG5cdFx0XHRcdC8vIFx0Ly8gLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4geDEoTWF0aC5tYXgoZC5zdGFydCwgbWluRXh0ZW50KSArIDIpO30pO1xuXHRcdFx0XHQvLyBcdC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIFwicm90YXRlKFwiICsgcm90YXRlICsgXCIsXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiOyB9KTtcblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly8gbGFiZWxzLmVudGVyKCkuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHQvLyBcdC50ZXh0KGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55ZWFyICsgXCI6IFwiICsgZC52YWx1ZXMubGVuZ3RoICsgXCIgcGFwZXJzXCI7fSlcblx0XHRcdFx0Ly8gXHQuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkge2QueCA9IHgxKE1hdGgubWF4KGQua2V5LCBtaW5FeHRlbnQpKTsgcmV0dXJuIGQueDt9KVxuXHRcdFx0XHQvLyBcdC8vIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7ZC55ID0geTEoZC5sYW5lICsgLjUpOyByZXR1cm4gZC55O30pXG5cdFx0XHRcdC8vIFx0Ly8gLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHtkLnkgPSB5MShkLmxhbmUpK3JhZDsgcmV0dXJuIGQueTt9KVxuXHRcdFx0XHQvLyBcdC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7ZC55ID0gZC5jeTsgcmV0dXJuIGQueTt9KVxuXHRcdFx0XHQvLyBcdC5hdHRyKFwiY2xhc3NcIiwgXCJ5ZWFySXRlbUxhYmVsXCIpXG5cdFx0XHRcdC8vIFx0LmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuXHRcdFx0XHQvLyBcdC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIFwicm90YXRlKFwiICsgcm90YXRlICsgXCIsXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiOyB9KVxuXHRcdFx0XHQvLyBcdC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHQvLyBcdFx0XHRjb25zb2xlLmxvZyhkLngpO1xuXHRcdFx0XHQvLyBcdFx0fSk7XG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIGxhYmVscy5leGl0KCkucmVtb3ZlKCk7XG5cblx0XHRcdFx0Ly91cGRhdGUgYXhpc1xuXHRcdFx0XHR4QXhpc01haW5PYmouY2FsbCh4QXhpc01haW4pO1xuXG5cdFx0XHRcdC8vIC8vIG9ubHkgdXNlIG9uZSBvZiB0aGUgZm9sbG93aW5nIChvciBub25lKVxuXHRcdFx0XHQvLyBfcm90YXRlKC0yMCk7XG5cdFx0XHRcdC8vIHJlbGF4KGxhYmVscyk7XG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCQoJy5tYWluQ2xpcFBhdGgnKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCQoJy5jaGFydCcpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcblx0XHRcdFx0bGFiZWxzQ29sbGlzaW9uRGV0ZWN0KCk7XG5cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0dmFyIGFmdGVyVHJhbnNpdGlvblggPSBmdW5jdGlvbihkLCBpKSB7XG5cdFx0XHRcdC8vIHJldHVybiB4MSgrZC55ZWFyKSArICgoaSppKSozKTtcblx0XHRcdFx0cmV0dXJuIChpKmkpKjM7XG5cdFx0XHR9O1xuXHRcdFx0dmFyIGFmdGVyVHJhbnNpdGlvblkgPSBmdW5jdGlvbihkLCBpKSB7XG5cdFx0XHRcdC8vIHJldHVybiB5MShkLmxhbmUpICsgMi4yKnJhZCppKzUqcmFkO1xuXHRcdFx0XHRyZXR1cm4gMi4xKm1haW5NaW5SYWQqaSszKm1haW5NaW5SYWQ7XG5cdFx0XHR9O1xuXHRcdFx0Ly8gZnVuY3Rpb24gZXhwYW5kKHllYXJEYXRhKSB7XG5cdFx0XHRmdW5jdGlvbiBleHBhbmQoc2VsLCB5ZWFySXRlbSkge1xuXHRcdFx0XHR2YXIgdGhpc1llYXIgPSBzZWwuYXR0cihcImRhdGEteWVhclwiKTtcblx0XHRcdFx0dmFyIHRoaXNZZWFySXRlbSA9IHllYXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXI9PXRoaXNZZWFyfSk7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXNZZWFySXRlbSk7XG5cdFx0XHRcdC8vIGNvbnRyYWN0KCk7XG5cdFx0XHRcdHZhciBkdXIgPSA1MDA7XG5cdFx0XHRcdC8vIHZhciBzZWwgPSBwYXBlckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhcj09PXllYXJEYXRhLnllYXJ9KTtcblx0XHRcdFx0Ly8gdmFyIHRyYW5zaXRpb25TdGFydFN0eWxlID0geydwb2ludGVyLWV2ZW50cyc6ICdub25lJywgJ2N1cnNvcic6ICdkZWZhdWx0J30sXG5cdFx0XHRcdC8vIFx0dHJhbnNpdGlvbkVuZFN0eWxlID0geydwb2ludGVyLWV2ZW50cyc6ICdhdXRvJywgJ2N1cnNvcic6ICdwb2ludGVyJ307XG5cdFx0XHRcdHZhciB0cmFuc2l0aW9uU3RhcnRTdHlsZSA9IFwicG9pbnRlci1ldmVudHM6IG5vbmU7IGN1cnNvcjogZGVmYXVsdDtcIixcblx0XHRcdFx0XHR0cmFuc2l0aW9uRW5kU3R5bGUgPSBcInBvaW50ZXItZXZlbnRzOiBhdXRvOyBjdXJzb3I6IHBvaW50ZXI7XCI7XG5cdFx0XHRcdC8vIHNlbC5zdHlsZShcInBvaW50ZXItZXZlbnRzXCIsIFwibm9uZVwiKVxuXHRcdFx0XHQvLyB2YXIgbGluZSA9IGQzLnN2Zy5saW5lKCkueChmdW5jdGlvbihkKSB7cmV0dXJuIGRbMF19KS55KGZ1bmN0aW9uKGQpIHtyZXR1cm4gZFsxXX0pO1xuXHRcdFx0XHR2YXIgbGluZSA9IGQzLmxpbmUoKS54KGZ1bmN0aW9uKGQpIHtyZXR1cm4gZFswXX0pLnkoZnVuY3Rpb24oZCkge3JldHVybiBkWzFdfSk7XG5cdFx0XHRcdC8vIGxpbmVkYXRhIHdpbGwgYmUgYW4gYXJyYXkgb2YgW3gsIHldIHZhbHVlcyB0aGF0IHN0YXJ0IGF0IHRoZSB5ZWFyIGNpcmNsZSBhbmQgdHJhY2sgdGhlIHBhcGVyIGNpcmNsZXNcblx0XHRcdFx0dmFyIGxpbmVkYXRhID0gW107XG5cdFx0XHRcdGxpbmVkYXRhLnB1c2goWzAsMF0pO1xuXHRcdFx0XHQvLyBzZWwuc3R5bGUodHJhbnNpdGlvblN0YXJ0U3R5bGUpXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdkZGRkZGQnKTtcblx0XHRcdFx0c2VsLmF0dHIoXCJzdHlsZVwiLCB0cmFuc2l0aW9uU3RhcnRTdHlsZSlcblx0XHRcdFx0XHQudHJhbnNpdGlvbigpLmR1cmF0aW9uKGR1cilcblx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkLCBpKSB7XG5cdFx0XHRcdFx0XHRsaW5lZGF0YS5wdXNoKFthZnRlclRyYW5zaXRpb25YKGQsIGkpLCBhZnRlclRyYW5zaXRpb25ZKGQsIGkpXSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBhZnRlclRyYW5zaXRpb25YKGQsIGkpICsgXCIsXCIgKyBhZnRlclRyYW5zaXRpb25ZKGQsIGkpICsgXCIpXCI7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQvLyAuZWFjaChcInN0YXJ0XCIsIGZ1bmN0aW9uKCkge2QzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKFwiZXhwYW5kZWRcIiwgdHJ1ZSl9KVxuXHRcdFx0XHRcdC5vbihcInN0YXJ0XCIsIGZ1bmN0aW9uKCkge2QzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKFwiZXhwYW5kZWRcIiwgdHJ1ZSl9KVxuXHRcdFx0XHRcdC8vIC5lYWNoKFwiZW5kXCIsIGZ1bmN0aW9uKCkge2QzLnNlbGVjdCh0aGlzKS5zdHlsZShcInBvaW50ZXItZXZlbnRzXCIsIFwiYXV0b1wiKTt9KTtcblx0XHRcdFx0XHQvLyAuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQub24oXCJlbmRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQvLyBkMy5zZWxlY3QodGhpcykuc3R5bGUodHJhbnNpdGlvbkVuZFN0eWxlKTtcblx0XHRcdFx0XHRcdGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwic3R5bGVcIiwgdHJhbnNpdGlvbkVuZFN0eWxlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQvLyAuc3R5bGUoXCJwb2ludGVyLWV2ZW50c1wiLCBcImF1dG9cIik7XG5cdFx0XHRcdHNlbC5zZWxlY3RBbGwoXCIucGFwZXJNYXJrXCIpLnRyYW5zaXRpb24oKS5kdXJhdGlvbihkdXIpXG5cdFx0XHRcdFx0XHRcdFx0Ly8gLnN0eWxlKFwiZm9udC1zaXplXCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gKGQucmFkaXVzLzEwKSArIFwiZW1cIjt9KVxuXHRcdFx0XHRcdC5zdHlsZVR3ZWVuKFwiZm9udC1zaXplXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBkMy5pbnRlcnBvbGF0ZShcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIiksXG5cdFx0XHRcdFx0XHRcdFx0KGQucmFkaXVzLzEwKSArIFwiZW1cIik7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuYXR0cihcInJcIiwgZnVuY3Rpb24oZCkge3JldHVybiBkLnJhZGl1czt9KTtcblxuXHRcdFx0XHQvL21ha2UgbGFiZWxzIGFwcGVhclxuXHRcdFx0XHRzZWwuc2VsZWN0QWxsKFwiLnBhcGVyTGFiZWxcIilcblx0XHRcdFx0XHQvLyAuc3R5bGUoXCJwb2ludGVyLWV2ZW50c1wiLCBcIm5vbmVcIilcblx0XHRcdFx0XHQuc3R5bGUoXCJkaXNwbGF5XCIsIFwiXCIpXG5cdFx0XHRcdFx0LnN0eWxlKFwib3BhY2l0eVwiLCAwKVxuXHRcdFx0XHRcdC50cmFuc2l0aW9uKClcblx0XHRcdFx0XHQuZGVsYXkoZnVuY3Rpb24oZCkge3JldHVybiBkdXIvMiArIGQuaWR4Kjc1O30pXG5cdFx0XHRcdFx0LmR1cmF0aW9uKGR1cilcblx0XHRcdFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuXHRcdFx0XHQvLyBsYWJlbHNDb2xsaXNpb25EZXRlY3QoKTtcblx0XHRcdFx0Ly8gZDMudHJhbnNpdGlvbigpLmR1cmF0aW9uKGR1cikuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZDMudHJhbnNpdGlvbigpLmR1cmF0aW9uKGR1cikub24oXCJlbmRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dGhpc1llYXJJdGVtLmFwcGVuZChcInBhdGhcIikuZGF0dW0obGluZWRhdGEpLmF0dHIoXCJjbGFzc1wiLCBcImpvaW5MaW5lXCIpLmF0dHIoXCJkXCIsIGxpbmUpO1xuXHRcdFx0XHRcdGRpc3BsYXkoKVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdC8vIGZ1bmN0aW9uIGNvbnRyYWN0KHllYXJEYXRhKSB7XG5cdFx0XHRmdW5jdGlvbiBjb250cmFjdCgpIHtcblx0XHRcdFx0ZDMuc2VsZWN0QWxsKFwiLmpvaW5MaW5lXCIpLnJlbW92ZSgpO1xuXHRcdFx0XHR2YXIgZHVyID0gNTAwO1xuXHRcdFx0XHQvLyB2YXIgc2VsID0gcGFwZXJJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBkLnllYXI9PT15ZWFyRGF0YS55ZWFyfSk7XG5cdFx0XHRcdHZhciBzZWwgPSBkMy5zZWxlY3RBbGwoXCIuZXhwYW5kZWRcIik7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHNlbC5lbXB0eSgpKTtcblx0XHRcdFx0c2VsLnRyYW5zaXRpb24oKS5kdXJhdGlvbihkdXIpXG5cdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCwwKVwiKVxuXHRcdFx0XHRcdC8vIC5lYWNoKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdC5vbihcImVuZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKFwiZXhwYW5kZWRcIiwgZmFsc2UpXG5cdFx0XHRcdFx0XHRcdC5zdHlsZShcInBvaW50ZXItZXZlbnRzXCIsIFwiXCIpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdHNlbC5zZWxlY3RBbGwoXCIucGFwZXJNYXJrXCIpLnRyYW5zaXRpb24oKS5kdXJhdGlvbihkdXIqMS41KVxuXHRcdFx0XHRcdC5zdHlsZVR3ZWVuKFwiZm9udC1zaXplXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBkMy5pbnRlcnBvbGF0ZShcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIiksXG5cdFx0XHRcdFx0XHRcdFx0XCIxLjVlbVwiKVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmF0dHIoXCJyXCIsIDApO1xuXHRcdFx0XHRzZWwuc2VsZWN0QWxsKFwiLnBhcGVyTGFiZWxcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdH1cblx0XHRcdC8vIGZ1bmN0aW9uIGV4cGFuZCh5ZWFyRGF0YSkge1xuXHRcdFx0Ly8gXHRjb25zb2xlLmxvZyh5ZWFyRGF0YSk7XG5cdFx0XHQvLyBcdGlmICgheWVhckRhdGEuZXhwYW5kZWQpIHtcblx0XHRcdC8vIFx0XHRcblx0XHRcdC8vIFx0XHQvLyBkMy5zZWxlY3RBbGwoXCIueWVhckl0ZW1MYWJlbFwiKS5jbGFzc2VkKFwiaGlkZGVuXCIpO1xuXHRcdFx0Ly8gXHRcdCQoICcueWVhckl0ZW1MYWJlbCcgKS5oaWRlKCk7XG5cdFx0XHQvLyBcdFx0dmFyIGR1ciA9IDUwMDtcblx0XHRcdC8vIFx0XHQvLyB2YXIgcmFkID0geWVhckRhdGEucmFkaXVzO1xuXHRcdFx0Ly8gXHRcdHZhciByYWQgPSAxMDtcblx0XHRcdC8vIFx0XHR2YXIgcGFyZW50WSA9IHllYXJEYXRhLmN5O1xuXHRcdFx0Ly8gXHRcdHZhciBtYXJrcyA9IG1haW5DbGlwUGF0aC5zZWxlY3RBbGwoXCIucGFwZXJJdGVtXCIpXG5cdFx0XHQvLyBcdFx0XHRcdFx0Ly8gLmRhdGEodmlzSXRlbXMsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuaWQ7IH0pXG5cdFx0XHQvLyBcdFx0XHRcdFx0LmRhdGEoeWVhckRhdGEudmFsdWVzKTtcblx0XHRcdC8vIFx0XHRtYXJrcy5lbnRlcigpLmFwcGVuZChcImNpcmNsZVwiKVxuXHRcdFx0Ly8gXHRcdFx0XHQvLyAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gXCJtYWluSXRlbSBtaW5pSXRlbVwiICsgZC5sYW5lO30pXG5cdFx0XHQvLyBcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJwYXBlckl0ZW1cIilcblx0XHRcdC8vIFx0XHRcdFx0Lm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihkKSB7Y29uc29sZS5sb2coZCk7fSkuYXBwZW5kKCd0ZXh0JykudGV4dCgnZCcpO1xuXHRcdFx0Ly8gXHRcdC8vIG1hcmtzLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuYXR0cihcImN5XCIsIHBhcmVudFkpLnJlbW92ZSgpO1xuXHRcdFx0Ly8gXHRcdC8vIGl0ZW1SZWN0cy5zZWxlY3RBbGwoJ3RleHQnKS5kYXRhKHllYXJEYXRhLnZhbHVlcykuZW50ZXIoKS5hcHBlbmQoJ3RleHQnKS5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7Y29uc29sZS5sb2coZCk7IHJldHVybiBkLmN4O30pLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC5jeTt9KS50ZXh0KGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC50aXRsZTt9KTtcblx0XHRcdC8vIFx0XHRtYXJrcy5leGl0KCkucmVtb3ZlKCk7XG5cdFx0XHQvL1xuXHRcdFx0Ly8gXHRcdHZhciBsYWJlbHMgPSBtYWluQ2xpcFBhdGguc2VsZWN0QWxsKFwiLnBhcGVySXRlbUxhYmVsXCIpXG5cdFx0XHQvLyBcdFx0XHQuZGF0YSh5ZWFyRGF0YS52YWx1ZXMpO1xuXHRcdFx0Ly8gXHRcdGxhYmVscy5lbnRlcigpLmFwcGVuZChcInRleHRcIilcblx0XHRcdC8vIFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJwYXBlckl0ZW1MYWJlbFwiKVxuXHRcdFx0Ly8gXHRcdFx0LmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKTtcblx0XHRcdC8vIFx0XHRsYWJlbHMuZXhpdCgpLnJlbW92ZSgpO1xuXHRcdFx0Ly9cblx0XHRcdC8vIFx0XHRtYXJrcy5hdHRyKFwiY3hcIiwgYmVmb3JlVHJhbnNpdGlvblgpXG5cdFx0XHQvLyBcdFx0XHRcdC5hdHRyKCdyJywgZnVuY3Rpb24oZCkge1xuXHRcdFx0Ly8gXHRcdFx0XHRcdFx0Ly8gZC5yYWRpdXMgPSByYWQgKyAoMiAqIGVmU3VtU2NhbGUoZC5zdW1fZWlnZW5mYWN0b3IpKTtcblx0XHRcdC8vIFx0XHRcdFx0XHRcdGQucmFkaXVzID0gcmFkICsgKDIgKiBlZlNjYWxlKGQuZWlnZW5mYWN0b3Jfc2NvcmUpKTtcblx0XHRcdC8vIFx0XHRcdFx0XHRcdHJldHVybiBkLnJhZGl1cztcblx0XHRcdC8vIFx0XHRcdFx0XHR9KVxuXHRcdFx0Ly8gXHRcdFx0XHQuYXR0cihcImN5XCIsIGJlZm9yZVRyYW5zaXRpb25ZKVxuXHRcdFx0Ly8gXHRcdFx0XHQudHJhbnNpdGlvbigpLmR1cmF0aW9uKGR1cilcblx0XHRcdC8vIFx0XHRcdFx0LmF0dHIoXCJjeFwiLCBhZnRlclRyYW5zaXRpb25YKVxuXHRcdFx0Ly8gXHRcdFx0XHQuYXR0cihcImN5XCIsIGFmdGVyVHJhbnNpdGlvblkpXG5cdFx0XHQvLyBcdFx0XHRcdC5zdHlsZShzdHlsZXNWaXNpYmxlKTtcblx0XHRcdC8vIFx0XHRsYWJlbHMuYXR0cihcInhcIiwgYmVmb3JlVHJhbnNpdGlvblgpXG5cdFx0XHQvLyBcdFx0XHQudGV4dChmdW5jdGlvbihkKSB7cmV0dXJuIGQudGl0bGU7fSlcblx0XHRcdC8vIFx0XHRcdC5hdHRyKFwieVwiLCBiZWZvcmVUcmFuc2l0aW9uWSlcblx0XHRcdC8vIFx0XHRcdC50cmFuc2l0aW9uKCkuZHVyYXRpb24oZHVyKVxuXHRcdFx0Ly8gXHRcdFx0LmF0dHIoXCJ4XCIsIGFmdGVyVHJhbnNpdGlvblgpXG5cdFx0XHQvLyBcdFx0XHQuYXR0cihcInlcIiwgYWZ0ZXJUcmFuc2l0aW9uWSk7XG5cdFx0XHQvLyBcdHllYXJEYXRhLmV4cGFuZGVkID0gdHJ1ZTtcblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gfVxuXHRcdFx0Ly9cblx0XHRcdC8vIGZ1bmN0aW9uIGNvbnRyYWN0KGQpIHtcblx0XHRcdC8vIFx0dmFyIGR1ciA9IDUwMDtcblx0XHRcdC8vIFx0aWYgKGQuZXhwYW5kZWQpIHtcblx0XHRcdC8vIFx0XHR2YXIgbWFya3MgPSBtYWluQ2xpcFBhdGguc2VsZWN0QWxsKFwiLnBhcGVySXRlbVwiKVxuXHRcdFx0Ly8gXHRcdFx0LmludGVycnVwdChcImNvbnRyYWN0XCIpXG5cdFx0XHQvLyBcdFx0XHQudHJhbnNpdGlvbihcImNvbnRyYWN0XCIpLmRlbGF5KDIwMDApLmR1cmF0aW9uKGR1cilcblx0XHRcdC8vIFx0XHRcdC5hdHRyKFwiY3hcIiwgYmVmb3JlVHJhbnNpdGlvblgpXG5cdFx0XHQvLyBcdFx0XHQuYXR0cihcImN5XCIsIDApXG5cdFx0XHQvLyBcdFx0XHQuZWFjaChcImVuZFwiLCBmdW5jdGlvbihfLCBpKSB7XG5cdFx0XHQvLyBcdFx0XHRcdGlmIChpID09PSAwKSBkLmV4cGFuZGVkID0gZmFsc2U7XG5cdFx0XHQvLyBcdFx0XHRcdH0pXG5cdFx0XHQvLyBcdFx0XHQucmVtb3ZlKCk7XG5cdFx0XHQvLyBcdFx0dmFyIGxhYmVscyA9IG1haW5DbGlwUGF0aC5zZWxlY3RBbGwoXCIucGFwZXJJdGVtTGFiZWxcIilcblx0XHRcdC8vIFx0XHRcdC5pbnRlcnJ1cHQoXCJjb250cmFjdFwiKVxuXHRcdFx0Ly8gXHRcdFx0LnRyYW5zaXRpb24oXCJjb250cmFjdFwiKS5kZWxheSgyMDAwKS5kdXJhdGlvbihkdXIpXG5cdFx0XHQvLyBcdFx0XHQuYXR0cihcInhcIiwgYmVmb3JlVHJhbnNpdGlvblgpXG5cdFx0XHQvLyBcdFx0XHQuYXR0cihcInlcIiwgMClcblx0XHRcdC8vIFx0XHRcdC5yZW1vdmUoKTtcblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gfVxuXG5cdFx0XHRmdW5jdGlvbiBsYWJlbHNDb2xsaXNpb25EZXRlY3QoKSB7XG5cdFx0XHRcdC8vIGRldGVjdCBpZiBsYWJlbHMgZ28gb2ZmIHNjcmVlblxuXG5cdFx0XHRcdC8vIGZ1bmN0aW9uIGNoZWNrU2luZ2xlTGFiZWwoZCkge1xuXHRcdFx0XHQvLyBcdHZhciBib3VuZGluZ1JlY3QgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHQvLyBcdGNvbnNvbGUubG9nKGJvdW5kaW5nUmVjdC53aWR0aCArICQoIHRoaXMgKS5wb3NpdGlvbigpLmxlZnQpO1xuXHRcdFx0XHQvLyBcdGlmICgkKCB0aGlzICkucG9zaXRpb24oKS5sZWZ0PDApIHtcblx0XHRcdFx0Ly8gXHRcdGQzLnNlbGVjdCh0aGlzKS5zZWxlY3QoXCIucGFwZXJMYWJlbFwiKS5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJzdGFydFwiKTtcblx0XHRcdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBcdFx0ZDMuc2VsZWN0KHRoaXMpLnNlbGVjdChcIi5wYXBlckxhYmVsXCIpLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKTtcblx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdC8vIH1cblx0XHRcdFx0ZnVuY3Rpb24gY2hlY2tTaW5nbGVMYWJlbChkKSB7XG5cdFx0XHRcdFx0ZnVuY3Rpb24gd3JhcEluQW5jaG9yKHN0YWJsZV91cmwsIHRleHQpIHtcblx0XHRcdFx0XHRcdC8vIHJldHVybiAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly9sYWJzLmpzdG9yLm9yZycgKyBzdGFibGVfdXJsICsgJ1wiPicgKyB0ZXh0ICsgJzwvYT4nXG5cdFx0XHRcdFx0XHRyZXR1cm4gJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCInICsgc3RhYmxlX3VybCArICdcIj4nICsgdGV4dCArICc8L2E+J1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyB2YXIgYm91bmRpbmdSZWN0ID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0XHR2YXIgdGhpc0xhYmVsID0gZDMuc2VsZWN0KHRoaXMpLnNlbGVjdChcIi5wYXBlckxhYmVsXCIpO1xuXHRcdFx0XHRcdC8vIHZhciB3b3JkcyA9IHRoaXNMYWJlbC50ZXh0KCkuc3BsaXQoXCIgXCIpO1xuXHRcdFx0XHRcdC8vIHRoaXNMYWJlbC50ZXh0KGQudGl0bGUpO1xuXHRcdFx0XHRcdHRoaXNMYWJlbC5odG1sKHdyYXBJbkFuY2hvcihkLnVybCwgZC50aXRsZSkpO1xuXHRcdFx0XHRcdHZhciB3b3JkcyA9IGQudGl0bGUuc3BsaXQoXCIgXCIpO1xuXHRcdFx0XHRcdHZhciBnaXZlVXBUaHJlc2hvbGQgPSAyMDtcblx0XHRcdFx0XHR2YXIgaSA9IDA7XG5cdFx0XHRcdFx0dmFyIHZpZXdMZWZ0RWRnZSA9ICQoICcjdGltZWxpbmUgc3ZnJyApLnBvc2l0aW9uKCkubGVmdCArIG1bM107XG5cdFx0XHRcdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdFx0XHRcdGkrKztcblx0XHRcdFx0XHRcdGlmIChpPmdpdmVVcFRocmVzaG9sZCkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHZhciBsZWZ0UG9zID0gJCggdGhpcyApLnBvc2l0aW9uKCkubGVmdDtcblx0XHRcdFx0XHRcdC8vIGlmIChsZWZ0UG9zIDwgMjApIHtcblx0XHRcdFx0XHRcdC8vIGlmIChsZWZ0UG9zIDwgbVszXSkge1xuXHRcdFx0XHRcdFx0aWYgKGxlZnRQb3MgPCB2aWV3TGVmdEVkZ2UpIHtcblx0XHRcdFx0XHRcdFx0dmFyIG51bVdvcmRzID0gd29yZHMubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHR3b3JkcyA9IHdvcmRzLnNsaWNlKDAsIG51bVdvcmRzLTIpO1xuXHRcdFx0XHRcdFx0XHR2YXIgc2hvcnRlbmVkVGl0bGUgPSB3b3Jkcy5qb2luKFwiIFwiKStcIi4uLlwiO1xuXHRcdFx0XHRcdFx0XHQvLyB0aGlzTGFiZWwudGV4dCh3b3Jkcy5qb2luKFwiIFwiKStcIi4uLlwiKTtcblx0XHRcdFx0XHRcdFx0dGhpc0xhYmVsLmh0bWwod3JhcEluQW5jaG9yKGQudXJsLCBzaG9ydGVuZWRUaXRsZSkpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIHZhciBsZWZ0UG9zID0gJCggdGhpcyApLnBvc2l0aW9uKCkubGVmdDtcblx0XHRcdFx0XHQvL1xuXHRcdFx0XHRcdC8vIGlmIChsZWZ0UG9zPDApIHtcblx0XHRcdFx0XHQvLyBcdGQzLnNlbGVjdCh0aGlzKS5zZWxlY3QoXCIucGFwZXJMYWJlbFwiKVxuXHRcdFx0XHRcdC8vIFx0XHQudGV4dChkLnRpdGxlLnNsaWNlKDAsIDEwKSk7XG5cdFx0XHRcdFx0Ly8gXHRjaGVja1NpbmdsZUxhYmVsKGQpO1xuXHRcdFx0XHRcdC8vIH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gXHRjb25zb2xlLmxvZygnbGVhdmluZyByZWN1cnNpdmUgZnVuY3Rpb24nKVxuXHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XHQvLyByZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0ZDMuc2VsZWN0QWxsKFwiLnBhcGVySXRlbS5leHBhbmRlZFwiKVxuXHRcdFx0XHRcdC5lYWNoKGNoZWNrU2luZ2xlTGFiZWwpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRmdW5jdGlvbiBkZW1vSW5pdCgpIHtcblx0XHRcdFx0Y2hhcnQuY2xhc3NlZChcImRlbW9JblByb2dyZXNzXCIsIHRydWUpO1xuXHRcdFx0XHRjbGVhckJydXNoKCk7XG5cdFx0XHRcdGNvbnRyYWN0KCk7XG5cdFx0XHRcdGRpc2FibGVJbnRlcmFjdGlvbigpO1xuXHRcdFx0XHRtaW5pLm9uKFwibW91c2Vkb3duXCIsIGRlbW9RdWl0KTtcblx0XHRcdFx0ZnVuY3Rpb24gZGVtb1F1aXQoKSB7XG5cdFx0XHRcdFx0Y2hhcnQuY2xhc3NlZChcImRlbW9JblByb2dyZXNzXCIsIGZhbHNlKTtcblx0XHRcdFx0XHRjdXJzb3JJY29uLnRyYW5zaXRpb24oMCkucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIHRyYW5zaXRpb25UaW1lcyA9IFtcblx0XHRcdFx0XHRcdDc1MCwgIC8vIDA6IGluaXRpYWwgZGVsYXkgYmVmb3JlIGFueXRoaW5nIGhhcHBlbnNcblx0XHRcdFx0XHRcdDEwMDAsICAvLyAxOiB0aW1lIHRvIG1vdmUgdGhlIGN1cnNvciB0byB0aGUgbWluaSBhcmVhXG5cdFx0XHRcdFx0XHQyMDAwLCAgLy8gMjogdGltZSB0byBkcmF3IHRoZSBpbml0aWFsIGJydXNoXG5cdFx0XHRcdFx0XHQyMDAsICAgLy8gMzogZGVsYXkgYWZ0ZXIgYnJ1c2hcblx0XHRcdFx0XHRcdDIwMDAsICAvLyA0OiB0aW1lIHRvIG1vdmUgdGhlIGN1cnNvciB0byBhIG1haW4gaXRlbVxuXHRcdFx0XHRcdFx0MzAwMCwgIC8vIDU6IGRlbGF5IHRvIHJlbW92ZSBhbmQgZW5kIHRoZSBkZW1vXG5cdFx0XHRcdFx0XTtcblx0XHRcdFx0dmFyIGN1cnNvckljb24gPSBjaGFydC5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImN1cnNvckljb25cIilcblx0XHRcdFx0XHQuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcIkZvbnRBd2Vzb21lXCIpXG5cdFx0XHRcdFx0LnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMWVtXCIpXG5cdFx0XHRcdFx0LnRleHQoXCJcXHVmMjQ1XCIpXG5cdFx0XHRcdFx0Ly8gLmF0dHIoXCJ4XCIsIDEwMClcblx0XHRcdFx0XHQvLyAuYXR0cihcInlcIiwgMzAwKTtcblx0XHRcdFx0XHQvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgxMDAsMzAwKVwiKTtcblx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHcgKyBcIixcIiArIG1haW5IZWlnaHQgKyBcIilcIik7XG5cdFx0XHRcdC8vIHZhciBpbml0RHVyYXRpb24gPSAxMDAwLFxuXHRcdFx0XHQvLyBcdGluaXREZWxheSA9IDEwMDA7XG5cdFx0XHRcdC8vIGNoYW5nZUV4dGVudCgxOTcwLCAyMDAwLCBpbml0RHVyYXRpb24sIFwiY3ViaWMtaW4tb3V0XCIsIGluaXREZWxheSk7XG5cdFx0XHRcdC8vIGQzLnRyYW5zaXRpb24oXCJpbml0RGVtb1RyYW5zaXRpb25cIikuZGVsYXkoaW5pdERlbGF5ICsgaW5pdER1cmF0aW9uKVxuXHRcdFx0XHQvLyBcdC5lYWNoKFwiZW5kXCIsIGRlbW9FeHBhbmQpO1xuXHRcdFx0XHR2YXIgZXh0ZW50U2VsZWN0ID0gbWluaS5zZWxlY3QoXCIuYnJ1c2hcIikuc2VsZWN0KFwiLmV4dGVudFwiKTtcblx0XHRcdFx0Ly8gdmFyIGluaXRCcnVzaFJhbmdlID0gWzE5NzAsIDIwMDBdO1xuXHRcdFx0XHR2YXIgeWVhclJhbmdlID0gdGltZUVuZCAtIHRpbWVCZWdpbjtcblx0XHRcdFx0aWYgKHllYXJSYW5nZSA8IDYpIHtcblx0XHRcdFx0XHR2YXIgaW5pdEJydXNoUmFuZ2UgPSBbdGltZUJlZ2luLCB0aW1lRW5kXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgaW5pdEJydXNoUmFuZ2UgPSBbdGltZUJlZ2luICsgTWF0aC5mbG9vcih5ZWFyUmFuZ2UqLjMpLCB0aW1lRW5kIC0gTWF0aC5mbG9vcih5ZWFyUmFuZ2UqLjIpXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGFuZ2VFeHRlbnQoaW5pdEJydXNoUmFuZ2VbMF0sIGluaXRCcnVzaFJhbmdlWzBdLCAwKTtcblx0XHRcdFx0Ly8gdmFyIGluaXRCcnVzaFBvc2l0aW9uID0gK2V4dGVudFNlbGVjdC5hdHRyKFwieFwiKTtcblx0XHRcdFx0dmFyIGluaXRCcnVzaFBvc2l0aW9uID0geChicnVzaC5leHRlbnQoKVsxXSkgKyBtWzNdO1xuXG5cdFx0XHRcdC8vIHNlbGVjdCBhIHllYXJJdGVtIHRvIGV4cGFuZCBmb3IgdGhlIGRlbW9cblx0XHRcdFx0dmFyIHZpc0l0ZW1zID0geWVhckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkKSB7cmV0dXJuIGQueWVhciA8IGluaXRCcnVzaFJhbmdlWzFdICYmIGQueWVhciA+IGluaXRCcnVzaFJhbmdlWzBdO30pLFxuXHRcdFx0XHRcdG51bVZpc0l0ZW1zID0gdmlzSXRlbXMuc2l6ZSgpO1xuXHRcdFx0XHRpZiAobnVtVmlzSXRlbXMgPT09IDApIHtcblx0XHRcdFx0XHQvLyBpZiB0aGVyZSBhcmUgbm8gdmlzaWJsZSBpdGVtcyBpbiB0aGUgcmFuZ2UsIGp1c3QgZ2l2ZSB1cFxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fSBlbHNlIGlmIChudW1WaXNJdGVtcyA9PT0gMSkge1xuXHRcdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lIHZpc2libGUgaXRlbSwgdXNlIGl0XG5cdFx0XHRcdFx0dmFyIHNlbEluZGV4ID0gMDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBlbHNlLCB1c2UgYW4gaXRlbSBhIGxpdHRsZSB0byB0aGUgcmlnaHQgb2YgY2VudGVyXG5cdFx0XHRcdFx0dmFyIHNlbEluZGV4ID0gTWF0aC5jZWlsKG51bVZpc0l0ZW1zKi41NSk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdHZhciBkZW1vWWVhckl0ZW0gPSB2aXNJdGVtcy5maWx0ZXIoZnVuY3Rpb24oZCwgaSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gaSA9PT0gc2VsSW5kZXg7XG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAoIWNoYXJ0LmNsYXNzZWQoXCJkZW1vSW5Qcm9ncmVzc1wiKSkge1xuXHRcdFx0XHRcdC8vIHF1aXRcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cblx0XHRcdFx0Y3Vyc29ySWNvbi50cmFuc2l0aW9uKCkuZGVsYXkodHJhbnNpdGlvblRpbWVzWzBdKVxuXHRcdFx0XHRcdC5kdXJhdGlvbih0cmFuc2l0aW9uVGltZXNbMV0pXG5cdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXG5cdFx0XHRcdFx0XHRcdC8vIGNvbnN0cnVjdFRyYW5zbGF0ZShpbml0QnJ1c2hQb3NpdGlvbisxNSwgbWFpbkhlaWdodCttWzBdKyhtaW5pSGVpZ2h0LzIpKVxuXHRcdFx0XHRcdFx0XHRjb25zdHJ1Y3RUcmFuc2xhdGUoaW5pdEJydXNoUG9zaXRpb24sIG1haW5IZWlnaHQrbVswXSsobWluaUhlaWdodC8yKSlcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC8vIC5lYWNoKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdC5vbihcImVuZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmIChjaGFydC5jbGFzc2VkKFwiZGVtb0luUHJvZ3Jlc3NcIikpIHtcblx0XHRcdFx0XHRcdFx0ZGVtb0RyYXdCcnVzaCgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZGVtb0VuZCgwKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRmdW5jdGlvbiBkZW1vRHJhd0JydXNoKCkge1xuXHRcdFx0XHRcdGNoYW5nZUV4dGVudChpbml0QnJ1c2hSYW5nZVswXSwgaW5pdEJydXNoUmFuZ2VbMV0sIHRyYW5zaXRpb25UaW1lc1syXSk7XG5cdFx0XHRcdFx0dmFyIG1pbkV4dGVudFNjcmVlbiA9ICtleHRlbnRTZWxlY3QuYXR0cihcInhcIik7XG5cdFx0XHRcdFx0dmFyIG1heEV4dGVudFNjcmVlbiA9IG1pbkV4dGVudFNjcmVlbiArICgrZXh0ZW50U2VsZWN0LmF0dHIoXCJ3aWR0aFwiKSk7XG5cdFx0XHRcdFx0eDEuZG9tYWluKGJydXNoLmV4dGVudCgpKTtcblx0XHRcdFx0XHRjdXJzb3JJY29uLnRyYW5zaXRpb24oKVxuXHRcdFx0XHRcdFx0LmR1cmF0aW9uKHRyYW5zaXRpb25UaW1lc1syXSlcblx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgeFBvcyA9IHgoYnJ1c2guZXh0ZW50KClbMV0pICsgbVszXTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGNvbnN0cnVjdFRyYW5zbGF0ZSh4UG9zLCBtYWluSGVpZ2h0K21bMF0rKG1pbmlIZWlnaHQvMikpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQvLyAuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQub24oXCJlbmRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZiAoY2hhcnQuY2xhc3NlZChcImRlbW9JblByb2dyZXNzXCIpKSB7XG5cdFx0XHRcdFx0XHRcdGRlbW9FeHBhbmQoKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGRlbW9FbmQoMCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGZ1bmN0aW9uIGRlbW9FeHBhbmQoKSB7XG5cdFx0XHRcdFx0Ly8gdmFyIGRlbW9UcmFuc2l0aW9uVGltZSA9IDIwMDA7XG5cdFx0XHRcdFx0Ly8gdmFyIGRlbW9EZWxheVRvUmVtb3ZlID0gMjAwMDtcblx0XHRcdFx0XHQvLyB2YXIgY3Vyc29ySWNvbiA9IG1haW5DbGlwUGF0aC5hcHBlbmQoXCJ0ZXh0XCIpXG5cdFx0XHRcdFx0Ly8gXHQuYXR0cihcImNsYXNzXCIsIFwiY3Vyc29ySWNvblwiKVxuXHRcdFx0XHRcdC8vIFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0XHRcdC8vIFx0LnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMWVtXCIpXG5cdFx0XHRcdFx0Ly8gXHQudGV4dChcIlxcdWYyNDVcIilcblx0XHRcdFx0XHQvLyBcdC8vIC5hdHRyKFwieFwiLCAxMDApXG5cdFx0XHRcdFx0Ly8gXHQvLyAuYXR0cihcInlcIiwgMzAwKTtcblx0XHRcdFx0XHQvLyBcdC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDEwMCwzMDApXCIpO1xuXHRcdFx0XHRcdC8vIFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB3ICsgXCIsXCIgKyBtYWluSGVpZ2h0ICsgXCIpXCIpO1xuXG5cdFx0XHRcdFx0dmFyIGRlbW9ZZWFyTWFyayA9IGRlbW9ZZWFySXRlbS5zZWxlY3QoXCIueWVhck1hcmtcIik7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGVtb1llYXJJdGVtKTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkZW1vWWVhck1hcmspO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRlbW9ZZWFyTWFyay5hdHRyKFwiclwiKSk7XG5cdFx0XHRcdFx0dmFyIHRyYW5zbGF0ZVN0ciA9IGRlbW9ZZWFySXRlbS5hdHRyKFwidHJhbnNmb3JtXCIpO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRyYW5zbGF0ZVN0cik7XG5cdFx0XHRcdFx0dmFyIHRyYW5zbGF0ZUNvb3JkID0gZGVjb25zdHJ1Y3RUcmFuc2xhdGUodHJhbnNsYXRlU3RyKTtcblx0XHRcdFx0XHR0cmFuc2xhdGVDb29yZC54ID0gdHJhbnNsYXRlQ29vcmQueCArIG1bM107XG5cdFx0XHRcdFx0dHJhbnNsYXRlQ29vcmQueSA9IHRyYW5zbGF0ZUNvb3JkLnkgKyBtWzBdICsgKCtkZW1vWWVhck1hcmsuYXR0cihcInJcIikpO1xuXHRcdFx0XHRcdHZhciB0cmFuc2xhdGUgPSBjb25zdHJ1Y3RUcmFuc2xhdGUodHJhbnNsYXRlQ29vcmQueCwgdHJhbnNsYXRlQ29vcmQueSk7XG5cdFx0XHRcdFx0Ly8gbW92ZSB0aGUgY3Vyc29yIHRvIGEgeWVhciwgdGhlbiBtYW51YWxseSBleHBhbmQgdGhlIHllYXJcblx0XHRcdFx0XHRjdXJzb3JJY29uLnRyYW5zaXRpb24oXCJkZW1vRXhwYW5kXCIpLmRlbGF5KHRyYW5zaXRpb25UaW1lc1szXSlcblx0XHRcdFx0XHRcdC5kdXJhdGlvbih0cmFuc2l0aW9uVGltZXNbNF0pXG5cdFx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCB0cmFuc2xhdGUpXG5cdFx0XHRcdFx0XHQvLyAuZWFjaChcImVuZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdC5vbihcImVuZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGNoYXJ0LmNsYXNzZWQoXCJkZW1vSW5Qcm9ncmVzc1wiKSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBzZWwgPSBwYXBlckl0ZW1zLmZpbHRlcihmdW5jdGlvbihkZCkge3JldHVybiBkZC55ZWFyPT1kZW1vWWVhckl0ZW1bMF1bMF0uX19kYXRhX18ueWVhcn0pO1xuXHRcdFx0XHRcdFx0XHRcdGV4cGFuZChzZWwpO1xuXHRcdFx0XHRcdFx0XHRcdGRlbW9FbmQodHJhbnNpdGlvblRpbWVzWzVdKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRkZW1vRW5kKDApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQvLyBjdXJzb3JJY29uLnRyYW5zaXRpb24oXCJkZW1vRW5kXCIpLmRlbGF5KGRlbW9UcmFuc2l0aW9uVGltZSlcblx0XHRcdFx0XHQvLyBcdC5kdXJhdGlvbihkZW1vRGVsYXlUb1JlbW92ZSlcblx0XHRcdFx0XHQvLyBcdC5lYWNoKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdC8vIFx0XHRjdXJzb3JJY29uLnJlbW92ZSgpO1xuXHRcdFx0XHRcdC8vIFx0XHRjb250cmFjdCgpO1xuXHRcdFx0XHRcdC8vIFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmdW5jdGlvbiBkZW1vRW5kKGRlbGF5KSB7XG5cdFx0XHRcdFx0Y3Vyc29ySWNvbi50cmFuc2l0aW9uKFwiZGVtb0VuZFwiKVxuXHRcdFx0XHRcdFx0LmRlbGF5KGRlbGF5KVxuXHRcdFx0XHRcdFx0LmR1cmF0aW9uKDApXG5cdFx0XHRcdFx0XHQucmVtb3ZlKClcblx0XHRcdFx0XHRcdC8vIC5lYWNoKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0Lm9uKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRjb250cmFjdCgpO1xuXHRcdFx0XHRcdFx0XHRlbmFibGVJbnRlcmFjdGlvbigpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXG5cdFx0XHRmdW5jdGlvbiB0ZXN0UGxhY2VDdXJzb3IoKSB7XG5cdFx0XHRcdHZhciBleHRlbnRTZWxlY3QgPSBtaW5pLnNlbGVjdChcIi5icnVzaFwiKS5zZWxlY3QoXCIuZXh0ZW50XCIpO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhleHRlbnRTZWxlY3QpO1xuXHRcdFx0XHR2YXIgbWluRXh0ZW50U2NyZWVuID0gK2V4dGVudFNlbGVjdC5hdHRyKFwieFwiKTtcblx0XHRcdFx0dmFyIGN1cnNvckljb24gPSBtYWluQ2xpcFBhdGguYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJjdXJzb3JJY29uXCIpXG5cdFx0XHRcdFx0LnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJGb250QXdlc29tZVwiKVxuXHRcdFx0XHRcdC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjFlbVwiKVxuXHRcdFx0XHRcdC50ZXh0KFwiXFx1ZjI0NVwiKVxuXHRcdFx0XHRcdC8vIC5hdHRyKFwieFwiLCAxMDApXG5cdFx0XHRcdFx0Ly8gLmF0dHIoXCJ5XCIsIDMwMCk7XG5cdFx0XHRcdFx0Ly8gLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMTAwLDMwMClcIik7XG5cdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtaW5FeHRlbnRTY3JlZW4gKyBcIixcIiArIChtYWluSGVpZ2h0LTIwKSArIFwiKVwiKTtcblx0XHRcdFx0XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIHRlc3RDaGFuZ2VIZWlnaHQoKSB7XG5cdFx0XHRcdC8vIGNoYW5nZUV4dGVudChNYXRoLnJvdW5kKG1pbkV4dGVudCsxKSwgTWF0aC5yb3VuZChtYXhFeHRlbnQrMSksIDI1MCwgXCJsaW5lYXJcIik7XG5cdFx0XHRcdHZhciBjaGFydEhlaWdodCA9ICtjaGFydC5hdHRyKFwiaGVpZ2h0XCIpO1xuXHRcdFx0XHR2YXIgY3Vyck1haW5IZWlnaHQgPSArbWFpbi5hdHRyKFwiaGVpZ2h0XCIpO1xuXHRcdFx0XHRjaGFydC50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuYXR0cihcImhlaWdodFwiLCBjaGFydEhlaWdodCsxMDApO1xuXHRcdFx0XHRtYWluLnRyYW5zaXRpb24oKS5kdXJhdGlvbigxMDAwKS5hdHRyKFwiaGVpZ2h0XCIsIGN1cnJNYWluSGVpZ2h0KzEwMCk7XG5cdFx0XHRcdG1pbmkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApXG5cdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtWzNdICsgXCIsXCIgKyAoY3Vyck1haW5IZWlnaHQrMTAwICsgbVswXSkgKyBcIilcIik7XG5cdFx0XHRcdGQzLnNlbGVjdChcIiNjbGlwIHJlY3RcIikuYXR0cihcImhlaWdodFwiLCBjdXJyTWFpbkhlaWdodCsxMDApO1xuXHRcdFx0XHRkaXNwbGF5KCk7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGQzLnNlbGVjdChcIiNjbGlwXCIpLmF0dHIoXCJoZWlnaHRcIikpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyB2YXIgdGVzdEJ1dHRvbiA9IGQzLnNlbGVjdChcImJvZHlcIikuYXBwZW5kKFwiYnV0dG9uXCIpXG5cdFx0XHQvLyBcdFx0XHRcdFx0LmF0dHIoXCJpZFwiLCBcInRlc3RCdXR0b25cIilcblx0XHRcdC8vIFx0XHRcdFx0XHQuaHRtbChcInRlc3RCdXR0b25cIilcblx0XHRcdC8vIFx0XHRcdFx0XHQub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdC8vIFx0XHRcdFx0XHRcdC8vIG1pbmltaXplVGltZWxpbmUoKTtcblx0XHRcdC8vIFx0XHRcdFx0XHRcdGRlbW9Jbml0KCk7XG5cdFx0XHQvLyBcdFx0XHRcdFx0fSk7XG5cdFx0XHRkMy5zZWxlY3QoXCIuY2xpY2tGb3JEZW1vXCIpXG5cdFx0XHRcdC5vbihcImNsaWNrXCIsIGRlbW9Jbml0KTtcblxuXHRcdFx0ZnVuY3Rpb24gZGlzYWJsZUludGVyYWN0aW9uKCkge1xuXHRcdFx0XHRkMy5zZWxlY3QoXCIjdGltZWxpbmUgc3ZnXCIpLnN0eWxlKFwicG9pbnRlci1ldmVudHNcIiwgXCJub25lXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBlbmFibGVJbnRlcmFjdGlvbigpIHtcblx0XHRcdFx0ZDMuc2VsZWN0KFwiI3RpbWVsaW5lIHN2Z1wiKS5zdHlsZShcInBvaW50ZXItZXZlbnRzXCIsIG51bGwpO1xuXHRcdFx0fVxuXG5cdFx0XHQkKCBkb2N1bWVudCApLm9uKFwidGltZWxpbmVWaXM6Y29udHJhY3RcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNvbnRyYWN0KCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0JCggZG9jdW1lbnQgKS5vbihcInRpbWVsaW5lVmlzOmRpc3BsYXlcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRpc3BsYXkoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQkKCBkb2N1bWVudCApLm9uKFwidGltZWxpbmVWaXM6Y2xlYXJCcnVzaFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0Y2xlYXJCcnVzaCgpO1xuXHRcdFx0fSk7XG5cblx0XHR9KTtcblx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvLyB1cGRhdGVEYXRhKCkge1xuXHQvLyBcdC8vIHVzZSBEMyB1cGRhdGUgcGF0dGVybiB3aXRoIGRhdGFcbiAgICAvL1xuXHQvLyBcdHZhciBncmFwaCA9IHRoaXMuX2RhdGE7XG5cdC8vIFx0Z3JhcGgubm9kZXMuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdC8vIFx0XHRkLmlkID0gZC5pZC50b1N0cmluZygpO1xuXHQvLyBcdH0pXG5cdC8vIFx0Z3JhcGgubGlua3MuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdC8vIFx0XHRkLmlkID0gZ2V0TGlua0lkKGQsIGdyYXBoLmRpcmVjdGVkKTtcblx0Ly8gXHR9KTtcblx0Ly8gXHR0aGlzLnNpbXVsYXRpb25cblx0Ly8gXHRcdC5ub2RlcyhncmFwaC5ub2Rlcylcblx0Ly8gXHRcdC5vbihcInRpY2tcIiwgdGlja2VkKTtcbiAgICAvL1xuXHQvLyBcdHNpbXVsYXRpb24uZm9yY2UoXCJsaW5rXCIpXG5cdC8vIFx0XHQubGlua3MoZ3JhcGgubGlua3MpO1xuXHQvLyBcdGNvbnNvbGUubG9nKGdyYXBoKTtcblx0Ly8gXHRzaW11bGF0aW9uLnN0b3AoKTtcblx0Ly8gXHRub2RlID0gbm9kZS5kYXRhKGdyYXBoLm5vZGVzLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLmlkOyB9KTtcblx0Ly8gXHR2YXIgbm9kZUV4aXQgPSBub2RlLmV4aXQoKTtcblx0Ly8gXHQvLyBub2RlRXhpdC5zZWxlY3RBbGwoXCJjaXJjbGVcIikuYXR0cihcImZpbGxcIiwgXCJyZWRcIik7XG5cdC8vIFx0dmFyIHQgPSBkMy50cmFuc2l0aW9uKCd1cGRhdGVEYXRhJykuZHVyYXRpb24oNTAwMCk7XG5cdC8vIFx0bm9kZUV4aXQuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLnN0eWxlKFwic3Ryb2tlXCIsIFwicmVkXCIpLnRyYW5zaXRpb24odCkuYXR0cihcInJcIiwgMCk7XG5cdC8vIFx0bm9kZSA9IGVudGVyTm9kZXMobm9kZSwgdCk7XG5cdC8vIFx0Ly8gbm9kZSA9IG5vZGUuY2FsbChlbnRlck5vZGVzLCB0KTtcbiAgICAvL1xuICAgIC8vXG4gICAgLy9cblx0Ly8gXHRsaW5rID0gbGlua1xuXHQvLyBcdFx0LmRhdGEoZ3JhcGgubGlua3MsIGZ1bmN0aW9uKGQpIHtcblx0Ly8gXHRcdFx0Ly8gZC5pZCA9IGdldExpbmtJZChkKTtcblx0Ly8gXHRcdFx0cmV0dXJuIGQuaWQ7XG5cdC8vIFx0XHR9KTtcblx0Ly8gXHR2YXIgbGlua0V4aXQgPSBsaW5rLmV4aXQoKTtcblx0Ly8gXHRsaW5rRXhpdC5zdHlsZShcInN0cm9rZVwiLCBcInJlZFwiKS50cmFuc2l0aW9uKHQpLnN0eWxlKFwib3BhY2l0eVwiLCAwKS5yZW1vdmUoKTtcblx0Ly8gXHQvLyBsaW5rRXhpdC5yZW1vdmUoKTtcblx0Ly8gXHRsaW5rID0gZW50ZXJMaW5rcyhsaW5rLCB0KTtcblx0Ly8gXHRzaW11bGF0aW9uLm9uKFwidGlja1wiKS5jYWxsKCk7XG4gICAgLy9cbiAgICAvL1xuXHQvLyBcdHQuZW5kKCkudGhlbihmdW5jdGlvbihkKSB7XG5cdC8vIFx0XHRub2RlRXhpdC5yZW1vdmUoKTtcblx0Ly8gXHRcdC8vIHNpbXVsYXRpb24uYWxwaGEoMSkucmVzdGFydCgpO1xuXHQvLyBcdFx0Ly8gc2ltdWxhdGlvblxuXHQvLyBcdFx0XHQvLyAuYWxwaGFEZWNheSguMDAwNSlcblx0Ly8gXHRcdFx0Ly8gLnZlbG9jaXR5RGVjYXkoMC45KVxuXHQvLyBcdFx0XHQvLyAuYWxwaGEoLjEpXG5cdC8vIFx0XHRcdC8vIC5yZXN0YXJ0KCk7XG5cdC8vIFx0fSk7XG5cdC8vIFx0XG5cdC8vIFx0Ly8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0Ly8gXHQvLyB9LCA0MDAwKTtcblx0Ly8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZVZpcztcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiXSwic291cmNlUm9vdCI6IiJ9
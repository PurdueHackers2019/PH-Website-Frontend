module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/styles.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome/styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome/styles.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor() {
    super(...arguments);

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => this.handleRef(el),
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
const propertyFields = ['components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
propertyFields.concat(urlPropertyFields).forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  propertyFields.forEach(field => {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get() {
        return _router[field];
      }

    });
  });
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;

var _router = __webpack_require__(/*! ../client/router */ "./node_modules/next/dist/client/router.js");
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/


function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    let {
      Component,
      ctx
    } = _ref;
    const pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  getChildContext() {
    return {
      router: (0, _router.makePublicRouterInstance)(this.props.router)
    };
  } // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level


  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps
    } = this.props;
    const url = createUrl(router);
    return _react.default.createElement(Container, null, _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    })));
  }

} // @deprecated noop for now until removal


exports.default = App;
App.childContextTypes = {
  router: _propTypes.default.object
};
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;

function Container(p) {
  return p.children;
}

const warnUrl = (0, _utils.execOnce)(() => {
  if (true) {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  }
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: () => {
      warnUrl();
      router.back();
    },
    push: (url, as) => {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/sanitize.css/sanitize.css":
/*!************************************************!*\
  !*** ./node_modules/sanitize.css/sanitize.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/fontawesome */ "@fortawesome/fontawesome");
/* harmony import */ var _fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-free-brands */ "@fortawesome/fontawesome-free-brands");
/* harmony import */ var _fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/fontawesome-free-solid */ "@fortawesome/fontawesome-free-solid");
/* harmony import */ var _fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_redux_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/redux/store */ "./src/redux/store/index.ts");
/* harmony import */ var _src_redux_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/redux/actions */ "./src/redux/actions/index.ts");
/* harmony import */ var _src_modules_common_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/modules/common/Layout */ "./src/modules/common/Layout.tsx");
/* harmony import */ var _src_utils_analytics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/utils/analytics */ "./src/utils/analytics.ts");
/* harmony import */ var _src_utils_flash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/utils/flash */ "./src/utils/flash.ts");
/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/index.css */ "./src/index.css");
/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_src_index_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _fortawesome_fontawesome_styles_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/fontawesome/styles.css */ "./node_modules/@fortawesome/fontawesome/styles.css");
/* harmony import */ var _fortawesome_fontawesome_styles_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_styles_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var sanitize_css_sanitize_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! sanitize.css/sanitize.css */ "./node_modules/sanitize.css/sanitize.css");
/* harmony import */ var sanitize_css_sanitize_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(sanitize_css_sanitize_css__WEBPACK_IMPORTED_MODULE_18__);


var _dec,
    _class,
    _jsxFileName = "/Users/ashwin/Projects/PH-Website-Frontend/pages/_app.tsx";



















_fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_7__["library"].add(_fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_8__["faFacebook"], _fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_8__["faGithub"], _fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_8__["faTwitter"], _fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_9__["faEnvelope"], _fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_9__["faCalendar"], _fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_9__["faCoffee"], _fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_9__["faHeart"]);
let MyApp = (_dec = next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6___default()(_src_redux_store__WEBPACK_IMPORTED_MODULE_10__["default"]), _dec(_class = class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_3___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    if (ctx.req) {
      await ctx.store.dispatch(Object(_src_redux_actions__WEBPACK_IMPORTED_MODULE_11__["refreshSession"])(ctx));

      if (!ctx.res.headersSent) {
        const messages = _src_utils_flash__WEBPACK_IMPORTED_MODULE_14__["get"](ctx);
        if (messages.red) ctx.store.dispatch(Object(_src_redux_actions__WEBPACK_IMPORTED_MODULE_11__["sendErrorMessage"])(messages.red, ctx));
        if (messages.green) ctx.store.dispatch(Object(_src_redux_actions__WEBPACK_IMPORTED_MODULE_11__["sendSuccessMessage"])(messages.green, ctx));
      }
    }

    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    };
  }

  componentWillMount() {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeStart', () => {
      const {
        store
      } = this.props;
      const {
        flashState
      } = store.getState();
      if (flashState.green || flashState.red) store.dispatch(Object(_src_redux_actions__WEBPACK_IMPORTED_MODULE_11__["clearFlashMessages"])());
    });
  }

  componentDidMount() {
    const {
      store
    } = this.props;
    const {
      sessionState
    } = store.getState();
    const uid = sessionState.user && sessionState.user._id;
    Object(_src_utils_analytics__WEBPACK_IMPORTED_MODULE_13__["initGA"])(uid);
    Object(_src_utils_analytics__WEBPACK_IMPORTED_MODULE_13__["logPageView"])();
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.router.events.on('routeChangeComplete', _src_utils_analytics__WEBPACK_IMPORTED_MODULE_13__["logPageView"]);

    window.onbeforeunload = () => {
      const {
        flashState
      } = store.getState();
      if (flashState.green || flashState.red) store.dispatch(Object(_src_redux_actions__WEBPACK_IMPORTED_MODULE_11__["clearFlashMessages"])());
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Purdue Hackers")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_modules_common_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    })))));
  }

}) || _class);


/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import ax from 'axios';
// import { CONFIG } from '../config';
// export const axios = ax.create({
// 	baseURL: CONFIG.SERVER_URL
// });
// const dateToString = date =>
// 	new Date(date).toLocaleDateString('en-US', {
// 		year: 'numeric',
// 		month: 'short',
// 		day: 'numeric',
// 		weekday: 'short'
// 	});
// export const formatDate = date => {
// 	if (!date) return 'Current';
// 	const str = dateToString(date);
// 	return str !== 'Invalid Date' ? str : 'Current';
// };
// export const err = e =>
// 	!e
// 		? 'Whoops, something went wrong!'
// 		: e.message && typeof e.message === 'string'
// 			? e.message
// 			: e.error && typeof e.error === 'string'
// 				? e.error
// 				: 'Whoops, something went wrong!';
// export const hasPermission = (user, name) =>
// 	user &&
// 	(Object.keys(user).length !== 0 && user.constructor === Object) &&
// 	user.permissions.some(per => per.name === name || per.name === 'admin');
// export const isAdmin = user => hasPermission(user, 'admin');
// export const memberMatches = (user, id) =>
// 	user && (hasPermission(user, 'admin') || user._id === id);
// export const shortName = name => {
// 	if (name.charAt(31) !== ' ' && name.charAt(32) !== ' ') {
// 		for (let i = 31; i > 0; i--) {
// 			if (name.charAt(i) === ' ') {
// 				return `${name.substring(0, i)}...`;
// 			}
// 		}
// 	}
// 	return name.substring(0, 32);
// };
// const storage = () => (localStorage.getItem('token') ? localStorage : sessionStorage);
// let _storage = storage();
// export const getStorage = () => _storage;
// export const setStorage = store => {
// 	_storage = store;
// };
/* harmony default export */ __webpack_exports__["default"] = ({
  HOME: '/',
  LOGIN: '/login',
  LOGOUT: '/logout',
  SIGNUP: '/signup',
  RESET_PASSWORD: '/reset',
  FORGOT_PASSWORD: '/forgot',
  EDIT_PROFILE: '/member/:id/edit',
  EVENTS: '/events',
  EVENT: '/event/:id',
  EVENT_REPORT: '/event/:id/report',
  CREATE_EVENT: '/events/create',
  EDIT_EVENT: '/event/:id/edit',
  CHECKIN_EVENT: '/event/:id/checkin',
  MEMBERS: '/members',
  MEMBER: '/member/:id',
  CALENDAR: '/calendar',
  MEMBERS_REPORT: '/members/report',
  PERMISSIONS: '/permissions',
  PERMISSION: '/permission/:id',
  CREDENTIALS: '/credentials',
  LOCATIONS: '/locations',
  LOCATIONS_MAP: '/locations/map',
  LOCATION: '/location/:id',
  HACKATHONS: '/hackathons',
  PROJECTS: '/projects',
  DEV: '/dev',
  ANVIL_WIFI: '/anvil-wifi'
});

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/modules/common/FlashMessage.tsx":
/*!*********************************************!*\
  !*** ./src/modules/common/FlashMessage.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ashwin/Projects/PH-Website-Frontend/src/modules/common/FlashMessage.tsx";


const FlashMessage = ({
  green,
  red
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, green && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section alert-section",
    style: {
      paddingTop: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert-success",
    role: "alert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, green))), red && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section alert-section",
    style: {
      paddingTop: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert-danger",
    role: "alert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, red))));
};

FlashMessage.defaultProps = {
  green: '',
  red: ''
};
/* harmony default export */ __webpack_exports__["default"] = (FlashMessage);

/***/ }),

/***/ "./src/modules/common/Layout.tsx":
/*!***************************************!*\
  !*** ./src/modules/common/Layout.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./src/modules/common/Navbar.tsx");
/* harmony import */ var _FlashMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FlashMessage */ "./src/modules/common/FlashMessage.tsx");

var _jsxFileName = "/Users/ashwin/Projects/PH-Website-Frontend/src/modules/common/Layout.tsx";





const Layout = ({
  token,
  user,
  green,
  red,
  children
}) => // <div>
react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
  auth: !!token,
  id: user ? user._id : null,
  user: user,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "pageWrap",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FlashMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
  green: green,
  red: red,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), children)) // </div>
;

const mapStateToProps = state => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.sessionState, state.flashState);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Layout));

/***/ }),

/***/ "./src/modules/common/Navbar.tsx":
/*!***************************************!*\
  !*** ./src/modules/common/Navbar.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/session */ "./src/utils/session.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");
var _jsxFileName = "/Users/ashwin/Projects/PH-Website-Frontend/src/modules/common/Navbar.tsx";







const CommonNav = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
  href: _constants__WEBPACK_IMPORTED_MODULE_5__["default"].MEMBERS,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Members"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
  href: _constants__WEBPACK_IMPORTED_MODULE_5__["default"].EVENTS,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "Events"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
  href: _constants__WEBPACK_IMPORTED_MODULE_5__["default"].CALENDAR,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Calendar"));

const OrganizerDropdown = ({
  user
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"], {
  title: "Organizers",
  id: "protected-nav-dropdown",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, '.privateItem a {padding-top: 5px !important;}'), Object(_utils_session__WEBPACK_IMPORTED_MODULE_4__["hasPermission"])(user, 'permissions') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
  className: "privateItem",
  href: _constants__WEBPACK_IMPORTED_MODULE_5__["default"].PERMISSIONS,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "Permissions"), Object(_utils_session__WEBPACK_IMPORTED_MODULE_4__["hasPermission"])(user, 'credentials') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
  className: "privateItem",
  href: _constants__WEBPACK_IMPORTED_MODULE_5__["default"].CREDENTIALS,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, "Credentials"));

const PHNavbar = ({
  auth,
  id,
  user
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
  collapseOnSelect: true,
  bsStyle: "default",
  style: {
    marginBottom: '10px',
    maxWidth: '100%'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Header, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  id: "nav-brand",
  className: "navbar-brand",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "nav-logo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "nav-name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, "Purdue Hackers"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Toggle, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Collapse, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
  pullRight: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, auth && id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  role: "presentation",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: `/member/${id}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, "Profile"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommonNav, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}), (Object(_utils_session__WEBPACK_IMPORTED_MODULE_4__["hasPermission"])(user, 'permissions') || Object(_utils_session__WEBPACK_IMPORTED_MODULE_4__["hasPermission"])(user, 'credentials')) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrganizerDropdown, {
  user: user,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  role: "presentation",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: _constants__WEBPACK_IMPORTED_MODULE_5__["default"].LOGOUT,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, "Logout")))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommonNav, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
  href: _constants__WEBPACK_IMPORTED_MODULE_5__["default"].LOGIN,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
  href: _constants__WEBPACK_IMPORTED_MODULE_5__["default"].SIGNUP,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, "Join")))));

PHNavbar.propTypes = {
  auth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
PHNavbar.defaultProps = {
  auth: null,
  id: null,
  user: null
};
OrganizerDropdown.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
OrganizerDropdown.defaultProps = {
  user: null
}; // export default Navbar;

/* harmony default export */ __webpack_exports__["default"] = (PHNavbar);

/***/ }),

/***/ "./src/redux/actions/index.ts":
/*!************************************!*\
  !*** ./src/redux/actions/index.ts ***!
  \************************************/
/*! exports provided: signUp, signIn, signOut, refreshSession, updateProfile, sendErrorMessage, sendSuccessMessage, clearFlashMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOut", function() { return signOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshSession", function() { return refreshSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfile", function() { return updateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendErrorMessage", function() { return sendErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendSuccessMessage", function() { return sendSuccessMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearFlashMessages", function() { return clearFlashMessages; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var _utils_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/session */ "./src/utils/session.ts");
/* harmony import */ var _utils_flash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/flash */ "./src/utils/flash.ts");
/* harmony import */ var _creators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../creators */ "./src/redux/creators/index.ts");





 // Auth Actions

const signUp = body => async dispatch => {
  try {
    const {
      data: {
        response
      }
    } = await _utils__WEBPACK_IMPORTED_MODULE_2__["api"].post('/auth/signup', body);
    dispatch(Object(_creators__WEBPACK_IMPORTED_MODULE_5__["setToken"])(response.token));
    dispatch(Object(_creators__WEBPACK_IMPORTED_MODULE_5__["setUser"])(response.user));
    Object(_utils_session__WEBPACK_IMPORTED_MODULE_3__["setCookie"])('token', response.token);
    const resp = response;
    return resp;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
const signIn = body => async dispatch => {
  try {
    const {
      data: {
        response
      }
    } = await _utils__WEBPACK_IMPORTED_MODULE_2__["api"].post('/auth/login', body);
    dispatch(Object(_creators__WEBPACK_IMPORTED_MODULE_5__["setToken"])(response.token));
    dispatch(Object(_creators__WEBPACK_IMPORTED_MODULE_5__["setUser"])(response.user));
    const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    const nextYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
    Object(_utils_session__WEBPACK_IMPORTED_MODULE_3__["setCookie"])('token', response.token, null, {
      expires: !body.rememberMe ? tomorrow : nextYear
    });
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.set({
      userId: response.user._id
    });
    const resp = response;
    return resp;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
const signOut = ctx => async dispatch => {
  try {
    dispatch(Object(_creators__WEBPACK_IMPORTED_MODULE_5__["setToken"])(''));
    dispatch(Object(_creators__WEBPACK_IMPORTED_MODULE_5__["setUser"])(null));
    Object(_utils_session__WEBPACK_IMPORTED_MODULE_3__["removeCookie"])('token', ctx);
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.set({
      userId: null
    });
  } catch (error) {
    throw error;
  }
}; // Should only be called in the "server-side" context in _app.tsx
// Takes token from cookie and populates redux store w/ token and user object

const refreshSession = ctx => async dispatch => {
  try {
    if (ctx && ctx.res && ctx.res.headersSent) return;
    const token = Object(_utils_session__WEBPACK_IMPORTED_MODULE_3__["getToken"])(ctx);

    if (!token) {
      dispatch(Object(_creators__WEBPACK_IMPORTED_MODULE_5__["setUser"])(null));
      dispatch(Object(_creators__WEBPACK_IMPORTED_MODULE_5__["setToken"])(''));
      Object(_utils_session__WEBPACK_IMPORTED_MODULE_3__["removeCookie"])('token', ctx);
      react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.set({
        userId: null
      });
      return null;
    }

    const {
      data: {
        response
      }
    } = await _utils__WEBPACK_IMPORTED_MODULE_2__["api"].get('/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch(Object(_creators__WEBPACK_IMPORTED_MODULE_5__["setUser"])(response.user));
    dispatch(Object(_creators__WEBPACK_IMPORTED_MODULE_5__["setToken"])(response.token));
    Object(_utils_session__WEBPACK_IMPORTED_MODULE_3__["setCookie"])('token', response.token, ctx);
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.set({
      userId: response.user._id
    });
    return response;
  } catch (error) {
    console.error('Error refreshing token:', error);
    dispatch(Object(_creators__WEBPACK_IMPORTED_MODULE_5__["setUser"])(null));
    dispatch(Object(_creators__WEBPACK_IMPORTED_MODULE_5__["setToken"])(''));
    Object(_utils_session__WEBPACK_IMPORTED_MODULE_3__["removeCookie"])('token', ctx);
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.set({
      userId: null
    });
    return null;
  }
}; // User actions

const updateProfile = (body, ctx, id) => async dispatch => {
  try {
    const token = Object(_utils_session__WEBPACK_IMPORTED_MODULE_3__["getToken"])(ctx);
    if (!id) id = Object(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__["decode"])(token)._id;
    const {
      data: {
        response
      }
    } = await _utils__WEBPACK_IMPORTED_MODULE_2__["api"].put(`/users/${id}`, body, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const user = response;
    dispatch(Object(_creators__WEBPACK_IMPORTED_MODULE_5__["setUser"])(user));
    return user;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}; // Flash Actions

const sendErrorMessage = (msg, ctx) => dispatch => {
  dispatch(Object(_creators__WEBPACK_IMPORTED_MODULE_5__["setRedFlash"])(msg));
  _utils_flash__WEBPACK_IMPORTED_MODULE_4__["set"]({
    red: msg
  }, ctx);
};
const sendSuccessMessage = (msg, ctx) => dispatch => {
  dispatch(Object(_creators__WEBPACK_IMPORTED_MODULE_5__["setGreenFlash"])(msg));
  _utils_flash__WEBPACK_IMPORTED_MODULE_4__["set"]({
    green: msg
  }, ctx);
};
const clearFlashMessages = ctx => dispatch => {
  dispatch(Object(_creators__WEBPACK_IMPORTED_MODULE_5__["setGreenFlash"])(''));
  dispatch(Object(_creators__WEBPACK_IMPORTED_MODULE_5__["setRedFlash"])(''));
  Object(_utils_session__WEBPACK_IMPORTED_MODULE_3__["removeCookie"])('flash', ctx);
};

/***/ }),

/***/ "./src/redux/constants/index.ts":
/*!**************************************!*\
  !*** ./src/redux/constants/index.ts ***!
  \**************************************/
/*! exports provided: AUTH_USER_SET, AUTH_TOKEN_SET, AUTH_REMEMBER_ME_SET, FLASH_GREEN_SET, FLASH_RED_SET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_USER_SET", function() { return AUTH_USER_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_TOKEN_SET", function() { return AUTH_TOKEN_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_REMEMBER_ME_SET", function() { return AUTH_REMEMBER_ME_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLASH_GREEN_SET", function() { return FLASH_GREEN_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLASH_RED_SET", function() { return FLASH_RED_SET; });
// Action Types
const AUTH_USER_SET = 'AUTH_USER_SET';
const AUTH_TOKEN_SET = 'AUTH_TOKEN_SET';
const AUTH_REMEMBER_ME_SET = 'AUTH_REMEMBER_ME_SET';
const FLASH_GREEN_SET = 'FLASH_GREEN_SET';
const FLASH_RED_SET = 'FLASH_RED_SET';

/***/ }),

/***/ "./src/redux/creators/index.ts":
/*!*************************************!*\
  !*** ./src/redux/creators/index.ts ***!
  \*************************************/
/*! exports provided: setToken, setUser, setGreenFlash, setRedFlash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGreenFlash", function() { return setGreenFlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRedFlash", function() { return setRedFlash; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/redux/constants/index.ts");

// Action Creators
const setToken = token => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["AUTH_TOKEN_SET"],
  token
});
const setUser = user => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["AUTH_USER_SET"],
  user
});
const setGreenFlash = green => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["FLASH_GREEN_SET"],
  green
});
const setRedFlash = red => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["FLASH_RED_SET"],
  red
}); // All creator types

/***/ }),

/***/ "./src/redux/reducers/flash.ts":
/*!*************************************!*\
  !*** ./src/redux/reducers/flash.ts ***!
  \*************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/redux/constants/index.ts");


const initialState = {
  green: '',
  red: ''
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__["FLASH_GREEN_SET"]:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          green: action.green
        });
      }

    case _constants__WEBPACK_IMPORTED_MODULE_1__["FLASH_RED_SET"]:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          red: action.red
        });
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/redux/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/redux/reducers/index.ts ***!
  \*************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session */ "./src/redux/reducers/session.ts");
/* harmony import */ var _flash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flash */ "./src/redux/reducers/flash.ts");





const initialState = {
  sessionState: _session__WEBPACK_IMPORTED_MODULE_1__["initialState"],
  flashState: _flash__WEBPACK_IMPORTED_MODULE_2__["initialState"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  sessionState: _session__WEBPACK_IMPORTED_MODULE_1__["default"],
  flashState: _flash__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./src/redux/reducers/session.ts":
/*!***************************************!*\
  !*** ./src/redux/reducers/session.ts ***!
  \***************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/redux/constants/index.ts");


const initialState = {
  token: '',
  user: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__["AUTH_USER_SET"]:
      {
        return action.user ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          user: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.user, action.user)
        }) : Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          user: null
        });
      }

    case _constants__WEBPACK_IMPORTED_MODULE_1__["AUTH_TOKEN_SET"]:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          token: action.token
        });
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/redux/store/client.ts":
/*!***********************************!*\
  !*** ./src/redux/store/client.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension_logOnlyInProduction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension/logOnlyInProduction */ "redux-devtools-extension/logOnlyInProduction");
/* harmony import */ var redux_devtools_extension_logOnlyInProduction__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension_logOnlyInProduction__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./src/redux/reducers/index.ts");





const {
  publicRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_3___default()();
const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a];

if (publicRuntimeConfig.NODE_ENV !== 'production') {
  const {
    createLogger
  } = __webpack_require__(/*! redux-logger */ "redux-logger");

  middleware.push(createLogger());
}

const enhancer = publicRuntimeConfig.NODE_ENV !== 'production' ? Object(redux_devtools_extension_logOnlyInProduction__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware)) : Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
/* harmony default export */ __webpack_exports__["default"] = ((initialState, options) => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], initialState, enhancer);
});

/***/ }),

/***/ "./src/redux/store/index.ts":
/*!**********************************!*\
  !*** ./src/redux/store/index.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "./src/redux/store/server.ts");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client */ "./src/redux/store/client.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./src/redux/reducers/index.ts");



let store;
/* harmony default export */ __webpack_exports__["default"] = ((initialState = _reducers__WEBPACK_IMPORTED_MODULE_2__["initialState"], options) => {
  if (true) return Object(_server__WEBPACK_IMPORTED_MODULE_0__["default"])(initialState, options); // Reuse store on the client-side

  if (!store) store = Object(_client__WEBPACK_IMPORTED_MODULE_1__["default"])(initialState, options);
  return store;
});

/***/ }),

/***/ "./src/redux/store/server.ts":
/*!***********************************!*\
  !*** ./src/redux/store/server.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./src/redux/reducers/index.ts");





const {
  publicRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_3___default()();
const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a];
const enhancer = publicRuntimeConfig.NODE_ENV !== 'production' ? Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware)) : Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
/* harmony default export */ __webpack_exports__["default"] = ((initialState, options) => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], initialState, enhancer);
});

/***/ }),

/***/ "./src/utils/analytics.ts":
/*!********************************!*\
  !*** ./src/utils/analytics.ts ***!
  \********************************/
/*! exports provided: initGA, logPageView, logEvent, logException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGA", function() { return initGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logPageView", function() { return logPageView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logEvent", function() { return logEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logException", function() { return logException; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);


const {
  publicRuntimeConfig: CONFIG
} = next_config__WEBPACK_IMPORTED_MODULE_1___default()();
const initGA = userId => {
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.initialize(CONFIG.TRACKING_ID, {
    debug: CONFIG.NODE_ENV === 'development',
    testMode: CONFIG.NODE_ENV === 'development'
  });
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.set({
    userId
  });
};
const logPageView = () => {
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.set({
    page: window.location.pathname
  });
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.pageview(window.location.pathname);
};
const logEvent = (category = '', action = '') => {
  if (category && action) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.event({
      category,
      action
    });
  }
};
const logException = (description = '', fatal = false) => {
  if (description) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.exception({
      description,
      fatal
    });
  }
};

/***/ }),

/***/ "./src/utils/flash.ts":
/*!****************************!*\
  !*** ./src/utils/flash.ts ***!
  \****************************/
/*! exports provided: set, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session */ "./src/utils/session.ts");


const set = (value, ctx, options) => {
  const val = Object(_session__WEBPACK_IMPORTED_MODULE_1__["getCookie"])('flash', ctx) || {};
  Object(_session__WEBPACK_IMPORTED_MODULE_1__["setCookie"])('flash', Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, val, value), ctx, options);
};
const get = ctx => {
  const value = Object(_session__WEBPACK_IMPORTED_MODULE_1__["getCookie"])('flash', ctx);
  Object(_session__WEBPACK_IMPORTED_MODULE_1__["removeCookie"])('flash', ctx);
  return value || {};
};

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: api, err, formatDate, endResponse, shortName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "err", function() { return err; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endResponse", function() { return endResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortName", function() { return shortName; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);


const {
  publicRuntimeConfig: CONFIG
} = next_config__WEBPACK_IMPORTED_MODULE_1___default()();
const api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: CONFIG.API_URL
});
const err = e => !e ? 'Whoops, something went wrong!' : e.message && typeof e.message === 'string' ? e.message : e.error && typeof e.error === 'string' ? e.error : 'Whoops, something went wrong!';

const dateToString = date => new Date(date).toLocaleDateString('en-US', {
  month: 'short',
  day: 'numeric',
  weekday: 'short',
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'America/Indiana/Indianapolis'
});

const formatDate = date => {
  if (!date) return 'N/A';
  const str = dateToString(date);
  return str !== 'Invalid Date' ? str : 'N/A';
};
const endResponse = ctx => ctx && ctx.res && ctx.res.end();
const shortName = name => {
  if (name.charAt(31) !== ' ' && name.charAt(32) !== ' ') {
    for (let i = 31; i > 0; i--) {
      if (name.charAt(i) === ' ') {
        return `${name.substring(0, i)}...`;
      }
    }
  }

  return name.substring(0, 32);
};

/***/ }),

/***/ "./src/utils/session.ts":
/*!******************************!*\
  !*** ./src/utils/session.ts ***!
  \******************************/
/*! exports provided: setCookie, removeCookie, getCookie, getToken, redirect, extractUser, hasPermission, isAdmin, memberMatches, isAuthenticated, redirectIfNotAuthenticated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirect", function() { return redirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractUser", function() { return extractUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasPermission", function() { return hasPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAdmin", function() { return isAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memberMatches", function() { return memberMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAuthenticated", function() { return isAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectIfNotAuthenticated", function() { return redirectIfNotAuthenticated; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions/index.ts");


// import cookie, { CookieAttributes } from 'js-cookie';



const setCookie = (key, value, ctx, options) => {
  return nookies__WEBPACK_IMPORTED_MODULE_2___default.a.set(ctx, key, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(value), options);
};
const removeCookie = (key, ctx) => {
  return nookies__WEBPACK_IMPORTED_MODULE_2___default.a.destroy(ctx, key);
};
const getCookie = (key, ctx) => {
  let value = nookies__WEBPACK_IMPORTED_MODULE_2___default.a.get(ctx)[key];
  if (value) return JSON.parse(value);
  return undefined;
};
const getToken = ctx => {
  let token = getCookie('token', ctx);
  return token;
};
const redirect = (target, ctx, replace) => {
  if (ctx && ctx.res) {
    // Server redirect
    ctx.res.statusCode = replace ? 303 : 301;
    ctx.res.setHeader('Location', target);
  } else {
    // Browser redirect
    replace ? next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace(target) : next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(target);
  }

  return true;
};
const extractUser = ctx => {
  // Try to get from redux, and if not, req.user
  let user = ctx && ctx.store && ctx.store.getState().sessionState.user;
  return user;
};
const hasPermission = (user, name) => user && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(user).length !== 0 && user.constructor === Object && user.permissions.some(per => per.name === name || per.name === 'admin');
const isAdmin = user => hasPermission(user, 'admin');
const memberMatches = (user, id) => user && (hasPermission(user, 'admin') || user._id === id);
const isAuthenticated = (ctx, permissions) => {
  if (!permissions || !permissions.length) return !!getToken(ctx);
  const user = extractUser(ctx);
  if (!user) return false;
  if (!permissions.length) return true;
  if (!permissions.some(role => hasPermission(user, role.name))) return false;
  return true;
};
const redirectIfNotAuthenticated = (path, ctx, {
  permissions,
  msg = 'Permission Denied'
} = {}) => {
  if (!isAuthenticated(ctx, permissions)) {
    redirect(path, ctx, true);
    Object(_redux_actions__WEBPACK_IMPORTED_MODULE_4__["sendErrorMessage"])(msg, ctx)(ctx.store.dispatch);
    return true;
  }

  return false;
};

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@fortawesome/fontawesome":
/*!*******************************************!*\
  !*** external "@fortawesome/fontawesome" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome");

/***/ }),

/***/ "@fortawesome/fontawesome-free-brands":
/*!*******************************************************!*\
  !*** external "@fortawesome/fontawesome-free-brands" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-brands");

/***/ }),

/***/ "@fortawesome/fontawesome-free-solid":
/*!******************************************************!*\
  !*** external "@fortawesome/fontawesome-free-solid" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-devtools-extension/logOnlyInProduction":
/*!***************************************************************!*\
  !*** external "redux-devtools-extension/logOnlyInProduction" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension/logOnlyInProduction");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map
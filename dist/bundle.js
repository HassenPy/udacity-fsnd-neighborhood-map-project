/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var bind = __webpack_require__(5);
var isBuffer = __webpack_require__(16);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Knockout JavaScript library v3.4.2
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function () {
    var DEBUG = true;
    (function (undefined) {
        // (0, eval)('this') is a robust way of getting a reference to the global object
        // For details, see http://stackoverflow.com/questions/14119988/return-this-0-evalthis/14120023#14120023
        var window = this || (0, eval)('this'),
            document = window['document'],
            navigator = window['navigator'],
            jQueryInstance = window["jQuery"],
            JSON = window["JSON"];
        (function (factory) {
            // Support three module loading scenarios
            if (true) {
                // [1] AMD anonymous module
                !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') {
                // [2] CommonJS/Node.js
                factory(module['exports'] || exports); // module.exports is for Node.js
            } else {
                // [3] No module loader (plain <script> tag) - put directly in global namespace
                factory(window['ko'] = {});
            }
        })(function (koExports, amdRequire) {
            // Internally, all KO objects are attached to koExports (even the non-exported ones whose names will be minified by the closure compiler).
            // In the future, the following "ko" variable may be made distinct from "koExports" so that private objects are not externally reachable.
            var ko = typeof koExports !== 'undefined' ? koExports : {};
            // Google Closure Compiler helpers (used only to make the minified file smaller)
            ko.exportSymbol = function (koPath, object) {
                var tokens = koPath.split(".");

                // In the future, "ko" may become distinct from "koExports" (so that non-exported objects are not reachable)
                // At that point, "target" would be set to: (typeof koExports !== "undefined" ? koExports : ko)
                var target = ko;

                for (var i = 0; i < tokens.length - 1; i++) {
                    target = target[tokens[i]];
                }target[tokens[tokens.length - 1]] = object;
            };
            ko.exportProperty = function (owner, publicName, object) {
                owner[publicName] = object;
            };
            ko.version = "3.4.2";

            ko.exportSymbol('version', ko.version);
            // For any options that may affect various areas of Knockout and aren't directly associated with data binding.
            ko.options = {
                'deferUpdates': false,
                'useOnlyNativeEvents': false
            };

            //ko.exportSymbol('options', ko.options);   // 'options' isn't minified
            ko.utils = function () {
                function objectForEach(obj, action) {
                    for (var prop in obj) {
                        if (obj.hasOwnProperty(prop)) {
                            action(prop, obj[prop]);
                        }
                    }
                }

                function extend(target, source) {
                    if (source) {
                        for (var prop in source) {
                            if (source.hasOwnProperty(prop)) {
                                target[prop] = source[prop];
                            }
                        }
                    }
                    return target;
                }

                function setPrototypeOf(obj, proto) {
                    obj.__proto__ = proto;
                    return obj;
                }

                var canSetPrototype = { __proto__: [] } instanceof Array;
                var canUseSymbols = !DEBUG && typeof Symbol === 'function';

                // Represent the known event types in a compact way, then at runtime transform it into a hash with event name as key (for fast lookup)
                var knownEvents = {},
                    knownEventTypesByEventName = {};
                var keyEventTypeName = navigator && /Firefox\/2/i.test(navigator.userAgent) ? 'KeyboardEvent' : 'UIEvents';
                knownEvents[keyEventTypeName] = ['keyup', 'keydown', 'keypress'];
                knownEvents['MouseEvents'] = ['click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave'];
                objectForEach(knownEvents, function (eventType, knownEventsForType) {
                    if (knownEventsForType.length) {
                        for (var i = 0, j = knownEventsForType.length; i < j; i++) {
                            knownEventTypesByEventName[knownEventsForType[i]] = eventType;
                        }
                    }
                });
                var eventsThatMustBeRegisteredUsingAttachEvent = { 'propertychange': true }; // Workaround for an IE9 issue - https://github.com/SteveSanderson/knockout/issues/406

                // Detect IE versions for bug workarounds (uses IE conditionals, not UA string, for robustness)
                // Note that, since IE 10 does not support conditional comments, the following logic only detects IE < 10.
                // Currently this is by design, since IE 10+ behaves correctly when treated as a standard browser.
                // If there is a future need to detect specific versions of IE10+, we will amend this.
                var ieVersion = document && function () {
                    var version = 3,
                        div = document.createElement('div'),
                        iElems = div.getElementsByTagName('i');

                    // Keep constructing conditional HTML blocks until we hit one that resolves to an empty fragment
                    while (div.innerHTML = '<!--[if gt IE ' + ++version + ']><i></i><![endif]-->', iElems[0]) {}
                    return version > 4 ? version : undefined;
                }();
                var isIe6 = ieVersion === 6,
                    isIe7 = ieVersion === 7;

                function isClickOnCheckableElement(element, eventType) {
                    if (ko.utils.tagNameLower(element) !== "input" || !element.type) return false;
                    if (eventType.toLowerCase() != "click") return false;
                    var inputType = element.type;
                    return inputType == "checkbox" || inputType == "radio";
                }

                // For details on the pattern for changing node classes
                // see: https://github.com/knockout/knockout/issues/1597
                var cssClassNameRegex = /\S+/g;

                function toggleDomNodeCssClass(node, classNames, shouldHaveClass) {
                    var addOrRemoveFn;
                    if (classNames) {
                        if (_typeof(node.classList) === 'object') {
                            addOrRemoveFn = node.classList[shouldHaveClass ? 'add' : 'remove'];
                            ko.utils.arrayForEach(classNames.match(cssClassNameRegex), function (className) {
                                addOrRemoveFn.call(node.classList, className);
                            });
                        } else if (typeof node.className['baseVal'] === 'string') {
                            // SVG tag .classNames is an SVGAnimatedString instance
                            toggleObjectClassPropertyString(node.className, 'baseVal', classNames, shouldHaveClass);
                        } else {
                            // node.className ought to be a string.
                            toggleObjectClassPropertyString(node, 'className', classNames, shouldHaveClass);
                        }
                    }
                }

                function toggleObjectClassPropertyString(obj, prop, classNames, shouldHaveClass) {
                    // obj/prop is either a node/'className' or a SVGAnimatedString/'baseVal'.
                    var currentClassNames = obj[prop].match(cssClassNameRegex) || [];
                    ko.utils.arrayForEach(classNames.match(cssClassNameRegex), function (className) {
                        ko.utils.addOrRemoveItem(currentClassNames, className, shouldHaveClass);
                    });
                    obj[prop] = currentClassNames.join(" ");
                }

                return {
                    fieldsIncludedWithJsonPost: ['authenticity_token', /^__RequestVerificationToken(_.*)?$/],

                    arrayForEach: function arrayForEach(array, action) {
                        for (var i = 0, j = array.length; i < j; i++) {
                            action(array[i], i);
                        }
                    },

                    arrayIndexOf: function arrayIndexOf(array, item) {
                        if (typeof Array.prototype.indexOf == "function") return Array.prototype.indexOf.call(array, item);
                        for (var i = 0, j = array.length; i < j; i++) {
                            if (array[i] === item) return i;
                        }return -1;
                    },

                    arrayFirst: function arrayFirst(array, predicate, predicateOwner) {
                        for (var i = 0, j = array.length; i < j; i++) {
                            if (predicate.call(predicateOwner, array[i], i)) return array[i];
                        }return null;
                    },

                    arrayRemoveItem: function arrayRemoveItem(array, itemToRemove) {
                        var index = ko.utils.arrayIndexOf(array, itemToRemove);
                        if (index > 0) {
                            array.splice(index, 1);
                        } else if (index === 0) {
                            array.shift();
                        }
                    },

                    arrayGetDistinctValues: function arrayGetDistinctValues(array) {
                        array = array || [];
                        var result = [];
                        for (var i = 0, j = array.length; i < j; i++) {
                            if (ko.utils.arrayIndexOf(result, array[i]) < 0) result.push(array[i]);
                        }
                        return result;
                    },

                    arrayMap: function arrayMap(array, mapping) {
                        array = array || [];
                        var result = [];
                        for (var i = 0, j = array.length; i < j; i++) {
                            result.push(mapping(array[i], i));
                        }return result;
                    },

                    arrayFilter: function arrayFilter(array, predicate) {
                        array = array || [];
                        var result = [];
                        for (var i = 0, j = array.length; i < j; i++) {
                            if (predicate(array[i], i)) result.push(array[i]);
                        }return result;
                    },

                    arrayPushAll: function arrayPushAll(array, valuesToPush) {
                        if (valuesToPush instanceof Array) array.push.apply(array, valuesToPush);else for (var i = 0, j = valuesToPush.length; i < j; i++) {
                            array.push(valuesToPush[i]);
                        }return array;
                    },

                    addOrRemoveItem: function addOrRemoveItem(array, value, included) {
                        var existingEntryIndex = ko.utils.arrayIndexOf(ko.utils.peekObservable(array), value);
                        if (existingEntryIndex < 0) {
                            if (included) array.push(value);
                        } else {
                            if (!included) array.splice(existingEntryIndex, 1);
                        }
                    },

                    canSetPrototype: canSetPrototype,

                    extend: extend,

                    setPrototypeOf: setPrototypeOf,

                    setPrototypeOfOrExtend: canSetPrototype ? setPrototypeOf : extend,

                    objectForEach: objectForEach,

                    objectMap: function objectMap(source, mapping) {
                        if (!source) return source;
                        var target = {};
                        for (var prop in source) {
                            if (source.hasOwnProperty(prop)) {
                                target[prop] = mapping(source[prop], prop, source);
                            }
                        }
                        return target;
                    },

                    emptyDomNode: function emptyDomNode(domNode) {
                        while (domNode.firstChild) {
                            ko.removeNode(domNode.firstChild);
                        }
                    },

                    moveCleanedNodesToContainerElement: function moveCleanedNodesToContainerElement(nodes) {
                        // Ensure it's a real array, as we're about to reparent the nodes and
                        // we don't want the underlying collection to change while we're doing that.
                        var nodesArray = ko.utils.makeArray(nodes);
                        var templateDocument = nodesArray[0] && nodesArray[0].ownerDocument || document;

                        var container = templateDocument.createElement('div');
                        for (var i = 0, j = nodesArray.length; i < j; i++) {
                            container.appendChild(ko.cleanNode(nodesArray[i]));
                        }
                        return container;
                    },

                    cloneNodes: function cloneNodes(nodesArray, shouldCleanNodes) {
                        for (var i = 0, j = nodesArray.length, newNodesArray = []; i < j; i++) {
                            var clonedNode = nodesArray[i].cloneNode(true);
                            newNodesArray.push(shouldCleanNodes ? ko.cleanNode(clonedNode) : clonedNode);
                        }
                        return newNodesArray;
                    },

                    setDomNodeChildren: function setDomNodeChildren(domNode, childNodes) {
                        ko.utils.emptyDomNode(domNode);
                        if (childNodes) {
                            for (var i = 0, j = childNodes.length; i < j; i++) {
                                domNode.appendChild(childNodes[i]);
                            }
                        }
                    },

                    replaceDomNodes: function replaceDomNodes(nodeToReplaceOrNodeArray, newNodesArray) {
                        var nodesToReplaceArray = nodeToReplaceOrNodeArray.nodeType ? [nodeToReplaceOrNodeArray] : nodeToReplaceOrNodeArray;
                        if (nodesToReplaceArray.length > 0) {
                            var insertionPoint = nodesToReplaceArray[0];
                            var parent = insertionPoint.parentNode;
                            for (var i = 0, j = newNodesArray.length; i < j; i++) {
                                parent.insertBefore(newNodesArray[i], insertionPoint);
                            }for (var i = 0, j = nodesToReplaceArray.length; i < j; i++) {
                                ko.removeNode(nodesToReplaceArray[i]);
                            }
                        }
                    },

                    fixUpContinuousNodeArray: function fixUpContinuousNodeArray(continuousNodeArray, parentNode) {
                        // Before acting on a set of nodes that were previously outputted by a template function, we have to reconcile
                        // them against what is in the DOM right now. It may be that some of the nodes have already been removed, or that
                        // new nodes might have been inserted in the middle, for example by a binding. Also, there may previously have been
                        // leading comment nodes (created by rewritten string-based templates) that have since been removed during binding.
                        // So, this function translates the old "map" output array into its best guess of the set of current DOM nodes.
                        //
                        // Rules:
                        //   [A] Any leading nodes that have been removed should be ignored
                        //       These most likely correspond to memoization nodes that were already removed during binding
                        //       See https://github.com/knockout/knockout/pull/440
                        //   [B] Any trailing nodes that have been remove should be ignored
                        //       This prevents the code here from adding unrelated nodes to the array while processing rule [C]
                        //       See https://github.com/knockout/knockout/pull/1903
                        //   [C] We want to output a continuous series of nodes. So, ignore any nodes that have already been removed,
                        //       and include any nodes that have been inserted among the previous collection

                        if (continuousNodeArray.length) {
                            // The parent node can be a virtual element; so get the real parent node
                            parentNode = parentNode.nodeType === 8 && parentNode.parentNode || parentNode;

                            // Rule [A]
                            while (continuousNodeArray.length && continuousNodeArray[0].parentNode !== parentNode) {
                                continuousNodeArray.splice(0, 1);
                            } // Rule [B]
                            while (continuousNodeArray.length > 1 && continuousNodeArray[continuousNodeArray.length - 1].parentNode !== parentNode) {
                                continuousNodeArray.length--;
                            } // Rule [C]
                            if (continuousNodeArray.length > 1) {
                                var current = continuousNodeArray[0],
                                    last = continuousNodeArray[continuousNodeArray.length - 1];
                                // Replace with the actual new continuous node set
                                continuousNodeArray.length = 0;
                                while (current !== last) {
                                    continuousNodeArray.push(current);
                                    current = current.nextSibling;
                                }
                                continuousNodeArray.push(last);
                            }
                        }
                        return continuousNodeArray;
                    },

                    setOptionNodeSelectionState: function setOptionNodeSelectionState(optionNode, isSelected) {
                        // IE6 sometimes throws "unknown error" if you try to write to .selected directly, whereas Firefox struggles with setAttribute. Pick one based on browser.
                        if (ieVersion < 7) optionNode.setAttribute("selected", isSelected);else optionNode.selected = isSelected;
                    },

                    stringTrim: function stringTrim(string) {
                        return string === null || string === undefined ? '' : string.trim ? string.trim() : string.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');
                    },

                    stringStartsWith: function stringStartsWith(string, startsWith) {
                        string = string || "";
                        if (startsWith.length > string.length) return false;
                        return string.substring(0, startsWith.length) === startsWith;
                    },

                    domNodeIsContainedBy: function domNodeIsContainedBy(node, containedByNode) {
                        if (node === containedByNode) return true;
                        if (node.nodeType === 11) return false; // Fixes issue #1162 - can't use node.contains for document fragments on IE8
                        if (containedByNode.contains) return containedByNode.contains(node.nodeType === 3 ? node.parentNode : node);
                        if (containedByNode.compareDocumentPosition) return (containedByNode.compareDocumentPosition(node) & 16) == 16;
                        while (node && node != containedByNode) {
                            node = node.parentNode;
                        }
                        return !!node;
                    },

                    domNodeIsAttachedToDocument: function domNodeIsAttachedToDocument(node) {
                        return ko.utils.domNodeIsContainedBy(node, node.ownerDocument.documentElement);
                    },

                    anyDomNodeIsAttachedToDocument: function anyDomNodeIsAttachedToDocument(nodes) {
                        return !!ko.utils.arrayFirst(nodes, ko.utils.domNodeIsAttachedToDocument);
                    },

                    tagNameLower: function tagNameLower(element) {
                        // For HTML elements, tagName will always be upper case; for XHTML elements, it'll be lower case.
                        // Possible future optimization: If we know it's an element from an XHTML document (not HTML),
                        // we don't need to do the .toLowerCase() as it will always be lower case anyway.
                        return element && element.tagName && element.tagName.toLowerCase();
                    },

                    catchFunctionErrors: function catchFunctionErrors(delegate) {
                        return ko['onError'] ? function () {
                            try {
                                return delegate.apply(this, arguments);
                            } catch (e) {
                                ko['onError'] && ko['onError'](e);
                                throw e;
                            }
                        } : delegate;
                    },

                    setTimeout: function (_setTimeout) {
                        function setTimeout(_x, _x2) {
                            return _setTimeout.apply(this, arguments);
                        }

                        setTimeout.toString = function () {
                            return _setTimeout.toString();
                        };

                        return setTimeout;
                    }(function (handler, timeout) {
                        return setTimeout(ko.utils.catchFunctionErrors(handler), timeout);
                    }),

                    deferError: function deferError(error) {
                        setTimeout(function () {
                            ko['onError'] && ko['onError'](error);
                            throw error;
                        }, 0);
                    },

                    registerEventHandler: function registerEventHandler(element, eventType, handler) {
                        var wrappedHandler = ko.utils.catchFunctionErrors(handler);

                        var mustUseAttachEvent = ieVersion && eventsThatMustBeRegisteredUsingAttachEvent[eventType];
                        if (!ko.options['useOnlyNativeEvents'] && !mustUseAttachEvent && jQueryInstance) {
                            jQueryInstance(element)['bind'](eventType, wrappedHandler);
                        } else if (!mustUseAttachEvent && typeof element.addEventListener == "function") element.addEventListener(eventType, wrappedHandler, false);else if (typeof element.attachEvent != "undefined") {
                            var attachEventHandler = function attachEventHandler(event) {
                                wrappedHandler.call(element, event);
                            },
                                attachEventName = "on" + eventType;
                            element.attachEvent(attachEventName, attachEventHandler);

                            // IE does not dispose attachEvent handlers automatically (unlike with addEventListener)
                            // so to avoid leaks, we have to remove them manually. See bug #856
                            ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                                element.detachEvent(attachEventName, attachEventHandler);
                            });
                        } else throw new Error("Browser doesn't support addEventListener or attachEvent");
                    },

                    triggerEvent: function triggerEvent(element, eventType) {
                        if (!(element && element.nodeType)) throw new Error("element must be a DOM node when calling triggerEvent");

                        // For click events on checkboxes and radio buttons, jQuery toggles the element checked state *after* the
                        // event handler runs instead of *before*. (This was fixed in 1.9 for checkboxes but not for radio buttons.)
                        // IE doesn't change the checked state when you trigger the click event using "fireEvent".
                        // In both cases, we'll use the click method instead.
                        var useClickWorkaround = isClickOnCheckableElement(element, eventType);

                        if (!ko.options['useOnlyNativeEvents'] && jQueryInstance && !useClickWorkaround) {
                            jQueryInstance(element)['trigger'](eventType);
                        } else if (typeof document.createEvent == "function") {
                            if (typeof element.dispatchEvent == "function") {
                                var eventCategory = knownEventTypesByEventName[eventType] || "HTMLEvents";
                                var event = document.createEvent(eventCategory);
                                event.initEvent(eventType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, element);
                                element.dispatchEvent(event);
                            } else throw new Error("The supplied element doesn't support dispatchEvent");
                        } else if (useClickWorkaround && element.click) {
                            element.click();
                        } else if (typeof element.fireEvent != "undefined") {
                            element.fireEvent("on" + eventType);
                        } else {
                            throw new Error("Browser doesn't support triggering events");
                        }
                    },

                    unwrapObservable: function unwrapObservable(value) {
                        return ko.isObservable(value) ? value() : value;
                    },

                    peekObservable: function peekObservable(value) {
                        return ko.isObservable(value) ? value.peek() : value;
                    },

                    toggleDomNodeCssClass: toggleDomNodeCssClass,

                    setTextContent: function setTextContent(element, textContent) {
                        var value = ko.utils.unwrapObservable(textContent);
                        if (value === null || value === undefined) value = "";

                        // We need there to be exactly one child: a text node.
                        // If there are no children, more than one, or if it's not a text node,
                        // we'll clear everything and create a single text node.
                        var innerTextNode = ko.virtualElements.firstChild(element);
                        if (!innerTextNode || innerTextNode.nodeType != 3 || ko.virtualElements.nextSibling(innerTextNode)) {
                            ko.virtualElements.setDomNodeChildren(element, [element.ownerDocument.createTextNode(value)]);
                        } else {
                            innerTextNode.data = value;
                        }

                        ko.utils.forceRefresh(element);
                    },

                    setElementName: function setElementName(element, name) {
                        element.name = name;

                        // Workaround IE 6/7 issue
                        // - https://github.com/SteveSanderson/knockout/issues/197
                        // - http://www.matts411.com/post/setting_the_name_attribute_in_ie_dom/
                        if (ieVersion <= 7) {
                            try {
                                element.mergeAttributes(document.createElement("<input name='" + element.name + "'/>"), false);
                            } catch (e) {} // For IE9 with doc mode "IE9 Standards" and browser mode "IE9 Compatibility View"
                        }
                    },

                    forceRefresh: function forceRefresh(node) {
                        // Workaround for an IE9 rendering bug - https://github.com/SteveSanderson/knockout/issues/209
                        if (ieVersion >= 9) {
                            // For text nodes and comment nodes (most likely virtual elements), we will have to refresh the container
                            var elem = node.nodeType == 1 ? node : node.parentNode;
                            if (elem.style) elem.style.zoom = elem.style.zoom;
                        }
                    },

                    ensureSelectElementIsRenderedCorrectly: function ensureSelectElementIsRenderedCorrectly(selectElement) {
                        // Workaround for IE9 rendering bug - it doesn't reliably display all the text in dynamically-added select boxes unless you force it to re-render by updating the width.
                        // (See https://github.com/SteveSanderson/knockout/issues/312, http://stackoverflow.com/questions/5908494/select-only-shows-first-char-of-selected-option)
                        // Also fixes IE7 and IE8 bug that causes selects to be zero width if enclosed by 'if' or 'with'. (See issue #839)
                        if (ieVersion) {
                            var originalWidth = selectElement.style.width;
                            selectElement.style.width = 0;
                            selectElement.style.width = originalWidth;
                        }
                    },

                    range: function range(min, max) {
                        min = ko.utils.unwrapObservable(min);
                        max = ko.utils.unwrapObservable(max);
                        var result = [];
                        for (var i = min; i <= max; i++) {
                            result.push(i);
                        }return result;
                    },

                    makeArray: function makeArray(arrayLikeObject) {
                        var result = [];
                        for (var i = 0, j = arrayLikeObject.length; i < j; i++) {
                            result.push(arrayLikeObject[i]);
                        };
                        return result;
                    },

                    createSymbolOrString: function createSymbolOrString(identifier) {
                        return canUseSymbols ? Symbol(identifier) : identifier;
                    },

                    isIe6: isIe6,
                    isIe7: isIe7,
                    ieVersion: ieVersion,

                    getFormFields: function getFormFields(form, fieldName) {
                        var fields = ko.utils.makeArray(form.getElementsByTagName("input")).concat(ko.utils.makeArray(form.getElementsByTagName("textarea")));
                        var isMatchingField = typeof fieldName == 'string' ? function (field) {
                            return field.name === fieldName;
                        } : function (field) {
                            return fieldName.test(field.name);
                        }; // Treat fieldName as regex or object containing predicate
                        var matches = [];
                        for (var i = fields.length - 1; i >= 0; i--) {
                            if (isMatchingField(fields[i])) matches.push(fields[i]);
                        };
                        return matches;
                    },

                    parseJson: function parseJson(jsonString) {
                        if (typeof jsonString == "string") {
                            jsonString = ko.utils.stringTrim(jsonString);
                            if (jsonString) {
                                if (JSON && JSON.parse) // Use native parsing where available
                                    return JSON.parse(jsonString);
                                return new Function("return " + jsonString)(); // Fallback on less safe parsing for older browsers
                            }
                        }
                        return null;
                    },

                    stringifyJson: function stringifyJson(data, replacer, space) {
                        // replacer and space are optional
                        if (!JSON || !JSON.stringify) throw new Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                        return JSON.stringify(ko.utils.unwrapObservable(data), replacer, space);
                    },

                    postJson: function postJson(urlOrForm, data, options) {
                        options = options || {};
                        var params = options['params'] || {};
                        var includeFields = options['includeFields'] || this.fieldsIncludedWithJsonPost;
                        var url = urlOrForm;

                        // If we were given a form, use its 'action' URL and pick out any requested field values
                        if ((typeof urlOrForm === 'undefined' ? 'undefined' : _typeof(urlOrForm)) == 'object' && ko.utils.tagNameLower(urlOrForm) === "form") {
                            var originalForm = urlOrForm;
                            url = originalForm.action;
                            for (var i = includeFields.length - 1; i >= 0; i--) {
                                var fields = ko.utils.getFormFields(originalForm, includeFields[i]);
                                for (var j = fields.length - 1; j >= 0; j--) {
                                    params[fields[j].name] = fields[j].value;
                                }
                            }
                        }

                        data = ko.utils.unwrapObservable(data);
                        var form = document.createElement("form");
                        form.style.display = "none";
                        form.action = url;
                        form.method = "post";
                        for (var key in data) {
                            // Since 'data' this is a model object, we include all properties including those inherited from its prototype
                            var input = document.createElement("input");
                            input.type = "hidden";
                            input.name = key;
                            input.value = ko.utils.stringifyJson(ko.utils.unwrapObservable(data[key]));
                            form.appendChild(input);
                        }
                        objectForEach(params, function (key, value) {
                            var input = document.createElement("input");
                            input.type = "hidden";
                            input.name = key;
                            input.value = value;
                            form.appendChild(input);
                        });
                        document.body.appendChild(form);
                        options['submitter'] ? options['submitter'](form) : form.submit();
                        setTimeout(function () {
                            form.parentNode.removeChild(form);
                        }, 0);
                    }
                };
            }();

            ko.exportSymbol('utils', ko.utils);
            ko.exportSymbol('utils.arrayForEach', ko.utils.arrayForEach);
            ko.exportSymbol('utils.arrayFirst', ko.utils.arrayFirst);
            ko.exportSymbol('utils.arrayFilter', ko.utils.arrayFilter);
            ko.exportSymbol('utils.arrayGetDistinctValues', ko.utils.arrayGetDistinctValues);
            ko.exportSymbol('utils.arrayIndexOf', ko.utils.arrayIndexOf);
            ko.exportSymbol('utils.arrayMap', ko.utils.arrayMap);
            ko.exportSymbol('utils.arrayPushAll', ko.utils.arrayPushAll);
            ko.exportSymbol('utils.arrayRemoveItem', ko.utils.arrayRemoveItem);
            ko.exportSymbol('utils.extend', ko.utils.extend);
            ko.exportSymbol('utils.fieldsIncludedWithJsonPost', ko.utils.fieldsIncludedWithJsonPost);
            ko.exportSymbol('utils.getFormFields', ko.utils.getFormFields);
            ko.exportSymbol('utils.peekObservable', ko.utils.peekObservable);
            ko.exportSymbol('utils.postJson', ko.utils.postJson);
            ko.exportSymbol('utils.parseJson', ko.utils.parseJson);
            ko.exportSymbol('utils.registerEventHandler', ko.utils.registerEventHandler);
            ko.exportSymbol('utils.stringifyJson', ko.utils.stringifyJson);
            ko.exportSymbol('utils.range', ko.utils.range);
            ko.exportSymbol('utils.toggleDomNodeCssClass', ko.utils.toggleDomNodeCssClass);
            ko.exportSymbol('utils.triggerEvent', ko.utils.triggerEvent);
            ko.exportSymbol('utils.unwrapObservable', ko.utils.unwrapObservable);
            ko.exportSymbol('utils.objectForEach', ko.utils.objectForEach);
            ko.exportSymbol('utils.addOrRemoveItem', ko.utils.addOrRemoveItem);
            ko.exportSymbol('utils.setTextContent', ko.utils.setTextContent);
            ko.exportSymbol('unwrap', ko.utils.unwrapObservable); // Convenient shorthand, because this is used so commonly

            if (!Function.prototype['bind']) {
                // Function.prototype.bind is a standard part of ECMAScript 5th Edition (December 2009, http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf)
                // In case the browser doesn't implement it natively, provide a JavaScript implementation. This implementation is based on the one in prototype.js
                Function.prototype['bind'] = function (object) {
                    var originalFunction = this;
                    if (arguments.length === 1) {
                        return function () {
                            return originalFunction.apply(object, arguments);
                        };
                    } else {
                        var partialArgs = Array.prototype.slice.call(arguments, 1);
                        return function () {
                            var args = partialArgs.slice(0);
                            args.push.apply(args, arguments);
                            return originalFunction.apply(object, args);
                        };
                    }
                };
            }

            ko.utils.domData = new function () {
                var uniqueId = 0;
                var dataStoreKeyExpandoPropertyName = "__ko__" + new Date().getTime();
                var dataStore = {};

                function getAll(node, createIfNotFound) {
                    var dataStoreKey = node[dataStoreKeyExpandoPropertyName];
                    var hasExistingDataStore = dataStoreKey && dataStoreKey !== "null" && dataStore[dataStoreKey];
                    if (!hasExistingDataStore) {
                        if (!createIfNotFound) return undefined;
                        dataStoreKey = node[dataStoreKeyExpandoPropertyName] = "ko" + uniqueId++;
                        dataStore[dataStoreKey] = {};
                    }
                    return dataStore[dataStoreKey];
                }

                return {
                    get: function get(node, key) {
                        var allDataForNode = getAll(node, false);
                        return allDataForNode === undefined ? undefined : allDataForNode[key];
                    },
                    set: function set(node, key, value) {
                        if (value === undefined) {
                            // Make sure we don't actually create a new domData key if we are actually deleting a value
                            if (getAll(node, false) === undefined) return;
                        }
                        var allDataForNode = getAll(node, true);
                        allDataForNode[key] = value;
                    },
                    clear: function clear(node) {
                        var dataStoreKey = node[dataStoreKeyExpandoPropertyName];
                        if (dataStoreKey) {
                            delete dataStore[dataStoreKey];
                            node[dataStoreKeyExpandoPropertyName] = null;
                            return true; // Exposing "did clean" flag purely so specs can infer whether things have been cleaned up as intended
                        }
                        return false;
                    },

                    nextKey: function nextKey() {
                        return uniqueId++ + dataStoreKeyExpandoPropertyName;
                    }
                };
            }();

            ko.exportSymbol('utils.domData', ko.utils.domData);
            ko.exportSymbol('utils.domData.clear', ko.utils.domData.clear); // Exporting only so specs can clear up after themselves fully

            ko.utils.domNodeDisposal = new function () {
                var domDataKey = ko.utils.domData.nextKey();
                var cleanableNodeTypes = { 1: true, 8: true, 9: true }; // Element, Comment, Document
                var cleanableNodeTypesWithDescendants = { 1: true, 9: true }; // Element, Document

                function getDisposeCallbacksCollection(node, createIfNotFound) {
                    var allDisposeCallbacks = ko.utils.domData.get(node, domDataKey);
                    if (allDisposeCallbacks === undefined && createIfNotFound) {
                        allDisposeCallbacks = [];
                        ko.utils.domData.set(node, domDataKey, allDisposeCallbacks);
                    }
                    return allDisposeCallbacks;
                }
                function destroyCallbacksCollection(node) {
                    ko.utils.domData.set(node, domDataKey, undefined);
                }

                function cleanSingleNode(node) {
                    // Run all the dispose callbacks
                    var callbacks = getDisposeCallbacksCollection(node, false);
                    if (callbacks) {
                        callbacks = callbacks.slice(0); // Clone, as the array may be modified during iteration (typically, callbacks will remove themselves)
                        for (var i = 0; i < callbacks.length; i++) {
                            callbacks[i](node);
                        }
                    }

                    // Erase the DOM data
                    ko.utils.domData.clear(node);

                    // Perform cleanup needed by external libraries (currently only jQuery, but can be extended)
                    ko.utils.domNodeDisposal["cleanExternalData"](node);

                    // Clear any immediate-child comment nodes, as these wouldn't have been found by
                    // node.getElementsByTagName("*") in cleanNode() (comment nodes aren't elements)
                    if (cleanableNodeTypesWithDescendants[node.nodeType]) cleanImmediateCommentTypeChildren(node);
                }

                function cleanImmediateCommentTypeChildren(nodeWithChildren) {
                    var child,
                        nextChild = nodeWithChildren.firstChild;
                    while (child = nextChild) {
                        nextChild = child.nextSibling;
                        if (child.nodeType === 8) cleanSingleNode(child);
                    }
                }

                return {
                    addDisposeCallback: function addDisposeCallback(node, callback) {
                        if (typeof callback != "function") throw new Error("Callback must be a function");
                        getDisposeCallbacksCollection(node, true).push(callback);
                    },

                    removeDisposeCallback: function removeDisposeCallback(node, callback) {
                        var callbacksCollection = getDisposeCallbacksCollection(node, false);
                        if (callbacksCollection) {
                            ko.utils.arrayRemoveItem(callbacksCollection, callback);
                            if (callbacksCollection.length == 0) destroyCallbacksCollection(node);
                        }
                    },

                    cleanNode: function cleanNode(node) {
                        // First clean this node, where applicable
                        if (cleanableNodeTypes[node.nodeType]) {
                            cleanSingleNode(node);

                            // ... then its descendants, where applicable
                            if (cleanableNodeTypesWithDescendants[node.nodeType]) {
                                // Clone the descendants list in case it changes during iteration
                                var descendants = [];
                                ko.utils.arrayPushAll(descendants, node.getElementsByTagName("*"));
                                for (var i = 0, j = descendants.length; i < j; i++) {
                                    cleanSingleNode(descendants[i]);
                                }
                            }
                        }
                        return node;
                    },

                    removeNode: function removeNode(node) {
                        ko.cleanNode(node);
                        if (node.parentNode) node.parentNode.removeChild(node);
                    },

                    "cleanExternalData": function cleanExternalData(node) {
                        // Special support for jQuery here because it's so commonly used.
                        // Many jQuery plugins (including jquery.tmpl) store data using jQuery's equivalent of domData
                        // so notify it to tear down any resources associated with the node & descendants here.
                        if (jQueryInstance && typeof jQueryInstance['cleanData'] == "function") jQueryInstance['cleanData']([node]);
                    }
                };
            }();
            ko.cleanNode = ko.utils.domNodeDisposal.cleanNode; // Shorthand name for convenience
            ko.removeNode = ko.utils.domNodeDisposal.removeNode; // Shorthand name for convenience
            ko.exportSymbol('cleanNode', ko.cleanNode);
            ko.exportSymbol('removeNode', ko.removeNode);
            ko.exportSymbol('utils.domNodeDisposal', ko.utils.domNodeDisposal);
            ko.exportSymbol('utils.domNodeDisposal.addDisposeCallback', ko.utils.domNodeDisposal.addDisposeCallback);
            ko.exportSymbol('utils.domNodeDisposal.removeDisposeCallback', ko.utils.domNodeDisposal.removeDisposeCallback);
            (function () {
                var none = [0, "", ""],
                    table = [1, "<table>", "</table>"],
                    tbody = [2, "<table><tbody>", "</tbody></table>"],
                    tr = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    select = [1, "<select multiple='multiple'>", "</select>"],
                    lookup = {
                    'thead': table,
                    'tbody': table,
                    'tfoot': table,
                    'tr': tbody,
                    'td': tr,
                    'th': tr,
                    'option': select,
                    'optgroup': select
                },


                // This is needed for old IE if you're *not* using either jQuery or innerShiv. Doesn't affect other cases.
                mayRequireCreateElementHack = ko.utils.ieVersion <= 8;

                function getWrap(tags) {
                    var m = tags.match(/^<([a-z]+)[ >]/);
                    return m && lookup[m[1]] || none;
                }

                function simpleHtmlParse(html, documentContext) {
                    documentContext || (documentContext = document);
                    var windowContext = documentContext['parentWindow'] || documentContext['defaultView'] || window;

                    // Based on jQuery's "clean" function, but only accounting for table-related elements.
                    // If you have referenced jQuery, this won't be used anyway - KO will use jQuery's "clean" function directly

                    // Note that there's still an issue in IE < 9 whereby it will discard comment nodes that are the first child of
                    // a descendant node. For example: "<div><!-- mycomment -->abc</div>" will get parsed as "<div>abc</div>"
                    // This won't affect anyone who has referenced jQuery, and there's always the workaround of inserting a dummy node
                    // (possibly a text node) in front of the comment. So, KO does not attempt to workaround this IE issue automatically at present.

                    // Trim whitespace, otherwise indexOf won't work as expected
                    var tags = ko.utils.stringTrim(html).toLowerCase(),
                        div = documentContext.createElement("div"),
                        wrap = getWrap(tags),
                        depth = wrap[0];

                    // Go to html and back, then peel off extra wrappers
                    // Note that we always prefix with some dummy text, because otherwise, IE<9 will strip out leading comment nodes in descendants. Total madness.
                    var markup = "ignored<div>" + wrap[1] + html + wrap[2] + "</div>";
                    if (typeof windowContext['innerShiv'] == "function") {
                        // Note that innerShiv is deprecated in favour of html5shiv. We should consider adding
                        // support for html5shiv (except if no explicit support is needed, e.g., if html5shiv
                        // somehow shims the native APIs so it just works anyway)
                        div.appendChild(windowContext['innerShiv'](markup));
                    } else {
                        if (mayRequireCreateElementHack) {
                            // The document.createElement('my-element') trick to enable custom elements in IE6-8
                            // only works if we assign innerHTML on an element associated with that document.
                            documentContext.appendChild(div);
                        }

                        div.innerHTML = markup;

                        if (mayRequireCreateElementHack) {
                            div.parentNode.removeChild(div);
                        }
                    }

                    // Move to the right depth
                    while (depth--) {
                        div = div.lastChild;
                    }return ko.utils.makeArray(div.lastChild.childNodes);
                }

                function jQueryHtmlParse(html, documentContext) {
                    // jQuery's "parseHTML" function was introduced in jQuery 1.8.0 and is a documented public API.
                    if (jQueryInstance['parseHTML']) {
                        return jQueryInstance['parseHTML'](html, documentContext) || []; // Ensure we always return an array and never null
                    } else {
                        // For jQuery < 1.8.0, we fall back on the undocumented internal "clean" function.
                        var elems = jQueryInstance['clean']([html], documentContext);

                        // As of jQuery 1.7.1, jQuery parses the HTML by appending it to some dummy parent nodes held in an in-memory document fragment.
                        // Unfortunately, it never clears the dummy parent nodes from the document fragment, so it leaks memory over time.
                        // Fix this by finding the top-most dummy parent element, and detaching it from its owner fragment.
                        if (elems && elems[0]) {
                            // Find the top-most parent element that's a direct child of a document fragment
                            var elem = elems[0];
                            while (elem.parentNode && elem.parentNode.nodeType !== 11 /* i.e., DocumentFragment */) {
                                elem = elem.parentNode;
                            } // ... then detach it
                            if (elem.parentNode) elem.parentNode.removeChild(elem);
                        }

                        return elems;
                    }
                }

                ko.utils.parseHtmlFragment = function (html, documentContext) {
                    return jQueryInstance ? jQueryHtmlParse(html, documentContext) : // As below, benefit from jQuery's optimisations where possible
                    simpleHtmlParse(html, documentContext); // ... otherwise, this simple logic will do in most common cases.
                };

                ko.utils.setHtml = function (node, html) {
                    ko.utils.emptyDomNode(node);

                    // There's no legitimate reason to display a stringified observable without unwrapping it, so we'll unwrap it
                    html = ko.utils.unwrapObservable(html);

                    if (html !== null && html !== undefined) {
                        if (typeof html != 'string') html = html.toString();

                        // jQuery contains a lot of sophisticated code to parse arbitrary HTML fragments,
                        // for example <tr> elements which are not normally allowed to exist on their own.
                        // If you've referenced jQuery we'll use that rather than duplicating its code.
                        if (jQueryInstance) {
                            jQueryInstance(node)['html'](html);
                        } else {
                            // ... otherwise, use KO's own parsing logic.
                            var parsedNodes = ko.utils.parseHtmlFragment(html, node.ownerDocument);
                            for (var i = 0; i < parsedNodes.length; i++) {
                                node.appendChild(parsedNodes[i]);
                            }
                        }
                    }
                };
            })();

            ko.exportSymbol('utils.parseHtmlFragment', ko.utils.parseHtmlFragment);
            ko.exportSymbol('utils.setHtml', ko.utils.setHtml);

            ko.memoization = function () {
                var memos = {};

                function randomMax8HexChars() {
                    return ((1 + Math.random()) * 0x100000000 | 0).toString(16).substring(1);
                }
                function generateRandomId() {
                    return randomMax8HexChars() + randomMax8HexChars();
                }
                function findMemoNodes(rootNode, appendToArray) {
                    if (!rootNode) return;
                    if (rootNode.nodeType == 8) {
                        var memoId = ko.memoization.parseMemoText(rootNode.nodeValue);
                        if (memoId != null) appendToArray.push({ domNode: rootNode, memoId: memoId });
                    } else if (rootNode.nodeType == 1) {
                        for (var i = 0, childNodes = rootNode.childNodes, j = childNodes.length; i < j; i++) {
                            findMemoNodes(childNodes[i], appendToArray);
                        }
                    }
                }

                return {
                    memoize: function memoize(callback) {
                        if (typeof callback != "function") throw new Error("You can only pass a function to ko.memoization.memoize()");
                        var memoId = generateRandomId();
                        memos[memoId] = callback;
                        return "<!--[ko_memo:" + memoId + "]-->";
                    },

                    unmemoize: function unmemoize(memoId, callbackParams) {
                        var callback = memos[memoId];
                        if (callback === undefined) throw new Error("Couldn't find any memo with ID " + memoId + ". Perhaps it's already been unmemoized.");
                        try {
                            callback.apply(null, callbackParams || []);
                            return true;
                        } finally {
                            delete memos[memoId];
                        }
                    },

                    unmemoizeDomNodeAndDescendants: function unmemoizeDomNodeAndDescendants(domNode, extraCallbackParamsArray) {
                        var memos = [];
                        findMemoNodes(domNode, memos);
                        for (var i = 0, j = memos.length; i < j; i++) {
                            var node = memos[i].domNode;
                            var combinedParams = [node];
                            if (extraCallbackParamsArray) ko.utils.arrayPushAll(combinedParams, extraCallbackParamsArray);
                            ko.memoization.unmemoize(memos[i].memoId, combinedParams);
                            node.nodeValue = ""; // Neuter this node so we don't try to unmemoize it again
                            if (node.parentNode) node.parentNode.removeChild(node); // If possible, erase it totally (not always possible - someone else might just hold a reference to it then call unmemoizeDomNodeAndDescendants again)
                        }
                    },

                    parseMemoText: function parseMemoText(memoText) {
                        var match = memoText.match(/^\[ko_memo\:(.*?)\]$/);
                        return match ? match[1] : null;
                    }
                };
            }();

            ko.exportSymbol('memoization', ko.memoization);
            ko.exportSymbol('memoization.memoize', ko.memoization.memoize);
            ko.exportSymbol('memoization.unmemoize', ko.memoization.unmemoize);
            ko.exportSymbol('memoization.parseMemoText', ko.memoization.parseMemoText);
            ko.exportSymbol('memoization.unmemoizeDomNodeAndDescendants', ko.memoization.unmemoizeDomNodeAndDescendants);
            ko.tasks = function () {
                var scheduler,
                    taskQueue = [],
                    taskQueueLength = 0,
                    nextHandle = 1,
                    nextIndexToProcess = 0;

                if (window['MutationObserver']) {
                    // Chrome 27+, Firefox 14+, IE 11+, Opera 15+, Safari 6.1+
                    // From https://github.com/petkaantonov/bluebird * Copyright (c) 2014 Petka Antonov * License: MIT
                    scheduler = function (callback) {
                        var div = document.createElement("div");
                        new MutationObserver(callback).observe(div, { attributes: true });
                        return function () {
                            div.classList.toggle("foo");
                        };
                    }(scheduledProcess);
                } else if (document && "onreadystatechange" in document.createElement("script")) {
                    // IE 6-10
                    // From https://github.com/YuzuJS/setImmediate * Copyright (c) 2012 Barnesandnoble.com, llc, Donavon West, and Domenic Denicola * License: MIT
                    scheduler = function scheduler(callback) {
                        var script = document.createElement("script");
                        script.onreadystatechange = function () {
                            script.onreadystatechange = null;
                            document.documentElement.removeChild(script);
                            script = null;
                            callback();
                        };
                        document.documentElement.appendChild(script);
                    };
                } else {
                    scheduler = function scheduler(callback) {
                        setTimeout(callback, 0);
                    };
                }

                function processTasks() {
                    if (taskQueueLength) {
                        // Each mark represents the end of a logical group of tasks and the number of these groups is
                        // limited to prevent unchecked recursion.
                        var mark = taskQueueLength,
                            countMarks = 0;

                        // nextIndexToProcess keeps track of where we are in the queue; processTasks can be called recursively without issue
                        for (var task; nextIndexToProcess < taskQueueLength;) {
                            if (task = taskQueue[nextIndexToProcess++]) {
                                if (nextIndexToProcess > mark) {
                                    if (++countMarks >= 5000) {
                                        nextIndexToProcess = taskQueueLength; // skip all tasks remaining in the queue since any of them could be causing the recursion
                                        ko.utils.deferError(Error("'Too much recursion' after processing " + countMarks + " task groups."));
                                        break;
                                    }
                                    mark = taskQueueLength;
                                }
                                try {
                                    task();
                                } catch (ex) {
                                    ko.utils.deferError(ex);
                                }
                            }
                        }
                    }
                }

                function scheduledProcess() {
                    processTasks();

                    // Reset the queue
                    nextIndexToProcess = taskQueueLength = taskQueue.length = 0;
                }

                function scheduleTaskProcessing() {
                    ko.tasks['scheduler'](scheduledProcess);
                }

                var tasks = {
                    'scheduler': scheduler, // Allow overriding the scheduler

                    schedule: function schedule(func) {
                        if (!taskQueueLength) {
                            scheduleTaskProcessing();
                        }

                        taskQueue[taskQueueLength++] = func;
                        return nextHandle++;
                    },

                    cancel: function cancel(handle) {
                        var index = handle - (nextHandle - taskQueueLength);
                        if (index >= nextIndexToProcess && index < taskQueueLength) {
                            taskQueue[index] = null;
                        }
                    },

                    // For testing only: reset the queue and return the previous queue length
                    'resetForTesting': function resetForTesting() {
                        var length = taskQueueLength - nextIndexToProcess;
                        nextIndexToProcess = taskQueueLength = taskQueue.length = 0;
                        return length;
                    },

                    runEarly: processTasks
                };

                return tasks;
            }();

            ko.exportSymbol('tasks', ko.tasks);
            ko.exportSymbol('tasks.schedule', ko.tasks.schedule);
            //ko.exportSymbol('tasks.cancel', ko.tasks.cancel);  "cancel" isn't minified
            ko.exportSymbol('tasks.runEarly', ko.tasks.runEarly);
            ko.extenders = {
                'throttle': function throttle(target, timeout) {
                    // Throttling means two things:

                    // (1) For dependent observables, we throttle *evaluations* so that, no matter how fast its dependencies
                    //     notify updates, the target doesn't re-evaluate (and hence doesn't notify) faster than a certain rate
                    target['throttleEvaluation'] = timeout;

                    // (2) For writable targets (observables, or writable dependent observables), we throttle *writes*
                    //     so the target cannot change value synchronously or faster than a certain rate
                    var writeTimeoutInstance = null;
                    return ko.dependentObservable({
                        'read': target,
                        'write': function write(value) {
                            clearTimeout(writeTimeoutInstance);
                            writeTimeoutInstance = ko.utils.setTimeout(function () {
                                target(value);
                            }, timeout);
                        }
                    });
                },

                'rateLimit': function rateLimit(target, options) {
                    var timeout, method, limitFunction;

                    if (typeof options == 'number') {
                        timeout = options;
                    } else {
                        timeout = options['timeout'];
                        method = options['method'];
                    }

                    // rateLimit supersedes deferred updates
                    target._deferUpdates = false;

                    limitFunction = method == 'notifyWhenChangesStop' ? debounce : throttle;
                    target.limit(function (callback) {
                        return limitFunction(callback, timeout);
                    });
                },

                'deferred': function deferred(target, options) {
                    if (options !== true) {
                        throw new Error('The \'deferred\' extender only accepts the value \'true\', because it is not supported to turn deferral off once enabled.');
                    }

                    if (!target._deferUpdates) {
                        target._deferUpdates = true;
                        target.limit(function (callback) {
                            var handle,
                                ignoreUpdates = false;
                            return function () {
                                if (!ignoreUpdates) {
                                    ko.tasks.cancel(handle);
                                    handle = ko.tasks.schedule(callback);

                                    try {
                                        ignoreUpdates = true;
                                        target['notifySubscribers'](undefined, 'dirty');
                                    } finally {
                                        ignoreUpdates = false;
                                    }
                                }
                            };
                        });
                    }
                },

                'notify': function notify(target, notifyWhen) {
                    target["equalityComparer"] = notifyWhen == "always" ? null : // null equalityComparer means to always notify
                    valuesArePrimitiveAndEqual;
                }
            };

            var primitiveTypes = { 'undefined': 1, 'boolean': 1, 'number': 1, 'string': 1 };
            function valuesArePrimitiveAndEqual(a, b) {
                var oldValueIsPrimitive = a === null || (typeof a === 'undefined' ? 'undefined' : _typeof(a)) in primitiveTypes;
                return oldValueIsPrimitive ? a === b : false;
            }

            function throttle(callback, timeout) {
                var timeoutInstance;
                return function () {
                    if (!timeoutInstance) {
                        timeoutInstance = ko.utils.setTimeout(function () {
                            timeoutInstance = undefined;
                            callback();
                        }, timeout);
                    }
                };
            }

            function debounce(callback, timeout) {
                var timeoutInstance;
                return function () {
                    clearTimeout(timeoutInstance);
                    timeoutInstance = ko.utils.setTimeout(callback, timeout);
                };
            }

            function applyExtenders(requestedExtenders) {
                var target = this;
                if (requestedExtenders) {
                    ko.utils.objectForEach(requestedExtenders, function (key, value) {
                        var extenderHandler = ko.extenders[key];
                        if (typeof extenderHandler == 'function') {
                            target = extenderHandler(target, value) || target;
                        }
                    });
                }
                return target;
            }

            ko.exportSymbol('extenders', ko.extenders);

            ko.subscription = function (target, callback, disposeCallback) {
                this._target = target;
                this.callback = callback;
                this.disposeCallback = disposeCallback;
                this.isDisposed = false;
                ko.exportProperty(this, 'dispose', this.dispose);
            };
            ko.subscription.prototype.dispose = function () {
                this.isDisposed = true;
                this.disposeCallback();
            };

            ko.subscribable = function () {
                ko.utils.setPrototypeOfOrExtend(this, ko_subscribable_fn);
                ko_subscribable_fn.init(this);
            };

            var defaultEvent = "change";

            // Moved out of "limit" to avoid the extra closure
            function limitNotifySubscribers(value, event) {
                if (!event || event === defaultEvent) {
                    this._limitChange(value);
                } else if (event === 'beforeChange') {
                    this._limitBeforeChange(value);
                } else {
                    this._origNotifySubscribers(value, event);
                }
            }

            var ko_subscribable_fn = {
                init: function init(instance) {
                    instance._subscriptions = { "change": [] };
                    instance._versionNumber = 1;
                },

                subscribe: function subscribe(callback, callbackTarget, event) {
                    var self = this;

                    event = event || defaultEvent;
                    var boundCallback = callbackTarget ? callback.bind(callbackTarget) : callback;

                    var subscription = new ko.subscription(self, boundCallback, function () {
                        ko.utils.arrayRemoveItem(self._subscriptions[event], subscription);
                        if (self.afterSubscriptionRemove) self.afterSubscriptionRemove(event);
                    });

                    if (self.beforeSubscriptionAdd) self.beforeSubscriptionAdd(event);

                    if (!self._subscriptions[event]) self._subscriptions[event] = [];
                    self._subscriptions[event].push(subscription);

                    return subscription;
                },

                "notifySubscribers": function notifySubscribers(valueToNotify, event) {
                    event = event || defaultEvent;
                    if (event === defaultEvent) {
                        this.updateVersion();
                    }
                    if (this.hasSubscriptionsForEvent(event)) {
                        var subs = event === defaultEvent && this._changeSubscriptions || this._subscriptions[event].slice(0);
                        try {
                            ko.dependencyDetection.begin(); // Begin suppressing dependency detection (by setting the top frame to undefined)
                            for (var i = 0, subscription; subscription = subs[i]; ++i) {
                                // In case a subscription was disposed during the arrayForEach cycle, check
                                // for isDisposed on each subscription before invoking its callback
                                if (!subscription.isDisposed) subscription.callback(valueToNotify);
                            }
                        } finally {
                            ko.dependencyDetection.end(); // End suppressing dependency detection
                        }
                    }
                },

                getVersion: function getVersion() {
                    return this._versionNumber;
                },

                hasChanged: function hasChanged(versionToCheck) {
                    return this.getVersion() !== versionToCheck;
                },

                updateVersion: function updateVersion() {
                    ++this._versionNumber;
                },

                limit: function limit(limitFunction) {
                    var self = this,
                        selfIsObservable = ko.isObservable(self),
                        ignoreBeforeChange,
                        notifyNextChange,
                        previousValue,
                        pendingValue,
                        beforeChange = 'beforeChange';

                    if (!self._origNotifySubscribers) {
                        self._origNotifySubscribers = self["notifySubscribers"];
                        self["notifySubscribers"] = limitNotifySubscribers;
                    }

                    var finish = limitFunction(function () {
                        self._notificationIsPending = false;

                        // If an observable provided a reference to itself, access it to get the latest value.
                        // This allows computed observables to delay calculating their value until needed.
                        if (selfIsObservable && pendingValue === self) {
                            pendingValue = self._evalIfChanged ? self._evalIfChanged() : self();
                        }
                        var shouldNotify = notifyNextChange || self.isDifferent(previousValue, pendingValue);

                        notifyNextChange = ignoreBeforeChange = false;

                        if (shouldNotify) {
                            self._origNotifySubscribers(previousValue = pendingValue);
                        }
                    });

                    self._limitChange = function (value) {
                        self._changeSubscriptions = self._subscriptions[defaultEvent].slice(0);
                        self._notificationIsPending = ignoreBeforeChange = true;
                        pendingValue = value;
                        finish();
                    };
                    self._limitBeforeChange = function (value) {
                        if (!ignoreBeforeChange) {
                            previousValue = value;
                            self._origNotifySubscribers(value, beforeChange);
                        }
                    };
                    self._notifyNextChangeIfValueIsDifferent = function () {
                        if (self.isDifferent(previousValue, self.peek(true /*evaluate*/))) {
                            notifyNextChange = true;
                        }
                    };
                },

                hasSubscriptionsForEvent: function hasSubscriptionsForEvent(event) {
                    return this._subscriptions[event] && this._subscriptions[event].length;
                },

                getSubscriptionsCount: function getSubscriptionsCount(event) {
                    if (event) {
                        return this._subscriptions[event] && this._subscriptions[event].length || 0;
                    } else {
                        var total = 0;
                        ko.utils.objectForEach(this._subscriptions, function (eventName, subscriptions) {
                            if (eventName !== 'dirty') total += subscriptions.length;
                        });
                        return total;
                    }
                },

                isDifferent: function isDifferent(oldValue, newValue) {
                    return !this['equalityComparer'] || !this['equalityComparer'](oldValue, newValue);
                },

                extend: applyExtenders
            };

            ko.exportProperty(ko_subscribable_fn, 'subscribe', ko_subscribable_fn.subscribe);
            ko.exportProperty(ko_subscribable_fn, 'extend', ko_subscribable_fn.extend);
            ko.exportProperty(ko_subscribable_fn, 'getSubscriptionsCount', ko_subscribable_fn.getSubscriptionsCount);

            // For browsers that support proto assignment, we overwrite the prototype of each
            // observable instance. Since observables are functions, we need Function.prototype
            // to still be in the prototype chain.
            if (ko.utils.canSetPrototype) {
                ko.utils.setPrototypeOf(ko_subscribable_fn, Function.prototype);
            }

            ko.subscribable['fn'] = ko_subscribable_fn;

            ko.isSubscribable = function (instance) {
                return instance != null && typeof instance.subscribe == "function" && typeof instance["notifySubscribers"] == "function";
            };

            ko.exportSymbol('subscribable', ko.subscribable);
            ko.exportSymbol('isSubscribable', ko.isSubscribable);

            ko.computedContext = ko.dependencyDetection = function () {
                var outerFrames = [],
                    currentFrame,
                    lastId = 0;

                // Return a unique ID that can be assigned to an observable for dependency tracking.
                // Theoretically, you could eventually overflow the number storage size, resulting
                // in duplicate IDs. But in JavaScript, the largest exact integral value is 2^53
                // or 9,007,199,254,740,992. If you created 1,000,000 IDs per second, it would
                // take over 285 years to reach that number.
                // Reference http://blog.vjeux.com/2010/javascript/javascript-max_int-number-limits.html
                function getId() {
                    return ++lastId;
                }

                function begin(options) {
                    outerFrames.push(currentFrame);
                    currentFrame = options;
                }

                function end() {
                    currentFrame = outerFrames.pop();
                }

                return {
                    begin: begin,

                    end: end,

                    registerDependency: function registerDependency(subscribable) {
                        if (currentFrame) {
                            if (!ko.isSubscribable(subscribable)) throw new Error("Only subscribable things can act as dependencies");
                            currentFrame.callback.call(currentFrame.callbackTarget, subscribable, subscribable._id || (subscribable._id = getId()));
                        }
                    },

                    ignore: function ignore(callback, callbackTarget, callbackArgs) {
                        try {
                            begin();
                            return callback.apply(callbackTarget, callbackArgs || []);
                        } finally {
                            end();
                        }
                    },

                    getDependenciesCount: function getDependenciesCount() {
                        if (currentFrame) return currentFrame.computed.getDependenciesCount();
                    },

                    isInitial: function isInitial() {
                        if (currentFrame) return currentFrame.isInitial;
                    }
                };
            }();

            ko.exportSymbol('computedContext', ko.computedContext);
            ko.exportSymbol('computedContext.getDependenciesCount', ko.computedContext.getDependenciesCount);
            ko.exportSymbol('computedContext.isInitial', ko.computedContext.isInitial);

            ko.exportSymbol('ignoreDependencies', ko.ignoreDependencies = ko.dependencyDetection.ignore);
            var observableLatestValue = ko.utils.createSymbolOrString('_latestValue');

            ko.observable = function (initialValue) {
                function observable() {
                    if (arguments.length > 0) {
                        // Write

                        // Ignore writes if the value hasn't changed
                        if (observable.isDifferent(observable[observableLatestValue], arguments[0])) {
                            observable.valueWillMutate();
                            observable[observableLatestValue] = arguments[0];
                            observable.valueHasMutated();
                        }
                        return this; // Permits chained assignments
                    } else {
                        // Read
                        ko.dependencyDetection.registerDependency(observable); // The caller only needs to be notified of changes if they did a "read" operation
                        return observable[observableLatestValue];
                    }
                }

                observable[observableLatestValue] = initialValue;

                // Inherit from 'subscribable'
                if (!ko.utils.canSetPrototype) {
                    // 'subscribable' won't be on the prototype chain unless we put it there directly
                    ko.utils.extend(observable, ko.subscribable['fn']);
                }
                ko.subscribable['fn'].init(observable);

                // Inherit from 'observable'
                ko.utils.setPrototypeOfOrExtend(observable, observableFn);

                if (ko.options['deferUpdates']) {
                    ko.extenders['deferred'](observable, true);
                }

                return observable;
            };

            // Define prototype for observables
            var observableFn = {
                'equalityComparer': valuesArePrimitiveAndEqual,
                peek: function peek() {
                    return this[observableLatestValue];
                },
                valueHasMutated: function valueHasMutated() {
                    this['notifySubscribers'](this[observableLatestValue]);
                },
                valueWillMutate: function valueWillMutate() {
                    this['notifySubscribers'](this[observableLatestValue], 'beforeChange');
                }
            };

            // Note that for browsers that don't support proto assignment, the
            // inheritance chain is created manually in the ko.observable constructor
            if (ko.utils.canSetPrototype) {
                ko.utils.setPrototypeOf(observableFn, ko.subscribable['fn']);
            }

            var protoProperty = ko.observable.protoProperty = '__ko_proto__';
            observableFn[protoProperty] = ko.observable;

            ko.hasPrototype = function (instance, prototype) {
                if (instance === null || instance === undefined || instance[protoProperty] === undefined) return false;
                if (instance[protoProperty] === prototype) return true;
                return ko.hasPrototype(instance[protoProperty], prototype); // Walk the prototype chain
            };

            ko.isObservable = function (instance) {
                return ko.hasPrototype(instance, ko.observable);
            };
            ko.isWriteableObservable = function (instance) {
                // Observable
                if (typeof instance == 'function' && instance[protoProperty] === ko.observable) return true;
                // Writeable dependent observable
                if (typeof instance == 'function' && instance[protoProperty] === ko.dependentObservable && instance.hasWriteFunction) return true;
                // Anything else
                return false;
            };

            ko.exportSymbol('observable', ko.observable);
            ko.exportSymbol('isObservable', ko.isObservable);
            ko.exportSymbol('isWriteableObservable', ko.isWriteableObservable);
            ko.exportSymbol('isWritableObservable', ko.isWriteableObservable);
            ko.exportSymbol('observable.fn', observableFn);
            ko.exportProperty(observableFn, 'peek', observableFn.peek);
            ko.exportProperty(observableFn, 'valueHasMutated', observableFn.valueHasMutated);
            ko.exportProperty(observableFn, 'valueWillMutate', observableFn.valueWillMutate);
            ko.observableArray = function (initialValues) {
                initialValues = initialValues || [];

                if ((typeof initialValues === 'undefined' ? 'undefined' : _typeof(initialValues)) != 'object' || !('length' in initialValues)) throw new Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");

                var result = ko.observable(initialValues);
                ko.utils.setPrototypeOfOrExtend(result, ko.observableArray['fn']);
                return result.extend({ 'trackArrayChanges': true });
            };

            ko.observableArray['fn'] = {
                'remove': function remove(valueOrPredicate) {
                    var underlyingArray = this.peek();
                    var removedValues = [];
                    var predicate = typeof valueOrPredicate == "function" && !ko.isObservable(valueOrPredicate) ? valueOrPredicate : function (value) {
                        return value === valueOrPredicate;
                    };
                    for (var i = 0; i < underlyingArray.length; i++) {
                        var value = underlyingArray[i];
                        if (predicate(value)) {
                            if (removedValues.length === 0) {
                                this.valueWillMutate();
                            }
                            removedValues.push(value);
                            underlyingArray.splice(i, 1);
                            i--;
                        }
                    }
                    if (removedValues.length) {
                        this.valueHasMutated();
                    }
                    return removedValues;
                },

                'removeAll': function removeAll(arrayOfValues) {
                    // If you passed zero args, we remove everything
                    if (arrayOfValues === undefined) {
                        var underlyingArray = this.peek();
                        var allValues = underlyingArray.slice(0);
                        this.valueWillMutate();
                        underlyingArray.splice(0, underlyingArray.length);
                        this.valueHasMutated();
                        return allValues;
                    }
                    // If you passed an arg, we interpret it as an array of entries to remove
                    if (!arrayOfValues) return [];
                    return this['remove'](function (value) {
                        return ko.utils.arrayIndexOf(arrayOfValues, value) >= 0;
                    });
                },

                'destroy': function destroy(valueOrPredicate) {
                    var underlyingArray = this.peek();
                    var predicate = typeof valueOrPredicate == "function" && !ko.isObservable(valueOrPredicate) ? valueOrPredicate : function (value) {
                        return value === valueOrPredicate;
                    };
                    this.valueWillMutate();
                    for (var i = underlyingArray.length - 1; i >= 0; i--) {
                        var value = underlyingArray[i];
                        if (predicate(value)) underlyingArray[i]["_destroy"] = true;
                    }
                    this.valueHasMutated();
                },

                'destroyAll': function destroyAll(arrayOfValues) {
                    // If you passed zero args, we destroy everything
                    if (arrayOfValues === undefined) return this['destroy'](function () {
                        return true;
                    });

                    // If you passed an arg, we interpret it as an array of entries to destroy
                    if (!arrayOfValues) return [];
                    return this['destroy'](function (value) {
                        return ko.utils.arrayIndexOf(arrayOfValues, value) >= 0;
                    });
                },

                'indexOf': function indexOf(item) {
                    var underlyingArray = this();
                    return ko.utils.arrayIndexOf(underlyingArray, item);
                },

                'replace': function replace(oldItem, newItem) {
                    var index = this['indexOf'](oldItem);
                    if (index >= 0) {
                        this.valueWillMutate();
                        this.peek()[index] = newItem;
                        this.valueHasMutated();
                    }
                }
            };

            // Note that for browsers that don't support proto assignment, the
            // inheritance chain is created manually in the ko.observableArray constructor
            if (ko.utils.canSetPrototype) {
                ko.utils.setPrototypeOf(ko.observableArray['fn'], ko.observable['fn']);
            }

            // Populate ko.observableArray.fn with read/write functions from native arrays
            // Important: Do not add any additional functions here that may reasonably be used to *read* data from the array
            // because we'll eval them without causing subscriptions, so ko.computed output could end up getting stale
            ko.utils.arrayForEach(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (methodName) {
                ko.observableArray['fn'][methodName] = function () {
                    // Use "peek" to avoid creating a subscription in any computed that we're executing in the context of
                    // (for consistency with mutating regular observables)
                    var underlyingArray = this.peek();
                    this.valueWillMutate();
                    this.cacheDiffForKnownOperation(underlyingArray, methodName, arguments);
                    var methodCallResult = underlyingArray[methodName].apply(underlyingArray, arguments);
                    this.valueHasMutated();
                    // The native sort and reverse methods return a reference to the array, but it makes more sense to return the observable array instead.
                    return methodCallResult === underlyingArray ? this : methodCallResult;
                };
            });

            // Populate ko.observableArray.fn with read-only functions from native arrays
            ko.utils.arrayForEach(["slice"], function (methodName) {
                ko.observableArray['fn'][methodName] = function () {
                    var underlyingArray = this();
                    return underlyingArray[methodName].apply(underlyingArray, arguments);
                };
            });

            ko.exportSymbol('observableArray', ko.observableArray);
            var arrayChangeEventName = 'arrayChange';
            ko.extenders['trackArrayChanges'] = function (target, options) {
                // Use the provided options--each call to trackArrayChanges overwrites the previously set options
                target.compareArrayOptions = {};
                if (options && (typeof options === 'undefined' ? 'undefined' : _typeof(options)) == "object") {
                    ko.utils.extend(target.compareArrayOptions, options);
                }
                target.compareArrayOptions['sparse'] = true;

                // Only modify the target observable once
                if (target.cacheDiffForKnownOperation) {
                    return;
                }
                var trackingChanges = false,
                    cachedDiff = null,
                    arrayChangeSubscription,
                    pendingNotifications = 0,
                    underlyingNotifySubscribersFunction,
                    underlyingBeforeSubscriptionAddFunction = target.beforeSubscriptionAdd,
                    underlyingAfterSubscriptionRemoveFunction = target.afterSubscriptionRemove;

                // Watch "subscribe" calls, and for array change events, ensure change tracking is enabled
                target.beforeSubscriptionAdd = function (event) {
                    if (underlyingBeforeSubscriptionAddFunction) underlyingBeforeSubscriptionAddFunction.call(target, event);
                    if (event === arrayChangeEventName) {
                        trackChanges();
                    }
                };
                // Watch "dispose" calls, and for array change events, ensure change tracking is disabled when all are disposed
                target.afterSubscriptionRemove = function (event) {
                    if (underlyingAfterSubscriptionRemoveFunction) underlyingAfterSubscriptionRemoveFunction.call(target, event);
                    if (event === arrayChangeEventName && !target.hasSubscriptionsForEvent(arrayChangeEventName)) {
                        if (underlyingNotifySubscribersFunction) {
                            target['notifySubscribers'] = underlyingNotifySubscribersFunction;
                            underlyingNotifySubscribersFunction = undefined;
                        }
                        arrayChangeSubscription.dispose();
                        trackingChanges = false;
                    }
                };

                function trackChanges() {
                    // Calling 'trackChanges' multiple times is the same as calling it once
                    if (trackingChanges) {
                        return;
                    }

                    trackingChanges = true;

                    // Intercept "notifySubscribers" to track how many times it was called.
                    underlyingNotifySubscribersFunction = target['notifySubscribers'];
                    target['notifySubscribers'] = function (valueToNotify, event) {
                        if (!event || event === defaultEvent) {
                            ++pendingNotifications;
                        }
                        return underlyingNotifySubscribersFunction.apply(this, arguments);
                    };

                    // Each time the array changes value, capture a clone so that on the next
                    // change it's possible to produce a diff
                    var previousContents = [].concat(target.peek() || []);
                    cachedDiff = null;
                    arrayChangeSubscription = target.subscribe(function (currentContents) {
                        // Make a copy of the current contents and ensure it's an array
                        currentContents = [].concat(currentContents || []);

                        // Compute the diff and issue notifications, but only if someone is listening
                        if (target.hasSubscriptionsForEvent(arrayChangeEventName)) {
                            var changes = getChanges(previousContents, currentContents);
                        }

                        // Eliminate references to the old, removed items, so they can be GCed
                        previousContents = currentContents;
                        cachedDiff = null;
                        pendingNotifications = 0;

                        if (changes && changes.length) {
                            target['notifySubscribers'](changes, arrayChangeEventName);
                        }
                    });
                }

                function getChanges(previousContents, currentContents) {
                    // We try to re-use cached diffs.
                    // The scenarios where pendingNotifications > 1 are when using rate-limiting or the Deferred Updates
                    // plugin, which without this check would not be compatible with arrayChange notifications. Normally,
                    // notifications are issued immediately so we wouldn't be queueing up more than one.
                    if (!cachedDiff || pendingNotifications > 1) {
                        cachedDiff = ko.utils.compareArrays(previousContents, currentContents, target.compareArrayOptions);
                    }

                    return cachedDiff;
                }

                target.cacheDiffForKnownOperation = function (rawArray, operationName, args) {
                    // Only run if we're currently tracking changes for this observable array
                    // and there aren't any pending deferred notifications.
                    if (!trackingChanges || pendingNotifications) {
                        return;
                    }
                    var diff = [],
                        arrayLength = rawArray.length,
                        argsLength = args.length,
                        offset = 0;

                    function pushDiff(status, value, index) {
                        return diff[diff.length] = { 'status': status, 'value': value, 'index': index };
                    }
                    switch (operationName) {
                        case 'push':
                            offset = arrayLength;
                        case 'unshift':
                            for (var index = 0; index < argsLength; index++) {
                                pushDiff('added', args[index], offset + index);
                            }
                            break;

                        case 'pop':
                            offset = arrayLength - 1;
                        case 'shift':
                            if (arrayLength) {
                                pushDiff('deleted', rawArray[offset], offset);
                            }
                            break;

                        case 'splice':
                            // Negative start index means 'from end of array'. After that we clamp to [0...arrayLength].
                            // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
                            var startIndex = Math.min(Math.max(0, args[0] < 0 ? arrayLength + args[0] : args[0]), arrayLength),
                                endDeleteIndex = argsLength === 1 ? arrayLength : Math.min(startIndex + (args[1] || 0), arrayLength),
                                endAddIndex = startIndex + argsLength - 2,
                                endIndex = Math.max(endDeleteIndex, endAddIndex),
                                additions = [],
                                deletions = [];
                            for (var index = startIndex, argsIndex = 2; index < endIndex; ++index, ++argsIndex) {
                                if (index < endDeleteIndex) deletions.push(pushDiff('deleted', rawArray[index], index));
                                if (index < endAddIndex) additions.push(pushDiff('added', args[argsIndex], index));
                            }
                            ko.utils.findMovesInArrayComparison(deletions, additions);
                            break;

                        default:
                            return;
                    }
                    cachedDiff = diff;
                };
            };
            var computedState = ko.utils.createSymbolOrString('_state');

            ko.computed = ko.dependentObservable = function (evaluatorFunctionOrOptions, evaluatorFunctionTarget, options) {
                if ((typeof evaluatorFunctionOrOptions === 'undefined' ? 'undefined' : _typeof(evaluatorFunctionOrOptions)) === "object") {
                    // Single-parameter syntax - everything is on this "options" param
                    options = evaluatorFunctionOrOptions;
                } else {
                    // Multi-parameter syntax - construct the options according to the params passed
                    options = options || {};
                    if (evaluatorFunctionOrOptions) {
                        options["read"] = evaluatorFunctionOrOptions;
                    }
                }
                if (typeof options["read"] != "function") throw Error("Pass a function that returns the value of the ko.computed");

                var writeFunction = options["write"];
                var state = {
                    latestValue: undefined,
                    isStale: true,
                    isDirty: true,
                    isBeingEvaluated: false,
                    suppressDisposalUntilDisposeWhenReturnsFalse: false,
                    isDisposed: false,
                    pure: false,
                    isSleeping: false,
                    readFunction: options["read"],
                    evaluatorFunctionTarget: evaluatorFunctionTarget || options["owner"],
                    disposeWhenNodeIsRemoved: options["disposeWhenNodeIsRemoved"] || options.disposeWhenNodeIsRemoved || null,
                    disposeWhen: options["disposeWhen"] || options.disposeWhen,
                    domNodeDisposalCallback: null,
                    dependencyTracking: {},
                    dependenciesCount: 0,
                    evaluationTimeoutInstance: null
                };

                function computedObservable() {
                    if (arguments.length > 0) {
                        if (typeof writeFunction === "function") {
                            // Writing a value
                            writeFunction.apply(state.evaluatorFunctionTarget, arguments);
                        } else {
                            throw new Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                        }
                        return this; // Permits chained assignments
                    } else {
                        // Reading the value
                        ko.dependencyDetection.registerDependency(computedObservable);
                        if (state.isDirty || state.isSleeping && computedObservable.haveDependenciesChanged()) {
                            computedObservable.evaluateImmediate();
                        }
                        return state.latestValue;
                    }
                }

                computedObservable[computedState] = state;
                computedObservable.hasWriteFunction = typeof writeFunction === "function";

                // Inherit from 'subscribable'
                if (!ko.utils.canSetPrototype) {
                    // 'subscribable' won't be on the prototype chain unless we put it there directly
                    ko.utils.extend(computedObservable, ko.subscribable['fn']);
                }
                ko.subscribable['fn'].init(computedObservable);

                // Inherit from 'computed'
                ko.utils.setPrototypeOfOrExtend(computedObservable, computedFn);

                if (options['pure']) {
                    state.pure = true;
                    state.isSleeping = true; // Starts off sleeping; will awake on the first subscription
                    ko.utils.extend(computedObservable, pureComputedOverrides);
                } else if (options['deferEvaluation']) {
                    ko.utils.extend(computedObservable, deferEvaluationOverrides);
                }

                if (ko.options['deferUpdates']) {
                    ko.extenders['deferred'](computedObservable, true);
                }

                if (DEBUG) {
                    // #1731 - Aid debugging by exposing the computed's options
                    computedObservable["_options"] = options;
                }

                if (state.disposeWhenNodeIsRemoved) {
                    // Since this computed is associated with a DOM node, and we don't want to dispose the computed
                    // until the DOM node is *removed* from the document (as opposed to never having been in the document),
                    // we'll prevent disposal until "disposeWhen" first returns false.
                    state.suppressDisposalUntilDisposeWhenReturnsFalse = true;

                    // disposeWhenNodeIsRemoved: true can be used to opt into the "only dispose after first false result"
                    // behaviour even if there's no specific node to watch. In that case, clear the option so we don't try
                    // to watch for a non-node's disposal. This technique is intended for KO's internal use only and shouldn't
                    // be documented or used by application code, as it's likely to change in a future version of KO.
                    if (!state.disposeWhenNodeIsRemoved.nodeType) {
                        state.disposeWhenNodeIsRemoved = null;
                    }
                }

                // Evaluate, unless sleeping or deferEvaluation is true
                if (!state.isSleeping && !options['deferEvaluation']) {
                    computedObservable.evaluateImmediate();
                }

                // Attach a DOM node disposal callback so that the computed will be proactively disposed as soon as the node is
                // removed using ko.removeNode. But skip if isActive is false (there will never be any dependencies to dispose).
                if (state.disposeWhenNodeIsRemoved && computedObservable.isActive()) {
                    ko.utils.domNodeDisposal.addDisposeCallback(state.disposeWhenNodeIsRemoved, state.domNodeDisposalCallback = function () {
                        computedObservable.dispose();
                    });
                }

                return computedObservable;
            };

            // Utility function that disposes a given dependencyTracking entry
            function computedDisposeDependencyCallback(id, entryToDispose) {
                if (entryToDispose !== null && entryToDispose.dispose) {
                    entryToDispose.dispose();
                }
            }

            // This function gets called each time a dependency is detected while evaluating a computed.
            // It's factored out as a shared function to avoid creating unnecessary function instances during evaluation.
            function computedBeginDependencyDetectionCallback(subscribable, id) {
                var computedObservable = this.computedObservable,
                    state = computedObservable[computedState];
                if (!state.isDisposed) {
                    if (this.disposalCount && this.disposalCandidates[id]) {
                        // Don't want to dispose this subscription, as it's still being used
                        computedObservable.addDependencyTracking(id, subscribable, this.disposalCandidates[id]);
                        this.disposalCandidates[id] = null; // No need to actually delete the property - disposalCandidates is a transient object anyway
                        --this.disposalCount;
                    } else if (!state.dependencyTracking[id]) {
                        // Brand new subscription - add it
                        computedObservable.addDependencyTracking(id, subscribable, state.isSleeping ? { _target: subscribable } : computedObservable.subscribeToDependency(subscribable));
                    }
                    // If the observable we've accessed has a pending notification, ensure we get notified of the actual final value (bypass equality checks)
                    if (subscribable._notificationIsPending) {
                        subscribable._notifyNextChangeIfValueIsDifferent();
                    }
                }
            }

            var computedFn = {
                "equalityComparer": valuesArePrimitiveAndEqual,
                getDependenciesCount: function getDependenciesCount() {
                    return this[computedState].dependenciesCount;
                },
                addDependencyTracking: function addDependencyTracking(id, target, trackingObj) {
                    if (this[computedState].pure && target === this) {
                        throw Error("A 'pure' computed must not be called recursively");
                    }

                    this[computedState].dependencyTracking[id] = trackingObj;
                    trackingObj._order = this[computedState].dependenciesCount++;
                    trackingObj._version = target.getVersion();
                },
                haveDependenciesChanged: function haveDependenciesChanged() {
                    var id,
                        dependency,
                        dependencyTracking = this[computedState].dependencyTracking;
                    for (id in dependencyTracking) {
                        if (dependencyTracking.hasOwnProperty(id)) {
                            dependency = dependencyTracking[id];
                            if (this._evalDelayed && dependency._target._notificationIsPending || dependency._target.hasChanged(dependency._version)) {
                                return true;
                            }
                        }
                    }
                },
                markDirty: function markDirty() {
                    // Process "dirty" events if we can handle delayed notifications
                    if (this._evalDelayed && !this[computedState].isBeingEvaluated) {
                        this._evalDelayed(false /*isChange*/);
                    }
                },
                isActive: function isActive() {
                    var state = this[computedState];
                    return state.isDirty || state.dependenciesCount > 0;
                },
                respondToChange: function respondToChange() {
                    // Ignore "change" events if we've already scheduled a delayed notification
                    if (!this._notificationIsPending) {
                        this.evaluatePossiblyAsync();
                    } else if (this[computedState].isDirty) {
                        this[computedState].isStale = true;
                    }
                },
                subscribeToDependency: function subscribeToDependency(target) {
                    if (target._deferUpdates && !this[computedState].disposeWhenNodeIsRemoved) {
                        var dirtySub = target.subscribe(this.markDirty, this, 'dirty'),
                            changeSub = target.subscribe(this.respondToChange, this);
                        return {
                            _target: target,
                            dispose: function dispose() {
                                dirtySub.dispose();
                                changeSub.dispose();
                            }
                        };
                    } else {
                        return target.subscribe(this.evaluatePossiblyAsync, this);
                    }
                },
                evaluatePossiblyAsync: function evaluatePossiblyAsync() {
                    var computedObservable = this,
                        throttleEvaluationTimeout = computedObservable['throttleEvaluation'];
                    if (throttleEvaluationTimeout && throttleEvaluationTimeout >= 0) {
                        clearTimeout(this[computedState].evaluationTimeoutInstance);
                        this[computedState].evaluationTimeoutInstance = ko.utils.setTimeout(function () {
                            computedObservable.evaluateImmediate(true /*notifyChange*/);
                        }, throttleEvaluationTimeout);
                    } else if (computedObservable._evalDelayed) {
                        computedObservable._evalDelayed(true /*isChange*/);
                    } else {
                        computedObservable.evaluateImmediate(true /*notifyChange*/);
                    }
                },
                evaluateImmediate: function evaluateImmediate(notifyChange) {
                    var computedObservable = this,
                        state = computedObservable[computedState],
                        disposeWhen = state.disposeWhen,
                        changed = false;

                    if (state.isBeingEvaluated) {
                        // If the evaluation of a ko.computed causes side effects, it's possible that it will trigger its own re-evaluation.
                        // This is not desirable (it's hard for a developer to realise a chain of dependencies might cause this, and they almost
                        // certainly didn't intend infinite re-evaluations). So, for predictability, we simply prevent ko.computeds from causing
                        // their own re-evaluation. Further discussion at https://github.com/SteveSanderson/knockout/pull/387
                        return;
                    }

                    // Do not evaluate (and possibly capture new dependencies) if disposed
                    if (state.isDisposed) {
                        return;
                    }

                    if (state.disposeWhenNodeIsRemoved && !ko.utils.domNodeIsAttachedToDocument(state.disposeWhenNodeIsRemoved) || disposeWhen && disposeWhen()) {
                        // See comment above about suppressDisposalUntilDisposeWhenReturnsFalse
                        if (!state.suppressDisposalUntilDisposeWhenReturnsFalse) {
                            computedObservable.dispose();
                            return;
                        }
                    } else {
                        // It just did return false, so we can stop suppressing now
                        state.suppressDisposalUntilDisposeWhenReturnsFalse = false;
                    }

                    state.isBeingEvaluated = true;
                    try {
                        changed = this.evaluateImmediate_CallReadWithDependencyDetection(notifyChange);
                    } finally {
                        state.isBeingEvaluated = false;
                    }

                    if (!state.dependenciesCount) {
                        computedObservable.dispose();
                    }

                    return changed;
                },
                evaluateImmediate_CallReadWithDependencyDetection: function evaluateImmediate_CallReadWithDependencyDetection(notifyChange) {
                    // This function is really just part of the evaluateImmediate logic. You would never call it from anywhere else.
                    // Factoring it out into a separate function means it can be independent of the try/catch block in evaluateImmediate,
                    // which contributes to saving about 40% off the CPU overhead of computed evaluation (on V8 at least).

                    var computedObservable = this,
                        state = computedObservable[computedState],
                        changed = false;

                    // Initially, we assume that none of the subscriptions are still being used (i.e., all are candidates for disposal).
                    // Then, during evaluation, we cross off any that are in fact still being used.
                    var isInitial = state.pure ? undefined : !state.dependenciesCount,
                        // If we're evaluating when there are no previous dependencies, it must be the first time
                    dependencyDetectionContext = {
                        computedObservable: computedObservable,
                        disposalCandidates: state.dependencyTracking,
                        disposalCount: state.dependenciesCount
                    };

                    ko.dependencyDetection.begin({
                        callbackTarget: dependencyDetectionContext,
                        callback: computedBeginDependencyDetectionCallback,
                        computed: computedObservable,
                        isInitial: isInitial
                    });

                    state.dependencyTracking = {};
                    state.dependenciesCount = 0;

                    var newValue = this.evaluateImmediate_CallReadThenEndDependencyDetection(state, dependencyDetectionContext);

                    if (computedObservable.isDifferent(state.latestValue, newValue)) {
                        if (!state.isSleeping) {
                            computedObservable["notifySubscribers"](state.latestValue, "beforeChange");
                        }

                        state.latestValue = newValue;
                        if (DEBUG) computedObservable._latestValue = newValue;

                        if (state.isSleeping) {
                            computedObservable.updateVersion();
                        } else if (notifyChange) {
                            computedObservable["notifySubscribers"](state.latestValue);
                        }

                        changed = true;
                    }

                    if (isInitial) {
                        computedObservable["notifySubscribers"](state.latestValue, "awake");
                    }

                    return changed;
                },
                evaluateImmediate_CallReadThenEndDependencyDetection: function evaluateImmediate_CallReadThenEndDependencyDetection(state, dependencyDetectionContext) {
                    // This function is really part of the evaluateImmediate_CallReadWithDependencyDetection logic.
                    // You'd never call it from anywhere else. Factoring it out means that evaluateImmediate_CallReadWithDependencyDetection
                    // can be independent of try/finally blocks, which contributes to saving about 40% off the CPU
                    // overhead of computed evaluation (on V8 at least).

                    try {
                        var readFunction = state.readFunction;
                        return state.evaluatorFunctionTarget ? readFunction.call(state.evaluatorFunctionTarget) : readFunction();
                    } finally {
                        ko.dependencyDetection.end();

                        // For each subscription no longer being used, remove it from the active subscriptions list and dispose it
                        if (dependencyDetectionContext.disposalCount && !state.isSleeping) {
                            ko.utils.objectForEach(dependencyDetectionContext.disposalCandidates, computedDisposeDependencyCallback);
                        }

                        state.isStale = state.isDirty = false;
                    }
                },
                peek: function peek(evaluate) {
                    // By default, peek won't re-evaluate, except while the computed is sleeping or to get the initial value when "deferEvaluation" is set.
                    // Pass in true to evaluate if needed.
                    var state = this[computedState];
                    if (state.isDirty && (evaluate || !state.dependenciesCount) || state.isSleeping && this.haveDependenciesChanged()) {
                        this.evaluateImmediate();
                    }
                    return state.latestValue;
                },
                limit: function limit(limitFunction) {
                    // Override the limit function with one that delays evaluation as well
                    ko.subscribable['fn'].limit.call(this, limitFunction);
                    this._evalIfChanged = function () {
                        if (this[computedState].isStale) {
                            this.evaluateImmediate();
                        } else {
                            this[computedState].isDirty = false;
                        }
                        return this[computedState].latestValue;
                    };
                    this._evalDelayed = function (isChange) {
                        this._limitBeforeChange(this[computedState].latestValue);

                        // Mark as dirty
                        this[computedState].isDirty = true;
                        if (isChange) {
                            this[computedState].isStale = true;
                        }

                        // Pass the observable to the "limit" code, which will evaluate it when
                        // it's time to do the notification.
                        this._limitChange(this);
                    };
                },
                dispose: function dispose() {
                    var state = this[computedState];
                    if (!state.isSleeping && state.dependencyTracking) {
                        ko.utils.objectForEach(state.dependencyTracking, function (id, dependency) {
                            if (dependency.dispose) dependency.dispose();
                        });
                    }
                    if (state.disposeWhenNodeIsRemoved && state.domNodeDisposalCallback) {
                        ko.utils.domNodeDisposal.removeDisposeCallback(state.disposeWhenNodeIsRemoved, state.domNodeDisposalCallback);
                    }
                    state.dependencyTracking = null;
                    state.dependenciesCount = 0;
                    state.isDisposed = true;
                    state.isStale = false;
                    state.isDirty = false;
                    state.isSleeping = false;
                    state.disposeWhenNodeIsRemoved = null;
                }
            };

            var pureComputedOverrides = {
                beforeSubscriptionAdd: function beforeSubscriptionAdd(event) {
                    // If asleep, wake up the computed by subscribing to any dependencies.
                    var computedObservable = this,
                        state = computedObservable[computedState];
                    if (!state.isDisposed && state.isSleeping && event == 'change') {
                        state.isSleeping = false;
                        if (state.isStale || computedObservable.haveDependenciesChanged()) {
                            state.dependencyTracking = null;
                            state.dependenciesCount = 0;
                            if (computedObservable.evaluateImmediate()) {
                                computedObservable.updateVersion();
                            }
                        } else {
                            // First put the dependencies in order
                            var dependeciesOrder = [];
                            ko.utils.objectForEach(state.dependencyTracking, function (id, dependency) {
                                dependeciesOrder[dependency._order] = id;
                            });
                            // Next, subscribe to each one
                            ko.utils.arrayForEach(dependeciesOrder, function (id, order) {
                                var dependency = state.dependencyTracking[id],
                                    subscription = computedObservable.subscribeToDependency(dependency._target);
                                subscription._order = order;
                                subscription._version = dependency._version;
                                state.dependencyTracking[id] = subscription;
                            });
                        }
                        if (!state.isDisposed) {
                            // test since evaluating could trigger disposal
                            computedObservable["notifySubscribers"](state.latestValue, "awake");
                        }
                    }
                },
                afterSubscriptionRemove: function afterSubscriptionRemove(event) {
                    var state = this[computedState];
                    if (!state.isDisposed && event == 'change' && !this.hasSubscriptionsForEvent('change')) {
                        ko.utils.objectForEach(state.dependencyTracking, function (id, dependency) {
                            if (dependency.dispose) {
                                state.dependencyTracking[id] = {
                                    _target: dependency._target,
                                    _order: dependency._order,
                                    _version: dependency._version
                                };
                                dependency.dispose();
                            }
                        });
                        state.isSleeping = true;
                        this["notifySubscribers"](undefined, "asleep");
                    }
                },
                getVersion: function getVersion() {
                    // Because a pure computed is not automatically updated while it is sleeping, we can't
                    // simply return the version number. Instead, we check if any of the dependencies have
                    // changed and conditionally re-evaluate the computed observable.
                    var state = this[computedState];
                    if (state.isSleeping && (state.isStale || this.haveDependenciesChanged())) {
                        this.evaluateImmediate();
                    }
                    return ko.subscribable['fn'].getVersion.call(this);
                }
            };

            var deferEvaluationOverrides = {
                beforeSubscriptionAdd: function beforeSubscriptionAdd(event) {
                    // This will force a computed with deferEvaluation to evaluate when the first subscription is registered.
                    if (event == 'change' || event == 'beforeChange') {
                        this.peek();
                    }
                }
            };

            // Note that for browsers that don't support proto assignment, the
            // inheritance chain is created manually in the ko.computed constructor
            if (ko.utils.canSetPrototype) {
                ko.utils.setPrototypeOf(computedFn, ko.subscribable['fn']);
            }

            // Set the proto chain values for ko.hasPrototype
            var protoProp = ko.observable.protoProperty; // == "__ko_proto__"
            ko.computed[protoProp] = ko.observable;
            computedFn[protoProp] = ko.computed;

            ko.isComputed = function (instance) {
                return ko.hasPrototype(instance, ko.computed);
            };

            ko.isPureComputed = function (instance) {
                return ko.hasPrototype(instance, ko.computed) && instance[computedState] && instance[computedState].pure;
            };

            ko.exportSymbol('computed', ko.computed);
            ko.exportSymbol('dependentObservable', ko.computed); // export ko.dependentObservable for backwards compatibility (1.x)
            ko.exportSymbol('isComputed', ko.isComputed);
            ko.exportSymbol('isPureComputed', ko.isPureComputed);
            ko.exportSymbol('computed.fn', computedFn);
            ko.exportProperty(computedFn, 'peek', computedFn.peek);
            ko.exportProperty(computedFn, 'dispose', computedFn.dispose);
            ko.exportProperty(computedFn, 'isActive', computedFn.isActive);
            ko.exportProperty(computedFn, 'getDependenciesCount', computedFn.getDependenciesCount);

            ko.pureComputed = function (evaluatorFunctionOrOptions, evaluatorFunctionTarget) {
                if (typeof evaluatorFunctionOrOptions === 'function') {
                    return ko.computed(evaluatorFunctionOrOptions, evaluatorFunctionTarget, { 'pure': true });
                } else {
                    evaluatorFunctionOrOptions = ko.utils.extend({}, evaluatorFunctionOrOptions); // make a copy of the parameter object
                    evaluatorFunctionOrOptions['pure'] = true;
                    return ko.computed(evaluatorFunctionOrOptions, evaluatorFunctionTarget);
                }
            };
            ko.exportSymbol('pureComputed', ko.pureComputed);

            (function () {
                var maxNestedObservableDepth = 10; // Escape the (unlikely) pathalogical case where an observable's current value is itself (or similar reference cycle)

                ko.toJS = function (rootObject) {
                    if (arguments.length == 0) throw new Error("When calling ko.toJS, pass the object you want to convert.");

                    // We just unwrap everything at every level in the object graph
                    return mapJsObjectGraph(rootObject, function (valueToMap) {
                        // Loop because an observable's value might in turn be another observable wrapper
                        for (var i = 0; ko.isObservable(valueToMap) && i < maxNestedObservableDepth; i++) {
                            valueToMap = valueToMap();
                        }return valueToMap;
                    });
                };

                ko.toJSON = function (rootObject, replacer, space) {
                    // replacer and space are optional
                    var plainJavaScriptObject = ko.toJS(rootObject);
                    return ko.utils.stringifyJson(plainJavaScriptObject, replacer, space);
                };

                function mapJsObjectGraph(rootObject, mapInputCallback, visitedObjects) {
                    visitedObjects = visitedObjects || new objectLookup();

                    rootObject = mapInputCallback(rootObject);
                    var canHaveProperties = (typeof rootObject === 'undefined' ? 'undefined' : _typeof(rootObject)) == "object" && rootObject !== null && rootObject !== undefined && !(rootObject instanceof RegExp) && !(rootObject instanceof Date) && !(rootObject instanceof String) && !(rootObject instanceof Number) && !(rootObject instanceof Boolean);
                    if (!canHaveProperties) return rootObject;

                    var outputProperties = rootObject instanceof Array ? [] : {};
                    visitedObjects.save(rootObject, outputProperties);

                    visitPropertiesOrArrayEntries(rootObject, function (indexer) {
                        var propertyValue = mapInputCallback(rootObject[indexer]);

                        switch (typeof propertyValue === 'undefined' ? 'undefined' : _typeof(propertyValue)) {
                            case "boolean":
                            case "number":
                            case "string":
                            case "function":
                                outputProperties[indexer] = propertyValue;
                                break;
                            case "object":
                            case "undefined":
                                var previouslyMappedValue = visitedObjects.get(propertyValue);
                                outputProperties[indexer] = previouslyMappedValue !== undefined ? previouslyMappedValue : mapJsObjectGraph(propertyValue, mapInputCallback, visitedObjects);
                                break;
                        }
                    });

                    return outputProperties;
                }

                function visitPropertiesOrArrayEntries(rootObject, visitorCallback) {
                    if (rootObject instanceof Array) {
                        for (var i = 0; i < rootObject.length; i++) {
                            visitorCallback(i);
                        } // For arrays, also respect toJSON property for custom mappings (fixes #278)
                        if (typeof rootObject['toJSON'] == 'function') visitorCallback('toJSON');
                    } else {
                        for (var propertyName in rootObject) {
                            visitorCallback(propertyName);
                        }
                    }
                };

                function objectLookup() {
                    this.keys = [];
                    this.values = [];
                };

                objectLookup.prototype = {
                    constructor: objectLookup,
                    save: function save(key, value) {
                        var existingIndex = ko.utils.arrayIndexOf(this.keys, key);
                        if (existingIndex >= 0) this.values[existingIndex] = value;else {
                            this.keys.push(key);
                            this.values.push(value);
                        }
                    },
                    get: function get(key) {
                        var existingIndex = ko.utils.arrayIndexOf(this.keys, key);
                        return existingIndex >= 0 ? this.values[existingIndex] : undefined;
                    }
                };
            })();

            ko.exportSymbol('toJS', ko.toJS);
            ko.exportSymbol('toJSON', ko.toJSON);
            (function () {
                var hasDomDataExpandoProperty = '__ko__hasDomDataOptionValue__';

                // Normally, SELECT elements and their OPTIONs can only take value of type 'string' (because the values
                // are stored on DOM attributes). ko.selectExtensions provides a way for SELECTs/OPTIONs to have values
                // that are arbitrary objects. This is very convenient when implementing things like cascading dropdowns.
                ko.selectExtensions = {
                    readValue: function readValue(element) {
                        switch (ko.utils.tagNameLower(element)) {
                            case 'option':
                                if (element[hasDomDataExpandoProperty] === true) return ko.utils.domData.get(element, ko.bindingHandlers.options.optionValueDomDataKey);
                                return ko.utils.ieVersion <= 7 ? element.getAttributeNode('value') && element.getAttributeNode('value').specified ? element.value : element.text : element.value;
                            case 'select':
                                return element.selectedIndex >= 0 ? ko.selectExtensions.readValue(element.options[element.selectedIndex]) : undefined;
                            default:
                                return element.value;
                        }
                    },

                    writeValue: function writeValue(element, value, allowUnset) {
                        switch (ko.utils.tagNameLower(element)) {
                            case 'option':
                                switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
                                    case "string":
                                        ko.utils.domData.set(element, ko.bindingHandlers.options.optionValueDomDataKey, undefined);
                                        if (hasDomDataExpandoProperty in element) {
                                            // IE <= 8 throws errors if you delete non-existent properties from a DOM node
                                            delete element[hasDomDataExpandoProperty];
                                        }
                                        element.value = value;
                                        break;
                                    default:
                                        // Store arbitrary object using DomData
                                        ko.utils.domData.set(element, ko.bindingHandlers.options.optionValueDomDataKey, value);
                                        element[hasDomDataExpandoProperty] = true;

                                        // Special treatment of numbers is just for backward compatibility. KO 1.2.1 wrote numerical values to element.value.
                                        element.value = typeof value === "number" ? value : "";
                                        break;
                                }
                                break;
                            case 'select':
                                if (value === "" || value === null) // A blank string or null value will select the caption
                                    value = undefined;
                                var selection = -1;
                                for (var i = 0, n = element.options.length, optionValue; i < n; ++i) {
                                    optionValue = ko.selectExtensions.readValue(element.options[i]);
                                    // Include special check to handle selecting a caption with a blank string value
                                    if (optionValue == value || optionValue == "" && value === undefined) {
                                        selection = i;
                                        break;
                                    }
                                }
                                if (allowUnset || selection >= 0 || value === undefined && element.size > 1) {
                                    element.selectedIndex = selection;
                                }
                                break;
                            default:
                                if (value === null || value === undefined) value = "";
                                element.value = value;
                                break;
                        }
                    }
                };
            })();

            ko.exportSymbol('selectExtensions', ko.selectExtensions);
            ko.exportSymbol('selectExtensions.readValue', ko.selectExtensions.readValue);
            ko.exportSymbol('selectExtensions.writeValue', ko.selectExtensions.writeValue);
            ko.expressionRewriting = function () {
                var javaScriptReservedWords = ["true", "false", "null", "undefined"];

                // Matches something that can be assigned to--either an isolated identifier or something ending with a property accessor
                // This is designed to be simple and avoid false negatives, but could produce false positives (e.g., a+b.c).
                // This also will not properly handle nested brackets (e.g., obj1[obj2['prop']]; see #911).
                var javaScriptAssignmentTarget = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;

                function getWriteableValue(expression) {
                    if (ko.utils.arrayIndexOf(javaScriptReservedWords, expression) >= 0) return false;
                    var match = expression.match(javaScriptAssignmentTarget);
                    return match === null ? false : match[1] ? 'Object(' + match[1] + ')' + match[2] : expression;
                }

                // The following regular expressions will be used to split an object-literal string into tokens

                // These two match strings, either with double quotes or single quotes
                var stringDouble = '"(?:[^"\\\\]|\\\\.)*"',
                    stringSingle = "'(?:[^'\\\\]|\\\\.)*'",

                // Matches a regular expression (text enclosed by slashes), but will also match sets of divisions
                // as a regular expression (this is handled by the parsing loop below).
                stringRegexp = '/(?:[^/\\\\]|\\\\.)*/\w*',

                // These characters have special meaning to the parser and must not appear in the middle of a
                // token, except as part of a string.
                specials = ',"\'{}()/:[\\]',

                // Match text (at least two characters) that does not contain any of the above special characters,
                // although some of the special characters are allowed to start it (all but the colon and comma).
                // The text can contain spaces, but leading or trailing spaces are skipped.
                everyThingElse = '[^\\s:,/][^' + specials + ']*[^\\s' + specials + ']',

                // Match any non-space character not matched already. This will match colons and commas, since they're
                // not matched by "everyThingElse", but will also match any other single character that wasn't already
                // matched (for example: in "a: 1, b: 2", each of the non-space characters will be matched by oneNotSpace).
                oneNotSpace = '[^\\s]',


                // Create the actual regular expression by or-ing the above strings. The order is important.
                bindingToken = RegExp(stringDouble + '|' + stringSingle + '|' + stringRegexp + '|' + everyThingElse + '|' + oneNotSpace, 'g'),


                // Match end of previous token to determine whether a slash is a division or regex.
                divisionLookBehind = /[\])"'A-Za-z0-9_$]+$/,
                    keywordRegexLookBehind = { 'in': 1, 'return': 1, 'typeof': 1 };

                function parseObjectLiteral(objectLiteralString) {
                    // Trim leading and trailing spaces from the string
                    var str = ko.utils.stringTrim(objectLiteralString);

                    // Trim braces '{' surrounding the whole object literal
                    if (str.charCodeAt(0) === 123) str = str.slice(1, -1);

                    // Split into tokens
                    var result = [],
                        toks = str.match(bindingToken),
                        key,
                        values = [],
                        depth = 0;

                    if (toks) {
                        // Append a comma so that we don't need a separate code block to deal with the last item
                        toks.push(',');

                        for (var i = 0, tok; tok = toks[i]; ++i) {
                            var c = tok.charCodeAt(0);
                            // A comma signals the end of a key/value pair if depth is zero
                            if (c === 44) {
                                // ","
                                if (depth <= 0) {
                                    result.push(key && values.length ? { key: key, value: values.join('') } : { 'unknown': key || values.join('') });
                                    key = depth = 0;
                                    values = [];
                                    continue;
                                }
                                // Simply skip the colon that separates the name and value
                            } else if (c === 58) {
                                // ":"
                                if (!depth && !key && values.length === 1) {
                                    key = values.pop();
                                    continue;
                                }
                                // A set of slashes is initially matched as a regular expression, but could be division
                            } else if (c === 47 && i && tok.length > 1) {
                                // "/"
                                // Look at the end of the previous token to determine if the slash is actually division
                                var match = toks[i - 1].match(divisionLookBehind);
                                if (match && !keywordRegexLookBehind[match[0]]) {
                                    // The slash is actually a division punctuator; re-parse the remainder of the string (not including the slash)
                                    str = str.substr(str.indexOf(tok) + 1);
                                    toks = str.match(bindingToken);
                                    toks.push(',');
                                    i = -1;
                                    // Continue with just the slash
                                    tok = '/';
                                }
                                // Increment depth for parentheses, braces, and brackets so that interior commas are ignored
                            } else if (c === 40 || c === 123 || c === 91) {
                                // '(', '{', '['
                                ++depth;
                            } else if (c === 41 || c === 125 || c === 93) {
                                // ')', '}', ']'
                                --depth;
                                // The key will be the first token; if it's a string, trim the quotes
                            } else if (!key && !values.length && (c === 34 || c === 39)) {
                                // '"', "'"
                                tok = tok.slice(1, -1);
                            }
                            values.push(tok);
                        }
                    }
                    return result;
                }

                // Two-way bindings include a write function that allow the handler to update the value even if it's not an observable.
                var twoWayBindings = {};

                function preProcessBindings(bindingsStringOrKeyValueArray, bindingOptions) {
                    bindingOptions = bindingOptions || {};

                    function processKeyValue(key, val) {
                        var writableVal;
                        function callPreprocessHook(obj) {
                            return obj && obj['preprocess'] ? val = obj['preprocess'](val, key, processKeyValue) : true;
                        }
                        if (!bindingParams) {
                            if (!callPreprocessHook(ko['getBindingHandler'](key))) return;

                            if (twoWayBindings[key] && (writableVal = getWriteableValue(val))) {
                                // For two-way bindings, provide a write method in case the value
                                // isn't a writable observable.
                                propertyAccessorResultStrings.push("'" + key + "':function(_z){" + writableVal + "=_z}");
                            }
                        }
                        // Values are wrapped in a function so that each value can be accessed independently
                        if (makeValueAccessors) {
                            val = 'function(){return ' + val + ' }';
                        }
                        resultStrings.push("'" + key + "':" + val);
                    }

                    var resultStrings = [],
                        propertyAccessorResultStrings = [],
                        makeValueAccessors = bindingOptions['valueAccessors'],
                        bindingParams = bindingOptions['bindingParams'],
                        keyValueArray = typeof bindingsStringOrKeyValueArray === "string" ? parseObjectLiteral(bindingsStringOrKeyValueArray) : bindingsStringOrKeyValueArray;

                    ko.utils.arrayForEach(keyValueArray, function (keyValue) {
                        processKeyValue(keyValue.key || keyValue['unknown'], keyValue.value);
                    });

                    if (propertyAccessorResultStrings.length) processKeyValue('_ko_property_writers', "{" + propertyAccessorResultStrings.join(",") + " }");

                    return resultStrings.join(",");
                }

                return {
                    bindingRewriteValidators: [],

                    twoWayBindings: twoWayBindings,

                    parseObjectLiteral: parseObjectLiteral,

                    preProcessBindings: preProcessBindings,

                    keyValueArrayContainsKey: function keyValueArrayContainsKey(keyValueArray, key) {
                        for (var i = 0; i < keyValueArray.length; i++) {
                            if (keyValueArray[i]['key'] == key) return true;
                        }return false;
                    },

                    // Internal, private KO utility for updating model properties from within bindings
                    // property:            If the property being updated is (or might be) an observable, pass it here
                    //                      If it turns out to be a writable observable, it will be written to directly
                    // allBindings:         An object with a get method to retrieve bindings in the current execution context.
                    //                      This will be searched for a '_ko_property_writers' property in case you're writing to a non-observable
                    // key:                 The key identifying the property to be written. Example: for { hasFocus: myValue }, write to 'myValue' by specifying the key 'hasFocus'
                    // value:               The value to be written
                    // checkIfDifferent:    If true, and if the property being written is a writable observable, the value will only be written if
                    //                      it is !== existing value on that writable observable
                    writeValueToProperty: function writeValueToProperty(property, allBindings, key, value, checkIfDifferent) {
                        if (!property || !ko.isObservable(property)) {
                            var propWriters = allBindings.get('_ko_property_writers');
                            if (propWriters && propWriters[key]) propWriters[key](value);
                        } else if (ko.isWriteableObservable(property) && (!checkIfDifferent || property.peek() !== value)) {
                            property(value);
                        }
                    }
                };
            }();

            ko.exportSymbol('expressionRewriting', ko.expressionRewriting);
            ko.exportSymbol('expressionRewriting.bindingRewriteValidators', ko.expressionRewriting.bindingRewriteValidators);
            ko.exportSymbol('expressionRewriting.parseObjectLiteral', ko.expressionRewriting.parseObjectLiteral);
            ko.exportSymbol('expressionRewriting.preProcessBindings', ko.expressionRewriting.preProcessBindings);

            // Making bindings explicitly declare themselves as "two way" isn't ideal in the long term (it would be better if
            // all bindings could use an official 'property writer' API without needing to declare that they might). However,
            // since this is not, and has never been, a public API (_ko_property_writers was never documented), it's acceptable
            // as an internal implementation detail in the short term.
            // For those developers who rely on _ko_property_writers in their custom bindings, we expose _twoWayBindings as an
            // undocumented feature that makes it relatively easy to upgrade to KO 3.0. However, this is still not an official
            // public API, and we reserve the right to remove it at any time if we create a real public property writers API.
            ko.exportSymbol('expressionRewriting._twoWayBindings', ko.expressionRewriting.twoWayBindings);

            // For backward compatibility, define the following aliases. (Previously, these function names were misleading because
            // they referred to JSON specifically, even though they actually work with arbitrary JavaScript object literal expressions.)
            ko.exportSymbol('jsonExpressionRewriting', ko.expressionRewriting);
            ko.exportSymbol('jsonExpressionRewriting.insertPropertyAccessorsIntoJson', ko.expressionRewriting.preProcessBindings);
            (function () {
                // "Virtual elements" is an abstraction on top of the usual DOM API which understands the notion that comment nodes
                // may be used to represent hierarchy (in addition to the DOM's natural hierarchy).
                // If you call the DOM-manipulating functions on ko.virtualElements, you will be able to read and write the state
                // of that virtual hierarchy
                //
                // The point of all this is to support containerless templates (e.g., <!-- ko foreach:someCollection -->blah<!-- /ko -->)
                // without having to scatter special cases all over the binding and templating code.

                // IE 9 cannot reliably read the "nodeValue" property of a comment node (see https://github.com/SteveSanderson/knockout/issues/186)
                // but it does give them a nonstandard alternative property called "text" that it can read reliably. Other browsers don't have that property.
                // So, use node.text where available, and node.nodeValue elsewhere
                var commentNodesHaveTextProperty = document && document.createComment("test").text === "<!--test-->";

                var startCommentRegex = commentNodesHaveTextProperty ? /^<!--\s*ko(?:\s+([\s\S]+))?\s*-->$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/;
                var endCommentRegex = commentNodesHaveTextProperty ? /^<!--\s*\/ko\s*-->$/ : /^\s*\/ko\s*$/;
                var htmlTagsWithOptionallyClosingChildren = { 'ul': true, 'ol': true };

                function isStartComment(node) {
                    return node.nodeType == 8 && startCommentRegex.test(commentNodesHaveTextProperty ? node.text : node.nodeValue);
                }

                function isEndComment(node) {
                    return node.nodeType == 8 && endCommentRegex.test(commentNodesHaveTextProperty ? node.text : node.nodeValue);
                }

                function getVirtualChildren(startComment, allowUnbalanced) {
                    var currentNode = startComment;
                    var depth = 1;
                    var children = [];
                    while (currentNode = currentNode.nextSibling) {
                        if (isEndComment(currentNode)) {
                            depth--;
                            if (depth === 0) return children;
                        }

                        children.push(currentNode);

                        if (isStartComment(currentNode)) depth++;
                    }
                    if (!allowUnbalanced) throw new Error("Cannot find closing comment tag to match: " + startComment.nodeValue);
                    return null;
                }

                function getMatchingEndComment(startComment, allowUnbalanced) {
                    var allVirtualChildren = getVirtualChildren(startComment, allowUnbalanced);
                    if (allVirtualChildren) {
                        if (allVirtualChildren.length > 0) return allVirtualChildren[allVirtualChildren.length - 1].nextSibling;
                        return startComment.nextSibling;
                    } else return null; // Must have no matching end comment, and allowUnbalanced is true
                }

                function getUnbalancedChildTags(node) {
                    // e.g., from <div>OK</div><!-- ko blah --><span>Another</span>, returns: <!-- ko blah --><span>Another</span>
                    //       from <div>OK</div><!-- /ko --><!-- /ko -->,             returns: <!-- /ko --><!-- /ko -->
                    var childNode = node.firstChild,
                        captureRemaining = null;
                    if (childNode) {
                        do {
                            if (captureRemaining) // We already hit an unbalanced node and are now just scooping up all subsequent nodes
                                captureRemaining.push(childNode);else if (isStartComment(childNode)) {
                                var matchingEndComment = getMatchingEndComment(childNode, /* allowUnbalanced: */true);
                                if (matchingEndComment) // It's a balanced tag, so skip immediately to the end of this virtual set
                                    childNode = matchingEndComment;else captureRemaining = [childNode]; // It's unbalanced, so start capturing from this point
                            } else if (isEndComment(childNode)) {
                                captureRemaining = [childNode]; // It's unbalanced (if it wasn't, we'd have skipped over it already), so start capturing
                            }
                        } while (childNode = childNode.nextSibling);
                    }
                    return captureRemaining;
                }

                ko.virtualElements = {
                    allowedBindings: {},

                    childNodes: function childNodes(node) {
                        return isStartComment(node) ? getVirtualChildren(node) : node.childNodes;
                    },

                    emptyNode: function emptyNode(node) {
                        if (!isStartComment(node)) ko.utils.emptyDomNode(node);else {
                            var virtualChildren = ko.virtualElements.childNodes(node);
                            for (var i = 0, j = virtualChildren.length; i < j; i++) {
                                ko.removeNode(virtualChildren[i]);
                            }
                        }
                    },

                    setDomNodeChildren: function setDomNodeChildren(node, childNodes) {
                        if (!isStartComment(node)) ko.utils.setDomNodeChildren(node, childNodes);else {
                            ko.virtualElements.emptyNode(node);
                            var endCommentNode = node.nextSibling; // Must be the next sibling, as we just emptied the children
                            for (var i = 0, j = childNodes.length; i < j; i++) {
                                endCommentNode.parentNode.insertBefore(childNodes[i], endCommentNode);
                            }
                        }
                    },

                    prepend: function prepend(containerNode, nodeToPrepend) {
                        if (!isStartComment(containerNode)) {
                            if (containerNode.firstChild) containerNode.insertBefore(nodeToPrepend, containerNode.firstChild);else containerNode.appendChild(nodeToPrepend);
                        } else {
                            // Start comments must always have a parent and at least one following sibling (the end comment)
                            containerNode.parentNode.insertBefore(nodeToPrepend, containerNode.nextSibling);
                        }
                    },

                    insertAfter: function insertAfter(containerNode, nodeToInsert, insertAfterNode) {
                        if (!insertAfterNode) {
                            ko.virtualElements.prepend(containerNode, nodeToInsert);
                        } else if (!isStartComment(containerNode)) {
                            // Insert after insertion point
                            if (insertAfterNode.nextSibling) containerNode.insertBefore(nodeToInsert, insertAfterNode.nextSibling);else containerNode.appendChild(nodeToInsert);
                        } else {
                            // Children of start comments must always have a parent and at least one following sibling (the end comment)
                            containerNode.parentNode.insertBefore(nodeToInsert, insertAfterNode.nextSibling);
                        }
                    },

                    firstChild: function firstChild(node) {
                        if (!isStartComment(node)) return node.firstChild;
                        if (!node.nextSibling || isEndComment(node.nextSibling)) return null;
                        return node.nextSibling;
                    },

                    nextSibling: function nextSibling(node) {
                        if (isStartComment(node)) node = getMatchingEndComment(node);
                        if (node.nextSibling && isEndComment(node.nextSibling)) return null;
                        return node.nextSibling;
                    },

                    hasBindingValue: isStartComment,

                    virtualNodeBindingValue: function virtualNodeBindingValue(node) {
                        var regexMatch = (commentNodesHaveTextProperty ? node.text : node.nodeValue).match(startCommentRegex);
                        return regexMatch ? regexMatch[1] : null;
                    },

                    normaliseVirtualElementDomStructure: function normaliseVirtualElementDomStructure(elementVerified) {
                        // Workaround for https://github.com/SteveSanderson/knockout/issues/155
                        // (IE <= 8 or IE 9 quirks mode parses your HTML weirdly, treating closing </li> tags as if they don't exist, thereby moving comment nodes
                        // that are direct descendants of <ul> into the preceding <li>)
                        if (!htmlTagsWithOptionallyClosingChildren[ko.utils.tagNameLower(elementVerified)]) return;

                        // Scan immediate children to see if they contain unbalanced comment tags. If they do, those comment tags
                        // must be intended to appear *after* that child, so move them there.
                        var childNode = elementVerified.firstChild;
                        if (childNode) {
                            do {
                                if (childNode.nodeType === 1) {
                                    var unbalancedTags = getUnbalancedChildTags(childNode);
                                    if (unbalancedTags) {
                                        // Fix up the DOM by moving the unbalanced tags to where they most likely were intended to be placed - *after* the child
                                        var nodeToInsertBefore = childNode.nextSibling;
                                        for (var i = 0; i < unbalancedTags.length; i++) {
                                            if (nodeToInsertBefore) elementVerified.insertBefore(unbalancedTags[i], nodeToInsertBefore);else elementVerified.appendChild(unbalancedTags[i]);
                                        }
                                    }
                                }
                            } while (childNode = childNode.nextSibling);
                        }
                    }
                };
            })();
            ko.exportSymbol('virtualElements', ko.virtualElements);
            ko.exportSymbol('virtualElements.allowedBindings', ko.virtualElements.allowedBindings);
            ko.exportSymbol('virtualElements.emptyNode', ko.virtualElements.emptyNode);
            //ko.exportSymbol('virtualElements.firstChild', ko.virtualElements.firstChild);     // firstChild is not minified
            ko.exportSymbol('virtualElements.insertAfter', ko.virtualElements.insertAfter);
            //ko.exportSymbol('virtualElements.nextSibling', ko.virtualElements.nextSibling);   // nextSibling is not minified
            ko.exportSymbol('virtualElements.prepend', ko.virtualElements.prepend);
            ko.exportSymbol('virtualElements.setDomNodeChildren', ko.virtualElements.setDomNodeChildren);
            (function () {
                var defaultBindingAttributeName = "data-bind";

                ko.bindingProvider = function () {
                    this.bindingCache = {};
                };

                ko.utils.extend(ko.bindingProvider.prototype, {
                    'nodeHasBindings': function nodeHasBindings(node) {
                        switch (node.nodeType) {
                            case 1:
                                // Element
                                return node.getAttribute(defaultBindingAttributeName) != null || ko.components['getComponentNameForNode'](node);
                            case 8:
                                // Comment node
                                return ko.virtualElements.hasBindingValue(node);
                            default:
                                return false;
                        }
                    },

                    'getBindings': function getBindings(node, bindingContext) {
                        var bindingsString = this['getBindingsString'](node, bindingContext),
                            parsedBindings = bindingsString ? this['parseBindingsString'](bindingsString, bindingContext, node) : null;
                        return ko.components.addBindingsForCustomElement(parsedBindings, node, bindingContext, /* valueAccessors */false);
                    },

                    'getBindingAccessors': function getBindingAccessors(node, bindingContext) {
                        var bindingsString = this['getBindingsString'](node, bindingContext),
                            parsedBindings = bindingsString ? this['parseBindingsString'](bindingsString, bindingContext, node, { 'valueAccessors': true }) : null;
                        return ko.components.addBindingsForCustomElement(parsedBindings, node, bindingContext, /* valueAccessors */true);
                    },

                    // The following function is only used internally by this default provider.
                    // It's not part of the interface definition for a general binding provider.
                    'getBindingsString': function getBindingsString(node, bindingContext) {
                        switch (node.nodeType) {
                            case 1:
                                return node.getAttribute(defaultBindingAttributeName); // Element
                            case 8:
                                return ko.virtualElements.virtualNodeBindingValue(node); // Comment node
                            default:
                                return null;
                        }
                    },

                    // The following function is only used internally by this default provider.
                    // It's not part of the interface definition for a general binding provider.
                    'parseBindingsString': function parseBindingsString(bindingsString, bindingContext, node, options) {
                        try {
                            var bindingFunction = createBindingsStringEvaluatorViaCache(bindingsString, this.bindingCache, options);
                            return bindingFunction(bindingContext, node);
                        } catch (ex) {
                            ex.message = "Unable to parse bindings.\nBindings value: " + bindingsString + "\nMessage: " + ex.message;
                            throw ex;
                        }
                    }
                });

                ko.bindingProvider['instance'] = new ko.bindingProvider();

                function createBindingsStringEvaluatorViaCache(bindingsString, cache, options) {
                    var cacheKey = bindingsString + (options && options['valueAccessors'] || '');
                    return cache[cacheKey] || (cache[cacheKey] = createBindingsStringEvaluator(bindingsString, options));
                }

                function createBindingsStringEvaluator(bindingsString, options) {
                    // Build the source for a function that evaluates "expression"
                    // For each scope variable, add an extra level of "with" nesting
                    // Example result: with(sc1) { with(sc0) { return (expression) } }
                    var rewrittenBindings = ko.expressionRewriting.preProcessBindings(bindingsString, options),
                        functionBody = "with($context){with($data||{}){return{" + rewrittenBindings + "}}}";
                    return new Function("$context", "$element", functionBody);
                }
            })();

            ko.exportSymbol('bindingProvider', ko.bindingProvider);
            (function () {
                ko.bindingHandlers = {};

                // The following element types will not be recursed into during binding.
                var bindingDoesNotRecurseIntoElementTypes = {
                    // Don't want bindings that operate on text nodes to mutate <script> and <textarea> contents,
                    // because it's unexpected and a potential XSS issue.
                    // Also bindings should not operate on <template> elements since this breaks in Internet Explorer
                    // and because such elements' contents are always intended to be bound in a different context
                    // from where they appear in the document.
                    'script': true,
                    'textarea': true,
                    'template': true
                };

                // Use an overridable method for retrieving binding handlers so that a plugins may support dynamically created handlers
                ko['getBindingHandler'] = function (bindingKey) {
                    return ko.bindingHandlers[bindingKey];
                };

                // The ko.bindingContext constructor is only called directly to create the root context. For child
                // contexts, use bindingContext.createChildContext or bindingContext.extend.
                ko.bindingContext = function (dataItemOrAccessor, parentContext, dataItemAlias, extendCallback, options) {

                    // The binding context object includes static properties for the current, parent, and root view models.
                    // If a view model is actually stored in an observable, the corresponding binding context object, and
                    // any child contexts, must be updated when the view model is changed.
                    function updateContext() {
                        // Most of the time, the context will directly get a view model object, but if a function is given,
                        // we call the function to retrieve the view model. If the function accesses any observables or returns
                        // an observable, the dependency is tracked, and those observables can later cause the binding
                        // context to be updated.
                        var dataItemOrObservable = isFunc ? dataItemOrAccessor() : dataItemOrAccessor,
                            dataItem = ko.utils.unwrapObservable(dataItemOrObservable);

                        if (parentContext) {
                            // When a "parent" context is given, register a dependency on the parent context. Thus whenever the
                            // parent context is updated, this context will also be updated.
                            if (parentContext._subscribable) parentContext._subscribable();

                            // Copy $root and any custom properties from the parent context
                            ko.utils.extend(self, parentContext);

                            // Because the above copy overwrites our own properties, we need to reset them.
                            self._subscribable = subscribable;
                        } else {
                            self['$parents'] = [];
                            self['$root'] = dataItem;

                            // Export 'ko' in the binding context so it will be available in bindings and templates
                            // even if 'ko' isn't exported as a global, such as when using an AMD loader.
                            // See https://github.com/SteveSanderson/knockout/issues/490
                            self['ko'] = ko;
                        }
                        self['$rawData'] = dataItemOrObservable;
                        self['$data'] = dataItem;
                        if (dataItemAlias) self[dataItemAlias] = dataItem;

                        // The extendCallback function is provided when creating a child context or extending a context.
                        // It handles the specific actions needed to finish setting up the binding context. Actions in this
                        // function could also add dependencies to this binding context.
                        if (extendCallback) extendCallback(self, parentContext, dataItem);

                        return self['$data'];
                    }
                    function disposeWhen() {
                        return nodes && !ko.utils.anyDomNodeIsAttachedToDocument(nodes);
                    }

                    var self = this,
                        isFunc = typeof dataItemOrAccessor == "function" && !ko.isObservable(dataItemOrAccessor),
                        nodes,
                        subscribable;

                    if (options && options['exportDependencies']) {
                        // The "exportDependencies" option means that the calling code will track any dependencies and re-create
                        // the binding context when they change.
                        updateContext();
                    } else {
                        subscribable = ko.dependentObservable(updateContext, null, { disposeWhen: disposeWhen, disposeWhenNodeIsRemoved: true });

                        // At this point, the binding context has been initialized, and the "subscribable" computed observable is
                        // subscribed to any observables that were accessed in the process. If there is nothing to track, the
                        // computed will be inactive, and we can safely throw it away. If it's active, the computed is stored in
                        // the context object.
                        if (subscribable.isActive()) {
                            self._subscribable = subscribable;

                            // Always notify because even if the model ($data) hasn't changed, other context properties might have changed
                            subscribable['equalityComparer'] = null;

                            // We need to be able to dispose of this computed observable when it's no longer needed. This would be
                            // easy if we had a single node to watch, but binding contexts can be used by many different nodes, and
                            // we cannot assume that those nodes have any relation to each other. So instead we track any node that
                            // the context is attached to, and dispose the computed when all of those nodes have been cleaned.

                            // Add properties to *subscribable* instead of *self* because any properties added to *self* may be overwritten on updates
                            nodes = [];
                            subscribable._addNode = function (node) {
                                nodes.push(node);
                                ko.utils.domNodeDisposal.addDisposeCallback(node, function (node) {
                                    ko.utils.arrayRemoveItem(nodes, node);
                                    if (!nodes.length) {
                                        subscribable.dispose();
                                        self._subscribable = subscribable = undefined;
                                    }
                                });
                            };
                        }
                    }
                };

                // Extend the binding context hierarchy with a new view model object. If the parent context is watching
                // any observables, the new child context will automatically get a dependency on the parent context.
                // But this does not mean that the $data value of the child context will also get updated. If the child
                // view model also depends on the parent view model, you must provide a function that returns the correct
                // view model on each update.
                ko.bindingContext.prototype['createChildContext'] = function (dataItemOrAccessor, dataItemAlias, extendCallback, options) {
                    return new ko.bindingContext(dataItemOrAccessor, this, dataItemAlias, function (self, parentContext) {
                        // Extend the context hierarchy by setting the appropriate pointers
                        self['$parentContext'] = parentContext;
                        self['$parent'] = parentContext['$data'];
                        self['$parents'] = (parentContext['$parents'] || []).slice(0);
                        self['$parents'].unshift(self['$parent']);
                        if (extendCallback) extendCallback(self);
                    }, options);
                };

                // Extend the binding context with new custom properties. This doesn't change the context hierarchy.
                // Similarly to "child" contexts, provide a function here to make sure that the correct values are set
                // when an observable view model is updated.
                ko.bindingContext.prototype['extend'] = function (properties) {
                    // If the parent context references an observable view model, "_subscribable" will always be the
                    // latest view model object. If not, "_subscribable" isn't set, and we can use the static "$data" value.
                    return new ko.bindingContext(this._subscribable || this['$data'], this, null, function (self, parentContext) {
                        // This "child" context doesn't directly track a parent observable view model,
                        // so we need to manually set the $rawData value to match the parent.
                        self['$rawData'] = parentContext['$rawData'];
                        ko.utils.extend(self, typeof properties == "function" ? properties() : properties);
                    });
                };

                ko.bindingContext.prototype.createStaticChildContext = function (dataItemOrAccessor, dataItemAlias) {
                    return this['createChildContext'](dataItemOrAccessor, dataItemAlias, null, { "exportDependencies": true });
                };

                // Returns the valueAccesor function for a binding value
                function makeValueAccessor(value) {
                    return function () {
                        return value;
                    };
                }

                // Returns the value of a valueAccessor function
                function evaluateValueAccessor(valueAccessor) {
                    return valueAccessor();
                }

                // Given a function that returns bindings, create and return a new object that contains
                // binding value-accessors functions. Each accessor function calls the original function
                // so that it always gets the latest value and all dependencies are captured. This is used
                // by ko.applyBindingsToNode and getBindingsAndMakeAccessors.
                function makeAccessorsFromFunction(callback) {
                    return ko.utils.objectMap(ko.dependencyDetection.ignore(callback), function (value, key) {
                        return function () {
                            return callback()[key];
                        };
                    });
                }

                // Given a bindings function or object, create and return a new object that contains
                // binding value-accessors functions. This is used by ko.applyBindingsToNode.
                function makeBindingAccessors(bindings, context, node) {
                    if (typeof bindings === 'function') {
                        return makeAccessorsFromFunction(bindings.bind(null, context, node));
                    } else {
                        return ko.utils.objectMap(bindings, makeValueAccessor);
                    }
                }

                // This function is used if the binding provider doesn't include a getBindingAccessors function.
                // It must be called with 'this' set to the provider instance.
                function getBindingsAndMakeAccessors(node, context) {
                    return makeAccessorsFromFunction(this['getBindings'].bind(this, node, context));
                }

                function validateThatBindingIsAllowedForVirtualElements(bindingName) {
                    var validator = ko.virtualElements.allowedBindings[bindingName];
                    if (!validator) throw new Error("The binding '" + bindingName + "' cannot be used with virtual elements");
                }

                function applyBindingsToDescendantsInternal(bindingContext, elementOrVirtualElement, bindingContextsMayDifferFromDomParentElement) {
                    var currentChild,
                        nextInQueue = ko.virtualElements.firstChild(elementOrVirtualElement),
                        provider = ko.bindingProvider['instance'],
                        preprocessNode = provider['preprocessNode'];

                    // Preprocessing allows a binding provider to mutate a node before bindings are applied to it. For example it's
                    // possible to insert new siblings after it, and/or replace the node with a different one. This can be used to
                    // implement custom binding syntaxes, such as {{ value }} for string interpolation, or custom element types that
                    // trigger insertion of <template> contents at that point in the document.
                    if (preprocessNode) {
                        while (currentChild = nextInQueue) {
                            nextInQueue = ko.virtualElements.nextSibling(currentChild);
                            preprocessNode.call(provider, currentChild);
                        }
                        // Reset nextInQueue for the next loop
                        nextInQueue = ko.virtualElements.firstChild(elementOrVirtualElement);
                    }

                    while (currentChild = nextInQueue) {
                        // Keep a record of the next child *before* applying bindings, in case the binding removes the current child from its position
                        nextInQueue = ko.virtualElements.nextSibling(currentChild);
                        applyBindingsToNodeAndDescendantsInternal(bindingContext, currentChild, bindingContextsMayDifferFromDomParentElement);
                    }
                }

                function applyBindingsToNodeAndDescendantsInternal(bindingContext, nodeVerified, bindingContextMayDifferFromDomParentElement) {
                    var shouldBindDescendants = true;

                    // Perf optimisation: Apply bindings only if...
                    // (1) We need to store the binding context on this node (because it may differ from the DOM parent node's binding context)
                    //     Note that we can't store binding contexts on non-elements (e.g., text nodes), as IE doesn't allow expando properties for those
                    // (2) It might have bindings (e.g., it has a data-bind attribute, or it's a marker for a containerless template)
                    var isElement = nodeVerified.nodeType === 1;
                    if (isElement) // Workaround IE <= 8 HTML parsing weirdness
                        ko.virtualElements.normaliseVirtualElementDomStructure(nodeVerified);

                    var shouldApplyBindings = isElement && bindingContextMayDifferFromDomParentElement || // Case (1)
                    ko.bindingProvider['instance']['nodeHasBindings'](nodeVerified); // Case (2)
                    if (shouldApplyBindings) shouldBindDescendants = applyBindingsToNodeInternal(nodeVerified, null, bindingContext, bindingContextMayDifferFromDomParentElement)['shouldBindDescendants'];

                    if (shouldBindDescendants && !bindingDoesNotRecurseIntoElementTypes[ko.utils.tagNameLower(nodeVerified)]) {
                        // We're recursing automatically into (real or virtual) child nodes without changing binding contexts. So,
                        //  * For children of a *real* element, the binding context is certainly the same as on their DOM .parentNode,
                        //    hence bindingContextsMayDifferFromDomParentElement is false
                        //  * For children of a *virtual* element, we can't be sure. Evaluating .parentNode on those children may
                        //    skip over any number of intermediate virtual elements, any of which might define a custom binding context,
                        //    hence bindingContextsMayDifferFromDomParentElement is true
                        applyBindingsToDescendantsInternal(bindingContext, nodeVerified, /* bindingContextsMayDifferFromDomParentElement: */!isElement);
                    }
                }

                var boundElementDomDataKey = ko.utils.domData.nextKey();

                function topologicalSortBindings(bindings) {
                    // Depth-first sort
                    var result = [],
                        // The list of key/handler pairs that we will return
                    bindingsConsidered = {},
                        // A temporary record of which bindings are already in 'result'
                    cyclicDependencyStack = []; // Keeps track of a depth-search so that, if there's a cycle, we know which bindings caused it
                    ko.utils.objectForEach(bindings, function pushBinding(bindingKey) {
                        if (!bindingsConsidered[bindingKey]) {
                            var binding = ko['getBindingHandler'](bindingKey);
                            if (binding) {
                                // First add dependencies (if any) of the current binding
                                if (binding['after']) {
                                    cyclicDependencyStack.push(bindingKey);
                                    ko.utils.arrayForEach(binding['after'], function (bindingDependencyKey) {
                                        if (bindings[bindingDependencyKey]) {
                                            if (ko.utils.arrayIndexOf(cyclicDependencyStack, bindingDependencyKey) !== -1) {
                                                throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + cyclicDependencyStack.join(", "));
                                            } else {
                                                pushBinding(bindingDependencyKey);
                                            }
                                        }
                                    });
                                    cyclicDependencyStack.length--;
                                }
                                // Next add the current binding
                                result.push({ key: bindingKey, handler: binding });
                            }
                            bindingsConsidered[bindingKey] = true;
                        }
                    });

                    return result;
                }

                function applyBindingsToNodeInternal(node, sourceBindings, bindingContext, bindingContextMayDifferFromDomParentElement) {
                    // Prevent multiple applyBindings calls for the same node, except when a binding value is specified
                    var alreadyBound = ko.utils.domData.get(node, boundElementDomDataKey);
                    if (!sourceBindings) {
                        if (alreadyBound) {
                            throw Error("You cannot apply bindings multiple times to the same element.");
                        }
                        ko.utils.domData.set(node, boundElementDomDataKey, true);
                    }

                    // Optimization: Don't store the binding context on this node if it's definitely the same as on node.parentNode, because
                    // we can easily recover it just by scanning up the node's ancestors in the DOM
                    // (note: here, parent node means "real DOM parent" not "virtual parent", as there's no O(1) way to find the virtual parent)
                    if (!alreadyBound && bindingContextMayDifferFromDomParentElement) ko.storedBindingContextForNode(node, bindingContext);

                    // Use bindings if given, otherwise fall back on asking the bindings provider to give us some bindings
                    var bindings;
                    if (sourceBindings && typeof sourceBindings !== 'function') {
                        bindings = sourceBindings;
                    } else {
                        var provider = ko.bindingProvider['instance'],
                            getBindings = provider['getBindingAccessors'] || getBindingsAndMakeAccessors;

                        // Get the binding from the provider within a computed observable so that we can update the bindings whenever
                        // the binding context is updated or if the binding provider accesses observables.
                        var bindingsUpdater = ko.dependentObservable(function () {
                            bindings = sourceBindings ? sourceBindings(bindingContext, node) : getBindings.call(provider, node, bindingContext);
                            // Register a dependency on the binding context to support observable view models.
                            if (bindings && bindingContext._subscribable) bindingContext._subscribable();
                            return bindings;
                        }, null, { disposeWhenNodeIsRemoved: node });

                        if (!bindings || !bindingsUpdater.isActive()) bindingsUpdater = null;
                    }

                    var bindingHandlerThatControlsDescendantBindings;
                    if (bindings) {

                        // Use of allBindings as a function is maintained for backwards compatibility, but its use is deprecated
                        var allBindings = function allBindings() {
                            return ko.utils.objectMap(bindingsUpdater ? bindingsUpdater() : bindings, evaluateValueAccessor);
                        };
                        // The following is the 3.x allBindings API


                        // Return the value accessor for a given binding. When bindings are static (won't be updated because of a binding
                        // context update), just return the value accessor from the binding. Otherwise, return a function that always gets
                        // the latest binding value and registers a dependency on the binding updater.
                        var getValueAccessor = bindingsUpdater ? function (bindingKey) {
                            return function () {
                                return evaluateValueAccessor(bindingsUpdater()[bindingKey]);
                            };
                        } : function (bindingKey) {
                            return bindings[bindingKey];
                        };allBindings['get'] = function (key) {
                            return bindings[key] && evaluateValueAccessor(getValueAccessor(key));
                        };
                        allBindings['has'] = function (key) {
                            return key in bindings;
                        };

                        // First put the bindings into the right order
                        var orderedBindings = topologicalSortBindings(bindings);

                        // Go through the sorted bindings, calling init and update for each
                        ko.utils.arrayForEach(orderedBindings, function (bindingKeyAndHandler) {
                            // Note that topologicalSortBindings has already filtered out any nonexistent binding handlers,
                            // so bindingKeyAndHandler.handler will always be nonnull.
                            var handlerInitFn = bindingKeyAndHandler.handler["init"],
                                handlerUpdateFn = bindingKeyAndHandler.handler["update"],
                                bindingKey = bindingKeyAndHandler.key;

                            if (node.nodeType === 8) {
                                validateThatBindingIsAllowedForVirtualElements(bindingKey);
                            }

                            try {
                                // Run init, ignoring any dependencies
                                if (typeof handlerInitFn == "function") {
                                    ko.dependencyDetection.ignore(function () {
                                        var initResult = handlerInitFn(node, getValueAccessor(bindingKey), allBindings, bindingContext['$data'], bindingContext);

                                        // If this binding handler claims to control descendant bindings, make a note of this
                                        if (initResult && initResult['controlsDescendantBindings']) {
                                            if (bindingHandlerThatControlsDescendantBindings !== undefined) throw new Error("Multiple bindings (" + bindingHandlerThatControlsDescendantBindings + " and " + bindingKey + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                            bindingHandlerThatControlsDescendantBindings = bindingKey;
                                        }
                                    });
                                }

                                // Run update in its own computed wrapper
                                if (typeof handlerUpdateFn == "function") {
                                    ko.dependentObservable(function () {
                                        handlerUpdateFn(node, getValueAccessor(bindingKey), allBindings, bindingContext['$data'], bindingContext);
                                    }, null, { disposeWhenNodeIsRemoved: node });
                                }
                            } catch (ex) {
                                ex.message = "Unable to process binding \"" + bindingKey + ": " + bindings[bindingKey] + "\"\nMessage: " + ex.message;
                                throw ex;
                            }
                        });
                    }

                    return {
                        'shouldBindDescendants': bindingHandlerThatControlsDescendantBindings === undefined
                    };
                };

                var storedBindingContextDomDataKey = ko.utils.domData.nextKey();
                ko.storedBindingContextForNode = function (node, bindingContext) {
                    if (arguments.length == 2) {
                        ko.utils.domData.set(node, storedBindingContextDomDataKey, bindingContext);
                        if (bindingContext._subscribable) bindingContext._subscribable._addNode(node);
                    } else {
                        return ko.utils.domData.get(node, storedBindingContextDomDataKey);
                    }
                };

                function getBindingContext(viewModelOrBindingContext) {
                    return viewModelOrBindingContext && viewModelOrBindingContext instanceof ko.bindingContext ? viewModelOrBindingContext : new ko.bindingContext(viewModelOrBindingContext);
                }

                ko.applyBindingAccessorsToNode = function (node, bindings, viewModelOrBindingContext) {
                    if (node.nodeType === 1) // If it's an element, workaround IE <= 8 HTML parsing weirdness
                        ko.virtualElements.normaliseVirtualElementDomStructure(node);
                    return applyBindingsToNodeInternal(node, bindings, getBindingContext(viewModelOrBindingContext), true);
                };

                ko.applyBindingsToNode = function (node, bindings, viewModelOrBindingContext) {
                    var context = getBindingContext(viewModelOrBindingContext);
                    return ko.applyBindingAccessorsToNode(node, makeBindingAccessors(bindings, context, node), context);
                };

                ko.applyBindingsToDescendants = function (viewModelOrBindingContext, rootNode) {
                    if (rootNode.nodeType === 1 || rootNode.nodeType === 8) applyBindingsToDescendantsInternal(getBindingContext(viewModelOrBindingContext), rootNode, true);
                };

                ko.applyBindings = function (viewModelOrBindingContext, rootNode) {
                    // If jQuery is loaded after Knockout, we won't initially have access to it. So save it here.
                    if (!jQueryInstance && window['jQuery']) {
                        jQueryInstance = window['jQuery'];
                    }

                    if (rootNode && rootNode.nodeType !== 1 && rootNode.nodeType !== 8) throw new Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                    rootNode = rootNode || window.document.body; // Make "rootNode" parameter optional

                    applyBindingsToNodeAndDescendantsInternal(getBindingContext(viewModelOrBindingContext), rootNode, true);
                };

                // Retrieving binding context from arbitrary nodes
                ko.contextFor = function (node) {
                    // We can only do something meaningful for elements and comment nodes (in particular, not text nodes, as IE can't store domdata for them)
                    switch (node.nodeType) {
                        case 1:
                        case 8:
                            var context = ko.storedBindingContextForNode(node);
                            if (context) return context;
                            if (node.parentNode) return ko.contextFor(node.parentNode);
                            break;
                    }
                    return undefined;
                };
                ko.dataFor = function (node) {
                    var context = ko.contextFor(node);
                    return context ? context['$data'] : undefined;
                };

                ko.exportSymbol('bindingHandlers', ko.bindingHandlers);
                ko.exportSymbol('applyBindings', ko.applyBindings);
                ko.exportSymbol('applyBindingsToDescendants', ko.applyBindingsToDescendants);
                ko.exportSymbol('applyBindingAccessorsToNode', ko.applyBindingAccessorsToNode);
                ko.exportSymbol('applyBindingsToNode', ko.applyBindingsToNode);
                ko.exportSymbol('contextFor', ko.contextFor);
                ko.exportSymbol('dataFor', ko.dataFor);
            })();
            (function (undefined) {
                var loadingSubscribablesCache = {},
                    // Tracks component loads that are currently in flight
                loadedDefinitionsCache = {}; // Tracks component loads that have already completed

                ko.components = {
                    get: function get(componentName, callback) {
                        var cachedDefinition = getObjectOwnProperty(loadedDefinitionsCache, componentName);
                        if (cachedDefinition) {
                            // It's already loaded and cached. Reuse the same definition object.
                            // Note that for API consistency, even cache hits complete asynchronously by default.
                            // You can bypass this by putting synchronous:true on your component config.
                            if (cachedDefinition.isSynchronousComponent) {
                                ko.dependencyDetection.ignore(function () {
                                    // See comment in loaderRegistryBehaviors.js for reasoning
                                    callback(cachedDefinition.definition);
                                });
                            } else {
                                ko.tasks.schedule(function () {
                                    callback(cachedDefinition.definition);
                                });
                            }
                        } else {
                            // Join the loading process that is already underway, or start a new one.
                            loadComponentAndNotify(componentName, callback);
                        }
                    },

                    clearCachedDefinition: function clearCachedDefinition(componentName) {
                        delete loadedDefinitionsCache[componentName];
                    },

                    _getFirstResultFromLoaders: getFirstResultFromLoaders
                };

                function getObjectOwnProperty(obj, propName) {
                    return obj.hasOwnProperty(propName) ? obj[propName] : undefined;
                }

                function loadComponentAndNotify(componentName, callback) {
                    var subscribable = getObjectOwnProperty(loadingSubscribablesCache, componentName),
                        completedAsync;
                    if (!subscribable) {
                        // It's not started loading yet. Start loading, and when it's done, move it to loadedDefinitionsCache.
                        subscribable = loadingSubscribablesCache[componentName] = new ko.subscribable();
                        subscribable.subscribe(callback);

                        beginLoadingComponent(componentName, function (definition, config) {
                            var isSynchronousComponent = !!(config && config['synchronous']);
                            loadedDefinitionsCache[componentName] = { definition: definition, isSynchronousComponent: isSynchronousComponent };
                            delete loadingSubscribablesCache[componentName];

                            // For API consistency, all loads complete asynchronously. However we want to avoid
                            // adding an extra task schedule if it's unnecessary (i.e., the completion is already
                            // async).
                            //
                            // You can bypass the 'always asynchronous' feature by putting the synchronous:true
                            // flag on your component configuration when you register it.
                            if (completedAsync || isSynchronousComponent) {
                                // Note that notifySubscribers ignores any dependencies read within the callback.
                                // See comment in loaderRegistryBehaviors.js for reasoning
                                subscribable['notifySubscribers'](definition);
                            } else {
                                ko.tasks.schedule(function () {
                                    subscribable['notifySubscribers'](definition);
                                });
                            }
                        });
                        completedAsync = true;
                    } else {
                        subscribable.subscribe(callback);
                    }
                }

                function beginLoadingComponent(componentName, callback) {
                    getFirstResultFromLoaders('getConfig', [componentName], function (config) {
                        if (config) {
                            // We have a config, so now load its definition
                            getFirstResultFromLoaders('loadComponent', [componentName, config], function (definition) {
                                callback(definition, config);
                            });
                        } else {
                            // The component has no config - it's unknown to all the loaders.
                            // Note that this is not an error (e.g., a module loading error) - that would abort the
                            // process and this callback would not run. For this callback to run, all loaders must
                            // have confirmed they don't know about this component.
                            callback(null, null);
                        }
                    });
                }

                function getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders) {
                    // On the first call in the stack, start with the full set of loaders
                    if (!candidateLoaders) {
                        candidateLoaders = ko.components['loaders'].slice(0); // Use a copy, because we'll be mutating this array
                    }

                    // Try the next candidate
                    var currentCandidateLoader = candidateLoaders.shift();
                    if (currentCandidateLoader) {
                        var methodInstance = currentCandidateLoader[methodName];
                        if (methodInstance) {
                            var wasAborted = false,
                                synchronousReturnValue = methodInstance.apply(currentCandidateLoader, argsExceptCallback.concat(function (result) {
                                if (wasAborted) {
                                    callback(null);
                                } else if (result !== null) {
                                    // This candidate returned a value. Use it.
                                    callback(result);
                                } else {
                                    // Try the next candidate
                                    getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders);
                                }
                            }));

                            // Currently, loaders may not return anything synchronously. This leaves open the possibility
                            // that we'll extend the API to support synchronous return values in the future. It won't be
                            // a breaking change, because currently no loader is allowed to return anything except undefined.
                            if (synchronousReturnValue !== undefined) {
                                wasAborted = true;

                                // Method to suppress exceptions will remain undocumented. This is only to keep
                                // KO's specs running tidily, since we can observe the loading got aborted without
                                // having exceptions cluttering up the console too.
                                if (!currentCandidateLoader['suppressLoaderExceptions']) {
                                    throw new Error('Component loaders must supply values by invoking the callback, not by returning values synchronously.');
                                }
                            }
                        } else {
                            // This candidate doesn't have the relevant handler. Synchronously move on to the next one.
                            getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders);
                        }
                    } else {
                        // No candidates returned a value
                        callback(null);
                    }
                }

                // Reference the loaders via string name so it's possible for developers
                // to replace the whole array by assigning to ko.components.loaders
                ko.components['loaders'] = [];

                ko.exportSymbol('components', ko.components);
                ko.exportSymbol('components.get', ko.components.get);
                ko.exportSymbol('components.clearCachedDefinition', ko.components.clearCachedDefinition);
            })();
            (function (undefined) {

                // The default loader is responsible for two things:
                // 1. Maintaining the default in-memory registry of component configuration objects
                //    (i.e., the thing you're writing to when you call ko.components.register(someName, ...))
                // 2. Answering requests for components by fetching configuration objects
                //    from that default in-memory registry and resolving them into standard
                //    component definition objects (of the form { createViewModel: ..., template: ... })
                // Custom loaders may override either of these facilities, i.e.,
                // 1. To supply configuration objects from some other source (e.g., conventions)
                // 2. Or, to resolve configuration objects by loading viewmodels/templates via arbitrary logic.

                var defaultConfigRegistry = {};

                ko.components.register = function (componentName, config) {
                    if (!config) {
                        throw new Error('Invalid configuration for ' + componentName);
                    }

                    if (ko.components.isRegistered(componentName)) {
                        throw new Error('Component ' + componentName + ' is already registered');
                    }

                    defaultConfigRegistry[componentName] = config;
                };

                ko.components.isRegistered = function (componentName) {
                    return defaultConfigRegistry.hasOwnProperty(componentName);
                };

                ko.components.unregister = function (componentName) {
                    delete defaultConfigRegistry[componentName];
                    ko.components.clearCachedDefinition(componentName);
                };

                ko.components.defaultLoader = {
                    'getConfig': function getConfig(componentName, callback) {
                        var result = defaultConfigRegistry.hasOwnProperty(componentName) ? defaultConfigRegistry[componentName] : null;
                        callback(result);
                    },

                    'loadComponent': function loadComponent(componentName, config, callback) {
                        var errorCallback = makeErrorCallback(componentName);
                        possiblyGetConfigFromAmd(errorCallback, config, function (loadedConfig) {
                            resolveConfig(componentName, errorCallback, loadedConfig, callback);
                        });
                    },

                    'loadTemplate': function loadTemplate(componentName, templateConfig, callback) {
                        resolveTemplate(makeErrorCallback(componentName), templateConfig, callback);
                    },

                    'loadViewModel': function loadViewModel(componentName, viewModelConfig, callback) {
                        resolveViewModel(makeErrorCallback(componentName), viewModelConfig, callback);
                    }
                };

                var createViewModelKey = 'createViewModel';

                // Takes a config object of the form { template: ..., viewModel: ... }, and asynchronously convert it
                // into the standard component definition format:
                //    { template: <ArrayOfDomNodes>, createViewModel: function(params, componentInfo) { ... } }.
                // Since both template and viewModel may need to be resolved asynchronously, both tasks are performed
                // in parallel, and the results joined when both are ready. We don't depend on any promises infrastructure,
                // so this is implemented manually below.
                function resolveConfig(componentName, errorCallback, config, callback) {
                    var result = {},
                        makeCallBackWhenZero = 2,
                        tryIssueCallback = function tryIssueCallback() {
                        if (--makeCallBackWhenZero === 0) {
                            callback(result);
                        }
                    },
                        templateConfig = config['template'],
                        viewModelConfig = config['viewModel'];

                    if (templateConfig) {
                        possiblyGetConfigFromAmd(errorCallback, templateConfig, function (loadedConfig) {
                            ko.components._getFirstResultFromLoaders('loadTemplate', [componentName, loadedConfig], function (resolvedTemplate) {
                                result['template'] = resolvedTemplate;
                                tryIssueCallback();
                            });
                        });
                    } else {
                        tryIssueCallback();
                    }

                    if (viewModelConfig) {
                        possiblyGetConfigFromAmd(errorCallback, viewModelConfig, function (loadedConfig) {
                            ko.components._getFirstResultFromLoaders('loadViewModel', [componentName, loadedConfig], function (resolvedViewModel) {
                                result[createViewModelKey] = resolvedViewModel;
                                tryIssueCallback();
                            });
                        });
                    } else {
                        tryIssueCallback();
                    }
                }

                function resolveTemplate(errorCallback, templateConfig, callback) {
                    if (typeof templateConfig === 'string') {
                        // Markup - parse it
                        callback(ko.utils.parseHtmlFragment(templateConfig));
                    } else if (templateConfig instanceof Array) {
                        // Assume already an array of DOM nodes - pass through unchanged
                        callback(templateConfig);
                    } else if (isDocumentFragment(templateConfig)) {
                        // Document fragment - use its child nodes
                        callback(ko.utils.makeArray(templateConfig.childNodes));
                    } else if (templateConfig['element']) {
                        var element = templateConfig['element'];
                        if (isDomElement(element)) {
                            // Element instance - copy its child nodes
                            callback(cloneNodesFromTemplateSourceElement(element));
                        } else if (typeof element === 'string') {
                            // Element ID - find it, then copy its child nodes
                            var elemInstance = document.getElementById(element);
                            if (elemInstance) {
                                callback(cloneNodesFromTemplateSourceElement(elemInstance));
                            } else {
                                errorCallback('Cannot find element with ID ' + element);
                            }
                        } else {
                            errorCallback('Unknown element type: ' + element);
                        }
                    } else {
                        errorCallback('Unknown template value: ' + templateConfig);
                    }
                }

                function resolveViewModel(errorCallback, viewModelConfig, callback) {
                    if (typeof viewModelConfig === 'function') {
                        // Constructor - convert to standard factory function format
                        // By design, this does *not* supply componentInfo to the constructor, as the intent is that
                        // componentInfo contains non-viewmodel data (e.g., the component's element) that should only
                        // be used in factory functions, not viewmodel constructors.
                        callback(function (params /*, componentInfo */) {
                            return new viewModelConfig(params);
                        });
                    } else if (typeof viewModelConfig[createViewModelKey] === 'function') {
                        // Already a factory function - use it as-is
                        callback(viewModelConfig[createViewModelKey]);
                    } else if ('instance' in viewModelConfig) {
                        // Fixed object instance - promote to createViewModel format for API consistency
                        var fixedInstance = viewModelConfig['instance'];
                        callback(function (params, componentInfo) {
                            return fixedInstance;
                        });
                    } else if ('viewModel' in viewModelConfig) {
                        // Resolved AMD module whose value is of the form { viewModel: ... }
                        resolveViewModel(errorCallback, viewModelConfig['viewModel'], callback);
                    } else {
                        errorCallback('Unknown viewModel value: ' + viewModelConfig);
                    }
                }

                function cloneNodesFromTemplateSourceElement(elemInstance) {
                    switch (ko.utils.tagNameLower(elemInstance)) {
                        case 'script':
                            return ko.utils.parseHtmlFragment(elemInstance.text);
                        case 'textarea':
                            return ko.utils.parseHtmlFragment(elemInstance.value);
                        case 'template':
                            // For browsers with proper <template> element support (i.e., where the .content property
                            // gives a document fragment), use that document fragment.
                            if (isDocumentFragment(elemInstance.content)) {
                                return ko.utils.cloneNodes(elemInstance.content.childNodes);
                            }
                    }

                    // Regular elements such as <div>, and <template> elements on old browsers that don't really
                    // understand <template> and just treat it as a regular container
                    return ko.utils.cloneNodes(elemInstance.childNodes);
                }

                function isDomElement(obj) {
                    if (window['HTMLElement']) {
                        return obj instanceof HTMLElement;
                    } else {
                        return obj && obj.tagName && obj.nodeType === 1;
                    }
                }

                function isDocumentFragment(obj) {
                    if (window['DocumentFragment']) {
                        return obj instanceof DocumentFragment;
                    } else {
                        return obj && obj.nodeType === 11;
                    }
                }

                function possiblyGetConfigFromAmd(errorCallback, config, callback) {
                    if (typeof config['require'] === 'string') {
                        // The config is the value of an AMD module
                        if (amdRequire || window['require']) {
                            (amdRequire || window['require'])([config['require']], callback);
                        } else {
                            errorCallback('Uses require, but no AMD loader is present');
                        }
                    } else {
                        callback(config);
                    }
                }

                function makeErrorCallback(componentName) {
                    return function (message) {
                        throw new Error('Component \'' + componentName + '\': ' + message);
                    };
                }

                ko.exportSymbol('components.register', ko.components.register);
                ko.exportSymbol('components.isRegistered', ko.components.isRegistered);
                ko.exportSymbol('components.unregister', ko.components.unregister);

                // Expose the default loader so that developers can directly ask it for configuration
                // or to resolve configuration
                ko.exportSymbol('components.defaultLoader', ko.components.defaultLoader);

                // By default, the default loader is the only registered component loader
                ko.components['loaders'].push(ko.components.defaultLoader);

                // Privately expose the underlying config registry for use in old-IE shim
                ko.components._allRegisteredComponents = defaultConfigRegistry;
            })();
            (function (undefined) {
                // Overridable API for determining which component name applies to a given node. By overriding this,
                // you can for example map specific tagNames to components that are not preregistered.
                ko.components['getComponentNameForNode'] = function (node) {
                    var tagNameLower = ko.utils.tagNameLower(node);
                    if (ko.components.isRegistered(tagNameLower)) {
                        // Try to determine that this node can be considered a *custom* element; see https://github.com/knockout/knockout/issues/1603
                        if (tagNameLower.indexOf('-') != -1 || '' + node == "[object HTMLUnknownElement]" || ko.utils.ieVersion <= 8 && node.tagName === tagNameLower) {
                            return tagNameLower;
                        }
                    }
                };

                ko.components.addBindingsForCustomElement = function (allBindings, node, bindingContext, valueAccessors) {
                    // Determine if it's really a custom element matching a component
                    if (node.nodeType === 1) {
                        var componentName = ko.components['getComponentNameForNode'](node);
                        if (componentName) {
                            // It does represent a component, so add a component binding for it
                            allBindings = allBindings || {};

                            if (allBindings['component']) {
                                // Avoid silently overwriting some other 'component' binding that may already be on the element
                                throw new Error('Cannot use the "component" binding on a custom element matching a component');
                            }

                            var componentBindingValue = { 'name': componentName, 'params': getComponentParamsFromCustomElement(node, bindingContext) };

                            allBindings['component'] = valueAccessors ? function () {
                                return componentBindingValue;
                            } : componentBindingValue;
                        }
                    }

                    return allBindings;
                };

                var nativeBindingProviderInstance = new ko.bindingProvider();

                function getComponentParamsFromCustomElement(elem, bindingContext) {
                    var paramsAttribute = elem.getAttribute('params');

                    if (paramsAttribute) {
                        var params = nativeBindingProviderInstance['parseBindingsString'](paramsAttribute, bindingContext, elem, { 'valueAccessors': true, 'bindingParams': true }),
                            rawParamComputedValues = ko.utils.objectMap(params, function (paramValue, paramName) {
                            return ko.computed(paramValue, null, { disposeWhenNodeIsRemoved: elem });
                        }),
                            result = ko.utils.objectMap(rawParamComputedValues, function (paramValueComputed, paramName) {
                            var paramValue = paramValueComputed.peek();
                            // Does the evaluation of the parameter value unwrap any observables?
                            if (!paramValueComputed.isActive()) {
                                // No it doesn't, so there's no need for any computed wrapper. Just pass through the supplied value directly.
                                // Example: "someVal: firstName, age: 123" (whether or not firstName is an observable/computed)
                                return paramValue;
                            } else {
                                // Yes it does. Supply a computed property that unwraps both the outer (binding expression)
                                // level of observability, and any inner (resulting model value) level of observability.
                                // This means the component doesn't have to worry about multiple unwrapping. If the value is a
                                // writable observable, the computed will also be writable and pass the value on to the observable.
                                return ko.computed({
                                    'read': function read() {
                                        return ko.utils.unwrapObservable(paramValueComputed());
                                    },
                                    'write': ko.isWriteableObservable(paramValue) && function (value) {
                                        paramValueComputed()(value);
                                    },
                                    disposeWhenNodeIsRemoved: elem
                                });
                            }
                        });

                        // Give access to the raw computeds, as long as that wouldn't overwrite any custom param also called '$raw'
                        // This is in case the developer wants to react to outer (binding) observability separately from inner
                        // (model value) observability, or in case the model value observable has subobservables.
                        if (!result.hasOwnProperty('$raw')) {
                            result['$raw'] = rawParamComputedValues;
                        }

                        return result;
                    } else {
                        // For consistency, absence of a "params" attribute is treated the same as the presence of
                        // any empty one. Otherwise component viewmodels need special code to check whether or not
                        // 'params' or 'params.$raw' is null/undefined before reading subproperties, which is annoying.
                        return { '$raw': {} };
                    }
                }

                // --------------------------------------------------------------------------------
                // Compatibility code for older (pre-HTML5) IE browsers

                if (ko.utils.ieVersion < 9) {
                    // Whenever you preregister a component, enable it as a custom element in the current document
                    ko.components['register'] = function (originalFunction) {
                        return function (componentName) {
                            document.createElement(componentName); // Allows IE<9 to parse markup containing the custom element
                            return originalFunction.apply(this, arguments);
                        };
                    }(ko.components['register']);

                    // Whenever you create a document fragment, enable all preregistered component names as custom elements
                    // This is needed to make innerShiv/jQuery HTML parsing correctly handle the custom elements
                    document.createDocumentFragment = function (originalFunction) {
                        return function () {
                            var newDocFrag = originalFunction(),
                                allComponents = ko.components._allRegisteredComponents;
                            for (var componentName in allComponents) {
                                if (allComponents.hasOwnProperty(componentName)) {
                                    newDocFrag.createElement(componentName);
                                }
                            }
                            return newDocFrag;
                        };
                    }(document.createDocumentFragment);
                }
            })();(function (undefined) {

                var componentLoadingOperationUniqueId = 0;

                ko.bindingHandlers['component'] = {
                    'init': function init(element, valueAccessor, ignored1, ignored2, bindingContext) {
                        var currentViewModel,
                            currentLoadingOperationId,
                            disposeAssociatedComponentViewModel = function disposeAssociatedComponentViewModel() {
                            var currentViewModelDispose = currentViewModel && currentViewModel['dispose'];
                            if (typeof currentViewModelDispose === 'function') {
                                currentViewModelDispose.call(currentViewModel);
                            }
                            currentViewModel = null;
                            // Any in-flight loading operation is no longer relevant, so make sure we ignore its completion
                            currentLoadingOperationId = null;
                        },
                            originalChildNodes = ko.utils.makeArray(ko.virtualElements.childNodes(element));

                        ko.utils.domNodeDisposal.addDisposeCallback(element, disposeAssociatedComponentViewModel);

                        ko.computed(function () {
                            var value = ko.utils.unwrapObservable(valueAccessor()),
                                componentName,
                                componentParams;

                            if (typeof value === 'string') {
                                componentName = value;
                            } else {
                                componentName = ko.utils.unwrapObservable(value['name']);
                                componentParams = ko.utils.unwrapObservable(value['params']);
                            }

                            if (!componentName) {
                                throw new Error('No component name specified');
                            }

                            var loadingOperationId = currentLoadingOperationId = ++componentLoadingOperationUniqueId;
                            ko.components.get(componentName, function (componentDefinition) {
                                // If this is not the current load operation for this element, ignore it.
                                if (currentLoadingOperationId !== loadingOperationId) {
                                    return;
                                }

                                // Clean up previous state
                                disposeAssociatedComponentViewModel();

                                // Instantiate and bind new component. Implicitly this cleans any old DOM nodes.
                                if (!componentDefinition) {
                                    throw new Error('Unknown component \'' + componentName + '\'');
                                }
                                cloneTemplateIntoElement(componentName, componentDefinition, element);
                                var componentViewModel = createViewModel(componentDefinition, element, originalChildNodes, componentParams),
                                    childBindingContext = bindingContext['createChildContext'](componentViewModel, /* dataItemAlias */undefined, function (ctx) {
                                    ctx['$component'] = componentViewModel;
                                    ctx['$componentTemplateNodes'] = originalChildNodes;
                                });
                                currentViewModel = componentViewModel;
                                ko.applyBindingsToDescendants(childBindingContext, element);
                            });
                        }, null, { disposeWhenNodeIsRemoved: element });

                        return { 'controlsDescendantBindings': true };
                    }
                };

                ko.virtualElements.allowedBindings['component'] = true;

                function cloneTemplateIntoElement(componentName, componentDefinition, element) {
                    var template = componentDefinition['template'];
                    if (!template) {
                        throw new Error('Component \'' + componentName + '\' has no template');
                    }

                    var clonedNodesArray = ko.utils.cloneNodes(template);
                    ko.virtualElements.setDomNodeChildren(element, clonedNodesArray);
                }

                function createViewModel(componentDefinition, element, originalChildNodes, componentParams) {
                    var componentViewModelFactory = componentDefinition['createViewModel'];
                    return componentViewModelFactory ? componentViewModelFactory.call(componentDefinition, componentParams, { 'element': element, 'templateNodes': originalChildNodes }) : componentParams; // Template-only component
                }
            })();
            var attrHtmlToJavascriptMap = { 'class': 'className', 'for': 'htmlFor' };
            ko.bindingHandlers['attr'] = {
                'update': function update(element, valueAccessor, allBindings) {
                    var value = ko.utils.unwrapObservable(valueAccessor()) || {};
                    ko.utils.objectForEach(value, function (attrName, attrValue) {
                        attrValue = ko.utils.unwrapObservable(attrValue);

                        // To cover cases like "attr: { checked:someProp }", we want to remove the attribute entirely
                        // when someProp is a "no value"-like value (strictly null, false, or undefined)
                        // (because the absence of the "checked" attr is how to mark an element as not checked, etc.)
                        var toRemove = attrValue === false || attrValue === null || attrValue === undefined;
                        if (toRemove) element.removeAttribute(attrName);

                        // In IE <= 7 and IE8 Quirks Mode, you have to use the Javascript property name instead of the
                        // HTML attribute name for certain attributes. IE8 Standards Mode supports the correct behavior,
                        // but instead of figuring out the mode, we'll just set the attribute through the Javascript
                        // property for IE <= 8.
                        if (ko.utils.ieVersion <= 8 && attrName in attrHtmlToJavascriptMap) {
                            attrName = attrHtmlToJavascriptMap[attrName];
                            if (toRemove) element.removeAttribute(attrName);else element[attrName] = attrValue;
                        } else if (!toRemove) {
                            element.setAttribute(attrName, attrValue.toString());
                        }

                        // Treat "name" specially - although you can think of it as an attribute, it also needs
                        // special handling on older versions of IE (https://github.com/SteveSanderson/knockout/pull/333)
                        // Deliberately being case-sensitive here because XHTML would regard "Name" as a different thing
                        // entirely, and there's no strong reason to allow for such casing in HTML.
                        if (attrName === "name") {
                            ko.utils.setElementName(element, toRemove ? "" : attrValue.toString());
                        }
                    });
                }
            };
            (function () {

                ko.bindingHandlers['checked'] = {
                    'after': ['value', 'attr'],
                    'init': function init(element, valueAccessor, allBindings) {
                        var checkedValue = ko.pureComputed(function () {
                            // Treat "value" like "checkedValue" when it is included with "checked" binding
                            if (allBindings['has']('checkedValue')) {
                                return ko.utils.unwrapObservable(allBindings.get('checkedValue'));
                            } else if (allBindings['has']('value')) {
                                return ko.utils.unwrapObservable(allBindings.get('value'));
                            }

                            return element.value;
                        });

                        function updateModel() {
                            // This updates the model value from the view value.
                            // It runs in response to DOM events (click) and changes in checkedValue.
                            var isChecked = element.checked,
                                elemValue = useCheckedValue ? checkedValue() : isChecked;

                            // When we're first setting up this computed, don't change any model state.
                            if (ko.computedContext.isInitial()) {
                                return;
                            }

                            // We can ignore unchecked radio buttons, because some other radio
                            // button will be getting checked, and that one can take care of updating state.
                            if (isRadio && !isChecked) {
                                return;
                            }

                            var modelValue = ko.dependencyDetection.ignore(valueAccessor);
                            if (valueIsArray) {
                                var writableValue = rawValueIsNonArrayObservable ? modelValue.peek() : modelValue;
                                if (oldElemValue !== elemValue) {
                                    // When we're responding to the checkedValue changing, and the element is
                                    // currently checked, replace the old elem value with the new elem value
                                    // in the model array.
                                    if (isChecked) {
                                        ko.utils.addOrRemoveItem(writableValue, elemValue, true);
                                        ko.utils.addOrRemoveItem(writableValue, oldElemValue, false);
                                    }

                                    oldElemValue = elemValue;
                                } else {
                                    // When we're responding to the user having checked/unchecked a checkbox,
                                    // add/remove the element value to the model array.
                                    ko.utils.addOrRemoveItem(writableValue, elemValue, isChecked);
                                }
                                if (rawValueIsNonArrayObservable && ko.isWriteableObservable(modelValue)) {
                                    modelValue(writableValue);
                                }
                            } else {
                                ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'checked', elemValue, true);
                            }
                        };

                        function updateView() {
                            // This updates the view value from the model value.
                            // It runs in response to changes in the bound (checked) value.
                            var modelValue = ko.utils.unwrapObservable(valueAccessor());

                            if (valueIsArray) {
                                // When a checkbox is bound to an array, being checked represents its value being present in that array
                                element.checked = ko.utils.arrayIndexOf(modelValue, checkedValue()) >= 0;
                            } else if (isCheckbox) {
                                // When a checkbox is bound to any other value (not an array), being checked represents the value being trueish
                                element.checked = modelValue;
                            } else {
                                // For radio buttons, being checked means that the radio button's value corresponds to the model value
                                element.checked = checkedValue() === modelValue;
                            }
                        };

                        var isCheckbox = element.type == "checkbox",
                            isRadio = element.type == "radio";

                        // Only bind to check boxes and radio buttons
                        if (!isCheckbox && !isRadio) {
                            return;
                        }

                        var rawValue = valueAccessor(),
                            valueIsArray = isCheckbox && ko.utils.unwrapObservable(rawValue) instanceof Array,
                            rawValueIsNonArrayObservable = !(valueIsArray && rawValue.push && rawValue.splice),
                            oldElemValue = valueIsArray ? checkedValue() : undefined,
                            useCheckedValue = isRadio || valueIsArray;

                        // IE 6 won't allow radio buttons to be selected unless they have a name
                        if (isRadio && !element.name) ko.bindingHandlers['uniqueName']['init'](element, function () {
                            return true;
                        });

                        // Set up two computeds to update the binding:

                        // The first responds to changes in the checkedValue value and to element clicks
                        ko.computed(updateModel, null, { disposeWhenNodeIsRemoved: element });
                        ko.utils.registerEventHandler(element, "click", updateModel);

                        // The second responds to changes in the model value (the one associated with the checked binding)
                        ko.computed(updateView, null, { disposeWhenNodeIsRemoved: element });

                        rawValue = undefined;
                    }
                };
                ko.expressionRewriting.twoWayBindings['checked'] = true;

                ko.bindingHandlers['checkedValue'] = {
                    'update': function update(element, valueAccessor) {
                        element.value = ko.utils.unwrapObservable(valueAccessor());
                    }
                };
            })();var classesWrittenByBindingKey = '__ko__cssValue';
            ko.bindingHandlers['css'] = {
                'update': function update(element, valueAccessor) {
                    var value = ko.utils.unwrapObservable(valueAccessor());
                    if (value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == "object") {
                        ko.utils.objectForEach(value, function (className, shouldHaveClass) {
                            shouldHaveClass = ko.utils.unwrapObservable(shouldHaveClass);
                            ko.utils.toggleDomNodeCssClass(element, className, shouldHaveClass);
                        });
                    } else {
                        value = ko.utils.stringTrim(String(value || '')); // Make sure we don't try to store or set a non-string value
                        ko.utils.toggleDomNodeCssClass(element, element[classesWrittenByBindingKey], false);
                        element[classesWrittenByBindingKey] = value;
                        ko.utils.toggleDomNodeCssClass(element, value, true);
                    }
                }
            };
            ko.bindingHandlers['enable'] = {
                'update': function update(element, valueAccessor) {
                    var value = ko.utils.unwrapObservable(valueAccessor());
                    if (value && element.disabled) element.removeAttribute("disabled");else if (!value && !element.disabled) element.disabled = true;
                }
            };

            ko.bindingHandlers['disable'] = {
                'update': function update(element, valueAccessor) {
                    ko.bindingHandlers['enable']['update'](element, function () {
                        return !ko.utils.unwrapObservable(valueAccessor());
                    });
                }
            };
            // For certain common events (currently just 'click'), allow a simplified data-binding syntax
            // e.g. click:handler instead of the usual full-length event:{click:handler}
            function makeEventHandlerShortcut(eventName) {
                ko.bindingHandlers[eventName] = {
                    'init': function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
                        var newValueAccessor = function newValueAccessor() {
                            var result = {};
                            result[eventName] = valueAccessor();
                            return result;
                        };
                        return ko.bindingHandlers['event']['init'].call(this, element, newValueAccessor, allBindings, viewModel, bindingContext);
                    }
                };
            }

            ko.bindingHandlers['event'] = {
                'init': function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
                    var eventsToHandle = valueAccessor() || {};
                    ko.utils.objectForEach(eventsToHandle, function (eventName) {
                        if (typeof eventName == "string") {
                            ko.utils.registerEventHandler(element, eventName, function (event) {
                                var handlerReturnValue;
                                var handlerFunction = valueAccessor()[eventName];
                                if (!handlerFunction) return;

                                try {
                                    // Take all the event args, and prefix with the viewmodel
                                    var argsForHandler = ko.utils.makeArray(arguments);
                                    viewModel = bindingContext['$data'];
                                    argsForHandler.unshift(viewModel);
                                    handlerReturnValue = handlerFunction.apply(viewModel, argsForHandler);
                                } finally {
                                    if (handlerReturnValue !== true) {
                                        // Normally we want to prevent default action. Developer can override this be explicitly returning true.
                                        if (event.preventDefault) event.preventDefault();else event.returnValue = false;
                                    }
                                }

                                var bubble = allBindings.get(eventName + 'Bubble') !== false;
                                if (!bubble) {
                                    event.cancelBubble = true;
                                    if (event.stopPropagation) event.stopPropagation();
                                }
                            });
                        }
                    });
                }
            };
            // "foreach: someExpression" is equivalent to "template: { foreach: someExpression }"
            // "foreach: { data: someExpression, afterAdd: myfn }" is equivalent to "template: { foreach: someExpression, afterAdd: myfn }"
            ko.bindingHandlers['foreach'] = {
                makeTemplateValueAccessor: function makeTemplateValueAccessor(valueAccessor) {
                    return function () {
                        var modelValue = valueAccessor(),
                            unwrappedValue = ko.utils.peekObservable(modelValue); // Unwrap without setting a dependency here

                        // If unwrappedValue is the array, pass in the wrapped value on its own
                        // The value will be unwrapped and tracked within the template binding
                        // (See https://github.com/SteveSanderson/knockout/issues/523)
                        if (!unwrappedValue || typeof unwrappedValue.length == "number") return { 'foreach': modelValue, 'templateEngine': ko.nativeTemplateEngine.instance };

                        // If unwrappedValue.data is the array, preserve all relevant options and unwrap again value so we get updates
                        ko.utils.unwrapObservable(modelValue);
                        return {
                            'foreach': unwrappedValue['data'],
                            'as': unwrappedValue['as'],
                            'includeDestroyed': unwrappedValue['includeDestroyed'],
                            'afterAdd': unwrappedValue['afterAdd'],
                            'beforeRemove': unwrappedValue['beforeRemove'],
                            'afterRender': unwrappedValue['afterRender'],
                            'beforeMove': unwrappedValue['beforeMove'],
                            'afterMove': unwrappedValue['afterMove'],
                            'templateEngine': ko.nativeTemplateEngine.instance
                        };
                    };
                },
                'init': function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
                    return ko.bindingHandlers['template']['init'](element, ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor));
                },
                'update': function update(element, valueAccessor, allBindings, viewModel, bindingContext) {
                    return ko.bindingHandlers['template']['update'](element, ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor), allBindings, viewModel, bindingContext);
                }
            };
            ko.expressionRewriting.bindingRewriteValidators['foreach'] = false; // Can't rewrite control flow bindings
            ko.virtualElements.allowedBindings['foreach'] = true;
            var hasfocusUpdatingProperty = '__ko_hasfocusUpdating';
            var hasfocusLastValue = '__ko_hasfocusLastValue';
            ko.bindingHandlers['hasfocus'] = {
                'init': function init(element, valueAccessor, allBindings) {
                    var handleElementFocusChange = function handleElementFocusChange(isFocused) {
                        // Where possible, ignore which event was raised and determine focus state using activeElement,
                        // as this avoids phantom focus/blur events raised when changing tabs in modern browsers.
                        // However, not all KO-targeted browsers (Firefox 2) support activeElement. For those browsers,
                        // prevent a loss of focus when changing tabs/windows by setting a flag that prevents hasfocus
                        // from calling 'blur()' on the element when it loses focus.
                        // Discussion at https://github.com/SteveSanderson/knockout/pull/352
                        element[hasfocusUpdatingProperty] = true;
                        var ownerDoc = element.ownerDocument;
                        if ("activeElement" in ownerDoc) {
                            var active;
                            try {
                                active = ownerDoc.activeElement;
                            } catch (e) {
                                // IE9 throws if you access activeElement during page load (see issue #703)
                                active = ownerDoc.body;
                            }
                            isFocused = active === element;
                        }
                        var modelValue = valueAccessor();
                        ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'hasfocus', isFocused, true);

                        //cache the latest value, so we can avoid unnecessarily calling focus/blur in the update function
                        element[hasfocusLastValue] = isFocused;
                        element[hasfocusUpdatingProperty] = false;
                    };
                    var handleElementFocusIn = handleElementFocusChange.bind(null, true);
                    var handleElementFocusOut = handleElementFocusChange.bind(null, false);

                    ko.utils.registerEventHandler(element, "focus", handleElementFocusIn);
                    ko.utils.registerEventHandler(element, "focusin", handleElementFocusIn); // For IE
                    ko.utils.registerEventHandler(element, "blur", handleElementFocusOut);
                    ko.utils.registerEventHandler(element, "focusout", handleElementFocusOut); // For IE
                },
                'update': function update(element, valueAccessor) {
                    var value = !!ko.utils.unwrapObservable(valueAccessor());

                    if (!element[hasfocusUpdatingProperty] && element[hasfocusLastValue] !== value) {
                        value ? element.focus() : element.blur();

                        // In IE, the blur method doesn't always cause the element to lose focus (for example, if the window is not in focus).
                        // Setting focus to the body element does seem to be reliable in IE, but should only be used if we know that the current
                        // element was focused already.
                        if (!value && element[hasfocusLastValue]) {
                            element.ownerDocument.body.focus();
                        }

                        // For IE, which doesn't reliably fire "focus" or "blur" events synchronously
                        ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, value ? "focusin" : "focusout"]);
                    }
                }
            };
            ko.expressionRewriting.twoWayBindings['hasfocus'] = true;

            ko.bindingHandlers['hasFocus'] = ko.bindingHandlers['hasfocus']; // Make "hasFocus" an alias
            ko.expressionRewriting.twoWayBindings['hasFocus'] = true;
            ko.bindingHandlers['html'] = {
                'init': function init() {
                    // Prevent binding on the dynamically-injected HTML (as developers are unlikely to expect that, and it has security implications)
                    return { 'controlsDescendantBindings': true };
                },
                'update': function update(element, valueAccessor) {
                    // setHtml will unwrap the value if needed
                    ko.utils.setHtml(element, valueAccessor());
                }
            };
            // Makes a binding like with or if
            function makeWithIfBinding(bindingKey, isWith, isNot, makeContextCallback) {
                ko.bindingHandlers[bindingKey] = {
                    'init': function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
                        var didDisplayOnLastUpdate, savedNodes;
                        ko.computed(function () {
                            var rawValue = valueAccessor(),
                                dataValue = ko.utils.unwrapObservable(rawValue),
                                shouldDisplay = !isNot !== !dataValue,
                                // equivalent to isNot ? !dataValue : !!dataValue
                            isFirstRender = !savedNodes,
                                needsRefresh = isFirstRender || isWith || shouldDisplay !== didDisplayOnLastUpdate;

                            if (needsRefresh) {
                                // Save a copy of the inner nodes on the initial update, but only if we have dependencies.
                                if (isFirstRender && ko.computedContext.getDependenciesCount()) {
                                    savedNodes = ko.utils.cloneNodes(ko.virtualElements.childNodes(element), true /* shouldCleanNodes */);
                                }

                                if (shouldDisplay) {
                                    if (!isFirstRender) {
                                        ko.virtualElements.setDomNodeChildren(element, ko.utils.cloneNodes(savedNodes));
                                    }
                                    ko.applyBindingsToDescendants(makeContextCallback ? makeContextCallback(bindingContext, rawValue) : bindingContext, element);
                                } else {
                                    ko.virtualElements.emptyNode(element);
                                }

                                didDisplayOnLastUpdate = shouldDisplay;
                            }
                        }, null, { disposeWhenNodeIsRemoved: element });
                        return { 'controlsDescendantBindings': true };
                    }
                };
                ko.expressionRewriting.bindingRewriteValidators[bindingKey] = false; // Can't rewrite control flow bindings
                ko.virtualElements.allowedBindings[bindingKey] = true;
            }

            // Construct the actual binding handlers
            makeWithIfBinding('if');
            makeWithIfBinding('ifnot', false /* isWith */, true /* isNot */);
            makeWithIfBinding('with', true /* isWith */, false /* isNot */
            , function (bindingContext, dataValue) {
                return bindingContext.createStaticChildContext(dataValue);
            });
            var captionPlaceholder = {};
            ko.bindingHandlers['options'] = {
                'init': function init(element) {
                    if (ko.utils.tagNameLower(element) !== "select") throw new Error("options binding applies only to SELECT elements");

                    // Remove all existing <option>s.
                    while (element.length > 0) {
                        element.remove(0);
                    }

                    // Ensures that the binding processor doesn't try to bind the options
                    return { 'controlsDescendantBindings': true };
                },
                'update': function update(element, valueAccessor, allBindings) {
                    function selectedOptions() {
                        return ko.utils.arrayFilter(element.options, function (node) {
                            return node.selected;
                        });
                    }

                    var selectWasPreviouslyEmpty = element.length == 0,
                        multiple = element.multiple,
                        previousScrollTop = !selectWasPreviouslyEmpty && multiple ? element.scrollTop : null,
                        unwrappedArray = ko.utils.unwrapObservable(valueAccessor()),
                        valueAllowUnset = allBindings.get('valueAllowUnset') && allBindings['has']('value'),
                        includeDestroyed = allBindings.get('optionsIncludeDestroyed'),
                        arrayToDomNodeChildrenOptions = {},
                        captionValue,
                        filteredArray,
                        previousSelectedValues = [];

                    if (!valueAllowUnset) {
                        if (multiple) {
                            previousSelectedValues = ko.utils.arrayMap(selectedOptions(), ko.selectExtensions.readValue);
                        } else if (element.selectedIndex >= 0) {
                            previousSelectedValues.push(ko.selectExtensions.readValue(element.options[element.selectedIndex]));
                        }
                    }

                    if (unwrappedArray) {
                        if (typeof unwrappedArray.length == "undefined") // Coerce single value into array
                            unwrappedArray = [unwrappedArray];

                        // Filter out any entries marked as destroyed
                        filteredArray = ko.utils.arrayFilter(unwrappedArray, function (item) {
                            return includeDestroyed || item === undefined || item === null || !ko.utils.unwrapObservable(item['_destroy']);
                        });

                        // If caption is included, add it to the array
                        if (allBindings['has']('optionsCaption')) {
                            captionValue = ko.utils.unwrapObservable(allBindings.get('optionsCaption'));
                            // If caption value is null or undefined, don't show a caption
                            if (captionValue !== null && captionValue !== undefined) {
                                filteredArray.unshift(captionPlaceholder);
                            }
                        }
                    } else {
                        // If a falsy value is provided (e.g. null), we'll simply empty the select element
                    }

                    function applyToObject(object, predicate, defaultValue) {
                        var predicateType = typeof predicate === 'undefined' ? 'undefined' : _typeof(predicate);
                        if (predicateType == "function") // Given a function; run it against the data value
                            return predicate(object);else if (predicateType == "string") // Given a string; treat it as a property name on the data value
                            return object[predicate];else // Given no optionsText arg; use the data value itself
                            return defaultValue;
                    }

                    // The following functions can run at two different times:
                    // The first is when the whole array is being updated directly from this binding handler.
                    // The second is when an observable value for a specific array entry is updated.
                    // oldOptions will be empty in the first case, but will be filled with the previously generated option in the second.
                    var itemUpdate = false;
                    function optionForArrayItem(arrayEntry, index, oldOptions) {
                        if (oldOptions.length) {
                            previousSelectedValues = !valueAllowUnset && oldOptions[0].selected ? [ko.selectExtensions.readValue(oldOptions[0])] : [];
                            itemUpdate = true;
                        }
                        var option = element.ownerDocument.createElement("option");
                        if (arrayEntry === captionPlaceholder) {
                            ko.utils.setTextContent(option, allBindings.get('optionsCaption'));
                            ko.selectExtensions.writeValue(option, undefined);
                        } else {
                            // Apply a value to the option element
                            var optionValue = applyToObject(arrayEntry, allBindings.get('optionsValue'), arrayEntry);
                            ko.selectExtensions.writeValue(option, ko.utils.unwrapObservable(optionValue));

                            // Apply some text to the option element
                            var optionText = applyToObject(arrayEntry, allBindings.get('optionsText'), optionValue);
                            ko.utils.setTextContent(option, optionText);
                        }
                        return [option];
                    }

                    // By using a beforeRemove callback, we delay the removal until after new items are added. This fixes a selection
                    // problem in IE<=8 and Firefox. See https://github.com/knockout/knockout/issues/1208
                    arrayToDomNodeChildrenOptions['beforeRemove'] = function (option) {
                        element.removeChild(option);
                    };

                    function setSelectionCallback(arrayEntry, newOptions) {
                        if (itemUpdate && valueAllowUnset) {
                            // The model value is authoritative, so make sure its value is the one selected
                            // There is no need to use dependencyDetection.ignore since setDomNodeChildrenFromArrayMapping does so already.
                            ko.selectExtensions.writeValue(element, ko.utils.unwrapObservable(allBindings.get('value')), true /* allowUnset */);
                        } else if (previousSelectedValues.length) {
                            // IE6 doesn't like us to assign selection to OPTION nodes before they're added to the document.
                            // That's why we first added them without selection. Now it's time to set the selection.
                            var isSelected = ko.utils.arrayIndexOf(previousSelectedValues, ko.selectExtensions.readValue(newOptions[0])) >= 0;
                            ko.utils.setOptionNodeSelectionState(newOptions[0], isSelected);

                            // If this option was changed from being selected during a single-item update, notify the change
                            if (itemUpdate && !isSelected) {
                                ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, "change"]);
                            }
                        }
                    }

                    var callback = setSelectionCallback;
                    if (allBindings['has']('optionsAfterRender') && typeof allBindings.get('optionsAfterRender') == "function") {
                        callback = function callback(arrayEntry, newOptions) {
                            setSelectionCallback(arrayEntry, newOptions);
                            ko.dependencyDetection.ignore(allBindings.get('optionsAfterRender'), null, [newOptions[0], arrayEntry !== captionPlaceholder ? arrayEntry : undefined]);
                        };
                    }

                    ko.utils.setDomNodeChildrenFromArrayMapping(element, filteredArray, optionForArrayItem, arrayToDomNodeChildrenOptions, callback);

                    ko.dependencyDetection.ignore(function () {
                        if (valueAllowUnset) {
                            // The model value is authoritative, so make sure its value is the one selected
                            ko.selectExtensions.writeValue(element, ko.utils.unwrapObservable(allBindings.get('value')), true /* allowUnset */);
                        } else {
                            // Determine if the selection has changed as a result of updating the options list
                            var selectionChanged;
                            if (multiple) {
                                // For a multiple-select box, compare the new selection count to the previous one
                                // But if nothing was selected before, the selection can't have changed
                                selectionChanged = previousSelectedValues.length && selectedOptions().length < previousSelectedValues.length;
                            } else {
                                // For a single-select box, compare the current value to the previous value
                                // But if nothing was selected before or nothing is selected now, just look for a change in selection
                                selectionChanged = previousSelectedValues.length && element.selectedIndex >= 0 ? ko.selectExtensions.readValue(element.options[element.selectedIndex]) !== previousSelectedValues[0] : previousSelectedValues.length || element.selectedIndex >= 0;
                            }

                            // Ensure consistency between model value and selected option.
                            // If the dropdown was changed so that selection is no longer the same,
                            // notify the value or selectedOptions binding.
                            if (selectionChanged) {
                                ko.utils.triggerEvent(element, "change");
                            }
                        }
                    });

                    // Workaround for IE bug
                    ko.utils.ensureSelectElementIsRenderedCorrectly(element);

                    if (previousScrollTop && Math.abs(previousScrollTop - element.scrollTop) > 20) element.scrollTop = previousScrollTop;
                }
            };
            ko.bindingHandlers['options'].optionValueDomDataKey = ko.utils.domData.nextKey();
            ko.bindingHandlers['selectedOptions'] = {
                'after': ['options', 'foreach'],
                'init': function init(element, valueAccessor, allBindings) {
                    ko.utils.registerEventHandler(element, "change", function () {
                        var value = valueAccessor(),
                            valueToWrite = [];
                        ko.utils.arrayForEach(element.getElementsByTagName("option"), function (node) {
                            if (node.selected) valueToWrite.push(ko.selectExtensions.readValue(node));
                        });
                        ko.expressionRewriting.writeValueToProperty(value, allBindings, 'selectedOptions', valueToWrite);
                    });
                },
                'update': function update(element, valueAccessor) {
                    if (ko.utils.tagNameLower(element) != "select") throw new Error("values binding applies only to SELECT elements");

                    var newValue = ko.utils.unwrapObservable(valueAccessor()),
                        previousScrollTop = element.scrollTop;

                    if (newValue && typeof newValue.length == "number") {
                        ko.utils.arrayForEach(element.getElementsByTagName("option"), function (node) {
                            var isSelected = ko.utils.arrayIndexOf(newValue, ko.selectExtensions.readValue(node)) >= 0;
                            if (node.selected != isSelected) {
                                // This check prevents flashing of the select element in IE
                                ko.utils.setOptionNodeSelectionState(node, isSelected);
                            }
                        });
                    }

                    element.scrollTop = previousScrollTop;
                }
            };
            ko.expressionRewriting.twoWayBindings['selectedOptions'] = true;
            ko.bindingHandlers['style'] = {
                'update': function update(element, valueAccessor) {
                    var value = ko.utils.unwrapObservable(valueAccessor() || {});
                    ko.utils.objectForEach(value, function (styleName, styleValue) {
                        styleValue = ko.utils.unwrapObservable(styleValue);

                        if (styleValue === null || styleValue === undefined || styleValue === false) {
                            // Empty string removes the value, whereas null/undefined have no effect
                            styleValue = "";
                        }

                        element.style[styleName] = styleValue;
                    });
                }
            };
            ko.bindingHandlers['submit'] = {
                'init': function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
                    if (typeof valueAccessor() != "function") throw new Error("The value for a submit binding must be a function");
                    ko.utils.registerEventHandler(element, "submit", function (event) {
                        var handlerReturnValue;
                        var value = valueAccessor();
                        try {
                            handlerReturnValue = value.call(bindingContext['$data'], element);
                        } finally {
                            if (handlerReturnValue !== true) {
                                // Normally we want to prevent default action. Developer can override this be explicitly returning true.
                                if (event.preventDefault) event.preventDefault();else event.returnValue = false;
                            }
                        }
                    });
                }
            };
            ko.bindingHandlers['text'] = {
                'init': function init() {
                    // Prevent binding on the dynamically-injected text node (as developers are unlikely to expect that, and it has security implications).
                    // It should also make things faster, as we no longer have to consider whether the text node might be bindable.
                    return { 'controlsDescendantBindings': true };
                },
                'update': function update(element, valueAccessor) {
                    ko.utils.setTextContent(element, valueAccessor());
                }
            };
            ko.virtualElements.allowedBindings['text'] = true;
            (function () {

                if (window && window.navigator) {
                    var parseVersion = function parseVersion(matches) {
                        if (matches) {
                            return parseFloat(matches[1]);
                        }
                    };

                    // Detect various browser versions because some old versions don't fully support the 'input' event
                    var operaVersion = window.opera && window.opera.version && parseInt(window.opera.version()),
                        userAgent = window.navigator.userAgent,
                        safariVersion = parseVersion(userAgent.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
                        firefoxVersion = parseVersion(userAgent.match(/Firefox\/([^ ]*)/));
                }

                // IE 8 and 9 have bugs that prevent the normal events from firing when the value changes.
                // But it does fire the 'selectionchange' event on many of those, presumably because the
                // cursor is moving and that counts as the selection changing. The 'selectionchange' event is
                // fired at the document level only and doesn't directly indicate which element changed. We
                // set up just one event handler for the document and use 'activeElement' to determine which
                // element was changed.
                if (ko.utils.ieVersion < 10) {
                    var selectionChangeRegisteredName = ko.utils.domData.nextKey(),
                        selectionChangeHandlerName = ko.utils.domData.nextKey();
                    var selectionChangeHandler = function selectionChangeHandler(event) {
                        var target = this.activeElement,
                            handler = target && ko.utils.domData.get(target, selectionChangeHandlerName);
                        if (handler) {
                            handler(event);
                        }
                    };
                    var registerForSelectionChangeEvent = function registerForSelectionChangeEvent(element, handler) {
                        var ownerDoc = element.ownerDocument;
                        if (!ko.utils.domData.get(ownerDoc, selectionChangeRegisteredName)) {
                            ko.utils.domData.set(ownerDoc, selectionChangeRegisteredName, true);
                            ko.utils.registerEventHandler(ownerDoc, 'selectionchange', selectionChangeHandler);
                        }
                        ko.utils.domData.set(element, selectionChangeHandlerName, handler);
                    };
                }

                ko.bindingHandlers['textInput'] = {
                    'init': function init(element, valueAccessor, allBindings) {

                        var previousElementValue = element.value,
                            timeoutHandle,
                            elementValueBeforeEvent;

                        var updateModel = function updateModel(event) {
                            clearTimeout(timeoutHandle);
                            elementValueBeforeEvent = timeoutHandle = undefined;

                            var elementValue = element.value;
                            if (previousElementValue !== elementValue) {
                                // Provide a way for tests to know exactly which event was processed
                                if (DEBUG && event) element['_ko_textInputProcessedEvent'] = event.type;
                                previousElementValue = elementValue;
                                ko.expressionRewriting.writeValueToProperty(valueAccessor(), allBindings, 'textInput', elementValue);
                            }
                        };

                        var deferUpdateModel = function deferUpdateModel(event) {
                            if (!timeoutHandle) {
                                // The elementValueBeforeEvent variable is set *only* during the brief gap between an
                                // event firing and the updateModel function running. This allows us to ignore model
                                // updates that are from the previous state of the element, usually due to techniques
                                // such as rateLimit. Such updates, if not ignored, can cause keystrokes to be lost.
                                elementValueBeforeEvent = element.value;
                                var handler = DEBUG ? updateModel.bind(element, { type: event.type }) : updateModel;
                                timeoutHandle = ko.utils.setTimeout(handler, 4);
                            }
                        };

                        // IE9 will mess up the DOM if you handle events synchronously which results in DOM changes (such as other bindings);
                        // so we'll make sure all updates are asynchronous
                        var ieUpdateModel = ko.utils.ieVersion == 9 ? deferUpdateModel : updateModel;

                        var updateView = function updateView() {
                            var modelValue = ko.utils.unwrapObservable(valueAccessor());

                            if (modelValue === null || modelValue === undefined) {
                                modelValue = '';
                            }

                            if (elementValueBeforeEvent !== undefined && modelValue === elementValueBeforeEvent) {
                                ko.utils.setTimeout(updateView, 4);
                                return;
                            }

                            // Update the element only if the element and model are different. On some browsers, updating the value
                            // will move the cursor to the end of the input, which would be bad while the user is typing.
                            if (element.value !== modelValue) {
                                previousElementValue = modelValue; // Make sure we ignore events (propertychange) that result from updating the value
                                element.value = modelValue;
                            }
                        };

                        var onEvent = function onEvent(event, handler) {
                            ko.utils.registerEventHandler(element, event, handler);
                        };

                        if (DEBUG && ko.bindingHandlers['textInput']['_forceUpdateOn']) {
                            // Provide a way for tests to specify exactly which events are bound
                            ko.utils.arrayForEach(ko.bindingHandlers['textInput']['_forceUpdateOn'], function (eventName) {
                                if (eventName.slice(0, 5) == 'after') {
                                    onEvent(eventName.slice(5), deferUpdateModel);
                                } else {
                                    onEvent(eventName, updateModel);
                                }
                            });
                        } else {
                            if (ko.utils.ieVersion < 10) {
                                // Internet Explorer <= 8 doesn't support the 'input' event, but does include 'propertychange' that fires whenever
                                // any property of an element changes. Unlike 'input', it also fires if a property is changed from JavaScript code,
                                // but that's an acceptable compromise for this binding. IE 9 does support 'input', but since it doesn't fire it
                                // when using autocomplete, we'll use 'propertychange' for it also.
                                onEvent('propertychange', function (event) {
                                    if (event.propertyName === 'value') {
                                        ieUpdateModel(event);
                                    }
                                });

                                if (ko.utils.ieVersion == 8) {
                                    // IE 8 has a bug where it fails to fire 'propertychange' on the first update following a value change from
                                    // JavaScript code. It also doesn't fire if you clear the entire value. To fix this, we bind to the following
                                    // events too.
                                    onEvent('keyup', updateModel); // A single keystoke
                                    onEvent('keydown', updateModel); // The first character when a key is held down
                                }
                                if (ko.utils.ieVersion >= 8) {
                                    // Internet Explorer 9 doesn't fire the 'input' event when deleting text, including using
                                    // the backspace, delete, or ctrl-x keys, clicking the 'x' to clear the input, dragging text
                                    // out of the field, and cutting or deleting text using the context menu. 'selectionchange'
                                    // can detect all of those except dragging text out of the field, for which we use 'dragend'.
                                    // These are also needed in IE8 because of the bug described above.
                                    registerForSelectionChangeEvent(element, ieUpdateModel); // 'selectionchange' covers cut, paste, drop, delete, etc.
                                    onEvent('dragend', deferUpdateModel);
                                }
                            } else {
                                // All other supported browsers support the 'input' event, which fires whenever the content of the element is changed
                                // through the user interface.
                                onEvent('input', updateModel);

                                if (safariVersion < 5 && ko.utils.tagNameLower(element) === "textarea") {
                                    // Safari <5 doesn't fire the 'input' event for <textarea> elements (it does fire 'textInput'
                                    // but only when typing). So we'll just catch as much as we can with keydown, cut, and paste.
                                    onEvent('keydown', deferUpdateModel);
                                    onEvent('paste', deferUpdateModel);
                                    onEvent('cut', deferUpdateModel);
                                } else if (operaVersion < 11) {
                                    // Opera 10 doesn't always fire the 'input' event for cut, paste, undo & drop operations.
                                    // We can try to catch some of those using 'keydown'.
                                    onEvent('keydown', deferUpdateModel);
                                } else if (firefoxVersion < 4.0) {
                                    // Firefox <= 3.6 doesn't fire the 'input' event when text is filled in through autocomplete
                                    onEvent('DOMAutoComplete', updateModel);

                                    // Firefox <=3.5 doesn't fire the 'input' event when text is dropped into the input.
                                    onEvent('dragdrop', updateModel); // <3.5
                                    onEvent('drop', updateModel); // 3.5
                                }
                            }
                        }

                        // Bind to the change event so that we can catch programmatic updates of the value that fire this event.
                        onEvent('change', updateModel);

                        ko.computed(updateView, null, { disposeWhenNodeIsRemoved: element });
                    }
                };
                ko.expressionRewriting.twoWayBindings['textInput'] = true;

                // textinput is an alias for textInput
                ko.bindingHandlers['textinput'] = {
                    // preprocess is the only way to set up a full alias
                    'preprocess': function preprocess(value, name, addBinding) {
                        addBinding('textInput', value);
                    }
                };
            })();ko.bindingHandlers['uniqueName'] = {
                'init': function init(element, valueAccessor) {
                    if (valueAccessor()) {
                        var name = "ko_unique_" + ++ko.bindingHandlers['uniqueName'].currentIndex;
                        ko.utils.setElementName(element, name);
                    }
                }
            };
            ko.bindingHandlers['uniqueName'].currentIndex = 0;
            ko.bindingHandlers['value'] = {
                'after': ['options', 'foreach'],
                'init': function init(element, valueAccessor, allBindings) {
                    // If the value binding is placed on a radio/checkbox, then just pass through to checkedValue and quit
                    if (element.tagName.toLowerCase() == "input" && (element.type == "checkbox" || element.type == "radio")) {
                        ko.applyBindingAccessorsToNode(element, { 'checkedValue': valueAccessor });
                        return;
                    }

                    // Always catch "change" event; possibly other events too if asked
                    var eventsToCatch = ["change"];
                    var requestedEventsToCatch = allBindings.get("valueUpdate");
                    var propertyChangedFired = false;
                    var elementValueBeforeEvent = null;

                    if (requestedEventsToCatch) {
                        if (typeof requestedEventsToCatch == "string") // Allow both individual event names, and arrays of event names
                            requestedEventsToCatch = [requestedEventsToCatch];
                        ko.utils.arrayPushAll(eventsToCatch, requestedEventsToCatch);
                        eventsToCatch = ko.utils.arrayGetDistinctValues(eventsToCatch);
                    }

                    var valueUpdateHandler = function valueUpdateHandler() {
                        elementValueBeforeEvent = null;
                        propertyChangedFired = false;
                        var modelValue = valueAccessor();
                        var elementValue = ko.selectExtensions.readValue(element);
                        ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'value', elementValue);
                    };

                    // Workaround for https://github.com/SteveSanderson/knockout/issues/122
                    // IE doesn't fire "change" events on textboxes if the user selects a value from its autocomplete list
                    var ieAutoCompleteHackNeeded = ko.utils.ieVersion && element.tagName.toLowerCase() == "input" && element.type == "text" && element.autocomplete != "off" && (!element.form || element.form.autocomplete != "off");
                    if (ieAutoCompleteHackNeeded && ko.utils.arrayIndexOf(eventsToCatch, "propertychange") == -1) {
                        ko.utils.registerEventHandler(element, "propertychange", function () {
                            propertyChangedFired = true;
                        });
                        ko.utils.registerEventHandler(element, "focus", function () {
                            propertyChangedFired = false;
                        });
                        ko.utils.registerEventHandler(element, "blur", function () {
                            if (propertyChangedFired) {
                                valueUpdateHandler();
                            }
                        });
                    }

                    ko.utils.arrayForEach(eventsToCatch, function (eventName) {
                        // The syntax "after<eventname>" means "run the handler asynchronously after the event"
                        // This is useful, for example, to catch "keydown" events after the browser has updated the control
                        // (otherwise, ko.selectExtensions.readValue(this) will receive the control's value *before* the key event)
                        var handler = valueUpdateHandler;
                        if (ko.utils.stringStartsWith(eventName, "after")) {
                            handler = function handler() {
                                // The elementValueBeforeEvent variable is non-null *only* during the brief gap between
                                // a keyX event firing and the valueUpdateHandler running, which is scheduled to happen
                                // at the earliest asynchronous opportunity. We store this temporary information so that
                                // if, between keyX and valueUpdateHandler, the underlying model value changes separately,
                                // we can overwrite that model value change with the value the user just typed. Otherwise,
                                // techniques like rateLimit can trigger model changes at critical moments that will
                                // override the user's inputs, causing keystrokes to be lost.
                                elementValueBeforeEvent = ko.selectExtensions.readValue(element);
                                ko.utils.setTimeout(valueUpdateHandler, 0);
                            };
                            eventName = eventName.substring("after".length);
                        }
                        ko.utils.registerEventHandler(element, eventName, handler);
                    });

                    var updateFromModel = function updateFromModel() {
                        var newValue = ko.utils.unwrapObservable(valueAccessor());
                        var elementValue = ko.selectExtensions.readValue(element);

                        if (elementValueBeforeEvent !== null && newValue === elementValueBeforeEvent) {
                            ko.utils.setTimeout(updateFromModel, 0);
                            return;
                        }

                        var valueHasChanged = newValue !== elementValue;

                        if (valueHasChanged) {
                            if (ko.utils.tagNameLower(element) === "select") {
                                var allowUnset = allBindings.get('valueAllowUnset');
                                var applyValueAction = function applyValueAction() {
                                    ko.selectExtensions.writeValue(element, newValue, allowUnset);
                                };
                                applyValueAction();

                                if (!allowUnset && newValue !== ko.selectExtensions.readValue(element)) {
                                    // If you try to set a model value that can't be represented in an already-populated dropdown, reject that change,
                                    // because you're not allowed to have a model value that disagrees with a visible UI selection.
                                    ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, "change"]);
                                } else {
                                    // Workaround for IE6 bug: It won't reliably apply values to SELECT nodes during the same execution thread
                                    // right after you've changed the set of OPTION nodes on it. So for that node type, we'll schedule a second thread
                                    // to apply the value as well.
                                    ko.utils.setTimeout(applyValueAction, 0);
                                }
                            } else {
                                ko.selectExtensions.writeValue(element, newValue);
                            }
                        }
                    };

                    ko.computed(updateFromModel, null, { disposeWhenNodeIsRemoved: element });
                },
                'update': function update() {} // Keep for backwards compatibility with code that may have wrapped value binding
            };
            ko.expressionRewriting.twoWayBindings['value'] = true;
            ko.bindingHandlers['visible'] = {
                'update': function update(element, valueAccessor) {
                    var value = ko.utils.unwrapObservable(valueAccessor());
                    var isCurrentlyVisible = !(element.style.display == "none");
                    if (value && !isCurrentlyVisible) element.style.display = "";else if (!value && isCurrentlyVisible) element.style.display = "none";
                }
            };
            // 'click' is just a shorthand for the usual full-length event:{click:handler}
            makeEventHandlerShortcut('click');
            // If you want to make a custom template engine,
            //
            // [1] Inherit from this class (like ko.nativeTemplateEngine does)
            // [2] Override 'renderTemplateSource', supplying a function with this signature:
            //
            //        function (templateSource, bindingContext, options) {
            //            // - templateSource.text() is the text of the template you should render
            //            // - bindingContext.$data is the data you should pass into the template
            //            //   - you might also want to make bindingContext.$parent, bindingContext.$parents,
            //            //     and bindingContext.$root available in the template too
            //            // - options gives you access to any other properties set on "data-bind: { template: options }"
            //            // - templateDocument is the document object of the template
            //            //
            //            // Return value: an array of DOM nodes
            //        }
            //
            // [3] Override 'createJavaScriptEvaluatorBlock', supplying a function with this signature:
            //
            //        function (script) {
            //            // Return value: Whatever syntax means "Evaluate the JavaScript statement 'script' and output the result"
            //            //               For example, the jquery.tmpl template engine converts 'someScript' to '${ someScript }'
            //        }
            //
            //     This is only necessary if you want to allow data-bind attributes to reference arbitrary template variables.
            //     If you don't want to allow that, you can set the property 'allowTemplateRewriting' to false (like ko.nativeTemplateEngine does)
            //     and then you don't need to override 'createJavaScriptEvaluatorBlock'.

            ko.templateEngine = function () {};

            ko.templateEngine.prototype['renderTemplateSource'] = function (templateSource, bindingContext, options, templateDocument) {
                throw new Error("Override renderTemplateSource");
            };

            ko.templateEngine.prototype['createJavaScriptEvaluatorBlock'] = function (script) {
                throw new Error("Override createJavaScriptEvaluatorBlock");
            };

            ko.templateEngine.prototype['makeTemplateSource'] = function (template, templateDocument) {
                // Named template
                if (typeof template == "string") {
                    templateDocument = templateDocument || document;
                    var elem = templateDocument.getElementById(template);
                    if (!elem) throw new Error("Cannot find template with ID " + template);
                    return new ko.templateSources.domElement(elem);
                } else if (template.nodeType == 1 || template.nodeType == 8) {
                    // Anonymous template
                    return new ko.templateSources.anonymousTemplate(template);
                } else throw new Error("Unknown template type: " + template);
            };

            ko.templateEngine.prototype['renderTemplate'] = function (template, bindingContext, options, templateDocument) {
                var templateSource = this['makeTemplateSource'](template, templateDocument);
                return this['renderTemplateSource'](templateSource, bindingContext, options, templateDocument);
            };

            ko.templateEngine.prototype['isTemplateRewritten'] = function (template, templateDocument) {
                // Skip rewriting if requested
                if (this['allowTemplateRewriting'] === false) return true;
                return this['makeTemplateSource'](template, templateDocument)['data']("isRewritten");
            };

            ko.templateEngine.prototype['rewriteTemplate'] = function (template, rewriterCallback, templateDocument) {
                var templateSource = this['makeTemplateSource'](template, templateDocument);
                var rewritten = rewriterCallback(templateSource['text']());
                templateSource['text'](rewritten);
                templateSource['data']("isRewritten", true);
            };

            ko.exportSymbol('templateEngine', ko.templateEngine);

            ko.templateRewriting = function () {
                var memoizeDataBindingAttributeSyntaxRegex = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi;
                var memoizeVirtualContainerBindingSyntaxRegex = /<!--\s*ko\b\s*([\s\S]*?)\s*-->/g;

                function validateDataBindValuesForRewriting(keyValueArray) {
                    var allValidators = ko.expressionRewriting.bindingRewriteValidators;
                    for (var i = 0; i < keyValueArray.length; i++) {
                        var key = keyValueArray[i]['key'];
                        if (allValidators.hasOwnProperty(key)) {
                            var validator = allValidators[key];

                            if (typeof validator === "function") {
                                var possibleErrorMessage = validator(keyValueArray[i]['value']);
                                if (possibleErrorMessage) throw new Error(possibleErrorMessage);
                            } else if (!validator) {
                                throw new Error("This template engine does not support the '" + key + "' binding within its templates");
                            }
                        }
                    }
                }

                function constructMemoizedTagReplacement(dataBindAttributeValue, tagToRetain, nodeName, templateEngine) {
                    var dataBindKeyValueArray = ko.expressionRewriting.parseObjectLiteral(dataBindAttributeValue);
                    validateDataBindValuesForRewriting(dataBindKeyValueArray);
                    var rewrittenDataBindAttributeValue = ko.expressionRewriting.preProcessBindings(dataBindKeyValueArray, { 'valueAccessors': true });

                    // For no obvious reason, Opera fails to evaluate rewrittenDataBindAttributeValue unless it's wrapped in an additional
                    // anonymous function, even though Opera's built-in debugger can evaluate it anyway. No other browser requires this
                    // extra indirection.
                    var applyBindingsToNextSiblingScript = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + rewrittenDataBindAttributeValue + " } })()},'" + nodeName.toLowerCase() + "')";
                    return templateEngine['createJavaScriptEvaluatorBlock'](applyBindingsToNextSiblingScript) + tagToRetain;
                }

                return {
                    ensureTemplateIsRewritten: function ensureTemplateIsRewritten(template, templateEngine, templateDocument) {
                        if (!templateEngine['isTemplateRewritten'](template, templateDocument)) templateEngine['rewriteTemplate'](template, function (htmlString) {
                            return ko.templateRewriting.memoizeBindingAttributeSyntax(htmlString, templateEngine);
                        }, templateDocument);
                    },

                    memoizeBindingAttributeSyntax: function memoizeBindingAttributeSyntax(htmlString, templateEngine) {
                        return htmlString.replace(memoizeDataBindingAttributeSyntaxRegex, function () {
                            return constructMemoizedTagReplacement( /* dataBindAttributeValue: */arguments[4], /* tagToRetain: */arguments[1], /* nodeName: */arguments[2], templateEngine);
                        }).replace(memoizeVirtualContainerBindingSyntaxRegex, function () {
                            return constructMemoizedTagReplacement( /* dataBindAttributeValue: */arguments[1], /* tagToRetain: */"<!-- ko -->", /* nodeName: */"#comment", templateEngine);
                        });
                    },

                    applyMemoizedBindingsToNextSibling: function applyMemoizedBindingsToNextSibling(bindings, nodeName) {
                        return ko.memoization.memoize(function (domNode, bindingContext) {
                            var nodeToBind = domNode.nextSibling;
                            if (nodeToBind && nodeToBind.nodeName.toLowerCase() === nodeName) {
                                ko.applyBindingAccessorsToNode(nodeToBind, bindings, bindingContext);
                            }
                        });
                    }
                };
            }();

            // Exported only because it has to be referenced by string lookup from within rewritten template
            ko.exportSymbol('__tr_ambtns', ko.templateRewriting.applyMemoizedBindingsToNextSibling);
            (function () {
                // A template source represents a read/write way of accessing a template. This is to eliminate the need for template loading/saving
                // logic to be duplicated in every template engine (and means they can all work with anonymous templates, etc.)
                //
                // Two are provided by default:
                //  1. ko.templateSources.domElement       - reads/writes the text content of an arbitrary DOM element
                //  2. ko.templateSources.anonymousElement - uses ko.utils.domData to read/write text *associated* with the DOM element, but
                //                                           without reading/writing the actual element text content, since it will be overwritten
                //                                           with the rendered template output.
                // You can implement your own template source if you want to fetch/store templates somewhere other than in DOM elements.
                // Template sources need to have the following functions:
                //   text() 			- returns the template text from your storage location
                //   text(value)		- writes the supplied template text to your storage location
                //   data(key)			- reads values stored using data(key, value) - see below
                //   data(key, value)	- associates "value" with this template and the key "key". Is used to store information like "isRewritten".
                //
                // Optionally, template sources can also have the following functions:
                //   nodes()            - returns a DOM element containing the nodes of this template, where available
                //   nodes(value)       - writes the given DOM element to your storage location
                // If a DOM element is available for a given template source, template engines are encouraged to use it in preference over text()
                // for improved speed. However, all templateSources must supply text() even if they don't supply nodes().
                //
                // Once you've implemented a templateSource, make your template engine use it by subclassing whatever template engine you were
                // using and overriding "makeTemplateSource" to return an instance of your custom template source.

                ko.templateSources = {};

                // ---- ko.templateSources.domElement -----

                // template types
                var templateScript = 1,
                    templateTextArea = 2,
                    templateTemplate = 3,
                    templateElement = 4;

                ko.templateSources.domElement = function (element) {
                    this.domElement = element;

                    if (element) {
                        var tagNameLower = ko.utils.tagNameLower(element);
                        this.templateType = tagNameLower === "script" ? templateScript : tagNameLower === "textarea" ? templateTextArea :
                        // For browsers with proper <template> element support, where the .content property gives a document fragment
                        tagNameLower == "template" && element.content && element.content.nodeType === 11 ? templateTemplate : templateElement;
                    }
                };

                ko.templateSources.domElement.prototype['text'] = function () /* valueToWrite */{
                    var elemContentsProperty = this.templateType === templateScript ? "text" : this.templateType === templateTextArea ? "value" : "innerHTML";

                    if (arguments.length == 0) {
                        return this.domElement[elemContentsProperty];
                    } else {
                        var valueToWrite = arguments[0];
                        if (elemContentsProperty === "innerHTML") ko.utils.setHtml(this.domElement, valueToWrite);else this.domElement[elemContentsProperty] = valueToWrite;
                    }
                };

                var dataDomDataPrefix = ko.utils.domData.nextKey() + "_";
                ko.templateSources.domElement.prototype['data'] = function (key /*, valueToWrite */) {
                    if (arguments.length === 1) {
                        return ko.utils.domData.get(this.domElement, dataDomDataPrefix + key);
                    } else {
                        ko.utils.domData.set(this.domElement, dataDomDataPrefix + key, arguments[1]);
                    }
                };

                var templatesDomDataKey = ko.utils.domData.nextKey();
                function getTemplateDomData(element) {
                    return ko.utils.domData.get(element, templatesDomDataKey) || {};
                }
                function setTemplateDomData(element, data) {
                    ko.utils.domData.set(element, templatesDomDataKey, data);
                }

                ko.templateSources.domElement.prototype['nodes'] = function () /* valueToWrite */{
                    var element = this.domElement;
                    if (arguments.length == 0) {
                        var templateData = getTemplateDomData(element),
                            containerData = templateData.containerData;
                        return containerData || (this.templateType === templateTemplate ? element.content : this.templateType === templateElement ? element : undefined);
                    } else {
                        var valueToWrite = arguments[0];
                        setTemplateDomData(element, { containerData: valueToWrite });
                    }
                };

                // ---- ko.templateSources.anonymousTemplate -----
                // Anonymous templates are normally saved/retrieved as DOM nodes through "nodes".
                // For compatibility, you can also read "text"; it will be serialized from the nodes on demand.
                // Writing to "text" is still supported, but then the template data will not be available as DOM nodes.

                ko.templateSources.anonymousTemplate = function (element) {
                    this.domElement = element;
                };
                ko.templateSources.anonymousTemplate.prototype = new ko.templateSources.domElement();
                ko.templateSources.anonymousTemplate.prototype.constructor = ko.templateSources.anonymousTemplate;
                ko.templateSources.anonymousTemplate.prototype['text'] = function () /* valueToWrite */{
                    if (arguments.length == 0) {
                        var templateData = getTemplateDomData(this.domElement);
                        if (templateData.textData === undefined && templateData.containerData) templateData.textData = templateData.containerData.innerHTML;
                        return templateData.textData;
                    } else {
                        var valueToWrite = arguments[0];
                        setTemplateDomData(this.domElement, { textData: valueToWrite });
                    }
                };

                ko.exportSymbol('templateSources', ko.templateSources);
                ko.exportSymbol('templateSources.domElement', ko.templateSources.domElement);
                ko.exportSymbol('templateSources.anonymousTemplate', ko.templateSources.anonymousTemplate);
            })();
            (function () {
                var _templateEngine;
                ko.setTemplateEngine = function (templateEngine) {
                    if (templateEngine != undefined && !(templateEngine instanceof ko.templateEngine)) throw new Error("templateEngine must inherit from ko.templateEngine");
                    _templateEngine = templateEngine;
                };

                function invokeForEachNodeInContinuousRange(firstNode, lastNode, action) {
                    var node,
                        nextInQueue = firstNode,
                        firstOutOfRangeNode = ko.virtualElements.nextSibling(lastNode);
                    while (nextInQueue && (node = nextInQueue) !== firstOutOfRangeNode) {
                        nextInQueue = ko.virtualElements.nextSibling(node);
                        action(node, nextInQueue);
                    }
                }

                function activateBindingsOnContinuousNodeArray(continuousNodeArray, bindingContext) {
                    // To be used on any nodes that have been rendered by a template and have been inserted into some parent element
                    // Walks through continuousNodeArray (which *must* be continuous, i.e., an uninterrupted sequence of sibling nodes, because
                    // the algorithm for walking them relies on this), and for each top-level item in the virtual-element sense,
                    // (1) Does a regular "applyBindings" to associate bindingContext with this node and to activate any non-memoized bindings
                    // (2) Unmemoizes any memos in the DOM subtree (e.g., to activate bindings that had been memoized during template rewriting)

                    if (continuousNodeArray.length) {
                        var firstNode = continuousNodeArray[0],
                            lastNode = continuousNodeArray[continuousNodeArray.length - 1],
                            parentNode = firstNode.parentNode,
                            provider = ko.bindingProvider['instance'],
                            preprocessNode = provider['preprocessNode'];

                        if (preprocessNode) {
                            invokeForEachNodeInContinuousRange(firstNode, lastNode, function (node, nextNodeInRange) {
                                var nodePreviousSibling = node.previousSibling;
                                var newNodes = preprocessNode.call(provider, node);
                                if (newNodes) {
                                    if (node === firstNode) firstNode = newNodes[0] || nextNodeInRange;
                                    if (node === lastNode) lastNode = newNodes[newNodes.length - 1] || nodePreviousSibling;
                                }
                            });

                            // Because preprocessNode can change the nodes, including the first and last nodes, update continuousNodeArray to match.
                            // We need the full set, including inner nodes, because the unmemoize step might remove the first node (and so the real
                            // first node needs to be in the array).
                            continuousNodeArray.length = 0;
                            if (!firstNode) {
                                // preprocessNode might have removed all the nodes, in which case there's nothing left to do
                                return;
                            }
                            if (firstNode === lastNode) {
                                continuousNodeArray.push(firstNode);
                            } else {
                                continuousNodeArray.push(firstNode, lastNode);
                                ko.utils.fixUpContinuousNodeArray(continuousNodeArray, parentNode);
                            }
                        }

                        // Need to applyBindings *before* unmemoziation, because unmemoization might introduce extra nodes (that we don't want to re-bind)
                        // whereas a regular applyBindings won't introduce new memoized nodes
                        invokeForEachNodeInContinuousRange(firstNode, lastNode, function (node) {
                            if (node.nodeType === 1 || node.nodeType === 8) ko.applyBindings(bindingContext, node);
                        });
                        invokeForEachNodeInContinuousRange(firstNode, lastNode, function (node) {
                            if (node.nodeType === 1 || node.nodeType === 8) ko.memoization.unmemoizeDomNodeAndDescendants(node, [bindingContext]);
                        });

                        // Make sure any changes done by applyBindings or unmemoize are reflected in the array
                        ko.utils.fixUpContinuousNodeArray(continuousNodeArray, parentNode);
                    }
                }

                function getFirstNodeFromPossibleArray(nodeOrNodeArray) {
                    return nodeOrNodeArray.nodeType ? nodeOrNodeArray : nodeOrNodeArray.length > 0 ? nodeOrNodeArray[0] : null;
                }

                function executeTemplate(targetNodeOrNodeArray, renderMode, template, bindingContext, options) {
                    options = options || {};
                    var firstTargetNode = targetNodeOrNodeArray && getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
                    var templateDocument = (firstTargetNode || template || {}).ownerDocument;
                    var templateEngineToUse = options['templateEngine'] || _templateEngine;
                    ko.templateRewriting.ensureTemplateIsRewritten(template, templateEngineToUse, templateDocument);
                    var renderedNodesArray = templateEngineToUse['renderTemplate'](template, bindingContext, options, templateDocument);

                    // Loosely check result is an array of DOM nodes
                    if (typeof renderedNodesArray.length != "number" || renderedNodesArray.length > 0 && typeof renderedNodesArray[0].nodeType != "number") throw new Error("Template engine must return an array of DOM nodes");

                    var haveAddedNodesToParent = false;
                    switch (renderMode) {
                        case "replaceChildren":
                            ko.virtualElements.setDomNodeChildren(targetNodeOrNodeArray, renderedNodesArray);
                            haveAddedNodesToParent = true;
                            break;
                        case "replaceNode":
                            ko.utils.replaceDomNodes(targetNodeOrNodeArray, renderedNodesArray);
                            haveAddedNodesToParent = true;
                            break;
                        case "ignoreTargetNode":
                            break;
                        default:
                            throw new Error("Unknown renderMode: " + renderMode);
                    }

                    if (haveAddedNodesToParent) {
                        activateBindingsOnContinuousNodeArray(renderedNodesArray, bindingContext);
                        if (options['afterRender']) ko.dependencyDetection.ignore(options['afterRender'], null, [renderedNodesArray, bindingContext['$data']]);
                    }

                    return renderedNodesArray;
                }

                function resolveTemplateName(template, data, context) {
                    // The template can be specified as:
                    if (ko.isObservable(template)) {
                        // 1. An observable, with string value
                        return template();
                    } else if (typeof template === 'function') {
                        // 2. A function of (data, context) returning a string
                        return template(data, context);
                    } else {
                        // 3. A string
                        return template;
                    }
                }

                ko.renderTemplate = function (template, dataOrBindingContext, options, targetNodeOrNodeArray, renderMode) {
                    options = options || {};
                    if ((options['templateEngine'] || _templateEngine) == undefined) throw new Error("Set a template engine before calling renderTemplate");
                    renderMode = renderMode || "replaceChildren";

                    if (targetNodeOrNodeArray) {
                        var firstTargetNode = getFirstNodeFromPossibleArray(targetNodeOrNodeArray);

                        var whenToDispose = function whenToDispose() {
                            return !firstTargetNode || !ko.utils.domNodeIsAttachedToDocument(firstTargetNode);
                        }; // Passive disposal (on next evaluation)
                        var activelyDisposeWhenNodeIsRemoved = firstTargetNode && renderMode == "replaceNode" ? firstTargetNode.parentNode : firstTargetNode;

                        return ko.dependentObservable( // So the DOM is automatically updated when any dependency changes
                        function () {
                            // Ensure we've got a proper binding context to work with
                            var bindingContext = dataOrBindingContext && dataOrBindingContext instanceof ko.bindingContext ? dataOrBindingContext : new ko.bindingContext(dataOrBindingContext, null, null, null, { "exportDependencies": true });

                            var templateName = resolveTemplateName(template, bindingContext['$data'], bindingContext),
                                renderedNodesArray = executeTemplate(targetNodeOrNodeArray, renderMode, templateName, bindingContext, options);

                            if (renderMode == "replaceNode") {
                                targetNodeOrNodeArray = renderedNodesArray;
                                firstTargetNode = getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
                            }
                        }, null, { disposeWhen: whenToDispose, disposeWhenNodeIsRemoved: activelyDisposeWhenNodeIsRemoved });
                    } else {
                        // We don't yet have a DOM node to evaluate, so use a memo and render the template later when there is a DOM node
                        return ko.memoization.memoize(function (domNode) {
                            ko.renderTemplate(template, dataOrBindingContext, options, domNode, "replaceNode");
                        });
                    }
                };

                ko.renderTemplateForEach = function (template, arrayOrObservableArray, options, targetNode, parentBindingContext) {
                    // Since setDomNodeChildrenFromArrayMapping always calls executeTemplateForArrayItem and then
                    // activateBindingsCallback for added items, we can store the binding context in the former to use in the latter.
                    var arrayItemContext;

                    // This will be called by setDomNodeChildrenFromArrayMapping to get the nodes to add to targetNode
                    var executeTemplateForArrayItem = function executeTemplateForArrayItem(arrayValue, index) {
                        // Support selecting template as a function of the data being rendered
                        arrayItemContext = parentBindingContext['createChildContext'](arrayValue, options['as'], function (context) {
                            context['$index'] = index;
                        });

                        var templateName = resolveTemplateName(template, arrayValue, arrayItemContext);
                        return executeTemplate(null, "ignoreTargetNode", templateName, arrayItemContext, options);
                    };

                    // This will be called whenever setDomNodeChildrenFromArrayMapping has added nodes to targetNode
                    var activateBindingsCallback = function activateBindingsCallback(arrayValue, addedNodesArray, index) {
                        activateBindingsOnContinuousNodeArray(addedNodesArray, arrayItemContext);
                        if (options['afterRender']) options['afterRender'](addedNodesArray, arrayValue);

                        // release the "cache" variable, so that it can be collected by
                        // the GC when its value isn't used from within the bindings anymore.
                        arrayItemContext = null;
                    };

                    return ko.dependentObservable(function () {
                        var unwrappedArray = ko.utils.unwrapObservable(arrayOrObservableArray) || [];
                        if (typeof unwrappedArray.length == "undefined") // Coerce single value into array
                            unwrappedArray = [unwrappedArray];

                        // Filter out any entries marked as destroyed
                        var filteredArray = ko.utils.arrayFilter(unwrappedArray, function (item) {
                            return options['includeDestroyed'] || item === undefined || item === null || !ko.utils.unwrapObservable(item['_destroy']);
                        });

                        // Call setDomNodeChildrenFromArrayMapping, ignoring any observables unwrapped within (most likely from a callback function).
                        // If the array items are observables, though, they will be unwrapped in executeTemplateForArrayItem and managed within setDomNodeChildrenFromArrayMapping.
                        ko.dependencyDetection.ignore(ko.utils.setDomNodeChildrenFromArrayMapping, null, [targetNode, filteredArray, executeTemplateForArrayItem, options, activateBindingsCallback]);
                    }, null, { disposeWhenNodeIsRemoved: targetNode });
                };

                var templateComputedDomDataKey = ko.utils.domData.nextKey();
                function disposeOldComputedAndStoreNewOne(element, newComputed) {
                    var oldComputed = ko.utils.domData.get(element, templateComputedDomDataKey);
                    if (oldComputed && typeof oldComputed.dispose == 'function') oldComputed.dispose();
                    ko.utils.domData.set(element, templateComputedDomDataKey, newComputed && newComputed.isActive() ? newComputed : undefined);
                }

                ko.bindingHandlers['template'] = {
                    'init': function init(element, valueAccessor) {
                        // Support anonymous templates
                        var bindingValue = ko.utils.unwrapObservable(valueAccessor());
                        if (typeof bindingValue == "string" || bindingValue['name']) {
                            // It's a named template - clear the element
                            ko.virtualElements.emptyNode(element);
                        } else if ('nodes' in bindingValue) {
                            // We've been given an array of DOM nodes. Save them as the template source.
                            // There is no known use case for the node array being an observable array (if the output
                            // varies, put that behavior *into* your template - that's what templates are for), and
                            // the implementation would be a mess, so assert that it's not observable.
                            var nodes = bindingValue['nodes'] || [];
                            if (ko.isObservable(nodes)) {
                                throw new Error('The "nodes" option must be a plain, non-observable array.');
                            }
                            var container = ko.utils.moveCleanedNodesToContainerElement(nodes); // This also removes the nodes from their current parent
                            new ko.templateSources.anonymousTemplate(element)['nodes'](container);
                        } else {
                            // It's an anonymous template - store the element contents, then clear the element
                            var templateNodes = ko.virtualElements.childNodes(element),
                                container = ko.utils.moveCleanedNodesToContainerElement(templateNodes); // This also removes the nodes from their current parent
                            new ko.templateSources.anonymousTemplate(element)['nodes'](container);
                        }
                        return { 'controlsDescendantBindings': true };
                    },
                    'update': function update(element, valueAccessor, allBindings, viewModel, bindingContext) {
                        var value = valueAccessor(),
                            options = ko.utils.unwrapObservable(value),
                            shouldDisplay = true,
                            templateComputed = null,
                            templateName;

                        if (typeof options == "string") {
                            templateName = value;
                            options = {};
                        } else {
                            templateName = options['name'];

                            // Support "if"/"ifnot" conditions
                            if ('if' in options) shouldDisplay = ko.utils.unwrapObservable(options['if']);
                            if (shouldDisplay && 'ifnot' in options) shouldDisplay = !ko.utils.unwrapObservable(options['ifnot']);
                        }

                        if ('foreach' in options) {
                            // Render once for each data point (treating data set as empty if shouldDisplay==false)
                            var dataArray = shouldDisplay && options['foreach'] || [];
                            templateComputed = ko.renderTemplateForEach(templateName || element, dataArray, options, element, bindingContext);
                        } else if (!shouldDisplay) {
                            ko.virtualElements.emptyNode(element);
                        } else {
                            // Render once for this single data point (or use the viewModel if no data was provided)
                            var innerBindingContext = 'data' in options ? bindingContext.createStaticChildContext(options['data'], options['as']) : // Given an explitit 'data' value, we create a child binding context for it
                            bindingContext; // Given no explicit 'data' value, we retain the same binding context
                            templateComputed = ko.renderTemplate(templateName || element, innerBindingContext, options, element);
                        }

                        // It only makes sense to have a single template computed per element (otherwise which one should have its output displayed?)
                        disposeOldComputedAndStoreNewOne(element, templateComputed);
                    }
                };

                // Anonymous templates can't be rewritten. Give a nice error message if you try to do it.
                ko.expressionRewriting.bindingRewriteValidators['template'] = function (bindingValue) {
                    var parsedBindingValue = ko.expressionRewriting.parseObjectLiteral(bindingValue);

                    if (parsedBindingValue.length == 1 && parsedBindingValue[0]['unknown']) return null; // It looks like a string literal, not an object literal, so treat it as a named template (which is allowed for rewriting)

                    if (ko.expressionRewriting.keyValueArrayContainsKey(parsedBindingValue, "name")) return null; // Named templates can be rewritten, so return "no error"
                    return "This template engine does not support anonymous templates nested within its templates";
                };

                ko.virtualElements.allowedBindings['template'] = true;
            })();

            ko.exportSymbol('setTemplateEngine', ko.setTemplateEngine);
            ko.exportSymbol('renderTemplate', ko.renderTemplate);
            // Go through the items that have been added and deleted and try to find matches between them.
            ko.utils.findMovesInArrayComparison = function (left, right, limitFailedCompares) {
                if (left.length && right.length) {
                    var failedCompares, l, r, leftItem, rightItem;
                    for (failedCompares = l = 0; (!limitFailedCompares || failedCompares < limitFailedCompares) && (leftItem = left[l]); ++l) {
                        for (r = 0; rightItem = right[r]; ++r) {
                            if (leftItem['value'] === rightItem['value']) {
                                leftItem['moved'] = rightItem['index'];
                                rightItem['moved'] = leftItem['index'];
                                right.splice(r, 1); // This item is marked as moved; so remove it from right list
                                failedCompares = r = 0; // Reset failed compares count because we're checking for consecutive failures
                                break;
                            }
                        }
                        failedCompares += r;
                    }
                }
            };

            ko.utils.compareArrays = function () {
                var statusNotInOld = 'added',
                    statusNotInNew = 'deleted';

                // Simple calculation based on Levenshtein distance.
                function compareArrays(oldArray, newArray, options) {
                    // For backward compatibility, if the third arg is actually a bool, interpret
                    // it as the old parameter 'dontLimitMoves'. Newer code should use { dontLimitMoves: true }.
                    options = typeof options === 'boolean' ? { 'dontLimitMoves': options } : options || {};
                    oldArray = oldArray || [];
                    newArray = newArray || [];

                    if (oldArray.length < newArray.length) return compareSmallArrayToBigArray(oldArray, newArray, statusNotInOld, statusNotInNew, options);else return compareSmallArrayToBigArray(newArray, oldArray, statusNotInNew, statusNotInOld, options);
                }

                function compareSmallArrayToBigArray(smlArray, bigArray, statusNotInSml, statusNotInBig, options) {
                    var myMin = Math.min,
                        myMax = Math.max,
                        editDistanceMatrix = [],
                        smlIndex,
                        smlIndexMax = smlArray.length,
                        bigIndex,
                        bigIndexMax = bigArray.length,
                        compareRange = bigIndexMax - smlIndexMax || 1,
                        maxDistance = smlIndexMax + bigIndexMax + 1,
                        thisRow,
                        lastRow,
                        bigIndexMaxForRow,
                        bigIndexMinForRow;

                    for (smlIndex = 0; smlIndex <= smlIndexMax; smlIndex++) {
                        lastRow = thisRow;
                        editDistanceMatrix.push(thisRow = []);
                        bigIndexMaxForRow = myMin(bigIndexMax, smlIndex + compareRange);
                        bigIndexMinForRow = myMax(0, smlIndex - 1);
                        for (bigIndex = bigIndexMinForRow; bigIndex <= bigIndexMaxForRow; bigIndex++) {
                            if (!bigIndex) thisRow[bigIndex] = smlIndex + 1;else if (!smlIndex) // Top row - transform empty array into new array via additions
                                thisRow[bigIndex] = bigIndex + 1;else if (smlArray[smlIndex - 1] === bigArray[bigIndex - 1]) thisRow[bigIndex] = lastRow[bigIndex - 1]; // copy value (no edit)
                            else {
                                    var northDistance = lastRow[bigIndex] || maxDistance; // not in big (deletion)
                                    var westDistance = thisRow[bigIndex - 1] || maxDistance; // not in small (addition)
                                    thisRow[bigIndex] = myMin(northDistance, westDistance) + 1;
                                }
                        }
                    }

                    var editScript = [],
                        meMinusOne,
                        notInSml = [],
                        notInBig = [];
                    for (smlIndex = smlIndexMax, bigIndex = bigIndexMax; smlIndex || bigIndex;) {
                        meMinusOne = editDistanceMatrix[smlIndex][bigIndex] - 1;
                        if (bigIndex && meMinusOne === editDistanceMatrix[smlIndex][bigIndex - 1]) {
                            notInSml.push(editScript[editScript.length] = { // added
                                'status': statusNotInSml,
                                'value': bigArray[--bigIndex],
                                'index': bigIndex });
                        } else if (smlIndex && meMinusOne === editDistanceMatrix[smlIndex - 1][bigIndex]) {
                            notInBig.push(editScript[editScript.length] = { // deleted
                                'status': statusNotInBig,
                                'value': smlArray[--smlIndex],
                                'index': smlIndex });
                        } else {
                            --bigIndex;
                            --smlIndex;
                            if (!options['sparse']) {
                                editScript.push({
                                    'status': "retained",
                                    'value': bigArray[bigIndex] });
                            }
                        }
                    }

                    // Set a limit on the number of consecutive non-matching comparisons; having it a multiple of
                    // smlIndexMax keeps the time complexity of this algorithm linear.
                    ko.utils.findMovesInArrayComparison(notInBig, notInSml, !options['dontLimitMoves'] && smlIndexMax * 10);

                    return editScript.reverse();
                }

                return compareArrays;
            }();

            ko.exportSymbol('utils.compareArrays', ko.utils.compareArrays);
            (function () {
                // Objective:
                // * Given an input array, a container DOM node, and a function from array elements to arrays of DOM nodes,
                //   map the array elements to arrays of DOM nodes, concatenate together all these arrays, and use them to populate the container DOM node
                // * Next time we're given the same combination of things (with the array possibly having mutated), update the container DOM node
                //   so that its children is again the concatenation of the mappings of the array elements, but don't re-map any array elements that we
                //   previously mapped - retain those nodes, and just insert/delete other ones

                // "callbackAfterAddingNodes" will be invoked after any "mapping"-generated nodes are inserted into the container node
                // You can use this, for example, to activate bindings on those nodes.

                function mapNodeAndRefreshWhenChanged(containerNode, mapping, valueToMap, callbackAfterAddingNodes, index) {
                    // Map this array value inside a dependentObservable so we re-map when any dependency changes
                    var mappedNodes = [];
                    var dependentObservable = ko.dependentObservable(function () {
                        var newMappedNodes = mapping(valueToMap, index, ko.utils.fixUpContinuousNodeArray(mappedNodes, containerNode)) || [];

                        // On subsequent evaluations, just replace the previously-inserted DOM nodes
                        if (mappedNodes.length > 0) {
                            ko.utils.replaceDomNodes(mappedNodes, newMappedNodes);
                            if (callbackAfterAddingNodes) ko.dependencyDetection.ignore(callbackAfterAddingNodes, null, [valueToMap, newMappedNodes, index]);
                        }

                        // Replace the contents of the mappedNodes array, thereby updating the record
                        // of which nodes would be deleted if valueToMap was itself later removed
                        mappedNodes.length = 0;
                        ko.utils.arrayPushAll(mappedNodes, newMappedNodes);
                    }, null, { disposeWhenNodeIsRemoved: containerNode, disposeWhen: function disposeWhen() {
                            return !ko.utils.anyDomNodeIsAttachedToDocument(mappedNodes);
                        } });
                    return { mappedNodes: mappedNodes, dependentObservable: dependentObservable.isActive() ? dependentObservable : undefined };
                }

                var lastMappingResultDomDataKey = ko.utils.domData.nextKey(),
                    deletedItemDummyValue = ko.utils.domData.nextKey();

                ko.utils.setDomNodeChildrenFromArrayMapping = function (domNode, array, mapping, options, callbackAfterAddingNodes) {
                    // Compare the provided array against the previous one
                    array = array || [];
                    options = options || {};
                    var isFirstExecution = ko.utils.domData.get(domNode, lastMappingResultDomDataKey) === undefined;
                    var lastMappingResult = ko.utils.domData.get(domNode, lastMappingResultDomDataKey) || [];
                    var lastArray = ko.utils.arrayMap(lastMappingResult, function (x) {
                        return x.arrayEntry;
                    });
                    var editScript = ko.utils.compareArrays(lastArray, array, options['dontLimitMoves']);

                    // Build the new mapping result
                    var newMappingResult = [];
                    var lastMappingResultIndex = 0;
                    var newMappingResultIndex = 0;

                    var nodesToDelete = [];
                    var itemsToProcess = [];
                    var itemsForBeforeRemoveCallbacks = [];
                    var itemsForMoveCallbacks = [];
                    var itemsForAfterAddCallbacks = [];
                    var mapData;

                    function itemMovedOrRetained(editScriptIndex, oldPosition) {
                        mapData = lastMappingResult[oldPosition];
                        if (newMappingResultIndex !== oldPosition) itemsForMoveCallbacks[editScriptIndex] = mapData;
                        // Since updating the index might change the nodes, do so before calling fixUpContinuousNodeArray
                        mapData.indexObservable(newMappingResultIndex++);
                        ko.utils.fixUpContinuousNodeArray(mapData.mappedNodes, domNode);
                        newMappingResult.push(mapData);
                        itemsToProcess.push(mapData);
                    }

                    function callCallback(callback, items) {
                        if (callback) {
                            for (var i = 0, n = items.length; i < n; i++) {
                                if (items[i]) {
                                    ko.utils.arrayForEach(items[i].mappedNodes, function (node) {
                                        callback(node, i, items[i].arrayEntry);
                                    });
                                }
                            }
                        }
                    }

                    for (var i = 0, editScriptItem, movedIndex; editScriptItem = editScript[i]; i++) {
                        movedIndex = editScriptItem['moved'];
                        switch (editScriptItem['status']) {
                            case "deleted":
                                if (movedIndex === undefined) {
                                    mapData = lastMappingResult[lastMappingResultIndex];

                                    // Stop tracking changes to the mapping for these nodes
                                    if (mapData.dependentObservable) {
                                        mapData.dependentObservable.dispose();
                                        mapData.dependentObservable = undefined;
                                    }

                                    // Queue these nodes for later removal
                                    if (ko.utils.fixUpContinuousNodeArray(mapData.mappedNodes, domNode).length) {
                                        if (options['beforeRemove']) {
                                            newMappingResult.push(mapData);
                                            itemsToProcess.push(mapData);
                                            if (mapData.arrayEntry === deletedItemDummyValue) {
                                                mapData = null;
                                            } else {
                                                itemsForBeforeRemoveCallbacks[i] = mapData;
                                            }
                                        }
                                        if (mapData) {
                                            nodesToDelete.push.apply(nodesToDelete, mapData.mappedNodes);
                                        }
                                    }
                                }
                                lastMappingResultIndex++;
                                break;

                            case "retained":
                                itemMovedOrRetained(i, lastMappingResultIndex++);
                                break;

                            case "added":
                                if (movedIndex !== undefined) {
                                    itemMovedOrRetained(i, movedIndex);
                                } else {
                                    mapData = { arrayEntry: editScriptItem['value'], indexObservable: ko.observable(newMappingResultIndex++) };
                                    newMappingResult.push(mapData);
                                    itemsToProcess.push(mapData);
                                    if (!isFirstExecution) itemsForAfterAddCallbacks[i] = mapData;
                                }
                                break;
                        }
                    }

                    // Store a copy of the array items we just considered so we can difference it next time
                    ko.utils.domData.set(domNode, lastMappingResultDomDataKey, newMappingResult);

                    // Call beforeMove first before any changes have been made to the DOM
                    callCallback(options['beforeMove'], itemsForMoveCallbacks);

                    // Next remove nodes for deleted items (or just clean if there's a beforeRemove callback)
                    ko.utils.arrayForEach(nodesToDelete, options['beforeRemove'] ? ko.cleanNode : ko.removeNode);

                    // Next add/reorder the remaining items (will include deleted items if there's a beforeRemove callback)
                    for (var i = 0, nextNode = ko.virtualElements.firstChild(domNode), lastNode, node; mapData = itemsToProcess[i]; i++) {
                        // Get nodes for newly added items
                        if (!mapData.mappedNodes) ko.utils.extend(mapData, mapNodeAndRefreshWhenChanged(domNode, mapping, mapData.arrayEntry, callbackAfterAddingNodes, mapData.indexObservable));

                        // Put nodes in the right place if they aren't there already
                        for (var j = 0; node = mapData.mappedNodes[j]; nextNode = node.nextSibling, lastNode = node, j++) {
                            if (node !== nextNode) ko.virtualElements.insertAfter(domNode, node, lastNode);
                        }

                        // Run the callbacks for newly added nodes (for example, to apply bindings, etc.)
                        if (!mapData.initialized && callbackAfterAddingNodes) {
                            callbackAfterAddingNodes(mapData.arrayEntry, mapData.mappedNodes, mapData.indexObservable);
                            mapData.initialized = true;
                        }
                    }

                    // If there's a beforeRemove callback, call it after reordering.
                    // Note that we assume that the beforeRemove callback will usually be used to remove the nodes using
                    // some sort of animation, which is why we first reorder the nodes that will be removed. If the
                    // callback instead removes the nodes right away, it would be more efficient to skip reordering them.
                    // Perhaps we'll make that change in the future if this scenario becomes more common.
                    callCallback(options['beforeRemove'], itemsForBeforeRemoveCallbacks);

                    // Replace the stored values of deleted items with a dummy value. This provides two benefits: it marks this item
                    // as already "removed" so we won't call beforeRemove for it again, and it ensures that the item won't match up
                    // with an actual item in the array and appear as "retained" or "moved".
                    for (i = 0; i < itemsForBeforeRemoveCallbacks.length; ++i) {
                        if (itemsForBeforeRemoveCallbacks[i]) {
                            itemsForBeforeRemoveCallbacks[i].arrayEntry = deletedItemDummyValue;
                        }
                    }

                    // Finally call afterMove and afterAdd callbacks
                    callCallback(options['afterMove'], itemsForMoveCallbacks);
                    callCallback(options['afterAdd'], itemsForAfterAddCallbacks);
                };
            })();

            ko.exportSymbol('utils.setDomNodeChildrenFromArrayMapping', ko.utils.setDomNodeChildrenFromArrayMapping);
            ko.nativeTemplateEngine = function () {
                this['allowTemplateRewriting'] = false;
            };

            ko.nativeTemplateEngine.prototype = new ko.templateEngine();
            ko.nativeTemplateEngine.prototype.constructor = ko.nativeTemplateEngine;
            ko.nativeTemplateEngine.prototype['renderTemplateSource'] = function (templateSource, bindingContext, options, templateDocument) {
                var useNodesIfAvailable = !(ko.utils.ieVersion < 9),
                    // IE<9 cloneNode doesn't work properly
                templateNodesFunc = useNodesIfAvailable ? templateSource['nodes'] : null,
                    templateNodes = templateNodesFunc ? templateSource['nodes']() : null;

                if (templateNodes) {
                    return ko.utils.makeArray(templateNodes.cloneNode(true).childNodes);
                } else {
                    var templateText = templateSource['text']();
                    return ko.utils.parseHtmlFragment(templateText, templateDocument);
                }
            };

            ko.nativeTemplateEngine.instance = new ko.nativeTemplateEngine();
            ko.setTemplateEngine(ko.nativeTemplateEngine.instance);

            ko.exportSymbol('nativeTemplateEngine', ko.nativeTemplateEngine);
            (function () {
                ko.jqueryTmplTemplateEngine = function () {
                    // Detect which version of jquery-tmpl you're using. Unfortunately jquery-tmpl
                    // doesn't expose a version number, so we have to infer it.
                    // Note that as of Knockout 1.3, we only support jQuery.tmpl 1.0.0pre and later,
                    // which KO internally refers to as version "2", so older versions are no longer detected.
                    var jQueryTmplVersion = this.jQueryTmplVersion = function () {
                        if (!jQueryInstance || !jQueryInstance['tmpl']) return 0;
                        // Since it exposes no official version number, we use our own numbering system. To be updated as jquery-tmpl evolves.
                        try {
                            if (jQueryInstance['tmpl']['tag']['tmpl']['open'].toString().indexOf('__') >= 0) {
                                // Since 1.0.0pre, custom tags should append markup to an array called "__"
                                return 2; // Final version of jquery.tmpl
                            }
                        } catch (ex) {/* Apparently not the version we were looking for */}

                        return 1; // Any older version that we don't support
                    }();

                    function ensureHasReferencedJQueryTemplates() {
                        if (jQueryTmplVersion < 2) throw new Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                    }

                    function executeTemplate(compiledTemplate, data, jQueryTemplateOptions) {
                        return jQueryInstance['tmpl'](compiledTemplate, data, jQueryTemplateOptions);
                    }

                    this['renderTemplateSource'] = function (templateSource, bindingContext, options, templateDocument) {
                        templateDocument = templateDocument || document;
                        options = options || {};
                        ensureHasReferencedJQueryTemplates();

                        // Ensure we have stored a precompiled version of this template (don't want to reparse on every render)
                        var precompiled = templateSource['data']('precompiled');
                        if (!precompiled) {
                            var templateText = templateSource['text']() || "";
                            // Wrap in "with($whatever.koBindingContext) { ... }"
                            templateText = "{{ko_with $item.koBindingContext}}" + templateText + "{{/ko_with}}";

                            precompiled = jQueryInstance['template'](null, templateText);
                            templateSource['data']('precompiled', precompiled);
                        }

                        var data = [bindingContext['$data']]; // Prewrap the data in an array to stop jquery.tmpl from trying to unwrap any arrays
                        var jQueryTemplateOptions = jQueryInstance['extend']({ 'koBindingContext': bindingContext }, options['templateOptions']);

                        var resultNodes = executeTemplate(precompiled, data, jQueryTemplateOptions);
                        resultNodes['appendTo'](templateDocument.createElement("div")); // Using "appendTo" forces jQuery/jQuery.tmpl to perform necessary cleanup work

                        jQueryInstance['fragments'] = {}; // Clear jQuery's fragment cache to avoid a memory leak after a large number of template renders
                        return resultNodes;
                    };

                    this['createJavaScriptEvaluatorBlock'] = function (script) {
                        return "{{ko_code ((function() { return " + script + " })()) }}";
                    };

                    this['addTemplate'] = function (templateName, templateMarkup) {
                        document.write("<script type='text/html' id='" + templateName + "'>" + templateMarkup + "<" + "/script>");
                    };

                    if (jQueryTmplVersion > 0) {
                        jQueryInstance['tmpl']['tag']['ko_code'] = {
                            open: "__.push($1 || '');"
                        };
                        jQueryInstance['tmpl']['tag']['ko_with'] = {
                            open: "with($1) {",
                            close: "} "
                        };
                    }
                };

                ko.jqueryTmplTemplateEngine.prototype = new ko.templateEngine();
                ko.jqueryTmplTemplateEngine.prototype.constructor = ko.jqueryTmplTemplateEngine;

                // Use this one by default *only if jquery.tmpl is referenced*
                var jqueryTmplTemplateEngineInstance = new ko.jqueryTmplTemplateEngine();
                if (jqueryTmplTemplateEngineInstance.jQueryTmplVersion > 0) ko.setTemplateEngine(jqueryTmplTemplateEngineInstance);

                ko.exportSymbol('jqueryTmplTemplateEngine', ko.jqueryTmplTemplateEngine);
            })();
        });
    })();
})();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(18);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(7);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(7);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icon_base = '/dist/assets/icons/';

var gmap = {
  map: null,
  markers: [],
  activeMarker: null,
  locations: [{
    lat: 33.808605,
    lng: 10.990073,
    title: 'Pizza A L\'italienne بيتزا الذوق الرفيع',
    type: 'restaurant',
    filter: 'restaurant'
  }, {
    lat: 33.784321,
    lng: 11.057903,
    title: 'Essaguia beach',
    type: 'point_of_interest',
    filter: 'beach'
  }, {
    lat: 33.724279,
    lng: 10.975052,
    title: 'Ras el Kastil (Kastil stronghold)',
    type: 'monument',
    filter: 'monument'
  }, {
    lat: 33.879801,
    lng: 10.862366,
    title: 'Djerbian cultural heritage museum',
    type: 'museum',
    filter: 'museum'
  }, {
    lat: 33.880294,
    lng: 10.856733,
    title: 'Pappagallo italian restaurant',
    type: 'restaurant',
    filter: 'restaurant'
  }, {
    lat: 33.814457,
    lng: 11.054762,
    title: 'Yéti beach',
    type: 'point_of_interest',
    filter: 'beach'
  }, {
    lat: 33.732550,
    lng: 10.865716,
    title: 'Guellala Museum',
    type: 'museum',
    filter: 'museum'
  }, {
    lat: 33.632006,
    lng: 10.909170,
    title: 'Borj El Akrab',
    type: 'monument',
    filter: 'monument'
  }, {
    lat: 33.819763,
    lng: 11.045033,
    title: 'Lalla Hadria Museum',
    type: 'museum',
    filter: 'museum'
  }, {
    lat: 33.821267,
    lng: 10.854319,
    title: 'Djerbahood',
    type: 'museum',
    filter: 'museum'
  }]
};

var icons = {
  beach: icon_base + 'beach.svg',
  restaurant: icon_base + 'lunch.svg',
  monument: icon_base + 'monument.svg',
  museum: icon_base + 'museum.svg'
};

var filters = [{
  icon: icons.beach,
  text: 'beach',
  types: ['beach']
}, {
  icon: icons.restaurant,
  text: 'restaurant',
  types: ['restaurant']
}, {
  icon: icons.monument,
  text: 'monument',
  types: ['Fortress', 'monument']
}, {
  icon: icons.museum,
  text: 'museum',
  types: ['museum', 'point_of_interest']
}];

module.exports = {
  gmap: gmap,
  filters: filters,
  icons: icons
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _models = __webpack_require__(3);

var _axios = __webpack_require__(14);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initDOM = function initDOM() {
  // Initialize the map with a center;
  var midoun = new google.maps.LatLng(33.807279, 10.991097);
  _models.gmap.center = midoun;
  _models.gmap.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: midoun,
    mapTypeId: 'satellite',
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_CENTER
    }
  });

  // create markers with custom icons for the locations.
  _models.gmap.locations = _models.gmap.locations.map(function (location) {
    var latLng = new google.maps.LatLng(location.lat, location.lng);
    var icon = {
      url: _models.icons[location.filter],
      size: new google.maps.Size(48, 48),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };

    var marker = new google.maps.Marker({ position: latLng, icon: icon });
    marker.setMap(_models.gmap.map);
    marker.setAnimation(null);
    marker.addListener('click', showPlace);
    // keep a location reference in the marker object, this was done to make
    // displaying the location info when clicking a marker on the map easier.
    marker.location = location;

    // keep a reference of all the markers.
    _models.gmap.markers.push(marker);

    // keep a marker reference in the location object so that the ko view can
    // pass it along when calling showPlace.
    // NOTE: initially, the marker is unaware of the location object which holds the location info
    //       also the location object is unaware of the marker being created for it, storing a reference
    //       to each one is the only way i could think of.
    // the ... syntax is a ES7 spread which represents all the object attributes.
    var newLocation = _extends({}, location, {
      marker: marker
    });
    return newLocation;
  });
  // replace the locations object by the newly created one which holds the marker references.
  _models.gmap.places = new google.maps.places.PlacesService(_models.gmap.map);

  // bind a function to the button that hides the info of a location.
  document.querySelector("#hidePlace").addEventListener("click", hidePlace);
};

var hidePlace = function hidePlace() {
  // Hide the place info and display the locations.
  var placeEl = document.querySelector(".place");
  var locations = document.querySelector("#locations");
  var status = document.querySelector(".status");
  placeEl.style.display = "none";
  locations.style.display = "block";
  status.style.display = "none";
  deanimateMarker(_models.gmap.activeMarker);
};

/**
 * Request a location info from both google maps places api and wikipedia.
 * this function is dynamically bound, it was made so that it can be used by both
 * the map and knockout.
 */
var showPlace = function showPlace() {
  var self = this;
  var coords = new google.maps.LatLng(this.location.lat, this.location.lng);
  var service = new google.maps.places.PlacesService(_models.gmap.map);

  animateMarker(this);

  // initialize the place info with what we already have.
  var place = {};
  place.title = this.location.title;
  place.lat = this.location.lat;
  place.lng = this.location.lng;

  showStatus("Please wait while we fetch location info ...");
  service.nearbySearch({
    location: coords,
    type: [self.location.type],
    keywords: self.location.title,
    radius: 5,
    rankby: "distance"
  }, function (response) {
    // google maps nearbySearch api returns an empty array when connection is lost.
    if (response.length === 0) {
      showStatus("connection lost, make sure you have a stable internet connection ...");
      return;
    }
    _models.gmap.places.getDetails({
      placeId: response[0].place_id
    }, function (response) {
      // google maps getDetails api returns an empty array when connection is lost.
      if ((typeof response === 'undefined' ? 'undefined' : _typeof(response)) === _typeof([]) && response.length === 0) {
        console.log("lost");
        showStatus("connection lost, make sure you have a stable internet connection ...");
        return;
      }
      // add the received info from google maps places api to the place object.
      place.address = response.formatted_address;
      place.types = response.types;
      place.photo = {};
      place.photo.url = response.photos[0].getUrl({ maxWidth: 500 });
      place.photo.attribution = response.photos[0].html_attributions[0];

      // fetch info from wikipedia, using an 'extracts' prop to get just the summary of the article.
      _axios2.default.get('https://en.wikipedia.org/w/api.php', {
        params: {
          origin: '*',
          action: 'query',
          titles: response.name,
          prop: 'extracts',
          inprop: 'url',
          exintro: 'explaintext',
          format: 'json'
        }
      }).then(function (wikiResponse) {
        place.summary = {};
        // wikipedia returns a pages with and id of -1 if there's no result.
        if (wikiResponse.data.query.pages['-1']) {
          place.summary.text = null;
          place.summary.attribution = '';
        } else {
          var pages = wikiResponse.data.query.pages;
          var page = pages[Object.keys(pages)[0]];
          place.summary.text = page.extract;
          place.summary.attribution = 'https://en.wikipedia.org/?curid=' + page.pageid;
        }

        // render the place object.
        renderPlace(place);
      }).catch(function (response) {
        showStatus("connection lost, make sure you have a stable internet connection ...");
      });
    });
  });
};

/**
 * renders a status message.
 * @param {string} message - message to show.
 */
var showStatus = function showStatus(message) {
  var nav = document.querySelector(".map-nav");
  var el = document.querySelector(".status");
  var locations = document.querySelector("#locations");
  var btnShow = document.querySelector(".show");

  // display the status block.
  el.style.display = "block";
  el.innerText = message;

  // hide the locations block;
  locations.style.display = "none";

  // show the navigation menu in case it was already hidden.
  nav.style.display = "block";
  btnShow.style.display = "none";
};

/**
 * renders the location.
 * @param {Object} place - an object that holds the place info.
 */
var renderPlace = function renderPlace(place) {
  var placeEl = document.querySelector(".place");
  var status = document.querySelector(".status");

  // hide the status block and show the place info block;
  status.style.display = "none";
  placeEl.style.display = "block";

  placeEl.querySelector(".place-title").innerText = place.title;
  placeEl.querySelector(".place-address").innerText = place.address;
  placeEl.querySelector(".place-picture").src = place.photo.url;
  placeEl.querySelector(".place-picture__attribution").href = place.photo.attribution;

  // render the coordinates
  var el = document.createElement("span");
  el.innerText = place.lat + ', ' + place.lng;
  placeEl.querySelector(".place-coords").innerHTML = "";
  placeEl.querySelector(".place-coords").appendChild(el);

  // render the place types.
  placeEl.querySelector(".place-types").innerHTML = "";
  place.types.forEach(function (type) {
    var el = document.createElement("span");
    el.innerText = type;
    placeEl.querySelector(".place-types").appendChild(el);
  });

  // render the wikipedia info if its there.
  if (place.summary.text) {
    placeEl.querySelector(".place-summary").style.display = "block";
    placeEl.querySelector(".place-summary p").innerHTML = place.summary.text;
    placeEl.querySelector(".place-summary__attribution").href = place.summary.attribution;
  } else {
    placeEl.querySelector(".place-summary").style.display = "none";
  }
};

/**
 * updates the markers visibility based on the provided active locations,
 * this is used by the menu filters and search autocomplete.
 *
 * @param {Object} activeLocations - the active locations to filter against.
 */
var updateMarkers = function updateMarkers(activeLocations) {
  var found = false;
  _models.gmap.markers.forEach(function (marker) {
    found = activeLocations().find(function (location) {
      // Find if location coords are equal to the marker coords.
      // uses the location reference in a marker.
      if (marker.location.lat === location.lat && marker.location.lng === location.lng) {
        return true;
      }
    });

    if (!found) {
      // hide the place block if its being shown.
      if (marker === _models.gmap.activeMarker) {
        hidePlace();
      }
      marker.setMap(null);
    } else {
      // applying setMap on the active marker would disable its bounce animation.
      if (marker === _models.gmap.activeMarker) return;
      marker.setMap(_models.gmap.map);
    }
  });
};

/**
 * bounce and zoom on a marker.
 * @param {Object} marker - the marker to apply animation on.
 */
var animateMarker = function animateMarker(marker) {
  marker.setAnimation(google.maps.Animation.BOUNCE);
  _models.gmap.map.panTo(marker.position);
  _models.gmap.map.setZoom(16);
  _models.gmap.activeMarker = marker;
};

/**
 * remove bounce animation from marker and reset initial zoom.
 * @param {Object} marker - the marker to deanimate.
 */
var deanimateMarker = function deanimateMarker(marker) {
  marker.setAnimation(null);
  _models.gmap.map.panTo(_models.gmap.center);
  _models.gmap.map.setZoom(12);
  _models.gmap.activeMarker = marker;
};

module.exports = {
  initDOM: initDOM,
  updateMarkers: updateMarkers,
  showPlace: showPlace
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(19);
var buildURL = __webpack_require__(21);
var parseHeaders = __webpack_require__(22);
var isURLSameOrigin = __webpack_require__(23);
var createError = __webpack_require__(8);
var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(24);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || request.readyState !== 4 && !xDomain) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(25);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(20);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

var _viewmodels = __webpack_require__(13);

var _service = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _service.initDOM)();

_knockout2.default.options.useOnlyNativeEvents = true;
_knockout2.default.applyBindings(new _viewmodels.LocationVM());

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

var _models = __webpack_require__(3);

var _service = __webpack_require__(4);

var _helpers = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LocationVM = function LocationVM() {
  var self = this;

  self.locations = _knockout2.default.observableArray(_models.gmap.locations);
  self.activeLocations = _knockout2.default.observableArray(_models.gmap.locations);

  // Adding an initial active state to the filter.
  self.filters = _knockout2.default.observableArray(_models.filters.map(function (filter) {
    return _extends({}, filter, { active: false });
  }));
  self.activeFilters = _knockout2.default.observableArray();

  self.searchTerm = _knockout2.default.observable('');

  self.toggleMenu = function () {
    var el = document.querySelector(".map-nav");
    var btnShow = document.querySelector(".show");

    if (el.style.display == "none") {
      el.style.display = "block";
      btnShow.style.display = "none";
    } else {
      el.style.display = "none";
      btnShow.style.display = "block";
    };
  };

  self.toggleFilter = function (filter) {
    // Get the index of the clicked filter
    var filterIndex = self.activeFilters.indexOf(filter.text);
    var currentFilter = self.activeFilters()[filterIndex] || filter;
    (0, _helpers.toggleFilter)(filter);

    if (filterIndex === -1) {
      self.activeFilters.push(filter.text);
    } else {
      self.activeFilters.remove(filter.text);
    }

    // set the filtered locations and update markers.
    var newLocations = (0, _helpers.filterLocations)(self.locations(), self.activeFilters());
    self.activeLocations(newLocations);
    (0, _service.updateMarkers)(self.activeLocations);
  };

  // check if a filter is active.
  self.isActive = function (text) {
    return true ? self.activeFilters.indexOf(text) !== -1 : false;
  };

  self.search = function () {
    if (self.searchTerm().length === 0) {
      var newLocations = (0, _helpers.filterLocations)(self.locations(), self.activeFilters());
      self.activeLocations(newLocations);
    } else {
      // we won't search activeLocation since its being updated with every search,
      // so using the full filtered locations will make it able to display locations when
      // a user is removing characters from the searchTerm, else the activeLocations list will
      // keep shrinking until the user removes the full searchTerm keyword.
      var _newLocations = (0, _helpers.filterLocations)(self.locations(), self.activeFilters());
      _newLocations = (0, _helpers.searchLocations)(_newLocations, self.searchTerm());
      self.activeLocations(_newLocations);
    }
    (0, _service.updateMarkers)(self.activeLocations);
  };

  self.showPlace = function (location) {
    var fn = _service.showPlace.bind(location.marker);
    fn();
  };
};

module.exports = {
  LocationVM: LocationVM
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(15);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(5);
var Axios = __webpack_require__(17);
var defaults = __webpack_require__(2);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(10);
axios.CancelToken = __webpack_require__(31);
axios.isCancel = __webpack_require__(9);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(32);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};

function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(2);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(26);
var dispatchRequest = __webpack_require__(27);
var isAbsoluteURL = __webpack_require__(29);
var combineURLs = __webpack_require__(30);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(8);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error();
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
  // initialize result and counter
  var block, charCode, idx = 0, map = chars;
  // if the next str index does not exist:
  //   change the mapping table to "="
  //   check if d has no fractional digits
  str.charAt(idx | 0) || (map = '=', idx % 1);
  // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(28);
var isCancel = __webpack_require__(9);
var defaults = __webpack_require__(2);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(config.data, config.headers, config.transformRequest);

  // Flatten headers
  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(response.data, response.headers, config.transformResponse);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
  );
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(10);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */;(function(){/** Used as a safe reference for `undefined` in pre-ES5 environments. */var undefined;/** Used as the semantic version number. */var VERSION='4.17.4';/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/** Error message constants. */var CORE_ERROR_TEXT='Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',FUNC_ERROR_TEXT='Expected a function';/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used as the maximum memoize cache size. */var MAX_MEMOIZE_SIZE=500;/** Used as the internal argument placeholder. */var PLACEHOLDER='__lodash_placeholder__';/** Used to compose bitmasks for cloning. */var CLONE_DEEP_FLAG=1,CLONE_FLAT_FLAG=2,CLONE_SYMBOLS_FLAG=4;/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/** Used to compose bitmasks for function metadata. */var WRAP_BIND_FLAG=1,WRAP_BIND_KEY_FLAG=2,WRAP_CURRY_BOUND_FLAG=4,WRAP_CURRY_FLAG=8,WRAP_CURRY_RIGHT_FLAG=16,WRAP_PARTIAL_FLAG=32,WRAP_PARTIAL_RIGHT_FLAG=64,WRAP_ARY_FLAG=128,WRAP_REARG_FLAG=256,WRAP_FLIP_FLAG=512;/** Used as default options for `_.truncate`. */var DEFAULT_TRUNC_LENGTH=30,DEFAULT_TRUNC_OMISSION='...';/** Used to detect hot functions by number of calls within a span of milliseconds. */var HOT_COUNT=800,HOT_SPAN=16;/** Used to indicate the type of lazy iteratees. */var LAZY_FILTER_FLAG=1,LAZY_MAP_FLAG=2,LAZY_WHILE_FLAG=3;/** Used as references for various `Number` constants. */var INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991,MAX_INTEGER=1.7976931348623157e+308,NAN=0/0;/** Used as references for the maximum length and index of an array. */var MAX_ARRAY_LENGTH=4294967295,MAX_ARRAY_INDEX=MAX_ARRAY_LENGTH-1,HALF_MAX_ARRAY_LENGTH=MAX_ARRAY_LENGTH>>>1;/** Used to associate wrap methods with their bit flags. */var wrapFlags=[['ary',WRAP_ARY_FLAG],['bind',WRAP_BIND_FLAG],['bindKey',WRAP_BIND_KEY_FLAG],['curry',WRAP_CURRY_FLAG],['curryRight',WRAP_CURRY_RIGHT_FLAG],['flip',WRAP_FLIP_FLAG],['partial',WRAP_PARTIAL_FLAG],['partialRight',WRAP_PARTIAL_RIGHT_FLAG],['rearg',WRAP_REARG_FLAG]];/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',asyncTag='[object AsyncFunction]',boolTag='[object Boolean]',dateTag='[object Date]',domExcTag='[object DOMException]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',nullTag='[object Null]',objectTag='[object Object]',promiseTag='[object Promise]',proxyTag='[object Proxy]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',undefinedTag='[object Undefined]',weakMapTag='[object WeakMap]',weakSetTag='[object WeakSet]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to match empty string literals in compiled template source. */var reEmptyStringLeading=/\b__p \+= '';/g,reEmptyStringMiddle=/\b(__p \+=) '' \+/g,reEmptyStringTrailing=/(__e\(.*?\)|\b__t\)) \+\n'';/g;/** Used to match HTML entities and HTML characters. */var reEscapedHtml=/&(?:amp|lt|gt|quot|#39);/g,reUnescapedHtml=/[&<>"']/g,reHasEscapedHtml=RegExp(reEscapedHtml.source),reHasUnescapedHtml=RegExp(reUnescapedHtml.source);/** Used to match template delimiters. */var reEscape=/<%-([\s\S]+?)%>/g,reEvaluate=/<%([\s\S]+?)%>/g,reInterpolate=/<%=([\s\S]+?)%>/g;/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,reLeadingDot=/^\./,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;/**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reHasRegExpChar=RegExp(reRegExpChar.source);/** Used to match leading and trailing whitespace. */var reTrim=/^\s+|\s+$/g,reTrimStart=/^\s+/,reTrimEnd=/\s+$/;/** Used to match wrap detail comments. */var reWrapComment=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,reWrapDetails=/\{\n\/\* \[wrapped with (.+)\] \*/,reSplitDetails=/,? & /;/** Used to match words composed of alphanumeric characters. */var reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */var reEsTemplate=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/** Used to match Latin Unicode letters (excluding mathematical operators). */var reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;/** Used to ensure capturing order of template delimiters. */var reNoMatch=/($^)/;/** Used to match unescaped characters in compiled string literals. */var reUnescapedString=/['\n\r\u2028\u2029\\]/g;/** Used to compose unicode character classes. */var rsAstralRange='\\ud800-\\udfff',rsComboMarksRange='\\u0300-\\u036f',reComboHalfMarksRange='\\ufe20-\\ufe2f',rsComboSymbolsRange='\\u20d0-\\u20ff',rsComboRange=rsComboMarksRange+reComboHalfMarksRange+rsComboSymbolsRange,rsDingbatRange='\\u2700-\\u27bf',rsLowerRange='a-z\\xdf-\\xf6\\xf8-\\xff',rsMathOpRange='\\xac\\xb1\\xd7\\xf7',rsNonCharRange='\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',rsPunctuationRange='\\u2000-\\u206f',rsSpaceRange=' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',rsUpperRange='A-Z\\xc0-\\xd6\\xd8-\\xde',rsVarRange='\\ufe0e\\ufe0f',rsBreakRange=rsMathOpRange+rsNonCharRange+rsPunctuationRange+rsSpaceRange;/** Used to compose unicode capture groups. */var rsApos='[\'\u2019]',rsAstral='['+rsAstralRange+']',rsBreak='['+rsBreakRange+']',rsCombo='['+rsComboRange+']',rsDigits='\\d+',rsDingbat='['+rsDingbatRange+']',rsLower='['+rsLowerRange+']',rsMisc='[^'+rsAstralRange+rsBreakRange+rsDigits+rsDingbatRange+rsLowerRange+rsUpperRange+']',rsFitz='\\ud83c[\\udffb-\\udfff]',rsModifier='(?:'+rsCombo+'|'+rsFitz+')',rsNonAstral='[^'+rsAstralRange+']',rsRegional='(?:\\ud83c[\\udde6-\\uddff]){2}',rsSurrPair='[\\ud800-\\udbff][\\udc00-\\udfff]',rsUpper='['+rsUpperRange+']',rsZWJ='\\u200d';/** Used to compose unicode regexes. */var rsMiscLower='(?:'+rsLower+'|'+rsMisc+')',rsMiscUpper='(?:'+rsUpper+'|'+rsMisc+')',rsOptContrLower='(?:'+rsApos+'(?:d|ll|m|re|s|t|ve))?',rsOptContrUpper='(?:'+rsApos+'(?:D|LL|M|RE|S|T|VE))?',reOptMod=rsModifier+'?',rsOptVar='['+rsVarRange+']?',rsOptJoin='(?:'+rsZWJ+'(?:'+[rsNonAstral,rsRegional,rsSurrPair].join('|')+')'+rsOptVar+reOptMod+')*',rsOrdLower='\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)',rsOrdUpper='\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)',rsSeq=rsOptVar+reOptMod+rsOptJoin,rsEmoji='(?:'+[rsDingbat,rsRegional,rsSurrPair].join('|')+')'+rsSeq,rsSymbol='(?:'+[rsNonAstral+rsCombo+'?',rsCombo,rsRegional,rsSurrPair,rsAstral].join('|')+')';/** Used to match apostrophes. */var reApos=RegExp(rsApos,'g');/**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */var reComboMark=RegExp(rsCombo,'g');/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */var reUnicode=RegExp(rsFitz+'(?='+rsFitz+')|'+rsSymbol+rsSeq,'g');/** Used to match complex or compound words. */var reUnicodeWord=RegExp([rsUpper+'?'+rsLower+'+'+rsOptContrLower+'(?='+[rsBreak,rsUpper,'$'].join('|')+')',rsMiscUpper+'+'+rsOptContrUpper+'(?='+[rsBreak,rsUpper+rsMiscLower,'$'].join('|')+')',rsUpper+'?'+rsMiscLower+'+'+rsOptContrLower,rsUpper+'+'+rsOptContrUpper,rsOrdUpper,rsOrdLower,rsDigits,rsEmoji].join('|'),'g');/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */var reHasUnicode=RegExp('['+rsZWJ+rsAstralRange+rsComboRange+rsVarRange+']');/** Used to detect strings that need a more robust regexp to match words. */var reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;/** Used to assign default `context` object properties. */var contextProps=['Array','Buffer','DataView','Date','Error','Float32Array','Float64Array','Function','Int8Array','Int16Array','Int32Array','Map','Math','Object','Promise','RegExp','Set','String','Symbol','TypeError','Uint8Array','Uint8ClampedArray','Uint16Array','Uint32Array','WeakMap','_','clearTimeout','isFinite','parseInt','setTimeout'];/** Used to make template sourceURLs easier to identify. */var templateCounter=-1;/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;/** Used to map Latin Unicode letters to basic Latin letters. */var deburredLetters={// Latin-1 Supplement block.
'\xc0':'A','\xc1':'A','\xc2':'A','\xc3':'A','\xc4':'A','\xc5':'A','\xe0':'a','\xe1':'a','\xe2':'a','\xe3':'a','\xe4':'a','\xe5':'a','\xc7':'C','\xe7':'c','\xd0':'D','\xf0':'d','\xc8':'E','\xc9':'E','\xca':'E','\xcb':'E','\xe8':'e','\xe9':'e','\xea':'e','\xeb':'e','\xcc':'I','\xcd':'I','\xce':'I','\xcf':'I','\xec':'i','\xed':'i','\xee':'i','\xef':'i','\xd1':'N','\xf1':'n','\xd2':'O','\xd3':'O','\xd4':'O','\xd5':'O','\xd6':'O','\xd8':'O','\xf2':'o','\xf3':'o','\xf4':'o','\xf5':'o','\xf6':'o','\xf8':'o','\xd9':'U','\xda':'U','\xdb':'U','\xdc':'U','\xf9':'u','\xfa':'u','\xfb':'u','\xfc':'u','\xdd':'Y','\xfd':'y','\xff':'y','\xc6':'Ae','\xe6':'ae','\xde':'Th','\xfe':'th','\xdf':'ss',// Latin Extended-A block.
'\u0100':'A','\u0102':'A','\u0104':'A','\u0101':'a','\u0103':'a','\u0105':'a','\u0106':'C','\u0108':'C','\u010A':'C','\u010C':'C','\u0107':'c','\u0109':'c','\u010B':'c','\u010D':'c','\u010E':'D','\u0110':'D','\u010F':'d','\u0111':'d','\u0112':'E','\u0114':'E','\u0116':'E','\u0118':'E','\u011A':'E','\u0113':'e','\u0115':'e','\u0117':'e','\u0119':'e','\u011B':'e','\u011C':'G','\u011E':'G','\u0120':'G','\u0122':'G','\u011D':'g','\u011F':'g','\u0121':'g','\u0123':'g','\u0124':'H','\u0126':'H','\u0125':'h','\u0127':'h','\u0128':'I','\u012A':'I','\u012C':'I','\u012E':'I','\u0130':'I','\u0129':'i','\u012B':'i','\u012D':'i','\u012F':'i','\u0131':'i','\u0134':'J','\u0135':'j','\u0136':'K','\u0137':'k','\u0138':'k','\u0139':'L','\u013B':'L','\u013D':'L','\u013F':'L','\u0141':'L','\u013A':'l','\u013C':'l','\u013E':'l','\u0140':'l','\u0142':'l','\u0143':'N','\u0145':'N','\u0147':'N','\u014A':'N','\u0144':'n','\u0146':'n','\u0148':'n','\u014B':'n','\u014C':'O','\u014E':'O','\u0150':'O','\u014D':'o','\u014F':'o','\u0151':'o','\u0154':'R','\u0156':'R','\u0158':'R','\u0155':'r','\u0157':'r','\u0159':'r','\u015A':'S','\u015C':'S','\u015E':'S','\u0160':'S','\u015B':'s','\u015D':'s','\u015F':'s','\u0161':'s','\u0162':'T','\u0164':'T','\u0166':'T','\u0163':'t','\u0165':'t','\u0167':'t','\u0168':'U','\u016A':'U','\u016C':'U','\u016E':'U','\u0170':'U','\u0172':'U','\u0169':'u','\u016B':'u','\u016D':'u','\u016F':'u','\u0171':'u','\u0173':'u','\u0174':'W','\u0175':'w','\u0176':'Y','\u0177':'y','\u0178':'Y','\u0179':'Z','\u017B':'Z','\u017D':'Z','\u017A':'z','\u017C':'z','\u017E':'z','\u0132':'IJ','\u0133':'ij','\u0152':'Oe','\u0153':'oe','\u0149':"'n",'\u017F':'s'};/** Used to map characters to HTML entities. */var htmlEscapes={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'};/** Used to map HTML entities to characters. */var htmlUnescapes={'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'"};/** Used to escape characters for inclusion in compiled string literals. */var stringEscapes={'\\':'\\',"'":"'",'\n':'n','\r':'r','\u2028':'u2028','\u2029':'u2029'};/** Built-in method references without a dependency on `root`. */var freeParseFloat=parseFloat,freeParseInt=parseInt;/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==='undefined'?'undefined':_typeof(global))=='object'&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=(typeof self==='undefined'?'undefined':_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Detect free variable `exports`. */var freeExports=( false?'undefined':_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&( false?'undefined':_typeof(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{return freeProcess&&freeProcess.binding&&freeProcess.binding('util');}catch(e){}}();/* Node.js helper references. */var nodeIsArrayBuffer=nodeUtil&&nodeUtil.isArrayBuffer,nodeIsDate=nodeUtil&&nodeUtil.isDate,nodeIsMap=nodeUtil&&nodeUtil.isMap,nodeIsRegExp=nodeUtil&&nodeUtil.isRegExp,nodeIsSet=nodeUtil&&nodeUtil.isSet,nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/*--------------------------------------------------------------------------*//**
   * Adds the key-value `pair` to `map`.
   *
   * @private
   * @param {Object} map The map to modify.
   * @param {Array} pair The key-value pair to add.
   * @returns {Object} Returns `map`.
   */function addMapEntry(map,pair){// Don't return `map.set` because it's not chainable in IE 11.
map.set(pair[0],pair[1]);return map;}/**
   * Adds `value` to `set`.
   *
   * @private
   * @param {Object} set The set to modify.
   * @param {*} value The value to add.
   * @returns {Object} Returns `set`.
   */function addSetEntry(set,value){// Don't return `set.add` because it's not chainable in IE 11.
set.add(value);return set;}/**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}/**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */function arrayAggregator(array,setter,iteratee,accumulator){var index=-1,length=array==null?0:array.length;while(++index<length){var value=array[index];setter(accumulator,value,iteratee(value),array);}return accumulator;}/**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */function arrayEach(array,iteratee){var index=-1,length=array==null?0:array.length;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}/**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */function arrayEachRight(array,iteratee){var length=array==null?0:array.length;while(length--){if(iteratee(array[length],length,array)===false){break;}}return array;}/**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */function arrayEvery(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(!predicate(array[index],index,array)){return false;}}return true;}/**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */function arrayFilter(array,predicate){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}return result;}/**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */function arrayIncludes(array,value){var length=array==null?0:array.length;return!!length&&baseIndexOf(array,value,0)>-1;}/**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */function arrayIncludesWith(array,value,comparator){var index=-1,length=array==null?0:array.length;while(++index<length){if(comparator(value,array[index])){return true;}}return false;}/**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */function arrayMap(array,iteratee){var index=-1,length=array==null?0:array.length,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}/**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}/**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array==null?0:array.length;if(initAccum&&length){accumulator=array[++index];}while(++index<length){accumulator=iteratee(accumulator,array[index],index,array);}return accumulator;}/**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */function arrayReduceRight(array,iteratee,accumulator,initAccum){var length=array==null?0:array.length;if(initAccum&&length){accumulator=array[--length];}while(length--){accumulator=iteratee(accumulator,array[length],length,array);}return accumulator;}/**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */function arraySome(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}/**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */var asciiSize=baseProperty('length');/**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */function asciiToArray(string){return string.split('');}/**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */function asciiWords(string){return string.match(reAsciiWord)||[];}/**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */function baseFindKey(collection,predicate,eachFunc){var result;eachFunc(collection,function(value,key,collection){if(predicate(value,key,collection)){result=key;return false;}});return result;}/**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function baseFindIndex(array,predicate,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while(fromRight?index--:++index<length){if(predicate(array[index],index,array)){return index;}}return-1;}/**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function baseIndexOf(array,value,fromIndex){return value===value?strictIndexOf(array,value,fromIndex):baseFindIndex(array,baseIsNaN,fromIndex);}/**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function baseIndexOfWith(array,value,fromIndex,comparator){var index=fromIndex-1,length=array.length;while(++index<length){if(comparator(array[index],value)){return index;}}return-1;}/**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */function baseIsNaN(value){return value!==value;}/**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */function baseMean(array,iteratee){var length=array==null?0:array.length;return length?baseSum(array,iteratee)/length:NAN;}/**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */function baseProperty(key){return function(object){return object==null?undefined:object[key];};}/**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */function basePropertyOf(object){return function(key){return object==null?undefined:object[key];};}/**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */function baseReduce(collection,iteratee,accumulator,initAccum,eachFunc){eachFunc(collection,function(value,index,collection){accumulator=initAccum?(initAccum=false,value):iteratee(accumulator,value,index,collection);});return accumulator;}/**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */function baseSortBy(array,comparer){var length=array.length;array.sort(comparer);while(length--){array[length]=array[length].value;}return array;}/**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */function baseSum(array,iteratee){var result,index=-1,length=array.length;while(++index<length){var current=iteratee(array[index]);if(current!==undefined){result=result===undefined?current:result+current;}}return result;}/**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */function baseToPairs(object,props){return arrayMap(props,function(key){return[key,object[key]];});}/**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */function baseUnary(func){return function(value){return func(value);};}/**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */function baseValues(object,props){return arrayMap(props,function(key){return object[key];});}/**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */function cacheHas(cache,key){return cache.has(key);}/**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */function charsStartIndex(strSymbols,chrSymbols){var index=-1,length=strSymbols.length;while(++index<length&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}return index;}/**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */function charsEndIndex(strSymbols,chrSymbols){var index=strSymbols.length;while(index--&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}return index;}/**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */function countHolders(array,placeholder){var length=array.length,result=0;while(length--){if(array[length]===placeholder){++result;}}return result;}/**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */var deburrLetter=basePropertyOf(deburredLetters);/**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */var escapeHtmlChar=basePropertyOf(htmlEscapes);/**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */function escapeStringChar(chr){return'\\'+stringEscapes[chr];}/**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */function getValue(object,key){return object==null?undefined:object[key];}/**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */function hasUnicode(string){return reHasUnicode.test(string);}/**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */function hasUnicodeWord(string){return reHasUnicodeWord.test(string);}/**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */function iteratorToArray(iterator){var data,result=[];while(!(data=iterator.next()).done){result.push(data.value);}return result;}/**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}/**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */function overArg(func,transform){return function(arg){return func(transform(arg));};}/**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */function replaceHolders(array,placeholder){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value===placeholder||value===PLACEHOLDER){array[index]=PLACEHOLDER;result[resIndex++]=index;}}return result;}/**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}/**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */function setToPairs(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=[value,value];});return result;}/**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function strictIndexOf(array,value,fromIndex){var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index;}}return-1;}/**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function strictLastIndexOf(array,value,fromIndex){var index=fromIndex+1;while(index--){if(array[index]===value){return index;}}return index;}/**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */function stringSize(string){return hasUnicode(string)?unicodeSize(string):asciiSize(string);}/**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */function stringToArray(string){return hasUnicode(string)?unicodeToArray(string):asciiToArray(string);}/**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */var unescapeHtmlChar=basePropertyOf(htmlUnescapes);/**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */function unicodeSize(string){var result=reUnicode.lastIndex=0;while(reUnicode.test(string)){++result;}return result;}/**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */function unicodeToArray(string){return string.match(reUnicode)||[];}/**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */function unicodeWords(string){return string.match(reUnicodeWord)||[];}/*--------------------------------------------------------------------------*//**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */var runInContext=function runInContext(context){context=context==null?root:_.defaults(root.Object(),context,_.pick(root,contextProps));/** Built-in constructor references. */var Array=context.Array,Date=context.Date,Error=context.Error,Function=context.Function,Math=context.Math,Object=context.Object,RegExp=context.RegExp,String=context.String,TypeError=context.TypeError;/** Used for built-in method references. */var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=context['__core-js_shared__'];/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to generate unique IDs. */var idCounter=0;/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */var nativeObjectToString=objectProto.toString;/** Used to infer the `Object` constructor. */var objectCtorString=funcToString.call(Object);/** Used to restore the original `_` reference in `_.noConflict`. */var oldDash=root._;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var Buffer=moduleExports?context.Buffer:undefined,_Symbol=context.Symbol,Uint8Array=context.Uint8Array,allocUnsafe=Buffer?Buffer.allocUnsafe:undefined,getPrototype=overArg(Object.getPrototypeOf,Object),objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice,spreadableSymbol=_Symbol?_Symbol.isConcatSpreadable:undefined,symIterator=_Symbol?_Symbol.iterator:undefined,symToStringTag=_Symbol?_Symbol.toStringTag:undefined;var defineProperty=function(){try{var func=getNative(Object,'defineProperty');func({},'',{});return func;}catch(e){}}();/** Mocked built-ins. */var ctxClearTimeout=context.clearTimeout!==root.clearTimeout&&context.clearTimeout,ctxNow=Date&&Date.now!==root.Date.now&&Date.now,ctxSetTimeout=context.setTimeout!==root.setTimeout&&context.setTimeout;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeCeil=Math.ceil,nativeFloor=Math.floor,nativeGetSymbols=Object.getOwnPropertySymbols,nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeIsFinite=context.isFinite,nativeJoin=arrayProto.join,nativeKeys=overArg(Object.keys,Object),nativeMax=Math.max,nativeMin=Math.min,nativeNow=Date.now,nativeParseInt=context.parseInt,nativeRandom=Math.random,nativeReverse=arrayProto.reverse;/* Built-in method references that are verified to be native. */var DataView=getNative(context,'DataView'),Map=getNative(context,'Map'),Promise=getNative(context,'Promise'),Set=getNative(context,'Set'),WeakMap=getNative(context,'WeakMap'),nativeCreate=getNative(Object,'create');/** Used to store function metadata. */var metaMap=WeakMap&&new WeakMap();/** Used to lookup unminified function names. */var realNames={};/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol?_Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;/*------------------------------------------------------------------------*//**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */function lodash(value){if(isObjectLike(value)&&!isArray(value)&&!(value instanceof LazyWrapper)){if(value instanceof LodashWrapper){return value;}if(hasOwnProperty.call(value,'__wrapped__')){return wrapperClone(value);}}return new LodashWrapper(value);}/**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */var baseCreate=function(){function object(){}return function(proto){if(!isObject(proto)){return{};}if(objectCreate){return objectCreate(proto);}object.prototype=proto;var result=new object();object.prototype=undefined;return result;};}();/**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */function baseLodash(){}// No operation performed.
/**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */function LodashWrapper(value,chainAll){this.__wrapped__=value;this.__actions__=[];this.__chain__=!!chainAll;this.__index__=0;this.__values__=undefined;}/**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */lodash.templateSettings={/**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */'escape':reEscape,/**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */'evaluate':reEvaluate,/**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */'interpolate':reInterpolate,/**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */'variable':'',/**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */'imports':{/**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */'_':lodash}};// Ensure wrappers are instances of `baseLodash`.
lodash.prototype=baseLodash.prototype;lodash.prototype.constructor=lodash;LodashWrapper.prototype=baseCreate(baseLodash.prototype);LodashWrapper.prototype.constructor=LodashWrapper;/*------------------------------------------------------------------------*//**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */function LazyWrapper(value){this.__wrapped__=value;this.__actions__=[];this.__dir__=1;this.__filtered__=false;this.__iteratees__=[];this.__takeCount__=MAX_ARRAY_LENGTH;this.__views__=[];}/**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */function lazyClone(){var result=new LazyWrapper(this.__wrapped__);result.__actions__=copyArray(this.__actions__);result.__dir__=this.__dir__;result.__filtered__=this.__filtered__;result.__iteratees__=copyArray(this.__iteratees__);result.__takeCount__=this.__takeCount__;result.__views__=copyArray(this.__views__);return result;}/**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */function lazyReverse(){if(this.__filtered__){var result=new LazyWrapper(this);result.__dir__=-1;result.__filtered__=true;}else{result=this.clone();result.__dir__*=-1;}return result;}/**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */function lazyValue(){var array=this.__wrapped__.value(),dir=this.__dir__,isArr=isArray(array),isRight=dir<0,arrLength=isArr?array.length:0,view=getView(0,arrLength,this.__views__),start=view.start,end=view.end,length=end-start,index=isRight?end:start-1,iteratees=this.__iteratees__,iterLength=iteratees.length,resIndex=0,takeCount=nativeMin(length,this.__takeCount__);if(!isArr||!isRight&&arrLength==length&&takeCount==length){return baseWrapperValue(array,this.__actions__);}var result=[];outer:while(length--&&resIndex<takeCount){index+=dir;var iterIndex=-1,value=array[index];while(++iterIndex<iterLength){var data=iteratees[iterIndex],iteratee=data.iteratee,type=data.type,computed=iteratee(value);if(type==LAZY_MAP_FLAG){value=computed;}else if(!computed){if(type==LAZY_FILTER_FLAG){continue outer;}else{break outer;}}}result[resIndex++]=value;}return result;}// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype=baseCreate(baseLodash.prototype);LazyWrapper.prototype.constructor=LazyWrapper;/*------------------------------------------------------------------------*//**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function Hash(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};this.size=0;}/**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];this.size-=result?1:0;return result;}/**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}/**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}/**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */function hashSet(key,value){var data=this.__data__;this.size+=this.has(key)?0:1;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/*------------------------------------------------------------------------*//**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function ListCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */function listCacheClear(){this.__data__=[];this.size=0;}/**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}--this.size;return true;}/**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}/**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){++this.size;data.push([key,value]);}else{data[index][1]=value;}return this;}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/*------------------------------------------------------------------------*//**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function MapCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */function mapCacheClear(){this.size=0;this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}/**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function mapCacheDelete(key){var result=getMapData(this,key)['delete'](key);this.size-=result?1:0;return result;}/**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function mapCacheHas(key){return getMapData(this,key).has(key);}/**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */function mapCacheSet(key,value){var data=getMapData(this,key),size=data.size;data.set(key,value);this.size+=data.size==size?0:1;return this;}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/*------------------------------------------------------------------------*//**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */function SetCache(values){var index=-1,length=values==null?0:values.length;this.__data__=new MapCache();while(++index<length){this.add(values[index]);}}/**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this;}/**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */function setCacheHas(value){return this.__data__.has(value);}// Add methods to `SetCache`.
SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;/*------------------------------------------------------------------------*//**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function Stack(entries){var data=this.__data__=new ListCache(entries);this.size=data.size;}/**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */function stackClear(){this.__data__=new ListCache();this.size=0;}/**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function stackDelete(key){var data=this.__data__,result=data['delete'](key);this.size=data.size;return result;}/**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function stackGet(key){return this.__data__.get(key);}/**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function stackHas(key){return this.__data__.has(key);}/**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */function stackSet(key,value){var data=this.__data__;if(data instanceof ListCache){var pairs=data.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);this.size=++data.size;return this;}data=this.__data__=new MapCache(pairs);}data.set(key,value);this.size=data.size;return this;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;/*------------------------------------------------------------------------*//**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */function arrayLikeKeys(value,inherited){var isArr=isArray(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(// Safari 9 has enumerable `arguments.length` in strict mode.
key=='length'||// Node.js 0.10 has enumerable non-index properties on buffers.
isBuff&&(key=='offset'||key=='parent')||// PhantomJS 2 has enumerable non-index properties on typed arrays.
isType&&(key=='buffer'||key=='byteLength'||key=='byteOffset')||// Skip index properties.
isIndex(key,length)))){result.push(key);}}return result;}/**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */function arraySample(array){var length=array.length;return length?array[baseRandom(0,length-1)]:undefined;}/**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */function arraySampleSize(array,n){return shuffleSelf(copyArray(array),baseClamp(n,0,array.length));}/**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */function arrayShuffle(array){return shuffleSelf(copyArray(array));}/**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function assignMergeValue(object,key,value){if(value!==undefined&&!eq(object[key],value)||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}/**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}/**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}/**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */function baseAggregator(collection,setter,iteratee,accumulator){baseEach(collection,function(value,key,collection){setter(accumulator,value,iteratee(value),collection);});return accumulator;}/**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}/**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */function baseAssignIn(object,source){return object&&copyObject(source,keysIn(source),object);}/**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function baseAssignValue(object,key,value){if(key=='__proto__'&&defineProperty){defineProperty(object,key,{'configurable':true,'enumerable':true,'value':value,'writable':true});}else{object[key]=value;}}/**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */function baseAt(object,paths){var index=-1,length=paths.length,result=Array(length),skip=object==null;while(++index<length){result[index]=skip?undefined:get(object,paths[index]);}return result;}/**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */function baseClamp(number,lower,upper){if(number===number){if(upper!==undefined){number=number<=upper?number:upper;}if(lower!==undefined){number=number>=lower?number:lower;}}return number;}/**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */function baseClone(value,bitmask,customizer,key,object,stack){var result,isDeep=bitmask&CLONE_DEEP_FLAG,isFlat=bitmask&CLONE_FLAT_FLAG,isFull=bitmask&CLONE_SYMBOLS_FLAG;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined){return result;}if(!isObject(value)){return value;}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep);}if(tag==objectTag||tag==argsTag||isFunc&&!object){result=isFlat||isFunc?{}:initCloneObject(value);if(!isDeep){return isFlat?copySymbolsIn(value,baseAssignIn(result,value)):copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}result=initCloneByTag(value,tag,baseClone,isDeep);}}// Check for circular references and return its corresponding clone.
stack||(stack=new Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);var keysFunc=isFull?isFlat?getAllKeysIn:getAllKeys:isFlat?keysIn:keys;var props=isArr?undefined:keysFunc(value);arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}// Recursively populate clone (susceptible to call stack limits).
assignValue(result,key,baseClone(subValue,bitmask,customizer,key,value,stack));});return result;}/**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */function baseConforms(source){var props=keys(source);return function(object){return baseConformsTo(object,source,props);};}/**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */function baseConformsTo(object,source,props){var length=props.length;if(object==null){return!length;}object=Object(object);while(length--){var key=props[length],predicate=source[key],value=object[key];if(value===undefined&&!(key in object)||!predicate(value)){return false;}}return true;}/**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */function baseDelay(func,wait,args){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return setTimeout(function(){func.apply(undefined,args);},wait);}/**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */function baseDifference(array,values,iteratee,comparator){var index=-1,includes=arrayIncludes,isCommon=true,length=array.length,result=[],valuesLength=values.length;if(!length){return result;}if(iteratee){values=arrayMap(values,baseUnary(iteratee));}if(comparator){includes=arrayIncludesWith;isCommon=false;}else if(values.length>=LARGE_ARRAY_SIZE){includes=cacheHas;isCommon=false;values=new SetCache(values);}outer:while(++index<length){var value=array[index],computed=iteratee==null?value:iteratee(value);value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var valuesIndex=valuesLength;while(valuesIndex--){if(values[valuesIndex]===computed){continue outer;}}result.push(value);}else if(!includes(values,computed,comparator)){result.push(value);}}return result;}/**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */var baseEach=createBaseEach(baseForOwn);/**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */var baseEachRight=createBaseEach(baseForOwnRight,true);/**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */function baseEvery(collection,predicate){var result=true;baseEach(collection,function(value,index,collection){result=!!predicate(value,index,collection);return result;});return result;}/**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */function baseExtremum(array,iteratee,comparator){var index=-1,length=array.length;while(++index<length){var value=array[index],current=iteratee(value);if(current!=null&&(computed===undefined?current===current&&!isSymbol(current):comparator(current,computed))){var computed=current,result=value;}}return result;}/**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */function baseFill(array,value,start,end){var length=array.length;start=toInteger(start);if(start<0){start=-start>length?0:length+start;}end=end===undefined||end>length?length:toInteger(end);if(end<0){end+=length;}end=start>end?0:toLength(end);while(start<end){array[start++]=value;}return array;}/**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */function baseFilter(collection,predicate){var result=[];baseEach(collection,function(value,index,collection){if(predicate(value,index,collection)){result.push(value);}});return result;}/**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;predicate||(predicate=isFlattenable);result||(result=[]);while(++index<length){var value=array[index];if(depth>0&&predicate(value)){if(depth>1){// Recursively flatten arrays (susceptible to call stack limits).
baseFlatten(value,depth-1,predicate,isStrict,result);}else{arrayPush(result,value);}}else if(!isStrict){result[result.length]=value;}}return result;}/**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */var baseFor=createBaseFor();/**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */var baseForRight=createBaseFor(true);/**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */function baseForOwn(object,iteratee){return object&&baseFor(object,iteratee,keys);}/**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */function baseForOwnRight(object,iteratee){return object&&baseForRight(object,iteratee,keys);}/**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */function baseFunctions(object,props){return arrayFilter(props,function(key){return isFunction(object[key]);});}/**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */function baseGet(object,path){path=castPath(path,object);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}return index&&index==length?object:undefined;}/**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}/**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value);}/**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */function baseGt(value,other){return value>other;}/**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */function baseHas(object,key){return object!=null&&hasOwnProperty.call(object,key);}/**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */function baseHasIn(object,key){return object!=null&&key in Object(object);}/**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */function baseInRange(number,start,end){return number>=nativeMin(start,end)&&number<nativeMax(start,end);}/**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */function baseIntersection(arrays,iteratee,comparator){var includes=comparator?arrayIncludesWith:arrayIncludes,length=arrays[0].length,othLength=arrays.length,othIndex=othLength,caches=Array(othLength),maxLength=Infinity,result=[];while(othIndex--){var array=arrays[othIndex];if(othIndex&&iteratee){array=arrayMap(array,baseUnary(iteratee));}maxLength=nativeMin(array.length,maxLength);caches[othIndex]=!comparator&&(iteratee||length>=120&&array.length>=120)?new SetCache(othIndex&&array):undefined;}array=arrays[0];var index=-1,seen=caches[0];outer:while(++index<length&&result.length<maxLength){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(!(seen?cacheHas(seen,computed):includes(result,computed,comparator))){othIndex=othLength;while(--othIndex){var cache=caches[othIndex];if(!(cache?cacheHas(cache,computed):includes(arrays[othIndex],computed,comparator))){continue outer;}}if(seen){seen.push(computed);}result.push(value);}}return result;}/**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */function baseInverter(object,setter,iteratee,accumulator){baseForOwn(object,function(value,key,object){setter(accumulator,iteratee(value),key,object);});return accumulator;}/**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */function baseInvoke(object,path,args){path=castPath(path,object);object=parent(object,path);var func=object==null?object:object[toKey(last(path))];return func==null?undefined:apply(func,object,args);}/**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag;}/**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */function baseIsArrayBuffer(value){return isObjectLike(value)&&baseGetTag(value)==arrayBufferTag;}/**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */function baseIsDate(value){return isObjectLike(value)&&baseGetTag(value)==dateTag;}/**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */function baseIsEqual(value,other,bitmask,customizer,stack){if(value===other){return true;}if(value==null||other==null||!isObjectLike(value)&&!isObjectLike(other)){return value!==value&&other!==other;}return baseIsEqualDeep(value,other,bitmask,customizer,baseIsEqual,stack);}/**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */function baseIsEqualDeep(object,other,bitmask,customizer,equalFunc,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=objIsArr?arrayTag:getTag(object),othTag=othIsArr?arrayTag:getTag(other);objTag=objTag==argsTag?objectTag:objTag;othTag=othTag==argsTag?objectTag:othTag;var objIsObj=objTag==objectTag,othIsObj=othTag==objectTag,isSameTag=objTag==othTag;if(isSameTag&&isBuffer(object)){if(!isBuffer(other)){return false;}objIsArr=true;objIsObj=false;}if(isSameTag&&!objIsObj){stack||(stack=new Stack());return objIsArr||isTypedArray(object)?equalArrays(object,other,bitmask,customizer,equalFunc,stack):equalByTag(object,other,objTag,bitmask,customizer,equalFunc,stack);}if(!(bitmask&COMPARE_PARTIAL_FLAG)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack());return equalFunc(objUnwrapped,othUnwrapped,bitmask,customizer,stack);}}if(!isSameTag){return false;}stack||(stack=new Stack());return equalObjects(object,other,bitmask,customizer,equalFunc,stack);}/**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */function baseIsMap(value){return isObjectLike(value)&&getTag(value)==mapTag;}/**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return!length;}object=Object(object);while(index--){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object)){return false;}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined&&!(key in object)){return false;}}else{var stack=new Stack();if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack);}if(!(result===undefined?baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG,customizer,stack):result)){return false;}}}return true;}/**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */function baseIsRegExp(value){return isObjectLike(value)&&baseGetTag(value)==regexpTag;}/**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */function baseIsSet(value){return isObjectLike(value)&&getTag(value)==setTag;}/**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)];}/**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */function baseIteratee(value){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
if(typeof value=='function'){return value;}if(value==null){return identity;}if((typeof value==='undefined'?'undefined':_typeof(value))=='object'){return isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value);}return property(value);}/**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}return result;}/**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function baseKeysIn(object){if(!isObject(object)){return nativeKeysIn(object);}var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key);}}return result;}/**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */function baseLt(value,other){return value<other;}/**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */function baseMap(collection,iteratee){var index=-1,result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value,key,collection){result[++index]=iteratee(value,key,collection);});return result;}/**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1]);}return function(object){return object===source||baseIsMatch(object,source,matchData);};}/**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue);}return function(object){var objValue=get(object,path);return objValue===undefined&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG);};}/**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */function baseMerge(object,source,srcIndex,customizer,stack){if(object===source){return;}baseFor(source,function(srcValue,key){if(isObject(srcValue)){stack||(stack=new Stack());baseMergeDeep(object,source,key,srcIndex,baseMerge,customizer,stack);}else{var newValue=customizer?customizer(object[key],srcValue,key+'',object,source,stack):undefined;if(newValue===undefined){newValue=srcValue;}assignMergeValue(object,key,newValue);}},keysIn);}/**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */function baseMergeDeep(object,source,key,srcIndex,mergeFunc,customizer,stack){var objValue=object[key],srcValue=source[key],stacked=stack.get(srcValue);if(stacked){assignMergeValue(object,key,stacked);return;}var newValue=customizer?customizer(objValue,srcValue,key+'',object,source,stack):undefined;var isCommon=newValue===undefined;if(isCommon){var isArr=isArray(srcValue),isBuff=!isArr&&isBuffer(srcValue),isTyped=!isArr&&!isBuff&&isTypedArray(srcValue);newValue=srcValue;if(isArr||isBuff||isTyped){if(isArray(objValue)){newValue=objValue;}else if(isArrayLikeObject(objValue)){newValue=copyArray(objValue);}else if(isBuff){isCommon=false;newValue=cloneBuffer(srcValue,true);}else if(isTyped){isCommon=false;newValue=cloneTypedArray(srcValue,true);}else{newValue=[];}}else if(isPlainObject(srcValue)||isArguments(srcValue)){newValue=objValue;if(isArguments(objValue)){newValue=toPlainObject(objValue);}else if(!isObject(objValue)||srcIndex&&isFunction(objValue)){newValue=initCloneObject(srcValue);}}else{isCommon=false;}}if(isCommon){// Recursively merge objects and arrays (susceptible to call stack limits).
stack.set(srcValue,newValue);mergeFunc(newValue,srcValue,srcIndex,customizer,stack);stack['delete'](srcValue);}assignMergeValue(object,key,newValue);}/**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */function baseNth(array,n){var length=array.length;if(!length){return;}n+=n<0?length:0;return isIndex(n,length)?array[n]:undefined;}/**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */function baseOrderBy(collection,iteratees,orders){var index=-1;iteratees=arrayMap(iteratees.length?iteratees:[identity],baseUnary(getIteratee()));var result=baseMap(collection,function(value,key,collection){var criteria=arrayMap(iteratees,function(iteratee){return iteratee(value);});return{'criteria':criteria,'index':++index,'value':value};});return baseSortBy(result,function(object,other){return compareMultiple(object,other,orders);});}/**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */function basePick(object,paths){return basePickBy(object,paths,function(value,path){return hasIn(object,path);});}/**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */function basePickBy(object,paths,predicate){var index=-1,length=paths.length,result={};while(++index<length){var path=paths[index],value=baseGet(object,path);if(predicate(value,path)){baseSet(result,castPath(path,object),value);}}return result;}/**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */function basePropertyDeep(path){return function(object){return baseGet(object,path);};}/**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */function basePullAll(array,values,iteratee,comparator){var indexOf=comparator?baseIndexOfWith:baseIndexOf,index=-1,length=values.length,seen=array;if(array===values){values=copyArray(values);}if(iteratee){seen=arrayMap(array,baseUnary(iteratee));}while(++index<length){var fromIndex=0,value=values[index],computed=iteratee?iteratee(value):value;while((fromIndex=indexOf(seen,computed,fromIndex,comparator))>-1){if(seen!==array){splice.call(seen,fromIndex,1);}splice.call(array,fromIndex,1);}}return array;}/**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */function basePullAt(array,indexes){var length=array?indexes.length:0,lastIndex=length-1;while(length--){var index=indexes[length];if(length==lastIndex||index!==previous){var previous=index;if(isIndex(index)){splice.call(array,index,1);}else{baseUnset(array,index);}}}return array;}/**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */function baseRandom(lower,upper){return lower+nativeFloor(nativeRandom()*(upper-lower+1));}/**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */function baseRange(start,end,step,fromRight){var index=-1,length=nativeMax(nativeCeil((end-start)/(step||1)),0),result=Array(length);while(length--){result[fromRight?length:++index]=start;start+=step;}return result;}/**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */function baseRepeat(string,n){var result='';if(!string||n<1||n>MAX_SAFE_INTEGER){return result;}// Leverage the exponentiation by squaring algorithm for a faster repeat.
// See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
do{if(n%2){result+=string;}n=nativeFloor(n/2);if(n){string+=string;}}while(n);return result;}/**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */function baseRest(func,start){return setToString(overRest(func,start,identity),func+'');}/**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */function baseSample(collection){return arraySample(values(collection));}/**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */function baseSampleSize(collection,n){var array=values(collection);return shuffleSelf(array,baseClamp(n,0,array.length));}/**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */function baseSet(object,path,value,customizer){if(!isObject(object)){return object;}path=castPath(path,object);var index=-1,length=path.length,lastIndex=length-1,nested=object;while(nested!=null&&++index<length){var key=toKey(path[index]),newValue=value;if(index!=lastIndex){var objValue=nested[key];newValue=customizer?customizer(objValue,key,nested):undefined;if(newValue===undefined){newValue=isObject(objValue)?objValue:isIndex(path[index+1])?[]:{};}}assignValue(nested,key,newValue);nested=nested[key];}return object;}/**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */var baseSetData=!metaMap?identity:function(func,data){metaMap.set(func,data);return func;};/**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */var baseSetToString=!defineProperty?identity:function(func,string){return defineProperty(func,'toString',{'configurable':true,'enumerable':false,'value':constant(string),'writable':true});};/**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */function baseShuffle(collection){return shuffleSelf(values(collection));}/**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */function baseSlice(array,start,end){var index=-1,length=array.length;if(start<0){start=-start>length?0:length+start;}end=end>length?length:end;if(end<0){end+=length;}length=start>end?0:end-start>>>0;start>>>=0;var result=Array(length);while(++index<length){result[index]=array[index+start];}return result;}/**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */function baseSome(collection,predicate){var result;baseEach(collection,function(value,index,collection){result=predicate(value,index,collection);return!result;});return!!result;}/**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */function baseSortedIndex(array,value,retHighest){var low=0,high=array==null?low:array.length;if(typeof value=='number'&&value===value&&high<=HALF_MAX_ARRAY_LENGTH){while(low<high){var mid=low+high>>>1,computed=array[mid];if(computed!==null&&!isSymbol(computed)&&(retHighest?computed<=value:computed<value)){low=mid+1;}else{high=mid;}}return high;}return baseSortedIndexBy(array,value,identity,retHighest);}/**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */function baseSortedIndexBy(array,value,iteratee,retHighest){value=iteratee(value);var low=0,high=array==null?0:array.length,valIsNaN=value!==value,valIsNull=value===null,valIsSymbol=isSymbol(value),valIsUndefined=value===undefined;while(low<high){var mid=nativeFloor((low+high)/2),computed=iteratee(array[mid]),othIsDefined=computed!==undefined,othIsNull=computed===null,othIsReflexive=computed===computed,othIsSymbol=isSymbol(computed);if(valIsNaN){var setLow=retHighest||othIsReflexive;}else if(valIsUndefined){setLow=othIsReflexive&&(retHighest||othIsDefined);}else if(valIsNull){setLow=othIsReflexive&&othIsDefined&&(retHighest||!othIsNull);}else if(valIsSymbol){setLow=othIsReflexive&&othIsDefined&&!othIsNull&&(retHighest||!othIsSymbol);}else if(othIsNull||othIsSymbol){setLow=false;}else{setLow=retHighest?computed<=value:computed<value;}if(setLow){low=mid+1;}else{high=mid;}}return nativeMin(high,MAX_ARRAY_INDEX);}/**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */function baseSortedUniq(array,iteratee){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;if(!index||!eq(computed,seen)){var seen=computed;result[resIndex++]=value===0?0:value;}}return result;}/**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */function baseToNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}return+value;}/**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
if(typeof value=='string'){return value;}if(isArray(value)){// Recursively convert values (susceptible to call stack limits).
return arrayMap(value,baseToString)+'';}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */function baseUniq(array,iteratee,comparator){var index=-1,includes=arrayIncludes,length=array.length,isCommon=true,result=[],seen=result;if(comparator){isCommon=false;includes=arrayIncludesWith;}else if(length>=LARGE_ARRAY_SIZE){var set=iteratee?null:createSet(array);if(set){return setToArray(set);}isCommon=false;includes=cacheHas;seen=new SetCache();}else{seen=iteratee?[]:result;}outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var seenIndex=seen.length;while(seenIndex--){if(seen[seenIndex]===computed){continue outer;}}if(iteratee){seen.push(computed);}result.push(value);}else if(!includes(seen,computed,comparator)){if(seen!==result){seen.push(computed);}result.push(value);}}return result;}/**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */function baseUnset(object,path){path=castPath(path,object);object=parent(object,path);return object==null||delete object[toKey(last(path))];}/**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */function baseUpdate(object,path,updater,customizer){return baseSet(object,path,updater(baseGet(object,path)),customizer);}/**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */function baseWhile(array,predicate,isDrop,fromRight){var length=array.length,index=fromRight?length:-1;while((fromRight?index--:++index<length)&&predicate(array[index],index,array)){}return isDrop?baseSlice(array,fromRight?0:index,fromRight?index+1:length):baseSlice(array,fromRight?index+1:0,fromRight?length:index);}/**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */function baseWrapperValue(value,actions){var result=value;if(result instanceof LazyWrapper){result=result.value();}return arrayReduce(actions,function(result,action){return action.func.apply(action.thisArg,arrayPush([result],action.args));},result);}/**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */function baseXor(arrays,iteratee,comparator){var length=arrays.length;if(length<2){return length?baseUniq(arrays[0]):[];}var index=-1,result=Array(length);while(++index<length){var array=arrays[index],othIndex=-1;while(++othIndex<length){if(othIndex!=index){result[index]=baseDifference(result[index]||array,arrays[othIndex],iteratee,comparator);}}}return baseUniq(baseFlatten(result,1),iteratee,comparator);}/**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */function baseZipObject(props,values,assignFunc){var index=-1,length=props.length,valsLength=values.length,result={};while(++index<length){var value=index<valsLength?values[index]:undefined;assignFunc(result,props[index],value);}return result;}/**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */function castArrayLikeObject(value){return isArrayLikeObject(value)?value:[];}/**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */function castFunction(value){return typeof value=='function'?value:identity;}/**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */function castPath(value,object){if(isArray(value)){return value;}return isKey(value,object)?[value]:stringToPath(toString(value));}/**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */var castRest=baseRest;/**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */function castSlice(array,start,end){var length=array.length;end=end===undefined?length:end;return!start&&end>=length?array:baseSlice(array,start,end);}/**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */var clearTimeout=ctxClearTimeout||function(id){return root.clearTimeout(id);};/**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var length=buffer.length,result=allocUnsafe?allocUnsafe(length):new buffer.constructor(length);buffer.copy(result);return result;}/**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}/**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}/**
     * Creates a clone of `map`.
     *
     * @private
     * @param {Object} map The map to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned map.
     */function cloneMap(map,isDeep,cloneFunc){var array=isDeep?cloneFunc(mapToArray(map),CLONE_DEEP_FLAG):mapToArray(map);return arrayReduce(array,addMapEntry,new map.constructor());}/**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}/**
     * Creates a clone of `set`.
     *
     * @private
     * @param {Object} set The set to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned set.
     */function cloneSet(set,isDeep,cloneFunc){var array=isDeep?cloneFunc(setToArray(set),CLONE_DEEP_FLAG):setToArray(set);return arrayReduce(array,addSetEntry,new set.constructor());}/**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}/**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}/**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */function compareAscending(value,other){if(value!==other){var valIsDefined=value!==undefined,valIsNull=value===null,valIsReflexive=value===value,valIsSymbol=isSymbol(value);var othIsDefined=other!==undefined,othIsNull=other===null,othIsReflexive=other===other,othIsSymbol=isSymbol(other);if(!othIsNull&&!othIsSymbol&&!valIsSymbol&&value>other||valIsSymbol&&othIsDefined&&othIsReflexive&&!othIsNull&&!othIsSymbol||valIsNull&&othIsDefined&&othIsReflexive||!valIsDefined&&othIsReflexive||!valIsReflexive){return 1;}if(!valIsNull&&!valIsSymbol&&!othIsSymbol&&value<other||othIsSymbol&&valIsDefined&&valIsReflexive&&!valIsNull&&!valIsSymbol||othIsNull&&valIsDefined&&valIsReflexive||!othIsDefined&&valIsReflexive||!othIsReflexive){return-1;}}return 0;}/**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */function compareMultiple(object,other,orders){var index=-1,objCriteria=object.criteria,othCriteria=other.criteria,length=objCriteria.length,ordersLength=orders.length;while(++index<length){var result=compareAscending(objCriteria[index],othCriteria[index]);if(result){if(index>=ordersLength){return result;}var order=orders[index];return result*(order=='desc'?-1:1);}}// Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
// that causes it, under certain circumstances, to provide the same value for
// `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
// for more details.
//
// This also ensures a stable sort in V8 and other engines.
// See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
return object.index-other.index;}/**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */function composeArgs(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersLength=holders.length,leftIndex=-1,leftLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(leftLength+rangeLength),isUncurried=!isCurried;while(++leftIndex<leftLength){result[leftIndex]=partials[leftIndex];}while(++argsIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[holders[argsIndex]]=args[argsIndex];}}while(rangeLength--){result[leftIndex++]=args[argsIndex++];}return result;}/**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */function composeArgsRight(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersIndex=-1,holdersLength=holders.length,rightIndex=-1,rightLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(rangeLength+rightLength),isUncurried=!isCurried;while(++argsIndex<rangeLength){result[argsIndex]=args[argsIndex];}var offset=argsIndex;while(++rightIndex<rightLength){result[offset+rightIndex]=partials[rightIndex];}while(++holdersIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[offset+holders[holdersIndex]]=args[argsIndex++];}}return result;}/**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}/**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;if(newValue===undefined){newValue=source[key];}if(isNew){baseAssignValue(object,key,newValue);}else{assignValue(object,key,newValue);}}return object;}/**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}/**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */function copySymbolsIn(source,object){return copyObject(source,getSymbolsIn(source),object);}/**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */function createAggregator(setter,initializer){return function(collection,iteratee){var func=isArray(collection)?arrayAggregator:baseAggregator,accumulator=initializer?initializer():{};return func(collection,setter,getIteratee(iteratee,2),accumulator);};}/**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */function createAssigner(assigner){return baseRest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined,guard=length>2?sources[2]:undefined;customizer=assigner.length>3&&typeof customizer=='function'?(length--,customizer):undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined:customizer;length=1;}object=Object(object);while(++index<length){var source=sources[index];if(source){assigner(object,source,index,customizer);}}return object;});}/**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */function createBaseEach(eachFunc,fromRight){return function(collection,iteratee){if(collection==null){return collection;}if(!isArrayLike(collection)){return eachFunc(collection,iteratee);}var length=collection.length,index=fromRight?length:-1,iterable=Object(collection);while(fromRight?index--:++index<length){if(iteratee(iterable[index],index,iterable)===false){break;}}return collection;};}/**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */function createBaseFor(fromRight){return function(object,iteratee,keysFunc){var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;while(length--){var key=props[fromRight?length:++index];if(iteratee(iterable[key],key,iterable)===false){break;}}return object;};}/**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createBind(func,bitmask,thisArg){var isBind=bitmask&WRAP_BIND_FLAG,Ctor=createCtor(func);function wrapper(){var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return fn.apply(isBind?thisArg:this,arguments);}return wrapper;}/**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */function createCaseFirst(methodName){return function(string){string=toString(string);var strSymbols=hasUnicode(string)?stringToArray(string):undefined;var chr=strSymbols?strSymbols[0]:string.charAt(0);var trailing=strSymbols?castSlice(strSymbols,1).join(''):string.slice(1);return chr[methodName]()+trailing;};}/**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */function createCompounder(callback){return function(string){return arrayReduce(words(deburr(string).replace(reApos,'')),callback,'');};}/**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */function createCtor(Ctor){return function(){// Use a `switch` statement to work with class constructors. See
// http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
// for more details.
var args=arguments;switch(args.length){case 0:return new Ctor();case 1:return new Ctor(args[0]);case 2:return new Ctor(args[0],args[1]);case 3:return new Ctor(args[0],args[1],args[2]);case 4:return new Ctor(args[0],args[1],args[2],args[3]);case 5:return new Ctor(args[0],args[1],args[2],args[3],args[4]);case 6:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5]);case 7:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);}var thisBinding=baseCreate(Ctor.prototype),result=Ctor.apply(thisBinding,args);// Mimic the constructor's `return` behavior.
// See https://es5.github.io/#x13.2.2 for more details.
return isObject(result)?result:thisBinding;};}/**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createCurry(func,bitmask,arity){var Ctor=createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length,placeholder=getHolder(wrapper);while(index--){args[index]=arguments[index];}var holders=length<3&&args[0]!==placeholder&&args[length-1]!==placeholder?[]:replaceHolders(args,placeholder);length-=holders.length;if(length<arity){return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,undefined,args,holders,undefined,undefined,arity-length);}var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return apply(fn,this,args);}return wrapper;}/**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */function createFind(findIndexFunc){return function(collection,predicate,fromIndex){var iterable=Object(collection);if(!isArrayLike(collection)){var iteratee=getIteratee(predicate,3);collection=keys(collection);predicate=function predicate(key){return iteratee(iterable[key],key,iterable);};}var index=findIndexFunc(collection,predicate,fromIndex);return index>-1?iterable[iteratee?collection[index]:index]:undefined;};}/**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */function createFlow(fromRight){return flatRest(function(funcs){var length=funcs.length,index=length,prereq=LodashWrapper.prototype.thru;if(fromRight){funcs.reverse();}while(index--){var func=funcs[index];if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}if(prereq&&!wrapper&&getFuncName(func)=='wrapper'){var wrapper=new LodashWrapper([],true);}}index=wrapper?index:length;while(++index<length){func=funcs[index];var funcName=getFuncName(func),data=funcName=='wrapper'?getData(func):undefined;if(data&&isLaziable(data[0])&&data[1]==(WRAP_ARY_FLAG|WRAP_CURRY_FLAG|WRAP_PARTIAL_FLAG|WRAP_REARG_FLAG)&&!data[4].length&&data[9]==1){wrapper=wrapper[getFuncName(data[0])].apply(wrapper,data[3]);}else{wrapper=func.length==1&&isLaziable(func)?wrapper[funcName]():wrapper.thru(func);}}return function(){var args=arguments,value=args[0];if(wrapper&&args.length==1&&isArray(value)){return wrapper.plant(value).value();}var index=0,result=length?funcs[index].apply(this,args):value;while(++index<length){result=funcs[index].call(this,result);}return result;};});}/**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createHybrid(func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity){var isAry=bitmask&WRAP_ARY_FLAG,isBind=bitmask&WRAP_BIND_FLAG,isBindKey=bitmask&WRAP_BIND_KEY_FLAG,isCurried=bitmask&(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG),isFlip=bitmask&WRAP_FLIP_FLAG,Ctor=isBindKey?undefined:createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length;while(index--){args[index]=arguments[index];}if(isCurried){var placeholder=getHolder(wrapper),holdersCount=countHolders(args,placeholder);}if(partials){args=composeArgs(args,partials,holders,isCurried);}if(partialsRight){args=composeArgsRight(args,partialsRight,holdersRight,isCurried);}length-=holdersCount;if(isCurried&&length<arity){var newHolders=replaceHolders(args,placeholder);return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,thisArg,args,newHolders,argPos,ary,arity-length);}var thisBinding=isBind?thisArg:this,fn=isBindKey?thisBinding[func]:func;length=args.length;if(argPos){args=reorder(args,argPos);}else if(isFlip&&length>1){args.reverse();}if(isAry&&ary<length){args.length=ary;}if(this&&this!==root&&this instanceof wrapper){fn=Ctor||createCtor(fn);}return fn.apply(thisBinding,args);}return wrapper;}/**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */function createInverter(setter,toIteratee){return function(object,iteratee){return baseInverter(object,setter,toIteratee(iteratee),{});};}/**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */function createMathOperation(operator,defaultValue){return function(value,other){var result;if(value===undefined&&other===undefined){return defaultValue;}if(value!==undefined){result=value;}if(other!==undefined){if(result===undefined){return other;}if(typeof value=='string'||typeof other=='string'){value=baseToString(value);other=baseToString(other);}else{value=baseToNumber(value);other=baseToNumber(other);}result=operator(value,other);}return result;};}/**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */function createOver(arrayFunc){return flatRest(function(iteratees){iteratees=arrayMap(iteratees,baseUnary(getIteratee()));return baseRest(function(args){var thisArg=this;return arrayFunc(iteratees,function(iteratee){return apply(iteratee,thisArg,args);});});});}/**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */function createPadding(length,chars){chars=chars===undefined?' ':baseToString(chars);var charsLength=chars.length;if(charsLength<2){return charsLength?baseRepeat(chars,length):chars;}var result=baseRepeat(chars,nativeCeil(length/stringSize(chars)));return hasUnicode(chars)?castSlice(stringToArray(result),0,length).join(''):result.slice(0,length);}/**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */function createPartial(func,bitmask,thisArg,partials){var isBind=bitmask&WRAP_BIND_FLAG,Ctor=createCtor(func);function wrapper(){var argsIndex=-1,argsLength=arguments.length,leftIndex=-1,leftLength=partials.length,args=Array(leftLength+argsLength),fn=this&&this!==root&&this instanceof wrapper?Ctor:func;while(++leftIndex<leftLength){args[leftIndex]=partials[leftIndex];}while(argsLength--){args[leftIndex++]=arguments[++argsIndex];}return apply(fn,isBind?thisArg:this,args);}return wrapper;}/**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */function createRange(fromRight){return function(start,end,step){if(step&&typeof step!='number'&&isIterateeCall(start,end,step)){end=step=undefined;}// Ensure the sign of `-0` is preserved.
start=toFinite(start);if(end===undefined){end=start;start=0;}else{end=toFinite(end);}step=step===undefined?start<end?1:-1:toFinite(step);return baseRange(start,end,step,fromRight);};}/**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */function createRelationalOperation(operator){return function(value,other){if(!(typeof value=='string'&&typeof other=='string')){value=toNumber(value);other=toNumber(other);}return operator(value,other);};}/**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createRecurry(func,bitmask,wrapFunc,placeholder,thisArg,partials,holders,argPos,ary,arity){var isCurry=bitmask&WRAP_CURRY_FLAG,newHolders=isCurry?holders:undefined,newHoldersRight=isCurry?undefined:holders,newPartials=isCurry?partials:undefined,newPartialsRight=isCurry?undefined:partials;bitmask|=isCurry?WRAP_PARTIAL_FLAG:WRAP_PARTIAL_RIGHT_FLAG;bitmask&=~(isCurry?WRAP_PARTIAL_RIGHT_FLAG:WRAP_PARTIAL_FLAG);if(!(bitmask&WRAP_CURRY_BOUND_FLAG)){bitmask&=~(WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG);}var newData=[func,bitmask,thisArg,newPartials,newHolders,newPartialsRight,newHoldersRight,argPos,ary,arity];var result=wrapFunc.apply(undefined,newData);if(isLaziable(func)){setData(result,newData);}result.placeholder=placeholder;return setWrapToString(result,func,bitmask);}/**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */function createRound(methodName){var func=Math[methodName];return function(number,precision){number=toNumber(number);precision=precision==null?0:nativeMin(toInteger(precision),292);if(precision){// Shift with exponential notation to avoid floating-point issues.
// See [MDN](https://mdn.io/round#Examples) for more details.
var pair=(toString(number)+'e').split('e'),value=func(pair[0]+'e'+(+pair[1]+precision));pair=(toString(value)+'e').split('e');return+(pair[0]+'e'+(+pair[1]-precision));}return func(number);};}/**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */var createSet=!(Set&&1/setToArray(new Set([,-0]))[1]==INFINITY)?noop:function(values){return new Set(values);};/**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */function createToPairs(keysFunc){return function(object){var tag=getTag(object);if(tag==mapTag){return mapToArray(object);}if(tag==setTag){return setToPairs(object);}return baseToPairs(object,keysFunc(object));};}/**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function createWrap(func,bitmask,thisArg,partials,holders,argPos,ary,arity){var isBindKey=bitmask&WRAP_BIND_KEY_FLAG;if(!isBindKey&&typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var length=partials?partials.length:0;if(!length){bitmask&=~(WRAP_PARTIAL_FLAG|WRAP_PARTIAL_RIGHT_FLAG);partials=holders=undefined;}ary=ary===undefined?ary:nativeMax(toInteger(ary),0);arity=arity===undefined?arity:toInteger(arity);length-=holders?holders.length:0;if(bitmask&WRAP_PARTIAL_RIGHT_FLAG){var partialsRight=partials,holdersRight=holders;partials=holders=undefined;}var data=isBindKey?undefined:getData(func);var newData=[func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity];if(data){mergeData(newData,data);}func=newData[0];bitmask=newData[1];thisArg=newData[2];partials=newData[3];holders=newData[4];arity=newData[9]=newData[9]===undefined?isBindKey?0:func.length:nativeMax(newData[9]-length,0);if(!arity&&bitmask&(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG)){bitmask&=~(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG);}if(!bitmask||bitmask==WRAP_BIND_FLAG){var result=createBind(func,bitmask,thisArg);}else if(bitmask==WRAP_CURRY_FLAG||bitmask==WRAP_CURRY_RIGHT_FLAG){result=createCurry(func,bitmask,arity);}else if((bitmask==WRAP_PARTIAL_FLAG||bitmask==(WRAP_BIND_FLAG|WRAP_PARTIAL_FLAG))&&!holders.length){result=createPartial(func,bitmask,thisArg,partials);}else{result=createHybrid.apply(undefined,newData);}var setter=data?baseSetData:setData;return setWrapToString(setter(result,newData),func,bitmask);}/**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */function customDefaultsAssignIn(objValue,srcValue,key,object){if(objValue===undefined||eq(objValue,objectProto[key])&&!hasOwnProperty.call(object,key)){return srcValue;}return objValue;}/**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */function customDefaultsMerge(objValue,srcValue,key,object,source,stack){if(isObject(objValue)&&isObject(srcValue)){// Recursively merge objects and arrays (susceptible to call stack limits).
stack.set(srcValue,objValue);baseMerge(objValue,srcValue,undefined,customDefaultsMerge,stack);stack['delete'](srcValue);}return objValue;}/**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */function customOmitClone(value){return isPlainObject(value)?undefined:value;}/**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */function equalArrays(array,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}// Assume cyclic values are equal.
var stacked=stack.get(array);if(stacked&&stack.get(other)){return stacked==other;}var index=-1,result=true,seen=bitmask&COMPARE_UNORDERED_FLAG?new SetCache():undefined;stack.set(array,other);stack.set(other,array);// Ignore non-index properties.
while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined){if(compared){continue;}result=false;break;}// Recursively compare arrays (susceptible to call stack limits).
if(seen){if(!arraySome(other,function(othValue,othIndex){if(!cacheHas(seen,othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){return seen.push(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){result=false;break;}}stack['delete'](array);stack['delete'](other);return result;}/**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */function equalByTag(object,other,tag,bitmask,customizer,equalFunc,stack){switch(tag){case dataViewTag:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false;}object=object.buffer;other=other.buffer;case arrayBufferTag:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false;}return true;case boolTag:case dateTag:case numberTag:// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return eq(+object,+other);case errorTag:return object.name==other.name&&object.message==other.message;case regexpTag:case stringTag:// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return object==other+'';case mapTag:var convert=mapToArray;case setTag:var isPartial=bitmask&COMPARE_PARTIAL_FLAG;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false;}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked){return stacked==other;}bitmask|=COMPARE_UNORDERED_FLAG;// Recursively compare objects (susceptible to call stack limits).
stack.set(object,other);var result=equalArrays(convert(object),convert(other),bitmask,customizer,equalFunc,stack);stack['delete'](object);return result;case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other);}}return false;}/**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */function equalObjects(object,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,objProps=getAllKeys(object),objLength=objProps.length,othProps=getAllKeys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty.call(other,key))){return false;}}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked&&stack.get(other)){return stacked==other;}var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}// Recursively compare objects (susceptible to call stack limits).
if(!(compared===undefined?objValue===othValue||equalFunc(objValue,othValue,bitmask,customizer,stack):compared)){result=false;break;}skipCtor||(skipCtor=key=='constructor');}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;// Non `Object` object instances with different constructors are not equal.
if(objCtor!=othCtor&&'constructor'in object&&'constructor'in other&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}stack['delete'](object);stack['delete'](other);return result;}/**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */function flatRest(func){return setToString(overRest(func,undefined,flatten),func+'');}/**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}/**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */function getAllKeysIn(object){return baseGetAllKeys(object,keysIn,getSymbolsIn);}/**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */var getData=!metaMap?noop:function(func){return metaMap.get(func);};/**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */function getFuncName(func){var result=func.name+'',array=realNames[result],length=hasOwnProperty.call(realNames,result)?array.length:0;while(length--){var data=array[length],otherFunc=data.func;if(otherFunc==null||otherFunc==func){return data.name;}}return result;}/**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */function getHolder(func){var object=hasOwnProperty.call(lodash,'placeholder')?lodash:func;return object.placeholder;}/**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */function getIteratee(){var result=lodash.iteratee||iteratee;result=result===iteratee?baseIteratee:result;return arguments.length?result(arguments[0],arguments[1]):result;}/**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}/**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)];}return result;}/**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined;var unmasked=true;}catch(e){}var result=nativeObjectToString.call(value);if(unmasked){if(isOwn){value[symToStringTag]=tag;}else{delete value[symToStringTag];}}return result;}/**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */var getSymbols=!nativeGetSymbols?stubArray:function(object){if(object==null){return[];}object=Object(object);return arrayFilter(nativeGetSymbols(object),function(symbol){return propertyIsEnumerable.call(object,symbol);});};/**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */var getSymbolsIn=!nativeGetSymbols?stubArray:function(object){var result=[];while(object){arrayPush(result,getSymbols(object));object=getPrototype(object);}return result;};/**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function getTag(value){var result=baseGetTag(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):'';if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}/**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */function getView(start,end,transforms){var index=-1,length=transforms.length;while(++index<length){var data=transforms[index],size=data.size;switch(data.type){case'drop':start+=size;break;case'dropRight':end-=size;break;case'take':end=nativeMin(end,start+size);break;case'takeRight':start=nativeMax(start,end-size);break;}}return{'start':start,'end':end};}/**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */function getWrapDetails(source){var match=source.match(reWrapDetails);return match?match[1].split(reSplitDetails):[];}/**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */function hasPath(object,path,hasFunc){path=castPath(path,object);var index=-1,length=path.length,result=false;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}object=object[key];}if(result||++index!=length){return result;}length=object==null?0:object.length;return!!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isArguments(object));}/**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */function initCloneArray(array){var length=array.length,result=array.constructor(length);// Add properties assigned by `RegExp#exec`.
if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}/**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate(getPrototype(object)):{};}/**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */function initCloneByTag(object,tag,cloneFunc,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return cloneMap(object,isDeep,cloneFunc);case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return cloneSet(object,isDeep,cloneFunc);case symbolTag:return cloneSymbol(object);}}/**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */function insertWrapDetails(source,details){var length=details.length;if(!length){return source;}var lastIndex=length-1;details[lastIndex]=(length>1?'& ':'')+details[lastIndex];details=details.join(length>2?', ':' ');return source.replace(reWrapComment,'{\n/* [wrapped with '+details+'] */\n');}/**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol]);}/**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */function isIterateeCall(value,index,object){if(!isObject(object)){return false;}var type=typeof index==='undefined'?'undefined':_typeof(index);if(type=='number'?isArrayLike(object)&&isIndex(index,object.length):type=='string'&&index in object){return eq(object[index],value);}return false;}/**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */function isKey(value,object){if(isArray(value)){return false;}var type=typeof value==='undefined'?'undefined':_typeof(value);if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}/**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */function isKeyable(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}/**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */function isLaziable(func){var funcName=getFuncName(func),other=lodash[funcName];if(typeof other!='function'||!(funcName in LazyWrapper.prototype)){return false;}if(func===other){return true;}var data=getData(other);return!!data&&func===data[0];}/**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */var isMaskable=coreJsData?isFunction:stubFalse;/**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}/**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */function isStrictComparable(value){return value===value&&!isObject(value);}/**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false;}return object[key]===srcValue&&(srcValue!==undefined||key in Object(object));};}/**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */function memoizeCapped(func){var result=memoize(func,function(key){if(cache.size===MAX_MEMOIZE_SIZE){cache.clear();}return key;});var cache=result.cache;return result;}/**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */function mergeData(data,source){var bitmask=data[1],srcBitmask=source[1],newBitmask=bitmask|srcBitmask,isCommon=newBitmask<(WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG|WRAP_ARY_FLAG);var isCombo=srcBitmask==WRAP_ARY_FLAG&&bitmask==WRAP_CURRY_FLAG||srcBitmask==WRAP_ARY_FLAG&&bitmask==WRAP_REARG_FLAG&&data[7].length<=source[8]||srcBitmask==(WRAP_ARY_FLAG|WRAP_REARG_FLAG)&&source[7].length<=source[8]&&bitmask==WRAP_CURRY_FLAG;// Exit early if metadata can't be merged.
if(!(isCommon||isCombo)){return data;}// Use source `thisArg` if available.
if(srcBitmask&WRAP_BIND_FLAG){data[2]=source[2];// Set when currying a bound function.
newBitmask|=bitmask&WRAP_BIND_FLAG?0:WRAP_CURRY_BOUND_FLAG;}// Compose partial arguments.
var value=source[3];if(value){var partials=data[3];data[3]=partials?composeArgs(partials,value,source[4]):value;data[4]=partials?replaceHolders(data[3],PLACEHOLDER):source[4];}// Compose partial right arguments.
value=source[5];if(value){partials=data[5];data[5]=partials?composeArgsRight(partials,value,source[6]):value;data[6]=partials?replaceHolders(data[5],PLACEHOLDER):source[6];}// Use source `argPos` if available.
value=source[7];if(value){data[7]=value;}// Use source `ary` if it's smaller.
if(srcBitmask&WRAP_ARY_FLAG){data[8]=data[8]==null?source[8]:nativeMin(data[8],source[8]);}// Use source `arity` if one is not provided.
if(data[9]==null){data[9]=source[9];}// Use source `func` and merge bitmasks.
data[0]=source[0];data[1]=newBitmask;return data;}/**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}return result;}/**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */function objectToString(value){return nativeObjectToString.call(value);}/**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */function overRest(func,start,transform){start=nativeMax(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=transform(array);return apply(func,this,otherArgs);};}/**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */function parent(object,path){return path.length<2?object:baseGet(object,baseSlice(path,0,-1));}/**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */function reorder(array,indexes){var arrLength=array.length,length=nativeMin(indexes.length,arrLength),oldArray=copyArray(array);while(length--){var index=indexes[length];array[length]=isIndex(index,arrLength)?oldArray[index]:undefined;}return array;}/**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */var setData=shortOut(baseSetData);/**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */var setTimeout=ctxSetTimeout||function(func,wait){return root.setTimeout(func,wait);};/**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */var setToString=shortOut(baseSetToString);/**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */function setWrapToString(wrapper,reference,bitmask){var source=reference+'';return setToString(wrapper,insertWrapDetails(source,updateWrapDetails(getWrapDetails(source),bitmask)));}/**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=HOT_SPAN-(stamp-lastCalled);lastCalled=stamp;if(remaining>0){if(++count>=HOT_COUNT){return arguments[0];}}else{count=0;}return func.apply(undefined,arguments);};}/**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */function shuffleSelf(array,size){var index=-1,length=array.length,lastIndex=length-1;size=size===undefined?length:size;while(++index<size){var rand=baseRandom(index,lastIndex),value=array[rand];array[rand]=array[index];array[index]=value;}array.length=size;return array;}/**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */var stringToPath=memoizeCapped(function(string){var result=[];if(reLeadingDot.test(string)){result.push('');}string.replace(rePropName,function(match,number,quote,string){result.push(quote?string.replace(reEscapeChar,'$1'):number||match);});return result;});/**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}/**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */function updateWrapDetails(details,bitmask){arrayEach(wrapFlags,function(pair){var value='_.'+pair[0];if(bitmask&pair[1]&&!arrayIncludes(details,value)){details.push(value);}});return details.sort();}/**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */function wrapperClone(wrapper){if(wrapper instanceof LazyWrapper){return wrapper.clone();}var result=new LodashWrapper(wrapper.__wrapped__,wrapper.__chain__);result.__actions__=copyArray(wrapper.__actions__);result.__index__=wrapper.__index__;result.__values__=wrapper.__values__;return result;}/*------------------------------------------------------------------------*//**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */function chunk(array,size,guard){if(guard?isIterateeCall(array,size,guard):size===undefined){size=1;}else{size=nativeMax(toInteger(size),0);}var length=array==null?0:array.length;if(!length||size<1){return[];}var index=0,resIndex=0,result=Array(nativeCeil(length/size));while(index<length){result[resIndex++]=baseSlice(array,index,index+=size);}return result;}/**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */function compact(array){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value){result[resIndex++]=value;}}return result;}/**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */function concat(){var length=arguments.length;if(!length){return[];}var args=Array(length-1),array=arguments[0],index=length;while(index--){args[index-1]=arguments[index];}return arrayPush(isArray(array)?copyArray(array):[array],baseFlatten(args,1));}/**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */var difference=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true)):[];});/**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */var differenceBy=baseRest(function(array,values){var iteratee=last(values);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),getIteratee(iteratee,2)):[];});/**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */var differenceWith=baseRest(function(array,values){var comparator=last(values);if(isArrayLikeObject(comparator)){comparator=undefined;}return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),undefined,comparator):[];});/**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */function drop(array,n,guard){var length=array==null?0:array.length;if(!length){return[];}n=guard||n===undefined?1:toInteger(n);return baseSlice(array,n<0?0:n,length);}/**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */function dropRight(array,n,guard){var length=array==null?0:array.length;if(!length){return[];}n=guard||n===undefined?1:toInteger(n);n=length-n;return baseSlice(array,0,n<0?0:n);}/**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */function dropRightWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),true,true):[];}/**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */function dropWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),true):[];}/**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */function fill(array,value,start,end){var length=array==null?0:array.length;if(!length){return[];}if(start&&typeof start!='number'&&isIterateeCall(array,value,start)){start=0;end=length;}return baseFill(array,value,start,end);}/**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */function findIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseFindIndex(array,getIteratee(predicate,3),index);}/**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */function findLastIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=length-1;if(fromIndex!==undefined){index=toInteger(fromIndex);index=fromIndex<0?nativeMax(length+index,0):nativeMin(index,length-1);}return baseFindIndex(array,getIteratee(predicate,3),index,true);}/**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */function flatten(array){var length=array==null?0:array.length;return length?baseFlatten(array,1):[];}/**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */function flattenDeep(array){var length=array==null?0:array.length;return length?baseFlatten(array,INFINITY):[];}/**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */function flattenDepth(array,depth){var length=array==null?0:array.length;if(!length){return[];}depth=depth===undefined?1:toInteger(depth);return baseFlatten(array,depth);}/**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */function fromPairs(pairs){var index=-1,length=pairs==null?0:pairs.length,result={};while(++index<length){var pair=pairs[index];result[pair[0]]=pair[1];}return result;}/**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */function head(array){return array&&array.length?array[0]:undefined;}/**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */function indexOf(array,value,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseIndexOf(array,value,index);}/**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */function initial(array){var length=array==null?0:array.length;return length?baseSlice(array,0,-1):[];}/**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */var intersection=baseRest(function(arrays){var mapped=arrayMap(arrays,castArrayLikeObject);return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped):[];});/**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */var intersectionBy=baseRest(function(arrays){var iteratee=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);if(iteratee===last(mapped)){iteratee=undefined;}else{mapped.pop();}return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped,getIteratee(iteratee,2)):[];});/**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */var intersectionWith=baseRest(function(arrays){var comparator=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);comparator=typeof comparator=='function'?comparator:undefined;if(comparator){mapped.pop();}return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped,undefined,comparator):[];});/**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */function join(array,separator){return array==null?'':nativeJoin.call(array,separator);}/**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */function last(array){var length=array==null?0:array.length;return length?array[length-1]:undefined;}/**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */function lastIndexOf(array,value,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=length;if(fromIndex!==undefined){index=toInteger(fromIndex);index=index<0?nativeMax(length+index,0):nativeMin(index,length-1);}return value===value?strictLastIndexOf(array,value,index):baseFindIndex(array,baseIsNaN,index,true);}/**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */function nth(array,n){return array&&array.length?baseNth(array,toInteger(n)):undefined;}/**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */var pull=baseRest(pullAll);/**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */function pullAll(array,values){return array&&array.length&&values&&values.length?basePullAll(array,values):array;}/**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */function pullAllBy(array,values,iteratee){return array&&array.length&&values&&values.length?basePullAll(array,values,getIteratee(iteratee,2)):array;}/**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */function pullAllWith(array,values,comparator){return array&&array.length&&values&&values.length?basePullAll(array,values,undefined,comparator):array;}/**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */var pullAt=flatRest(function(array,indexes){var length=array==null?0:array.length,result=baseAt(array,indexes);basePullAt(array,arrayMap(indexes,function(index){return isIndex(index,length)?+index:index;}).sort(compareAscending));return result;});/**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */function remove(array,predicate){var result=[];if(!(array&&array.length)){return result;}var index=-1,indexes=[],length=array.length;predicate=getIteratee(predicate,3);while(++index<length){var value=array[index];if(predicate(value,index,array)){result.push(value);indexes.push(index);}}basePullAt(array,indexes);return result;}/**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */function reverse(array){return array==null?array:nativeReverse.call(array);}/**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */function slice(array,start,end){var length=array==null?0:array.length;if(!length){return[];}if(end&&typeof end!='number'&&isIterateeCall(array,start,end)){start=0;end=length;}else{start=start==null?0:toInteger(start);end=end===undefined?length:toInteger(end);}return baseSlice(array,start,end);}/**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */function sortedIndex(array,value){return baseSortedIndex(array,value);}/**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */function sortedIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee,2));}/**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */function sortedIndexOf(array,value){var length=array==null?0:array.length;if(length){var index=baseSortedIndex(array,value);if(index<length&&eq(array[index],value)){return index;}}return-1;}/**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */function sortedLastIndex(array,value){return baseSortedIndex(array,value,true);}/**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */function sortedLastIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee,2),true);}/**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */function sortedLastIndexOf(array,value){var length=array==null?0:array.length;if(length){var index=baseSortedIndex(array,value,true)-1;if(eq(array[index],value)){return index;}}return-1;}/**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */function sortedUniq(array){return array&&array.length?baseSortedUniq(array):[];}/**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */function sortedUniqBy(array,iteratee){return array&&array.length?baseSortedUniq(array,getIteratee(iteratee,2)):[];}/**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */function tail(array){var length=array==null?0:array.length;return length?baseSlice(array,1,length):[];}/**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */function take(array,n,guard){if(!(array&&array.length)){return[];}n=guard||n===undefined?1:toInteger(n);return baseSlice(array,0,n<0?0:n);}/**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */function takeRight(array,n,guard){var length=array==null?0:array.length;if(!length){return[];}n=guard||n===undefined?1:toInteger(n);n=length-n;return baseSlice(array,n<0?0:n,length);}/**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */function takeRightWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),false,true):[];}/**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */function takeWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3)):[];}/**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */var union=baseRest(function(arrays){return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true));});/**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */var unionBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),getIteratee(iteratee,2));});/**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */var unionWith=baseRest(function(arrays){var comparator=last(arrays);comparator=typeof comparator=='function'?comparator:undefined;return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),undefined,comparator);});/**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */function uniq(array){return array&&array.length?baseUniq(array):[];}/**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */function uniqBy(array,iteratee){return array&&array.length?baseUniq(array,getIteratee(iteratee,2)):[];}/**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */function uniqWith(array,comparator){comparator=typeof comparator=='function'?comparator:undefined;return array&&array.length?baseUniq(array,undefined,comparator):[];}/**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */function unzip(array){if(!(array&&array.length)){return[];}var length=0;array=arrayFilter(array,function(group){if(isArrayLikeObject(group)){length=nativeMax(group.length,length);return true;}});return baseTimes(length,function(index){return arrayMap(array,baseProperty(index));});}/**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */function unzipWith(array,iteratee){if(!(array&&array.length)){return[];}var result=unzip(array);if(iteratee==null){return result;}return arrayMap(result,function(group){return apply(iteratee,undefined,group);});}/**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */var without=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,values):[];});/**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */var xor=baseRest(function(arrays){return baseXor(arrayFilter(arrays,isArrayLikeObject));});/**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */var xorBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return baseXor(arrayFilter(arrays,isArrayLikeObject),getIteratee(iteratee,2));});/**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */var xorWith=baseRest(function(arrays){var comparator=last(arrays);comparator=typeof comparator=='function'?comparator:undefined;return baseXor(arrayFilter(arrays,isArrayLikeObject),undefined,comparator);});/**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */var zip=baseRest(unzip);/**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */function zipObject(props,values){return baseZipObject(props||[],values||[],assignValue);}/**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */function zipObjectDeep(props,values){return baseZipObject(props||[],values||[],baseSet);}/**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */var zipWith=baseRest(function(arrays){var length=arrays.length,iteratee=length>1?arrays[length-1]:undefined;iteratee=typeof iteratee=='function'?(arrays.pop(),iteratee):undefined;return unzipWith(arrays,iteratee);});/*------------------------------------------------------------------------*//**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */function chain(value){var result=lodash(value);result.__chain__=true;return result;}/**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */function tap(value,interceptor){interceptor(value);return value;}/**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */function thru(value,interceptor){return interceptor(value);}/**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */var wrapperAt=flatRest(function(paths){var length=paths.length,start=length?paths[0]:0,value=this.__wrapped__,interceptor=function interceptor(object){return baseAt(object,paths);};if(length>1||this.__actions__.length||!(value instanceof LazyWrapper)||!isIndex(start)){return this.thru(interceptor);}value=value.slice(start,+start+(length?1:0));value.__actions__.push({'func':thru,'args':[interceptor],'thisArg':undefined});return new LodashWrapper(value,this.__chain__).thru(function(array){if(length&&!array.length){array.push(undefined);}return array;});});/**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */function wrapperChain(){return chain(this);}/**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */function wrapperCommit(){return new LodashWrapper(this.value(),this.__chain__);}/**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */function wrapperNext(){if(this.__values__===undefined){this.__values__=toArray(this.value());}var done=this.__index__>=this.__values__.length,value=done?undefined:this.__values__[this.__index__++];return{'done':done,'value':value};}/**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */function wrapperToIterator(){return this;}/**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */function wrapperPlant(value){var result,parent=this;while(parent instanceof baseLodash){var clone=wrapperClone(parent);clone.__index__=0;clone.__values__=undefined;if(result){previous.__wrapped__=clone;}else{result=clone;}var previous=clone;parent=parent.__wrapped__;}previous.__wrapped__=value;return result;}/**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */function wrapperReverse(){var value=this.__wrapped__;if(value instanceof LazyWrapper){var wrapped=value;if(this.__actions__.length){wrapped=new LazyWrapper(this);}wrapped=wrapped.reverse();wrapped.__actions__.push({'func':thru,'args':[reverse],'thisArg':undefined});return new LodashWrapper(wrapped,this.__chain__);}return this.thru(reverse);}/**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */function wrapperValue(){return baseWrapperValue(this.__wrapped__,this.__actions__);}/*------------------------------------------------------------------------*//**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */var countBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){++result[key];}else{baseAssignValue(result,key,1);}});/**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */function every(collection,predicate,guard){var func=isArray(collection)?arrayEvery:baseEvery;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}return func(collection,getIteratee(predicate,3));}/**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */function filter(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,getIteratee(predicate,3));}/**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */var find=createFind(findIndex);/**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */var findLast=createFind(findLastIndex);/**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */function flatMap(collection,iteratee){return baseFlatten(map(collection,iteratee),1);}/**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */function flatMapDeep(collection,iteratee){return baseFlatten(map(collection,iteratee),INFINITY);}/**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */function flatMapDepth(collection,iteratee,depth){depth=depth===undefined?1:toInteger(depth);return baseFlatten(map(collection,iteratee),depth);}/**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */function forEach(collection,iteratee){var func=isArray(collection)?arrayEach:baseEach;return func(collection,getIteratee(iteratee,3));}/**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */function forEachRight(collection,iteratee){var func=isArray(collection)?arrayEachRight:baseEachRight;return func(collection,getIteratee(iteratee,3));}/**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */var groupBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){result[key].push(value);}else{baseAssignValue(result,key,[value]);}});/**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */function includes(collection,value,fromIndex,guard){collection=isArrayLike(collection)?collection:values(collection);fromIndex=fromIndex&&!guard?toInteger(fromIndex):0;var length=collection.length;if(fromIndex<0){fromIndex=nativeMax(length+fromIndex,0);}return isString(collection)?fromIndex<=length&&collection.indexOf(value,fromIndex)>-1:!!length&&baseIndexOf(collection,value,fromIndex)>-1;}/**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */var invokeMap=baseRest(function(collection,path,args){var index=-1,isFunc=typeof path=='function',result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value){result[++index]=isFunc?apply(path,value,args):baseInvoke(value,path,args);});return result;});/**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */var keyBy=createAggregator(function(result,value,key){baseAssignValue(result,key,value);});/**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */function map(collection,iteratee){var func=isArray(collection)?arrayMap:baseMap;return func(collection,getIteratee(iteratee,3));}/**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */function orderBy(collection,iteratees,orders,guard){if(collection==null){return[];}if(!isArray(iteratees)){iteratees=iteratees==null?[]:[iteratees];}orders=guard?undefined:orders;if(!isArray(orders)){orders=orders==null?[]:[orders];}return baseOrderBy(collection,iteratees,orders);}/**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */var partition=createAggregator(function(result,value,key){result[key?0:1].push(value);},function(){return[[],[]];});/**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */function reduce(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduce:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEach);}/**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */function reduceRight(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduceRight:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEachRight);}/**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */function reject(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,negate(getIteratee(predicate,3)));}/**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */function sample(collection){var func=isArray(collection)?arraySample:baseSample;return func(collection);}/**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */function sampleSize(collection,n,guard){if(guard?isIterateeCall(collection,n,guard):n===undefined){n=1;}else{n=toInteger(n);}var func=isArray(collection)?arraySampleSize:baseSampleSize;return func(collection,n);}/**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */function shuffle(collection){var func=isArray(collection)?arrayShuffle:baseShuffle;return func(collection);}/**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */function size(collection){if(collection==null){return 0;}if(isArrayLike(collection)){return isString(collection)?stringSize(collection):collection.length;}var tag=getTag(collection);if(tag==mapTag||tag==setTag){return collection.size;}return baseKeys(collection).length;}/**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */function some(collection,predicate,guard){var func=isArray(collection)?arraySome:baseSome;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}return func(collection,getIteratee(predicate,3));}/**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
     */var sortBy=baseRest(function(collection,iteratees){if(collection==null){return[];}var length=iteratees.length;if(length>1&&isIterateeCall(collection,iteratees[0],iteratees[1])){iteratees=[];}else if(length>2&&isIterateeCall(iteratees[0],iteratees[1],iteratees[2])){iteratees=[iteratees[0]];}return baseOrderBy(collection,baseFlatten(iteratees,1),[]);});/*------------------------------------------------------------------------*//**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */var now=ctxNow||function(){return root.Date.now();};/*------------------------------------------------------------------------*//**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */function after(n,func){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}n=toInteger(n);return function(){if(--n<1){return func.apply(this,arguments);}};}/**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */function ary(func,n,guard){n=guard?undefined:n;n=func&&n==null?func.length:n;return createWrap(func,WRAP_ARY_FLAG,undefined,undefined,undefined,undefined,n);}/**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */function before(n,func){var result;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}n=toInteger(n);return function(){if(--n>0){result=func.apply(this,arguments);}if(n<=1){func=undefined;}return result;};}/**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */var bind=baseRest(function(func,thisArg,partials){var bitmask=WRAP_BIND_FLAG;if(partials.length){var holders=replaceHolders(partials,getHolder(bind));bitmask|=WRAP_PARTIAL_FLAG;}return createWrap(func,bitmask,thisArg,partials,holders);});/**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */var bindKey=baseRest(function(object,key,partials){var bitmask=WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG;if(partials.length){var holders=replaceHolders(partials,getHolder(bindKey));bitmask|=WRAP_PARTIAL_FLAG;}return createWrap(key,bitmask,object,partials,holders);});/**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */function curry(func,arity,guard){arity=guard?undefined:arity;var result=createWrap(func,WRAP_CURRY_FLAG,undefined,undefined,undefined,undefined,undefined,arity);result.placeholder=curry.placeholder;return result;}/**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */function curryRight(func,arity,guard){arity=guard?undefined:arity;var result=createWrap(func,WRAP_CURRY_RIGHT_FLAG,undefined,undefined,undefined,undefined,undefined,arity);result.placeholder=curryRight.placeholder;return result;}/**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=false,maxing=false,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}wait=toNumber(wait)||0;if(isObject(options)){leading=!!options.leading;maxing='maxWait'in options;maxWait=maxing?nativeMax(toNumber(options.maxWait)||0,wait):maxWait;trailing='trailing'in options?!!options.trailing:trailing;}function invokeFunc(time){var args=lastArgs,thisArg=lastThis;lastArgs=lastThis=undefined;lastInvokeTime=time;result=func.apply(thisArg,args);return result;}function leadingEdge(time){// Reset any `maxWait` timer.
lastInvokeTime=time;// Start the timer for the trailing edge.
timerId=setTimeout(timerExpired,wait);// Invoke the leading edge.
return leading?invokeFunc(time):result;}function remainingWait(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime,result=wait-timeSinceLastCall;return maxing?nativeMin(result,maxWait-timeSinceLastInvoke):result;}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return lastCallTime===undefined||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&timeSinceLastInvoke>=maxWait;}function timerExpired(){var time=now();if(shouldInvoke(time)){return trailingEdge(time);}// Restart the timer.
timerId=setTimeout(timerExpired,remainingWait(time));}function trailingEdge(time){timerId=undefined;// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
if(trailing&&lastArgs){return invokeFunc(time);}lastArgs=lastThis=undefined;return result;}function cancel(){if(timerId!==undefined){clearTimeout(timerId);}lastInvokeTime=0;lastArgs=lastCallTime=lastThis=timerId=undefined;}function flush(){return timerId===undefined?result:trailingEdge(now());}function debounced(){var time=now(),isInvoking=shouldInvoke(time);lastArgs=arguments;lastThis=this;lastCallTime=time;if(isInvoking){if(timerId===undefined){return leadingEdge(lastCallTime);}if(maxing){// Handle invocations in a tight loop.
timerId=setTimeout(timerExpired,wait);return invokeFunc(lastCallTime);}}if(timerId===undefined){timerId=setTimeout(timerExpired,wait);}return result;}debounced.cancel=cancel;debounced.flush=flush;return debounced;}/**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */var defer=baseRest(function(func,args){return baseDelay(func,1,args);});/**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */var delay=baseRest(function(func,wait,args){return baseDelay(func,toNumber(wait)||0,args);});/**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */function flip(func){return createWrap(func,WRAP_FLIP_FLAG);}/**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */function memoize(func,resolver){if(typeof func!='function'||resolver!=null&&typeof resolver!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var memoized=function memoized(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result)||cache;return result;};memoized.cache=new(memoize.Cache||MapCache)();return memoized;}// Expose `MapCache`.
memoize.Cache=MapCache;/**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */function negate(predicate){if(typeof predicate!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return function(){var args=arguments;switch(args.length){case 0:return!predicate.call(this);case 1:return!predicate.call(this,args[0]);case 2:return!predicate.call(this,args[0],args[1]);case 3:return!predicate.call(this,args[0],args[1],args[2]);}return!predicate.apply(this,args);};}/**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */function once(func){return before(2,func);}/**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */var overArgs=castRest(function(func,transforms){transforms=transforms.length==1&&isArray(transforms[0])?arrayMap(transforms[0],baseUnary(getIteratee())):arrayMap(baseFlatten(transforms,1),baseUnary(getIteratee()));var funcsLength=transforms.length;return baseRest(function(args){var index=-1,length=nativeMin(args.length,funcsLength);while(++index<length){args[index]=transforms[index].call(this,args[index]);}return apply(func,this,args);});});/**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */var partial=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partial));return createWrap(func,WRAP_PARTIAL_FLAG,undefined,partials,holders);});/**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */var partialRight=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partialRight));return createWrap(func,WRAP_PARTIAL_RIGHT_FLAG,undefined,partials,holders);});/**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */var rearg=flatRest(function(func,indexes){return createWrap(func,WRAP_REARG_FLAG,undefined,undefined,undefined,indexes);});/**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */function rest(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}start=start===undefined?start:toInteger(start);return baseRest(func,start);}/**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */function spread(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}start=start==null?0:nativeMax(toInteger(start),0);return baseRest(function(args){var array=args[start],otherArgs=castSlice(args,0,start);if(array){arrayPush(otherArgs,array);}return apply(func,this,otherArgs);});}/**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */function throttle(func,wait,options){var leading=true,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}if(isObject(options)){leading='leading'in options?!!options.leading:leading;trailing='trailing'in options?!!options.trailing:trailing;}return debounce(func,wait,{'leading':leading,'maxWait':wait,'trailing':trailing});}/**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */function unary(func){return ary(func,1);}/**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */function wrap(value,wrapper){return partial(castFunction(wrapper),value);}/*------------------------------------------------------------------------*//**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */function castArray(){if(!arguments.length){return[];}var value=arguments[0];return isArray(value)?value:[value];}/**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */function clone(value){return baseClone(value,CLONE_SYMBOLS_FLAG);}/**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */function cloneWith(value,customizer){customizer=typeof customizer=='function'?customizer:undefined;return baseClone(value,CLONE_SYMBOLS_FLAG,customizer);}/**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */function cloneDeep(value){return baseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG);}/**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */function cloneDeepWith(value,customizer){customizer=typeof customizer=='function'?customizer:undefined;return baseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG,customizer);}/**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */function conformsTo(object,source){return source==null||baseConformsTo(object,source,keys(source));}/**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */function eq(value,other){return value===other||value!==value&&other!==other;}/**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */var gt=createRelationalOperation(baseGt);/**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */var gte=createRelationalOperation(function(value,other){return value>=other;});/**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */var isArguments=baseIsArguments(function(){return arguments;}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty.call(value,'callee')&&!propertyIsEnumerable.call(value,'callee');};/**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */var isArray=Array.isArray;/**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */var isArrayBuffer=nodeIsArrayBuffer?baseUnary(nodeIsArrayBuffer):baseIsArrayBuffer;/**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}/**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */function isBoolean(value){return value===true||value===false||isObjectLike(value)&&baseGetTag(value)==boolTag;}/**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */var isBuffer=nativeIsBuffer||stubFalse;/**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */var isDate=nodeIsDate?baseUnary(nodeIsDate):baseIsDate;/**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */function isElement(value){return isObjectLike(value)&&value.nodeType===1&&!isPlainObject(value);}/**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */function isEmpty(value){if(value==null){return true;}if(isArrayLike(value)&&(isArray(value)||typeof value=='string'||typeof value.splice=='function'||isBuffer(value)||isTypedArray(value)||isArguments(value))){return!value.length;}var tag=getTag(value);if(tag==mapTag||tag==setTag){return!value.size;}if(isPrototype(value)){return!baseKeys(value).length;}for(var key in value){if(hasOwnProperty.call(value,key)){return false;}}return true;}/**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */function isEqual(value,other){return baseIsEqual(value,other);}/**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */function isEqualWith(value,other,customizer){customizer=typeof customizer=='function'?customizer:undefined;var result=customizer?customizer(value,other):undefined;return result===undefined?baseIsEqual(value,other,undefined,customizer):!!result;}/**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */function isError(value){if(!isObjectLike(value)){return false;}var tag=baseGetTag(value);return tag==errorTag||tag==domExcTag||typeof value.message=='string'&&typeof value.name=='string'&&!isPlainObject(value);}/**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */function isFinite(value){return typeof value=='number'&&nativeIsFinite(value);}/**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */function isFunction(value){if(!isObject(value)){return false;}// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var tag=baseGetTag(value);return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag;}/**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */function isInteger(value){return typeof value=='number'&&value==toInteger(value);}/**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */function isObject(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return value!=null&&(type=='object'||type=='function');}/**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */function isObjectLike(value){return value!=null&&(typeof value==='undefined'?'undefined':_typeof(value))=='object';}/**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */var isMap=nodeIsMap?baseUnary(nodeIsMap):baseIsMap;/**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */function isMatch(object,source){return object===source||baseIsMatch(object,source,getMatchData(source));}/**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */function isMatchWith(object,source,customizer){customizer=typeof customizer=='function'?customizer:undefined;return baseIsMatch(object,source,getMatchData(source),customizer);}/**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */function isNaN(value){// An `NaN` primitive is the only value that is not equal to itself.
// Perform the `toStringTag` check first to avoid errors with some
// ActiveX objects in IE.
return isNumber(value)&&value!=+value;}/**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */function isNative(value){if(isMaskable(value)){throw new Error(CORE_ERROR_TEXT);}return baseIsNative(value);}/**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */function isNull(value){return value===null;}/**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */function isNil(value){return value==null;}/**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */function isNumber(value){return typeof value=='number'||isObjectLike(value)&&baseGetTag(value)==numberTag;}/**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */function isPlainObject(value){if(!isObjectLike(value)||baseGetTag(value)!=objectTag){return false;}var proto=getPrototype(value);if(proto===null){return true;}var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;return typeof Ctor=='function'&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString;}/**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */var isRegExp=nodeIsRegExp?baseUnary(nodeIsRegExp):baseIsRegExp;/**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */function isSafeInteger(value){return isInteger(value)&&value>=-MAX_SAFE_INTEGER&&value<=MAX_SAFE_INTEGER;}/**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */var isSet=nodeIsSet?baseUnary(nodeIsSet):baseIsSet;/**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */function isString(value){return typeof value=='string'||!isArray(value)&&isObjectLike(value)&&baseGetTag(value)==stringTag;}/**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */function isSymbol(value){return(typeof value==='undefined'?'undefined':_typeof(value))=='symbol'||isObjectLike(value)&&baseGetTag(value)==symbolTag;}/**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;/**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */function isUndefined(value){return value===undefined;}/**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */function isWeakMap(value){return isObjectLike(value)&&getTag(value)==weakMapTag;}/**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */function isWeakSet(value){return isObjectLike(value)&&baseGetTag(value)==weakSetTag;}/**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */var lt=createRelationalOperation(baseLt);/**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */var lte=createRelationalOperation(function(value,other){return value<=other;});/**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */function toArray(value){if(!value){return[];}if(isArrayLike(value)){return isString(value)?stringToArray(value):copyArray(value);}if(symIterator&&value[symIterator]){return iteratorToArray(value[symIterator]());}var tag=getTag(value),func=tag==mapTag?mapToArray:tag==setTag?setToArray:values;return func(value);}/**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */function toFinite(value){if(!value){return value===0?value:0;}value=toNumber(value);if(value===INFINITY||value===-INFINITY){var sign=value<0?-1:1;return sign*MAX_INTEGER;}return value===value?value:0;}/**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?remainder?result-remainder:result:0;}/**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */function toLength(value){return value?baseClamp(toInteger(value),0,MAX_ARRAY_LENGTH):0;}/**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */function toNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}if(isObject(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject(other)?other+'':other;}if(typeof value!='string'){return value===0?value:+value;}value=value.replace(reTrim,'');var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value;}/**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */function toPlainObject(value){return copyObject(value,keysIn(value));}/**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */function toSafeInteger(value){return value?baseClamp(toInteger(value),-MAX_SAFE_INTEGER,MAX_SAFE_INTEGER):value===0?value:0;}/**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */function toString(value){return value==null?'':baseToString(value);}/*------------------------------------------------------------------------*//**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */var assign=createAssigner(function(object,source){if(isPrototype(source)||isArrayLike(source)){copyObject(source,keys(source),object);return;}for(var key in source){if(hasOwnProperty.call(source,key)){assignValue(object,key,source[key]);}}});/**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */var assignIn=createAssigner(function(object,source){copyObject(source,keysIn(source),object);});/**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */var assignInWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keysIn(source),object,customizer);});/**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */var assignWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keys(source),object,customizer);});/**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */var at=flatRest(baseAt);/**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */function create(prototype,properties){var result=baseCreate(prototype);return properties==null?result:baseAssign(result,properties);}/**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */var defaults=baseRest(function(args){args.push(undefined,customDefaultsAssignIn);return apply(assignInWith,undefined,args);});/**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */var defaultsDeep=baseRest(function(args){args.push(undefined,customDefaultsMerge);return apply(mergeWith,undefined,args);});/**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */function findKey(object,predicate){return baseFindKey(object,getIteratee(predicate,3),baseForOwn);}/**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */function findLastKey(object,predicate){return baseFindKey(object,getIteratee(predicate,3),baseForOwnRight);}/**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */function forIn(object,iteratee){return object==null?object:baseFor(object,getIteratee(iteratee,3),keysIn);}/**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */function forInRight(object,iteratee){return object==null?object:baseForRight(object,getIteratee(iteratee,3),keysIn);}/**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */function forOwn(object,iteratee){return object&&baseForOwn(object,getIteratee(iteratee,3));}/**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */function forOwnRight(object,iteratee){return object&&baseForOwnRight(object,getIteratee(iteratee,3));}/**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */function functions(object){return object==null?[]:baseFunctions(object,keys(object));}/**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */function functionsIn(object){return object==null?[]:baseFunctions(object,keysIn(object));}/**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */function get(object,path,defaultValue){var result=object==null?undefined:baseGet(object,path);return result===undefined?defaultValue:result;}/**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */function has(object,path){return object!=null&&hasPath(object,path,baseHas);}/**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn);}/**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */var invert=createInverter(function(result,value,key){result[value]=key;},constant(identity));/**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */var invertBy=createInverter(function(result,value,key){if(hasOwnProperty.call(result,value)){result[value].push(key);}else{result[value]=[key];}},getIteratee);/**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */var invoke=baseRest(baseInvoke);/**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}/**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object);}/**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */function mapKeys(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){baseAssignValue(result,iteratee(value,key,object),value);});return result;}/**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */function mapValues(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){baseAssignValue(result,key,iteratee(value,key,object));});return result;}/**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */var merge=createAssigner(function(object,source,srcIndex){baseMerge(object,source,srcIndex);});/**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */var mergeWith=createAssigner(function(object,source,srcIndex,customizer){baseMerge(object,source,srcIndex,customizer);});/**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */var omit=flatRest(function(object,paths){var result={};if(object==null){return result;}var isDeep=false;paths=arrayMap(paths,function(path){path=castPath(path,object);isDeep||(isDeep=path.length>1);return path;});copyObject(object,getAllKeysIn(object),result);if(isDeep){result=baseClone(result,CLONE_DEEP_FLAG|CLONE_FLAT_FLAG|CLONE_SYMBOLS_FLAG,customOmitClone);}var length=paths.length;while(length--){baseUnset(result,paths[length]);}return result;});/**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */function omitBy(object,predicate){return pickBy(object,negate(getIteratee(predicate)));}/**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */var pick=flatRest(function(object,paths){return object==null?{}:basePick(object,paths);});/**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */function pickBy(object,predicate){if(object==null){return{};}var props=arrayMap(getAllKeysIn(object),function(prop){return[prop];});predicate=getIteratee(predicate);return basePickBy(object,props,function(value,path){return predicate(value,path[0]);});}/**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */function result(object,path,defaultValue){path=castPath(path,object);var index=-1,length=path.length;// Ensure the loop is entered when path is empty.
if(!length){length=1;object=undefined;}while(++index<length){var value=object==null?undefined:object[toKey(path[index])];if(value===undefined){index=length;value=defaultValue;}object=isFunction(value)?value.call(object):value;}return object;}/**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */function set(object,path,value){return object==null?object:baseSet(object,path,value);}/**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */function setWith(object,path,value,customizer){customizer=typeof customizer=='function'?customizer:undefined;return object==null?object:baseSet(object,path,value,customizer);}/**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */var toPairs=createToPairs(keys);/**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */var toPairsIn=createToPairs(keysIn);/**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */function transform(object,iteratee,accumulator){var isArr=isArray(object),isArrLike=isArr||isBuffer(object)||isTypedArray(object);iteratee=getIteratee(iteratee,4);if(accumulator==null){var Ctor=object&&object.constructor;if(isArrLike){accumulator=isArr?new Ctor():[];}else if(isObject(object)){accumulator=isFunction(Ctor)?baseCreate(getPrototype(object)):{};}else{accumulator={};}}(isArrLike?arrayEach:baseForOwn)(object,function(value,index,object){return iteratee(accumulator,value,index,object);});return accumulator;}/**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */function unset(object,path){return object==null?true:baseUnset(object,path);}/**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */function update(object,path,updater){return object==null?object:baseUpdate(object,path,castFunction(updater));}/**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */function updateWith(object,path,updater,customizer){customizer=typeof customizer=='function'?customizer:undefined;return object==null?object:baseUpdate(object,path,castFunction(updater),customizer);}/**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */function values(object){return object==null?[]:baseValues(object,keys(object));}/**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */function valuesIn(object){return object==null?[]:baseValues(object,keysIn(object));}/*------------------------------------------------------------------------*//**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */function clamp(number,lower,upper){if(upper===undefined){upper=lower;lower=undefined;}if(upper!==undefined){upper=toNumber(upper);upper=upper===upper?upper:0;}if(lower!==undefined){lower=toNumber(lower);lower=lower===lower?lower:0;}return baseClamp(toNumber(number),lower,upper);}/**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */function inRange(number,start,end){start=toFinite(start);if(end===undefined){end=start;start=0;}else{end=toFinite(end);}number=toNumber(number);return baseInRange(number,start,end);}/**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */function random(lower,upper,floating){if(floating&&typeof floating!='boolean'&&isIterateeCall(lower,upper,floating)){upper=floating=undefined;}if(floating===undefined){if(typeof upper=='boolean'){floating=upper;upper=undefined;}else if(typeof lower=='boolean'){floating=lower;lower=undefined;}}if(lower===undefined&&upper===undefined){lower=0;upper=1;}else{lower=toFinite(lower);if(upper===undefined){upper=lower;lower=0;}else{upper=toFinite(upper);}}if(lower>upper){var temp=lower;lower=upper;upper=temp;}if(floating||lower%1||upper%1){var rand=nativeRandom();return nativeMin(lower+rand*(upper-lower+freeParseFloat('1e-'+((rand+'').length-1))),upper);}return baseRandom(lower,upper);}/*------------------------------------------------------------------------*//**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */var camelCase=createCompounder(function(result,word,index){word=word.toLowerCase();return result+(index?capitalize(word):word);});/**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */function capitalize(string){return upperFirst(toString(string).toLowerCase());}/**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */function deburr(string){string=toString(string);return string&&string.replace(reLatin,deburrLetter).replace(reComboMark,'');}/**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */function endsWith(string,target,position){string=toString(string);target=baseToString(target);var length=string.length;position=position===undefined?length:baseClamp(toInteger(position),0,length);var end=position;position-=target.length;return position>=0&&string.slice(position,end)==target;}/**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */function escape(string){string=toString(string);return string&&reHasUnescapedHtml.test(string)?string.replace(reUnescapedHtml,escapeHtmlChar):string;}/**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */function escapeRegExp(string){string=toString(string);return string&&reHasRegExpChar.test(string)?string.replace(reRegExpChar,'\\$&'):string;}/**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */var kebabCase=createCompounder(function(result,word,index){return result+(index?'-':'')+word.toLowerCase();});/**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */var lowerCase=createCompounder(function(result,word,index){return result+(index?' ':'')+word.toLowerCase();});/**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */var lowerFirst=createCaseFirst('toLowerCase');/**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */function pad(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;if(!length||strLength>=length){return string;}var mid=(length-strLength)/2;return createPadding(nativeFloor(mid),chars)+string+createPadding(nativeCeil(mid),chars);}/**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */function padEnd(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return length&&strLength<length?string+createPadding(length-strLength,chars):string;}/**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */function padStart(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return length&&strLength<length?createPadding(length-strLength,chars)+string:string;}/**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */function parseInt(string,radix,guard){if(guard||radix==null){radix=0;}else if(radix){radix=+radix;}return nativeParseInt(toString(string).replace(reTrimStart,''),radix||0);}/**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */function repeat(string,n,guard){if(guard?isIterateeCall(string,n,guard):n===undefined){n=1;}else{n=toInteger(n);}return baseRepeat(toString(string),n);}/**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */function replace(){var args=arguments,string=toString(args[0]);return args.length<3?string:string.replace(args[1],args[2]);}/**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */var snakeCase=createCompounder(function(result,word,index){return result+(index?'_':'')+word.toLowerCase();});/**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */function split(string,separator,limit){if(limit&&typeof limit!='number'&&isIterateeCall(string,separator,limit)){separator=limit=undefined;}limit=limit===undefined?MAX_ARRAY_LENGTH:limit>>>0;if(!limit){return[];}string=toString(string);if(string&&(typeof separator=='string'||separator!=null&&!isRegExp(separator))){separator=baseToString(separator);if(!separator&&hasUnicode(string)){return castSlice(stringToArray(string),0,limit);}}return string.split(separator,limit);}/**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */var startCase=createCompounder(function(result,word,index){return result+(index?' ':'')+upperFirst(word);});/**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */function startsWith(string,target,position){string=toString(string);position=position==null?0:baseClamp(toInteger(position),0,string.length);target=baseToString(target);return string.slice(position,position+target.length)==target;}/**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */function template(string,options,guard){// Based on John Resig's `tmpl` implementation
// (http://ejohn.org/blog/javascript-micro-templating/)
// and Laura Doktorova's doT.js (https://github.com/olado/doT).
var settings=lodash.templateSettings;if(guard&&isIterateeCall(string,options,guard)){options=undefined;}string=toString(string);options=assignInWith({},options,settings,customDefaultsAssignIn);var imports=assignInWith({},options.imports,settings.imports,customDefaultsAssignIn),importsKeys=keys(imports),importsValues=baseValues(imports,importsKeys);var isEscaping,isEvaluating,index=0,interpolate=options.interpolate||reNoMatch,source="__p += '";// Compile the regexp to match each delimiter.
var reDelimiters=RegExp((options.escape||reNoMatch).source+'|'+interpolate.source+'|'+(interpolate===reInterpolate?reEsTemplate:reNoMatch).source+'|'+(options.evaluate||reNoMatch).source+'|$','g');// Use a sourceURL for easier debugging.
var sourceURL='//# sourceURL='+('sourceURL'in options?options.sourceURL:'lodash.templateSources['+ ++templateCounter+']')+'\n';string.replace(reDelimiters,function(match,escapeValue,interpolateValue,esTemplateValue,evaluateValue,offset){interpolateValue||(interpolateValue=esTemplateValue);// Escape characters that can't be included in string literals.
source+=string.slice(index,offset).replace(reUnescapedString,escapeStringChar);// Replace delimiters with snippets.
if(escapeValue){isEscaping=true;source+="' +\n__e("+escapeValue+") +\n'";}if(evaluateValue){isEvaluating=true;source+="';\n"+evaluateValue+";\n__p += '";}if(interpolateValue){source+="' +\n((__t = ("+interpolateValue+")) == null ? '' : __t) +\n'";}index=offset+match.length;// The JS engine embedded in Adobe products needs `match` returned in
// order to produce the correct `offset` value.
return match;});source+="';\n";// If `variable` is not specified wrap a with-statement around the generated
// code to add the data object to the top of the scope chain.
var variable=options.variable;if(!variable){source='with (obj) {\n'+source+'\n}\n';}// Cleanup code by stripping empty strings.
source=(isEvaluating?source.replace(reEmptyStringLeading,''):source).replace(reEmptyStringMiddle,'$1').replace(reEmptyStringTrailing,'$1;');// Frame code as the function body.
source='function('+(variable||'obj')+') {\n'+(variable?'':'obj || (obj = {});\n')+"var __t, __p = ''"+(isEscaping?', __e = _.escape':'')+(isEvaluating?', __j = Array.prototype.join;\n'+"function print() { __p += __j.call(arguments, '') }\n":';\n')+source+'return __p\n}';var result=attempt(function(){return Function(importsKeys,sourceURL+'return '+source).apply(undefined,importsValues);});// Provide the compiled function's source by its `toString` method or
// the `source` property as a convenience for inlining compiled templates.
result.source=source;if(isError(result)){throw result;}return result;}/**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */function toLower(value){return toString(value).toLowerCase();}/**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */function toUpper(value){return toString(value).toUpperCase();}/**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */function trim(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrim,'');}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),chrSymbols=stringToArray(chars),start=charsStartIndex(strSymbols,chrSymbols),end=charsEndIndex(strSymbols,chrSymbols)+1;return castSlice(strSymbols,start,end).join('');}/**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */function trimEnd(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrimEnd,'');}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),end=charsEndIndex(strSymbols,stringToArray(chars))+1;return castSlice(strSymbols,0,end).join('');}/**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */function trimStart(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrimStart,'');}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),start=charsStartIndex(strSymbols,stringToArray(chars));return castSlice(strSymbols,start).join('');}/**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */function truncate(string,options){var length=DEFAULT_TRUNC_LENGTH,omission=DEFAULT_TRUNC_OMISSION;if(isObject(options)){var separator='separator'in options?options.separator:separator;length='length'in options?toInteger(options.length):length;omission='omission'in options?baseToString(options.omission):omission;}string=toString(string);var strLength=string.length;if(hasUnicode(string)){var strSymbols=stringToArray(string);strLength=strSymbols.length;}if(length>=strLength){return string;}var end=length-stringSize(omission);if(end<1){return omission;}var result=strSymbols?castSlice(strSymbols,0,end).join(''):string.slice(0,end);if(separator===undefined){return result+omission;}if(strSymbols){end+=result.length-end;}if(isRegExp(separator)){if(string.slice(end).search(separator)){var match,substring=result;if(!separator.global){separator=RegExp(separator.source,toString(reFlags.exec(separator))+'g');}separator.lastIndex=0;while(match=separator.exec(substring)){var newEnd=match.index;}result=result.slice(0,newEnd===undefined?end:newEnd);}}else if(string.indexOf(baseToString(separator),end)!=end){var index=result.lastIndexOf(separator);if(index>-1){result=result.slice(0,index);}}return result+omission;}/**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */function unescape(string){string=toString(string);return string&&reHasEscapedHtml.test(string)?string.replace(reEscapedHtml,unescapeHtmlChar):string;}/**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */var upperCase=createCompounder(function(result,word,index){return result+(index?' ':'')+word.toUpperCase();});/**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */var upperFirst=createCaseFirst('toUpperCase');/**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */function words(string,pattern,guard){string=toString(string);pattern=guard?undefined:pattern;if(pattern===undefined){return hasUnicodeWord(string)?unicodeWords(string):asciiWords(string);}return string.match(pattern)||[];}/*------------------------------------------------------------------------*//**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */var attempt=baseRest(function(func,args){try{return apply(func,undefined,args);}catch(e){return isError(e)?e:new Error(e);}});/**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */var bindAll=flatRest(function(object,methodNames){arrayEach(methodNames,function(key){key=toKey(key);baseAssignValue(object,key,bind(object[key],object));});return object;});/**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */function cond(pairs){var length=pairs==null?0:pairs.length,toIteratee=getIteratee();pairs=!length?[]:arrayMap(pairs,function(pair){if(typeof pair[1]!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return[toIteratee(pair[0]),pair[1]];});return baseRest(function(args){var index=-1;while(++index<length){var pair=pairs[index];if(apply(pair[0],this,args)){return apply(pair[1],this,args);}}});}/**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */function conforms(source){return baseConforms(baseClone(source,CLONE_DEEP_FLAG));}/**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */function constant(value){return function(){return value;};}/**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */function defaultTo(value,defaultValue){return value==null||value!==value?defaultValue:value;}/**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */var flow=createFlow();/**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */var flowRight=createFlow(true);/**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */function identity(value){return value;}/**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */function iteratee(func){return baseIteratee(typeof func=='function'?func:baseClone(func,CLONE_DEEP_FLAG));}/**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     */function matches(source){return baseMatches(baseClone(source,CLONE_DEEP_FLAG));}/**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     */function matchesProperty(path,srcValue){return baseMatchesProperty(path,baseClone(srcValue,CLONE_DEEP_FLAG));}/**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */var method=baseRest(function(path,args){return function(object){return baseInvoke(object,path,args);};});/**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */var methodOf=baseRest(function(object,args){return function(path){return baseInvoke(object,path,args);};});/**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */function mixin(object,source,options){var props=keys(source),methodNames=baseFunctions(source,props);if(options==null&&!(isObject(source)&&(methodNames.length||!props.length))){options=source;source=object;object=this;methodNames=baseFunctions(source,keys(source));}var chain=!(isObject(options)&&'chain'in options)||!!options.chain,isFunc=isFunction(object);arrayEach(methodNames,function(methodName){var func=source[methodName];object[methodName]=func;if(isFunc){object.prototype[methodName]=function(){var chainAll=this.__chain__;if(chain||chainAll){var result=object(this.__wrapped__),actions=result.__actions__=copyArray(this.__actions__);actions.push({'func':func,'args':arguments,'thisArg':object});result.__chain__=chainAll;return result;}return func.apply(object,arrayPush([this.value()],arguments));};}});return object;}/**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */function noConflict(){if(root._===this){root._=oldDash;}return this;}/**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */function noop(){}// No operation performed.
/**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */function nthArg(n){n=toInteger(n);return baseRest(function(args){return baseNth(args,n);});}/**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */var over=createOver(arrayMap);/**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */var overEvery=createOver(arrayEvery);/**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     */var overSome=createOver(arraySome);/**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);}/**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */function propertyOf(object){return function(path){return object==null?undefined:baseGet(object,path);};}/**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */var range=createRange();/**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */var rangeRight=createRange(true);/**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */function stubArray(){return[];}/**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */function stubFalse(){return false;}/**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */function stubObject(){return{};}/**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */function stubString(){return'';}/**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */function stubTrue(){return true;}/**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */function times(n,iteratee){n=toInteger(n);if(n<1||n>MAX_SAFE_INTEGER){return[];}var index=MAX_ARRAY_LENGTH,length=nativeMin(n,MAX_ARRAY_LENGTH);iteratee=getIteratee(iteratee);n-=MAX_ARRAY_LENGTH;var result=baseTimes(length,iteratee);while(++index<n){iteratee(index);}return result;}/**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */function toPath(value){if(isArray(value)){return arrayMap(value,toKey);}return isSymbol(value)?[value]:copyArray(stringToPath(toString(value)));}/**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id;}/*------------------------------------------------------------------------*//**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */var add=createMathOperation(function(augend,addend){return augend+addend;},0);/**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */var ceil=createRound('ceil');/**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */var divide=createMathOperation(function(dividend,divisor){return dividend/divisor;},1);/**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */var floor=createRound('floor');/**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */function max(array){return array&&array.length?baseExtremum(array,identity,baseGt):undefined;}/**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */function maxBy(array,iteratee){return array&&array.length?baseExtremum(array,getIteratee(iteratee,2),baseGt):undefined;}/**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */function mean(array){return baseMean(array,identity);}/**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */function meanBy(array,iteratee){return baseMean(array,getIteratee(iteratee,2));}/**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */function min(array){return array&&array.length?baseExtremum(array,identity,baseLt):undefined;}/**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */function minBy(array,iteratee){return array&&array.length?baseExtremum(array,getIteratee(iteratee,2),baseLt):undefined;}/**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */var multiply=createMathOperation(function(multiplier,multiplicand){return multiplier*multiplicand;},1);/**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */var round=createRound('round');/**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */var subtract=createMathOperation(function(minuend,subtrahend){return minuend-subtrahend;},0);/**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */function sum(array){return array&&array.length?baseSum(array,identity):0;}/**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */function sumBy(array,iteratee){return array&&array.length?baseSum(array,getIteratee(iteratee,2)):0;}/*------------------------------------------------------------------------*/// Add methods that return wrapped values in chain sequences.
lodash.after=after;lodash.ary=ary;lodash.assign=assign;lodash.assignIn=assignIn;lodash.assignInWith=assignInWith;lodash.assignWith=assignWith;lodash.at=at;lodash.before=before;lodash.bind=bind;lodash.bindAll=bindAll;lodash.bindKey=bindKey;lodash.castArray=castArray;lodash.chain=chain;lodash.chunk=chunk;lodash.compact=compact;lodash.concat=concat;lodash.cond=cond;lodash.conforms=conforms;lodash.constant=constant;lodash.countBy=countBy;lodash.create=create;lodash.curry=curry;lodash.curryRight=curryRight;lodash.debounce=debounce;lodash.defaults=defaults;lodash.defaultsDeep=defaultsDeep;lodash.defer=defer;lodash.delay=delay;lodash.difference=difference;lodash.differenceBy=differenceBy;lodash.differenceWith=differenceWith;lodash.drop=drop;lodash.dropRight=dropRight;lodash.dropRightWhile=dropRightWhile;lodash.dropWhile=dropWhile;lodash.fill=fill;lodash.filter=filter;lodash.flatMap=flatMap;lodash.flatMapDeep=flatMapDeep;lodash.flatMapDepth=flatMapDepth;lodash.flatten=flatten;lodash.flattenDeep=flattenDeep;lodash.flattenDepth=flattenDepth;lodash.flip=flip;lodash.flow=flow;lodash.flowRight=flowRight;lodash.fromPairs=fromPairs;lodash.functions=functions;lodash.functionsIn=functionsIn;lodash.groupBy=groupBy;lodash.initial=initial;lodash.intersection=intersection;lodash.intersectionBy=intersectionBy;lodash.intersectionWith=intersectionWith;lodash.invert=invert;lodash.invertBy=invertBy;lodash.invokeMap=invokeMap;lodash.iteratee=iteratee;lodash.keyBy=keyBy;lodash.keys=keys;lodash.keysIn=keysIn;lodash.map=map;lodash.mapKeys=mapKeys;lodash.mapValues=mapValues;lodash.matches=matches;lodash.matchesProperty=matchesProperty;lodash.memoize=memoize;lodash.merge=merge;lodash.mergeWith=mergeWith;lodash.method=method;lodash.methodOf=methodOf;lodash.mixin=mixin;lodash.negate=negate;lodash.nthArg=nthArg;lodash.omit=omit;lodash.omitBy=omitBy;lodash.once=once;lodash.orderBy=orderBy;lodash.over=over;lodash.overArgs=overArgs;lodash.overEvery=overEvery;lodash.overSome=overSome;lodash.partial=partial;lodash.partialRight=partialRight;lodash.partition=partition;lodash.pick=pick;lodash.pickBy=pickBy;lodash.property=property;lodash.propertyOf=propertyOf;lodash.pull=pull;lodash.pullAll=pullAll;lodash.pullAllBy=pullAllBy;lodash.pullAllWith=pullAllWith;lodash.pullAt=pullAt;lodash.range=range;lodash.rangeRight=rangeRight;lodash.rearg=rearg;lodash.reject=reject;lodash.remove=remove;lodash.rest=rest;lodash.reverse=reverse;lodash.sampleSize=sampleSize;lodash.set=set;lodash.setWith=setWith;lodash.shuffle=shuffle;lodash.slice=slice;lodash.sortBy=sortBy;lodash.sortedUniq=sortedUniq;lodash.sortedUniqBy=sortedUniqBy;lodash.split=split;lodash.spread=spread;lodash.tail=tail;lodash.take=take;lodash.takeRight=takeRight;lodash.takeRightWhile=takeRightWhile;lodash.takeWhile=takeWhile;lodash.tap=tap;lodash.throttle=throttle;lodash.thru=thru;lodash.toArray=toArray;lodash.toPairs=toPairs;lodash.toPairsIn=toPairsIn;lodash.toPath=toPath;lodash.toPlainObject=toPlainObject;lodash.transform=transform;lodash.unary=unary;lodash.union=union;lodash.unionBy=unionBy;lodash.unionWith=unionWith;lodash.uniq=uniq;lodash.uniqBy=uniqBy;lodash.uniqWith=uniqWith;lodash.unset=unset;lodash.unzip=unzip;lodash.unzipWith=unzipWith;lodash.update=update;lodash.updateWith=updateWith;lodash.values=values;lodash.valuesIn=valuesIn;lodash.without=without;lodash.words=words;lodash.wrap=wrap;lodash.xor=xor;lodash.xorBy=xorBy;lodash.xorWith=xorWith;lodash.zip=zip;lodash.zipObject=zipObject;lodash.zipObjectDeep=zipObjectDeep;lodash.zipWith=zipWith;// Add aliases.
lodash.entries=toPairs;lodash.entriesIn=toPairsIn;lodash.extend=assignIn;lodash.extendWith=assignInWith;// Add methods to `lodash.prototype`.
mixin(lodash,lodash);/*------------------------------------------------------------------------*/// Add methods that return unwrapped values in chain sequences.
lodash.add=add;lodash.attempt=attempt;lodash.camelCase=camelCase;lodash.capitalize=capitalize;lodash.ceil=ceil;lodash.clamp=clamp;lodash.clone=clone;lodash.cloneDeep=cloneDeep;lodash.cloneDeepWith=cloneDeepWith;lodash.cloneWith=cloneWith;lodash.conformsTo=conformsTo;lodash.deburr=deburr;lodash.defaultTo=defaultTo;lodash.divide=divide;lodash.endsWith=endsWith;lodash.eq=eq;lodash.escape=escape;lodash.escapeRegExp=escapeRegExp;lodash.every=every;lodash.find=find;lodash.findIndex=findIndex;lodash.findKey=findKey;lodash.findLast=findLast;lodash.findLastIndex=findLastIndex;lodash.findLastKey=findLastKey;lodash.floor=floor;lodash.forEach=forEach;lodash.forEachRight=forEachRight;lodash.forIn=forIn;lodash.forInRight=forInRight;lodash.forOwn=forOwn;lodash.forOwnRight=forOwnRight;lodash.get=get;lodash.gt=gt;lodash.gte=gte;lodash.has=has;lodash.hasIn=hasIn;lodash.head=head;lodash.identity=identity;lodash.includes=includes;lodash.indexOf=indexOf;lodash.inRange=inRange;lodash.invoke=invoke;lodash.isArguments=isArguments;lodash.isArray=isArray;lodash.isArrayBuffer=isArrayBuffer;lodash.isArrayLike=isArrayLike;lodash.isArrayLikeObject=isArrayLikeObject;lodash.isBoolean=isBoolean;lodash.isBuffer=isBuffer;lodash.isDate=isDate;lodash.isElement=isElement;lodash.isEmpty=isEmpty;lodash.isEqual=isEqual;lodash.isEqualWith=isEqualWith;lodash.isError=isError;lodash.isFinite=isFinite;lodash.isFunction=isFunction;lodash.isInteger=isInteger;lodash.isLength=isLength;lodash.isMap=isMap;lodash.isMatch=isMatch;lodash.isMatchWith=isMatchWith;lodash.isNaN=isNaN;lodash.isNative=isNative;lodash.isNil=isNil;lodash.isNull=isNull;lodash.isNumber=isNumber;lodash.isObject=isObject;lodash.isObjectLike=isObjectLike;lodash.isPlainObject=isPlainObject;lodash.isRegExp=isRegExp;lodash.isSafeInteger=isSafeInteger;lodash.isSet=isSet;lodash.isString=isString;lodash.isSymbol=isSymbol;lodash.isTypedArray=isTypedArray;lodash.isUndefined=isUndefined;lodash.isWeakMap=isWeakMap;lodash.isWeakSet=isWeakSet;lodash.join=join;lodash.kebabCase=kebabCase;lodash.last=last;lodash.lastIndexOf=lastIndexOf;lodash.lowerCase=lowerCase;lodash.lowerFirst=lowerFirst;lodash.lt=lt;lodash.lte=lte;lodash.max=max;lodash.maxBy=maxBy;lodash.mean=mean;lodash.meanBy=meanBy;lodash.min=min;lodash.minBy=minBy;lodash.stubArray=stubArray;lodash.stubFalse=stubFalse;lodash.stubObject=stubObject;lodash.stubString=stubString;lodash.stubTrue=stubTrue;lodash.multiply=multiply;lodash.nth=nth;lodash.noConflict=noConflict;lodash.noop=noop;lodash.now=now;lodash.pad=pad;lodash.padEnd=padEnd;lodash.padStart=padStart;lodash.parseInt=parseInt;lodash.random=random;lodash.reduce=reduce;lodash.reduceRight=reduceRight;lodash.repeat=repeat;lodash.replace=replace;lodash.result=result;lodash.round=round;lodash.runInContext=runInContext;lodash.sample=sample;lodash.size=size;lodash.snakeCase=snakeCase;lodash.some=some;lodash.sortedIndex=sortedIndex;lodash.sortedIndexBy=sortedIndexBy;lodash.sortedIndexOf=sortedIndexOf;lodash.sortedLastIndex=sortedLastIndex;lodash.sortedLastIndexBy=sortedLastIndexBy;lodash.sortedLastIndexOf=sortedLastIndexOf;lodash.startCase=startCase;lodash.startsWith=startsWith;lodash.subtract=subtract;lodash.sum=sum;lodash.sumBy=sumBy;lodash.template=template;lodash.times=times;lodash.toFinite=toFinite;lodash.toInteger=toInteger;lodash.toLength=toLength;lodash.toLower=toLower;lodash.toNumber=toNumber;lodash.toSafeInteger=toSafeInteger;lodash.toString=toString;lodash.toUpper=toUpper;lodash.trim=trim;lodash.trimEnd=trimEnd;lodash.trimStart=trimStart;lodash.truncate=truncate;lodash.unescape=unescape;lodash.uniqueId=uniqueId;lodash.upperCase=upperCase;lodash.upperFirst=upperFirst;// Add aliases.
lodash.each=forEach;lodash.eachRight=forEachRight;lodash.first=head;mixin(lodash,function(){var source={};baseForOwn(lodash,function(func,methodName){if(!hasOwnProperty.call(lodash.prototype,methodName)){source[methodName]=func;}});return source;}(),{'chain':false});/*------------------------------------------------------------------------*//**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */lodash.VERSION=VERSION;// Assign default placeholders.
arrayEach(['bind','bindKey','curry','curryRight','partial','partialRight'],function(methodName){lodash[methodName].placeholder=lodash;});// Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
arrayEach(['drop','take'],function(methodName,index){LazyWrapper.prototype[methodName]=function(n){n=n===undefined?1:nativeMax(toInteger(n),0);var result=this.__filtered__&&!index?new LazyWrapper(this):this.clone();if(result.__filtered__){result.__takeCount__=nativeMin(n,result.__takeCount__);}else{result.__views__.push({'size':nativeMin(n,MAX_ARRAY_LENGTH),'type':methodName+(result.__dir__<0?'Right':'')});}return result;};LazyWrapper.prototype[methodName+'Right']=function(n){return this.reverse()[methodName](n).reverse();};});// Add `LazyWrapper` methods that accept an `iteratee` value.
arrayEach(['filter','map','takeWhile'],function(methodName,index){var type=index+1,isFilter=type==LAZY_FILTER_FLAG||type==LAZY_WHILE_FLAG;LazyWrapper.prototype[methodName]=function(iteratee){var result=this.clone();result.__iteratees__.push({'iteratee':getIteratee(iteratee,3),'type':type});result.__filtered__=result.__filtered__||isFilter;return result;};});// Add `LazyWrapper` methods for `_.head` and `_.last`.
arrayEach(['head','last'],function(methodName,index){var takeName='take'+(index?'Right':'');LazyWrapper.prototype[methodName]=function(){return this[takeName](1).value()[0];};});// Add `LazyWrapper` methods for `_.initial` and `_.tail`.
arrayEach(['initial','tail'],function(methodName,index){var dropName='drop'+(index?'':'Right');LazyWrapper.prototype[methodName]=function(){return this.__filtered__?new LazyWrapper(this):this[dropName](1);};});LazyWrapper.prototype.compact=function(){return this.filter(identity);};LazyWrapper.prototype.find=function(predicate){return this.filter(predicate).head();};LazyWrapper.prototype.findLast=function(predicate){return this.reverse().find(predicate);};LazyWrapper.prototype.invokeMap=baseRest(function(path,args){if(typeof path=='function'){return new LazyWrapper(this);}return this.map(function(value){return baseInvoke(value,path,args);});});LazyWrapper.prototype.reject=function(predicate){return this.filter(negate(getIteratee(predicate)));};LazyWrapper.prototype.slice=function(start,end){start=toInteger(start);var result=this;if(result.__filtered__&&(start>0||end<0)){return new LazyWrapper(result);}if(start<0){result=result.takeRight(-start);}else if(start){result=result.drop(start);}if(end!==undefined){end=toInteger(end);result=end<0?result.dropRight(-end):result.take(end-start);}return result;};LazyWrapper.prototype.takeRightWhile=function(predicate){return this.reverse().takeWhile(predicate).reverse();};LazyWrapper.prototype.toArray=function(){return this.take(MAX_ARRAY_LENGTH);};// Add `LazyWrapper` methods to `lodash.prototype`.
baseForOwn(LazyWrapper.prototype,function(func,methodName){var checkIteratee=/^(?:filter|find|map|reject)|While$/.test(methodName),isTaker=/^(?:head|last)$/.test(methodName),lodashFunc=lodash[isTaker?'take'+(methodName=='last'?'Right':''):methodName],retUnwrapped=isTaker||/^find/.test(methodName);if(!lodashFunc){return;}lodash.prototype[methodName]=function(){var value=this.__wrapped__,args=isTaker?[1]:arguments,isLazy=value instanceof LazyWrapper,iteratee=args[0],useLazy=isLazy||isArray(value);var interceptor=function interceptor(value){var result=lodashFunc.apply(lodash,arrayPush([value],args));return isTaker&&chainAll?result[0]:result;};if(useLazy&&checkIteratee&&typeof iteratee=='function'&&iteratee.length!=1){// Avoid lazy use if the iteratee has a "length" value other than `1`.
isLazy=useLazy=false;}var chainAll=this.__chain__,isHybrid=!!this.__actions__.length,isUnwrapped=retUnwrapped&&!chainAll,onlyLazy=isLazy&&!isHybrid;if(!retUnwrapped&&useLazy){value=onlyLazy?value:new LazyWrapper(this);var result=func.apply(value,args);result.__actions__.push({'func':thru,'args':[interceptor],'thisArg':undefined});return new LodashWrapper(result,chainAll);}if(isUnwrapped&&onlyLazy){return func.apply(this,args);}result=this.thru(interceptor);return isUnwrapped?isTaker?result.value()[0]:result.value():result;};});// Add `Array` methods to `lodash.prototype`.
arrayEach(['pop','push','shift','sort','splice','unshift'],function(methodName){var func=arrayProto[methodName],chainName=/^(?:push|sort|unshift)$/.test(methodName)?'tap':'thru',retUnwrapped=/^(?:pop|shift)$/.test(methodName);lodash.prototype[methodName]=function(){var args=arguments;if(retUnwrapped&&!this.__chain__){var value=this.value();return func.apply(isArray(value)?value:[],args);}return this[chainName](function(value){return func.apply(isArray(value)?value:[],args);});};});// Map minified method names to their real names.
baseForOwn(LazyWrapper.prototype,function(func,methodName){var lodashFunc=lodash[methodName];if(lodashFunc){var key=lodashFunc.name+'',names=realNames[key]||(realNames[key]=[]);names.push({'name':methodName,'func':lodashFunc});}});realNames[createHybrid(undefined,WRAP_BIND_KEY_FLAG).name]=[{'name':'wrapper','func':undefined}];// Add methods to `LazyWrapper`.
LazyWrapper.prototype.clone=lazyClone;LazyWrapper.prototype.reverse=lazyReverse;LazyWrapper.prototype.value=lazyValue;// Add chain sequence methods to the `lodash` wrapper.
lodash.prototype.at=wrapperAt;lodash.prototype.chain=wrapperChain;lodash.prototype.commit=wrapperCommit;lodash.prototype.next=wrapperNext;lodash.prototype.plant=wrapperPlant;lodash.prototype.reverse=wrapperReverse;lodash.prototype.toJSON=lodash.prototype.valueOf=lodash.prototype.value=wrapperValue;// Add lazy aliases.
lodash.prototype.first=lodash.prototype.head;if(symIterator){lodash.prototype[symIterator]=wrapperToIterator;}return lodash;};/*--------------------------------------------------------------------------*/// Export lodash.
var _=runInContext();// Some AMD build optimizers, like r.js, check for condition patterns like:
if("function"=='function'&&_typeof(__webpack_require__(11))=='object'&&__webpack_require__(11)){// Expose Lodash on the global object to prevent errors when Lodash is
// loaded by a script tag in the presence of an AMD loader.
// See http://requirejs.org/docs/errors.html#mismatch for more details.
// Use `_.noConflict` to remove Lodash from the global object.
root._=_;// Define as an anonymous module so, through path mapping, it can be
// referenced as the "underscore" module.
!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return _;}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}// Check for `exports` after `define` in case a build optimizer adds it.
else if(freeModule){// Export for Node.js.
(freeModule.exports=_)._=_;// Export for CommonJS support.
freeExports._=_;}else{// Export to the global object.
root._=_;}}).call(undefined);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34), __webpack_require__(35)(module)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * update the active state on a filter.
 * @param {Object} filter - the filter to update its active state.
 */
var toggleFilter = function toggleFilter(filter) {
  return _extends({}, filter, { active: !filter.active });
};

/**
 * add an active state the filter.
 * @param {Array} locations - all the locations unfiltred.
 * @param {Array} filters - the filters to apply.
 */
var filterLocations = function filterLocations(locations, filters) {
  if (filters.length == 0) return locations;

  // Check if the location.filter value is present the filters array.
  var newLocations = locations.filter(function (location) {
    return filters.indexOf(location.filter) !== -1;
  });
  return newLocations;
};

/**
 * search a string in the given locations.
 * @param {Array} activeLocations - active locations to search.
 * @param {String} searchTerm - text to search.
 */
var searchLocations = function searchLocations(activeLocations, searchTerm) {
  var newLocations = activeLocations.filter(function (location) {
    return location.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  });
  return newLocations;
};

module.exports = {
  toggleFilter: toggleFilter,
  filterLocations: filterLocations,
  searchLocations: searchLocations
};

/***/ })
/******/ ]);
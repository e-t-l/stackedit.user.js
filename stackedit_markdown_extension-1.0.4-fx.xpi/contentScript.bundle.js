/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  default: {},
  commonmark: {
    extensions: {
      preset: 'commonmark'
    }
  },
  gfm: {
    extensions: {
      preset: 'gfm'
    }
  },
  stackexchange: {
    extensions: {
      preset: 'zero',
      katex: {
        enabled: true
      }
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global chrome */
var defaultSites = [{
  url: 'https://github.com/',
  preset: 'gfm'
}, {
  url: 'https://stackoverflow.com/',
  preset: 'stackexchange'
}, {
  url: 'https://*.stackexchange.com/',
  preset: 'stackexchange'
}];

exports.default = {
  defaultSites: defaultSites,
  getSites: function getSites() {
    return new Promise(function (resolve) {
      chrome.storage.sync.get(['sites'], function (result) {
        var sites = result.sites || defaultSites;
        resolve(sites.map(function (site) {
          return Object.assign({
            // Compute site url regex
            regex: new RegExp(site.url.replace(/[-[\]/{}()+?.\\^$|]/g, '\\$&') // Escape string
            .replace(/\*/g, '.*')) // Replace `*` with `.*`
          }, site);
        }));
      });
    });
  },
  setSites: function setSites(sites) {
    return new Promise(function (resolve) {
      chrome.storage.sync.set({ sites: sites }, resolve);
    });
  }
};
module.exports = exports['default'];

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon.svg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Stackedit", [], factory);
	else if(typeof exports === 'object')
		exports["Stackedit"] = factory();
	else
		root["Stackedit"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var styleContent = '\n.stackedit-no-overflow {\n  overflow: hidden;\n}\n\n.stackedit-container {\n  background-color: rgba(160, 160, 160, 0.5);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 9999;\n}\n\n.stackedit-hidden-container {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  left: -99px;\n}\n\n.stackedit-iframe-container {\n  background-color: #fff;\n  position: absolute;\n  margin: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 98%;\n  width: 98%;\n  max-width: 1280px;\n  border-radius: 2px;\n  overflow: hidden;\n}\n\n.stackedit-iframe {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border: 0;\n  border-radius: 2px;\n}\n\n@media (max-width: 740px) {\n  .stackedit-iframe-container {\n    height: 100%;\n    width: 100%;\n    border-radius: 0;\n  }\n\n  .stackedit-iframe {\n    border-radius: 0;\n  }\n}\n\n.stackedit-close-button {\n  position: absolute !important;\n  box-sizing: border-box !important;\n  width: 38px !important;\n  height: 36px !important;\n  margin: 4px !important;\n  padding: 0 4px !important;\n  text-align: center !important;\n  vertical-align: middle !important;\n  text-decoration: none !important;\n}\n';

var _createStyle = function createStyle() {
  var styleEl = document.createElement('style');
  styleEl.type = 'text/css';
  styleEl.innerHTML = styleContent;
  document.head.appendChild(styleEl);
  _createStyle = function createStyle() {}; // Create style only once
};

var containerHtml = '\n<div class="stackedit-iframe-container">\n  <iframe class="stackedit-iframe"></iframe>\n  <a href="javascript:void(0)" class="stackedit-close-button" title="Close">\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">\n      <path fill="#777" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />\n    </svg>\n  </a>\n</div>\n';

var origin = window.location.protocol + '//' + window.location.host;
var urlParser = document.createElement('a');

var Stackedit = function () {
  function Stackedit() {
    var _this = this;

    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Stackedit);

    this.$options = {
      url: 'https://stackedit.io/app'
    };
    this.$listeners = {};

    // Override options
    Object.keys(opts).forEach(function (key) {
      _this.$options[key] = opts[key];
    });
  }

  // For emitting events


  _createClass(Stackedit, [{
    key: '$trigger',
    value: function $trigger(type, payload) {
      var listeners = this.$listeners[type] || [];
      // Use setTimeout as a way to ignore errors
      listeners.forEach(function (listener) {
        return setTimeout(function () {
          return listener(payload);
        }, 1);
      });
    }
  }, {
    key: 'on',
    value: function on(type, listener) {
      var listeners = this.$listeners[type] || [];
      listeners.push(listener);
      this.$listeners[type] = listeners;
    }
  }, {
    key: 'off',
    value: function off(type, listener) {
      var listeners = this.$listeners[type] || [];
      var idx = listeners.indexOf(listener);
      if (idx >= 0) {
        listeners.splice(idx, 1);
        if (listeners.length) {
          this.$listeners[type] = listeners;
        } else {
          delete this.$listeners[type];
        }
      }
    }
  }, {
    key: 'openFile',
    value: function openFile() {
      var _this2 = this;

      var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var silent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // Close before opening a new iframe
      this.close();

      // Make StackEdit URL
      urlParser.href = this.$options.url;
      this.$origin = urlParser.protocol + '//' + urlParser.host; // Save StackEdit origin
      var content = file.content || {};
      var params = {
        origin: origin,
        fileName: file.name,
        contentText: content.text,
        contentProperties: !content.yamlProperties && content.properties ? JSON.stringify(content.properties) // Use JSON serialized properties as YAML properties
        : content.yamlProperties,
        silent: silent
      };
      var serializedParams = Object.keys(params).map(function (key) {
        return key + '=' + encodeURIComponent(params[key] || '');
      }).join('&');
      urlParser.hash = '#' + serializedParams;

      // Make the iframe
      _createStyle();
      this.$containerEl = document.createElement('div');
      this.$containerEl.className = silent ? 'stackedit-hidden-container' : 'stackedit-container';
      this.$containerEl.innerHTML = containerHtml;
      document.body.appendChild(this.$containerEl);

      // Load StackEdit in the iframe
      var iframeEl = this.$containerEl.querySelector('iframe');
      iframeEl.src = urlParser.href;

      // Add close button handler
      var closeButton = this.$containerEl.querySelector('a');
      closeButton.addEventListener('click', function () {
        return _this2.close();
      });

      // Add message handler
      this.$messageHandler = function (event) {
        if (event.origin === _this2.$origin && event.source === iframeEl.contentWindow) {
          switch (event.data.type) {
            case 'ready':
              // StackEdit has its own one close button
              closeButton.parentNode.removeChild(closeButton);
              break;
            case 'fileChange':
              // Trigger fileChange event
              _this2.$trigger('fileChange', event.data.payload);
              if (silent) {
                _this2.close();
              }
              break;
            case 'close':
            default:
              _this2.close();
          }
        }
      };
      window.addEventListener('message', this.$messageHandler);

      if (!silent) {
        // Remove body scrollbars
        document.body.className += ' stackedit-no-overflow';
      }
    }
  }, {
    key: 'close',
    value: function close() {
      if (this.$messageHandler) {
        // Clean everything
        window.removeEventListener('message', this.$messageHandler);
        document.body.removeChild(this.$containerEl);

        // Release memory
        this.$messageHandler = null;
        this.$containerEl = null;

        // Restore body scrollbars
        document.body.className = document.body.className.replace(/\sstackedit-no-overflow\b/, '');

        // Trigger close event
        this.$trigger('close');
      }
    }
  }]);

  return Stackedit;
}();

exports.default = Stackedit;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=stackedit.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /* global chrome */


var _stackeditJs = __webpack_require__(9);

var _stackeditJs2 = _interopRequireDefault(_stackeditJs);

__webpack_require__(8);

var _presets = __webpack_require__(0);

var _presets2 = _interopRequireDefault(_presets);

var _settings = __webpack_require__(1);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonSize = 24;
var styleContent = '\n.stackedit-open-button {\n  position: absolute;\n  width: ' + buttonSize + 'px;\n  height: ' + buttonSize + 'px;\n  background: no-repeat url("' + chrome.runtime.getURL('icon.svg') + '");\n  background-size: ' + buttonSize + 'px ' + buttonSize + 'px;\n  cursor: pointer;\n  opacity: 0.5;\n  transition: opacity 0.5s;\n}\n\n.stackedit-open-button:focus,\n.stackedit-open-button:hover {\n  opacity: 1;\n}\n';

_settings2.default.getSites().then(function (sites) {
  var styleEl = document.createElement('style');
  styleEl.type = 'text/css';
  styleEl.innerHTML = styleContent;
  document.head.appendChild(styleEl);

  function decorateTextarea(el, preset) {
    if (!el.$moveStackeditButton) {
      var buttonEl = document.createElement('span');
      buttonEl.className = 'stackedit-open-button';
      buttonEl.title = 'Edit with StackEdit';
      if (el.nextSibling) {
        el.parentNode.insertBefore(buttonEl, el.nextSibling);
      } else {
        el.parentNode.appendChild(buttonEl);
      }
      buttonEl.addEventListener('click', function () {
        var stackedit = new _stackeditJs2.default({
          url: chrome.runtime.getURL('frame.html')
        });
        stackedit.on('fileChange', function (file) {
          el.value = file.content.text;
          var event = document.createEvent('Event');
          event.initEvent('input', true, true);
          el.dispatchEvent(event);
        });
        stackedit.openFile({
          name: window.location.hostname,
          content: {
            text: el.value,
            properties: preset
          }
        });
      });
      el.$moveStackeditButton = function () {
        var rect = el.getBoundingClientRect();
        var paddingRight = parseFloat(getComputedStyle(el).getPropertyValue('padding-right'));
        var paddingBottom = parseFloat(getComputedStyle(el).getPropertyValue('padding-bottom'));
        Object.entries({
          display: !el.disabled && rect.width && rect.height ? 'block' : 'none',
          left: el.offsetLeft + rect.width - buttonSize - paddingRight + 'px',
          top: el.offsetTop + rect.height - buttonSize - paddingBottom + 'px'
        }).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          if (buttonEl.style[key] !== value) {
            buttonEl.style[key] = value;
          }
        });
      };
    }
    el.$moveStackeditButton();
  }

  function decorateAll(preset) {
    var textareaEls = document.getElementsByTagName('textarea');
    for (var i = 0; i < textareaEls.length; i += 1) {
      decorateTextarea(textareaEls[i], preset);
    }
  }

  sites.some(function (site) {
    if (!window.location.href.match(site.regex)) {
      return false;
    }
    var preset = _presets2.default[site.preset];
    var observer = new MutationObserver(function () {
      return decorateAll(preset);
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    });
    window.addEventListener('resize', function () {
      return decorateAll(preset);
    });
    decorateAll(preset);
    return true;
  });
});

/***/ })
/******/ ]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon-128.png";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon-16.png";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon-256.png";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon-32.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon-512.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon-64.png";

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

__webpack_require__(5);

__webpack_require__(7);

__webpack_require__(2);

__webpack_require__(4);

__webpack_require__(6);

var _presets = __webpack_require__(0);

var _presets2 = _interopRequireDefault(_presets);

var _settings = __webpack_require__(1);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createEl = function createEl(parentEl, tag) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var el = document.createElement(tag);
  Object.keys(props).forEach(function (key) {
    el[key] = props[key];
  });
  parentEl.appendChild(el);
  return el;
};

var rows = void 0;
var makeRows = function makeRows(sites) {
  var sitesEl = document.querySelector('.sites');
  var addExtraRow = void 0;
  var addRow = function addRow() {
    var site = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var row = {};
    row.divEl = createEl(sitesEl, 'div', { className: 'site' });
    row.inputEl = createEl(row.divEl, 'input', { type: 'text', value: site.url || '' });
    row.inputEl.addEventListener('input', function () {
      return addExtraRow();
    });
    row.selectEl = createEl(row.divEl, 'select');
    Object.keys(_presets2.default).forEach(function (key) {
      createEl(row.selectEl, 'option', { name: key, textContent: key });
    });
    row.selectEl.value = _presets2.default[site.preset] ? site.preset : 'default';
    rows.push(row);
  };

  rows = [];
  sitesEl.innerHTML = '';
  sites.forEach(function (site) {
    return addRow(site);
  });

  addExtraRow = function addExtraRow() {
    var lastRow = rows[rows.length - 1];
    if (!lastRow || lastRow.inputEl.value.trim()) {
      addRow();
    }
  };
  addExtraRow();
};

document.getElementById('reset-button').addEventListener('click', function () {
  return makeRows(_settings2.default.defaultSites);
});
document.getElementById('cancel-button').addEventListener('click', function () {
  return window.close();
});
document.getElementById('ok-button').addEventListener('click', function () {
  var sites = [];
  rows.forEach(function (row) {
    var url = row.inputEl.value.trim();
    if (url) {
      var preset = row.selectEl.value;
      sites.push({
        url: url,
        preset: preset
      });
    }
  });
  _settings2.default.setSites(sites).then(function () {
    return window.close();
  });
});

_settings2.default.getSites().then(function (sites) {
  return makeRows(sites);
});

/***/ })
/******/ ]);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/image.jpg":[function(require,module,exports) {
module.exports = "/image.70feebc7.jpg";
},{}],"utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.block = block;
exports.col = col;
exports.css = css;
exports.row = row;
function row(content) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return "<div class=\"row\" style=\"".concat(styles, "\">").concat(content, "</div>");
}
function col(content) {
  return "<div class=\"col-sm\">".concat(content, "</div>");
}
function css() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (typeof styles === 'string') return styles;
  var toString = function toString(key) {
    return "".concat(key, ": ").concat(styles[key]);
  };
  return Object.keys(styles).map(toString).join(';');
}
function block(type) {
  return "\n    <form name=\"".concat(type, "\">\n        <h5>").concat(type, "</h5>\n        <div class='form-group'>\n            <input class=\"form-control form-control-sm mb-3\" name=\"value\" placeholder=\"value\">\n        </div>\n        <div class='form-group'>\n            <input class=\"form-control form-control-sm mb-3\" name=\"styles\" placeholder=\"styles\">\n        </div>\n        <button type='submit' class=\"btn btn-primary btn-sm\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n    </form>\n    <hr/>\n    ");
}
},{}],"classes/blocks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleBlock = exports.TextBlock = exports.ImageBlock = exports.ColumnsBlock = void 0;
var _utils = require("../utils");
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Block = /*#__PURE__*/function () {
  function Block(value, options) {
    _classCallCheck(this, Block);
    this.value = value;
    this.options = options;
  }
  return _createClass(Block, [{
    key: "toHTML",
    value: function toHTML() {
      throw new Error('Метод toHTML должен быть реализован');
    }
  }]);
}();
var TitleBlock = exports.TitleBlock = /*#__PURE__*/function (_Block) {
  function TitleBlock(value, options) {
    _classCallCheck(this, TitleBlock);
    return _callSuper(this, TitleBlock, [value, options]);
  }
  _inherits(TitleBlock, _Block);
  return _createClass(TitleBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options = this.options,
        _this$options$tag = _this$options.tag,
        tag = _this$options$tag === void 0 ? 'h1' : _this$options$tag,
        styles = _this$options.styles;
      return (0, _utils.row)((0, _utils.col)("<".concat(tag, ">").concat(this.value, "</").concat(tag, ">")), (0, _utils.css)(styles));
    }
  }]);
}(Block);
var ImageBlock = exports.ImageBlock = /*#__PURE__*/function (_Block2) {
  function ImageBlock(value, options) {
    _classCallCheck(this, ImageBlock);
    return _callSuper(this, ImageBlock, [value, options]);
  }
  _inherits(ImageBlock, _Block2);
  return _createClass(ImageBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options2 = this.options,
        styles = _this$options2.styles,
        is = _this$options2.imageStyles,
        _this$options2$alt = _this$options2.alt,
        alt = _this$options2$alt === void 0 ? '' : _this$options2$alt;
      return (0, _utils.row)("<img style=\"".concat((0, _utils.css)(is), "\" alt=\"").concat(alt, "\" src=\"").concat(this.value, "\" />"), (0, _utils.css)(styles));
    }
  }]);
}(Block);
var ColumnsBlock = exports.ColumnsBlock = /*#__PURE__*/function (_Block3) {
  function ColumnsBlock(value, options) {
    _classCallCheck(this, ColumnsBlock);
    return _callSuper(this, ColumnsBlock, [value, options]);
  }
  _inherits(ColumnsBlock, _Block3);
  return _createClass(ColumnsBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var styles = this.options.styles;
      if (typeof this.value === "string") this.value = this.value.split(',');
      var html = this.value.map(_utils.col).join("");
      return (0, _utils.row)(html, (0, _utils.css)(styles));
    }
  }]);
}(Block);
var TextBlock = exports.TextBlock = /*#__PURE__*/function (_Block4) {
  function TextBlock(value, options) {
    _classCallCheck(this, TextBlock);
    return _callSuper(this, TextBlock, [value, options]);
  }
  _inherits(TextBlock, _Block4);
  return _createClass(TextBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var styles = this.options.styles;
      return (0, _utils.row)((0, _utils.col)("<p>".concat(this.value, "</p>")), (0, _utils.css)(styles));
    }
  }]);
}(Block);
},{"../utils":"utils.js"}],"model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.model = void 0;
var _image = _interopRequireDefault(require("./assets/image.jpg"));
var _blocks = require("./classes/blocks");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var model = exports.model = [new _blocks.TitleBlock('Конструктор сайтов на чистом JavaScript', {
  tag: 'h2',
  styles: {
    background: 'linear-gradient(to right, #ff0099, #493240)',
    color: '#333',
    padding: '1.5rem',
    'text-align': 'center'
  }
}), new _blocks.TextBlock('Крутые видео и уроки по JavaScript тут: <a href="https://www.youtube.com/watch?v=0ViiJ8qTCFM&t=1854s">Клик</a>', {
  styles: {
    background: 'linear-gradient(to left, #f2994a, #f2c94c)',
    padding: '1rem',
    'font-weight': 'bold'
  }
}), new _blocks.ColumnsBlock(['Приложение на чистом JavaScript, без использования библиотек', 'Узнаешь как работают принципы SOLID и ООП в JavaScript за 1 курс', 'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'], {
  styles: {
    background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
    padding: '2rem',
    color: '#fff',
    'font-weight': 'bold'
  }
}), new _blocks.ImageBlock(_image.default, {
  styles: {
    padding: '2rem 0',
    display: 'flex',
    'justify-content': 'center'
  },
  imageStyles: {
    width: '500px',
    height: 'auto'
  },
  alt: 'Это картинка'
})];
},{"./assets/image.jpg":"assets/image.jpg","./classes/blocks":"classes/blocks.js"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/main.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"classes/site.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Site = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Site = exports.Site = /*#__PURE__*/function () {
  function Site(selector) {
    _classCallCheck(this, Site);
    this.$el = document.querySelector(selector);
  }
  return _createClass(Site, [{
    key: "render",
    value: function render(model) {
      var _this = this;
      this.$el.innerHTML = '';
      model.forEach(function (block) {
        _this.$el.insertAdjacentHTML('beforeend', block.toHTML());
      });
    }
  }]);
}();
},{}],"classes/sidebar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sidebar = void 0;
var _utils = require("../utils");
var _blocks = require("./blocks");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Sidebar = exports.Sidebar = /*#__PURE__*/function () {
  function Sidebar(selector, updateCallback) {
    _classCallCheck(this, Sidebar);
    this.$el = document.querySelector(selector);
    this.update = updateCallback;
    this.init();
  }
  return _createClass(Sidebar, [{
    key: "init",
    value: function init() {
      this.$el.insertAdjacentHTML('afterbegin', this.template);
      this.$el.addEventListener('submit', this.add.bind(this));
    }
  }, {
    key: "template",
    get: function get() {
      return [(0, _utils.block)('text'), (0, _utils.block)('title'), (0, _utils.block)('columns'), (0, _utils.block)('image')].join('');
    }
  }, {
    key: "add",
    value: function add(event) {
      event.preventDefault();
      var type = event.target.name;
      var value = event.target.value.value;
      var styles = event.target.styles.value;
      var newBlock;
      if (type === "text") {
        newBlock = new _blocks.TextBlock(value, {
          styles: styles
        });
      } else if (type === "title") {
        newBlock = new _blocks.TitleBlock(value, {
          styles: styles
        });
      } else if (type === "image") {
        newBlock = new _blocks.ImageBlock(value, {
          styles: styles
        });
      } else if (type === "columns") {
        newBlock = new _blocks.ColumnsBlock(value, {
          styles: styles
        });
      } else {
        throw new Error("Unknown block type");
      }
      this.update(newBlock);
      event.target.value.value = "";
      event.target.styles.value = "";
    }
  }]);
}();
},{"../utils":"utils.js","./blocks":"classes/blocks.js"}],"classes/app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;
var _site = require("./site");
var _sidebar = require("./sidebar");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var App = exports.App = /*#__PURE__*/function () {
  function App(model) {
    _classCallCheck(this, App);
    this.model = model;
    this.init();
  }
  return _createClass(App, [{
    key: "init",
    value: function init() {
      var _this = this;
      var site = new _site.Site('#site');
      site.render(this.model);
      var updateCallback = function updateCallback(newBlock) {
        _this.model.push(newBlock);
        site.render(_this.model);
      };
      new _sidebar.Sidebar('#panel', updateCallback);
    }
  }]);
}();
},{"./site":"classes/site.js","./sidebar":"classes/sidebar.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _model = require("./model");
require("./styles/main.css");
var _app = require("./classes/app");
new _app.App(_model.model);
},{"./model":"model.js","./styles/main.css":"styles/main.css","./classes/app":"classes/app.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52523" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map
// ==UserScript==
// @name          Stackedit
// @namespace     e-t-l
// @homepage      https://github.com/e-t-l/stackedit.user.js
// @downloadURL   https://raw.githubusercontent.com/e-t-l/stackedit.user.js/master/stackedit.user.js
// @description   MD WYSIWYG
// @match         https://*.github.com/*/*/issues/*
// @match         https://*.github.com/*/*/discussions/*
// @run-at document-start
// @version       1.0.1
// @license       MIT
// ==/UserScript==

const el = document.querySelector('textarea');
const stackedit = new Stackedit();

// Open the iframe
stackedit.openFile({
  name: 'Filename', // with an optional filename
  content: {
    text: el.value // and the Markdown content.
  }
});

// Listen to StackEdit events and apply the changes to the textarea.
stackedit.on('fileChange', (file) => {
  el.value = file.content.text;
});



//Stackedit-js 
//src=https://unpkg.com/stackedit-js@1.0.7/docs/lib/stackedit.min.js
! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Stackedit", [], t) : "object" == typeof exports ? exports.Stackedit = t() : e.Stackedit = t()
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var o = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 0)
    }([function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            r = function() {
                var e = document.createElement("style");
                e.type = "text/css", e.innerHTML = "\n.stackedit-no-overflow {\n  overflow: hidden;\n}\n\n.stackedit-container {\n  background-color: rgba(160, 160, 160, 0.5);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 9999;\n}\n\n.stackedit-hidden-container {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  left: -99px;\n}\n\n.stackedit-iframe-container {\n  background-color: #fff;\n  position: absolute;\n  margin: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 98%;\n  width: 98%;\n  max-width: 1280px;\n  border-radius: 2px;\n  overflow: hidden;\n}\n\n.stackedit-iframe {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border: 0;\n  border-radius: 2px;\n}\n\n@media (max-width: 740px) {\n  .stackedit-iframe-container {\n    height: 100%;\n    width: 100%;\n    border-radius: 0;\n  }\n\n  .stackedit-iframe {\n    border-radius: 0;\n  }\n}\n\n.stackedit-close-button {\n  position: absolute !important;\n  box-sizing: border-box !important;\n  width: 38px !important;\n  height: 36px !important;\n  margin: 4px !important;\n  padding: 0 4px !important;\n  text-align: center !important;\n  vertical-align: middle !important;\n  text-decoration: none !important;\n}\n", document.head.appendChild(e), r = function() {}
            },
            a = window.location.protocol + "//" + window.location.host,
            s = document.createElement("a"),
            c = function() {
                function e() {
                    var t = this,
                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i(this, e), this.$options = {
                        url: "https://stackedit.io/app"
                    }, this.$listeners = {}, Object.keys(n).forEach(function(e) {
                        t.$options[e] = n[e]
                    })
                }
                return o(e, [{
                    key: "$trigger",
                    value: function(e, t) {
                        (this.$listeners[e] || []).forEach(function(e) {
                            return setTimeout(function() {
                                return e(t)
                            }, 1)
                        })
                    }
                }, {
                    key: "on",
                    value: function(e, t) {
                        var n = this.$listeners[e] || [];
                        n.push(t), this.$listeners[e] = n
                    }
                }, {
                    key: "off",
                    value: function(e, t) {
                        var n = this.$listeners[e] || [],
                            i = n.indexOf(t);
                        i >= 0 && (n.splice(i, 1), n.length ? this.$listeners[e] = n : delete this.$listeners[e])
                    }
                }, {
                    key: "openFile",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        this.close(), s.href = this.$options.url, this.$origin = s.protocol + "//" + s.host;
                        var i = t.content || {},
                            o = {
                                origin: a,
                                fileName: t.name,
                                contentText: i.text,
                                contentProperties: !i.yamlProperties && i.properties ? JSON.stringify(i.properties) : i.yamlProperties,
                                silent: n
                            },
                            c = Object.keys(o).map(function(e) {
                                return e + "=" + encodeURIComponent(o[e] || "")
                            }).join("&");
                        s.hash = "#" + c, r(), this.$containerEl = document.createElement("div"), this.$containerEl.className = n ? "stackedit-hidden-container" : "stackedit-container", this.$containerEl.innerHTML = '\n<div class="stackedit-iframe-container">\n  <iframe class="stackedit-iframe"></iframe>\n  <a href="javascript:void(0)" class="stackedit-close-button" title="Close">\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">\n      <path fill="#777" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />\n    </svg>\n  </a>\n</div>\n', document.body.appendChild(this.$containerEl);
                        var l = this.$containerEl.querySelector("iframe");
                        l.src = s.href;
                        var d = this.$containerEl.querySelector("a");
                        d.addEventListener("click", function() {
                            return e.close()
                        }), this.$messageHandler = function(t) {
                            if (t.origin === e.$origin && t.source === l.contentWindow) switch (t.data.type) {
                                case "ready":
                                    d.parentNode.removeChild(d);
                                    break;
                                case "fileChange":
                                    e.$trigger("fileChange", t.data.payload), n && e.close();
                                    break;
                                case "close":
                                default:
                                    e.close()
                            }
                        }, window.addEventListener("message", this.$messageHandler), n || (document.body.className += " stackedit-no-overflow")
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.$messageHandler && (window.removeEventListener("message", this.$messageHandler), document.body.removeChild(this.$containerEl), this.$messageHandler = null, this.$containerEl = null, document.body.className = document.body.className.replace(/\sstackedit-no-overflow\b/, ""), this.$trigger("close"))
                    }
                }]), e
            }();
        t.default = c, e.exports = t.default
    }])
});

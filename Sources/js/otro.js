/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
! function(t) {
    var e = {};

    function n(r) { if (e[r]) return e[r].exports; var i = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports }
    n.m = t, n.c = e, n.d = function(t, e, r) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, n.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function(e) { return t[e] }.bind(null, i));
        return r
    }, n.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return n.d(e, "a", e), e }, n.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "", n(n.s = 120)
}([function(t, e) { t.exports = function(t) { return t && t.__esModule ? t : { default: t } } }, function(t, e) {
    var n = Array.isArray;
    t.exports = n
}, function(t, e, n) {
    "use strict";
    var r = n(13);
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    e.IX2EngineConstants = e.IX2EngineActionTypes = void 0;
    var o = n(170);
    Object.keys(o).forEach(function(t) { "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, { enumerable: !0, get: function() { return o[t] } })) });
    var a = n(171);
    Object.keys(a).forEach(function(t) { "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, { enumerable: !0, get: function() { return a[t] } })) });
    var u = n(172);
    Object.keys(u).forEach(function(t) { "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, { enumerable: !0, get: function() { return u[t] } })) });
    var c = r(n(173));
    e.IX2EngineActionTypes = c;
    var s = r(n(174));
    e.IX2EngineConstants = s
}, function(t, e, n) {
    (function(e) {
        var n = "object",
            r = function(t) { return t && t.Math == Math && t };
        t.exports = r(typeof globalThis == n && globalThis) || r(typeof window == n && window) || r(typeof self == n && self) || r(typeof e == n && e) || Function("return this")()
    }).call(this, n(22))
}, function(t, e, n) {
    var r = n(89),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r || i || Function("return this")();
    t.exports = o
}, function(t, e, n) {
    "use strict";
    var r = {},
        i = {},
        o = [],
        a = window.Webflow || [],
        u = window.jQuery,
        c = u(window),
        s = u(document),
        f = u.isFunction,
        l = r._ = n(122),
        d = r.tram = n(65) && u.tram,
        p = !1,
        v = !1;

    function h(t) {
        r.env() && (f(t.design) && c.on("__wf_design", t.design), f(t.preview) && c.on("__wf_preview", t.preview)), f(t.destroy) && c.on("__wf_destroy", t.destroy), t.ready && f(t.ready) && function(t) {
            if (p) return void t.ready();
            if (l.contains(o, t.ready)) return;
            o.push(t.ready)
        }(t)
    }

    function E(t) { f(t.design) && c.off("__wf_design", t.design), f(t.preview) && c.off("__wf_preview", t.preview), f(t.destroy) && c.off("__wf_destroy", t.destroy), t.ready && f(t.ready) && function(t) { o = l.filter(o, function(e) { return e !== t.ready }) }(t) }
    d.config.hideBackface = !1, d.config.keepInherited = !0, r.define = function(t, e, n) { i[t] && E(i[t]); var r = i[t] = e(u, l, n) || {}; return h(r), r }, r.require = function(t) { return i[t] }, r.push = function(t) { p ? f(t) && t() : a.push(t) }, r.env = function(t) {
        var e = window.__wf_design,
            n = void 0 !== e;
        return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
    };
    var g, _ = navigator.userAgent.toLowerCase(),
        y = r.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        m = r.env.chrome = /chrome/.test(_) && /Google/.test(navigator.vendor) && parseInt(_.match(/chrome\/(\d+)\./)[1], 10),
        I = r.env.ios = /(ipod|iphone|ipad)/.test(_);
    r.env.safari = /safari/.test(_) && !m && !I, y && s.on("touchstart mousedown", function(t) { g = t.target }), r.validClick = y ? function(t) { return t === g || u.contains(t, g) } : function() { return !0 };
    var T, b = "resize.webflow orientationchange.webflow load.webflow";

    function O(t, e) {
        var n = [],
            r = {};
        return r.up = l.throttle(function(t) { l.each(n, function(e) { e(t) }) }), t && e && t.on(e, r.up), r.on = function(t) { "function" == typeof t && (l.contains(n, t) || n.push(t)) }, r.off = function(t) { n = arguments.length ? l.filter(n, function(e) { return e !== t }) : [] }, r
    }

    function w(t) { f(t) && t() }

    function A() { T && (T.reject(), c.off("load", T.resolve)), T = new u.Deferred, c.on("load", T.resolve) }
    r.resize = O(c, b), r.scroll = O(c, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), r.redraw = O(), r.location = function(t) { window.location = t }, r.env() && (r.location = function() {}), r.ready = function() { p = !0, v ? (v = !1, l.each(i, h)) : l.each(o, w), l.each(a, w), r.resize.up() }, r.load = function(t) { T.then(t) }, r.destroy = function(t) { t = t || {}, v = !0, c.triggerHandler("__wf_destroy"), null != t.domready && (p = t.domready), l.each(i, E), r.resize.off(), r.scroll.off(), r.redraw.off(), o = [], a = [], "pending" === T.state() && A() }, u(r.ready), A(), t.exports = window.Webflow = r
}, function(t, e) { t.exports = function(t) { var e = typeof t; return null != t && ("object" == e || "function" == e) } }, function(t, e, n) {
    var r = n(177),
        i = n(231),
        o = n(59),
        a = n(1),
        u = n(240);
    t.exports = function(t) { return "function" == typeof t ? t : null == t ? o : "object" == typeof t ? a(t) ? i(t[0], t[1]) : r(t) : u(t) }
}, function(t, e, n) {
    var r = n(189),
        i = n(194);
    t.exports = function(t, e) { var n = i(t, e); return r(n) ? n : void 0 }
}, function(t, e) { t.exports = function(t) { return null != t && "object" == typeof t } }, function(t, e, n) {
    "use strict";
    var r = n(13);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.IX2VanillaUtils = e.IX2VanillaPlugins = e.IX2ElementsReducer = e.IX2EasingUtils = e.IX2Easings = e.IX2BrowserSupport = void 0;
    var i = r(n(44));
    e.IX2BrowserSupport = i;
    var o = r(n(106));
    e.IX2Easings = o;
    var a = r(n(108));
    e.IX2EasingUtils = a;
    var u = r(n(247));
    e.IX2ElementsReducer = u;
    var c = r(n(110));
    e.IX2VanillaPlugins = c;
    var s = r(n(249));
    e.IX2VanillaUtils = s
}, function(t, e, n) {
    var r = n(19),
        i = n(190),
        o = n(191),
        a = "[object Null]",
        u = "[object Undefined]",
        c = r ? r.toStringTag : void 0;
    t.exports = function(t) { return null == t ? void 0 === t ? u : a : c && c in Object(t) ? i(t) : o(t) }
}, function(t, e, n) {
    var r = n(88),
        i = n(52);
    t.exports = function(t) { return null != t && i(t.length) && !r(t) }
}, function(t, e) {
    t.exports = function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t)
                if (Object.prototype.hasOwnProperty.call(t, n)) {
                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                    r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                }
        return e.default = t, e
    }
}, function(t, e, n) {
    var r = n(15);
    t.exports = !r(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a })
}, function(t, e) { t.exports = function(t) { try { return !!t() } catch (t) { return !0 } } }, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) { return n.call(t, e) }
}, function(t, e, n) {
    var r = n(14),
        i = n(38),
        o = n(67);
    t.exports = r ? function(t, e, n) { return i.f(t, e, o(1, n)) } : function(t, e, n) { return t[e] = n, t }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t };
    e.clone = c, e.addLast = l, e.addFirst = d, e.removeLast = p, e.removeFirst = v, e.insert = h, e.removeAt = E, e.replaceAt = g, e.getIn = _, e.set = y, e.setIn = m, e.update = I, e.updateIn = T, e.merge = b, e.mergeDeep = O, e.mergeIn = w, e.omit = A, e.addDefaults = S;
    /*!
     * Timm
     *
     * Immutability helpers with fast reads and acceptable writes.
     *
     * @copyright Guillermo Grau Panea 2016
     * @license MIT
     */
    var i = "INVALID_ARGS";

    function o(t) { throw new Error(t) }

    function a(t) { var e = Object.keys(t); return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e }
    var u = {}.hasOwnProperty;

    function c(t) {
        if (Array.isArray(t)) return t.slice();
        for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
            var i = e[r];
            n[i] = t[i]
        }
        return n
    }

    function s(t, e, n) {
        var r = n;
        null == r && o(i);
        for (var u = !1, l = arguments.length, d = Array(l > 3 ? l - 3 : 0), p = 3; p < l; p++) d[p - 3] = arguments[p];
        for (var v = 0; v < d.length; v++) {
            var h = d[v];
            if (null != h) {
                var E = a(h);
                if (E.length)
                    for (var g = 0; g <= E.length; g++) {
                        var _ = E[g];
                        if (!t || void 0 === r[_]) {
                            var y = h[_];
                            e && f(r[_]) && f(y) && (y = s(t, e, r[_], y)), void 0 !== y && y !== r[_] && (u || (u = !0, r = c(r)), r[_] = y)
                        }
                    }
            }
        }
        return r
    }

    function f(t) { var e = void 0 === t ? "undefined" : r(t); return null != t && ("object" === e || "function" === e) }

    function l(t, e) { return Array.isArray(e) ? t.concat(e) : t.concat([e]) }

    function d(t, e) { return Array.isArray(e) ? e.concat(t) : [e].concat(t) }

    function p(t) { return t.length ? t.slice(0, t.length - 1) : t }

    function v(t) { return t.length ? t.slice(1) : t }

    function h(t, e, n) { return t.slice(0, e).concat(Array.isArray(n) ? n : [n]).concat(t.slice(e)) }

    function E(t, e) { return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1)) }

    function g(t, e, n) { if (t[e] === n) return t; for (var r = t.length, i = Array(r), o = 0; o < r; o++) i[o] = t[o]; return i[e] = n, i }

    function _(t, e) { if (!Array.isArray(e) && o(i), null != t) { for (var n = t, r = 0; r < e.length; r++) { var a = e[r]; if (void 0 === (n = null != n ? n[a] : void 0)) return n } return n } }

    function y(t, e, n) { var r = null == t ? "number" == typeof e ? [] : {} : t; if (r[e] === n) return r; var i = c(r); return i[e] = n, i }

    function m(t, e, n) {
        return e.length ? function t(e, n, r, i) {
            var o = void 0,
                a = n[i];
            o = i === n.length - 1 ? r : t(f(e) && f(e[a]) ? e[a] : "number" == typeof n[i + 1] ? [] : {}, n, r, i + 1);
            return y(e, a, o)
        }(t, e, n, 0) : n
    }

    function I(t, e, n) { return y(t, e, n(null == t ? void 0 : t[e])) }

    function T(t, e, n) { return m(t, e, n(_(t, e))) }

    function b(t, e, n, r, i, o) { for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c]; return u.length ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u)) : s(!1, !1, t, e, n, r, i, o) }

    function O(t, e, n, r, i, o) { for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c]; return u.length ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u)) : s(!1, !0, t, e, n, r, i, o) }

    function w(t, e, n, r, i, o, a) {
        var u = _(t, e);
        null == u && (u = {});
        for (var c = arguments.length, f = Array(c > 7 ? c - 7 : 0), l = 7; l < c; l++) f[l - 7] = arguments[l];
        return m(t, e, f.length ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(f)) : s(!1, !1, u, n, r, i, o, a))
    }

    function A(t, e) {
        for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++)
            if (u.call(t, n[i])) { r = !0; break }
        if (!r) return t;
        for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
            var f = c[s];
            n.indexOf(f) >= 0 || (o[f] = t[f])
        }
        return o
    }

    function S(t, e, n, r, i, o) { for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c]; return u.length ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u)) : s(!0, !1, t, e, n, r, i, o) }
    var x = { clone: c, addLast: l, addFirst: d, removeLast: p, removeFirst: v, insert: h, removeAt: E, replaceAt: g, getIn: _, set: y, setIn: m, update: I, updateIn: T, merge: b, mergeDeep: O, mergeIn: w, omit: A, addDefaults: S };
    e.default = x
}, function(t, e, n) {
    var r = n(4).Symbol;
    t.exports = r
}, function(t, e, n) {
    var r = n(35),
        i = 1 / 0;
    t.exports = function(t) { if ("string" == typeof t || r(t)) return t; var e = t + ""; return "0" == e && 1 / t == -i ? "-0" : e }
}, function(t, e) {
    function n(t) { return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

    function r(e) { return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = r = function(t) { return n(t) } : t.exports = r = function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t) }, r(e) }
    t.exports = r
}, function(t, e) {
    var n;
    n = function() { return this }();
    try { n = n || new Function("return this")() } catch (t) { "object" == typeof window && (n = window) }
    t.exports = n
}, function(t, e) { t.exports = function(t) { return "object" == typeof t ? null !== t : "function" == typeof t } }, function(t, e, n) {
    var r = n(23);
    t.exports = function(t) { if (!r(t)) throw TypeError(String(t) + " is not an object"); return t }
}, function(t, e, n) {
    var r = n(3),
        i = n(39),
        o = n(136),
        a = r["__core-js_shared__"] || i("__core-js_shared__", {});
    (t.exports = function(t, e) { return a[t] || (a[t] = void 0 !== e ? e : {}) })("versions", []).push({ version: "3.1.3", mode: o ? "pure" : "global", copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)" })
}, function(t, e) { t.exports = function(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } }, function(t, e) {
    function n() { return t.exports = n = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, n.apply(this, arguments) }
    t.exports = n
}, function(t, e, n) {
    var r = n(179),
        i = n(180),
        o = n(181),
        a = n(182),
        u = n(183);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function(t, e, n) {
    var r = n(45);
    t.exports = function(t, e) {
        for (var n = t.length; n--;)
            if (r(t[n][0], e)) return n;
        return -1
    }
}, function(t, e, n) {
    var r = n(8)(Object, "create");
    t.exports = r
}, function(t, e, n) {
    var r = n(203);
    t.exports = function(t, e) { var n = t.__data__; return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map }
}, function(t, e, n) {
    var r = n(96),
        i = n(53),
        o = n(12);
    t.exports = function(t) { return o(t) ? r(t) : i(t) }
}, function(t, e, n) {
    var r = n(221),
        i = n(9),
        o = Object.prototype,
        a = o.hasOwnProperty,
        u = o.propertyIsEnumerable,
        c = r(function() { return arguments }()) ? r : function(t) { return i(t) && a.call(t, "callee") && !u.call(t, "callee") };
    t.exports = c
}, function(t, e, n) {
    var r = n(1),
        i = n(58),
        o = n(232),
        a = n(235);
    t.exports = function(t, e) { return r(t) ? t : i(t, e) ? [t] : o(a(t)) }
}, function(t, e, n) {
    var r = n(11),
        i = n(9),
        o = "[object Symbol]";
    t.exports = function(t) { return "symbol" == typeof t || i(t) && r(t) == o }
}, function(t, e, n) {
    "use strict";
    var r = n(124);

    function i(t, e) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n)
    }
    var o = window.jQuery,
        a = {},
        u = { reset: function(t, e) { r.triggers.reset(t, e) }, intro: function(t, e) { r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE") }, outro: function(t, e) { r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE") } };
    a.triggers = {}, a.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }, o.extend(a.triggers, u), t.exports = a
}, function(t, e, n) {
    var r = n(132),
        i = n(134);
    t.exports = function(t) { return r(i(t)) }
}, function(t, e, n) {
    var r = n(14),
        i = n(69),
        o = n(24),
        a = n(68),
        u = Object.defineProperty;
    e.f = r ? u : function(t, e, n) {
        if (o(t), e = a(e, !0), o(n), i) try { return u(t, e, n) } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e, n) {
    var r = n(3),
        i = n(17);
    t.exports = function(t, e) { try { i(r, t, e) } catch (n) { r[t] = e } return e }
}, function(t, e) { t.exports = {} }, function(t, e) { t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"] }, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "ActionTypes", function() { return o }), n.d(e, "default", function() { return a });
    var r = n(79),
        i = n(165),
        o = { INIT: "@@redux/INIT" };

    function a(t, e, n) {
        var u;
        if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) { if ("function" != typeof n) throw new Error("Expected the enhancer to be a function."); return n(a)(t, e) }
        if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
        var c = t,
            s = e,
            f = [],
            l = f,
            d = !1;

        function p() { l === f && (l = f.slice()) }

        function v() { return s }

        function h(t) {
            if ("function" != typeof t) throw new Error("Expected listener to be a function.");
            var e = !0;
            return p(), l.push(t),
                function() {
                    if (e) {
                        e = !1, p();
                        var n = l.indexOf(t);
                        l.splice(n, 1)
                    }
                }
        }

        function E(t) { if (!Object(r.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions."); if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?'); if (d) throw new Error("Reducers may not dispatch actions."); try { d = !0, s = c(s, t) } finally { d = !1 } for (var e = f = l, n = 0; n < e.length; n++) e[n](); return t }
        return E({ type: o.INIT }), (u = {
            dispatch: E,
            subscribe: h,
            getState: v,
            replaceReducer: function(t) {
                if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
                c = t, E({ type: o.INIT })
            }
        })[i.default] = function() {
            var t, e = h;
            return (t = {
                subscribe: function(t) {
                    if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");

                    function n() { t.next && t.next(v()) }
                    return n(), { unsubscribe: e(n) }
                }
            })[i.default] = function() { return this }, t
        }, u
    }
}, function(t, e, n) {
    "use strict";

    function r() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        if (0 === e.length) return function(t) { return t };
        if (1 === e.length) return e[0];
        var r = e[e.length - 1],
            i = e.slice(0, -1);
        return function() { return i.reduceRight(function(t, e) { return e(t) }, r.apply(void 0, arguments)) }
    }
    n.r(e), n.d(e, "default", function() { return r })
}, function(t, e, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.TRANSFORM_STYLE_PREFIXED = e.TRANSFORM_PREFIXED = e.FLEX_PREFIXED = e.ELEMENT_MATCHES = e.withBrowser = e.IS_BROWSER_ENV = void 0;
    var i = r(n(85)),
        o = "undefined" != typeof window;
    e.IS_BROWSER_ENV = o;
    var a = function(t, e) { return o ? t() : e };
    e.withBrowser = a;
    var u = a(function() { return (0, i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function(t) { return t in Element.prototype }) });
    e.ELEMENT_MATCHES = u;
    var c = a(function() {
        var t = document.createElement("i"),
            e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
        try { for (var n = e.length, r = 0; r < n; r++) { var i = e[r]; if (t.style.display = i, t.style.display === i) return i } return "" } catch (t) { return "" }
    }, "flex");
    e.FLEX_PREFIXED = c;
    var s = a(function() {
        var t = document.createElement("i");
        if (null == t.style.transform)
            for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) { var i = e[r] + "Transform"; if (void 0 !== t.style[i]) return i }
        return "transform"
    }, "transform");
    e.TRANSFORM_PREFIXED = s;
    var f = s.split("transform")[0],
        l = f ? f + "TransformStyle" : "transformStyle";
    e.TRANSFORM_STYLE_PREFIXED = l
}, function(t, e) { t.exports = function(t, e) { return t === e || t != t && e != e } }, function(t, e, n) {
    var r = n(8)(n(4), "Map");
    t.exports = r
}, function(t, e, n) {
    var r = n(195),
        i = n(202),
        o = n(204),
        a = n(205),
        u = n(206);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function(t, e) { t.exports = function(t, e) { for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n]; return t } }, function(t, e, n) {
    (function(t) {
        var r = n(4),
            i = n(222),
            o = e && !e.nodeType && e,
            a = o && "object" == typeof t && t && !t.nodeType && t,
            u = a && a.exports === o ? r.Buffer : void 0,
            c = (u ? u.isBuffer : void 0) || i;
        t.exports = c
    }).call(this, n(97)(t))
}, function(t, e) {
    var n = 9007199254740991,
        r = /^(?:0|[1-9]\d*)$/;
    t.exports = function(t, e) { var i = typeof t; return !!(e = null == e ? n : e) && ("number" == i || "symbol" != i && r.test(t)) && t > -1 && t % 1 == 0 && t < e }
}, function(t, e, n) {
    var r = n(223),
        i = n(224),
        o = n(225),
        a = o && o.isTypedArray,
        u = a ? i(a) : r;
    t.exports = u
}, function(t, e) {
    var n = 9007199254740991;
    t.exports = function(t) { return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n }
}, function(t, e, n) {
    var r = n(54),
        i = n(226),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) { if (!r(t)) return i(t); var e = []; for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n); return e }
}, function(t, e) {
    var n = Object.prototype;
    t.exports = function(t) { var e = t && t.constructor; return t === ("function" == typeof e && e.prototype || n) }
}, function(t, e, n) {
    var r = n(227),
        i = n(46),
        o = n(228),
        a = n(229),
        u = n(99),
        c = n(11),
        s = n(90),
        f = s(r),
        l = s(i),
        d = s(o),
        p = s(a),
        v = s(u),
        h = c;
    (r && "[object DataView]" != h(new r(new ArrayBuffer(1))) || i && "[object Map]" != h(new i) || o && "[object Promise]" != h(o.resolve()) || a && "[object Set]" != h(new a) || u && "[object WeakMap]" != h(new u)) && (h = function(t) {
        var e = c(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            r = n ? s(n) : "";
        if (r) switch (r) {
            case f:
                return "[object DataView]";
            case l:
                return "[object Map]";
            case d:
                return "[object Promise]";
            case p:
                return "[object Set]";
            case v:
                return "[object WeakMap]"
        }
        return e
    }), t.exports = h
}, function(t, e, n) {
    var r = n(57);
    t.exports = function(t, e, n) { var i = null == t ? void 0 : r(t, e); return void 0 === i ? n : i }
}, function(t, e, n) {
    var r = n(34),
        i = n(20);
    t.exports = function(t, e) { for (var n = 0, o = (e = r(e, t)).length; null != t && n < o;) t = t[i(e[n++])]; return n && n == o ? t : void 0 }
}, function(t, e, n) {
    var r = n(1),
        i = n(35),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
    t.exports = function(t, e) { if (r(t)) return !1; var n = typeof t; return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || a.test(t) || !o.test(t) || null != e && t in Object(e) }
}, function(t, e) { t.exports = function(t) { return t } }, function(t, e, n) {
    var r = n(6),
        i = n(35),
        o = NaN,
        a = /^\s+|\s+$/g,
        u = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        f = parseInt;
    t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (i(t)) return o;
        if (r(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = r(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(a, "");
        var n = c.test(t);
        return n || s.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.mediaQueriesDefined = e.viewportWidthChanged = e.actionListPlaybackChanged = e.elementStateChanged = e.instanceRemoved = e.instanceStarted = e.instanceAdded = e.parameterChanged = e.animationFrameChanged = e.eventStateChanged = e.testFrameRendered = e.eventListenerAdded = e.clearRequested = e.stopRequested = e.playbackRequested = e.previewRequested = e.sessionStopped = e.sessionStarted = e.sessionInitialized = e.rawDataImported = void 0;
    var i = r(n(27)),
        o = n(2),
        a = n(10),
        u = o.IX2EngineActionTypes,
        c = u.IX2_RAW_DATA_IMPORTED,
        s = u.IX2_SESSION_INITIALIZED,
        f = u.IX2_SESSION_STARTED,
        l = u.IX2_SESSION_STOPPED,
        d = u.IX2_PREVIEW_REQUESTED,
        p = u.IX2_PLAYBACK_REQUESTED,
        v = u.IX2_STOP_REQUESTED,
        h = u.IX2_CLEAR_REQUESTED,
        E = u.IX2_EVENT_LISTENER_ADDED,
        g = u.IX2_TEST_FRAME_RENDERED,
        _ = u.IX2_EVENT_STATE_CHANGED,
        y = u.IX2_ANIMATION_FRAME_CHANGED,
        m = u.IX2_PARAMETER_CHANGED,
        I = u.IX2_INSTANCE_ADDED,
        T = u.IX2_INSTANCE_STARTED,
        b = u.IX2_INSTANCE_REMOVED,
        O = u.IX2_ELEMENT_STATE_CHANGED,
        w = u.IX2_ACTION_LIST_PLAYBACK_CHANGED,
        A = u.IX2_VIEWPORT_WIDTH_CHANGED,
        S = u.IX2_MEDIA_QUERIES_DEFINED,
        x = a.IX2VanillaUtils.reifyState;
    e.rawDataImported = function(t) { return { type: c, payload: (0, i.default)({}, x(t)) } };
    e.sessionInitialized = function(t) { var e = t.hasBoundaryNodes; return { type: s, payload: { hasBoundaryNodes: e } } };
    e.sessionStarted = function() { return { type: f } };
    e.sessionStopped = function() { return { type: l } };
    e.previewRequested = function(t) {
        var e = t.rawData,
            n = t.defer;
        return { type: d, payload: { defer: n, rawData: e } }
    };
    e.playbackRequested = function(t) {
        var e = t.actionTypeId,
            n = void 0 === e ? o.ActionTypeConsts.GENERAL_START_ACTION : e,
            r = t.actionListId,
            i = t.actionItemId,
            a = t.eventId,
            u = t.allowEvents,
            c = t.immediate,
            s = t.testManual,
            f = t.verbose,
            l = t.rawData;
        return { type: p, payload: { actionTypeId: n, actionListId: r, actionItemId: i, testManual: s, eventId: a, allowEvents: u, immediate: c, verbose: f, rawData: l } }
    };
    e.stopRequested = function(t) { return { type: v, payload: { actionListId: t } } };
    e.clearRequested = function() { return { type: h } };
    e.eventListenerAdded = function(t, e) { return { type: E, payload: { target: t, listenerParams: e } } };
    e.testFrameRendered = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1; return { type: g, payload: { step: t } } };
    e.eventStateChanged = function(t, e) { return { type: _, payload: { stateKey: t, newState: e } } };
    e.animationFrameChanged = function(t, e) { return { type: y, payload: { now: t, parameters: e } } };
    e.parameterChanged = function(t, e) { return { type: m, payload: { key: t, value: e } } };
    e.instanceAdded = function(t) { return { type: I, payload: (0, i.default)({}, t) } };
    e.instanceStarted = function(t, e) { return { type: T, payload: { instanceId: t, time: e } } };
    e.instanceRemoved = function(t) { return { type: b, payload: { instanceId: t } } };
    e.elementStateChanged = function(t, e, n, r) { return { type: O, payload: { elementId: t, actionTypeId: e, current: n, actionItem: r } } };
    e.actionListPlaybackChanged = function(t) {
        var e = t.actionListId,
            n = t.isPlaying;
        return { type: w, payload: { actionListId: e, isPlaying: n } }
    };
    e.viewportWidthChanged = function(t) {
        var e = t.width,
            n = t.mediaQueries;
        return { type: A, payload: { width: e, mediaQueries: n } }
    };
    e.mediaQueriesDefined = function() { return { type: S } }
}, function(t, e, n) {
    var r = n(117),
        i = n(63);

    function o(t, e) { this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0 }
    o.prototype = r(i.prototype), o.prototype.constructor = o, t.exports = o
}, function(t, e) { t.exports = function() {} }, function(t, e, n) {
    var r = n(117),
        i = n(63),
        o = 4294967295;

    function a(t) { this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = o, this.__views__ = [] }
    a.prototype = r(i.prototype), a.prototype.constructor = a, t.exports = a
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(21));
    window.tram = function(t) {
        function e(t, e) { return (new F.Bare).init(t, e) }

        function n(t) { return t.replace(/[A-Z]/g, function(t) { return "-" + t.toLowerCase() }) }

        function i(t) { var e = parseInt(t.slice(1), 16); return [e >> 16 & 255, e >> 8 & 255, 255 & e] }

        function o(t, e, n) { return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1) }

        function a() {}

        function u(t, e, n) { s("Units do not match [" + t + "]: " + e + ", " + n) }

        function c(t, e, n) { if (void 0 !== e && (n = e), void 0 === t) return n; var r = n; return $.test(t) || !Z.test(t) ? r = parseInt(t, 10) : Z.test(t) && (r = 1e3 * parseFloat(t)), 0 > r && (r = 0), r == r ? r : n }

        function s(t) { H.debug && window && window.console.warn(t) }
        var f = function(t, e, n) {
                function i(t) { return "object" == (0, r.default)(t) }

                function o(t) { return "function" == typeof t }

                function a() {}
                return function r(u, c) {
                    function s() { var t = new f; return o(t.init) && t.init.apply(t, arguments), t }

                    function f() {}
                    c === n && (c = u, u = Object), s.Bare = f;
                    var l, d = a[t] = u[t],
                        p = f[t] = s[t] = new a;
                    return p.constructor = s, s.mixin = function(e) { return f[t] = s[t] = r(s, e)[t], s }, s.open = function(t) {
                        if (l = {}, o(t) ? l = t.call(s, p, d, s, u) : i(t) && (l = t), i(l))
                            for (var n in l) e.call(l, n) && (p[n] = l[n]);
                        return o(p.init) || (p.init = u), s
                    }, s.open(c)
                }
            }("prototype", {}.hasOwnProperty),
            l = {
                ease: ["ease", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * t)
                }],
                "ease-in": ["ease-in", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
                }],
                "ease-out": ["ease-out", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t)
                }],
                "ease-in-out": ["ease-in-out", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
                }],
                linear: ["linear", function(t, e, n, r) { return n * t / r + e }],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(t, e, n, r) { return n * (t /= r) * t + e }],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(t, e, n, r) { return -n * (t /= r) * (t - 2) + e }],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(t, e, n, r) { return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e }],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(t, e, n, r) { return n * (t /= r) * t * t + e }],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(t, e, n, r) { return n * ((t = t / r - 1) * t * t + 1) + e }],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(t, e, n, r) { return (t /= r / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e }],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(t, e, n, r) { return n * (t /= r) * t * t * t + e }],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(t, e, n, r) { return -n * ((t = t / r - 1) * t * t * t - 1) + e }],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(t, e, n, r) { return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e }],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(t, e, n, r) { return n * (t /= r) * t * t * t * t + e }],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(t, e, n, r) { return n * ((t = t / r - 1) * t * t * t * t + 1) + e }],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(t, e, n, r) { return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e }],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(t, e, n, r) { return -n * Math.cos(t / r * (Math.PI / 2)) + n + e }],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(t, e, n, r) { return n * Math.sin(t / r * (Math.PI / 2)) + e }],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(t, e, n, r) { return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + e }],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(t, e, n, r) { return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e }],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(t, e, n, r) { return t === r ? e + n : n * (1 - Math.pow(2, -10 * t / r)) + e }],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(t, e, n, r) { return 0 === t ? e : t === r ? e + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e }],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(t, e, n, r) { return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e }],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(t, e, n, r) { return n * Math.sqrt(1 - (t = t / r - 1) * t) + e }],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(t, e, n, r) { return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e }],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(t, e, n, r, i) { return void 0 === i && (i = 1.70158), n * (t /= r) * t * ((i + 1) * t - i) + e }],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(t, e, n, r, i) { return void 0 === i && (i = 1.70158), n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e }],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(t, e, n, r, i) { return void 0 === i && (i = 1.70158), (t /= r / 2) < 1 ? n / 2 * t * t * ((1 + (i *= 1.525)) * t - i) + e : n / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e }]
            },
            d = { "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)", "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)", "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)" },
            p = document,
            v = window,
            h = "bkwld-tram",
            E = /[\-\.0-9]/g,
            g = /[A-Z]/,
            _ = "number",
            y = /^(rgb|#)/,
            m = /(em|cm|mm|in|pt|pc|px)$/,
            I = /(em|cm|mm|in|pt|pc|px|%)$/,
            T = /(deg|rad|turn)$/,
            b = "unitless",
            O = /(all|none) 0s ease 0s/,
            w = /^(width|height)$/,
            A = " ",
            S = p.createElement("a"),
            x = ["Webkit", "Moz", "O", "ms"],
            R = ["-webkit-", "-moz-", "-o-", "-ms-"],
            N = function(t) {
                if (t in S.style) return { dom: t, css: t };
                var e, n, r = "",
                    i = t.split("-");
                for (e = 0; e < i.length; e++) r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
                for (e = 0; e < x.length; e++)
                    if ((n = x[e] + r) in S.style) return { dom: n, css: R[e] + t }
            },
            C = e.support = { bind: Function.prototype.bind, transform: N("transform"), transition: N("transition"), backface: N("backface-visibility"), timing: N("transition-timing-function") };
        if (C.transition) {
            var L = C.timing.dom;
            if (S.style[L] = l["ease-in-back"][0], !S.style[L])
                for (var D in d) l[D][0] = d[D]
        }
        var P = e.frame = function() { var t = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame; return t && C.bind ? t.bind(v) : function(t) { v.setTimeout(t, 16) } }(),
            M = e.now = function() {
                var t = v.performance,
                    e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                return e && C.bind ? e.bind(t) : Date.now || function() { return +new Date }
            }(),
            j = f(function(e) {
                function i(t, e) {
                    var n = function(t) {
                            for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
                                var i = t[e];
                                i && r.push(i)
                            }
                            return r
                        }(("" + t).split(A)),
                        r = n[0];
                    e = e || {};
                    var i = Q[r];
                    if (!i) return s("Unsupported property: " + r);
                    if (!e.weak || !this.props[r]) {
                        var o = i[0],
                            a = this.props[r];
                        return a || (a = this.props[r] = new o.Bare), a.init(this.$el, n, i, e), a
                    }
                }

                function o(t, e, n) {
                    if (t) {
                        var o = (0, r.default)(t);
                        if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && e) return this.timer = new W({ duration: t, context: this, complete: a }), void(this.active = !0);
                        if ("string" == o && e) {
                            switch (t) {
                                case "hide":
                                    f.call(this);
                                    break;
                                case "stop":
                                    u.call(this);
                                    break;
                                case "redraw":
                                    l.call(this);
                                    break;
                                default:
                                    i.call(this, t, n && n[1])
                            }
                            return a.call(this)
                        }
                        if ("function" == o) return void t.call(this, this);
                        if ("object" == o) {
                            var s = 0;
                            p.call(this, t, function(t, e) { t.span > s && (s = t.span), t.stop(), t.animate(e) }, function(t) { "wait" in t && (s = c(t.wait, 0)) }), d.call(this), s > 0 && (this.timer = new W({ duration: s, context: this }), this.active = !0, e && (this.timer.complete = a));
                            var v = this,
                                h = !1,
                                E = {};
                            P(function() { p.call(v, t, function(t) { t.active && (h = !0, E[t.name] = t.nextStyle) }), h && v.$el.css(E) })
                        }
                    }
                }

                function a() {
                    if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                        var t = this.queue.shift();
                        o.call(this, t.options, !0, t.args)
                    }
                }

                function u(t) {
                    var e;
                    this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (0, r.default)(t) && null != t ? t : this.props, p.call(this, e, v), d.call(this)
                }

                function f() { u.call(this), this.el.style.display = "none" }

                function l() { this.el.offsetHeight }

                function d() {
                    var t, e, n = [];
                    for (t in this.upstream && n.push(this.upstream), this.props)(e = this.props[t]).active && n.push(e.string);
                    n = n.join(","), this.style !== n && (this.style = n, this.el.style[C.transition.dom] = n)
                }

                function p(t, e, r) {
                    var o, a, u, c, s = e !== v,
                        f = {};
                    for (o in t) u = t[o], o in q ? (f.transform || (f.transform = {}), f.transform[o] = u) : (g.test(o) && (o = n(o)), o in Q ? f[o] = u : (c || (c = {}), c[o] = u));
                    for (o in f) {
                        if (u = f[o], !(a = this.props[o])) {
                            if (!s) continue;
                            a = i.call(this, o)
                        }
                        e.call(this, a, u)
                    }
                    r && c && r.call(this, c)
                }

                function v(t) { t.stop() }

                function E(t, e) { t.set(e) }

                function _(t) { this.$el.css(t) }

                function y(t, n) { e[t] = function() { return this.children ? function(t, e) { var n, r = this.children.length; for (n = 0; r > n; n++) t.apply(this.children[n], e); return this }.call(this, n, arguments) : (this.el && n.apply(this, arguments), this) } }
                e.init = function(e) {
                    if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, H.keepInherited && !H.fallback) {
                        var n = Y(this.el, "transition");
                        n && !O.test(n) && (this.upstream = n)
                    }
                    C.backface && H.hideBackface && z(this.el, C.backface.css, "hidden")
                }, y("add", i), y("start", o), y("wait", function(t) { t = c(t, 0), this.active ? this.queue.push({ options: t }) : (this.timer = new W({ duration: t, context: this, complete: a }), this.active = !0) }), y("then", function(t) { return this.active ? (this.queue.push({ options: t, args: arguments }), void(this.timer.complete = a)) : s("No active transition timer. Use start() or wait() before then().") }), y("next", a), y("stop", u), y("set", function(t) { u.call(this, t), p.call(this, t, E, _) }), y("show", function(t) { "string" != typeof t && (t = "block"), this.el.style.display = t }), y("hide", f), y("redraw", l), y("destroy", function() { u.call(this), t.removeData(this.el, h), this.$el = this.el = null })
            }),
            F = f(j, function(e) {
                function n(e, n) { var r = t.data(e, h) || t.data(e, h, new j.Bare); return r.el || r.init(e), n ? r.start(n) : r }
                e.init = function(e, r) { var i = t(e); if (!i.length) return this; if (1 === i.length) return n(i[0], r); var o = []; return i.each(function(t, e) { o.push(n(e, r)) }), this.children = o, this }
            }),
            k = f(function(t) {
                function e() {
                    var t = this.get();
                    this.update("auto");
                    var e = this.get();
                    return this.update(t), e
                }

                function n(t) { var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t); return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3") }
                var i = 500,
                    a = "ease",
                    u = 0;
                t.init = function(t, e, n, r) {
                    this.$el = t, this.el = t[0];
                    var o = e[0];
                    n[2] && (o = n[2]), K[o] && (o = K[o]), this.name = o, this.type = n[1], this.duration = c(e[1], this.duration, i), this.ease = function(t, e, n) { return void 0 !== e && (n = e), t in l ? t : n }(e[2], this.ease, a), this.delay = c(e[3], this.delay, u), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = w.test(this.name), this.unit = r.unit || this.unit || H.defaultUnit, this.angle = r.angle || this.angle || H.defaultAngle, H.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + A + this.duration + "ms" + ("ease" != this.ease ? A + l[this.ease][0] : "") + (this.delay ? A + this.delay + "ms" : ""))
                }, t.set = function(t) { t = this.convert(t, this.type), this.update(t), this.redraw() }, t.transition = function(t) { this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t }, t.fallback = function(t) {
                    var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                    t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new U({ from: n, to: t, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this })
                }, t.get = function() { return Y(this.el, this.name) }, t.update = function(t) { z(this.el, this.name, t) }, t.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, z(this.el, this.name, this.get()));
                    var t = this.tween;
                    t && t.context && t.destroy()
                }, t.convert = function(t, e) {
                    if ("auto" == t && this.auto) return t;
                    var i, o = "number" == typeof t,
                        a = "string" == typeof t;
                    switch (e) {
                        case _:
                            if (o) return t;
                            if (a && "" === t.replace(E, "")) return +t;
                            i = "number(unitless)";
                            break;
                        case y:
                            if (a) { if ("" === t && this.original) return this.original; if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : n(t) }
                            i = "hex or rgb string";
                            break;
                        case m:
                            if (o) return t + this.unit;
                            if (a && e.test(t)) return t;
                            i = "number(px) or string(unit)";
                            break;
                        case I:
                            if (o) return t + this.unit;
                            if (a && e.test(t)) return t;
                            i = "number(px) or string(unit or %)";
                            break;
                        case T:
                            if (o) return t + this.angle;
                            if (a && e.test(t)) return t;
                            i = "number(deg) or string(angle)";
                            break;
                        case b:
                            if (o) return t;
                            if (a && I.test(t)) return t;
                            i = "number(unitless) or string(unit or %)"
                    }
                    return function(t, e) { s("Type warning: Expected: [" + t + "] Got: [" + (0, r.default)(e) + "] " + e) }(i, t), t
                }, t.redraw = function() { this.el.offsetHeight }
            }),
            X = f(k, function(t, e) { t.init = function() { e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), y)) } }),
            G = f(k, function(t, e) { t.init = function() { e.init.apply(this, arguments), this.animate = this.fallback }, t.get = function() { return this.$el[this.name]() }, t.update = function(t) { this.$el[this.name](t) } }),
            V = f(k, function(t, e) {
                function n(t, e) { var n, r, i, o, a; for (n in t) i = (o = q[n])[0], r = o[1] || n, a = this.convert(t[n], i), e.call(this, r, a, i) }
                t.init = function() { e.init.apply(this, arguments), this.current || (this.current = {}, q.perspective && H.perspective && (this.current.perspective = H.perspective, z(this.el, this.name, this.style(this.current)), this.redraw())) }, t.set = function(t) { n.call(this, t, function(t, e) { this.current[t] = e }), z(this.el, this.name, this.style(this.current)), this.redraw() }, t.transition = function(t) {
                    var e = this.values(t);
                    this.tween = new B({ current: this.current, values: e, duration: this.duration, delay: this.delay, ease: this.ease });
                    var n, r = {};
                    for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
                    this.active = !0, this.nextStyle = this.style(r)
                }, t.fallback = function(t) {
                    var e = this.values(t);
                    this.tween = new B({ current: this.current, values: e, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this })
                }, t.update = function() { z(this.el, this.name, this.style(this.current)) }, t.style = function(t) { var e, n = ""; for (e in t) n += e + "(" + t[e] + ") "; return n }, t.values = function(t) { var e, r = {}; return n.call(this, t, function(t, n, i) { r[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, i)) }), r }
            }),
            U = f(function(e) {
                function n() {
                    var t, e, r, i = c.length;
                    if (i)
                        for (P(n), e = M(), t = i; t--;)(r = c[t]) && r.render(e)
                }
                var r = { ease: l.ease[1], from: 0, to: 1 };
                e.init = function(t) {
                    this.duration = t.duration || 0, this.delay = t.delay || 0;
                    var e = t.ease || r.ease;
                    l[e] && (e = l[e][1]), "function" != typeof e && (e = r.ease), this.ease = e, this.update = t.update || a, this.complete = t.complete || a, this.context = t.context || this, this.name = t.name;
                    var n = t.from,
                        i = t.to;
                    void 0 === n && (n = r.from), void 0 === i && (i = r.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof i ? (this.begin = n, this.change = i - n) : this.format(i, n), this.value = this.begin + this.unit, this.start = M(), !1 !== t.autoplay && this.play()
                }, e.play = function() {
                    var t;
                    this.active || (this.start || (this.start = M()), this.active = !0, t = this, 1 === c.push(t) && P(n))
                }, e.stop = function() {
                    var e, n, r;
                    this.active && (this.active = !1, e = this, (r = t.inArray(e, c)) >= 0 && (n = c.slice(r + 1), c.length = r, n.length && (c = c.concat(n))))
                }, e.render = function(t) {
                    var e, n = t - this.start;
                    if (this.delay) {
                        if (n <= this.delay) return;
                        n -= this.delay
                    }
                    if (n < this.duration) { var r = this.ease(n, 0, 1, this.duration); return e = this.startRGB ? function(t, e, n) { return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2])) }(this.startRGB, this.endRGB, r) : function(t) { return Math.round(t * s) / s }(this.begin + r * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value) }
                    e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                }, e.format = function(t, e) {
                    if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = i(e), this.endRGB = i(t), this.endHex = t, this.begin = 0, void(this.change = 1);
                    if (!this.unit) {
                        var n = e.replace(E, "");
                        n !== t.replace(E, "") && u("tween", e, t), this.unit = n
                    }
                    e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
                }, e.destroy = function() { this.stop(), this.context = null, this.ease = this.update = this.complete = a };
                var c = [],
                    s = 1e3
            }),
            W = f(U, function(t) { t.init = function(t) { this.duration = t.duration || 0, this.complete = t.complete || a, this.context = t.context, this.play() }, t.render = function(t) { t - this.start < this.duration || (this.complete.call(this.context), this.destroy()) } }),
            B = f(U, function(t, e) {
                t.init = function(t) {
                    var e, n;
                    for (e in this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current, t.values) n = t.values[e], this.current[e] !== n && this.tweens.push(new U({ name: e, from: this.current[e], to: n, duration: t.duration, delay: t.delay, ease: t.ease, autoplay: !1 }));
                    this.play()
                }, t.render = function(t) { var e, n, r = !1; for (e = this.tweens.length; e--;)(n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, r = !0); return r ? void(this.update && this.update.call(this.context)) : this.destroy() }, t.destroy = function() {
                    if (e.destroy.call(this), this.tweens) {
                        var t;
                        for (t = this.tweens.length; t--;) this.tweens[t].destroy();
                        this.tweens = null, this.current = null
                    }
                }
            }),
            H = e.config = { debug: !1, defaultUnit: "px", defaultAngle: "deg", keepInherited: !1, hideBackface: !1, perspective: "", fallback: !C.transition, agentTests: [] };
        e.fallback = function(t) {
            if (!C.transition) return H.fallback = !0;
            H.agentTests.push("(" + t + ")");
            var e = new RegExp(H.agentTests.join("|"), "i");
            H.fallback = e.test(navigator.userAgent)
        }, e.fallback("6.0.[2-5] Safari"), e.tween = function(t) { return new U(t) }, e.delay = function(t, e, n) { return new W({ complete: e, duration: t, context: n }) }, t.fn.tram = function(t) { return e.call(null, this, t) };
        var z = t.style,
            Y = t.css,
            K = { transform: C.transform && C.transform.css },
            Q = { color: [X, y], background: [X, y, "background-color"], "outline-color": [X, y], "border-color": [X, y], "border-top-color": [X, y], "border-right-color": [X, y], "border-bottom-color": [X, y], "border-left-color": [X, y], "border-width": [k, m], "border-top-width": [k, m], "border-right-width": [k, m], "border-bottom-width": [k, m], "border-left-width": [k, m], "border-spacing": [k, m], "letter-spacing": [k, m], margin: [k, m], "margin-top": [k, m], "margin-right": [k, m], "margin-bottom": [k, m], "margin-left": [k, m], padding: [k, m], "padding-top": [k, m], "padding-right": [k, m], "padding-bottom": [k, m], "padding-left": [k, m], "outline-width": [k, m], opacity: [k, _], top: [k, I], right: [k, I], bottom: [k, I], left: [k, I], "font-size": [k, I], "text-indent": [k, I], "word-spacing": [k, I], width: [k, I], "min-width": [k, I], "max-width": [k, I], height: [k, I], "min-height": [k, I], "max-height": [k, I], "line-height": [k, b], "scroll-top": [G, _, "scrollTop"], "scroll-left": [G, _, "scrollLeft"] },
            q = {};
        C.transform && (Q.transform = [V], q = { x: [I, "translateX"], y: [I, "translateY"], rotate: [T], rotateX: [T], rotateY: [T], scale: [_], scaleX: [_], scaleY: [_], skew: [T], skewX: [T], skewY: [T] }), C.transform && C.backface && (q.z = [I, "translateZ"], q.rotateZ = [T], q.scaleZ = [_], q.perspective = [m]);
        var $ = /ms/,
            Z = /s|\./;
        return t.tram = e
    }(window.jQuery)
}, function(t, e, n) {
    var r = n(14),
        i = n(131),
        o = n(67),
        a = n(37),
        u = n(68),
        c = n(16),
        s = n(69),
        f = Object.getOwnPropertyDescriptor;
    e.f = r ? f : function(t, e) {
        if (t = a(t), e = u(e, !0), s) try { return f(t, e) } catch (t) {}
        if (c(t, e)) return o(!i.f.call(t, e), t[e])
    }
}, function(t, e) { t.exports = function(t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e } } }, function(t, e, n) {
    var r = n(23);
    t.exports = function(t, e) { if (!r(t)) return t; var n, i; if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i; if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i; if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i; throw TypeError("Can't convert object to primitive value") }
}, function(t, e, n) {
    var r = n(14),
        i = n(15),
        o = n(70);
    t.exports = !r && !i(function() { return 7 != Object.defineProperty(o("div"), "a", { get: function() { return 7 } }).a })
}, function(t, e, n) {
    var r = n(3),
        i = n(23),
        o = r.document,
        a = i(o) && i(o.createElement);
    t.exports = function(t) { return a ? o.createElement(t) : {} }
}, function(t, e, n) {
    var r = n(25);
    t.exports = r("native-function-to-string", Function.toString)
}, function(t, e, n) {
    var r = n(25),
        i = n(73),
        o = r("keys");
    t.exports = function(t) { return o[t] || (o[t] = i(t)) }
}, function(t, e) {
    var n = 0,
        r = Math.random();
    t.exports = function(t) { return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36) }
}, function(t, e, n) {
    var r = n(141),
        i = n(3),
        o = function(t) { return "function" == typeof t ? t : void 0 };
    t.exports = function(t, e) { return arguments.length < 2 ? o(r[t]) || o(i[t]) : r[t] && r[t][e] || i[t] && i[t][e] }
}, function(t, e, n) {
    var r = n(16),
        i = n(37),
        o = n(76).indexOf,
        a = n(40);
    t.exports = function(t, e) {
        var n, u = i(t),
            c = 0,
            s = [];
        for (n in u) !r(a, n) && r(u, n) && s.push(n);
        for (; e.length > c;) r(u, n = e[c++]) && (~o(s, n) || s.push(n));
        return s
    }
}, function(t, e, n) {
    var r = n(37),
        i = n(143),
        o = n(144),
        a = function(t) {
            return function(e, n, a) {
                var u, c = r(e),
                    s = i(c.length),
                    f = o(a, s);
                if (t && n != n) {
                    for (; s > f;)
                        if ((u = c[f++]) != u) return !0
                } else
                    for (; s > f; f++)
                        if ((t || f in c) && c[f] === n) return t || f || 0; return !t && -1
            }
        };
    t.exports = { includes: a(!0), indexOf: a(!1) }
}, function(t, e) {
    var n = Math.ceil,
        r = Math.floor;
    t.exports = function(t) { return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t) }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(42);
    n.d(e, "createStore", function() { return r.default });
    var i = n(81);
    n.d(e, "combineReducers", function() { return i.default });
    var o = n(83);
    n.d(e, "bindActionCreators", function() { return o.default });
    var a = n(84);
    n.d(e, "applyMiddleware", function() { return a.default });
    var u = n(43);
    n.d(e, "compose", function() { return u.default });
    n(82)
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(157),
        i = n(162),
        o = n(164),
        a = "[object Object]",
        u = Function.prototype,
        c = Object.prototype,
        s = u.toString,
        f = c.hasOwnProperty,
        l = s.call(Object);
    e.default = function(t) { if (!Object(o.default)(t) || Object(r.default)(t) != a) return !1; var e = Object(i.default)(t); if (null === e) return !0; var n = f.call(e, "constructor") && e.constructor; return "function" == typeof n && n instanceof n && s.call(n) == l }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(158).default.Symbol;
    e.default = r
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "default", function() { return o });
    var r = n(42);
    n(79), n(82);

    function i(t, e) { var n = e && e.type; return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.' }

    function o(t) {
        for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
            var a = e[o];
            0, "function" == typeof t[a] && (n[a] = t[a])
        }
        var u, c = Object.keys(n);
        try {! function(t) { Object.keys(t).forEach(function(e) { var n = t[e]; if (void 0 === n(void 0, { type: r.ActionTypes.INIT })) throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'); if (void 0 === n(void 0, { type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".") })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + r.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.') }) }(n) } catch (t) { u = t }
        return function() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                e = arguments[1];
            if (u) throw u;
            for (var r = !1, o = {}, a = 0; a < c.length; a++) {
                var s = c[a],
                    f = n[s],
                    l = t[s],
                    d = f(l, e);
                if (void 0 === d) { var p = i(s, e); throw new Error(p) }
                o[s] = d, r = r || d !== l
            }
            return r ? o : t
        }
    }
}, function(t, e, n) {
    "use strict";

    function r(t) { "undefined" != typeof console && "function" == typeof console.error && console.error(t); try { throw new Error(t) } catch (t) {} }
    n.r(e), n.d(e, "default", function() { return r })
}, function(t, e, n) {
    "use strict";

    function r(t, e) { return function() { return e(t.apply(void 0, arguments)) } }

    function i(t, e) {
        if ("function" == typeof t) return r(t, e);
        if ("object" != typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
            var a = n[o],
                u = t[a];
            "function" == typeof u && (i[a] = r(u, e))
        }
        return i
    }
    n.r(e), n.d(e, "default", function() { return i })
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "default", function() { return o });
    var r = n(43),
        i = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t };

    function o() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return function(t) {
            return function(n, o, a) {
                var u, c = t(n, o, a),
                    s = c.dispatch,
                    f = { getState: c.getState, dispatch: function(t) { return s(t) } };
                return u = e.map(function(t) { return t(f) }), s = r.default.apply(void 0, u)(c.dispatch), i({}, c, { dispatch: s })
            }
        }
    }
}, function(t, e, n) {
    var r = n(86)(n(242));
    t.exports = r
}, function(t, e, n) {
    var r = n(7),
        i = n(12),
        o = n(32);
    t.exports = function(t) {
        return function(e, n, a) {
            var u = Object(e);
            if (!i(e)) {
                var c = r(n, 3);
                e = o(e), n = function(t) { return c(u[t], t, u) }
            }
            var s = t(e, n, a);
            return s > -1 ? u[c ? e[s] : s] : void 0
        }
    }
}, function(t, e, n) {
    var r = n(28),
        i = n(184),
        o = n(185),
        a = n(186),
        u = n(187),
        c = n(188);

    function s(t) {
        var e = this.__data__ = new r(t);
        this.size = e.size
    }
    s.prototype.clear = i, s.prototype.delete = o, s.prototype.get = a, s.prototype.has = u, s.prototype.set = c, t.exports = s
}, function(t, e, n) {
    var r = n(11),
        i = n(6),
        o = "[object AsyncFunction]",
        a = "[object Function]",
        u = "[object GeneratorFunction]",
        c = "[object Proxy]";
    t.exports = function(t) { if (!i(t)) return !1; var e = r(t); return e == a || e == u || e == o || e == c }
}, function(t, e, n) {
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n
    }).call(this, n(22))
}, function(t, e) {
    var n = Function.prototype.toString;
    t.exports = function(t) { if (null != t) { try { return n.call(t) } catch (t) {} try { return t + "" } catch (t) {} } return "" }
}, function(t, e, n) {
    var r = n(207),
        i = n(9);
    t.exports = function t(e, n, o, a, u) { return e === n || (null == e || null == n || !i(e) && !i(n) ? e != e && n != n : r(e, n, o, a, t, u)) }
}, function(t, e, n) {
    var r = n(208),
        i = n(211),
        o = n(212),
        a = 1,
        u = 2;
    t.exports = function(t, e, n, c, s, f) {
        var l = n & a,
            d = t.length,
            p = e.length;
        if (d != p && !(l && p > d)) return !1;
        var v = f.get(t),
            h = f.get(e);
        if (v && h) return v == e && h == t;
        var E = -1,
            g = !0,
            _ = n & u ? new r : void 0;
        for (f.set(t, e), f.set(e, t); ++E < d;) {
            var y = t[E],
                m = e[E];
            if (c) var I = l ? c(m, y, E, e, t, f) : c(y, m, E, t, e, f);
            if (void 0 !== I) {
                if (I) continue;
                g = !1;
                break
            }
            if (_) { if (!i(e, function(t, e) { if (!o(_, e) && (y === t || s(y, t, n, c, f))) return _.push(e) })) { g = !1; break } } else if (y !== m && !s(y, m, n, c, f)) { g = !1; break }
        }
        return f.delete(t), f.delete(e), g
    }
}, function(t, e, n) {
    var r = n(48),
        i = n(1);
    t.exports = function(t, e, n) { var o = e(t); return i(t) ? o : r(o, n(t)) }
}, function(t, e, n) {
    var r = n(219),
        i = n(95),
        o = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        u = a ? function(t) { return null == t ? [] : (t = Object(t), r(a(t), function(e) { return o.call(t, e) })) } : i;
    t.exports = u
}, function(t, e) { t.exports = function() { return [] } }, function(t, e, n) {
    var r = n(220),
        i = n(33),
        o = n(1),
        a = n(49),
        u = n(50),
        c = n(51),
        s = Object.prototype.hasOwnProperty;
    t.exports = function(t, e) {
        var n = o(t),
            f = !n && i(t),
            l = !n && !f && a(t),
            d = !n && !f && !l && c(t),
            p = n || f || l || d,
            v = p ? r(t.length, String) : [],
            h = v.length;
        for (var E in t) !e && !s.call(t, E) || p && ("length" == E || l && ("offset" == E || "parent" == E) || d && ("buffer" == E || "byteLength" == E || "byteOffset" == E) || u(E, h)) || v.push(E);
        return v
    }
}, function(t, e) { t.exports = function(t) { return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function() { return t.l } }), Object.defineProperty(t, "id", { enumerable: !0, get: function() { return t.i } }), t.webpackPolyfill = 1), t } }, function(t, e) { t.exports = function(t, e) { return function(n) { return t(e(n)) } } }, function(t, e, n) {
    var r = n(8)(n(4), "WeakMap");
    t.exports = r
}, function(t, e, n) {
    var r = n(6);
    t.exports = function(t) { return t == t && !r(t) }
}, function(t, e) { t.exports = function(t, e) { return function(n) { return null != n && n[t] === e && (void 0 !== e || t in Object(n)) } } }, function(t, e) { t.exports = function(t, e) { for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t); return i } }, function(t, e) { t.exports = function(t) { return function(e) { return null == e ? void 0 : e[t] } } }, function(t, e) {
    t.exports = function(t, e, n, r) {
        for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
            if (e(t[o], o, t)) return o;
        return -1
    }
}, function(t, e, n) {
    var r = n(243);
    t.exports = function(t) {
        var e = r(t),
            n = e % 1;
        return e == e ? n ? e - n : e : 0
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.inQuad = function(t) { return Math.pow(t, 2) }, e.outQuad = function(t) { return -(Math.pow(t - 1, 2) - 1) }, e.inOutQuad = function(t) { if ((t /= .5) < 1) return .5 * Math.pow(t, 2); return -.5 * ((t -= 2) * t - 2) }, e.inCubic = function(t) { return Math.pow(t, 3) }, e.outCubic = function(t) { return Math.pow(t - 1, 3) + 1 }, e.inOutCubic = function(t) { if ((t /= .5) < 1) return .5 * Math.pow(t, 3); return .5 * (Math.pow(t - 2, 3) + 2) }, e.inQuart = function(t) { return Math.pow(t, 4) }, e.outQuart = function(t) { return -(Math.pow(t - 1, 4) - 1) }, e.inOutQuart = function(t) { if ((t /= .5) < 1) return .5 * Math.pow(t, 4); return -.5 * ((t -= 2) * Math.pow(t, 3) - 2) }, e.inQuint = function(t) { return Math.pow(t, 5) }, e.outQuint = function(t) { return Math.pow(t - 1, 5) + 1 }, e.inOutQuint = function(t) { if ((t /= .5) < 1) return .5 * Math.pow(t, 5); return .5 * (Math.pow(t - 2, 5) + 2) }, e.inSine = function(t) { return 1 - Math.cos(t * (Math.PI / 2)) }, e.outSine = function(t) { return Math.sin(t * (Math.PI / 2)) }, e.inOutSine = function(t) { return -.5 * (Math.cos(Math.PI * t) - 1) }, e.inExpo = function(t) { return 0 === t ? 0 : Math.pow(2, 10 * (t - 1)) }, e.outExpo = function(t) { return 1 === t ? 1 : 1 - Math.pow(2, -10 * t) }, e.inOutExpo = function(t) { if (0 === t) return 0; if (1 === t) return 1; if ((t /= .5) < 1) return .5 * Math.pow(2, 10 * (t - 1)); return .5 * (2 - Math.pow(2, -10 * --t)) }, e.inCirc = function(t) { return -(Math.sqrt(1 - t * t) - 1) }, e.outCirc = function(t) { return Math.sqrt(1 - Math.pow(t - 1, 2)) }, e.inOutCirc = function(t) { if ((t /= .5) < 1) return -.5 * (Math.sqrt(1 - t * t) - 1); return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) }, e.outBounce = function(t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }, e.inBack = function(t) { return t * t * ((o + 1) * t - o) }, e.outBack = function(t) { return (t -= 1) * t * ((o + 1) * t + o) + 1 }, e.inOutBack = function(t) { var e = o; if ((t /= .5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * .5; return .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2) }, e.inElastic = function(t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = .3);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        return -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)
    }, e.outElastic = function(t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = .3);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        return r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1
    }, e.inOutElastic = function(t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (2 == (t /= .5)) return 1;
        n || (n = .3 * 1.5);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        if (t < 1) return r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5;
        return r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1
    }, e.swingFromTo = function(t) { var e = o; return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2) }, e.swingFrom = function(t) { return t * t * ((o + 1) * t - o) }, e.swingTo = function(t) { return (t -= 1) * t * ((o + 1) * t + o) + 1 }, e.bounce = function(t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }, e.bouncePast = function(t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375) }, e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0;
    var i = r(n(107)),
        o = 1.70158,
        a = (0, i.default)(.25, .1, .25, 1);
    e.ease = a;
    var u = (0, i.default)(.42, 0, 1, 1);
    e.easeIn = u;
    var c = (0, i.default)(0, 0, .58, 1);
    e.easeOut = c;
    var s = (0, i.default)(.42, 0, .58, 1);
    e.easeInOut = s
}, function(t, e) {
    var n = 4,
        r = .001,
        i = 1e-7,
        o = 10,
        a = 11,
        u = 1 / (a - 1),
        c = "function" == typeof Float32Array;

    function s(t, e) { return 1 - 3 * e + 3 * t }

    function f(t, e) { return 3 * e - 6 * t }

    function l(t) { return 3 * t }

    function d(t, e, n) { return ((s(e, n) * t + f(e, n)) * t + l(e)) * t }

    function p(t, e, n) { return 3 * s(e, n) * t * t + 2 * f(e, n) * t + l(e) }
    t.exports = function(t, e, s, f) {
        if (!(0 <= t && t <= 1 && 0 <= s && s <= 1)) throw new Error("bezier x values must be in [0, 1] range");
        var l = c ? new Float32Array(a) : new Array(a);
        if (t !== e || s !== f)
            for (var v = 0; v < a; ++v) l[v] = d(v * u, t, s);

        function h(e) {
            for (var c = 0, f = 1, v = a - 1; f !== v && l[f] <= e; ++f) c += u;
            var h = c + (e - l[--f]) / (l[f + 1] - l[f]) * u,
                E = p(h, t, s);
            return E >= r ? function(t, e, r, i) {
                for (var o = 0; o < n; ++o) {
                    var a = p(e, r, i);
                    if (0 === a) return e;
                    e -= (d(e, r, i) - t) / a
                }
                return e
            }(e, h, t, s) : 0 === E ? h : function(t, e, n, r, a) {
                var u, c, s = 0;
                do {
                    (u = d(c = e + (n - e) / 2, r, a) - t) > 0 ? n = c : e = c
                } while (Math.abs(u) > i && ++s < o);
                return c
            }(e, c, c + u, t, s)
        }
        return function(n) { return t === e && s === f ? n : 0 === n ? 0 : 1 === n ? 1 : d(h(n), e, f) }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(109)),
        i = n(0),
        o = n(13);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.optimizeFloat = c, e.createBezierEasing = function(t) { return u.default.apply(void 0, (0, r.default)(t)) }, e.applyEasing = function(t, e, n) { if (0 === e) return 0; if (1 === e) return 1; if (n) return c(e > 0 ? n(e) : e); return c(e > 0 && t && a[t] ? a[t](e) : e) };
    var a = o(n(106)),
        u = i(n(107));

    function c(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            r = Math.pow(n, e),
            i = Number(Math.round(t * r) / r);
        return Math.abs(i) > 1e-4 ? i : 0
    }
}, function(t, e, n) {
    var r = n(244),
        i = n(245),
        o = n(246);
    t.exports = function(t) { return r(t) || i(t) || o() }
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(26));
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isPluginType = function(t) { return t === o.ActionTypeConsts.PLUGIN_LOTTIE }, e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginDuration = e.getPluginOrigin = e.getPluginConfig = void 0;
    var i = n(248),
        o = n(2),
        a = n(44),
        u = (0, r.default)({}, o.ActionTypeConsts.PLUGIN_LOTTIE, { getConfig: i.getPluginConfig, getOrigin: i.getPluginOrigin, getDuration: i.getPluginDuration, getDestination: i.getPluginDestination, createInstance: i.createPluginInstance, render: i.renderPlugin, clear: i.clearPlugin });
    var c = function(t) { return function(e) { if (!a.IS_BROWSER_ENV) return function() { return null }; var n = u[e]; if (!n) throw new Error("IX2 no plugin configured for: ".concat(e)); var r = n[t]; if (!r) throw new Error("IX2 invalid plugin method: ".concat(t)); return r } },
        s = c("getConfig");
    e.getPluginConfig = s;
    var f = c("getOrigin");
    e.getPluginOrigin = f;
    var l = c("getDuration");
    e.getPluginDuration = l;
    var d = c("getDestination");
    e.getPluginDestination = d;
    var p = c("createInstance");
    e.createPluginInstance = p;
    var v = c("render");
    e.renderPlugin = v;
    var h = c("clear");
    e.clearPlugin = h
}, function(t, e, n) {
    var r = n(112),
        i = n(255)(r);
    t.exports = i
}, function(t, e, n) {
    var r = n(253),
        i = n(32);
    t.exports = function(t, e) { return t && r(t, e, i) }
}, function(t, e, n) {
    "use strict";
    var r = n(259);
    e.__esModule = !0, e.default = void 0;
    var i = r(n(260)).default;
    e.default = i
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(109)),
        i = n(13),
        o = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.observeRequests = function(t) { P({ store: t, select: function(t) { var e = t.ixRequest; return e.preview }, onChange: et }), P({ store: t, select: function(t) { var e = t.ixRequest; return e.playback }, onChange: rt }), P({ store: t, select: function(t) { var e = t.ixRequest; return e.stop }, onChange: it }), P({ store: t, select: function(t) { var e = t.ixRequest; return e.clear }, onChange: ot }) }, e.startEngine = at, e.stopEngine = ut, e.stopAllActionGroups = ht, e.stopActionGroup = Et, e.startActionGroup = gt;
    var a = o(n(27)),
        u = o(n(263)),
        c = o(n(85)),
        s = o(n(56)),
        f = o(n(264)),
        l = o(n(270)),
        d = o(n(282)),
        p = o(n(283)),
        v = o(n(284)),
        h = o(n(287)),
        E = o(n(113)),
        g = n(2),
        _ = n(10),
        y = n(61),
        m = i(n(290)),
        I = o(n(291)),
        T = Object.keys(g.QuickEffectIds),
        b = function(t) { return T.includes(t) },
        O = g.IX2EngineConstants,
        w = O.COLON_DELIMITER,
        A = O.BOUNDARY_SELECTOR,
        S = O.HTML_ELEMENT,
        x = O.RENDER_GENERAL,
        R = O.W_MOD_IX,
        N = _.IX2VanillaUtils,
        C = N.getAffectedElements,
        L = N.getElementId,
        D = N.getDestinationValues,
        P = N.observeStore,
        M = N.getInstanceId,
        j = N.renderHTMLElement,
        F = N.clearAllStyles,
        k = N.getMaxDurationItemIndex,
        X = N.getComputedStyle,
        G = N.getInstanceOrigin,
        V = N.reduceListToGroup,
        U = N.shouldNamespaceEventParameter,
        W = N.getNamespacedParameterId,
        B = N.shouldAllowMediaQuery,
        H = N.cleanupHTMLElement,
        z = N.stringifyTarget,
        Y = N.mediaQueriesEqual,
        K = _.IX2VanillaPlugins,
        Q = K.isPluginType,
        q = K.createPluginInstance,
        $ = K.getPluginDuration,
        Z = navigator.userAgent,
        J = Z.match(/iPad/i) || Z.match(/iPhone/),
        tt = 12;

    function et(t, e) {
        var n = t.rawData,
            r = function() { at({ store: e, rawData: n, allowEvents: !0 }), nt() };
        t.defer ? setTimeout(r, 0) : r()
    }

    function nt() { document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE")) }

    function rt(t, e) {
        var n = t.actionTypeId,
            r = t.actionListId,
            i = t.actionItemId,
            o = t.eventId,
            a = t.allowEvents,
            u = t.immediate,
            c = t.testManual,
            s = t.verbose,
            f = void 0 === s || s,
            l = t.rawData;
        if (r && i && l && u) {
            var d = l.actionLists[r];
            d && (l = V({ actionList: d, actionItemId: i, rawData: l }))
        }
        if (at({ store: e, rawData: l, allowEvents: a, testManual: c }), r && n === g.ActionTypeConsts.GENERAL_START_ACTION || b(n)) {
            Et({ store: e, actionListId: r }), vt({ store: e, actionListId: r, eventId: o });
            var p = gt({ store: e, eventId: o, actionListId: r, immediate: u, verbose: f });
            f && p && e.dispatch((0, y.actionListPlaybackChanged)({ actionListId: r, isPlaying: !u }))
        }
    }

    function it(t, e) {
        var n = t.actionListId;
        n ? Et({ store: e, actionListId: n }) : ht({ store: e }), ut(e)
    }

    function ot(t, e) { ut(e), F({ store: e, elementApi: m }) }

    function at(t) {
        var e, n = t.store,
            i = t.rawData,
            o = t.allowEvents,
            a = t.testManual,
            u = n.getState().ixSession;
        i && n.dispatch((0, y.rawDataImported)(i)), u.active || (n.dispatch((0, y.sessionInitialized)({ hasBoundaryNodes: Boolean(document.querySelector(A)) })), o && (function(t) {
            var e = t.getState().ixData.eventTypeMap;
            ft(t), (0, v.default)(e, function(e, n) {
                var i = I.default[n];
                i ? function(t) {
                    var e = t.logic,
                        n = t.store,
                        i = t.events;
                    ! function(t) {
                        if (J) {
                            var e = {},
                                n = "";
                            for (var r in t) {
                                var i = t[r],
                                    o = i.eventTypeId,
                                    a = i.target,
                                    u = m.getQuerySelector(a);
                                e[u] || o !== g.EventTypeConsts.MOUSE_CLICK && o !== g.EventTypeConsts.MOUSE_SECOND_CLICK || (e[u] = !0, n += u + "{cursor: pointer;touch-action: manipulation;}")
                            }
                            if (n) {
                                var c = document.createElement("style");
                                c.textContent = n, document.body.appendChild(c)
                            }
                        }
                    }(i);
                    var o = e.types,
                        a = e.handler,
                        u = n.getState().ixData,
                        l = u.actionLists,
                        d = lt(i, pt);
                    if ((0, f.default)(d)) {
                        (0, v.default)(d, function(t, e) {
                            var o = i[e],
                                a = o.action,
                                f = o.id,
                                d = o.mediaQueries,
                                p = void 0 === d ? u.mediaQueryKeys : d,
                                v = a.config.actionListId;
                            if (Y(p, u.mediaQueryKeys) || n.dispatch((0, y.mediaQueriesDefined)()), a.actionTypeId === g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                                var h = Array.isArray(o.config) ? o.config : [o.config];
                                h.forEach(function(e) {
                                    var i = e.continuousParameterGroupId,
                                        o = (0, s.default)(l, "".concat(v, ".continuousParameterGroups"), []),
                                        a = (0, c.default)(o, function(t) { var e = t.id; return e === i }),
                                        u = (e.smoothing || 0) / 100,
                                        d = (e.restingState || 0) / 100;
                                    a && t.forEach(function(t, i) {
                                        var o = f + w + i;
                                        ! function(t) {
                                            var e = t.store,
                                                n = t.eventStateKey,
                                                i = t.eventTarget,
                                                o = t.eventId,
                                                a = t.eventConfig,
                                                u = t.actionListId,
                                                c = t.parameterGroup,
                                                f = t.smoothing,
                                                l = t.restingValue,
                                                d = e.getState(),
                                                p = d.ixData,
                                                v = d.ixSession,
                                                h = p.events[o],
                                                E = h.eventTypeId,
                                                g = {},
                                                _ = {},
                                                y = [],
                                                I = c.continuousActionGroups,
                                                T = c.id;
                                            U(E, a) && (T = W(n, T));
                                            var b = v.hasBoundaryNodes && i ? m.getClosestElement(i, A) : null;
                                            I.forEach(function(t) {
                                                var e = t.keyframe,
                                                    n = t.actionItems;
                                                n.forEach(function(t) {
                                                    var n = t.actionTypeId,
                                                        o = t.config.target;
                                                    if (o) {
                                                        var a = o.boundaryMode ? b : null,
                                                            u = z(o) + w + n;
                                                        if (_[u] = function() {
                                                                var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                                                    n = arguments.length > 1 ? arguments[1] : void 0,
                                                                    i = arguments.length > 2 ? arguments[2] : void 0,
                                                                    o = (0, r.default)(e);
                                                                return o.some(function(e, r) { return e.keyframe === n && (t = r, !0) }), null == t && (t = o.length, o.push({ keyframe: n, actionItems: [] })), o[t].actionItems.push(i), o
                                                            }(_[u], e, t), !g[u]) {
                                                            g[u] = !0;
                                                            var c = t.config;
                                                            C({ config: c, event: h, eventTarget: i, elementRoot: a, elementApi: m }).forEach(function(t) { y.push({ element: t, key: u }) })
                                                        }
                                                    }
                                                })
                                            }), y.forEach(function(t) {
                                                var n = t.element,
                                                    r = t.key,
                                                    i = _[r],
                                                    a = (0, s.default)(i, "[0].actionItems[0]", {}),
                                                    c = a.actionTypeId,
                                                    d = Q(c) ? q(c)(n, a) : null,
                                                    p = D({ element: n, actionItem: a, elementApi: m }, d);
                                                _t({ store: e, element: n, eventId: o, actionListId: u, actionItem: a, destination: p, continuous: !0, parameterId: T, actionGroups: i, smoothing: f, restingValue: l, pluginInstance: d })
                                            })
                                        }({ store: n, eventStateKey: o, eventTarget: t, eventId: f, eventConfig: e, actionListId: v, parameterGroup: a, smoothing: u, restingValue: d })
                                    })
                                })
                            }(a.actionTypeId === g.ActionTypeConsts.GENERAL_START_ACTION || b(a.actionTypeId)) && vt({ store: n, actionListId: v, eventId: f })
                        });
                        var p = function(t) {
                                var e = n.getState(),
                                    r = e.ixSession;
                                dt(d, function(e, o, c) {
                                    var s = i[o],
                                        f = r.eventState[c],
                                        l = s.action,
                                        d = s.mediaQueries,
                                        p = void 0 === d ? u.mediaQueryKeys : d;
                                    if (B(p, r.mediaQueryKey)) {
                                        var v = function() {
                                            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                i = a({ store: n, element: e, event: s, eventConfig: r, nativeEvent: t, eventStateKey: c }, f);
                                            (0, E.default)(i, f) || n.dispatch((0, y.eventStateChanged)(c, i))
                                        };
                                        if (l.actionTypeId === g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                                            var h = Array.isArray(s.config) ? s.config : [s.config];
                                            h.forEach(v)
                                        } else v()
                                    }
                                })
                            },
                            _ = (0, h.default)(p, tt),
                            I = function(t) {
                                var e = t.target,
                                    r = void 0 === e ? document : e,
                                    i = t.types,
                                    o = t.throttle;
                                i.split(" ").filter(Boolean).forEach(function(t) {
                                    var e = o ? _ : p;
                                    r.addEventListener(t, e), n.dispatch((0, y.eventListenerAdded)(r, [t, e]))
                                })
                            };
                        Array.isArray(o) ? o.forEach(I) : "string" == typeof o && I(e)
                    }
                }({ logic: i, store: t, events: e }) : console.warn("IX2 event type not configured: ".concat(n))
            }), t.getState().ixSession.eventListeners.length && function(t) {
                var e = function() { ft(t) };
                st.forEach(function(n) { window.addEventListener(n, e), t.dispatch((0, y.eventListenerAdded)(window, [n, e])) }), e()
            }(t)
        }(n), -1 === (e = document.documentElement).className.indexOf(R) && (e.className += " ".concat(R)), n.getState().ixSession.hasDefinedMediaQueries && function(t) { P({ store: t, select: function(t) { return t.ixSession.mediaQueryKey }, onChange: function() { ut(t), F({ store: t, elementApi: m }), at({ store: t, allowEvents: !0 }), nt() } }) }(n)), n.dispatch((0, y.sessionStarted)()), function(t, e) {
            ! function n(r) {
                var i = t.getState(),
                    o = i.ixSession,
                    a = i.ixParameters;
                o.active && (t.dispatch((0, y.animationFrameChanged)(r, a)), e ? function(t, e) { var n = P({ store: t, select: function(t) { return t.ixSession.tick }, onChange: function(t) { e(t), n() } }) }(t, n) : requestAnimationFrame(n))
            }(window.performance.now())
        }(n, a))
    }

    function ut(t) {
        var e = t.getState().ixSession;
        e.active && (e.eventListeners.forEach(ct), t.dispatch((0, y.sessionStopped)()))
    }

    function ct(t) {
        var e = t.target,
            n = t.listenerParams;
        e.removeEventListener.apply(e, n)
    }
    var st = ["resize", "orientationchange"];

    function ft(t) {
        var e = t.getState(),
            n = e.ixSession,
            r = e.ixData,
            i = window.innerWidth;
        if (i !== n.viewportWidth) {
            var o = r.mediaQueries;
            t.dispatch((0, y.viewportWidthChanged)({ width: i, mediaQueries: o }))
        }
    }
    var lt = function(t, e) { return (0, l.default)((0, p.default)(t, e), d.default) },
        dt = function(t, e) {
            (0, v.default)(t, function(t, n) { t.forEach(function(t, r) { e(t, n, n + w + r) }) })
        },
        pt = function(t) { var e = { target: t.target, targets: t.targets }; return C({ config: e, elementApi: m }) };

    function vt(t) {
        var e = t.store,
            n = t.actionListId,
            r = t.eventId,
            i = e.getState(),
            o = i.ixData,
            a = i.ixSession,
            u = o.actionLists,
            c = o.events[r],
            f = u[n];
        if (f && f.useFirstGroupAsInitialState) {
            var l = (0, s.default)(f, "actionItemGroups[0].actionItems", []),
                d = (0, s.default)(c, "mediaQueries", o.mediaQueryKeys);
            if (!B(d, a.mediaQueryKey)) return;
            l.forEach(function(t) {
                var i, o = t.config,
                    a = t.actionTypeId,
                    u = !0 === (null == o ? void 0 : null === (i = o.target) || void 0 === i ? void 0 : i.useEventTarget) ? { target: c.target, targets: c.targets } : o,
                    s = C({ config: u, event: c, elementApi: m }),
                    f = Q(a);
                s.forEach(function(i) {
                    var o = f ? q(a)(i, t) : null;
                    _t({ destination: D({ element: i, actionItem: t, elementApi: m }, o), immediate: !0, store: e, element: i, eventId: r, actionItem: t, actionListId: n, pluginInstance: o })
                })
            })
        }
    }

    function ht(t) {
        var e = t.store,
            n = e.getState().ixInstances;
        (0, v.default)(n, function(t) {
            if (!t.continuous) {
                var n = t.actionListId,
                    r = t.verbose;
                yt(t, e), r && e.dispatch((0, y.actionListPlaybackChanged)({ actionListId: n, isPlaying: !1 }))
            }
        })
    }

    function Et(t) {
        var e = t.store,
            n = t.eventId,
            r = t.eventTarget,
            i = t.eventStateKey,
            o = t.actionListId,
            a = e.getState(),
            u = a.ixInstances,
            c = a.ixSession.hasBoundaryNodes && r ? m.getClosestElement(r, A) : null;
        (0, v.default)(u, function(t) {
            var r = (0, s.default)(t, "actionItem.config.target.boundaryMode"),
                a = !i || t.eventStateKey === i;
            if (t.actionListId === o && t.eventId === n && a) {
                if (c && r && !m.elementContains(c, t.element)) return;
                yt(t, e), t.verbose && e.dispatch((0, y.actionListPlaybackChanged)({ actionListId: o, isPlaying: !1 }))
            }
        })
    }

    function gt(t) {
        var e, n = t.store,
            r = t.eventId,
            i = t.eventTarget,
            o = t.eventStateKey,
            a = t.actionListId,
            u = t.groupIndex,
            c = void 0 === u ? 0 : u,
            f = t.immediate,
            l = t.verbose,
            d = n.getState(),
            p = d.ixData,
            v = d.ixSession,
            h = p.events[r] || {},
            E = h.mediaQueries,
            g = void 0 === E ? p.mediaQueryKeys : E,
            _ = (0, s.default)(p, "actionLists.".concat(a), {}),
            y = _.actionItemGroups,
            I = _.useFirstGroupAsInitialState;
        if (!y || !y.length) return !1;
        c >= y.length && (0, s.default)(h, "config.loop") && (c = 0), 0 === c && I && c++;
        var T = (0 === c || 1 === c && I) && b(null === (e = h.action) || void 0 === e ? void 0 : e.actionTypeId) ? h.config.delay : void 0,
            O = (0, s.default)(y, [c, "actionItems"], []);
        if (!O.length) return !1;
        if (!B(g, v.mediaQueryKey)) return !1;
        var w = v.hasBoundaryNodes && i ? m.getClosestElement(i, A) : null,
            S = k(O),
            x = !1;
        return O.forEach(function(t, e) {
            var u = t.config,
                s = t.actionTypeId,
                d = Q(s),
                p = u.target;
            if (p) {
                var v = p.boundaryMode ? w : null;
                C({ config: u, event: h, eventTarget: i, elementRoot: v, elementApi: m }).forEach(function(u, p) {
                    var v = d ? q(s)(u, t) : null,
                        h = d ? $(s)(u, t) : null;
                    x = !0;
                    var E = S === e && 0 === p,
                        g = X({ element: u, actionItem: t }),
                        _ = D({ element: u, actionItem: t, elementApi: m }, v);
                    _t({ store: n, element: u, actionItem: t, eventId: r, eventTarget: i, eventStateKey: o, actionListId: a, groupIndex: c, isCarrier: E, computedStyle: g, destination: _, immediate: f, verbose: l, pluginInstance: v, pluginDuration: h, instanceDelay: T })
                })
            }
        }), x
    }

    function _t(t) {
        var e = t.store,
            n = t.computedStyle,
            r = (0, u.default)(t, ["store", "computedStyle"]),
            i = !r.continuous,
            o = r.element,
            c = r.actionItem,
            s = r.immediate,
            f = r.pluginInstance,
            l = M(),
            d = e.getState(),
            p = d.ixElements,
            v = d.ixSession,
            h = L(p, o),
            E = (p[h] || {}).refState,
            g = m.getRefType(o),
            _ = G(o, E, n, c, m, f);
        e.dispatch((0, y.instanceAdded)((0, a.default)({ instanceId: l, elementId: h, origin: _, refType: g }, r))), mt(document.body, "ix2-animation-started", l), s ? function(t, e) {
            var n = t.getState().ixParameters;
            t.dispatch((0, y.instanceStarted)(e, 0)), t.dispatch((0, y.animationFrameChanged)(performance.now(), n)), It(t.getState().ixInstances[e], t)
        }(e, l) : (P({ store: e, select: function(t) { return t.ixInstances[l] }, onChange: It }), i && e.dispatch((0, y.instanceStarted)(l, v.tick)))
    }

    function yt(t, e) {
        mt(document.body, "ix2-animation-stopping", { instanceId: t.id, state: e.getState() });
        var n = t.elementId,
            r = t.actionItem,
            i = e.getState().ixElements[n] || {},
            o = i.ref;
        i.refType === S && H(o, r, m), e.dispatch((0, y.instanceRemoved)(t.id))
    }

    function mt(t, e, n) {
        var r = document.createEvent("CustomEvent");
        r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r)
    }

    function It(t, e) {
        var n = t.active,
            r = t.continuous,
            i = t.complete,
            o = t.elementId,
            a = t.actionItem,
            u = t.actionTypeId,
            c = t.renderType,
            s = t.current,
            f = t.groupIndex,
            l = t.eventId,
            d = t.eventTarget,
            p = t.eventStateKey,
            v = t.actionListId,
            h = t.isCarrier,
            E = t.styleProp,
            g = t.verbose,
            _ = t.pluginInstance,
            I = e.getState(),
            T = I.ixData,
            b = I.ixSession,
            O = (T.events[l] || {}).mediaQueries,
            w = void 0 === O ? T.mediaQueryKeys : O;
        if (B(w, b.mediaQueryKey) && (r || n || i)) {
            if (s || c === x && i) {
                e.dispatch((0, y.elementStateChanged)(o, u, s, a));
                var A = e.getState().ixElements[o] || {},
                    R = A.ref,
                    N = A.refType,
                    C = A.refState,
                    L = C && C[u];
                switch (N) {
                    case S:
                        j(R, C, L, l, a, E, m, c, _)
                }
            }
            if (i) {
                if (h) {
                    var D = gt({ store: e, eventId: l, eventTarget: d, eventStateKey: p, actionListId: v, groupIndex: f + 1, verbose: g });
                    g && !D && e.dispatch((0, y.actionListPlaybackChanged)({ actionListId: v, isPlaying: !1 }))
                }
                yt(t, e)
            }
        }
    }
}, function(t, e, n) {
    var r = n(116);
    t.exports = function(t, e, n) { "__proto__" == e && r ? r(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : t[e] = n }
}, function(t, e, n) {
    var r = n(8),
        i = function() { try { var t = r(Object, "defineProperty"); return t({}, "", {}), t } catch (t) {} }();
    t.exports = i
}, function(t, e, n) {
    var r = n(6),
        i = Object.create,
        o = function() {
            function t() {}
            return function(e) {
                if (!r(e)) return {};
                if (i) return i(e);
                t.prototype = e;
                var n = new t;
                return t.prototype = void 0, n
            }
        }();
    t.exports = o
}, function(t, e, n) {
    var r = n(304),
        i = n(305),
        o = r ? function(t) { return r.get(t) } : i;
    t.exports = o
}, function(t, e, n) {
    var r = n(306),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        for (var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0; o--;) {
            var a = n[o],
                u = a.func;
            if (null == u || u == t) return a.name
        }
        return e
    }
}, function(t, e, n) { n(121), n(123), n(36), n(125), n(313), n(314), n(315), n(316), n(321), t.exports = n(322) }, function(t, e, n) {
    "use strict";
    var r = n(5);
    r.define("brand", t.exports = function(t) {
        var e, n = {},
            i = document,
            o = t("html"),
            a = t("body"),
            u = ".w-webflow-badge",
            c = window.location,
            s = /PhantomJS/i.test(navigator.userAgent),
            f = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

        function l() {
            var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || Boolean(i.webkitFullscreenElement);
            t(e).attr("style", n ? "display: none !important;" : "")
        }

        function d() {
            var t = a.children(u),
                n = t.length && t.get(0) === e,
                i = r.env("editor");
            n ? i && t.remove() : (t.length && t.remove(), i || a.append(e))
        }
        return n.ready = function() {
            var n, r, a, u = o.attr("data-wf-status"),
                p = o.attr("data-wf-domain") || "";
            /\.webflow\.io$/i.test(p) && c.hostname !== p && (u = !0), u && !s && (e = e || (n = t('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), r = t("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({ marginRight: "8px", width: "16px" }), a = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow"), n.append(r, a), n[0]), d(), setTimeout(d, 500), t(i).off(f, l).on(f, l))
        }, n
    })
}, function(t, e, n) {
    "use strict";
    var r = window.$,
        i = n(65) && r.tram;
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle (webflow)
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    t.exports = function() {
        var t = { VERSION: "1.6.0-Webflow" },
            e = {},
            n = Array.prototype,
            r = Object.prototype,
            o = Function.prototype,
            a = (n.push, n.slice),
            u = (n.concat, r.toString, r.hasOwnProperty),
            c = n.forEach,
            s = n.map,
            f = (n.reduce, n.reduceRight, n.filter),
            l = (n.every, n.some),
            d = n.indexOf,
            p = (n.lastIndexOf, Array.isArray, Object.keys),
            v = (o.bind, t.each = t.forEach = function(n, r, i) {
                if (null == n) return n;
                if (c && n.forEach === c) n.forEach(r, i);
                else if (n.length === +n.length) {
                    for (var o = 0, a = n.length; o < a; o++)
                        if (r.call(i, n[o], o, n) === e) return
                } else {
                    var u = t.keys(n);
                    for (o = 0, a = u.length; o < a; o++)
                        if (r.call(i, n[u[o]], u[o], n) === e) return
                }
                return n
            });
        t.map = t.collect = function(t, e, n) { var r = []; return null == t ? r : s && t.map === s ? t.map(e, n) : (v(t, function(t, i, o) { r.push(e.call(n, t, i, o)) }), r) }, t.find = t.detect = function(t, e, n) { var r; return h(t, function(t, i, o) { if (e.call(n, t, i, o)) return r = t, !0 }), r }, t.filter = t.select = function(t, e, n) { var r = []; return null == t ? r : f && t.filter === f ? t.filter(e, n) : (v(t, function(t, i, o) { e.call(n, t, i, o) && r.push(t) }), r) };
        var h = t.some = t.any = function(n, r, i) { r || (r = t.identity); var o = !1; return null == n ? o : l && n.some === l ? n.some(r, i) : (v(n, function(t, n, a) { if (o || (o = r.call(i, t, n, a))) return e }), !!o) };
        t.contains = t.include = function(t, e) { return null != t && (d && t.indexOf === d ? -1 != t.indexOf(e) : h(t, function(t) { return t === e })) }, t.delay = function(t, e) { var n = a.call(arguments, 2); return setTimeout(function() { return t.apply(null, n) }, e) }, t.defer = function(e) { return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1))) }, t.throttle = function(t) { var e, n, r; return function() { e || (e = !0, n = arguments, r = this, i.frame(function() { e = !1, t.apply(r, n) })) } }, t.debounce = function(e, n, r) {
            var i, o, a, u, c, s = function s() {
                var f = t.now() - u;
                f < n ? i = setTimeout(s, n - f) : (i = null, r || (c = e.apply(a, o), a = o = null))
            };
            return function() { a = this, o = arguments, u = t.now(); var f = r && !i; return i || (i = setTimeout(s, n)), f && (c = e.apply(a, o), a = o = null), c }
        }, t.defaults = function(e) { if (!t.isObject(e)) return e; for (var n = 1, r = arguments.length; n < r; n++) { var i = arguments[n]; for (var o in i) void 0 === e[o] && (e[o] = i[o]) } return e }, t.keys = function(e) { if (!t.isObject(e)) return []; if (p) return p(e); var n = []; for (var r in e) t.has(e, r) && n.push(r); return n }, t.has = function(t, e) { return u.call(t, e) }, t.isObject = function(t) { return t === Object(t) }, t.now = Date.now || function() { return (new Date).getTime() }, t.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };
        var E = /(.)^/,
            g = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
            _ = /\\|'|\r|\n|\u2028|\u2029/g,
            y = function(t) { return "\\" + g[t] };
        return t.template = function(e, n, r) {
            !n && r && (n = r), n = t.defaults({}, n, t.templateSettings);
            var i = RegExp([(n.escape || E).source, (n.interpolate || E).source, (n.evaluate || E).source].join("|") + "|$", "g"),
                o = 0,
                a = "__p+='";
            e.replace(i, function(t, n, r, i, u) { return a += e.slice(o, u).replace(_, y), o = u + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), t }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try { var u = new Function(n.variable || "obj", "_", a) } catch (t) { throw t.source = a, t }
            var c = function(e) { return u.call(this, e, t) },
                s = n.variable || "obj";
            return c.source = "function(" + s + "){\n" + a + "}", c
        }, t
    }()
}, function(t, e, n) {
    "use strict";
    var r = n(5);
    r.define("edit", t.exports = function(t, e, n) {
        if (n = n || {}, (r.env("test") || r.env("frame")) && !n.fixture && ! function() { try { return window.top.__Cypress__ } catch (t) { return !1 } }()) return { exit: 1 };
        var i, o = t(window),
            a = t(document.documentElement),
            u = document.location,
            c = "hashchange",
            s = n.load || function() {
                i = !0, window.WebflowEditor = !0, o.off(c, l),
                    function(t) {
                        var e = window.document.createElement("iframe");
                        e.src = "https://webflow.com/site/third-party-cookie-check.html", e.style.display = "none", e.sandbox = "allow-scripts allow-same-origin";
                        var n = function n(r) { "WF_third_party_cookies_unsupported" === r.data ? (g(e, n), t(!1)) : "WF_third_party_cookies_supported" === r.data && (g(e, n), t(!0)) };
                        e.onerror = function() { g(e, n), t(!1) }, window.addEventListener("message", n, !1), window.document.body.appendChild(e)
                    }(function(e) { t.ajax({ url: E("https://editor-api.webflow.com/api/editor/view"), data: { siteId: a.attr("data-wf-site") }, xhrFields: { withCredentials: !0 }, dataType: "json", crossDomain: !0, success: d(e) }) })
            },
            f = !1;
        try { f = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor") } catch (t) {}

        function l() { i || /\?edit/.test(u.hash) && s() }

        function d(t) { return function(e) { e ? (e.thirdPartyCookiesSupported = t, p(h(e.bugReporterScriptPath), function() { p(h(e.scriptPath), function() { window.WebflowEditor(e) }) })) : console.error("Could not load editor data") } }

        function p(e, n) { t.ajax({ type: "GET", url: e, dataType: "script", cache: !0 }).then(n, v) }

        function v(t, e, n) { throw console.error("Could not load editor script: " + e), n }

        function h(t) { return t.indexOf("//") >= 0 ? t : E("https://editor-api.webflow.com" + t) }

        function E(t) { return t.replace(/([^:])\/\//g, "$1/") }

        function g(t, e) { window.removeEventListener("message", e, !1), t.remove() }
        return f ? s() : u.search ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) || /\?edit$/.test(u.href)) && s() : o.on(c, l).triggerHandler(c), {}
    })
}, function(t, e, n) {
    "use strict";
    var r = window.jQuery,
        i = {},
        o = [],
        a = { reset: function(t, e) { e.__wf_intro = null }, intro: function(t, e) { e.__wf_intro || (e.__wf_intro = !0, r(e).triggerHandler(i.types.INTRO)) }, outro: function(t, e) { e.__wf_intro && (e.__wf_intro = null, r(e).triggerHandler(i.types.OUTRO)) } };
    i.triggers = {}, i.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }, i.init = function() {
        for (var t = o.length, e = 0; e < t; e++) {
            var n = o[e];
            n[0](0, n[1])
        }
        o = [], r.extend(i.triggers, a)
    }, i.async = function() {
        for (var t in a) {
            var e = a[t];
            a.hasOwnProperty(t) && (i.triggers[t] = function(t, n) { o.push([e, n]) })
        }
    }, i.async(), t.exports = i
}, function(t, e, n) {
    "use strict";
    var r = n(5),
        i = n(126);
    i.setEnv(r.env), r.define("ix2", t.exports = function() { return i })
}, function(t, e, n) {
    "use strict";
    var r = n(13),
        i = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.setEnv = function(t) { t() && (0, u.observeRequests)(s) }, e.init = function(t) { f(), (0, u.startEngine)({ store: s, rawData: t, allowEvents: !0 }) }, e.destroy = f, e.actions = e.store = void 0, n(127);
    var o = n(78),
        a = i(n(168)),
        u = n(114),
        c = r(n(61));
    e.actions = c;
    var s = (0, o.createStore)(a.default);

    function f() {
        (0, u.stopEngine)(s)
    }
    e.store = s
}, function(t, e, n) { t.exports = n(128) }, function(t, e, n) {
    n(129);
    var r = n(154);
    t.exports = r("Array", "includes")
}, function(t, e, n) {
    "use strict";
    var r = n(130),
        i = n(76).includes,
        o = n(147);
    r({ target: "Array", proto: !0 }, { includes: function(t) { return i(this, t, arguments.length > 1 ? arguments[1] : void 0) } }), o("includes")
}, function(t, e, n) {
    var r = n(3),
        i = n(66).f,
        o = n(17),
        a = n(135),
        u = n(39),
        c = n(139),
        s = n(146);
    t.exports = function(t, e) {
        var n, f, l, d, p, v = t.target,
            h = t.global,
            E = t.stat;
        if (n = h ? r : E ? r[v] || u(v, {}) : (r[v] || {}).prototype)
            for (f in e) {
                if (d = e[f], l = t.noTargetGet ? (p = i(n, f)) && p.value : n[f], !s(h ? f : v + (E ? "." : "#") + f, t.forced) && void 0 !== l) {
                    if (typeof d == typeof l) continue;
                    c(d, l)
                }(t.sham || l && l.sham) && o(d, "sham", !0), a(n, f, d, t)
            }
    }
}, function(t, e, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
        i = Object.getOwnPropertyDescriptor,
        o = i && !r.call({ 1: 2 }, 1);
    e.f = o ? function(t) { var e = i(this, t); return !!e && e.enumerable } : r
}, function(t, e, n) {
    var r = n(15),
        i = n(133),
        o = "".split;
    t.exports = r(function() { return !Object("z").propertyIsEnumerable(0) }) ? function(t) { return "String" == i(t) ? o.call(t, "") : Object(t) } : Object
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) { return n.call(t).slice(8, -1) }
}, function(t, e) { t.exports = function(t) { if (null == t) throw TypeError("Can't call method on " + t); return t } }, function(t, e, n) {
    var r = n(3),
        i = n(25),
        o = n(17),
        a = n(16),
        u = n(39),
        c = n(71),
        s = n(137),
        f = s.get,
        l = s.enforce,
        d = String(c).split("toString");
    i("inspectSource", function(t) { return c.call(t) }), (t.exports = function(t, e, n, i) {
        var c = !!i && !!i.unsafe,
            s = !!i && !!i.enumerable,
            f = !!i && !!i.noTargetGet;
        "function" == typeof n && ("string" != typeof e || a(n, "name") || o(n, "name", e), l(n).source = d.join("string" == typeof e ? e : "")), t !== r ? (c ? !f && t[e] && (s = !0) : delete t[e], s ? t[e] = n : o(t, e, n)) : s ? t[e] = n : u(e, n)
    })(Function.prototype, "toString", function() { return "function" == typeof this && f(this).source || c.call(this) })
}, function(t, e) { t.exports = !1 }, function(t, e, n) {
    var r, i, o, a = n(138),
        u = n(3),
        c = n(23),
        s = n(17),
        f = n(16),
        l = n(72),
        d = n(40),
        p = u.WeakMap;
    if (a) {
        var v = new p,
            h = v.get,
            E = v.has,
            g = v.set;
        r = function(t, e) { return g.call(v, t, e), e }, i = function(t) { return h.call(v, t) || {} }, o = function(t) { return E.call(v, t) }
    } else {
        var _ = l("state");
        d[_] = !0, r = function(t, e) { return s(t, _, e), e }, i = function(t) { return f(t, _) ? t[_] : {} }, o = function(t) { return f(t, _) }
    }
    t.exports = { set: r, get: i, has: o, enforce: function(t) { return o(t) ? i(t) : r(t, {}) }, getterFor: function(t) { return function(e) { var n; if (!c(e) || (n = i(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required"); return n } } }
}, function(t, e, n) {
    var r = n(3),
        i = n(71),
        o = r.WeakMap;
    t.exports = "function" == typeof o && /native code/.test(i.call(o))
}, function(t, e, n) {
    var r = n(16),
        i = n(140),
        o = n(66),
        a = n(38);
    t.exports = function(t, e) {
        for (var n = i(e), u = a.f, c = o.f, s = 0; s < n.length; s++) {
            var f = n[s];
            r(t, f) || u(t, f, c(e, f))
        }
    }
}, function(t, e, n) {
    var r = n(74),
        i = n(142),
        o = n(145),
        a = n(24);
    t.exports = r("Reflect", "ownKeys") || function(t) {
        var e = i.f(a(t)),
            n = o.f;
        return n ? e.concat(n(t)) : e
    }
}, function(t, e, n) { t.exports = n(3) }, function(t, e, n) {
    var r = n(75),
        i = n(41).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) { return r(t, i) }
}, function(t, e, n) {
    var r = n(77),
        i = Math.min;
    t.exports = function(t) { return t > 0 ? i(r(t), 9007199254740991) : 0 }
}, function(t, e, n) {
    var r = n(77),
        i = Math.max,
        o = Math.min;
    t.exports = function(t, e) { var n = r(t); return n < 0 ? i(n + e, 0) : o(n, e) }
}, function(t, e) { e.f = Object.getOwnPropertySymbols }, function(t, e, n) {
    var r = n(15),
        i = /#|\.prototype\./,
        o = function(t, e) { var n = u[a(t)]; return n == s || n != c && ("function" == typeof e ? r(e) : !!e) },
        a = o.normalize = function(t) { return String(t).replace(i, ".").toLowerCase() },
        u = o.data = {},
        c = o.NATIVE = "N",
        s = o.POLYFILL = "P";
    t.exports = o
}, function(t, e, n) {
    var r = n(148),
        i = n(150),
        o = n(17),
        a = r("unscopables"),
        u = Array.prototype;
    null == u[a] && o(u, a, i(null)), t.exports = function(t) { u[a][t] = !0 }
}, function(t, e, n) {
    var r = n(3),
        i = n(25),
        o = n(73),
        a = n(149),
        u = r.Symbol,
        c = i("wks");
    t.exports = function(t) { return c[t] || (c[t] = a && u[t] || (a ? u : o)("Symbol." + t)) }
}, function(t, e, n) {
    var r = n(15);
    t.exports = !!Object.getOwnPropertySymbols && !r(function() { return !String(Symbol()) })
}, function(t, e, n) {
    var r = n(24),
        i = n(151),
        o = n(41),
        a = n(40),
        u = n(153),
        c = n(70),
        s = n(72)("IE_PROTO"),
        f = function() {},
        l = function() {
            var t, e = c("iframe"),
                n = o.length;
            for (e.style.display = "none", u.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; n--;) delete l.prototype[o[n]];
            return l()
        };
    t.exports = Object.create || function(t, e) { var n; return null !== t ? (f.prototype = r(t), n = new f, f.prototype = null, n[s] = t) : n = l(), void 0 === e ? n : i(n, e) }, a[s] = !0
}, function(t, e, n) {
    var r = n(14),
        i = n(38),
        o = n(24),
        a = n(152);
    t.exports = r ? Object.defineProperties : function(t, e) { o(t); for (var n, r = a(e), u = r.length, c = 0; u > c;) i.f(t, n = r[c++], e[n]); return t }
}, function(t, e, n) {
    var r = n(75),
        i = n(41);
    t.exports = Object.keys || function(t) { return r(t, i) }
}, function(t, e, n) {
    var r = n(74);
    t.exports = r("document", "documentElement")
}, function(t, e, n) {
    var r = n(3),
        i = n(155),
        o = Function.call;
    t.exports = function(t, e, n) { return i(o, r[t].prototype[e], n) }
}, function(t, e, n) {
    var r = n(156);
    t.exports = function(t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
            case 0:
                return function() { return t.call(e) };
            case 1:
                return function(n) { return t.call(e, n) };
            case 2:
                return function(n, r) { return t.call(e, n, r) };
            case 3:
                return function(n, r, i) { return t.call(e, n, r, i) }
        }
        return function() { return t.apply(e, arguments) }
    }
}, function(t, e) { t.exports = function(t) { if ("function" != typeof t) throw TypeError(String(t) + " is not a function"); return t } }, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(80),
        i = n(160),
        o = n(161),
        a = "[object Null]",
        u = "[object Undefined]",
        c = r.default ? r.default.toStringTag : void 0;
    e.default = function(t) { return null == t ? void 0 === t ? u : a : c && c in Object(t) ? Object(i.default)(t) : Object(o.default)(t) }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(159),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r.default || i || Function("return this")();
    e.default = o
}, function(t, e, n) {
    "use strict";
    n.r(e),
        function(t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.default = n
        }.call(this, n(22))
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(80),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        u = r.default ? r.default.toStringTag : void 0;
    e.default = function(t) {
        var e = o.call(t, u),
            n = t[u];
        try { t[u] = void 0; var r = !0 } catch (t) {}
        var i = a.call(t);
        return r && (e ? t[u] = n : delete t[u]), i
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = Object.prototype.toString;
    e.default = function(t) { return r.call(t) }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(163),
        i = Object(r.default)(Object.getPrototypeOf, Object);
    e.default = i
}, function(t, e, n) {
    "use strict";
    n.r(e), e.default = function(t, e) { return function(n) { return t(e(n)) } }
}, function(t, e, n) {
    "use strict";
    n.r(e), e.default = function(t) { return null != t && "object" == typeof t }
}, function(t, e, n) {
    "use strict";
    n.r(e),
        function(t, r) {
            var i, o = n(167);
            i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
            var a = Object(o.default)(i);
            e.default = a
        }.call(this, n(22), n(166)(t))
}, function(t, e) {
    t.exports = function(t) {
        if (!t.webpackPolyfill) {
            var e = Object.create(t);
            e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function() { return e.l } }), Object.defineProperty(e, "id", { enumerable: !0, get: function() { return e.i } }), Object.defineProperty(e, "exports", { enumerable: !0 }), e.webpackPolyfill = 1
        }
        return e
    }
}, function(t, e, n) {
    "use strict";

    function r(t) { var e, n = t.Symbol; return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e }
    n.r(e), n.d(e, "default", function() { return r })
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
    var r = n(78),
        i = n(169),
        o = n(175),
        a = n(176),
        u = n(10),
        c = n(261),
        s = n(262),
        f = u.IX2ElementsReducer.ixElements,
        l = (0, r.combineReducers)({ ixData: i.ixData, ixRequest: o.ixRequest, ixSession: a.ixSession, ixElements: f, ixInstances: c.ixInstances, ixParameters: s.ixParameters });
    e.default = l
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ixData = void 0;
    var r = n(2).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
    e.ixData = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case r:
                return e.payload.ixData || Object.freeze({});
            default:
                return t
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.QuickEffectDirectionConsts = e.QuickEffectIds = e.EventLimitAffectedElements = e.EventContinuousMouseAxes = e.EventBasedOn = e.EventAppliesTo = e.EventTypeConsts = void 0;
    e.EventTypeConsts = { NAVBAR_OPEN: "NAVBAR_OPEN", NAVBAR_CLOSE: "NAVBAR_CLOSE", TAB_ACTIVE: "TAB_ACTIVE", TAB_INACTIVE: "TAB_INACTIVE", SLIDER_ACTIVE: "SLIDER_ACTIVE", SLIDER_INACTIVE: "SLIDER_INACTIVE", DROPDOWN_OPEN: "DROPDOWN_OPEN", DROPDOWN_CLOSE: "DROPDOWN_CLOSE", MOUSE_CLICK: "MOUSE_CLICK", MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK", MOUSE_DOWN: "MOUSE_DOWN", MOUSE_UP: "MOUSE_UP", MOUSE_OVER: "MOUSE_OVER", MOUSE_OUT: "MOUSE_OUT", MOUSE_MOVE: "MOUSE_MOVE", MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT", SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW", SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW", SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW", ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN", ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE", PAGE_START: "PAGE_START", PAGE_FINISH: "PAGE_FINISH", PAGE_SCROLL_UP: "PAGE_SCROLL_UP", PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN", PAGE_SCROLL: "PAGE_SCROLL" };
    e.EventAppliesTo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
    e.EventBasedOn = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
    e.EventContinuousMouseAxes = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
    e.EventLimitAffectedElements = { CHILDREN: "CHILDREN", SIBLINGS: "SIBLINGS", IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN" };
    e.QuickEffectIds = { FADE_EFFECT: "FADE_EFFECT", SLIDE_EFFECT: "SLIDE_EFFECT", GROW_EFFECT: "GROW_EFFECT", SHRINK_EFFECT: "SHRINK_EFFECT", SPIN_EFFECT: "SPIN_EFFECT", FLY_EFFECT: "FLY_EFFECT", POP_EFFECT: "POP_EFFECT", FLIP_EFFECT: "FLIP_EFFECT", JIGGLE_EFFECT: "JIGGLE_EFFECT", PULSE_EFFECT: "PULSE_EFFECT", DROP_EFFECT: "DROP_EFFECT", BLINK_EFFECT: "BLINK_EFFECT", BOUNCE_EFFECT: "BOUNCE_EFFECT", FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT", FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT", RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT", JELLO_EFFECT: "JELLO_EFFECT", GROW_BIG_EFFECT: "GROW_BIG_EFFECT", SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT", PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT" };
    e.QuickEffectDirectionConsts = { LEFT: "LEFT", RIGHT: "RIGHT", BOTTOM: "BOTTOM", TOP: "TOP", BOTTOM_LEFT: "BOTTOM_LEFT", BOTTOM_RIGHT: "BOTTOM_RIGHT", TOP_RIGHT: "TOP_RIGHT", TOP_LEFT: "TOP_LEFT", CLOCKWISE: "CLOCKWISE", COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE" }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ActionAppliesTo = e.ActionTypeConsts = void 0;
    e.ActionTypeConsts = { TRANSFORM_MOVE: "TRANSFORM_MOVE", TRANSFORM_SCALE: "TRANSFORM_SCALE", TRANSFORM_ROTATE: "TRANSFORM_ROTATE", TRANSFORM_SKEW: "TRANSFORM_SKEW", STYLE_OPACITY: "STYLE_OPACITY", STYLE_SIZE: "STYLE_SIZE", STYLE_FILTER: "STYLE_FILTER", STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR", STYLE_BORDER: "STYLE_BORDER", STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR", PLUGIN_LOTTIE: "PLUGIN_LOTTIE", GENERAL_DISPLAY: "GENERAL_DISPLAY", GENERAL_START_ACTION: "GENERAL_START_ACTION", GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION", GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS", GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION", GENERAL_LOOP: "GENERAL_LOOP", STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW" };
    e.ActionAppliesTo = { ELEMENT: "ELEMENT", ELEMENT_CLASS: "ELEMENT_CLASS", TRIGGER_ELEMENT: "TRIGGER_ELEMENT" }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.InteractionTypeConsts = void 0;
    e.InteractionTypeConsts = { MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION", MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION", MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION", SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION", SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION", MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION", PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION", PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION", PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION", NAVBAR_INTERACTION: "NAVBAR_INTERACTION", DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION", ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION", TAB_INTERACTION: "TAB_INTERACTION", SLIDER_INTERACTION: "SLIDER_INTERACTION" }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.IX2_TEST_FRAME_RENDERED = e.IX2_MEDIA_QUERIES_DEFINED = e.IX2_VIEWPORT_WIDTH_CHANGED = e.IX2_ACTION_LIST_PLAYBACK_CHANGED = e.IX2_ELEMENT_STATE_CHANGED = e.IX2_INSTANCE_REMOVED = e.IX2_INSTANCE_STARTED = e.IX2_INSTANCE_ADDED = e.IX2_PARAMETER_CHANGED = e.IX2_ANIMATION_FRAME_CHANGED = e.IX2_EVENT_STATE_CHANGED = e.IX2_EVENT_LISTENER_ADDED = e.IX2_CLEAR_REQUESTED = e.IX2_STOP_REQUESTED = e.IX2_PLAYBACK_REQUESTED = e.IX2_PREVIEW_REQUESTED = e.IX2_SESSION_STOPPED = e.IX2_SESSION_STARTED = e.IX2_SESSION_INITIALIZED = e.IX2_RAW_DATA_IMPORTED = void 0;
    e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
    e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
    e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
    e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
    e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
    e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
    e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
    e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
    e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
    e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
    e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
    e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
    e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
    e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
    e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
    e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
    e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
    e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
    e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED"
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.RENDER_PLUGIN = e.RENDER_STYLE = e.RENDER_GENERAL = e.RENDER_TRANSFORM = e.ABSTRACT_NODE = e.PLAIN_OBJECT = e.HTML_ELEMENT = e.PRESERVE_3D = e.PARENT = e.SIBLINGS = e.IMMEDIATE_CHILDREN = e.CHILDREN = e.BAR_DELIMITER = e.COLON_DELIMITER = e.COMMA_DELIMITER = e.AUTO = e.WILL_CHANGE = e.FLEX = e.DISPLAY = e.COLOR = e.BORDER_COLOR = e.BACKGROUND = e.BACKGROUND_COLOR = e.HEIGHT = e.WIDTH = e.FILTER = e.OPACITY = e.SKEW_Y = e.SKEW_X = e.SKEW = e.ROTATE_Z = e.ROTATE_Y = e.ROTATE_X = e.SCALE_3D = e.SCALE_Z = e.SCALE_Y = e.SCALE_X = e.TRANSLATE_3D = e.TRANSLATE_Z = e.TRANSLATE_Y = e.TRANSLATE_X = e.TRANSFORM = e.CONFIG_UNIT = e.CONFIG_Z_UNIT = e.CONFIG_Y_UNIT = e.CONFIG_X_UNIT = e.CONFIG_VALUE = e.CONFIG_Z_VALUE = e.CONFIG_Y_VALUE = e.CONFIG_X_VALUE = e.BOUNDARY_SELECTOR = e.W_MOD_IX = e.W_MOD_JS = e.WF_PAGE = e.IX2_ID_DELIMITER = void 0;
    e.IX2_ID_DELIMITER = "|";
    e.WF_PAGE = "data-wf-page";
    e.W_MOD_JS = "w-mod-js";
    e.W_MOD_IX = "w-mod-ix";
    e.BOUNDARY_SELECTOR = ".w-dyn-item";
    e.CONFIG_X_VALUE = "xValue";
    e.CONFIG_Y_VALUE = "yValue";
    e.CONFIG_Z_VALUE = "zValue";
    e.CONFIG_VALUE = "value";
    e.CONFIG_X_UNIT = "xUnit";
    e.CONFIG_Y_UNIT = "yUnit";
    e.CONFIG_Z_UNIT = "zUnit";
    e.CONFIG_UNIT = "unit";
    e.TRANSFORM = "transform";
    e.TRANSLATE_X = "translateX";
    e.TRANSLATE_Y = "translateY";
    e.TRANSLATE_Z = "translateZ";
    e.TRANSLATE_3D = "translate3d";
    e.SCALE_X = "scaleX";
    e.SCALE_Y = "scaleY";
    e.SCALE_Z = "scaleZ";
    e.SCALE_3D = "scale3d";
    e.ROTATE_X = "rotateX";
    e.ROTATE_Y = "rotateY";
    e.ROTATE_Z = "rotateZ";
    e.SKEW = "skew";
    e.SKEW_X = "skewX";
    e.SKEW_Y = "skewY";
    e.OPACITY = "opacity";
    e.FILTER = "filter";
    e.WIDTH = "width";
    e.HEIGHT = "height";
    e.BACKGROUND_COLOR = "backgroundColor";
    e.BACKGROUND = "background";
    e.BORDER_COLOR = "borderColor";
    e.COLOR = "color";
    e.DISPLAY = "display";
    e.FLEX = "flex";
    e.WILL_CHANGE = "willChange";
    e.AUTO = "AUTO";
    e.COMMA_DELIMITER = ",";
    e.COLON_DELIMITER = ":";
    e.BAR_DELIMITER = "|";
    e.CHILDREN = "CHILDREN";
    e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
    e.SIBLINGS = "SIBLINGS";
    e.PARENT = "PARENT";
    e.PRESERVE_3D = "preserve-3d";
    e.HTML_ELEMENT = "HTML_ELEMENT";
    e.PLAIN_OBJECT = "PLAIN_OBJECT";
    e.ABSTRACT_NODE = "ABSTRACT_NODE";
    e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
    e.RENDER_GENERAL = "RENDER_GENERAL";
    e.RENDER_STYLE = "RENDER_STYLE";
    e.RENDER_PLUGIN = "RENDER_PLUGIN"
}, function(t, e, n) {
    "use strict";
    var r, i = n(0)(n(26)),
        o = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ixRequest = void 0;
    var a = o(n(27)),
        u = n(2),
        c = n(18),
        s = u.IX2EngineActionTypes,
        f = s.IX2_PREVIEW_REQUESTED,
        l = s.IX2_PLAYBACK_REQUESTED,
        d = s.IX2_STOP_REQUESTED,
        p = s.IX2_CLEAR_REQUESTED,
        v = { preview: {}, playback: {}, stop: {}, clear: {} },
        h = Object.create(null, (r = {}, (0, i.default)(r, f, { value: "preview" }), (0, i.default)(r, l, { value: "playback" }), (0, i.default)(r, d, { value: "stop" }), (0, i.default)(r, p, { value: "clear" }), r));
    e.ixRequest = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
            e = arguments.length > 1 ? arguments[1] : void 0;
        if (e.type in h) { var n = [h[e.type]]; return (0, c.setIn)(t, [n], (0, a.default)({}, e.payload)) }
        return t
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ixSession = void 0;
    var r = n(2),
        i = n(18),
        o = r.IX2EngineActionTypes,
        a = o.IX2_SESSION_INITIALIZED,
        u = o.IX2_SESSION_STARTED,
        c = o.IX2_TEST_FRAME_RENDERED,
        s = o.IX2_SESSION_STOPPED,
        f = o.IX2_EVENT_LISTENER_ADDED,
        l = o.IX2_EVENT_STATE_CHANGED,
        d = o.IX2_ANIMATION_FRAME_CHANGED,
        p = o.IX2_ACTION_LIST_PLAYBACK_CHANGED,
        v = o.IX2_VIEWPORT_WIDTH_CHANGED,
        h = o.IX2_MEDIA_QUERIES_DEFINED,
        E = { active: !1, tick: 0, eventListeners: [], eventState: {}, playbackState: {}, viewportWidth: 0, mediaQueryKey: null, hasBoundaryNodes: !1, hasDefinedMediaQueries: !1 };
    e.ixSession = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case a:
                var n = e.payload.hasBoundaryNodes;
                return (0, i.set)(t, "hasBoundaryNodes", n);
            case u:
                return (0, i.set)(t, "active", !0);
            case c:
                var r = e.payload.step,
                    o = void 0 === r ? 20 : r;
                return (0, i.set)(t, "tick", t.tick + o);
            case s:
                return E;
            case d:
                var g = e.payload.now;
                return (0, i.set)(t, "tick", g);
            case f:
                var _ = (0, i.addLast)(t.eventListeners, e.payload);
                return (0, i.set)(t, "eventListeners", _);
            case l:
                var y = e.payload,
                    m = y.stateKey,
                    I = y.newState;
                return (0, i.setIn)(t, ["eventState", m], I);
            case p:
                var T = e.payload,
                    b = T.actionListId,
                    O = T.isPlaying;
                return (0, i.setIn)(t, ["playbackState", b], O);
            case v:
                for (var w = e.payload, A = w.width, S = w.mediaQueries, x = S.length, R = null, N = 0; N < x; N++) {
                    var C = S[N],
                        L = C.key,
                        D = C.min,
                        P = C.max;
                    if (A >= D && A <= P) { R = L; break }
                }
                return (0, i.merge)(t, { viewportWidth: A, mediaQueryKey: R });
            case h:
                return (0, i.set)(t, "hasDefinedMediaQueries", !0);
            default:
                return t
        }
    }
}, function(t, e, n) {
    var r = n(178),
        i = n(230),
        o = n(101);
    t.exports = function(t) { var e = i(t); return 1 == e.length && e[0][2] ? o(e[0][0], e[0][1]) : function(n) { return n === t || r(n, t, e) } }
}, function(t, e, n) {
    var r = n(87),
        i = n(91),
        o = 1,
        a = 2;
    t.exports = function(t, e, n, u) {
        var c = n.length,
            s = c,
            f = !u;
        if (null == t) return !s;
        for (t = Object(t); c--;) { var l = n[c]; if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1 }
        for (; ++c < s;) {
            var d = (l = n[c])[0],
                p = t[d],
                v = l[1];
            if (f && l[2]) { if (void 0 === p && !(d in t)) return !1 } else { var h = new r; if (u) var E = u(p, v, d, t, e, h); if (!(void 0 === E ? i(v, p, o | a, u, h) : E)) return !1 }
        }
        return !0
    }
}, function(t, e) { t.exports = function() { this.__data__ = [], this.size = 0 } }, function(t, e, n) {
    var r = n(29),
        i = Array.prototype.splice;
    t.exports = function(t) {
        var e = this.__data__,
            n = r(e, t);
        return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0))
    }
}, function(t, e, n) {
    var r = n(29);
    t.exports = function(t) {
        var e = this.__data__,
            n = r(e, t);
        return n < 0 ? void 0 : e[n][1]
    }
}, function(t, e, n) {
    var r = n(29);
    t.exports = function(t) { return r(this.__data__, t) > -1 }
}, function(t, e, n) {
    var r = n(29);
    t.exports = function(t, e) {
        var n = this.__data__,
            i = r(n, t);
        return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
    }
}, function(t, e, n) {
    var r = n(28);
    t.exports = function() { this.__data__ = new r, this.size = 0 }
}, function(t, e) {
    t.exports = function(t) {
        var e = this.__data__,
            n = e.delete(t);
        return this.size = e.size, n
    }
}, function(t, e) { t.exports = function(t) { return this.__data__.get(t) } }, function(t, e) { t.exports = function(t) { return this.__data__.has(t) } }, function(t, e, n) {
    var r = n(28),
        i = n(46),
        o = n(47),
        a = 200;
    t.exports = function(t, e) {
        var n = this.__data__;
        if (n instanceof r) {
            var u = n.__data__;
            if (!i || u.length < a - 1) return u.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new o(u)
        }
        return n.set(t, e), this.size = n.size, this
    }
}, function(t, e, n) {
    var r = n(88),
        i = n(192),
        o = n(6),
        a = n(90),
        u = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        s = Object.prototype,
        f = c.toString,
        l = s.hasOwnProperty,
        d = RegExp("^" + f.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(t) { return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t)) }
}, function(t, e, n) {
    var r = n(19),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        u = r ? r.toStringTag : void 0;
    t.exports = function(t) {
        var e = o.call(t, u),
            n = t[u];
        try { t[u] = void 0; var r = !0 } catch (t) {}
        var i = a.call(t);
        return r && (e ? t[u] = n : delete t[u]), i
    }
}, function(t, e) {
    var n = Object.prototype.toString;
    t.exports = function(t) { return n.call(t) }
}, function(t, e, n) {
    var r, i = n(193),
        o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
    t.exports = function(t) { return !!o && o in t }
}, function(t, e, n) {
    var r = n(4)["__core-js_shared__"];
    t.exports = r
}, function(t, e) { t.exports = function(t, e) { return null == t ? void 0 : t[e] } }, function(t, e, n) {
    var r = n(196),
        i = n(28),
        o = n(46);
    t.exports = function() { this.size = 0, this.__data__ = { hash: new r, map: new(o || i), string: new r } }
}, function(t, e, n) {
    var r = n(197),
        i = n(198),
        o = n(199),
        a = n(200),
        u = n(201);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function(t, e, n) {
    var r = n(30);
    t.exports = function() { this.__data__ = r ? r(null) : {}, this.size = 0 }
}, function(t, e) { t.exports = function(t) { var e = this.has(t) && delete this.__data__[t]; return this.size -= e ? 1 : 0, e } }, function(t, e, n) {
    var r = n(30),
        i = "__lodash_hash_undefined__",
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) { var e = this.__data__; if (r) { var n = e[t]; return n === i ? void 0 : n } return o.call(e, t) ? e[t] : void 0 }
}, function(t, e, n) {
    var r = n(30),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) { var e = this.__data__; return r ? void 0 !== e[t] : i.call(e, t) }
}, function(t, e, n) {
    var r = n(30),
        i = "__lodash_hash_undefined__";
    t.exports = function(t, e) { var n = this.__data__; return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this }
}, function(t, e, n) {
    var r = n(31);
    t.exports = function(t) { var e = r(this, t).delete(t); return this.size -= e ? 1 : 0, e }
}, function(t, e) { t.exports = function(t) { var e = typeof t; return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t } }, function(t, e, n) {
    var r = n(31);
    t.exports = function(t) { return r(this, t).get(t) }
}, function(t, e, n) {
    var r = n(31);
    t.exports = function(t) { return r(this, t).has(t) }
}, function(t, e, n) {
    var r = n(31);
    t.exports = function(t, e) {
        var n = r(this, t),
            i = n.size;
        return n.set(t, e), this.size += n.size == i ? 0 : 1, this
    }
}, function(t, e, n) {
    var r = n(87),
        i = n(92),
        o = n(213),
        a = n(217),
        u = n(55),
        c = n(1),
        s = n(49),
        f = n(51),
        l = 1,
        d = "[object Arguments]",
        p = "[object Array]",
        v = "[object Object]",
        h = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n, E, g, _) {
        var y = c(t),
            m = c(e),
            I = y ? p : u(t),
            T = m ? p : u(e),
            b = (I = I == d ? v : I) == v,
            O = (T = T == d ? v : T) == v,
            w = I == T;
        if (w && s(t)) {
            if (!s(e)) return !1;
            y = !0, b = !1
        }
        if (w && !b) return _ || (_ = new r), y || f(t) ? i(t, e, n, E, g, _) : o(t, e, I, n, E, g, _);
        if (!(n & l)) {
            var A = b && h.call(t, "__wrapped__"),
                S = O && h.call(e, "__wrapped__");
            if (A || S) {
                var x = A ? t.value() : t,
                    R = S ? e.value() : e;
                return _ || (_ = new r), g(x, R, n, E, _)
            }
        }
        return !!w && (_ || (_ = new r), a(t, e, n, E, g, _))
    }
}, function(t, e, n) {
    var r = n(47),
        i = n(209),
        o = n(210);

    function a(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.__data__ = new r; ++e < n;) this.add(t[e])
    }
    a.prototype.add = a.prototype.push = i, a.prototype.has = o, t.exports = a
}, function(t, e) {
    var n = "__lodash_hash_undefined__";
    t.exports = function(t) { return this.__data__.set(t, n), this }
}, function(t, e) { t.exports = function(t) { return this.__data__.has(t) } }, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
            if (e(t[n], n, t)) return !0;
        return !1
    }
}, function(t, e) { t.exports = function(t, e) { return t.has(e) } }, function(t, e, n) {
    var r = n(19),
        i = n(214),
        o = n(45),
        a = n(92),
        u = n(215),
        c = n(216),
        s = 1,
        f = 2,
        l = "[object Boolean]",
        d = "[object Date]",
        p = "[object Error]",
        v = "[object Map]",
        h = "[object Number]",
        E = "[object RegExp]",
        g = "[object Set]",
        _ = "[object String]",
        y = "[object Symbol]",
        m = "[object ArrayBuffer]",
        I = "[object DataView]",
        T = r ? r.prototype : void 0,
        b = T ? T.valueOf : void 0;
    t.exports = function(t, e, n, r, T, O, w) {
        switch (n) {
            case I:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;
            case m:
                return !(t.byteLength != e.byteLength || !O(new i(t), new i(e)));
            case l:
            case d:
            case h:
                return o(+t, +e);
            case p:
                return t.name == e.name && t.message == e.message;
            case E:
            case _:
                return t == e + "";
            case v:
                var A = u;
            case g:
                var S = r & s;
                if (A || (A = c), t.size != e.size && !S) return !1;
                var x = w.get(t);
                if (x) return x == e;
                r |= f, w.set(t, e);
                var R = a(A(t), A(e), r, T, O, w);
                return w.delete(t), R;
            case y:
                if (b) return b.call(t) == b.call(e)
        }
        return !1
    }
}, function(t, e, n) {
    var r = n(4).Uint8Array;
    t.exports = r
}, function(t, e) {
    t.exports = function(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t, r) { n[++e] = [r, t] }), n
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t) { n[++e] = t }), n
    }
}, function(t, e, n) {
    var r = n(218),
        i = 1,
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n, a, u, c) {
        var s = n & i,
            f = r(t),
            l = f.length;
        if (l != r(e).length && !s) return !1;
        for (var d = l; d--;) { var p = f[d]; if (!(s ? p in e : o.call(e, p))) return !1 }
        var v = c.get(t),
            h = c.get(e);
        if (v && h) return v == e && h == t;
        var E = !0;
        c.set(t, e), c.set(e, t);
        for (var g = s; ++d < l;) {
            var _ = t[p = f[d]],
                y = e[p];
            if (a) var m = s ? a(y, _, p, e, t, c) : a(_, y, p, t, e, c);
            if (!(void 0 === m ? _ === y || u(_, y, n, a, c) : m)) { E = !1; break }
            g || (g = "constructor" == p)
        }
        if (E && !g) {
            var I = t.constructor,
                T = e.constructor;
            I != T && "constructor" in t && "constructor" in e && !("function" == typeof I && I instanceof I && "function" == typeof T && T instanceof T) && (E = !1)
        }
        return c.delete(t), c.delete(e), E
    }
}, function(t, e, n) {
    var r = n(93),
        i = n(94),
        o = n(32);
    t.exports = function(t) { return r(t, o, i) }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
            var a = t[n];
            e(a, n, t) && (o[i++] = a)
        }
        return o
    }
}, function(t, e) { t.exports = function(t, e) { for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n); return r } }, function(t, e, n) {
    var r = n(11),
        i = n(9),
        o = "[object Arguments]";
    t.exports = function(t) { return i(t) && r(t) == o }
}, function(t, e) { t.exports = function() { return !1 } }, function(t, e, n) {
    var r = n(11),
        i = n(52),
        o = n(9),
        a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function(t) { return o(t) && i(t.length) && !!a[r(t)] }
}, function(t, e) { t.exports = function(t) { return function(e) { return t(e) } } }, function(t, e, n) {
    (function(t) {
        var r = n(89),
            i = e && !e.nodeType && e,
            o = i && "object" == typeof t && t && !t.nodeType && t,
            a = o && o.exports === i && r.process,
            u = function() { try { var t = o && o.require && o.require("util").types; return t || a && a.binding && a.binding("util") } catch (t) {} }();
        t.exports = u
    }).call(this, n(97)(t))
}, function(t, e, n) {
    var r = n(98)(Object.keys, Object);
    t.exports = r
}, function(t, e, n) {
    var r = n(8)(n(4), "DataView");
    t.exports = r
}, function(t, e, n) {
    var r = n(8)(n(4), "Promise");
    t.exports = r
}, function(t, e, n) {
    var r = n(8)(n(4), "Set");
    t.exports = r
}, function(t, e, n) {
    var r = n(100),
        i = n(32);
    t.exports = function(t) {
        for (var e = i(t), n = e.length; n--;) {
            var o = e[n],
                a = t[o];
            e[n] = [o, a, r(a)]
        }
        return e
    }
}, function(t, e, n) {
    var r = n(91),
        i = n(56),
        o = n(237),
        a = n(58),
        u = n(100),
        c = n(101),
        s = n(20),
        f = 1,
        l = 2;
    t.exports = function(t, e) { return a(t) && u(e) ? c(s(t), e) : function(n) { var a = i(n, t); return void 0 === a && a === e ? o(n, t) : r(e, a, f | l) } }
}, function(t, e, n) {
    var r = n(233),
        i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        a = r(function(t) { var e = []; return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function(t, n, r, i) { e.push(r ? i.replace(o, "$1") : n || t) }), e });
    t.exports = a
}, function(t, e, n) {
    var r = n(234),
        i = 500;
    t.exports = function(t) {
        var e = r(t, function(t) { return n.size === i && n.clear(), t }),
            n = e.cache;
        return e
    }
}, function(t, e, n) {
    var r = n(47),
        i = "Expected a function";

    function o(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);
        var n = function() {
            var r = arguments,
                i = e ? e.apply(this, r) : r[0],
                o = n.cache;
            if (o.has(i)) return o.get(i);
            var a = t.apply(this, r);
            return n.cache = o.set(i, a) || o, a
        };
        return n.cache = new(o.Cache || r), n
    }
    o.Cache = r, t.exports = o
}, function(t, e, n) {
    var r = n(236);
    t.exports = function(t) { return null == t ? "" : r(t) }
}, function(t, e, n) {
    var r = n(19),
        i = n(102),
        o = n(1),
        a = n(35),
        u = 1 / 0,
        c = r ? r.prototype : void 0,
        s = c ? c.toString : void 0;
    t.exports = function t(e) { if ("string" == typeof e) return e; if (o(e)) return i(e, t) + ""; if (a(e)) return s ? s.call(e) : ""; var n = e + ""; return "0" == n && 1 / e == -u ? "-0" : n }
}, function(t, e, n) {
    var r = n(238),
        i = n(239);
    t.exports = function(t, e) { return null != t && i(t, e, r) }
}, function(t, e) { t.exports = function(t, e) { return null != t && e in Object(t) } }, function(t, e, n) {
    var r = n(34),
        i = n(33),
        o = n(1),
        a = n(50),
        u = n(52),
        c = n(20);
    t.exports = function(t, e, n) {
        for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f;) {
            var d = c(e[s]);
            if (!(l = null != t && n(t, d))) break;
            t = t[d]
        }
        return l || ++s != f ? l : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (o(t) || i(t))
    }
}, function(t, e, n) {
    var r = n(103),
        i = n(241),
        o = n(58),
        a = n(20);
    t.exports = function(t) { return o(t) ? r(a(t)) : i(t) }
}, function(t, e, n) {
    var r = n(57);
    t.exports = function(t) { return function(e) { return r(e, t) } }
}, function(t, e, n) {
    var r = n(104),
        i = n(7),
        o = n(105),
        a = Math.max;
    t.exports = function(t, e, n) { var u = null == t ? 0 : t.length; if (!u) return -1; var c = null == n ? 0 : o(n); return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c) }
}, function(t, e, n) {
    var r = n(60),
        i = 1 / 0,
        o = 1.7976931348623157e308;
    t.exports = function(t) { return t ? (t = r(t)) === i || t === -i ? (t < 0 ? -1 : 1) * o : t == t ? t : 0 : 0 === t ? t : 0 }
}, function(t, e) { t.exports = function(t) { if (Array.isArray(t)) { for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e]; return n } } }, function(t, e) { t.exports = function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) } }, function(t, e) { t.exports = function() { throw new TypeError("Invalid attempt to spread non-iterable instance") } }, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.createElementState = I, e.mergeActionState = T, e.ixElements = void 0;
    var r = n(18),
        i = n(2),
        o = i.IX2EngineConstants,
        a = (o.HTML_ELEMENT, o.PLAIN_OBJECT),
        u = (o.ABSTRACT_NODE, o.CONFIG_X_VALUE),
        c = o.CONFIG_Y_VALUE,
        s = o.CONFIG_Z_VALUE,
        f = o.CONFIG_VALUE,
        l = o.CONFIG_X_UNIT,
        d = o.CONFIG_Y_UNIT,
        p = o.CONFIG_Z_UNIT,
        v = o.CONFIG_UNIT,
        h = i.IX2EngineActionTypes,
        E = h.IX2_SESSION_STOPPED,
        g = h.IX2_INSTANCE_ADDED,
        _ = h.IX2_ELEMENT_STATE_CHANGED,
        y = {},
        m = "refState";

    function I(t, e, n, i, o) { var u = n === a ? (0, r.getIn)(o, ["config", "target", "objectId"]) : null; return (0, r.mergeIn)(t, [i], { id: i, ref: e, refId: u, refType: n }) }

    function T(t, e, n, i, o) {
        var a = function(t) {
                var e = t.config;
                return b.reduce(function(t, n) {
                    var r = n[0],
                        i = n[1],
                        o = e[r],
                        a = e[i];
                    return null != o && null != a && (t[i] = a), t
                }, {})
            }(o),
            u = [e, m, n];
        return (0, r.mergeIn)(t, u, i, a)
    }
    e.ixElements = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        switch (e.type) {
            case E:
                return y;
            case g:
                var n = e.payload,
                    i = n.elementId,
                    o = n.element,
                    a = n.origin,
                    u = n.actionItem,
                    c = n.refType,
                    s = u.actionTypeId,
                    f = t;
                return (0, r.getIn)(f, [i, o]) !== o && (f = I(f, o, c, i, u)), T(f, i, s, a, u);
            case _:
                var l = e.payload;
                return T(t, l.elementId, l.actionTypeId, l.current, l.actionItem);
            default:
                return t
        }
    };
    var b = [
        [u, l],
        [c, d],
        [s, p],
        [f, v]
    ]
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginOrigin = e.getPluginDuration = e.getPluginConfig = void 0;
    e.getPluginConfig = function(t) { return t.value };
    e.getPluginDuration = function(t, e) { if ("auto" !== e.config.duration) return null; var n = parseFloat(t.getAttribute("data-duration")); return n > 0 ? 1e3 * n : 1e3 * parseFloat(t.getAttribute("data-default-duration")) };
    e.getPluginOrigin = function(t) { return t || { value: 0 } };
    e.getPluginDestination = function(t) { return { value: t.value } };
    e.createPluginInstance = function(t) { var e = window.Webflow.require("lottie").createInstance(t); return e.stop(), e.setSubframe(!0), e };
    e.renderPlugin = function(t, e, n) {
        if (t) {
            var r = e[n.actionTypeId].value / 100;
            t.goToFrame(t.frames * r)
        }
    };
    e.clearPlugin = function(t) { window.Webflow.require("lottie").createInstance(t).stop() }
}, function(t, e, n) {
    "use strict";
    var r, i, o, a = n(0),
        u = a(n(21)),
        c = a(n(26)),
        s = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.getInstanceId = function() { return "i" + vt++ }, e.getElementId = function(t, e) { for (var n in t) { var r = t[n]; if (r && r.ref === e) return r.id } return "e" + ht++ }, e.reifyState = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.events,
            n = t.actionLists,
            r = t.site,
            i = (0, l.default)(e, function(t, e) { var n = e.eventTypeId; return t[n] || (t[n] = {}), t[n][e.id] = e, t }, {}),
            o = r && r.mediaQueries,
            a = [];
        o ? a = o.map(function(t) { return t.key }) : (o = [], console.warn("IX2 missing mediaQueries in site data"));
        return { ixData: { events: e, actionLists: n, eventTypeMap: i, mediaQueries: o, mediaQueryKeys: a } }
    }, e.observeStore = function(t) {
        var e = t.store,
            n = t.select,
            r = t.onChange,
            i = t.comparator,
            o = void 0 === i ? Et : i,
            a = e.getState,
            u = (0, e.subscribe)(function() {
                var t = n(a());
                if (null == t) return void u();
                o(t, c) || r(c = t, e)
            }),
            c = n(a());
        return u
    }, e.getAffectedElements = _t, e.getComputedStyle = function(t) {
        var e = t.element,
            n = t.actionItem;
        if (!_.IS_BROWSER_ENV) return {};
        switch (n.actionTypeId) {
            case it:
            case ot:
            case at:
            case ut:
            case ct:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }, e.getInstanceOrigin = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
            o = r.actionTypeId,
            a = r.config;
        if ((0, g.isPluginType)(o)) return (0, g.getPluginOrigin)(o)(e[o]);
        switch (o) {
            case Z:
            case J:
            case tt:
            case et:
                return e[o] || bt[o];
            case rt:
                return mt(e[o], r.config.filters);
            case nt:
                return { value: (0, f.default)(parseFloat(i(t, N)), 1) };
            case it:
                var u, c, s = i(t, L),
                    l = i(t, D);
                return u = a.widthUnit === W ? yt.test(s) ? parseFloat(s) : parseFloat(n.width) : (0, f.default)(parseFloat(s), parseFloat(n.width)), c = a.heightUnit === W ? yt.test(l) ? parseFloat(l) : parseFloat(n.height) : (0, f.default)(parseFloat(l), parseFloat(n.height)), { widthValue: u, heightValue: c };
            case ot:
            case at:
            case ut:
                return function(t) {
                    var e = t.element,
                        n = t.actionTypeId,
                        r = t.computedStyle,
                        i = t.getStyle,
                        o = lt[n],
                        a = i(e, o),
                        u = St.test(a) ? a : r[o],
                        c = function(t, e) { var n = t.exec(e); return n ? n[1] : "" }(xt, u).split(B);
                    return { rValue: (0, f.default)(parseInt(c[0], 10), 255), gValue: (0, f.default)(parseInt(c[1], 10), 255), bValue: (0, f.default)(parseInt(c[2], 10), 255), aValue: (0, f.default)(parseFloat(c[3]), 1) }
                }({ element: t, actionTypeId: o, computedStyle: n, getStyle: i });
            case ct:
                return { value: (0, f.default)(i(t, V), n.display) };
            case st:
                return e[o] || { value: 0 };
            default:
                return
        }
    }, e.getDestinationValues = function(t) {
        var e = t.element,
            n = t.actionItem,
            r = t.elementApi,
            i = n.actionTypeId;
        if ((0, g.isPluginType)(i)) return (0, g.getPluginDestination)(i)(n.config);
        switch (i) {
            case Z:
            case J:
            case tt:
            case et:
                var o = n.config,
                    a = o.xValue,
                    u = o.yValue,
                    c = o.zValue;
                return { xValue: a, yValue: u, zValue: c };
            case it:
                var s = r.getStyle,
                    f = r.setStyle,
                    l = r.getProperty,
                    d = n.config,
                    p = d.widthUnit,
                    v = d.heightUnit,
                    h = n.config,
                    E = h.widthValue,
                    y = h.heightValue;
                if (!_.IS_BROWSER_ENV) return { widthValue: E, heightValue: y };
                if (p === W) {
                    var m = s(e, L);
                    f(e, L, ""), E = l(e, "offsetWidth"), f(e, L, m)
                }
                if (v === W) {
                    var I = s(e, D);
                    f(e, D, ""), y = l(e, "offsetHeight"), f(e, D, I)
                }
                return { widthValue: E, heightValue: y };
            case ot:
            case at:
            case ut:
                var T = n.config,
                    b = T.rValue,
                    O = T.gValue,
                    w = T.bValue,
                    A = T.aValue;
                return { rValue: b, gValue: O, bValue: w, aValue: A };
            case rt:
                return n.config.filters.reduce(It, {});
            default:
                var S = n.config.value;
                return { value: S }
        }
    }, e.getRenderType = Tt, e.getStyleProp = function(t, e) { return t === Q ? e.replace("STYLE_", "").toLowerCase() : null }, e.renderHTMLElement = function(t, e, n, r, i, o, a, u, c) {
        switch (u) {
            case Y:
                return function(t, e, n, r, i) {
                    var o = At.map(function(t) {
                            var n = bt[t],
                                r = e[t] || {},
                                i = r.xValue,
                                o = void 0 === i ? n.xValue : i,
                                a = r.yValue,
                                u = void 0 === a ? n.yValue : a,
                                c = r.zValue,
                                s = void 0 === c ? n.zValue : c,
                                f = r.xUnit,
                                l = void 0 === f ? "" : f,
                                d = r.yUnit,
                                p = void 0 === d ? "" : d,
                                v = r.zUnit,
                                h = void 0 === v ? "" : v;
                            switch (t) {
                                case Z:
                                    return "".concat(T, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                                case J:
                                    return "".concat(b, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                                case tt:
                                    return "".concat(O, "(").concat(o).concat(l, ") ").concat(w, "(").concat(u).concat(p, ") ").concat(A, "(").concat(s).concat(h, ")");
                                case et:
                                    return "".concat(S, "(").concat(o).concat(l, ", ").concat(u).concat(p, ")");
                                default:
                                    return ""
                            }
                        }).join(" "),
                        a = i.setStyle;
                    Rt(t, _.TRANSFORM_PREFIXED, i), a(t, _.TRANSFORM_PREFIXED, o), u = r, c = n, s = u.actionTypeId, f = c.xValue, l = c.yValue, d = c.zValue, (s === Z && void 0 !== d || s === J && void 0 !== d || s === tt && (void 0 !== f || void 0 !== l)) && a(t, _.TRANSFORM_STYLE_PREFIXED, x);
                    var u, c, s, f, l, d
                }(t, e, n, i, a);
            case Q:
                return function(t, e, n, r, i, o) {
                    var a = o.setStyle,
                        u = r.actionTypeId,
                        c = r.config;
                    switch (u) {
                        case it:
                            var s = r.config,
                                f = s.widthUnit,
                                d = void 0 === f ? "" : f,
                                p = s.heightUnit,
                                v = void 0 === p ? "" : p,
                                h = n.widthValue,
                                E = n.heightValue;
                            void 0 !== h && (d === W && (d = "px"), Rt(t, L, o), a(t, L, h + d)), void 0 !== E && (v === W && (v = "px"), Rt(t, D, o), a(t, D, E + v));
                            break;
                        case rt:
                            ! function(t, e, n, r) {
                                var i = (0, l.default)(e, function(t, e, r) { return "".concat(t, " ").concat(r, "(").concat(e).concat(wt(r, n), ")") }, ""),
                                    o = r.setStyle;
                                Rt(t, C, r), o(t, C, i)
                            }(t, n, c, o);
                            break;
                        case ot:
                        case at:
                        case ut:
                            var g = lt[u],
                                _ = Math.round(n.rValue),
                                y = Math.round(n.gValue),
                                m = Math.round(n.bValue),
                                I = n.aValue;
                            Rt(t, g, o), a(t, g, I >= 1 ? "rgb(".concat(_, ",").concat(y, ",").concat(m, ")") : "rgba(".concat(_, ",").concat(y, ",").concat(m, ",").concat(I, ")"));
                            break;
                        default:
                            var T = c.unit,
                                b = void 0 === T ? "" : T;
                            Rt(t, i, o), a(t, i, n.value + b)
                    }
                }(t, 0, n, i, o, a);
            case K:
                return function(t, e, n) {
                    var r = n.setStyle;
                    switch (e.actionTypeId) {
                        case ct:
                            var i = e.config.value;
                            return void(i === R && _.IS_BROWSER_ENV ? r(t, V, _.FLEX_PREFIXED) : r(t, V, i))
                    }
                }(t, i, a);
            case q:
                var s = i.actionTypeId;
                if ((0, g.isPluginType)(s)) return (0, g.renderPlugin)(s)(c, e, i)
        }
    }, e.clearAllStyles = function(t) {
        var e = t.store,
            n = t.elementApi,
            r = e.getState().ixData,
            i = r.events,
            o = void 0 === i ? {} : i,
            a = r.actionLists,
            u = void 0 === a ? {} : a;
        Object.keys(o).forEach(function(t) {
            var e = o[t],
                r = e.action.config,
                i = r.actionListId,
                a = u[i];
            a && Ct({ actionList: a, event: e, elementApi: n })
        }), Object.keys(u).forEach(function(t) { Ct({ actionList: u[t], elementApi: n }) })
    }, e.cleanupHTMLElement = function(t, e, n) {
        var r = n.setStyle,
            i = n.getStyle,
            o = e.actionTypeId;
        if (o === it) {
            var a = e.config;
            a.widthUnit === W && r(t, L, ""), a.heightUnit === W && r(t, D, "")
        }
        i(t, U) && Dt({ effect: Nt, actionTypeId: o, elementApi: n })(t)
    }, e.getMaxDurationItemIndex = Mt, e.getActionListProgress = function(t, e) {
        var n = t.actionItemGroups,
            r = t.useFirstGroupAsInitialState,
            i = e.actionItem,
            o = e.verboseTimeElapsed,
            a = void 0 === o ? 0 : o,
            u = 0,
            c = 0;
        return n.forEach(function(t, e) {
            if (!r || 0 !== e) {
                var n = t.actionItems,
                    o = n[Mt(n)],
                    s = o.config,
                    f = o.actionTypeId;
                i.id === o.id && (c = u + a);
                var l = Tt(f) === K ? 0 : s.duration;
                u += s.delay + l
            }
        }), u > 0 ? (0, E.optimizeFloat)(c / u) : 0
    }, e.reduceListToGroup = function(t) {
        var e = t.actionList,
            n = t.actionItemId,
            r = t.rawData,
            i = e.actionItemGroups,
            o = e.continuousParameterGroups,
            a = [],
            u = function(t) { return a.push((0, p.mergeIn)(t, ["config"], { delay: 0, duration: 0 })), t.id === n };
        return i && i.some(function(t) { return t.actionItems.some(u) }), o && o.some(function(t) { return t.continuousActionGroups.some(function(t) { return t.actionItems.some(u) }) }), (0, p.setIn)(r, ["actionLists"], (0, c.default)({}, e.id, { id: e.id, actionItemGroups: [{ actionItems: a }] }))
    }, e.shouldNamespaceEventParameter = function(t, e) { var n = e.basedOn; return t === h.EventTypeConsts.SCROLLING_IN_VIEW && (n === h.EventBasedOn.ELEMENT || null == n) || t === h.EventTypeConsts.MOUSE_MOVE && n === h.EventBasedOn.ELEMENT }, e.getNamespacedParameterId = function(t, e) { return t + H + e }, e.shouldAllowMediaQuery = function(t, e) { if (null == e) return !0; return -1 !== t.indexOf(e) }, e.mediaQueriesEqual = function(t, e) { return (0, v.default)(t && t.sort(), e && e.sort()) }, e.stringifyTarget = function(t) {
        if ("string" == typeof t) return t;
        var e = t.id,
            n = void 0 === e ? "" : e,
            r = t.selector,
            i = void 0 === r ? "" : r,
            o = t.useEventTarget;
        return n + z + i + z + (void 0 === o ? "" : o)
    }, e.getItemConfigByKey = void 0;
    var f = s(n(250)),
        l = s(n(251)),
        d = s(n(257)),
        p = n(18),
        v = s(n(113)),
        h = n(2),
        E = n(108),
        g = n(110),
        _ = n(44),
        y = h.IX2EngineConstants,
        m = y.BACKGROUND,
        I = y.TRANSFORM,
        T = y.TRANSLATE_3D,
        b = y.SCALE_3D,
        O = y.ROTATE_X,
        w = y.ROTATE_Y,
        A = y.ROTATE_Z,
        S = y.SKEW,
        x = y.PRESERVE_3D,
        R = y.FLEX,
        N = y.OPACITY,
        C = y.FILTER,
        L = y.WIDTH,
        D = y.HEIGHT,
        P = y.BACKGROUND_COLOR,
        M = y.BORDER_COLOR,
        j = y.COLOR,
        F = y.CHILDREN,
        k = y.IMMEDIATE_CHILDREN,
        X = y.SIBLINGS,
        G = y.PARENT,
        V = y.DISPLAY,
        U = y.WILL_CHANGE,
        W = y.AUTO,
        B = y.COMMA_DELIMITER,
        H = y.COLON_DELIMITER,
        z = y.BAR_DELIMITER,
        Y = y.RENDER_TRANSFORM,
        K = y.RENDER_GENERAL,
        Q = y.RENDER_STYLE,
        q = y.RENDER_PLUGIN,
        $ = h.ActionTypeConsts,
        Z = $.TRANSFORM_MOVE,
        J = $.TRANSFORM_SCALE,
        tt = $.TRANSFORM_ROTATE,
        et = $.TRANSFORM_SKEW,
        nt = $.STYLE_OPACITY,
        rt = $.STYLE_FILTER,
        it = $.STYLE_SIZE,
        ot = $.STYLE_BACKGROUND_COLOR,
        at = $.STYLE_BORDER,
        ut = $.STYLE_TEXT_COLOR,
        ct = $.GENERAL_DISPLAY,
        st = "OBJECT_VALUE",
        ft = function(t) { return t.trim() },
        lt = Object.freeze((r = {}, (0, c.default)(r, ot, P), (0, c.default)(r, at, M), (0, c.default)(r, ut, j), r)),
        dt = Object.freeze((i = {}, (0, c.default)(i, _.TRANSFORM_PREFIXED, I), (0, c.default)(i, P, m), (0, c.default)(i, N, N), (0, c.default)(i, C, C), (0, c.default)(i, L, L), (0, c.default)(i, D, D), i)),
        pt = {},
        vt = 1;
    var ht = 1;
    var Et = function(t, e) { return t === e };

    function gt(t) { var e = (0, u.default)(t); return "string" === e ? { id: t } : null != t && "object" === e ? { id: t.id, objectId: t.objectId, selector: t.selector, selectorGuids: t.selectorGuids, appliesTo: t.appliesTo, useEventTarget: t.useEventTarget } : {} }

    function _t(t) {
        var e, n, r, i = t.config,
            o = t.event,
            a = t.eventTarget,
            u = t.elementRoot,
            c = t.elementApi;
        if (!c) throw new Error("IX2 missing elementApi");
        var s = i.targets;
        if (Array.isArray(s) && s.length > 0) return s.reduce(function(t, e) { return t.concat(_t({ config: { target: e }, event: o, eventTarget: a, elementRoot: u, elementApi: c })) }, []);
        var f = c.getValidDocument,
            l = c.getQuerySelector,
            d = c.queryDocument,
            p = c.getChildElements,
            v = c.getSiblingElements,
            E = c.matchSelector,
            g = c.elementContains,
            y = c.isSiblingNode,
            m = i.target;
        if (!m) return [];
        var I = gt(m),
            T = I.id,
            b = I.objectId,
            O = I.selector,
            w = I.selectorGuids,
            A = I.appliesTo,
            S = I.useEventTarget;
        if (b) return [pt[b] || (pt[b] = {})];
        if (A === h.EventAppliesTo.PAGE) { var x = f(T); return x ? [x] : [] }
        var R, N, C, L = (null !== (e = null == o ? void 0 : null === (n = o.action) || void 0 === n ? void 0 : null === (r = n.config) || void 0 === r ? void 0 : r.affectedElements) && void 0 !== e ? e : {})[T || O] || {},
            D = Boolean(L.id || L.selector),
            P = o && l(gt(o.target));
        if (D ? (R = L.limitAffectedElements, N = P, C = l(L)) : N = C = l({ id: T, selector: O, selectorGuids: w }), o && S) { var M = a && (C || !0 === S) ? [a] : d(P); if (C) { if (S === G) return d(C).filter(function(t) { return M.some(function(e) { return g(t, e) }) }); if (S === F) return d(C).filter(function(t) { return M.some(function(e) { return g(e, t) }) }); if (S === X) return d(C).filter(function(t) { return M.some(function(e) { return y(e, t) }) }) } return M }
        return null == N || null == C ? [] : _.IS_BROWSER_ENV && u ? d(C).filter(function(t) { return u.contains(t) }) : R === F ? d(N, C) : R === k ? p(d(N)).filter(E(C)) : R === X ? v(d(N)).filter(E(C)) : d(C)
    }
    var yt = /px/,
        mt = function(t, e) { return e.reduce(function(t, e) { return null == t[e.type] && (t[e.type] = Ot[e.type]), t }, t || {}) };
    var It = function(t, e) { return e && (t[e.type] = e.value || 0), t };

    function Tt(t) { return /^TRANSFORM_/.test(t) ? Y : /^STYLE_/.test(t) ? Q : /^GENERAL_/.test(t) ? K : /^PLUGIN_/.test(t) ? q : void 0 }
    e.getItemConfigByKey = function(t, e, n) {
        if ((0, g.isPluginType)(t)) return (0, g.getPluginConfig)(t)(n, e);
        switch (t) {
            case rt:
                var r = (0, d.default)(n.filters, function(t) { return t.type === e });
                return r ? r.value : 0;
            default:
                return n[e]
        }
    };
    var bt = (o = {}, (0, c.default)(o, Z, Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })), (0, c.default)(o, J, Object.freeze({ xValue: 1, yValue: 1, zValue: 1 })), (0, c.default)(o, tt, Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })), (0, c.default)(o, et, Object.freeze({ xValue: 0, yValue: 0 })), o),
        Ot = Object.freeze({ blur: 0, "hue-rotate": 0, invert: 0, grayscale: 0, saturate: 100, sepia: 0, contrast: 100, brightness: 100 }),
        wt = function(t, e) {
            var n = (0, d.default)(e.filters, function(e) { return e.type === t });
            if (n && n.unit) return n.unit;
            switch (t) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        },
        At = Object.keys(bt);
    var St = /^rgb/,
        xt = RegExp("rgba?".concat("\\(([^)]+)\\)"));

    function Rt(t, e, n) {
        if (_.IS_BROWSER_ENV) {
            var r = dt[e];
            if (r) {
                var i = n.getStyle,
                    o = n.setStyle,
                    a = i(t, U);
                if (a) { var u = a.split(B).map(ft); - 1 === u.indexOf(r) && o(t, U, u.concat(r).join(B)) } else o(t, U, r)
            }
        }
    }

    function Nt(t, e, n) {
        if (_.IS_BROWSER_ENV) {
            var r = dt[e];
            if (r) {
                var i = n.getStyle,
                    o = n.setStyle,
                    a = i(t, U);
                a && -1 !== a.indexOf(r) && o(t, U, a.split(B).map(ft).filter(function(t) { return t !== r }).join(B))
            }
        }
    }

    function Ct(t) {
        var e = t.actionList,
            n = void 0 === e ? {} : e,
            r = t.event,
            i = t.elementApi,
            o = n.actionItemGroups,
            a = n.continuousParameterGroups;
        o && o.forEach(function(t) { Lt({ actionGroup: t, event: r, elementApi: i }) }), a && a.forEach(function(t) { t.continuousActionGroups.forEach(function(t) { Lt({ actionGroup: t, event: r, elementApi: i }) }) })
    }

    function Lt(t) {
        var e = t.actionGroup,
            n = t.event,
            r = t.elementApi;
        e.actionItems.forEach(function(t) {
            var e, i = t.actionTypeId,
                o = t.config;
            e = (0, g.isPluginType)(i) ? (0, g.clearPlugin)(i) : Dt({ effect: Pt, actionTypeId: i, elementApi: r }), _t({ config: o, event: n, elementApi: r }).forEach(e)
        })
    }
    var Dt = function(t) {
        var e = t.effect,
            n = t.actionTypeId,
            r = t.elementApi;
        return function(t) {
            switch (n) {
                case Z:
                case J:
                case tt:
                case et:
                    e(t, _.TRANSFORM_PREFIXED, r);
                    break;
                case rt:
                    e(t, C, r);
                    break;
                case nt:
                    e(t, N, r);
                    break;
                case it:
                    e(t, L, r), e(t, D, r);
                    break;
                case ot:
                case at:
                case ut:
                    e(t, lt[n], r);
                    break;
                case ct:
                    e(t, V, r)
            }
        }
    };

    function Pt(t, e, n) {
        var r = n.setStyle;
        Nt(t, e, n), r(t, e, ""), e === _.TRANSFORM_PREFIXED && r(t, _.TRANSFORM_STYLE_PREFIXED, "")
    }

    function Mt(t) {
        var e = 0,
            n = 0;
        return t.forEach(function(t, r) {
            var i = t.config,
                o = i.delay + i.duration;
            o >= e && (e = o, n = r)
        }), n
    }
}, function(t, e) { t.exports = function(t, e) { return null == t || t != t ? e : t } }, function(t, e, n) {
    var r = n(252),
        i = n(111),
        o = n(7),
        a = n(256),
        u = n(1);
    t.exports = function(t, e, n) {
        var c = u(t) ? r : a,
            s = arguments.length < 3;
        return c(t, o(e, 4), n, s, i)
    }
}, function(t, e) {
    t.exports = function(t, e, n, r) {
        var i = -1,
            o = null == t ? 0 : t.length;
        for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
        return n
    }
}, function(t, e, n) {
    var r = n(254)();
    t.exports = r
}, function(t, e) { t.exports = function(t) { return function(e, n, r) { for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) { var c = a[t ? u : ++i]; if (!1 === n(o[c], c, o)) break } return e } } }, function(t, e, n) {
    var r = n(12);
    t.exports = function(t, e) {
        return function(n, i) {
            if (null == n) return n;
            if (!r(n)) return t(n, i);
            for (var o = n.length, a = e ? o : -1, u = Object(n);
                (e ? a-- : ++a < o) && !1 !== i(u[a], a, u););
            return n
        }
    }
}, function(t, e) { t.exports = function(t, e, n, r, i) { return i(t, function(t, i, o) { n = r ? (r = !1, t) : e(n, t, i, o) }), n } }, function(t, e, n) {
    var r = n(86)(n(258));
    t.exports = r
}, function(t, e, n) {
    var r = n(104),
        i = n(7),
        o = n(105),
        a = Math.max,
        u = Math.min;
    t.exports = function(t, e, n) { var c = null == t ? 0 : t.length; if (!c) return -1; var s = c - 1; return void 0 !== n && (s = o(n), s = n < 0 ? a(c + s, 0) : u(s, c - 1)), r(t, i(e, 3), s, !0) }
}, function(t, e) { t.exports = function(t) { return t && t.__esModule ? t : { default: t } } }, function(t, e, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty;

    function i(t, e) { return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e }
    t.exports = function(t, e) {
        if (i(t, e)) return !0;
        if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
        var n = Object.keys(t),
            o = Object.keys(e);
        if (n.length !== o.length) return !1;
        for (var a = 0; a < n.length; a++)
            if (!r.call(e, n[a]) || !i(t[n[a]], e[n[a]])) return !1;
        return !0
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ixInstances = void 0;
    var r = n(2),
        i = n(10),
        o = n(18),
        a = r.IX2EngineActionTypes,
        u = a.IX2_RAW_DATA_IMPORTED,
        c = a.IX2_SESSION_STOPPED,
        s = a.IX2_INSTANCE_ADDED,
        f = a.IX2_INSTANCE_STARTED,
        l = a.IX2_INSTANCE_REMOVED,
        d = a.IX2_ANIMATION_FRAME_CHANGED,
        p = i.IX2EasingUtils,
        v = p.optimizeFloat,
        h = p.applyEasing,
        E = p.createBezierEasing,
        g = r.IX2EngineConstants.RENDER_GENERAL,
        _ = i.IX2VanillaUtils,
        y = _.getItemConfigByKey,
        m = _.getRenderType,
        I = _.getStyleProp,
        T = function(t, e) {
            var n = t.position,
                r = t.parameterId,
                i = t.actionGroups,
                a = t.destinationKeys,
                u = t.smoothing,
                c = t.restingValue,
                s = t.actionTypeId,
                f = t.customEasingFn,
                l = e.payload.parameters,
                d = Math.max(1 - u, .01),
                p = l[r];
            null == p && (d = 1, p = c);
            var E, g, _, m, I = Math.max(p, 0) || 0,
                T = v(I - n),
                b = v(n + T * d),
                O = 100 * b;
            if (b === n && t.current) return t;
            for (var w = 0, A = i.length; w < A; w++) {
                var S = i[w],
                    x = S.keyframe,
                    R = S.actionItems;
                if (0 === w && (E = R[0]), O >= x) {
                    E = R[0];
                    var N = i[w + 1],
                        C = N && O !== x;
                    g = C ? N.actionItems[0] : null, C && (_ = x / 100, m = (N.keyframe - x) / 100)
                }
            }
            var L = {};
            if (E && !g)
                for (var D = 0, P = a.length; D < P; D++) {
                    var M = a[D];
                    L[M] = y(s, M, E.config)
                } else if (E && g && void 0 !== _ && void 0 !== m)
                    for (var j = (b - _) / m, F = E.config.easing, k = h(F, j, f), X = 0, G = a.length; X < G; X++) {
                        var V = a[X],
                            U = y(s, V, E.config),
                            W = (y(s, V, g.config) - U) * k + U;
                        L[V] = W
                    }
            return (0, o.merge)(t, { position: b, current: L })
        },
        b = function(t, e) {
            var n = t,
                r = n.active,
                i = n.origin,
                a = n.start,
                u = n.immediate,
                c = n.renderType,
                s = n.verbose,
                f = n.actionItem,
                l = n.destination,
                d = n.destinationKeys,
                p = n.pluginDuration,
                E = n.instanceDelay,
                _ = n.customEasingFn,
                y = f.config.easing,
                m = f.config,
                I = m.duration,
                T = m.delay;
            null != p && (I = p), T = null != E ? E : T, c === g ? I = 0 : u && (I = T = 0);
            var b = e.payload.now;
            if (r && i) {
                var O = b - (a + T);
                if (s) {
                    var w = b - a,
                        A = I + T,
                        S = v(Math.min(Math.max(0, w / A), 1));
                    t = (0, o.set)(t, "verboseTimeElapsed", A * S)
                }
                if (O < 0) return t;
                var x = v(Math.min(Math.max(0, O / I), 1)),
                    R = h(y, x, _),
                    N = {},
                    C = null;
                return d.length && (C = d.reduce(function(t, e) {
                    var n = l[e],
                        r = parseFloat(i[e]) || 0,
                        o = (parseFloat(n) - r) * R + r;
                    return t[e] = o, t
                }, {})), N.current = C, N.position = x, 1 === x && (N.active = !1, N.complete = !0), (0, o.merge)(t, N)
            }
            return t
        };
    e.ixInstances = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case u:
                return e.payload.ixInstances || Object.freeze({});
            case c:
                return Object.freeze({});
            case s:
                var n = e.payload,
                    r = n.instanceId,
                    i = n.elementId,
                    a = n.actionItem,
                    p = n.eventId,
                    v = n.eventTarget,
                    h = n.eventStateKey,
                    g = n.actionListId,
                    _ = n.groupIndex,
                    y = n.isCarrier,
                    O = n.origin,
                    w = n.destination,
                    A = n.immediate,
                    S = n.verbose,
                    x = n.continuous,
                    R = n.parameterId,
                    N = n.actionGroups,
                    C = n.smoothing,
                    L = n.restingValue,
                    D = n.pluginInstance,
                    P = n.pluginDuration,
                    M = n.instanceDelay,
                    j = a.actionTypeId,
                    F = m(j),
                    k = I(F, j),
                    X = Object.keys(w).filter(function(t) { return null != w[t] }),
                    G = a.config.easing;
                return (0, o.set)(t, r, { id: r, elementId: i, active: !1, position: 0, start: 0, origin: O, destination: w, destinationKeys: X, immediate: A, verbose: S, current: null, actionItem: a, actionTypeId: j, eventId: p, eventTarget: v, eventStateKey: h, actionListId: g, groupIndex: _, renderType: F, isCarrier: y, styleProp: k, continuous: x, parameterId: R, actionGroups: N, smoothing: C, restingValue: L, pluginInstance: D, pluginDuration: P, instanceDelay: M, customEasingFn: Array.isArray(G) && 4 === G.length ? E(G) : void 0 });
            case f:
                var V = e.payload,
                    U = V.instanceId,
                    W = V.time;
                return (0, o.mergeIn)(t, [U], { active: !0, complete: !1, start: W });
            case l:
                var B = e.payload.instanceId;
                if (!t[B]) return t;
                for (var H = {}, z = Object.keys(t), Y = z.length, K = 0; K < Y; K++) {
                    var Q = z[K];
                    Q !== B && (H[Q] = t[Q])
                }
                return H;
            case d:
                for (var q = t, $ = Object.keys(t), Z = $.length, J = 0; J < Z; J++) {
                    var tt = $[J],
                        et = t[tt],
                        nt = et.continuous ? T : b;
                    q = (0, o.set)(q, tt, nt(et, e))
                }
                return q;
            default:
                return t
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ixParameters = void 0;
    var r = n(2).IX2EngineActionTypes,
        i = r.IX2_RAW_DATA_IMPORTED,
        o = r.IX2_SESSION_STOPPED,
        a = r.IX2_PARAMETER_CHANGED;
    e.ixParameters = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case i:
                return e.payload.ixParameters || {};
            case o:
                return {};
            case a:
                var n = e.payload,
                    r = n.key,
                    u = n.value;
                return t[r] = u, t;
            default:
                return t
        }
    }
}, function(t, e) {
    t.exports = function(t, e) {
        if (null == t) return {};
        var n, r, i = {},
            o = Object.keys(t);
        for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i
    }
}, function(t, e, n) {
    var r = n(53),
        i = n(55),
        o = n(12),
        a = n(265),
        u = n(266),
        c = "[object Map]",
        s = "[object Set]";
    t.exports = function(t) { if (null == t) return 0; if (o(t)) return a(t) ? u(t) : t.length; var e = i(t); return e == c || e == s ? t.size : r(t).length }
}, function(t, e, n) {
    var r = n(11),
        i = n(1),
        o = n(9),
        a = "[object String]";
    t.exports = function(t) { return "string" == typeof t || !i(t) && o(t) && r(t) == a }
}, function(t, e, n) {
    var r = n(267),
        i = n(268),
        o = n(269);
    t.exports = function(t) { return i(t) ? o(t) : r(t) }
}, function(t, e, n) {
    var r = n(103)("length");
    t.exports = r
}, function(t, e) {
    var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    t.exports = function(t) { return n.test(t) }
}, function(t, e) {
    var n = "[\\ud800-\\udfff]",
        r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        i = "\\ud83c[\\udffb-\\udfff]",
        o = "[^\\ud800-\\udfff]",
        a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        c = "(?:" + r + "|" + i + ")" + "?",
        s = "[\\ufe0e\\ufe0f]?" + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*"),
        f = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
        l = RegExp(i + "(?=" + i + ")|" + f + s, "g");
    t.exports = function(t) { for (var e = l.lastIndex = 0; l.test(t);) ++e; return e }
}, function(t, e, n) {
    var r = n(7),
        i = n(271),
        o = n(272);
    t.exports = function(t, e) { return o(t, i(r(e))) }
}, function(t, e) {
    var n = "Expected a function";
    t.exports = function(t) {
        if ("function" != typeof t) throw new TypeError(n);
        return function() {
            var e = arguments;
            switch (e.length) {
                case 0:
                    return !t.call(this);
                case 1:
                    return !t.call(this, e[0]);
                case 2:
                    return !t.call(this, e[0], e[1]);
                case 3:
                    return !t.call(this, e[0], e[1], e[2])
            }
            return !t.apply(this, e)
        }
    }
}, function(t, e, n) {
    var r = n(102),
        i = n(7),
        o = n(273),
        a = n(276);
    t.exports = function(t, e) { if (null == t) return {}; var n = r(a(t), function(t) { return [t] }); return e = i(e), o(t, n, function(t, n) { return e(t, n[0]) }) }
}, function(t, e, n) {
    var r = n(57),
        i = n(274),
        o = n(34);
    t.exports = function(t, e, n) {
        for (var a = -1, u = e.length, c = {}; ++a < u;) {
            var s = e[a],
                f = r(t, s);
            n(f, s) && i(c, o(s, t), f)
        }
        return c
    }
}, function(t, e, n) {
    var r = n(275),
        i = n(34),
        o = n(50),
        a = n(6),
        u = n(20);
    t.exports = function(t, e, n, c) {
        if (!a(t)) return t;
        for (var s = -1, f = (e = i(e, t)).length, l = f - 1, d = t; null != d && ++s < f;) {
            var p = u(e[s]),
                v = n;
            if ("__proto__" === p || "constructor" === p || "prototype" === p) return t;
            if (s != l) {
                var h = d[p];
                void 0 === (v = c ? c(h, p, d) : void 0) && (v = a(h) ? h : o(e[s + 1]) ? [] : {})
            }
            r(d, p, v), d = d[p]
        }
        return t
    }
}, function(t, e, n) {
    var r = n(115),
        i = n(45),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n) {
        var a = t[e];
        o.call(t, e) && i(a, n) && (void 0 !== n || e in t) || r(t, e, n)
    }
}, function(t, e, n) {
    var r = n(93),
        i = n(277),
        o = n(279);
    t.exports = function(t) { return r(t, o, i) }
}, function(t, e, n) {
    var r = n(48),
        i = n(278),
        o = n(94),
        a = n(95),
        u = Object.getOwnPropertySymbols ? function(t) { for (var e = []; t;) r(e, o(t)), t = i(t); return e } : a;
    t.exports = u
}, function(t, e, n) {
    var r = n(98)(Object.getPrototypeOf, Object);
    t.exports = r
}, function(t, e, n) {
    var r = n(96),
        i = n(280),
        o = n(12);
    t.exports = function(t) { return o(t) ? r(t, !0) : i(t) }
}, function(t, e, n) {
    var r = n(6),
        i = n(54),
        o = n(281),
        a = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (!r(t)) return o(t);
        var e = i(t),
            n = [];
        for (var u in t)("constructor" != u || !e && a.call(t, u)) && n.push(u);
        return n
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = [];
        if (null != t)
            for (var n in Object(t)) e.push(n);
        return e
    }
}, function(t, e, n) {
    var r = n(53),
        i = n(55),
        o = n(33),
        a = n(1),
        u = n(12),
        c = n(49),
        s = n(54),
        f = n(51),
        l = "[object Map]",
        d = "[object Set]",
        p = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (null == t) return !0;
        if (u(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || c(t) || f(t) || o(t))) return !t.length;
        var e = i(t);
        if (e == l || e == d) return !t.size;
        if (s(t)) return !r(t).length;
        for (var n in t)
            if (p.call(t, n)) return !1;
        return !0
    }
}, function(t, e, n) {
    var r = n(115),
        i = n(112),
        o = n(7);
    t.exports = function(t, e) { var n = {}; return e = o(e, 3), i(t, function(t, i, o) { r(n, i, e(t, i, o)) }), n }
}, function(t, e, n) {
    var r = n(285),
        i = n(111),
        o = n(286),
        a = n(1);
    t.exports = function(t, e) { return (a(t) ? r : i)(t, o(e)) }
}, function(t, e) { t.exports = function(t, e) { for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t);); return t } }, function(t, e, n) {
    var r = n(59);
    t.exports = function(t) { return "function" == typeof t ? t : r }
}, function(t, e, n) {
    var r = n(288),
        i = n(6),
        o = "Expected a function";
    t.exports = function(t, e, n) {
        var a = !0,
            u = !0;
        if ("function" != typeof t) throw new TypeError(o);
        return i(n) && (a = "leading" in n ? !!n.leading : a, u = "trailing" in n ? !!n.trailing : u), r(t, e, { leading: a, maxWait: e, trailing: u })
    }
}, function(t, e, n) {
    var r = n(6),
        i = n(289),
        o = n(60),
        a = "Expected a function",
        u = Math.max,
        c = Math.min;
    t.exports = function(t, e, n) {
        var s, f, l, d, p, v, h = 0,
            E = !1,
            g = !1,
            _ = !0;
        if ("function" != typeof t) throw new TypeError(a);

        function y(e) {
            var n = s,
                r = f;
            return s = f = void 0, h = e, d = t.apply(r, n)
        }

        function m(t) { var n = t - v; return void 0 === v || n >= e || n < 0 || g && t - h >= l }

        function I() {
            var t = i();
            if (m(t)) return T(t);
            p = setTimeout(I, function(t) { var n = e - (t - v); return g ? c(n, l - (t - h)) : n }(t))
        }

        function T(t) { return p = void 0, _ && s ? y(t) : (s = f = void 0, d) }

        function b() {
            var t = i(),
                n = m(t);
            if (s = arguments, f = this, v = t, n) { if (void 0 === p) return function(t) { return h = t, p = setTimeout(I, e), E ? y(t) : d }(v); if (g) return clearTimeout(p), p = setTimeout(I, e), y(v) }
            return void 0 === p && (p = setTimeout(I, e)), d
        }
        return e = o(e) || 0, r(n) && (E = !!n.leading, l = (g = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : l, _ = "trailing" in n ? !!n.trailing : _), b.cancel = function() { void 0 !== p && clearTimeout(p), h = 0, s = v = f = p = void 0 }, b.flush = function() { return void 0 === p ? d : T(i()) }, b
    }
}, function(t, e, n) {
    var r = n(4);
    t.exports = function() { return r.Date.now() }
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(21));
    Object.defineProperty(e, "__esModule", { value: !0 }), e.setStyle = function(t, e, n) { t.style[e] = n }, e.getStyle = function(t, e) { return t.style[e] }, e.getProperty = function(t, e) { return t[e] }, e.matchSelector = function(t) { return function(e) { return e[a](t) } }, e.getQuerySelector = function(t) {
        var e = t.id,
            n = t.selector;
        if (e) {
            var r = e;
            if (-1 !== e.indexOf(c)) {
                var i = e.split(c),
                    o = i[0];
                if (r = i[1], o !== document.documentElement.getAttribute(l)) return null
            }
            return '[data-w-id="'.concat(r, '"], [data-w-id^="').concat(r, '_instance"]')
        }
        return n
    }, e.getValidDocument = function(t) { if (null == t || t === document.documentElement.getAttribute(l)) return document; return null }, e.queryDocument = function(t, e) { return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t)) }, e.elementContains = function(t, e) { return t.contains(e) }, e.isSiblingNode = function(t, e) { return t !== e && t.parentNode === e.parentNode }, e.getChildElements = function(t) {
        for (var e = [], n = 0, r = (t || []).length; n < r; n++) {
            var i = t[n].children,
                o = i.length;
            if (o)
                for (var a = 0; a < o; a++) e.push(i[a])
        }
        return e
    }, e.getSiblingElements = function() { for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = [], r = 0, i = t.length; r < i; r++) { var o = t[r].parentNode; if (o && o.children && o.children.length && -1 === n.indexOf(o)) { n.push(o); for (var a = o.firstElementChild; null != a;) - 1 === t.indexOf(a) && e.push(a), a = a.nextElementSibling } } return e }, e.getRefType = function(t) { if (null != t && "object" == (0, r.default)(t)) return t instanceof Element ? s : f; return null }, e.getClosestElement = void 0;
    var i = n(10),
        o = n(2),
        a = i.IX2BrowserSupport.ELEMENT_MATCHES,
        u = o.IX2EngineConstants,
        c = u.IX2_ID_DELIMITER,
        s = u.HTML_ELEMENT,
        f = u.PLAIN_OBJECT,
        l = u.WF_PAGE;
    var d = Element.prototype.closest ? function(t, e) { return document.documentElement.contains(t) ? t.closest(e) : null } : function(t, e) {
        if (!document.documentElement.contains(t)) return null;
        var n = t;
        do {
            if (n[a] && n[a](e)) return n;
            n = n.parentNode
        } while (null != n);
        return null
    };
    e.getClosestElement = d
}, function(t, e, n) {
    "use strict";
    var r, i = n(0),
        o = i(n(26)),
        a = i(n(21)),
        u = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
    var c, s, f, l = u(n(27)),
        d = u(n(292)),
        p = u(n(56)),
        v = u(n(311)),
        h = n(2),
        E = n(114),
        g = n(61),
        _ = n(10),
        y = h.EventTypeConsts,
        m = y.MOUSE_CLICK,
        I = y.MOUSE_SECOND_CLICK,
        T = y.MOUSE_DOWN,
        b = y.MOUSE_UP,
        O = y.MOUSE_OVER,
        w = y.MOUSE_OUT,
        A = y.DROPDOWN_CLOSE,
        S = y.DROPDOWN_OPEN,
        x = y.SLIDER_ACTIVE,
        R = y.SLIDER_INACTIVE,
        N = y.TAB_ACTIVE,
        C = y.TAB_INACTIVE,
        L = y.NAVBAR_CLOSE,
        D = y.NAVBAR_OPEN,
        P = y.MOUSE_MOVE,
        M = y.PAGE_SCROLL_DOWN,
        j = y.SCROLL_INTO_VIEW,
        F = y.SCROLL_OUT_OF_VIEW,
        k = y.PAGE_SCROLL_UP,
        X = y.SCROLLING_IN_VIEW,
        G = y.PAGE_FINISH,
        V = y.ECOMMERCE_CART_CLOSE,
        U = y.ECOMMERCE_CART_OPEN,
        W = y.PAGE_START,
        B = y.PAGE_SCROLL,
        H = "COMPONENT_ACTIVE",
        z = "COMPONENT_INACTIVE",
        Y = h.IX2EngineConstants.COLON_DELIMITER,
        K = _.IX2VanillaUtils.getNamespacedParameterId,
        Q = function(t) { return function(e) { return !("object" !== (0, a.default)(e) || !t(e)) || e } },
        q = Q(function(t) { return t.element === t.nativeEvent.target }),
        $ = Q(function(t) {
            var e = t.element,
                n = t.nativeEvent;
            return e.contains(n.target)
        }),
        Z = (0, d.default)([q, $]),
        J = function(t, e) { if (e) { var n = t.getState().ixData.events[e]; if (n && !at[n.eventTypeId]) return n } return null },
        tt = function(t, e) {
            var n = t.store,
                r = t.event,
                i = t.element,
                o = t.eventStateKey,
                a = r.action,
                u = r.id,
                c = a.config,
                s = c.actionListId,
                f = c.autoStopEventId,
                l = J(n, f);
            return l && (0, E.stopActionGroup)({ store: n, eventId: f, eventTarget: i, eventStateKey: f + Y + o.split(Y)[1], actionListId: (0, p.default)(l, "action.config.actionListId") }), (0, E.stopActionGroup)({ store: n, eventId: u, eventTarget: i, eventStateKey: o, actionListId: s }), (0, E.startActionGroup)({ store: n, eventId: u, eventTarget: i, eventStateKey: o, actionListId: s }), e
        },
        et = function(t, e) { return function(n, r) { return !0 === t(n, r) ? e(n, r) : r } },
        nt = { handler: et(Z, tt) },
        rt = (0, l.default)({}, nt, { types: [H, z].join(" ") }),
        it = [{ target: window, types: "resize orientationchange", throttle: !0 }, { target: document, types: "scroll wheel readystatechange IX2_PAGE_UPDATE", throttle: !0 }],
        ot = { types: it },
        at = { PAGE_START: W, PAGE_FINISH: G },
        ut = (c = void 0 !== window.pageXOffset, s = "CSS1Compat" === document.compatMode ? document.documentElement : document.body, function() { return { scrollLeft: c ? window.pageXOffset : s.scrollLeft, scrollTop: c ? window.pageYOffset : s.scrollTop, stiffScrollTop: (0, v.default)(c ? window.pageYOffset : s.scrollTop, 0, s.scrollHeight - window.innerHeight), scrollWidth: s.scrollWidth, scrollHeight: s.scrollHeight, clientWidth: s.clientWidth, clientHeight: s.clientHeight, innerWidth: window.innerWidth, innerHeight: window.innerHeight } }),
        ct = function(t) {
            var e = t.element,
                n = t.nativeEvent,
                r = n.type,
                i = n.target,
                o = n.relatedTarget,
                a = e.contains(i);
            if ("mouseover" === r && a) return !0;
            var u = e.contains(o);
            return !("mouseout" !== r || !a || !u)
        },
        st = function(t) {
            var e, n, r = t.element,
                i = t.event.config,
                o = ut(),
                a = o.clientWidth,
                u = o.clientHeight,
                c = i.scrollOffsetValue,
                s = "PX" === i.scrollOffsetUnit ? c : u * (c || 0) / 100;
            return e = r.getBoundingClientRect(), n = { left: 0, top: s, right: a, bottom: u - s }, !(e.left > n.right || e.right < n.left || e.top > n.bottom || e.bottom < n.top)
        },
        ft = function(t) {
            return function(e, n) {
                var r = e.nativeEvent.type,
                    i = -1 !== [H, z].indexOf(r) ? r === H : n.isActive,
                    o = (0, l.default)({}, n, { isActive: i });
                return n && o.isActive === n.isActive ? o : t(e, o) || o
            }
        },
        lt = function(t) { return function(e, n) { var r = { elementHovered: ct(e) }; return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && t(e, r) || r } },
        dt = function(t) {
            return function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = ut(),
                    i = r.stiffScrollTop,
                    o = r.scrollHeight,
                    a = r.innerHeight,
                    u = e.event,
                    c = u.config,
                    s = u.eventTypeId,
                    f = c.scrollOffsetValue,
                    d = "PX" === c.scrollOffsetUnit,
                    p = o - a,
                    v = Number((i / p).toFixed(2));
                if (n && n.percentTop === v) return n;
                var h, E, g = (d ? f : a * (f || 0) / 100) / p,
                    _ = 0;
                n && (h = v > n.percentTop, _ = (E = n.scrollingDown !== h) ? v : n.anchorTop);
                var y = s === M ? v >= _ + g : v <= _ - g,
                    m = (0, l.default)({}, n, { percentTop: v, inBounds: y, anchorTop: _, scrollingDown: h });
                return n && y && (E || m.inBounds !== n.inBounds) && t(e, m) || m
            }
        },
        pt = function(t) {
            return function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { clickCount: 0 },
                    r = { clickCount: n.clickCount % 2 + 1 };
                return r.clickCount !== n.clickCount && t(e, r) || r
            }
        },
        vt = function() { var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; return (0, l.default)({}, rt, { handler: et(t ? Z : q, ft(function(t, e) { return e.isActive ? nt.handler(t, e) : e })) }) },
        ht = function() { var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; return (0, l.default)({}, rt, { handler: et(t ? Z : q, ft(function(t, e) { return e.isActive ? e : nt.handler(t, e) })) }) },
        Et = (0, l.default)({}, ot, {
            handler: (f = function(t, e) {
                var n = e.elementVisible,
                    r = t.event;
                return !t.store.getState().ixData.events[r.action.config.autoStopEventId] && e.triggered ? e : r.eventTypeId === j === n ? (tt(t), (0, l.default)({}, e, { triggered: !0 })) : e
            }, function(t, e) { var n = (0, l.default)({}, e, { elementVisible: st(t) }); return (e ? n.elementVisible !== e.elementVisible : n.elementVisible) && f(t, n) || n })
        }),
        gt = (r = {}, (0, o.default)(r, x, vt()), (0, o.default)(r, R, ht()), (0, o.default)(r, S, vt()), (0, o.default)(r, A, ht()), (0, o.default)(r, D, vt(!1)), (0, o.default)(r, L, ht(!1)), (0, o.default)(r, N, vt()), (0, o.default)(r, C, ht()), (0, o.default)(r, U, { types: "ecommerce-cart-open", handler: et(Z, tt) }), (0, o.default)(r, V, { types: "ecommerce-cart-close", handler: et(Z, tt) }), (0, o.default)(r, m, {
            types: "click",
            handler: et(Z, pt(function(t, e) {
                var n, r, i, o = e.clickCount;
                r = (n = t).store, i = n.event.action.config.autoStopEventId, Boolean(J(r, i)) ? 1 === o && tt(t) : tt(t)
            }))
        }), (0, o.default)(r, I, { types: "click", handler: et(Z, pt(function(t, e) { 2 === e.clickCount && tt(t) })) }), (0, o.default)(r, T, (0, l.default)({}, nt, { types: "mousedown" })), (0, o.default)(r, b, (0, l.default)({}, nt, { types: "mouseup" })), (0, o.default)(r, O, { types: "mouseover mouseout", handler: et(Z, lt(function(t, e) { e.elementHovered && tt(t) })) }), (0, o.default)(r, w, { types: "mouseover mouseout", handler: et(Z, lt(function(t, e) { e.elementHovered || tt(t) })) }), (0, o.default)(r, P, {
            types: "mousemove mouseout scroll",
            handler: function(t) {
                var e = t.store,
                    n = t.element,
                    r = t.eventConfig,
                    i = t.nativeEvent,
                    o = t.eventStateKey,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
                    u = r.basedOn,
                    c = r.selectedAxis,
                    s = r.continuousParameterGroupId,
                    f = r.reverse,
                    l = r.restingState,
                    d = void 0 === l ? 0 : l,
                    p = i.clientX,
                    v = void 0 === p ? a.clientX : p,
                    E = i.clientY,
                    _ = void 0 === E ? a.clientY : E,
                    y = i.pageX,
                    m = void 0 === y ? a.pageX : y,
                    I = i.pageY,
                    T = void 0 === I ? a.pageY : I,
                    b = "X_AXIS" === c,
                    O = "mouseout" === i.type,
                    w = d / 100,
                    A = s,
                    S = !1;
                switch (u) {
                    case h.EventBasedOn.VIEWPORT:
                        w = b ? Math.min(v, window.innerWidth) / window.innerWidth : Math.min(_, window.innerHeight) / window.innerHeight;
                        break;
                    case h.EventBasedOn.PAGE:
                        var x = ut(),
                            R = x.scrollLeft,
                            N = x.scrollTop,
                            C = x.scrollWidth,
                            L = x.scrollHeight;
                        w = b ? Math.min(R + m, C) / C : Math.min(N + T, L) / L;
                        break;
                    case h.EventBasedOn.ELEMENT:
                    default:
                        A = K(o, s);
                        var D = 0 === i.type.indexOf("mouse");
                        if (D && !0 !== Z({ element: n, nativeEvent: i })) break;
                        var P = n.getBoundingClientRect(),
                            M = P.left,
                            j = P.top,
                            F = P.width,
                            k = P.height;
                        if (!D && ! function(t, e) { return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom }({ left: v, top: _ }, P)) break;
                        S = !0, w = b ? (v - M) / F : (_ - j) / k
                }
                return O && (w > .95 || w < .05) && (w = Math.round(w)), (u !== h.EventBasedOn.ELEMENT || S || S !== a.elementHovered) && (w = f ? 1 - w : w, e.dispatch((0, g.parameterChanged)(A, w))), { elementHovered: S, clientX: v, clientY: _, pageX: m, pageY: T }
            }
        }), (0, o.default)(r, B, {
            types: it,
            handler: function(t) {
                var e = t.store,
                    n = t.eventConfig,
                    r = n.continuousParameterGroupId,
                    i = n.reverse,
                    o = ut(),
                    a = o.scrollTop / (o.scrollHeight - o.clientHeight);
                a = i ? 1 - a : a, e.dispatch((0, g.parameterChanged)(r, a))
            }
        }), (0, o.default)(r, X, {
            types: it,
            handler: function(t) {
                var e = t.element,
                    n = t.store,
                    r = t.eventConfig,
                    i = t.eventStateKey,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollPercent: 0 },
                    a = ut(),
                    u = a.scrollLeft,
                    c = a.scrollTop,
                    s = a.scrollWidth,
                    f = a.scrollHeight,
                    l = a.clientHeight,
                    d = r.basedOn,
                    p = r.selectedAxis,
                    v = r.continuousParameterGroupId,
                    E = r.startsEntering,
                    _ = r.startsExiting,
                    y = r.addEndOffset,
                    m = r.addStartOffset,
                    I = r.addOffsetValue,
                    T = void 0 === I ? 0 : I,
                    b = r.endOffsetValue,
                    O = void 0 === b ? 0 : b,
                    w = "X_AXIS" === p;
                if (d === h.EventBasedOn.VIEWPORT) { var A = w ? u / s : c / f; return A !== o.scrollPercent && n.dispatch((0, g.parameterChanged)(v, A)), { scrollPercent: A } }
                var S = K(i, v),
                    x = e.getBoundingClientRect(),
                    R = (m ? T : 0) / 100,
                    N = (y ? O : 0) / 100;
                R = E ? R : 1 - R, N = _ ? N : 1 - N;
                var C = x.top + Math.min(x.height * R, l),
                    L = x.top + x.height * N - C,
                    D = Math.min(l + L, f),
                    P = Math.min(Math.max(0, l - C), D) / D;
                return P !== o.scrollPercent && n.dispatch((0, g.parameterChanged)(S, P)), { scrollPercent: P }
            }
        }), (0, o.default)(r, j, Et), (0, o.default)(r, F, Et), (0, o.default)(r, M, (0, l.default)({}, ot, { handler: dt(function(t, e) { e.scrollingDown && tt(t) }) })), (0, o.default)(r, k, (0, l.default)({}, ot, { handler: dt(function(t, e) { e.scrollingDown || tt(t) }) })), (0, o.default)(r, G, { types: "readystatechange IX2_PAGE_UPDATE", handler: et(q, function(t) { return function(e, n) { var r = { finished: "complete" === document.readyState }; return !r.finished || n && n.finshed || t(e), r } }(tt)) }), (0, o.default)(r, W, { types: "readystatechange IX2_PAGE_UPDATE", handler: et(q, function(t) { return function(e, n) { return n || t(e), { started: !0 } } }(tt)) }), r);
    e.default = gt
}, function(t, e, n) {
    var r = n(293)();
    t.exports = r
}, function(t, e, n) {
    var r = n(62),
        i = n(294),
        o = n(118),
        a = n(119),
        u = n(1),
        c = n(307),
        s = "Expected a function",
        f = 8,
        l = 32,
        d = 128,
        p = 256;
    t.exports = function(t) {
        return i(function(e) {
            var n = e.length,
                i = n,
                v = r.prototype.thru;
            for (t && e.reverse(); i--;) { var h = e[i]; if ("function" != typeof h) throw new TypeError(s); if (v && !E && "wrapper" == a(h)) var E = new r([], !0) }
            for (i = E ? i : n; ++i < n;) {
                h = e[i];
                var g = a(h),
                    _ = "wrapper" == g ? o(h) : void 0;
                E = _ && c(_[0]) && _[1] == (d | f | l | p) && !_[4].length && 1 == _[9] ? E[a(_[0])].apply(E, _[3]) : 1 == h.length && c(h) ? E[g]() : E.thru(h)
            }
            return function() {
                var t = arguments,
                    r = t[0];
                if (E && 1 == t.length && u(r)) return E.plant(r).value();
                for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) o = e[i].call(this, o);
                return o
            }
        })
    }
}, function(t, e, n) {
    var r = n(295),
        i = n(298),
        o = n(300);
    t.exports = function(t) { return o(i(t, void 0, r), t + "") }
}, function(t, e, n) {
    var r = n(296);
    t.exports = function(t) { return null != t && t.length ? r(t, 1) : [] }
}, function(t, e, n) {
    var r = n(48),
        i = n(297);
    t.exports = function t(e, n, o, a, u) {
        var c = -1,
            s = e.length;
        for (o || (o = i), u || (u = []); ++c < s;) {
            var f = e[c];
            n > 0 && o(f) ? n > 1 ? t(f, n - 1, o, a, u) : r(u, f) : a || (u[u.length] = f)
        }
        return u
    }
}, function(t, e, n) {
    var r = n(19),
        i = n(33),
        o = n(1),
        a = r ? r.isConcatSpreadable : void 0;
    t.exports = function(t) { return o(t) || i(t) || !!(a && t && t[a]) }
}, function(t, e, n) {
    var r = n(299),
        i = Math.max;
    t.exports = function(t, e, n) {
        return e = i(void 0 === e ? t.length - 1 : e, 0),
            function() {
                for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u;) c[a] = o[e + a];
                a = -1;
                for (var s = Array(e + 1); ++a < e;) s[a] = o[a];
                return s[e] = n(c), r(t, this, s)
            }
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        switch (n.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2])
        }
        return t.apply(e, n)
    }
}, function(t, e, n) {
    var r = n(301),
        i = n(303)(r);
    t.exports = i
}, function(t, e, n) {
    var r = n(302),
        i = n(116),
        o = n(59),
        a = i ? function(t, e) { return i(t, "toString", { configurable: !0, enumerable: !1, value: r(e), writable: !0 }) } : o;
    t.exports = a
}, function(t, e) { t.exports = function(t) { return function() { return t } } }, function(t, e) {
    var n = 800,
        r = 16,
        i = Date.now;
    t.exports = function(t) {
        var e = 0,
            o = 0;
        return function() {
            var a = i(),
                u = r - (a - o);
            if (o = a, u > 0) { if (++e >= n) return arguments[0] } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
}, function(t, e, n) {
    var r = n(99),
        i = r && new r;
    t.exports = i
}, function(t, e) { t.exports = function() {} }, function(t, e) { t.exports = {} }, function(t, e, n) {
    var r = n(64),
        i = n(118),
        o = n(119),
        a = n(308);
    t.exports = function(t) {
        var e = o(t),
            n = a[e];
        if ("function" != typeof n || !(e in r.prototype)) return !1;
        if (t === n) return !0;
        var u = i(n);
        return !!u && t === u[0]
    }
}, function(t, e, n) {
    var r = n(64),
        i = n(62),
        o = n(63),
        a = n(1),
        u = n(9),
        c = n(309),
        s = Object.prototype.hasOwnProperty;

    function f(t) { if (u(t) && !a(t) && !(t instanceof r)) { if (t instanceof i) return t; if (s.call(t, "__wrapped__")) return c(t) } return new i(t) }
    f.prototype = o.prototype, f.prototype.constructor = f, t.exports = f
}, function(t, e, n) {
    var r = n(64),
        i = n(62),
        o = n(310);
    t.exports = function(t) { if (t instanceof r) return t.clone(); var e = new i(t.__wrapped__, t.__chain__); return e.__actions__ = o(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e }
}, function(t, e) {
    t.exports = function(t, e) {
        var n = -1,
            r = t.length;
        for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
        return e
    }
}, function(t, e, n) {
    var r = n(312),
        i = n(60);
    t.exports = function(t, e, n) { return void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = i(n)) == n ? n : 0), void 0 !== e && (e = (e = i(e)) == e ? e : 0), r(i(t), e, n) }
}, function(t, e) { t.exports = function(t, e, n) { return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t } }, function(t, e, n) {
    "use strict";
    var r = n(5);
    r.define("links", t.exports = function(t, e) {
        var n, i, o, a = {},
            u = t(window),
            c = r.env(),
            s = window.location,
            f = document.createElement("a"),
            l = "w--current",
            d = /index\.(html|php)$/,
            p = /\/$/;

        function v(e) {
            var r = n && e.getAttribute("href-disabled") || e.getAttribute("href");
            if (f.href = r, !(r.indexOf(":") >= 0)) {
                var a = t(e);
                if (f.hash.length > 1 && f.host + f.pathname === s.host + s.pathname) {
                    if (!/^#[a-zA-Z0-9\-\_]+$/.test(f.hash)) return;
                    var u = t(f.hash);
                    u.length && i.push({ link: a, sec: u, active: !1 })
                } else if ("#" !== r && "" !== r) {
                    var c = f.href === s.href || r === o || d.test(r) && p.test(o);
                    E(a, l, c)
                }
            }
        }

        function h() {
            var t = u.scrollTop(),
                n = u.height();
            e.each(i, function(e) {
                var r = e.link,
                    i = e.sec,
                    o = i.offset().top,
                    a = i.outerHeight(),
                    u = .5 * n,
                    c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
                e.active !== c && (e.active = c, E(r, l, c))
            })
        }

        function E(t, e, n) {
            var r = t.hasClass(e);
            n && r || (n || r) && (n ? t.addClass(e) : t.removeClass(e))
        }
        return a.ready = a.design = a.preview = function() {
            n = c && r.env("design"), o = r.env("slug") || s.pathname || "", r.scroll.off(h), i = [];
            for (var t = document.links, e = 0; e < t.length; ++e) v(t[e]);
            i.length && (r.scroll.on(h), h())
        }, a
    })
}, function(t, e, n) {
    "use strict";
    var r = n(5);
    r.define("scroll", t.exports = function(t) {
        var e = { WF_CLICK_EMPTY: "click.wf-empty-link", WF_CLICK_SCROLL: "click.wf-scroll" },
            n = window.location,
            i = function() { try { return Boolean(window.frameElement) } catch (t) { return !0 } }() ? null : window.history,
            o = t(window),
            a = t(document),
            u = t(document.body),
            c = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(t) { window.setTimeout(t, 15) },
            s = r.env("editor") ? ".w-editor-body" : "body",
            f = "header, " + s + " > .header, " + s + " > .w-nav:not([data-no-scroll])",
            l = 'a[href="#"]',
            d = 'a[href*="#"]:not(.w-tab-link):not(' + l + ")";
        var p = /^#[a-zA-Z0-9][\w:.-]*$/;

        function v(e) {
            var a = e.currentTarget;
            if (!(r.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(a.className))) {
                var s, l = (s = a, p.test(s.hash) && s.host + s.pathname === n.host + n.pathname ? a.hash : "");
                if ("" !== l) {
                    var d = t(l);
                    d.length && (e && (e.preventDefault(), e.stopPropagation()), function(t) {
                        if (n.hash !== t && i && i.pushState && (!r.env.chrome || "file:" !== n.protocol)) {
                            var e = i.state && i.state.hash;
                            e !== t && i.pushState({ hash: t }, "", t)
                        }
                    }(l), window.setTimeout(function() {
                        ! function(e) {
                            var n = o.scrollTop(),
                                r = function(e) {
                                    var n = t(f),
                                        r = "fixed" === n.css("position") ? n.outerHeight() : 0,
                                        i = e.offset().top - r;
                                    if ("mid" === e.data("scroll")) {
                                        var a = o.height() - r,
                                            u = e.outerHeight();
                                        u < a && (i -= Math.round((a - u) / 2))
                                    }
                                    return i
                                }(e);
                            if (n === r) return;
                            var i = function(t, e, n) { if (document.body.hasAttribute("data-wf-reduce-scroll-motion") && ("none" === document.body.getAttribute("data-wf-scroll-motion") || "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return 0; var r = 1; return u.add(t).each(function(t, e) { var n = parseFloat(e.getAttribute("data-scroll-time"));!isNaN(n) && n >= 0 && (r = n) }), (472.143 * Math.log(Math.abs(e - n) + 125) - 2e3) * r }(e, n, r),
                                a = Date.now();
                            c(function t() {
                                var e = Date.now() - a;
                                window.scroll(0, function(t, e, n, r) { return n > r ? e : t + (e - t) * ((i = n / r) < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1); var i }(n, r, e, i)), e <= i && c(t)
                            })
                        }(d)
                    }, e ? 0 : 300))
                }
            }
        }
        return {
            ready: function() {
                var t = e.WF_CLICK_EMPTY,
                    n = e.WF_CLICK_SCROLL;
                a.on(n, d, v), a.on(t, l, function(t) { t.preventDefault() })
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    n(5).define("touch", t.exports = function(t) {
        var e = {},
            n = window.getSelection;

        function r(e) {
            var r, i, o = !1,
                a = !1,
                u = Math.min(Math.round(.04 * window.innerWidth), 40);

            function c(t) {
                var e = t.touches;
                e && e.length > 1 || (o = !0, e ? (a = !0, r = e[0].clientX) : r = t.clientX, i = r)
            }

            function s(e) {
                if (o) {
                    if (a && "mousemove" === e.type) return e.preventDefault(), void e.stopPropagation();
                    var r = e.touches,
                        c = r ? r[0].clientX : e.clientX,
                        s = c - i;
                    i = c, Math.abs(s) > u && n && "" === String(n()) && (! function(e, n, r) {
                        var i = t.Event(e, { originalEvent: n });
                        t(n.target).trigger(i, r)
                    }("swipe", e, { direction: s > 0 ? "right" : "left" }), l())
                }
            }

            function f(t) { if (o) return o = !1, a && "mouseup" === t.type ? (t.preventDefault(), t.stopPropagation(), void(a = !1)) : void 0 }

            function l() { o = !1 }
            e.addEventListener("touchstart", c, !1), e.addEventListener("touchmove", s, !1), e.addEventListener("touchend", f, !1), e.addEventListener("touchcancel", l, !1), e.addEventListener("mousedown", c, !1), e.addEventListener("mousemove", s, !1), e.addEventListener("mouseup", f, !1), e.addEventListener("mouseout", l, !1), this.destroy = function() { e.removeEventListener("touchstart", c, !1), e.removeEventListener("touchmove", s, !1), e.removeEventListener("touchend", f, !1), e.removeEventListener("touchcancel", l, !1), e.removeEventListener("mousedown", c, !1), e.removeEventListener("mousemove", s, !1), e.removeEventListener("mouseup", f, !1), e.removeEventListener("mouseout", l, !1), e = null }
        }
        return t.event.special.tap = { bindType: "click", delegateType: "click" }, e.init = function(e) { return (e = "string" == typeof e ? t(e).get(0) : e) ? new r(e) : null }, e.instance = e.init(document), e
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(317)),
        i = n(5);
    i.define("forms", t.exports = function(t, e) {
        var n, o, a, u, c, s = {},
            f = t(document),
            l = window.location,
            d = window.XDomainRequest && !window.atob,
            p = ".w-form",
            v = /e(-)?mail/i,
            h = /^\S+@\S+$/,
            E = window.alert,
            g = i.env(),
            _ = /list-manage[1-9]?.com/i,
            y = e.debounce(function() { E("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.") }, 100);

        function m(e, n) {
            var r = t(n),
                i = t.data(n, p);
            i || (i = t.data(n, p, { form: r })), I(i);
            var a = r.closest("div.w-form");
            i.done = a.find("> .w-form-done"), i.fail = a.find("> .w-form-fail"), i.fileUploads = a.find(".w-file-upload"), i.fileUploads.each(function(e) {
                ! function(e, n) {
                    if (!n.fileUploads || !n.fileUploads[e]) return;
                    var r, i = t(n.fileUploads[e]),
                        o = i.find("> .w-file-upload-default"),
                        a = i.find("> .w-file-upload-uploading"),
                        u = i.find("> .w-file-upload-success"),
                        s = i.find("> .w-file-upload-error"),
                        f = o.find(".w-file-upload-input"),
                        l = o.find(".w-file-upload-label"),
                        d = l.children(),
                        p = s.find(".w-file-upload-error-msg"),
                        v = u.find(".w-file-upload-file"),
                        h = u.find(".w-file-remove-link"),
                        E = v.find(".w-file-upload-file-name"),
                        _ = p.attr("data-w-size-error"),
                        y = p.attr("data-w-type-error"),
                        m = p.attr("data-w-generic-error");
                    if (g) f.on("click", function(t) { t.preventDefault() }), l.on("click", function(t) { t.preventDefault() }), d.on("click", function(t) { t.preventDefault() });
                    else {
                        h.on("click", function() { f.removeAttr("data-value"), f.val(""), E.html(""), o.toggle(!0), u.toggle(!1) }), f.on("change", function(i) {
                            (r = i.target && i.target.files && i.target.files[0]) && (o.toggle(!1), s.toggle(!1), a.toggle(!0), E.text(r.name), S() || T(n), n.fileUploads[e].uploading = !0, function(e, n) {
                                var r = { name: e.name, size: e.size };
                                t.ajax({ type: "POST", url: c, data: r, dataType: "json", crossDomain: !0 }).done(function(t) { n(null, t) }).fail(function(t) { n(t) })
                            }(r, w))
                        });
                        var b = l.outerHeight();
                        f.height(b), f.width(1)
                    }

                    function O(t) {
                        var r = t.responseJSON && t.responseJSON.msg,
                            i = m;
                        "string" == typeof r && 0 === r.indexOf("InvalidFileTypeError") ? i = y : "string" == typeof r && 0 === r.indexOf("MaxFileSizeError") && (i = _), p.text(i), f.removeAttr("data-value"), f.val(""), a.toggle(!1), o.toggle(!0), s.toggle(!0), n.fileUploads[e].uploading = !1, S() || I(n)
                    }

                    function w(e, n) {
                        if (e) return O(e);
                        var i = n.fileName,
                            o = n.postData,
                            a = n.fileId,
                            u = n.s3Url;
                        f.attr("data-value", a),
                            function(e, n, r, i, o) {
                                var a = new FormData;
                                for (var u in n) a.append(u, n[u]);
                                a.append("file", r, i), t.ajax({ type: "POST", url: e, data: a, processData: !1, contentType: !1 }).done(function() { o(null) }).fail(function(t) { o(t) })
                            }(u, o, r, i, A)
                    }

                    function A(t) {
                        if (t) return O(t);
                        a.toggle(!1), u.css("display", "inline-block"), n.fileUploads[e].uploading = !1, S() || I(n)
                    }

                    function S() { var t = n.fileUploads && n.fileUploads.toArray() || []; return t.some(function(t) { return t.uploading }) }
                }(e, i)
            });
            var u = i.action = r.attr("action");
            i.handler = null, i.redirect = r.attr("data-redirect"), _.test(u) ? i.handler = w : u || (o ? i.handler = O : y())
        }

        function I(t) {
            var e = t.btn = t.form.find(':input[type="submit"]');
            t.wait = t.btn.attr("data-wait") || null, t.success = !1, e.prop("disabled", !1), t.label && e.val(t.label)
        }

        function T(t) {
            var e = t.btn,
                n = t.wait;
            e.prop("disabled", !0), n && (t.label = e.val(), e.val(n))
        }

        function b(e, n) {
            var r = null;
            return n = n || {}, e.find(':input:not([type="submit"]):not([type="file"])').each(function(i, o) {
                var a = t(o),
                    u = a.attr("type"),
                    c = a.attr("data-name") || a.attr("name") || "Field " + (i + 1),
                    s = a.val();
                if ("checkbox" === u) s = a.is(":checked");
                else if ("radio" === u) {
                    if (null === n[c] || "string" == typeof n[c]) return;
                    s = e.find('input[name="' + a.attr("name") + '"]:checked').val() || null
                }
                "string" == typeof s && (s = t.trim(s)), n[c] = s, r = r || function(t, e, n, r) { var i = null; "password" === e ? i = "Passwords cannot be submitted." : t.attr("required") ? r ? v.test(t.attr("type")) && (h.test(r) || (i = "Please enter a valid email address for: " + n)) : i = "Please fill out the required field: " + n : "g-recaptcha-response" !== n || r || (i = "Please confirm youâ€™re not a robot."); return i }(a, u, c, s)
            }), r
        }

        function O(e) {
            I(e);
            var n = e.form,
                r = { name: n.attr("data-name") || n.attr("name") || "Untitled Form", source: l.href, test: i.env(), fields: {}, fileUploads: {}, dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(n.html()) };
            S(e);
            var a = b(n, r.fields);
            if (a) return E(a);
            r.fileUploads = function(e) {
                var n = {};
                return e.find(':input[type="file"]').each(function(e, r) {
                    var i = t(r),
                        o = i.attr("data-name") || i.attr("name") || "File " + (e + 1),
                        a = i.attr("data-value");
                    "string" == typeof a && (a = t.trim(a)), n[o] = a
                }), n
            }(n), T(e), o ? t.ajax({ url: u, type: "POST", data: r, dataType: "json", crossDomain: !0 }).done(function(t) { t && 200 === t.code && (e.success = !0), A(e) }).fail(function() { A(e) }) : A(e)
        }

        function w(n) {
            I(n);
            var r = n.form,
                i = {};
            if (!/^https/.test(l.href) || /^https/.test(n.action)) {
                S(n);
                var o, a = b(r, i);
                if (a) return E(a);
                T(n), e.each(i, function(t, e) { v.test(e) && (i.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (o = t), /^(first[ _-]?name)$/i.test(e) && (i.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (i.LNAME = t) }), o && !i.FNAME && (o = o.split(" "), i.FNAME = o[0], i.LNAME = i.LNAME || o[1]);
                var u = n.action.replace("/post?", "/post-json?") + "&c=?",
                    c = u.indexOf("u=") + 2;
                c = u.substring(c, u.indexOf("&", c));
                var s = u.indexOf("id=") + 3;
                s = u.substring(s, u.indexOf("&", s)), i["b_" + c + "_" + s] = "", t.ajax({ url: u, data: i, dataType: "jsonp" }).done(function(t) { n.success = "success" === t.result || /already/.test(t.msg), n.success || console.info("MailChimp error: " + t.msg), A(n) }).fail(function() { A(n) })
            } else r.attr("method", "post")
        }

        function A(t) {
            var e = t.form,
                n = t.redirect,
                r = t.success;
            r && n ? i.location(n) : (t.done.toggle(r), t.fail.toggle(!r), e.toggle(!r), I(t))
        }

        function S(t) { t.evt && t.evt.preventDefault(), t.evt = null }
        return s.ready = s.design = s.preview = function() {
            ! function() {
                o = t("html").attr("data-wf-site"), u = "https://webflow.com/api/v1/form/" + o, d && u.indexOf("https://webflow.com") >= 0 && (u = u.replace("https://webflow.com", "http://formdata.webflow.com"));
                if (c = "".concat(u, "/signFile"), !(n = t(p + " form")).length) return;
                n.each(m)
            }(), g || a || function() {
                a = !0, f.on("submit", p + " form", function(e) {
                    var n = t.data(this, p);
                    n.handler && (n.evt = e, n.handler(n))
                });
                var e = [
                    ["checkbox", ".w-checkbox-input"],
                    ["radio", ".w-radio-input"]
                ];
                f.on("change", p + ' form input[type="checkbox"]:not(.w-checkbox-input)', function(e) { t(e.target).siblings(".w-checkbox-input").toggleClass("w--redirected-checked") }), f.on("change", p + ' form input[type="radio"]', function(e) {
                    t('input[name="'.concat(e.target.name, '"]:not(').concat(".w-checkbox-input", ")")).map(function(e, n) { return t(n).siblings(".w-radio-input").removeClass("w--redirected-checked") });
                    var n = t(e.target);
                    n.hasClass("w-radio-input") || n.siblings(".w-radio-input").addClass("w--redirected-checked")
                }), e.forEach(function(e) {
                    var n = (0, r.default)(e, 2),
                        i = n[0],
                        o = n[1];
                    f.on("focus", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function(e) { t(e.target).siblings(o).addClass("w--redirected-focus") }), f.on("blur", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function(e) { t(e.target).siblings(o).removeClass("w--redirected-focus") })
                })
            }()
        }, s
    })
}, function(t, e, n) {
    var r = n(318),
        i = n(319),
        o = n(320);
    t.exports = function(t, e) { return r(t) || i(t, e) || o() }
}, function(t, e) { t.exports = function(t) { if (Array.isArray(t)) return t } }, function(t, e) {
    t.exports = function(t, e) {
        var n = [],
            r = !0,
            i = !1,
            o = void 0;
        try { for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0); } catch (t) { i = !0, o = t } finally { try { r || null == u.return || u.return() } finally { if (i) throw o } }
        return n
    }
}, function(t, e) { t.exports = function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") } }, function(t, e, n) {
    "use strict";
    var r = n(5),
        i = n(36),
        o = { ARROW_LEFT: 37, ARROW_UP: 38, ARROW_RIGHT: 39, ARROW_DOWN: 40, ESCAPE: 27, SPACE: 32, ENTER: 13, HOME: 36, END: 35 };
    r.define("navbar", t.exports = function(t, e) {
        var n, a, u, c, s = {},
            f = t.tram,
            l = t(window),
            d = t(document),
            p = e.debounce,
            v = r.env(),
            h = '<div class="w-nav-overlay" data-wf-ignore />',
            E = ".w-nav",
            g = "w--open",
            _ = "w--nav-dropdown-open",
            y = "w--nav-dropdown-toggle-open",
            m = "w--nav-dropdown-list-open",
            I = "w--nav-link-open",
            T = i.triggers,
            b = t();

        function O() { r.resize.off(w) }

        function w() { a.each(M) }

        function A(n, r) {
            var i = t(r),
                a = t.data(r, E);
            a || (a = t.data(r, E, { open: !1, el: i, config: {}, selectedIdx: -1 })), a.menu = i.find(".w-nav-menu"), a.links = a.menu.find(".w-nav-link"), a.dropdowns = a.menu.find(".w-dropdown"), a.dropdownToggle = a.menu.find(".w-dropdown-toggle"), a.dropdownList = a.menu.find(".w-dropdown-list"), a.button = i.find(".w-nav-button"), a.container = i.find(".w-container"), a.overlayContainerId = "w-nav-overlay-" + n, a.outside = function(e) {
                e.outside && d.off("click" + E, e.outside);
                return function(n) {
                    var r = t(n.target);
                    c && r.closest(".w-editor-bem-EditorOverlay").length || P(e, r)
                }
            }(a);
            var s = i.find(".w-nav-brand");
            s && "/" === s.attr("href") && null == s.attr("aria-label") && s.attr("aria-label", "home"), a.button.attr("style", "-webkit-user-select: text;"), null == a.button.attr("aria-label") && a.button.attr("aria-label", "menu"), a.button.attr("role", "button"), a.button.attr("tabindex", "0"), a.button.attr("aria-controls", a.overlayContainerId), a.button.attr("aria-haspopup", "menu"), a.button.attr("aria-expanded", "false"), a.el.off(E), a.button.off(E), a.menu.off(E), R(a), u ? (x(a), a.el.on("setting" + E, function(t) {
                return function(n, r) {
                    r = r || {};
                    var i = l.width();
                    R(t), !0 === r.open && X(t, !0), !1 === r.open && V(t, !0), t.open && e.defer(function() { i !== l.width() && C(t) })
                }
            }(a))) : (! function(e) {
                if (e.overlay) return;
                e.overlay = t(h).appendTo(e.el), e.overlay.attr("id", e.overlayContainerId), e.parent = e.menu.parent(), V(e, !0)
            }(a), a.button.on("click" + E, L(a)), a.menu.on("click" + E, "a", D(a)), a.button.on("keydown" + E, function(t) {
                return function(e) {
                    switch (e.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                            return L(t)(), e.preventDefault(), e.stopPropagation();
                        case o.ESCAPE:
                            return V(t), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                        case o.HOME:
                        case o.END:
                            return t.open ? (e.keyCode === o.END ? t.selectedIdx = t.links.length - 1 : t.selectedIdx = 0, N(t), e.preventDefault(), e.stopPropagation()) : (e.preventDefault(), e.stopPropagation())
                    }
                }
            }(a)), a.el.on("keydown" + E, function(t) {
                return function(e) {
                    if (t.open) switch (t.selectedIdx = t.links.index(document.activeElement), e.keyCode) {
                        case o.HOME:
                        case o.END:
                            return e.keyCode === o.END ? t.selectedIdx = t.links.length - 1 : t.selectedIdx = 0, N(t), e.preventDefault(), e.stopPropagation();
                        case o.ESCAPE:
                            return V(t), t.button.focus(), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_LEFT:
                        case o.ARROW_UP:
                            return t.selectedIdx = Math.max(-1, t.selectedIdx - 1), N(t), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                            return t.selectedIdx = Math.min(t.links.length - 1, t.selectedIdx + 1), N(t), e.preventDefault(), e.stopPropagation()
                    }
                }
            }(a))), M(n, r)
        }

        function S(e, n) {
            var r = t.data(n, E);
            r && (x(r), t.removeData(n, E))
        }

        function x(t) { t.overlay && (V(t, !0), t.overlay.remove(), t.overlay = null) }

        function R(t) {
            var n = {},
                r = t.config || {},
                i = n.animation = t.el.attr("data-animation") || "default";
            n.animOver = /^over/.test(i), n.animDirect = /left$/.test(i) ? -1 : 1, r.animation !== i && t.open && e.defer(C, t), n.easing = t.el.attr("data-easing") || "ease", n.easing2 = t.el.attr("data-easing2") || "ease";
            var o = t.el.attr("data-duration");
            n.duration = null != o ? Number(o) : 400, n.docHeight = t.el.attr("data-doc-height"), t.config = n
        }

        function N(t) {
            if (t.links[t.selectedIdx]) {
                var e = t.links[t.selectedIdx];
                e.focus(), D(e)
            }
        }

        function C(t) { t.open && (V(t, !0), X(t, !0)) }

        function L(t) { return p(function() { t.open ? V(t) : X(t) }) }

        function D(e) {
            return function(n) {
                var i = t(this).attr("href");
                r.validClick(n.currentTarget) ? i && 0 === i.indexOf("#") && e.open && V(e) : n.preventDefault()
            }
        }
        s.ready = s.design = s.preview = function() {
            if (u = v && r.env("design"), c = r.env("editor"), n = t(document.body), !(a = d.find(E)).length) return;
            a.each(A), O(), r.resize.on(w)
        }, s.destroy = function() { b = t(), O(), a && a.length && a.each(S) };
        var P = p(function(t, e) {
            if (t.open) {
                var n = e.closest(".w-nav-menu");
                t.menu.is(n) || V(t)
            }
        });

        function M(e, n) {
            var r = t.data(n, E),
                i = r.collapsed = "none" !== r.button.css("display");
            if (!r.open || i || u || V(r, !0), r.container.length) {
                var o = function(e) {
                    var n = e.container.css(j);
                    "none" === n && (n = "");
                    return function(e, r) {
                        (r = t(r)).css(j, ""), "none" === r.css(j) && r.css(j, n)
                    }
                }(r);
                r.links.each(o), r.dropdowns.each(o)
            }
            r.open && G(r)
        }
        var j = "max-width";

        function F(t, e) { e.setAttribute("data-nav-menu-open", "") }

        function k(t, e) { e.removeAttribute("data-nav-menu-open") }

        function X(t, e) {
            if (!t.open) {
                t.open = !0, t.menu.each(F), t.links.addClass(I), t.dropdowns.addClass(_), t.dropdownToggle.addClass(y), t.dropdownList.addClass(m), t.button.addClass(g);
                var n = t.config;
                ("none" === n.animation || !f.support.transform || n.duration <= 0) && (e = !0);
                var i = G(t),
                    o = t.menu.outerHeight(!0),
                    a = t.menu.outerWidth(!0),
                    c = t.el.height(),
                    s = t.el[0];
                if (M(0, s), T.intro(0, s), r.redraw.up(), u || d.on("click" + E, t.outside), e) v();
                else {
                    var l = "transform " + n.duration + "ms " + n.easing;
                    if (t.overlay && (b = t.menu.prev(), t.overlay.show().append(t.menu)), n.animOver) return f(t.menu).add(l).set({ x: n.animDirect * a, height: i }).start({ x: 0 }).then(v), void(t.overlay && t.overlay.width(a));
                    var p = c + o;
                    f(t.menu).add(l).set({ y: -p }).start({ y: 0 }).then(v)
                }
            }

            function v() { t.button.attr("aria-expanded", "true") }
        }

        function G(t) {
            var e = t.config,
                r = e.docHeight ? d.height() : n.height();
            return e.animOver ? t.menu.height(r) : "fixed" !== t.el.css("position") && (r -= t.el.outerHeight(!0)), t.overlay && t.overlay.height(r), r
        }

        function V(t, e) {
            if (t.open) {
                t.open = !1, t.button.removeClass(g);
                var n = t.config;
                if (("none" === n.animation || !f.support.transform || n.duration <= 0) && (e = !0), T.outro(0, t.el[0]), d.off("click" + E, t.outside), e) return f(t.menu).stop(), void c();
                var r = "transform " + n.duration + "ms " + n.easing2,
                    i = t.menu.outerHeight(!0),
                    o = t.menu.outerWidth(!0),
                    a = t.el.height();
                if (n.animOver) f(t.menu).add(r).start({ x: o * n.animDirect }).then(c);
                else {
                    var u = a + i;
                    f(t.menu).add(r).start({ y: -u }).then(c)
                }
            }

            function c() { t.menu.height(""), f(t.menu).set({ x: 0, y: 0 }), t.menu.each(k), t.links.removeClass(I), t.dropdowns.removeClass(_), t.dropdownToggle.removeClass(y), t.dropdownList.removeClass(m), t.overlay && t.overlay.children().length && (b.length ? t.menu.insertAfter(b) : t.menu.prependTo(t.parent), t.overlay.attr("style", "").hide()), t.el.triggerHandler("w-close"), t.button.attr("aria-expanded", "false") }
        }
        return s
    })
}, function(t, e, n) {
    "use strict";
    var r = n(5),
        i = n(36),
        o = { ARROW_LEFT: 37, ARROW_UP: 38, ARROW_RIGHT: 39, ARROW_DOWN: 40, SPACE: 32, ENTER: 13, HOME: 36, END: 35 },
        a = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    r.define("slider", t.exports = function(t, e) {
        var n, u, c, s, f = {},
            l = t.tram,
            d = t(document),
            p = r.env(),
            v = ".w-slider",
            h = '<div class="w-slider-dot" data-wf-ignore />',
            E = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
            g = i.triggers;

        function _() {
            (n = d.find(v)).length && (n.each(I), s = null, c || (y(), r.resize.on(m), r.redraw.on(f.redraw)))
        }

        function y() { r.resize.off(m), r.redraw.off(f.redraw) }

        function m() { n.filter(":visible").each(D) }

        function I(e, n) {
            var r = t(n),
                i = t.data(n, v);
            i || (i = t.data(n, v, { index: 0, depth: 1, hasFocus: { keyboard: !1, mouse: !1 }, el: r, config: {} })), i.mask = r.children(".w-slider-mask"), i.left = r.children(".w-slider-arrow-left"), i.right = r.children(".w-slider-arrow-right"), i.nav = r.children(".w-slider-nav"), i.slides = i.mask.children(".w-slide"), i.slides.each(g.reset), s && (i.maskWidth = 0), void 0 === r.attr("role") && r.attr("role", "region"), void 0 === r.attr("aria-label") && r.attr("aria-label", "carousel");
            var o = i.mask.attr("id");
            if (o || (o = "w-slider-mask-" + e, i.mask.attr("id", o)), i.ariaLiveLabel = t(E).appendTo(i.mask), i.left.attr("role", "button"), i.left.attr("tabindex", "0"), i.left.attr("aria-controls", o), void 0 === i.left.attr("aria-label") && i.left.attr("aria-label", "previous slide"), i.right.attr("role", "button"), i.right.attr("tabindex", "0"), i.right.attr("aria-controls", o), void 0 === i.right.attr("aria-label") && i.right.attr("aria-label", "next slide"), !l.support.transform) return i.left.hide(), i.right.hide(), i.nav.hide(), void(c = !0);
            i.el.off(v), i.left.off(v), i.right.off(v), i.nav.off(v), T(i), u ? (i.el.on("setting" + v, N(i)), R(i), i.hasTimer = !1) : (i.el.on("swipe" + v, N(i)), i.left.on("click" + v, A(i)), i.right.on("click" + v, S(i)), i.left.on("keydown" + v, w(i, A)), i.right.on("keydown" + v, w(i, S)), i.nav.on("keydown" + v, "> div", N(i)), i.config.autoplay && !i.hasTimer && (i.hasTimer = !0, i.timerCount = 1, x(i)), i.el.on("mouseenter" + v, O(i, !0, "mouse")), i.el.on("focusin" + v, O(i, !0, "keyboard")), i.el.on("mouseleave" + v, O(i, !1, "mouse")), i.el.on("focusout" + v, O(i, !1, "keyboard"))), i.nav.on("click" + v, "> div", N(i)), p || i.mask.contents().filter(function() { return 3 === this.nodeType }).remove();
            var a = r.filter(":hidden");
            a.show();
            var f = r.parents(":hidden");
            f.show(), D(e, n), a.css("display", ""), f.css("display", "")
        }

        function T(t) {
            var e = { crossOver: 0 };
            e.animation = t.el.attr("data-animation") || "slide", "outin" === e.animation && (e.animation = "cross", e.crossOver = .5), e.easing = t.el.attr("data-easing") || "ease";
            var n = t.el.attr("data-duration");
            if (e.duration = null != n ? parseInt(n, 10) : 500, b(t.el.attr("data-infinite")) && (e.infinite = !0), b(t.el.attr("data-disable-swipe")) && (e.disableSwipe = !0), b(t.el.attr("data-hide-arrows")) ? e.hideArrows = !0 : t.config.hideArrows && (t.left.show(), t.right.show()), b(t.el.attr("data-autoplay"))) {
                e.autoplay = !0, e.delay = parseInt(t.el.attr("data-delay"), 10) || 2e3, e.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10);
                var r = "mousedown" + v + " touchstart" + v;
                u || t.el.off(r).one(r, function() { R(t) })
            }
            var i = t.right.width();
            e.edge = i ? i + 40 : 100, t.config = e
        }

        function b(t) { return "1" === t || "true" === t }

        function O(e, n, r) {
            return function(i) {
                if (n) e.hasFocus[r] = n;
                else { if (t.contains(e.el.get(0), i.relatedTarget)) return; if (e.hasFocus[r] = n, e.hasFocus.mouse && "keyboard" === r || e.hasFocus.keyboard && "mouse" === r) return }
                n ? (e.ariaLiveLabel.attr("aria-live", "polite"), e.hasTimer && R(e)) : (e.ariaLiveLabel.attr("aria-live", "off"), e.hasTimer && x(e))
            }
        }

        function w(t, e) {
            return function(n) {
                switch (n.keyCode) {
                    case o.SPACE:
                    case o.ENTER:
                        return e(t)(), n.preventDefault(), n.stopPropagation()
                }
            }
        }

        function A(t) { return function() { L(t, { index: t.index - 1, vector: -1 }) } }

        function S(t) { return function() { L(t, { index: t.index + 1, vector: 1 }) } }

        function x(t) {
            R(t);
            var e = t.config,
                n = e.timerMax;
            n && t.timerCount++ > n || (t.timerId = window.setTimeout(function() { null == t.timerId || u || (S(t)(), x(t)) }, e.delay))
        }

        function R(t) { window.clearTimeout(t.timerId), t.timerId = null }

        function N(n) {
            return function(i, a) {
                a = a || {};
                var c = n.config;
                if (u && "setting" === i.type) {
                    if ("prev" === a.select) return A(n)();
                    if ("next" === a.select) return S(n)();
                    if (T(n), P(n), null == a.select) return;
                    ! function(n, r) {
                        var i = null;
                        r === n.slides.length && (_(), P(n)), e.each(n.anchors, function(e, n) { t(e.els).each(function(e, o) { t(o).index() === r && (i = n) }) }), null != i && L(n, { index: i, immediate: !0 })
                    }(n, a.select)
                } else {
                    if ("swipe" === i.type) { if (c.disableSwipe) return; if (r.env("editor")) return; return "left" === a.direction ? S(n)() : "right" === a.direction ? A(n)() : void 0 }
                    if (n.nav.has(i.target).length) {
                        var s = t(i.target).index();
                        if ("click" === i.type && L(n, { index: s }), "keydown" === i.type) switch (i.keyCode) {
                            case o.ENTER:
                            case o.SPACE:
                                L(n, { index: s }), i.preventDefault();
                                break;
                            case o.ARROW_LEFT:
                            case o.ARROW_UP:
                                C(n.nav, Math.max(s - 1, 0)), i.preventDefault();
                                break;
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                                C(n.nav, Math.min(s + 1, n.pages)), i.preventDefault();
                                break;
                            case o.HOME:
                                C(n.nav, 0), i.preventDefault();
                                break;
                            case o.END:
                                C(n.nav, n.pages), i.preventDefault();
                                break;
                            default:
                                return
                        }
                    }
                }
            }
        }

        function C(t, e) {
            var n = t.children().eq(e).focus();
            t.children().not(n)
        }

        function L(e, n) {
            n = n || {};
            var r = e.config,
                i = e.anchors;
            e.previous = e.index;
            var o = n.index,
                c = {};
            o < 0 ? (o = i.length - 1, r.infinite && (c.x = -e.endX, c.from = 0, c.to = i[0].width)) : o >= i.length && (o = 0, r.infinite && (c.x = i[i.length - 1].width, c.from = -i[i.length - 1].x, c.to = c.from - c.x)), e.index = o;
            var f = e.nav.children().eq(o).addClass("w-active").attr("aria-selected", "true").attr("tabindex", "0");
            e.nav.children().not(f).removeClass("w-active").attr("aria-selected", "false").attr("tabindex", "-1"), r.hideArrows && (e.index === i.length - 1 ? e.right.hide() : e.right.show(), 0 === e.index ? e.left.hide() : e.left.show());
            var d = e.offsetX || 0,
                p = e.offsetX = -i[e.index].x,
                v = { x: p, opacity: 1, visibility: "" },
                h = t(i[e.index].els),
                E = t(i[e.previous] && i[e.previous].els),
                _ = e.slides.not(h),
                y = r.animation,
                m = r.easing,
                I = Math.round(r.duration),
                T = n.vector || (e.index > e.previous ? 1 : -1),
                b = "opacity " + I + "ms " + m,
                O = "transform " + I + "ms " + m;
            if (h.find(a).removeAttr("tabindex"), h.removeAttr("aria-hidden"), h.find("*").removeAttr("aria-hidden"), _.find(a).attr("tabindex", "-1"), _.attr("aria-hidden", "true"), _.find("*").attr("aria-hidden", "true"), u || (h.each(g.intro), _.each(g.outro)), n.immediate && !s) return l(h).set(v), void S();
            if (e.index !== e.previous) {
                if (e.ariaLiveLabel.text("Slide ".concat(o + 1, " of ").concat(i.length, ".")), "cross" === y) {
                    var w = Math.round(I - I * r.crossOver),
                        A = Math.round(I - w);
                    return b = "opacity " + w + "ms " + m, l(E).set({ visibility: "" }).add(b).start({ opacity: 0 }), void l(h).set({ visibility: "", x: p, opacity: 0, zIndex: e.depth++ }).add(b).wait(A).then({ opacity: 1 }).then(S)
                }
                if ("fade" === y) return l(E).set({ visibility: "" }).stop(), void l(h).set({ visibility: "", x: p, opacity: 0, zIndex: e.depth++ }).add(b).start({ opacity: 1 }).then(S);
                if ("over" === y) return v = { x: e.endX }, l(E).set({ visibility: "" }).stop(), void l(h).set({ visibility: "", zIndex: e.depth++, x: p + i[e.index].width * T }).add(O).start({ x: p }).then(S);
                r.infinite && c.x ? (l(e.slides.not(E)).set({ visibility: "", x: c.x }).add(O).start({ x: p }), l(E).set({ visibility: "", x: c.from }).add(O).start({ x: c.to }), e.shifted = E) : (r.infinite && e.shifted && (l(e.shifted).set({ visibility: "", x: d }), e.shifted = null), l(e.slides).set({ visibility: "" }).add(O).start({ x: p }))
            }

            function S() { h = t(i[e.index].els), _ = e.slides.not(h), "slide" !== y && (v.visibility = "hidden"), l(_).set(v) }
        }

        function D(e, n) { var r = t.data(n, v); if (r) return function(t) { var e = t.mask.width(); if (t.maskWidth !== e) return t.maskWidth = e, !0; return !1 }(r) ? P(r) : void(u && function(e) { var n = 0; if (e.slides.each(function(e, r) { n += t(r).outerWidth(!0) }), e.slidesWidth !== n) return e.slidesWidth = n, !0; return !1 }(r) && P(r)) }

        function P(e) {
            var n = 1,
                r = 0,
                i = 0,
                o = 0,
                a = e.maskWidth,
                c = a - e.config.edge;
            c < 0 && (c = 0), e.anchors = [{ els: [], x: 0, width: 0 }], e.slides.each(function(u, s) {
                i - r > c && (n++, r += a, e.anchors[n - 1] = { els: [], x: i, width: 0 }), o = t(s).outerWidth(!0), i += o, e.anchors[n - 1].width += o, e.anchors[n - 1].els.push(s);
                var f = u + 1 + " of " + e.slides.length;
                t(s).attr("aria-label", f), t(s).attr("role", "group")
            }), e.endX = i, u && (e.pages = null), e.nav.length && e.pages !== n && (e.pages = n, function(e) {
                var n, r = [],
                    i = e.el.attr("data-nav-spacing");
                i && (i = parseFloat(i) + "px");
                for (var o = 0, a = e.pages; o < a; o++)(n = t(h)).attr("aria-label", "Show slide " + (o + 1) + " of " + a).attr("aria-selected", "false").attr("role", "button").attr("tabindex", "-1"), e.nav.hasClass("w-num") && n.text(o + 1), null != i && n.css({ "margin-left": i, "margin-right": i }), r.push(n);
                e.nav.empty().append(r)
            }(e));
            var s = e.index;
            s >= n && (s = n - 1), L(e, { immediate: !0, index: s })
        }
        return f.ready = function() { u = r.env("design"), _() }, f.design = function() { u = !0, _() }, f.preview = function() { u = !1, _() }, f.redraw = function() { s = !0, _() }, f.destroy = y, f
    })
}]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
/**
 * Webflow.require('ix2').init({ "events": { "e-17": { "id": "e-17", "name": "", "animationType": "custom", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-6", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-18" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606675300864 }, "e-19": { "id": "e-19", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-7", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-20" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "ac3e64df-cef2-0b09-70ca-54374f775ae3", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "ac3e64df-cef2-0b09-70ca-54374f775ae3", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606679503310 }, "e-20": { "id": "e-20", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-8", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-19" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "ac3e64df-cef2-0b09-70ca-54374f775ae3", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "ac3e64df-cef2-0b09-70ca-54374f775ae3", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606679503311 }, "e-21": { "id": "e-21", "name": "", "animationType": "custom", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-22" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606679588312 }, "e-23": { "id": "e-23", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-24" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|a1dfe2f6-52b4-12c2-0b3a-8ae8debf0a19", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|a1dfe2f6-52b4-12c2-0b3a-8ae8debf0a19", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606681932915 }, "e-26": { "id": "e-26", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-27" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|6531b5b7-422b-2dba-5e25-22b7eb5d5d0c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|6531b5b7-422b-2dba-5e25-22b7eb5d5d0c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 40, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606683568020 }, "e-28": { "id": "e-28", "name": "", "animationType": "custom", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-11", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5fc6783f0fa0236084a45f52|58ba36f7-d731-2166-1a17-9f1cabae905a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|58ba36f7-d731-2166-1a17-9f1cabae905a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-11-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1606683794356 }, "e-29": { "id": "e-29", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-30" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|b6e25794-06a0-89a4-e6a0-47f837fba562", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|b6e25794-06a0-89a4-e6a0-47f837fba562", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606684360588 }, "e-63": { "id": "e-63", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-64" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|cb4ed179-a688-416e-e73f-3cdce0317856", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|cb4ed179-a688-416e-e73f-3cdce0317856", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606684584659 }, "e-65": { "id": "e-65", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-66" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|beb94d27-6ac0-91a9-c09b-7674c14bb812", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|beb94d27-6ac0-91a9-c09b-7674c14bb812", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606684607905 }, "e-67": { "id": "e-67", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-68" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|72e33955-0514-f810-938a-3cc5b09ab237", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|72e33955-0514-f810-938a-3cc5b09ab237", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606684819207 }, "e-69": { "id": "e-69", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-70" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|91c2fbfb-93bb-3eec-2c9c-7ae23307b084", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|91c2fbfb-93bb-3eec-2c9c-7ae23307b084", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606684819704 }, "e-71": { "id": "e-71", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-72" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|deb6c52c-3dd0-4752-e5be-2698fab370eb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|deb6c52c-3dd0-4752-e5be-2698fab370eb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606684819986 }, "e-73": { "id": "e-73", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-74" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|0307e39a-f5d0-dfa0-b457-b8c65e79a03e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|0307e39a-f5d0-dfa0-b457-b8c65e79a03e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606684820451 }, "e-75": { "id": "e-75", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-76" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|c8759ee8-018c-49b8-87eb-a46e92bae5cc", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|c8759ee8-018c-49b8-87eb-a46e92bae5cc", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606684820880 }, "e-77": { "id": "e-77", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-78" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|fa7350ff-3b52-95ee-31e8-e2eda9bf98da", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|fa7350ff-3b52-95ee-31e8-e2eda9bf98da", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606684821337 }, "e-79": { "id": "e-79", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-80" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|547db140-d2bc-30af-c46f-149539de7ed6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|547db140-d2bc-30af-c46f-149539de7ed6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606684821768 }, "e-83": { "id": "e-83", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-84" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|b9789984-b908-eebb-3a80-33f0ea12e589", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|b9789984-b908-eebb-3a80-33f0ea12e589", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606733981880 }, "e-85": { "id": "e-85", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-86" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|df7ea9c7-aac6-e5b2-8469-b3942635e5e6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|df7ea9c7-aac6-e5b2-8469-b3942635e5e6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606734021669 }, "e-89": { "id": "e-89", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-90" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|6ecad300-822f-200b-b332-390ac683e06a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|6ecad300-822f-200b-b332-390ac683e06a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606735184560 }, "e-91": { "id": "e-91", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-92" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|6ecad300-822f-200b-b332-390ac683e06e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|6ecad300-822f-200b-b332-390ac683e06e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606735184560 }, "e-103": { "id": "e-103", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-104" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|c05f1a04-7329-1930-50f7-92d367da5d33", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|c05f1a04-7329-1930-50f7-92d367da5d33", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606735746933 }, "e-105": { "id": "e-105", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-106" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|c05f1a04-7329-1930-50f7-92d367da5d37", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|c05f1a04-7329-1930-50f7-92d367da5d37", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606735746933 }, "e-111": { "id": "e-111", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-112" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|74147161-5394-6cfa-a7d4-cfdae4d93690", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|74147161-5394-6cfa-a7d4-cfdae4d93690", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606739713707 }, "e-113": { "id": "e-113", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-114" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|ca70f672-7198-504f-6d92-07d2417e1bd2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|ca70f672-7198-504f-6d92-07d2417e1bd2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606778067274 }, "e-115": { "id": "e-115", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-116" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|be5831aa-ff7f-d9aa-b236-4c78e56a0662", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|be5831aa-ff7f-d9aa-b236-4c78e56a0662", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606778382276 }, "e-121": { "id": "e-121", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-122" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|fe6b387a-e53e-ed06-f33f-0eb373e32aa9", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|fe6b387a-e53e-ed06-f33f-0eb373e32aa9", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606827079529 }, "e-123": { "id": "e-123", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-124" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|fe6b387a-e53e-ed06-f33f-0eb373e32ab3", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|fe6b387a-e53e-ed06-f33f-0eb373e32ab3", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606827079529 }, "e-125": { "id": "e-125", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-126" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|a5b8b417-65aa-297f-897c-947213aa583b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|a5b8b417-65aa-297f-897c-947213aa583b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606827142236 }, "e-127": { "id": "e-127", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-128" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|48d76473-1049-fa18-e0d9-168fc23ded59", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|48d76473-1049-fa18-e0d9-168fc23ded59", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606831263685 }, "e-129": { "id": "e-129", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-130" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|48d76473-1049-fa18-e0d9-168fc23ded5a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|48d76473-1049-fa18-e0d9-168fc23ded5a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606831263685 }, "e-131": { "id": "e-131", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-132" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|48d76473-1049-fa18-e0d9-168fc23ded5d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|48d76473-1049-fa18-e0d9-168fc23ded5d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606831263685 }, "e-133": { "id": "e-133", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-134" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|c06beeaf-cc39-d597-315c-49ebf16ff316", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|c06beeaf-cc39-d597-315c-49ebf16ff316", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606831348377 }, "e-135": { "id": "e-135", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-136" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|c06beeaf-cc39-d597-315c-49ebf16ff317", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|c06beeaf-cc39-d597-315c-49ebf16ff317", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606831348377 }, "e-137": { "id": "e-137", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-138" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|c06beeaf-cc39-d597-315c-49ebf16ff31a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|c06beeaf-cc39-d597-315c-49ebf16ff31a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606831348377 }, "e-145": { "id": "e-145", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-146" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|23453dc3-d988-4db4-df79-6e2c9871d003", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|23453dc3-d988-4db4-df79-6e2c9871d003", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606846027313 }, "e-147": { "id": "e-147", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-148" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|5ff0c60a-f500-763b-f746-5f689952fc49", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|5ff0c60a-f500-763b-f746-5f689952fc49", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606846494175 }, "e-149": { "id": "e-149", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-150" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|a878f47b-286e-c95c-7833-9acf81752c1e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|a878f47b-286e-c95c-7833-9acf81752c1e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606846504404 }, "e-151": { "id": "e-151", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-152" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|6ecad300-822f-200b-b332-390ac683e068", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|6ecad300-822f-200b-b332-390ac683e068", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606846537266 }, "e-153": { "id": "e-153", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-154" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|6ecad300-822f-200b-b332-390ac683e06c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|6ecad300-822f-200b-b332-390ac683e06c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606846567892 }, "e-155": { "id": "e-155", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-156" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|c05f1a04-7329-1930-50f7-92d367da5d31", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|c05f1a04-7329-1930-50f7-92d367da5d31", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606846578759 }, "e-157": { "id": "e-157", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-158" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|c05f1a04-7329-1930-50f7-92d367da5d35", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|c05f1a04-7329-1930-50f7-92d367da5d35", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1606846588574 }, "e-159": { "id": "e-159", "name": "", "animationType": "custom", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-15", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-160" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff753edfe0055685ba9b532", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ff753edfe0055685ba9b532", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610045213486 }, "e-161": { "id": "e-161", "name": "", "animationType": "custom", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-162" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff753edfe0055685ba9b532", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ff753edfe0055685ba9b532", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610049581572 }, "e-163": { "id": "e-163", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-15", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-164" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff7895be5e13809389ece10", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ff7895be5e13809389ece10", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610058076134 }, "e-165": { "id": "e-165", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-166" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff7895be5e13809389ece10", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ff7895be5e13809389ece10", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610058076134 }, "e-167": { "id": "e-167", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-15", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-168" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff78998ab416f50993d4d74", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ff78998ab416f50993d4d74", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610058136677 }, "e-169": { "id": "e-169", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-170" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff78998ab416f50993d4d74", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ff78998ab416f50993d4d74", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610058136677 }, "e-171": { "id": "e-171", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-18", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-172" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff78998ab416f50993d4d74|9956eb0b-c7ef-a1e0-d270-08119cc7b3b1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff78998ab416f50993d4d74|9956eb0b-c7ef-a1e0-d270-08119cc7b3b1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610059192769 }, "e-173": { "id": "e-173", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-20", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-174" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff78998ab416f50993d4d74|e4c52f9a-aff1-0754-ea28-49c114bc2be0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff78998ab416f50993d4d74|e4c52f9a-aff1-0754-ea28-49c114bc2be0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610059218364 }, "e-175": { "id": "e-175", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-19", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-176" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff78998ab416f50993d4d74|e4c52f9a-aff1-0754-ea28-49c114bc2bde", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff78998ab416f50993d4d74|e4c52f9a-aff1-0754-ea28-49c114bc2bde", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610059230001 }, "e-177": { "id": "e-177", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-21", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-178" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff78998ab416f50993d4d74|7db7cc51-603b-4309-3350-188240e4a5b4", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff78998ab416f50993d4d74|7db7cc51-603b-4309-3350-188240e4a5b4", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610059756723 }, "e-179": { "id": "e-179", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-22", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-180" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff78998ab416f50993d4d74|7db7cc51-603b-4309-3350-188240e4a5b6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff78998ab416f50993d4d74|7db7cc51-603b-4309-3350-188240e4a5b6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610059756723 }, "e-181": { "id": "e-181", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-23", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-182" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff78998ab416f50993d4d74|0bb01dde-4c47-5057-e3ab-f50339b6a8d8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff78998ab416f50993d4d74|0bb01dde-4c47-5057-e3ab-f50339b6a8d8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610059982564 }, "e-183": { "id": "e-183", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-184" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "f4381081-d3ff-550b-f2ce-ea39fea2ff2f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "f4381081-d3ff-550b-f2ce-ea39fea2ff2f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610108320699 }, "e-185": { "id": "e-185", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-186" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "f4381081-d3ff-550b-f2ce-ea39fea2ff30", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "f4381081-d3ff-550b-f2ce-ea39fea2ff30", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610108349232 }, "e-193": { "id": "e-193", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-15", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-194" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff878581b4f189c6155d657", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ff878581b4f189c6155d657", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610119256644 }, "e-195": { "id": "e-195", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-196" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff878581b4f189c6155d657", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ff878581b4f189c6155d657", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610119256644 }, "e-217": { "id": "e-217", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-218" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "abbc9804-ed74-2d93-9c25-8be73c4a2d2f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "abbc9804-ed74-2d93-9c25-8be73c4a2d2f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610130882263 }, "e-219": { "id": "e-219", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-220" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "abbc9804-ed74-2d93-9c25-8be73c4a2d30", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "abbc9804-ed74-2d93-9c25-8be73c4a2d30", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610130882263 }, "e-223": { "id": "e-223", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-15", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-224" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8a9e9de16f2744a7115d1", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ff8a9e9de16f2744a7115d1", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610131945587 }, "e-225": { "id": "e-225", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-226" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8a9e9de16f2744a7115d1", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ff8a9e9de16f2744a7115d1", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610131945587 }, "e-227": { "id": "e-227", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-228" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8a9e9de16f2744a7115d1|c1183347-0ed0-d96e-1642-55d22f05b816", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8a9e9de16f2744a7115d1|c1183347-0ed0-d96e-1642-55d22f05b816", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610131953273 }, "e-229": { "id": "e-229", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-230" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8a9e9de16f2744a7115d1|c1183347-0ed0-d96e-1642-55d22f05b820", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8a9e9de16f2744a7115d1|c1183347-0ed0-d96e-1642-55d22f05b820", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610131953273 }, "e-243": { "id": "e-243", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-15", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-244" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8ad2239433a3f8c80d328", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ff8ad2239433a3f8c80d328", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610132771744 }, "e-245": { "id": "e-245", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-246" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8ad2239433a3f8c80d328", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ff8ad2239433a3f8c80d328", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610132771744 }, "e-247": { "id": "e-247", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-15", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-248" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8aeb5ba71e05ce875d656", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ff8aeb5ba71e05ce875d656", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610133173396 }, "e-249": { "id": "e-249", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-250" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8aeb5ba71e05ce875d656", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ff8aeb5ba71e05ce875d656", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610133173396 }, "e-251": { "id": "e-251", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-25", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-252" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8ad2239433a3f8c80d328|f544636f-d3c0-bce7-8152-4a11f7bd1813", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8ad2239433a3f8c80d328|f544636f-d3c0-bce7-8152-4a11f7bd1813", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610137152589 }, "e-252": { "id": "e-252", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-26", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-251" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8ad2239433a3f8c80d328|f544636f-d3c0-bce7-8152-4a11f7bd1813", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8ad2239433a3f8c80d328|f544636f-d3c0-bce7-8152-4a11f7bd1813", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610137152598 }, "e-255": { "id": "e-255", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-25", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-256" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8adc802d3032fcbc113b1|3961be42-c940-bddd-d2cf-fe41b4547cf5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8adc802d3032fcbc113b1|3961be42-c940-bddd-d2cf-fe41b4547cf5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610146650039 }, "e-256": { "id": "e-256", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-26", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-255" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8adc802d3032fcbc113b1|3961be42-c940-bddd-d2cf-fe41b4547cf5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8adc802d3032fcbc113b1|3961be42-c940-bddd-d2cf-fe41b4547cf5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610146650039 }, "e-259": { "id": "e-259", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-15", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-260" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8e6fde17726771515097e", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ff8e6fde17726771515097e", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610147581301 }, "e-261": { "id": "e-261", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-262" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8e6fde17726771515097e", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ff8e6fde17726771515097e", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610147581301 }, "e-263": { "id": "e-263", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-15", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-264" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8e94cd5a56752e69cf62a", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ff8e94cd5a56752e69cf62a", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610148172530 }, "e-265": { "id": "e-265", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-266" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8e94cd5a56752e69cf62a", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ff8e94cd5a56752e69cf62a", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610148172530 }, "e-271": { "id": "e-271", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-272" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|366d5803-b2c6-8bf0-5cc5-d4019e89a289", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|366d5803-b2c6-8bf0-5cc5-d4019e89a289", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610148247897 }, "e-273": { "id": "e-273", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-15", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-274" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8e9e3ce5ce33ce441337f", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ff8e9e3ce5ce33ce441337f", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610148323881 }, "e-275": { "id": "e-275", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-276" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8e9e3ce5ce33ce441337f", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ff8e9e3ce5ce33ce441337f", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610148323881 }, "e-279": { "id": "e-279", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-29", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-280" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8ad2239433a3f8c80d328|ed20af3c-980f-52f3-4ab8-6c7e36d95fcf", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8ad2239433a3f8c80d328|ed20af3c-980f-52f3-4ab8-6c7e36d95fcf", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610152943311 }, "e-280": { "id": "e-280", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-30", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-279" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8ad2239433a3f8c80d328|ed20af3c-980f-52f3-4ab8-6c7e36d95fcf", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8ad2239433a3f8c80d328|ed20af3c-980f-52f3-4ab8-6c7e36d95fcf", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610152943311 }, "e-281": { "id": "e-281", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-29", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-282" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8ad2239433a3f8c80d328|d80d1855-c779-aacb-3b2d-d4b3872d89dd", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8ad2239433a3f8c80d328|d80d1855-c779-aacb-3b2d-d4b3872d89dd", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610152943847 }, "e-282": { "id": "e-282", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-30", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-281" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8ad2239433a3f8c80d328|d80d1855-c779-aacb-3b2d-d4b3872d89dd", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8ad2239433a3f8c80d328|d80d1855-c779-aacb-3b2d-d4b3872d89dd", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610152943847 }, "e-283": { "id": "e-283", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-29", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-284" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8ad2239433a3f8c80d328|dc5d6300-1b7a-3eb4-538f-e7d91eb90a67", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8ad2239433a3f8c80d328|dc5d6300-1b7a-3eb4-538f-e7d91eb90a67", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610152944391 }, "e-284": { "id": "e-284", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-30", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-283" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8ad2239433a3f8c80d328|dc5d6300-1b7a-3eb4-538f-e7d91eb90a67", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8ad2239433a3f8c80d328|dc5d6300-1b7a-3eb4-538f-e7d91eb90a67", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610152944391 }, "e-293": { "id": "e-293", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-15", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-294" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff987009f2f4cb0e753887b", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ff987009f2f4cb0e753887b", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610188544977 }, "e-295": { "id": "e-295", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-296" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff987009f2f4cb0e753887b", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ff987009f2f4cb0e753887b", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610188544977 }, "e-297": { "id": "e-297", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-6", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-298" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610223693027 }, "e-299": { "id": "e-299", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-300" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610223693027 }, "e-337": { "id": "e-337", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-31", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-338" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|c696f69c-e50f-3a11-29fb-9350b7ae6bf2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|c696f69c-e50f-3a11-29fb-9350b7ae6bf2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610224407034 }, "e-339": { "id": "e-339", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-340" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|b2b104a2-d07a-a9c1-1902-30898fa834d1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|b2b104a2-d07a-a9c1-1902-30898fa834d1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610226795650 }, "e-341": { "id": "e-341", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-342" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|b2b104a2-d07a-a9c1-1902-30898fa834d4", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|b2b104a2-d07a-a9c1-1902-30898fa834d4", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610226795650 }, "e-343": { "id": "e-343", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-18", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-344" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "b1f995cf-23a6-dff0-3609-2d79c535e138", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "b1f995cf-23a6-dff0-3609-2d79c535e138", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610227109796 }, "e-345": { "id": "e-345", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-19", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-346" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "b1f995cf-23a6-dff0-3609-2d79c535e13b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "b1f995cf-23a6-dff0-3609-2d79c535e13b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610227109796 }, "e-347": { "id": "e-347", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-20", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-348" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "b1f995cf-23a6-dff0-3609-2d79c535e13d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "b1f995cf-23a6-dff0-3609-2d79c535e13d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610227109796 }, "e-349": { "id": "e-349", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-21", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-350" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "b1f995cf-23a6-dff0-3609-2d79c535e140", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "b1f995cf-23a6-dff0-3609-2d79c535e140", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610227109796 }, "e-351": { "id": "e-351", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-22", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-352" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "b1f995cf-23a6-dff0-3609-2d79c535e142", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "b1f995cf-23a6-dff0-3609-2d79c535e142", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610227109796 }, "e-353": { "id": "e-353", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-23", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-354" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "b1f995cf-23a6-dff0-3609-2d79c535e145", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "b1f995cf-23a6-dff0-3609-2d79c535e145", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610227109796 }, "e-355": { "id": "e-355", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-356" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|66d42cb0-fe4f-d0b0-ce04-cc829a062946", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|66d42cb0-fe4f-d0b0-ce04-cc829a062946", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610235495398 }, "e-357": { "id": "e-357", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-358" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|066ce7ff-c49f-5667-23fb-e39192a45ccc", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|066ce7ff-c49f-5667-23fb-e39192a45ccc", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610235500250 }, "e-359": { "id": "e-359", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-360" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|96d90803-a763-e34e-9867-ba176cc882cc", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|96d90803-a763-e34e-9867-ba176cc882cc", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610235502013 }, "e-361": { "id": "e-361", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-362" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|52e406f7-e7a4-94ed-6f74-55d659135adc", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|52e406f7-e7a4-94ed-6f74-55d659135adc", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610235503550 }, "e-379": { "id": "e-379", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-380" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|f15f8402-110a-8ad1-4b34-1c3688bba3dd", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|f15f8402-110a-8ad1-4b34-1c3688bba3dd", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610237665876 }, "e-381": { "id": "e-381", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-382" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|f15f8402-110a-8ad1-4b34-1c3688bba3df", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|f15f8402-110a-8ad1-4b34-1c3688bba3df", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610237665876 }, "e-383": { "id": "e-383", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-384" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|f15f8402-110a-8ad1-4b34-1c3688bba3e1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|f15f8402-110a-8ad1-4b34-1c3688bba3e1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610237665876 }, "e-385": { "id": "e-385", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-386" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|f15f8402-110a-8ad1-4b34-1c3688bba3e3", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|f15f8402-110a-8ad1-4b34-1c3688bba3e3", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610237665876 }, "e-387": { "id": "e-387", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-388" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|1e7423aa-c8f5-cc6e-d580-704c001ba4e6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|1e7423aa-c8f5-cc6e-d580-704c001ba4e6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610237666705 }, "e-389": { "id": "e-389", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-390" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|1e7423aa-c8f5-cc6e-d580-704c001ba4e8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|1e7423aa-c8f5-cc6e-d580-704c001ba4e8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610237666705 }, "e-391": { "id": "e-391", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-392" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|1e7423aa-c8f5-cc6e-d580-704c001ba4ea", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|1e7423aa-c8f5-cc6e-d580-704c001ba4ea", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610237666705 }, "e-393": { "id": "e-393", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-394" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|1e7423aa-c8f5-cc6e-d580-704c001ba4ec", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|1e7423aa-c8f5-cc6e-d580-704c001ba4ec", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610237666705 }, "e-395": { "id": "e-395", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-15", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-396" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa4abac98da91979071d59", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ffa4abac98da91979071d59", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610238650919 }, "e-397": { "id": "e-397", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-398" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa4abac98da91979071d59", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ffa4abac98da91979071d59", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610238650919 }, "e-401": { "id": "e-401", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-16", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-402" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|2fe0d93a-9ad8-5d84-f140-60125b65cd6d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|2fe0d93a-9ad8-5d84-f140-60125b65cd6d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610275479280 }, "e-402": { "id": "e-402", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-17", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-401" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|2fe0d93a-9ad8-5d84-f140-60125b65cd6d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|2fe0d93a-9ad8-5d84-f140-60125b65cd6d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610275479280 }, "e-403": { "id": "e-403", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-15", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-404" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffadaf1d25a5e5f8cce7503", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ffadaf1d25a5e5f8cce7503", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610275570178 }, "e-405": { "id": "e-405", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-406" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffadaf1d25a5e5f8cce7503", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ffadaf1d25a5e5f8cce7503", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610275570178 }, "e-413": { "id": "e-413", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-414" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|a67e1f96-90cd-5006-d0ef-8032021a47c0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|a67e1f96-90cd-5006-d0ef-8032021a47c0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610276288369 }, "e-415": { "id": "e-415", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-416" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|a67e1f96-90cd-5006-d0ef-8032021a47c1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|a67e1f96-90cd-5006-d0ef-8032021a47c1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610276288369 }, "e-417": { "id": "e-417", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-418" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|a67e1f96-90cd-5006-d0ef-8032021a47c4", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|a67e1f96-90cd-5006-d0ef-8032021a47c4", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610276288369 }, "e-419": { "id": "e-419", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-15", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-420" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffade297fde030f236ea86a", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ffade297fde030f236ea86a", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610276393532 }, "e-421": { "id": "e-421", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-422" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffade297fde030f236ea86a", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ffade297fde030f236ea86a", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610276393532 }, "e-428": { "id": "e-428", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-429" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffade297fde030f236ea86a|6ef37524-da8f-943d-d226-a7038ae3acc4", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffade297fde030f236ea86a|6ef37524-da8f-943d-d226-a7038ae3acc4", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610280862797 }, "e-430": { "id": "e-430", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-431" } }, "mediaQueries": ["main"], "target": { "id": "5ffa104c8efa2b3e579bdbec|7c1ade5a-d6a3-5222-72fb-8db5b85eb6da", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|7c1ade5a-d6a3-5222-72fb-8db5b85eb6da", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610282290557 }, "e-431": { "id": "e-431", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-430" } }, "mediaQueries": ["main"], "target": { "id": "5ffa104c8efa2b3e579bdbec|7c1ade5a-d6a3-5222-72fb-8db5b85eb6da", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|7c1ade5a-d6a3-5222-72fb-8db5b85eb6da", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610282290557 }, "e-432": { "id": "e-432", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-32", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5ffa104c8efa2b3e579bdbec|7c1ade5a-d6a3-5222-72fb-8db5b85eb6da", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|7c1ade5a-d6a3-5222-72fb-8db5b85eb6da", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-32-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-32-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610282290557 }, "e-433": { "id": "e-433", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-434" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|e0206b1e-a8a6-777c-dc7f-b5da9e3aca1b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|e0206b1e-a8a6-777c-dc7f-b5da9e3aca1b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610282319889 }, "e-439": { "id": "e-439", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-6", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-440" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610297408864 }, "e-441": { "id": "e-441", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-442" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610297408864 }, "e-443": { "id": "e-443", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-31", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-444" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|8798b819-18a4-6b50-9018-005df259619f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|8798b819-18a4-6b50-9018-005df259619f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610304617934 }, "e-445": { "id": "e-445", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-446" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|bcf8df9b-fc87-8680-9fc8-146ada10e5c3", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|bcf8df9b-fc87-8680-9fc8-146ada10e5c3", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610305159622 }, "e-451": { "id": "e-451", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-452" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|52c9f1c5-1878-14d5-5a8b-6fd6cf0af93e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|52c9f1c5-1878-14d5-5a8b-6fd6cf0af93e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610376190578 }, "e-453": { "id": "e-453", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-454" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|52c9f1c5-1878-14d5-5a8b-6fd6cf0af940", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|52c9f1c5-1878-14d5-5a8b-6fd6cf0af940", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610376190578 }, "e-455": { "id": "e-455", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-456" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|52c9f1c5-1878-14d5-5a8b-6fd6cf0af942", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|52c9f1c5-1878-14d5-5a8b-6fd6cf0af942", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610376190578 }, "e-457": { "id": "e-457", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-458" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|52c9f1c5-1878-14d5-5a8b-6fd6cf0af944", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|52c9f1c5-1878-14d5-5a8b-6fd6cf0af944", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610376190578 }, "e-487": { "id": "e-487", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-488" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|f0e82857-048d-08d7-7afe-d7afec6fabbf", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|f0e82857-048d-08d7-7afe-d7afec6fabbf", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610377408120 }, "e-489": { "id": "e-489", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-490" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|f0e82857-048d-08d7-7afe-d7afec6fabc0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|f0e82857-048d-08d7-7afe-d7afec6fabc0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610377408120 }, "e-491": { "id": "e-491", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-492" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|baf242e4-a225-5ec7-67d3-4d5d9697de9b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|baf242e4-a225-5ec7-67d3-4d5d9697de9b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610377422449 }, "e-493": { "id": "e-493", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-494" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|baf242e4-a225-5ec7-67d3-4d5d9697de9c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|baf242e4-a225-5ec7-67d3-4d5d9697de9c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610377422449 }, "e-495": { "id": "e-495", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-496" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|3fd02b70-c067-551f-b489-86b33e16c15f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|3fd02b70-c067-551f-b489-86b33e16c15f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610377540790 }, "e-497": { "id": "e-497", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-498" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|3fd02b70-c067-551f-b489-86b33e16c162", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|3fd02b70-c067-551f-b489-86b33e16c162", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610377540790 }, "e-511": { "id": "e-511", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-15", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-512" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffc6bb4ed110e710a332cc9", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ffc6bb4ed110e710a332cc9", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610378165124 }, "e-513": { "id": "e-513", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-514" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffc6bb4ed110e710a332cc9", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ffc6bb4ed110e710a332cc9", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610378165124 }, "e-531": { "id": "e-531", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-532" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|2fd259b7-aefe-b267-fcf3-c58a16b6845e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|2fd259b7-aefe-b267-fcf3-c58a16b6845e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610388217069 }, "e-533": { "id": "e-533", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-16", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-534" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|2fd259b7-aefe-b267-fcf3-c58a16b68470", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|2fd259b7-aefe-b267-fcf3-c58a16b68470", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610388217069 }, "e-534": { "id": "e-534", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-17", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-533" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|2fd259b7-aefe-b267-fcf3-c58a16b68470", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|2fd259b7-aefe-b267-fcf3-c58a16b68470", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610388217069 }, "e-535": { "id": "e-535", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-536" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|2fd259b7-aefe-b267-fcf3-c58a16b68476", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|2fd259b7-aefe-b267-fcf3-c58a16b68476", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610388217069 }, "e-543": { "id": "e-543", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-544" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff987009f2f4cb0e753887b|60886df1-ba29-6ffb-b7ef-2d0604910184", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff987009f2f4cb0e753887b|60886df1-ba29-6ffb-b7ef-2d0604910184", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610394441668 }, "e-545": { "id": "e-545", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-546" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff987009f2f4cb0e753887b|aad6252f-b2cb-0308-8653-fdbec65031a6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff987009f2f4cb0e753887b|aad6252f-b2cb-0308-8653-fdbec65031a6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610396354582 }, "e-547": { "id": "e-547", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-548" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff987009f2f4cb0e753887b|57b46f5f-f343-d0a0-bfc3-fa21631e9308", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff987009f2f4cb0e753887b|57b46f5f-f343-d0a0-bfc3-fa21631e9308", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610396355187 }, "e-581": { "id": "e-581", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-15", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-582" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610398845325 }, "e-583": { "id": "e-583", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-584" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610398845325 }, "e-607": { "id": "e-607", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-608" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8aeb5ba71e05ce875d656|91be0c7a-2b62-e1b8-5740-71416ebda725", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8aeb5ba71e05ce875d656|91be0c7a-2b62-e1b8-5740-71416ebda725", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610400414684 }, "e-609": { "id": "e-609", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-27", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-610" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "93b22ef3-80e9-4e64-c0fa-5c5c8c5413e8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "93b22ef3-80e9-4e64-c0fa-5c5c8c5413e8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610400872320 }, "e-610": { "id": "e-610", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-28", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-609" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "93b22ef3-80e9-4e64-c0fa-5c5c8c5413e8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "93b22ef3-80e9-4e64-c0fa-5c5c8c5413e8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610400872320 }, "e-611": { "id": "e-611", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-95", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-612" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "70ea5ad0-0a00-42ec-1a35-43173d0de59f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "70ea5ad0-0a00-42ec-1a35-43173d0de59f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610400874288 }, "e-612": { "id": "e-612", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-96", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-611" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "70ea5ad0-0a00-42ec-1a35-43173d0de59f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "70ea5ad0-0a00-42ec-1a35-43173d0de59f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610400874288 }, "e-613": { "id": "e-613", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-614" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|d3df142a-82e2-94cc-e73c-c8403a840990", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|d3df142a-82e2-94cc-e73c-c8403a840990", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 20, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610401372084 }, "e-617": { "id": "e-617", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-16", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-618" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8aeb5ba71e05ce875d656|60ec7382-0723-75ee-e94c-7d45bf74708a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8aeb5ba71e05ce875d656|60ec7382-0723-75ee-e94c-7d45bf74708a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610401563106 }, "e-618": { "id": "e-618", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-17", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-617" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8aeb5ba71e05ce875d656|60ec7382-0723-75ee-e94c-7d45bf74708a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8aeb5ba71e05ce875d656|60ec7382-0723-75ee-e94c-7d45bf74708a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610401563106 }, "e-619": { "id": "e-619", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-29", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-620" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8aeb5ba71e05ce875d656|a5200e68-e71c-bed1-74d1-6184bfe2e755", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8aeb5ba71e05ce875d656|a5200e68-e71c-bed1-74d1-6184bfe2e755", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610409650210 }, "e-620": { "id": "e-620", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-30", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-619" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8aeb5ba71e05ce875d656|a5200e68-e71c-bed1-74d1-6184bfe2e755", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8aeb5ba71e05ce875d656|a5200e68-e71c-bed1-74d1-6184bfe2e755", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610409650210 }, "e-621": { "id": "e-621", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-6", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-622" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffef3eb322c89d603c71bec", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ffef3eb322c89d603c71bec", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610544107896 }, "e-623": { "id": "e-623", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-624" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffef3eb322c89d603c71bec", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "5ffef3eb322c89d603c71bec", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610544107896 }, "e-625": { "id": "e-625", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-59", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-626" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffef3eb322c89d603c71bec|5126121d-5cdf-18c9-505b-0af1cef97ce1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffef3eb322c89d603c71bec|5126121d-5cdf-18c9-505b-0af1cef97ce1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610570052293 }, "e-627": { "id": "e-627", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-15", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-628" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "6001645e717c024bb15b6f7f", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "6001645e717c024bb15b6f7f", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610703966844 }, "e-629": { "id": "e-629", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-630" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "6001645e717c024bb15b6f7f", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "6001645e717c024bb15b6f7f", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610703966844 }, "e-633": { "id": "e-633", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-16", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-634" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|08b48961-116f-5034-d7c9-cbae90c85c35", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|08b48961-116f-5034-d7c9-cbae90c85c35", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610707973767 }, "e-634": { "id": "e-634", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-17", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-633" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|08b48961-116f-5034-d7c9-cbae90c85c35", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|08b48961-116f-5034-d7c9-cbae90c85c35", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610707973767 }, "e-635": { "id": "e-635", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-636" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|420e516c-6385-336e-e45e-f4b383cb800c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|420e516c-6385-336e-e45e-f4b383cb800c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610709413596 }, "e-637": { "id": "e-637", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-60", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-638" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "0feebed9-005c-ba1a-2c10-5fe20b3c4d39", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "0feebed9-005c-ba1a-2c10-5fe20b3c4d39", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610719873290 }, "e-638": { "id": "e-638", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_SECOND_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-61", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-637" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "0feebed9-005c-ba1a-2c10-5fe20b3c4d39", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "0feebed9-005c-ba1a-2c10-5fe20b3c4d39", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": 0, "direction": null, "effectIn": true }, "createdOn": 1610719873313 }, "e-639": { "id": "e-639", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-640" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0235762a45f5b|2d877309-6535-b7a5-bccf-e20620872ce4", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0235762a45f5b|2d877309-6535-b7a5-bccf-e20620872ce4", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610726071961 }, "e-641": { "id": "e-641", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-642" } }, "mediaQueries": ["main"], "target": { "id": "5fc6783f0fa0235762a45f5b|2d877309-6535-b7a5-bccf-e20620872cf0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0235762a45f5b|2d877309-6535-b7a5-bccf-e20620872cf0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610726071961 }, "e-642": { "id": "e-642", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-641" } }, "mediaQueries": ["main"], "target": { "id": "5fc6783f0fa0235762a45f5b|2d877309-6535-b7a5-bccf-e20620872cf0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0235762a45f5b|2d877309-6535-b7a5-bccf-e20620872cf0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610726071961 }, "e-643": { "id": "e-643", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-32", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5fc6783f0fa0235762a45f5b|2d877309-6535-b7a5-bccf-e20620872cf0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0235762a45f5b|2d877309-6535-b7a5-bccf-e20620872cf0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-32-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-32-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610726071961 }, "e-644": { "id": "e-644", "name": "", "animationType": "custom", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-62", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|0a3cffd2-a90c-907c-229a-eff687d3c8e5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|0a3cffd2-a90c-907c-229a-eff687d3c8e5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-62-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1610727757603 }, "e-645": { "id": "e-645", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-63", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-646" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "8f503e26-d46a-75fc-15e5-bb38ac76b300", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "8f503e26-d46a-75fc-15e5-bb38ac76b300", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610728983725 }, "e-646": { "id": "e-646", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-64", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-645" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "8f503e26-d46a-75fc-15e5-bb38ac76b300", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "8f503e26-d46a-75fc-15e5-bb38ac76b300", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610728983754 }, "e-647": { "id": "e-647", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-63", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-648" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|76e66b28-dcbd-501f-8fd3-561117087a7d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|76e66b28-dcbd-501f-8fd3-561117087a7d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736419832 }, "e-648": { "id": "e-648", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-64", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-647" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|76e66b28-dcbd-501f-8fd3-561117087a7d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|76e66b28-dcbd-501f-8fd3-561117087a7d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736419832 }, "e-649": { "id": "e-649", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-63", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-650" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|972804b5-8d06-a806-2f2e-e09139665b2f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|972804b5-8d06-a806-2f2e-e09139665b2f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736420447 }, "e-650": { "id": "e-650", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-64", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-649" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|972804b5-8d06-a806-2f2e-e09139665b2f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|972804b5-8d06-a806-2f2e-e09139665b2f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736420447 }, "e-651": { "id": "e-651", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-63", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-652" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|cfe7ba52-65d3-816c-6dcd-888bb9443c13", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|cfe7ba52-65d3-816c-6dcd-888bb9443c13", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736420927 }, "e-652": { "id": "e-652", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-64", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-651" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|cfe7ba52-65d3-816c-6dcd-888bb9443c13", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|cfe7ba52-65d3-816c-6dcd-888bb9443c13", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736420927 }, "e-653": { "id": "e-653", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-63", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-654" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|9e13357f-1644-dd46-6a5b-ba78a2a73442", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|9e13357f-1644-dd46-6a5b-ba78a2a73442", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736421408 }, "e-654": { "id": "e-654", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-64", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-653" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|9e13357f-1644-dd46-6a5b-ba78a2a73442", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|9e13357f-1644-dd46-6a5b-ba78a2a73442", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736421408 }, "e-655": { "id": "e-655", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-63", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-656" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|bcd12b63-b9c3-558e-9c35-52fa58008c29", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|bcd12b63-b9c3-558e-9c35-52fa58008c29", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736421876 }, "e-656": { "id": "e-656", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-64", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-655" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|bcd12b63-b9c3-558e-9c35-52fa58008c29", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|bcd12b63-b9c3-558e-9c35-52fa58008c29", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736421876 }, "e-657": { "id": "e-657", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-63", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-658" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|d1e00d40-61e0-f5f2-2a5d-042c88fe3ee6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|d1e00d40-61e0-f5f2-2a5d-042c88fe3ee6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736422338 }, "e-658": { "id": "e-658", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-64", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-657" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|d1e00d40-61e0-f5f2-2a5d-042c88fe3ee6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|d1e00d40-61e0-f5f2-2a5d-042c88fe3ee6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736422338 }, "e-659": { "id": "e-659", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-63", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-660" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|79baa577-5c14-38bd-65f6-f980beca3c28", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|79baa577-5c14-38bd-65f6-f980beca3c28", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736696514 }, "e-660": { "id": "e-660", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-64", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-659" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|79baa577-5c14-38bd-65f6-f980beca3c28", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|79baa577-5c14-38bd-65f6-f980beca3c28", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736696514 }, "e-661": { "id": "e-661", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-63", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-662" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "49d71b4b-629a-5dd6-b298-aa4e521b9fc8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "49d71b4b-629a-5dd6-b298-aa4e521b9fc8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736759554 }, "e-662": { "id": "e-662", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-64", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-661" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "49d71b4b-629a-5dd6-b298-aa4e521b9fc8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "49d71b4b-629a-5dd6-b298-aa4e521b9fc8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736759579 }, "e-663": { "id": "e-663", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-63", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-664" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|3801329f-7fc9-45f4-12bf-011ea1e04aab", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|3801329f-7fc9-45f4-12bf-011ea1e04aab", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736780824 }, "e-664": { "id": "e-664", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-64", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-663" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|3801329f-7fc9-45f4-12bf-011ea1e04aab", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|3801329f-7fc9-45f4-12bf-011ea1e04aab", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736780824 }, "e-665": { "id": "e-665", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-63", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-666" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|c9df789d-ba68-7896-4ebd-547ac72471d2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|c9df789d-ba68-7896-4ebd-547ac72471d2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736781528 }, "e-666": { "id": "e-666", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-64", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-665" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|c9df789d-ba68-7896-4ebd-547ac72471d2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|c9df789d-ba68-7896-4ebd-547ac72471d2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736781528 }, "e-667": { "id": "e-667", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-63", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-668" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|ae591f28-9a35-e276-c9c4-9b019d7f0818", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|ae591f28-9a35-e276-c9c4-9b019d7f0818", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736782288 }, "e-668": { "id": "e-668", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-64", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-667" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|ae591f28-9a35-e276-c9c4-9b019d7f0818", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|ae591f28-9a35-e276-c9c4-9b019d7f0818", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736782288 }, "e-669": { "id": "e-669", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-63", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-670" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "9a466675-1402-e06f-9bc2-8a3731123b9b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "9a466675-1402-e06f-9bc2-8a3731123b9b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736871864 }, "e-670": { "id": "e-670", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-64", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-669" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "9a466675-1402-e06f-9bc2-8a3731123b9b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "9a466675-1402-e06f-9bc2-8a3731123b9b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736871890 }, "e-671": { "id": "e-671", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-63", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-672" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "71719cbc-f1ff-74c1-212b-00458c860386", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "71719cbc-f1ff-74c1-212b-00458c860386", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736915674 }, "e-672": { "id": "e-672", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-64", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-671" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "71719cbc-f1ff-74c1-212b-00458c860386", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "71719cbc-f1ff-74c1-212b-00458c860386", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610736915729 }, "e-703": { "id": "e-703", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-37", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-704" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "f5cb3c9b-8c13-8593-7600-5e489662bade", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "f5cb3c9b-8c13-8593-7600-5e489662bade", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610738288610 }, "e-705": { "id": "e-705", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-38", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-706" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "f5cb3c9b-8c13-8593-7600-5e489662bae1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "f5cb3c9b-8c13-8593-7600-5e489662bae1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610738288610 }, "e-707": { "id": "e-707", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-39", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-708" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "f5cb3c9b-8c13-8593-7600-5e489662bae3", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "f5cb3c9b-8c13-8593-7600-5e489662bae3", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610738288610 }, "e-709": { "id": "e-709", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-40", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-710" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "f5cb3c9b-8c13-8593-7600-5e489662bae6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "f5cb3c9b-8c13-8593-7600-5e489662bae6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610738288610 }, "e-711": { "id": "e-711", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-41", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-712" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "f5cb3c9b-8c13-8593-7600-5e489662bae8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "f5cb3c9b-8c13-8593-7600-5e489662bae8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610738288610 }, "e-713": { "id": "e-713", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-42", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-714" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "f5cb3c9b-8c13-8593-7600-5e489662baeb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "f5cb3c9b-8c13-8593-7600-5e489662baeb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610738288610 }, "e-715": { "id": "e-715", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-716" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|c06beeaf-cc39-d597-315c-49ebf16ff318", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|c06beeaf-cc39-d597-315c-49ebf16ff318", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610738361248 }, "e-717": { "id": "e-717", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-63", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-718" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "d1e00d40-61e0-f5f2-2a5d-042c88fe3ee6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "d1e00d40-61e0-f5f2-2a5d-042c88fe3ee6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610739075859 }, "e-718": { "id": "e-718", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-64", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-717" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "d1e00d40-61e0-f5f2-2a5d-042c88fe3ee6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "d1e00d40-61e0-f5f2-2a5d-042c88fe3ee6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610739075890 }, "e-719": { "id": "e-719", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-63", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-720" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "ae591f28-9a35-e276-c9c4-9b019d7f0819", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "ae591f28-9a35-e276-c9c4-9b019d7f0819", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610739101159 }, "e-720": { "id": "e-720", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-64", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-719" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "ae591f28-9a35-e276-c9c4-9b019d7f0819", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "ae591f28-9a35-e276-c9c4-9b019d7f0819", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610739101223 }, "e-721": { "id": "e-721", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-63", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-722" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "c9df789d-ba68-7896-4ebd-547ac72471d2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "c9df789d-ba68-7896-4ebd-547ac72471d2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610739116555 }, "e-722": { "id": "e-722", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-64", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-721" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "c9df789d-ba68-7896-4ebd-547ac72471d2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "c9df789d-ba68-7896-4ebd-547ac72471d2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610739116586 }, "e-723": { "id": "e-723", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-63", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-724" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "3801329f-7fc9-45f4-12bf-011ea1e04aab", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "3801329f-7fc9-45f4-12bf-011ea1e04aab", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610739130570 }, "e-724": { "id": "e-724", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-64", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-723" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "3801329f-7fc9-45f4-12bf-011ea1e04aab", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "3801329f-7fc9-45f4-12bf-011ea1e04aab", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610739130637 }, "e-725": { "id": "e-725", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-63", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-726" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "ae591f28-9a35-e276-c9c4-9b019d7f0818", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "ae591f28-9a35-e276-c9c4-9b019d7f0818", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610739148942 }, "e-726": { "id": "e-726", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-64", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-725" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "ae591f28-9a35-e276-c9c4-9b019d7f0818", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "ae591f28-9a35-e276-c9c4-9b019d7f0818", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610739148974 }, "e-727": { "id": "e-727", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-728" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|01e73f9a-0728-46f5-a6f0-c1789bf0e350", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|01e73f9a-0728-46f5-a6f0-c1789bf0e350", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610739938841 }, "e-729": { "id": "e-729", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-730" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|c7dad25f-222f-f481-458c-c004fbf706a5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|c7dad25f-222f-f481-458c-c004fbf706a5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610739949573 }, "e-735": { "id": "e-735", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-736" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|e0603d65-22c5-6f17-748e-f89a25a19688", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|e0603d65-22c5-6f17-748e-f89a25a19688", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610739982241 }, "e-737": { "id": "e-737", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-738" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|5661fffb-aabe-7c13-e61f-f79a157df50d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|5661fffb-aabe-7c13-e61f-f79a157df50d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 40, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610740351916 }, "e-739": { "id": "e-739", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-740" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|dd7cd162-3936-28c8-116d-a703c02ac8ca", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|dd7cd162-3936-28c8-116d-a703c02ac8ca", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610740401481 }, "e-745": { "id": "e-745", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-746" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffef3eb322c89d603c71bec|004a7103-0925-3b8d-461f-bd1b416766d1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffef3eb322c89d603c71bec|004a7103-0925-3b8d-461f-bd1b416766d1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 20, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610749859958 }, "e-747": { "id": "e-747", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-748" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffef3eb322c89d603c71bec|004a7103-0925-3b8d-461f-bd1b416766de", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffef3eb322c89d603c71bec|004a7103-0925-3b8d-461f-bd1b416766de", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610749859958 }, "e-749": { "id": "e-749", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-750" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|178625b4-c942-043f-281b-8f69e2ab0d74", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|178625b4-c942-043f-281b-8f69e2ab0d74", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610804898234 }, "e-755": { "id": "e-755", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-756" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|b9c9b713-ea34-904e-c093-90e4418ac733", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|b9c9b713-ea34-904e-c093-90e4418ac733", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 20, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610805048219 }, "e-757": { "id": "e-757", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-758" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|5779c675-d48c-e881-01ef-76b6bfde2a4c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|5779c675-d48c-e881-01ef-76b6bfde2a4c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610805687819 }, "e-789": { "id": "e-789", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-790" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|632f11c0-6211-ec49-5b87-52cd4ed69000", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|632f11c0-6211-ec49-5b87-52cd4ed69000", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610806573131 }, "e-791": { "id": "e-791", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-792" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|8912eb96-05ac-aee2-9d8a-38e5812582f0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|8912eb96-05ac-aee2-9d8a-38e5812582f0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610806686209 }, "e-793": { "id": "e-793", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-794" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa023ceeda45f59|547d277e-7ec9-1c98-e39f-0720a12b34f5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa023ceeda45f59|547d277e-7ec9-1c98-e39f-0720a12b34f5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610815971259 }, "e-795": { "id": "e-795", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-796" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa023ceeda45f59|547d277e-7ec9-1c98-e39f-0720a12b34fb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa023ceeda45f59|547d277e-7ec9-1c98-e39f-0720a12b34fb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610815971259 }, "e-797": { "id": "e-797", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-798" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa023ceeda45f59|547d277e-7ec9-1c98-e39f-0720a12b34fc", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa023ceeda45f59|547d277e-7ec9-1c98-e39f-0720a12b34fc", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610815971259 }, "e-799": { "id": "e-799", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-800" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa023ceeda45f59|547d277e-7ec9-1c98-e39f-0720a12b34ff", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa023ceeda45f59|547d277e-7ec9-1c98-e39f-0720a12b34ff", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610815971259 }, "e-801": { "id": "e-801", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-65", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5fc6783f0fa0236084a45f52|178625b4-c942-043f-281b-8f69e2ab0d74", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|178625b4-c942-043f-281b-8f69e2ab0d74", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-65-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-65-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610816255846 }, "e-802": { "id": "e-802", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-803" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|178625b4-c942-043f-281b-8f69e2ab0d74", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|178625b4-c942-043f-281b-8f69e2ab0d74", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610816380835 }, "e-803": { "id": "e-803", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-802" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|178625b4-c942-043f-281b-8f69e2ab0d74", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|178625b4-c942-043f-281b-8f69e2ab0d74", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610816380869 }, "e-804": { "id": "e-804", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-805" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|16ccabb8-1951-f451-442a-59f90d6ed297", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|16ccabb8-1951-f451-442a-59f90d6ed297", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610816596822 }, "e-806": { "id": "e-806", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-65", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5fc6783f0fa0236084a45f52|16ccabb8-1951-f451-442a-59f90d6ed297", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|16ccabb8-1951-f451-442a-59f90d6ed297", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-65-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-65-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610816596822 }, "e-807": { "id": "e-807", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-808" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|16ccabb8-1951-f451-442a-59f90d6ed297", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|16ccabb8-1951-f451-442a-59f90d6ed297", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610816596822 }, "e-808": { "id": "e-808", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-807" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|16ccabb8-1951-f451-442a-59f90d6ed297", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|16ccabb8-1951-f451-442a-59f90d6ed297", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610816596822 }, "e-809": { "id": "e-809", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-810" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|1834b226-5f51-6c09-faff-73eb283f50c1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|1834b226-5f51-6c09-faff-73eb283f50c1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610816604590 }, "e-811": { "id": "e-811", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-65", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5fc6783f0fa0236084a45f52|1834b226-5f51-6c09-faff-73eb283f50c1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|1834b226-5f51-6c09-faff-73eb283f50c1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-65-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-65-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610816604590 }, "e-812": { "id": "e-812", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-813" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|1834b226-5f51-6c09-faff-73eb283f50c1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|1834b226-5f51-6c09-faff-73eb283f50c1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610816604590 }, "e-813": { "id": "e-813", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-812" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|1834b226-5f51-6c09-faff-73eb283f50c1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|1834b226-5f51-6c09-faff-73eb283f50c1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610816604590 }, "e-814": { "id": "e-814", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-66", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5fc6783f0fa0236084a45f52|dd7cd162-3936-28c8-116d-a703c02ac8ca", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|dd7cd162-3936-28c8-116d-a703c02ac8ca", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-66-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-66-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610817517838 }, "e-815": { "id": "e-815", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-816" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|dd7cd162-3936-28c8-116d-a703c02ac8ca", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|dd7cd162-3936-28c8-116d-a703c02ac8ca", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610817712657 }, "e-816": { "id": "e-816", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-815" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|dd7cd162-3936-28c8-116d-a703c02ac8ca", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|dd7cd162-3936-28c8-116d-a703c02ac8ca", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610817712693 }, "e-822": { "id": "e-822", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-823" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|fbfde25a-bd68-3ed7-f987-e461089ece4e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|fbfde25a-bd68-3ed7-f987-e461089ece4e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610818044418 }, "e-823": { "id": "e-823", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-822" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|fbfde25a-bd68-3ed7-f987-e461089ece4e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|fbfde25a-bd68-3ed7-f987-e461089ece4e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610818044418 }, "e-824": { "id": "e-824", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-825" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|fbfde25a-bd68-3ed7-f987-e461089ece4e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|fbfde25a-bd68-3ed7-f987-e461089ece4e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610818044418 }, "e-826": { "id": "e-826", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-67", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5ffa104c8efa2b3e579bdbec|fbfde25a-bd68-3ed7-f987-e461089ece4e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|fbfde25a-bd68-3ed7-f987-e461089ece4e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-67-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-67-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610818044418 }, "e-827": { "id": "e-827", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-68", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-828" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|fbfde25a-bd68-3ed7-f987-e461089ece4e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|fbfde25a-bd68-3ed7-f987-e461089ece4e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610818438855 }, "e-828": { "id": "e-828", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-69", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-827" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|fbfde25a-bd68-3ed7-f987-e461089ece4e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|fbfde25a-bd68-3ed7-f987-e461089ece4e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610818438892 }, "e-829": { "id": "e-829", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-68", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-830" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|178625b4-c942-043f-281b-8f69e2ab0d74", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|178625b4-c942-043f-281b-8f69e2ab0d74", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610819042710 }, "e-830": { "id": "e-830", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-69", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-829" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|178625b4-c942-043f-281b-8f69e2ab0d74", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|178625b4-c942-043f-281b-8f69e2ab0d74", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610819042745 }, "e-831": { "id": "e-831", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-68", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-832" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|16ccabb8-1951-f451-442a-59f90d6ed297", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|16ccabb8-1951-f451-442a-59f90d6ed297", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610819191388 }, "e-832": { "id": "e-832", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-69", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-831" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|16ccabb8-1951-f451-442a-59f90d6ed297", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|16ccabb8-1951-f451-442a-59f90d6ed297", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610819191426 }, "e-833": { "id": "e-833", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-68", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-834" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|1834b226-5f51-6c09-faff-73eb283f50c1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|1834b226-5f51-6c09-faff-73eb283f50c1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610819226310 }, "e-834": { "id": "e-834", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-69", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-833" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|1834b226-5f51-6c09-faff-73eb283f50c1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|1834b226-5f51-6c09-faff-73eb283f50c1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610819226346 }, "e-835": { "id": "e-835", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-68", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-836" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|dd7cd162-3936-28c8-116d-a703c02ac8ca", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|dd7cd162-3936-28c8-116d-a703c02ac8ca", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610819253791 }, "e-836": { "id": "e-836", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-69", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-835" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|dd7cd162-3936-28c8-116d-a703c02ac8ca", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|dd7cd162-3936-28c8-116d-a703c02ac8ca", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610819253830 }, "e-842": { "id": "e-842", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-73", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-843" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|7a62dd71-65c8-6301-74ec-059f41b05cd8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|7a62dd71-65c8-6301-74ec-059f41b05cd8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610820910853 }, "e-848": { "id": "e-848", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-73", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-849" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|6ecad300-822f-200b-b332-390ac683e05c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|6ecad300-822f-200b-b332-390ac683e05c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610821089852 }, "e-850": { "id": "e-850", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-73", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-851" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|c05f1a04-7329-1930-50f7-92d367da5d27", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|c05f1a04-7329-1930-50f7-92d367da5d27", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610821115664 }, "e-852": { "id": "e-852", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-853" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|9d60f316-17fd-6da2-266f-c5239ed32b0e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|9d60f316-17fd-6da2-266f-c5239ed32b0e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610825380939 }, "e-854": { "id": "e-854", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-855" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|96abb82c-2dcf-8fb6-a6fb-a5d3d00a6d9d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|96abb82c-2dcf-8fb6-a6fb-a5d3d00a6d9d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610825685850 }, "e-856": { "id": "e-856", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-857" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|b2b104a2-d07a-a9c1-1902-30898fa834c8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|b2b104a2-d07a-a9c1-1902-30898fa834c8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610825696873 }, "e-858": { "id": "e-858", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-859" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|52303af3-c908-a3b9-823f-81c71065f6b0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|52303af3-c908-a3b9-823f-81c71065f6b0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610825999248 }, "e-864": { "id": "e-864", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-865" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5e987184-e818-581a-281b-0b1579af05d4", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5e987184-e818-581a-281b-0b1579af05d4", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610826061234 }, "e-866": { "id": "e-866", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-867" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|7f77c585-33d1-83c6-d893-4b1b6f2e8fca", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|7f77c585-33d1-83c6-d893-4b1b6f2e8fca", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610826116681 }, "e-868": { "id": "e-868", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-869" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|83c426aa-61c2-6956-61a9-ee4019fbcb24", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|83c426aa-61c2-6956-61a9-ee4019fbcb24", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610826129800 }, "e-870": { "id": "e-870", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-871" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|401c2081-5d70-ac27-afe7-7644b7c5a4af", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|401c2081-5d70-ac27-afe7-7644b7c5a4af", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610826343381 }, "e-872": { "id": "e-872", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-873" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|1e7423aa-c8f5-cc6e-d580-704c001ba4de", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|1e7423aa-c8f5-cc6e-d580-704c001ba4de", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610826352639 }, "e-874": { "id": "e-874", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-875" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|f15f8402-110a-8ad1-4b34-1c3688bba3d5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|f15f8402-110a-8ad1-4b34-1c3688bba3d5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610826365337 }, "e-876": { "id": "e-876", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-877" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|f2c26370-1081-863e-9e30-40338ff61b77", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|f2c26370-1081-863e-9e30-40338ff61b77", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610826555418 }, "e-878": { "id": "e-878", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-68", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-879" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|f2c26370-1081-863e-9e30-40338ff61b77", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|f2c26370-1081-863e-9e30-40338ff61b77", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610826555418 }, "e-879": { "id": "e-879", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-69", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-878" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|f2c26370-1081-863e-9e30-40338ff61b77", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|f2c26370-1081-863e-9e30-40338ff61b77", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610826555418 }, "e-880": { "id": "e-880", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-74", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5ffa104c8efa2b3e579bdbec|f2c26370-1081-863e-9e30-40338ff61b77", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|f2c26370-1081-863e-9e30-40338ff61b77", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-74-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-74-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610826555418 }, "e-881": { "id": "e-881", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-882" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|f2c26370-1081-863e-9e30-40338ff61b77", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|f2c26370-1081-863e-9e30-40338ff61b77", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610826555418 }, "e-882": { "id": "e-882", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-881" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|f2c26370-1081-863e-9e30-40338ff61b77", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|f2c26370-1081-863e-9e30-40338ff61b77", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610826555418 }, "e-883": { "id": "e-883", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-884" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|5505d173-11a5-d3b8-6678-bfff87aa6f1c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|5505d173-11a5-d3b8-6678-bfff87aa6f1c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610826980850 }, "e-885": { "id": "e-885", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-886" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|52c9f1c5-1878-14d5-5a8b-6fd6cf0af936", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|52c9f1c5-1878-14d5-5a8b-6fd6cf0af936", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610827060126 }, "e-887": { "id": "e-887", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-888" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|52c9f1c5-1878-14d5-5a8b-6fd6cf0af939", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|52c9f1c5-1878-14d5-5a8b-6fd6cf0af939", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610827117933 }, "e-889": { "id": "e-889", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-890" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|18ff10c7-cd10-73ff-235d-462678217dd9", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|18ff10c7-cd10-73ff-235d-462678217dd9", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610827143557 }, "e-891": { "id": "e-891", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-75", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-892" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|b9032e45-59b0-1491-2b3a-726daae71c1f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|b9032e45-59b0-1491-2b3a-726daae71c1f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610827232709 }, "e-892": { "id": "e-892", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-76", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-891" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|b9032e45-59b0-1491-2b3a-726daae71c1f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|b9032e45-59b0-1491-2b3a-726daae71c1f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610827232752 }, "e-893": { "id": "e-893", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-75", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-894" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|b9032e45-59b0-1491-2b3a-726daae71c1d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|b9032e45-59b0-1491-2b3a-726daae71c1d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610827332562 }, "e-894": { "id": "e-894", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-76", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-893" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|b9032e45-59b0-1491-2b3a-726daae71c1d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|b9032e45-59b0-1491-2b3a-726daae71c1d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610827332640 }, "e-895": { "id": "e-895", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-896" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|1c8bb899-00dc-ab51-9ad4-8ba17faa3294", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|1c8bb899-00dc-ab51-9ad4-8ba17faa3294", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 20, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610827682710 }, "e-897": { "id": "e-897", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-898" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|1c8bb899-00dc-ab51-9ad4-8ba17faa3297", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|1c8bb899-00dc-ab51-9ad4-8ba17faa3297", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 20, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610827692487 }, "e-899": { "id": "e-899", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-900" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|1c8bb899-00dc-ab51-9ad4-8ba17faa3298", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|1c8bb899-00dc-ab51-9ad4-8ba17faa3298", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 20, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610827713085 }, "e-901": { "id": "e-901", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-902" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|1c8bb899-00dc-ab51-9ad4-8ba17faa3299", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|1c8bb899-00dc-ab51-9ad4-8ba17faa3299", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 20, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610827725866 }, "e-903": { "id": "e-903", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-904" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|1c8bb899-00dc-ab51-9ad4-8ba17faa329b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|1c8bb899-00dc-ab51-9ad4-8ba17faa329b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 20, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610827735263 }, "e-905": { "id": "e-905", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-906" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|3fd02b70-c067-551f-b489-86b33e16c159", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|3fd02b70-c067-551f-b489-86b33e16c159", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610827759322 }, "e-907": { "id": "e-907", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-908" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|02acba68-80d8-eb0c-56b6-c30454f9e23b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|02acba68-80d8-eb0c-56b6-c30454f9e23b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610827854725 }, "e-909": { "id": "e-909", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-910" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|063dd06c-769e-3b1f-33cd-4a8aa088e1a5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|063dd06c-769e-3b1f-33cd-4a8aa088e1a5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610827856691 }, "e-911": { "id": "e-911", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-912" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|ed5253eb-d0d5-1962-70a6-28a169273cde", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|ed5253eb-d0d5-1962-70a6-28a169273cde", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610827858788 }, "e-913": { "id": "e-913", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-68", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-914" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|430bc9d3-5dd2-8f64-31a3-e8c05f7105f6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|430bc9d3-5dd2-8f64-31a3-e8c05f7105f6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610827971617 }, "e-914": { "id": "e-914", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-69", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-913" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|430bc9d3-5dd2-8f64-31a3-e8c05f7105f6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|430bc9d3-5dd2-8f64-31a3-e8c05f7105f6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610827971617 }, "e-915": { "id": "e-915", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-916" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|430bc9d3-5dd2-8f64-31a3-e8c05f7105f6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|430bc9d3-5dd2-8f64-31a3-e8c05f7105f6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610827971617 }, "e-917": { "id": "e-917", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-77", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5ffb3040f2faea2a37229e8f|430bc9d3-5dd2-8f64-31a3-e8c05f7105f6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|430bc9d3-5dd2-8f64-31a3-e8c05f7105f6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-77-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-77-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610827971617 }, "e-918": { "id": "e-918", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-919" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|430bc9d3-5dd2-8f64-31a3-e8c05f7105f6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|430bc9d3-5dd2-8f64-31a3-e8c05f7105f6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610827971617 }, "e-919": { "id": "e-919", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-918" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|430bc9d3-5dd2-8f64-31a3-e8c05f7105f6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|430bc9d3-5dd2-8f64-31a3-e8c05f7105f6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610827971617 }, "e-920": { "id": "e-920", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-921" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|d1aafcc5-e02c-5123-5d50-387b3893f1cd", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|d1aafcc5-e02c-5123-5d50-387b3893f1cd", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610828126707 }, "e-928": { "id": "e-928", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-929" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "70f6b488-7109-274c-1b7b-5a482466843b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "70f6b488-7109-274c-1b7b-5a482466843b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610828345084 }, "e-929": { "id": "e-929", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-928" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "70f6b488-7109-274c-1b7b-5a482466843b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "70f6b488-7109-274c-1b7b-5a482466843b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610828345084 }, "e-930": { "id": "e-930", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-78", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "70f6b488-7109-274c-1b7b-5a482466843b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "70f6b488-7109-274c-1b7b-5a482466843b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-78-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-78-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610828345084 }, "e-931": { "id": "e-931", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-68", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-932" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "70f6b488-7109-274c-1b7b-5a482466843b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "70f6b488-7109-274c-1b7b-5a482466843b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610828345084 }, "e-932": { "id": "e-932", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-69", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-931" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "70f6b488-7109-274c-1b7b-5a482466843b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "70f6b488-7109-274c-1b7b-5a482466843b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610828345084 }, "e-933": { "id": "e-933", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-934" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "70f6b488-7109-274c-1b7b-5a482466843b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "70f6b488-7109-274c-1b7b-5a482466843b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610828345084 }, "e-935": { "id": "e-935", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-79", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|bd922209-6a09-0246-ebab-3c0160920ec6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|bd922209-6a09-0246-ebab-3c0160920ec6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-79-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-79-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610829263635 }, "e-936": { "id": "e-936", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-937" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|bd922209-6a09-0246-ebab-3c0160920ec6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|bd922209-6a09-0246-ebab-3c0160920ec6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610829272365 }, "e-937": { "id": "e-937", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-936" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|bd922209-6a09-0246-ebab-3c0160920ec6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|bd922209-6a09-0246-ebab-3c0160920ec6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610829272450 }, "e-938": { "id": "e-938", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-80", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-939" } }, "mediaQueries": ["main"], "target": { "id": "5ffb3040f2faea2a37229e8f|bd922209-6a09-0246-ebab-3c0160920ec6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|bd922209-6a09-0246-ebab-3c0160920ec6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610829330146 }, "e-939": { "id": "e-939", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-81", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-938" } }, "mediaQueries": ["main"], "target": { "id": "5ffb3040f2faea2a37229e8f|bd922209-6a09-0246-ebab-3c0160920ec6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|bd922209-6a09-0246-ebab-3c0160920ec6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610829330230 }, "e-940": { "id": "e-940", "name": "", "animationType": "custom", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-62", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff987009f2f4cb0e753887b|60886df1-ba29-6ffb-b7ef-2d060491016f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff987009f2f4cb0e753887b|60886df1-ba29-6ffb-b7ef-2d060491016f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-62-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1610884495491 }, "e-948": { "id": "e-948", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-82", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "e236cc33-2c08-27b1-83eb-976f233ae42a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "e236cc33-2c08-27b1-83eb-976f233ae42a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-82-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-82-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610885353232 }, "e-949": { "id": "e-949", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-950" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "e236cc33-2c08-27b1-83eb-976f233ae42a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "e236cc33-2c08-27b1-83eb-976f233ae42a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 35, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610885353232 }, "e-951": { "id": "e-951", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-68", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-952" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "e236cc33-2c08-27b1-83eb-976f233ae42a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "e236cc33-2c08-27b1-83eb-976f233ae42a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610885353232 }, "e-952": { "id": "e-952", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-69", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-951" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "e236cc33-2c08-27b1-83eb-976f233ae42a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "e236cc33-2c08-27b1-83eb-976f233ae42a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610885353232 }, "e-953": { "id": "e-953", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-954" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "e236cc33-2c08-27b1-83eb-976f233ae42a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "e236cc33-2c08-27b1-83eb-976f233ae42a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610885353232 }, "e-954": { "id": "e-954", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-953" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "e236cc33-2c08-27b1-83eb-976f233ae42a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "e236cc33-2c08-27b1-83eb-976f233ae42a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610885353232 }, "e-955": { "id": "e-955", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-956" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "e236cc33-2c08-27b1-83eb-976f233ae431", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "e236cc33-2c08-27b1-83eb-976f233ae431", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610888538707 }, "e-957": { "id": "e-957", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-83", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-958" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0235762a45f5b|b9383457-0c2f-fd35-37bb-61d29ed41fe1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0235762a45f5b|b9383457-0c2f-fd35-37bb-61d29ed41fe1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1586977193602 }, "e-958": { "id": "e-958", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-84", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-957" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0235762a45f5b|b9383457-0c2f-fd35-37bb-61d29ed41fe1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0235762a45f5b|b9383457-0c2f-fd35-37bb-61d29ed41fe1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1586977193633 }, "e-959": { "id": "e-959", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-83", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-960" } }, "mediaQueries": ["main", "medium"], "target": { "id": "5fc6783f0fa0235762a45f5b|b9383457-0c2f-fd35-37bb-61d29ed41fe2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0235762a45f5b|b9383457-0c2f-fd35-37bb-61d29ed41fe2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1586977152068 }, "e-960": { "id": "e-960", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-84", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-959" } }, "mediaQueries": ["main", "medium"], "target": { "id": "5fc6783f0fa0235762a45f5b|b9383457-0c2f-fd35-37bb-61d29ed41fe2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0235762a45f5b|b9383457-0c2f-fd35-37bb-61d29ed41fe2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1586977152069 }, "e-963": { "id": "e-963", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-86", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-964" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "edfaeafe-fb4e-d36d-6c12-98314759ea96", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "edfaeafe-fb4e-d36d-6c12-98314759ea96", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610894987980 }, "e-965": { "id": "e-965", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-87", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-966" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "edfaeafe-fb4e-d36d-6c12-98314759ea98", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "edfaeafe-fb4e-d36d-6c12-98314759ea98", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610894987980 }, "e-967": { "id": "e-967", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-88", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-968" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "edfaeafe-fb4e-d36d-6c12-98314759ea9b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "edfaeafe-fb4e-d36d-6c12-98314759ea9b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610894987980 }, "e-969": { "id": "e-969", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-89", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-970" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "edfaeafe-fb4e-d36d-6c12-98314759ea9d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "edfaeafe-fb4e-d36d-6c12-98314759ea9d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610894987980 }, "e-971": { "id": "e-971", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-90", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-972" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "edfaeafe-fb4e-d36d-6c12-98314759eaa0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "edfaeafe-fb4e-d36d-6c12-98314759eaa0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610894987980 }, "e-973": { "id": "e-973", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-974" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|c1608e7e-8ca5-0603-6693-64f333cbad1e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|c1608e7e-8ca5-0603-6693-64f333cbad1e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610894987980 }, "e-975": { "id": "e-975", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-976" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|c1608e7e-8ca5-0603-6693-64f333cbad22", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|c1608e7e-8ca5-0603-6693-64f333cbad22", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610894987980 }, "e-977": { "id": "e-977", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-978" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|c1608e7e-8ca5-0603-6693-64f333cbad24", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|c1608e7e-8ca5-0603-6693-64f333cbad24", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610894987980 }, "e-979": { "id": "e-979", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-980" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa023ceeda45f59|09d7af62-eea6-e7c4-8044-ac0145ac14cd", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa023ceeda45f59|09d7af62-eea6-e7c4-8044-ac0145ac14cd", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610895507368 }, "e-981": { "id": "e-981", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-982" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa023ceeda45f59|09d7af62-eea6-e7c4-8044-ac0145ac14d1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa023ceeda45f59|09d7af62-eea6-e7c4-8044-ac0145ac14d1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610895507368 }, "e-983": { "id": "e-983", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-984" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa023ceeda45f59|09d7af62-eea6-e7c4-8044-ac0145ac14d3", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa023ceeda45f59|09d7af62-eea6-e7c4-8044-ac0145ac14d3", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610895507368 }, "e-995": { "id": "e-995", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-996" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8aeb5ba71e05ce875d656|8d3ebd43-e77f-7184-988b-577ef075a86a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8aeb5ba71e05ce875d656|8d3ebd43-e77f-7184-988b-577ef075a86a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610900872190 }, "e-997": { "id": "e-997", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-998" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa023fedfa45f57|ff31b193-f3e8-f334-8a48-b9b1ef677720", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa023fedfa45f57|ff31b193-f3e8-f334-8a48-b9b1ef677720", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610900969398 }, "e-999": { "id": "e-999", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1000" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa023fedfa45f57|1c8af44c-a845-483b-b5d7-30163552eea9", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa023fedfa45f57|1c8af44c-a845-483b-b5d7-30163552eea9", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610901047235 }, "e-1001": { "id": "e-1001", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1002" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa023fedfa45f57|3ca50bba-4a6d-4503-476f-23e58c5531d4", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa023fedfa45f57|3ca50bba-4a6d-4503-476f-23e58c5531d4", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610901109779 }, "e-1005": { "id": "e-1005", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-27", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1006" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa023fedfa45f57|68e8e310-c406-0985-009f-3a0a32aa8eca", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa023fedfa45f57|68e8e310-c406-0985-009f-3a0a32aa8eca", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610901395250 }, "e-1006": { "id": "e-1006", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-28", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1005" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa023fedfa45f57|68e8e310-c406-0985-009f-3a0a32aa8eca", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa023fedfa45f57|68e8e310-c406-0985-009f-3a0a32aa8eca", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610901395250 }, "e-1007": { "id": "e-1007", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1008" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa023fedfa45f57|5713790f-aa60-913c-fad6-0dab5987210f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa023fedfa45f57|5713790f-aa60-913c-fad6-0dab5987210f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610901481447 }, "e-1009": { "id": "e-1009", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1010" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa023fedfa45f57|146c91e4-b711-f336-e0d5-0eac981918a4", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa023fedfa45f57|146c91e4-b711-f336-e0d5-0eac981918a4", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610901781932 }, "e-1011": { "id": "e-1011", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1012" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa023fedfa45f57|f6c1f527-62bf-26f0-ca9e-f33cf6bd75cb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa023fedfa45f57|f6c1f527-62bf-26f0-ca9e-f33cf6bd75cb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610901935629 }, "e-1013": { "id": "e-1013", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1014" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa023fedfa45f57|3df41d78-3e43-cfa1-8d19-524b355b257d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa023fedfa45f57|3df41d78-3e43-cfa1-8d19-524b355b257d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610901945175 }, "e-1015": { "id": "e-1015", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1016" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa023fedfa45f57|c6bc8913-5b75-3bc6-87e6-d9fbcfdfd956", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa023fedfa45f57|c6bc8913-5b75-3bc6-87e6-d9fbcfdfd956", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610901948213 }, "e-1017": { "id": "e-1017", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1018" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa023fedfa45f57|d0e88c11-e0be-ba65-0ea1-015b8357fd59", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa023fedfa45f57|d0e88c11-e0be-ba65-0ea1-015b8357fd59", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610901950564 }, "e-1019": { "id": "e-1019", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-91", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1020" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa023fedfa45f57|81651fe2-019d-2720-2649-f5d273a346a7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa023fedfa45f57|81651fe2-019d-2720-2649-f5d273a346a7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610902059494 }, "e-1020": { "id": "e-1020", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-92", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1019" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa023fedfa45f57|81651fe2-019d-2720-2649-f5d273a346a7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa023fedfa45f57|81651fe2-019d-2720-2649-f5d273a346a7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610902059552 }, "e-1021": { "id": "e-1021", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-68", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1022" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8a9e9de16f2744a7115d1|25ce8b83-35a6-4232-32e6-882bb4b58420", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8a9e9de16f2744a7115d1|25ce8b83-35a6-4232-32e6-882bb4b58420", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610905231944 }, "e-1022": { "id": "e-1022", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-69", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1021" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8a9e9de16f2744a7115d1|25ce8b83-35a6-4232-32e6-882bb4b58420", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8a9e9de16f2744a7115d1|25ce8b83-35a6-4232-32e6-882bb4b58420", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610905231944 }, "e-1023": { "id": "e-1023", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1024" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8a9e9de16f2744a7115d1|25ce8b83-35a6-4232-32e6-882bb4b58420", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8a9e9de16f2744a7115d1|25ce8b83-35a6-4232-32e6-882bb4b58420", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610905231944 }, "e-1025": { "id": "e-1025", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1026" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8a9e9de16f2744a7115d1|25ce8b83-35a6-4232-32e6-882bb4b58420", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8a9e9de16f2744a7115d1|25ce8b83-35a6-4232-32e6-882bb4b58420", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610905231944 }, "e-1026": { "id": "e-1026", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1025" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8a9e9de16f2744a7115d1|25ce8b83-35a6-4232-32e6-882bb4b58420", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8a9e9de16f2744a7115d1|25ce8b83-35a6-4232-32e6-882bb4b58420", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610905231944 }, "e-1027": { "id": "e-1027", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-66", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5ff8a9e9de16f2744a7115d1|25ce8b83-35a6-4232-32e6-882bb4b58420", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8a9e9de16f2744a7115d1|25ce8b83-35a6-4232-32e6-882bb4b58420", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-66-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-66-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610905231944 }, "e-1028": { "id": "e-1028", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1029" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa02398e5a45f58|4d70da4c-1b2c-7001-4dc7-7d697bd42fc1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa02398e5a45f58|4d70da4c-1b2c-7001-4dc7-7d697bd42fc1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610905329998 }, "e-1032": { "id": "e-1032", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-68", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1033" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa02398e5a45f58|4d70da4c-1b2c-7001-4dc7-7d697bd42fd1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa02398e5a45f58|4d70da4c-1b2c-7001-4dc7-7d697bd42fd1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610905329998 }, "e-1033": { "id": "e-1033", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-69", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1032" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa02398e5a45f58|4d70da4c-1b2c-7001-4dc7-7d697bd42fd1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa02398e5a45f58|4d70da4c-1b2c-7001-4dc7-7d697bd42fd1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610905329998 }, "e-1034": { "id": "e-1034", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1035" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa02398e5a45f58|4d70da4c-1b2c-7001-4dc7-7d697bd42fd1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa02398e5a45f58|4d70da4c-1b2c-7001-4dc7-7d697bd42fd1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610905329998 }, "e-1036": { "id": "e-1036", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1037" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa02398e5a45f58|4d70da4c-1b2c-7001-4dc7-7d697bd42fd1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa02398e5a45f58|4d70da4c-1b2c-7001-4dc7-7d697bd42fd1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610905329998 }, "e-1037": { "id": "e-1037", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1036" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa02398e5a45f58|4d70da4c-1b2c-7001-4dc7-7d697bd42fd1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa02398e5a45f58|4d70da4c-1b2c-7001-4dc7-7d697bd42fd1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610905329998 }, "e-1038": { "id": "e-1038", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-66", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5fc6783f0fa02398e5a45f58|4d70da4c-1b2c-7001-4dc7-7d697bd42fd1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa02398e5a45f58|4d70da4c-1b2c-7001-4dc7-7d697bd42fd1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-66-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-66-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610905329998 }, "e-1039": { "id": "e-1039", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1040" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa02398e5a45f58|4d70da4c-1b2c-7001-4dc7-7d697bd42fe7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa02398e5a45f58|4d70da4c-1b2c-7001-4dc7-7d697bd42fe7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610905329998 }, "e-1043": { "id": "e-1043", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1044" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0230361a45f5a|41589b8d-27e4-83e0-7991-4abb2e52d2e5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0230361a45f5a|41589b8d-27e4-83e0-7991-4abb2e52d2e5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610906424856 }, "e-1044": { "id": "e-1044", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1043" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0230361a45f5a|41589b8d-27e4-83e0-7991-4abb2e52d2e5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0230361a45f5a|41589b8d-27e4-83e0-7991-4abb2e52d2e5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610906424856 }, "e-1045": { "id": "e-1045", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-80", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1046" } }, "mediaQueries": ["main"], "target": { "id": "5fc6783f0fa0230361a45f5a|41589b8d-27e4-83e0-7991-4abb2e52d2e5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0230361a45f5a|41589b8d-27e4-83e0-7991-4abb2e52d2e5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610906424856 }, "e-1046": { "id": "e-1046", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-81", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1045" } }, "mediaQueries": ["main"], "target": { "id": "5fc6783f0fa0230361a45f5a|41589b8d-27e4-83e0-7991-4abb2e52d2e5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0230361a45f5a|41589b8d-27e4-83e0-7991-4abb2e52d2e5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610906424856 }, "e-1047": { "id": "e-1047", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-79", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0230361a45f5a|41589b8d-27e4-83e0-7991-4abb2e52d2e5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0230361a45f5a|41589b8d-27e4-83e0-7991-4abb2e52d2e5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-79-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-79-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610906424856 }, "e-1048": { "id": "e-1048", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-16", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1049" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0230361a45f5a|41589b8d-27e4-83e0-7991-4abb2e52d2f1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0230361a45f5a|41589b8d-27e4-83e0-7991-4abb2e52d2f1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610906424856 }, "e-1049": { "id": "e-1049", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-17", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1048" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0230361a45f5a|41589b8d-27e4-83e0-7991-4abb2e52d2f1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0230361a45f5a|41589b8d-27e4-83e0-7991-4abb2e52d2f1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610906424856 }, "e-1050": { "id": "e-1050", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1051" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0230361a45f5a|41589b8d-27e4-83e0-7991-4abb2e52d2f7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0230361a45f5a|41589b8d-27e4-83e0-7991-4abb2e52d2f7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610906424856 }, "e-1052": { "id": "e-1052", "name": "", "animationType": "custom", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-93", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5fc6783f0fa0236084a45f52|5661fffb-aabe-7c13-e61f-f79a157df50d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|5661fffb-aabe-7c13-e61f-f79a157df50d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-93-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1610906735398 }, "e-1053": { "id": "e-1053", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-94", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1054" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|3a66eb70-a4d3-406f-b1bc-88af0dbef454", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|3a66eb70-a4d3-406f-b1bc-88af0dbef454", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610907515415 }, "e-1055": { "id": "e-1055", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-94", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1056" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|e255cf51-d794-dfd1-c30f-9b704a2b51bc", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|e255cf51-d794-dfd1-c30f-9b704a2b51bc", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610907715273 }, "e-1057": { "id": "e-1057", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-94", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1058" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|fbfde25a-bd68-3ed7-f987-e461089ece52", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|fbfde25a-bd68-3ed7-f987-e461089ece52", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610907742147 }, "e-1059": { "id": "e-1059", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-94", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1060" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|f2c26370-1081-863e-9e30-40338ff61b79", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|f2c26370-1081-863e-9e30-40338ff61b79", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610907752763 }, "e-1061": { "id": "e-1061", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-94", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1062" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|430bc9d3-5dd2-8f64-31a3-e8c05f7105fa", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|430bc9d3-5dd2-8f64-31a3-e8c05f7105fa", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610907771162 }, "e-1063": { "id": "e-1063", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-94", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1064" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "70f6b488-7109-274c-1b7b-5a482466843d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "70f6b488-7109-274c-1b7b-5a482466843d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610907782932 }, "e-1065": { "id": "e-1065", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-94", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1066" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffb3040f2faea2a37229e8f|966be7bf-2cd9-e081-ba54-04528960c3a5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffb3040f2faea2a37229e8f|966be7bf-2cd9-e081-ba54-04528960c3a5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610907804964 }, "e-1067": { "id": "e-1067", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-94", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1068" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa104c8efa2b3e579bdbec|7c1ade5a-d6a3-5222-72fb-8db5b85eb6db", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa104c8efa2b3e579bdbec|7c1ade5a-d6a3-5222-72fb-8db5b85eb6db", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610907858070 }, "e-1069": { "id": "e-1069", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-94", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1070" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|2bd9bcfd-1415-e7a6-a276-c1ef48ff7869", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|2bd9bcfd-1415-e7a6-a276-c1ef48ff7869", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610907874047 }, "e-1071": { "id": "e-1071", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-94", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1072" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "e236cc33-2c08-27b1-83eb-976f233ae42e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "e236cc33-2c08-27b1-83eb-976f233ae42e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610908381925 }, "e-1073": { "id": "e-1073", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-85", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1074" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "edfaeafe-fb4e-d36d-6c12-98314759ea93", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "edfaeafe-fb4e-d36d-6c12-98314759ea93", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610908567997 }, "e-1075": { "id": "e-1075", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1076" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|b9c9b713-ea34-904e-c093-90e4418ac754", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|b9c9b713-ea34-904e-c093-90e4418ac754", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610908925969 }, "e-1076": { "id": "e-1076", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1075" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|b9c9b713-ea34-904e-c093-90e4418ac754", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|b9c9b713-ea34-904e-c093-90e4418ac754", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610908926018 }, "e-1077": { "id": "e-1077", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-70", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|b9c9b713-ea34-904e-c093-90e4418ac754", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|b9c9b713-ea34-904e-c093-90e4418ac754", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-70-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-70-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610908961600 }, "e-1078": { "id": "e-1078", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-71", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1079" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|b9c9b713-ea34-904e-c093-90e4418ac754", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|b9c9b713-ea34-904e-c093-90e4418ac754", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610908979752 }, "e-1079": { "id": "e-1079", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-72", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1078" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|b9c9b713-ea34-904e-c093-90e4418ac754", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|b9c9b713-ea34-904e-c093-90e4418ac754", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610908979838 }, "e-1091": { "id": "e-1091", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-83", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1092" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8aeb5ba71e05ce875d656|88517f6a-049e-dbf2-b919-5731c9768a67", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8aeb5ba71e05ce875d656|88517f6a-049e-dbf2-b919-5731c9768a67", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610915362764 }, "e-1092": { "id": "e-1092", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-84", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1091" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8aeb5ba71e05ce875d656|88517f6a-049e-dbf2-b919-5731c9768a67", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8aeb5ba71e05ce875d656|88517f6a-049e-dbf2-b919-5731c9768a67", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610915362826 }, "e-1093": { "id": "e-1093", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-83", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1094" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8aeb5ba71e05ce875d656|dd29e705-0013-f127-e719-b0dca2bd4769", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8aeb5ba71e05ce875d656|dd29e705-0013-f127-e719-b0dca2bd4769", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610915443107 }, "e-1094": { "id": "e-1094", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-84", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1093" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8aeb5ba71e05ce875d656|dd29e705-0013-f127-e719-b0dca2bd4769", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8aeb5ba71e05ce875d656|dd29e705-0013-f127-e719-b0dca2bd4769", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610915443107 }, "e-1095": { "id": "e-1095", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-83", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1096" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8aeb5ba71e05ce875d656|2ac8ce94-97b8-f139-3033-27a58889ab70", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8aeb5ba71e05ce875d656|2ac8ce94-97b8-f139-3033-27a58889ab70", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610915443812 }, "e-1096": { "id": "e-1096", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-84", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1095" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8aeb5ba71e05ce875d656|2ac8ce94-97b8-f139-3033-27a58889ab70", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8aeb5ba71e05ce875d656|2ac8ce94-97b8-f139-3033-27a58889ab70", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610915443812 }, "e-1097": { "id": "e-1097", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-83", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1098" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "cfe3af96-bd22-4c2f-86b7-d105af899f0b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "cfe3af96-bd22-4c2f-86b7-d105af899f0b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610915474522 }, "e-1098": { "id": "e-1098", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-84", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1097" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "cfe3af96-bd22-4c2f-86b7-d105af899f0b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "cfe3af96-bd22-4c2f-86b7-d105af899f0b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610915474522 }, "e-1099": { "id": "e-1099", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-83", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1100" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "cfe3af96-bd22-4c2f-86b7-d105af899f0d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "cfe3af96-bd22-4c2f-86b7-d105af899f0d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610915474522 }, "e-1100": { "id": "e-1100", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-84", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1099" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "cfe3af96-bd22-4c2f-86b7-d105af899f0d", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "cfe3af96-bd22-4c2f-86b7-d105af899f0d", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610915474522 }, "e-1101": { "id": "e-1101", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-83", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1102" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "cfe3af96-bd22-4c2f-86b7-d105af899f0f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "cfe3af96-bd22-4c2f-86b7-d105af899f0f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610915474522 }, "e-1102": { "id": "e-1102", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-84", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1101" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "cfe3af96-bd22-4c2f-86b7-d105af899f0f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "cfe3af96-bd22-4c2f-86b7-d105af899f0f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610915474522 }, "e-1103": { "id": "e-1103", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-67", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5ffa4abac98da91979071d59|94dc0808-6ec1-98a2-063b-7c7ef0453262", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa4abac98da91979071d59|94dc0808-6ec1-98a2-063b-7c7ef0453262", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-67-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-67-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610917296650 }, "e-1104": { "id": "e-1104", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-68", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1105" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa4abac98da91979071d59|94dc0808-6ec1-98a2-063b-7c7ef0453262", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa4abac98da91979071d59|94dc0808-6ec1-98a2-063b-7c7ef0453262", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917296650 }, "e-1105": { "id": "e-1105", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-69", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1104" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa4abac98da91979071d59|94dc0808-6ec1-98a2-063b-7c7ef0453262", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa4abac98da91979071d59|94dc0808-6ec1-98a2-063b-7c7ef0453262", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917296650 }, "e-1106": { "id": "e-1106", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1107" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa4abac98da91979071d59|94dc0808-6ec1-98a2-063b-7c7ef0453262", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa4abac98da91979071d59|94dc0808-6ec1-98a2-063b-7c7ef0453262", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917296650 }, "e-1108": { "id": "e-1108", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1109" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa4abac98da91979071d59|94dc0808-6ec1-98a2-063b-7c7ef0453262", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa4abac98da91979071d59|94dc0808-6ec1-98a2-063b-7c7ef0453262", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917296650 }, "e-1109": { "id": "e-1109", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1108" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa4abac98da91979071d59|94dc0808-6ec1-98a2-063b-7c7ef0453262", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa4abac98da91979071d59|94dc0808-6ec1-98a2-063b-7c7ef0453262", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917296650 }, "e-1110": { "id": "e-1110", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-94", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1111" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa4abac98da91979071d59|94dc0808-6ec1-98a2-063b-7c7ef0453266", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa4abac98da91979071d59|94dc0808-6ec1-98a2-063b-7c7ef0453266", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917296650 }, "e-1112": { "id": "e-1112", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-16", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1113" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa4abac98da91979071d59|94dc0808-6ec1-98a2-063b-7c7ef045326f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa4abac98da91979071d59|94dc0808-6ec1-98a2-063b-7c7ef045326f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917296650 }, "e-1113": { "id": "e-1113", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-17", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1112" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa4abac98da91979071d59|94dc0808-6ec1-98a2-063b-7c7ef045326f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa4abac98da91979071d59|94dc0808-6ec1-98a2-063b-7c7ef045326f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917296650 }, "e-1114": { "id": "e-1114", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1115" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "6001645e717c024bb15b6f7f|b54a515d-06b3-1742-228c-24ce79d49b63", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "6001645e717c024bb15b6f7f|b54a515d-06b3-1742-228c-24ce79d49b63", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917363143 }, "e-1116": { "id": "e-1116", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-77", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "6001645e717c024bb15b6f7f|b54a515d-06b3-1742-228c-24ce79d49b63", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "6001645e717c024bb15b6f7f|b54a515d-06b3-1742-228c-24ce79d49b63", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-77-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-77-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610917363143 }, "e-1117": { "id": "e-1117", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-68", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1118" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "6001645e717c024bb15b6f7f|b54a515d-06b3-1742-228c-24ce79d49b63", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "6001645e717c024bb15b6f7f|b54a515d-06b3-1742-228c-24ce79d49b63", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917363143 }, "e-1118": { "id": "e-1118", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-69", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1117" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "6001645e717c024bb15b6f7f|b54a515d-06b3-1742-228c-24ce79d49b63", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "6001645e717c024bb15b6f7f|b54a515d-06b3-1742-228c-24ce79d49b63", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917363143 }, "e-1119": { "id": "e-1119", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1120" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "6001645e717c024bb15b6f7f|b54a515d-06b3-1742-228c-24ce79d49b63", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "6001645e717c024bb15b6f7f|b54a515d-06b3-1742-228c-24ce79d49b63", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917363143 }, "e-1120": { "id": "e-1120", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1119" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "6001645e717c024bb15b6f7f|b54a515d-06b3-1742-228c-24ce79d49b63", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "6001645e717c024bb15b6f7f|b54a515d-06b3-1742-228c-24ce79d49b63", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917363143 }, "e-1121": { "id": "e-1121", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-94", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1122" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "6001645e717c024bb15b6f7f|b54a515d-06b3-1742-228c-24ce79d49b67", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "6001645e717c024bb15b6f7f|b54a515d-06b3-1742-228c-24ce79d49b67", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917363143 }, "e-1123": { "id": "e-1123", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-16", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1124" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "6001645e717c024bb15b6f7f|b54a515d-06b3-1742-228c-24ce79d49b78", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "6001645e717c024bb15b6f7f|b54a515d-06b3-1742-228c-24ce79d49b78", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917363143 }, "e-1124": { "id": "e-1124", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-17", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1123" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "6001645e717c024bb15b6f7f|b54a515d-06b3-1742-228c-24ce79d49b78", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "6001645e717c024bb15b6f7f|b54a515d-06b3-1742-228c-24ce79d49b78", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917363143 }, "e-1125": { "id": "e-1125", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1126" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff878581b4f189c6155d657|f6117960-6e07-eab2-049d-1566d117593a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff878581b4f189c6155d657|f6117960-6e07-eab2-049d-1566d117593a", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917446748 }, "e-1127": { "id": "e-1127", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1128" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff878581b4f189c6155d657|f6117960-6e07-eab2-049d-1566d117593e", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff878581b4f189c6155d657|f6117960-6e07-eab2-049d-1566d117593e", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917446748 }, "e-1129": { "id": "e-1129", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1130" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff878581b4f189c6155d657|f6117960-6e07-eab2-049d-1566d1175940", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff878581b4f189c6155d657|f6117960-6e07-eab2-049d-1566d1175940", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917446748 }, "e-1131": { "id": "e-1131", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1132" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffadaf1d25a5e5f8cce7503|69b6c068-546c-aafe-e7ec-80179f3825e3", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffadaf1d25a5e5f8cce7503|69b6c068-546c-aafe-e7ec-80179f3825e3", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917556345 }, "e-1133": { "id": "e-1133", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-68", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1134" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffadaf1d25a5e5f8cce7503|69b6c068-546c-aafe-e7ec-80179f3825f0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffadaf1d25a5e5f8cce7503|69b6c068-546c-aafe-e7ec-80179f3825f0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917556345 }, "e-1134": { "id": "e-1134", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-69", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1133" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffadaf1d25a5e5f8cce7503|69b6c068-546c-aafe-e7ec-80179f3825f0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffadaf1d25a5e5f8cce7503|69b6c068-546c-aafe-e7ec-80179f3825f0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917556345 }, "e-1135": { "id": "e-1135", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-74", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5ffadaf1d25a5e5f8cce7503|69b6c068-546c-aafe-e7ec-80179f3825f0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffadaf1d25a5e5f8cce7503|69b6c068-546c-aafe-e7ec-80179f3825f0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-74-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-74-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610917556345 }, "e-1136": { "id": "e-1136", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1137" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffadaf1d25a5e5f8cce7503|69b6c068-546c-aafe-e7ec-80179f3825f0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffadaf1d25a5e5f8cce7503|69b6c068-546c-aafe-e7ec-80179f3825f0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917556345 }, "e-1138": { "id": "e-1138", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1139" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffadaf1d25a5e5f8cce7503|69b6c068-546c-aafe-e7ec-80179f3825f0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffadaf1d25a5e5f8cce7503|69b6c068-546c-aafe-e7ec-80179f3825f0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917556345 }, "e-1139": { "id": "e-1139", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1138" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffadaf1d25a5e5f8cce7503|69b6c068-546c-aafe-e7ec-80179f3825f0", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffadaf1d25a5e5f8cce7503|69b6c068-546c-aafe-e7ec-80179f3825f0", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917556345 }, "e-1140": { "id": "e-1140", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-94", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1141" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffadaf1d25a5e5f8cce7503|69b6c068-546c-aafe-e7ec-80179f3825f2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffadaf1d25a5e5f8cce7503|69b6c068-546c-aafe-e7ec-80179f3825f2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917556345 }, "e-1142": { "id": "e-1142", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1143" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffadaf1d25a5e5f8cce7503|69b6c068-546c-aafe-e7ec-80179f3825f9", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffadaf1d25a5e5f8cce7503|69b6c068-546c-aafe-e7ec-80179f3825f9", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917556345 }, "e-1144": { "id": "e-1144", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1145" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffadaf1d25a5e5f8cce7503|69b6c068-546c-aafe-e7ec-80179f3825fa", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffadaf1d25a5e5f8cce7503|69b6c068-546c-aafe-e7ec-80179f3825fa", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917556345 }, "e-1146": { "id": "e-1146", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1147" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffadaf1d25a5e5f8cce7503|69b6c068-546c-aafe-e7ec-80179f3825fd", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffadaf1d25a5e5f8cce7503|69b6c068-546c-aafe-e7ec-80179f3825fd", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917556345 }, "e-1195": { "id": "e-1195", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1196" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0116", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0116", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1197": { "id": "e-1197", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1198" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0122", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0122", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1198": { "id": "e-1198", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1197" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0122", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0122", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1199": { "id": "e-1199", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-65", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0122", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0122", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-65-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-65-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610917652926 }, "e-1200": { "id": "e-1200", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-68", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1201" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0122", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0122", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1201": { "id": "e-1201", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-69", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1200" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0122", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0122", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1202": { "id": "e-1202", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1203" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0122", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0122", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1204": { "id": "e-1204", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-94", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1205" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0124", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0124", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1206": { "id": "e-1206", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1207" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b012b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b012b", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1208": { "id": "e-1208", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1209" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b012c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b012c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1210": { "id": "e-1210", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1211" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b012f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b012f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1212": { "id": "e-1212", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-68", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1213" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b013f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b013f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1213": { "id": "e-1213", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-69", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1212" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b013f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b013f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1214": { "id": "e-1214", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1215" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b013f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b013f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1216": { "id": "e-1216", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1217" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b013f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b013f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1217": { "id": "e-1217", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1216" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b013f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b013f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1218": { "id": "e-1218", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-65", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b013f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b013f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-65-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-65-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610917652926 }, "e-1219": { "id": "e-1219", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1220" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0148", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0148", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1221": { "id": "e-1221", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1222" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0149", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0149", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1223": { "id": "e-1223", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1224" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b014c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b014c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1225": { "id": "e-1225", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1226" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b015c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b015c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1226": { "id": "e-1226", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1225" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b015c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b015c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1227": { "id": "e-1227", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-68", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1228" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b015c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b015c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1228": { "id": "e-1228", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-69", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1227" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b015c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b015c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1229": { "id": "e-1229", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-10", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1230" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b015c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b015c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1231": { "id": "e-1231", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-65", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b015c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b015c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-65-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-65-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610917652926 }, "e-1232": { "id": "e-1232", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1233" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0165", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0165", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1234": { "id": "e-1234", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1235" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0166", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0166", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1236": { "id": "e-1236", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1237" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0167", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0167", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1238": { "id": "e-1238", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1239" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0169", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0169", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1240": { "id": "e-1240", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1241" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0176", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffcbc7d2f5eb04c19ea31c4|e2064c5c-8229-a028-7535-b6e6702b0176", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917652926 }, "e-1242": { "id": "e-1242", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1243" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8e94cd5a56752e69cf62a|76affaf2-ddf7-dfcb-6c6c-293a15e96acb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8e94cd5a56752e69cf62a|76affaf2-ddf7-dfcb-6c6c-293a15e96acb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917826368 }, "e-1244": { "id": "e-1244", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1245" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8e94cd5a56752e69cf62a|76affaf2-ddf7-dfcb-6c6c-293a15e96ad7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8e94cd5a56752e69cf62a|76affaf2-ddf7-dfcb-6c6c-293a15e96ad7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917826368 }, "e-1245": { "id": "e-1245", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1244" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8e94cd5a56752e69cf62a|76affaf2-ddf7-dfcb-6c6c-293a15e96ad7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8e94cd5a56752e69cf62a|76affaf2-ddf7-dfcb-6c6c-293a15e96ad7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917826368 }, "e-1246": { "id": "e-1246", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-79", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8e94cd5a56752e69cf62a|76affaf2-ddf7-dfcb-6c6c-293a15e96ad7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8e94cd5a56752e69cf62a|76affaf2-ddf7-dfcb-6c6c-293a15e96ad7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-79-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-79-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610917826368 }, "e-1247": { "id": "e-1247", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-80", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1248" } }, "mediaQueries": ["main"], "target": { "id": "5ff8e94cd5a56752e69cf62a|76affaf2-ddf7-dfcb-6c6c-293a15e96ad7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8e94cd5a56752e69cf62a|76affaf2-ddf7-dfcb-6c6c-293a15e96ad7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917826368 }, "e-1248": { "id": "e-1248", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-81", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1247" } }, "mediaQueries": ["main"], "target": { "id": "5ff8e94cd5a56752e69cf62a|76affaf2-ddf7-dfcb-6c6c-293a15e96ad7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8e94cd5a56752e69cf62a|76affaf2-ddf7-dfcb-6c6c-293a15e96ad7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917826368 }, "e-1249": { "id": "e-1249", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-94", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1250" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8e94cd5a56752e69cf62a|76affaf2-ddf7-dfcb-6c6c-293a15e96ad8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8e94cd5a56752e69cf62a|76affaf2-ddf7-dfcb-6c6c-293a15e96ad8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917826368 }, "e-1251": { "id": "e-1251", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-16", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1252" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8e94cd5a56752e69cf62a|76affaf2-ddf7-dfcb-6c6c-293a15e96ae3", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8e94cd5a56752e69cf62a|76affaf2-ddf7-dfcb-6c6c-293a15e96ae3", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917826368 }, "e-1252": { "id": "e-1252", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-17", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1251" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8e94cd5a56752e69cf62a|76affaf2-ddf7-dfcb-6c6c-293a15e96ae3", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8e94cd5a56752e69cf62a|76affaf2-ddf7-dfcb-6c6c-293a15e96ae3", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917826368 }, "e-1253": { "id": "e-1253", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1254" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8e94cd5a56752e69cf62a|76affaf2-ddf7-dfcb-6c6c-293a15e96ae9", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8e94cd5a56752e69cf62a|76affaf2-ddf7-dfcb-6c6c-293a15e96ae9", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917826368 }, "e-1255": { "id": "e-1255", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-32", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5ffade297fde030f236ea86a|50bc1933-8315-6142-b7a2-136dc44dd399", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffade297fde030f236ea86a|50bc1933-8315-6142-b7a2-136dc44dd399", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-32-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-32-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610917905174 }, "e-1256": { "id": "e-1256", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1257" } }, "mediaQueries": ["main"], "target": { "id": "5ffade297fde030f236ea86a|50bc1933-8315-6142-b7a2-136dc44dd399", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffade297fde030f236ea86a|50bc1933-8315-6142-b7a2-136dc44dd399", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917905174 }, "e-1257": { "id": "e-1257", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1256" } }, "mediaQueries": ["main"], "target": { "id": "5ffade297fde030f236ea86a|50bc1933-8315-6142-b7a2-136dc44dd399", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffade297fde030f236ea86a|50bc1933-8315-6142-b7a2-136dc44dd399", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917905174 }, "e-1258": { "id": "e-1258", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1259" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffc6bb4ed110e710a332cc9|37b02913-f9f9-3b3e-d2cb-a8df2a641d62", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffc6bb4ed110e710a332cc9|37b02913-f9f9-3b3e-d2cb-a8df2a641d62", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 20, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917996125 }, "e-1260": { "id": "e-1260", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-70", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffc6bb4ed110e710a332cc9|37b02913-f9f9-3b3e-d2cb-a8df2a641d70", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffc6bb4ed110e710a332cc9|37b02913-f9f9-3b3e-d2cb-a8df2a641d70", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-70-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-70-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1610917996125 }, "e-1261": { "id": "e-1261", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-71", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1262" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffc6bb4ed110e710a332cc9|37b02913-f9f9-3b3e-d2cb-a8df2a641d70", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffc6bb4ed110e710a332cc9|37b02913-f9f9-3b3e-d2cb-a8df2a641d70", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917996125 }, "e-1262": { "id": "e-1262", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-72", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1261" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffc6bb4ed110e710a332cc9|37b02913-f9f9-3b3e-d2cb-a8df2a641d70", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffc6bb4ed110e710a332cc9|37b02913-f9f9-3b3e-d2cb-a8df2a641d70", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917996125 }, "e-1263": { "id": "e-1263", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1264" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffc6bb4ed110e710a332cc9|37b02913-f9f9-3b3e-d2cb-a8df2a641d70", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffc6bb4ed110e710a332cc9|37b02913-f9f9-3b3e-d2cb-a8df2a641d70", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917996125 }, "e-1264": { "id": "e-1264", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1263" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffc6bb4ed110e710a332cc9|37b02913-f9f9-3b3e-d2cb-a8df2a641d70", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffc6bb4ed110e710a332cc9|37b02913-f9f9-3b3e-d2cb-a8df2a641d70", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917996125 }, "e-1265": { "id": "e-1265", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-94", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1266" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffc6bb4ed110e710a332cc9|37b02913-f9f9-3b3e-d2cb-a8df2a641d71", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffc6bb4ed110e710a332cc9|37b02913-f9f9-3b3e-d2cb-a8df2a641d71", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917996125 }, "e-1267": { "id": "e-1267", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1268" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffc6bb4ed110e710a332cc9|37b02913-f9f9-3b3e-d2cb-a8df2a641d85", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffc6bb4ed110e710a332cc9|37b02913-f9f9-3b3e-d2cb-a8df2a641d85", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1610917996125 }, "e-1269": { "id": "e-1269", "name": "", "animationType": "custom", "eventTypeId": "NAVBAR_OPEN", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-4", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1270" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "a6ce49c0-11d6-b578-3bcd-aa179742b105", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "a6ce49c0-11d6-b578-3bcd-aa179742b105", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611660598228 }, "e-1270": { "id": "e-1270", "name": "", "animationType": "custom", "eventTypeId": "NAVBAR_CLOSE", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1269" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "a6ce49c0-11d6-b578-3bcd-aa179742b105", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "a6ce49c0-11d6-b578-3bcd-aa179742b105", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611660598299 }, "e-1271": { "id": "e-1271", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-63", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1272" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8e9e3ce5ce33ce441337f|15766673-b4f6-c001-243d-08de36d00423", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8e9e3ce5ce33ce441337f|15766673-b4f6-c001-243d-08de36d00423", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611665066945 }, "e-1272": { "id": "e-1272", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-64", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1271" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8e9e3ce5ce33ce441337f|15766673-b4f6-c001-243d-08de36d00423", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8e9e3ce5ce33ce441337f|15766673-b4f6-c001-243d-08de36d00423", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611665066945 }, "e-1273": { "id": "e-1273", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-63", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1274" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8e9e3ce5ce33ce441337f|dc979093-b6ae-e06e-a0c9-c6c0d47c0628", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8e9e3ce5ce33ce441337f|dc979093-b6ae-e06e-a0c9-c6c0d47c0628", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611665080178 }, "e-1274": { "id": "e-1274", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-64", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1273" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff8e9e3ce5ce33ce441337f|dc979093-b6ae-e06e-a0c9-c6c0d47c0628", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ff8e9e3ce5ce33ce441337f|dc979093-b6ae-e06e-a0c9-c6c0d47c0628", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611665080178 }, "e-1275": { "id": "e-1275", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-15", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1276" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60100f0483c721fc13f21760", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "60100f0483c721fc13f21760", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611665156384 }, "e-1277": { "id": "e-1277", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1278" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60100f0483c721fc13f21760", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "60100f0483c721fc13f21760", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611665156384 }, "e-1283": { "id": "e-1283", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-29", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1284" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60100f0483c721fc13f21760|a5200e68-e71c-bed1-74d1-6184bfe2e755", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60100f0483c721fc13f21760|a5200e68-e71c-bed1-74d1-6184bfe2e755", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611665156384 }, "e-1284": { "id": "e-1284", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-30", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1283" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60100f0483c721fc13f21760|a5200e68-e71c-bed1-74d1-6184bfe2e755", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60100f0483c721fc13f21760|a5200e68-e71c-bed1-74d1-6184bfe2e755", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611665156384 }, "e-1287": { "id": "e-1287", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-83", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1288" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60100f0483c721fc13f21760|88517f6a-049e-dbf2-b919-5731c9768a67", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60100f0483c721fc13f21760|88517f6a-049e-dbf2-b919-5731c9768a67", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611665156384 }, "e-1288": { "id": "e-1288", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-84", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1287" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60100f0483c721fc13f21760|88517f6a-049e-dbf2-b919-5731c9768a67", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60100f0483c721fc13f21760|88517f6a-049e-dbf2-b919-5731c9768a67", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611665156384 }, "e-1289": { "id": "e-1289", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-83", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1290" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60100f0483c721fc13f21760|dd29e705-0013-f127-e719-b0dca2bd4769", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60100f0483c721fc13f21760|dd29e705-0013-f127-e719-b0dca2bd4769", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611665156384 }, "e-1290": { "id": "e-1290", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-84", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1289" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60100f0483c721fc13f21760|dd29e705-0013-f127-e719-b0dca2bd4769", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60100f0483c721fc13f21760|dd29e705-0013-f127-e719-b0dca2bd4769", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611665156384 }, "e-1291": { "id": "e-1291", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-83", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1292" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60100f0483c721fc13f21760|2ac8ce94-97b8-f139-3033-27a58889ab70", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60100f0483c721fc13f21760|2ac8ce94-97b8-f139-3033-27a58889ab70", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611665156384 }, "e-1292": { "id": "e-1292", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-84", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1291" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60100f0483c721fc13f21760|2ac8ce94-97b8-f139-3033-27a58889ab70", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60100f0483c721fc13f21760|2ac8ce94-97b8-f139-3033-27a58889ab70", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611665156384 }, "e-1293": { "id": "e-1293", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-31", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1294" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffa13d5fce49b3f3340ea31|2e35f092-ec23-10f0-4776-aaeb8d9316fc", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffa13d5fce49b3f3340ea31|2e35f092-ec23-10f0-4776-aaeb8d9316fc", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611666331032 }, "e-1295": { "id": "e-1295", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1296" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|286d8f4c-cfef-d2c0-1745-9850074764f3", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|286d8f4c-cfef-d2c0-1745-9850074764f3", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611667873814 }, "e-1297": { "id": "e-1297", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1298" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|9c59b624-7ff9-c348-e36e-c8d9e133ed02", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|9c59b624-7ff9-c348-e36e-c8d9e133ed02", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611667878814 }, "e-1299": { "id": "e-1299", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-15", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1300" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60101a2c2488ac366267c703", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "60101a2c2488ac366267c703", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611668012603 }, "e-1301": { "id": "e-1301", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1302" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60101a2c2488ac366267c703", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "60101a2c2488ac366267c703", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611668012603 }, "e-1315": { "id": "e-1315", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1316" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60101a2c2488ac366267c703|236bd70e-6d9b-e568-f46f-d4ae73ea87be", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60101a2c2488ac366267c703|236bd70e-6d9b-e568-f46f-d4ae73ea87be", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611668165139 }, "e-1317": { "id": "e-1317", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1318" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60101a2c2488ac366267c703|236bd70e-6d9b-e568-f46f-d4ae73ea87c6", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60101a2c2488ac366267c703|236bd70e-6d9b-e568-f46f-d4ae73ea87c6", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611668165139 }, "e-1319": { "id": "e-1319", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1320" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60101a2c2488ac366267c703|236bd70e-6d9b-e568-f46f-d4ae73ea87c7", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60101a2c2488ac366267c703|236bd70e-6d9b-e568-f46f-d4ae73ea87c7", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611668165139 }, "e-1321": { "id": "e-1321", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1322" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60101a2c2488ac366267c703|236bd70e-6d9b-e568-f46f-d4ae73ea87c8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60101a2c2488ac366267c703|236bd70e-6d9b-e568-f46f-d4ae73ea87c8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611668165139 }, "e-1323": { "id": "e-1323", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1324" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60101a2c2488ac366267c703|236bd70e-6d9b-e568-f46f-d4ae73ea87ca", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60101a2c2488ac366267c703|236bd70e-6d9b-e568-f46f-d4ae73ea87ca", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611668165139 }, "e-1325": { "id": "e-1325", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-15", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1326" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60101b202b974e6b70e03042", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "60101b202b974e6b70e03042", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611668256358 }, "e-1327": { "id": "e-1327", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1328" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60101b202b974e6b70e03042", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "60101b202b974e6b70e03042", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611668256358 }, "e-1339": { "id": "e-1339", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1340" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec39891", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec39891", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611668264240 }, "e-1341": { "id": "e-1341", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1342" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec39899", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec39899", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611668264240 }, "e-1343": { "id": "e-1343", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1344" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec3989c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec3989c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611668264240 }, "e-1345": { "id": "e-1345", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1346" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec398a1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec398a1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611668264240 }, "e-1347": { "id": "e-1347", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1348" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec398a8", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec398a8", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 20, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611668264240 }, "e-1349": { "id": "e-1349", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1350" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec398ab", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec398ab", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 20, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611668264240 }, "e-1351": { "id": "e-1351", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1352" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec398ac", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec398ac", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 20, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611668264240 }, "e-1353": { "id": "e-1353", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1354" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec398ad", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec398ad", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 20, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611668264240 }, "e-1355": { "id": "e-1355", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1356" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec398af", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec398af", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 20, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611668264240 }, "e-1357": { "id": "e-1357", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1358" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec398bb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec398bb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611668264240 }, "e-1359": { "id": "e-1359", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1360" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec398bc", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec398bc", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611668264240 }, "e-1361": { "id": "e-1361", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1362" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec398ca", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec398ca", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611668264240 }, "e-1363": { "id": "e-1363", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1364" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec398cb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "60101b202b974e6b70e03042|30cb54b7-1559-dbc9-76fa-446caec398cb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611668264240 }, "e-1365": { "id": "e-1365", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-4", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1366" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "09be4e32-f042-dd32-490f-56f748dc40cb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "09be4e32-f042-dd32-490f-56f748dc40cb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611913729506 }, "e-1367": { "id": "e-1367", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1368" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "d0a3d795-e6f3-c898-d285-dac799318cdb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "d0a3d795-e6f3-c898-d285-dac799318cdb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611913738158 }, "e-1369": { "id": "e-1369", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1370" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "e7918bc1-c30d-c73b-99e0-67f0c91a0c84", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "e7918bc1-c30d-c73b-99e0-67f0c91a0c84", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611914740127 }, "e-1370": { "id": "e-1370", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-2", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1369" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "e7918bc1-c30d-c73b-99e0-67f0c91a0c84", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "e7918bc1-c30d-c73b-99e0-67f0c91a0c84", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611914740210 }, "e-1383": { "id": "e-1383", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-97", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1384" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "09be4e32-f042-dd32-490f-56f748dc40cb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "09be4e32-f042-dd32-490f-56f748dc40cb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611916165809 }, "e-1385": { "id": "e-1385", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-98", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1386" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "d0a3d795-e6f3-c898-d285-dac799318cdb", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "d0a3d795-e6f3-c898-d285-dac799318cdb", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611916281878 }, "e-1387": { "id": "e-1387", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-5", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1388" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "b50af7d8-f5b0-eef9-6835-a7dff7b734c2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "b50af7d8-f5b0-eef9-6835-a7dff7b734c2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611916967503 }, "e-1389": { "id": "e-1389", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-98", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1390" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "b50af7d8-f5b0-eef9-6835-a7dff7b734c2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "b50af7d8-f5b0-eef9-6835-a7dff7b734c2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611916979583 }, "e-1391": { "id": "e-1391", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-29", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1392" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "8a4666c1-2e20-612d-e977-222826464d68", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "8a4666c1-2e20-612d-e977-222826464d68", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611917077519 }, "e-1392": { "id": "e-1392", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-30", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1391" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "8a4666c1-2e20-612d-e977-222826464d68", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "8a4666c1-2e20-612d-e977-222826464d68", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611917077519 }, "e-1393": { "id": "e-1393", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-29", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1394" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "8a4666c1-2e20-612d-e977-222826464d6c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "8a4666c1-2e20-612d-e977-222826464d6c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611917077519 }, "e-1394": { "id": "e-1394", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-30", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1393" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "8a4666c1-2e20-612d-e977-222826464d6c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "8a4666c1-2e20-612d-e977-222826464d6c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611917077519 }, "e-1395": { "id": "e-1395", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-29", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1396" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "8a4666c1-2e20-612d-e977-222826464d70", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "8a4666c1-2e20-612d-e977-222826464d70", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611917077519 }, "e-1396": { "id": "e-1396", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-30", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1395" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "8a4666c1-2e20-612d-e977-222826464d70", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "8a4666c1-2e20-612d-e977-222826464d70", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611917077519 }, "e-1397": { "id": "e-1397", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-29", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1398" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "8a4666c1-2e20-612d-e977-222826464d74", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "8a4666c1-2e20-612d-e977-222826464d74", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611917077519 }, "e-1398": { "id": "e-1398", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-30", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1397" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "8a4666c1-2e20-612d-e977-222826464d74", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "8a4666c1-2e20-612d-e977-222826464d74", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611917077519 }, "e-1399": { "id": "e-1399", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-29", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1400" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "8a4666c1-2e20-612d-e977-222826464d78", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "8a4666c1-2e20-612d-e977-222826464d78", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611917077519 }, "e-1400": { "id": "e-1400", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-30", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1399" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "8a4666c1-2e20-612d-e977-222826464d78", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "8a4666c1-2e20-612d-e977-222826464d78", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611917077519 }, "e-1401": { "id": "e-1401", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-29", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1402" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "8a4666c1-2e20-612d-e977-222826464d7c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "8a4666c1-2e20-612d-e977-222826464d7c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611917077519 }, "e-1402": { "id": "e-1402", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-30", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1401" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "8a4666c1-2e20-612d-e977-222826464d7c", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "8a4666c1-2e20-612d-e977-222826464d7c", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1611917077519 }, "e-1403": { "id": "e-1403", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-99", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1404" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffef3eb322c89d603c71bec|4c94f551-e2c4-f9a5-9ea1-8ab99da61fcc", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffef3eb322c89d603c71bec|4c94f551-e2c4-f9a5-9ea1-8ab99da61fcc", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1609526651906 }, "e-1405": { "id": "e-1405", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_MOVE", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-100", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main"], "target": { "id": "5ffef3eb322c89d603c71bec|19d2159c-0294-698c-d4dd-ab3f3da61ff5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffef3eb322c89d603c71bec|19d2159c-0294-698c-d4dd-ab3f3da61ff5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-100-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }, { "continuousParameterGroupId": "a-100-p-2", "selectedAxis": "Y_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 50, "restingState": 50 }], "createdOn": 1613474243255 }, "e-1406": { "id": "e-1406", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-101", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1407" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffef3eb322c89d603c71bec|19d2159c-0294-698c-d4dd-ab3f3da61ff5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffef3eb322c89d603c71bec|19d2159c-0294-698c-d4dd-ab3f3da61ff5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 35, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1613474243255 }, "e-1408": { "id": "e-1408", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-102", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1409" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffef3eb322c89d603c71bec|19d2159c-0294-698c-d4dd-ab3f3da61ff5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffef3eb322c89d603c71bec|19d2159c-0294-698c-d4dd-ab3f3da61ff5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1613474243255 }, "e-1409": { "id": "e-1409", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-103", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1408" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffef3eb322c89d603c71bec|19d2159c-0294-698c-d4dd-ab3f3da61ff5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffef3eb322c89d603c71bec|19d2159c-0294-698c-d4dd-ab3f3da61ff5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1613474243255 }, "e-1410": { "id": "e-1410", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-104", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1411" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffef3eb322c89d603c71bec|19d2159c-0294-698c-d4dd-ab3f3da61ff5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffef3eb322c89d603c71bec|19d2159c-0294-698c-d4dd-ab3f3da61ff5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1613474243255 }, "e-1411": { "id": "e-1411", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-105", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1410" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffef3eb322c89d603c71bec|19d2159c-0294-698c-d4dd-ab3f3da61ff5", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffef3eb322c89d603c71bec|19d2159c-0294-698c-d4dd-ab3f3da61ff5", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1613474243255 }, "e-1412": { "id": "e-1412", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-106", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1413" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffef3eb322c89d603c71bec|19d2159c-0294-698c-d4dd-ab3f3da61ffd", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffef3eb322c89d603c71bec|19d2159c-0294-698c-d4dd-ab3f3da61ffd", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 25, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1613474243255 }, "e-1414": { "id": "e-1414", "name": "", "animationType": "preset", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-107", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1415" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ffef3eb322c89d603c71bec|19d2159c-0294-698c-d4dd-ab3f3da61ffa", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5ffef3eb322c89d603c71bec|19d2159c-0294-698c-d4dd-ab3f3da61ffa", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1613474243255 }, "e-1416": { "id": "e-1416", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-6", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1417" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5fc6783f0fa0236084a45f52|1ee49a17-298d-d056-460b-316cc008d284", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "5fc6783f0fa0236084a45f52|1ee49a17-298d-d056-460b-316cc008d284", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1613671229184 }, "e-1418": { "id": "e-1418", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-108", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1419" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff78998ab416f50993d4d74|4b742ebb-e68d-9935-9aab-4674c459105a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1616512854668 }, "e-1420": { "id": "e-1420", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-108", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1421" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff78998ab416f50993d4d74|4b742ebb-e68d-9935-9aab-4674c459105b", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1616512854668 }, "e-1422": { "id": "e-1422", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-108", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1423" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff78998ab416f50993d4d74|4ac76ab7-c467-ab4b-6244-b5d18ffd0249", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1616512862770 }, "e-1424": { "id": "e-1424", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-108", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-1425" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "5ff78998ab416f50993d4d74|4ac76ab7-c467-ab4b-6244-b5d18ffd024a", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 30, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1616512862770 } }, "actionLists": { "a-6": { "id": "a-6", "title": "Intro Animation Home", "actionItemGroups": [{ "actionItems": [{ "id": "a-6-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".lead", "selectorGuids": ["2efb970d-35bf-c7b5-b985-a049b4d4b6d3"] }, "xValue": 100, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-6-n-3", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".lead", "selectorGuids": ["2efb970d-35bf-c7b5-b985-a049b4d4b6d3"] }, "value": 0, "unit": "" } }, { "id": "a-6-n-11", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".home-text", "selectorGuids": ["ce4941e6-fb01-4b41-c978-39a7ec08ae1f"] }, "value": 0, "unit": "" } }, { "id": "a-6-n-13", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".home-text", "selectorGuids": ["ce4941e6-fb01-4b41-c978-39a7ec08ae1f"] }, "xValue": null, "yValue": 24, "xUnit": "px", "yUnit": "px", "zUnit": "PX" } }, { "id": "a-6-n-15", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".arrow-link.home-link", "selectorGuids": ["9824e3f2-d275-7246-20fd-a62903165e41", "6944e56f-5312-9d30-b3b5-e64dcb5ae4c6"] }, "value": 0, "unit": "" } }, { "id": "a-6-n-16", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".arrow-link.home-link", "selectorGuids": ["9824e3f2-d275-7246-20fd-a62903165e41", "6944e56f-5312-9d30-b3b5-e64dcb5ae4c6"] }, "xValue": 100, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-6-n-19", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".round-link", "selectorGuids": ["4d5d7479-b04f-7a8b-514d-2984d32bee8e"] }, "value": 0, "unit": "" } }, { "id": "a-6-n-21", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".gradient", "selectorGuids": ["8bc7f41d-999e-469d-69a4-c4ea59159710"] }, "value": 0, "unit": "" } }] }, { "actionItems": [{ "id": "a-6-n-4", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "inQuart", "duration": 1000, "target": { "selector": ".lead.lead-1", "selectorGuids": ["2efb970d-35bf-c7b5-b985-a049b4d4b6d3", "3478e0b4-66dd-0a46-729a-e243f05759c0"] }, "value": 1, "unit": "" } }, { "id": "a-6-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "outQuart", "duration": 1000, "target": { "selector": ".lead.lead-1", "selectorGuids": ["2efb970d-35bf-c7b5-b985-a049b4d4b6d3", "3478e0b4-66dd-0a46-729a-e243f05759c0"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-6-n-6", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 400, "easing": "outQuart", "duration": 1000, "target": { "selector": ".lead.lead-2", "selectorGuids": ["2efb970d-35bf-c7b5-b985-a049b4d4b6d3", "7f3dfdda-172f-495b-5c75-c74b05994a2a"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-6-n-5", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 400, "easing": "inQuart", "duration": 1000, "target": { "selector": ".lead.lead-2", "selectorGuids": ["2efb970d-35bf-c7b5-b985-a049b4d4b6d3", "7f3dfdda-172f-495b-5c75-c74b05994a2a"] }, "value": 1, "unit": "" } }, { "id": "a-6-n-8", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 800, "easing": "inQuart", "duration": 1000, "target": { "selector": ".lead.lead-3", "selectorGuids": ["2efb970d-35bf-c7b5-b985-a049b4d4b6d3", "f093cb93-89e1-8bd7-b935-a059ec60844d"] }, "value": 1, "unit": "" } }, { "id": "a-6-n-7", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 800, "easing": "outQuart", "duration": 1000, "target": { "selector": ".lead.lead-3", "selectorGuids": ["2efb970d-35bf-c7b5-b985-a049b4d4b6d3", "f093cb93-89e1-8bd7-b935-a059ec60844d"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-6-n-10", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 1200, "easing": "outQuart", "duration": 1000, "target": { "selector": ".lead.lead-4", "selectorGuids": ["2efb970d-35bf-c7b5-b985-a049b4d4b6d3", "788d9d3e-f7c4-c912-29d7-ee47f0c25a1e"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-6-n-9", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 1200, "easing": "inQuart", "duration": 1000, "target": { "selector": ".lead.lead-4", "selectorGuids": ["2efb970d-35bf-c7b5-b985-a049b4d4b6d3", "788d9d3e-f7c4-c912-29d7-ee47f0c25a1e"] }, "value": 1, "unit": "" } }, { "id": "a-6-n-12", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 1500, "easing": "inQuart", "duration": 1000, "target": { "selector": ".home-text", "selectorGuids": ["ce4941e6-fb01-4b41-c978-39a7ec08ae1f"] }, "value": 1, "unit": "" } }, { "id": "a-6-n-14", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 1500, "easing": "outQuart", "duration": 1000, "target": { "selector": ".home-text", "selectorGuids": ["ce4941e6-fb01-4b41-c978-39a7ec08ae1f"] }, "xValue": null, "yValue": 0, "xUnit": "px", "yUnit": "px", "zUnit": "PX" } }, { "id": "a-6-n-17", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 1800, "easing": "outQuart", "duration": 1000, "target": { "selector": ".arrow-link.home-link", "selectorGuids": ["9824e3f2-d275-7246-20fd-a62903165e41", "6944e56f-5312-9d30-b3b5-e64dcb5ae4c6"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-6-n-18", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 1800, "easing": "inQuart", "duration": 1000, "target": { "selector": ".arrow-link.home-link", "selectorGuids": ["9824e3f2-d275-7246-20fd-a62903165e41", "6944e56f-5312-9d30-b3b5-e64dcb5ae4c6"] }, "value": 1, "unit": "" } }, { "id": "a-6-n-20", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 2400, "easing": "inQuart", "duration": 500, "target": { "selector": ".round-link", "selectorGuids": ["4d5d7479-b04f-7a8b-514d-2984d32bee8e"] }, "value": 1, "unit": "" } }, { "id": "a-6-n-22", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 2400, "easing": "inQuart", "duration": 500, "target": { "selector": ".gradient", "selectorGuids": ["8bc7f41d-999e-469d-69a4-c4ea59159710"] }, "value": 1, "unit": "" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1606675323927 }, "a-7": { "id": "a-7", "title": "Link Round Hover", "actionItemGroups": [{ "actionItems": [{ "id": "a-7-n-2", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "easeIn", "duration": 300, "target": { "useEventTarget": "SIBLINGS", "selector": ".link-text-arc", "selectorGuids": ["0000916b-23be-1840-1eb5-97f893a2b8e3"] }, "value": 0, "unit": "" } }] }, { "actionItems": [{ "id": "a-7-n", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "easeIn", "duration": 300, "target": { "useEventTarget": "SIBLINGS", "selector": ".link-text-arc", "selectorGuids": ["0000916b-23be-1840-1eb5-97f893a2b8e3"] }, "value": 1, "unit": "" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1606679511410 }, "a-8": { "id": "a-8", "title": "Link Round Hover Out", "actionItemGroups": [{ "actionItems": [{ "id": "a-8-n-2", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "easeIn", "duration": 300, "target": { "useEventTarget": "SIBLINGS", "selector": ".link-text-arc", "selectorGuids": ["0000916b-23be-1840-1eb5-97f893a2b8e3"] }, "value": 0, "unit": "" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1606679511410 }, "a-9": { "id": "a-9", "title": "Link Round Rotate", "actionItemGroups": [{ "actionItems": [{ "id": "a-9-n", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 60000, "target": { "selector": ".link-text-arc", "selectorGuids": ["0000916b-23be-1840-1eb5-97f893a2b8e3"] }, "zValue": 360, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1606679593740 }, "a-10": { "id": "a-10", "title": "Stripe Animation", "actionItemGroups": [{ "actionItems": [{ "id": "a-10-n", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".animation-stripe-white", "selectorGuids": ["0b63ec05-b961-f5a5-26d8-9bbefb2f7ac3"] }, "widthValue": 100, "widthUnit": "%", "heightUnit": "PX", "locked": false } }, { "id": "a-10-n-2", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".animation-stripe-black", "selectorGuids": ["0b63ec05-b961-f5a5-26d8-9bbefb2f7ac2"] }, "widthValue": 100, "widthUnit": "%", "heightUnit": "PX", "locked": false } }] }, { "actionItems": [{ "id": "a-10-n-3", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "inQuad", "duration": 400, "target": { "useEventTarget": "CHILDREN", "selector": ".animation-stripe-white", "selectorGuids": ["0b63ec05-b961-f5a5-26d8-9bbefb2f7ac3"] }, "widthValue": 0, "widthUnit": "%", "heightUnit": "PX", "locked": false } }] }, { "actionItems": [{ "id": "a-10-n-4", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "inQuart", "duration": 600, "target": { "useEventTarget": "CHILDREN", "selector": ".animation-stripe-black", "selectorGuids": ["0b63ec05-b961-f5a5-26d8-9bbefb2f7ac2"] }, "widthValue": 0, "widthUnit": "%", "heightUnit": "PX", "locked": false } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1600432072774 }, "a-13": { "id": "a-13", "title": "Text Animation", "actionItemGroups": [{ "actionItems": [{ "id": "a-13-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".text", "selectorGuids": ["39714732-a2a2-1484-39e7-edf2f9a6d6d9"] }, "xValue": 100, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-13-n-2", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".text", "selectorGuids": ["39714732-a2a2-1484-39e7-edf2f9a6d6d9"] }, "value": 0, "unit": "" } }] }, { "actionItems": [{ "id": "a-13-n-8", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "inQuart", "duration": 1000, "target": { "useEventTarget": "CHILDREN", "selector": ".text.text-1", "selectorGuids": ["39714732-a2a2-1484-39e7-edf2f9a6d6d9", "6c8bf84f-9faf-365c-3718-a6d290e2624d"] }, "value": 1, "unit": "" } }, { "id": "a-13-n-9", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "outQuart", "duration": 1000, "target": { "useEventTarget": "CHILDREN", "selector": ".text.text-1", "selectorGuids": ["39714732-a2a2-1484-39e7-edf2f9a6d6d9", "6c8bf84f-9faf-365c-3718-a6d290e2624d"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-13-n-10", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 400, "easing": "outQuart", "duration": 1000, "target": { "useEventTarget": "CHILDREN", "selector": ".text.text-2", "selectorGuids": ["39714732-a2a2-1484-39e7-edf2f9a6d6d9", "3309af80-121f-40a3-e854-8873ad9c3229"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-13-n-11", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 400, "easing": "inQuart", "duration": 1000, "target": { "useEventTarget": "CHILDREN", "selector": ".text.text-2", "selectorGuids": ["39714732-a2a2-1484-39e7-edf2f9a6d6d9", "3309af80-121f-40a3-e854-8873ad9c3229"] }, "value": 1, "unit": "" } }, { "id": "a-13-n-12", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 800, "easing": "inQuart", "duration": 1000, "target": { "useEventTarget": "CHILDREN", "selector": ".text.text-3", "selectorGuids": ["39714732-a2a2-1484-39e7-edf2f9a6d6d9", "6805e923-6752-821f-6b0c-a098ebf71d05"] }, "value": 1, "unit": "" } }, { "id": "a-13-n-13", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 800, "easing": "outQuart", "duration": 1000, "target": { "useEventTarget": "CHILDREN", "selector": ".text.text-3", "selectorGuids": ["39714732-a2a2-1484-39e7-edf2f9a6d6d9", "6805e923-6752-821f-6b0c-a098ebf71d05"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1606675323927 }, "a-11": { "id": "a-11", "title": "Text Scroll Animation", "continuousParameterGroups": [{ "id": "a-11-p", "type": "SCROLL_PROGRESS", "parameterLabel": "Scroll", "continuousActionGroups": [{ "keyframe": 30, "actionItems": [{ "id": "a-11-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".content-330", "selectorGuids": ["d0db6e9f-b02a-d52b-848a-33d713b41f0c"] }, "yValue": 0, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }, { "id": "a-11-n-13", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".full-width", "selectorGuids": ["0b63ec05-b961-f5a5-26d8-9bbefb2f7ac1"] }, "yValue": 0, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }, { "keyframe": 61, "actionItems": [{ "id": "a-11-n-14", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".full-width", "selectorGuids": ["0b63ec05-b961-f5a5-26d8-9bbefb2f7ac1"] }, "yValue": 73, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-11-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".content-330", "selectorGuids": ["d0db6e9f-b02a-d52b-848a-33d713b41f0c"] }, "yValue": 200, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }] }], "createdOn": 1606682476291 }, "a-14": { "id": "a-14", "title": "Fade In", "actionItemGroups": [{ "actionItems": [{ "id": "a-14-n", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": true, "id": "5fc6783f0fa0236084a45f52|b6e25794-06a0-89a4-e6a0-47f837fba562" }, "value": 0, "unit": "" } }, { "id": "a-14-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": true, "id": "5fc6783f0fa0236084a45f52|b6e25794-06a0-89a4-e6a0-47f837fba562" }, "yValue": 12, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }, { "actionItems": [{ "id": "a-14-n-2", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "easeIn", "duration": 1000, "target": { "useEventTarget": true, "id": "5fc6783f0fa0236084a45f52|b6e25794-06a0-89a4-e6a0-47f837fba562" }, "value": 1, "unit": "" } }, { "id": "a-14-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "outQuart", "duration": 400, "target": { "useEventTarget": true, "id": "5fc6783f0fa0236084a45f52|b6e25794-06a0-89a4-e6a0-47f837fba562" }, "yValue": 0, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1606684365178 }, "a-15": { "id": "a-15", "title": "Intro Animation About", "actionItemGroups": [{ "actionItems": [{ "id": "a-15-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".lead", "selectorGuids": ["2efb970d-35bf-c7b5-b985-a049b4d4b6d3"] }, "xValue": 100, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-15-n-2", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".lead", "selectorGuids": ["2efb970d-35bf-c7b5-b985-a049b4d4b6d3"] }, "value": 0, "unit": "" } }, { "id": "a-15-n-3", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5ff753edfe0055685ba9b532|8b91834b-2a00-0dd5-2063-dd40b6cfb3cd" }, "value": 0, "unit": "" } }, { "id": "a-15-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5ff753edfe0055685ba9b532|8b91834b-2a00-0dd5-2063-dd40b6cfb3cd" }, "xValue": 100, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-15-n-5", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5fc6783f0fa0236084a45f52|5f9607c0-5851-3a0e-d9cd-8e78d8958a90" }, "value": 0, "unit": "" } }, { "id": "a-15-n-6", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "5fc6783f0fa0236084a45f52|5f9607c0-5851-3a0e-d9cd-8e78d8958a90" }, "xValue": 100, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-15-n-7", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".round-link", "selectorGuids": ["4d5d7479-b04f-7a8b-514d-2984d32bee8e"] }, "value": 0, "unit": "" } }] }, { "actionItems": [{ "id": "a-15-n-8", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "inQuart", "duration": 1000, "target": { "selector": ".lead.lead-1", "selectorGuids": ["2efb970d-35bf-c7b5-b985-a049b4d4b6d3", "3478e0b4-66dd-0a46-729a-e243f05759c0"] }, "value": 1, "unit": "" } }, { "id": "a-15-n-9", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "outQuart", "duration": 1000, "target": { "selector": ".lead.lead-1", "selectorGuids": ["2efb970d-35bf-c7b5-b985-a049b4d4b6d3", "3478e0b4-66dd-0a46-729a-e243f05759c0"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-15-n-10", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 400, "easing": "outQuart", "duration": 1000, "target": { "selector": ".lead.lead-2", "selectorGuids": ["2efb970d-35bf-c7b5-b985-a049b4d4b6d3", "7f3dfdda-172f-495b-5c75-c74b05994a2a"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-15-n-11", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 400, "easing": "inQuart", "duration": 1000, "target": { "selector": ".lead.lead-2", "selectorGuids": ["2efb970d-35bf-c7b5-b985-a049b4d4b6d3", "7f3dfdda-172f-495b-5c75-c74b05994a2a"] }, "value": 1, "unit": "" } }, { "id": "a-15-n-12", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 800, "easing": "inQuart", "duration": 1000, "target": { "selector": ".lead.lead-3", "selectorGuids": ["2efb970d-35bf-c7b5-b985-a049b4d4b6d3", "f093cb93-89e1-8bd7-b935-a059ec60844d"] }, "value": 1, "unit": "" } }, { "id": "a-15-n-13", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 800, "easing": "outQuart", "duration": 1000, "target": { "selector": ".lead.lead-3", "selectorGuids": ["2efb970d-35bf-c7b5-b985-a049b4d4b6d3", "f093cb93-89e1-8bd7-b935-a059ec60844d"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-15-n-14", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 1200, "easing": "outQuart", "duration": 1000, "target": { "selector": ".lead.lead-4", "selectorGuids": ["2efb970d-35bf-c7b5-b985-a049b4d4b6d3", "788d9d3e-f7c4-c912-29d7-ee47f0c25a1e"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-15-n-15", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 1200, "easing": "inQuart", "duration": 1000, "target": { "selector": ".lead.lead-4", "selectorGuids": ["2efb970d-35bf-c7b5-b985-a049b4d4b6d3", "788d9d3e-f7c4-c912-29d7-ee47f0c25a1e"] }, "value": 1, "unit": "" } }, { "id": "a-15-n-16", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 1500, "easing": "inQuart", "duration": 1000, "target": { "id": "5ff753edfe0055685ba9b532|8b91834b-2a00-0dd5-2063-dd40b6cfb3cd" }, "value": 1, "unit": "" } }, { "id": "a-15-n-17", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 1500, "easing": "outQuart", "duration": 1000, "target": { "id": "5ff753edfe0055685ba9b532|8b91834b-2a00-0dd5-2063-dd40b6cfb3cd" }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-15-n-18", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 1800, "easing": "outQuart", "duration": 1000, "target": { "id": "5ff753edfe0055685ba9b532|8b91834b-2a00-0dd5-2063-dd40b6cfb3cd" }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-15-n-19", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 1800, "easing": "inQuart", "duration": 1000, "target": { "id": "5ff753edfe0055685ba9b532|8b91834b-2a00-0dd5-2063-dd40b6cfb3cd" }, "value": 1, "unit": "" } }, { "id": "a-15-n-20", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 2400, "easing": "", "duration": 500, "target": { "selector": ".round-link", "selectorGuids": ["4d5d7479-b04f-7a8b-514d-2984d32bee8e"] }, "value": 1, "unit": "" } }] }, { "actionItems": [{ "id": "a-15-n-21", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 1800, "easing": "outQuart", "duration": 1000, "target": { "id": "5fc6783f0fa0236084a45f52|5f9607c0-5851-3a0e-d9cd-8e78d8958a90" }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1606675323927 }, "a-18": { "id": "a-18", "title": "Testimonial Next 1", "actionItemGroups": [{ "actionItems": [{ "id": "a-18-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 500, "target": { "selector": ".carousel-wrapper", "selectorGuids": ["e5b1a7f4-2186-184e-4b5f-f28b2191cfba"] }, "xValue": -400, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-18-n-3", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "PARENT", "selector": ".carousel-nav", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04"] }, "value": "none" } }, { "id": "a-18-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".carousel-nav.nav-2", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04", "b851cc29-199c-5b7a-6aaf-fbc5a478599f"] }, "value": "flex" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610058837181 }, "a-20": { "id": "a-20", "title": "Testimonial Next 2", "actionItemGroups": [{ "actionItems": [{ "id": "a-20-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 500, "target": { "selector": ".carousel-wrapper", "selectorGuids": ["e5b1a7f4-2186-184e-4b5f-f28b2191cfba"] }, "xValue": -800, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-20-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "PARENT", "selector": ".carousel-nav", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04"] }, "value": "none" } }, { "id": "a-20-n-3", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".carousel-nav.nav-3", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04", "1f7b41b0-e8c8-091d-7f02-2729b0b87fc1"] }, "value": "flex" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610058837181 }, "a-19": { "id": "a-19", "title": "Testimonial Prev 2", "actionItemGroups": [{ "actionItems": [{ "id": "a-19-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 500, "target": { "selector": ".carousel-wrapper", "selectorGuids": ["e5b1a7f4-2186-184e-4b5f-f28b2191cfba"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-19-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "PARENT", "selector": ".carousel-nav", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04"] }, "value": "none" } }, { "id": "a-19-n-3", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".carousel-nav.nav-1", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04", "563a7a31-f80c-be22-4050-58159df1a110"] }, "value": "flex" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610058837181 }, "a-21": { "id": "a-21", "title": "Testimonial Prev 3", "actionItemGroups": [{ "actionItems": [{ "id": "a-21-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 500, "target": { "selector": ".carousel-wrapper", "selectorGuids": ["e5b1a7f4-2186-184e-4b5f-f28b2191cfba"] }, "xValue": -400, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-21-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "PARENT", "selector": ".carousel-nav", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04"] }, "value": "none" } }, { "id": "a-21-n-3", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".carousel-nav.nav-2", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04", "b851cc29-199c-5b7a-6aaf-fbc5a478599f"] }, "value": "flex" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610058837181 }, "a-22": { "id": "a-22", "title": "Testimonial Next 3", "actionItemGroups": [{ "actionItems": [{ "id": "a-22-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 500, "target": { "selector": ".carousel-wrapper", "selectorGuids": ["e5b1a7f4-2186-184e-4b5f-f28b2191cfba"] }, "xValue": -1200, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-22-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "PARENT", "selector": ".carousel-nav", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04"] }, "value": "none" } }, { "id": "a-22-n-3", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".carousel-nav.nav-4", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04", "10c73010-2d80-34ca-259d-fefddabde9b7"] }, "value": "flex" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610058837181 }, "a-23": { "id": "a-23", "title": "Testimonial Prev 4", "actionItemGroups": [{ "actionItems": [{ "id": "a-23-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 500, "target": { "selector": ".carousel-wrapper", "selectorGuids": ["e5b1a7f4-2186-184e-4b5f-f28b2191cfba"] }, "xValue": -800, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-23-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "PARENT", "selector": ".carousel-nav", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04"] }, "value": "none" } }, { "id": "a-23-n-3", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".carousel-nav.nav-3", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04", "1f7b41b0-e8c8-091d-7f02-2729b0b87fc1"] }, "value": "flex" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610058837181 }, "a-25": { "id": "a-25", "title": "Career Hover", "actionItemGroups": [{ "actionItems": [{ "id": "a-25-n", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".career-content", "selectorGuids": ["5baf6171-9bbe-fff1-7561-0b9242969aba"] }, "heightValue": 0, "widthUnit": "PX", "heightUnit": "px", "locked": false } }] }, { "actionItems": [{ "id": "a-25-n-2", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "ease", "duration": 300, "target": { "useEventTarget": "CHILDREN", "selector": ".career-content", "selectorGuids": ["5baf6171-9bbe-fff1-7561-0b9242969aba"] }, "widthUnit": "PX", "heightUnit": "AUTO", "locked": false } }, { "id": "a-25-n-3", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "selector": ".career-show-more", "selectorGuids": ["7a86ca47-6e81-7035-06ff-15d3f72f67f6"] }, "value": 1, "unit": "" } }, { "id": "a-25-n-4", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".career-show-more", "selectorGuids": ["7a86ca47-6e81-7035-06ff-15d3f72f67f6"] }, "value": 0, "unit": "" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1610137157484 }, "a-26": { "id": "a-26", "title": "Career Hover Out", "actionItemGroups": [{ "actionItems": [{ "id": "a-26-n-2", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "ease", "duration": 300, "target": { "useEventTarget": "CHILDREN", "selector": ".career-content", "selectorGuids": ["5baf6171-9bbe-fff1-7561-0b9242969aba"] }, "heightValue": 0, "widthUnit": "PX", "heightUnit": "px", "locked": false } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610137157484 }, "a-29": { "id": "a-29", "title": "Nav Link Hover", "actionItemGroups": [{ "actionItems": [{ "id": "a-29-n", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".nav-link-line", "selectorGuids": ["f0156261-4ecc-aa96-5551-bb0adbc47a95"] }, "widthValue": 0, "widthUnit": "px", "heightUnit": "PX", "locked": false } }] }, { "actionItems": [{ "id": "a-29-n-2", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".nav-link-line", "selectorGuids": ["f0156261-4ecc-aa96-5551-bb0adbc47a95"] }, "widthValue": 20, "widthUnit": "px", "heightUnit": "PX", "locked": false } }, { "id": "a-29-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".nav-link", "selectorGuids": ["be2e2dfe-bae7-da28-51d2-9fe62eb1157f"] }, "xValue": 16, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1610152706752 }, "a-30": { "id": "a-30", "title": "Nav Link Hover Out", "actionItemGroups": [{ "actionItems": [{ "id": "a-30-n-2", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".nav-link-line", "selectorGuids": ["f0156261-4ecc-aa96-5551-bb0adbc47a95"] }, "widthValue": 0, "widthUnit": "px", "heightUnit": "PX", "locked": false } }, { "id": "a-30-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".nav-link", "selectorGuids": ["be2e2dfe-bae7-da28-51d2-9fe62eb1157f"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610152706752 }, "a-31": { "id": "a-31", "title": "Logotypes Move", "actionItemGroups": [{ "actionItems": [{ "id": "a-31-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".logos-move-wrapper", "selectorGuids": ["29077d81-8bd2-3e91-82c0-ae3e464e0429"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }, { "actionItems": [{ "id": "a-31-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 40000, "target": { "selector": ".logos-move-wrapper", "selectorGuids": ["29077d81-8bd2-3e91-82c0-ae3e464e0429"] }, "xValue": -1434, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1610224278185 }, "a-16": { "id": "a-16", "title": "Link Round Black Hover", "actionItemGroups": [{ "actionItems": [{ "id": "a-16-n", "actionTypeId": "STYLE_FILTER", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".link-icon", "selectorGuids": ["e501f8c8-37b7-332d-3fd9-178e6f3697c2"] }, "filters": [{ "type": "brightness", "filterId": "26f9", "value": 0, "unit": "%" }] } }, { "id": "a-16-n-2", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".blog-round-link", "selectorGuids": ["93d2bbce-74b2-f05c-3c0f-4ea036ec8f1e"] }, "globalSwatchId": "9614daf2", "rValue": 255, "bValue": 255, "gValue": 255, "aValue": 1 } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610049856874 }, "a-17": { "id": "a-17", "title": "Link Round Black Hover Out", "actionItemGroups": [{ "actionItems": [{ "id": "a-17-n", "actionTypeId": "STYLE_FILTER", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".link-icon", "selectorGuids": ["e501f8c8-37b7-332d-3fd9-178e6f3697c2"] }, "filters": [{ "type": "brightness", "filterId": "26f9", "value": 100, "unit": "%" }] } }, { "id": "a-17-n-2", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".blog-round-link", "selectorGuids": ["93d2bbce-74b2-f05c-3c0f-4ea036ec8f1e"] }, "globalSwatchId": "79285733", "rValue": 20, "bValue": 20, "gValue": 20, "aValue": 1 } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610049856874 }, "a-33": { "id": "a-33", "title": "Mouse Link Hover", "actionItemGroups": [{ "actionItems": [{ "id": "a-33-n", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "value": 0, "unit": "" } }, { "id": "a-33-n-3", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 0, "yValue": 0, "locked": true } }] }, { "actionItems": [{ "id": "a-33-n-4", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 100, "easing": "easeIn", "duration": 150, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 1, "yValue": 1, "locked": true } }, { "id": "a-33-n-2", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 100, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "value": 1, "unit": "" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1610278264157 }, "a-34": { "id": "a-34", "title": "Mouse Link Hover Out", "actionItemGroups": [{ "actionItems": [{ "id": "a-34-n-2", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "easeIn", "duration": 0, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "value": 0, "unit": "" } }, { "id": "a-34-n-3", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 0, "yValue": 0, "locked": true } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610278264157 }, "a-32": { "id": "a-32", "title": "Read Article", "continuousParameterGroups": [{ "id": "a-32-p", "type": "MOUSE_X", "parameterLabel": "Mouse X", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-32-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-32-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 800, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }] }, { "id": "a-32-p-2", "type": "MOUSE_Y", "parameterLabel": "Mouse Y", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-32-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "yValue": 0, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-32-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "yValue": 180, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }] }], "createdOn": 1610277679781 }, "a-27": { "id": "a-27", "title": "Button Hover", "actionItemGroups": [{ "actionItems": [{ "id": "a-27-n-2", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".button-animation", "selectorGuids": ["973d108c-1d5f-b13d-f0a1-2f19099ec546"] }, "widthValue": 0, "widthUnit": "%", "heightUnit": "PX", "locked": false } }] }, { "actionItems": [{ "id": "a-27-n", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".button-animation", "selectorGuids": ["973d108c-1d5f-b13d-f0a1-2f19099ec546"] }, "widthValue": 100, "widthUnit": "%", "heightUnit": "PX", "locked": false } }, { "id": "a-27-n-3", "actionTypeId": "STYLE_TEXT_COLOR", "config": { "delay": 0, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".button-text", "selectorGuids": ["4d4d55cc-10d1-6952-9727-e59b21bcf582"] }, "globalSwatchId": "79285733", "rValue": 20, "bValue": 20, "gValue": 20, "aValue": 1 } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1610144997860 }, "a-28": { "id": "a-28", "title": "Button Hover Out", "actionItemGroups": [{ "actionItems": [{ "id": "a-28-n-2", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".button-animation", "selectorGuids": ["973d108c-1d5f-b13d-f0a1-2f19099ec546"] }, "widthValue": 0, "widthUnit": "%", "heightUnit": "PX", "locked": false } }, { "id": "a-28-n-3", "actionTypeId": "STYLE_TEXT_COLOR", "config": { "delay": 0, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".button-text", "selectorGuids": ["4d4d55cc-10d1-6952-9727-e59b21bcf582"] }, "globalSwatchId": "9614daf2", "rValue": 255, "bValue": 255, "gValue": 255, "aValue": 1 } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610144997860 }, "a-95": { "id": "a-95", "title": "Button Red Hover", "actionItemGroups": [{ "actionItems": [{ "id": "a-95-n", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".button-animation", "selectorGuids": ["973d108c-1d5f-b13d-f0a1-2f19099ec546"] }, "widthValue": 0, "widthUnit": "%", "heightUnit": "PX", "locked": false } }] }, { "actionItems": [{ "id": "a-95-n-2", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".button-animation", "selectorGuids": ["973d108c-1d5f-b13d-f0a1-2f19099ec546"] }, "widthValue": 100, "widthUnit": "%", "heightUnit": "PX", "locked": false } }, { "id": "a-95-n-3", "actionTypeId": "STYLE_TEXT_COLOR", "config": { "delay": 0, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".button-text", "selectorGuids": ["4d4d55cc-10d1-6952-9727-e59b21bcf582"] }, "globalSwatchId": "ac376cbb", "rValue": 255, "bValue": 83, "gValue": 87, "aValue": 1 } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1610144997860 }, "a-96": { "id": "a-96", "title": "Button Hover Red Out", "actionItemGroups": [{ "actionItems": [{ "id": "a-96-n", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".button-animation", "selectorGuids": ["973d108c-1d5f-b13d-f0a1-2f19099ec546"] }, "widthValue": 0, "widthUnit": "%", "heightUnit": "PX", "locked": false } }, { "id": "a-96-n-2", "actionTypeId": "STYLE_TEXT_COLOR", "config": { "delay": 0, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".button-text", "selectorGuids": ["4d4d55cc-10d1-6952-9727-e59b21bcf582"] }, "globalSwatchId": "9614daf2", "rValue": 255, "bValue": 255, "gValue": 255, "aValue": 1 } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610144997860 }, "a-59": { "id": "a-59", "title": "Intro Showcase", "actionItemGroups": [{ "actionItems": [{ "id": "a-59-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 120000, "target": { "useEventTarget": true, "id": "5ffef3eb322c89d603c71bec|5126121d-5cdf-18c9-505b-0af1cef97ce1" }, "yValue": -2400, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610570083220 }, "a-60": { "id": "a-60", "title": "Search Show", "actionItemGroups": [{ "actionItems": [{ "id": "a-60-n-3", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".search", "selectorGuids": ["485f3e7b-62b0-ee95-461a-9596e45612a2"] }, "widthValue": 0, "widthUnit": "%", "heightUnit": "PX", "locked": false } }, { "id": "a-60-n-4", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".search", "selectorGuids": ["485f3e7b-62b0-ee95-461a-9596e45612a2"] }, "value": "none" } }] }, { "actionItems": [{ "id": "a-60-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".search", "selectorGuids": ["485f3e7b-62b0-ee95-461a-9596e45612a2"] }, "value": "flex" } }] }, { "actionItems": [{ "id": "a-60-n", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "ease", "duration": 300, "target": { "selector": ".search", "selectorGuids": ["485f3e7b-62b0-ee95-461a-9596e45612a2"] }, "widthValue": 100, "widthUnit": "%", "heightUnit": "PX", "locked": false } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1610719888650 }, "a-61": { "id": "a-61", "title": "Search Hide", "actionItemGroups": [{ "actionItems": [{ "id": "a-61-n", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "ease", "duration": 300, "target": { "selector": ".search", "selectorGuids": ["485f3e7b-62b0-ee95-461a-9596e45612a2"] }, "widthValue": 0, "widthUnit": "%", "heightUnit": "PX", "locked": false } }] }, { "actionItems": [{ "id": "a-61-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".search", "selectorGuids": ["485f3e7b-62b0-ee95-461a-9596e45612a2"] }, "value": "none" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610719942916 }, "a-62": { "id": "a-62", "title": "How It Works Line", "continuousParameterGroups": [{ "id": "a-62-p", "type": "SCROLL_PROGRESS", "parameterLabel": "Scroll", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-62-n-6", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".how-it-works-circle.white-circle.circle-2", "selectorGuids": ["f9812567-bf3f-3497-27c8-524c7e270502", "456e7c88-a3de-3085-8608-45c753570291", "ee80ceea-d879-2fe4-f7b2-deddc2a274c2"] }, "value": 0, "unit": "" } }, { "id": "a-62-n-9", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".how-it-work-line-box.white-animation.line-1", "selectorGuids": ["9890c9ca-7c87-d0ae-c0ca-d614f8211d80", "4348a252-ed4a-aba1-acee-a065f7e24d44", "45150583-0bd4-1b7d-49e8-875f8c7fc089"] }, "heightValue": 0, "widthUnit": "PX", "heightUnit": "%", "locked": false } }, { "id": "a-62-n-10", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".how-it-works-circle.white-circle.circle-1", "selectorGuids": ["f9812567-bf3f-3497-27c8-524c7e270502", "456e7c88-a3de-3085-8608-45c753570291", "ceb05f70-4f41-c35b-b8f2-f912257c0dac"] }, "value": 0, "unit": "" } }, { "id": "a-62-n-12", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".how-it-work-line-box.white-animation.line-2", "selectorGuids": ["9890c9ca-7c87-d0ae-c0ca-d614f8211d80", "4348a252-ed4a-aba1-acee-a065f7e24d44", "02006603-faf6-7031-55e0-23829b5d4ab1"] }, "heightValue": 0, "widthUnit": "PX", "heightUnit": "%", "locked": false } }] }, { "keyframe": 6, "actionItems": [{ "id": "a-62-n", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".how-it-works-circle.white-circle.circle-1", "selectorGuids": ["f9812567-bf3f-3497-27c8-524c7e270502", "456e7c88-a3de-3085-8608-45c753570291", "ceb05f70-4f41-c35b-b8f2-f912257c0dac"] }, "value": 0, "unit": "" } }] }, { "keyframe": 14, "actionItems": [{ "id": "a-62-n-3", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".how-it-works-circle.white-circle.circle-1", "selectorGuids": ["f9812567-bf3f-3497-27c8-524c7e270502", "456e7c88-a3de-3085-8608-45c753570291", "ceb05f70-4f41-c35b-b8f2-f912257c0dac"] }, "value": 1, "unit": "" } }, { "id": "a-62-n-4", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".how-it-work-line-box.white-animation.line-1", "selectorGuids": ["9890c9ca-7c87-d0ae-c0ca-d614f8211d80", "4348a252-ed4a-aba1-acee-a065f7e24d44", "45150583-0bd4-1b7d-49e8-875f8c7fc089"] }, "heightValue": 0, "widthUnit": "PX", "heightUnit": "%", "locked": false } }] }, { "keyframe": 27, "actionItems": [{ "id": "a-62-n-5", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".how-it-work-line-box.white-animation.line-1", "selectorGuids": ["9890c9ca-7c87-d0ae-c0ca-d614f8211d80", "4348a252-ed4a-aba1-acee-a065f7e24d44", "45150583-0bd4-1b7d-49e8-875f8c7fc089"] }, "heightValue": 100, "widthUnit": "PX", "heightUnit": "%", "locked": false } }, { "id": "a-62-n-7", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".how-it-works-circle.white-circle.circle-2", "selectorGuids": ["f9812567-bf3f-3497-27c8-524c7e270502", "456e7c88-a3de-3085-8608-45c753570291", "ee80ceea-d879-2fe4-f7b2-deddc2a274c2"] }, "value": 0, "unit": "" } }] }, { "keyframe": 33, "actionItems": [{ "id": "a-62-n-8", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".how-it-works-circle.white-circle.circle-2", "selectorGuids": ["f9812567-bf3f-3497-27c8-524c7e270502", "456e7c88-a3de-3085-8608-45c753570291", "ee80ceea-d879-2fe4-f7b2-deddc2a274c2"] }, "value": 1, "unit": "" } }, { "id": "a-62-n-13", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".how-it-work-line-box.white-animation.line-2", "selectorGuids": ["9890c9ca-7c87-d0ae-c0ca-d614f8211d80", "4348a252-ed4a-aba1-acee-a065f7e24d44", "02006603-faf6-7031-55e0-23829b5d4ab1"] }, "heightValue": 0, "widthUnit": "PX", "heightUnit": "%", "locked": false } }] }, { "keyframe": 52, "actionItems": [{ "id": "a-62-n-11", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".how-it-work-line-box.white-animation.line-2", "selectorGuids": ["9890c9ca-7c87-d0ae-c0ca-d614f8211d80", "4348a252-ed4a-aba1-acee-a065f7e24d44", "02006603-faf6-7031-55e0-23829b5d4ab1"] }, "heightValue": 100, "widthUnit": "PX", "heightUnit": "%", "locked": false } }, { "id": "a-62-n-14", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".how-it-works-circle.white-circle.circle-3", "selectorGuids": ["f9812567-bf3f-3497-27c8-524c7e270502", "456e7c88-a3de-3085-8608-45c753570291", "379e8cd9-80ae-b81f-bfbb-1833cba9353d"] }, "value": 0, "unit": "" } }] }, { "keyframe": 67, "actionItems": [{ "id": "a-62-n-15", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".how-it-works-circle.white-circle.circle-3", "selectorGuids": ["f9812567-bf3f-3497-27c8-524c7e270502", "456e7c88-a3de-3085-8608-45c753570291", "379e8cd9-80ae-b81f-bfbb-1833cba9353d"] }, "value": 1, "unit": "" } }] }] }], "createdOn": 1610727510850 }, "a-63": { "id": "a-63", "title": "Link Line Show", "actionItemGroups": [{ "actionItems": [{ "id": "a-63-n", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".footer-link-hover", "selectorGuids": ["044cf078-ae64-0efb-5765-b6c5c435d041"] }, "widthValue": 0, "widthUnit": "%", "heightUnit": "PX", "locked": false } }, { "id": "a-63-n-3", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".footer-link-hover.dark-line", "selectorGuids": ["044cf078-ae64-0efb-5765-b6c5c435d041", "9ba205c3-94f7-0f7f-28a4-1c0e66c96a6f"] }, "widthValue": 0, "widthUnit": "%", "heightUnit": "PX", "locked": false } }] }, { "actionItems": [{ "id": "a-63-n-2", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".footer-link-hover", "selectorGuids": ["044cf078-ae64-0efb-5765-b6c5c435d041"] }, "widthValue": 100, "widthUnit": "%", "heightUnit": "PX", "locked": false } }, { "id": "a-63-n-4", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".footer-link-hover.dark-line", "selectorGuids": ["044cf078-ae64-0efb-5765-b6c5c435d041", "9ba205c3-94f7-0f7f-28a4-1c0e66c96a6f"] }, "widthValue": 0, "widthUnit": "%", "heightUnit": "PX", "locked": false } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1610728989078 }, "a-64": { "id": "a-64", "title": "Link Line Hide", "actionItemGroups": [{ "actionItems": [{ "id": "a-64-n-3", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".footer-link-hover.dark-line", "selectorGuids": ["044cf078-ae64-0efb-5765-b6c5c435d041", "9ba205c3-94f7-0f7f-28a4-1c0e66c96a6f"] }, "widthValue": 100, "widthUnit": "%", "heightUnit": "PX", "locked": false } }] }, { "actionItems": [{ "id": "a-64-n-6", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "ease", "duration": 0, "target": { "useEventTarget": "CHILDREN", "selector": ".footer-link-hover", "selectorGuids": ["044cf078-ae64-0efb-5765-b6c5c435d041"] }, "widthValue": 0, "widthUnit": "%", "heightUnit": "PX", "locked": false } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610728989078 }, "a-37": { "id": "a-37", "title": "Blog Next 1", "actionItemGroups": [{ "actionItems": [{ "id": "a-37-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 500, "target": { "selector": ".carousel-blog-wrapper", "selectorGuids": ["e0d32f7f-d9ac-fd93-9a72-89fc0081c743"] }, "xValue": -400, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-37-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "PARENT", "selector": ".carousel-nav", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04"] }, "value": "none" } }, { "id": "a-37-n-3", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".carousel-nav.nav-2", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04", "b851cc29-199c-5b7a-6aaf-fbc5a478599f"] }, "value": "flex" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610058837181 }, "a-38": { "id": "a-38", "title": "Blog Prev 2", "actionItemGroups": [{ "actionItems": [{ "id": "a-38-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 500, "target": { "selector": ".carousel-blog-wrapper", "selectorGuids": ["e0d32f7f-d9ac-fd93-9a72-89fc0081c743"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-38-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "PARENT", "selector": ".carousel-nav", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04"] }, "value": "none" } }, { "id": "a-38-n-3", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".carousel-nav.nav-1", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04", "563a7a31-f80c-be22-4050-58159df1a110"] }, "value": "flex" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610058837181 }, "a-39": { "id": "a-39", "title": "Blog Next 2", "actionItemGroups": [{ "actionItems": [{ "id": "a-39-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 500, "target": { "selector": ".carousel-blog-wrapper", "selectorGuids": ["e0d32f7f-d9ac-fd93-9a72-89fc0081c743"] }, "xValue": -800, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-39-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "PARENT", "selector": ".carousel-nav", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04"] }, "value": "none" } }, { "id": "a-39-n-3", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".carousel-nav.nav-3", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04", "1f7b41b0-e8c8-091d-7f02-2729b0b87fc1"] }, "value": "flex" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610058837181 }, "a-40": { "id": "a-40", "title": "Blog Prev 3", "actionItemGroups": [{ "actionItems": [{ "id": "a-40-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 500, "target": { "selector": ".carousel-blog-wrapper", "selectorGuids": ["e0d32f7f-d9ac-fd93-9a72-89fc0081c743"] }, "xValue": -400, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-40-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "PARENT", "selector": ".carousel-nav", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04"] }, "value": "none" } }, { "id": "a-40-n-3", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".carousel-nav.nav-2", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04", "b851cc29-199c-5b7a-6aaf-fbc5a478599f"] }, "value": "flex" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610058837181 }, "a-41": { "id": "a-41", "title": "Blog Next 3", "actionItemGroups": [{ "actionItems": [{ "id": "a-41-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 500, "target": { "selector": ".carousel-blog-wrapper", "selectorGuids": ["e0d32f7f-d9ac-fd93-9a72-89fc0081c743"] }, "xValue": -1200, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-41-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "PARENT", "selector": ".carousel-nav", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04"] }, "value": "none" } }, { "id": "a-41-n-3", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".carousel-nav.nav-4", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04", "10c73010-2d80-34ca-259d-fefddabde9b7"] }, "value": "flex" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610058837181 }, "a-42": { "id": "a-42", "title": "Blog Prev 4", "actionItemGroups": [{ "actionItems": [{ "id": "a-42-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 500, "target": { "selector": ".carousel-blog-wrapper", "selectorGuids": ["e0d32f7f-d9ac-fd93-9a72-89fc0081c743"] }, "xValue": -800, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-42-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "PARENT", "selector": ".carousel-nav", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04"] }, "value": "none" } }, { "id": "a-42-n-3", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".carousel-nav.nav-3", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04", "1f7b41b0-e8c8-091d-7f02-2729b0b87fc1"] }, "value": "flex" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610058837181 }, "a-65": { "id": "a-65", "title": "Read Story", "continuousParameterGroups": [{ "id": "a-65-p", "type": "MOUSE_X", "parameterLabel": "Mouse X", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-65-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-65-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 370, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }] }, { "id": "a-65-p-2", "type": "MOUSE_Y", "parameterLabel": "Mouse Y", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-65-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "yValue": 0, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-65-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "yValue": 520, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }] }], "createdOn": 1610277679781 }, "a-66": { "id": "a-66", "title": "See Project", "continuousParameterGroups": [{ "id": "a-66-p", "type": "MOUSE_X", "parameterLabel": "Mouse X", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-66-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-66-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 446, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }] }, { "id": "a-66-p-2", "type": "MOUSE_Y", "parameterLabel": "Mouse Y", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-66-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "yValue": 0, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-66-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "yValue": 270, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }] }], "createdOn": 1610277679781 }, "a-67": { "id": "a-67", "title": "See Project Large Image", "continuousParameterGroups": [{ "id": "a-67-p", "type": "MOUSE_X", "parameterLabel": "Mouse X", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-67-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 0, "xUnit": "vw", "yUnit": "PX", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-67-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 48, "xUnit": "vw", "yUnit": "PX", "zUnit": "PX" } }] }] }, { "id": "a-67-p-2", "type": "MOUSE_Y", "parameterLabel": "Mouse Y", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-67-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "yValue": 0, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-67-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "yValue": 420, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }] }], "createdOn": 1610277679781 }, "a-68": { "id": "a-68", "title": "Photo Scale Hover", "actionItemGroups": [{ "actionItems": [{ "id": "a-68-n", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".portfolio-large-image", "selectorGuids": ["aafb2ab0-e509-c43c-2b7a-29a0ba23ef74"] }, "xValue": 1.05, "yValue": 1.05, "locked": true } }, { "id": "a-68-n-2", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".team-member-image", "selectorGuids": ["de3d7521-f27d-600b-c05b-c6adcb9d5d03"] }, "xValue": 1.05, "yValue": 1.05, "locked": true } }, { "id": "a-68-n-3", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".portfolio-image", "selectorGuids": ["6f9e7c50-e06d-2d9e-4689-238ece93badd"] }, "xValue": 1.05, "yValue": 1.05, "locked": true } }, { "id": "a-68-n-4", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".intro-image", "selectorGuids": ["c65738d3-e369-3f71-6ce0-638f4380c9a8"] }, "xValue": 1.05, "yValue": 1.05, "locked": true } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610818468380 }, "a-69": { "id": "a-69", "title": "Photo Scale Hover Out", "actionItemGroups": [{ "actionItems": [{ "id": "a-69-n", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".portfolio-large-image", "selectorGuids": ["aafb2ab0-e509-c43c-2b7a-29a0ba23ef74"] }, "xValue": 1, "yValue": 1, "locked": true } }, { "id": "a-69-n-2", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".team-member-image", "selectorGuids": ["de3d7521-f27d-600b-c05b-c6adcb9d5d03"] }, "xValue": 1, "yValue": 1, "locked": true } }, { "id": "a-69-n-3", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".portfolio-image", "selectorGuids": ["6f9e7c50-e06d-2d9e-4689-238ece93badd"] }, "xValue": 1, "yValue": 1, "locked": true } }, { "id": "a-69-n-4", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".intro-image", "selectorGuids": ["c65738d3-e369-3f71-6ce0-638f4380c9a8"] }, "xValue": 1, "yValue": 1, "locked": true } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610818468380 }, "a-73": { "id": "a-73", "title": "Process Show Photo", "actionItemGroups": [{ "actionItems": [{ "id": "a-73-n", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".about-photo-background", "selectorGuids": ["a79f812f-c592-d478-5ea8-f23e65f6ddfd"] }, "value": 0, "unit": "" } }] }, { "actionItems": [{ "id": "a-73-n-2", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "easeIn", "duration": 300, "target": { "selector": ".about-photo-background", "selectorGuids": ["a79f812f-c592-d478-5ea8-f23e65f6ddfd"] }, "value": 0, "unit": "" } }, { "id": "a-73-n-3", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "easeIn", "duration": 300, "target": { "useEventTarget": "CHILDREN", "selector": ".about-photo-background", "selectorGuids": ["a79f812f-c592-d478-5ea8-f23e65f6ddfd"] }, "value": 1, "unit": "" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1610820914048 }, "a-74": { "id": "a-74", "title": "Read Story Smaller", "continuousParameterGroups": [{ "id": "a-74-p", "type": "MOUSE_X", "parameterLabel": "Mouse X", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-74-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-74-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 332, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }] }, { "id": "a-74-p-2", "type": "MOUSE_Y", "parameterLabel": "Mouse Y", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-74-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "yValue": 0, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-74-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "yValue": 420, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }] }], "createdOn": 1610277679781 }, "a-75": { "id": "a-75", "title": "Slider Arrow Hover", "actionItemGroups": [{ "actionItems": [{ "id": "a-75-n", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": true, "id": "5ffb3040f2faea2a37229e8f|b9032e45-59b0-1491-2b3a-726daae71c1f" }, "globalSwatchId": "9614daf2", "rValue": 255, "bValue": 255, "gValue": 255, "aValue": 1 } }, { "id": "a-75-n-2", "actionTypeId": "STYLE_FILTER", "config": { "delay": 0, "easing": "easeIn", "duration": 300, "target": { "useEventTarget": "CHILDREN", "selector": ".slide-arrow", "selectorGuids": ["54de5fb6-49fe-7c8f-5c96-f29634b0d692"] }, "filters": [{ "type": "invert", "filterId": "3910", "value": 100, "unit": "%" }] } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610827235367 }, "a-76": { "id": "a-76", "title": "Slider Arrow Hover Out", "actionItemGroups": [{ "actionItems": [{ "id": "a-76-n", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": true, "id": "5ffb3040f2faea2a37229e8f|b9032e45-59b0-1491-2b3a-726daae71c1f" }, "globalSwatchId": "79285733", "rValue": 20, "bValue": 20, "gValue": 20, "aValue": 1 } }, { "id": "a-76-n-2", "actionTypeId": "STYLE_FILTER", "config": { "delay": 0, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".slide-arrow", "selectorGuids": ["54de5fb6-49fe-7c8f-5c96-f29634b0d692"] }, "filters": [{ "type": "invert", "filterId": "3910", "value": 0, "unit": "%" }] } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610827235367 }, "a-77": { "id": "a-77", "title": "See Project Medium Image", "continuousParameterGroups": [{ "id": "a-77-p", "type": "MOUSE_X", "parameterLabel": "Mouse X", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-77-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-77-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 500, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }] }, { "id": "a-77-p-2", "type": "MOUSE_Y", "parameterLabel": "Mouse Y", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-77-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "yValue": 0, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-77-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "yValue": 300, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }] }], "createdOn": 1610277679781 }, "a-78": { "id": "a-78", "title": "Read Story Swiper", "continuousParameterGroups": [{ "id": "a-78-p", "type": "MOUSE_X", "parameterLabel": "Mouse X", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-78-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-78-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 280, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }] }, { "id": "a-78-p-2", "type": "MOUSE_Y", "parameterLabel": "Mouse Y", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-78-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "yValue": 0, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-78-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "yValue": 340, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }] }], "createdOn": 1610277679781 }, "a-79": { "id": "a-79", "title": "Read Article Medium", "continuousParameterGroups": [{ "id": "a-79-p", "type": "MOUSE_X", "parameterLabel": "Mouse X", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-79-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-79-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 420, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }] }, { "id": "a-79-p-2", "type": "MOUSE_Y", "parameterLabel": "Mouse Y", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-79-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "yValue": 0, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-79-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "yValue": 400, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }] }], "createdOn": 1610277679781 }, "a-80": { "id": "a-80", "title": "Blog Item Hover", "actionItemGroups": [{ "actionItems": [{ "id": "a-80-n", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".blog-link", "selectorGuids": ["de1a2c8a-792b-3989-ed3d-6db13ad3db9f"] }, "globalSwatchId": "9614daf2", "rValue": 255, "bValue": 255, "gValue": 255, "aValue": 1 } }, { "id": "a-80-n-2", "actionTypeId": "STYLE_TEXT_COLOR", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".blog-link", "selectorGuids": ["de1a2c8a-792b-3989-ed3d-6db13ad3db9f"] }, "globalSwatchId": "79285733", "rValue": 20, "bValue": 20, "gValue": 20, "aValue": 1 } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610829333018 }, "a-81": { "id": "a-81", "title": "Blog Item Hover Out", "actionItemGroups": [{ "actionItems": [{ "id": "a-81-n", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".blog-link", "selectorGuids": ["de1a2c8a-792b-3989-ed3d-6db13ad3db9f"] }, "globalSwatchId": "79285733", "rValue": 20, "bValue": 20, "gValue": 20, "aValue": 1 } }, { "id": "a-81-n-2", "actionTypeId": "STYLE_TEXT_COLOR", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".blog-link", "selectorGuids": ["de1a2c8a-792b-3989-ed3d-6db13ad3db9f"] }, "globalSwatchId": "9614daf2", "rValue": 255, "bValue": 255, "gValue": 255, "aValue": 1 } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610829333018 }, "a-82": { "id": "a-82", "title": "See Intro Project", "continuousParameterGroups": [{ "id": "a-82-p", "type": "MOUSE_X", "parameterLabel": "Mouse X", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-82-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 0, "xUnit": "vw", "yUnit": "PX", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-82-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 27.4, "xUnit": "vw", "yUnit": "PX", "zUnit": "PX" } }] }] }, { "id": "a-82-p-2", "type": "MOUSE_Y", "parameterLabel": "Mouse Y", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-82-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "yValue": 0, "xUnit": "PX", "yUnit": "vw", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-82-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "yValue": 15, "xUnit": "PX", "yUnit": "vw", "zUnit": "PX" } }] }] }], "createdOn": 1610277679781 }, "a-83": { "id": "a-83", "title": "Social Icon Light", "actionItemGroups": [{ "actionItems": [{ "id": "a-83-n", "actionTypeId": "STYLE_FILTER", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".social-icon", "selectorGuids": ["b74bff0f-5cd7-3d3c-20d9-dcba551afd3e"] }, "filters": [{ "type": "invert", "filterId": "af5c", "value": 100, "unit": "%" }] } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1586885662229 }, "a-84": { "id": "a-84", "title": "Social Icon Dark", "actionItemGroups": [{ "actionItems": [{ "id": "a-84-n", "actionTypeId": "STYLE_FILTER", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".social-icon", "selectorGuids": ["b74bff0f-5cd7-3d3c-20d9-dcba551afd3e"] }, "filters": [{ "type": "invert", "filterId": "af5c", "value": 0, "unit": "%" }] } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1586885662229 }, "a-86": { "id": "a-86", "title": "Team Prev 2", "actionItemGroups": [{ "actionItems": [{ "id": "a-86-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 500, "target": { "selector": ".carousel-wrapper", "selectorGuids": ["e5b1a7f4-2186-184e-4b5f-f28b2191cfba"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-86-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "PARENT", "selector": ".carousel-nav", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04"] }, "value": "none" } }, { "id": "a-86-n-3", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".carousel-nav.nav-1", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04", "563a7a31-f80c-be22-4050-58159df1a110"] }, "value": "flex" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610058837181 }, "a-87": { "id": "a-87", "title": "Team Next 2", "actionItemGroups": [{ "actionItems": [{ "id": "a-87-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 500, "target": { "selector": ".carousel-wrapper", "selectorGuids": ["e5b1a7f4-2186-184e-4b5f-f28b2191cfba"] }, "xValue": -800, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-87-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "PARENT", "selector": ".carousel-nav", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04"] }, "value": "none" } }, { "id": "a-87-n-3", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".carousel-nav.nav-3", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04", "1f7b41b0-e8c8-091d-7f02-2729b0b87fc1"] }, "value": "flex" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610058837181 }, "a-88": { "id": "a-88", "title": "Team Prev 3", "actionItemGroups": [{ "actionItems": [{ "id": "a-88-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 500, "target": { "selector": ".carousel-wrapper", "selectorGuids": ["e5b1a7f4-2186-184e-4b5f-f28b2191cfba"] }, "xValue": -400, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-88-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "PARENT", "selector": ".carousel-nav", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04"] }, "value": "none" } }, { "id": "a-88-n-3", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".carousel-nav.nav-2", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04", "b851cc29-199c-5b7a-6aaf-fbc5a478599f"] }, "value": "flex" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610058837181 }, "a-89": { "id": "a-89", "title": "Team Next 3", "actionItemGroups": [{ "actionItems": [{ "id": "a-89-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 500, "target": { "selector": ".carousel-wrapper", "selectorGuids": ["e5b1a7f4-2186-184e-4b5f-f28b2191cfba"] }, "xValue": -1200, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-89-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "PARENT", "selector": ".carousel-nav", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04"] }, "value": "none" } }, { "id": "a-89-n-3", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".carousel-nav.nav-4", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04", "10c73010-2d80-34ca-259d-fefddabde9b7"] }, "value": "flex" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610058837181 }, "a-90": { "id": "a-90", "title": "Team Prev 4", "actionItemGroups": [{ "actionItems": [{ "id": "a-90-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 500, "target": { "selector": ".carousel-wrapper", "selectorGuids": ["e5b1a7f4-2186-184e-4b5f-f28b2191cfba"] }, "xValue": -800, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-90-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "PARENT", "selector": ".carousel-nav", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04"] }, "value": "none" } }, { "id": "a-90-n-3", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".carousel-nav.nav-3", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04", "1f7b41b0-e8c8-091d-7f02-2729b0b87fc1"] }, "value": "flex" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610058837181 }, "a-91": { "id": "a-91", "title": "Next Project Hover", "actionItemGroups": [{ "actionItems": [{ "id": "a-91-n", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".next-project-filter", "selectorGuids": ["a43359fe-3554-e402-21c6-eaa14d98d017"] }, "value": 0.95, "unit": "" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610902064954 }, "a-92": { "id": "a-92", "title": "Next Project Hover Out", "actionItemGroups": [{ "actionItems": [{ "id": "a-92-n", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".next-project-filter", "selectorGuids": ["a43359fe-3554-e402-21c6-eaa14d98d017"] }, "value": 1, "unit": "" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610902064954 }, "a-93": { "id": "a-93", "title": "About Movement", "continuousParameterGroups": [{ "id": "a-93-p", "type": "SCROLL_PROGRESS", "parameterLabel": "Scroll", "continuousActionGroups": [{ "keyframe": 40, "actionItems": [{ "id": "a-93-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".process-block.process-block-1", "selectorGuids": ["13f48e84-20f5-af36-be25-07fbe5cb8729", "d4b1ec39-7506-f745-51b3-031776009108"] }, "yValue": 0, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }, { "id": "a-93-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".process-block.process-block-3", "selectorGuids": ["13f48e84-20f5-af36-be25-07fbe5cb8729", "faf1df6d-b451-8db0-62cf-71d0653ba8cb"] }, "yValue": 0, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-93-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".process-block.process-block-1", "selectorGuids": ["13f48e84-20f5-af36-be25-07fbe5cb8729", "d4b1ec39-7506-f745-51b3-031776009108"] }, "yValue": -177, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }, { "id": "a-93-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".process-block.process-block-3", "selectorGuids": ["13f48e84-20f5-af36-be25-07fbe5cb8729", "faf1df6d-b451-8db0-62cf-71d0653ba8cb"] }, "yValue": 177, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }] }], "createdOn": 1610906741888 }, "a-94": { "id": "a-94", "title": "Circle Mouse Click", "actionItemGroups": [{ "actionItems": [{ "id": "a-94-n", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".label-small", "selectorGuids": ["37d619b1-f7fa-e9ba-b08c-508ae0696282"] }, "value": 0, "unit": "" } }, { "id": "a-94-n-2", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "ease", "duration": 400, "target": { "useEventTarget": true, "id": "5ffb3040f2faea2a37229e8f|966be7bf-2cd9-e081-ba54-04528960c3a5" }, "xValue": 10, "yValue": 10, "locked": true } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610907518553 }, "a-85": { "id": "a-85", "title": "Team Next 1", "actionItemGroups": [{ "actionItems": [{ "id": "a-85-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 500, "target": { "selector": ".carousel-wrapper", "selectorGuids": ["e5b1a7f4-2186-184e-4b5f-f28b2191cfba"] }, "xValue": -400, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-85-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "PARENT", "selector": ".carousel-nav", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04"] }, "value": "none" } }, { "id": "a-85-n-3", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".carousel-nav.nav-2", "selectorGuids": ["912590d5-7a83-2c8e-d9e6-698d25488f04", "b851cc29-199c-5b7a-6aaf-fbc5a478599f"] }, "value": "flex" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610058837181 }, "a-70": { "id": "a-70", "title": "Read Article Large", "continuousParameterGroups": [{ "id": "a-70-p", "type": "MOUSE_X", "parameterLabel": "Mouse X", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-70-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-70-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 360, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }] }, { "id": "a-70-p-2", "type": "MOUSE_Y", "parameterLabel": "Mouse Y", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-70-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "yValue": 0, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-70-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "yValue": 560, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }] }], "createdOn": 1610277679781 }, "a-71": { "id": "a-71", "title": "Blog Link Dark", "actionItemGroups": [{ "actionItems": [{ "id": "a-71-n", "actionTypeId": "STYLE_FILTER", "config": { "delay": 0, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".arrow-link", "selectorGuids": ["9824e3f2-d275-7246-20fd-a62903165e41"] }, "filters": [{ "type": "invert", "filterId": "d236", "value": 100, "unit": "%" }] } }, { "id": "a-71-n-2", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".carousel-blog-box", "selectorGuids": ["6dffde7f-a255-6f9c-fd6b-87867418c512"] }, "globalSwatchId": "9614daf2", "rValue": 255, "bValue": 255, "gValue": 255, "aValue": 1 } }, { "id": "a-71-n-3", "actionTypeId": "STYLE_TEXT_COLOR", "config": { "delay": 0, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".carousel-blog-box", "selectorGuids": ["6dffde7f-a255-6f9c-fd6b-87867418c512"] }, "globalSwatchId": "79285733", "rValue": 20, "bValue": 20, "gValue": 20, "aValue": 1 } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610819905067 }, "a-72": { "id": "a-72", "title": "Blog Link Light", "actionItemGroups": [{ "actionItems": [{ "id": "a-72-n", "actionTypeId": "STYLE_FILTER", "config": { "delay": 0, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".arrow-link", "selectorGuids": ["9824e3f2-d275-7246-20fd-a62903165e41"] }, "filters": [{ "type": "invert", "filterId": "d236", "value": 0, "unit": "%" }] } }, { "id": "a-72-n-2", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".carousel-blog-box", "selectorGuids": ["6dffde7f-a255-6f9c-fd6b-87867418c512"] }, "globalSwatchId": "79285733", "rValue": 20, "bValue": 20, "gValue": 20, "aValue": 1 } }, { "id": "a-72-n-3", "actionTypeId": "STYLE_TEXT_COLOR", "config": { "delay": 0, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".carousel-blog-box", "selectorGuids": ["6dffde7f-a255-6f9c-fd6b-87867418c512"] }, "globalSwatchId": "9614daf2", "rValue": 255, "bValue": 255, "gValue": 255, "aValue": 1 } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610819905067 }, "a-4": { "id": "a-4", "title": "Menu Open", "actionItemGroups": [{ "actionItems": [{ "id": "a-4-n-6", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".menu-open", "selectorGuids": ["e3cc9746-bff4-ad5b-253a-29de9b7b9294"] }, "value": "block" } }, { "id": "a-4-n-7", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".menu-close", "selectorGuids": ["13473f99-2f28-f7f2-1dfe-e1bf758d61e6"] }, "value": "none" } }] }, { "actionItems": [{ "id": "a-4-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 400, "target": { "selector": ".page-content", "selectorGuids": ["7424b0ce-afec-3933-4783-fdaf825b21c3"] }, "xValue": 220, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-4-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 400, "target": { "selector": ".nav-horizontal", "selectorGuids": ["f34043f2-7287-74a8-cf8d-25bb7539ce5e"] }, "xValue": 220, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-4-n-3", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".menu-closer", "selectorGuids": ["df17e8a7-8406-6f93-ca5f-f2c77771b677"] }, "value": "block" } }, { "id": "a-4-n-5", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".menu-open", "selectorGuids": ["e3cc9746-bff4-ad5b-253a-29de9b7b9294"] }, "value": "none" } }, { "id": "a-4-n-4", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".menu-close", "selectorGuids": ["13473f99-2f28-f7f2-1dfe-e1bf758d61e6"] }, "value": "block" } }, { "id": "a-4-n-8", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 400, "target": { "selector": ".nav-text-wrap", "selectorGuids": ["4944dd52-2953-c9b4-2cd6-bab04c696f69"] }, "xValue": 220, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-4-n-9", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 400, "target": { "selector": ".search", "selectorGuids": ["485f3e7b-62b0-ee95-461a-9596e45612a2"] }, "xValue": 220, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1606588232863 }, "a-5": { "id": "a-5", "title": "Menu Close", "actionItemGroups": [{ "actionItems": [{ "id": "a-5-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 400, "target": { "selector": ".page-content", "selectorGuids": ["7424b0ce-afec-3933-4783-fdaf825b21c3"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-5-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 400, "target": { "selector": ".nav-horizontal", "selectorGuids": ["f34043f2-7287-74a8-cf8d-25bb7539ce5e"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-5-n-3", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".menu-closer", "selectorGuids": ["df17e8a7-8406-6f93-ca5f-f2c77771b677"] }, "value": "none" } }, { "id": "a-5-n-4", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".menu-open", "selectorGuids": ["e3cc9746-bff4-ad5b-253a-29de9b7b9294"] }, "value": "block" } }, { "id": "a-5-n-5", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".menu-close", "selectorGuids": ["13473f99-2f28-f7f2-1dfe-e1bf758d61e6"] }, "value": "none" } }, { "id": "a-5-n-6", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 400, "target": { "selector": ".nav-text-wrap", "selectorGuids": ["4944dd52-2953-c9b4-2cd6-bab04c696f69"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-5-n-7", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 400, "target": { "selector": ".search", "selectorGuids": ["485f3e7b-62b0-ee95-461a-9596e45612a2"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1606588232863 }, "a": { "id": "a", "title": "Hamburger Resize", "actionItemGroups": [{ "actionItems": [{ "id": "a-n", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "easeIn", "duration": 120, "target": { "useEventTarget": "CHILDREN", "selector": ".hamburger-line._1-line", "selectorGuids": ["2b1277db-9eff-8baa-e764-d54d62234744", "2b1277db-9eff-8baa-e764-d54d62234745"] }, "widthValue": 34, "widthUnit": "px", "heightUnit": "PX", "locked": false } }, { "id": "a-n-2", "actionTypeId": "STYLE_SIZE", "config": { "delay": 20, "easing": "easeIn", "duration": 120, "target": { "useEventTarget": "CHILDREN", "selector": ".hamburger-line._2-line", "selectorGuids": ["2b1277db-9eff-8baa-e764-d54d62234744", "2b1277db-9eff-8baa-e764-d54d62234746"] }, "widthValue": 34, "widthUnit": "px", "heightUnit": "PX", "locked": false } }, { "id": "a-n-3", "actionTypeId": "STYLE_SIZE", "config": { "delay": 30, "easing": "easeIn", "duration": 120, "target": { "useEventTarget": "CHILDREN", "selector": ".hamburger-line._3-line", "selectorGuids": ["2b1277db-9eff-8baa-e764-d54d62234744", "2b1277db-9eff-8baa-e764-d54d62234747"] }, "widthValue": 34, "widthUnit": "px", "heightUnit": "PX", "locked": false } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1606316083537 }, "a-2": { "id": "a-2", "title": "Hamburger Resize Back", "actionItemGroups": [{ "actionItems": [{ "id": "a-2-n", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "easeIn", "duration": 150, "target": { "useEventTarget": "CHILDREN", "selector": ".hamburger-line._3-line", "selectorGuids": ["2b1277db-9eff-8baa-e764-d54d62234744", "2b1277db-9eff-8baa-e764-d54d62234747"] }, "widthValue": 28, "widthUnit": "px", "heightUnit": "PX", "locked": false } }, { "id": "a-2-n-2", "actionTypeId": "STYLE_SIZE", "config": { "delay": 20, "easing": "easeIn", "duration": 120, "target": { "useEventTarget": "CHILDREN", "selector": ".hamburger-line._2-line", "selectorGuids": ["2b1277db-9eff-8baa-e764-d54d62234744", "2b1277db-9eff-8baa-e764-d54d62234746"] }, "widthValue": 28, "widthUnit": "px", "heightUnit": "PX", "locked": false } }, { "id": "a-2-n-3", "actionTypeId": "STYLE_SIZE", "config": { "delay": 30, "easing": "easeIn", "duration": 120, "target": { "useEventTarget": "CHILDREN", "selector": ".hamburger-line._1-line", "selectorGuids": ["2b1277db-9eff-8baa-e764-d54d62234744", "2b1277db-9eff-8baa-e764-d54d62234745"] }, "widthValue": 28, "widthUnit": "px", "heightUnit": "PX", "locked": false } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1606316083537 }, "a-97": { "id": "a-97", "title": "Menu Move", "actionItemGroups": [{ "actionItems": [{ "id": "a-97-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".edit-menu-here", "selectorGuids": ["26753080-3d30-3dd6-968b-93e8956c75b6"] }, "xValue": -300, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-97-n-3", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".edit-menu-here", "selectorGuids": ["26753080-3d30-3dd6-968b-93e8956c75b6"] }, "value": "flex" } }] }, { "actionItems": [{ "id": "a-97-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 400, "target": { "selector": ".edit-menu-here", "selectorGuids": ["26753080-3d30-3dd6-968b-93e8956c75b6"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1611916169518 }, "a-98": { "id": "a-98", "title": "Menu Close Move", "actionItemGroups": [{ "actionItems": [{ "id": "a-98-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 400, "target": { "selector": ".edit-menu-here", "selectorGuids": ["26753080-3d30-3dd6-968b-93e8956c75b6"] }, "xValue": -300, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1611916169518 }, "a-99": { "id": "a-99", "title": "Cookies Close", "actionItemGroups": [{ "actionItems": [{ "id": "a-99-n", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "PARENT", "selector": ".cookies", "selectorGuids": ["0b452e1e-36e7-aa78-91e6-e3943789075c"] }, "value": "none" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1609526655555 }, "a-100": { "id": "a-100", "title": "See Intro Project 2", "continuousParameterGroups": [{ "id": "a-100-p", "type": "MOUSE_X", "parameterLabel": "Mouse X", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-100-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 0, "xUnit": "vw", "yUnit": "PX", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-100-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 27.4, "xUnit": "vw", "yUnit": "PX", "zUnit": "PX" } }] }] }, { "id": "a-100-p-2", "type": "MOUSE_Y", "parameterLabel": "Mouse Y", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-100-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "yValue": 0, "xUnit": "PX", "yUnit": "vw", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-100-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "yValue": 15, "xUnit": "PX", "yUnit": "vw", "zUnit": "PX" } }] }] }], "createdOn": 1610277679781 }, "a-101": { "id": "a-101", "title": "Stripe Animation 2", "actionItemGroups": [{ "actionItems": [{ "id": "a-101-n", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".animation-stripe-white", "selectorGuids": ["0b63ec05-b961-f5a5-26d8-9bbefb2f7ac3"] }, "widthValue": 100, "widthUnit": "%", "heightUnit": "PX", "locked": false } }, { "id": "a-101-n-2", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".animation-stripe-black", "selectorGuids": ["0b63ec05-b961-f5a5-26d8-9bbefb2f7ac2"] }, "widthValue": 100, "widthUnit": "%", "heightUnit": "PX", "locked": false } }] }, { "actionItems": [{ "id": "a-101-n-3", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "inQuad", "duration": 400, "target": { "useEventTarget": "CHILDREN", "selector": ".animation-stripe-white", "selectorGuids": ["0b63ec05-b961-f5a5-26d8-9bbefb2f7ac3"] }, "widthValue": 0, "widthUnit": "%", "heightUnit": "PX", "locked": false } }] }, { "actionItems": [{ "id": "a-101-n-4", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "inQuart", "duration": 600, "target": { "useEventTarget": "CHILDREN", "selector": ".animation-stripe-black", "selectorGuids": ["0b63ec05-b961-f5a5-26d8-9bbefb2f7ac2"] }, "widthValue": 0, "widthUnit": "%", "heightUnit": "PX", "locked": false } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1600432072774 }, "a-102": { "id": "a-102", "title": "Photo Scale Hover 2", "actionItemGroups": [{ "actionItems": [{ "id": "a-102-n", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".portfolio-large-image", "selectorGuids": ["aafb2ab0-e509-c43c-2b7a-29a0ba23ef74"] }, "xValue": 1.05, "yValue": 1.05, "locked": true } }, { "id": "a-102-n-2", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".team-member-image", "selectorGuids": ["de3d7521-f27d-600b-c05b-c6adcb9d5d03"] }, "xValue": 1.05, "yValue": 1.05, "locked": true } }, { "id": "a-102-n-3", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".portfolio-image", "selectorGuids": ["6f9e7c50-e06d-2d9e-4689-238ece93badd"] }, "xValue": 1.05, "yValue": 1.05, "locked": true } }, { "id": "a-102-n-4", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".intro-image", "selectorGuids": ["c65738d3-e369-3f71-6ce0-638f4380c9a8"] }, "xValue": 1.05, "yValue": 1.05, "locked": true } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610818468380 }, "a-103": { "id": "a-103", "title": "Photo Scale Hover Out 2", "actionItemGroups": [{ "actionItems": [{ "id": "a-103-n", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".portfolio-large-image", "selectorGuids": ["aafb2ab0-e509-c43c-2b7a-29a0ba23ef74"] }, "xValue": 1, "yValue": 1, "locked": true } }, { "id": "a-103-n-2", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".team-member-image", "selectorGuids": ["de3d7521-f27d-600b-c05b-c6adcb9d5d03"] }, "xValue": 1, "yValue": 1, "locked": true } }, { "id": "a-103-n-3", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".portfolio-image", "selectorGuids": ["6f9e7c50-e06d-2d9e-4689-238ece93badd"] }, "xValue": 1, "yValue": 1, "locked": true } }, { "id": "a-103-n-4", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".intro-image", "selectorGuids": ["c65738d3-e369-3f71-6ce0-638f4380c9a8"] }, "xValue": 1, "yValue": 1, "locked": true } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610818468380 }, "a-104": { "id": "a-104", "title": "Mouse Link Hover 2", "actionItemGroups": [{ "actionItems": [{ "id": "a-104-n", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "value": 0, "unit": "" } }, { "id": "a-104-n-2", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 0, "yValue": 0, "locked": true } }] }, { "actionItems": [{ "id": "a-104-n-3", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 100, "easing": "easeIn", "duration": 150, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 1, "yValue": 1, "locked": true } }, { "id": "a-104-n-4", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 100, "easing": "easeIn", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "value": 1, "unit": "" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1610278264157 }, "a-105": { "id": "a-105", "title": "Mouse Link Hover Out 2", "actionItemGroups": [{ "actionItems": [{ "id": "a-105-n", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "easeIn", "duration": 0, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "value": 0, "unit": "" } }, { "id": "a-105-n-2", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "CHILDREN", "selector": ".mouse-link", "selectorGuids": ["6d53291f-2272-f6de-f9ec-8c15334f4d01"] }, "xValue": 0, "yValue": 0, "locked": true } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610278264157 }, "a-106": { "id": "a-106", "title": "Fade In 2", "actionItemGroups": [{ "actionItems": [{ "id": "a-106-n", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": true, "id": "5ffef3eb322c89d603c71bec|b6e25794-06a0-89a4-e6a0-47f837fba562" }, "value": 0, "unit": "" } }, { "id": "a-106-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": true, "id": "5ffef3eb322c89d603c71bec|b6e25794-06a0-89a4-e6a0-47f837fba562" }, "yValue": 12, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }, { "actionItems": [{ "id": "a-106-n-3", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "easeIn", "duration": 1000, "target": { "useEventTarget": true, "id": "5ffef3eb322c89d603c71bec|b6e25794-06a0-89a4-e6a0-47f837fba562" }, "value": 1, "unit": "" } }, { "id": "a-106-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "outQuart", "duration": 400, "target": { "useEventTarget": true, "id": "5ffef3eb322c89d603c71bec|b6e25794-06a0-89a4-e6a0-47f837fba562" }, "yValue": 0, "xUnit": "PX", "yUnit": "px", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1606684365178 }, "a-107": { "id": "a-107", "title": "Circle Mouse Click 2", "actionItemGroups": [{ "actionItems": [{ "id": "a-107-n", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "ease", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".label-small", "selectorGuids": ["37d619b1-f7fa-e9ba-b08c-508ae0696282"] }, "value": 0, "unit": "" } }, { "id": "a-107-n-2", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "ease", "duration": 400, "target": { "useEventTarget": true, "id": "5ffef3eb322c89d603c71bec|966be7bf-2cd9-e081-ba54-04528960c3a5" }, "xValue": 10, "yValue": 10, "locked": true } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1610907518553 }, "a-108": { "id": "a-108", "title": "Text Animation 2", "actionItemGroups": [{ "actionItems": [{ "id": "a-108-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".text", "selectorGuids": ["39714732-a2a2-1484-39e7-edf2f9a6d6d9"] }, "xValue": 100, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-108-n-2", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".text", "selectorGuids": ["39714732-a2a2-1484-39e7-edf2f9a6d6d9"] }, "value": 0, "unit": "" } }] }, { "actionItems": [{ "id": "a-108-n-3", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "inQuart", "duration": 1000, "target": { "useEventTarget": "CHILDREN", "selector": ".text.text-1", "selectorGuids": ["39714732-a2a2-1484-39e7-edf2f9a6d6d9", "6c8bf84f-9faf-365c-3718-a6d290e2624d"] }, "value": 1, "unit": "" } }, { "id": "a-108-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "outQuart", "duration": 1000, "target": { "useEventTarget": "CHILDREN", "selector": ".text.text-1", "selectorGuids": ["39714732-a2a2-1484-39e7-edf2f9a6d6d9", "6c8bf84f-9faf-365c-3718-a6d290e2624d"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-108-n-5", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 400, "easing": "outQuart", "duration": 1000, "target": { "useEventTarget": "CHILDREN", "selector": ".text.text-2", "selectorGuids": ["39714732-a2a2-1484-39e7-edf2f9a6d6d9", "3309af80-121f-40a3-e854-8873ad9c3229"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-108-n-6", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 400, "easing": "inQuart", "duration": 1000, "target": { "useEventTarget": "CHILDREN", "selector": ".text.text-2", "selectorGuids": ["39714732-a2a2-1484-39e7-edf2f9a6d6d9", "3309af80-121f-40a3-e854-8873ad9c3229"] }, "value": 1, "unit": "" } }, { "id": "a-108-n-7", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 800, "easing": "inQuart", "duration": 1000, "target": { "useEventTarget": "CHILDREN", "selector": ".text.text-3", "selectorGuids": ["39714732-a2a2-1484-39e7-edf2f9a6d6d9", "6805e923-6752-821f-6b0c-a098ebf71d05"] }, "value": 1, "unit": "" } }, { "id": "a-108-n-8", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 800, "easing": "outQuart", "duration": 1000, "target": { "useEventTarget": "CHILDREN", "selector": ".text.text-3", "selectorGuids": ["39714732-a2a2-1484-39e7-edf2f9a6d6d9", "6805e923-6752-821f-6b0c-a098ebf71d05"] }, "xValue": 0, "xUnit": "px", "yUnit": "PX", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1606675323927 } }, "site": { "mediaQueries": [{ "key": "main", "min": 992, "max": 10000 }, { "key": "medium", "min": 768, "max": 991 }, { "key": "small", "min": 480, "max": 767 }, { "key": "tiny", "min": 0, "max": 479 }] } });
 * */
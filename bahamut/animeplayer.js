/*
 RequireJS order 1.0.5 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
/*! Video.js v4.12.11 Copyright 2014 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */
/*!    SWFObject v2.3.20130521 <http://github.com/swfobject/swfobject>
    is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
! function() {
    function t(t) {
        var e, n = t.currentTarget || t.srcElement;
        if ("load" === t.type || r.test(n.readyState)) {
            for (t = n.getAttribute("data-requiremodule"), a[t] = !0, t = 0;
                (e = s[t]) && a[e.name]; t++) e.req([e.name], e.onLoad);
            t > 0 && s.splice(0, t), setTimeout(function() {
                n.parentNode.removeChild(n)
            }, 15)
        }
    }

    function e(t) {
        var e, n;
        for (t.setAttribute("data-orderloaded", "loaded"), t = 0;
            (n = c[t]) && ((e = l[n]) && "loaded" === e.getAttribute("data-orderloaded")); t++) delete l[n], require.addScriptToDom(e);
        t > 0 && c.splice(0, t)
    }
    var n = "undefined" != typeof document && "undefined" != typeof window && document.createElement("script"),
        i = n && (n.async || window.opera && "[object Opera]" === Object.prototype.toString.call(window.opera) || "MozAppearance" in document.documentElement.style),
        o = n && "uninitialized" === n.readyState,
        r = /^(complete|loaded)$/,
        s = [],
        a = {},
        l = {},
        c = [],
        n = null;
    define("order", {
        version: "1.0.5",
        load: function(n, r, a, u) {
            var d;
            r.nameToUrl ? (d = r.nameToUrl(n, null), require.s.skipAsync[d] = !0, i || u.isBuild ? r([n], a) : o ? (u = require.s.contexts._, !u.urlFetched[d] && !u.loaded[n] && (u.urlFetched[d] = !0, require.resourcesReady(!1), u.scriptCount += 1, d = require.attach(d, u, n, null, null, e), l[n] = d, c.push(n)), r([n], a)) : r.specified(n) ? r([n], a) : (s.push({
                name: n,
                req: r,
                onLoad: a
            }), require.attach(d, null, n, t, "script/cache"))) : r([n], a)
        }
    })
}(),
function() {
    function m() {
        return function() {}
    }

    function n(t) {
        return function() {
            return this[t]
        }
    }

    function p(t) {
        return function() {
            return t
        }
    }

    function t(e, n, i) {
        if ("string" == typeof e) {
            if (0 === e.indexOf("#") && (e = e.slice(1)), t.Da[e]) return n && t.log.warn('Player "' + e + '" is already initialised. Options will not be applied.'), i && t.Da[e].I(i), t.Da[e];
            e = t.m(e)
        }
        if (!e || !e.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
        return new t.Player(e, n, i)
    }

    function v(e, n, i, o) {
        t.xc.forEach(i, function(t) {
            e(n, t, o)
        })
    }

    function F(e, n) {
        var i, o;
        i = Array.prototype.slice.call(n), o = m(), o = window.console || {
            log: o,
            warn: o,
            error: o
        }, e ? i.unshift(e.toUpperCase() + ":") : e = "log", t.log.history.push(i), i.unshift("VIDEOJS:"), o[e].apply ? o[e].apply(o, i) : o[e](i.join(" "))
    }

    function G(t) {
        t.r("vjs-lock-showing")
    }

    function ca(e, n, i, o) {
        return i !== b ? ((i === j || t.le(i)) && (i = 0), e.c.style[n] = -1 !== ("" + i).indexOf("%") || -1 !== ("" + i).indexOf("px") ? i : "auto" === i ? "" : i + "px", o || e.o("resize"), e) : e.c ? (i = e.c.style[n], o = i.indexOf("px"), -1 !== o ? parseInt(i.slice(0, o), 10) : parseInt(e.c["offset" + t.wa(n)], 10)) : 0
    }

    function da(e) {
        var n, i, o, r, s, a, c, u;
        n = 0, i = j, e.b("touchstart", function(e) {
            1 === e.touches.length && (i = t.i.copy(e.touches[0]), n = (new Date).getTime(), r = f)
        }), e.b("touchmove", function(t) {
            1 < t.touches.length ? r = l : i && (a = t.touches[0].pageX - i.pageX, c = t.touches[0].pageY - i.pageY, u = Math.sqrt(a * a + c * c), u > 10 && (r = l))
        }), s = function() {
            r = l
        }, e.b("touchleave", s), e.b("touchcancel", s), e.b("touchend", function(t) {
            i = j, r === f && (o = (new Date).getTime() - n, 200 > o && (t.preventDefault(), this.o("tap")))
        })
    }

    function ea(e, n) {
        var i, o, r, s;
        return i = e.c, o = t.Zd(i), s = r = i.offsetWidth, i = e.handle, e.options().vertical ? (s = o.top, o = n.changedTouches ? n.changedTouches[0].pageY : n.pageY, i && (i = i.m().offsetHeight, s += i / 2, r -= i), Math.max(0, Math.min(1, (s - o + r) / r))) : (r = o.left, o = n.changedTouches ? n.changedTouches[0].pageX : n.pageX, i && (i = i.m().offsetWidth, r += i / 2, s -= i), Math.max(0, Math.min(1, (o - r) / s)))
    }

    function fa(e, n) {
        e.ba(n), n.b("click", t.bind(e, function() {
            G(this)
        }))
    }

    function ga(t) {
        t.Ka = f, t.Aa.p("vjs-lock-showing"), t.c.setAttribute("aria-pressed", f), t.H && 0 < t.H.length && t.H[0].m().focus()
    }

    function H(t) {
        t.Ka = l, G(t.Aa), t.c.setAttribute("aria-pressed", l)
    }

    function ia(e) {
        var n, i, o = {
            sources: [],
            tracks: []
        };
        if (n = t.Pa(e), i = n["data-setup"], i !== j && t.i.D(n, t.JSON.parse(i || "{}")), t.i.D(o, n), e.hasChildNodes()) {
            var r, s;
            for (e = e.childNodes, r = 0, s = e.length; s > r; r++) n = e[r], i = n.nodeName.toLowerCase(), "source" === i ? o.sources.push(t.Pa(n)) : "track" === i && o.tracks.push(t.Pa(n))
        }
        return o
    }

    function ka(e, n, i) {
        e.h && (e.za = l, e.h.dispose(), e.h = l), "Html5" !== n && e.L && (t.e.Nb(e.L), e.L = j), e.Va = n, e.za = l;
        var o = t.i.D({
            source: i,
            parentEl: e.c
        }, e.q[n.toLowerCase()]);
        i && (e.Gc = i.type, i.src == e.K.src && 0 < e.K.currentTime && (o.startTime = e.K.currentTime), e.K.src = i.src), e.h = new window.videojs[n](e, o), e.h.I(function() {
            this.d.Xa()
        })
    }

    function la(t, e) {
        e !== b && t.Nc !== e && ((t.Nc = e) ? (t.p("vjs-has-started"), t.o("firstplay")) : t.r("vjs-has-started"))
    }

    function N(e, n, i) {
        if (e.h && !e.h.za) e.h.I(function() {
            this[n](i)
        });
        else try {
            e.h[n](i)
        } catch (o) {
            throw t.log(o), o
        }
    }

    function M(e, n) {
        if (e.h && e.h.za) try {
            return e.h[n]()
        } catch (i) {
            throw e.h[n] === b ? t.log("Video.js: " + n + " method not defined for " + e.Va + " playback technology.", i) : "TypeError" == i.name ? (t.log("Video.js: " + n + " unavailable on " + e.Va + " playback technology element.", i), e.h.za = l) : t.log(i), i
        }
    }

    function ma(t, e) {
        var n = t.selectSource(e);
        n ? n.h === t.Va ? t.src(n.source) : ka(t, n.h, n.source) : (t.setTimeout(function() {
            this.error({
                code: 4,
                message: this.v(this.options().notSupportedMessage)
            })
        }, 0), t.Xa())
    }

    function ja(t, e) {
        return e !== b ? (t.Pc = !!e, t) : t.Pc
    }

    function na(t) {
        return t.k().h && t.k().h.featuresPlaybackRate && t.k().options().playbackRates && 0 < t.k().options().playbackRates.length
    }

    function oa(t, e) {
        var n = /^blob\:/i;
        return e && t && n.test(t) ? e : t
    }

    function ta() {
        var t = T[U],
            e = t.charAt(0).toUpperCase() + t.slice(1);
        ua["set" + e] = function(e) {
            return this.c.vjs_setProperty(t, e)
        }
    }

    function va(t) {
        ua[t] = function() {
            return this.c.vjs_getProperty(t)
        }
    }

    function P(e, n) {
        var i = e.Wa.length;
        "" + i in e || Object.defineProperty(e, i, {
            get: function() {
                return this.Wa[i]
            }
        }), n.addEventListener("modechange", t.bind(e, function() {
            this.o("change")
        })), e.Wa.push(n), e.o({
            type: "addtrack",
            T: n
        })
    }

    function Q(t, e) {
        for (var n, i = 0, o = t.length; o > i; i++)
            if (n = t[i], n === e) {
                t.Wa.splice(i, 1);
                break
            }
        t.o({
            type: "removetrack",
            T: e
        })
    }

    function W(t, e) {
        return "rgba(" + parseInt(t[1] + t[1], 16) + "," + parseInt(t[2] + t[2], 16) + "," + parseInt(t[3] + t[3], 16) + "," + e + ")"
    }

    function X(t) {
        var e;
        return t.Le ? e = t.Le[0] : t.options && (e = t.options[t.options.selectedIndex]), e.value
    }

    function Y(t, e) {
        var n, i;
        if (e) {
            for (n = 0; n < t.options.length && (i = t.options[n], !(i.value === e)); n++);
            t.selectedIndex = n
        }
    }

    function $(t, e) {
        var n = t.split("."),
            i = Ba;
        !(n[0] in i) && i.execScript && i.execScript("var " + n[0]);
        for (var o; n.length && (o = n.shift());) n.length || e === b ? i = i[o] ? i[o] : i[o] = {} : i[o] = e
    }
    var b = void 0,
        f = !0,
        j = null,
        l = !1,
        s;
    document.createElement("video"), document.createElement("audio"), document.createElement("track");
    var videojs = window.videojs = t;
    t.jc = "4.12", t.wd = "https:" == document.location.protocol ? "https://" : "http://", t.VERSION = "4.12.11", t.options = {
        techOrder: ["html5", "flash"],
        html5: {},
        flash: {},
        width: 300,
        height: 150,
        defaultVolume: 0,
        playbackRates: [],
        inactivityTimeout: 2e3,
        children: {
            mediaLoader: {},
            posterImage: {},
            loadingSpinner: {},
            textTrackDisplay: {},
            bigPlayButton: {},
            controlBar: {},
            errorDisplay: {},
            textTrackSettings: {}
        },
        language: document.getElementsByTagName("html")[0].getAttribute("lang") || navigator.languages && navigator.languages[0] || navigator.Jf || navigator.language || "en",
        languages: {},
        notSupportedMessage: ""
    }, "GENERATED_CDN_VSN" !== t.jc && (videojs.options.flash.swf = t.wd + "vjs.zencdn.net/" + t.jc + "/video-js.swf"), t.Kd = function(e, n) {
        return t.options.languages[e] = t.options.languages[e] !== b ? t.$.Ba(t.options.languages[e], n) : n, t.options.languages
    }, t.Da = {}, "function" == typeof define && define.amd ? define("videojs", [], function() {
        return videojs
    }) : "object" == typeof exports && "object" == typeof module && (module.exports = videojs), t.Ha = t.CoreObject = m(), t.Ha.extend = function(e) {
        var n, i;
        e = e || {}, n = e.init || e.l || this.prototype.init || this.prototype.l || m(), i = function() {
            n.apply(this, arguments)
        }, i.prototype = t.i.create(this.prototype), i.prototype.constructor = i, i.extend = t.Ha.extend, i.create = t.Ha.create;
        for (var o in e) e.hasOwnProperty(o) && (i.prototype[o] = e[o]);
        return i
    }, t.Ha.create = function() {
        var e = t.i.create(this.prototype);
        return this.apply(e, arguments), e
    }, t.b = function(e, n, i) {
        if (t.i.isArray(n)) return v(t.b, e, n, i);
        var o = t.getData(e);
        o.G || (o.G = {}), o.G[n] || (o.G[n] = []), i.s || (i.s = t.s++), o.G[n].push(i), o.ca || (o.disabled = l, o.ca = function(n) {
            if (!o.disabled) {
                n = t.Qb(n);
                var i = o.G[n.type];
                if (i)
                    for (var i = i.slice(0), r = 0, s = i.length; s > r && !n.Rc(); r++) i[r].call(e, n)
            }
        }), 1 == o.G[n].length && (e.addEventListener ? e.addEventListener(n, o.ca, l) : e.attachEvent && e.attachEvent("on" + n, o.ca))
    }, t.n = function(e, n, i) {
        if (t.Mc(e)) {
            var o = t.getData(e);
            if (o.G) {
                if (t.i.isArray(n)) return v(t.n, e, n, i);
                if (n) {
                    var r = o.G[n];
                    if (r) {
                        if (i) {
                            if (i.s)
                                for (o = 0; o < r.length; o++) r[o].s === i.s && r.splice(o--, 1)
                        } else o.G[n] = [];
                        t.Bc(e, n)
                    }
                } else
                    for (r in o.G) n = r, o.G[n] = [], t.Bc(e, n)
            }
        }
    }, t.Bc = function(e, n) {
        var i = t.getData(e);
        0 === i.G[n].length && (delete i.G[n], e.removeEventListener ? e.removeEventListener(n, i.ca, l) : e.detachEvent && e.detachEvent("on" + n, i.ca)), t.kb(i.G) && (delete i.G, delete i.ca, delete i.disabled), t.kb(i) && t.cd(e)
    }, t.Qb = function(t) {
        function e() {
            return f
        }

        function n() {
            return l
        }
        if (!t || !t.Wb) {
            var i = t || window.event;
            t = {};
            for (var o in i) "layerX" !== o && "layerY" !== o && "keyLocation" !== o && ("returnValue" == o && i.preventDefault || (t[o] = i[o]));
            if (t.target || (t.target = t.srcElement || document), t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement, t.preventDefault = function() {
                i.preventDefault && i.preventDefault(), t.returnValue = l, t.je = e, t.defaultPrevented = f
            }, t.je = n, t.defaultPrevented = l, t.stopPropagation = function() {
                i.stopPropagation && i.stopPropagation(), t.cancelBubble = f, t.Wb = e
            }, t.Wb = n, t.stopImmediatePropagation = function() {
                i.stopImmediatePropagation && i.stopImmediatePropagation(), t.Rc = e, t.stopPropagation()
            }, t.Rc = n, t.clientX != j) {
                o = document.documentElement;
                var r = document.body;
                t.pageX = t.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), t.pageY = t.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)
            }
            t.which = t.charCode || t.keyCode, t.button != j && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
        }
        return t
    }, t.o = function(e, n) {
        var i = t.Mc(e) ? t.getData(e) : {},
            o = e.parentNode || e.ownerDocument;
        return "string" == typeof n && (n = {
            type: n,
            target: e
        }), n = t.Qb(n), i.ca && i.ca.call(e, n), o && !n.Wb() && n.bubbles !== l ? t.o(o, n) : o || n.defaultPrevented || (i = t.getData(n.target), !n.target[n.type]) || (i.disabled = f, "function" == typeof n.target[n.type] && n.target[n.type](), i.disabled = l), !n.defaultPrevented
    }, t.N = function(e, n, i) {
        function o() {
            t.n(e, n, o), i.apply(this, arguments)
        }
        return t.i.isArray(n) ? v(t.N, e, n, i) : (o.s = i.s = i.s || t.s++, void t.b(e, n, o))
    };
    var w = Object.prototype.hasOwnProperty;
    t.f = function(e, n) {
        var i;
        return n = n || {}, i = document.createElement(e || "div"), t.i.da(n, function(t, e) {
            -1 !== t.indexOf("aria-") || "role" == t ? i.setAttribute(t, e) : i[t] = e
        }), i
    }, t.wa = function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }, t.i = {}, t.i.create = Object.create || function(t) {
        function e() {}
        return e.prototype = t, new e
    }, t.i.da = function(t, e, n) {
        for (var i in t) w.call(t, i) && e.call(n || this, i, t[i])
    }, t.i.D = function(t, e) {
        if (!e) return t;
        for (var n in e) w.call(e, n) && (t[n] = e[n]);
        return t
    }, t.i.Sd = function(e, n) {
        var i, o, r;
        e = t.i.copy(e);
        for (i in n) w.call(n, i) && (o = e[i], r = n[i], e[i] = t.i.lb(o) && t.i.lb(r) ? t.i.Sd(o, r) : n[i]);
        return e
    }, t.i.copy = function(e) {
        return t.i.D({}, e)
    }, t.i.lb = function(t) {
        return !!t && "object" == typeof t && "[object Object]" === t.toString() && t.constructor === Object
    }, t.i.isArray = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }, t.le = function(t) {
        return t !== t
    }, t.bind = function(e, n, i) {
        function o() {
            return n.apply(e, arguments)
        }
        return n.s || (n.s = t.s++), o.s = i ? i + "_" + n.s : n.s, o
    }, t.va = {}, t.s = 1, t.expando = "vdata" + (new Date).getTime(), t.getData = function(e) {
        var n = e[t.expando];
        return n || (n = e[t.expando] = t.s++), t.va[n] || (t.va[n] = {}), t.va[n]
    }, t.Mc = function(e) {
        return e = e[t.expando], !(!e || t.kb(t.va[e]))
    }, t.cd = function(e) {
        var n = e[t.expando];
        if (n) {
            delete t.va[n];
            try {
                delete e[t.expando]
            } catch (i) {
                e.removeAttribute ? e.removeAttribute(t.expando) : e[t.expando] = j
            }
        }
    }, t.kb = function(t) {
        for (var e in t)
            if (t[e] !== j) return l;
        return f
    }, t.Qa = function(t, e) {
        return -1 !== (" " + t.className + " ").indexOf(" " + e + " ")
    }, t.p = function(e, n) {
        t.Qa(e, n) || (e.className = "" === e.className ? n : e.className + " " + n)
    }, t.r = function(e, n) {
        var i, o;
        if (t.Qa(e, n)) {
            for (i = e.className.split(" "), o = i.length - 1; o >= 0; o--) i[o] === n && i.splice(o, 1);
            e.className = i.join(" ")
        }
    }, t.A = t.f("video");
    var x = document.createElement("track");
    x.Xb = "captions", x.jd = "en", x.label = "English", t.A.appendChild(x), t.P = navigator.userAgent, t.Dd = /iPhone/i.test(t.P), t.Cd = /iPad/i.test(t.P), t.Ed = /iPod/i.test(t.P), t.Bd = t.Dd || t.Cd || t.Ed;
    var aa = t,
        y, z = t.P.match(/OS (\d+)_/i);
    y = z && z[1] ? z[1] : b, aa.lf = y, t.Ad = /Android/i.test(t.P);
    var ba = t,
        B, C = t.P.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
        D, E;
    C ? (D = C[1] && parseFloat(C[1]), E = C[2] && parseFloat(C[2]), B = D && E ? parseFloat(C[1] + "." + C[2]) : D ? D : j) : B = j, ba.ic = B, t.Fd = t.Ad && /webkit/i.test(t.P) && 2.3 > t.ic, t.kc = /Firefox/i.test(t.P), t.mf = /Chrome/i.test(t.P), t.qa = /MSIE\s8\.0/.test(t.P), t.Gb = !!("ontouchstart" in window || window.yd && document instanceof window.yd), t.xd = "backgroundSize" in t.A.style, t.ed = function(e, n) {
        t.i.da(n, function(t, n) {
            n === j || "undefined" == typeof n || n === l ? e.removeAttribute(t) : e.setAttribute(t, n === f ? "" : n)
        })
    }, t.Pa = function(t) {
        var e, n, i, o;
        if (e = {}, t && t.attributes && 0 < t.attributes.length) {
            n = t.attributes;
            for (var r = n.length - 1; r >= 0; r--) i = n[r].name, o = n[r].value, ("boolean" == typeof t[i] || -1 !== ",autoplay,controls,loop,muted,default,".indexOf("," + i + ",")) && (o = o !== j ? f : l), e[i] = o
        }
        return e
    }, t.wf = function(t, e) {
        var n = "";
        return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "").getPropertyValue(e) : t.currentStyle && (n = t["client" + e.substr(0, 1).toUpperCase() + e.substr(1)] + "px"), n
    }, t.Vb = function(t, e) {
        e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
    }, t.eb = {}, t.m = function(t) {
        return 0 === t.indexOf("#") && (t = t.slice(1)), document.getElementById(t)
    }, t.Oa = function(t, e) {
        e = e || t;
        var n = Math.floor(t % 60),
            i = Math.floor(t / 60 % 60),
            o = Math.floor(t / 3600),
            r = Math.floor(e / 60 % 60),
            s = Math.floor(e / 3600);
        return (isNaN(t) || 1 / 0 === t) && (o = i = n = "-"), o = o > 0 || s > 0 ? o + ":" : "", o + (((o || r >= 10) && 10 > i ? "0" + i : i) + ":") + (10 > n ? "0" + n : n)
    }, t.Md = function() {
        document.body.focus(), document.onselectstart = p(l)
    }, t.bf = function() {
        document.onselectstart = p(f)
    }, t.trim = function(t) {
        return (t + "").replace(/^\s+|\s+$/g, "")
    }, t.round = function(t, e) {
        return e || (e = 0), Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
    }, t.ya = function(t, e) {
        return t === b && e === b ? {
            length: 0,
            start: function() {
                throw Error("This TimeRanges object is empty")
            },
            end: function() {
                throw Error("This TimeRanges object is empty")
            }
        } : {
            length: 1,
            start: function() {
                return t
            },
            end: function() {
                return e
            }
        }
    }, t.Ne = function(e) {
        try {
            var n = window.localStorage || l;
            n && (n.volume = e)
        } catch (i) {
            22 == i.code || 1014 == i.code ? t.log("LocalStorage Full (VideoJS)", i) : 18 == i.code ? t.log("LocalStorage not allowed (VideoJS)", i) : t.log("LocalStorage Error (VideoJS)", i)
        }
    }, t.ae = function(e) {
        return e.match(/^https?:\/\//) || (e = t.f("div", {
            innerHTML: '<a href="' + e + '">x</a>'
        }).firstChild.href), e
    }, t.Fe = function(e) {
        var n, i, o, r;
        r = "protocol hostname port pathname search hash host".split(" "), i = t.f("a", {
            href: e
        }), (o = "" === i.host && "file:" !== i.protocol) && (n = t.f("div"), n.innerHTML = '<a href="' + e + '"></a>', i = n.firstChild, n.setAttribute("style", "display:none; position:absolute;"), document.body.appendChild(n)), e = {};
        for (var s = 0; s < r.length; s++) e[r[s]] = i[r[s]];
        return "http:" === e.protocol && (e.host = e.host.replace(/:80$/, "")), "https:" === e.protocol && (e.host = e.host.replace(/:443$/, "")), o && document.body.removeChild(n), e
    }, t.log = function() {
        F(j, arguments)
    }, t.log.history = [], t.log.error = function() {
        F("error", arguments)
    }, t.log.warn = function() {
        F("warn", arguments)
    }, t.Zd = function(e) {
        var n, i;
        return e.getBoundingClientRect && e.parentNode && (n = e.getBoundingClientRect()), n ? (e = document.documentElement, i = document.body, {
            left: t.round(n.left + (window.pageXOffset || i.scrollLeft) - (e.clientLeft || i.clientLeft || 0)),
            top: t.round(n.top + (window.pageYOffset || i.scrollTop) - (e.clientTop || i.clientTop || 0))
        }) : {
            left: 0,
            top: 0
        }
    }, t.xc = {}, t.xc.forEach = function(e, n, i) {
        if (t.i.isArray(e) && n instanceof Function)
            for (var o = 0, r = e.length; r > o; ++o) n.call(i || t, e[o], o, e);
        return e
    }, t.gf = function(e, n) {
        var i, o, r, s, a, l, c;
        "string" == typeof e && (e = {
            uri: e
        }), videojs.$.Ba({
            method: "GET",
            timeout: 45e3
        }, e), n = n || m(), l = function() {
            window.clearTimeout(a), n(j, o, o.response || o.responseText)
        }, c = function(t) {
            window.clearTimeout(a), t && "string" != typeof t || (t = Error(t)), n(t, o)
        }, i = window.XMLHttpRequest, "undefined" == typeof i && (i = function() {
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (t) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (e) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP")
            } catch (n) {}
            throw Error("This browser does not support XMLHttpRequest.")
        }), o = new i, o.uri = e.uri, i = t.Fe(e.uri), r = window.location, i.protocol + i.host === r.protocol + r.host || !window.XDomainRequest || "withCredentials" in o ? (s = "file:" == i.protocol || "file:" == r.protocol, o.onreadystatechange = function() {
            if (4 === o.readyState) {
                if (o.Ze) return c("timeout");
                200 === o.status || s && 0 === o.status ? l() : c()
            }
        }, e.timeout && (a = window.setTimeout(function() {
            4 !== o.readyState && (o.Ze = f, o.abort())
        }, e.timeout))) : (o = new window.XDomainRequest, o.onload = l, o.onerror = c, o.onprogress = m(), o.ontimeout = m());
        try {
            o.open(e.method || "GET", e.uri, f)
        } catch (u) {
            return void c(u)
        }
        e.withCredentials && (o.withCredentials = f), e.responseType && (o.responseType = e.responseType);
        try {
            o.send()
        } catch (d) {
            c(d)
        }
    }, t.$ = {}, t.$.Ba = function(e, n) {
        var i, o, r;
        e = t.i.copy(e);
        for (i in n) n.hasOwnProperty(i) && (o = e[i], r = n[i], e[i] = t.i.lb(o) && t.i.lb(r) ? t.$.Ba(o, r) : n[i]);
        return e
    }, t.z = m(), s = t.z.prototype, s.cb = {}, s.b = function(e, n) {
        var i = this.addEventListener;
        this.addEventListener = Function.prototype, t.b(this, e, n), this.addEventListener = i
    }, s.addEventListener = t.z.prototype.b, s.n = function(e, n) {
        t.n(this, e, n)
    }, s.removeEventListener = t.z.prototype.n, s.N = function(e, n) {
        t.N(this, e, n)
    }, s.o = function(e) {
        var n = e.type || e;
        "string" == typeof e && (e = {
            type: n
        }), e = t.Qb(e), this.cb[n] && this["on" + n] && this["on" + n](e), t.o(this, e)
    }, s.dispatchEvent = t.z.prototype.o, t.a = t.Ha.extend({
        l: function(e, n, i) {
            if (this.d = e, this.q = t.i.copy(this.q), n = this.options(n), this.Ra = n.id || n.el && n.el.id, this.Ra || (this.Ra = (e.id && e.id() || "no_player") + "_component_" + t.s++), this.ue = n.name || j, this.c = n.el || this.f(), this.R = [], this.gb = {}, this.hb = {}, this.Oc(), this.I(i), n.dd !== l) {
                var o, r;
                this.k().reportUserActivity && (o = t.bind(this.k(), this.k().reportUserActivity), this.b("touchstart", function() {
                    o(), this.clearInterval(r), r = this.setInterval(o, 250)
                }), e = function() {
                    o(), this.clearInterval(r)
                }, this.b("touchmove", o), this.b("touchend", e), this.b("touchcancel", e))
            }
        }
    }), s = t.a.prototype, s.dispose = function() {
        if (this.o({
            type: "dispose",
            bubbles: l
        }), this.R)
            for (var e = this.R.length - 1; e >= 0; e--) this.R[e].dispose && this.R[e].dispose();
        this.hb = this.gb = this.R = j, this.n(), this.c.parentNode && this.c.parentNode.removeChild(this.c), t.cd(this.c), this.c = j
    }, s.d = f, s.k = n("d"), s.options = function(e) {
        return e === b ? this.q : this.q = t.$.Ba(this.q, e)
    }, s.f = function(e, n) {
        return t.f(e, n)
    }, s.v = function(t) {
        var e = this.d.language(),
            n = this.d.languages();
        return n && n[e] && n[e][t] ? n[e][t] : t
    }, s.m = n("c"), s.xa = function() {
        return this.B || this.c
    }, s.id = n("Ra"), s.name = n("ue"), s.children = n("R"), s.be = function(t) {
        return this.gb[t]
    }, s.ea = function(t) {
        return this.hb[t]
    }, s.ba = function(e, n) {
        var i, o;
        return "string" == typeof e ? (o = e, n = n || {}, i = n.componentClass || t.wa(o), n.name = o, i = new window.videojs[i](this.d || this, n)) : i = e, this.R.push(i), "function" == typeof i.id && (this.gb[i.id()] = i), (o = o || i.name && i.name()) && (this.hb[o] = i), "function" == typeof i.el && i.el() && this.xa().appendChild(i.el()), i
    }, s.removeChild = function(t) {
        if ("string" == typeof t && (t = this.ea(t)), t && this.R) {
            for (var e = l, n = this.R.length - 1; n >= 0; n--)
                if (this.R[n] === t) {
                    e = f, this.R.splice(n, 1);
                    break
                }
            e && (this.gb[t.id()] = j, this.hb[t.name()] = j, (e = t.m()) && e.parentNode === this.xa() && this.xa().removeChild(t.m()))
        }
    }, s.Oc = function() {
        var e, n, i, o, r, s;
        if (e = this, n = e.options(), i = n.children)
            if (s = function(t, i) {
                n[t] !== b && (i = n[t]), i !== l && (e[t] = e.ba(t, i))
            }, t.i.isArray(i))
                for (var a = 0; a < i.length; a++) o = i[a], "string" == typeof o ? (r = o, o = {}) : r = o.name, s(r, o);
            else t.i.da(i, s)
    }, s.V = p(""), s.b = function(e, n, i) {
        var o, r, s;
        return "string" == typeof e || t.i.isArray(e) ? t.b(this.c, e, t.bind(this, n)) : (o = t.bind(this, i), s = this, r = function() {
            s.n(e, n, o)
        }, r.s = o.s, this.b("dispose", r), i = function() {
            s.n("dispose", r)
        }, i.s = o.s, e.nodeName ? (t.b(e, n, o), t.b(e, "dispose", i)) : "function" == typeof e.b && (e.b(n, o), e.b("dispose", i))), this
    }, s.n = function(e, n, i) {
        return !e || "string" == typeof e || t.i.isArray(e) ? t.n(this.c, e, n) : (i = t.bind(this, i), this.n("dispose", i), e.nodeName ? (t.n(e, n, i), t.n(e, "dispose", i)) : (e.n(n, i), e.n("dispose", i))), this
    }, s.N = function(e, n, i) {
        var o, r, s;
        return "string" == typeof e || t.i.isArray(e) ? t.N(this.c, e, t.bind(this, n)) : (o = t.bind(this, i), r = this, s = function() {
            r.n(e, n, s), o.apply(this, arguments)
        }, s.s = o.s, this.b(e, n, s)), this
    }, s.o = function(e) {
        return t.o(this.c, e), this
    }, s.I = function(t) {
        return t && (this.za ? t.call(this) : (this.pb === b && (this.pb = []), this.pb.push(t))), this
    }, s.Xa = function() {
        this.za = f;
        var t = this.pb;
        if (t && 0 < t.length) {
            for (var e = 0, n = t.length; n > e; e++) t[e].call(this);
            this.pb = [], this.o("ready")
        }
    }, s.Qa = function(e) {
        return t.Qa(this.c, e)
    }, s.p = function(e) {
        return t.p(this.c, e), this
    }, s.r = function(e) {
        return t.r(this.c, e), this
    }, s.show = function() {
        return this.r("vjs-hidden"), this
    }, s.Y = function() {
        return this.p("vjs-hidden"), this
    }, s.width = function(t, e) {
        return ca(this, "width", t, e)
    }, s.height = function(t, e) {
        return ca(this, "height", t, e)
    }, s.Ud = function(t, e) {
        return this.width(t, f).height(e)
    }, s.setTimeout = function(e, n) {
        function i() {
            this.clearTimeout(o)
        }
        e = t.bind(this, e);
        var o = setTimeout(e, n);
        return i.s = "vjs-timeout-" + o, this.b("dispose", i), o
    }, s.clearTimeout = function(t) {
        function e() {}
        return clearTimeout(t), e.s = "vjs-timeout-" + t, this.n("dispose", e), t
    }, s.setInterval = function(e, n) {
        function i() {
            this.clearInterval(o)
        }
        e = t.bind(this, e);
        var o = setInterval(e, n);
        return i.s = "vjs-interval-" + o, this.b("dispose", i), o
    }, s.clearInterval = function(t) {
        function e() {}
        return clearInterval(t), e.s = "vjs-interval-" + t, this.n("dispose", e), t
    }, t.w = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n), da(this), this.b("tap", this.u), this.b("click", this.u), this.b("focus", this.nb), this.b("blur", this.mb)
        }
    }), s = t.w.prototype, s.f = function(e, n) {
        var i;
        return n = t.i.D({
            className: this.V(),
            role: "button",
            "aria-live": "polite",
            tabIndex: 0
        }, n), i = t.a.prototype.f.call(this, e, n), n.innerHTML || (this.B = t.f("div", {
            className: "vjs-control-content"
        }), this.Lb = t.f("span", {
            className: "vjs-control-text",
            innerHTML: this.v(this.ua) || "Need Text"
        }), this.B.appendChild(this.Lb), i.appendChild(this.B)), i
    }, s.V = function() {
        return "vjs-control " + t.a.prototype.V.call(this)
    }, s.u = m(), s.nb = function() {
        t.b(document, "keydown", t.bind(this, this.la))
    }, s.la = function(t) {
        (32 == t.which || 13 == t.which) && (t.preventDefault(), this.u())
    }, s.mb = function() {
        t.n(document, "keydown", t.bind(this, this.la))
    }, t.U = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n), this.Ld = this.ea(this.q.barName), this.handle = this.ea(this.q.handleName), this.b("mousedown", this.ob), this.b("touchstart", this.ob), this.b("focus", this.nb), this.b("blur", this.mb), this.b("click", this.u), this.b(e, "controlsvisible", this.update), this.b(e, this.Yc, this.update)
        }
    }), s = t.U.prototype, s.f = function(e, n) {
        return n = n || {}, n.className += " vjs-slider", n = t.i.D({
            role: "slider",
            "aria-valuenow": 0,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            tabIndex: 0
        }, n), t.a.prototype.f.call(this, e, n)
    }, s.ob = function(e) {
        e.preventDefault(), t.Md(), this.p("vjs-sliding"), this.b(document, "mousemove", this.ma), this.b(document, "mouseup", this.Ca), this.b(document, "touchmove", this.ma), this.b(document, "touchend", this.Ca), this.ma(e)
    }, s.ma = m(), s.Ca = function() {
        t.bf(), this.r("vjs-sliding"), this.n(document, "mousemove", this.ma), this.n(document, "mouseup", this.Ca), this.n(document, "touchmove", this.ma), this.n(document, "touchend", this.Ca), this.update()
    }, s.update = function() {
        if (this.c) {
            var e, n = this.Tb(),
                i = this.handle,
                o = this.Ld;
            if (("number" != typeof n || n !== n || 0 > n || 1 / 0 === n) && (n = 0), e = n, i) {
                e = this.c.offsetWidth;
                var r = i.m().offsetWidth;
                e = r ? r / e : 0, n *= 1 - e, e = n + e / 2, i.m().style.left = t.round(100 * n, 2) + "%"
            }
            o && (o.m().style.width = t.round(100 * e, 2) + "%")
        }
    }, s.nb = function() {
        this.b(document, "keydown", this.la)
    }, s.la = function(t) {
        37 == t.which || 40 == t.which ? (t.preventDefault(), this.kd()) : (38 == t.which || 39 == t.which) && (t.preventDefault(), this.ld())
    }, s.mb = function() {
        this.n(document, "keydown", this.la)
    }, s.u = function(t) {
        t.stopImmediatePropagation(), t.preventDefault()
    }, t.ha = t.a.extend(), t.ha.prototype.defaultValue = 0, t.ha.prototype.f = function(e, n) {
        return n = n || {}, n.className += " vjs-slider-handle", n = t.i.D({
            innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
        }, n), t.a.prototype.f.call(this, "div", n)
    }, t.ra = t.a.extend(), t.ra.prototype.f = function() {
        var e = this.options().Dc || "ul";
        return this.B = t.f(e, {}), e = t.a.prototype.f.call(this, "div", {
            append: this.B,
            className: "vjs-menu"
        }), e.appendChild(this.B), t.b(e, "click", function(t) {
            t.preventDefault(), t.stopImmediatePropagation()
        }), e
    }, t.M = t.w.extend({
        l: function(e, n) {
            t.w.call(this, e, n), this.selected(n.selected)
        }
    }), t.M.prototype.f = function(e, n) {
        return t.w.prototype.f.call(this, "li", t.i.D({
            className: "vjs-menu-item",
            innerHTML: this.v(this.q.label)
        }, n))
    }, t.M.prototype.u = function() {
        this.selected(f)
    }, t.M.prototype.selected = function(t) {
        t ? (this.p("vjs-selected"), this.c.setAttribute("aria-selected", f)) : (this.r("vjs-selected"), this.c.setAttribute("aria-selected", l))
    }, t.O = t.w.extend({
        l: function(e, n) {
            t.w.call(this, e, n), this.update(), this.b("keydown", this.la), this.c.setAttribute("aria-haspopup", f), this.c.setAttribute("role", "button")
        }
    }), s = t.O.prototype, s.update = function() {
        var t = this.Ma();
        this.Aa && this.removeChild(this.Aa), this.Aa = t, this.ba(t), this.H && 0 === this.H.length ? this.Y() : this.H && 1 < this.H.length && this.show()
    }, s.Ka = l, s.Ma = function() {
        var e = new t.ra(this.d);
        if (this.options().title && e.xa().appendChild(t.f("li", {
            className: "vjs-menu-title",
            innerHTML: t.wa(this.options().title),
            Xe: -1
        })), this.H = this.createItems())
            for (var n = 0; n < this.H.length; n++) fa(e, this.H[n]);
        return e
    }, s.La = m(), s.V = function() {
        return this.className + " vjs-menu-button " + t.w.prototype.V.call(this)
    }, s.nb = m(), s.mb = m(), s.u = function() {
        this.N("mouseout", t.bind(this, function() {
            G(this.Aa), this.c.blur()
        })), this.Ka ? H(this) : ga(this)
    }, s.la = function(t) {
        32 == t.which || 13 == t.which ? (this.Ka ? H(this) : ga(this), t.preventDefault()) : 27 == t.which && (this.Ka && H(this), t.preventDefault())
    }, t.J = function(e) {
        "number" == typeof e ? this.code = e : "string" == typeof e ? this.message = e : "object" == typeof e && t.i.D(this, e), this.message || (this.message = t.J.Td[this.code] || "")
    }, t.J.prototype.code = 0, t.J.prototype.message = "", t.J.prototype.status = j, t.J.jb = "MEDIA_ERR_CUSTOM MEDIA_ERR_ABORTED MEDIA_ERR_NETWORK MEDIA_ERR_DECODE MEDIA_ERR_SRC_NOT_SUPPORTED MEDIA_ERR_ENCRYPTED".split(" "), t.J.Td = {
        1: "You aborted the video playback",
        2: "A network error caused the video download to fail part-way.",
        3: "The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",
        4: "The video could not be loaded, because the format is not supported.",
        5: "The video is encrypted and we do not have the keys to decrypt it.",
        6: "Video doesn't exist.",
        7: "Unauthorized devices.",
        8: "Duplicate login.",
        9: "To access the video, please login",
        10: "The video playback was aborted due to a corruption problem.",
        11: "Our Services are available in Taiwan.",
        12: "Oops, something went wrong.",
        13: "Sorry, you need to register for three months to use the service.",
        14: "Paid Member only."
    };
    for (var I = 0; I < t.J.jb.length; I++) t.J[t.J.jb[I]] = I, t.J.prototype[t.J.jb[I]] = I;
    var J, ha, K, L;
    for (J = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")], ha = J[0], L = 0; L < J.length; L++)
        if (J[L][1] in document) {
            K = J[L];
            break
        }
    if (K)
        for (t.eb.Sb = {}, L = 0; L < K.length; L++) t.eb.Sb[ha[L]] = K[L];
    t.Player = t.a.extend({
        l: function(e, n, i) {
            this.L = e, e.id = e.id || "vjs_video_" + t.s++, this.Ye = e && t.Pa(e), n = t.i.D(ia(e), n), this.Tc = n.language || t.options.language, this.oe = n.languages || t.options.languages, this.K = {}, this.Zc = n.poster || "", this.Mb = !!n.controls, e.controls = l, n.dd = l, ja(this, "audio" === this.L.nodeName.toLowerCase()), t.a.call(this, this, n, i), this.controls() ? this.p("vjs-controls-enabled") : this.p("vjs-controls-disabled"), ja(this) && this.p("vjs-audio"), t.Da[this.Ra] = this, n.plugins && t.i.da(n.plugins, function(t, e) {
                this[t](e)
            }, this);
            var o, r, s, a, c;
            o = t.bind(this, this.reportUserActivity), this.b("mousedown", function() {
                o(), this.clearInterval(r), r = this.setInterval(o, 50)
            }), this.b("mousemove", function(t) {
                (t.screenX != a || t.screenY != c) && (a = t.screenX, c = t.screenY, o())
            }), this.b("mouseup", function() {
                o(), this.clearInterval(r)
            }), this.b("keydown", o), this.b("keyup", o), this.setInterval(function() {
                if (this.Ga) {
                    this.Ga = l, this.userActive(f), this.clearTimeout(s);
                    var t = this.options().inactivityTimeout;
                    t > 0 && (s = this.setTimeout(function() {
                        this.Ga || this.userActive(l)
                    }, t))
                }
            }, 50)
        }
    }), s = t.Player.prototype, s.language = function(t) {
        return t === b ? this.Tc : (this.Tc = t, this)
    }, s.languages = n("oe"), s.q = t.options, s.dispose = function() {
        this.o("dispose"), this.n("dispose"), t.Da[this.Ra] = j, this.L && this.L.player && (this.L.player = j), this.c && this.c.player && (this.c.player = j), this.h && this.h.dispose(), t.a.prototype.dispose.call(this)
    }, s.f = function() {
        var e, n = this.c = t.a.prototype.f.call(this, "div"),
            i = this.L;
        return i.removeAttribute("width"), i.removeAttribute("height"), e = t.Pa(i), t.i.da(e, function(t) {
            "class" == t ? n.className = e[t] : n.setAttribute(t, e[t])
        }), i.id += "_html5_api", i.className = "vjs-tech", i.player = n.player = this, this.p("vjs-paused"), this.width(this.q.width, f), this.height(this.q.height, f), i.he = i.networkState, i.parentNode && i.parentNode.insertBefore(n, i), t.Vb(i, n), this.c = n, this.b("loadstart", this.ye), this.b("waiting", this.Ee), this.b(["canplay", "canplaythrough", "playing", "ended"], this.De), this.b("seeking", this.Be), this.b("seeked", this.Ae), this.b("ended", this.ve), this.b("play", this.ac), this.b("firstplay", this.we), this.b("pause", this.$b), this.b("progress", this.ze), this.b("durationchange", this.Wc), this.b("fullscreenchange", this.xe), n
    }, s.ye = function() {
        this.r("vjs-ended"), this.error(j), this.paused() ? la(this, l) : this.o("firstplay")
    }, s.Nc = l, s.ac = function() {
        this.r("vjs-ended"), this.r("vjs-paused"), this.p("vjs-playing"), la(this, f)
    }, s.Ee = function() {
        this.p("vjs-waiting")
    }, s.De = function() {
        this.r("vjs-waiting")
    }, s.Be = function() {
        this.p("vjs-seeking")
    }, s.Ae = function() {
        this.r("vjs-seeking")
    }, s.we = function() {
        this.q.starttime && this.currentTime(this.q.starttime), this.p("vjs-has-started")
    }, s.$b = function() {
        this.r("vjs-playing"), this.p("vjs-paused")
    }, s.ze = function() {
        1 == this.bufferedPercent() && this.o("loadedalldata")
    }, s.ve = function() {
        this.p("vjs-ended"), this.q.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause()
    }, s.Wc = function() {
        var t = M(this, "duration");
        t && (0 > t && (t = 1 / 0), this.duration(t), 1 / 0 === t ? this.p("vjs-live") : this.r("vjs-live"))
    }, s.xe = function() {
        this.isFullscreen() ? this.p("vjs-fullscreen") : this.r("vjs-fullscreen")
    }, s.play = function() {
        return N(this, "play"), this
    }, s.pause = function() {
        return N(this, "pause"), this
    }, s.paused = function() {
        return M(this, "paused") === l ? l : f
    }, s.currentTime = function(t) {
        return t !== b ? (N(this, "setCurrentTime", t), this) : this.K.currentTime = M(this, "currentTime") || 0
    }, s.duration = function(t) {
        return t !== b ? (this.K.duration = parseFloat(t), this) : (this.K.duration === b && this.Wc(), this.K.duration || 0)
    }, s.remainingTime = function() {
        return this.duration() - this.currentTime()
    }, s.buffered = function() {
        var e = M(this, "buffered");
        return e && e.length || (e = t.ya(0, 0)), e
    }, s.bufferedPercent = function() {
        var t, e, n = this.duration(),
            i = this.buffered(),
            o = 0;
        if (!n) return 0;
        for (var r = 0; r < i.length; r++) t = i.start(r), e = i.end(r), e > n && (e = n), o += e - t;
        return o / n
    }, s.volume = function(e) {
        return e !== b ? (e = Math.max(0, Math.min(1, parseFloat(e))), this.K.volume = e, N(this, "setVolume", e), t.Ne(e), this) : (e = parseFloat(M(this, "volume")), isNaN(e) ? 1 : e)
    }, s.muted = function(t) {
        return t !== b ? (N(this, "setMuted", t), this) : M(this, "muted") || l
    }, s.Ua = function() {
        return M(this, "supportsFullScreen") || l
    }, s.Qc = l, s.isFullscreen = function(t) {
        return t !== b ? (this.Qc = !!t, this) : this.Qc
    }, s.isFullScreen = function(e) {
        return t.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")'),
            this.isFullscreen(e)
    }, s.requestFullscreen = function() {
        var e = t.eb.Sb;
        return this.isFullscreen(f), e ? (t.b(document, e.fullscreenchange, t.bind(this, function(n) {
            this.isFullscreen(document[e.fullscreenElement]), this.isFullscreen() === l && t.n(document, e.fullscreenchange, arguments.callee), this.o("fullscreenchange")
        })), this.c[e.requestFullscreen]()) : this.h.Ua() ? N(this, "enterFullScreen") : (this.Jc(), this.o("fullscreenchange")), this
    }, s.requestFullScreen = function() {
        return t.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")'), this.requestFullscreen()
    }, s.exitFullscreen = function() {
        var e = t.eb.Sb;
        return this.isFullscreen(l), e ? document[e.exitFullscreen]() : this.h.Ua() ? N(this, "exitFullScreen") : (this.Ob(), this.o("fullscreenchange")), this
    }, s.cancelFullScreen = function() {
        return t.log.warn("player.cancelFullScreen() has been deprecated, use player.exitFullscreen()"), this.exitFullscreen()
    }, s.Jc = function() {
        this.ke = f, this.Vd = document.documentElement.style.overflow, t.b(document, "keydown", t.bind(this, this.Kc)), document.documentElement.style.overflow = "hidden", t.p(document.body, "vjs-full-window"), this.o("enterFullWindow")
    }, s.Kc = function(t) {
        27 === t.keyCode && (this.isFullscreen() === f ? this.exitFullscreen() : this.Ob())
    }, s.Ob = function() {
        this.ke = l, t.n(document, "keydown", this.Kc), document.documentElement.style.overflow = this.Vd, t.r(document.body, "vjs-full-window"), this.o("exitFullWindow")
    }, s.selectSource = function(e) {
        for (var n = 0, i = this.q.techOrder; n < i.length; n++) {
            var o = t.wa(i[n]),
                r = window.videojs[o];
            if (r) {
                if (r.isSupported())
                    for (var s = 0, a = e; s < a.length; s++) {
                        var c = a[s];
                        if (r.canPlaySource(c)) return {
                            source: c,
                            h: o
                        }
                    }
            } else t.log.error('The "' + o + '" tech is undefined. Skipped browser support check for that tech.')
        }
        return l
    }, s.src = function(e) {
        return e === b ? M(this, "src") : (t.i.isArray(e) ? ma(this, e) : "string" == typeof e ? this.src({
            src: e
        }) : e instanceof Object && (e.type && !window.videojs[this.Va].canPlaySource(e) ? ma(this, [e]) : (this.K.src = e.src, this.Gc = e.type || "", this.I(function() {
            window.videojs[this.Va].prototype.hasOwnProperty("setSource") ? N(this, "setSource", e) : N(this, "src", e.src), "auto" == this.q.preload && this.load(), this.q.autoplay && this.play()
        }))), this)
    }, s.load = function() {
        return N(this, "load"), this
    }, s.currentSrc = function() {
        return M(this, "currentSrc") || this.K.src || ""
    }, s.Rd = function() {
        return this.Gc || ""
    }, s.Sa = function(t) {
        return t !== b ? (N(this, "setPreload", t), this.q.preload = t, this) : M(this, "preload")
    }, s.autoplay = function(t) {
        return t !== b ? (N(this, "setAutoplay", t), this.q.autoplay = t, this) : M(this, "autoplay")
    }, s.loop = function(t) {
        return t !== b ? (N(this, "setLoop", t), this.q.loop = t, this) : M(this, "loop")
    }, s.poster = function(t) {
        return t === b ? this.Zc : (t || (t = ""), this.Zc = t, N(this, "setPoster", t), this.o("posterchange"), this)
    }, s.controls = function(t) {
        return t !== b ? (t = !!t, this.Mb !== t && ((this.Mb = t) ? (this.r("vjs-controls-disabled"), this.p("vjs-controls-enabled"), this.o("controlsenabled")) : (this.r("vjs-controls-enabled"), this.p("vjs-controls-disabled"), this.o("controlsdisabled"))), this) : this.Mb
    }, t.Player.prototype.fc, s = t.Player.prototype, s.usingNativeControls = function(t) {
        return t !== b ? (t = !!t, this.fc !== t && ((this.fc = t) ? (this.p("vjs-using-native-controls"), this.o("usingnativecontrols")) : (this.r("vjs-using-native-controls"), this.o("usingcustomcontrols"))), this) : this.fc
    }, s.ka = j, s.error = function(e) {
        return e === b ? this.ka : e === j ? (this.ka = e, this.r("vjs-error"), this) : (this.ka = e instanceof t.J ? e : new t.J(e), this.o("error"), this.p("vjs-error"), t.log.error("(CODE:" + this.ka.code + " " + t.J.jb[this.ka.code] + ")", this.ka.message, this.ka), this)
    }, s.ended = function() {
        return M(this, "ended")
    }, s.seeking = function() {
        return M(this, "seeking")
    }, s.seekable = function() {
        return M(this, "seekable")
    }, s.Ga = f, s.reportUserActivity = function() {
        this.Ga = f
    }, s.ec = f, s.userActive = function(t) {
        return t !== b ? (t = !!t, t !== this.ec && ((this.ec = t) ? (this.Ga = f, this.r("vjs-user-inactive"), this.p("vjs-user-active"), this.o("useractive")) : (this.Ga = l, this.h && this.h.N("mousemove", function(t) {
            t.stopPropagation(), t.preventDefault()
        }), this.r("vjs-user-active"), this.p("vjs-user-inactive"), this.o("userinactive"))), this) : this.ec
    }, s.playbackRate = function(t) {
        return t !== b ? (N(this, "setPlaybackRate", t), this) : this.h && this.h.featuresPlaybackRate ? M(this, "playbackRate") : 1
    }, s.Pc = l, s.networkState = function() {
        return M(this, "networkState")
    }, s.readyState = function() {
        return M(this, "readyState")
    }, s.textTracks = function() {
        return this.h && this.h.textTracks()
    }, s.Z = function() {
        return this.h && this.h.remoteTextTracks()
    }, s.addTextTrack = function(t, e, n) {
        return this.h && this.h.addTextTrack(t, e, n)
    }, s.ia = function(t) {
        return this.h && this.h.addRemoteTextTrack(t)
    }, s.Ea = function(t) {
        this.h && this.h.removeRemoteTextTrack(t)
    }, t.wb = t.a.extend(), t.wb.prototype.q = {
        xf: "play",
        children: {
            playToggle: {},
            currentTimeDisplay: {},
            timeDivider: {},
            durationDisplay: {},
            remainingTimeDisplay: {},
            liveDisplay: {},
            progressControl: {},
            fullscreenToggle: {},
            volumeControl: {},
            muteToggle: {},
            playbackRateMenuButton: {},
            subtitlesButton: {},
            captionsButton: {},
            chaptersButton: {}
        }
    }, t.wb.prototype.f = function() {
        return t.f("div", {
            className: "vjs-control-bar"
        })
    }, t.lc = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n)
        }
    }), t.lc.prototype.f = function() {
        var e = t.a.prototype.f.call(this, "div", {
            className: "vjs-live-controls vjs-control"
        });
        return this.B = t.f("div", {
            className: "vjs-live-display",
            innerHTML: '<span class="vjs-control-text">' + this.v("Stream Type") + "</span>" + this.v("LIVE"),
            "aria-live": "off"
        }), e.appendChild(this.B), e
    }, t.oc = t.w.extend({
        l: function(e, n) {
            t.w.call(this, e, n), this.b(e, "play", this.ac), this.b(e, "pause", this.$b)
        }
    }), s = t.oc.prototype, s.ua = "Play", s.V = function() {
        return "vjs-play-control " + t.w.prototype.V.call(this)
    }, s.u = function() {
        this.d.paused() ? this.d.play() : this.d.pause()
    }, s.ac = function() {
        this.r("vjs-paused"), this.p("vjs-playing"), this.c.children[0].children[0].innerHTML = this.v("Pause")
    }, s.$b = function() {
        this.r("vjs-playing"), this.p("vjs-paused"), this.c.children[0].children[0].innerHTML = this.v("Play")
    }, t.xb = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n), this.b(e, "timeupdate", this.ga)
        }
    }), t.xb.prototype.f = function() {
        var e = t.a.prototype.f.call(this, "div", {
            className: "vjs-current-time vjs-time-controls vjs-control"
        });
        return this.B = t.f("div", {
            className: "vjs-current-time-display",
            innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
            "aria-live": "off"
        }), e.appendChild(this.B), e
    }, t.xb.prototype.ga = function() {
        var e = this.d.qb ? this.d.K.currentTime : this.d.currentTime();
        this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Current Time") + "</span> " + t.Oa(e, this.d.duration())
    }, t.yb = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n), this.b(e, "timeupdate", this.ga), this.b(e, "loadedmetadata", this.ga)
        }
    }), t.yb.prototype.f = function() {
        var e = t.a.prototype.f.call(this, "div", {
            className: "vjs-duration vjs-time-controls vjs-control"
        });
        return this.B = t.f("div", {
            className: "vjs-duration-display",
            innerHTML: '<span class="vjs-control-text">' + this.v("Duration Time") + "</span> 0:00",
            "aria-live": "off"
        }), e.appendChild(this.B), e
    }, t.yb.prototype.ga = function() {
        var e = this.d.duration();
        e && (this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Duration Time") + "</span> " + t.Oa(e))
    }, t.uc = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n)
        }
    }), t.uc.prototype.f = function() {
        return t.a.prototype.f.call(this, "div", {
            className: "vjs-time-divider",
            innerHTML: "<div><span>/</span></div>"
        })
    }, t.Fb = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n), this.b(e, "timeupdate", this.ga)
        }
    }), t.Fb.prototype.f = function() {
        var e = t.a.prototype.f.call(this, "div", {
            className: "vjs-remaining-time vjs-time-controls vjs-control"
        });
        return this.B = t.f("div", {
            className: "vjs-remaining-time-display",
            innerHTML: '<span class="vjs-control-text">' + this.v("Remaining Time") + "</span> -0:00",
            "aria-live": "off"
        }), e.appendChild(this.B), e
    }, t.Fb.prototype.ga = function() {
        this.d.duration() && (this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Remaining Time") + "</span> -" + t.Oa(this.d.remainingTime()))
    }, t.$a = t.w.extend({
        l: function(e, n) {
            t.w.call(this, e, n)
        }
    }), t.$a.prototype.ua = "Fullscreen", t.$a.prototype.V = function() {
        return "vjs-fullscreen-control " + t.w.prototype.V.call(this)
    }, t.$a.prototype.u = function() {
        this.d.isFullscreen() ? (this.d.exitFullscreen(), this.Lb.innerHTML = this.v("Fullscreen")) : (this.d.requestFullscreen(), this.Lb.innerHTML = this.v("Non-Fullscreen"))
    }, t.Eb = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n)
        }
    }), t.Eb.prototype.q = {
        children: {
            seekBar: {}
        }
    }, t.Eb.prototype.f = function() {
        return t.a.prototype.f.call(this, "div", {
            className: "vjs-progress-control"
        })
    }, t.rc = t.U.extend({
        l: function(e, n) {
            t.U.call(this, e, n), this.b(e, "timeupdate", this.Fa), e.I(t.bind(this, this.Fa))
        }
    }), s = t.rc.prototype, s.q = {
        children: {
            loadProgressBar: {},
            playProgressBar: {},
            seekHandle: {}
        },
        barName: "playProgressBar",
        handleName: "seekHandle"
    }, s.Yc = "timeupdate", s.f = function() {
        return t.U.prototype.f.call(this, "div", {
            className: "vjs-progress-holder",
            "aria-label": "video progress bar"
        })
    }, s.Fa = function() {
        var e = this.d.qb ? this.d.K.currentTime : this.d.currentTime();
        this.c.setAttribute("aria-valuenow", t.round(100 * this.Tb(), 2)), this.c.setAttribute("aria-valuetext", t.Oa(e, this.d.duration()))
    }, s.Tb = function() {
        return this.d.currentTime() / this.d.duration()
    }, s.ob = function(e) {
        t.U.prototype.ob.call(this, e), this.d.qb = f, this.d.p("vjs-scrubbing"), this.ef = !this.d.paused(), this.d.pause(), this.d.currentTime(this.d.currentTime())
    }, s.ma = function(t) {
        t = ea(this, t) * this.d.duration(), t == this.d.duration() && (t -= .1), this.d.currentTime(t)
    }, s.Ca = function(e) {
        t.U.prototype.Ca.call(this, e), this.d.qb = l, this.d.r("vjs-scrubbing"), this.ef && this.d.play()
    }, s.ld = function() {
        this.d.currentTime(this.d.currentTime() + 5)
    }, s.kd = function() {
        this.d.currentTime(this.d.currentTime() - 5)
    }, t.Bb = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n), this.b(e, "progress", this.update)
        }
    }), t.Bb.prototype.f = function() {
        return t.a.prototype.f.call(this, "div", {
            className: "vjs-load-progress",
            innerHTML: '<span class="vjs-control-text"><span>' + this.v("Loaded") + "</span>: 0%</span>"
        })
    }, t.Bb.prototype.update = function() {
        var e, n, i, o, r = this.d.buffered();
        e = this.d.duration();
        var s, a = this.d;
        for (s = a.buffered(), a = a.duration(), s = s.end(s.length - 1), s > a && (s = a), a = this.c.children, this.c.style.width = 100 * (s / e || 0) + "%", e = 0; e < r.length; e++) n = r.start(e), i = r.end(e), (o = a[e]) || (o = this.c.appendChild(t.f())), o.style.left = 100 * (n / s || 0) + "%", o.style.width = 100 * ((i - n) / s || 0) + "%";
        for (e = a.length; e > r.length; e--) this.c.removeChild(a[e - 1])
    }, t.nc = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n)
        }
    }), t.nc.prototype.f = function() {
        return t.a.prototype.f.call(this, "div", {
            className: "vjs-play-progress",
            innerHTML: '<span class="vjs-control-text"><span>' + this.v("Progress") + "</span>: 0%</span>"
        })
    }, t.ab = t.ha.extend({
        l: function(e, n) {
            t.ha.call(this, e, n), this.b(e, "timeupdate", this.ga)
        }
    }), t.ab.prototype.defaultValue = "00:00", t.ab.prototype.f = function() {
        return t.ha.prototype.f.call(this, "div", {
            className: "vjs-seek-handle",
            "aria-live": "off"
        })
    }, t.ab.prototype.ga = function() {
        var e = this.d.qb ? this.d.K.currentTime : this.d.currentTime();
        this.c.innerHTML = '<span class="vjs-control-text">' + t.Oa(e, this.d.duration()) + "</span>"
    }, t.Ib = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n), e.h && e.h.featuresVolumeControl === l && this.p("vjs-hidden"), this.b(e, "loadstart", function() {
                e.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
            })
        }
    }), t.Ib.prototype.q = {
        children: {
            volumeBar: {}
        }
    }, t.Ib.prototype.f = function() {
        return t.a.prototype.f.call(this, "div", {
            className: "vjs-volume-control vjs-control"
        })
    }, t.Hb = t.U.extend({
        l: function(e, n) {
            t.U.call(this, e, n), this.b(e, "volumechange", this.Fa), e.I(t.bind(this, this.Fa))
        }
    }), s = t.Hb.prototype, s.Fa = function() {
        this.c.setAttribute("aria-valuenow", t.round(100 * this.d.volume(), 2)), this.c.setAttribute("aria-valuetext", t.round(100 * this.d.volume(), 2) + "%")
    }, s.q = {
        children: {
            volumeLevel: {},
            volumeHandle: {}
        },
        barName: "volumeLevel",
        handleName: "volumeHandle"
    }, s.Yc = "volumechange", s.f = function() {
        return t.U.prototype.f.call(this, "div", {
            className: "vjs-volume-bar",
            "aria-label": "volume level"
        })
    }, s.ma = function(t) {
        this.d.muted() && this.d.muted(l), this.d.volume(ea(this, t))
    }, s.Tb = function() {
        return this.d.muted() ? 0 : this.d.volume()
    }, s.ld = function() {
        this.d.volume(this.d.volume() + .1)
    }, s.kd = function() {
        this.d.volume(this.d.volume() - .1)
    }, t.vc = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n)
        }
    }), t.vc.prototype.f = function() {
        return t.a.prototype.f.call(this, "div", {
            className: "vjs-volume-level",
            innerHTML: '<span class="vjs-control-text"></span>'
        })
    }, t.Jb = t.ha.extend(), t.Jb.prototype.defaultValue = "00:00", t.Jb.prototype.f = function() {
        return t.ha.prototype.f.call(this, "div", {
            className: "vjs-volume-handle"
        })
    }, t.sa = t.w.extend({
        l: function(e, n) {
            t.w.call(this, e, n), this.b(e, "volumechange", this.update), e.h && e.h.featuresVolumeControl === l && this.p("vjs-hidden"), this.b(e, "loadstart", function() {
                e.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
            })
        }
    }), t.sa.prototype.f = function() {
        return t.w.prototype.f.call(this, "div", {
            className: "vjs-mute-control vjs-control",
            innerHTML: '<div><span class="vjs-control-text">' + this.v("Mute") + "</span></div>"
        })
    }, t.sa.prototype.u = function() {
        this.d.muted(this.d.muted() ? l : f)
    }, t.sa.prototype.update = function() {
        var e = this.d.volume(),
            n = 3;
        for (0 === e || this.d.muted() ? n = 0 : .33 > e ? n = 1 : .67 > e && (n = 2), this.d.muted() ? this.c.children[0].children[0].innerHTML != this.v("Unmute") && (this.c.children[0].children[0].innerHTML = this.v("Unmute")) : this.c.children[0].children[0].innerHTML != this.v("Mute") && (this.c.children[0].children[0].innerHTML = this.v("Mute")), e = 0; 4 > e; e++) t.r(this.c, "vjs-vol-" + e);
        t.p(this.c, "vjs-vol-" + n)
    }, t.Ia = t.O.extend({
        l: function(e, n) {
            t.O.call(this, e, n), this.b(e, "volumechange", this.ff), e.h && e.h.featuresVolumeControl === l && this.p("vjs-hidden"), this.b(e, "loadstart", function() {
                e.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
            }), this.p("vjs-menu-button")
        }
    }), t.Ia.prototype.Ma = function() {
        var e = new t.ra(this.d, {
                Dc: "div"
            }),
            n = new t.Hb(this.d, this.q.volumeBar);
        return n.b("focus", function() {
            e.p("vjs-lock-showing")
        }), n.b("blur", function() {
            G(e)
        }), e.ba(n), e
    }, t.Ia.prototype.u = function() {
        t.sa.prototype.u.call(this), t.O.prototype.u.call(this)
    }, t.Ia.prototype.f = function() {
        return t.w.prototype.f.call(this, "div", {
            className: "vjs-volume-menu-button vjs-menu-button vjs-control",
            innerHTML: '<div><span class="vjs-control-text">' + this.v("Mute") + "</span></div>"
        })
    }, t.Ia.prototype.ff = t.sa.prototype.update, t.pc = t.O.extend({
        l: function(e, n) {
            t.O.call(this, e, n), this.td(), this.sd(), this.b(e, "loadstart", this.td), this.b(e, "ratechange", this.sd)
        }
    }), s = t.pc.prototype, s.ua = "Playback Rate", s.className = "vjs-playback-rate", s.f = function() {
        var e = t.O.prototype.f.call(this);
        return this.Sc = t.f("div", {
            className: "vjs-playback-rate-value",
            innerHTML: 1
        }), e.appendChild(this.Sc), e
    }, s.Ma = function() {
        var e = new t.ra(this.k()),
            n = this.k().options().playbackRates;
        if (n)
            for (var i = n.length - 1; i >= 0; i--) e.ba(new t.Db(this.k(), {
                rate: n[i] + "x"
            }));
        return e
    }, s.Fa = function() {
        this.m().setAttribute("aria-valuenow", this.k().playbackRate())
    }, s.u = function() {
        for (var t = this.k().playbackRate(), e = this.k().options().playbackRates, n = e[0], i = 0; i < e.length; i++)
            if (e[i] > t) {
                n = e[i];
                break
            }
        this.k().playbackRate(n)
    }, s.td = function() {
        na(this) ? this.r("vjs-hidden") : this.p("vjs-hidden")
    }, s.sd = function() {
        na(this) && (this.Sc.innerHTML = this.k().playbackRate() + "x")
    }, t.Db = t.M.extend({
        Dc: "button",
        l: function(e, n) {
            var i = this.label = n.rate,
                o = this.$c = parseFloat(i, 10);
            n.label = i, n.selected = 1 === o, t.M.call(this, e, n), this.b(e, "ratechange", this.update)
        }
    }), t.Db.prototype.u = function() {
        t.M.prototype.u.call(this), this.k().playbackRate(this.$c)
    }, t.Db.prototype.update = function() {
        this.selected(this.k().playbackRate() == this.$c)
    }, t.qc = t.w.extend({
        l: function(e, n) {
            t.w.call(this, e, n), this.update(), e.b("posterchange", t.bind(this, this.update))
        }
    }), s = t.qc.prototype, s.dispose = function() {
        this.k().n("posterchange", this.update), t.w.prototype.dispose.call(this)
    }, s.f = function() {
        var e = t.f("div", {
            className: "vjs-poster",
            tabIndex: -1
        });
        return t.xd || (this.Pb = t.f("img"), e.appendChild(this.Pb)), e
    }, s.update = function() {
        var t = this.k().poster();
        this.oa(t), t ? this.show() : this.Y()
    }, s.oa = function(t) {
        var e;
        this.Pb ? this.Pb.src = t : (e = "", t && (e = 'url("' + t + '")'), this.c.style.backgroundImage = e)
    }, s.u = function() {
        this.d.play()
    }, t.mc = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n)
        }
    }), t.mc.prototype.f = function() {
        return t.a.prototype.f.call(this, "div", {
            className: "vjs-loading-spinner"
        })
    }, t.ub = t.w.extend(), t.ub.prototype.f = function() {
        return t.w.prototype.f.call(this, "div", {
            className: "vjs-big-play-button",
            innerHTML: '<span aria-hidden="true"></span>',
            "aria-label": "play video"
        })
    }, t.ub.prototype.u = function() {
        this.d.play()
    }, t.zb = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n), this.update(), this.b(e, "error", this.update)
        }
    }), t.zb.prototype.f = function() {
        var e = t.a.prototype.f.call(this, "div", {
            className: "vjs-error-display"
        });
        return this.B = t.f("div"), e.appendChild(this.B), e
    }, t.zb.prototype.update = function() {
        this.k().error() && (this.B.innerHTML = this.v(this.k().error().message))
    };
    var O;
    t.j = t.a.extend({
        l: function(e, n, i) {
            n = n || {}, n.dd = l, t.a.call(this, e, n, i), this.featuresProgressEvents || this.se(), this.featuresTimeupdateEvents || this.te(), this.ge(), this.featuresNativeTextTracks || this.Wd(), this.ie()
        }
    }), s = t.j.prototype, s.ge = function() {
        var t, e;
        t = this.k(), e = function() {
            t.controls() && !t.usingNativeControls() && this.Jd()
        }, this.I(e), this.b(t, "controlsenabled", e), this.b(t, "controlsdisabled", this.Ie), this.I(function() {
            this.networkState && 0 < this.networkState() && this.k().o("loadstart")
        })
    }, s.Jd = function() {
        var t;
        this.b("mousedown", this.u), this.b("touchstart", function() {
            t = this.d.userActive()
        }), this.b("touchmove", function() {
            t && this.k().reportUserActivity()
        }), this.b("touchend", function(t) {
            t.preventDefault()
        }), da(this), this.b("tap", this.Ce)
    }, s.Ie = function() {
        this.n("tap"), this.n("touchstart"), this.n("touchmove"), this.n("touchleave"), this.n("touchcancel"), this.n("touchend"), this.n("click"), this.n("mousedown")
    }, s.u = function(t) {
        0 === t.button && this.k().controls() && (this.k().paused() ? this.k().play() : this.k().pause())
    }, s.Ce = function() {
        this.k().userActive(!this.k().userActive())
    }, s.se = function() {
        this.Uc = f, this.af()
    }, s.re = function() {
        this.Uc = l, this.md()
    }, s.af = function() {
        this.He = this.setInterval(function() {
            var t = this.k().bufferedPercent();
            this.Nd != t && this.k().o("progress"), this.Nd = t, 1 === t && this.md()
        }, 500)
    }, s.md = function() {
        this.clearInterval(this.He)
    }, s.te = function() {
        var t = this.d;
        this.Zb = f, this.b(t, "play", this.qd), this.b(t, "pause", this.tb), this.N("timeupdate", function() {
            this.featuresTimeupdateEvents = f, this.Vc()
        })
    }, s.Vc = function() {
        var t = this.d;
        this.Zb = l, this.tb(), this.n(t, "play", this.qd), this.n(t, "pause", this.tb)
    }, s.qd = function() {
        this.Fc && this.tb(), this.Fc = this.setInterval(function() {
            this.k().o("timeupdate")
        }, 250)
    }, s.tb = function() {
        this.clearInterval(this.Fc), this.k().o("timeupdate")
    }, s.dispose = function() {
        this.Uc && this.re(), this.Zb && this.Vc(), t.a.prototype.dispose.call(this)
    }, s.cc = function() {
        this.Zb && this.k().o("timeupdate")
    }, s.ie = function() {
        function e() {
            var t = i.ea("textTrackDisplay");
            t && t.C()
        }
        var n, i = this.d;
        (n = this.textTracks()) && (n.addEventListener("removetrack", e), n.addEventListener("addtrack", e), this.b("dispose", t.bind(this, function() {
            n.removeEventListener("removetrack", e), n.removeEventListener("addtrack", e)
        })))
    }, s.Wd = function() {
        var e, n, i, o = this.d;
        window.WebVTT || (i = document.createElement("script"), i.src = o.options()["vtt.js"] || "../node_modules/vtt.js/dist/vtt.js", o.m().appendChild(i), window.WebVTT = f), (n = this.textTracks()) && (e = function() {
            var e, n, i;
            for (i = o.ea("textTrackDisplay"), i.C(), e = 0; e < this.length; e++) n = this[e], n.removeEventListener("cuechange", t.bind(i, i.C)), "showing" === n.mode && n.addEventListener("cuechange", t.bind(i, i.C))
        }, n.addEventListener("change", e), this.b("dispose", t.bind(this, function() {
            n.removeEventListener("change", e)
        })))
    }, s.textTracks = function() {
        return this.d.pd = this.d.pd || new t.F, this.d.pd
    }, s.Z = function() {
        return this.d.ad = this.d.ad || new t.F, this.d.ad
    }, O = function(e, n, i, o, r) {
        var s = e.textTracks();
        return r = r || {}, r.kind = n, i && (r.label = i), o && (r.language = o), r.player = e.d, e = new t.t(r), P(s, e), e
    }, t.j.prototype.addTextTrack = function(t, e, n) {
        if (!t) throw Error("TextTrack kind is required but was not provided");
        return O(this, t, e, n)
    }, t.j.prototype.ia = function(t) {
        return t = O(this, t.kind, t.label, t.language, t), P(this.Z(), t), {
            T: t
        }
    }, t.j.prototype.Ea = function(t) {
        Q(this.textTracks(), t), Q(this.Z(), t)
    }, t.j.prototype.fd = m(), t.j.prototype.featuresVolumeControl = f, t.j.prototype.featuresFullscreenResize = l, t.j.prototype.featuresPlaybackRate = l, t.j.prototype.featuresProgressEvents = l, t.j.prototype.featuresTimeupdateEvents = l, t.j.prototype.featuresNativeTextTracks = l, t.j.hc = function(e) {
        e.Ta = function(t, n) {
            var i = e.gd;
            i || (i = e.gd = []), n === b && (n = i.length), i.splice(n, 0, t)
        }, e.rb = function(t) {
            for (var n, i = e.gd || [], o = 0; o < i.length; o++)
                if (n = i[o].fb(t)) return i[o];
            return j
        }, e.Ac = function(t) {
            var n = e.rb(t);
            return n ? n.fb(t) : ""
        }, e.prototype.na = function(n) {
            var i = e.rb(n);
            return i || (e.S ? i = e.S : t.log.error("No source hander found for the current source.")), this.ja(), this.n("dispose", this.ja), this.ib = n, this.dc = i.Ub(n, this), this.b("dispose", this.ja), this
        }, e.prototype.ja = function() {
            this.dc && this.dc.dispose && this.dc.dispose()
        }
    }, t.media = {}, t.e = t.j.extend({
        l: function(e, n, i) {
            var o, r, s;
            for ((n.nativeCaptions === l || n.nativeTextTracks === l) && (this.featuresNativeTextTracks = l), t.j.call(this, e, n, i), i = t.e.Ab.length - 1; i >= 0; i--) this.b(t.e.Ab[i], this.Xd);
            if ((n = n.source) && (this.c.currentSrc !== n.src || e.L && 3 === e.L.he) && this.na(n), this.c.hasChildNodes()) {
                for (i = this.c.childNodes, o = i.length, n = []; o--;) r = i[o], s = r.nodeName.toLowerCase(), "track" === s && (this.featuresNativeTextTracks ? P(this.Z(), r.track) : n.push(r));
                for (i = 0; i < n.length; i++) this.c.removeChild(n[i])
            }
            if (this.featuresNativeTextTracks && this.b("loadstart", t.bind(this, this.fe)), t.Gb && e.options().nativeControlsForTouch === f) {
                var a, c, u, d;
                a = this, c = this.k(), n = c.controls(), a.c.controls = !!n, u = function() {
                    a.c.controls = f
                }, d = function() {
                    a.c.controls = l
                }, c.b("controlsenabled", u), c.b("controlsdisabled", d), n = function() {
                    c.n("controlsenabled", u), c.n("controlsdisabled", d)
                }, a.b("dispose", n), c.b("usingcustomcontrols", n), c.usingNativeControls(f)
            }
            e.I(function() {
                this.src() && this.L && this.q.autoplay && this.paused() && (delete this.L.poster, this.play())
            }), this.Xa()
        }
    }), s = t.e.prototype, s.dispose = function() {
        t.e.Nb(this.c), t.j.prototype.dispose.call(this)
    }, s.f = function() {
        var e, n, i, o = this.d,
            r = o.L;
        if (!r || this.movingMediaElementInDOM === l) {
            if (r ? (i = r.cloneNode(l), t.e.Nb(r), r = i, o.L = j) : (r = t.f("video"), i = videojs.$.Ba({}, o.Ye), (!t.Gb || o.options().nativeControlsForTouch !== f) && delete i.controls, t.ed(r, t.i.D(i, {
                id: o.id() + "_html5_api",
                "class": "vjs-tech"
            }))), r.player = o, o.q.rd)
                for (i = 0; i < o.q.rd.length; i++) e = o.q.rd[i], n = document.createElement("track"), n.Xb = e.Xb, n.label = e.label, n.jd = e.jd, n.src = e.src, "default" in e && n.setAttribute("default", "default"), r.appendChild(n);
            t.Vb(r, o.m())
        }
        for (e = ["autoplay", "preload", "loop", "muted"], i = e.length - 1; i >= 0; i--) {
            n = e[i];
            var s = {};
            "undefined" != typeof o.q[n] && (s[n] = o.q[n]), t.ed(r, s)
        }
        return r
    }, s.fe = function() {
        for (var t, e = this.c.querySelectorAll("track"), n = e.length, i = {
            captions: 1,
            subtitles: 1
        }; n--;)(t = e[n].T) && t.kind in i && !e[n]["default"] && (t.mode = "disabled")
    }, s.Xd = function(t) {
        "error" == t.type && this.error() ? this.k().error(this.error().code) : (t.bubbles = l, this.k().o(t))
    }, s.play = function() {
        this.c.play()
    }, s.pause = function() {
        this.c.pause()
    }, s.paused = function() {
        return this.c.paused
    }, s.currentTime = function() {
        return this.c.currentTime
    }, s.cc = function(e) {
        try {
            this.c.currentTime = e
        } catch (n) {
            t.log(n, "Video is not ready. (Video.js)")
        }
    }, s.duration = function() {
        return this.c.duration || 0
    }, s.buffered = function() {
        return this.c.buffered
    }, s.volume = function() {
        return this.c.volume
    }, s.Te = function(t) {
        this.c.volume = t
    }, s.muted = function() {
        return this.c.muted
    }, s.Pe = function(t) {
        this.c.muted = t
    }, s.width = function() {
        return this.c.offsetWidth
    }, s.height = function() {
        return this.c.offsetHeight
    }, s.Ua = function() {
        return "function" != typeof this.c.webkitEnterFullScreen || !/Android/.test(t.P) && /Chrome|Mac OS X 10.5/.test(t.P) ? l : f
    }, s.Ic = function() {
        var t = this.c;
        "webkitDisplayingFullscreen" in t && this.N("webkitbeginfullscreen", function() {
            this.d.isFullscreen(f), this.N("webkitendfullscreen", function() {
                this.d.isFullscreen(l), this.d.o("fullscreenchange")
            }), this.d.o("fullscreenchange")
        }), t.paused && t.networkState <= t.kf ? (this.c.play(), this.setTimeout(function() {
            t.pause(), t.webkitEnterFullScreen()
        }, 0)) : t.webkitEnterFullScreen()
    }, s.Yd = function() {
        this.c.webkitExitFullScreen()
    }, s.src = function(t) {
        var e = this.c.src;
        return t === b ? oa(e, this.hd) : void this.oa(t)
    }, s.oa = function(t) {
        this.c.src = t
    }, s.load = function() {
        this.c.load()
    }, s.currentSrc = function() {
        var t = this.c.currentSrc;
        return this.ib ? oa(t, this.ib.src) : t
    }, s.poster = function() {
        return this.c.poster
    }, s.fd = function(t) {
        this.c.poster = t
    }, s.Sa = function() {
        return this.c.Sa
    }, s.Re = function(t) {
        this.c.Sa = t
    }, s.autoplay = function() {
        return this.c.autoplay
    }, s.Me = function(t) {
        this.c.autoplay = t
    }, s.controls = function() {
        return this.c.controls
    }, s.loop = function() {
        return this.c.loop
    }, s.Oe = function(t) {
        this.c.loop = t
    }, s.error = function() {
        return this.c.error
    }, s.seeking = function() {
        return this.c.seeking
    }, s.seekable = function() {
        return this.c.seekable
    }, s.ended = function() {
        return this.c.ended
    }, s.playbackRate = function() {
        return this.c.playbackRate
    }, s.Qe = function(t) {
        this.c.playbackRate = t
    }, s.networkState = function() {
        return this.c.networkState
    }, s.readyState = function() {
        return this.c.readyState
    }, s.textTracks = function() {
        return this.featuresNativeTextTracks ? this.c.textTracks : t.j.prototype.textTracks.call(this)
    }, s.addTextTrack = function(e, n, i) {
        return this.featuresNativeTextTracks ? this.c.addTextTrack(e, n, i) : t.j.prototype.addTextTrack.call(this, e, n, i)
    }, s.ia = function(e) {
        if (!this.featuresNativeTextTracks) return t.j.prototype.ia.call(this, e);
        var n = document.createElement("track");
        return e = e || {}, e.kind && (n.kind = e.kind), e.label && (n.label = e.label), (e.language || e.srclang) && (n.srclang = e.language || e.srclang), e["default"] && (n["default"] = e["default"]), e.id && (n.id = e.id), e.src && (n.src = e.src), this.m().appendChild(n), n.track.mode = "metadata" === n.T.kind ? "hidden" : "disabled", n.onload = function() {
            var t = n.track;
            2 <= n.readyState && ("metadata" === t.kind && "hidden" !== t.mode ? t.mode = "hidden" : "metadata" !== t.kind && "disabled" !== t.mode && (t.mode = "disabled"), n.onload = j)
        }, P(this.Z(), n.T), n
    }, s.Ea = function(e) {
        if (!this.featuresNativeTextTracks) return t.j.prototype.Ea.call(this, e);
        var n, i;
        for (Q(this.Z(), e), n = this.m().querySelectorAll("track"), i = 0; i < n.length; i++)
            if (n[i] === e || n[i].track === e) {
                n[i].parentNode.removeChild(n[i]);
                break
            }
    }, t.e.isSupported = function() {
        try {
            t.A.volume = .5
        } catch (e) {
            return l
        }
        return !!t.A.canPlayType
    }, t.j.hc(t.e);
    var pa = t.e.prototype.na,
        qa = t.e.prototype.ja;
    t.e.prototype.na = function(t) {
        var e = pa.call(this, t);
        return this.hd = t.src, e
    }, t.e.prototype.ja = function() {
        return this.hd = b, qa.call(this)
    }, t.e.S = {}, t.e.S.fb = function(e) {
        function n(e) {
            try {
                return t.A.canPlayType(e)
            } catch (n) {
                return ""
            }
        }
        return e.type ? n(e.type) : e.src ? (e = (e = e.src.match(/\.([^.\/\?]+)(\?[^\/]+)?$/i)) && e[1], n("video/" + e)) : ""
    }, t.e.S.Ub = function(t, e) {
        e.oa(t.src)
    }, t.e.S.dispose = m(), t.e.Ta(t.e.S), t.e.Pd = function() {
        var e = t.A.volume;
        return t.A.volume = e / 2 + .1, e !== t.A.volume
    }, t.e.Od = function() {
        var e = t.A.playbackRate;
        return t.A.playbackRate = e / 2 + .1, e !== t.A.playbackRate
    }, t.e.We = function() {
        var e;
        return (e = !!t.A.textTracks) && 0 < t.A.textTracks.length && (e = "number" != typeof t.A.textTracks[0].mode), e && t.kc && (e = l), e
    }, t.e.prototype.featuresVolumeControl = t.e.Pd(), t.e.prototype.featuresPlaybackRate = t.e.Od(), t.e.prototype.movingMediaElementInDOM = !t.Bd, t.e.prototype.featuresFullscreenResize = f, t.e.prototype.featuresProgressEvents = f, t.e.prototype.featuresNativeTextTracks = t.e.We();
    var S, ra = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
        sa = /^video\/mp4/i;
    t.e.Xc = function() {
        4 <= t.ic && (S || (S = t.A.constructor.prototype.canPlayType), t.A.constructor.prototype.canPlayType = function(t) {
            return t && ra.test(t) ? "maybe" : S.call(this, t)
        }), t.Fd && (S || (S = t.A.constructor.prototype.canPlayType), t.A.constructor.prototype.canPlayType = function(t) {
            return t && sa.test(t) ? "maybe" : S.call(this, t)
        })
    }, t.e.cf = function() {
        var e = t.A.constructor.prototype.canPlayType;
        return t.A.constructor.prototype.canPlayType = S, S = j, e
    }, t.e.Xc(), t.e.Ab = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" "), t.e.Nb = function(t) {
        if (t) {
            for (t.player = j, t.parentNode && t.parentNode.removeChild(t); t.hasChildNodes();) t.removeChild(t.firstChild);
            if (t.removeAttribute("src"), "function" == typeof t.load) try {
                t.load()
            } catch (e) {}
        }
    }, t.g = t.j.extend({
        l: function(e, n, i) {
            t.j.call(this, e, n, i);
            var o = n.source;
            i = e.id() + "_flash_api";
            var r = e.q,
                r = t.i.D({
                    readyFunction: "videojs.Flash.onReady",
                    eventProxyFunction: "videojs.Flash.onEvent",
                    errorEventProxyFunction: "videojs.Flash.onError",
                    autoplay: r.autoplay,
                    preload: r.Sa,
                    loop: r.loop,
                    muted: r.muted
                }, n.flashVars),
                s = t.i.D({
                    wmode: "opaque",
                    bgcolor: "#000000"
                }, n.params);
            i = t.i.D({
                id: i,
                name: i,
                "class": "vjs-tech"
            }, n.attributes), o && this.I(function() {
                this.na(o)
            }), t.Vb(this.c, n.parentEl), n.startTime && this.I(function() {
                this.load(), this.play(), this.currentTime(n.startTime)
            }), t.kc && this.I(function() {
                this.b("mousemove", function() {
                    this.k().o({
                        type: "mousemove",
                        bubbles: l
                    })
                })
            }), e.b("stageclick", e.reportUserActivity), this.c = t.g.Hc(n.swf, this.c, r, s, i)
        }
    }), s = t.g.prototype, s.dispose = function() {
        t.j.prototype.dispose.call(this)
    }, s.play = function() {
        this.c.vjs_play()
    }, s.pause = function() {
        this.c.vjs_pause()
    }, s.src = function(t) {
        return t === b ? this.currentSrc() : this.oa(t)
    }, s.oa = function(e) {
        if (e = t.ae(e), this.c.vjs_src(e), this.d.autoplay()) {
            var n = this;
            this.setTimeout(function() {
                n.play()
            }, 0)
        }
    }, t.g.prototype.setCurrentTime = function(e) {
        this.pe = e, this.c.vjs_setProperty("currentTime", e), t.j.prototype.cc.call(this)
    }, t.g.prototype.currentTime = function() {
        return this.seeking() ? this.pe || 0 : this.c.vjs_getProperty("currentTime")
    }, t.g.prototype.currentSrc = function() {
        return this.ib ? this.ib.src : this.c.vjs_getProperty("currentSrc")
    }, t.g.prototype.load = function() {
        this.c.vjs_load()
    }, t.g.prototype.poster = function() {
        this.c.vjs_getProperty("poster")
    }, t.g.prototype.setPoster = m(), s = t.g.prototype, s.seekable = function() {
        return 0 === this.duration() ? t.ya() : t.ya(0, this.duration())
    }, s.buffered = function() {
        return this.c.vjs_getProperty ? t.ya(0, this.c.vjs_getProperty("buffered")) : t.ya()
    }, s.duration = function() {
        return this.c.vjs_getProperty ? this.c.vjs_getProperty("duration") : 0
    }, s.Ua = p(l), s.Ic = p(l);
    var ua = t.g.prototype,
        T = "rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),
        wa = "error networkState readyState seeking initialTime startOffsetTime paused played ended videoTracks audioTracks videoWidth videoHeight".split(" "),
        U;
    for (U = 0; U < T.length; U++) va(T[U]), ta();
    for (U = 0; U < wa.length; U++) va(wa[U]);
    t.g.isSupported = function() {
        return 10 <= t.g.version()[0]
    }, t.j.hc(t.g), t.g.S = {}, t.g.S.fb = function(e) {
        return e.type && e.type.replace(/;.*/, "").toLowerCase() in t.g.$d ? "maybe" : ""
    }, t.g.S.Ub = function(t, e) {
        e.oa(t.src)
    }, t.g.S.dispose = m(), t.g.Ta(t.g.S), t.g.$d = {
        "video/flv": "FLV",
        "video/x-flv": "FLV",
        "video/mp4": "MP4",
        "video/m4v": "MP4"
    }, t.g.onReady = function(e) {
        var n;
        (n = (e = t.m(e)) && e.parentNode && e.parentNode.player) && (e.player = n, t.g.checkReady(n.h))
    }, t.g.checkReady = function(e) {
        e.m() && (e.m().vjs_getProperty ? e.Xa() : this.setTimeout(function() {
            t.g.checkReady(e)
        }, 50))
    }, t.g.onEvent = function(e, n) {
        t.m(e).player.o(n)
    }, t.g.onError = function(e, n) {
        var i = t.m(e).player,
            o = "FLASH: " + n;
        "srcnotfound" == n ? i.error({
            code: 4,
            message: o
        }) : i.error(o)
    }, t.g.version = function() {
        var t = "0,0,0";
        try {
            t = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
        } catch (e) {
            try {
                navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
            } catch (n) {}
        }
        return t.split(",")
    }, t.g.Hc = function(e, n, i, o, r) {
        e = t.g.de(e, i, o, r), e = t.f("div", {
            innerHTML: e
        }).childNodes[0], i = n.parentNode, n.parentNode.replaceChild(e, n), e[t.expando] = n[t.expando];
        var s = i.childNodes[0];
        return setTimeout(function() {
            s.style.display = "block"
        }, 1e3), e
    }, t.g.de = function(e, n, i, o) {
        var r = "",
            s = "",
            a = "";
        return n && t.i.da(n, function(t, e) {
            r += t + "=" + e + "&amp;"
        }), i = t.i.D({
            movie: e,
            flashvars: r,
            allowScriptAccess: "always",
            allowNetworking: "all"
        }, i), t.i.da(i, function(t, e) {
            s += '<param name="' + t + '" value="' + e + '" />'
        }), o = t.i.D({
            data: e,
            width: "100%",
            height: "100%"
        }, o), t.i.da(o, function(t, e) {
            a += t + '="' + e + '" '
        }), '<object type="application/x-shockwave-flash" ' + a + ">" + s + "</object>"
    }, t.g.Ve = {
        "rtmp/mp4": "MP4",
        "rtmp/flv": "FLV"
    }, t.g.If = function(t, e) {
        return t + "&" + e
    }, t.g.Ue = function(t) {
        var e = {
            Cc: "",
            nd: ""
        };
        if (!t) return e;
        var n, i = t.indexOf("&");
        return -1 !== i ? n = i + 1 : (i = n = t.lastIndexOf("/") + 1, 0 === i && (i = n = t.length)), e.Cc = t.substring(0, i), e.nd = t.substring(n, t.length), e
    }, t.g.ne = function(e) {
        return e in t.g.Ve
    }, t.g.Hd = /^rtmp[set]?:\/\//i, t.g.me = function(e) {
        return t.g.Hd.test(e)
    }, t.g.bc = {}, t.g.bc.fb = function(e) {
        return t.g.ne(e.type) || t.g.me(e.src) ? "maybe" : ""
    }, t.g.bc.Ub = function(e, n) {
        var i = t.g.Ue(e.src);
        n.setRtmpConnection(i.Cc), n.setRtmpStream(i.nd)
    }, t.g.Ta(t.g.bc), t.Gd = t.a.extend({
        l: function(e, n, i) {
            if (t.a.call(this, e, n, i), e.q.sources && 0 !== e.q.sources.length) e.src(e.q.sources);
            else
                for (n = 0, i = e.q.techOrder; n < i.length; n++) {
                    var o = t.wa(i[n]),
                        r = window.videojs[o];
                    if (r && r.isSupported()) {
                        ka(e, o);
                        break
                    }
                }
        }
    }), t.sc = {
        disabled: "disabled",
        hidden: "hidden",
        showing: "showing"
    }, t.Id = {
        subtitles: "subtitles",
        captions: "captions",
        descriptions: "descriptions",
        chapters: "chapters",
        metadata: "metadata"
    }, t.t = function(e) {
        var n, i, o, r, s, a, c, u, d, p, h;
        if (e = e || {}, !e.player) throw Error("A player was not provided.");
        if (n = this, t.qa)
            for (h in n = document.createElement("custom"), t.t.prototype) n[h] = t.t.prototype[h];
        return n.d = e.player, o = t.sc[e.mode] || "disabled", r = t.Id[e.kind] || "subtitles", s = e.label || "", a = e.language || e.srclang || "", i = e.id || "vjs_text_track_" + t.s++, ("metadata" === r || "chapters" === r) && (o = "hidden"), n.X = [], n.Ja = [], c = new t.W(n.X), u = new t.W(n.Ja), p = l, d = t.bind(n, function() {
            this.activeCues, p && (this.trigger("cuechange"), p = l)
        }), "disabled" !== o && n.d.b("timeupdate", d), Object.defineProperty(n, "kind", {
            get: function() {
                return r
            },
            set: Function.prototype
        }), Object.defineProperty(n, "label", {
            get: function() {
                return s
            },
            set: Function.prototype
        }), Object.defineProperty(n, "language", {
            get: function() {
                return a
            },
            set: Function.prototype
        }), Object.defineProperty(n, "id", {
            get: function() {
                return i
            },
            set: Function.prototype
        }), Object.defineProperty(n, "mode", {
            get: function() {
                return o
            },
            set: function(e) {
                t.sc[e] && (o = e, "showing" === o && this.d.b("timeupdate", d), this.o("modechange"))
            }
        }), Object.defineProperty(n, "cues", {
            get: function() {
                return this.Yb ? c : j
            },
            set: Function.prototype
        }), Object.defineProperty(n, "activeCues", {
            get: function() {
                var t, e, n, i, o;
                if (!this.Yb) return j;
                if (0 === this.cues.length) return u;
                for (i = this.d.currentTime(), t = 0, e = this.cues.length, n = []; e > t; t++) o = this.cues[t], o.startTime <= i && o.endTime >= i ? n.push(o) : o.startTime === o.endTime && o.startTime <= i && o.startTime + .5 >= i && n.push(o);
                if (p = l, n.length !== this.Ja.length) p = f;
                else
                    for (t = 0; t < n.length; t++) - 1 === xa.call(this.Ja, n[t]) && (p = f);
                return this.Ja = n, u.sb(this.Ja), u
            },
            set: Function.prototype
        }), e.src ? ya(e.src, n) : n.Yb = f, t.qa ? n : void 0
    }, t.t.prototype = t.i.create(t.z.prototype), t.t.prototype.constructor = t.t, t.t.prototype.cb = {
        cuechange: "cuechange"
    }, t.t.prototype.wc = function(t) {
        var e = this.d.textTracks(),
            n = 0;
        if (e)
            for (; n < e.length; n++) e[n] !== this && e[n].bd(t);
        this.X.push(t), this.cues.sb(this.X)
    }, t.t.prototype.bd = function(t) {
        for (var e, n = 0, i = this.X.length, o = l; i > n; n++) e = this.X[n], e === t && (this.X.splice(n, 1), o = f);
        o && this.Ec.sb(this.X)
    };
    var ya, V, xa;
    ya = function(e, n) {
        t.gf(e, t.bind(this, function(e, i, o) {
            return e ? t.log.error(e) : (n.Yb = f, void V(o, n))
        }))
    }, V = function(e, n) {
        if ("function" != typeof window.WebVTT) window.setTimeout(function() {
            V(e, n)
        }, 25);
        else {
            var i = new window.WebVTT.Parser(window, window.vttjs, window.WebVTT.StringDecoder());
            i.oncue = function(t) {
                n.wc(t)
            }, i.onparsingerror = function(e) {
                t.log.error(e)
            }, i.parse(e), i.flush()
        }
    }, xa = function(t, e) {
        var n;
        if (this == j) throw new TypeError('"this" is null or not defined');
        var i = Object(this),
            o = i.length >>> 0;
        if (0 === o) return -1;
        if (n = +e || 0, 1 / 0 === Math.abs(n) && (n = 0), n >= o) return -1;
        for (n = Math.max(n >= 0 ? n : o - Math.abs(n), 0); o > n;) {
            if (n in i && i[n] === t) return n;
            n++
        }
        return -1
    }, t.F = function(e) {
        var n, i = this,
            o = 0;
        if (t.qa)
            for (n in i = document.createElement("custom"), t.F.prototype) i[n] = t.F.prototype[n];
        for (e = e || [], i.Wa = [], Object.defineProperty(i, "length", {
            get: function() {
                return this.Wa.length
            }
        }); o < e.length; o++) P(i, e[o]);
        return t.qa ? i : void 0
    }, t.F.prototype = t.i.create(t.z.prototype), t.F.prototype.constructor = t.F, t.F.prototype.cb = {
        change: "change",
        addtrack: "addtrack",
        removetrack: "removetrack"
    };
    for (var za in t.F.prototype.cb) t.F.prototype["on" + za] = j;
    t.F.prototype.ee = function(t) {
        for (var e, n = 0, i = this.length, o = j; i > n; n++)
            if (e = this[n], e.id === t) {
                o = e;
                break
            }
        return o
    }, t.W = function(e) {
        var i, o = this;
        if (t.qa)
            for (i in o = document.createElement("custom"), t.W.prototype) o[i] = t.W.prototype[i];
        return t.W.prototype.sb.call(o, e), Object.defineProperty(o, "length", {
            get: n("qe")
        }), t.qa ? o : void 0
    }, t.W.prototype.sb = function(t) {
        var e = this.length || 0,
            n = 0,
            i = t.length;
        if (this.X = t, this.qe = t.length, t = function(t) {
            "" + t in this || Object.defineProperty(this, "" + t, {
                get: function() {
                    return this.X[t]
                }
            })
        }, i > e)
            for (n = e; i > n; n++) t.call(this, n)
    }, t.W.prototype.ce = function(t) {
        for (var e, n = 0, i = this.length, o = j; i > n; n++)
            if (e = this[n], e.id === t) {
                o = e;
                break
            }
        return o
    }, t.ta = t.a.extend({
        l: function(e, n, i) {
            t.a.call(this, e, n, i), e.b("loadstart", t.bind(this, this.$e)), e.I(t.bind(this, function() {
                if (e.h && e.h.featuresNativeTextTracks) this.Y();
                else {
                    var n, i, o;
                    for (e.b("fullscreenchange", t.bind(this, this.C)), i = e.q.tracks || [], n = 0; n < i.length; n++) o = i[n], this.d.ia(o)
                }
            }))
        }
    }), t.ta.prototype.$e = function() {
        this.d.h && this.d.h.featuresNativeTextTracks ? this.Y() : this.show()
    }, t.ta.prototype.f = function() {
        return t.a.prototype.f.call(this, "div", {
            className: "vjs-text-track-display"
        })
    }, t.ta.prototype.Qd = function() {
        "function" == typeof window.WebVTT && window.WebVTT.processCues(window, [], this.c)
    };
    var Aa = {
        yf: "monospace",
        Ef: "sans-serif",
        Gf: "serif",
        zf: '"Andale Mono", "Lucida Console", monospace',
        Af: '"Courier New", monospace',
        Cf: "sans-serif",
        Df: "serif",
        pf: '"Comic Sans MS", Impact, fantasy',
        Ff: '"Monotype Corsiva", cursive',
        Hf: '"Andale Mono", "Lucida Console", monospace, sans-serif'
    };
    if (t.ta.prototype.C = function() {
        var t, e = this.d.textTracks(),
            n = 0;
        if (this.Qd(), e)
            for (; n < e.length; n++) t = e[n], "showing" === t.mode && this.df(t)
    }, t.ta.prototype.df = function(t) {
        if ("function" == typeof window.WebVTT && t.activeCues) {
            for (var e, n = 0, i = this.d.textTrackSettings.Lc(), o = []; n < t.activeCues.length; n++) o.push(t.activeCues[n]);
            for (window.WebVTT.processCues(window, t.activeCues, this.c), n = o.length; n--;) {
                if (t = o[n].qf, i.color && (t.firstChild.style.color = i.color), i.od) try {
                    t.firstChild.style.color = W(i.color || "#fff", i.od)
                } catch (r) {}
                if (i.backgroundColor && (t.firstChild.style.backgroundColor = i.backgroundColor), i.zc) try {
                    t.firstChild.style.backgroundColor = W(i.backgroundColor || "#000", i.zc)
                } catch (s) {}
                if (i.gc)
                    if (i.vd) try {
                        t.style.backgroundColor = W(i.gc, i.vd)
                    } catch (a) {} else t.style.backgroundColor = i.gc;
                i.Na && ("dropshadow" === i.Na ? t.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === i.Na ? t.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === i.Na ? t.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === i.Na && (t.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")), i.Rb && 1 !== i.Rb && (e = window.Bf(t.style.fontSize), t.style.fontSize = e * i.Rb + "px", t.style.height = "auto", t.style.top = "auto", t.style.bottom = "2px"), i.fontFamily && "default" !== i.fontFamily && ("small-caps" === i.fontFamily ? t.firstChild.style.fontVariant = "small-caps" : t.firstChild.style.fontFamily = Aa[i.fontFamily])
            }
        }
    }, t.aa = t.M.extend({
        l: function(e, n) {
            var i, o, r = this.T = n.track,
                s = e.textTracks();
            s && (i = t.bind(this, function() {
                var e, n, i, o = "showing" === this.T.mode;
                if (this instanceof t.Cb)
                    for (o = f, n = 0, i = s.length; i > n; n++)
                        if (e = s[n], e.kind === this.T.kind && "showing" === e.mode) {
                            o = l;
                            break
                        }
                this.selected(o)
            }), s.addEventListener("change", i), e.b("dispose", function() {
                s.removeEventListener("change", i)
            })), n.label = r.label || r.language || "Unknown", n.selected = r["default"] || "showing" === r.mode, t.M.call(this, e, n), s && s.onchange === b && this.b(["tap", "click"], function() {
                if ("object" != typeof window.zd) try {
                    o = new window.zd("change")
                } catch (t) {}
                o || (o = document.createEvent("Event"), o.initEvent("change", f, f)), s.dispatchEvent(o)
            })
        }
    }), t.aa.prototype.u = function() {
        var e, n = this.T.kind,
            i = this.d.textTracks(),
            o = 0;
        if (t.M.prototype.u.call(this), i)
            for (; o < i.length; o++) e = i[o], e.kind === n && (e.mode = e === this.T ? "showing" : "disabled")
    }, t.Cb = t.aa.extend({
        l: function(e, n) {
            n.track = {
                kind: n.kind,
                player: e,
                label: n.kind + " off",
                "default": l,
                mode: "disabled"
            }, t.aa.call(this, e, n), this.selected(f)
        }
    }), t.vb = t.aa.extend({
        l: function(e, n) {
            n.track = {
                kind: n.kind,
                player: e,
                label: n.kind + " settings",
                "default": l,
                mode: "disabled"
            }, t.aa.call(this, e, n), this.p("vjs-texttrack-settings")
        }
    }), t.vb.prototype.u = function() {
        this.k().ea("textTrackSettings").show()
    }, t.Q = t.O.extend({
        l: function(e, n) {
            var i, o;
            t.O.call(this, e, n), i = this.d.textTracks(), 1 >= this.H.length && this.Y(), i && (o = t.bind(this, this.update), i.addEventListener("removetrack", o), i.addEventListener("addtrack", o), this.d.b("dispose", function() {
                i.removeEventListener("removetrack", o), i.removeEventListener("addtrack", o)
            }))
        }
    }), t.Q.prototype.La = function() {
        var e, n, i = [];
        if (this instanceof t.pa && (!this.k().h || !this.k().h.featuresNativeTextTracks) && i.push(new t.vb(this.d, {
            kind: this.fa
        })), i.push(new t.Cb(this.d, {
            kind: this.fa
        })), n = this.d.textTracks(), !n) return i;
        for (var o = 0; o < n.length; o++) e = n[o], e.kind === this.fa && i.push(new t.aa(this.d, {
            track: e
        }));
        return i
    }, t.pa = t.Q.extend({
        l: function(e, n, i) {
            t.Q.call(this, e, n, i), this.c.setAttribute("aria-label", "Captions Menu")
        }
    }), t.pa.prototype.fa = "captions", t.pa.prototype.ua = "Captions", t.pa.prototype.className = "vjs-captions-button", t.pa.prototype.update = function() {
        var e = 2;
        t.Q.prototype.update.call(this), this.k().h && this.k().h.featuresNativeTextTracks && (e = 1), this.H && this.H.length > e ? this.show() : this.Y()
    }, t.bb = t.Q.extend({
        l: function(e, n, i) {
            t.Q.call(this, e, n, i), this.c.setAttribute("aria-label", "Subtitles Menu")
        }
    }), t.bb.prototype.fa = "subtitles", t.bb.prototype.ua = "Subtitles", t.bb.prototype.className = "vjs-subtitles-button", t.Ya = t.Q.extend({
        l: function(e, n, i) {
            t.Q.call(this, e, n, i), this.c.setAttribute("aria-label", "Chapters Menu")
        }
    }), s = t.Ya.prototype, s.fa = "chapters", s.ua = "Chapters", s.className = "vjs-chapters-button", s.La = function() {
        var e, n, i = [];
        if (n = this.d.textTracks(), !n) return i;
        for (var o = 0; o < n.length; o++) e = n[o], e.kind === this.fa && i.push(new t.aa(this.d, {
            track: e
        }));
        return i
    }, s.Ma = function() {
        for (var e, n, i = this.d.textTracks() || [], o = 0, r = i.length, s = this.H = []; r > o; o++)
            if (e = i[o], e.kind == this.fa) {
                if (e.Ec) {
                    n = e;
                    break
                }
                e.mode = "hidden", window.setTimeout(t.bind(this, function() {
                    this.Ma()
                }), 100)
            }
        if (i = this.Aa, i === b && (i = new t.ra(this.d), i.xa().appendChild(t.f("li", {
            className: "vjs-menu-title",
            innerHTML: t.wa(this.fa),
            Xe: -1
        }))), n) {
            e = n.cues;
            for (var a, o = 0, r = e.length; r > o; o++) a = e[o], a = new t.Za(this.d, {
                track: n,
                cue: a
            }), s.push(a), i.ba(a);
            this.ba(i)
        }
        return 0 < this.H.length && this.show(), i
    }, t.Za = t.M.extend({
        l: function(e, n) {
            var i = this.T = n.track,
                o = this.cue = n.cue,
                r = e.currentTime();
            n.label = o.text, n.selected = o.startTime <= r && r < o.endTime, t.M.call(this, e, n), i.addEventListener("cuechange", t.bind(this, this.update))
        }
    }), t.Za.prototype.u = function() {
        t.M.prototype.u.call(this), this.d.currentTime(this.cue.startTime), this.update(this.cue.startTime)
    }, t.Za.prototype.update = function() {
        var t = this.cue,
            e = this.d.currentTime();
        this.selected(t.startTime <= e && e < t.endTime)
    }, t.tc = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n), this.Y(), t.b(this.m().querySelector(".vjs-done-button"), "click", t.bind(this, function() {
                this.Ke(), this.Y()
            })), t.b(this.m().querySelector(".vjs-default-button"), "click", t.bind(this, function() {
                this.m().querySelector(".vjs-fg-color > select").selectedIndex = 0, this.m().querySelector(".vjs-bg-color > select").selectedIndex = 0, this.m().querySelector(".window-color > select").selectedIndex = 0, this.m().querySelector(".vjs-text-opacity > select").selectedIndex = 0, this.m().querySelector(".vjs-bg-opacity > select").selectedIndex = 0, this.m().querySelector(".vjs-window-opacity > select").selectedIndex = 0, this.m().querySelector(".vjs-edge-style select").selectedIndex = 0, this.m().querySelector(".vjs-font-family select").selectedIndex = 0, this.m().querySelector(".vjs-font-percent select").selectedIndex = 2, this.C()
            })), t.b(this.m().querySelector(".vjs-fg-color > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-bg-color > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".window-color > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-text-opacity > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-bg-opacity > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-window-opacity > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-font-percent select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-edge-style select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-font-family select"), "change", t.bind(this, this.C)), e.options().persistTextTrackSettings && this.Je()
        }
    }), s = t.tc.prototype, s.f = function() {
        return t.a.prototype.f.call(this, "div", {
            className: "vjs-caption-settings vjs-modal-overlay",
            innerHTML: '<div class="vjs-tracksettings"><div class="vjs-tracksettings-colors"><div class="vjs-fg-color vjs-tracksetting"><label class="vjs-label">Foreground</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-text-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Opaque</option></select></span></div><div class="vjs-bg-color vjs-tracksetting"><label class="vjs-label">Background</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-bg-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div><div class="window-color vjs-tracksetting"><label class="vjs-label">Window</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-window-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div></div><div class="vjs-tracksettings-font"><div class="vjs-font-percent vjs-tracksetting"><label class="vjs-label">Font Size</label><select><option value="0.50">50%</option><option value="0.75">75%</option><option value="1.00" selected>100%</option><option value="1.25">125%</option><option value="1.50">150%</option><option value="1.75">175%</option><option value="2.00">200%</option><option value="3.00">300%</option><option value="4.00">400%</option></select></div><div class="vjs-edge-style vjs-tracksetting"><label class="vjs-label">Text Edge Style</label><select><option value="none">None</option><option value="raised">Raised</option><option value="depressed">Depressed</option><option value="uniform">Uniform</option><option value="dropshadow">Dropshadow</option></select></div><div class="vjs-font-family vjs-tracksetting"><label class="vjs-label">Font Family</label><select><option value="">Default</option><option value="monospaceSerif">Monospace Serif</option><option value="proportionalSerif">Proportional Serif</option><option value="monospaceSansSerif">Monospace Sans-Serif</option><option value="proportionalSansSerif">Proportional Sans-Serif</option><option value="casual">Casual</option><option value="script">Script</option><option value="small-caps">Small Caps</option></select></div></div></div><div class="vjs-tracksettings-controls"><button class="vjs-default-button">Defaults</button><button class="vjs-done-button">Done</button></div>'
        })
    }, s.Lc = function() {
        var t, e, n, i, o, r, s, a, l, c;
        t = this.m(), o = X(t.querySelector(".vjs-edge-style select")), r = X(t.querySelector(".vjs-font-family select")), s = X(t.querySelector(".vjs-fg-color > select")), n = X(t.querySelector(".vjs-text-opacity > select")), a = X(t.querySelector(".vjs-bg-color > select")), e = X(t.querySelector(".vjs-bg-opacity > select")), l = X(t.querySelector(".window-color > select")), i = X(t.querySelector(".vjs-window-opacity > select")), t = window.parseFloat(X(t.querySelector(".vjs-font-percent > select"))), e = {
            backgroundOpacity: e,
            textOpacity: n,
            windowOpacity: i,
            edgeStyle: o,
            fontFamily: r,
            color: s,
            backgroundColor: a,
            windowColor: l,
            fontPercent: t
        };
        for (c in e)("" === e[c] || "none" === e[c] || "fontPercent" === c && 1 === e[c]) && delete e[c];
        return e
    }, s.Se = function(t) {
        var e = this.m();
        Y(e.querySelector(".vjs-edge-style select"), t.Na), Y(e.querySelector(".vjs-font-family select"), t.fontFamily), Y(e.querySelector(".vjs-fg-color > select"), t.color), Y(e.querySelector(".vjs-text-opacity > select"), t.od), Y(e.querySelector(".vjs-bg-color > select"), t.backgroundColor), Y(e.querySelector(".vjs-bg-opacity > select"), t.zc), Y(e.querySelector(".window-color > select"), t.gc), Y(e.querySelector(".vjs-window-opacity > select"), t.vd), (t = t.Rb) && (t = t.toFixed(2)), Y(e.querySelector(".vjs-font-percent > select"), t)
    }, s.Je = function() {
        var t;
        try {
            t = JSON.parse(window.localStorage.getItem("vjs-text-track-settings"))
        } catch (e) {}
        t && this.Se(t)
    }, s.Ke = function() {
        var e;
        if (this.d.options().persistTextTrackSettings) {
            e = this.Lc();
            try {
                t.kb(e) ? window.localStorage.removeItem("vjs-text-track-settings") : window.localStorage.setItem("vjs-text-track-settings", JSON.stringify(e))
            } catch (n) {}
        }
    }, s.C = function() {
        var t = this.d.ea("textTrackDisplay");
        t && t.C()
    }, "undefined" != typeof window.JSON && "function" == typeof window.JSON.parse) t.JSON = window.JSON;
    else {
        t.JSON = {};
        var Z = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        t.JSON.parse = function(a, c) {
            function d(t, e) {
                var n, i, o = t[e];
                if (o && "object" == typeof o)
                    for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (i = d(o, n), i !== b ? o[n] = i : delete o[n]);
                return c.call(t, e, o)
            }
            var e;
            if (a = String(a), Z.lastIndex = 0, Z.test(a) && (a = a.replace(Z, function(t) {
                return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            })), /^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"), "function" == typeof c ? d({
                "": e
            }, "") : e;
            throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
        }
    }
    t.yc = function() {
        var e, n, i, o;
        e = document.getElementsByTagName("video"), n = document.getElementsByTagName("audio");
        var r = [];
        if (e && 0 < e.length)
            for (i = 0, o = e.length; o > i; i++) r.push(e[i]);
        if (n && 0 < n.length)
            for (i = 0, o = n.length; o > i; i++) r.push(n[i]);
        if (r && 0 < r.length)
            for (i = 0, o = r.length; o > i; i++) {
                if (!(n = r[i]) || !n.getAttribute) {
                    t.Kb();
                    break
                }
                n.player === b && (e = n.getAttribute("data-setup"), e !== j && videojs(n))
            } else t.ud || t.Kb()
    }, t.Kb = function() {
        setTimeout(t.yc, 1)
    }, "complete" === document.readyState ? t.ud = f : t.N(window, "load", function() {
        t.ud = f
    }), t.Kb(), t.Ge = function(e, n) {
        t.Player.prototype[e] = n
    };
    var Ba = this;
    $("videojs", t), $("_V_", t), $("videojs.options", t.options), $("videojs.players", t.Da), $("videojs.TOUCH_ENABLED", t.Gb), $("videojs.cache", t.va), $("videojs.Component", t.a), t.a.prototype.player = t.a.prototype.k, t.a.prototype.options = t.a.prototype.options, t.a.prototype.init = t.a.prototype.l, t.a.prototype.dispose = t.a.prototype.dispose, t.a.prototype.createEl = t.a.prototype.f, t.a.prototype.contentEl = t.a.prototype.xa, t.a.prototype.el = t.a.prototype.m, t.a.prototype.addChild = t.a.prototype.ba, t.a.prototype.getChild = t.a.prototype.ea, t.a.prototype.getChildById = t.a.prototype.be, t.a.prototype.children = t.a.prototype.children, t.a.prototype.initChildren = t.a.prototype.Oc, t.a.prototype.removeChild = t.a.prototype.removeChild, t.a.prototype.on = t.a.prototype.b, t.a.prototype.off = t.a.prototype.n, t.a.prototype.one = t.a.prototype.N, t.a.prototype.trigger = t.a.prototype.o, t.a.prototype.triggerReady = t.a.prototype.Xa, t.a.prototype.show = t.a.prototype.show, t.a.prototype.hide = t.a.prototype.Y, t.a.prototype.width = t.a.prototype.width, t.a.prototype.height = t.a.prototype.height, t.a.prototype.dimensions = t.a.prototype.Ud, t.a.prototype.ready = t.a.prototype.I, t.a.prototype.addClass = t.a.prototype.p, t.a.prototype.removeClass = t.a.prototype.r, t.a.prototype.hasClass = t.a.prototype.Qa, t.a.prototype.buildCSSClass = t.a.prototype.V, t.a.prototype.localize = t.a.prototype.v, t.a.prototype.setInterval = t.a.prototype.setInterval, t.a.prototype.setTimeout = t.a.prototype.setTimeout, $("videojs.EventEmitter", t.z), t.z.prototype.on = t.z.prototype.b, t.z.prototype.addEventListener = t.z.prototype.addEventListener, t.z.prototype.off = t.z.prototype.n, t.z.prototype.removeEventListener = t.z.prototype.removeEventListener, t.z.prototype.one = t.z.prototype.N, t.z.prototype.trigger = t.z.prototype.o, t.z.prototype.dispatchEvent = t.z.prototype.dispatchEvent, t.Player.prototype.ended = t.Player.prototype.ended, t.Player.prototype.enterFullWindow = t.Player.prototype.Jc, t.Player.prototype.exitFullWindow = t.Player.prototype.Ob, t.Player.prototype.preload = t.Player.prototype.Sa, t.Player.prototype.remainingTime = t.Player.prototype.remainingTime, t.Player.prototype.supportsFullScreen = t.Player.prototype.Ua, t.Player.prototype.currentType = t.Player.prototype.Rd, t.Player.prototype.requestFullScreen = t.Player.prototype.requestFullScreen, t.Player.prototype.requestFullscreen = t.Player.prototype.requestFullscreen, t.Player.prototype.cancelFullScreen = t.Player.prototype.cancelFullScreen, t.Player.prototype.exitFullscreen = t.Player.prototype.exitFullscreen, t.Player.prototype.isFullScreen = t.Player.prototype.isFullScreen, t.Player.prototype.isFullscreen = t.Player.prototype.isFullscreen, t.Player.prototype.textTracks = t.Player.prototype.textTracks, t.Player.prototype.remoteTextTracks = t.Player.prototype.Z, t.Player.prototype.addTextTrack = t.Player.prototype.addTextTrack, t.Player.prototype.addRemoteTextTrack = t.Player.prototype.ia, t.Player.prototype.removeRemoteTextTrack = t.Player.prototype.Ea, t.Player.prototype.seekable = t.Player.prototype.seekable, $("videojs.MediaLoader", t.Gd), $("videojs.TextTrackDisplay", t.ta), $("videojs.ControlBar", t.wb), $("videojs.Button", t.w), $("videojs.PlayToggle", t.oc), $("videojs.FullscreenToggle", t.$a), $("videojs.BigPlayButton", t.ub), $("videojs.LoadingSpinner", t.mc), $("videojs.CurrentTimeDisplay", t.xb), $("videojs.DurationDisplay", t.yb), $("videojs.TimeDivider", t.uc), $("videojs.RemainingTimeDisplay", t.Fb), $("videojs.LiveDisplay", t.lc), $("videojs.ErrorDisplay", t.zb), $("videojs.Slider", t.U), $("videojs.ProgressControl", t.Eb), $("videojs.SeekBar", t.rc), $("videojs.LoadProgressBar", t.Bb), $("videojs.PlayProgressBar", t.nc), $("videojs.SeekHandle", t.ab), $("videojs.VolumeControl", t.Ib), $("videojs.VolumeBar", t.Hb), $("videojs.VolumeLevel", t.vc), $("videojs.VolumeMenuButton", t.Ia), $("videojs.VolumeHandle", t.Jb), $("videojs.MuteToggle", t.sa), $("videojs.PosterImage", t.qc), $("videojs.Menu", t.ra), $("videojs.MenuItem", t.M), $("videojs.MenuButton", t.O), $("videojs.PlaybackRateMenuButton", t.pc), $("videojs.ChaptersTrackMenuItem", t.Za), $("videojs.TextTrackButton", t.Q), $("videojs.TextTrackMenuItem", t.aa), $("videojs.OffTextTrackMenuItem", t.Cb), $("videojs.CaptionSettingsMenuItem", t.vb), t.O.prototype.createItems = t.O.prototype.La, t.Q.prototype.createItems = t.Q.prototype.La, t.Ya.prototype.createItems = t.Ya.prototype.La, $("videojs.SubtitlesButton", t.bb), $("videojs.CaptionsButton", t.pa), $("videojs.ChaptersButton", t.Ya), $("videojs.MediaTechController", t.j), t.j.withSourceHandlers = t.j.hc, t.j.prototype.featuresVolumeControl = t.j.prototype.vf, t.j.prototype.featuresFullscreenResize = t.j.prototype.rf, t.j.prototype.featuresPlaybackRate = t.j.prototype.sf, t.j.prototype.featuresProgressEvents = t.j.prototype.tf, t.j.prototype.featuresTimeupdateEvents = t.j.prototype.uf, t.j.prototype.setPoster = t.j.prototype.fd, t.j.prototype.textTracks = t.j.prototype.textTracks, t.j.prototype.remoteTextTracks = t.j.prototype.Z, t.j.prototype.addTextTrack = t.j.prototype.addTextTrack, t.j.prototype.addRemoteTextTrack = t.j.prototype.ia, t.j.prototype.removeRemoteTextTrack = t.j.prototype.Ea, $("videojs.Html5", t.e), t.e.Events = t.e.Ab, t.e.isSupported = t.e.isSupported, t.e.canPlaySource = t.e.Ac, t.e.patchCanPlayType = t.e.Xc, t.e.unpatchCanPlayType = t.e.cf, t.e.prototype.setCurrentTime = t.e.prototype.cc, t.e.prototype.setVolume = t.e.prototype.Te, t.e.prototype.setMuted = t.e.prototype.Pe, t.e.prototype.setPreload = t.e.prototype.Re, t.e.prototype.setAutoplay = t.e.prototype.Me, t.e.prototype.setLoop = t.e.prototype.Oe, t.e.prototype.enterFullScreen = t.e.prototype.Ic, t.e.prototype.exitFullScreen = t.e.prototype.Yd, t.e.prototype.playbackRate = t.e.prototype.playbackRate, t.e.prototype.setPlaybackRate = t.e.prototype.Qe, t.e.registerSourceHandler = t.e.Ta, t.e.selectSourceHandler = t.e.rb, t.e.prototype.setSource = t.e.prototype.na, t.e.prototype.disposeSourceHandler = t.e.prototype.ja, t.e.prototype.textTracks = t.e.prototype.textTracks, t.e.prototype.remoteTextTracks = t.e.prototype.Z, t.e.prototype.addTextTrack = t.e.prototype.addTextTrack, t.e.prototype.addRemoteTextTrack = t.e.prototype.ia, t.e.prototype.removeRemoteTextTrack = t.e.prototype.Ea, $("videojs.Flash", t.g), t.g.isSupported = t.g.isSupported, t.g.canPlaySource = t.g.Ac, t.g.onReady = t.g.onReady, t.g.embed = t.g.Hc, t.g.version = t.g.version, t.g.prototype.setSource = t.g.prototype.na, t.g.registerSourceHandler = t.g.Ta, t.g.selectSourceHandler = t.g.rb, t.g.prototype.setSource = t.g.prototype.na, t.g.prototype.disposeSourceHandler = t.g.prototype.ja, $("videojs.TextTrack", t.t), $("videojs.TextTrackList", t.F), $("videojs.TextTrackCueList", t.W), $("videojs.TextTrackSettings", t.tc), t.t.prototype.id = t.t.prototype.id, t.t.prototype.label = t.t.prototype.label, t.t.prototype.kind = t.t.prototype.Xb, t.t.prototype.mode = t.t.prototype.mode, t.t.prototype.cues = t.t.prototype.Ec, t.t.prototype.activeCues = t.t.prototype.of, t.t.prototype.addCue = t.t.prototype.wc, t.t.prototype.removeCue = t.t.prototype.bd, t.F.prototype.getTrackById = t.F.prototype.ee, t.W.prototype.getCueById = t.F.prototype.ce, $("videojs.CaptionsTrack", t.hf), $("videojs.SubtitlesTrack", t.nf), $("videojs.ChaptersTrack", t.jf), $("videojs.autoSetup", t.yc), $("videojs.plugin", t.Ge), $("videojs.createTimeRange", t.ya), $("videojs.util", t.$), t.$.mergeOptions = t.$.Ba, t.addLanguage = t.Kd
}(), ! function(t) {
    var e = t.vttjs = {},
        n = e.VTTCue,
        i = e.VTTRegion,
        o = t.VTTCue,
        r = t.VTTRegion;
    e.shim = function() {
        e.VTTCue = n, e.VTTRegion = i
    }, e.restore = function() {
        e.VTTCue = o, e.VTTRegion = r
    }
}(this),
function(t, e) {
    function n(t) {
        if ("string" != typeof t) return !1;
        var e = a[t.toLowerCase()];
        return e ? t.toLowerCase() : !1
    }

    function i(t) {
        if ("string" != typeof t) return !1;
        var e = l[t.toLowerCase()];
        return e ? t.toLowerCase() : !1
    }

    function o(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) t[i] = n[i]
        }
        return t
    }

    function r(t, e, r) {
        var a = this,
            l = /MSIE\s8\.0/.test(navigator.userAgent),
            c = {};
        l ? a = document.createElement("custom") : c.enumerable = !0, a.hasBeenReset = !1;
        var u = "",
            d = !1,
            p = t,
            h = e,
            f = r,
            v = null,
            m = "",
            g = !0,
            y = "auto",
            b = "start",
            w = 50,
            T = "middle",
            k = 50,
            A = "middle";
        return Object.defineProperty(a, "id", o({}, c, {
            get: function() {
                return u
            },
            set: function(t) {
                u = "" + t
            }
        })), Object.defineProperty(a, "pauseOnExit", o({}, c, {
            get: function() {
                return d
            },
            set: function(t) {
                d = !!t
            }
        })), Object.defineProperty(a, "startTime", o({}, c, {
            get: function() {
                return p
            },
            set: function(t) {
                if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                p = t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(a, "endTime", o({}, c, {
            get: function() {
                return h
            },
            set: function(t) {
                if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                h = t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(a, "text", o({}, c, {
            get: function() {
                return f
            },
            set: function(t) {
                f = "" + t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(a, "region", o({}, c, {
            get: function() {
                return v
            },
            set: function(t) {
                v = t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(a, "vertical", o({}, c, {
            get: function() {
                return m
            },
            set: function(t) {
                var e = n(t);
                if (e === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                m = e, this.hasBeenReset = !0
            }
        })), Object.defineProperty(a, "snapToLines", o({}, c, {
            get: function() {
                return g
            },
            set: function(t) {
                g = !!t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(a, "line", o({}, c, {
            get: function() {
                return y
            },
            set: function(t) {
                if ("number" != typeof t && t !== s) throw new SyntaxError("An invalid number or illegal string was specified.");
                y = t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(a, "lineAlign", o({}, c, {
            get: function() {
                return b
            },
            set: function(t) {
                var e = i(t);
                if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                b = e, this.hasBeenReset = !0
            }
        })), Object.defineProperty(a, "position", o({}, c, {
            get: function() {
                return w
            },
            set: function(t) {
                if (0 > t || t > 100) throw new Error("Position must be between 0 and 100.");
                w = t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(a, "positionAlign", o({}, c, {
            get: function() {
                return T
            },
            set: function(t) {
                var e = i(t);
                if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                T = e, this.hasBeenReset = !0
            }
        })), Object.defineProperty(a, "size", o({}, c, {
            get: function() {
                return k
            },
            set: function(t) {
                if (0 > t || t > 100) throw new Error("Size must be between 0 and 100.");
                k = t, this.hasBeenReset = !0
            }
        })), Object.defineProperty(a, "align", o({}, c, {
            get: function() {
                return A
            },
            set: function(t) {
                var e = i(t);
                if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                A = e, this.hasBeenReset = !0
            }
        })), a.displayState = void 0, l ? a : void 0
    }
    var s = "auto",
        a = {
            "": !0,
            lr: !0,
            rl: !0
        },
        l = {
            start: !0,
            middle: !0,
            end: !0,
            left: !0,
            right: !0
        };
    r.prototype.getCueAsHTML = function() {
        return WebVTT.convertCueToDOMTree(window, this.text)
    }, t.VTTCue = t.VTTCue || r, e.VTTCue = r
}(this, this.vttjs || {}),
function(t, e) {
    function n(t) {
        if ("string" != typeof t) return !1;
        var e = r[t.toLowerCase()];
        return e ? t.toLowerCase() : !1
    }

    function i(t) {
        return "number" == typeof t && t >= 0 && 100 >= t
    }

    function o() {
        var t = 100,
            e = 3,
            o = 0,
            r = 100,
            s = 0,
            a = 100,
            l = "";
        Object.defineProperties(this, {
            width: {
                enumerable: !0,
                get: function() {
                    return t
                },
                set: function(e) {
                    if (!i(e)) throw new Error("Width must be between 0 and 100.");
                    t = e
                }
            },
            lines: {
                enumerable: !0,
                get: function() {
                    return e
                },
                set: function(t) {
                    if ("number" != typeof t) throw new TypeError("Lines must be set to a number.");
                    e = t
                }
            },
            regionAnchorY: {
                enumerable: !0,
                get: function() {
                    return r
                },
                set: function(t) {
                    if (!i(t)) throw new Error("RegionAnchorX must be between 0 and 100.");
                    r = t
                }
            },
            regionAnchorX: {
                enumerable: !0,
                get: function() {
                    return o
                },
                set: function(t) {
                    if (!i(t)) throw new Error("RegionAnchorY must be between 0 and 100.");
                    o = t
                }
            },
            viewportAnchorY: {
                enumerable: !0,
                get: function() {
                    return a
                },
                set: function(t) {
                    if (!i(t)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                    a = t
                }
            },
            viewportAnchorX: {
                enumerable: !0,
                get: function() {
                    return s
                },
                set: function(t) {
                    if (!i(t)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                    s = t
                }
            },
            scroll: {
                enumerable: !0,
                get: function() {
                    return l
                },
                set: function(t) {
                    var e = n(t);
                    if (e === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                    l = e
                }
            }
        })
    }
    var r = {
        "": !0,
        up: !0
    };
    t.VTTRegion = t.VTTRegion || o, e.VTTRegion = o
}(this, this.vttjs || {}),
function(t) {
    function e(t, e) {
        this.name = "ParsingError", this.code = t.code, this.message = e || t.message
    }

    function n(t) {
        function e(t, e, n, i) {
            return 3600 * (0 | t) + 60 * (0 | e) + (0 | n) + (0 | i) / 1e3
        }
        var n = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
        return n ? n[3] ? e(n[1], n[2], n[3].replace(":", ""), n[4]) : n[1] > 59 ? e(n[1], n[2], 0, n[4]) : e(0, n[1], n[2], n[4]) : null
    }

    function i() {
        this.values = f(null)
    }

    function o(t, e, n, i) {
        var o = i ? t.split(i) : [t];
        for (var r in o)
            if ("string" == typeof o[r]) {
                var s = o[r].split(n);
                if (2 === s.length) {
                    var a = s[0],
                        l = s[1];
                    e(a, l)
                }
            }
    }

    function r(t, r, s) {
        function a() {
            var i = n(t);
            if (null === i) throw new e(e.Errors.BadTimeStamp, "Malformed timestamp: " + u);
            return t = t.replace(/^[^\sa-zA-Z-]+/, ""), i
        }

        function l(t, e) {
            var n = new i;
            o(t, function(t, e) {
                switch (t) {
                    case "region":
                        for (var i = s.length - 1; i >= 0; i--)
                            if (s[i].id === e) {
                                n.set(t, s[i].region);
                                break
                            }
                        break;
                    case "vertical":
                        n.alt(t, e, ["rl", "lr"]);
                        break;
                    case "line":
                        var o = e.split(","),
                            r = o[0];
                        n.integer(t, r), n.percent(t, r) ? n.set("snapToLines", !1) : null, n.alt(t, r, ["auto"]), 2 === o.length && n.alt("lineAlign", o[1], ["start", "middle", "end"]);
                        break;
                    case "position":
                        o = e.split(","), n.percent(t, o[0]), 2 === o.length && n.alt("positionAlign", o[1], ["start", "middle", "end"]);
                        break;
                    case "size":
                        n.percent(t, e);
                        break;
                    case "align":
                        n.alt(t, e, ["start", "middle", "end", "left", "right"])
                }
            }, /:/, /\s/), e.region = n.get("region", null), e.vertical = n.get("vertical", ""), e.line = n.get("line", "auto"), e.lineAlign = n.get("lineAlign", "start"), e.snapToLines = n.get("snapToLines", !0), e.size = n.get("size", 100), e.align = n.get("align", "middle"), e.position = n.get("position", {
                start: 0,
                left: 0,
                middle: 50,
                end: 100,
                right: 100
            }, e.align), e.positionAlign = n.get("positionAlign", {
                start: "start",
                left: "start",
                middle: "middle",
                end: "end",
                right: "end"
            }, e.align)
        }

        function c() {
            t = t.replace(/^\s+/, "")
        }
        var u = t;
        if (c(), r.startTime = a(), c(), "-->" !== t.substr(0, 3)) throw new e(e.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + u);
        t = t.substr(3), c(), r.endTime = a(), c(), l(t, r)
    }

    function s(t, e) {
        function i() {
            function t(t) {
                return e = e.substr(t.length), t
            }
            if (!e) return null;
            var n = e.match(/^([^<]*)(<[^>]+>?)?/);
            return t(n[1] ? n[1] : n[2])
        }

        function o(t) {
            return v[t]
        }

        function r(t) {
            for (; f = t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) t = t.replace(f[0], o);
            return t
        }

        function s(t, e) {
            return !y[e.localName] || y[e.localName] === t.localName
        }

        function a(e, n) {
            var i = m[e];
            if (!i) return null;
            var o = t.document.createElement(i);
            o.localName = i;
            var r = g[e];
            return r && n && (o[r] = n.trim()), o
        }
        for (var l, c = t.document.createElement("div"), u = c, d = []; null !== (l = i());)
            if ("<" !== l[0]) u.appendChild(t.document.createTextNode(r(l)));
            else {
                if ("/" === l[1]) {
                    d.length && d[d.length - 1] === l.substr(2).replace(">", "") && (d.pop(), u = u.parentNode);
                    continue
                }
                var p, h = n(l.substr(1, l.length - 2));
                if (h) {
                    p = t.document.createProcessingInstruction("timestamp", h), u.appendChild(p);
                    continue
                }
                var f = l.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                if (!f) continue;
                if (p = a(f[1], f[3]), !p) continue;
                if (!s(u, p)) continue;
                f[2] && (p.className = f[2].substr(1).replace(".", " ")), d.push(f[1]), u.appendChild(p), u = p
            }
        return c
    }

    function a(t) {
        function e(t, e) {
            for (var n = e.childNodes.length - 1; n >= 0; n--) t.push(e.childNodes[n])
        }

        function n(t) {
            if (!t || !t.length) return null;
            var i = t.pop(),
                o = i.textContent || i.innerText;
            if (o) {
                var r = o.match(/^.*(\n|\r)/);
                return r ? (t.length = 0, r[0]) : o
            }
            return "ruby" === i.tagName ? n(t) : i.childNodes ? (e(t, i), n(t)) : void 0
        }
        var i, o = [],
            r = "";
        if (!t || !t.childNodes) return "ltr";
        for (e(o, t); r = n(o);)
            for (var s = 0; s < r.length; s++) {
                i = r.charCodeAt(s);
                for (var a = 0; a < b.length; a++)
                    if (b[a] === i) return "rtl"
            }
        return "ltr"
    }

    function l(t) {
        if ("number" == typeof t.line && (t.snapToLines || t.line >= 0 && t.line <= 100)) return t.line;
        if (!t.track || !t.track.textTrackList || !t.track.textTrackList.mediaElement) return -1;
        for (var e = t.track, n = e.textTrackList, i = 0, o = 0; o < n.length && n[o] !== e; o++) "showing" === n[o].mode && i++;
        return -1 * ++i
    }

    function c() {}

    function u(t, e, n) {
        var i = /MSIE\s8\.0/.test(navigator.userAgent),
            o = "rgba(255, 255, 255, 1)",
            r = "rgba(0, 0, 0, 0.8)";
        i && (o = "rgb(255, 255, 255)", r = "rgb(0, 0, 0)"), c.call(this), this.cue = e, this.cueDiv = s(t, e.text);
        var l = {
            color: o,
            backgroundColor: r,
            position: "relative",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "inline"
        };
        i || (l.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl", l.unicodeBidi = "plaintext"), this.applyStyles(l, this.cueDiv), this.div = t.document.createElement("div"), l = {
            textAlign: "middle" === e.align ? "center" : e.align,
            font: n.font,
            whiteSpace: "pre-line",
            position: "absolute"
        }, i || (l.direction = a(this.cueDiv), l.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(l), this.div.appendChild(this.cueDiv);
        var u = 0;
        switch (e.positionAlign) {
            case "start":
                u = e.position;
                break;
            case "middle":
                u = e.position - e.size / 2;
                break;
            case "end":
                u = e.position - e.size
        }
        this.applyStyles("" === e.vertical ? {
            left: this.formatStyle(u, "%"),
            width: this.formatStyle(e.size, "%")
        } : {
            top: this.formatStyle(u, "%"),
            height: this.formatStyle(e.size, "%")
        }), this.move = function(t) {
            this.applyStyles({
                top: this.formatStyle(t.top, "px"),
                bottom: this.formatStyle(t.bottom, "px"),
                left: this.formatStyle(t.left, "px"),
                right: this.formatStyle(t.right, "px"),
                height: this.formatStyle(t.height, "px"),
                width: this.formatStyle(t.width, "px")
            })
        }
    }

    function d(t) {
        var e, n, i, o, r = /MSIE\s8\.0/.test(navigator.userAgent);
        if (t.div) {
            n = t.div.offsetHeight, i = t.div.offsetWidth, o = t.div.offsetTop;
            var s = (s = t.div.childNodes) && (s = s[0]) && s.getClientRects && s.getClientRects();
            t = t.div.getBoundingClientRect(), e = s ? Math.max(s[0] && s[0].height || 0, t.height / s.length) : 0
        }
        this.left = t.left, this.right = t.right, this.top = t.top || o, this.height = t.height || n, this.bottom = t.bottom || o + (t.height || n), this.width = t.width || i, this.lineHeight = void 0 !== e ? e : t.lineHeight, r && !this.lineHeight && (this.lineHeight = 13)
    }

    function p(t, e, n, i) {
        function o(t, e) {
            for (var o, r = new d(t), s = 1, a = 0; a < e.length; a++) {
                for (; t.overlapsOppositeAxis(n, e[a]) || t.within(n) && t.overlapsAny(i);) t.move(e[a]);
                if (t.within(n)) return t;
                var l = t.intersectPercentage(n);
                s > l && (o = new d(t), s = l), t = new d(r)
            }
            return o || r
        }
        var r = new d(e),
            s = e.cue,
            a = l(s),
            c = [];
        if (s.snapToLines) {
            var u;
            switch (s.vertical) {
                case "":
                    c = ["+y", "-y"], u = "height";
                    break;
                case "rl":
                    c = ["+x", "-x"], u = "width";
                    break;
                case "lr":
                    c = ["-x", "+x"], u = "width"
            }
            var p = r.lineHeight,
                h = p * Math.round(a),
                f = n[u] + p,
                v = c[0];
            Math.abs(h) > f && (h = 0 > h ? -1 : 1, h *= Math.ceil(f / p) * p), 0 > a && (h += "" === s.vertical ? n.height : n.width, c = c.reverse()), r.move(v, h)
        } else {
            var m = r.lineHeight / n.height * 100;
            switch (s.lineAlign) {
                case "middle":
                    a -= m / 2;
                    break;
                case "end":
                    a -= m
            }
            switch (s.vertical) {
                case "":
                    e.applyStyles({
                        top: e.formatStyle(a, "%")
                    });
                    break;
                case "rl":
                    e.applyStyles({
                        left: e.formatStyle(a, "%")
                    });
                    break;
                case "lr":
                    e.applyStyles({
                        right: e.formatStyle(a, "%")
                    })
            }
            c = ["+y", "-x", "+x", "-y"], r = new d(e)
        }
        var g = o(r, c);
        e.move(g.toCSSCompatValues(n))
    }

    function h() {}
    var f = Object.create || function() {
        function t() {}
        return function(e) {
            if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
            return t.prototype = e, new t
        }
    }();
    e.prototype = f(Error.prototype), e.prototype.constructor = e, e.Errors = {
        BadSignature: {
            code: 0,
            message: "Malformed WebVTT signature."
        },
        BadTimeStamp: {
            code: 1,
            message: "Malformed time stamp."
        }
    }, i.prototype = {
        set: function(t, e) {
            this.get(t) || "" === e || (this.values[t] = e)
        },
        get: function(t, e, n) {
            return n ? this.has(t) ? this.values[t] : e[n] : this.has(t) ? this.values[t] : e
        },
        has: function(t) {
            return t in this.values
        },
        alt: function(t, e, n) {
            for (var i = 0; i < n.length; ++i)
                if (e === n[i]) {
                    this.set(t, e);
                    break
                }
        },
        integer: function(t, e) {
            /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
        },
        percent: function(t, e) {
            var n;
            return (n = e.match(/^([\d]{1,3})(\.[\d]*)?%$/)) && (e = parseFloat(e), e >= 0 && 100 >= e) ? (this.set(t, e), !0) : !1
        }
    };
    var v = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&lrm;": "‎",
            "&rlm;": "‏",
            "&nbsp;": " "
        },
        m = {
            c: "span",
            i: "i",
            b: "b",
            u: "u",
            ruby: "ruby",
            rt: "rt",
            v: "span",
            lang: "span"
        },
        g = {
            v: "title",
            lang: "lang"
        },
        y = {
            rt: "ruby"
        },
        b = [1470, 1472, 1475, 1478, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1520, 1521, 1522, 1523, 1524, 1544, 1547, 1549, 1563, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1645, 1646, 1647, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1765, 1766, 1774, 1775, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1807, 1808, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1969, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2e3, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2036, 2037, 2042, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2074, 2084, 2088, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2142, 2208, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 8207, 64285, 64287, 64288, 64289, 64290, 64291, 64292, 64293, 64294, 64295, 64296, 64298, 64299, 64300, 64301, 64302, 64303, 64304, 64305, 64306, 64307, 64308, 64309, 64310, 64312, 64313, 64314, 64315, 64316, 64318, 64320, 64321, 64323, 64324, 64326, 64327, 64328, 64329, 64330, 64331, 64332, 64333, 64334, 64335, 64336, 64337, 64338, 64339, 64340, 64341, 64342, 64343, 64344, 64345, 64346, 64347, 64348, 64349, 64350, 64351, 64352, 64353, 64354, 64355, 64356, 64357, 64358, 64359, 64360, 64361, 64362, 64363, 64364, 64365, 64366, 64367, 64368, 64369, 64370, 64371, 64372, 64373, 64374, 64375, 64376, 64377, 64378, 64379, 64380, 64381, 64382, 64383, 64384, 64385, 64386, 64387, 64388, 64389, 64390, 64391, 64392, 64393, 64394, 64395, 64396, 64397, 64398, 64399, 64400, 64401, 64402, 64403, 64404, 64405, 64406, 64407, 64408, 64409, 64410, 64411, 64412, 64413, 64414, 64415, 64416, 64417, 64418, 64419, 64420, 64421, 64422, 64423, 64424, 64425, 64426, 64427, 64428, 64429, 64430, 64431, 64432, 64433, 64434, 64435, 64436, 64437, 64438, 64439, 64440, 64441, 64442, 64443, 64444, 64445, 64446, 64447, 64448, 64449, 64467, 64468, 64469, 64470, 64471, 64472, 64473, 64474, 64475, 64476, 64477, 64478, 64479, 64480, 64481, 64482, 64483, 64484, 64485, 64486, 64487, 64488, 64489, 64490, 64491, 64492, 64493, 64494, 64495, 64496, 64497, 64498, 64499, 64500, 64501, 64502, 64503, 64504, 64505, 64506, 64507, 64508, 64509, 64510, 64511, 64512, 64513, 64514, 64515, 64516, 64517, 64518, 64519, 64520, 64521, 64522, 64523, 64524, 64525, 64526, 64527, 64528, 64529, 64530, 64531, 64532, 64533, 64534, 64535, 64536, 64537, 64538, 64539, 64540, 64541, 64542, 64543, 64544, 64545, 64546, 64547, 64548, 64549, 64550, 64551, 64552, 64553, 64554, 64555, 64556, 64557, 64558, 64559, 64560, 64561, 64562, 64563, 64564, 64565, 64566, 64567, 64568, 64569, 64570, 64571, 64572, 64573, 64574, 64575, 64576, 64577, 64578, 64579, 64580, 64581, 64582, 64583, 64584, 64585, 64586, 64587, 64588, 64589, 64590, 64591, 64592, 64593, 64594, 64595, 64596, 64597, 64598, 64599, 64600, 64601, 64602, 64603, 64604, 64605, 64606, 64607, 64608, 64609, 64610, 64611, 64612, 64613, 64614, 64615, 64616, 64617, 64618, 64619, 64620, 64621, 64622, 64623, 64624, 64625, 64626, 64627, 64628, 64629, 64630, 64631, 64632, 64633, 64634, 64635, 64636, 64637, 64638, 64639, 64640, 64641, 64642, 64643, 64644, 64645, 64646, 64647, 64648, 64649, 64650, 64651, 64652, 64653, 64654, 64655, 64656, 64657, 64658, 64659, 64660, 64661, 64662, 64663, 64664, 64665, 64666, 64667, 64668, 64669, 64670, 64671, 64672, 64673, 64674, 64675, 64676, 64677, 64678, 64679, 64680, 64681, 64682, 64683, 64684, 64685, 64686, 64687, 64688, 64689, 64690, 64691, 64692, 64693, 64694, 64695, 64696, 64697, 64698, 64699, 64700, 64701, 64702, 64703, 64704, 64705, 64706, 64707, 64708, 64709, 64710, 64711, 64712, 64713, 64714, 64715, 64716, 64717, 64718, 64719, 64720, 64721, 64722, 64723, 64724, 64725, 64726, 64727, 64728, 64729, 64730, 64731, 64732, 64733, 64734, 64735, 64736, 64737, 64738, 64739, 64740, 64741, 64742, 64743, 64744, 64745, 64746, 64747, 64748, 64749, 64750, 64751, 64752, 64753, 64754, 64755, 64756, 64757, 64758, 64759, 64760, 64761, 64762, 64763, 64764, 64765, 64766, 64767, 64768, 64769, 64770, 64771, 64772, 64773, 64774, 64775, 64776, 64777, 64778, 64779, 64780, 64781, 64782, 64783, 64784, 64785, 64786, 64787, 64788, 64789, 64790, 64791, 64792, 64793, 64794, 64795, 64796, 64797, 64798, 64799, 64800, 64801, 64802, 64803, 64804, 64805, 64806, 64807, 64808, 64809, 64810, 64811, 64812, 64813, 64814, 64815, 64816, 64817, 64818, 64819, 64820, 64821, 64822, 64823, 64824, 64825, 64826, 64827, 64828, 64829, 64848, 64849, 64850, 64851, 64852, 64853, 64854, 64855, 64856, 64857, 64858, 64859, 64860, 64861, 64862, 64863, 64864, 64865, 64866, 64867, 64868, 64869, 64870, 64871, 64872, 64873, 64874, 64875, 64876, 64877, 64878, 64879, 64880, 64881, 64882, 64883, 64884, 64885, 64886, 64887, 64888, 64889, 64890, 64891, 64892, 64893, 64894, 64895, 64896, 64897, 64898, 64899, 64900, 64901, 64902, 64903, 64904, 64905, 64906, 64907, 64908, 64909, 64910, 64911, 64914, 64915, 64916, 64917, 64918, 64919, 64920, 64921, 64922, 64923, 64924, 64925, 64926, 64927, 64928, 64929, 64930, 64931, 64932, 64933, 64934, 64935, 64936, 64937, 64938, 64939, 64940, 64941, 64942, 64943, 64944, 64945, 64946, 64947, 64948, 64949, 64950, 64951, 64952, 64953, 64954, 64955, 64956, 64957, 64958, 64959, 64960, 64961, 64962, 64963, 64964, 64965, 64966, 64967, 65008, 65009, 65010, 65011, 65012, 65013, 65014, 65015, 65016, 65017, 65018, 65019, 65020, 65136, 65137, 65138, 65139, 65140, 65142, 65143, 65144, 65145, 65146, 65147, 65148, 65149, 65150, 65151, 65152, 65153, 65154, 65155, 65156, 65157, 65158, 65159, 65160, 65161, 65162, 65163, 65164, 65165, 65166, 65167, 65168, 65169, 65170, 65171, 65172, 65173, 65174, 65175, 65176, 65177, 65178, 65179, 65180, 65181, 65182, 65183, 65184, 65185, 65186, 65187, 65188, 65189, 65190, 65191, 65192, 65193, 65194, 65195, 65196, 65197, 65198, 65199, 65200, 65201, 65202, 65203, 65204, 65205, 65206, 65207, 65208, 65209, 65210, 65211, 65212, 65213, 65214, 65215, 65216, 65217, 65218, 65219, 65220, 65221, 65222, 65223, 65224, 65225, 65226, 65227, 65228, 65229, 65230, 65231, 65232, 65233, 65234, 65235, 65236, 65237, 65238, 65239, 65240, 65241, 65242, 65243, 65244, 65245, 65246, 65247, 65248, 65249, 65250, 65251, 65252, 65253, 65254, 65255, 65256, 65257, 65258, 65259, 65260, 65261, 65262, 65263, 65264, 65265, 65266, 65267, 65268, 65269, 65270, 65271, 65272, 65273, 65274, 65275, 65276, 67584, 67585, 67586, 67587, 67588, 67589, 67592, 67594, 67595, 67596, 67597, 67598, 67599, 67600, 67601, 67602, 67603, 67604, 67605, 67606, 67607, 67608, 67609, 67610, 67611, 67612, 67613, 67614, 67615, 67616, 67617, 67618, 67619, 67620, 67621, 67622, 67623, 67624, 67625, 67626, 67627, 67628, 67629, 67630, 67631, 67632, 67633, 67634, 67635, 67636, 67637, 67639, 67640, 67644, 67647, 67648, 67649, 67650, 67651, 67652, 67653, 67654, 67655, 67656, 67657, 67658, 67659, 67660, 67661, 67662, 67663, 67664, 67665, 67666, 67667, 67668, 67669, 67671, 67672, 67673, 67674, 67675, 67676, 67677, 67678, 67679, 67840, 67841, 67842, 67843, 67844, 67845, 67846, 67847, 67848, 67849, 67850, 67851, 67852, 67853, 67854, 67855, 67856, 67857, 67858, 67859, 67860, 67861, 67862, 67863, 67864, 67865, 67866, 67867, 67872, 67873, 67874, 67875, 67876, 67877, 67878, 67879, 67880, 67881, 67882, 67883, 67884, 67885, 67886, 67887, 67888, 67889, 67890, 67891, 67892, 67893, 67894, 67895, 67896, 67897, 67903, 67968, 67969, 67970, 67971, 67972, 67973, 67974, 67975, 67976, 67977, 67978, 67979, 67980, 67981, 67982, 67983, 67984, 67985, 67986, 67987, 67988, 67989, 67990, 67991, 67992, 67993, 67994, 67995, 67996, 67997, 67998, 67999, 68e3, 68001, 68002, 68003, 68004, 68005, 68006, 68007, 68008, 68009, 68010, 68011, 68012, 68013, 68014, 68015, 68016, 68017, 68018, 68019, 68020, 68021, 68022, 68023, 68030, 68031, 68096, 68112, 68113, 68114, 68115, 68117, 68118, 68119, 68121, 68122, 68123, 68124, 68125, 68126, 68127, 68128, 68129, 68130, 68131, 68132, 68133, 68134, 68135, 68136, 68137, 68138, 68139, 68140, 68141, 68142, 68143, 68144, 68145, 68146, 68147, 68160, 68161, 68162, 68163, 68164, 68165, 68166, 68167, 68176, 68177, 68178, 68179, 68180, 68181, 68182, 68183, 68184, 68192, 68193, 68194, 68195, 68196, 68197, 68198, 68199, 68200, 68201, 68202, 68203, 68204, 68205, 68206, 68207, 68208, 68209, 68210, 68211, 68212, 68213, 68214, 68215, 68216, 68217, 68218, 68219, 68220, 68221, 68222, 68223, 68352, 68353, 68354, 68355, 68356, 68357, 68358, 68359, 68360, 68361, 68362, 68363, 68364, 68365, 68366, 68367, 68368, 68369, 68370, 68371, 68372, 68373, 68374, 68375, 68376, 68377, 68378, 68379, 68380, 68381, 68382, 68383, 68384, 68385, 68386, 68387, 68388, 68389, 68390, 68391, 68392, 68393, 68394, 68395, 68396, 68397, 68398, 68399, 68400, 68401, 68402, 68403, 68404, 68405, 68416, 68417, 68418, 68419, 68420, 68421, 68422, 68423, 68424, 68425, 68426, 68427, 68428, 68429, 68430, 68431, 68432, 68433, 68434, 68435, 68436, 68437, 68440, 68441, 68442, 68443, 68444, 68445, 68446, 68447, 68448, 68449, 68450, 68451, 68452, 68453, 68454, 68455, 68456, 68457, 68458, 68459, 68460, 68461, 68462, 68463, 68464, 68465, 68466, 68472, 68473, 68474, 68475, 68476, 68477, 68478, 68479, 68608, 68609, 68610, 68611, 68612, 68613, 68614, 68615, 68616, 68617, 68618, 68619, 68620, 68621, 68622, 68623, 68624, 68625, 68626, 68627, 68628, 68629, 68630, 68631, 68632, 68633, 68634, 68635, 68636, 68637, 68638, 68639, 68640, 68641, 68642, 68643, 68644, 68645, 68646, 68647, 68648, 68649, 68650, 68651, 68652, 68653, 68654, 68655, 68656, 68657, 68658, 68659, 68660, 68661, 68662, 68663, 68664, 68665, 68666, 68667, 68668, 68669, 68670, 68671, 68672, 68673, 68674, 68675, 68676, 68677, 68678, 68679, 68680, 126464, 126465, 126466, 126467, 126469, 126470, 126471, 126472, 126473, 126474, 126475, 126476, 126477, 126478, 126479, 126480, 126481, 126482, 126483, 126484, 126485, 126486, 126487, 126488, 126489, 126490, 126491, 126492, 126493, 126494, 126495, 126497, 126498, 126500, 126503, 126505, 126506, 126507, 126508, 126509, 126510, 126511, 126512, 126513, 126514, 126516, 126517, 126518, 126519, 126521, 126523, 126530, 126535, 126537, 126539, 126541, 126542, 126543, 126545, 126546, 126548, 126551, 126553, 126555, 126557, 126559, 126561, 126562, 126564, 126567, 126568, 126569, 126570, 126572, 126573, 126574, 126575, 126576, 126577, 126578, 126580, 126581, 126582, 126583, 126585, 126586, 126587, 126588, 126590, 126592, 126593, 126594, 126595, 126596, 126597, 126598, 126599, 126600, 126601, 126603, 126604, 126605, 126606, 126607, 126608, 126609, 126610, 126611, 126612, 126613, 126614, 126615, 126616, 126617, 126618, 126619, 126625, 126626, 126627, 126629, 126630, 126631, 126632, 126633, 126635, 126636, 126637, 126638, 126639, 126640, 126641, 126642, 126643, 126644, 126645, 126646, 126647, 126648, 126649, 126650, 126651, 1114109];
    c.prototype.applyStyles = function(t, e) {
        e = e || this.div;
        for (var n in t) t.hasOwnProperty(n) && (e.style[n] = t[n])
    }, c.prototype.formatStyle = function(t, e) {
        return 0 === t ? 0 : t + e
    }, u.prototype = f(c.prototype), u.prototype.constructor = u, d.prototype.move = function(t, e) {
        switch (e = void 0 !== e ? e : this.lineHeight, t) {
            case "+x":
                this.left += e, this.right += e;
                break;
            case "-x":
                this.left -= e, this.right -= e;
                break;
            case "+y":
                this.top += e, this.bottom += e;
                break;
            case "-y":
                this.top -= e, this.bottom -= e
        }
    }, d.prototype.overlaps = function(t) {
        return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
    }, d.prototype.overlapsAny = function(t) {
        for (var e = 0; e < t.length; e++)
            if (this.overlaps(t[e])) return !0;
        return !1
    }, d.prototype.within = function(t) {
        return this.top >= t.top && this.bottom <= t.bottom && this.left >= t.left && this.right <= t.right
    }, d.prototype.overlapsOppositeAxis = function(t, e) {
        switch (e) {
            case "+x":
                return this.left < t.left;
            case "-x":
                return this.right > t.right;
            case "+y":
                return this.top < t.top;
            case "-y":
                return this.bottom > t.bottom
        }
    }, d.prototype.intersectPercentage = function(t) {
        var e = Math.max(0, Math.min(this.right, t.right) - Math.max(this.left, t.left)),
            n = Math.max(0, Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)),
            i = e * n;
        return i / (this.height * this.width)
    }, d.prototype.toCSSCompatValues = function(t) {
        return {
            top: this.top - t.top,
            bottom: t.bottom - this.bottom,
            left: this.left - t.left,
            right: t.right - this.right,
            height: this.height,
            width: this.width
        }
    }, d.getSimpleBoxPosition = function(t) {
        var e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0,
            n = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0,
            i = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
        t = t.div ? t.div.getBoundingClientRect() : t.tagName ? t.getBoundingClientRect() : t;
        var o = {
            left: t.left,
            right: t.right,
            top: t.top || i,
            height: t.height || e,
            bottom: t.bottom || i + (t.height || e),
            width: t.width || n
        };
        return o
    }, h.StringDecoder = function() {
        return {
            decode: function(t) {
                if (!t) return "";
                if ("string" != typeof t) throw new Error("Error - expected string data.");
                return decodeURIComponent(encodeURIComponent(t))
            }
        }
    }, h.convertCueToDOMTree = function(t, e) {
        return t && e ? s(t, e) : null
    };
    var w = .05,
        T = "sans-serif",
        k = "1.5%";
    h.processCues = function(t, e, n) {
        function i(t) {
            for (var e = 0; e < t.length; e++)
                if (t[e].hasBeenReset || !t[e].displayState) return !0;
            return !1
        }
        if (!t || !e || !n) return null;
        for (; n.firstChild;) n.removeChild(n.firstChild);
        var o = t.document.createElement("div");
        if (o.style.position = "absolute", o.style.left = "0", o.style.right = "0", o.style.top = "0", o.style.bottom = "0", o.style.margin = k, n.appendChild(o), i(e)) {
            var r = [],
                s = d.getSimpleBoxPosition(o),
                a = Math.round(s.height * w * 100) / 100,
                l = {
                    font: a + "px " + T
                };
            ! function() {
                for (var n, i, a = 0; a < e.length; a++) i = e[a], n = new u(t, i, l), o.appendChild(n.div), p(t, n, s, r), i.displayState = n.div, r.push(d.getSimpleBoxPosition(n))
            }()
        } else
            for (var c = 0; c < e.length; c++) o.appendChild(e[c].displayState)
    }, h.Parser = function(t, e, n) {
        n || (n = e, e = {}), e || (e = {}), this.window = t, this.vttjs = e, this.state = "INITIAL", this.buffer = "", this.decoder = n || new TextDecoder("utf8"), this.regionList = []
    }, h.Parser.prototype = {
        reportOrThrowError: function(t) {
            if (!(t instanceof e)) throw t;
            this.onparsingerror && this.onparsingerror(t)
        },
        parse: function(t) {
            function n() {
                for (var t = l.buffer, e = 0; e < t.length && "\r" !== t[e] && "\n" !== t[e];)++e;
                var n = t.substr(0, e);
                return "\r" === t[e] && ++e, "\n" === t[e] && ++e, l.buffer = t.substr(e), n
            }

            function s(t) {
                var e = new i;
                if (o(t, function(t, n) {
                    switch (t) {
                        case "id":
                            e.set(t, n);
                            break;
                        case "width":
                            e.percent(t, n);
                            break;
                        case "lines":
                            e.integer(t, n);
                            break;
                        case "regionanchor":
                        case "viewportanchor":
                            var o = n.split(",");
                            if (2 !== o.length) break;
                            var r = new i;
                            if (r.percent("x", o[0]), r.percent("y", o[1]), !r.has("x") || !r.has("y")) break;
                            e.set(t + "X", r.get("x")), e.set(t + "Y", r.get("y"));
                            break;
                        case "scroll":
                            e.alt(t, n, ["up"])
                    }
                }, /=/, /\s/), e.has("id")) {
                    var n = new(l.vttjs.VTTRegion || l.window.VTTRegion);
                    n.width = e.get("width", 100), n.lines = e.get("lines", 3), n.regionAnchorX = e.get("regionanchorX", 0), n.regionAnchorY = e.get("regionanchorY", 100), n.viewportAnchorX = e.get("viewportanchorX", 0), n.viewportAnchorY = e.get("viewportanchorY", 100), n.scroll = e.get("scroll", ""), l.onregion && l.onregion(n), l.regionList.push({
                        id: e.get("id"),
                        region: n
                    })
                }
            }

            function a(t) {
                o(t, function(t, e) {
                    switch (t) {
                        case "Region":
                            s(e)
                    }
                }, /:/)
            }
            var l = this;
            t && (l.buffer += l.decoder.decode(t, {
                stream: !0
            }));
            try {
                var c;
                if ("INITIAL" === l.state) {
                    if (!/\r\n|\n/.test(l.buffer)) return this;
                    c = n();
                    var u = c.match(/^WEBVTT([ \t].*)?$/);
                    if (!u || !u[0]) throw new e(e.Errors.BadSignature);
                    l.state = "HEADER"
                }
                for (var d = !1; l.buffer;) {
                    if (!/\r\n|\n/.test(l.buffer)) return this;
                    switch (d ? d = !1 : c = n(), l.state) {
                        case "HEADER":
                            /:/.test(c) ? a(c) : c || (l.state = "ID");
                            continue;
                        case "NOTE":
                            c || (l.state = "ID");
                            continue;
                        case "ID":
                            if (/^NOTE($|[ \t])/.test(c)) {
                                l.state = "NOTE";
                                break
                            }
                            if (!c) continue;
                            if (l.cue = new(l.vttjs.VTTCue || l.window.VTTCue)(0, 0, ""), l.state = "CUE", -1 === c.indexOf("-->")) {
                                l.cue.id = c;
                                continue
                            }
                        case "CUE":
                            try {
                                r(c, l.cue, l.regionList)
                            } catch (p) {
                                l.reportOrThrowError(p), l.cue = null, l.state = "BADCUE";
                                continue
                            }
                            l.state = "CUETEXT";
                            continue;
                        case "CUETEXT":
                            var h = -1 !== c.indexOf("-->");
                            if (!c || h && (d = !0)) {
                                l.oncue && l.oncue(l.cue), l.cue = null, l.state = "ID";
                                continue
                            }
                            l.cue.text && (l.cue.text += "\n"), l.cue.text += c;
                            continue;
                        case "BADCUE":
                            c || (l.state = "ID");
                            continue
                    }
                }
            } catch (p) {
                l.reportOrThrowError(p), "CUETEXT" === l.state && l.cue && l.oncue && l.oncue(l.cue), l.cue = null, l.state = "INITIAL" === l.state ? "BADWEBVTT" : "BADCUE"
            }
            return this
        },
        flush: function() {
            var t = this;
            try {
                if (t.buffer += t.decoder.decode(), (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new e(e.Errors.BadSignature)
            } catch (n) {
                t.reportOrThrowError(n)
            }
            return t.onflush && t.onflush(), this
        }
    }, t.WebVTT = h
}(this, this.vttjs || {}),
function t(e, n, i) {
        function o(s, a) {
            if (!n[s]) {
                if (!e[s]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(s, !0);
                    if (r) return r(s, !0);
                    var c = new Error("Cannot find module '" + s + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = n[s] = {
                    exports: {}
                };
                e[s][0].call(u.exports, function(t) {
                    var n = e[s][1][t];
                    return o(n ? n : t)
                }, u, u.exports, t, e, n, i)
            }
            return n[s].exports
        }
        for (var r = "function" == typeof require && require, s = 0; s < i.length; s++) o(i[s]);
        return o
    }({
        1: [
            function(t, e, n) {
                "use strict";

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                            }
                        }
                        return function(e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e
                        }
                    }(),
                    r = n.IVPAIDAdUnit = function() {
                        function t() {
                            i(this, t)
                        }
                        return o(t, [{
                            key: "handshakeVersion",
                            value: function() {
                                arguments.length <= 0 || void 0 === arguments[0] ? "2.0" : arguments[0], arguments.length <= 1 || void 0 === arguments[1] ? void 0 : arguments[1]
                            }
                        }, {
                            key: "initAd",
                            value: function(t, e, n, i) {
                                arguments.length <= 4 || void 0 === arguments[4] ? {
                                    AdParameters: ""
                                } : arguments[4], arguments.length <= 5 || void 0 === arguments[5] ? {
                                    flashVars: ""
                                } : arguments[5], arguments.length <= 6 || void 0 === arguments[6] ? void 0 : arguments[6]
                            }
                        }, {
                            key: "resizeAd",
                            value: function(t, e, n) {
                                arguments.length <= 3 || void 0 === arguments[3] ? void 0 : arguments[3]
                            }
                        }, {
                            key: "startAd",
                            value: function() {
                                arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0]
                            }
                        }, {
                            key: "stopAd",
                            value: function() {
                                arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0]
                            }
                        }, {
                            key: "pauseAd",
                            value: function() {
                                arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0]
                            }
                        }, {
                            key: "resumeAd",
                            value: function() {
                                arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0]
                            }
                        }, {
                            key: "expandAd",
                            value: function() {
                                arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0]
                            }
                        }, {
                            key: "collapseAd",
                            value: function() {
                                arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0]
                            }
                        }, {
                            key: "skipAd",
                            value: function() {
                                arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0]
                            }
                        }, {
                            key: "getAdLinear",
                            value: function(t) {}
                        }, {
                            key: "getAdWidth",
                            value: function(t) {}
                        }, {
                            key: "getAdHeight",
                            value: function(t) {}
                        }, {
                            key: "getAdExpanded",
                            value: function(t) {}
                        }, {
                            key: "getAdSkippableState",
                            value: function(t) {}
                        }, {
                            key: "getAdRemainingTime",
                            value: function(t) {}
                        }, {
                            key: "getAdDuration",
                            value: function(t) {}
                        }, {
                            key: "setAdVolume",
                            value: function(t) {
                                arguments.length <= 1 || void 0 === arguments[1] ? void 0 : arguments[1]
                            }
                        }, {
                            key: "getAdVolume",
                            value: function(t) {}
                        }, {
                            key: "getAdCompanions",
                            value: function(t) {}
                        }, {
                            key: "getAdIcons",
                            value: function(t) {}
                        }]), t
                    }();
                Object.defineProperty(r, "EVENTS", {
                    writable: !1,
                    configurable: !1,
                    value: ["AdLoaded", "AdStarted", "AdStopped", "AdSkipped", "AdSkippableStateChange", "AdSizeChange", "AdLinearChange", "AdDurationChange", "AdExpandedChange", "AdRemainingTimeChange", "AdVolumeChange", "AdImpression", "AdVideoStart", "AdVideoFirstQuartile", "AdVideoMidpoint", "AdVideoThirdQuartile", "AdVideoComplete", "AdClickThru", "AdInteraction", "AdUserAcceptInvitation", "AdUserMinimize", "AdUserClose", "AdPaused", "AdPlaying", "AdLog", "AdError"]
                })
            }, {}
        ],
        2: [
            function(t, e, n) {
                "use strict";

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== ("undefined" == typeof e ? "undefined" : s(e)) && "function" != typeof e ? t : e
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof e ? "undefined" : s(e)));
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
                };
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var a = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                            }
                        }
                        return function(e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e
                        }
                    }(),
                    l = t("./IVPAIDAdUnit").IVPAIDAdUnit,
                    c = Object.getOwnPropertyNames(l.prototype).filter(function(t) {
                        return -1 === ["constructor"].indexOf(t)
                    });
                n.VPAIDAdUnit = function(t) {
                    function e(t) {
                        i(this, e);
                        var n = o(this, Object.getPrototypeOf(e).call(this));
                        return n._destroyed = !1, n._flash = t, n
                    }
                    return r(e, t), a(e, [{
                        key: "_destroy",
                        value: function() {
                            var t = this;
                            this._destroyed = !0, c.forEach(function(e) {
                                t._flash.removeCallbackByMethodName(e)
                            }), l.EVENTS.forEach(function(e) {
                                t._flash.offEvent(e)
                            }), this._flash = null
                        }
                    }, {
                        key: "isDestroyed",
                        value: function() {
                            return this._destroyed
                        }
                    }, {
                        key: "on",
                        value: function(t, e) {
                            this._flash.on(t, e)
                        }
                    }, {
                        key: "off",
                        value: function(t, e) {
                            this._flash.off(t, e)
                        }
                    }, {
                        key: "handshakeVersion",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] ? "2.0" : arguments[0],
                                e = arguments.length <= 1 || void 0 === arguments[1] ? void 0 : arguments[1];
                            this._flash.callFlashMethod("handshakeVersion", [t], e)
                        }
                    }, {
                        key: "initAd",
                        value: function(t, e, n, i) {
                            var o = arguments.length <= 4 || void 0 === arguments[4] ? {
                                    AdParameters: ""
                                } : arguments[4],
                                r = arguments.length <= 5 || void 0 === arguments[5] ? {
                                    flashVars: ""
                                } : arguments[5],
                                s = arguments.length <= 6 || void 0 === arguments[6] ? void 0 : arguments[6];
                            this._flash.setSize(t, e), o = o || {
                                AdParameters: ""
                            }, r = r || {
                                flashVars: ""
                            }, this._flash.callFlashMethod("initAd", [this._flash.getWidth(), this._flash.getHeight(), n, i, o.AdParameters || "", r.flashVars || ""], s)
                        }
                    }, {
                        key: "resizeAd",
                        value: function(t, e, n) {
                            var i = arguments.length <= 3 || void 0 === arguments[3] ? void 0 : arguments[3];
                            this._flash.setSize(t, e), this._flash.callFlashMethod("resizeAd", [this._flash.getWidth(), this._flash.getHeight(), n], i)
                        }
                    }, {
                        key: "startAd",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0];
                            this._flash.callFlashMethod("startAd", [], t)
                        }
                    }, {
                        key: "stopAd",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0];
                            this._flash.callFlashMethod("stopAd", [], t)
                        }
                    }, {
                        key: "pauseAd",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0];
                            this._flash.callFlashMethod("pauseAd", [], t)
                        }
                    }, {
                        key: "resumeAd",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0];
                            this._flash.callFlashMethod("resumeAd", [], t)
                        }
                    }, {
                        key: "expandAd",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0];
                            this._flash.callFlashMethod("expandAd", [], t)
                        }
                    }, {
                        key: "collapseAd",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0];
                            this._flash.callFlashMethod("collapseAd", [], t)
                        }
                    }, {
                        key: "skipAd",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0];
                            this._flash.callFlashMethod("skipAd", [], t)
                        }
                    }, {
                        key: "getAdLinear",
                        value: function(t) {
                            this._flash.callFlashMethod("getAdLinear", [], t)
                        }
                    }, {
                        key: "getAdWidth",
                        value: function(t) {
                            this._flash.callFlashMethod("getAdWidth", [], t)
                        }
                    }, {
                        key: "getAdHeight",
                        value: function(t) {
                            this._flash.callFlashMethod("getAdHeight", [], t)
                        }
                    }, {
                        key: "getAdExpanded",
                        value: function(t) {
                            this._flash.callFlashMethod("getAdExpanded", [], t)
                        }
                    }, {
                        key: "getAdSkippableState",
                        value: function(t) {
                            this._flash.callFlashMethod("getAdSkippableState", [], t)
                        }
                    }, {
                        key: "getAdRemainingTime",
                        value: function(t) {
                            this._flash.callFlashMethod("getAdRemainingTime", [], t)
                        }
                    }, {
                        key: "getAdDuration",
                        value: function(t) {
                            this._flash.callFlashMethod("getAdDuration", [], t)
                        }
                    }, {
                        key: "setAdVolume",
                        value: function(t) {
                            var e = arguments.length <= 1 || void 0 === arguments[1] ? void 0 : arguments[1];
                            this._flash.callFlashMethod("setAdVolume", [t], e)
                        }
                    }, {
                        key: "getAdVolume",
                        value: function(t) {
                            this._flash.callFlashMethod("getAdVolume", [], t)
                        }
                    }, {
                        key: "getAdCompanions",
                        value: function(t) {
                            this._flash.callFlashMethod("getAdCompanions", [], t)
                        }
                    }, {
                        key: "getAdIcons",
                        value: function(t) {
                            this._flash.callFlashMethod("getAdIcons", [], t)
                        }
                    }]), e
                }(l)
            }, {
                "./IVPAIDAdUnit": 1
            }
        ],
        3: [
            function(t, e, n) {
                "use strict";

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o() {
                    if (this._destroyed) throw new Error("VPAIDFlashToJS is destroyed!")
                }

                function r() {
                    this._loadLater && (this.loadAdUnit(this._loadLater.url, this._loadLater.callback), delete this._loadLater)
                }

                function s(t, e) {
                    var n = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2];
                    Object.defineProperty(y, t, {
                        writable: n,
                        configurable: !1,
                        value: e
                    })
                }
                var a = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0),
                                    Object.defineProperty(t, i.key, i)
                            }
                        }
                        return function(e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e
                        }
                    }(),
                    l = t("swfobject"),
                    c = t("./jsFlashBridge").JSFlashBridge,
                    u = t("./VPAIDAdUnit").VPAIDAdUnit,
                    d = t("./utils").noop,
                    p = t("./utils").callbackTimeout,
                    h = t("./utils").isPositiveInt,
                    f = t("./utils").createElementWithID,
                    v = t("./utils").unique("vpaid"),
                    m = (t("./flashTester.js").createFlashTester, "10.1.0"),
                    g = {
                        isSupported: function() {
                            return !0
                        }
                    },
                    y = function() {
                        function t(e, n) {
                            function o(t) {
                                return setTimeout(function() {
                                    n(new Error(t))
                                }, 0), y
                            }
                            var s = arguments.length <= 2 || void 0 === arguments[2] ? {
                                    data: "VPAIDFlash.swf",
                                    width: 800,
                                    height: 400
                                } : arguments[2],
                                a = this,
                                u = arguments.length <= 3 || void 0 === arguments[3] ? {
                                    wmode: "transparent",
                                    salign: "tl",
                                    align: "left",
                                    allowScriptAccess: "always",
                                    scale: "noScale",
                                    allowFullScreen: "true",
                                    quality: "high"
                                } : arguments[3],
                                g = arguments.length <= 4 || void 0 === arguments[4] ? {
                                    debug: !1,
                                    timeout: 1e4
                                } : arguments[4];
                            i(this, t);
                            var y = this;
                            if (this._vpaidParentEl = e, this._flashID = v(), this._destroyed = !1, n = n || d, s.width = h(s.width, 800), s.height = h(s.height, 400), f(e, this._flashID, !0), u.movie = s.data, u.FlashVars = "flashid=" + this._flashID + "&handler=" + c.VPAID_FLASH_HANDLER + "&debug=" + g.debug + "&salign=" + u.salign, !t.isSupported()) return o("user don't support flash or doesn't have the minimum required version of flash " + m);
                            if (this.el = l.createSWF(s, u, this._flashID), !this.el) return o("swfobject failed to create object in element");
                            var b = p(g.timeout, function(t, e) {
                                r.call(a), n(t, e)
                            }, function() {
                                n("vpaid flash load timeout " + g.timeout)
                            });
                            this._flash = new c(this.el, s.data, this._flashID, s.width, s.height, b)
                        }
                        return a(t, [{
                            key: "destroy",
                            value: function() {
                                this._destroyAdUnit(), this._flash && (this._flash.destroy(), this._flash = null), this.el = null, this._destroyed = !0
                            }
                        }, {
                            key: "isDestroyed",
                            value: function() {
                                return this._destroyed
                            }
                        }, {
                            key: "_destroyAdUnit",
                            value: function() {
                                delete this._loadLater, this._adUnitLoad && (this._adUnitLoad = null, this._flash.removeCallback(this._adUnitLoad)), this._adUnit && (this._adUnit._destroy(), this._adUnit = null)
                            }
                        }, {
                            key: "loadAdUnit",
                            value: function(t, e) {
                                var n = this;
                                o.call(this), this._adUnit && this._destroyAdUnit(), this._flash.isReady() ? (this._adUnitLoad = function(t, i) {
                                    t || (n._adUnit = new u(n._flash)), n._adUnitLoad = null, e(t, n._adUnit)
                                }, this._flash.callFlashMethod("loadAdUnit", [t], this._adUnitLoad)) : this._loadLater = {
                                    url: t,
                                    callback: e
                                }
                            }
                        }, {
                            key: "unloadAdUnit",
                            value: function() {
                                var t = arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0];
                                o.call(this), this._destroyAdUnit(), this._flash.callFlashMethod("unloadAdUnit", [], t)
                            }
                        }, {
                            key: "getFlashID",
                            value: function() {
                                return o.call(this), this._flash.getFlashID()
                            }
                        }, {
                            key: "getFlashURL",
                            value: function() {
                                return o.call(this), this._flash.getFlashURL()
                            }
                        }]), t
                    }();
                s("isSupported", function() {
                    return !0
                }, !0), s("runFlashTest", function(t) {
                    g = !0
                }), y.swfobject = l, e.exports = y
            }, {
                "./VPAIDAdUnit": 2,
                "./flashTester.js": 4,
                "./jsFlashBridge": 5,
                "./utils": 8,
                swfobject: 14
            }
        ],
        4: [
            function(t, e, n) {
                "use strict";

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                            }
                        }
                        return function(e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e
                        }
                    }(),
                    r = t("swfobject"),
                    s = "vpaid_video_flash_tester",
                    a = "vpaid_video_flash_tester_el",
                    l = t("./jsFlashBridge").JSFlashBridge,
                    c = t("./utils"),
                    u = t("./registry").MultipleValuesRegistry,
                    d = function() {
                        function t(e) {
                            var n = this,
                                o = arguments.length <= 1 || void 0 === arguments[1] ? {
                                    data: "VPAIDFlash.swf",
                                    width: 800,
                                    height: 400
                                } : arguments[1];
                            i(this, t), this.parentEl = c.createElementWithID(e, a), c.hideFlashEl(this.parentEl);
                            var s = {};
                            s.movie = o.data, s.FlashVars = "flashid=" + a + "&handler=" + l.VPAID_FLASH_HANDLER, s.allowScriptAccess = "always", this.el = r.createSWF(o, s, a), this._handlers = new u, this._isSupported = !1, this.el && (c.hideFlashEl(this.el), this._flash = new l(this.el, o.data, a, o.width, o.height, function() {
                                var t = !0;
                                n._isSupported = t, n._handlers.get("change").forEach(function(e) {
                                    setTimeout(function() {
                                        e("change", t)
                                    }, 0)
                                })
                            }))
                        }
                        return o(t, [{
                            key: "isSupported",
                            value: function() {
                                return this._isSupported
                            }
                        }, {
                            key: "on",
                            value: function(t, e) {
                                this._handlers.add(t, e)
                            }
                        }]), t
                    }();
                n.createFlashTester = function(t, e) {
                    return window[s] || (window[s] = new d(t, e)), window[s]
                }
            }, {
                "./jsFlashBridge": 5,
                "./registry": 7,
                "./utils": 8,
                swfobject: 14
            }
        ],
        5: [
            function(t, e, n) {
                "use strict";

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e, n) {
                    var i = this;
                    setTimeout(function() {
                        var o = i._callbacks.get(t);
                        o && (i._callbacks.remove(t), o(e, n))
                    }, 0)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var r = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                            }
                        }
                        return function(e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e
                        }
                    }(),
                    s = t("./utils").unique,
                    a = t("./utils").isPositiveInt,
                    l = t("./utils").stringEndsWith,
                    c = t("./registry").SingleValueRegistry,
                    u = t("./registry").MultipleValuesRegistry,
                    d = t("./jsFlashBridgeRegistry"),
                    p = "vpaid_video_flash_handler",
                    h = "AdError",
                    f = n.JSFlashBridge = function() {
                        function t(e, n, o, r, a, l) {
                            i(this, t), this._el = e, this._flashID = o, this._flashURL = n, this._width = r, this._height = a, this._handlers = new u, this._callbacks = new c, this._uniqueMethodIdentifier = s(this._flashID), this._ready = !1, this._handShakeHandler = l, d.addInstance(this._flashID, this)
                        }
                        return r(t, [{
                            key: "on",
                            value: function(t, e) {
                                this._handlers.add(t, e)
                            }
                        }, {
                            key: "off",
                            value: function(t, e) {
                                return this._handlers.remove(t, e)
                            }
                        }, {
                            key: "offEvent",
                            value: function(t) {
                                return this._handlers.removeByKey(t)
                            }
                        }, {
                            key: "offAll",
                            value: function() {
                                return this._handlers.removeAll()
                            }
                        }, {
                            key: "callFlashMethod",
                            value: function(t) {
                                var e = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1],
                                    n = arguments.length <= 2 || void 0 === arguments[2] ? void 0 : arguments[2],
                                    i = "";
                                n && (i = this._uniqueMethodIdentifier() + "_" + t, this._callbacks.add(i, n));
                                try {
                                    this._el[t]([i].concat(e))
                                } catch (r) {
                                    n ? o.call(this, i, r) : this._trigger(h, r)
                                }
                            }
                        }, {
                            key: "removeCallback",
                            value: function(t) {
                                return this._callbacks.removeByValue(t)
                            }
                        }, {
                            key: "removeCallbackByMethodName",
                            value: function(t) {
                                var e = this;
                                this._callbacks.filterKeys(function(e) {
                                    return l(e, t)
                                }).forEach(function(t) {
                                    e._callbacks.remove(t)
                                })
                            }
                        }, {
                            key: "removeAllCallbacks",
                            value: function() {
                                return this._callbacks.removeAll()
                            }
                        }, {
                            key: "_trigger",
                            value: function(t, e) {
                                var n = this;
                                this._handlers.get(t).forEach(function(i) {
                                    "AdClickThru" === t ? i(e) : setTimeout(function() {
                                        n._handlers.get(t).length > 0 && i(e)
                                    }, 0)
                                })
                            }
                        }, {
                            key: "_callCallback",
                            value: function(t, e, n, i) {
                                var r = this._callbacks.get(e);
                                return r ? void o.call(this, e, n, i) : void(n && "" === e && this.trigger(h, n))
                            }
                        }, {
                            key: "_handShake",
                            value: function(t, e) {
                                this._ready = !0, this._handShakeHandler && (this._handShakeHandler(t, e), delete this._handShakeHandler)
                            }
                        }, {
                            key: "getSize",
                            value: function() {
                                return {
                                    width: this._width,
                                    height: this._height
                                }
                            }
                        }, {
                            key: "setSize",
                            value: function(t, e) {
                                this._width = a(t, this._width), this._height = a(e, this._height), this._el.setAttribute("width", this._width), this._el.setAttribute("height", this._height)
                            }
                        }, {
                            key: "getWidth",
                            value: function() {
                                return this._width
                            }
                        }, {
                            key: "setWidth",
                            value: function(t) {
                                this.setSize(t, this._height)
                            }
                        }, {
                            key: "getHeight",
                            value: function() {
                                return this._height
                            }
                        }, {
                            key: "setHeight",
                            value: function(t) {
                                this.setSize(this._width, t)
                            }
                        }, {
                            key: "getFlashID",
                            value: function() {
                                return this._flashID
                            }
                        }, {
                            key: "getFlashURL",
                            value: function() {
                                return this._flashURL
                            }
                        }, {
                            key: "isReady",
                            value: function() {
                                return this._ready
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.offAll(), this.removeAllCallbacks(), d.removeInstanceByID(this._flashID), this._el.parentElement && this._el.parentElement.removeChild(this._el)
                            }
                        }]), t
                    }();
                Object.defineProperty(f, "VPAID_FLASH_HANDLER", {
                    writable: !1,
                    configurable: !1,
                    value: p
                }), window[p] = function(t, e, n, i, o, r) {
                    var s = d.getInstanceByID(t);
                    s && ("handShake" === n ? s._handShake(o, r) : "event" !== e ? s._callCallback(n, i, o, r) : s._trigger(n, r))
                }
            }, {
                "./jsFlashBridgeRegistry": 6,
                "./registry": 7,
                "./utils": 8
            }
        ],
        6: [
            function(t, e, n) {
                "use strict";
                var i = t("./registry").SingleValueRegistry,
                    o = new i,
                    r = {};
                Object.defineProperty(r, "addInstance", {
                    writable: !1,
                    configurable: !1,
                    value: function(t, e) {
                        o.add(t, e)
                    }
                }), Object.defineProperty(r, "getInstanceByID", {
                    writable: !1,
                    configurable: !1,
                    value: function(t) {
                        return o.get(t)
                    }
                }), Object.defineProperty(r, "removeInstanceByID", {
                    writable: !1,
                    configurable: !1,
                    value: function(t) {
                        return o.remove(t)
                    }
                }), e.exports = r
            }, {
                "./registry": 7
            }
        ],
        7: [
            function(t, e, n) {
                "use strict";

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }
                    return function(e, n, i) {
                        return n && t(e.prototype, n), i && t(e, i), e
                    }
                }();
                n.MultipleValuesRegistry = function() {
                    function t() {
                        i(this, t), this._registries = {}
                    }
                    return o(t, [{
                        key: "add",
                        value: function(t, e) {
                            this._registries[t] || (this._registries[t] = []), -1 === this._registries[t].indexOf(e) && this._registries[t].push(e)
                        }
                    }, {
                        key: "get",
                        value: function(t) {
                            return this._registries[t] || []
                        }
                    }, {
                        key: "filterKeys",
                        value: function(t) {
                            return Object.keys(this._registries).filter(t)
                        }
                    }, {
                        key: "findByValue",
                        value: function(t) {
                            var e = this,
                                n = Object.keys(this._registries).filter(function(n) {
                                    return -1 !== e._registries[n].indexOf(t)
                                });
                            return n
                        }
                    }, {
                        key: "remove",
                        value: function(t, e) {
                            if (this._registries[t]) {
                                var n = this._registries[t].indexOf(e);
                                if (!(0 > n)) return this._registries[t].splice(n, 1)
                            }
                        }
                    }, {
                        key: "removeByKey",
                        value: function(t) {
                            var e = this._registries[t];
                            return delete this._registries[t], e
                        }
                    }, {
                        key: "removeByValue",
                        value: function(t) {
                            var e = this,
                                n = this.findByValue(t);
                            return n.map(function(n) {
                                return e.remove(n, t)
                            })
                        }
                    }, {
                        key: "removeAll",
                        value: function() {
                            var t = this._registries;
                            return this._registries = {}, t
                        }
                    }, {
                        key: "size",
                        value: function() {
                            return Object.keys(this._registries).length
                        }
                    }]), t
                }(), n.SingleValueRegistry = function() {
                    function t() {
                        i(this, t), this._registries = {}
                    }
                    return o(t, [{
                        key: "add",
                        value: function(t, e) {
                            this._registries[t] = e
                        }
                    }, {
                        key: "get",
                        value: function(t) {
                            return this._registries[t]
                        }
                    }, {
                        key: "filterKeys",
                        value: function(t) {
                            return Object.keys(this._registries).filter(t)
                        }
                    }, {
                        key: "findByValue",
                        value: function(t) {
                            var e = this,
                                n = Object.keys(this._registries).filter(function(n) {
                                    return e._registries[n] === t
                                });
                            return n
                        }
                    }, {
                        key: "remove",
                        value: function(t) {
                            var e = this._registries[t];
                            return delete this._registries[t], e
                        }
                    }, {
                        key: "removeByValue",
                        value: function(t) {
                            var e = this,
                                n = this.findByValue(t);
                            return n.map(function(t) {
                                return e.remove(t)
                            })
                        }
                    }, {
                        key: "removeAll",
                        value: function() {
                            var t = this._registries;
                            return this._registries = {}, t
                        }
                    }, {
                        key: "size",
                        value: function() {
                            return Object.keys(this._registries).length
                        }
                    }]), t
                }()
            }, {}
        ],
        8: [
            function(t, e, n) {
                "use strict";

                function i(t) {
                    var e = -1;
                    return function(n) {
                        return t + "_" + ++e
                    }
                }

                function o() {}

                function r(t, e, n) {
                    var i = setTimeout(function() {
                        e = o, n()
                    }, t);
                    return function() {
                        clearTimeout(i), e.apply(this, arguments)
                    }
                }

                function s(t, e) {
                    var n = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
                        i = document.createElement("div");
                    return i.id = e, n && (t.innerHTML = ""), t.appendChild(i), i
                }

                function a(t, e) {
                    return !isNaN(parseFloat(t)) && isFinite(t) && t > 0 ? t : e
                }

                function l(t, e) {
                    return u.call(t, e)
                }

                function c(t) {
                    t.style.position = "absolute", t.style.left = "-1px", t.style.top = "-1px", t.style.width = "1px", t.style.height = "1px"
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.unique = i, n.noop = o, n.callbackTimeout = r, n.createElementWithID = s, n.isPositiveInt = a, n.stringEndsWith = l, n.hideFlashEl = c;
                var u = function() {
                    return String.prototype.endsWith ? String.prototype.endsWith : function(t, e) {
                        var n = this.toString();
                        (void 0 === e || e > n.length) && (e = n.length), e -= t.length;
                        var i = n.indexOf(t, e);
                        return -1 !== i && i === e
                    }
                }()
            }, {}
        ],
        9: [
            function(t, e, n) {
                "use strict";

                function i(t, e, n) {}

                function o(t, e, n) {
                    Object.defineProperty(t, e, {
                        writable: !1,
                        configurable: !1,
                        value: n
                    })
                }
                var r = ["handshakeVersion", "initAd", "startAd", "stopAd", "skipAd", "resizeAd", "pauseAd", "resumeAd", "expandAd", "collapseAd", "subscribe", "unsubscribe"],
                    s = ["AdLoaded", "AdStarted", "AdStopped", "AdSkipped", "AdSkippableStateChange", "AdSizeChange", "AdLinearChange", "AdDurationChange", "AdExpandedChange", "AdRemainingTimeChange", "AdVolumeChange", "AdImpression", "AdVideoStart", "AdVideoFirstQuartile", "AdVideoMidpoint", "AdVideoThirdQuartile", "AdVideoComplete", "AdClickThru", "AdInteraction", "AdUserAcceptInvitation", "AdUserMinimize", "AdUserClose", "AdPaused", "AdPlaying", "AdLog", "AdError"],
                    a = ["getAdLinear", "getAdWidth", "getAdHeight", "getAdExpanded", "getAdSkippableState", "getAdRemainingTime", "getAdDuration", "getAdVolume", "getAdCompanions", "getAdIcons"],
                    l = ["setAdVolume"];
                i.prototype.handshakeVersion = function(t, e) {}, i.prototype.initAd = function(t, e, n, i, o, r, s) {}, i.prototype.startAd = function(t) {}, i.prototype.stopAd = function(t) {}, i.prototype.skipAd = function(t) {}, i.prototype.resizeAd = function(t, e, n, i) {}, i.prototype.pauseAd = function(t) {}, i.prototype.resumeAd = function(t) {}, i.prototype.expandAd = function(t) {}, i.prototype.collapseAd = function(t) {}, i.prototype.subscribe = function(t, e, n) {}, i.prototype.unsubscribe = function(t, e) {}, i.prototype.getAdLinear = function(t) {}, i.prototype.getAdWidth = function(t) {}, i.prototype.getAdHeight = function(t) {}, i.prototype.getAdExpanded = function(t) {}, i.prototype.getAdSkippableState = function(t) {}, i.prototype.getAdRemainingTime = function(t) {}, i.prototype.getAdDuration = function(t) {}, i.prototype.getAdVolume = function(t) {}, i.prototype.getAdCompanions = function(t) {}, i.prototype.getAdIcons = function(t) {}, i.prototype.setAdVolume = function(t, e) {}, o(i, "METHODS", r), o(i, "GETTERS", a), o(i, "SETTERS", l), o(i, "EVENTS", s);
                var c = r.filter(function(t) {
                    return -1 === ["skipAd"].indexOf(t)
                });
                o(i, "checkVPAIDInterface", function(t) {
                    var e = c.every(function(e) {
                        return "function" == typeof t[e]
                    });
                    return e
                }), e.exports = i
            }, {}
        ],
        10: [
            function(t, e, n) {
                "use strict";

                function i(t, e, n, i) {
                    this._isValid = u(t), this._isValid && (this._creative = t, this._el = e, this._videoEl = n, this._iframe = i, this._subscribers = new c, o.call(this))
                }

                function o() {
                    if (f.forEach(function(t) {
                        this._creative.subscribe(s.bind(this, t), t)
                    }.bind(this)), this._creative.subscribe(r.bind(this), h), this._videoEl) {
                        var t = this._iframe.contentDocument.documentElement,
                            e = this._videoEl;
                        t.addEventListener("click", function(n) {
                            n.target === t && e.click()
                        })
                    }
                }

                function r(t, e, n) {
                    this._subscribers.triggerSync(h, {
                        url: t,
                        id: e,
                        playerHandles: n
                    })
                }

                function s(t) {
                    this._subscribers.trigger(t, Array.prototype.slice(arguments, 1))
                }

                function a(t, e, n, i) {
                    t ? t(n, i) : n && e.trigger(p, n)
                }
                var l = t("./IVPAIDAdUnit"),
                    c = t("./subscriber"),
                    u = l.checkVPAIDInterface,
                    d = t("./utils"),
                    p = (l.METHODS, "AdError"),
                    h = "AdClickThru",
                    f = l.EVENTS.filter(function(t) {
                        return t != h
                    });
                i.prototype = Object.create(l.prototype), i.prototype.isValidVPAIDAd = function() {
                    return this._isValid
                }, l.METHODS.forEach(function(t) {
                    var e = ["subscribe", "unsubscribe", "initAd"]; - 1 === e.indexOf(t) && (i.prototype[t] = function() {
                        var e = l.prototype[t].length,
                            n = Array.prototype.slice.call(arguments),
                            i = e === n.length ? n.pop() : void 0;
                        setTimeout(function() {
                            var e, o = null;
                            try {
                                e = this._creative[t].apply(this._creative, n)
                            } catch (r) {
                                o = r
                            }
                            a(i, this._subscribers, o, e)
                        }.bind(this), 0)
                    })
                }), i.prototype.initAd = function(t, e, n, i, o, r, s) {
                    o = o || {}, r = d.extend({
                        slot: this._el,
                        videoSlot: this._videoEl
                    }, r || {}), setTimeout(function() {
                        var l;
                        try {
                            this._creative.initAd(t, e, n, i, o, r)
                        } catch (c) {
                            l = c
                        }
                        a(s, this._subscribers, l)
                    }.bind(this), 0)
                }, i.prototype.subscribe = function(t, e, n) {
                    this._subscribers.subscribe(e, t, n)
                }, i.prototype.unsubscribe = function(t, e) {
                    this._subscribers.unsubscribe(e, t)
                }, i.prototype.on = i.prototype.subscribe, i.prototype.off = i.prototype.unsubscribe, l.GETTERS.forEach(function(t) {
                    i.prototype[t] = function(e) {
                        setTimeout(function() {
                            var n, i = null;
                            try {
                                n = this._creative[t]()
                            } catch (o) {
                                i = o
                            }
                            a(e, this._subscribers, i, n)
                        }.bind(this), 0)
                    }
                }), i.prototype.setAdVolume = function(t, e) {
                    setTimeout(function() {
                        var n, i = null;
                        try {
                            this._creative.setAdVolume(t), n = this._creative.getAdVolume()
                        } catch (o) {
                            i = o
                        }
                        i || (i = d.validate(n === t, "failed to apply volume: " + t)), a(e, this._subscribers, i, n)
                    }.bind(this), 0)
                }, i.prototype._destroy = function() {
                    this.stopAd(), this._subscribers.unsubscribeAll()
                }, e.exports = i
            }, {
                "./IVPAIDAdUnit": 9,
                "./subscriber": 12,
                "./utils": 13
            }
        ],
        11: [
            function(t, e, n) {
                "use strict";

                function i(t, e, n, i) {
                    n = n || {}, this._id = h(), this._destroyed = !1, this._frameContainer = p.createElementInEl(t, "div"), this._videoEl = e, this._vpaidOptions = i || {
                        timeout: 1e4
                    }, this._templateConfig = {
                        template: n.template || v,
                        extraOptions: n.extraOptions || {}
                    }
                }

                function o(t) {
                    var e = this[t];
                    e && (e.remove(), delete this[t])
                }

                function r() {
                    a.call(this), delete this._adUnit
                }

                function s() {
                    a.call(this), c.call(this)
                }

                function a() {
                    o.call(this, "_frame"), l.call(this)
                }

                function l() {
                    this._onLoad && (window.removeEventListener("message", this._onLoad), p.clearCallbackTimeout(this._onLoad), delete this._onLoad)
                }

                function c() {
                    this._adUnit && (this._adUnit.stopAd(), delete this._adUnit)
                }

                function u() {
                    if (this._destroyed) throw new Error("VPAIDHTML5Client already destroyed!")
                }

                function d() {
                    return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
                }
                var p = t("./utils"),
                    h = p.unique("vpaidIframe"),
                    f = t("./VPAIDAdUnit"),
                    v = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head><body style="margin:0;padding:0"><div class="ad-element"></div><script type="text/javascript" src="{{iframeURL_JS}}"></script><script type="text/javascript">window.parent.postMessage(\'{"event": "ready", "id": "{{iframeID}}"}\', \'{{origin}}\');</script></body></html>',
                    m = "AdStopped";
                i.prototype.destroy = function() {
                    this._destroyed || (this._destroyed = !0, s.call(this))
                }, i.prototype.isDestroyed = function() {
                    return this._destroyed
                }, i.prototype.loadAdUnit = function(t, e) {
                    function n(t) {
                        if (t.origin === d()) {
                            var n = JSON.parse(t.data);
                            if (n.id === o.getID()) {
                                var i, s, a;
                                if (o._frame.contentWindow ? (a = o._frame.contentWindow.getVPAIDAd, s = p.validate("function" == typeof a, "the ad didn't return a function to create an ad")) : s = "the iframe is not anymore in the DOM tree", !s) {
                                    var c = o._frame.contentWindow.document.querySelector(".ad-element");
                                    i = new f(a(), c, o._videoEl, o._frame), i.subscribe(m, r.bind(o)), s = p.validate(i.isValidVPAIDAd(), "the add is not fully complaint with VPAID specification")
                                }
                                return o._adUnit = i, l.call(o), e(s, s ? null : i), !0
                            }
                        }
                    }

                    function i() {
                        e("timeout", null)
                    }
                    u.call(this), s.call(this);
                    var o = this,
                        a = p.createIframeWithContent(this._frameContainer, this._templateConfig.template, p.extend({
                            iframeURL_JS: t,
                            iframeID: this.getID(),
                            origin: d()
                        }, this._templateConfig.extraOptions));
                    this._frame = a, this._onLoad = p.callbackTimeout(this._vpaidOptions.timeout, n.bind(this), i.bind(this)), window.addEventListener("message", this._onLoad)
                }, i.prototype.unloadAdUnit = function() {
                    s.call(this)
                }, i.prototype.getID = function() {
                    return this._id
                }, e.exports = i, window.VPAIDHTML5Client = i
            }, {
                "./VPAIDAdUnit": 10,
                "./utils": 13
            }
        ],
        12: [
            function(t, e, n) {
                "use strict";

                function i() {
                    this._subscribers = {}
                }
                i.prototype.subscribe = function(t, e, n) {
                    this.isHandlerAttached(t, e) || this.get(e).push({
                        handler: t,
                        context: n,
                        eventName: e
                    })
                }, i.prototype.unsubscribe = function(t, e) {
                    this._subscribers[e] = this.get(e).filter(function(e) {
                        return t !== e.handler
                    })
                }, i.prototype.unsubscribeAll = function() {
                    this._subscribers = {}
                }, i.prototype.trigger = function(t, e) {
                    var n = this,
                        i = this.get(t).concat(this.get("*"));
                    i.forEach(function(t) {
                        setTimeout(function() {
                            n.isHandlerAttached(t.handler, t.eventName) && t.handler.call(t.context, e)
                        }, 0)
                    })
                }, i.prototype.triggerSync = function(t, e) {
                    var n = this.get(t).concat(this.get("*"));
                    n.forEach(function(t) {
                        t.handler.call(t.context, e)
                    })
                }, i.prototype.get = function(t) {
                    return this._subscribers[t] || (this._subscribers[t] = []), this._subscribers[t]
                }, i.prototype.isHandlerAttached = function(t, e) {
                    return this.get(e).some(function(e) {
                        return t === e.handler
                    })
                }, e.exports = i
            }, {}
        ],
        13: [
            function(t, e, n) {
                "use strict";

                function i() {}

                function o(t, e) {
                    return t ? null : new Error(e)
                }

                function r(t) {
                    var e = f[t];
                    e && (clearTimeout(e), delete f[t])
                }

                function s(t, e, n) {
                    var o, s;
                    return s = setTimeout(function() {
                        e = i, delete s[o], n()
                    }, t), o = function() {
                        e.apply(this, arguments) && r(o)
                    }, f[o] = s, o
                }

                function a(t, e, n) {
                    var i = document.createElement(e);
                    return n && (i.id = n), t.appendChild(i), i
                }

                function l(t, e, n) {
                    var i = c(t, null, n.zIndex);
                    if (d(i, u(e, n))) return i
                }

                function c(t, e, n) {
                    var i = document.createElement("iframe");
                    return i.src = e || "about:blank", i.marginWidth = "0", i.marginHeight = "0", i.frameBorder = "0", i.width = "100%", i.height = "100%", i.style.position = "absolute", i.style.left = "0", i.style.top = "0", i.style.margin = "0px", i.style.padding = "0px", i.style.border = "none", n && (i.style.zIndex = n), i.setAttribute("SCROLLING", "NO"), t.innerHTML = "", t.appendChild(i), i
                }

                function u(t, e) {
                    return Object.keys(e).forEach(function(n) {
                        var i = "object" == typeof i ? JSON.stringify(e[n]) : e[n];
                        t = t.replace(new RegExp("{{" + n + "}}", "g"), i)
                    }), t
                }

                function d(t, e) {
                    var n = t.contentWindow && t.contentWindow.document;
                    return n ? (n.write(e), !0) : !1
                }

                function p(t, e) {
                    return Object.keys(e).forEach(function(n) {
                        t[n] = e[n]
                    }), t
                }

                function h(t) {
                    var e = -1;
                    return function() {
                        return t + "_" + ++e
                    }
                }
                var f = {};
                e.exports = {
                    noop: i,
                    validate: o,
                    clearCallbackTimeout: r,
                    callbackTimeout: s,
                    createElementInEl: a,
                    createIframeWithContent: l,
                    createIframe: c,
                    simpleTemplate: u,
                    setIframeContent: d,
                    extend: p,
                    unique: h
                }
            }, {}
        ],
        14: [
            function(t, e, n) {
                ! function(t, n) {
                    "function" == typeof define && define.amd ? define("vastvpaid", n) : "object" == typeof e && e.exports ? e.exports = n() : t.swfobject = n()
                }(this, function() {
                    function t() {
                        if (!$ && document.getElementsByTagName("body")[0]) {
                            try {
                                var t, e = g("span");
                                e.style.display = "none", t = R.getElementsByTagName("body")[0].appendChild(e), t.parentNode.removeChild(t), t = null, e = null
                            } catch (n) {
                                return
                            }
                            $ = !0;
                            for (var i = B.length, o = 0; i > o; o++) B[o]()
                        }
                    }

                    function e(t) {
                        $ ? t() : B[B.length] = t
                    }

                    function n(t) {
                        if (typeof D.addEventListener !== I) D.addEventListener("load", t, !1);
                        else if (typeof R.addEventListener !== I) R.addEventListener("load", t, !1);
                        else if (typeof D.attachEvent !== I) b(D, "onload", t);
                        else if ("function" == typeof D.onload) {
                            var e = D.onload;
                            D.onload = function() {
                                e(), t()
                            }
                        } else D.onload = t
                    }

                    function i() {
                        var t = R.getElementsByTagName("body")[0],
                            e = g(L);
                        e.setAttribute("style", "visibility: hidden;"), e.setAttribute("type", N);
                        var n = t.appendChild(e);
                        if (n) {
                            var i = 0;
                            ! function r() {
                                if (typeof n.GetVariable !== I) try {
                                    var s = n.GetVariable("$version");
                                    s && (s = s.split(" ")[1].split(","), J.pv = [y(s[0]), y(s[1]), y(s[2])])
                                } catch (a) {
                                    J.pv = [8, 0, 0]
                                } else if (10 > i) return i++, void setTimeout(r, 10);
                                t.removeChild(e), n = null, o()
                            }()
                        } else o()
                    }

                    function o() {
                        var t = H.length;
                        if (t > 0)
                            for (var e = 0; t > e; e++) {
                                var n = H[e].id,
                                    i = H[e].callbackFn,
                                    o = {
                                        success: !1,
                                        id: n
                                    };
                                if (J.pv[0] > 0) {
                                    var c = m(n);
                                    if (c)
                                        if (!w(H[e].swfVersion) || J.wk && J.wk < 312)
                                            if (H[e].expressInstall && s()) {
                                                var u = {};
                                                u.data = H[e].expressInstall, u.width = c.getAttribute("width") || "0", u.height = c.getAttribute("height") || "0", c.getAttribute("class") && (u.styleclass = c.getAttribute("class")), c.getAttribute("align") && (u.align = c.getAttribute("align"));
                                                for (var d = {}, p = c.getElementsByTagName("param"), h = p.length, f = 0; h > f; f++) "movie" !== p[f].getAttribute("name").toLowerCase() && (d[p[f].getAttribute("name")] = p[f].getAttribute("value"));
                                                a(u, d, n, i)
                                            } else l(c), i && i(o);
                                    else k(n, !0), i && (o.success = !0, o.ref = r(n), o.id = n, i(o))
                                } else if (k(n, !0), i) {
                                    var v = r(n);
                                    v && typeof v.SetVariable !== I && (o.success = !0, o.ref = v, o.id = v.id), i(o)
                                }
                            }
                    }

                    function r(t) {
                        var e = null,
                            n = m(t);
                        return n && "OBJECT" === n.nodeName.toUpperCase() && (e = typeof n.SetVariable !== I ? n : n.getElementsByTagName(L)[0] || n), e
                    }

                    function s() {
                        return !W && w("6.0.65") && (J.win || J.mac) && !(J.wk && J.wk < 312)
                    }

                    function a(t, e, n, i) {
                        var o = m(n);
                        if (n = v(n), W = !0, C = i || null, E = {
                            success: !1,
                            id: n
                        }, o) {
                            "OBJECT" === o.nodeName.toUpperCase() ? (j = c(o), S = null) : (j = o, S = n), t.id = F, (typeof t.width === I || !/%$/.test(t.width) && y(t.width) < 310) && (t.width = "310"), (typeof t.height === I || !/%$/.test(t.height) && y(t.height) < 137) && (t.height = "137");
                            var r = J.ie ? "ActiveX" : "PlugIn",
                                s = "MMredirectURL=" + encodeURIComponent(D.location.toString().replace(/&/g, "%26")) + "&MMplayerType=" + r + "&MMdoctitle=" + encodeURIComponent(R.title.slice(0, 47) + " - Flash Player Installation");
                            if (typeof e.flashvars !== I ? e.flashvars += "&" + s : e.flashvars = s, J.ie && 4 != o.readyState) {
                                var a = g("div");
                                n += "SWFObjectNew", a.setAttribute("id", n), o.parentNode.insertBefore(a, o), o.style.display = "none", h(o)
                            }
                            d(t, e, n)
                        }
                    }

                    function l(t) {
                        if (J.ie && 4 != t.readyState) {
                            t.style.display = "none";
                            var e = g("div");
                            t.parentNode.insertBefore(e, t), e.parentNode.replaceChild(c(t), e), h(t)
                        } else t.parentNode.replaceChild(c(t), t)
                    }

                    function c(t) {
                        var e = g("div");
                        if (J.win && J.ie) e.innerHTML = t.innerHTML;
                        else {
                            var n = t.getElementsByTagName(L)[0];
                            if (n) {
                                var i = n.childNodes;
                                if (i)
                                    for (var o = i.length, r = 0; o > r; r++) 1 == i[r].nodeType && "PARAM" === i[r].nodeName || 8 == i[r].nodeType || e.appendChild(i[r].cloneNode(!0))
                            }
                        }
                        return e
                    }

                    function u(t, e) {
                        var n = g("div");
                        return n.innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='" + t + "'>" + e + "</object>", n.firstChild
                    }

                    function d(t, e, n) {
                        var i, o = m(n);
                        if (n = v(n), J.wk && J.wk < 312) return i;
                        if (o) {
                            var r, s, a, l = g(J.ie ? "div" : L);
                            typeof t.id === I && (t.id = n);
                            for (a in e) e.hasOwnProperty(a) && "movie" !== a.toLowerCase() && p(l, a, e[a]);
                            J.ie && (l = u(t.data, l.innerHTML));
                            for (r in t) t.hasOwnProperty(r) && (s = r.toLowerCase(), "styleclass" === s ? l.setAttribute("class", t[r]) : "classid" !== s && "data" !== s && l.setAttribute(r, t[r]));
                            J.ie ? q[q.length] = t.id : (l.setAttribute("type", N), l.setAttribute("data", t.data)), o.parentNode.replaceChild(l, o), i = l
                        }
                        return i
                    }

                    function p(t, e, n) {
                        var i = g("param");
                        i.setAttribute("name", e), i.setAttribute("value", n), t.appendChild(i)
                    }

                    function h(t) {
                        var e = m(t);
                        e && "OBJECT" === e.nodeName.toUpperCase() && (J.ie ? (e.style.display = "none", function n() {
                            if (4 == e.readyState) {
                                for (var t in e) "function" == typeof e[t] && (e[t] = null);
                                e.parentNode.removeChild(e)
                            } else setTimeout(n, 10)
                        }()) : e.parentNode.removeChild(e))
                    }

                    function f(t) {
                        return t && t.nodeType && 1 === t.nodeType
                    }

                    function v(t) {
                        return f(t) ? t.id : t
                    }

                    function m(t) {
                        if (f(t)) return t;
                        var e = null;
                        try {
                            e = R.getElementById(t)
                        } catch (n) {}
                        return e
                    }

                    function g(t) {
                        return R.createElement(t)
                    }

                    function y(t) {
                        return parseInt(t, 10)
                    }

                    function b(t, e, n) {
                        t.attachEvent(e, n), z[z.length] = [t, e, n]
                    }

                    function w(t) {
                        t += "";
                        var e = J.pv,
                            n = t.split(".");
                        return n[0] = y(n[0]), n[1] = y(n[1]) || 0, n[2] = y(n[2]) || 0, e[0] > n[0] || e[0] == n[0] && e[1] > n[1] || e[0] == n[0] && e[1] == n[1] && e[2] >= n[2] ? !0 : !1
                    }

                    function T(t, e, n, i) {
                        var o = R.getElementsByTagName("head")[0];
                        if (o) {
                            var r = "string" == typeof n ? n : "screen";
                            if (i && (x = null, _ = null), !x || _ != r) {
                                var s = g("style");
                                s.setAttribute("type", "text/css"), s.setAttribute("media", r), x = o.appendChild(s), J.ie && typeof R.styleSheets !== I && R.styleSheets.length > 0 && (x = R.styleSheets[R.styleSheets.length - 1]), _ = r
                            }
                            x && (typeof x.addRule !== I ? x.addRule(t, e) : typeof R.createTextNode !== I && x.appendChild(R.createTextNode(t + " {" + e + "}")))
                        }
                    }

                    function k(t, e) {
                        if (Q) {
                            var n = e ? "visible" : "hidden",
                                i = m(t);
                            $ && i ? i.style.visibility = n : "string" == typeof t && T("#" + t, "visibility:" + n)
                        }
                    }

                    function A(t) {
                        var e = /[\\\"<>\.;]/,
                            n = null !== e.exec(t);
                        return n && typeof encodeURIComponent !== I ? encodeURIComponent(t) : t
                    }
                    var j, S, C, E, x, _, I = "undefined",
                        L = "object",
                        M = "Shockwave Flash",
                        P = "ShockwaveFlash.ShockwaveFlash",
                        N = "application/x-shockwave-flash",
                        F = "SWFObjectExprInst",
                        V = "onreadystatechange",
                        D = window,
                        R = document,
                        O = navigator,
                        U = !1,
                        B = [],
                        H = [],
                        q = [],
                        z = [],
                        $ = !1,
                        W = !1,
                        Q = !0,
                        X = !1,
                        J = function() {
                            var t = typeof R.getElementById !== I && typeof R.getElementsByTagName !== I && typeof R.createElement !== I,
                                e = O.userAgent.toLowerCase(),
                                n = O.platform.toLowerCase(),
                                i = n ? /win/.test(n) : /win/.test(e),
                                o = n ? /mac/.test(n) : /mac/.test(e),
                                r = /webkit/.test(e) ? parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                                s = "Microsoft Internet Explorer" === O.appName,
                                a = [0, 0, 0],
                                l = null;
                            if (typeof O.plugins !== I && typeof O.plugins[M] === L) l = O.plugins[M].description, l && typeof O.mimeTypes !== I && O.mimeTypes[N] && O.mimeTypes[N].enabledPlugin && (U = !0, s = !1, l = l.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), a[0] = y(l.replace(/^(.*)\..*$/, "$1")), a[1] = y(l.replace(/^.*\.(.*)\s.*$/, "$1")), a[2] = /[a-zA-Z]/.test(l) ? y(l.replace(/^.*[a-zA-Z]+(.*)$/, "$1")) : 0);
                            else if (typeof D.ActiveXObject !== I) try {
                                var c = new ActiveXObject(P);
                                c && (l = c.GetVariable("$version"), l && (s = !0, l = l.split(" ")[1].split(","), a = [y(l[0]), y(l[1]), y(l[2])]))
                            } catch (u) {}
                            return {
                                w3: t,
                                pv: a,
                                wk: r,
                                ie: s,
                                win: i,
                                mac: o
                            }
                        }();
                    (function() {
                        J.w3 && ((typeof R.readyState !== I && ("complete" === R.readyState || "interactive" === R.readyState) || typeof R.readyState === I && (R.getElementsByTagName("body")[0] || R.body)) && t(), $ || (typeof R.addEventListener !== I && R.addEventListener("DOMContentLoaded", t, !1), J.ie && (R.attachEvent(V, function e() {
                            "complete" === R.readyState && (R.detachEvent(V, e), t())
                        }), D == top && ! function n() {
                            if (!$) {
                                try {
                                    R.documentElement.doScroll("left")
                                } catch (e) {
                                    return void setTimeout(n, 0)
                                }
                                t()
                            }
                        }()), J.wk && ! function i() {
                            return $ ? void 0 : /loaded|complete/.test(R.readyState) ? void t() : void setTimeout(i, 0)
                        }()))
                    })();
                    B[0] = function() {
                        U ? i() : o()
                    };
                    (function() {
                        J.ie && window.attachEvent("onunload", function() {
                            for (var t = z.length, e = 0; t > e; e++) z[e][0].detachEvent(z[e][1], z[e][2]);
                            for (var n = q.length, i = 0; n > i; i++) h(q[i]);
                            for (var o in J) J[o] = null;
                            J = null;
                            for (var r in swfobject) swfobject[r] = null;
                            swfobject = null
                        })
                    })();
                    return {
                        registerObject: function(t, e, n, i) {
                            if (J.w3 && t && e) {
                                var o = {};
                                o.id = t, o.swfVersion = e, o.expressInstall = n, o.callbackFn = i, H[H.length] = o, k(t, !1)
                            } else i && i({
                                success: !1,
                                id: t
                            })
                        },
                        getObjectById: function(t) {
                            return J.w3 ? r(t) : void 0
                        },
                        embedSWF: function(t, n, i, o, r, l, c, u, p, h) {
                            var f = v(n),
                                m = {
                                    success: !1,
                                    id: f
                                };
                            J.w3 && !(J.wk && J.wk < 312) && t && n && i && o && r ? (k(f, !1), e(function() {
                                i += "", o += "";
                                var e = {};
                                if (p && typeof p === L)
                                    for (var v in p) e[v] = p[v];
                                e.data = t, e.width = i, e.height = o;
                                var g = {};
                                if (u && typeof u === L)
                                    for (var y in u) g[y] = u[y];
                                if (c && typeof c === L)
                                    for (var b in c)
                                        if (c.hasOwnProperty(b)) {
                                            var T = X ? encodeURIComponent(b) : b,
                                                A = X ? encodeURIComponent(c[b]) : c[b];
                                            typeof g.flashvars !== I ? g.flashvars += "&" + T + "=" + A : g.flashvars = T + "=" + A
                                        }
                                if (w(r)) {
                                    var j = d(e, g, n);
                                    e.id == f && k(f, !0), m.success = !0, m.ref = j, m.id = j.id
                                } else {
                                    if (l && s()) return e.data = l, void a(e, g, n, h);
                                    k(f, !0)
                                }
                                h && h(m)
                            })) : h && h(m)
                        },
                        switchOffAutoHideShow: function() {
                            Q = !1
                        },
                        enableUriEncoding: function(t) {
                            X = typeof t === I ? !0 : t
                        },
                        ua: J,
                        getFlashPlayerVersion: function() {
                            return {
                                major: J.pv[0],
                                minor: J.pv[1],
                                release: J.pv[2]
                            }
                        },
                        hasFlashPlayerVersion: w,
                        createSWF: function(t, e, n) {
                            return J.w3 ? d(t, e, n) : void 0
                        },
                        showExpressInstall: function(t, e, n, i) {
                            J.w3 && s() && a(t, e, n, i)
                        },
                        removeSWF: function(t) {
                            J.w3 && h(t)
                        },
                        createCSS: function(t, e, n, i) {
                            J.w3 && T(t, e, n, i)
                        },
                        addDomLoadEvent: e,
                        addLoadEvent: n,
                        getQueryParamValue: function(t) {
                            var e = R.location.search || R.location.hash;
                            if (e) {
                                if (/\?/.test(e) && (e = e.split("?")[1]), !t) return A(e);
                                for (var n = e.split("&"), i = 0; i < n.length; i++)
                                    if (n[i].substring(0, n[i].indexOf("=")) == t) return A(n[i].substring(n[i].indexOf("=") + 1))
                            }
                            return ""
                        },
                        expressInstallCallback: function() {
                            if (W) {
                                var t = m(F);
                                t && j && (t.parentNode.replaceChild(j, t), S && (k(S, !0), J.ie && (j.style.display = "block")), C && C(E)), W = !1
                            }
                        },
                        version: "2.3"
                    }
                })
            }, {}
        ],
        15: [
            function(t, e, n) {
                "use strict";

                function i(t) {
                    return this instanceof i ? void this.initialize(t) : new i(t)
                }
                var o = t("./InLine"),
                    r = t("./Wrapper");
                i.prototype.initialize = function(t) {
                    this.id = t.attr("id"), this.sequence = t.attr("sequence"), t.inLine && (this.inLine = new o(t.inLine)), t.wrapper && (this.wrapper = new r(t.wrapper))
                }, e.exports = i
            }, {
                "./InLine": 18,
                "./Wrapper": 28
            }
        ],
        16: [
            function(t, e, n) {
                "use strict";

                function i(t) {
                    function e(t) {
                        var e = [];
                        return r.isDefined(t) && (t = r.isArray(t) ? t : [t], t.forEach(function(t) {
                            e.push(new o(t))
                        })), e
                    }
                    if (!(this instanceof i)) return new i(t);
                    a.info("<Companion> found companion ad"), a.debug("<Companion>  companionJTree:", t), this.creativeType = s.attr(t.staticResource, "creativeType"), this.staticResource = s.keyValue(t.staticResource), a.info("<Companion>  creativeType: " + this.creativeType), a.info("<Companion>  staticResource: " + this.staticResource);
                    var n = null;
                    s.keyValue(t.HTMLResource) ? n = s.keyValue(t.HTMLResource) : s.keyValue(t.hTMLResource) && (n = s.keyValue(t.hTMLResource)), null !== n && a.info("<Companion> found html resource", n), this.htmlResource = n;
                    var l = null;
                    s.keyValue(t.IFrameResource) ? l = s.keyValue(t.IFrameResource) : s.keyValue(t.iFrameresource) && (l = s.keyValue(t.iFrameresource)), null !== l && a.info("<Companion> found iframe resource", l), this.iframeResource = l, this.id = s.attr(t, "id"), this.width = s.attr(t, "width"), this.height = s.attr(t, "height"), this.expandedWidth = s.attr(t, "expandedWidth"), this.expandedHeight = s.attr(t, "expandedHeight"), this.scalable = s.attr(t, "scalable"), this.maintainAspectRatio = s.attr(t, "maintainAspectRatio"), this.minSuggestedDuration = s.attr(t, "minSuggestedDuration"),
                        this.apiFramework = s.attr(t, "apiFramework"), this.companionClickThrough = s.keyValue(t.companionClickThrough), this.trackingEvents = e(t.trackingEvents && t.trackingEvents.tracking), a.info("<Companion>  companionClickThrough: " + this.companionClickThrough)
                }
                var o = t("./TrackingEvent"),
                    r = t("../../utils/utilityFunctions"),
                    s = t("../../utils/xml"),
                    a = t("../../utils/consoleLogger");
                e.exports = i
            }, {
                "../../utils/consoleLogger": 41,
                "../../utils/utilityFunctions": 47,
                "../../utils/xml": 48,
                "./TrackingEvent": 21
            }
        ],
        17: [
            function(t, e, n) {
                "use strict";

                function i(t) {
                    if (!(this instanceof i)) return new i(t);
                    if (this.id = t.attr("id"), this.sequence = t.attr("sequence"), this.adId = t.attr("adId"), this.apiFramework = t.attr("apiFramework"), t.linear && (this.linear = new o(t.linear)), t.companionAds) {
                        var e = [],
                            n = t.companionAds && t.companionAds.companion;
                        s.isDefined(n) && (n = s.isArray(n) ? n : [n], n.forEach(function(t) {
                            e.push(new r(t))
                        })), this.companionAds = e
                    }
                }
                var o = t("./Linear"),
                    r = t("./Companion"),
                    s = t("../../utils/utilityFunctions");
                i.prototype.isSupported = function() {
                    return this.linear ? this.linear.isSupported() : !0
                }, i.parseCreatives = function(t) {
                    var e, n = [];
                    return s.isDefined(t) && s.isDefined(t.creative) && (e = s.isArray(t.creative) ? t.creative : [t.creative], e.forEach(function(t) {
                        n.push(new i(t))
                    })), n
                }, e.exports = i
            }, {
                "../../utils/utilityFunctions": 47,
                "./Companion": 16,
                "./Linear": 19
            }
        ],
        18: [
            function(t, e, n) {
                "use strict";

                function i(t) {
                    function e(t) {
                        return t ? s.transformArray(s.isArray(t) ? t : [t], function(t) {
                            return s.isNotEmptyString(t.keyValue) ? {
                                uri: t.keyValue,
                                type: t.attr("type")
                            } : void 0
                        }) : []
                    }
                    return this instanceof i ? (this.adTitle = a.keyValue(t.adTitle), this.adSystem = a.keyValue(t.adSystem), this.impressions = o.parseImpressions(t.impression), this.creatives = r.parseCreatives(t.creatives), this.description = a.keyValue(t.description), this.advertiser = a.keyValue(t.advertiser), this.surveys = e(t.survey), this.error = a.keyValue(t.error), this.pricing = a.keyValue(t.pricing), void(this.extensions = t.extensions)) : new i(t)
                }
                var o = t("./vastUtil"),
                    r = t("./Creative"),
                    s = t("../../utils/utilityFunctions"),
                    a = t("../../utils/xml");
                i.prototype.isSupported = function() {
                    var t, e;
                    if (0 === this.creatives.length) return !1;
                    for (t = 0, e = this.creatives.length; e > t; t += 1)
                        if (!this.creatives[t].isSupported()) return !1;
                    return !0
                }, e.exports = i
            }, {
                "../../utils/utilityFunctions": 47,
                "../../utils/xml": 48,
                "./Creative": 17,
                "./vastUtil": 30
            }
        ],
        19: [
            function(t, e, n) {
                "use strict";

                function i(t) {
                    function e(t, e) {
                        var n = [];
                        return a.isDefined(t) && (t = a.isArray(t) ? t : [t], t.forEach(function(t) {
                            n.push(new o(t, e))
                        })), n
                    }

                    function n(t) {
                        var e = [];
                        return a.isDefined(t) && (t = a.isArray(t) ? t : [t], t.forEach(function(t) {
                            e.push(new r(t))
                        })), e
                    }
                    return this instanceof i ? (this.duration = l.duration(c.keyValue(t.duration)), this.mediaFiles = n(t.mediaFiles && t.mediaFiles.mediaFile), this.trackingEvents = e(t.trackingEvents && t.trackingEvents.tracking, this.duration), this.skipoffset = l.offset(c.attr(t, "skipoffset"), this.duration), t.videoClicks && (this.videoClicks = new s(t.videoClicks)), void(t.adParameters && (this.adParameters = c.keyValue(t.adParameters), c.attr(t.adParameters, "xmlEncoded") && (this.adParameters = c.decode(this.adParameters))))) : new i(t)
                }
                var o = t("./TrackingEvent"),
                    r = t("./MediaFile"),
                    s = t("./VideoClicks"),
                    a = t("../../utils/utilityFunctions"),
                    l = t("./parsers"),
                    c = t("../../utils/xml");
                i.prototype.isSupported = function() {
                    var t, e;
                    for (t = 0, e = this.mediaFiles.length; e > t; t += 1)
                        if (this.mediaFiles[t].isSupported()) return !0;
                    return !1
                }, e.exports = i
            }, {
                "../../utils/utilityFunctions": 47,
                "../../utils/xml": 48,
                "./MediaFile": 20,
                "./TrackingEvent": 21,
                "./VideoClicks": 27,
                "./parsers": 29
            }
        ],
        20: [
            function(t, e, n) {
                "use strict";

                function i(t) {
                    if (!(this instanceof i)) return new i(t);
                    this.src = o.keyValue(t);
                    for (var e = 0; e < s.length; e++) {
                        var n = s[e];
                        this[n] = t.attr(n)
                    }
                }
                var o = t("../../utils/xml"),
                    r = t("./vastUtil"),
                    s = ["delivery", "type", "width", "height", "codec", "id", "bitrate", "minBitrate", "maxBitrate", "scalable", "maintainAspectRatio", "apiFramework"];
                i.prototype.isSupported = function() {
                    return r.isVPAID(this) ? !!r.findSupportedVPAIDTech(this.type) : "video/x-flv" === this.type ? r.isFlashSupported() : !0
                }, e.exports = i
            }, {
                "../../utils/xml": 48,
                "./vastUtil": 30
            }
        ],
        21: [
            function(t, e, n) {
                "use strict";

                function i(t, e) {
                    return this instanceof i ? (this.name = t.attr("event"), this.uri = r.keyValue(t), void("progress" === this.name && (this.offset = o.offset(t.attr("offset"), e)))) : new i(t, e)
                }
                var o = t("./parsers"),
                    r = t("../../utils/xml");
                e.exports = i
            }, {
                "../../utils/xml": 48,
                "./parsers": 29
            }
        ],
        22: [
            function(t, e, n) {
                "use strict";

                function i(t) {
                    if (!(this instanceof i)) return new i(t);
                    var e = {
                        WRAPPER_LIMIT: 5
                    };
                    t = t || {}, this.settings = u.extend({}, t, e), this.errorURLMacros = []
                }
                var o = t("./Ad"),
                    r = t("./VASTError"),
                    s = t("./VASTResponse"),
                    a = t("./vastUtil"),
                    l = t("../../utils/async"),
                    c = t("../../utils/http").http,
                    u = t("../../utils/utilityFunctions"),
                    d = t("../../utils/xml"),
                    p = t("../../utils/consoleLogger");
                i.prototype.getVASTResponse = function(t, e) {
                    function n(t, e) {
                        try {
                            var n = o._buildVASTResponse(t);
                            e(null, n)
                        } catch (i) {
                            e(i)
                        }
                    }

                    function i(t, e) {
                        return t ? u.isFunction(e) ? void 0 : new r("on VASTClient.getVASTResponse, missing callback function") : new r("on VASTClient.getVASTResponse, missing ad tag URL")
                    }
                    var o = this,
                        s = i(t, e);
                    if (s) {
                        if (u.isFunction(e)) return e(s);
                        throw s
                    }
                    l.waterfall([this._getVASTAd.bind(this, t), n], e)
                }, i.prototype._getVASTAd = function(t, e) {
                    function n(t, e) {
                        var n = v._requestVASTXml.bind(v, t);
                        l.waterfall([n, i], e)
                    }

                    function i(t, e) {
                        var n;
                        try {
                            n = d.toJXONTree(t), p.debug("built JXONTree from VAST response:", n), u.isArray(n.ad) ? n.ads = n.ad : n.ad ? n.ads = [n.ad] : n.ads = [], e(s(n), n)
                        } catch (i) {
                            e(new r("on VASTClient.getVASTAd.buildVastWaterfall, error parsing xml", 100), null)
                        }
                    }

                    function s(t) {
                        var e = d.attr(t, "version");
                        return t.ad ? e && 3 != e && 2 != e ? new r('on VASTClient.getVASTAd.validateVASTTree, not supported VAST version "' + e + '"', 102) : null : new r("on VASTClient.getVASTAd.validateVASTTree, no Ad in VAST tree", 303)
                    }

                    function a(t, e, n) {
                        return e.length >= v.WRAPPER_LIMIT ? n(new r("on VASTClient.getVASTAd.getAd, players wrapper limit reached (the limit is " + v.WRAPPER_LIMIT + ")", 302), e) : void l.waterfall([
                            function(e) {
                                u.isString(t) ? f(t, e) : e(null, t)
                            },
                            c
                        ], function(t, i) {
                            return i && e.push(i), t ? n(t, e) : i.wrapper ? a(i.wrapper.VASTAdTagURI, e, n) : n(null, e)
                        })
                    }

                    function c(t, e) {
                        try {
                            var n = new o(t);
                            e(h(n), n)
                        } catch (i) {
                            e(new r("on VASTClient.getVASTAd.buildAd, error parsing xml", 100), null)
                        }
                    }

                    function h(t) {
                        var e = t.wrapper,
                            n = t.inLine,
                            i = "on VASTClient.getVASTAd.validateAd, ";
                        return n && e ? new r(i + "InLine and Wrapper both found on the same Ad", 101) : n || e ? n && !n.isSupported() ? new r(i + "could not find MediaFile that is supported by this video player", 403) : e && !e.VASTAdTagURI ? new r(i + "missing 'VASTAdTagURI' in wrapper", 101) : null : new r(i + "nor wrapper nor inline elements found on the Ad", 101)
                    }

                    function f(t, e) {
                        v._requestVASTXml(t, function(t, n) {
                            if (t) return e(t);
                            try {
                                var i = d.toJXONTree(n);
                                e(s(i), i.ad)
                            } catch (o) {
                                e(new r("on VASTClient.getVASTAd.requestVASTAd, error parsing xml", 100))
                            }
                        })
                    }
                    var v = this;
                    n(t, function(t, n) {
                        function i(t, n) {
                            t ? (v._trackError(t, n), o.length > 0 ? a(o.shift(), [], i) : e(t, n)) : e(null, n)
                        }
                        var o = n && u.isArray(n.ads) ? n.ads : null;
                        return t ? (v._trackError(t, o), e(t, o)) : void a(o.shift(), [], i)
                    })
                }, i.prototype._requestVASTXml = function(t, e) {
                    function n(t, n, i) {
                        if (t) {
                            var o = u.isDefined(i) ? "on VASTClient.requestVastXML, HTTP request error with status '" + i + "'" : "on VASTClient.requestVastXML, Error getting the the VAST XML with he passed adTagXML fn";
                            return e(new r(o, 301), null)
                        }
                        e(null, n)
                    }
                    try {
                        u.isFunction(t) ? t(n) : (p.info("requesting adTagUrl: " + t), c.get(t, n, {
                            withCredentials: !0
                        }))
                    } catch (i) {
                        e(i)
                    }
                }, i.prototype._buildVASTResponse = function(t) {
                    function e(t, e) {
                        e.forEach(function(e) {
                            t.addAd(e)
                        })
                    }

                    function n(t) {
                        var e = t.trackingEvents.progress;
                        if (!t.hasLinear()) throw new r("on VASTClient._buildVASTResponse, Received an Ad type that is not supported", 200);
                        if (void 0 === t.duration) throw new r("on VASTClient._buildVASTResponse, Missing duration field in VAST response", 101);
                        e && e.forEach(function(t) {
                            if (!u.isNumber(t.offset)) throw new r("on VASTClient._buildVASTResponse, missing or wrong offset attribute on progress tracking event", 101)
                        })
                    }
                    var i = new s;
                    return e(i, t), n(i), i
                }, i.prototype._trackError = function(t, e) {
                    function n(t) {
                        t.wrapper && t.wrapper.error && i.push(t.wrapper.error), t.inLine && t.inLine.error && i.push(t.inLine.error)
                    }
                    if (u.isArray(e) && 0 !== e.length) {
                        var i = [];
                        e.forEach(n), a.track(i, {
                            ERRORCODE: t.code || 900
                        })
                    }
                }, e.exports = i
            }, {
                "../../utils/async": 40,
                "../../utils/consoleLogger": 41,
                "../../utils/http": 43,
                "../../utils/utilityFunctions": 47,
                "../../utils/xml": 48,
                "./Ad": 15,
                "./VASTError": 23,
                "./VASTResponse": 25,
                "./vastUtil": 30
            }
        ],
        23: [
            function(t, e, n) {
                "use strict";

                function i(t, e) {
                    this.message = "VAST Error: " + (t || ""), e && (this.code = e)
                }
                i.prototype = new Error, i.prototype.name = "VAST Error", e.exports = i
            }, {}
        ],
        24: [
            function(t, e, n) {
                "use strict";

                function i(t) {
                    return this instanceof i ? void(this.player = t) : new i(t)
                }
                var o = t("./VASTResponse"),
                    r = t("./VASTError"),
                    s = t("./VASTTracker"),
                    a = t("./vastUtil"),
                    l = t("../../utils/async"),
                    c = t("../../utils/dom"),
                    u = t("../../utils/playerUtils"),
                    d = t("../../utils/utilityFunctions"),
                    p = t("../../utils/consoleLogger");
                i.prototype.playAd = function(t, e) {
                    var n = this;
                    return e = e || d.noop, t instanceof o ? (l.waterfall([
                        function(e) {
                            e(null, t)
                        },
                        this._selectAdSource.bind(this), this._createVASTTracker.bind(this), this._addClickThrough.bind(this), this._addSkipButton.bind(this), this._setupEvents.bind(this), this._playSelectedAd.bind(this)
                    ], function(t, i) {
                        t && i && n._trackError(t, i), e(t, i)
                    }), this._adUnit = {
                        _src: null,
                        type: "VAST",
                        pauseAd: function() {
                            n.player.pause(!0)
                        },
                        resumeAd: function() {
                            n.player.play(!0)
                        },
                        isPaused: function() {
                            return n.player.paused(!0)
                        },
                        getSrc: function() {
                            return this._src
                        }
                    }, this._adUnit) : e(new r("On VASTIntegrator, missing required VASTResponse"))
                }, i.prototype._selectAdSource = function(t, e) {
                    var n, i = c.getDimension(this.player.el()).width;
                    return t.mediaFiles.sort(function(t, e) {
                        var n = Math.abs(i - t.width),
                            o = Math.abs(i - e.width);
                        return n - o
                    }), (n = this.player.selectSource(t.mediaFiles).source) ? (p.info("selected source: ", n), this._adUnit && (this._adUnit._src = n), e(null, n, t)) : void e(new r("Could not find Ad mediafile supported by this player", 403), t)
                }, i.prototype._createVASTTracker = function(t, e, n) {
                    try {
                        n(null, t, new s(t.src, e), e)
                    } catch (i) {
                        n(i, e)
                    }
                }, i.prototype._setupEvents = function(t, e, n, i) {
                    function o() {
                        p.off("fullscreenchange", r), p.off("vast.adStart", l), p.off("pause", s), p.off("timeupdate", a), p.off("volumechange", c)
                    }

                    function r() {
                        p.isFullscreen() ? e.trackFullscreen() : e.trackExitFullscreen()
                    }

                    function s() {
                        Math.abs(p.duration() - p.currentTime()) < 2 || (e.trackPause(), u.once(p, ["play", "vast.adEnd", "vast.adsCancel"], function(t) {
                            "play" === t.type && e.trackResume()
                        }))
                    }

                    function a() {
                        var t = 1e3 * p.currentTime();
                        e.trackProgress(t)
                    }

                    function l() {
                        e.trackImpressions(), e.trackCreativeView()
                    }

                    function c() {
                        var t = p.muted();
                        t ? e.trackMute() : d && e.trackUnmute(), d = t
                    }
                    var d, p = this.player;
                    return p.on("fullscreenchange", r), p.on("vast.adStart", l), p.on("pause", s), p.on("timeupdate", a), p.on("volumechange", c), u.once(p, ["vast.adEnd", "vast.adsCancel"], o), u.once(p, ["vast.adEnd", "vast.adsCancel", "vast.adSkip"], function(t) {
                        "vast.adEnd" === t.type && e.trackComplete()
                    }), i(null, t, n)
                }, i.prototype._addSkipButton = function(t, e, n, i) {
                    function o(t, e) {
                        function n() {
                            t.off("timeupdate", o), c.remove(i)
                        }
                        var i = r(t),
                            o = s.bind(l, i, e, t);
                        t.el().appendChild(i), t.on("timeupdate", o), u.once(t, ["vast.adEnd", "vast.adsCancel"], n)
                    }

                    function r(t) {
                        var n = window.document.createElement("div");
                        return c.addClass(n, "vast-skip-button"), n.onclick = function(i) {
                            return c.hasClass(n, "enabled") ? (e.trackSkip(), t.trigger("vast.adSkip")) : window.open("https://ani.gamer.com.tw/animePay.php"), void 0 === window.Event.prototype.stopPropagation ? !1 : void i.stopPropagation()
                        }, n
                    }

                    function s(t, e, n) {
                        var i = Math.ceil(e - n.currentTime());
                        i > 0 ? t.innerHTML = "廣告 " + d.toFixedDigits(i, 2) + " 秒，如何消除廣告？" : c.hasClass(t, "enabled") || (c.addClass(t, "enabled"), t.innerHTML = "點此跳過廣告")
                    }
                    var a, l = this;
                    d.isNumber(n.skipoffset) && (a = n.skipoffset / 1e3, o(this.player, a)), i(null, t, e, n)
                }, i.prototype._addClickThrough = function(t, e, n, i) {
                    function o(t, e, n) {
                        var i = window.document.createElement("a"),
                            o = n.clickThrough;
                        return c.addClass(i, "vast-blocker"), i.href = s(o, t), d.isString(o) && (i.target = "_blank"), i.onclick = function(n) {
                            return t.paused() ? (t.play(), void 0 !== window.Event.prototype.stopPropagation && n.stopPropagation(), !1) : (t.pause(), void e.trackClick())
                        }, i
                    }

                    function r(t, e, n) {
                        t.href = s(e.clickThrough, n)
                    }

                    function s(e, n) {
                        var i = {
                            ASSETURI: t.src,
                            CONTENTPLAYHEAD: a.formatProgress(1e3 * n.currentTime())
                        };
                        return e ? a.parseURLMacro(e, i) : "#"
                    }

                    function l() {
                        p.off("timeupdate", f), c.remove(h)
                    }
                    var p = this.player,
                        h = o(p, e, n),
                        f = r.bind(this, h, n, p);
                    return p.el().insertBefore(h, p.controlBar.el()), p.on("timeupdate", f), u.once(p, ["vast.adEnd", "vast.adsCancel"], l), i(null, t, e, n)
                }, i.prototype._playSelectedAd = function(t, e, n) {
                    function i() {
                        u.once(o, ["playing", "vast.adsCancel"], function(t) {
                            function i(t) {
                                "ended" === t.type && o.duration() - o.currentTime() > 3 || (o.off("ended", i), o.off("vast.adsCancel", i), o.off("vast.adSkip", i), ("ended" === t.type || "vast.adSkip" === t.type) && n(null, e))
                            }
                            "vast.adsCancel" !== t.type && (p.debug("<VASTIntegrator._playSelectedAd/playAd> got playing event; triggering vast.adStart..."), o.trigger("vast.adStart"), o.on("ended", i), o.on("vast.adsCancel", i), o.on("vast.adSkip", i))
                        }), p.debug("<VASTIntegrator._playSelectedAd/playAd> calling player.play()..."), o.play()
                    }
                    var o = this.player;
                    o.preload("auto"), o.src(t), o.play(), p.debug("<VASTIntegrator._playSelectedAd> waiting for durationchange to play the ad..."), u.once(o, ["durationchange", "error", "vast.adsCancel"], function(t) {
                        "durationchange" === t.type ? (p.debug("<VASTIntegrator._playSelectedAd> got durationchange; calling playAd()"), i()) : "error" === t.type && n(new r("on VASTIntegrator, Player is unable to play the Ad", 400), e)
                    })
                }, i.prototype._trackError = function(t, e) {
                    a.track(e.errorURLMacros, {
                        ERRORCODE: t.code || 900
                    })
                }, e.exports = i
            }, {
                "../../utils/async": 40,
                "../../utils/consoleLogger": 41,
                "../../utils/dom": 42,
                "../../utils/playerUtils": 45,
                "../../utils/utilityFunctions": 47,
                "./VASTError": 23,
                "./VASTResponse": 25,
                "./VASTTracker": 26,
                "./vastUtil": 30
            }
        ],
        25: [
            function(t, e, n) {
                "use strict";

                function i() {
                    return this instanceof i ? (this._linearAdded = !1, this.ads = [], this.errorURLMacros = [], this.impressions = [], this.clickTrackings = [], this.customClicks = [], this.trackingEvents = {}, this.mediaFiles = [], this.clickThrough = void 0, this.adTitle = "", this.duration = void 0, void(this.skipoffset = void 0)) : new i
                }

                function o(t, e) {
                    e.forEach(function(e) {
                        t.push(e)
                    })
                }
                var r = t("./Ad"),
                    s = t("./VideoClicks"),
                    a = t("./Linear"),
                    l = t("./InLine"),
                    c = t("./Wrapper"),
                    u = t("../../utils/utilityFunctions"),
                    d = t("../../utils/xml");
                window.InLine__A = l, i.prototype.addAd = function(t) {
                    var e, n;
                    t instanceof r && (e = t.inLine, n = t.wrapper, this.ads.push(t), e && this._addInLine(e), n && this._addWrapper(n))
                }, i.prototype._addErrorTrackUrl = function(t) {
                    var e = t instanceof d.JXONTree ? d.keyValue(t) : t;
                    e && this.errorURLMacros.push(e)
                }, i.prototype._addImpressions = function(t) {
                    u.isArray(t) && o(this.impressions, t)
                }, i.prototype._addClickThrough = function(t) {
                    u.isNotEmptyString(t) && (this.clickThrough = t)
                }, i.prototype._addClickTrackings = function(t) {
                    u.isArray(t) && o(this.clickTrackings, t)
                }, i.prototype._addCustomClicks = function(t) {
                    u.isArray(t) && o(this.customClicks, t)
                }, i.prototype._addTrackingEvents = function(t) {
                    var e = this.trackingEvents;
                    t && (t = u.isArray(t) ? t : [t], t.forEach(function(t) {
                        e[t.name] || (e[t.name] = []), e[t.name].push(t)
                    }))
                }, i.prototype._addTitle = function(t) {
                    u.isNotEmptyString(t) && (this.adTitle = t)
                }, i.prototype._addDuration = function(t) {
                    u.isNumber(t) && (this.duration = t)
                }, i.prototype._addVideoClicks = function(t) {
                    t instanceof s && (this._addClickThrough(t.clickThrough), this._addClickTrackings(t.clickTrackings), this._addCustomClicks(t.customClicks))
                }, i.prototype._addMediaFiles = function(t) {
                    u.isArray(t) && o(this.mediaFiles, t)
                }, i.prototype._addSkipoffset = function(t) {
                    t && (this.skipoffset = t)
                }, i.prototype._addAdParameters = function(t) {
                    t && (this.adParameters = t)
                }, i.prototype._addLinear = function(t) {
                    t instanceof a && (this._addDuration(t.duration), this._addTrackingEvents(t.trackingEvents), this._addVideoClicks(t.videoClicks), this._addMediaFiles(t.mediaFiles), this._addSkipoffset(t.skipoffset), this._addAdParameters(t.adParameters), this._linearAdded = !0)
                }, i.prototype._addInLine = function(t) {
                    var e = this;
                    t instanceof l && (this._addTitle(t.adTitle), this._addErrorTrackUrl(t.error), this._addImpressions(t.impressions), t.creatives.forEach(function(t) {
                        t.linear && e._addLinear(t.linear)
                    }))
                }, i.prototype._addWrapper = function(t) {
                    var e = this;
                    t instanceof c && (this._addErrorTrackUrl(t.error), this._addImpressions(t.impressions), t.creatives.forEach(function(t) {
                        var n = t.linear;
                        n && (e._addVideoClicks(n.videoClicks), e.clickThrough = void 0, e._addTrackingEvents(n.trackingEvents))
                    }))
                }, i.prototype.hasLinear = function() {
                    return this._linearAdded
                }, e.exports = i
            }, {
                "../../utils/utilityFunctions": 47,
                "../../utils/xml": 48,
                "./Ad": 15,
                "./InLine": 18,
                "./Linear": 19,
                "./VideoClicks": 27,
                "./Wrapper": 28
            }
        ],
        26: [
            function(t, e, n) {
                "use strict";

                function i(t, e) {
                    return this instanceof i ? (this.sanityCheck(t, e), void this.initialize(t, e)) : new i(t, e)
                }
                var o = t("./VASTError"),
                    r = t("./VASTResponse"),
                    s = t("./vastUtil"),
                    a = t("../../utils/utilityFunctions");
                i.prototype.initialize = function(t, e) {
                    this.response = e, this.assetURI = t, this.progress = 0, this.quartiles = {
                        firstQuartile: {
                            tracked: !1,
                            time: Math.round(25 * e.duration) / 100
                        },
                        midpoint: {
                            tracked: !1,
                            time: Math.round(50 * e.duration) / 100
                        },
                        thirdQuartile: {
                            tracked: !1,
                            time: Math.round(75 * e.duration) / 100
                        }
                    }
                }, i.prototype.sanityCheck = function(t, e) {
                    if (!a.isString(t) || a.isEmptyString(t)) throw new o("on VASTTracker constructor, missing required the URI of the ad asset being played");
                    if (!(e instanceof r)) throw new o("on VASTTracker constructor, missing required VAST response")
                }, i.prototype.trackURLs = function(t, e) {
                    a.isArray(t) && t.length > 0 && (e = a.extend({
                        ASSETURI: this.assetURI,
                        CONTENTPLAYHEAD: s.formatProgress(this.progress)
                    }, e || {}), s.track(t, e))
                }, i.prototype.trackEvent = function(t, e) {
                    function n(t) {
                        var e;
                        return t && (e = [], t.forEach(function(t) {
                            e.push(t.uri)
                        })), e
                    }
                    this.trackURLs(n(this.response.trackingEvents[t])), e && (this.response.trackingEvents[t] = void 0)
                }, i.prototype.trackProgress = function(t) {
                    function e(e, n) {
                        var i = 3e3;
                        return e > t && Math.abs(n - e) > i
                    }

                    function n(t, e, n) {
                        p[t] && n && c.push({
                            name: t,
                            trackOnce: !!e
                        })
                    }

                    function i(t) {
                        function e(t, e) {
                            var r = i[t];
                            o(r, e) && (r.tracked = !0, n(t, u, !0))
                        }
                        var i = l.quartiles,
                            r = l.quartiles.firstQuartile,
                            s = l.quartiles.midpoint,
                            a = l.quartiles.thirdQuartile;
                        r.tracked ? s.tracked ? a.tracked || e("thirdQuartile", t) : e("midpoint", t) : e("firstQuartile", t)
                    }

                    function o(t, e) {
                        var n = t.time;
                        return e >= n && n + 5e3 >= e
                    }

                    function r(t) {
                        if (a.isArray(p.progress)) {
                            var e = [];
                            p.progress.forEach(function(n) {
                                n.offset <= t ? l.trackURLs([n.uri]) : e.push(n)
                            }), p.progress = e
                        }
                    }

                    function s() {
                        c.forEach(function(t) {
                            l.trackEvent(t.name, t.trackOnce)
                        })
                    }
                    var l = this,
                        c = [],
                        u = !0,
                        d = !1,
                        p = this.response.trackingEvents;
                    a.isNumber(t) && (n("start", u, t > 0), n("rewind", d, e(this.progress, t)), i(t), r(t), s(), this.progress = t)
                }, ["rewind", "fullscreen", "exitFullscreen", "pause", "resume", "mute", "unmute", "acceptInvitation", "acceptInvitationLinear", "collapse", "expand"].forEach(function(t) {
                    i.prototype["track" + a.capitalize(t)] = function() {
                        this.trackEvent(t)
                    }
                }), ["start", "skip", "close", "closeLinear"].forEach(function(t) {
                    i.prototype["track" + a.capitalize(t)] = function() {
                        this.trackEvent(t, !0)
                    }
                }), ["firstQuartile", "midpoint", "thirdQuartile"].forEach(function(t) {
                    i.prototype["track" + a.capitalize(t)] = function() {
                        this.quartiles[t].tracked = !0, this.trackEvent(t, !0)
                    }
                }), i.prototype.trackComplete = function() {
                    this.quartiles.thirdQuartile.tracked && this.trackEvent("complete", !0)
                }, i.prototype.trackErrorWithCode = function(t) {
                    a.isNumber(t) && this.trackURLs(this.response.errorURLMacros, {
                        ERRORCODE: t
                    })
                }, i.prototype.trackImpressions = function() {
                    this.trackURLs(this.response.impressions)
                }, i.prototype.trackCreativeView = function() {
                    this.trackEvent("creativeView")
                }, i.prototype.trackClick = function() {
                    this.trackURLs(this.response.clickTrackings)
                }, e.exports = i
            }, {
                "../../utils/utilityFunctions": 47,
                "./VASTError": 23,
                "./VASTResponse": 25,
                "./vastUtil": 30
            }
        ],
        27: [
            function(t, e, n) {
                "use strict";

                function i(t) {
                    function e(t) {
                        var e = [];
                        return t && (t = o.isArray(t) ? t : [t], t.forEach(function(t) {
                            e.push(r.keyValue(t))
                        })), e
                    }
                    return this instanceof i ? (this.clickThrough = r.keyValue(t.clickThrough), this.clickTrackings = e(t.clickTracking), void(this.customClicks = e(t.customClick))) : new i(t)
                }
                var o = t("../../utils/utilityFunctions"),
                    r = t("../../utils/xml");
                e.exports = i
            }, {
                "../../utils/utilityFunctions": 47,
                "../../utils/xml": 48
            }
        ],
        28: [
            function(t, e, n) {
                "use strict";

                function i(t) {
                    return this instanceof i ? (this.adSystem = a.keyValue(t.adSystem), this.impressions = o.parseImpressions(t.impression), this.VASTAdTagURI = a.keyValue(t.vASTAdTagURI), this.creatives = r.parseCreatives(t.creatives), this.error = a.keyValue(t.error), this.extensions = t.extensions, this.followAdditionalWrappers = s.isDefined(a.attr(t, "followAdditionalWrappers")) ? a.attr(t, "followAdditionalWrappers") : !0, this.allowMultipleAds = a.attr(t, "allowMultipleAds"), void(this.fallbackOnNoAd = a.attr(t, "fallbackOnNoAd"))) : new i(t)
                }
                var o = t("./vastUtil"),
                    r = t("./Creative"),
                    s = t("../../utils/utilityFunctions"),
                    a = t("../../utils/xml");
                e.exports = i
            }, {
                "../../utils/utilityFunctions": 47,
                "../../utils/xml": 48,
                "./Creative": 17,
                "./vastUtil": 30
            }
        ],
        29: [
            function(t, e, n) {
                "use strict";
                var i = t("../../utils/utilityFunctions"),
                    o = /(\d\d):(\d\d):(\d\d)(\.(\d\d\d))?/,
                    r = {
                        duration: function(t) {
                            function e(t) {
                                return 60 * parseInt(t, 10) * 60 * 1e3
                            }

                            function n(t) {
                                return 60 * parseInt(t, 10) * 1e3
                            }

                            function r(t) {
                                return 1e3 * parseInt(t, 10)
                            }
                            var s, a;
                            return i.isString(t) && (s = t.match(o), s && (a = e(s[1]) + n(s[2]) + r(s[3]) + parseInt(s[5] || 0))), isNaN(a) ? null : a
                        },
                        offset: function(t, e) {
                            function n(t) {
                                var e = /^\d+(\.\d+)?%$/g;
                                return e.test(t)
                            }

                            function i(t, e) {
                                return e ? o(e, parseFloat(t.replace("%", ""))) : null
                            }

                            function o(t, e) {
                                return t * e / 100
                            }
                            return n(t) ? i(t, e) : r.duration(t)
                        }
                    };
                e.exports = r
            }, {
                "../../utils/utilityFunctions": 47
            }
        ],
        30: [
            function(t, e, n) {
                "use strict";
                var i = t("../../utils/utilityFunctions"),
                    o = t("../vpaid/VPAIDHTML5Tech"),
                    r = t("../vpaid/VPAIDFlashTech"),
                    s = t("VPAIDFLASHClient/js/VPAIDFLASHClient"),
                    a = {
                        track: function(t, e) {
                            var n = a.parseURLMacros(t, e),
                                i = [];
                            return n.forEach(function(t) {
                                var e = new Image;
                                e.src = t, i.push(e)
                            }), i
                        },
                        parseURLMacros: function(t, e) {
                            var n = [];
                            return e = e || {}, e.CACHEBUSTING || (e.CACHEBUSTING = Math.round(1e10 * Math.random())), t.forEach(function(t) {
                                n.push(a._parseURLMacro(t, e))
                            }), n
                        },
                        parseURLMacro: function(t, e) {
                            return e = e || {}, e.CACHEBUSTING || (e.CACHEBUSTING = Math.round(1e10 * Math.random())), a._parseURLMacro(t, e)
                        },
                        _parseURLMacro: function(t, e) {
                            return e = e || {}, i.forEach(e, function(e, n) {
                                t = t.replace(new RegExp("\\[" + n + "\\]", "gm"), e)
                            }), t
                        },
                        parseDuration: function(t) {
                            function e(t) {
                                return 60 * parseInt(t, 10) * 60 * 1e3
                            }

                            function n(t) {
                                return 60 * parseInt(t, 10) * 1e3
                            }

                            function o(t) {
                                return 1e3 * parseInt(t, 10)
                            }
                            var r, s, a = /(\d\d):(\d\d):(\d\d)(\.(\d\d\d))?/;
                            return i.isString(t) && (r = t.match(a), r && (s = e(r[1]) + n(r[2]) + o(r[3]) + parseInt(r[5] || 0))), isNaN(s) ? null : s
                        },
                        parseImpressions: function(t) {
                            return t ? (t = i.isArray(t) ? t : [t], i.transformArray(t, function(t) {
                                return i.isNotEmptyString(t.keyValue) ? t.keyValue : void 0
                            })) : []
                        },
                        formatProgress: function(t) {
                            var e, n, o, r;
                            return e = t / 36e5, e = Math.floor(e), n = t / 6e4 % 60, n = Math.floor(n), o = t / 1e3 % 60, o = Math.floor(o), r = t % 1e3, i.toFixedDigits(e, 2) + ":" + i.toFixedDigits(n, 2) + ":" + i.toFixedDigits(o, 2) + "." + i.toFixedDigits(r, 3)
                        },
                        parseOffset: function(t, e) {
                            function n(t) {
                                var e = /^\d+(\.\d+)?%$/g;
                                return e.test(t)
                            }

                            function i(t, e) {
                                return e ? o(e, parseFloat(t.replace("%", ""))) : null
                            }

                            function o(t, e) {
                                return t * e / 100
                            }
                            return n(t) ? i(t, e) : a.parseDuration(t)
                        },
                        VPAID_techs: [r, o],
                        isVPAID: function(t) {
                            return !!t && "VPAID" === t.apiFramework
                        },
                        findSupportedVPAIDTech: function(t) {
                            var e, n, i;
                            for (e = 0, n = this.VPAID_techs.length; n > e; e += 1)
                                if (i = this.VPAID_techs[e], i.supports(t)) return i;
                            return null
                        },
                        isFlashSupported: function() {
                            return s.isSupported()
                        },
                        runFlashSupportCheck: function(t) {
                            s.runFlashTest({
                                data: t
                            })
                        }
                    };
                e.exports = a
            }, {
                "../../utils/utilityFunctions": 47,
                "../vpaid/VPAIDFlashTech": 32,
                "../vpaid/VPAIDHTML5Tech": 33,
                "VPAIDFLASHClient/js/VPAIDFLASHClient": 3
            }
        ],
        31: [
            function(t, e, n) {
                "use strict";

                function i(t, e) {
                    function n(t, e) {
                        if (!t || !i.checkVPAIDInterface(t)) throw new o("on VPAIDAdUnitWrapper, the passed VPAID adUnit does not fully implement the VPAID interface");
                        if (!r.isObject(e)) throw new o("on VPAIDAdUnitWrapper, expected options hash  but got '" + e + "'");
                        if (!("responseTimeout" in e && r.isNumber(e.responseTimeout))) throw new o("on VPAIDAdUnitWrapper, expected responseTimeout in options")
                    }
                    return this instanceof i ? (n(t, e), this.options = r.extend({}, e), void(this._adUnit = t)) : new i(t, e)
                }
                var o = t("../vast/VASTError"),
                    r = t("../../utils/utilityFunctions");
                i.checkVPAIDInterface = function(t) {
                    function e(t) {
                        return r.isFunction(t.subscribe) || r.isFunction(t.addEventListener) || r.isFunction(t.on)
                    }

                    function n(t) {
                        return r.isFunction(t.unsubscribe) || r.isFunction(t.removeEventListener) || r.isFunction(t.off)
                    }
                    for (var i = ["handshakeVersion", "initAd", "startAd", "stopAd", "resizeAd", "pauseAd", "expandAd", "collapseAd"], o = 0, s = i.length; s > o; o++)
                        if (!t || !r.isFunction(t[i[o]])) return !1;
                    return e(t) && n(t)
                }, i.prototype.adUnitAsyncCall = function() {
                    function t(t, e, n) {
                        if (!r.isString(t) || !r.isFunction(n[t])) throw new o("on VPAIDAdUnitWrapper.adUnitAsyncCall, invalid method name");
                        if (!r.isFunction(e)) throw new o("on VPAIDAdUnitWrapper.adUnitAsyncCall, missing callback")
                    }

                    function e() {
                        return function() {
                            n && clearTimeout(n), a.apply(this, arguments)
                        }
                    }
                    var n, i = r.arrayLikeObjToArray(arguments),
                        s = i.shift(),
                        a = i.pop();
                    t(s, a, this._adUnit), i.push(e()), this._adUnit[s].apply(this._adUnit, i), n = setTimeout(function() {
                        n = null, a(new o("on VPAIDAdUnitWrapper, timeout while waiting for a response on call '" + s + "'")), a = r.noop
                    }, this.options.responseTimeout)
                }, i.prototype.on = function(t, e) {
                    var n = this._adUnit.addEventListener || this._adUnit.subscribe || this._adUnit.on;
                    n.call(this._adUnit, t, e)
                }, i.prototype.off = function(t, e) {
                    var n = this._adUnit.removeEventListener || this._adUnit.unsubscribe || this._adUnit.off;
                    n.call(this._adUnit, t, e)
                }, i.prototype.waitForEvent = function(t, e, n) {
                    function i(t, e) {
                        if (!r.isString(t)) throw new o("on VPAIDAdUnitWrapper.waitForEvent, missing evt name");
                        if (!r.isFunction(e)) throw new o("on VPAIDAdUnitWrapper.waitForEvent, missing callback")
                    }

                    function s() {
                        var t = r.arrayLikeObjToArray(arguments);
                        a && (clearTimeout(a), a = null), t.unshift(null), e.apply(n, t)
                    }
                    var a;
                    i(t, e), n = n || null, this.on(t, s), a = setTimeout(function() {
                        e(new o("on VPAIDAdUnitWrapper.waitForEvent, timeout while waiting for event '" + t + "'")), a = null, e = r.noop
                    }, this.options.responseTimeout)
                }, i.prototype.handshakeVersion = function(t, e) {
                    this.adUnitAsyncCall("handshakeVersion", t, e)
                }, i.prototype.initAd = function(t, e, n, i, o, r) {
                    this.waitForEvent("AdLoaded", r), this._adUnit.initAd(t, e, n, i, o)
                }, i.prototype.resizeAd = function(t, e, n, i) {
                    this.adUnitAsyncCall("resizeAd", t, e, n, i)
                }, i.prototype.startAd = function(t) {
                    this.waitForEvent("AdStarted", t), this._adUnit.startAd()
                }, i.prototype.stopAd = function(t) {
                    this.waitForEvent("AdStopped", t), this._adUnit.stopAd()
                }, i.prototype.pauseAd = function(t) {
                    this.waitForEvent("AdPaused", t), this._adUnit.pauseAd()
                }, i.prototype.resumeAd = function(t) {
                    this.waitForEvent("AdPlaying", t), this._adUnit.resumeAd()
                }, i.prototype.expandAd = function(t) {
                    this.waitForEvent("AdExpandedChange", t), this._adUnit.expandAd()
                }, i.prototype.collapseAd = function(t) {
                    this.waitForEvent("AdExpandedChange", t), this._adUnit.collapseAd()
                }, i.prototype.skipAd = function(t) {
                    this.waitForEvent("AdSkipped", t), this._adUnit.skipAd()
                }, ["adLinear", "adWidth", "adHeight", "adExpanded", "adSkippableState", "adRemainingTime", "adDuration", "adVolume", "adCompanions", "adIcons"].forEach(function(t) {
                    var e = "get" + r.capitalize(t);
                    i.prototype[e] = function(t) {
                        this.adUnitAsyncCall(e, t)
                    }
                }), i.prototype.setAdVolume = function(t, e) {
                    this.adUnitAsyncCall("setAdVolume", t, e)
                }, e.exports = i
            }, {
                "../../utils/utilityFunctions": 47,
                "../vast/VASTError": 23
            }
        ],
        32: [
            function(t, e, n) {
                "use strict";

                function i(t, e) {
                    function n(t) {
                        if (!t || !a.isString(t.src)) throw new r("on VPAIDFlashTech, invalid MediaFile")
                    }
                    return this instanceof i ? (n(t), this.name = "vpaid-flash", this.mediaFile = t, this.containerEl = null, this.vpaidFlashClient = null, void(this.settings = e)) : new i(t)
                }
                var o = t("../../utils/mimetypes"),
                    r = t("../vast/VASTError"),
                    s = t("VPAIDFLASHClient/js/VPAIDFLASHClient"),
                    a = t("../../utils/utilityFunctions"),
                    l = t("../../utils/dom"),
                    c = t("../../utils/consoleLogger");
                i.VPAIDFLASHClient = s, i.supports = function(t) {
                    return o.flash.indexOf(t) > -1 && i.VPAIDFLASHClient.isSupported()
                }, i.prototype.loadAdUnit = function(t, e, n) {
                    function o(t, e) {
                        if (!l.isDomElement(t)) throw new r("on VPAIDFlashTech.loadAdUnit, invalid dom container element");
                        if (!a.isFunction(e)) throw new r("on VPAIDFlashTech.loadAdUnit, missing valid callback")
                    }
                    var s = this,
                        u = this.settings && this.settings.vpaidFlashLoaderPath ? {
                            data: this.settings.vpaidFlashLoaderPath
                        } : void 0;
                    o(t, n), this.containerEl = t, c.debug("<VPAIDFlashTech.loadAdUnit> loading VPAIDFLASHClient with opts:", u), this.vpaidFlashClient = new i.VPAIDFLASHClient(t, function(t) {
                        return t ? n(t) : (c.info("<VPAIDFlashTech.loadAdUnit> calling VPAIDFLASHClient.loadAdUnit(); that.mediaFile:", s.mediaFile), void s.vpaidFlashClient.loadAdUnit(s.mediaFile.src, n))
                    }, u)
                }, i.prototype.unloadAdUnit = function() {
                    if (this.vpaidFlashClient) {
                        try {
                            this.vpaidFlashClient.destroy()
                        } catch (t) {
                            c.error("VAST ERROR: trying to unload the VPAID adunit")
                        }
                        this.vpaidFlashClient = null
                    }
                    this.containerEl && (l.remove(this.containerEl), this.containerEl = null)
                }, e.exports = i
            }, {
                "../../utils/consoleLogger": 41,
                "../../utils/dom": 42,
                "../../utils/mimetypes": 44,
                "../../utils/utilityFunctions": 47,
                "../vast/VASTError": 23,
                "VPAIDFLASHClient/js/VPAIDFLASHClient": 3
            }
        ],
        33: [
            function(t, e, n) {
                "use strict";

                function i(t) {
                    function e(t) {
                        if (!t || !a.isString(t.src)) throw new r(i.INVALID_MEDIA_FILE)
                    }
                    return this instanceof i ? (e(t), this.name = "vpaid-html5", this.containerEl = null, this.videoEl = null, this.vpaidHTMLClient = null, void(this.mediaFile = t)) : new i(t)
                }
                var o = t("../../utils/mimetypes"),
                    r = t("../vast/VASTError"),
                    s = t("VPAIDHTML5Client/js/VPAIDHTML5Client"),
                    a = t("../../utils/utilityFunctions"),
                    l = t("../../utils/dom"),
                    c = t("../../utils/consoleLogger");
                i.VPAIDHTML5Client = s, i.supports = function(t) {
                    return !a.isOldIE() && o.html5.indexOf(t) > -1
                }, i.prototype.loadAdUnit = function(t, e, n) {
                    function o(t, e, n) {
                        if (!l.isDomElement(t)) throw new r(i.INVALID_DOM_CONTAINER_EL);
                        if (!l.isDomElement(e) || "video" !== e.tagName.toLowerCase()) throw new r(i.INVALID_DOM_CONTAINER_EL);
                        if (!a.isFunction(n)) throw new r(i.MISSING_CALLBACK)
                    }
                    o(t, e, n), this.containerEl = t, this.videoEl = e, this.vpaidHTMLClient = new i.VPAIDHTML5Client(t, e, {}), this.vpaidHTMLClient.loadAdUnit(this.mediaFile.src, n)
                }, i.prototype.unloadAdUnit = function() {
                    if (this.vpaidHTMLClient) {
                        try {
                            this.vpaidHTMLClient.destroy()
                        } catch (t) {
                            c.error("VAST ERROR: trying to unload the VPAID adunit")
                        }
                        this.vpaidHTMLClient = null
                    }
                    this.containerEl && (l.remove(this.containerEl), this.containerEl = null)
                };
                var u = "on VPAIDHTML5Tech";
                i.INVALID_MEDIA_FILE = u + ", invalid MediaFile", i.INVALID_DOM_CONTAINER_EL = u + ", invalid container HtmlElement", i.INVALID_DOM_VIDEO_EL = u + ", invalid HTMLVideoElement", i.MISSING_CALLBACK = u + ", missing valid callback", e.exports = i
            }, {
                "../../utils/consoleLogger": 41,
                "../../utils/dom": 42,
                "../../utils/mimetypes": 44,
                "../../utils/utilityFunctions": 47,
                "../vast/VASTError": 23,
                "VPAIDHTML5Client/js/VPAIDHTML5Client": 11
            }
        ],
        34: [
            function(t, e, n) {
                "use strict";

                function i(t, e) {
                    function n() {
                        var e = document.createElement("div");
                        return h.addClass(e, "VPAID-container"), t.el().insertBefore(e, t.controlBar.el()), e
                    }
                    return this instanceof i ? (this.VIEW_MODE = {
                        NORMAL: "normal",
                        FULLSCREEN: "fullscreen",
                        THUMBNAIL: "thumbnail"
                    }, this.player = t, this.containerEl = n(t), this.options = {
                        responseTimeout: 5e3,
                        VPAID_VERSION: "2.0"
                    }, void(this.settings = e)) : new i(t)
                }

                function o(t, e, n) {
                    var i = t.el().querySelector(".vjs-tech"),
                        o = h.getDimension(i),
                        s = t.isFullscreen() ? n.FULLSCREEN : n.NORMAL;
                    e.resizeAd(o.width, o.height, s, r)
                }

                function r(t) {
                    t && m.error("ERROR: " + t.message, t)
                }
                var s = t("../../utils/mimetypes"),
                    a = t("../vast/VASTError"),
                    l = t("../vast/VASTResponse"),
                    c = t("../vast/VASTTracker"),
                    u = t("../vast/vastUtil"),
                    d = t("./VPAIDAdUnitWrapper"),
                    p = t("../../utils/async"),
                    h = t("../../utils/dom"),
                    f = t("../../utils/playerUtils"),
                    v = t("../../utils/utilityFunctions"),
                    m = t("../../utils/consoleLogger");
                i.prototype.playAd = function(t, e) {
                    function n(t, n, i) {
                        t && i && r._trackError(i, t.code), s.trigger("vpaid.adEnd"), e(t, i)
                    }

                    function i() {
                        s.trigger("vpaid.adEnd")
                    }

                    function o() {
                        c && c.unloadAdUnit(), h.removeClass(s.el(), "vjs-vpaid-ad");
                    }
                    if (!(t instanceof l)) return e(new a("on VASTIntegrator.playAd, missing required VASTResponse"));
                    var r = this,
                        s = this.player;
                    m.debug("<VPAIDIntegrator.playAd> looking for supported tech...");
                    var c = this._findSupportedTech(t, this.settings);
                    if (e = e || v.noop, this._adUnit = null, h.addClass(s.el(), "vjs-vpaid-ad"), s.on("vast.adsCancel", i), s.one("vpaid.adEnd", function() {
                        s.off("vast.adsCancel", i), o()
                    }), c) m.info("<VPAIDIntegrator.playAd> found tech: ", c), p.waterfall([
                        function(e) {
                            e(null, c, t)
                        },
                        this._loadAdUnit.bind(this), this._playAdUnit.bind(this), this._finishPlaying.bind(this)
                    ], n), this._adUnit = {
                        _paused: !0,
                        type: "VPAID",
                        pauseAd: function() {
                            s.trigger("vpaid.pauseAd"), s.pause(!0)
                        },
                        resumeAd: function() {
                            s.trigger("vpaid.resumeAd")
                        },
                        isPaused: function() {
                            return this._paused
                        },
                        getSrc: function() {
                            return c.mediaFile
                        }
                    };
                    else {
                        m.debug("<VPAIDIntegrator.playAd> could not find suitable tech");
                        var u = new a("on VPAIDIntegrator.playAd, could not find a supported mediaFile", 403);
                        n(u, this._adUnit, t)
                    }
                    return this._adUnit
                }, i.prototype._findSupportedTech = function(t, e) {
                    if (!(t instanceof l)) return null;
                    var n, i, o, r, a, c = t.mediaFiles.filter(u.isVPAID),
                        d = e && e.preferredTech,
                        p = [];
                    for (n = 0, i = c.length; i > n; n += 1)
                        if (o = c[n], r = u.findSupportedVPAIDTech(o.type)) {
                            if (a = d ? o.type === d || s[d] && s[d].indexOf(o.type) > -1 : !1) return new r(o, e);
                            p.push({
                                mediaFile: o,
                                tech: r
                            })
                        }
                    if (p.length) {
                        var h = p[0];
                        return new h.tech(h.mediaFile, e)
                    }
                    return null
                }, i.prototype._createVPAIDAdUnitWrapper = function(t, e, n) {
                    return new d(t, {
                        src: e,
                        responseTimeout: n
                    })
                }, i.prototype._loadAdUnit = function(t, e, n) {
                    var i = this,
                        o = this.player,
                        r = o.el().querySelector(".vjs-tech"),
                        s = this.settings.responseTimeout || this.options.responseTimeout;
                    t.loadAdUnit(this.containerEl, r, function(r, a) {
                        if (r) return n(r, a, e);
                        try {
                            var l = i._createVPAIDAdUnitWrapper(a, t.mediaFile.src, s),
                                c = "vjs-" + t.name + "-ad";
                            h.addClass(o.el(), c), o.one("vpaid.adEnd", function() {
                                h.removeClass(o.el(), c)
                            }), n(null, l, e)
                        } catch (u) {
                            n(u, a, e)
                        }
                    })
                }, i.prototype._playAdUnit = function(t, e, n) {
                    p.waterfall([
                        function(n) {
                            n(null, t, e)
                        },
                        this._handshake.bind(this), this._initAd.bind(this), this._setupEvents.bind(this), this._addSkipButton.bind(this), this._linkPlayerControls.bind(this), this._startAd.bind(this)
                    ], n)
                }, i.prototype._handshake = function(t, e, n) {
                    function i(t) {
                        var e = o(t);
                        return e >= 1 && 2 >= e
                    }

                    function o(t) {
                        var e = t.split(".");
                        return parseInt(e[0], 10)
                    }
                    t.handshakeVersion(this.options.VPAID_VERSION, function(o, r) {
                        return o ? n(o, t, e) : r && i(r) ? n(null, t, e) : n(new a('on VPAIDIntegrator._handshake, unsupported version "' + r + '"'), t, e)
                    })
                }, i.prototype._initAd = function(t, e, n) {
                    var i = this.player.el().querySelector(".vjs-tech"),
                        o = h.getDimension(i);
                    t.initAd(o.width, o.height, this.VIEW_MODE.NORMAL, -1, {
                        AdParameters: e.adParameters || ""
                    }, function(i) {
                        n(i, t, e)
                    })
                }, i.prototype._createVASTTracker = function(t, e) {
                    return new c(t, e)
                }, i.prototype._setupEvents = function(t, e, n) {
                    function i() {
                        p._adUnit && p._adUnit.isPaused() && (p._adUnit._paused = !1), d.trigger("play")
                    }

                    function r() {
                        p._adUnit && (p._adUnit._paused = !0), d.trigger("pause")
                    }

                    function s() {
                        t.pauseAd(v.noop)
                    }

                    function a() {
                        t.resumeAd(v.noop)
                    }
                    var l = t.options.src,
                        c = this._createVASTTracker(l, e),
                        d = this.player,
                        p = this;
                    t.on("AdSkipped", function() {
                        d.trigger("vpaid.AdSkipped"), c.trackSkip()
                    }), t.on("AdImpression", function() {
                        d.trigger("vpaid.AdImpression"), c.trackImpressions()
                    }), t.on("AdStarted", function() {
                        d.trigger("vpaid.AdStarted"), c.trackCreativeView(), i()
                    }), t.on("AdVideoStart", function() {
                        d.trigger("vpaid.AdVideoStart"), c.trackStart(), i()
                    }), t.on("AdPlaying", function() {
                        d.trigger("vpaid.AdPlaying"), c.trackResume(), i()
                    }), t.on("AdPaused", function() {
                        d.trigger("vpaid.AdPaused"), c.trackPause(), r()
                    }), t.on("AdVideoFirstQuartile", function() {
                        d.trigger("vpaid.AdVideoFirstQuartile"), c.trackFirstQuartile()
                    }), t.on("AdVideoMidpoint", function() {
                        d.trigger("vpaid.AdVideoMidpoint"), c.trackMidpoint()
                    }), t.on("AdVideoThirdQuartile", function() {
                        d.trigger("vpaid.AdVideoThirdQuartile"), c.trackThirdQuartile()
                    }), t.on("AdVideoComplete", function() {
                        d.trigger("vpaid.AdVideoComplete"), c.trackComplete()
                    }), t.on("AdClickThru", function(n) {
                        function i(e) {
                            var n = {
                                ASSETURI: t.options.src,
                                CONTENTPLAYHEAD: 0
                            };
                            return e ? u.parseURLMacro(e, n) : null
                        }
                        d.trigger("vpaid.AdClickThru");
                        var o = n.url,
                            r = n.playerHandles,
                            s = v.isNotEmptyString(o) ? o : i(e.clickThrough);
                        c.trackClick(), r && s && window.open(s, "_blank")
                    }), t.on("AdUserAcceptInvitation", function() {
                        d.trigger("vpaid.AdUserAcceptInvitation"), c.trackAcceptInvitation(), c.trackAcceptInvitationLinear()
                    }), t.on("AdUserClose", function() {
                        d.trigger("vpaid.AdUserClose"), c.trackClose(), c.trackCloseLinear()
                    }), t.on("AdUserMinimize", function() {
                        d.trigger("vpaid.AdUserMinimize"), c.trackCollapse()
                    }), t.on("AdError", function() {
                        d.trigger("vpaid.AdError"), c.trackErrorWithCode(901)
                    }), t.on("AdVolumeChange", function() {
                        d.trigger("vpaid.AdVolumeChange");
                        var e = d.volume();
                        t.getAdVolume(function(t, n) {
                            e !== n && (0 === n && e > 0 && c.trackMute(), n > 0 && 0 === e && c.trackUnmute(), d.volume(n))
                        })
                    });
                    var f = o.bind(this, d, t, this.VIEW_MODE),
                        m = v.throttle(f, 100),
                        g = this.settings.autoResize;
                    g && (h.addEventListener(window, "resize", m), h.addEventListener(window, "orientationchange", m)), d.on("vast.resize", f), d.on("vpaid.pauseAd", s), d.on("vpaid.resumeAd", a), d.one("vpaid.adEnd", function() {
                        d.off("vast.resize", f), d.off("vpaid.pauseAd", s), d.off("vpaid.resumeAd", a), g && (h.removeEventListener(window, "resize", m), h.removeEventListener(window, "orientationchange", m))
                    }), n(null, t, e)
                }, i.prototype._addSkipButton = function(t, e, n) {
                    function i() {
                        l.trigger("vpaid.AdSkippableStateChange"), t.getAdSkippableState(function(t, e) {
                            e ? a || o(l) : r(l)
                        })
                    }

                    function o(t) {
                        a = s(t)
                    }

                    function r() {
                        h.remove(a), a = null
                    }

                    function s() {
                        var e = window.document.createElement("div");
                        return h.addClass(e, "vast-skip-button"), h.addClass(e, "enabled"), e.innerHTML = "Skip ad", e.onclick = function(e) {
                            return t.skipAd(v.noop), void 0 === window.Event.prototype.stopPropagation ? !1 : void e.stopPropagation()
                        }, e
                    }
                    var a, l = this.player;
                    t.on("AdSkippableStateChange", i), f.once(l, ["vast.adEnd", "vast.adsCancel"], r), n(null, t, e)
                }, i.prototype._linkPlayerControls = function(t, e, n) {
                    function i(t, e) {
                        function n() {
                            var n = t.muted() ? 0 : t.volume();
                            e.setAdVolume(n, r)
                        }

                        function i() {
                            t.trigger("vpaid.AdVolumeChange");
                            var n = t.volume();
                            e.getAdVolume(function(e, i) {
                                e ? r(e) : n !== i && t.volume(i)
                            })
                        }
                        t.on("volumechange", n), e.on("AdVolumeChange", i), t.one("vpaid.adEnd", function() {
                            t.off("volumechange", n)
                        })
                    }

                    function s(t, e, n) {
                        var i = o.bind(a, t, e, n);
                        t.on("fullscreenchange", i), t.one("vpaid.adEnd", function() {
                            t.off("fullscreenchange", i)
                        })
                    }
                    var a = this;
                    i(this.player, t), s(this.player, t, this.VIEW_MODE), n(null, t, e)
                }, i.prototype._startAd = function(t, e, n) {
                    var i = this.player;
                    t.startAd(function(o) {
                        o || i.trigger("vast.adStart"), n(o, t, e)
                    })
                }, i.prototype._finishPlaying = function(t, e, n) {
                    function i(i) {
                        n(i, t, e)
                    }
                    var o = this.player;
                    t.on("AdStopped", function() {
                        o.trigger("vpaid.AdStopped"), i(null)
                    }), t.on("AdError", function(t) {
                        var e = t ? t.message : "on VPAIDIntegrator, error while waiting for the adUnit to finish playing";
                        i(new a(e))
                    })
                }, i.prototype._trackError = function(t, e) {
                    u.track(t.errorURLMacros, {
                        ERRORCODE: e || 901
                    })
                }, e.exports = i
            }, {
                "../../utils/async": 40,
                "../../utils/consoleLogger": 41,
                "../../utils/dom": 42,
                "../../utils/mimetypes": 44,
                "../../utils/playerUtils": 45,
                "../../utils/utilityFunctions": 47,
                "../vast/VASTError": 23,
                "../vast/VASTResponse": 25,
                "../vast/VASTTracker": 26,
                "../vast/vastUtil": 30,
                "./VPAIDAdUnitWrapper": 31
            }
        ],
        35: [
            function(t, e, n) {
                "use strict";
                var i = t("../../utils/dom"),
                    o = document.createElement("div"),
                    r = function(t) {
                        return {
                            init: function(e, n) {
                                n.el = o, t.call(this, e, n), setTimeout(function() {
                                    var t = e.controlBar && (e.controlBar.getChild("timerControls") || e.controlBar.getChild("currentTimeDisplay"));
                                    t && e.controlBar.el().insertBefore(o, t.el()), i.removeClass(o, "vjs-label-hidden")
                                }, 0)
                            },
                            el: function() {
                                return o
                            }
                        }
                    };
                e.exports = r
            }, {
                "../../utils/dom": 42
            }
        ],
        36: [
            function(t, e, n) {
                "use strict";
                var i = videojs.Component,
                    o = t("./ads-label")(i);
                videojs.AdsLabel = videojs.Component.extend(o)
            }, {
                "./ads-label": 35
            }
        ],
        37: [
            function(t, e, n) {
                "use strict";
                var i = document.createElement("div"),
                    o = function(t) {
                        return {
                            init: function(e, n) {
                                n.el = i, i.className = "vjs-black-poster", t.call(this, e, n);
                                var o = e.getChild("posterImage");
                                setTimeout(function() {
                                    o && e && e.el() && e.el().insertBefore(i, o.el())
                                }, 0)
                            },
                            el: function() {
                                return i
                            }
                        }
                    };
                e.exports = o
            }, {}
        ],
        38: [
            function(t, e, n) {
                "use strict";
                var i = videojs.Component,
                    o = t("./black-poster")(i);
                videojs.BlackPoster = videojs.Component.extend(o)
            }, {
                "./black-poster": 37
            }
        ],
        39: [
            function(t, e, n) {
                "use strict";
                var i = t("../ads/vast/VASTClient"),
                    o = t("../ads/vast/VASTError"),
                    r = t("../ads/vast/vastUtil"),
                    s = t("../ads/vast/VASTIntegrator"),
                    a = t("../ads/vpaid/VPAIDIntegrator"),
                    l = t("../utils/async"),
                    c = t("../utils/dom"),
                    u = t("../utils/playerUtils"),
                    d = t("../utils/utilityFunctions"),
                    p = t("../utils/consoleLogger");
                e.exports = function(t) {
                    function e() {
                        function t() {
                            b.vast && b.vast.adUnit && (b.vast.adUnit = null)
                        }

                        function e() {
                            n(), y && (u.restorePlayerSnapshot(b, y), y = null)
                        }

                        function n() {
                            u.once(b, ["playing", "vast.reset", "vast.firstPlay"], function(t) {
                                "playing" === t.type && (b.trigger("vast.contentStart"), u.once(b, ["ended", "vast.reset", "vast.firstPlay"], function(t) {
                                    "ended" === t.type && b.trigger("vast.contentEnd")
                                }))
                            })
                        }

                        function i(t) {
                            return A.adsEnabled ? t(null) : void t(new o("Ads are not enabled"))
                        }

                        function r(t) {
                            s() ? (y = u.getPlayerSnapshot(b), b.pause(), p(), b.paused() ? t(null) : u.once(b, ["playing"], function() {
                                b.pause(), t(null)
                            })) : t(new o("video content has been playing before preroll ad"))
                        }

                        function s() {
                            return !d.isIPhone() || b.currentTime() <= A.iosPrerollCancelTimeout
                        }

                        function a(t) {
                            function e() {
                                n && (clearTimeout(n), n = null)
                            }
                            var n;
                            T = !1;
                            var i = (new Date).getTime();
                            n = setTimeout(function() {
                                var t = (new Date).getTime();
                                console.log("timeout: " + (t - i) / 1e3 + "sec"), m(new o("timeout while waiting for the video to start playing", 402))
                            }, A.adCancelTimeout), u.once(b, ["vast.adStart", "vast.adsCancel"], e), t(null)
                        }

                        function p() {
                            c.addClass(b.el(), "vjs-vast-ad-loading"), u.once(b, ["vast.adStart", "vast.adsCancel"], f)
                        }

                        function f() {
                            setTimeout(function() {
                                c.removeClass(b.el(), "vjs-vast-ad-loading")
                            }, 100)
                        }
                        u.removeNativePoster(b), u.once(b, ["vast.adsCancel", "vast.adEnd"], function() {
                            t(), e()
                        }), l.waterfall([i, r, a, h], function(t, e) {
                            t ? m(t, e) : b.trigger("vast.adEnd")
                        })
                    }

                    function n() {
                        b.trigger("vast.adsCancel"), T = !0
                    }

                    function h(t) {
                        l.waterfall([f, v], t)
                    }

                    function f(t) {
                        w.getVASTResponse(A.adTagUrl ? A.adTagUrl() : A.adTagXML, t)
                    }

                    function v(t, e) {
                        function n() {
                            l || b.controlBar.getChild("AdsLabel") || b.controlBar.addChild("AdsLabel")
                        }

                        function i() {
                            b.controlBar.removeChild("AdsLabel"), l = !0
                        }

                        function o() {
                            function t() {
                                b.duration() - o > i && (b.pause(!0), b.play(!0), b.currentTime(o))
                            }

                            function e() {
                                var t = b.currentTime(),
                                    e = Math.abs(t - o);
                                e > i ? (r += 1, r >= 2 && b.pause(!0), b.currentTime(o)) : o = t
                            }

                            function n() {
                                b.off("timeupdate", e), b.off("ended", t)
                            }
                            var i = 3,
                                o = 0,
                                r = 0;
                            b.on("timeupdate", e), b.on("ended", t), u.once(b, ["vast.adEnd", "vast.adsCancel", "vast.adError"], n)
                        }
                        if (!T) {
                            var r = g(t) ? new a(b, A) : new s(b),
                                l = !1;
                            u.once(b, ["vast.adStart", "vast.adsCancel"], function(t) {
                                "vast.adStart" === t.type && n()
                            }), u.once(b, ["vast.adEnd", "vast.adsCancel"], i), d.isIDevice() && o(), b.vast.vastResponse = t, p.debug("calling adIntegrator.playAd() with vastResponse:", t), b.vast.adUnit = r.playAd(t, e)
                        }
                    }

                    function m(t, e) {
                        b.trigger({
                            type: "vast.adError",
                            error: t
                        }), n(), p.error("AD ERROR:", t.message, t, e)
                    }

                    function g(t) {
                        var e, n, i = t.mediaFiles;
                        for (e = 0, n = i.length; n > e; e++)
                            if (r.isVPAID(i[e])) return !0;
                        return !1
                    }
                    var y, b = this,
                        w = new i,
                        T = !1,
                        k = {
                            timeout: 500,
                            iosPrerollCancelTimeout: 2e3,
                            adCancelTimeout: 3e3,
                            playAdAlways: !1,
                            adsEnabled: !0,
                            autoResize: !0,
                            vpaidFlashLoaderPath: "/VPAIDFlash.swf",
                            verbosity: 0
                        },
                        A = d.extend({}, k, t || {});
                    return d.isUndefined(A.adTagUrl) && d.isDefined(A.url) && (A.adTagUrl = A.url), d.isString(A.adTagUrl) && (A.adTagUrl = d.echoFn(A.adTagUrl)), d.isDefined(A.adTagXML) && !d.isFunction(A.adTagXML) ? m(new o("on VideoJS VAST plugin, the passed adTagXML option does not contain a function")) : d.isDefined(A.adTagUrl) || d.isFunction(A.adTagXML) ? (p.setVerbosity(A.verbosity), r.runFlashSupportCheck(A.vpaidFlashLoaderPath), u.prepareForAds(b), A.playAdAlways && b.on("vast.contentEnd", function() {
                        setTimeout(function() {
                            b.trigger("vast.reset")
                        }, 0)
                    }), b.on("vast.firstPlay", e), b.on("vast.reset", function() {
                        y = null, n()
                    }), b.vast = {
                        isEnabled: function() {
                            return A.adsEnabled
                        },
                        enable: function() {
                            A.adsEnabled = !0
                        },
                        disable: function() {
                            A.adsEnabled = !1
                        }
                    }, b.vast) : m(new o("on VideoJS VAST plugin, missing adTagUrl on options object"))
                }
            }, {
                "../ads/vast/VASTClient": 22,
                "../ads/vast/VASTError": 23,
                "../ads/vast/VASTIntegrator": 24,
                "../ads/vast/vastUtil": 30,
                "../ads/vpaid/VPAIDIntegrator": 34,
                "../utils/async": 40,
                "../utils/consoleLogger": 41,
                "../utils/dom": 42,
                "../utils/playerUtils": 45,
                "../utils/utilityFunctions": 47
            }
        ],
        40: [
            function(t, e, n) {
                var i = t("./utilityFunctions"),
                    o = {};
                o.setImmediate = function(t) {
                    setTimeout(t, 0)
                }, o.iterator = function(t) {
                    var e = function(n) {
                        var i = function() {
                            return t.length && t[n].apply(null, arguments), i.next()
                        };
                        return i.next = function() {
                            return n < t.length - 1 ? e(n + 1) : null
                        }, i
                    };
                    return e(0)
                }, o.waterfall = function(t, e) {
                    if (e = e || function() {}, !i.isArray(t)) {
                        var n = new Error("First argument to waterfall must be an array of functions");
                        return e(n)
                    }
                    if (!t.length) return e();
                    var r = function(t) {
                        return function(n) {
                            if (n) e.apply(null, arguments), e = function() {};
                            else {
                                var i = Array.prototype.slice.call(arguments, 1),
                                    s = t.next();
                                s ? i.push(r(s)) : i.push(e), o.setImmediate(function() {
                                    t.apply(null, i)
                                })
                            }
                        }
                    };
                    r(o.iterator(t))()
                }, o.when = function(t, e) {
                    if (!i.isFunction(e)) throw new Error("async.when error: missing callback argument");
                    var n = i.isFunction(t) ? t : function() {
                        return !!t
                    };
                    return function() {
                        var t = i.arrayLikeObjToArray(arguments),
                            o = t.pop();
                        return n.apply(null, t) ? e.apply(this, arguments) : (t.unshift(null), o.apply(null, t))
                    }
                }, e.exports = o
            }, {
                "./utilityFunctions": 47
            }
        ],
        41: [
            function(t, e, n) {
                function i(t) {
                    u = t
                }

                function o(t, e) {
                    e.length > 0 && "string" == typeof e[0] && (e[0] = d + e[0]), t.apply ? t.apply(console, Array.prototype.slice.call(e)) : t(Array.prototype.slice.call(e))
                }

                function r() {
                    4 > u || ("undefined" == typeof console.debug ? o(console.log, arguments) : (console.log(arguments), o(console.debug, arguments)))
                }

                function s() {
                    3 > u || o(console.log, arguments)
                }

                function a() {
                    2 > u || o(console.info, arguments)
                }

                function l() {
                    1 > u || o(console.warn, arguments)
                }

                function c() {
                    o(console.error, arguments)
                }
                var u = 0,
                    d = "[videojs-vast-vpaid] ",
                    p = {
                        setVerbosity: i,
                        debug: r,
                        log: s,
                        info: a,
                        warn: l,
                        error: c
                    };
                "undefined" != typeof console && console.log || (p.debug = function() {}, p.log = function() {}, p.info = function() {}, p.warn = function() {}, p.error = function() {}), e.exports = p
            }, {}
        ],
        42: [
            function(t, e, n) {
                "use strict";
                var i = t("./utilityFunctions"),
                    o = {};
                o.isVisible = function(t) {
                    var e = window.getComputedStyle(t);
                    return "hidden" !== e.visibility
                }, o.isHidden = function(t) {
                    var e = window.getComputedStyle(t);
                    return "none" === e.display
                }, o.isShown = function(t) {
                    return !o.isHidden(t)
                }, o.hide = function(t) {
                    t.__prev_style_display_ = t.style.display, t.style.display = "none"
                }, o.show = function(t) {
                    o.isHidden(t) && (t.style.display = t.__prev_style_display_), t.__prev_style_display_ = void 0
                }, o.hasClass = function(t, e) {
                    var n, o, r;
                    if (i.isNotEmptyString(e)) {
                        if (t.classList) return t.classList.contains(e);
                        for (n = i.isString(t.getAttribute("class")) ? t.getAttribute("class").split(/\s+/) : [], e = e || "", o = 0, r = n.length; r > o; o += 1)
                            if (n[o] === e) return !0
                    }
                    return !1
                }, o.addClass = function(t, e) {
                    var n;
                    if (i.isNotEmptyString(e)) {
                        if (t.classList) return t.classList.add(e);
                        n = i.isString(t.getAttribute("class")) ? t.getAttribute("class").split(/\s+/) : [], i.isString(e) && i.isNotEmptyString(e.replace(/\s+/, "")) && (n.push(e), t.setAttribute("class", n.join(" ")))
                    }
                }, o.removeClass = function(t, e) {
                    var n;
                    if (i.isNotEmptyString(e)) {
                        if (t.classList) return t.classList.remove(e);
                        n = i.isString(t.getAttribute("class")) ? t.getAttribute("class").split(/\s+/) : [];
                        var o, r, s = [];
                        if (i.isString(e) && i.isNotEmptyString(e.replace(/\s+/, ""))) {
                            for (o = 0, r = n.length; r > o; o += 1) e !== n[o] && s.push(n[o]);
                            t.setAttribute("class", s.join(" "))
                        }
                    }
                }, o.addEventListener = function(t, e, n) {
                    return i.isArray(t) ? void i.forEach(t, function(t) {
                        o.addEventListener(t, e, n)
                    }) : i.isArray(e) ? void i.forEach(e, function(e) {
                        o.addEventListener(t, e, n)
                    }) : void(t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent && t.attachEvent("on" + e, n))
                }, o.removeEventListener = function(t, e, n) {
                    return i.isArray(t) ? void i.forEach(t, function(t) {
                        o.removeEventListener(t, e, n)
                    }) : i.isArray(e) ? void i.forEach(e, function(e) {
                        o.removeEventListener(t, e, n)
                    }) : void(t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = null)
                }, o.dispatchEvent = function(t, e) {
                    t.dispatchEvent ? t.dispatchEvent(e) : t.fireEvent("on" + e.eventType, e)
                }, o.isDescendant = function(t, e) {
                    for (var n = e.parentNode; null !== n;) {
                        if (n === t) return !0;
                        n = n.parentNode
                    }
                    return !1
                }, o.getTextContent = function(t) {
                    return t.textContent || t.text
                }, o.prependChild = function(t, e) {
                    return e.parentNode && e.parentNode.removeChild(e), t.insertBefore(e, t.firstChild)
                }, o.remove = function(t) {
                    t && t.parentNode && t.parentNode.removeChild(t)
                }, o.isDomElement = function(t) {
                    return t instanceof Element
                }, o.click = function(t, e) {
                    o.addEventListener(t, "click", e)
                }, o.once = function(t, e, n) {
                    function i() {
                        n.apply(null, arguments), o.removeEventListener(t, e, i)
                    }
                    o.addEventListener(t, e, i)
                }, o.getDimension = function(t) {
                    var e;
                    return !i.isOldIE() && t.getBoundingClientRect ? (e = t.getBoundingClientRect(), {
                        width: e.width,
                        height: e.height
                    }) : {
                        width: t.offsetWidth,
                        height: t.offsetHeight
                    }
                }, e.exports = o
            }, {
                "./utilityFunctions": 47
            }
        ],
        43: [
            function(t, e, n) {
                "use strict";

                function i(t) {
                    this.message = "HttpRequest Error: " + (t || "")
                }

                function o(t) {
                    if (!a.isFunction(t)) throw new i("Missing XMLHttpRequest factory method");
                    this.createXhr = t
                }

                function r() {
                    var t = new XMLHttpRequest;
                    return "withCredentials" in t || (t = new XDomainRequest), t
                }
                var s = t("./urlUtils"),
                    a = t("./utilityFunctions");
                i.prototype = new Error, i.prototype.name = "HttpRequest Error", o.prototype.run = function(t, e, n, o) {
                    function r(t, e, n) {
                        if (!a.isString(t) || a.isEmptyString(t)) throw new i("Invalid url '" + t + "'");
                        if (!a.isFunction(e)) throw new i("Invalid handler '" + e + "' for the http request");
                        if (a.isDefined(n) && !a.isObject(n)) throw new i("Invalid options map '" + n + "'")
                    }

                    function l(t, e) {
                        a.forEach(e, function(e, n) {
                            a.isDefined(e) && t.setRequestHeader(n, e)
                        })
                    }

                    function c() {
                        n(-1, null, null, "")
                    }
                    r(e, n, o);
                    var u, d, p = this.createXhr();
                    o = o || {}, u = a.isNumber(o.timeout) ? o.timeout : 0, p.open(t, s.urlParts(e).href, !0), o.headers && l(p, o.headers), o.withCredentials && (p.withCredentials = !0), p.onload = function() {
                        var t, e, i;
                        p.getAllResponseHeaders || (p.getAllResponseHeaders = function() {
                            return null
                        }), p.status || (p.status = 200), a.isDefined(d) && (clearTimeout(d), d = void 0), t = p.statusText || "", e = "response" in p ? p.response : p.responseText, i = 1223 === p.status ? 204 : p.status, n(i, e, p.getAllResponseHeaders(), t)
                    }, p.onerror = c, p.onabort = c, p.send(), u > 0 && (d = setTimeout(function() {
                        p && p.abort()
                    }, u))
                }, o.prototype.get = function(t, e, n) {
                    function o(t, n, o, s) {
                        r(t) ? e(null, n, t, o, s) : e(new i(s), n, t, o, s)
                    }

                    function r(t) {
                        return t >= 200 && 300 > t
                    }
                    this.run("GET", t, o, n)
                };
                var l = new o(r);
                e.exports = {
                    http: l,
                    HttpRequest: o,
                    HttpRequestError: i,
                    createXhr: r
                }
            }, {
                "./urlUtils": 46,
                "./utilityFunctions": 47
            }
        ],
        44: [
            function(t, e, n) {
                "use strict";
                e.exports = {
                    html5: ["text/javascript", "text/javascript1.0", "text/javascript1.2", "text/javascript1.4", "text/jscript", "application/javascript", "application/x-javascript", "text/ecmascript", "text/ecmascript1.0", "text/ecmascript1.2", "text/ecmascript1.4", "text/livescript", "application/ecmascript", "application/x-ecmascript"],
                    flash: ["application/x-shockwave-flash"]
                }
            }, {}
        ],
        45: [
            function(t, e, n) {
                "use strict";
                var i = t("./dom"),
                    o = t("./utilityFunctions"),
                    r = {};
                r.getPlayerSnapshot = function(t) {
                    function e(t) {
                        var e = t.remoteTextTracks ? t.remoteTextTracks() : [];
                        e && o.isArray(e.tracks_) && (e = e.tracks_), o.isArray(e) || (e = []);
                        var n = [];
                        return e.forEach(function(t) {
                            n.push({
                                track: t,
                                mode: t.mode
                            }), t.mode = "disabled"
                        }), n
                    }
                    var n = t.el().querySelector(".vjs-tech"),
                        i = {
                            ended: t.ended(),
                            src: t.currentSrc(),
                            currentTime: t.currentTime(),
                            type: t.currentType(),
                            playing: !t.paused(),
                            suppressedTracks: e(t)
                        };
                    return n && (i.nativePoster = n.poster, i.style = n.getAttribute("style")), i
                }, r.restorePlayerSnapshot = function(t, e) {
                    function n() {
                        var e = setTimeout(function() {
                            t.trigger("canplay")
                        }, 1e3);
                        t.one("canplay", function() {
                            clearTimeout(e)
                        })
                    }

                    function i(t, e) {
                        return t.src() ? t.src() !== e.src : t.currentSrc() !== e.src
                    }

                    function o() {
                        var t = e.suppressedTracks;
                        t.forEach(function(t) {
                            t.track.mode = t.mode
                        })
                    }

                    function s() {
                        if (!r.isReadyToResume(t) && l--) setTimeout(s, 50);
                        else try {
                            t.currentTime() !== e.currentTime ? (e.playing && t.one("seeked", function() {
                                t.play()
                            }), t.currentTime(e.currentTime)) : e.playing && t.play()
                        } catch (n) {
                            videojs.log.warn("Failed to resume the content after an advertisement", n)
                        }
                    }
                    var a = t.el().querySelector(".vjs-tech"),
                        l = 20;
                    e.nativePoster && (a.poster = e.nativePoster), "style" in e && a.setAttribute("style", e.style || ""), i(t, e) ? (t.one("contentloadedmetadata", o), t.one("canplay", s), n(), t.src({
                        src: e.src,
                        type: e.type
                    }), t.load()) : (o(), e.playing && t.play())
                }, r.isReadyToResume = function(t) {
                    return t.readyState() > 1 ? !0 : void 0 === t.seekable() ? !0 : t.seekable().length > 0 ? !0 : !1
                }, r.prepareForAds = function(t) {
                    function e() {
                        var e = t.play;
                        t.play = function(i) {
                            function r() {
                                o.isIPhone() || (f = l(), t.muted(!0)), e.apply(c, arguments)
                            }

                            function s(i) {
                                n() && !i ? t.vast.adUnit.resumeAd() : e.apply(c, arguments)
                            }
                            var c = this;
                            return a() ? r() : s(i), this
                        };
                        var i = t.pause;
                        t.pause = function(e) {
                            return n() && !e ? t.vast.adUnit.pauseAd() : i.apply(this, arguments), this
                        };
                        var r = t.paused;
                        t.paused = function(e) {
                            return n() && !e ? t.vast.adUnit.isPaused() : r.apply(this, arguments)
                        }
                    }

                    function n() {
                        return t.vast && t.vast.adUnit
                    }

                    function r() {
                        a() && (m = !1, t.trigger("vast.firstPlay"))
                    }

                    function s() {
                        m = !0, v.show(), c()
                    }

                    function a() {
                        return m
                    }

                    function l() {
                        return {
                            muted: t.muted(),
                            volume: t.volume()
                        }
                    }

                    function c() {
                        f && (t.currentTime(0), u(f), f = null)
                    }

                    function u(e) {
                        o.isObject(e) && (t.volume(e.volume), t.muted(e.muted))
                    }

                    function d() {
                        i.hasClass(v.el(), "vjs-hidden") || v.hide()
                    }

                    function p() {
                        i.addClass(t.el(), "vjs-ad-playing")
                    }

                    function h() {
                        i.removeClass(t.el(), "vjs-ad-playing")
                    }
                    var f, v = t.addChild("blackPoster"),
                        m = !0;
                    e(), t.on("play", r), t.on("vast.reset", s), t.on("vast.firstPlay", c), t.on("error", d), t.on("vast.adStart", d), t.on("vast.adsCancel", d), t.on("vast.adError", d), t.on("vast.adStart", p), t.on("vast.adEnd", h), t.on("vast.adsCancel", h)
                }, r.removeNativePoster = function(t) {
                    var e = t.el().querySelector(".vjs-tech");
                    e && e.removeAttribute("poster")
                }, r.once = function(t, e, n) {
                    function i() {
                        n.apply(null, arguments), e.forEach(function(e) {
                            t.off(e, i)
                        })
                    }
                    e.forEach(function(e) {
                        t.on(e, i)
                    })
                }, e.exports = r
            }, {
                "./dom": 42,
                "./utilityFunctions": 47
            }
        ],
        46: [
            function(t, e, n) {
                "use strict";

                function i(t) {
                    var e = t;
                    return l && (a.setAttribute("href", e), e = a.href), a.setAttribute("href", e), {
                        href: a.href,
                        protocol: a.protocol ? a.protocol.replace(/:$/, "") : "",
                        host: a.host,
                        search: a.search ? a.search.replace(/^\?/, "") : "",
                        hash: a.hash ? a.hash.replace(/^#/, "") : "",
                        hostname: a.hostname,
                        port: s.isNotEmptyString(a.port) ? a.port : 80,
                        pathname: "/" === a.pathname.charAt(0) ? a.pathname : "/" + a.pathname
                    }
                }

                function o(t, e) {
                    var n, i;
                    return e = s.isFunction(e) ? e : function() {
                        return !0
                    }, t = t.trim().replace(/^\?/, ""), n = t.split("&"), i = {}, s.forEach(n, function(t) {
                        var n, o, r;
                        "" !== t && (n = t.split("="), o = n[0], r = n[1], e(o, r) && (i[o] = r))
                    }), i
                }

                function r(t) {
                    var e = [];
                    return s.forEach(t, function(t, n) {
                        e.push(n + "=" + t)
                    }), e.join("&")
                }
                var s = t("./utilityFunctions"),
                    a = document.createElement("a"),
                    l = document.documentMode;
                e.exports = {
                    urlParts: i,
                    queryStringToObj: o,
                    objToQueryString: r
                }
            }, {
                "./utilityFunctions": 47
            }
        ],
        47: [
            function(t, e, n) {
                function i() {}

                function o(t) {
                    return null === t
                }

                function r(t) {
                    return void 0 !== t
                }

                function s(t) {
                    return void 0 === t
                }

                function a(t) {
                    return "object" == typeof t
                }

                function l(t) {
                    return "function" == typeof t
                }

                function c(t) {
                    return "number" == typeof t
                }

                function u(t) {
                    return U.isObject(t) && t.window === t
                }

                function d(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }

                function p(t) {
                    if (null === t || U.isWindow(t) || U.isFunction(t) || U.isUndefined(t)) return !1;
                    var e = t.length;
                    return t.nodeType === V && e ? !0 : U.isString(t) || U.isArray(t) || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
                }

                function h(t) {
                    return "string" == typeof t
                }

                function f(t) {
                    return U.isString(t) && 0 === t.length
                }

                function v(t) {
                    return U.isString(t) && 0 !== t.length
                }

                function m(t) {
                    return Array.prototype.slice.call(t)
                }

                function g(t, e, n) {
                    var i, o;
                    if (t)
                        if (l(t))
                            for (i in t) "prototype" === i || "length" === i || "name" === i || t.hasOwnProperty && !t.hasOwnProperty(i) || e.call(n, t[i], i, t);
                        else if (d(t)) {
                        var r = "object" != typeof t;
                        for (i = 0, o = t.length; o > i; i++)(r || i in t) && e.call(n, t[i], i, t)
                    } else if (t.forEach && t.forEach !== g) t.forEach(e, n, t);
                    else
                        for (i in t) t.hasOwnProperty(i) && e.call(n, t[i], i, t);
                    return t
                }

                function y(t, e) {
                    return e = e || "_", t.replace(D, function(t, n) {
                        return (n ? e : "") + t.toLowerCase()
                    })
                }

                function b(t) {
                    return U.isString(t) ? R.test(t.trim()) : !1
                }

                function w(t) {
                    var e, n, i;
                    for (n = 1; n < arguments.length; n++) {
                        e = arguments[n];
                        for (i in e) e.hasOwnProperty(i) && (a(t[i]) && !o(t[i]) && a(e[i]) ? t[i] = w({}, t[i], e[i]) : t[i] = e[i])
                    }
                    return t
                }

                function T(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1)
                }

                function k(t) {
                    return t.charAt(0).toLowerCase() + t.slice(1)
                }

                function A(t, e) {
                    var n = [];
                    return t.forEach(function(t, i) {
                        var o = e(t, i);
                        U.isDefined(o) && n.push(o)
                    }), n
                }

                function j(t, e) {
                    var n = t + "";
                    if (e = U.isNumber(e) ? e : 0, t = U.isNumber(t) ? t : parseInt(t, 10), U.isNumber(t) && !isNaN(t)) {
                        for (n = t + ""; n.length < e;) n = "0" + n;
                        return n
                    }
                    return "NaN"
                }

                function S(t, e) {
                    var n = (new Date).getTime() - (e + 1);
                    return function() {
                        var i = (new Date).getTime();
                        i - n >= e && (n = i, t.apply(this, arguments))
                    }
                }

                function C(t, e) {
                    var n;
                    return function() {
                        n && clearTimeout(n), n = setTimeout(function() {
                            t.apply(this, arguments), n = void 0
                        }, e)
                    }
                }

                function E(t, e, n) {
                    for (var i = e(t), o = 0; o < i.length; o++) {
                        if (n(i[o])) return i[o];
                        var r = E(i[o], e, n);
                        if (r) return r
                    }
                }

                function x(t) {
                    return function() {
                        return t
                    }
                }

                function _(t) {
                    return U.isNumber(t) && (t += ""), U.isString(t) ? O.test(t.trim()) : !1
                }

                function I() {
                    var t = U.getInternetExplorerVersion(navigator);
                    return -1 === t ? !1 : 10 > t
                }

                function L(t) {
                    var e = -1;
                    if ("Microsoft Internet Explorer" == t.appName) {
                        var n = t.userAgent,
                            i = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"),
                            o = i.exec(n);
                        null !== o && (e = parseFloat(o[1]))
                    }
                    return e
                }

                function M() {
                    return /iP(hone|ad)/.test(U._UA)
                }

                function P() {
                    return /iP(hone|ad|od)|Android|Windows Phone/.test(U._UA)
                }

                function N() {
                    return /iP(hone|od)/.test(U._UA)
                }

                function F() {
                    return /Android/.test(U._UA)
                }
                var V = 1,
                    D = /[A-Z]/g,
                    R = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i,
                    O = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,
                    U = {
                        _UA: navigator.userAgent,
                        noop: i,
                        isNull: o,
                        isDefined: r,
                        isUndefined: s,
                        isObject: a,
                        isFunction: l,
                        isNumber: c,
                        isWindow: u,
                        isArray: d,
                        isArrayLike: p,
                        isString: h,
                        isEmptyString: f,
                        isNotEmptyString: v,
                        arrayLikeObjToArray: m,
                        forEach: g,
                        snake_case: y,
                        isValidEmail: b,
                        extend: w,
                        capitalize: T,
                        decapitalize: k,
                        transformArray: A,
                        toFixedDigits: j,
                        throttle: S,
                        debounce: C,
                        treeSearch: E,
                        echoFn: x,
                        isISO8601: _,
                        isOldIE: I,
                        getInternetExplorerVersion: L,
                        isIDevice: M,
                        isMobile: P,
                        isIPhone: N,
                        isAndroid: F
                    };
                e.exports = U
            }, {}
        ],
        48: [
            function(t, e, n) {
                "use strict";
                var i = t("./utilityFunctions"),
                    o = {};
                o.strToXMLDoc = function(t) {
                    function e(t) {
                        var e, o = new DOMParser;
                        try {
                            if (e = o.parseFromString(t, "application/xml"), n(e) || i.isEmptyString(t)) throw new Error
                        } catch (r) {
                            throw new Error("xml.strToXMLDOC: Error parsing the string: '" + t + "'")
                        }
                        return e
                    }

                    function n(t) {
                        try {
                            var e = new DOMParser,
                                n = e.parseFromString("INVALID", "text/xml"),
                                i = n.getElementsByTagName("parsererror")[0].namespaceURI;
                            return "http://www.w3.org/1999/xhtml" === i ? t.getElementsByTagName("parsererror").length > 0 : t.getElementsByTagNameNS(i, "parsererror").length > 0
                        } catch (o) {}
                    }
                    if ("undefined" == typeof window.DOMParser) {
                        var o = new ActiveXObject("Microsoft.XMLDOM");
                        return o.async = !1, o.loadXML(t), o
                    }
                    return e(t)
                }, o.parseText = function(t) {
                    return /^\s*$/.test(t) ? null : /^(?:true|false)$/i.test(t) ? "true" === t.toLowerCase() : isFinite(t) ? parseFloat(t) : i.isISO8601(t) ? new Date(t) : t.trim()
                }, o.JXONTree = function(t) {
                    var e = o.parseText;
                    if (t.documentElement) return new o.JXONTree(t.documentElement);
                    if (t.hasChildNodes()) {
                        for (var n, r, s, a = "", l = 0; l < t.childNodes.length; l++) n = t.childNodes.item(l), 3 === (n.nodeType - 1 | 1) ? a += 3 === n.nodeType ? n.nodeValue.trim() : n.nodeValue : 1 !== n.nodeType || n.prefix || (r = i.decapitalize(n.nodeName), s = new o.JXONTree(n), this.hasOwnProperty(r) ? (this[r].constructor !== Array && (this[r] = [this[r]]), this[r].push(s)) : this[r] = s);
                        a && (this.keyValue = e(a))
                    }
                    var c = "undefined" == typeof t.hasAttributes ? t.attributes.length > 0 : t.hasAttributes();
                    if (c)
                        for (var u, d = 0; d < t.attributes.length; d++) u = t.attributes.item(d), this["@" + i.decapitalize(u.name)] = e(u.value.trim())
                }, o.JXONTree.prototype.attr = function(t) {
                    return this["@" + i.decapitalize(t)]
                }, o.toJXONTree = function(t) {
                    var e = o.strToXMLDoc(t);
                    return new o.JXONTree(e)
                }, o.keyValue = function(t) {
                    return t ? t.keyValue : void 0
                }, o.attr = function(t, e) {
                    return t ? t["@" + i.decapitalize(e)] : void 0
                }, o.encode = function(t) {
                    return i.isString(t) ? t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") : void 0
                }, o.decode = function(t) {
                    return i.isString(t) ? t.replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&amp;/g, "&") : void 0
                }, e.exports = o
            }, {
                "./utilityFunctions": 47
            }
        ],
        49: [
            function(t, e, n) {
                "use strict";
                t("./plugin/components/ads-label_4"), t("./plugin/components/black-poster_4");
                var i = t("./plugin/videojs.vast.vpaid");
                videojs.plugin("vastClient", i)
            }, {
                "./plugin/components/ads-label_4": 36,
                "./plugin/components/black-poster_4": 38,
                "./plugin/videojs.vast.vpaid": 39
            }
        ]
    }, {}, [49]),
    function(t) {
        "function" == typeof define && define.amd ? define("agegate", ["videojs"], function(e) {
            t(e)
        }) : t(videojs)
    }(function(t) {
        var e = function(t) {
            var e = {
                    1: "一般觀眾皆可觀賞。",
                    2: "未滿6歲之兒童不宜觀賞，6歲以上未滿12歲之兒童需父母、師長或成年親友陪伴觀賞。",
                    3: "未滿12歲之兒童不宜觀賞。",
                    4: "未滿15歲之人不宜觀賞。",
                    5: "未滿18歲之人不宜觀賞。"
                },
                n = {
                    1: "TW-ALL.png",
                    2: "TW-6TO12.png",
                    3: "TW-12TO15.png",
                    4: "TW-15TO18.png",
                    5: "TW-18UP.png"
                },
                i = this,
                o = document.createElement("div"),
                r = o.cloneNode(!1);
            if (r.className = "R18", 0 !== i.promote.length) {
                var a = o.cloneNode(!1);
                a.id = "promote-div", a.className = "promote", "" !== i.promote.url && (a.onclick = function() {
                    window.open(i.promote.url)
                });
                var l = "";
                l += '<div class="promote-img">', l += '<img src="' + i.promote.cover + '">', l += "</div>", l += '<div class="promote-content">', l += "<p>[" + i.promote.publisher + "情報站]</p>", l += "<p>" + i.promote.content + "</p>", l += "</div>", a.innerHTML = l, r.appendChild(a)
            }
            var c = o.cloneNode(!1);
            if (c.className = "video-cover-ncc", l = '<div class="ncc-choosearea">', l += '<img src="https://i2.bahamut.com.tw/anime/' + n[t] + '">', l += '<div class="ncc-choosebar">', l += "<p>" + e[t] + "</p>", l += '<div class="ncc-choose-btn">', l += '<button class="choose-btn-agree" id="adult">同意</button><button class="choose-btn-disagree" id="not-adult">不同意</button>', l += "</div></div></div>", c.innerHTML = l, r.appendChild(c), i.sponsorText) {
                var u = o.cloneNode(!1);
                u.className = "sponsorship-text";
                var d = s.cloneNode(!1);
                d.innerHTML = i.sponsorText, u.appendChild(d), r.appendChild(u)
            }
            i.el().appendChild(r), document.getElementById("not-adult").onclick = function() {
                setTimeout(function() {
                    window.location = "http://ani.gamer.com.tw/index.php"
                }, 500), i.dispose()
            }, 0 !== i.promote.length && setTimeout(function() {
                document.getElementById("promote-div").classList.add("promote-animate")
            }, 100)
        };
        t.plugin("ageGate", e)
    }),
    function(t) {
        "function" == typeof define && define.amd ? define("breakpoint", ["videojs"], function(e) {
            t(window, document, e)
        }) : t(window, document, videojs)
    }(function(t, e, n) {
        var i = function() {
                try {
                    return t.localStorage.setItem("persistVolume", "persistVolume"), t.localStorage.removeItem("persistVolume"), !0
                } catch (e) {
                    return !1
                }
            },
            o = function(e) {
                return i() ? t.localStorage.getItem(e) : null
            },
            r = function(e, n) {
                return i() ? t.localStorage.setItem(e, n) : null
            },
            s = function(e) {
                return i() ? t.localStorage.removeItem(e) : null
            },
            a = function() {
                var t = arguments;
                return t.length <= 0 ? !1 : void
                function e(n) {
                    n >= t.length || "function" != typeof t[n] || setTimeout(function() {
                        t[n](), e(n + 1)
                    }, 500 * n)
                }(0)
            },
            l = {
                namespace: "",
                del: !1
            },
            c = function(t) {
                var e = this,
                    i = n.util.mergeOptions(l, t),
                    c = i.namespace + "_BP";
                if (i.del) s(c);
                else {
                    e.setInterval(function() {
                        if (this.currentTime() > 0 && this.el().classList.contains("vjs-playing")) {
                            var t = '{"sn":"' + animefun.videoSn + '","time":"' + this.currentTime() + '"}';
                            r(c, t)
                        }
                    }, 5e3);
                    var u = o(c);
                    BPjson = JSON.parse(u), null !== u && animefun.videoSn == BPjson.sn && 5 <= Math.abs(e.duration() - parseInt(BPjson.time, 10)) ? a(function() {
                        e.pause()
                    }, function() {
                        e.currentTime(BPjson.time)
                    }, function() {
                        e.play()
                    }, function() {
                        e.trigger("breakpoint")
                    }) : e.trigger("breakpoint")
                }
            };
        n.plugin("breakPoint", c);
    }),
    function(t) {
        "function" == typeof define && define.amd ? define("elapse", ["videojs"], function(e) {
            t(window, e, jQuery)
        }) : t(window, videojs, jQuery)
    }(function(t, e, n) {
        var i = {
                sendElapse: function(t, e) {
                    t.deviceID || (t.deviceID = e.getdeviceid(), e.setStorageItem("ANIME_deviceid", t.deviceID)), n.ajax({
                        url: "/ajax/elapse.php?sn=" + e.videoSn + "&device=" + t.deviceID,
                        success: function(n) {
                            if (obj = JSON.parse(n), "ok" == obj.state) obj.device && (t.deviceID = obj.device, e.setStorageItem("ANIME_deviceid", t.deviceID));
                            else switch (obj.state) {
                                case 1:
                                    t.errPageCCL("尚未登入，請進行登入。");
                                    break;
                                case 2:
                                    t.error('錯誤代碼1，影片傳輸中斷，請參考<a href="http://ani.gamer.com.tw/anime403info.php">可能原因</a>');
                                    break;
                                case 3:
                                    t.errPageCCL("登入狀態異常(2)。");
                                    break;
                                case 4:
                                    t.errPageCCL("本服務同時間內僅提供播放一部影片！");
                                    break;
                                case 5:
                                    t.errPageCCL("登入狀態異常(3)。");
                                    break;
                                case 6:
                                    t.error("登入狀態異常(4)。");
                                    break;
                                default:
                                    t.errPageCCL("已偵測到新的裝置登入！<br>本服務同時間內僅允許一個裝置登入使用！")
                            }
                        }
                    })
                },
                videoStateChanged: function(t, e) {
                    n.ajax({
                        url: "/ajax/unlock.php?sn=" + t + "&ttl=" + parseInt(e, 10),
                        success: function() {}
                    })
                }
            },
            o = function(e) {
                function n(t, e) {
                    e.total >= 60 * (e.counter + 1) && (i.sendElapse(t, o), t.total_time = e.total, e.counter++);
                    var n = t.currentTime();
                    !t.seeking() && !t.paused() && Math.abs(n - e.end) < .6 ? e.end = n : (e.base = e.total, e.start = e.end = n);
                    var r = e.end - e.start;
                    e.total = e.base + r
                }
                var o = t.animefun,
                    r = this,
                    s = e.adenable,
                    a = {
                        start: 0,
                        end: 0,
                        base: 0,
                        total: 0,
                        counter: 0
                    };
                s ? r.one(["vast.adEnd", "vpaid.adEnd"], function() {
                    r.on("timeupdate", function() {
                        n(r, a)
                    })
                }) : r.on("timeupdate", function() {
                    n(r, a)
                }), ["play", "pause", "ended"].forEach(function(t) {
                    r.on(t, function() {
                        i.videoStateChanged(o.videoSn, a.total)
                    })
                })
            };
        e.plugin("elapse", o)
    }),
    function(t) {
        "function" == typeof define && define.amd ? define("danmu", ["videojs"], function(e) {
            t(window, e, jQuery)
        }) : t(window, videojs, jQuery)
    }(function(t, e, n) {
        var i = function() {
            function e(e) {
                function i(t) {
                    "string" == typeof t && (t = JSON.parse(t));
                    var e = t;
                    if (e.length) {
                        for (var n in e)
                            if ("object" == typeof e[n]) {
                                switch (e[n].size) {
                                    case 0:
                                        e[n].size = 16;
                                        break;
                                    case 1:
                                        e[n].size = 24;
                                        break;
                                    case 2:
                                        e[n].size = 28
                                }
                                switch (e[n].position) {
                                    case 0:
                                        e[n].mode = 1;
                                        break;
                                    case 1:
                                        e[n].mode = 5;
                                        break;
                                    case 2:
                                        e[n].mode = 4;
                                        break;
                                    default:
                                        e[n].mode = 1
                                }
                                e[n].stime = 100 * e[n].time
                            }
                    } else {
                        switch (e.size) {
                            case 0:
                                e.size = 16;
                                break;
                            case 1:
                                e.size = 24;
                                break;
                            case 2:
                                e.size = 28
                        }
                        switch (e.position) {
                            case 0:
                                e.mode = 1;
                                break;
                            case 1:
                                e.mode = 5;
                                break;
                            case 2:
                                e.mode = 4;
                                break;
                            default:
                                e.mode = 1
                        }
                        e.stime = 100 * e.time
                    }
                    return e
                }
                var o = this;
                if (this.danmuDiv = document.createElement("div"), this.danmuDiv.className = "vjs-danmu", e.el().insertBefore(this.danmuDiv, e.el().getElementsByClassName("vjs-poster")[0]), e.on("timeupdate", function() {
                    animefun.danmu_time = Math.floor(10 * e.currentTime().toFixed(1))
                }), "undefined" != typeof CommentManager) {
                    this.cmManager = new CommentManager(this.danmuDiv), this.cmManager.display = !0, this.cmManager.isAD = !0, this.cmManager.init("canvas"), this.cmManager.clear();
                    var r = e.el().children[0],
                        s = 0,
                        a = !0,
                        l = 2;
                    r.addEventListener("progress", function() {
                        s == r.currentTime ? (r.hasStalled = !0, o.cmManager.stopTimer()) : s = r.currentTime
                    }), r.addEventListener("timeupdate", function() {
                        if (o.cmManager.display !== !1 && o.cmManager.isAD !== !0) {
                            r.hasStalled && (o.cmManager.startTimer(), r.hasStalled = !1), o.cmManager.time(Math.floor(1e3 * r.currentTime));
                            var t = r.currentTime,
                                e = parseInt(t, 10),
                                n = e % l === 0 && 0 !== e;
                            n && a ? (animefun.checkdanmulist(animefun.danmu_status), a = !1) : a || setTimeout(function() {
                                a = !0
                            }, 1e3)
                        }
                    }), ["pause", "waiting"].forEach(function(t) {
                        r.addEventListener(t, function() {
                            o.cmManager.stopTimer()
                        })
                    }), ["play", "playing"].forEach(function(t) {
                        r.addEventListener(t, function() {
                            o.cmManager.startTimer()
                        })
                    }), r.addEventListener("seeked", function() {
                        o.cmManager.clear()
                    }), r.onresize = function() {
                        o.cmManager.setBounds()
                    }, t && t.addEventListener("resize", function() {
                        o.cmManager.setBounds()
                    }), this.load = function(t) {
                        null == t && (t = function() {});
                        var e = o.cmManager;
                        e.options.scroll.scale = 2.5;
                        var n = r;
                        animefun.danmu.length ? "Microsoft Internet Explorer" == navigator.appName ? (e.load(i(animefun.danmu)), e.seek(1e3 * n.currentTime), t(!0)) : (e.seek(1e3 * n.currentTime), e.load(i(animefun.danmu)), t(!0)) : t(!1), animefun.danmu_status = !0, animefun.danmuInsert = function(t) {
                            t = i(t), e.send(t), e.insert(t)
                        }, animefun.updatedanmu = function() {
                            var t = animefun.danmu.length ? i(animefun.danmu) : [];
                            e.init(), e.load(t), e.seek(1e3 * n.currentTime)
                        }
                    };
                    var c = e.controlBar.getChildById("danmuToggle"),
                        u = n("#danmuturn");
                    [c, u].forEach(function(t) {
                        t.on("click", function() {
                            c.c.classList.contains("vjs-danmu-close") ? (e.danmu.cmManager.display = !0, $("#danmu-show").prop("checked", !0)) : (e.danmu.cmManager.display = !1, e.danmu.cmManager.clear(), $("#danmu-show").prop("checked", !1))
                        })
                    });
                    var d = e.controlBar.getChildById("theaterToggle"),
                        p = e.controlBar.getChildById("fullscreenToggle");
                    [d, p].forEach(function(t) {
                        t.on("click", function() {
                            o.cmManager.setBounds()
                        })
                    })
                }
                return this
            }
            var i = this;
            i.danmu = new e(i)
        };
        e.plugin("danmuCCL", i)
    }),
    function(t) {
        "function" == typeof define && define.amd ? define("hotkeys", ["videojs"], function(e) {
            t(window, e)
        }) : t(window, videojs)
    }(function(t, e) {
        var n = function(t) {
                var e, n, i;
                for (n = 1; n < arguments.length; n++) {
                    e = arguments[n];
                    for (i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }
                return t
            },
            i = function(t) {
                var e = this,
                    i = e.controlBar,
                    o = {
                        volumeStep: .1,
                        seekStep: 5,
                        enableMute: !0,
                        enableFullscreen: !0,
                        enableNumbers: !0,
                        enableJogStyle: !1,
                        alwaysCaptureHotkeys: !1
                    };
                t = n({}, o, t || {});
                var r = t.volumeStep,
                    s = t.seekStep,
                    a = t.enableMute,
                    l = t.enableFullscreen,
                    c = t.enableNumbers,
                    u = t.enableJogStyle,
                    d = t.alwaysCaptureHotkeys;
                e.el().hasAttribute("tabIndex") || e.el().setAttribute("tabIndex", "-1"), d && e.one("play", function() {
                    e.el().focus()
                }), e.on("play", function() {
                    var t = e.el().querySelector(".iframeblocker");
                    t && "" === t.style.display && (t.style.display = "block", t.style.bottom = "39px")
                });
                var p = function(t) {
                        var n, o = t.which;
                        if (e.controls()) {
                            var p = document.activeElement;
                            if (d || p == e.el() || p == e.el().querySelector(".vjs-tech") || p == e.el().querySelector(".vjs-control-bar") || p == e.el().querySelector(".iframeblocker")) switch (o) {
                                case 32:
                                    t.preventDefault(), d && t.stopPropagation(), e.paused() ? e.play() : e.pause();
                                    break;
                                case 37:
                                    t.preventDefault(), n = e.currentTime() - s, e.currentTime() <= s && (n = 0), e.currentTime(n);
                                    break;
                                case 39:
                                    t.preventDefault(), e.currentTime(e.currentTime() + s);
                                    break;
                                case 40:
                                    t.preventDefault(), u ? (n = e.currentTime() - 1, e.currentTime() <= 1 && (n = 0), e.currentTime(n)) : e.volume(e.volume() - r);
                                    break;
                                case 38:
                                    t.preventDefault(), u ? e.currentTime(e.currentTime() + 1) : e.volume(e.volume() + r);
                                    break;
                                case 77:
                                    a && (e.muted() ? e.muted(!1) : e.muted(!0));
                                    break;
                                case 84:
                                    i.getChildById("theaterToggle").el().click();
                                    break;
                                case 70:
                                    l && (e.isFullscreen() ? e.exitFullscreen() : e.requestFullscreen());
                                    break;
                                default:
                                    if ((o > 47 && 59 > o || o > 95 && 106 > o) && c) {
                                        var h = 48;
                                        o > 95 && (h = 96);
                                        var f = o - h;
                                        t.preventDefault(), e.currentTime(e.duration() * f * .1)
                                    }
                            }
                        }
                    },
                    h = function(t) {
                        if (e.controls()) {
                            var n = t.relatedTarget || t.toElement || document.activeElement;
                            (n == e.el() || n == e.el().querySelector(".vjs-tech") || n == e.el().querySelector(".iframeblocker")) && l && (e.isFullscreen() ? e.exitFullscreen() : e.requestFullscreen())
                        }
                    };
                return e.on("keydown", p), e.on("dblclick", h), this
            };
        e.plugin("hotkeys", i)
    }),
    function(t) {
        "function" == typeof define && define.amd ? define("overlay", ["videojs"], function(e) {
            t(window, e, jQuery)
        }) : t(window, videojs, jQuery)
    }(function(t, e, n) {
        var i, o, r, s = {
                content: "TeeHee",
                overlays: [{
                    start: "playing",
                    end: "paused"
                }]
            },
            a = function(t, e) {
                return t.start - e.start
            },
            l = function(t, e) {
                return t.end - e.end
            };
        i = function(t, e, n) {
            var i = document.createElement("div"),
                o = n.content || e.content,
                r = e.align || n.align,
                s = e["class"] || n["class"],
                a = e.clickfunction || n.clickfunction;
            i.className = "vjs-overlay", n.el = i, a && (i.onclick = a), r && (i.className += " vjs-overlay-" + r), s && (i.className += " " + s), "string" == typeof o ? i.innerHTML = o : i.appendChild(o), t.el().appendChild(i)
        }, o = function(t, e, n) {
            n.el && (n.el.parentNode.removeChild(n.el), delete n.el)
        }, r = function(t) {
            var n, r, c = e.util.mergeOptions(s, t),
                u = this,
                d = {},
                p = [],
                h = [],
                f = function(t) {
                    for (var e, n = d[t.type], o = n.length; o--;) e = n[o], e.el || i(u, c, e)
                },
                v = function(t) {
                    for (var e, n = d[t.type], i = n.length; i--;) e = n[i], e.el && o(u, c, e)
                },
                m = function(t, e, n, i) {
                    var o, r = 0,
                        s = 0;
                    o = function() {
                        var o = t[s],
                            a = u.currentTime();
                        for (r > a && (s = 0, o = t[s]); o && i(o[e], a); o = t[++s]) n(u, c, o);
                        r = a
                    }, u.on("timeupdate", o), u.overlay.eventListeners.push({
                        type: "timeupdate",
                        fn: o
                    })
                };
            ! function() {
                var t, e;
                for (e in u.overlay.eventListeners) t = u.overlay.eventListeners[e], u.off(t.type, t.fn)
            }(), u.overlay.eventListeners = [];
            for (r in c.overlays) n = c.overlays[r], "string" == typeof n.start ? (d[n.start] || (d[n.start] = [], u.on(n.start, f), u.overlay.eventListeners.push({
                type: n.start,
                fn: f
            })), d[n.start].push(n)) : p.push(n), "string" == typeof n.end ? (d[n.end] || (d[n.end] = [], u.on(n.end, v), u.overlay.eventListeners.push({
                type: n.end,
                fn: v
            })), d[n.end].push(n)) : h.push(n);
            p.length && (p.sort(a), m(p, "start", i, function(t, e) {
                return e >= t
            }), m(p, "start", o, function(t, e) {
                return t > e
            })), h.length && (h.sort(l), m(h, "end", o, function(t, e) {
                return e >= t
            }))
        }, e.plugin("overlay", r)
    }),
    function(t) {
        "function" == typeof define && define.amd ? define("peresistvolume", ["videojs"], function(e) {
            t(window, document, e)
        }) : t(window, document, videojs)
    }(function(t, e, n) {
        var i = function() {
                try {
                    return t.localStorage.setItem("teehee_volume", "teehee"), t.localStorage.removeItem("teehee_volume"), !0
                } catch (e) {
                    return !1
                }
            },
            o = function(e) {
                return i() ? t.localStorage.getItem(e) : null
            },
            r = function(e, n) {
                return i() ? t.localStorage.setItem(e, n) : null
            },
            s = {
                namespace: ""
            },
            a = function(t) {
                var i = this,
                    a = n.util.mergeOptions(s, t),
                    l = a.namespace + "_volume",
                    c = a.namespace + "_mute",
                    u = i.controlBar.getChildById("muteToggle");
                i.on("volumechange", function() {
                    ("facebook" !== i.adType || "facebook" === i.adType && !i.adIsPlaying) && (r(l, i.volume()), r(c, i.muted())), e.getElementById("ani_video").focus(), i.muted() ? u.c.title = "取消靜音" : u.c.title = "靜音"
                });
                var d = o(l);
                null !== d ? i.volume(d) : i.volume(1);
                var p = o(c);
                null !== p && i.muted("true" === p)
            };
        n.plugin("persistvolume", a)
    }),
    function(t) {
        "function" == typeof define && define.amd ? define("peresistdanmu", ["videojs"], function(e) {
            t(window, document, e, jQuery)
        }) : t(window, document, videojs, jQuery)
    }(function(t, e, n, i) {
        var o = function() {
                try {
                    return t.localStorage.setItem("teehee_danmu", "teehee"), t.localStorage.removeItem("teehee_danmu"), !0
                } catch (e) {
                    return !1
                }
            },
            r = function(e) {
                return o() ? t.localStorage.getItem(e) : null
            },
            s = function(e, n) {
                return o() ? t.localStorage.setItem(e, n) : null
            },
            a = {
                namespace: ""
            },
            l = function(t) {
                function o(t, e, n) {
                    var o = c.namespace + "_danmu_opacity";
                    0 != l.danmu.cmManager.options[n].opacity ? (l.danmu.cmManager.options[n].opacity = 0, i(t).removeClass("active"), i(e).removeClass("is-active")) : (l.danmu.cmManager.options[n].opacity = 1, i(t).addClass("active"), i(e).addClass("is-active")), v = l.danmu.cmManager.options.global.opacity + "," + l.danmu.cmManager.options.scroll.opacity + "," + l.danmu.cmManager.options.top.opacity + "," + l.danmu.cmManager.options.bottom.opacity, s(o, v)
                }
                var l = this,
                    c = n.util.mergeOptions(a, t),
                    u = c.namespace + "_danmu",
                    d = l.controlBar.getChildById("danmuToggle"),
                    p = i("#danmuturn"),
                    h = r(u);
                d.c.title = "關閉彈幕", [d, p].forEach(function(t) {
                    t.on("click", function() {
                        d.c.classList.contains("vjs-danmu-close") ? (d.c.classList.remove("vjs-danmu-close"), p.addClass("closed"), s(u, "on"), d.c.title = "關閉彈幕") : (d.c.classList.add("vjs-danmu-close"), p.removeClass("closed"), s(u, "off"), d.c.title = "開啟彈幕"), l.el().focus()
                    })
                }), i("#danmu-show").click(function() {
                    l.danmu.cmManager.display ? (l.danmu.cmManager.display = !1, l.danmu.cmManager.clear(), s(u, "off"), d.c.classList.add("vjs-danmu-close"), d.c.title = "開啟彈幕") : (l.danmu.cmManager.display = !0, s(u, "on"), d.c.classList.remove("vjs-danmu-close"), d.c.title = "關閉彈幕")
                }), h && "off" == h && d.el().click();
                var f = c.namespace + "_danmu_opacity",
                    v = r(f);
                null != v && (v = v.split(","), null != v[0] && (l.danmu.cmManager.options.global.opacity = v[0]), null != v[1] && (l.danmu.cmManager.options.scroll.opacity = v[1]), null != v[2] && (l.danmu.cmManager.options.top.opacity = v[2]), null != v[3] && (l.danmu.cmManager.options.bottom.opacity = v[3]));
                var m = e.createElement("div");
                m.className = "vjs-menu", m.style = "right:-40px";
                var g = e.createElement("div");
                g.className = "vjs-menu-item vjs-danmu-position vjs-show-tip", g.onclick = function(t) {
                    t.stopPropagation()
                }, g.innerHTML = "<h3>彈幕顯示</h3>";
                var y = e.createElement("button");
                y.className = "vjs-danmu-position-middle", y.innerHTML = "<i></i><span>滾動彈幕</span>", y.onclick = function(t) {
                    o(this, $("#ani-danmu-position-middle"), "scroll"), t.stopPropagation()
                }, 1 == l.danmu.cmManager.options.scroll.opacity && i(y).addClass("active");
                var b = e.createElement("button");
                b.className = "vjs-danmu-position-top", b.innerHTML = "<i></i><span>上方彈幕</span>", b.onclick = function(t) {
                    o(this, $("#ani-danmu-position-top"), "top"), t.stopPropagation()
                }, 1 == l.danmu.cmManager.options.top.opacity && i(b).addClass("active");
                var w = e.createElement("button");
                w.className = "vjs-danmu-position-bottom", w.innerHTML = "<i></i><span>下方彈幕</span>", w.onclick = function(t) {
                    o(this, $("#ani-danmu-position-bottom"), "bottom"), t.stopPropagation()
                }, 1 == l.danmu.cmManager.options.bottom.opacity && i(w).addClass("active");
                var T = e.createElement("div");
                T.className = "vjs-menu-item vjs-danmu-opacity", T.onclick = function(t) {
                    t.stopPropagation()
                };
                var k = e.createElement("input");
                k.type = "range", k.className = "DanmuOpacityRange", k.max = 100, k.min = 0, k.step = 10, k.value = 100 * l.danmu.cmManager.options.global.opacity || 100, T.innerHTML = '<h3>彈幕透明<span class="DanmuOpacityNum">' + k.value + "%</span></h3>", k.onmousemove = function(t) {
                    l.danmu.cmManager.options.global.opacity = this.value / 100, v = l.danmu.cmManager.options.global.opacity + "," + l.danmu.cmManager.options.scroll.opacity + "," + l.danmu.cmManager.options.top.opacity + "," + l.danmu.cmManager.options.bottom.opacity, s(f, v), i(".DanmuOpacityNum").html(this.value + "%"), i(".DanmuOpacityRange").val(this.value)
                }, k.onchange = function(t) {
                    l.danmu.cmManager.options.global.opacity = this.value / 100, v = l.danmu.cmManager.options.global.opacity + "," + l.danmu.cmManager.options.scroll.opacity + "," + l.danmu.cmManager.options.top.opacity + "," + l.danmu.cmManager.options.bottom.opacity, s(f, v)
                }, k.onclick = function(t) {
                    t.stopPropagation()
                };
                var A = e.createElement("input");
                A.type = "range", A.className = "DanmuOpacityRange", A.max = 100, A.min = 0, A.step = 10, A.value = 100 * l.danmu.cmManager.options.global.opacity || 100, $(".ani-setting-label__sub").html(A.value + "%"), A.onmousemove = function(t) {
                    l.danmu.cmManager.options.global.opacity = this.value / 100, v = l.danmu.cmManager.options.global.opacity + "," + l.danmu.cmManager.options.scroll.opacity + "," + l.danmu.cmManager.options.top.opacity + "," + l.danmu.cmManager.options.bottom.opacity, s(f, v), $(".DanmuOpacityNum").html(this.value + "%"), $(".DanmuOpacityRange").val(this.value)
                }, A.onchange = function(t) {
                    l.danmu.cmManager.options.global.opacity = this.value / 100, v = l.danmu.cmManager.options.global.opacity + "," + l.danmu.cmManager.options.scroll.opacity + "," + l.danmu.cmManager.options.top.opacity + "," + l.danmu.cmManager.options.bottom.opacity, s(f, v)
                }, A.onclick = function(t) {
                    t.stopPropagation()
                };
                var j = e.createElement("a");
                j.href = "#", j.role = "button", j.className = "ani-danmu-position-btn", j.id = "ani-danmu-position-middle", j.innerHTML = '<i class="danmu-middle"></i><i class="material-icons">close</i><span>滾動彈幕</span>', j.onclick = function(t) {
                    o($(".vjs-danmu-position-middle"), this, "scroll"), t.stopPropagation()
                }, 1 == l.danmu.cmManager.options.scroll.opacity && i(j).addClass("is-active");
                var S = e.createElement("a");
                S.href = "#", S.role = "button", S.className = "ani-danmu-position-btn", S.id = "ani-danmu-position-top", S.innerHTML = '<i class="danmu-top"></i><i class="material-icons">close</i><span>上方彈幕</span>', S.onclick = function(t) {
                    o($(".vjs-danmu-position-top"), this, "top"), t.stopPropagation()
                }, 1 == l.danmu.cmManager.options.top.opacity && i(S).addClass("is-active");
                var C = e.createElement("a");
                C.href = "#", C.role = "button", C.className = "ani-danmu-position-btn", C.id = "ani-danmu-position-bottom", C.innerHTML = '<i class="danmu-bottom"></i><i class="material-icons">close</i><span>下方彈幕</span>', C.onclick = function(t) {
                    o($(".vjs-danmu-position-bottom"), this, "bottom"), t.stopPropagation()
                }, 1 == l.danmu.cmManager.options.bottom.opacity && i(C).addClass("is-active"), T.appendChild(k), $(".ani-range").html(A), $("#setting-danmu-appear").append(j), $("#setting-danmu-appear").append(S), $("#setting-danmu-appear").append(C), g.appendChild(y), g.appendChild(b), g.appendChild(w), m.appendChild(T), m.appendChild(g), d.el().firstChild.appendChild(m)
            };
        n.plugin("persistdanmu", l)
    }),
    function(t) {
        "function" == typeof define && define.amd ? define("peresistdanmutoggle", ["videojs"], function(e) {
            t(window, document, e, jQuery)
        }) : t(window, document, videojs, jQuery)
    }(function(t, e, n, i) {
        var o = function() {
                try {
                    return t.localStorage.setItem("teehee_danmu", "teehee"), t.localStorage.removeItem("teehee_danmu"), !0
                } catch (e) {
                    return !1
                }
            },
            r = function(e) {
                return o() ? t.localStorage.getItem(e) : null
            },
            s = {
                namespace: ""
            },
            a = function(t) {
                var i = this,
                    o = e,
                    a = n.util.mergeOptions(s, t),
                    l = a.namespace + "_danmu",
                    c = r(l);
                if (!c) {
                    var u = o.createElement("div"),
                        d = '<div class="button pill disable"> 開啟/關閉彈幕請點 <i class="material-icons" style="vertical-align:middle">question_answer</i> 圖示</div>';
                    u.className = "vjs-overlay vjs-overlay-bottom-right", u.innerHTML = d, i.el().appendChild(u), i.setTimeout(function() {
                        try {
                            i.el().removeChild(u)
                        } catch (t) {}
                    }, 8e3)
                }
            };
        n.plugin("persistdanmutoggle", a)
    }),
    function(t) {
        "function" == typeof define && define.amd ? define("peresistindent", ["videojs"], function(e) {
            t(window, document, e, jQuery)
        }) : t(window, document, videojs, jQuery)
    }(function(t, e, n, i) {
        var o = function() {
                try {
                    return t.localStorage.setItem("teehee_indent", "teehee"), t.localStorage.removeItem("teehee_indent"), !0
                } catch (e) {
                    return !1
                }
            },
            r = function(e) {
                return o() ? t.localStorage.getItem(e) : null
            },
            s = function(e, n) {
                return o() ? t.localStorage.setItem(e, n) : null
            },
            a = function(t) {
                t.indent.c.classList.add("vjs-indent-enable"), t.indent.c.title = "一般模式", t.subtitle.classList.add("vjs-hidden"), t.videoframe.classList.add("vjs-fullwindow")
            },
            l = function(t) {
                t.indent.c.classList.remove("vjs-indent-enable"), t.indent.c.title = "劇院模式", t.subtitle.classList.remove("vjs-hidden"), t.videoframe.classList.remove("vjs-fullwindow"), t.video.style.paddingBottom = "56.25%"
            },
            c = {
                namespace: ""
            },
            u = function(t) {
                var i = this,
                    o = i.controlBar,
                    u = e,
                    d = n.util.mergeOptions(c, t),
                    p = d.namespace + "_indent",
                    h = r(p),
                    f = {
                        indent: o.getChildById("theaterToggle"),
                        subtitle: u.getElementsByClassName("subtitle")[0],
                        videoframe: u.getElementsByClassName("videoframe")[0],
                        video: u.getElementsByClassName("video")[0]
                    };
                "on" == h ? a(f) : l(f), f.indent.on("click", function() {
                    this.c.classList.contains("vjs-indent-enable") ? (l(f), s("ANIME_indent", "off")) : (a(f), s("ANIME_indent", "on")), i.el().focus(), i.danmu.cmManager.setBounds()
                })
            };
        n.plugin("persistindent", u)
    }),
    function(t) {
        "function" == typeof define && define.amd ? define("peresistquality", ["videojs"], function(e) {
            t(window, document, e)
        }) : t(window, document, videojs)
    }(function(t, e, n) {
        var i = function() {
                try {
                    return t.localStorage.setItem("teehee_quality", "teehee"), t.localStorage.removeItem("teehee_quality"), !0
                } catch (e) {
                    return !1
                }
            },
            o = function(e) {
                return i() ? t.localStorage.getItem(e) : null
            },
            r = function(e, n) {
                return i() ? t.localStorage.setItem(e, n) : null
            },
            s = {
                namespace: ""
            },
            a = function(t) {
                var e = this,
                    i = n.util.mergeOptions(s, t),
                    a = i.namespace + "_quality",
                    l = o(a);
                if (e.on("changeRes", function() {
                    r(a, e.currentRes)
                }), e.enablePQ && null !== l) try {
                    e.changeRes(l)
                } catch (c) {}
            };
        n.plugin("persistquality", a)
    }),
    function(t) {
        "function" == typeof define && define.amd ? define("peresistquizprompt", ["videojs"], function(e) {
            t(window, document, e, jQuery)
        }) : t(window, document, videojs, jQuery)
    }(function(t, e, n, i) {
        var o = function() {
                try {
                    return t.localStorage.setItem("teehee_quizprompt", "teehee"), t.localStorage.removeItem("teehee_quizprompt"), !0
                } catch (e) {
                    return !1
                }
            },
            r = function(e) {
                return o() ? t.localStorage.getItem(e) : null
            },
            s = function(e, n) {
                return o() ? t.localStorage.setItem(e, n) : null
            },
            a = {
                namespace: ""
            },
            l = function(t) {
                var i = this,
                    o = e,
                    l = !0,
                    c = n.util.mergeOptions(a, t),
                    u = c.namespace + "_quizprompt",
                    d = r(u);
                i.on("timeupdate", function() {
                    if (l && !d && i.total_time >= 1320) {
                        var t = o.createElement("div"),
                            e = '<div class="button pill">影片最後有每天一次的動漫通抽獎喔！<a href="#">我知道了</a></div>';
                        t.className = "vjs-overlay vjs-overlay-bottom-right", t.innerHTML = e, t.onclick = function() {
                            i.el().removeChild(t), s(u, "true")
                        }, i.el().appendChild(t), i.setTimeout(function() {
                            try {
                                i.el().removeChild(t)
                            } catch (e) {}
                        }, 5e3), l = !1
                    }
                })
            };
        n.plugin("persistquizprompt", l)
    }),
    function(t) {
        "function" == typeof define && define.amd ? define("progresstip", ["videojs"], function(e) {
            t(e, jQuery)
        }) : t(videojs, jQuery)
    }(function(t, e) {
        var n = function() {
                try {
                    return window.localStorage.setItem("teehee_progress", "teehee"), window.localStorage.removeItem("teehee_progress"), !0
                } catch (t) {
                    return !1
                }
            },
            i = function(t, e) {
                return n() ? window.localStorage.setItem(t, e) : null
            },
            o = function(t) {
                var n;
                n = function() {
                    var t = this;
                    i("ANIME_totalTime", t.duration()), e(".vjs-progress-control").after(e('<div id="vjs-tip" class="vjs-tip"><div id="vjs-tip-arrow" class="vjs-tip-arrow"></div><div id="vjs-tip-inner" class="vjs-tip-inner"></div></div><div id="vjs-menu-tip" class="vjs-tip"><div id="vjs-menu-tip-inner" class="vjs-tip-inner"></div></div>')), e(".vjs-progress-control").on("mousemove", function(n) {
                        var i, o, r;
                        o = t.controlBar.progressControl.seekBar;
                        var s = n.pageX - e(o.el()).offset().left;
                        s /= o.width(), s = Math.floor(1e3 * s) / 1e3, r = s * t.duration(), r >= t.duration() && (r -= .1), 0 >= r && (r = 0);
                        var a = parseInt(r, 10);
                        a = t.duration() > 3600 ? 60 * Math.floor(a / 60) : 10 * Math.floor(a / 10);
                        var l = ("0" + Math.floor(a / 3600)).slice(-2),
                            c = ("0" + Math.floor((a - 3600 * l) / 60)).slice(-2),
                            u = ("0" + a % 60).slice(-2),
                            d = "00" == l ? c + ":" + u : l + ":" + c + ":" + u;
                        e("#vjs-tip-inner").html(d), i = e(".vjs-control-bar").height(), e("#vjs-tip").css("top", "" + (n.pageY - e(this).offset().top - i - 20) + "px").css("left", "" + (n.pageX - e(this).offset().left - 30) + "px").css("visibility", "visible")
                    }), e(".vjs-show-tip").on("mousemove", function(t) {
                        var n = e(this).attr("title");
                        if (n) {
                            var i = e(this).parent().offset().left,
                                o = e(this).parent().width() - 50,
                                r = t.pageX - i;
                            r = r >= o ? o : r;
                            var s = e(this).width(),
                                a = r - s / 2;
                            return e("#vjs-menu-tip-inner").html(n), void e("#vjs-menu-tip").css("top", "-40px").css("left", a + "px").css("visibility", "visible")
                        }
                    }), e(".vjs-progress-control, .vjs-play-control, .vjs-show-tip").on("mouseout click", function() {
                        e("#vjs-tip").css("visibility", "hidden"), e("#vjs-menu-tip").css("visibility", "hidden")
                    })
                }, this.on("loadedmetadata", n)
            };
        t.plugin("progresstips", o)
    }),
    function(t) {
        "function" == typeof define && define.amd ? define("quality", ["videojs"], function(e) {
            t(e)
        }) : t(videojs)
    }(function(t) {
        var e = {
            res_label: function(t) {
                return /^\d{5,}$/.test(t) ? this.humanRead(t, !0) : /^\d+$/.test(t) ? " " + t + "p" : " " + t
            },
            humanRead: function(t) {
                for (var e = 0; t > 1e3;) t /= 1e3, ++e;
                return " " + t.toFixed(0) + " " + ["bps", "kbps", "mbps"][e]
            },
            hasLocalStorage: function() {
                try {
                    return window.localStorage.setItem("teehee", "teehee"), window.localStorage.removeItem("teehee"), !0
                } catch (t) {
                    return !1
                }
            },
            getStorageItem: function(t) {
                return e.hasLocalStorage() ? window.localStorage.getItem(t) : null
            },
            setStorageItem: function(t, n) {
                return e.hasLocalStorage() ? window.localStorage.setItem(t, n) : null
            }
        };
        t.ResolutionMenuItem = t.MenuItem.extend({
            call_count: 0,
            init: function(n, i) {
                if (i.label = e.res_label(i.text), n.localize("Auto") === i.res.toString()) {
                    var o = this;
                    n.viblast.addEventListener("videoqualitychange", function(t) {
                        var i = n.viblast.video.quality;
                        n.viblast.abr && (o.el().innerHTML = n.localize("Auto") + " " + e.res_label(i.height > 0 ? i.height : i.bandwidth))
                    }), n.on("changeRes", function() {
                        var t = n.viblast.video.quality;
                        n.viblast.abr ? o.el().innerHTML = n.localize("Auto") + " " + e.res_label(t.height > 0 ? t.height : t.bandwidth) : o.el().innerHTML = n.localize("Auto")
                    })
                }
                if (t.MenuItem.call(this, n, i), this.resolution = i.res, "固定畫質" !== i.res.toString()) this.on(["click", "tap"], this.onClick), this.storage_key = "ANIME_PQ", n.on("changeRes", t.bind(this, function() {
                    n.getCurrentRes() == this.resolution ? (this.selected(!0), this.call_count = 1) : (this.selected(!1), this.call_count = 0), document.getElementById("ani_video").focus()
                }));
                else {
                    this.on(["click", "tap"], this.onClickPQ), this.storage_key = "ANIME_PQ", this.c.id = "li_PQ";
                    var r = e.getStorageItem(this.storage_key);
                    n.enablePQ = !1, r && "on" == r ? (this.c.classList.add("vjs-selected"), n.enablePQ = !0) : (this.c.classList.remove("vjs-selected"), n.enablePQ = !1)
                }
            }
        }), t.ResolutionMenuItem.prototype.onClick = function() {
            if (!(this.call_count > 0)) {
                var t = this.player(),
                    n = document;
                if (t.fakeFHD && "1080" == this.resolution) {
                    var i = t.el().getElementsByClassName("video-login-wrapper")[0],
                        o = document.getElementById("resList");
                    return o.classList.add("vjs-hidden"), i.classList.remove("vjs-hidden"), t.paused() && i.classList.add("paused"), t.pause(), setTimeout(function() {
                        o.classList.remove("vjs-hidden")
                    }, 2e3), this.selected(!1), !1
                }
                var r = n.getElementsByClassName("vjs-switchRes-button")[0],
                    o = n.getElementById("resList"),
                    s = n.getElementsByClassName("vjs-res-button")[0],
                    a = t.currentTime(),
                    l = t.el().classList.contains("vjs-playing") ? 1 : 0;
                s.classList.add("vjs-res-enable"), o.classList.add("vjs-hidden"), setTimeout(function() {
                    s.classList.remove("vjs-res-enable"), o.classList.remove("vjs-hidden")
                }, 3e3), t.changeRes(this.resolution), t.localize("Auto") != this.resolution && (t.currentTime(a - 10), t.pause(), r.classList.remove("vjs-hidden"), r.innerHTML = "畫質變更中，請稍候...", setTimeout(function() {
                    t.currentTime(a), l && t.play(), r.classList.add("vjs-hidden")
                }, 3e3)), t.enablePQ || (jQuery("#li_PQ").addClass("vjs-selected"), t.enablePQ = !0, e.setStorageItem(this.storage_key, "on"))
            }
        }, t.ResolutionMenuItem.prototype.onClickPQ = function() {
            var t = this.player();
            t.enablePQ ? (this.c.classList.remove("vjs-selected"), t.enablePQ = !1, e.setStorageItem(this.storage_key, "off")) : (this.c.classList.add("vjs-selected"), t.enablePQ = !0, e.setStorageItem(this.storage_key, "on"))
        }, t.ResolutionSelector = t.MenuButton.extend({
            init: function(e, n) {
                e.availableRes = n.available_res, t.MenuButton.call(this, e, n), this.el().firstChild.firstChild.innerHTML = n.buttonText, this.el().firstChild.id = "resList"
            }
        }), t.ResolutionSelector.prototype.className = "vjs-res-button", t.ResolutionSelector.prototype.createItems = function() {
            var e, n = this.player(),
                i = [];
            for (e in n.availableRes) "length" != e && i.push(new t.ResolutionMenuItem(n, {
                res: e,
                text: n.availableRes[e]["data-text"]
            }));
            return i.sort(function(t, e) {
                return "undefined" == typeof t.resolution ? -1 : parseInt(e.resolution) - parseInt(t.resolution)
            }), i
        };
        var n = function(e) {
            var n = this,
                i = t.util.mergeOptions({
                    default_res: "",
                    force_types: !1
                }, e || {});
            i.default_res && "string" == typeof i.default_res ? i.default_res.split(",") : [];
            "function" != typeof n.localize && (n.localize = function(t) {
                return t
            }), n.getCurrentRes = function() {
                try {
                    return n.currentRes
                } catch (t) {
                    return
                }
            }, n.changeRes = function(t) {
                if (n.getCurrentRes() == t || !n.availableRes || !n.availableRes[t]) return !1;
                if (n.fakeFHD && "1080" == t) return !1;
                if (n.localize("Auto") === t) n.viblast.abr = !0;
                else {
                    for (var e = n.viblast.video.qualities, i = n.viblast.video.qualities.length, o = e[0].height > 0 ? "height" : "bandwidth"; i > 0 && (i--, e[i][o] != t););
                    n.viblast.abr = !1, n.viblast.video.quality = n.viblast.video.qualities[i]
                }
                return n.currentRes = t, n.trigger("changeRes"), !0
            }, n.addResButton = function(e) {
                var i = document.createElement("div");
                i.className = "vjs-switchRes-button vjs-hidden", n.el().appendChild(i);
                for (var o, r, s = {
                    length: 0
                }, a = n.viblast.video.qualities, l = n.viblast.video.qualities.length, c = n.localize("Auto"), u = "固定畫質"; l > 0;) l--, o = a[l].height ? a[l].height : a[l].bandwidth, "object" != typeof s[o] && (s[o] = [], s.length++), 1080 == o ? s[o]["data-text"] = o + 'p <span class="vipmark">vip</span>' : s[o]["data-text"] = o;
                if (s[c] = [], s[c]["data-text"] = c, s[u] = [], s[u]["data-text"] = u, s.length += 2, n.fakeFHD) {
                    o = 1080, s[o] = [], s[o]["data-text"] = o + 'p <span class="vipmark">vip</span>', s.length++;
                    var d = document,
                        p = d.createElement("a"),
                        h = d.createElement("i"),
                        f = d.createElement("h2"),
                        v = d.createElement("div"),
                        m = v.cloneNode(!1),
                        g = v.cloneNode(!1),
                        y = p.cloneNode(!1),
                        b = h.cloneNode(!1),
                        w = f.cloneNode(!1),
                        T = p.cloneNode(!1);
                    g.className = "video-login", w.innerHTML = "需成為VIP會員才能選擇此畫質喔！", T.className = "signUp-vip", T.href = "https://ani.gamer.com.tw/animePay.php", T.target = "_blank", T.innerHTML = "<p>成為VIP！</p>", y.className = "cancel", y.href = "#", b.className = "material-icons", b.innerHTML = "close", y.onclick = function() {
                        var t = n.el().getElementsByClassName("video-login-wrapper")[0];
                        t.classList.add("vjs-hidden"), t.classList.contains("paused") ? t.classList.remove("paused") : n.play()
                    }, m.className = "video-login-wrapper vjs-hidden", g.appendChild(w), g.appendChild(T), y.appendChild(b), m.appendChild(y), m.appendChild(g), n.el().appendChild(m)
                }
                r = new t.ResolutionSelector(n, {
                    buttonText: "",
                    available_res: s
                }), r.Ra = "resButton", n.controlBar.resolutionSelector = n.controlBar.addChild(r), e()
            }
        };
        t.plugin("resolutionselector", n)
    }),
    function(t) {
        "function" == typeof define && define.amd ? define("qualitysingle", ["videojs"], function(e) {
            t(e)
        }) : t(videojs)
    }(function(t) {
        var e = {
            res_label: function(t) {
                return /^\d{5,}$/.test(t) ? this.humanRead(t, !0) : /^\d+$/.test(t) ? " " + t + "p" : " " + t
            },
            humanRead: function(t) {
                for (var e = 0; t > 1e3;) t /= 1e3, ++e;
                return " " + t.toFixed(0) + " " + ["bps", "kbps", "mbps"][e]
            }
        };
        t.SingleMenuItem = t.MenuItem.extend({
            init: function(n, i) {
                i.label = e.res_label(i.text), t.MenuItem.call(this, n, i), this.resolution = i.res, this.on(["click", "tap"], this.onClick), "360" == this.resolution && this.selected(!0)
            }
        }), t.SingleMenuItem.prototype.onClick = function() {
            if ("360" != this.resolution) {
                var t = this.player(),
                    e = t.el().getElementsByClassName("video-login-wrapper")[0],
                    n = document.getElementById("resList");
                n.classList.add("vjs-hidden"), e.classList.remove("vjs-hidden"), t.paused() && e.classList.add("paused"), t.pause(), setTimeout(function() {
                    n.classList.remove("vjs-hidden")
                }, 2e3), this.selected(!1)
            }
        }, t.SingleSelector = t.MenuButton.extend({
            init: function(e, n) {
                e.availableRes = n.available_res, t.MenuButton.call(this, e, n), this.el().firstChild.firstChild.innerHTML = n.buttonText, this.el().firstChild.id = "resList"
            }
        }), t.SingleSelector.prototype.className = "vjs-res-button", t.SingleSelector.prototype.createItems = function() {
            var e, n = this.player(),
                i = [];
            for (e in n.availableRes) "length" != e && i.push(new t.SingleMenuItem(n, {
                res: e,
                text: n.availableRes[e]["data-text"]
            }));
            return i.sort(function(t, e) {
                return "undefined" == typeof t.resolution ? -1 : parseInt(e.resolution) - parseInt(t.resolution)
            }), i
        };
        var n = function(e) {
            var n = this;
            n.changeRes = function() {
                return !1
            }, n.addResButton = function() {
                var e = document,
                    i = e.createElement("a"),
                    o = e.createElement("b"),
                    r = e.createElement("i"),
                    s = e.createElement("p"),
                    a = e.createElement("h2"),
                    l = e.createElement("h3"),
                    c = e.createElement("div"),
                    u = l.cloneNode(!1),
                    d = s.cloneNode(!1),
                    p = i.cloneNode(!1),
                    h = l.cloneNode(!1),
                    f = s.cloneNode(!1),
                    v = o.cloneNode(!1),
                    m = i.cloneNode(!1),
                    g = a.cloneNode(!1),
                    y = c.cloneNode(!1),
                    b = i.cloneNode(!1),
                    w = r.cloneNode(!1),
                    T = c.cloneNode(!1);
                u.innerHTML = "已有帳號", d.innerHTML = '<i class="material-icons">person</i></i>登入', p.href = "https://user.gamer.com.tw/login.php", h.innerHTML = "還沒有帳號？", f.innerHTML = '<i class="material-icons">person_add</i></i>註冊', v.innerHTML = "非常簡單！", m.className = "reg", m.href = "https://user.gamer.com.tw/regS1.php", g.innerHTML = "更改畫質需要先登入巴哈帳號喔！", y.className = "video-login", b.className = "cancel", b.href = "#", w.className = "material-icons", w.innerHTML = "close", b.onclick = function() {
                    var t = n.el().getElementsByClassName("video-login-wrapper")[0];
                    t.classList.add("vjs-hidden"), t.classList.contains("paused") ? t.classList.remove("paused") : n.play()
                }, T.className = "video-login-wrapper vjs-hidden", p.appendChild(u), p.appendChild(d), m.appendChild(h), m.appendChild(f), m.appendChild(v), y.appendChild(g), y.appendChild(p), y.appendChild(m), b.appendChild(w), T.appendChild(b), T.appendChild(y), n.el().appendChild(T);
                for (var k, A = {
                    length: 0
                }, j = n.viblast.video.qualities, S = n.viblast.video.qualities.length; S > 0;) S--, k = j[S].height ? j[S].height : j[S].bandwidth, "360" == k && (n.viblast.video.quality = n.viblast.video.qualities[S], n.viblast.abr = !1), "object" != typeof A[k] && (A[k] = [], A.length++), A[k]["data-text"] = k;
                "FHD" === animefun.quality && (k = 1080, A[k] = [], A[k]["data-text"] = k + 'p <span class="vipmark">vip</span>'), singleSelector = new t.SingleSelector(n, {
                    buttonText: "",
                    available_res: A
                }), singleSelector.Ra = "resButton", n.controlBar.singleSelector = n.controlBar.addChild(singleSelector)
            }
        };
        t.plugin("resolutionsingle", n)
    }),
    function(t) {
        "function" == typeof define && define.amd ? define("stopmask", ["videojs"], function(e) {
            t(window, e, jQuery)
        }) : t(window, videojs, jQuery)
    }(function(t, e, n) {
        var i = {
            option: {},
            obj: {},
            el: {
                div: document.createElement("div"),
                a: document.createElement("a"),
                i: document.createElement("i"),
                p: document.createElement("p"),
                h1: document.createElement("h1"),
                h2: document.createElement("h2")
            },
            addMask: function(t, e) {
                var n = i.el.div.cloneNode(!1),
                    o = i.el.h1.cloneNode(!1);
                o.innerHTML = e;
                var r = i.el.div.cloneNode(!1);
                r.className = "replay";
                var s = i.el.a.cloneNode(!1);
                s.href = "", s.onclick = function(e) {
                    e.preventDefault(), n.classList.add("vjs-hidden"), t.currentTime(0),
                        t.play()
                };
                var a = i.el.i.cloneNode(!1);
                a.className = "material-icons", a.innerHTML = "autorenew", a.style = "font-size: 48px";
                var l = i.el.p.cloneNode(!1);
                if (l.innerHTML = "重播", s.appendChild(a), s.appendChild(l), r.appendChild(s), i.option.nextsn) {
                    var c = i.el.a.cloneNode(!1);
                    c.href = "http://ani.gamer.com.tw/animeVideo.php?sn=" + i.option.nextsn;
                    var u = i.el.i.cloneNode(!1);
                    u.className = "material-icons", u.innerHTML = "skip_next", u.style = "font-size: 48px";
                    var d = i.el.p.cloneNode(!1);
                    d.innerHTML = "下一集", c.appendChild(u), c.appendChild(d), r.appendChild(c)
                }
                return n.appendChild(o), n.appendChild(r), n.className = "stop vjs-hidden", t.el().appendChild(n), n
            },
            initQuiz: function(t) {
                900 <= t.total_time && n.ajax({
                    url: "/ajax/animeGetQuestion.php",
                    data: "t=" + Date.now(),
                    success: function(e) {
                        i.obj = JSON.parse(e), i.obj.error || i.addQuiz(t)
                    },
                    error: function() {
                        console.log("Error:: Can't get any question")
                    }
                })
            },
            addQuiz: function(t) {
                var e = i.el.div.cloneNode(!1);
                e.className = "video-login-wrapper";
                var o = i.el.div.cloneNode(!1);
                o.className = "anime-quiz";
                var r = i.el.a.cloneNode(!1);
                r.href = "#", r.innerHTML = "<i class='material-icons'>close</i>", r.onclick = function(t) {
                    t.preventDefault(), e.classList.add("vjs-hidden"), n.ajax({
                        type: "POST",
                        url: "/ajax/animeAnsQuestion.php",
                        data: "token=" + i.obj.token + "&ans=0"
                    })
                };
                var s = i.el.p.cloneNode(!1);
                s.innerHTML = i.obj.question + " （作者：" + i.obj.userid + "）";
                var a = i.el.h2.cloneNode(!1);
                a.innerHTML = "動漫通<span>關連作品：" + i.obj.game + "</span>";
                var l = i.el.div.cloneNode(!1);
                l.className = "support", l.innerHTML = '<a href="https://www.facebook.com/animategamer/" target="_blank" ><i class="material-icons" style="vertical-align:middle">chevron_right</i> <span style="vertical-align:middle">粉絲團找答案</span></a>';
                var c = [];
                ["a1", "a2", "a3", "a4"].forEach(function(t, e) {
                    c[t] = i.el.a.cloneNode(!1), c[t].innerHTML = i.obj[t], c[t].href = "#", c[t].dataset.value = ++e, c[t].onclick = i.checkAns
                }), a.appendChild(r), o.appendChild(a), o.appendChild(s), ["a1", "a2", "a3", "a4"].forEach(function(t) {
                    o.appendChild(c[t])
                }), o.appendChild(l), e.appendChild(o), t.el().appendChild(e), i.el.anime_quiz = o, i.el.loginwrapper = e, ["seeked", "seeking", "playing"].forEach(function(n) {
                    t.on(n, function() {
                        e.classList.add("vjs-hidden")
                    })
                })
            },
            checkAns: function() {
                var t = this.dataset.value;
                n.ajax({
                    type: "POST",
                    url: "/ajax/animeAnsQuestion.php",
                    data: "token=" + i.obj.token + "&ans=" + t + "&t=" + Date.now(),
                    success: function(t) {
                        var e = JSON.parse(t),
                            n = i.el.a.cloneNode(!1);
                        n.href = "#", n.innerHTML = "結束動漫通", n.onclick = function(t) {
                            t.preventDefault(), i.el.loginwrapper.classList.add("vjs-hidden")
                        };
                        var o = i.el.a.cloneNode(!1);
                        if (o.href = "https://www.facebook.com/animategamer/", o.target = "_blank", o.innerHTML = "動畫瘋粉絲團", e.error) {
                            var r = "答題錯誤" === e.msg ? "很遺憾答錯囉！下次可以先上動畫瘋粉絲團找答案喔！" : e.msg;
                            i.el.anime_quiz.innerHTML = '<h2>動漫通</h2><p><i class="material-icons" style="vertical-align:middle;color:red">close</i><span style="vertical-align:middle;">' + r + "</span></p>", i.el.anime_quiz.appendChild(n), i.el.anime_quiz.appendChild(o)
                        } else {
                            i.el.anime_quiz.innerHTML = '<h2>動漫通</h2><div class="pic"><img src="https://i2.bahamut.com.tw/anime/award.png" alt=""></div><p class="get"><i class="material-icons" style="vertical-align:middle;color:lawngreen;">panorama_fish_eye</i><span style="vertical-align:middle">恭喜答對囉，抽個獎吧！</span><br></p>';
                            var s = i.el.a.cloneNode(!1);
                            s.innerHTML = "抽獎", s.href = "#", s.onclick = function(t) {
                                t.preventDefault(), i.el.anime_quiz.innerHTML = "<h2>動漫通</h2><p>" + e.gift + "<br>詳見站內信說明喔！</p>", i.el.anime_quiz.appendChild(n)
                            };
                            var a = document.getElementsByClassName("get")[0];
                            a.appendChild(s)
                        }
                    },
                    error: function() {
                        console.log("Error:: No response from quiz")
                    }
                })
            }
        };
        stopmask = function(t, e) {
            i.option.nextsn = e, i.option.title = t;
            var n = this,
                o = i.addMask(n, t);
            ["seeked", "seeking", "playing"].forEach(function(t) {
                n.on(t, function() {
                    o.classList.add("vjs-hidden")
                })
            }), n.on("ended", function() {
                this.bigPlayButton.hide(), o.classList.remove("vjs-hidden"), i.initQuiz(this)
            })
        }, e.plugin("stopmask", stopmask)
    }),
    function(t) {
        "function" == typeof define && define.amd ? define("err", ["videojs"], function(e) {
            t(window, e, jQuery)
        }) : t(window, videojs, jQuery)
    }(function(t, e, n) {
        var i = function(t) {
            var e = this;
            e.dispose();
            var n = document.createElement("div"),
                i = n.cloneNode(!1),
                o = n.cloneNode(!1),
                r = n.cloneNode(!1),
                s = document.getElementsByClassName("video")[0];
            i.innerHTML = t, o.appendChild(i), o.className = "vjs-error-display", r.appendChild(o), r.className = "vjs-error", s.appendChild(r)
        };
        e.plugin("errPageCCL", i)
    }), define("app", [], function() {
        return {
            initialize: function() {
                function t(e) {
                    var n = function() {
                        var t = u.controlBar.getChildById("resButton");
                        if (e) {
                            var n = d.createElement("hr");
                            n.style.marginBottom = 0, n.style.marginTop = 0, t.Aa.B.insertBefore(n, t.Aa.B.lastChild), u.enablePQ || u.changeRes("自動")
                        }
                        u.persistquality({
                            namespace: "ANIME"
                        })
                    };
                    try {
                        u.addResButton(n)
                    } catch (i) {
                        u && u.addattempt && setTimeout(t, 3e3)
                    }
                }

                function e(t) {
                    var e = d.createElement("textarea");
                    return e.innerHTML = t, e.value
                }

                function n(t) {
                    u.danmu.cmManager.setBounds(), u.isFullscreen() ? (t.indent.hide(), t.fullscreen.c.title = "離開全螢幕", t.subtitle.classList.add("vjs-hidden")) : (t.indent.show(), t.fullscreen.c.title = "進入全螢幕", t.indent.c.classList.contains("vjs-indent-enable") || t.subtitle.classList.remove("vjs-hidden")), u.el().focus()
                }

                function i() {
                    function t(t) {
                        var n = {};
                        n.log = viblast.printDebugInfo(), n.count = n.log.match(t.reg) ? n.log.match(t.reg) : [], n.count.length >= t.upperbound && (e = !1, o(t.case_sn)), n.count.length > t.record && n.count.length < t.upperbound && (t.record = n.count.length, jQuery.ajax({
                            url: "/ajax/anime403.php?case=" + t.case_sn + "&sn=" + animefun.videoSn + "&hash=" + animefun.uuid,
                            success: function() {}
                        }))
                    }
                    var e = "true",
                        n = [{
                            reg: /Response code = 403/g,
                            upperbound: 8,
                            record: 0,
                            case_sn: 1
                        }, {
                            reg: /responded with 403/g,
                            upperbound: 15,
                            record: 0,
                            case_sn: 2
                        }, {
                            reg: /responded with 0|Response code = 0/g,
                            upperbound: 20,
                            record: 0,
                            case_sn: 3
                        }],
                        i = setInterval(function() {
                            e ? n.forEach(t) : clearInterval(i)
                        }, 5e3)
                }

                function o(t) {
                    if (u) {
                        u.dispose();
                        var e = "//ani.gamer.com.tw/anime403info.php",
                            n = d.createElement("div"),
                            i = n.cloneNode(!1),
                            o = n.cloneNode(!1),
                            r = n.cloneNode(!1),
                            s = d.getElementsByClassName("video")[0];
                        switch (t) {
                            case 1:
                            case 2:
                                i.innerHTML = "錯誤代碼1，影片傳輸中斷，請參考<a href='" + e + "'>可能原因</a>";
                                break;
                            case 3:
                                i.innerHTML = "網路中斷，請確認連線狀態！或嘗試重新整理 <br />";
                                break;
                            default:
                                i.innerHTML = "錯誤代碼2，無法取得影片，請參考<a href='" + e + "'>可能原因</a>"
                        }
                        o.appendChild(i), o.className = "vjs-error-display", r.appendChild(o), r.className = "vjs-error", s.appendChild(r), jQuery.ajax({
                            url: "/ajax/anime403.php?case=0&sn=" + animefun.videoSn + "&hash=" + animefun.uuid,
                            success: function() {}
                        })
                    }
                }

                function r() {
                    var t = u.currentTime();
                    Math.abs(t - u.endPointer) > 5 ? (u.currentTime(1), u.endPointer = 1) : u.endPointer = u.currentTime()
                }

                function s() {
                    u.danmu.cmManager.isAD = !0, u.adIsPlaying = !0, u.on("timeupdate", r);
                    var t = d.createElement("a"),
                        e = '<a href="#" target="_blank" class="button pill"> 處理中，請稍後...</a>';
                    t.className = "vjs-overlay vjs-overlay-bottom-left", t.innerHTML = e;
                    var n = u.setTimeout(function() {
                            this.el().appendChild(t)
                        }, 5e3),
                        i = u.setTimeout(function() {
                            o()
                        }, 3e4);
                    ["loadeddata", "timeupdate"].forEach(function(e) {
                        u.one(e, function() {
                            clearTimeout(n), clearTimeout(i);
                            try {
                                this.el().removeChild(t)
                            } catch (e) {}
                        })
                    })
                }

                function a() {
                    u.danmu.cmManager.isAD = !1, u.adIsPlaying = !1, u.off("timeupdate", r), u.setTimeout(function() {
                        this.overlay({
                            overlays: [{
                                start: "waiting",
                                end: "timeupdate",
                                align: "bottom-left",
                                content: '<div class="button pill" id="reportBtn">播放不順嗎? 點我回報</div>',
                                clickfunction: function() {
                                    var t = document,
                                        e = t.getElementsByClassName("vjs-overlay");
                                    this.firstChild.className = "button pill disable", this.firstChild.innerHTML = "感謝提供資訊，我們會努力改善，謝謝！", setTimeout(function() {
                                            e[0].style.display = "none"
                                        }, 2e3),
                                        function() {
                                            var t, e;
                                            for (e in u.overlay.eventListeners) t = u.overlay.eventListeners[e], u.off(t.type, t.fn)
                                        }(), jQuery.ajax({
                                            type: "POST",
                                            url: "/ajax/laglog.php",
                                            data: "s={sn:" + animefun.videoSn + ",quality:" + u.viblast.video.quality.height + ",bandwidth:" + u.viblast.cdnBandwidth + ",abr:" + u.viblast.abr + "}",
                                            success: function() {},
                                            dataType: "application/x-www-form-urlencoded"
                                        })
                                }
                            }]
                        })
                    }, 1e4), h.danmu.show(), u.danmu.load(), u.persistdanmutoggle({
                        namespace: "ANIME"
                    }), animefun.checkdanmulist(animefun.danmu_status), u.login ? u.resolutionselector() : u.resolutionsingle(), u.addattempt = 2, u.hotkeys({
                        volumeStep: .1,
                        seekStep: 5,
                        enableMute: !0,
                        enableFullscreen: !0,
                        enableNumbers: !0,
                        alwaysCaptureHotkeys: !0
                    }), u.login && u.persistquizprompt({
                        namespace: "ANIME"
                    }), u.progresstips(), u.one("playing", function() {
                        setTimeout(function() {
                            t(u.login)
                        }, 2e3), setTimeout(i, 1e4), this.breakPoint({
                            namespace: "ANIME"
                        });
                        var e = [{
                            sn: animefun.preSn,
                            el: h.pre
                        }, {
                            sn: animefun.nextSn,
                            el: h.next
                        }];
                        e.forEach(function(t) {
                            t.sn && (t.el.show(), t.el.on("click", function() {
                                window.location = "//ani.gamer.com.tw/animeVideo.php?sn=" + t.sn
                            }))
                        })
                    }), u.one("timeupdate", function() {
                        jQuery.ajax({
                            url: "/ajax/videoStart.php?sn=" + animefun.videoSn,
                            success: function() {
                                u.logoImg && $(u.el()).append('<a href="' + u.logoURL + '" target="_blank" class="sponsorship-img" title="' + u.sponsorText + '"><img src="' + u.logoImg + '" alt="">')
                            }
                        }), n(h)
                    }), u.one("breakpoint", function() {
                        var t = this;
                        this.on("pause", function() {
                            t.ended() || t.seeking() || t.bigPlayButton.show(), t.el().focus()
                        }), this.stopmask(e(animefun.title), animefun.nextSn)
                    })
                }

                function l(t) {
                    var e = jQuery.parseJSON(t);
                    e.src && u.src({
                        src: e.src,
                        type: "application/x-mpegURL"
                    }), e.error && u.error(e.error)
                }
                var c = function() {
                        function t() {
                            o.adTagXML = i(), u.vastClient(o), "video" == u.adType && (u.adTimer = setInterval(function() {
                                u.adCounter++
                            }, 1e3)), u.play(), $(".R18").remove(), $(".sponsorship-text").remove()
                        }

                        function e() {
                            n(getMinorAd()), t()
                        }

                        function n(t) {
                            u.adID = t[0], u.adURL = t[1], u.adSID = t[2], u.adType = t[3]
                        }

                        function i() {
                            function t(t) {
                                setTimeout(function() {
                                    t(null, xml)
                                }, 0)
                            }
                            if (xml = "" != typeof o.xml ? o.xml : "", "" == xml) {
                                var e = "https://gamer-cds.cdn.hinet.net/vod_gamer/_definst_/smil:gamer_ad/" + u.adID + "/hls-s-ae-2s.smil/playlist.m3u8";
                                xml = '<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="2.0" xsi:noNamespaceSchemaLocation="vast.xsd"><Ad id="270"><InLine><AdSystem version="2.0"></AdSystem><AdTitle></AdTitle><Description></Description><Impression><![CDATA[' + e + ']]></Impression><Creatives><Creative sequence="1" AdID="270"><Linear skipoffset="00:00:30"><Duration>00:00:05</Duration><TrackingEvents><Tracking event="start"><![CDATA[' + e + ']]></Tracking><Tracking event="firstQuartile"><![CDATA[' + e + ']]></Tracking><Tracking event="midpoint"><![CDATA[' + e + ']]></Tracking><Tracking event="thirdQuartile"><![CDATA[' + e + ']]></Tracking><Tracking event="complete"><![CDATA[' + e + "]]></Tracking></TrackingEvents><VideoClicks><ClickThrough><![CDATA[" + u.adURL + ']]></ClickThrough></VideoClicks><MediaFiles><MediaFile delivery="streaming" type="application/x-mpegURL" bitrate="400" width="640" height=""><![CDATA[' + e + "]]></MediaFile></MediaFiles></Linear></Creative></Creatives></InLine></Ad></VAST>"
                            }
                            return t
                        }
                        var o = {
                            adCancelTimeout: 1e4,
                            xml: ""
                        };
                        $(".video-cover-ncc").remove(), "facebook" === u.adType ? $.ajax({
                            url: "https://an.facebook.com/v1/instream/vast.xml",
                            method: "get",
                            xhrFields: {
                                withCredentials: !0
                            },
                            data: {
                                placementid: "999209800138733_1534512216608486",
                                pageurl: "https://ani.gamer.com.tw/animeVideo.php?sn=" + animefun.videoSn
                            },
                            dataType: "text"
                        }).done(function(n) {
                            var i = $.parseXML(n),
                                r = $(i),
                                s = r.find("Ad");
                            if ("" !== s.text()) {
                                var a = n,
                                    l = r.find("AdParameters"),
                                    c = $.parseJSON(l.text());
                                $.ajax({
                                    url: c.video.videoURL
                                }).done(function() {
                                    o.xml = a, u.userVolume = u.volume(), t()
                                }).fail(e)
                            } else e()
                        }).fail(e) : t()
                    },
                    u = this;
                u.endPointer = 0, u.danmuCCL(), u.persistvolume({
                    namespace: "ANIME"
                }), u.persistdanmu({
                    namespace: "ANIME"
                });
                var d = document,
                    p = u.controlBar,
                    h = {
                        subtitle: d.getElementsByClassName("subtitle")[0],
                        pre: p.getChildById("preEpisode"),
                        next: p.getChildById("nextEpisode"),
                        indent: p.getChildById("theaterToggle"),
                        fullscreen: p.getChildById("fullscreenToggle"),
                        danmu: p.getChildById("danmuToggle")
                    };
                u.persistvolume({
                    namespace: "ANIME"
                }), u.persistindent({
                    namespace: "ANIME"
                }), animefun.checkdanmulist(animefun.danmu_status);
                var f = animefun.renderSublist();
                if (jQuery("#sub_list").scroll(f), u.loadingSpinner.hide(), u.adTimer = "", u.adCounter = 0, u.r18)
                    if (u.ageGate(u.r18), u.bigPlayButton.hide(), u.adenable) $("#adult").click(c);
                    else {
                        var v = document.getElementsByClassName("R18")[0];
                        $("#adult").click(function() {
                            u.el().removeChild(v), $(".sponsorship-text").remove(), u.play()
                        })
                    }
                u.adenable ? (u.elapse({
                    adenable: !0
                }), u.on(["vast.adError", "vpaid.AdError"], function() {}), u.one(["vast.adStart", "vpaid.adStart"], function() {
                    "facebook" === u.adType && (u.volume(.3), $(".vjs-control-bar").css("visibility", "visible"), $(".vjs-control-bar").css("opacity", "0.75")), s(), jQuery.ajax({
                        url: "/ajax/videoCastcishu.php?s=" + u.adSID + "&sn=" + animefun.videoSn,
                        success: function() {}
                    })
                }), u.one("vast.adEnd", function() {
                    if ("video" == u.adType) {
                        if (u.adCounter < 25) return !1;
                        clearInterval(u.adTimer)
                    }
                    a(), jQuery.ajax({
                        url: "/ajax/videoCastcishu.php?s=" + u.adSID + "&sn=" + animefun.videoSn + "&ad=end",
                        success: function() {
                            jQuery.ajax({
                                url: "/ajax/m3u8.php?sn=" + animefun.videoSn + "&device=" + animefun.getdeviceid(),
                                success: l
                            })
                        }
                    })
                }), u.one("vast.contentStart", function() {
                    "facebook" === u.adType && u.volume(u.userVolume), $(".vjs-control-bar").css("visibility", ""), $(".vjs-control-bar").css("opacity", "")
                })) : (u.elapse({
                    adenable: !1
                }), u.one("play", function() {
                    s(), a()
                }), jQuery.ajax({
                    url: "/ajax/m3u8.php?sn=" + animefun.videoSn + "&device=" + animefun.getdeviceid(),
                    success: l
                })), u.one("play", function() {
                    jQuery.ajax({
                        url: "/ajax/checklock.php?device=" + animefun.getdeviceid() + "&sn=" + animefun.videoSn,
                        success: function() {}
                    })
                }), u.on("fullscreenchange", function() {
                    n(h)
                }), u.on("play", function() {
                    this.bigPlayButton.hide(), this.el().focus()
                }), u.on("seeked", function() {
                    parseFloat(u.duration()) > parseFloat(animefun.gettotaltime()) + 1 && confirm("影片發生異常，請重新整理！") && (this.breakPoint({
                        namespace: "ANIME",
                        del: !0
                    }), window.location.reload())
                }), u.on("error", function(t) {
                    var e = this.error().message;
                    setTimeout(function() {
                        u.errPageCCL(u.localize(e))
                    }, 500)
                }), u.on("useractive", function(t) {
                    u.pageY < jQuery("video").offset().top + jQuery("video").height() - 60 && 1 != u.pageTouch && u.userActive(!1)
                }), u.on("touchstart", function(t) {
                    u.pageTouch = !0
                }), u.on("mousemove", function(t) {
                    u.pageY = t.pageY, clearTimeout(u.hidemouse), jQuery("#ani_video").css("cursor", "default"), u.hidemouse = setTimeout(function() {
                        jQuery("#ani_video").css("cursor", "")
                    }, 2e3)
                })
            }
        }
    }), define("init", ["videojs", "app"], function(t, e) {
        function n() {
            var t = (new Date).getTime();
            window.performance && "function" == typeof window.performance.now && (t += performance.now());
            var e = "xxxxxxxxxxxx".replace(/[x]/g, function(e) {
                var n = (t + 16 * Math.random()) % 16 | 0;
                return t = Math.floor(t / 16), ("x" == e ? n : 3 & n | 8).toString(16)
            });
            return e
        }

        function i(t) {
            var e = document.createElement("video");
            if (e.className = "video-js vjs-default-skin", e.id = "ani_video", t) {
                var n = document.createElement("source");
                n.src = "//gamer-cds.cdn.hinet.net/vod_gamer/_definst_/smil:gamer_ad/41920/hls-s-ae-2s.smil/playlist.m3u8", n.type = "application/x-mpegURL", e.setAttribute("data-viblast-key", "bth44tqf2a"), e.setAttribute("data-viblast-abr-consider-dimensions", "false"), e.setAttribute("data-viblast-low-buffer-level", "60"), e.setAttribute("data-viblast-buffer-while-paused", "true"), e.setAttribute("data-viblast-av-gap-correction", "true"), e.setAttribute("data-setup", '{"techOrder": ["viblast","html5"]}'), e.setAttribute("width", "auto"), e.setAttribute("height", "auto"), e.appendChild(n)
            }! function() {
                try {
                    var t = document.getElementById("video-container");
                    t.appendChild(e)
                } catch (n) {}
            }()
        }

        function o() {
            function n(t) {
                var e = t.getChildById("danmuToggle"),
                    n = t.getChildById("fullscreenToggle"),
                    i = t.getChildById("muteToggle"),
                    o = t.getChildById("nextEpisode"),
                    r = t.getChildById("preEpisode"),
                    s = t.getChildById("theaterToggle");
                e.c.className = "vjs-danmu-button vjs-control vjs-hidden", n.c.title = "進入全螢幕", n.c.classList.add("vjs-show-tip"), i.c.classList.add("vjs-show-tip"), o.c.title = "下一集", o.c.className = "vjs-next-button vjs-control vjs-show-tip vjs-hidden", r.c.title = "上一集", r.c.className = "vjs-pre-button vjs-control vjs-show-tip vjs-hidden", s.c.className = "vjs-indent-button vjs-control vjs-show-tip"
            }

            function o() {
                var t = this,
                    i = t.controlBar;
                if (n(i), t.login = 1 != a.login ? !1 : !0, t.r18 = a.r18 ? a.r18 : void 0, t.promote = void 0 !== a.promote ? a.promote : [], a.vip || "FHD" !== animefun.quality ? t.fakeFHD = !1 : t.fakeFHD = !0, !a.vip) {
                    var o = "";
                    l = getSponsorVideoAd(a.animeSn), l && (c = l[0], u = l[1], d = l[2], p = l[3], o = l[4]);
                    var r = getSponsorLogoAd(a.animeSn);
                    r && (t.logoImg = r[4], t.logoURL = r[1], !o && r[5] && (o = r[5])), t.sponsorText = o
                }
                t.adID = c, t.adSID = d, t.adURL = u, t.adType = p, t.adIsPlaying = !1, 1 != a.time ? t.adenable = !0 : t.adenable = !1, e.initialize.apply(t)
            }

            function h() {
                var t = this;
                9 == f ? (t.dispose(), r(t)) : 14 == f ? (t.dispose(), s(t)) : t.error(f)
            }
            if (t.addLanguage("zh", {
                Play: "播放",
                Pause: "暫停",
                "Current Time": "目前時間",
                "Duration Time": "總共時間",
                "Remaining Time": "剩餘時間",
                "Stream Type": "串流類型",
                LIVE: "直播",
                Loaded: "載入完畢",
                Progress: "進度",
                Fullscreen: "全螢幕",
                "Non-Fullscreen": "退出全螢幕",
                Mute: "靜音",
                Unmuted: "取消靜音",
                "Playback Rate": " 播放速率",
                Subtitles: "字幕",
                "subtitles off": "關閉字幕",
                Captions: "內嵌字幕",
                "You aborted the video playback": "影片播放已終止",
                "A network error caused the video download to fail part-way.": "網路錯誤導致影片下載失敗。",
                "The video playback was aborted due to a corruption problem or because the video used features your browser did not support.": "影片因格式不支援或者伺服器或網路的問題無法載入。",
                "The video could not be loaded, because the format is not supported.": "載入失敗，請嘗試重新整理頁面。",
                "The video is encrypted and we do not have the keys to decrypt it.": "影片已加密，無法解密。",
                "Video doesn't exist.": "錯誤的影片位置！",
                "Unauthorized devices.": "錯誤代碼1，影片傳輸中斷，請參考<a href='//ani.gamer.com.tw/anime403info.php'>可能原因</a>",
                "Duplicate login.": "重複登入，本服務僅限一台裝置使用，請暫停其他裝置播放！",
                "To access the video, please login": "<a href='//user.gamer.com.tw/login.php'>請先登入</a>",
                "The video playback was aborted due to a corruption problem.": "網路異常，無法取得影片！請嘗試重新整理頁面",
                "Our Services are available in Taiwan.": "本服務授權範圍僅限台灣地區，如果您為外國用戶或使用變更IP的插件或軟體，將無法正常使用本服務。",
                "Oops, something went wrong.": "播放器未正確載入，可能原因如下： <br />1.網路異常，請嘗試重新整理頁面 <br />2.受瀏覽器的擋廣告插件或是防毒軟體影響，請將 gamer.com.tw 加入白名單或是關閉插件。",
                "Sorry, you need to register for three months to use the service.": "很抱歉！使用本服務須註冊滿三個月。",
                "Paid Member only.": "本動畫僅供付費會員觀看喔！。"
            }), a.error) {
                i(!1);
                var f = Number(a.error);
                t("ani_video", {
                    language: "zh"
                }, h)
            } else i(!0), t("ani_video", {
                children: {
                    controlBar: {
                        children: [{
                            name: "playToggle",
                            id: "playToggle"
                        }, {
                            name: "progressControl",
                            id: "progressControl"
                        }, {
                            name: "button",
                            id: "preEpisode"
                        }, {
                            name: "button",
                            id: "nextEpisode"
                        }, {
                            name: "currentTimeDisplay",
                            id: "currentTimeDisplay"
                        }, {
                            name: "timeDivider",
                            id: "timeDivider"
                        }, {
                            name: "durationDisplay",
                            id: "durationDisplay"
                        }, {
                            name: "muteToggle",
                            id: "muteToggle"
                        }, {
                            name: "volumeControl",
                            id: "volumeControl"
                        }, {
                            name: "button",
                            id: "theaterToggle"
                        }, {
                            name: "fullscreenToggle",
                            id: "fullscreenToggle"
                        }, {
                            name: "button",
                            id: "danmuToggle"
                        }]
                    }
                },
                controls: !0,
                language: "zh",
                viblast: {
                    xhrBeforeSend: function(t) {
                        "http://hls-hichannel.cdn.hinet.net/keys/a.key" == t.url && t.xhr.open(t.method, "//hls-hichannel.cdn.hinet.net/keys/a.key")
                    }
                }
            }, o), delete t.players.ani_video
        }

        function r(t) {
            var e = document,
                n = e.createElement("div"),
                i = e.createElement("a"),
                o = e.createElement("div"),
                r = e.getElementsByClassName("video")[0];
            n.className = "login", n.innerHTML = '<span class="material-icons">person</span><br> 請先登入', i.href = "//user.gamer.com.tw/login.php", o.className = "stop", i.appendChild(n), o.appendChild(i), r.appendChild(o)
        }

        function s(t) {
            var e = document,
                n = e.createElement("div"),
                i = e.createElement("div"),
                o = e.getElementsByClassName("video")[0];
            n.className = "R18", i.className = "video-charge-check", i.innerHTML = '<h2> 本動畫僅供付費會員觀看喔！</h2><a href="//ani.gamer.com.tw/animePay.php" target="_blank">參考付費方案</a>', n.appendChild(i), o.appendChild(n)
        }
        var a = {};
        try {
            var l = getMajorAd(),
                c = l[0],
                u = l[1],
                d = l[2],
                p = l[3];
            c || "facebook" === p || (a.error = 12)
        } catch (h) {
            a.error = 12, Object.freeze(a)
        }
        return {
            initialize: function() {
                a.uuid = n(), animefun.uuid = a.uuid, jQuery.ajax({
                    url: "/ajax/token.php?adID=" + c + "&sn=" + animefun.videoSn + "&device=" + animefun.getdeviceid() + "&hash=" + a.uuid,
                    success: function(t) {
                        var e = jQuery.parseJSON(t);
                        if (!Object.isFrozen(a))
                            for (var n in e) a[n] = e[n];
                        o()
                    },
                    error: function() {
                        Object.isFrozen(a) || (a.error = 10), o()
                    }
                })
            }
        }
    }), requirejs.config({
        baseUrl: "//i2.bahamut.com.tw",
        waitSeconds: 0,
        paths: {
            order: "js/order",
            videojs: "js/video",
            viblast: "js/viblast.js?v=20170511001",
            vastvpaid: "js/videojs_4.vast.vpaid",
            peresistvolume: "js/videojs_persistvolume",
            peresistdanmu: "js/videojs_persistdanmu",
            peresistdanmutoggle: "js/videojs_persistdanmutoggle",
            peresistindent: "js/videojs_persistindent",
            peresistquality: "js/videojs_persistquality",
            peresistquizprompt: "js/videojs_persistquizprompt",
            danmu: "js/videojs_danmu",
            hotkeys: "js/videojs_hotkeys",
            quality: "js/videojs_quality_selector",
            qualitysingle: "js/videojs_quality_single",
            elapse: "js/videojs_elapse",
            agegate: "js/videojs_agegate",
            stopmask: "js/videojs_stopmask",
            overlay: "js/videojs_overlay",
            progresstip: "js/videojs_progresstip",
            breakpoint: "js/videojs_breakpoint",
            err: "js/videojs_errpage",
            init: "js/anime_init",
            app: "js/anime_app"
        },
        shim: {
            viblast: {},
            vastvpaid: {
                deps: ["videojs"]
            }
        }
    }), requirejs(["order!videojs", "order!viblast", "order!vastvpaid", "order!agegate", "order!breakpoint", "order!elapse", "order!danmu", "order!hotkeys", "order!overlay", "order!peresistvolume", "order!peresistdanmu", "order!peresistdanmutoggle", "order!peresistindent", "order!peresistquality", "order!peresistquizprompt", "order!progresstip", "order!quality", "order!qualitysingle", "order!stopmask", "order!err", "order!init", "order!app"], function(t, e, n, i, o, r, s, a, l, c, u, d, p, h, f, v, m, g, y, b, w, T) {
        w.initialize(), delete videojs.players.ani_video
    }), define("js/anime_main", function() {});
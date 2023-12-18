! function() {
    "use strict";

    function t(t, e) {
        e ? (d[0] = d[16] = d[1] = d[2] = d[3] = d[4] = d[5] = d[6] = d[7] = d[8] = d[9] = d[10] = d[11] = d[12] = d[13] = d[14] = d[15] = 0, this.blocks = d) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = t
    }

    function i(e, i, a) {
        var n, o = typeof e;
        if ("string" === o) {
            var r, l = [],
                d = e.length,
                s = 0;
            for (n = 0; n < d; ++n)(r = e.charCodeAt(n)) < 128 ? l[s++] = r : r < 2048 ? (l[s++] = 192 | r >> 6, l[s++] = 128 | 63 & r) : r < 55296 || r >= 57344 ? (l[s++] = 224 | r >> 12, l[s++] = 128 | r >> 6 & 63, l[s++] = 128 | 63 & r) : (r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(++n)), l[s++] = 240 | r >> 18, l[s++] = 128 | r >> 12 & 63, l[s++] = 128 | r >> 6 & 63, l[s++] = 128 | 63 & r);
            e = l
        } else {
            if ("object" !== o) throw new Error(h);
            if (null === e) throw new Error(h);
            if (f && e.constructor === ArrayBuffer) e = new Uint8Array(e);
            else if (!(Array.isArray(e) || f && ArrayBuffer.isView(e))) throw new Error(h)
        }
        e.length > 64 && (e = new t(i, !0).update(e).array());
        var c = [],
            u = [];
        for (n = 0; n < 64; ++n) {
            var p = e[n] || 0;
            c[n] = 92 ^ p, u[n] = 54 ^ p
        }
        t.call(this, i, a), this.update(u), this.oKeyPad = c, this.inner = !0, this.sharedMemory = a
    }
    var h = "input is invalid type",
        r = "object" == typeof window,
        s = r ? window : {};
    s.JS_SHA256_NO_WINDOW && (r = !1);
    var e = !r && "object" == typeof self,
        n = !s.JS_SHA256_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
    n ? s = global : e && (s = self);
    var o = !s.JS_SHA256_NO_COMMON_JS && "object" == typeof module && module.exports,
        a = "function" == typeof define && define.amd,
        f = !s.JS_SHA256_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
        u = "0123456789abcdef".split(""),
        c = [-2147483648, 8388608, 32768, 128],
        y = [24, 16, 8, 0],
        p = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
        l = ["hex", "array", "digest", "arrayBuffer"],
        d = [];
    !s.JS_SHA256_NO_NODE_JS && Array.isArray || (Array.isArray = function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }), !f || !s.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(t) {
        return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
    });
    var A = function(e, i) {
            return function(a) {
                return new t(i, !0).update(a)[e]()
            }
        },
        w = function(e) {
            var i = A("hex", e);
            n && (i = b(i, e)), i.create = function() {
                return new t(e)
            }, i.update = function(t) {
                return i.create().update(t)
            };
            for (var a = 0; a < l.length; ++a) {
                var o = l[a];
                i[o] = A(o, e)
            }
            return i
        },
        b = function(t, i) {
            var r = eval("require('crypto')"),
                s = eval("require('buffer').Buffer"),
                e = i ? "sha224" : "sha256",
                n = function(i) {
                    if ("string" == typeof i) return r.createHash(e).update(i, "utf8").digest("hex");
                    if (null === i || void 0 === i) throw new Error(h);
                    return i.constructor === ArrayBuffer && (i = new Uint8Array(i)), Array.isArray(i) || ArrayBuffer.isView(i) || i.constructor === s ? r.createHash(e).update(new s(i)).digest("hex") : t(i)
                };
            return n
        },
        v = function(t, e) {
            return function(a, n) {
                return new i(a, e, !0).update(n)[t]()
            }
        },
        _ = function(t) {
            var e = v("hex", t);
            e.create = function(e) {
                return new i(e, t)
            }, e.update = function(t, i) {
                return e.create(t).update(i)
            };
            for (var a = 0; a < l.length; ++a) {
                var n = l[a];
                e[n] = v(n, t)
            }
            return e
        };
    t.prototype.update = function(t) {
        if (!this.finalized) {
            var e, i = typeof t;
            if ("string" !== i) {
                if ("object" !== i) throw new Error(h);
                if (null === t) throw new Error(h);
                if (f && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                else if (!(Array.isArray(t) || f && ArrayBuffer.isView(t))) throw new Error(h);
                e = !0
            }
            for (var a, n, o = 0, r = t.length, l = this.blocks; o < r;) {
                if (this.hashed && (this.hashed = !1, l[0] = this.block, l[16] = l[1] = l[2] = l[3] = l[4] = l[5] = l[6] = l[7] = l[8] = l[9] = l[10] = l[11] = l[12] = l[13] = l[14] = l[15] = 0), e)
                    for (n = this.start; o < r && n < 64; ++o) l[n >> 2] |= t[o] << y[3 & n++];
                else
                    for (n = this.start; o < r && n < 64; ++o)(a = t.charCodeAt(o)) < 128 ? l[n >> 2] |= a << y[3 & n++] : a < 2048 ? (l[n >> 2] |= (192 | a >> 6) << y[3 & n++], l[n >> 2] |= (128 | 63 & a) << y[3 & n++]) : a < 55296 || a >= 57344 ? (l[n >> 2] |= (224 | a >> 12) << y[3 & n++], l[n >> 2] |= (128 | a >> 6 & 63) << y[3 & n++], l[n >> 2] |= (128 | 63 & a) << y[3 & n++]) : (a = 65536 + ((1023 & a) << 10 | 1023 & t.charCodeAt(++o)), l[n >> 2] |= (240 | a >> 18) << y[3 & n++], l[n >> 2] |= (128 | a >> 12 & 63) << y[3 & n++], l[n >> 2] |= (128 | a >> 6 & 63) << y[3 & n++], l[n >> 2] |= (128 | 63 & a) << y[3 & n++]);
                this.lastByteIndex = n, this.bytes += n - this.start, n >= 64 ? (this.block = l[16], this.start = n - 64, this.hash(), this.hashed = !0) : this.start = n
            }
            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
        }
    }, t.prototype.finalize = function() {
        if (!this.finalized) {
            this.finalized = !0;
            var t = this.blocks,
                e = this.lastByteIndex;
            t[16] = this.block, t[e >> 2] |= c[3 & e], this.block = t[16], e >= 56 && (this.hashed || this.hash(), t[0] = this.block, t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.hBytes << 3 | this.bytes >>> 29, t[15] = this.bytes << 3, this.hash()
        }
    }, t.prototype.hash = function() {
        var t, e, i, a, n, o, r, l, d, s = this.h0,
            c = this.h1,
            u = this.h2,
            m = this.h3,
            g = this.h4,
            _ = this.h5,
            y = this.h6,
            f = this.h7,
            v = this.blocks;
        for (t = 16; t < 64; ++t) e = ((n = v[t - 15]) >>> 7 | n << 25) ^ (n >>> 18 | n << 14) ^ n >>> 3, i = ((n = v[t - 2]) >>> 17 | n << 15) ^ (n >>> 19 | n << 13) ^ n >>> 10, v[t] = v[t - 16] + e + v[t - 7] + i << 0;
        for (d = c & u, t = 0; t < 64; t += 4) this.first ? (this.is224 ? (o = 300032, f = (n = v[0] - 1413257819) - 150054599 << 0, m = n + 24177077 << 0) : (o = 704751109, f = (n = v[0] - 210244248) - 1521486534 << 0, m = n + 143694565 << 0), this.first = !1) : (e = (s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10), a = (o = s & c) ^ s & u ^ d, f = m + (n = f + (i = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7)) + (g & _ ^ ~g & y) + p[t] + v[t]) << 0, m = n + (e + a) << 0), e = (m >>> 2 | m << 30) ^ (m >>> 13 | m << 19) ^ (m >>> 22 | m << 10), a = (r = m & s) ^ m & c ^ o, y = u + (n = y + (i = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7)) + (f & g ^ ~f & _) + p[t + 1] + v[t + 1]) << 0, e = ((u = n + (e + a) << 0) >>> 2 | u << 30) ^ (u >>> 13 | u << 19) ^ (u >>> 22 | u << 10), a = (l = u & m) ^ u & s ^ r, _ = c + (n = _ + (i = (y >>> 6 | y << 26) ^ (y >>> 11 | y << 21) ^ (y >>> 25 | y << 7)) + (y & f ^ ~y & g) + p[t + 2] + v[t + 2]) << 0, e = ((c = n + (e + a) << 0) >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10), a = (d = c & u) ^ c & m ^ l, g = s + (n = g + (i = (_ >>> 6 | _ << 26) ^ (_ >>> 11 | _ << 21) ^ (_ >>> 25 | _ << 7)) + (_ & y ^ ~_ & f) + p[t + 3] + v[t + 3]) << 0, s = n + (e + a) << 0;
        this.h0 = this.h0 + s << 0, this.h1 = this.h1 + c << 0, this.h2 = this.h2 + u << 0, this.h3 = this.h3 + m << 0, this.h4 = this.h4 + g << 0, this.h5 = this.h5 + _ << 0, this.h6 = this.h6 + y << 0, this.h7 = this.h7 + f << 0
    }, t.prototype.hex = function() {
        this.finalize();
        var t = this.h0,
            e = this.h1,
            i = this.h2,
            a = this.h3,
            n = this.h4,
            o = this.h5,
            r = this.h6,
            l = this.h7,
            d = u[t >> 28 & 15] + u[t >> 24 & 15] + u[t >> 20 & 15] + u[t >> 16 & 15] + u[t >> 12 & 15] + u[t >> 8 & 15] + u[t >> 4 & 15] + u[15 & t] + u[e >> 28 & 15] + u[e >> 24 & 15] + u[e >> 20 & 15] + u[e >> 16 & 15] + u[e >> 12 & 15] + u[e >> 8 & 15] + u[e >> 4 & 15] + u[15 & e] + u[i >> 28 & 15] + u[i >> 24 & 15] + u[i >> 20 & 15] + u[i >> 16 & 15] + u[i >> 12 & 15] + u[i >> 8 & 15] + u[i >> 4 & 15] + u[15 & i] + u[a >> 28 & 15] + u[a >> 24 & 15] + u[a >> 20 & 15] + u[a >> 16 & 15] + u[a >> 12 & 15] + u[a >> 8 & 15] + u[a >> 4 & 15] + u[15 & a] + u[n >> 28 & 15] + u[n >> 24 & 15] + u[n >> 20 & 15] + u[n >> 16 & 15] + u[n >> 12 & 15] + u[n >> 8 & 15] + u[n >> 4 & 15] + u[15 & n] + u[o >> 28 & 15] + u[o >> 24 & 15] + u[o >> 20 & 15] + u[o >> 16 & 15] + u[o >> 12 & 15] + u[o >> 8 & 15] + u[o >> 4 & 15] + u[15 & o] + u[r >> 28 & 15] + u[r >> 24 & 15] + u[r >> 20 & 15] + u[r >> 16 & 15] + u[r >> 12 & 15] + u[r >> 8 & 15] + u[r >> 4 & 15] + u[15 & r];
        return this.is224 || (d += u[l >> 28 & 15] + u[l >> 24 & 15] + u[l >> 20 & 15] + u[l >> 16 & 15] + u[l >> 12 & 15] + u[l >> 8 & 15] + u[l >> 4 & 15] + u[15 & l]), d
    }, t.prototype.toString = t.prototype.hex, t.prototype.digest = function() {
        this.finalize();
        var t = this.h0,
            e = this.h1,
            i = this.h2,
            a = this.h3,
            n = this.h4,
            o = this.h5,
            r = this.h6,
            l = this.h7,
            d = [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r];
        return this.is224 || d.push(l >> 24 & 255, l >> 16 & 255, l >> 8 & 255, 255 & l), d
    }, t.prototype.array = t.prototype.digest, t.prototype.arrayBuffer = function() {
        this.finalize();
        var t = new ArrayBuffer(this.is224 ? 28 : 32),
            e = new DataView(t);
        return e.setUint32(0, this.h0), e.setUint32(4, this.h1), e.setUint32(8, this.h2), e.setUint32(12, this.h3), e.setUint32(16, this.h4), e.setUint32(20, this.h5), e.setUint32(24, this.h6), this.is224 || e.setUint32(28, this.h7), t
    }, i.prototype = new t, i.prototype.finalize = function() {
        if (t.prototype.finalize.call(this), this.inner) {
            this.inner = !1;
            var e = this.array();
            t.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(e), t.prototype.finalize.call(this)
        }
    };
    var B = w();
    B.sha256 = B, B.sha224 = w(!0), B.sha256.hmac = _(), B.sha224.hmac = _(!0), o ? module.exports = B : (s.sha256 = B.sha256, s.sha224 = B.sha224, a && define(function() {
        return B
    }))
}(), "function" != typeof String.prototype.startsWith && (String.prototype.startsWith = function(t) {
    return 0 === this.lastIndexOf(t, 0)
}), "function" != typeof String.prototype.endsWith && (String.prototype.endsWith = function(t) {
    return -1 !== this.indexOf(t, this.length - t.length)
}), "function" != typeof String.prototype.trim && (String.prototype.trim = function() {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
}), "function" != typeof Array.prototype.find && (Array.prototype.find = function(t) {
    if (null == this) throw new TypeError('"this" is null or not defined');
    var e = Object(this),
        i = e.length >>> 0;
    if ("function" != typeof t) throw new TypeError("callback must be a function");
    for (var a = arguments[1], n = 0; n < i;) {
        var o = e[n];
        if (t.call(a, o, n, e)) return o;
        n++
    }
}), "function" != typeof Array.prototype.findIndex && Object.defineProperty(Array.prototype, "findIndex", {
    value: function(t) {
        if (null == this) throw new TypeError('"this" is null or not defined');
        var e = Object(this),
            i = e.length >>> 0;
        if ("function" != typeof t) throw new TypeError("predicate must be a function");
        for (var a = arguments[1], n = 0; n < i;) {
            var o = e[n];
            if (t.call(a, o, n, e)) return n;
            n++
        }
        return -1
    },
    configurable: !0,
    writable: !0
}), "function" != typeof Array.prototype.filter && (Array.prototype.filter = function(t, e) {
    "use strict";
    if ("function" != typeof t || !this) throw new TypeError;
    var i = this.length >>> 0,
        a = new Array(i),
        n = this,
        o = 0,
        r = -1;
    if (void 0 === e)
        for (; ++r !== i;)
            if (r in this)
                if (t(n[r], r, n)) a[o++] = n[r];
                else
                    for (; ++r !== i;) r in this && t.call(e, n[r], r, n) && (a[o++] = n[r]);
    return a.length = o, a
}), "function" != typeof Array.prototype.map && (Array.prototype.map = function(t) {
    var e, i, a;
    if (null == this) throw new TypeError("this is null or not defined");
    var n = Object(this),
        o = n.length >>> 0;
    if ("function" != typeof t) throw new TypeError(t + " is not a function");
    for (arguments.length > 1 && (e = arguments[1]), i = new Array(o), a = 0; a < o;) {
        var r, l;
        a in n && (r = n[a], l = t.call(e, r, a, n), i[a] = l), a++
    }
    return i
}), "function" != typeof Array.prototype.reduce && (Array.prototype.reduce = function(t) {
    if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
    if ("function" != typeof t) throw new TypeError(t + " is not a function");
    var e, i = Object(this),
        a = i.length >>> 0,
        n = 0;
    if (arguments.length >= 2) e = arguments[1];
    else {
        for (; n < a && !(n in i);) n++;
        if (n >= a) throw new TypeError("Reduce of empty array with no initial value");
        e = i[n++]
    }
    for (; n < a;) n in i && (e = t(e, i[n], n, i)), n++;
    return e
}), "function" != typeof Object.keys && (Object.keys = function() {
    "use strict";
    var t = Object.prototype.hasOwnProperty,
        e = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        i = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        a = i.length;
    return function(n) {
        if ("function" != typeof n && ("object" != typeof n || null === n)) throw new TypeError("Object.keys called on non-object");
        var o, r, l = [];
        for (o in n) t.call(n, o) && l.push(o);
        if (e)
            for (r = 0; r < a; r++) t.call(n, i[r]) && l.push(i[r]);
        return l
    }
}()), String.prototype.replaceAll = function(t, e) {
    return this.valueOf().split(t).join(e)
}, String.prototype.encode = function() {
    return this.valueOf().replaceAll(/&/g, "&#38;").replaceAll(/>/g, "&#62;").replaceAll(/</g, "&#60;").replaceAll(/'/g, "&#39;").replaceAll(/"/g, "&#34;").replaceAll(/\\/g, "&#165;").replaceAll(/{/g, "&#123;").replaceAll(/}/g, "&#125;")
}, String.prototype.decode = function() {
    return this.valueOf().replaceAll(/&#38;/g, "&").replaceAll(/&#62;/g, ">").replaceAll(/&#60;/g, "<").replaceAll(/&#39;/g, "'").replaceAll(/&#34;/g, '"').replaceAll(/&#165;/g, "\\").replaceAll(/&#123;/g, "{").replaceAll(/&#125;/g, "}")
}, String.prototype.format = function() {
    for (var t = this, e = 0; e < arguments.length; e++) {
        var i = new RegExp("\\{" + e + "\\}", "gi");
        t = t.replace(i, arguments[e])
    }
    return t.valueOf()
}, Array.prototype.removeSpace = function() {
    var t = [];
    return this.forEach(function(e) {
        (e = e.trim()).length > 0 && t.push(e)
    }), t
}, Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)]
}, Array.prototype.unique = function() {
    return this.filter(function(t, e, i) {
        return i.indexOf(t) == e
    })
}, Array.prototype.except = function(t) {
    var e = this;
    return Array.isArray(t) && t.forEach(function(t) {
        var i = e.indexOf(t); - 1 != i && e.splice(i, 1)
    }), e
}, Array.prototype.only = function(t) {
    var e = [];
    return Array.isArray(t) && this.forEach(function(i) {
        -1 != t.indexOf(i) && e.push(i)
    }), e
}, Array.prototype.insert = function(t, e) {
    this.splice(t, 0, e)
};
var equalsLadiPage = function(t, e) {
        return isObjectLadiPage(window.angular) && isFunctionLadiPage(window.angular.equals) ? window.angular.equals(t, e) : Object.prototype.toString.call(t) == Object.prototype.toString.call(e) && JSON.stringify(t) == JSON.stringify(e)
    },
    isObjectLadiPage = function(t) {
        return "[object Object]" == Object.prototype.toString.call(t)
    },
    isArrayLadiPage = function(t) {
        return "[object Array]" == Object.prototype.toString.call(t)
    },
    isFunctionLadiPage = function(t) {
        return "[object Function]" == Object.prototype.toString.call(t) || "[object AsyncFunction]" == Object.prototype.toString.call(t)
    },
    isBooleanLadiPage = function(t) {
        return "[object Boolean]" == Object.prototype.toString.call(t)
    },
    isStringLadiPage = function(t) {
        return "[object String]" == Object.prototype.toString.call(t)
    },
    isEmptyLadiPage = function(t) {
        return !!isNullLadiPage(t) || (isStringLadiPage(t) ? 0 == (t = t.trim().toLowerCase()).length || "undefined" == t || "null" == t : !!isArrayLadiPage(t) && 0 == t.length)
    },
    isNullLadiPage = function(t) {
        return "[object Null]" == Object.prototype.toString.call(t) || "[object Undefined]" == Object.prototype.toString.call(t)
    },
    parseFloatLadiPage = function(t, e) {
        var i = parseFloat(t);
        try {
            return parseFloat(LadiPageScript.formatNumber(i, 21, null, e || 6))
        } catch (t) {
            return NaN
        }
    },
    decodeURIComponentLadiPage = function(t) {
        try {
            return decodeURIComponent(t)
        } catch (e) {
            return t
        }
    },
    formatNumber = function(t, e, i, a) {
        (isEmptyLadiPage(i) || isEmptyLadiPage(a)) && (i = "", a = 0), isEmptyLadiPage(e) && (e = "");
        var n = LadiPageScript.formatNumber(t, null, null, a);
        return n = (n = n.replaceAll(",", "LADIPAGE_NUMBER_COMMA").replaceAll(".", "LADIPAGE_NUMBER_DOT")).replaceAll("LADIPAGE_NUMBER_COMMA", e).replaceAll("LADIPAGE_NUMBER_DOT", i)
    },
    textToNumber = function(t, e, i, a) {
        (isEmptyLadiPage(i) || isEmptyLadiPage(a)) && (a = 0);
        var n = String(t);
        return isEmptyLadiPage(e) || (n = n.replaceAll(e, "")), isEmptyLadiPage(i) || (n = n.replaceAll(i, ".")), n = n.split("."), n = a <= 0 || 1 == n.length ? n[0] : n[0] + "." + n[1].substring(0, a), parseFloatLadiPage(n) || 0
    },
    formatNumberComma = function(t, e) {
        return formatNumber(t, ",", ".", e)
    },
    textToNumberComma = function(t, e) {
        return textToNumber(t, ",", ".", e)
    },
    formatNumberDot = function(t, e) {
        return formatNumber(t, ".", ",", e)
    },
    textToNumberDot = function(t, e) {
        return textToNumber(t, ".", ",", e)
    },
    Base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function(t) {
            var e, i, a, n, o, r, l, d = "",
                s = 0;
            for (t = Base64._utf8_encode(t); s < t.length;) n = (e = t.charCodeAt(s++)) >> 2, o = (3 & e) << 4 | (i = t.charCodeAt(s++)) >> 4, r = (15 & i) << 2 | (a = t.charCodeAt(s++)) >> 6, l = 63 & a, isNaN(i) ? r = l = 64 : isNaN(a) && (l = 64), d = d + Base64._keyStr.charAt(n) + Base64._keyStr.charAt(o) + Base64._keyStr.charAt(r) + Base64._keyStr.charAt(l);
            return d
        },
        decode: function(t) {
            var e, i, a, n, o, r, l = "",
                d = 0;
            for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); d < t.length;) e = Base64._keyStr.indexOf(t.charAt(d++)) << 2 | (n = Base64._keyStr.indexOf(t.charAt(d++))) >> 4, i = (15 & n) << 4 | (o = Base64._keyStr.indexOf(t.charAt(d++))) >> 2, a = (3 & o) << 6 | (r = Base64._keyStr.indexOf(t.charAt(d++))), l += String.fromCharCode(e), 64 != o && (l += String.fromCharCode(i)), 64 != r && (l += String.fromCharCode(a));
            return l = Base64._utf8_decode(l)
        },
        _utf8_encode: function(t) {
            t = t.replace(/\r\n/g, "\n");
            for (var e = "", i = 0; i < t.length; i++) {
                var a = t.charCodeAt(i);
                a < 128 ? e += String.fromCharCode(a) : a > 127 && a < 2048 ? (e += String.fromCharCode(a >> 6 | 192), e += String.fromCharCode(63 & a | 128)) : (e += String.fromCharCode(a >> 12 | 224), e += String.fromCharCode(a >> 6 & 63 | 128), e += String.fromCharCode(63 & a | 128))
            }
            return e
        },
        _utf8_decode: function(t) {
            for (var e = "", i = 0, a = 0, n = 0, o = 0; i < t.length;)(a = t.charCodeAt(i)) < 128 ? (e += String.fromCharCode(a), i++) : a > 191 && a < 224 ? (o = t.charCodeAt(i + 1), e += String.fromCharCode((31 & a) << 6 | 63 & o), i += 2) : (o = t.charCodeAt(i + 1), n = t.charCodeAt(i + 2), e += String.fromCharCode((15 & a) << 12 | (63 & o) << 6 | 63 & n), i += 3);
            return e
        }
    },
    LadiPageScriptV2 = LadiPageScriptV2 || function() {};
LadiPageScriptV2.prototype.init = function() {
    this.const = {
        DESKTOP: "desktop",
        MOBILE: "mobile",
        DEVICE: "device",
        DOMAIN_GOOGLE_DOCS: "docs.google.com",
        POWERED_BY_IMAGE: "//s.imgur.com/min/embed.js", 
        STATIC_W_DOMAIN: "w.ladicdn.com",
        STATIC_S_DOMAIN: "s.ladicdn.com",
        APP_RUNTIME_PREFIX: "_runtime",
        SCRIPT_LADI_FONT: "ladi-font",
        SCRIPT_LADI_VARIABLE: "ladi-variable",
        META_VERSION: {
            two: 2
        },
        OPTIMIZE_EXCEPT_EVENT_DATA_KEY_LIST: ["custom_style", "custom_css", "option.form_api_data", "option.spinlucky_setting.list_value"],
        OPTIMIZE_EVENT_DATA_KEY_LIST: ["option.website_list_post_by_category_id", "option.website_list_post_by_tag_id", "device.option.collection_setting.list_type", "scrolling", "seller_name", "seller_content", "seller_like", "form_data", "value", "operator", "form_item_value", "form_item_type", "form_item_type", "conditions", "dataset_id", "sheet_id", "image", "content", "name", "verify", "time", "like", "list", "text_operator_2", "text_operator_1", "text_sort_2", "text_sort_1", "text_description", "total", "star", "star_review", "text_unit", "star_max", "title", "link_mapping", "color", "background_color", "border_color", "opacity", "transform_scale", "custom_css", "dropbox", "padding", "animation_duration", "str", "is_clipboard", "link_mapping_custom", "change_index_type", "change_index_number", "collapse_start_is_show", "lightbox_type", "hidden_ids", "show_ids", "image_url", "video_url", "video_type", "iframe_url", "ontop", "action", "target", "nofollow", "position", "animation_name", "action_type", "background-class", "background-style", "background-image", "background-color", "background-position", "background-repeat", "background-size", "is_multiple_otp", "otp_config_id", "is_multiple", "is_caption", "is_input_label", "mapping_form_id", "next_button_text", "mapping_form_name", "input_name", "input_required", "input_placeholder", "show_label", "input_tabindex", "input_standard", "input_checkbox_type", "product_setting", "ladisale_store_id", "form_account_id", "options", "option.data_formula.is_enable", "option.data_formula.text", "option.meta_data.version", "device.option.carousel_crop.margin_item", "device.option.carousel_setting.display_type", "option.carousel_setting.autoplay_type", "option.only_facebook_widget", "option.sync_ladichat_form_account_id", "option.sync_ladishare_form_account_id", "option.sync_ladiflow_form_account_id", "option.sync_ladisales_form_account_id", "option.spinlucky_setting.list_value", "option.spinlucky_setting.result_popup_id", "option.spinlucky_setting.result_message", "option.spinlucky_setting.max_turn", "option.sheet_id", "option.time_show", "option.time_delay", "option.data_event", "option.action_funnel", "option.data_tooltip.text", "option.data_tooltip.type", "option.data_tooltip.position", "option.data_tooltip.size", "option.conversion_name", "option.google_ads_conversion", "option.google_ads_label", "option.event_custom_script", "option.video_value", "option.video_type", "option.video_control", "option.background_video.video_value", "option.background_video.video_type", "option.show_popup_welcome_page", "option.delay_popup_welcome_page", "option.show_popup_exit_page", "option.popup_welcome_page_scroll_to", "option.countdown_item_type", "option.countdown_type", "option.countdown_minute", "option.countdown_daily_start", "option.countdown_daily_end", "option.countdown_endtime", "option.input_type", "option.input_default_value", "option.input_tabindex", "option.form_config_id", "option.ladisale_store_id", "option.product_tag_id", "option.form_send_ladipage", "option.data_submit_form_id", "option.thankyou_type", "option.thankyou_value", "option.deeplink_value", "option.form_thankyou_funnel", "option.form_api_data", "option.form_conversion_name", "option.form_google_ads_conversion", "option.form_purchase_value", "option.form_google_ads_label", "option.form_event_custom_script", "option.form_auto_funnel", "option.form_captcha", "option.form_auto_complete", "option.form_auto_capture", "option.input_country", "option.is_add_to_cart", "option.is_form_coupon", "option.is_form_login", "option.is_form_otp", "option.is_submit_form", "option.is_buy_now", "option.is_buy_now_ladisales", "option.is_add_to_cart_ladisales", "option.form_account_id", "option.product_type", "option.product_id", "option.product_variant_id", "option.product_mapping_name", "option.product_mapping_name_custom", "option.product_variant", "option.product_variant_type", "option.product_variant_title", "option.product_variant_price", "option.message_no_product", "option.cart_layout", "option.collection_setting.type", "option.data_setting.type", "option.data_setting.type_dataset", "option.data_setting.value", "option.data_setting.sort_name", "option.data_setting.sort_by", "option.combobox_type", "option.survey_setting.is_multiple", "option.survey_setting", "option.form_setting", "option.tabs_setting.current_tab", "option.shape_setting.2nd_click", "option.shape_setting.source_2nd_click", "option.survey_setting.input_name", "option.survey_setting.input_required", "option.sync_ladisales", "option.sync_ladiflow", "option.sync_ladishare", "option.sync_ladichat", "device.option.auto_scroll", "device.option.sticky", "device.option.sticky_position", "device.option.sticky_position_top", "device.option.sticky_position_left", "device.option.sticky_position_bottom", "device.option.sticky_position_right", "device.option.readmore_range", "device.option.gallery_control.autoplay", "device.option.gallery_control.autoplay_time", "device.option.video_autoplay", "device.option.popup_position", "device.option.popup_backdrop", "device.option.carousel_setting.autoplay", "device.option.carousel_setting.autoplay_time", "device.option.carousel_crop.width", "device.option.carousel_crop.width_item", "device.style.animation-name", "device.style.animation-delay", "device.option.collection_setting.row", "device.option.collection_setting.column", "device.option.collection_setting.margin", "device.option.image_setting.2nd_click", "device.option.image_setting.source_2nd_click", "device.option.position", "device.option.shape_setting.source_2nd_click", "device.option.background-style"],
        ACTION_TYPE: {
            menu: "menu",
            action: "action",
            "1st_click": "1st_click",
            "2nd_click": "2nd_click",
            hover: "hover",
            complete: "complete",
            open_popup: "open_popup",
            close_popup: "close_popup"
        },
        DATA_ACTION_TYPE: {
            link: "link",
            page: "page",
            category: "category",
            post: "post",
            section: "section",
            email: "email",
            phone: "phone",
            popup: "popup",
            dropbox: "dropbox",
            hidden_show: "hidden_show",
            collapse: "collapse",
            set_value: "set_value",
            tracking: "tracking",
            custom_script: "custom_script",
            copy_clipboard: "copy_clipboard",
            change_index: "change_index",
            set_style: "set_style",
            set_value_2nd: "set_value_2nd",
            lightbox: "lightbox",
            popup_cart: "popup_cart",
            popup_checkout: "popup_checkout"
        },
        DATA_ACTION_LIGHTBOX_TYPE: {
            image: "image",
            video: "video",
            iframe: "iframe"
        },
        WEBSITE_PATH_DNS: {
            category: "c",
            tag: "t",
            post: "p",
            page: "",
            search: ""
        },
        COUNTDOWN_TYPE: {
            countdown: "countdown",
            daily: "daily",
            endtime: "endtime"
        },
        COUNTDOWN_ITEM_TYPE: {
            day: "day",
            hour: "hour",
            minute: "minute",
            seconds: "seconds"
        },
        CAROUSEL_DISPLAY_TYPE: {
            vertical: "vertical",
            horizontal: "horizontal"
        },
        CAROUSEL_INDICATORS_TYPE_TYPE: {
            none: "none",
            circle: "circle",
            number: "number"
        },
        CAROUSEL_AUTOPLAY_TYPE: {
            type_ab: "type_ab",
            type_abab: "type_abab",
            type_abba: "type_abba"
        },
        VIDEO_TYPE: {
            youtube: "youtube",
            direct: "direct"
        },
        BACKGROUND_STYLE: {
            solid: "solid",
            gradient: "gradient",
            image: "image",
            video: "video"
        },
        PUBLISH_PLATFORM: {
            ladipage: "LADIPAGE",
            ladipagedns: "LADIPAGEDNS",
            wordpress: "WORDPRESS",
            haravan: "HARAVAN",
            sapo: "SAPO",
            shopify: "SHOPIFY",
            itop: "ITOPWEBSITE",
            ftp: "FTP",
            other: "OTHER"
        },
        SECTION_TYPE: {
            default: "DEFAULT",
            global: "GLOBAL"
        },
        TRACKING_NAME: "ladicid",
        ACCESS_KEY_NAME: "ladiack",
        LADIFLOW_DATA_KEY_NAME: "ladifd",
        REF_NAME: "ref",
        OTP_TYPE: {
            send: "OTP_SEND",
            resend: "OTP_RESEND",
            sms: "OTP_SMS",
            voice: "OTP_VOICE",
            zns: "OTP_ZNS"
        },
        STATUS_SEND: {
            capture: 1,
            otp: 1,
            sendform: 2
        },
        PUBLISH_STYLE: {
            desktop_min_width: 768,
            mobile_small_min_width: 320
        },
        ANIMATED_LIST: ["rotate-1", "rotate-2", "rotate-3", "type", "scale", "loading-bar", "slide", "clip", "zoom", "push"],
        POSITION_TYPE: {
            default: "default",
            top: "top",
            bottom: "bottom",
            top_left: "top_left",
            top_center: "top_center",
            top_right: "top_right",
            center_left: "center_left",
            center_right: "center_right",
            bottom_left: "bottom_left",
            bottom_center: "bottom_center",
            bottom_right: "bottom_right"
        },
        COLLECTION_TYPE: {
            carousel: "carousel",
            readmore: "readmore"
        },
        COLLECTION_LIST_TYPE: {
            horizontal: "horizontal",
            vertical: "vertical"
        },
        INPUT_TYPE: {
            tel: "tel",
            password: "password",
            text: "text",
            date: "date",
            select_multiple: "select_multiple",
            number: "number",
            email: "email",
            textarea: "textarea",
            select: "select",
            radio: "radio",
            checkbox: "checkbox",
            facebook_checkbox_plugin_transactional: "facebook_checkbox_plugin_transactional",
            facebook_checkbox_plugin_promotional: "facebook_checkbox_plugin_promotional",
            file: "file",
            image_choices: "image_choices",
            product_variant: "product_variant"
        },
        CONTENT_TYPE: {
            form_data: "FORM_DATA",
            form_urlencoded: "X_WWW_FORM_URLENCODED",
            json: "JSON"
        },
        SORT_BY_TYPE: {
            asc: "asc",
            desc: "desc"
        },
        PRODUCT_VARIANT_TYPE: {
            combined: "combined",
            combobox: "combobox",
            label: "label"
        },
        PRODUCT_VARIANT_OPTION_TYPE: {
            color: 1,
            image: 2
        },
        PRODUCT_VARIANT_TITLE: {
            left: "left",
            top: "top"
        },
        FORM_THANKYOU_TYPE: {
            default: "default",
            url: "url",
            popup: "popup"
        },
        GAME_RESULT_TYPE: {
            default: "default",
            popup: "popup"
        },
        PERCENT_TRACKING_SCROLL: [0, 25, 50, 75, 100],
        TIME_ONPAGE_TRACKING: [10, 30, 60, 120, 180, 300, 600],
        FORM_CONFIG_TYPE: {
            email: "EMAIL",
            mail_chimp: "MAIL_CHIMP",
            infusion_soft: "INFUSION_SOFT",
            infusion_soft_ladi: "INFUSION_SOFT_LADI",
            active_campaign: "ACTIVE_CAMPAIGN",
            sendgrid: "SENDGRID",
            hubspot: "HUBSPOT",
            smtp: "SMTP",
            esms: "ESMS",
            get_response: "GET_RESPONSE",
            convertkit: "CONVERTKIT",
            ladiflow: "LADIFLOW",
            telegram: "TELEGRAM",
            slack: "SLACK",
            zalo_zns: "ZALO_ZNS",
            mautic: "MAUTIC",
            google_sheet: "GOOGLE_SHEET",
            google_form: "GOOGLE_FORM",
            custom_api: "CUSTOM_API",
            ladisales: "LADISALES",
            ladishare: "LADISHARE",
            haravan: "HARAVAN",
            sapo: "SAPO",
            shopify: "SHOPIFY",
            nhanh_vn: "NHANH_VN",
            google_recaptcha: "GOOGLE_RECAPTCHA",
            google_recaptcha_checkbox: "GOOGLE_RECAPTCHA_CHECKBOX",
            google_recaptcha_enterprise: "GOOGLE_RECAPTCHA_ENTERPRISE",
            google_places_autocomplete: "GOOGLE_PLACES_AUTOCOMPLETE",
            kiotviet: "KIOTVIET",
            wordpress: "WORDPRESS",
            metu: "METU",
            ladichat: "LADICHAT",
            shopping: "SHOPPING",
            blog: "BLOG",
            conversion_api: "CONVERSION_API",
            tiktok_conversion_api: "TIKTOK_CONVERSION_API",
            popupx: "POPUPX"
        },
        FORM_UPLOAD_FILE_LENGTH: 20,
        FORM_UPLOAD_FILE_SIZE: 25,
        CART_LAYOUT: {
            editable: "editable",
            viewonly: "viewonly"
        },
        WIDTH_SECTION_RESIZE: {},
        RESIZE_ADD_PIXEL: 300,
        RESIZE_ADD_PIXEL_THUMB: 50,
        RESIZE_RANGE: 50,
        TOOLTIP_TYPE: {
            default: "default",
            info: "info",
            success: "success",
            error: "error",
            notice: "notice"
        },
        TOOLTIP_POSITION: {
            top_left: "top_left",
            top_middle: "top_middle",
            top_right: "top_right",
            bottom_left: "bottom_left",
            bottom_middle: "bottom_middle",
            bottom_right: "bottom_right",
            left_top: "left_top",
            left_middle: "left_middle",
            left_bottom: "left_bottom",
            right_top: "right_top",
            right_middle: "right_middle",
            right_bottom: "right_bottom"
        },
        TOOLTIP_SIZE: {
            small: "small",
            medium: "medium",
            big: "big"
        },
        OPTION_OTHER_KEY: "LADIPAGE_OTHER",
        STORY_PAGE: {
            horizontal: "horizontal",
            vertical: "vertical",
            none: "none"
        },
        COMBOBOX_TYPE: {
            delivery_method: "delivery_method"
        },
        PRODUCT_TYPE: {
            event: "Event",
            service: "Service",
            physical: "Physical",
            digital: "Digital",
            f_b: "F_B",
            combo: "COMBO",
            course: "Course"
        }
    }, this.runtime = {
        backdrop_popup_id: "backdrop-popup",
        backdrop_dropbox_id: "backdrop-dropbox",
        lightbox_screen_id: "lightbox-screen",
        builder_section_popup_id: "SECTION_POPUP",
        builder_section_background_id: "BODY_BACKGROUND",
        builder_popup_menu_mobile_id: "POPUP_MENU_MOBILE",
        ladipage_powered_by_classname: "ladipage_powered_by",
        current_element_mouse_down_image_compare: null,
        current_element_mouse_down_image_compare_position_x: 0,
        mouse_down_diff_touch_action: 10,
        current_element_mouse_down_carousel: null,
        current_element_mouse_down_carousel_position_x: 0,
        current_element_mouse_down_carousel_position_y: 0,
        current_element_mouse_down_carousel_diff: 40,
        current_element_mouse_down_gallery_control: null,
        current_element_mouse_down_gallery_control_time: 0,
        current_element_mouse_down_gallery_control_time_click: 300,
        current_element_mouse_down_gallery_control_position_x: 0,
        current_element_mouse_down_gallery_view: null,
        current_element_mouse_down_gallery_view_position_x: 0,
        current_element_mouse_down_gallery_view_position_y: 0,
        current_element_mouse_down_gallery_view_diff: 40,
        country_state_sort: {
            VN: ["201", "202", "224", "220", "203"]
        },
        location_state_sort: {
            VN: ["HN", "SG", "HP", "CT", "DN"]
        },
        scroll_show_popup: {},
        scroll_depth: [],
        scroll_to_section: {},
        send_request_response: {},
        is_mobile_only: !1,
        interval_countdown: null,
        interval_gallery: null,
        timeout_gallery: {},
        interval_carousel: null,
        count_click_dom: {},
        timenext_carousel: {},
        time_click_dom: {},
        time_click: 300,
        time_otp: 6e4,
        time_delay_click_button: 300,
        isGenerateHtml: !1,
        isClient: !1,
        isDesktop: !0,
        isBrowserDesktop: !0,
        isIE: !1,
        isLoadHtmlGlobal: !1,
        isYouTubeIframeAPIReady: !1,
        isLoadYouTubeIframeAPI: !1,
        isVideoButtonUnmute: !0,
        device: this.const.DESKTOP,
        ladipage_id: null,
        func_get_code_otp: {},
        list_scroll_func: {},
        list_loaded_func: [],
        list_show_popup_func: {},
        list_youtube_ready_exec: [],
        list_scrolling_exec: {},
        list_scrolled_exec: {},
        list_lightbox_id: {},
        list_set_value_name_country: ["ward", "district", "state", "country"],
        tmp: {},
        tabindexForm: 0,
        eventData: {},
        eventDataGlobal: {},
        timenow: 0,
        widthScrollBar: 0,
        replaceStr: {},
        replacePrefixStart: "{{",
        replacePrefixEnd: "}}",
        replaceNewPrefixStart: "!::",
        replaceNewPrefixEnd: "::!"
    }, this.const.WIDTH_SECTION_RESIZE[this.const.DESKTOP] = 1440, this.const.WIDTH_SECTION_RESIZE[this.const.MOBILE] = 768
}, "undefined" != typeof window && ["isObject", "isArray", "isFunction", "isBoolean", "isString", "isEmpty", "isNull"].forEach(function(t) {
    LadiPageScriptV2.prototype[t] = function(e) {
        return window[t + "LadiPage"](e)
    }
}), LadiPageScriptV2.prototype.copy = function(t) {
    if ("[object Object]" == Object.prototype.toString.call(t)) {
        var e = {};
        return Object.keys(t).forEach(i => {
            e[i] = this.copy(t[i])
        }), e
    }
    if ("[object Array]" == Object.prototype.toString.call(t)) {
        var i = [];
        return t.forEach(t => {
            i.push(this.copy(t))
        }), i
    }
    return t
};
var LadiPageScript = LadiPageScript || new LadiPageScriptV2;
LadiPageScript.init();
var LadiFormulaData = {},
    LadiFormApi = LadiFormApi || {},
    LadiPageCommand = LadiPageCommand || [],
    LadiPageLocation = LadiPageLocation || [],
    LadiPageShopping = LadiPageShopping || [],
    LadiPageFormData = LadiPageFormData || [],
    LadiPageQueueCommandList = LadiPageQueueCommandList || [],
    LadiPageQueueCommand = {
        push: function(t, e) {
            isFunctionLadiPage(t) && isFunctionLadiPage(e) && (t() ? e() : LadiPageQueueCommandList.push({
                callback1: t,
                callback2: e
            }))
        }
    };
LadiPageScriptV2.prototype.convertEventDataDevice = function(t, e) {
    var i = this;
    if (isObjectLadiPage(e)) {
        var a = null,
            n = null;
        Object.keys(e).forEach(function(o) {
            o.toLowerCase().startsWith(i.const.DEVICE) && (a = i.const.DESKTOP + o.substring(i.const.DEVICE.length), n = i.const.MOBILE + o.substring(i.const.DEVICE.length), e[a] = e[o], e[n] = e[o], delete e[o]), t && o.toLowerCase().startsWith(i.const.DESKTOP) && (n = i.const.MOBILE + o.substring(i.const.DESKTOP.length), e[n] = e[o]), !t && o.toLowerCase().startsWith(i.const.MOBILE) && (a = i.const.DESKTOP + o.substring(i.const.MOBILE.length), e[a] = e[o])
        })
    }
    return e
}, LadiPageScriptV2.prototype.loadHtmlGlobal = function(t, e) {
    for (var i = this, a = 0, n = [], o = document.querySelectorAll(".ladi-section[data-global-id]"), r = 0; r < o.length; r++) {
        var l = o[r],
            d = l.getAttribute("data-global-id");
        isEmptyLadiPage(d) || n.push({
            id: l.id,
            data_global_id: d
        })
    }
    var s = function(o) {
            isObjectLadiPage(o) && Object.keys(o).forEach(function(t) {
                i.runtime.eventDataGlobal[t] = o[t]
            });
            a == n.length && (c(), u(), p(), i.runtime.isLoadHtmlGlobal = !0, i.run(t, e))
        },
        c = function() {
            i.runtime.shopping || 0 != document.querySelectorAll('div.ladi-section-global[data-shopping="true"]').length && (i.runtime.shopping = !0)
        },
        u = function() {
            i.runtime.formdata || 0 != document.querySelectorAll('div.ladi-section-global[data-formdata="true"]').length && (i.runtime.formdata = !0)
        },
        p = function() {
            for (var t = [], e = document.querySelectorAll("div.ladi-section-global[data-country-file]"), a = 0; a < e.length; a++) {
                var n = e[a].getAttribute("data-country-file");
                isEmptyLadiPage(n) || (n = (n = n.split(";")).removeSpace(), t = t.concat(n))
            }
            i.runtime.list_country = i.runtime.list_country || [];
            var o = (t = t.unique()).except(i.runtime.list_country);
            i.runtime.list_country = i.runtime.list_country.concat(o), o.length > 0 && i.runtime.hasOwnProperty("cdn_url") && i.runtime.hasOwnProperty("version") && o.forEach(function(t) {
                var e = i.runtime.cdn_url + t + ".js?v=" + i.runtime.version;
                i.loadScript(e, {
                    defer: !0
                }, null, function(t) {
                    i.runAfterLocation()
                })
            })
        };
    n.forEach(function(t) {
        var e = t.id,
            n = document.getElementById(e),
            o = i.const.API_SECTION_GLOBAL_HTML.format(i.runtime.store_id, t.data_global_id);
        i.sendRequest("GET", o, null, !0, null, function(o, r, l) {
            if (l.readyState == XMLHttpRequest.DONE) {
                var d = document.createElement("div");
                if (d.innerHTML = o, isEmptyLadiPage(d.querySelector('div.ladi-section-global[data-id="' + t.id + '"] .ladi-section[data-global-id="' + t.data_global_id + '"]'))) try {
                    n.parentElement.removeChild(n)
                } catch (t) {} else {
                    var c = i.findAncestor(n, "ladi-section-global");
                    isEmptyLadiPage(c) || (n = c);
                    var u = function(t, e) {
                        var i = d.querySelector("style#" + t);
                        isEmptyLadiPage(i) || i.parentElement.removeChild(i), i = d.querySelector("style#" + e), isEmptyLadiPage(i) || i.removeAttribute("media")
                    };
                    i.runtime.is_mobile_only || i.runtime.is_adaptive_design && i.runtime.adaptive_design_is_mobile ? u("style_section_global_desktop", "style_section_global_mobile") : i.runtime.is_adaptive_design && !i.runtime.adaptive_design_is_mobile && u("style_section_global_mobile", "style_section_global_desktop"), d = function(t) {
                        return isFunctionLadiPage(window.lazyload_run) && (t = window.lazyload_run(t, !1, !1)), t.innerHTML
                    }(d);
                    try {
                        var p = document.createRange().createContextualFragment(d);
                        n.parentElement.replaceChild(p, n)
                    } catch (t) {
                        n.outerHTML = d
                    }
                }! function(t) {
                    a++;
                    var e = document.querySelector('.ladi-section-global[data-id="' + t + '"] > script');
                    if (isEmptyLadiPage(e)) s();
                    else {
                        var n = null;
                        try {
                            n = JSON.parse(e.innerHTML), Object.keys(n).forEach(function(t) {
                                n[t] = i.deOptimizeEventData(i.copy(n[t]), i.const.OPTIMIZE_EVENT_DATA_KEY_LIST, "OPTIMIZE_EVENT_DATA_KEY_LIST"), n[t] = i.decodeValue(n[t])
                            })
                        } catch (t) {}
                        e.parentElement.removeChild(e), s(n)
                    }
                }(e)
            }
        })
    }), s()
}, LadiPageScriptV2.prototype.checkHover = function() {
    var t = "ladi_check_hover",
        e = document.getElementById(t);
    return isEmptyLadiPage(e) && ((e = document.createElement("div")).id = t, e.className = "ladi-check-hover", e.style.setProperty("display", "none", "important"), document.body.appendChild(e)), 0 == getComputedStyle(e).opacity
}, LadiPageScriptV2.prototype.setLadiVariable = function() {
    for (var t = document.querySelectorAll("script." + this.const.SCRIPT_LADI_VARIABLE), e = 0; e < t.length; e++) try {
        for (var i = JSON.parse(t[e].innerHTML), a = Object.keys(i), n = 0; n < a.length; n++) {
            var o = a[n];
            this.setDataReplaceStr(o, i[o])
        }
    } catch (t) {}
}, LadiPageScriptV2.prototype.getOptimizeSourceKey = function(t) {
    var e = {};
    t = (t = this.copy(t)).reverse();
    for (var i = [], a = "a".charCodeAt(); a < "z".charCodeAt(); a++) i.push(String.fromCharCode(a));
    for (var n = "A".charCodeAt(); n < "Z".charCodeAt(); n++) i.push(String.fromCharCode(n));
    for (a = "a".charCodeAt(); a < "z".charCodeAt(); a++) {
        for (n = "a".charCodeAt(); n < "z".charCodeAt(); n++) i.push(String.fromCharCode(a) + String.fromCharCode(n));
        for (n = "A".charCodeAt(); n < "Z".charCodeAt(); n++) i.push(String.fromCharCode(a) + String.fromCharCode(n))
    }
    for (a = "A".charCodeAt(); a < "Z".charCodeAt(); a++) {
        for (n = "a".charCodeAt(); n < "z".charCodeAt(); n++) i.push(String.fromCharCode(a) + String.fromCharCode(n));
        for (n = "A".charCodeAt(); n < "Z".charCodeAt(); n++) i.push(String.fromCharCode(a) + String.fromCharCode(n))
    }
    var o = 0;
    return t.forEach(function(t) {
        var a = i[o % i.length],
            n = Math.floor(o / i.length);
        n > 0 && (a += n), e[t] = a, o++
    }), e
}, LadiPageScriptV2.prototype.optimizeEventData = function(t, e, i) {
    var a = this,
        n = a.runtime.tmp["DATA_O_" + i];
    if (isArrayLadiPage(e) && isNullLadiPage(n)) {
        var o = [];
        "OPTIMIZE_EVENT_DATA_KEY_LIST" == i ? (e.forEach(function(t) {
            o.push(t), t.startsWith(a.const.DEVICE + ".") && (o.push(a.const.DESKTOP + t.substring(a.const.DEVICE.length)), o.push(a.const.MOBILE + t.substring(a.const.DEVICE.length)))
        }), o.push("type")) : o = e, n = a.getOptimizeSourceKey(o), a.runtime.tmp["DATA_O_" + i] = n
    }
    isObjectLadiPage(t) && Object.keys(t).forEach(function(e) {
        -1 == a.const.OPTIMIZE_EXCEPT_EVENT_DATA_KEY_LIST.indexOf(e) ? isNullLadiPage(n[e]) ? t[e] = a.optimizeEventData(t[e], null, i) : (t[n[e]] = a.optimizeEventData(t[e], null, i), delete t[e]) : isNullLadiPage(n[e]) || (t[n[e]] = t[e], delete t[e])
    });
    return isArrayLadiPage(t) && t.forEach(function(e, n) {
        t[n] = a.optimizeEventData(e, null, i)
    }), t
}, LadiPageScriptV2.prototype.deOptimizeEventData = function(t, e, i) {
    var a = this,
        n = a.runtime.tmp["DATA_D_" + i];
    if (isArrayLadiPage(e) && isNullLadiPage(n)) {
        n = {}, a.optimizeEventData(null, e, i);
        var o = a.runtime.tmp["DATA_O_" + i];
        Object.keys(o).forEach(function(t) {
            n[o[t]] = t
        }), a.runtime.tmp["DATA_D_" + i] = n
    }
    return isObjectLadiPage(t) && Object.keys(t).forEach(function(e) {
        -1 == a.const.OPTIMIZE_EXCEPT_EVENT_DATA_KEY_LIST.indexOf(e) ? isNullLadiPage(n[e]) ? t[e] = a.deOptimizeEventData(t[e], null, i) : (t[n[e]] = a.deOptimizeEventData(t[e], null, i), delete t[e]) : isNullLadiPage(n[e]) || (t[n[e]] = t[e], delete t[e])
    }), isArrayLadiPage(t) && t.forEach(function(e, n) {
        t[n] = a.deOptimizeEventData(e, null, i)
    }), t
}, LadiPageScriptV2.prototype.postMessageWindow = function(t, e, i) {
    t.postMessage(JSON.stringify(e), i)
}, LadiPageScriptV2.prototype.updateHeightElement = function(t, e, i, a, n, o) {
    var r = this;
    if (a != n) {
        var l = "style_update_height_element",
            d = !0;
        if ("fixed" == getComputedStyle(e).position && (d = !1), t) {
            r.runtime.tmp.dimension_element_new = {};
            var s = "#" + r.runtime.builder_section_popup_id + " > .ladi-container > .ladi-element { max-height: none !important;}";
            r.createStyleElement(l, s)
        }
        for (var c, u, p = function(t, i) {
                return t.id == e.id && "height" == i ? n : isEmptyLadiPage(r.runtime.tmp.dimension_element_new[t.id + i]) ? parseFloatLadiPage(getComputedStyle(t)[i]) || 0 : r.runtime.tmp.dimension_element_new[t.id + i]
            }, m = function(t, e, i) {
                var a = p(t, e) + i;
                if (o) {
                    var n = "transition-parent-collapse-" + e;
                    t.classList.add(n);
                    var l = 1e3 * parseFloatLadiPage(getComputedStyle(t).transitionDuration);
                    r.runTimeout(function() {
                        t.classList.remove(n)
                    }, l)
                }
                t.style.setProperty(e, a + "px"), r.runtime.tmp.dimension_element_new[t.id + e] = a
            }, g = function(t) {
                for (var e = [], i = 0; i < t.parentElement.children.length; i++)(t.parentElement.children[i].classList.contains("ladi-element") || t.parentElement.children[i].classList.contains("ladi-section")) && e.push(t.parentElement.children[i]);
                return e
            }, _ = n - a, y = p(e, "top") + a, f = g(e), v = 0; v < f.length; v++) {
            var h = f[v];
            h.id != e.id && (p(h, "top") >= y && m(h, "top", _))
        }
        if (!isEmptyLadiPage(i) && i.id != r.runtime.builder_section_popup_id) {
            var P = p(i, "height"),
                L = function() {
                    for (var t = 0, i = g(e), a = 0; a < i.length; a++) {
                        var n = i[a];
                        if ("none" != getComputedStyle(n).display && 0 != p(n, "height")) {
                            var o = p(n, "top") + p(n, "height");
                            o > t && (t = o)
                        }
                    }
                    return t
                }();
            if ((i.classList.contains("ladi-section") || i.getElementsByClassName("ladi-popup").length > 0) && (L = P + _), m(i, "height", L - P), d) {
                var E = (c = i, u = r.findAncestor(c.parentElement, "ladi-element"), isEmptyLadiPage(u) && (u = r.findAncestor(c.parentElement, "ladi-section")), u);
                this.updateHeightElement(!1, i, E, P, L, o)
            }
        }
        if (t) {
            if (this.runtime.tmp.is_loaded_func_done) {
                var A = document.getElementById(l);
                isEmptyLadiPage(A) || A.parentElement.removeChild(A)
            }
            delete r.runtime.tmp.dimension_element_new, r.runtime.tmp.is_window_resize || r.fireEvent(window, "resize", {
                set_viewport: !1
            })
        }
    }
}, LadiPageScriptV2.prototype.showParentVisibility = function(t, e) {
    var i = this.findAncestor(t, "ladi-popup");
    if (!isEmptyLadiPage(i) && (i = this.findAncestor(i, "ladi-element"), !isEmptyLadiPage(i))) return "none" == getComputedStyle(i).display && i.classList.add("hide-visibility"), isFunctionLadiPage(e) && e(), void i.classList.remove("hide-visibility");
    isFunctionLadiPage(e) && e()
}, LadiPageScriptV2.prototype.pauseAllVideo = function(t) {
    var e = document.getElementById(this.runtime.lightbox_screen_id).getElementsByClassName("lightbox-close")[0];
    if (!isEmptyLadiPage(e)) return e.click(), this.pauseAllVideo(t);
    delete this.runtime.tmp.gallery_playing_video;
    for (var i = (t = t || document).querySelectorAll(".iframe-video-preload:not(.no-pause)"), a = 0; a < i.length; a++) this.runEventReplayVideo(i[a].id, i[a].getAttribute("data-video-type"), !1)
}, LadiPageScriptV2.prototype.runEventReplayVideo = function(t, e, i) {
    var a = this,
        n = document.getElementById(t),
        o = null;
    if (!isEmptyLadiPage(n)) {
        var r = document.getElementById(t + "_button_unmute"),
            l = isEmptyLadiPage(r);
        if (e == a.const.VIDEO_TYPE.youtube) {
            o = i ? "playVideo" : "pauseVideo";
            var d = !1;
            if (a.runtime.isYouTubeIframeAPIReady) {
                var s = window.YT.get(t);
                if (!isEmptyLadiPage(s)) {
                    if (l && i && isFunctionLadiPage(s.unMute) && s.unMute(), !l && i && isFunctionLadiPage(s.mute) && s.mute(), !isFunctionLadiPage(s[o])) return void a.runTimeout(function() {
                        a.runEventReplayVideo(t, e, i)
                    }, 100);
                    s[o](), d = !0
                }
            }
            d || (l && i && a.postMessageWindow(n.contentWindow, {
                event: "command",
                func: "unMute",
                args: []
            }, "*"), !l && i && a.postMessageWindow(n.contentWindow, {
                event: "command",
                func: "mute",
                args: []
            }, "*"), a.postMessageWindow(n.contentWindow, {
                event: "command",
                func: o,
                args: []
            }, "*"))
        }
        e == a.const.VIDEO_TYPE.direct && (o = i ? "play" : "pause", l && i && (n.muted = !1), !l && i && (n.muted = !0), isFunctionLadiPage(n[o]) && n[o]()), i ? (n.classList.remove("ladi-hidden"), isEmptyLadiPage(r) || r.style.removeProperty("display")) : (n.classList.add("ladi-hidden"), isEmptyLadiPage(r) || r.style.setProperty("display", "none"))
    }
}, LadiPageScriptV2.prototype.runEventPlayVideo = function(t, e, i, a, n, o, r, l, d, s) {
    var c = this,
        u = c.runtime.isVideoButtonUnmute;
    (c.runtime.isDesktop || r || l || n || a) && (u = !1);
    var p = function(t, i) {
            if (u && !t.hasAttribute("data-remove-button-unmute")) {
                var a = t.id + "_button_unmute",
                    n = document.getElementById(a);
                isEmptyLadiPage(n) && ((n = document.createElement("div")).id = a, n.innerHTML = "<div></div>", n.className = "button-unmute ladi-hidden", n.addEventListener("click", function(i) {
                    if (i.stopPropagation(), t = document.getElementById(t.id), e == c.const.VIDEO_TYPE.youtube) {
                        var a = !1;
                        if (c.runtime.isYouTubeIframeAPIReady) {
                            var o = window.YT.get(t.id);
                            !isEmptyLadiPage(o) && isFunctionLadiPage(o.unMute) && (o.unMute(), a = !0)
                        }
                        a || c.postMessageWindow(t.contentWindow, {
                            event: "command",
                            func: "unMute",
                            args: []
                        }, "*")
                    }
                    e == c.const.VIDEO_TYPE.direct && (t.muted = !1), n.parentElement.removeChild(n), t.setAttribute("data-remove-button-unmute", !0)
                }), t.parentElement.appendChild(n)), i && n.classList.remove("ladi-hidden");
                var o = c.findAncestor(t, "lightbox-screen");
                isEmptyLadiPage(o) || (n.style.setProperty("width", getComputedStyle(t).width), n.style.setProperty("height", getComputedStyle(t).height))
            }
        },
        m = document.getElementById(t);
    if (!isEmptyLadiPage(m)) {
        var g = c.findAncestor(m, "ladi-video");
        isEmptyLadiPage(g) || (g = c.findAncestor(g, "ladi-element")), !a || o || isEmptyLadiPage(g) || (g.classList.add("pointer-events-none"), m.classList.add("no-pause")), r && m.classList.add("ladi-hidden");
        var _ = "";
        if (!isEmptyLadiPage(g)) {
            var y = g.getElementsByClassName("ladi-video-background")[0];
            if (!isEmptyLadiPage(y)) {
                var f = getComputedStyle(y).backgroundImage;
                f.toLowerCase().startsWith('url("') && f.toLowerCase().endsWith('")') && (f = (f = f.substr('url("'.length)).substr(0, f.length - '")'.length), isEmptyLadiPage(f) || (_ = f))
            }
        }
        if (e == c.const.VIDEO_TYPE.youtube) {
            var v = c.getVideoId(e, i),
                h = function() {
                    try {
                        if (c.runtime.isLoadYouTubeIframeAPI && c.runtime.isYouTubeIframeAPIReady || !isObjectLadiPage(window.YT) || !isFunctionLadiPage(window.YT.Player) || (c.runtime.isLoadYouTubeIframeAPI = !0, c.runtime.isYouTubeIframeAPIReady = !0), c.runtime.isLoadYouTubeIframeAPI || (c.runtime.isLoadYouTubeIframeAPI = !0, window.onYouTubeIframeAPIReady = function() {
                                c.runtime.isYouTubeIframeAPIReady = !0;
                                for (; c.runtime.list_youtube_ready_exec.length > 0;) c.runtime.list_youtube_ready_exec.shift()()
                            }, c.loadScript("https://www.youtube.com/iframe_api")), !c.runtime.isYouTubeIframeAPIReady) return void c.runtime.list_youtube_ready_exec.push(h);
                        m.outerHTML = m.outerHTML.replaceAll("<iframe", "<div").replaceAll("</iframe>", "</div>"), m = document.getElementById(t), n && m.classList.add("opacity-0");
                        var e = function() {
                                n && (m = document.getElementById(t)).classList.remove("opacity-0")
                            },
                            i = e,
                            g = function(e) {
                                m = document.getElementById(t);
                                var i = window.YT.get(t);
                                isEmptyLadiPage(i) || isEmptyLadiPage(m) ? c.runTimeout(g, 100) : (c.runResizeAll(), a || u ? i.mute() : i.unMute(), r || l || i.playVideo(), isFunctionLadiPage(s) && s(), p(m))
                            };
                        new window.YT.Player(t, {
                            videoId: v,
                            playerVars: {
                                rel: 0,
                                modestbranding: 0,
                                playsinline: n || a || d || u ? 1 : 0,
                                controls: !n && o ? 1 : 0
                            },
                            events: {
                                onReady: g,
                                onStateChange: function(i) {
                                    if (i.data == window.YT.PlayerState.PLAYING) {
                                        if (m = document.getElementById(t), n) {
                                            var a = function() {
                                                window.YT.get(t).getCurrentTime() >= .1 ? e() : c.runTimeout(a, 100)
                                            };
                                            a()
                                        }
                                        p(m, !0);
                                        var o = document.getElementById(t + "_button_unmute");
                                        isEmptyLadiPage(o) || window.YT.get(t).mute()
                                    }
                                    i.data == window.YT.PlayerState.ENDED && window.YT.get(t).playVideo()
                                },
                                onError: i
                            }
                        })
                    } catch (t) {}
                };
            h()
        }
        if (e == c.const.VIDEO_TYPE.direct) {
            isEmptyLadiPage(_) || m.setAttribute("poster", _), m.setAttribute("preload", "auto"), m.setAttribute("controlslist", "nodownload"), m.setAttribute("loop", ""), r || l || m.setAttribute("autoplay", ""), (n || a || d || u) && (m.setAttribute("playsinline", ""), m.setAttribute("webkit-playsinline", "")), !n && o && m.setAttribute("controls", ""), a || u ? m.setAttribute("muted", "") : m.removeAttribute("muted"), n && m.classList.add("opacity-0");
            var P = function() {
                n && (m = document.getElementById(t)).classList.remove("opacity-0")
            };
            m.removeAttribute("src"), m.setAttribute("data-src", i), m.outerHTML = m.outerHTML.replaceAll("data-src=", "src="), m = document.getElementById(t), isFunctionLadiPage(s) && s(m), m.addEventListener("loadedmetadata", function(t) {
                p(m)
            }), m.addEventListener("error", P), m.addEventListener("playing", function(t) {
                if (n) {
                    var e = function() {
                        m.currentTime >= .1 ? P() : c.runTimeout(e, 100)
                    };
                    e()
                }
                p(m, !0);
                var i = document.getElementById(m.id + "_button_unmute");
                isEmptyLadiPage(i) || (m.muted = !0)
            })
        }
    }
}, LadiPageScriptV2.prototype.playVideo = function(t, e, i, a, n, o) {
    var r = document.getElementById(t);
    if (!isEmptyLadiPage(r)) {
        var l = document.getElementById(t + "_player");
        if (o || n || this.pauseAllVideo(), isEmptyLadiPage(l)) {
            var d = r.getElementsByClassName("ladi-video")[0],
                s = t + "_player";
            e == this.const.VIDEO_TYPE.youtube && (d.innerHTML = d.innerHTML + '<iframe id="' + s + '" class="iframe-video-preload" data-video-type="' + e + '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', this.runEventPlayVideo(s, e, i, n, !1, a, o)), e == this.const.VIDEO_TYPE.direct && (d.innerHTML = d.innerHTML + '<video id="' + s + '" class="iframe-video-preload" data-video-type="' + e + '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; object-fit: cover;"></video>', this.runEventPlayVideo(s, e, i, n, !1, a, o))
        } else this.runEventReplayVideo(l.id, e, !0)
    }
}, LadiPageScriptV2.prototype.checkResizeImage = function(t) {
    var e = [".jpg", ".jpeg", ".png"],
        i = function(t) {
            for (var i = !1, a = 0; a < e.length; a++)
                if (t.endsWith(e[a])) {
                    i = !0;
                    break
                } return i
        };
    if (!i(t.toLowerCase())) {
        var a = this.getElementAHref(t, !0);
        return a.search = "", i(a.href)
    }
    return !0
}, LadiPageScriptV2.prototype.getOptimizeImage = function(t, e, i, a, n, o, r) {
    if (isEmptyLadiPage(t) || !isStringLadiPage(t)) return t;
    var l = t.split("/"),
        d = l.indexOf("");
    if (-1 != d && l.length > d + 1 && (l[d + 1] = l[d + 1].toLowerCase()), d = l.indexOf(this.const.STATIC_W_DOMAIN.toLowerCase()), this.checkResizeImage(t) && -1 != d && (l.length == d + 3 || l.length == d + 6 && "ls" == l[3] && "product" == l[5] || l.length == d + 4 && "luid" == l[3] && "avatar" == l[4] || l.length == d + 4 && "rbg" == l[4])) {
        var s = l[d + 1].toLowerCase(),
            c = !0;
        if (s.startsWith("s")) {
            var u = s.split("x");
            2 == u.length && parseFloatLadiPage(u[1]) == u[1] && (c = !1)
        }
        if (c) {
            if (r || n) {
                if (e = parseInt(e) || 0, i = parseInt(i) || 0, a) {
                    var p = this.const.RESIZE_RANGE + (o ? this.const.RESIZE_ADD_PIXEL_THUMB : this.const.RESIZE_ADD_PIXEL);
                    (e <= 0 || i <= 0) && (p *= 2), e = e - e % this.const.RESIZE_RANGE + p, i = i - i % this.const.RESIZE_RANGE + p
                }
            } else e = this.const.WIDTH_SECTION_RESIZE[LadiPage.data.device_screen], i = this.const.WIDTH_SECTION_RESIZE[LadiPage.data.device_screen];
            l.insert(d + 1, "s" + e + "x" + i)
        }
    }
    return t = l.join("/")
}, LadiPageScriptV2.prototype.historyReplaceState = function(t) {
    try {
        window.history.replaceState(null, null, t)
    } catch (t) {}
}, LadiPageScriptV2.prototype.resetViewport = function() {}, LadiPageScriptV2.prototype.runStoryPage = function() {
    var t = this,
        e = t.runtime.story_page;
    if (isObjectLadiPage(e)) {
        var i = document.getElementsByClassName("ladi-wraper")[0];
        if (!isEmptyLadiPage(i)) {
            var a = document.getElementsByClassName("ladi-story-page-progress-bar")[0];
            isEmptyLadiPage(a) || a.parentElement.removeChild(a);
            var n = document.querySelectorAll('.ladi-section:not([id="' + this.runtime.builder_section_popup_id + '"]):not([id="' + this.runtime.builder_section_background_id + '"])');
            if (0 != n.length) {
                (a = document.createElement("div")).className = "ladi-story-page-progress-bar";
                for (var o = null, r = (n[0], function(e, i) {
                        e.addEventListener("click", function(e) {
                            e.stopPropagation(), t.removeTimeout(t.runtime.tmp.story_page_next_timeout_id), window.ladi(i.id, i).scroll()
                        })
                    }), l = 0; l < n.length; l++) {
                    var d = document.createElement("div");
                    d.className = "ladi-story-page-progress-bar-item", d.style.setProperty("width", "calc(100% / " + n.length + " - 10px)"), r(d, n[l]), a.appendChild(d), 0 == l && (o = d)
                }
                i.appendChild(a), t.runtime.tmp.story_page_mouse_down = !1, t.runtime.tmp.story_page_current_page = 1;
                var s = function(t, i) {
                        if (!isEmptyLadiPage(t)) {
                            i && t.click();
                            for (var a = t; !isEmptyLadiPage(a.previousElementSibling);)(a = a.previousElementSibling).classList.add("active");
                            for (var n = t; !isEmptyLadiPage(n.nextElementSibling);)(n = n.nextElementSibling).classList.remove("active");
                            t.classList.remove("active");
                            var o = t.parentElement.getElementsByTagName("span")[0];
                            isEmptyLadiPage(o) || o.parentElement.removeChild(o), o = document.createElement("span"), t.appendChild(o), e.is_autoplay || o.style.setProperty("width", "100%")
                        }
                    },
                    c = function() {
                        if (e.is_autoplay) {
                            var i = 300,
                                a = null;
                            if (isEmptyLadiPage(t.runtime.tmp.current_default_popup_id) && !t.runtime.tmp.story_page_mouse_down && !t.runtime.tmp.story_page_scroll && (a = document.querySelector(".ladi-story-page-progress-bar-item span"), !isEmptyLadiPage(a))) {
                                var n = parseFloatLadiPage(a.style.getPropertyValue("width")) || 0;
                                n = (n = ((n = 1e3 * e.autoplay_time / (100 / n)) + i) / (1e3 * e.autoplay_time) * 100) > 100 ? 100 : n, a.style.setProperty("width", n + "%"), n >= 100 && (t.runtime.tmp.story_page_next_timeout_id = t.runTimeout(function() {
                                    isEmptyLadiPage(a.parentElement) || s(a.parentElement.nextElementSibling, !0)
                                }, i), i *= 2)
                            }
                            t.runtime.tmp.story_page_timeout_id = t.runTimeout(c, i)
                        }
                    };
                s(o, !1), t.runtime.tmp.story_page_timeout_id = t.runTimeout(c, 300), document.addEventListener("mousedown", function(e) {
                    t.runtime.tmp.story_page_mouse_down = !0
                }), document.addEventListener("touchstart", function(e) {
                    t.runtime.tmp.story_page_mouse_down = !0
                }, t.runtime.scrollEventPassive), document.addEventListener("mouseup", function(e) {
                    t.runtime.tmp.story_page_mouse_down = !1
                }), document.addEventListener("touchend", function(e) {
                    t.runtime.tmp.story_page_mouse_down = !1
                }), i.addEventListener("scroll", function(a) {
                    isEmptyLadiPage(t.runtime.tmp.current_default_popup_id) && (t.runtime.tmp.story_page_scroll = !0, t.removeTimeout(t.runtime.tmp.story_page_scroll_timeout_id), t.removeTimeout(t.runtime.tmp.story_page_timeout_id), t.runtime.tmp.story_page_scroll_timeout_id = t.runTimeout(function() {
                        var a = 0,
                            n = e.type == t.const.STORY_PAGE.horizontal ? i.scrollLeft / i.clientWidth : i.scrollTop / i.clientHeight;
                        if ((n = Math.floor(n + 1.5)) != t.runtime.tmp.story_page_current_page) {
                            t.runtime.tmp.story_page_current_page = n;
                            var o = document.querySelector(".ladi-story-page-progress-bar-item:nth-child(" + n + ")");
                            t.removeTimeout(t.runtime.tmp.story_page_next_timeout_id), s(o, !1), a = 100
                        }
                        t.runtime.tmp.story_page_scroll = !1, delete t.runtime.tmp.story_page_scroll_timeout_id, t.runtime.tmp.story_page_timeout_id = t.runTimeout(c, a)
                    }, 300))
                }, t.runtime.scrollEventPassive)
            }
        }
    }
}, LadiPageScriptV2.prototype.runThankyouPage = function() {
    var t = this,
        e = t.runtime.thankyou_page;
    if (isObjectLadiPage(e)) {
        var i = {
            is_custom: !0
        };
        i.conversion_name = e.event_value, i.google_ads_conversion = e.event_id, i.google_ads_label = e.event_label, i.purchase_value = e.purchase_value, i.event_category = "LadiPageThankYouPage";
        var a = null;
        ["phone", "email"].forEach(function(e) {
            var i = t.getDataReplaceStr(e);
            isEmptyLadiPage(i) || (isObjectLadiPage(a) || (a = {}), a[e] = i)
        }), t.runEventTracking(null, i, a), delete t.runtime.thankyou_page
    }
}, LadiPageScriptV2.prototype.runResizeSectionBackground = function() {
    var t = this;
    t instanceof LadiPageScriptV2 || (t = LadiPageScript);
    try {
        for (var e = document.querySelectorAll(".ladi-section .ladi-section-background iframe.ladi-section-background-video"), i = 0; i < e.length; i++) {
            var a = e[i],
                n = parseFloatLadiPage(a.getAttribute("width")) || 0,
                o = parseFloatLadiPage(a.getAttribute("height")) || 0;
            if (!(n <= 0 || o <= 0)) {
                var r = t.findAncestor(a, "ladi-section-background"),
                    l = r.clientWidth,
                    d = o / n * l;
                d < r.clientHeight && (l = r.clientHeight / d * l, d = r.clientHeight);
                var s = (r.clientHeight - d) / 2,
                    c = (r.clientWidth - l) / 2;
                a.style.setProperty("top", (parseFloatLadiPage(s) || 0) + "px"), a.style.setProperty("left", (parseFloatLadiPage(c) || 0) + "px"), a.style.setProperty("width", (parseFloatLadiPage(l) || 0) + "px"), a.style.setProperty("height", (parseFloatLadiPage(d) || 0) + "px")
            }
        }
    } catch (t) {}
}, LadiPageScriptV2.prototype.runResizeAll = function(t) {
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript), e.removeTimeout(e.runtime.tmp.timeout_is_resize_all_id), e.runtime.tmp.is_window_resize = !0;
    try {
        LadiPageShopping.push(function() {
            e.runtime.tmp.generateCart()
        });
        for (var i = document.querySelectorAll("#" + e.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), a = 0; a < i.length; a++) "none" != getComputedStyle(i[a]).display && (e.runtime.tmp.is_resize_all = !0, window.ladi(i[a].id).show(!0, {
            checkHidePopupOther: !1
        }));
        e.runResizeSectionBackground()
    } catch (t) {}
    e.runtime.tmp.timeout_is_resize_all_id = e.runTimeout(function() {
        delete e.runtime.tmp.is_resize_all, delete e.runtime.tmp.is_window_resize
    }, 200)
}, LadiPageScriptV2.prototype.runEventResize = function(t) {
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript), isEmptyLadiPage(e.runtime.tmp.timeoutResizeAll) || e.removeTimeout(e.runtime.tmp.timeoutResizeAll), e.runtime.tmp.timeoutResizeAll = e.runTimeout(function() {
        e.runResizeAll(t)
    }, 10)
}, LadiPageScriptV2.prototype.runEventOrientationChange = function(t) {
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript), isEmptyLadiPage(e.runtime.tmp.timeoutOrientationAll) || e.removeTimeout(e.runtime.tmp.timeoutOrientationAll), e.runtime.tmp.timeoutOrientationAll = e.runTimeout(function() {
        e.runResizeAll(t)
    }, 10)
}, LadiPageScriptV2.prototype.runAfterLocation = function() {
    var t = this;
    if (t instanceof LadiPageScriptV2 || (t = LadiPageScript), !t.runtime.isRun) return t.runTimeout(t.runAfterLocation, 100);
    if (t.runtime.list_country = t.runtime.list_country || [], !isObjectLadiPage(window.LadiLocation) || Object.keys(window.LadiLocation).length < t.runtime.list_country.length) return t.runTimeout(t.runAfterLocation, 100);
    var e = LadiPageLocation || [];
    (LadiPageLocation = {}).push = function(t) {
        isFunctionLadiPage(t) && t()
    }, e.forEach(function(t) {
        LadiPageLocation.push(t)
    }), LadiPageShopping.push(function() {
        t.reloadFeeShipping()
    })
}, LadiPageScriptV2.prototype.removeLazyloadPopup = function(t) {
    var e = document.getElementById(t);
    if (!isEmptyLadiPage(e))
        for (var i = e.getElementsByClassName("ladi-lazyload"); i.length > 0;) i[0].classList.remove("ladi-lazyload")
}, LadiPageScriptV2.prototype.reloadLazyload = function(t) {
    var e = this;
    if (e instanceof LadiPageScriptV2 || (e = LadiPageScript), e.runtime.tmp.is_loaded_func_done) {
        var i = [];
        if (t && isObjectLadiPage(e.runtime.story_page)) {
            var a = document.getElementsByClassName("ladi-section")[0];
            if (!isEmptyLadiPage(a))
                for (i = a.getElementsByClassName("ladi-lazyload"); i.length > 0;) i[0].classList.remove("ladi-lazyload")
        } else {
            i = document.getElementsByClassName("ladi-lazyload");
            for (var n = [], o = 0; o < i.length; o++) {
                var r = e.getElementBoundingClientRect(i[o]).y + window.scrollY;
                window.scrollY + e.getHeightDevice() > r && r + i[o].offsetHeight > window.scrollY && n.push(i[o])
            }
            n.forEach(function(t) {
                t.classList.remove("ladi-lazyload")
            });
            for (var l = document.querySelectorAll(".ladi-gallery .ladi-gallery-view-item.selected:not(.ladi-lazyload)"), d = 0; d < l.length; d++)
                if (isEmptyLadiPage(l[d].getAttribute("data-lazyload"))) {
                    l[d].setAttribute("data-lazyload", !0);
                    for (var s = l[d].parentElement.getElementsByClassName("ladi-lazyload"); s.length > 0;) s[0].classList.remove("ladi-lazyload")
                }
        }
    }
}, LadiPageScriptV2.prototype.documentLoaded = function() {
    var t = this;
    if (t instanceof LadiPageScriptV2 || (t = LadiPageScript), LadiPageApp.review_callback_loaded(!0, t.documentLoaded)) {
        t.const.LANG = JSON.stringify(t.const.LANG), t.const.LANG = t.convertReplacePrefixStr(t.const.LANG), t.const.LANG = JSON.parse(t.const.LANG), t.runtime.tmp.lang_loaded = !0;
        var e = t.getURLSearchParams(null, null, !0),
            i = e.ladishow,
            a = e.ladihide,
            n = e.laditop,
            o = window.location.hash;
        isEmptyLadiPage(i) ? i = [] : isArrayLadiPage(i) || (i = i.split(",").removeSpace()), isEmptyLadiPage(a) ? a = [] : isArrayLadiPage(a) || (a = a.split(",").removeSpace()), isEmptyLadiPage(n) ? n = [] : isArrayLadiPage(n) || (n = n.split(",").removeSpace().reverse());
        try {
            var r = window.ladi("LADI_CAMP_END_DATE").get_cookie(),
                l = window.ladi("LADI_CAMP_CONFIG").get_cookie();
            if (!isEmptyLadiPage(r) && !isEmptyLadiPage(l)) {
                l = JSON.parse(Base64.decode(l));
                var d = ((r = parseInt(r) || 0) - Date.now()) / 24 / 60 / 60 / 1e3;
                if (d > 0 && isArrayLadiPage(l.dynamic_content.cookie)) {
                    var s = [];
                    l.dynamic_content.cookie.forEach(function(t) {
                        var e = t.split("=");
                        2 != (e = e.removeSpace()).length || isEmptyLadiPage(e[0]) || isEmptyLadiPage(e[1]) || s.push({
                            name: e[0],
                            value: e[1]
                        })
                    }), s.forEach(function(t) {
                        window.ladi(t.name).set_cookie(t.value, d)
                    })
                }
                a = l.dynamic_content.hide || [], i = l.dynamic_content.show || [], n = l.dynamic_content.top || [], isArrayLadiPage(l.dynamic_content.scroll) && l.dynamic_content.scroll.length > 0 && (o = "#" + l.dynamic_content.scroll.pop())
            }
        } catch (t) {}
        var c = null,
            u = [];
        if (i.forEach(function(t) {
                var e = document.getElementById(t);
                isEmptyLadiPage(e) || e.getElementsByClassName("ladi-popup").length > 0 && u.push(t)
            }), u.length > 0 && !isEmptyLadiPage(o)) try {
            c = document.querySelector(o), isEmptyLadiPage(c) || isEmptyLadiPage(c.id) || !c.classList.contains("ladi-section") || (o = null, i = i.except(u), t.runTimeout(function() {
                window.ladi(c.id).scroll(!1, !0), u.forEach(function(t) {
                    window.ladi(t).show()
                })
            }, 300))
        } catch (t) {}
        if (a.forEach(function(t) {
                window.ladi(t).hide()
            }), i.forEach(function(t) {
                window.ladi(t).show()
            }), n.forEach(function(t) {
                window.ladi(t).top()
            }), !isEmptyLadiPage(o)) try {
            c = document.querySelector(o), isEmptyLadiPage(c) || isEmptyLadiPage(c.id) || t.runTimeout(function() {
                window.ladi(c.id).scroll()
            }, 300)
        } catch (t) {}
        if (t.resetViewport(), t.runEventScroll(), !isEmptyLadiPage(t.runtime.tracking_global_url)) {
            var p = !1,
                m = window;
            isObjectLadiPage(t.runtime.story_page) && (m = document.getElementsByClassName("ladi-wraper")[0]);
            var g = function() {
                p || (p = !0, t.loadScript(t.runtime.tracking_global_url + "?v=" + Date.now(), {
                    defer: !0
                }, null, function() {
                    t.runtime.tmp.tracking_global_loaded = !0
                }), m.removeEventListener("scroll", g), document.removeEventListener("mousemove", g), document.removeEventListener("touchstart", g))
            };
            m.addEventListener("scroll", g, t.runtime.scrollEventPassive), document.addEventListener("mousemove", g), document.addEventListener("touchstart", g, t.runtime.scrollEventPassive), t.runTimeout(g, t.runtime.tracking_global_delay)
        }
        for (; t.runtime.list_loaded_func.length > 0;) {
            t.runtime.list_loaded_func.shift()()
        }
        t.runtime.tmp.is_loaded_func_done = !0;
        var _ = document.getElementById("style_update_height_element");
        isEmptyLadiPage(_) || _.parentElement.removeChild(_);
        var y = document.getElementById("style_animation");
        isEmptyLadiPage(y) || y.parentElement.removeChild(y), t.reloadLazyload(!1)
    }
}, LadiPageScriptV2.prototype.runConversionApi = function(t, e, i, a) {
    var n = this;
    a = isObjectLadiPage(a) ? a : {}, isFunctionLadiPage(n.runtime.tmp.runTrackingAnalytics) ? LadiPageQueueCommand.push(function() {
        return "facebook" == t ? isFunctionLadiPage(window.fbq) : "tiktok" == t ? !isNullLadiPage(window.ttq) : void 0
    }, function() {
        if (!isEmptyLadiPage(t) && !isEmptyLadiPage(e) && isObjectLadiPage(window.ladi_conversion_api) && isObjectLadiPage(window.ladi_conversion_api[t]) && (window.ladi_conversion_api[t][e] = i), isObjectLadiPage(window.ladi_conversion_api) && isObjectLadiPage(window.ladi_conversion_api[t]) && isArrayLadiPage(window.ladi_conversion_api[t].pixels) && isArrayLadiPage(window.ladi_conversion_api[t].events)) {
            if (window.ladi_conversion_api[t].pixels = window.ladi_conversion_api[t].pixels.unique(), "facebook" == t) {
                window.ladi_conversion_api[t].fbc = window.ladi("_fbc").get_cookie(), window.ladi_conversion_api[t].fbp = window.ladi("_fbp").get_cookie();
                for (var o = 0; o < window.ladi_conversion_api[t].events.length; o++) {
                    var r = window.ladi_conversion_api[t].events[o].data;
                    r.event_id = r.eventID, delete r.eventID, window.ladi_conversion_api[t].events[o].data = r
                }
                n.runtime.tmp.runTrackingAnalytics("ConversionApi", {
                    data: window.ladi_conversion_api
                }), delete window.ladi_conversion_api[t].fbc, delete window.ladi_conversion_api[t].fbp, delete window.ladi_conversion_api[t].events
            }
            if ("tiktok" == t) {
                window.ladi_conversion_api[t].ttp = window.ladi("_ttp").get_cookie(), window.ladi_conversion_api[t].ttclid = window.ladi("ttclid").get_cookie();
                var l = new URL(window.location.href);
                isEmptyLadiPage(l.searchParams.get("ttclid")) || (window.ladi_conversion_api[t].ttclid = l.searchParams.get("ttclid")), isObjectLadiPage(a.ttq_identify_data) && (window.ladi_conversion_api[t].phone_number = a.ttq_identify_data.sha256_phone_number, window.ladi_conversion_api[t].email = a.ttq_identify_data.sha256_email);
                try {
                    window.ladi_conversion_api[t].external_id = window.sha256(window.ladi("LADI_UNIQUE_ID").get_cookie())
                } catch (t) {}
                n.runtime.tmp.runTrackingAnalytics("TikTokConversionApi", {
                    data: window.ladi_conversion_api
                }), delete window.ladi_conversion_api[t].ttp, delete window.ladi_conversion_api[t].ttclid, delete window.ladi_conversion_api[t].events
            }
        }
    }) : n.runTimeout(function() {
        n.runConversionApi(t, e, i, a)
    }, 100)
}, LadiPageScriptV2.prototype.getWidthDevice = function(t) {
    if (this.runtime.is_mobile_only) {
        var e = document.getElementsByClassName("ladi-wraper")[0];
        if (!isEmptyLadiPage(e)) return e.clientWidth
    }
    return t ? window.innerWidth > 0 ? window.innerWidth : window.screen.width : window.outerWidth > 0 ? window.outerWidth : window.screen.width
}, LadiPageScriptV2.prototype.getHeightDevice = function(t) {
    return window.outerHeight > 0 && !this.runtime.isDesktop && (t && window.outerHeight > window.innerHeight || !t && window.innerHeight > window.outerHeight) ? window.outerHeight : window.innerHeight
}, LadiPageScriptV2.prototype.startAutoScroll = function(t, e, i, a) {
    if (this.runtime.isDesktop ? i : a) {
        var n = document.getElementById(t);
        if (!isEmptyLadiPage(n) && !n.classList.contains("ladi-auto-scroll")) {
            var o = 0;
            if ("section" != e) {
                if ((parseFloatLadiPage(getComputedStyle(n).width) || 0) <= this.getWidthDevice()) return;
                o = (o = parseFloatLadiPage(getComputedStyle(n).left) || 0) > 0 ? 0 : -1 * o
            } else {
                for (var r = n.querySelectorAll(".ladi-container > .ladi-element"), l = 0; l < r.length; l++) {
                    var d = parseFloatLadiPage(getComputedStyle(r[l]).left) || 0;
                    d < o && (o = d)
                }
                o = o > 0 ? 0 : -1 * o, n.querySelector(".ladi-container").style.setProperty("margin-left", o + "px")
            }
            n.classList.add("ladi-auto-scroll"), n.scrollLeft = o
        }
    }
}, LadiPageScriptV2.prototype.getLinkUTMRedirect = function(t, e) {
    var i = this.createTmpElement("a", "", {
            href: t
        }),
        a = this.getURLSearchParams(e, null, !1),
        n = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
    if (n.push(this.const.LADIFLOW_DATA_KEY_NAME), n.push(this.const.REF_NAME), !isEmptyLadiPage(i.href) && !isEmptyLadiPage(i.host)) {
        var o = this.getURLSearchParams(i.search, null, !1),
            r = [];
        isArrayLadiPage(window.LadiPageURLSearchParamsCustom) && (r = window.LadiPageURLSearchParamsCustom), isStringLadiPage(window.LadiPageURLSearchParamsCustom) && (r = [window.LadiPageURLSearchParamsCustom]), (n = (n = n.concat(r)).unique()).forEach(function(t) {
            isEmptyLadiPage(o[t]) && !isEmptyLadiPage(a[t]) && (i.search = i.search + (isEmptyLadiPage(i.search) ? "?" : "&") + t + "=" + encodeURIComponent(a[t]), o[t] = a[t])
        })
    }
    return i.href
}, LadiPageScriptV2.prototype.randomInt = function(t, e) {
    return t = Math.ceil(t), e = Math.floor(e), Math.floor(Math.random() * (e - t + 1)) + t
}, LadiPageScriptV2.prototype.randomString = function(t) {
    for (var e = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", a = i.length, n = 0; n < t; n++) e += i.charAt(Math.floor(Math.random() * a));
    return e
}, LadiPageScriptV2.prototype.runCallback = function(t, e) {
    if (isFunctionLadiPage(e)) {
        var i = this;
        if (t) {
            var a = i.runInterval(function() {
                i.removeInterval(a), i.runCallback(!1, e)
            }, 0);
            return
        }
        e()
    }
}, LadiPageScriptV2.prototype.runTimeout = function(t, e) {
    if (isFunctionLadiPage(t)) {
        if (!0 === e) return setTimeout(t, 0);
        if (!isEmptyLadiPage(e) && e > 0) return setTimeout(t, e);
        t()
    }
}, LadiPageScriptV2.prototype.removeTimeout = function(t) {
    return clearTimeout(t)
}, LadiPageScriptV2.prototype.removeInterval = function(t) {
    return clearInterval(t)
}, LadiPageScriptV2.prototype.runInterval = function(t, e) {
    if (isFunctionLadiPage(t)) return setInterval(t, e)
}, LadiPageScriptV2.prototype.getURLSearchParams = function(t, e, i) {
    var a = {},
        n = isNullLadiPage(t);
    if (t = n ? window.location.search : t, !isEmptyLadiPage(t))
        for (var o = t.substr(1).split("&"), r = 0; r < o.length; ++r) {
            var l = o[r].split("=", 2);
            if (isNullLadiPage(a[l[0]])) {
                1 == l.length ? a[l[0]] = "" : a[l[0]] = decodeURIComponentLadiPage(l[1].replace(/\+/g, " "));
                try {
                    if (i) {
                        var d = JSON.parse(a[l[0]]);
                        Number.isInteger(d) || (a[l[0]] = d, 0 == a[l[0]].length ? a[l[0]] = "" : 1 == a[l[0]].length && (a[l[0]] = a[l[0]][0]))
                    }
                } catch (t) {}
            } else i && (isArrayLadiPage(a[l[0]]) || (a[l[0]] = [a[l[0]]]), 1 == l.length ? a[l[0]].push("") : a[l[0]].push(decodeURIComponentLadiPage(l[1].replace(/\+/g, " "))))
        }
    return n && ["email", "phone"].forEach(function(t) {
        try {
            var e = a[t];
            if (!isEmptyLadiPage(e)) {
                var i = Base64.decode(e);
                e == Base64.encode(i) && (a[t] = i)
            }
        } catch (t) {}
    }), isEmptyLadiPage(e) ? a : a[e]
}, LadiPageScriptV2.prototype.getVideoId = function(t, e) {
    if (isEmptyLadiPage(e)) return e;
    if (t == this.const.VIDEO_TYPE.youtube) {
        var i = this.createTmpElement("a", "", {
            href: e
        }); - 1 != e.toLowerCase().indexOf("watch") ? e = this.getURLSearchParams(i.search, "v", !1) : -1 != e.toLowerCase().indexOf("embed/") ? e = i.pathname.substring("/embed/".length) : -1 != e.toLowerCase().indexOf("shorts/") ? e = i.pathname.substring("/shorts/".length) : -1 != e.toLowerCase().indexOf("youtu.be") && (e = i.pathname.substring("/".length))
    }
    return e
}, LadiPageScriptV2.prototype.sendRequest = function(t, e, i, a, n, o) {
    var r = this,
        l = function(d) {
            var s = d[e],
                c = function(d, u) {
                    if (s.list.length <= d) 0 == d ? l({}) : isFunctionLadiPage(o) && o(r.const.LANG.REQUEST_SEND_ERROR, 0, u, e);
                    else {
                        var p = {};
                        p.timeout = s.timeout, p.onreadystatechange = function() {
                            this.readyState == XMLHttpRequest.DONE && (200 == this.status ? o(this.responseText, this.status, this, e) : c(d + 1, this))
                        }, r.sendRequestWithOption(t, s.list[d], i, a, n, p)
                    }
                };
            if (isObjectLadiPage(s)) return c(0, null);
            r.sendRequestWithOption(t, e, i, a, n, null, o)
        },
        d = function() {
            var t = r.runtime.tmp.send_request_configs;
            if (!isObjectLadiPage(t)) {
                var e = r.const.API_FORM_DATA_LIST;
                return r.runtime.tmp.send_request_configs = {}, isArrayLadiPage(e) && e.length > 0 && (r.runtime.tmp.send_request_configs[r.const.API_FORM_DATA] = {
                    timeout: r.const.API_FORM_DATA_TIMEOUT,
                    list: e
                }), void d()
            }
            l(t)
        };
    d()
}, LadiPageScriptV2.prototype.sendRequestWithOption = function(t, e, i, a, n, o, r) {
    if (!this.runtime.isGenerateHtml) {
        if (this.runtime.has_popupx && this.runtime.request_through_parent) {
            var l = this.randomId();
            return this.runtime.tmp["request_callback_id_" + l] = r, void this.runtime.tmp.runActionPopupX({
                request_data: {
                    method: t,
                    url: e,
                    data: i,
                    async: a,
                    headers: n,
                    options: o,
                    callback_id: l
                },
                action: {
                    type: "send_request_with_option"
                }
            })
        }
        var d = new XMLHttpRequest;
        if (isFunctionLadiPage(this.runtime.send_request_response[e]))
            if (this.runtime.send_request_response[e](e, i, r)) return;
        isFunctionLadiPage(r) && (d.onreadystatechange = function() {
            var t = null;
            try {
                t = this.responseText
            } catch (t) {}
            r(t, this.status, this, e)
        }), d.open(t, e, a);
        isObjectLadiPage(n) && Object.keys(n).forEach(function(t) {
            d.setRequestHeader(t, n[t])
        }), isObjectLadiPage(o) && Object.keys(o).forEach(function(t) {
            d[t] = o[t]
        }), d.send(i)
    }
}, LadiPageScriptV2.prototype.setCookieDomains = function(t, e, i) {
    window.ladi(t).set_cookie(e, i, "/", window.location.host), isArrayLadiPage(this.runtime.DOMAIN_SET_COOKIE) && this.runtime.DOMAIN_SET_COOKIE.forEach(function(a) {
        a != window.location.host && window.ladi(t).set_cookie(e, i, "/", a)
    })
}, LadiPageScriptV2.prototype.deleteCookie = function(t) {
    return window.ladi(t).delete_cookie()
}, LadiPageScriptV2.prototype.setCookie = function(t, e, i, a, n, o) {
    return window.ladi(e).set_cookie(i, a, o, t, n)
}, LadiPageScriptV2.prototype.getCookie = function(t) {
    return window.ladi(t).get_cookie()
}, LadiPageScriptV2.prototype.runFormItemOtherChange = function(t, e) {
    var i = this,
        a = i.findAncestor(t, "ladi-element");
    if (!isEmptyLadiPage(a)) {
        var n = function(i) {
                var n = null;
                if (e)
                    for (var o = a.querySelectorAll('.ladi-form-checkbox-item input[data-other="true"]'), l = 0; l < o.length; l++) r(o[l], i);
                else n = t.querySelector('input[data-other="true"]'), isEmptyLadiPage(n) && (n = a.querySelector('.ladi-form-checkbox-item input[data-other="true"]')), r(n, i)
            },
            o = function(t, e, i, a, n) {
                var o = e.parentElement.getElementsByClassName("ladi-editing")[0];
                isEmptyLadiPage(o) && ((o = document.createElement("input")).type = "text", e.parentElement.appendChild(o)), o.removeAttribute("style"), o.className = "ladi-editing", o.style.setProperty("background-color", "transparent"), o.style.setProperty("width", "100%"), o.style.setProperty("height", getComputedStyle(e).height), o.setAttribute("placeholder", n), i ? (o.oninput = function(e) {
                    t.value = e.target.value
                }, o.style.removeProperty("display"), e.classList.add("ladi-hidden"), o.focus()) : (o.oninput = null, o.style.setProperty("display", "none", "important"), e.classList.remove("ladi-hidden")), o.value = a, e.textContent = a
            },
            r = function(t, a) {
                var n = t.getAttribute("data-value-old");
                isEmptyLadiPage(n) && (n = t.getAttribute("value"), t.setAttribute("data-value-old", n));
                var r = i.findAncestor(t, "ladi-form-checkbox-item").getElementsByTagName("span")[0];
                if (!isEmptyLadiPage(r)) {
                    var l = r.getAttribute("data-text-old");
                    if (isEmptyLadiPage(l) && (l = r.textContent, r.setAttribute("data-text-old", l), r.setAttribute("placeholder", l)), e) o(t, r, !1, l, l), t.setAttribute("value", n);
                    else if (a && !r.classList.contains("ladi-hidden")) {
                        o(t, r, !0, "", l), t.setAttribute("value", "")
                    }
                }
            };
        try {
            var l = window.ladi(a.id).value(),
                d = i.runtime.eventData[a.id];
            if ("survey" == d.type && (l == i.const.OPTION_OTHER_KEY || isArrayLadiPage(l) && -1 != l.indexOf(i.const.OPTION_OTHER_KEY) ? n(!0) : n(!1)), "form_item" == d.type) {
                if (isArrayLadiPage(l)) {
                    var s = [];
                    l.forEach(function(t) {
                        t = String(t).split("|")[0], s.push(t)
                    }), l = s
                } else l = String(l).split("|")[0];
                l == i.const.OPTION_OTHER_KEY || isArrayLadiPage(l) && -1 != l.indexOf(i.const.OPTION_OTHER_KEY) ? n(!0) : n(!1)
            }
        } catch (t) {}
    }
}, LadiPageScriptV2.prototype.updateProductVariantSelectOptionFirst = function(t, e, i) {
    var a = this,
        n = a.generateVariantProduct(t, !1, null, null, null, null, !0, !0, function() {
            a.updateProductVariantSelectOptionFirst(t, e, i)
        });
    if (isObjectLadiPage(n) && isObjectLadiPage(n.product)) {
        var o = i.querySelectorAll("select.ladi-form-control"),
            r = i.querySelectorAll(".ladi-form-label-container"),
            l = 0;
        if (isArrayLadiPage(n.product.variants) && 0 != n.product.variants.length) {
            var d = null,
                s = null;
            if (isEmptyLadiPage(t["option.product_variant_id"]) || (d = n.product.variants.find(function(e) {
                    return e.product_variant_id == t["option.product_variant_id"]
                })), isEmptyLadiPage(d) && (d = n.product.variants[0]), e["option.product_variant_type"] == a.const.PRODUCT_VARIANT_TYPE.combined)
                for (l = 0; l < o.length; l++) s = o[l].querySelector('option[data-product-variant-id="' + d.product_variant_id + '"]'), isEmptyLadiPage(s) || (o[l].value = s.getAttribute("value"), a.fireEvent(o[l], "change"));
            e["option.product_variant_type"] == a.const.PRODUCT_VARIANT_TYPE.combobox && isStringLadiPage(d.option_ids) && d.option_ids.split("/").forEach(function(t, e) {
                for (l = 0; l < o.length; l++) o[l].getAttribute("data-product-option-id") == t && (o[l].value = d["option" + (e + 1)] || "", a.fireEvent(o[l], "change"))
            }), e["option.product_variant_type"] == a.const.PRODUCT_VARIANT_TYPE.label && isStringLadiPage(d.option_ids) && d.option_ids.split("/").forEach(function(t, e) {
                for (l = 0; l < r.length; l++) r[l].getAttribute("data-product-option-id") == t && (a.runtime.tmp.updateLabelValue(r[l], d["option" + (e + 1)] || ""), a.runtime.tmp.fireEventLabelChange(r[l]))
            })
        } else {
            for (l = 0; l < o.length; l++) o[l].value = "", a.fireEvent(o[l], "change");
            for (l = 0; l < r.length; l++) a.runtime.tmp.updateLabelValue(r[l], null), a.runtime.tmp.fireEventLabelChange(r[l])
        }
    }
}, LadiPageScriptV2.prototype.updateProductVariantSelectOption = function(t, e, i, a, n) {
    var o = this,
        r = t.target,
        l = o.generateVariantProduct(e, !1, null, null, null, null, !0, !0, function(r) {
            o.updateProductVariantSelectOption(t, e, i, a, n)
        });
    if (isObjectLadiPage(l)) {
        var d = o.getProductVariantId(r, l.product),
            s = o.findAncestor(r, "ladi-collection-item"),
            c = [],
            u = 0;
        if (isEmptyLadiPage(s))
            for (var p = document.querySelectorAll('[data-variant="true"]'), m = 0; m < p.length; m++) {
                var g = o.findAncestor(p[m], "ladi-form");
                if (!isEmptyLadiPage(g) && (g = o.findAncestor(g, "ladi-element"), isEmptyLadiPage(o.findAncestor(g, "ladi-collection")))) {
                    var _ = o.runtime.eventData[g.id];
                    isEmptyLadiPage(_) || _["option.product_type"] != e["option.product_type"] || _["option.product_id"] != e["option.product_id"] || c.push(p[m])
                }
            } else c = s.querySelectorAll('[data-variant="true"]');
        var y = [];
        for (u = 0; u < c.length; u++) {
            if (a) {
                var f = o.findAncestor(c[u], "ladi-popup");
                if (isEmptyLadiPage(f)) continue;
                if ("POPUP_PRODUCT" != (f = o.findAncestor(f, "ladi-element")).id && "POPUP_BLOG" != f.id) continue
            }
            y.push(c[u])
        }
        var v = r.getAttribute("data-product-option-id"),
            h = null,
            P = null,
            L = null;
        if (isArrayLadiPage(l.product.variants) && 0 != l.product.variants.length) {
            if (isStringLadiPage(l.product.variants[0].option_ids)) {
                for (L = l.product.variants[0].option_ids.split("/"), u = 0; u < L.length; u++)
                    if (L[u] == v) {
                        P = u;
                        break
                    } if (!isEmptyLadiPage(P)) {
                    h = {};
                    var E = r.value;
                    r.classList.contains("ladi-form-label-container") && (E = o.runtime.tmp.getLabelValue(r)), l.product.variants.forEach(function(t) {
                        if (isEmptyLadiPage(E) || E == t["option" + (P + 1)])
                            for (u = 0; u < L.length; u++) isArrayLadiPage(h[L[u]]) || (h[L[u]] = []), u != P && h[L[u]].push(t["option" + (u + 1)])
                    })
                }
            }
            for (var A = h, b = [], T = [], w = null, S = 0; S < y.length; S++) {
                var O = o.runtime.eventData[y[S].id];
                if (!isEmptyLadiPage(O)) {
                    h = o.copy(A);
                    var C = 0,
                        I = 0,
                        N = 0,
                        k = 0,
                        x = null,
                        D = null,
                        R = null,
                        B = null;
                    if (O["option.product_variant_type"] == o.const.PRODUCT_VARIANT_TYPE.combobox) {
                        if (w = y[S].querySelectorAll("select[data-product-option-id]"), isObjectLadiPage(h)) {
                            for (C = 0; C < w.length; C++)
                                if ((x = w[C].getAttribute("data-product-option-id")) != v)
                                    for (isArrayLadiPage(h[x]) && -1 != h[x].indexOf(w[C].value) || (w[C].value = ""), D = w[C].getElementsByTagName("option"), I = 0; I < D.length; I++) isEmptyLadiPage(D[I].getAttribute("value")) || D[I].removeAttribute("disabled");
                            for (C = 0; C < w.length; C++) {
                                for (x = w[C].getAttribute("data-product-option-id"), h = {}, N = 0; N < l.product.variants.length; N++)
                                    if (B = l.product.variants[N], L = B.option_ids.split("/"), -1 != (P = L.indexOf(x)) && (isEmptyLadiPage(w[C].value) || w[C].value == B["option" + (P + 1)]))
                                        for (u = 0; u < L.length; u++) isArrayLadiPage(h[L[u]]) || (h[L[u]] = []), u != P && h[L[u]].push(B["option" + (u + 1)]);
                                for (k = 0; k < w.length; k++)
                                    if ((R = w[k].getAttribute("data-product-option-id")) != x)
                                        for (D = w[k].getElementsByTagName("option"), I = 0; I < D.length; I++) isEmptyLadiPage(D[I].getAttribute("value")) || isArrayLadiPage(h[R]) && -1 != h[R].indexOf(D[I].getAttribute("value")) || D[I].setAttribute("disabled", "")
                            }
                        }
                        if (!isObjectLadiPage(h))
                            for (C = 0; C < w.length; C++) b.push(w[C])
                    }
                    if (O["option.product_variant_type"] == o.const.PRODUCT_VARIANT_TYPE.label) {
                        if (w = y[S].querySelectorAll(".ladi-form-label-container[data-product-option-id]"), isObjectLadiPage(h)) {
                            for (C = 0; C < w.length; C++)
                                if ((x = w[C].getAttribute("data-product-option-id")) != v) {
                                    var F = o.runtime.tmp.getLabelValue(w[C]);
                                    for (isArrayLadiPage(h[x]) && -1 != h[x].indexOf(F) || o.runtime.tmp.updateLabelValue(w[C], null), D = w[C].getElementsByClassName("ladi-form-label-item"), I = 0; I < D.length; I++) D[I].classList.contains("no-value") || D[I].classList.remove("disabled")
                                } for (C = 0; C < w.length; C++) {
                                for (x = w[C].getAttribute("data-product-option-id"), h = {}, N = 0; N < l.product.variants.length; N++)
                                    if (B = l.product.variants[N], L = B.option_ids.split("/"), -1 != (P = L.indexOf(x))) {
                                        var M = o.runtime.tmp.getLabelValue(w[C]);
                                        if (isEmptyLadiPage(M) || M == B["option" + (P + 1)])
                                            for (u = 0; u < L.length; u++) isArrayLadiPage(h[L[u]]) || (h[L[u]] = []), u != P && h[L[u]].push(B["option" + (u + 1)])
                                    } for (k = 0; k < w.length; k++)
                                    if ((R = w[k].getAttribute("data-product-option-id")) != x)
                                        for (D = w[k].getElementsByClassName("ladi-form-label-item"), I = 0; I < D.length; I++)
                                            if (!D[I].classList.contains("no-value")) {
                                                var q = o.runtime.tmp.getOptionLabelValue(D[I]);
                                                isArrayLadiPage(h[R]) && -1 != h[R].indexOf(q) || D[I].classList.add("disabled")
                                            }
                            }
                        }
                        if (!isObjectLadiPage(h))
                            for (C = 0; C < w.length; C++) T.push(w[C])
                    }
                }
            }!isEmptyLadiPage(d) && isFunctionLadiPage(n) && n();
            for (var V = null; b.length > 0;) V = b.shift(), o.fireEvent(V, "change");
            for (; T.length > 0;) V = T.shift(), o.runtime.tmp.fireEventLabelChange(V);
            for (w = document.querySelectorAll(".ladi-form .ladi-form-label-container"), S = 0; S < w.length; S++) {
                var Y = o.runtime.tmp.getLabelValue(w[S]);
                if (!isEmptyLadiPage(Y)) o.findAncestor(w[S], "ladi-element").getAttribute("data-title-type") == o.const.PRODUCT_VARIANT_TITLE.top && (Y = ": " + Y);
                var U = o.findAncestor(w[S], "ladi-form-item-box");
                isEmptyLadiPage(U) || (U = U.querySelector(".ladi-form-item-title-value"), isEmptyLadiPage(U) || (U.innerHTML = Y))
            }
        }
    }
}, LadiPageScriptV2.prototype.getProductVariantIndex = function(t, e) {
    var i = this,
        a = -1,
        n = e["option.product_type"],
        o = e["option.ladisale_store_id"] || null,
        r = e["option.product_id"],
        l = i.generateVariantProduct(e, !1, null, null, null, null, !0, !0);
    if (!isObjectLadiPage(l) || !isObjectLadiPage(l.store_info) || !isObjectLadiPage(l.product) || !isArrayLadiPage(l.product.variants) || l.product.variants.length <= 0) return a;
    this.runtime.isClient ? Object.keys(this.runtime.eventData).forEach(function(e) {
        if ((isEmptyLadiPage(t) || t == e) && -1 == a) {
            var d = i.runtime.eventData[e];
            if ("form" == d.type && d["option.is_add_to_cart"] && d["option.product_type"] == n && d["option.product_id"] == r && d["option.ladisale_store_id"] == o) {
                var s = document.getElementById(e);
                if (!isEmptyLadiPage(s)) {
                    var c = s.querySelector('[data-variant="true"]');
                    if (!isEmptyLadiPage(c)) {
                        var u = i.runtime.eventData[c.id];
                        if (!isEmptyLadiPage(u)) {
                            var p = null;
                            if (u["option.product_variant_type"] == i.const.PRODUCT_VARIANT_TYPE.combobox && (p = c.querySelectorAll(".ladi-form-item select[data-product-option-id]"), a = l.product.variants.findIndex(function(t) {
                                    for (var e = !0, i = null, a = function(t) {
                                            return t == i
                                        }, n = 0; n < p.length; n++)
                                        if (p[n].getAttribute("data-store-id") == l.store_info.id && p[n].getAttribute("data-product-id") == t.product_id) {
                                            i = p[n].getAttribute("data-product-option-id");
                                            var o = p[n].value;
                                            if (isStringLadiPage(t.option_ids)) {
                                                var r = t.option_ids.split("/").findIndex(a);
                                                if (-1 != r && t["option" + (r + 1)] != o) {
                                                    e = !1;
                                                    break
                                                }
                                            }
                                        } return e
                                })), u["option.product_variant_type"] == i.const.PRODUCT_VARIANT_TYPE.label && (p = c.querySelectorAll(".ladi-form-label-container[data-product-option-id]"), a = l.product.variants.findIndex(function(t) {
                                    for (var e = !0, a = null, n = function(t) {
                                            return t == a
                                        }, o = 0; o < p.length; o++)
                                        if (p[o].getAttribute("data-store-id") == l.store_info.id && p[o].getAttribute("data-product-id") == t.product_id) {
                                            a = p[o].getAttribute("data-product-option-id");
                                            var r = i.runtime.tmp.getLabelValue(p[o]);
                                            if (isStringLadiPage(t.option_ids)) {
                                                var d = t.option_ids.split("/").findIndex(n);
                                                if (-1 != d && t["option" + (d + 1)] != r) {
                                                    e = !1;
                                                    break
                                                }
                                            }
                                        } return e
                                })), u["option.product_variant_type"] == i.const.PRODUCT_VARIANT_TYPE.combined) {
                                var m = c.querySelector(".ladi-form-control");
                                if (isEmptyLadiPage(m) || m.getAttribute("data-store-id") != l.store_info.id || m.getAttribute("data-product-id") != l.product.product_id) return;
                                if (a = m.value, a = isEmptyLadiPage(a) ? -1 : parseInt(a), "none" == getComputedStyle(c).display) {
                                    var g = null; - 1 == a && (isEmptyLadiPage(d["option.product_variant_id"]) || (g = m.querySelector('option[data-product-variant-id="' + d["option.product_variant_id"] + '"]'), isEmptyLadiPage(g) || (a = parseInt(g.getAttribute("value")) || -1))), -1 == a && (g = m.querySelector('option[value="0"]'), isEmptyLadiPage(g) || (a = 0))
                                }
                            }
                        }
                    }
                }
            }
        }
    }) : a = 0;
    return a
}, LadiPageScriptV2.prototype.getProductVariantId = function(t, e) {
    var i = null,
        a = this.findAncestor(t, "ladi-element");
    if (!isEmptyLadiPage(a)) {
        var n = this.runtime.eventData[a.id];
        if (!isEmptyLadiPage(n) && n["option.product_variant_type"] == this.const.PRODUCT_VARIANT_TYPE.combined) {
            var o = a.querySelector("select.ladi-form-control");
            if (!isEmptyLadiPage(o) && !isEmptyLadiPage(o.value)) {
                var r = o.querySelector('option[value="' + o.value + '"]');
                isEmptyLadiPage(r) || (i = r.getAttribute("data-product-variant-id"))
            }
        }
        var l = null,
            d = null;
        if (!isEmptyLadiPage(n) && (n["option.product_variant_type"] == this.const.PRODUCT_VARIANT_TYPE.combobox || n["option.product_variant_type"] == this.const.PRODUCT_VARIANT_TYPE.label)) {
            d = {}, l = a.querySelectorAll(".ladi-form-item select[data-product-option-id]");
            for (var s = 0; s < l.length; s++) d[l[s].getAttribute("data-product-option-id")] = (isEmptyLadiPage(l[s].value) ? "" : l[s].value).trim();
            for (l = a.querySelectorAll(".ladi-form-label-container[data-product-option-id]"), s = 0; s < l.length; s++) d[l[s].getAttribute("data-product-option-id")] = this.runtime.tmp.getLabelValue(l[s]).trim();
            isArrayLadiPage(e.variants) && e.variants.forEach(function(t) {
                if (isEmptyLadiPage(i)) {
                    var e = !0;
                    if (isStringLadiPage(t.option_ids))
                        for (var a = t.option_ids.split("/"), n = 0; n < a.length; n++)
                            if (d[a[n].trim()] != (t["option" + (n + 1)] || "").trim()) {
                                e = !1;
                                break
                            } e && (i = t.product_variant_id)
                }
            })
        }
    }
    return i
}, LadiPageScriptV2.prototype.generateProductKey = function(t, e, i, a, n, o, r, l) {
    var d = this;
    isEmptyLadiPage(r) || (a["option.product_id"] = r.product_id);
    var s = a["option.product_type"],
        c = a["option.product_mapping_name"],
        u = d.generateVariantProduct(a, !1, null, null, null, null, !0, !0, function(i) {
            d.generateProductKey(t, e, !1, a, n, o, r, l)
        }),
        p = null;

    function m(t) {
        return (t >= 10 ? "" : "0") + t
    }
    if (isObjectLadiPage(u) && isObjectLadiPage(u.product)) {
        var g = null,
            _ = null;
        u.product.type != d.const.PRODUCT_TYPE.event && u.product.type != d.const.PRODUCT_TYPE.service || "description" == c && (c = "content");
        var y = function() {
            if (-1 != [d.const.FORM_CONFIG_TYPE.ladisales, d.const.FORM_CONFIG_TYPE.sapo, d.const.FORM_CONFIG_TYPE.haravan, d.const.FORM_CONFIG_TYPE.shopify, d.const.FORM_CONFIG_TYPE.wordpress].indexOf(s)) {
                var t = !1;
                if (-1 != ["name", "description", "content", "location", "timezone", "external_link"].indexOf(c) && (g = u.product[c], e = g, t = !0), -1 != ["start_date", "end_date"].indexOf(c)) {
                    g = u.product[c];
                    try {
                        (_ = new Date(g)).toISOString() == g && (g = _.getFullYear() + "-" + m(_.getMonth() + 1) + "-" + m(_.getDate()) + " " + m(_.getHours()) + ":" + m(_.getMinutes()) + ":" + m(_.getSeconds()))
                    } catch (t) {}
                    e = g, t = !0
                }
                if (-1 != ["image"].indexOf(c) && (g = u.product[c], isObjectLadiPage(g) && (e = g.src, isEmptyLadiPage(e) || !isStringLadiPage(e) || e.startsWith("http://") || e.startsWith("https://") || e.startsWith("//") || (e = "https://" + d.const.STATIC_W_DOMAIN + "/" + e), t = !0)), -1 != ["images"].indexOf(c) && (g = u.product[c], isArrayLadiPage(g) && (e = [], g.forEach(function(t) {
                        isEmptyLadiPage(t.src) || (!isStringLadiPage(t.src) || t.src.startsWith("http://") || t.src.startsWith("https://") || t.src.startsWith("//") ? e.push({
                            src: t.src
                        }) : e.push({
                            src: "https://" + d.const.STATIC_W_DOMAIN + "/" + t.src
                        }))
                    }), t = !0)), t && (t = !isEmptyLadiPage(e)), isArrayLadiPage(u.product.variants) && u.product.variants.length > 0) {
                    var r = n ? 0 : d.getProductVariantIndex(null, a);
                    isEmptyLadiPage(o) || (r = u.product.variants.findIndex(function(t) {
                        return t.product_variant_id == o
                    }));
                    var f = null;
                    if (-1 != r && (f = u.product.variants[r], p = f), !t)
                        if (-1 != r)
                            if (-1 != ["variant_start_date", "variant_end_date"].indexOf(c)) {
                                g = f[c];
                                try {
                                    (_ = new Date(g)).toISOString() == g && (g = _.getFullYear() + "-" + m(_.getMonth() + 1) + "-" + m(_.getDate()) + " " + m(_.getHours()) + ":" + m(_.getMinutes()) + ":" + m(_.getSeconds()))
                                } catch (t) {}
                                e = g
                            } else if (-1 != ["sku", "variant_timezone"].indexOf(c)) g = f[c], e = g;
                    else if (-1 != ["title"].indexOf(c)) g = f[c] || f.product_name, e = g;
                    else if (-1 != ["text_quantity"].indexOf(c)) g = 1 == f.inventory_checked ? f[c] : "", e = g;
                    else if (-1 != ["weight"].indexOf(c)) g = f[c], isEmptyLadiPage(f.weight_unit) || (g += f.weight_unit), e = g;
                    else if (-1 != ["price", "compare_price"].indexOf(c)) isEmptyLadiPage(f[c]) ? g = "" : (g = d.formatNumber(f[c], 3), isObjectLadiPage(u.store_info) && isObjectLadiPage(u.store_info.currency) && !isEmptyLadiPage(u.store_info.currency.symbol) && (g = d.formatCurrency(f[c], u.store_info.currency.symbol, !0))), e = g;
                    else if (-1 != ["price_sale"].indexOf(c)) {
                        var v = 0;
                        isEmptyLadiPage(f.price) || isEmptyLadiPage(f.compare_price) || (v = f.compare_price - f.price), 0 != v ? (g = d.formatNumber(v, 3), isObjectLadiPage(u.store_info) && isObjectLadiPage(u.store_info.currency) && !isEmptyLadiPage(u.store_info.currency.symbol) && (g = d.formatCurrency(v, u.store_info.currency.symbol, !0))) : g = "", e = g
                    } else if (-1 != ["price_sale_percent"].indexOf(c)) {
                        var h = 0;
                        isEmptyLadiPage(f.price) || isEmptyLadiPage(f.compare_price) || (h = Math.floor((f.compare_price - f.price) / f.compare_price * 100)), e = g = 0 != h ? h + "%" : ""
                    } else if (-1 != ["src"].indexOf(c)) {
                        if (g = f[c], isEmptyLadiPage(g)) return c = "image", y();
                        !isStringLadiPage(g) || g.startsWith("http://") || g.startsWith("https://") || g.startsWith("//") || (g = "https://" + d.const.STATIC_W_DOMAIN + "/" + g), e = g
                    } else ["description"].indexOf(c), g = f[c], isEmptyLadiPage(g) || (e = g);
                    else e = g = ""
                }
            } else {
                if (g = u.product[c], isBooleanLadiPage(g)) g = g ? d.const.LANG.OPTION_TRUE : d.const.LANG.OPTION_FALSE;
                else try {
                    (_ = new Date(g)).toISOString() == g && (g = _.getFullYear() + "-" + m(_.getMonth() + 1) + "-" + m(_.getDate()) + " " + m(_.getHours()) + ":" + m(_.getMinutes()) + ":" + m(_.getSeconds()))
                } catch (t) {}
                e = g
            }!i && isFunctionLadiPage(l) && l(e)
        };
        y()
    }
    return t ? {
        product: u,
        variant: p,
        value: e
    } : e
}, LadiPageScriptV2.prototype.generateVariantProduct = function(t, e, i, a, n, o, r, l, d) {
    var s = e ? "" : null,
        c = this,
        u = function(t) {
            if (!e) return isObjectLadiPage(t) ? t : null;
            var l = "";
            if (isObjectLadiPage(t)) {
                if (!isObjectLadiPage(t.product)) return l;
                i == c.const.PRODUCT_VARIANT_TYPE.combined && (l += '<div class="ladi-form-item-container"><div class="ladi-form-item-background"></div><div class="ladi-form-item"><select' + (isObjectLadiPage(t.store_info) && !isNullLadiPage(t.store_info.id) ? ' data-store-id="' + t.store_info.id + '"' : "") + ' data-product-id="' + t.product.product_id + '" required tabindex="' + o + '" class="ladi-form-control ladi-form-control-select" data-selected=""' + (r ? "" : ' onmousedown="javascript: event.preventDefault();"') + ">", c.runtime.isClient && (l += '<option value="" data-product-variant-id="">' + c.const.LANG.OPTION_NO_SELECT + "</option>"), isArrayLadiPage(t.product.variants) && t.product.variants.forEach(function(e, i) {
                    var a = e.title || e.product_name;
                    if (n) {
                        var o = c.formatNumber(e.price, 3);
                        isObjectLadiPage(t.store_info) && isObjectLadiPage(t.store_info.currency) && !isEmptyLadiPage(t.store_info.currency.symbol) && (o = c.formatCurrency(e.price, t.store_info.currency.symbol, !0)), a += " - " + o
                    }
                    l += '<option value="' + i + '" data-product-variant-id="' + e.product_variant_id + '">' + a + "</option>"
                }), l += "</select></div></div>"), i == c.const.PRODUCT_VARIANT_TYPE.combobox && isArrayLadiPage(t.product.options) && t.product.options.forEach(function(e) {
                    if (e.is_tmp) l += '<div class="ladi-form-item-box"></div>';
                    else if (isArrayLadiPage(e.values) && 0 != e.values.length) {
                        l += '<div class="ladi-form-item-box">', isEmptyLadiPage(a) || (l += '<div class="ladi-form-item-title"><span>' + e.name + "</span></div>"), l += '<div class="ladi-form-item-container"><div class="ladi-form-item-background"></div><div class="ladi-form-item"><select' + (isObjectLadiPage(t.store_info) && !isNullLadiPage(t.store_info.id) ? ' data-store-id="' + t.store_info.id + '"' : "") + ' data-product-id="' + e.product_id + '" data-product-option-id="' + e.product_option_id + '" required tabindex="' + o + '" class="ladi-form-control ladi-form-control-select" data-selected=""' + (r ? "" : ' onmousedown="javascript: event.preventDefault();"') + ">", c.runtime.isClient && (l += '<option value="">' + c.const.LANG.OPTION_NO_SELECT + "</option>");
                        var i = null;
                        isArrayLadiPage(t.product.variants) && (i = t.product.variants[0]);
                        var n = null;
                        isEmptyLadiPage(i) || isStringLadiPage(i.option_ids) && (n = i.option_ids.split("/"));
                        e.values.forEach(function(t) {
                            var a = function(t) {
                                var a = "";
                                return isArrayLadiPage(n) && n.forEach(function(n, o) {
                                    e.product_option_id == n && t == i["option" + (o + 1)] && (a = " selected")
                                }), a
                            }(t.name);
                            l += "<option" + a + ' value="' + t.name + '">' + (t.name_new || t.name) + "</option>"
                        }), l += "</select></div></div></div>"
                    }
                }), i == c.const.PRODUCT_VARIANT_TYPE.label && isArrayLadiPage(t.product.options) && t.product.options.forEach(function(e) {
                    if (isArrayLadiPage(e.values) && 0 != e.values.length) {
                        l += '<div class="ladi-form-item-box">', isEmptyLadiPage(a) || (l += '<div class="ladi-form-item-title">', l += "<span>" + e.name + "</span>", l += '<span class="ladi-form-item-title-value">' + (r ? "" : e.values[0].name) + "</span>", l += "</div>"), l += '<div class="ladi-form-label-container"' + (isObjectLadiPage(t.store_info) && !isNullLadiPage(t.store_info.id) ? ' data-store-id="' + t.store_info.id + '"' : "") + ' data-product-id="' + e.product_id + '" data-product-option-id="' + e.product_option_id + '" data-selected="">';
                        var i = null;
                        isArrayLadiPage(t.product.variants) && (i = t.product.variants[0]);
                        var n = null;
                        isEmptyLadiPage(i) || isStringLadiPage(i.option_ids) && (n = i.option_ids.split("/"));
                        e.values.forEach(function(t, a) {
                            0 == a && (t.type == c.const.PRODUCT_VARIANT_OPTION_TYPE.image ? l += '<div class="ladi-form-label-item image no-value" data-value=""></div>' : t.type == c.const.PRODUCT_VARIANT_OPTION_TYPE.color ? l += '<div class="ladi-form-label-item color no-value" data-value=""></div>' : l += '<div class="ladi-form-label-item text no-value" data-value="">&nbsp;</div>');
                            var o = function(t) {
                                var a = "";
                                return isArrayLadiPage(n) && n.forEach(function(n, o) {
                                    e.product_option_id == n && t == i["option" + (o + 1)] && (a = " selected")
                                }), a
                            }(t.name);
                            if (t.type == c.const.PRODUCT_VARIANT_OPTION_TYPE.image) {
                                var r = t.value;
                                isEmptyLadiPage(r) || !isStringLadiPage(r) || r.startsWith("http://") || r.startsWith("https://") || r.startsWith("//") || (r = "https://" + c.const.STATIC_W_DOMAIN + "/" + r), r = c.getOptimizeImage(r, 100, 100, !1, !1, !1, !0), l += '<div class="ladi-form-label-item image' + o + '" style=\'background-image: url("' + r + '");\' title="' + (t.name_new || t.name) + '" data-value="' + t.name + '"></div>'
                            } else t.type == c.const.PRODUCT_VARIANT_OPTION_TYPE.color ? l += '<div class="ladi-form-label-item color' + o + "\" style='background-color: " + t.value + ";' title=\"" + (t.name_new || t.name) + '" data-value="' + t.name + '"></div>' : l += '<div class="ladi-form-label-item text' + o + '" data-value="' + t.name + '">' + (t.name_new || t.name) + "</div>"
                        }), l += "</div></div>"
                    }
                })
            }
            return l
        };
    if (!isNullLadiPage(t.dataProduct)) return u(t.dataProduct);
    var p = t["option.form_account_id"],
        m = t["option.product_type"],
        g = t["option.ladisale_store_id"] || null,
        _ = t["option.product_id"],
        y = t["option.data_setting.value"],
        f = t["option.data_setting.type_dataset"],
        v = t["option.data_setting.sort_name"],
        h = t["option.data_setting.sort_by"],
        P = null,
        L = null;
    if (-1 != [c.const.FORM_CONFIG_TYPE.ladisales, c.const.FORM_CONFIG_TYPE.sapo, c.const.FORM_CONFIG_TYPE.haravan, c.const.FORM_CONFIG_TYPE.shopify, c.const.FORM_CONFIG_TYPE.wordpress].indexOf(m)) {
        if (!isEmptyLadiPage(_)) {
            isEmptyLadiPage(c.runtime.tmp.product_info[m]) && (c.runtime.tmp.product_info[m] = {}), isEmptyLadiPage(c.runtime.tmp.timeout_product_info[m]) && (c.runtime.tmp.timeout_product_info[m] = {});
            var E = _;
            if (_ = parseInt(_) || _, P = c.runtime.tmp.product_info[m][_], L = function() {
                    return u(P)
                }, isNullLadiPage(P)) {
                c.runtime.tmp.product_info[m][_] = !0;
                var A = function() {
                        c.runtime.tmp.product_info[m][_] = !1, isEmptyLadiPage(c.runtime.tmp.timeout_product_info[m][_]) || (c.removeTimeout(c.runtime.tmp.timeout_product_info[m][_]), delete c.runtime.tmp.timeout_product_info[m][_])
                    },
                    b = function(t) {
                        if (P = isObjectLadiPage(c.runtime.tmp.product_info[m][_]) ? c.runtime.tmp.product_info[m][_] : t.data, isObjectLadiPage(P)) {
                            if (!isObjectLadiPage(P.store_info)) {
                                var e = c.runtime.currency;
                                c.runtime.isClient || (e = window.$rootScope.getStoreCurrency()), P.store_info = {
                                    currency: {
                                        code: e,
                                        symbol: c.formatCurrency(null, e, !1, !0)
                                    }
                                }
                            }
                            if (m != c.const.FORM_CONFIG_TYPE.ladisales && (P.store_info.id = -1), isObjectLadiPage(P.store_info.currency) && !isEmptyLadiPage(P.store_info.currency.code) && (P.store_info.currency.symbol = c.formatCurrency(null, P.store_info.currency.code, !1, !0)), isObjectLadiPage(P.product) && isArrayLadiPage(P.product.options) && isArrayLadiPage(P.product.variants)) {
                                var i = P.product.options.map(function(t) {
                                    return t.product_option_id
                                });
                                if (i = i.join("/"), -1 != [c.const.FORM_CONFIG_TYPE.ladisales].indexOf(m) && 1 == P.product.options.length && isObjectLadiPage(P.product.options[0]) && isArrayLadiPage(P.product.options[0].values) && P.product.variants.length == P.product.options[0].values.length && (P.product.type == c.const.PRODUCT_TYPE.event || P.product.type == c.const.PRODUCT_TYPE.service)) {
                                    for (var a = [], n = 0; n < P.product.variants.length; n++)
                                        for (var o = 0; o < P.product.options[0].values.length; o++)
                                            if (isObjectLadiPage(P.product.options[0].values[o]) && P.product.options[0].values[o].name == P.product.variants[n].option1) {
                                                a.push(P.product.options[0].values[o]);
                                                break
                                            } P.product.options[0].values = a
                                }
                                for (var r = 0; r < P.product.variants.length; r++) - 1 != [c.const.FORM_CONFIG_TYPE.ladisales].indexOf(m) && 1 == P.product.variants[r].allow_sold_out && (P.product.variants[r].inventory_checked = 0), isNullLadiPage(P.product.variants[r].compare_price) && (P.product.variants[r].compare_price = P.product.variants[r].price_compare), isNullLadiPage(P.product.variants[r].variant_start_date) && (P.product.variants[r].variant_start_date = P.product.variants[r].start_date), isNullLadiPage(P.product.variants[r].variant_end_date) && (P.product.variants[r].variant_end_date = P.product.variants[r].end_date), isNullLadiPage(P.product.variants[r].variant_timezone) && (P.product.variants[r].variant_timezone = P.product.variants[r].timezone), isEmptyLadiPage(P.product.variants[r].option_ids) && (P.product.variants[r].option_ids = i), -1 != [c.const.FORM_CONFIG_TYPE.sapo, c.const.FORM_CONFIG_TYPE.haravan, c.const.FORM_CONFIG_TYPE.shopify].indexOf(m) && 1 == P.product.variants.length && "Default Title" == P.product.variants[r].title && (P.product.variants[r].title = null, P.product.variants[r].option1 = null, P.product.options = []), -1 != [c.const.FORM_CONFIG_TYPE.wordpress].indexOf(m) && 1 == P.product.variants.length && P.product.variants[r].title == P.product.variants[r].product_name && (P.product.variants[r].title = null, P.product.variants[r].option1 = null, P.product.options = []), isEmptyLadiPage(P.product.variants[r].package_quantity) || isEmptyLadiPage(P.product.variants[r].package_quantity_unit) || (isNullLadiPage(P.product.variants[r].title_old) && (P.product.variants[r].title_old = P.product.variants[r].title), P.product.variants[r].title = P.product.variants[r].title_old + " (" + P.product.variants[r].package_quantity + " " + P.product.variants[r].package_quantity_unit + ")");
                                if (isArrayLadiPage(P.product.options) && 1 == P.product.options.length && isArrayLadiPage(P.product.options[0].values))
                                    for (var l = null, u = function(t) {
                                            return t.option1 == l
                                        }, p = 0; p < P.product.options[0].values.length; p++) {
                                        l = P.product.options[0].values[p].name;
                                        var g = P.product.variants.find(u);
                                        P.product.options[0].values[p].name_new = P.product.options[0].values[p].label || P.product.options[0].values[p].name, isEmptyLadiPage(g) || isEmptyLadiPage(g.package_quantity) || isEmptyLadiPage(g.package_quantity_unit) || (P.product.options[0].values[p].name_new = P.product.options[0].values[p].name_new + " (" + g.package_quantity + " " + g.package_quantity_unit + ")")
                                    }
                            }
                            c.runtime.tmp.product_info[m][_] = P, s = L(), isFunctionLadiPage(d) && d(s)
                        } else A()
                    },
                    T = {
                        product_id: _
                    },
                    w = null,
                    S = "POST";
                return c.runLimitRequest(20, function() {
                    if (c.runtime.isClient) {
                        var t = "",
                            e = c.const.API_LADISALE_SHOW_PRODUCT;
                        m == c.const.FORM_CONFIG_TYPE.ladisales ? ((w = {
                            "Content-Type": "application/json"
                        })["Store-Id"] = g, t = JSON.stringify([E, m, g]), T = JSON.stringify(T)) : m == c.const.FORM_CONFIG_TYPE.wordpress ? (S = "GET", e = window.location.origin + "/ladipage/api?action=product_info&product_id=" + _, T = null) : (w = {
                            "Content-Type": "application/json"
                        }, e = c.const.API_SHOW_PRODUCT, T = {
                            form_account_id: p,
                            product_id: _
                        }, t = JSON.stringify([T.form_account_id, E, m]), T = JSON.stringify(T)), !isEmptyLadiPage(t) && isObjectLadiPage(c.runtime.tmp.product_data_website) && isObjectLadiPage(c.runtime.tmp.product_data_website[t]) ? b({
                            data: c.runtime.tmp.product_data_website[t]
                        }) : c.sendRequest(S, e, T, !0, w, function(t, e, i) {
                            if (i.readyState == XMLHttpRequest.DONE) try {
                                var a = JSON.parse(t);
                                b(a)
                            } catch (t) {
                                A()
                            }
                        })
                    } else {
                        var i = function(t) {
                                isNullLadiPage(t) || b({
                                    data: t
                                })
                            },
                            a = LadiPage.getProductInfo(p, _, function(t) {
                                i(t)
                            });
                        i(a)
                    }
                }), s
            }!0 === P ? c.runtime.tmp.timeout_product_info[m][_] = c.runTimeout(function() {
                c.generateVariantProduct(t, e, i, a, n, o, r, !1, d)
            }, 100) : (s = L(), !l && isFunctionLadiPage(d) && d(s))
        }
    } else if (!isEmptyLadiPage(_)) {
        if (isEmptyLadiPage(c.runtime.tmp.product_info[m]) && (c.runtime.tmp.product_info[m] = {}), isEmptyLadiPage(c.runtime.tmp.timeout_product_info[m]) && (c.runtime.tmp.timeout_product_info[m] = {}), _ = String(_), P = c.runtime.tmp.product_info[m][_], L = function() {
                return e ? "" : isObjectLadiPage(P) ? P : null
            }, isNullLadiPage(P)) return c.runtime.tmp.product_info[m][_] = !0, c.loadDataset(y, y, f, v, h, !0, c.runtime.isClient, function(t) {
            s = L(), isFunctionLadiPage(d) && d(s)
        }), s;
        !0 === P ? c.runtime.tmp.timeout_product_info[m][_] = c.runTimeout(function() {
            c.generateVariantProduct(t, e, i, a, n, o, r, !1, d)
        }, 100) : (s = L(), !l && isFunctionLadiPage(d) && d(s))
    }
    return s
}, LadiPageScriptV2.prototype.generateVariantContentString = function(t, e, i, a) {
    var n = [];
    i = isEmptyLadiPage(i) ? " | " : i;
    try {
        isEmptyLadiPage(t) || (e && (t = Base64.decode(t)), t = JSON.parse(t), isArrayLadiPage(t.dynamic_content.hide) && t.dynamic_content.hide.length > 0 && n.push(this.const.LANG.HIDE_ELEMENT + " " + t.dynamic_content.hide.join(", ")), isArrayLadiPage(t.dynamic_content.show) && t.dynamic_content.show.length > 0 && n.push(this.const.LANG.SHOW_ELEMENT + " " + t.dynamic_content.show.join(", ")), isArrayLadiPage(t.dynamic_content.top) && t.dynamic_content.top.length > 0 && n.push(this.const.LANG.TOP_ELEMENT + " " + t.dynamic_content.top.join(", ")), isArrayLadiPage(t.dynamic_content.scroll) && t.dynamic_content.scroll.length > 0 && n.push(this.const.LANG.SCROLL_ELEMENT + " " + t.dynamic_content.scroll.join(", ")), isArrayLadiPage(t.dynamic_content.cookie) && t.dynamic_content.cookie.length > 0 && n.push(this.const.LANG.SET_COOKIE + " " + t.dynamic_content.cookie.join("; ")))
    } catch (t) {}
    return a ? n : n.join(i)
}, LadiPageScriptV2.prototype.checkDataTypeWebsiteValue = function(t) {
    return t == this.const.DATA_TYPE.list_category || t == this.const.DATA_TYPE.list_tag || t == this.const.DATA_TYPE.list_post_by_category || t == this.const.DATA_TYPE.list_post_by_tag || t == this.const.DATA_TYPE.list_post_by_keyword
}, LadiPageScriptV2.prototype.loadCollectionData = function(t, e, i, a, n, o) {
    var r = this,
        l = function(t, e, i, a, n, o) {
            var d = !isEmptyLadiPage(e["option.product_mapping_name"]),
                s = JSON.stringify(e),
                c = null,
                u = null;
            if (d)
                if (a && isEmptyLadiPage(i)) c = "";
                else if (!isEmptyLadiPage(e["option.product_id"]) && s === (c = (u = r.generateProductKey(!0, s, !0, e, !0, i, null, function(r) {
                    l(t, e, i, a, n, o)
                })).value)) return;
            var p = e.type,
                m = null,
                g = null;
            if (d && "headline" == p && (g = t.getElementsByClassName("ladi-headline")[0], isEmptyLadiPage(g) || (g.innerHTML = isNullLadiPage(c) ? "" : c)), d && "paragraph" == p && (g = t.getElementsByClassName("ladi-paragraph")[0], isEmptyLadiPage(g) || (g.innerHTML = isNullLadiPage(c) ? "" : c)), d && "image" == p) {
                m = r.getOptimizeImage(c, t.clientWidth, t.clientHeight, !0, !1, !1, !0);
                var _ = t.getElementsByClassName("ladi-image-background")[0];
                isEmptyLadiPage(_) || (isEmptyLadiPage(m) ? _.style.setProperty("background-image", "none") : _.style.setProperty("background-image", 'url("' + m + '")'))
            }
            if ("gallery" == p) {
                if (d && !isArrayLadiPage(c)) return;
                if (o && !n && "true" == t.getAttribute("data-collection")) return void r.runtime.tmp.updateImageGalleryProduct(t, u, e);
                t.setAttribute("data-collection", !0), t.removeAttribute("data-stop"), t.removeAttribute("data-loaded"), t.removeAttribute("data-scrolled"), t.removeAttribute("data-current"), t.removeAttribute("data-is-next"), t.removeAttribute("data-runtime-id"), t.removeAttribute("data-next-time");
                var y = t.querySelector(".ladi-gallery-view-item.selected");
                isEmptyLadiPage(y) || y.classList.remove("selected");
                var f = t.querySelector(".ladi-gallery-control-item.selected");
                isEmptyLadiPage(f) || f.classList.remove("selected");
                var v = t.getElementsByClassName("ladi-gallery-view")[0];
                f = t.getElementsByClassName("ladi-gallery-control-item")[0], y = t.getElementsByClassName("ladi-gallery-view-item")[0], isEmptyLadiPage(y) || y.classList.add("selected"), isEmptyLadiPage(f) || f.classList.add("selected");
                var h = t.getElementsByClassName("ladi-gallery-control-box")[0];
                if (isEmptyLadiPage(h) || h.style.removeProperty("left"), d) {
                    for (var P = t.getElementsByClassName("ladi-gallery-view-item"); P.length < c.length;) {
                        var L = r.createTmpElement("div", '<div class="ladi-gallery-view-item" data-index="' + P.length + '"></div>', null, !0);
                        t.getElementsByClassName("ladi-gallery-view")[0].appendChild(L)
                    }
                    for (; P.length > c.length;) P[P.length - 1].parentElement.removeChild(P[P.length - 1]);
                    for (var E = t.getElementsByClassName("ladi-gallery-control-item"), A = function(e) {
                            r.runtime.tmp.eventClickGalleryControlItem(e, t)
                        }; E.length < c.length;) {
                        var b = r.createTmpElement("div", '<div class="ladi-gallery-control-item" data-index="' + E.length + '"></div>', null, !0);
                        b.addEventListener("click", A), t.getElementsByClassName("ladi-gallery-control-box")[0].appendChild(b)
                    }
                    for (; E.length > c.length;) E[E.length - 1].parentElement.removeChild(E[E.length - 1]);
                    for (var T = t.querySelectorAll(".ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow"), w = 0; w < T.length; w++) c.length <= 1 ? T[w].style.setProperty("display", "none") : T[w].style.removeProperty("display");
                    for (T = t.querySelectorAll(".ladi-gallery > .ladi-gallery-control"), w = 0; w < T.length; w++) c.length <= 1 ? T[w].style.setProperty("display", "none") : T[w].style.removeProperty("display");
                    for (T = t.querySelectorAll(".ladi-gallery > .ladi-gallery-view"), w = 0; w < T.length; w++) c.length <= 1 ? T[w].style.setProperty("height", "100%") : T[w].style.removeProperty("height");
                    c.forEach(function(e, i) {
                        m = e.src, isEmptyLadiPage(v) || (m = r.getOptimizeImage(e.src, v.clientWidth, v.clientHeight, !0, !1, !1, r.runtime.isClient));
                        var a = t.querySelector('.ladi-gallery .ladi-gallery-view-item[data-index="' + i + '"]');
                        isEmptyLadiPage(a) || a.style.setProperty("background-image", 'url("' + m + '")'), isEmptyLadiPage(f) || (m = r.getOptimizeImage(e.src, f.clientWidth, f.clientHeight, !0, !1, !1, r.runtime.isClient)), a = t.querySelector('.ladi-gallery .ladi-gallery-control-item[data-index="' + i + '"]'), isEmptyLadiPage(a) || a.style.setProperty("background-image", 'url("' + m + '")')
                    }), r.runTimeout(function() {
                        t.setAttribute("data-loaded", !0)
                    }, 300)
                }
                r.runtime.tmp.runGallery(t.id, t, !0, p), r.runtime.tmp.setGalleryStart(t.id, t)
            }
            "countdown_item" == p && r.runtime.tmp.runOptionCountdownItem(t.id, t, p, e["option.countdown_item_type"]), "countdown" == p && r.runtime.tmp.runOptionCountdown(t.id, t, p, e["option.countdown_type"], e["option.countdown_minute"], e["option.countdown_daily_start"], e["option.countdown_daily_end"], e["option.countdown_endtime"])
        };
    if ((o = isObjectLadiPage(o) ? o : {}).only_set_value_doc) return l(o.docItem, o.elementJ, o.product_variant_id, o.is_product_variant_id, o.isFirst, o.is_select_change);
    var d = e["option.product_type"],
        s = e["option.ladisale_store_id"],
        c = e["option.product_tag_id"],
        u = e["option.collection_setting.type"],
        p = e["option.data_setting.type"],
        m = document,
        g = r.runtime.eventData[t];
    if (o.is_generate_template && (m = o.dom, g = o.getEventData(t)), !isEmptyLadiPage(g) && "collection" == g.type) {
        var _ = this.runtime.isDesktop ? this.const.DESKTOP : this.const.MOBILE;
        o.is_generate_template && (_ = o.device);
        var y = g[_ + ".option.collection_setting.list_type"],
            f = parseFloatLadiPage(g[_ + ".option.collection_setting.row"]) || 0,
            v = parseFloatLadiPage(g[_ + ".option.collection_setting.column"]) || 0,
            h = parseFloatLadiPage(g[_ + ".option.collection_setting.margin"]) || 0,
            P = function(t, e, i, a, n, l) {
                if (i = r.copy(i), Object.keys(a).forEach(function(t) {
                        i[t] = a[t]
                    }), a["option.input_type"] == r.const.INPUT_TYPE.product_variant) {
                    var d = r.generateVariantProduct(i, !0, a["option.product_variant_type"], a["option.product_variant_title"], a["option.product_variant_price"], a["option.input_tabindex"], r.runtime.isClient, !0, function(o) {
                            P(t, e, i, a, n, l)
                        }),
                        s = function(e) {
                            r.updateProductVariantSelectOption(e, i, a, !1, function() {
                                var i = r.getProductVariantId(e.target, n),
                                    a = n.variants.findIndex(function(t) {
                                        return t.product_variant_id == i
                                    }),
                                    d = r.findAncestor(e.target, "ladi-element");
                                if (!isEmptyLadiPage(d)) {
                                    var s = r.findAncestor(d, "ladi-collection-item");
                                    if (!isEmptyLadiPage(s))
                                        for (var c = s.querySelectorAll('[data-variant="true"]'), u = 0; u < c.length; u++)
                                            if (c[u].id != d.id) {
                                                var p = r.runtime.eventData[c[u].id];
                                                o.is_generate_template && (p = o.getEventData(c[u].id));
                                                var m = null,
                                                    g = null,
                                                    _ = null,
                                                    y = 0;
                                                if (p["option.product_variant_type"] == r.const.PRODUCT_VARIANT_TYPE.combobox && (g = n.variants[a], isObjectLadiPage(g) && isStringLadiPage(g.option_ids)))
                                                    for (_ = g.option_ids.split("/"), y = 0; y < _.length; y++) m = c[u].querySelector('select[data-product-option-id="' + _[y] + '"]'), isEmptyLadiPage(m) || (m.value = g["option" + (y + 1)]);
                                                if (p["option.product_variant_type"] == r.const.PRODUCT_VARIANT_TYPE.label && (g = n.variants[a], isObjectLadiPage(g) && isStringLadiPage(g.option_ids)))
                                                    for (_ = g.option_ids.split("/"), y = 0; y < _.length; y++) m = c[u].querySelector('.ladi-form-label-container[data-product-option-id="' + _[y] + '"]'), isEmptyLadiPage(m) || r.runtime.tmp.updateLabelValue(m, g["option" + (y + 1)]);
                                                if (p["option.product_variant_type"] == r.const.PRODUCT_VARIANT_TYPE.combined) {
                                                    if (m = c[u].querySelector("select.ladi-form-control"), !isEmptyLadiPage(i)) {
                                                        var f = m.querySelector('option[data-product-variant-id="' + i + '"]');
                                                        isEmptyLadiPage(f) || (a = f.getAttribute("value"))
                                                    }
                                                    m.value = (-1 == a ? "" : a) + ""
                                                }
                                            }
                                }
                                l(t, n, !1, i, !0, !0)
                            })
                        },
                        c = r.runtime.tmp.getOptionLabelValue,
                        u = r.runtime.tmp.updateLabelValue,
                        p = r.runtime.tmp.getLabelValue,
                        m = function(t) {
                            r.runtime.tmp.clickLabelProductChangeCallback(t, function(t) {
                                s({
                                    target: t
                                })
                            })
                        };
                    r.showParentVisibility(e, function() {
                        for (var t = e.clientHeight, n = t, o = e.querySelectorAll("select.ladi-form-control"), l = {}, g = 0; g < o.length; g++) l[o[g].getAttribute("data-store-id") + "_" + o[g].getAttribute("data-product-id") + "_" + o[g].getAttribute("data-product-option-id")] = o[g].value;
                        var _ = e.querySelectorAll(".ladi-form-label-container");
                        for (g = 0; g < _.length; g++) l[_[g].getAttribute("data-store-id") + "_" + _[g].getAttribute("data-product-id") + "_" + _[g].getAttribute("data-product-option-id")] = p(_[g]);
                        e.innerHTML = d;
                        for (var y = e.querySelectorAll("select.ladi-form-control"), f = null, v = null, h = 0; h < y.length; h++) y[h].removeEventListener("change", s), y[h].addEventListener("change", s), f = l[y[h].getAttribute("data-store-id") + "_" + y[h].getAttribute("data-product-id") + "_" + y[h].getAttribute("data-product-option-id")], isNullLadiPage(f) && (v = y[h].querySelector("option"), isEmptyLadiPage(v) || (f = v.getAttribute("value"))), y[h].value = f;
                        var P = e.querySelectorAll(".ladi-form-label-container");
                        for (h = 0; h < P.length; h++) {
                            for (var L = P[h].querySelectorAll(".ladi-form-label-item"), E = 0; E < L.length; E++) r.tapEventListener(L[E], m);
                            f = l[P[h].getAttribute("data-store-id") + "_" + P[h].getAttribute("data-product-id") + "_" + P[h].getAttribute("data-product-option-id")], isNullLadiPage(f) && (v = L[1], isEmptyLadiPage(v) || (f = c(v))), u(P[h], f)
                        }
                        if (r.updateProductVariantSelectOptionFirst(i, a, e), a["option.product_variant_type"] != r.const.PRODUCT_VARIANT_TYPE.combined && (e.style.setProperty("height", "auto"), n = e.clientHeight, e.style.removeProperty("height"), n > 0 && t != n)) {
                            e.style.setProperty("height", n + "px");
                            var A = r.findAncestor(e, "ladi-form");
                            isEmptyLadiPage(A) || (A = r.findAncestor(A, "ladi-element"), r.updateHeightElement(!0, e, A, t, n))
                        }
                    })
                }
                if (a["option.input_type"] == r.const.INPUT_TYPE.number) {
                    var g = e.querySelector('input[name="quantity"]'),
                        _ = function(t) {
                            if (!isEmptyLadiPage(t.target.value)) {
                                var e = r.generateVariantProduct(i, !1, null, null, null, null, !0, !0, function() {
                                    _(t)
                                });
                                if (!(isEmptyLadiPage(e) || isEmptyLadiPage(e.store_info) || isEmptyLadiPage(e.product))) {
                                    var a = t.target;
                                    a = (a = r.findAncestor(a, "ladi-form")).querySelector('[data-variant="true"]');
                                    var n = r.getProductVariantId(a, e.product),
                                        o = e.product.variants.findIndex(function(t) {
                                            return t.product_variant_id == n
                                        });
                                    if (-1 != o) {
                                        var l = e.product.variants[o].quantity,
                                            d = e.product.variants[o].quantity_stock;
                                        l = isNullLadiPage(d) ? l : d;
                                        var s = parseInt(t.target.value) || 0,
                                            c = 1;
                                        c = e.product.variants[o].min_buy || c;
                                        var u = e.product.variants[o].max_buy,
                                            p = 0,
                                            m = r.runtime.tmp.cart.findIndex(function(t) {
                                                return t.product_id == e.product.variants[o].product_id && t.product_variant_id == e.product.variants[o].product_variant_id
                                            }); - 1 != m && (p = r.runtime.tmp.cart[m].quantity), c > s + p && (s = c - p), 1 == e.product.variants[o].inventory_checked && s + p > l && (s = l - p), !isEmptyLadiPage(u) && s + p > u && (s = u - p), s = s < 1 ? 1 : s, t.target.setAttribute("min", c), isEmptyLadiPage(u) || t.target.setAttribute("max", u), t.target.value = s
                                    }
                                }
                            }
                        };
                    g.addEventListener("input", _), r.fireEvent(g, "input");
                    var y = e.querySelectorAll(".button")[0],
                        f = e.querySelectorAll(".button")[1];
                    if (isEmptyLadiPage(y) || isEmptyLadiPage(f)) return;
                    y.addEventListener("click", function(t) {
                        r.removeTimeout(r.runtime.tmp.timeout_button_quantity_cart_id), r.runtime.tmp.timeout_button_quantity_cart_id = r.runTimeout(function() {
                            g.value = (parseFloatLadiPage(g.value) || 0) - 1, r.fireEvent(g, "input")
                        }, 10)
                    }), f.addEventListener("click", function(t) {
                        r.removeTimeout(r.runtime.tmp.timeout_button_quantity_cart_id), r.runtime.tmp.timeout_button_quantity_cart_id = r.runTimeout(function() {
                            g.value = (parseFloatLadiPage(g.value) || 0) + 1, r.fireEvent(g, "input")
                        }, 10)
                    })
                }
                if ("button" == a.type && (a["option.is_buy_now"] || a["option.is_add_to_cart"])) {
                    var v = function() {
                        var t = i["option.data_event"];
                        if (!isArrayLadiPage(t) && (t = [], isObjectLadiPage(i["option.data_action"]))) {
                            var a = r.copy(i["option.data_action"]);
                            a.action_type = r.const.ACTION_TYPE.action, t.push(a)
                        }
                        t.forEach(function(t) {
                            t.action_type == r.const.ACTION_TYPE.action && (t.type == r.const.DATA_ACTION_TYPE.popup_cart && (window.ladi("POPUP_CART").show(), r.runEventTracking(e.id, {
                                is_form: !1
                            })), t.type == r.const.DATA_ACTION_TYPE.popup_checkout && (r.runtime.shopping_third_party ? r.getThirdPartyCheckoutUrl(!0, null, {
                                event: {
                                    target: e
                                }
                            }) : window.ladi("POPUP_CHECKOUT").show(!1, {
                                event: {
                                    target: e
                                }
                            }), r.runEventTracking(e.id, {
                                is_form: !1
                            })))
                        })
                    };
                    e.setAttribute("data-click", !1), e.addEventListener("click", function(t) {
                        r.runtime.tmp.buttonAddToCartClick(t, !0, i, v)
                    })
                }
            },
            L = function(t, e) {
                var g = f * v;
                r.checkDataTypeWebsiteValue(p) && isEmptyLadiPage(u) && (y != r.const.COLLECTION_LIST_TYPE.horizontal && y != r.const.COLLECTION_LIST_TYPE.vertical || (g = 1e3));
                var _ = null;
                if (_ = r.getListProductByTagId(e, g, i, !0, function() {
                        L(t, e)
                    }), isObjectLadiPage(_) && isArrayLadiPage(_.products)) {
                    var E = m.getElementById(t);
                    if (isEmptyLadiPage(E)) return;
                    if (E.getAttribute("data-page") == i && 1 != i) return;
                    var A = i,
                        b = !1,
                        T = !1;
                    if (!isEmptyLadiPage(_.total_record) && i * g >= _.total_record) {
                        if (u == r.const.COLLECTION_TYPE.readmore) {
                            var w = E.getElementsByClassName("ladi-collection-button-next")[0];
                            isEmptyLadiPage(w) || w.setAttribute("data-opacity", "0")
                        }
                        E.setAttribute("data-max-page", A), b = !0, i * g > _.total_record && (T = !0)
                    }
                    E.setAttribute("data-page", i > A ? A : i);
                    var S = E.getElementsByClassName("ladi-collection-arrow-left")[0],
                        O = E.getElementsByClassName("ladi-collection-arrow-right")[0],
                        C = E.getElementsByClassName("ladi-collection-button-next")[0];
                    if (isEmptyLadiPage(S) || S.classList.remove("opacity-0"), isEmptyLadiPage(O) || O.classList.remove("opacity-0"), isEmptyLadiPage(C) || C.classList.remove("opacity-0"), 1 == E.getAttribute("data-page") && u == r.const.COLLECTION_TYPE.carousel && (isEmptyLadiPage(S) || S.classList.add("opacity-0")), E.getAttribute("data-page") == E.getAttribute("data-max-page") && (u == r.const.COLLECTION_TYPE.readmore && (isEmptyLadiPage(C) || C.classList.add("opacity-0")), u == r.const.COLLECTION_TYPE.carousel && (isEmptyLadiPage(O) || O.classList.add("opacity-0"))), A < i) return;
                    var I = E.getElementsByClassName("ladi-collection-item");
                    if (0 == I.length) return;
                    var N = 0,
                        k = 0;
                    if (E.hasAttribute("data-max-option-length")) N = parseFloatLadiPage(E.getAttribute("data-max-option-length"));
                    else {
                        var x = E.querySelectorAll('.ladi-form [data-variant="true"]');
                        for (k = 0; k < x.length; k++) {
                            var D = x[k].getElementsByClassName("ladi-form-item-box");
                            D.length > N && (N = D.length)
                        }
                    }
                    var R = E.getElementsByClassName("ladi-collection-content")[0],
                        B = {
                            className: I[0].className,
                            innerHTML: I[0].innerHTML
                        };
                    a && I[0].parentElement.removeChild(I[0]);
                    for (var F = R.getElementsByClassName("ladi-collection-page"); F.length < i;) {
                        var M = document.createElement("div");
                        M.className = "ladi-collection-page", R.appendChild(M)
                    }
                    var q = F[i - 1],
                        V = q.getElementsByClassName("ladi-collection-item");
                    if (V.length != _.products.length)
                        for (; V.length > 0;) V[0].parentElement.removeChild(V[0]);
                    var Y = function(t, i, a, n, u, p) {
                        isEmptyLadiPage(i.id) && !isEmptyLadiPage(i.product_id) && (i.id = i.product_id);
                        for (var m = 0; m < t.length; m++) {
                            a && isFunctionLadiPage(r.runtime.tmp.runElementClickSelected) && r.runtime.tmp.runElementClickSelected(t[m], !0);
                            var g = r.copy(r.runtime.eventData[t[m].id]);
                            o.is_generate_template && (g = o.getEventData(t[m].id)), isEmptyLadiPage(g) || (r.runAnimationDoc(t[m], g, {
                                element_type: g.type
                            }), g["option.product_type"] = d, g["option.ladisale_store_id"] = s, g["option.product_tag_id"] = c, g["option.product_id"] = i.id, a && (isFunctionLadiPage(r.runtime.tmp.runOptionAction) && r.runtime.tmp.runOptionAction(t[m], t[m].id, g.type, g), isFunctionLadiPage(r.runtime.tmp.runOptionHover) && r.runtime.tmp.runOptionHover(t[m], t[m].id, g.type, g["option.data_event"] || g["option.data_hover"]), P(t, t[m], e, g, i, Y)), l(t[m], g, n, u, a, p))
                        }
                    };
                    for (k = 0; k < _.products.length; k++) isArrayLadiPage(_.products[k].options) && _.products[k].options.length > N && (N = _.products[k].options.length);
                    for (E.setAttribute("data-max-option-length", N), k = 0; k < _.products.length; k++)
                        if (!(V.length > k)) {
                            var U = document.createElement("div");
                            U.className = B.className, q.appendChild(U), U.innerHTML = B.innerHTML;
                            for (var j = U.getElementsByClassName("ladi-element"); isArrayLadiPage(_.products[k].options) && _.products[k].options.length < N;) _.products[k].options.push({
                                is_tmp: !0
                            });
                            Y(j, _.products[k], !0, null, !1, !1)
                        } b && (q.classList.add("last"), T && q.classList.add("not-full")), u == r.const.COLLECTION_TYPE.carousel && function(t) {
                        var e = m.getElementById(t);
                        if (!isEmptyLadiPage(e) && e.hasAttribute("data-page")) {
                            var i = "0",
                                a = getComputedStyle(e).width,
                                n = a,
                                o = parseFloatLadiPage(e.getAttribute("data-page")) || 1,
                                l = e.getElementsByClassName("ladi-collection-content")[0].getElementsByClassName("ladi-collection-page"),
                                d = l[l.length - 1].getElementsByClassName("ladi-collection-item"),
                                s = v - d.length,
                                c = "",
                                u = "";
                            s > 0 ? (n = "calc(" + a + " * " + l.length + " - (" + a + " / " + v + " * " + s + ") + calc(" + h + "px / " + v + " * " + d.length + "))", o > 1 && (o != l.length ? i = "calc(-" + a + " * " + (o - 1) + ")" : (i = "calc(-" + a + " * " + (o - 1) + " + (" + a + " / " + v + " * " + s + "))", u = "margin-left: calc(-" + h + "px / " + v + " * " + d.length + ");")), c += "#" + t + " .ladi-collection .ladi-collection-content .ladi-collection-page.last.not-full .ladi-collection-item:first-child {", c += "margin-left: " + h + "px;", c += "}", c += "#" + t + " .ladi-collection-content .ladi-collection-page.last {", c += "width: calc(" + getComputedStyle(e).width + " / " + v + " * " + d.length + " + calc(" + h + "px / " + v + " * " + d.length + "));", c += "}") : (o > 1 && (i = "calc(-" + a + " * " + (o - 1) + ")"), n = "calc(" + a + " * " + l.length + ")");
                            var p = "style_collection_" + t,
                                g = m.getElementById(p);
                            isEmptyLadiPage(g) || g.parentElement.removeChild(g);
                            var _ = "#" + t + " .ladi-collection-content {";
                            _ += "width: " + n + ";", _ += "left: " + i + ";", _ += u, _ += "}", _ += c, r.createStyleElement(p, _)
                        }
                    }(t), n && u == r.const.COLLECTION_TYPE.readmore && function(t) {
                        var e = m.getElementById(t);
                        if (!isEmptyLadiPage(e)) {
                            var i = e.getElementsByClassName("ladi-collection-content")[0];
                            if (e.hasAttribute("data-max-page")) {
                                var a = i.querySelector(".ladi-collection-page.last"),
                                    n = a.getElementsByClassName("ladi-collection-item"),
                                    o = Math.ceil(n.length / v);
                                if (f == o) a.style.removeProperty("height");
                                else {
                                    var l = parseFloatLadiPage((parseFloatLadiPage(getComputedStyle(a).height) || 0) * o / f) || 0;
                                    l -= parseFloatLadiPage(h * (f - o) / f) || 0, a.style.setProperty("height", l + "px")
                                }
                            }
                            var d = parseFloatLadiPage(getComputedStyle(e).height) || 0,
                                s = i.scrollHeight;
                            if (d != s) {
                                e.style.setProperty("height", s + "px");
                                var c = r.findAncestor(e.parentElement, "ladi-element");
                                isEmptyLadiPage(c) && (c = r.findAncestor(e.parentElement, "ladi-section")), r.updateHeightElement(!0, e, c, d, s)
                            }
                        }
                    }(t), r.runEventScroll(), r.runResizeAll()
                }
            },
            E = g["option.product_tag_id"],
            A = g["option.data_setting.value"];
        (o.is_generate_template || isArrayLadiPage(E) || !isEmptyLadiPage(A)) && L(t, g)
    }
}, LadiPageScriptV2.prototype.getListProductByTagId = function(t, e, i, a, n) {
    var o = this,
        r = t["option.form_account_id"],
        l = t["option.product_type"],
        d = t["option.ladisale_store_id"] || null,
        s = t["option.product_tag_id"],
        c = t["option.data_setting.value"],
        u = t["option.data_setting.type_dataset"],
        p = t["option.collection_setting.type"],
        m = t["option.data_setting.sort_name"],
        g = t["option.data_setting.sort_by"],
        _ = null,
        y = null,
        f = null,
        v = null,
        h = null;
    if (isArrayLadiPage(s) && s.length > 0) {
        if (isEmptyLadiPage(o.runtime.tmp.product_tag_info[l]) && (o.runtime.tmp.product_tag_info[l] = {}), isEmptyLadiPage(o.runtime.tmp.timeout_product_tag_info[l]) && (o.runtime.tmp.timeout_product_tag_info[l] = {}), s.sort(), f = JSON.stringify(s) + "_page_" + i + "_limit_" + e, v = o.runtime.tmp.product_tag_info[l][f], -1 != [o.const.FORM_CONFIG_TYPE.ladisales, o.const.FORM_CONFIG_TYPE.sapo, o.const.FORM_CONFIG_TYPE.haravan, o.const.FORM_CONFIG_TYPE.shopify, o.const.FORM_CONFIG_TYPE.wordpress].indexOf(l)) {
            y = function() {
                var t = null;
                return isObjectLadiPage(v) && isArrayLadiPage(v.products) && (t = {
                    products: v.products,
                    total_record: v.total_record
                }, isEmptyLadiPage(o.runtime.tmp.product_info[l]) && (o.runtime.tmp.product_info[l] = {}), t.products.forEach(function(t) {
                    o.runtime.tmp.product_info[l][t.product_id] = {
                        store_info: v.store_info,
                        product: t
                    }
                })), t
            };
            var P = null;
            if (isStringLadiPage(v) && (P = v, v = null), isNullLadiPage(v)) {
                o.runtime.tmp.product_tag_info[l][f] = !0;
                var L = function() {
                        o.runtime.tmp.product_tag_info[l][f] = !1, isEmptyLadiPage(o.runtime.tmp.timeout_product_tag_info[l][f]) || (o.removeTimeout(o.runtime.tmp.timeout_product_tag_info[l][f]), delete o.runtime.tmp.timeout_product_tag_info[l][f])
                    },
                    E = function(t) {
                        if (v = t.data, isObjectLadiPage(v)) {
                            if (!isObjectLadiPage(v.store_info)) {
                                var a = o.runtime.currency;
                                o.runtime.isClient || (a = window.$rootScope.getStoreCurrency()), v.store_info = {
                                    currency: {
                                        code: a,
                                        symbol: o.formatCurrency(null, a, !1, !0)
                                    }
                                }
                            }
                            if (l != o.const.FORM_CONFIG_TYPE.ladisales && (v.store_info.id = -1), isObjectLadiPage(v.store_info.currency) && !isEmptyLadiPage(v.store_info.currency.code) && (v.store_info.currency.symbol = o.formatCurrency(null, v.store_info.currency.code, !1, !0)), isArrayLadiPage(v.products))
                                for (var r = null, d = function(t) {
                                        return t.option1 == r
                                    }, c = 0; c < v.products.length; c++)
                                    if (isArrayLadiPage(v.products[c].options) && isArrayLadiPage(v.products[c].variants)) {
                                        var u = v.products[c].options.map(function(t) {
                                            return t.product_option_id
                                        });
                                        if (u = u.join("/"), -1 != [o.const.FORM_CONFIG_TYPE.ladisales].indexOf(l) && 1 == v.products[c].options.length && isObjectLadiPage(v.products[c].options[0]) && isArrayLadiPage(v.products[c].options[0].values) && v.products[c].variants.length == v.products[c].options[0].values.length && (v.products[c].type == o.const.PRODUCT_TYPE.event || v.products[c].type == o.const.PRODUCT_TYPE.service)) {
                                            for (var p = [], m = 0; m < v.products[c].variants.length; m++)
                                                for (var g = 0; g < v.products[c].options[0].values.length; g++)
                                                    if (isObjectLadiPage(v.products[c].options[0].values[g]) && v.products[c].options[0].values[g].name == v.products[c].variants[m].option1) {
                                                        p.push(v.products[c].options[0].values[g]);
                                                        break
                                                    } v.products[c].options[0].values = p
                                        }
                                        for (var h = 0; h < v.products[c].variants.length; h++) - 1 != [o.const.FORM_CONFIG_TYPE.ladisales].indexOf(l) && 1 == v.products[c].variants[h].allow_sold_out && (v.products[c].variants[h].inventory_checked = 0), isNullLadiPage(v.products[c].variants[h].compare_price) && (v.products[c].variants[h].compare_price = v.products[c].variants[h].price_compare), isNullLadiPage(v.products[c].variants[h].variant_start_date) && (v.products[c].variants[h].variant_start_date = v.products[c].variants[h].start_date), isNullLadiPage(v.products[c].variants[h].variant_end_date) && (v.products[c].variants[h].variant_end_date = v.products[c].variants[h].end_date), isNullLadiPage(v.products[c].variants[h].variant_timezone) && (v.products[c].variants[h].variant_timezone = v.products[c].variants[h].timezone), isEmptyLadiPage(v.products[c].variants[h].option_ids) && (v.products[c].variants[h].option_ids = u), -1 != [o.const.FORM_CONFIG_TYPE.sapo, o.const.FORM_CONFIG_TYPE.haravan, o.const.FORM_CONFIG_TYPE.shopify].indexOf(l) && 1 == v.products[c].variants.length && "Default Title" == v.products[c].variants[h].title && (v.products[c].variants[h].title = null, v.products[c].variants[h].option1 = null, v.products[c].options = []), -1 != [o.const.FORM_CONFIG_TYPE.wordpress].indexOf(l) && 1 == v.products[c].variants.length && v.products[c].variants[h].title == v.products[c].variants[h].product_name && (v.products[c].variants[h].title = null, v.products[c].variants[h].option1 = null, v.products[c].options = []), isEmptyLadiPage(v.products[c].variants[h].package_quantity) || isEmptyLadiPage(v.products[c].variants[h].package_quantity_unit) || (isNullLadiPage(v.products[c].variants[h].title_old) && (v.products[c].variants[h].title_old = v.products[c].variants[h].title), v.products[c].variants[h].title = v.products[c].variants[h].title_old + " (" + v.products[c].variants[h].package_quantity + " " + v.products[c].variants[h].package_quantity_unit + ")");
                                        if (isArrayLadiPage(v.products[c].options) && 1 == v.products[c].options.length && isArrayLadiPage(v.products[c].options[0].values))
                                            for (var P = 0; P < v.products[c].options[0].values.length; P++) {
                                                r = v.products[c].options[0].values[P].name;
                                                var E = v.products[c].variants.find(d);
                                                v.products[c].options[0].values[P].name_new = v.products[c].options[0].values[P].label || v.products[c].options[0].values[P].name, isEmptyLadiPage(E) || isEmptyLadiPage(E.package_quantity) || isEmptyLadiPage(E.package_quantity_unit) || (v.products[c].options[0].values[P].name_new = v.products[c].options[0].values[P].name_new + " (" + E.package_quantity + " " + E.package_quantity_unit + ")")
                                            }
                                    } if (isStringLadiPage(v.page_next)) {
                                var A = JSON.stringify(s) + "_page_" + (i + 1) + "_limit_" + e;
                                o.runtime.tmp.product_tag_info[l][A] = v.page_next
                            }
                            o.runtime.tmp.product_tag_info[l][f] = v, _ = y(), isFunctionLadiPage(n) && n(_)
                        } else L()
                    },
                    A = {
                        product_tag_ids: s,
                        limit: e
                    };
                isEmptyLadiPage(p) ? A.type = "group" : A.paged = i, isEmptyLadiPage(m) || isEmptyLadiPage(g) || (A.sort = {}, A.sort[m] = g == o.const.SORT_BY_TYPE.desc ? -1 : 1);
                var b = null,
                    T = "POST";
                return o.runLimitRequest(20, function() {
                    if (o.runtime.isClient) {
                        var a = "",
                            n = o.const.API_LADISALE_COLLECTION_PRODUCT;
                        l == o.const.FORM_CONFIG_TYPE.ladisales ? (a = JSON.stringify([A.product_tag_ids, A.limit, A.type, A.paged, d, l]), (b = {
                            "Content-Type": "application/json"
                        })["Store-Id"] = d, A = JSON.stringify(A)) : l == o.const.FORM_CONFIG_TYPE.wordpress ? (T = "GET", n = window.location.origin + "/ladipage/api?action=product_list&category_ids=" + s.join("|") + "&page=" + i + "&limit=" + e, A = null) : (b = {
                            "Content-Type": "application/json"
                        }, n = o.const.API_COLLECTION_PRODUCT, A = {
                            form_account_id: r,
                            tags: s,
                            limit: e
                        }, isEmptyLadiPage(P) ? A.page = i : A.page_info = P, a = JSON.stringify([A.form_account_id, A.tags, A.limit, A.page_info, A.page, l]), A = JSON.stringify(A)), !isEmptyLadiPage(a) && isObjectLadiPage(o.runtime.tmp.product_data_website) && isObjectLadiPage(o.runtime.tmp.product_data_website[a]) ? E({
                            data: o.runtime.tmp.product_data_website[a]
                        }) : o.sendRequest(T, n, A, !0, b, function(t, e, i) {
                            if (i.readyState == XMLHttpRequest.DONE) try {
                                var a = JSON.parse(t);
                                E(a)
                            } catch (t) {
                                L()
                            }
                        })
                    } else {
                        var c = function(t) {
                                if (isArrayLadiPage(t) && t.length > 1) {
                                    var e = {
                                        products: []
                                    };
                                    t.forEach(function(t) {
                                        if (isNullLadiPage(t.product) && !isNullLadiPage(t.store_info) && !isNullLadiPage(t.total_record)) return e.store_info = t.store_info, void(e.total_record = t.total_record);
                                        isNullLadiPage(t.product) || e.products.push(t.product)
                                    }), E({
                                        data: e
                                    })
                                }
                            },
                            u = LadiPage.mapping_attribute_option_product_id(t.element, "", !1, s, e, i, !0, function(t) {
                                c(t)
                            });
                        c(u)
                    }
                }), _
            }
        }
    } else isEmptyLadiPage(c) || (y = function() {
        var t = null;
        if (isArrayLadiPage(h)) {
            var a = o.copy(h);
            t = {
                products: a = a.splice((i - 1) * e, e),
                total_record: h.length
            }, isEmptyLadiPage(o.runtime.tmp.product_info[l]) && (o.runtime.tmp.product_info[l] = {}), h.forEach(function(t) {
                o.runtime.tmp.product_info[l][t.id] = {
                    store_info: {},
                    product: t
                }
            })
        }
        return t
    }, h = o.loadDataset(c, c, u, m, g, !0, o.runtime.isClient, function(t) {
        h = t, _ = y(), isFunctionLadiPage(n) && n(_)
    }));
    return isFunctionLadiPage(y) && (!0 === v ? o.runtime.tmp.timeout_product_tag_info[l][f] = o.runTimeout(function() {
        o.getListProductByTagId(t, e, i, !1, n)
    }, 100) : (_ = y(), !a && isFunctionLadiPage(n) && n(_))), _
}, LadiPageScriptV2.prototype.changeTotalPriceCart = function(t) {
    var e = 0,
        i = 0;
    this.runtime.tmp.cart.forEach(function(t) {
        i += t.quantity, isObjectLadiPage(t.promotion) ? e += t.promotion.total : e += t.price * t.quantity
    }), e = e < 0 ? 0 : e;
    var a = this.runtime.tmp.add_to_cart_fee_shipping || 0,
        n = this.runtime.tmp.add_to_cart_discount || 0,
        o = e + a - n;
    if (o = o < 0 ? 0 : o, t) return {
        cart_price: e,
        cart_checkout_price: o,
        cart_fee_shipping: a,
        cart_discount: n,
        total_quantity: i
    };
    var r = this.formatNumber(e, 3),
        l = this.formatNumber(o, 3),
        d = this.formatNumber(a, 3),
        s = this.formatNumber(n, 3);
    if (this.runtime.tmp.cart.length > 0 && !isEmptyLadiPage(this.runtime.tmp.cart[0].currency) && !isEmptyLadiPage(this.runtime.tmp.cart[0].currency.symbol)) {
        var c = this.runtime.tmp.cart[0].currency.symbol;
        r = this.formatCurrency(e, c, !0), l = this.formatCurrency(o, c, !0), d = this.formatCurrency(a, c, !0), s = this.formatCurrency(n, c, !0)
    }
    this.setDataReplaceStr("cart_price", r), this.setDataReplaceStr("cart_checkout_price", l), this.setDataReplaceStr("cart_fee_shipping", d), this.setDataReplaceStr("cart_discount", s), this.setDataReplaceStr("cart_quantity", i), this.setDataReplaceElement(!1)
}, LadiPageScriptV2.prototype.runAnimationDoc = function(t, e, i) {
    var a = this;
    if (!isEmptyLadiPage(t)) {
        if (isEmptyLadiPage(e) && !isEmptyLadiPage(t.id) && (e = a.runtime.eventData[t.id]), isNullLadiPage(i.is_child) && (i.is_child = !1), isNullLadiPage(i.run_timeout) && (i.run_timeout = !0), "carousel" == i.element_type) {
            var n = a.findAncestor(t, "ladi-carousel");
            if (n = isEmptyLadiPage(n) ? t : a.findAncestor(n, "ladi-element"), i.is_child && !isEmptyLadiPage(n) && i.run_timeout) {
                var o = n.getElementsByClassName("ladi-carousel-content")[0],
                    r = a.runtime.eventData[n.id],
                    l = null,
                    d = null,
                    s = getComputedStyle(o).transitionProperty.split(",");
                s = s.removeSpace();
                var c = getComputedStyle(o).transitionDuration.split(",");
                c = c.removeSpace();
                var u = {};
                return s.forEach(function(t, e) {
                    u[t] = 1e3 * (parseFloatLadiPage(c[e]) || 0)
                }), void(isEmptyLadiPage(r) || r[a.runtime.device + ".option.carousel_setting.display_type"] != a.const.CAROUSEL_DISPLAY_TYPE.vertical ? a.runTimeout(function() {
                    l = a.getElementBoundingClientRect(t), d = a.getElementBoundingClientRect(n), (l.x >= d.x && l.x <= d.x + d.width || l.x + l.width >= d.x && l.x + l.width <= d.x + d.width) && (i.run_timeout = !1, a.runAnimationDoc(t, e, i))
                }, u.left + 100) : a.runTimeout(function() {
                    l = a.getElementBoundingClientRect(t), d = a.getElementBoundingClientRect(n), (l.y >= d.y && l.y <= d.y + d.height || l.y + l.width >= d.y && l.y + l.width <= d.y + d.height) && (i.run_timeout = !1, a.runAnimationDoc(t, e, i))
                }, u.top + 100))
            }
        } else t.classList.contains("ladi-animation") && t.classList.add("ladi-animation-hidden");
        if (t.classList.contains("ladi-animation-hidden")) {
            var p = isObjectLadiPage(e) && parseFloatLadiPage(e[a.runtime.device + ".style.animation-delay"]) || 0;
            t.classList.add("ladi-animation"), a.runTimeout(function() {
                t.classList.remove("ladi-animation-hidden")
            }, 1e3 * p)
        }
        if (i.is_multiple) {
            var m = [];
            m = "carousel" == i.element_type ? t.querySelectorAll(".ladi-carousel .ladi-animation, .ladi-animation-hidden") : t.querySelectorAll(".ladi-animation, .ladi-animation-hidden"), i.is_child = !0;
            for (var g = 0; g < m.length; g++) a.runAnimationDoc(m[g], null, i)
        }
    }
}, LadiPageScriptV2.prototype.removeSticky = function() {
    var t = this;
    t instanceof LadiPageScriptV2 || (t = LadiPageScript);
    for (var e = document.querySelectorAll('[data-sticky="true"]'), i = 0; i < e.length; i++) e[i].removeAttribute("data-top"), e[i].removeAttribute("data-left"), e[i].style.removeProperty("top"), e[i].style.removeProperty("left"), e[i].style.removeProperty("width"), e[i].style.removeProperty("position"), e[i].style.removeProperty("z-index");
    t.runEventScroll()
}, LadiPageScriptV2.prototype.runEventBackdropPopupClick = function(t) {
    t.stopPropagation();
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript);
    for (var i = null, a = document.querySelectorAll('[data-popup-backdrop="true"]'), n = 0; n < a.length; n++) "none" != getComputedStyle(a[n]).display && (i = a[n].id);
    if (!isEmptyLadiPage(i)) {
        var o = document.querySelector("#" + i + " .popup-close");
        if (!isEmptyLadiPage(o) && "none" == getComputedStyle(o).display) return
    }
    e.runtime.tmp["popup_closing_" + i] = !0, e.runRemovePopup(i, e.runtime.isClient), e.runTimeout(function() {
        delete e.runtime.tmp["popup_closing_" + i]
    }, 500)
}, LadiPageScriptV2.prototype.runEventBackdropDropboxClick = function(t) {
    t.stopPropagation();
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript);
    for (var i = document.querySelectorAll('[data-dropbox-backdrop="true"]'), a = 0; a < i.length; a++) window.ladi(i[a].id).hide();
    document.getElementById(e.runtime.backdrop_dropbox_id).style.removeProperty("display")
}, LadiPageScriptV2.prototype.runEventMouseDown = function(t) {
    t.stopPropagation();
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript), delete e.runtime.tmp.is_grab, document.body.classList.remove("grab")
}, LadiPageScriptV2.prototype.runEventMouseMove = function(t) {
    t.stopPropagation();
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript), t = e.getEventCursorData(t);
    var i = null,
        a = 0,
        n = 0,
        o = 0,
        r = 0,
        l = 0,
        d = null,
        s = 0;
    if (!isEmptyLadiPage(e.runtime.current_element_mouse_down_image_compare)) {
        i = document.getElementById(e.runtime.current_element_mouse_down_image_compare), a = t.pageX - e.runtime.current_element_mouse_down_image_compare_position_x;
        var c = i.getElementsByClassName("ladi-image-compare")[0],
            u = i.getElementsByClassName("ladi-image-compare-line")[0],
            p = parseFloatLadiPage(c.getAttribute("data-width")) || 0,
            m = parseFloatLadiPage(c.getAttribute("data-max-width")) || 0;
        p = (p = (p += a) < 0 ? 0 : p) > m ? m : p, c.style.setProperty("width", p + "px"), u.style.setProperty("left", "calc(" + p + "px - " + u.clientWidth + "px / 2 - 3px / 2)")
    }
    return isEmptyLadiPage(e.runtime.current_element_mouse_down_carousel) || (i = document.getElementById(e.runtime.current_element_mouse_down_carousel), d = e.runtime.eventData[i.id], isObjectLadiPage(d) && isEmptyLadiPage(d["option.meta_data.version"]) && (((a = t.pageX - e.runtime.current_element_mouse_down_carousel_position_x) >= e.runtime.mouse_down_diff_touch_action || -1 * a >= e.runtime.mouse_down_diff_touch_action) && (e.runtime.tmp.is_grab = !0), n = parseFloatLadiPage(i.getElementsByClassName("ladi-carousel-content")[0].getAttribute("data-left")) || 0, (n += a) < (r = -((parseFloatLadiPage(e.runtime.eventData[e.runtime.current_element_mouse_down_carousel][e.runtime.device + ".option.carousel_crop.width"]) || 0) - i.clientWidth)) && (n = r), n > 0 && (n = 0), a >= e.runtime.current_element_mouse_down_carousel_diff ? (delete e.runtime.timenext_carousel[e.runtime.current_element_mouse_down_carousel], e.runtime.current_element_mouse_down_carousel = null, e.runtime.current_element_mouse_down_carousel_position_x = 0, e.runtime.current_element_mouse_down_carousel_position_y = 0, i.getElementsByClassName("ladi-carousel-arrow-left")[0].click()) : a <= -e.runtime.current_element_mouse_down_carousel_diff ? (delete e.runtime.timenext_carousel[e.runtime.current_element_mouse_down_carousel], e.runtime.current_element_mouse_down_carousel = null, e.runtime.current_element_mouse_down_carousel_position_x = 0, e.runtime.current_element_mouse_down_carousel_position_y = 0, i.getElementsByClassName("ladi-carousel-arrow-right")[0].click()) : i.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("left", n + "px")), isObjectLadiPage(d) && d["option.meta_data.version"] == e.const.META_VERSION.two && (d[e.runtime.device + ".option.carousel_setting.display_type"] == e.const.CAROUSEL_DISPLAY_TYPE.horizontal && (((a = t.pageX - e.runtime.current_element_mouse_down_carousel_position_x) >= e.runtime.mouse_down_diff_touch_action || -1 * a >= e.runtime.mouse_down_diff_touch_action) && (e.runtime.tmp.is_grab = !0), n = parseFloatLadiPage(i.getElementsByClassName("ladi-carousel-content")[0].getAttribute("data-left")) || 0, (n += a) < (r = -((parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-carousel-content")[0]).width) || 0) - i.clientWidth)) && (n = r), n > 0 && (n = 0), a >= e.runtime.current_element_mouse_down_carousel_diff ? (delete e.runtime.timenext_carousel[e.runtime.current_element_mouse_down_carousel], e.runtime.current_element_mouse_down_carousel = null, e.runtime.current_element_mouse_down_carousel_position_x = 0, e.runtime.current_element_mouse_down_carousel_position_y = 0, i.getElementsByClassName("ladi-carousel-arrow-left")[0].click()) : a <= -e.runtime.current_element_mouse_down_carousel_diff ? (delete e.runtime.timenext_carousel[e.runtime.current_element_mouse_down_carousel], e.runtime.current_element_mouse_down_carousel = null, e.runtime.current_element_mouse_down_carousel_position_x = 0, e.runtime.current_element_mouse_down_carousel_position_y = 0, i.getElementsByClassName("ladi-carousel-arrow-right")[0].click()) : i.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("left", n + "px")), d[e.runtime.device + ".option.carousel_setting.display_type"] == e.const.CAROUSEL_DISPLAY_TYPE.vertical && (((a = t.pageY - e.runtime.current_element_mouse_down_carousel_position_y) >= e.runtime.mouse_down_diff_touch_action || -1 * a >= e.runtime.mouse_down_diff_touch_action) && (e.runtime.tmp.is_grab = !0), o = parseFloatLadiPage(i.getElementsByClassName("ladi-carousel-content")[0].getAttribute("data-top")) || 0, (o += a) < (l = -((parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-carousel-content")[0]).height) || 0) - i.clientHeight)) && (o = l), o > 0 && (o = 0), a >= e.runtime.current_element_mouse_down_carousel_diff ? (delete e.runtime.timenext_carousel[e.runtime.current_element_mouse_down_carousel], e.runtime.current_element_mouse_down_carousel = null, e.runtime.current_element_mouse_down_carousel_position_x = 0, e.runtime.current_element_mouse_down_carousel_position_y = 0, i.getElementsByClassName("ladi-carousel-arrow-left")[0].click()) : a <= -e.runtime.current_element_mouse_down_carousel_diff ? (delete e.runtime.timenext_carousel[e.runtime.current_element_mouse_down_carousel], e.runtime.current_element_mouse_down_carousel = null, e.runtime.current_element_mouse_down_carousel_position_x = 0, e.runtime.current_element_mouse_down_carousel_position_y = 0, i.getElementsByClassName("ladi-carousel-arrow-right")[0].click()) : i.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("top", o + "px")))), isEmptyLadiPage(e.runtime.current_element_mouse_down_gallery_view) || (i = document.querySelector('[data-runtime-id="' + e.runtime.current_element_mouse_down_gallery_view + '"]'), ((a = t.pageX - e.runtime.current_element_mouse_down_gallery_view_position_x) >= e.runtime.mouse_down_diff_touch_action || -1 * a >= e.runtime.mouse_down_diff_touch_action) && (e.runtime.tmp.is_grab = !0), (s = parseFloatLadiPage(i.getAttribute("data-current")) || 0) == (parseFloatLadiPage(i.getAttribute("data-max-item")) || 0) - 1 && a < 0 && (a = 0), a > 0 && 0 == s && (a = 0), a >= e.runtime.current_element_mouse_down_gallery_view_diff ? (e.runtime.current_element_mouse_down_gallery_view = null, e.runtime.current_element_mouse_down_gallery_view_position_x = 0, e.runtime.current_element_mouse_down_gallery_view_position_y = 0, i.getElementsByClassName("ladi-gallery-view-arrow-left")[0].click()) : a <= -e.runtime.current_element_mouse_down_gallery_view_diff ? (e.runtime.current_element_mouse_down_gallery_view = null, e.runtime.current_element_mouse_down_gallery_view_position_x = 0, e.runtime.current_element_mouse_down_gallery_view_position_y = 0, i.getElementsByClassName("ladi-gallery-view-arrow-right")[0].click()) : i.querySelectorAll(".ladi-gallery-view-item.selected").length > 0 && i.querySelectorAll(".ladi-gallery-view-item.selected")[0].style.setProperty("left", a + "px")), isEmptyLadiPage(e.runtime.current_element_mouse_down_gallery_control) || (i = document.querySelector('[data-runtime-id="' + e.runtime.current_element_mouse_down_gallery_control + '"]'), ((a = t.pageX - e.runtime.current_element_mouse_down_gallery_control_position_x) >= e.runtime.mouse_down_diff_touch_action || -1 * a >= e.runtime.mouse_down_diff_touch_action) && (e.runtime.tmp.is_grab = !0), n = parseFloatLadiPage(i.getElementsByClassName("ladi-gallery-control-box")[0].getAttribute("data-left")) || 0, (n += a) < (r = (parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control")[0]).width) || 0) - (parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0]).width) || 0)) && (n = r), n > 0 && (n = 0), i.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", n + "px")), e.runtime.isDesktop || e.runtime.isBrowserDesktop || document.body.classList.add("grab"), !e.runtime.tmp.is_grab || (t.preventDefault(), !1)
}, LadiPageScriptV2.prototype.runEventMouseUp = function(t) {
    t.stopPropagation();
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript), t = e.getEventCursorData(t);
    var i = null,
        a = null;
    if (delete e.runtime.tmp.is_grab, document.body.classList.remove("grab"), isEmptyLadiPage(e.runtime.current_element_mouse_down_carousel) || (i = document.getElementById(e.runtime.current_element_mouse_down_carousel), a = e.runtime.eventData[i.id], isObjectLadiPage(a) && isEmptyLadiPage(a["option.meta_data.version"]) && i.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("left", i.getElementsByClassName("ladi-carousel-content")[0].getAttribute("data-left")), isObjectLadiPage(a) && a["option.meta_data.version"] == e.const.META_VERSION.two && (a[e.runtime.device + ".option.carousel_setting.display_type"] == e.const.CAROUSEL_DISPLAY_TYPE.horizontal && i.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("left", i.getElementsByClassName("ladi-carousel-content")[0].getAttribute("data-left")), a[e.runtime.device + ".option.carousel_setting.display_type"] == e.const.CAROUSEL_DISPLAY_TYPE.vertical && i.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("top", i.getElementsByClassName("ladi-carousel-content")[0].getAttribute("data-top")))), isEmptyLadiPage(e.runtime.current_element_mouse_down_gallery_view) || (i = document.querySelector('[data-runtime-id="' + e.runtime.current_element_mouse_down_gallery_view + '"]')).querySelectorAll(".ladi-gallery-view-item.selected").length > 0 && i.querySelectorAll(".ladi-gallery-view-item.selected")[0].style.removeProperty("left"), !isEmptyLadiPage(e.runtime.current_element_mouse_down_gallery_control))
        if ((i = document.querySelector('[data-runtime-id="' + e.runtime.current_element_mouse_down_gallery_control + '"]')).getElementsByClassName("ladi-gallery-control-box")[0].removeAttribute("data-left"), i.getElementsByClassName("ladi-gallery-control-box")[0].style.removeProperty("transition-duration"), i.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.remove("opacity-0"), i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.remove("opacity-0"), i.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || i.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom")) {
            var n = parseFloatLadiPage(i.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("left")) || 0,
                o = parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0]).width) || 0;
            o = (o = -(o -= parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control")[0]).width) || 0)) > 0 ? 0 : o, n > 0 && (n = 0), n >= 0 && i.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"), n <= o && i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0")
        } else {
            var r = parseFloatLadiPage(i.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("top")) || 0,
                l = parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0]).height) || 0;
            l = (l = -(l -= parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control")[0]).height) || 0)) > 0 ? 0 : l, r > 0 && (r = 0), r >= 0 && i.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"), r <= l && i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0")
        } e.runtime.current_element_mouse_down_image_compare = null, e.runtime.current_element_mouse_down_image_compare_position_x = 0, delete e.runtime.timenext_carousel[e.runtime.current_element_mouse_down_carousel], e.runtime.current_element_mouse_down_carousel = null, e.runtime.current_element_mouse_down_carousel_position_x = 0, e.runtime.current_element_mouse_down_carousel_position_y = 0, e.runtime.current_element_mouse_down_gallery_view = null, e.runtime.current_element_mouse_down_gallery_view_position_x = 0, e.runtime.current_element_mouse_down_gallery_view_position_y = 0;
    var d = 0;
    e.runtime.current_element_mouse_down_gallery_control_time + e.runtime.current_element_mouse_down_gallery_control_time_click < Date.now() && (d = 5), e.runTimeout(function() {
        e.runtime.current_element_mouse_down_gallery_control = null, e.runtime.current_element_mouse_down_gallery_control_time = 0, e.runtime.current_element_mouse_down_gallery_control_position_x = 0
    }, d)
}, LadiPageScriptV2.prototype.runEventMouseLeave = function(t) {
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript);
    var i = !1;
    Object.keys(e.runtime.eventData).forEach(function(t) {
        var a = e.runtime.eventData[t];
        if ("popup" == a.type && a["option.show_popup_exit_page"]) {
            if (isObjectLadiPage(e.runtime.tmp.popup_leave_show) || (e.runtime.tmp.popup_leave_show = {}), e.runtime.tmp.popup_leave_show[t]) return;
            if (a[e.runtime.device + ".option.popup_position"] == e.const.POSITION_TYPE.default) {
                if (i) return void(e.runtime.tmp.popup_leave_show[t] = !0);
                i = !0
            }
            e.runtime.tmp.popup_leave_show[t] = !0, window.ladi(t).show()
        }
    })
}, LadiPageScriptV2.prototype.runActionPopupHide = function(t) {
    var e = this;
    isObjectLadiPage(e.runtime.tmp.timeout_run_popup_hide) || (e.runtime.tmp.timeout_run_popup_hide = {}), e.removeTimeout(e.runtime.tmp.timeout_run_popup_hide[t]), e.runtime.tmp.timeout_run_popup_hide[t] = e.runTimeout(function() {
        var i = e.runtime.eventData[t];
        if (!isEmptyLadiPage(i) && isArrayLadiPage(i["option.data_event"])) {
            var a = document.getElementById(t);
            isEmptyLadiPage(a) || e.runtime.tmp.runDataEventNow(a, i["option.data_event"], {
                action_type: e.const.ACTION_TYPE.close_popup
            })
        }
    }, 100)
}, LadiPageScriptV2.prototype.runActionPopupShow = function(t) {
    var e = this.runtime.eventData[t];
    if (!isEmptyLadiPage(e) && isArrayLadiPage(e["option.data_event"])) {
        var i = document.getElementById(t);
        isEmptyLadiPage(i) || this.runtime.tmp.runDataEventNow(i, e["option.data_event"], {
            action_type: this.const.ACTION_TYPE.open_popup
        })
    }
}, LadiPageScriptV2.prototype.runEventScroll = function(t) {
    var e = this;
    if (e instanceof LadiPageScriptV2 || (e = LadiPageScript), e.runtime.isRun) {
        if (!isEmptyLadiPage(t) && !e.runtime.tmp.isRunScrollEvent) {
            for (var i = document.getElementsByClassName("ladi-lazyload"); i.length > 0;) i[0].classList.remove("ladi-lazyload");
            e.runtime.tmp.isRunScrollEvent = !0
        }
        if (!isEmptyLadiPage(e.runtime.eventData) && !e.runtime.tmp.is_run_show_popup) {
            for (var a = null, n = document.querySelectorAll('[data-popup-backdrop="true"]'), o = 0; o < n.length; o++) "none" != getComputedStyle(n[o]).display && (a = n[o].id);
            var r = [];
            if (!isEmptyLadiPage(a))
                for (var l = document.querySelectorAll("#" + a + " .ladi-element"), d = 0; d < l.length; d++) r.push(l[d].id);
            if (Object.keys(e.runtime.eventData).forEach(function(t) {
                    var i = e.runtime.eventData[t],
                        n = null,
                        o = null,
                        l = null,
                        d = Object.keys(e.runtime.list_scroll_func),
                        s = [];
                    s = "gallery" == i.type ? document.querySelectorAll("#" + t) : [l = document.getElementById(t)];
                    for (var c = 0; c < s.length; c++)
                        if (l = s[c], !isEmptyLadiPage(l)) {
                            var u = "gallery" == i.type ? l.getAttribute("data-runtime-id") : l.getAttribute("id");
                            if (-1 != d.indexOf(u)) {
                                var p = !1;
                                "section" == i.type ? (n = l.offsetTop, (window.scrollY >= n && window.scrollY <= n + l.offsetHeight || window.scrollY + e.getHeightDevice() >= n && window.scrollY + e.getHeightDevice() <= n + l.offsetHeight || n >= window.scrollY && window.scrollY + e.getHeightDevice() >= n) && (p = !0)) : (n = e.getElementBoundingClientRect(l).y + window.scrollY, (window.scrollY >= n && window.scrollY <= n + l.offsetHeight || window.scrollY + e.getHeightDevice(!0) >= n && window.scrollY + e.getHeightDevice(!0) <= n + l.offsetHeight || n >= window.scrollY && window.scrollY + e.getHeightDevice(!0) >= n) && (p = !0)), p && (o = e.runtime.list_scroll_func[u], delete e.runtime.list_scroll_func[u], o())
                            }
                        } var m = i[e.runtime.device + ".style.animation-name"];
                    if (!isEmptyLadiPage(m) && (l = document.getElementById(t), !isEmptyLadiPage(l) && !l.classList.contains("ladi-animation"))) {
                        var g = e.findAncestor(l, "ladi-popup"),
                            _ = parseFloatLadiPage(i[e.runtime.device + ".style.animation-delay"]) || 0;
                        n = e.getElementBoundingClientRect(l).y + window.scrollY;
                        var y = window.scrollY >= n && window.scrollY <= n + l.offsetHeight || window.scrollY + e.getHeightDevice(!0) >= n && window.scrollY + e.getHeightDevice(!0) <= n + l.offsetHeight || n >= window.scrollY && window.scrollY + e.getHeightDevice(!0) >= n;
                        if (e.runtime.tmp.isFirstScroll && _ > 0 && l.classList.add("ladi-animation-hidden"), y)
                            if (isEmptyLadiPage(g)) {
                                var f = e.findAncestor(l, "ladi-carousel");
                                isEmptyLadiPage(f) ? (l.classList.add("ladi-animation"), e.runTimeout(function() {
                                    l.classList.remove("ladi-animation-hidden")
                                }, 1e3 * _)) : (l.classList.add("ladi-animation-hidden"), f = e.findAncestor(f, "ladi-element"), e.runAnimationDoc(f, null, {
                                    is_multiple: !0,
                                    element_type: "carousel"
                                }))
                            } else l.classList.add("ladi-animation-hidden")
                    }
                    if (isEmptyLadiPage(a) || -1 != r.indexOf(t)) {
                        var v = null,
                            h = null,
                            P = null;
                        if (i[e.runtime.device + ".option.sticky"] && (v = i[e.runtime.device + ".option.sticky_position"], h = parseFloatLadiPage(i[e.runtime.device + ".option.sticky_position_top"]), P = parseFloatLadiPage(i[e.runtime.device + ".option.sticky_position_bottom"])), !e.runtime.has_popupx && !isEmptyLadiPage(v)) {
                            var L = document.getElementById(t);
                            if (!isEmptyLadiPage(L) && L.clientWidth > 0 && L.clientHeight > 0 && -1 != ["default", "top", "bottom"].indexOf(v)) {
                                var E = e.getElementBoundingClientRect(L),
                                    A = L.getAttribute("data-top"),
                                    b = L.getAttribute("data-left");
                                isEmptyLadiPage(A) ? (L.setAttribute("data-top", E.y + window.scrollY), A = E.y) : A = parseFloatLadiPage(A), isEmptyLadiPage(b) ? (L.setAttribute("data-left", E.x + window.scrollX), b = E.x) : b = parseFloatLadiPage(b);
                                var T = null,
                                    w = null,
                                    S = e.getHeightDevice(),
                                    O = document.getElementsByClassName("ladi-wraper")[0],
                                    C = 0,
                                    I = 0,
                                    N = 0,
                                    k = 0;
                                if ("default" == v && (h >= A - window.scrollY ? (T = h + "px", w = b + "px", h <= 0 && (C = L.clientHeight), N = L.clientHeight) : S - P - L.clientHeight <= A - window.scrollY && (T = "calc(100% - " + (P + L.clientHeight) + "px)", w = b + "px", P <= 0 && (I = L.clientHeight), k = L.clientHeight)), "top" == v && (h >= A - window.scrollY || S - 0 < A - window.scrollY) && (T = h + "px", w = b + "px", h <= 0 && (C = L.clientHeight), N = L.clientHeight), "bottom" == v && (S - P - L.clientHeight <= A - window.scrollY || 0 > A + L.clientHeight - window.scrollY) && (T = "calc(100% - " + (P + L.clientHeight) + "px)", w = b + "px", P <= 0 && (I = L.clientHeight), k = L.clientHeight), isEmptyLadiPage(T) || isEmptyLadiPage(w)) L.style.removeProperty("top"), L.style.removeProperty("left"), L.style.removeProperty("width"), L.style.removeProperty("position"), L.style.removeProperty("z-index"), O.getAttribute("data-padding-top-id") == t && (O.removeAttribute("data-padding-top-id"), O.style.removeProperty("padding-top")), O.getAttribute("data-padding-bottom-id") == t && (O.removeAttribute("data-padding-bottom-id"), O.style.removeProperty("padding-bottom"));
                                else if ("section" == i.type && (e.runtime.is_mobile_only ? L.style.setProperty("width", O.clientWidth + "px") : e.runtime.isDesktop && L.style.setProperty("width", "100%"), C > 0 && (O.setAttribute("data-padding-top-id", t), O.style.setProperty("padding-top", C + "px")), I > 0 && (O.setAttribute("data-padding-bottom-id", t), O.style.setProperty("padding-bottom", I + "px")), N > 0 && O.setAttribute("data-scroll-padding-top", N), k > 0 && O.setAttribute("data-scroll-padding-bottom", k)), L.style.setProperty("top", T), L.style.setProperty("left", w), L.style.setProperty("position", "fixed"), L.style.setProperty("z-index", "90000050"), !L.hasAttribute("data-sticky")) {
                                    L.setAttribute("data-sticky", !0);
                                    var x = parseFloatLadiPage(i[e.runtime.device + ".style.animation-delay"]) || 0;
                                    L.classList.contains("ladi-animation") && (x = 0), e.runTimeout(function() {
                                        L.classList.contains("ladi-animation-hidden") && (L.classList.remove("ladi-animation-hidden"), L.classList.add("ladi-animation"));
                                        for (var t = L.getElementsByClassName("ladi-animation-hidden"); t.length > 0;) t[0].classList.add("ladi-animation"), t[0].classList.remove("ladi-animation-hidden");
                                        L.classList.remove("ladi-lazyload");
                                        for (var e = L.getElementsByClassName("ladi-lazyload"); e.length > 0;) e[0].classList.remove("ladi-lazyload")
                                    }, 1e3 * x)
                                }
                            }
                        }
                    }
                    if ("popup" == i.type) {
                        if (!isEmptyLadiPage(e.runtime.scroll_show_popup[t])) return;
                        isEmptyLadiPage(i["option.popup_welcome_page_scroll_to"]) || (l = document.getElementById(i["option.popup_welcome_page_scroll_to"]), !isEmptyLadiPage(l) && l.offsetHeight > 0 && (n = l.offsetTop, (window.scrollY >= n && window.scrollY <= n + l.offsetHeight || window.scrollY + e.getHeightDevice() >= n && window.scrollY + e.getHeightDevice() <= n + l.offsetHeight || n >= window.scrollY && window.scrollY + e.getHeightDevice() >= n) && (e.runtime.scroll_show_popup[t] = !0, window.ladi(t).show())))
                    }
                    if ("section" == i.type) {
                        if (!isEmptyLadiPage(e.runtime.scroll_to_section[t])) return;
                        l = document.getElementById(t), !isEmptyLadiPage(l) && l.offsetHeight > 0 && (n = l.offsetTop, (window.scrollY >= n && window.scrollY <= n + l.offsetHeight || window.scrollY + e.getHeightDevice() >= n && window.scrollY + e.getHeightDevice() <= n + l.offsetHeight || n >= window.scrollY && window.scrollY + e.getHeightDevice() >= n) && (e.runtime.scroll_to_section[t] = !0, e.runEventTracking(t, {
                            is_form: !1
                        })))
                    }
                }), e.runtime.isClient) {
                var s = Math.round((window.scrollY + e.getHeightDevice()) / document.body.clientHeight * 100);
                s = s > 100 ? 100 : s;
                var c = function(t) {
                        var i = function(t) {
                                if (t || isObjectLadiPage(window.ladi_conversion_api) && isObjectLadiPage(window.ladi_conversion_api.tiktok) && isArrayLadiPage(window.ladi_conversion_api.tiktok.pixels)) return {
                                    event_id: "ladi." + Date.now() + "." + (Math.floor(9e10 * Math.random()) + 1e10)
                                };
                                return {}
                            }(e.runtime.is_popupx),
                            a = null;
                        e.runtime.is_popupx ? e.runLadiPageCommand(function(n) {
                            if ("ViewContent" == n.name && t >= n.scrollPercent) return a = [{
                                name: n.name,
                                custom_data: {},
                                data: i
                            }], e.runtime.tmp.runActionPopupX({
                                conversion_name: n.name,
                                ttq_data: {},
                                ttq_event_data: i,
                                action: {
                                    type: "run_tracking_ttq"
                                }
                            }), e.runtime.tmp.runActionPopupX({
                                type: "tiktok",
                                key: "events",
                                keyData: a,
                                action: {
                                    type: "run_conversion_api"
                                }
                            }), !0
                        }) : LadiPageQueueCommand.push(function() {
                            return !isNullLadiPage(window.ttq)
                        }, function() {
                            e.runLadiPageCommand(function(n) {
                                if ("ViewContent" == n.name && t >= n.scrollPercent) return a = [{
                                    name: n.name,
                                    custom_data: {},
                                    data: i
                                }], window.ttq.track(n.name, {}, i), e.runConversionApi("tiktok", "events", a), !0
                            })
                        })
                    },
                    u = function(t) {
                        LadiPageQueueCommand.push(function() {
                            return isFunctionLadiPage(window.fbq)
                        }, function() {
                            window.fbq("trackCustom", "ScrollDepth_" + t + "_percent")
                        })
                    },
                    p = function(t) {
                        LadiPageQueueCommand.push(function() {
                            return isFunctionLadiPage(window.gtag)
                        }, function() {
                            window.gtag("event", "ScrollDepth_" + t + "_percent", {
                                event_category: "LadiPageScrollDepth",
                                event_label: window.location.host + window.location.pathname,
                                non_interaction: !0
                            })
                        })
                    };
                if (!e.runtime.is_popupx)
                    for (var m = 1; m < e.const.PERCENT_TRACKING_SCROLL.length; m++) {
                        var g = e.const.PERCENT_TRACKING_SCROLL[m];
                        s > e.const.PERCENT_TRACKING_SCROLL[m - 1] && s <= g && -1 == e.runtime.scroll_depth.indexOf(g) && (e.runtime.scroll_depth.push(g), u(g), p(g), c(s))
                    }
            }
            if (e.runtime.tmp.isFirstScroll = !1, !isEmptyLadiPage(t)) {
                var _ = 0,
                    y = Object.values(e.runtime.list_scrolling_exec);
                if (isEmptyLadiPage(e.runtime.tmp.timeout_scrolling_id))
                    for (_ = 0; _ < y.length; _++) y[_]();
                e.removeTimeout(e.runtime.tmp.timeout_scrolling_id), e.runtime.tmp.timeout_scrolling_id = e.runTimeout(function() {
                    for (delete e.runtime.tmp.timeout_scrolling_id, y = Object.values(e.runtime.list_scrolled_exec), _ = 0; _ < y.length; _++) y[_]()
                }, 1e3)
            }
        }
    } else e.runTimeout(function() {
        e.runEventScroll(t)
    }, 100)
}, LadiPageScriptV2.prototype.runRemovePopup = function(t, e, i, a, n) {
    var o = this,
        r = document.querySelectorAll("#" + this.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"),
        l = !1,
        d = !1;
    e || (LadiPagePlugin.getPlugin("popup").removeStyleShowPopupBuilder(), LadiPagePlugin.getPlugin("popup").removeStyleShowPopupBuilderScroll());
    var s = function() {
            if (!o.runtime.tmp.is_resize_all && !o.runtime.tmp.is_wait_popup) {
                var t = document.getElementById("style_popup");
                isEmptyLadiPage(t) || t.parentElement.removeChild(t)
            }
        },
        c = [],
        u = 0;
    if (isEmptyLadiPage(t))
        for (u = 0; u < r.length; u++) c.push(r[u].id);
    else c.push(t);
    if (c.forEach(function(t) {
            var i = document.getElementById(t);
            if (!isEmptyLadiPage(i)) {
                o.runtime.has_popupx && ("none" != getComputedStyle(i).display && (d = !0), document.body.style.removeProperty("height"));
                var a = parseFloatLadiPage(i.getAttribute("data-timeout-id")) || null;
                o.removeTimeout(a), i.removeAttribute("data-timeout-id"), a = parseFloatLadiPage(i.getAttribute("data-timeout-id-2")) || null, o.removeTimeout(a), i.removeAttribute("data-timeout-id-2"), a = parseFloatLadiPage(i.getAttribute("data-timeout-id-3")) || null, o.removeTimeout(a), i.removeAttribute("data-timeout-id-3");
                var n = i.getElementsByClassName("popup-close")[0];
                isEmptyLadiPage(n) || (a = parseFloatLadiPage(n.getAttribute("data-timeout-id")) || null, o.removeTimeout(a), n.removeAttribute("data-timeout-id")), o.pauseAllVideo(i), isEmptyLadiPage(i.style.getPropertyValue("display")) || (l = !0, o.runActionPopupHide(t)), i.style.removeProperty("display"), i.style.removeProperty("z-index");
                var c = i.hasAttribute("data-popup-backdrop"),
                    u = o.runtime.eventData[t];
                if (isObjectLadiPage(u) && u[o.runtime.device + ".option.popup_position"] == o.const.POSITION_TYPE.default && (c = !0), c) {
                    s(), e && (isEmptyLadiPage(o.runtime.tmp.bodyScrollY) || window.scrollTo(0, o.runtime.tmp.bodyScrollY)), o.runtime.tmp.bodyScrollY = null;
                    for (var p = 0; p < r.length; p++) r[p].style.removeProperty("z-index")
                }
                i.removeAttribute("data-scroll"), i.removeAttribute("data-fixed-close"), i.style.removeProperty("overflow-y"), i.style.removeProperty("overflow-x");
                var m = i.getElementsByClassName("ladi-popup")[0];
                isEmptyLadiPage(m) || m.style.removeProperty("height"), i.style.removeProperty("max-height")
            }
        }), l && isFunctionLadiPage(i) && i(), a && s(), !n && d) {
        o.runtime.tmp.runActionPopupX({
            id: t,
            dimension: {
                display: "none"
            },
            action: {
                type: "set_iframe_dimension"
            }
        })
    }
    delete this.runtime.tmp.current_default_popup_id
}, LadiPageScriptV2.prototype.runShowPopup = function(t, e, i, a, n, o) {
    var r = this;
    if (!isEmptyLadiPage(e) && !r.runtime.tmp["popup_closing_" + e]) {
        var l = document.getElementById(e);
        if (!n || !isEmptyLadiPage(l) && isObjectLadiPage(r.runtime.eventData) && !isEmptyLadiPage(r.runtime.eventData[e])) {
            n && (i = r.runtime.eventData[e][r.runtime.device + ".option.popup_position"], a = r.runtime.eventData[e][r.runtime.device + ".option.popup_backdrop"]);
            var d = function(t) {
                    r.runtime.tmp.is_run_show_popup = !0;
                    var s = 0,
                        c = "";
                    n || LadiPagePlugin.getPlugin("popup").showStyleShowPopupBuilder(e);
                    isEmptyLadiPage(a) ? c += n ? "#" + r.runtime.backdrop_popup_id + " { display: none !important;}" : "#" + r.runtime.backdrop_popup_id + " { display: block !important;}" : (c += "#" + r.runtime.backdrop_popup_id + " { display: block !important; " + a + "}", l.setAttribute("data-popup-backdrop", !0)), i == r.const.POSITION_TYPE.default && "true" != l.getAttribute("data-dropbox") && (! function() {
                        if (!r.runtime.has_popupx && n) {
                            var t = window.scrollY;
                            if (!isEmptyLadiPage(r.runtime.tmp.bodyScrollY)) {
                                var i = getComputedStyle(document.body);
                                "fixed" == i.position && (parseFloatLadiPage(i.top) || 0) == -1 * r.runtime.tmp.bodyScrollY && (t = r.runtime.tmp.bodyScrollY)
                            }
                            "block" != l.style.getPropertyValue("display") || isEmptyLadiPage(r.runtime.tmp.bodyScrollY) || (t = r.runtime.tmp.bodyScrollY), c += "body {", 0 == l.getElementsByClassName("ladi-google-recaptcha-checkbox").length && (c += "position: fixed !important;"), c += "width: 100% !important;", c += "top: -" + t + "px !important;", c += "}", r.runtime.tmp.bodyScrollY = t
                        }
                        for (var a = document.querySelectorAll("#" + r.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), o = 0; o < a.length; o++) a[o].id != e && a[o].style.setProperty("z-index", "1", "important");
                        s = 500
                    }(), r.runtime.tmp.current_default_popup_id = e);
                    var u = "block" == l.style.getPropertyValue("display");
                    if (isArrayLadiPage(r.runtime.list_show_popup_func[e]))
                        for (; r.runtime.list_show_popup_func[e].length > 0;) {
                            r.runtime.list_show_popup_func[e].shift()()
                        }
                    var p = l.hasAttribute("data-scroll"),
                        m = l.hasAttribute("data-fixed-close"),
                        g = !1,
                        _ = l.getElementsByClassName("ladi-popup")[0],
                        y = 1e3 * (parseFloatLadiPage(getComputedStyle(_).animationDuration) || 0),
                        f = 1e3 * (parseFloatLadiPage(getComputedStyle(_).animationDelay) || 0),
                        v = parseFloatLadiPage(l.getAttribute("data-timeout-id")) || null;
                    r.removeTimeout(v), v = parseFloatLadiPage(l.getAttribute("data-timeout-id-2")) || null, r.removeTimeout(v), !n || "true" == l.getAttribute("data-dropbox") || r.runtime.tmp.is_resize_all || r.runtime.tmp.is_wait_popup || isEmptyLadiPage(l.style.getPropertyValue("max-height")) && l.style.setProperty("visibility", "hidden");
                    if (l.classList.add("ladi-animation-hidden"), "block" != getComputedStyle(l).display && l.style.setProperty("display", "block", "important"), v = r.runTimeout(function() {
                            l.classList.remove("ladi-animation-hidden"), l.removeAttribute("data-timeout-id"),
                                function() {
                                    for (var t = _.getElementsByClassName("ladi-animation"); t.length > 0;) t[0].classList.add("ladi-animation-hidden"), t[0].classList.remove("ladi-animation");
                                    isObjectLadiPage(r.runtime.tmp.list_timeout_popup_id) || (r.runtime.tmp.list_timeout_popup_id = {}), isArrayLadiPage(r.runtime.tmp.list_timeout_popup_id[e]) || (r.runtime.tmp.list_timeout_popup_id[e] = []), r.runtime.tmp.list_timeout_popup_id[e].forEach(function(t) {
                                        r.removeTimeout(t)
                                    }), r.runtime.tmp.list_timeout_popup_id[e] = []
                                }(), v = r.runTimeout(function() {
                                    ! function() {
                                        for (var t = function(t) {
                                                var i = r.findAncestor(t, "ladi-element"),
                                                    a = 0;
                                                if (!isEmptyLadiPage(i)) {
                                                    var n = r.runtime.eventData[i.id];
                                                    isEmptyLadiPage(n) || (a = parseFloatLadiPage(n[r.runtime.device + ".style.animation-delay"]) || 0)
                                                }
                                                t.classList.add("ladi-animation");
                                                var o = r.runTimeout(function() {
                                                    t.classList.remove("ladi-animation-hidden")
                                                }, 1e3 * a);
                                                r.runtime.tmp.list_timeout_popup_id[e].push(o)
                                            }, i = function() {
                                                for (var t = [], e = _.getElementsByClassName("ladi-animation-hidden"), i = 0; i < e.length; i++) t.push(e[i]);
                                                return t
                                            }(), a = 0; a < i.length; a++) t(i[a])
                                    }(), l.removeAttribute("data-timeout-id")
                                }, y), isEmptyLadiPage(v) || l.setAttribute("data-timeout-id", v)
                        }, f), isEmptyLadiPage(v) || l.setAttribute("data-timeout-id", v), t && (!p && l.clientHeight > .8 * r.getHeightDevice() && (n ? r.runtime.has_popupx ? g = !0 : (l.setAttribute("data-scroll", !0), l.style.setProperty("overflow-y", "auto", "important"), l.style.setProperty("overflow-x", "hidden", "important"), p = !0) : m = !0), r.runtime.has_popupx && (g ? (l.setAttribute("data-fixed-close", !0), document.body.style.setProperty("height", l.clientHeight + "px")) : document.body.style.removeProperty("height")), p && n)) {
                        var h = l.scrollTop;
                        l.getElementsByClassName("ladi-popup")[0].style.removeProperty("height"), l.style.removeProperty("max-height"), l.getElementsByClassName("ladi-popup")[0].style.setProperty("height", l.clientHeight + "px", "important"), l.style.setProperty("max-height", "80vh"), l.scrollTop = h
                    }!n && m && LadiPagePlugin.getPlugin("popup").styleShowPopupBuilderScroll(e), r.runtime.has_popupx && (c += n ? "#" + r.runtime.backdrop_popup_id + " { display: none !important;}" : "#" + r.runtime.backdrop_popup_id + " { display: block !important;}", l.style.removeProperty("max-height"), l.style.removeProperty("overflow-y"), l.style.removeProperty("overflow-x")), isEmptyLadiPage(c) || r.runtime.tmp.is_resize_all || r.runtime.tmp.is_wait_popup || r.createStyleElement("style_popup", c);
                    var P = null;
                    if (n && !isEmptyLadiPage(l) && "true" != l.getAttribute("data-dropbox")) {
                        var L = l.getElementsByClassName("popup-close")[0];
                        isEmptyLadiPage(L) && ((L = document.createElement("div")).className = "popup-close", l.appendChild(L), L.addEventListener("click", function(t) {
                            t.stopPropagation(), r.runtime.tmp["popup_closing_" + e] = !0, r.runRemovePopup(e, n), r.runTimeout(function() {
                                delete r.runtime.tmp["popup_closing_" + e]
                            }, 500)
                        })), v = parseFloatLadiPage(L.getAttribute("data-timeout-id")) || null, r.removeTimeout(v), "true" == l.getAttribute("data-scroll") && (L.style.removeProperty("right"), L.style.removeProperty("top"), L.style.removeProperty("position")), r.runtime.has_popupx && r.runtime.tmp.popupx_is_inline && L.classList.add("ladi-hidden");
                        var E = function() {
                            if (L = l.getElementsByClassName("popup-close")[0], !isEmptyLadiPage(L))
                                if ("true" == l.getAttribute("data-scroll")) {
                                    var t = r.getElementBoundingClientRect(l),
                                        e = t.y,
                                        i = window.innerWidth - t.x - t.width;
                                    (p || g) && (i += r.runtime.widthScrollBar), L.style.setProperty("right", i + "px"), L.style.setProperty("top", e + "px"), L.style.setProperty("position", "fixed")
                                } else L.style.removeProperty("right"), L.style.removeProperty("top"), L.style.removeProperty("position")
                        };
                        E(), P = function() {
                            v = r.runTimeout(function() {
                                E(), L.removeAttribute("data-timeout-id")
                            }, y + f + 100), L.setAttribute("data-timeout-id", v)
                        }, (p || g) && (l.hasAttribute("data-resize-scroll") || (l.setAttribute("data-resize-scroll", !0), window.addEventListener("resize", E)))
                    }
                    n && !u && (r.runEventTracking(e, {
                        is_form: !1,
                        is_open_popup: !0,
                        is_custom: !0,
                        event: o.event
                    }), r.runActionPopupShow(e));
                    var A = function() {
                        var t = s;
                        v = r.runTimeout(function() {
                            delete r.runtime.tmp.is_run_show_popup, r.runEventScroll(), isFunctionLadiPage(P) && P(), l.removeAttribute("data-timeout-id-2")
                        }, t), isEmptyLadiPage(v) || l.setAttribute("data-timeout-id-2", v), l.style.removeProperty("visibility")
                    };
                    if (t) A();
                    else {
                        v = r.runTimeout(function() {
                            "none" == getComputedStyle(l).display ? (s -= 100, A()) : d(!0), l.removeAttribute("data-timeout-id-2")
                        }, 100), l.setAttribute("data-timeout-id-2", v)
                    }
                    l.removeAttribute("data-timeout-id-3")
                },
                s = 0;
            i == r.const.POSITION_TYPE.default && (s = 100);
            var c = r.runTimeout(function() {
                d(t)
            }, s);
            isEmptyLadiPage(l) || l.setAttribute("data-timeout-id-3", c)
        }
    }
}, LadiPageScriptV2.prototype.convertPhoneNumberFormData = function(t) {
    for (var e = null, i = [{
            startStr: "+84",
            endStr: "(9|8|7|5|3)[0-9]{8}",
            listRegex: [{
                str_start: "0",
                str_input: "0"
            }, {
                str_start: "\\+84",
                str_input: "+84"
            }]
        }], a = 0; a < i.length; a++)
        for (var n = 0; n < i[a].listRegex.length; n++) {
            new RegExp("^(" + i[a].listRegex[n].str_start + ")" + i[a].endStr + "$", "gi").test(t) && (e = i[a].startStr + t.substring(i[a].listRegex[n].str_input.length))
        }
    return e
}, LadiPageScriptV2.prototype.runGlobalTrackingScript = function() {
    if (isObjectLadiPage(window.ladi_global_tracking) && isArrayLadiPage(window.ladi_global_tracking.thankyou_page))
        for (; window.ladi_global_tracking.thankyou_page.length > 0;) {
            var t = window.ladi_global_tracking.thankyou_page.shift();
            this.runEventTracking(null, t)
        }
}, LadiPageScriptV2.prototype.runLadiPageCommand = function(t) {
    if (isArrayLadiPage(LadiPageCommand))
        for (var e = 0; e < LadiPageCommand.length; e++)
            if (isFunctionLadiPage(t) && t(LadiPageCommand[e])) {
                LadiPageCommand.splice(e, 1), this.runLadiPageCommand(t);
                break
            }
}, LadiPageScriptV2.prototype.generateTrackingJS = function(t, e) {
    null != e && void 0 != e && "object" == typeof e || (e = {}), null != e.zalo_ads_pixel_ladipage_id && void 0 != e.zalo_ads_pixel_ladipage_id || (e.zalo_ads_pixel_ladipage_id = "7056840457216708608"), !1 !== t.zalo_ads_pixel_ladipage && 0 == t.zalo_ads_pixel_ladipage && (t.zalo_ads_pixel_ladipage = !1, t.zalo_ads_pixel = null);
    var i = "",
        a = "",
        n = [];
    if (null != t.facebook_pixel && void 0 != t.facebook_pixel && t.facebook_pixel.length > 0 && (n = t.facebook_pixel.split(",").removeSpace()).length > 0) {
        i += "<script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');";
        var o = [];
        n.forEach(function(t) {
            var e = t.split("|API");
            i += 'fbq("init", "' + e[0].trim() + '");', 2 == e.length && o.push(e[0].trim())
        }), o.length > 0 ? (i += "window.ladi_conversion_api = window.ladi_conversion_api || {};", i += "window.ladi_conversion_api.facebook = window.ladi_conversion_api.facebook || {pixels: []};", o.forEach(function(t) {
            i += "window.ladi_conversion_api.facebook.pixels.push('" + t + "');"
        }), i += 'window.ladi_fbq("track", "PageView");', t.is_view_content && (i += 'window.ladi_fbq("track", "ViewContent");')) : (i += 'fbq("track", "PageView");', t.is_view_content && (i += 'fbq("track", "ViewContent");')), i += "<\/script>", n.forEach(function(t) {
            var e = t.split("|API");
            i += '<noscript><img height="1" width="1" style="display:none;" src="https://www.facebook.com/tr?id=' + e[0].trim() + '&ev=PageView&noscript=1" /></noscript>'
        })
    }
    var r = [],
        l = [];
    null != t.google_ads_id && void 0 != t.google_ads_id && t.google_ads_id.length > 0 && (l = t.google_ads_id.split(",").removeSpace()), null != t.google_analytics_id && void 0 != t.google_analytics_id && t.google_analytics_id.length > 0 && (r = t.google_analytics_id.split(",").removeSpace()), (r.length > 0 || l.length > 0) && (i += '<script async src="https://www.googletagmanager.com/gtag/js?id=' + (r.length > 0 ? r[0] : l[0]) + '"><\/script>', i += "<script>window.dataLayer = window.dataLayer || [];", i += 'function gtag(){dataLayer.push(arguments);}gtag("js", new Date());', r.forEach(function(t) {
        i += 'gtag("config", "' + t + '", {allow_enhanced_conversions: true});'
    }), l.forEach(function(t) {
        i += 'gtag("config", "' + t + '", {allow_enhanced_conversions: true});'
    }), i += "<\/script>");
    var d = [];
    if (null != t.tiktok_pixel && void 0 != t.tiktok_pixel && t.tiktok_pixel.length > 0) {
        d = t.tiktok_pixel.split(",").removeSpace(), i += '<script>!function (w, d, t) {w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=i+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};';
        var s = [];
        d.forEach(function(t) {
            var e = t.split("|API");
            i += 'ttq.load("' + e[0].trim() + '");', 2 == e.length && s.push(e[0].trim())
        }), s.length > 0 && (i += "window.ladi_conversion_api = window.ladi_conversion_api || {};", i += "window.ladi_conversion_api.tiktok = window.ladi_conversion_api.tiktok || {pixels: []};", s.forEach(function(t) {
            i += "window.ladi_conversion_api.tiktok.pixels.push('" + t + "');"
        })), t.is_view_content && (i += 'window.ladi_ttq("track", "ViewContent");'), i += 'window.ladi_ttq("track", "PageView");', i += 'ttq.page();}(window, document, "ttq");<\/script>'
    }
    t.zalo_ads_pixel_ladipage && (t.zalo_ads_pixel = e.zalo_ads_pixel_ladipage_id), null != t.zalo_ads_pixel && void 0 != t.zalo_ads_pixel && t.zalo_ads_pixel.length > 0 && (i += '<script>!function(e,t,r,n,c){if(!e.ztrq){c=e.ztrq=function(){c.queue?c.queue.push(arguments): c.call(c,arguments)},e._ztrk||(e._ztrk=c),c.queue=[];var u=t.createElement(r);u.async=!0, u.src=n;var a=t.getElementsByTagName(r)[0];a.parentNode.insertBefore(u,a)}}(window,document,"script","https://s.zzcdn.me/ztr/ztracker.js?id=' + t.zalo_ads_pixel + '");', t.zalo_ads_pixel_ladipage && (i += "window.LadiPageZaloAds = {auto_tracking: true};", t.is_view_content && (i += 'ztrq("track", "ViewContent");')), i += "<\/script>");
    var c = [];
    return null != t.google_tag_manager_id && void 0 != t.google_tag_manager_id && t.google_tag_manager_id.length > 0 && ((c = t.google_tag_manager_id.split(",").removeSpace()).length > 0 && (i += "<script>function gtm(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);}", c.forEach(function(t) {
        i += "gtm(window,document,'script','dataLayer','" + t + "');"
    }), i += "<\/script>"), c.forEach(function(t) {
        a += '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=' + t + '" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>'
    })), {
        template: i,
        template_body: a
    }
}, LadiPageScriptV2.prototype.customScriptDelayInit = function() {
    var t = this;
    if (t instanceof LadiPageScriptV2 || (t = LadiPageScript), !isEmptyLadiPage(t.runtime.tracking_global_url) && !t.runtime.tmp.tracking_global_loaded) return t.runTimeout(t.customScriptDelayInit, 100);
    var e = document.createElement("div");
    [{
        id: "script_html_head",
        elm: "head"
    }, {
        id: "script_html_body",
        elm: "body"
    }].forEach(function(t) {
        try {
            var i = document.getElementById(t.id);
            isEmptyLadiPage(i) || (e.innerHTML = i.innerHTML, isEmptyLadiPage(e.textContent) || (i = document.createRange().createContextualFragment(e.textContent), document[t.elm].appendChild(i)))
        } catch (t) {}
    })
}, LadiPageScriptV2.prototype.trackingInit = function(t) {
    if (isObjectLadiPage(t)) {
        var e = this.generateTrackingJS(t);
        [{
            str: e.template,
            elm: "head"
        }, {
            str: e.template_body,
            elm: "body"
        }].forEach(function(t) {
            try {
                if (!isEmptyLadiPage(t.str)) {
                    var e = document.createRange().createContextualFragment(t.str);
                    document[t.elm].appendChild(e)
                }
            } catch (t) {}
        })
    }
}, LadiPageScriptV2.prototype.runEventTracking = function(t, e, i, a, n) {
    var o = this;
    if (this.runtime.isClient) {
        var r = null,
            l = null,
            d = null,
            s = null,
            c = null,
            u = o.runtime.currency,
            p = o.runtime.eventData[t],
            m = null,
            g = e.is_form,
            _ = e.is_click && e.count_data_event > 0 && o.runtime.tracking_button_click,
            y = e.is_custom;
        if (y) r = e.conversion_name, l = e.google_ads_conversion, d = e.google_ads_label, c = isEmptyLadiPage(e.purchase_value) ? null : parseFloatLadiPage(e.purchase_value) || 0;
        else {
            if (isEmptyLadiPage(t) || !isObjectLadiPage(p)) return;
            if (m = p.type, g && "form" == m) {
                if (r = p["option.form_conversion_name"], l = p["option.form_google_ads_conversion"], d = p["option.form_google_ads_label"], s = p["option.form_event_custom_script"], c = isEmptyLadiPage(p["option.form_purchase_value"]) ? null : parseFloatLadiPage(p["option.form_purchase_value"]) || 0, o.runtime.shopping) {
                    var f = document.querySelector('#POPUP_CHECKOUT .ladi-element[id="' + t + '"]');
                    isEmptyLadiPage(f) || (c = o.getCartCheckoutPrice(c))
                }
            } else r = p["option.conversion_name"], l = p["option.google_ads_conversion"], d = p["option.google_ads_label"], s = p["option.event_custom_script"]
        }
        var v = function(t) {
            if (t || isObjectLadiPage(window.ladi_conversion_api) && isObjectLadiPage(window.ladi_conversion_api.facebook) && isArrayLadiPage(window.ladi_conversion_api.facebook.pixels)) {
                return {
                    eventID: "ladi." + Date.now() + "." + (Math.floor(9e10 * Math.random()) + 1e10)
                }
            }
        };
        isNullLadiPage(o.runtime.tmp.ttq_click_button_tracking) && (o.runtime.tmp.ttq_click_button_tracking = 0);
        var h, P, L, E, A, b, T = function(i) {
                try {
                    "ViewContent" == i.conversion_name || isEmptyLadiPage(e.event) || (isObjectLadiPage(i.data) || (i.data = {}), i.data.content_id = e.event.target.id, i.data.content_name = e.event.target.textContent, isNullLadiPage(o.runtime.tmp.form_button_headline) && (o.runtime.tmp.form_button_headline = {}), isNullLadiPage(o.runtime.tmp.form_button_headline[t]) || (i.data.content_name = o.runtime.tmp.form_button_headline[t]))
                } catch (t) {}
                var a = [{
                    name: i.conversion_name,
                    custom_data: i.data,
                    data: i.ttq_event_data
                }];
                o.runtime.is_popupx ? (o.runtime.tmp.runActionPopupX({
                    conversion_name: i.conversion_name,
                    ttq_data: i.data,
                    ttq_event_data: i.ttq_event_data,
                    action: {
                        type: "run_tracking_ttq"
                    }
                }), o.runtime.tmp.runActionPopupX({
                    type: "tiktok",
                    key: "events",
                    keyData: a,
                    options: {
                        ttq_identify_data: i.ttq_identify_data
                    },
                    action: {
                        type: "run_conversion_api"
                    }
                })) : LadiPageQueueCommand.push(function() {
                    return !isNullLadiPage(window.ttq)
                }, function() {
                    window.ttq.track(i.conversion_name, i.data, i.ttq_event_data), o.runConversionApi("tiktok", "events", a, {
                        ttq_identify_data: i.ttq_identify_data
                    })
                })
            },
            w = function(t) {
                if (t || isObjectLadiPage(window.ladi_conversion_api) && isObjectLadiPage(window.ladi_conversion_api.tiktok) && isArrayLadiPage(window.ladi_conversion_api.tiktok.pixels)) {
                    return {
                        event_id: "ladi." + Date.now() + "." + (Math.floor(9e10 * Math.random()) + 1e10)
                    }
                }
                return {}
            },
            S = function(i, a) {
                try {
                    isEmptyLadiPage(e.event) || (isObjectLadiPage(a.data) || (a.data = {}), a.data.content_id = e.event.target.id, a.data.content_name = e.event.target.textContent, isNullLadiPage(o.runtime.tmp.form_button_headline) && (o.runtime.tmp.form_button_headline = {}), isNullLadiPage(o.runtime.tmp.form_button_headline[t]) || (a.data.content_name = o.runtime.tmp.form_button_headline[t]))
                } catch (t) {}
                o.runtime.is_popupx ? o.runtime.tmp.runActionPopupX({
                    is_auto_tracking: i,
                    track_name: a.track_name,
                    conversion_name: a.conversion_name,
                    ztrq_data: a.data,
                    action: {
                        type: "run_tracking_ztrq"
                    }
                }) : LadiPageQueueCommand.push(function() {
                    return isFunctionLadiPage(window.ztrq)
                }, function() {
                    (!i || isObjectLadiPage(window.LadiPageZaloAds) && window.LadiPageZaloAds.auto_tracking) && window.ztrq(a.track_name, a.conversion_name, a.data)
                })
            };
        if ((e.is_place_an_order || e.is_complete_payment) && isObjectLadiPage(e.payment_info)) {
            var O = null;
            try {
                O = {
                    sha256_phone_number: window.sha256(o.convertPhoneNumberFormData(e.payment_info.phone))
                }, isEmptyLadiPage(e.payment_info.email) || (O.sha256_email = window.sha256(e.payment_info.email)), O.external_id = window.sha256(window.ladi("LADI_UNIQUE_ID").get_cookie())
            } catch (t) {}
            isObjectLadiPage(O) && !isEmptyLadiPage(O.sha256_phone_number) && (o.runtime.is_popupx ? o.runtime.tmp.runActionPopupX({
                ttq_identify_data: O,
                action: {
                    type: "run_identify_ttq"
                }
            }) : LadiPageQueueCommand.push(function() {
                return !isNullLadiPage(window.ttq)
            }, function() {
                window.ttq.identify(O)
            })), e.is_place_an_order && T({
                conversion_name: "PlaceAnOrder",
                ttq_identify_data: O,
                data: {
                    value: e.payment_info.total_price,
                    currency: e.payment_info.currency_code,
                    content_id: o.runtime.ladipage_id,
                    content_type: "product"
                },
                ttq_event_data: w(o.runtime.is_popupx)
            }), e.is_complete_payment && (T({
                conversion_name: "CompletePayment",
                ttq_identify_data: O,
                data: {
                    value: e.payment_info.total_price,
                    currency: e.payment_info.currency_code,
                    content_id: o.runtime.ladipage_id,
                    content_type: "product"
                },
                ttq_event_data: w(o.runtime.is_popupx)
            }), S(!0, {
                track_name: "track",
                conversion_name: "Purchase"
            }))
        }
        if ((e.is_click_buy_now || e.is_open_popup && "POPUP_CHECKOUT" == t) && (o.runtime.tmp.ttq_click_button_tracking = Date.now(), T({
                conversion_name: "InitiateCheckout",
                data: {},
                ttq_event_data: w(o.runtime.is_popupx)
            }), S(!0, {
                track_name: "track",
                conversion_name: "InitiateCheckout"
            })), e.is_add_to_cart) return o.runtime.tmp.ttq_click_button_tracking = Date.now(), T({
            conversion_name: "AddToCart",
            data: {
                content_type: "product",
                quantity: e.cart_quantity,
                currency: e.cart_currency,
                value: e.cart_value
            },
            ttq_event_data: w(o.runtime.is_popupx)
        }), void S(!0, {
            track_name: "track",
            conversion_name: "AddToCart",
            data: {
                content_type: "product",
                quantity: e.cart_quantity,
                currency: e.cart_currency,
                value: e.cart_value
            }
        });
        if (isArrayLadiPage(e.data_event_run)) - 1 != e.data_event_run.findIndex(function(t) {
            return t.type == o.const.DATA_ACTION_TYPE.phone || t.type == o.const.DATA_ACTION_TYPE.email
        }) && (isEmptyLadiPage(a) || a.addEventListener("click", function(t) {
            isFunctionLadiPage(n) && !n(a, t) || (o.runtime.tmp.ttq_click_button_tracking = Date.now(), T({
                conversion_name: "Contact",
                data: {},
                ttq_event_data: w(o.runtime.is_popupx)
            }), S(!0, {
                track_name: "track",
                conversion_name: "Contact"
            }))
        }));
        if (!isEmptyLadiPage(a)) {
            var C = !1;
            return isEmptyLadiPage(l) || isEmptyLadiPage(d) || (C = !0), isEmptyLadiPage(r) || (C = !0), isEmptyLadiPage(s) || (C = !0), _ && (C = !0), -1 != ["section", "popup", "countdown"].indexOf(m) && (C = !1), void(C && a.addEventListener("click", function(r) {
                isFunctionLadiPage(n) && !n(a, r) || o.runEventTracking(t, e, i)
            }))
        }
        h = o.runtime.is_popupx, P = null, L = null, E = "trackCustom", A = [], b = null, isEmptyLadiPage(r) || (-1 != ["AddPaymentInfo", "AddToCart", "AddToWishlist", "CompleteRegistration", "Contact", "CustomizeProduct", "Donate", "FindLocation", "InitiateCheckout", "Lead", "PageView", "Purchase", "Schedule", "Search", "StartTrial", "SubmitApplication", "Subscribe", "ViewContent"].indexOf(r) && (E = "track"), isEmptyLadiPage(c) || isEmptyLadiPage(u) || ((P = {}).value = c, P.currency = u), L = v(h), A.push({
                fbq_track_name: E,
                conversion_name: r,
                fbq_data: P,
                fbq_event_data: L
            }), A.forEach(function(t) {
                h ? o.runtime.tmp.runActionPopupX({
                    fbq_track_name: t.fbq_track_name,
                    conversion_name: t.conversion_name,
                    fbq_data: t.fbq_data,
                    fbq_event_data: t.fbq_event_data,
                    action: {
                        type: "run_tracking_fbq"
                    }
                }) : LadiPageQueueCommand.push(function() {
                    return isFunctionLadiPage(window.fbq)
                }, function() {
                    window.fbq(t.fbq_track_name, t.conversion_name, t.fbq_data, t.fbq_event_data)
                });
                var e = o.copy(t.fbq_event_data);
                if (o.runtime.shopping && g) {
                    var a = o.getCartProducts();
                    isNullLadiPage(a) || (isObjectLadiPage(e) || (e = {}), e.cart_products = a)
                }
                isObjectLadiPage(i) && ["phone", "email"].forEach(function(t) {
                    var a = i[t];
                    isEmptyLadiPage(a) || (isObjectLadiPage(e) || (e = {}), e[t] = a)
                }), b = [{
                    key: t.fbq_track_name,
                    name: t.conversion_name,
                    custom_data: t.fbq_data,
                    data: e
                }], h ? o.runtime.tmp.runActionPopupX({
                    type: "facebook",
                    key: "events",
                    keyData: b,
                    action: {
                        type: "run_conversion_api"
                    }
                }) : o.runConversionApi("facebook", "events", b)
            })), _ && (E = "trackCustom", P = null, L = v(h), (A = []).push({
                fbq_track_name: E,
                conversion_name: "ClickButton",
                fbq_data: P,
                fbq_event_data: L
            }), A.forEach(function(t) {
                h ? o.runtime.tmp.runActionPopupX({
                    fbq_track_name: t.fbq_track_name,
                    conversion_name: t.conversion_name,
                    fbq_data: t.fbq_data,
                    fbq_event_data: t.fbq_event_data,
                    action: {
                        type: "run_tracking_fbq"
                    }
                }) : LadiPageQueueCommand.push(function() {
                    return isFunctionLadiPage(window.fbq)
                }, function() {
                    window.fbq(t.fbq_track_name, t.conversion_name, t.fbq_data, t.fbq_event_data)
                }), b = [{
                    key: t.fbq_track_name,
                    name: t.conversion_name,
                    custom_data: t.fbq_data,
                    data: t.fbq_event_data
                }], h ? o.runtime.tmp.runActionPopupX({
                    type: "facebook",
                    key: "events",
                    keyData: b,
                    action: {
                        type: "run_conversion_api"
                    }
                }) : o.runConversionApi("facebook", "events", b)
            })),
            function(t) {
                if (isObjectLadiPage(i)) {
                    var a = o.convertPhoneNumberFormData(i.phone),
                        n = {};
                    isEmptyLadiPage(i.email) || (n.email = i.email), isEmptyLadiPage(a) ? isEmptyLadiPage(i.phone) || (n.phone_number = i.phone) : n.phone_number = a, Object.keys(n).length > 0 && (t ? o.runtime.tmp.runActionPopupX({
                        conversion_name: "user_data",
                        gtag_data: n,
                        action: {
                            type: "run_tracking_gtag_set"
                        }
                    }) : LadiPageQueueCommand.push(function() {
                        return isFunctionLadiPage(window.gtag)
                    }, function() {
                        window.gtag("set", "user_data", n)
                    }))
                }
                isEmptyLadiPage(l) || isEmptyLadiPage(d) || (t ? o.runtime.tmp.runActionPopupX({
                    conversion_name: "conversion",
                    gtag_data: {
                        send_to: "AW-" + l + "/" + d
                    },
                    action: {
                        type: "run_tracking_gtag"
                    }
                }) : LadiPageQueueCommand.push(function() {
                    return isFunctionLadiPage(window.gtag)
                }, function() {
                    window.gtag("event", "conversion", {
                        send_to: "AW-" + l + "/" + d
                    })
                }));
                var s = null;
                if (!isEmptyLadiPage(r)) {
                    var g = "";
                    g = "section" == m ? "LadiPageSection" : "popup" == m ? "LadiPagePopup" : "form" == m ? "LadiPageConversion" : "LadiPageClick", y && (g = e.event_category);
                    var _ = LadiPageApp[m + o.const.APP_RUNTIME_PREFIX];
                    if (!isEmptyLadiPage(_)) {
                        var f = _(p, o.runtime.isClient);
                        isFunctionLadiPage(f.getEventTrackingCategory) && (g = _(p, o.runtime.isClient).getEventTrackingCategory())
                    }
                    s = {
                        event_category: g,
                        event_label: window.location.host + window.location.pathname
                    }, isEmptyLadiPage(c) || isEmptyLadiPage(u) || (s.value = c, s.currency = u), t ? o.runtime.tmp.runActionPopupX({
                        conversion_name: r,
                        gtag_data: s,
                        action: {
                            type: "run_tracking_gtag"
                        }
                    }) : LadiPageQueueCommand.push(function() {
                        return isFunctionLadiPage(window.gtag)
                    }, function() {
                        window.gtag("event", r, s)
                    })
                }
            }(o.runtime.is_popupx),
            function(t) {
                var e = null;
                if (isObjectLadiPage(i)) try {
                    e = {
                        sha256_phone_number: window.sha256(o.convertPhoneNumberFormData(i.phone))
                    }, isEmptyLadiPage(i.email) || (e.sha256_email = window.sha256(i.email)), e.external_id = window.sha256(window.ladi("LADI_UNIQUE_ID").get_cookie())
                } catch (t) {}
                isObjectLadiPage(e) && !isEmptyLadiPage(e.sha256_phone_number) && (t ? o.runtime.tmp.runActionPopupX({
                    ttq_identify_data: e,
                    action: {
                        type: "run_identify_ttq"
                    }
                }) : LadiPageQueueCommand.push(function() {
                    return !isNullLadiPage(window.ttq)
                }, function() {
                    window.ttq.identify(e)
                }));
                var a = null;
                if (!isEmptyLadiPage(r) && -1 == ["Purchase", "Lead"].indexOf(r)) {
                    var n = {};
                    "CompletePayment" != r || isEmptyLadiPage(c) || isEmptyLadiPage(u) || ((n = {
                        content_id: o.runtime.ladipage_id,
                        content_type: "product"
                    }).value = c, n.currency = u), a = w(t), T({
                        conversion_name: r,
                        data: n,
                        ttq_event_data: a,
                        ttq_identify_data: e
                    })
                }
                _ && (o.runLadiPageCommand(function(e) {
                    if ("ViewContent" == e.name && e.clickButton) return a = w(t), o.runtime.tmp.ttq_click_button_tracking = Date.now(), T({
                        conversion_name: e.name,
                        data: {},
                        ttq_event_data: a
                    }), !0
                }), o.runTimeout(function() {
                    a = w(t), T({
                        conversion_name: "ClickButton",
                        data: {},
                        ttq_event_data: a
                    })
                }, o.runtime.tmp.ttq_click_button_tracking + o.runtime.time_delay_click_button < Date.now() ? 0 : o.runtime.time_delay_click_button))
            }(o.runtime.is_popupx),
            function(a) {
                if (!e.is_facebook_widget && !e.is_form_multiple && g && isObjectLadiPage(i))
                    if (isEmptyLadiPage(i.phone)) isEmptyLadiPage(i.email) || S(!0, {
                        track_name: "track",
                        conversion_name: "CompleteRegistration"
                    });
                    else {
                        var n = null;
                        isEmptyLadiPage(u) || isEmptyLadiPage(c) || (n = {
                            content_type: "product",
                            currency: u,
                            value: c
                        }), !isNullLadiPage(n) || !isEmptyLadiPage(i.address) && function(e) {
                            var i = document.querySelector("#" + t + ' .ladi-form-item [name="' + e + '"]');
                            if (isEmptyLadiPage(i)) return !1;
                            var a = o.findAncestor(i, "ladi-form-item");
                            return a.hasAttribute("ladi-checkbox-required") ? "true" == a.getAttribute("ladi-checkbox-required") : !!i.required
                        }("address") ? S(!0, {
                            track_name: "track",
                            conversion_name: "Purchase",
                            data: n
                        }) : S(!0, {
                            track_name: "track",
                            conversion_name: "Lead"
                        })
                    }
            }(o.runtime.is_popupx), isEmptyLadiPage(s) || (o.runtime.is_popupx ? o.runtime.tmp.runActionPopupX({
                script: s,
                action: {
                    type: "event_custom_script"
                }
            }) : o.runFunctionString(s))
    }
}, LadiPageScriptV2.prototype.runFunctionString = function(t) {
    try {
        return new Function(t)()
    } catch (t) {}
}, LadiPageScriptV2.prototype.convertReplacePrefixStr = function(t, e) {
    var i = t,
        a = this.runtime.replacePrefixStart,
        n = this.runtime.replacePrefixEnd,
        o = this.runtime.replaceNewPrefixStart,
        r = this.runtime.replaceNewPrefixEnd;
    if (e) {
        var l = o;
        o = a, a = l, l = r, r = n, n = l
    }
    for (var d = new RegExp(a + "[^" + a + "$" + n + "]*" + n, "gi"), s = null, c = function(t) {
            i = i.replaceAll(t, t.replaceAll(a, o).replaceAll(n, r))
        }; null !== (s = d.exec(t));) s.index === d.lastIndex && d.lastIndex++, s.forEach(c);
    return i
}, LadiPageScriptV2.prototype.formatCurrency = function(t, e, i, a) {
    var n = {
        VND: "{0}Ä‘",
        KHR: "{0}áŸ›",
        USD: "${0}",
        EUR: "â‚¬{0}",
        GBP: "Â£{0}",
        THB: "à¸¿{0}",
        LAK: "â‚­{0}",
        PHP: "â‚±{0}",
        SGD: "S${0}",
        HKD: "HK${0}",
        TWD: "NT${0}",
        MYR: "RM{0}",
        IDR: "Rp{0}",
        INR: "â‚¹{0}"
    };
    if (Object.keys(n).forEach(function(t) {
            var i = n[t].replaceAll("{0}", "");
            (i = i.trim()) == e && (e = t)
        }), a) return isEmptyLadiPage(n[e]) ? e : n[e].format("").trim();
    var o = this.formatNumber(t, 3, null, {
        VND: 0,
        USD: 2,
        EUR: 2,
        GBP: 2,
        SGD: 2,
        MYR: 2,
        HKD: 2,
        TWD: 0,
        THB: 0,
        PHP: 0,
        KHR: 0,
        LAK: 0,
        IDR: 0,
        INR: 0
    } [e] || 0);
    return i && (o = isEmptyLadiPage(n[e]) ? o + " " + e : n[e].format(o)), o
}, LadiPageScriptV2.prototype.formatNumber = function(t, e, i, a) {
    if (void 0 != t) {
        void 0 == i && (i = 0), void 0 == a && (a = 0);
        var n = "\\d(?=(\\d{" + (e || 3) + "})+" + (a > 0 ? "\\." : "$") + ")";
        t = t.toFixed(Math.max(0, ~~a)).replace(new RegExp(n, "g"), "$&,");
        var o = null,
            r = null;
        i >= 1 && (r = (o = t.split("."))[0], t = r = new Array(i - r.length + 1).join("0") + r, 2 == o.length && (t += "." + o[1])), a >= 1 && 2 == (o = t.split(".")).length && (r = o[1], r = new Array(a - r.length + 1).join("0") + r, t = o[0] + "." + r)
    }
    return t
}, LadiPageScriptV2.prototype.setDataReplaceStr = function(t, e) {
    this.runtime.replaceStr[t] = e
}, LadiPageScriptV2.prototype.getDataReplaceStr = function(t, e) {
    var i = null;
    return isNullLadiPage(e) || (i = e[t]), isNullLadiPage(i) && (i = this.runtime.replaceStr[t]), i
}, LadiPageScriptV2.prototype.highlightText = function(t, e, i, a) {
    if (!isEmptyLadiPage(t) && 0 != e.length) {
        var n = i ? "gi" : "g",
            o = [];
        e.forEach(function(t) {
            o.push(t.replaceAll("|", "\\|"))
        }), o.sort(function(t, e) {
            return e.length - t.length
        });
        for (var r = this, l = function(t) {
                var l = new RegExp(o.join("|"), n);
                if (3 !== t.nodeType) r.highlightText(t, e, i, a);
                else if (l.test(t.textContent)) {
                    var d = document.createDocumentFragment(),
                        s = 0;
                    t.textContent.replace(l, function(e, i) {
                        var n = document.createTextNode(t.textContent.slice(s, i)),
                            o = null;
                        isFunctionLadiPage(a) ? o = a(e) : (o = document.createElement("span")).textContent = e, d.appendChild(n), d.appendChild(o), s = i + e.length
                    });
                    var c = document.createTextNode(t.textContent.slice(s));
                    d.appendChild(c), t.parentNode.replaceChild(d, t)
                }
            }, d = 0; d < t.childNodes.length; d++) {
            l(t.childNodes[d])
        }
    }
}, LadiPageScriptV2.prototype.convertDataReplaceStr = function(t, e, i, a, n, o, r) {
    var l = this,
        d = l.runtime.replacePrefixStart,
        s = l.runtime.replacePrefixEnd;
    l.runtime.convert_replace_str && (d = l.runtime.replaceNewPrefixStart, s = l.runtime.replaceNewPrefixEnd);
    for (var c = t = isEmptyLadiPage(t) ? "" : t, u = new RegExp(d + "[^" + d + "$" + s + "]*" + s, "gi"), p = null, m = [], g = function(t) {
            if (a) m.push(t);
            else {
                var i = t,
                    r = i.split("|");
                i = r[0].substr(d.length), 1 == r.length && (i = i.substr(0, i.length - s.length));
                var u = l.getDataReplaceStr(i, n);
                if (isEmptyLadiPage(u))
                    if (r.length > 1) {
                        var p = l.randomInt(1, r.length - 1);
                        u = r[p], p == r.length - 1 && (u = u.substr(0, u.length - s.length))
                    } else u = "";
                e && (isArrayLadiPage(u) && u.length > 1 && (u = JSON.stringify(u)), u = encodeURIComponent(u)), c = o && isArrayLadiPage(u) && u.length > 1 ? u : c.replaceAll(t, u)
            }
        }; null !== (p = u.exec(t));) p.index === u.lastIndex && u.lastIndex++, p.forEach(g);
    return m = m.unique(), isObjectLadiPage(r) && r.return_list_match ? m : (l.highlightText(i, m, !0, function(t) {
        var e = document.createElement("span");
        return e.setAttribute("data-replace-str", t), e
    }), l.runtime.isDesktop && e && !isEmptyLadiPage(c) && ["fb://profile/", "fb://profile/?id=", "fb://page/?id=", "fb://page/", "fb://group/?id=", "fb://group/"].forEach(function(t) {
        c.startsWith(t) && (c = c.replaceAll(t, "https://www.facebook.com/"))
    }), c)
}, LadiPageScriptV2.prototype.runFormulaData = function(t) {
    var e = this;
    if (e instanceof LadiPageScriptV2 || (e = LadiPageScript), isEmptyLadiPage(t) || !isArrayLadiPage(e.runtime.tmp.list_set_formula_data_watch) || -1 != e.runtime.tmp.list_set_formula_data_watch.indexOf(t) || -1 != e.runtime.tmp.list_set_formula_data_watch.indexOf(t + ".value") || -1 != e.runtime.tmp.list_set_formula_data_watch.indexOf(t + ".label") || -1 != e.runtime.tmp.list_set_formula_data_watch.indexOf(t + ".country.value") || -1 != e.runtime.tmp.list_set_formula_data_watch.indexOf(t + ".country.label") || -1 != e.runtime.tmp.list_set_formula_data_watch.indexOf(t + ".state.value") || -1 != e.runtime.tmp.list_set_formula_data_watch.indexOf(t + ".state.label") || -1 != e.runtime.tmp.list_set_formula_data_watch.indexOf(t + ".district.value") || -1 != e.runtime.tmp.list_set_formula_data_watch.indexOf(t + ".district.label") || -1 != e.runtime.tmp.list_set_formula_data_watch.indexOf(t + ".ward.value") || -1 != e.runtime.tmp.list_set_formula_data_watch.indexOf(t + ".ward.label")) {
        var i;
        isNullLadiPage(e.runtime.tmp.list_set_formula_data) && (e.runtime.tmp.list_set_formula_data = (i = {}, Object.keys(e.runtime.eventData).forEach(function(t) {
            var a = e.runtime.eventData[t];
            isObjectLadiPage(a) && a["option.data_formula.is_enable"] && !isEmptyLadiPage(a["option.data_formula.text"]) && (i[t] = a["option.data_formula.text"])
        }), i));
        var a = Object.keys(e.runtime.tmp.list_set_formula_data);
        if (0 != a.length) {
            var n = function(t, e, i, a) {
                    return isNullLadiPage(a) && (e != parseFloatLadiPage(e) && e != parseFloatLadiPage(window.ladi(t).value()) || (a = !0)), a ? parseFloatLadiPage(e) || 0 : "`" + (isEmptyLadiPage(e) ? "" : e) + "`"
                },
                o = function(t) {
                    var e = 0;
                    return t.forEach(function(t) {
                        e += parseFloatLadiPage(t) || 0
                    }), e
                },
                r = function(t, i) {
                    var a = e.getDataReplaceStr(i);
                    return n(t, a)
                },
                l = function(i, a) {
                    if (i != t) {
                        var l = [];
                        e.convertDataReplaceStr(a, !1, null, !0, null, !1, {
                            return_list_match: !0
                        }).forEach(function(t) {
                            var d = t.replaceAll(e.runtime.replaceNewPrefixStart, "").replaceAll(e.runtime.replaceNewPrefixEnd, "");
                            a = a.replaceAll(t, 'LadiFormulaData["' + d + '"]'), l.push('LadiFormulaData["' + d + '"] = ' + function(t, i) {
                                try {
                                    var a = 0,
                                        l = null,
                                        d = null,
                                        s = null,
                                        c = [],
                                        u = null,
                                        p = i.split(".")[0],
                                        m = i.split(".")[1],
                                        g = i.split(".")[2];
                                    if (("country" == m || "state" == m || "district" == m || "ward" == m) && (l = document.querySelector("#" + p + ' .ladi-form-item [name="' + m + '"]'), !isEmptyLadiPage(l))) return u = "", isEmptyLadiPage(l.value) || ((isEmptyLadiPage(g) || "value" == g) && (u = l.value.split(":")[0]), "label" == g && (u = l.value.split(":")[1])), "`" + (isEmptyLadiPage(u) ? "" : u) + "`";
                                    m = i.split(".")[0], g = i.split(".")[1];
                                    var _ = !1;
                                    if (l = document.getElementById(m), isEmptyLadiPage(l)) return r(t, i);
                                    if ((s = l.querySelectorAll(".ladi-form-item.ladi-form-checkbox .ladi-form-checkbox-item input")).length > 0) {
                                        for (c = [], _ = !0, a = 0; a < s.length; a++) {
                                            if ((isEmptyLadiPage(g) || "value" == g) && !isEmptyLadiPage(s[a].value) && parseFloatLadiPage(s[a].value) != s[a].value) {
                                                _ = !1;
                                                break
                                            }
                                            if ("label" == g && (d = (d = e.findAncestor(s[a], "ladi-form-checkbox-item")).getElementsByTagName("span")[0], !isEmptyLadiPage(d) && !isEmptyLadiPage(d.textContent) && parseFloatLadiPage(d.textContent) != d.textContent)) {
                                                _ = !1;
                                                break
                                            }
                                        }
                                        for (a = 0; a < s.length; a++) s[a].checked && ((isEmptyLadiPage(g) || "value" == g) && (isEmptyLadiPage(s[a].value) || c.push(s[a].value)), "label" == g && (d = (d = e.findAncestor(s[a], "ladi-form-checkbox-item")).getElementsByTagName("span")[0], isEmptyLadiPage(d) || isEmptyLadiPage(d.textContent) || c.push(d.textContent)));
                                        return u = c.length <= 1 ? c[0] : _ ? o(c) : c.join("; "), n(t, u, 0, _)
                                    }
                                    if (s = l.querySelector(".ladi-form-item select"), !isEmptyLadiPage(s)) {
                                        for (c = [], _ = !0, d = s.getElementsByTagName("option"), a = 0; a < d.length; a++) {
                                            if ((isEmptyLadiPage(g) || "value" == g) && !isEmptyLadiPage(d[a].value) && parseFloatLadiPage(d[a].value) != d[a].value) {
                                                _ = !1;
                                                break
                                            }
                                            if ("label" == g && !isEmptyLadiPage(d[a].textContent) && parseFloatLadiPage(d[a].textContent) != d[a].textContent) {
                                                _ = !1;
                                                break
                                            }
                                        }
                                        return isEmptyLadiPage(s.value) || ((isEmptyLadiPage(g) || "value" == g) && c.push(s.value), "label" == g && (d = s.querySelector('option[value="' + s.value + '"]'), isEmptyLadiPage(d) || c.push(d.textContent))), u = c.length <= 1 ? c[0] : _ ? o(c) : c.join("; "), n(t, u, 0, _)
                                    }
                                    if ((s = l.querySelectorAll(".ladi-survey .ladi-survey-option")).length > 0) {
                                        for (c = [], _ = !0, a = 0; a < s.length; a++) {
                                            if ((isEmptyLadiPage(g) || "value" == g) && !isEmptyLadiPage(s[a].getAttribute("data-value")) && parseFloatLadiPage(s[a].getAttribute("data-value")) != s[a].getAttribute("data-value")) {
                                                _ = !1;
                                                break
                                            }
                                            if ("label" == g) {
                                                if (d = s[a].getElementsByClassName("ladi-survey-option-label")[0], isEmptyLadiPage(d)) {
                                                    _ = !1;
                                                    break
                                                }
                                                if (!isEmptyLadiPage(s[a].textContent) && parseFloatLadiPage(s[a].textContent) != s[a].textContent) {
                                                    _ = !1;
                                                    break
                                                }
                                            }
                                        }
                                        for (a = 0; a < s.length; a++) s[a].classList.contains("selected") && ((isEmptyLadiPage(g) || "value" == g) && (isEmptyLadiPage(s[a].getAttribute("data-value")) || c.push(s[a].getAttribute("data-value"))), "label" == g && (d = s[a].getElementsByClassName("ladi-survey-option-label")[0], isEmptyLadiPage(d) || isEmptyLadiPage(s[a].textContent) || c.push(s[a].textContent)));
                                        return u = c.length <= 1 ? c[0] : _ ? o(c) : c.join("; "), n(t, u, 0, _)
                                    }
                                    return s = l.querySelector('.ladi-form-item input[type="number"]'), isEmptyLadiPage(s) ? (u = window.ladi(i).value(null, null, {
                                        only_text: !0,
                                        text_trim: !0
                                    }), isArrayLadiPage(u) && (u = u.join("; ")), n(t, u)) : (u = s.value, n(t, u, 0, !0))
                                } catch (e) {
                                    return r(t, i)
                                }
                            }(i, d) + ";")
                        }), l.push("return " + a + ";");
                        var d = e.runFunctionString(l.join(""));
                        window.ladi(i).value(d, null, {
                            running_formula_data: !0
                        })
                    }
                };
            e.removeTimeout(e.runtime.tmp.timeout_set_formula_data_id), e.runtime.tmp.timeout_set_formula_data_id = e.runTimeout(function() {
                a.forEach(function(t) {
                    l(t, e.runtime.tmp.list_set_formula_data[t])
                })
            }, 50)
        }
    }
}, LadiPageScriptV2.prototype.setDataReplaceElement = function(t, e, i, a, n) {
    var o = isEmptyLadiPage(a) ? document : document.getElementById(a);
    if (!isEmptyLadiPage(o)) {
        for (var r = o.querySelectorAll("span[data-replace-str]"), l = 0; l < r.length; l++) {
            var d = r[l].getAttribute("data-replace-str");
            r[l].innerHTML = this.convertDataReplaceStr(d, !1, null, !1, i)
        }
        for (var s = o.querySelectorAll("a[data-replace-href]"), c = 0; c < s.length; c++) {
            var u = s[c].getAttribute("data-replace-href");
            u = this.convertDataReplaceStr(u, !0, null, !1, i), s[c].href = u
        }
        for (var p = o.querySelectorAll(".ladi-element .ladi-form-item-container [name]"), m = 0; m < p.length; m++) {
            var g = null,
                _ = null,
                y = !1,
                f = null,
                v = p[m].getAttribute("type");
            if (v = isEmptyLadiPage(v) ? v : v.trim(), t) {
                var h = p[m].getAttribute("name").trim();
                (y = !0) && -1 == n.indexOf(h) && (y = !1), y && "country" == h && "true" == p[m].getAttribute("data-is-select-country") && (y = !1), y && (g = this.getDataReplaceStr(h, i))
            }
            if (!y) {
                if (f = this.findAncestor(p[m], "ladi-element"), isEmptyLadiPage(f)) continue;
                var P = this.runtime.eventData[f.id];
                if (isEmptyLadiPage(P)) continue;
                var L = P["option.input_default_value"];
                if (isEmptyLadiPage(L)) continue;
                var E = !1;
                "INPUT" == p[m].tagName && "checkbox" == v && (E = !0), g = this.convertDataReplaceStr(L, !1, null, !1, i, E)
            }
            if (!isNullLadiPage(g)) {
                if (_ = isArrayLadiPage(g) ? g[0] : g, _ = isNullLadiPage(_) ? "" : _, _ = String(_), "INPUT" == p[m].tagName)
                    if ("checkbox" == v || "radio" == v) {
                        var A = !1;
                        if ("checkbox" == v) {
                            var b = g;
                            isArrayLadiPage(b) || (b = [b]), A = -1 != b.indexOf(p[m].getAttribute("value"))
                        }
                        "radio" == v && (A = p[m].getAttribute("value") == _.trim()), A ? (p[m].checked = !0, e && p[m].setAttribute("checked", "checked")) : (p[m].checked = !1, e && p[m].removeAttribute("checked"));
                        var T = this.findAncestor(p[m], "ladi-form-checkbox-item");
                        if (!isEmptyLadiPage(T)) {
                            var w = T.querySelector("span");
                            isEmptyLadiPage(w) || w.setAttribute("data-checked", p[m].checked)
                        }
                    } else f = this.findAncestor(p[m], "ladi-element"), (isEmptyLadiPage(f) || "true" != f.getAttribute("data-quantity")) && (p[m].value = _.trim(), e && p[m].setAttribute("value", p[m].value));
                if ("TEXTAREA" == p[m].tagName && (p[m].value = _.trim(), e && (p[m].innerHTML = p[m].value)), "SELECT" == p[m].tagName) {
                    var S = p[m].querySelector('option[value="' + _.trim() + '"]');
                    if (!isEmptyLadiPage(S) && (p[m].value = S.getAttribute("value"), e && !S.hasAttribute("selected"))) {
                        for (var O = p[m].querySelectorAll("option"), C = 0; C < O.length; C++) O[C].removeAttribute("selected");
                        S.setAttribute("selected", "selected")
                    }
                }
            }
        }
        for (var I = document.querySelectorAll(".ladi-element .ladi-image-background[data-replace-" + this.runtime.device + "-src]"), N = 0; N < I.length; N++) {
            var k = I[N].getAttribute("data-replace-" + this.runtime.device + "-src");
            k = this.convertDataReplaceStr(k, !0, null, !1, i), k = decodeURIComponentLadiPage(k);
            this.findAncestor(I[N], "ladi-element");
            if (isEmptyLadiPage(k)) I[N].style.setProperty("background-image", "none");
            else {
                var x = this.findAncestor(I[N], "ladi-element");
                k = this.getOptimizeImage(k, x.clientWidth, x.clientHeight, !0, !1, !1, !0), I[N].style.setProperty("background-image", 'url("' + k + '")')
            }
        }
        this.runFormulaData()
    }
}, LadiPageScriptV2.prototype.setDataReplaceStart = function() {
    for (var t = this, e = document.querySelectorAll(".ladi-headline, .ladi-paragraph, .ladi-list-paragraph ul"), i = 0; i < e.length; i++) this.convertDataReplaceStr(e[i].innerHTML, !1, e[i], !0);
    var a = null,
        n = [];
    Object.keys(t.runtime.eventData).forEach(function(e) {
        var i = t.runtime.eventData[e];
        isObjectLadiPage(i) && i["option.data_formula.is_enable"] && !isEmptyLadiPage(i["option.data_formula.text"]) && t.convertDataReplaceStr(i["option.data_formula.text"], !1, null, !0, null, !1, {
            return_list_match: !0
        }).forEach(function(e) {
            var i = e.replaceAll(t.runtime.replaceNewPrefixStart, "").replaceAll(t.runtime.replaceNewPrefixEnd, "");
            n.push(i)
        })
    }), t.runtime.tmp.list_set_formula_data_watch = n;
    for (var o = function(e) {
            a = t.findAncestor(e.target, "ladi-element"), t.runFormulaData(a.id)
        }, r = document.querySelectorAll(".ladi-form > .ladi-element .ladi-form-item input, .ladi-form > .ladi-element .ladi-form-item textarea"), l = 0; l < r.length; l++) a = t.findAncestor(r[l], "ladi-element"), -1 == n.indexOf(a.id) && -1 == n.indexOf(a.id + ".value") && -1 == n.indexOf(a.id + ".label") && -1 == n.indexOf(a.id + ".country.value") && -1 == n.indexOf(a.id + ".country.label") || (r[l].addEventListener("input", o), r[l].addEventListener("change", o));
    var d = document.querySelectorAll(".ladi-form > .ladi-element .ladi-form-item select");
    for (l = 0; l < d.length; l++) a = t.findAncestor(d[l], "ladi-element"), -1 == n.indexOf(a.id) && -1 == n.indexOf(a.id + ".value") && -1 == n.indexOf(a.id + ".label") && -1 == n.indexOf(a.id + ".state.value") && -1 == n.indexOf(a.id + ".state.label") && -1 == n.indexOf(a.id + ".district.value") && -1 == n.indexOf(a.id + ".district.label") && -1 == n.indexOf(a.id + ".ward.value") && -1 == n.indexOf(a.id + ".ward.label") || d[l].addEventListener("change", o);
    this.setDataReplaceElement(!0, !0, null, null, Object.keys(this.runtime.replaceStr))
}, LadiPageScriptV2.prototype.runLimitRequest = function(t, e) {
    var i = this,
        a = 1e3 / t;
    if (i.runtime.tmp.time_limit_request_next > Date.now()) return i.runTimeout(function() {
        i.runLimitRequest(t, e)
    }, a / 5);
    i.runtime.tmp.time_limit_request_next = Date.now() + a, isFunctionLadiPage(e) && e()
}, LadiPageScriptV2.prototype.showMessage = function(t, e, i) {
    t = this.convertDataReplaceStr(t, !1, null, !1, e), this.showMessageModal(t, i)
}, LadiPageScriptV2.prototype.showMessageModal = function(t, e) {
    if (this.runtime.has_popupx) this.runtime.tmp.popupx_show_message_callback = e, this.runtime.tmp.runActionPopupX({
        lang: this.const.LANG,
        message: t,
        action: {
            type: "show_message"
        }
    });
    else {
        var i = document.getElementsByClassName("ladipage-message")[0];
        if (isEmptyLadiPage(i) || i.parentElement.removeChild(i), isEmptyLadiPage(t)) return void(isFunctionLadiPage(e) && e());
        (i = document.createElement("div")).className = "ladipage-message", document.body.appendChild(i);
        var a = document.createElement("div");
        a.className = "ladipage-message-box", i.appendChild(a);
        var n = document.createElement("span");
        a.appendChild(n), n.textContent = this.const.LANG.ALERT_TITLE;
        var o = document.createElement("div");
        o.className = "ladipage-message-text", a.appendChild(o), o.innerHTML = t;
        var r = document.createElement("button");
        r.className = "ladipage-message-close", a.appendChild(r), r.textContent = this.const.LANG.ALERT_BUTTON_TEXT, r.focus(), r.addEventListener("click", function(t) {
            t.stopPropagation(), i.parentElement.removeChild(i), isFunctionLadiPage(e) && e()
        })
    }
}, LadiPageScriptV2.prototype.getTextClipboard = function(t, e) {
    var i = function(i) {
            isFunctionLadiPage(e) && (i = isEmptyLadiPage(i) ? isEmptyLadiPage(t) ? "" : t : i, e(!0, i))
        },
        a = function() {
            try {
                var t = document.createElement("textarea");
                t.setAttribute("style", "position: fixed; top: 0, left: 0, width: 1px; height: 1px; opacity: 0;"), document.body.appendChild(t), t.focus();
                var a = document.execCommand("paste"),
                    n = t.value;
                if (t.parentElement.removeChild(t), a) return void i(n)
            } catch (t) {}
            isFunctionLadiPage(e) && e(!1, null)
        };
    window.navigator.clipboard ? window.navigator.clipboard.readText().then(i).catch(a) : a()
}, LadiPageScriptV2.prototype.copyTextClipboard = function(t, e) {
    var i = function() {
            isFunctionLadiPage(e) && e(!0, t)
        },
        a = function() {
            try {
                var a = document.createElement("textarea");
                a.setAttribute("style", "position: fixed; top: 0, left: 0, width: 1px; height: 1px; opacity: 0;"), document.body.appendChild(a), a.value = t, a.select();
                var n = document.execCommand("copy");
                if (a.parentElement.removeChild(a), n) return void i()
            } catch (t) {}
            isFunctionLadiPage(e) && e(!1, null)
        };
    window.navigator.clipboard ? window.navigator.clipboard.writeText(t).then(i).catch(a) : a()
}, LadiPageScriptV2.prototype.fireEvent = function(t, e, i) {
    t = isStringLadiPage(t) ? document.querySelector(t) : t;
    var a = document.createEvent("HTMLEvents");
    (a.initEvent(e, !0, !0), isObjectLadiPage(i)) && Object.keys(i).forEach(function(t) {
        a[t] = i[t]
    });
    return !t.dispatchEvent(a)
}, LadiPageScriptV2.prototype.tapEventListener = function(t, e) {
    var i = this,
        a = function(t) {
            isFunctionLadiPage(e) && e(t)
        };
    if (t.addEventListener("click", a), "ontouchstart" in window) {
        var n = 0,
            o = 0,
            r = i.getWidthDevice(),
            l = Math.max(1, Math.floor(.01 * r)),
            d = null;
        t.addEventListener("touchstart", function(e) {
            e = i.getEventCursorData(e), i.removeTimeout(d), n = e.screenX, o = e.screenY, t.removeEventListener("click", a)
        }, i.runtime.scrollEventPassive), t.addEventListener("touchend", function(e) {
            e = i.getEventCursorData(e), Math.abs(e.screenX - n) <= l && Math.abs(e.screenY - o) <= l && a(e), d = i.runTimeout(function() {
                t.addEventListener("click", a)
            }, i.runtime.time_click)
        })
    }
}, LadiPageScriptV2.prototype.findAncestor = function(t, e) {
    e = isArrayLadiPage(e) ? e : [e];
    for (var i = function(t, e) {
            if (!isNullLadiPage(t) && (isNullLadiPage(t.classList) || !t.classList.contains(e)))
                for (;
                    (t = t.parentElement) && !t.classList.contains(e););
            return t
        }, a = 0; a < e.length && (t = i(t, e[a]), !isEmptyLadiPage(t)); a++);
    return t
}, LadiPageScriptV2.prototype.createStyleElement = function(t, e) {
    var i = document.getElementById(t);
    return isEmptyLadiPage(i) && ((i = document.createElement("style")).id = t, i.type = "text/css", document.head.appendChild(i)), i.innerHTML != e && (i.innerHTML = e), i
}, LadiPageScriptV2.prototype.createTmpElement = function(t, e, i, a, n) {
    var o = null;
    (o = "svg" == t.toLowerCase() ? document.createElementNS("http://www.w3.org/2000/svg", t) : document.createElement(t), isEmptyLadiPage(i)) || Object.keys(i).forEach(function(t) {
        o.setAttribute(t, i[t])
    });
    var r = document.createElement("div");
    return r.appendChild(o), a ? o.outerHTML = e : o.innerHTML = e, n ? r : r.firstChild
}, LadiPageScriptV2.prototype.getSource2ndClick = function(t) {
    var e = this.runtime.eventData[t];
    if (!isEmptyLadiPage(e)) return "image" == e.type && e[this.runtime.device + ".option.image_setting.2nd_click"] ? e[this.runtime.device + ".option.image_setting.source_2nd_click"] : "shape" == e.type && e["option.shape_setting.2nd_click"] ? e[this.runtime.device + ".option.shape_setting.source_2nd_click"] : void 0
}, LadiPageScriptV2.prototype.getCountdownTime = function(t, e) {
    var i = Math.floor(t / 1e3),
        a = i % 86400,
        n = a % 3600,
        o = Math.floor(i / 86400),
        r = Math.floor(a / 3600),
        l = Math.floor(n / 60),
        d = n % 60;
    o = o < 0 ? 0 : o, r = r < 0 ? 0 : r, l = l < 0 ? 0 : l, d = d < 0 ? 0 : d, o = o < 10 ? "0" + o : o, r = r < 10 ? "0" + r : r, l = l < 10 ? "0" + l : l, d = d < 10 ? "0" + d : d;
    var s = {};
    return s[this.const.COUNTDOWN_ITEM_TYPE.day] = o, s[this.const.COUNTDOWN_ITEM_TYPE.hour] = r, s[this.const.COUNTDOWN_ITEM_TYPE.minute] = l, s[this.const.COUNTDOWN_ITEM_TYPE.seconds] = d, isEmptyLadiPage(e) ? s : s[e]
}, LadiPageScriptV2.prototype.getElementBoundingClientRect = function(t) {
    isStringLadiPage(t) && (t = document.getElementById(t));
    var e = t.getBoundingClientRect();
    return (isNullLadiPage(e.x) || isNullLadiPage(e.y)) && (e.x = e.left, e.y = e.top), e
}, LadiPageScriptV2.prototype.getElementViewBox = function(t) {
    var e = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        i = t.getAttribute("viewBox").split(" ");
    return e.x = parseFloatLadiPage(i[0]) || 0, e.y = parseFloatLadiPage(i[1]) || 0, e.width = parseFloatLadiPage(i[2]) || 0, e.height = parseFloatLadiPage(i[3]) || 0, e
}, LadiPageScriptV2.prototype.getEventCursorData = function(t) {
    return ["pageX", "pageY", "screenX", "screenY"].forEach(function(e) {
        isNullLadiPage(t[e]) && (!isEmptyLadiPage(t.touches) && t.touches.length > 0 ? t[e] = t.touches[0][e] : !isEmptyLadiPage(t.targetTouches) && t.targetTouches.length > 0 ? t[e] = t.targetTouches[0][e] : !isEmptyLadiPage(t.changedTouches) && t.changedTouches.length > 0 && (t[e] = t.changedTouches[0][e]))
    }), t
}, LadiPageScriptV2.prototype.getElementAHref = function(t, e) {
    var i = document.createElement("a");
    return !e || t.toLowerCase().startsWith("http://") || t.toLowerCase().startsWith("https://") || t.startsWith("//") || (t = "http://" + t), i.href = t, i
}, LadiPageScriptV2.prototype.loadScript = function(t, e, i, a, n) {
    var o = document.createElement("script");
    (o.type = "text/javascript", isFunctionLadiPage(i) && (a = i, i = e, e = null), i && (o.async = !0), isObjectLadiPage(e)) && Object.keys(e).forEach(function(t) {
        "defer" == t || "async" == t ? o[t] = e[t] : o.setAttribute(t, e[t])
    });
    o.addEventListener("load", a), o.src = t, isObjectLadiPage(n) && n.hasOwnProperty("elm") ? n.elm.appendChild(o) : document.head.appendChild(o)
}, LadiPageScriptV2.prototype.loadCss = function(t, e) {
    var i = document.createElement("link");
    (i.rel = "stylesheet", isObjectLadiPage(e)) && Object.keys(e).forEach(function(t) {
        i.setAttribute(t, e[t])
    });
    i.href = t, document.head.appendChild(i)
}, LadiPageScriptV2.prototype.showLoadingBlur = function() {
    var t = this;
    t instanceof LadiPageScriptV2 || (t = LadiPageScript);
    var e = document.getElementsByClassName("ladi-loading")[0];
    isEmptyLadiPage(e) && ((e = document.createElement("div")).className = "ladi-loading", e.innerHTML = '<div class="loading"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>', document.body.appendChild(e))
}, LadiPageScriptV2.prototype.hideLoadingBlur = function() {
    var t = this;
    t instanceof LadiPageScriptV2 || (t = LadiPageScript);
    var e = document.getElementsByClassName("ladi-loading")[0];
    isEmptyLadiPage(e) || e.parentElement.removeChild(e)
}, LadiPageScriptV2.prototype.isLoadingBlur = function() {
    var t = document.getElementsByClassName("ladi-loading")[0];
    return !isEmptyLadiPage(t)
}, LadiPageScriptV2.prototype.randomId = function() {
    var t = Date.now(),
        e = window.performance && window.performance.now && 1e3 * window.performance.now() || 0;
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(i) {
        var a = 16 * Math.random();
        return t > 0 ? (a = (t + a) % 16 | 0, t = Math.floor(t / 16)) : (a = (e + a) % 16 | 0, e = Math.floor(e / 16)), ("x" === i ? a : 3 & a | 8).toString(16)
    })
}, LadiPageScriptV2.prototype.decodeValue = function(t) {
    var e = this;
    isObjectLadiPage(t) && Object.keys(t).forEach(function(i) {
        t[i] = e.decodeValue(t[i])
    });
    if (isArrayLadiPage(t))
        for (var i = 0; i < t.length; i++) t[i] = e.decodeValue(t[i]);
    return isStringLadiPage(t) && (t = t.decode()), t
}, LadiPageScriptV2.prototype.run = function(t, e) {
    var i = this;
    if (i.runtime.isLoadHtmlGlobal) {
        i.runTimeout(function() {
            i.runtime.formdata && isNullLadiPage(i.runFormData) && i.loadScript(i.const.CDN_LIBRARY_JS_URL + "ladipage.formdata.min.js?v=" + i.runtime.version, {
                defer: !0
            }, null, null, {
                elm: document.body
            }), i.runtime.shopping && isNullLadiPage(i.runShopping) && i.loadScript(i.const.CDN_LIBRARY_JS_URL + "ladipage.shopping.min.js?v=" + i.runtime.version, {
                defer: !0
            }, null, null, {
                elm: document.body
            }), i.trackingInit(i.runtime.data_delay_js), i.customScriptDelayInit()
        }, i.runtime.time_delay_js), language_set(i.const["LANG" + i.runtime.lang], !0), i.runtime.isIE = !!document.documentMode, i.runtime.isIE = i.runtime.isIE ? i.runtime.isIE : !i.runtime.isIE && !!window.StyleMedia, i.runtime.scrollEventPassive = null;
        try {
            var a = Object.defineProperty({}, "passive", {
                get: function() {
                    i.runtime.scrollEventPassive = {
                        passive: !0
                    }
                }
            });
            window.addEventListener("testPassive", null, a), window.removeEventListener("testPassive", null, a)
        } catch (t) {}
        i.runtime.isClient = t, i.runtime.timenow = window.ladi("_timenow").get_cookie(), isEmptyLadiPage(i.runtime.timenow) ? (i.runtime.timenow = Date.now(), window.ladi("_timenow").set_cookie(i.runtime.timenow, 1)) : i.runtime.timenow = parseFloatLadiPage(i.runtime.timenow) || 0;
        try {
            i.runtime.widthScrollBar = window.innerWidth - document.documentElement.clientWidth
        } catch (t) {}
        if (isStringLadiPage(i.runtime.eventData)) try {
            var n = decodeURIComponentLadiPage(i.runtime.eventData);
            i.runtime.eventData = JSON.parse(n)
        } catch (t) {
            var o = i.runtime.eventData.replaceAll(/&amp;/g, "&").replaceAll(/&gt;/g, ">").replaceAll(/&lt;/g, "<").replaceAll(/&quot;/g, '"');
            o = o.replaceAll("\r\n", "").replaceAll("\n", ""), i.runtime.eventData = JSON.parse(o)
        } else {
            var r = document.getElementById("script_event_data");
            if (!isEmptyLadiPage(r)) try {
                i.runtime.eventData = JSON.parse(r.innerHTML), Object.keys(i.runtime.eventData).forEach(function(t) {
                    i.runtime.eventData[t] = i.deOptimizeEventData(i.copy(i.runtime.eventData[t]), i.const.OPTIMIZE_EVENT_DATA_KEY_LIST, "OPTIMIZE_EVENT_DATA_KEY_LIST"), i.runtime.eventData[t] = i.decodeValue(i.runtime.eventData[t])
                })
            } catch (t) {
                i.runtime.eventData = {}
            }
        }
        var l = document.getElementById("script_event_data_website");
        if (!isEmptyLadiPage(l)) try {
            var d = JSON.parse(l.innerHTML);
            Object.keys(d).forEach(function(t) {
                d[t] = i.deOptimizeEventData(d[t], i.const.OPTIMIZE_EVENT_DATA_KEY_LIST, "OPTIMIZE_EVENT_DATA_KEY_LIST"), d[t] = i.decodeValue(d[t])
            }), i.runtime.eventData = Object.assign(i.runtime.eventData, d)
        } catch (t) {}
        var s = document.getElementById("script_dataset_data_website");
        if (!isEmptyLadiPage(s)) try {
            i.runtime.tmp.dataset_data_website = JSON.parse(s.innerHTML)
        } catch (t) {}
        var c = document.getElementById("script_product_data_website");
        if (!isEmptyLadiPage(c)) try {
            i.runtime.tmp.product_data_website = JSON.parse(c.innerHTML)
        } catch (t) {}
        var u = document.getElementById("script_category_detail_data");
        if (!isEmptyLadiPage(u)) try {
            i.runtime.tmp.category_detail_data = JSON.parse(u.innerHTML)
        } catch (t) {}
        var p = document.getElementById("script_tag_detail_data");
        if (!isEmptyLadiPage(p)) try {
            i.runtime.tmp.tag_detail_data = JSON.parse(p.innerHTML)
        } catch (t) {}
        var m = document.getElementById("script_post_detail_data");
        if (!isEmptyLadiPage(m)) try {
            i.runtime.tmp.post_detail_data = JSON.parse(m.innerHTML)
        } catch (t) {}
        isNullLadiPage(window.ladi_is_desktop) ? i.runtime.isDesktop = t ? !/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(window.navigator.userAgent.toLowerCase()) : LadiPage.isDesktop() : i.runtime.isDesktop = t ? window.ladi_is_desktop : LadiPage.isDesktop(), i.runtime.isBrowserDesktop = !("ontouchstart" in window), i.runtime.device = i.runtime.isDesktop ? i.const.DESKTOP : i.const.MOBILE, i.runtime.tmp.isFirstScroll = !0, i.runtime.tmp.capture_form_data_last = {}, i.runtime.tmp.product_info = {}, i.runtime.tmp.timeout_product_info = {}, i.runtime.tmp.product_tag_info = {}, i.runtime.tmp.timeout_product_tag_info = {}, i.runtime.tmp.dataset_check_load = !1, i.runtime.tmp.dataset_data = {}, i.runtime.tmp.timeout_dataset_data = {}, i.runtime.tmp.cart = [], i.runtime.tmp.add_to_cart_discount = 0, i.runtime.tmp.add_to_cart_fee_shipping = 0, i.runtime.tmp.is_click_add_to_cart = !1, i.runtime.tmp.is_click_check_price_discount = !1, i.runtime.tmp.current_use_coupon = null;
        var g = Object.keys(i.runtime.eventDataGlobal);
        g.forEach(function(t) {
            i.runtime.eventData[t] = i.runtime.eventDataGlobal[t], delete i.runtime.eventDataGlobal[t]
        }), (g = Object.keys(i.runtime.eventData)).forEach(function(t) {
            i.runtime.eventData[t] = i.convertEventDataDevice(i.runtime.isDesktop, i.runtime.eventData[t])
        }), i.setLadiVariable();
        try {
            var _ = window.ladi("LADI_DATA").get_cookie();
            i.runtime.tmp.cookie_ladi_data = _, _ = JSON.parse(Base64.decode(_ || Base64.encode("{}"))), Object.keys(_).forEach(function(t) {
                i.setDataReplaceStr(t, _[t])
            })
        } catch (t) {}
        i.runtime.tmp.convertFormDataObjectCountry = function(t) {
            var e = i.copy(t);
            return isObjectLadiPage(e) && i.runtime.list_set_value_name_country.forEach(function(t) {
                if (!isEmptyLadiPage(e[t])) {
                    var i = e[t].split(":");
                    i.length > 1 && i.shift(), e[t] = i.join(":")
                }
            }), e
        };
        var y = i.getURLSearchParams(null, null, !0),
            f = i.getURLSearchParams(window.location.search, null, !0),
            v = i.runtime.tmp.convertFormDataObjectCountry(y),
            h = Object.keys(v),
            P = "";
        h.forEach(function(t) {
            if (t != i.const.TRACKING_NAME && t != i.const.ACCESS_KEY_NAME) {
                if (i.setDataReplaceStr(t, v[t]), "products" == t && isStringLadiPage(v[t])) {
                    var e = v[t].split("|");
                    2 == e.length && -1 == h.indexOf("product_id") && i.setDataReplaceStr("product_value", e[0]), 2 == e.length && -1 == h.indexOf("product_name") && i.setDataReplaceStr("product_name", e[1])
                }(isArrayLadiPage(f[t]) ? f[t] : [f[t]]).forEach(function(e) {
                    isEmptyLadiPage(P) ? P += "?" : P += "&", isObjectLadiPage(e) && (e = JSON.stringify(e)), P += t + "=" + encodeURIComponent(e)
                })
            }
        }), window.ladi(i.const.TRACKING_NAME).delete_cookie("/"), P != window.location.search && i.historyReplaceState(window.location.pathname + P + window.location.hash);
        var L = f[i.const.REF_NAME];
        isEmptyLadiPage(L) ? L = window.ladi("ladi_ref").get_cookie() : i.setCookieDomains("ladi_ref", L, 90);
        var E = Object.keys(i.runtime.eventData),
            A = [],
            b = window.ladi("LADI_UNIQUE_ID").get_cookie(),
            T = window.ladi("LADI_CLIENT_ID").get_cookie(),
            w = parseFloatLadiPage(window.ladi("LADI_PAGE_VIEW").get_cookie()) || 0,
            S = parseFloatLadiPage(window.ladi("LADI_FORM_SUBMIT").get_cookie()) || 0,
            O = window.ladi("LADI_FUNNEL_NEXT_URL").get_cookie(),
            C = window.ladi("LADI_CAMP_ID").get_cookie(),
            I = window.ladi("LADI_CAMP_NAME").get_cookie(),
            N = window.ladi("LADI_CAMP_TYPE").get_cookie(),
            k = window.ladi("LADI_CAMP_TARGET_URL").get_cookie(),
            x = window.ladi("LADI_CAMP_ORIGIN_URL").get_cookie(),
            D = parseFloatLadiPage(window.ladi("LADI_CAMP_PAGE_VIEW").get_cookie()) || 0,
            R = parseFloatLadiPage(window.ladi("LADI_CAMP_FORM_SUBMIT").get_cookie()) || 0;
        isEmptyLadiPage(b) && (b = i.randomId(), window.ladi("LADI_UNIQUE_ID").set_cookie(b, 365));
        var B = function(t, e, a) {
                if ("FormSubmit" == t && isEmptyLadiPage(T)) isFunctionLadiPage(a) && a();
                else if (!i.runtime.is_popupx || i.runtime.has_popupx) {
                    var n = i.runtime.publish_platform,
                        o = i.runtime.store_id,
                        r = i.runtime.time_zone,
                        l = window.location.host,
                        d = window.location.href,
                        s = i.runtime.ladipage_id,
                        c = {
                            event: t,
                            pixel_id: o,
                            time_zone: r,
                            domain: l,
                            url: d,
                            ladipage_id: s,
                            publish_platform: n,
                            data: []
                        };
                    Object.keys(e).forEach(function(t) {
                        c[t] = e[t]
                    }), i.runtime.is_popupx && (c.type = "POPUPX", c.origin_store_id = i.runtime.tmp.popupx_origin_store_id, c.origin_referer = i.runtime.tmp.popupx_origin_referer, c.origin_domain = i.runtime.tmp.popupx_origin_domain, c.origin_url = i.runtime.tmp.popupx_origin_url, c.element_id = i.runtime.tmp.popupx_current_element_id, isEmptyLadiPage(c.element_id)) ? i.runTimeout(function() {
                        B(t, e, a)
                    }, 100) : ("FormSubmit" == t && (isEmptyLadiPage(C) ? S++ : (k == x && S++, R++), window.ladi("LADI_CAMP_FORM_SUBMIT").set_cookie(R, 365), window.ladi("LADI_FORM_SUBMIT").set_cookie(S, 365), i.runtime.is_popupx && i.runtime.tmp.runActionPopupX({
                        action: {
                            type: "set_submit_form"
                        }
                    })), "PageView" == t && i.runtime.has_popupx && (w++, window.ladi("LADI_PAGE_VIEW").set_cookie(w, 365)), "FormSubmit" != t && "PageView" != t || isEmptyLadiPage(i.runtime.tmp.cookie_ladi_data) || !i.runtime.is_popupx && isEmptyLadiPage(C) || (c.ladi_data = i.runtime.tmp.cookie_ladi_data), i.sendRequest("POST", i.const.API_ANALYTICS_EVENT, JSON.stringify(c), !0, {
                        "Content-Type": "application/json",
                        LADI_CLIENT_ID: T,
                        LADI_PAGE_VIEW: w,
                        LADI_FORM_SUBMIT: S,
                        LADI_CAMP_ID: C,
                        LADI_CAMP_NAME: I,
                        LADI_CAMP_TYPE: N,
                        LADI_CAMP_TARGET_URL: k,
                        LADI_CAMP_ORIGIN_URL: x,
                        LADI_CAMP_PAGE_VIEW: D,
                        LADI_CAMP_FORM_SUBMIT: R
                    }, function(t, e, i) {
                        i.readyState == XMLHttpRequest.DONE && isFunctionLadiPage(a) && a(e, t)
                    }))
                } else i.runTimeout(function() {
                    B(t, e, a)
                }, 100)
            },
            F = function(t, e, a, n) {
                var o = null,
                    r = null,
                    l = null,
                    d = 0;
                if (isEmptyLadiPage(e) || "POPUP_PRODUCT" != e.id)
                    if (isEmptyLadiPage(e) || "POPUP_BLOG" != e.id) isFunctionLadiPage(n) && n();
                    else {
                        if (o = i.generateVariantProduct(a, !1, null, null, null, null, !0, !0, function(i) {
                                F(t, e, a, n)
                            }), !isObjectLadiPage(o) || !isObjectLadiPage(o.product) || !isObjectLadiPage(o.store_info)) return;
                        var s = function() {
                            var a = !0;
                            if (Object.keys(o.product).forEach(function(t) {
                                    if (a && isStringLadiPage(o.product[t]) && o.product[t].startsWith(i.const.DATASET_CONTENT_SOURCE_URL) && o.product[t].endsWith(i.const.DATASET_CONTENT_SOURCE_ENDSWITH)) {
                                        var e = o.product[t].replaceAll(i.const.DATASET_CONTENT_SOURCE_URL, i.const.API_DATASET_BLOG);
                                        a = !1, i.showLoadingBlur(), i.sendRequest("GET", e, null, !0, null, function(e, i, a) {
                                            a.readyState == XMLHttpRequest.DONE && (o.product[t] = e, s())
                                        })
                                    }
                                }), a) {
                                i.hideLoadingBlur(), e.classList.add("opacity-0"), r = document.querySelectorAll("#" + e.id + " .ladi-element");
                                var c = null,
                                    u = function(a) {
                                        i.removeTimeout(c);
                                        var n = function(t, e) {
                                            var a = i.findAncestor(t.parentElement, "ladi-element");
                                            i.updateHeightElement(!0, t, a, e, t.clientHeight)
                                        };
                                        c = i.runTimeout(function() {
                                            i.showParentVisibility(r[0], function() {
                                                for (d = 0; d < r.length; d++) {
                                                    if (r[d].querySelectorAll(".ladi-headline, .ladi-paragraph").length > 0 && r[d].hasAttribute("data-height")) {
                                                        var t = parseFloatLadiPage(r[d].getAttribute("data-height")) || 0;
                                                        t != r[d].clientHeight && (r[d].setAttribute("data-height", r[d].clientHeight), n(r[d], t))
                                                    }
                                                }
                                            }), i.runShowPopup(!0, e.id, null, null, !0, {
                                                event: {
                                                    target: t
                                                }
                                            })
                                        }, isEmptyLadiPage(a) ? 0 : 100)
                                    };
                                i.showParentVisibility(r[0], function() {
                                    for (d = 0; d < r.length; d++) {
                                        r[d].querySelectorAll(".ladi-headline, .ladi-paragraph").length > 0 && !r[d].hasAttribute("data-height") && r[d].setAttribute("data-height", r[d].clientHeight)
                                    }
                                });
                                var p = function(t) {
                                        var e = i.runtime.eventData[t.id];
                                        isFunctionLadiPage(i.runtime.tmp.runOptionAction) && isObjectLadiPage(e) && i.runtime.tmp.runOptionAction(t, t.id, e.type, e, o)
                                    },
                                    m = function(t) {
                                        (!i.runtime.isDesktop || isEmptyLadiPage(t.getAttribute("height")) && isEmptyLadiPage(t.style.getPropertyValue("height"))) && (t.addEventListener("load", u), t.addEventListener("error", u))
                                    };
                                for (d = 0; d < r.length; d++) i.runtime.tmp.runLadiSaleProductKey(r[d].id, !1, !1, l, o, !0, null, !0), p(r[d]);
                                for (d = 0; d < r.length; d++)
                                    for (var g = r[d].querySelectorAll(".ladi-headline img, .ladi-paragraph img"), _ = 0; _ < g.length; _++) m(g[_]);
                                isFunctionLadiPage(n) && n(), u(), i.runTimeout(function() {
                                    e.classList.remove("opacity-0")
                                }, 150)
                            }
                        };
                        s()
                    }
                else {
                    if (o = i.generateVariantProduct(a, !1, null, null, null, null, !0, !0, function(i) {
                            F(t, e, a, n)
                        }), !isObjectLadiPage(o) || !isObjectLadiPage(o.store_info) || !isObjectLadiPage(o.product) || !isArrayLadiPage(o.product.variants) || o.product.variants.length <= 0) return;
                    if (isEmptyLadiPage(a["option.product_variant_id"])) {
                        l = o.product.variants[0];
                        var c = i.findAncestor(t, "ladi-collection-item"),
                            u = null;
                        if (isEmptyLadiPage(c)) {
                            for (var p = document.querySelectorAll('[data-variant="true"] select[data-store-id="' + o.store_info.id + '"][data-product-id="' + o.product.product_id + '"]'), m = 0; m < p.length; m++)
                                if (isEmptyLadiPage(i.findAncestor(p[m], "ladi-collection-item"))) {
                                    u = p[m];
                                    break
                                }
                        } else u = c.querySelector('[data-variant="true"]');
                        if (!isEmptyLadiPage(u)) {
                            u = i.findAncestor(u, "ladi-element");
                            var g = i.getProductVariantId(u, o.product);
                            isEmptyLadiPage(g) || (l = o.product.variants.find(function(t) {
                                return t.product_variant_id == g
                            }))
                        }
                    } else l = o.product.variants.find(function(t) {
                        return t.product_variant_id == a["option.product_variant_id"]
                    });
                    if (isEmptyLadiPage(l)) return;
                    var _ = function(t) {
                        var e = i.runtime.eventData[t.id];
                        isFunctionLadiPage(i.runtime.tmp.runOptionAction) && isObjectLadiPage(e) && i.runtime.tmp.runOptionAction(t, t.id, e.type, e, o)
                    };
                    for (r = document.querySelectorAll("#" + e.id + " .ladi-element"), d = 0; d < r.length; d++) i.runtime.tmp.runLadiSaleProductKey(r[d].id, !1, !1, l, o), _(r[d]);
                    isFunctionLadiPage(n) && n()
                }
            },
            M = function(t, e, a) {
                e = isArrayLadiPage(e) ? e : [];
                var n = i.runtime.eventData[t.id],
                    o = e.findIndex(function(t) {
                        return t.action_type == a.action_type && (t.type == i.const.DATA_ACTION_TYPE.popup || t.type == i.const.DATA_ACTION_TYPE.popup_cart || t.type == i.const.DATA_ACTION_TYPE.popup_checkout)
                    });
                o = -1 != o, e.forEach(function(e) {
                    if (e.action_type == a.action_type) {
                        var r = null,
                            l = null;
                        if (e.type == i.const.DATA_ACTION_TYPE.section) {
                            var d = 0,
                                s = document.getElementById(e.action);
                            if (!isEmptyLadiPage(s)) {
                                if (o) return void window.ladi(s.id).scroll(!1, !0);
                                if (r = i.findAncestor(t, "ladi-popup"), !isEmptyLadiPage(r)) {
                                    var c = i.findAncestor(r, "ladi-element");
                                    c.hasAttribute("data-popup-backdrop") && (window.ladi(c.id).hide(), d = 100)
                                }
                                i.runTimeout(function() {
                                    window.ladi(s.id).scroll()
                                }, d)
                            }
                        }
                        if (e.type == i.const.DATA_ACTION_TYPE.popup && (r = document.getElementById(e.action), isEmptyLadiPage(r) || F(t, r, n, function() {
                                window.ladi(e.action).show()
                            })), e.type == i.const.DATA_ACTION_TYPE.hidden_show && (isArrayLadiPage(e.hidden_ids) && e.hidden_ids.forEach(function(t) {
                                window.ladi(t).hide()
                            }), isArrayLadiPage(e.show_ids) && e.show_ids.forEach(function(t) {
                                window.ladi(t).show()
                            })), e.type == i.const.DATA_ACTION_TYPE.change_index && (l = window.ladi(e.action), isFunctionLadiPage(l[e.change_index_type]) ? l[e.change_index_type]() : l.index(e.change_index_number || 1)), e.type == i.const.DATA_ACTION_TYPE.set_value && (l = window.ladi(e.action), isEmptyLadiPage(l) || (e.is_clipboard ? i.getTextClipboard(e.str, function(i, a) {
                                l.value(i ? a : e.str), q(t, i, !0)
                            }) : l.value(e.str))), e.type == i.const.DATA_ACTION_TYPE.link) {
                            var u = e.action;
                            isEmptyLadiPage(u) || (u = i.getLinkUTMRedirect(u, null), u = i.convertDataReplaceStr(u, !0), window.ladi(u).open_url(e.target, e.nofollow))
                        }
                        if (e.type == i.const.DATA_ACTION_TYPE.collapse) {
                            var p = document.getElementById(e.action);
                            isEmptyLadiPage(p) || window.ladi(e.action).collapse()
                        }
                        if (e.type == i.const.DATA_ACTION_TYPE.set_style && (l = window.ladi(e.action), isEmptyLadiPage(l) || l.set_style(t, e)), e.type == i.const.DATA_ACTION_TYPE.lightbox) {
                            if (a.lightbox_type == i.const.DATA_ACTION_LIGHTBOX_TYPE.image) {
                                var m = e.image_url;
                                isEmptyLadiPage(m) && (m = e["image_url_" + i.runtime.device]), lightbox_image(m)
                            }
                            a.lightbox_type == i.const.DATA_ACTION_LIGHTBOX_TYPE.video && lightbox_video(e.video_url, e.video_type, !1), a.lightbox_type == i.const.DATA_ACTION_LIGHTBOX_TYPE.iframe && lightbox_iframe(e.iframe_url)
                        }
                        if (e.type == i.const.DATA_ACTION_TYPE.tracking) {
                            var g = {
                                is_custom: !0
                            };
                            g.conversion_name = e.conversion_name, g.google_ads_conversion = e.google_ads_conversion, g.google_ads_label = e.google_ads_label, g.event_category = "", e.action_type != i.const.ACTION_TYPE.open_popup && e.action_type != i.const.ACTION_TYPE.close_popup || (g.event_category = "LadiPagePopup"), i.runEventTracking(null, g), isEmptyLadiPage(e.event_custom_script) || (i.runtime.is_popupx ? i.runtime.tmp.runActionPopupX({
                                script: e.event_custom_script,
                                action: {
                                    type: "event_custom_script"
                                }
                            }) : i.runFunctionString(e.event_custom_script))
                        }
                        e.type == i.const.DATA_ACTION_TYPE.custom_script && (isEmptyLadiPage(e.event_custom_script) || (i.runtime.is_popupx ? i.runtime.tmp.runActionPopupX({
                            script: e.event_custom_script,
                            action: {
                                type: "event_custom_script"
                            }
                        }) : i.runFunctionString(e.event_custom_script)))
                    }
                })
            },
            q = function(t, e, a) {
                var n = parseFloatLadiPage(t.getAttribute("data-timeout-id-copied")) || 0;
                i.removeTimeout(n);
                var o = "hint-{0}-middle-s-small-hint-anim-d-short",
                    r = !0;
                i.getElementBoundingClientRect(t).y < 35 && (r = !1), r ? (t.classList.add(o.format("top")), t.classList.remove(o.format("bottom"))) : (t.classList.remove(o.format("top")), t.classList.add(o.format("bottom"))), e ? a ? t.setAttribute("data-hint", i.const.LANG.PASTED) : t.setAttribute("data-hint", i.const.LANG.COPIED) : t.setAttribute("data-hint", i.const.LANG.FAILED), n = i.runTimeout(function() {
                    t.classList.remove(o.format("top")), t.classList.remove(o.format("bottom")), t.removeAttribute("data-hint"), t.removeAttribute("data-timeout-id-copied")
                }, 1e3), t.setAttribute("data-timeout-id-copied", n)
            },
            V = function(t, e, a, n, o) {
                if (t = t || document.getElementById(e), !isEmptyLadiPage(t)) {
                    var r = function(t) {
                            if (!isEmptyLadiPage(t)) return "true" == t.getAttribute("data-dropbox") ? t : r(t.parentElement)
                        },
                        l = function(t, e) {
                            if ("false" == t.getAttribute("data-click")) return !1;
                            var i = r(e.target);
                            if (!isEmptyLadiPage(i)) {
                                var a = document.getElementById(i.getAttribute("data-from-doc-id"));
                                if (!isEmptyLadiPage(a)) return a.id != t.id && l(t, {
                                    target: a
                                })
                            }
                            return !0
                        },
                        d = function() {
                            return i.runtime.count_click_dom[t.id] || 0
                        },
                        s = function(t) {
                            var e = d();
                            return t.action_type == i.const.ACTION_TYPE.action || (t.action_type == i.const.ACTION_TYPE["1st_click"] && e % 2 == 1 || (t.action_type == i.const.ACTION_TYPE["2nd_click"] && e % 2 == 0 || void 0))
                        };
                    t.addEventListener("click", function() {
                        i.runtime.count_click_dom[t.id] = d() + 1
                    });
                    var c = n["option.is_submit_form"],
                        u = n["option.data_submit_form_id"];
                    if (!n["option.action_funnel"] || isEmptyLadiPage(O))
                        if (!c || isEmptyLadiPage(u)) {
                            var p = n["option.data_event"];
                            if (!isArrayLadiPage(p) && (p = [], isObjectLadiPage(n["option.data_action"]))) {
                                var m = i.copy(n["option.data_action"]);
                                m.action_type = i.const.ACTION_TYPE.action, p.push(m)
                            }
                            var g = i.getSource2ndClick(t.id);
                            isEmptyLadiPage(g) || (t.classList.add("is-2nd-click"), p.push({
                                action_type: i.const.ACTION_TYPE.action,
                                type: i.const.DATA_ACTION_TYPE.set_value_2nd,
                                source: g
                            }));
                            var _ = function(e, i) {
                                    return q(t, e, !1)
                                },
                                y = p.findIndex(function(t) {
                                    return t.action_type == i.const.ACTION_TYPE.action && (t.type == i.const.DATA_ACTION_TYPE.popup || t.type == i.const.DATA_ACTION_TYPE.popup_cart || t.type == i.const.DATA_ACTION_TYPE.popup_checkout)
                                });
                            y = -1 != y;
                            var f = 0,
                                v = [];
                            p.forEach(function(a) {
                                if (a.action_type == i.const.ACTION_TYPE.action || a.action_type == i.const.ACTION_TYPE["1st_click"] || a.action_type == i.const.ACTION_TYPE["2nd_click"]) {
                                    if (f++, v.push(a), a.type == i.const.DATA_ACTION_TYPE.set_value_2nd && t.addEventListener("click", function(e) {
                                            if (l(t, e) && s(a)) {
                                                var i = window.ladi(t.id, t);
                                                isEmptyLadiPage(i) || i.set_value_2nd(a.source)
                                            }
                                        }), a.type == i.const.DATA_ACTION_TYPE.link) {
                                        var r = null;
                                        t.addEventListener("click", function(e) {
                                            l(t, e) && s(a) && "true" == t.getAttribute("data-action") && (r = a.action, isEmptyLadiPage(a.action_mapping) || (r = a.action_mapping), isEmptyLadiPage(r) || (r = i.getLinkUTMRedirect(r, null), r = i.convertDataReplaceStr(r, !0), window.ladi(r).open_url(a.target, a.nofollow)))
                                        });
                                        var d = function() {
                                            r = a.action;
                                            var e = a.link_mapping;
                                            isEmptyLadiPage(e) && (e = a.link_mapping_custom);
                                            var l = null;
                                            if (n["option.data_setting.type"] == i.const.DATA_TYPE.detail_category) l = i.runtime.tmp.category_detail_data, isObjectLadiPage(l) && ((l = i.copy(l)).url = window.location.origin + (isEmptyLadiPage(i.const.WEBSITE_PATH_DNS.category) ? "" : "/" + i.const.WEBSITE_PATH_DNS.category) + "/" + l.url);
                                            else if (n["option.data_setting.type"] == i.const.DATA_TYPE.detail_tag) l = i.runtime.tmp.tag_detail_data, isObjectLadiPage(l) && ((l = i.copy(l)).url = window.location.origin + (isEmptyLadiPage(i.const.WEBSITE_PATH_DNS.tag) ? "" : "/" + i.const.WEBSITE_PATH_DNS.tag) + "/" + l.url);
                                            else if (n["option.data_setting.type"] == i.const.DATA_TYPE.detail_post) l = i.runtime.tmp.post_detail_data, isObjectLadiPage(l) && ((l = i.copy(l)).url = window.location.origin + (isEmptyLadiPage(i.const.WEBSITE_PATH_DNS.post) ? "" : "/" + i.const.WEBSITE_PATH_DNS.post) + "/" + l.url);
                                            else {
                                                if (isNullLadiPage(o) && (o = i.generateVariantProduct(n, !1, null, null, null, null, !0, !0, d)), !isObjectLadiPage(o) || !isObjectLadiPage(o.store_info) || !isObjectLadiPage(o.product)) return;
                                                l = o.product
                                            }
                                            l = isObjectLadiPage(l) ? l : {}, isEmptyLadiPage(e) || (a.action_mapping = l[e], isEmptyLadiPage(a.action_mapping) || (r = a.action_mapping)), isEmptyLadiPage(r) ? (t.removeAttribute("data-replace-href"), t.removeAttribute("href")) : (r = i.getLinkUTMRedirect(r, null), t.setAttribute("data-replace-href", r), t.href = i.convertDataReplaceStr(r, !0))
                                        };
                                        d()
                                    }
                                    if (a.type == i.const.DATA_ACTION_TYPE.email && t.addEventListener("click", function(e) {
                                            l(t, e) && s(a) && ("true" != t.getAttribute("data-action") || isEmptyLadiPage(a.action) || window.ladi("mailto:" + a.action).open_url())
                                        }), a.type == i.const.DATA_ACTION_TYPE.phone && t.addEventListener("click", function(e) {
                                            l(t, e) && s(a) && ("true" != t.getAttribute("data-action") || isEmptyLadiPage(a.action) || window.ladi("tel:" + a.action).open_url())
                                        }), a.type == i.const.DATA_ACTION_TYPE.collapse && t.addEventListener("click", function(e) {
                                            l(t, e) && s(a) && M(t, [a], {
                                                action_type: a.action_type
                                            })
                                        }), a.type == i.const.DATA_ACTION_TYPE.section && t.addEventListener("click", function(e) {
                                            if (l(t, e) && s(a)) {
                                                var n = 0,
                                                    o = document.getElementById(a.action);
                                                if (!isEmptyLadiPage(o)) {
                                                    if (y) return void window.ladi(o.id).scroll(!1, !0);
                                                    var r = i.findAncestor(t, "ladi-popup");
                                                    if (!isEmptyLadiPage(r)) {
                                                        var d = i.findAncestor(r, "ladi-element");
                                                        d.hasAttribute("data-popup-backdrop") && (window.ladi(d.id).hide(), n = 100)
                                                    }
                                                    i.runTimeout(function() {
                                                        window.ladi(o.id).scroll()
                                                    }, n)
                                                }
                                            }
                                        }), a.type == i.const.DATA_ACTION_TYPE.popup && t.addEventListener("click", function(e) {
                                            if (l(t, e) && s(a)) {
                                                var i = document.getElementById(a.action);
                                                isEmptyLadiPage(i) || F(t, i, n, function() {
                                                    window.ladi(a.action).show()
                                                })
                                            }
                                        }), a.type == i.const.DATA_ACTION_TYPE.dropbox && t.addEventListener("click", function(e) {
                                            if (l(t, e) && s(a)) {
                                                var i = document.getElementById(a.action);
                                                isEmptyLadiPage(i) || window.ladi(a.action).showDropbox(t, a.dropbox, !1)
                                            }
                                        }), a.type == i.const.DATA_ACTION_TYPE.hidden_show && t.addEventListener("click", function(e) {
                                            l(t, e) && s(a) && (isArrayLadiPage(a.hidden_ids) && a.hidden_ids.forEach(function(t) {
                                                window.ladi(t).hide()
                                            }), isArrayLadiPage(a.show_ids) && a.show_ids.forEach(function(t) {
                                                window.ladi(t).show()
                                            }))
                                        }), a.type == i.const.DATA_ACTION_TYPE.change_index && t.addEventListener("click", function(e) {
                                            if (l(t, e) && s(a)) {
                                                var i = window.ladi(a.action);
                                                isEmptyLadiPage(i) || (isFunctionLadiPage(i[a.change_index_type]) ? i[a.change_index_type]() : i.index(a.change_index_number || 1))
                                            }
                                        }), a.type == i.const.DATA_ACTION_TYPE.set_style) {
                                        var c = window.ladi(a.action);
                                        isEmptyLadiPage(c) || c.set_style(t, a, !0), t.addEventListener("click", function(e) {
                                            l(t, e) && s(a) && M(t, [a], {
                                                action_type: a.action_type
                                            })
                                        })
                                    }
                                    a.type == i.const.DATA_ACTION_TYPE.set_value && t.addEventListener("click", function(e) {
                                        if (l(t, e) && s(a)) {
                                            var n = window.ladi(a.action);
                                            isEmptyLadiPage(n) || (a.is_clipboard ? i.getTextClipboard(a.str, function(e, i) {
                                                n.value(e ? i : a.str), q(t, e, !0)
                                            }) : n.value(a.str))
                                        }
                                    }), a.type == i.const.DATA_ACTION_TYPE.copy_clipboard && t.addEventListener("click", function(e) {
                                        if (l(t, e) && s(a)) {
                                            var n = null,
                                                o = window.ladi(a.action);
                                            isEmptyLadiPage(o) || (n = o.value(null, null, {
                                                only_text: !0,
                                                text_trim: !0
                                            })), n = isEmptyLadiPage(n) ? a.str : n, isEmptyLadiPage(n) || i.copyTextClipboard(n, _)
                                        }
                                    }), a.type == i.const.DATA_ACTION_TYPE.custom_script && t.addEventListener("click", function(e) {
                                        l(t, e) && s(a) && M(t, [a], {
                                            action_type: a.action_type
                                        })
                                    });
                                    var u = null;
                                    if (a.type == i.const.DATA_ACTION_TYPE.lightbox ? u = a.lightbox_type : "lightbox_image" == a.type ? u = i.const.DATA_ACTION_LIGHTBOX_TYPE.image : "lightbox_video" == a.type ? u = i.const.DATA_ACTION_LIGHTBOX_TYPE.video : "lightbox_iframe" == a.type && (u = i.const.DATA_ACTION_LIGHTBOX_TYPE.iframe), u == i.const.DATA_ACTION_LIGHTBOX_TYPE.image && t.addEventListener("click", function(e) {
                                            l(t, e) && s(a) && M(t, [a], {
                                                action_type: a.action_type,
                                                lightbox_type: u
                                            })
                                        }), u == i.const.DATA_ACTION_LIGHTBOX_TYPE.video) {
                                        var p = document.querySelectorAll("#" + e + ".preload").length > 0;
                                        p && lightbox_video(a.video_url, a.video_type, p), t.addEventListener("click", function(e) {
                                            l(t, e) && s(a) && M(t, [a], {
                                                action_type: a.action_type,
                                                lightbox_type: u
                                            })
                                        })
                                    }
                                    u == i.const.DATA_ACTION_LIGHTBOX_TYPE.iframe && t.addEventListener("click", function(e) {
                                        l(t, e) && s(a) && M(t, [a], {
                                            action_type: a.action_type,
                                            lightbox_type: u
                                        })
                                    }), a.type == i.const.DATA_ACTION_TYPE.popup_cart && t.addEventListener("click", function(e) {
                                        if (l(t, e) && s(a)) {
                                            var i = document.getElementById("POPUP_CART");
                                            isEmptyLadiPage(i) || window.ladi(i.id).show()
                                        }
                                    }), a.type == i.const.DATA_ACTION_TYPE.popup_checkout && t.addEventListener("click", function(e) {
                                        l(t, e) && s(a) && (isArrayLadiPage(i.runtime.tmp.cart) && i.runtime.tmp.cart.length > 0 ? i.runtime.shopping_third_party ? i.getThirdPartyCheckoutUrl(!0, null, {
                                            event: {
                                                target: t
                                            }
                                        }) : window.ladi("POPUP_CHECKOUT").show(!1, {
                                            event: {
                                                target: t
                                            }
                                        }) : i.showMessage(i.const.LANG.ADD_TO_CART_NO_CART))
                                    })
                                }
                            }), i.runEventTracking(e, {
                                count_data_event: f,
                                is_click: !0,
                                is_form: !1,
                                event: {
                                    target: t
                                },
                                data_event_run: v
                            }, null, t, l)
                        } else t.addEventListener("click", function(e) {
                            if (l(t, e)) {
                                var i = document.getElementById(u);
                                isEmptyLadiPage(i) || i.setAttribute("data-button-submit-other", t.id), window.ladi(u).submit()
                            }
                        });
                    else t.addEventListener("click", function(a) {
                        if (l(t, a)) {
                            a.preventDefault();
                            var n = O;
                            n = i.getLinkUTMRedirect(n, null), n = i.convertDataReplaceStr(n, !0), window.ladi(n).open_url(), i.runEventTracking(e, {
                                is_form: !1
                            })
                        }
                    })
                }
            },
            Y = function(t, e, a, n) {
                if (t = t || document.getElementById(e), !isEmptyLadiPage(t)) {
                    if (!isArrayLadiPage(n)) {
                        var o = i.copy(n);
                        n = [], isObjectLadiPage(o) && (o.action_type = i.const.ACTION_TYPE.hover, n.push(o))
                    }
                    n.forEach(function(e) {
                        if (e.action_type == i.const.ACTION_TYPE.hover && (e.type == i.const.DATA_ACTION_TYPE.dropbox && (t.addEventListener("mouseenter", function(a) {
                                i.checkHover() && window.ladi(e.action).showDropbox(t, e.dropbox, !0)
                            }), t.addEventListener("mouseleave", function(t) {
                                i.checkHover() && window.ladi(e.action).hide()
                            })), e.type == i.const.DATA_ACTION_TYPE.hidden_show && (t.addEventListener("mouseenter", function(t) {
                                i.checkHover() && (isArrayLadiPage(e.hidden_ids) && e.hidden_ids.forEach(function(t) {
                                    window.ladi(t).hide()
                                }), isArrayLadiPage(e.show_ids) && e.show_ids.forEach(function(t) {
                                    window.ladi(t).show()
                                }))
                            }), t.addEventListener("mouseleave", function(t) {
                                i.checkHover() && (isArrayLadiPage(e.hidden_ids) && e.hidden_ids.forEach(function(t) {
                                    window.ladi(t).show()
                                }), isArrayLadiPage(e.show_ids) && e.show_ids.forEach(function(t) {
                                    window.ladi(t).hide()
                                }))
                            })), e.type == i.const.DATA_ACTION_TYPE.change_index && t.addEventListener("mouseenter", function(t) {
                                if (i.checkHover()) {
                                    var a = window.ladi(e.action);
                                    isFunctionLadiPage(a[e.change_index_type]) ? a[e.change_index_type]() : a.index(e.change_index_number || 1)
                                }
                            }), e.type == i.const.DATA_ACTION_TYPE.set_style)) {
                            var a = window.ladi(e.action);
                            isEmptyLadiPage(a) || a.set_style(t, e, !0), t.addEventListener("mouseenter", function(a) {
                                i.checkHover() && window.ladi(e.action).set_style(t, e)
                            }), t.addEventListener("mouseleave", function(a) {
                                i.checkHover() && window.ladi(e.action).remove_style(t, e)
                            })
                        }
                    })
                }
            },
            U = function(t) {
                var e = document.getElementById(t);
                if (!isEmptyLadiPage(e) && t != i.runtime.builder_section_popup_id && t != i.runtime.builder_section_background_id) {
                    var a = e.classList.contains("ladi-section") ? "section" : null;
                    if (i.runtime.is_popupx && "section" == a) {
                        var n = document.createElement("div");
                        n.className = "ladi-section-close", n.addEventListener("click", function(e) {
                            e.stopPropagation(), window.ladi(t).hide()
                        }), e.appendChild(n)
                    }
                }
            },
            j = function(t, e, a, n, o, r, l, d) {
                "countdown" != a || isEmptyLadiPage(n) || (e = e || document.getElementById(t), isEmptyLadiPage(e) || (e.setAttribute("data-type", n), n != i.const.COUNTDOWN_TYPE.countdown || isEmptyLadiPage(o) || e.setAttribute("data-minute", o), n != i.const.COUNTDOWN_TYPE.endtime || isEmptyLadiPage(d) || e.setAttribute("data-endtime", d), n != i.const.COUNTDOWN_TYPE.daily || isEmptyLadiPage(r) || isEmptyLadiPage(l) || (e.setAttribute("data-daily-start", r), e.setAttribute("data-daily-end", l))))
            },
            H = function(t, e, i, a) {
                "countdown_item" != i || isEmptyLadiPage(a) || (e = e || document.getElementById(t), isEmptyLadiPage(e) || e.setAttribute("data-item-type", a))
            },
            G = function() {
                E.forEach(function(t) {
                    var e = document.getElementById(t);
                    if (!isEmptyLadiPage(e) && "true" != e.getAttribute("data-action")) {
                        var a = i.runtime.eventData[t],
                            n = a["option.data_event"];
                        if (!isArrayLadiPage(n) && (n = [], isObjectLadiPage(a["option.data_action"]))) {
                            var o = i.copy(a["option.data_action"]);
                            o.action_type = i.const.ACTION_TYPE.action, n.push(o)
                        }! function(t, e) {
                            e.forEach(function(e) {
                                if (e.action_type == i.const.ACTION_TYPE.action && e.type == i.const.DATA_ACTION_TYPE.link)
                                    if (isEmptyLadiPage(t.getAttribute("href"))) t.removeAttribute("href");
                                    else {
                                        var a = i.getLinkUTMRedirect(t.href, null);
                                        t.setAttribute("data-replace-href", a), t.href = i.convertDataReplaceStr(a, !0)
                                    }
                            })
                        }(e, n)
                    }
                });
                for (var t = document.querySelectorAll(".ladi-headline a[href], .ladi-paragraph a[href], .ladi-list-paragraph a[href]"), e = 0; e < t.length; e++)
                    if (isEmptyLadiPage(t[e].getAttribute("href"))) t[e].removeAttribute("href");
                    else {
                        var a = i.getLinkUTMRedirect(t[e].href, null);
                        t[e].setAttribute("data-replace-href", a), t[e].href = i.convertDataReplaceStr(a, !0)
                    }
            },
            W = function() {
                for (var t = 1e3, e = 0; e < LadiPageQueueCommandList.length; e++) {
                    var a = LadiPageQueueCommandList[e];
                    if (isFunctionLadiPage(a.callback1) && a.callback1()) {
                        try {
                            isFunctionLadiPage(a.callback2) && a.callback2()
                        } catch (t) {}
                        LadiPageQueueCommandList.splice(e, 1), t = 0;
                        break
                    }
                }
                i.runTimeout(W, t)
            },
            z = function() {
                if (t) {
                    var e = function() {
                            if (i.runtime.ladipage_powered_by_classname = i.randomString(i.randomInt(6, 32)), i.runtime.isClient) {
                                var t = document.createElement("div");
                                document.body.insertBefore(t, document.body.childNodes[i.randomInt(0, document.body.childNodes.length)]), t.className = i.runtime.ladipage_powered_by_classname;
                                var e = "." + i.runtime.ladipage_powered_by_classname + ' {width: 140px; height: 30px; position: fixed; bottom: -40px; left: 10px; z-index: 10000000000; background: url("' + i.const.POWERED_BY_IMAGE + '") no-repeat center #fafafa; background-size: 90% 70%; border-radius: 4px 4px 0 0; display: block; animation: ' + i.runtime.ladipage_powered_by_classname + " 10s;} @keyframes " + i.runtime.ladipage_powered_by_classname + " {0% {bottom: -40px;} 10% {bottom: 0;} 90% {bottom: 0;} 100% {bottom: -40px;}}",
                                    a = document.createElement("style");
                                a.type = "text/css", document.head.insertBefore(a, document.head.childNodes[i.randomInt(0, document.head.childNodes.length)]), a.innerHTML = e, i.runTimeout(function() {
                                    isEmptyLadiPage(t) || t.parentElement.removeChild(t), isEmptyLadiPage(a) || a.parentElement.removeChild(a)
                                }, 1e4)
                            }
                        },
                        a = !1,
                        n = isArrayLadiPage(i.runtime.DOMAIN_FREE) ? i.runtime.DOMAIN_FREE : [],
                        o = window.location.href;
                    ["/", ".", "/"].forEach(function(t) {
                        for (; o.endsWith(t);) o = o.substr(0, o.length - t.length)
                    });
                    var r = i.getElementAHref(o).host.toLowerCase();
                    n.forEach(function(t) {
                        a || (a = r.endsWith(t.toLowerCase()))
                    }), a && i.runTimeout(e, 3e3), B("PageView", {}, function(t, n) {
                        if (-1 != t || a || i.runTimeout(e, 3e3), 200 == t) {
                            var o = JSON.parse(n),
                                r = !1,
                                l = null,
                                d = null;
                            isObjectLadiPage(o.data) ? (r = 1 == o.data.verified_domain, l = o.data.google_captcha, d = o.data.places_autocomplete) : r = 1 == o.data, a || r || i.runTimeout(e, 3e3), isObjectLadiPage(l) && function(t, e, a) {
                                if (!isEmptyLadiPage(t)) {
                                    var n = !1;
                                    a.type == i.const.FORM_CONFIG_TYPE.google_recaptcha_enterprise && (e = !0), a.type == i.const.FORM_CONFIG_TYPE.google_recaptcha_checkbox && (n = !0), i.runtime.tmp.google_captcha = {
                                        api_key: t,
                                        enterprise: e,
                                        checkbox: n,
                                        type: a.type
                                    }, window.onloadRecaptchaCheckboxCallback = function() {
                                        for (var e = function(e) {
                                                var i = document.createElement("div");
                                                i.className = "ladi-google-recaptcha-checkbox", e.insertBefore(i, a[n]);
                                                var o = window.grecaptcha.render(i, {
                                                    sitekey: t
                                                });
                                                i.setAttribute("data-widget-id", o)
                                            }, a = document.querySelectorAll(".ladi-form .ladi-button"), n = 0; n < a.length; n++) {
                                            var o = i.findAncestor(a[n], "ladi-element"),
                                                r = i.findAncestor(o, "ladi-form");
                                            if (!isEmptyLadiPage(r)) {
                                                r = i.findAncestor(r, "ladi-element");
                                                var l = i.runtime.eventData[r.id];
                                                if (!isEmptyLadiPage(l)) {
                                                    if (l["option.is_form_login"] || l["option.is_form_otp"] || l["option.is_form_coupon"] || l["option.is_add_to_cart"]) continue;
                                                    if (isObjectLadiPage(l["option.form_setting"]) && l["option.form_setting"].is_multiple && !l["option.form_setting"].is_multiple_otp) continue
                                                }
                                            }
                                            e(o)
                                        }
                                        for (var d = document.querySelectorAll("#POPUP_CHECKOUT .ladi-button"), s = 0; s < d.length; s++) {
                                            var c = i.findAncestor(d[s], "ladi-element"),
                                                u = i.runtime.eventData[c.id];
                                            isEmptyLadiPage(u) || isEmptyLadiPage(u["option.data_submit_form_id"]) || !u["option.is_submit_form"] || e(c)
                                        }
                                    }, e ? i.loadScript("https://www.google.com/recaptcha/enterprise.js?render=" + t + "&hl=" + i.runtime.lang) : n ? i.loadScript("https://www.google.com/recaptcha/api.js?onload=onloadRecaptchaCheckboxCallback&render=explicit&hl=" + i.runtime.lang) : i.loadScript("https://www.google.com/recaptcha/api.js?render=" + t)
                                }
                            }(l.site_key, l.enterprise, l), isObjectLadiPage(d) && (s = d.api_key, isEmptyLadiPage(s) || (window.onloadGooglePlacesAutocompleteCallback = function() {
                                var t = document.querySelectorAll("[data-places-autocomplete-country]"),
                                    e = null,
                                    i = 0,
                                    a = {},
                                    n = function(n) {
                                        for (i = 0; i < t.length; i++)(e = t[i].querySelector('input[name="address"]')).removeAttribute("data-focus");
                                        (e = n.target).setAttribute("data-focus", !0), a = e.getAttribute("data-attrs"), isEmptyLadiPage(a) && ((a = {
                                            style: e.getAttribute("style"),
                                            placeholder: e.getAttribute("placeholder"),
                                            disabled: e.disabled
                                        }).style = isEmptyLadiPage(a.style) ? "" : a.style, a.placeholder = isEmptyLadiPage(a.placeholder) ? "" : a.placeholder, a.disabled = !isNullLadiPage(a.disabled) && a.disabled, e.setAttribute("data-attrs", encodeURIComponent(JSON.stringify(a))))
                                    };
                                for (i = 0; i < t.length; i++) {
                                    var o = t[i].getAttribute("data-places-autocomplete-country"),
                                        r = {
                                            types: ["address"]
                                        };
                                    (o = isEmptyLadiPage(o) ? [] : (o = (o = o.split(",")).removeSpace()).unique()).length > 0 && (r.componentRestrictions = {
                                        country: o
                                    }), (e = t[i].querySelector('input[name="address"]')).addEventListener("focus", n), new google.maps.places.Autocomplete(e, r)
                                }
                                t.length > 0 && (window.gm_authFailure = function() {
                                    for (i = 0; i < t.length; i++) e = t[i].querySelector('input[name="address"]'), a = e.getAttribute("data-attrs"), a = isEmptyLadiPage(a) ? {
                                        style: "",
                                        placeholder: "",
                                        disabled: !1
                                    } : JSON.parse(decodeURIComponentLadiPage(a)), e.setAttribute("style", a.style), e.setAttribute("placeholder", a.placeholder), e.disabled = a.disabled, "true" == e.getAttribute("data-focus") && e.focus()
                                })
                            }, i.loadScript("https://maps.googleapis.com/maps/api/js?key=" + s + "&libraries=places&callback=onloadGooglePlacesAutocompleteCallback")))
                        }
                        var s
                    })
                }
            },
            X = function(t, e, a, n) {
                if (isEmptyLadiPage(i.runtime.current_element_mouse_down_gallery_view) && isEmptyLadiPage(i.runtime.current_element_mouse_down_gallery_control)) {
                    var o = t.getAttribute("data-runtime-id");
                    if (isEmptyLadiPage(i.runtime.timeout_gallery[o]) && (!i.runtime.tmp.gallery_playing_video || !e)) {
                        var r = t.getElementsByClassName("ladi-gallery-view-item"),
                            l = t.getElementsByClassName("ladi-gallery-control-item");
                        if (e && t.getElementsByClassName("ladi-gallery-control-box")[0].style.removeProperty("transition-duration"), 0 != r.length && 0 != r.length) {
                            var d = t.getAttribute("data-is-next") || "true";
                            d = "true" == d.toLowerCase();
                            var s = parseFloatLadiPage(t.getAttribute("data-current")) || 0,
                                c = parseFloatLadiPage(t.getAttribute("data-max-item")) || 0;
                            e ? s >= c - 1 ? s = 0 : s++ : d ? ++s >= c && (s = 0) : --s < 0 && (s = c - 1), s < 0 && (s = 0), s >= c - 1 && (s = c - 1), isEmptyLadiPage(a) && (a = d ? "next" : "prev"), isEmptyLadiPage(n) && (n = d ? "left" : "right"), i.runtime.tmp.gallery_playing_video && !r[s].classList.contains("selected") && i.pauseAllVideo(), r[s].classList.add(a);
                            var u = t.querySelectorAll(".ladi-gallery-view-item.selected")[0];
                            isEmptyLadiPage(u) || u.classList.add(n);
                            var p = 1e3 * (parseFloatLadiPage(getComputedStyle(r[s]).transitionDuration) || 0);
                            i.runtime.timeout_gallery[o] = i.runTimeout(function() {
                                r[s].classList.add(n), i.runtime.timeout_gallery[o] = i.runTimeout(function() {
                                    for (var t = 0; t < r.length; t++) t == s ? r[t].classList.add("selected") : r[t].classList.remove("selected"), r[t].style.removeProperty("left"), r[t].classList.remove(a), r[t].classList.remove(n);
                                    delete i.runtime.timeout_gallery[o]
                                }, p - 5)
                            }, 5);
                            for (var m = 0; m < l.length; m++)(parseFloatLadiPage(l[m].getAttribute("data-index")) || 0) == s ? l[m].classList.add("selected") : l[m].classList.remove("selected");
                            var g = i.getElementBoundingClientRect(t),
                                _ = i.getElementBoundingClientRect(t.getElementsByClassName("ladi-gallery-control-item")[s]);
                            if (t.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.remove("opacity-0"), t.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.remove("opacity-0"), t.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || t.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom")) {
                                var y = parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control")[0]).width) || 0,
                                    f = parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control-item")[s]).width) || 0,
                                    v = _.x - g.x - (y - f) / 2;
                                v = -(v -= parseFloatLadiPage(t.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("left")) || 0) > 0 ? 0 : -v;
                                var h = parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control-box")[0]).width) || 0;
                                v < (h = (h = -(h -= parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control")[0]).width) || 0)) > 0 ? 0 : h) && (v = h), t.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", v + "px"), v >= 0 && t.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"), v <= h && t.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0")
                            } else {
                                var P = parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control")[0]).height) || 0,
                                    L = parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control-item")[s]).height) || 0,
                                    E = _.y - g.y - (P - L) / 2;
                                E = -(E -= parseFloatLadiPage(t.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("top")) || 0) > 0 ? 0 : -E;
                                var A = parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control-box")[0]).height) || 0;
                                E < (A = (A = -(A -= parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control")[0]).height) || 0)) > 0 ? 0 : A) && (E = A), t.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("top", E + "px"), E >= 0 && t.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"), E <= A && t.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0")
                            }
                            t.setAttribute("data-is-next", d), t.setAttribute("data-current", s), c <= 1 ? (t.getElementsByClassName("ladi-gallery-view-arrow-left")[0].classList.add("opacity-0"), t.getElementsByClassName("ladi-gallery-view-arrow-right")[0].classList.add("opacity-0")) : (t.getElementsByClassName("ladi-gallery-view-arrow-left")[0].classList.remove("opacity-0"), t.getElementsByClassName("ladi-gallery-view-arrow-right")[0].classList.remove("opacity-0")), (t.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-left") || t.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-right")) && i.reloadLazyload(!1), !e && t.hasAttribute("data-loaded") && t.setAttribute("data-stop", !0)
                        }
                    }
                }
            },
            K = function(t, e, a) {
                var n = e.getAttribute("data-video-type"),
                    o = e.getAttribute("data-video-url"),
                    r = e.getAttribute("data-index"),
                    l = t.getAttribute("data-runtime-id") + "_" + r + "_player",
                    d = document.getElementById(l);
                a || (i.pauseAllVideo(), i.runtime.tmp.gallery_playing_video = !0), isEmptyLadiPage(d) ? (n == i.const.VIDEO_TYPE.youtube && (d = document.createElement("iframe"), e.parentElement.insertBefore(d, e.nextSibling), d.outerHTML = '<iframe id="' + l + '" class="iframe-video-preload" data-video-type="' + n + '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', i.runEventPlayVideo(l, n, o, !1, !1, !0, a, !1, !0)), n == i.const.VIDEO_TYPE.direct && (d = document.createElement("video"), e.parentElement.insertBefore(d, e.nextSibling), d.outerHTML = '<video id="' + l + '" class="iframe-video-preload" data-video-type="' + n + '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; object-fit: cover;"></video>', i.runEventPlayVideo(l, n, o, !1, !1, !0, a, !1, !0))) : i.runEventReplayVideo(l, n, !0)
            },
            J = function(t, e, a, n) {
                if ("gallery" == n && (a || (e = document.getElementById(t)), !isEmptyLadiPage(e))) {
                    var o = e.getElementsByClassName("ladi-gallery-control-item").length;
                    e.setAttribute("data-max-item", o), e.setAttribute("data-runtime-id", i.randomString(10));
                    var r = function(t) {
                            t.stopPropagation(), K(e, t.target, !1)
                        },
                        l = e.classList.contains("preload");
                    if (o > 0) {
                        for (var d = 0; d < o; d++) {
                            var s = e.getElementsByClassName("ladi-gallery-view-item")[d];
                            isEmptyLadiPage(s) || (l && K(e, s, l), s.classList.contains("play-video") && s.addEventListener("click", r))
                        }
                        e.setAttribute("data-current", 0), e.setAttribute("data-is-next", !0)
                    }
                    for (var c = e.getElementsByClassName("ladi-gallery-view-arrow"), u = 0; u < c.length; u++) o <= 1 ? c[u].classList.add("ladi-hidden") : c[u].classList.remove("ladi-hidden")
                }
            },
            Q = function(t, e) {
                t.stopPropagation();
                var a = i.runtime.eventData[e.id],
                    n = a[i.runtime.device + ".option.gallery_control.autoplay"],
                    o = a[i.runtime.device + ".option.gallery_control.autoplay_time"],
                    r = 0;
                n && !isEmptyLadiPage(o) && (r = o);
                var l = parseFloatLadiPage(t.target.getAttribute("data-index")) || 0,
                    d = null,
                    s = null;
                (parseFloatLadiPage(e.getAttribute("data-current")) || 0) > l ? (d = "prev", s = "right") : (d = "next", s = "left");
                var c = e.getAttribute("data-is-next") || "true";
                (c = "true" == c.toLowerCase()) ? l-- : l++, e.setAttribute("data-current", l), e.setAttribute("data-next-time", Date.now() + 1e3 * r), X(e, !1, d, s)
            },
            $ = function() {
                E.forEach(function(t) {
                    var e = i.runtime.eventData[t];
                    if ("gallery" == e.type)
                        for (var a = document.querySelectorAll("#" + t), n = 0; n < a.length; n++) {
                            var o = a[n];
                            if ("true" == o.getAttribute("data-scrolled") && "true" != o.getAttribute("data-stop")) {
                                var r = e[i.runtime.device + ".option.gallery_control.autoplay"],
                                    l = e[i.runtime.device + ".option.gallery_control.autoplay_time"],
                                    d = 0;
                                if (r && !isEmptyLadiPage(l) && (d = l), d > 0) {
                                    var s = o.getAttribute("data-next-time"),
                                        c = Date.now();
                                    isEmptyLadiPage(s) && (s = c + 1e3 * (d - 1), o.setAttribute("data-next-time", s)), c >= s && (X(o, !0), o.setAttribute("data-next-time", c + 1e3 * d))
                                }
                            }
                        }
                })
            },
            Z = function(t, e) {
                var a = i.runtime.eventData[t];
                if ("gallery" == a.type) {
                    var n = e.getAttribute("data-runtime-id");
                    if (!e.hasAttribute("data-scrolled")) {
                        e.setAttribute("data-scrolled", !1);
                        i.runtime.list_scroll_func[n] = function() {
                            e.setAttribute("data-scrolled", !0)
                        }
                    }
                    var o = a[i.runtime.device + ".option.gallery_control.autoplay"],
                        r = a[i.runtime.device + ".option.gallery_control.autoplay_time"],
                        l = 0;
                    o && !isEmptyLadiPage(r) && (l = r);
                    var d = function(t) {
                            Q(t, e)
                        },
                        s = function(t) {
                            if (t.stopPropagation(), !(t = i.getEventCursorData(t)).target.classList.contains("ladi-gallery-view-arrow")) {
                                var a = e.getAttribute("data-runtime-id");
                                isEmptyLadiPage(i.runtime.timeout_gallery[a]) && (i.runtime.current_element_mouse_down_gallery_view = a, i.runtime.current_element_mouse_down_gallery_view_position_x = t.pageX, i.runtime.current_element_mouse_down_gallery_view_position_y = t.pageY)
                            }
                        },
                        c = function(t) {
                            t.stopPropagation(), t = i.getEventCursorData(t), (e.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || e.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom")) && (t.target.classList.contains("ladi-gallery-control-arrow") || (i.runtime.current_element_mouse_down_gallery_control = n, i.runtime.current_element_mouse_down_gallery_control_time = Date.now(), i.runtime.current_element_mouse_down_gallery_control_position_x = t.pageX, e.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("transition-duration", "0ms"), e.getElementsByClassName("ladi-gallery-control-box")[0].setAttribute("data-left", getComputedStyle(e.getElementsByClassName("ladi-gallery-control-box")[0]).left)))
                        };
                    e.getElementsByClassName("ladi-gallery-view-arrow-left")[0].addEventListener("click", function(t) {
                        t.stopPropagation(), e.setAttribute("data-is-next", !1), e.setAttribute("data-next-time", Date.now() + 1e3 * l), X(e, !1)
                    }), e.getElementsByClassName("ladi-gallery-view-item").length > 1 && (e.getElementsByClassName("ladi-gallery-view-arrow-left")[0].classList.remove("opacity-0"), e.getElementsByClassName("ladi-gallery-view-arrow-right")[0].classList.remove("opacity-0")), e.getElementsByClassName("ladi-gallery-view-arrow-right")[0].addEventListener("click", function(t) {
                        t.stopPropagation(), e.setAttribute("data-is-next", !0), e.setAttribute("data-next-time", Date.now() + 1e3 * l), X(e, !1)
                    }), e.getElementsByClassName("ladi-gallery-control-arrow-left")[0].addEventListener("click", function(t) {
                        t.stopPropagation();
                        var i = e.getElementsByClassName("ladi-gallery-control-item")[0];
                        if (!isEmptyLadiPage(i)) {
                            var a = getComputedStyle(i);
                            if (e.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.remove("opacity-0"), e.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.remove("opacity-0"), e.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || e.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom")) {
                                var n = (parseFloatLadiPage(a.width) || 0) + (parseFloatLadiPage(a.marginRight) || 0);
                                n += parseFloatLadiPage(e.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("left")) || 0;
                                var o = parseFloatLadiPage(getComputedStyle(e.getElementsByClassName("ladi-gallery-control-box")[0]).width) || 0;
                                o = (o = -(o -= parseFloatLadiPage(getComputedStyle(e.getElementsByClassName("ladi-gallery-control")[0]).width) || 0)) > 0 ? 0 : o, n > 0 && (n = 0), e.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", n + "px"), n >= 0 && e.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"), n <= o && e.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0")
                            } else {
                                var r = (parseFloatLadiPage(a.height) || 0) + (parseFloatLadiPage(a.marginBottom) || 0);
                                r += parseFloatLadiPage(e.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("top")) || 0;
                                var d = parseFloatLadiPage(getComputedStyle(e.getElementsByClassName("ladi-gallery-control-box")[0]).height) || 0;
                                d = (d = -(d -= parseFloatLadiPage(getComputedStyle(e.getElementsByClassName("ladi-gallery-control")[0]).height) || 0)) > 0 ? 0 : d, r > 0 && (r = 0), e.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("top", r + "px"), r >= 0 && e.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"), r <= d && e.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0")
                            }
                            e.setAttribute("data-next-time", Date.now() + 1e3 * l)
                        }
                    }), (parseFloatLadiPage(getComputedStyle(e.getElementsByClassName("ladi-gallery-control-box")[0]).width) || 0) > (parseFloatLadiPage(getComputedStyle(e.getElementsByClassName("ladi-gallery-control")[0]).width) || 0) && e.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.remove("opacity-0"), e.getElementsByClassName("ladi-gallery-control-arrow-right")[0].addEventListener("click", function(t) {
                        t.stopPropagation();
                        var i = e.getElementsByClassName("ladi-gallery-control-item")[0];
                        if (!isEmptyLadiPage(i)) {
                            var a = getComputedStyle(i);
                            if (e.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.remove("opacity-0"), e.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.remove("opacity-0"), e.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || e.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom")) {
                                var n = (parseFloatLadiPage(a.width) || 0) + (parseFloatLadiPage(a.marginRight) || 0);
                                n = -n + (parseFloatLadiPage(e.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("left")) || 0);
                                var o = parseFloatLadiPage(getComputedStyle(e.getElementsByClassName("ladi-gallery-control-box")[0]).width) || 0;
                                n < (o = (o = -(o -= parseFloatLadiPage(getComputedStyle(e.getElementsByClassName("ladi-gallery-control")[0]).width) || 0)) > 0 ? 0 : o) && (n = o), e.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", n + "px"), n >= 0 && e.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"), n <= o && e.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0")
                            } else {
                                var r = (parseFloatLadiPage(a.height) || 0) + (parseFloatLadiPage(a.marginBottom) || 0);
                                r = -r + (parseFloatLadiPage(e.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("top")) || 0);
                                var d = parseFloatLadiPage(getComputedStyle(e.getElementsByClassName("ladi-gallery-control-box")[0]).height) || 0;
                                r < (d = (d = -(d -= parseFloatLadiPage(getComputedStyle(e.getElementsByClassName("ladi-gallery-control")[0]).height) || 0)) > 0 ? 0 : d) && (r = d), e.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("top", r + "px"), r >= 0 && e.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"), r <= d && e.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0")
                            }
                            e.setAttribute("data-next-time", Date.now() + 1e3 * l)
                        }
                    }), e.getElementsByClassName("ladi-gallery-view")[0].addEventListener("mousedown", s), e.getElementsByClassName("ladi-gallery-view")[0].addEventListener("touchstart", s, i.runtime.scrollEventPassive), e.getElementsByClassName("ladi-gallery-control")[0].addEventListener("mousedown", c), e.getElementsByClassName("ladi-gallery-control")[0].addEventListener("touchstart", c, i.runtime.scrollEventPassive);
                    for (var u = e.getElementsByClassName("ladi-gallery-control-item"), p = 0; p < u.length; p++) u[p].addEventListener("click", d);
                    isEmptyLadiPage(a["option.product_mapping_name"]) && !e.hasAttribute("data-loaded") && i.runTimeout(function() {
                        e.setAttribute("data-loaded", !0)
                    }, 300)
                }
            },
            tt = function(t, e) {
                if ((isEmptyLadiPage(i.runtime.timenext_carousel[t]) || !(i.runtime.timenext_carousel[t] > Date.now())) && isEmptyLadiPage(i.runtime.current_element_mouse_down_carousel)) {
                    var a = document.getElementById(t);
                    if (!isEmptyLadiPage(a)) {
                        var n = i.runtime.eventData[t];
                        if ("carousel" == n.type) {
                            var o = a.getElementsByClassName("ladi-carousel-arrow-left")[0],
                                r = a.getElementsByClassName("ladi-carousel-arrow-right")[0];
                            isEmptyLadiPage(o) || o.classList.remove("opacity-0"), isEmptyLadiPage(r) || r.classList.remove("opacity-0");
                            var l = a.getAttribute("data-is-next") || "true";
                            l = "true" == l.toLowerCase();
                            var d = parseFloatLadiPage(a.getAttribute("data-current")) || 0,
                                s = 0,
                                c = 0,
                                u = 0,
                                p = 0,
                                m = 0,
                                g = 0,
                                _ = 0,
                                y = 0,
                                f = 0,
                                v = 0,
                                h = a.getElementsByClassName("ladi-carousel-content")[0];
                            e && h.style.removeProperty("transition-duration");
                            var P = 1e3 * (parseFloatLadiPage(getComputedStyle(a.getElementsByClassName("ladi-carousel-content")[0]).transitionDuration) || 0);
                            if (i.runtime.timenext_carousel[t] = Date.now() + P, isEmptyLadiPage(n["option.meta_data.version"])) {
                                if (s = parseFloatLadiPage(i.runtime.eventData[t][i.runtime.device + ".option.carousel_crop.width"]) || 0, (parseFloatLadiPage(getComputedStyle(a).width) || 0) >= s) return o.classList.add("opacity-0"), void r.classList.add("opacity-0");
                                (u = parseFloatLadiPage(i.runtime.eventData[t][i.runtime.device + ".option.carousel_crop.width_item"]) || 0) > a.clientWidth && (u = a.clientWidth), m = Math.ceil(s / u), e ? l ? d > m - 2 ? (d = m - 2, l = !1) : d++ : d < 1 ? (d = 1, l = !0) : d-- : l ? d++ : d--, d < 0 && (d = 0), d > m - 1 && (d = m - 1);
                                var L = i.getElementBoundingClientRect(a);
                                (_ = -(_ = L.x + d * u - L.x - (a.clientWidth - u) / 2) > 0 ? 0 : -_) < (f = -(s - a.clientWidth)) && (_ = f), h.style.setProperty("left", _ + "px"), _ >= 0 && o.classList.add("opacity-0"), _ <= f && r.classList.add("opacity-0")
                            }
                            if (n["option.meta_data.version"] == i.const.META_VERSION.two) {
                                if (n[i.runtime.device + ".option.carousel_setting.display_type"] == i.const.CAROUSEL_DISPLAY_TYPE.horizontal) {
                                    if (s = parseFloatLadiPage(getComputedStyle(a.getElementsByClassName("ladi-carousel-content")[0]).width) || 0, (parseFloatLadiPage(getComputedStyle(a).width) || 0) >= s) return o.classList.add("opacity-0"), void r.classList.add("opacity-0");
                                    g = parseFloatLadiPage(i.runtime.eventData[t][i.runtime.device + ".option.carousel_crop.margin_item"]) || 0, u = parseFloatLadiPage(i.runtime.eventData[t][i.runtime.device + ".option.carousel_crop.width_item"]) || 0, m = a.querySelectorAll(".ladi-carousel-content > .ladi-element").length
                                }
                                if (n[i.runtime.device + ".option.carousel_setting.display_type"] == i.const.CAROUSEL_DISPLAY_TYPE.vertical) {
                                    if (c = parseFloatLadiPage(getComputedStyle(a.getElementsByClassName("ladi-carousel-content")[0]).height) || 0, (parseFloatLadiPage(getComputedStyle(a).height) || 0) >= c) return o.classList.add("opacity-0"), void r.classList.add("opacity-0");
                                    g = parseFloatLadiPage(i.runtime.eventData[t][i.runtime.device + ".option.carousel_crop.margin_item"]) || 0, p = parseFloatLadiPage(i.runtime.eventData[t][i.runtime.device + ".option.carousel_crop.width_item"]) || 0, m = a.querySelectorAll(".ladi-carousel-content > .ladi-element").length
                                }
                                if (e) {
                                    if (n["option.carousel_setting.autoplay_type"] == i.const.CAROUSEL_AUTOPLAY_TYPE.type_ab && (++d < 0 && (d = 0), d >= m)) return;
                                    n["option.carousel_setting.autoplay_type"] == i.const.CAROUSEL_AUTOPLAY_TYPE.type_abab && (d > m - 2 ? d = 0 : d++, d < 0 && (d = 0), d > m - 1 && (d = m - 1)), n["option.carousel_setting.autoplay_type"] == i.const.CAROUSEL_AUTOPLAY_TYPE.type_abba && (l ? d > m - 2 ? (d = m - 2, l = !1) : d++ : d < 1 ? (d = 1, l = !0) : d--, d < 0 && (d = 0), d > m - 1 && (d = m - 1))
                                } else l ? ++d >= m && (d = 0) : --d < 0 && (d = m - 1);
                                n[i.runtime.device + ".option.carousel_setting.display_type"] == i.const.CAROUSEL_DISPLAY_TYPE.horizontal && (_ = -(u * d + g * d), (_ = (_ += (a.clientWidth - u) / 2) > 0 ? 0 : _) < (f = -(s - a.clientWidth)) && (_ = f), h.style.setProperty("left", _ + "px")), n[i.runtime.device + ".option.carousel_setting.display_type"] == i.const.CAROUSEL_DISPLAY_TYPE.vertical && (y = -(p * d + g * d), (y = (y += (a.clientHeight - p) / 2) > 0 ? 0 : y) < (v = -(c - a.clientHeight)) && (y = v), h.style.setProperty("top", y + "px"))
                            }
                            a.setAttribute("data-is-next", l), a.setAttribute("data-current", d);
                            var E = a.querySelector(".ladi-carousel-indicators-circle .item.selected, .ladi-carousel-indicators-number .item.selected");
                            isEmptyLadiPage(E) || E.classList.remove("selected"), E = a.querySelector('.ladi-carousel-indicators-circle .item[data-index="' + d + '"], .ladi-carousel-indicators-number .item[data-index="' + d + '"]'), isEmptyLadiPage(E) || E.classList.add("selected"), e || a.setAttribute("data-stop", !0), i.runAnimationDoc(a, null, {
                                is_multiple: !0,
                                element_type: n.type
                            })
                        }
                    }
                }
            },
            et = function(t, e) {
                var a = function(t) {
                        t.addEventListener("click", function(e) {
                            e.stopPropagation(), t.classList.contains("accordion-menu") && i.runtime.time_click_dom[t.id] > Date.now() || (i.runtime.time_click_dom[t.id] = Date.now() + 250, t.classList.contains("selected") ? t.classList.remove("selected") : t.classList.add("selected"))
                        })
                    },
                    n = [];
                e ? t.classList.contains("element-click-selected") && n.push(t) : n = document.getElementsByClassName("element-click-selected");
                for (var o = 0; o < n.length; o++) a(n[o])
            },
            it = function(t) {
                if (i.runtime.isClient && !i.runtime.isDesktop && !isEmptyLadiPage(i.runtime.bodyFontSize)) {
                    var e = (parseFloatLadiPage(getComputedStyle(document.body).fontSize) || 0) / i.runtime.bodyFontSize;
                    if (1 != e)
                        for (var a = document.querySelectorAll(".ladi-paragraph, .ladi-list-paragraph, .ladi-headline, .ladi-countdown, .ladi-form, .ladi-table, .ladi-spin-lucky"), n = 0; n < a.length; n++) {
                            var o = (parseFloatLadiPage(getComputedStyle(a[n]).fontSize) || 0) / (e * e);
                            a[n].style.setProperty("font-size", o + "px")
                        } else t > Date.now() && i.runTimeout(function() {
                            it(t)
                        }, 100)
                }
            },
            at = function(t) {
                var e = null;
                return isEmptyLadiPage(t) || (e = t.classList.contains("no-value") ? null : t.getAttribute("data-value")), e = isEmptyLadiPage(e) ? "" : e
            },
            nt = function(t, e) {
                var i = t.querySelectorAll(".ladi-form-label-item");
                e = isEmptyLadiPage(e) ? "" : e;
                for (var a = 0; a < i.length; a++) {
                    at(i[a]) == e ? i[a].classList.add("selected") : i[a].classList.remove("selected")
                }
            },
            ot = function(t) {
                var e = t.querySelector(".ladi-form-label-item.selected");
                return at(e)
            },
            rt = function(t, e) {
                var a = t.target;
                if (a.classList.contains("disabled"))
                    for (var n = i.findAncestor(a, "ladi-element").querySelectorAll(".ladi-form-label-item"), o = 0; o < n.length; o++) n[o].classList.contains("no-value") ? n[o].classList.add("selected") : n[o].classList.remove("selected"), n[o].classList.remove("disabled");
                var r = at(a);
                !t.is_fire_event && a.classList.contains("selected") && (r = "");
                var l = i.findAncestor(a, "ladi-form-label-container");
                nt(l, r), isFunctionLadiPage(e) && e(l)
            },
            lt = function(e, a, n, o) {
                if ("form" == a) {
                    var r = i.runtime.eventData[e];
                    if (!isEmptyLadiPage(r) && r["option.is_add_to_cart"]) {
                        var l = document.getElementById(e);
                        if (!isEmptyLadiPage(l) && (!n || isEmptyLadiPage(i.findAncestor(l, "ladi-collection-item")))) {
                            var d = l.querySelector('[data-variant="true"]');
                            if (!isEmptyLadiPage(d)) {
                                var s = i.runtime.eventData[d.id];
                                if (!isEmptyLadiPage(s)) {
                                    var c = r["option.product_type"],
                                        u = r["option.product_id"];
                                    if (!isEmptyLadiPage(c) && !isEmptyLadiPage(u)) {
                                        var p = i.generateVariantProduct(r, !1, null, null, null, null, !0, !0, function(t) {
                                            lt(e, a, n, o)
                                        });
                                        if (!(isEmptyLadiPage(p) || isEmptyLadiPage(p.store_info) || isEmptyLadiPage(p.product))) {
                                            var m = i.generateVariantProduct(r, !0, s["option.product_variant_type"], s["option.product_variant_title"], s["option.product_variant_price"], s["option.input_tabindex"], t, !0, function(t) {
                                                    lt(e, a, n, o)
                                                }),
                                                g = function(t) {
                                                    i.updateProductVariantSelectOption(t, r, s, o, function() {
                                                        if (o) {
                                                            var a = i.generateVariantProduct(r, !1, null, null, null, null, !0, !0),
                                                                n = i.getProductVariantId(t.target, a.product);
                                                            if (!isArrayLadiPage(a.product.variants)) return;
                                                            var l = a.product.variants.find(function(t) {
                                                                return t.product_variant_id == n
                                                            });
                                                            if (isEmptyLadiPage(l)) return;
                                                            for (var d = document.querySelectorAll("#POPUP_PRODUCT .ladi-element"), s = 0; s < d.length; s++) d[s].id != e && i.runtime.tmp.runLadiSaleProductKey(d[s].id, !1, !0, l, a)
                                                        } else i.runtime.tmp.generateLadiSaleProduct(!1, !0, t)
                                                    })
                                                },
                                                _ = function(t) {
                                                    rt(t, function(t) {
                                                        g({
                                                            target: t
                                                        })
                                                    })
                                                };
                                            i.showParentVisibility(d, function() {
                                                for (var t = d.clientHeight, e = t, a = d.querySelectorAll("select.ladi-form-control"), n = {}, o = 0; o < a.length; o++) n[a[o].getAttribute("data-store-id") + "_" + a[o].getAttribute("data-product-id") + "_" + a[o].getAttribute("data-product-option-id")] = a[o].value;
                                                var c = d.querySelectorAll(".ladi-form-label-container");
                                                for (o = 0; o < c.length; o++) n[c[o].getAttribute("data-store-id") + "_" + c[o].getAttribute("data-product-id") + "_" + c[o].getAttribute("data-product-option-id")] = ot(c[o]);
                                                d.innerHTML = m;
                                                for (var u = null, p = null, y = d.querySelectorAll("select.ladi-form-control"), f = 0; f < y.length; f++) y[f].addEventListener("change", g), u = n[y[f].getAttribute("data-store-id") + "_" + y[f].getAttribute("data-product-id") + "_" + y[f].getAttribute("data-product-option-id")], isNullLadiPage(u) && (p = y[f].querySelector("option"), isEmptyLadiPage(p) || (u = p.getAttribute("value"))), y[f].value = u;
                                                var v = d.querySelectorAll(".ladi-form-label-container");
                                                for (f = 0; f < v.length; f++) {
                                                    for (var h = v[f].querySelectorAll(".ladi-form-label-item"), P = 0; P < h.length; P++) i.tapEventListener(h[P], _);
                                                    u = n[v[f].getAttribute("data-store-id") + "_" + v[f].getAttribute("data-product-id") + "_" + v[f].getAttribute("data-product-option-id")], isNullLadiPage(u) && (p = h[1], isEmptyLadiPage(p) || (u = at(p))), nt(v[f], u)
                                                }
                                                if (i.updateProductVariantSelectOptionFirst(r, s, d), s["option.product_variant_type"] != i.const.PRODUCT_VARIANT_TYPE.combined) d.style.setProperty("height", "auto"), e = d.clientHeight, d.style.removeProperty("height"), e > 0 && t != e && (d.style.setProperty("height", e + "px"), i.updateHeightElement(!0, d, l, t, e));
                                                else if (!isEmptyLadiPage(r["option.product_variant_id"]))
                                                    for (var L = 0; L < y.length; L++) {
                                                        var E = y[L].querySelector('option[data-product-variant-id="' + r["option.product_variant_id"] + '"]');
                                                        isEmptyLadiPage(E) || y[L].value == E.getAttribute("value") || (y[L].value = E.getAttribute("value"), i.fireEvent(y[L], "change"))
                                                    }
                                            })
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            dt = function(e, a, n) {
                if (isObjectLadiPage(a) && isObjectLadiPage(a.variant) && isObjectLadiPage(a.product)) {
                    var o = a.variant.src;
                    if (isEmptyLadiPage(o) && (o = a.product.image, isObjectLadiPage(o) && (o = o.src)), !isEmptyLadiPage(o)) {
                        !isStringLadiPage(o) || o.startsWith("http://") || o.startsWith("https://") || o.startsWith("//") || (o = "https://" + i.const.STATIC_W_DOMAIN + "/" + o);
                        var r = i.findAncestor(e, "ladi-collection-item"),
                            l = [],
                            d = 0,
                            s = null;
                        if (isEmptyLadiPage(r)) {
                            var c = document.querySelectorAll("[data-runtime-id]");
                            for (d = 0; d < c.length; d++) r = i.findAncestor(c[d], "ladi-collection-item"), isEmptyLadiPage(r) && (s = i.runtime.eventData[c[d].id], isEmptyLadiPage(s) || s["option.product_type"] != n["option.product_type"] || s["option.product_id"] != n["option.product_id"] || l.push(c[d]))
                        } else l = r.querySelectorAll("[data-runtime-id]");
                        for (d = 0; d < l.length; d++)
                            if (s = i.runtime.eventData[l[d].id], !isEmptyLadiPage(s) && !isEmptyLadiPage(s["option.product_mapping_name"])) {
                                var u = l[d].getElementsByClassName("ladi-gallery-view")[0],
                                    p = i.getOptimizeImage(o, u.clientWidth, u.clientHeight, !0, !1, !1, t);
                                p = 'url("' + p + '")';
                                var m = i.getOptimizeImage(o, 0, 0, !0, !1, !1, t);
                                m = 'url("' + m + '")';
                                for (var g = u.getElementsByClassName("ladi-gallery-view-item"), _ = 0; _ < g.length; _++)
                                    if (p == getComputedStyle(g[_]).backgroundImage || m == getComputedStyle(g[_]).backgroundImage) {
                                        var y = (parseFloatLadiPage(g[_].getAttribute("data-index")) || 0) + 1;
                                        window.ladi(l[d].id, l[d]).index(y)
                                    }
                            }
                    }
                }
            },
            st = function(e, a, n, o, r, l, d, s, c) {
                var u = i.runtime.eventData[e];
                if (!isEmptyLadiPage(u)) {
                    var p = u["option.product_mapping_name"],
                        m = !isEmptyLadiPage(p),
                        g = u.type,
                        _ = JSON.stringify(u),
                        y = null,
                        f = null;
                    if (l) y = r.product[p];
                    else if (isEmptyLadiPage(o)) {
                        if (isEmptyLadiPage(u) || isEmptyLadiPage(u["option.product_type"]) || isEmptyLadiPage(u["option.product_id"]) || isEmptyLadiPage(p)) return;
                        var v = u["option.product_variant_id"],
                            h = !1;
                        if (isEmptyLadiPage(v) && (a && (h = ! function() {
                                for (var t = !1, e = 0; e < E.length; e++) {
                                    var a = i.runtime.eventData[E[e]];
                                    if ("form" == a.type && a["option.product_type"] == u["option.product_type"] && a["option.product_id"] == u["option.product_id"]) {
                                        t = !0;
                                        break
                                    }
                                }
                                return t
                            }()), !isEmptyLadiPage(d))) {
                            if (u["option.product_id"] != d.target.getAttribute("data-product-id")) return;
                            var P = i.generateVariantProduct(u, !1, null, null, null, null, !0, !0, function(t) {
                                st(e, a, n, o, r, !1, d)
                            });
                            isObjectLadiPage(P) && (v = i.getProductVariantId(d.target, P.product))
                        }
                        if (_ === (y = (f = i.generateProductKey(!0, _, !0, u, h, v, o, function(t) {
                                st(e, a, n, o, r, l, d)
                            })).value)) return
                    } else {
                        if ("form" == g && u["option.is_add_to_cart"]) return u["option.product_id"] = o.product_id, u["option.product_variant_id"] = o.product_variant_id, void lt(e, g, !1, !0);
                        if (!m) return;
                        y = (y = (f = i.generateProductKey(!0, null, !0, u, !1, o.product_variant_id, o)).value) || ""
                    }
                    var L = null,
                        A = null,
                        b = null;
                    if ("headline" == g || "paragraph" == g) {
                        var T = s ? "ladi-html" : null;
                        window.ladi(e).value(isNullLadiPage(y) ? "" : y, T)
                    }
                    if ("image" == g) {
                        if (L = document.getElementById(e), isEmptyLadiPage(L)) return;
                        b = i.getOptimizeImage(y, L.clientWidth, L.clientHeight, !0, !1, !1, t), A = "style_add_to_cart_image_" + e;
                        var w = "";
                        w = isEmptyLadiPage(b) ? "#" + e + "  > .ladi-image > .ladi-image-background {background-image: none;}" : "#" + e + '  > .ladi-image > .ladi-image-background {background-image: url("' + b + '");}', i.createStyleElement(A, w)
                    }
                    if ("gallery" == g) {
                        if (!isArrayLadiPage(y)) return;
                        if (L = document.getElementById(e), isEmptyLadiPage(L)) return;
                        if (n && "true" == L.getAttribute("data-loaded")) return void dt(L, f, u);
                        for (var S = L.getElementsByClassName("ladi-gallery-view")[0], O = L.getElementsByClassName("ladi-gallery-view-item"); O.length < y.length;) {
                            var C = i.createTmpElement("div", '<div class="ladi-gallery-view-item" data-index="' + O.length + '"></div>', null, !0);
                            L.getElementsByClassName("ladi-gallery-view")[0].appendChild(C)
                        }
                        for (; O.length > y.length;) O[O.length - 1].parentElement.removeChild(O[O.length - 1]);
                        for (var I = L.getElementsByClassName("ladi-gallery-control-item"), N = function(t) {
                                Q(t, L)
                            }; I.length < y.length;) {
                            var k = i.createTmpElement("div", '<div class="ladi-gallery-control-item" data-index="' + I.length + '"></div>', null, !0);
                            k.addEventListener("click", N), L.getElementsByClassName("ladi-gallery-control-box")[0].appendChild(k)
                        }
                        for (; I.length > y.length;) I[I.length - 1].parentElement.removeChild(I[I.length - 1]);
                        A = "style_add_to_cart_gallery_" + e;
                        var x = "";
                        y.length <= 1 && (x += "#" + e + " .ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow {display: none;}", x += "#" + e + " > .ladi-gallery > .ladi-gallery-view {height: 100%;}", x += "#" + e + " > .ladi-gallery > .ladi-gallery-control {display: none;}");
                        var D = L.getElementsByClassName("ladi-gallery-control-item")[0];
                        y.forEach(function(a, n) {
                            b = i.getOptimizeImage(a.src, S.clientWidth, S.clientHeight, !0, !1, !1, t), x += "#" + e + ' .ladi-gallery .ladi-gallery-view-item[data-index="' + n + '"] {background-image: url("' + b + '");}', b = i.getOptimizeImage(a.src, D.clientWidth, D.clientHeight, !0, !1, !1, t), x += "#" + e + ' .ladi-gallery .ladi-gallery-control-item[data-index="' + n + '"] {background-image: url("' + b + '");}'
                        }), L.setAttribute("data-max-item", y.length), L.setAttribute("data-loaded", !0), i.createStyleElement(A, x)
                    }
                }
            },
            ct = function() {
                var t = ["phone", "email", "coupon"],
                    e = document.querySelectorAll(".ladi-form .ladi-button");
                i.runtime.tmp.list_form_checkout = [];
                for (var a = function(t, e) {
                        var a = i.findAncestor(t.target, "ladi-form");
                        if (!isEmptyLadiPage(a) && (a = a.querySelector("[data-submit-form-id]"), !isEmptyLadiPage(a))) {
                            var n = a.getAttribute("data-submit-form-id");
                            if (!isEmptyLadiPage(n)) {
                                var o = document.querySelector("#" + n + ' .ladi-form-item input[name="coupon"]');
                                isEmptyLadiPage(o) || (o.value = t.target.value, i.fireEvent(o, e))
                            }
                        }
                    }, n = function(t) {
                        a(t, "change")
                    }, o = function(t) {
                        a(t, "input")
                    }, r = function(t) {
                        if (isEmptyLadiPage(i.runtime.tmp.current_use_coupon)) {
                            var e = i.findAncestor(t.target, "ladi-form"),
                                a = e.querySelector('input[name="coupon"]');
                            isEmptyLadiPage(a) || a.setAttribute("required", "required"), e.reportValidity() && i.reloadPriceDiscount(t)
                        }
                    }, l = 0; l < e.length; l++) {
                    var d = i.findAncestor(e[l], "ladi-element");
                    if (!isEmptyLadiPage(d)) {
                        var s = i.findAncestor(e[l], "ladi-form");
                        if (!isEmptyLadiPage(s)) {
                            var c = i.findAncestor(s, "ladi-element");
                            if (!isEmptyLadiPage(c)) {
                                var u = i.runtime.eventData[c.id];
                                if (!isEmptyLadiPage(u)) {
                                    var p = i.runtime.eventData[d.id];
                                    if (isObjectLadiPage(p) && !isEmptyLadiPage(p["option.data_submit_form_id"])) {
                                        if (u["option.is_form_coupon"]) {
                                            d.setAttribute("data-submit-form-id", p["option.data_submit_form_id"]), d.addEventListener("click", r), s.onsubmit = function() {
                                                return !1
                                            };
                                            var m = s.querySelector('.ladi-form-item input[name="coupon"]');
                                            if (!isEmptyLadiPage(m)) {
                                                m.addEventListener("change", n), m.addEventListener("input", o);
                                                var g = document.querySelector("#" + p["option.data_submit_form_id"] + ' .ladi-form-item input[name="coupon"]');
                                                isEmptyLadiPage(g) || g.setAttribute("data-replace-coupon", !0)
                                            }
                                            i.runtime.tmp.list_form_checkout.push(p["option.data_submit_form_id"])
                                        }
                                    } else if (!u["option.is_form_login"] && !u["option.is_form_coupon"]) {
                                        var _ = i.findAncestor(c, "ladi-popup");
                                        isEmptyLadiPage(_) || (_ = i.findAncestor(_, "ladi-element")), isEmptyLadiPage(_) || "POPUP_CHECKOUT" != _.id || i.runtime.tmp.list_form_checkout.push(c.id)
                                    }
                                }
                            }
                        }
                    }
                }
                i.runtime.tmp.list_form_checkout = i.runtime.tmp.list_form_checkout.unique();
                for (var y = function(t) {
                        -1 == [i.const.FORM_CONFIG_TYPE.sapo, i.const.FORM_CONFIG_TYPE.haravan, i.const.FORM_CONFIG_TYPE.shopify, i.const.FORM_CONFIG_TYPE.wordpress].indexOf(i.runtime.shopping_product_type) && i.reloadPriceDiscount()
                    }, f = 0; f < i.runtime.tmp.list_form_checkout.length; f++)
                    for (var v = document.querySelectorAll("#" + i.runtime.tmp.list_form_checkout[f] + " .ladi-form-item input.ladi-form-control"), h = 0; h < v.length; h++) - 1 != t.indexOf(v[h].getAttribute("name")) && (v[h].addEventListener("change", y), v[h].addEventListener("input", y))
            },
            ut = function(t) {
                var e = {
                    type: "POPUPX",
                    iframe_id: i.runtime.tmp.popupx_iframe_id
                };
                Object.keys(t).forEach(function(i) {
                    e[i] = t[i]
                }), i.postMessageWindow(window.parent, e, "*")
            },
            pt = function(t) {
                if (!i.runtime.tmp.popupx_is_desktop && !isEmptyLadiPage(t)) {
                    var e = parseFloatLadiPage(t);
                    window.innerWidth = e, window.outerWidth = e, isFunctionLadiPage(window.ladi_viewport) && window.ladi_viewport()
                }
            },
            mt = function(t, e, a, n) {
                var o = isEmptyLadiPage(i.runtime.tmp.popupx_current_element_id);
                i.runtime.tmp.popupx_current_element_id = t, !e || o || a || n || B("PageView", {})
            },
            gt = function(t, e) {
                for (var a = !1, n = !1, o = document.querySelectorAll("#" + i.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), r = 0; r < o.length; r++) "none" != getComputedStyle(o[r]).display && (o[r].id == t && (a = !0), i.runRemovePopup(o[r].id, !0, null, !1, !0));
                for (o = document.querySelectorAll(".ladi-section:not(#" + i.runtime.builder_section_popup_id + ")"), r = 0; r < o.length; r++) "none" != getComputedStyle(o[r]).display && (o[r].id == t && (n = !0), window.ladi(o[r].id).hide(!0));
                return {
                    isCurrentPopup: a,
                    isCurrentSection: n
                }
            },
            _t = function(t, e, a) {
                var n = i.runtime.eventData[t],
                    o = document.getElementById(t),
                    r = null,
                    l = null,
                    d = !1,
                    s = !1,
                    c = {
                        width_device: i.runtime.desktop_width
                    },
                    u = document.getElementById("style_container_desktop");
                if ((isEmptyLadiPage(u) || "print" == u.getAttribute("media")) && (c = {
                        width_device: i.runtime.mobile_width
                    }), isObjectLadiPage(n) && !isEmptyLadiPage(o)) {
                    var p = getComputedStyle(o);
                    if ("popup" == n.type) {
                        r = {};
                        var m = n[i.runtime.device + ".option.popup_position"],
                            g = !1;
                        if (isObjectLadiPage(a) && !isNullLadiPage(a.formThankyouPopupXInline) && (g = a.formThankyouPopupXInline), g) return m == i.const.POSITION_TYPE.default ? ut({
                            group_id: i.runtime.tmp.popupx_iframe_id,
                            popupx_url: window.location.origin + window.location.pathname,
                            ladipage_id: i.runtime.ladipage_id,
                            action_type: "show_popupx",
                            action_value: t,
                            action: {
                                type: "run_action_force"
                            }
                        }) : yt(t, e), !0;
                        d = (l = gt(t)).isCurrentPopup, s = l.isCurrentSection;
                        ["width", "height", "position", "margin", "top", "left", "bottom", "right", "z-index"].forEach(function(t) {
                            r[t] = p[t]
                        }), pt(r.width), c.width = r.width;
                        var _ = n[i.runtime.device + ".option.popup_backdrop"];
                        return ut({
                            id: t,
                            position: m,
                            data_backdrop: _,
                            data_scale: c,
                            is_opacity: !d,
                            set_scroll_popup: !0,
                            dimension: r,
                            action: {
                                type: "set_iframe_dimension"
                            }
                        }), window.ladi(t).show(!0), mt(t, e, d, s), !0
                    }
                    if ("section" == n.type) {
                        if (d = (l = gt(t)).isCurrentPopup, s = l.isCurrentSection, n[i.runtime.device + ".option.sticky"]) {
                            r = {
                                height: p.height
                            };
                            var y = o.getElementsByClassName("ladi-container")[0],
                                f = getComputedStyle(y);
                            pt(f.width), c.width = f.width, c.is_sticky_bar = !0, ut({
                                id: t,
                                data_scale: c,
                                dimension: r,
                                element: n,
                                device: i.runtime.device,
                                action: {
                                    type: "set_iframe_sticky"
                                }
                            }), window.ladi(t).show(!0), mt(t, e, d, s)
                        }
                        return !0
                    }
                }
                return !1
            },
            yt = function(t, e) {
                var a = i.runtime.eventData[t],
                    n = document.getElementById(t),
                    o = null;
                if (isObjectLadiPage(a) && !isEmptyLadiPage(n)) {
                    var r = getComputedStyle(n),
                        l = gt(t),
                        d = l.isCurrentPopup,
                        s = l.isCurrentSection,
                        c = {
                            width_device: i.runtime.desktop_width
                        },
                        u = document.getElementById("style_container_desktop");
                    if ((isEmptyLadiPage(u) || "print" == u.getAttribute("media")) && (c = {
                            width_device: i.runtime.mobile_width
                        }), o = {
                            width: r.width,
                            height: r.height
                        }, "popup" == a.type && (c.width = o.width), "section" == a.type) {
                        var p = n.getElementsByClassName("ladi-container")[0],
                            m = getComputedStyle(p);
                        o.width = m.width, c.width = m.width, c.is_sticky_bar = !0
                    }
                    return pt(o.width), ut({
                        id: t,
                        data_scale: c,
                        dimension: o,
                        action: {
                            type: "set_iframe_dimension"
                        }
                    }), window.ladi(t).show(!0), mt(t, e, d, s), !0
                }
                return !1
            },
            ft = function(t) {
                for (var e = ["style_element_desktop", "style_container_desktop", "style_ladi_media_desktop"], i = ["style_element_mobile", "style_container_mobile", "style_ladi_media_mobile"], a = 0; a < e.length; a++) {
                    var n = document.getElementById(e[a]);
                    isEmptyLadiPage(n) || (t ? n.removeAttribute("media") : n.setAttribute("media", "print"))
                }
                for (a = 0; a < i.length; a++) {
                    var o = document.getElementById(i[a]);
                    isEmptyLadiPage(o) || (t ? o.setAttribute("media", "print") : o.removeAttribute("media"))
                }
            },
            vt = function() {
                var t = document.querySelectorAll('[data-buy-now-ladisales="true"], [data-add-to-cart-ladisales="true"]');
                if (0 != t.length) {
                    var e = i.runtime.shopping_ladisales_page_checkout_api_key,
                        a = i.runtime.shopping_ladisales_checkout_config_id;
                    if (!isEmptyLadiPage(e)) {
                        for (var n = function(t) {
                                t.style.setProperty("cursor", "pointer"), t.addEventListener("click", function(e) {
                                    e.stopPropagation(),
                                        function(t) {
                                            if (isObjectLadiPage(window.LadiSales)) {
                                                var e = {
                                                    productID: t.getAttribute("data-product-id"),
                                                    productVariantID: t.getAttribute("data-product-variant-id"),
                                                    quantity: 1
                                                };
                                                "true" == t.getAttribute("data-buy-now-ladisales") && isFunctionLadiPage(window.LadiSales.buyNow) && window.LadiSales.buyNow(e, {
                                                    callback: function(a) {
                                                        isObjectLadiPage(a) && (i.runEventTracking(null, {
                                                            cart_quantity: e.quantity,
                                                            cart_currency: a.currency_code,
                                                            cart_value: a.price,
                                                            is_form: !1,
                                                            is_add_to_cart: !0,
                                                            is_custom: !0,
                                                            event: {
                                                                target: t
                                                            }
                                                        }), i.runTimeout(function() {
                                                            i.runEventTracking(null, {
                                                                is_form: !1,
                                                                is_click_buy_now: !0,
                                                                is_custom: !0,
                                                                event: {
                                                                    target: t
                                                                }
                                                            })
                                                        }, i.runtime.time_delay_click_button))
                                                    },
                                                    callback_order: function(e) {
                                                        i.runEventTracking(null, {
                                                            is_form: !1,
                                                            payment_info: e,
                                                            is_place_an_order: !0,
                                                            is_custom: !0,
                                                            event: {
                                                                target: t
                                                            }
                                                        })
                                                    },
                                                    callback_payment: function(e) {
                                                        i.runEventTracking(null, {
                                                            is_form: !1,
                                                            payment_info: e,
                                                            is_complete_payment: !0,
                                                            is_custom: !0,
                                                            event: {
                                                                target: t
                                                            }
                                                        })
                                                    }
                                                }), "true" == t.getAttribute("data-add-to-cart-ladisales") && isFunctionLadiPage(window.LadiSales.cartAdd) && window.LadiSales.cartAdd(e, {
                                                    callback: function(a) {
                                                        isObjectLadiPage(a) && i.runEventTracking(null, {
                                                            cart_quantity: e.quantity,
                                                            cart_currency: a.currency_code,
                                                            cart_value: a.price,
                                                            is_form: !1,
                                                            is_add_to_cart: !0,
                                                            is_custom: !0,
                                                            event: {
                                                                target: t
                                                            }
                                                        })
                                                    },
                                                    callback_order: function(e) {
                                                        i.runEventTracking(null, {
                                                            is_form: !1,
                                                            payment_info: e,
                                                            is_place_an_order: !0,
                                                            is_custom: !0,
                                                            event: {
                                                                target: t
                                                            }
                                                        })
                                                    },
                                                    callback_payment: function(e) {
                                                        i.runEventTracking(null, {
                                                            is_form: !1,
                                                            payment_info: e,
                                                            is_complete_payment: !0,
                                                            is_custom: !0,
                                                            event: {
                                                                target: t
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        }(t)
                                })
                            }, o = 0; o < t.length; o++) n(t[o]);
                        var r = document.querySelector('script[src^="' + i.const.LADISALES_SDK + '"][data-time="' + i.runtime.timenow + '"]');
                        if (isEmptyLadiPage(r)) {
                            var l = e;
                            isEmptyLadiPage(a) || (l += "_" + a), i.loadScript(i.const.LADISALES_SDK, {
                                id: l,
                                "data-time": i.runtime.timenow
                            }, !0)
                        }
                    }
                }
            },
            ht = function() {
                var e;
                LadiPageShopping.push(function() {
                        i.changeTotalPriceCart()
                    }), i.runtime.tmp.generateLadiSaleProduct(!0), LadiPageShopping.push(function() {
                        i.createCartData()
                    }), i.loadDataset(null, null, null, null, null, !0, t), E.forEach(function(e) {
                        var a = i.runtime.eventData[e],
                            n = LadiPageApp[a.type + i.const.APP_RUNTIME_PREFIX];
                        isEmptyLadiPage(n) ? (function(t, e, a, n, o, r) {
                            var l = document.getElementById(t);
                            if (!isEmptyLadiPage(l) && (U(t), "section" == e && !isEmptyLadiPage(o) && !isEmptyLadiPage(r))) {
                                var d = l.getElementsByClassName("ladi-section-background")[0];
                                isEmptyLadiPage(d) || (i.runtime.list_scroll_func[t] = function() {
                                    if ((!i.runtime.isDesktop || a == i.const.BACKGROUND_STYLE.video) && (i.runtime.isDesktop || n == i.const.BACKGROUND_STYLE.video)) {
                                        var e = "",
                                            l = t + "_background_video";
                                        o == i.const.VIDEO_TYPE.youtube && (e = '<iframe id="' + l + '" class="ladi-section-background-video" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>', d.innerHTML += e, i.runEventPlayVideo(l, o, r, !0, !0, !1)), o == i.const.VIDEO_TYPE.direct && (e = '<video id="' + l + '" class="ladi-section-background-video" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;"></video>', d.innerHTML += e, i.runEventPlayVideo(l, o, r, !0, !0, !1))
                                    }
                                })
                            }
                        }(e, a.type, a[i.const.DESKTOP + ".option.background-style"], a[i.const.MOBILE + ".option.background-style"], a["option.background_video.video_type"], a["option.background_video.video_value"]), V(null, e, a.type, a), function(t, e, a) {
                            i.runtime.list_loaded_func.push(function() {
                                var n = 0;
                                if (-1 != ["headline", "paragraph", "list_paragraph"].indexOf(e) && (n = 1e3), !isArrayLadiPage(a)) {
                                    var o = i.copy(a);
                                    a = [], isObjectLadiPage(o) && (o.action_type = i.const.ACTION_TYPE.action, a.push(o))
                                }
                                i.runTimeout(function() {
                                    a.forEach(function(e) {
                                        if (e.action_type == i.const.ACTION_TYPE.action && e.type == i.const.DATA_ACTION_TYPE.collapse && !isEmptyLadiPage(e.action) && (isNullLadiPage(e.collapse_start_is_show) || !e.collapse_start_is_show)) {
                                            window.ladi(e.action).collapse(!1);
                                            for (var a = document.querySelectorAll("#" + t + " > .ladi-frame > .ladi-element.ladi-accordion-shape"), n = 0; n < a.length; n++) {
                                                var o = i.getSource2ndClick(a[n].id);
                                                isEmptyLadiPage(o) || window.ladi(a[n].id, a[n]).set_value_2nd(o)
                                            }
                                        }
                                    })
                                }, n)
                            })
                        }(e, a.type, a["option.data_event"] || a["option.data_action"]), Y(null, e, a.type, a["option.data_event"] || a["option.data_hover"]), function(t, e, a, n, o, r, l) {
                            if ("video" == e && !isEmptyLadiPage(a)) {
                                var d = document.getElementById(t);
                                if (!isEmptyLadiPage(d)) {
                                    var s = function() {
                                            var e = i.runtime.eventData[t];
                                            isObjectLadiPage(e) && (n = e["option.video_type"], a = e["option.video_value"], o = e["option.video_control"])
                                        },
                                        c = i.runtime.isDesktop && r || !i.runtime.isDesktop && l;
                                    if (c) {
                                        var u = function() {
                                                s(), i.playVideo(t, n, a, o, c)
                                            },
                                            p = i.findAncestor(d, "ladi-popup");
                                        isEmptyLadiPage(p) ? i.runtime.list_scroll_func[t] = u : (p = i.findAncestor(p, "ladi-element"), isArrayLadiPage(i.runtime.list_show_popup_func[p.id]) || (i.runtime.list_show_popup_func[p.id] = []), i.runtime.list_show_popup_func[p.id].push(u))
                                    } else {
                                        var m = document.querySelectorAll("#" + t + ".preload").length > 0;
                                        m && i.playVideo(t, n, a, o, !1, m)
                                    }
                                    d.addEventListener("click", function(e) {
                                        e.stopPropagation(), s(), n == i.const.VIDEO_TYPE.direct && "VIDEO" == e.target.tagName || n == i.const.VIDEO_TYPE.youtube && "IFRAME" == e.target.tagName || i.playVideo(t, n, a, o)
                                    })
                                }
                            }
                        }(e, a.type, a["option.video_value"], a["option.video_type"], a["option.video_control"], a[i.const.DESKTOP + ".option.video_autoplay"], a[i.const.MOBILE + ".option.video_autoplay"]), function(t, e, a, n) {
                            "popup" == e && a && ((isEmptyLadiPage(n) || n < 0) && (n = 0), n = n <= 0 ? 1 : n, i.runTimeout(function() {
                                window.ladi(t).show()
                            }, 1e3 * n))
                        }(e, a.type, a["option.show_popup_welcome_page"], a["option.delay_popup_welcome_page"]), j(e, null, a.type, a["option.countdown_type"], a["option.countdown_minute"], a["option.countdown_daily_start"], a["option.countdown_daily_end"], a["option.countdown_endtime"]), H(e, null, a.type, a["option.countdown_item_type"]), function(t, e, a, n) {
                            if ("section" == e) {
                                var o = document.getElementById(t);
                                if (!isEmptyLadiPage(o)) {
                                    var r = o.getElementsByClassName("ladi-section-arrow-down")[0];
                                    A.push(function() {
                                        if (isEmptyLadiPage(r)) {
                                            if (i.runtime.isDesktop) {
                                                if (isEmptyLadiPage(a)) return void o.removeAttribute("data-opacity");
                                                var t = (parseFloatLadiPage(a) || 0) + 50;
                                                if (t > o.clientHeight) return void o.removeAttribute("data-opacity");
                                                o.setAttribute("data-height", o.clientHeight), o.style.setProperty("height", t + "px"), o.classList.add("overflow-hidden")
                                            } else {
                                                if (isEmptyLadiPage(n)) return void o.removeAttribute("data-opacity");
                                                var e = (parseFloatLadiPage(n) || 0) + 50;
                                                if (e > o.clientHeight) return void o.removeAttribute("data-opacity");
                                                o.setAttribute("data-height", o.clientHeight), o.style.setProperty("height", e + "px"), o.classList.add("overflow-hidden")
                                            }(r = document.createElement("div")).className = "ladi-section-arrow-down", o.appendChild(r), o.removeAttribute("data-opacity"), r.addEventListener("click", function(t) {
                                                t.stopPropagation(), o.classList.add("transition-readmore"), r.parentElement.removeChild(r), o.clientHeight != o.getAttribute("data-height") ? o.style.setProperty("height", o.getAttribute("data-height") + "px") : o.style.removeProperty("height"), o.removeAttribute("data-height"), i.runTimeout(function() {
                                                    o.classList.remove("transition-readmore"), o.classList.remove("overflow-hidden"), i.runTimeout(i.removeSticky, 100)
                                                }, 1e3 * parseFloatLadiPage(getComputedStyle(o).transitionDuration))
                                            })
                                        }
                                    })
                                }
                            }
                        }(e, a.type, a[i.const.DESKTOP + ".option.readmore_range"], a[i.const.MOBILE + ".option.readmore_range"]), LadiPageFormData.push(function() {
                            i.runFormItem(e, a.type, a["option.input_type"])
                        }), J(e, null, !1, a.type), i.startAutoScroll(e, a.type, a[i.const.DESKTOP + ".option.auto_scroll"], a[i.const.MOBILE + ".option.auto_scroll"]), LadiPageShopping.push(function() {
                            lt(e, a.type, !0, !1)
                        }), LadiPageShopping.push(function() {
                            ! function(t, e) {
                                if ("form" == e) {
                                    var a = document.getElementById(t);
                                    if (!isEmptyLadiPage(a)) {
                                        var n = a.querySelector('input[name="quantity"]');
                                        if (!isEmptyLadiPage(n)) {
                                            var o = function(e) {
                                                if (!isEmptyLadiPage(e.target.value)) {
                                                    var a = i.runtime.eventData[t];
                                                    if (!isEmptyLadiPage(a) && a["option.is_add_to_cart"]) {
                                                        var n = i.generateVariantProduct(a, !1, null, null, null, null, !0, !0, function() {
                                                            o(e)
                                                        });
                                                        if (!(isEmptyLadiPage(n) || isEmptyLadiPage(n.store_info) || isEmptyLadiPage(n.product))) {
                                                            var r = i.getProductVariantIndex(t, a);
                                                            if (-1 != r) {
                                                                var l = n.product.variants[r].quantity,
                                                                    d = n.product.variants[r].quantity_stock;
                                                                l = isNullLadiPage(d) ? l : d;
                                                                var s = parseInt(e.target.value) || 0,
                                                                    c = 1;
                                                                c = n.product.variants[r].min_buy || c;
                                                                var u = n.product.variants[r].max_buy,
                                                                    p = 0,
                                                                    m = i.runtime.tmp.cart.findIndex(function(t) {
                                                                        return t.product_id == n.product.variants[r].product_id && t.product_variant_id == n.product.variants[r].product_variant_id
                                                                    }); - 1 != m && (p = i.runtime.tmp.cart[m].quantity), c > s + p && (s = c - p), 1 == n.product.variants[r].inventory_checked && s + p > l && (s = l - p), !isEmptyLadiPage(u) && s + p > u && (s = u - p), s = s < 1 ? 1 : s, e.target.setAttribute("min", c), isEmptyLadiPage(u) || e.target.setAttribute("max", u), e.target.value = s
                                                            }
                                                        }
                                                    }
                                                }
                                            };
                                            n.addEventListener("input", o), i.fireEvent(n, "input");
                                            var r = a.querySelectorAll(".button")[0],
                                                l = a.querySelectorAll(".button")[1];
                                            isEmptyLadiPage(r) || isEmptyLadiPage(l) || (r.addEventListener("click", function(t) {
                                                i.removeTimeout(i.runtime.tmp.timeout_button_quantity_cart_id), i.runtime.tmp.timeout_button_quantity_cart_id = i.runTimeout(function() {
                                                    n.value = (parseFloatLadiPage(n.value) || 0) - 1, i.fireEvent(n, "input")
                                                }, 10)
                                            }), l.addEventListener("click", function(t) {
                                                i.removeTimeout(i.runtime.tmp.timeout_button_quantity_cart_id), i.runtime.tmp.timeout_button_quantity_cart_id = i.runTimeout(function() {
                                                    n.value = (parseFloatLadiPage(n.value) || 0) + 1, i.fireEvent(n, "input")
                                                }, 10)
                                            }))
                                        }
                                    }
                                }
                            }(e, a.type)
                        }), function(t, e) {
                            if ("collection" == e) {
                                var a = document.getElementById(t);
                                if (!isEmptyLadiPage(a)) {
                                    var n = i.runtime.eventData[t];
                                    if (!isEmptyLadiPage(n)) {
                                        var o = n["option.collection_setting.type"],
                                            r = a.getElementsByClassName("ladi-collection")[0];
                                        if (o == i.const.COLLECTION_TYPE.carousel) {
                                            r.classList.add("carousel");
                                            var l = document.createElement("div");
                                            l.className = "ladi-collection-arrow ladi-collection-arrow-left opacity-0";
                                            var d = document.createElement("div");
                                            d.className = "ladi-collection-arrow ladi-collection-arrow-right opacity-0", r.appendChild(l), r.appendChild(d), l.addEventListener("click", function(e) {
                                                e.stopPropagation();
                                                var o = parseFloatLadiPage(a.getAttribute("data-page")) || 1;
                                                o = (o -= 1) < 1 ? 1 : o, i.loadCollectionData(t, n, o, !1)
                                            }), d.addEventListener("click", function(e) {
                                                e.stopPropagation();
                                                var o = parseFloatLadiPage(a.getAttribute("data-page")) || 1;
                                                if (o += 1, a.hasAttribute("data-max-page")) {
                                                    var r = parseFloatLadiPage(a.getAttribute("data-max-page")) || 1;
                                                    o = o > r ? r : o
                                                }
                                                i.loadCollectionData(t, n, o, !1)
                                            })
                                        }
                                        if (o == i.const.COLLECTION_TYPE.readmore) {
                                            r.classList.add("readmore");
                                            var s = document.createElement("div");
                                            s.className = "ladi-collection-button-next opacity-0", r.appendChild(s), s.addEventListener("click", function(e) {
                                                e.stopPropagation();
                                                var o = parseFloatLadiPage(a.getAttribute("data-page")) || 1;
                                                if (o += 1, a.hasAttribute("data-max-page")) {
                                                    var r = parseFloatLadiPage(a.getAttribute("data-max-page")) || 1;
                                                    o = o > r ? r : o
                                                }
                                                i.loadCollectionData(t, n, o, !1, !0)
                                            })
                                        }
                                        i.loadCollectionData(t, n, 1, !0)
                                    }
                                }
                            }
                        }(e, a.type), function(t, e, a, n) {
                            if ("survey" == e) {
                                var o = document.getElementById(t);
                                if (!isEmptyLadiPage(o)) {
                                    a && o.setAttribute("data-multiple", !0);
                                    for (var r, l = o.getElementsByClassName("ladi-survey-select-item")[0], d = o.getElementsByClassName("ladi-survey-radio-item"), s = o.getElementsByClassName("ladi-survey-checkbox-item"), c = o.getElementsByClassName("ladi-survey-option"), u = o.querySelector(".ladi-survey-button-next button"), p = [], m = n.mapping_form_name, g = n.mapping_form_id, _ = n.input_name, y = i.findAncestor(o, ["ladi-form", "ladi-element"]), f = i.runtime.eventData[t]["option.data_event"], v = function() {
                                            var e = window.ladi(t).value(),
                                                n = m || "";
                                            g.forEach(function(t) {
                                                var o = document.getElementById(t);
                                                if (!isEmptyLadiPage(o)) {
                                                    for (var r = null; 0 != (r = o.querySelectorAll('.ladi-form-item-survey[data-name="' + n + '"]')).length;) r[0].parentElement.removeChild(r[0]);
                                                    var l = [],
                                                        d = o.querySelectorAll(".ladi-element .ladi-form-item-container [name]"),
                                                        s = null,
                                                        c = 0;
                                                    for (T = 0; T < d.length; T++) {
                                                        d[T].getAttribute("name") == n && (s = i.findAncestor(d[T], "ladi-element"), l.push(s.id));
                                                        var u = parseFloatLadiPage(d[T].getAttribute("tabindex")) || 0;
                                                        u > c && (c = u)
                                                    }
                                                    if (0 == (l = l.unique()).length) {
                                                        c++, (s = document.createElement("div")).className = "ladi-element ladi-hidden ladi-form-item-survey", s.id = i.randomString(10), s.setAttribute("data-name", n);
                                                        var m = "";
                                                        if (m += '<div class="ladi-form-item-container">', m += '   <div class="ladi-form-item-background"></div>', a) {
                                                            m += '   <div class="ladi-form-item ladi-form-checkbox ladi-form-checkbox-vertical">', m += '       <div class="ladi-form-checkbox-box-item">';
                                                            for (var g = 0; g < p.length; g++) m += '       <div class="ladi-form-checkbox-item"><input tabindex="' + c + '" name="' + n + '" type="checkbox" value="' + p[g] + '"><span data-checked="false">' + p[g] + "</span></div>";
                                                            m += "       </div>", m += "   </div>"
                                                        } else m += '   <div class="ladi-form-item">', m += '       <input autocomplete="off" tabindex="' + c + '" name="' + n + '" class="ladi-form-control" type="text">', m += "   </div>";
                                                        m += "</div>", s.innerHTML = m, o.getElementsByClassName("ladi-form")[0].appendChild(s), l.push(s.id)
                                                    }
                                                    for (T = 0; T < l.length; T++) window.ladi(l[T]).value(e)
                                                }
                                            })
                                        }, h = function() {
                                            for (var t = !1, e = 0; e < c.length; e++)
                                                if (c[e].classList.contains("selected")) {
                                                    t = !0;
                                                    break
                                                } return t
                                        }, P = function() {
                                            if (!(!isEmptyLadiPage(l) || d.length > 0 || s.length > 0)) {
                                                for (var t = [], e = 0; e < c.length; e++) c[e].classList.contains("selected") && t.push(c[e].getAttribute("data-value"));
                                                for (var n = null; 0 != (n = y.querySelectorAll('.ladi-form-item-survey[data-name="' + _ + '"]')).length;) n[0].parentElement.removeChild(n[0]);
                                                var r = document.createElement("div");
                                                r.className = "ladi-element ladi-hidden ladi-form-item-survey", r.id = i.randomString(10), r.setAttribute("data-name", _);
                                                var u = o.getAttribute("data-tabindex"),
                                                    m = "";
                                                if (m += '<div class="ladi-form-item-container">', m += '   <div class="ladi-form-item-background"></div>', a) {
                                                    m += '   <div class="ladi-form-item ladi-form-checkbox ladi-form-checkbox-vertical">', m += '       <div class="ladi-form-checkbox-box-item">';
                                                    for (var g = 0; g < p.length; g++) m += '       <div class="ladi-form-checkbox-item"><input tabindex="' + u + '" name="' + _ + '" type="checkbox" value="' + p[g] + '"><span data-checked="false">' + p[g] + "</span></div>";
                                                    m += "       </div>", m += "   </div>"
                                                } else m += '   <div class="ladi-form-item">', m += '       <input autocomplete="off" tabindex="' + u + '" name="' + _ + '" class="ladi-form-control" type="text">', m += "   </div>";
                                                m += "</div>", r.innerHTML = m, y.getElementsByClassName("ladi-form")[0].appendChild(r), window.ladi(r.id).value(a ? t : t[0])
                                            }
                                        }, L = function() {
                                            h() && M(o, f, {
                                                action_type: i.const.ACTION_TYPE.complete
                                            }), v()
                                        }, E = function(e) {
                                            i.tapEventListener(e, function(n) {
                                                if (n.stopPropagation(), a) e.classList.contains("selected") ? e.classList.remove("selected") : e.classList.add("selected");
                                                else
                                                    for (var o = e.parentElement.getElementsByClassName("ladi-survey-option"), r = 0; r < o.length; r++) o[r] === e ? o[r].classList.add("selected") : o[r].classList.remove("selected");
                                                isEmptyLadiPage(y) ? (b(), isEmptyLadiPage(u) && L()) : P(), i.runFormulaData(t)
                                            })
                                        }, A = function(e) {
                                            var a = e.getElementsByTagName("input")[0],
                                                n = e.getElementsByTagName("span")[0];
                                            isEmptyLadiPage(a) || (a.addEventListener("change", function(e) {
                                                isEmptyLadiPage(n) || n.setAttribute("data-checked", e.target.checked), i.runFormulaData(t);
                                                var a = i.findAncestor(e.target, "ladi-form-checkbox-item");
                                                i.runFormItemOtherChange(a)
                                            }), isEmptyLadiPage(n) || n.addEventListener("click", function(t) {
                                                t.stopPropagation(), a.click()
                                            }))
                                        }, b = function() {
                                            isEmptyLadiPage(u) || (h() ? u.parentElement.classList.remove("no-select") : u.parentElement.classList.add("no-select"))
                                        }, T = 0; T < c.length; T++) p.push(c[T].getAttribute("data-value")), E(c[T]);
                                    for (isEmptyLadiPage(l) || l.addEventListener("change", function(e) {
                                            e.target.setAttribute("data-selected", e.target.value), i.runFormulaData(t)
                                        }), T = 0; T < d.length; T++) p.push(d[T].getElementsByTagName("input")[0].value), A(d[T]);
                                    for (i.runFormItemOtherChange(d[0]), T = 0; T < s.length; T++) p.push(s[T].getElementsByTagName("input")[0].value), r = s[T], A(r);
                                    if (i.runFormItemOtherChange(s[0]), isEmptyLadiPage(y)) {
                                        if (!isArrayLadiPage(f)) {
                                            var w = i.copy(n);
                                            if (f = [], isObjectLadiPage(w) && !isEmptyLadiPage(w.value)) {
                                                if (w.type != i.const.DATA_ACTION_TYPE.section && w.type != i.const.DATA_ACTION_TYPE.popup || f.push({
                                                        action_type: i.const.ACTION_TYPE.complete,
                                                        type: w.type,
                                                        action: w.value
                                                    }), w.type == i.const.DATA_ACTION_TYPE.section && w.is_hide_parent || w.type == i.const.DATA_ACTION_TYPE.popup) {
                                                    var S = i.findAncestor(o, "ladi-popup"),
                                                        O = i.findAncestor(o, "ladi-section"),
                                                        C = null;
                                                    isEmptyLadiPage(S) ? isEmptyLadiPage(O) || (C = O.id) : C = (S = i.findAncestor(S, "ladi-element")).id, isEmptyLadiPage(C) || f.push({
                                                        action_type: i.const.ACTION_TYPE.complete,
                                                        type: i.const.DATA_ACTION_TYPE.hidden_show,
                                                        hidden_ids: [C],
                                                        show_ids: []
                                                    })
                                                }
                                                w.type == i.const.DATA_ACTION_TYPE.change_index && f.push({
                                                    action_type: i.const.ACTION_TYPE.complete,
                                                    type: w.type,
                                                    action: w.value,
                                                    change_index_type: w.change_index_type,
                                                    change_index_number: w.change_index_number
                                                })
                                            }
                                        }
                                        isEmptyLadiPage(u) || u.addEventListener("click", function(t) {
                                            t.stopPropagation(), L()
                                        }), b(), i.runtime.list_loaded_func.push(v)
                                    } else P()
                                }
                            }
                        }(e, a.type, a["option.survey_setting.is_multiple"], a["option.survey_setting"] || a["option.survey_setting.event"])) : n(a, t).run(e, i.runtime.isDesktop)
                    }), it(Date.now() + 1e3), LadiPageFormData.push(function() {
                        i.runOptionForm(t, y, L)
                    }), LadiPageFormData.push(function() {
                        i.setInputFile()
                    }), LadiPageFormData.push(function() {
                        i.setInputOtp()
                    }), (e = function() {
                        E.forEach(function(t) {
                            var e = i.runtime.eventData[t];
                            if ("countdown" == e.type)
                                for (var a = document.querySelectorAll("#" + t), n = 0; n < a.length; n++) {
                                    var o = a[n],
                                        r = o.getAttribute("data-type"),
                                        l = 0,
                                        d = 0,
                                        s = Date.now();
                                    if (o.hasAttribute("data-date-start") || o.hasAttribute("data-date-end")) l = parseFloatLadiPage(o.getAttribute("data-date-start")) || 0, d = parseFloatLadiPage(o.getAttribute("data-date-end")) || 0;
                                    else {
                                        if (r == i.const.COUNTDOWN_TYPE.countdown) {
                                            var c = parseInt(o.getAttribute("data-minute")) || 0;
                                            if (c <= 0) return;
                                            for (d = i.runtime.timenow; d <= s;) d += 60 * c * 1e3
                                        }
                                        if (r == i.const.COUNTDOWN_TYPE.endtime && (d = parseInt(o.getAttribute("data-endtime")) || 0), r == i.const.COUNTDOWN_TYPE.daily) {
                                            var u = o.getAttribute("data-daily-start"),
                                                p = o.getAttribute("data-daily-end");
                                            if (!isEmptyLadiPage(u) && !isEmptyLadiPage(p)) {
                                                var m = (new Date).toDateString();
                                                l = new Date(m + " " + u).getTime(), d = new Date(m + " " + p).getTime()
                                            }
                                        }
                                        o.setAttribute("data-date-start", l), o.setAttribute("data-date-end", d)
                                    }
                                    if (l > s) return;
                                    var g = d - s;
                                    if (g < 0) {
                                        if (g = 0, "true" == o.getAttribute("data-end")) return;
                                        "true" != o.getAttribute("data-end") && (o.setAttribute("data-end", !0), M(o, e["option.data_event"], {
                                            action_type: i.const.ACTION_TYPE.complete
                                        }), i.runEventTracking(o.id, {
                                            is_form: !1
                                        }))
                                    }
                                    for (var _ = i.getCountdownTime(g), y = o.querySelectorAll("[data-item-type]"), f = 0; f < y.length; f++) y[f].querySelectorAll(".ladi-countdown-text span")[0].textContent = _[y[f].getAttribute("data-item-type")]
                                }
                        })
                    })(), i.runtime.interval_countdown = i.runInterval(e, 1e3), E.forEach(function(t) {
                        var e = document.getElementById(t);
                        isEmptyLadiPage(e) || Z(t, e)
                    }), i.runtime.interval_gallery = i.runInterval($, 300), E.forEach(function(t) {
                        var e = i.runtime.eventData[t];
                        if ("carousel" == e.type) {
                            var a = document.getElementById(t);
                            if (!isEmptyLadiPage(a)) {
                                a.hasAttribute("data-scrolled") || (a.setAttribute("data-scrolled", !1), i.runtime.list_scroll_func[t] = function() {
                                    a.setAttribute("data-scrolled", !0)
                                });
                                var n = e[i.runtime.device + ".option.carousel_setting.autoplay"],
                                    o = e[i.runtime.device + ".option.carousel_setting.autoplay_time"],
                                    r = 0;
                                n && !isEmptyLadiPage(o) && (r = o);
                                var l = function(e) {
                                        e.stopPropagation();
                                        var i = e.target.getAttribute("data-index");
                                        i = parseFloatLadiPage(i) || 0, window.ladi(t).index(i + 1)
                                    },
                                    d = function(e) {
                                        e.stopPropagation(), e = i.getEventCursorData(e), !isEmptyLadiPage(i.runtime.timenext_carousel[t]) && i.runtime.timenext_carousel[t] > Date.now() || e.target.classList.contains("ladi-carousel-arrow") || (i.runtime.timenext_carousel[t] = Date.now() + 864e5, i.runtime.current_element_mouse_down_carousel = t, i.runtime.current_element_mouse_down_carousel_position_x = e.pageX, i.runtime.current_element_mouse_down_carousel_position_y = e.pageY, a.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("transition-duration", "0ms"), a.getElementsByClassName("ladi-carousel-content")[0].setAttribute("data-left", getComputedStyle(a.getElementsByClassName("ladi-carousel-content")[0]).left), a.getElementsByClassName("ladi-carousel-content")[0].setAttribute("data-top", getComputedStyle(a.getElementsByClassName("ladi-carousel-content")[0]).top))
                                    };
                                if (a.getElementsByClassName("ladi-carousel-arrow-left")[0].addEventListener("click", function(e) {
                                        e.stopPropagation(), a.getElementsByClassName("ladi-carousel-content")[0].style.removeProperty("transition-duration"), a.setAttribute("data-is-next", !1), a.setAttribute("data-next-time", Date.now() + 1e3 * r), tt(t, !1)
                                    }), isEmptyLadiPage(e["option.meta_data.version"]) && -((parseFloatLadiPage(e[i.runtime.device + ".option.carousel_crop.width"]) || 0) - a.clientWidth) < 0 && a.getElementsByClassName("ladi-carousel-arrow-right")[0].classList.remove("opacity-0"), e["option.meta_data.version"] == i.const.META_VERSION.two) {
                                    e[i.runtime.device + ".option.carousel_setting.display_type"] == i.const.CAROUSEL_DISPLAY_TYPE.horizontal && -((parseFloatLadiPage(getComputedStyle(a.getElementsByClassName("ladi-carousel-content")[0]).width) || 0) - a.clientWidth) < 0 && (a.getElementsByClassName("ladi-carousel-arrow-left")[0].classList.remove("opacity-0"), a.getElementsByClassName("ladi-carousel-arrow-right")[0].classList.remove("opacity-0")), e[i.runtime.device + ".option.carousel_setting.display_type"] == i.const.CAROUSEL_DISPLAY_TYPE.vertical && -((parseFloatLadiPage(getComputedStyle(a.getElementsByClassName("ladi-carousel-content")[0]).height) || 0) - a.clientHeight) < 0 && (a.getElementsByClassName("ladi-carousel-arrow-left")[0].classList.remove("opacity-0"), a.getElementsByClassName("ladi-carousel-arrow-right")[0].classList.remove("opacity-0"));
                                    for (var s = a.querySelectorAll(".ladi-carousel-indicators-number .item, .ladi-carousel-indicators-circle .item"), c = 0; c < s.length; c++) s[c].setAttribute("data-index", c), s[c].addEventListener("click", l)
                                }
                                a.getElementsByClassName("ladi-carousel-arrow-right")[0].addEventListener("click", function(e) {
                                    e.stopPropagation(), a.getElementsByClassName("ladi-carousel-content")[0].style.removeProperty("transition-duration"), a.setAttribute("data-is-next", !0), a.setAttribute("data-next-time", Date.now() + 1e3 * r), tt(t, !1)
                                }), a.getElementsByClassName("ladi-carousel")[0].addEventListener("mousedown", d), a.getElementsByClassName("ladi-carousel")[0].addEventListener("touchstart", d, i.runtime.scrollEventPassive)
                            }
                        }
                    }), i.runtime.interval_carousel = i.runInterval(function() {
                        E.forEach(function(t) {
                            var e = i.runtime.eventData[t];
                            if ("carousel" == e.type) {
                                var a = document.getElementById(t);
                                if (!isEmptyLadiPage(a) && "true" == a.getAttribute("data-scrolled") && "true" != a.getAttribute("data-stop") && 0 != a.clientWidth && 0 != a.clientHeight) {
                                    var n = e[i.runtime.device + ".option.carousel_setting.autoplay"],
                                        o = e[i.runtime.device + ".option.carousel_setting.autoplay_time"],
                                        r = 0;
                                    if (n && !isEmptyLadiPage(o) && (r = o), r > 0) {
                                        var l = a.getAttribute("data-next-time"),
                                            d = Date.now();
                                        isEmptyLadiPage(l) && (l = d + 1e3 * (r - 1), a.setAttribute("data-next-time", l)), d >= l && (tt(t, !0), a.setAttribute("data-next-time", d + 1e3 * r))
                                    }
                                }
                            }
                        })
                    }, 300), LadiPageShopping.push(ct),
                    function() {
                        for (var t = document.getElementById(i.runtime.backdrop_dropbox_id), e = 0, a = function(e) {
                                e.stopPropagation();
                                var a = i.findAncestor(e.target, "ladi-element"),
                                    n = document.querySelector("#" + i.runtime.builder_section_popup_id + " > .ladi-container > #" + i.runtime.builder_popup_menu_mobile_id + "_" + a.id);
                                if (!isEmptyLadiPage(n)) {
                                    n.setAttribute("data-menu-id", a.id), n.classList.add("popup-menu-mobile");
                                    var o = n.getElementsByClassName("popup-close")[0];
                                    isEmptyLadiPage(o) && ((o = document.createElement("div")).className = "popup-close", o.addEventListener("click", function(e) {
                                        e.stopPropagation(), LadiPageScript.fireEvent(t, "click")
                                    }), n.appendChild(o)), window.ladi(n.id, n).showDropbox(document.body)
                                }
                            }, n = function(e) {
                                e.stopPropagation(), LadiPageScript.fireEvent(t, "click")
                            }, o = function(t) {
                                isObjectLadiPage(i.runtime.tmp.menu_item_event) || (i.runtime.tmp.menu_item_event = {});
                                var a = String(++e);
                                i.runtime.tmp.menu_item_event[a] = t.getAttribute("data-item"), t.setAttribute("data-item", a)
                            }, r = function(t) {
                                t.stopPropagation();
                                var e = null;
                                try {
                                    e = decodeURIComponentLadiPage(i.runtime.tmp.menu_item_event[t.target.getAttribute("data-item")]), e = JSON.parse(e)
                                } catch (t) {}
                                if (isObjectLadiPage(e)) {
                                    e.action_type = i.const.ACTION_TYPE.action;
                                    var a = i.findAncestor(t.target, "ladi-element");
                                    i.runtime.tmp.runDataEventNow(a, [e], {
                                        action_type: i.const.ACTION_TYPE.action
                                    })
                                }
                            }, l = document.querySelectorAll(".ladi-element .ladi-menu.menu-icon-item"), d = 0; d < l.length; d++) l[d].addEventListener("click", a);
                        var s = document.querySelectorAll("#" + i.runtime.builder_section_popup_id + ' > .ladi-container > .ladi-element[id^="' + i.runtime.builder_popup_menu_mobile_id + '"][data-dropbox="true"] .ladi-element .ladi-menu.list-menu-items .ladi-menu-item');
                        for (d = 0; d < s.length; d++) s[d].addEventListener("click", n);
                        for (s = document.querySelectorAll(".ladi-element .ladi-menu.list-menu-items .ladi-menu-item"), d = 0; d < s.length; d++) o(s[d]), s[d].addEventListener("click", r), s[d].origin == window.location.origin && s[d].pathname == window.location.pathname && s[d].classList.add("selected")
                    }(), G(), t && (i.runtime.is_popupx || i.const.TIME_ONPAGE_TRACKING.forEach(function(t) {
                        i.runTimeout(function() {
                            LadiPageQueueCommand.push(function() {
                                return isFunctionLadiPage(window.gtag)
                            }, function() {
                                window.gtag("event", "TimeOnPage_" + t + "_seconds", {
                                    event_category: "LadiPageTimeOnPage",
                                    event_label: window.location.host + window.location.pathname,
                                    non_interaction: !0
                                })
                            }), LadiPageQueueCommand.push(function() {
                                return isFunctionLadiPage(window.fbq)
                            }, function() {
                                window.fbq("trackCustom", "TimeOnPage_" + t + "_seconds")
                            })
                        }, 1e3 * t)
                    })), E.forEach(function(t) {
                        var e = document.getElementById(t);
                        if (!isEmptyLadiPage(e)) {
                            var a = i.runtime.eventData[t],
                                n = a["option.data_tooltip.text"];
                            if (!isEmptyLadiPage(n)) {
                                var o = a["option.data_tooltip.type"] || i.const.TOOLTIP_TYPE.default,
                                    r = a["option.data_tooltip.position"] || i.const.TOOLTIP_POSITION.top_middle,
                                    l = a["option.data_tooltip.size"] || i.const.TOOLTIP_SIZE.medium;
                                e.setAttribute("data-hint", n);
                                var d = "hint";
                                r == i.const.TOOLTIP_POSITION.top_middle && (d += "-top-middle"), r == i.const.TOOLTIP_POSITION.top_left && (d += "-top-left"), r == i.const.TOOLTIP_POSITION.top_right && (d += "-top-right"), r == i.const.TOOLTIP_POSITION.bottom_middle && (d += "-bottom-middle"), r == i.const.TOOLTIP_POSITION.bottom_left && (d += "-bottom-left"), r == i.const.TOOLTIP_POSITION.bottom_right && (d += "-bottom-right"), r == i.const.TOOLTIP_POSITION.left_middle && (d += "-left-middle"), r == i.const.TOOLTIP_POSITION.left_top && (d += "-left-top"), r == i.const.TOOLTIP_POSITION.left_bottom && (d += "-left-bottom"), r == i.const.TOOLTIP_POSITION.right_middle && (d += "-right-middle"), r == i.const.TOOLTIP_POSITION.right_top && (d += "-right-top"), r == i.const.TOOLTIP_POSITION.right_bottom && (d += "-right-bottom"), o == i.const.TOOLTIP_TYPE.info && (d += "-t-info"), o == i.const.TOOLTIP_TYPE.success && (d += "-t-success"), o == i.const.TOOLTIP_TYPE.error && (d += "-t-error"), o == i.const.TOOLTIP_TYPE.notice && (d += "-t-notice"), l == i.const.TOOLTIP_SIZE.small && (d += "-s-small"), l == i.const.TOOLTIP_SIZE.medium && (d += "-s-med"), l == i.const.TOOLTIP_SIZE.big && (d += "-s-big"), d += "-hint-anim-d-short", e.classList.add(d)
                            }
                        }
                    }),
                    function() {
                        for (var t = function(t) {
                                t.stopPropagation();
                                var e = i.findAncestor(t.target, "ladi-search").getElementsByTagName("input")[0].value;
                                e = isEmptyLadiPage(e) ? "" : e;
                                var a = new window.URLSearchParams(window.location.search).get("keyword");
                                if (e != (a = isEmptyLadiPage(a) ? "" : a)) {
                                    var n = "/?keyword=" + (e = encodeURIComponent(e));
                                    window.location.href = n
                                }
                            }, e = document.querySelectorAll(".ladi-search button"), a = 0; a < e.length; a++) e[a].style.setProperty("cursor", "pointer"), e[a].addEventListener("click", t);
                        var n = function(t) {
                                13 == t.keyCode && i.findAncestor(t.target, "ladi-search").getElementsByTagName("button")[0].click()
                            },
                            o = document.querySelectorAll(".ladi-search input");
                        for (a = 0; a < o.length; a++) o[a].addEventListener("keydown", n), o[a].value = isEmptyLadiPage(y.keyword) ? "" : y.keyword
                    }(),
                    function() {
                        var t = 2500,
                            e = 3800,
                            a = 800,
                            n = 50,
                            o = 150,
                            r = 500,
                            l = 1300,
                            d = 600,
                            s = 1500,
                            c = t,
                            u = function(u) {
                                var p = !1;
                                if (i.const.ANIMATED_LIST.forEach(function(t) {
                                        u.classList.contains(t) && (p = !0)
                                    }), p) {
                                    var m = u.getElementsByClassName("ladipage-animated-words-wrapper")[0];
                                    if (!isEmptyLadiPage(m)) {
                                        var g = isEmptyLadiPage(m.getAttribute("data-word")) ? [] : JSON.parse(m.getAttribute("data-word"));
                                        if (0 != g.length) {
                                            var _ = !1,
                                                y = i.randomId(),
                                                f = function(e, a, n, o) {
                                                    if (!_) {
                                                        isEmptyLadiPage(e) || (e.classList.remove("in"), e.classList.add("out"));
                                                        var r = isEmptyLadiPage(e) ? null : e.nextSibling;
                                                        if (isEmptyLadiPage(r) ? n && i.runTimeout(function() {
                                                                E(h(a))
                                                            }, t) : i.runTimeout(function() {
                                                                f(r, a, n, o)
                                                            }, o), isEmptyLadiPage(r) && document.querySelectorAll("html")[0].classList.contains("no-csstransitions")) {
                                                            var l = h(a);
                                                            P(a, l)
                                                        }
                                                    }
                                                },
                                                v = function(e, a, n, o) {
                                                    if (!_) {
                                                        var r = a.parentElement,
                                                            l = r.parentElement;
                                                        l.classList.contains("ladipage-animated-headline") || (l = l.parentElement), isEmptyLadiPage(e) || (e.classList.add("in"), e.classList.remove("out"));
                                                        var d = isEmptyLadiPage(e) ? null : e.nextSibling;
                                                        isEmptyLadiPage(d) ? ((l.classList.contains("rotate-2") || l.classList.contains("rotate-3") || l.classList.contains("scale")) && r.style.setProperty("width", a.clientWidth + "px"), isEmptyLadiPage(i.findAncestor(a, "type")) || i.runTimeout(function() {
                                                            var t = i.findAncestor(a, "ladipage-animated-words-wrapper");
                                                            isEmptyLadiPage(t) || t.classList.add("waiting")
                                                        }, 200), n || i.runTimeout(function() {
                                                            E(a)
                                                        }, t)) : i.runTimeout(function() {
                                                            v(d, a, n, o)
                                                        }, o)
                                                    }
                                                },
                                                h = function(t) {
                                                    if (!_) {
                                                        var e = t.nextSibling;
                                                        return isEmptyLadiPage(e) || e.classList.contains("after") ? t.parentElement.firstChild : e
                                                    }
                                                },
                                                P = function(t, e) {
                                                    _ || (t.classList.remove("is-visible"), t.classList.add("is-hidden"), e.classList.remove("is-hidden"), e.classList.add("is-visible"))
                                                },
                                                L = function(t, e) {
                                                    _ || (isEmptyLadiPage(i.findAncestor(t, "type")) ? isEmptyLadiPage(i.findAncestor(t, "clip")) || (i.findAncestor(t, "ladipage-animated-words-wrapper").style.setProperty("width", t.clientWidth + 5 + "px"), i.runTimeout(function() {
                                                        E(t)
                                                    }, d + s)) : (v(t.querySelectorAll("i")[0], t, !1, e), t.classList.add("is-visible"), t.classList.remove("is-hidden")))
                                                },
                                                E = function(s) {
                                                    if (!_ && !isEmptyLadiPage(s)) {
                                                        var c = h(s);
                                                        if (isEmptyLadiPage(i.findAncestor(s, "type")))
                                                            if (isEmptyLadiPage(i.findAncestor(s, "letters"))) isEmptyLadiPage(i.findAncestor(s, "clip")) ? isEmptyLadiPage(i.findAncestor(s, "loading-bar")) ? (P(s, c), i.runTimeout(function() {
                                                                E(c)
                                                            }, t)) : (i.findAncestor(s, "ladipage-animated-words-wrapper").classList.remove("is-loading"), P(s, c), i.runTimeout(function() {
                                                                E(c)
                                                            }, e), i.runTimeout(function() {
                                                                i.findAncestor(s, "ladipage-animated-words-wrapper").classList.add("is-loading")
                                                            }, a)) : (i.findAncestor(s, "ladipage-animated-words-wrapper").style.setProperty("width", "2px"), i.runTimeout(function() {
                                                                P(s, c), L(c)
                                                            }, d));
                                                            else {
                                                                var u = s.querySelectorAll("i").length >= c.querySelectorAll("i").length;
                                                                f(s.querySelectorAll("i")[0], s, u, n), v(c.querySelectorAll("i")[0], c, u, n)
                                                            }
                                                        else {
                                                            var p = i.findAncestor(s, "ladipage-animated-words-wrapper");
                                                            p.classList.add("selected"), p.classList.remove("waiting"), i.runTimeout(function() {
                                                                p.classList.remove("selected"), s.classList.remove("is-visible"), s.classList.add("is-hidden");
                                                                for (var t = s.querySelectorAll("i"), e = 0; e < t.length; e++) t[e].classList.remove("in"), t[e].classList.add("out")
                                                            }, r), i.runTimeout(function() {
                                                                L(c, o)
                                                            }, l)
                                                        }
                                                    }
                                                },
                                                A = document.createElement(u.tagName);
                                            u.parentElement.insertBefore(A, u.nextSibling), A.outerHTML = u.outerHTML, (A = u.nextSibling).classList.add("ladipage-animated-headline-duplicate"), i.runtime.list_scrolling_exec[y] = function() {
                                                u.parentElement.removeChild(u), A.classList.remove("ladipage-animated-headline-duplicate"), _ = !0, delete i.runtime.list_scrolling_exec[y]
                                            };
                                            var b = m.textContent.trim();
                                            if (m.textContent = "", m.innerHTML = m.innerHTML + '<b class="is-visible">' + b + "</b>", g.forEach(function(t) {
                                                    isEmptyLadiPage(t) ? m.innerHTML = m.innerHTML + "<b>" + b + "</b>" : m.innerHTML = m.innerHTML + "<b>" + t.trim() + "</b>"
                                                }), !isEmptyLadiPage(i.findAncestor(m, "type")) || !isEmptyLadiPage(i.findAncestor(m, "loading-bar")) || !isEmptyLadiPage(i.findAncestor(m, "clip"))) {
                                                m.innerHTML = m.innerHTML + '<div class="after"></div>';
                                                for (var T = getComputedStyle(m).color, w = m.getElementsByClassName("after"), S = 0; S < w.length; S++) w[S].style.setProperty("background-color", T)
                                            }
                                            if (u.classList.contains("type") && m.classList.add("waiting"), (u.classList.contains("type") || u.classList.contains("rotate-2") || u.classList.contains("rotate-3") || u.classList.contains("scale")) && u.classList.add("letters"), function(t) {
                                                    if (!_)
                                                        for (var e = 0; e < t.length; e++) {
                                                            var a = t[e],
                                                                n = a.textContent.trim().split(""),
                                                                o = a.classList.contains("is-visible");
                                                            for (var r in n) {
                                                                " " == n[r] && (n[r] = "&nbsp;");
                                                                var l = i.findAncestor(a, "rotate-2");
                                                                isEmptyLadiPage(l) || (n[r] = "<em>" + n[r] + "</em>"), n[r] = o ? '<i class="in">' + n[r] + "</i>" : "<i>" + n[r] + "</i>"
                                                            }
                                                            var d = n.join("");
                                                            a.innerHTML = d, a.style.setProperty("opacity", 1)
                                                        }
                                                }(document.querySelectorAll(".letters b")), u.classList.contains("loading-bar")) c = e, i.runTimeout(function() {
                                                m.classList.add("is-loading")
                                            }, a);
                                            else if (u.classList.contains("clip")) {
                                                var O = m.clientWidth + 5;
                                                m.style.setProperty("width", O + "px")
                                            }
                                            i.runTimeout(function() {
                                                E(u.getElementsByClassName("is-visible")[0])
                                            }, c)
                                        }
                                    }
                                }
                            },
                            p = function() {
                                for (var t = document.getElementsByClassName("ladipage-animated-headline"), e = [], i = 0; i < t.length; i++) e.push(t[i]);
                                e.forEach(u)
                            };
                        p();
                        var m = i.randomId();
                        i.runtime.list_scrolled_exec[m] = p
                    }(),
                    function() {
                        for (var t = document.querySelectorAll(".ladi-button-group > .ladi-element"), e = function(t) {
                                var e = i.findAncestor(t.target, "ladi-button");
                                (e = isEmptyLadiPage(e) ? t.target : i.findAncestor(e, "ladi-element")).classList.add("selected");
                                var a = i.findAncestor(t.target, "ladi-button-group");
                                if (!isEmptyLadiPage(a))
                                    for (var n = (a = i.findAncestor(a, "ladi-element")).querySelectorAll(".ladi-button-group > .ladi-element"), o = 0; o < n.length; o++) n[o].id != e.id && n[o].classList.remove("selected")
                            }, a = 0; a < t.length; a++) t[a].addEventListener("click", e)
                    }(),
                    function() {
                        for (var t = function(t) {
                                t.stopPropagation(), t = i.getEventCursorData(t);
                                var e = i.findAncestor(t.target, "ladi-element");
                                if (!isEmptyLadiPage(e)) {
                                    i.runtime.current_element_mouse_down_image_compare = e.id, i.runtime.current_element_mouse_down_image_compare_position_x = t.pageX;
                                    var a = e.getElementsByClassName("ladi-image-compare")[0],
                                        n = e.getElementsByClassName("ladi-image-background")[0];
                                    a.setAttribute("data-width", parseFloatLadiPage(getComputedStyle(a).width) || 0), a.setAttribute("data-max-width", parseFloatLadiPage(getComputedStyle(n).width) || 0)
                                }
                            }, e = document.querySelectorAll(".ladi-element .ladi-image .ladi-image-compare-line"), a = 0; a < e.length; a++) e[a].addEventListener("mousedown", t), e[a].addEventListener("touchstart", t, i.runtime.scrollEventPassive)
                    }(),
                    function() {
                        if (0 != document.getElementsByClassName("ladiflow-widget").length) {
                            var t = document.querySelector('script[src^="' + i.const.LADIFLOW_SDK + '"][data-time="' + i.runtime.timenow + '"]');
                            isEmptyLadiPage(t) && i.loadScript(i.const.LADIFLOW_SDK, {
                                "data-time": i.runtime.timenow
                            }, !0)
                        }
                    }(), vt(), et(null, !1), W(),
                    function() {
                        var t = document.getElementById(i.runtime.builder_section_popup_id);
                        if (!isEmptyLadiPage(t)) {
                            var e = document.createElement("div");
                            if (e.className = "popup-close", e.style.setProperty("position", "fixed"), e.style.setProperty("opacity", "0"), t.appendChild(e), "none" == getComputedStyle(e).display) {
                                var a = document.getElementById("style_fix_css");
                                if (isEmptyLadiPage(a)) {
                                    (a = document.createElement("style")).id = "style_fix_css", a.type = "text/css", a.innerHTML = "#SECTION_POPUP .popup-close {display: initial;}";
                                    var n = document.getElementById("style_ladi");
                                    isEmptyLadiPage(n) ? document.head.appendChild(a) : n.parentNode.insertBefore(a, n.nextElementSibling)
                                }
                            }
                            e.parentElement.removeChild(e)
                        }
                    }(),
                    function() {
                        document.addEventListener("mouseleave", i.runEventMouseLeave), document.addEventListener("mousedown", i.runEventMouseDown), document.addEventListener("touchstart", i.runEventMouseDown, i.runtime.scrollEventPassive), document.addEventListener("mousemove", i.runEventMouseMove), document.addEventListener("touchmove", i.runEventMouseMove, {
                            passive: !1
                        }), document.addEventListener("mouseup", i.runEventMouseUp), document.addEventListener("touchend", i.runEventMouseUp);
                        var t = window;
                        isObjectLadiPage(i.runtime.story_page) && (t = document.getElementsByClassName("ladi-wraper")[0]), t.addEventListener("scroll", i.runEventScroll, i.runtime.scrollEventPassive), window.addEventListener("resize", i.runEventResize), window.addEventListener("orientationchange", i.runEventOrientationChange);
                        var e = document.getElementById(i.runtime.backdrop_popup_id);
                        isEmptyLadiPage(e) || e.addEventListener("click", i.runEventBackdropPopupClick);
                        var a = document.getElementById(i.runtime.backdrop_dropbox_id);
                        isEmptyLadiPage(a) || a.addEventListener("click", i.runEventBackdropDropboxClick)
                    }(), i.reloadLazyload(!0), z(), i.setDataReplaceStart(), i.resetViewport(), i.runConversionApi(), i.runStoryPage(), i.runThankyouPage(), i.runGlobalTrackingScript(), i.runtime.list_loaded_func = i.runtime.list_loaded_func.concat(A), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? i.documentLoaded() : document.addEventListener("DOMContentLoaded", i.documentLoaded)
            };
        i.runtime.tmp.runDataEventNow = M, i.runtime.tmp.generateLadiSaleProduct = function(t, e, a) {
            var n = function() {
                    E.forEach(function(i) {
                        st(i, t, e, null, null, !1, a)
                    })
                },
                o = function(t) {
                    if (t && isEmptyLadiPage(a)) n();
                    else {
                        var e = a.target,
                            r = i.findAncestor(e, "ladi-element");
                        if (!isEmptyLadiPage(r)) {
                            var l = i.findAncestor(r, "ladi-form");
                            if (!isEmptyLadiPage(l)) {
                                var d = i.findAncestor(l, "ladi-element");
                                if (!isEmptyLadiPage(d)) {
                                    var s = i.runtime.eventData[d.id];
                                    if (!isEmptyLadiPage(s)) {
                                        var c = s["option.product_id"];
                                        if (!isEmptyLadiPage(c)) {
                                            var u = i.generateVariantProduct(s, !1, null, null, null, null, !0, !0, function(t) {
                                                o(!1)
                                            });
                                            if (isObjectLadiPage(u) && isObjectLadiPage(u.store_info) && isObjectLadiPage(u.product)) {
                                                var p = i.getProductVariantIndex(d.id, s),
                                                    m = document.querySelectorAll('[data-variant="true"]');
                                                if (-1 != p)
                                                    for (var g = 0; g < m.length; g++)
                                                        if (m[g].id != r.id && isEmptyLadiPage(i.findAncestor(m[g], "ladi-collection"))) {
                                                            var _ = i.runtime.eventData[m[g].id];
                                                            if (!isEmptyLadiPage(_)) {
                                                                var y = i.findAncestor(m[g], "ladi-form");
                                                                if (!isEmptyLadiPage(y)) {
                                                                    var f = i.findAncestor(y, "ladi-element");
                                                                    if (!isEmptyLadiPage(f)) {
                                                                        var v = i.runtime.eventData[f.id];
                                                                        if (!isEmptyLadiPage(v) && !isEmptyLadiPage(v["option.product_variant_id"])) continue
                                                                    }
                                                                    var h = null,
                                                                        P = null,
                                                                        L = null,
                                                                        E = 0;
                                                                    if (_["option.product_variant_type"] == i.const.PRODUCT_VARIANT_TYPE.combobox) {
                                                                        if (!isArrayLadiPage(u.product.variants)) continue;
                                                                        if (P = u.product.variants[p], isStringLadiPage(P.option_ids))
                                                                            for (L = P.option_ids.split("/"), E = 0; E < L.length; E++) h = document.querySelector("#" + m[g].id + ' .ladi-form-item select[data-product-option-id="' + L[E] + '"]'), isEmptyLadiPage(h) || h.getAttribute("data-store-id") != u.store_info.id || h.getAttribute("data-product-id") != P.product_id || (h.value = P["option" + (E + 1)])
                                                                    }
                                                                    if (_["option.product_variant_type"] == i.const.PRODUCT_VARIANT_TYPE.label) {
                                                                        if (!isArrayLadiPage(u.product.variants)) continue;
                                                                        if (P = u.product.variants[p], isStringLadiPage(P.option_ids))
                                                                            for (L = P.option_ids.split("/"), E = 0; E < L.length; E++) h = document.querySelector("#" + m[g].id + ' .ladi-form-label-container[data-product-option-id="' + L[E] + '"]'), isEmptyLadiPage(h) || h.getAttribute("data-store-id") != u.store_info.id || h.getAttribute("data-product-id") != P.product_id || i.runtime.tmp.updateLabelValue(h, P["option" + (E + 1)])
                                                                    }
                                                                    if (_["option.product_variant_type"] == i.const.PRODUCT_VARIANT_TYPE.combined) {
                                                                        if (h = m[g].querySelector("select.ladi-form-control"), isEmptyLadiPage(h) || h.getAttribute("data-store-id") != u.store_info.id || h.getAttribute("data-product-id") != u.product.product_id) continue;
                                                                        var A = i.getProductVariantId(r, u);
                                                                        if (!isEmptyLadiPage(A)) {
                                                                            var b = h.querySelector('option[data-product-variant-id="' + A + '"]');
                                                                            isEmptyLadiPage(b) || (p = b.getAttribute("value"))
                                                                        }
                                                                        h.value = p + ""
                                                                    }
                                                                }
                                                            }
                                                        } for (var T = 0; T < m.length; T++) {
                                                    var w = i.findAncestor(m[T], "ladi-form");
                                                    if (!isEmptyLadiPage(w)) {
                                                        var S = w.querySelector('input[name="quantity"]');
                                                        isEmptyLadiPage(S) || i.fireEvent(S, "input")
                                                    }
                                                }
                                                n()
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                };
            o(!0)
        }, i.runtime.tmp.generateCart = function() {
            E.forEach(function(e) {
                ! function(e, a) {
                    if ("cart" == a) {
                        var n = i.runtime.eventData[e];
                        if (!isEmptyLadiPage(n)) {
                            var o = document.getElementById(e);
                            isEmptyLadiPage(o) || i.showParentVisibility(o, function() {
                                var e = parseFloatLadiPage(getComputedStyle(o).height) || 0,
                                    a = parseFloatLadiPage(o.getAttribute("data-height")) || 0;
                                o.hasAttribute("data-height") || (o.setAttribute("data-height", e), a = e);
                                var r = i.generateHtmlCart(n["option.cart_layout"], n["option.message_no_product"], t);
                                o.getElementsByClassName("ladi-cart")[0].innerHTML = r;
                                var l = o.getElementsByClassName("ladi-cart")[0].scrollHeight;
                                if (e != (l = l < a ? a : l)) {
                                    o.style.setProperty("height", l + "px");
                                    var d = i.findAncestor(o.parentElement, "ladi-element");
                                    isEmptyLadiPage(d) && (d = i.findAncestor(o.parentElement, "ladi-section")), i.updateHeightElement(!0, o, d, e, l)
                                }
                            })
                        }
                    }
                }(e, i.runtime.eventData[e].type)
            })
        }, i.runtime.tmp.runButtonSectionClose = U, i.runtime.tmp.runOptionAction = V, i.runtime.tmp.runOptionHover = Y, i.runtime.tmp.runElementClickSelected = et, i.runtime.tmp.runTrackingAnalytics = B, i.runtime.tmp.runLadiSaleProductKey = st, i.runtime.tmp.eventClickGalleryControlItem = Q, i.runtime.tmp.runGallery = J, i.runtime.tmp.setGalleryStart = Z, i.runtime.tmp.updateImageGalleryProduct = dt, i.runtime.tmp.runOptionCountdown = j, i.runtime.tmp.runOptionCountdownItem = H, i.runtime.tmp.getOptionLabelValue = at, i.runtime.tmp.updateLabelValue = nt, i.runtime.tmp.getLabelValue = ot, i.runtime.tmp.clickLabelProductChangeCallback = rt, i.runtime.tmp.fireEventLabelChange = function(t) {
            var e = t.querySelector(".ladi-form-label-item.selected");
            isEmptyLadiPage(e) || i.fireEvent(e, "click", {
                is_fire_event: !0
            })
        }, i.runtime.tmp.showPopupX = _t, i.runtime.tmp.runActionPopupX = ut, i.runtime.is_popupx ? (i.runtime.tmp.popupx_iframe_id = i.randomId(), ut({
            ladipage_id: i.runtime.ladipage_id,
            action: {
                type: "set_iframe_loaded"
            }
        }), window.addEventListener("message", function(t) {
            try {
                var e = JSON.parse(t.data);
                if ("POPUPX" != e.type) return;
                e.iframe_id == i.runtime.tmp.popupx_iframe_id && e.action.value.forEach(function(t) {
                    ! function(t, e) {
                        var a = null,
                            n = null;
                        if ("callback_request_with_option" == t && isFunctionLadiPage(i.runtime.tmp["request_callback_id_" + e.callback_id]) && i.runtime.tmp["request_callback_id_" + e.callback_id](e.responseText, e.status, e.httpRequest, e.url), "set_style_device" == t) {
                            if (ft(e.is_desktop), n = document.getElementById(i.runtime.tmp.popupx_current_element_id), isEmptyLadiPage(n)) return;
                            "none" != getComputedStyle(n).display && (i.runtime.tmp.popupx_is_inline ? yt(i.runtime.tmp.popupx_current_element_id, !1) : _t(i.runtime.tmp.popupx_current_element_id, !1))
                        }
                        if ("set_iframe_info" == t) {
                            isEmptyLadiPage(T) && (T = e.ladi_client_id || i.randomId(), window.ladi("LADI_CLIENT_ID").set_cookie(T, 365)), i.runtime.tmp.popupx_is_desktop = e.is_desktop, i.runtime.isDesktop = e.is_desktop, i.runtime.device = i.runtime.isDesktop ? i.const.DESKTOP : i.const.MOBILE, i.runtime.tmp.popupx_origin_store_id = e.origin_store_id, i.runtime.tmp.popupx_origin_referer = e.origin_referer, i.runtime.tmp.popupx_origin_domain = e.origin_domain, i.runtime.tmp.popupx_origin_url = e.origin_url, i.runtime.tmp.popupx_is_inline = e.is_inline, ft(e.is_desktop);
                            var o = "#" + i.runtime.builder_section_popup_id + " .ladi-container {width: 100% !important;}";
                            i.runtime.tmp.popupx_is_inline && (o += ".ladi-section > .ladi-section-close {display: none !important;}"), i.createStyleElement("style_popup_container", o), i.runtime.has_popupx = !0, ht()
                        }
                        "hide_popupx" == t && (a = i.runtime.eventData[e], n = document.getElementById(e), isObjectLadiPage(a) && !isEmptyLadiPage(n) && window.ladi(e).hide()), "show_popupx" == t && _t(e, !0), "show_popupx_inline_iframe" == t && yt(e, !0), "show_message_callback" == t && (isFunctionLadiPage(i.runtime.tmp.popupx_show_message_callback) && i.runtime.tmp.popupx_show_message_callback(), delete i.runtime.tmp.popupx_show_message_callback)
                    }(e.action.type, t)
                })
            } catch (t) {}
        })) : ht(), i.runtime.isRun = !0, isFunctionLadiPage(e) && e()
    } else i.loadHtmlGlobal(t, e)
}, LadiPageScript.const.API_FORM_DATA = "https://api1.ldpform.com/sendform", LadiPageScript.const.API_FORM_DATA_LIST = ["https://api1.ldpform.com/sendform", "https://api2.ldpform.com/sendform", "https://api1.ldpform.net/sendform", "https://api2.ldpform.net/sendform"], LadiPageScript.const.API_FORM_DATA_TIMEOUT = 5e3, LadiPageScript.const.API_ANALYTICS_EVENT = "https://a.ladipage.com/event", LadiPageScript.const.API_ACCESS_KEY_LOGIN = "https://api.ladipage.com/2.0/access-key-login", LadiPageScript.const.API_COLLECTION_PRODUCT = "https://api.checkout.ladisales.com/1.0/product-list", LadiPageScript.const.API_SHOW_PRODUCT = "https://api.checkout.ladisales.com/1.0/product-detail", LadiPageScript.const.API_LADISALE_COLLECTION_PRODUCT = "https://api.sales.ldpform.net/2.0/public/collections/products", LadiPageScript.const.API_LADISALE_SHOW_PRODUCT = "https://api.sales.ldpform.net/2.0/public/product/show", LadiPageScript.const.API_LADISALE_ADD = "https://api.sales.ldpform.net/2.0/cart/add", LadiPageScript.const.API_LADISALE_UPDATE = "https://api.sales.ldpform.net/2.0/cart/update", LadiPageScript.const.API_LADISALE_SHOW = "https://api.sales.ldpform.net/2.0/cart/show", LadiPageScript.const.API_LADISALE_GET_SHIPPING = "https://api.sales.ldpform.net/2.0/checkout/{0}/get-shipping", LadiPageScript.const.API_LADISALE_VALIDATE_DISCOUNT = "https://api.sales.ldpform.net/2.0/checkout/{0}/validate-discount", LadiPageScript.const.API_LADISALE_PROMOTION = "https://api.checkout.ladisales.com/1.0/checkout/get-promotion", LadiPageScript.const.API_LADISALE_CHECKOUT_CREATE = "https://api.checkout.ladisales.com/1.0/checkout/create", LadiPageScript.const.API_FILE_UPLOAD = "https://api.files.ladicdn.com/2.0/ladipage-upload-file", LadiPageScript.const.API_DATASET_DATA = "https://g.ladicdn.com/dataset/{0}.json?id={1}", LadiPageScript.const.API_DATASET_BLOG = "https://g.ladicdn.com/blog-", LadiPageScript.const.API_SECTION_GLOBAL_HTML = "https://g.ladicdn.com/section/{0}-{1}.html", LadiPageScript.const.LADIFLOW_SDK = "https://w.ladicdn.com/ladiflow/sdk.js?v=1.0", LadiPageScript.const.LADISALES_SDK = "https://w.ladicdn.com/ladisales/sdk/sdk.js?v=1.1", LadiPageScript.const.CDN_LIBRARY_JS_URL = "https://w.ladicdn.com/v2/source/", LadiPageScript.const.CDN_LIBRARY_CSS_URL = "https://w.ladicdn.com/v2/source/";
var lightbox_run = function(t, e, i, a, n, o, r, l) {
        var d = document.getElementById(LadiPageScript.runtime.lightbox_screen_id);
        if (!isEmptyLadiPage(d)) {
            var s = function() {
                isEmptyLadiPage(window.$rootScope) || !isFunctionLadiPage(window.$rootScope.hideBuilderLoadingBlur) ? LadiPageScript.hideLoadingBlur() : window.$rootScope.hideBuilderLoadingBlur()
            };
            l || (isEmptyLadiPage(window.$rootScope) || !isFunctionLadiPage(window.$rootScope.showBuilderLoadingBlur) ? LadiPageScript.showLoadingBlur() : window.$rootScope.showBuilderLoadingBlur());
            var c = JSON.stringify({
                    html: t,
                    url: e,
                    is_video: i,
                    video_type: o,
                    video_value: r
                }),
                u = Object.keys(LadiPageScript.runtime.list_lightbox_id); - 1 == u.indexOf(c) && (LadiPageScript.runtime.list_lightbox_id[c] = u.length + 1);
            var p = LadiPageScript.runtime.list_lightbox_id[c];
            n = n + "_" + p;
            var m = document.getElementById(n),
                g = !1;
            isEmptyLadiPage(m) ? (m = document.createElement("div"), d.appendChild(m), m.outerHTML = t, m = d.lastChild, g = !0) : i && LadiPageScript.runEventReplayVideo(n, o, !0);
            var _ = document.createElement("div");
            _.className = "lightbox-close", _.setAttribute("data-opacity", 0), d.appendChild(_), m.setAttribute("id", n), m.setAttribute("data-opacity", 0), m.classList.remove("lightbox-hidden");
            var y = function() {
                    if (m = document.getElementById(n), !isEmptyLadiPage(m)) {
                        if ("IFRAME" == m.tagName) {
                            var t = parseFloatLadiPage(getComputedStyle(m).width) || 0,
                                e = parseFloatLadiPage(getComputedStyle(m).height) || 0;
                            if (t > 0 || e > 0) {
                                var i = .8 * document.body.clientWidth,
                                    a = .8 * LadiPageScript.getHeightDevice(),
                                    o = i,
                                    r = e / t * o;
                                r > a && (o = (r = a) * (t / e)), m.style.setProperty("width", (parseFloatLadiPage(o) || 0) + "px"), m.style.setProperty("height", (parseFloatLadiPage(r) || 0) + "px")
                            }
                        }
                        if (_ = d.getElementsByClassName("lightbox-close")[0], !isEmptyLadiPage(_)) {
                            var l = LadiPageScript.getElementBoundingClientRect(m),
                                s = 10,
                                c = 10;
                            l.x - 5 - _.clientWidth > c && (c = l.x - 5 - _.clientWidth), l.y - 5 - _.clientHeight > s && (s = l.y - 5 - _.clientHeight), c += LadiPageScript.runtime.widthScrollBar, s -= 6, c -= 6, _.style.setProperty("right", c + "px"), _.style.setProperty("top", s + "px")
                        }
                        var u = document.getElementById(m.id + "_button_unmute");
                        isEmptyLadiPage(u) || (u.style.setProperty("width", getComputedStyle(m).width), u.style.setProperty("height", getComputedStyle(m).height))
                    }
                },
                f = function() {
                    LadiPageScript.runTimeout(function() {
                        s(), m = document.getElementById(n), _ = d.getElementsByClassName("lightbox-close")[0], y(), isEmptyLadiPage(m) || m.removeAttribute("data-opacity"), isEmptyLadiPage(_) || _.removeAttribute("data-opacity")
                    }, 100)
                };
            _.style.setProperty("top", "-100px"), _.style.setProperty("right", "-100px");
            var v = "load";
            if (i && o == LadiPageScript.const.VIDEO_TYPE.direct && (v = "loadedmetadata"), g && (m.addEventListener(v, f), m.addEventListener("error", f)), i) {
                var h = e;
                o == LadiPageScript.const.VIDEO_TYPE.youtube && (e = null, h = r), g ? LadiPageScript.runEventPlayVideo(n, o, h, !1, !1, !0, !1, l, !1, function(t) {
                    isEmptyLadiPage(t) ? f() : (t.addEventListener(v, f), t.addEventListener("error", f))
                }) : f()
            }
            l || d.style.setProperty("display", "block"), isEmptyLadiPage(e) || (g ? m.src = e : f());
            var P = function() {
                    var t = document.getElementById(LadiPageScript.runtime.backdrop_popup_id);
                    return isEmptyLadiPage(t) || "none" == getComputedStyle(t).display
                },
                L = 0;
            P() ? (L = window.scrollY, LadiPageScript.runtime.tmp.bodyScrollY = L) : L = LadiPageScript.runtime.tmp.bodyScrollY;
            var E = function() {
                s(), d.style.removeProperty("display"), m = document.getElementById(n), isEmptyLadiPage(m) || (a && !i ? m.parentElement.removeChild(m) : (m.classList.add("lightbox-hidden"), i && LadiPageScript.runEventReplayVideo(n, o, !1))), _ = d.getElementsByClassName("lightbox-close")[0], isEmptyLadiPage(_) || _.parentElement.removeChild(_);
                var t = document.getElementById("style_lightbox");
                isEmptyLadiPage(t) || t.parentElement.removeChild(t);
                var e = P();
                e && !isEmptyLadiPage(LadiPageScript.runtime.tmp.bodyScrollY) && window.scrollTo(0, LadiPageScript.runtime.tmp.bodyScrollY), e && (LadiPageScript.runtime.tmp.bodyScrollY = null)
            };
            if (_.addEventListener("click", function(t) {
                    t.stopPropagation(), E()
                }), !l) {
                var A = "body {";
                A += "position: fixed !important;", A += "width: 100% !important;", A += "top: -" + L + "px !important;", A += "}", LadiPageScript.createStyleElement("style_lightbox", A)
            }
            isEmptyLadiPage(d.getAttribute("data-load-event")) && (d.setAttribute("data-load-event", !0), d.addEventListener("click", function(t) {
                t.stopPropagation(), t.target.id == d.id && (_ = d.getElementsByClassName("lightbox-close")[0], isEmptyLadiPage(_) || _.click())
            }), window.addEventListener("resize", y)), l && E()
        }
    },
    lightbox_iframe = function(t, e, i, a, n, o) {
        if (!isEmptyLadiPage(t)) {
            var r = "margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; max-width: 80%; max-height: 80%;",
                l = '<iframe id="' + (i = i || "lightbox_iframe") + '" class="lightbox-item" style="' + r + '" frameborder="0" allowfullscreen></iframe>',
                d = t,
                s = LadiPageScript.createTmpElement("iframe", d, null, !0);
            isEmptyLadiPage(s) || "IFRAME" != s.tagName || (d = s.src, i = s.id || i, s.removeAttribute("src"), s.setAttribute("style", r), s.classList.add("lightbox-item"), l = s.outerHTML), lightbox_run(l, d, e, !0, i, a, n, o)
        }
    },
    lightbox_image = function(t) {
        if (!isEmptyLadiPage(t)) {
            lightbox_run('<img class="lightbox-item" style="margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; object-fit: scale-down; max-width: 80%; max-height: 80%;" />', t, !1, !1, "lightbox_image")
        }
    },
    lightbox_video = function(t, e, i) {
        if (!isEmptyLadiPage(t) && !isEmptyLadiPage(e)) {
            LadiPageScript.pauseAllVideo();
            var a = "lightbox_player";
            if (e == LadiPageScript.const.VIDEO_TYPE.youtube && lightbox_iframe('<iframe id="' + a + '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>', !0, a, e, t, i), e == LadiPageScript.const.VIDEO_TYPE.direct) {
                lightbox_run('<video class="lightbox-item" id="lightbox_player" style="margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; max-width: 80%; max-height: 80%; object-fit: cover;"></video>', t, !0, !1, a, e, null, i)
            }
        }
    },
    language_set = function(t, e) {
        isObjectLadiPage(t) && (e ? LadiPageScript.const.LANG = t : LadiPageScript.runtime.tmp.lang_loaded ? (t = JSON.stringify(t), t = LadiPageScript.convertReplacePrefixStr(t), t = JSON.parse(t), Object.keys(t).forEach(function(e) {
            LadiPageScript.const.LANG[e] = t[e]
        })) : LadiPageScript.runTimeout(function() {
            language_set(t, e)
        }, 100))
    },
    LadiPageLibraryV2 = LadiPageLibraryV2 || function() {};
LadiPageLibraryV2.prototype.encode_thankyou_url = function() {
    if (!isEmptyLadiPage(this.id)) try {
        var t = this.id,
            e = [LadiPageScript.runtime.replacePrefixStart, LadiPageScript.runtime.replacePrefixEnd, LadiPageScript.runtime.replaceNewPrefixStart, LadiPageScript.runtime.replaceNewPrefixEnd],
            i = {};
        e.forEach(function(e) {
            i[e] = LadiPageScript.randomId(), t = t.replaceAll(e, i[e])
        });
        var a = new URL(t);
        if ("m.me" == a.hostname && a.searchParams.has("ref")) {
            var n = a.searchParams.get("ref");
            return a.searchParams.set("ref", n), t = a.href, e.forEach(function(e) {
                t = t.replaceAll(i[e], e)
            }), t
        }
    } catch (t) {}
    return this.id
}, LadiPageLibraryV2.prototype.get_url = function(t, e, i) {
    if (!isEmptyLadiPage(this.id)) {
        var a = this.id,
            n = "";
        if (e && isObjectLadiPage(t)) Object.keys(t).forEach(function(e) {
            isEmptyLadiPage(n) || (n += "&");
            var a = t[e];
            i && -1 != ["email", "phone"].indexOf(e) && (a = Base64.encode(a)), isArrayLadiPage(a) && a.length > 1 && (a = JSON.stringify(a)), a = encodeURIComponent(a), n += e + "=" + a
        });
        if (!isEmptyLadiPage(n)) {
            var o = LadiPageScript.createTmpElement("a", "", {
                href: a
            });
            o.search = o.search + (isEmptyLadiPage(o.search) ? "?" : "&") + n, a = o.href
        }
        return a = LadiPageScript.getLinkUTMRedirect(a, null), a = LadiPageScript.convertDataReplaceStr(a, !0, null, !1, t)
    }
}, LadiPageLibraryV2.prototype.open_url = function(t, e) {
    if (!isEmptyLadiPage(this.id))
        if (LadiPageScript.runtime.has_popupx) LadiPageScript.runtime.tmp.runActionPopupX({
            url: this.id,
            target: t,
            nofollow: e,
            action: {
                type: "open_url"
            }
        });
        else {
            var i = this.id,
                a = null;
            e && ((a = LadiPageScript.getElementAHref(i, !1)).setAttribute("rel", "nofollow"), document.body.appendChild(a)), isEmptyLadiPage(t) || "_self" == t.toLowerCase() ? e ? a.click() : window.location.href = i : e ? (a.setAttribute("target", t), a.click()) : window.open(i, t), e && a.parentElement.removeChild(a)
        }
}, LadiPageLibraryV2.prototype.get_cookie = function() {
    if (!isEmptyLadiPage(this.id)) {
        var t = "";
        try {
            for (var e = this.id + "=", i = document.cookie.split(";"), a = 0; a < i.length; a++) {
                for (var n = i[a];
                    " " == n.charAt(0);) n = n.substring(1);
                if (0 == n.indexOf(e)) {
                    t = n.substring(e.length, n.length);
                    break
                }
            }
        } catch (t) {}
        return decodeURIComponentLadiPage(t)
    }
}, LadiPageLibraryV2.prototype.delete_cookie = function(t, e) {
    this.set_cookie(null, -365, t, e, !1)
}, LadiPageLibraryV2.prototype.set_cookie = function(t, e, i, a, n) {
    if (!isEmptyLadiPage(this.id)) try {
        var o = "";
        if (n) o = "expires = 0";
        else {
            var r = new Date;
            !isNullLadiPage(e) && e instanceof Date ? r = e : (e = isEmptyLadiPage(e) ? 365 : e, r.setTime(r.getTime() + 24 * e * 60 * 60 * 1e3)), o = "expires = " + r.toUTCString()
        }
        t = isEmptyLadiPage(t) ? "" : t;
        var l = this.id + " = " + t;
        isEmptyLadiPage(o) || (l += "; " + o), isEmptyLadiPage(a) || (l += "; domain = " + a), i = i || window.location.pathname, LadiPageScript.runtime.isIE || (l += "; path = " + i), "https:" == window.location.protocol && (l += "; SameSite = None; secure"), document.cookie = l
    } catch (t) {}
}, LadiPageLibraryV2.prototype.submit = function() {
    var t = this.doc || document.getElementById(this.id);
    if (!isEmptyLadiPage(t)) {
        var e = t.querySelector('.ladi-form button[type="submit"]');
        isEmptyLadiPage(e) || e.click()
    }
}, LadiPageLibraryV2.prototype.scroll = function(t, e) {
    var i = this.doc || document.getElementById(this.id);
    if (!isEmptyLadiPage(i))
        if (LadiPageScript.runtime.has_popupx) this.show();
        else {
            t && "none" == getComputedStyle(i).display && this.show();
            for (var a = document.querySelectorAll("#" + LadiPageScript.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), n = 0; n < a.length; n++)
                if (a[n].id != this.id && a[n].hasAttribute("data-popup-backdrop") && "none" != getComputedStyle(a[n]).display) {
                    var o = LadiPageScript.findAncestor(i, "ladi-popup");
                    isEmptyLadiPage(o) || (o = LadiPageScript.findAncestor(o, "ladi-element")), (isEmptyLadiPage(o) || o.id != a[n].id) && (LadiPageScript.runRemovePopup(a[n].id, !0), 100)
                } var r = isObjectLadiPage(LadiPageScript.runtime.story_page),
                l = function(t, e, i) {
                    LadiPageScript.removeTimeout(LadiPageScript.runtime.tmp.scroll_timeout_id);
                    var a = function(t, e, i, a) {
                            return (t /= a / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e
                        },
                        n = 0;
                    n = r ? "left" == t ? e.scrollLeft : e.scrollTop : "left" == t ? e.scrollX : e.scrollY;
                    var o = "left" == t ? window.innerWidth : window.innerHeight,
                        l = i - n;
                    if (0 != l) {
                        var d = l < 0 ? -1 * l : l,
                            s = 0,
                            c = 1e3;
                        c = d <= 4 * o ? 750 : c, c = d <= 2 * o ? 525 : c, c = d <= o ? 300 : c, c = r ? 300 : c;
                        var u = "left" == t ? "scrollLeft" : "scrollTop",
                            p = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame,
                            m = null,
                            g = null,
                            _ = function(i) {
                                r ? e[u] = i : "left" == t ? e.scrollTo(i, e.scrollY) : e.scrollTo(e.scrollX, i)
                            };
                        if (p) {
                            var y = Date.now() + c;
                            p(m = function() {
                                s = c - (y - Date.now()), g = a(s, n, l, c), _(g), s < c ? p(m) : _(i)
                            })
                        } else(m = function() {
                            g = a(s += 20, n, l, c), _(g), s < c ? LadiPageScript.runtime.tmp.scroll_timeout_id = LadiPageScript.runTimeout(m, 20) : _(i)
                        })()
                    }
                },
                d = function(t) {
                    var e = document.getElementsByClassName("ladi-wraper")[0],
                        a = LadiPageScript.getElementBoundingClientRect(i).top + (r ? t.scrollTop : t.scrollY);
                    return {
                        scrollTop: a -= parseFloatLadiPage(e.getAttribute("data-scroll-padding-top") || 0) || 0
                    }
                },
                s = null,
                c = null,
                u = null;
            e ? r ? i.scrollIntoView() : (s = d(window), window.scrollTo({
                top: s.scrollTop
            })) : LadiPageScript.runTimeout(function() {
                var t;
                r ? LadiPageScript.runtime.isDesktop || LadiPageScript.runtime.isBrowserDesktop ? i.scrollIntoView({
                    behavior: "smooth"
                }) : (u = document.getElementsByClassName("ladi-wraper")[0], LadiPageScript.runtime.story_page.type == LadiPageScript.const.STORY_PAGE.horizontal && (t = u, c = {
                    scrollLeft: LadiPageScript.getElementBoundingClientRect(i).left + (r ? t.scrollLeft : t.scrollX)
                }, l("left", u, c.scrollLeft)), LadiPageScript.runtime.story_page.type == LadiPageScript.const.STORY_PAGE.vertical && (s = d(u), l("top", u, s.scrollTop))) : (u = window, s = d(u), LadiPageScript.runtime.isDesktop || LadiPageScript.runtime.isBrowserDesktop ? window.scrollTo({
                    top: s.scrollTop,
                    behavior: "smooth"
                }) : l("top", u, s.scrollTop))
            }, 100)
        }
}, LadiPageLibraryV2.prototype.value = function(t, e, i) {
    var a = this.doc || document.getElementById(this.id);
    if (!isEmptyLadiPage(a)) {
        var n = [],
            o = !1,
            r = 0,
            l = isArrayLadiPage(t) ? t : [t],
            d = a.querySelectorAll('.ladi-form-item > [data-is-select-country="true"]');
        if (4 == d.length)
            if (isNullLadiPage(t)) {
                for (r = 0; r < d.length; r++) n.push(d[r].value);
                o = !0
            } else l.forEach(function(t, e) {
                isEmptyLadiPage(d[e]) || (d[e].value = t, LadiPageScript.fireEvent(d[e], "change"))
            });
        else {
            var s = document.querySelectorAll("#" + this.id + " > ." + ["ladi-button .ladi-headline", "ladi-headline", "ladi-paragraph", "ladi-list-paragraph"].join(", #" + this.id + " > .")),
                c = document.querySelectorAll("#" + this.id + " > ." + ["ladi-form-item-container .ladi-form-item > input", "ladi-form-item-container .ladi-form-item > textarea", "ladi-form-item-container .ladi-form-item > select"].join(", #" + this.id + " > .")),
                u = document.querySelectorAll("#" + this.id + " > ." + ["ladi-form-item-container .ladi-form-checkbox-item > input"].join(", #" + this.id + " > .")),
                p = document.querySelectorAll("#" + this.id + " > .ladi-image .ladi-image-background"),
                m = document.querySelectorAll("#" + this.id + " > .ladi-shape"),
                g = document.querySelectorAll("#" + this.id + " > .ladi-video"),
                _ = document.querySelectorAll("#" + this.id + " > .ladi-survey > .ladi-survey-option"),
                y = function(t) {
                    var e = [];
                    return isArrayLadiPage(t) && t.forEach(function(t) {
                        e.push(t.name)
                    }), e = e.length > 0 ? "[" + e.join(", ") + "]" : ""
                };
            for (r = 0; r < s.length; r++)
                if (isNullLadiPage(t)) isObjectLadiPage(i) && i.only_text ? i.text_trim ? n.push(s[r].innerText.trim()) : n.push(s[r].innerText) : n.push(s[r].innerHTML);
                else if (s[r].innerHTML = t, !isEmptyLadiPage(e)) {
                var f = LadiPageScript.findAncestor(s[r], "ladi-element");
                isEmptyLadiPage(f) || f.classList.add(e)
            }
            for (r = 0; r < c.length; r++)
                if (isNullLadiPage(t))
                    if (c[r].classList.contains("ladi-form-control-file")) {
                        var v = c[r].getAttribute("data-path-file") || "[]";
                        v = JSON.parse(v), n.push(v)
                    } else n.push(c[r].value);
            else c[r].classList.contains("ladi-form-control-file") ? (c[r].setAttribute("data-path-file", JSON.stringify(t)), c[r].value = y(t)) : (c[r].value = t, "date" == c[r].getAttribute("data-type") && (isEmptyLadiPage(t) ? c[r].setAttribute("type", "text") : c[r].setAttribute("type", "date")));
            var h = !1;
            for (r = 0; r < u.length; r++) isNullLadiPage(t) ? (u[r].checked && n.push(u[r].value), "checkbox" == u[r].getAttribute("type").toLowerCase() && (o = !0)) : (h = !1, "checkbox" == u[r].getAttribute("type").toLowerCase() && -1 != l.indexOf(u[r].value) && (h = !0), "radio" == u[r].getAttribute("type").toLowerCase() && l.length > 0 && l[0] == u[r].value && (h = !0), h ? u[r].checked || u[r].click() : u[r].checked && u[r].click());
            for (r = 0; r < p.length; r++)
                if (isNullLadiPage(t)) {
                    var P = getComputedStyle(p[r]).backgroundImage;
                    (P = P || "").startsWith('url("') && (P = P.substring('url("'.length)), P.endsWith('")') && (P = P.substring(0, P.length - '")'.length)), n.push(P)
                } else if (isEmptyLadiPage(t)) p[r].style.setProperty("background-image", "none");
            else {
                var L = LadiPageScript.findAncestor(p[r], "ladi-element"),
                    E = LadiPageScript.getOptimizeImage(t, L.clientWidth, L.clientHeight, !0, !1, !1, !0);
                p[r].style.setProperty("background-image", 'url("' + E + '")')
            }
            for (r = 0; r < m.length; r++)
                if (isNullLadiPage(t)) n.push(m[r].innerHTML);
                else try {
                    "svg" == LadiPageScript.createTmpElement("svg", t, null, !0).tagName && (m[r].innerHTML = t)
                } catch (t) {}
            for (r = 0; r < g.length; r++) {
                var A = LadiPageScript.runtime.eventData[this.id];
                if (isNullLadiPage(t)) isObjectLadiPage(A) && n.push({
                    type: A["option.video_type"],
                    value: A["option.video_value"]
                });
                else {
                    A["option.video_value"] = t;
                    var b = g[r].getElementsByClassName("iframe-video-preload")[0],
                        T = null;
                    if (A["option.video_type"] == LadiPageScript.const.VIDEO_TYPE.youtube) {
                        var w = "https://img.youtube.com/vi/" + (T = LadiPageScript.getVideoId(A["option.video_type"], t)) + "/hqdefault.jpg",
                            S = g[r].getElementsByClassName("ladi-video-background")[0];
                        isEmptyLadiPage(S) || S.style.setProperty("background-image", 'url("' + w + '")')
                    }
                    if (isEmptyLadiPage(b)) LadiPageScript.playVideo(this.id, A["option.video_type"], A["option.video_value"], A["option.video_control"]);
                    else {
                        LadiPageScript.pauseAllVideo();
                        var O = !1;
                        if (A["option.video_type"] == LadiPageScript.const.VIDEO_TYPE.youtube) {
                            var C = window.YT.get(b.id);
                            !isEmptyLadiPage(C) && isFunctionLadiPage(C.loadVideoById) && (C.loadVideoById(T, 0), C.seekTo(0), O = !0)
                        }
                        A["option.video_type"] == LadiPageScript.const.VIDEO_TYPE.direct && isFunctionLadiPage(b.play) && (b.src = t, b.currentTime = 0, O = !0), O && LadiPageScript.runEventReplayVideo(b.id, A["option.video_type"], !0)
                    }
                }
            }
            for (r = 0; r < _.length; r++) isNullLadiPage(t) ? (_[r].classList.contains("selected") && n.push(_[r].getAttribute("data-value")), "true" == a.getAttribute("data-multiple") && (o = !0)) : (h = !1, -1 != l.indexOf(_[r].getAttribute("data-value")) && (h = !0), h ? _[r].classList.contains("selected") || _[r].click() : _[r].classList.contains("selected") && _[r].click())
        }
        return isNullLadiPage(t) || isObjectLadiPage(i) && i.running_formula_data || LadiPageScript.runFormulaData(this.id), o ? n : n.length > 0 ? n[0] : null
    }
}, LadiPageLibraryV2.prototype.set_value_2nd = function(t) {
    var e = this.doc || document.getElementById(this.id);
    if (!isEmptyLadiPage(e)) {
        isObjectLadiPage(LadiPageScript.runtime.tmp.value_2nd_source) || (LadiPageScript.runtime.tmp.value_2nd_source = {}), isObjectLadiPage(LadiPageScript.runtime.tmp.value_2nd_click_time) || (LadiPageScript.runtime.tmp.value_2nd_click_time = {});
        var i = e.getAttribute("data-source-id");
        if (isEmptyLadiPage(i) && (i = LadiPageScript.randomString(10), e.setAttribute("data-source-id", i)), e.classList.contains("ladi-accordion-shape")) {
            if ((LadiPageScript.runtime.tmp.value_2nd_click_time[i] || 0) + 250 > Date.now()) return;
            LadiPageScript.runtime.tmp.value_2nd_click_time[i] = Date.now()
        }
        var a = LadiPageScript.runtime.tmp.value_2nd_source[i] || this.value(),
            n = parseFloatLadiPage(e.getAttribute("data-count-click")) || 0;
        n++, LadiPageScript.runtime.tmp.value_2nd_source[i] = a, e.setAttribute("data-count-click", n), n % 2 == 0 ? this.value(a) : this.value(t)
    }
}, LadiPageLibraryV2.prototype.top = function() {
    var t = this.doc || document.getElementById(this.id);
    if (!isEmptyLadiPage(t) && t.classList.contains("ladi-section")) {
        t.parentElement.classList.contains("ladi-section-global") && (t = t.parentElement);
        try {
            var e = t.parentElement.firstChild;
            isEmptyLadiPage(e) || e.id != LadiPageScript.runtime.builder_section_background_id || (e = e.nextElementSibling), t.parentElement.insertBefore(t, e), LadiPageScript.reloadLazyload(!1)
        } catch (t) {}
    }
}, LadiPageLibraryV2.prototype.pause = function() {
    var t = this.doc || document.getElementById(this.id);
    if (!isEmptyLadiPage(t)) {
        var e = LadiPageScript.runtime.eventData[this.id];
        if (!isEmptyLadiPage(e) && "video" == e.type) {
            var i = t.querySelector(".iframe-video-preload:not(.no-pause)");
            isEmptyLadiPage(i) || LadiPageScript.runEventReplayVideo(i.id, i.getAttribute("data-video-type"), !1)
        }
    }
}, LadiPageLibraryV2.prototype.play = function() {
    var t = this.doc || document.getElementById(this.id);
    if (!isEmptyLadiPage(t)) {
        var e = LadiPageScript.runtime.eventData[this.id];
        if (!isEmptyLadiPage(e) && "video" == e.type) {
            var i = e["option.video_type"],
                a = e["option.video_value"],
                n = e["option.video_control"];
            LadiPageScript.playVideo(this.id, i, a, n)
        }
    }
}, LadiPageLibraryV2.prototype.prevSectionTabs = function() {
    var t = document.querySelectorAll('.ladi-section[data-tab-id="' + this.id + '"]');
    if (0 != t.length)
        for (var e = 0; e < t.length; e++)
            if (t[e].classList.contains("selected")) {
                var i = e - 1;
                i = i < 0 ? 0 : i, this.doc = t[i], this.show();
                break
            }
}, LadiPageLibraryV2.prototype.nextSectionTabs = function() {
    var t = document.querySelectorAll('.ladi-section[data-tab-id="' + this.id + '"]');
    if (0 != t.length)
        for (var e = 0; e < t.length; e++)
            if (t[e].classList.contains("selected")) {
                var i = e + 1;
                i = i >= t.length ? t.length - 1 : i, this.doc = t[i], this.show();
                break
            }
}, LadiPageLibraryV2.prototype.indexSectionTabs = function(t) {
    var e = document.querySelectorAll('.ladi-section[data-tab-id="' + this.id + '"]');
    e.length < t || (this.doc = e[t - 1], this.show())
}, LadiPageLibraryV2.prototype.prev = function() {
    var t = this.doc || document.getElementById(this.id);
    if (isEmptyLadiPage(t)) this.prevSectionTabs();
    else {
        var e = LadiPageScript.runtime.eventData[this.id];
        if (!isEmptyLadiPage(e)) {
            var i = null;
            if ("gallery" == e.type && (i = t.querySelector(".ladi-gallery-view-arrow.ladi-gallery-view-arrow-left")), "carousel" == e.type && (i = t.querySelector(".ladi-carousel-arrow.ladi-carousel-arrow-left")), "collection" == e.type && (i = t.querySelector(".ladi-collection-arrow.ladi-collection-arrow-left")), "tabs" == e.type) {
                var a = t.querySelector(".ladi-tabs > .ladi-element.selected[data-index]");
                return isEmptyLadiPage(a) && (a = t.querySelector(".ladi-tabs > .ladi-element")), void(isEmptyLadiPage(a) || isEmptyLadiPage(a.previousElementSibling) || (a.previousElementSibling.classList.add("selected"), a.classList.remove("selected"), LadiPageScript.runAnimationDoc(a.previousElementSibling, null, {
                    is_multiple: !0,
                    element_type: e.type
                }), LadiPageScript.reloadLazyload(!1)))
            }
            isEmptyLadiPage(i) || i.click()
        }
    }
}, LadiPageLibraryV2.prototype.next = function() {
    var t = this.doc || document.getElementById(this.id);
    if (isEmptyLadiPage(t)) this.nextSectionTabs();
    else {
        var e = LadiPageScript.runtime.eventData[this.id];
        if (!isEmptyLadiPage(e)) {
            var i = null;
            if ("gallery" == e.type && (i = t.querySelector(".ladi-gallery-view-arrow.ladi-gallery-view-arrow-right")), "carousel" == e.type && (i = t.querySelector(".ladi-carousel-arrow.ladi-carousel-arrow-right")), "collection" == e.type && (i = t.querySelector(".ladi-collection-arrow.ladi-collection-arrow-right, .ladi-collection-button-next")), "survey" == e.type && (i = t.querySelector(".ladi-survey-button-next button")), "tabs" == e.type) {
                var a = t.querySelector(".ladi-tabs > .ladi-element.selected[data-index]");
                return isEmptyLadiPage(a) && (a = t.querySelector(".ladi-tabs > .ladi-element")), void(isEmptyLadiPage(a) || isEmptyLadiPage(a.nextElementSibling) || (a.nextElementSibling.classList.add("selected"), a.classList.remove("selected"), LadiPageScript.runAnimationDoc(a.nextElementSibling, null, {
                    is_multiple: !0,
                    element_type: e.type
                }), LadiPageScript.reloadLazyload(!1)))
            }
            isEmptyLadiPage(i) || i.click()
        }
    }
}, LadiPageLibraryV2.prototype.index = function(t) {
    var e = this.doc || document.getElementById(this.id);
    if (isEmptyLadiPage(e)) this.indexSectionTabs(t);
    else {
        var i = LadiPageScript.runtime.eventData[this.id];
        if (!isEmptyLadiPage(i)) {
            var a = 0;
            "gallery" != i.type && "carousel" != i.type || (a = parseFloatLadiPage(e.getAttribute("data-current")) || 0, a += 1), "collection" == i.type && (a = parseFloatLadiPage(e.getAttribute("data-page")) || 1);
            var n = null;
            if ("tabs" == i.type && (n = e.querySelector(".ladi-tabs > .ladi-element.selected[data-index]"), isEmptyLadiPage(n) && (n = e.querySelector(".ladi-tabs > .ladi-element")), isEmptyLadiPage(n) || (a = parseFloatLadiPage(n.getAttribute("data-index")) || 1)), isEmptyLadiPage(t)) return a;
            if ("tabs" != i.type) {
                if ("gallery" != i.type && "carousel" != i.type || (t -= 1, a -= 1), t == a) return "carousel" == i.type && e.setAttribute("data-stop", !0), void("gallery" == i.type && e.hasAttribute("data-loaded") && e.setAttribute("data-stop", !0));
                t > a ? ("gallery" != i.type && "carousel" != i.type || e.setAttribute("data-current", t - 1), "collection" == i.type && e.setAttribute("data-page", t - 1), this.next()) : ("gallery" != i.type && "carousel" != i.type || e.setAttribute("data-current", t + 1), "collection" == i.type && e.setAttribute("data-page", t + 1), this.prev())
            } else {
                var o = e.querySelector('.ladi-tabs > .ladi-element[data-index="' + t + '"]');
                isEmptyLadiPage(o) || (isEmptyLadiPage(n) || n.classList.remove("selected"), o.classList.add("selected"), LadiPageScript.runAnimationDoc(o, null, {
                    is_multiple: !0,
                    element_type: i.type
                }), LadiPageScript.reloadLazyload(!1))
            }
        }
    }
}, LadiPageLibraryV2.prototype.readmore = function(t) {
    var e = this,
        i = this.doc || document.getElementById(this.id);
    if (!isEmptyLadiPage(i)) {
        var a = null;
        if (i.classList.contains("ladi-section")) a = i.getElementsByClassName("ladi-section-arrow-down")[0], isEmptyLadiPage(a) || a.click();
        else {
            var n = i.parentElement.querySelector("#" + i.id + " > .ladi-collection.readmore");
            if (!isEmptyLadiPage(n)) {
                var o = i.querySelector(".ladi-collection .ladi-collection-page.last");
                if (!isEmptyLadiPage(o)) return;
                a = i.querySelector(".ladi-collection .ladi-collection-button-next"), isEmptyLadiPage(a) || 0 == getComputedStyle(a).opacity || a.click(), t && i.classList.contains("dataset") && LadiPageScript.runTimeout(function() {
                    e.readmore(t)
                }, 1)
            }
        }
    }
}, LadiPageLibraryV2.prototype.collapse = function(t) {
    var e = this.doc || document.getElementById(this.id);
    if (!isEmptyLadiPage(e) && !e.classList.contains("ladi-section")) {
        var i = e.getElementsByClassName("ladi-popup")[0];
        if (isEmptyLadiPage(i)) {
            var a = isNullLadiPage(t),
                n = document.querySelector(["#" + this.id + " > .ladi-headline", "#" + this.id + " > .ladi-paragraph", "#" + this.id + " > .ladi-list-paragraph"].join(", ")),
                o = isEmptyLadiPage(n),
                r = 0,
                l = 0,
                d = null,
                s = this,
                c = function(t) {
                    var i = LadiPageScript.findAncestor(e.parentElement, "ladi-element");
                    isEmptyLadiPage(i) && (i = LadiPageScript.findAncestor(e.parentElement, "ladi-section")), o || (t = !1), LadiPageScript.updateHeightElement(!0, e, i, r, l, t)
                };
            if ("none" == getComputedStyle(e).display) {
                if (a || t)
                    if (a && o) {
                        if (d = parseFloatLadiPage(e.getAttribute("data-timeout-id")) || null, !isEmptyLadiPage(d)) return;
                        e.classList.remove("height-0"), e.classList.remove("overflow-hidden"), e.classList.remove("transition-collapse"), s.show(), l = parseFloatLadiPage(getComputedStyle(e).height) || 0, e.classList.add("overflow-hidden"), e.classList.add("height-0"), d = LadiPageScript.runTimeout(function() {
                            e.classList.add("transition-collapse"), e.classList.remove("height-0"), d = LadiPageScript.runTimeout(function() {
                                e.classList.remove("overflow-hidden"), e.classList.remove("transition-collapse"), e.removeAttribute("data-timeout-id")
                            }, 1e3 * parseFloatLadiPage(getComputedStyle(e).transitionDuration)), e.setAttribute("data-timeout-id", d), c(!0)
                        }, 100), e.setAttribute("data-timeout-id", d)
                    } else s.show(), l = parseFloatLadiPage(getComputedStyle(e).height) || 0, c()
            } else if (a || !t)
                if (a && o) {
                    if (d = parseFloatLadiPage(e.getAttribute("data-timeout-id")) || null, !isEmptyLadiPage(d)) return;
                    e.classList.remove("height-0"), e.classList.remove("overflow-hidden"), e.classList.remove("transition-collapse"), r = parseFloatLadiPage(getComputedStyle(e).height) || 0, e.classList.add("overflow-hidden"), d = LadiPageScript.runTimeout(function() {
                        e.classList.add("transition-collapse"), e.classList.add("height-0"), d = LadiPageScript.runTimeout(function() {
                            e.classList.remove("overflow-hidden"), e.classList.remove("transition-collapse"), e.classList.remove("height-0"), e.removeAttribute("data-timeout-id"), s.hide()
                        }, 1e3 * parseFloatLadiPage(getComputedStyle(e).transitionDuration)), e.setAttribute("data-timeout-id", d), c(!0)
                    }, 100), e.setAttribute("data-timeout-id", d)
                } else r = parseFloatLadiPage(getComputedStyle(e).height) || 0, s.hide(), c()
        }
    }
}, LadiPageLibraryV2.prototype.hide = function(t) {
    var e = this,
        i = this.doc || document.getElementById(this.id);
    if (!isEmptyLadiPage(i)) {
        var a = !1;
        if (0 == i.getElementsByClassName("ladi-popup").length) {
            if (LadiPageScript.runtime.has_popupx && i.classList.contains("ladi-section") && "none" != getComputedStyle(i).display && (a = !0), i.style.setProperty("display", "none", "important"), LadiPageScript.reloadLazyload(!1), !t && a) {
                LadiPageScript.runtime.tmp.runActionPopupX({
                    id: this.id,
                    dimension: {
                        display: "none"
                    },
                    action: {
                        type: "set_iframe_dimension"
                    }
                })
            }
        } else LadiPageScript.runRemovePopup(this.id, !0, function() {
            for (var t = document.querySelectorAll("#" + LadiPageScript.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), i = 0; i < t.length; i++) t[i].id != e.id && t[i].hasAttribute("data-popup-backdrop") && "none" != getComputedStyle(t[i]).display && LadiPageScript.runRemovePopup(t[i].id, !0)
        });
        e.hideDropbox()
    }
}, LadiPageLibraryV2.prototype.show = function(t, e) {
    var i = this.doc || document.getElementById(this.id);
    if (!isEmptyLadiPage(i)) {
        e = isObjectLadiPage(e) ? e : {};
        var a = 0;
        if (i.classList.contains("ladi-section")) {
            var n = i.getAttribute("data-tab-id");
            if (!isEmptyLadiPage(n)) {
                var o = document.querySelectorAll('.ladi-section[data-tab-id="' + n + '"]');
                for (a = 0; a < o.length; a++) o[a].id == i.id ? o[a].classList.add("selected") : (o[a].classList.remove("selected"), window.ladi(o[a].id).hide())
            }
        }
        var r = this,
            l = function() {
                if (isObjectLadiPage(LadiPageScript.runtime.eventData)) {
                    var t = LadiPageScript.runtime.eventData[r.id];
                    isObjectLadiPage(t) && LadiPageScript.startAutoScroll(r.id, t.type, t[LadiPageScript.const.DESKTOP + ".option.auto_scroll"], t[LadiPageScript.const.MOBILE + ".option.auto_scroll"]);
                    for (var e = i.getElementsByClassName("ladi-element"), a = 0; a < e.length; a++) {
                        var n = LadiPageScript.runtime.eventData[e[a].id];
                        isEmptyLadiPage(n) || LadiPageScript.startAutoScroll(e[a].id, n.type, n[LadiPageScript.const.DESKTOP + ".option.auto_scroll"], n[LadiPageScript.const.MOBILE + ".option.auto_scroll"])
                    }
                }
            },
            d = function() {
                for (var t = i.getElementsByClassName("ladi-element"), e = -1; e < t.length; e++) {
                    var a = -1 == e ? i : t[e];
                    "true" == a.getAttribute("data-sticky") && (a.removeAttribute("data-top"), a.removeAttribute("data-left"), a.removeAttribute("data-sticky"), a.style.removeProperty("top"), a.style.removeProperty("left"), a.style.removeProperty("width"), a.style.removeProperty("position"), a.style.removeProperty("z-index"))
                }
                LadiPageScript.runEventScroll()
            };
        if (t) {
            if (i.getElementsByClassName("ladi-popup").length > 0) {
                var s = !0;
                if (isObjectLadiPage(e) && !isNullLadiPage(e.checkHidePopupOther) && (s = e.checkHidePopupOther), s) {
                    var c = document.querySelectorAll("#" + LadiPageScript.runtime.builder_section_popup_id + " .ladi-container > .ladi-element");
                    for (a = 0; a < c.length; a++) c[a].id != r.id && c[a].hasAttribute("data-popup-backdrop") && "none" != getComputedStyle(c[a]).display && LadiPageScript.runRemovePopup(c[a].id, !0)
                }
                LadiPageScript.runShowPopup(!1, this.id, null, null, !0, {
                    event: e.event
                }), LadiPageScript.removeLazyloadPopup(this.id), l(), d(), LadiPageScript.runResizeSectionBackground()
            } else i.style.setProperty("display", "block", "important"), l(), d(), LadiPageScript.runResizeSectionBackground(), LadiPageScript.reloadLazyload(!1)
        } else {
            if (LadiPageScript.runtime.has_popupx && LadiPageScript.runtime.tmp.showPopupX(i.id, !0, e)) return;
            r.show(!0)
        }
    }
}, LadiPageLibraryV2.prototype.showDropbox = function(t, e, i) {
    var a = this.doc || document.getElementById(this.id);
    if (!(isEmptyLadiPage(a) || "true" != a.getAttribute("data-dropbox") || i && a.getAttribute("data-from-doc-id") == t.id && "true" != a.getAttribute("data-dropbox-backdrop") && "block" == getComputedStyle(a).display)) {
        a.classList.add("opacity-0"), this.show(), a.style.removeProperty("display"), a.style.removeProperty("top"), a.style.removeProperty("left"), a.style.removeProperty("bottom"), a.style.removeProperty("right"), isObjectLadiPage(e) || (e = {}), e.padding = parseFloatLadiPage(e.padding) || 0, e.animation_duration = parseFloatLadiPage(e.animation_duration) || 0, t.insertBefore(a, t.firstChild), a.setAttribute("data-from-doc-id", t.id), a.setAttribute("data-style", a.getAttribute("style") || ""), isEmptyLadiPage(a.getAttribute("data-style")) && a.removeAttribute("data-style"), t.setAttribute("data-style", t.getAttribute("style") || ""), isEmptyLadiPage(t.getAttribute("data-style")) && t.removeAttribute("data-style");
        var n = a.getElementsByClassName("ladi-popup")[0];
        isEmptyLadiPage(n) || (n.setAttribute("data-style", n.getAttribute("style") || ""), isEmptyLadiPage(n.getAttribute("data-style")) && n.removeAttribute("data-style"));
        var o = LadiPageScript.getElementBoundingClientRect(t),
            r = LadiPageScript.getElementBoundingClientRect(a),
            l = "";
        e.position != LadiPageScript.const.TOOLTIP_POSITION.top_left && e.position != LadiPageScript.const.TOOLTIP_POSITION.top_middle && e.position != LadiPageScript.const.TOOLTIP_POSITION.top_right || (a.style.setProperty("top", "auto"), a.style.setProperty("bottom", o.height + e.padding + "px"), e.padding > 0 && (l += 'content: ""; position: absolute; width: 100%; height: ' + e.padding + "px; bottom: " + -e.padding + "px; left: 0;")), e.position == LadiPageScript.const.TOOLTIP_POSITION.top_middle && a.style.setProperty("left", (o.width - r.width) / 2 + "px"), e.position == LadiPageScript.const.TOOLTIP_POSITION.top_right && (a.style.setProperty("left", "auto"), a.style.setProperty("right", "0")), e.position != LadiPageScript.const.TOOLTIP_POSITION.bottom_left && e.position != LadiPageScript.const.TOOLTIP_POSITION.bottom_middle && e.position != LadiPageScript.const.TOOLTIP_POSITION.bottom_right || (a.style.setProperty("bottom", "auto"), a.style.setProperty("top", o.height + e.padding + "px"), e.padding > 0 && (l += 'content: ""; position: absolute; width: 100%; height: ' + e.padding + "px; top: " + -e.padding + "px; left: 0;")), e.position == LadiPageScript.const.TOOLTIP_POSITION.bottom_middle && a.style.setProperty("left", (o.width - r.width) / 2 + "px"), e.position == LadiPageScript.const.TOOLTIP_POSITION.bottom_right && (a.style.setProperty("left", "auto"), a.style.setProperty("right", "0")), e.position != LadiPageScript.const.TOOLTIP_POSITION.left_top && e.position != LadiPageScript.const.TOOLTIP_POSITION.left_middle && e.position != LadiPageScript.const.TOOLTIP_POSITION.left_bottom || (a.style.setProperty("left", "auto"), a.style.setProperty("right", o.width + e.padding + "px"), e.padding > 0 && (l += 'content: ""; position: absolute; width: ' + e.padding + "px; height: 100%; top: 0; right: " + -e.padding + "px;")), e.position == LadiPageScript.const.TOOLTIP_POSITION.left_top && a.style.setProperty("bottom", "auto"), e.position == LadiPageScript.const.TOOLTIP_POSITION.left_bottom && a.style.setProperty("top", "auto"), e.position != LadiPageScript.const.TOOLTIP_POSITION.right_top && e.position != LadiPageScript.const.TOOLTIP_POSITION.right_middle && e.position != LadiPageScript.const.TOOLTIP_POSITION.right_bottom || (a.style.setProperty("right", "auto"), a.style.setProperty("left", o.width + e.padding + "px"), e.padding > 0 && (l += 'content: ""; position: absolute; width: ' + e.padding + "px; height: 100%; top: 0; left: " + -e.padding + "px;")), e.position == LadiPageScript.const.TOOLTIP_POSITION.right_top && a.style.setProperty("bottom", "auto"), e.position == LadiPageScript.const.TOOLTIP_POSITION.right_bottom && a.style.setProperty("top", "auto"), a.style.setProperty("z-index", "90000090"), "fixed" == getComputedStyle(t).position && t.style.setProperty("z-index", "90000090");
        var d = "dropbox-" + a.id;
        if (i && !isEmptyLadiPage(l)) l = "#" + a.id + ":before {" + l + "}", LadiPageScript.createStyleElement(d, l);
        else {
            var s = document.getElementById(d);
            isEmptyLadiPage(s) || s.parentElement.removeChild(s)
        }
        if (i) a.removeAttribute("data-dropbox-backdrop");
        else a.setAttribute("data-dropbox-backdrop", !0), document.getElementById(LadiPageScript.runtime.backdrop_dropbox_id).style.setProperty("display", "block");
        isEmptyLadiPage(e.animation_name) || isEmptyLadiPage(n) || (n.style.setProperty("animation-name", e.animation_name), n.style.setProperty("-webkit-animation-name", e.animation_name), n.style.setProperty("animation-duration", e.animation_duration + "s"), n.style.setProperty("-webkit-animation-duration", e.animation_duration + "s")), a.classList.remove("opacity-0")
    }
}, LadiPageLibraryV2.prototype.hideDropbox = function() {
    var t = this.doc || document.getElementById(this.id);
    if (!isEmptyLadiPage(t) && "true" == t.getAttribute("data-dropbox")) {
        t.setAttribute("style", t.getAttribute("data-style") || ""), t.removeAttribute("data-style");
        var e = document.getElementById(t.getAttribute("data-from-doc-id"));
        isEmptyLadiPage(e) || (e.setAttribute("style", e.getAttribute("data-style") || ""), e.removeAttribute("data-style"));
        var i = t.getElementsByClassName("ladi-popup")[0];
        isEmptyLadiPage(i) || i.setAttribute("style", i.getAttribute("data-style") || "");
        var a = "dropbox-" + t.id,
            n = document.getElementById(a);
        isEmptyLadiPage(n) || n.parentElement.removeChild(n);
        for (var o = t.querySelectorAll('[data-dropbox-backdrop="true"]'), r = 0; r < o.length; r++) window.ladi(o[r].id).hide();
        if (t.removeAttribute("data-dropbox-backdrop"), 0 == (o = document.querySelectorAll('[data-dropbox-backdrop="true"]')).length) document.getElementById(LadiPageScript.runtime.backdrop_dropbox_id).style.removeProperty("display");
        document.querySelector("#" + LadiPageScript.runtime.builder_section_popup_id + " > .ladi-container").appendChild(t)
    }
}, LadiPageLibraryV2.prototype.toggle = function(t) {
    var e = this.doc || document.getElementById(this.id);
    isEmptyLadiPage(e) || ("none" == getComputedStyle(e).display ? this.show(t) : this.hide(t))
}, LadiPageLibraryV2.prototype.set_style = function(t, e, i) {
    var a = this.doc || document.getElementById(this.id);
    if (!isEmptyLadiPage(a)) {
        var n = e.action_type,
            o = "set-style-" + t.id + "-" + a.id + "-" + n,
            r = "set-style-" + t.id + "-" + a.id + "-" + n + "-transition",
            l = document.getElementById(i ? r : o);
        isEmptyLadiPage(l) || l.parentElement.removeChild(l), a.classList.remove(o);
        var d = {};
        isEmptyLadiPage(e.color) || (d.color = e.color), isEmptyLadiPage(e.background_color) || (d.background = "none", d["background-color"] = e.background_color), isEmptyLadiPage(e.border_color) || (d["border-color"] = e.border_color), isEmptyLadiPage(e.opacity) || (d.opacity = e.opacity / 100), isEmptyLadiPage(e.transform_scale) || (d.transform = "scale(" + e.transform_scale / 100 + ")"), e.ontop && (d["z-index"] = "9000000090 !important"), isObjectLadiPage(e.custom_css) && Object.keys(e.custom_css).forEach(function(t) {
            d[t] = e.custom_css[t]
        });
        var s = [],
            c = "",
            u = "",
            p = "",
            m = "",
            g = "",
            _ = "",
            y = !1;
        Object.keys(d).forEach(function(t) {
            "z-index" != t.toLowerCase() ? "background" == t.toLowerCase() || t.toLowerCase().startsWith("background-") ? p += t + ": " + d[t] + ";" : "color" == t.toLowerCase() || "font" == t.toLowerCase() || t.toLowerCase().startsWith("font-") || t.toLowerCase().startsWith("text-") || t.toLowerCase().startsWith("line-") ? m += t + ": " + d[t] + ";" : u += t + ": " + d[t] + ";" : _ += t + ": " + d[t] + ";"
        });
        var f = function(t) {
            for (var e = !1, n = 0; n < s.length; n++) {
                var r = s[n];
                if (isEmptyLadiPage(r)) {
                    i && (y || (g += "#" + a.id + " {transition: all 150ms linear 0s;}")), c += "#" + a.id + "." + o + " {" + t + "}", e = !0;
                    break
                }
                if (document.querySelectorAll("#" + a.id + " > " + r).length > 0) {
                    i && (g += "#" + a.id + " > " + r + " {transition: all 150ms linear 0s;}"), c += "#" + a.id + "." + o + " > " + r + " {" + t + "}", e = !0;
                    break
                }
            }
            return e
        };
        if (!isEmptyLadiPage(m)) {
            var v = function(t) {
                t = isEmptyLadiPage(t) ? "" : "." + t;
                var e = "";
                return e += "#" + a.id + t + ", ", e += "#" + a.id + t + " .ladi-headline, ", e += "#" + a.id + t + " .ladi-paragraph, ", e += "#" + a.id + t + " .ladi-list-paragraph"
            };
            document.querySelectorAll(v()).length > 0 && (i && (y = !0, g += v() + " {transition: all 150ms linear 0s;}"), c += v(o) + " {" + m + "}")
        }
        isEmptyLadiPage(p) || (s = [".ladi-section-background", ".ladi-popup .ladi-popup-background", ".ladi-button .ladi-button-background", ".ladi-box", ".ladi-video .ladi-video-background", ".ladi-form .ladi-form-item-background", ".ladi-frame-bg .ladi-frame-background", ".ladi-survey .ladi-survey-option-background", ".ladi-combobox .ladi-combobox-item-background", ".ladi-countdown .ladi-countdown-background", ".ladi-notify"], f(p) || (u += p)), isEmptyLadiPage(u) || (s = [".ladi-group", ".ladi-accordion", ".ladi-popup", ".ladi-image", ".ladi-gallery", ".ladi-button", ".ladi-button-group", ".ladi-headline", ".ladi-paragraph", ".ladi-list-paragraph", ".ladi-line", ".ladi-box", ".ladi-collection", ".ladi-tabs", ".ladi-shape", ".ladi-video", ".ladi-form", ".ladi-carousel", ".ladi-html-code", ".ladi-frame", ".ladi-table", ".ladi-survey", ".ladi-combobox", ".ladi-countdown", ".ladi-notify", ".ladi-spin-lucky"], f(u) || (_ += u)), isEmptyLadiPage(_) || (s = [""], f(_)), i ? LadiPageScript.createStyleElement(r, g) : LadiPageScript.createStyleElement(o, c), i || a.classList.add(o)
    }
}, LadiPageLibraryV2.prototype.remove_style = function(t, e) {
    var i = this.doc || document.getElementById(this.id);
    if (!isEmptyLadiPage(i)) {
        var a = e.action_type,
            n = "set-style-" + t.id + "-" + i.id + "-" + a;
        i.classList.remove(n);
        var o = document.getElementById(n);
        isEmptyLadiPage(o) || o.parentElement.removeChild(o)
    }
}, LadiPageLibraryV2.prototype.element = function() {
    return this.doc || document.getElementById(this.id)
}, ["start", "add_turn"].forEach(function(t) {
    LadiPageLibraryV2.prototype[t] = function() {
        var e = LadiPageScript.runtime.eventData[this.id];
        if (isObjectLadiPage(e)) {
            var i = LadiPageApp[e.type + LadiPageScript.const.APP_RUNTIME_PREFIX];
            if (!isEmptyLadiPage(i)) {
                var a = i(e, !0);
                isFunctionLadiPage(a[t]) && a[t](this.id)
            }
        }
    }
});
var ladi = ladi || function(t, e) {
        if (!isEmptyLadiPage(t)) {
            var i = new LadiPageLibraryV2;
            return i.id = t, i.doc = e, i
        }
    },
    ladi_fbq = function() {
        var t = arguments[0],
            e = arguments[1],
            i = arguments[2],
            a = arguments[3];
        if (isObjectLadiPage(window.ladi_conversion_api) && isObjectLadiPage(window.ladi_conversion_api.facebook) && isArrayLadiPage(window.ladi_conversion_api.facebook.pixels)) {
            isObjectLadiPage(a) || (a = {});
            a.eventID = "ladi." + Date.now() + "." + (Math.floor(9e10 * Math.random()) + 1e10)
        }
        LadiPageQueueCommand.push(function() {
            return isFunctionLadiPage(window.fbq)
        }, function() {
            window.fbq(t, e, i, a), LadiPageScript.runConversionApi("facebook", "events", [{
                key: t,
                name: e,
                custom_data: i,
                data: a
            }])
        })
    };
isArrayLadiPage(window.ladi_fbq_data) && (window.ladi_fbq_data.forEach(function(t) {
    ladi_fbq(t[0], t[1], t[2], t[3])
}), delete window.ladi_fbq_data);
var ladi_ttq = function() {
    var t = arguments[0],
        e = arguments[1],
        i = arguments[2],
        a = arguments[3],
        n = arguments[4];
    "ViewContent" == e ? LadiPageCommand.push({
        name: e,
        clickButton: !0,
        scrollPercent: 50
    }) : LadiPageQueueCommand.push(function() {
        return !isNullLadiPage(window.ttq)
    }, function() {
        i = isObjectLadiPage(i) ? i : {}, a = isObjectLadiPage(a) ? a : {}, n = isObjectLadiPage(n) ? n : {}, Object.keys(n).length > 0 && window.ttq.identify(n), "PageView" != e && window.ttq[t](e, i, a), LadiPageScript.runConversionApi("tiktok", "events", [{
            name: e,
            custom_data: i,
            data: a
        }], {
            ttq_identify_data: n
        })
    })
};
isArrayLadiPage(window.ladi_ttq_data) && (window.ladi_ttq_data.forEach(function(t) {
    ladi_ttq(t[0], t[1], t[2], t[3], t[4])
}), delete window.ladi_ttq_data), LadiPageScript.const.DATA_TYPE = {
    default: "default",
    dataset: "dataset",
    list_category: "list_category",
    list_tag: "list_tag",
    detail_category: "detail_category",
    detail_tag: "detail_tag",
    list_post_by_keyword: "list_post_by_keyword",
    list_post_by_category: "list_post_by_category",
    list_post_by_tag: "list_post_by_tag",
    detail_post: "detail_post"
}, LadiPageScript.const.DATASET_TYPE = {
    notify: "NOTIFY",
    spin_lucky: "SPIN_LUCKY",
    review: "REVIEW",
    collection: "COLLECTION",
    blog: "BLOG",
    website: "WEBSITE"
}, LadiPageScript.const.DATASET_FIELD_TYPE = {
    text: "TEXT",
    number: "NUMBER",
    boolean: "BOOLEAN",
    image: "IMAGE",
    link: "LINK",
    html: "HTML",
    date_time: "DATE_TIME"
}, LadiPageScript.const.DATASET_ID_LENGTH = 24, LadiPageScript.const.DATASET_CONTENT_SOURCE_URL = "ladisources/global/dataset/", LadiPageScript.const.DATASET_CONTENT_SOURCE_ENDSWITH = ".html", LadiPageScriptV2.prototype.convertDataset = function(t, e) {
    var i;
    if (isArrayLadiPage(e)) {
        var a = {};
        (e = e.sort(function(t, e) {
            var i = new Date(t.updated_at).getTime(),
                a = new Date(e.updated_at).getTime();
            return (i = isNaN(i) ? t.updated_at : i) > (a = isNaN(a) ? e.updated_at : a) ? 1 : -1
        })).forEach(function(t) {
            a[t.id] = t
        }), e = Object.values(a)
    }
    return t == this.const.DATASET_TYPE.notify ? (i = [], e.forEach(function(t) {
        i.push({
            gsx$title: {
                $t: t.title
            },
            gsx$content: {
                $t: t.content
            },
            gsx$time: {
                $t: t.time
            },
            gsx$image: {
                $t: t.image
            }
        })
    }), i) : t == this.const.DATASET_TYPE.spin_lucky ? function(t) {
        var e = [];
        return t.forEach(function(t) {
            var i = [encodeURIComponent(t.coupon_code), encodeURIComponent(t.coupon_text), encodeURIComponent(t.percent + "%")].join("|");
            i = Base64.encode(i), e.push(i)
        }), e
    }(e) : t == this.const.DATASET_TYPE.review ? function(t) {
        return t
    }(e) : t == this.const.DATASET_TYPE.blog ? function(t) {
        return t
    }(e) : t == this.const.DATASET_TYPE.website ? function(t) {
        return t
    }(e) : t == this.const.DATASET_TYPE.collection ? function(t) {
        return t
    }(e) : void 0
}, LadiPageScriptV2.prototype.loadDataset = function(t, e, i, a, n, o, r, l) {
    var d = this,
        s = function(t, e, i) {
            return isArrayLadiPage(t) && t.length > 0 && !isEmptyLadiPage(e) && !isEmptyLadiPage(i) && t.sort(function(t, a) {
                var n = t[e],
                    o = a[e];
                return parseFloatLadiPage(n) == n && parseFloatLadiPage(o) == o && (n = parseFloatLadiPage(n), o = parseFloatLadiPage(o)), d.const.SORT_BY_TYPE.asc == i ? n > o ? 1 : -1 : n < o ? 1 : -1
            }), t
        };
    if (d.runtime.tmp.dataset_check_load) d.runtime.tmp.timeout_dataset_data[e] = d.runTimeout(function() {
        d.loadDataset(t, e, i, a, n, !1, r, l)
    }, 100);
    else {
        var c = [],
            u = [];
        if (isEmptyLadiPage(t)) {
            Object.keys(d.runtime.eventData).forEach(function(t) {
                var e = d.runtime.eventData[t];
                isEmptyLadiPage(e["option.data_setting.value"]) || (c.push({
                    element_id: t,
                    id: e["option.data_setting.value"],
                    type: e["option.data_setting.type_dataset"],
                    sort_name: e["option.data_setting.sort_name"],
                    sort_by: e["option.data_setting.sort_by"]
                }), u.push(e["option.data_setting.value"]))
            }), u = u.unique(), isObjectLadiPage(d.runtime.tmp.dataset_data_website) && Object.keys(d.runtime.tmp.dataset_data_website).forEach(function(t) {
                d.runtime.tmp.dataset_data[t] = d.runtime.tmp.dataset_data_website[t], delete d.runtime.tmp.dataset_data_website[t], u = u.except([t])
            })
        } else {
            if (isEmptyLadiPage(e) || e.length != d.const.DATASET_ID_LENGTH) return;
            if (!isNullLadiPage(d.runtime.tmp.dataset_data[e])) return !0 === d.runtime.tmp.dataset_data[e] ? void(d.runtime.tmp.timeout_dataset_data[e] = d.runTimeout(function() {
                d.loadDataset(t, e, i, a, n, !1, r, l)
            }, 100)) : (!o && isFunctionLadiPage(l) && l(s(d.runtime.tmp.dataset_data[e], a, n)), s(d.runtime.tmp.dataset_data[e], a, n));
            d.runtime.tmp.dataset_data[e] = !0, c = [{
                element_id: t,
                id: e,
                type: i,
                sort_name: a,
                sort_by: n
            }], u = [e]
        }
        if (0 != u.length) {
            var p = r ? d.runtime.store_id : window.$rootScope.getStoreId(),
                m = d.const.API_DATASET_DATA.format(p, u.join(","));
            d.runtime.tmp.dataset_check_load = !0, d.sendRequest("GET", m, null, !0, null, function(i, a, n) {
                if (n.readyState == XMLHttpRequest.DONE) {
                    try {
                        var o = JSON.parse(i);
                        Object.keys(o).forEach(function(t) {
                            for (var e = 0; e < c.length; e++) c[e].id == t && (c[e].dataset = d.convertDataset(c[e].type, o[t]))
                        }), c.forEach(function(i) {
                            if (isNullLadiPage(i.dataset)) return d.runtime.tmp.dataset_data[i.id] = !1, void(isEmptyLadiPage(d.runtime.tmp.timeout_dataset_data[e]) || (d.removeTimeout(d.runtime.tmp.timeout_dataset_data[e]), delete d.runtime.tmp.timeout_dataset_data[e]));
                            if (d.runtime.tmp.dataset_data[i.id] = i.dataset, isEmptyLadiPage(t)) {
                                var a = d.runtime.eventData[i.element_id],
                                    n = LadiPageApp[a.type + d.const.APP_RUNTIME_PREFIX];
                                isEmptyLadiPage(n) ? "table" == a.type && function(t, e) {
                                    var i = document.getElementById(t);
                                    if (!isEmptyLadiPage(i)) {
                                        for (var a = i.getElementsByTagName("tbody")[0], n = [], o = {}, r = i.querySelectorAll("thead td"), l = 0; l < r.length; l++) {
                                            var s = {
                                                name: r[l].getAttribute("data-name"),
                                                type: r[l].getAttribute("data-type"),
                                                is_show: !0
                                            };
                                            n.push(s), o[s.name] = r[l].getAttribute("data-width")
                                        }
                                        var c = d.generateTableTbodyDataset(i, n, o, e);
                                        a.outerHTML != c && (a.outerHTML = c);
                                        for (var u = function(t) {
                                                t.stopPropagation(), lightbox_image(t.target.getAttribute("data-src"))
                                            }, p = i.querySelectorAll("table td img"), m = 0; m < p.length; m++) p[m].addEventListener("click", u)
                                    }
                                }(i.element_id, s(i.dataset, i.sort_name, i.sort_by)) : ((a = d.copy(a)).dataset_value = s(i.dataset, i.sort_name, i.sort_by), n(a, r).run(i.element_id, d.runtime.isDesktop))
                            } else isFunctionLadiPage(l) && l(s(i.dataset, i.sort_name, i.sort_by))
                        })
                    } catch (t) {
                        d.runtime.tmp.dataset_data[e] = !1, isEmptyLadiPage(d.runtime.tmp.timeout_dataset_data[e]) || (d.removeTimeout(d.runtime.tmp.timeout_dataset_data[e]), delete d.runtime.tmp.timeout_dataset_data[e])
                    }
                    d.runtime.tmp.dataset_check_load = !1
                }
            })
        }
    }
}, LadiPageScriptV2.prototype.generateTableTheadDataset = function(t, e) {
    var i = "<thead><tr>",
        a = "";
    return isArrayLadiPage(t) && (t = t.filter(function(t) {
        return !t.is_delete && t.is_show
    })).forEach(function(t) {
        var n = parseFloatLadiPage(e[t.name]) || 0;
        n = n > 0 ? n : "", i += '<td data-name="' + t.name + '" data-type="' + t.type + '"' + (isEmptyLadiPage(n) ? "" : ' data-width="' + n + '"') + ">" + t.label + "</td>", a += '<col data-name="' + t.name + '" />'
    }), i += "</tr></thead>", i += "<colgroup>" + a + "</colgroup>"
}, LadiPageScriptV2.prototype.generateTableTbodyDataset = function(t, e, i, a) {
    var n = "<tbody>";

    function o(t) {
        return (t >= 10 ? "" : "0") + t
    }
    var r = this;
    return isArrayLadiPage(e) && (e = e.filter(function(t) {
        return !t.is_delete && t.is_show
    }), isArrayLadiPage(a) && a.forEach(function(t) {
        n += "<tr>", e.forEach(function(e) {
            var a = t[e.name];
            if (isEmptyLadiPage(a)) a = "";
            else {
                if (e.type == r.const.DATASET_FIELD_TYPE.link && (a = '<a href="' + a + '" target="_blank">' + a + "</a>"), e.type == r.const.DATASET_FIELD_TYPE.image) {
                    var l = parseFloatLadiPage(i[e.name]) || 0;
                    l = l > 0 ? l : 100, a = '<img data-src="' + a + '" src="' + r.getOptimizeImage(a, l, l, !0, !0, !0, !0) + '" />'
                }
                if (e.type == r.const.DATASET_FIELD_TYPE.date_time) {
                    var d = new Date(a);
                    a = d.getFullYear() + "-" + o(d.getMonth() + 1) + "-" + o(d.getDate()) + " " + o(d.getHours()) + ":" + o(d.getMinutes()) + ":" + o(d.getSeconds())
                }
                e.type == r.const.DATASET_FIELD_TYPE.boolean && (a = a ? r.const.LANG.OPTION_TRUE : r.const.LANG.OPTION_FALSE)
            }
            n += "<td>" + a + "</td>"
        }), n += "</tr>"
    })), n += "</tbody>"
};
var LadiPageAppV2 = LadiPageAppV2 || function() {};
LadiPageAppV2.prototype.notify_runtime = function(t, e) {
    var i = function() {},
        a = "top_left",
        n = "top_center",
        o = "top_right",
        r = "bottom_left",
        l = "bottom_center",
        d = "bottom_right";
    return i.prototype.run = function(e, i) {
        isObjectLadiPage(LadiPageScript.runtime.tmp.timeout_notify) || (LadiPageScript.runtime.tmp.timeout_notify = {});
        var s = t["option.sheet_id"],
            c = t.dataset_value,
            u = document.getElementById(e);
        if (u.classList.add("ladi-hidden"), !isEmptyLadiPage(s) || !isEmptyLadiPage(c)) {
            var p = i ? LadiPageScript.const.DESKTOP : LadiPageScript.const.MOBILE,
                m = t[p + ".option.position"],
                g = 1e3 * (parseFloatLadiPage(t["option.time_show"]) || 5),
                _ = 1e3 * (parseFloatLadiPage(t["option.time_delay"]) || 10);
            _ = _ < 501 ? 501 : _;
            var y = "https://w.ladicdn.com/source/notify.svg?v=1.0",
                f = [{
                    key: "gsx$title",
                    className: ".ladi-notify-title"
                }, {
                    key: "gsx$content",
                    className: ".ladi-notify-content"
                }, {
                    key: "gsx$time",
                    className: ".ladi-notify-time"
                }, {
                    key: "gsx$image",
                    className: ".ladi-notify-image img"
                }];
            u.classList.remove("ladi-hidden");
            var v = function() {
                u.style.setProperty("opacity", 0), m != a && m != n && m != o || u.style.setProperty("top", -u.clientHeight - 100 + "px"), m != r && m != l && m != d || u.style.setProperty("bottom", -u.clientHeight - 100 + "px")
            };
            v(), f.forEach(function(t) {
                "gsx$image" == t.key ? u.querySelectorAll(t.className)[0].src = y : u.querySelectorAll(t.className)[0].textContent = ""
            });
            var h = function(t) {
                    t = t.sort(function() {
                        return .5 - Math.random()
                    });
                    var i = -1,
                        s = function() {
                            if (i + 1 < t.length) {
                                var c = t[++i],
                                    p = Object.keys(c);
                                u.style.removeProperty("opacity"), m != a && m != n && m != o || u.style.removeProperty("top"), m != r && m != l && m != d || u.style.removeProperty("bottom"), f.forEach(function(t) {
                                    -1 != p.indexOf(t.key) && ("gsx$image" == t.key ? u.querySelectorAll(t.className)[0].src = isEmptyLadiPage(c[t.key].$t) ? y : c[t.key].$t : u.querySelectorAll(t.className)[0].textContent = c[t.key].$t)
                                });
                                var P = function() {
                                    var a = f.findIndex(function(t) {
                                        return "gsx$image" == t.key
                                    });
                                    if (-1 != a) {
                                        var n = t[i + 1 >= t.length ? 0 : i + 1];
                                        n.hasOwnProperty(f[a].key) && (u.querySelectorAll(f[a].className)[0].src = isEmptyLadiPage(n[f[a].key].$t) ? y : n[f[a].key].$t)
                                    }
                                    LadiPageScript.runtime.tmp.timeout_notify[e] = LadiPageScript.runTimeout(s, _ - 500)
                                };
                                LadiPageScript.runtime.tmp.timeout_notify[e] = LadiPageScript.runTimeout(function() {
                                    v(), LadiPageScript.runtime.tmp.timeout_notify[e] = LadiPageScript.runTimeout(P, 500)
                                }, g)
                            } else h(t)
                        };
                    LadiPageScript.runtime.tmp.timeout_notify[e] = LadiPageScript.runTimeout(s, _)
                },
                P = function(t) {
                    u.querySelector(".ladi-notify").classList.remove("ladi-hidden"), u.classList.add("ladi-notify-transition"), h(t)
                };
            isEmptyLadiPage(c) || P(c), isEmptyLadiPage(s) || LadiPageScript.sendRequest("GET", "https://docs.google.com/spreadsheets/d/" + s + "/gviz/tq?tqx=out:json", null, !0, null, function(t, e, i) {
                if (i.readyState == XMLHttpRequest.DONE && 200 == e) {
                    t = (t = t.substr(t.indexOf('"table":{') + '"table":'.length)).substr(0, t.indexOf("});"));
                    var a = JSON.parse(t),
                        n = [],
                        o = a.cols;
                    isObjectLadiPage(a) && 0 == a.parsedNumHeaders && isArrayLadiPage(a.rows) && a.rows.length > 0 && isObjectLadiPage(a.rows[0]) && isArrayLadiPage(a.rows[0].c) && a.rows[0].c.length > 0 && (o = [], a.rows[0].c.forEach(function(t) {
                        o.push({
                            label: isObjectLadiPage(t) ? t.v : ""
                        })
                    }), a.rows.shift()), isObjectLadiPage(a) && isArrayLadiPage(a.rows) && isArrayLadiPage(o) && a.rows.forEach(function(t) {
                        if (isObjectLadiPage(t)) {
                            var e = {};
                            o.forEach(function(i, a) {
                                if (isArrayLadiPage(t.c)) {
                                    var n = t.c[a];
                                    isObjectLadiPage(i) && !isEmptyLadiPage(i.label) && isObjectLadiPage(n) && (e["gsx$" + i.label.trim().toLowerCase()] = {
                                        $t: n.v
                                    })
                                }
                            }), n.push(e)
                        }
                    }), P(n)
                }
            })
        }
    }, new i
};
var LadiPageAppV2 = LadiPageAppV2 || function() {};
LadiPageAppV2.prototype.spinlucky_runtime = function(t, e) {
    var i = function() {},
        a = function(t) {
            return parseFloatLadiPage(window.ladi("_total_turn_" + t).get_cookie()) || 0
        };
    return i.prototype.getEventTrackingCategory = function() {
        return "LadiPageFinish"
    }, i.prototype.run = function(e, i) {
        var n = t["option.spinlucky_setting.list_value"],
            o = t.dataset_value,
            r = t["option.spinlucky_setting.result_popup_id"],
            l = t["option.spinlucky_setting.result_message"],
            d = t["option.spinlucky_setting.max_turn"],
            s = a(e);
        if (!isEmptyLadiPage(n) || !isEmptyLadiPage(o)) {
            n = n || o, LadiPageScript.setDataReplaceStr("spin_turn_left", d - s);
            var c = document.getElementById(e),
                u = c.getElementsByClassName("ladi-spin-lucky-start")[0],
                p = c.getElementsByClassName("ladi-spin-lucky-screen")[0],
                m = "";
            n.forEach(function(t, e) {
                var i = Base64.decode(t).split("|");
                if (3 == i.length) {
                    var a = 360 / n.length * e + 180 / n.length,
                        o = "rotate(" + (a *= -1) + "deg) translateY(-50%)";
                    m += '<div class="ladi-spin-lucky-label" style="transform: ' + o + "; -webkit-transform: " + o + ';">' + decodeURIComponentLadiPage(i[1].trim()) + "</div>"
                }
            }), p.innerHTML = m;
            var g = !1;
            u.addEventListener("click", function(t) {
                if (t.stopPropagation(), !g)
                    if ((s = a(e)) >= d) LadiPageScript.showMessage(LadiPageScript.const.LANG.GAME_MAX_TURN_MESSAGE.format(d));
                    else {
                        g = !0;
                        var i = [],
                            o = 0,
                            c = 1;
                        n.forEach(function(t, e) {
                            var a = Base64.decode(t).split("|"),
                                n = decodeURIComponentLadiPage(a[0].trim()),
                                r = decodeURIComponentLadiPage(a[1].trim()),
                                l = parseFloatLadiPage(decodeURIComponentLadiPage(a[2].trim())) || 0;
                            i.push({
                                min: c,
                                max: c + l - 1,
                                value: n,
                                text: r,
                                percent: l,
                                index: e
                            }), c += l, o += l
                        });
                        for (var u = LadiPageScript.randomInt(1, o), m = null, _ = 0; _ < i.length; _++)
                            if (i[_].min <= u && i[_].max >= u) {
                                m = i[_];
                                break
                            } if (isEmptyLadiPage(m)) g = !1;
                        else {
                            var y = parseFloatLadiPage(p.getAttribute("data-rotate")) || 0,
                                f = m.index * (360 / i.length) + 360 * (4 + Math.ceil(y / 360)) + 180 / i.length,
                                v = "rotate(" + f + "deg)";
                            p.setAttribute("data-rotate", f), p.style.setProperty("transform", v), p.style.setProperty("-webkit-transform", v), "NEXT_TURN" != m.value.toUpperCase() && (s++, window.ladi("_total_turn_" + e).set_cookie(s, 1));
                            LadiPageScript.runTimeout(function() {
                                "NEXT_TURN" == m.value.toUpperCase() ? isEmptyLadiPage(m.text) || LadiPageScript.showMessage(m.text) : (LadiPageScript.setDataReplaceStr("coupon", m.value), LadiPageScript.setDataReplaceStr("coupon_code", m.value), LadiPageScript.setDataReplaceStr("coupon_text", m.text), LadiPageScript.setDataReplaceStr("spin_turn_left", d - s), LadiPageScript.setDataReplaceElement(!0, !1, null, null, ["coupon", "coupon_code", "coupon_text", "spin_turn_left"]), r == LadiPageScript.const.GAME_RESULT_TYPE.default ? isEmptyLadiPage(l) || LadiPageScript.showMessage(l) : window.ladi(r).show(), LadiPageScript.runEventTracking(e, {
                                    is_form: !1
                                })), g = !1
                            }, 1e3 * parseFloatLadiPage(getComputedStyle(p).transitionDuration) + 1e3)
                        }
                    }
            })
        }
    }, i.prototype.start = function(t) {
        var e = document.getElementById(t);
        if (!isEmptyLadiPage(e) && e.getElementsByClassName("ladi-spin-lucky").length > 0) {
            var i = e.getElementsByClassName("ladi-spin-lucky-start")[0];
            isEmptyLadiPage(i) || i.click()
        }
    }, i.prototype.add_turn = function(e) {
        var i = t["option.spinlucky_setting.max_turn"],
            n = a(e);
        n > 0 && n--, window.ladi("_total_turn_" + e).set_cookie(n, 1), LadiPageScript.setDataReplaceStr("spin_turn_left", i - n), LadiPageScript.setDataReplaceElement(!1)
    }, new i
};
var LadiPageAppV2 = LadiPageAppV2 || function() {};
LadiPageAppV2.prototype.review_runtime = function(t, e) {
    var i = function() {};
    return i.prototype.run = function(i, a) {
        if (isObjectLadiPage(t) && !isEmptyLadiPage(t["option.data_setting.value"]) && isArrayLadiPage(t.dataset_value)) {
            var n = document.getElementById(i);
            if (!isEmptyLadiPage(n)) {
                var o = n.getElementsByTagName("iframe")[0];
                LadiPageApp.review_onload(o, t["option.data_setting.value"], t.dataset_value, e)
            }
        }
    }, new i
}, LadiPageAppV2.prototype.review_callback_loaded = function(t, e) {
    for (var i = !0, a = document.querySelectorAll("iframe.ladi-review-iframe"), n = 0; n < a.length; n++)
        if (!a[n].classList.contains("loaded")) {
            i = !1;
            break
        } if (isArrayLadiPage(LadiPageScript.runtime.tmp.list_review_callback_loaded) || (LadiPageScript.runtime.tmp.list_review_callback_loaded = []), i)
        for (; !t && LadiPageScript.runtime.tmp.list_review_callback_loaded.length > 0;) {
            LadiPageScript.runtime.tmp.list_review_callback_loaded.shift()()
        } else isFunctionLadiPage(e) && LadiPageScript.runtime.tmp.list_review_callback_loaded.push(e);
    return i
}, LadiPageAppV2.prototype.review_list = function(t, e) {
    var i = [],
        a = LadiPageScript.runtime.isClient,
        n = t.sheet_id,
        o = t.dataset_id,
        r = t.dataset_value;
    n = isEmptyLadiPage(n) ? "" : n, o = isEmptyLadiPage(o) ? "" : o, r = isEmptyLadiPage(r) ? [] : r;
    var l = n + o;
    isObjectLadiPage(LadiPageScript.runtime.tmp.review_data) || (LadiPageScript.runtime.tmp.review_data = {});
    if (!isEmptyLadiPage(n) || !isEmptyLadiPage(o)) {
        var d = function() {
            if (!0 === LadiPageScript.runtime.tmp.review_data[l]) return LadiPageScript.runTimeout(d, 100);
            isFunctionLadiPage(e) && e(LadiPageScript.runtime.tmp.review_data[l])
        };
        return a && !isEmptyLadiPage(o) && isArrayLadiPage(r) ? (isFunctionLadiPage(e) && e(r), r) : !0 === LadiPageScript.runtime.tmp.review_data[l] ? (d(), i) : isArrayLadiPage(LadiPageScript.runtime.tmp.review_data[l]) ? LadiPageScript.runtime.tmp.review_data[l] : (isEmptyLadiPage(n) || (LadiPageScript.runtime.tmp.review_data[l] = !0, d(), LadiPageScript.sendRequest("GET", "https://docs.google.com/spreadsheets/d/" + n + "/gviz/tq?tqx=out:json", null, !0, null, function(t, e, i) {
            if (i.readyState == XMLHttpRequest.DONE && 200 == e) {
                t = (t = t.substr(t.indexOf('"table":{') + '"table":'.length)).substr(0, t.indexOf("});"));
                var a = JSON.parse(t),
                    n = [],
                    o = a.cols;
                isObjectLadiPage(a) && 0 == a.parsedNumHeaders && isArrayLadiPage(a.rows) && a.rows.length > 0 && isObjectLadiPage(a.rows[0]) && isArrayLadiPage(a.rows[0].c) && a.rows[0].c.length > 0 && (o = [], a.rows[0].c.forEach(function(t) {
                        o.push({
                            label: isObjectLadiPage(t) ? t.v : ""
                        })
                    }), a.rows.shift()), isObjectLadiPage(a) && isArrayLadiPage(a.rows) && isArrayLadiPage(o) && a.rows.forEach(function(t) {
                        if (isObjectLadiPage(t)) {
                            var e = {};
                            o.forEach(function(i, a) {
                                if (isArrayLadiPage(t.c)) {
                                    var n = t.c[a];
                                    isObjectLadiPage(i) && !isEmptyLadiPage(i.label) && isObjectLadiPage(n) && (e["gsx$" + i.label.trim().toLowerCase()] = {
                                        $t: n.v
                                    })
                                }
                            }), n.push(e)
                        }
                    }),
                    function(t) {
                        var e = [];
                        try {
                            t.forEach(function(t) {
                                e.push({
                                    name: t.gsx$name.$t,
                                    content: t.gsx$content.$t,
                                    image: t.gsx$image.$t,
                                    star: t.gsx$star.$t,
                                    like: t.gsx$like.$t,
                                    time: t.gsx$time.$t,
                                    verify: t.gsx$verify.$t,
                                    seller_name: t.gsx$sellername.$t,
                                    seller_content: t.gsx$sellercontent.$t,
                                    seller_like: t.gsx$sellerlike.$t
                                })
                            })
                        } catch (t) {}
                        LadiPageScript.runtime.tmp.review_data[l] = e
                    }(n)
            }
        })), i)
    }
}, LadiPageAppV2.prototype.review_onload = function(t, e, i, a) {
    if (!isEmptyLadiPage(t))
        if (!a || LadiPageScript.runtime.isRun) {
            var n = t.parentElement,
                o = n.querySelector('script[type="text/css"]'),
                r = n.querySelector('script[type="application/json"]');
            if (!isEmptyLadiPage(o) && !isEmptyLadiPage(r)) {
                var l = o.innerHTML,
                    d = document.getElementById("style_preview");
                isEmptyLadiPage(d) || (l += d.innerHTML);
                var s = null;
                try {
                    s = JSON.parse(r.innerHTML), s = LadiPageScript.deOptimizeEventData(LadiPageScript.copy(s), LadiPageScript.const.OPTIMIZE_EVENT_DATA_KEY_LIST, "OPTIMIZE_EVENT_DATA_KEY_LIST"), s = LadiPageScript.decodeValue(s)
                } catch (t) {}
                if (isObjectLadiPage(s)) {
                    s.dataset_id = e, s.dataset_value = i;
                    var c = LadiPageScript.runtime.lang;
                    a || (c = LadiPage.generateLanguagePublish());
                    var u = LadiPageScript.const["LANG" + c];
                    s.text_unit = u.REVIEW_TEXT_UNIT, s.text_description = u.REVIEW_TEXT_DESCRIPTION, s.text_sort_1 = u.REVIEW_TEXT_SORT_1, s.text_sort_2 = u.REVIEW_TEXT_SORT_2, s.text_operator_1 = u.REVIEW_TEXT_OPERATOR_1, s.text_operator_2 = u.REVIEW_TEXT_OPERATOR_2;
                    var p = function(e) {
                        var i, a, o, r, d = t.contentWindow.document.documentElement,
                            c = (isEmptyLadiPage(s.title) ? "" : '<div class="ladi-review-title">' + s.title + "</div>") + (a = 0, o = 0, r = 0, s.star_review.forEach(function(t) {
                                a += t.total, o += t.star * t.total
                            }), r = o / a, '<div class="ladi-review-rating">\n            <div class="ladi-review-rating-left">\n                <div class="ladi-review-rating-summary">\n                    <span class="ladi-review-rating-num1">' + (r = Math.floor(10 * r) / 10) + '</span><span\n                        class="ladi-review-rating-num2">/' + s.star_max + '</span>\n                </div>\n                <div class="ladi-review-rating-star">' + function() {
                                for (var t = [], e = 0; e < Math.floor(r); e++) t.push('<i class="ladi-review-star-big ladi-review-star-full"></i>');
                                if (r > Math.floor(r)) {
                                    var i = parseFloatLadiPage(100 * (r - Math.floor(r)), 4);
                                    t.push('<i class="ladi-review-star-big ladi-review-star-width"><a style="width: ' + i + '%;"></a></i>')
                                }
                                for (e = 0; e < s.star_max - Math.ceil(r); e++) t.push('<i class="ladi-review-star-big ladi-review-star-none"></i>');
                                return t.join("")
                            }() + '</div>\n                <span class="ladi-review-rating-total">' + a + " " + s.text_unit + '</span>\n            </div>\n            <div class="ladi-review-rating-right">' + (i = [], s.star_review.forEach(function(t) {
                                var e = parseFloatLadiPage(t.total / a * 100, 4);
                                i.push('<div class="ladi-review-rating-detail">\n                        <div class="ladi-review-rating-detail-star">' + function() {
                                    for (var e = [], i = 0; i < t.star; i++) e.push('<i class="ladi-review-star-full"></i>');
                                    for (i = 0; i < s.star_max - t.star; i++) e.push('<i class="ladi-review-star-none"></i>');
                                    return e.join("")
                                }() + '</div>\n                        <div class="ladi-review-rating-detail-progress">\n                            <div class="ladi-review-rating-detail-progress-bg1" style="width: ' + e + '%;"></div>\n                            <div class="ladi-review-rating-detail-progress-bg2"></div>\n                        </div>\n                        <div class="ladi-review-rating-detail-total">' + t.total + "</div>\n                    </div>")
                            }), i.join("")) + "</div>\n        </div>") + function() {
                                var t = [];
                                return isEmptyLadiPage(s.text_description) || t.push('<span class="ladi-review-sort-title">' + s.text_description + "</span>"), isEmptyLadiPage(s.text_operator_1) && isEmptyLadiPage(s.text_operator_2) || t.push('<div class="ladi-review-sort-operator-1">\n                <svg class="ladi-review-sort-operator-svg" xmlns="http://www.w3.org/2000/svg" width="20px"\n                     height="20px" preserveAspectRatio="none" viewBox="0 0 1024 1024">\n                    <path d="M887.466667 725.333333l-192 192-12.8 12.8c-4.266667 4.266667-12.8 8.533333-17.066667 8.533334-8.533333 0-12.8-4.266667-21.333333-8.533334l-8.533334-8.533333-192-192c-8.533333-12.8-8.533333-29.866667 0-38.4l12.8-12.8c12.8-12.8 34.133333-8.533333 42.666667 4.266667l128 128v-345.6c0-21.333333 17.066667-38.4 38.4-38.4s38.4 17.066667 38.4 38.4V810.666667l128-132.266667c8.533333-12.8 29.866667-12.8 38.4 0l12.8 12.8c12.8 8.533333 17.066667 21.333333 4.266667 34.133333z m-320-375.466666c-12.8 12.8-34.133333 8.533333-42.666667-4.266667l-128-128v345.6c0 21.333333-17.066667 38.4-38.4 38.4s-38.4-17.066667-38.4-38.4V217.6l-128 128c-8.533333 12.8-29.866667 12.8-38.4 0l-17.066667-8.533333c-8.533333-12.8-12.8-25.6 0-38.4l192-192 8.533334-12.8c8.533333-4.266667 12.8-8.533333 21.333333-8.533334s12.8 4.266667 21.333333 8.533334l4.266667 8.533333 196.266667 192c8.533333 12.8 8.533333 29.866667 0 38.4l-12.8 17.066667z"></path>\n                </svg>\n                <span class="ladi-review-sort-operator-title">' + (s.text_operator_1 || "") + '</span>\n                <span class="ladi-review-sort-operator-value">' + (s.text_operator_2 || "") + "</span>\n            </div>"), isEmptyLadiPage(s.text_sort_1) && isEmptyLadiPage(s.text_sort_2) || t.push('<div class="ladi-review-sort-operator-2">\n                <svg class="ladi-review-sort-operator-svg" xmlns="http://www.w3.org/2000/svg" width="20px"\n                     height="20px" preserveAspectRatio="none" viewBox="0 0 1024 1024">\n                    <path d="M918.75555522 201.95555522c-4.266667-8.533333-17.066667-17.066667-25.6-17.066666H129.42222222c-12.8 0-21.333333 8.533333-25.6 17.066666-4.266667 12.8-4.266667 25.6 4.266667 34.133334L411.02222222 611.55555522v256c0 17.066667 12.8 29.866667 29.866667 29.866667 17.066667 0 29.866667-12.8 29.866666-29.866667v-277.333333l-277.333333-341.333333H824.88888922l-277.333334 341.333333V867.55555522c0 17.066667 12.8 29.866667 29.866667 29.866667s29.866667-12.8 29.866667-29.866667v-256L910.22222222 236.08888922c12.8-8.533333 12.8-21.333333 8.533333-34.133334"></path>\n                </svg>\n                <span class="ladi-review-sort-operator-title">' + (s.text_sort_1 || "") + '</span>\n                <span class="ladi-review-sort-operator-value">' + (s.text_sort_2 || "") + "</span>\n            </div>"), 0 == t.length ? "" : '<div class="ladi-review-sort">' + t.join("") + "</div>"
                            }() + function() {
                                var t = [];
                                return isArrayLadiPage(s.list) && s.list.forEach(function(e) {
                                    var i;
                                    e.star = e.star < 1 ? 1 : e.star, e.star = e.star > s.star_max ? s.star_max : e.star, t.push('<div class="ladi-review-item">\n                <div class="ladi-review-item-star">' + function() {
                                        for (var t = [], i = 0; i < e.star; i++) t.push('<i class="ladi-review-star-full"></i>');
                                        for (i = 0; i < s.star_max - e.star; i++) t.push('<i class="ladi-review-star-none"></i>');
                                        return t.join("")
                                    }() + '</div>\n                <div class="ladi-review-item-customer">\n                    <span>' + (isEmptyLadiPage(e.name) ? "" : e.name) + "</span>" + (i = "", isEmptyLadiPage(e.verify) || (i = '<span class="ladi-review-item-verify">' + e.verify + "</span>"), i) + '</div>\n                <div class="ladi-review-item-content">' + (isEmptyLadiPage(e.content) ? "" : e.content) + function() {
                                        var t = [];
                                        if (!isEmptyLadiPage(e.image)) {
                                            var i = e.image.split(",");
                                            t.push("<br />"), i.forEach(function(e) {
                                                t.push('<div class="ladi-review-item-image" style="background-image: url(\'' + e + "');\"></div>")
                                            })
                                        }
                                        return t.join("")
                                    }() + function() {
                                        var t = "";
                                        return isEmptyLadiPage(e.seller_name) || isEmptyLadiPage(e.seller_content) || (t += '<div class="ladi-review-item-seller">\n                            <div class="ladi-review-item-seller-name">' + e.seller_name + '</div>\n                            <div class="ladi-review-item-seller-body">' + e.seller_content + '</div>\n                            <div class="ladi-review-item-like">' + (isEmptyLadiPage(e.seller_like) ? "" : e.seller_like) + "</div>\n                        </div>"), t
                                    }() + "</div>" + function() {
                                        var t = "";
                                        return isEmptyLadiPage(e.like) || (t = '<div class="ladi-review-item-like">' + e.like + "</div>"), t
                                    }() + '<div class="ladi-review-item-time">' + (isEmptyLadiPage(e.time) ? "" : e.time) + "</div>\n            </div>")
                                }), '<div class="ladi-review-list">' + t.join("") + "</div>"
                            }(),
                            u = '<!DOCTYPE html>\n        <html>\n            <head>\n                <meta charset="UTF-8">\n                <meta name="viewport" content="width=device-width, initial-scale=1.0">\n                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap">\n                <style type="text/css">' + l + '</style>\n            </head>\n            <body>\n                <div class="ladi-review">' + c + "</div>\n            </body>\n        </html>";
                        d.innerHTML = u;
                        var p = d.getElementsByClassName("ladi-review")[0],
                            m = 0,
                            g = 0;
                        t.hasAttribute("data-height-display") ? m = parseFloatLadiPage(t.getAttribute("data-height-display")) || 0 : (m = parseFloatLadiPage(getComputedStyle(p).height) || 0, t.setAttribute("data-height-display", m)), t.hasAttribute("data-height-all") ? g = parseFloatLadiPage(t.getAttribute("data-height-all")) || 0 : (p.style.setProperty("height", "auto"), g = parseFloatLadiPage(getComputedStyle(p).height) || 0, p.style.removeProperty("height"), t.setAttribute("data-height-all", g));
                        var _ = !1,
                            y = s.scrolling;
                        y ? _ = !0 : (g = m, _ = !1);
                        var f = g;
                        if (_) t.removeAttribute("scrolling"), p.style.setProperty("height", "auto"), t.classList.add("loaded");
                        else if (t.setAttribute("scrolling", "no"), p.style.removeProperty("height"), e && !y) {
                            p.style.setProperty("height", "auto");
                            var v = parseFloatLadiPage(getComputedStyle(p).height) || 0;
                            if (p.style.removeProperty("height"), f != v) {
                                n.style.setProperty("height", v + "px");
                                var h = LadiPageScript.findAncestor(n.parentElement, "ladi-element");
                                isEmptyLadiPage(h) && (h = LadiPageScript.findAncestor(n.parentElement, "ladi-section")), LadiPageScript.updateHeightElement(!0, n, h, f, v)
                            }
                        }
                        e && t.classList.add("loaded"), LadiPageApp.review_callback_loaded(!1)
                    };
                    if (p(!1), a) {
                        t.onload = null, t.removeAttribute("onload");
                        var m = this.review_list(s, function(t) {
                            o.parentElement.removeChild(o), r.parentElement.removeChild(r), s.list = t, p(!0)
                        });
                        isNullLadiPage(m) && (t.classList.add("loaded"), LadiPageApp.review_callback_loaded(!1))
                    }
                }
            }
        } else LadiPageScript.runTimeout(function() {
            LadiPageApp.review_onload(t, e, i, a)
        }, 100)
}, LadiPageScript.const.LANGen = {
    ALERT_TITLE: "Alert",
    ALERT_BUTTON_TEXT: "OK",
    GET_CODE_BUTTON_TEXT: "Resend code",
    COPIED: "Copied!",
    PASTED: "Pasted!",
    FAILED: "Failed!",
    OPTION_NO_SELECT: "Blank",
    OPTION_TRUE: "Yes",
    OPTION_FALSE: "No",
    REQUEST_SEND_ERROR: "An error occurred, please try again!",
    FORM_LOGIN_SEND_ERROR: "Your key is invalid or has expired!",
    FORM_SEND_DATA_NO_CONFIG: "Please re-check your Form settings!",
    FORM_UPLOAD_FILE_MAX_SIZE_ERROR: "You can only upload file with the maximum size of {{max_size}}MB.",
    FORM_UPLOAD_FILE_MAX_LENGTH_ERROR: "You can only upload {{max_length}} files at once.",
    FORM_CAPTCHA_ERROR: "Please let us know that you're not a robot!",
    FORM_CAPTCHA_LOADING: "Please wait while we're checking your identity!",
    FORM_THANKYOU_MESSAGE_DEFAULT: "Thank you for your attention!",
    FORM_INPUT_REQUIRED_ERROR: "Please input all required information!",
    FORM_INPUT_EMAIL_REGEX: "Please input valid email format!",
    FORM_INPUT_TEXT_REGEX: "Please input with valid format!",
    PRODUCT: "Product",
    SERVICE: "Service",
    TICKET: "Ticket",
    REVIEW_TEXT_UNIT: "reviews",
    REVIEW_TEXT_DESCRIPTION: "Product Reviews",
    REVIEW_TEXT_SORT_1: "Sort by:",
    REVIEW_TEXT_SORT_2: "Latest",
    REVIEW_TEXT_OPERATOR_1: "Filter by:",
    REVIEW_TEXT_OPERATOR_2: "All Star",
    ADD_TO_CART_NO_CART: "Your cart is empty",
    ADD_TO_CART_QUANTITY_REQUIRED: "Please input your quanity!",
    ADD_TO_CART_NO_PRODUCT: "Information not found {{name}}, try again!",
    ADD_TO_CART_PRODUCT_REQUIRED: "Please select {{name}}!",
    ADD_TO_CART_NO_QUANTITY: "{{name}} is out of stocks!",
    ADD_TO_CART_MAX_QUANTITY: "You can only purchase with the maximum of {{max}} {{name}}.",
    ADD_TO_CART_PRODUCT_BEFORE_START_DATE: "It's not the opening time of {{name}} yet!!",
    ADD_TO_CART_PRODUCT_AFTER_END_DATE: "Opening time of {{name}} has ended!",
    ADD_TO_CART_PRODUCT_ONLY_ONE: "You can only purchase up to 1 {{name}} at once.",
    GAME_RESULT_MESSAGE: "Congrats! You have been gifted with {{coupon_text}}. Please insert your coupon code: {{coupon_code}}. You have {{spin_turn_left}} turns remaining.",
    GAME_MAX_TURN_MESSAGE: "You're out of turns.",
    HIDE_ELEMENT: "Hide element",
    SHOW_ELEMENT: "Show element",
    TOP_ELEMENT: "Pull Section to top",
    SCROLL_ELEMENT: "Scroll to Section",
    SET_COOKIE: "Add Cookie"
}, LadiPageScript.const.LANGvi = {
    ALERT_TITLE: "Alert",
    ALERT_BUTTON_TEXT: "OK",
    GET_CODE_BUTTON_TEXT: "Gá»­i láº¡i",
    COPIED: "Copied!",
    PASTED: "Pasted!",
    FAILED: "Failed!",
    OPTION_NO_SELECT: "KhĂ´ng chá»n",
    OPTION_TRUE: "CĂ³",
    OPTION_FALSE: "KhĂ´ng",
    REQUEST_SEND_ERROR: "ÄĂ£ xáº£y ra lá»—i, vui lĂ²ng thá»­ láº¡i!",
    FORM_LOGIN_SEND_ERROR: "MĂ£ cá»§a báº¡n khĂ´ng Ä‘Ăºng hoáº·c Ä‘Ă£ háº¿t háº¡n!",
    FORM_SEND_DATA_NO_CONFIG: "Vui lĂ²ng kiá»ƒm tra láº¡i cáº¥u hĂ¬nh Form!",
    FORM_UPLOAD_FILE_MAX_SIZE_ERROR: "Báº¡n chá»‰ Ä‘Æ°á»£c upload file tá»•ng dung lÆ°á»£ng tá»‘i Ä‘a {{max_size}}MB.",
    FORM_UPLOAD_FILE_MAX_LENGTH_ERROR: "Báº¡n chá»‰ Ä‘Æ°á»£c upload tá»‘i Ä‘a {{max_length}} file.",
    FORM_CAPTCHA_ERROR: "Vui lĂ²ng xĂ¡c minh ráº±ng báº¡n khĂ´ng pháº£i ngÆ°á»i mĂ¡y!",
    FORM_CAPTCHA_LOADING: "Vui lĂ²ng chá» xĂ¡c minh ráº±ng báº¡n khĂ´ng pháº£i ngÆ°á»i mĂ¡y!",
    FORM_THANKYOU_MESSAGE_DEFAULT: "Cáº£m Æ¡n báº¡n Ä‘Ă£ quan tĂ¢m!",
    FORM_INPUT_REQUIRED_ERROR: "Vui lĂ²ng nháº­p Ä‘áº§y Ä‘á»§ cĂ¡c trÆ°á»ng thĂ´ng tin!",
    FORM_INPUT_EMAIL_REGEX: "Vui lĂ²ng nháº­p Ä‘Ăºng Ä‘á»‹nh dáº¡ng email!",
    FORM_INPUT_TEXT_REGEX: "Vui lĂ²ng nháº­p Ä‘Ăºng Ä‘á»‹nh dáº¡ng!",
    PRODUCT: "Sáº£n pháº©m",
    SERVICE: "Dá»‹ch vá»¥",
    TICKET: "VĂ©",
    REVIEW_TEXT_UNIT: "Ä‘Ă¡nh giĂ¡",
    REVIEW_TEXT_DESCRIPTION: "Nháº­n xĂ©t vá» sáº£n pháº©m",
    REVIEW_TEXT_SORT_1: "Sáº¯p xáº¿p:",
    REVIEW_TEXT_SORT_2: "Má»›i nháº¥t",
    REVIEW_TEXT_OPERATOR_1: "Bá»™ lá»c:",
    REVIEW_TEXT_OPERATOR_2: "Táº¥t cáº£ Sao",
    ADD_TO_CART_NO_CART: "Giá» hĂ ng cá»§a báº¡n Ä‘ang trá»‘ng",
    ADD_TO_CART_QUANTITY_REQUIRED: "Vui lĂ²ng nháº­p sá»‘ lÆ°á»£ng!",
    ADD_TO_CART_NO_PRODUCT: "KhĂ´ng tĂ¬m tháº¥y thĂ´ng tin {{name}}, vui lĂ²ng thá»­ láº¡i sau!",
    ADD_TO_CART_PRODUCT_REQUIRED: "Vui lĂ²ng chá»n {{name}}!",
    ADD_TO_CART_NO_QUANTITY: "{{name}} Ä‘Ă£ háº¿t sá»‘ lÆ°á»£ng!",
    ADD_TO_CART_MAX_QUANTITY: "Báº¡n chá»‰ Ä‘Æ°á»£c mua tá»‘i Ä‘a {{max}} {{name}}.",
    ADD_TO_CART_PRODUCT_BEFORE_START_DATE: "ChÆ°a Ä‘áº¿n thá»i gian má»Ÿ bĂ¡n {{name}}!",
    ADD_TO_CART_PRODUCT_AFTER_END_DATE: "Thá»i gian mua {{name}} Ä‘Ă£ háº¿t!",
    ADD_TO_CART_PRODUCT_ONLY_ONE: "Báº¡n chá»‰ Ä‘Æ°á»£c mua 1 {{name}} cĂ¹ng lĂºc.",
    GAME_RESULT_MESSAGE: "ChĂºc má»«ng báº¡n nháº­n Ä‘Æ°á»£c {{coupon_text}}. Nháº­p mĂ£: {{coupon_code}} Ä‘á»ƒ sá»­ dá»¥ng. Báº¡n cĂ²n {{spin_turn_left}} lÆ°á»£t quay.",
    GAME_MAX_TURN_MESSAGE: "Báº¡n Ä‘Ă£ háº¿t lÆ°á»£t quay.",
    HIDE_ELEMENT: "áº¨n pháº§n tá»­",
    SHOW_ELEMENT: "Hiá»‡n pháº§n tá»­",
    TOP_ELEMENT: "KĂ©o Section lĂªn Ä‘áº§u",
    SCROLL_ELEMENT: "KĂ©o tá»›i Section",
    SET_COOKIE: "Thiáº¿t láº­p Cookie"
}, LadiPageScript.const.LANGth = {
    ALERT_TITLE: "à¹à¸ˆà¹‰à¸‡à¹€à¸•à¸·à¸­à¸™",
    ALERT_BUTTON_TEXT: "à¸•à¸à¸¥à¸‡",
    GET_CODE_BUTTON_TEXT: "à¸ªà¹ˆà¸‡à¸£à¸«à¸±à¸ªà¹ƒà¸«à¸¡à¹ˆ",
    COPIED: "à¸„à¸±à¸”à¸¥à¸­à¸!",
    PASTED: "à¸§à¸²à¸‡à¹à¸¥à¹‰à¸§!",
    FAILED: "à¸¥à¹‰à¸¡à¹€à¸«à¸¥à¸§!",
    OPTION_NO_SELECT: "à¸§à¹ˆà¸²à¸‡",
    OPTION_TRUE: "à¹ƒà¸à¹ˆ",
    OPTION_FALSE: "à¹„à¸¡à¹ˆ",
    REQUEST_SEND_ERROR: "à¹€à¸à¸´à¸”à¸‚à¹‰à¸­à¸œà¸´à¸”à¸à¸¥à¸²à¸” à¹‚à¸›à¸£à¸”à¸¥à¸­à¸‡à¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡!",
    FORM_LOGIN_SEND_ERROR: "à¸„à¸µà¸¢à¹Œà¸‚à¸­à¸‡à¸„à¸¸à¸“à¹„à¸¡à¹ˆà¸–à¸¹à¸à¸•à¹‰à¸­à¸‡à¸«à¸£à¸·à¸­à¸«à¸¡à¸”à¸­à¸²à¸¢à¸¸à¹à¸¥à¹‰à¸§!",
    FORM_SEND_DATA_NO_CONFIG: "à¹‚à¸›à¸£à¸”à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸à¸à¸²à¸£à¸•à¸±à¹‰à¸‡à¸„à¹ˆà¸²à¹à¸à¸à¸Ÿà¸­à¸£à¹Œà¸¡à¸‚à¸­à¸‡à¸„à¸¸à¸“à¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡!",
    FORM_UPLOAD_FILE_MAX_SIZE_ERROR: "à¸„à¸¸à¸“à¸ªà¸²à¸¡à¸²à¸£à¸–à¸­à¸±à¸›à¹‚à¸«à¸¥à¸”à¹„à¸Ÿà¸¥à¹Œà¸—à¸µà¹ˆà¸¡à¸µà¸‚à¸™à¸²à¸”à¸ªà¸¹à¸‡à¸ªà¸¸à¸” {{max_size}} MB à¹€à¸—à¹ˆà¸²à¸™à¸±à¹‰à¸™",
    FORM_UPLOAD_FILE_MAX_LENGTH_ERROR: "à¸„à¸¸à¸“à¸ªà¸²à¸¡à¸²à¸£à¸–à¸­à¸±à¸›à¹‚à¸«à¸¥à¸”à¹„à¸Ÿà¸¥à¹Œà¹„à¸”à¹‰à¸„à¸£à¸±à¹‰à¸‡à¸¥à¸° {{max_length}} à¹„à¸Ÿà¸¥à¹Œà¹€à¸—à¹ˆà¸²à¸™à¸±à¹‰à¸™",
    FORM_CAPTCHA_ERROR: "à¹‚à¸›à¸£à¸”à¹à¸ˆà¹‰à¸‡à¹ƒà¸«à¹‰à¹€à¸£à¸²à¸—à¸£à¸²à¸à¸§à¹ˆà¸²à¸„à¸¸à¸“à¹„à¸¡à¹ˆà¹ƒà¸à¹ˆà¸«à¸¸à¹ˆà¸™à¸¢à¸™à¸•à¹Œ!",
    FORM_CAPTCHA_LOADING: "à¹‚à¸›à¸£à¸”à¸£à¸­à¹ƒà¸™à¸‚à¸“à¸°à¸—à¸µà¹ˆà¹€à¸£à¸²à¸à¸³à¸¥à¸±à¸‡à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸à¸•à¸±à¸§à¸•à¸™à¸‚à¸­à¸‡à¸„à¸¸à¸“!",
    FORM_THANKYOU_MESSAGE_DEFAULT: "à¸‚à¸­à¸à¸„à¸¸à¸“à¸—à¸µà¹ˆà¹ƒà¸«à¹‰à¸„à¸§à¸²à¸¡à¸ªà¸™à¹ƒà¸ˆ!",
    FORM_INPUT_REQUIRED_ERROR: "à¸à¸£à¸¸à¸“à¸²à¸›à¹‰à¸­à¸™à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸—à¸µà¹ˆà¸ˆà¸³à¹€à¸›à¹‡à¸™à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”!",
    FORM_INPUT_EMAIL_REGEX: "à¹‚à¸›à¸£à¸”à¸›à¹‰à¸­à¸™à¸£à¸¹à¸›à¹à¸à¸à¸­à¸µà¹€à¸¡à¸¥à¸—à¸µà¹ˆà¸–à¸¹à¸à¸•à¹‰à¸­à¸‡!",
    FORM_INPUT_TEXT_REGEX: "à¹‚à¸›à¸£à¸”à¸›à¹‰à¸­à¸™à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸”à¹‰à¸§à¸¢à¸£à¸¹à¸›à¹à¸à¸à¸—à¸µà¹ˆà¸–à¸¹à¸à¸•à¹‰à¸­à¸‡!",
    PRODUCT: "à¸ªà¸´à¸™à¸„à¹‰à¸²",
    SERVICE: "à¸à¸£à¸´à¸à¸²à¸£",
    TICKET: "à¸•à¸±à¹‹à¸§",
    REVIEW_TEXT_UNIT: "à¸à¸—à¸§à¸´à¸ˆà¸²à¸£à¸“à¹Œ",
    REVIEW_TEXT_DESCRIPTION: "à¸à¸—à¸§à¸´à¸ˆà¸²à¸£à¸“à¹Œà¸œà¸¥à¸´à¸•à¸ à¸±à¸“à¸‘à¹Œ",
    REVIEW_TEXT_SORT_1: "à¸ˆà¸±à¸”à¹€à¸£à¸µà¸¢à¸‡à¸•à¸²à¸¡:",
    REVIEW_TEXT_SORT_2: "à¸¥à¹ˆà¸²à¸ªà¸¸à¸”",
    REVIEW_TEXT_OPERATOR_1: "à¸à¸£à¸­à¸‡à¹‚à¸”à¸¢:",
    REVIEW_TEXT_OPERATOR_2: "à¸­à¸­à¸¥à¸ªà¸•à¸²à¸£à¹Œ",
    ADD_TO_CART_NO_CART: "à¸£à¸–à¹€à¸‚à¹‡à¸™à¸‚à¸­à¸‡à¸„à¸¸à¸“à¸§à¹ˆà¸²à¸‡à¹€à¸›à¸¥à¹ˆà¸²",
    ADD_TO_CART_QUANTITY_REQUIRED: "à¸à¸£à¸¸à¸“à¸²à¸£à¸°à¸à¸¸à¸„à¸¸à¸“à¸ à¸²à¸à¸‚à¸­à¸‡à¸„à¸¸à¸“!",
    ADD_TO_CART_NO_PRODUCT: "à¹„à¸¡à¹ˆà¸à¸à¸‚à¹‰à¸­à¸¡à¸¹à¸¥ {{name}} à¹‚à¸›à¸£à¸”à¸¥à¸­à¸‡à¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡!",
    ADD_TO_CART_PRODUCT_REQUIRED: "à¹‚à¸›à¸£à¸”à¹€à¸¥à¸·à¸­à¸ {{name}}!",
    ADD_TO_CART_NO_QUANTITY: "{{name}} à¸ªà¸´à¸™à¸„à¹‰à¸²à¸«à¸¡à¸”!",
    ADD_TO_CART_MAX_QUANTITY: "à¸„à¸¸à¸“à¸ªà¸²à¸¡à¸²à¸£à¸–à¸‹à¸·à¹‰à¸­à¹„à¸”à¹‰à¸ªà¸¹à¸‡à¸ªà¸¸à¸” {{max}} {{name}} à¹€à¸—à¹ˆà¸²à¸™à¸±à¹‰à¸™",
    ADD_TO_CART_PRODUCT_BEFORE_START_DATE: "à¸¢à¸±à¸‡à¹„à¸¡à¹ˆà¸–à¸¶à¸‡à¹€à¸§à¸¥à¸²à¹€à¸›à¸´à¸”à¸—à¸³à¸à¸²à¸£à¸‚à¸­à¸‡ {{name}} yet!",
    ADD_TO_CART_PRODUCT_AFTER_END_DATE: "à¹€à¸§à¸¥à¸²à¹€à¸›à¸´à¸”à¸‚à¸­à¸‡ {{name}} à¸ªà¸´à¹‰à¸™à¸ªà¸¸à¸”à¸¥à¸‡à¹à¸¥à¹‰à¸§!",
    ADD_TO_CART_PRODUCT_ONLY_ONE: "à¸„à¸¸à¸“à¸ªà¸²à¸¡à¸²à¸£à¸–à¸‹à¸·à¹‰à¸­à¹„à¸”à¹‰à¸ªà¸¹à¸‡à¸ªà¸¸à¸” 1 {{name}} à¸•à¹ˆà¸­à¸„à¸£à¸±à¹‰à¸‡",
    GAME_RESULT_MESSAGE: "à¸‚à¸­à¹à¸ªà¸”à¸‡à¸„à¸§à¸²à¸¡à¸¢à¸´à¸™à¸”à¸µ! à¸„à¸¸à¸“à¹„à¸”à¹‰à¸£à¸±à¸ {{coupon_text}} à¹€à¸›à¹‡à¸™à¸‚à¸­à¸‡à¸‚à¸§à¸±à¸ à¹‚à¸›à¸£à¸”à¹ƒà¸ªà¹ˆà¸£à¸«à¸±à¸ªà¸„à¸¹à¸›à¸­à¸‡à¸‚à¸­à¸‡à¸„à¸¸à¸“: {{coupon_code}} à¸„à¸¸à¸“à¹€à¸«à¸¥à¸·à¸­à¸­à¸µà¸ {{spin_turn_left}} à¹€à¸¥à¸µà¹‰à¸¢à¸§",
    GAME_MAX_TURN_MESSAGE: "à¸„à¸¸à¸“à¹„à¸¡à¹ˆà¹„à¸”à¹‰à¸­à¸¢à¸¹à¹ˆà¹ƒà¸™à¹€à¸—à¸´à¸£à¹Œà¸™",
    HIDE_ELEMENT: "à¸‹à¹ˆà¸­à¸™à¸­à¸‡à¸„à¹Œà¸›à¸£à¸°à¸à¸­à¸",
    SHOW_ELEMENT: "à¹à¸ªà¸”à¸‡à¸­à¸‡à¸„à¹Œà¸›à¸£à¸°à¸à¸­à¸",
    TOP_ELEMENT: "à¸”à¸¶à¸‡à¸ªà¹ˆà¸§à¸™à¸‚à¸¶à¹‰à¸™à¸”à¹‰à¸²à¸™à¸à¸™",
    SCROLL_ELEMENT: "à¹€à¸¥à¸·à¹ˆà¸­à¸™à¹„à¸›à¸—à¸µà¹ˆà¸ªà¹ˆà¸§à¸™",
    SET_COOKIE: "à¹€à¸à¸´à¹ˆà¸¡à¸„à¸¸à¸à¸à¸µà¹‰"
}, LadiPageScript.const.LANGid = {
    ALERT_TITLE: "Peringatan",
    ALERT_BUTTON_TEXT: "Oke",
    GET_CODE_BUTTON_TEXT: "Kirim ulang kode",
    COPIED: "Disalin!",
    PASTED: "Ditempelkan!",
    FAILED: "Gagal!",
    OPTION_NO_SELECT: "Kosong",
    OPTION_TRUE: "Ya",
    OPTION_FALSE: "Tidak",
    REQUEST_SEND_ERROR: "Terjadi kesalahan, harap coba lagi!",
    FORM_LOGIN_SEND_ERROR: "Kunci Anda tidak valid atau telah kedaluwarsa!",
    FORM_SEND_DATA_NO_CONFIG: "Silakan periksa kembali pengaturan Formulir Anda!",
    FORM_UPLOAD_FILE_MAX_SIZE_ERROR: "Anda hanya dapat mengupload file dengan ukuran maksimal {{max_size}}MB.",
    FORM_UPLOAD_FILE_MAX_LENGTH_ERROR: "Anda hanya dapat mengupload {{max_length}} file sekaligus.",
    FORM_CAPTCHA_ERROR: "Harap beri tahu kami bahwa Anda bukan robot!",
    FORM_CAPTCHA_LOADING: "Harap tunggu sementara kami sedang memeriksa identitas Anda!",
    FORM_THANKYOU_MESSAGE_DEFAULT: "Terima kasih atas perhatian Anda!",
    FORM_INPUT_REQUIRED_ERROR: "Masukkan semua informasi yang diperlukan!",
    FORM_INPUT_EMAIL_REGEX: "Masukkan format email yang valid!",
    FORM_INPUT_TEXT_REGEX: "Masukkan dengan format yang valid!",
    PRODUCT: "Produk",
    SERVICE: "Layanan",
    TICKET: "Tiket",
    REVIEW_TEXT_UNIT: "ulasan",
    REVIEW_TEXT_DESCRIPTION: "Ulasan Produk",
    REVIEW_TEXT_SORT_1: "Urutkan menurut:",
    REVIEW_TEXT_SORT_2: "Terbaru",
    REVIEW_TEXT_OPERATOR_1: "Filter menurut:",
    REVIEW_TEXT_OPERATOR_2: "Semua Bintang",
    ADD_TO_CART_NO_CART: "Keranjang Anda kosong",
    ADD_TO_CART_QUANTITY_REQUIRED: "Masukkan jumlah Anda!",
    ADD_TO_CART_NO_PRODUCT: "Informasi tidak ditemukan {{name}}, coba lagi!",
    ADD_TO_CART_PRODUCT_REQUIRED: "Silakan pilih {{name}}!",
    ADD_TO_CART_NO_QUANTITY: "{{name}} kehabisan stok!",
    ADD_TO_CART_MAX_QUANTITY: "Anda hanya dapat membeli dengan maksimum {{max}} {{name}}.",
    ADD_TO_CART_PRODUCT_BEFORE_START_DATE: "Ini belum jam buka {{name}} belum!",
    ADD_TO_CART_PRODUCT_AFTER_END_DATE: "Waktu buka {{name}} telah berakhir!",
    ADD_TO_CART_PRODUCT_ONLY_ONE: "Anda hanya dapat membeli hingga 1 {{name}} sekaligus.",
    GAME_RESULT_MESSAGE: "Selamat! Anda telah diberikan {{coupon_text}}. Masukkan kode kupon Anda: {{coupon_code}}. Anda memiliki {{spin_turn_left}} putaran tersisa.",
    GAME_MAX_TURN_MESSAGE: "Anda kehabisan giliran.",
    HIDE_ELEMENT: "Sembunyikan elemen",
    SHOW_ELEMENT: "Tampilkan elemen",
    TOP_ELEMENT: "Tarik Bagian ke atas",
    SCROLL_ELEMENT: "Gulir ke Bagian",
    SET_COOKIE: "Tambahkan Cookie"
}, LadiPageScript.const.LANGms = {
    ALERT_TITLE: "Amaran",
    ALERT_BUTTON_TEXT: "OK",
    GET_CODE_BUTTON_TEXT: "Hantar semula kod",
    COPIED: "Disalin!",
    PASTED: "Tampal!",
    FAILED: "Gagal!",
    OPTION_NO_SELECT: "Kosong",
    OPTION_TRUE: "Ya",
    OPTION_FALSE: "Tidak",
    REQUEST_SEND_ERROR: "Ralat telah berlaku, sila cuba lagi!",
    FORM_LOGIN_SEND_ERROR: "Kunci anda tidak sah atau telah tamat tempoh!",
    FORM_SEND_DATA_NO_CONFIG: "Sila semak semula tetapan Borang anda!",
    FORM_UPLOAD_FILE_MAX_SIZE_ERROR: "Anda hanya boleh memuat naik fail dengan saiz maksimum {{max_size}}MB.",
    FORM_UPLOAD_FILE_MAX_LENGTH_ERROR: "Anda hanya boleh memuat naik {{max_length}} fail sekali gus.",
    FORM_CAPTCHA_ERROR: "Sila maklumkan kepada kami bahawa anda bukan robot!",
    FORM_CAPTCHA_LOADING: "Sila tunggu sementara kami menyemak identiti anda!",
    FORM_THANKYOU_MESSAGE_DEFAULT: "Terima kasih atas perhatian anda!",
    FORM_INPUT_REQUIRED_ERROR: "Sila masukkan semua maklumat yang diperlukan!",
    FORM_INPUT_EMAIL_REGEX: "Sila masukkan format e-mel yang sah!",
    FORM_INPUT_TEXT_REGEX: "Sila masukkan dengan format yang sah!",
    PRODUCT: "Produk",
    SERVICE: "Perkhidmatan",
    TICKET: "Tiket",
    REVIEW_TEXT_UNIT: "ulasan",
    REVIEW_TEXT_DESCRIPTION: "Ulasan Produk",
    REVIEW_TEXT_SORT_1: "Isih mengikut:",
    REVIEW_TEXT_SORT_2: "Terbaru",
    REVIEW_TEXT_OPERATOR_1: "Tapis mengikut:",
    REVIEW_TEXT_OPERATOR_2: "All Star",
    ADD_TO_CART_NO_CART: "Keranjang anda kosong",
    ADD_TO_CART_QUANTITY_REQUIRED: "Sila masukkan kuantiti anda!",
    ADD_TO_CART_NO_PRODUCT: "Maklumat tidak ditemui {{name}}, cuba lagi!",
    ADD_TO_CART_PRODUCT_REQUIRED: "Sila pilih {{name}}!",
    ADD_TO_CART_NO_QUANTITY: "{{name}} kehabisan stok!",
    ADD_TO_CART_MAX_QUANTITY: "Anda hanya boleh membeli dengan maksimum {{max}} {{name}}.",
    ADD_TO_CART_PRODUCT_BEFORE_START_DATE: "Ini bukan masa pembukaan {{name}} lagi!",
    ADD_TO_CART_PRODUCT_AFTER_END_DATE: "Masa pembukaan {{name}} telah tamat!",
    ADD_TO_CART_PRODUCT_ONLY_ONE: "Anda hanya boleh membeli sehingga 1 {{name}} sekali gus.",
    GAME_RESULT_MESSAGE: "Tahniah! Anda telah dikurniakan {{coupon_text}}. Sila masukkan kod kupon anda: {{coupon_code}}. Anda mempunyai baki {{spin_turn_left}} pusingan.",
    GAME_MAX_TURN_MESSAGE: "Anda kehabisan giliran.",
    HIDE_ELEMENT: "Sembunyikan elemen",
    SHOW_ELEMENT: "Tunjukkan elemen",
    TOP_ELEMENT: "Tarik Bahagian ke atas",
    SCROLL_ELEMENT: "Tatal ke Bahagian",
    SET_COOKIE: "Tambah Kuki"
};
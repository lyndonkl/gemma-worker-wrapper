(() => {
  // node_modules/@mediapipe/tasks-genai/genai_bundle.mjs
  var t = "undefined" != typeof self ? self : {};
  var e;
  var n = "undefined" != typeof TextEncoder;
  function r(t2) {
    if (n)
      t2 = (e ||= new TextEncoder()).encode(t2);
    else {
      let e2 = 0;
      const n2 = new Uint8Array(3 * t2.length);
      for (let i2 = 0; i2 < t2.length; i2++) {
        var r2 = t2.charCodeAt(i2);
        if (r2 < 128)
          n2[e2++] = r2;
        else {
          if (r2 < 2048)
            n2[e2++] = r2 >> 6 | 192;
          else {
            if (r2 >= 55296 && r2 <= 57343) {
              if (r2 <= 56319 && i2 < t2.length) {
                const o2 = t2.charCodeAt(++i2);
                if (o2 >= 56320 && o2 <= 57343) {
                  r2 = 1024 * (r2 - 55296) + o2 - 56320 + 65536, n2[e2++] = r2 >> 18 | 240, n2[e2++] = r2 >> 12 & 63 | 128, n2[e2++] = r2 >> 6 & 63 | 128, n2[e2++] = 63 & r2 | 128;
                  continue;
                }
                i2--;
              }
              r2 = 65533;
            }
            n2[e2++] = r2 >> 12 | 224, n2[e2++] = r2 >> 6 & 63 | 128;
          }
          n2[e2++] = 63 & r2 | 128;
        }
      }
      t2 = e2 === n2.length ? n2 : n2.subarray(0, e2);
    }
    return t2;
  }
  var i;
  var o;
  t: {
    for (s = ["CLOSURE_FLAGS"], a = t, c = 0; c < s.length; c++)
      if (null == (a = a[s[c]])) {
        o = null;
        break t;
      }
    o = a;
  }
  var s;
  var a;
  var c;
  var u;
  var l = o && o[610401301];
  function h() {
    var e2 = t.navigator;
    return e2 && (e2 = e2.userAgent) ? e2 : "";
  }
  i = null != l && l;
  var f = t.navigator;
  u = f && f.userAgentData || null;
  var d = {};
  var p = null;
  function g(t2) {
    const e2 = t2.length;
    let n2 = 3 * e2 / 4;
    n2 % 3 ? n2 = Math.floor(n2) : -1 != "=.".indexOf(t2[e2 - 1]) && (n2 = -1 != "=.".indexOf(t2[e2 - 2]) ? n2 - 2 : n2 - 1);
    const r2 = new Uint8Array(n2);
    let i2 = 0;
    return function(t3, e3) {
      function n3(e4) {
        for (; r3 < t3.length; ) {
          const e5 = t3.charAt(r3++), n4 = p[e5];
          if (null != n4)
            return n4;
          if (!/^[\s\xa0]*$/.test(e5))
            throw Error("Unknown base64 encoding at char: " + e5);
        }
        return e4;
      }
      m();
      let r3 = 0;
      for (; ; ) {
        const t4 = n3(-1), r4 = n3(0), i3 = n3(64), o2 = n3(64);
        if (64 === o2 && -1 === t4)
          break;
        e3(t4 << 2 | r4 >> 4), 64 != i3 && (e3(r4 << 4 & 240 | i3 >> 2), 64 != o2 && e3(i3 << 6 & 192 | o2));
      }
    }(t2, function(t3) {
      r2[i2++] = t3;
    }), i2 !== n2 ? r2.subarray(0, i2) : r2;
  }
  function m() {
    if (!p) {
      p = {};
      var t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), e2 = ["+/=", "+/", "-_=", "-_.", "-_"];
      for (let n2 = 0; n2 < 5; n2++) {
        const r2 = t2.concat(e2[n2].split(""));
        d[n2] = r2;
        for (let t3 = 0; t3 < r2.length; t3++) {
          const e3 = r2[t3];
          void 0 === p[e3] && (p[e3] = t3);
        }
      }
    }
  }
  var _ = "undefined" != typeof Uint8Array;
  var y = !(!(i && u && u.brands.length > 0) && (-1 != h().indexOf("Trident") || -1 != h().indexOf("MSIE"))) && "function" == typeof btoa;
  var b = /[-_.]/g;
  var v = { "-": "+", _: "/", ".": "=" };
  function w(t2) {
    return v[t2] || "";
  }
  function S(t2) {
    if (!y)
      return g(t2);
    b.test(t2) && (t2 = t2.replace(b, w)), t2 = atob(t2);
    const e2 = new Uint8Array(t2.length);
    for (let n2 = 0; n2 < t2.length; n2++)
      e2[n2] = t2.charCodeAt(n2);
    return e2;
  }
  function A(t2) {
    return _ && null != t2 && t2 instanceof Uint8Array;
  }
  var E = {};
  function T() {
    return P ||= new I(null, E);
  }
  var I = class {
    constructor(t2, e2) {
      if (O(e2), this.i = t2, null != t2 && 0 === t2.length)
        throw Error("ByteString should be constructed with non-empty values");
    }
  };
  var P;
  var L;
  function O(t2) {
    if (t2 !== E)
      throw Error("illegal external caller");
  }
  function U(t2, e2) {
    t2.__closure__error__context__984382 || (t2.__closure__error__context__984382 = {}), t2.__closure__error__context__984382.severity = e2;
  }
  function B(t2) {
    return U(t2 = Error(t2), "warning"), t2;
  }
  var k = "function" == typeof Symbol && "symbol" == typeof Symbol();
  function x(t2, e2, n2 = false) {
    return "function" == typeof Symbol && "symbol" == typeof Symbol() ? n2 && Symbol.for && t2 ? Symbol.for(t2) : null != t2 ? Symbol(t2) : Symbol() : e2;
  }
  var N = x("jas", void 0, true);
  var j = x(void 0, "1oa");
  var F = x(void 0, "0actk");
  var D = k ? N : "ca";
  var R = { ca: { value: 0, configurable: true, writable: true, enumerable: false } };
  var V = Object.defineProperties;
  function M(t2, e2) {
    k || D in t2 || V(t2, R), t2[D] |= e2;
  }
  function C(t2, e2) {
    k || D in t2 || V(t2, R), t2[D] = e2;
  }
  var G;
  var z = {};
  function W(t2) {
    return null !== t2 && "object" == typeof t2 && !Array.isArray(t2) && t2.constructor === Object;
  }
  var $ = [];
  function H(t2) {
    if (2 & t2)
      throw Error();
  }
  C($, 55), G = Object.freeze($);
  var q = Object.freeze({});
  function K() {
    return "function" == typeof BigInt;
  }
  function Y(t2) {
    return t2.ja = true, t2;
  }
  var J = Y((t2) => "number" == typeof t2);
  var X = Y((t2) => "string" == typeof t2);
  var Z = Y((t2) => "boolean" == typeof t2);
  var Q = "function" == typeof t.BigInt && "bigint" == typeof t.BigInt(0);
  var tt = Y((t2) => Q ? t2 >= nt && t2 <= it : "-" === t2[0] ? ot(t2, et) : ot(t2, rt));
  var et = Number.MIN_SAFE_INTEGER.toString();
  var nt = Q ? BigInt(Number.MIN_SAFE_INTEGER) : void 0;
  var rt = Number.MAX_SAFE_INTEGER.toString();
  var it = Q ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
  function ot(t2, e2) {
    if (t2.length > e2.length)
      return false;
    if (t2.length < e2.length || t2 === e2)
      return true;
    for (let n2 = 0; n2 < t2.length; n2++) {
      const r2 = t2[n2], i2 = e2[n2];
      if (r2 > i2)
        return false;
      if (r2 < i2)
        return true;
    }
  }
  var st;
  var at = 0;
  var ct = 0;
  function ut(t2) {
    const e2 = t2 >>> 0;
    at = e2, ct = (t2 - e2) / 4294967296 >>> 0;
  }
  function lt(t2) {
    if (t2 < 0) {
      ut(-t2);
      const [e2, n2] = gt(at, ct);
      at = e2 >>> 0, ct = n2 >>> 0;
    } else
      ut(t2);
  }
  function ht(t2, e2) {
    const n2 = 4294967296 * e2 + (t2 >>> 0);
    return Number.isSafeInteger(n2) ? n2 : ft(t2, e2);
  }
  function ft(t2, e2) {
    if (t2 >>>= 0, (e2 >>>= 0) <= 2097151)
      var n2 = "" + (4294967296 * e2 + t2);
    else
      K() ? n2 = "" + (BigInt(e2) << BigInt(32) | BigInt(t2)) : (t2 = (16777215 & t2) + 6777216 * (n2 = 16777215 & (t2 >>> 24 | e2 << 8)) + 6710656 * (e2 = e2 >> 16 & 65535), n2 += 8147497 * e2, e2 *= 2, t2 >= 1e7 && (n2 += t2 / 1e7 >>> 0, t2 %= 1e7), n2 >= 1e7 && (e2 += n2 / 1e7 >>> 0, n2 %= 1e7), n2 = e2 + dt(n2) + dt(t2));
    return n2;
  }
  function dt(t2) {
    return t2 = String(t2), "0000000".slice(t2.length) + t2;
  }
  function pt(t2) {
    if (t2.length < 16)
      lt(Number(t2));
    else if (K())
      t2 = BigInt(t2), at = Number(t2 & BigInt(4294967295)) >>> 0, ct = Number(t2 >> BigInt(32) & BigInt(4294967295));
    else {
      const e2 = +("-" === t2[0]);
      ct = at = 0;
      const n2 = t2.length;
      for (let r2 = e2, i2 = (n2 - e2) % 6 + e2; i2 <= n2; r2 = i2, i2 += 6) {
        const e3 = Number(t2.slice(r2, i2));
        ct *= 1e6, at = 1e6 * at + e3, at >= 4294967296 && (ct += Math.trunc(at / 4294967296), ct >>>= 0, at >>>= 0);
      }
      if (e2) {
        const [t3, e3] = gt(at, ct);
        at = t3, ct = e3;
      }
    }
  }
  function gt(t2, e2) {
    return e2 = ~e2, t2 ? t2 = 1 + ~t2 : e2 += 1, [t2, e2];
  }
  function mt(t2) {
    return Array.prototype.slice.call(t2);
  }
  var _t = "function" == typeof BigInt ? BigInt.asIntN : void 0;
  var yt = "function" == typeof BigInt ? BigInt.asUintN : void 0;
  var bt = Number.isSafeInteger;
  var vt = Number.isFinite;
  var wt = Math.trunc;
  function St(t2) {
    if (null != t2 && "number" != typeof t2)
      throw Error(`Value of float/double field must be a number, found ${typeof t2}: ${t2}`);
    return t2;
  }
  function At(t2) {
    return null == t2 || "number" == typeof t2 ? t2 : "NaN" === t2 || "Infinity" === t2 || "-Infinity" === t2 ? Number(t2) : void 0;
  }
  var Et = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  function Tt(t2) {
    switch (typeof t2) {
      case "bigint":
        return true;
      case "number":
        return vt(t2);
      case "string":
        return Et.test(t2);
      default:
        return false;
    }
  }
  function It(t2) {
    if ("number" != typeof t2)
      throw B("int32");
    if (!vt(t2))
      throw B("int32");
    return 0 | t2;
  }
  function Pt(t2) {
    return null == t2 ? t2 : It(t2);
  }
  function Lt(t2) {
    if (null == t2)
      return t2;
    if ("string" == typeof t2 && t2)
      t2 = +t2;
    else if ("number" != typeof t2)
      return;
    return vt(t2) ? 0 | t2 : void 0;
  }
  function Ot(t2) {
    if (null != t2) {
      if ("number" != typeof t2)
        throw B("uint32");
      if (!vt(t2))
        throw B("uint32");
      t2 >>>= 0;
    }
    return t2;
  }
  function Ut(t2) {
    if (null == t2)
      return t2;
    if ("string" == typeof t2 && t2)
      t2 = +t2;
    else if ("number" != typeof t2)
      return;
    return vt(t2) ? t2 >>> 0 : void 0;
  }
  function Bt(t2) {
    if ("-" === t2[0])
      return false;
    const e2 = t2.length;
    return e2 < 20 || 20 === e2 && Number(t2.substring(0, 6)) < 184467;
  }
  function kt(t2) {
    if (null == t2)
      return t2;
    var e2 = typeof t2;
    if ("bigint" === e2)
      return String(yt(64, t2));
    if (Tt(t2)) {
      if ("string" === e2)
        return e2 = wt(Number(t2)), bt(e2) && e2 >= 0 ? t2 = String(e2) : (-1 !== (e2 = t2.indexOf(".")) && (t2 = t2.substring(0, e2)), Bt(t2) || (pt(t2), t2 = ft(at, ct))), t2;
      if ("number" === e2)
        return (t2 = wt(t2)) >= 0 && bt(t2) ? t2 : function(t3) {
          if (t3 < 0) {
            lt(t3);
            var e3 = ft(at, ct);
            return t3 = Number(e3), bt(t3) ? t3 : e3;
          }
          return Bt(e3 = String(t3)) ? e3 : (lt(t3), ht(at, ct));
        }(t2);
    }
  }
  function xt(t2) {
    return null == t2 || "string" == typeof t2 ? t2 : void 0;
  }
  function Nt(t2, e2, n2) {
    if (null != t2 && "object" == typeof t2 && t2.P === z)
      return t2;
    if (Array.isArray(t2)) {
      var r2 = 0 | t2[D], i2 = r2;
      return 0 === i2 && (i2 |= 32 & n2), (i2 |= 2 & n2) !== r2 && C(t2, i2), new e2(t2);
    }
  }
  function jt(t2, e2, n2, r2, i2) {
    r2 = r2 ? !!(32 & e2) : void 0;
    const o2 = [];
    var s = t2.length;
    let a, c, u2, l2, h2 = false;
    64 & e2 ? (256 & e2 ? (a = t2[--s], c = s) : (c = 4294967295, a = void 0), i2 || 512 & e2 || (h2 = true, u2 = a ? c - -1 : e2 >> 15 & 1023 || 536870912, c = u2 + -1)) : (c = 4294967295, 1 & e2 || (a = s && t2[s - 1], W(a) ? (c = --s, u2 = 0) : a = void 0));
    for (let e3 = 0; e3 < s; e3++) {
      let i3 = t2[e3];
      null != i3 && null != (i3 = n2(i3, r2)) && (e3 >= c ? (l2 ??= {})[e3 - -1] = i3 : o2[e3] = i3);
    }
    if (a)
      for (let e3 in a)
        null != (t2 = a[e3]) && null != (t2 = n2(t2, r2)) && ((s = +e3) < u2 ? o2[s + -1] = t2 : (l2 ??= {})[e3] = t2);
    return l2 && (h2 ? o2.push(l2) : o2[c] = l2), i2 && C(o2, 33522241 & e2 | (null != l2 ? 290 : 34)), o2;
  }
  function Ft(t2) {
    switch (typeof t2) {
      case "number":
        return Number.isFinite(t2) ? t2 : "" + t2;
      case "bigint":
        return tt(t2) ? Number(t2) : "" + t2;
      case "boolean":
        return t2 ? 1 : 0;
      case "object":
        if (Array.isArray(t2)) {
          var e2 = 0 | t2[D];
          return 0 === t2.length && 1 & e2 ? void 0 : jt(t2, e2, Ft, false, false);
        }
        if (t2.P === z)
          return Dt(t2);
        if (t2 instanceof I) {
          if (null == (e2 = t2.i))
            t2 = "";
          else if ("string" == typeof e2)
            t2 = e2;
          else {
            if (y) {
              for (var n2 = "", r2 = 0, i2 = e2.length - 10240; r2 < i2; )
                n2 += String.fromCharCode.apply(null, e2.subarray(r2, r2 += 10240));
              n2 += String.fromCharCode.apply(null, r2 ? e2.subarray(r2) : e2), e2 = btoa(n2);
            } else {
              void 0 === n2 && (n2 = 0), m(), n2 = d[n2], r2 = Array(Math.floor(e2.length / 3)), i2 = n2[64] || "";
              let t3 = 0, u2 = 0;
              for (; t3 < e2.length - 2; t3 += 3) {
                var o2 = e2[t3], s = e2[t3 + 1], a = e2[t3 + 2], c = n2[o2 >> 2];
                o2 = n2[(3 & o2) << 4 | s >> 4], s = n2[(15 & s) << 2 | a >> 6], a = n2[63 & a], r2[u2++] = c + o2 + s + a;
              }
              switch (c = 0, a = i2, e2.length - t3) {
                case 2:
                  a = n2[(15 & (c = e2[t3 + 1])) << 2] || i2;
                case 1:
                  e2 = e2[t3], r2[u2] = n2[e2 >> 2] + n2[(3 & e2) << 4 | c >> 4] + a + i2;
              }
              e2 = r2.join("");
            }
            t2 = t2.i = e2;
          }
          return t2;
        }
        return;
    }
    return t2;
  }
  function Dt(t2) {
    return jt(t2 = t2.m, 0 | t2[D], Ft, void 0, false);
  }
  var Rt;
  var Vt;
  function Mt(t2, e2, n2) {
    return t2 = Ct(t2, e2[0], e2[1], n2 ? 1 : 2), e2 !== Rt && n2 && M(t2, 8192), t2;
  }
  function Ct(e2, n2, r2, i2) {
    if (null == e2) {
      var o2 = 96;
      r2 ? (e2 = [r2], o2 |= 512) : e2 = [], n2 && (o2 = -33521665 & o2 | (1023 & n2) << 15);
    } else {
      if (!Array.isArray(e2))
        throw Error("narr");
      if (8192 & (o2 = 0 | e2[D]) || !(64 & o2) || 2 & o2 || function() {
        if (null != F) {
          var e3 = L ??= {}, n3 = e3[F] || 0;
          n3 >= 5 || (e3[F] = n3 + 1, U(e3 = Error(), "incident"), function(e4) {
            t.setTimeout(() => {
              throw e4;
            }, 0);
          }(e3));
        }
      }(), 1024 & o2)
        throw Error("farr");
      if (64 & o2)
        return 3 !== i2 || 16384 & o2 || C(e2, 16384 | o2), e2;
      if (1 === i2 || 2 === i2 || (o2 |= 64), r2 && (o2 |= 512, r2 !== e2[0]))
        throw Error("mid");
      t: {
        var s = (r2 = e2).length;
        if (s) {
          var a = s - 1;
          const t2 = r2[a];
          if (W(t2)) {
            if ((a -= n2 = 512 & (o2 |= 256) ? 0 : -1) >= 1024)
              throw Error("pvtlmt");
            for (var c in t2)
              (s = +c) < a && (r2[s + n2] = t2[c], delete t2[c]);
            o2 = -33521665 & o2 | (1023 & a) << 15;
            break t;
          }
        }
        if (n2) {
          if ((c = Math.max(n2, s - (512 & o2 ? 0 : -1))) > 1024)
            throw Error("spvt");
          o2 = -33521665 & o2 | (1023 & c) << 15;
        }
      }
    }
    return 3 === i2 && (o2 |= 16384), C(e2, o2), e2;
  }
  function Gt(t2, e2) {
    if ("object" != typeof t2)
      return t2;
    if (Array.isArray(t2)) {
      const r2 = 0 | t2[D];
      if (0 === t2.length && 1 & r2)
        return;
      return 2 & r2 ? t2 : ((n2 = e2) && (n2 = 0 === r2 || !!(32 & r2) && !(64 & r2 || !(16 & r2))), n2 ? (M(t2, 34), 4 & r2 && Object.freeze(t2), t2) : jt(t2, r2, Gt, void 0 !== e2, true));
      var n2;
    }
    return t2.P === z ? 2 & (n2 = 0 | (e2 = t2.m)[D]) ? t2 : jt(e2, n2, Gt, true, true) : t2 instanceof I ? t2 : void 0;
  }
  function zt(t2) {
    var e2 = t2.m;
    return 2 & (0 | e2[D]) ? ((e2 = (t2 = new t2.constructor(jt(e2, 0 | e2[D], Gt, true, true))).m)[D] &= -3, t2) : t2;
  }
  function Wt(t2, e2) {
    return $t(t2 = t2.m, 0 | t2[D], e2);
  }
  function $t(t2, e2, n2) {
    if (-1 === n2)
      return null;
    const r2 = n2 + (512 & e2 ? 0 : -1), i2 = t2.length - 1;
    return r2 >= i2 && 256 & e2 ? t2[i2][n2] : r2 <= i2 ? t2[r2] : void 0;
  }
  function Ht(t2, e2, n2) {
    const r2 = t2.m;
    let i2 = 0 | r2[D];
    return H(i2), qt(r2, i2, e2, n2), t2;
  }
  function qt(t2, e2, n2, r2) {
    const i2 = 512 & e2 ? 0 : -1, o2 = n2 + i2;
    var s = t2.length - 1;
    return o2 >= s && 256 & e2 ? (t2[s][n2] = r2, e2) : o2 <= s ? (t2[o2] = r2, e2) : (void 0 !== r2 && (n2 >= (s = e2 >> 15 & 1023 || 536870912) ? null != r2 && (t2[s + i2] = { [n2]: r2 }, C(t2, e2 |= 256)) : t2[o2] = r2), e2);
  }
  function Kt(t2, e2, n2, r2, i2) {
    const o2 = t2.m, s = 2 & (t2 = 0 | o2[D]) ? 1 : r2;
    i2 = !!i2;
    let a = 0 | (r2 = Yt(o2, t2, e2))[D];
    if (!(4 & a)) {
      4 & a && (r2 = mt(r2), a = ie(a, t2), t2 = qt(o2, t2, e2, r2));
      let i3 = 0, s2 = 0;
      for (; i3 < r2.length; i3++) {
        const t3 = n2(r2[i3]);
        null != t3 && (r2[s2++] = t3);
      }
      s2 < i3 && (r2.length = s2), a = Jt(a, t2), n2 = -2049 & (20 | a), a = n2 &= -4097, C(r2, a), 2 & a && Object.freeze(r2);
    }
    return 1 === s || 4 === s && 32 & a ? Xt(a) || (i2 = a, a |= 2, a !== i2 && C(r2, a), Object.freeze(r2)) : (2 === s && Xt(a) && (r2 = mt(r2), a = ie(a, t2), a = oe(a, t2, i2), C(r2, a), t2 = qt(o2, t2, e2, r2)), Xt(a) || (e2 = a, a = oe(a, t2, i2), a !== e2 && C(r2, a))), r2;
  }
  function Yt(t2, e2, n2) {
    return t2 = $t(t2, e2, n2), Array.isArray(t2) ? t2 : G;
  }
  function Jt(t2, e2) {
    return 0 === t2 && (t2 = ie(t2, e2)), 1 | t2;
  }
  function Xt(t2) {
    return !!(2 & t2) && !!(4 & t2) || !!(1024 & t2);
  }
  function Zt(t2, e2, n2) {
    let r2 = 0 | (t2 = t2.m)[D];
    if (H(r2), null == n2)
      qt(t2, r2, e2);
    else {
      var i2 = 0 | n2[D], o2 = i2, s = Xt(i2), a = s || Object.isFrozen(n2);
      for (s || (i2 = 0), a || (n2 = mt(n2), o2 = 0, i2 = oe(i2 = ie(i2, r2), r2, true), a = false), i2 |= 21, s = 0; s < n2.length; s++) {
        const t3 = n2[s], e3 = It(t3);
        Object.is(t3, e3) || (a && (n2 = mt(n2), o2 = 0, i2 = oe(i2 = ie(i2, r2), r2, true), a = false), n2[s] = e3);
      }
      i2 !== o2 && (a && (n2 = mt(n2), i2 = oe(i2 = ie(i2, r2), r2, true)), C(n2, i2)), qt(t2, r2, e2, n2);
    }
  }
  function Qt(t2, e2, n2, r2) {
    let i2 = 0 | (t2 = t2.m)[D];
    H(i2), qt(t2, i2, e2, ("0" === r2 ? 0 === Number(n2) : n2 === r2) ? void 0 : n2);
  }
  function te(t2) {
    if (k)
      return t2[j] ?? (t2[j] = /* @__PURE__ */ new Map());
    if (j in t2)
      return t2[j];
    const e2 = /* @__PURE__ */ new Map();
    return Object.defineProperty(t2, j, { value: e2 }), e2;
  }
  function ee(t2, e2, n2) {
    var r2 = Ur;
    let i2 = t2.get(r2);
    if (null != i2)
      return i2;
    i2 = 0;
    for (let t3 = 0; t3 < r2.length; t3++) {
      const o2 = r2[t3];
      null != $t(e2, n2, o2) && (0 !== i2 && (n2 = qt(e2, n2, i2)), i2 = o2);
    }
    return t2.set(r2, i2), i2;
  }
  function ne(t2, e2, n2) {
    var r2 = t2.m, i2 = 0 | r2[D], o2 = $t(r2, i2, n2);
    return (e2 = Nt(o2, e2, i2)) !== o2 && null != e2 && qt(r2, i2, n2, e2), null == (r2 = e2) || 2 & (i2 = 0 | (t2 = t2.m)[D]) || (o2 = zt(r2)) !== r2 && qt(t2, i2, n2, r2 = o2), r2;
  }
  function re(t2, e2, n2) {
    return null == n2 && (n2 = void 0), Ht(t2, e2, n2);
  }
  function ie(t2, e2) {
    return -1025 & (t2 = 32 | (2 & e2 ? 2 | t2 : -3 & t2));
  }
  function oe(t2, e2, n2) {
    return 32 & e2 && n2 || (t2 &= -33), t2;
  }
  function se(t2, e2, n2) {
    if (H(0 | t2.m[D]), e2 = (t2 = Kt(t2, e2, xt, 2, true)).push, "string" != typeof n2)
      throw Error();
    e2.call(t2, n2);
  }
  function ae(t2, e2, n2, r2) {
    var i2 = 0 | t2.m[D];
    H(i2);
    const o2 = t2.m, s = (t2 = !!(2 & i2)) ? 1 : 2;
    f2 &&= !t2;
    var a = 0 | (t2 = Yt(o2, i2, e2))[D];
    const c = !!(4 & a);
    if (!c) {
      var u2 = t2, l2 = i2, h2 = !!(2 & (a = Jt(a, i2)));
      h2 && (l2 |= 2);
      let e3 = !h2, r3 = true, o3 = 0, s2 = 0;
      for (; o3 < u2.length; o3++) {
        const t3 = Nt(u2[o3], n2, l2);
        if (t3 instanceof n2) {
          if (!h2) {
            const n3 = !!(2 & (0 | t3.m[D]));
            e3 &&= !n3, r3 &&= n3;
          }
          u2[s2++] = t3;
        }
      }
      s2 < o3 && (u2.length = s2), a |= 4, a = r3 ? 16 | a : -17 & a, C(u2, a = e3 ? 8 | a : -9 & a), h2 && Object.freeze(u2);
    }
    if (f2 && !(8 & a || !t2.length && (1 === s || 4 === s && 32 & a))) {
      Xt(a) && (t2 = mt(t2), a = ie(a, i2), i2 = qt(o2, i2, e2, t2));
      var f2 = t2;
      for (u2 = a, a = 0; a < f2.length; a++)
        (l2 = f2[a]) !== (h2 = zt(l2)) && (f2[a] = h2);
      u2 |= 8, C(f2, u2 = f2.length ? -17 & u2 : 16 | u2), a = u2;
    }
    1 === s || 4 === s && 32 & a ? Xt(a) || (e2 = a, (a |= !t2.length || 16 & a && (!c || 32 & a) ? 2 : 1024) !== e2 && C(t2, a), Object.freeze(t2)) : (2 === s && Xt(a) && (C(t2 = mt(t2), a = oe(a = ie(a, i2), i2, true)), i2 = qt(o2, i2, e2, t2)), Xt(a) || (e2 = a, (a = oe(a, i2, true)) !== e2 && C(t2, a))), e2 = t2, r2 = null != r2 ? r2 : new n2(), e2.push(r2), e2[D] = 2 & (0 | r2.m[D]) ? -9 & e2[D] : -17 & e2[D];
  }
  function ce(t2, e2) {
    return Ut(Wt(t2, e2)) ?? 0;
  }
  function ue(t2, e2, n2) {
    Qt(t2, e2, Pt(n2), 0);
  }
  function le(t2, e2, n2) {
    if (null != n2 && "string" != typeof n2)
      throw Error();
    Qt(t2, e2, n2, "");
  }
  function he(t2) {
    if ("string" == typeof t2)
      return { buffer: S(t2), F: false };
    if (Array.isArray(t2))
      return { buffer: new Uint8Array(t2), F: false };
    if (t2.constructor === Uint8Array)
      return { buffer: t2, F: false };
    if (t2.constructor === ArrayBuffer)
      return { buffer: new Uint8Array(t2), F: false };
    if (t2.constructor === I) {
      O(E);
      var e2 = t2.i;
      return { buffer: (null == (e2 = null == e2 || A(e2) ? e2 : "string" == typeof e2 ? S(e2) : null) ? e2 : t2.i = e2) || new Uint8Array(0), F: true };
    }
    if (t2 instanceof Uint8Array)
      return { buffer: new Uint8Array(t2.buffer, t2.byteOffset, t2.byteLength), F: false };
    throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
  }
  var fe = class {
    constructor(t2, e2) {
      this.m = Ct(t2, e2, void 0, 3);
    }
    toJSON() {
      return Dt(this);
    }
    F() {
      return !!(2 & (0 | this.m[D]));
    }
  };
  function de(t2) {
    return t2 ? /^\d+$/.test(t2) ? (pt(t2), new pe(at, ct)) : null : ge ||= new pe(0, 0);
  }
  fe.prototype.P = z, fe.prototype.toString = function() {
    return this.m.toString();
  };
  var pe = class {
    constructor(t2, e2) {
      this.j = t2 >>> 0, this.i = e2 >>> 0;
    }
  };
  var ge;
  function me(t2) {
    return t2 ? /^-?\d+$/.test(t2) ? (pt(t2), new _e(at, ct)) : null : ye ||= new _e(0, 0);
  }
  var _e = class {
    constructor(t2, e2) {
      this.j = t2 >>> 0, this.i = e2 >>> 0;
    }
  };
  var ye;
  function be(t2, e2, n2) {
    for (; n2 > 0 || e2 > 127; )
      t2.i.push(127 & e2 | 128), e2 = (e2 >>> 7 | n2 << 25) >>> 0, n2 >>>= 7;
    t2.i.push(e2);
  }
  function ve(t2, e2) {
    for (; e2 > 127; )
      t2.i.push(127 & e2 | 128), e2 >>>= 7;
    t2.i.push(e2);
  }
  function we(t2, e2) {
    if (e2 >= 0)
      ve(t2, e2);
    else {
      for (let n2 = 0; n2 < 9; n2++)
        t2.i.push(127 & e2 | 128), e2 >>= 7;
      t2.i.push(1);
    }
  }
  function Se(t2, e2) {
    0 !== e2.length && (t2.l.push(e2), t2.j += e2.length);
  }
  function Ae(t2, e2, n2) {
    ve(t2.i, 8 * e2 + n2);
  }
  function Ee(t2, e2) {
    return Ae(t2, e2, 2), e2 = t2.i.end(), Se(t2, e2), e2.push(t2.j), e2;
  }
  function Te(t2, e2) {
    var n2 = e2.pop();
    for (n2 = t2.j + t2.i.length() - n2; n2 > 127; )
      e2.push(127 & n2 | 128), n2 >>>= 7, t2.j++;
    e2.push(n2), t2.j++;
  }
  function Ie(t2, e2, n2) {
    Ae(t2, e2, 2), ve(t2.i, n2.length), Se(t2, t2.i.end()), Se(t2, n2);
  }
  function Pe() {
    const t2 = class {
      constructor() {
        throw Error();
      }
    };
    return Object.setPrototypeOf(t2, t2.prototype), t2;
  }
  var Le = Pe();
  var Oe = Pe();
  var Ue = Pe();
  var Be = Pe();
  var ke = Pe();
  var xe = Pe();
  var Ne = class {
    constructor(t2, e2) {
      this.i = t2, t2 = Le, this.j = !!t2 && e2 === t2 || false;
    }
  };
  function je(t2, e2, n2, r2, i2) {
    null != (e2 = Ge(e2, r2)) && (n2 = Ee(t2, n2), i2(e2, t2), Te(t2, n2));
  }
  var Fe = new Ne(je, Le);
  var De = new Ne(je, Le);
  var Re = Symbol();
  var Ve = Symbol();
  var Me;
  function Ce(t2) {
    var e2 = ze, n2 = We, r2 = t2[Re];
    if (r2)
      return r2;
    (r2 = {}).ia = t2, r2.O = function(t3) {
      switch (typeof t3) {
        case "boolean":
          return Rt ||= [0, void 0, true];
        case "number":
          return t3 > 0 ? void 0 : 0 === t3 ? Vt ||= [0, void 0] : [-t3, void 0];
        case "string":
          return [0, t3];
        case "object":
          return t3;
      }
    }(t2[0]);
    var i2 = t2[1];
    let o2 = 1;
    i2 && i2.constructor === Object && (r2.Z = i2, "function" == typeof (i2 = t2[++o2]) && (r2.da = true, Me ??= t2[o2 + 1], i2 = t2[o2 += 2]));
    const s = {};
    for (; i2 && Array.isArray(i2) && i2.length && "number" == typeof i2[0] && i2[0] > 0; ) {
      for (var a = 0; a < i2.length; a++)
        s[i2[a]] = i2;
      i2 = t2[++o2];
    }
    for (a = 1; void 0 !== i2; ) {
      let s2;
      "number" == typeof i2 && (a += i2, i2 = t2[++o2]);
      var c = void 0;
      if (i2 instanceof Ne ? s2 = i2 : (s2 = Fe, o2--), s2?.j) {
        i2 = t2[++o2], c = t2;
        var u2 = o2;
        "function" == typeof i2 && (i2 = i2(), c[u2] = i2), c = i2;
      }
      for (u2 = a + 1, "number" == typeof (i2 = t2[++o2]) && i2 < 0 && (u2 -= i2, i2 = t2[++o2]); a < u2; a++)
        c ? n2(r2, a, s2, c) : e2(r2, a, s2);
    }
    return t2[Re] = r2;
  }
  function Ge(t2, e2) {
    return t2 instanceof fe ? t2.m : Array.isArray(t2) ? Mt(t2, e2, false) : void 0;
  }
  function ze(t2, e2, n2) {
    t2[e2] = n2.i;
  }
  function We(t2, e2, n2, r2) {
    let i2, o2;
    const s = n2.i;
    t2[e2] = (t3, e3, n3) => s(t3, e3, n3, o2 ||= Ce(r2).O, i2 ||= $e(r2));
  }
  function $e(t2) {
    let e2 = t2[Ve];
    if (!e2) {
      const n2 = Ce(t2);
      e2 = (t3, e3) => He(t3, e3, n2), t2[Ve] = e2;
    }
    return e2;
  }
  function He(t2, e2, n2) {
    !function(t3, e3, n3) {
      const r2 = 512 & e3 ? 0 : -1, i2 = t3.length, o2 = i2 + ((e3 = 64 & e3 ? 256 & e3 : !!i2 && W(t3[i2 - 1])) ? -1 : 0);
      for (let e4 = 0; e4 < o2; e4++)
        n3(e4 - r2, t3[e4]);
      if (e3) {
        t3 = t3[i2 - 1];
        for (const e4 in t3)
          !isNaN(e4) && n3(+e4, t3[e4]);
      }
    }(t2, 0 | t2[D] | (n2.O[1] ? 512 : 0), (t3, r2) => {
      if (null != r2) {
        var i2 = function(t4, e3) {
          var n3 = t4[e3];
          if (n3)
            return n3;
          if ((n3 = t4.Z) && (n3 = n3[e3])) {
            var r3 = (n3 = Array.isArray(n3) ? n3[0] instanceof Ne ? n3 : [De, n3] : [n3, void 0])[0].i;
            if (n3 = n3[1]) {
              const e4 = $e(n3), i3 = Ce(n3).O;
              n3 = t4.da ? Me(i3, e4) : (t5, n4, o2) => r3(t5, n4, o2, i3, e4);
            } else
              n3 = r3;
            return t4[e3] = n3;
          }
        }(n2, t3);
        i2 && i2(e2, r2, t3);
      }
    });
  }
  var qe;
  var Ke = 0;
  var Ye = Ke;
  if (X(Ye)) {
    if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(Ye))
      throw Error(String(Ye));
  } else if ((qe = J(Ye)) && (qe = !Number.isSafeInteger(Ye)), qe)
    throw Error(String(Ye));
  function Je(t2, e2) {
    if (Array.isArray(e2)) {
      var n2 = 0 | e2[D];
      if (4 & n2)
        return e2;
      for (var r2 = 0, i2 = 0; r2 < e2.length; r2++) {
        const n3 = t2(e2[r2]);
        null != n3 && (e2[i2++] = n3);
      }
      return i2 < r2 && (e2.length = i2), C(e2, -6145 & (5 | n2)), 2 & n2 && Object.freeze(e2), e2;
    }
  }
  function Xe(t2, e2) {
    return new Ne(t2, e2);
  }
  function Ze(t2, e2, n2) {
    null != (e2 = At(e2)) && (Ae(t2, n2, 5), t2 = t2.i, (n2 = st ||= new DataView(new ArrayBuffer(8))).setFloat32(0, +e2, true), ct = 0, e2 = at = n2.getUint32(0, true), t2.i.push(e2 >>> 0 & 255), t2.i.push(e2 >>> 8 & 255), t2.i.push(e2 >>> 16 & 255), t2.i.push(e2 >>> 24 & 255));
  }
  function Qe(t2, e2, n2) {
    null != (e2 = Lt(e2)) && null != e2 && (Ae(t2, n2, 0), we(t2.i, e2));
  }
  function tn(t2, e2, n2) {
    null != (e2 = null == e2 || "boolean" == typeof e2 ? e2 : "number" == typeof e2 ? !!e2 : void 0) && (Ae(t2, n2, 0), t2.i.i.push(e2 ? 1 : 0));
  }
  function en(t2, e2, n2) {
    null != (e2 = xt(e2)) && Ie(t2, n2, r(e2));
  }
  function nn(t2, e2, n2, r2, i2) {
    null != (e2 = Ge(e2, r2)) && (n2 = Ee(t2, n2), i2(e2, t2), Te(t2, n2));
  }
  function rn(t2, e2, n2) {
    null != (e2 = Lt(e2)) && (e2 = parseInt(e2, 10), Ae(t2, n2, 0), we(t2.i, e2));
  }
  Q || (Ke = Z(Ke) ? Ke ? "1" : "0" : X(Ke) ? Ke.trim() || "0" : String(Ke));
  var on;
  var sn = Xe(Ze, ke);
  var an = Xe(Ze, ke);
  var cn = Xe(function(t2, e2, n2) {
    if (e2 = function(t3) {
      if (null == t3)
        return t3;
      var e3 = typeof t3;
      if ("bigint" === e3)
        return String(_t(64, t3));
      if (Tt(t3)) {
        if ("string" === e3) {
          if (e3 = wt(Number(t3)), bt(e3))
            t3 = String(e3);
          else if (-1 !== (e3 = t3.indexOf(".")) && (t3 = t3.substring(0, e3)), e3 = t3.length, !("-" === t3[0] ? e3 < 20 || 20 === e3 && Number(t3.substring(0, 7)) > -922337 : e3 < 19 || 19 === e3 && Number(t3.substring(0, 6)) < 922337))
            if (pt(t3), t3 = at, 2147483648 & (e3 = ct))
              if (K())
                t3 = "" + (BigInt(0 | e3) << BigInt(32) | BigInt(t3 >>> 0));
              else {
                const [n4, r2] = gt(t3, e3);
                t3 = "-" + ft(n4, r2);
              }
            else
              t3 = ft(t3, e3);
          return t3;
        }
        if ("number" === e3) {
          if (t3 = wt(t3), !bt(t3)) {
            lt(t3), e3 = at;
            var n3 = ct;
            (t3 = 2147483648 & n3) && (n3 = ~n3 >>> 0, 0 == (e3 = 1 + ~e3 >>> 0) && (n3 = n3 + 1 >>> 0)), t3 = "number" == typeof (e3 = ht(e3, n3)) ? t3 ? -e3 : e3 : t3 ? "-" + e3 : e3;
          }
          return t3;
        }
      }
    }(e2), null != e2) {
      if ("string" == typeof e2)
        me(e2);
      if (null != e2)
        switch (Ae(t2, n2, 0), typeof e2) {
          case "number":
            t2 = t2.i, lt(e2), be(t2, at, ct);
            break;
          case "bigint":
            n2 = BigInt.asUintN(64, e2), n2 = new _e(Number(n2 & BigInt(4294967295)), Number(n2 >> BigInt(32))), be(t2.i, n2.j, n2.i);
            break;
          default:
            n2 = me(e2), be(t2.i, n2.j, n2.i);
        }
    }
  }, Pe());
  var un = Xe(function(t2, e2, n2) {
    if (null != (e2 = kt(e2))) {
      if ("string" == typeof e2)
        de(e2);
      if (null != e2)
        switch (Ae(t2, n2, 0), typeof e2) {
          case "number":
            t2 = t2.i, lt(e2), be(t2, at, ct);
            break;
          case "bigint":
            n2 = BigInt.asUintN(64, e2), n2 = new pe(Number(n2 & BigInt(4294967295)), Number(n2 >> BigInt(32))), be(t2.i, n2.j, n2.i);
            break;
          default:
            n2 = de(e2), be(t2.i, n2.j, n2.i);
        }
    }
  }, Pe());
  var ln = Xe(Qe, Be);
  on = new Ne(function(t2, e2, n2) {
    if (null != (e2 = Je(Lt, e2)) && e2.length) {
      n2 = Ee(t2, n2);
      for (let n3 = 0; n3 < e2.length; n3++)
        we(t2.i, e2[n3]);
      Te(t2, n2);
    }
  }, Be);
  var hn;
  var fn = Xe(Qe, Be);
  var dn = Xe(Qe, Be);
  var pn = Xe(tn, Oe);
  var gn = Xe(tn, Oe);
  var mn = Xe(en, Ue);
  hn = new Ne(function(t2, e2, n2) {
    if (null != (e2 = Je(xt, e2)))
      for (let a = 0; a < e2.length; a++) {
        var i2 = t2, o2 = n2, s = e2[a];
        null != s && Ie(i2, o2, r(s));
      }
  }, Ue);
  var _n;
  var yn = Xe(en, Ue);
  var bn = Xe(en, Ue);
  var vn = function(t2, e2, n2 = Le) {
    return new Ne(e2, n2);
  }(0, function(t2, e2, n2, r2, i2) {
    if (Array.isArray(e2))
      for (let o2 = 0; o2 < e2.length; o2++)
        nn(t2, e2[o2], n2, r2, i2);
  });
  var wn = new Ne(nn, Le);
  var Sn = Xe(function(t2, e2, n2) {
    null != (e2 = Ut(e2)) && null != e2 && (Ae(t2, n2, 0), ve(t2.i, e2));
  }, Pe());
  var An = Xe(rn, xe);
  _n = new Ne(function(t2, e2, n2) {
    if (null != (e2 = Je(Lt, e2)) && e2.length) {
      n2 = Ee(t2, n2);
      for (let n3 = 0; n3 < e2.length; n3++)
        we(t2.i, e2[n3]);
      Te(t2, n2);
    }
  }, xe);
  var En = Xe(rn, xe);
  function Tn(t2) {
    return function() {
      const e2 = new class {
        constructor() {
          this.l = [], this.j = 0, this.i = new class {
            constructor() {
              this.i = [];
            }
            length() {
              return this.i.length;
            }
            end() {
              const t3 = this.i;
              return this.i = [], t3;
            }
          }();
        }
      }();
      He(this.m, e2, Ce(t2)), Se(e2, e2.i.end());
      const n2 = new Uint8Array(e2.j), r2 = e2.l, i2 = r2.length;
      let o2 = 0;
      for (let t3 = 0; t3 < i2; t3++) {
        const e3 = r2[t3];
        n2.set(e3, o2), o2 += e3.length;
      }
      return e2.l = [n2], n2;
    };
  }
  function In(t2, e2) {
    if (null != e2)
      if (Array.isArray(e2))
        Ht(t2, 2, jt(e2, 0, Ft, void 0, false));
      else {
        if (!("string" == typeof e2 || e2 instanceof I || A(e2)))
          throw Error("invalid value in Any.value field: " + e2 + " expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");
        if (null != e2) {
          if ("string" == typeof e2)
            e2 = e2 ? new I(e2, E) : T();
          else if (e2.constructor !== I) {
            if (!A(e2))
              throw Error();
            e2 = e2.length ? new I(new Uint8Array(e2), E) : T();
          }
        }
        Qt(t2, 2, e2, T());
      }
  }
  var Pn = class extends fe {
    constructor(t2) {
      super(t2);
    }
  };
  var Ln = [0, yn, Xe(function(t2, e2, n2) {
    if (null != e2) {
      if (e2 instanceof fe) {
        const r2 = e2.ka;
        return void (r2 && (e2 = r2(e2), null != e2 && Ie(t2, n2, he(e2).buffer)));
      }
      if (Array.isArray(e2))
        return;
    }
    null != (e2 = null == e2 || "string" == typeof e2 || e2 instanceof I ? e2 : void 0) && Ie(t2, n2, he(e2).buffer);
  }, Pe())];
  var On;
  var Un = globalThis.trustedTypes;
  function Bn(t2) {
    void 0 === On && (On = function() {
      let t3 = null;
      if (!Un)
        return t3;
      try {
        const e3 = (t4) => t4;
        t3 = Un.createPolicy("goog#html", { createHTML: e3, createScript: e3, createScriptURL: e3 });
      } catch (t4) {
      }
      return t3;
    }());
    var e2 = On;
    return new class {
      constructor(t3) {
        this.i = t3;
      }
      toString() {
        return this.i + "";
      }
    }(e2 ? e2.createScriptURL(t2) : t2);
  }
  function kn(t2, ...e2) {
    if (0 === e2.length)
      return Bn(t2[0]);
    let n2 = t2[0];
    for (let r2 = 0; r2 < e2.length; r2++)
      n2 += encodeURIComponent(e2[r2]) + t2[r2 + 1];
    return Bn(n2);
  }
  var xn = {};
  xn[336783863] = [0, mn, pn, -1, ln, [0, [1, 2, 3, 4, 5, 6, 7, 8, 9], wn, [0], wn, [0, pn, mn, pn, An, -1, _n, mn, -1, [0, pn, -1], An, pn, -1], wn, [0, mn, -2], wn, [0, ln, pn, 1, pn, -3], wn, [0, ln, An, pn, -1, on, An, -1], wn, [0, mn, -2], wn, [0, mn, An], wn, [0, An, mn, -1], wn, [0, An, -1]], [0, mn], pn, [0, [1, 3], [2, 4], wn, [0, on], -1, wn, [0, hn], -1, vn, [0, mn, -1]], mn];
  var Nn = class extends fe {
    constructor(t2) {
      super(t2);
    }
  };
  var jn = [0, cn, -1, gn, -3, cn, on, yn, fn, cn, -1, gn, fn, gn, -2, yn];
  var Fn = class extends fe {
    constructor(t2) {
      super(t2, 500);
    }
    L(t2) {
      return re(this, 7, t2);
    }
  };
  var Dn = [-1, {}];
  var Rn = [0, mn, 1, Dn];
  var Vn = [0, mn, hn, Dn];
  function Mn(t2, e2) {
    ae(t2, 1, Fn, e2);
  }
  var Cn = class extends fe {
    constructor(t2) {
      super(t2, 500);
    }
    L(t2) {
      return re(this, 1001, t2);
    }
  };
  Cn.prototype.i = Tn([-500, vn, [-500, yn, -1, hn, -3, [-2, xn, pn], vn, Ln, fn, -1, Rn, Vn, vn, [0, yn, gn], yn, jn, fn, hn, 987, hn], 4, vn, [-500, mn, -1, [-1, {}], 998, mn], vn, [-500, mn, hn, -1, [-2, {}, pn], 997, hn, -1], fn, vn, [-500, mn, hn, Dn, 998, hn], hn, fn, Rn, Vn, vn, [0, yn, -1, Dn], hn, -2, jn, yn, -1, gn, [0, gn, Sn], 978, Dn, vn, Ln]);
  var Gn = class extends fe {
    constructor(t2) {
      super(t2);
    }
  };
  var zn;
  var Wn = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]);
  async function $n() {
    if (void 0 === zn)
      try {
        await WebAssembly.instantiate(Wn), zn = true;
      } catch {
        zn = false;
      }
    return zn;
  }
  async function Hn(t2, e2 = kn``) {
    const n2 = await $n() ? "wasm_internal" : "wasm_nosimd_internal";
    return { wasmLoaderPath: `${e2}/${t2}_${n2}.js`, wasmBinaryPath: `${e2}/${t2}_${n2}.wasm` };
  }
  var qn = class {
  };
  function Kn(t2) {
    function e2(e3, n3) {
      return new ReadableStream({ start() {
      }, async pull(r3) {
        i2 = i2.then(async () => {
          if (e3.cache.length > 0)
            r3.enqueue(e3.cache.shift());
          else {
            var { value: i3, done: o3 } = await t2.read();
            i3 && (n3.active && n3.cache.push(i3), e3.active && r3.enqueue(i3)), o3 && r3.close();
          }
        }), await i2;
      }, cancel() {
        e3.active = false, e3.cache.length = 0, n3.active || t2.cancel();
      } });
    }
    var n2 = { cache: [], active: true };
    const r2 = { cache: [], active: true };
    let i2 = Promise.resolve();
    const o2 = e2(n2, r2);
    return n2 = e2(r2, n2), [o2.getReader(), n2.getReader()];
  }
  async function Yn(t2, e2) {
    const n2 = new Uint8Array(e2);
    let r2 = 0;
    for (; r2 < e2; ) {
      const { value: i2, done: o2 } = await t2.read();
      if (i2) {
        const t3 = i2.subarray(0, e2 - r2);
        n2.set(t3, r2), r2 += t3.length;
      }
      if (o2)
        throw Error(`Expected ${e2} bytes, but stream ended after reading ${r2} bytes.`);
    }
    return await t2.cancel(), n2;
  }
  qn.forVisionTasks = function(t2) {
    return Hn("vision", t2);
  }, qn.forTextTasks = function(t2) {
    return Hn("text", t2);
  }, qn.forGenAiExperimentalTasks = function(t2) {
    return Hn("genai_experimental", t2);
  }, qn.forGenAiTasks = function(t2) {
    return Hn("genai", t2);
  }, qn.forAudioTasks = function(t2) {
    return Hn("audio", t2);
  }, qn.isSimdSupported = function() {
    return $n();
  };
  var Jn = [[0, async (t2) => {
    const e2 = new TextEncoder().encode("TFL3").length;
    return t2 = await Yn(t2, e2 + 4), "TFL3" === new TextDecoder("utf-8").decode(t2.subarray(4, e2 + 4));
  }], [1, async (t2) => 80 === (t2 = await Yn(t2, 6))[4] && 75 === t2[5]]];
  function Xn() {
    var t2 = navigator;
    return "undefined" != typeof OffscreenCanvas && (!function(t3 = navigator) {
      return (t3 = t3.userAgent).includes("Safari") && !t3.includes("Chrome");
    }(t2) || !!((t2 = t2.userAgent.match(/Version\/([\d]+).*Safari/)) && t2.length >= 1 && Number(t2[1]) >= 17));
  }
  async function Zn(t2) {
    if ("function" != typeof importScripts) {
      const e2 = document.createElement("script");
      return e2.src = t2.toString(), e2.crossOrigin = "anonymous", new Promise((t3, n2) => {
        e2.addEventListener("load", () => {
          t3();
        }, false), e2.addEventListener("error", (t4) => {
          n2(t4);
        }, false), document.body.appendChild(e2);
      });
    }
    importScripts(t2.toString());
  }
  function Qn(t2, e2, n2) {
    t2.j || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"), n2(e2 = t2.h.stringToNewUTF8(e2)), t2.h._free(e2);
  }
  function tr(t2, e2, n2) {
    t2.j || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");
    const r2 = new Uint32Array(e2.length);
    for (let n3 = 0; n3 < e2.length; n3++)
      r2[n3] = t2.h.stringToNewUTF8(e2[n3]);
    e2 = t2.h._malloc(4 * r2.length), t2.h.HEAPU32.set(r2, e2 >> 2), n2(e2);
    for (const e3 of r2)
      t2.h._free(e3);
    t2.h._free(e2);
  }
  function er(t2, e2, n2) {
    t2.h.simpleListeners = t2.h.simpleListeners || {}, t2.h.simpleListeners[e2] = n2;
  }
  function nr(t2, e2, n2) {
    let r2 = [];
    t2.h.simpleListeners = t2.h.simpleListeners || {}, t2.h.simpleListeners[e2] = (t3, e3, i2) => {
      e3 ? (n2(r2, i2), r2 = []) : r2.push(t3);
    };
  }
  var rr = (ir = class {
    constructor(t2, e2) {
      this.o = true, this.h = t2, this.i = null, this.l = 0, this.j = "function" == typeof this.h._addIntToInputStream, void 0 !== e2 ? this.h.canvas = e2 : Xn() ? this.h.canvas = new OffscreenCanvas(1, 1) : (console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."), this.h.canvas = document.createElement("canvas"));
    }
    async initializeGraph(t2) {
      const e2 = await (await fetch(t2)).arrayBuffer();
      t2 = !(t2.endsWith(".pbtxt") || t2.endsWith(".textproto")), this.setGraph(new Uint8Array(e2), t2);
    }
    setGraphFromString(t2) {
      this.setGraph(new TextEncoder().encode(t2), false);
    }
    setGraph(t2, e2) {
      const n2 = t2.length, r2 = this.h._malloc(n2);
      this.h.HEAPU8.set(t2, r2), e2 ? this.h._changeBinaryGraph(n2, r2) : this.h._changeTextGraph(n2, r2), this.h._free(r2);
    }
    configureAudio(t2, e2, n2, r2, i2) {
      this.h._configureAudio || console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'), Qn(this, r2 || "input_audio", (r3) => {
        Qn(this, i2 = i2 || "audio_header", (i3) => {
          this.h._configureAudio(r3, i3, t2, e2 ?? 0, n2);
        });
      });
    }
    setAutoResizeCanvas(t2) {
      this.o = t2;
    }
    setAutoRenderToScreen(t2) {
      this.h._setAutoRenderToScreen(t2);
    }
    setGpuBufferVerticalFlip(t2) {
      this.h.gpuOriginForWebTexturesIsBottomLeft = t2;
    }
    attachErrorListener(t2) {
      this.h.errorListener = t2;
    }
    attachEmptyPacketListener(t2, e2) {
      this.h.emptyPacketListeners = this.h.emptyPacketListeners || {}, this.h.emptyPacketListeners[t2] = e2;
    }
    addAudioToStream(t2, e2, n2) {
      this.addAudioToStreamWithShape(t2, 0, 0, e2, n2);
    }
    addAudioToStreamWithShape(t2, e2, n2, r2, i2) {
      const o2 = 4 * t2.length;
      this.l !== o2 && (this.i && this.h._free(this.i), this.i = this.h._malloc(o2), this.l = o2), this.h.HEAPF32.set(t2, this.i / 4), Qn(this, r2, (t3) => {
        this.h._addAudioToInputStream(this.i, e2, n2, t3, i2);
      });
    }
    addGpuBufferToStream(t2, e2, n2) {
      Qn(this, e2, (e3) => {
        if (!this.h.canvas)
          throw Error("No OpenGL canvas configured.");
        e3 ? this.h._bindTextureToStream(e3) : this.h._bindTextureToCanvas();
        const r2 = this.h.canvas.getContext("webgl2") || this.h.canvas.getContext("webgl");
        if (!r2)
          throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");
        this.h.gpuOriginForWebTexturesIsBottomLeft && r2.pixelStorei(r2.UNPACK_FLIP_Y_WEBGL, true), r2.texImage2D(r2.TEXTURE_2D, 0, r2.RGBA, r2.RGBA, r2.UNSIGNED_BYTE, t2), this.h.gpuOriginForWebTexturesIsBottomLeft && r2.pixelStorei(r2.UNPACK_FLIP_Y_WEBGL, false);
        const [i2, o2] = void 0 !== t2.videoWidth ? [t2.videoWidth, t2.videoHeight] : void 0 !== t2.naturalWidth ? [t2.naturalWidth, t2.naturalHeight] : void 0 !== t2.displayWidth ? [t2.displayWidth, t2.displayHeight] : [t2.width, t2.height];
        !this.o || i2 === this.h.canvas.width && o2 === this.h.canvas.height || (this.h.canvas.width = i2, this.h.canvas.height = o2);
        const [s, a] = [i2, o2];
        this.h._addBoundTextureToStream(e3, s, a, n2);
      });
    }
    addBoolToStream(t2, e2, n2) {
      Qn(this, e2, (e3) => {
        this.h._addBoolToInputStream(t2, e3, n2);
      });
    }
    addDoubleToStream(t2, e2, n2) {
      Qn(this, e2, (e3) => {
        this.h._addDoubleToInputStream(t2, e3, n2);
      });
    }
    addFloatToStream(t2, e2, n2) {
      Qn(this, e2, (e3) => {
        this.h._addFloatToInputStream(t2, e3, n2);
      });
    }
    addIntToStream(t2, e2, n2) {
      Qn(this, e2, (e3) => {
        this.h._addIntToInputStream(t2, e3, n2);
      });
    }
    addUintToStream(t2, e2, n2) {
      Qn(this, e2, (e3) => {
        this.h._addUintToInputStream(t2, e3, n2);
      });
    }
    addStringToStream(t2, e2, n2) {
      Qn(this, e2, (e3) => {
        Qn(this, t2, (t3) => {
          this.h._addStringToInputStream(t3, e3, n2);
        });
      });
    }
    addStringRecordToStream(t2, e2, n2) {
      Qn(this, e2, (e3) => {
        tr(this, Object.keys(t2), (r2) => {
          tr(this, Object.values(t2), (i2) => {
            this.h._addFlatHashMapToInputStream(r2, i2, Object.keys(t2).length, e3, n2);
          });
        });
      });
    }
    addProtoToStream(t2, e2, n2, r2) {
      Qn(this, n2, (n3) => {
        Qn(this, e2, (e3) => {
          const i2 = this.h._malloc(t2.length);
          this.h.HEAPU8.set(t2, i2), this.h._addProtoToInputStream(i2, t2.length, e3, n3, r2), this.h._free(i2);
        });
      });
    }
    addEmptyPacketToStream(t2, e2) {
      Qn(this, t2, (t3) => {
        this.h._addEmptyPacketToInputStream(t3, e2);
      });
    }
    addBoolVectorToStream(t2, e2, n2) {
      Qn(this, e2, (e3) => {
        const r2 = this.h._allocateBoolVector(t2.length);
        if (!r2)
          throw Error("Unable to allocate new bool vector on heap.");
        for (const e4 of t2)
          this.h._addBoolVectorEntry(r2, e4);
        this.h._addBoolVectorToInputStream(r2, e3, n2);
      });
    }
    addDoubleVectorToStream(t2, e2, n2) {
      Qn(this, e2, (e3) => {
        const r2 = this.h._allocateDoubleVector(t2.length);
        if (!r2)
          throw Error("Unable to allocate new double vector on heap.");
        for (const e4 of t2)
          this.h._addDoubleVectorEntry(r2, e4);
        this.h._addDoubleVectorToInputStream(r2, e3, n2);
      });
    }
    addFloatVectorToStream(t2, e2, n2) {
      Qn(this, e2, (e3) => {
        const r2 = this.h._allocateFloatVector(t2.length);
        if (!r2)
          throw Error("Unable to allocate new float vector on heap.");
        for (const e4 of t2)
          this.h._addFloatVectorEntry(r2, e4);
        this.h._addFloatVectorToInputStream(r2, e3, n2);
      });
    }
    addIntVectorToStream(t2, e2, n2) {
      Qn(this, e2, (e3) => {
        const r2 = this.h._allocateIntVector(t2.length);
        if (!r2)
          throw Error("Unable to allocate new int vector on heap.");
        for (const e4 of t2)
          this.h._addIntVectorEntry(r2, e4);
        this.h._addIntVectorToInputStream(r2, e3, n2);
      });
    }
    addUintVectorToStream(t2, e2, n2) {
      Qn(this, e2, (e3) => {
        const r2 = this.h._allocateUintVector(t2.length);
        if (!r2)
          throw Error("Unable to allocate new unsigned int vector on heap.");
        for (const e4 of t2)
          this.h._addUintVectorEntry(r2, e4);
        this.h._addUintVectorToInputStream(r2, e3, n2);
      });
    }
    addStringVectorToStream(t2, e2, n2) {
      Qn(this, e2, (e3) => {
        const r2 = this.h._allocateStringVector(t2.length);
        if (!r2)
          throw Error("Unable to allocate new string vector on heap.");
        for (const e4 of t2)
          Qn(this, e4, (t3) => {
            this.h._addStringVectorEntry(r2, t3);
          });
        this.h._addStringVectorToInputStream(r2, e3, n2);
      });
    }
    addBoolToInputSidePacket(t2, e2) {
      Qn(this, e2, (e3) => {
        this.h._addBoolToInputSidePacket(t2, e3);
      });
    }
    addDoubleToInputSidePacket(t2, e2) {
      Qn(this, e2, (e3) => {
        this.h._addDoubleToInputSidePacket(t2, e3);
      });
    }
    addFloatToInputSidePacket(t2, e2) {
      Qn(this, e2, (e3) => {
        this.h._addFloatToInputSidePacket(t2, e3);
      });
    }
    addIntToInputSidePacket(t2, e2) {
      Qn(this, e2, (e3) => {
        this.h._addIntToInputSidePacket(t2, e3);
      });
    }
    addUintToInputSidePacket(t2, e2) {
      Qn(this, e2, (e3) => {
        this.h._addUintToInputSidePacket(t2, e3);
      });
    }
    addStringToInputSidePacket(t2, e2) {
      Qn(this, e2, (e3) => {
        Qn(this, t2, (t3) => {
          this.h._addStringToInputSidePacket(t3, e3);
        });
      });
    }
    addProtoToInputSidePacket(t2, e2, n2) {
      Qn(this, n2, (n3) => {
        Qn(this, e2, (e3) => {
          const r2 = this.h._malloc(t2.length);
          this.h.HEAPU8.set(t2, r2), this.h._addProtoToInputSidePacket(r2, t2.length, e3, n3), this.h._free(r2);
        });
      });
    }
    addBoolVectorToInputSidePacket(t2, e2) {
      Qn(this, e2, (e3) => {
        const n2 = this.h._allocateBoolVector(t2.length);
        if (!n2)
          throw Error("Unable to allocate new bool vector on heap.");
        for (const e4 of t2)
          this.h._addBoolVectorEntry(n2, e4);
        this.h._addBoolVectorToInputSidePacket(n2, e3);
      });
    }
    addDoubleVectorToInputSidePacket(t2, e2) {
      Qn(this, e2, (e3) => {
        const n2 = this.h._allocateDoubleVector(t2.length);
        if (!n2)
          throw Error("Unable to allocate new double vector on heap.");
        for (const e4 of t2)
          this.h._addDoubleVectorEntry(n2, e4);
        this.h._addDoubleVectorToInputSidePacket(n2, e3);
      });
    }
    addFloatVectorToInputSidePacket(t2, e2) {
      Qn(this, e2, (e3) => {
        const n2 = this.h._allocateFloatVector(t2.length);
        if (!n2)
          throw Error("Unable to allocate new float vector on heap.");
        for (const e4 of t2)
          this.h._addFloatVectorEntry(n2, e4);
        this.h._addFloatVectorToInputSidePacket(n2, e3);
      });
    }
    addIntVectorToInputSidePacket(t2, e2) {
      Qn(this, e2, (e3) => {
        const n2 = this.h._allocateIntVector(t2.length);
        if (!n2)
          throw Error("Unable to allocate new int vector on heap.");
        for (const e4 of t2)
          this.h._addIntVectorEntry(n2, e4);
        this.h._addIntVectorToInputSidePacket(n2, e3);
      });
    }
    addUintVectorToInputSidePacket(t2, e2) {
      Qn(this, e2, (e3) => {
        const n2 = this.h._allocateUintVector(t2.length);
        if (!n2)
          throw Error("Unable to allocate new unsigned int vector on heap.");
        for (const e4 of t2)
          this.h._addUintVectorEntry(n2, e4);
        this.h._addUintVectorToInputSidePacket(n2, e3);
      });
    }
    addStringVectorToInputSidePacket(t2, e2) {
      Qn(this, e2, (e3) => {
        const n2 = this.h._allocateStringVector(t2.length);
        if (!n2)
          throw Error("Unable to allocate new string vector on heap.");
        for (const e4 of t2)
          Qn(this, e4, (t3) => {
            this.h._addStringVectorEntry(n2, t3);
          });
        this.h._addStringVectorToInputSidePacket(n2, e3);
      });
    }
    attachBoolListener(t2, e2) {
      er(this, t2, e2), Qn(this, t2, (t3) => {
        this.h._attachBoolListener(t3);
      });
    }
    attachBoolVectorListener(t2, e2) {
      nr(this, t2, e2), Qn(this, t2, (t3) => {
        this.h._attachBoolVectorListener(t3);
      });
    }
    attachIntListener(t2, e2) {
      er(this, t2, e2), Qn(this, t2, (t3) => {
        this.h._attachIntListener(t3);
      });
    }
    attachIntVectorListener(t2, e2) {
      nr(this, t2, e2), Qn(this, t2, (t3) => {
        this.h._attachIntVectorListener(t3);
      });
    }
    attachUintListener(t2, e2) {
      er(this, t2, e2), Qn(this, t2, (t3) => {
        this.h._attachUintListener(t3);
      });
    }
    attachUintVectorListener(t2, e2) {
      nr(this, t2, e2), Qn(this, t2, (t3) => {
        this.h._attachUintVectorListener(t3);
      });
    }
    attachDoubleListener(t2, e2) {
      er(this, t2, e2), Qn(this, t2, (t3) => {
        this.h._attachDoubleListener(t3);
      });
    }
    attachDoubleVectorListener(t2, e2) {
      nr(this, t2, e2), Qn(this, t2, (t3) => {
        this.h._attachDoubleVectorListener(t3);
      });
    }
    attachFloatListener(t2, e2) {
      er(this, t2, e2), Qn(this, t2, (t3) => {
        this.h._attachFloatListener(t3);
      });
    }
    attachFloatVectorListener(t2, e2) {
      nr(this, t2, e2), Qn(this, t2, (t3) => {
        this.h._attachFloatVectorListener(t3);
      });
    }
    attachStringListener(t2, e2) {
      er(this, t2, e2), Qn(this, t2, (t3) => {
        this.h._attachStringListener(t3);
      });
    }
    attachStringVectorListener(t2, e2) {
      nr(this, t2, e2), Qn(this, t2, (t3) => {
        this.h._attachStringVectorListener(t3);
      });
    }
    attachProtoListener(t2, e2, n2) {
      er(this, t2, e2), Qn(this, t2, (t3) => {
        this.h._attachProtoListener(t3, n2 || false);
      });
    }
    attachProtoVectorListener(t2, e2, n2) {
      nr(this, t2, e2), Qn(this, t2, (t3) => {
        this.h._attachProtoVectorListener(t3, n2 || false);
      });
    }
    attachAudioListener(t2, e2, n2) {
      this.h._attachAudioListener || console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'), er(this, t2, (t3, n3) => {
        t3 = new Float32Array(t3.buffer, t3.byteOffset, t3.length / 4), e2(t3, n3);
      }), Qn(this, t2, (t3) => {
        this.h._attachAudioListener(t3, n2 || false);
      });
    }
    finishProcessing() {
      this.h._waitUntilIdle();
    }
    closeGraph() {
      this.h._closeGraph(), this.h.simpleListeners = void 0, this.h.emptyPacketListeners = void 0;
    }
  }, class extends ir {
    fa() {
      this.h._registerModelResourcesGraphService();
    }
  });
  var ir;
  async function or(t2, e2) {
    const n2 = await (async (t3, e3, n3) => {
      var r2 = Cr;
      if (t3 && await Zn(t3), !self.ModuleFactory)
        throw Error("ModuleFactory not set.");
      if (e3 && (await Zn(e3), !self.ModuleFactory))
        throw Error("ModuleFactory not set.");
      return self.Module && n3 && ((t3 = self.Module).locateFile = n3.locateFile, n3.mainScriptUrlOrBlob && (t3.mainScriptUrlOrBlob = n3.mainScriptUrlOrBlob)), n3 = await self.ModuleFactory(self.Module || n3), self.ModuleFactory = self.Module = void 0, new r2(n3, null);
    })(t2.wasmLoaderPath, t2.assetLoaderPath, { locateFile: (e3) => e3.endsWith(".wasm") ? t2.wasmBinaryPath.toString() : t2.assetBinaryPath && e3.endsWith(".data") ? t2.assetBinaryPath.toString() : e3 });
    return await n2.L(e2), n2;
  }
  async function sr(t2, e2) {
    return or(t2, e2);
  }
  function ar(t2) {
    try {
      const e2 = t2.H.length;
      if (1 === e2)
        throw Error(t2.H[0].message);
      if (e2 > 1)
        throw Error("Encountered multiple errors: " + t2.H.map((t3) => t3.message).join(", "));
    } finally {
      t2.H = [];
    }
  }
  function cr(t2, e2) {
    t2.G = Math.max(t2.G, e2);
  }
  var ur = class {
    constructor(t2) {
      this.i = t2, this.H = [], this.G = 0, this.i.setAutoRenderToScreen(false);
    }
    setGraph(t2, e2) {
      this.i.attachErrorListener((t3, e3) => {
        this.H.push(Error(e3));
      }), this.i.fa(), this.i.setGraph(t2, e2), ar(this);
    }
    finishProcessing() {
      this.i.finishProcessing(), ar(this);
    }
    close() {
      this.i.closeGraph();
    }
  };
  ur.prototype.close = ur.prototype.close;
  var lr = class extends fe {
    constructor(t2) {
      super(t2);
    }
    i() {
      return Lt(Wt(this, 2)) ?? 0;
    }
  };
  function hr(t2, e2) {
    re(t2, 1, e2);
  }
  var fr = class extends fe {
    constructor(t2) {
      super(t2);
    }
  };
  var dr = [0, En, fn, an, -1, ln];
  function pr(t2, e2, n2, r2) {
    if (void 0 !== t2.data) {
      var i2 = new Uint8Array(t2.data.buffer, e2, n2);
      return 1 === r2 && function(t3, e3, n3) {
        t3.i.push([e3, n3]), t3.i.sort((t4, e4) => t4[0] - e4[0]), e3 = 0;
        for (const [r3, i3] of t3.i) {
          const t4 = i3;
          (n3 = r3) <= e3 && (e3 = Math.max(e3, n3 + t4));
        }
        e3 === t3.length && (t3.data = void 0);
      }(t2, e2, n2), i2;
    }
  }
  lr.prototype.j = Tn(dr);
  var gr = class {
    constructor(t2) {
      this.i = [], this.data = t2, this.length = t2.length;
    }
  };
  var mr = class {
    constructor(t2, e2) {
      this.i = [], this.j = t2, this.l = e2;
    }
    get size() {
      let t2 = 0;
      for (let e2 = 0; e2 < this.i.length; e2++)
        t2 += this.i[e2].length;
      return t2;
    }
  };
  async function _r(t2, e2, n2) {
    t2 = new br(t2, n2);
    let r2 = 0;
    for (e2 = e2.getReader(); ; ) {
      const { value: n3, done: i2 } = await e2.read();
      if (i2)
        break;
      t2.set(n3, r2), r2 += n3.byteLength;
    }
    if (n2 !== r2)
      throw yr(t2), Error(`File could not be fully loaded to memory, so was not retained. Loaded ${r2}/${n2} bytes before failure`);
    return t2;
  }
  function yr(t2) {
    if (t2.i)
      try {
        t2.h._free(t2.j);
      } catch {
      } finally {
        t2.i = false;
      }
  }
  var br = class {
    constructor(t2, e2) {
      this.h = t2, this.l = e2, this.j = this.h._malloc(e2) >>> 0, this.o = this.h.HEAPU8, this.i = !!this.j;
    }
    get offset() {
      if (!this.i)
        throw Error("WasmFileReference has been freed.");
      return this.j;
    }
    get size() {
      if (!this.i)
        throw Error("WasmFileReference has been freed.");
      return this.l;
    }
    set(t2, e2) {
      this.o.set(t2, this.j + (e2 ?? 0));
    }
  };
  var vr = class extends fe {
    constructor(t2) {
      super(t2);
    }
  };
  vr.prototype.i = Tn([0, yn, 2, hn, fn, gn]);
  var wr = class extends fe {
    constructor(t2) {
      super(t2);
    }
  };
  var Sr = class extends fe {
    constructor(t2) {
      super(t2);
    }
  };
  var Ar = class extends fe {
    constructor(t2) {
      super(t2);
    }
  };
  var Er = class extends fe {
    constructor(t2) {
      super(t2);
    }
  };
  var Tr = [0, fn, -6, 1, fn, 1, [0, gn, En, -2], [0, gn, an], En, -2, [0, gn, -1, En, an, An, ln], 1, gn, fn, ln, -1, [0, En, fn], gn, -1, sn, fn, -5];
  var Ir = [0, yn, -2];
  var Pr = [0, [4, 6], Tr, fn, 1, dn, hn, bn, _n, Ir, ln, [0, [0, fn, -1, vn, [0, fn, [0, fn, -1], -1, [0, En, -1], gn], gn, -2, fn, -1], [0, fn, -1, gn], Tr, gn, fn], mn, -3, [0, fn, gn], Tr, [0, Ir, -2]];
  Er.prototype.i = Tn([0, yn, 8, [0, gn, -6], 1, fn, 1, fn, [0, vn, [0, yn, un, -1, En], Pr, fn], [0, fn, gn, -3], 1, En, 1, Pr, 1, fn, 5, En, on, 1, dr, gn]);
  var Lr = class extends fe {
    constructor(t2) {
      super(t2);
    }
  };
  var Or = class extends fe {
    constructor(t2) {
      super(t2);
    }
  };
  var Ur = [2, 4];
  Or.prototype.i = Tn([0, Ur, fn, bn, fn, wn, [0, 1, yn]]);
  var Br = /* @__PURE__ */ function(t2) {
    return class extends t2 {
      constructor() {
        super(...arguments), this.M = false;
      }
      K() {
        if (this.M)
          throw Error("Cannot process because LLM inference engine is currently loading or processing.");
        this.M = true;
      }
      J() {
        this.M = false;
      }
      async Y(t3, e2) {
        this.K();
        try {
          await this.ha(t3), await this.h.ccall("CreateLlmInferenceEngine", "void", ["number", "number"], [ce(e2, 2) ?? 512, ne(e2, lr, 3)?.i() ?? 40], { async: true });
        } finally {
          this.J();
        }
      }
      U() {
        this.K();
        try {
          this.h.ccall("DeleteLlmInferenceEngine", "void", [], [], { async: false });
        } finally {
          this.J();
        }
      }
      async N(t3, e2, n2) {
        this.K();
        try {
          const r2 = [];
          this.h._userProgressListener = (t4, e3) => {
            t4 && r2.push(t4), n2 && n2(t4, e3);
          };
          const i2 = e2.j(), o2 = this.h._malloc(i2.length);
          return this.h.HEAPU8.set(i2, o2), await async function(t4, e3, n3) {
            t4.j || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"), e3 = t4.h.stringToNewUTF8(e3), await n3(e3), t4.h._free(e3);
          }(this, t3, (t4) => this.h.ccall("GenerateResponse", "void", ["number", "number", "number"], [t4, o2, i2.length], { async: true })), n2 && n2("", true), this.h._free(o2), this.h._userProgressListener = void 0, r2.join("");
        } finally {
          this.J();
        }
      }
      R(t3) {
        this.K();
        try {
          let e2;
          return Qn(this, t3, (t4) => {
            e2 = this.h._GetSizeInTokens(t4);
          }), e2;
        } finally {
          this.J();
        }
      }
      async ha(t3) {
        t3 = await async function(t4) {
          const e2 = [];
          for (var n2 = 0; ; ) {
            const { done: r2, value: i2 } = await t4.read();
            if (r2)
              break;
            e2.push(i2), n2 += i2.length;
          }
          if (0 === e2.length)
            return new Uint8Array(0);
          if (1 === e2.length)
            return e2[0];
          t4 = new Uint8Array(n2), n2 = 0;
          for (const r2 of e2)
            t4.set(r2, n2), n2 += r2.length;
          return t4;
        }(t3);
        try {
          this.h.FS_unlink("llm.task");
        } catch {
        }
        this.h.FS_createDataFile("/", "llm.task", t3, true, false, false);
      }
    };
  }(/* @__PURE__ */ function(t2) {
    return class e2 extends t2 {
      static async ga(t3, n2) {
        let r2;
        n2 ||= await e2.V();
        const i2 = [];
        for (const e3 of t3?.requiredFeatures ?? [])
          n2.features.has(e3) ? i2.push(e3) : console.warn(`WebGPU feature ${e3} is not supported.`);
        t3 = { ...t3, requiredFeatures: i2 };
        try {
          r2 = await n2.requestDevice(t3);
        } catch (t4) {
          throw console.error("Unable to initialize WebGPU with the requested features."), t4;
        }
        return (t3 = r2).adapterInfo || (t3.adapterInfo = n2.info), r2;
      }
      static async V(t3) {
        if (!(t3 = await navigator.gpu.requestAdapter(t3)))
          throw Error("Unable to request adapter from navigator.gpu; Ensure WebGPU is enabled.");
        return t3;
      }
      ba(t3) {
        if (e3)
          "undefined" != typeof HTMLCanvasElement && e3 instanceof HTMLCanvasElement && (e3.id = "canvas_webgpu");
        else
          var e3 = new OffscreenCanvas(1, 1);
        e3.getContext("webgpu").configure({ device: t3, format: navigator.gpu.getPreferredCanvasFormat() }), this.h.preinitializedWebGPUDevice = t3;
      }
      X() {
        return this.h.ccall("closeGraph", "void", [], [], { async: true });
      }
    };
  }(/* @__PURE__ */ function(t2) {
    return class extends t2 {
      addStreamingReaderToInputSidePacket(t3, e2) {
        this.h.addStreamingReaderToInputSidePacket((e3, n2, r2) => async function(t4, e4, n3, r3, i2) {
          if (2 === i2)
            return t4.i = [], t4.j = () => Promise.resolve(void 0), setTimeout(() => {
              t4.l();
            }, 0), Promise.resolve(0);
          for (; t4.size < n3 + r3; ) {
            var o2 = await t4.j();
            if (void 0 === o2)
              break;
            t4.i.push(new gr(o2));
          }
          if (t4.size < n3 + r3)
            throw Error(`Data size is too small: ${t4.size}, expected at least ${n3 + r3}.`);
          o2 = e4._malloc(r3) >>> 0;
          let s = 0;
          for (let a = 0; a < t4.i.length; a++) {
            const c = t4.i[a];
            if (n3 >= c.length) {
              n3 -= c.length;
              continue;
            }
            const u2 = Math.min(r3, c.length - n3);
            if (void 0 === (n3 = pr(c, n3, u2, i2)))
              throw Error("Data has already been released.");
            if (e4.HEAPU8.set(n3, o2 + s), n3 = 0, s += u2, 0 == (r3 -= u2))
              break;
          }
          if (0 !== r3)
            throw Error("Data not found.");
          return Promise.resolve(o2);
        }(t3, this.h, e3, n2, r2), e2);
      }
    };
  }(/* @__PURE__ */ function(t2) {
    return class extends t2 {
      W(t3, e2) {
        Qn(this, "lora_model_ref_in", (n2) => {
          this.h._addRawDataSpanToInputStream(t3.offset, t3.size, n2, e2);
        });
      }
    };
  }(class extends rr {
  }))));
  var kr = class extends Br {
  };
  var xr = class {
    constructor(t2) {
      this.j = t2, this.i = Nr, Nr++;
    }
  };
  var Nr = 1;
  var jr = class {
    constructor() {
      let t2, e2;
      this.promise = new Promise((n2, r2) => {
        t2 = n2, e2 = r2;
      }), this.resolve = t2, this.reject = e2;
    }
  };
  function Fr(t2) {
    return 1 === t2 ? 1 : t2 + t2 % 2;
  }
  async function Dr() {
    const t2 = await kr.V({ powerPreference: "high-performance" });
    var e2 = t2.limits.maxBufferSize;
    if (t2.limits.maxStorageBufferBindingSize < 524550144)
      throw Error(`The WebGPU device is unable to execute LLM tasks, because the required maxStorageBufferBindingSize is at least 524550144 but your device only supports maxStorageBufferBindingSize of ${e2}`);
    if (e2 >= 786825216)
      e2 = 786825216;
    else {
      if (!(e2 >= 524550144))
        throw Error(`The WebGPU device is unable to execute LLM tasks, because the required maxBufferSize is at least 524550144 but your device only supports maxBufferSize of ${e2}`);
      e2 = 524550144;
    }
    if (e2 = { requiredFeatures: ["shader-f16"], requiredLimits: { maxStorageBufferBindingSize: 524550144, maxBufferSize: e2, maxStorageBuffersPerShaderStage: t2.limits.maxStorageBuffersPerShaderStage } }, t2.features.has("subgroups")) {
      console.warn("Experimental Chromium WGSL subgroup support detected. Enabling this feature in the inference engine.");
      const n2 = ["shader-f16", "subgroups"];
      t2.features.has("subgroups-f16") && n2.push("subgroups-f16"), e2.requiredFeatures = n2;
    }
    return kr.ga(e2, t2);
  }
  function Rr(t2) {
    if (t2.B.length > 0) {
      const e2 = [...t2.B];
      if (t2.B.length = 0, !t2.o)
        throw e2;
      t2.o.reject(e2), t2.o = void 0;
    }
  }
  function Vr(t2) {
    const e2 = function(t3) {
      const e3 = new Cn();
      se(e3, 10, "text_in"), se(e3, 10, "token_cost_in"), se(e3, 10, "lora_model_id_to_apply_in"), se(e3, 10, "lora_model_ref_in"), se(e3, 10, "lora_model_id_to_load_in"), se(e3, 16, "streaming_reader"), se(e3, 15, "text_out"), se(e3, 15, "text_end"), se(e3, 15, "token_cost_out");
      var n3 = new Fn();
      le(n3, 2, "TokenizerInputBuildCalculator"), se(n3, 3, "PROMPT:text_in"), se(n3, 3, "LORA_ID:lora_model_id_to_apply_in"), se(n3, 4, "prompt"), Mn(e3, n3), le(n3 = new Fn(), 2, "ModelDataCalculator"), se(n3, 6, "MODEL_DATA:__side_packet_1"), se(n3, 6, "MODEL_TYPE:model_type"), se(n3, 5, "READ_DATA_FN:streaming_reader"), se(n3, 3, "LORA_MODEL_SPAN:lora_model_ref_in"), se(n3, 3, "LORA_MODEL_ID:lora_model_id_to_load_in"), se(n3, 4, "LORA_DATA:lora_model_data"), Mn(e3, n3), le(n3 = new Fn(), 2, "Gpt2UnicodeMappingCalculator"), se(n3, 5, "MODEL_TYPE:model_type"), se(n3, 6, "BYTES_TO_UNICODE_MAPPING:tokenizer_mapping"), Mn(e3, n3), le(n3 = new Pn(), 1, "type.googleapis.com/odml.infra.proto.TokenizerCalculatorOptions");
      var r2 = new Or(), i2 = ce(t3.j, 2);
      ue(r2, 1, i2), le(i2 = new Lr(), 2, "spm_vocab_model"), null == i2 && (i2 = void 0);
      t: {
        var o2 = r2.m, s = 0 | o2[D];
        if (H(s), null == i2) {
          var a = te(o2);
          if (4 !== ee(a, o2, s))
            break t;
          a.set(Ur, 0);
        } else {
          const t4 = te(a = o2), e4 = ee(t4, a, s);
          4 !== e4 && (e4 && (s = qt(a, s, e4)), t4.set(Ur, 4));
        }
        qt(o2, s, 4, i2);
      }
      return ue(r2, 3, 2), In(n3, r2.i()), le(r2 = new Fn(), 2, "TokenizerCalculator"), ae(r2, 8, Pn, n3), se(r2, 5, "MODEL_DATA:__side_packet_1"), se(r2, 3, "PROMPT_AND_INPUT_OPTIONS:prompt"), se(r2, 5, "BYTES_TO_UNICODE_MAPPING:tokenizer_mapping"), se(r2, 6, "PROCESSOR_GETTER:__input_side_1"), se(r2, 4, "IDS_AND_INPUT_OPTIONS:__stream_0"), Mn(e3, r2), le(n3 = new Pn(), 1, "type.googleapis.com/odml.infra.proto.LlmGpuCalculatorOptions"), ue(r2 = new Er(), 12, 3), le(r2, 1, "llm.tflite"), ue(r2, 14, 0), i2 = Fr(ce(t3.j, 5)), ue(r2, 22, i2), i2 = ne(t3.j, lr, 3), re(r2, 31, i2), Qt(i2 = new wr(), 1, true, false), Qt(i2, 2, true, false), Qt(i2, 5, true, false), re(r2, 10, i2), i2 = Kt(t3.j, 4, Lt, void 0 === q ? 2 : 4), Zt(r2, 29, i2), i2 = new Ar(), ue(o2 = new Sr(), 1, 1), a = ce(t3.j, 2), ue(o2, 2, a), re(i2, 1, o2), re(r2, 20, i2), In(n3, r2.i()), le(r2 = new Fn(), 2, "LlmGpuCalculator"), ae(r2, 8, Pn, n3), se(r2, 3, "IDS_AND_INPUT_OPTIONS:__stream_0"), se(r2, 3, "FINISH:finish"), se(r2, 3, "LORA_DATA:lora_model_data"), se(r2, 5, "MODEL_DATA:__side_packet_1"), se(r2, 4, "DECODED_IDS:__stream_3"), se(r2, 4, "OUTPUT_END:__stream_4"), le(n3 = new Nn(), 1, "FINISH"), Qt(n3, 2, true, false), ae(r2, 13, Nn, n3), Mn(e3, r2), le(n3 = new Fn(), 2, "IsPacketPresentCalculator"), se(n3, 3, "__stream_4"), se(n3, 4, "text_end"), Mn(e3, n3), le(n3 = new Pn(), 1, "type.googleapis.com/odml.infra.proto.DetokenizerCalculatorOptions"), r2 = new vr(), t3 = Fr(ce(t3.j, 5)), ue(r2, 5, t3), se(r2, 4, "<eos>"), se(r2, 4, "<|endoftext|>"), In(n3, r2.i()), le(t3 = new Fn(), 2, "DetokenizerCalculator"), ae(t3, 8, Pn, n3), se(t3, 3, "IDS_AND_INPUT_OPTIONS:__stream_3"), se(t3, 5, "PROCESSOR_GETTER:__input_side_1"), se(t3, 5, "BYTES_TO_UNICODE_MAPPING:tokenizer_mapping"), se(t3, 5, "MODEL_DATA:__side_packet_1"), se(t3, 4, "FINISH_AND_INPUT_OPTIONS:finish"), se(t3, 4, "WORDS:text_out"), Mn(e3, t3), le(t3 = new Fn(), 2, "TokenCostCalculator"), se(t3, 3, "PROMPT:token_cost_in"), se(t3, 5, "PROCESSOR_GETTER:__input_side_1"), se(t3, 5, "BYTES_TO_UNICODE_MAPPING:tokenizer_mapping"), se(t3, 4, "NUM_TOKENS:token_cost_out"), Mn(e3, t3), e3;
    }(t2);
    t2.i.attachStringVectorListener("text_out", (e3, n3) => {
      e3 = function(t3, e4) {
        return null == t3 || 0 === t3.length ? [] : t3.map((t4) => (t4 = (t4 = t4.replaceAll("\u2581", " ")).replaceAll("<0x0A>", "\n"), e4 && (t4 = t4.trimStart()), t4.split("\\[eod\\]", 1)[0]));
      }(e3, 0 === t2.D.length), e3.forEach((e4, n4) => {
        n4 < ce(t2.j, 5) && t2.D[n4].push(e4);
      }), t2.u && 0 === t2.B.length && (t2.A ? (e3.length > ce(t2.j, 5) && e3.pop(), t2.u(e3, false)) : t2.u(e3[0], false)), cr(t2, n3);
    }), t2.i.attachEmptyPacketListener("text_out", (e3) => {
      cr(t2, e3);
    }), t2.i.attachBoolListener("text_end", (e3, n3) => {
      if (t2.l = false, cr(t2, n3), Rr(t2), t2.o && (t2.o.resolve(t2.D.map((t3) => t3.join(""))), t2.o = void 0), t2.u)
        if (t2.A) {
          for (e3 = [], n3 = 0; n3 < ce(t2.j, 5); n3++)
            e3.push("");
          t2.u(e3, true);
        } else
          t2.u("", true);
      t2.A = void 0;
    }), t2.i.attachEmptyPacketListener("text_end", (e3) => {
      t2.l = false, t2.A = void 0, cr(t2, e3), Rr(t2), t2.o && (t2.o.resolve(t2.D.map((t3) => t3.join(""))), t2.o = void 0);
    }), t2.i.attachIntListener("token_cost_out", (e3, n3) => {
      t2.S = e3, cr(t2, n3);
    }), t2.T && t2.i.addStreamingReaderToInputSidePacket(t2.T, "streaming_reader");
    const n2 = e2.i();
    return t2.C?.removeEventListener("uncapturederror", t2.I), t2.i.X().then(() => {
      t2.C?.addEventListener("uncapturederror", t2.I), t2.B.length = 0, t2.setGraph(new Uint8Array(n2), true), t2.finishProcessing();
    });
  }
  function Mr(t2, e2, n2, r2) {
    if (t2.u = "function" == typeof n2 ? n2 : r2, t2.v) {
      if (t2.A && ce(t2.j, 5) > 1)
        throw Error("Multi-response generation is not supported for converted LLM models (.task format) yet. Please use the .bin format.");
      if (n2 instanceof xr)
        throw Error("LoRA is not supported for converted LLM models (.task format) yet. Please use the .bin format.");
      return t2.i.N(e2, t2.s, (e3, n3) => {
        0 === t2.B.length && t2.u && (t2.A ? t2.u([e3], n3) : t2.u(e3, n3));
      }).then((e3) => (Rr(t2), [e3]));
    }
    if (t2.l)
      throw Error("Previous invocation or loading is still ongoing.");
    for (t2.l = true, t2.D.length = 0, r2 = 0; r2 < ce(t2.j, 5); r2++)
      t2.D[r2] = [];
    if (r2 = t2.G + 1, t2.i.addStringToStream(e2, "text_in", r2), n2 instanceof xr) {
      if (n2.j !== t2)
        throw t2.l = false, t2.A = void 0, Error("The LoRA model was not loaded by this LLM Inference task.");
      t2.i.addUintToStream(n2.i, "lora_model_id_to_apply_in", r2);
    } else
      t2.i.addEmptyPacketToStream("lora_model_id_to_apply_in", r2);
    return t2.finishProcessing(), t2.o = new jr(), t2.o.promise;
  }
  var Cr = class extends ur {
    constructor(t2, e2) {
      if (super(new kr(t2, e2)), this.D = [], this.v = this.l = false, this.B = [], this.I = (t3) => {
        const e3 = (t3 = t3.error).message.match(/exceeds the max buffer size limit \(([0-9]+)\)\./);
        e3 && Number(e3[1]) > 524550144 ? t3 = Error(`Failed to run this LLM model, but you could try a smaller LLM model. WebGPU throws: "${t3.message}"`) : t3.message.match(/is larger than the maximum binding size/) && (t3 = Error(`Failed to run LLM inference, the supported max binding size is smaller than the required size. WebGPU throws: "${t3.message}"`)), this.B.push(t3);
      }, this.j = new fr(), hr(this.j, new Gn()), this.s = new lr(), re(this.j, 3, this.s), Ht(this.j, 2, Ot(512)), t2 = this.s, !vt(2))
        throw B("enum");
      Qt(t2, 1, 2, 0), ue(this.s, 2, 40), Qt(this.s, 3, St(1), 0), Ht(this.s, 5, Pt(0)), Qt(this.s, 4, St(0.8), 0), Ht(this.j, 5, Ot(1));
    }
    async L(t2) {
      if (this.l)
        throw Error("Cannot set options while loading or processing.");
      if (t2.baseOptions?.modelAssetPath && t2.baseOptions?.modelAssetBuffer)
        throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");
      let e2;
      const n2 = new Promise((t3) => {
        e2 = t3;
      });
      if (t2.baseOptions?.modelAssetPath) {
        var r2 = await fetch(t2.baseOptions.modelAssetPath.toString());
        if (!r2.ok)
          throw Error(`Failed to fetch model: ${t2.baseOptions.modelAssetPath} (${r2.status})`);
        if (!r2.body)
          throw Error(`Failed to fetch model: ${t2.baseOptions.modelAssetPath} (no body)`);
        r2 = r2.body.getReader();
      } else
        t2.baseOptions?.modelAssetBuffer instanceof Uint8Array ? r2 = function(t3) {
          return new ReadableStream({ start() {
          }, async pull(e3) {
            e3.enqueue(t3), e3.close();
          } });
        }(t2.baseOptions.modelAssetBuffer).getReader() : t2.baseOptions?.modelAssetBuffer instanceof ReadableStreamDefaultReader ? (r2 = t2.baseOptions.modelAssetBuffer, t2.baseOptions.modelAssetBuffer = void 0) : e2();
      if (!r2)
        throw Error("No model asset provided.");
      {
        const [t3, n3] = Kn(r2);
        1 === await async function(t4) {
          const e3 = [];
          let n4;
          for (const [i2, o2] of Jn) {
            const s = i2;
            var r3 = o2;
            [t4, n4] = Kn(t4), r3 = await r3(n4), await n4.cancel(), r3 && e3.push(s);
          }
          if (await t4.cancel(), 0 === e3.length)
            throw Error("No model format matched.");
          if (1 === e3.length)
            return e3[0];
          throw Error(`Multiple model formats matched: ${e3}`);
        }(n3) ? (this.v = true, r2 = t3) : (this.v = false, this.T = function(t4, e3) {
          return new mr(async () => {
            const { value: e4, done: n4 } = await t4.read();
            return n4 ? void 0 : e4;
          }, e3);
        }(t3, e2));
      }
      if (t2.baseOptions?.gpuOptions?.device && (this.C && this.C.removeEventListener("uncapturederror", this.I), this.C = t2.baseOptions.gpuOptions.device, this.i.ba(this.C), this.C.addEventListener("uncapturederror", this.I)), "maxTokens" in t2 && Ht(this.j, 2, Ot(t2.maxTokens ?? 512)), "topK" in t2 && ue(this.s, 2, t2.topK ?? 40), "temperature" in t2 && Qt(this.s, 4, St(t2.temperature ?? 0.8), 0), "randomSeed" in t2 && Ht(this.s, 5, Pt(t2.randomSeed ?? 0)), "loraRanks" in t2 && function(t3, e3) {
        Zt(t3, 4, e3);
      }(this.j, t2.loraRanks ?? []), "numResponses" in t2) {
        if ((t2 = t2.numResponses ?? 1) < 1)
          throw Error("'numResponses' must be at least 1.");
        if (this.v && t2 > 1)
          throw Error("'numResponses > 1' is not supported for converted LLM models yet.");
        Ht(this.j, 5, Ot(t2));
        const e3 = ne(this.j, lr, 3);
        t2 > 1 && e3 && (e3.i() <= 1 || (function(t3) {
          let e4 = 0 | (t3 = t3.m)[D];
          const n3 = $t(t3, e4, 4), r3 = At(n3);
          return null != r3 && r3 !== n3 && qt(t3, e4, 4, r3), r3;
        }(e3) ?? 0) <= 0) && console.warn("To generate multiple responses, it is expected topK > 1 and temperature > 0; otherwise, all the generated responses may be the same.");
      }
      return this.v ? (this.i.U(), this.i.Y(r2, this.j).then(() => {
        Rr(this);
      })) : (this.l = true, r2 = Vr(this).then(() => {
      }), Promise.all([n2, r2]).then(() => {
        this.l = false, Rr(this);
      }));
    }
    get baseOptions() {
      return ne(this.j, Gn, 1);
    }
    set baseOptions(t2) {
      hr(this.j, t2);
    }
    get isIdle() {
      return !this.l && !this.o;
    }
    N(t2, e2, n2) {
      return ce(this.j, 5) > 1 && console.warn("'numResponses' is set larger than 1 and this function only returns the first response, so we recommend either using 'generateResponses()' to obtain multiple responses, or else setting 'numResponses' to 1 for better performance."), this.A = false, Mr(this, t2, e2, n2).then((t3) => t3[0]);
    }
    aa(t2, e2, n2) {
      return this.A = true, Mr(this, t2, e2, n2);
    }
    R(t2) {
      if (this.v)
        return this.i.R(t2);
      if (this.l)
        throw Error("Previous invocation or loading is still ongoing.");
      return this.l = true, this.S = void 0, this.i.addStringToStream(t2, "token_cost_in", this.G + 1), this.finishProcessing(), this.l = false, this.S;
    }
    async ea(t2) {
      if (this.v)
        throw Error("LoRA is not supported for converted LLM models (.task format) yet. Please use the old foramat (.bin) to use LoRA.");
      if (this.l)
        throw Error("Cannot load LoRA model while loading or processing.");
      if (this.l = true, t2 instanceof Uint8Array) {
        var e2 = new br(this.i.h, t2.length);
        e2.set(t2), t2 = e2;
      } else
        t2 = t2 instanceof Blob ? await async function(t3, e3) {
          return _r(t3, e3.stream(), e3.size);
        }(this.i.h, t2) : await async function(t3, e3) {
          e3 = await fetch(e3.toString());
          const n3 = Number(e3.headers.get("content-length"));
          if (!e3.body)
            throw Error("Response body is not available.");
          if (!n3)
            throw Error("File size is 0.");
          return _r(t3, e3.body, n3);
        }(this.i.h, t2);
      e2 = new xr(this);
      const n2 = this.G + 1;
      return this.i.W(t2, n2), this.i.addUintToStream(e2.i, "lora_model_id_to_load_in", n2), this.finishProcessing(), yr(t2), cr(this, n2), this.l = false, e2;
    }
    close() {
      this.v && this.i.U(), this.C?.removeEventListener("uncapturederror", this.I), super.close();
    }
  };
  Cr.prototype.loadLoraModel = Cr.prototype.ea, Cr.prototype.sizeInTokens = Cr.prototype.R, Cr.prototype.generateResponses = Cr.prototype.aa, Cr.prototype.generateResponse = Cr.prototype.N, Cr.prototype.setOptions = Cr.prototype.L, Cr.createWebGpuDevice = Dr, Cr.createFromModelPath = async function(t2, e2) {
    return sr(t2, e2 = { baseOptions: { gpuOptions: { device: await Dr() }, modelAssetPath: e2 } });
  }, Cr.createFromModelBuffer = async function(t2, e2) {
    return sr(t2, e2 = { baseOptions: { gpuOptions: { device: await Dr() }, modelAssetBuffer: e2 } });
  }, Cr.createFromOptions = async function(t2, e2) {
    if (!e2.baseOptions?.gpuOptions?.device) {
      const t3 = await Dr();
      e2.baseOptions = e2.baseOptions ?? {}, e2.baseOptions.gpuOptions = e2?.baseOptions?.gpuOptions ?? {}, e2.baseOptions.gpuOptions.device = t3;
    }
    return sr(t2, e2);
  };

  // node_modules/@lyndonkl/gemma-webworker-wrapper/dist/worker.js
  var llmInference = null;
  async function initializeModel(options) {
    try {
      const fileset = await qn.forGenAiTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai@latest/wasm");
      llmInference = await Cr.createFromOptions(fileset, {
        baseOptions: {
          modelAssetPath: options.modelAssetPath || "/assets/gemma-2b-it-gpu-int4.bin"
        },
        maxTokens: options.maxTokens || 1e3,
        topK: options.topK || 40,
        temperature: options.temperature || 0.8,
        randomSeed: options.randomSeed || 101
      });
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error occurred"
      };
    }
  }
  async function invoke(prompt) {
    if (!llmInference) {
      return { success: false, error: "Model not initialized" };
    }
    try {
      const response = await llmInference.generateResponse(prompt);
      return { success: true, response };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error occurred"
      };
    }
  }
  self.onmessage = async (e2) => {
    const { type, payload } = e2.data;
    try {
      let result;
      switch (type) {
        case "INIT":
          result = await initializeModel(payload);
          break;
        case "INVOKE":
          result = await invoke(payload);
          break;
        default:
          result = { success: false, error: "Unknown message type" };
      }
      self.postMessage({ type, result });
    } catch (error) {
      self.postMessage({
        type,
        result: {
          success: false,
          error: error instanceof Error ? error.message : "Unknown error occurred"
        }
      });
    }
  };
})();

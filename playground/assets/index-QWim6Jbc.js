const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ConnectionSettings.content-CYB8C03n.js","assets/jsx-runtime-CqwARRmJ.js","assets/SpecVersionView.content-5QWmsS42.js","assets/utils-CcSgwp0X.js","assets/share-button.content-_WSNWgWi.js","assets/use-transient-B3cnmA1F.js","assets/settings.content-BUlldC-c.js","assets/label-D5dZ6Xu5.js","assets/react-dom-sPQfLLzr.js","assets/switch-BkA1CI8L.js","assets/use-resolve-button-type-Da7iyCjh.js","assets/monaco-BkVrCnUD.js","assets/use-preferred-color-scheme-uj_IJKVG.js","assets/ast-DfRbMhpd.js","assets/src-CoNJdl3w.js","assets/ast-CZdr9Z5l.css","assets/Breakpoints-CWo4qfQ8.js","assets/combobox-BPUMM4Si.js","assets/tooltip-iTuHEADK.js","assets/AlgoViewerHeader-Dveoc7_Q.js","assets/StateViewerItem-Ct_uJg8B.js","assets/env-BGxP3AUF.js","assets/TreeAddress-B7o2f3IO.js","assets/heap-CPzs95gJ.js","assets/callstack-BcooRW0Z.js","assets/internal-stat-R7G4z0pK.js","assets/AlgoViewer-CCOqXkJg.js","assets/AlgoViewer-In-Zh8J0.css","assets/Graphviz-L_qR27PY.js"])))=>i.map(i=>d[i]);
import { a as e, c as t, i as n, n as r, r as i, s as a, t as o } from "./jsx-runtime-CqwARRmJ.js";
import { t as s } from "./react-dom-sPQfLLzr.js";
import { A as c, C as l, D as u, E as d, O as f, S as p, T as m, _ as h, a as g, b as _, c as v, d as y, f as b, i as x, k as S, l as C, o as w, p as T, r as E, u as D, v as O, w as k, x as A, y as ee } from "./utils-CcSgwp0X.js";
import { $ as te, A as ne, B as re, C as j, D as M, E as ie, F as ae, G as N, H as oe, I as se, J as P, K as ce, L as le, M as ue, N as de, O as fe, P as pe, Q as me, R as he, S as ge, T as _e, U as ve, V as F, W as ye, X as be, Y as xe, Z as Se, _ as Ce, a as we, b as Te, c as Ee, d as De, f as Oe, g as ke, i as Ae, j as je, k as Me, l as Ne, m as Pe, n as Fe, o as Ie, q as Le, r as Re, s as ze, t as Be, u as Ve, v as He, w as Ue } from "./label-D5dZ6Xu5.js";
(function() {
	let e = document.createElement(`link`).relList;
	if (e && e.supports && e.supports(`modulepreload`)) return;
	for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
	new MutationObserver((e) => {
		for (let t of e) if (t.type === `childList`) for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
	}).observe(document, {
		childList: !0,
		subtree: !0
	});
	function t(e) {
		let t = {};
		return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), e.crossOrigin === `use-credentials` ? t.credentials = `include` : e.crossOrigin === `anonymous` ? t.credentials = `omit` : t.credentials = `same-origin`, t;
	}
	function n(e) {
		if (e.ep) return;
		e.ep = !0;
		let n = t(e);
		fetch(e.href, n);
	}
})();
var We = i(((e) => {
	function t(e, t) {
		var n = e.length;
		e.push(t);
		a: for (; 0 < n;) {
			var r = n - 1 >>> 1, a = e[r];
			if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
			else break a;
		}
	}
	function n(e) {
		return e.length === 0 ? null : e[0];
	}
	function r(e) {
		if (e.length === 0) return null;
		var t = e[0], n = e.pop();
		if (n !== t) {
			e[0] = n;
			a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
				var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
				if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
				else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
				else break a;
			}
		}
		return t;
	}
	function i(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	if (e.unstable_now = void 0, typeof performance == `object` && typeof performance.now == `function`) {
		var a = performance;
		e.unstable_now = function() {
			return a.now();
		};
	} else {
		var o = Date, s = o.now();
		e.unstable_now = function() {
			return o.now() - s;
		};
	}
	var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = !1, _ = typeof setTimeout == `function` ? setTimeout : null, v = typeof clearTimeout == `function` ? clearTimeout : null, y = typeof setImmediate < `u` ? setImmediate : null;
	function b(e) {
		for (var i = n(l); i !== null;) {
			if (i.callback === null) r(l);
			else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
			else break;
			i = n(l);
		}
	}
	function x(e) {
		if (h = !1, b(e), !m) if (n(c) !== null) m = !0, S || (S = !0, O());
		else {
			var t = n(l);
			t !== null && ee(x, t.startTime - e);
		}
	}
	var S = !1, C = -1, w = 5, T = -1;
	function E() {
		return g ? !0 : !(e.unstable_now() - T < w);
	}
	function D() {
		if (g = !1, S) {
			var t = e.unstable_now();
			T = t;
			var i = !0;
			try {
				a: {
					m = !1, h && (h = !1, v(C), C = -1), p = !0;
					var a = f;
					try {
						b: {
							for (b(t), d = n(c); d !== null && !(d.expirationTime > t && E());) {
								var o = d.callback;
								if (typeof o == `function`) {
									d.callback = null, f = d.priorityLevel;
									var s = o(d.expirationTime <= t);
									if (t = e.unstable_now(), typeof s == `function`) {
										d.callback = s, b(t), i = !0;
										break b;
									}
									d === n(c) && r(c), b(t);
								} else r(c);
								d = n(c);
							}
							if (d !== null) i = !0;
							else {
								var u = n(l);
								u !== null && ee(x, u.startTime - t), i = !1;
							}
						}
						break a;
					} finally {
						d = null, f = a, p = !1;
					}
					i = void 0;
				}
			} finally {
				i ? O() : S = !1;
			}
		}
	}
	var O;
	if (typeof y == `function`) O = function() {
		y(D);
	};
	else if (typeof MessageChannel < `u`) {
		var k = new MessageChannel(), A = k.port2;
		k.port1.onmessage = D, O = function() {
			A.postMessage(null);
		};
	} else O = function() {
		_(D, 0);
	};
	function ee(t, n) {
		C = _(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`) : w = 0 < e ? Math.floor(1e3 / e) : 5;
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f;
	}, e.unstable_next = function(e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}, e.unstable_requestPaint = function() {
		g = !0;
	}, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}, e.unstable_scheduleCallback = function(r, i, a) {
		var o = e.unstable_now();
		switch (typeof a == `object` && a ? (a = a.delay, a = typeof a == `number` && 0 < a ? o + a : o) : a = o, r) {
			case 1:
				var s = -1;
				break;
			case 2:
				s = 250;
				break;
			case 5:
				s = 1073741823;
				break;
			case 4:
				s = 1e4;
				break;
			default: s = 5e3;
		}
		return s = a + s, r = {
			id: u++,
			callback: i,
			priorityLevel: r,
			startTime: a,
			expirationTime: s,
			sortIndex: -1
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(C), C = -1) : h = !0, ee(x, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, S || (S = !0, O()))), r;
	}, e.unstable_shouldYield = E, e.unstable_wrapCallback = function(e) {
		var t = f;
		return function() {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	};
})), Ge = i(((e, t) => {
	t.exports = We();
})), Ke = i(((e) => {
	var t = Ge(), n = r(), i = s();
	function a(e) {
		var t = `https://react.dev/errors/` + e;
		if (1 < arguments.length) {
			t += `?args[]=` + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += `&args[]=` + encodeURIComponent(arguments[n]);
		}
		return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
	}
	function o(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function c(e) {
		var t = e, n = e;
		if (e.alternate) for (; t.return;) t = t.return;
		else {
			e = t;
			do
				t = e, t.flags & 4098 && (n = t.return), e = t.return;
			while (e);
		}
		return t.tag === 3 ? n : null;
	}
	function l(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function u(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function d(e) {
		if (c(e) !== e) throw Error(a(188));
	}
	function f(e) {
		var t = e.alternate;
		if (!t) {
			if (t = c(e), t === null) throw Error(a(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var i = n.return;
			if (i === null) break;
			var o = i.alternate;
			if (o === null) {
				if (r = i.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (i.child === o.child) {
				for (o = i.child; o;) {
					if (o === n) return d(i), e;
					if (o === r) return d(i), t;
					o = o.sibling;
				}
				throw Error(a(188));
			}
			if (n.return !== r.return) n = i, r = o;
			else {
				for (var s = !1, l = i.child; l;) {
					if (l === n) {
						s = !0, n = i, r = o;
						break;
					}
					if (l === r) {
						s = !0, r = i, n = o;
						break;
					}
					l = l.sibling;
				}
				if (!s) {
					for (l = o.child; l;) {
						if (l === n) {
							s = !0, n = o, r = i;
							break;
						}
						if (l === r) {
							s = !0, r = o, n = i;
							break;
						}
						l = l.sibling;
					}
					if (!s) throw Error(a(189));
				}
			}
			if (n.alternate !== r) throw Error(a(190));
		}
		if (n.tag !== 3) throw Error(a(188));
		return n.stateNode.current === n ? e : t;
	}
	function p(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = p(e), t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	var m = Object.assign, h = Symbol.for(`react.element`), g = Symbol.for(`react.transitional.element`), _ = Symbol.for(`react.portal`), v = Symbol.for(`react.fragment`), y = Symbol.for(`react.strict_mode`), b = Symbol.for(`react.profiler`), x = Symbol.for(`react.consumer`), S = Symbol.for(`react.context`), C = Symbol.for(`react.forward_ref`), w = Symbol.for(`react.suspense`), T = Symbol.for(`react.suspense_list`), E = Symbol.for(`react.memo`), D = Symbol.for(`react.lazy`), O = Symbol.for(`react.activity`), k = Symbol.for(`react.memo_cache_sentinel`), A = Symbol.iterator;
	function ee(e) {
		return typeof e != `object` || !e ? null : (e = A && e[A] || e[`@@iterator`], typeof e == `function` ? e : null);
	}
	var te = Symbol.for(`react.client.reference`);
	function ne(e) {
		if (e == null) return null;
		if (typeof e == `function`) return e.$$typeof === te ? null : e.displayName || e.name || null;
		if (typeof e == `string`) return e;
		switch (e) {
			case v: return `Fragment`;
			case b: return `Profiler`;
			case y: return `StrictMode`;
			case w: return `Suspense`;
			case T: return `SuspenseList`;
			case O: return `Activity`;
		}
		if (typeof e == `object`) switch (e.$$typeof) {
			case _: return `Portal`;
			case S: return e.displayName || `Context`;
			case x: return (e._context.displayName || `Context`) + `.Consumer`;
			case C:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || ``, e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`), e;
			case E: return t = e.displayName || null, t === null ? ne(e.type) || `Memo` : t;
			case D:
				t = e._payload, e = e._init;
				try {
					return ne(e(t));
				} catch {}
		}
		return null;
	}
	var re = Array.isArray, j = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ie = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, ae = [], N = -1;
	function oe(e) {
		return { current: e };
	}
	function se(e) {
		0 > N || (e.current = ae[N], ae[N] = null, N--);
	}
	function P(e, t) {
		N++, ae[N] = e.current, e.current = t;
	}
	var ce = oe(null), le = oe(null), ue = oe(null), de = oe(null);
	function fe(e, t) {
		switch (P(ue, t), P(le, e), P(ce, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? Vd(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = Vd(t), e = Hd(t, e);
			else switch (e) {
				case `svg`:
					e = 1;
					break;
				case `math`:
					e = 2;
					break;
				default: e = 0;
			}
		}
		se(ce), P(ce, e);
	}
	function pe() {
		se(ce), se(le), se(ue);
	}
	function me(e) {
		e.memoizedState !== null && P(de, e);
		var t = ce.current, n = Hd(t, e.type);
		t !== n && (P(le, e), P(ce, n));
	}
	function he(e) {
		le.current === e && (se(ce), se(le)), de.current === e && (se(de), Qf._currentValue = ie);
	}
	var ge, _e;
	function ve(e) {
		if (ge === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			ge = t && t[1] || ``, _e = -1 < e.stack.indexOf(`
    at`) ? ` (<anonymous>)` : -1 < e.stack.indexOf(`@`) ? `@unknown:0:0` : ``;
		}
		return `
` + ge + e + _e;
	}
	var F = !1;
	function ye(e, t) {
		if (!e || F) return ``;
		F = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == `object` && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							e.call(n.prototype);
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == `function` && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == `string`) return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, `name`);
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: `DetermineComponentFrameRoot` });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split(`
`), l = s.split(`
`);
				for (i = r = 0; r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);) r++;
				for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = `
` + c[r].replace(` at new `, ` at `);
							return e.displayName && u.includes(`<anonymous>`) && (u = u.replace(`<anonymous>`, e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			F = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : ``) ? ve(n) : ``;
	}
	function be(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return ve(e.type);
			case 16: return ve(`Lazy`);
			case 13: return e.child !== t && t !== null ? ve(`Suspense Fallback`) : ve(`Suspense`);
			case 19: return ve(`SuspenseList`);
			case 0:
			case 15: return ye(e.type, !1);
			case 11: return ye(e.type.render, !1);
			case 1: return ye(e.type, !0);
			case 31: return ve(`Activity`);
			default: return ``;
		}
	}
	function xe(e) {
		try {
			var t = ``, n = null;
			do
				t += be(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return `
Error generating stack: ` + e.message + `
` + e.stack;
		}
	}
	var Se = Object.prototype.hasOwnProperty, Ce = t.unstable_scheduleCallback, we = t.unstable_cancelCallback, Te = t.unstable_shouldYield, Ee = t.unstable_requestPaint, De = t.unstable_now, Oe = t.unstable_getCurrentPriorityLevel, ke = t.unstable_ImmediatePriority, Ae = t.unstable_UserBlockingPriority, je = t.unstable_NormalPriority, Me = t.unstable_LowPriority, Ne = t.unstable_IdlePriority, Pe = t.log, Fe = t.unstable_setDisableYieldValue, Ie = null, Le = null;
	function Re(e) {
		if (typeof Pe == `function` && Fe(e), Le && typeof Le.setStrictMode == `function`) try {
			Le.setStrictMode(Ie, e);
		} catch {}
	}
	var ze = Math.clz32 ? Math.clz32 : He, Be = Math.log, Ve = Math.LN2;
	function He(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (Be(e) / Ve | 0) | 0;
	}
	var Ue = 256, We = 262144, Ke = 4194304;
	function qe(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return e & 261888;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return e & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return e;
		}
	}
	function I(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = qe(n))) : i = qe(o) : i = qe(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = qe(n))) : i = qe(o)) : i = qe(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function Je(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function Ye(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function Xe() {
		var e = Ke;
		return Ke <<= 1, !(Ke & 62914560) && (Ke = 4194304), e;
	}
	function Ze(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function Qe(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function $e(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - ze(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && et(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function et(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - ze(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function tt(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - ze(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function nt(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : rt(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function rt(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default: e = 0;
		}
		return e;
	}
	function L(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function it() {
		var e = M.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : mp(e.type)) : e;
	}
	function at(e, t) {
		var n = M.p;
		try {
			return M.p = e, t();
		} finally {
			M.p = n;
		}
	}
	var ot = Math.random().toString(36).slice(2), st = `__reactFiber$` + ot, ct = `__reactProps$` + ot, lt = `__reactContainer$` + ot, ut = `__reactEvents$` + ot, dt = `__reactListeners$` + ot, ft = `__reactHandles$` + ot, pt = `__reactResources$` + ot, mt = `__reactMarker$` + ot;
	function ht(e) {
		delete e[st], delete e[ct], delete e[ut], delete e[dt], delete e[ft];
	}
	function gt(e) {
		var t = e[st];
		if (t) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[lt] || n[st]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = df(e); e !== null;) {
					if (n = e[st]) return n;
					e = df(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function _t(e) {
		if (e = e[st] || e[lt]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function vt(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(a(33));
	}
	function yt(e) {
		var t = e[pt];
		return t ||= e[pt] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function bt(e) {
		e[mt] = !0;
	}
	var xt = /* @__PURE__ */ new Set(), St = {};
	function Ct(e, t) {
		wt(e, t), wt(e + `Capture`, t);
	}
	function wt(e, t) {
		for (St[e] = t, e = 0; e < t.length; e++) xt.add(t[e]);
	}
	var Tt = RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`), Et = {}, Dt = {};
	function Ot(e) {
		return Se.call(Dt, e) ? !0 : Se.call(Et, e) ? !1 : Tt.test(e) ? Dt[e] = !0 : (Et[e] = !0, !1);
	}
	function kt(e, t, n) {
		if (Ot(t)) if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case `undefined`:
				case `function`:
				case `symbol`:
					e.removeAttribute(t);
					return;
				case `boolean`:
					var r = t.toLowerCase().slice(0, 5);
					if (r !== `data-` && r !== `aria-`) {
						e.removeAttribute(t);
						return;
					}
			}
			e.setAttribute(t, `` + n);
		}
	}
	function At(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case `undefined`:
				case `function`:
				case `symbol`:
				case `boolean`:
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, `` + n);
		}
	}
	function jt(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case `undefined`:
				case `function`:
				case `symbol`:
				case `boolean`:
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, `` + r);
		}
	}
	function Mt(e) {
		switch (typeof e) {
			case `bigint`:
			case `boolean`:
			case `number`:
			case `string`:
			case `undefined`: return e;
			case `object`: return e;
			default: return ``;
		}
	}
	function Nt(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`);
	}
	function Pt(e, t, n) {
		var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == `function` && typeof r.set == `function`) {
			var i = r.get, a = r.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					n = `` + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
				getValue: function() {
					return n;
				},
				setValue: function(e) {
					n = `` + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function Ft(e) {
		if (!e._valueTracker) {
			var t = Nt(e) ? `checked` : `value`;
			e._valueTracker = Pt(e, t, `` + e[t]);
		}
	}
	function It(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = ``;
		return e && (r = Nt(e) ? e.checked ? `true` : `false` : e.value), e = r, e === n ? !1 : (t.setValue(e), !0);
	}
	function Lt(e) {
		if (e ||= typeof document < `u` ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	var Rt = /[\n"\\]/g;
	function zt(e) {
		return e.replace(Rt, function(e) {
			return `\\` + e.charCodeAt(0).toString(16) + ` `;
		});
	}
	function Bt(e, t, n, r, i, a, o, s) {
		e.name = ``, o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean` ? e.type = o : e.removeAttribute(`type`), t == null ? o !== `submit` && o !== `reset` || e.removeAttribute(`value`) : o === `number` ? (t === 0 && e.value === `` || e.value != t) && (e.value = `` + Mt(t)) : e.value !== `` + Mt(t) && (e.value = `` + Mt(t)), t == null ? n == null ? r != null && e.removeAttribute(`value`) : Ht(e, o, Mt(n)) : Ht(e, o, Mt(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != `function` && typeof i != `symbol`), s != null && typeof s != `function` && typeof s != `symbol` && typeof s != `boolean` ? e.name = `` + Mt(s) : e.removeAttribute(`name`);
	}
	function Vt(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != `function` && typeof a != `symbol` && typeof a != `boolean` && (e.type = a), t != null || n != null) {
			if (!(a !== `submit` && a !== `reset` || t != null)) {
				Ft(e);
				return;
			}
			n = n == null ? `` : `` + Mt(n), t = t == null ? n : `` + Mt(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != `function` && typeof r != `symbol` && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean` && (e.name = o), Ft(e);
	}
	function Ht(e, t, n) {
		t === `number` && Lt(e.ownerDocument) === e || e.defaultValue === `` + n || (e.defaultValue = `` + n);
	}
	function Ut(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty(`$` + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = `` + Mt(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function Wt(e, t, n) {
		if (t != null && (t = `` + Mt(t), t !== e.value && (e.value = t), n == null)) {
			e.defaultValue !== t && (e.defaultValue = t);
			return;
		}
		e.defaultValue = n == null ? `` : `` + Mt(n);
	}
	function Gt(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(a(92));
				if (re(r)) {
					if (1 < r.length) throw Error(a(93));
					r = r[0];
				}
				n = r;
			}
			n ??= ``, t = n;
		}
		n = Mt(t), e.defaultValue = n, r = e.textContent, r === n && r !== `` && r !== null && (e.value = r), Ft(e);
	}
	function Kt(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var qt = new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));
	function Jt(e, t, n) {
		var r = t.indexOf(`--`) === 0;
		n == null || typeof n == `boolean` || n === `` ? r ? e.setProperty(t, ``) : t === `float` ? e.cssFloat = `` : e[t] = `` : r ? e.setProperty(t, n) : typeof n != `number` || n === 0 || qt.has(t) ? t === `float` ? e.cssFloat = n : e[t] = (`` + n).trim() : e[t] = n + `px`;
	}
	function Yt(e, t, n) {
		if (t != null && typeof t != `object`) throw Error(a(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf(`--`) === 0 ? e.setProperty(r, ``) : r === `float` ? e.cssFloat = `` : e[r] = ``);
			for (var i in t) r = t[i], t.hasOwnProperty(i) && n[i] !== r && Jt(e, i, r);
		} else for (var o in t) t.hasOwnProperty(o) && Jt(e, o, t[o]);
	}
	function Xt(e) {
		if (e.indexOf(`-`) === -1) return !1;
		switch (e) {
			case `annotation-xml`:
			case `color-profile`:
			case `font-face`:
			case `font-face-src`:
			case `font-face-uri`:
			case `font-face-format`:
			case `font-face-name`:
			case `missing-glyph`: return !1;
			default: return !0;
		}
	}
	var Zt = /* @__PURE__ */ new Map([
		[`acceptCharset`, `accept-charset`],
		[`htmlFor`, `for`],
		[`httpEquiv`, `http-equiv`],
		[`crossOrigin`, `crossorigin`],
		[`accentHeight`, `accent-height`],
		[`alignmentBaseline`, `alignment-baseline`],
		[`arabicForm`, `arabic-form`],
		[`baselineShift`, `baseline-shift`],
		[`capHeight`, `cap-height`],
		[`clipPath`, `clip-path`],
		[`clipRule`, `clip-rule`],
		[`colorInterpolation`, `color-interpolation`],
		[`colorInterpolationFilters`, `color-interpolation-filters`],
		[`colorProfile`, `color-profile`],
		[`colorRendering`, `color-rendering`],
		[`dominantBaseline`, `dominant-baseline`],
		[`enableBackground`, `enable-background`],
		[`fillOpacity`, `fill-opacity`],
		[`fillRule`, `fill-rule`],
		[`floodColor`, `flood-color`],
		[`floodOpacity`, `flood-opacity`],
		[`fontFamily`, `font-family`],
		[`fontSize`, `font-size`],
		[`fontSizeAdjust`, `font-size-adjust`],
		[`fontStretch`, `font-stretch`],
		[`fontStyle`, `font-style`],
		[`fontVariant`, `font-variant`],
		[`fontWeight`, `font-weight`],
		[`glyphName`, `glyph-name`],
		[`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
		[`glyphOrientationVertical`, `glyph-orientation-vertical`],
		[`horizAdvX`, `horiz-adv-x`],
		[`horizOriginX`, `horiz-origin-x`],
		[`imageRendering`, `image-rendering`],
		[`letterSpacing`, `letter-spacing`],
		[`lightingColor`, `lighting-color`],
		[`markerEnd`, `marker-end`],
		[`markerMid`, `marker-mid`],
		[`markerStart`, `marker-start`],
		[`overlinePosition`, `overline-position`],
		[`overlineThickness`, `overline-thickness`],
		[`paintOrder`, `paint-order`],
		[`panose-1`, `panose-1`],
		[`pointerEvents`, `pointer-events`],
		[`renderingIntent`, `rendering-intent`],
		[`shapeRendering`, `shape-rendering`],
		[`stopColor`, `stop-color`],
		[`stopOpacity`, `stop-opacity`],
		[`strikethroughPosition`, `strikethrough-position`],
		[`strikethroughThickness`, `strikethrough-thickness`],
		[`strokeDasharray`, `stroke-dasharray`],
		[`strokeDashoffset`, `stroke-dashoffset`],
		[`strokeLinecap`, `stroke-linecap`],
		[`strokeLinejoin`, `stroke-linejoin`],
		[`strokeMiterlimit`, `stroke-miterlimit`],
		[`strokeOpacity`, `stroke-opacity`],
		[`strokeWidth`, `stroke-width`],
		[`textAnchor`, `text-anchor`],
		[`textDecoration`, `text-decoration`],
		[`textRendering`, `text-rendering`],
		[`transformOrigin`, `transform-origin`],
		[`underlinePosition`, `underline-position`],
		[`underlineThickness`, `underline-thickness`],
		[`unicodeBidi`, `unicode-bidi`],
		[`unicodeRange`, `unicode-range`],
		[`unitsPerEm`, `units-per-em`],
		[`vAlphabetic`, `v-alphabetic`],
		[`vHanging`, `v-hanging`],
		[`vIdeographic`, `v-ideographic`],
		[`vMathematical`, `v-mathematical`],
		[`vectorEffect`, `vector-effect`],
		[`vertAdvY`, `vert-adv-y`],
		[`vertOriginX`, `vert-origin-x`],
		[`vertOriginY`, `vert-origin-y`],
		[`wordSpacing`, `word-spacing`],
		[`writingMode`, `writing-mode`],
		[`xmlnsXlink`, `xmlns:xlink`],
		[`xHeight`, `x-height`]
	]), Qt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function $t(e) {
		return Qt.test(`` + e) ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')` : e;
	}
	function en() {}
	var tn = null;
	function nn(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var rn = null, an = null;
	function on(e) {
		var t = _t(e);
		if (t && (e = t.stateNode)) {
			var n = e[ct] || null;
			a: switch (e = t.stateNode, t.type) {
				case `input`:
					if (Bt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === `radio` && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll(`input[name="` + zt(`` + t) + `"][type="radio"]`), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var i = r[ct] || null;
								if (!i) throw Error(a(90));
								Bt(r, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && It(r);
					}
					break a;
				case `textarea`:
					Wt(e, n.value, n.defaultValue);
					break a;
				case `select`: t = n.value, t != null && Ut(e, !!n.multiple, t, !1);
			}
		}
	}
	var sn = !1;
	function cn(e, t, n) {
		if (sn) return e(t, n);
		sn = !0;
		try {
			return e(t);
		} finally {
			if (sn = !1, (rn !== null || an !== null) && (bu(), rn && (t = rn, e = an, an = rn = null, on(t), e))) for (t = 0; t < e.length; t++) on(e[t]);
		}
	}
	function ln(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[ct] || null;
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
			case `onClick`:
			case `onClickCapture`:
			case `onDoubleClick`:
			case `onDoubleClickCapture`:
			case `onMouseDown`:
			case `onMouseDownCapture`:
			case `onMouseMove`:
			case `onMouseMoveCapture`:
			case `onMouseUp`:
			case `onMouseUpCapture`:
			case `onMouseEnter`:
				(r = !r.disabled) || (e = e.type, r = !(e === `button` || e === `input` || e === `select` || e === `textarea`)), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != `function`) throw Error(a(231, t, typeof n));
		return n;
	}
	var un = !(typeof window > `u` || window.document === void 0 || window.document.createElement === void 0), dn = !1;
	if (un) try {
		var fn = {};
		Object.defineProperty(fn, "passive", { get: function() {
			dn = !0;
		} }), window.addEventListener(`test`, fn, fn), window.removeEventListener(`test`, fn, fn);
	} catch {
		dn = !1;
	}
	var pn = null, mn = null, hn = null;
	function gn() {
		if (hn) return hn;
		var e, t = mn, n = t.length, r, i = `value` in pn ? pn.value : pn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return hn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function _n(e) {
		var t = e.keyCode;
		return `charCode` in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function vn() {
		return !0;
	}
	function yn() {
		return !1;
	}
	function bn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? vn : yn, this.isPropagationStopped = yn, this;
		}
		return m(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != `unknown` && (e.returnValue = !1), this.isDefaultPrevented = vn);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0), this.isPropagationStopped = vn);
			},
			persist: function() {},
			isPersistent: vn
		}), t;
	}
	var xn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, Sn = bn(xn), Cn = m({}, xn, {
		view: 0,
		detail: 0
	}), wn = bn(Cn), Tn, En, Dn, On = m({}, Cn, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Rn,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return `movementX` in e ? e.movementX : (e !== Dn && (Dn && e.type === `mousemove` ? (Tn = e.screenX - Dn.screenX, En = e.screenY - Dn.screenY) : En = Tn = 0, Dn = e), Tn);
		},
		movementY: function(e) {
			return `movementY` in e ? e.movementY : En;
		}
	}), kn = bn(On), R = bn(m({}, On, { dataTransfer: 0 })), An = bn(m({}, Cn, { relatedTarget: 0 })), jn = bn(m({}, xn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Mn = bn(m({}, xn, { clipboardData: function(e) {
		return `clipboardData` in e ? e.clipboardData : window.clipboardData;
	} })), Nn = bn(m({}, xn, { data: 0 })), Pn = {
		Esc: `Escape`,
		Spacebar: ` `,
		Left: `ArrowLeft`,
		Up: `ArrowUp`,
		Right: `ArrowRight`,
		Down: `ArrowDown`,
		Del: `Delete`,
		Win: `OS`,
		Menu: `ContextMenu`,
		Apps: `ContextMenu`,
		Scroll: `ScrollLock`,
		MozPrintableKey: `Unidentified`
	}, Fn = {
		8: `Backspace`,
		9: `Tab`,
		12: `Clear`,
		13: `Enter`,
		16: `Shift`,
		17: `Control`,
		18: `Alt`,
		19: `Pause`,
		20: `CapsLock`,
		27: `Escape`,
		32: ` `,
		33: `PageUp`,
		34: `PageDown`,
		35: `End`,
		36: `Home`,
		37: `ArrowLeft`,
		38: `ArrowUp`,
		39: `ArrowRight`,
		40: `ArrowDown`,
		45: `Insert`,
		46: `Delete`,
		112: `F1`,
		113: `F2`,
		114: `F3`,
		115: `F4`,
		116: `F5`,
		117: `F6`,
		118: `F7`,
		119: `F8`,
		120: `F9`,
		121: `F10`,
		122: `F11`,
		123: `F12`,
		144: `NumLock`,
		145: `ScrollLock`,
		224: `Meta`
	}, In = {
		Alt: `altKey`,
		Control: `ctrlKey`,
		Meta: `metaKey`,
		Shift: `shiftKey`
	};
	function Ln(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = In[e]) ? !!t[e] : !1;
	}
	function Rn() {
		return Ln;
	}
	var zn = bn(m({}, Cn, {
		key: function(e) {
			if (e.key) {
				var t = Pn[e.key] || e.key;
				if (t !== `Unidentified`) return t;
			}
			return e.type === `keypress` ? (e = _n(e), e === 13 ? `Enter` : String.fromCharCode(e)) : e.type === `keydown` || e.type === `keyup` ? Fn[e.keyCode] || `Unidentified` : ``;
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Rn,
		charCode: function(e) {
			return e.type === `keypress` ? _n(e) : 0;
		},
		keyCode: function(e) {
			return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === `keypress` ? _n(e) : e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
		}
	})), Bn = bn(m({}, On, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), Vn = bn(m({}, Cn, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Rn
	})), Hn = bn(m({}, xn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Un = bn(m({}, On, {
		deltaX: function(e) {
			return `deltaX` in e ? e.deltaX : `wheelDeltaX` in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return `deltaY` in e ? e.deltaY : `wheelDeltaY` in e ? -e.wheelDeltaY : `wheelDelta` in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), Wn = bn(m({}, xn, {
		newState: 0,
		oldState: 0
	})), Gn = [
		9,
		13,
		27,
		32
	], Kn = un && `CompositionEvent` in window, qn = null;
	un && `documentMode` in document && (qn = document.documentMode);
	var Jn = un && `TextEvent` in window && !qn, Yn = un && (!Kn || qn && 8 < qn && 11 >= qn), Xn = ` `, Zn = !1;
	function Qn(e, t) {
		switch (e) {
			case `keyup`: return Gn.indexOf(t.keyCode) !== -1;
			case `keydown`: return t.keyCode !== 229;
			case `keypress`:
			case `mousedown`:
			case `focusout`: return !0;
			default: return !1;
		}
	}
	function $n(e) {
		return e = e.detail, typeof e == `object` && `data` in e ? e.data : null;
	}
	var er = !1;
	function tr(e, t) {
		switch (e) {
			case `compositionend`: return $n(t);
			case `keypress`: return t.which === 32 ? (Zn = !0, Xn) : null;
			case `textInput`: return e = t.data, e === Xn && Zn ? null : e;
			default: return null;
		}
	}
	function nr(e, t) {
		if (er) return e === `compositionend` || !Kn && Qn(e, t) ? (e = gn(), hn = mn = pn = null, er = !1, e) : null;
		switch (e) {
			case `paste`: return null;
			case `keypress`:
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case `compositionend`: return Yn && t.locale !== `ko` ? null : t.data;
			default: return null;
		}
	}
	var rr = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function ir(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === `input` ? !!rr[e.type] : t === `textarea`;
	}
	function z(e, t, n, r) {
		rn ? an ? an.push(r) : an = [r] : rn = r, t = Ed(t, `onChange`), 0 < t.length && (n = new Sn(`onChange`, `change`, null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var ar = null, or = null;
	function sr(e) {
		yd(e, 0);
	}
	function cr(e) {
		if (It(vt(e))) return e;
	}
	function lr(e, t) {
		if (e === `change`) return t;
	}
	var ur = !1;
	if (un) {
		var dr;
		if (un) {
			var fr = `oninput` in document;
			if (!fr) {
				var pr = document.createElement(`div`);
				pr.setAttribute(`oninput`, `return;`), fr = typeof pr.oninput == `function`;
			}
			dr = fr;
		} else dr = !1;
		ur = dr && (!document.documentMode || 9 < document.documentMode);
	}
	function mr() {
		ar && (ar.detachEvent(`onpropertychange`, hr), or = ar = null);
	}
	function hr(e) {
		if (e.propertyName === `value` && cr(or)) {
			var t = [];
			z(t, or, e, nn(e)), cn(sr, t);
		}
	}
	function gr(e, t, n) {
		e === `focusin` ? (mr(), ar = t, or = n, ar.attachEvent(`onpropertychange`, hr)) : e === `focusout` && mr();
	}
	function _r(e) {
		if (e === `selectionchange` || e === `keyup` || e === `keydown`) return cr(or);
	}
	function vr(e, t) {
		if (e === `click`) return cr(t);
	}
	function yr(e, t) {
		if (e === `input` || e === `change`) return cr(t);
	}
	function br(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var xr = typeof Object.is == `function` ? Object.is : br;
	function Sr(e, t) {
		if (xr(e, t)) return !0;
		if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!Se.call(t, i) || !xr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function Cr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function wr(e, t) {
		var n = Cr(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = Cr(n);
		}
	}
	function Tr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Tr(e, t.parentNode) : `contains` in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Er(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = Lt(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == `string`;
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = Lt(e.document);
		}
		return t;
	}
	function Dr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === `input` && (e.type === `text` || e.type === `search` || e.type === `tel` || e.type === `url` || e.type === `password`) || t === `textarea` || e.contentEditable === `true`);
	}
	var Or = un && `documentMode` in document && 11 >= document.documentMode, B = null, kr = null, Ar = null, jr = !1;
	function Mr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		jr || B == null || B !== Lt(r) || (r = B, `selectionStart` in r && Dr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), Ar && Sr(Ar, r) || (Ar = r, r = Ed(kr, `onSelect`), 0 < r.length && (t = new Sn(`onSelect`, `select`, null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = B)));
	}
	function Nr(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n[`Webkit` + e] = `webkit` + t, n[`Moz` + e] = `moz` + t, n;
	}
	var Pr = {
		animationend: Nr(`Animation`, `AnimationEnd`),
		animationiteration: Nr(`Animation`, `AnimationIteration`),
		animationstart: Nr(`Animation`, `AnimationStart`),
		transitionrun: Nr(`Transition`, `TransitionRun`),
		transitionstart: Nr(`Transition`, `TransitionStart`),
		transitioncancel: Nr(`Transition`, `TransitionCancel`),
		transitionend: Nr(`Transition`, `TransitionEnd`)
	}, Fr = {}, Ir = {};
	un && (Ir = document.createElement(`div`).style, `AnimationEvent` in window || (delete Pr.animationend.animation, delete Pr.animationiteration.animation, delete Pr.animationstart.animation), `TransitionEvent` in window || delete Pr.transitionend.transition);
	function Lr(e) {
		if (Fr[e]) return Fr[e];
		if (!Pr[e]) return e;
		var t = Pr[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in Ir) return Fr[e] = t[n];
		return e;
	}
	var Rr = Lr(`animationend`), zr = Lr(`animationiteration`), Br = Lr(`animationstart`), Vr = Lr(`transitionrun`), Hr = Lr(`transitionstart`), Ur = Lr(`transitioncancel`), Wr = Lr(`transitionend`), Gr = /* @__PURE__ */ new Map(), Kr = `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);
	Kr.push(`scrollEnd`);
	function qr(e, t) {
		Gr.set(e, t), Ct(t, [e]);
	}
	var Jr = typeof reportError == `function` ? reportError : function(e) {
		if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
			var t = new window.ErrorEvent(`error`, {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == `object` && e && typeof e.message == `string` ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == `object` && typeof process.emit == `function`) {
			process.emit(`uncaughtException`, e);
			return;
		}
		console.error(e);
	}, Yr = [], Xr = 0, Zr = 0;
	function Qr() {
		for (var e = Xr, t = Zr = Xr = 0; t < e;) {
			var n = Yr[t];
			Yr[t++] = null;
			var r = Yr[t];
			Yr[t++] = null;
			var i = Yr[t];
			Yr[t++] = null;
			var a = Yr[t];
			if (Yr[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && ni(n, i, a);
		}
	}
	function $r(e, t, n, r) {
		Yr[Xr++] = e, Yr[Xr++] = t, Yr[Xr++] = n, Yr[Xr++] = r, Zr |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function ei(e, t, n, r) {
		return $r(e, t, n, r), ri(e);
	}
	function ti(e, t) {
		return $r(e, null, null, t), ri(e);
	}
	function ni(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - ze(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function ri(e) {
		if (50 < fu) throw fu = 0, X = null, Error(a(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var ii = {};
	function ai(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function oi(e, t, n, r) {
		return new ai(e, t, n, r);
	}
	function si(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function ci(e, t) {
		var n = e.alternate;
		return n === null ? (n = oi(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function li(e, t) {
		e.flags &= 65011714;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function ui(e, t, n, r, i, o) {
		var s = 0;
		if (r = e, typeof e == `function`) si(e) && (s = 1);
		else if (typeof e == `string`) s = Uf(e, n, ce.current) ? 26 : e === `html` || e === `head` || e === `body` ? 27 : 5;
		else a: switch (e) {
			case O: return e = oi(31, n, t, i), e.elementType = O, e.lanes = o, e;
			case v: return di(n.children, i, o, t);
			case y:
				s = 8, i |= 24;
				break;
			case b: return e = oi(12, n, t, i | 2), e.elementType = b, e.lanes = o, e;
			case w: return e = oi(13, n, t, i), e.elementType = w, e.lanes = o, e;
			case T: return e = oi(19, n, t, i), e.elementType = T, e.lanes = o, e;
			default:
				if (typeof e == `object` && e) switch (e.$$typeof) {
					case S:
						s = 10;
						break a;
					case x:
						s = 9;
						break a;
					case C:
						s = 11;
						break a;
					case E:
						s = 14;
						break a;
					case D:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(a(130, e === null ? `null` : typeof e, ``)), r = null;
		}
		return t = oi(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function di(e, t, n, r) {
		return e = oi(7, e, r, t), e.lanes = n, e;
	}
	function fi(e, t, n) {
		return e = oi(6, e, null, t), e.lanes = n, e;
	}
	function pi(e) {
		var t = oi(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function mi(e, t, n) {
		return t = oi(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var hi = /* @__PURE__ */ new WeakMap();
	function gi(e, t) {
		if (typeof e == `object` && e) {
			var n = hi.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: xe(t)
			}, hi.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: xe(t)
		};
	}
	var _i = [], vi = 0, yi = null, bi = 0, xi = [], Si = 0, Ci = null, wi = 1, Ti = ``;
	function Ei(e, t) {
		_i[vi++] = bi, _i[vi++] = yi, yi = e, bi = t;
	}
	function Di(e, t, n) {
		xi[Si++] = wi, xi[Si++] = Ti, xi[Si++] = Ci, Ci = e;
		var r = wi;
		e = Ti;
		var i = 32 - ze(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - ze(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, wi = 1 << 32 - ze(t) + i | n << i | r, Ti = a + e;
		} else wi = 1 << a | n << i | r, Ti = e;
	}
	function Oi(e) {
		e.return !== null && (Ei(e, 1), Di(e, 1, 0));
	}
	function ki(e) {
		for (; e === yi;) yi = _i[--vi], _i[vi] = null, bi = _i[--vi], _i[vi] = null;
		for (; e === Ci;) Ci = xi[--Si], xi[Si] = null, Ti = xi[--Si], xi[Si] = null, wi = xi[--Si], xi[Si] = null;
	}
	function Ai(e, t) {
		xi[Si++] = wi, xi[Si++] = Ti, xi[Si++] = Ci, wi = t.id, Ti = t.overflow, Ci = e;
	}
	var ji = null, Mi = null, V = !1, Ni = null, Pi = !1, Fi = Error(a(519));
	function Ii(e) {
		throw Hi(gi(Error(a(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`, ``)), e)), Fi;
	}
	function Li(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[st] = e, t[ct] = r, n) {
			case `dialog`:
				Q(`cancel`, t), Q(`close`, t);
				break;
			case `iframe`:
			case `object`:
			case `embed`:
				Q(`load`, t);
				break;
			case `video`:
			case `audio`:
				for (n = 0; n < _d.length; n++) Q(_d[n], t);
				break;
			case `source`:
				Q(`error`, t);
				break;
			case `img`:
			case `image`:
			case `link`:
				Q(`error`, t), Q(`load`, t);
				break;
			case `details`:
				Q(`toggle`, t);
				break;
			case `input`:
				Q(`invalid`, t), Vt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case `select`:
				Q(`invalid`, t);
				break;
			case `textarea`: Q(`invalid`, t), Gt(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != `string` && typeof n != `number` && typeof n != `bigint` || t.textContent === `` + n || !0 === r.suppressHydrationWarning || Md(t.textContent, n) ? (r.popover != null && (Q(`beforetoggle`, t), Q(`toggle`, t)), r.onScroll != null && Q(`scroll`, t), r.onScrollEnd != null && Q(`scrollend`, t), r.onClick != null && (t.onclick = en), t = !0) : t = !1, t || Ii(e, !0);
	}
	function Ri(e) {
		for (ji = e.return; ji;) switch (ji.tag) {
			case 5:
			case 31:
			case 13:
				Pi = !1;
				return;
			case 27:
			case 3:
				Pi = !0;
				return;
			default: ji = ji.return;
		}
	}
	function zi(e) {
		if (e !== ji) return !1;
		if (!V) return Ri(e), V = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== `form` && n !== `button`) || Ud(e.type, e.memoizedProps)), n = !n), n && Mi && Ii(e), Ri(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(a(317));
			Mi = uf(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(a(317));
			Mi = uf(e);
		} else t === 27 ? (t = Mi, Zd(e.type) ? (e = lf, lf = null, Mi = e) : Mi = t) : Mi = ji ? cf(e.stateNode.nextSibling) : null;
		return !0;
	}
	function Bi() {
		Mi = ji = null, V = !1;
	}
	function Vi() {
		var e = Ni;
		return e !== null && (Ql === null ? Ql = e : Ql.push.apply(Ql, e), Ni = null), e;
	}
	function Hi(e) {
		Ni === null ? Ni = [e] : Ni.push(e);
	}
	var Ui = oe(null), Wi = null, Gi = null;
	function Ki(e, t, n) {
		P(Ui, t._currentValue), t._currentValue = n;
	}
	function qi(e) {
		e._currentValue = Ui.current, se(Ui);
	}
	function Ji(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function Yi(e, t, n, r) {
		var i = e.child;
		for (i !== null && (i.return = e); i !== null;) {
			var o = i.dependencies;
			if (o !== null) {
				var s = i.child;
				o = o.firstContext;
				a: for (; o !== null;) {
					var c = o;
					o = i;
					for (var l = 0; l < t.length; l++) if (c.context === t[l]) {
						o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), Ji(o.return, n, e), r || (s = null);
						break a;
					}
					o = c.next;
				}
			} else if (i.tag === 18) {
				if (s = i.return, s === null) throw Error(a(341));
				s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), Ji(s, n, e), s = null;
			} else s = i.child;
			if (s !== null) s.return = i;
			else for (s = i; s !== null;) {
				if (s === e) {
					s = null;
					break;
				}
				if (i = s.sibling, i !== null) {
					i.return = s.return, s = i;
					break;
				}
				s = s.return;
			}
			i = s;
		}
	}
	function Xi(e, t, n, r) {
		e = null;
		for (var i = t, o = !1; i !== null;) {
			if (!o) {
				if (i.flags & 524288) o = !0;
				else if (i.flags & 262144) break;
			}
			if (i.tag === 10) {
				var s = i.alternate;
				if (s === null) throw Error(a(387));
				if (s = s.memoizedProps, s !== null) {
					var c = i.type;
					xr(i.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (i === de.current) {
				if (s = i.alternate, s === null) throw Error(a(387));
				s.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e === null ? e = [Qf] : e.push(Qf));
			}
			i = i.return;
		}
		e !== null && Yi(t, e, n, r), t.flags |= 262144;
	}
	function Zi(e) {
		for (e = e.firstContext; e !== null;) {
			if (!xr(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function Qi(e) {
		Wi = e, Gi = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function $i(e) {
		return ta(Wi, e);
	}
	function ea(e, t) {
		return Wi === null && Qi(e), ta(e, t);
	}
	function ta(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, Gi === null) {
			if (e === null) throw Error(a(308));
			Gi = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else Gi = Gi.next = t;
		return n;
	}
	var na = typeof AbortController < `u` ? AbortController : function() {
		var e = [], t = this.signal = {
			aborted: !1,
			addEventListener: function(t, n) {
				e.push(n);
			}
		};
		this.abort = function() {
			t.aborted = !0, e.forEach(function(e) {
				return e();
			});
		};
	}, ra = t.unstable_scheduleCallback, ia = t.unstable_NormalPriority, aa = {
		$$typeof: S,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function oa() {
		return {
			controller: new na(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function sa(e) {
		e.refCount--, e.refCount === 0 && ra(ia, function() {
			e.controller.abort();
		});
	}
	var ca = null, la = 0, ua = 0, da = null;
	function fa(e, t) {
		if (ca === null) {
			var n = ca = [];
			la = 0, ua = dd(), da = {
				status: `pending`,
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return la++, t.then(pa, pa), t;
	}
	function pa() {
		if (--la === 0 && ca !== null) {
			da !== null && (da.status = `fulfilled`);
			var e = ca;
			ca = null, ua = 0, da = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function ma(e, t) {
		var n = [], r = {
			status: `pending`,
			value: null,
			reason: null,
			then: function(e) {
				n.push(e);
			}
		};
		return e.then(function() {
			r.status = `fulfilled`, r.value = t;
			for (var e = 0; e < n.length; e++) (0, n[e])(t);
		}, function(e) {
			for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
		}), r;
	}
	var ha = j.S;
	j.S = function(e, t) {
		tu = De(), typeof t == `object` && t && typeof t.then == `function` && fa(e, t), ha !== null && ha(e, t);
	};
	var ga = oe(null);
	function _a() {
		var e = ga.current;
		return e === null ? K.pooledCache : e;
	}
	function va(e, t) {
		t === null ? P(ga, ga.current) : P(ga, t.pool);
	}
	function ya() {
		var e = _a();
		return e === null ? null : {
			parent: aa._currentValue,
			pool: e
		};
	}
	var ba = Error(a(460)), xa = Error(a(474)), Sa = Error(a(542)), Ca = { then: function() {} };
	function wa(e) {
		return e = e.status, e === `fulfilled` || e === `rejected`;
	}
	function Ta(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(en, en), t = n), t.status) {
			case `fulfilled`: return t.value;
			case `rejected`: throw e = t.reason, ka(e), e;
			default:
				if (typeof t.status == `string`) t.then(en, en);
				else {
					if (e = K, e !== null && 100 < e.shellSuspendCounter) throw Error(a(482));
					e = t, e.status = `pending`, e.then(function(e) {
						if (t.status === `pending`) {
							var n = t;
							n.status = `fulfilled`, n.value = e;
						}
					}, function(e) {
						if (t.status === `pending`) {
							var n = t;
							n.status = `rejected`, n.reason = e;
						}
					});
				}
				switch (t.status) {
					case `fulfilled`: return t.value;
					case `rejected`: throw e = t.reason, ka(e), e;
				}
				throw Da = t, ba;
		}
	}
	function Ea(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == `object` && e && typeof e.then == `function` ? (Da = e, ba) : e;
		}
	}
	var Da = null;
	function Oa() {
		if (Da === null) throw Error(a(459));
		var e = Da;
		return Da = null, e;
	}
	function ka(e) {
		if (e === ba || e === Sa) throw Error(a(483));
	}
	var Aa = null, ja = 0;
	function Ma(e) {
		var t = ja;
		return ja += 1, Aa === null && (Aa = []), Ta(Aa, e, t);
	}
	function Na(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function Pa(e, t) {
		throw t.$$typeof === h ? Error(a(525)) : (e = Object.prototype.toString.call(t), Error(a(31, e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e)));
	}
	function Fa(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
			return t;
		}
		function i(e, t) {
			return e = ci(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 67108866, n) : (r = r.index, r < n ? (t.flags |= 67108866, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 67108866), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = fi(n, e.mode, r), t.return = e, t) : (t = i(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var a = n.type;
			return a === v ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === a || typeof a == `object` && a && a.$$typeof === D && Ea(a) === t.type) ? (t = i(t, n.props), Na(t, n), t.return = e, t) : (t = ui(n.type, n.key, n.props, null, e.mode, r), Na(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = mi(n, e.mode, r), t.return = e, t) : (t = i(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, a) {
			return t === null || t.tag !== 7 ? (t = di(n, e.mode, r, a), t.return = e, t) : (t = i(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == `string` && t !== `` || typeof t == `number` || typeof t == `bigint`) return t = fi(`` + t, e.mode, n), t.return = e, t;
			if (typeof t == `object` && t) {
				switch (t.$$typeof) {
					case g: return n = ui(t.type, t.key, t.props, null, e.mode, n), Na(n, t), n.return = e, n;
					case _: return t = mi(t, e.mode, n), t.return = e, t;
					case D: return t = Ea(t), f(e, t, n);
				}
				if (re(t) || ee(t)) return t = di(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == `function`) return f(e, Ma(t), n);
				if (t.$$typeof === S) return f(e, ea(e, t), n);
				Pa(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == `string` && n !== `` || typeof n == `number` || typeof n == `bigint`) return i === null ? c(e, t, `` + n, r) : null;
			if (typeof n == `object` && n) {
				switch (n.$$typeof) {
					case g: return n.key === i ? l(e, t, n, r) : null;
					case _: return n.key === i ? u(e, t, n, r) : null;
					case D: return n = Ea(n), p(e, t, n, r);
				}
				if (re(n) || ee(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == `function`) return p(e, t, Ma(n), r);
				if (n.$$typeof === S) return p(e, t, ea(e, n), r);
				Pa(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == `string` && r !== `` || typeof r == `number` || typeof r == `bigint`) return e = e.get(n) || null, c(t, e, `` + r, i);
			if (typeof r == `object` && r) {
				switch (r.$$typeof) {
					case g: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case _: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case D: return r = Ea(r), m(e, t, n, r, i);
				}
				if (re(r) || ee(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == `function`) return m(e, t, n, Ma(r), i);
				if (r.$$typeof === S) return m(e, t, n, ea(t, r), i);
				Pa(t, r);
			}
			return null;
		}
		function h(i, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), V && Ei(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return V && Ei(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), V && Ei(i, h), l;
		}
		function y(i, s, c, l) {
			if (c == null) throw Error(a(151));
			for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(i, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(i, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(i, h), V && Ei(i, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(i, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return V && Ei(i, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, i, g, v.value, l), v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(i, e);
			}), V && Ei(i, g), u;
		}
		function b(e, r, o, c) {
			if (typeof o == `object` && o && o.type === v && o.key === null && (o = o.props.children), typeof o == `object` && o) {
				switch (o.$$typeof) {
					case g:
						a: {
							for (var l = o.key; r !== null;) {
								if (r.key === l) {
									if (l = o.type, l === v) {
										if (r.tag === 7) {
											n(e, r.sibling), c = i(r, o.props.children), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == `object` && l && l.$$typeof === D && Ea(l) === r.type) {
										n(e, r.sibling), c = i(r, o.props), Na(c, o), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								} else t(e, r);
								r = r.sibling;
							}
							o.type === v ? (c = di(o.props.children, e.mode, c, o.key), c.return = e, e = c) : (c = ui(o.type, o.key, o.props, null, e.mode, c), Na(c, o), c.return = e, e = c);
						}
						return s(e);
					case _:
						a: {
							for (l = o.key; r !== null;) {
								if (r.key === l) if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
									n(e, r.sibling), c = i(r, o.children || []), c.return = e, e = c;
									break a;
								} else {
									n(e, r);
									break;
								}
								else t(e, r);
								r = r.sibling;
							}
							c = mi(o, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case D: return o = Ea(o), b(e, r, o, c);
				}
				if (re(o)) return h(e, r, o, c);
				if (ee(o)) {
					if (l = ee(o), typeof l != `function`) throw Error(a(150));
					return o = l.call(o), y(e, r, o, c);
				}
				if (typeof o.then == `function`) return b(e, r, Ma(o), c);
				if (o.$$typeof === S) return b(e, r, ea(e, o), c);
				Pa(e, o);
			}
			return typeof o == `string` && o !== `` || typeof o == `number` || typeof o == `bigint` ? (o = `` + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = i(r, o), c.return = e, e = c) : (n(e, r), c = fi(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				ja = 0;
				var i = b(e, t, n, r);
				return Aa = null, i;
			} catch (t) {
				if (t === ba || t === Sa) throw t;
				var a = oi(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var Ia = Fa(!0), La = Fa(!1), Ra = !1;
	function za(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function Ba(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function Va(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function Ha(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, G & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = ri(e), ni(e, null, n), t;
		}
		return $r(e, r, t, n), ri(e);
	}
	function Ua(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, tt(e, n);
		}
	}
	function Wa(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
			return;
		}
		e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	var Ga = !1;
	function Ka() {
		if (Ga) {
			var e = da;
			if (e !== null) throw e;
		}
	}
	function qa(e, t, n, r) {
		Ga = !1;
		var i = e.updateQueue;
		Ra = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane & -536870913, p = f !== s.lane;
				if (p ? (J & f) === f : (r & f) === f) {
					f !== 0 && f === ua && (Ga = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var h = e, g = s;
						f = t;
						var _ = n;
						switch (g.tag) {
							case 1:
								if (h = g.payload, typeof h == `function`) {
									d = h.call(_, d, f);
									break a;
								}
								d = h;
								break a;
							case 3: h.flags = h.flags & -65537 | 128;
							case 0:
								if (h = g.payload, f = typeof h == `function` ? h.call(_, d, f) : h, f == null) break a;
								d = m({}, d, f);
								break a;
							case 2: Ra = !0;
						}
					}
					f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
				} else p = {
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), Kl |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function Ja(e, t) {
		if (typeof e != `function`) throw Error(a(191, e));
		e.call(t);
	}
	function Ya(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Ja(n[e], t);
	}
	var Xa = oe(null), Za = oe(0);
	function Qa(e, t) {
		e = Wl, P(Za, e), P(Xa, t), Wl = e | t.baseLanes;
	}
	function $a() {
		P(Za, Wl), P(Xa, Xa.current);
	}
	function eo() {
		Wl = Za.current, se(Xa), se(Za);
	}
	var to = oe(null), no = null;
	function ro(e) {
		var t = e.alternate;
		P(co, co.current & 1), P(to, e), no === null && (t === null || Xa.current !== null || t.memoizedState !== null) && (no = e);
	}
	function io(e) {
		P(co, co.current), P(to, e), no === null && (no = e);
	}
	function ao(e) {
		e.tag === 22 ? (P(co, co.current), P(to, e), no === null && (no = e)) : oo(e);
	}
	function oo() {
		P(co, co.current), P(to, to.current);
	}
	function so(e) {
		se(to), no === e && (no = null), se(co);
	}
	var co = oe(0);
	function lo(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || af(n) || of(n))) return t;
			} else if (t.tag === 19 && (t.memoizedProps.revealOrder === `forwards` || t.memoizedProps.revealOrder === `backwards` || t.memoizedProps.revealOrder === `unstable_legacy-backwards` || t.memoizedProps.revealOrder === `together`)) {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var uo = 0, H = null, U = null, fo = null, po = !1, mo = !1, ho = !1, go = 0, _o = 0, vo = null, yo = 0;
	function bo() {
		throw Error(a(321));
	}
	function xo(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!xr(e[n], t[n])) return !1;
		return !0;
	}
	function So(e, t, n, r, i, a) {
		return uo = a, H = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, j.H = e === null || e.memoizedState === null ? zs : Bs, ho = !1, a = n(r, i), ho = !1, mo && (a = wo(t, n, r, i)), Co(e), a;
	}
	function Co(e) {
		j.H = Rs;
		var t = U !== null && U.next !== null;
		if (uo = 0, fo = U = H = null, po = !1, _o = 0, vo = null, t) throw Error(a(300));
		e === null || rc || (e = e.dependencies, e !== null && Zi(e) && (rc = !0));
	}
	function wo(e, t, n, r) {
		H = e;
		var i = 0;
		do {
			if (mo && (vo = null), _o = 0, mo = !1, 25 <= i) throw Error(a(301));
			if (i += 1, fo = U = null, e.updateQueue != null) {
				var o = e.updateQueue;
				o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
			}
			j.H = Vs, o = t(n, r);
		} while (mo);
		return o;
	}
	function To() {
		var e = j.H, t = e.useState()[0];
		return t = typeof t.then == `function` ? Mo(t) : t, e = e.useState()[0], (U === null ? null : U.memoizedState) !== e && (H.flags |= 1024), t;
	}
	function Eo() {
		var e = go !== 0;
		return go = 0, e;
	}
	function Do(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function Oo(e) {
		if (po) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			po = !1;
		}
		uo = 0, fo = U = H = null, mo = !1, _o = go = 0, vo = null;
	}
	function ko() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return fo === null ? H.memoizedState = fo = e : fo = fo.next = e, fo;
	}
	function Ao() {
		if (U === null) {
			var e = H.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = U.next;
		var t = fo === null ? H.memoizedState : fo.next;
		if (t !== null) fo = t, U = e;
		else {
			if (e === null) throw H.alternate === null ? Error(a(467)) : Error(a(310));
			U = e, e = {
				memoizedState: U.memoizedState,
				baseState: U.baseState,
				baseQueue: U.baseQueue,
				queue: U.queue,
				next: null
			}, fo === null ? H.memoizedState = fo = e : fo = fo.next = e;
		}
		return fo;
	}
	function jo() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function Mo(e) {
		var t = _o;
		return _o += 1, vo === null && (vo = []), e = Ta(vo, e, t), t = H, (fo === null ? t.memoizedState : fo.next) === null && (t = t.alternate, j.H = t === null || t.memoizedState === null ? zs : Bs), e;
	}
	function No(e) {
		if (typeof e == `object` && e) {
			if (typeof e.then == `function`) return Mo(e);
			if (e.$$typeof === S) return $i(e);
		}
		throw Error(a(438, String(e)));
	}
	function Po(e) {
		var t = null, n = H.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = H.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function(e) {
					return e.slice();
				}),
				index: 0
			})));
		}
		if (t ??= {
			data: [],
			index: 0
		}, n === null && (n = jo(), H.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = k;
		return t.index++, n;
	}
	function Fo(e, t) {
		return typeof t == `function` ? t(e) : t;
	}
	function Io(e) {
		return Lo(Ao(), U, e);
	}
	function Lo(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(a(311));
		r.lastRenderedReducer = n;
		var i = e.baseQueue, o = r.pending;
		if (o !== null) {
			if (i !== null) {
				var s = i.next;
				i.next = o.next, o.next = s;
			}
			t.baseQueue = i = o, r.pending = null;
		}
		if (o = e.baseState, i === null) e.memoizedState = o;
		else {
			t = i.next;
			var c = s = null, l = null, u = t, d = !1;
			do {
				var f = u.lane & -536870913;
				if (f === u.lane ? (uo & f) === f : (J & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === ua && (d = !0);
					else if ((uo & p) === p) {
						u = u.next, p === ua && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = o) : l = l.next = f, H.lanes |= p, Kl |= p;
					f = u.action, ho && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = o) : l = l.next = p, H.lanes |= f, Kl |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = o : l.next = c, !xr(o, e.memoizedState) && (rc = !0, d && (n = da, n !== null))) throw n;
			e.memoizedState = o, e.baseState = s, e.baseQueue = l, r.lastRenderedState = o;
		}
		return i === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function Ro(e) {
		var t = Ao(), n = t.queue;
		if (n === null) throw Error(a(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, i = n.pending, o = t.memoizedState;
		if (i !== null) {
			n.pending = null;
			var s = i = i.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== i);
			xr(o, t.memoizedState) || (rc = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function zo(e, t, n) {
		var r = H, i = Ao(), o = V;
		if (o) {
			if (n === void 0) throw Error(a(407));
			n = n();
		} else n = t();
		var s = !xr((U || i).memoizedState, n);
		if (s && (i.memoizedState = n, rc = !0), i = i.queue, us(Ho.bind(null, r, i, e), [e]), i.getSnapshot !== t || s || fo !== null && fo.memoizedState.tag & 1) {
			if (r.flags |= 2048, as(9, { destroy: void 0 }, Vo.bind(null, r, i, n, t), null), K === null) throw Error(a(349));
			o || uo & 127 || Bo(r, t, n);
		}
		return n;
	}
	function Bo(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = H.updateQueue, t === null ? (t = jo(), H.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function Vo(e, t, n, r) {
		t.value = n, t.getSnapshot = r, Uo(t) && Wo(e);
	}
	function Ho(e, t, n) {
		return n(function() {
			Uo(t) && Wo(e);
		});
	}
	function Uo(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !xr(e, n);
		} catch {
			return !0;
		}
	}
	function Wo(e) {
		var t = ti(e, 2);
		t !== null && hu(t, e, 2);
	}
	function Go(e) {
		var t = ko();
		if (typeof e == `function`) {
			var n = e;
			if (e = n(), ho) {
				Re(!0);
				try {
					n();
				} finally {
					Re(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Fo,
			lastRenderedState: e
		}, t;
	}
	function Ko(e, t, n, r) {
		return e.baseState = n, Lo(e, U, typeof r == `function` ? r : Fo);
	}
	function qo(e, t, n, r, i) {
		if (Fs(e)) throw Error(a(485));
		if (e = t.action, e !== null) {
			var o = {
				payload: i,
				action: e,
				next: null,
				isTransition: !0,
				status: `pending`,
				value: null,
				reason: null,
				listeners: [],
				then: function(e) {
					o.listeners.push(e);
				}
			};
			j.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, Jo(t, o)) : (o.next = n.next, t.pending = n.next = o);
		}
	}
	function Jo(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = j.T, o = {};
			j.T = o;
			try {
				var s = n(i, r), c = j.S;
				c !== null && c(o, s), Yo(e, t, s);
			} catch (n) {
				Zo(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), j.T = a;
			}
		} else try {
			a = n(i, r), Yo(e, t, a);
		} catch (n) {
			Zo(e, t, n);
		}
	}
	function Yo(e, t, n) {
		typeof n == `object` && n && typeof n.then == `function` ? n.then(function(n) {
			Xo(e, t, n);
		}, function(n) {
			return Zo(e, t, n);
		}) : Xo(e, t, n);
	}
	function Xo(e, t, n) {
		t.status = `fulfilled`, t.value = n, Qo(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Jo(e, n)));
	}
	function Zo(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = `rejected`, t.reason = n, Qo(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function Qo(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function $o(e, t) {
		return t;
	}
	function es(e, t) {
		if (V) {
			var n = K.formState;
			if (n !== null) {
				a: {
					var r = H;
					if (V) {
						if (Mi) {
							b: {
								for (var i = Mi, a = Pi; i.nodeType !== 8;) {
									if (!a) {
										i = null;
										break b;
									}
									if (i = cf(i.nextSibling), i === null) {
										i = null;
										break b;
									}
								}
								a = i.data, i = a === `F!` || a === `F` ? i : null;
							}
							if (i) {
								Mi = cf(i.nextSibling), r = i.data === `F!`;
								break a;
							}
						}
						Ii(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = ko(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: $o,
			lastRenderedState: t
		}, n.queue = r, n = Ms.bind(null, H, r), r.dispatch = n, r = Go(!1), a = Ps.bind(null, H, !1, r.queue), r = ko(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = qo.bind(null, H, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function ts(e) {
		return ns(Ao(), U, e);
	}
	function ns(e, t, n) {
		if (t = Lo(e, t, $o)[0], e = Io(Fo)[0], typeof t == `object` && t && typeof t.then == `function`) try {
			var r = Mo(t);
		} catch (e) {
			throw e === ba ? Sa : e;
		}
		else r = t;
		t = Ao();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (H.flags |= 2048, as(9, { destroy: void 0 }, rs.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function rs(e, t) {
		e.action = t;
	}
	function is(e) {
		var t = Ao(), n = U;
		if (n !== null) return ns(t, n, e);
		Ao(), t = t.memoizedState, n = Ao();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function as(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = H.updateQueue, t === null && (t = jo(), H.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function os() {
		return Ao().memoizedState;
	}
	function ss(e, t, n, r) {
		var i = ko();
		H.flags |= e, i.memoizedState = as(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function cs(e, t, n, r) {
		var i = Ao();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		U !== null && r !== null && xo(r, U.memoizedState.deps) ? i.memoizedState = as(t, a, n, r) : (H.flags |= e, i.memoizedState = as(1 | t, a, n, r));
	}
	function ls(e, t) {
		ss(8390656, 8, e, t);
	}
	function us(e, t) {
		cs(2048, 8, e, t);
	}
	function ds(e) {
		H.flags |= 4;
		var t = H.updateQueue;
		if (t === null) t = jo(), H.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function fs(e) {
		var t = Ao().memoizedState;
		return ds({
			ref: t,
			nextImpl: e
		}), function() {
			if (G & 2) throw Error(a(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function ps(e, t) {
		return cs(4, 2, e, t);
	}
	function ms(e, t) {
		return cs(4, 4, e, t);
	}
	function hs(e, t) {
		if (typeof t == `function`) {
			e = e();
			var n = t(e);
			return function() {
				typeof n == `function` ? n() : t(null);
			};
		}
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function gs(e, t, n) {
		n = n == null ? null : n.concat([e]), cs(4, 4, hs.bind(null, t, e), n);
	}
	function _s() {}
	function vs(e, t) {
		var n = Ao();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && xo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function ys(e, t) {
		var n = Ao();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && xo(t, r[1])) return r[0];
		if (r = e(), ho) {
			Re(!0);
			try {
				e();
			} finally {
				Re(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function bs(e, t, n) {
		return n === void 0 || uo & 1073741824 && !(J & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = mu(), H.lanes |= e, Kl |= e, n);
	}
	function xs(e, t, n, r) {
		return xr(n, t) ? n : Xa.current === null ? !(uo & 42) || uo & 1073741824 && !(J & 261930) ? (rc = !0, e.memoizedState = n) : (e = mu(), H.lanes |= e, Kl |= e, t) : (e = bs(e, n, r), xr(e, t) || (rc = !0), e);
	}
	function Ss(e, t, n, r, i) {
		var a = M.p;
		M.p = a !== 0 && 8 > a ? a : 8;
		var o = j.T, s = {};
		j.T = s, Ps(e, !1, t, n);
		try {
			var c = i(), l = j.S;
			l !== null && l(s, c), typeof c == `object` && c && typeof c.then == `function` ? Ns(e, t, ma(c, r), pu(e)) : Ns(e, t, r, pu(e));
		} catch (n) {
			Ns(e, t, {
				then: function() {},
				status: `rejected`,
				reason: n
			}, pu());
		} finally {
			M.p = a, o !== null && s.types !== null && (o.types = s.types), j.T = o;
		}
	}
	function Cs() {}
	function ws(e, t, n, r) {
		if (e.tag !== 5) throw Error(a(476));
		var i = Ts(e).queue;
		Ss(e, i, t, ie, n === null ? Cs : function() {
			return Es(e), n(r);
		});
	}
	function Ts(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: ie,
			baseState: ie,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Fo,
				lastRenderedState: ie
			},
			next: null
		};
		var n = {};
		return t.next = {
			memoizedState: n,
			baseState: n,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Fo,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function Es(e) {
		var t = Ts(e);
		t.next === null && (t = e.alternate.memoizedState), Ns(e, t.next.queue, {}, pu());
	}
	function Ds() {
		return $i(Qf);
	}
	function Os() {
		return Ao().memoizedState;
	}
	function ks() {
		return Ao().memoizedState;
	}
	function As(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = pu();
					e = Va(n);
					var r = Ha(t, e, n);
					r !== null && (hu(r, t, n), Ua(r, t, n)), t = { cache: oa() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function js(e, t, n) {
		var r = pu();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, Fs(e) ? Is(t, n) : (n = ei(e, t, n, r), n !== null && (hu(n, e, r), Ls(n, t, r)));
	}
	function Ms(e, t, n) {
		Ns(e, t, n, pu());
	}
	function Ns(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (Fs(e)) Is(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, xr(s, o)) return $r(e, t, i, 0), K === null && Qr(), !1;
			} catch {}
			if (n = ei(e, t, i, r), n !== null) return hu(n, e, r), Ls(n, t, r), !0;
		}
		return !1;
	}
	function Ps(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: dd(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, Fs(e)) {
			if (t) throw Error(a(479));
		} else t = ei(e, n, r, 2), t !== null && hu(t, e, 2);
	}
	function Fs(e) {
		var t = e.alternate;
		return e === H || t !== null && t === H;
	}
	function Is(e, t) {
		mo = po = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function Ls(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, tt(e, n);
		}
	}
	var Rs = {
		readContext: $i,
		use: No,
		useCallback: bo,
		useContext: bo,
		useEffect: bo,
		useImperativeHandle: bo,
		useLayoutEffect: bo,
		useInsertionEffect: bo,
		useMemo: bo,
		useReducer: bo,
		useRef: bo,
		useState: bo,
		useDebugValue: bo,
		useDeferredValue: bo,
		useTransition: bo,
		useSyncExternalStore: bo,
		useId: bo,
		useHostTransitionStatus: bo,
		useFormState: bo,
		useActionState: bo,
		useOptimistic: bo,
		useMemoCache: bo,
		useCacheRefresh: bo
	};
	Rs.useEffectEvent = bo;
	var zs = {
		readContext: $i,
		use: No,
		useCallback: function(e, t) {
			return ko().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: $i,
		useEffect: ls,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), ss(4194308, 4, hs.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return ss(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			ss(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = ko();
			t = t === void 0 ? null : t;
			var r = e();
			if (ho) {
				Re(!0);
				try {
					e();
				} finally {
					Re(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = ko();
			if (n !== void 0) {
				var i = n(t);
				if (ho) {
					Re(!0);
					try {
						n(t);
					} finally {
						Re(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = js.bind(null, H, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = ko();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = Go(e);
			var t = e.queue, n = Ms.bind(null, H, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: _s,
		useDeferredValue: function(e, t) {
			return bs(ko(), e, t);
		},
		useTransition: function() {
			var e = Go(!1);
			return e = Ss.bind(null, H, e.queue, !0, !1), ko().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = H, i = ko();
			if (V) {
				if (n === void 0) throw Error(a(407));
				n = n();
			} else {
				if (n = t(), K === null) throw Error(a(349));
				J & 127 || Bo(r, t, n);
			}
			i.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return i.queue = o, ls(Ho.bind(null, r, o, e), [e]), r.flags |= 2048, as(9, { destroy: void 0 }, Vo.bind(null, r, o, n, t), null), n;
		},
		useId: function() {
			var e = ko(), t = K.identifierPrefix;
			if (V) {
				var n = Ti, r = wi;
				n = (r & ~(1 << 32 - ze(r) - 1)).toString(32) + n, t = `_` + t + `R_` + n, n = go++, 0 < n && (t += `H` + n.toString(32)), t += `_`;
			} else n = yo++, t = `_` + t + `r_` + n.toString(32) + `_`;
			return e.memoizedState = t;
		},
		useHostTransitionStatus: Ds,
		useFormState: es,
		useActionState: es,
		useOptimistic: function(e) {
			var t = ko();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = Ps.bind(null, H, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: Po,
		useCacheRefresh: function() {
			return ko().memoizedState = As.bind(null, H);
		},
		useEffectEvent: function(e) {
			var t = ko(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (G & 2) throw Error(a(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, Bs = {
		readContext: $i,
		use: No,
		useCallback: vs,
		useContext: $i,
		useEffect: us,
		useImperativeHandle: gs,
		useInsertionEffect: ps,
		useLayoutEffect: ms,
		useMemo: ys,
		useReducer: Io,
		useRef: os,
		useState: function() {
			return Io(Fo);
		},
		useDebugValue: _s,
		useDeferredValue: function(e, t) {
			return xs(Ao(), U.memoizedState, e, t);
		},
		useTransition: function() {
			var e = Io(Fo)[0], t = Ao().memoizedState;
			return [typeof e == `boolean` ? e : Mo(e), t];
		},
		useSyncExternalStore: zo,
		useId: Os,
		useHostTransitionStatus: Ds,
		useFormState: ts,
		useActionState: ts,
		useOptimistic: function(e, t) {
			return Ko(Ao(), U, e, t);
		},
		useMemoCache: Po,
		useCacheRefresh: ks
	};
	Bs.useEffectEvent = fs;
	var Vs = {
		readContext: $i,
		use: No,
		useCallback: vs,
		useContext: $i,
		useEffect: us,
		useImperativeHandle: gs,
		useInsertionEffect: ps,
		useLayoutEffect: ms,
		useMemo: ys,
		useReducer: Ro,
		useRef: os,
		useState: function() {
			return Ro(Fo);
		},
		useDebugValue: _s,
		useDeferredValue: function(e, t) {
			var n = Ao();
			return U === null ? bs(n, e, t) : xs(n, U.memoizedState, e, t);
		},
		useTransition: function() {
			var e = Ro(Fo)[0], t = Ao().memoizedState;
			return [typeof e == `boolean` ? e : Mo(e), t];
		},
		useSyncExternalStore: zo,
		useId: Os,
		useHostTransitionStatus: Ds,
		useFormState: is,
		useActionState: is,
		useOptimistic: function(e, t) {
			var n = Ao();
			return U === null ? (n.baseState = e, [e, n.queue.dispatch]) : Ko(n, U, e, t);
		},
		useMemoCache: Po,
		useCacheRefresh: ks
	};
	Vs.useEffectEvent = fs;
	function Hs(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : m({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var Us = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = pu(), i = Va(r);
			i.payload = t, n != null && (i.callback = n), t = Ha(e, i, r), t !== null && (hu(t, e, r), Ua(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = pu(), i = Va(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Ha(e, i, r), t !== null && (hu(t, e, r), Ua(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = pu(), r = Va(n);
			r.tag = 2, t != null && (r.callback = t), t = Ha(e, r, n), t !== null && (hu(t, e, n), Ua(t, e, n));
		}
	};
	function Ws(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == `function` ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Sr(n, r) || !Sr(i, a) : !0;
	}
	function Gs(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == `function` && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Us.enqueueReplaceState(t, t.state, null);
	}
	function Ks(e, t) {
		var n = t;
		if (`ref` in t) for (var r in n = {}, t) r !== `ref` && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = m({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function qs(e) {
		Jr(e);
	}
	function Js(e) {
		console.error(e);
	}
	function Ys(e) {
		Jr(e);
	}
	function Xs(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Zs(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			});
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Qs(e, t, n) {
		return n = Va(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			Xs(e, t);
		}, n;
	}
	function $s(e) {
		return e = Va(e), e.tag = 3, e;
	}
	function ec(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == `function`) {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				Zs(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == `function` && (e.callback = function() {
			Zs(t, n, r), typeof i != `function` && (iu === null ? iu = /* @__PURE__ */ new Set([this]) : iu.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? `` : e });
		});
	}
	function tc(e, t, n, r, i) {
		if (n.flags |= 32768, typeof r == `object` && r && typeof r.then == `function`) {
			if (t = n.alternate, t !== null && Xi(t, n, i, !0), n = to.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13: return no === null ? Du() : n.alternate === null && Gl === 0 && (Gl = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, r === Ca ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), Gu(e, r, i)), !1;
					case 22: return n.flags |= 65536, r === Ca ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), Gu(e, r, i)), !1;
				}
				throw Error(a(435, n.tag));
			}
			return Gu(e, r, i), Du(), !1;
		}
		if (V) return t = to.current, t === null ? (r !== Fi && (t = Error(a(423), { cause: r }), Hi(gi(t, n))), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, r = gi(r, n), i = Qs(e.stateNode, r, i), Wa(e, i), Gl !== 4 && (Gl = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = i, r !== Fi && (e = Error(a(422), { cause: r }), Hi(gi(e, n)))), !1;
		var o = Error(a(520), { cause: r });
		if (o = gi(o, n), Zl === null ? Zl = [o] : Zl.push(o), Gl !== 4 && (Gl = 2), t === null) return !0;
		r = gi(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = i & -i, n.lanes |= e, e = Qs(n.stateNode, r, e), Wa(n, e), !1;
				case 1: if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == `function` || o !== null && typeof o.componentDidCatch == `function` && (iu === null || !iu.has(o)))) return n.flags |= 65536, i &= -i, n.lanes |= i, i = $s(i), ec(i, e, n, r), Wa(n, i), !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var nc = Error(a(461)), rc = !1;
	function ic(e, t, n, r) {
		t.child = e === null ? La(t, null, n, r) : Ia(t, e.child, n, r);
	}
	function ac(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if (`ref` in r) {
			var o = {};
			for (var s in r) s !== `ref` && (o[s] = r[s]);
		} else o = r;
		return Qi(t), r = So(e, t, n, o, a, i), s = Eo(), e !== null && !rc ? (Do(e, t, i), kc(e, t, i)) : (V && s && Oi(t), t.flags |= 1, ic(e, t, r, i), t.child);
	}
	function oc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == `function` && !si(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, sc(e, t, a, r, i)) : (e = ui(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !Ac(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Sr : n, n(o, r) && e.ref === t.ref) return kc(e, t, i);
		}
		return t.flags |= 1, e = ci(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function sc(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Sr(a, r) && e.ref === t.ref) if (rc = !1, t.pendingProps = r = a, Ac(e, i)) e.flags & 131072 && (rc = !0);
			else return t.lanes = e.lanes, kc(e, t, i);
		}
		return hc(e, t, n, r, i);
	}
	function cc(e, t, n, r) {
		var i = r.children, a = e === null ? null : e.memoizedState;
		if (e === null && t.stateNode === null && (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), r.mode === `hidden`) {
			if (t.flags & 128) {
				if (a = a === null ? n : a.baseLanes | n, e !== null) {
					for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
					r = i & ~a;
				} else r = 0, t.child = null;
				return uc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && va(t, a === null ? null : a.cachePool), a === null ? $a() : Qa(t, a), ao(t);
			else return r = t.lanes = 536870912, uc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && va(t, null), $a(), oo(t)) : (va(t, a.cachePool), Qa(t, a), oo(t), t.memoizedState = null);
		return ic(e, t, i, n), t.child;
	}
	function lc(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function uc(e, t, n, r, i) {
		var a = _a();
		return a = a === null ? null : {
			parent: aa._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && va(t, null), $a(), ao(t), e !== null && Xi(e, t, r, !0), t.childLanes = i, null;
	}
	function dc(e, t) {
		return t = wc({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function fc(e, t, n) {
		return Ia(t, e.child, null, n), e = dc(t, t.pendingProps), e.flags |= 2, so(t), t.memoizedState = null, e;
	}
	function pc(e, t, n) {
		var r = t.pendingProps, i = (t.flags & 128) != 0;
		if (t.flags &= -129, e === null) {
			if (V) {
				if (r.mode === `hidden`) return e = dc(t, r), t.lanes = 536870912, lc(null, e);
				if (io(t), (e = Mi) ? (e = rf(e, Pi), e = e !== null && e.data === `&` ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Ci === null ? null : {
						id: wi,
						overflow: Ti
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = pi(e), n.return = t, t.child = n, ji = t, Mi = null)) : e = null, e === null) throw Ii(t);
				return t.lanes = 536870912, null;
			}
			return dc(t, r);
		}
		var o = e.memoizedState;
		if (o !== null) {
			var s = o.dehydrated;
			if (io(t), i) if (t.flags & 256) t.flags &= -257, t = fc(e, t, n);
			else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
			else throw Error(a(558));
			else if (rc || Xi(e, t, n, !1), i = (n & e.childLanes) !== 0, rc || i) {
				if (r = K, r !== null && (s = nt(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, ti(e, s), hu(r, e, s), nc;
				Du(), t = fc(e, t, n);
			} else e = o.treeContext, Mi = cf(s.nextSibling), ji = t, V = !0, Ni = null, Pi = !1, e !== null && Ai(t, e), t = dc(t, r), t.flags |= 4096;
			return t;
		}
		return e = ci(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function mc(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != `function` && typeof n != `object`) throw Error(a(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function hc(e, t, n, r, i) {
		return Qi(t), n = So(e, t, n, r, void 0, i), r = Eo(), e !== null && !rc ? (Do(e, t, i), kc(e, t, i)) : (V && r && Oi(t), t.flags |= 1, ic(e, t, n, i), t.child);
	}
	function gc(e, t, n, r, i, a) {
		return Qi(t), t.updateQueue = null, n = wo(t, r, n, i), Co(e), r = Eo(), e !== null && !rc ? (Do(e, t, a), kc(e, t, a)) : (V && r && Oi(t), t.flags |= 1, ic(e, t, n, a), t.child);
	}
	function _c(e, t, n, r, i) {
		if (Qi(t), t.stateNode === null) {
			var a = ii, o = n.contextType;
			typeof o == `object` && o && (a = $i(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = Us, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, za(t), o = n.contextType, a.context = typeof o == `object` && o ? $i(o) : ii, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == `function` && (Hs(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == `function` || typeof a.getSnapshotBeforeUpdate == `function` || typeof a.UNSAFE_componentWillMount != `function` && typeof a.componentWillMount != `function` || (o = a.state, typeof a.componentWillMount == `function` && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount(), o !== a.state && Us.enqueueReplaceState(a, a.state, null), qa(t, r, a, i), Ka(), a.state = t.memoizedState), typeof a.componentDidMount == `function` && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = Ks(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = ii, typeof u == `object` && u && (o = $i(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == `function` || typeof a.getSnapshotBeforeUpdate == `function`, s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != `function` && typeof a.componentWillReceiveProps != `function` || (s || l !== o) && Gs(t, a, r, o), Ra = !1;
			var f = t.memoizedState;
			a.state = f, qa(t, r, a, i), Ka(), l = t.memoizedState, s || f !== l || Ra ? (typeof d == `function` && (Hs(t, n, d, r), l = t.memoizedState), (c = Ra || Ws(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != `function` && typeof a.componentWillMount != `function` || (typeof a.componentWillMount == `function` && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == `function` && (t.flags |= 4194308)) : (typeof a.componentDidMount == `function` && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == `function` && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, Ba(e, t), o = t.memoizedProps, u = Ks(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = ii, typeof l == `object` && l && (c = $i(l)), s = n.getDerivedStateFromProps, (l = typeof s == `function` || typeof a.getSnapshotBeforeUpdate == `function`) || typeof a.UNSAFE_componentWillReceiveProps != `function` && typeof a.componentWillReceiveProps != `function` || (o !== d || f !== c) && Gs(t, a, r, c), Ra = !1, f = t.memoizedState, a.state = f, qa(t, r, a, i), Ka();
			var p = t.memoizedState;
			o !== d || f !== p || Ra || e !== null && e.dependencies !== null && Zi(e.dependencies) ? (typeof s == `function` && (Hs(t, n, s, r), p = t.memoizedState), (u = Ra || Ws(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && Zi(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != `function` && typeof a.componentWillUpdate != `function` || (typeof a.componentWillUpdate == `function` && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == `function` && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == `function` && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == `function` && (t.flags |= 1024)) : (typeof a.componentDidUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, mc(e, t), r = (t.flags & 128) != 0, a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != `function` ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = Ia(t, e.child, null, i), t.child = Ia(t, null, n, i)) : ic(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = kc(e, t, i), e;
	}
	function vc(e, t, n, r) {
		return Bi(), t.flags |= 256, ic(e, t, n, r), t.child;
	}
	var yc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function bc(e) {
		return {
			baseLanes: e,
			cachePool: ya()
		};
	}
	function xc(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= Yl), e;
	}
	function Sc(e, t, n) {
		var r = t.pendingProps, i = !1, o = (t.flags & 128) != 0, s;
		if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (co.current & 2) != 0), s && (i = !0, t.flags &= -129), s = (t.flags & 32) != 0, t.flags &= -33, e === null) {
			if (V) {
				if (i ? ro(t) : oo(t), (e = Mi) ? (e = rf(e, Pi), e = e !== null && e.data !== `&` ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Ci === null ? null : {
						id: wi,
						overflow: Ti
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = pi(e), n.return = t, t.child = n, ji = t, Mi = null)) : e = null, e === null) throw Ii(t);
				return of(e) ? t.lanes = 32 : t.lanes = 536870912, null;
			}
			var c = r.children;
			return r = r.fallback, i ? (oo(t), i = t.mode, c = wc({
				mode: `hidden`,
				children: c
			}, i), r = di(r, i, n, null), c.return = t, r.return = t, c.sibling = r, t.child = c, r = t.child, r.memoizedState = bc(n), r.childLanes = xc(e, s, n), t.memoizedState = yc, lc(null, r)) : (ro(t), Cc(t, c));
		}
		var l = e.memoizedState;
		if (l !== null && (c = l.dehydrated, c !== null)) {
			if (o) t.flags & 256 ? (ro(t), t.flags &= -257, t = Tc(e, t, n)) : t.memoizedState === null ? (oo(t), c = r.fallback, i = t.mode, r = wc({
				mode: `visible`,
				children: r.children
			}, i), c = di(c, i, n, null), c.flags |= 2, r.return = t, c.return = t, r.sibling = c, t.child = r, Ia(t, e.child, null, n), r = t.child, r.memoizedState = bc(n), r.childLanes = xc(e, s, n), t.memoizedState = yc, t = lc(null, r)) : (oo(t), t.child = e.child, t.flags |= 128, t = null);
			else if (ro(t), of(c)) {
				if (s = c.nextSibling && c.nextSibling.dataset, s) var u = s.dgst;
				s = u, r = Error(a(419)), r.stack = ``, r.digest = s, Hi({
					value: r,
					source: null,
					stack: null
				}), t = Tc(e, t, n);
			} else if (rc || Xi(e, t, n, !1), s = (n & e.childLanes) !== 0, rc || s) {
				if (s = K, s !== null && (r = nt(s, n), r !== 0 && r !== l.retryLane)) throw l.retryLane = r, ti(e, r), hu(s, e, r), nc;
				af(c) || Du(), t = Tc(e, t, n);
			} else af(c) ? (t.flags |= 192, t.child = e.child, t = null) : (e = l.treeContext, Mi = cf(c.nextSibling), ji = t, V = !0, Ni = null, Pi = !1, e !== null && Ai(t, e), t = Cc(t, r.children), t.flags |= 4096);
			return t;
		}
		return i ? (oo(t), c = r.fallback, i = t.mode, l = e.child, u = l.sibling, r = ci(l, {
			mode: `hidden`,
			children: r.children
		}), r.subtreeFlags = l.subtreeFlags & 65011712, u === null ? (c = di(c, i, n, null), c.flags |= 2) : c = ci(u, c), c.return = t, r.return = t, r.sibling = c, t.child = r, lc(null, r), r = t.child, c = e.child.memoizedState, c === null ? c = bc(n) : (i = c.cachePool, i === null ? i = ya() : (l = aa._currentValue, i = i.parent === l ? i : {
			parent: l,
			pool: l
		}), c = {
			baseLanes: c.baseLanes | n,
			cachePool: i
		}), r.memoizedState = c, r.childLanes = xc(e, s, n), t.memoizedState = yc, lc(e.child, r)) : (ro(t), n = e.child, e = n.sibling, n = ci(n, {
			mode: `visible`,
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function Cc(e, t) {
		return t = wc({
			mode: `visible`,
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function wc(e, t) {
		return e = oi(22, e, null, t), e.lanes = 0, e;
	}
	function Tc(e, t, n) {
		return Ia(t, e.child, null, n), e = Cc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function Ec(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), Ji(e.return, t, n);
	}
	function Dc(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i,
			treeForkCount: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
	}
	function Oc(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = co.current, s = (o & 2) != 0;
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, P(co, o), ic(e, t, r, n), r = V ? bi : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && Ec(e, n, t);
			else if (e.tag === 19) Ec(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue;
			}
			if (e === t) break a;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break a;
				e = e.return;
			}
			e.sibling.return = e.return, e = e.sibling;
		}
		switch (i) {
			case `forwards`:
				for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && lo(e) === null && (i = n), n = n.sibling;
				n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Dc(t, !1, i, n, a, r);
				break;
			case `backwards`:
			case `unstable_legacy-backwards`:
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && lo(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				Dc(t, !0, n, null, a, r);
				break;
			case `together`:
				Dc(t, !1, null, null, void 0, r);
				break;
			default: t.memoizedState = null;
		}
		return t.child;
	}
	function kc(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), Kl |= t.lanes, (n & t.childLanes) === 0) if (e !== null) {
			if (Xi(e, t, n, !1), (n & t.childLanes) === 0) return null;
		} else return null;
		if (e !== null && t.child !== e.child) throw Error(a(153));
		if (t.child !== null) {
			for (e = t.child, n = ci(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = ci(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function Ac(e, t) {
		return (e.lanes & t) === 0 ? (e = e.dependencies, !!(e !== null && Zi(e))) : !0;
	}
	function jc(e, t, n) {
		switch (t.tag) {
			case 3:
				fe(t, t.stateNode.containerInfo), Ki(t, aa, e.memoizedState.cache), Bi();
				break;
			case 27:
			case 5:
				me(t);
				break;
			case 4:
				fe(t, t.stateNode.containerInfo);
				break;
			case 10:
				Ki(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, io(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (ro(t), e = kc(e, t, n), e === null ? null : e.sibling) : Sc(e, t, n) : (ro(t), t.flags |= 128, null);
				ro(t);
				break;
			case 19:
				var i = (e.flags & 128) != 0;
				if (r = (n & t.childLanes) !== 0, r ||= (Xi(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return Oc(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), P(co, co.current), r) break;
				return null;
			case 22: return t.lanes = 0, cc(e, t, n, t.pendingProps);
			case 24: Ki(t, aa, e.memoizedState.cache);
		}
		return kc(e, t, n);
	}
	function Mc(e, t, n) {
		if (e !== null) if (e.memoizedProps !== t.pendingProps) rc = !0;
		else {
			if (!Ac(e, n) && !(t.flags & 128)) return rc = !1, jc(e, t, n);
			rc = !!(e.flags & 131072);
		}
		else rc = !1, V && t.flags & 1048576 && Di(t, bi, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = Ea(t.elementType), t.type = e, typeof e == `function`) si(e) ? (r = Ks(e, r), t.tag = 1, t = _c(null, t, e, r, n)) : (t.tag = 0, t = hc(null, t, e, r, n));
					else {
						if (e != null) {
							var i = e.$$typeof;
							if (i === C) {
								t.tag = 11, t = ac(null, t, e, r, n);
								break a;
							} else if (i === E) {
								t.tag = 14, t = oc(null, t, e, r, n);
								break a;
							}
						}
						throw t = ne(e) || e, Error(a(306, t, ``));
					}
				}
				return t;
			case 0: return hc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, i = Ks(r, t.pendingProps), _c(e, t, r, i, n);
			case 3:
				a: {
					if (fe(t, t.stateNode.containerInfo), e === null) throw Error(a(387));
					r = t.pendingProps;
					var o = t.memoizedState;
					i = o.element, Ba(e, t), qa(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, Ki(t, aa, r), r !== o.cache && Yi(t, [aa], n, !0), Ka(), r = s.element, o.isDehydrated) if (o = {
						element: r,
						isDehydrated: !1,
						cache: s.cache
					}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
						t = vc(e, t, r, n);
						break a;
					} else if (r !== i) {
						i = gi(Error(a(424)), t), Hi(i), t = vc(e, t, r, n);
						break a;
					} else {
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
						}
						for (Mi = cf(e.firstChild), ji = t, V = !0, Ni = null, Pi = !0, n = La(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
					}
					else {
						if (Bi(), r === i) {
							t = kc(e, t, n);
							break a;
						}
						ic(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return mc(e, t), e === null ? (n = kf(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : V || (n = t.type, e = t.pendingProps, r = Bd(ue.current).createElement(n), r[st] = t, r[ct] = e, Pd(r, n, e), bt(r), t.stateNode = r) : t.memoizedState = kf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return me(t), e === null && V && (r = t.stateNode = ff(t.type, t.pendingProps, ue.current), ji = t, Pi = !0, i = Mi, Zd(t.type) ? (lf = i, Mi = cf(r.firstChild)) : Mi = i), ic(e, t, t.pendingProps.children, n), mc(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && V && ((i = r = Mi) && (r = tf(r, t.type, t.pendingProps, Pi), r === null ? i = !1 : (t.stateNode = r, ji = t, Mi = cf(r.firstChild), Pi = !1, i = !0)), i || Ii(t)), me(t), i = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, Ud(i, o) ? r = null : s !== null && Ud(i, s) && (t.flags |= 32), t.memoizedState !== null && (i = So(e, t, To, null, null, n), Qf._currentValue = i), mc(e, t), ic(e, t, r, n), t.child;
			case 6: return e === null && V && ((e = n = Mi) && (n = nf(n, t.pendingProps, Pi), n === null ? e = !1 : (t.stateNode = n, ji = t, Mi = null, e = !0)), e || Ii(t)), null;
			case 13: return Sc(e, t, n);
			case 4: return fe(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ia(t, null, r, n) : ic(e, t, r, n), t.child;
			case 11: return ac(e, t, t.type, t.pendingProps, n);
			case 7: return ic(e, t, t.pendingProps, n), t.child;
			case 8: return ic(e, t, t.pendingProps.children, n), t.child;
			case 12: return ic(e, t, t.pendingProps.children, n), t.child;
			case 10: return r = t.pendingProps, Ki(t, t.type, r.value), ic(e, t, r.children, n), t.child;
			case 9: return i = t.type._context, r = t.pendingProps.children, Qi(t), i = $i(i), r = r(i), t.flags |= 1, ic(e, t, r, n), t.child;
			case 14: return oc(e, t, t.type, t.pendingProps, n);
			case 15: return sc(e, t, t.type, t.pendingProps, n);
			case 19: return Oc(e, t, n);
			case 31: return pc(e, t, n);
			case 22: return cc(e, t, n, t.pendingProps);
			case 24: return Qi(t), r = $i(aa), e === null ? (i = _a(), i === null && (i = K, o = oa(), i.pooledCache = o, o.refCount++, o !== null && (i.pooledCacheLanes |= n), i = o), t.memoizedState = {
				parent: r,
				cache: i
			}, za(t), Ki(t, aa, i)) : ((e.lanes & n) !== 0 && (Ba(e, t), qa(t, null, null, n), Ka()), i = e.memoizedState, o = t.memoizedState, i.parent === r ? (r = o.cache, Ki(t, aa, r), r !== i.cache && Yi(t, [aa], n, !0)) : (i = {
				parent: r,
				cache: r
			}, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), Ki(t, aa, r))), ic(e, t, t.pendingProps.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(a(156, t.tag));
	}
	function Nc(e) {
		e.flags |= 4;
	}
	function Pc(e, t, n, r, i) {
		if ((t = (e.mode & 32) != 0) && (t = !1), t) {
			if (e.flags |= 16777216, (i & 335544128) === i) if (e.stateNode.complete) e.flags |= 8192;
			else if (wu()) e.flags |= 8192;
			else throw Da = Ca, xa;
		} else e.flags &= -16777217;
	}
	function Fc(e, t) {
		if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Wf(t)) if (wu()) e.flags |= 8192;
		else throw Da = Ca, xa;
	}
	function Ic(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : Xe(), e.lanes |= t, Xl |= t);
	}
	function Lc(e, t) {
		if (!V) switch (e.tailMode) {
			case `hidden`:
				t = e.tail;
				for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
				break;
			case `collapsed`:
				n = e.tail;
				for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
		}
	}
	function W(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 65011712, r |= i.flags & 65011712, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function Rc(e, t, n) {
		var r = t.pendingProps;
		switch (ki(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return W(t), null;
			case 1: return W(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), qi(aa), pe(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (zi(t) ? Nc(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Vi())), W(t), null;
			case 26:
				var i = t.type, o = t.memoizedState;
				return e === null ? (Nc(t), o === null ? (W(t), Pc(t, i, null, r, n)) : (W(t), Fc(t, o))) : o ? o === e.memoizedState ? (W(t), t.flags &= -16777217) : (Nc(t), W(t), Fc(t, o)) : (e = e.memoizedProps, e !== r && Nc(t), W(t), Pc(t, i, e, r, n)), null;
			case 27:
				if (he(t), n = ue.current, i = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && Nc(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(a(166));
						return W(t), null;
					}
					e = ce.current, zi(t) ? Li(t, e) : (e = ff(i, r, n), t.stateNode = e, Nc(t));
				}
				return W(t), null;
			case 5:
				if (he(t), i = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && Nc(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(a(166));
						return W(t), null;
					}
					if (o = ce.current, zi(t)) Li(t, o);
					else {
						var s = Bd(ue.current);
						switch (o) {
							case 1:
								o = s.createElementNS(`http://www.w3.org/2000/svg`, i);
								break;
							case 2:
								o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, i);
								break;
							default: switch (i) {
								case `svg`:
									o = s.createElementNS(`http://www.w3.org/2000/svg`, i);
									break;
								case `math`:
									o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, i);
									break;
								case `script`:
									o = s.createElement(`div`), o.innerHTML = `<script><\/script>`, o = o.removeChild(o.firstChild);
									break;
								case `select`:
									o = typeof r.is == `string` ? s.createElement(`select`, { is: r.is }) : s.createElement(`select`), r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
									break;
								default: o = typeof r.is == `string` ? s.createElement(i, { is: r.is }) : s.createElement(i);
							}
						}
						o[st] = t, o[ct] = r;
						a: for (s = t.child; s !== null;) {
							if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								s.child.return = s, s = s.child;
								continue;
							}
							if (s === t) break a;
							for (; s.sibling === null;) {
								if (s.return === null || s.return === t) break a;
								s = s.return;
							}
							s.sibling.return = s.return, s = s.sibling;
						}
						t.stateNode = o;
						a: switch (Pd(o, i, r), i) {
							case `button`:
							case `input`:
							case `select`:
							case `textarea`:
								r = !!r.autoFocus;
								break a;
							case `img`:
								r = !0;
								break a;
							default: r = !1;
						}
						r && Nc(t);
					}
				}
				return W(t), Pc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && Nc(t);
				else {
					if (typeof r != `string` && t.stateNode === null) throw Error(a(166));
					if (e = ue.current, zi(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, i = ji, i !== null) switch (i.tag) {
							case 27:
							case 5: r = i.memoizedProps;
						}
						e[st] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || Md(e.nodeValue, n)), e || Ii(t, !0);
					} else e = Bd(e).createTextNode(r), e[st] = t, t.stateNode = e;
				}
				return W(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = zi(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(a(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(a(557));
							e[st] = t;
						} else Bi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						W(t), e = !1;
					} else n = Vi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (so(t), t) : (so(t), null);
					if (t.flags & 128) throw Error(a(558));
				}
				return W(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (i = zi(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!i) throw Error(a(318));
							if (i = t.memoizedState, i = i === null ? null : i.dehydrated, !i) throw Error(a(317));
							i[st] = t;
						} else Bi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						W(t), i = !1;
					} else i = Vi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
					if (!i) return t.flags & 256 ? (so(t), t) : (so(t), null);
				}
				return so(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, i = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (i = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== i && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Ic(t, t.updateQueue), W(t), null);
			case 4: return pe(), e === null && Sd(t.stateNode.containerInfo), W(t), null;
			case 10: return qi(t.type), W(t), null;
			case 19:
				if (se(co), r = t.memoizedState, r === null) return W(t), null;
				if (i = (t.flags & 128) != 0, o = r.rendering, o === null) if (i) Lc(r, !1);
				else {
					if (Gl !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
						if (o = lo(e), o !== null) {
							for (t.flags |= 128, Lc(r, !1), e = o.updateQueue, t.updateQueue = e, Ic(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) li(n, e), n = n.sibling;
							return P(co, co.current & 1 | 2), V && Ei(t, r.treeForkCount), t.child;
						}
						e = e.sibling;
					}
					r.tail !== null && De() > nu && (t.flags |= 128, i = !0, Lc(r, !1), t.lanes = 4194304);
				}
				else {
					if (!i) if (e = lo(o), e !== null) {
						if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Ic(t, e), Lc(r, !0), r.tail === null && r.tailMode === `hidden` && !o.alternate && !V) return W(t), null;
					} else 2 * De() - r.renderingStartTime > nu && n !== 536870912 && (t.flags |= 128, i = !0, Lc(r, !1), t.lanes = 4194304);
					r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e === null ? t.child = o : e.sibling = o, r.last = o);
				}
				return r.tail === null ? (W(t), null) : (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = De(), e.sibling = null, n = co.current, P(co, i ? n & 1 | 2 : n & 1), V && Ei(t, r.treeForkCount), e);
			case 22:
			case 23: return so(t), eo(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (W(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : W(t), n = t.updateQueue, n !== null && Ic(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && se(ga), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), qi(aa), W(t), null;
			case 25: return null;
			case 30: return null;
		}
		throw Error(a(156, t.tag));
	}
	function zc(e, t) {
		switch (ki(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return qi(aa), pe(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return he(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (so(t), t.alternate === null) throw Error(a(340));
					Bi();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (so(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(a(340));
					Bi();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return se(co), null;
			case 4: return pe(), null;
			case 10: return qi(t.type), null;
			case 22:
			case 23: return so(t), eo(), e !== null && se(ga), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return qi(aa), null;
			case 25: return null;
			default: return null;
		}
	}
	function Bc(e, t) {
		switch (ki(t), t.tag) {
			case 3:
				qi(aa), pe();
				break;
			case 26:
			case 27:
			case 5:
				he(t);
				break;
			case 4:
				pe();
				break;
			case 31:
				t.memoizedState !== null && so(t);
				break;
			case 13:
				so(t);
				break;
			case 19:
				se(co);
				break;
			case 10:
				qi(t.type);
				break;
			case 22:
			case 23:
				so(t), eo(), e !== null && se(ga);
				break;
			case 24: qi(aa);
		}
	}
	function Vc(e, t) {
		try {
			var n = t.updateQueue, r = n === null ? null : n.lastEffect;
			if (r !== null) {
				var i = r.next;
				n = i;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var a = n.create, o = n.inst;
						r = a(), o.destroy = r;
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function Hc(e, t, n) {
		try {
			var r = t.updateQueue, i = r === null ? null : r.lastEffect;
			if (i !== null) {
				var a = i.next;
				r = a;
				do {
					if ((r.tag & e) === e) {
						var o = r.inst, s = o.destroy;
						if (s !== void 0) {
							o.destroy = void 0, i = t;
							var c = n, l = s;
							try {
								l();
							} catch (e) {
								Z(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function Uc(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				Ya(t, n);
			} catch (t) {
				Z(e, e.return, t);
			}
		}
	}
	function Wc(e, t, n) {
		n.props = Ks(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			Z(e, t, n);
		}
	}
	function Gc(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == `function` ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			Z(e, t, n);
		}
	}
	function Kc(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) if (typeof r == `function`) try {
			r();
		} catch (n) {
			Z(e, t, n);
		} finally {
			e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
		}
		else if (typeof n == `function`) try {
			n(null);
		} catch (n) {
			Z(e, t, n);
		}
		else n.current = null;
	}
	function qc(e) {
		var t = e.type, n = e.memoizedProps, r = e.stateNode;
		try {
			a: switch (t) {
				case `button`:
				case `input`:
				case `select`:
				case `textarea`:
					n.autoFocus && r.focus();
					break a;
				case `img`: n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	function Jc(e, t, n) {
		try {
			var r = e.stateNode;
			Fd(r, e.type, n, t), r[ct] = t;
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	function Yc(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Zd(e.type) || e.tag === 4;
	}
	function Xc(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Yc(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && Zd(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Zc(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = en));
		else if (r !== 4 && (r === 27 && Zd(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null)) for (Zc(e, t, n), e = e.sibling; e !== null;) Zc(e, t, n), e = e.sibling;
	}
	function Qc(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
		else if (r !== 4 && (r === 27 && Zd(e.type) && (n = e.stateNode), e = e.child, e !== null)) for (Qc(e, t, n), e = e.sibling; e !== null;) Qc(e, t, n), e = e.sibling;
	}
	function $c(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			Pd(t, r, n), t[st] = e, t[ct] = n;
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	var el = !1, tl = !1, nl = !1, rl = typeof WeakSet == `function` ? WeakSet : Set, il = null;
	function al(e, t) {
		if (e = e.containerInfo, Rd = sp, e = Er(e), Dr(e)) {
			if (`selectionStart` in e) var n = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				n = (n = e.ownerDocument) && n.defaultView || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var i = r.anchorOffset, o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== n || i !== 0 && f.nodeType !== 3 || (c = s + i), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === n && ++u === i && (c = s), p === o && ++d === r && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					n = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else n = null;
			}
			n ||= {
				start: 0,
				end: 0
			};
		} else n = null;
		for (zd = {
			focusedElem: e,
			selectionRange: n
		}, sp = !1, il = t; il !== null;) if (t = il, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, il = e;
		else for (; il !== null;) {
			switch (t = il, o = t.alternate, e = t.flags, t.tag) {
				case 0:
					if (e & 4 && (e = t.updateQueue, e = e === null ? null : e.events, e !== null)) for (n = 0; n < e.length; n++) i = e[n], i.ref.impl = i.nextImpl;
					break;
				case 11:
				case 15: break;
				case 1:
					if (e & 1024 && o !== null) {
						e = void 0, n = t, i = o.memoizedProps, o = o.memoizedState, r = n.stateNode;
						try {
							var h = Ks(n.type, i);
							e = r.getSnapshotBeforeUpdate(h, o), r.__reactInternalSnapshotBeforeUpdate = e;
						} catch (e) {
							Z(n, n.return, e);
						}
					}
					break;
				case 3:
					if (e & 1024) {
						if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9) ef(e);
						else if (n === 1) switch (e.nodeName) {
							case `HEAD`:
							case `HTML`:
							case `BODY`:
								ef(e);
								break;
							default: e.textContent = ``;
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				default: if (e & 1024) throw Error(a(163));
			}
			if (e = t.sibling, e !== null) {
				e.return = t.return, il = e;
				break;
			}
			il = t.return;
		}
	}
	function ol(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				xl(e, n), r & 4 && Vc(5, n);
				break;
			case 1:
				if (xl(e, n), r & 4) if (e = n.stateNode, t === null) try {
					e.componentDidMount();
				} catch (e) {
					Z(n, n.return, e);
				}
				else {
					var i = Ks(n.type, t.memoizedProps);
					t = t.memoizedState;
					try {
						e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
					} catch (e) {
						Z(n, n.return, e);
					}
				}
				r & 64 && Uc(n), r & 512 && Gc(n, n.return);
				break;
			case 3:
				if (xl(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						Ya(e, t);
					} catch (e) {
						Z(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && $c(n);
			case 26:
			case 5:
				xl(e, n), t === null && r & 4 && qc(n), r & 512 && Gc(n, n.return);
				break;
			case 12:
				xl(e, n);
				break;
			case 31:
				xl(e, n), r & 4 && fl(e, n);
				break;
			case 13:
				xl(e, n), r & 4 && pl(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Ju.bind(null, n), sf(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || el, !r) {
					t = t !== null && t.memoizedState !== null || tl, i = el;
					var a = tl;
					el = r, (tl = t) && !a ? Cl(e, n, (n.subtreeFlags & 8772) != 0) : xl(e, n), el = i, tl = a;
				}
				break;
			case 30: break;
			default: xl(e, n);
		}
	}
	function sl(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, sl(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ht(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var cl = null, ll = !1;
	function ul(e, t, n) {
		for (n = n.child; n !== null;) dl(e, t, n), n = n.sibling;
	}
	function dl(e, t, n) {
		if (Le && typeof Le.onCommitFiberUnmount == `function`) try {
			Le.onCommitFiberUnmount(Ie, n);
		} catch {}
		switch (n.tag) {
			case 26:
				tl || Kc(n, t), ul(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				tl || Kc(n, t);
				var r = cl, i = ll;
				Zd(n.type) && (cl = n.stateNode, ll = !1), ul(e, t, n), pf(n.stateNode), cl = r, ll = i;
				break;
			case 5: tl || Kc(n, t);
			case 6:
				if (r = cl, i = ll, cl = null, ul(e, t, n), cl = r, ll = i, cl !== null) if (ll) try {
					(cl.nodeType === 9 ? cl.body : cl.nodeName === `HTML` ? cl.ownerDocument.body : cl).removeChild(n.stateNode);
				} catch (e) {
					Z(n, t, e);
				}
				else try {
					cl.removeChild(n.stateNode);
				} catch (e) {
					Z(n, t, e);
				}
				break;
			case 18:
				cl !== null && (ll ? (e = cl, Qd(e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e, n.stateNode), Np(e)) : Qd(cl, n.stateNode));
				break;
			case 4:
				r = cl, i = ll, cl = n.stateNode.containerInfo, ll = !0, ul(e, t, n), cl = r, ll = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				Hc(2, n, t), tl || Hc(4, n, t), ul(e, t, n);
				break;
			case 1:
				tl || (Kc(n, t), r = n.stateNode, typeof r.componentWillUnmount == `function` && Wc(n, t, r)), ul(e, t, n);
				break;
			case 21:
				ul(e, t, n);
				break;
			case 22:
				tl = (r = tl) || n.memoizedState !== null, ul(e, t, n), tl = r;
				break;
			default: ul(e, t, n);
		}
	}
	function fl(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Np(e);
			} catch (e) {
				Z(t, t.return, e);
			}
		}
	}
	function pl(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Np(e);
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function ml(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new rl()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new rl()), t;
			default: throw Error(a(435, e.tag));
		}
	}
	function hl(e, t) {
		var n = ml(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = Yu.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function gl(e, t) {
		var n = t.deletions;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r], o = e, s = t, c = s;
			a: for (; c !== null;) {
				switch (c.tag) {
					case 27:
						if (Zd(c.type)) {
							cl = c.stateNode, ll = !1;
							break a;
						}
						break;
					case 5:
						cl = c.stateNode, ll = !1;
						break a;
					case 3:
					case 4:
						cl = c.stateNode.containerInfo, ll = !0;
						break a;
				}
				c = c.return;
			}
			if (cl === null) throw Error(a(160));
			dl(o, s, i), cl = null, ll = !1, o = i.alternate, o !== null && (o.return = null), i.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) vl(t, e), t = t.sibling;
	}
	var _l = null;
	function vl(e, t) {
		var n = e.alternate, r = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				gl(t, e), yl(e), r & 4 && (Hc(3, e, e.return), Vc(3, e), Hc(5, e, e.return));
				break;
			case 1:
				gl(t, e), yl(e), r & 512 && (tl || n === null || Kc(n, n.return)), r & 64 && el && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? r : n.concat(r))));
				break;
			case 26:
				var i = _l;
				if (gl(t, e), yl(e), r & 512 && (tl || n === null || Kc(n, n.return)), r & 4) {
					var o = n === null ? null : n.memoizedState;
					if (r = e.memoizedState, n === null) if (r === null) if (e.stateNode === null) {
						a: {
							r = e.type, n = e.memoizedProps, i = i.ownerDocument || i;
							b: switch (r) {
								case `title`:
									o = i.getElementsByTagName(`title`)[0], (!o || o[mt] || o[st] || o.namespaceURI === `http://www.w3.org/2000/svg` || o.hasAttribute(`itemprop`)) && (o = i.createElement(r), i.head.insertBefore(o, i.querySelector(`head > title`))), Pd(o, r, n), o[st] = e, bt(o), r = o;
									break a;
								case `link`:
									var s = Vf(`link`, `href`, i).get(r + (n.href || ``));
									if (s) {
										for (var c = 0; c < s.length; c++) if (o = s[c], o.getAttribute(`href`) === (n.href == null || n.href === `` ? null : n.href) && o.getAttribute(`rel`) === (n.rel == null ? null : n.rel) && o.getAttribute(`title`) === (n.title == null ? null : n.title) && o.getAttribute(`crossorigin`) === (n.crossOrigin == null ? null : n.crossOrigin)) {
											s.splice(c, 1);
											break b;
										}
									}
									o = i.createElement(r), Pd(o, r, n), i.head.appendChild(o);
									break;
								case `meta`:
									if (s = Vf(`meta`, `content`, i).get(r + (n.content || ``))) {
										for (c = 0; c < s.length; c++) if (o = s[c], o.getAttribute(`content`) === (n.content == null ? null : `` + n.content) && o.getAttribute(`name`) === (n.name == null ? null : n.name) && o.getAttribute(`property`) === (n.property == null ? null : n.property) && o.getAttribute(`http-equiv`) === (n.httpEquiv == null ? null : n.httpEquiv) && o.getAttribute(`charset`) === (n.charSet == null ? null : n.charSet)) {
											s.splice(c, 1);
											break b;
										}
									}
									o = i.createElement(r), Pd(o, r, n), i.head.appendChild(o);
									break;
								default: throw Error(a(468, r));
							}
							o[st] = e, bt(o), r = o;
						}
						e.stateNode = r;
					} else Hf(i, e.type, e.stateNode);
					else e.stateNode = If(i, r, e.memoizedProps);
					else o === r ? r === null && e.stateNode !== null && Jc(e, e.memoizedProps, n.memoizedProps) : (o === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : o.count--, r === null ? Hf(i, e.type, e.stateNode) : If(i, r, e.memoizedProps));
				}
				break;
			case 27:
				gl(t, e), yl(e), r & 512 && (tl || n === null || Kc(n, n.return)), n !== null && r & 4 && Jc(e, e.memoizedProps, n.memoizedProps);
				break;
			case 5:
				if (gl(t, e), yl(e), r & 512 && (tl || n === null || Kc(n, n.return)), e.flags & 32) {
					i = e.stateNode;
					try {
						Kt(i, ``);
					} catch (t) {
						Z(e, e.return, t);
					}
				}
				r & 4 && e.stateNode != null && (i = e.memoizedProps, Jc(e, i, n === null ? i : n.memoizedProps)), r & 1024 && (nl = !0);
				break;
			case 6:
				if (gl(t, e), yl(e), r & 4) {
					if (e.stateNode === null) throw Error(a(162));
					r = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = r;
					} catch (t) {
						Z(e, e.return, t);
					}
				}
				break;
			case 3:
				if (Bf = null, i = _l, _l = gf(t.containerInfo), gl(t, e), _l = i, yl(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
					Np(t.containerInfo);
				} catch (t) {
					Z(e, e.return, t);
				}
				nl && (nl = !1, bl(e));
				break;
			case 4:
				r = _l, _l = gf(e.stateNode.containerInfo), gl(t, e), yl(e), _l = r;
				break;
			case 12:
				gl(t, e), yl(e);
				break;
			case 31:
				gl(t, e), yl(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, hl(e, r)));
				break;
			case 13:
				gl(t, e), yl(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (eu = De()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, hl(e, r)));
				break;
			case 22:
				i = e.memoizedState !== null;
				var l = n !== null && n.memoizedState !== null, u = el, d = tl;
				if (el = u || i, tl = d || l, gl(t, e), tl = d, el = u, yl(e), r & 8192) a: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (n === null || l || el || tl || Sl(e)), n = null, t = e;;) {
					if (t.tag === 5 || t.tag === 26) {
						if (n === null) {
							l = n = t;
							try {
								if (o = l.stateNode, i) s = o.style, typeof s.setProperty == `function` ? s.setProperty(`display`, `none`, `important`) : s.display = `none`;
								else {
									c = l.stateNode;
									var f = l.memoizedProps.style, p = f != null && f.hasOwnProperty(`display`) ? f.display : null;
									c.style.display = p == null || typeof p == `boolean` ? `` : (`` + p).trim();
								}
							} catch (e) {
								Z(l, l.return, e);
							}
						}
					} else if (t.tag === 6) {
						if (n === null) {
							l = t;
							try {
								l.stateNode.nodeValue = i ? `` : l.memoizedProps;
							} catch (e) {
								Z(l, l.return, e);
							}
						}
					} else if (t.tag === 18) {
						if (n === null) {
							l = t;
							try {
								var m = l.stateNode;
								i ? $d(m, !0) : $d(l.stateNode, !1);
							} catch (e) {
								Z(l, l.return, e);
							}
						}
					} else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
						t.child.return = t, t = t.child;
						continue;
					}
					if (t === e) break a;
					for (; t.sibling === null;) {
						if (t.return === null || t.return === e) break a;
						n === t && (n = null), t = t.return;
					}
					n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
				}
				r & 4 && (r = e.updateQueue, r !== null && (n = r.retryQueue, n !== null && (r.retryQueue = null, hl(e, n))));
				break;
			case 19:
				gl(t, e), yl(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, hl(e, r)));
				break;
			case 30: break;
			case 21: break;
			default: gl(t, e), yl(e);
		}
	}
	function yl(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (Yc(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				if (n == null) throw Error(a(160));
				switch (n.tag) {
					case 27:
						var i = n.stateNode;
						Qc(e, Xc(e), i);
						break;
					case 5:
						var o = n.stateNode;
						n.flags & 32 && (Kt(o, ``), n.flags &= -33), Qc(e, Xc(e), o);
						break;
					case 3:
					case 4:
						var s = n.stateNode.containerInfo;
						Zc(e, Xc(e), s);
						break;
					default: throw Error(a(161));
				}
			} catch (t) {
				Z(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function bl(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			bl(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
		}
	}
	function xl(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) ol(e, t.alternate, t), t = t.sibling;
	}
	function Sl(e) {
		for (e = e.child; e !== null;) {
			var t = e;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					Hc(4, t, t.return), Sl(t);
					break;
				case 1:
					Kc(t, t.return);
					var n = t.stateNode;
					typeof n.componentWillUnmount == `function` && Wc(t, t.return, n), Sl(t);
					break;
				case 27: pf(t.stateNode);
				case 26:
				case 5:
					Kc(t, t.return), Sl(t);
					break;
				case 22:
					t.memoizedState === null && Sl(t);
					break;
				case 30:
					Sl(t);
					break;
				default: Sl(t);
			}
			e = e.sibling;
		}
	}
	function Cl(e, t, n) {
		for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags;
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					Cl(i, a, n), Vc(4, a);
					break;
				case 1:
					if (Cl(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == `function`) try {
						i.componentDidMount();
					} catch (e) {
						Z(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var s = r.stateNode;
						try {
							var c = i.shared.hiddenCallbacks;
							if (c !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++) Ja(c[i], s);
						} catch (e) {
							Z(r, r.return, e);
						}
					}
					n && o & 64 && Uc(a), Gc(a, a.return);
					break;
				case 27: $c(a);
				case 26:
				case 5:
					Cl(i, a, n), n && r === null && o & 4 && qc(a), Gc(a, a.return);
					break;
				case 12:
					Cl(i, a, n);
					break;
				case 31:
					Cl(i, a, n), n && o & 4 && fl(i, a);
					break;
				case 13:
					Cl(i, a, n), n && o & 4 && pl(i, a);
					break;
				case 22:
					a.memoizedState === null && Cl(i, a, n), Gc(a, a.return);
					break;
				case 30: break;
				default: Cl(i, a, n);
			}
			t = t.sibling;
		}
	}
	function wl(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && sa(n));
	}
	function Tl(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && sa(e));
	}
	function El(e, t, n, r) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) Dl(e, t, n, r), t = t.sibling;
	}
	function Dl(e, t, n, r) {
		var i = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				El(e, t, n, r), i & 2048 && Vc(9, t);
				break;
			case 1:
				El(e, t, n, r);
				break;
			case 3:
				El(e, t, n, r), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && sa(e)));
				break;
			case 12:
				if (i & 2048) {
					El(e, t, n, r), e = t.stateNode;
					try {
						var a = t.memoizedProps, o = a.id, s = a.onPostCommit;
						typeof s == `function` && s(o, t.alternate === null ? `mount` : `update`, e.passiveEffectDuration, -0);
					} catch (e) {
						Z(t, t.return, e);
					}
				} else El(e, t, n, r);
				break;
			case 31:
				El(e, t, n, r);
				break;
			case 13:
				El(e, t, n, r);
				break;
			case 23: break;
			case 22:
				a = t.stateNode, o = t.alternate, t.memoizedState === null ? a._visibility & 2 ? El(e, t, n, r) : (a._visibility |= 2, Ol(e, t, n, r, (t.subtreeFlags & 10256) != 0 || !1)) : a._visibility & 2 ? El(e, t, n, r) : kl(e, t), i & 2048 && wl(o, t);
				break;
			case 24:
				El(e, t, n, r), i & 2048 && Tl(t.alternate, t);
				break;
			default: El(e, t, n, r);
		}
	}
	function Ol(e, t, n, r, i) {
		for (i &&= (t.subtreeFlags & 10256) != 0 || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					Ol(a, o, s, c, i), Vc(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, Ol(a, o, s, c, i)) : u._visibility & 2 ? Ol(a, o, s, c, i) : kl(a, o), i && l & 2048 && wl(o.alternate, o);
					break;
				case 24:
					Ol(a, o, s, c, i), i && l & 2048 && Tl(o.alternate, o);
					break;
				default: Ol(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function kl(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					kl(n, r), i & 2048 && wl(r.alternate, r);
					break;
				case 24:
					kl(n, r), i & 2048 && Tl(r.alternate, r);
					break;
				default: kl(n, r);
			}
			t = t.sibling;
		}
	}
	var Al = 8192;
	function jl(e, t, n) {
		if (e.subtreeFlags & Al) for (e = e.child; e !== null;) Ml(e, t, n), e = e.sibling;
	}
	function Ml(e, t, n) {
		switch (e.tag) {
			case 26:
				jl(e, t, n), e.flags & Al && e.memoizedState !== null && Gf(n, _l, e.memoizedState, e.memoizedProps);
				break;
			case 5:
				jl(e, t, n);
				break;
			case 3:
			case 4:
				var r = _l;
				_l = gf(e.stateNode.containerInfo), jl(e, t, n), _l = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Al, Al = 16777216, jl(e, t, n), Al = r) : jl(e, t, n));
				break;
			default: jl(e, t, n);
		}
	}
	function Nl(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function Pl(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				il = r, Ll(r, e);
			}
			Nl(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) Fl(e), e = e.sibling;
	}
	function Fl(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Pl(e), e.flags & 2048 && Hc(9, e, e.return);
				break;
			case 3:
				Pl(e);
				break;
			case 12:
				Pl(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Il(e)) : Pl(e);
				break;
			default: Pl(e);
		}
	}
	function Il(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				il = r, Ll(r, e);
			}
			Nl(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					Hc(8, t, t.return), Il(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Il(t));
					break;
				default: Il(t);
			}
			e = e.sibling;
		}
	}
	function Ll(e, t) {
		for (; il !== null;) {
			var n = il;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					Hc(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: sa(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, il = r;
			else a: for (n = e; il !== null;) {
				r = il;
				var i = r.sibling, a = r.return;
				if (sl(r), r === n) {
					il = null;
					break a;
				}
				if (i !== null) {
					i.return = a, il = i;
					break a;
				}
				il = a;
			}
		}
	}
	var Rl = {
		getCacheForType: function(e) {
			var t = $i(aa), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return $i(aa).controller.signal;
		}
	}, zl = typeof WeakMap == `function` ? WeakMap : Map, G = 0, K = null, q = null, J = 0, Y = 0, Bl = null, Vl = !1, Hl = !1, Ul = !1, Wl = 0, Gl = 0, Kl = 0, ql = 0, Jl = 0, Yl = 0, Xl = 0, Zl = null, Ql = null, $l = !1, eu = 0, tu = 0, nu = Infinity, ru = null, iu = null, au = 0, ou = null, su = null, cu = 0, lu = 0, uu = null, du = null, fu = 0, X = null;
	function pu() {
		return G & 2 && J !== 0 ? J & -J : j.T === null ? it() : dd();
	}
	function mu() {
		if (Yl === 0) if (!(J & 536870912) || V) {
			var e = We;
			We <<= 1, !(We & 3932160) && (We = 262144), Yl = e;
		} else Yl = 536870912;
		return e = to.current, e !== null && (e.flags |= 32), Yl;
	}
	function hu(e, t, n) {
		(e === K && (Y === 2 || Y === 9) || e.cancelPendingCommit !== null) && (Su(e, 0), yu(e, J, Yl, !1)), Qe(e, n), (!(G & 2) || e !== K) && (e === K && (!(G & 2) && (ql |= n), Gl === 4 && yu(e, J, Yl, !1)), rd(e));
	}
	function gu(e, t, n) {
		if (G & 6) throw Error(a(327));
		var r = !n && (t & 127) == 0 && (t & e.expiredLanes) === 0 || Je(e, t), i = r ? Au(e, t) : Ou(e, t, !0), o = r;
		do {
			if (i === 0) {
				Hl && !r && yu(e, t, 0, !1);
				break;
			} else {
				if (n = e.current.alternate, o && !vu(n)) {
					i = Ou(e, t, !1), o = !1;
					continue;
				}
				if (i === 2) {
					if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
					else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
					if (s !== 0) {
						t = s;
						a: {
							var c = e;
							i = Zl;
							var l = c.current.memoizedState.isDehydrated;
							if (l && (Su(c, s).flags |= 256), s = Ou(c, s, !1), s !== 2) {
								if (Ul && !l) {
									c.errorRecoveryDisabledLanes |= o, ql |= o, i = 4;
									break a;
								}
								o = Ql, Ql = i, o !== null && (Ql === null ? Ql = o : Ql.push.apply(Ql, o));
							}
							i = s;
						}
						if (o = !1, i !== 2) continue;
					}
				}
				if (i === 1) {
					Su(e, 0), yu(e, t, 0, !0);
					break;
				}
				a: {
					switch (r = e, o = i, o) {
						case 0:
						case 1: throw Error(a(345));
						case 4: if ((t & 4194048) !== t) break;
						case 6:
							yu(r, t, Yl, !Vl);
							break a;
						case 2:
							Ql = null;
							break;
						case 3:
						case 5: break;
						default: throw Error(a(329));
					}
					if ((t & 62914560) === t && (i = eu + 300 - De(), 10 < i)) {
						if (yu(r, t, Yl, !Vl), I(r, 0, !0) !== 0) break a;
						cu = t, r.timeoutHandle = Kd(_u.bind(null, r, n, Ql, ru, $l, t, Yl, ql, Xl, Vl, o, `Throttled`, -0, 0), i);
						break a;
					}
					_u(r, n, Ql, ru, $l, t, Yl, ql, Xl, Vl, o, null, -0, 0);
				}
			}
			break;
		} while (1);
		rd(e);
	}
	function _u(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		if (e.timeoutHandle = -1, d = t.subtreeFlags, d & 8192 || (d & 16785408) == 16785408) {
			d = {
				stylesheets: null,
				count: 0,
				imgCount: 0,
				imgBytes: 0,
				suspenseyImages: [],
				waitingForImages: !0,
				waitingForViewTransition: !1,
				unsuspend: en
			}, Ml(t, a, d);
			var m = (a & 62914560) === a ? eu - De() : (a & 4194048) === a ? tu - De() : 0;
			if (m = qf(d, m), m !== null) {
				cu = a, e.cancelPendingCommit = m(Lu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p)), yu(e, a, o, !l);
				return;
			}
		}
		Lu(e, t, a, n, r, i, o, s, c);
	}
	function vu(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!xr(a(), i)) return !1;
				} catch {
					return !1;
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function yu(e, t, n, r) {
		t &= ~Jl, t &= ~ql, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - ze(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && et(e, n, t);
	}
	function bu() {
		return G & 6 ? !0 : (id(0, !1), !1);
	}
	function xu() {
		if (q !== null) {
			if (Y === 0) var e = q.return;
			else e = q, Gi = Wi = null, Oo(e), Aa = null, ja = 0, e = q;
			for (; e !== null;) Bc(e.alternate, e), e = e.return;
			q = null;
		}
	}
	function Su(e, t) {
		var n = e.timeoutHandle;
		n !== -1 && (e.timeoutHandle = -1, qd(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), cu = 0, xu(), K = e, q = n = ci(e.current, null), J = t, Y = 0, Bl = null, Vl = !1, Hl = Je(e, t), Ul = !1, Xl = Yl = Jl = ql = Kl = Gl = 0, Ql = Zl = null, $l = !1, t & 8 && (t |= t & 32);
		var r = e.entangledLanes;
		if (r !== 0) for (e = e.entanglements, r &= t; 0 < r;) {
			var i = 31 - ze(r), a = 1 << i;
			t |= e[i], r &= ~a;
		}
		return Wl = t, Qr(), n;
	}
	function Cu(e, t) {
		H = null, j.H = Rs, t === ba || t === Sa ? (t = Oa(), Y = 3) : t === xa ? (t = Oa(), Y = 4) : Y = t === nc ? 8 : typeof t == `object` && t && typeof t.then == `function` ? 6 : 1, Bl = t, q === null && (Gl = 1, Xs(e, gi(t, e.current)));
	}
	function wu() {
		var e = to.current;
		return e === null ? !0 : (J & 4194048) === J ? no === null : (J & 62914560) === J || J & 536870912 ? e === no : !1;
	}
	function Tu() {
		var e = j.H;
		return j.H = Rs, e === null ? Rs : e;
	}
	function Eu() {
		var e = j.A;
		return j.A = Rl, e;
	}
	function Du() {
		Gl = 4, Vl || (J & 4194048) !== J && to.current !== null || (Hl = !0), !(Kl & 134217727) && !(ql & 134217727) || K === null || yu(K, J, Yl, !1);
	}
	function Ou(e, t, n) {
		var r = G;
		G |= 2;
		var i = Tu(), a = Eu();
		(K !== e || J !== t) && (ru = null, Su(e, t)), t = !1;
		var o = Gl;
		a: do
			try {
				if (Y !== 0 && q !== null) {
					var s = q, c = Bl;
					switch (Y) {
						case 8:
							xu(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							to.current === null && (t = !0);
							var l = Y;
							if (Y = 0, Bl = null, Pu(e, s, c, l), n && Hl) {
								o = 0;
								break a;
							}
							break;
						default: l = Y, Y = 0, Bl = null, Pu(e, s, c, l);
					}
				}
				ku(), o = Gl;
				break;
			} catch (t) {
				Cu(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, Gi = Wi = null, G = r, j.H = i, j.A = a, q === null && (K = null, J = 0, Qr()), o;
	}
	function ku() {
		for (; q !== null;) Mu(q);
	}
	function Au(e, t) {
		var n = G;
		G |= 2;
		var r = Tu(), i = Eu();
		K !== e || J !== t ? (ru = null, nu = De() + 500, Su(e, t)) : Hl = Je(e, t);
		a: do
			try {
				if (Y !== 0 && q !== null) {
					t = q;
					var o = Bl;
					b: switch (Y) {
						case 1:
							Y = 0, Bl = null, Pu(e, t, o, 1);
							break;
						case 2:
						case 9:
							if (wa(o)) {
								Y = 0, Bl = null, Nu(t);
								break;
							}
							t = function() {
								Y !== 2 && Y !== 9 || K !== e || (Y = 7), rd(e);
							}, o.then(t, t);
							break a;
						case 3:
							Y = 7;
							break a;
						case 4:
							Y = 5;
							break a;
						case 7:
							wa(o) ? (Y = 0, Bl = null, Nu(t)) : (Y = 0, Bl = null, Pu(e, t, o, 7));
							break;
						case 5:
							var s = null;
							switch (q.tag) {
								case 26: s = q.memoizedState;
								case 5:
								case 27:
									var c = q;
									if (s ? Wf(s) : c.stateNode.complete) {
										Y = 0, Bl = null;
										var l = c.sibling;
										if (l !== null) q = l;
										else {
											var u = c.return;
											u === null ? q = null : (q = u, Fu(u));
										}
										break b;
									}
							}
							Y = 0, Bl = null, Pu(e, t, o, 5);
							break;
						case 6:
							Y = 0, Bl = null, Pu(e, t, o, 6);
							break;
						case 8:
							xu(), Gl = 6;
							break a;
						default: throw Error(a(462));
					}
				}
				ju();
				break;
			} catch (t) {
				Cu(e, t);
			}
		while (1);
		return Gi = Wi = null, j.H = r, j.A = i, G = n, q === null ? (K = null, J = 0, Qr(), Gl) : 0;
	}
	function ju() {
		for (; q !== null && !Te();) Mu(q);
	}
	function Mu(e) {
		var t = Mc(e.alternate, e, Wl);
		e.memoizedProps = e.pendingProps, t === null ? Fu(e) : q = t;
	}
	function Nu(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = gc(n, t, t.pendingProps, t.type, void 0, J);
				break;
			case 11:
				t = gc(n, t, t.pendingProps, t.type.render, t.ref, J);
				break;
			case 5: Oo(t);
			default: Bc(n, t), t = q = li(t, Wl), t = Mc(n, t, Wl);
		}
		e.memoizedProps = e.pendingProps, t === null ? Fu(e) : q = t;
	}
	function Pu(e, t, n, r) {
		Gi = Wi = null, Oo(t), Aa = null, ja = 0;
		var i = t.return;
		try {
			if (tc(e, i, t, n, J)) {
				Gl = 1, Xs(e, gi(n, e.current)), q = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw q = i, t;
			Gl = 1, Xs(e, gi(n, e.current)), q = null;
			return;
		}
		t.flags & 32768 ? (V || r === 1 ? e = !0 : Hl || J & 536870912 ? e = !1 : (Vl = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = to.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Iu(t, e)) : Fu(t);
	}
	function Fu(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				Iu(t, Vl);
				return;
			}
			e = t.return;
			var n = Rc(t.alternate, t, Wl);
			if (n !== null) {
				q = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				q = t;
				return;
			}
			q = t = e;
		} while (t !== null);
		Gl === 0 && (Gl = 5);
	}
	function Iu(e, t) {
		do {
			var n = zc(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, q = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				q = e;
				return;
			}
			q = e = n;
		} while (e !== null);
		Gl = 6, q = null;
	}
	function Lu(e, t, n, r, i, o, s, c, l) {
		e.cancelPendingCommit = null;
		do
			Hu();
		while (au !== 0);
		if (G & 6) throw Error(a(327));
		if (t !== null) {
			if (t === e.current) throw Error(a(177));
			if (o = t.lanes | t.childLanes, o |= Zr, $e(e, n, o, s, c, l), e === K && (q = K = null, J = 0), su = t, ou = e, cu = n, lu = o, uu = i, du = r, t.subtreeFlags & 10256 || t.flags & 10256 ? (e.callbackNode = null, e.callbackPriority = 0, Xu(je, function() {
				return Uu(), null;
			})) : (e.callbackNode = null, e.callbackPriority = 0), r = (t.flags & 13878) != 0, t.subtreeFlags & 13878 || r) {
				r = j.T, j.T = null, i = M.p, M.p = 2, s = G, G |= 4;
				try {
					al(e, t, n);
				} finally {
					G = s, M.p = i, j.T = r;
				}
			}
			au = 1, Ru(), zu(), Bu();
		}
	}
	function Ru() {
		if (au === 1) {
			au = 0;
			var e = ou, t = su, n = (t.flags & 13878) != 0;
			if (t.subtreeFlags & 13878 || n) {
				n = j.T, j.T = null;
				var r = M.p;
				M.p = 2;
				var i = G;
				G |= 4;
				try {
					vl(t, e);
					var a = zd, o = Er(e.containerInfo), s = a.focusedElem, c = a.selectionRange;
					if (o !== s && s && s.ownerDocument && Tr(s.ownerDocument.documentElement, s)) {
						if (c !== null && Dr(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), `selectionStart` in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = wr(s, h), v = wr(s, g);
									if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
										var y = d.createRange();
										y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
									}
								}
							}
						}
						for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
							element: p,
							left: p.scrollLeft,
							top: p.scrollTop
						});
						for (typeof s.focus == `function` && s.focus(), s = 0; s < d.length; s++) {
							var b = d[s];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
						}
					}
					sp = !!Rd, zd = Rd = null;
				} finally {
					G = i, M.p = r, j.T = n;
				}
			}
			e.current = t, au = 2;
		}
	}
	function zu() {
		if (au === 2) {
			au = 0;
			var e = ou, t = su, n = (t.flags & 8772) != 0;
			if (t.subtreeFlags & 8772 || n) {
				n = j.T, j.T = null;
				var r = M.p;
				M.p = 2;
				var i = G;
				G |= 4;
				try {
					ol(e, t.alternate, t);
				} finally {
					G = i, M.p = r, j.T = n;
				}
			}
			au = 3;
		}
	}
	function Bu() {
		if (au === 4 || au === 3) {
			au = 0, Ee();
			var e = ou, t = su, n = cu, r = du;
			t.subtreeFlags & 10256 || t.flags & 10256 ? au = 5 : (au = 0, su = ou = null, Vu(e, e.pendingLanes));
			var i = e.pendingLanes;
			if (i === 0 && (iu = null), L(n), t = t.stateNode, Le && typeof Le.onCommitFiberRoot == `function`) try {
				Le.onCommitFiberRoot(Ie, t, void 0, (t.current.flags & 128) == 128);
			} catch {}
			if (r !== null) {
				t = j.T, i = M.p, M.p = 2, j.T = null;
				try {
					for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
						var s = r[o];
						a(s.value, { componentStack: s.stack });
					}
				} finally {
					j.T = t, M.p = i;
				}
			}
			cu & 3 && Hu(), rd(e), i = e.pendingLanes, n & 261930 && i & 42 ? e === X ? fu++ : (fu = 0, X = e) : fu = 0, id(0, !1);
		}
	}
	function Vu(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, sa(t)));
	}
	function Hu() {
		return Ru(), zu(), Bu(), Uu();
	}
	function Uu() {
		if (au !== 5) return !1;
		var e = ou, t = lu;
		lu = 0;
		var n = L(cu), r = j.T, i = M.p;
		try {
			M.p = 32 > n ? 32 : n, j.T = null, n = uu, uu = null;
			var o = ou, s = cu;
			if (au = 0, su = ou = null, cu = 0, G & 6) throw Error(a(331));
			var c = G;
			if (G |= 4, Fl(o.current), Dl(o, o.current, s, n), G = c, id(0, !1), Le && typeof Le.onPostCommitFiberRoot == `function`) try {
				Le.onPostCommitFiberRoot(Ie, o);
			} catch {}
			return !0;
		} finally {
			M.p = i, j.T = r, Vu(e, t);
		}
	}
	function Wu(e, t, n) {
		t = gi(n, t), t = Qs(e.stateNode, t, 2), e = Ha(e, t, 2), e !== null && (Qe(e, 2), rd(e));
	}
	function Z(e, t, n) {
		if (e.tag === 3) Wu(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				Wu(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == `function` || typeof r.componentDidCatch == `function` && (iu === null || !iu.has(r))) {
					e = gi(n, e), n = $s(2), r = Ha(t, n, 2), r !== null && (ec(n, r, t, e), Qe(r, 2), rd(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function Gu(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new zl();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (Ul = !0, i.add(n), e = Ku.bind(null, e, t, n), t.then(e, e));
	}
	function Ku(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, K === e && (J & n) === n && (Gl === 4 || Gl === 3 && (J & 62914560) === J && 300 > De() - eu ? !(G & 2) && Su(e, 0) : Jl |= n, Xl === J && (Xl = 0)), rd(e);
	}
	function qu(e, t) {
		t === 0 && (t = Xe()), e = ti(e, t), e !== null && (Qe(e, t), rd(e));
	}
	function Ju(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), qu(e, n);
	}
	function Yu(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode, i = e.memoizedState;
				i !== null && (n = i.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default: throw Error(a(314));
		}
		r !== null && r.delete(t), qu(e, n);
	}
	function Xu(e, t) {
		return Ce(e, t);
	}
	var Zu = null, Qu = null, $u = !1, ed = !1, td = !1, nd = 0;
	function rd(e) {
		e !== Qu && e.next === null && (Qu === null ? Zu = Qu = e : Qu = Qu.next = e), ed = !0, $u || ($u = !0, ud());
	}
	function id(e, t) {
		if (!td && ed) {
			td = !0;
			do
				for (var n = !1, r = Zu; r !== null;) {
					if (!t) if (e !== 0) {
						var i = r.pendingLanes;
						if (i === 0) var a = 0;
						else {
							var o = r.suspendedLanes, s = r.pingedLanes;
							a = (1 << 31 - ze(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
						}
						a !== 0 && (n = !0, ld(r, a));
					} else a = J, a = I(r, r === K ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || Je(r, a) || (n = !0, ld(r, a));
					r = r.next;
				}
			while (n);
			td = !1;
		}
	}
	function ad() {
		od();
	}
	function od() {
		ed = $u = !1;
		var e = 0;
		nd !== 0 && Gd() && (e = nd);
		for (var t = De(), n = null, r = Zu; r !== null;) {
			var i = r.next, a = sd(r, t);
			a === 0 ? (r.next = null, n === null ? Zu = i : n.next = i, i === null && (Qu = n)) : (n = r, (e !== 0 || a & 3) && (ed = !0)), r = i;
		}
		au !== 0 && au !== 5 || id(e, !1), nd !== 0 && (nd = 0);
	}
	function sd(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - ze(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Ye(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = K, n = J, n = I(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (Y === 2 || Y === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && we(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || Je(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && we(r), L(n)) {
				case 2:
				case 8:
					n = Ae;
					break;
				case 32:
					n = je;
					break;
				case 268435456:
					n = Ne;
					break;
				default: n = je;
			}
			return r = cd.bind(null, e), n = Ce(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && we(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function cd(e, t) {
		if (au !== 0 && au !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (Hu() && e.callbackNode !== n) return null;
		var r = J;
		return r = I(e, e === K ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (gu(e, r, t), sd(e, De()), e.callbackNode != null && e.callbackNode === n ? cd.bind(null, e) : null);
	}
	function ld(e, t) {
		if (Hu()) return null;
		gu(e, t, !0);
	}
	function ud() {
		Yd(function() {
			G & 6 ? Ce(ke, ad) : od();
		});
	}
	function dd() {
		if (nd === 0) {
			var e = ua;
			e === 0 && (e = Ue, Ue <<= 1, !(Ue & 261888) && (Ue = 256)), nd = e;
		}
		return nd;
	}
	function fd(e) {
		return e == null || typeof e == `symbol` || typeof e == `boolean` ? null : typeof e == `function` ? e : $t(`` + e);
	}
	function pd(e, t) {
		var n = t.ownerDocument.createElement(`input`);
		return n.name = t.name, n.value = t.value, e.id && n.setAttribute(`form`, e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
	}
	function md(e, t, n, r, i) {
		if (t === `submit` && n && n.stateNode === i) {
			var a = fd((i[ct] || null).action), o = r.submitter;
			o && (t = (t = o[ct] || null) ? fd(t.formAction) : o.getAttribute(`formAction`), t !== null && (a = t, o = null));
			var s = new Sn(`action`, `action`, null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (nd !== 0) {
								var e = o ? pd(i, o) : new FormData(i);
								ws(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == `function` && (s.preventDefault(), e = o ? pd(i, o) : new FormData(i), ws(n, {
							pending: !0,
							data: e,
							method: i.method,
							action: a
						}, a, e));
					},
					currentTarget: i
				}]
			});
		}
	}
	for (var hd = 0; hd < Kr.length; hd++) {
		var gd = Kr[hd];
		qr(gd.toLowerCase(), `on` + (gd[0].toUpperCase() + gd.slice(1)));
	}
	qr(Rr, `onAnimationEnd`), qr(zr, `onAnimationIteration`), qr(Br, `onAnimationStart`), qr(`dblclick`, `onDoubleClick`), qr(`focusin`, `onFocus`), qr(`focusout`, `onBlur`), qr(Vr, `onTransitionRun`), qr(Hr, `onTransitionStart`), qr(Ur, `onTransitionCancel`), qr(Wr, `onTransitionEnd`), wt(`onMouseEnter`, [`mouseout`, `mouseover`]), wt(`onMouseLeave`, [`mouseout`, `mouseover`]), wt(`onPointerEnter`, [`pointerout`, `pointerover`]), wt(`onPointerLeave`, [`pointerout`, `pointerover`]), Ct(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)), Ct(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)), Ct(`onBeforeInput`, [
		`compositionend`,
		`keypress`,
		`textInput`,
		`paste`
	]), Ct(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)), Ct(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)), Ct(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
	var _d = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `), vd = new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));
	function yd(e, t) {
		t = (t & 4) != 0;
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						Jr(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						Jr(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function Q(e, t) {
		var n = t[ut];
		n === void 0 && (n = t[ut] = /* @__PURE__ */ new Set());
		var r = e + `__bubble`;
		n.has(r) || (Cd(t, e, 2, !1), n.add(r));
	}
	function bd(e, t, n) {
		var r = 0;
		t && (r |= 4), Cd(n, e, r, t);
	}
	var xd = `_reactListening` + Math.random().toString(36).slice(2);
	function Sd(e) {
		if (!e[xd]) {
			e[xd] = !0, xt.forEach(function(t) {
				t !== `selectionchange` && (vd.has(t) || bd(t, !1, e), bd(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[xd] || (t[xd] = !0, bd(`selectionchange`, !1, t));
		}
	}
	function Cd(e, t, n, r) {
		switch (mp(t)) {
			case 2:
				var i = cp;
				break;
			case 8:
				i = lp;
				break;
			default: i = up;
		}
		n = i.bind(null, t, n, e), i = void 0, !dn || t !== `touchstart` && t !== `touchmove` && t !== `wheel` || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function wd(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var o = r.tag;
			if (o === 3 || o === 4) {
				var s = r.stateNode.containerInfo;
				if (s === i) break;
				if (o === 4) for (o = r.return; o !== null;) {
					var l = o.tag;
					if ((l === 3 || l === 4) && o.stateNode.containerInfo === i) return;
					o = o.return;
				}
				for (; s !== null;) {
					if (o = gt(s), o === null) return;
					if (l = o.tag, l === 5 || l === 6 || l === 26 || l === 27) {
						r = a = o;
						continue a;
					}
					s = s.parentNode;
				}
			}
			r = r.return;
		}
		cn(function() {
			var r = a, i = nn(n), o = [];
			a: {
				var s = Gr.get(e);
				if (s !== void 0) {
					var l = Sn, u = e;
					switch (e) {
						case `keypress`: if (_n(n) === 0) break a;
						case `keydown`:
						case `keyup`:
							l = zn;
							break;
						case `focusin`:
							u = `focus`, l = An;
							break;
						case `focusout`:
							u = `blur`, l = An;
							break;
						case `beforeblur`:
						case `afterblur`:
							l = An;
							break;
						case `click`: if (n.button === 2) break a;
						case `auxclick`:
						case `dblclick`:
						case `mousedown`:
						case `mousemove`:
						case `mouseup`:
						case `mouseout`:
						case `mouseover`:
						case `contextmenu`:
							l = kn;
							break;
						case `drag`:
						case `dragend`:
						case `dragenter`:
						case `dragexit`:
						case `dragleave`:
						case `dragover`:
						case `dragstart`:
						case `drop`:
							l = R;
							break;
						case `touchcancel`:
						case `touchend`:
						case `touchmove`:
						case `touchstart`:
							l = Vn;
							break;
						case Rr:
						case zr:
						case Br:
							l = jn;
							break;
						case Wr:
							l = Hn;
							break;
						case `scroll`:
						case `scrollend`:
							l = wn;
							break;
						case `wheel`:
							l = Un;
							break;
						case `copy`:
						case `cut`:
						case `paste`:
							l = Mn;
							break;
						case `gotpointercapture`:
						case `lostpointercapture`:
						case `pointercancel`:
						case `pointerdown`:
						case `pointermove`:
						case `pointerout`:
						case `pointerover`:
						case `pointerup`:
							l = Bn;
							break;
						case `toggle`:
						case `beforetoggle`: l = Wn;
					}
					var d = (t & 4) != 0, f = !d && (e === `scroll` || e === `scrollend`), p = d ? s === null ? null : s + `Capture` : s;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = ln(m, p), g != null && d.push(Td(m, g, h))), f) break;
						m = m.return;
					}
					0 < d.length && (s = new l(s, u, null, n, i), o.push({
						event: s,
						listeners: d
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (s = e === `mouseover` || e === `pointerover`, l = e === `mouseout` || e === `pointerout`, s && n !== tn && (u = n.relatedTarget || n.fromElement) && (gt(u) || u[lt])) break a;
					if ((l || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, l ? (u = n.relatedTarget || n.toElement, l = r, u = u ? gt(u) : null, u !== null && (f = c(u), d = u.tag, u !== f || d !== 5 && d !== 27 && d !== 6) && (u = null)) : (l = null, u = r), l !== u)) {
						if (d = kn, g = `onMouseLeave`, p = `onMouseEnter`, m = `mouse`, (e === `pointerout` || e === `pointerover`) && (d = Bn, g = `onPointerLeave`, p = `onPointerEnter`, m = `pointer`), f = l == null ? s : vt(l), h = u == null ? s : vt(u), s = new d(g, m + `leave`, l, n, i), s.target = f, s.relatedTarget = h, g = null, gt(i) === r && (d = new d(p, m + `enter`, u, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, l && u) b: {
							for (d = Dd, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
							g = 0;
							for (var _ = m; _; _ = d(_)) g++;
							for (; 0 < h - g;) p = d(p), h--;
							for (; 0 < g - h;) m = d(m), g--;
							for (; h--;) {
								if (p === m || m !== null && p === m.alternate) {
									d = p;
									break b;
								}
								p = d(p), m = d(m);
							}
							d = null;
						}
						else d = null;
						l !== null && Od(o, s, l, d, !1), u !== null && f !== null && Od(o, f, u, d, !0);
					}
				}
				a: {
					if (s = r ? vt(r) : window, l = s.nodeName && s.nodeName.toLowerCase(), l === `select` || l === `input` && s.type === `file`) var v = lr;
					else if (ir(s)) if (ur) v = yr;
					else {
						v = _r;
						var y = gr;
					}
					else l = s.nodeName, !l || l.toLowerCase() !== `input` || s.type !== `checkbox` && s.type !== `radio` ? r && Xt(r.elementType) && (v = lr) : v = vr;
					if (v &&= v(e, r)) {
						z(o, v, n, i);
						break a;
					}
					y && y(e, s, r), e === `focusout` && r && s.type === `number` && r.memoizedProps.value != null && Ht(s, `number`, s.value);
				}
				switch (y = r ? vt(r) : window, e) {
					case `focusin`:
						(ir(y) || y.contentEditable === `true`) && (B = y, kr = r, Ar = null);
						break;
					case `focusout`:
						Ar = kr = B = null;
						break;
					case `mousedown`:
						jr = !0;
						break;
					case `contextmenu`:
					case `mouseup`:
					case `dragend`:
						jr = !1, Mr(o, n, i);
						break;
					case `selectionchange`: if (Or) break;
					case `keydown`:
					case `keyup`: Mr(o, n, i);
				}
				var b;
				if (Kn) b: {
					switch (e) {
						case `compositionstart`:
							var x = `onCompositionStart`;
							break b;
						case `compositionend`:
							x = `onCompositionEnd`;
							break b;
						case `compositionupdate`:
							x = `onCompositionUpdate`;
							break b;
					}
					x = void 0;
				}
				else er ? Qn(e, n) && (x = `onCompositionEnd`) : e === `keydown` && n.keyCode === 229 && (x = `onCompositionStart`);
				x && (Yn && n.locale !== `ko` && (er || x !== `onCompositionStart` ? x === `onCompositionEnd` && er && (b = gn()) : (pn = i, mn = `value` in pn ? pn.value : pn.textContent, er = !0)), y = Ed(r, x), 0 < y.length && (x = new Nn(x, e, null, n, i), o.push({
					event: x,
					listeners: y
				}), b ? x.data = b : (b = $n(n), b !== null && (x.data = b)))), (b = Jn ? tr(e, n) : nr(e, n)) && (x = Ed(r, `onBeforeInput`), 0 < x.length && (y = new Nn(`onBeforeInput`, `beforeinput`, null, n, i), o.push({
					event: y,
					listeners: x
				}), y.data = b)), md(o, e, r, n, i);
			}
			yd(o, t);
		});
	}
	function Td(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function Ed(e, t) {
		for (var n = t + `Capture`, r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = ln(e, n), i != null && r.unshift(Td(e, i, a)), i = ln(e, t), i != null && r.push(Td(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function Dd(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Od(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = ln(n, a), l != null && o.unshift(Td(n, l, c))) : i || (l = ln(n, a), l != null && o.push(Td(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var kd = /\r\n?/g, Ad = /\u0000|\uFFFD/g;
	function jd(e) {
		return (typeof e == `string` ? e : `` + e).replace(kd, `
`).replace(Ad, ``);
	}
	function Md(e, t) {
		return t = jd(t), jd(e) === t;
	}
	function $(e, t, n, r, i, o) {
		switch (n) {
			case `children`:
				typeof r == `string` ? t === `body` || t === `textarea` && r === `` || Kt(e, r) : (typeof r == `number` || typeof r == `bigint`) && t !== `body` && Kt(e, `` + r);
				break;
			case `className`:
				At(e, `class`, r);
				break;
			case `tabIndex`:
				At(e, `tabindex`, r);
				break;
			case `dir`:
			case `role`:
			case `viewBox`:
			case `width`:
			case `height`:
				At(e, n, r);
				break;
			case `style`:
				Yt(e, r, o);
				break;
			case `data`: if (t !== `object`) {
				At(e, `data`, r);
				break;
			}
			case `src`:
			case `href`:
				if (r === `` && (t !== `a` || n !== `href`)) {
					e.removeAttribute(n);
					break;
				}
				if (r == null || typeof r == `function` || typeof r == `symbol` || typeof r == `boolean`) {
					e.removeAttribute(n);
					break;
				}
				r = $t(`` + r), e.setAttribute(n, r);
				break;
			case `action`:
			case `formAction`:
				if (typeof r == `function`) {
					e.setAttribute(n, `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);
					break;
				} else typeof o == `function` && (n === `formAction` ? (t !== `input` && $(e, t, `name`, i.name, i, null), $(e, t, `formEncType`, i.formEncType, i, null), $(e, t, `formMethod`, i.formMethod, i, null), $(e, t, `formTarget`, i.formTarget, i, null)) : ($(e, t, `encType`, i.encType, i, null), $(e, t, `method`, i.method, i, null), $(e, t, `target`, i.target, i, null)));
				if (r == null || typeof r == `symbol` || typeof r == `boolean`) {
					e.removeAttribute(n);
					break;
				}
				r = $t(`` + r), e.setAttribute(n, r);
				break;
			case `onClick`:
				r != null && (e.onclick = en);
				break;
			case `onScroll`:
				r != null && Q(`scroll`, e);
				break;
			case `onScrollEnd`:
				r != null && Q(`scrollend`, e);
				break;
			case `dangerouslySetInnerHTML`:
				if (r != null) {
					if (typeof r != `object` || !(`__html` in r)) throw Error(a(61));
					if (n = r.__html, n != null) {
						if (i.children != null) throw Error(a(60));
						e.innerHTML = n;
					}
				}
				break;
			case `multiple`:
				e.multiple = r && typeof r != `function` && typeof r != `symbol`;
				break;
			case `muted`:
				e.muted = r && typeof r != `function` && typeof r != `symbol`;
				break;
			case `suppressContentEditableWarning`:
			case `suppressHydrationWarning`:
			case `defaultValue`:
			case `defaultChecked`:
			case `innerHTML`:
			case `ref`: break;
			case `autoFocus`: break;
			case `xlinkHref`:
				if (r == null || typeof r == `function` || typeof r == `boolean` || typeof r == `symbol`) {
					e.removeAttribute(`xlink:href`);
					break;
				}
				n = $t(`` + r), e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n);
				break;
			case `contentEditable`:
			case `spellCheck`:
			case `draggable`:
			case `value`:
			case `autoReverse`:
			case `externalResourcesRequired`:
			case `focusable`:
			case `preserveAlpha`:
				r != null && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, `` + r) : e.removeAttribute(n);
				break;
			case `inert`:
			case `allowFullScreen`:
			case `async`:
			case `autoPlay`:
			case `controls`:
			case `default`:
			case `defer`:
			case `disabled`:
			case `disablePictureInPicture`:
			case `disableRemotePlayback`:
			case `formNoValidate`:
			case `hidden`:
			case `loop`:
			case `noModule`:
			case `noValidate`:
			case `open`:
			case `playsInline`:
			case `readOnly`:
			case `required`:
			case `reversed`:
			case `scoped`:
			case `seamless`:
			case `itemScope`:
				r && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, ``) : e.removeAttribute(n);
				break;
			case `capture`:
			case `download`:
				!0 === r ? e.setAttribute(n, ``) : !1 !== r && r != null && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case `cols`:
			case `rows`:
			case `size`:
			case `span`:
				r != null && typeof r != `function` && typeof r != `symbol` && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case `rowSpan`:
			case `start`:
				r == null || typeof r == `function` || typeof r == `symbol` || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
				break;
			case `popover`:
				Q(`beforetoggle`, e), Q(`toggle`, e), kt(e, `popover`, r);
				break;
			case `xlinkActuate`:
				jt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
				break;
			case `xlinkArcrole`:
				jt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
				break;
			case `xlinkRole`:
				jt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
				break;
			case `xlinkShow`:
				jt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
				break;
			case `xlinkTitle`:
				jt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
				break;
			case `xlinkType`:
				jt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
				break;
			case `xmlBase`:
				jt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
				break;
			case `xmlLang`:
				jt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
				break;
			case `xmlSpace`:
				jt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
				break;
			case `is`:
				kt(e, `is`, r);
				break;
			case `innerText`:
			case `textContent`: break;
			default: (!(2 < n.length) || n[0] !== `o` && n[0] !== `O` || n[1] !== `n` && n[1] !== `N`) && (n = Zt.get(n) || n, kt(e, n, r));
		}
	}
	function Nd(e, t, n, r, i, o) {
		switch (n) {
			case `style`:
				Yt(e, r, o);
				break;
			case `dangerouslySetInnerHTML`:
				if (r != null) {
					if (typeof r != `object` || !(`__html` in r)) throw Error(a(61));
					if (n = r.__html, n != null) {
						if (i.children != null) throw Error(a(60));
						e.innerHTML = n;
					}
				}
				break;
			case `children`:
				typeof r == `string` ? Kt(e, r) : (typeof r == `number` || typeof r == `bigint`) && Kt(e, `` + r);
				break;
			case `onScroll`:
				r != null && Q(`scroll`, e);
				break;
			case `onScrollEnd`:
				r != null && Q(`scrollend`, e);
				break;
			case `onClick`:
				r != null && (e.onclick = en);
				break;
			case `suppressContentEditableWarning`:
			case `suppressHydrationWarning`:
			case `innerHTML`:
			case `ref`: break;
			case `innerText`:
			case `textContent`: break;
			default: if (!St.hasOwnProperty(n)) a: {
				if (n[0] === `o` && n[1] === `n` && (i = n.endsWith(`Capture`), t = n.slice(2, i ? n.length - 7 : void 0), o = e[ct] || null, o = o == null ? null : o[n], typeof o == `function` && e.removeEventListener(t, o, i), typeof r == `function`)) {
					typeof o != `function` && o !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, i);
					break a;
				}
				n in e ? e[n] = r : !0 === r ? e.setAttribute(n, ``) : kt(e, n, r);
			}
		}
	}
	function Pd(e, t, n) {
		switch (t) {
			case `div`:
			case `span`:
			case `svg`:
			case `path`:
			case `a`:
			case `g`:
			case `p`:
			case `li`: break;
			case `img`:
				Q(`error`, e), Q(`load`, e);
				var r = !1, i = !1, o;
				for (o in n) if (n.hasOwnProperty(o)) {
					var s = n[o];
					if (s != null) switch (o) {
						case `src`:
							r = !0;
							break;
						case `srcSet`:
							i = !0;
							break;
						case `children`:
						case `dangerouslySetInnerHTML`: throw Error(a(137, t));
						default: $(e, t, o, s, n, null);
					}
				}
				i && $(e, t, `srcSet`, n.srcSet, n, null), r && $(e, t, `src`, n.src, n, null);
				return;
			case `input`:
				Q(`invalid`, e);
				var c = o = s = i = null, l = null, u = null;
				for (r in n) if (n.hasOwnProperty(r)) {
					var d = n[r];
					if (d != null) switch (r) {
						case `name`:
							i = d;
							break;
						case `type`:
							s = d;
							break;
						case `checked`:
							l = d;
							break;
						case `defaultChecked`:
							u = d;
							break;
						case `value`:
							o = d;
							break;
						case `defaultValue`:
							c = d;
							break;
						case `children`:
						case `dangerouslySetInnerHTML`:
							if (d != null) throw Error(a(137, t));
							break;
						default: $(e, t, r, d, n, null);
					}
				}
				Vt(e, o, c, l, u, s, i, !1);
				return;
			case `select`:
				for (i in Q(`invalid`, e), r = s = o = null, n) if (n.hasOwnProperty(i) && (c = n[i], c != null)) switch (i) {
					case `value`:
						o = c;
						break;
					case `defaultValue`:
						s = c;
						break;
					case `multiple`: r = c;
					default: $(e, t, i, c, n, null);
				}
				t = o, n = s, e.multiple = !!r, t == null ? n != null && Ut(e, !!r, n, !0) : Ut(e, !!r, t, !1);
				return;
			case `textarea`:
				for (s in Q(`invalid`, e), o = i = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
					case `value`:
						r = c;
						break;
					case `defaultValue`:
						i = c;
						break;
					case `children`:
						o = c;
						break;
					case `dangerouslySetInnerHTML`:
						if (c != null) throw Error(a(91));
						break;
					default: $(e, t, s, c, n, null);
				}
				Gt(e, r, i, o);
				return;
			case `option`:
				for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
					case `selected`:
						e.selected = r && typeof r != `function` && typeof r != `symbol`;
						break;
					default: $(e, t, l, r, n, null);
				}
				return;
			case `dialog`:
				Q(`beforetoggle`, e), Q(`toggle`, e), Q(`cancel`, e), Q(`close`, e);
				break;
			case `iframe`:
			case `object`:
				Q(`load`, e);
				break;
			case `video`:
			case `audio`:
				for (r = 0; r < _d.length; r++) Q(_d[r], e);
				break;
			case `image`:
				Q(`error`, e), Q(`load`, e);
				break;
			case `details`:
				Q(`toggle`, e);
				break;
			case `embed`:
			case `source`:
			case `link`: Q(`error`, e), Q(`load`, e);
			case `area`:
			case `base`:
			case `br`:
			case `col`:
			case `hr`:
			case `keygen`:
			case `meta`:
			case `param`:
			case `track`:
			case `wbr`:
			case `menuitem`:
				for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
					case `children`:
					case `dangerouslySetInnerHTML`: throw Error(a(137, t));
					default: $(e, t, u, r, n, null);
				}
				return;
			default: if (Xt(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && Nd(e, t, d, r, n, void 0));
				return;
			}
		}
		for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && $(e, t, c, r, n, null));
	}
	function Fd(e, t, n, r) {
		switch (t) {
			case `div`:
			case `span`:
			case `svg`:
			case `path`:
			case `a`:
			case `g`:
			case `p`:
			case `li`: break;
			case `input`:
				var i = null, o = null, s = null, c = null, l = null, u = null, d = null;
				for (m in n) {
					var f = n[m];
					if (n.hasOwnProperty(m) && f != null) switch (m) {
						case `checked`: break;
						case `value`: break;
						case `defaultValue`: l = f;
						default: r.hasOwnProperty(m) || $(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case `type`:
							o = m;
							break;
						case `name`:
							i = m;
							break;
						case `checked`:
							u = m;
							break;
						case `defaultChecked`:
							d = m;
							break;
						case `value`:
							s = m;
							break;
						case `defaultValue`:
							c = m;
							break;
						case `children`:
						case `dangerouslySetInnerHTML`:
							if (m != null) throw Error(a(137, t));
							break;
						default: m !== f && $(e, t, p, m, r, f);
					}
				}
				Bt(e, s, c, l, u, d, o, i);
				return;
			case `select`:
				for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
					case `value`: break;
					case `multiple`: m = l;
					default: r.hasOwnProperty(o) || $(e, t, o, null, r, l);
				}
				for (i in r) if (o = r[i], l = n[i], r.hasOwnProperty(i) && (o != null || l != null)) switch (i) {
					case `value`:
						p = o;
						break;
					case `defaultValue`:
						c = o;
						break;
					case `multiple`: s = o;
					default: o !== l && $(e, t, i, o, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? Ut(e, !!n, n ? [] : ``, !1) : Ut(e, !!n, t, !0)) : Ut(e, !!n, p, !1);
				return;
			case `textarea`:
				for (c in m = p = null, n) if (i = n[c], n.hasOwnProperty(c) && i != null && !r.hasOwnProperty(c)) switch (c) {
					case `value`: break;
					case `children`: break;
					default: $(e, t, c, null, r, i);
				}
				for (s in r) if (i = r[s], o = n[s], r.hasOwnProperty(s) && (i != null || o != null)) switch (s) {
					case `value`:
						p = i;
						break;
					case `defaultValue`:
						m = i;
						break;
					case `children`: break;
					case `dangerouslySetInnerHTML`:
						if (i != null) throw Error(a(91));
						break;
					default: i !== o && $(e, t, s, i, r, o);
				}
				Wt(e, p, m);
				return;
			case `option`:
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case `selected`:
						e.selected = !1;
						break;
					default: $(e, t, h, null, r, p);
				}
				for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
					case `selected`:
						e.selected = p && typeof p != `function` && typeof p != `symbol`;
						break;
					default: $(e, t, l, p, r, m);
				}
				return;
			case `img`:
			case `link`:
			case `area`:
			case `base`:
			case `br`:
			case `col`:
			case `embed`:
			case `hr`:
			case `keygen`:
			case `meta`:
			case `param`:
			case `source`:
			case `track`:
			case `wbr`:
			case `menuitem`:
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && $(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case `children`:
					case `dangerouslySetInnerHTML`:
						if (p != null) throw Error(a(137, t));
						break;
					default: $(e, t, u, p, r, m);
				}
				return;
			default: if (Xt(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && Nd(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || Nd(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && $(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || $(e, t, f, p, r, m);
	}
	function Id(e) {
		switch (e) {
			case `css`:
			case `script`:
			case `font`:
			case `img`:
			case `image`:
			case `input`:
			case `link`: return !0;
			default: return !1;
		}
	}
	function Ld() {
		if (typeof performance.getEntriesByType == `function`) {
			for (var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && Id(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && Id(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == `number`) ? e : 5;
	}
	var Rd = null, zd = null;
	function Bd(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function Vd(e) {
		switch (e) {
			case `http://www.w3.org/2000/svg`: return 1;
			case `http://www.w3.org/1998/Math/MathML`: return 2;
			default: return 0;
		}
	}
	function Hd(e, t) {
		if (e === 0) switch (t) {
			case `svg`: return 1;
			case `math`: return 2;
			default: return 0;
		}
		return e === 1 && t === `foreignObject` ? 0 : e;
	}
	function Ud(e, t) {
		return e === `textarea` || e === `noscript` || typeof t.children == `string` || typeof t.children == `number` || typeof t.children == `bigint` || typeof t.dangerouslySetInnerHTML == `object` && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var Wd = null;
	function Gd() {
		var e = window.event;
		return e && e.type === `popstate` ? e === Wd ? !1 : (Wd = e, !0) : (Wd = null, !1);
	}
	var Kd = typeof setTimeout == `function` ? setTimeout : void 0, qd = typeof clearTimeout == `function` ? clearTimeout : void 0, Jd = typeof Promise == `function` ? Promise : void 0, Yd = typeof queueMicrotask == `function` ? queueMicrotask : Jd === void 0 ? Kd : function(e) {
		return Jd.resolve(null).then(e).catch(Xd);
	};
	function Xd(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Zd(e) {
		return e === `head`;
	}
	function Qd(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === `/$` || n === `/&`) {
				if (r === 0) {
					e.removeChild(i), Np(t);
					return;
				}
				r--;
			} else if (n === `$` || n === `$?` || n === `$~` || n === `$!` || n === `&`) r++;
			else if (n === `html`) pf(e.ownerDocument.documentElement);
			else if (n === `head`) {
				n = e.ownerDocument.head, pf(n);
				for (var a = n.firstChild; a;) {
					var o = a.nextSibling, s = a.nodeName;
					a[mt] || s === `SCRIPT` || s === `STYLE` || s === `LINK` && a.rel.toLowerCase() === `stylesheet` || n.removeChild(a), a = o;
				}
			} else n === `body` && pf(e.ownerDocument.body);
			n = i;
		} while (n);
		Np(t);
	}
	function $d(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = `none`) : (n.style.display = n._stashedDisplay || ``, n.getAttribute(`style`) === `` && n.removeAttribute(`style`)) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = ``) : n.nodeValue = n._stashedText || ``), r && r.nodeType === 8) if (n = r.data, n === `/$`) {
				if (e === 0) break;
				e--;
			} else n !== `$` && n !== `$?` && n !== `$~` && n !== `$!` || e++;
			n = r;
		} while (n);
	}
	function ef(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case `HTML`:
				case `HEAD`:
				case `BODY`:
					ef(n), ht(n);
					continue;
				case `SCRIPT`:
				case `STYLE`: continue;
				case `LINK`: if (n.rel.toLowerCase() === `stylesheet`) continue;
			}
			e.removeChild(n);
		}
	}
	function tf(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
			} else if (!r) if (t === `input` && e.type === `hidden`) {
				var a = i.name == null ? null : `` + i.name;
				if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
			} else return e;
			else if (!e[mt]) switch (t) {
				case `meta`:
					if (!e.hasAttribute(`itemprop`)) break;
					return e;
				case `link`:
					if (a = e.getAttribute(`rel`), a === `stylesheet` && e.hasAttribute(`data-precedence`) || a !== i.rel || e.getAttribute(`href`) !== (i.href == null || i.href === `` ? null : i.href) || e.getAttribute(`crossorigin`) !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute(`title`) !== (i.title == null ? null : i.title)) break;
					return e;
				case `style`:
					if (e.hasAttribute(`data-precedence`)) break;
					return e;
				case `script`:
					if (a = e.getAttribute(`src`), (a !== (i.src == null ? null : i.src) || e.getAttribute(`type`) !== (i.type == null ? null : i.type) || e.getAttribute(`crossorigin`) !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute(`async`) && !e.hasAttribute(`itemprop`)) break;
					return e;
				default: return e;
			}
			if (e = cf(e.nextSibling), e === null) break;
		}
		return null;
	}
	function nf(e, t, n) {
		if (t === ``) return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !n || (e = cf(e.nextSibling), e === null)) return null;
		return e;
	}
	function rf(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !t || (e = cf(e.nextSibling), e === null)) return null;
		return e;
	}
	function af(e) {
		return e.data === `$?` || e.data === `$~`;
	}
	function of(e) {
		return e.data === `$!` || e.data === `$?` && e.ownerDocument.readyState !== `loading`;
	}
	function sf(e, t) {
		var n = e.ownerDocument;
		if (e.data === `$~`) e._reactRetry = t;
		else if (e.data !== `$?` || n.readyState !== `loading`) t();
		else {
			var r = function() {
				t(), n.removeEventListener(`DOMContentLoaded`, r);
			};
			n.addEventListener(`DOMContentLoaded`, r), e._reactRetry = r;
		}
	}
	function cf(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === `$` || t === `$!` || t === `$?` || t === `$~` || t === `&` || t === `F!` || t === `F`) break;
				if (t === `/$` || t === `/&`) return null;
			}
		}
		return e;
	}
	var lf = null;
	function uf(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === `/$` || n === `/&`) {
					if (t === 0) return cf(e.nextSibling);
					t--;
				} else n !== `$` && n !== `$!` && n !== `$?` && n !== `$~` && n !== `&` || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function df(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === `$` || n === `$!` || n === `$?` || n === `$~` || n === `&`) {
					if (t === 0) return e;
					t--;
				} else n !== `/$` && n !== `/&` || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function ff(e, t, n) {
		switch (t = Bd(n), e) {
			case `html`:
				if (e = t.documentElement, !e) throw Error(a(452));
				return e;
			case `head`:
				if (e = t.head, !e) throw Error(a(453));
				return e;
			case `body`:
				if (e = t.body, !e) throw Error(a(454));
				return e;
			default: throw Error(a(451));
		}
	}
	function pf(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		ht(e);
	}
	var mf = /* @__PURE__ */ new Map(), hf = /* @__PURE__ */ new Set();
	function gf(e) {
		return typeof e.getRootNode == `function` ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
	}
	var _f = M.d;
	M.d = {
		f: vf,
		r: yf,
		D: Sf,
		C: Cf,
		L: wf,
		m: Tf,
		X: Df,
		S: Ef,
		M: Of
	};
	function vf() {
		var e = _f.f(), t = bu();
		return e || t;
	}
	function yf(e) {
		var t = _t(e);
		t !== null && t.tag === 5 && t.type === `form` ? Es(t) : _f.r(e);
	}
	var bf = typeof document > `u` ? null : document;
	function xf(e, t, n) {
		var r = bf;
		if (r && typeof t == `string` && t) {
			var i = zt(t);
			i = `link[rel="` + e + `"][href="` + i + `"]`, typeof n == `string` && (i += `[crossorigin="` + n + `"]`), hf.has(i) || (hf.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement(`link`), Pd(t, `link`, e), bt(t), r.head.appendChild(t)));
		}
	}
	function Sf(e) {
		_f.D(e), xf(`dns-prefetch`, e, null);
	}
	function Cf(e, t) {
		_f.C(e, t), xf(`preconnect`, e, t);
	}
	function wf(e, t, n) {
		_f.L(e, t, n);
		var r = bf;
		if (r && e && t) {
			var i = `link[rel="preload"][as="` + zt(t) + `"]`;
			t === `image` && n && n.imageSrcSet ? (i += `[imagesrcset="` + zt(n.imageSrcSet) + `"]`, typeof n.imageSizes == `string` && (i += `[imagesizes="` + zt(n.imageSizes) + `"]`)) : i += `[href="` + zt(e) + `"]`;
			var a = i;
			switch (t) {
				case `style`:
					a = Af(e);
					break;
				case `script`: a = Pf(e);
			}
			mf.has(a) || (e = m({
				rel: `preload`,
				href: t === `image` && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), mf.set(a, e), r.querySelector(i) !== null || t === `style` && r.querySelector(jf(a)) || t === `script` && r.querySelector(Ff(a)) || (t = r.createElement(`link`), Pd(t, `link`, e), bt(t), r.head.appendChild(t)));
		}
	}
	function Tf(e, t) {
		_f.m(e, t);
		var n = bf;
		if (n && e) {
			var r = t && typeof t.as == `string` ? t.as : `script`, i = `link[rel="modulepreload"][as="` + zt(r) + `"][href="` + zt(e) + `"]`, a = i;
			switch (r) {
				case `audioworklet`:
				case `paintworklet`:
				case `serviceworker`:
				case `sharedworker`:
				case `worker`:
				case `script`: a = Pf(e);
			}
			if (!mf.has(a) && (e = m({
				rel: `modulepreload`,
				href: e
			}, t), mf.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case `audioworklet`:
					case `paintworklet`:
					case `serviceworker`:
					case `sharedworker`:
					case `worker`:
					case `script`: if (n.querySelector(Ff(a))) return;
				}
				r = n.createElement(`link`), Pd(r, `link`, e), bt(r), n.head.appendChild(r);
			}
		}
	}
	function Ef(e, t, n) {
		_f.S(e, t, n);
		var r = bf;
		if (r && e) {
			var i = yt(r).hoistableStyles, a = Af(e);
			t ||= `default`;
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(jf(a))) s.loading = 5;
				else {
					e = m({
						rel: `stylesheet`,
						href: e,
						"data-precedence": t
					}, n), (n = mf.get(a)) && Rf(e, n);
					var c = o = r.createElement(`link`);
					bt(c), Pd(c, `link`, e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener(`load`, function() {
						s.loading |= 1;
					}), c.addEventListener(`error`, function() {
						s.loading |= 2;
					}), s.loading |= 4, Lf(o, t, r);
				}
				o = {
					type: `stylesheet`,
					instance: o,
					count: 1,
					state: s
				}, i.set(a, o);
			}
		}
	}
	function Df(e, t) {
		_f.X(e, t);
		var n = bf;
		if (n && e) {
			var r = yt(n).hoistableScripts, i = Pf(e), a = r.get(i);
			a || (a = n.querySelector(Ff(i)), a || (e = m({
				src: e,
				async: !0
			}, t), (t = mf.get(i)) && zf(e, t), a = n.createElement(`script`), bt(a), Pd(a, `link`, e), n.head.appendChild(a)), a = {
				type: `script`,
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Of(e, t) {
		_f.M(e, t);
		var n = bf;
		if (n && e) {
			var r = yt(n).hoistableScripts, i = Pf(e), a = r.get(i);
			a || (a = n.querySelector(Ff(i)), a || (e = m({
				src: e,
				async: !0,
				type: `module`
			}, t), (t = mf.get(i)) && zf(e, t), a = n.createElement(`script`), bt(a), Pd(a, `link`, e), n.head.appendChild(a)), a = {
				type: `script`,
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function kf(e, t, n, r) {
		var i = (i = ue.current) ? gf(i) : null;
		if (!i) throw Error(a(446));
		switch (e) {
			case `meta`:
			case `title`: return null;
			case `style`: return typeof n.precedence == `string` && typeof n.href == `string` ? (t = Af(n.href), n = yt(i).hoistableStyles, r = n.get(t), r || (r = {
				type: `style`,
				instance: null,
				count: 0,
				state: null
			}, n.set(t, r)), r) : {
				type: `void`,
				instance: null,
				count: 0,
				state: null
			};
			case `link`:
				if (n.rel === `stylesheet` && typeof n.href == `string` && typeof n.precedence == `string`) {
					e = Af(n.href);
					var o = yt(i).hoistableStyles, s = o.get(e);
					if (s || (i = i.ownerDocument || i, s = {
						type: `stylesheet`,
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, o.set(e, s), (o = i.querySelector(jf(e))) && !o._p && (s.instance = o, s.state.loading = 5), mf.has(e) || (n = {
						rel: `preload`,
						as: `style`,
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, mf.set(e, n), o || Nf(i, e, n, s.state))), t && r === null) throw Error(a(528, ``));
					return s;
				}
				if (t && r !== null) throw Error(a(529, ``));
				return null;
			case `script`: return t = n.async, n = n.src, typeof n == `string` && t && typeof t != `function` && typeof t != `symbol` ? (t = Pf(n), n = yt(i).hoistableScripts, r = n.get(t), r || (r = {
				type: `script`,
				instance: null,
				count: 0,
				state: null
			}, n.set(t, r)), r) : {
				type: `void`,
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(a(444, e));
		}
	}
	function Af(e) {
		return `href="` + zt(e) + `"`;
	}
	function jf(e) {
		return `link[rel="stylesheet"][` + e + `]`;
	}
	function Mf(e) {
		return m({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function Nf(e, t, n, r) {
		e.querySelector(`link[rel="preload"][as="style"][` + t + `]`) ? r.loading = 1 : (t = e.createElement(`link`), r.preload = t, t.addEventListener(`load`, function() {
			return r.loading |= 1;
		}), t.addEventListener(`error`, function() {
			return r.loading |= 2;
		}), Pd(t, `link`, n), bt(t), e.head.appendChild(t));
	}
	function Pf(e) {
		return `[src="` + zt(e) + `"]`;
	}
	function Ff(e) {
		return `script[async]` + e;
	}
	function If(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case `style`:
				var r = e.querySelector(`style[data-href~="` + zt(n.href) + `"]`);
				if (r) return t.instance = r, bt(r), r;
				var i = m({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement(`style`), bt(r), Pd(r, `style`, i), Lf(r, n.precedence, e), t.instance = r;
			case `stylesheet`:
				i = Af(n.href);
				var o = e.querySelector(jf(i));
				if (o) return t.state.loading |= 4, t.instance = o, bt(o), o;
				r = Mf(n), (i = mf.get(i)) && Rf(r, i), o = (e.ownerDocument || e).createElement(`link`), bt(o);
				var s = o;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), Pd(o, `link`, r), t.state.loading |= 4, Lf(o, n.precedence, e), t.instance = o;
			case `script`: return o = Pf(n.src), (i = e.querySelector(Ff(o))) ? (t.instance = i, bt(i), i) : (r = n, (i = mf.get(o)) && (r = m({}, n), zf(r, i)), e = e.ownerDocument || e, i = e.createElement(`script`), bt(i), Pd(i, `link`, r), e.head.appendChild(i), t.instance = i);
			case `void`: return null;
			default: throw Error(a(443, t.type));
		}
		else t.type === `stylesheet` && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Lf(r, n.precedence, e));
		return t.instance;
	}
	function Lf(e, t, n) {
		for (var r = n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function Rf(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function zf(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var Bf = null;
	function Vf(e, t, n) {
		if (Bf === null) {
			var r = /* @__PURE__ */ new Map(), i = Bf = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = Bf, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[mt] || a[st] || e === `link` && a.getAttribute(`rel`) === `stylesheet`) && a.namespaceURI !== `http://www.w3.org/2000/svg`) {
				var o = a.getAttribute(t) || ``;
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function Hf(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === `title` ? e.querySelector(`head > title`) : null);
	}
	function Uf(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case `meta`:
			case `title`: return !0;
			case `style`:
				if (typeof t.precedence != `string` || typeof t.href != `string` || t.href === ``) break;
				return !0;
			case `link`:
				if (typeof t.rel != `string` || typeof t.href != `string` || t.href === `` || t.onLoad || t.onError) break;
				switch (t.rel) {
					case `stylesheet`: return e = t.disabled, typeof t.precedence == `string` && e == null;
					default: return !0;
				}
			case `script`: if (t.async && typeof t.async != `function` && typeof t.async != `symbol` && !t.onLoad && !t.onError && t.src && typeof t.src == `string`) return !0;
		}
		return !1;
	}
	function Wf(e) {
		return !(e.type === `stylesheet` && !(e.state.loading & 3));
	}
	function Gf(e, t, n, r) {
		if (n.type === `stylesheet` && (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = Af(r.href), a = t.querySelector(jf(i));
				if (a) {
					t = a._p, typeof t == `object` && t && typeof t.then == `function` && (e.count++, e = Jf.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, bt(a);
					return;
				}
				a = t.ownerDocument || t, r = Mf(r), (i = mf.get(i)) && Rf(r, i), a = a.createElement(`link`), bt(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), Pd(a, `link`, r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = Jf.bind(e), t.addEventListener(`load`, n), t.addEventListener(`error`, n));
		}
	}
	var Kf = 0;
	function qf(e, t) {
		return e.stylesheets && e.count === 0 && Xf(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && Kf === 0 && (Kf = 62500 * Ld());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > Kf ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function Jf() {
		if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
			if (this.stylesheets) Xf(this, this.stylesheets);
			else if (this.unsuspend) {
				var e = this.unsuspend;
				this.unsuspend = null, e();
			}
		}
	}
	var Yf = null;
	function Xf(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, Yf = /* @__PURE__ */ new Map(), t.forEach(Zf, e), Yf = null, Jf.call(e));
	}
	function Zf(e, t) {
		if (!(t.state.loading & 4)) {
			var n = Yf.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), Yf.set(e, n);
				for (var i = e.querySelectorAll(`link[data-precedence],style[data-precedence]`), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute(`data-precedence`), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = Jf.bind(this), i.addEventListener(`load`, r), i.addEventListener(`error`, r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var Qf = {
		$$typeof: S,
		Provider: null,
		Consumer: null,
		_currentValue: ie,
		_currentValue2: ie,
		_threadCount: 0
	};
	function $f(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ze(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ze(0), this.hiddenUpdates = Ze(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function ep(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new $f(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = oi(3, null, null, t), e.current = a, a.stateNode = e, t = oa(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, za(a), e;
	}
	function tp(e) {
		return e ? (e = ii, e) : ii;
	}
	function np(e, t, n, r, i, a) {
		i = tp(i), r.context === null ? r.context = i : r.pendingContext = i, r = Va(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = Ha(e, r, t), n !== null && (hu(n, e, t), Ua(n, e, t));
	}
	function rp(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function ip(e, t) {
		rp(e, t), (e = e.alternate) && rp(e, t);
	}
	function ap(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = ti(e, 67108864);
			t !== null && hu(t, e, 67108864), ip(e, 67108864);
		}
	}
	function op(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = pu();
			t = rt(t);
			var n = ti(e, t);
			n !== null && hu(n, e, t), ip(e, t);
		}
	}
	var sp = !0;
	function cp(e, t, n, r) {
		var i = j.T;
		j.T = null;
		var a = M.p;
		try {
			M.p = 2, up(e, t, n, r);
		} finally {
			M.p = a, j.T = i;
		}
	}
	function lp(e, t, n, r) {
		var i = j.T;
		j.T = null;
		var a = M.p;
		try {
			M.p = 8, up(e, t, n, r);
		} finally {
			M.p = a, j.T = i;
		}
	}
	function up(e, t, n, r) {
		if (sp) {
			var i = dp(r);
			if (i === null) wd(e, t, r, fp, n), Cp(e, r);
			else if (Tp(i, e, t, n, r)) r.stopPropagation();
			else if (Cp(e, r), t & 4 && -1 < Sp.indexOf(e)) {
				for (; i !== null;) {
					var a = _t(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = qe(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - ze(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									rd(a), !(G & 6) && (nu = De() + 500, id(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = ti(a, 2), s !== null && hu(s, a, 2), bu(), ip(a, 2);
					}
					if (a = dp(r), a === null && wd(e, t, r, fp, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else wd(e, t, r, null, n);
		}
	}
	function dp(e) {
		return e = nn(e), pp(e);
	}
	var fp = null;
	function pp(e) {
		if (fp = null, e = gt(e), e !== null) {
			var t = c(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = l(t), e !== null) return e;
					e = null;
				} else if (n === 31) {
					if (e = u(t), e !== null) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return fp = e, null;
	}
	function mp(e) {
		switch (e) {
			case `beforetoggle`:
			case `cancel`:
			case `click`:
			case `close`:
			case `contextmenu`:
			case `copy`:
			case `cut`:
			case `auxclick`:
			case `dblclick`:
			case `dragend`:
			case `dragstart`:
			case `drop`:
			case `focusin`:
			case `focusout`:
			case `input`:
			case `invalid`:
			case `keydown`:
			case `keypress`:
			case `keyup`:
			case `mousedown`:
			case `mouseup`:
			case `paste`:
			case `pause`:
			case `play`:
			case `pointercancel`:
			case `pointerdown`:
			case `pointerup`:
			case `ratechange`:
			case `reset`:
			case `resize`:
			case `seeked`:
			case `submit`:
			case `toggle`:
			case `touchcancel`:
			case `touchend`:
			case `touchstart`:
			case `volumechange`:
			case `change`:
			case `selectionchange`:
			case `textInput`:
			case `compositionstart`:
			case `compositionend`:
			case `compositionupdate`:
			case `beforeblur`:
			case `afterblur`:
			case `beforeinput`:
			case `blur`:
			case `fullscreenchange`:
			case `focus`:
			case `hashchange`:
			case `popstate`:
			case `select`:
			case `selectstart`: return 2;
			case `drag`:
			case `dragenter`:
			case `dragexit`:
			case `dragleave`:
			case `dragover`:
			case `mousemove`:
			case `mouseout`:
			case `mouseover`:
			case `pointermove`:
			case `pointerout`:
			case `pointerover`:
			case `scroll`:
			case `touchmove`:
			case `wheel`:
			case `mouseenter`:
			case `mouseleave`:
			case `pointerenter`:
			case `pointerleave`: return 8;
			case `message`: switch (Oe()) {
				case ke: return 2;
				case Ae: return 8;
				case je:
				case Me: return 32;
				case Ne: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var hp = !1, gp = null, _p = null, vp = null, yp = /* @__PURE__ */ new Map(), bp = /* @__PURE__ */ new Map(), xp = [], Sp = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);
	function Cp(e, t) {
		switch (e) {
			case `focusin`:
			case `focusout`:
				gp = null;
				break;
			case `dragenter`:
			case `dragleave`:
				_p = null;
				break;
			case `mouseover`:
			case `mouseout`:
				vp = null;
				break;
			case `pointerover`:
			case `pointerout`:
				yp.delete(t.pointerId);
				break;
			case `gotpointercapture`:
			case `lostpointercapture`: bp.delete(t.pointerId);
		}
	}
	function wp(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = _t(t), t !== null && ap(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Tp(e, t, n, r, i) {
		switch (t) {
			case `focusin`: return gp = wp(gp, e, t, n, r, i), !0;
			case `dragenter`: return _p = wp(_p, e, t, n, r, i), !0;
			case `mouseover`: return vp = wp(vp, e, t, n, r, i), !0;
			case `pointerover`:
				var a = i.pointerId;
				return yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)), !0;
			case `gotpointercapture`: return a = i.pointerId, bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Ep(e) {
		var t = gt(e.target);
		if (t !== null) {
			var n = c(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = l(n), t !== null) {
						e.blockedOn = t, at(e.priority, function() {
							op(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = u(n), t !== null) {
						e.blockedOn = t, at(e.priority, function() {
							op(n);
						});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function Dp(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = dp(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				tn = r, n.target.dispatchEvent(r), tn = null;
			} else return t = _t(n), t !== null && ap(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function Op(e, t, n) {
		Dp(e) && n.delete(t);
	}
	function kp() {
		hp = !1, gp !== null && Dp(gp) && (gp = null), _p !== null && Dp(_p) && (_p = null), vp !== null && Dp(vp) && (vp = null), yp.forEach(Op), bp.forEach(Op);
	}
	function Ap(e, n) {
		e.blockedOn === n && (e.blockedOn = null, hp || (hp = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, kp)));
	}
	var jp = null;
	function Mp(e) {
		jp !== e && (jp = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
			jp === e && (jp = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != `function`) {
					if (pp(r || n) === null) continue;
					break;
				}
				var a = _t(n);
				a !== null && (e.splice(t, 3), t -= 3, ws(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function Np(e) {
		function t(t) {
			return Ap(t, e);
		}
		gp !== null && Ap(gp, e), _p !== null && Ap(_p, e), vp !== null && Ap(vp, e), yp.forEach(t), bp.forEach(t);
		for (var n = 0; n < xp.length; n++) {
			var r = xp[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < xp.length && (n = xp[0], n.blockedOn === null);) Ep(n), n.blockedOn === null && xp.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[ct] || null;
			if (typeof a == `function`) o || Mp(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute(`formAction`)) {
					if (i = a, o = a[ct] || null) s = o.formAction;
					else if (pp(i) !== null) continue;
				} else s = o.action;
				typeof s == `function` ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Mp(n);
			}
		}
	}
	function Pp() {
		function e(e) {
			e.canIntercept && e.info === `react-transition` && e.intercept({
				handler: function() {
					return new Promise(function(e) {
						return i = e;
					});
				},
				focusReset: `manual`,
				scroll: `manual`
			});
		}
		function t() {
			i !== null && (i(), i = null), r || setTimeout(n, 20);
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e && e.url != null && navigation.navigate(e.url, {
					state: e.getState(),
					info: `react-transition`,
					history: `replace`
				});
			}
		}
		if (typeof navigation == `object`) {
			var r = !1, i = null;
			return navigation.addEventListener(`navigate`, e), navigation.addEventListener(`navigatesuccess`, t), navigation.addEventListener(`navigateerror`, t), setTimeout(n, 100), function() {
				r = !0, navigation.removeEventListener(`navigate`, e), navigation.removeEventListener(`navigatesuccess`, t), navigation.removeEventListener(`navigateerror`, t), i !== null && (i(), i = null);
			};
		}
	}
	function Fp(e) {
		this._internalRoot = e;
	}
	Ip.prototype.render = Fp.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(a(409));
		var n = t.current;
		np(n, pu(), e, t, null, null);
	}, Ip.prototype.unmount = Fp.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			np(e.current, 2, null, e, null, null), bu(), t[lt] = null;
		}
	};
	function Ip(e) {
		this._internalRoot = e;
	}
	Ip.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = it();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++);
			xp.splice(n, 0, e), n === 0 && Ep(e);
		}
	};
	var Lp = n.version;
	if (Lp !== `19.2.7`) throw Error(a(527, Lp, `19.2.7`));
	M.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == `function` ? Error(a(188)) : (e = Object.keys(e).join(`,`), Error(a(268, e)));
		return e = f(t), e = e === null ? null : p(e), e = e === null ? null : e.stateNode, e;
	};
	var Rp = {
		bundleType: 0,
		version: `19.2.7`,
		rendererPackageName: `react-dom`,
		currentDispatcherRef: j,
		reconcilerVersion: `19.2.7`
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
		var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!zp.isDisabled && zp.supportsFiber) try {
			Ie = zp.inject(Rp), Le = zp;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!o(e)) throw Error(a(299));
		var n = !1, r = ``, i = qs, s = Js, c = Ys;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = ep(e, 1, !1, null, null, n, r, null, i, s, c, Pp), e[lt] = t.current, Sd(e), new Fp(t);
	};
})), qe = i(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`)) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = Ke();
})), I = t(r(), 1), Je = qe(), Ye = (...e) => e.filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t).join(` `).trim(), Xe = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(), Ze = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), Qe = (e) => {
	let t = Ze(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, $e = {
	xmlns: `http://www.w3.org/2000/svg`,
	width: 24,
	height: 24,
	viewBox: `0 0 24 24`,
	fill: `none`,
	stroke: `currentColor`,
	strokeWidth: 2,
	strokeLinecap: `round`,
	strokeLinejoin: `round`
}, et = (e) => {
	for (let t in e) if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
	return !1;
}, tt = (0, I.createContext)({}), nt = () => (0, I.useContext)(tt), rt = (0, I.forwardRef)(({ color: e, size: t, strokeWidth: n, absoluteStrokeWidth: r, className: i = ``, children: a, iconNode: o, ...s }, c) => {
	let { size: l = 24, strokeWidth: u = 2, absoluteStrokeWidth: d = !1, color: f = `currentColor`, className: p = `` } = nt() ?? {}, m = r ?? d ? Number(n ?? u) * 24 / Number(t ?? l) : n ?? u;
	return (0, I.createElement)(`svg`, {
		ref: c,
		...$e,
		width: t ?? l ?? $e.width,
		height: t ?? l ?? $e.height,
		stroke: e ?? f,
		strokeWidth: m,
		className: Ye(`lucide`, p, i),
		...!a && !et(s) && { "aria-hidden": `true` },
		...s
	}, [...o.map(([e, t]) => (0, I.createElement)(e, t)), ...Array.isArray(a) ? a : [a]]);
}), L = (e, t) => {
	let n = (0, I.forwardRef)(({ className: n, ...r }, i) => (0, I.createElement)(rt, {
		ref: i,
		iconNode: t,
		className: Ye(`lucide-${Xe(Qe(e))}`, `lucide-${e}`, n),
		...r
	}));
	return n.displayName = Qe(e), n;
}, it = L(`arrow-down-to-dot`, [
	[`path`, {
		d: `M12 2v14`,
		key: `jyx4ut`
	}],
	[`path`, {
		d: `m19 9-7 7-7-7`,
		key: `1oe3oy`
	}],
	[`circle`, {
		cx: `12`,
		cy: `21`,
		r: `1`,
		key: `o0uj5v`
	}]
]), at = L(`arrow-up-from-dot`, [
	[`path`, {
		d: `m5 9 7-7 7 7`,
		key: `1hw5ic`
	}],
	[`path`, {
		d: `M12 16V2`,
		key: `ywoabb`
	}],
	[`circle`, {
		cx: `12`,
		cy: `21`,
		r: `1`,
		key: `o0uj5v`
	}]
]), ot = L(`book`, [[`path`, {
	d: `M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,
	key: `k3hazp`
}]]), st = L(`bug-play`, [
	[`path`, {
		d: `M10 19.655A6 6 0 0 1 6 14v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 3.97`,
		key: `1gnv52`
	}],
	[`path`, {
		d: `M14 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z`,
		key: `1weqy9`
	}],
	[`path`, {
		d: `M14.12 3.88 16 2`,
		key: `qol33r`
	}],
	[`path`, {
		d: `M21 5a4 4 0 0 1-3.55 3.97`,
		key: `5cxbf6`
	}],
	[`path`, {
		d: `M3 21a4 4 0 0 1 3.81-4`,
		key: `1fjd4g`
	}],
	[`path`, {
		d: `M3 5a4 4 0 0 0 3.55 3.97`,
		key: `1d7oge`
	}],
	[`path`, {
		d: `M6 13H2`,
		key: `82j7cp`
	}],
	[`path`, {
		d: `m8 2 1.88 1.88`,
		key: `fmnt4t`
	}],
	[`path`, {
		d: `M9 7.13V6a3 3 0 1 1 6 0v1.13`,
		key: `1vgav8`
	}]
]), ct = L(`check`, [[`path`, {
	d: `M20 6 9 17l-5-5`,
	key: `1gmf2c`
}]]), lt = L(`circle-alert`, [
	[`circle`, {
		cx: `12`,
		cy: `12`,
		r: `10`,
		key: `1mglay`
	}],
	[`line`, {
		x1: `12`,
		x2: `12`,
		y1: `8`,
		y2: `12`,
		key: `1pkeuh`
	}],
	[`line`, {
		x1: `12`,
		x2: `12.01`,
		y1: `16`,
		y2: `16`,
		key: `4dfq90`
	}]
]), ut = L(`code`, [[`path`, {
	d: `m16 18 6-6-6-6`,
	key: `eg8j8`
}], [`path`, {
	d: `m8 6-6 6 6 6`,
	key: `ppft3o`
}]]), dt = L(`cog`, [
	[`path`, {
		d: `M11 10.27 7 3.34`,
		key: `16pf9h`
	}],
	[`path`, {
		d: `m11 13.73-4 6.93`,
		key: `794ttg`
	}],
	[`path`, {
		d: `M12 22v-2`,
		key: `1osdcq`
	}],
	[`path`, {
		d: `M12 2v2`,
		key: `tus03m`
	}],
	[`path`, {
		d: `M14 12h8`,
		key: `4f43i9`
	}],
	[`path`, {
		d: `m17 20.66-1-1.73`,
		key: `eq3orb`
	}],
	[`path`, {
		d: `m17 3.34-1 1.73`,
		key: `2wel8s`
	}],
	[`path`, {
		d: `M2 12h2`,
		key: `1t8f8n`
	}],
	[`path`, {
		d: `m20.66 17-1.73-1`,
		key: `sg0v6f`
	}],
	[`path`, {
		d: `m20.66 7-1.73 1`,
		key: `1ow05n`
	}],
	[`path`, {
		d: `m3.34 17 1.73-1`,
		key: `nuk764`
	}],
	[`path`, {
		d: `m3.34 7 1.73 1`,
		key: `1ulond`
	}],
	[`circle`, {
		cx: `12`,
		cy: `12`,
		r: `2`,
		key: `1c9p78`
	}],
	[`circle`, {
		cx: `12`,
		cy: `12`,
		r: `8`,
		key: `46899m`
	}]
]), ft = L(`container`, [
	[`path`, {
		d: `M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z`,
		key: `1t2lqe`
	}],
	[`path`, {
		d: `M10 21.9V14L2.1 9.1`,
		key: `o7czzq`
	}],
	[`path`, {
		d: `m10 14 11.9-6.9`,
		key: `zm5e20`
	}],
	[`path`, {
		d: `M14 19.8v-8.1`,
		key: `159ecu`
	}],
	[`path`, {
		d: `M18 17.5V9.4`,
		key: `11uown`
	}]
]), pt = L(`fast-forward`, [[`path`, {
	d: `M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z`,
	key: `b19h5q`
}], [`path`, {
	d: `M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z`,
	key: `h7h5ge`
}]]), mt = L(`flag`, [[`path`, {
	d: `M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528`,
	key: `1jaruq`
}]]), ht = L(`git-commit-horizontal`, [
	[`circle`, {
		cx: `12`,
		cy: `12`,
		r: `3`,
		key: `1v7zrd`
	}],
	[`line`, {
		x1: `3`,
		x2: `9`,
		y1: `12`,
		y2: `12`,
		key: `1dyftd`
	}],
	[`line`, {
		x1: `15`,
		x2: `21`,
		y1: `12`,
		y2: `12`,
		key: `oup4p8`
	}]
]), gt = L(`globe`, [
	[`circle`, {
		cx: `12`,
		cy: `12`,
		r: `10`,
		key: `1mglay`
	}],
	[`path`, {
		d: `M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,
		key: `13o1zl`
	}],
	[`path`, {
		d: `M2 12h20`,
		key: `9i4pu4`
	}]
]), _t = L(`grip-vertical`, [
	[`circle`, {
		cx: `9`,
		cy: `12`,
		r: `1`,
		key: `1vctgf`
	}],
	[`circle`, {
		cx: `9`,
		cy: `5`,
		r: `1`,
		key: `hp0tcf`
	}],
	[`circle`, {
		cx: `9`,
		cy: `19`,
		r: `1`,
		key: `fkjjf6`
	}],
	[`circle`, {
		cx: `15`,
		cy: `12`,
		r: `1`,
		key: `1tmaij`
	}],
	[`circle`, {
		cx: `15`,
		cy: `5`,
		r: `1`,
		key: `19l28e`
	}],
	[`circle`, {
		cx: `15`,
		cy: `19`,
		r: `1`,
		key: `f4zoj3`
	}]
]), vt = L(`layers`, [
	[`path`, {
		d: `M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,
		key: `zw3jo`
	}],
	[`path`, {
		d: `M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,
		key: `1wduqc`
	}],
	[`path`, {
		d: `M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,
		key: `kqbvx6`
	}]
]), yt = L(`loader-circle`, [[`path`, {
	d: `M21 12a9 9 0 1 1-6.219-8.56`,
	key: `13zald`
}]]), bt = L(`loader`, [
	[`path`, {
		d: `M12 2v4`,
		key: `3427ic`
	}],
	[`path`, {
		d: `m16.2 7.8 2.9-2.9`,
		key: `r700ao`
	}],
	[`path`, {
		d: `M18 12h4`,
		key: `wj9ykh`
	}],
	[`path`, {
		d: `m16.2 16.2 2.9 2.9`,
		key: `1bxg5t`
	}],
	[`path`, {
		d: `M12 18v4`,
		key: `jadmvz`
	}],
	[`path`, {
		d: `m4.9 19.1 2.9-2.9`,
		key: `bwix9q`
	}],
	[`path`, {
		d: `M2 12h4`,
		key: `j09sii`
	}],
	[`path`, {
		d: `m4.9 4.9 2.9 2.9`,
		key: `giyufr`
	}]
]), xt = L(`loader-pinwheel`, [
	[`path`, {
		d: `M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0`,
		key: `1lzz15`
	}],
	[`path`, {
		d: `M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6`,
		key: `1gnrpi`
	}],
	[`path`, {
		d: `M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6`,
		key: `u9yy5q`
	}],
	[`circle`, {
		cx: `12`,
		cy: `12`,
		r: `10`,
		key: `1mglay`
	}]
]), St = L(`memory-stick`, [
	[`path`, {
		d: `M12 12v-2`,
		key: `fwoke6`
	}],
	[`path`, {
		d: `M12 18v-2`,
		key: `qj6yno`
	}],
	[`path`, {
		d: `M16 12v-2`,
		key: `heuere`
	}],
	[`path`, {
		d: `M16 18v-2`,
		key: `s1ct0w`
	}],
	[`path`, {
		d: `M2 11h1.5`,
		key: `15p63e`
	}],
	[`path`, {
		d: `M20 18v-2`,
		key: `12ehxp`
	}],
	[`path`, {
		d: `M20.5 11H22`,
		key: `khsy7a`
	}],
	[`path`, {
		d: `M4 18v-2`,
		key: `1c3oqr`
	}],
	[`path`, {
		d: `M8 12v-2`,
		key: `1mwtfd`
	}],
	[`path`, {
		d: `M8 18v-2`,
		key: `qcmpov`
	}],
	[`rect`, {
		x: `2`,
		y: `6`,
		width: `20`,
		height: `10`,
		rx: `2`,
		key: `1qcswk`
	}]
]), Ct = L(`monitor`, [
	[`rect`, {
		width: `20`,
		height: `14`,
		x: `2`,
		y: `3`,
		rx: `2`,
		key: `48i651`
	}],
	[`line`, {
		x1: `8`,
		x2: `16`,
		y1: `21`,
		y2: `21`,
		key: `1svkeh`
	}],
	[`line`, {
		x1: `12`,
		x2: `12`,
		y1: `17`,
		y2: `21`,
		key: `vw1qmm`
	}]
]), wt = L(`octagon-x`, [
	[`path`, {
		d: `m15 9-6 6`,
		key: `1uzhvr`
	}],
	[`path`, {
		d: `M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z`,
		key: `2d38gg`
	}],
	[`path`, {
		d: `m9 9 6 6`,
		key: `z0biqf`
	}]
]), Tt = L(`play`, [[`path`, {
	d: `M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,
	key: `10ikf1`
}]]), Et = L(`redo-dot`, [
	[`circle`, {
		cx: `12`,
		cy: `17`,
		r: `1`,
		key: `1ixnty`
	}],
	[`path`, {
		d: `M21 7v6h-6`,
		key: `3ptur4`
	}],
	[`path`, {
		d: `M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7`,
		key: `1kgawr`
	}]
]), Dt = L(`rewind`, [[`path`, {
	d: `M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z`,
	key: `2a1g8i`
}], [`path`, {
	d: `M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z`,
	key: `rg3s36`
}]]), Ot = L(`server-off`, [
	[`path`, {
		d: `M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5`,
		key: `bt2siv`
	}],
	[`path`, {
		d: `M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z`,
		key: `1hjrv1`
	}],
	[`path`, {
		d: `M22 17v-1a2 2 0 0 0-2-2h-1`,
		key: `1iynyr`
	}],
	[`path`, {
		d: `M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z`,
		key: `161ggg`
	}],
	[`path`, {
		d: `M6 18h.01`,
		key: `uhywen`
	}],
	[`path`, {
		d: `m2 2 20 20`,
		key: `1ooewy`
	}]
]), kt = L(`server`, [
	[`rect`, {
		width: `20`,
		height: `8`,
		x: `2`,
		y: `2`,
		rx: `2`,
		ry: `2`,
		key: `ngkwjq`
	}],
	[`rect`, {
		width: `20`,
		height: `8`,
		x: `2`,
		y: `14`,
		rx: `2`,
		ry: `2`,
		key: `iecqi9`
	}],
	[`line`, {
		x1: `6`,
		x2: `6.01`,
		y1: `6`,
		y2: `6`,
		key: `16zg32`
	}],
	[`line`, {
		x1: `6`,
		x2: `6.01`,
		y1: `18`,
		y2: `18`,
		key: `nzw8ys`
	}]
]), At = L(`settings`, [[`path`, {
	d: `M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,
	key: `1i5ecw`
}], [`circle`, {
	cx: `12`,
	cy: `12`,
	r: `3`,
	key: `1v7zrd`
}]]), jt = L(`share`, [
	[`path`, {
		d: `M12 2v13`,
		key: `1km8f5`
	}],
	[`path`, {
		d: `m16 6-4-4-4 4`,
		key: `13yo43`
	}],
	[`path`, {
		d: `M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8`,
		key: `1b2hhj`
	}]
]), Mt = L(`square`, [[`rect`, {
	width: `18`,
	height: `18`,
	x: `3`,
	y: `3`,
	rx: `2`,
	key: `afitv7`
}]]), Nt = L(`step-forward`, [[`path`, {
	d: `M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z`,
	key: `1ystz2`
}], [`path`, {
	d: `M3 4v16`,
	key: `1ph11n`
}]]), Pt = L(`tag`, [[`path`, {
	d: `M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`,
	key: `vktsd0`
}], [`circle`, {
	cx: `7.5`,
	cy: `7.5`,
	r: `.5`,
	fill: `currentColor`,
	key: `kqv944`
}]]), Ft = L(`text-align-start`, [
	[`path`, {
		d: `M21 5H3`,
		key: `1fi0y6`
	}],
	[`path`, {
		d: `M15 12H3`,
		key: `6jk70r`
	}],
	[`path`, {
		d: `M17 19H3`,
		key: `z6ezky`
	}]
]), It = L(`undo-dot`, [
	[`path`, {
		d: `M21 17a9 9 0 0 0-15-6.7L3 13`,
		key: `8mp6z9`
	}],
	[`path`, {
		d: `M3 7v6h6`,
		key: `1v2h90`
	}],
	[`circle`, {
		cx: `12`,
		cy: `17`,
		r: `1`,
		key: `1ixnty`
	}]
]), Lt = L(`undo`, [[`path`, {
	d: `M3 7v6h6`,
	key: `1v2h90`
}], [`path`, {
	d: `M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13`,
	key: `1r6uu6`
}]]), Rt = (0, I.createContext)({});
function zt(e) {
	let t = (0, I.useRef)(null);
	return t.current === null && (t.current = e()), t.current;
}
var Bt = typeof window < `u` ? I.useLayoutEffect : I.useEffect, Vt = (0, I.createContext)(null);
function Ht(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function Ut(e, t) {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
var Wt = (e, t, n) => n > t ? t : n < e ? e : n, Gt = {}, Kt = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), qt = (e) => typeof e == `object` && !!e, Jt = (e) => /^0[^.\s]+$/u.test(e);
function Yt(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
var Xt = (e) => e, Zt = (...e) => e.reduce((e, t) => (n) => t(e(n))), Qt = (e, t, n) => {
	let r = t - e;
	return r ? (n - e) / r : 1;
}, $t = class {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return Ht(this.subscriptions, e), () => Ut(this.subscriptions, e);
	}
	notify(e, t, n) {
		let r = this.subscriptions.length;
		if (r) if (r === 1) this.subscriptions[0](e, t, n);
		else for (let i = 0; i < r; i++) {
			let r = this.subscriptions[i];
			r && r(e, t, n);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}, en = (e) => e * 1e3, tn = (e) => e / 1e3, nn = (e, t) => t ? 1e3 / t * e : 0, rn = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, an = 1e-7, on = 12;
function sn(e, t, n, r, i) {
	let a, o, s = 0;
	do
		o = t + (n - t) / 2, a = rn(o, r, i) - e, a > 0 ? n = o : t = o;
	while (Math.abs(a) > an && ++s < on);
	return o;
}
function cn(e, t, n, r) {
	if (e === t && n === r) return Xt;
	let i = (t) => sn(t, 0, 1, e, n);
	return (e) => e === 0 || e === 1 ? e : rn(i(e), t, r);
}
var ln = (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, un = (e) => (t) => 1 - e(1 - t), dn = cn(.33, 1.53, .69, .99), fn = un(dn), pn = ln(fn), mn = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * fn(e) : .5 * (2 - 2 ** (-10 * (e - 1))), hn = (e) => 1 - Math.sin(Math.acos(e)), gn = un(hn), _n = ln(hn), vn = cn(.42, 0, 1, 1), yn = cn(0, 0, .58, 1), bn = cn(.42, 0, .58, 1), xn = (e) => Array.isArray(e) && typeof e[0] != `number`, Sn = (e) => Array.isArray(e) && typeof e[0] == `number`, Cn = {
	linear: Xt,
	easeIn: vn,
	easeInOut: bn,
	easeOut: yn,
	circIn: hn,
	circInOut: _n,
	circOut: gn,
	backIn: fn,
	backInOut: pn,
	backOut: dn,
	anticipate: mn
}, wn = (e) => typeof e == `string`, Tn = (e) => {
	if (Sn(e)) {
		e.length;
		let [t, n, r, i] = e;
		return cn(t, n, r, i);
	} else if (wn(e)) return Cn[e], `${e}`, Cn[e];
	return e;
}, En = [
	`setup`,
	`read`,
	`resolveKeyframes`,
	`preUpdate`,
	`update`,
	`preRender`,
	`render`,
	`postRender`
];
function Dn(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, i = !1, a = /* @__PURE__ */ new WeakSet(), o = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	};
	function s(t) {
		a.has(t) && (c.schedule(t), e()), t(o);
	}
	let c = {
		schedule: (e, i = !1, o = !1) => {
			let s = o && r ? t : n;
			return i && a.add(e), s.add(e), e;
		},
		cancel: (e) => {
			n.delete(e), a.delete(e);
		},
		process: (e) => {
			if (o = e, r) {
				i = !0;
				return;
			}
			r = !0;
			let a = t;
			t = n, n = a, t.forEach(s), t.clear(), r = !1, i && (i = !1, c.process(e));
		}
	};
	return c;
}
var On = 40;
function kn(e, t) {
	let n = !1, r = !0, i = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, a = () => n = !0, o = En.reduce((e, t) => (e[t] = Dn(a), e), {}), { setup: s, read: c, resolveKeyframes: l, preUpdate: u, update: d, preRender: f, render: p, postRender: m } = o, h = () => {
		let a = Gt.useManualTiming, o = a ? i.timestamp : performance.now();
		n = !1, a || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, On), 1)), i.timestamp = o, i.isProcessing = !0, s.process(i), c.process(i), l.process(i), u.process(i), d.process(i), f.process(i), p.process(i), m.process(i), i.isProcessing = !1, n && t && (r = !1, e(h));
	}, g = () => {
		n = !0, r = !0, i.isProcessing || e(h);
	};
	return {
		schedule: En.reduce((e, t) => {
			let r = o[t];
			return e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < En.length; t++) o[En[t]].cancel(e);
		},
		state: i,
		steps: o
	};
}
var { schedule: R, cancel: An, state: jn, steps: Mn } = kn(typeof requestAnimationFrame < `u` ? requestAnimationFrame : Xt, !0), Nn;
function Pn() {
	Nn = void 0;
}
var Fn = {
	now: () => (Nn === void 0 && Fn.set(jn.isProcessing || Gt.useManualTiming ? jn.timestamp : performance.now()), Nn),
	set: (e) => {
		Nn = e, queueMicrotask(Pn);
	}
}, In = (e) => (t) => typeof t == `string` && t.startsWith(e), Ln = In(`--`), Rn = In(`var(--`), zn = (e) => Rn(e) ? Bn.test(e.split(`/*`)[0].trim()) : !1, Bn = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Vn(e) {
	return typeof e == `string` ? e.split(`/*`)[0].includes(`var(--`) : !1;
}
var Hn = {
	test: (e) => typeof e == `number`,
	parse: parseFloat,
	transform: (e) => e
}, Un = {
	...Hn,
	transform: (e) => Wt(0, 1, e)
}, Wn = {
	...Hn,
	default: 1
}, Gn = (e) => Math.round(e * 1e5) / 1e5, Kn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function qn(e) {
	return e == null;
}
var Jn = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Yn = (e, t) => (n) => !!(typeof n == `string` && Jn.test(n) && n.startsWith(e) || t && !qn(n) && Object.prototype.hasOwnProperty.call(n, t)), Xn = (e, t, n) => (r) => {
	if (typeof r != `string`) return r;
	let [i, a, o, s] = r.match(Kn);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, Zn = (e) => Wt(0, 255, e), Qn = {
	...Hn,
	transform: (e) => Math.round(Zn(e))
}, $n = {
	test: Yn(`rgb`, `red`),
	parse: Xn(`red`, `green`, `blue`),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => `rgba(` + Qn.transform(e) + `, ` + Qn.transform(t) + `, ` + Qn.transform(n) + `, ` + Gn(Un.transform(r)) + `)`
};
function er(e) {
	let t = ``, n = ``, r = ``, i = ``;
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	};
}
var tr = {
	test: Yn(`#`),
	parse: er,
	transform: $n.transform
}, nr = (e) => ({
	test: (t) => typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), rr = nr(`deg`), ir = nr(`%`), z = nr(`px`), ar = nr(`vh`), or = nr(`vw`), sr = {
	...ir,
	parse: (e) => ir.parse(e) / 100,
	transform: (e) => ir.transform(e * 100)
}, cr = {
	test: Yn(`hsl`, `hue`),
	parse: Xn(`hue`, `saturation`, `lightness`),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => `hsla(` + Math.round(e) + `, ` + ir.transform(Gn(t)) + `, ` + ir.transform(Gn(n)) + `, ` + Gn(Un.transform(r)) + `)`
}, lr = {
	test: (e) => $n.test(e) || tr.test(e) || cr.test(e),
	parse: (e) => $n.test(e) ? $n.parse(e) : cr.test(e) ? cr.parse(e) : tr.parse(e),
	transform: (e) => typeof e == `string` ? e : e.hasOwnProperty(`red`) ? $n.transform(e) : cr.transform(e),
	getAnimatableNone: (e) => {
		let t = lr.parse(e);
		return t.alpha = 0, lr.transform(t);
	}
}, ur = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function dr(e) {
	return isNaN(e) && typeof e == `string` && (e.match(Kn)?.length || 0) + (e.match(ur)?.length || 0) > 0;
}
var fr = `number`, pr = `color`, mr = `var`, hr = `var(`, gr = "${}", _r = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function vr(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace(_r, (e) => (lr.test(e) ? (r.color.push(a), i.push(pr), n.push(lr.parse(e))) : e.startsWith(hr) ? (r.var.push(a), i.push(mr), n.push(e)) : (r.number.push(a), i.push(fr), n.push(parseFloat(e))), ++a, gr)).split(gr),
		indexes: r,
		types: i
	};
}
function yr(e) {
	return vr(e).values;
}
function br({ split: e, types: t }) {
	let n = e.length;
	return (r) => {
		let i = ``;
		for (let a = 0; a < n; a++) if (i += e[a], r[a] !== void 0) {
			let e = t[a];
			e === fr ? i += Gn(r[a]) : e === pr ? i += lr.transform(r[a]) : i += r[a];
		}
		return i;
	};
}
function xr(e) {
	return br(vr(e));
}
var Sr = (e) => typeof e == `number` ? 0 : lr.test(e) ? lr.getAnimatableNone(e) : e, Cr = (e, t) => typeof e == `number` ? t?.trim().endsWith(`/`) ? e : 0 : Sr(e);
function wr(e) {
	let t = vr(e);
	return br(t)(t.values.map((e, n) => Cr(e, t.split[n])));
}
var Tr = {
	test: dr,
	parse: yr,
	createTransformer: xr,
	getAnimatableNone: wr
};
function Er(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Dr({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = Er(s, r, e + 1 / 3), a = Er(s, r, e), o = Er(s, r, e - 1 / 3);
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(a * 255),
		blue: Math.round(o * 255),
		alpha: r
	};
}
function Or(e, t) {
	return (n) => n > 0 ? t : e;
}
var B = (e, t, n) => e + (t - e) * n, kr = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, Ar = [
	tr,
	$n,
	cr
], jr = (e) => Ar.find((t) => t.test(e));
function Mr(e) {
	let t = jr(e);
	if (`${e}`, !t) return !1;
	let n = t.parse(e);
	return t === cr && (n = Dr(n)), n;
}
var Nr = (e, t) => {
	let n = Mr(e), r = Mr(t);
	if (!n || !r) return Or(e, t);
	let i = { ...n };
	return (e) => (i.red = kr(n.red, r.red, e), i.green = kr(n.green, r.green, e), i.blue = kr(n.blue, r.blue, e), i.alpha = B(n.alpha, r.alpha, e), $n.transform(i));
}, Pr = /* @__PURE__ */ new Set([`none`, `hidden`]);
function Fr(e, t) {
	return Pr.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function Ir(e, t) {
	return (n) => B(e, t, n);
}
function Lr(e) {
	return typeof e == `number` ? Ir : typeof e == `string` ? zn(e) ? Or : lr.test(e) ? Nr : Vr : Array.isArray(e) ? Rr : typeof e == `object` ? lr.test(e) ? Nr : zr : Or;
}
function Rr(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => Lr(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function zr(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Lr(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function Br(e, t) {
	let n = [], r = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < t.values.length; i++) {
		let a = t.types[i], o = e.indexes[a][r[a]];
		n[i] = e.values[o] ?? 0, r[a]++;
	}
	return n;
}
var Vr = (e, t) => {
	let n = Tr.createTransformer(t), r = vr(e), i = vr(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Pr.has(e) && !i.values.length || Pr.has(t) && !r.values.length ? Fr(e, t) : Zt(Rr(Br(r, i), i.values), n) : (`${e}${t}`, Or(e, t));
};
function Hr(e, t, n) {
	return typeof e == `number` && typeof t == `number` && typeof n == `number` ? B(e, t, n) : Lr(e)(e, t);
}
var Ur = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: (e = !0) => R.update(t, e),
		stop: () => An(t),
		now: () => jn.isProcessing ? jn.timestamp : Fn.now()
	};
}, Wr = (e, t, n = 10) => {
	let r = ``, i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + `, `;
	return `linear(${r.substring(0, r.length - 2)})`;
}, Gr = 2e4;
function Kr(e) {
	let t = 0, n = e.next(t);
	for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
	return t >= 2e4 ? Infinity : t;
}
function qr(e, t = 100, n) {
	let r = n({
		...e,
		keyframes: [0, t]
	}), i = Math.min(Kr(r), Gr);
	return {
		type: `keyframes`,
		ease: (e) => r.next(i * e).value / t,
		duration: tn(i)
	};
}
var Jr = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05,
	maxDamping: 1
};
function Yr(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var Xr = 12;
function Zr(e, t, n) {
	let r = n;
	for (let n = 1; n < Xr; n++) r -= e(r) / t(r);
	return r;
}
var Qr = .001;
function $r({ duration: e = Jr.duration, bounce: t = Jr.bounce, velocity: n = Jr.velocity, mass: r = Jr.mass }) {
	let i, a;
	Jr.maxDuration;
	let o = 1 - t;
	o = Wt(Jr.minDamping, Jr.maxDamping, o), e = Wt(Jr.minDuration, Jr.maxDuration, tn(e)), o < 1 ? (i = (t) => {
		let r = t * o, i = r * e, a = r - n, s = Yr(t, o), c = Math.exp(-i);
		return Qr - a / s * c;
	}, a = (t) => {
		let r = t * o * e, a = r * n + n, s = o ** 2 * t ** 2 * e, c = Math.exp(-r), l = Yr(t ** 2, o);
		return (-i(t) + Qr > 0 ? -1 : 1) * ((a - s) * c) / l;
	}) : (i = (t) => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)));
	let s = 5 / e, c = Zr(i, a, s);
	if (e = en(e), isNaN(c)) return {
		stiffness: Jr.stiffness,
		damping: Jr.damping,
		duration: e
	};
	{
		let t = c ** 2 * r;
		return {
			stiffness: t,
			damping: o * 2 * Math.sqrt(r * t),
			duration: e
		};
	}
}
var ei = [`duration`, `bounce`], ti = [
	`stiffness`,
	`damping`,
	`mass`
];
function ni(e, t) {
	return t.some((t) => e[t] !== void 0);
}
function ri(e) {
	let t = {
		velocity: Jr.velocity,
		stiffness: Jr.stiffness,
		damping: Jr.damping,
		mass: Jr.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!ni(e, ti) && ni(e, ei)) if (t.velocity = 0, e.visualDuration) {
		let n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, a = 2 * Wt(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
		t = {
			...t,
			mass: Jr.mass,
			stiffness: i,
			damping: a
		};
	} else {
		let n = $r({
			...e,
			velocity: 0
		});
		t = {
			...t,
			...n,
			mass: Jr.mass
		}, t.isResolvedFromDuration = !0;
	}
	return t;
}
function ii(e = Jr.visualDuration, t = Jr.bounce) {
	let n = typeof e == `object` ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	}, { restSpeed: r, restDelta: i } = n, a = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], s = {
		done: !1,
		value: a
	}, { stiffness: c, damping: l, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = ri({
		...n,
		velocity: -tn(n.velocity || 0)
	}), m = f || 0, h = l / (2 * Math.sqrt(c * u)), g = o - a, _ = tn(Math.sqrt(c / u)), v = Math.abs(g) < 5;
	r ||= v ? Jr.restSpeed.granular : Jr.restSpeed.default, i ||= v ? Jr.restDelta.granular : Jr.restDelta.default;
	let y, b, x, S, C, w;
	if (h < 1) x = Yr(_, h), S = (m + h * _ * g) / x, y = (e) => {
		let t = Math.exp(-h * _ * e);
		return o - t * (S * Math.sin(x * e) + g * Math.cos(x * e));
	}, C = h * _ * S + g * x, w = h * _ * g - S * x, b = (e) => Math.exp(-h * _ * e) * (C * Math.sin(x * e) + w * Math.cos(x * e));
	else if (h === 1) {
		y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
		let e = m + _ * g;
		b = (t) => Math.exp(-_ * t) * (_ * e * t - m);
	} else {
		let e = _ * Math.sqrt(h * h - 1);
		y = (t) => {
			let n = Math.exp(-h * _ * t), r = Math.min(e * t, 300);
			return o - n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r)) / e;
		};
		let t = (m + h * _ * g) / e, n = h * _ * t - g * e, r = h * _ * g - t * e;
		b = (t) => {
			let i = Math.exp(-h * _ * t), a = Math.min(e * t, 300);
			return i * (n * Math.sinh(a) + r * Math.cosh(a));
		};
	}
	let T = {
		calculatedDuration: p && d || null,
		velocity: (e) => en(b(e)),
		next: (e) => {
			if (!p && h < 1) {
				let t = Math.exp(-h * _ * e), n = Math.sin(x * e), a = Math.cos(x * e), c = o - t * (S * n + g * a), l = en(t * (C * n + w * a));
				return s.done = Math.abs(l) <= r && Math.abs(o - c) <= i, s.value = s.done ? o : c, s;
			}
			let t = y(e);
			if (p) s.done = e >= d;
			else {
				let n = en(b(e));
				s.done = Math.abs(n) <= r && Math.abs(o - t) <= i;
			}
			return s.value = s.done ? o : t, s;
		},
		toString: () => {
			let e = Math.min(Kr(T), Gr), t = Wr((t) => T.next(e * t).value, e, 30);
			return e + `ms ` + t;
		},
		toTransition: () => {}
	};
	return T;
}
ii.applyToOptions = (e) => {
	let t = qr(e, 100, ii);
	return e.ease = t.ease, e.duration = en(t.duration), e.type = `keyframes`, e;
};
var ai = 5;
function oi(e, t, n) {
	let r = Math.max(t - ai, 0);
	return nn(n - e(r), t - r);
}
function si({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => s !== void 0 && e < s || c !== void 0 && e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o === void 0 ? g : o(g);
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => _ + v(e), b = (e) => {
		let t = v(e), n = y(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : n;
	}, x, S, C = (e) => {
		p(f.value) && (x = e, S = ii({
			keyframes: [f.value, m(f.value)],
			velocity: oi(y, e, f.value),
			damping: i,
			stiffness: a,
			restDelta: l,
			restSpeed: u
		}));
	};
	return C(0), {
		calculatedDuration: null,
		next: (e) => {
			let t = !1;
			return !S && x === void 0 && (t = !0, b(e), C(e)), x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f);
		}
	};
}
function ci(e, t, n) {
	let r = [], i = n || Gt.mix || Hr, a = e.length - 1;
	for (let n = 0; n < a; n++) {
		let a = i(e[n], e[n + 1]);
		t && (a = Zt(Array.isArray(t) ? t[n] || Xt : t, a)), r.push(a);
	}
	return r;
}
function li(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	let a = e.length;
	if (t.length, a === 1) return () => t[0];
	if (a === 2 && t[0] === t[1]) return () => t[1];
	let o = e[0] === e[1];
	e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let s = ci(t, r, i), c = s.length, l = (n) => {
		if (o && n < e[0]) return t[0];
		let r = 0;
		if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
		let i = Qt(e[r], e[r + 1], n);
		return s[r](i);
	};
	return n ? (t) => l(Wt(e[0], e[a - 1], t)) : l;
}
function ui(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = Qt(0, t, r);
		e.push(B(n, 1, i));
	}
}
function di(e) {
	let t = [0];
	return ui(t, e.length - 1), t;
}
function fi(e, t) {
	return e.map((e) => e * t);
}
function pi(e, t) {
	return e.map(() => t || bn).splice(0, e.length - 1);
}
function mi({ duration: e = 300, keyframes: t, times: n, ease: r = `easeInOut` }) {
	let i = xn(r) ? r.map(Tn) : Tn(r), a = {
		done: !1,
		value: t[0]
	}, o = li(fi(n && n.length === t.length ? n : di(t), e), t, { ease: Array.isArray(i) ? i : pi(t, i) });
	return {
		calculatedDuration: e,
		next: (t) => (a.value = o(t), a.done = t >= e, a)
	};
}
var hi = (e) => e !== null;
function gi(e, { repeat: t, repeatType: n = `loop` }, r, i = 1) {
	let a = e.filter(hi), o = i < 0 || t && n !== `loop` && t % 2 == 1 ? 0 : a.length - 1;
	return !o || r === void 0 ? a[o] : r;
}
var _i = {
	decay: si,
	inertia: si,
	tween: mi,
	keyframes: mi,
	spring: ii
};
function vi(e) {
	typeof e.type == `string` && (e.type = _i[e.type]);
}
var yi = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((e) => {
			this.resolve = e;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
}, bi = (e) => e / 100, xi = class extends yi {
	constructor(e) {
		super(), this.state = `idle`, this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
			done: !1,
			value: void 0
		}, this.stop = () => {
			let { motionValue: e } = this.options;
			e && e.updatedAt !== Fn.now() && this.tick(Fn.now()), this.isStopped = !0, this.state !== `idle` && (this.teardown(), this.options.onStop?.());
		}, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
	}
	initAnimation() {
		let { options: e } = this;
		vi(e);
		let { type: t = mi, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e, { keyframes: o } = e, s = t || mi;
		s !== mi && typeof o[0] != `number` && (this.mixKeyframes = Zt(bi, Hr(o[0], o[1])), o = [0, 100]);
		let c = s({
			...e,
			keyframes: o
		});
		i === `mirror` && (this.mirroredGenerator = s({
			...e,
			keyframes: [...o].reverse(),
			velocity: -a
		})), c.calculatedDuration === null && (c.calculatedDuration = Kr(c));
		let { calculatedDuration: l } = c;
		this.calculatedDuration = l, this.resolvedDuration = l + r, this.totalDuration = this.resolvedDuration * (n + 1) - r, this.generator = c;
	}
	updateTime(e) {
		let t = Math.round(e - this.startTime) * this.playbackSpeed;
		this.holdTime === null ? this.currentTime = t : this.currentTime = this.holdTime;
	}
	tick(e, t = !1) {
		let { generator: n, totalDuration: r, mixKeyframes: i, mirroredGenerator: a, resolvedDuration: o, calculatedDuration: s } = this;
		if (this.startTime === null) return n.next(0);
		let { delay: c = 0, keyframes: l, repeat: u, repeatType: d, repeatDelay: f, type: p, onUpdate: m, finalKeyframe: h } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
		let g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), _ = this.playbackSpeed >= 0 ? g < 0 : g > r;
		this.currentTime = Math.max(g, 0), this.state === `finished` && this.holdTime === null && (this.currentTime = r);
		let v = this.currentTime, y = n;
		if (u) {
			let e = Math.min(this.currentTime, r) / o, t = Math.floor(e), n = e % 1;
			!n && e >= 1 && (n = 1), n === 1 && t--, t = Math.min(t, u + 1), t % 2 && (d === `reverse` ? (n = 1 - n, f && (n -= f / o)) : d === `mirror` && (y = a)), v = Wt(0, 1, n) * o;
		}
		let b;
		_ ? (this.delayState.value = l[0], b = this.delayState) : b = y.next(v), i && !_ && (b.value = i(b.value));
		let { done: x } = b;
		!_ && s !== null && (x = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
		let S = this.holdTime === null && (this.state === `finished` || this.state === `running` && x);
		return S && p !== si && (b.value = gi(l, this.options, h, this.speed)), m && m(b.value), S && this.finish(), b;
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
	get duration() {
		return tn(this.calculatedDuration);
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + tn(e);
	}
	get time() {
		return tn(this.currentTime);
	}
	set time(e) {
		e = en(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = `paused`, this.holdTime = e, this.tick(e));
	}
	getGeneratorVelocity() {
		let e = this.currentTime;
		if (e <= 0) return this.options.velocity || 0;
		if (this.generator.velocity) return this.generator.velocity(e);
		let t = this.generator.next(e).value;
		return oi((e) => this.generator.next(e).value, e, t);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		let t = this.playbackSpeed !== e;
		t && this.driver && this.updateTime(Fn.now()), this.playbackSpeed = e, t && this.driver && (this.time = tn(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: e = Ur, startTime: t } = this.options;
		this.driver ||= e((e) => this.tick(e)), this.options.onPlay?.();
		let n = this.driver.now();
		this.state === `finished` ? (this.updateFinished(), this.startTime = n) : this.holdTime === null ? this.startTime ||= t ?? n : this.startTime = n - this.holdTime, this.state === `finished` && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = `running`, this.driver.start();
	}
	pause() {
		this.state = `paused`, this.updateTime(Fn.now()), this.holdTime = this.currentTime;
	}
	complete() {
		this.state !== `running` && this.play(), this.state = `finished`, this.holdTime = null;
	}
	finish() {
		this.notifyFinished(), this.teardown(), this.state = `finished`, this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
	}
	teardown() {
		this.state = `idle`, this.stopDriver(), this.startTime = this.holdTime = null;
	}
	stopDriver() {
		this.driver &&= (this.driver.stop(), void 0);
	}
	sample(e) {
		return this.startTime = 0, this.tick(e, !0);
	}
	attachTimeline(e) {
		return this.options.allowFlatten && (this.options.type = `keyframes`, this.options.ease = `linear`, this.initAnimation()), this.driver?.stop(), e.observe(this);
	}
};
function Si(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
var Ci = (e) => e * 180 / Math.PI, wi = (e) => Ei(Ci(Math.atan2(e[1], e[0]))), Ti = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
	rotate: wi,
	rotateZ: wi,
	skewX: (e) => Ci(Math.atan(e[1])),
	skewY: (e) => Ci(Math.atan(e[2])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, Ei = (e) => (e %= 360, e < 0 && (e += 360), e), Di = wi, Oi = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), ki = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), Ai = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX: Oi,
	scaleY: ki,
	scale: (e) => (Oi(e) + ki(e)) / 2,
	rotateX: (e) => Ei(Ci(Math.atan2(e[6], e[5]))),
	rotateY: (e) => Ei(Ci(Math.atan2(-e[2], e[0]))),
	rotateZ: Di,
	rotate: Di,
	skewX: (e) => Ci(Math.atan(e[4])),
	skewY: (e) => Ci(Math.atan(e[1])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function ji(e) {
	return +!!e.includes(`scale`);
}
function Mi(e, t) {
	if (!e || e === `none`) return ji(t);
	let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), r, i;
	if (n) r = Ai, i = n;
	else {
		let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		r = Ti, i = t;
	}
	if (!i) return ji(t);
	let a = r[t], o = i[1].split(`,`).map(Ni);
	return typeof a == `function` ? a(o) : o[a];
}
var V = (e, t) => {
	let { transform: n = `none` } = getComputedStyle(e);
	return Mi(n, t);
};
function Ni(e) {
	return parseFloat(e.trim());
}
var Pi = [
	`transformPerspective`,
	`x`,
	`y`,
	`z`,
	`translateX`,
	`translateY`,
	`translateZ`,
	`scale`,
	`scaleX`,
	`scaleY`,
	`rotate`,
	`rotateX`,
	`rotateY`,
	`rotateZ`,
	`skew`,
	`skewX`,
	`skewY`
], Fi = /* @__PURE__ */ new Set([...Pi, `pathRotation`]), Ii = (e) => e === Hn || e === z, Li = /* @__PURE__ */ new Set([
	`x`,
	`y`,
	`z`
]), Ri = Pi.filter((e) => !Li.has(e));
function zi(e) {
	let t = [];
	return Ri.forEach((n) => {
		let r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith(`scale`)));
	}), t;
}
var Bi = {
	width: ({ x: e }, { paddingLeft: t = `0`, paddingRight: n = `0`, boxSizing: r }) => {
		let i = e.max - e.min;
		return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n);
	},
	height: ({ y: e }, { paddingTop: t = `0`, paddingBottom: n = `0`, boxSizing: r }) => {
		let i = e.max - e.min;
		return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n);
	},
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: (e, { transform: t }) => Mi(t, `x`),
	y: (e, { transform: t }) => Mi(t, `y`)
};
Bi.translateX = Bi.x, Bi.translateY = Bi.y;
var Vi = /* @__PURE__ */ new Set(), Hi = !1, Ui = !1, Wi = !1;
function Gi() {
	if (Ui) {
		let e = Array.from(Vi).filter((e) => e.needsMeasurement), t = new Set(e.map((e) => e.element)), n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = zi(e);
			t.length && (n.set(e, t), e.render());
		}), e.forEach((e) => e.measureInitialState()), t.forEach((e) => {
			e.render();
			let t = n.get(e);
			t && t.forEach(([t, n]) => {
				e.getValue(t)?.set(n);
			});
		}), e.forEach((e) => e.measureEndState()), e.forEach((e) => {
			e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
		});
	}
	Ui = !1, Hi = !1, Vi.forEach((e) => e.complete(Wi)), Vi.clear();
}
function Ki() {
	Vi.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (Ui = !0);
	});
}
function qi() {
	Wi = !0, Ki(), Gi(), Wi = !1;
}
var Ji = class {
	constructor(e, t, n, r, i, a = !1) {
		this.state = `pending`, this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.state = `scheduled`, this.isAsync ? (Vi.add(this), Hi || (Hi = !0, R.read(Ki), R.resolveKeyframes(Gi))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
		if (e[0] === null) {
			let i = r?.get(), a = e[e.length - 1];
			if (i !== void 0) e[0] = i;
			else if (n && t) {
				let r = n.readValue(t, a);
				r != null && (e[0] = r);
			}
			e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]);
		}
		Si(e);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		this.state = `complete`, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), Vi.delete(this);
	}
	cancel() {
		this.state === `scheduled` && (Vi.delete(this), this.state = `pending`);
	}
	resume() {
		this.state === `pending` && this.scheduleResolve();
	}
}, Yi = (e) => e.startsWith(`--`);
function Xi(e, t, n) {
	Yi(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
var Zi = {};
function Qi(e, t) {
	let n = Yt(e);
	return () => Zi[t] ?? n();
}
var $i = Qi(() => window.ScrollTimeline !== void 0, `scrollTimeline`), ea = Qi(() => {
	try {
		document.createElement(`div`).animate({ opacity: 0 }, { easing: `linear(0, 1)` });
	} catch {
		return !1;
	}
	return !0;
}, `linearEasing`), ta = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, na = {
	linear: `linear`,
	ease: `ease`,
	easeIn: `ease-in`,
	easeOut: `ease-out`,
	easeInOut: `ease-in-out`,
	circIn: ta([
		0,
		.65,
		.55,
		1
	]),
	circOut: ta([
		.55,
		0,
		1,
		.45
	]),
	backIn: ta([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: ta([
		.33,
		1.53,
		.69,
		.99
	])
};
function ra(e, t) {
	if (e) return typeof e == `function` ? ea() ? Wr(e, t) : `ease-out` : Sn(e) ? ta(e) : Array.isArray(e) ? e.map((e) => ra(e, t) || na.easeOut) : na[e];
}
function ia(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = `loop`, ease: s = `easeOut`, times: c } = {}, l = void 0) {
	let u = { [t]: n };
	c && (u.offset = c);
	let d = ra(s, i);
	Array.isArray(d) && (u.easing = d);
	let f = {
		delay: r,
		duration: i,
		easing: Array.isArray(d) ? `linear` : d,
		fill: `both`,
		iterations: a + 1,
		direction: o === `reverse` ? `alternate` : `normal`
	};
	return l && (f.pseudoElement = l), e.animate(u, f);
}
function aa(e) {
	return typeof e == `function` && `applyToOptions` in e;
}
function oa({ type: e, ...t }) {
	return aa(e) && ea() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= `easeOut`, t);
}
var sa = class extends yi {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: o, onComplete: s } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e, e.type;
		let c = oa(e);
		this.animation = ia(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !i) {
				let e = gi(r, this.options, o, this.speed);
				this.updateMotionValue && this.updateMotionValue(e), Xi(t, n, e), this.animation.cancel();
			}
			s?.(), this.notifyFinished();
		};
	}
	play() {
		this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === `finished` && this.updateFinished());
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.finish?.();
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = !0;
		let { state: e } = this;
		e === `idle` || e === `finished` || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
	}
	commitStyles() {
		let e = this.options?.element;
		!this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
	}
	get duration() {
		let e = this.animation.effect?.getComputedTiming?.().duration || 0;
		return tn(Number(e));
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + tn(e);
	}
	get time() {
		return tn(Number(this.animation.currentTime) || 0);
	}
	set time(e) {
		let t = this.finishedTime !== null;
		this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = en(e), t && this.animation.pause();
	}
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(e) {
		e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
	}
	get state() {
		return this.finishedTime === null ? this.animation.playState : `finished`;
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(e) {
		this.manualStartTime = this.animation.startTime = e;
	}
	attachTimeline({ timeline: e, rangeStart: t, rangeEnd: n, observe: r }) {
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: `linear` }), this.animation.onfinish = null, e && $i() ? (this.animation.timeline = e, t && (this.animation.rangeStart = t), n && (this.animation.rangeEnd = n), Xt) : r(this);
	}
}, ca = {
	anticipate: mn,
	backInOut: pn,
	circInOut: _n
};
function la(e) {
	return e in ca;
}
function ua(e) {
	typeof e.ease == `string` && la(e.ease) && (e.ease = ca[e.ease]);
}
var da = 10, fa = class extends sa {
	constructor(e) {
		ua(e), vi(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
	}
	updateMotionValue(e) {
		let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options;
		if (!t) return;
		if (e !== void 0) {
			t.set(e);
			return;
		}
		let o = new xi({
			...a,
			autoplay: !1
		}), s = Math.max(da, Fn.now() - this.startTime), c = Wt(0, da, s - da), l = o.sample(s).value, { name: u } = this.options;
		i && u && Xi(i, u, l), t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c), o.stop();
	}
}, pa = (e, t) => t === `zIndex` ? !1 : !!(typeof e == `number` || Array.isArray(e) || typeof e == `string` && (Tr.test(e) || e === `0`) && !e.startsWith(`url(`));
function ma(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function ha(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === `display` || t === `visibility`) return !0;
	let a = e[e.length - 1], o = pa(i, t), s = pa(a, t);
	return `${t}${i}${a}${o ? a : i}`, !o || !s ? !1 : ma(e) || (n === `spring` || aa(n)) && r;
}
function ga(e) {
	e.duration = 0, e.type = `keyframes`;
}
var _a = /* @__PURE__ */ new Set([
	`opacity`,
	`clipPath`,
	`filter`,
	`transform`
]), va = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function ya(e) {
	for (let t = 0; t < e.length; t++) if (typeof e[t] == `string` && va.test(e[t])) return !0;
	return !1;
}
var ba = /* @__PURE__ */ new Set([
	`color`,
	`backgroundColor`,
	`outlineColor`,
	`fill`,
	`stroke`,
	`borderColor`,
	`borderTopColor`,
	`borderRightColor`,
	`borderBottomColor`,
	`borderLeftColor`
]), xa = Yt(() => Object.hasOwnProperty.call(Element.prototype, `animate`));
function Sa(e) {
	let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o, keyframes: s } = e;
	if (!(t?.owner?.current instanceof HTMLElement)) return !1;
	let { onUpdate: c, transformTemplate: l } = t.owner.getProps();
	return xa() && n && (_a.has(n) || ba.has(n) && ya(s)) && (n !== `transform` || !l) && !c && !r && i !== `mirror` && a !== 0 && o !== `inertia`;
}
var Ca = 40, wa = class extends yi {
	constructor({ autoplay: e = !0, delay: t = 0, type: n = `keyframes`, repeat: r = 0, repeatDelay: i = 0, repeatType: a = `loop`, keyframes: o, name: s, motionValue: c, element: l, ...u }) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = Fn.now();
		let d = {
			autoplay: e,
			delay: t,
			type: n,
			repeat: r,
			repeatDelay: i,
			repeatType: a,
			name: s,
			motionValue: c,
			element: l,
			...u
		}, f = l?.KeyframeResolver || Ji;
		this.keyframeResolver = new f(o, (e, t, n) => this.onKeyframesResolved(e, t, d, !n), s, c, l), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, t, n, r) {
		this.keyframeResolver = void 0;
		let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l } = n;
		this.resolvedAt = Fn.now();
		let u = !0;
		ha(e, i, a, o) || (u = !1, (Gt.instantAnimations || !s) && l?.(gi(e, n, t)), e[0] = e[e.length - 1], ga(n), n.repeat = 0);
		let d = {
			startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > Ca ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: t,
			...n,
			keyframes: e
		}, f = u && !c && Sa(d), p = d.motionValue?.owner?.current, m;
		if (f) try {
			m = new fa({
				...d,
				element: p
			});
		} catch {
			m = new xi(d);
		}
		else m = new xi(d);
		m.finished.then(() => {
			this.notifyFinished();
		}).catch(Xt), this.pendingTimeline &&= (this.stopTimeline = m.attachTimeline(this.pendingTimeline), void 0), this._animation = m;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
	get animation() {
		return this._animation || (this.keyframeResolver?.resume(), qi()), this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get iterationDuration() {
		return this.animation.iterationDuration;
	}
	get time() {
		return this.animation.time;
	}
	set time(e) {
		this.animation.time = e;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(e) {
		this.animation.speed = e;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(e) {
		return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
	}
};
function Ta(e, t, n, r = 0, i = 1) {
	let a = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t), o = e.size, s = (o - 1) * r;
	return typeof n == `function` ? n(a, o) : i === 1 ? a * r : s - a * r;
}
var Ea = 30, Da = (e) => !isNaN(parseFloat(e)), Oa = { current: void 0 }, ka = class {
	constructor(e, t = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e) => {
			let t = Fn.now();
			if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let e of this.dependents) e.dirty();
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = Fn.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Da(this.current));
	}
	setPrevFrameValue(e = this.current) {
		this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(e) {
		return this.on(`change`, e);
	}
	on(e, t) {
		this.events[e] || (this.events[e] = new $t());
		let n = this.events[e].add(t);
		return e === `change` ? () => {
			n(), R.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : n;
	}
	clearListeners() {
		for (let e in this.events) this.events[e].clear();
	}
	attach(e, t) {
		this.passiveEffect = e, this.stopPassiveEffect = t;
	}
	set(e) {
		this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
	}
	setWithVelocity(e, t, n) {
		this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n;
	}
	jump(e, t = !0) {
		this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(e) {
		this.dependents ||= /* @__PURE__ */ new Set(), this.dependents.add(e);
	}
	removeDependent(e) {
		this.dependents && this.dependents.delete(e);
	}
	get() {
		return Oa.current && Oa.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = Fn.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Ea) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, Ea);
		return nn(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
	}
	start(e) {
		return this.stop(), new Promise((t) => {
			this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify();
		}).then(() => {
			this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
		});
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
};
function Aa(e, t) {
	return new ka(e, t);
}
function ja(e, t) {
	if (e?.inherit && t) {
		let { inherit: n, ...r } = e;
		return {
			...t,
			...r
		};
	}
	return e;
}
function Ma(e, t) {
	let n = e?.[t] ?? e?.default ?? e;
	return n === e ? n : ja(n, e);
}
var Na = {
	type: `spring`,
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, Pa = (e) => ({
	type: `spring`,
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), Fa = {
	type: `keyframes`,
	duration: .8
}, Ia = {
	type: `keyframes`,
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, La = (e, { keyframes: t }) => t.length > 2 ? Fa : Fi.has(e) ? e.startsWith(`scale`) ? Pa(t[1]) : Na : Ia, Ra = /* @__PURE__ */ new Set([
	`when`,
	`delay`,
	`delayChildren`,
	`staggerChildren`,
	`staggerDirection`,
	`repeat`,
	`repeatType`,
	`repeatDelay`,
	`from`,
	`elapsed`
]);
function za(e) {
	for (let t in e) if (!Ra.has(t)) return !0;
	return !1;
}
var Ba = (e, t, n, r = {}, i, a) => (o) => {
	let s = Ma(r, e) || {}, c = s.delay || r.delay || 0, { elapsed: l = 0 } = r;
	l -= en(c);
	let u = {
		keyframes: Array.isArray(n) ? n : [null, n],
		ease: `easeOut`,
		velocity: t.getVelocity(),
		...s,
		delay: -l,
		onUpdate: (e) => {
			t.set(e), s.onUpdate && s.onUpdate(e);
		},
		onComplete: () => {
			o(), s.onComplete && s.onComplete();
		},
		name: e,
		motionValue: t,
		element: a ? void 0 : i
	};
	za(s) || Object.assign(u, La(e, u)), u.duration &&= en(u.duration), u.repeatDelay &&= en(u.repeatDelay), u.from !== void 0 && (u.keyframes[0] = u.from);
	let d = !1;
	if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (ga(u), u.delay === 0 && (d = !0)), (Gt.instantAnimations || Gt.skipAnimations || i?.shouldSkipAnimations || s.skipAnimations) && (d = !0, ga(u), u.delay = 0), u.allowFlatten = !s.type && !s.ease, d && !a && t.get() !== void 0) {
		let e = gi(u.keyframes, s);
		if (e !== void 0) {
			R.update(() => {
				u.onUpdate(e), u.onComplete();
			});
			return;
		}
	}
	return s.isSync ? new xi(u) : new wa(u);
}, Va = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Ha(e) {
	let t = Va.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
function Ua(e, t, n = 1) {
	`${e}`;
	let [r, i] = Ha(e);
	if (!r) return;
	let a = window.getComputedStyle(t).getPropertyValue(r);
	if (a) {
		let e = a.trim();
		return Kt(e) ? parseFloat(e) : e;
	}
	return zn(i) ? Ua(i, t, n + 1) : i;
}
function Wa(e) {
	let t = [{}, {}];
	return e?.values.forEach((e, n) => {
		t[0][n] = e.get(), t[1][n] = e.getVelocity();
	}), t;
}
function Ga(e, t, n, r) {
	if (typeof t == `function`) {
		let [i, a] = Wa(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	if (typeof t == `string` && (t = e.variants && e.variants[t]), typeof t == `function`) {
		let [i, a] = Wa(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	return t;
}
function Ka(e, t, n) {
	let r = e.getProps();
	return Ga(r, t, n === void 0 ? r.custom : n, e);
}
var qa = /* @__PURE__ */ new Set([
	`width`,
	`height`,
	`top`,
	`left`,
	`right`,
	`bottom`,
	...Pi
]), Ja = (e) => Array.isArray(e);
function Ya(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Aa(n));
}
function Xa(e) {
	return Ja(e) ? e[e.length - 1] || 0 : e;
}
function Za(e, t) {
	let { transitionEnd: n = {}, transition: r = {}, ...i } = Ka(e, t) || {};
	i = {
		...i,
		...n
	};
	for (let t in i) Ya(e, t, Xa(i[t]));
}
var Qa = (e) => !!(e && e.getVelocity);
function $a(e) {
	return !!(Qa(e) && e.add);
}
function eo(e, t) {
	let n = e.getValue(`willChange`);
	if ($a(n)) return n.add(t);
	if (!n && Gt.WillChange) {
		let n = new Gt.WillChange(`auto`);
		e.addValue(`willChange`, n), n.add(t);
	}
}
function to(e) {
	return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var no = `data-` + to(`framerAppearId`);
function ro(e) {
	return e.props[no];
}
function io({ protectedKeys: e, needsAnimating: t }, n) {
	let r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r;
}
function ao(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let { transition: a, transitionEnd: o, ...s } = t, c = e.getDefaultTransition();
	a = a ? ja(a, c) : c;
	let l = a?.reduceMotion, u = a?.skipAnimations;
	r && (a = r);
	let d = [], f = i && e.animationState && e.animationState.getState()[i], p = a?.path;
	p && p.animateVisualElement(e, s, a, n, d);
	for (let t in s) {
		let r = e.getValue(t, e.latestValues[t] ?? null), i = s[t];
		if (i === void 0 || f && io(f, t)) continue;
		let o = {
			delay: n,
			...Ma(a || {}, t)
		};
		u && (o.skipAnimations = !0);
		let c = r.get();
		if (c !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
			R.update(() => r.set(i));
			continue;
		}
		let p = !1;
		if (window.MotionHandoffAnimation) {
			let n = ro(e);
			if (n) {
				let e = window.MotionHandoffAnimation(n, t, R);
				e !== null && (o.startTime = e, p = !0);
			}
		}
		eo(e, t);
		let m = l ?? e.shouldReduceMotion;
		r.start(Ba(t, r, i, m && qa.has(t) ? { type: !1 } : o, e, p));
		let h = r.animation;
		h && d.push(h);
	}
	if (o) {
		let t = () => R.update(() => {
			o && Za(e, o);
		});
		d.length ? Promise.all(d).then(t) : t();
	}
	return d;
}
function oo(e, t, n = {}) {
	let r = Ka(e, t, n.type === `exit` ? e.presenceContext?.custom : void 0), { transition: i = e.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	let a = r ? () => Promise.all(ao(e, r, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (r = 0) => {
		let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i;
		return so(e, t, r, a, o, s, n);
	} : () => Promise.resolve(), { when: s } = i;
	if (s) {
		let [e, t] = s === `beforeChildren` ? [a, o] : [o, a];
		return e().then(() => t());
	} else return Promise.all([a(), o(n.delay)]);
}
function so(e, t, n = 0, r = 0, i = 0, a = 1, o) {
	let s = [];
	for (let c of e.variantChildren) c.notify(`AnimationStart`, t), s.push(oo(c, t, {
		...o,
		delay: n + (typeof r == `function` ? 0 : r) + Ta(e.variantChildren, c, r, i, a)
	}).then(() => c.notify(`AnimationComplete`, t)));
	return Promise.all(s);
}
function co(e, t, n = {}) {
	e.notify(`AnimationStart`, t);
	let r;
	if (Array.isArray(t)) {
		let i = t.map((t) => oo(e, t, n));
		r = Promise.all(i);
	} else if (typeof t == `string`) r = oo(e, t, n);
	else {
		let i = typeof t == `function` ? Ka(e, t, n.custom) : t;
		r = Promise.all(ao(e, i, n));
	}
	return r.then(() => {
		e.notify(`AnimationComplete`, t);
	});
}
var lo = {
	test: (e) => e === `auto`,
	parse: (e) => e
}, uo = (e) => (t) => t.test(e), H = [
	Hn,
	z,
	ir,
	rr,
	or,
	ar,
	lo
], U = (e) => H.find(uo(e));
function fo(e) {
	return typeof e == `number` ? e === 0 : e === null ? !0 : e === `none` || e === `0` || Jt(e);
}
var po = /* @__PURE__ */ new Set([
	`brightness`,
	`contrast`,
	`saturate`,
	`opacity`
]);
function mo(e) {
	let [t, n] = e.slice(0, -1).split(`(`);
	if (t === `drop-shadow`) return e;
	let [r] = n.match(Kn) || [];
	if (!r) return e;
	let i = n.replace(r, ``), a = +!!po.has(t);
	return r !== n && (a *= 100), t + `(` + a + i + `)`;
}
var ho = /\b([a-z-]*)\(.*?\)/gu, go = {
	...Tr,
	getAnimatableNone: (e) => {
		let t = e.match(ho);
		return t ? t.map(mo).join(` `) : e;
	}
}, _o = {
	...Tr,
	getAnimatableNone: (e) => {
		let t = Tr.parse(e);
		return Tr.createTransformer(e)(t.map((e) => typeof e == `number` ? 0 : typeof e == `object` ? {
			...e,
			alpha: 1
		} : e));
	}
}, vo = {
	...Hn,
	transform: Math.round
}, yo = {
	borderWidth: z,
	borderTopWidth: z,
	borderRightWidth: z,
	borderBottomWidth: z,
	borderLeftWidth: z,
	borderRadius: z,
	borderTopLeftRadius: z,
	borderTopRightRadius: z,
	borderBottomRightRadius: z,
	borderBottomLeftRadius: z,
	width: z,
	maxWidth: z,
	height: z,
	maxHeight: z,
	top: z,
	right: z,
	bottom: z,
	left: z,
	inset: z,
	insetBlock: z,
	insetBlockStart: z,
	insetBlockEnd: z,
	insetInline: z,
	insetInlineStart: z,
	insetInlineEnd: z,
	padding: z,
	paddingTop: z,
	paddingRight: z,
	paddingBottom: z,
	paddingLeft: z,
	paddingBlock: z,
	paddingBlockStart: z,
	paddingBlockEnd: z,
	paddingInline: z,
	paddingInlineStart: z,
	paddingInlineEnd: z,
	margin: z,
	marginTop: z,
	marginRight: z,
	marginBottom: z,
	marginLeft: z,
	marginBlock: z,
	marginBlockStart: z,
	marginBlockEnd: z,
	marginInline: z,
	marginInlineStart: z,
	marginInlineEnd: z,
	fontSize: z,
	backgroundPositionX: z,
	backgroundPositionY: z,
	rotate: rr,
	pathRotation: rr,
	rotateX: rr,
	rotateY: rr,
	rotateZ: rr,
	scale: Wn,
	scaleX: Wn,
	scaleY: Wn,
	scaleZ: Wn,
	skew: rr,
	skewX: rr,
	skewY: rr,
	distance: z,
	translateX: z,
	translateY: z,
	translateZ: z,
	x: z,
	y: z,
	z,
	perspective: z,
	transformPerspective: z,
	opacity: Un,
	originX: sr,
	originY: sr,
	originZ: z,
	zIndex: vo,
	fillOpacity: Un,
	strokeOpacity: Un,
	numOctaves: vo
}, bo = {
	...yo,
	color: lr,
	backgroundColor: lr,
	outlineColor: lr,
	fill: lr,
	stroke: lr,
	borderColor: lr,
	borderTopColor: lr,
	borderRightColor: lr,
	borderBottomColor: lr,
	borderLeftColor: lr,
	filter: go,
	WebkitFilter: go,
	mask: _o,
	WebkitMask: _o
}, xo = (e) => bo[e], So = /* @__PURE__ */ new Set([go, _o]);
function Co(e, t) {
	let n = xo(e);
	return So.has(n) || (n = Tr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
var wo = /* @__PURE__ */ new Set([
	`auto`,
	`none`,
	`0`
]);
function To(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == `string` && !wo.has(t) && vr(t).values.length && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] = Co(n, i);
}
var Eo = class extends Ji {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: t, name: n } = this;
		if (!t || !t.current) return;
		super.readKeyframes();
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == `string` && (r = r.trim(), zn(r))) {
				let i = Ua(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !qa.has(n) || e.length !== 2) return;
		let [r, i] = e, a = U(r), o = U(i);
		if (Vn(r) !== Vn(i) && Bi[n]) {
			this.needsMeasurement = !0;
			return;
		}
		if (a !== o) if (Ii(a) && Ii(o)) for (let t = 0; t < e.length; t++) {
			let n = e[t];
			typeof n == `string` && (e[t] = parseFloat(n));
		}
		else Bi[n] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) (e[t] === null || fo(e[t])) && n.push(t);
		n.length && To(e, n, t);
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e || !e.current) return;
		n === `height` && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Bi[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && e.getValue(n, r).jump(r, !1);
	}
	measureEndState() {
		let { element: e, name: t, unresolvedKeyframes: n } = this;
		if (!e || !e.current) return;
		let r = e.getValue(t);
		r && r.jump(this.measuredOrigin, !1);
		let i = n.length - 1, a = n[i];
		n[i] = Bi[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
			e.getValue(t).set(n);
		}), this.resolveNoneKeyframes();
	}
}, Do = [
	`borderTopLeftRadius`,
	`borderTopRightRadius`,
	`borderBottomRightRadius`,
	`borderBottomLeftRadius`
];
function Oo(e, t, n) {
	if (e == null) return [];
	if (e instanceof EventTarget) return [e];
	if (typeof e == `string`) {
		let r = document;
		t && (r = t.current);
		let i = n?.[e] ?? r.querySelectorAll(e);
		return i ? Array.from(i) : [];
	}
	return Array.from(e).filter((e) => e != null);
}
var ko = (e, t) => t && typeof e == `number` ? t.transform(e) : e;
function Ao(e) {
	return qt(e) && `offsetHeight` in e && !(`ownerSVGElement` in e);
}
var { schedule: jo, cancel: Mo } = kn(queueMicrotask, !1), No = {
	x: !1,
	y: !1
};
function Po() {
	return No.x || No.y;
}
function Fo(e) {
	return e === `x` || e === `y` ? No[e] ? null : (No[e] = !0, () => {
		No[e] = !1;
	}) : No.x || No.y ? null : (No.x = No.y = !0, () => {
		No.x = No.y = !1;
	});
}
function Io(e, t) {
	let n = Oo(e), r = new AbortController();
	return [
		n,
		{
			passive: !0,
			...t,
			signal: r.signal
		},
		() => r.abort()
	];
}
function Lo(e) {
	return !(e.pointerType === `touch` || Po());
}
function Ro(e, t, n = {}) {
	let [r, i, a] = Io(e, n);
	return r.forEach((e) => {
		let n = !1, r = !1, a, o = () => {
			e.removeEventListener(`pointerleave`, u);
		}, s = (e) => {
			a &&= (a(e), void 0), o();
		}, c = (e) => {
			n = !1, window.removeEventListener(`pointerup`, c), window.removeEventListener(`pointercancel`, c), r && (r = !1, s(e));
		}, l = () => {
			n = !0, window.addEventListener(`pointerup`, c, i), window.addEventListener(`pointercancel`, c, i);
		}, u = (e) => {
			if (e.pointerType !== `touch`) {
				if (n) {
					r = !0;
					return;
				}
				s(e);
			}
		};
		e.addEventListener(`pointerenter`, (n) => {
			if (!Lo(n)) return;
			r = !1;
			let o = t(e, n);
			typeof o == `function` && (a = o, e.addEventListener(`pointerleave`, u, i));
		}, i), e.addEventListener(`pointerdown`, l, i);
	}), a;
}
var zo = (e, t) => t ? e === t ? !0 : zo(e, t.parentElement) : !1, Bo = (e) => e.pointerType === `mouse` ? typeof e.button != `number` || e.button <= 0 : e.isPrimary !== !1, Vo = /* @__PURE__ */ new Set([
	`BUTTON`,
	`INPUT`,
	`SELECT`,
	`TEXTAREA`,
	`A`
]);
function Ho(e) {
	return Vo.has(e.tagName) || e.isContentEditable === !0;
}
var Uo = /* @__PURE__ */ new Set([
	`INPUT`,
	`SELECT`,
	`TEXTAREA`
]);
function Wo(e) {
	return Uo.has(e.tagName) || e.isContentEditable === !0;
}
var Go = /* @__PURE__ */ new WeakSet();
function Ko(e) {
	return (t) => {
		t.key === `Enter` && e(t);
	};
}
function qo(e, t) {
	e.dispatchEvent(new PointerEvent(`pointer` + t, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var Jo = (e, t) => {
	let n = e.currentTarget;
	if (!n) return;
	let r = Ko(() => {
		if (Go.has(n)) return;
		qo(n, `down`);
		let e = Ko(() => {
			qo(n, `up`);
		});
		n.addEventListener(`keyup`, e, t), n.addEventListener(`blur`, () => qo(n, `cancel`), t);
	});
	n.addEventListener(`keydown`, r, t), n.addEventListener(`blur`, () => n.removeEventListener(`keydown`, r), t);
};
function Yo(e) {
	return Bo(e) && !Po();
}
var Xo = /* @__PURE__ */ new WeakSet();
function Zo(e, t, n = {}) {
	let [r, i, a] = Io(e, n), o = (e) => {
		let r = e.currentTarget;
		if (!Yo(e) || Xo.has(e)) return;
		Go.add(r), n.stopPropagation && Xo.add(e);
		let a = t(r, e), o = {
			...i,
			capture: !0
		}, s = (e, t) => {
			window.removeEventListener(`pointerup`, c, o), window.removeEventListener(`pointercancel`, l, o), Go.has(r) && Go.delete(r), Yo(e) && typeof a == `function` && a(e, { success: t });
		}, c = (e) => {
			s(e, r === window || r === document || n.useGlobalTarget || zo(r, e.target));
		}, l = (e) => {
			s(e, !1);
		};
		window.addEventListener(`pointerup`, c, o), window.addEventListener(`pointercancel`, l, o);
	};
	return r.forEach((e) => {
		(n.useGlobalTarget ? window : e).addEventListener(`pointerdown`, o, i), Ao(e) && (e.addEventListener(`focus`, (e) => Jo(e, i)), !Ho(e) && !e.hasAttribute(`tabindex`) && (e.tabIndex = 0));
	}), a;
}
function Qo(e) {
	return qt(e) && `ownerSVGElement` in e;
}
var $o = /* @__PURE__ */ new WeakMap(), es, ts = (e, t, n) => (r, i) => i && i[0] ? i[0][e + `Size`] : Qo(r) && `getBBox` in r ? r.getBBox()[t] : r[n], ns = ts(`inline`, `width`, `offsetWidth`), rs = ts(`block`, `height`, `offsetHeight`);
function is({ target: e, borderBoxSize: t }) {
	$o.get(e)?.forEach((n) => {
		n(e, {
			get width() {
				return ns(e, t);
			},
			get height() {
				return rs(e, t);
			}
		});
	});
}
function as(e) {
	e.forEach(is);
}
function os() {
	typeof ResizeObserver > `u` || (es = new ResizeObserver(as));
}
function ss(e, t) {
	es || os();
	let n = Oo(e);
	return n.forEach((e) => {
		let n = $o.get(e);
		n || (n = /* @__PURE__ */ new Set(), $o.set(e, n)), n.add(t), es?.observe(e);
	}), () => {
		n.forEach((e) => {
			let n = $o.get(e);
			n?.delete(t), n?.size || es?.unobserve(e);
		});
	};
}
var cs = /* @__PURE__ */ new Set(), ls;
function us() {
	ls = () => {
		let e = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			}
		};
		cs.forEach((t) => t(e));
	}, window.addEventListener(`resize`, ls);
}
function ds(e) {
	return cs.add(e), ls || us(), () => {
		cs.delete(e), !cs.size && typeof ls == `function` && (window.removeEventListener(`resize`, ls), ls = void 0);
	};
}
function fs(e, t) {
	return typeof e == `function` ? ds(e) : ss(e, t);
}
var ps = {
	value: null,
	addProjectionMetrics: null
};
function ms(e) {
	return Qo(e) && e.tagName === `svg`;
}
var hs = [
	...H,
	lr,
	Tr
], gs = (e) => hs.find(uo(e)), _s = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
}), vs = () => ({
	x: _s(),
	y: _s()
}), ys = () => ({
	min: 0,
	max: 0
}), bs = () => ({
	x: ys(),
	y: ys()
}), xs = /* @__PURE__ */ new WeakMap();
function Ss(e) {
	return typeof e == `object` && !!e && typeof e.start == `function`;
}
function Cs(e) {
	return typeof e == `string` || Array.isArray(e);
}
var ws = [
	`animate`,
	`whileInView`,
	`whileFocus`,
	`whileHover`,
	`whileTap`,
	`whileDrag`,
	`exit`
], Ts = [`initial`, ...ws];
function Es(e) {
	return Ss(e.animate) || Ts.some((t) => Cs(e[t]));
}
function Ds(e) {
	return !!(Es(e) || e.variants);
}
function Os(e, t, n) {
	for (let r in t) {
		let i = t[r], a = n[r];
		if (Qa(i)) e.addValue(r, i);
		else if (Qa(a)) e.addValue(r, Aa(i, { owner: e }));
		else if (a !== i) if (e.hasValue(r)) {
			let t = e.getValue(r);
			t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
		} else {
			let t = e.getStaticValue(r);
			e.addValue(r, Aa(t === void 0 ? i : t, { owner: e }));
		}
	}
	for (let r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
var ks = { current: null }, As = { current: !1 }, js = typeof window < `u`;
function Ms() {
	if (As.current = !0, js) if (window.matchMedia) {
		let e = window.matchMedia(`(prefers-reduced-motion)`), t = () => ks.current = e.matches;
		e.addEventListener(`change`, t), t();
	} else ks.current = !1;
}
var Ns = [
	`AnimationStart`,
	`AnimationComplete`,
	`Update`,
	`BeforeLayoutMeasure`,
	`LayoutMeasure`,
	`LayoutAnimationStart`,
	`LayoutAnimationComplete`
], Ps = {};
function Fs(e) {
	Ps = e;
}
function Is() {
	return Ps;
}
var Ls = class {
	scrapeMotionValuesFromProps(e, t, n) {
		return {};
	}
	constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, skipAnimations: i, blockInitialAnimation: a, visualState: o }, s = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Ji, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify(`Update`, this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let e = Fn.now();
			this.renderScheduledAt < e && (this.renderScheduledAt = e, R.render(this.render, !1, !0));
		};
		let { latestValues: c, renderState: l } = o;
		this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = t.initial ? { ...c } : {}, this.renderState = l, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.skipAnimationsConfig = i, this.options = s, this.blockInitialAnimation = !!a, this.isControllingVariants = Es(t), this.isVariantNode = Ds(t), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
		let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
		for (let e in d) {
			let t = d[e];
			c[e] !== void 0 && Qa(t) && t.set(c[e]);
		}
	}
	mount(e) {
		if (this.hasBeenMounted) for (let e in this.initialValues) this.values.get(e)?.jump(this.initialValues[e]), this.latestValues[e] = this.initialValues[e];
		this.current = e, xs.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), this.reducedMotionConfig === `never` ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === `always` ? this.shouldReduceMotion = !0 : (As.current || Ms(), this.shouldReduceMotion = ks.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
	}
	unmount() {
		this.projection && this.projection.unmount(), An(this.notifyUpdate), An(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
		for (let e in this.events) this.events[e].clear();
		for (let e in this.features) {
			let t = this.features[e];
			t && (t.unmount(), t.isMounted = !1);
		}
		this.current = null;
	}
	addChild(e) {
		this.children.add(e), this.enteringChildren ??= /* @__PURE__ */ new Set(), this.enteringChildren.add(e);
	}
	removeChild(e) {
		this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
	}
	bindToMotionValue(e, t) {
		if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), t.accelerate && _a.has(e) && this.current instanceof HTMLElement) {
			let { factory: n, keyframes: r, times: i, ease: a, duration: o } = t.accelerate, s = new sa({
				element: this.current,
				name: e,
				keyframes: r,
				times: i,
				ease: a,
				duration: en(o)
			}), c = n(s);
			this.valueSubscriptions.set(e, () => {
				c(), s.cancel();
			});
			return;
		}
		let n = Fi.has(e);
		n && this.onBindTransform && this.onBindTransform();
		let r = t.on(`change`, (t) => {
			this.latestValues[e] = t, this.props.onUpdate && R.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
		}), i;
		typeof window < `u` && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
			r(), i && i();
		});
	}
	sortNodePosition(e) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
	}
	updateFeatures() {
		let e = `animation`;
		for (e in Ps) {
			let t = Ps[e];
			if (!t) continue;
			let { isEnabled: n, Feature: r } = t;
			if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
				let t = this.features[e];
				t.isMounted ? t.update() : (t.mount(), t.isMounted = !0);
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : bs();
	}
	getStaticValue(e) {
		return this.latestValues[e];
	}
	setStaticValue(e, t) {
		this.latestValues[e] = t;
	}
	update(e, t) {
		(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
		for (let t = 0; t < Ns.length; t++) {
			let n = Ns[t];
			this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
			let r = e[`on` + n];
			r && (this.propEventSubscriptions[n] = this.on(n, r));
		}
		this.prevMotionValues = Os(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(e) {
		return this.props.variants ? this.props.variants[e] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	addVariantChild(e) {
		let t = this.getClosestVariantNode();
		if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e);
	}
	addValue(e, t) {
		let n = this.values.get(e);
		t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get());
	}
	removeValue(e) {
		this.values.delete(e);
		let t = this.valueSubscriptions.get(e);
		t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
	}
	hasValue(e) {
		return this.values.has(e);
	}
	getValue(e, t) {
		if (this.props.values && this.props.values[e]) return this.props.values[e];
		let n = this.values.get(e);
		return n === void 0 && t !== void 0 && (n = Aa(t === null ? void 0 : t, { owner: this }), this.addValue(e, n)), n;
	}
	readValue(e, t) {
		let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return n != null && (typeof n == `string` && (Kt(n) || Jt(n)) ? n = parseFloat(n) : !gs(n) && Tr.test(t) && (n = Co(e, t)), this.setBaseTarget(e, Qa(n) ? n.get() : n)), Qa(n) ? n.get() : n;
	}
	setBaseTarget(e, t) {
		this.baseTarget[e] = t;
	}
	getBaseTarget(e) {
		let { initial: t } = this.props, n;
		if (typeof t == `string` || typeof t == `object`) {
			let r = Ga(this.props, t, this.presenceContext?.custom);
			r && (n = r[e]);
		}
		if (t && n !== void 0) return n;
		let r = this.getBaseTargetFromProps(this.props, e);
		return r !== void 0 && !Qa(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
	}
	on(e, t) {
		return this.events[e] || (this.events[e] = new $t()), this.events[e].add(t);
	}
	notify(e, ...t) {
		this.events[e] && this.events[e].notify(...t);
	}
	scheduleRenderMicrotask() {
		jo.render(this.render);
	}
}, Rs = class extends Ls {
	constructor() {
		super(...arguments), this.KeyframeResolver = Eo;
	}
	sortInstanceNodePosition(e, t) {
		return e.compareDocumentPosition(t) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(e, t) {
		let n = e.style;
		return n ? n[t] : void 0;
	}
	removeValueFromRenderState(e, { vars: t, style: n }) {
		delete t[e], delete n[e];
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: e } = this.props;
		Qa(e) && (this.childSubscription = e.on(`change`, (e) => {
			this.current && (this.current.textContent = `${e}`);
		}));
	}
}, zs = class {
	constructor(e) {
		this.isMounted = !1, this.node = e;
	}
	update() {}
};
function Bs({ top: e, left: t, right: n, bottom: r }) {
	return {
		x: {
			min: t,
			max: n
		},
		y: {
			min: e,
			max: r
		}
	};
}
function Vs({ x: e, y: t }) {
	return {
		top: t.min,
		right: e.max,
		bottom: t.max,
		left: e.min
	};
}
function Hs(e, t) {
	if (!t) return e;
	let n = t({
		x: e.left,
		y: e.top
	}), r = t({
		x: e.right,
		y: e.bottom
	});
	return {
		top: n.y,
		left: n.x,
		bottom: r.y,
		right: r.x
	};
}
function Us(e) {
	return e === void 0 || e === 1;
}
function Ws({ scale: e, scaleX: t, scaleY: n }) {
	return !Us(e) || !Us(t) || !Us(n);
}
function Gs(e) {
	return Ws(e) || Ks(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Ks(e) {
	return qs(e.x) || qs(e.y);
}
function qs(e) {
	return e && e !== `0%`;
}
function Js(e, t, n) {
	return n + t * (e - n);
}
function Ys(e, t, n, r, i) {
	return i !== void 0 && (e = Js(e, i, r)), Js(e, n, r) + t;
}
function Xs(e, t = 0, n = 1, r, i) {
	e.min = Ys(e.min, t, n, r, i), e.max = Ys(e.max, t, n, r, i);
}
function Zs(e, { x: t, y: n }) {
	Xs(e.x, t.translate, t.scale, t.originPoint), Xs(e.y, n.translate, n.scale, n.originPoint);
}
var Qs = .999999999999, $s = 1.0000000000001;
function ec(e, t, n, r = !1) {
	let i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let a, o;
	for (let s = 0; s < i; s++) {
		a = n[s], o = a.projectionDelta;
		let { visualElement: i } = a.options;
		i && i.props.style && i.props.style.display === `contents` || (r && a.options.layoutScroll && a.scroll && a !== a.root && (tc(e.x, -a.scroll.offset.x), tc(e.y, -a.scroll.offset.y)), o && (t.x *= o.x.scale, t.y *= o.y.scale, Zs(e, o)), r && Gs(a.latestValues) && ic(e, a.latestValues, a.layout?.layoutBox));
	}
	t.x < $s && t.x > Qs && (t.x = 1), t.y < $s && t.y > Qs && (t.y = 1);
}
function tc(e, t) {
	e.min += t, e.max += t;
}
function nc(e, t, n, r, i = .5) {
	Xs(e, t, n, B(e.min, e.max, i), r);
}
function rc(e, t) {
	return typeof e == `string` ? parseFloat(e) / 100 * (t.max - t.min) : e;
}
function ic(e, t, n) {
	let r = n ?? e;
	nc(e.x, rc(t.x, r.x), t.scaleX, t.scale, t.originX), nc(e.y, rc(t.y, r.y), t.scaleY, t.scale, t.originY);
}
function ac(e, t) {
	return Bs(Hs(e.getBoundingClientRect(), t));
}
function oc(e, t, n) {
	let r = ac(e, n), { scroll: i } = t;
	return i && (tc(r.x, i.offset.x), tc(r.y, i.offset.y)), r;
}
var sc = {
	x: `translateX`,
	y: `translateY`,
	z: `translateZ`,
	transformPerspective: `perspective`
}, cc = Pi.length;
function lc(e, t, n) {
	let r = ``, i = !0;
	for (let a = 0; a < cc; a++) {
		let o = Pi[a], s = e[o];
		if (s === void 0) continue;
		let c = !0;
		if (typeof s == `number`) c = s === +!!o.startsWith(`scale`);
		else {
			let e = parseFloat(s);
			c = o.startsWith(`scale`) ? e === 1 : e === 0;
		}
		if (!c || n) {
			let e = ko(s, yo[o]);
			if (!c) {
				i = !1;
				let t = sc[o] || o;
				r += `${t}(${e}) `;
			}
			n && (t[o] = e);
		}
	}
	let a = e.pathRotation;
	return a && (i = !1, r += `rotate(${ko(a, yo.pathRotation)}) `), r = r.trim(), n ? r = n(t, i ? `` : r) : i && (r = `none`), r;
}
function uc(e, t, n) {
	let { style: r, vars: i, transformOrigin: a } = e, o = !1, s = !1;
	for (let e in t) {
		let n = t[e];
		if (Fi.has(e)) {
			o = !0;
			continue;
		} else if (Ln(e)) {
			i[e] = n;
			continue;
		} else {
			let t = ko(n, yo[e]);
			e.startsWith(`origin`) ? (s = !0, a[e] = t) : r[e] = t;
		}
	}
	if (t.transform || (o || n ? r.transform = lc(t, e.transform, n) : r.transform &&= `none`), s) {
		let { originX: e = `50%`, originY: t = `50%`, originZ: n = 0 } = a;
		r.transformOrigin = `${e} ${t} ${n}`;
	}
}
function dc(e, { style: t, vars: n }, r, i) {
	let a = e.style, o;
	for (o in t) a[o] = t[o];
	for (o in i?.applyProjectionStyles(a, r), n) a.setProperty(o, n[o]);
}
function fc(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var pc = { correct: (e, t) => {
	if (!t.target) return e;
	if (typeof e == `string`) if (z.test(e)) e = parseFloat(e);
	else return e;
	return `${fc(e, t.target.x)}% ${fc(e, t.target.y)}%`;
} }, mc = { correct: (e, { treeScale: t, projectionDelta: n }) => {
	let r = e, i = Tr.parse(e);
	if (i.length > 5) return r;
	let a = Tr.createTransformer(e), o = typeof i[0] == `number` ? 0 : 1, s = n.x.scale * t.x, c = n.y.scale * t.y;
	i[0 + o] /= s, i[1 + o] /= c;
	let l = B(s, c, .5);
	return typeof i[2 + o] == `number` && (i[2 + o] /= l), typeof i[3 + o] == `number` && (i[3 + o] /= l), a(i);
} }, hc = {
	borderRadius: {
		...pc,
		applyTo: [...Do]
	},
	borderTopLeftRadius: pc,
	borderTopRightRadius: pc,
	borderBottomLeftRadius: pc,
	borderBottomRightRadius: pc,
	boxShadow: mc
};
function gc(e, { layout: t, layoutId: n }) {
	return Fi.has(e) || e.startsWith(`origin`) || (t || n !== void 0) && (!!hc[e] || e === `opacity`);
}
function _c(e, t, n) {
	let r = e.style, i = t?.style, a = {};
	if (!r) return a;
	for (let t in r) (Qa(r[t]) || i && Qa(i[t]) || gc(t, e) || n?.getValue(t)?.liveStyle !== void 0) && (a[t] = r[t]);
	return a;
}
function vc(e) {
	return window.getComputedStyle(e);
}
var yc = class extends Rs {
	constructor() {
		super(...arguments), this.type = `html`, this.renderInstance = dc;
	}
	readValueFromInstance(e, t) {
		if (Fi.has(t)) return this.projection?.isProjecting ? ji(t) : V(e, t);
		{
			let n = vc(e), r = (Ln(t) ? n.getPropertyValue(t) : n[t]) || 0;
			return typeof r == `string` ? r.trim() : r;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: t }) {
		return ac(e, t);
	}
	build(e, t, n) {
		uc(e, t, n.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return _c(e, t, n);
	}
}, bc = {
	offset: `stroke-dashoffset`,
	array: `stroke-dasharray`
}, xc = {
	offset: `strokeDashoffset`,
	array: `strokeDasharray`
};
function Sc(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	let a = i ? bc : xc;
	e[a.offset] = `${-r}`, e[a.array] = `${t} ${n}`;
}
var Cc = [
	`offsetDistance`,
	`offsetPath`,
	`offsetRotate`,
	`offsetAnchor`
];
function wc(e, { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s }, c, l, u) {
	if (uc(e, s, l), c) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	e.attrs = e.style, e.style = {};
	let { attrs: d, style: f } = e;
	d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? `50% 50%`, delete d.transformOrigin), f.transform && (f.transformBox = u?.transformBox ?? `fill-box`, delete d.transformBox);
	for (let e of Cc) d[e] !== void 0 && (f[e] = d[e], delete d[e]);
	t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && Sc(d, i, a, o, !1);
}
var Tc = /* @__PURE__ */ new Set([
	`baseFrequency`,
	`diffuseConstant`,
	`kernelMatrix`,
	`kernelUnitLength`,
	`keySplines`,
	`keyTimes`,
	`limitingConeAngle`,
	`markerHeight`,
	`markerWidth`,
	`numOctaves`,
	`targetX`,
	`targetY`,
	`surfaceScale`,
	`specularConstant`,
	`specularExponent`,
	`stdDeviation`,
	`tableValues`,
	`viewBox`,
	`gradientTransform`,
	`pathLength`,
	`startOffset`,
	`textLength`,
	`lengthAdjust`
]), Ec = (e) => typeof e == `string` && e.toLowerCase() === `svg`;
function Dc(e, t, n, r) {
	dc(e, t, void 0, r);
	for (let n in t.attrs) e.setAttribute(Tc.has(n) ? n : to(n), t.attrs[n]);
}
function Oc(e, t, n) {
	let r = _c(e, t, n);
	for (let n in e) if (Qa(e[n]) || Qa(t[n])) {
		let t = Pi.indexOf(n) === -1 ? n : `attr` + n.charAt(0).toUpperCase() + n.substring(1);
		r[t] = e[n];
	}
	return r;
}
var kc = class extends Rs {
	constructor() {
		super(...arguments), this.type = `svg`, this.isSVGTag = !1, this.measureInstanceViewportBox = bs;
	}
	getBaseTargetFromProps(e, t) {
		return e[t];
	}
	readValueFromInstance(e, t) {
		if (Fi.has(t)) {
			let e = xo(t);
			return e && e.default || 0;
		}
		return t = Tc.has(t) ? t : to(t), e.getAttribute(t);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return Oc(e, t, n);
	}
	build(e, t, n) {
		wc(e, t, this.isSVGTag, n.transformTemplate, n.style);
	}
	renderInstance(e, t, n, r) {
		Dc(e, t, n, r);
	}
	mount(e) {
		this.isSVGTag = Ec(e.tagName), super.mount(e);
	}
}, Ac = Ts.length;
function jc(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		let t = e.parent && jc(e.parent) || {};
		return e.props.initial !== void 0 && (t.initial = e.props.initial), t;
	}
	let t = {};
	for (let n = 0; n < Ac; n++) {
		let r = Ts[n], i = e.props[r];
		(Cs(i) || i === !1) && (t[r] = i);
	}
	return t;
}
function Mc(e, t) {
	if (!Array.isArray(t)) return !1;
	let n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
var Nc = [...ws].reverse(), Pc = ws.length;
function Fc(e) {
	return (t) => Promise.all(t.map(({ animation: t, options: n }) => co(e, t, n)));
}
function Ic(e) {
	let t = Fc(e), n = Rc(), r = !0, i = !1, a = (t) => (n, r) => {
		let i = Ka(e, r, t === `exit` ? e.presenceContext?.custom : void 0);
		if (i) {
			let { transition: e, transitionEnd: t, ...r } = i;
			n = {
				...n,
				...r,
				...t
			};
		}
		return n;
	};
	function o(n) {
		t = n(e);
	}
	function s(o) {
		let { props: s } = e, c = jc(e.parent) || {}, l = [], u = /* @__PURE__ */ new Set(), d = {}, f = Infinity;
		for (let t = 0; t < Pc; t++) {
			let p = Nc[t], m = n[p], h = s[p] === void 0 ? c[p] : s[p], g = Cs(h), _ = p === o ? m.isActive : null;
			_ === !1 && (f = t);
			let v = h === c[p] && h !== s[p] && g;
			if (v && (r || i) && e.manuallyAnimateOnMount && (v = !1), m.protectedKeys = { ...d }, !m.isActive && _ === null || !h && !m.prevProp || Ss(h) || typeof h == `boolean`) continue;
			if (p === `exit` && m.isActive && _ !== !0) {
				m.prevResolvedValues && (d = {
					...d,
					...m.prevResolvedValues
				});
				continue;
			}
			let y = Lc(m.prevProp, h), b = y || p === o && m.isActive && !v && g || t > f && g, x = !1, S = Array.isArray(h) ? h : [h], C = S.reduce(a(p), {});
			_ === !1 && (C = {});
			let { prevResolvedValues: w = {} } = m, T = {
				...w,
				...C
			}, E = (t) => {
				b = !0, u.has(t) && (x = !0, u.delete(t)), m.needsAnimating[t] = !0;
				let n = e.getValue(t);
				n && (n.liveStyle = !1);
			};
			for (let e in T) {
				let t = C[e], n = w[e];
				if (d.hasOwnProperty(e)) continue;
				let r = !1;
				r = Ja(t) && Ja(n) ? !Mc(t, n) || y : t !== n, r ? t == null ? u.add(e) : E(e) : t !== void 0 && u.has(e) ? E(e) : m.protectedKeys[e] = !0;
			}
			m.prevProp = h, m.prevResolvedValues = C, m.isActive && (d = {
				...d,
				...C
			}), (r || i) && e.blockInitialAnimation && (b = !1);
			let D = v && y;
			b && (!D || x) && l.push(...S.map((t) => {
				let n = { type: p };
				if (typeof t == `string` && (r || i) && !D && e.manuallyAnimateOnMount && e.parent) {
					let { parent: r } = e, i = Ka(r, t);
					if (r.enteringChildren && i) {
						let { delayChildren: t } = i.transition || {};
						n.delay = Ta(r.enteringChildren, e, t);
					}
				}
				return {
					animation: t,
					options: n
				};
			}));
		}
		if (u.size) {
			let t = {};
			if (typeof s.initial != `boolean`) {
				let n = Ka(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
				n && n.transition && (t.transition = n.transition);
			}
			u.forEach((n) => {
				let r = e.getBaseTarget(n), i = e.getValue(n);
				i && (i.liveStyle = !0), t[n] = r ?? null;
			}), l.push({ animation: t });
		}
		let p = !!l.length;
		return r && (s.initial === !1 || s.initial === s.animate) && !e.manuallyAnimateOnMount && (p = !1), r = !1, i = !1, p ? t(l) : Promise.resolve();
	}
	function c(t, r) {
		if (n[t].isActive === r) return Promise.resolve();
		e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)), n[t].isActive = r;
		let i = s(t);
		for (let e in n) n[e].protectedKeys = {};
		return i;
	}
	return {
		animateChanges: s,
		setActive: c,
		setAnimateFunction: o,
		getState: () => n,
		reset: () => {
			n = Rc(), i = !0;
		}
	};
}
function Lc(e, t) {
	return typeof t == `string` ? t !== e : Array.isArray(t) ? !Mc(t, e) : !1;
}
function W(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function Rc() {
	return {
		animate: W(!0),
		whileInView: W(),
		whileHover: W(),
		whileTap: W(),
		whileDrag: W(),
		whileFocus: W(),
		exit: W()
	};
}
function zc(e, t) {
	e.min = t.min, e.max = t.max;
}
function Bc(e, t) {
	zc(e.x, t.x), zc(e.y, t.y);
}
function Vc(e, t) {
	e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
var Hc = .9999, Uc = 1.0001, Wc = -.01, Gc = .01;
function Kc(e) {
	return e.max - e.min;
}
function qc(e, t, n) {
	return Math.abs(e - t) <= n;
}
function Jc(e, t, n, r = .5) {
	e.origin = r, e.originPoint = B(t.min, t.max, e.origin), e.scale = Kc(n) / Kc(t), e.translate = B(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Hc && e.scale <= Uc || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Wc && e.translate <= Gc || isNaN(e.translate)) && (e.translate = 0);
}
function Yc(e, t, n, r) {
	Jc(e.x, t.x, n.x, r ? r.originX : void 0), Jc(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Xc(e, t, n, r = 0) {
	e.min = (r ? B(n.min, n.max, r) : n.min) + t.min, e.max = e.min + Kc(t);
}
function Zc(e, t, n, r) {
	Xc(e.x, t.x, n.x, r?.x), Xc(e.y, t.y, n.y, r?.y);
}
function Qc(e, t, n, r = 0) {
	let i = r ? B(n.min, n.max, r) : n.min;
	e.min = t.min - i, e.max = e.min + Kc(t);
}
function $c(e, t, n, r) {
	Qc(e.x, t.x, n.x, r?.x), Qc(e.y, t.y, n.y, r?.y);
}
function el(e, t, n, r, i) {
	return e -= t, e = Js(e, 1 / n, r), i !== void 0 && (e = Js(e, 1 / i, r)), e;
}
function tl(e, t = 0, n = 1, r = .5, i, a = e, o = e) {
	if (ir.test(t) && (t = parseFloat(t), t = B(o.min, o.max, t / 100) - o.min), typeof t != `number`) return;
	let s = B(a.min, a.max, r);
	e === a && (s -= t), e.min = el(e.min, t, n, s, i), e.max = el(e.max, t, n, s, i);
}
function nl(e, t, [n, r, i], a, o) {
	tl(e, t[n], t[r], t[i], t.scale, a, o);
}
var rl = [
	`x`,
	`scaleX`,
	`originX`
], il = [
	`y`,
	`scaleY`,
	`originY`
];
function al(e, t, n, r) {
	nl(e.x, t, rl, n ? n.x : void 0, r ? r.x : void 0), nl(e.y, t, il, n ? n.y : void 0, r ? r.y : void 0);
}
function ol(e) {
	return e.translate === 0 && e.scale === 1;
}
function sl(e) {
	return ol(e.x) && ol(e.y);
}
function cl(e, t) {
	return e.min === t.min && e.max === t.max;
}
function ll(e, t) {
	return cl(e.x, t.x) && cl(e.y, t.y);
}
function ul(e, t) {
	return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function dl(e, t) {
	return ul(e.x, t.x) && ul(e.y, t.y);
}
function fl(e) {
	return Kc(e.x) / Kc(e.y);
}
function pl(e, t) {
	return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
function ml(e) {
	return [e(`x`), e(`y`)];
}
function hl(e, t, n) {
	let r = ``, i = e.x.translate / t.x, a = e.y.translate / t.y, o = n?.z || 0;
	if ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
		let { transformPerspective: e, rotate: t, pathRotation: i, rotateX: a, rotateY: o, skewX: s, skewY: c } = n;
		e && (r = `perspective(${e}px) ${r}`), t && (r += `rotate(${t}deg) `), i && (r += `rotate(${i}deg) `), a && (r += `rotateX(${a}deg) `), o && (r += `rotateY(${o}deg) `), s && (r += `skewX(${s}deg) `), c && (r += `skewY(${c}deg) `);
	}
	let s = e.x.scale * t.x, c = e.y.scale * t.y;
	return (s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || `none`;
}
var gl = Do.length, _l = (e) => typeof e == `string` ? parseFloat(e) : e, vl = (e) => typeof e == `number` || z.test(e);
function yl(e, t, n, r, i, a) {
	i ? (e.opacity = B(0, n.opacity ?? 1, xl(r)), e.opacityExit = B(t.opacity ?? 1, 0, Sl(r))) : a && (e.opacity = B(t.opacity ?? 1, n.opacity ?? 1, r));
	for (let i = 0; i < gl; i++) {
		let a = Do[i], o = bl(t, a), s = bl(n, a);
		o === void 0 && s === void 0 || (o ||= 0, s ||= 0, o === 0 || s === 0 || vl(o) === vl(s) ? (e[a] = Math.max(B(_l(o), _l(s), r), 0), (ir.test(s) || ir.test(o)) && (e[a] += `%`)) : e[a] = s);
	}
	(t.rotate || n.rotate) && (e.rotate = B(t.rotate || 0, n.rotate || 0, r));
}
function bl(e, t) {
	return e[t] === void 0 ? e.borderRadius : e[t];
}
var xl = Cl(0, .5, gn), Sl = Cl(.5, .95, Xt);
function Cl(e, t, n) {
	return (r) => r < e ? 0 : r > t ? 1 : n(Qt(e, t, r));
}
function wl(e, t, n) {
	let r = Qa(e) ? e : Aa(e);
	return r.start(Ba(``, r, t, n)), r.animation;
}
function Tl(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
var El = (e, t) => e.depth - t.depth, Dl = class {
	constructor() {
		this.children = [], this.isDirty = !1;
	}
	add(e) {
		Ht(this.children, e), this.isDirty = !0;
	}
	remove(e) {
		Ut(this.children, e), this.isDirty = !0;
	}
	forEach(e) {
		this.isDirty && this.children.sort(El), this.isDirty = !1, this.children.forEach(e);
	}
};
function Ol(e, t) {
	let n = Fn.now(), r = ({ timestamp: i }) => {
		let a = i - n;
		a >= t && (An(r), e(a - t));
	};
	return R.setup(r, !0), () => An(r);
}
function kl(e) {
	return Qa(e) ? e.get() : e;
}
var Al = class {
	constructor() {
		this.members = [];
	}
	add(e) {
		Ht(this.members, e);
		for (let t = this.members.length - 1; t >= 0; t--) {
			let n = this.members[t];
			if (n === e || n === this.lead || n === this.prevLead) continue;
			let r = n.instance;
			(!r || r.isConnected === !1) && !n.snapshot && (Ut(this.members, n), n.unmount());
		}
		e.scheduleRender();
	}
	remove(e) {
		if (Ut(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
			let e = this.members[this.members.length - 1];
			e && this.promote(e);
		}
	}
	relegate(e) {
		for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
			let e = this.members[t];
			if (e.isPresent !== !1 && e.instance?.isConnected !== !1) return this.promote(e), !0;
		}
		return !1;
	}
	promote(e, t) {
		let n = this.lead;
		if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
			n.updateSnapshot(), e.scheduleRender();
			let { layoutDependency: r } = n.options, { layoutDependency: i } = e.options;
			(r === void 0 || r !== i) && (e.resumeFrom = n, t && (n.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root?.isUpdating && (e.isLayoutDirty = !0)), e.options.crossfade === !1 && n.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((e) => {
			e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.();
		});
	}
	scheduleRender() {
		this.members.forEach((e) => e.instance && e.scheduleRender(!1));
	}
	removeLeadSnapshot() {
		this.lead?.snapshot && (this.lead.snapshot = void 0);
	}
}, jl = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
}, Ml = {
	nodes: 0,
	calculatedTargetDeltas: 0,
	calculatedProjections: 0
}, Nl = [
	``,
	`X`,
	`Y`,
	`Z`
], Pl = 1e3, Fl = 0;
function Il(e, t, n, r) {
	let { latestValues: i } = t;
	i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Ll(e) {
	if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
	let { visualElement: t } = e.options;
	if (!t) return;
	let n = ro(t);
	if (window.MotionHasOptimisedAnimation(n, `transform`)) {
		let { layout: t, layoutId: r } = e.options;
		window.MotionCancelOptimisedAnimation(n, `transform`, R, !(t || r));
	}
	let { parent: r } = e;
	r && !r.hasCheckedOptimisedAppear && Ll(r);
}
function Rl({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
	return class {
		constructor(e = {}, n = t?.()) {
			this.id = Fl++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, ps.value && (Ml.nodes = Ml.calculatedTargetDeltas = Ml.calculatedProjections = 0), this.nodes.forEach(K), this.nodes.forEach(Gl), this.nodes.forEach(Kl), this.nodes.forEach(q), ps.addProjectionMetrics && ps.addProjectionMetrics(Ml);
			}, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
			for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
			this.root === this && (this.nodes = new Dl());
		}
		addEventListener(e, t) {
			return this.eventHandlers.has(e) || this.eventHandlers.set(e, new $t()), this.eventHandlers.get(e).add(t);
		}
		notifyListeners(e, ...t) {
			let n = this.eventHandlers.get(e);
			n && n.notify(...t);
		}
		hasListeners(e) {
			return this.eventHandlers.has(e);
		}
		mount(t) {
			if (this.instance) return;
			this.isSVG = Qo(t) && !ms(t), this.instance = t;
			let { layoutId: n, layout: r, visualElement: i } = this.options;
			if (i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0), e) {
				let n, r = 0, i = () => this.root.updateBlockedByResize = !1;
				R.read(() => {
					r = window.innerWidth;
				}), e(t, () => {
					let e = window.innerWidth;
					e !== r && (r = e, this.root.updateBlockedByResize = !0, n && n(), n = Ol(i, 250), jl.hasAnimatedSinceResize && (jl.hasAnimatedSinceResize = !1, this.nodes.forEach(Wl)));
				});
			}
			n && this.root.registerSharedNode(n, this), this.options.animate !== !1 && i && (n || r) && this.addEventListener(`didUpdate`, ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: n, layout: r }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let a = this.options.transition || i.getDefaultTransition() || $l, { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = i.getProps(), c = !this.targetLayout || !dl(this.targetLayout, r), l = !t && n;
				if (this.options.layoutRoot || this.resumeFrom || l || t && (c || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					let t = {
						...Ma(a, `layout`),
						onPlay: o,
						onComplete: s
					};
					(i.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t), this.setAnimationOrigin(e, l, t.path);
				} else t || Wl(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = r;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			let e = this.getStack();
			e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), An(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
		}
		startUpdate() {
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(ql), this.animationId++);
		}
		getTransformTemplate() {
			let { visualElement: e } = this.options;
			return e && e.getProps().transformTemplate;
		}
		willUpdate(e = !0) {
			if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ll(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
			this.isLayoutDirty = !0;
			for (let e = 0; e < this.path.length; e++) {
				let t = this.path[e];
				t.shouldResetTransform = !0, (typeof t.latestValues.x == `string` || typeof t.latestValues.y == `string`) && (t.isLayoutDirty = !0), t.updateScroll(`snapshot`), t.options.layoutRoot && t.willUpdate(!1);
			}
			let { layoutId: t, layout: n } = this.options;
			if (t === void 0 && !n) return;
			let r = this.getTransformTemplate();
			this.prevTransformTemplateValue = r ? r(this.latestValues, ``) : void 0, this.updateSnapshot(), e && this.notifyListeners(`willUpdate`);
		}
		update() {
			if (this.updateScheduled = !1, this.isUpdateBlocked()) {
				let e = this.updateBlockedByResize;
				this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), e && this.nodes.forEach(Bl), this.nodes.forEach(Y);
				return;
			}
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(Vl);
				return;
			}
			this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Hl), this.nodes.forEach(Ul), this.nodes.forEach(zl), this.nodes.forEach(G)) : this.nodes.forEach(Vl), this.clearAllSnapshots();
			let e = Fn.now();
			jn.delta = Wt(0, 1e3 / 60, e - jn.timestamp), jn.timestamp = e, jn.isProcessing = !0, Mn.update.process(jn), Mn.preRender.process(jn), Mn.render.process(jn), jn.isProcessing = !1;
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, jo.read(this.scheduleUpdate));
		}
		clearAllSnapshots() {
			this.nodes.forEach(J), this.sharedNodes.forEach(Jl);
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, R.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			R.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Kc(this.snapshot.measuredBox.x) && !Kc(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
		}
		updateLayout() {
			if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
			if (this.resumeFrom && !this.resumeFrom.instance) for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
			let e = this.layout;
			this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected ||= bs(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners(`measure`, this.layout.layoutBox);
			let { visualElement: t } = this.options;
			t && t.notify(`LayoutMeasure`, this.layout.layoutBox, e ? e.layoutBox : void 0);
		}
		updateScroll(e = `measure`) {
			let t = !!(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && this.instance) {
				let t = r(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: e,
					isRoot: t,
					offset: n(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : t
				};
			}
		}
		resetTransform() {
			if (!i) return;
			let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, t = this.projectionDelta && !sl(this.projectionDelta), n = this.getTransformTemplate(), r = n ? n(this.latestValues, ``) : void 0, a = r !== this.prevTransformTemplateValue;
			e && this.instance && (t || Gs(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(e = !0) {
			let t = this.measurePageBox(), n = this.removeElementScroll(t);
			return e && (n = this.removeTransform(n)), ru(n), {
				animationId: this.root.animationId,
				measuredBox: t,
				layoutBox: n,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			let { visualElement: e } = this.options;
			if (!e) return bs();
			let t = e.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(au))) {
				let { scroll: e } = this.root;
				e && (tc(t.x, e.offset.x), tc(t.y, e.offset.y));
			}
			return t;
		}
		removeElementScroll(e) {
			let t = bs();
			if (Bc(t, e), this.scroll?.wasRoot) return t;
			for (let n = 0; n < this.path.length; n++) {
				let r = this.path[n], { scroll: i, options: a } = r;
				r !== this.root && i && a.layoutScroll && (i.wasRoot && Bc(t, e), tc(t.x, i.offset.x), tc(t.y, i.offset.y));
			}
			return t;
		}
		applyTransform(e, t = !1, n) {
			let r = n || bs();
			Bc(r, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				!t && n.options.layoutScroll && n.scroll && n !== n.root && (tc(r.x, -n.scroll.offset.x), tc(r.y, -n.scroll.offset.y)), Gs(n.latestValues) && ic(r, n.latestValues, n.layout?.layoutBox);
			}
			return Gs(this.latestValues) && ic(r, this.latestValues, this.layout?.layoutBox), r;
		}
		removeTransform(e) {
			let t = bs();
			Bc(t, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				if (!Gs(n.latestValues)) continue;
				let r;
				n.instance && (Ws(n.latestValues) && n.updateSnapshot(), r = bs(), Bc(r, n.measurePageBox())), al(t, n.latestValues, n.snapshot?.layoutBox, r);
			}
			return Gs(this.latestValues) && al(t, this.latestValues), t;
		}
		setTargetDelta(e) {
			this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
		}
		setOptions(e) {
			this.options = {
				...this.options,
				...e,
				crossfade: e.crossfade === void 0 ? !0 : e.crossfade
			};
		}
		clearMeasurements() {
			this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== jn.timestamp && this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(e = !1) {
			let t = this.getLead();
			this.isProjectionDirty ||= t.isProjectionDirty, this.isTransformDirty ||= t.isTransformDirty, this.isSharedProjectionDirty ||= t.isSharedProjectionDirty;
			let n = !!this.resumingFrom || this !== t;
			if (!(e || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			let { layout: r, layoutId: i } = this.options;
			if (!this.layout || !(r || i)) return;
			this.resolvedRelativeTargetAt = jn.timestamp;
			let a = this.getClosestProjectingParent();
			a && this.linkedParentVersion !== a.layoutVersion && !a.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && a && a.layout ? this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = bs(), this.targetWithTransforms = bs()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Zc(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Bc(this.target, this.layout.layoutBox), Zs(this.target, this.targetDelta)) : Bc(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && a && !!a.resumingFrom == !!this.resumingFrom && !a.options.layoutScroll && a.target && this.animationProgress !== 1 ? this.createRelativeTarget(a, this.target, a.target) : this.relativeParent = this.relativeTarget = void 0), ps.value && Ml.calculatedTargetDeltas++);
		}
		getClosestProjectingParent() {
			if (!(!this.parent || Ws(this.parent.latestValues) || Ks(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(e, t, n) {
			this.relativeParent = e, this.linkedParentVersion = e.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = bs(), this.relativeTargetOrigin = bs(), $c(this.relativeTargetOrigin, t, n, this.options.layoutAnchor || void 0), Bc(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			let e = this.getLead(), t = !!this.resumingFrom || this !== e, n = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === jn.timestamp && (n = !1), n) return;
			let { layout: r, layoutId: i } = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || i)) return;
			Bc(this.layoutCorrected, this.layout.layoutBox);
			let a = this.treeScale.x, o = this.treeScale.y;
			ec(this.layoutCorrected, this.treeScale, this.path, t), e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e.target = e.layout.layoutBox, e.targetWithTransforms = bs());
			let { target: s } = e;
			if (!s) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Vc(this.prevProjectionDelta.x, this.projectionDelta.x), Vc(this.prevProjectionDelta.y, this.projectionDelta.y)), Yc(this.projectionDelta, this.layoutCorrected, s, this.latestValues), (this.treeScale.x !== a || this.treeScale.y !== o || !pl(this.projectionDelta.x, this.prevProjectionDelta.x) || !pl(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners(`projectionUpdate`, s)), ps.value && Ml.calculatedProjections++;
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(e = !0) {
			if (this.options.visualElement?.scheduleRender(), e) {
				let e = this.getStack();
				e && e.scheduleRender();
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = vs(), this.projectionDelta = vs(), this.projectionDeltaWithTransform = vs();
		}
		setAnimationOrigin(e, t = !1, n) {
			let r = this.snapshot, i = r ? r.latestValues : {}, a = { ...this.latestValues }, o = vs();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
			let s = bs(), c = (r ? r.source : void 0) !== (this.layout ? this.layout.source : void 0), l = this.getStack(), u = !l || l.members.length <= 1, d = !!(c && !u && this.options.crossfade === !0 && !this.path.some(Ql));
			this.animationProgress = 0;
			let f, p = n?.interpolateProjection(e);
			this.mixTargetDelta = (t) => {
				let n = t / 1e3, r = p?.(n);
				r ? (o.x.translate = r.x, o.x.scale = B(e.x.scale, 1, n), o.x.origin = e.x.origin, o.x.originPoint = e.x.originPoint, o.y.translate = r.y, o.y.scale = B(e.y.scale, 1, n), o.y.origin = e.y.origin, o.y.originPoint = e.y.originPoint) : (Yl(o.x, e.x, n), Yl(o.y, e.y, n)), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && ($c(s, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), Zl(this.relativeTarget, this.relativeTargetOrigin, s, n), f && ll(this.relativeTarget, f) && (this.isProjectionDirty = !1), f ||= bs(), Bc(f, this.relativeTarget)), c && (this.animationValues = a, yl(a, i, this.latestValues, n, d, u)), r && r.rotate !== void 0 && (this.animationValues ||= a, this.animationValues.pathRotation = r.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(e) {
			this.notifyListeners(`animationStart`), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation &&= (An(this.pendingAnimation), void 0), this.pendingAnimation = R.update(() => {
				jl.hasAnimatedSinceResize = !0, this.motionValue ||= Aa(0), this.motionValue.jump(0, !1), this.currentAnimation = wl(this.motionValue, [0, 1e3], {
					...e,
					velocity: 0,
					isSync: !0,
					onUpdate: (t) => {
						this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
					},
					onComplete: () => {
						e.onComplete && e.onComplete(), this.completeAnimation();
					}
				}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
			let e = this.getStack();
			e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners(`animationComplete`);
		}
		finishAnimation() {
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Pl), this.currentAnimation.stop()), this.completeAnimation();
		}
		applyTransformsToTarget() {
			let e = this.getLead(), { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
			if (!(!t || !n || !r)) {
				if (this !== e && this.layout && r && iu(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
					n = this.target || bs();
					let t = Kc(this.layout.layoutBox.x);
					n.x.min = e.target.x.min, n.x.max = n.x.min + t;
					let r = Kc(this.layout.layoutBox.y);
					n.y.min = e.target.y.min, n.y.max = n.y.min + r;
				}
				Bc(t, n), ic(t, i), Yc(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
			}
		}
		registerSharedNode(e, t) {
			this.sharedNodes.has(e) || this.sharedNodes.set(e, new Al()), this.sharedNodes.get(e).add(t);
			let n = t.options.initialPromotionConfig;
			t.promote({
				transition: n ? n.transition : void 0,
				preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
			});
		}
		isLead() {
			let e = this.getStack();
			return e ? e.lead === this : !0;
		}
		getLead() {
			let { layoutId: e } = this.options;
			return e && this.getStack()?.lead || this;
		}
		getPrevLead() {
			let { layoutId: e } = this.options;
			return e ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			let { layoutId: e } = this.options;
			if (e) return this.root.sharedNodes.get(e);
		}
		promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
			let r = this.getStack();
			r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({ transition: t });
		}
		relegate() {
			let e = this.getStack();
			return e ? e.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			let { visualElement: e } = this.options;
			if (!e) return;
			let t = !1, { latestValues: n } = e;
			if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0), !t) return;
			let r = {};
			n.z && Il(`z`, e, r, this.animationValues);
			for (let t = 0; t < Nl.length; t++) Il(`rotate${Nl[t]}`, e, r, this.animationValues), Il(`skew${Nl[t]}`, e, r, this.animationValues);
			e.render();
			for (let t in r) e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]);
			e.scheduleRender();
		}
		applyProjectionStyles(e, t) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				e.visibility = `hidden`;
				return;
			}
			let n = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = !1, e.visibility = ``, e.opacity = ``, e.pointerEvents = kl(t?.pointerEvents) || ``, e.transform = n ? n(this.latestValues, ``) : `none`;
				return;
			}
			let r = this.getLead();
			if (!this.projectionDelta || !this.layout || !r.target) {
				this.options.layoutId && (e.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, e.pointerEvents = kl(t?.pointerEvents) || ``), this.hasProjected && !Gs(this.latestValues) && (e.transform = n ? n({}, ``) : `none`, this.hasProjected = !1);
				return;
			}
			e.visibility = ``;
			let i = r.animationValues || r.latestValues;
			this.applyTransformsToTarget();
			let a = hl(this.projectionDeltaWithTransform, this.treeScale, i);
			n && (a = n(i, a)), e.transform = a;
			let { x: o, y: s } = this.projectionDelta;
			e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`, r.animationValues ? e.opacity = r === this ? i.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : e.opacity = r === this ? i.opacity === void 0 ? `` : i.opacity : i.opacityExit === void 0 ? 0 : i.opacityExit;
			for (let t in hc) {
				if (i[t] === void 0) continue;
				let { correct: n, applyTo: o, isCSSVariable: s } = hc[t], c = a === `none` ? i[t] : n(i[t], r);
				if (o) {
					let t = o.length;
					for (let n = 0; n < t; n++) e[o[n]] = c;
				} else s ? this.options.visualElement.renderState.vars[t] = c : e[t] = c;
			}
			this.options.layoutId && (e.pointerEvents = r === this ? kl(t?.pointerEvents) || `` : `none`);
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((e) => e.currentAnimation?.stop()), this.root.nodes.forEach(Y), this.root.sharedNodes.clear();
		}
	};
}
function zl(e) {
	e.updateLayout();
}
function G(e) {
	let t = e.resumeFrom?.snapshot || e.snapshot;
	if (e.isLead() && e.layout && t && e.hasListeners(`didUpdate`)) {
		let { layoutBox: n, measuredBox: r } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source;
		if (i === `size`) ml((e) => {
			let r = a ? t.measuredBox[e] : t.layoutBox[e], i = Kc(r);
			r.min = n[e].min, r.max = r.min + i;
		});
		else if (i === `x` || i === `y`) {
			let e = i === `x` ? `y` : `x`;
			zc(a ? t.measuredBox[e] : t.layoutBox[e], n[e]);
		} else iu(i, t.layoutBox, n) && ml((r) => {
			let i = a ? t.measuredBox[r] : t.layoutBox[r], o = Kc(n[r]);
			i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o);
		});
		let o = vs();
		Yc(o, n, t.layoutBox);
		let s = vs();
		a ? Yc(s, e.applyTransform(r, !0), t.measuredBox) : Yc(s, n, t.layoutBox);
		let c = !sl(o), l = !1;
		if (!e.resumeFrom) {
			let r = e.getClosestProjectingParent();
			if (r && !r.resumeFrom) {
				let { snapshot: i, layout: a } = r;
				if (i && a) {
					let o = e.options.layoutAnchor || void 0, s = bs();
					$c(s, t.layoutBox, i.layoutBox, o);
					let c = bs();
					$c(c, n, a.layoutBox, o), dl(s, c) || (l = !0), r.options.layoutRoot && (e.relativeTarget = c, e.relativeTargetOrigin = s, e.relativeParent = r);
				}
			}
		}
		e.notifyListeners(`didUpdate`, {
			layout: n,
			snapshot: t,
			delta: s,
			layoutDelta: o,
			hasLayoutChanged: c,
			hasRelativeLayoutChanged: l
		});
	} else if (e.isLead()) {
		let { onExitComplete: t } = e.options;
		t && t();
	}
	e.options.transition = void 0;
}
function K(e) {
	ps.value && Ml.nodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty ||= !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty), e.isTransformDirty ||= e.parent.isTransformDirty);
}
function q(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function J(e) {
	e.clearSnapshot();
}
function Y(e) {
	e.clearMeasurements();
}
function Bl(e) {
	e.isLayoutDirty = !0, e.updateLayout();
}
function Vl(e) {
	e.isLayoutDirty = !1;
}
function Hl(e) {
	e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0);
}
function Ul(e) {
	let { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`), e.resetTransform();
}
function Wl(e) {
	e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Gl(e) {
	e.resolveTargetDelta();
}
function Kl(e) {
	e.calcProjection();
}
function ql(e) {
	e.resetSkewAndRotation();
}
function Jl(e) {
	e.removeLeadSnapshot();
}
function Yl(e, t, n) {
	e.translate = B(t.translate, 0, n), e.scale = B(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Xl(e, t, n, r) {
	e.min = B(t.min, n.min, r), e.max = B(t.max, n.max, r);
}
function Zl(e, t, n, r) {
	Xl(e.x, t.x, n.x, r), Xl(e.y, t.y, n.y, r);
}
function Ql(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var $l = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
}, eu = (e) => typeof navigator < `u` && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), tu = eu(`applewebkit/`) && !eu(`chrome/`) ? Math.round : Xt;
function nu(e) {
	e.min = tu(e.min), e.max = tu(e.max);
}
function ru(e) {
	nu(e.x), nu(e.y);
}
function iu(e, t, n) {
	return e === `position` || e === `preserve-aspect` && !qc(fl(t), fl(n), .2);
}
function au(e) {
	return e !== e.root && e.scroll?.wasRoot;
}
var ou = Rl({
	attachResizeListener: (e, t) => Tl(e, `resize`, t),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
		y: document.documentElement.scrollTop || document.body?.scrollTop || 0
	}),
	checkIsScrollRoot: () => !0
}), su = { current: void 0 }, cu = Rl({
	measureScroll: (e) => ({
		x: e.scrollLeft,
		y: e.scrollTop
	}),
	defaultParent: () => {
		if (!su.current) {
			let e = new ou({});
			e.mount(window), e.setOptions({ layoutScroll: !0 }), su.current = e;
		}
		return su.current;
	},
	resetTransform: (e, t) => {
		e.style.transform = t === void 0 ? `none` : t;
	},
	checkIsScrollRoot: (e) => window.getComputedStyle(e).position === `fixed`
}), lu = (0, I.createContext)({
	transformPagePoint: (e) => e,
	isStatic: !1,
	reducedMotion: `never`
});
function uu(e, t) {
	if (typeof e == `function`) return e(t);
	e != null && (e.current = t);
}
function du(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = uu(e, t);
			return !n && typeof r == `function` && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == `function` ? n() : uu(e[t], null);
			}
		};
	};
}
function fu(...e) {
	return I.useCallback(du(...e), e);
}
var X = o(), pu = class extends I.Component {
	getSnapshotBeforeUpdate(e) {
		let t = this.props.childRef.current;
		if (Ao(t) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
			let e = t.offsetParent, n = Ao(e) && e.offsetWidth || 0, r = Ao(e) && e.offsetHeight || 0, i = getComputedStyle(t), a = this.props.sizeRef.current;
			a.height = parseFloat(i.height), a.width = parseFloat(i.width), a.top = t.offsetTop, a.left = t.offsetLeft, a.right = n - a.width - a.left, a.bottom = r - a.height - a.top, a.direction = i.direction;
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function mu({ children: e, isPresent: t, anchorX: n, anchorY: r, root: i, pop: a }) {
	let o = (0, I.useId)(), s = (0, I.useRef)(null), c = (0, I.useRef)({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		direction: `ltr`
	}), { nonce: l } = (0, I.useContext)(lu), u = fu(s, e.props?.ref ?? e?.ref);
	return (0, I.useInsertionEffect)(() => {
		let { width: e, height: u, top: d, left: f, right: p, bottom: m, direction: h } = c.current;
		if (t || a === !1 || !s.current || !e || !u) return;
		let g = h === `rtl`, _ = n === `left` ? g ? `right: ${p}` : `left: ${f}` : g ? `left: ${f}` : `right: ${p}`, v = r === `bottom` ? `bottom: ${m}` : `top: ${d}`;
		s.current.dataset.motionPopId = o;
		let y = document.createElement(`style`);
		l && (y.nonce = l);
		let b = i ?? document.head;
		return b.appendChild(y), y.sheet && y.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `), () => {
			s.current?.removeAttribute(`data-motion-pop-id`), b.contains(y) && b.removeChild(y);
		};
	}, [t]), (0, X.jsx)(pu, {
		isPresent: t,
		childRef: s,
		sizeRef: c,
		pop: a,
		children: a === !1 ? e : I.cloneElement(e, { ref: u })
	});
}
var hu = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: a, mode: o, anchorX: s, anchorY: c, root: l }) => {
	let u = zt(gu), d = (0, I.useId)(), f = (0, I.useRef)(n), p = (0, I.useRef)(r);
	Bt(() => {
		f.current = n, p.current = r;
	});
	let m = !0, h = (0, I.useMemo)(() => (m = !1, {
		id: d,
		initial: t,
		isPresent: n,
		custom: i,
		onExitComplete: (e) => {
			u.set(e, !0);
			for (let e of u.values()) if (!e) return;
			r && r();
		},
		register: (e) => (u.set(e, !1), () => {
			u.delete(e), !f.current && !u.size && p.current?.();
		})
	}), [
		n,
		u,
		r
	]);
	return a && m && (h = { ...h }), (0, I.useMemo)(() => {
		u.forEach((e, t) => u.set(t, !1));
	}, [n]), I.useEffect(() => {
		!n && !u.size && r && r();
	}, [n]), e = (0, X.jsx)(mu, {
		pop: o === `popLayout`,
		isPresent: n,
		anchorX: s,
		anchorY: c,
		root: l,
		children: e
	}), (0, X.jsx)(Vt.Provider, {
		value: h,
		children: e
	});
};
function gu() {
	return /* @__PURE__ */ new Map();
}
function _u(e = !0) {
	let t = (0, I.useContext)(Vt);
	if (t === null) return [!0, null];
	let { isPresent: n, onExitComplete: r, register: i } = t, a = (0, I.useId)();
	(0, I.useEffect)(() => {
		if (e) return i(a);
	}, [e]);
	let o = (0, I.useCallback)(() => e && r && r(a), [
		a,
		r,
		e
	]);
	return !n && r ? [!1, o] : [!0];
}
var vu = (e) => e.key || ``;
function yu(e) {
	let t = [];
	return I.Children.forEach(e, (e) => {
		(0, I.isValidElement)(e) && t.push(e);
	}), t;
}
var bu = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: i = !0, mode: a = `sync`, propagate: o = !1, anchorX: s = `left`, anchorY: c = `top`, root: l }) => {
	let [u, d] = _u(o), f = (0, I.useMemo)(() => yu(e), [e]), p = o && !u ? [] : f.map(vu), m = (0, I.useRef)(!0), h = (0, I.useRef)(f), g = zt(() => /* @__PURE__ */ new Map()), _ = (0, I.useRef)(/* @__PURE__ */ new Set()), [v, y] = (0, I.useState)(f), [b, x] = (0, I.useState)(f);
	Bt(() => {
		m.current = !1, h.current = f;
		for (let e = 0; e < b.length; e++) {
			let t = vu(b[e]);
			p.includes(t) ? (g.delete(t), _.current.delete(t)) : g.get(t) !== !0 && g.set(t, !1);
		}
	}, [
		b,
		p.length,
		p.join(`-`)
	]);
	let S = [];
	if (f !== v) {
		let e = [...f];
		for (let t = 0; t < b.length; t++) {
			let n = b[t], r = vu(n);
			p.includes(r) || (e.splice(t, 0, n), S.push(n));
		}
		return a === `wait` && S.length && (e = S), x(yu(e)), y(f), null;
	}
	let { forceRender: C } = (0, I.useContext)(Rt);
	return (0, X.jsx)(X.Fragment, { children: b.map((e) => {
		let v = vu(e), y = o && !u ? !1 : f === b || p.includes(v);
		return (0, X.jsx)(hu, {
			isPresent: y,
			initial: !m.current || n ? void 0 : !1,
			custom: t,
			presenceAffectsLayout: i,
			mode: a,
			root: l,
			onExitComplete: y ? void 0 : () => {
				if (_.current.has(v)) return;
				if (g.has(v)) _.current.add(v), g.set(v, !0);
				else return;
				let e = !0;
				g.forEach((t) => {
					t || (e = !1);
				}), e && (C?.(), x(h.current), o && d?.(), r && r());
			},
			anchorX: s,
			anchorY: c,
			children: e
		}, v);
	}) });
}, xu = (0, I.createContext)({ strict: !1 }), Su = {
	animation: [
		`animate`,
		`variants`,
		`whileHover`,
		`whileTap`,
		`exit`,
		`whileInView`,
		`whileFocus`,
		`whileDrag`
	],
	exit: [`exit`],
	drag: [`drag`, `dragControls`],
	focus: [`whileFocus`],
	hover: [
		`whileHover`,
		`onHoverStart`,
		`onHoverEnd`
	],
	tap: [
		`whileTap`,
		`onTap`,
		`onTapStart`,
		`onTapCancel`
	],
	pan: [
		`onPan`,
		`onPanStart`,
		`onPanSessionStart`,
		`onPanEnd`
	],
	inView: [
		`whileInView`,
		`onViewportEnter`,
		`onViewportLeave`
	],
	layout: [`layout`, `layoutId`]
}, Cu = !1;
function wu() {
	if (Cu) return;
	let e = {};
	for (let t in Su) e[t] = { isEnabled: (e) => Su[t].some((t) => !!e[t]) };
	Fs(e), Cu = !0;
}
function Tu() {
	return wu(), Is();
}
function Eu(e) {
	let t = Tu();
	for (let n in e) t[n] = {
		...t[n],
		...e[n]
	};
	Fs(t);
}
var Du = new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));
function Ou(e) {
	return e.startsWith(`while`) || e.startsWith(`drag`) && e !== `draggable` || e.startsWith(`layout`) || e.startsWith(`onTap`) || e.startsWith(`onPan`) || e.startsWith(`onLayout`) || Du.has(e);
}
var ku = e({ default: () => Au }), Au, ju = n((() => {
	throw Au = {}, Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`);
})), Mu = (e) => !Ou(e);
function Nu(e) {
	typeof e == `function` && (Mu = (t) => t.startsWith(`on`) ? !Ou(t) : e(t));
}
try {
	Nu((ju(), a(ku)).default);
} catch {}
function Pu(e, t, n) {
	let r = {};
	for (let i in e) i === `values` && typeof e.values == `object` || Qa(e[i]) || (Mu(i) || n === !0 && Ou(i) || !t && !Ou(i) || e.draggable && i.startsWith(`onDrag`)) && (r[i] = e[i]);
	return r;
}
var Fu = (0, I.createContext)({});
function Iu(e, t) {
	if (Es(e)) {
		let { initial: t, animate: n } = e;
		return {
			initial: t === !1 || Cs(t) ? t : void 0,
			animate: Cs(n) ? n : void 0
		};
	}
	return e.inherit === !1 ? {} : t;
}
function Lu(e) {
	let { initial: t, animate: n } = Iu(e, (0, I.useContext)(Fu));
	return (0, I.useMemo)(() => ({
		initial: t,
		animate: n
	}), [Ru(t), Ru(n)]);
}
function Ru(e) {
	return Array.isArray(e) ? e.join(` `) : e;
}
var zu = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
function Bu(e, t, n) {
	for (let r in t) !Qa(t[r]) && !gc(r, n) && (e[r] = t[r]);
}
function Vu({ transformTemplate: e }, t) {
	return (0, I.useMemo)(() => {
		let n = zu();
		return uc(n, t, e), Object.assign({}, n.vars, n.style);
	}, [t]);
}
function Hu(e, t) {
	let n = e.style || {}, r = {};
	return Bu(r, n, e), Object.assign(r, Vu(e, t)), r;
}
function Uu(e, t) {
	let n = {}, r = Hu(e, t);
	return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = `none`, r.touchAction = e.drag === !0 ? `none` : `pan-${e.drag === `x` ? `y` : `x`}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
var Wu = () => ({
	...zu(),
	attrs: {}
});
function Z(e, t, n, r) {
	let i = (0, I.useMemo)(() => {
		let n = Wu();
		return wc(n, t, Ec(r), e.transformTemplate, e.style), {
			...n.attrs,
			style: { ...n.style }
		};
	}, [t]);
	if (e.style) {
		let t = {};
		Bu(t, e.style, e), i.style = {
			...t,
			...i.style
		};
	}
	return i;
}
var Gu = [
	`animate`,
	`circle`,
	`defs`,
	`desc`,
	`ellipse`,
	`g`,
	`image`,
	`line`,
	`filter`,
	`marker`,
	`mask`,
	`metadata`,
	`path`,
	`pattern`,
	`polygon`,
	`polyline`,
	`rect`,
	`stop`,
	`switch`,
	`symbol`,
	`svg`,
	`text`,
	`tspan`,
	`use`,
	`view`
];
function Ku(e) {
	return typeof e != `string` || e.includes(`-`) ? !1 : !!(Gu.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function qu(e, t, n, { latestValues: r }, i, a = !1, o) {
	let s = (o ?? Ku(e) ? Z : Uu)(t, r, i, e), c = Pu(t, typeof e == `string`, a), l = e === I.Fragment ? {} : {
		...c,
		...s,
		ref: n
	}, { children: u } = t, d = (0, I.useMemo)(() => Qa(u) ? u.get() : u, [u]);
	return (0, I.createElement)(e, {
		...l,
		children: d
	});
}
function Ju({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
	return {
		latestValues: Yu(n, r, i, e),
		renderState: t()
	};
}
function Yu(e, t, n, r) {
	let i = {}, a = r(e, {});
	for (let e in a) i[e] = kl(a[e]);
	let { initial: o, animate: s } = e, c = Es(e), l = Ds(e);
	t && l && !c && e.inherit !== !1 && (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
	let u = n ? n.initial === !1 : !1;
	u ||= o === !1;
	let d = u ? s : o;
	if (d && typeof d != `boolean` && !Ss(d)) {
		let t = Array.isArray(d) ? d : [d];
		for (let n = 0; n < t.length; n++) {
			let r = Ga(e, t[n]);
			if (r) {
				let { transitionEnd: e, transition: t, ...n } = r;
				for (let e in n) {
					let t = n[e];
					if (Array.isArray(t)) {
						let e = u ? t.length - 1 : 0;
						t = t[e];
					}
					t !== null && (i[e] = t);
				}
				for (let t in e) i[t] = e[t];
			}
		}
	}
	return i;
}
var Xu = (e) => (t, n) => {
	let r = (0, I.useContext)(Fu), i = (0, I.useContext)(Vt), a = () => Ju(e, t, r, i);
	return n ? a() : zt(a);
}, Zu = Xu({
	scrapeMotionValuesFromProps: _c,
	createRenderState: zu
}), Qu = Xu({
	scrapeMotionValuesFromProps: Oc,
	createRenderState: Wu
}), $u = Symbol.for(`motionComponentSymbol`);
function ed(e, t, n) {
	let r = (0, I.useRef)(n);
	(0, I.useInsertionEffect)(() => {
		r.current = n;
	});
	let i = (0, I.useRef)(null);
	return (0, I.useCallback)((n) => {
		n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount());
		let a = r.current;
		if (typeof a == `function`) if (n) {
			let e = a(n);
			typeof e == `function` && (i.current = e);
		} else i.current ? (i.current(), i.current = null) : a(n);
		else a && (a.current = n);
	}, [t]);
}
var td = (0, I.createContext)({});
function nd(e) {
	return e && typeof e == `object` && Object.prototype.hasOwnProperty.call(e, `current`);
}
function rd(e, t, n, r, i, a) {
	let { visualElement: o } = (0, I.useContext)(Fu), s = (0, I.useContext)(xu), c = (0, I.useContext)(Vt), l = (0, I.useContext)(lu), u = l.reducedMotion, d = l.skipAnimations, f = (0, I.useRef)(null), p = (0, I.useRef)(!1);
	r ||= s.renderer, !f.current && r && (f.current = r(e, {
		visualState: t,
		parent: o,
		props: n,
		presenceContext: c,
		blockInitialAnimation: c ? c.initial === !1 : !1,
		reducedMotionConfig: u,
		skipAnimations: d,
		isSVG: a
	}), p.current && f.current && (f.current.manuallyAnimateOnMount = !0));
	let m = f.current, h = (0, I.useContext)(td);
	m && !m.projection && i && (m.type === `html` || m.type === `svg`) && id(f.current, n, i, h);
	let g = (0, I.useRef)(!1);
	(0, I.useInsertionEffect)(() => {
		m && g.current && m.update(n, c);
	});
	let _ = n[no], v = (0, I.useRef)(!!_ && typeof window < `u` && !window.MotionHandoffIsComplete?.(_) && window.MotionHasOptimisedAnimation?.(_));
	return Bt(() => {
		p.current = !0, m && (g.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), v.current && m.animationState && m.animationState.animateChanges());
	}), (0, I.useEffect)(() => {
		m && (!v.current && m.animationState && m.animationState.animateChanges(), v.current &&= (queueMicrotask(() => {
			window.MotionHandoffMarkAsComplete?.(_);
		}), !1), m.enteringChildren = void 0);
	}), m;
}
function id(e, t, n, r) {
	let { layoutId: i, layout: a, drag: o, dragConstraints: s, layoutScroll: c, layoutRoot: l, layoutAnchor: u, layoutCrossfade: d } = t;
	e.projection = new n(e.latestValues, t[`data-framer-portal-id`] ? void 0 : ad(e.parent)), e.projection.setOptions({
		layoutId: i,
		layout: a,
		alwaysMeasureLayout: !!o || s && nd(s),
		visualElement: e,
		animationType: typeof a == `string` ? a : `both`,
		initialPromotionConfig: r,
		crossfade: d,
		layoutScroll: c,
		layoutRoot: l,
		layoutAnchor: u
	});
}
function ad(e) {
	if (e) return e.options.allowProjection === !1 ? ad(e.parent) : e.projection;
}
function od(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
	r && Eu(r);
	let a = n ? n === `svg` : Ku(e), o = a ? Qu : Zu;
	function s(n, s) {
		let c, l = {
			...(0, I.useContext)(lu),
			...n,
			layoutId: sd(n)
		}, { isStatic: u } = l, d = Lu(n), f = o(n, u);
		if (!u && typeof window < `u`) {
			cd(l, r);
			let t = ld(l);
			c = t.MeasureLayout, d.visualElement = rd(e, f, l, i, t.ProjectionNode, a);
		}
		return (0, X.jsxs)(Fu.Provider, {
			value: d,
			children: [c && d.visualElement ? (0, X.jsx)(c, {
				visualElement: d.visualElement,
				...l
			}) : null, qu(e, n, ed(f, d.visualElement, s), f, u, t, a)]
		});
	}
	s.displayName = `motion.${typeof e == `string` ? e : `create(${e.displayName ?? e.name ?? ``})`}`;
	let c = (0, I.forwardRef)(s);
	return c[$u] = e, c;
}
function sd({ layoutId: e }) {
	let t = (0, I.useContext)(Rt).id;
	return t && e !== void 0 ? t + `-` + e : e;
}
function cd(e, t) {
	(0, I.useContext)(xu).strict;
}
function ld(e) {
	let { drag: t, layout: n } = Tu();
	if (!t && !n) return {};
	let r = {
		...t,
		...n
	};
	return {
		MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
		ProjectionNode: r.ProjectionNode
	};
}
function ud(e, t) {
	if (typeof Proxy > `u`) return od;
	let n = /* @__PURE__ */ new Map(), r = (n, r) => od(n, r, e, t);
	return new Proxy((e, t) => r(e, t), { get: (i, a) => a === `create` ? r : (n.has(a) || n.set(a, od(a, void 0, e, t)), n.get(a)) });
}
var dd = (e, t) => t.isSVG ?? Ku(e) ? new kc(t) : new yc(t, { allowProjection: e !== I.Fragment }), fd = class extends zs {
	constructor(e) {
		super(e), e.animationState ||= Ic(e);
	}
	updateAnimationControlsSubscription() {
		let { animate: e } = this.node.getProps();
		Ss(e) && (this.unmountControls = e.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		let { animate: e } = this.node.getProps(), { animate: t } = this.node.prevProps || {};
		e !== t && this.updateAnimationControlsSubscription();
	}
	unmount() {
		this.node.animationState.reset(), this.unmountControls?.();
	}
}, pd = 0, md = {
	animation: { Feature: fd },
	exit: { Feature: class extends zs {
		constructor() {
			super(...arguments), this.id = pd++, this.isExitComplete = !1;
		}
		update() {
			if (!this.node.presenceContext) return;
			let { isPresent: e, onExitComplete: t } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || e === n) return;
			if (e && n === !1) {
				if (this.isExitComplete) {
					let { initial: e, custom: t } = this.node.getProps();
					if (typeof e == `string` || typeof e == `object` && e && !Array.isArray(e)) {
						let n = Ka(this.node, e, t);
						if (n) {
							let { transition: e, transitionEnd: t, ...r } = n;
							for (let e in r) this.node.getValue(e)?.jump(r[e]);
						}
					}
					this.node.animationState.reset(), this.node.animationState.animateChanges();
				} else this.node.animationState.setActive(`exit`, !1);
				this.isExitComplete = !1;
				return;
			}
			let r = this.node.animationState.setActive(`exit`, !e);
			t && !e && r.then(() => {
				this.isExitComplete = !0, t(this.id);
			});
		}
		mount() {
			let { register: e, onExitComplete: t } = this.node.presenceContext || {};
			t && t(this.id), e && (this.unmount = e(this.id));
		}
		unmount() {}
	} }
};
function hd(e) {
	return { point: {
		x: e.pageX,
		y: e.pageY
	} };
}
var gd = (e) => (t) => Bo(t) && e(t, hd(t));
function _d(e, t, n, r) {
	return Tl(e, t, gd(n), r);
}
var vd = ({ current: e }) => e ? e.ownerDocument.defaultView : null, yd = (e, t) => Math.abs(e - t);
function Q(e, t) {
	let n = yd(e.x, t.x), r = yd(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
var bd = /* @__PURE__ */ new Set([`auto`, `scroll`]), xd = class {
	constructor(e, t, { transformPagePoint: n, contextWindow: r = window, dragSnapToOrigin: i = !1, distanceThreshold: a = 3, element: o } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (e) => {
			this.handleScroll(e.target);
		}, this.onWindowScroll = () => {
			this.handleScroll(window);
		}, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Sd(this.lastRawMoveEventInfo, this.transformPagePoint));
			let e = wd(this.lastMoveEventInfo, this.history), t = this.startEvent !== null, n = Q(e.offset, {
				x: 0,
				y: 0
			}) >= this.distanceThreshold;
			if (!t && !n) return;
			let { point: r } = e, { timestamp: i } = jn;
			this.history.push({
				...r,
				timestamp: i
			});
			let { onStart: a, onMove: o } = this.handlers;
			t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e);
		}, this.handlePointerMove = (e, t) => {
			this.lastMoveEvent = e, this.lastRawMoveEventInfo = t, this.lastMoveEventInfo = Sd(t, this.transformPagePoint), R.update(this.updatePoint, !0);
		}, this.handlePointerUp = (e, t) => {
			this.end();
			let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
			if ((this.dragSnapToOrigin || !this.startEvent) && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let a = wd(e.type === `pointercancel` ? this.lastMoveEventInfo : Sd(t, this.transformPagePoint), this.history);
			this.startEvent && n && n(e, a), r && r(e, a);
		}, !Bo(e)) return;
		this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.distanceThreshold = a, this.contextWindow = r || window;
		let s = Sd(hd(e), this.transformPagePoint), { point: c } = s, { timestamp: l } = jn;
		this.history = [{
			...c,
			timestamp: l
		}];
		let { onSessionStart: u } = t;
		u && u(e, wd(s, this.history));
		let d = {
			passive: !0,
			capture: !0
		};
		this.removeListeners = Zt(_d(this.contextWindow, `pointermove`, this.handlePointerMove, d), _d(this.contextWindow, `pointerup`, this.handlePointerUp, d), _d(this.contextWindow, `pointercancel`, this.handlePointerUp, d)), o && this.startScrollTracking(o);
	}
	startScrollTracking(e) {
		let t = e.parentElement;
		for (; t;) {
			let e = getComputedStyle(t);
			(bd.has(e.overflowX) || bd.has(e.overflowY)) && this.scrollPositions.set(t, {
				x: t.scrollLeft,
				y: t.scrollTop
			}), t = t.parentElement;
		}
		this.scrollPositions.set(window, {
			x: window.scrollX,
			y: window.scrollY
		}), window.addEventListener(`scroll`, this.onElementScroll, { capture: !0 }), window.addEventListener(`scroll`, this.onWindowScroll), this.removeScrollListeners = () => {
			window.removeEventListener(`scroll`, this.onElementScroll, { capture: !0 }), window.removeEventListener(`scroll`, this.onWindowScroll);
		};
	}
	handleScroll(e) {
		let t = this.scrollPositions.get(e);
		if (!t) return;
		let n = e === window, r = n ? {
			x: window.scrollX,
			y: window.scrollY
		} : {
			x: e.scrollLeft,
			y: e.scrollTop
		}, i = {
			x: r.x - t.x,
			y: r.y - t.y
		};
		i.x === 0 && i.y === 0 || (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i.x, this.lastMoveEventInfo.point.y += i.y) : this.history.length > 0 && (this.history[0].x -= i.x, this.history[0].y -= i.y), this.scrollPositions.set(e, r), R.update(this.updatePoint, !0));
	}
	updateHandlers(e) {
		this.handlers = e;
	}
	end() {
		this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), An(this.updatePoint);
	}
};
function Sd(e, t) {
	return t ? { point: t(e.point) } : e;
}
function Cd(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function wd({ point: e }, t) {
	return {
		point: e,
		delta: Cd(e, Ed(t)),
		offset: Cd(e, Td(t)),
		velocity: Dd(t, .1)
	};
}
function Td(e) {
	return e[0];
}
function Ed(e) {
	return e[e.length - 1];
}
function Dd(e, t) {
	if (e.length < 2) return {
		x: 0,
		y: 0
	};
	let n = e.length - 1, r = null, i = Ed(e);
	for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > en(t)));) n--;
	if (!r) return {
		x: 0,
		y: 0
	};
	r === e[0] && e.length > 2 && i.timestamp - r.timestamp > en(t) * 2 && (r = e[1]);
	let a = tn(i.timestamp - r.timestamp);
	if (a === 0) return {
		x: 0,
		y: 0
	};
	let o = {
		x: (i.x - r.x) / a,
		y: (i.y - r.y) / a
	};
	return o.x === Infinity && (o.x = 0), o.y === Infinity && (o.y = 0), o;
}
function Od(e, { min: t, max: n }, r) {
	return t !== void 0 && e < t ? e = r ? B(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? B(n, e, r.max) : Math.min(e, n)), e;
}
function kd(e, t, n) {
	return {
		min: t === void 0 ? void 0 : e.min + t,
		max: n === void 0 ? void 0 : e.max + n - (e.max - e.min)
	};
}
function Ad(e, { top: t, left: n, bottom: r, right: i }) {
	return {
		x: kd(e.x, n, i),
		y: kd(e.y, t, r)
	};
}
function jd(e, t) {
	let n = t.min - e.min, r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
		min: n,
		max: r
	};
}
function Md(e, t) {
	return {
		x: jd(e.x, t.x),
		y: jd(e.y, t.y)
	};
}
function $(e, t) {
	let n = .5, r = Kc(e), i = Kc(t);
	return i > r ? n = Qt(t.min, t.max - r, e.min) : r > i && (n = Qt(e.min, e.max - i, t.min)), Wt(0, 1, n);
}
function Nd(e, t) {
	let n = {};
	return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
var Pd = .35;
function Fd(e = Pd) {
	return e === !1 ? e = 0 : e === !0 && (e = Pd), {
		x: Id(e, `left`, `right`),
		y: Id(e, `top`, `bottom`)
	};
}
function Id(e, t, n) {
	return {
		min: Ld(e, t),
		max: Ld(e, n)
	};
}
function Ld(e, t) {
	return typeof e == `number` ? e : e[t] || 0;
}
var Rd = /* @__PURE__ */ new WeakMap(), zd = class {
	constructor(e) {
		this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = bs(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
	}
	start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
		let { presenceContext: r } = this.visualElement;
		if (r && r.isPresent === !1) return;
		let i = (e) => {
			t && this.snapToCursor(hd(e).point), this.stopAnimation();
		}, a = (e, t) => {
			let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
			if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = Fo(n), !this.openDragLock)) return;
			this.latestPointerEvent = e, this.latestPanInfo = t, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ml((e) => {
				let t = this.getAxisMotionValue(e).get() || 0;
				if (ir.test(t)) {
					let { projection: n } = this.visualElement;
					if (n && n.layout) {
						let r = n.layout.layoutBox[e];
						r && (t = Kc(r) * (parseFloat(t) / 100));
					}
				}
				this.originPoint[e] = t;
			}), i && R.update(() => i(e, t), !1, !0), eo(this.visualElement, `transform`);
			let { animationState: a } = this.visualElement;
			a && a.setActive(`whileDrag`, !0);
		}, o = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t;
			let { dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: a } = this.getProps();
			if (!n && !this.openDragLock) return;
			let { offset: o } = t;
			if (r && this.currentDirection === null) {
				this.currentDirection = Ud(o), this.currentDirection !== null && i && i(this.currentDirection);
				return;
			}
			this.updateAxis(`x`, t.point, o), this.updateAxis(`y`, t.point, o), this.visualElement.render(), a && R.update(() => a(e, t), !1, !0);
		}, s = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t, this.stop(e, t), this.latestPointerEvent = null, this.latestPanInfo = null;
		}, c = () => {
			let { dragSnapToOrigin: e } = this.getProps();
			(e || this.constraints) && this.startAnimation({
				x: 0,
				y: 0
			});
		}, { dragSnapToOrigin: l } = this.getProps();
		this.panSession = new xd(e, {
			onSessionStart: i,
			onStart: a,
			onMove: o,
			onSessionEnd: s,
			resumeAnimation: c
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: l,
			distanceThreshold: n,
			contextWindow: vd(this.visualElement),
			element: this.visualElement.current
		});
	}
	stop(e, t) {
		let n = e || this.latestPointerEvent, r = t || this.latestPanInfo, i = this.isDragging;
		if (this.cancel(), !i || !r || !n) return;
		let { velocity: a } = r;
		this.startAnimation(a);
		let { onDragEnd: o } = this.getProps();
		o && R.postRender(() => o(n, r));
	}
	cancel() {
		this.isDragging = !1;
		let { projection: e, animationState: t } = this.visualElement;
		e && (e.isAnimationBlocked = !1), this.endPanSession();
		let { dragPropagation: n } = this.getProps();
		!n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t && t.setActive(`whileDrag`, !1);
	}
	endPanSession() {
		this.panSession && this.panSession.end(), this.panSession = void 0;
	}
	updateAxis(e, t, n) {
		let { drag: r } = this.getProps();
		if (!n || !Hd(e, r, this.currentDirection)) return;
		let i = this.getAxisMotionValue(e), a = this.originPoint[e] + n[e];
		this.constraints && this.constraints[e] && (a = Od(a, this.constraints[e], this.elastic[e])), i.set(a);
	}
	resolveConstraints() {
		let { dragConstraints: e, dragElastic: t } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, r = this.constraints;
		e && nd(e) ? this.constraints ||= this.resolveRefConstraints() : e && n ? this.constraints = Ad(n.layoutBox, e) : this.constraints = !1, this.elastic = Fd(t), r !== this.constraints && !nd(e) && n && this.constraints && !this.hasMutatedConstraints && ml((e) => {
			this.constraints !== !1 && this.getAxisMotionValue(e) && (this.constraints[e] = Nd(n.layoutBox[e], this.constraints[e]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
		if (!e || !nd(e)) return !1;
		let n = e.current, { projection: r } = this.visualElement;
		if (!r || !r.layout) return !1;
		r.root && (r.root.scroll = void 0, r.root.updateScroll());
		let i = oc(n, r.root, this.visualElement.getTransformPagePoint()), a = Md(r.layout.layoutBox, i);
		if (t) {
			let e = t(Vs(a));
			this.hasMutatedConstraints = !!e, e && (a = Bs(e));
		}
		return a;
	}
	startAnimation(e) {
		let { drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: o } = this.getProps(), s = this.constraints || {}, c = ml((o) => {
			if (!Hd(o, t, this.currentDirection)) return;
			let c = s && s[o] || {};
			(a === !0 || a === o) && (c = {
				min: 0,
				max: 0
			});
			let l = r ? 200 : 1e6, u = r ? 40 : 1e7, d = {
				type: `inertia`,
				velocity: n ? e[o] : 0,
				bounceStiffness: l,
				bounceDamping: u,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...i,
				...c
			};
			return this.startAxisValueAnimation(o, d);
		});
		return Promise.all(c).then(o);
	}
	startAxisValueAnimation(e, t) {
		let n = this.getAxisMotionValue(e);
		return eo(this.visualElement, e), n.start(Ba(e, n, 0, t, this.visualElement, !1));
	}
	stopAnimation() {
		ml((e) => this.getAxisMotionValue(e).stop());
	}
	getAxisMotionValue(e) {
		let t = `_drag${e.toUpperCase()}`;
		return this.visualElement.getProps()[t] || this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0);
	}
	snapToCursor(e) {
		ml((t) => {
			let { drag: n } = this.getProps();
			if (!Hd(t, n, this.currentDirection)) return;
			let { projection: r } = this.visualElement, i = this.getAxisMotionValue(t);
			if (r && r.layout) {
				let { min: n, max: a } = r.layout.layoutBox[t], o = i.get() || 0;
				i.set(e[t] - B(n, a, .5) + o);
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		let { drag: e, dragConstraints: t } = this.getProps(), { projection: n } = this.visualElement;
		if (!nd(t) || !n || !this.constraints) return;
		this.stopAnimation();
		let r = {
			x: 0,
			y: 0
		};
		ml((e) => {
			let t = this.getAxisMotionValue(e);
			if (t && this.constraints !== !1) {
				let n = t.get();
				r[e] = $({
					min: n,
					max: n
				}, this.constraints[e]);
			}
		});
		let { transformTemplate: i } = this.visualElement.getProps();
		this.visualElement.current.style.transform = i ? i({}, ``) : `none`, n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), ml((t) => {
			if (!Hd(t, e, null)) return;
			let n = this.getAxisMotionValue(t), { min: i, max: a } = this.constraints[t];
			n.set(B(i, a, r[t]));
		}), this.visualElement.render();
	}
	addListeners() {
		if (!this.visualElement.current) return;
		Rd.set(this.visualElement, this);
		let e = this.visualElement.current, t = _d(e, `pointerdown`, (t) => {
			let { drag: n, dragListener: r = !0 } = this.getProps(), i = t.target, a = i !== e && Wo(i);
			n && r && !a && this.start(t);
		}), n, r = () => {
			let { dragConstraints: t } = this.getProps();
			nd(t) && t.current && (this.constraints = this.resolveRefConstraints(), n ||= Vd(e, t.current, () => this.scalePositionWithinConstraints()));
		}, { projection: i } = this.visualElement, a = i.addEventListener(`measure`, r);
		i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), R.read(r);
		let o = Tl(window, `resize`, () => this.scalePositionWithinConstraints()), s = i.addEventListener(`didUpdate`, (({ delta: e, hasLayoutChanged: t }) => {
			this.isDragging && t && (ml((t) => {
				let n = this.getAxisMotionValue(t);
				n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate));
			}), this.visualElement.render());
		}));
		return () => {
			o(), t(), a(), s && s(), n && n();
		};
	}
	getProps() {
		let e = this.visualElement.getProps(), { drag: t = !1, dragDirectionLock: n = !1, dragPropagation: r = !1, dragConstraints: i = !1, dragElastic: a = Pd, dragMomentum: o = !0 } = e;
		return {
			...e,
			drag: t,
			dragDirectionLock: n,
			dragPropagation: r,
			dragConstraints: i,
			dragElastic: a,
			dragMomentum: o
		};
	}
};
function Bd(e) {
	let t = !0;
	return () => {
		if (t) {
			t = !1;
			return;
		}
		e();
	};
}
function Vd(e, t, n) {
	let r = fs(e, Bd(n)), i = fs(t, Bd(n));
	return () => {
		r(), i();
	};
}
function Hd(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function Ud(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? n = `y` : Math.abs(e.x) > t && (n = `x`), n;
}
var Wd = class extends zs {
	constructor(e) {
		super(e), this.removeGroupControls = Xt, this.removeListeners = Xt, this.controls = new zd(e);
	}
	mount() {
		let { dragControls: e } = this.node.getProps();
		e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Xt;
	}
	update() {
		let { dragControls: e } = this.node.getProps(), { dragControls: t } = this.node.prevProps || {};
		e !== t && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
	}
}, Gd = (e) => (t, n) => {
	e && R.update(() => e(t, n), !1, !0);
}, Kd = class extends zs {
	constructor() {
		super(...arguments), this.removePointerDownListener = Xt;
	}
	onPointerDown(e) {
		this.session = new xd(e, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: vd(this.node)
		});
	}
	createPanHandlers() {
		let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
		return {
			onSessionStart: Gd(e),
			onStart: Gd(t),
			onMove: Gd(n),
			onEnd: (e, t) => {
				delete this.session, r && R.postRender(() => r(e, t));
			}
		};
	}
	mount() {
		this.removePointerDownListener = _d(this.node.current, `pointerdown`, (e) => this.onPointerDown(e));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}, qd = !1, Jd = class extends I.Component {
	componentDidMount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props, { projection: i } = e;
		i && (t.group && t.group.add(i), n && n.register && r && n.register(i), qd && i.root.didUpdate(), i.addEventListener(`animationComplete`, () => {
			this.safeToRemove();
		}), i.setOptions({
			...i.options,
			layoutDependency: this.props.layoutDependency,
			onExitComplete: () => this.safeToRemove()
		})), jl.hasEverUpdated = !0;
	}
	getSnapshotBeforeUpdate(e) {
		let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props, { projection: a } = n;
		return a ? (a.isPresent = i, e.layoutDependency !== t && a.setOptions({
			...a.options,
			layoutDependency: t
		}), qd = !0, r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i ? a.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? a.promote() : a.relegate() || R.postRender(() => {
			let e = a.getStack();
			(!e || !e.members.length) && this.safeToRemove();
		})), null) : null;
	}
	componentDidUpdate() {
		let { visualElement: e, layoutAnchor: t } = this.props, { projection: n } = e;
		n && (n.options.layoutAnchor = t, n.root.didUpdate(), jo.postRender(() => {
			!n.currentAnimation && n.isLead() && this.safeToRemove();
		}));
	}
	componentWillUnmount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props, { projection: r } = e;
		qd = !0, r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r));
	}
	safeToRemove() {
		let { safeToRemove: e } = this.props;
		e && e();
	}
	render() {
		return null;
	}
};
function Yd(e) {
	let [t, n] = _u(), r = (0, I.useContext)(Rt);
	return (0, X.jsx)(Jd, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: (0, I.useContext)(td),
		isPresent: t,
		safeToRemove: n
	});
}
var Xd = {
	pan: { Feature: Kd },
	drag: {
		Feature: Wd,
		ProjectionNode: cu,
		MeasureLayout: Yd
	}
};
function Zd(e, t, n) {
	let { props: r } = e;
	e.animationState && r.whileHover && e.animationState.setActive(`whileHover`, n === `Start`);
	let i = r[`onHover` + n];
	i && R.postRender(() => i(t, hd(t)));
}
var Qd = class extends zs {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = Ro(e, (e, t) => (Zd(this.node, t, `Start`), (e) => Zd(this.node, e, `End`))));
	}
	unmount() {}
}, $d = class extends zs {
	constructor() {
		super(...arguments), this.isActive = !1;
	}
	onFocus() {
		let e = !1;
		try {
			e = this.node.current.matches(`:focus-visible`);
		} catch {
			e = !0;
		}
		!e || !this.node.animationState || (this.node.animationState.setActive(`whileFocus`, !0), this.isActive = !0);
	}
	onBlur() {
		!this.isActive || !this.node.animationState || (this.node.animationState.setActive(`whileFocus`, !1), this.isActive = !1);
	}
	mount() {
		this.unmount = Zt(Tl(this.node.current, `focus`, () => this.onFocus()), Tl(this.node.current, `blur`, () => this.onBlur()));
	}
	unmount() {}
};
function ef(e, t, n) {
	let { props: r } = e;
	if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
	e.animationState && r.whileTap && e.animationState.setActive(`whileTap`, n === `Start`);
	let i = r[`onTap` + (n === `End` ? `` : n)];
	i && R.postRender(() => i(t, hd(t)));
}
var tf = class extends zs {
	mount() {
		let { current: e } = this.node;
		if (!e) return;
		let { globalTapTarget: t, propagate: n } = this.node.props;
		this.unmount = Zo(e, (e, t) => (ef(this.node, t, `Start`), (e, { success: t }) => ef(this.node, e, t ? `End` : `Cancel`)), {
			useGlobalTarget: t,
			stopPropagation: n?.tap === !1
		});
	}
	unmount() {}
}, nf = /* @__PURE__ */ new WeakMap(), rf = /* @__PURE__ */ new WeakMap(), af = (e) => {
	let t = nf.get(e.target);
	t && t(e);
}, of = (e) => {
	e.forEach(af);
};
function sf({ root: e, ...t }) {
	let n = e || document;
	rf.has(n) || rf.set(n, {});
	let r = rf.get(n), i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(of, {
		root: e,
		...t
	})), r[i];
}
function cf(e, t, n) {
	let r = sf(t);
	return nf.set(e, n), r.observe(e), () => {
		nf.delete(e), r.unobserve(e);
	};
}
var lf = {
	some: 0,
	all: 1
}, uf = class extends zs {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
	}
	startObserver() {
		this.stopObserver?.();
		let { viewport: e = {} } = this.node.getProps(), { root: t, margin: n, amount: r = `some`, once: i } = e, a = {
			root: t ? t.current : void 0,
			rootMargin: n,
			threshold: typeof r == `number` ? r : lf[r]
		}, o = (e) => {
			let { isIntersecting: t } = e;
			if (this.isInView === t || (this.isInView = t, i && !t && this.hasEnteredView)) return;
			t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive(`whileInView`, t);
			let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(), a = t ? n : r;
			a && a(e);
		};
		this.stopObserver = cf(this.node.current, a, o);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > `u`) return;
		let { props: e, prevProps: t } = this.node;
		[
			`amount`,
			`margin`,
			`root`
		].some(df(e, t)) && this.startObserver();
	}
	unmount() {
		this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
	}
};
function df({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
var ff = {
	inView: { Feature: uf },
	tap: { Feature: tf },
	focus: { Feature: $d },
	hover: { Feature: Qd }
}, pf = { layout: {
	ProjectionNode: cu,
	MeasureLayout: Yd
} }, mf = ud({
	...md,
	...ff,
	...Xd,
	...pf
}, dd);
function hf() {
	!As.current && Ms();
	let [e] = (0, I.useState)(ks.current);
	return e;
}
var gf = mf, _f = l(() => {
	let e = Number(w(`iter`) || void 0);
	return Number.isNaN(e) ? {
		type: `none`,
		iter: null
	} : {
		type: `visualizer`,
		iter: e
	};
}), vf = l(() => {
	let e = w(`api`);
	return e === null && (e = g(`api`)), e === null || e === `browser` ? { type: `browser` } : (() => {
		try {
			return D.warn?.(e), {
				type: `http`,
				url: e || `http://localhost:8080`,
				error: !1,
				rawUrl: e
			};
		} catch {
			return D.error?.(`Invalid API URL: ${e}. Using fallback URL: ${d}`), {
				type: `http`,
				url: d,
				error: !0,
				rawUrl: e
			};
		}
	})();
}), yf = l(null, (e, t, n) => {
	window.location.search = x(`api`, n);
}), bf = l((e) => ({
	origin: e(_f),
	api: e(vf)
})), xf = function(e) {
	return e.INIT = `AppState/INIT`, e.JS_INPUT = `AppState/JS_INPUT`, e.TERMINATED = `AppState/TERMINATED`, e.DEBUG_READY = `AppState/DEBUG_READY`, e.DEBUG_READY_AT_FRONT = `AppState/DEBUG_READY_AT_FRONT`, e;
}({}), Sf = function(e) {
	return e.Spec = `BreakpointType/Spec`, e.Js = `BreakpointType/Js`, e;
}({}), Cf = function(e) {
	return e[e.BREAKED = 0] = `BREAKED`, e[e.TERMINATED = 1] = `TERMINATED`, e[e.SUCCEED = 2] = `SUCCEED`, e[e.REACHEDFRONT = 3] = `REACHEDFRONT`, e;
}({}), wf = [
	`meta/iter`,
	`meta/debugString`,
	`meta/version`
], Tf = [`spec/func`, `spec/version`], Ef = [`breakpoint`], Df = [
	`exec/run`,
	`exec/resumeFromIter`,
	`exec/backToProvenance`,
	`exec/specStep`,
	`exec/specStepOver`,
	`exec/specStepOut`,
	`exec/specStepBack`,
	`exec/specStepBackOut`,
	`exec/specStepBackOver`,
	`exec/specContinue`,
	`exec/specRewind`,
	`exec/irStep`,
	`exec/irStepOver`,
	`exec/irStepOut`,
	`exec/esAstStep`,
	`exec/esStatementStep`,
	`exec/esStepOver`,
	`exec/esStepOut`,
	`exec/stepCntPlus`,
	`exec/stepCntMinus`,
	`exec/instCntPlus`,
	`exec/instCntMinus`
];
[
	...Tf,
	...Ef,
	...Df,
	...wf
];
var Of = {
	reprint: null,
	callstack: [],
	stepCnt: 0,
	result: Cf.REACHEDFRONT,
	ast: null,
	heap: {},
	instCnt: 0
}, kf = l([!1, null]), Af = l((e) => e(kf), (e, t, n) => {
	t(kf, n);
	let [, r] = n;
	r === null ? t(jf, null) : r?.ast && t(jf, r?.ast);
}), jf = l(null);
function Mf(e) {
	return new Promise((t) => setTimeout(t, e));
}
var Nf = l((e) => {
	let [t, n] = e(Af);
	return [
		t,
		n ?? Of,
		n === null
	];
}, async (e, t, n) => {
	await Mf(0), t(Wf, xf.DEBUG_READY), n === null ? (t(Af, [!1, null]), t(Wf, xf.JS_INPUT), t(If, 0)) : (t(Af, [!0, e(Af)[1]]), n.then((e) => {
		switch (t(Af, [!1, e]), t(If, 0), e.result) {
			case Cf.BREAKED:
				b.info(`Execution stopped at breakpoint`), t(Wf, xf.DEBUG_READY);
				break;
			case Cf.TERMINATED:
				b.info(`Terminated`), t(Wf, xf.TERMINATED);
				break;
			case Cf.SUCCEED: break;
			case Cf.REACHEDFRONT:
				b.info(`Execution reached the front`), t(Wf, xf.DEBUG_READY_AT_FRONT);
				break;
		}
	}));
}), Pf = l((e) => {
	let [, { reprint: t }] = e(Nf);
	return t;
}), Ff = l((e) => {
	let [, { callstack: t }] = e(Nf);
	return Hf(t);
}), If = l(0), Lf = l((e) => e(Ff)[e(If)]), Rf = l((e) => {
	let [, { heap: t }] = e(Nf);
	return t;
}), zf = l((e) => C(e(Rf))), Bf = l((e) => v(e(Rf)));
l((e) => {
	let [, { instCnt: t }] = e(Nf);
	return t;
});
var Vf = l((e) => {
	let [, { stepCnt: t }] = e(Nf);
	return t;
});
function Hf(e) {
	return e.map(([e, t, n, r, i, a, [o, s]]) => ({
		fid: e,
		steps: t,
		isExit: n,
		env: r,
		algoDot: a,
		visited: i,
		jsRange: [o, s]
	}));
}
var Uf = l((e) => {
	let t = e(If), n = e(Ff);
	for (let e = t; e < n.length; e++) {
		let t = n?.[e];
		if (t?.jsRange) {
			let [e, n] = t.jsRange;
			if (e !== -1 && n !== -1) return [e, n];
		}
	}
	return [-1, -1];
}), Wf = l(xf.INIT), Gf = l(!1), Kf = l(w(`prog`) ?? u), qf = l(!1), Jf = l(!1), Yf = l(null), Xf = l((e) => {
	let [t] = e(Nf), n = e(Yf), r = e(Wf) === xf.INIT;
	return n !== null && n < 0 ? `not_connected` : n === null || n > 0 || t ? r ? `init` : `busy` : `connected`;
}), Zf = l(0);
function Qf({ adaptive: e = !1, className: t, icon: n }) {
	let r = _(Zf);
	return (0, X.jsxs)(`div`, {
		className: m(`size-full flex flex-row gap-[0.1em] [&>svg]:size-[1em] [&>svg]:text-lg items-center rounded-lg text-xs uppercase font-700 font-mono`, t, e ? `justify-center md:justify-start` : `justify-start md:justify-start`),
		children: [n, (0, X.jsxs)(`span`, {
			className: `grow truncate text-center hidden md:inline`,
			children: [Math.floor(r * 100), `%`]
		})]
	});
}
function $f({ adaptive: e = !1, className: t, icon: n, text: r }) {
	return (0, X.jsxs)(`div`, {
		className: m(`size-full flex flex-row gap-[0.1em] [&>svg]:size-[1em] [&>svg]:text-lg items-center rounded-lg text-xs uppercase font-700 font-mono`, t, e ? `justify-center md:justify-start` : `justify-start md:justify-start`),
		children: [n, (0, X.jsx)(`span`, {
			className: `grow truncate text-center hidden md:inline`,
			children: r
		})]
	});
}
function ep({ type: e, busyState: t, adaptive: n = !1 }) {
	if (e === `http`) switch (t) {
		case `init`: return (0, X.jsx)($f, {
			adaptive: n,
			className: `text-yellow-500`,
			icon: (0, X.jsx)(yt, { className: `animate-spin` }),
			text: `Init`,
			content: `Loading...`
		});
		case `connected`: return (0, X.jsx)($f, {
			adaptive: n,
			className: `text-green-500`,
			icon: (0, X.jsx)(kt, {}),
			text: `Ready`,
			content: `Connected to ESMeta backend`
		});
		case `busy`: return (0, X.jsx)($f, {
			adaptive: n,
			className: `text-blue-500`,
			icon: (0, X.jsx)(xt, { className: `animate-spin` }),
			text: `Busy`,
			content: `ESMeta backend is working`
		});
		case `not_connected`: return (0, X.jsx)($f, {
			adaptive: n,
			className: `text-red-500`,
			icon: (0, X.jsx)(Ot, {}),
			text: `Lost`,
			content: `Lost connection to ESMeta backend`
		});
	}
	switch (t) {
		case `init`: return (0, X.jsx)(Qf, {
			adaptive: n,
			className: `text-yellow-500`,
			icon: (0, X.jsx)(dt, { className: `animate-spin` }),
			text: `Build`,
			content: `Preparing ESMeta backend on Web Worker`
		});
		case `connected`: return (0, X.jsx)($f, {
			adaptive: n,
			className: `text-green-500`,
			icon: (0, X.jsx)(ct, {}),
			text: `Ready`,
			content: `ESMeta backend is ready`
		});
		case `busy`: return (0, X.jsx)($f, {
			adaptive: n,
			className: `text-blue-500`,
			icon: (0, X.jsx)(xt, { className: `animate-spin` }),
			text: `Busy`,
			content: `ESMeta backend is working`
		});
		case `not_connected`: return (0, X.jsx)($f, {
			adaptive: n,
			className: `text-red-500`,
			icon: (0, X.jsx)(lt, {}),
			text: `Lost`,
			content: `ESMeta backend is not available; maybe crashed`
		});
	}
}
var tp = {
	initial: {
		opacity: 0,
		y: 8
	},
	animate: {
		opacity: 1,
		y: 0
	},
	exit: {
		opacity: 0,
		y: 8
	}
};
function np({ adaptive: e = !1 }) {
	let t = _(bf), n = _(Xf);
	return (0, X.jsx)(`div`, {
		className: `relative w-8 md:w-16 h-7`,
		children: (0, X.jsx)(bu, {
			initial: !1,
			children: (0, X.jsx)(gf.div, {
				className: `absolute size-full`,
				initial: tp.initial,
				animate: tp.animate,
				exit: tp.exit,
				transition: {
					type: `tween`,
					ease: `easeInOut`,
					duration: .0625
				},
				children: (0, X.jsx)(ep, {
					adaptive: e,
					busyState: n,
					type: t.api.type
				})
			}, n)
		})
	});
}
function rp({ children: e, loading: t, error: n, intentional: r, recoverable: i, unexpected: a }) {
	return (0, X.jsx)(ip, {
		fallback: n,
		errorLevel: r ? `intentional` : i ? `recoverable` : a ? `unexpected` : `fatal`,
		children: (0, X.jsx)(I.Suspense, {
			fallback: t,
			children: e
		})
	});
}
var ip = class extends I.Component {
	constructor(e) {
		super(e), this.state = { hasError: !1 };
	}
	static getDerivedStateFromError(e) {
		return {
			hasError: !0,
			__error: e
		};
	}
	componentDidCatch(e, t) {
		switch (this.props.errorLevel) {
			case `intentional`: break;
			case `recoverable`:
				D.info?.(`ErrorBoundary caught`, this.props.errorLevel, `-level error:`, e, t.componentStack);
				break;
			case `unexpected`:
				D.error?.(`ErrorBoundary caught`, this.props.errorLevel, `-level error:`, e, t.componentStack);
				break;
			case `fatal`:
				D.error?.(`ErrorBoundary caught`, this.props.errorLevel, `-level error:`, e, t.componentStack);
				break;
			default:
				D.error?.(`ErrorBoundary caught`, `unknown error level:`, e, t.componentStack);
				break;
		}
	}
	render() {
		return this.state.hasError ? this.props.fallback ?? null : this.props.children;
	}
};
function ap(e) {
	let t = e.width / 2, n = e.height / 2;
	return {
		top: e.clientY - n,
		right: e.clientX + t,
		bottom: e.clientY + n,
		left: e.clientX - t
	};
}
function op(e, t) {
	return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function sp({ disabled: e = !1 } = {}) {
	let t = (0, I.useRef)(null), [n, r] = (0, I.useState)(!1), i = ye(), a = F(() => {
		t.current = null, r(!1), i.dispose();
	}), o = F((e) => {
		if (i.dispose(), t.current === null) {
			t.current = e.currentTarget, r(!0);
			{
				let n = xe(e.currentTarget);
				i.addEventListener(n, `pointerup`, a, !1), i.addEventListener(n, `pointermove`, (e) => {
					if (t.current) {
						let n = ap(e);
						r(op(n, t.current.getBoundingClientRect()));
					}
				}, !1), i.addEventListener(n, `pointercancel`, a, !1);
			}
		}
	});
	return {
		pressed: n,
		pressProps: e ? {} : {
			onPointerDown: o,
			onPointerUp: a,
			onClick: a
		}
	};
}
var cp = `button`;
function lp(e, t) {
	let n = he(), { disabled: r = n || !1, autoFocus: i = !1, ...a } = e, { isFocusVisible: o, focusProps: s } = me({ autoFocus: i }), { isHovered: c, hoverProps: l } = te({ isDisabled: r }), { pressed: u, pressProps: d } = sp({ disabled: r }), f = ue({
		ref: t,
		type: a.type ?? `button`,
		disabled: r || void 0,
		autoFocus: i
	}, s, l, d), p = re({
		disabled: r,
		hover: c,
		focus: o,
		active: u,
		autofocus: i
	});
	return je()({
		ourProps: f,
		theirProps: a,
		slot: p,
		defaultTag: cp,
		name: `Button`
	});
}
var up = de(lp), dp = (0, I.createContext)(() => {});
function fp({ value: e, children: t }) {
	return I.createElement(dp.Provider, { value: e }, t);
}
function pp(e, t) {
	return e !== null && t !== null && typeof e == `object` && typeof t == `object` && `id` in e && `id` in t ? e.id === t.id : e === t;
}
function mp(e = pp) {
	return (0, I.useCallback)((t, n) => {
		if (typeof e == `string`) {
			let r = e;
			return t?.[r] === n?.[r];
		}
		return e(t, n);
	}, [e]);
}
var hp = class extends Map {
	constructor(e) {
		super(), this.factory = e;
	}
	get(e) {
		let t = super.get(e);
		return t === void 0 && (t = this.factory(e), this.set(e, t)), t;
	}
}, gp = Object.defineProperty, _p = (e, t, n) => t in e ? gp(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, vp = (e, t, n) => (_p(e, typeof t == `symbol` ? t : t + ``, n), n), yp = (e, t, n) => {
	if (!t.has(e)) throw TypeError(`Cannot ` + n);
}, bp = (e, t, n) => (yp(e, t, `read from private field`), n ? n.call(e) : t.get(e)), xp = (e, t, n) => {
	if (t.has(e)) throw TypeError(`Cannot add the same private member more than once`);
	t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Sp = (e, t, n, r) => (yp(e, t, `write to private field`), r ? r.call(e, n) : t.set(e, n), n), Cp, wp, Tp, Ep = class {
	constructor(e) {
		xp(this, Cp, {}), xp(this, wp, new hp(() => /* @__PURE__ */ new Set())), xp(this, Tp, /* @__PURE__ */ new Set()), vp(this, `disposables`, N()), Sp(this, Cp, e), Se.isServer && this.disposables.microTask(() => {
			this.dispose();
		});
	}
	dispose() {
		this.disposables.dispose();
	}
	get state() {
		return bp(this, Cp);
	}
	subscribe(e, t) {
		if (Se.isServer) return () => {};
		let n = {
			selector: e,
			callback: t,
			current: e(bp(this, Cp))
		};
		return bp(this, Tp).add(n), this.disposables.add(() => {
			bp(this, Tp).delete(n);
		});
	}
	on(e, t) {
		return Se.isServer ? () => {} : (bp(this, wp).get(e).add(t), this.disposables.add(() => {
			bp(this, wp).get(e).delete(t);
		}));
	}
	send(e) {
		let t = this.reduce(bp(this, Cp), e);
		if (t !== bp(this, Cp)) {
			Sp(this, Cp, t);
			for (let e of bp(this, Tp)) {
				let t = e.selector(bp(this, Cp));
				Dp(e.current, t) || (e.current = t, e.callback(t));
			}
			for (let t of bp(this, wp).get(e.type)) t(bp(this, Cp), e);
		}
	}
};
Cp = /* @__PURE__ */ new WeakMap(), wp = /* @__PURE__ */ new WeakMap(), Tp = /* @__PURE__ */ new WeakMap();
function Dp(e, t) {
	return Object.is(e, t) ? !0 : typeof e != `object` || !e || typeof t != `object` || !t ? !1 : Array.isArray(e) && Array.isArray(t) ? e.length === t.length ? Op(e[Symbol.iterator](), t[Symbol.iterator]()) : !1 : e instanceof Map && t instanceof Map || e instanceof Set && t instanceof Set ? e.size === t.size ? Op(e.entries(), t.entries()) : !1 : kp(e) && kp(t) ? Op(Object.entries(e)[Symbol.iterator](), Object.entries(t)[Symbol.iterator]()) : !1;
}
function Op(e, t) {
	do {
		let n = e.next(), r = t.next();
		if (n.done && r.done) return !0;
		if (n.done || r.done || !Object.is(n.value, r.value)) return !1;
	} while (!0);
}
function kp(e) {
	if (Object.prototype.toString.call(e) !== `[object Object]`) return !1;
	let t = Object.getPrototypeOf(e);
	return t === null || Object.getPrototypeOf(t) === null;
}
var Ap = Object.defineProperty, jp = (e, t, n) => t in e ? Ap(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Mp = (e, t, n) => (jp(e, typeof t == `symbol` ? t : t + ``, n), n), Np = ((e) => (e[e.Push = 0] = `Push`, e[e.Pop = 1] = `Pop`, e))(Np || {}), Pp = {
	0(e, t) {
		let n = t.id, r = e.stack, i = e.stack.indexOf(n);
		if (i !== -1) {
			let t = e.stack.slice();
			return t.splice(i, 1), t.push(n), r = t, {
				...e,
				stack: r
			};
		}
		return {
			...e,
			stack: [...e.stack, n]
		};
	},
	1(e, t) {
		let n = t.id, r = e.stack.indexOf(n);
		if (r === -1) return e;
		let i = e.stack.slice();
		return i.splice(r, 1), {
			...e,
			stack: i
		};
	}
}, Fp = class e extends Ep {
	constructor() {
		super(...arguments), Mp(this, `actions`, {
			push: (e) => this.send({
				type: 0,
				id: e
			}),
			pop: (e) => this.send({
				type: 1,
				id: e
			})
		}), Mp(this, `selectors`, {
			isTop: (e, t) => e.stack[e.stack.length - 1] === t,
			inStack: (e, t) => e.stack.includes(t)
		});
	}
	static new() {
		return new e({ stack: [] });
	}
	reduce(e, t) {
		return se(t.type, Pp, e, t);
	}
}, Ip = new hp(() => Fp.new()), Lp = i(((e) => {
	var t = r();
	function n(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var i = typeof Object.is == `function` ? Object.is : n, a = t.useSyncExternalStore, o = t.useRef, s = t.useEffect, c = t.useMemo, l = t.useDebugValue;
	e.useSyncExternalStoreWithSelector = function(e, t, n, r, u) {
		var d = o(null);
		if (d.current === null) {
			var f = {
				hasValue: !1,
				value: null
			};
			d.current = f;
		} else f = d.current;
		d = c(function() {
			function e(e) {
				if (!a) {
					if (a = !0, o = e, e = r(e), u !== void 0 && f.hasValue) {
						var t = f.value;
						if (u(t, e)) return s = t;
					}
					return s = e;
				}
				if (t = s, i(o, e)) return t;
				var n = r(e);
				return u !== void 0 && u(t, n) ? (o = e, t) : (o = e, s = n);
			}
			var a = !1, o, s, c = n === void 0 ? null : n;
			return [function() {
				return e(t());
			}, c === null ? void 0 : function() {
				return e(c());
			}];
		}, [
			t,
			n,
			r,
			u
		]);
		var p = a(e, d[0], d[1]);
		return s(function() {
			f.hasValue = !0, f.value = p;
		}, [p]), l(p), p;
	};
})), Rp = i(((e, t) => {
	t.exports = Lp();
}))();
function zp(e, t, n = Dp) {
	return (0, Rp.useSyncExternalStoreWithSelector)(F((t) => e.subscribe(Bp, t)), F(() => e.state), F(() => e.state), F(t), n);
}
function Bp(e) {
	return e;
}
function Vp(e, t) {
	let n = (0, I.useId)(), r = Ip.get(t), [i, a] = zp(r, (0, I.useCallback)((e) => [r.selectors.isTop(e, n), r.selectors.inStack(e, n)], [r, n]));
	return ve(() => {
		if (e) return r.actions.push(n), () => r.actions.pop(n);
	}, [
		r,
		e,
		n
	]), e ? a ? i : !0 : !1;
}
var Hp = /* @__PURE__ */ new Map(), Up = /* @__PURE__ */ new Map();
function Wp(e) {
	let t = Up.get(e) ?? 0;
	return Up.set(e, t + 1), t === 0 ? (Hp.set(e, {
		"aria-hidden": e.getAttribute(`aria-hidden`),
		inert: e.inert
	}), e.setAttribute(`aria-hidden`, `true`), e.inert = !0, () => Gp(e)) : () => Gp(e);
}
function Gp(e) {
	let t = Up.get(e) ?? 1;
	if (t === 1 ? Up.delete(e) : Up.set(e, t - 1), t !== 1) return;
	let n = Hp.get(e);
	n && (n[`aria-hidden`] === null ? e.removeAttribute(`aria-hidden`) : e.setAttribute(`aria-hidden`, n[`aria-hidden`]), e.inert = n.inert, Hp.delete(e));
}
function Kp(e, { allowed: t, disallowed: n } = {}) {
	let r = Vp(e, `inert-others`);
	ve(() => {
		if (!r) return;
		let e = N();
		for (let t of n?.() ?? []) t && e.add(Wp(t));
		let i = t?.() ?? [];
		for (let t of i) {
			if (!t) continue;
			let n = xe(t);
			if (!n) continue;
			let r = t.parentElement;
			for (; r && r !== n.body;) {
				for (let t of r.children) i.some((e) => t.contains(e)) || e.add(Wp(t));
				r = r.parentElement;
			}
		}
		return e.dispose;
	}, [
		r,
		t,
		n
	]);
}
function qp(e, t, n) {
	let r = oe((e) => {
		let t = e.getBoundingClientRect();
		t.x === 0 && t.y === 0 && t.width === 0 && t.height === 0 && n();
	});
	(0, I.useEffect)(() => {
		if (!e) return;
		let n = t === null ? null : Pe(t) ? t : t.current;
		if (!n) return;
		let i = N();
		if (typeof ResizeObserver < `u`) {
			let e = new ResizeObserver(() => r.current(n));
			e.observe(n), i.add(() => e.disconnect());
		}
		if (typeof IntersectionObserver < `u`) {
			let e = new IntersectionObserver(() => r.current(n));
			e.observe(n), i.add(() => e.disconnect());
		}
		return () => i.dispose();
	}, [
		t,
		r,
		e
	]);
}
var Jp = [
	`[contentEditable=true]`,
	`[tabindex]`,
	`a[href]`,
	`area[href]`,
	`button:not([disabled])`,
	`iframe`,
	`input:not([disabled])`,
	`select:not([disabled])`,
	`details>summary`,
	`textarea:not([disabled])`
].map((e) => `${e}:not([tabindex='-1'])`).join(`,`), Yp = [`[data-autofocus]`].map((e) => `${e}:not([tabindex='-1'])`).join(`,`), Xp = ((e) => (e[e.First = 1] = `First`, e[e.Previous = 2] = `Previous`, e[e.Next = 4] = `Next`, e[e.Last = 8] = `Last`, e[e.WrapAround = 16] = `WrapAround`, e[e.NoScroll = 32] = `NoScroll`, e[e.AutoFocus = 64] = `AutoFocus`, e))(Xp || {}), Zp = ((e) => (e[e.Error = 0] = `Error`, e[e.Overflow = 1] = `Overflow`, e[e.Success = 2] = `Success`, e[e.Underflow = 3] = `Underflow`, e))(Zp || {}), Qp = ((e) => (e[e.Previous = -1] = `Previous`, e[e.Next = 1] = `Next`, e))(Qp || {});
function $p(e = document.body) {
	return e == null ? [] : Array.from(e.querySelectorAll(Jp)).sort((e, t) => Math.sign((e.tabIndex || 2 ** 53 - 1) - (t.tabIndex || 2 ** 53 - 1)));
}
function em(e = document.body) {
	return e == null ? [] : Array.from(e.querySelectorAll(Yp)).sort((e, t) => Math.sign((e.tabIndex || 2 ** 53 - 1) - (t.tabIndex || 2 ** 53 - 1)));
}
var tm = ((e) => (e[e.Strict = 0] = `Strict`, e[e.Loose = 1] = `Loose`, e))(tm || {});
function nm(e, t = 0) {
	return e === xe(e)?.body ? !1 : se(t, {
		0() {
			return e.matches(Jp);
		},
		1() {
			let t = e;
			for (; t !== null;) {
				if (t.matches(Jp)) return !0;
				t = t.parentElement;
			}
			return !1;
		}
	});
}
var rm = ((e) => (e[e.Keyboard = 0] = `Keyboard`, e[e.Mouse = 1] = `Mouse`, e))(rm || {});
typeof window < `u` && typeof document < `u` && (document.addEventListener(`keydown`, (e) => {
	e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = ``);
}, !0), document.addEventListener(`click`, (e) => {
	e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = ``);
}, !0));
function im(e) {
	e?.focus({ preventScroll: !0 });
}
var am = [`textarea`, `input`].join(`,`);
function om(e) {
	return (e?.matches)?.call(e, am) ?? !1;
}
function sm(e, t = (e) => e) {
	return e.slice().sort((e, n) => {
		let r = t(e), i = t(n);
		if (r === null || i === null) return 0;
		let a = r.compareDocumentPosition(i);
		return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
	});
}
function cm(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: i = [] } = {}) {
	let a = Array.isArray(e) ? e.length > 0 ? be(e[0]) : document : be(e), o = Array.isArray(e) ? n ? sm(e) : e : t & 64 ? em(e) : $p(e);
	i.length > 0 && o.length > 1 && (o = o.filter((e) => !i.some((t) => t != null && `current` in t ? t?.current === e : t === e))), r ??= a?.activeElement;
	let s = (() => {
		if (t & 5) return 1;
		if (t & 10) return -1;
		throw Error(`Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last`);
	})(), c = (() => {
		if (t & 1) return 0;
		if (t & 2) return Math.max(0, o.indexOf(r)) - 1;
		if (t & 4) return Math.max(0, o.indexOf(r)) + 1;
		if (t & 8) return o.length - 1;
		throw Error(`Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last`);
	})(), l = t & 32 ? { preventScroll: !0 } : {}, u = 0, d = o.length, f;
	do {
		if (u >= d || u + d <= 0) return 0;
		let e = c + u;
		if (t & 16) e = (e + d) % d;
		else {
			if (e < 0) return 3;
			if (e >= d) return 1;
		}
		f = o[e], f?.focus(l), u += s;
	} while (f !== P(f));
	return t & 6 && om(f) && f.select(), 2;
}
function lm() {
	return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function um() {
	return /Android/gi.test(window.navigator.userAgent);
}
function dm() {
	return lm() || um();
}
function fm(e, t, n, r) {
	let i = oe(n);
	(0, I.useEffect)(() => {
		if (!e) return;
		function n(e) {
			i.current(e);
		}
		return document.addEventListener(t, n, r), () => document.removeEventListener(t, n, r);
	}, [
		e,
		t,
		r
	]);
}
function pm(e, t, n, r) {
	let i = oe(n);
	(0, I.useEffect)(() => {
		if (!e) return;
		function n(e) {
			i.current(e);
		}
		return window.addEventListener(t, n, r), () => window.removeEventListener(t, n, r);
	}, [
		e,
		t,
		r
	]);
}
var mm = 30;
function hm(e, t, n) {
	let r = oe(n), i = (0, I.useCallback)(function(e, n) {
		if (e.defaultPrevented) return;
		let i = n(e);
		if (i === null || !i.getRootNode().contains(i) || !i.isConnected) return;
		let a = function e(t) {
			return typeof t == `function` ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t];
		}(t);
		for (let t of a) if (t !== null && (t.contains(i) || e.composed && e.composedPath().includes(t))) return;
		return !nm(i, tm.Loose) && i.tabIndex !== -1 && e.preventDefault(), r.current(e, i);
	}, [r, t]), a = (0, I.useRef)(null);
	fm(e, `pointerdown`, (e) => {
		dm() || (a.current = e.composedPath?.call(e)?.[0] || e.target);
	}, !0), fm(e, `pointerup`, (e) => {
		if (dm() || !a.current) return;
		let t = a.current;
		return a.current = null, i(e, () => t);
	}, !0);
	let o = (0, I.useRef)({
		x: 0,
		y: 0
	});
	fm(e, `touchstart`, (e) => {
		o.current.x = e.touches[0].clientX, o.current.y = e.touches[0].clientY;
	}, !0), fm(e, `touchend`, (e) => {
		let t = {
			x: e.changedTouches[0].clientX,
			y: e.changedTouches[0].clientY
		};
		if (!(Math.abs(t.x - o.current.x) >= mm || Math.abs(t.y - o.current.y) >= mm)) return i(e, () => De(e.target) ? e.target : null);
	}, !0), pm(e, `blur`, (e) => i(e, () => He(window.document.activeElement) ? window.document.activeElement : null), !0);
}
function gm(...e) {
	return (0, I.useMemo)(() => xe(...e), [...e]);
}
function _m(e, t, n, r) {
	let i = oe(n);
	(0, I.useEffect)(() => {
		e ??= window;
		function n(e) {
			i.current(e);
		}
		return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
	}, [
		e,
		t,
		r
	]);
}
function vm(e) {
	return (0, I.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function ym(e, t) {
	let n = e(), r = /* @__PURE__ */ new Set();
	return {
		getSnapshot() {
			return n;
		},
		subscribe(e) {
			return r.add(e), () => r.delete(e);
		},
		dispatch(e, ...i) {
			let a = t[e].call(n, ...i);
			a && (n = a, r.forEach((e) => e()));
		}
	};
}
function bm() {
	let e;
	return {
		before({ doc: t }) {
			let n = t.documentElement, r = t.defaultView ?? window;
			e = Math.max(0, r.innerWidth - n.clientWidth);
		},
		after({ doc: t, d: n }) {
			let r = t.documentElement, i = Math.max(0, r.clientWidth - r.offsetWidth), a = Math.max(0, e - i);
			n.style(r, `paddingRight`, `${a}px`);
		}
	};
}
function xm() {
	return lm() ? { before({ doc: e, d: t, meta: n }) {
		function r(e) {
			for (let t of n().containers) for (let n of t()) if (n.contains(e)) return !0;
			return !1;
		}
		t.microTask(() => {
			if (window.getComputedStyle(e.documentElement).scrollBehavior !== `auto`) {
				let n = N();
				n.style(e.documentElement, `scrollBehavior`, `auto`), t.add(() => t.microTask(() => n.dispose()));
			}
			let n = window.scrollY ?? window.pageYOffset, i = null;
			t.addEventListener(e, `click`, (t) => {
				if (De(t.target)) try {
					let n = t.target.closest(`a`);
					if (!n) return;
					let { hash: a } = new URL(n.href), o = e.querySelector(a);
					De(o) && !r(o) && (i = o);
				} catch {}
			}, !0), t.group((n) => {
				t.addEventListener(e, `touchstart`, (e) => {
					if (n.dispose(), De(e.target) && ke(e.target)) if (r(e.target)) {
						let t = e.target;
						for (; t.parentElement && r(t.parentElement);) t = t.parentElement;
						n.style(t, `overscrollBehavior`, `contain`);
					} else n.style(e.target, `touchAction`, `none`);
				});
			}), t.addEventListener(e, `touchmove`, (e) => {
				if (De(e.target)) {
					if (Oe(e.target)) return;
					if (r(e.target)) {
						let t = e.target;
						for (; t.parentElement && t.dataset.headlessuiPortal !== `` && !(t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth);) t = t.parentElement;
						t.dataset.headlessuiPortal === `` && e.preventDefault();
					} else e.preventDefault();
				}
			}, { passive: !1 }), t.add(() => {
				let e = window.scrollY ?? window.pageYOffset;
				n !== e && window.scrollTo(0, n), i && i.isConnected && (i.scrollIntoView({ block: `nearest` }), i = null);
			});
		});
	} } : {};
}
function Sm() {
	return { before({ doc: e, d: t }) {
		t.style(e.documentElement, `overflow`, `hidden`);
	} };
}
function Cm(e) {
	let t = {};
	for (let n of e) Object.assign(t, n(t));
	return t;
}
var wm = ym(() => /* @__PURE__ */ new Map(), {
	PUSH(e, t) {
		let n = this.get(e) ?? {
			doc: e,
			count: 0,
			d: N(),
			meta: /* @__PURE__ */ new Set(),
			computedMeta: {}
		};
		return n.count++, n.meta.add(t), n.computedMeta = Cm(n.meta), this.set(e, n), this;
	},
	POP(e, t) {
		let n = this.get(e);
		return n && (n.count--, n.meta.delete(t), n.computedMeta = Cm(n.meta)), this;
	},
	SCROLL_PREVENT(e) {
		let t = {
			doc: e.doc,
			d: e.d,
			meta() {
				return e.computedMeta;
			}
		}, n = [
			xm(),
			bm(),
			Sm()
		];
		n.forEach(({ before: e }) => e?.(t)), n.forEach(({ after: e }) => e?.(t));
	},
	SCROLL_ALLOW({ d: e }) {
		e.dispose();
	},
	TEARDOWN({ doc: e }) {
		this.delete(e);
	}
});
wm.subscribe(() => {
	let e = wm.getSnapshot(), t = /* @__PURE__ */ new Map();
	for (let [n] of e) t.set(n, n.documentElement.style.overflow);
	for (let n of e.values()) {
		let e = t.get(n.doc) === `hidden`, r = n.count !== 0;
		(r && !e || !r && e) && wm.dispatch(n.count > 0 ? `SCROLL_PREVENT` : `SCROLL_ALLOW`, n), n.count === 0 && wm.dispatch(`TEARDOWN`, n);
	}
});
function Tm(e, t, n = () => ({ containers: [] })) {
	let r = vm(wm), i = t ? r.get(t) : void 0, a = i ? i.count > 0 : !1;
	return ve(() => {
		if (!(!t || !e)) return wm.dispatch(`PUSH`, t, n), () => wm.dispatch(`POP`, t, n);
	}, [e, t]), a;
}
function Em(e, t, n = () => [document.body]) {
	Tm(Vp(e, `scroll-lock`), t, (e) => ({ containers: [...e.containers ?? [], n] }));
}
function Dm(e = 0) {
	let [t, n] = (0, I.useState)(e);
	return {
		flags: t,
		setFlag: (0, I.useCallback)((e) => n(e), []),
		addFlag: (0, I.useCallback)((e) => n((t) => t | e), []),
		hasFlag: (0, I.useCallback)((e) => (t & e) === e, [t]),
		removeFlag: (0, I.useCallback)((e) => n((t) => t & ~e), []),
		toggleFlag: (0, I.useCallback)((e) => n((t) => t ^ e), [])
	};
}
typeof process < `u` && typeof globalThis < `u` && typeof Element < `u` && (process == null ? void 0 : {})?.NODE_ENV === `test` && (Element == null ? void 0 : Element.prototype)?.getAnimations === void 0 && (Element.prototype.getAnimations = function() {
	return console.warn([
		"Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.",
		"Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.",
		``,
		`Example usage:`,
		"```js",
		`import { mockAnimationsApi } from 'jsdom-testing-mocks'`,
		`mockAnimationsApi()`,
		"```"
	].join(`
`)), [];
});
var Om = ((e) => (e[e.None = 0] = `None`, e[e.Closed = 1] = `Closed`, e[e.Enter = 2] = `Enter`, e[e.Leave = 4] = `Leave`, e))(Om || {});
function km(e) {
	let t = {};
	for (let n in e) e[n] === !0 && (t[`data-${n}`] = ``);
	return t;
}
function Am(e, t, n, r) {
	let [i, a] = (0, I.useState)(n), { hasFlag: o, addFlag: s, removeFlag: c } = Dm(e && i ? 3 : 0), l = (0, I.useRef)(!1), u = (0, I.useRef)(!1);
	return ve(() => {
		var i;
		if (e) {
			if (n && a(!0), !t) {
				n && s(3);
				return;
			}
			return (i = r?.start) == null || i.call(r, n), jm(t, {
				inFlight: l,
				prepare() {
					u.current ? u.current = !1 : u.current = l.current, l.current = !0, !u.current && (n ? (s(3), c(4)) : (s(4), c(2)));
				},
				run() {
					u.current ? n ? (c(3), s(4)) : (c(4), s(3)) : n ? c(1) : s(1);
				},
				done() {
					var e;
					u.current && Pm(t) || (l.current = !1, c(7), n || a(!1), (e = r?.end) == null || e.call(r, n));
				}
			});
		}
	}, [
		e,
		n,
		t,
		ye()
	]), e ? [i, {
		closed: o(1),
		enter: o(2),
		leave: o(4),
		transition: o(2) || o(4)
	}] : [n, {
		closed: void 0,
		enter: void 0,
		leave: void 0,
		transition: void 0
	}];
}
function jm(e, { prepare: t, run: n, done: r, inFlight: i }) {
	let a = N();
	return Nm(e, {
		prepare: t,
		inFlight: i
	}), a.nextFrame(() => {
		n(), a.requestAnimationFrame(() => {
			a.add(Mm(e, r));
		});
	}), a.dispose;
}
function Mm(e, t) {
	let n = N();
	if (!e) return n.dispose;
	let r = !1;
	n.add(() => {
		r = !0;
	});
	let i = e.getAnimations?.call(e).filter((e) => e instanceof CSSTransition) ?? [];
	return i.length === 0 ? (t(), n.dispose) : (Promise.allSettled(i.map((e) => e.finished)).then(() => {
		r || t();
	}), n.dispose);
}
function Nm(e, { inFlight: t, prepare: n }) {
	if (t != null && t.current) {
		n();
		return;
	}
	let r = e.style.transition;
	e.style.transition = `none`, n(), e.offsetHeight, e.style.transition = r;
}
function Pm(e) {
	return (e.getAnimations?.call(e) ?? []).some((e) => e instanceof CSSTransition && e.playState !== `finished`);
}
function Fm(e, t) {
	let n = (0, I.useRef)([]), r = F(e);
	(0, I.useEffect)(() => {
		let e = [...n.current];
		for (let [i, a] of t.entries()) if (n.current[i] !== a) {
			let i = r(t, e);
			return n.current = t, i;
		}
	}, [r, ...t]);
}
var Im = t(s(), 1);
function Lm() {
	return typeof window < `u`;
}
function Rm(e) {
	return Vm(e) ? (e.nodeName || ``).toLowerCase() : `#document`;
}
function zm(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Bm(e) {
	return ((Vm(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Vm(e) {
	return Lm() ? e instanceof Node || e instanceof zm(e).Node : !1;
}
function Hm(e) {
	return Lm() ? e instanceof Element || e instanceof zm(e).Element : !1;
}
function Um(e) {
	return Lm() ? e instanceof HTMLElement || e instanceof zm(e).HTMLElement : !1;
}
function Wm(e) {
	return !Lm() || typeof ShadowRoot > `u` ? !1 : e instanceof ShadowRoot || e instanceof zm(e).ShadowRoot;
}
var Gm = /* @__PURE__ */ new Set([`inline`, `contents`]);
function Km(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = ah(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Gm.has(i);
}
var qm = /* @__PURE__ */ new Set([
	`table`,
	`td`,
	`th`
]);
function Jm(e) {
	return qm.has(Rm(e));
}
var Ym = [`:popover-open`, `:modal`];
function Xm(e) {
	return Ym.some((t) => {
		try {
			return e.matches(t);
		} catch {
			return !1;
		}
	});
}
var Zm = [
	`transform`,
	`translate`,
	`scale`,
	`rotate`,
	`perspective`
], Qm = [
	`transform`,
	`translate`,
	`scale`,
	`rotate`,
	`perspective`,
	`filter`
], $m = [
	`paint`,
	`layout`,
	`strict`,
	`content`
];
function eh(e) {
	let t = nh(), n = Hm(e) ? ah(e) : e;
	return Zm.some((e) => n[e] ? n[e] !== `none` : !1) || (n.containerType ? n.containerType !== `normal` : !1) || !t && (n.backdropFilter ? n.backdropFilter !== `none` : !1) || !t && (n.filter ? n.filter !== `none` : !1) || Qm.some((e) => (n.willChange || ``).includes(e)) || $m.some((e) => (n.contain || ``).includes(e));
}
function th(e) {
	let t = sh(e);
	for (; Um(t) && !ih(t);) {
		if (eh(t)) return t;
		if (Xm(t)) return null;
		t = sh(t);
	}
	return null;
}
function nh() {
	return typeof CSS > `u` || !CSS.supports ? !1 : CSS.supports(`-webkit-backdrop-filter`, `none`);
}
var rh = /* @__PURE__ */ new Set([
	`html`,
	`body`,
	`#document`
]);
function ih(e) {
	return rh.has(Rm(e));
}
function ah(e) {
	return zm(e).getComputedStyle(e);
}
function oh(e) {
	return Hm(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function sh(e) {
	if (Rm(e) === `html`) return e;
	let t = e.assignedSlot || e.parentNode || Wm(e) && e.host || Bm(e);
	return Wm(t) ? t.host : t;
}
function ch(e) {
	let t = sh(e);
	return ih(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Um(t) && Km(t) ? t : ch(t);
}
function lh(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = ch(e), i = r === e.ownerDocument?.body, a = zm(r);
	if (i) {
		let e = uh(a);
		return t.concat(a, a.visualViewport || [], Km(r) ? r : [], e && n ? lh(e) : []);
	}
	return t.concat(r, lh(r, [], n));
}
function uh(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
var dh = [
	`top`,
	`right`,
	`bottom`,
	`left`
], fh = Math.min, ph = Math.max, mh = Math.round, hh = Math.floor, gh = (e) => ({
	x: e,
	y: e
}), _h = {
	left: `right`,
	right: `left`,
	bottom: `top`,
	top: `bottom`
}, vh = {
	start: `end`,
	end: `start`
};
function yh(e, t, n) {
	return ph(e, fh(t, n));
}
function bh(e, t) {
	return typeof e == `function` ? e(t) : e;
}
function xh(e) {
	return e.split(`-`)[0];
}
function Sh(e) {
	return e.split(`-`)[1];
}
function Ch(e) {
	return e === `x` ? `y` : `x`;
}
function wh(e) {
	return e === `y` ? `height` : `width`;
}
var Th = /* @__PURE__ */ new Set([`top`, `bottom`]);
function Eh(e) {
	return Th.has(xh(e)) ? `y` : `x`;
}
function Dh(e) {
	return Ch(Eh(e));
}
function Oh(e, t, n) {
	n === void 0 && (n = !1);
	let r = Sh(e), i = Dh(e), a = wh(i), o = i === `x` ? r === (n ? `end` : `start`) ? `right` : `left` : r === `start` ? `bottom` : `top`;
	return t.reference[a] > t.floating[a] && (o = Lh(o)), [o, Lh(o)];
}
function kh(e) {
	let t = Lh(e);
	return [
		Ah(e),
		t,
		Ah(t)
	];
}
function Ah(e) {
	return e.replace(/start|end/g, (e) => vh[e]);
}
var jh = [`left`, `right`], Mh = [`right`, `left`], Nh = [`top`, `bottom`], Ph = [`bottom`, `top`];
function Fh(e, t, n) {
	switch (e) {
		case `top`:
		case `bottom`: return n ? t ? Mh : jh : t ? jh : Mh;
		case `left`:
		case `right`: return t ? Nh : Ph;
		default: return [];
	}
}
function Ih(e, t, n, r) {
	let i = Sh(e), a = Fh(xh(e), n === `start`, r);
	return i && (a = a.map((e) => e + `-` + i), t && (a = a.concat(a.map(Ah)))), a;
}
function Lh(e) {
	return e.replace(/left|right|bottom|top/g, (e) => _h[e]);
}
function Rh(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function zh(e) {
	return typeof e == `number` ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Rh(e);
}
function Bh(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
function Vh(e, t, n) {
	let { reference: r, floating: i } = e, a = Eh(t), o = Dh(t), s = wh(o), c = xh(t), l = a === `y`, u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case `top`:
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case `bottom`:
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case `right`:
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case `left`:
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	switch (Sh(t)) {
		case `start`:
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case `end`:
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
var Hh = async (e, t, n) => {
	let { placement: r = `bottom`, strategy: i = `absolute`, middleware: a = [], platform: o } = n, s = a.filter(Boolean), c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = Vh(l, r, c), f = r, p = {}, m = 0;
	for (let n = 0; n < s.length; n++) {
		let { name: a, fn: h } = s[n], { x: g, y: _, data: v, reset: y } = await h({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: p,
			rects: l,
			platform: o,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = g ?? u, d = _ ?? d, p = {
			...p,
			[a]: {
				...p[a],
				...v
			}
		}, y && m <= 50 && (m++, typeof y == `object` && (y.placement && (f = y.placement), y.rects && (l = y.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : y.rects), {x: u, y: d} = Vh(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: p
	};
};
async function Uh(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = `clippingAncestors`, rootBoundary: l = `viewport`, elementContext: u = `floating`, altBoundary: d = !1, padding: f = 0 } = bh(t, e), p = zh(f), m = o[d ? u === `floating` ? `reference` : `floating` : u], h = Bh(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === `floating` ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = Bh(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var Wh = (e) => ({
	name: `arrow`,
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = bh(e, t) || {};
		if (l == null) return {};
		let d = zh(u), f = {
			x: n,
			y: r
		}, p = Dh(i), m = wh(p), h = await o.getDimensions(l), g = p === `y`, _ = g ? `top` : `left`, v = g ? `bottom` : `right`, y = g ? `clientHeight` : `clientWidth`, b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = fh(d[_], T), D = fh(d[v], T), O = E, k = C - h[m] - D, A = C / 2 - h[m] / 2 + w, ee = yh(O, A, k), te = !c.arrow && Sh(i) != null && A !== ee && a.reference[m] / 2 - (A < O ? E : D) - h[m] / 2 < 0, ne = te ? A < O ? A - O : A - k : 0;
		return {
			[p]: f[p] + ne,
			data: {
				[p]: ee,
				centerOffset: A - ee - ne,
				...te && { alignmentOffset: ne }
			},
			reset: te
		};
	}
}), Gh = function(e) {
	return e === void 0 && (e = {}), {
		name: `flip`,
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = `bestFit`, fallbackAxisSideDirection: p = `none`, flipAlignment: m = !0, ...h } = bh(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = xh(r), _ = Eh(o), v = xh(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Lh(o)] : kh(o)), x = p !== `none`;
			!d && x && b.push(...Ih(o, m, p, y));
			let S = [o, ...b], C = await Uh(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = Oh(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === `alignment` && _ !== Eh(t)) || T.every((e) => Eh(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case `bestFit`: {
						let e = T.filter((e) => {
							if (x) {
								let t = Eh(e.placement);
								return t === _ || t === `y`;
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case `initialPlacement`:
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function Kh(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function qh(e) {
	return dh.some((t) => e[t] >= 0);
}
var Jh = function(e) {
	return e === void 0 && (e = {}), {
		name: `hide`,
		options: e,
		async fn(t) {
			let { rects: n } = t, { strategy: r = `referenceHidden`, ...i } = bh(e, t);
			switch (r) {
				case `referenceHidden`: {
					let e = Kh(await Uh(t, {
						...i,
						elementContext: `reference`
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: qh(e)
					} };
				}
				case `escaped`: {
					let e = Kh(await Uh(t, {
						...i,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: qh(e)
					} };
				}
				default: return {};
			}
		}
	};
}, Yh = /* @__PURE__ */ new Set([`left`, `top`]);
async function Xh(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = xh(n), s = Sh(n), c = Eh(n) === `y`, l = Yh.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = bh(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == `number` ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == `number` && (p = s === `end` ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var Zh = function(e) {
	return e === void 0 && (e = 0), {
		name: `offset`,
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Xh(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, Qh = function(e) {
	return e === void 0 && (e = {}), {
		name: `shift`,
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i } = t, { mainAxis: a = !0, crossAxis: o = !1, limiter: s = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...c } = bh(e, t), l = {
				x: n,
				y: r
			}, u = await Uh(t, c), d = Eh(xh(i)), f = Ch(d), p = l[f], m = l[d];
			if (a) {
				let e = f === `y` ? `top` : `left`, t = f === `y` ? `bottom` : `right`, n = p + u[e], r = p - u[t];
				p = yh(n, p, r);
			}
			if (o) {
				let e = d === `y` ? `top` : `left`, t = d === `y` ? `bottom` : `right`, n = m + u[e], r = m - u[t];
				m = yh(n, m, r);
			}
			let h = s.fn({
				...t,
				[f]: p,
				[d]: m
			});
			return {
				...h,
				data: {
					x: h.x - n,
					y: h.y - r,
					enabled: {
						[f]: a,
						[d]: o
					}
				}
			};
		}
	};
}, $h = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = bh(e, t), u = {
				x: n,
				y: r
			}, d = Eh(i), f = Ch(d), p = u[f], m = u[d], h = bh(s, t), g = typeof h == `number` ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...h
			};
			if (c) {
				let e = f === `y` ? `height` : `width`, t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === `y` ? `width` : `height`, t = Yh.has(xh(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, eg = function(e) {
	return e === void 0 && (e = {}), {
		name: `size`,
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = bh(e, t), u = await Uh(t, l), d = xh(i), f = Sh(i), p = Eh(i) === `y`, { width: m, height: h } = a.floating, g, _;
			d === `top` || d === `bottom` ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? `start` : `end`) ? `left` : `right`) : (_ = d, g = f === `end` ? `top` : `bottom`);
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = fh(h - u[g], v), x = fh(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = ph(u.left, 0), t = ph(u.right, 0), n = ph(u.top, 0), r = ph(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : ph(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : ph(u.top, u.bottom));
			}
			await c({
				...t,
				availableWidth: w,
				availableHeight: C
			});
			let T = await o.getDimensions(s.floating);
			return m !== T.width || h !== T.height ? { reset: { rects: !0 } } : {};
		}
	};
};
function tg(e) {
	let t = ah(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Um(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = mh(n) !== a || mh(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function ng(e) {
	return Hm(e) ? e : e.contextElement;
}
function rg(e) {
	let t = ng(e);
	if (!Um(t)) return gh(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = tg(t), o = (a ? mh(n.width) : n.width) / r, s = (a ? mh(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var ig = gh(0);
function ag(e) {
	let t = zm(e);
	return !nh() || !t.visualViewport ? ig : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function og(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== zm(e) ? !1 : t;
}
function sg(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = ng(e), o = gh(1);
	t && (r ? Hm(r) && (o = rg(r)) : o = rg(e));
	let s = og(a, n, r) ? ag(a) : gh(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = zm(a), t = r && Hm(r) ? zm(r) : r, n = e, i = uh(n);
		for (; i && r && t !== n;) {
			let e = rg(i), t = i.getBoundingClientRect(), r = ah(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = zm(i), i = uh(n);
		}
	}
	return Bh({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function cg(e, t) {
	let n = oh(e).scrollLeft;
	return t ? t.left + n : sg(Bm(e)).left + n;
}
function lg(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - cg(e, n),
		y: n.top + t.scrollTop
	};
}
function ug(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === `fixed`, o = Bm(r), s = t ? Xm(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = gh(1), u = gh(0), d = Um(r);
	if ((d || !d && !a) && ((Rm(r) !== `body` || Km(o)) && (c = oh(r)), Um(r))) {
		let e = sg(r);
		l = rg(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? lg(o, c) : gh(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function dg(e) {
	return Array.from(e.getClientRects());
}
function fg(e) {
	let t = Bm(e), n = oh(e), r = e.ownerDocument.body, i = ph(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = ph(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + cg(e), s = -n.scrollTop;
	return ah(r).direction === `rtl` && (o += ph(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var pg = 25;
function mg(e, t) {
	let n = zm(e), r = Bm(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = nh();
		(!e || e && t === `fixed`) && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = cg(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === `CSS1Compat` && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= pg && (a -= o);
	} else l <= pg && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
var hg = /* @__PURE__ */ new Set([`absolute`, `fixed`]);
function gg(e, t) {
	let n = sg(e, !0, t === `fixed`), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Um(e) ? rg(e) : gh(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function _g(e, t, n) {
	let r;
	if (t === `viewport`) r = mg(e, n);
	else if (t === `document`) r = fg(Bm(e));
	else if (Hm(t)) r = gg(t, n);
	else {
		let n = ag(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return Bh(r);
}
function vg(e, t) {
	let n = sh(e);
	return n === t || !Hm(n) || ih(n) ? !1 : ah(n).position === `fixed` || vg(n, t);
}
function yg(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = lh(e, [], !1).filter((e) => Hm(e) && Rm(e) !== `body`), i = null, a = ah(e).position === `fixed`, o = a ? sh(e) : e;
	for (; Hm(o) && !ih(o);) {
		let t = ah(o), n = eh(o);
		!n && t.position === `fixed` && (i = null), (a ? !n && !i : !n && t.position === `static` && i && hg.has(i.position) || Km(o) && !n && vg(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = sh(o);
	}
	return t.set(e, r), r;
}
function bg(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === `clippingAncestors` ? Xm(t) ? [] : yg(t, this._c) : [].concat(n), r], o = a[0], s = a.reduce((e, n) => {
		let r = _g(t, n, i);
		return e.top = ph(r.top, e.top), e.right = fh(r.right, e.right), e.bottom = fh(r.bottom, e.bottom), e.left = ph(r.left, e.left), e;
	}, _g(t, o, i));
	return {
		width: s.right - s.left,
		height: s.bottom - s.top,
		x: s.left,
		y: s.top
	};
}
function xg(e) {
	let { width: t, height: n } = tg(e);
	return {
		width: t,
		height: n
	};
}
function Sg(e, t, n) {
	let r = Um(t), i = Bm(t), a = n === `fixed`, o = sg(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = gh(0);
	function l() {
		c.x = cg(i);
	}
	if (r || !r && !a) if ((Rm(t) !== `body` || Km(i)) && (s = oh(t)), r) {
		let e = sg(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? lg(i, s) : gh(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function Cg(e) {
	return ah(e).position === `static`;
}
function wg(e, t) {
	if (!Um(e) || ah(e).position === `fixed`) return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Bm(e) === n && (n = n.ownerDocument.body), n;
}
function Tg(e, t) {
	let n = zm(e);
	if (Xm(e)) return n;
	if (!Um(e)) {
		let t = sh(e);
		for (; t && !ih(t);) {
			if (Hm(t) && !Cg(t)) return t;
			t = sh(t);
		}
		return n;
	}
	let r = wg(e, t);
	for (; r && Jm(r) && Cg(r);) r = wg(r, t);
	return r && ih(r) && Cg(r) && !eh(r) ? n : r || th(e) || n;
}
var Eg = async function(e) {
	let t = this.getOffsetParent || Tg, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: Sg(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Dg(e) {
	return ah(e).direction === `rtl`;
}
var Og = {
	convertOffsetParentRelativeRectToViewportRelativeRect: ug,
	getDocumentElement: Bm,
	getClippingRect: bg,
	getOffsetParent: Tg,
	getElementRects: Eg,
	getClientRects: dg,
	getDimensions: xg,
	getScale: rg,
	isElement: Hm,
	isRTL: Dg
};
function kg(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Ag(e, t) {
	let n = null, r, i = Bm(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = hh(d), h = hh(i.clientWidth - (u + f)), g = hh(i.clientHeight - (d + p)), _ = hh(u), v = {
			rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`,
			threshold: ph(0, fh(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !kg(l, e.getBoundingClientRect()) && o(), y = !1;
		}
		try {
			n = new IntersectionObserver(b, {
				...v,
				root: i.ownerDocument
			});
		} catch {
			n = new IntersectionObserver(b, v);
		}
		n.observe(e);
	}
	return o(!0), a;
}
function jg(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == `function`, layoutShift: s = typeof IntersectionObserver == `function`, animationFrame: c = !1 } = r, l = ng(e), u = i || a ? [...l ? lh(l) : [], ...lh(t)] : [];
	u.forEach((e) => {
		i && e.addEventListener(`scroll`, n, { passive: !0 }), a && e.addEventListener(`resize`, n);
	});
	let d = l && s ? Ag(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), p.observe(t));
	let m, h = c ? sg(e) : null;
	c && g();
	function g() {
		let t = sg(e);
		h && !kg(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener(`scroll`, n), a && e.removeEventListener(`resize`, n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Mg = Uh, Ng = Zh, Pg = Qh, Fg = Gh, Ig = eg, Lg = Jh, Rg = Wh, zg = $h, Bg = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: Og,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return Hh(e, t, {
		...i,
		platform: a
	});
}, Vg = typeof document < `u` ? I.useLayoutEffect : function() {};
function Hg(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == `function` && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == `object`) {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!Hg(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === `_owner` && e.$$typeof) && !Hg(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function Ug(e) {
	return typeof window > `u` ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Wg(e, t) {
	let n = Ug(e);
	return Math.round(t * n) / n;
}
function Gg(e) {
	let t = I.useRef(e);
	return Vg(() => {
		t.current = e;
	}), t;
}
function Kg(e) {
	e === void 0 && (e = {});
	let { placement: t = `bottom`, strategy: n = `absolute`, middleware: r = [], platform: i, elements: { reference: a, floating: o } = {}, transform: s = !0, whileElementsMounted: c, open: l } = e, [u, d] = I.useState({
		x: 0,
		y: 0,
		strategy: n,
		placement: t,
		middlewareData: {},
		isPositioned: !1
	}), [f, p] = I.useState(r);
	Hg(f, r) || p(r);
	let [m, h] = I.useState(null), [g, _] = I.useState(null), v = I.useCallback((e) => {
		e !== S.current && (S.current = e, h(e));
	}, []), y = I.useCallback((e) => {
		e !== C.current && (C.current = e, _(e));
	}, []), b = a || m, x = o || g, S = I.useRef(null), C = I.useRef(null), w = I.useRef(u), T = c != null, E = Gg(c), D = Gg(i), O = Gg(l), k = I.useCallback(() => {
		if (!S.current || !C.current) return;
		let e = {
			placement: t,
			strategy: n,
			middleware: f
		};
		D.current && (e.platform = D.current), Bg(S.current, C.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: O.current !== !1
			};
			A.current && !Hg(w.current, t) && (w.current = t, Im.flushSync(() => {
				d(t);
			}));
		});
	}, [
		f,
		t,
		n,
		D,
		O
	]);
	Vg(() => {
		l === !1 && w.current.isPositioned && (w.current.isPositioned = !1, d((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [l]);
	let A = I.useRef(!1);
	Vg(() => (A.current = !0, () => {
		A.current = !1;
	}), []), Vg(() => {
		if (b && (S.current = b), x && (C.current = x), b && x) {
			if (E.current) return E.current(b, x, k);
			k();
		}
	}, [
		b,
		x,
		k,
		E,
		T
	]);
	let ee = I.useMemo(() => ({
		reference: S,
		floating: C,
		setReference: v,
		setFloating: y
	}), [v, y]), te = I.useMemo(() => ({
		reference: b,
		floating: x
	}), [b, x]), ne = I.useMemo(() => {
		let e = {
			position: n,
			left: 0,
			top: 0
		};
		if (!te.floating) return e;
		let t = Wg(te.floating, u.x), r = Wg(te.floating, u.y);
		return s ? {
			...e,
			transform: `translate(` + t + `px, ` + r + `px)`,
			...Ug(te.floating) >= 1.5 && { willChange: `transform` }
		} : {
			position: n,
			left: t,
			top: r
		};
	}, [
		n,
		s,
		te.floating,
		u.x,
		u.y
	]);
	return I.useMemo(() => ({
		...u,
		update: k,
		refs: ee,
		elements: te,
		floatingStyles: ne
	}), [
		u,
		k,
		ee,
		te,
		ne
	]);
}
var qg = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, `current`);
	}
	return {
		name: `arrow`,
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == `function` ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : Rg({
				element: r.current,
				padding: i
			}).fn(n) : r ? Rg({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, Jg = (e, t) => ({
	...Ng(e),
	options: [e, t]
}), Yg = (e, t) => ({
	...Pg(e),
	options: [e, t]
}), Xg = (e, t) => ({
	...zg(e),
	options: [e, t]
}), Zg = (e, t) => ({
	...Fg(e),
	options: [e, t]
}), Qg = (e, t) => ({
	...Ig(e),
	options: [e, t]
}), $g = (e, t) => ({
	...Lg(e),
	options: [e, t]
}), e_ = (e, t) => ({
	...qg(e),
	options: [e, t]
}), t_ = (0, I.createContext)(null);
t_.displayName = `OpenClosedContext`;
var n_ = ((e) => (e[e.Open = 1] = `Open`, e[e.Closed = 2] = `Closed`, e[e.Closing = 4] = `Closing`, e[e.Opening = 8] = `Opening`, e))(n_ || {});
function r_() {
	return (0, I.useContext)(t_);
}
function i_({ value: e, children: t }) {
	return I.createElement(t_.Provider, { value: e }, t);
}
function a_({ children: e }) {
	return I.createElement(t_.Provider, { value: null }, e);
}
function o_(e) {
	function t() {
		document.readyState !== `loading` && (e(), document.removeEventListener(`DOMContentLoaded`, t));
	}
	typeof window < `u` && typeof document < `u` && (document.addEventListener(`DOMContentLoaded`, t), t());
}
var s_ = [];
o_(() => {
	function e(e) {
		if (!De(e.target) || e.target === document.body || s_[0] === e.target) return;
		let t = e.target;
		t = t.closest(Jp), s_.unshift(t ?? e.target), s_ = s_.filter((e) => e != null && e.isConnected), s_.splice(10);
	}
	window.addEventListener(`click`, e, { capture: !0 }), window.addEventListener(`mousedown`, e, { capture: !0 }), window.addEventListener(`focus`, e, { capture: !0 }), document.body.addEventListener(`click`, e, { capture: !0 }), document.body.addEventListener(`mousedown`, e, { capture: !0 }), document.body.addEventListener(`focus`, e, { capture: !0 });
});
function c_(e) {
	let t = F(e), n = (0, I.useRef)(!1);
	(0, I.useEffect)(() => (n.current = !1, () => {
		n.current = !0, ce(() => {
			n.current && t();
		});
	}), [t]);
}
function l_() {
	let e = typeof document > `u`;
	return `useSyncExternalStore` in I ? ((e) => e.useSyncExternalStore)(I)(() => () => {}, () => !1, () => !e) : !1;
}
function u_() {
	let e = l_(), [t, n] = I.useState(Se.isHandoffComplete);
	return t && Se.isHandoffComplete === !1 && n(!1), I.useEffect(() => {
		t !== !0 && n(!0);
	}, [t]), I.useEffect(() => Se.handoff(), []), e ? !1 : t;
}
var d_ = (0, I.createContext)(!1);
function f_() {
	return (0, I.useContext)(d_);
}
function p_(e) {
	return I.createElement(d_.Provider, { value: e.force }, e.children);
}
function m_(e) {
	let t = f_(), n = (0, I.useContext)(y_), [r, i] = (0, I.useState)(() => {
		if (!t && n !== null) return n.current ?? null;
		if (Se.isServer) return null;
		let r = e?.getElementById(`headlessui-portal-root`);
		if (r) return r;
		if (e === null) return null;
		let i = e.createElement(`div`);
		return i.setAttribute(`id`, `headlessui-portal-root`), e.body.appendChild(i);
	});
	return (0, I.useEffect)(() => {
		r !== null && (e != null && e.body.contains(r) || e == null || e.body.appendChild(r));
	}, [r, e]), (0, I.useEffect)(() => {
		t || n !== null && i(n.current);
	}, [
		n,
		i,
		t
	]), r;
}
var h_ = I.Fragment, g_ = de(function(e, t) {
	let { ownerDocument: n = null, ...r } = e, i = (0, I.useRef)(null), a = Ne(Ee((e) => {
		i.current = e;
	}), t), o = gm(i.current), s = m_(n ?? o), c = (0, I.useContext)(x_), l = ye(), u = u_(), d = je();
	return c_(() => {
		var e;
		s && s.childNodes.length <= 0 && ((e = s.parentElement) == null || e.removeChild(s));
	}), !s || !u ? null : (0, Im.createPortal)(I.createElement(`div`, {
		"data-headlessui-portal": ``,
		ref: (e) => {
			l.dispose(), c && e && l.add(c.register(e));
		}
	}, d({
		ourProps: { ref: a },
		theirProps: r,
		slot: {},
		defaultTag: h_,
		name: `Portal`
	})), s);
});
function __(e, t) {
	let n = Ne(t), { enabled: r = !0, ownerDocument: i, ...a } = e, o = je();
	return r ? I.createElement(g_, {
		...a,
		ownerDocument: i,
		ref: n
	}) : o({
		ourProps: { ref: n },
		theirProps: a,
		slot: {},
		defaultTag: h_,
		name: `Portal`
	});
}
var v_ = I.Fragment, y_ = (0, I.createContext)(null);
function b_(e, t) {
	let { target: n, ...r } = e, i = { ref: Ne(t) }, a = je();
	return I.createElement(y_.Provider, { value: n }, a({
		ourProps: i,
		theirProps: r,
		defaultTag: v_,
		name: `Popover.Group`
	}));
}
var x_ = (0, I.createContext)(null);
function S_() {
	let e = (0, I.useContext)(x_), t = (0, I.useRef)([]), n = F((n) => (t.current.push(n), e && e.register(n), () => r(n))), r = F((n) => {
		let r = t.current.indexOf(n);
		r !== -1 && t.current.splice(r, 1), e && e.unregister(n);
	}), i = (0, I.useMemo)(() => ({
		register: n,
		unregister: r,
		portals: t
	}), [
		n,
		r,
		t
	]);
	return [t, (0, I.useMemo)(() => function({ children: e }) {
		return I.createElement(x_.Provider, { value: i }, e);
	}, [i])];
}
var C_ = de(__), w_ = de(b_), T_ = Object.assign(C_, { Group: w_ });
function E_(e, t = typeof document < `u` ? document.defaultView : null, n) {
	let r = Vp(e, `escape`);
	_m(t, `keydown`, (e) => {
		r && (e.defaultPrevented || e.key === Ae.Escape && n(e));
	});
}
function D_() {
	let [e] = (0, I.useState)(() => typeof window < `u` && typeof window.matchMedia == `function` ? window.matchMedia(`(pointer: coarse)`) : null), [t, n] = (0, I.useState)(e?.matches ?? !1);
	return ve(() => {
		if (!e) return;
		function t(e) {
			n(e.matches);
		}
		return e.addEventListener(`change`, t), () => e.removeEventListener(`change`, t);
	}, [e]), t;
}
function O_({ defaultContainers: e = [], portals: t, mainTreeNode: n } = {}) {
	let r = F(() => {
		let r = xe(n), i = [];
		for (let t of e) t !== null && (Ce(t) ? i.push(t) : `current` in t && Ce(t.current) && i.push(t.current));
		if (t != null && t.current) for (let e of t.current) i.push(e);
		for (let e of r?.querySelectorAll(`html > *, body > *`) ?? []) e !== document.body && e !== document.head && Ce(e) && e.id !== `headlessui-portal-root` && (n && (e.contains(n) || e.contains(n?.getRootNode()?.host)) || i.some((t) => e.contains(t)) || i.push(e));
		return i;
	});
	return {
		resolveContainers: r,
		contains: F((e) => r().some((t) => t.contains(e)))
	};
}
var k_ = (0, I.createContext)(null);
function A_({ children: e, node: t }) {
	let [n, r] = (0, I.useState)(null), i = j_(t ?? n);
	return I.createElement(k_.Provider, { value: i }, e, i === null && I.createElement(j, {
		features: Ue.Hidden,
		ref: (e) => {
			if (e) {
				for (let t of xe(e)?.querySelectorAll(`html > *, body > *`) ?? []) if (t !== document.body && t !== document.head && Ce(t) && t != null && t.contains(e)) {
					r(t);
					break;
				}
			}
		}
	}));
}
function j_(e = null) {
	return (0, I.useContext)(k_) ?? e;
}
function M_() {
	let e = (0, I.useRef)(!1);
	return ve(() => (e.current = !0, () => {
		e.current = !1;
	}), []), e;
}
var N_ = ((e) => (e[e.Forwards = 0] = `Forwards`, e[e.Backwards = 1] = `Backwards`, e))(N_ || {});
function P_() {
	let e = (0, I.useRef)(0);
	return pm(!0, `keydown`, (t) => {
		t.key === `Tab` && (e.current = +!!t.shiftKey);
	}, !0), e;
}
function F_(e) {
	if (!e) return /* @__PURE__ */ new Set();
	if (typeof e == `function`) return new Set(e());
	let t = /* @__PURE__ */ new Set();
	for (let n of e.current) Ce(n.current) && t.add(n.current);
	return t;
}
var I_ = `div`, L_ = ((e) => (e[e.None = 0] = `None`, e[e.InitialFocus = 1] = `InitialFocus`, e[e.TabLock = 2] = `TabLock`, e[e.FocusLock = 4] = `FocusLock`, e[e.RestoreFocus = 8] = `RestoreFocus`, e[e.AutoFocus = 16] = `AutoFocus`, e))(L_ || {});
function R_(e, t) {
	let n = (0, I.useRef)(null), r = Ne(n, t), { initialFocus: i, initialFocusFallback: a, containers: o, features: s = 15, ...c } = e;
	u_() || (s = 0);
	let l = gm(n.current);
	H_(s, { ownerDocument: l });
	let u = U_(s, {
		ownerDocument: l,
		container: n,
		initialFocus: i,
		initialFocusFallback: a
	});
	W_(s, {
		ownerDocument: l,
		container: n,
		containers: o,
		previousActiveElement: u
	});
	let d = P_(), f = F((e) => {
		if (!Pe(n.current)) return;
		let t = n.current;
		((e) => e())(() => {
			se(d.current, {
				[N_.Forwards]: () => {
					cm(t, Xp.First, { skipElements: [e.relatedTarget, a] });
				},
				[N_.Backwards]: () => {
					cm(t, Xp.Last, { skipElements: [e.relatedTarget, a] });
				}
			});
		});
	}), p = Vp(!!(s & 2), `focus-trap#tab-lock`), m = ye(), h = (0, I.useRef)(!1), g = {
		ref: r,
		onKeyDown(e) {
			e.key == `Tab` && (h.current = !0, m.requestAnimationFrame(() => {
				h.current = !1;
			}));
		},
		onBlur(e) {
			if (!(s & 4)) return;
			let t = F_(o);
			Pe(n.current) && t.add(n.current);
			let r = e.relatedTarget;
			De(r) && r.dataset.headlessuiFocusGuard !== `true` && (G_(t, r) || (h.current ? cm(n.current, se(d.current, {
				[N_.Forwards]: () => Xp.Next,
				[N_.Backwards]: () => Xp.Previous
			}) | Xp.WrapAround, { relativeTo: e.target }) : De(e.target) && im(e.target)));
		}
	}, _ = je();
	return I.createElement(I.Fragment, null, p && I.createElement(j, {
		as: `button`,
		type: `button`,
		"data-headlessui-focus-guard": !0,
		onFocus: f,
		features: Ue.Focusable
	}), _({
		ourProps: g,
		theirProps: c,
		defaultTag: I_,
		name: `FocusTrap`
	}), p && I.createElement(j, {
		as: `button`,
		type: `button`,
		"data-headlessui-focus-guard": !0,
		onFocus: f,
		features: Ue.Focusable
	}));
}
var z_ = de(R_), B_ = Object.assign(z_, { features: L_ });
function V_(e = !0) {
	let t = (0, I.useRef)(s_.slice());
	return Fm(([e], [n]) => {
		n === !0 && e === !1 && ce(() => {
			t.current.splice(0);
		}), n === !1 && e === !0 && (t.current = s_.slice());
	}, [
		e,
		s_,
		t
	]), F(() => t.current.find((e) => e != null && e.isConnected) ?? null);
}
function H_(e, { ownerDocument: t }) {
	let n = !!(e & 8), r = V_(n);
	Fm(() => {
		n || Le(t?.body) && im(r());
	}, [n]), c_(() => {
		n && im(r());
	});
}
function U_(e, { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: i }) {
	let a = (0, I.useRef)(null), o = Vp(!!(e & 1), `focus-trap#initial-focus`), s = M_();
	return Fm(() => {
		if (e === 0) return;
		if (!o) {
			i != null && i.current && im(i.current);
			return;
		}
		let c = n.current;
		c && ce(() => {
			if (!s.current) return;
			let n = t?.activeElement;
			if (r != null && r.current) {
				if (r?.current === n) {
					a.current = n;
					return;
				}
			} else if (c.contains(n)) {
				a.current = n;
				return;
			}
			if (r != null && r.current) im(r.current);
			else {
				if (e & 16) {
					if (cm(c, Xp.First | Xp.AutoFocus) !== Zp.Error) return;
				} else if (cm(c, Xp.First) !== Zp.Error) return;
				if (i != null && i.current && (im(i.current), t?.activeElement === i.current)) return;
				console.warn(`There are no focusable elements inside the <FocusTrap />`);
			}
			a.current = t?.activeElement;
		});
	}, [
		i,
		o,
		e
	]), a;
}
function W_(e, { ownerDocument: t, container: n, containers: r, previousActiveElement: i }) {
	let a = M_(), o = !!(e & 4);
	_m(t?.defaultView, `focus`, (e) => {
		if (!o || !a.current) return;
		let t = F_(r);
		Pe(n.current) && t.add(n.current);
		let s = i.current;
		if (!s) return;
		let c = e.target;
		Pe(c) ? G_(t, c) ? (i.current = c, im(c)) : (e.preventDefault(), e.stopPropagation(), im(s)) : im(i.current);
	}, !0);
}
function G_(e, t) {
	for (let n of e) if (n.contains(t)) return !0;
	return !1;
}
function K_(e) {
	return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || !pe(e.as ?? ev) || I.Children.count(e.children) === 1;
}
var q_ = (0, I.createContext)(null);
q_.displayName = `TransitionContext`;
var J_ = ((e) => (e.Visible = `visible`, e.Hidden = `hidden`, e))(J_ || {});
function Y_() {
	let e = (0, I.useContext)(q_);
	if (e === null) throw Error(`A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.`);
	return e;
}
function X_() {
	let e = (0, I.useContext)(Z_);
	if (e === null) throw Error(`A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.`);
	return e;
}
var Z_ = (0, I.createContext)(null);
Z_.displayName = `NestingContext`;
function Q_(e) {
	return `children` in e ? Q_(e.children) : e.current.filter(({ el: e }) => e.current !== null).filter(({ state: e }) => e === `visible`).length > 0;
}
function $_(e, t) {
	let n = oe(e), r = (0, I.useRef)([]), i = M_(), a = ye(), o = F((e, t = ne.Hidden) => {
		let o = r.current.findIndex(({ el: t }) => t === e);
		o !== -1 && (se(t, {
			[ne.Unmount]() {
				r.current.splice(o, 1);
			},
			[ne.Hidden]() {
				r.current[o].state = `hidden`;
			}
		}), a.microTask(() => {
			var e;
			!Q_(r) && i.current && ((e = n.current) == null || e.call(n));
		}));
	}), s = F((e) => {
		let t = r.current.find(({ el: t }) => t === e);
		return t ? t.state !== `visible` && (t.state = `visible`) : r.current.push({
			el: e,
			state: `visible`
		}), () => o(e, ne.Unmount);
	}), c = (0, I.useRef)([]), l = (0, I.useRef)(Promise.resolve()), u = (0, I.useRef)({
		enter: [],
		leave: []
	}), d = F((e, n, r) => {
		c.current.splice(0), t && (t.chains.current[n] = t.chains.current[n].filter(([t]) => t !== e)), t?.chains.current[n].push([e, new Promise((e) => {
			c.current.push(e);
		})]), t?.chains.current[n].push([e, new Promise((e) => {
			Promise.all(u.current[n].map(([e, t]) => t)).then(() => e());
		})]), n === `enter` ? l.current = l.current.then(() => t?.wait.current).then(() => r(n)) : r(n);
	}), f = F((e, t, n) => {
		Promise.all(u.current[t].splice(0).map(([e, t]) => t)).then(() => {
			var e;
			(e = c.current.shift()) == null || e();
		}).then(() => n(t));
	});
	return (0, I.useMemo)(() => ({
		children: r,
		register: s,
		unregister: o,
		onStart: d,
		onStop: f,
		wait: l,
		chains: u
	}), [
		s,
		o,
		r,
		d,
		f,
		u,
		l
	]);
}
var ev = I.Fragment, tv = Me.RenderStrategy;
function nv(e, t) {
	var n;
	let { transition: r = !0, beforeEnter: i, afterEnter: a, beforeLeave: o, afterLeave: s, enter: c, enterFrom: l, enterTo: u, entered: d, leave: f, leaveFrom: p, leaveTo: m, ...h } = e, [g, _] = (0, I.useState)(null), v = (0, I.useRef)(null), y = K_(e), b = Ne(...y ? [
		v,
		t,
		_
	] : t === null ? [] : [t]), x = (n = h.unmount) == null || n ? ne.Unmount : ne.Hidden, { show: S, appear: C, initial: w } = Y_(), [T, E] = (0, I.useState)(S ? `visible` : `hidden`), D = X_(), { register: O, unregister: k } = D;
	ve(() => O(v), [O, v]), ve(() => {
		if (x === ne.Hidden && v.current) {
			if (S && T !== `visible`) {
				E(`visible`);
				return;
			}
			return se(T, {
				hidden: () => k(v),
				visible: () => O(v)
			});
		}
	}, [
		T,
		v,
		O,
		k,
		S,
		x
	]);
	let A = u_();
	ve(() => {
		if (y && A && T === `visible` && v.current === null) throw Error("Did you forget to passthrough the `ref` to the actual DOM node?");
	}, [
		v,
		T,
		A,
		y
	]);
	let ee = w && !C, te = C && S && w, re = (0, I.useRef)(!1), j = $_(() => {
		re.current || (E(`hidden`), k(v));
	}, D), M = F((e) => {
		re.current = !0;
		let t = e ? `enter` : `leave`;
		j.onStart(v, t, (e) => {
			e === `enter` ? i?.() : e === `leave` && o?.();
		});
	}), ie = F((e) => {
		let t = e ? `enter` : `leave`;
		re.current = !1, j.onStop(v, t, (e) => {
			e === `enter` ? a?.() : e === `leave` && s?.();
		}), t === `leave` && !Q_(j) && (E(`hidden`), k(v));
	});
	(0, I.useEffect)(() => {
		y && r || (M(S), ie(S));
	}, [
		S,
		y,
		r
	]);
	let [, N] = Am(!(!r || !y || !A || ee), g, S, {
		start: M,
		end: ie
	}), oe = ae({
		ref: b,
		className: le(h.className, te && c, te && l, N.enter && c, N.enter && N.closed && l, N.enter && !N.closed && u, N.leave && f, N.leave && !N.closed && p, N.leave && N.closed && m, !N.transition && S && d)?.trim() || void 0,
		...km(N)
	}), P = 0;
	T === `visible` && (P |= n_.Open), T === `hidden` && (P |= n_.Closed), S && T === `hidden` && (P |= n_.Opening), !S && T === `visible` && (P |= n_.Closing);
	let ce = je();
	return I.createElement(Z_.Provider, { value: j }, I.createElement(i_, { value: P }, ce({
		ourProps: oe,
		theirProps: h,
		defaultTag: ev,
		features: tv,
		visible: T === `visible`,
		name: `Transition.Child`
	})));
}
function rv(e, t) {
	let { show: n, appear: r = !1, unmount: i = !0, ...a } = e, o = (0, I.useRef)(null), s = Ne(...K_(e) ? [o, t] : t === null ? [] : [t]);
	u_();
	let c = r_();
	if (n === void 0 && c !== null && (n = (c & n_.Open) === n_.Open), n === void 0) throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
	let [l, u] = (0, I.useState)(n ? `visible` : `hidden`), d = $_(() => {
		n || u(`hidden`);
	}), [f, p] = (0, I.useState)(!0), m = (0, I.useRef)([n]);
	ve(() => {
		f !== !1 && m.current[m.current.length - 1] !== n && (m.current.push(n), p(!1));
	}, [m, n]);
	let h = (0, I.useMemo)(() => ({
		show: n,
		appear: r,
		initial: f
	}), [
		n,
		r,
		f
	]);
	ve(() => {
		n ? u(`visible`) : !Q_(d) && o.current !== null && u(`hidden`);
	}, [n, d]);
	let g = { unmount: i }, _ = F(() => {
		var t;
		f && p(!1), (t = e.beforeEnter) == null || t.call(e);
	}), v = F(() => {
		var t;
		f && p(!1), (t = e.beforeLeave) == null || t.call(e);
	}), y = je();
	return I.createElement(Z_.Provider, { value: d }, I.createElement(q_.Provider, { value: h }, y({
		ourProps: {
			...g,
			as: I.Fragment,
			children: I.createElement(ov, {
				ref: s,
				...g,
				...a,
				beforeEnter: _,
				beforeLeave: v
			})
		},
		theirProps: {},
		defaultTag: I.Fragment,
		features: tv,
		visible: l === `visible`,
		name: `Transition`
	})));
}
function iv(e, t) {
	let n = (0, I.useContext)(q_) !== null, r = r_() !== null;
	return I.createElement(I.Fragment, null, !n && r ? I.createElement(av, {
		ref: t,
		...e
	}) : I.createElement(ov, {
		ref: t,
		...e
	}));
}
var av = de(rv), ov = de(nv), sv = de(iv), cv = Object.assign(av, {
	Child: sv,
	Root: av
}), lv = ((e) => (e[e.Open = 0] = `Open`, e[e.Closed = 1] = `Closed`, e))(lv || {}), uv = ((e) => (e[e.SetTitleId = 0] = `SetTitleId`, e))(uv || {}), dv = { 0(e, t) {
	return e.titleId === t.id ? e : {
		...e,
		titleId: t.id
	};
} }, fv = (0, I.createContext)(null);
fv.displayName = `DialogContext`;
function pv(e) {
	let t = (0, I.useContext)(fv);
	if (t === null) {
		let t = Error(`<${e} /> is missing a parent <Dialog /> component.`);
		throw Error.captureStackTrace && Error.captureStackTrace(t, pv), t;
	}
	return t;
}
function mv(e, t) {
	return se(t.type, dv, e, t);
}
var hv = de(function(e, t) {
	let n = (0, ie.useId)(), { id: r = `headlessui-dialog-${n}`, open: i, onClose: a, initialFocus: o, role: s = `dialog`, autoFocus: c = !0, __demoMode: l = !1, unmount: u = !1, ...d } = e, f = (0, I.useRef)(!1);
	s = function() {
		return s === `dialog` || s === `alertdialog` ? s : (f.current || (f.current = !0, console.warn(`Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), `dialog`);
	}();
	let p = r_();
	i === void 0 && p !== null && (i = (p & n_.Open) === n_.Open);
	let m = (0, I.useRef)(null), h = Ne(m, t), g = gm(m.current), _ = +!i, [v, y] = (0, I.useReducer)(mv, {
		titleId: null,
		descriptionId: null,
		panelRef: (0, I.createRef)()
	}), b = F(() => a(!1)), x = F((e) => y({
		type: 0,
		id: e
	})), S = u_() ? _ === 0 : !1, [C, w] = S_(), T = { get current() {
		return v.panelRef.current ?? m.current;
	} }, E = j_(), { resolveContainers: D } = O_({
		mainTreeNode: E,
		portals: C,
		defaultContainers: [T]
	}), O = p === null ? !1 : (p & n_.Closing) === n_.Closing;
	Kp(l || O ? !1 : S, {
		allowed: F(() => [m.current?.closest(`[data-headlessui-portal]`) ?? null]),
		disallowed: F(() => [E?.closest(`body > *:not(#headlessui-portal-root)`) ?? null])
	});
	let k = Ip.get(null);
	ve(() => {
		if (S) return k.actions.push(r), () => k.actions.pop(r);
	}, [
		k,
		r,
		S
	]);
	let A = zp(k, (0, I.useCallback)((e) => k.selectors.isTop(e, r), [k, r]));
	hm(A, D, (e) => {
		e.preventDefault(), b();
	}), E_(A, g?.defaultView, (e) => {
		e.preventDefault(), e.stopPropagation(), document.activeElement && `blur` in document.activeElement && typeof document.activeElement.blur == `function` && document.activeElement.blur(), b();
	}), Em(l || O ? !1 : S, g, D), qp(S, m, b);
	let [ee, te] = we(), ne = (0, I.useMemo)(() => [{
		dialogState: _,
		close: b,
		setTitleId: x,
		unmount: u
	}, v], [
		_,
		b,
		x,
		u,
		v
	]), j = re({ open: _ === 0 }), M = {
		ref: h,
		id: r,
		role: s,
		tabIndex: -1,
		"aria-modal": l ? void 0 : _ === 0 ? !0 : void 0,
		"aria-labelledby": v.titleId,
		"aria-describedby": ee,
		unmount: u
	}, ae = !D_(), N = L_.None;
	S && !l && (N |= L_.RestoreFocus, N |= L_.TabLock, c && (N |= L_.AutoFocus), ae && (N |= L_.InitialFocus));
	let oe = je();
	return I.createElement(a_, null, I.createElement(p_, { force: !0 }, I.createElement(T_, null, I.createElement(fv.Provider, { value: ne }, I.createElement(w_, { target: m }, I.createElement(p_, { force: !1 }, I.createElement(te, { slot: j }, I.createElement(w, null, I.createElement(B_, {
		initialFocus: o,
		initialFocusFallback: m,
		containers: D,
		features: N
	}, I.createElement(fp, { value: b }, oe({
		ourProps: M,
		theirProps: d,
		slot: j,
		defaultTag: gv,
		features: _v,
		visible: _ === 0,
		name: `Dialog`
	})))))))))));
}), gv = `div`, _v = Me.RenderStrategy | Me.Static;
function vv(e, t) {
	let { transition: n = !1, open: r, ...i } = e, a = r_(), o = e.hasOwnProperty(`open`) || a !== null, s = e.hasOwnProperty(`onClose`);
	if (!o && !s) throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
	if (!o) throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
	if (!s) throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
	if (!a && typeof e.open != `boolean`) throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
	if (typeof e.onClose != `function`) throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
	return (r !== void 0 || n) && !i.static ? I.createElement(A_, null, I.createElement(cv, {
		show: r,
		transition: n,
		unmount: i.unmount
	}, I.createElement(hv, {
		ref: t,
		...i
	}))) : I.createElement(A_, null, I.createElement(hv, {
		ref: t,
		open: r,
		...i
	}));
}
var yv = `div`;
function bv(e, t) {
	let n = (0, ie.useId)(), { id: r = `headlessui-dialog-panel-${n}`, transition: i = !1, ...a } = e, [{ dialogState: o, unmount: s }, c] = pv(`Dialog.Panel`), l = Ne(t, c.panelRef), u = re({ open: o === 0 }), d = {
		ref: l,
		id: r,
		onClick: F((e) => {
			e.stopPropagation();
		})
	}, f = i ? sv : I.Fragment, p = i ? { unmount: s } : {}, m = je();
	return I.createElement(f, { ...p }, m({
		ourProps: d,
		theirProps: a,
		slot: u,
		defaultTag: yv,
		name: `Dialog.Panel`
	}));
}
var xv = `div`;
function Sv(e, t) {
	let { transition: n = !1, ...r } = e, [{ dialogState: i, unmount: a }] = pv(`Dialog.Backdrop`), o = re({ open: i === 0 }), s = {
		ref: t,
		"aria-hidden": !0
	}, c = n ? sv : I.Fragment, l = n ? { unmount: a } : {}, u = je();
	return I.createElement(c, { ...l }, u({
		ourProps: s,
		theirProps: r,
		slot: o,
		defaultTag: xv,
		name: `Dialog.Backdrop`
	}));
}
var Cv = `h2`;
function wv(e, t) {
	let n = (0, ie.useId)(), { id: r = `headlessui-dialog-title-${n}`, ...i } = e, [{ dialogState: a, setTitleId: o }] = pv(`Dialog.Title`), s = Ne(t);
	(0, I.useEffect)(() => (o(r), () => o(null)), [r, o]);
	let c = re({ open: a === 0 }), l = {
		ref: s,
		id: r
	};
	return je()({
		ourProps: l,
		theirProps: i,
		slot: c,
		defaultTag: Cv,
		name: `Dialog.Title`
	});
}
var Tv = de(vv), Ev = de(bv), Dv = de(Sv), Ov = de(wv), kv = Object.assign(Tv, {
	Panel: Ev,
	Title: Ov,
	Description: Ie
}), Av = ((e) => (e[e.RegisterOption = 0] = `RegisterOption`, e[e.UnregisterOption = 1] = `UnregisterOption`, e))(Av || {}), jv = {
	0(e, t) {
		let n = [...e.options, {
			id: t.id,
			element: t.element,
			propsRef: t.propsRef
		}];
		return {
			...e,
			options: sm(n, (e) => e.element.current)
		};
	},
	1(e, t) {
		let n = e.options.slice(), r = e.options.findIndex((e) => e.id === t.id);
		return r === -1 ? e : (n.splice(r, 1), {
			...e,
			options: n
		});
	}
}, Mv = (0, I.createContext)(null);
Mv.displayName = `RadioGroupDataContext`;
function Nv(e) {
	let t = (0, I.useContext)(Mv);
	if (t === null) {
		let t = Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
		throw Error.captureStackTrace && Error.captureStackTrace(t, Nv), t;
	}
	return t;
}
var Pv = (0, I.createContext)(null);
Pv.displayName = `RadioGroupActionsContext`;
function Fv(e) {
	let t = (0, I.useContext)(Pv);
	if (t === null) {
		let t = Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
		throw Error.captureStackTrace && Error.captureStackTrace(t, Fv), t;
	}
	return t;
}
function Iv(e, t) {
	return se(t.type, jv, e, t);
}
var Lv = `div`;
function Rv(e, t) {
	let n = (0, ie.useId)(), r = he(), { id: i = `headlessui-radiogroup-${n}`, value: a, form: o, name: s, onChange: c, by: l, disabled: u = r || !1, defaultValue: d, tabIndex: f = 0, ...p } = e, m = mp(l), [h, g] = (0, I.useReducer)(Iv, { options: [] }), _ = h.options, [v, y] = Fe(), [b, x] = we(), S = (0, I.useRef)(null), C = Ne(S, t), w = M(d), [T, E] = fe(a, c, w), D = (0, I.useMemo)(() => _.find((e) => !e.propsRef.current.disabled), [_]), O = (0, I.useMemo)(() => _.some((e) => m(e.propsRef.current.value, T)), [_, T]), k = F((e) => {
		if (u || m(e, T)) return !1;
		let t = _.find((t) => m(t.propsRef.current.value, e))?.propsRef.current;
		return t != null && t.disabled ? !1 : (E?.(e), !0);
	}), A = F((e) => {
		if (!S.current) return;
		let t = _.filter((e) => e.propsRef.current.disabled === !1).map((e) => e.element.current);
		switch (e.key) {
			case Ae.Enter:
				_e(e.currentTarget);
				break;
			case Ae.ArrowLeft:
			case Ae.ArrowUp:
				if (e.preventDefault(), e.stopPropagation(), cm(t, Xp.Previous | Xp.WrapAround) === Zp.Success) {
					let e = _.find((e) => Le(e.element.current));
					e && k(e.propsRef.current.value);
				}
				break;
			case Ae.ArrowRight:
			case Ae.ArrowDown:
				if (e.preventDefault(), e.stopPropagation(), cm(t, Xp.Next | Xp.WrapAround) === Zp.Success) {
					let e = _.find((e) => Le(e.element.current));
					e && k(e.propsRef.current.value);
				}
				break;
			case Ae.Space:
				{
					e.preventDefault(), e.stopPropagation();
					let t = _.find((e) => Le(e.element.current));
					t && k(t.propsRef.current.value);
				}
				break;
		}
	}), ee = F((e) => (g({
		type: 0,
		...e
	}), () => g({
		type: 1,
		id: e.id
	}))), te = (0, I.useMemo)(() => ({
		value: T,
		firstOption: D,
		containsCheckedOption: O,
		disabled: u,
		compare: m,
		tabIndex: f,
		...h
	}), [
		T,
		D,
		O,
		u,
		m,
		f,
		h
	]), ne = (0, I.useMemo)(() => ({
		registerOption: ee,
		change: k
	}), [ee, k]), j = {
		ref: C,
		id: i,
		role: `radiogroup`,
		"aria-labelledby": v,
		"aria-describedby": b,
		onKeyDown: A
	}, ae = re({ value: T }), N = (0, I.useCallback)(() => {
		if (w !== void 0) return k(w);
	}, [k, w]), oe = je();
	return I.createElement(x, { name: `RadioGroup.Description` }, I.createElement(y, { name: `RadioGroup.Label` }, I.createElement(Pv.Provider, { value: ne }, I.createElement(Mv.Provider, { value: te }, s != null && I.createElement(ge, {
		disabled: u,
		data: { [s]: T || `on` },
		overrides: {
			type: `radio`,
			checked: T != null
		},
		form: o,
		onReset: N
	}), oe({
		ourProps: j,
		theirProps: p,
		slot: ae,
		defaultTag: Lv,
		name: `RadioGroup`
	})))));
}
var zv = `div`;
function Bv(e, t) {
	let n = Nv(`RadioGroup.Option`), r = Fv(`RadioGroup.Option`), i = (0, ie.useId)(), { id: a = `headlessui-radiogroup-option-${i}`, value: o, disabled: s = n.disabled || !1, autoFocus: c = !1, ...l } = e, u = (0, I.useRef)(null), d = Ne(u, t), [f, p] = Fe(), [m, h] = we(), g = oe({
		value: o,
		disabled: s
	});
	ve(() => r.registerOption({
		id: a,
		element: u,
		propsRef: g
	}), [
		a,
		r,
		u,
		g
	]);
	let _ = F((e) => {
		var t;
		if (Ve(e.currentTarget)) return e.preventDefault();
		r.change(o) && ((t = u.current) == null || t.focus());
	}), v = n.firstOption?.id === a, { isFocusVisible: y, focusProps: b } = me({ autoFocus: c }), { isHovered: x, hoverProps: S } = te({ isDisabled: s }), C = n.compare(n.value, o), w = ue({
		ref: d,
		id: a,
		role: `radio`,
		"aria-checked": C ? `true` : `false`,
		"aria-labelledby": f,
		"aria-describedby": m,
		"aria-disabled": s ? !0 : void 0,
		tabIndex: s ? -1 : C || !n.containsCheckedOption && v ? n.tabIndex : -1,
		onClick: s ? void 0 : _,
		autoFocus: c
	}, b, S), T = re({
		checked: C,
		disabled: s,
		active: y,
		hover: x,
		focus: y,
		autofocus: c
	}), E = je();
	return I.createElement(h, { name: `RadioGroup.Description` }, I.createElement(p, { name: `RadioGroup.Label` }, E({
		ourProps: w,
		theirProps: l,
		slot: T,
		defaultTag: zv,
		name: `RadioGroup.Option`
	})));
}
var Vv = `span`;
function Hv(e, t) {
	let n = Nv(`Radio`), r = Fv(`Radio`), i = (0, ie.useId)(), a = Te(), o = he(), { id: s = a || `headlessui-radio-${i}`, value: c, disabled: l = n.disabled || o || !1, autoFocus: u = !1, ...d } = e, f = (0, I.useRef)(null), p = Ne(f, t), m = Be(), h = ze(), g = oe({
		value: c,
		disabled: l
	});
	ve(() => r.registerOption({
		id: s,
		element: f,
		propsRef: g
	}), [
		s,
		r,
		f,
		g
	]);
	let _ = F((e) => {
		var t;
		if (Ve(e.currentTarget)) return e.preventDefault();
		r.change(c) && ((t = f.current) == null || t.focus());
	}), { isFocusVisible: v, focusProps: y } = me({ autoFocus: u }), { isHovered: b, hoverProps: x } = te({ isDisabled: l }), S = n.firstOption?.id === s, C = n.compare(n.value, c), w = ue({
		ref: p,
		id: s,
		role: `radio`,
		"aria-checked": C ? `true` : `false`,
		"aria-labelledby": m,
		"aria-describedby": h,
		"aria-disabled": l ? !0 : void 0,
		tabIndex: l ? -1 : C || !n.containsCheckedOption && S ? n.tabIndex : -1,
		autoFocus: u,
		onClick: l ? void 0 : _
	}, y, x), T = re({
		checked: C,
		disabled: l,
		hover: b,
		focus: v,
		autofocus: u
	});
	return je()({
		ourProps: w,
		theirProps: d,
		slot: T,
		defaultTag: Vv,
		name: `Radio`
	});
}
var Uv = de(Rv), Wv = de(Bv), Gv = de(Hv), Kv = Object.assign(Uv, {
	Option: Wv,
	Radio: Gv,
	Label: Re,
	Description: Ie
}), qv = e({}), Jv = `modulepreload`, Yv = function(e) {
	return `/playground/` + e;
}, Xv = {}, Zv = function(e, t, n) {
	let r = Promise.resolve();
	if (t && t.length > 0) {
		let e = document.getElementsByTagName(`link`), i = document.querySelector(`meta[property=csp-nonce]`), a = i?.nonce || i?.getAttribute(`nonce`);
		function o(e) {
			return Promise.all(e.map((e) => Promise.resolve(e).then((e) => ({
				status: `fulfilled`,
				value: e
			}), (e) => ({
				status: `rejected`,
				reason: e
			}))));
		}
		function s(e) {
			return import.meta.resolve ? import.meta.resolve(e) : new URL(e, new URL(`../../../src/node/plugins/importAnalysisBuild.ts`, import.meta.url)).href;
		}
		r = o(t.map((t) => {
			if (t = Yv(t, n), t = s(t), t in Xv) return;
			Xv[t] = !0;
			let r = t.endsWith(`.css`);
			for (let n = e.length - 1; n >= 0; n--) {
				let i = e[n];
				if (i.href === t && (!r || i.rel === `stylesheet`)) return;
			}
			let i = document.createElement(`link`);
			if (i.rel = r ? `stylesheet` : Jv, r || (i.as = `script`), i.crossOrigin = ``, i.href = t, a && i.setAttribute(`nonce`, a), document.head.appendChild(i), r) return new Promise((e, n) => {
				i.addEventListener(`load`, e), i.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${t}`)));
			});
		}));
	}
	function i(e) {
		let t = new Event(`vite:preloadError`, { cancelable: !0 });
		if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e;
	}
	return r.then((t) => {
		for (let e of t || []) e.status === `rejected` && i(e.reason);
		return e().catch(i);
	});
};
function Qv({ initialOpen: e = !1, buttonContent: t, className: n, children: r, title: i, onPreload: a, onClose: o }) {
	let s = hf(), [c, l] = (0, I.useState)(e), [u, d] = (0, I.useState)(c), f = (0, I.useMemo)(() => s ? {} : {
		enter: `ease-out duration-50`,
		enterFrom: `opacity-0`,
		enterTo: `opacity-100`,
		leave: `ease-in duration-100`,
		leaveFrom: `opacity-100`,
		leaveTo: `opacity-0`
	}, [s]), p = (0, I.useMemo)(() => s ? {} : {
		enter: `ease-out duration-100`,
		enterFrom: `opacity-0 scale-95`,
		enterTo: `opacity-100 scale-100`,
		leave: `ease-in duration-100`,
		leaveFrom: `opacity-100 scale-100`,
		leaveTo: `opacity-0 scale-95`
	}, [s]), m = (0, I.useCallback)(() => {
		Zv(() => Promise.resolve().then(() => qv).then(() => {
			a && a();
		}), void 0);
	}, [a]), h = (0, I.useCallback)(() => {
		l(!1), o && setTimeout(() => o(!1), 100);
	}, [o]), g = (0, I.useCallback)(() => {
		d(!0), l(!0);
	}, []), _ = (0, I.useCallback)((e) => {
		e.target instanceof HTMLElement && e.target.closest(`[data-dialog-control="close"]`) && h();
	}, [h]);
	return (0, X.jsxs)(X.Fragment, { children: [(0, X.jsx)(`button`, {
		onMouseEnter: m,
		onClick: g,
		children: t
	}), u && (0, X.jsx)(I.Suspense, {
		fallback: null,
		children: (0, X.jsx)(cv, {
			appear: !0,
			show: c,
			as: I.Fragment,
			children: (0, X.jsxs)(kv, {
				as: `div`,
				className: `relative z-20`,
				onClose: h,
				children: [(0, X.jsx)(sv, {
					as: I.Fragment,
					...f,
					children: (0, X.jsx)(Dv, { className: `fixed inset-0 bg-black/10 backdrop-blur-xs` })
				}), (0, X.jsx)(`div`, {
					className: `fixed inset-0 overflow-y-auto`,
					children: (0, X.jsx)(`div`, {
						className: `flex min-h-full items-center justify-center p-4 text-center`,
						children: (0, X.jsx)(sv, {
							as: I.Fragment,
							...p,
							children: (0, X.jsxs)(Ev, {
								className: E(`relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-800 text-left align-middle transition-all space-y-4`, n),
								onClick: _,
								children: [i && (0, X.jsx)(Ov, {
									as: `h3`,
									className: `text-xl font-700 leading-6`,
									children: i
								}), (0, X.jsx)(rp, {
									unexpected: !0,
									error: (0, X.jsx)(`div`, {
										className: `w-full flex justify-center items-center h-32 p-8`,
										children: (0, X.jsx)(`div`, {
											className: `text-neutral-500 dark:text-neutral-400`,
											children: `Error loading content`
										})
									}),
									loading: (0, X.jsx)(`div`, {
										className: `w-full flex justify-center items-center h-32 p-8`,
										children: (0, X.jsx)(yt, { className: `w-6 h-6 animate-spin text-neutral-500 dark:text-neutral-400` })
									}),
									children: r
								})]
							})
						})
					})
				})]
			})
		})
	})] });
}
var $v = (0, I.lazy)(() => Zv(() => import(`./ConnectionSettings.content-CYB8C03n.js`), __vite__mapDeps([0,1])));
function ey() {
	let e = _(bf).api, t = A(yf), [n, r] = (0, I.useState)(e.type === `browser` ? ty[1] : ty[0]), [i, a] = (0, I.useState)(e.type === `http` ? e.url : ``), o = (0, I.useCallback)(() => {
		r(e.type === `browser` ? ty[1] : ty[0]);
	}, []), s = (0, I.useCallback)((e) => {
		let r = n.id === `browser` ? `browser` : i;
		switch (e) {
			case `params`:
				t(r);
				break;
		}
	}, [n.id, i]);
	return (0, X.jsx)(Qv, {
		className: `p-6`,
		title: `ESMeta Connection Settings`,
		onClose: o,
		buttonContent: (0, X.jsx)(`div`, {
			className: `group relative inset-0 flex items-center justify-center
      transition-transform active:scale-90
      flex-row rounded-md text-sm font-medium text-white hover:bg-neutral-500/25 bg-neutral-500/0
      `,
			children: (0, X.jsx)(np, { adaptive: !0 })
		}),
		children: (0, X.jsx)($v, {
			selected: n,
			setSelected: r,
			saveToLocal: s,
			url: i,
			setUrl: a
		})
	});
}
var ty = [{
	id: `http`,
	name: `Connect to ESMeta API Server`,
	description: (0, X.jsxs)(`p`, {
		className: `inline`,
		children: [
			`Install ESMeta and run`,
			` `,
			(0, X.jsx)(`code`, {
				className: `inline rounded`,
				children: `esmeta web`
			})
		]
	}),
	icon: (0, X.jsx)(Ct, {})
}, {
	id: `browser`,
	name: `Run ESMeta on Web Browser`,
	description: (0, X.jsx)(`p`, {
		className: `inline`,
		children: `No configuration needed.`
	}),
	icon: (0, X.jsx)(gt, {})
}], ny = k(), ry = uy(ny.get(bf).api), iy = h(), ay = /* @__PURE__ */ new Set(), oy = async (e, t, n, r) => {
	let i = await e;
	return new Promise((e, a) => {
		let o = iy();
		ay.add(o), ny.set(Yf, ay.size), D.log?.(o, t, n, r);
		let s = (t) => {
			let n = t.data;
			if (n.id === o) if (i.removeEventListener(`message`, s), D.log?.(o, n), n.success) e(n.data), ay.delete(o), ny.set(Yf, ay.size);
			else {
				ay.delete(o), ny.set(Yf, -(2 ** 53 - 1));
				let e = Error(n.error);
				b.error(e.message), a(e);
			}
		};
		i.addEventListener(`message`, s), i.postMessage({
			id: o,
			type: t,
			endpoint: n,
			data: r
		});
	});
}, sy = (e, t) => oy(ry, `GET`, e, t), cy = (e, t) => oy(ry, `POST`, e, t), ly = (e, t) => oy(ry, `DELETE`, e, t);
async function uy(e) {
	return new Promise(async (t) => {
		if (e.type === `browser`) {
			let e = new Worker(new URL(`/playground/assets/standalone.worker-pO-dJjTp.js`, `` + import.meta.url)), n = await Promise.all([
				dy(new URL(`/playground/assets/funcs-xPZ8d0hD.json`, `` + import.meta.url)),
				dy(new URL(`data:application/json;base64,ewogICJoYXNoIiA6ICIwMjQ4NDU2Yzc1ODQzMWU0YmI4ZTVkMjYzMzNmZjE4NjUxMjNjOWNkIiwKICAidGFnIiA6ICJlczIwMjYiCn0=`, `` + import.meta.url)),
				dy(new URL(`/playground/assets/grammar-M1wuI2_D.json`, `` + import.meta.url)),
				dy(new URL(`data:application/json;base64,WwogIHsKICAgICJuYW1lIiA6ICJIb3Vyc1BlckRheSIsCiAgICAidmFsdWUiIDogewogICAgICAiRGVjaW1hbE1hdGhWYWx1ZUxpdGVyYWwiIDogewogICAgICAgICJuIiA6IDI0CiAgICAgIH0KICAgIH0KICB9LAogIHsKICAgICJuYW1lIiA6ICJNaW51dGVzUGVySG91ciIsCiAgICAidmFsdWUiIDogewogICAgICAiRGVjaW1hbE1hdGhWYWx1ZUxpdGVyYWwiIDogewogICAgICAgICJuIiA6IDYwCiAgICAgIH0KICAgIH0KICB9LAogIHsKICAgICJuYW1lIiA6ICJTZWNvbmRzUGVyTWludXRlIiwKICAgICJ2YWx1ZSIgOiB7CiAgICAgICJEZWNpbWFsTWF0aFZhbHVlTGl0ZXJhbCIgOiB7CiAgICAgICAgIm4iIDogNjAKICAgICAgfQogICAgfQogIH0sCiAgewogICAgIm5hbWUiIDogIm1zUGVyU2Vjb25kIiwKICAgICJ2YWx1ZSIgOiB7CiAgICAgICJOdW1iZXJMaXRlcmFsIiA6IHsKICAgICAgICAiZG91YmxlIiA6IDEwMDAuMAogICAgICB9CiAgICB9CiAgfSwKICB7CiAgICAibmFtZSIgOiAibXNQZXJNaW51dGUiLAogICAgInZhbHVlIiA6IHsKICAgICAgIk51bWJlckxpdGVyYWwiIDogewogICAgICAgICJkb3VibGUiIDogNjAwMDAuMAogICAgICB9CiAgICB9CiAgfSwKICB7CiAgICAibmFtZSIgOiAibXNQZXJIb3VyIiwKICAgICJ2YWx1ZSIgOiB7CiAgICAgICJOdW1iZXJMaXRlcmFsIiA6IHsKICAgICAgICAiZG91YmxlIiA6IDM2MDAwMDAuMAogICAgICB9CiAgICB9CiAgfSwKICB7CiAgICAibmFtZSIgOiAibXNQZXJEYXkiLAogICAgInZhbHVlIiA6IHsKICAgICAgIk51bWJlckxpdGVyYWwiIDogewogICAgICAgICJkb3VibGUiIDogOC42NEU3CiAgICAgIH0KICAgIH0KICB9Cl0=`, `` + import.meta.url)),
				dy(new URL(`/playground/assets/spec.tables-CLc9TYDs.json`, `` + import.meta.url)),
				dy(new URL(`/playground/assets/tyModel.decls-bMCNOdLd.json`, `` + import.meta.url)),
				dy(new URL(`/playground/assets/funcs.cfg-COx92uU9.json`, `` + import.meta.url))
			]).then(([e, t, n, r, i, a, o]) => ({
				funcs: e,
				version: t,
				grammar: n,
				constants: r,
				tables: i,
				tyModel: a,
				funcsCfg: o
			}));
			function r(n) {
				n.data.id && (e.removeEventListener(`message`, r), t(e));
			}
			function i(t) {
				let n = t.data;
				if (n.id === void 0 && n.type === `RATE`) {
					let t = Math.min(n.data, 1);
					ny.set(Zf, t), t >= 1 && e.removeEventListener(`message`, i);
				}
			}
			e.addEventListener(`message`, i), e.addEventListener(`message`, r), e.postMessage({
				type: `META`,
				data: n
			}), t(e);
		} else {
			let n = new Worker(new URL(`/playground/assets/http.worker-ZgigLAS6.js`, `` + import.meta.url));
			function r() {
				n.removeEventListener(`message`, r), t(n);
			}
			n.addEventListener(`message`, r), n.postMessage({
				type: `META`,
				data: e.url
			});
		}
	});
}
function dy(e) {
	return fetch(e).then((e) => e.text());
}
var fy = l([]), py = l((e) => e(fy)), my = l((e) => e(fy).map(_y)), hy = l(null, (e, t, n) => {
	t(fy, (e) => [...e, n]), cy(`breakpoint`, _y(n)).then((e) => {
		e || (b.warn(`Unable to add break point \`${n.algoName} @ [${n.steps.join(`,`)}]\`. This most likely happens when the algorithm was manually modeled instead of being compiled. If you believe this isn’t the case, please report it — it could be a bug.`), t(fy, (e) => e.toSpliced(e.length - 1, 1)));
	});
}), gy = l(null, (e, t, n) => {
	n === `all` ? t(fy, []) : t(fy, (e) => e.toSpliced(n, 1)), ly(`breakpoint`, n);
});
function _y(e) {
	let t, { algoName: n, steps: r, enabled: i } = e;
	return t = [
		!1,
		n,
		r,
		i
	], t;
}
var vy = l(async () => {
	let e = (await sy(`spec/func`)).map(([e, [t, n, r, i, a]]) => [e, {
		fid: e,
		name: t,
		nameForContext: by(t, a ?? void 0),
		nameForCallstack: yy(t, a ?? void 0),
		kind: n,
		params: r.map(([e, t, n]) => ({
			name: e,
			optional: t,
			type: n
		})),
		algoCode: i,
		info: a ?? void 0
	}]);
	return Object.fromEntries(e);
});
l(async (e) => {
	let t = await e(vy);
	return Object.values(t).map((e) => e.name);
});
function yy(e, t) {
	return t?.isBuiltIn ? xy(e) : t?.isSdo && t?.sdoInfo && t?.sdoInfo.prod ? `${t.sdoInfo.method} of ${t.sdoInfo.prod?.astName}` : t?.methodInfo ? t.methodInfo[1] : t?.isClo ? `Abstract Closure captured at ${xy(t.normalizedName)}` : t?.isCont ? `Continuation captured at ${xy(t.normalizedName)}` : e;
}
function by(e, t) {
	if (t?.sdoInfo && t.isSdo === !0) return t.sdoInfo.method;
	if (t?.isBuiltIn === !0) return xy(e);
	if (t?.methodInfo) {
		let [, e] = t.methodInfo;
		return e;
	}
	return t?.isClo || t?.isCont ? xy(t.normalizedName) : e;
}
function xy(e) {
	return e.startsWith(`INTRINSICS.`) ? e.substring(11) : e;
}
var Sy = l(`env`), Cy = l(null), wy = l(async () => ({
	spec: await sy(`spec/version`),
	esmeta: await sy(`meta/version`),
	client: `0.2.1`
})), Ty = `relative inset-0 justify-center
  font-medium bg-neutral-500/0 font-mono
  flex flex-row gap-1 items-center text-lg font-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg active:scale-90 transition-all cursor-pointer p-2
  `, Ey = (0, I.lazy)(() => Zv(() => import(`./SpecVersionView.content-5QWmsS42.js`), __vite__mapDeps([2,1,3])));
function Dy() {
	return (0, X.jsx)(Qv, {
		className: `p-6`,
		title: `Versions`,
		buttonContent: (0, X.jsx)(Oy, {}),
		children: (0, X.jsx)(Ey, {})
	});
}
function Oy() {
	return (0, X.jsx)(`div`, {
		className: Ty,
		children: (0, X.jsx)(rp, {
			intentional: !0,
			error: (0, X.jsxs)(X.Fragment, { children: [(0, X.jsx)(lt, { className: `size-[1em]` }), (0, X.jsx)(`span`, {
				className: `hidden md:block uppercase text-xs font-700`,
				children: `unknwn`
			})] }),
			loading: (0, X.jsxs)(X.Fragment, { children: [(0, X.jsx)(yt, { className: `animate-spin size-[1em]` }), (0, X.jsx)(`span`, {
				className: `hidden md:block uppercase text-xs font-700`,
				children: Ay(``)
			})] }),
			children: (0, X.jsx)(ky, {})
		})
	});
}
function ky() {
	let { spec: e } = _(wy);
	if (e.tag) return (0, X.jsxs)(X.Fragment, { children: [(0, X.jsx)(Pt, { className: `size-[1em]` }), (0, X.jsx)(`span`, {
		className: `hidden md:block uppercase text-xs font-700`,
		children: Ay(e.tag)
	})] });
	if (e.hash) return (0, X.jsxs)(X.Fragment, { children: [(0, X.jsx)(ht, { className: `size-[1em]` }), (0, X.jsx)(`span`, {
		className: `hidden md:block uppercase text-xs font-700`,
		children: Ay(e.hash)
	})] });
	throw Error(`No version info available`);
}
function Ay(e) {
	return e.substring(0, 6).padEnd(6, `\xA0`);
}
var jy = (0, I.lazy)(() => Zv(() => import(`./share-button.content-_WSNWgWi.js`), __vite__mapDeps([4,1,3,5])));
function My() {
	return (0, X.jsx)(Qv, {
		className: `p-6`,
		title: `Share`,
		buttonContent: (0, X.jsx)(`div`, {
			className: `flex flex-row gap-1 items-center text-lg font-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg active:scale-90 transition-all cursor-pointer p-2`,
			title: `Share`,
			children: (0, X.jsx)(jt, { className: `size-[1em]` })
		}),
		children: (0, X.jsx)(jy, {})
	});
}
var Ny = (0, I.lazy)(() => Zv(() => import(`./settings.content-BUlldC-c.js`), __vite__mapDeps([6,1,3,7,8,9,10])));
function Py() {
	return (0, X.jsx)(Qv, {
		className: `p-6`,
		title: `Settings`,
		buttonContent: (0, X.jsx)(`div`, {
			className: `flex flex-row gap-1 items-center text-lg font-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg active:scale-90 transition-all cursor-pointer p-2`,
			title: `Share`,
			children: (0, X.jsx)(At, { className: `size-[1em]` })
		}),
		children: (0, X.jsx)(Ny, {})
	});
}
function Fy() {
	return (0, X.jsxs)(`svg`, {
		"aria-disabled": !0,
		fill: `currentColor`,
		className: `size-[1em]`,
		viewBox: `0 0 24 24`,
		xmlns: `http://www.w3.org/2000/svg`,
		children: [(0, X.jsx)(`title`, { children: `GitHub` }), (0, X.jsx)(`path`, { d: `M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12` })]
	});
}
function Iy() {
	return (0, X.jsxs)(`nav`, {
		className: `min-h-11 max-h-11 h-11 w-full text-sm xl:px-12 transition-[padding] flex flex-row justify-between items-center px-4`,
		children: [(0, X.jsx)(Ly, {}), (0, X.jsx)(Ry, {})]
	});
}
function Ly() {
	return (0, X.jsx)(`div`, {
		className: `flex flex-row items-center justify-start`,
		children: (0, X.jsxs)(`span`, {
			className: `font-400 text-base text-ellipsis overflow-hidden line-clamp-1`,
			children: [(0, X.jsxs)(`a`, {
				className: `hover:underline`,
				href: c,
				target: `_blank`,
				rel: `noopener noreferrer`,
				title: `Open ESMeta Official Homepage`,
				children: [(0, X.jsx)(`img`, {
					src: new URL(`/playground/assets/icon-lhOuE5jW.jpeg`, `` + import.meta.url).href,
					"aria-hidden": !0,
					alt: `ESMeta Logo`,
					className: `size-[1.25em] align-text-top inline-block mr-1 rounded-sm`
				}), (0, X.jsx)(`b`, {
					className: `font-800`,
					children: `ESMeta`
				})]
			}), (0, X.jsx)(`span`, {
				className: ``,
				children: ` / Double Debugger Playground`
			})]
		})
	});
}
function Ry() {
	return (0, X.jsxs)(`div`, {
		className: `flex flex-row items-center justify-end md:gap-1`,
		children: [
			(0, X.jsxs)(`a`, {
				className: `flex flex-row gap-1 items-center font-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg active:scale-90 transition-all cursor-pointer p-2 hover:underline`,
				href: S,
				target: `_blank`,
				rel: `noopener noreferrer`,
				title: `Discover ESMeta Project on GitHub`,
				children: [(0, X.jsx)(`span`, {
					className: `text-lg`,
					children: (0, X.jsx)(ot, { className: `size-[1em]` })
				}), `Docs`]
			}),
			(0, X.jsxs)(`a`, {
				className: `flex flex-row gap-1 items-center font-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg active:scale-90 transition-all cursor-pointer p-2 hover:underline`,
				href: f,
				target: `_blank`,
				rel: `noopener noreferrer`,
				title: `Discover ESMeta Project on GitHub`,
				children: [(0, X.jsx)(`span`, {
					className: `text-lg`,
					children: (0, X.jsx)(Fy, {})
				}), `GitHub`]
			}),
			(0, X.jsx)(`div`, {
				className: `h-6 px-1 flex flex-row`,
				children: (0, X.jsx)(`div`, { className: `w-[1px] h-6 bg-neutral-300 dark:bg-neutral-700` })
			}),
			(0, X.jsx)(ey, {}),
			(0, X.jsx)(Dy, {}),
			(0, X.jsx)(My, {}),
			(0, X.jsx)(Py, {})
		]
	});
}
function zy(e, t) {
	let n = getComputedStyle(e);
	return t * parseFloat(n.fontSize);
}
function By(e, t) {
	let n = getComputedStyle(e.ownerDocument.documentElement);
	return t * parseFloat(n.fontSize);
}
function Vy(e) {
	return e / 100 * window.innerHeight;
}
function Hy(e) {
	return e / 100 * window.innerWidth;
}
function Uy(e) {
	switch (typeof e) {
		case `number`: return [e, `px`];
		case `string`: {
			let t = parseFloat(e);
			return e.endsWith(`%`) ? [t, `%`] : e.endsWith(`px`) ? [t, `px`] : e.endsWith(`rem`) ? [t, `rem`] : e.endsWith(`em`) ? [t, `em`] : e.endsWith(`vh`) ? [t, `vh`] : e.endsWith(`vw`) ? [t, `vw`] : [t, `%`];
		}
	}
}
function Wy({ groupSize: e, panelElement: t, styleProp: n }) {
	let r, [i, a] = Uy(n);
	switch (a) {
		case `%`:
			r = i / 100 * e;
			break;
		case `px`:
			r = i;
			break;
		case `rem`:
			r = By(t, i);
			break;
		case `em`:
			r = zy(t, i);
			break;
		case `vh`:
			r = Vy(i);
			break;
		case `vw`:
			r = Hy(i);
			break;
	}
	return r;
}
function Gy(e) {
	return parseFloat(e.toFixed(3));
}
function Ky({ group: e }) {
	let { orientation: t, panels: n } = e;
	return n.reduce((e, n) => (e += t === `horizontal` ? n.element.offsetWidth : n.element.offsetHeight, e), 0);
}
function qy(e) {
	let { panels: t } = e, n = Ky({ group: e });
	return n === 0 ? t.map((e) => ({
		groupResizeBehavior: e.panelConstraints.groupResizeBehavior,
		collapsedSize: 0,
		collapsible: e.panelConstraints.collapsible === !0,
		defaultSize: void 0,
		disabled: e.panelConstraints.disabled,
		minSize: 0,
		maxSize: 100,
		panelId: e.id
	})) : t.map((e) => {
		let { element: t, panelConstraints: r } = e, i = 0;
		r.collapsedSize !== void 0 && (i = Gy(Wy({
			groupSize: n,
			panelElement: t,
			styleProp: r.collapsedSize
		}) / n * 100));
		let a;
		r.defaultSize !== void 0 && (a = Gy(Wy({
			groupSize: n,
			panelElement: t,
			styleProp: r.defaultSize
		}) / n * 100));
		let o = 0;
		r.minSize !== void 0 && (o = Gy(Wy({
			groupSize: n,
			panelElement: t,
			styleProp: r.minSize
		}) / n * 100));
		let s = 100;
		return r.maxSize !== void 0 && (s = Gy(Wy({
			groupSize: n,
			panelElement: t,
			styleProp: r.maxSize
		}) / n * 100)), {
			groupResizeBehavior: r.groupResizeBehavior,
			collapsedSize: i,
			collapsible: r.collapsible === !0,
			defaultSize: a,
			disabled: r.disabled,
			minSize: o,
			maxSize: s,
			panelId: e.id
		};
	});
}
function Jy(e, t = `Assertion error`) {
	if (!e) throw Error(t);
}
function Yy(e, t) {
	return Array.from(t).sort(e === `horizontal` ? Xy : Zy);
}
function Xy(e, t) {
	let n = e.element.offsetLeft - t.element.offsetLeft;
	return n === 0 ? e.element.offsetWidth - t.element.offsetWidth : n;
}
function Zy(e, t) {
	let n = e.element.offsetTop - t.element.offsetTop;
	return n === 0 ? e.element.offsetHeight - t.element.offsetHeight : n;
}
function Qy(e) {
	return typeof e == `object` && !!e && `nodeType` in e && e.nodeType === Node.ELEMENT_NODE;
}
function $y(e, t) {
	return {
		x: e.x >= t.left && e.x <= t.right ? 0 : Math.min(Math.abs(e.x - t.left), Math.abs(e.x - t.right)),
		y: e.y >= t.top && e.y <= t.bottom ? 0 : Math.min(Math.abs(e.y - t.top), Math.abs(e.y - t.bottom))
	};
}
function eb({ orientation: e, rects: t, targetRect: n }) {
	let r = {
		x: n.x + n.width / 2,
		y: n.y + n.height / 2
	}, i, a = Number.MAX_VALUE;
	for (let n of t) {
		let { x: t, y: o } = $y(r, n), s = e === `horizontal` ? t : o;
		s < a && (a = s, i = n);
	}
	return Jy(i, `No rect found`), i;
}
var tb;
function nb() {
	return tb === void 0 && (tb = typeof matchMedia == `function` ? !!matchMedia(`(pointer:coarse)`).matches : !1), tb;
}
function rb(e) {
	let { element: t, orientation: n, panels: r, separators: i } = e, a = Yy(n, Array.from(t.children).filter(Qy).map((e) => ({ element: e }))).map(({ element: e }) => e), o = [], s = !1, c = !1, l = -1, u = -1, d = 0, f, p = [];
	{
		let e = -1;
		for (let t of a) t.hasAttribute(`data-panel`) && (e++, t.hasAttribute(`data-disabled`) || (d++, l === -1 && (l = e), u = e));
	}
	if (d > 1) {
		let t = -1;
		for (let d of a) if (d.hasAttribute(`data-panel`)) {
			t++;
			let i = r.find((e) => e.element === d);
			if (i) {
				if (f) {
					let r = f.element.getBoundingClientRect(), a = d.getBoundingClientRect(), m;
					if (c) {
						let e = n === `horizontal` ? new DOMRect(r.right, r.top, 0, r.height) : new DOMRect(r.left, r.bottom, r.width, 0), t = n === `horizontal` ? new DOMRect(a.left, a.top, 0, a.height) : new DOMRect(a.left, a.top, a.width, 0);
						switch (p.length) {
							case 0:
								m = [e, t];
								break;
							case 1: {
								let i = p[0];
								m = [i, eb({
									orientation: n,
									rects: [r, a],
									targetRect: i.element.getBoundingClientRect()
								}) === r ? t : e];
								break;
							}
							default:
								m = p;
								break;
						}
					} else m = p.length ? p : [n === `horizontal` ? new DOMRect(r.right, a.top, a.left - r.right, a.height) : new DOMRect(a.left, r.bottom, a.width, a.top - r.bottom)];
					for (let n of m) {
						let r = `width` in n ? n : n.element.getBoundingClientRect(), a = nb() ? e.resizeTargetMinimumSize.coarse : e.resizeTargetMinimumSize.fine;
						if (r.width < a) {
							let e = a - r.width;
							r = new DOMRect(r.x - e / 2, r.y, r.width + e, r.height);
						}
						if (r.height < a) {
							let e = a - r.height;
							r = new DOMRect(r.x, r.y - e / 2, r.width, r.height + e);
						}
						!s && !(t <= l || t > u) && o.push({
							group: e,
							groupSize: Ky({ group: e }),
							panels: [f, i],
							separator: `width` in n ? void 0 : n,
							rect: r
						}), s = !1;
					}
				}
				c = !1, f = i, p = [];
			}
		} else if (d.hasAttribute(`data-separator`)) {
			d.ariaDisabled !== null && (s = !0);
			let e = i.find((e) => e.element === d);
			e ? p.push(e) : (f = void 0, p = []);
		} else c = !0;
	}
	return o;
}
var ib = class {
	#e = {};
	addListener(e, t) {
		let n = this.#e[e];
		return n === void 0 ? this.#e[e] = [t] : n.includes(t) || n.push(t), () => {
			this.removeListener(e, t);
		};
	}
	emit(e, t) {
		let n = this.#e[e];
		if (n !== void 0) if (n.length === 1) n[0].call(null, t);
		else {
			let e = !1, r = null, i = Array.from(n);
			for (let n = 0; n < i.length; n++) {
				let a = i[n];
				try {
					a.call(null, t);
				} catch (t) {
					r === null && (e = !0, r = t);
				}
			}
			if (e) throw r;
		}
	}
	removeAllListeners() {
		this.#e = {};
	}
	removeListener(e, t) {
		let n = this.#e[e];
		if (n !== void 0) {
			let e = n.indexOf(t);
			e >= 0 && n.splice(e, 1);
		}
	}
}, ab = /* @__PURE__ */ new Map(), ob = new ib();
function sb(e) {
	ab = new Map(ab), ab.delete(e);
}
function cb(e, t) {
	for (let [t] of ab) if (t.id === e) return t;
}
function lb(e, t) {
	for (let [t, n] of ab) if (t.id === e) return n;
	if (t) throw Error(`Could not find data for Group with id ${e}`);
}
function ub() {
	return ab;
}
function db(e, t) {
	return ob.addListener(`groupChange`, (n) => {
		n.group.id === e && t(n);
	});
}
function fb(e, t, n) {
	let r = ab.get(e);
	ab = new Map(ab), ab.set(e, t), ob.emit(`groupChange`, {
		group: e,
		isUserInteraction: n?.isUserInteraction === !0,
		prev: r,
		next: t
	});
}
function pb(e, t, n) {
	let r, i = {
		x: Infinity,
		y: Infinity
	};
	for (let a of t) {
		let t = $y(n, a.rect);
		switch (e) {
			case `horizontal`:
				t.x <= i.x && (r = a, i = t);
				break;
			case `vertical`:
				t.y <= i.y && (r = a, i = t);
				break;
		}
	}
	return r ? {
		distance: i,
		hitRegion: r
	} : void 0;
}
function mb(e) {
	return typeof e == `object` && !!e && `nodeType` in e && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
function hb(e, t) {
	if (e === t) throw Error(`Cannot compare node with itself`);
	let n = {
		a: xb(e),
		b: xb(t)
	}, r;
	for (; n.a.at(-1) === n.b.at(-1);) r = n.a.pop(), n.b.pop();
	Jy(r, `Stacking order can only be calculated for elements with a common ancestor`);
	let i = {
		a: bb(yb(n.a)),
		b: bb(yb(n.b))
	};
	if (i.a === i.b) {
		let e = r.childNodes, t = {
			a: n.a.at(-1),
			b: n.b.at(-1)
		}, i = e.length;
		for (; i--;) {
			let n = e[i];
			if (n === t.a) return 1;
			if (n === t.b) return -1;
		}
	}
	return Math.sign(i.a - i.b);
}
var gb = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function _b(e) {
	let t = getComputedStyle(Sb(e) ?? e).display;
	return t === `flex` || t === `inline-flex`;
}
function vb(e) {
	let t = getComputedStyle(e);
	return !!(t.position === `fixed` || t.zIndex !== `auto` && (t.position !== `static` || _b(e)) || +t.opacity < 1 || `transform` in t && t.transform !== `none` || `webkitTransform` in t && t.webkitTransform !== `none` || `mixBlendMode` in t && t.mixBlendMode !== `normal` || `filter` in t && t.filter !== `none` || `webkitFilter` in t && t.webkitFilter !== `none` || `isolation` in t && t.isolation === `isolate` || gb.test(t.willChange) || t.webkitOverflowScrolling === `touch`);
}
function yb(e) {
	let t = e.length;
	for (; t--;) {
		let n = e[t];
		if (Jy(n, `Missing node`), vb(n)) return n;
	}
	return null;
}
function bb(e) {
	return e && Number(getComputedStyle(e).zIndex) || 0;
}
function xb(e) {
	let t = [];
	for (; e;) t.push(e), e = Sb(e);
	return t;
}
function Sb(e) {
	let { parentNode: t } = e;
	return mb(t) ? t.host : t;
}
function Cb(e, t) {
	return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
function wb({ groupElement: e, hitRegion: t, pointerEventTarget: n }) {
	if (!Qy(n) || n.contains(e) || e.contains(n)) return !0;
	if (hb(n, e) > 0) {
		let r = n;
		for (; r;) {
			if (r.contains(e)) return !0;
			if (Cb(r.getBoundingClientRect(), t)) return !1;
			r = r.parentElement;
		}
	}
	return !0;
}
function Tb(e, t) {
	let n = [];
	return t.forEach((t, r) => {
		if (r.disabled) return;
		let i = rb(r), a = pb(r.orientation, i, {
			x: e.clientX,
			y: e.clientY
		});
		a && a.distance.x <= 0 && a.distance.y <= 0 && wb({
			groupElement: r.element,
			hitRegion: a.hitRegion.rect,
			pointerEventTarget: e.target
		}) && n.push(a.hitRegion);
	}), n;
}
function Eb(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] != t[n]) return !1;
	return !0;
}
function Db(e, t, n = 0) {
	return Math.abs(Gy(e) - Gy(t)) <= n;
}
function Ob(e, t) {
	return Db(e, t) ? 0 : e > t ? 1 : -1;
}
function kb({ overrideDisabledPanels: e, panelConstraints: t, prevSize: n, size: r }) {
	let { collapsedSize: i = 0, collapsible: a, disabled: o, maxSize: s = 100, minSize: c = 0 } = t;
	if (o && !e) return n;
	if (Ob(r, c) < 0) if (a) {
		let e = (i + c) / 2;
		r = Ob(r, e) < 0 ? i : c;
	} else r = c;
	return r = Math.min(s, r), r = Gy(r), r;
}
function Ab({ delta: e, initialLayout: t, panelConstraints: n, pivotIndices: r, prevLayout: i, trigger: a }) {
	if (Db(e, 0)) return t;
	let o = a === `imperative-api`, s = Object.values(t), c = Object.values(i), l = [...s], [u, d] = r;
	Jy(u != null, `Invalid first pivot index`), Jy(d != null, `Invalid second pivot index`);
	let f = 0;
	switch (a) {
		case `keyboard`:
			{
				let t = e < 0 ? d : u, r = n[t];
				Jy(r, `Panel constraints not found for index ${t}`);
				let { collapsedSize: i = 0, collapsible: a, minSize: o = 0 } = r;
				if (a) {
					let n = s[t];
					if (Jy(n != null, `Previous layout not found for panel index ${t}`), Db(n, i)) {
						let t = o - n;
						Ob(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
					}
				}
			}
			{
				let t = e < 0 ? u : d, r = n[t];
				Jy(r, `No panel constraints found for index ${t}`);
				let { collapsedSize: i = 0, collapsible: a, minSize: o = 0 } = r;
				if (a) {
					let n = s[t];
					if (Jy(n != null, `Previous layout not found for panel index ${t}`), Db(n, o)) {
						let t = n - i;
						Ob(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
					}
				}
			}
			break;
		default: {
			let t = e < 0 ? d : u, r = n[t];
			Jy(r, `Panel constraints not found for index ${t}`);
			let i = s[t], { collapsible: a, collapsedSize: o, minSize: c } = r;
			if (a && Ob(i, c) < 0) if (e > 0) {
				let t = c - o, n = t / 2;
				Ob(i + e, c) < 0 && (e = Ob(e, n) <= 0 ? 0 : t);
			} else {
				let t = c - o, n = 100 - t / 2;
				Ob(i - e, c) < 0 && (e = Ob(100 + e, n) > 0 ? 0 : -t);
			}
			break;
		}
	}
	{
		let t = e < 0 ? 1 : -1, r = e < 0 ? d : u, i = 0;
		for (;;) {
			let e = s[r];
			Jy(e != null, `Previous layout not found for panel index ${r}`);
			let a = kb({
				overrideDisabledPanels: o,
				panelConstraints: n[r],
				prevSize: e,
				size: 100
			}) - e;
			if (i += a, r += t, r < 0 || r >= n.length) break;
		}
		let a = Math.min(Math.abs(e), Math.abs(i));
		e = e < 0 ? 0 - a : a;
	}
	{
		let t = e < 0 ? u : d;
		for (; t >= 0 && t < n.length;) {
			let r = Math.abs(e) - Math.abs(f), i = s[t];
			Jy(i != null, `Previous layout not found for panel index ${t}`);
			let a = i - r, c = kb({
				overrideDisabledPanels: o,
				panelConstraints: n[t],
				prevSize: i,
				size: a
			});
			if (!Db(i, c) && (f += i - c, l[t] = c, f.toFixed(3).localeCompare(Math.abs(e).toFixed(3), void 0, { numeric: !0 }) >= 0)) break;
			e < 0 ? t-- : t++;
		}
	}
	if (Eb(c, l)) return i;
	{
		let t = e < 0 ? d : u, r = s[t];
		Jy(r != null, `Previous layout not found for panel index ${t}`);
		let i = r + f, a = kb({
			overrideDisabledPanels: o,
			panelConstraints: n[t],
			prevSize: r,
			size: i
		});
		if (l[t] = a, !Db(a, i)) {
			let t = i - a, r = e < 0 ? d : u;
			for (; r >= 0 && r < n.length;) {
				let i = l[r];
				Jy(i != null, `Previous layout not found for panel index ${r}`);
				let a = i + t, s = kb({
					overrideDisabledPanels: o,
					panelConstraints: n[r],
					prevSize: i,
					size: a
				});
				if (Db(i, s) || (t -= s - i, l[r] = s), Db(t, 0)) break;
				e > 0 ? r-- : r++;
			}
		}
	}
	if (!Db(Object.values(l).reduce((e, t) => t + e, 0), 100, .1)) return i;
	let p = Object.keys(i);
	return l.reduce((e, t, n) => (e[p[n]] = t, e), {});
}
function jb(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let n in e) if (t[n] === void 0 || Ob(e[n], t[n]) !== 0) return !1;
	return !0;
}
function Mb({ layout: e, panelConstraints: t }) {
	let n = Object.values(e), r = [...n], i = r.reduce((e, t) => e + t, 0);
	if (r.length !== t.length) throw Error(`Invalid ${t.length} panel layout: ${r.map((e) => `${e}%`).join(`, `)}`);
	if (!Db(i, 100) && r.length > 0) for (let e = 0; e < t.length; e++) {
		let t = r[e];
		Jy(t != null, `No layout data found for index ${e}`), r[e] = 100 / i * t;
	}
	let a = 0;
	for (let e = 0; e < t.length; e++) {
		let i = n[e];
		Jy(i != null, `No layout data found for index ${e}`);
		let o = r[e];
		Jy(o != null, `No layout data found for index ${e}`);
		let s = kb({
			overrideDisabledPanels: !0,
			panelConstraints: t[e],
			prevSize: i,
			size: o
		});
		o != s && (a += o - s, r[e] = s);
	}
	if (!Db(a, 0)) for (let e = 0; e < t.length; e++) {
		let n = r[e];
		Jy(n != null, `No layout data found for index ${e}`);
		let i = n + a, o = kb({
			overrideDisabledPanels: !0,
			panelConstraints: t[e],
			prevSize: n,
			size: i
		});
		if (n !== o && (a -= o - n, r[e] = o, Db(a, 0))) break;
	}
	let o = Object.keys(e);
	return r.reduce((e, t, n) => (e[o[n]] = t, e), {});
}
function Nb({ groupId: e, panelId: t }) {
	let n = () => {
		let t = ub();
		for (let [n, { defaultLayoutDeferred: r, derivedPanelConstraints: i, layout: a, groupSize: o, separatorToPanels: s }] of t) if (n.id === e) return {
			defaultLayoutDeferred: r,
			derivedPanelConstraints: i,
			group: n,
			groupSize: o,
			layout: a,
			separatorToPanels: s
		};
		throw Error(`Group ${e} not found`);
	}, r = () => {
		let e = n().derivedPanelConstraints.find((e) => e.panelId === t);
		if (e !== void 0) return e;
		throw Error(`Panel constraints not found for Panel ${t}`);
	}, i = () => {
		let e = n().group.panels.find((e) => e.id === t);
		if (e !== void 0) return e;
		throw Error(`Layout not found for Panel ${t}`);
	}, a = () => {
		let e = n().layout[t];
		if (e !== void 0) return e;
		throw Error(`Layout not found for Panel ${t}`);
	}, o = ({ nextSize: e, panels: n, prevLayout: r, derivedPanelConstraints: i }) => {
		let o = a(), s = n.findIndex((e) => e.id === t), c = s === 0, l = s === n.length - 1;
		if (l && e < o && (c || n.slice(0, s).every((e, t) => {
			let n = i[t];
			return n?.collapsible && Db(n.collapsedSize, r[n.panelId]);
		}))) {
			let e = n.slice(0, s).reduce((e, t) => e + r[t.id], 0);
			return {
				...r,
				[t]: Gy(100 - e)
			};
		}
		return Ab({
			delta: l ? o - e : e - o,
			initialLayout: r,
			panelConstraints: i,
			pivotIndices: l ? [s - 1, s] : [s, s + 1],
			prevLayout: r,
			trigger: `imperative-api`
		});
	}, s = (e) => {
		if (e === a()) return;
		let { defaultLayoutDeferred: t, derivedPanelConstraints: r, group: i, groupSize: s, layout: c, separatorToPanels: l } = n(), u = Mb({
			layout: o({
				nextSize: e,
				panels: i.panels,
				prevLayout: c,
				derivedPanelConstraints: r
			}),
			panelConstraints: r
		});
		jb(c, u) || fb(i, {
			defaultLayoutDeferred: t,
			derivedPanelConstraints: r,
			groupSize: s,
			layout: u,
			separatorToPanels: l
		});
	};
	return {
		collapse: () => {
			let { collapsible: e, collapsedSize: t } = r(), { mutableValues: n } = i(), o = a();
			e && o !== t && (n.expandToSize = o, s(t));
		},
		expand: () => {
			let { collapsible: e, collapsedSize: t, minSize: n } = r(), { mutableValues: o } = i(), c = a();
			if (e && c === t) {
				let e = o.expandToSize ?? n;
				e === 0 && (e = 1), s(e);
			}
		},
		getSize: () => {
			let { group: e } = n(), t = a(), { element: r } = i();
			return {
				asPercentage: t,
				inPixels: e.orientation === `horizontal` ? r.offsetWidth : r.offsetHeight
			};
		},
		isCollapsed: () => {
			let { collapsible: e, collapsedSize: t } = r(), n = a();
			return e && Db(t, n);
		},
		resize: (e) => {
			let { group: t } = n(), { element: r } = i(), a = Ky({ group: t }), o = Gy(Wy({
				groupSize: a,
				panelElement: r,
				styleProp: e
			}) / a * 100);
			s(o);
		}
	};
}
function Pb(e) {
	e.defaultPrevented || Tb(e, ub()).forEach((t) => {
		if (t.separator && !t.separator.disableDoubleClick) {
			let n = t.panels.find((e) => e.panelConstraints.defaultSize !== void 0);
			if (n) {
				let r = n.panelConstraints.defaultSize, i = Nb({
					groupId: t.group.id,
					panelId: n.id
				});
				i && r !== void 0 && (i.resize(r), e.preventDefault());
			}
		}
	});
}
function Fb(e) {
	let t = ub();
	for (let [n] of t) if (n.separators.some((t) => t.element === e)) return n;
	throw Error(`Could not find parent Group for separator element`);
}
function Ib({ groupId: e }) {
	let t = () => {
		let t = ub();
		for (let [n, r] of t) if (n.id === e) return {
			group: n,
			...r
		};
		throw Error(`Could not find Group with id "${e}"`);
	};
	return {
		getLayout() {
			let { defaultLayoutDeferred: e, layout: n } = t();
			return e ? {} : n;
		},
		setLayout(e) {
			let { defaultLayoutDeferred: n, derivedPanelConstraints: r, group: i, groupSize: a, layout: o, separatorToPanels: s } = t(), c = Mb({
				layout: e,
				panelConstraints: r
			});
			return n ? o : (jb(o, c) || fb(i, {
				defaultLayoutDeferred: n,
				derivedPanelConstraints: r,
				groupSize: a,
				layout: c,
				separatorToPanels: s
			}), c);
		}
	};
}
function Lb(e, t) {
	let n = Fb(e), r = lb(n.id, !0), i = n.separators.find((t) => t.element === e);
	Jy(i, `Matching separator not found`);
	let a = r.separatorToPanels.get(i);
	Jy(a, `Matching panels not found`);
	let o = a.map((e) => n.panels.indexOf(e)), s = Ib({ groupId: n.id }).getLayout(), c = Mb({
		layout: Ab({
			delta: t,
			initialLayout: s,
			panelConstraints: r.derivedPanelConstraints,
			pivotIndices: o,
			prevLayout: s,
			trigger: `keyboard`
		}),
		panelConstraints: r.derivedPanelConstraints
	});
	jb(s, c) || fb(n, {
		defaultLayoutDeferred: r.defaultLayoutDeferred,
		derivedPanelConstraints: r.derivedPanelConstraints,
		groupSize: r.groupSize,
		layout: c,
		separatorToPanels: r.separatorToPanels
	}, { isUserInteraction: !0 });
}
function Rb(e) {
	if (e.defaultPrevented) return;
	let t = e.currentTarget, n = Fb(t);
	if (!n.disabled) switch (e.key) {
		case `ArrowDown`:
			e.preventDefault(), n.orientation === `vertical` && Lb(t, 5);
			break;
		case `ArrowLeft`:
			e.preventDefault(), n.orientation === `horizontal` && Lb(t, -5);
			break;
		case `ArrowRight`:
			e.preventDefault(), n.orientation === `horizontal` && Lb(t, 5);
			break;
		case `ArrowUp`:
			e.preventDefault(), n.orientation === `vertical` && Lb(t, -5);
			break;
		case `End`:
			e.preventDefault(), Lb(t, 100);
			break;
		case `Enter`: {
			e.preventDefault();
			let n = Fb(t), { derivedPanelConstraints: r, layout: i, separatorToPanels: a } = lb(n.id, !0), o = n.separators.find((e) => e.element === t);
			Jy(o, `Matching separator not found`);
			let s = a.get(o);
			Jy(s, `Matching panels not found`);
			let c = s[0], l = r.find((e) => e.panelId === c.id);
			if (Jy(l, `Panel metadata not found`), l.collapsible) {
				let e = i[c.id];
				Lb(t, (l.collapsedSize === e ? n.mutableState.expandedPanelSizes[c.id] ?? l.minSize : l.collapsedSize) - e);
			}
			break;
		}
		case `F6`: {
			e.preventDefault();
			let n = Fb(t).separators.map((e) => e.element), r = Array.from(n).findIndex((t) => t === e.currentTarget);
			Jy(r !== null, `Index not found`), n[e.shiftKey ? r > 0 ? r - 1 : n.length - 1 : r + 1 < n.length ? r + 1 : 0].focus({ preventScroll: !0 });
			break;
		}
		case `Home`:
			e.preventDefault(), Lb(t, -100);
			break;
	}
}
var zb = {
	cursorFlags: 0,
	state: `inactive`
}, Bb = new ib();
function Vb() {
	return zb;
}
function Hb(e) {
	return Bb.addListener(`change`, e);
}
function Ub(e) {
	let t = zb, n = { ...zb };
	n.cursorFlags = e, zb = n, Bb.emit(`change`, {
		prev: t,
		next: n
	});
}
function Wb(e) {
	let t = zb;
	zb = e, Bb.emit(`change`, {
		prev: t,
		next: e
	});
}
function Gb(e) {
	if (e.defaultPrevented || e.pointerType === `mouse` && e.button > 0) return;
	let t = ub(), n = Tb(e, t), r = /* @__PURE__ */ new Map(), i = !1;
	n.forEach((e) => {
		e.separator && (i || (i = !0, e.separator.element.focus({
			focusVisible: !1,
			preventScroll: !0
		})));
		let n = t.get(e.group);
		n && r.set(e.group, n.layout);
	}), Wb({
		cursorFlags: 0,
		hitRegions: n,
		initialLayoutMap: r,
		pointerDownAtPoint: {
			x: e.clientX,
			y: e.clientY
		},
		state: `active`
	}), n.length && e.preventDefault();
}
var Kb = (e) => e, qb = () => {}, Jb = 1, Yb = 2, Xb = 4, Zb = 8, Qb = 3, $b = 12, ex;
function tx() {
	return ex === void 0 && (ex = !1, typeof window < `u` && (window.navigator.userAgent.includes(`Chrome`) || window.navigator.userAgent.includes(`Firefox`)) && (ex = !0)), ex;
}
function nx({ cursorFlags: e, groups: t, state: n }) {
	let r = 0, i = 0;
	switch (n) {
		case `active`:
		case `hover`: t.forEach((e) => {
			if (!e.mutableState.disableCursor) switch (e.orientation) {
				case `horizontal`:
					r++;
					break;
				case `vertical`:
					i++;
					break;
			}
		});
	}
	if (!(r === 0 && i === 0)) {
		switch (n) {
			case `active`:
				if (e && tx()) {
					let t = (e & Jb) !== 0, n = (e & Yb) !== 0, r = (e & Xb) !== 0, i = (e & Zb) !== 0;
					if (t) return r ? `se-resize` : i ? `ne-resize` : `e-resize`;
					if (n) return r ? `sw-resize` : i ? `nw-resize` : `w-resize`;
					if (r) return `s-resize`;
					if (i) return `n-resize`;
				}
				break;
		}
		return tx() ? r > 0 && i > 0 ? `move` : r > 0 ? `ew-resize` : `ns-resize` : r > 0 && i > 0 ? `grab` : r > 0 ? `col-resize` : `row-resize`;
	}
}
var rx = /* @__PURE__ */ new WeakMap();
function ix(e) {
	if (e.defaultView === null || e.defaultView === void 0) return;
	let { prevStyle: t, styleSheet: n } = rx.get(e) ?? {};
	n === void 0 && (n = new e.defaultView.CSSStyleSheet(), e.adoptedStyleSheets && (Object.isExtensible(e.adoptedStyleSheets) ? e.adoptedStyleSheets.push(n) : e.adoptedStyleSheets = [...e.adoptedStyleSheets, n]));
	let r = Vb();
	switch (r.state) {
		case `active`:
		case `hover`: {
			let e = nx({
				cursorFlags: r.cursorFlags,
				groups: r.hitRegions.map((e) => e.group),
				state: r.state
			}), i = `*, *:hover {cursor: ${e} !important; }`;
			if (t === i) return;
			t = i, e ? n.cssRules.length === 0 ? n.insertRule(i) : n.replaceSync(i) : n.cssRules.length === 1 && n.deleteRule(0);
			break;
		}
		case `inactive`:
			t = void 0, n.cssRules.length === 1 && n.deleteRule(0);
			break;
	}
	rx.set(e, {
		prevStyle: t,
		styleSheet: n
	});
}
function ax({ document: e, event: t, hitRegions: n, initialLayoutMap: r, mountedGroups: i, pointerDownAtPoint: a, prevCursorFlags: o }) {
	let s = 0;
	n.forEach((e) => {
		let { group: n, groupSize: o } = e, { orientation: c, panels: l } = n, { disableCursor: u } = n.mutableState, d = 0;
		d = a ? c === `horizontal` ? (t.clientX - a.x) / o * 100 : (t.clientY - a.y) / o * 100 : c === `horizontal` ? t.clientX < 0 ? -100 : 100 : t.clientY < 0 ? -100 : 100;
		let f = r.get(n), p = i.get(n);
		if (!f || !p) return;
		let { defaultLayoutDeferred: m, derivedPanelConstraints: h, groupSize: g, layout: _, separatorToPanels: v } = p;
		if (h && _ && v) {
			let t = Ab({
				delta: d,
				initialLayout: f,
				panelConstraints: h,
				pivotIndices: e.panels.map((e) => l.indexOf(e)),
				prevLayout: _,
				trigger: `mouse-or-touch`
			});
			if (jb(t, _)) {
				if (d !== 0 && !u) switch (c) {
					case `horizontal`:
						s |= d < 0 ? Jb : Yb;
						break;
					case `vertical`:
						s |= d < 0 ? Xb : Zb;
						break;
				}
			} else fb(e.group, {
				defaultLayoutDeferred: m,
				derivedPanelConstraints: h,
				groupSize: g,
				layout: t,
				separatorToPanels: v
			});
		}
	});
	let c = 0;
	t.movementX === 0 ? c |= o & Qb : c |= s & Qb, t.movementY === 0 ? c |= o & $b : c |= s & $b, Ub(c), ix(e);
}
function ox(e) {
	let t = ub(), n = Vb();
	switch (n.state) {
		case `active`: ax({
			document: e.currentTarget,
			event: e,
			hitRegions: n.hitRegions,
			initialLayoutMap: n.initialLayoutMap,
			mountedGroups: t,
			prevCursorFlags: n.cursorFlags
		});
	}
}
function sx(e) {
	if (e.defaultPrevented) return;
	let t = Vb(), n = ub();
	switch (t.state) {
		case `active`:
			if (e.buttons === 0) {
				Wb({
					cursorFlags: 0,
					state: `inactive`
				}), t.hitRegions.forEach((e) => {
					let t = lb(e.group.id, !0);
					fb(e.group, t, { isUserInteraction: !0 });
				});
				return;
			}
			for (let n of t.hitRegions) if (n.separator) {
				let { element: t } = n.separator;
				t.hasPointerCapture?.(e.pointerId) || t.setPointerCapture?.(e.pointerId);
			}
			ax({
				document: e.currentTarget,
				event: e,
				hitRegions: t.hitRegions,
				initialLayoutMap: t.initialLayoutMap,
				mountedGroups: n,
				pointerDownAtPoint: t.pointerDownAtPoint,
				prevCursorFlags: t.cursorFlags
			});
			break;
		default: {
			let r = Tb(e, n);
			r.length === 0 ? t.state !== `inactive` && Wb({
				cursorFlags: 0,
				state: `inactive`
			}) : Wb({
				cursorFlags: 0,
				hitRegions: r,
				state: `hover`
			}), ix(e.currentTarget);
			break;
		}
	}
}
function cx(e) {
	if (e.relatedTarget instanceof HTMLIFrameElement) switch (Vb().state) {
		case `hover`: Wb({
			cursorFlags: 0,
			state: `inactive`
		});
	}
}
function lx(e) {
	if (e.defaultPrevented || e.pointerType === `mouse` && e.button > 0) return;
	let t = Vb();
	switch (t.state) {
		case `active`: Wb({
			cursorFlags: 0,
			state: `inactive`
		}), t.hitRegions.length > 0 && (ix(e.currentTarget), t.hitRegions.forEach((e) => {
			let t = lb(e.group.id, !0);
			fb(e.group, t, { isUserInteraction: !0 });
		}), e.preventDefault());
	}
}
function ux(e) {
	let t = 0, n = 0, r = {};
	for (let i of e) if (i.defaultSize !== void 0) {
		t++;
		let e = Gy(i.defaultSize);
		n += e, r[i.panelId] = e;
	} else r[i.panelId] = void 0;
	let i = e.length - t;
	if (i !== 0) {
		let t = Gy((100 - n) / i);
		for (let n of e) n.defaultSize === void 0 && (r[n.panelId] = t);
	}
	return r;
}
function dx(e, t, n) {
	if (!n[0]) return;
	let r = e.panels.find((e) => e.element === t);
	if (!r || !r.onResize) return;
	let i = Ky({ group: e }), a = e.orientation === `horizontal` ? r.element.offsetWidth : r.element.offsetHeight, o = r.mutableValues.prevSize, s = {
		asPercentage: Gy(a / i * 100),
		inPixels: a
	};
	r.mutableValues.prevSize = s, r.onResize(s, r.id, o);
}
function fx(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let n in e) if (e[n] !== t[n]) return !1;
	return !0;
}
function px({ group: e, nextGroupSize: t, prevGroupSize: n, prevLayout: r }) {
	if (n <= 0 || t <= 0 || n === t) return r;
	let i = 0, a = 0, o = !1, s = /* @__PURE__ */ new Map(), c = [];
	for (let l of e.panels) {
		let e = r[l.id] ?? 0;
		switch (l.panelConstraints.groupResizeBehavior) {
			case `preserve-pixel-size`: {
				o = !0;
				let r = Gy(e / 100 * n / t * 100);
				s.set(l.id, r), i += r;
				break;
			}
			default:
				c.push(l.id), a += e;
				break;
		}
	}
	if (!o || c.length === 0) return r;
	let l = 100 - i, u = { ...r };
	if (s.forEach((e, t) => {
		u[t] = e;
	}), a > 0) for (let e of c) u[e] = Gy((r[e] ?? 0) / a * l);
	else {
		let e = Gy(l / c.length);
		for (let t of c) u[t] = e;
	}
	return u;
}
function mx(e, t) {
	let n = e.map((e) => e.id), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let e of n) if (!r.includes(e)) return !1;
	return !0;
}
var hx = /* @__PURE__ */ new Map();
function gx(e) {
	let t = !0;
	Jy(e.element.ownerDocument.defaultView, `Cannot register an unmounted Group`);
	let n = e.element.ownerDocument.defaultView.ResizeObserver, r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), a = new n((n) => {
		for (let r of n) {
			let { borderBoxSize: n, target: i } = r;
			if (i === e.element) {
				if (t) {
					let t = Ky({ group: e });
					if (t === 0) return;
					let n = lb(e.id);
					if (!n) return;
					let r = qy(e), i = n.defaultLayoutDeferred ? ux(r) : n.layout, a = Mb({
						layout: px({
							group: e,
							nextGroupSize: t,
							prevGroupSize: n.groupSize,
							prevLayout: i
						}),
						panelConstraints: r
					});
					if (!n.defaultLayoutDeferred && jb(n.layout, a) && fx(n.derivedPanelConstraints, r) && n.groupSize === t) return;
					fb(e, {
						defaultLayoutDeferred: !1,
						derivedPanelConstraints: r,
						groupSize: t,
						layout: a,
						separatorToPanels: n.separatorToPanels
					});
				}
			} else dx(e, i, n);
		}
	});
	a.observe(e.element), e.panels.forEach((e) => {
		Jy(!r.has(e.id), `Panel ids must be unique; id "${e.id}" was used more than once`), r.add(e.id), e.onResize && a.observe(e.element);
	});
	let o = Ky({ group: e }), s = qy(e), c = e.panels.map(({ id: e }) => e).join(`,`), l = e.mutableState.defaultLayout;
	l && (mx(e.panels, l) || (l = void 0));
	let u = Mb({
		layout: e.mutableState.layouts[c] ?? l ?? ux(s),
		panelConstraints: s
	}), d = e.element.ownerDocument;
	hx.set(d, (hx.get(d) ?? 0) + 1);
	let f = /* @__PURE__ */ new Map();
	return rb(e).forEach((e) => {
		e.separator && f.set(e.separator, e.panels);
	}), fb(e, {
		defaultLayoutDeferred: o === 0,
		derivedPanelConstraints: s,
		groupSize: o,
		layout: u,
		separatorToPanels: f
	}), e.separators.forEach((e) => {
		Jy(!i.has(e.id), `Separator ids must be unique; id "${e.id}" was used more than once`), i.add(e.id), e.element.addEventListener(`keydown`, Rb);
	}), hx.get(d) === 1 && (d.addEventListener(`dblclick`, Pb, !0), d.addEventListener(`pointerdown`, Gb, !0), d.addEventListener(`pointerleave`, ox), d.addEventListener(`pointermove`, sx), d.addEventListener(`pointerout`, cx), d.addEventListener(`pointerup`, lx, !0)), function() {
		t = !1, hx.set(d, Math.max(0, (hx.get(d) ?? 0) - 1)), sb(e), e.separators.forEach((e) => {
			e.element.removeEventListener(`keydown`, Rb);
		}), hx.get(d) || (d.removeEventListener(`dblclick`, Pb, !0), d.removeEventListener(`pointerdown`, Gb, !0), d.removeEventListener(`pointerleave`, ox), d.removeEventListener(`pointermove`, sx), d.removeEventListener(`pointerout`, cx), d.removeEventListener(`pointerup`, lx, !0)), a.disconnect();
	};
}
function _x() {
	let [e, t] = (0, I.useState)({});
	return [e, (0, I.useCallback)(() => t({}), [])];
}
function vx(e) {
	let t = (0, I.useId)();
	return `${e ?? t}`;
}
var yx = typeof window < `u` ? I.useLayoutEffect : I.useEffect;
function bx(e) {
	let t = (0, I.useRef)(e);
	return yx(() => {
		t.current = e;
	}, [e]), (0, I.useCallback)((...e) => t.current?.(...e), [t]);
}
function xx(...e) {
	return bx((t) => {
		e.forEach((e) => {
			if (e) switch (typeof e) {
				case `function`:
					e(t);
					break;
				case `object`:
					e.current = t;
					break;
			}
		});
	});
}
function Sx(e) {
	let t = (0, I.useRef)({ ...e });
	return yx(() => {
		for (let n in e) t.current[n] = e[n];
	}, [e]), t.current;
}
var Cx = (0, I.createContext)(null);
function wx(e, t) {
	let n = (0, I.useRef)({
		getLayout: () => ({}),
		setLayout: Kb
	});
	(0, I.useImperativeHandle)(t, () => n.current, []), yx(() => {
		Object.assign(n.current, Ib({ groupId: e }));
	});
}
function Tx({ children: e, className: t, defaultLayout: n, disableCursor: r, disabled: i, elementRef: a, groupRef: o, id: s, onLayoutChange: c, onLayoutChanged: l, orientation: u = `horizontal`, resizeTargetMinimumSize: d = {
	coarse: 20,
	fine: 10
}, style: f, ...p }) {
	let m = (0, I.useRef)({
		onLayoutChange: {},
		onLayoutChanged: {}
	}), h = bx((e) => {
		jb(m.current.onLayoutChange, e) || (m.current.onLayoutChange = e, c?.(e));
	}), g = bx((e, t) => {
		jb(m.current.onLayoutChanged, e) || (m.current.onLayoutChanged = e, l?.(e, { isUserInteraction: t }));
	}), _ = vx(s), v = (0, I.useRef)(null), [y, b] = _x(), x = (0, I.useRef)({
		lastExpandedPanelSizes: {},
		layouts: {},
		panels: [],
		resizeTargetMinimumSize: d,
		separators: []
	}), S = xx(v, a);
	wx(_, o);
	let C = bx((e, t) => {
		let r = Vb(), i = cb(e), a = lb(e);
		if (a) {
			let e = !1;
			switch (r.state) {
				case `active`:
					e = r.hitRegions.some((e) => e.group === i);
					break;
			}
			return {
				flexGrow: a.layout[t] ?? 1,
				pointerEvents: e ? `none` : void 0
			};
		}
		if (n?.[t]) return { flexGrow: n?.[t] };
	}), w = Sx({
		defaultLayout: n,
		disableCursor: r
	}), T = (0, I.useMemo)(() => ({
		get disableCursor() {
			return !!w.disableCursor;
		},
		getPanelStyles: C,
		id: _,
		orientation: u,
		registerPanel: (e) => {
			let t = x.current;
			return t.panels = Yy(u, [...t.panels, e]), b(), () => {
				t.panels = t.panels.filter((t) => t !== e), b();
			};
		},
		registerSeparator: (e) => {
			let t = x.current;
			return t.separators = Yy(u, [...t.separators, e]), b(), () => {
				t.separators = t.separators.filter((t) => t !== e), b();
			};
		},
		updatePanelProps: (e, { disabled: t }) => {
			let n = x.current.panels.find((t) => t.id === e);
			n && (n.panelConstraints.disabled = t);
			let r = cb(_), i = lb(_);
			r && i && fb(r, {
				...i,
				derivedPanelConstraints: qy(r)
			});
		},
		updateSeparatorProps: (e, { disabled: t, disableDoubleClick: n }) => {
			let r = x.current.separators.find((t) => t.id === e);
			r && (r.disabled = t, r.disableDoubleClick = n);
		}
	}), [
		C,
		_,
		b,
		u,
		w
	]), E = (0, I.useRef)(null);
	return yx(() => {
		let e = v.current;
		if (e === null) return;
		let t = x.current, n;
		if (w.defaultLayout !== void 0 && Object.keys(w.defaultLayout).length === t.panels.length) {
			n = {};
			for (let e of t.panels) {
				let t = w.defaultLayout[e.id];
				t !== void 0 && (n[e.id] = t);
			}
		}
		let r = {
			disabled: !!i,
			element: e,
			id: _,
			mutableState: {
				defaultLayout: n,
				disableCursor: !!w.disableCursor,
				expandedPanelSizes: x.current.lastExpandedPanelSizes,
				layouts: x.current.layouts
			},
			orientation: u,
			panels: t.panels,
			resizeTargetMinimumSize: t.resizeTargetMinimumSize,
			separators: t.separators
		};
		E.current = r;
		let a = gx(r), { defaultLayoutDeferred: o, derivedPanelConstraints: s, layout: c } = lb(r.id, !0);
		!o && s.length > 0 && (h(c), g(c, !1));
		let l = db(_, (e) => {
			let { defaultLayoutDeferred: t, derivedPanelConstraints: n, layout: i } = e.next;
			if (t || n.length === 0) return;
			let a = r.panels.map(({ id: e }) => e).join(`,`);
			r.mutableState.layouts[a] = i, n.forEach((t) => {
				if (t.collapsible) {
					let { layout: n } = e.prev ?? {};
					if (n) {
						let e = Db(t.collapsedSize, i[t.panelId]), a = Db(t.collapsedSize, n[t.panelId]);
						e && !a && (r.mutableState.expandedPanelSizes[t.panelId] = n[t.panelId]);
					}
				}
			});
			let o = Vb().state !== `active`;
			h(i), o && g(i, e.isUserInteraction);
		});
		return () => {
			E.current = null, a(), l();
		};
	}, [
		i,
		_,
		g,
		h,
		u,
		y,
		w
	]), (0, I.useEffect)(() => {
		let e = E.current;
		e && (e.mutableState.defaultLayout = n, e.mutableState.disableCursor = !!r);
	}), (0, X.jsx)(Cx.Provider, {
		value: T,
		children: (0, X.jsx)(`div`, {
			...p,
			className: t,
			"data-group": !0,
			"data-testid": _,
			id: _,
			ref: S,
			style: {
				height: `100%`,
				width: `100%`,
				overflow: `hidden`,
				...f,
				display: `flex`,
				flexDirection: u === `horizontal` ? `row` : `column`,
				flexWrap: `nowrap`,
				touchAction: u === `horizontal` ? `pan-y` : `pan-x`
			},
			children: e
		})
	});
}
Tx.displayName = `Group`;
function Ex() {
	let e = (0, I.useContext)(Cx);
	return Jy(e, `Group Context not found; did you render a Panel or Separator outside of a Group?`), e;
}
function Dx(e, t) {
	let { id: n } = Ex(), r = (0, I.useRef)({
		collapse: qb,
		expand: qb,
		getSize: () => ({
			asPercentage: 0,
			inPixels: 0
		}),
		isCollapsed: () => !1,
		resize: qb
	});
	(0, I.useImperativeHandle)(t, () => r.current, []), yx(() => {
		Object.assign(r.current, Nb({
			groupId: n,
			panelId: e
		}));
	});
}
function Ox({ children: e, className: t, collapsedSize: n = `0%`, collapsible: r = !1, defaultSize: i, disabled: a, elementRef: o, groupResizeBehavior: s = `preserve-relative-size`, id: c, maxSize: l = `100%`, minSize: u = `0%`, onResize: d, panelRef: f, style: p, ...m }) {
	let h = !!c, g = vx(c), _ = Sx({ disabled: a }), v = (0, I.useRef)(null), y = xx(v, o), { getPanelStyles: b, id: x, orientation: S, registerPanel: C, updatePanelProps: w } = Ex(), T = d !== null, E = bx((e, t, n) => {
		d?.(e, c, n);
	});
	yx(() => {
		let e = v.current;
		if (e !== null) {
			let t = {
				element: e,
				id: g,
				idIsStable: h,
				mutableValues: {
					expandToSize: void 0,
					prevSize: void 0
				},
				onResize: T ? E : void 0,
				panelConstraints: {
					groupResizeBehavior: s,
					collapsedSize: n,
					collapsible: r,
					defaultSize: i,
					disabled: _.disabled,
					maxSize: l,
					minSize: u
				}
			};
			return C(t);
		}
	}, [
		s,
		n,
		r,
		i,
		T,
		g,
		h,
		l,
		u,
		E,
		C,
		_
	]), (0, I.useEffect)(() => {
		w(g, { disabled: a });
	}, [
		a,
		g,
		w
	]), Dx(g, f);
	let D = () => {
		let e = b(x, g);
		if (e) return JSON.stringify(e);
	}, O = (0, I.useSyncExternalStore)((e) => db(x, e), D, D), k;
	return k = O ? JSON.parse(O) : i === void 0 ? { flexGrow: 1 } : {
		flexGrow: void 0,
		flexShrink: void 0,
		flexBasis: i
	}, (0, X.jsx)(`div`, {
		...m,
		"data-disabled": a || void 0,
		"data-panel": !0,
		"data-testid": g,
		id: g,
		ref: y,
		style: {
			...kx,
			display: `flex`,
			flexBasis: 0,
			flexShrink: 1,
			overflow: `visible`,
			...k
		},
		children: (0, X.jsx)(`div`, {
			className: t,
			style: {
				maxHeight: `100%`,
				maxWidth: `100%`,
				flexGrow: 1,
				overflow: `auto`,
				...p,
				touchAction: S === `horizontal` ? `pan-y` : `pan-x`
			},
			children: e
		})
	});
}
Ox.displayName = `Panel`;
var kx = {
	minHeight: 0,
	maxHeight: `100%`,
	height: `auto`,
	minWidth: 0,
	maxWidth: `100%`,
	width: `auto`,
	border: `none`,
	borderWidth: 0,
	padding: 0,
	margin: 0
};
function Ax({ layout: e, panelConstraints: t, panelId: n, panelIndex: r }) {
	let i, a, o = e[n], s = t.find((e) => e.panelId === n);
	if (s) {
		let c = s.maxSize, l = s.collapsible ? s.collapsedSize : s.minSize, u = [r, r + 1];
		a = Mb({
			layout: Ab({
				delta: l - o,
				initialLayout: e,
				panelConstraints: t,
				pivotIndices: u,
				prevLayout: e
			}),
			panelConstraints: t
		})[n], i = Mb({
			layout: Ab({
				delta: c - o,
				initialLayout: e,
				panelConstraints: t,
				pivotIndices: u,
				prevLayout: e
			}),
			panelConstraints: t
		})[n];
	}
	return {
		valueControls: n,
		valueMax: i,
		valueMin: a,
		valueNow: o
	};
}
function jx({ children: e, className: t, disabled: n, disableDoubleClick: r, elementRef: i, id: a, style: o, ...s }) {
	let c = vx(a), l = Sx({
		disabled: n,
		disableDoubleClick: r
	}), [u, d] = (0, I.useState)({}), [f, p] = (0, I.useState)(`inactive`), [m, h] = (0, I.useState)(!1), g = (0, I.useRef)(null), _ = xx(g, i), { disableCursor: v, id: y, orientation: b, registerSeparator: x, updateSeparatorProps: S } = Ex(), C = b === `horizontal` ? `vertical` : `horizontal`;
	yx(() => {
		let e = g.current;
		if (e !== null) {
			let t = {
				disabled: l.disabled,
				disableDoubleClick: l.disableDoubleClick,
				element: e,
				id: c
			}, n = x(t), r = Hb((e) => {
				p(e.next.state !== `inactive` && e.next.hitRegions.some((e) => e.separator === t) ? e.next.state : `inactive`);
			}), i = db(y, (e) => {
				let { derivedPanelConstraints: n, layout: r, separatorToPanels: i } = e.next, a = i.get(t);
				if (a) {
					let e = a[0], t = a.indexOf(e);
					d(Ax({
						layout: r,
						panelConstraints: n,
						panelId: e.id,
						panelIndex: t
					}));
				}
			});
			return () => {
				r(), i(), n();
			};
		}
	}, [
		y,
		c,
		x,
		l
	]), (0, I.useEffect)(() => {
		S(c, {
			disabled: n,
			disableDoubleClick: r
		});
	}, [
		n,
		r,
		c,
		S
	]);
	let w;
	n && !v && (w = `not-allowed`);
	let T;
	if (n) T = `disabled`;
	else switch (f) {
		case `active`:
			T = `active`;
			break;
		default: T = m ? `focus` : f;
	}
	return (0, X.jsx)(`div`, {
		...s,
		"aria-controls": u.valueControls,
		"aria-disabled": n || void 0,
		"aria-orientation": C,
		"aria-valuemax": u.valueMax,
		"aria-valuemin": u.valueMin,
		"aria-valuenow": u.valueNow,
		children: e,
		className: t,
		"data-separator": T,
		"data-testid": c,
		id: c,
		onBlur: () => h(!1),
		onFocus: () => h(!0),
		ref: _,
		role: `separator`,
		style: {
			flexBasis: `auto`,
			cursor: w,
			...o,
			flexGrow: 0,
			flexShrink: 0,
			touchAction: `none`
		},
		tabIndex: n ? void 0 : 0
	});
}
jx.displayName = `Separator`;
var Mx = ({ className: e, direction: t, orientation: n, ...r }) => {
	let i = n ?? t;
	return (0, X.jsx)(Tx, {
		"data-panel-group-direction": i ?? `horizontal`,
		orientation: i,
		className: E(`flex h-full w-full data-[panel-group-direction=vertical]:flex-col`, e),
		...r
	});
}, Nx = Ox, Px = ({ withHandle: e, className: t, ...n }) => (0, X.jsx)(jx, {
	className: E(`bg-neutral-300 dark:bg-neutral-700`, `relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-1 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:-translate-y-1/2 aria-[orientation=horizontal]:after:translate-x-0 [&[aria-orientation=horizontal]>div]:rotate-90`, t),
	...n,
	children: e && (0, X.jsx)(`div`, {
		className: `z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-neutral-300 dark:bg-neutral-700`,
		children: (0, X.jsx)(_t, { className: `h-2.5 w-2.5` })
	})
});
function Fx() {
	return (0, X.jsx)(bt, {
		className: `animate-spin text-neutral-500`,
		size: 32
	});
}
function Ix({ className: e, children: t, ref: n }) {
	return (0, X.jsx)(`article`, {
		ref: n,
		className: E(`flex flex-col relative`, e),
		children: t
	});
}
function Lx({ title: e, children: t, icon: n }) {
	return (0, X.jsxs)(`header`, {
		className: `relative flex flex-row justify-between border-b h-7 min-h-7 max-h-7 items-center bg-neutral-50 dark:bg-neutral-800`,
		children: [(0, X.jsxs)(`h3`, {
			className: `px-2 text-xs font-500 [&>svg]:inline-block truncate line-clamp-1`,
			children: [
				n,
				`\xA0`,
				e
			]
		}), t]
	});
}
function Rx({ title: e, titles: t, children: n, icon: r, onSelect: i }) {
	return (0, X.jsxs)(`header`, {
		className: `relative flex flex-row justify-between border-b h-7 min-h-7 max-h-7 items-center bg-neutral-50 dark:bg-neutral-800`,
		children: [(0, X.jsxs)(`h3`, {
			className: `inline-flex  items-center px-2 text-xs font-500 [&>svg]:inline-block `,
			children: [
				r,
				`\xA0`,
				(0, X.jsx)(`div`, { children: (0, X.jsx)(`select`, {
					className: `inline-block w-full`,
					onChange: (e) => {
						i(t[Number(e.currentTarget.value)]);
					},
					children: t.map((t, n) => (0, X.jsx)(`option`, {
						value: n,
						selected: t === e,
						children: t
					}, n))
				}) })
			]
		}), n]
	});
}
window.requestIdleCallback;
var zx = (0, I.lazy)(() => Zv(() => import(`./monaco-BkVrCnUD.js`), __vite__mapDeps([11,1,3,12]))), Bx = (0, I.lazy)(() => Zv(() => import(`./ast-DfRbMhpd.js`), __vite__mapDeps([13,1,8,3,14,15]))), Vx = l((e) => {
	let t = e(Wf);
	return !(t === xf.INIT || t === xf.JS_INPUT);
});
function Hx() {
	let [e, t] = ee(Kf), n = _(Vx), r = _(Pf), [i, a] = _(Uf);
	(0, I.useEffect)(() => {
		r && t(r);
	}, [r, t]);
	let o = (0, I.useCallback)((e) => {
		n || t(e);
	}, [n, t]);
	return (0, X.jsx)(zx, {
		code: e,
		onChange: o,
		start: i,
		end: a,
		readOnly: n
	});
}
var Ux = [`JavaScript Editor`, `AST Viewer`];
function Wx() {
	let [e, t] = (0, I.useState)(Ux[0]);
	return (0, X.jsxs)(Ix, {
		className: `h-full flex flex-col`,
		children: [(0, X.jsx)(Rx, {
			title: e,
			titles: Ux,
			icon: (0, X.jsx)(ut, {
				size: 14,
				className: `inline`
			}),
			onSelect: t
		}), (0, X.jsx)(`div`, {
			className: `overflow-hidden size-full flex flex-col`,
			children: (0, X.jsx)(rp, {
				fatal: !0,
				loading: (0, X.jsx)(`div`, {
					className: `flex items-center justify-center size-full`,
					children: (0, X.jsx)(Fx, {})
				}),
				children: e === `JavaScript Editor` ? (0, X.jsx)(Hx, {}) : (0, X.jsx)(Bx, {})
			})
		})]
	});
}
function Gx({ selected: e, options: t, setSelected: n, getId: r, getIcon: i, getLabel: a }) {
	let o = _(qf);
	return (0, X.jsx)(Kv, {
		value: e,
		onChange: n,
		className: `h-6 flex flex-row gap-1 text-xs bg-neutral-100 dark:bg-neutral-800 overflow-hidden`,
		"aria-label": `State Viewer Select`,
		children: t.map((e) => o || !e.devOnly ? (0, X.jsxs)(Gv, {
			value: e,
			className: `cursor-pointer
          data-checked:bg-es-600 data-checked:text-white hover:data-checked:bg-es-700
          hover:bg-neutral-300 dark:hover:bg-neutral-700 active:scale-90 transition-all [&>svg]:size-4 font-600 flex flex-row justify-center items-center px-1 gap-1 rounded-lg`,
			children: [i(e), a(e)]
		}, r(e)) : null)
	});
}
var Kx = (0, I.lazy)(() => Zv(() => import(`./Breakpoints-CWo4qfQ8.js`), __vite__mapDeps([16,1,3,17,8,7,10,9,18,19,5,20]))), qx = (0, I.lazy)(() => Zv(() => import(`./env-BGxP3AUF.js`), __vite__mapDeps([21,1,3,22,18,20]))), Jx = (0, I.lazy)(() => Zv(() => import(`./heap-CPzs95gJ.js`), __vite__mapDeps([23,1,3,22,18,17,8,7,10,20]))), Yx = (0, I.lazy)(() => Zv(() => import(`./callstack-BcooRW0Z.js`), __vite__mapDeps([24,1,3,22,18,20]))), Xx = (0, I.lazy)(() => Zv(() => import(`./internal-stat-R7G4z0pK.js`), __vite__mapDeps([25,1,3]))), Zx = [
	{
		name: `Env`,
		id: `env`,
		icon: (0, X.jsx)(ft, {}),
		view: qx,
		devOnly: !1
	},
	{
		name: `Heap`,
		id: `heap`,
		icon: (0, X.jsx)(St, {}),
		view: Jx,
		devOnly: !1
	},
	{
		name: `Breaks`,
		id: `bp`,
		icon: (0, X.jsx)(wt, {}),
		view: Kx,
		devOnly: !1
	},
	{
		name: `Callstack`,
		id: `callstack`,
		icon: (0, X.jsx)(vt, {}),
		view: Yx,
		devOnly: !1
	},
	{
		name: `Meta`,
		id: `stats`,
		icon: (0, X.jsx)(mt, {}),
		view: Xx,
		devOnly: !0
	}
];
function Qx() {
	let e = _(Wf), t = !(e === xf.DEBUG_READY_AT_FRONT || e === xf.DEBUG_READY || e === xf.TERMINATED), [n, r] = ee(Sy);
	return (0, X.jsxs)(Ix, {
		className: `flex flex-col size-full`,
		children: [(0, X.jsx)(Lx, {
			title: `State\xA0Viewer`,
			icon: (0, X.jsx)(vt, {
				size: 14,
				className: `inline`
			}),
			children: (0, X.jsx)(`div`, {
				className: `absolute right-2`,
				children: (0, X.jsx)(Gx, {
					selected: Zx.find((e) => e.id === n) || Zx[0],
					options: Zx,
					setSelected: (e) => {
						e && r(e.id);
					},
					getId: (e) => e.name,
					getIcon: (e) => e.icon,
					getLabel: (e) => e.name
				})
			})
		}), (0, X.jsx)(`div`, {
			className: `overflow-y-scroll size-full`,
			children: t ? (0, X.jsx)(`aside`, {
				className: `text-center py-4`,
				children: `Disabled. Start debugger to use.`
			}) : Zx.filter(({ id: e }) => e === n).map((e) => (0, X.jsx)(I.Suspense, {
				fallback: (0, X.jsx)(`div`, {
					className: `size-full flex items-center justify-center`,
					children: (0, X.jsx)(bt, { className: `animate-spin` })
				}),
				children: (0, X.jsx)(e.view, {})
			}, e.name))
		})]
	});
}
var $x = (0, I.lazy)(() => Zv(() => import(`./AlgoViewerHeader-Dveoc7_Q.js`).then((e) => e.r).then((e) => ({ default: e.AlgoViewerHeaderUsingAlgoName })), __vite__mapDeps([19,1,3,5,18]))), eS = (0, I.lazy)(() => Zv(() => import(`./AlgoViewer-CCOqXkJg.js`), __vite__mapDeps([26,1,3,19,5,18,27])));
function tS({ context: e, embed: t }) {
	let n = _(vy), r = t ?? !1, i = e === void 0 ? void 0 : n[e.fid];
	return e === void 0 || i === void 0 ? r ? null : (0, X.jsx)(`div`, {
		className: `grow overflow-y-scroll`,
		children: (0, X.jsx)(`aside`, {
			className: `text-center py-4`,
			children: `Please write JavaScript code and press the run button.`
		})
	}) : i.algoCode.trim() === `` ? (0, X.jsxs)(`div`, {
		className: `algo-container w-full h-fit break-before-column wrap-break-word hyphens-auto`,
		children: [(0, X.jsx)($x, { name: i.name }), (0, X.jsxs)(`aside`, {
			className: `text-left py-4 font-sans px-2`,
			children: [`This context contains no algorithmic code because it was not automatically compiled from the ECMAScript specification. This is likely due to one of the following reasons:`, (0, X.jsxs)(`ul`, {
				className: `list-disc list-outside [&>li]:ml-4 space-y-4 mt-4`,
				children: [
					(0, X.jsxs)(`li`, { children: [
						`The algorithm is defined as `,
						(0, X.jsx)(`b`, { children: `host-defined` }),
						` or`,
						` `,
						(0, X.jsx)(`b`, { children: `implementation-defined` }),
						`, so ESMeta provides a manually modeled IR-level implementation that conforms to the specification’s requirements.`
					] }),
					(0, X.jsxs)(`li`, { children: [
						`The content is not written in `,
						(0, X.jsx)(`b`, { children: `ecmarkdown` }),
						` but structured as a lookup table, and thus was manually modeled as an IR function in ESMeta.`
					] }),
					(0, X.jsx)(`li`, { children: `It serves as a spec-compliant auxiliary function designed to assist in evaluating the specification language.` })
				]
			})]
		})]
	}) : (0, X.jsx)(eS, {
		showOnlyVisited: r,
		context: e,
		scrollOnHighlight: !t
	});
}
var nS = (0, I.lazy)(() => Zv(() => import(`./Graphviz-L_qR27PY.js`), __vite__mapDeps([28,1,3,14,12])));
function rS() {
	let e = _(Lf);
	return e ? (0, X.jsx)(tS, {
		full: !0,
		context: e
	}) : (0, X.jsx)(`div`, {
		className: `size-full flex items-center justify-center`,
		children: (0, X.jsx)(`aside`, {
			className: `text-center py-4`,
			children: `Context Not Found`
		})
	});
}
function iS() {
	let e = _(Lf);
	return e ? (0, X.jsx)(nS, { dot: e.algoDot }) : (0, X.jsx)(`div`, {
		className: `size-full flex items-center justify-center`,
		children: (0, X.jsx)(`aside`, {
			className: `text-center py-4`,
			children: `Context Not Found`
		})
	});
}
var aS = [`ECMAScript Specification`, `ESMeta CFG`], oS = [`ECMAScript Specification`], sS = l((e) => e(qf) ? aS : oS), cS = l(void 0), lS = l((e) => e(cS) ?? e(sS)[0], (e, t, n) => {
	t(cS, n);
});
function uS() {
	let e = _(sS), [t, n] = ee(lS), r = t === aS[0];
	return (0, X.jsxs)(Ix, {
		className: `size-full flex flex-col transition-opacity`,
		children: [(0, X.jsx)(Rx, {
			titles: e,
			title: t,
			onSelect: n,
			icon: (0, X.jsx)(Ft, {
				size: 14,
				className: `inline`
			})
		}), (0, X.jsx)(`div`, {
			className: r ? `overflow-scroll` : `size-full`,
			children: (0, X.jsx)(rp, {
				fatal: !0,
				children: r ? (0, X.jsx)(rS, {}) : (0, X.jsx)(iS, {})
			})
		})]
	});
}
function dS({ ref: e, icon: t, label: n, disabled: r, onClick: i, position: a = `single`, className: o = ``, ...s }) {
	return (0, X.jsxs)(up, {
		ref: e,
		className: E(`inline-flex flex-row items-center gap-[2px] px-2 py-1`, `bg-white dark:bg-neutral-950 border`, `transition-all`, `[&>svg]:block [&>svg]:size-[12px] md:[&>svg]:block`, `uppercase text-xs text-neutral-700 dark:text-neutral-300 font-600`, `disabled:active:text-red-500 disabled:active:border-red-500`, `enabled:active:scale-95`, `disabled:opacity-25 disabled:cursor-not-allowed`, `enabled:hover:bg-neutral-300 enabled:dark:hover:bg-neutral-700 enabled:cursor-pointer`, `data-[position=left]:rounded-l-md`, `data-[position=right]:rounded-r-md`, `data-[position=center]:rounded-none`, `data-[position=single]:rounded-md`, `[&>span>b]:text-es-600`, o),
		"data-position": a,
		disabled: r,
		onClick: i,
		...s,
		children: [t, n]
	});
}
function fS({ children: e }) {
	return e;
}
var pS = (e, t, n, r) => {
	switch (e) {
		case `KeyR`: return t.disableRun ? null : r.run;
		case `KeyE`: return t.disableResume ? null : r.resume;
		case `KeyQ`: return t.disableQuit ? null : r.stop;
		case `KeyC`: return t.disableGoingForward ? null : r.specContinue;
		case `KeyS`: return t.disableGoingForward ? null : r.specStep;
		case `KeyO`: return t.disableGoingForward ? null : r.specStepOver;
		case `KeyU`: return t.disableGoingForward ? null : r.specStepOut;
		case `KeyB`: return t.disableGoingBackward ? null : r.specStepBack;
		case `KeyA`: return t.disableGoingBackward ? null : r.specStepBackOver;
		case `KeyK`: return t.disableGoingBackward ? null : r.specStepBackOut;
		case `KeyW`: return t.disableGoingBackward ? null : r.specRewind;
		case `KeyJ`: return t.disableGoingForward ? null : r.esStepStatement;
		case `KeyP`: return t.disableGoingForward ? null : r.esStepAst;
		case `KeyV`: return t.disableGoingForward ? null : r.esStepOver;
		case `KeyT`: return t.disableGoingForward ? null : r.esStepOut;
		default: return null;
	}
}, mS = (e, t, n) => function(r) {
	let i = r.target;
	if (i instanceof HTMLElement && i.tagName.toUpperCase() !== `BODY`) return;
	let a = r.ctrlKey || r.metaKey || r.altKey || r.shiftKey;
	D.log?.(`${r.key}`);
	let o = pS(r.code, t, n, e);
	o && !a && o();
}, hS = l((e) => {
	let t = e(Wf), n = e(Gf), r = e(bf);
	return {
		disableRun: t !== xf.JS_INPUT,
		disableResume: !(t === xf.JS_INPUT && r.origin.iter !== null),
		disableQuit: t === xf.INIT || t === xf.JS_INPUT,
		disableGoingForward: !(t === xf.DEBUG_READY || t === xf.DEBUG_READY_AT_FRONT),
		disableGoingBackward: !(t === xf.DEBUG_READY || t === xf.TERMINATED),
		ignoreBP: n
	};
});
function gS(e) {
	return l(null, async (t, n) => {
		n(Nf, cy(e, t(Gf)));
	});
}
function _S(e) {
	return l(null, async (t, n, r) => {
		n(Nf, cy(e, r));
	});
}
var vS = l(null, async (e, t) => {
	t(Nf, cy(`exec/run`, [e(Kf), e(my)]));
}), yS = l(null, async (e, t) => {
	let n = e(Kf), r = e(my), i = e(bf).origin;
	i.type === `visualizer` ? t(Nf, cy(`exec/resumeFromIter`, [
		n,
		r,
		i.iter
	])) : b.error(`Invalid origin type`);
}), bS = _S(`exec/backToProvenance`), xS = l(null, async (e, t) => {
	t(Nf, null), t(Wf, xf.JS_INPUT);
}), SS = gS(`exec/specContinue`), CS = gS(`exec/specRewind`), wS = gS(`exec/specStep`), TS = gS(`exec/specStepOver`), ES = gS(`exec/specStepOut`), DS = gS(`exec/specStepBack`), OS = gS(`exec/specStepBackOver`), kS = gS(`exec/specStepBackOut`), AS = gS(`exec/irStep`), jS = gS(`exec/irStepOver`), MS = gS(`exec/irStepOut`), NS = gS(`exec/esStatementStep`), PS = gS(`exec/esAstStep`), FS = gS(`exec/esStepOver`), IS = gS(`exec/esStepOut`), LS = gS(`exec/stepCntPlus`), RS = gS(`exec/stepCntMinus`), zS = gS(`exec/instCntPlus`), BS = gS(`exec/instCntMinus`);
function VS() {
	return {
		run: A(vS),
		resume: A(yS),
		stop: A(xS),
		specStep: A(wS),
		specStepOver: A(TS),
		specStepOut: A(ES),
		specStepBack: A(DS),
		specStepBackOver: A(OS),
		specStepBackOut: A(kS),
		irStep: A(AS),
		irStepOver: A(jS),
		irStepOut: A(MS),
		esStepStatement: A(NS),
		esStepAst: A(PS),
		esStepOver: A(FS),
		esStepOut: A(IS),
		stepCntPlus: A(LS),
		stepCntMinus: A(RS),
		instCntPlus: A(zS),
		instCntMinus: A(BS),
		specContinue: A(SS),
		specRewind: A(CS)
	};
}
function HS() {
	let e = _(qf), t = VS(), { disableRun: n, disableResume: r, disableQuit: i, disableGoingBackward: a, disableGoingForward: o, ignoreBP: s } = _(hS), c = (0, I.useCallback)(mS(t, {
		disableRun: n,
		disableResume: r,
		disableQuit: i,
		disableGoingBackward: a,
		disableGoingForward: o,
		ignoreBP: s
	}, e), [
		e,
		t,
		n,
		r,
		i,
		a,
		o,
		s
	]);
	(0, I.useEffect)(() => (document.addEventListener(`keydown`, c), () => {
		document.removeEventListener(`keydown`, c);
	}), [c]);
	let l = _(bf).origin.type === `visualizer`;
	return (0, X.jsx)(`aside`, {
		className: `relative w-full backdrop-blur-xs z-2`,
		children: (0, X.jsxs)(`div`, {
			className: `size-full flex-row bg-opacity-75 flex items-center min-h-full flex-wrap whitespace-pre-wrap pb-2 gap-y-1 justify-start z-1001`,
			children: [
				(0, X.jsxs)(fS, {
					label: `Exec`,
					children: [
						l && (0, X.jsx)(dS, {
							position: `left`,
							disabled: r,
							className: `bg-linear-to-r from-es-400/50 to-es-400/15 dark:from-es-900/50 dark:to-es-900/15`,
							onClick: () => t.resume(),
							icon: (0, X.jsx)(Nt, {}),
							label: (0, X.jsxs)(`span`, { children: [
								`R`,
								(0, X.jsx)(`b`, { children: `e` }),
								`sume`
							] })
						}),
						(0, X.jsx)(dS, {
							position: l ? `center` : `left`,
							disabled: n,
							onClick: () => t.run(),
							icon: (0, X.jsx)(Tt, {}),
							label: (0, X.jsxs)(`span`, { children: [(0, X.jsx)(`b`, { children: `R` }), `un`] })
						}),
						(0, X.jsx)(dS, {
							position: `right`,
							disabled: i,
							onClick: () => t.stop(),
							icon: (0, X.jsx)(Mt, {}),
							label: (0, X.jsxs)(`span`, { children: [(0, X.jsx)(`b`, { children: `Q` }), `uit`] })
						})
					]
				}),
				(0, X.jsx)(US, {}),
				(0, X.jsxs)(fS, {
					label: `Spec`,
					children: [
						(0, X.jsx)(dS, {
							position: `left`,
							disabled: o,
							onClick: () => t.specStep(),
							icon: (0, X.jsx)(it, {}),
							label: (0, X.jsxs)(`span`, { children: [
								`Spec\xA0`,
								(0, X.jsx)(`b`, { children: `S` }),
								`tep`
							] })
						}),
						(0, X.jsx)(dS, {
							position: `center`,
							disabled: o,
							onClick: () => t.specStepOver(),
							icon: (0, X.jsx)(Et, {}),
							label: (0, X.jsxs)(`span`, { children: [(0, X.jsx)(`b`, { children: `O` }), `ver`] })
						}),
						(0, X.jsx)(dS, {
							position: `center`,
							disabled: o,
							onClick: () => t.specStepOut(),
							icon: (0, X.jsx)(at, {}),
							label: (0, X.jsxs)(`span`, { children: [
								`O`,
								(0, X.jsx)(`b`, { children: `u` }),
								`t`
							] })
						}),
						(0, X.jsx)(dS, {
							position: `right`,
							disabled: o,
							onClick: () => t.specContinue(),
							icon: (0, X.jsx)(pt, {}),
							label: (0, X.jsxs)(`span`, { children: [(0, X.jsx)(`b`, { children: `C` }), `ontinue`] })
						})
					]
				}),
				(0, X.jsx)(US, {}),
				(0, X.jsxs)(fS, {
					label: `Back`,
					children: [
						(0, X.jsx)(dS, {
							position: `left`,
							disabled: a,
							onClick: () => t.specStepBack(),
							icon: (0, X.jsx)(Lt, {}),
							label: (0, X.jsxs)(`span`, { children: [
								`Spec\xA0`,
								(0, X.jsx)(`b`, { children: `B` }),
								`ack`
							] })
						}),
						(0, X.jsx)(dS, {
							position: `center`,
							disabled: a,
							onClick: () => t.specStepBackOver(),
							icon: (0, X.jsx)(It, {}),
							label: (0, X.jsxs)(`span`, { children: [
								`B`,
								(0, X.jsx)(`b`, { children: `a` }),
								`ck\xA0Over`
							] })
						}),
						(0, X.jsx)(dS, {
							position: `center`,
							disabled: a,
							onClick: () => t.specStepBackOut(),
							icon: (0, X.jsx)(at, {}),
							label: (0, X.jsxs)(`span`, { children: [
								`Bac`,
								(0, X.jsx)(`b`, { children: `k` }),
								`\xA0Out`
							] })
						}),
						(0, X.jsx)(dS, {
							position: `right`,
							disabled: a,
							onClick: () => t.specRewind(),
							icon: (0, X.jsx)(Dt, {}),
							label: (0, X.jsxs)(`span`, { children: [
								`Re`,
								(0, X.jsx)(`b`, { children: `w` }),
								`ind`
							] })
						})
					]
				}),
				(0, X.jsx)(US, {}),
				(0, X.jsxs)(fS, {
					label: `JS`,
					children: [
						(0, X.jsx)(dS, {
							position: `left`,
							disabled: o,
							onClick: () => t.esStepStatement(),
							icon: (0, X.jsx)(it, {}),
							label: (0, X.jsxs)(`span`, { children: [(0, X.jsx)(`b`, { children: `J` }), `S\xA0Step`] })
						}),
						(0, X.jsx)(dS, {
							position: `center`,
							disabled: o,
							onClick: () => t.esStepAst(),
							icon: (0, X.jsx)(it, {}),
							label: (0, X.jsxs)(`span`, { children: [`AST\xA0Ste`, (0, X.jsx)(`b`, { children: `p` })] })
						}),
						(0, X.jsx)(dS, {
							position: `center`,
							disabled: o,
							onClick: () => t.esStepOver(),
							icon: (0, X.jsx)(Et, {}),
							label: (0, X.jsxs)(`span`, { children: [
								`O`,
								(0, X.jsx)(`b`, { children: `v` }),
								`er`
							] })
						}),
						(0, X.jsx)(dS, {
							position: `right`,
							disabled: o,
							onClick: () => t.esStepOut(),
							icon: (0, X.jsx)(at, {}),
							label: (0, X.jsxs)(`span`, { children: [`Ou`, (0, X.jsx)(`b`, { children: `t` })] })
						})
					]
				}),
				e && (0, X.jsxs)(X.Fragment, { children: [(0, X.jsx)(US, {}), (0, X.jsxs)(fS, {
					label: `Iter`,
					children: [
						(0, X.jsx)(dS, {
							position: `left`,
							disabled: o,
							onClick: () => t.stepCntPlus(),
							icon: (0, X.jsx)(st, {}),
							label: (0, X.jsx)(`span`, { children: `StepCnt +` })
						}),
						(0, X.jsx)(dS, {
							position: `right`,
							disabled: a,
							onClick: () => t.stepCntMinus(),
							icon: (0, X.jsx)(st, {}),
							label: (0, X.jsx)(`span`, { children: `StepCnt -` })
						}),
						(0, X.jsx)(dS, {
							position: `left`,
							disabled: o,
							onClick: () => t.instCntPlus(),
							icon: (0, X.jsx)(st, {}),
							label: (0, X.jsx)(`span`, { children: `Iter +` })
						}),
						(0, X.jsx)(dS, {
							position: `right`,
							disabled: a,
							onClick: () => t.instCntMinus(),
							icon: (0, X.jsx)(st, {}),
							label: (0, X.jsx)(`span`, { children: `Iter -` })
						})
					]
				})] })
			]
		})
	});
}
function US() {
	return (0, X.jsx)(`div`, {
		className: `h-6 px-1 flex flex-row items-center`,
		children: (0, X.jsx)(`div`, { className: `w-[1px] h-4 bg-neutral-300 dark:bg-neutral-700` })
	});
}
function WS() {
	let e = p(), t = A(Wf);
	return (0, I.useEffect)(() => {}, []), (0, I.useEffect)(() => {
		Promise.all([e.get(vy)]).then(() => t(xf.JS_INPUT));
	}, [t]), null;
}
function GS() {
	return WS(), (0, X.jsxs)(`main`, {
		className: `relative grow flex flex-col px-2 xl:px-12 pb-4 transition-[padding] overflow-hidden border-none`,
		children: [(0, X.jsx)(HS, {}), (0, X.jsxs)(Mx, {
			direction: `horizontal`,
			resizeTargetMinimumSize: {
				coarse: 16,
				fine: 8
			},
			className: `bg-white dark:bg-neutral-900 rounded-lg border grow flex overflow-hidden`,
			children: [
				(0, X.jsx)(Nx, {
					minSize: 8,
					children: (0, X.jsx)(Wx, {})
				}),
				(0, X.jsx)(Px, { withHandle: !0 }),
				(0, X.jsx)(Nx, {
					minSize: 8,
					className: ``,
					children: (0, X.jsx)(uS, {})
				}),
				(0, X.jsx)(Px, { withHandle: !0 }),
				(0, X.jsx)(Nx, {
					minSize: 8,
					collapsible: !0,
					children: (0, X.jsx)(rp, {
						fatal: !0,
						children: (0, X.jsx)(Qx, {})
					})
				})
			]
		})]
	});
}
function KS() {
	return (0, X.jsxs)(`div`, {
		className: `max-h-dvh h-dvh min-h-dvh flex flex-col`,
		children: [(0, X.jsx)(Iy, {}), (0, X.jsx)(GS, {})]
	});
}
var qS = -1, JS = (e) => {
	addEventListener(`pageshow`, (t) => {
		t.persisted && (qS = t.timeStamp, e(t));
	}, !0);
}, YS = (e, t, n, r) => {
	let i, a;
	return (o) => {
		t.value >= 0 && (o || r) && (a = t.value - (i ?? 0), (a || i === void 0) && (i = t.value, t.delta = a, t.rating = ((e, t) => e > t[1] ? `poor` : e > t[0] ? `needs-improvement` : `good`)(t.value, n), e(t)));
	};
}, XS = (e) => {
	requestAnimationFrame(() => requestAnimationFrame(e));
}, ZS = () => {
	let e = performance.getEntriesByType(`navigation`)[0];
	if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e;
}, QS = () => ZS()?.activationStart ?? 0, $S = (e, t = -1) => {
	let n = ZS(), r = `navigate`;
	return qS >= 0 ? r = `back-forward-cache` : n && (document.prerendering || QS() > 0 ? r = `prerender` : document.wasDiscarded ? r = `restore` : n.type && (r = n.type.replace(/_/g, `-`))), {
		name: e,
		value: t,
		rating: `good`,
		delta: 0,
		entries: [],
		id: `v5-${Date.now()}-${Math.floor(8999999999999 * Math.random()) + 0xe8d4a51000}`,
		navigationType: r
	};
}, eC = /* @__PURE__ */ new WeakMap();
function tC(e, t) {
	let n = eC.get(t);
	return n || (n = /* @__PURE__ */ new WeakMap(), eC.set(t, n)), n.get(e) || n.set(e, new t()), n.get(e);
}
var nC = class {
	t;
	i = 0;
	o = [];
	h(e) {
		if (e.hadRecentInput) return;
		let t = this.o[0], n = this.o.at(-1);
		this.i && t && n && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (this.i += e.value, this.o.push(e)) : (this.i = e.value, this.o = [e]), this.t?.(e);
	}
}, rC = (e, t, n = {}) => {
	try {
		if (PerformanceObserver.supportedEntryTypes.includes(e)) {
			let r = new PerformanceObserver((e) => {
				queueMicrotask(() => {
					t(e.getEntries());
				});
			});
			return r.observe({
				type: e,
				buffered: !0,
				...n
			}), r;
		}
	} catch {}
}, iC = (e) => {
	let t = !1;
	return () => {
		t ||= (e(), !0);
	};
}, aC = -1, oC = /* @__PURE__ */ new Set(), sC = () => document.visibilityState !== `hidden` || document.prerendering ? Infinity : 0, cC = (e) => {
	if (document.visibilityState === `hidden`) {
		if (e.type === `visibilitychange`) for (let e of oC) e();
		isFinite(aC) || (aC = e.type === `visibilitychange` ? e.timeStamp : 0, removeEventListener(`prerenderingchange`, cC, !0));
	}
}, lC = () => {
	if (aC < 0) {
		let e = QS();
		aC = (document.prerendering ? void 0 : globalThis.performance.getEntriesByType(`visibility-state`).find((t) => t.name === `hidden` && t.startTime >= e)?.startTime) ?? sC(), addEventListener(`visibilitychange`, cC, !0), addEventListener(`prerenderingchange`, cC, !0), JS(() => {
			setTimeout(() => {
				aC = sC();
			});
		});
	}
	return {
		get firstHiddenTime() {
			return aC;
		},
		onHidden(e) {
			oC.add(e);
		}
	};
}, uC = (e) => {
	document.prerendering ? addEventListener(`prerenderingchange`, e, !0) : e();
}, dC = [1800, 3e3], fC = (e, t = {}) => {
	uC(() => {
		let n = lC(), r, i = $S(`FCP`), a = rC(`paint`, (e) => {
			for (let t of e) t.name === `first-contentful-paint` && (a.disconnect(), t.startTime < n.firstHiddenTime && (i.value = Math.max(t.startTime - QS(), 0), i.entries.push(t), r(!0)));
		});
		a && (r = YS(e, i, dC, t.reportAllChanges), JS((n) => {
			i = $S(`FCP`), r = YS(e, i, dC, t.reportAllChanges), XS(() => {
				i.value = performance.now() - n.timeStamp, r(!0);
			});
		}));
	});
}, pC = [.1, .25], mC = (e, t = {}) => {
	let n = lC();
	fC(iC(() => {
		let r, i = $S(`CLS`, 0), a = tC(t, nC), o = (e) => {
			for (let t of e) a.h(t);
			a.i > i.value && (i.value = a.i, i.entries = a.o, r());
		}, s = rC(`layout-shift`, o);
		s && (r = YS(e, i, pC, t.reportAllChanges), n.onHidden(() => {
			o(s.takeRecords()), r(!0);
		}), JS(() => {
			a.i = 0, i = $S(`CLS`, 0), r = YS(e, i, pC, t.reportAllChanges), XS(r);
		}), setTimeout(r));
	}));
}, hC = 0, gC = Infinity, _C = 0, vC = (e) => {
	for (let t of e) t.interactionId && (gC = Math.min(gC, t.interactionId), _C = Math.max(_C, t.interactionId), hC = _C ? (_C - gC) / 7 + 1 : 0);
}, yC, bC = () => yC ? hC : performance.interactionCount ?? 0, xC = () => {
	`interactionCount` in performance || yC || (yC = rC(`event`, vC, { durationThreshold: 0 }));
}, SC = 0, CC = class {
	l = [];
	u = /* @__PURE__ */ new Map();
	m;
	p;
	v() {
		SC = bC(), this.l.length = 0, this.u.clear();
	}
	T() {
		let e = Math.min(this.l.length - 1, Math.floor((bC() - SC) / 50));
		return this.l[e];
	}
	h(e) {
		if (this.m?.(e), !e.interactionId && e.entryType !== `first-input`) return;
		let t = this.l.at(-1), n = this.u.get(e.interactionId);
		if (n || this.l.length < 10 || e.duration > t.L) {
			if (n ? e.duration > n.L ? (n.entries = [e], n.L = e.duration) : e.duration === n.L && e.startTime === n.entries[0].startTime && n.entries.push(e) : (n = {
				id: e.interactionId,
				entries: [e],
				L: e.duration
			}, this.u.set(n.id, n), this.l.push(n)), this.l.sort((e, t) => t.L - e.L), this.l.length > 10) {
				let e = this.l.splice(10);
				for (let t of e) this.u.delete(t.id);
			}
			this.p?.(n);
		}
	}
}, wC = (e) => {
	let t = globalThis.requestIdleCallback || setTimeout, n = globalThis.cancelIdleCallback || clearTimeout;
	if (document.visibilityState === `hidden`) e();
	else {
		let r = iC(e), i = -1, a = () => {
			n(i), r();
		};
		addEventListener(`visibilitychange`, a, {
			once: !0,
			capture: !0
		}), i = t(() => {
			removeEventListener(`visibilitychange`, a, { capture: !0 }), r();
		});
	}
}, TC = [200, 500], EC = (e, t = {}) => {
	if (!globalThis.PerformanceEventTiming || !(`interactionId` in PerformanceEventTiming.prototype)) return;
	let n = lC();
	uC(() => {
		xC();
		let r, i = $S(`INP`), a = tC(t, CC), o = (e) => {
			wC(() => {
				for (let t of e) a.h(t);
				let t = a.T();
				t && t.L !== i.value && (i.value = t.L, i.entries = t.entries, r());
			});
		}, s = rC(`event`, o, { durationThreshold: t.durationThreshold ?? 40 });
		r = YS(e, i, TC, t.reportAllChanges), s && (s.observe({
			type: `first-input`,
			buffered: !0
		}), n.onHidden(() => {
			o(s.takeRecords()), r(!0);
		}), JS(() => {
			a.v(), i = $S(`INP`), r = YS(e, i, TC, t.reportAllChanges);
		}));
	});
}, DC = class {
	m;
	h(e) {
		this.m?.(e);
	}
}, OC = [2500, 4e3], kC = (e, t = {}) => {
	uC(() => {
		let n = lC(), r, i = $S(`LCP`), a = tC(t, DC), o = (e) => {
			t.reportAllChanges || (e = e.slice(-1));
			for (let t of e) a.h(t), t.startTime < n.firstHiddenTime && (i.value = Math.max(t.startTime - QS(), 0), i.entries = [t], r());
		}, s = rC(`largest-contentful-paint`, o);
		if (s) {
			r = YS(e, i, OC, t.reportAllChanges);
			let n = iC(() => {
				o(s.takeRecords()), s.disconnect(), r(!0);
			}), a = (e) => {
				e.isTrusted && (wC(n), removeEventListener(e.type, a, { capture: !0 }));
			};
			for (let e of [
				`keydown`,
				`click`,
				`visibilitychange`
			]) addEventListener(e, a, { capture: !0 });
			JS((n) => {
				i = $S(`LCP`), r = YS(e, i, OC, t.reportAllChanges), XS(() => {
					i.value = performance.now() - n.timeStamp, r(!0);
				});
			});
		}
	});
}, AC = [800, 1800], jC = (e) => {
	document.prerendering ? uC(() => jC(e)) : document.readyState === `complete` ? setTimeout(e) : addEventListener(`load`, () => jC(e), !0);
}, MC = (e, t = {}) => {
	let n = $S(`TTFB`), r = YS(e, n, AC, t.reportAllChanges);
	jC(() => {
		let i = ZS();
		i && (n.value = Math.max(i.responseStart - QS(), 0), n.entries = [i], r(!0), JS(() => {
			n = $S(`TTFB`, 0), r = YS(e, n, AC, t.reportAllChanges), r(!0);
		}));
	});
}, NC = (e) => {
	e && e instanceof Function && (mC(e), EC(e), fC(e), kC(e), MC(e));
};
typeof window < `u` && window.document && window.document.createElement;
function PC(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function(r) {
		if (e?.(r), n === !1 || !r.defaultPrevented) return t?.(r);
	};
}
function FC(e, t) {
	if (typeof e == `function`) return e(t);
	e != null && (e.current = t);
}
function IC(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = FC(e, t);
			return !n && typeof r == `function` && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == `function` ? n() : FC(e[t], null);
			}
		};
	};
}
function LC(...e) {
	return I.useCallback(IC(...e), e);
}
function RC(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = I.createContext(r);
		i.displayName = t + `Context`;
		let a = n.length;
		n = [...n, r];
		let o = (t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, c = I.useMemo(() => o, Object.values(o));
			return (0, X.jsx)(s.Provider, {
				value: c,
				children: r
			});
		};
		o.displayName = t + `Provider`;
		function s(n, o) {
			let s = o?.[e]?.[a] || i, c = I.useContext(s);
			if (c) return c;
			if (r !== void 0) return r;
			throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return [o, s];
	}
	let i = () => {
		let t = n.map((e) => I.createContext(e));
		return function(n) {
			let r = n?.[e] || t;
			return I.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		};
	};
	return i.scopeName = e, [r, zC(i, ...t)];
}
function zC(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = () => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let r = n.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return I.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		};
	};
	return n.scopeName = t.scopeName, n;
}
function BC(e) {
	let t = I.forwardRef((t, n) => {
		let { children: r, ...i } = t, a = null, o = !1, s = [];
		JC(r) && typeof QC == `function` && (r = QC(r._payload)), I.Children.forEach(r, (e) => {
			if (KC(e)) {
				o = !0;
				let t = e, n = `child` in t.props ? t.props.child : t.props.children;
				JC(n) && typeof QC == `function` && (n = QC(n._payload)), a = UC(t, n), s.push(a?.props?.children);
			} else s.push(e);
		}), a ? a = I.cloneElement(a, void 0, s) : !o && I.Children.count(r) === 1 && I.isValidElement(r) && (a = r);
		let c = a ? GC(a) : void 0, l = LC(n, c);
		if (!a) {
			if (r || r === 0) throw Error(o ? ZC(e) : XC(e));
			return r;
		}
		let u = WC(i, a.props ?? {});
		return a.type !== I.Fragment && (u.ref = n ? l : c), I.cloneElement(a, u);
	});
	return t.displayName = `${e}.Slot`, t;
}
var VC = Symbol.for(`radix.slottable`);
function HC(e) {
	let t = (e) => `child` in e ? e.children(e.child) : e.children;
	return t.displayName = `${e}.Slottable`, t.__radixId = VC, t;
}
var UC = (e, t) => {
	if (`child` in e.props) {
		let t = e.props.child;
		return I.isValidElement(t) ? I.cloneElement(t, void 0, e.props.children(t.props.children)) : null;
	}
	return I.isValidElement(t) ? t : null;
};
function WC(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === `style` ? n[r] = {
			...i,
			...a
		} : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
	}
	return {
		...e,
		...n
	};
}
function GC(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get, n = t && `isReactWarning` in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, `ref`)?.get, n = t && `isReactWarning` in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function KC(e) {
	return I.isValidElement(e) && typeof e.type == `function` && `__radixId` in e.type && e.type.__radixId === VC;
}
var qC = Symbol.for(`react.lazy`);
function JC(e) {
	return typeof e == `object` && !!e && `$$typeof` in e && e.$$typeof === qC && `_payload` in e && YC(e._payload);
}
function YC(e) {
	return typeof e == `object` && !!e && `then` in e;
}
var XC = (e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, ZC = (e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, QC = I.use, $C = [
	`a`,
	`button`,
	`div`,
	`form`,
	`h2`,
	`h3`,
	`img`,
	`input`,
	`label`,
	`li`,
	`nav`,
	`ol`,
	`p`,
	`select`,
	`span`,
	`svg`,
	`ul`
].reduce((e, t) => {
	let n = BC(`Primitive.${t}`), r = I.forwardRef((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0), (0, X.jsx)(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {});
function ew(e, t) {
	e && Im.flushSync(() => e.dispatchEvent(t));
}
function tw(e) {
	let t = I.useRef(e);
	return I.useEffect(() => {
		t.current = e;
	}), I.useMemo(() => ((...e) => t.current?.(...e)), []);
}
var nw = globalThis?.document ? I.useLayoutEffect : () => {}, rw = I.useEffectEvent, iw = I.useInsertionEffect;
function aw(e) {
	if (typeof rw == `function`) return rw(e);
	let t = I.useRef(() => {
		throw Error(`Cannot call an event handler while rendering.`);
	});
	return typeof iw == `function` ? iw(() => {
		t.current = e;
	}) : nw(() => {
		t.current = e;
	}), I.useMemo(() => ((...e) => t.current?.(...e)), []);
}
var ow = `DismissableLayer`, sw = `dismissableLayer.update`, cw = `dismissableLayer.pointerDownOutside`, lw = `dismissableLayer.focusOutside`, uw, dw = I.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
}), fw = I.forwardRef((e, t) => {
	let { disableOutsidePointerEvents: n = !1, deferPointerDownOutside: r = !1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: o, onInteractOutside: s, onDismiss: c, ...l } = e, u = I.useContext(dw), [d, f] = I.useState(null), p = d?.ownerDocument ?? globalThis?.document, [, m] = I.useState({}), h = LC(t, f), g = Array.from(u.layers), [_] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), v = g.indexOf(_), y = d ? g.indexOf(d) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, x = y >= v, S = I.useRef(!1), C = hw((e) => {
		let t = e.target;
		if (!(t instanceof Node)) return;
		let n = [...u.branches].some((e) => e.contains(t));
		!x || n || (a?.(e), s?.(e), e.defaultPrevented || c?.());
	}, {
		ownerDocument: p,
		deferPointerDownOutside: r,
		isDeferredPointerDownOutsideRef: S,
		dismissableSurfaces: u.dismissableSurfaces
	}), w = gw((e) => {
		if (r && S.current) return;
		let t = e.target;
		[...u.branches].some((e) => e.contains(t)) || (o?.(e), s?.(e), e.defaultPrevented || c?.());
	}, p), T = d ? y === g.length - 1 : !1, E = aw((e) => {
		e.key === `Escape` && (i?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()));
	});
	return I.useEffect(() => {
		if (T) return p.addEventListener(`keydown`, E, { capture: !0 }), () => p.removeEventListener(`keydown`, E, { capture: !0 });
	}, [p, T]), I.useEffect(() => {
		if (d) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (uw = p.body.style.pointerEvents, p.body.style.pointerEvents = `none`), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), _w(), () => {
			n && (u.layersWithOutsidePointerEventsDisabled.delete(d), u.layersWithOutsidePointerEventsDisabled.size === 0 && (p.body.style.pointerEvents = uw));
		};
	}, [
		d,
		p,
		n,
		u
	]), I.useEffect(() => () => {
		d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), _w());
	}, [d, u]), I.useEffect(() => {
		let e = () => m({});
		return document.addEventListener(sw, e), () => document.removeEventListener(sw, e);
	}, []), (0, X.jsx)($C.div, {
		...l,
		ref: h,
		style: {
			pointerEvents: b ? x ? `auto` : `none` : void 0,
			...e.style
		},
		onFocusCapture: PC(e.onFocusCapture, w.onFocusCapture),
		onBlurCapture: PC(e.onBlurCapture, w.onBlurCapture),
		onPointerDownCapture: PC(e.onPointerDownCapture, C.onPointerDownCapture)
	});
});
fw.displayName = ow;
var pw = `DismissableLayerBranch`, mw = I.forwardRef((e, t) => {
	let n = I.useContext(dw), r = I.useRef(null), i = LC(t, r);
	return I.useEffect(() => {
		let e = r.current;
		if (e) return n.branches.add(e), () => {
			n.branches.delete(e);
		};
	}, [n.branches]), (0, X.jsx)($C.div, {
		...e,
		ref: i
	});
});
mw.displayName = pw;
function hw(e, t) {
	let { ownerDocument: n = globalThis?.document, deferPointerDownOutside: r = !1, isDeferredPointerDownOutsideRef: i, dismissableSurfaces: a } = t, o = tw(e), s = I.useRef(!1), c = I.useRef(!1), l = I.useRef(/* @__PURE__ */ new Map()), u = I.useRef(() => {});
	return I.useEffect(() => {
		function e() {
			c.current = !1, i.current = !1, l.current.clear();
		}
		function t() {
			return Array.from(l.current.values()).some(Boolean);
		}
		function d(e) {
			if (!c.current) return;
			let t = e.target;
			t instanceof Node && [...a].some((e) => e.contains(t)) || l.current.set(e.type, !0), e.type === `click` && window.setTimeout(() => {
				c.current && u.current();
			}, 0);
		}
		function f(e) {
			c.current && l.current.set(e.type, !1);
		}
		let p = (a) => {
			if (a.target && !s.current) {
				let s = function() {
					n.removeEventListener(`click`, u.current);
					let r = t();
					e(), r || vw(cw, o, d, { discrete: !0 });
				}, d = { originalEvent: a };
				c.current = !0, i.current = r && a.button === 0, l.current.clear(), !r || a.button !== 0 ? s() : (n.removeEventListener(`click`, u.current), u.current = s, n.addEventListener(`click`, u.current, { once: !0 }));
			} else n.removeEventListener(`click`, u.current), e();
			s.current = !1;
		}, m = [
			`pointerup`,
			`mousedown`,
			`mouseup`,
			`touchstart`,
			`touchend`,
			`click`
		];
		for (let e of m) n.addEventListener(e, d, !0), n.addEventListener(e, f);
		let h = window.setTimeout(() => {
			n.addEventListener(`pointerdown`, p);
		}, 0);
		return () => {
			window.clearTimeout(h), n.removeEventListener(`pointerdown`, p), n.removeEventListener(`click`, u.current);
			for (let e of m) n.removeEventListener(e, d, !0), n.removeEventListener(e, f);
		};
	}, [
		n,
		o,
		r,
		i,
		a
	]), { onPointerDownCapture: () => s.current = !0 };
}
function gw(e, t = globalThis?.document) {
	let n = tw(e), r = I.useRef(!1);
	return I.useEffect(() => {
		let e = (e) => {
			e.target && !r.current && vw(lw, n, { originalEvent: e }, { discrete: !1 });
		};
		return t.addEventListener(`focusin`, e), () => t.removeEventListener(`focusin`, e);
	}, [t, n]), {
		onFocusCapture: () => r.current = !0,
		onBlurCapture: () => r.current = !1
	};
}
function _w() {
	let e = new CustomEvent(sw);
	document.dispatchEvent(e);
}
function vw(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? ew(i, a) : i.dispatchEvent(a);
}
var yw = I.useId || (() => void 0), bw = 0;
function xw(e) {
	let [t, n] = I.useState(yw());
	return nw(() => {
		e || n((e) => e ?? String(bw++));
	}, [e]), e || (t ? `radix-${t}` : ``);
}
var Sw = `Arrow`, Cw = I.forwardRef((e, t) => {
	let { children: n, width: r = 10, height: i = 5, ...a } = e;
	return (0, X.jsx)($C.svg, {
		...a,
		ref: t,
		width: r,
		height: i,
		viewBox: `0 0 30 10`,
		preserveAspectRatio: `none`,
		children: e.asChild ? n : (0, X.jsx)(`polygon`, { points: `0,0 30,0 15,10` })
	});
});
Cw.displayName = Sw;
var ww = Cw;
function Tw(e) {
	let [t, n] = I.useState(void 0);
	return nw(() => {
		if (e) {
			n({
				width: e.offsetWidth,
				height: e.offsetHeight
			});
			let t = new ResizeObserver((t) => {
				if (!Array.isArray(t) || !t.length) return;
				let r = t[0], i, a;
				if (`borderBoxSize` in r) {
					let e = r.borderBoxSize, t = Array.isArray(e) ? e[0] : e;
					i = t.inlineSize, a = t.blockSize;
				} else i = e.offsetWidth, a = e.offsetHeight;
				n({
					width: i,
					height: a
				});
			});
			return t.observe(e, { box: `border-box` }), () => t.unobserve(e);
		} else n(void 0);
	}, [e]), t;
}
var Ew = `Popper`, [Dw, Ow] = RC(Ew), [kw, Aw] = Dw(Ew), jw = (e) => {
	let { __scopePopper: t, children: n } = e, [r, i] = I.useState(null), [a, o] = I.useState(void 0);
	return (0, X.jsx)(kw, {
		scope: t,
		anchor: r,
		onAnchorChange: i,
		placementState: a,
		setPlacementState: o,
		children: n
	});
};
jw.displayName = Ew;
var Mw = `PopperAnchor`, Nw = I.forwardRef((e, t) => {
	let { __scopePopper: n, virtualRef: r, ...i } = e, a = Aw(Mw, n), o = I.useRef(null), s = a.onAnchorChange, c = LC(t, I.useCallback((e) => {
		o.current = e, e && s(e);
	}, [s])), l = I.useRef(null);
	I.useEffect(() => {
		if (!r) return;
		let e = l.current;
		l.current = r.current, e !== l.current && s(l.current);
	});
	let u = a.placementState && Uw(a.placementState), d = u?.[0], f = u?.[1];
	return r ? null : (0, X.jsx)($C.div, {
		"data-radix-popper-side": d,
		"data-radix-popper-align": f,
		...i,
		ref: c
	});
});
Nw.displayName = Mw;
var Pw = `PopperContent`, [Fw, Iw] = Dw(Pw), Lw = I.forwardRef((e, t) => {
	let { __scopePopper: n, side: r = `bottom`, sideOffset: i = 0, align: a = `center`, alignOffset: o = 0, arrowPadding: s = 0, avoidCollisions: c = !0, collisionBoundary: l = [], collisionPadding: u = 0, sticky: d = `partial`, hideWhenDetached: f = !1, updatePositionStrategy: p = `optimized`, onPlaced: m, ...h } = e, g = Aw(Pw, n), [_, v] = I.useState(null), y = LC(t, v), [b, x] = I.useState(null), S = Tw(b), C = S?.width ?? 0, w = S?.height ?? 0, T = r + (a === `center` ? `` : `-` + a), E = typeof u == `number` ? u : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...u
	}, D = Array.isArray(l) ? l : [l], O = D.length > 0, k = {
		padding: E,
		boundary: D.filter(Vw),
		altBoundary: O
	}, { refs: A, floatingStyles: ee, placement: te, isPositioned: ne, middlewareData: re } = Kg({
		strategy: `fixed`,
		placement: T,
		whileElementsMounted: (...e) => jg(...e, { animationFrame: p === `always` }),
		elements: { reference: g.anchor },
		middleware: [
			Jg({
				mainAxis: i + w,
				alignmentAxis: o
			}),
			c && Yg({
				mainAxis: !0,
				crossAxis: !1,
				limiter: d === `partial` ? Xg() : void 0,
				...k
			}),
			c && Zg({ ...k }),
			Qg({
				...k,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty(`--radix-popper-available-width`, `${n}px`), o.setProperty(`--radix-popper-available-height`, `${r}px`), o.setProperty(`--radix-popper-anchor-width`, `${i}px`), o.setProperty(`--radix-popper-anchor-height`, `${a}px`);
				}
			}),
			b && e_({
				element: b,
				padding: s
			}),
			Hw({
				arrowWidth: C,
				arrowHeight: w
			}),
			f && $g({
				strategy: `referenceHidden`,
				...k,
				boundary: O ? k.boundary : void 0
			})
		]
	}), j = g.setPlacementState;
	nw(() => (j(te), () => {
		j(void 0);
	}), [te, j]);
	let [M, ie] = Uw(te), ae = tw(m);
	nw(() => {
		ne && ae?.();
	}, [ne, ae]);
	let N = re.arrow?.x, oe = re.arrow?.y, se = re.arrow?.centerOffset !== 0, [P, ce] = I.useState();
	return nw(() => {
		_ && ce(window.getComputedStyle(_).zIndex);
	}, [_]), (0, X.jsx)(`div`, {
		ref: A.setFloating,
		"data-radix-popper-content-wrapper": ``,
		style: {
			...ee,
			transform: ne ? ee.transform : `translate(0, -200%)`,
			minWidth: `max-content`,
			zIndex: P,
			"--radix-popper-transform-origin": [re.transformOrigin?.x, re.transformOrigin?.y].join(` `),
			...re.hide?.referenceHidden && {
				visibility: `hidden`,
				pointerEvents: `none`
			}
		},
		dir: e.dir,
		children: (0, X.jsx)(Fw, {
			scope: n,
			placedSide: M,
			placedAlign: ie,
			onArrowChange: x,
			arrowX: N,
			arrowY: oe,
			shouldHideArrow: se,
			children: (0, X.jsx)($C.div, {
				"data-side": M,
				"data-align": ie,
				...h,
				ref: y,
				style: {
					...h.style,
					animation: ne ? void 0 : `none`
				}
			})
		})
	});
});
Lw.displayName = Pw;
var Rw = `PopperArrow`, zw = {
	top: `bottom`,
	right: `left`,
	bottom: `top`,
	left: `right`
}, Bw = I.forwardRef(function(e, t) {
	let { __scopePopper: n, ...r } = e, i = Iw(Rw, n), a = zw[i.placedSide];
	return (0, X.jsx)(`span`, {
		ref: i.onArrowChange,
		style: {
			position: `absolute`,
			left: i.arrowX,
			top: i.arrowY,
			[a]: 0,
			transformOrigin: {
				top: ``,
				right: `0 0`,
				bottom: `center 0`,
				left: `100% 0`
			}[i.placedSide],
			transform: {
				top: `translateY(100%)`,
				right: `translateY(50%) rotate(90deg) translateX(-50%)`,
				bottom: `rotate(180deg)`,
				left: `translateY(50%) rotate(-90deg) translateX(50%)`
			}[i.placedSide],
			visibility: i.shouldHideArrow ? `hidden` : void 0
		},
		children: (0, X.jsx)(ww, {
			...r,
			ref: t,
			style: {
				...r.style,
				display: `block`
			}
		})
	});
});
Bw.displayName = Rw;
function Vw(e) {
	return e !== null;
}
var Hw = (e) => ({
	name: `transformOrigin`,
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Uw(n), u = {
			start: `0%`,
			center: `50%`,
			end: `100%`
		}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = ``, m = ``;
		return c === `bottom` ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === `top` ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === `right` ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === `left` && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
			x: p,
			y: m
		} };
	}
});
function Uw(e) {
	let [t, n = `center`] = e.split(`-`);
	return [t, n];
}
var Ww = jw, Gw = Nw, Kw = Lw, qw = Bw, Jw = `Portal`, Yw = I.forwardRef((e, t) => {
	let { container: n, ...r } = e, [i, a] = I.useState(!1);
	nw(() => a(!0), []);
	let o = n || i && globalThis?.document?.body;
	return o ? Im.createPortal((0, X.jsx)($C.div, {
		...r,
		ref: t
	}), o) : null;
});
Yw.displayName = Jw;
function Xw(e, t) {
	return I.useReducer((e, n) => t[e][n] ?? e, e);
}
var Zw = (e) => {
	let { present: t, children: n } = e, r = Qw(t), i = typeof n == `function` ? n({ present: r.isPresent }) : I.Children.only(n), a = eT(r.ref, nT(i));
	return typeof n == `function` || r.isPresent ? I.cloneElement(i, { ref: a }) : null;
};
Zw.displayName = `Presence`;
function Qw(e) {
	let [t, n] = I.useState(), r = I.useRef(null), i = I.useRef(e), a = I.useRef(`none`), [o, s] = Xw(e ? `mounted` : `unmounted`, {
		mounted: {
			UNMOUNT: `unmounted`,
			ANIMATION_OUT: `unmountSuspended`
		},
		unmountSuspended: {
			MOUNT: `mounted`,
			ANIMATION_END: `unmounted`
		},
		unmounted: { MOUNT: `mounted` }
	});
	return I.useEffect(() => {
		let e = tT(r.current);
		a.current = o === `mounted` ? e : `none`;
	}, [o]), nw(() => {
		let t = r.current, n = i.current;
		if (n !== e) {
			let r = a.current, o = tT(t);
			e ? s(`MOUNT`) : o === `none` || t?.display === `none` ? s(`UNMOUNT`) : s(n && r !== o ? `ANIMATION_OUT` : `UNMOUNT`), i.current = e;
		}
	}, [e, s]), nw(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, o = (a) => {
				let o = tT(r.current).includes(CSS.escape(a.animationName));
				if (a.target === t && o && (s(`ANIMATION_END`), !i.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = `forwards`, e = n.setTimeout(() => {
						t.style.animationFillMode === `forwards` && (t.style.animationFillMode = r);
					});
				}
			}, c = (e) => {
				e.target === t && (a.current = tT(r.current));
			};
			return t.addEventListener(`animationstart`, c), t.addEventListener(`animationcancel`, o), t.addEventListener(`animationend`, o), () => {
				n.clearTimeout(e), t.removeEventListener(`animationstart`, c), t.removeEventListener(`animationcancel`, o), t.removeEventListener(`animationend`, o);
			};
		} else s(`ANIMATION_END`);
	}, [t, s]), {
		isPresent: [`mounted`, `unmountSuspended`].includes(o),
		ref: I.useCallback((e) => {
			r.current = e ? getComputedStyle(e) : null, n(e);
		}, [])
	};
}
function $w(e, t) {
	if (typeof e == `function`) return e(t);
	e != null && (e.current = t);
}
function eT(...e) {
	let t = I.useRef(e);
	return t.current = e, I.useCallback((e) => {
		let n = t.current, r = !1, i = n.map((t) => {
			let n = $w(t, e);
			return !r && typeof n == `function` && (r = !0), n;
		});
		if (r) return () => {
			for (let e = 0; e < i.length; e++) {
				let t = i[e];
				typeof t == `function` ? t() : $w(n[e], null);
			}
		};
	}, []);
}
function tT(e) {
	return e?.animationName || `none`;
}
function nT(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get, n = t && `isReactWarning` in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, `ref`)?.get, n = t && `isReactWarning` in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var rT = I.useInsertionEffect || nw;
function iT({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
	let [i, a, o] = aT({
		defaultProp: t,
		onChange: n
	}), s = e !== void 0, c = s ? e : i;
	{
		let t = I.useRef(e !== void 0);
		I.useEffect(() => {
			let e = t.current;
			e !== s && console.warn(`${r} is changing from ${e ? `controlled` : `uncontrolled`} to ${s ? `controlled` : `uncontrolled`}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), t.current = s;
		}, [s, r]);
	}
	return [c, I.useCallback((t) => {
		if (s) {
			let n = oT(t) ? t(e) : t;
			n !== e && o.current?.(n);
		} else a(t);
	}, [
		s,
		e,
		a,
		o
	])];
}
function aT({ defaultProp: e, onChange: t }) {
	let [n, r] = I.useState(e), i = I.useRef(n), a = I.useRef(t);
	return rT(() => {
		a.current = t;
	}, [t]), I.useEffect(() => {
		i.current !== n && (a.current?.(n), i.current = n);
	}, [n, i]), [
		n,
		r,
		a
	];
}
function oT(e) {
	return typeof e == `function`;
}
var sT = Object.freeze({
	position: `absolute`,
	border: 0,
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: `hidden`,
	clip: `rect(0, 0, 0, 0)`,
	whiteSpace: `nowrap`,
	wordWrap: `normal`
}), cT = `VisuallyHidden`, lT = I.forwardRef((e, t) => (0, X.jsx)($C.span, {
	...e,
	ref: t,
	style: {
		...sT,
		...e.style
	}
}));
lT.displayName = cT;
var uT = lT, [dT, fT] = RC(`Tooltip`, [Ow]), pT = Ow(), mT = `TooltipProvider`, hT = 700, gT = `tooltip.open`, [_T, vT] = dT(mT), yT = (e) => {
	let { __scopeTooltip: t, delayDuration: n = hT, skipDelayDuration: r = 300, disableHoverableContent: i = !1, children: a } = e, o = I.useRef(!0), s = I.useRef(!1), c = I.useRef(0);
	return I.useEffect(() => {
		let e = c.current;
		return () => window.clearTimeout(e);
	}, []), (0, X.jsx)(_T, {
		scope: t,
		isOpenDelayedRef: o,
		delayDuration: n,
		onOpen: I.useCallback(() => {
			r <= 0 || (window.clearTimeout(c.current), o.current = !1);
		}, [r]),
		onClose: I.useCallback(() => {
			r <= 0 || (window.clearTimeout(c.current), c.current = window.setTimeout(() => o.current = !0, r));
		}, [r]),
		isPointerInTransitRef: s,
		onPointerInTransitChange: I.useCallback((e) => {
			s.current = e;
		}, []),
		disableHoverableContent: i,
		children: a
	});
};
yT.displayName = mT;
var bT = `Tooltip`, [xT, ST] = dT(bT), CT = (e) => {
	let { __scopeTooltip: t, children: n, open: r, defaultOpen: i, onOpenChange: a, disableHoverableContent: o, delayDuration: s } = e, c = vT(bT, e.__scopeTooltip), l = pT(t), [u, d] = I.useState(null), f = xw(), p = I.useRef(0), m = o ?? c.disableHoverableContent, h = s ?? c.delayDuration, g = I.useRef(!1), [_, v] = iT({
		prop: r,
		defaultProp: i ?? !1,
		onChange: (e) => {
			e ? (c.onOpen(), document.dispatchEvent(new CustomEvent(gT))) : c.onClose(), a?.(e);
		},
		caller: bT
	}), y = I.useMemo(() => _ ? g.current ? `delayed-open` : `instant-open` : `closed`, [_]), b = I.useCallback(() => {
		window.clearTimeout(p.current), p.current = 0, g.current = !1, v(!0);
	}, [v]), x = I.useCallback(() => {
		window.clearTimeout(p.current), p.current = 0, v(!1);
	}, [v]), S = I.useCallback(() => {
		window.clearTimeout(p.current), p.current = window.setTimeout(() => {
			g.current = !0, v(!0), p.current = 0;
		}, h);
	}, [h, v]);
	return I.useEffect(() => () => {
		p.current &&= (window.clearTimeout(p.current), 0);
	}, []), (0, X.jsx)(Ww, {
		...l,
		children: (0, X.jsx)(xT, {
			scope: t,
			contentId: f,
			open: _,
			stateAttribute: y,
			trigger: u,
			onTriggerChange: d,
			onTriggerEnter: I.useCallback(() => {
				c.isOpenDelayedRef.current ? S() : b();
			}, [
				c.isOpenDelayedRef,
				S,
				b
			]),
			onTriggerLeave: I.useCallback(() => {
				m ? x() : (window.clearTimeout(p.current), p.current = 0);
			}, [x, m]),
			onOpen: b,
			onClose: x,
			disableHoverableContent: m,
			children: n
		})
	});
};
CT.displayName = bT;
var wT = `TooltipTrigger`, TT = I.forwardRef((e, t) => {
	let { __scopeTooltip: n, ...r } = e, i = ST(wT, n), a = vT(wT, n), o = pT(n), s = LC(t, I.useRef(null), i.onTriggerChange), c = I.useRef(!1), l = I.useRef(!1), u = I.useCallback(() => c.current = !1, []);
	return I.useEffect(() => () => document.removeEventListener(`pointerup`, u), [u]), (0, X.jsx)(Gw, {
		asChild: !0,
		...o,
		children: (0, X.jsx)($C.button, {
			"aria-describedby": i.open ? i.contentId : void 0,
			"data-state": i.stateAttribute,
			...r,
			ref: s,
			onPointerMove: PC(e.onPointerMove, (e) => {
				e.pointerType !== `touch` && !l.current && !a.isPointerInTransitRef.current && (i.onTriggerEnter(), l.current = !0);
			}),
			onPointerLeave: PC(e.onPointerLeave, () => {
				i.onTriggerLeave(), l.current = !1;
			}),
			onPointerDown: PC(e.onPointerDown, () => {
				i.open && i.onClose(), c.current = !0, document.addEventListener(`pointerup`, u, { once: !0 });
			}),
			onFocus: PC(e.onFocus, () => {
				c.current || i.onOpen();
			}),
			onBlur: PC(e.onBlur, i.onClose),
			onClick: PC(e.onClick, i.onClose)
		})
	});
});
TT.displayName = wT;
var ET = `TooltipPortal`, [DT, OT] = dT(ET, { forceMount: void 0 }), kT = (e) => {
	let { __scopeTooltip: t, forceMount: n, children: r, container: i } = e, a = ST(ET, t);
	return (0, X.jsx)(DT, {
		scope: t,
		forceMount: n,
		children: (0, X.jsx)(Zw, {
			present: n || a.open,
			children: (0, X.jsx)(Yw, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
kT.displayName = ET;
var AT = `TooltipContent`, jT = I.forwardRef((e, t) => {
	let n = OT(AT, e.__scopeTooltip), { forceMount: r = n.forceMount, side: i = `top`, ...a } = e, o = ST(AT, e.__scopeTooltip);
	return (0, X.jsx)(Zw, {
		present: r || o.open,
		children: o.disableHoverableContent ? (0, X.jsx)(IT, {
			side: i,
			...a,
			ref: t
		}) : (0, X.jsx)(MT, {
			side: i,
			...a,
			ref: t
		})
	});
}), MT = I.forwardRef((e, t) => {
	let n = ST(AT, e.__scopeTooltip), r = vT(AT, e.__scopeTooltip), i = I.useRef(null), a = LC(t, i), [o, s] = I.useState(null), { trigger: c, onClose: l } = n, u = i.current, { onPointerInTransitChange: d } = r, f = I.useCallback(() => {
		s(null), d(!1);
	}, [d]), p = I.useCallback((e, t) => {
		let n = e.currentTarget, r = {
			x: e.clientX,
			y: e.clientY
		}, i = BT(r, zT(r, n.getBoundingClientRect())), a = VT(t.getBoundingClientRect()), o = UT([...i, ...a]);
		s(o), d(!0);
	}, [d]);
	return I.useEffect(() => () => f(), [f]), I.useEffect(() => {
		if (c && u) {
			let e = (e) => p(e, u), t = (e) => p(e, c);
			return c.addEventListener(`pointerleave`, e), u.addEventListener(`pointerleave`, t), () => {
				c.removeEventListener(`pointerleave`, e), u.removeEventListener(`pointerleave`, t);
			};
		}
	}, [
		c,
		u,
		p,
		f
	]), I.useEffect(() => {
		if (o) {
			let e = (e) => {
				let t = e.target, n = {
					x: e.clientX,
					y: e.clientY
				}, r = c?.contains(t) || u?.contains(t), i = !HT(n, o);
				r ? f() : i && (f(), l());
			};
			return document.addEventListener(`pointermove`, e), () => document.removeEventListener(`pointermove`, e);
		}
	}, [
		c,
		u,
		o,
		l,
		f
	]), (0, X.jsx)(IT, {
		...e,
		ref: a
	});
}), [NT, PT] = dT(bT, { isInside: !1 }), FT = HC(`TooltipContent`), IT = I.forwardRef((e, t) => {
	let { __scopeTooltip: n, children: r, "aria-label": i, onEscapeKeyDown: a, onPointerDownOutside: o, ...s } = e, c = ST(AT, n), l = pT(n), { onClose: u } = c;
	return I.useEffect(() => (document.addEventListener(gT, u), () => document.removeEventListener(gT, u)), [u]), I.useEffect(() => {
		if (c.trigger) {
			let e = (e) => {
				e.target instanceof Node && e.target.contains(c.trigger) && u();
			};
			return window.addEventListener(`scroll`, e, { capture: !0 }), () => window.removeEventListener(`scroll`, e, { capture: !0 });
		}
	}, [c.trigger, u]), (0, X.jsx)(fw, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onEscapeKeyDown: a,
		onPointerDownOutside: o,
		onFocusOutside: (e) => e.preventDefault(),
		onDismiss: u,
		children: (0, X.jsxs)(Kw, {
			"data-state": c.stateAttribute,
			...l,
			...s,
			ref: t,
			style: {
				...s.style,
				"--radix-tooltip-content-transform-origin": `var(--radix-popper-transform-origin)`,
				"--radix-tooltip-content-available-width": `var(--radix-popper-available-width)`,
				"--radix-tooltip-content-available-height": `var(--radix-popper-available-height)`,
				"--radix-tooltip-trigger-width": `var(--radix-popper-anchor-width)`,
				"--radix-tooltip-trigger-height": `var(--radix-popper-anchor-height)`
			},
			children: [(0, X.jsx)(FT, { children: r }), (0, X.jsx)(NT, {
				scope: n,
				isInside: !0,
				children: (0, X.jsx)(uT, {
					id: c.contentId,
					role: `tooltip`,
					children: i || r
				})
			})]
		})
	});
});
jT.displayName = AT;
var LT = `TooltipArrow`, RT = I.forwardRef((e, t) => {
	let { __scopeTooltip: n, ...r } = e, i = pT(n);
	return PT(LT, n).isInside ? null : (0, X.jsx)(qw, {
		...i,
		...r,
		ref: t
	});
});
RT.displayName = LT;
function zT(e, t) {
	let n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
	switch (Math.min(n, r, i, a)) {
		case a: return `left`;
		case i: return `right`;
		case n: return `top`;
		case r: return `bottom`;
		default: throw Error(`unreachable`);
	}
}
function BT(e, t, n = 5) {
	let r = [];
	switch (t) {
		case `top`:
			r.push({
				x: e.x - n,
				y: e.y + n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case `bottom`:
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y - n
			});
			break;
		case `left`:
			r.push({
				x: e.x + n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case `right`:
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x - n,
				y: e.y + n
			});
			break;
	}
	return r;
}
function VT(e) {
	let { top: t, right: n, bottom: r, left: i } = e;
	return [
		{
			x: i,
			y: t
		},
		{
			x: n,
			y: t
		},
		{
			x: n,
			y: r
		},
		{
			x: i,
			y: r
		}
	];
}
function HT(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function UT(e) {
	let t = e.slice();
	return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y)), WT(t);
}
function WT(e) {
	if (e.length <= 1) return e.slice();
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (; t.length >= 2;) {
			let e = t[t.length - 1], n = t[t.length - 2];
			if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
			else break;
		}
		t.push(r);
	}
	t.pop();
	let n = [];
	for (let t = e.length - 1; t >= 0; t--) {
		let r = e[t];
		for (; n.length >= 2;) {
			let e = n[n.length - 1], t = n[n.length - 2];
			if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
			else break;
		}
		n.push(r);
	}
	return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var GT = CT, KT = TT, qT = kT, JT = jT;
(0, Je.createRoot)(document.getElementById(`root`)).render((0, X.jsx)(I.StrictMode, { children: (0, X.jsx)(O, {
	store: ny,
	children: (0, X.jsxs)(yT, {
		disableHoverableContent: !0,
		delayDuration: 500,
		skipDelayDuration: 500,
		children: [(0, X.jsx)(KS, {}), (0, X.jsx)(y, {
			autoClose: 5e3,
			transition: T,
			position: `bottom-right`,
			stacked: !0
		})]
	})
}) })), NC();
export { Ep as $, Kg as A, km as B, i_ as C, Dt as Ct, Jg as D, ht as Dt, Zg as E, gt as Et, fh as F, fm as G, _m as H, mh as I, qp as J, dm as K, Hm as L, Mg as M, bh as N, Yg as O, ct as Ot, ph as P, Ip as Q, Fm as R, s_ as S, jt as St, r_ as T, yt as Tt, gm as U, Em as V, hm as W, zp as X, Kp as Y, Np as Z, gy as _, Vf as _t, bS as a, qf as at, T_ as b, bf as bt, Lx as c, Kf as ct, Cy as d, If as dt, mp as et, Sy as f, Uf as ft, py as g, Nf as gt, hy as h, Rf as ht, KT as i, Xf as it, jg as j, Qg as k, L as kt, Ix as l, jf as lt, vy as m, zf as mt, qT as n, rp as nt, dS as o, Jf as ot, wy as p, Bf as pt, sm as q, GT as r, Wf as rt, tS as s, Gf as st, JT as t, sp as tt, Fx as u, Ff as ut, Gv as v, Sf as vt, n_ as w, Ct as wt, c_ as x, Pt as xt, Kv as y, xf as yt, Am as z };

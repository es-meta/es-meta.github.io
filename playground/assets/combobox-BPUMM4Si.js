import { c as e, n as t } from "./jsx-runtime-CqwARRmJ.js";
import { t as n } from "./react-dom-sPQfLLzr.js";
import { $ as r, B as i, D as a, E as o, G as s, H as c, I as l, M as u, N as d, O as f, Q as p, R as m, S as h, U as g, V as _, W as v, Y as y, b, d as x, f as S, h as C, i as w, j as T, k as E, l as ee, m as D, n as O, q as k, r as A, s as j, t as M, u as N } from "./label-D5dZ6Xu5.js";
import { t as P } from "./use-resolve-button-type-Da7iyCjh.js";
import { $ as F, A as I, B as te, C as ne, D as L, E as R, F as z, G as B, H as V, I as H, J as re, K as ie, L as U, M as W, N as ae, O as oe, P as se, Q as ce, R as le, S as ue, T as de, U as fe, V as pe, W as me, X as G, Y as he, Z as ge, b as _e, et as ve, j as ye, k as be, q as xe, tt as Se, w as Ce, x as we, z as Te } from "./index-QWim6Jbc.js";
var K = e(t(), 1), q = e(n(), 1);
function J(e, t, n) {
	let r = n.initialDeps ?? [], i;
	function a() {
		var a;
		let o;
		n.key && n.debug?.call(n) && (o = Date.now());
		let s = e();
		if (!(s.length !== r.length || s.some((e, t) => r[t] !== e))) return i;
		r = s;
		let c;
		if (n.key && n.debug?.call(n) && (c = Date.now()), i = t(...s), n.key && n.debug?.call(n)) {
			let e = Math.round((Date.now() - o) * 100) / 100, t = Math.round((Date.now() - c) * 100) / 100, r = t / 16, i = (e, t) => {
				for (e = String(e); e.length < t;) e = ` ` + e;
				return e;
			};
			console.info(`%c⏱ ${i(t, 5)} /${i(e, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * r, 120))}deg 100% 31%);`, n?.key);
		}
		return (a = n?.onChange) == null || a.call(n, i), i;
	}
	return a.updateDeps = (e) => {
		r = e;
	}, a;
}
function Ee(e, t) {
	if (e === void 0) throw Error(`Unexpected undefined${t ? `: ${t}` : ``}`);
	return e;
}
var De = (e, t) => Math.abs(e - t) < 1.01, Oe = (e, t, n) => {
	let r;
	return function(...i) {
		e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, i), n);
	};
}, ke = (e) => {
	let { offsetWidth: t, offsetHeight: n } = e;
	return {
		width: t,
		height: n
	};
}, Ae = (e) => e, je = (e) => {
	let t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
	for (let e = t; e <= n; e++) r.push(e);
	return r;
}, Me = (e, t) => {
	let n = e.scrollElement;
	if (!n) return;
	let r = e.targetWindow;
	if (!r) return;
	let i = (e) => {
		let { width: n, height: r } = e;
		t({
			width: Math.round(n),
			height: Math.round(r)
		});
	};
	if (i(ke(n)), !r.ResizeObserver) return () => {};
	let a = new r.ResizeObserver((t) => {
		let r = () => {
			let e = t[0];
			if (e?.borderBoxSize) {
				let t = e.borderBoxSize[0];
				if (t) {
					i({
						width: t.inlineSize,
						height: t.blockSize
					});
					return;
				}
			}
			i(ke(n));
		};
		e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(r) : r();
	});
	return a.observe(n, { box: `border-box` }), () => {
		a.unobserve(n);
	};
}, Ne = { passive: !0 }, Pe = typeof window > `u` ? !0 : `onscrollend` in window, Fe = (e, t) => {
	let n = e.scrollElement;
	if (!n) return;
	let r = e.targetWindow;
	if (!r) return;
	let i = 0, a = e.options.useScrollendEvent && Pe ? () => void 0 : Oe(r, () => {
		t(i, !1);
	}, e.options.isScrollingResetDelay), o = (r) => () => {
		let { horizontal: o, isRtl: s } = e.options;
		i = o ? n.scrollLeft * (s && -1 || 1) : n.scrollTop, a(), t(i, r);
	}, s = o(!0), c = o(!1);
	c(), n.addEventListener(`scroll`, s, Ne);
	let l = e.options.useScrollendEvent && Pe;
	return l && n.addEventListener(`scrollend`, c, Ne), () => {
		n.removeEventListener(`scroll`, s), l && n.removeEventListener(`scrollend`, c);
	};
}, Ie = (e, t, n) => {
	if (t?.borderBoxSize) {
		let e = t.borderBoxSize[0];
		if (e) return Math.round(e[n.options.horizontal ? `inlineSize` : `blockSize`]);
	}
	return e[n.options.horizontal ? `offsetWidth` : `offsetHeight`];
}, Le = (e, { adjustments: t = 0, behavior: n }, r) => {
	var i, a;
	let o = e + t;
	(a = (i = r.scrollElement)?.scrollTo) == null || a.call(i, {
		[r.options.horizontal ? `left` : `top`]: o,
		behavior: n
	});
}, Re = class {
	constructor(e) {
		this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = (() => {
			let e = null, t = () => e || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : e = new this.targetWindow.ResizeObserver((e) => {
				e.forEach((e) => {
					let t = () => {
						this._measureElement(e.target, e);
					};
					this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(t) : t();
				});
			}));
			return {
				disconnect: () => {
					var n;
					(n = t()) == null || n.disconnect(), e = null;
				},
				observe: (e) => t()?.observe(e, { box: `border-box` }),
				unobserve: (e) => t()?.unobserve(e)
			};
		})(), this.range = null, this.setOptions = (e) => {
			Object.entries(e).forEach(([t, n]) => {
				n === void 0 && delete e[t];
			}), this.options = {
				debug: !1,
				initialOffset: 0,
				overscan: 1,
				paddingStart: 0,
				paddingEnd: 0,
				scrollPaddingStart: 0,
				scrollPaddingEnd: 0,
				horizontal: !1,
				getItemKey: Ae,
				rangeExtractor: je,
				onChange: () => {},
				measureElement: Ie,
				initialRect: {
					width: 0,
					height: 0
				},
				scrollMargin: 0,
				gap: 0,
				indexAttribute: `data-index`,
				initialMeasurementsCache: [],
				lanes: 1,
				isScrollingResetDelay: 150,
				enabled: !0,
				isRtl: !1,
				useScrollendEvent: !1,
				useAnimationFrameWithResizeObserver: !1,
				...e
			};
		}, this.notify = (e) => {
			var t, n;
			(n = (t = this.options).onChange) == null || n.call(t, this, e);
		}, this.maybeNotify = J(() => (this.calculateRange(), [
			this.isScrolling,
			this.range ? this.range.startIndex : null,
			this.range ? this.range.endIndex : null
		]), (e) => {
			this.notify(e);
		}, {
			key: !1,
			debug: () => this.options.debug,
			initialDeps: [
				this.isScrolling,
				this.range ? this.range.startIndex : null,
				this.range ? this.range.endIndex : null
			]
		}), this.cleanup = () => {
			this.unsubs.filter(Boolean).forEach((e) => e()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
		}, this._didMount = () => () => {
			this.cleanup();
		}, this._willUpdate = () => {
			let e = this.options.enabled ? this.options.getScrollElement() : null;
			if (this.scrollElement !== e) {
				if (this.cleanup(), !e) {
					this.maybeNotify();
					return;
				}
				this.scrollElement = e, this.scrollElement && `ownerDocument` in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = this.scrollElement?.window ?? null, this.elementsCache.forEach((e) => {
					this.observer.observe(e);
				}), this._scrollToOffset(this.getScrollOffset(), {
					adjustments: void 0,
					behavior: void 0
				}), this.unsubs.push(this.options.observeElementRect(this, (e) => {
					this.scrollRect = e, this.maybeNotify();
				})), this.unsubs.push(this.options.observeElementOffset(this, (e, t) => {
					this.scrollAdjustments = 0, this.scrollDirection = t ? this.getScrollOffset() < e ? `forward` : `backward` : null, this.scrollOffset = e, this.isScrolling = t, this.maybeNotify();
				}));
			}
		}, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? `width` : `height`]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == `function` ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (e, t) => {
			let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
			for (let i = t - 1; i >= 0; i--) {
				let t = e[i];
				if (n.has(t.lane)) continue;
				let a = r.get(t.lane);
				if (a == null || t.end > a.end ? r.set(t.lane, t) : t.end < a.end && n.set(t.lane, !0), n.size === this.options.lanes) break;
			}
			return r.size === this.options.lanes ? Array.from(r.values()).sort((e, t) => e.end === t.end ? e.index - t.index : e.end - t.end)[0] : void 0;
		}, this.getMeasurementOptions = J(() => [
			this.options.count,
			this.options.paddingStart,
			this.options.scrollMargin,
			this.options.getItemKey,
			this.options.enabled
		], (e, t, n, r, i) => (this.pendingMeasuredCacheIndexes = [], {
			count: e,
			paddingStart: t,
			scrollMargin: n,
			getItemKey: r,
			enabled: i
		}), { key: !1 }), this.getMeasurements = J(() => [this.getMeasurementOptions(), this.itemSizeCache], ({ count: e, paddingStart: t, scrollMargin: n, getItemKey: r, enabled: i }, a) => {
			if (!i) return this.measurementsCache = [], this.itemSizeCache.clear(), [];
			this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((e) => {
				this.itemSizeCache.set(e.key, e.size);
			}));
			let o = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
			this.pendingMeasuredCacheIndexes = [];
			let s = this.measurementsCache.slice(0, o);
			for (let i = o; i < e; i++) {
				let e = r(i), o = this.options.lanes === 1 ? s[i - 1] : this.getFurthestMeasurement(s, i), c = o ? o.end + this.options.gap : t + n, l = a.get(e), u = typeof l == `number` ? l : this.options.estimateSize(i), d = c + u, f = o ? o.lane : i % this.options.lanes;
				s[i] = {
					index: i,
					start: c,
					size: u,
					end: d,
					key: e,
					lane: f
				};
			}
			return this.measurementsCache = s, s;
		}, {
			key: !1,
			debug: () => this.options.debug
		}), this.calculateRange = J(() => [
			this.getMeasurements(),
			this.getSize(),
			this.getScrollOffset(),
			this.options.lanes
		], (e, t, n, r) => this.range = e.length > 0 && t > 0 ? Be({
			measurements: e,
			outerSize: t,
			scrollOffset: n,
			lanes: r
		}) : null, {
			key: !1,
			debug: () => this.options.debug
		}), this.getVirtualIndexes = J(() => {
			let e = null, t = null, n = this.calculateRange();
			return n && (e = n.startIndex, t = n.endIndex), this.maybeNotify.updateDeps([
				this.isScrolling,
				e,
				t
			]), [
				this.options.rangeExtractor,
				this.options.overscan,
				this.options.count,
				e,
				t
			];
		}, (e, t, n, r, i) => r === null || i === null ? [] : e({
			startIndex: r,
			endIndex: i,
			overscan: t,
			count: n
		}), {
			key: !1,
			debug: () => this.options.debug
		}), this.indexFromElement = (e) => {
			let t = this.options.indexAttribute, n = e.getAttribute(t);
			return n ? parseInt(n, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1);
		}, this._measureElement = (e, t) => {
			let n = this.indexFromElement(e), r = this.measurementsCache[n];
			if (!r) return;
			let i = r.key, a = this.elementsCache.get(i);
			a !== e && (a && this.observer.unobserve(a), this.observer.observe(e), this.elementsCache.set(i, e)), e.isConnected && this.resizeItem(n, this.options.measureElement(e, t, this));
		}, this.resizeItem = (e, t) => {
			let n = this.measurementsCache[e];
			if (!n) return;
			let r = t - (this.itemSizeCache.get(n.key) ?? n.size);
			r !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange === void 0 ? n.start < this.getScrollOffset() + this.scrollAdjustments : this.shouldAdjustScrollPositionOnItemSizeChange(n, r, this)) && this._scrollToOffset(this.getScrollOffset(), {
				adjustments: this.scrollAdjustments += r,
				behavior: void 0
			}), this.pendingMeasuredCacheIndexes.push(n.index), this.itemSizeCache = new Map(this.itemSizeCache.set(n.key, t)), this.notify(!1));
		}, this.measureElement = (e) => {
			if (!e) {
				this.elementsCache.forEach((e, t) => {
					e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(t));
				});
				return;
			}
			this._measureElement(e, void 0);
		}, this.getVirtualItems = J(() => [this.getVirtualIndexes(), this.getMeasurements()], (e, t) => {
			let n = [];
			for (let r = 0, i = e.length; r < i; r++) {
				let i = t[e[r]];
				n.push(i);
			}
			return n;
		}, {
			key: !1,
			debug: () => this.options.debug
		}), this.getVirtualItemForOffset = (e) => {
			let t = this.getMeasurements();
			if (t.length !== 0) return Ee(t[ze(0, t.length - 1, (e) => Ee(t[e]).start, e)]);
		}, this.getOffsetForAlignment = (e, t, n = 0) => {
			let r = this.getSize(), i = this.getScrollOffset();
			t === `auto` && (t = e >= i + r ? `end` : `start`), t === `center` ? e += (n - r) / 2 : t === `end` && (e -= r);
			let a = this.getTotalSize() + this.options.scrollMargin - r;
			return Math.max(Math.min(a, e), 0);
		}, this.getOffsetForIndex = (e, t = `auto`) => {
			e = Math.max(0, Math.min(e, this.options.count - 1));
			let n = this.measurementsCache[e];
			if (!n) return;
			let r = this.getSize(), i = this.getScrollOffset();
			if (t === `auto`) if (n.end >= i + r - this.options.scrollPaddingEnd) t = `end`;
			else if (n.start <= i + this.options.scrollPaddingStart) t = `start`;
			else return [i, t];
			let a = t === `end` ? n.end + this.options.scrollPaddingEnd : n.start - this.options.scrollPaddingStart;
			return [this.getOffsetForAlignment(a, t, n.size), t];
		}, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (e, { align: t = `start`, behavior: n } = {}) => {
			n === `smooth` && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getOffsetForAlignment(e, t), {
				adjustments: void 0,
				behavior: n
			});
		}, this.scrollToIndex = (e, { align: t = `auto`, behavior: n } = {}) => {
			n === `smooth` && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), e = Math.max(0, Math.min(e, this.options.count - 1));
			let r = 0, i = (t) => {
				if (!this.targetWindow) return;
				let r = this.getOffsetForIndex(e, t);
				if (!r) {
					console.warn(`Failed to get offset for index:`, e);
					return;
				}
				let [i, o] = r;
				this._scrollToOffset(i, {
					adjustments: void 0,
					behavior: n
				}), this.targetWindow.requestAnimationFrame(() => {
					let t = this.getScrollOffset(), n = this.getOffsetForIndex(e, o);
					if (!n) {
						console.warn(`Failed to get offset for index:`, e);
						return;
					}
					De(n[0], t) || a(o);
				});
			}, a = (t) => {
				this.targetWindow && (r++, r < 10 ? this.targetWindow.requestAnimationFrame(() => i(t)) : console.warn(`Failed to scroll to index ${e} after 10 attempts.`));
			};
			i(t);
		}, this.scrollBy = (e, { behavior: t } = {}) => {
			t === `smooth` && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getScrollOffset() + e, {
				adjustments: void 0,
				behavior: t
			});
		}, this.getTotalSize = () => {
			let e = this.getMeasurements(), t;
			if (e.length === 0) t = this.options.paddingStart;
			else if (this.options.lanes === 1) t = e[e.length - 1]?.end ?? 0;
			else {
				let n = Array(this.options.lanes).fill(null), r = e.length - 1;
				for (; r >= 0 && n.some((e) => e === null);) {
					let t = e[r];
					n[t.lane] === null && (n[t.lane] = t.end), r--;
				}
				t = Math.max(...n.filter((e) => e !== null));
			}
			return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0);
		}, this._scrollToOffset = (e, { adjustments: t, behavior: n }) => {
			this.options.scrollToFn(e, {
				behavior: n,
				adjustments: t
			}, this);
		}, this.measure = () => {
			this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
		}, this.setOptions(e);
	}
}, ze = (e, t, n, r) => {
	for (; e <= t;) {
		let i = (e + t) / 2 | 0, a = n(i);
		if (a < r) e = i + 1;
		else if (a > r) t = i - 1;
		else return i;
	}
	return e > 0 ? e - 1 : 0;
};
function Be({ measurements: e, outerSize: t, scrollOffset: n, lanes: r }) {
	let i = e.length - 1, a = (t) => e[t].start;
	if (e.length <= r) return {
		startIndex: 0,
		endIndex: i
	};
	let o = ze(0, i, a, n), s = o;
	if (r === 1) for (; s < i && e[s].end < n + t;) s++;
	else if (r > 1) {
		let a = Array(r).fill(0);
		for (; s < i && a.some((e) => e < n + t);) {
			let t = e[s];
			a[t.lane] = t.end, s++;
		}
		let c = Array(r).fill(n + t);
		for (; o >= 0 && c.some((e) => e >= n);) {
			let t = e[o];
			c[t.lane] = t.start, o--;
		}
		o = Math.max(0, o - o % r), s = Math.min(i, s + (r - 1 - s % r));
	}
	return {
		startIndex: o,
		endIndex: s
	};
}
var Ve = typeof document < `u` ? K.useLayoutEffect : K.useEffect;
function He(e) {
	let t = K.useReducer(() => ({}), {})[1], n = {
		...e,
		onChange: (n, r) => {
			var i;
			r ? (0, q.flushSync)(t) : t(), (i = e.onChange) == null || i.call(e, n, r);
		}
	}, [r] = K.useState(() => new Re(n));
	return r.setOptions(n), Ve(() => r._didMount(), []), Ve(() => r._willUpdate()), r;
}
function Ue(e) {
	return He({
		observeElementRect: Me,
		observeElementOffset: Fe,
		scrollToFn: Le,
		...e
	});
}
function We(e) {
	if (e === null) return {
		width: 0,
		height: 0
	};
	let { width: t, height: n } = e.getBoundingClientRect();
	return {
		width: t,
		height: n
	};
}
function Ge(e, t, n = !1) {
	let [r, i] = (0, K.useState)(() => We(t));
	return g(() => {
		if (!t || !e) return;
		let n = s();
		return n.requestAnimationFrame(function e() {
			n.requestAnimationFrame(e), i((e) => {
				let n = We(t);
				return n.width === e.width && n.height === e.height ? e : n;
			});
		}), () => {
			n.dispose();
		};
	}, [t, e]), n ? {
		width: `${r.width}px`,
		height: `${r.height}px`
	} : r;
}
var Ke = ((e) => (e[e.Left = 0] = `Left`, e[e.Right = 2] = `Right`, e))(Ke || {});
function qe(e) {
	let t = (0, K.useRef)(null);
	return {
		onPointerDown: _((n) => {
			t.current = n.pointerType, !N(n.currentTarget) && n.pointerType === `mouse` && n.button === Ke.Left && (n.preventDefault(), e(n));
		}),
		onClick: _((n) => {
			t.current !== `mouse` && (N(n.currentTarget) || e(n));
		})
	};
}
var Je = ((e) => (e[e.Ignore = 0] = `Ignore`, e[e.Select = 1] = `Select`, e[e.Close = 2] = `Close`, e))(Je || {}), Ye = {
	Ignore: { kind: 0 },
	Select: (e) => ({
		kind: 1,
		target: e
	}),
	Close: { kind: 2 }
}, Xe = 200, Ze = 5;
function Qe(e, { trigger: t, action: n, close: r, select: i }) {
	let a = (0, K.useRef)(null), o = (0, K.useRef)(null), s = (0, K.useRef)(null);
	B(e && t !== null, `pointerdown`, (e) => {
		C(e?.target) && t != null && t.contains(e.target) && (o.current = e.x, s.current = e.y, a.current = e.timeStamp);
	}), B(e && t !== null, `pointerup`, (e) => {
		let t = a.current;
		if (t === null || (a.current = null, !x(e.target)) || Math.abs(e.x - (o.current ?? e.x)) < Ze && Math.abs(e.y - (s.current ?? e.y)) < Ze) return;
		let c = n(e);
		switch (c.kind) {
			case 0: return;
			case 1:
				e.timeStamp - t > Xe && (i(c.target), r());
				break;
			case 2:
				r();
				break;
		}
	}, { capture: !0 });
}
function $e(e) {
	let t = (0, K.useRef)({
		value: ``,
		selectionStart: null,
		selectionEnd: null
	});
	return V(e, `blur`, (e) => {
		let n = e.target;
		S(n) && (t.current = {
			value: n.value,
			selectionStart: n.selectionStart,
			selectionEnd: n.selectionEnd
		});
	}), _(() => {
		if (!k(e) && S(e) && e.isConnected) {
			if (e.focus({ preventScroll: !0 }), e.value !== t.current.value) e.setSelectionRange(e.value.length, e.value.length);
			else {
				let { selectionStart: n, selectionEnd: r } = t.current;
				n !== null && r !== null && e.setSelectionRange(n, r);
			}
			t.current = {
				value: ``,
				selectionStart: null,
				selectionEnd: null
			};
		}
	});
}
function et(e) {
	return [e.screenX, e.screenY];
}
function tt() {
	let e = (0, K.useRef)([-1, -1]);
	return {
		wasMoved(t) {
			let n = et(t);
			return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
		},
		update(t) {
			e.current = et(t);
		}
	};
}
function nt(e, { container: t, accept: n, walk: r }) {
	let i = (0, K.useRef)(n), a = (0, K.useRef)(r);
	(0, K.useEffect)(() => {
		i.current = n, a.current = r;
	}, [n, r]), g(() => {
		if (!t || !e) return;
		let n = y(t);
		if (!n) return;
		let r = i.current, o = a.current, s = Object.assign((e) => r(e), { acceptNode: r }), c = n.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, s, !1);
		for (; c.nextNode();) o(c.currentNode);
	}, [
		t,
		e,
		i,
		a
	]);
}
function rt() {
	let e = navigator.userAgentData;
	return e && Array.isArray(e.brands) ? e.brands.map((e) => {
		let { brand: t, version: n } = e;
		return t + `/` + n;
	}).join(` `) : navigator.userAgent;
}
var it = { ...K }, at = it.useInsertionEffect || ((e) => e());
function ot(e) {
	let t = K.useRef(() => {});
	return at(() => {
		t.current = e;
	}), K.useCallback(function() {
		var e = [...arguments];
		return t.current == null ? void 0 : t.current(...e);
	}, []);
}
var st = `ArrowUp`, ct = `ArrowDown`, lt = `ArrowLeft`, ut = `ArrowRight`, dt = typeof document < `u` ? K.useLayoutEffect : K.useEffect, ft = [lt, ut], pt = [st, ct];
[...ft, ...pt];
var mt = !1, ht = 0, gt = () => `floating-ui-` + Math.random().toString(36).slice(2, 6) + ht++;
function _t() {
	let [e, t] = K.useState(() => mt ? gt() : void 0);
	return dt(() => {
		e ?? t(gt());
	}, []), K.useEffect(() => {
		mt = !0;
	}, []), e;
}
var vt = it.useId || _t;
function yt() {
	let e = /* @__PURE__ */ new Map();
	return {
		emit(t, n) {
			var r;
			(r = e.get(t)) == null || r.forEach((e) => e(n));
		},
		on(t, n) {
			e.set(t, [...e.get(t) || [], n]);
		},
		off(t, n) {
			e.set(t, e.get(t)?.filter((e) => e !== n) || []);
		}
	};
}
var bt = K.createContext(null), xt = K.createContext(null), St = () => K.useContext(bt)?.id || null, Ct = () => K.useContext(xt), wt = `data-floating-ui-focusable`;
function Tt(e) {
	let { open: t = !1, onOpenChange: n, elements: r } = e, i = vt(), a = K.useRef({}), [o] = K.useState(() => yt()), s = St() != null, [c, l] = K.useState(r.reference), u = ot((e, t, r) => {
		a.current.openEvent = e ? t : void 0, o.emit(`openchange`, {
			open: e,
			event: t,
			reason: r,
			nested: s
		}), n?.(e, t, r);
	}), d = K.useMemo(() => ({ setPositionReference: l }), []), f = K.useMemo(() => ({
		reference: c || r.reference || null,
		floating: r.floating || null,
		domReference: r.reference
	}), [
		c,
		r.reference,
		r.floating
	]);
	return K.useMemo(() => ({
		dataRef: a,
		open: t,
		onOpenChange: u,
		elements: f,
		events: o,
		floatingId: i,
		refs: d
	}), [
		t,
		u,
		f,
		o,
		i,
		d
	]);
}
function Et(e) {
	e === void 0 && (e = {});
	let { nodeId: t } = e, n = Tt({
		...e,
		elements: {
			reference: null,
			floating: null,
			...e.elements
		}
	}), r = e.rootContext || n, i = r.elements, [a, o] = K.useState(null), [s, c] = K.useState(null), l = i?.domReference || a, u = K.useRef(null), d = Ct();
	dt(() => {
		l && (u.current = l);
	}, [l]);
	let f = I({
		...e,
		elements: {
			...i,
			...s && { reference: s }
		}
	}), p = K.useCallback((e) => {
		let t = U(e) ? {
			getBoundingClientRect: () => e.getBoundingClientRect(),
			contextElement: e
		} : e;
		c(t), f.refs.setReference(t);
	}, [f.refs]), m = K.useCallback((e) => {
		(U(e) || e === null) && (u.current = e, o(e)), (U(f.refs.reference.current) || f.refs.reference.current === null || e !== null && !U(e)) && f.refs.setReference(e);
	}, [f.refs]), h = K.useMemo(() => ({
		...f.refs,
		setReference: m,
		setPositionReference: p,
		domReference: u
	}), [
		f.refs,
		m,
		p
	]), g = K.useMemo(() => ({
		...f.elements,
		domReference: l
	}), [f.elements, l]), _ = K.useMemo(() => ({
		...f,
		...r,
		refs: h,
		elements: g,
		nodeId: t
	}), [
		f,
		h,
		g,
		t,
		r
	]);
	return dt(() => {
		r.dataRef.current.floatingContext = _;
		let e = d?.nodesRef.current.find((e) => e.id === t);
		e && (e.context = _);
	}), K.useMemo(() => ({
		...f,
		context: _,
		refs: h,
		elements: g
	}), [
		f,
		h,
		g,
		_
	]);
}
var Dt = `active`, Ot = `selected`;
function kt(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i = n === `item`, a = e;
	if (i && e) {
		let { [Dt]: t, [Ot]: n, ...r } = e;
		a = r;
	}
	return {
		...n === `floating` && {
			tabIndex: -1,
			[wt]: ``
		},
		...a,
		...t.map((t) => {
			let r = t ? t[n] : null;
			return typeof r == `function` ? e ? r(e) : null : r;
		}).concat(e).reduce((e, t) => (t && Object.entries(t).forEach((t) => {
			let [n, a] = t;
			if (!(i && [Dt, Ot].includes(n))) if (n.indexOf(`on`) === 0) {
				if (r.has(n) || r.set(n, []), typeof a == `function`) {
					var o;
					(o = r.get(n)) == null || o.push(a), e[n] = function() {
						var e = [...arguments];
						return r.get(n)?.map((t) => t(...e)).find((e) => e !== void 0);
					};
				}
			} else e[n] = a;
		}), e), {})
	};
}
function At(e) {
	e === void 0 && (e = []);
	let t = e.map((e) => e?.reference), n = e.map((e) => e?.floating), r = e.map((e) => e?.item), i = K.useCallback((t) => kt(t, e, `reference`), t), a = K.useCallback((t) => kt(t, e, `floating`), n), o = K.useCallback((t) => kt(t, e, `item`), r);
	return K.useMemo(() => ({
		getReferenceProps: i,
		getFloatingProps: a,
		getItemProps: o
	}), [
		i,
		a,
		o
	]);
}
function jt(e, t) {
	return {
		...e,
		rects: {
			...e.rects,
			floating: {
				...e.rects.floating,
				height: t
			}
		}
	};
}
var Mt = (e) => ({
	name: `inner`,
	options: e,
	async fn(t) {
		let { listRef: n, overflowRef: r, onFallbackChange: i, offset: a = 0, index: o = 0, minItemsVisible: s = 4, referenceOverflowThreshold: c = 0, scrollRef: l, ...u } = ae(e, t), { rects: d, elements: { floating: f } } = t, p = n.current[o], m = l?.current || f, h = f.clientTop || m.clientTop, g = f.clientTop !== 0, _ = m.clientTop !== 0, v = f === m;
		if (!p) return {};
		let y = {
			...t,
			...await L(-p.offsetTop - f.clientTop - d.reference.height / 2 - p.offsetHeight / 2 - a).fn(t)
		}, b = await W(jt(y, m.scrollHeight + h + f.clientTop), u), x = await W(y, {
			...u,
			elementContext: `reference`
		}), S = se(0, b.top), C = y.y + S, w = (m.scrollHeight > m.clientHeight ? (e) => e : H)(se(0, m.scrollHeight + (g && v || _ ? h * 2 : 0) - S - se(0, b.bottom)));
		if (m.style.maxHeight = w + `px`, m.scrollTop = S, i) {
			let e = m.offsetHeight < p.offsetHeight * z(s, n.current.length) - 1 || x.top >= -c || x.bottom >= -c;
			q.flushSync(() => i(e));
		}
		return r && (r.current = await W(jt({
			...y,
			y: C
		}, m.offsetHeight + h + f.clientTop), u)), { y: C };
	}
});
function Nt(e, t) {
	let { open: n, elements: r } = e, { enabled: i = !0, overflowRef: a, scrollRef: o, onChange: s } = t, c = ot(s), l = K.useRef(!1), u = K.useRef(null), d = K.useRef(null);
	K.useEffect(() => {
		if (!i) return;
		function e(e) {
			if (e.ctrlKey || !t || a.current == null) return;
			let n = e.deltaY, r = a.current.top >= -.5, i = a.current.bottom >= -.5, o = t.scrollHeight - t.clientHeight, s = n < 0 ? -1 : 1, l = n < 0 ? `max` : `min`;
			t.scrollHeight <= t.clientHeight || (!r && n > 0 || !i && n < 0 ? (e.preventDefault(), q.flushSync(() => {
				c((e) => e + Math[l](n, o * s));
			})) : /firefox/i.test(rt()) && (t.scrollTop += n));
		}
		let t = o?.current || r.floating;
		if (n && t) return t.addEventListener(`wheel`, e), requestAnimationFrame(() => {
			u.current = t.scrollTop, a.current != null && (d.current = { ...a.current });
		}), () => {
			u.current = null, d.current = null, t.removeEventListener(`wheel`, e);
		};
	}, [
		i,
		n,
		r.floating,
		a,
		o,
		c
	]);
	let f = K.useMemo(() => ({
		onKeyDown() {
			l.current = !0;
		},
		onWheel() {
			l.current = !1;
		},
		onPointerMove() {
			l.current = !1;
		},
		onScroll() {
			let e = o?.current || r.floating;
			if (!(!a.current || !e || !l.current)) {
				if (u.current !== null) {
					let t = e.scrollTop - u.current;
					(a.current.bottom < -.5 && t < -1 || a.current.top < -.5 && t > 1) && q.flushSync(() => c((e) => e + t));
				}
				requestAnimationFrame(() => {
					u.current = e.scrollTop;
				});
			}
		}
	}), [
		r.floating,
		c,
		a,
		o
	]);
	return K.useMemo(() => i ? { floating: f } : {}, [i, f]);
}
var Pt = (0, K.createContext)({
	styles: void 0,
	setReference: () => {},
	setFloating: () => {},
	getReferenceProps: () => ({}),
	getFloatingProps: () => ({}),
	slot: {}
});
Pt.displayName = `FloatingContext`;
var Ft = (0, K.createContext)(null);
Ft.displayName = `PlacementContext`;
function It(e) {
	return (0, K.useMemo)(() => e ? typeof e == `string` ? { to: e } : e : null, [e]);
}
function Lt() {
	return (0, K.useContext)(Pt).setReference;
}
function Rt() {
	let { getFloatingProps: e, slot: t } = (0, K.useContext)(Pt);
	return (0, K.useCallback)((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function zt(e = null) {
	e === !1 && (e = null), typeof e == `string` && (e = { to: e });
	let t = (0, K.useContext)(Ft), n = (0, K.useMemo)(() => e, [JSON.stringify(e, (e, t) => t?.outerHTML ?? t)]);
	g(() => {
		t?.(n ?? null);
	}, [t, n]);
	let r = (0, K.useContext)(Pt);
	return (0, K.useMemo)(() => [r.setFloating, e ? r.styles : {}], [
		r.setFloating,
		e,
		r.styles
	]);
}
var Bt = 4;
function Vt({ children: e, enabled: t = !0 }) {
	let [n, r] = (0, K.useState)(null), [i, a] = (0, K.useState)(0), o = (0, K.useRef)(null), [s, c] = (0, K.useState)(null);
	Ht(s);
	let l = t && n !== null && s !== null, { to: u = `bottom`, gap: d = 0, offset: f = 0, padding: p = 0, inner: m } = Ut(n, s), [h, v = `center`] = u.split(` `);
	g(() => {
		l && a(0);
	}, [l]);
	let { refs: y, floatingStyles: b, context: x } = Et({
		open: l,
		placement: h === `selection` ? v === `center` ? `bottom` : `bottom-${v}` : v === `center` ? `${h}` : `${h}-${v}`,
		strategy: `absolute`,
		transform: !1,
		middleware: [
			L({
				mainAxis: h === `selection` ? 0 : d,
				crossAxis: f
			}),
			oe({ padding: p }),
			h !== `selection` && R({ padding: p }),
			h === `selection` && m ? Mt({
				...m,
				padding: p,
				overflowRef: o,
				offset: i,
				minItemsVisible: Bt,
				referenceOverflowThreshold: p,
				onFallbackChange(e) {
					if (!e) return;
					let t = x.elements.floating;
					if (!t) return;
					let n = parseFloat(getComputedStyle(t).scrollPaddingBottom) || 0, r = Math.min(Bt, t.childElementCount), i = 0, o = 0;
					for (let e of x.elements.floating?.childNodes ?? []) if (D(e)) {
						let a = e.offsetTop, s = a + e.clientHeight + n, c = t.scrollTop, l = c + t.clientHeight;
						if (a >= c && s <= l) r--;
						else {
							o = Math.max(0, Math.min(s, l) - Math.max(a, c)), i = e.clientHeight;
							break;
						}
					}
					r >= 1 && a((e) => {
						let t = i * r - o + n;
						return e >= t ? e : t;
					});
				}
			}) : null,
			be({
				padding: p,
				apply({ availableWidth: e, availableHeight: t, elements: n }) {
					Object.assign(n.floating.style, {
						overflow: `auto`,
						maxWidth: `${e}px`,
						maxHeight: `min(var(--anchor-max-height, 100vh), ${t}px)`
					});
				}
			})
		].filter(Boolean),
		whileElementsMounted: ye
	}), [S = h, C = v] = x.placement.split(`-`);
	h === `selection` && (S = `selection`);
	let w = (0, K.useMemo)(() => ({ anchor: [S, C].filter(Boolean).join(` `) }), [S, C]), { getReferenceProps: T, getFloatingProps: E } = At([Nt(x, {
		overflowRef: o,
		onChange: a
	})]), ee = _((e) => {
		c(e), y.setFloating(e);
	});
	return K.createElement(Ft.Provider, { value: r }, K.createElement(Pt.Provider, { value: {
		setFloating: ee,
		setReference: y.setReference,
		styles: b,
		getReferenceProps: T,
		getFloatingProps: E,
		slot: w
	} }, e));
}
function Ht(e) {
	g(() => {
		if (!e) return;
		let t = new MutationObserver(() => {
			let t = window.getComputedStyle(e).maxHeight, n = parseFloat(t);
			if (isNaN(n)) return;
			let r = parseInt(t);
			isNaN(r) || n !== r && (e.style.maxHeight = `${Math.ceil(n)}px`);
		});
		return t.observe(e, {
			attributes: !0,
			attributeFilter: [`style`]
		}), () => {
			t.disconnect();
		};
	}, [e]);
}
function Ut(e, t) {
	let n = Wt(e?.gap ?? `var(--anchor-gap, 0)`, t), r = Wt(e?.offset ?? `var(--anchor-offset, 0)`, t), i = Wt(e?.padding ?? `var(--anchor-padding, 0)`, t);
	return {
		...e,
		gap: n,
		offset: r,
		padding: i
	};
}
function Wt(e, t, n = void 0) {
	let r = v(), i = _((e, t) => {
		if (e == null) return [n, null];
		if (typeof e == `number`) return [e, null];
		if (typeof e == `string`) {
			if (!t) return [n, null];
			let i = Kt(e, t);
			return [i, (n) => {
				let a = Gt(e);
				{
					let o = a.map((e) => window.getComputedStyle(t).getPropertyValue(e));
					r.requestAnimationFrame(function s() {
						r.nextFrame(s);
						let c = !1;
						for (let [e, n] of a.entries()) {
							let r = window.getComputedStyle(t).getPropertyValue(n);
							if (o[e] !== r) {
								o[e] = r, c = !0;
								break;
							}
						}
						if (!c) return;
						let l = Kt(e, t);
						i !== l && (n(l), i = l);
					});
				}
				return r.dispose;
			}];
		}
		return [n, null];
	}), a = (0, K.useMemo)(() => i(e, t)[0], [e, t]), [o = a, s] = (0, K.useState)();
	return g(() => {
		let [n, r] = i(e, t);
		if (s(n), r) return r(s);
	}, [e, t]), o;
}
function Gt(e) {
	let t = /var\((.*)\)/.exec(e);
	if (t) {
		let e = t[1].indexOf(`,`);
		if (e === -1) return [t[1]];
		let n = t[1].slice(0, e).trim(), r = t[1].slice(e + 1).trim();
		return r ? [n, ...Gt(r)] : [n];
	}
	return [];
}
function Kt(e, t) {
	let n = document.createElement(`div`);
	t.appendChild(n), n.style.setProperty(`margin-top`, `0px`, `important`), n.style.setProperty(`margin-top`, e, `important`);
	let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
	return t.removeChild(n), r;
}
function qt({ children: e, freeze: t }, n) {
	let r = Yt(t, e);
	return (0, K.isValidElement)(r) ? (0, K.cloneElement)(r, { ref: n }) : K.createElement(K.Fragment, null, r);
}
var Jt = K.forwardRef(qt);
function Yt(e, t) {
	let [n, r] = (0, K.useState)(t);
	return !e && n !== t && r(t), e ? n : t;
}
function Xt(e) {
	throw Error(`Unexpected object: ` + e);
}
var Y = ((e) => (e[e.First = 0] = `First`, e[e.Previous = 1] = `Previous`, e[e.Next = 2] = `Next`, e[e.Last = 3] = `Last`, e[e.Specific = 4] = `Specific`, e[e.Nothing = 5] = `Nothing`, e))(Y || {});
function Zt(e, t) {
	let n = t.resolveItems();
	if (n.length <= 0) return null;
	let r = t.resolveActiveIndex(), i = r ?? -1;
	switch (e.focus) {
		case 0:
			for (let e = 0; e < n.length; ++e) if (!t.resolveDisabled(n[e], e, n)) return e;
			return r;
		case 1:
			i === -1 && (i = n.length);
			for (let e = i - 1; e >= 0; --e) if (!t.resolveDisabled(n[e], e, n)) return e;
			return r;
		case 2:
			for (let e = i + 1; e < n.length; ++e) if (!t.resolveDisabled(n[e], e, n)) return e;
			return r;
		case 3:
			for (let e = n.length - 1; e >= 0; --e) if (!t.resolveDisabled(n[e], e, n)) return e;
			return r;
		case 4:
			for (let r = 0; r < n.length; ++r) if (t.resolveId(n[r], r, n) === e.id) return r;
			return r;
		case 5: return null;
		default: Xt(e);
	}
}
var Qt = {
	Idle: { kind: `Idle` },
	Tracked: (e) => ({
		kind: `Tracked`,
		position: e
	}),
	Moved: { kind: `Moved` }
};
function $t(e) {
	let t = e.getBoundingClientRect();
	return `${t.x},${t.y}`;
}
function en(e, t, n) {
	let r = s();
	if (t.kind === `Tracked`) {
		let i = function() {
			a !== $t(e) && (r.dispose(), n());
		}, { position: a } = t, o = new ResizeObserver(i);
		o.observe(e), r.add(() => o.disconnect()), r.addEventListener(window, `scroll`, i, { passive: !0 }), r.addEventListener(window, `resize`, i);
	}
	return () => r.dispose();
}
var tn = Object.defineProperty, nn = (e, t, n) => t in e ? tn(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, rn = (e, t, n) => (nn(e, typeof t == `symbol` ? t : t + ``, n), n), X = ((e) => (e[e.Open = 0] = `Open`, e[e.Closed = 1] = `Closed`, e))(X || {}), Z = ((e) => (e[e.Single = 0] = `Single`, e[e.Multi = 1] = `Multi`, e))(Z || {}), Q = ((e) => (e[e.Pointer = 0] = `Pointer`, e[e.Focus = 1] = `Focus`, e[e.Other = 2] = `Other`, e))(Q || {}), an = ((e) => (e[e.OpenCombobox = 0] = `OpenCombobox`, e[e.CloseCombobox = 1] = `CloseCombobox`, e[e.GoToOption = 2] = `GoToOption`, e[e.SetTyping = 3] = `SetTyping`, e[e.RegisterOption = 4] = `RegisterOption`, e[e.UnregisterOption = 5] = `UnregisterOption`, e[e.DefaultToFirstOption = 6] = `DefaultToFirstOption`, e[e.SetActivationTrigger = 7] = `SetActivationTrigger`, e[e.UpdateVirtualConfiguration = 8] = `UpdateVirtualConfiguration`, e[e.SetInputElement = 9] = `SetInputElement`, e[e.SetButtonElement = 10] = `SetButtonElement`, e[e.SetOptionsElement = 11] = `SetOptionsElement`, e[e.MarkInputAsMoved = 12] = `MarkInputAsMoved`, e))(an || {});
function on(e, t = (e) => e) {
	let n = e.activeOptionIndex === null ? null : e.options[e.activeOptionIndex], r = t(e.options.slice()), i = r.length > 0 && r[0].dataRef.current.order !== null ? r.sort((e, t) => e.dataRef.current.order - t.dataRef.current.order) : xe(r, (e) => e.dataRef.current.domRef.current), a = n ? i.indexOf(n) : null;
	return a === -1 && (a = null), {
		options: i,
		activeOptionIndex: a
	};
}
var sn = {
	1(e) {
		var t;
		if ((t = e.dataRef.current) != null && t.disabled || e.comboboxState === 1) return e;
		let n = e.inputElement ? Qt.Tracked($t(e.inputElement)) : e.inputPositionState;
		return {
			...e,
			activeOptionIndex: null,
			comboboxState: 1,
			isTyping: !1,
			activationTrigger: 2,
			inputPositionState: n,
			__demoMode: !1
		};
	},
	0(e) {
		var t, n;
		if ((t = e.dataRef.current) != null && t.disabled || e.comboboxState === 0) return e;
		if ((n = e.dataRef.current) != null && n.value) {
			let t = e.dataRef.current.calculateIndex(e.dataRef.current.value);
			if (t !== -1) return {
				...e,
				activeOptionIndex: t,
				comboboxState: 0,
				__demoMode: !1,
				inputPositionState: Qt.Idle
			};
		}
		return {
			...e,
			comboboxState: 0,
			inputPositionState: Qt.Idle,
			__demoMode: !1
		};
	},
	3(e, t) {
		return e.isTyping === t.isTyping ? e : {
			...e,
			isTyping: t.isTyping
		};
	},
	2(e, t) {
		var n, r;
		if ((n = e.dataRef.current) != null && n.disabled || e.optionsElement && !((r = e.dataRef.current) != null && r.optionsPropsRef.current.static) && e.comboboxState === 1) return e;
		if (e.virtual) {
			let { options: n, disabled: r } = e.virtual, i = t.focus === Y.Specific ? t.idx : Zt(t, {
				resolveItems: () => n,
				resolveActiveIndex: () => e.activeOptionIndex ?? n.findIndex((e) => !r(e)) ?? null,
				resolveDisabled: r,
				resolveId() {
					throw Error(`Function not implemented.`);
				}
			}), a = t.trigger ?? 2;
			return e.activeOptionIndex === i && e.activationTrigger === a ? e : {
				...e,
				activeOptionIndex: i,
				activationTrigger: a,
				isTyping: !1,
				__demoMode: !1
			};
		}
		let i = on(e);
		if (i.activeOptionIndex === null) {
			let e = i.options.findIndex((e) => !e.dataRef.current.disabled);
			e !== -1 && (i.activeOptionIndex = e);
		}
		let a = t.focus === Y.Specific ? t.idx : Zt(t, {
			resolveItems: () => i.options,
			resolveActiveIndex: () => i.activeOptionIndex,
			resolveId: (e) => e.id,
			resolveDisabled: (e) => e.dataRef.current.disabled
		}), o = t.trigger ?? 2;
		return e.activeOptionIndex === a && e.activationTrigger === o ? e : {
			...e,
			...i,
			isTyping: !1,
			activeOptionIndex: a,
			activationTrigger: o,
			__demoMode: !1
		};
	},
	4: (e, t) => {
		var n, r, i, a;
		if ((n = e.dataRef.current) != null && n.virtual) return {
			...e,
			options: [...e.options, t.payload]
		};
		let o = t.payload, s = on(e, (e) => (e.push(o), e));
		e.activeOptionIndex === null && (i = (r = e.dataRef.current).isSelected) != null && i.call(r, t.payload.dataRef.current.value) && (s.activeOptionIndex = s.options.indexOf(o));
		let c = {
			...e,
			...s,
			activationTrigger: 2
		};
		return (a = e.dataRef.current) != null && a.__demoMode && e.dataRef.current.value === void 0 && (c.activeOptionIndex = 0), c;
	},
	5: (e, t) => {
		var n;
		if ((n = e.dataRef.current) != null && n.virtual) return {
			...e,
			options: e.options.filter((e) => e.id !== t.id)
		};
		let r = on(e, (e) => {
			let n = e.findIndex((e) => e.id === t.id);
			return n !== -1 && e.splice(n, 1), e;
		});
		return {
			...e,
			...r,
			activationTrigger: 2
		};
	},
	6: (e, t) => e.defaultToFirstOption === t.value ? e : {
		...e,
		defaultToFirstOption: t.value
	},
	7: (e, t) => e.activationTrigger === t.trigger ? e : {
		...e,
		activationTrigger: t.trigger
	},
	8: (e, t) => {
		if (e.virtual === null) return {
			...e,
			virtual: {
				options: t.options,
				disabled: t.disabled ?? (() => !1)
			}
		};
		if (e.virtual.options === t.options && e.virtual.disabled === t.disabled) return e;
		let n = e.activeOptionIndex;
		if (e.activeOptionIndex !== null) {
			let r = t.options.indexOf(e.virtual.options[e.activeOptionIndex]);
			n = r === -1 ? null : r;
		}
		return {
			...e,
			activeOptionIndex: n,
			virtual: {
				options: t.options,
				disabled: t.disabled ?? (() => !1)
			}
		};
	},
	9: (e, t) => e.inputElement === t.element ? e : {
		...e,
		inputElement: t.element
	},
	10: (e, t) => e.buttonElement === t.element ? e : {
		...e,
		buttonElement: t.element
	},
	11: (e, t) => e.optionsElement === t.element ? e : {
		...e,
		optionsElement: t.element
	},
	12(e) {
		return e.inputPositionState.kind === `Tracked` ? {
			...e,
			inputPositionState: Qt.Moved
		} : e;
	}
}, cn = class e extends F {
	constructor(e) {
		super(e), rn(this, `actions`, {
			onChange: (e) => {
				let { onChange: t, compare: n, mode: r, value: i } = this.state.dataRef.current;
				return l(r, {
					0: () => t?.(e),
					1: () => {
						let r = i.slice(), a = r.findIndex((t) => n(t, e));
						return a === -1 ? r.push(e) : r.splice(a, 1), t?.(r);
					}
				});
			},
			registerOption: (e, t) => (this.send({
				type: 4,
				payload: {
					id: e,
					dataRef: t
				}
			}), () => {
				this.state.activeOptionIndex === this.state.dataRef.current.calculateIndex(t.current.value) && this.send({
					type: 6,
					value: !0
				}), this.send({
					type: 5,
					id: e
				});
			}),
			goToOption: (e, t) => (this.send({
				type: 6,
				value: !1
			}), this.send({
				type: 2,
				...e,
				trigger: t
			})),
			setIsTyping: (e) => {
				this.send({
					type: 3,
					isTyping: e
				});
			},
			closeCombobox: () => {
				var e, t;
				this.send({ type: 1 }), this.send({
					type: 6,
					value: !1
				}), (t = (e = this.state.dataRef.current).onClose) == null || t.call(e);
			},
			openCombobox: () => {
				this.send({ type: 0 }), this.send({
					type: 6,
					value: !0
				});
			},
			setActivationTrigger: (e) => {
				this.send({
					type: 7,
					trigger: e
				});
			},
			selectActiveOption: () => {
				let e = this.selectors.activeOptionIndex(this.state);
				if (e !== null) {
					if (this.actions.setIsTyping(!1), this.state.virtual) this.actions.onChange(this.state.virtual.options[e]);
					else {
						let { dataRef: t } = this.state.options[e];
						this.actions.onChange(t.current.value);
					}
					this.actions.goToOption({
						focus: Y.Specific,
						idx: e
					});
				}
			},
			setInputElement: (e) => {
				this.send({
					type: 9,
					element: e
				});
			},
			setButtonElement: (e) => {
				this.send({
					type: 10,
					element: e
				});
			},
			setOptionsElement: (e) => {
				this.send({
					type: 11,
					element: e
				});
			}
		}), rn(this, `selectors`, {
			activeDescendantId: (e) => {
				let t = this.selectors.activeOptionIndex(e);
				if (t !== null) return e.virtual ? e.options.find((n) => !n.dataRef.current.disabled && e.dataRef.current.compare(n.dataRef.current.value, e.virtual.options[t]))?.id : e.options[t]?.id;
			},
			activeOptionIndex: (e) => {
				if (e.defaultToFirstOption && e.activeOptionIndex === null && (e.virtual ? e.virtual.options.length > 0 : e.options.length > 0)) {
					if (e.virtual) {
						let { options: t, disabled: n } = e.virtual, r = t.findIndex((e) => {
							var t;
							return !((t = n?.(e)) != null && t);
						});
						if (r !== -1) return r;
					}
					let t = e.options.findIndex((e) => !e.dataRef.current.disabled);
					if (t !== -1) return t;
				}
				return e.activeOptionIndex;
			},
			activeOption: (e) => {
				let t = this.selectors.activeOptionIndex(e);
				return t === null ? null : e.virtual ? e.virtual.options[t ?? 0] : e.options[t]?.dataRef.current.value ?? null;
			},
			isActive: (e, t, n) => {
				let r = this.selectors.activeOptionIndex(e);
				return r === null ? !1 : e.virtual ? r === e.dataRef.current.calculateIndex(t) : e.options[r]?.id === n;
			},
			shouldScrollIntoView: (e, t, n) => !(e.virtual || e.__demoMode || e.comboboxState !== 0 || e.activationTrigger === 0 || !this.selectors.isActive(e, t, n)),
			didInputMove(e) {
				return e.inputPositionState.kind === `Moved`;
			}
		});
		{
			let e = this.state.id, t = ce.get(null);
			this.disposables.add(t.on(ge.Push, (n) => {
				!t.selectors.isTop(n, e) && this.state.comboboxState === 0 && this.actions.closeCombobox();
			})), this.on(0, () => t.actions.push(e)), this.on(1, () => t.actions.pop(e));
		}
		this.disposables.group((e) => {
			this.on(1, (t) => {
				t.inputElement && (e.dispose(), e.add(en(t.inputElement, t.inputPositionState, () => {
					this.send({ type: 12 });
				})));
			});
		});
	}
	static new({ id: t, virtual: n = null, __demoMode: r = !1 }) {
		return new e({
			id: t,
			dataRef: { current: {} },
			comboboxState: +!r,
			isTyping: !1,
			options: [],
			virtual: n ? {
				options: n.options,
				disabled: n.disabled ?? (() => !1)
			} : null,
			activeOptionIndex: null,
			activationTrigger: 2,
			inputElement: null,
			buttonElement: null,
			optionsElement: null,
			__demoMode: r,
			inputPositionState: Qt.Idle
		});
	}
	reduce(e, t) {
		return l(t.type, sn, e, t);
	}
}, ln = (0, K.createContext)(null);
function un(e) {
	let t = (0, K.useContext)(ln);
	if (t === null) {
		let t = Error(`<${e} /> is missing a parent <Combobox /> component.`);
		throw Error.captureStackTrace && Error.captureStackTrace(t, dn), t;
	}
	return t;
}
function dn({ id: e, virtual: t = null, __demoMode: n = !1 }) {
	let r = (0, K.useMemo)(() => cn.new({
		id: e,
		virtual: t,
		__demoMode: n
	}), []);
	return we(() => r.dispose()), r;
}
var fn = (0, K.createContext)(null);
fn.displayName = `ComboboxDataContext`;
function $(e) {
	let t = (0, K.useContext)(fn);
	if (t === null) {
		let t = Error(`<${e} /> is missing a parent <Combobox /> component.`);
		throw Error.captureStackTrace && Error.captureStackTrace(t, $), t;
	}
	return t;
}
var pn = (0, K.createContext)(null);
function mn(e) {
	let t = un(`VirtualProvider`), { options: n } = $(`VirtualProvider`).virtual, r = G(t, (e) => e.optionsElement), [i, a] = (0, K.useMemo)(() => {
		let e = r;
		if (!e) return [0, 0];
		let t = window.getComputedStyle(e);
		return [parseFloat(t.paddingBlockStart || t.paddingTop), parseFloat(t.paddingBlockEnd || t.paddingBottom)];
	}, [r]), o = Ue({
		enabled: n.length !== 0,
		scrollPaddingStart: i,
		scrollPaddingEnd: a,
		count: n.length,
		estimateSize() {
			return 40;
		},
		getScrollElement() {
			return t.state.optionsElement;
		},
		overscan: 12
	}), [s, c] = (0, K.useState)(0);
	g(() => {
		c((e) => e + 1);
	}, [n]);
	let l = o.getVirtualItems(), u = G(t, (e) => e.activationTrigger === Q.Pointer), d = G(t, t.selectors.activeOptionIndex);
	return l.length === 0 ? null : K.createElement(pn.Provider, { value: o }, K.createElement(`div`, {
		style: {
			position: `relative`,
			width: `100%`,
			height: `${o.getTotalSize()}px`
		},
		ref: (e) => {
			e && (u || d !== null && n.length > d && o.scrollToIndex(d));
		}
	}, l.map((t) => K.createElement(K.Fragment, { key: t.key }, K.cloneElement(e.children?.call(e, {
		...e.slot,
		option: n[t.index]
	}), {
		key: `${s}-${t.key}`,
		"data-index": t.index,
		"aria-setsize": n.length,
		"aria-posinset": t.index + 1,
		style: {
			position: `absolute`,
			top: 0,
			left: 0,
			transform: `translateY(${t.start}px)`,
			overflowAnchor: `none`
		}
	})))));
}
var hn = K.Fragment;
function gn(e, t) {
	let n = (0, o.useId)(), r = m(), { value: s, defaultValue: c, onChange: u, form: d, name: p, by: v, invalid: y = !1, disabled: b = r || !1, onClose: x, __demoMode: S = !1, multiple: C = !1, immediate: w = !1, virtual: E = null, nullable: ee, ...D } = e, k = a(c), [A = C ? [] : void 0, j] = f(s, u, k), M = dn({
		id: n,
		virtual: E,
		__demoMode: S
	}), N = (0, K.useRef)({
		static: !1,
		hold: !1
	}), P = ve(v), F = _((e) => E ? v === null ? E.options.indexOf(e) : E.options.findIndex((t) => P(t, e)) : M.state.options.findIndex((t) => P(t.dataRef.current.value, e))), I = (0, K.useCallback)((e) => l(R.mode, {
		[Z.Multi]: () => A.some((t) => P(t, e)),
		[Z.Single]: () => P(A, e)
	}), [A]), te = G(M, (e) => e.virtual), L = _(() => x?.()), R = (0, K.useMemo)(() => ({
		__demoMode: S,
		immediate: w,
		optionsPropsRef: N,
		value: A,
		defaultValue: k,
		disabled: b,
		invalid: y,
		mode: C ? Z.Multi : Z.Single,
		virtual: E ? te : null,
		onChange: j,
		isSelected: I,
		calculateIndex: F,
		compare: P,
		onClose: L
	}), [
		S,
		w,
		N,
		A,
		k,
		b,
		y,
		C,
		E,
		te,
		j,
		I,
		F,
		P,
		L
	]);
	g(() => {
		E && M.send({
			type: an.UpdateVirtualConfiguration,
			options: E.options,
			disabled: E.disabled ?? null
		});
	}, [
		E,
		E?.options,
		E?.disabled
	]), g(() => {
		M.state.dataRef.current = R;
	}, [R]);
	let [z, B, V, H] = G(M, (e) => [
		e.comboboxState,
		e.buttonElement,
		e.inputElement,
		e.optionsElement
	]), re = ce.get(null);
	me(G(re, (0, K.useCallback)((e) => re.selectors.isTop(e, n), [re, n])), [
		B,
		V,
		H
	], () => M.actions.closeCombobox());
	let ie = G(M, M.selectors.activeOptionIndex), U = G(M, M.selectors.activeOption), W = i({
		open: z === X.Open,
		disabled: b,
		invalid: y,
		activeIndex: ie,
		activeOption: U,
		value: A
	}), [ae, oe] = O(), se = t === null ? {} : { ref: t }, le = (0, K.useCallback)(() => {
		if (k !== void 0) return j?.(k);
	}, [j, k]), ue = T();
	return K.createElement(oe, {
		value: ae,
		props: { htmlFor: V?.id },
		slot: {
			open: z === X.Open,
			disabled: b
		}
	}, K.createElement(Vt, null, K.createElement(fn.Provider, { value: R }, K.createElement(ln.Provider, { value: M }, K.createElement(ne, { value: l(z, {
		[X.Open]: Ce.Open,
		[X.Closed]: Ce.Closed
	}) }, p != null && K.createElement(h, {
		disabled: b,
		data: A == null ? {} : { [p]: A },
		form: d,
		onReset: le
	}), ue({
		ourProps: se,
		theirProps: D,
		slot: W,
		defaultTag: hn,
		name: `Combobox`
	}))))));
}
var _n = `input`;
function vn(e, t) {
	let n = un(`Combobox.Input`), a = $(`Combobox.Input`), s = (0, o.useId)(), c = b(), { id: d = c || `headlessui-combobox-input-${s}`, onChange: f, displayValue: m, disabled: h = a.disabled || !1, autoFocus: g = !1, type: y = `text`, ...x } = e, S = (0, K.useRef)(null), C = ee(S, t, Lt(), n.actions.setInputElement), [E, D] = G(n, (e) => [e.comboboxState, e.isTyping]), O = v(), A = _(() => {
		n.actions.onChange(null), n.state.optionsElement && (n.state.optionsElement.scrollTop = 0), n.actions.goToOption({ focus: Y.Nothing });
	});
	le(([e, t], [r, i]) => {
		if (n.state.isTyping) return;
		let a = S.current;
		a && ((i === X.Open && t === X.Closed || e !== r) && (a.value = e), requestAnimationFrame(() => {
			if (n.state.isTyping || !a || k(a)) return;
			let { selectionStart: e, selectionEnd: t } = a;
			Math.abs((t ?? 0) - (e ?? 0)) === 0 && e === 0 && a.setSelectionRange(a.value.length, a.value.length);
		}));
	}, [
		(0, K.useMemo)(() => typeof m == `function` && a.value !== void 0 ? m(a.value) ?? `` : typeof a.value == `string` ? a.value : ``, [a.value, m]),
		E,
		D
	]), le(([e], [t]) => {
		if (e === X.Open && t === X.Closed) {
			if (n.state.isTyping) return;
			let e = S.current;
			if (!e) return;
			let t = e.value, { selectionStart: r, selectionEnd: i, selectionDirection: a } = e;
			e.value = ``, e.value = t, a === null ? e.setSelectionRange(r, i) : e.setSelectionRange(r, i, a);
		}
	}, [E]);
	let N = (0, K.useRef)(!1), P = _(() => {
		N.current = !0;
	}), F = _(() => {
		O.nextFrame(() => {
			N.current = !1;
		});
	}), I = _((e) => {
		switch (n.actions.setIsTyping(!0), e.key) {
			case w.Enter:
				if (n.state.comboboxState !== X.Open || N.current) return;
				if (e.preventDefault(), e.stopPropagation(), n.selectors.activeOptionIndex(n.state) === null) {
					n.actions.closeCombobox();
					return;
				}
				n.actions.selectActiveOption(), a.mode === Z.Single && n.actions.closeCombobox();
				break;
			case w.ArrowDown: return e.preventDefault(), e.stopPropagation(), l(n.state.comboboxState, {
				[X.Open]: () => n.actions.goToOption({ focus: Y.Next }),
				[X.Closed]: () => n.actions.openCombobox()
			});
			case w.ArrowUp: return e.preventDefault(), e.stopPropagation(), l(n.state.comboboxState, {
				[X.Open]: () => n.actions.goToOption({ focus: Y.Previous }),
				[X.Closed]: () => {
					(0, q.flushSync)(() => n.actions.openCombobox()), a.value || n.actions.goToOption({ focus: Y.Last });
				}
			});
			case w.Home:
				if (n.state.comboboxState === X.Closed || e.shiftKey) break;
				return e.preventDefault(), e.stopPropagation(), n.actions.goToOption({ focus: Y.First });
			case w.PageUp: return e.preventDefault(), e.stopPropagation(), n.actions.goToOption({ focus: Y.First });
			case w.End:
				if (n.state.comboboxState === X.Closed || e.shiftKey) break;
				return e.preventDefault(), e.stopPropagation(), n.actions.goToOption({ focus: Y.Last });
			case w.PageDown: return e.preventDefault(), e.stopPropagation(), n.actions.goToOption({ focus: Y.Last });
			case w.Escape: return n.state.comboboxState === X.Open ? (e.preventDefault(), n.state.optionsElement && !a.optionsPropsRef.current.static && e.stopPropagation(), a.mode === Z.Single && a.value === null && A(), n.actions.closeCombobox()) : void 0;
			case w.Tab:
				if (n.actions.setIsTyping(!1), n.state.comboboxState !== X.Open) return;
				a.mode === Z.Single && n.state.activationTrigger !== Q.Focus && n.actions.selectActiveOption(), n.actions.closeCombobox();
				break;
		}
	}), te = _((e) => {
		f?.(e), a.mode === Z.Single && e.target.value === `` && A(), n.actions.openCombobox();
	}), ne = _((e) => {
		var t, r;
		let i = e.relatedTarget ?? ue.find((t) => t !== e.currentTarget);
		if (!((t = n.state.optionsElement) != null && t.contains(i)) && !((r = n.state.buttonElement) != null && r.contains(i)) && n.state.comboboxState === X.Open) return e.preventDefault(), a.mode === Z.Single && a.value === null && A(), n.actions.closeCombobox();
	}), L = _((e) => {
		var t, r;
		let i = e.relatedTarget ?? ue.find((t) => t !== e.currentTarget);
		(t = n.state.buttonElement) != null && t.contains(i) || (r = n.state.optionsElement) != null && r.contains(i) || a.disabled || a.immediate && n.state.comboboxState !== X.Open && O.microTask(() => {
			(0, q.flushSync)(() => n.actions.openCombobox()), n.actions.setActivationTrigger(Q.Focus);
		});
	}), R = M(), z = j(), { isFocused: B, focusProps: V } = p({ autoFocus: g }), { isHovered: H, hoverProps: re } = r({ isDisabled: h }), ie = G(n, (e) => e.optionsElement), U = i({
		open: E === X.Open,
		disabled: h,
		invalid: a.invalid,
		hover: H,
		focus: B,
		autofocus: g
	}), W = u({
		ref: C,
		id: d,
		role: `combobox`,
		type: y,
		"aria-controls": ie?.id,
		"aria-expanded": E === X.Open,
		"aria-activedescendant": G(n, n.selectors.activeDescendantId),
		"aria-labelledby": R,
		"aria-describedby": z,
		"aria-autocomplete": `list`,
		defaultValue: e.defaultValue ?? (a.defaultValue === void 0 ? null : m?.(a.defaultValue)) ?? a.defaultValue,
		disabled: h || void 0,
		autoFocus: g,
		onCompositionStart: P,
		onCompositionEnd: F,
		onKeyDown: I,
		onChange: te,
		onFocus: L,
		onBlur: ne
	}, V, re);
	return T()({
		ourProps: W,
		theirProps: x,
		slot: U,
		defaultTag: _n,
		name: `Combobox.Input`
	});
}
var yn = `button`;
function bn(e, t) {
	let n = un(`Combobox.Button`), a = $(`Combobox.Button`), [s, c] = (0, K.useState)(null), l = ee(t, c, n.actions.setButtonElement), d = (0, o.useId)(), { id: f = `headlessui-combobox-button-${d}`, disabled: m = a.disabled || !1, autoFocus: h = !1, ...g } = e, [v, y, b] = G(n, (e) => [
		e.comboboxState,
		e.inputElement,
		e.optionsElement
	]), x = $e(y);
	Qe(v === X.Open, {
		trigger: s,
		action: (0, K.useCallback)((e) => {
			if (s != null && s.contains(e.target) || y != null && y.contains(e.target)) return Ye.Ignore;
			let t = e.target.closest(`[role="option"]:not([data-disabled])`);
			return D(t) ? Ye.Select(t) : b != null && b.contains(e.target) ? Ye.Ignore : Ye.Close;
		}, [
			s,
			y,
			b
		]),
		close: n.actions.closeCombobox,
		select: n.actions.selectActiveOption
	});
	let S = _((e) => {
		switch (e.key) {
			case w.Space:
			case w.Enter:
				e.preventDefault(), e.stopPropagation(), n.state.comboboxState === X.Closed && (0, q.flushSync)(() => n.actions.openCombobox()), x();
				return;
			case w.ArrowDown:
				e.preventDefault(), e.stopPropagation(), n.state.comboboxState === X.Closed && ((0, q.flushSync)(() => n.actions.openCombobox()), n.state.dataRef.current.value || n.actions.goToOption({ focus: Y.First })), x();
				return;
			case w.ArrowUp:
				e.preventDefault(), e.stopPropagation(), n.state.comboboxState === X.Closed && ((0, q.flushSync)(() => n.actions.openCombobox()), n.state.dataRef.current.value || n.actions.goToOption({ focus: Y.Last })), x();
				return;
			case w.Escape:
				if (n.state.comboboxState !== X.Open) return;
				e.preventDefault(), n.state.optionsElement && !a.optionsPropsRef.current.static && e.stopPropagation(), (0, q.flushSync)(() => n.actions.closeCombobox()), x();
				return;
			default: return;
		}
	}), C = qe(() => {
		n.state.comboboxState === X.Open ? n.actions.closeCombobox() : n.actions.openCombobox(), x();
	}), E = M([f]), { isFocusVisible: O, focusProps: k } = p({ autoFocus: h }), { isHovered: A, hoverProps: j } = r({ isDisabled: m }), { pressed: N, pressProps: F } = Se({ disabled: m }), I = i({
		open: v === X.Open,
		active: N || v === X.Open,
		disabled: m,
		invalid: a.invalid,
		value: a.value,
		hover: A,
		focus: O
	}), te = u({
		ref: l,
		id: f,
		type: P(e, s),
		tabIndex: -1,
		"aria-haspopup": `listbox`,
		"aria-controls": b?.id,
		"aria-expanded": v === X.Open,
		"aria-labelledby": E,
		disabled: m || void 0,
		autoFocus: h,
		onKeyDown: S
	}, C, k, j, F);
	return T()({
		ourProps: te,
		theirProps: g,
		slot: I,
		defaultTag: yn,
		name: `Combobox.Button`
	});
}
var xn = `div`, Sn = E.RenderStrategy | E.Static;
function Cn(e, t) {
	let n = (0, o.useId)(), { id: r = `headlessui-combobox-options-${n}`, hold: a = !1, anchor: s, portal: c = !1, modal: l = !0, transition: d = !1, ...f } = e, p = un(`Combobox.Options`), m = $(`Combobox.Options`), h = It(s);
	h && (c = !0);
	let [v, y] = zt(h), [b, x] = (0, K.useState)(null), S = Rt(), C = ee(t, h ? v : null, p.actions.setOptionsElement, x), [w, E, D, O, k] = G(p, (e) => [
		e.comboboxState,
		e.inputElement,
		e.buttonElement,
		e.optionsElement,
		e.activationTrigger
	]), A = fe(E || D), j = fe(O), N = de(), [P, F] = Te(d, b, N === null ? w === X.Open : (N & Ce.Open) === Ce.Open);
	re(P, E, p.actions.closeCombobox), pe(m.__demoMode ? !1 : l && w === X.Open, j), he(m.__demoMode ? !1 : l && w === X.Open, { allowed: (0, K.useCallback)(() => [
		E,
		D,
		O
	], [
		E,
		D,
		O
	]) });
	let I = G(p, p.selectors.didInputMove) ? !1 : P;
	g(() => {
		m.optionsPropsRef.current.static = e.static ?? !1;
	}, [m.optionsPropsRef, e.static]), g(() => {
		m.optionsPropsRef.current.hold = a;
	}, [m.optionsPropsRef, a]), nt(w === X.Open, {
		container: O,
		accept(e) {
			return e.getAttribute(`role`) === `option` ? NodeFilter.FILTER_REJECT : e.hasAttribute(`role`) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
		},
		walk(e) {
			e.setAttribute(`role`, `none`);
		}
	});
	let ne = M([D?.id]), L = i({
		open: w === X.Open,
		option: void 0
	}), R = _(() => {
		p.actions.setActivationTrigger(Q.Pointer);
	}), z = _((e) => {
		e.preventDefault(), p.actions.setActivationTrigger(Q.Pointer);
	}), B = u(h ? S() : {}, {
		"aria-labelledby": ne,
		role: `listbox`,
		"aria-multiselectable": m.mode === Z.Multi ? !0 : void 0,
		id: r,
		ref: C,
		style: {
			...f.style,
			...y,
			"--input-width": Ge(P, E, !0).width,
			"--button-width": Ge(P, D, !0).width
		},
		onWheel: k === Q.Pointer ? void 0 : R,
		onMouseDown: z,
		...te(F)
	}), V = P && w === X.Closed && !e.static, H = Yt(V, m.virtual?.options), ie = Yt(V, m.value), U = (0, K.useCallback)((e) => m.compare(ie, e), [m.compare, ie]), W = (0, K.useMemo)(() => {
		if (!m.virtual) return m;
		if (H === void 0) throw Error("Missing `options` in virtual mode");
		return H === m.virtual.options ? m : {
			...m,
			virtual: {
				...m.virtual,
				options: H
			}
		};
	}, [
		m,
		H,
		m.virtual?.options
	]);
	m.virtual && Object.assign(f, { children: K.createElement(fn.Provider, { value: W }, K.createElement(mn, { slot: L }, f.children)) });
	let ae = T(), oe = (0, K.useMemo)(() => m.mode === Z.Multi ? m : {
		...m,
		isSelected: U
	}, [m, U]);
	return K.createElement(_e, {
		enabled: c ? e.static || P : !1,
		ownerDocument: A
	}, K.createElement(fn.Provider, { value: oe }, ae({
		ourProps: B,
		theirProps: {
			...f,
			children: K.createElement(Jt, { freeze: V }, typeof f.children == `function` ? f.children?.call(f, L) : f.children)
		},
		slot: L,
		defaultTag: xn,
		features: Sn,
		visible: I,
		name: `Combobox.Options`
	})));
}
var wn = `div`;
function Tn(e, t) {
	var n;
	let r = $(`Combobox.Option`), a = un(`Combobox.Option`), l = (0, o.useId)(), { id: u = `headlessui-combobox-option-${l}`, value: d, disabled: f = ((n = r.virtual)?.disabled)?.call(n, d) ?? !1, order: p = null, ...m } = e, [h] = G(a, (e) => [e.inputElement]), v = $e(h), y = G(a, (0, K.useCallback)((e) => a.selectors.isActive(e, d, u), [d, u])), b = r.isSelected(d), x = (0, K.useRef)(null), S = c({
		disabled: f,
		value: d,
		domRef: x,
		order: p
	}), C = (0, K.useContext)(pn), w = ee(t, x, C ? C.measureElement : null), E = _(() => {
		a.actions.setIsTyping(!1), a.actions.onChange(d);
	});
	g(() => a.actions.registerOption(u, S), [S, u]);
	let D = G(a, (0, K.useCallback)((e) => a.selectors.shouldScrollIntoView(e, d, u), [d, u]));
	g(() => {
		if (D) return s().requestAnimationFrame(() => {
			var e, t;
			(t = (e = x.current)?.scrollIntoView) == null || t.call(e, { block: `nearest` });
		});
	}, [D, x]);
	let O = _((e) => {
		e.preventDefault(), e.button === Ke.Left && (f || (E(), ie() || requestAnimationFrame(() => v()), r.mode === Z.Single && a.actions.closeCombobox()));
	}), k = _(() => {
		if (f) return a.actions.goToOption({ focus: Y.Nothing });
		let e = r.calculateIndex(d);
		a.actions.goToOption({
			focus: Y.Specific,
			idx: e
		});
	}), A = tt(), j = _((e) => A.update(e)), M = _((e) => {
		if (!A.wasMoved(e) || f || y && a.state.activationTrigger === Q.Pointer) return;
		let t = r.calculateIndex(d);
		a.actions.goToOption({
			focus: Y.Specific,
			idx: t
		}, Q.Pointer);
	}), N = _((e) => {
		A.wasMoved(e) && (f || y && (r.optionsPropsRef.current.hold || a.state.activationTrigger === Q.Pointer && a.actions.goToOption({ focus: Y.Nothing })));
	}), P = i({
		active: y,
		focus: y,
		selected: b,
		disabled: f
	}), F = {
		id: u,
		ref: w,
		role: `option`,
		tabIndex: f === !0 ? void 0 : -1,
		"aria-disabled": f === !0 ? !0 : void 0,
		"aria-selected": b,
		disabled: void 0,
		onMouseDown: O,
		onFocus: k,
		onPointerEnter: j,
		onMouseEnter: j,
		onPointerMove: M,
		onMouseMove: M,
		onPointerLeave: N,
		onMouseLeave: N
	};
	return T()({
		ourProps: F,
		theirProps: m,
		slot: P,
		defaultTag: wn,
		name: `Combobox.Option`
	});
}
var En = d(gn), Dn = d(bn), On = d(vn), kn = A, An = d(Cn), jn = d(Tn), Mn = Object.assign(En, {
	Input: On,
	Button: Dn,
	Label: kn,
	Options: An,
	Option: jn
});
export { On as i, Mn as n, An as r, jn as t };

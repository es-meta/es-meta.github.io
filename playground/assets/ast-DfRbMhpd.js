import { c as e, n as t, r as n, t as r } from "./jsx-runtime-CqwARRmJ.js";
import { t as i } from "./react-dom-sPQfLLzr.js";
import { C as a, b as o, y as s } from "./utils-CcSgwp0X.js";
import { ft as c, kt as l, lt as u } from "./index-QWim6Jbc.js";
import { S as d, _ as f, d as p, f as m, g as h, h as g, l as _, m as v, n as y, p as b, r as x, s as S, t as C, u as w } from "./src-CoNJdl3w.js";
var T = l(`chevrons-down-up`, [[`path`, {
	d: `m7 20 5-5 5 5`,
	key: `13a0gw`
}], [`path`, {
	d: `m7 4 5 5 5-5`,
	key: `1kwcof`
}]]), E = l(`chevrons-up-down`, [[`path`, {
	d: `m7 15 5 5 5-5`,
	key: `1hf1tw`
}], [`path`, {
	d: `m7 9 5-5 5 5`,
	key: `sgt6xg`
}]]), D = e(t(), 1), O = r();
function k(e) {
	if (typeof e == `string` || typeof e == `number`) return `` + e;
	let t = ``;
	if (Array.isArray(e)) for (let n = 0, r; n < e.length; n++) (r = k(e[n])) !== `` && (t += (t && ` `) + r);
	else for (let n in e) e[n] && (t += (t && ` `) + n);
	return t;
}
var A = (e) => () => e;
function j(e, { sourceEvent: t, subject: n, target: r, identifier: i, active: a, x: o, y: s, dx: c, dy: l, dispatch: u }) {
	Object.defineProperties(this, {
		type: {
			value: e,
			enumerable: !0,
			configurable: !0
		},
		sourceEvent: {
			value: t,
			enumerable: !0,
			configurable: !0
		},
		subject: {
			value: n,
			enumerable: !0,
			configurable: !0
		},
		target: {
			value: r,
			enumerable: !0,
			configurable: !0
		},
		identifier: {
			value: i,
			enumerable: !0,
			configurable: !0
		},
		active: {
			value: a,
			enumerable: !0,
			configurable: !0
		},
		x: {
			value: o,
			enumerable: !0,
			configurable: !0
		},
		y: {
			value: s,
			enumerable: !0,
			configurable: !0
		},
		dx: {
			value: c,
			enumerable: !0,
			configurable: !0
		},
		dy: {
			value: l,
			enumerable: !0,
			configurable: !0
		},
		_: { value: u }
	});
}
j.prototype.on = function() {
	var e = this._.on.apply(this._, arguments);
	return e === this._ ? this : e;
};
function M(e) {
	return !e.ctrlKey && !e.button;
}
function N() {
	return this.parentNode;
}
function P(e, t) {
	return t ?? {
		x: e.x,
		y: e.y
	};
}
function F() {
	return navigator.maxTouchPoints || `ontouchstart` in this;
}
function I() {
	var e = M, t = N, n = P, r = F, i = {}, a = d(`start`, `drag`, `end`), o = 0, s, c, l, u, _ = 0;
	function y(e) {
		e.on(`mousedown.drag`, x).filter(r).on(`touchstart.drag`, T).on(`touchmove.drag`, E, b).on(`touchend.drag touchcancel.drag`, D).style(`touch-action`, `none`).style(`-webkit-tap-highlight-color`, `rgba(0,0,0,0)`);
	}
	function x(n, r) {
		if (!(u || !e.call(this, n, r))) {
			var i = O(this, t.call(this, n, r), n, r, `mouse`);
			i && (f(n.view).on(`mousemove.drag`, S, v).on(`mouseup.drag`, C, v), w(n.view), g(n), l = !1, s = n.clientX, c = n.clientY, i(`start`, n));
		}
	}
	function S(e) {
		if (m(e), !l) {
			var t = e.clientX - s, n = e.clientY - c;
			l = t * t + n * n > _;
		}
		i.mouse(`drag`, e);
	}
	function C(e) {
		f(e.view).on(`mousemove.drag mouseup.drag`, null), p(e.view, l), m(e), i.mouse(`end`, e);
	}
	function T(n, r) {
		if (e.call(this, n, r)) {
			var i = n.changedTouches, a = t.call(this, n, r), o = i.length, s, c;
			for (s = 0; s < o; ++s) (c = O(this, a, n, r, i[s].identifier, i[s])) && (g(n), c(`start`, n, i[s]));
		}
	}
	function E(e) {
		var t = e.changedTouches, n = t.length, r, a;
		for (r = 0; r < n; ++r) (a = i[t[r].identifier]) && (m(e), a(`drag`, e, t[r]));
	}
	function D(e) {
		var t = e.changedTouches, n = t.length, r, a;
		for (u && clearTimeout(u), u = setTimeout(function() {
			u = null;
		}, 500), r = 0; r < n; ++r) (a = i[t[r].identifier]) && (g(e), a(`end`, e, t[r]));
	}
	function O(e, t, r, s, c, l) {
		var u = a.copy(), d = h(l || r, t), f, p, m;
		if ((m = n.call(e, new j(`beforestart`, {
			sourceEvent: r,
			target: y,
			identifier: c,
			active: o,
			x: d[0],
			y: d[1],
			dx: 0,
			dy: 0,
			dispatch: u
		}), s)) != null) return f = m.x - d[0] || 0, p = m.y - d[1] || 0, function n(r, a, l) {
			var g = d, _;
			switch (r) {
				case `start`:
					i[c] = n, _ = o++;
					break;
				case `end`: delete i[c], --o;
				case `drag`:
					d = h(l || a, t), _ = o;
					break;
			}
			u.call(r, e, new j(r, {
				sourceEvent: a,
				subject: m,
				target: y,
				identifier: c,
				active: _,
				x: d[0] + f,
				y: d[1] + p,
				dx: d[0] - g[0],
				dy: d[1] - g[1],
				dispatch: u
			}), s);
		};
	}
	return y.filter = function(t) {
		return arguments.length ? (e = typeof t == `function` ? t : A(!!t), y) : e;
	}, y.container = function(e) {
		return arguments.length ? (t = typeof e == `function` ? e : A(e), y) : t;
	}, y.subject = function(e) {
		return arguments.length ? (n = typeof e == `function` ? e : A(e), y) : n;
	}, y.touchable = function(e) {
		return arguments.length ? (r = typeof e == `function` ? e : A(!!e), y) : r;
	}, y.on = function() {
		var e = a.on.apply(a, arguments);
		return e === a ? y : e;
	}, y.clickDistance = function(e) {
		return arguments.length ? (_ = (e = +e) * e, y) : Math.sqrt(_);
	}, y;
}
var L = {
	error001: (e = `react`) => `Seems like you have not used ${e === `svelte` ? `SvelteFlowProvider` : `ReactFlowProvider`} as an ancestor. Help: https://${e}flow.dev/error#001`,
	error002: () => `It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.`,
	error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
	error004: () => `The parent container needs a width and a height to render the graph.`,
	error005: () => `Only child nodes can use a parent extent.`,
	error006: () => `Can't create edge. An edge needs a source and a target.`,
	error007: (e) => `The old edge with id=${e} does not exist.`,
	error009: (e) => `Marker type "${e}" doesn't exist.`,
	error008: (e, { id: t, sourceHandle: n, targetHandle: r }) => `Couldn't create edge for ${e} handle id: "${e === `source` ? n : r}", edge id: ${t}.`,
	error010: () => `Handle: No node id found. Make sure to only use a Handle inside a custom Node.`,
	error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
	error012: (e) => `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
	error013: (e = `react`) => `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
	error014: () => `useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.`,
	error015: () => `It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.`,
	error016: (e) => `Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`
}, R = [[-Infinity, -Infinity], [Infinity, Infinity]], z = [
	`Enter`,
	` `,
	`Escape`
], B = {
	"node.a11yDescription.default": `Press enter or space to select a node. Press delete to remove it and escape to cancel.`,
	"node.a11yDescription.keyboardDisabled": `Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.`,
	"node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: n }) => `Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
	"edge.a11yDescription.default": `Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.`,
	"controls.ariaLabel": `Control Panel`,
	"controls.zoomIn.ariaLabel": `Zoom In`,
	"controls.zoomOut.ariaLabel": `Zoom Out`,
	"controls.fitView.ariaLabel": `Fit View`,
	"controls.interactive.ariaLabel": `Toggle Interactivity`,
	"minimap.ariaLabel": `Mini Map`,
	"handle.ariaLabel": `Handle`
}, V;
(function(e) {
	e.Strict = `strict`, e.Loose = `loose`;
})(V ||= {});
var H;
(function(e) {
	e.Free = `free`, e.Vertical = `vertical`, e.Horizontal = `horizontal`;
})(H ||= {});
var U;
(function(e) {
	e.Partial = `partial`, e.Full = `full`;
})(U ||= {});
var W = {
	inProgress: !1,
	isValid: null,
	from: null,
	fromHandle: null,
	fromPosition: null,
	fromNode: null,
	to: null,
	toHandle: null,
	toPosition: null,
	toNode: null,
	pointer: null
}, G;
(function(e) {
	e.Bezier = `default`, e.Straight = `straight`, e.Step = `step`, e.SmoothStep = `smoothstep`, e.SimpleBezier = `simplebezier`;
})(G ||= {});
var ee;
(function(e) {
	e.Arrow = `arrow`, e.ArrowClosed = `arrowclosed`;
})(ee ||= {});
var K;
(function(e) {
	e.Left = `left`, e.Top = `top`, e.Right = `right`, e.Bottom = `bottom`;
})(K ||= {});
var te = {
	[K.Left]: K.Right,
	[K.Right]: K.Left,
	[K.Top]: K.Bottom,
	[K.Bottom]: K.Top
};
function ne(e) {
	return e === null ? null : e ? `valid` : `invalid`;
}
var re = (e) => `id` in e && `source` in e && `target` in e, ie = (e) => `id` in e && `position` in e && !(`source` in e) && !(`target` in e), ae = (e) => `id` in e && `internals` in e && !(`source` in e) && !(`target` in e), oe = (e, t = [0, 0]) => {
	let { width: n, height: r } = Y(e), i = e.origin ?? t, a = n * i[0], o = r * i[1];
	return {
		x: e.position.x - a,
		y: e.position.y - o
	};
}, se = (e, t = { nodeOrigin: [0, 0] }) => e.length === 0 ? {
	x: 0,
	y: 0,
	width: 0,
	height: 0
} : xe(e.reduce((e, n) => {
	let r = typeof n == `string`, i = !t.nodeLookup && !r ? n : void 0;
	return t.nodeLookup && (i = r ? t.nodeLookup.get(n) : ae(n) ? n : t.nodeLookup.get(n.id)), ye(e, i ? Ce(i, t.nodeOrigin) : {
		x: 0,
		y: 0,
		x2: 0,
		y2: 0
	});
}, {
	x: Infinity,
	y: Infinity,
	x2: -Infinity,
	y2: -Infinity
})), ce = (e, t = {}) => {
	let n = {
		x: Infinity,
		y: Infinity,
		x2: -Infinity,
		y2: -Infinity
	}, r = !1;
	return e.forEach((e) => {
		(t.filter === void 0 || t.filter(e)) && (n = ye(n, Ce(e)), r = !0);
	}), r ? xe(n) : {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
}, le = (e, t, [n, r, i] = [
	0,
	0,
	1
], a = !1, o = !1) => {
	let s = (t.x - n) / i, c = (t.y - r) / i, l = t.width / i, u = t.height / i, d = [];
	for (let t of e.values()) {
		let { measured: e, selectable: n = !0, hidden: r = !1 } = t;
		if (o && !n || r) continue;
		let i = e.width ?? t.width ?? t.initialWidth ?? 0, f = e.height ?? t.height ?? t.initialHeight ?? 0, { x: p, y: m } = t.internals.positionAbsolute, h = Te(s, c, l, u, p, m, i, f), g = i * f, _ = a && h > 0;
		(!t.internals.handleBounds || _ || h >= g || t.dragging) && d.push(t);
	}
	return d;
}, ue = (e, t) => {
	let n = /* @__PURE__ */ new Set();
	return e.forEach((e) => {
		n.add(e.id);
	}), t.filter((e) => n.has(e.source) || n.has(e.target));
};
function de(e, t) {
	let n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((e) => e.id)) : null;
	return e.forEach((e) => {
		e.measured.width && e.measured.height && (t?.includeHiddenNodes || !e.hidden) && (!r || r.has(e.id)) && n.set(e.id, e);
	}), n;
}
async function fe({ nodes: e, width: t, height: n, panZoom: r, minZoom: i, maxZoom: a }, o) {
	if (e.size === 0) return !0;
	let s = Fe(ce(de(e, o)), t, n, o?.minZoom ?? i, o?.maxZoom ?? a, o?.padding ?? .1);
	return await r.setViewport(s, {
		duration: o?.duration,
		ease: o?.ease,
		interpolate: o?.interpolate
	}), !0;
}
function pe({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: i, onError: a }) {
	let o = n.get(e), s = o.parentId ? n.get(o.parentId) : void 0, { x: c, y: l } = s ? s.internals.positionAbsolute : {
		x: 0,
		y: 0
	}, u = o.origin ?? r, d = o.extent || i;
	if (o.extent === `parent` && !o.expandParent) if (!s) a?.(`005`, L.error005());
	else {
		let e = s.measured.width, t = s.measured.height;
		e && t && (d = [[c, l], [c + e, l + t]]);
	}
	else s && Le(o.extent) && (d = [[o.extent[0][0] + c, o.extent[0][1] + l], [o.extent[1][0] + c, o.extent[1][1] + l]]);
	let f = Le(d) ? q(t, d, o.measured) : t;
	return (o.measured.width === void 0 || o.measured.height === void 0) && a?.(`015`, L.error015()), {
		position: {
			x: f.x - c + (o.measured.width ?? 0) * u[0],
			y: f.y - l + (o.measured.height ?? 0) * u[1]
		},
		positionAbsolute: f
	};
}
async function me({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: i }) {
	let a = new Set(e.map((e) => e.id)), o = [];
	for (let e of n) {
		if (e.deletable === !1) continue;
		let t = a.has(e.id), n = !t && e.parentId && o.find((t) => t.id === e.parentId);
		(t || n) && o.push(e);
	}
	let s = new Set(t.map((e) => e.id)), c = r.filter((e) => e.deletable !== !1), l = ue(o, c);
	for (let e of c) s.has(e.id) && !l.find((t) => t.id === e.id) && l.push(e);
	if (!i) return {
		edges: l,
		nodes: o
	};
	let u = await i({
		nodes: o,
		edges: l
	});
	return typeof u == `boolean` ? u ? {
		edges: l,
		nodes: o
	} : {
		edges: [],
		nodes: []
	} : u;
}
var he = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), q = (e = {
	x: 0,
	y: 0
}, t, n) => ({
	x: he(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
	y: he(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function ge(e, t, n) {
	let { width: r, height: i } = Y(n), { x: a, y: o } = n.internals.positionAbsolute;
	return q(e, [[a, o], [a + r, o + i]], t);
}
var _e = (e, t, n) => e < t ? he(Math.abs(e - t), 1, t) / t : e > n ? -he(Math.abs(e - n), 1, t) / t : 0, ve = (e, t, n = 15, r = 40) => [_e(e.x, r, t.width - r) * n, _e(e.y, r, t.height - r) * n], ye = (e, t) => ({
	x: Math.min(e.x, t.x),
	y: Math.min(e.y, t.y),
	x2: Math.max(e.x2, t.x2),
	y2: Math.max(e.y2, t.y2)
}), be = ({ x: e, y: t, width: n, height: r }) => ({
	x: e,
	y: t,
	x2: e + n,
	y2: t + r
}), xe = ({ x: e, y: t, x2: n, y2: r }) => ({
	x: e,
	y: t,
	width: n - e,
	height: r - t
}), Se = (e, t = [0, 0]) => {
	let { x: n, y: r } = ae(e) ? e.internals.positionAbsolute : oe(e, t);
	return {
		x: n,
		y: r,
		width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
		height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
	};
}, Ce = (e, t = [0, 0]) => {
	let { x: n, y: r } = ae(e) ? e.internals.positionAbsolute : oe(e, t);
	return {
		x: n,
		y: r,
		x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
		y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
	};
}, we = (e, t) => xe(ye(be(e), be(t))), Te = (e, t, n, r, i, a, o, s) => {
	let c = Math.max(0, Math.min(e + n, i + o) - Math.max(e, i)), l = Math.max(0, Math.min(t + r, a + s) - Math.max(t, a));
	return Math.ceil(c * l);
}, Ee = (e, t) => Te(e.x, e.y, e.width, e.height, t.x, t.y, t.width, t.height), De = (e) => J(e.width) && J(e.height) && J(e.x) && J(e.y), J = (e) => !isNaN(e) && isFinite(e), Oe = (e, t) => (e, t) => {}, ke = (e, t = [1, 1]) => ({
	x: t[0] * Math.round(e.x / t[0]),
	y: t[1] * Math.round(e.y / t[1])
}), Ae = ({ x: e, y: t }, [n, r, i], a = !1, o = [1, 1]) => {
	let s = {
		x: (e - n) / i,
		y: (t - r) / i
	};
	return a ? ke(s, o) : s;
}, je = ({ x: e, y: t }, [n, r, i]) => ({
	x: e * i + n,
	y: t * i + r
});
function Me(e, t) {
	if (typeof e == `number`) return Math.floor((t - t / (1 + e)) * .5);
	if (typeof e == `string` && e.endsWith(`px`)) {
		let t = parseFloat(e);
		if (!Number.isNaN(t)) return Math.floor(t);
	}
	if (typeof e == `string` && e.endsWith(`%`)) {
		let n = parseFloat(e);
		if (!Number.isNaN(n)) return Math.floor(t * n * .01);
	}
	return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function Ne(e, t, n) {
	if (typeof e == `string` || typeof e == `number`) {
		let r = Me(e, n), i = Me(e, t);
		return {
			top: r,
			right: i,
			bottom: r,
			left: i,
			x: i * 2,
			y: r * 2
		};
	}
	if (typeof e == `object`) {
		let r = Me(e.top ?? e.y ?? 0, n), i = Me(e.bottom ?? e.y ?? 0, n), a = Me(e.left ?? e.x ?? 0, t), o = Me(e.right ?? e.x ?? 0, t);
		return {
			top: r,
			right: o,
			bottom: i,
			left: a,
			x: a + o,
			y: r + i
		};
	}
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		x: 0,
		y: 0
	};
}
function Pe(e, t, n, r, i, a) {
	let { x: o, y: s } = je(e, [
		t,
		n,
		r
	]), { x: c, y: l } = je({
		x: e.x + e.width,
		y: e.y + e.height
	}, [
		t,
		n,
		r
	]), u = i - c, d = a - l;
	return {
		left: Math.floor(o),
		top: Math.floor(s),
		right: Math.floor(u),
		bottom: Math.floor(d)
	};
}
var Fe = (e, t, n, r, i, a) => {
	let o = Ne(a, t, n), s = (t - o.x) / e.width, c = (n - o.y) / e.height, l = he(Math.min(s, c), r, i), u = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - u * l, p = n / 2 - d * l, m = Pe(e, f, p, l, t, n), h = {
		left: Math.min(m.left - o.left, 0),
		top: Math.min(m.top - o.top, 0),
		right: Math.min(m.right - o.right, 0),
		bottom: Math.min(m.bottom - o.bottom, 0)
	};
	return {
		x: f - h.left + h.right,
		y: p - h.top + h.bottom,
		zoom: l
	};
}, Ie = () => typeof navigator < `u` && navigator?.userAgent?.indexOf(`Mac`) >= 0;
function Le(e) {
	return e != null && e !== `parent`;
}
function Y(e) {
	return {
		width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
		height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
	};
}
function Re(e) {
	return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function ze(e, t = {
	width: 0,
	height: 0
}, n, r, i) {
	let a = { ...e }, o = r.get(n);
	if (o) {
		let e = o.origin || i;
		a.x += o.internals.positionAbsolute.x - (t.width ?? 0) * e[0], a.y += o.internals.positionAbsolute.y - (t.height ?? 0) * e[1];
	}
	return a;
}
function Be(e, t) {
	if (e.size !== t.size) return !1;
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
function Ve() {
	let e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
function He(e) {
	return {
		...B,
		...e || {}
	};
}
function Ue(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: i }) {
	let { x: a, y: o } = X(e), s = Ae({
		x: a - (i?.left ?? 0),
		y: o - (i?.top ?? 0)
	}, r), { x: c, y: l } = n ? ke(s, t) : s;
	return {
		xSnapped: c,
		ySnapped: l,
		...s
	};
}
var We = (e) => ({
	width: e.offsetWidth,
	height: e.offsetHeight
}), Ge = (e) => e?.getRootNode?.() || window?.document, Ke = [
	`INPUT`,
	`SELECT`,
	`TEXTAREA`
];
function qe(e) {
	let t = e.composedPath?.()?.[0] || e.target;
	return t?.nodeType === 1 ? Ke.includes(t.nodeName) || t.hasAttribute(`contenteditable`) || !!t.closest(`.nokey`) : !1;
}
var Je = (e) => `clientX` in e, X = (e, t) => {
	let n = Je(e), r = n ? e.clientX : e.touches?.[0].clientX, i = n ? e.clientY : e.touches?.[0].clientY;
	return {
		x: r - (t?.left ?? 0),
		y: i - (t?.top ?? 0)
	};
}, Ye = (e, t, n, r, i) => {
	let a = t.querySelectorAll(`.${e}`);
	return !a || !a.length ? null : Array.from(a).map((t) => {
		let a = t.getBoundingClientRect();
		return {
			id: t.getAttribute(`data-handleid`),
			type: e,
			nodeId: i,
			position: t.getAttribute(`data-handlepos`),
			x: (a.left - n.left) / r,
			y: (a.top - n.top) / r,
			...We(t)
		};
	});
};
function Xe({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: i, sourceControlY: a, targetControlX: o, targetControlY: s }) {
	let c = e * .125 + i * .375 + o * .375 + n * .125, l = t * .125 + a * .375 + s * .375 + r * .125;
	return [
		c,
		l,
		Math.abs(c - e),
		Math.abs(l - t)
	];
}
function Ze(e, t) {
	return e >= 0 ? .5 * e : t * 25 * Math.sqrt(-e);
}
function Qe({ pos: e, x1: t, y1: n, x2: r, y2: i, c: a }) {
	switch (e) {
		case K.Left: return [t - Ze(t - r, a), n];
		case K.Right: return [t + Ze(r - t, a), n];
		case K.Top: return [t, n - Ze(n - i, a)];
		case K.Bottom: return [t, n + Ze(i - n, a)];
	}
}
function $e({ sourceX: e, sourceY: t, sourcePosition: n = K.Bottom, targetX: r, targetY: i, targetPosition: a = K.Top, curvature: o = .25 }) {
	let [s, c] = Qe({
		pos: n,
		x1: e,
		y1: t,
		x2: r,
		y2: i,
		c: o
	}), [l, u] = Qe({
		pos: a,
		x1: r,
		y1: i,
		x2: e,
		y2: t,
		c: o
	}), [d, f, p, m] = Xe({
		sourceX: e,
		sourceY: t,
		targetX: r,
		targetY: i,
		sourceControlX: s,
		sourceControlY: c,
		targetControlX: l,
		targetControlY: u
	});
	return [
		`M${e},${t} C${s},${c} ${l},${u} ${r},${i}`,
		d,
		f,
		p,
		m
	];
}
function et({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
	let i = Math.abs(n - e) / 2, a = n < e ? n + i : n - i, o = Math.abs(r - t) / 2;
	return [
		a,
		r < t ? r + o : r - o,
		i,
		o
	];
}
function tt({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: i = !1, zIndexMode: a = `basic` }) {
	return a === `manual` ? r : (i && n ? r + 1e3 : r) + Math.max(e.parentId || i && e.selected ? e.internals.z : 0, t.parentId || i && t.selected ? t.internals.z : 0);
}
function nt({ sourceNode: e, targetNode: t, width: n, height: r, transform: i }) {
	let a = ye(Ce(e), Ce(t));
	return a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1), Ee({
		x: -i[0] / i[2],
		y: -i[1] / i[2],
		width: n / i[2],
		height: r / i[2]
	}, xe(a)) > 0;
}
var rt = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ``}-${n}${r || ``}`, it = (e, t) => t.some((t) => t.source === e.source && t.target === e.target && (t.sourceHandle === e.sourceHandle || !t.sourceHandle && !e.sourceHandle) && (t.targetHandle === e.targetHandle || !t.targetHandle && !e.targetHandle)), at = (e, t, n = {}) => {
	if (!e.source || !e.target) return n.onError?.(`006`, L.error006()), t;
	let r = n.getEdgeId || rt, i;
	return i = re(e) ? { ...e } : {
		...e,
		id: r(e)
	}, it(i, t) ? t : (i.sourceHandle === null && delete i.sourceHandle, i.targetHandle === null && delete i.targetHandle, t.concat(i));
};
function ot({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
	let [i, a, o, s] = et({
		sourceX: e,
		sourceY: t,
		targetX: n,
		targetY: r
	});
	return [
		`M ${e},${t}L ${n},${r}`,
		i,
		a,
		o,
		s
	];
}
var st = {
	[K.Left]: {
		x: -1,
		y: 0
	},
	[K.Right]: {
		x: 1,
		y: 0
	},
	[K.Top]: {
		x: 0,
		y: -1
	},
	[K.Bottom]: {
		x: 0,
		y: 1
	}
}, ct = ({ source: e, sourcePosition: t = K.Bottom, target: n }) => t === K.Left || t === K.Right ? e.x < n.x ? {
	x: 1,
	y: 0
} : {
	x: -1,
	y: 0
} : e.y < n.y ? {
	x: 0,
	y: 1
} : {
	x: 0,
	y: -1
}, lt = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
function ut({ source: e, sourcePosition: t = K.Bottom, target: n, targetPosition: r = K.Top, center: i, offset: a, stepPosition: o }) {
	let s = st[t], c = st[r], l = {
		x: e.x + s.x * a,
		y: e.y + s.y * a
	}, u = {
		x: n.x + c.x * a,
		y: n.y + c.y * a
	}, d = ct({
		source: l,
		sourcePosition: t,
		target: u
	}), f = d.x === 0 ? `y` : `x`, p = d[f], m = [], h, g, _ = {
		x: 0,
		y: 0
	}, v = {
		x: 0,
		y: 0
	}, [, , y, b] = et({
		sourceX: e.x,
		sourceY: e.y,
		targetX: n.x,
		targetY: n.y
	});
	if (s[f] * c[f] === -1) {
		f === `x` ? (h = i.x ?? l.x + (u.x - l.x) * o, g = i.y ?? (l.y + u.y) / 2) : (h = i.x ?? (l.x + u.x) / 2, g = i.y ?? l.y + (u.y - l.y) * o);
		let e = [{
			x: h,
			y: l.y
		}, {
			x: h,
			y: u.y
		}], t = [{
			x: l.x,
			y: g
		}, {
			x: u.x,
			y: g
		}];
		m = s[f] === p ? f === `x` ? e : t : f === `x` ? t : e;
	} else {
		let i = [{
			x: l.x,
			y: u.y
		}], o = [{
			x: u.x,
			y: l.y
		}];
		if (m = f === `x` ? s.x === p ? o : i : s.y === p ? i : o, t === r) {
			let t = Math.abs(e[f] - n[f]);
			if (t <= a) {
				let r = Math.min(a - 1, a - t);
				s[f] === p ? _[f] = (l[f] > e[f] ? -1 : 1) * r : v[f] = (u[f] > n[f] ? -1 : 1) * r;
			}
		}
		if (t !== r) {
			let e = f === `x` ? `y` : `x`, t = s[f] === c[e], n = l[e] > u[e], r = l[e] < u[e];
			(s[f] === 1 && (!t && n || t && r) || s[f] !== 1 && (!t && r || t && n)) && (m = f === `x` ? i : o);
		}
		let d = {
			x: l.x + _.x,
			y: l.y + _.y
		}, y = {
			x: u.x + v.x,
			y: u.y + v.y
		};
		Math.max(Math.abs(d.x - m[0].x), Math.abs(y.x - m[0].x)) >= Math.max(Math.abs(d.y - m[0].y), Math.abs(y.y - m[0].y)) ? (h = (d.x + y.x) / 2, g = m[0].y) : (h = m[0].x, g = (d.y + y.y) / 2);
	}
	let x = {
		x: l.x + _.x,
		y: l.y + _.y
	}, S = {
		x: u.x + v.x,
		y: u.y + v.y
	};
	return [
		[
			e,
			...x.x !== m[0].x || x.y !== m[0].y ? [x] : [],
			...m,
			...S.x !== m[m.length - 1].x || S.y !== m[m.length - 1].y ? [S] : [],
			n
		],
		h,
		g,
		y,
		b
	];
}
function dt(e, t, n, r) {
	let i = Math.min(lt(e, t) / 2, lt(t, n) / 2, r), { x: a, y: o } = t;
	if (e.x === a && a === n.x || e.y === o && o === n.y) return `L${a} ${o}`;
	if (e.y === o) {
		let t = e.x < n.x ? -1 : 1, r = e.y < n.y ? 1 : -1;
		return `L ${a + i * t},${o}Q ${a},${o} ${a},${o + i * r}`;
	}
	let s = e.x < n.x ? 1 : -1;
	return `L ${a},${o + i * (e.y < n.y ? -1 : 1)}Q ${a},${o} ${a + i * s},${o}`;
}
function ft({ sourceX: e, sourceY: t, sourcePosition: n = K.Bottom, targetX: r, targetY: i, targetPosition: a = K.Top, borderRadius: o = 5, centerX: s, centerY: c, offset: l = 20, stepPosition: u = .5 }) {
	let [d, f, p, m, h] = ut({
		source: {
			x: e,
			y: t
		},
		sourcePosition: n,
		target: {
			x: r,
			y: i
		},
		targetPosition: a,
		center: {
			x: s,
			y: c
		},
		offset: l,
		stepPosition: u
	}), g = `M${d[0].x} ${d[0].y}`;
	for (let e = 1; e < d.length - 1; e++) g += dt(d[e - 1], d[e], d[e + 1], o);
	return g += `L${d[d.length - 1].x} ${d[d.length - 1].y}`, [
		g,
		f,
		p,
		m,
		h
	];
}
function pt(e) {
	return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function mt(e) {
	let { sourceNode: t, targetNode: n } = e;
	if (!pt(t) || !pt(n)) return null;
	let r = t.internals.handleBounds || ht(t.handles), i = n.internals.handleBounds || ht(n.handles), a = _t(r?.source ?? [], e.sourceHandle), o = _t(e.connectionMode === V.Strict ? i?.target ?? [] : (i?.target ?? []).concat(i?.source ?? []), e.targetHandle);
	if (!a || !o) return e.onError?.(`008`, L.error008(a ? `target` : `source`, {
		id: e.id,
		sourceHandle: e.sourceHandle,
		targetHandle: e.targetHandle
	})), null;
	let s = a?.position || K.Bottom, c = o?.position || K.Top, l = gt(t, a, s), u = gt(n, o, c);
	return {
		sourceX: l.x,
		sourceY: l.y,
		targetX: u.x,
		targetY: u.y,
		sourcePosition: s,
		targetPosition: c
	};
}
function ht(e) {
	if (!e) return null;
	let t = [], n = [];
	for (let r of e) r.width = r.width ?? 1, r.height = r.height ?? 1, r.type === `source` ? t.push(r) : r.type === `target` && n.push(r);
	return {
		source: t,
		target: n
	};
}
function gt(e, t, n = K.Left, r = !1) {
	let i = (t?.x ?? 0) + e.internals.positionAbsolute.x, a = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: o, height: s } = t ?? Y(e);
	if (r) return {
		x: i + o / 2,
		y: a + s / 2
	};
	switch (t?.position ?? n) {
		case K.Top: return {
			x: i + o / 2,
			y: a
		};
		case K.Right: return {
			x: i + o,
			y: a + s / 2
		};
		case K.Bottom: return {
			x: i + o / 2,
			y: a + s
		};
		case K.Left: return {
			x: i,
			y: a + s / 2
		};
	}
}
function _t(e, t) {
	return e && (t ? e.find((e) => e.id === t) : e[0]) || null;
}
function vt(e, t) {
	return e ? typeof e == `string` ? e : `${t ? `${t}__` : ``}${Object.keys(e).sort().map((t) => `${t}=${e[t]}`).join(`&`)}` : ``;
}
function yt(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: i }) {
	let a = /* @__PURE__ */ new Set();
	return e.reduce((e, o) => ([o.markerStart || r, o.markerEnd || i].forEach((r) => {
		if (r && typeof r == `object`) {
			let i = vt(r, t);
			a.has(i) || (e.push({
				id: i,
				color: r.color || n,
				...r
			}), a.add(i));
		}
	}), e), []).sort((e, t) => e.id.localeCompare(t.id));
}
var bt = 1e3, xt = 10, St = {
	nodeOrigin: [0, 0],
	nodeExtent: R,
	elevateNodesOnSelect: !0,
	zIndexMode: `basic`,
	defaults: {}
}, Ct = {
	...St,
	checkEquality: !0
};
function wt(e, t) {
	let n = { ...e };
	for (let e in t) t[e] !== void 0 && (n[e] = t[e]);
	return n;
}
function Tt(e, t, n) {
	let r = wt(St, n);
	for (let n of e.values()) if (n.parentId) At(n, e, t, r);
	else {
		let e = q(oe(n, r.nodeOrigin), Le(n.extent) ? n.extent : r.nodeExtent, Y(n));
		n.internals.positionAbsolute = e;
	}
}
function Et(e, t) {
	if (!e.handles) return e.measured ? t?.internals.handleBounds : void 0;
	let n = [], r = [];
	for (let t of e.handles) {
		let i = {
			id: t.id,
			width: t.width ?? 1,
			height: t.height ?? 1,
			nodeId: e.id,
			x: t.x,
			y: t.y,
			position: t.position,
			type: t.type
		};
		t.type === `source` ? n.push(i) : t.type === `target` && r.push(i);
	}
	return {
		source: n,
		target: r
	};
}
function Dt(e) {
	return e === `manual`;
}
function Ot(e, t, n, r = {}) {
	let i = wt(Ct, r), a = { i: 0 }, o = new Map(t), s = i?.elevateNodesOnSelect && !Dt(i.zIndexMode) ? bt : 0, c = e.length > 0, l = !1;
	t.clear(), n.clear();
	for (let u of e) {
		let e = o.get(u.id);
		if (i.checkEquality && u === e?.internals.userNode) t.set(u.id, e);
		else {
			let n = q(oe(u, i.nodeOrigin), Le(u.extent) ? u.extent : i.nodeExtent, Y(u));
			e = {
				...i.defaults,
				...u,
				measured: {
					width: u.measured?.width,
					height: u.measured?.height
				},
				internals: {
					positionAbsolute: n,
					handleBounds: Et(u, e),
					z: jt(u, s, i.zIndexMode),
					userNode: u
				}
			}, t.set(u.id, e);
		}
		(e.measured === void 0 || e.measured.width === void 0 || e.measured.height === void 0) && !e.hidden && (c = !1), u.parentId && At(e, t, n, r, a), l ||= u.selected ?? !1;
	}
	return {
		nodesInitialized: c,
		hasSelectedNodes: l
	};
}
function kt(e, t) {
	if (!e.parentId) return;
	let n = t.get(e.parentId);
	n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function At(e, t, n, r, i) {
	let { elevateNodesOnSelect: a, nodeOrigin: o, nodeExtent: s, zIndexMode: c } = wt(St, r), l = e.parentId, u = t.get(l);
	if (!u) {
		console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
		return;
	}
	kt(e, n), i && !u.parentId && u.internals.rootParentIndex === void 0 && c === `auto` && (u.internals.rootParentIndex = ++i.i, u.internals.z = u.internals.z + i.i * xt), i && u.internals.rootParentIndex !== void 0 && (i.i = u.internals.rootParentIndex);
	let { x: d, y: f, z: p } = Mt(e, u, o, s, a && !Dt(c) ? bt : 0, c), { positionAbsolute: m } = e.internals, h = d !== m.x || f !== m.y;
	(h || p !== e.internals.z) && t.set(e.id, {
		...e,
		internals: {
			...e.internals,
			positionAbsolute: h ? {
				x: d,
				y: f
			} : m,
			z: p
		}
	});
}
function jt(e, t, n) {
	let r = J(e.zIndex) ? e.zIndex : 0;
	return Dt(n) ? r : r + (e.selected ? t : 0);
}
function Mt(e, t, n, r, i, a) {
	let { x: o, y: s } = t.internals.positionAbsolute, c = Y(e), l = oe(e, n), u = Le(e.extent) ? q(l, e.extent, c) : l, d = q({
		x: o + u.x,
		y: s + u.y
	}, r, c);
	e.extent === `parent` && (d = ge(d, c, t));
	let f = jt(e, i, a), p = t.internals.z ?? 0;
	return {
		x: d.x,
		y: d.y,
		z: p >= f ? p + 1 : f
	};
}
function Nt(e, t, n, r = [0, 0]) {
	let i = [], a = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = t.get(n.parentId);
		if (!e) continue;
		let r = we(a.get(n.parentId)?.expandedRect ?? Se(e), n.rect);
		a.set(n.parentId, {
			expandedRect: r,
			parent: e
		});
	}
	return a.size > 0 && a.forEach(({ expandedRect: t, parent: a }, o) => {
		let s = a.internals.positionAbsolute, c = Y(a), l = a.origin ?? r, u = t.x < s.x ? Math.round(Math.abs(s.x - t.x)) : 0, d = t.y < s.y ? Math.round(Math.abs(s.y - t.y)) : 0, f = Math.max(c.width, Math.round(t.width)), p = Math.max(c.height, Math.round(t.height)), m = (f - c.width) * l[0], h = (p - c.height) * l[1];
		(u > 0 || d > 0 || m || h) && (i.push({
			id: o,
			type: `position`,
			position: {
				x: a.position.x - u + m,
				y: a.position.y - d + h
			}
		}), n.get(o)?.forEach((t) => {
			e.some((e) => e.id === t.id) || i.push({
				id: t.id,
				type: `position`,
				position: {
					x: t.position.x + u,
					y: t.position.y + d
				}
			});
		})), (c.width < t.width || c.height < t.height || u || d) && i.push({
			id: o,
			type: `dimensions`,
			setAttributes: !0,
			dimensions: {
				width: f + (u ? l[0] * u - m : 0),
				height: p + (d ? l[1] * d - h : 0)
			}
		});
	}), i;
}
function Pt(e, t, n, r, i, a, o) {
	let s = r?.querySelector(`.xyflow__viewport`), c = !1;
	if (!s) return {
		changes: [],
		updatedInternals: c
	};
	let l = [], u = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(u.transform), f = [];
	for (let r of e.values()) {
		let e = t.get(r.id);
		if (!e) continue;
		if (e.hidden) {
			t.set(e.id, {
				...e,
				internals: {
					...e.internals,
					handleBounds: void 0
				}
			}), c = !0;
			continue;
		}
		let s = We(r.nodeElement), u = e.measured.width !== s.width || e.measured.height !== s.height;
		if (s.width && s.height && (u || !e.internals.handleBounds || r.force)) {
			let p = r.nodeElement.getBoundingClientRect(), m = Le(e.extent) ? e.extent : a, { positionAbsolute: h } = e.internals;
			e.parentId && e.extent === `parent` ? h = ge(h, s, t.get(e.parentId)) : m && (h = q(h, m, s));
			let g = {
				...e,
				measured: s,
				internals: {
					...e.internals,
					positionAbsolute: h,
					handleBounds: {
						source: Ye(`source`, r.nodeElement, p, d, e.id),
						target: Ye(`target`, r.nodeElement, p, d, e.id)
					}
				}
			};
			t.set(e.id, g), e.parentId && At(g, t, n, {
				nodeOrigin: i,
				zIndexMode: o
			}), c = !0, u && (l.push({
				id: e.id,
				type: `dimensions`,
				dimensions: s
			}), e.expandParent && e.parentId && f.push({
				id: e.id,
				parentId: e.parentId,
				rect: Se(g, i)
			}));
		}
	}
	if (f.length > 0) {
		let e = Nt(f, t, n, i);
		l.push(...e);
	}
	return {
		changes: l,
		updatedInternals: c
	};
}
async function Ft({ delta: e, panZoom: t, transform: n, translateExtent: r, width: i, height: a }) {
	if (!t || !e.x && !e.y) return !1;
	let o = await t.setViewportConstrained({
		x: n[0] + e.x,
		y: n[1] + e.y,
		zoom: n[2]
	}, [[0, 0], [i, a]], r);
	return !!o && (o.x !== n[0] || o.y !== n[1] || o.k !== n[2]);
}
function It(e, t, n, r, i, a) {
	let o = i, s = r.get(o) || /* @__PURE__ */ new Map();
	r.set(o, s.set(n, t)), o = `${i}-${e}`;
	let c = r.get(o) || /* @__PURE__ */ new Map();
	if (r.set(o, c.set(n, t)), a) {
		o = `${i}-${e}-${a}`;
		let s = r.get(o) || /* @__PURE__ */ new Map();
		r.set(o, s.set(n, t));
	}
}
function Lt(e, t, n) {
	e.clear(), t.clear();
	for (let r of n) {
		let { source: n, target: i, sourceHandle: a = null, targetHandle: o = null } = r, s = {
			edgeId: r.id,
			source: n,
			target: i,
			sourceHandle: a,
			targetHandle: o
		}, c = `${n}-${a}--${i}-${o}`;
		It(`source`, s, `${i}-${o}--${n}-${a}`, e, n, a), It(`target`, s, c, e, i, o), t.set(r.id, r);
	}
}
function Rt(e, t) {
	if (!e.parentId) return !1;
	let n = t.get(e.parentId);
	return n ? n.selected ? !0 : Rt(n, t) : !1;
}
function zt(e, t, n) {
	let r = e;
	do {
		if (r?.matches?.(t)) return !0;
		if (r === n) return !1;
		r = r?.parentElement;
	} while (r);
	return !1;
}
function Bt(e, t, n, r) {
	let i = /* @__PURE__ */ new Map();
	for (let [a, o] of e) if ((o.selected || o.id === r) && (!o.parentId || !Rt(o, e)) && (o.draggable || t && o.draggable === void 0)) {
		let t = e.get(a);
		t && i.set(a, {
			id: a,
			position: t.position || {
				x: 0,
				y: 0
			},
			distance: {
				x: n.x - t.internals.positionAbsolute.x,
				y: n.y - t.internals.positionAbsolute.y
			},
			extent: t.extent,
			parentId: t.parentId,
			origin: t.origin,
			expandParent: t.expandParent,
			internals: { positionAbsolute: t.internals.positionAbsolute || {
				x: 0,
				y: 0
			} },
			measured: {
				width: t.measured.width ?? 0,
				height: t.measured.height ?? 0
			}
		});
	}
	return i;
}
function Vt({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
	let i = [];
	for (let [e, a] of t) {
		let t = n.get(e)?.internals.userNode;
		t && i.push({
			...t,
			position: a.position,
			dragging: r
		});
	}
	if (!e) return [i[0], i];
	let a = n.get(e)?.internals.userNode;
	return [a ? {
		...a,
		position: t.get(e)?.position || a.position,
		dragging: r
	} : i[0], i];
}
function Ht({ dragItems: e, snapGrid: t, x: n, y: r }) {
	let i = e.values().next().value;
	if (!i) return null;
	let a = {
		x: n - i.distance.x,
		y: r - i.distance.y
	}, o = ke(a, t);
	return {
		x: o.x - a.x,
		y: o.y - a.y
	};
}
function Ut({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: i }) {
	let a = {
		x: null,
		y: null
	}, o = 0, s = /* @__PURE__ */ new Map(), c = !1, l = {
		x: 0,
		y: 0
	}, u = null, d = !1, p = null, m = !1, h = !1, g = null;
	function _({ noDragClassName: _, handleSelector: v, domNode: y, isSelectable: b, nodeId: x, nodeClickDistance: S = 0 }) {
		p = f(y);
		function C({ x: e, y: n }) {
			let { nodeLookup: i, nodeExtent: o, snapGrid: c, snapToGrid: l, nodeOrigin: u, onNodeDrag: d, onSelectionDrag: f, onError: p, updateNodePositions: m } = t();
			a = {
				x: e,
				y: n
			};
			let _ = !1, v = s.size > 1, y = v && o ? be(ce(s)) : null, b = v && l ? Ht({
				dragItems: s,
				snapGrid: c,
				x: e,
				y: n
			}) : null;
			for (let [t, r] of s) {
				if (!i.has(t)) continue;
				let a = {
					x: e - r.distance.x,
					y: n - r.distance.y
				};
				l && (a = b ? {
					x: Math.round(a.x + b.x),
					y: Math.round(a.y + b.y)
				} : ke(a, c));
				let s = null;
				if (v && o && !r.extent && y) {
					let { positionAbsolute: e } = r.internals, t = e.x - y.x + o[0][0], n = e.x + r.measured.width - y.x2 + o[1][0], i = e.y - y.y + o[0][1], a = e.y + r.measured.height - y.y2 + o[1][1];
					s = [[t, i], [n, a]];
				}
				let { position: d, positionAbsolute: f } = pe({
					nodeId: t,
					nextPosition: a,
					nodeLookup: i,
					nodeExtent: s || o,
					nodeOrigin: u,
					onError: p
				});
				_ = _ || r.position.x !== d.x || r.position.y !== d.y, r.position = d, r.internals.positionAbsolute = f;
			}
			if (h ||= _, _ && (m(s, !0), g && (r || d || !x && f))) {
				let [e, t] = Vt({
					nodeId: x,
					dragItems: s,
					nodeLookup: i
				});
				r?.(g, s, e, t), d?.(g, e, t), x || f?.(g, t);
			}
		}
		async function w() {
			if (!u) return;
			let { transform: e, panBy: n, autoPanSpeed: r, autoPanOnNodeDrag: i } = t();
			if (!i) {
				c = !1, cancelAnimationFrame(o);
				return;
			}
			let [s, d] = ve(l, u, r);
			(s !== 0 || d !== 0) && (a.x = (a.x ?? 0) - s / e[2], a.y = (a.y ?? 0) - d / e[2], await n({
				x: s,
				y: d
			}) && C(a)), o = requestAnimationFrame(w);
		}
		function T(r) {
			let { nodeLookup: i, multiSelectionActive: o, nodesDraggable: c, transform: l, snapGrid: f, snapToGrid: p, selectNodesOnDrag: m, onNodeDragStart: h, onSelectionDragStart: g, unselectNodesAndEdges: _ } = t();
			d = !0, (!m || !b) && !o && x && (i.get(x)?.selected || _()), b && m && x && e?.(x);
			let v = Ue(r.sourceEvent, {
				transform: l,
				snapGrid: f,
				snapToGrid: p,
				containerBounds: u
			});
			if (a = v, s = Bt(i, c, v, x), s.size > 0 && (n || h || !x && g)) {
				let [e, t] = Vt({
					nodeId: x,
					dragItems: s,
					nodeLookup: i
				});
				n?.(r.sourceEvent, s, e, t), h?.(r.sourceEvent, e, t), x || g?.(r.sourceEvent, t);
			}
		}
		let E = I().clickDistance(S).on(`start`, (e) => {
			let { domNode: n, nodeDragThreshold: r, transform: i, snapGrid: o, snapToGrid: s } = t();
			u = n?.getBoundingClientRect() || null, m = !1, h = !1, g = e.sourceEvent, r === 0 && T(e), a = Ue(e.sourceEvent, {
				transform: i,
				snapGrid: o,
				snapToGrid: s,
				containerBounds: u
			}), l = X(e.sourceEvent, u);
		}).on(`drag`, (e) => {
			let { autoPanOnNodeDrag: n, transform: r, snapGrid: i, snapToGrid: o, nodeDragThreshold: f, nodeLookup: p } = t(), h = Ue(e.sourceEvent, {
				transform: r,
				snapGrid: i,
				snapToGrid: o,
				containerBounds: u
			});
			if (g = e.sourceEvent, (e.sourceEvent.type === `touchmove` && e.sourceEvent.touches.length > 1 || x && !p.has(x)) && (m = !0), !m) {
				if (!c && n && d && (c = !0, w()), !d) {
					let t = X(e.sourceEvent, u), n = t.x - l.x, r = t.y - l.y;
					Math.sqrt(n * n + r * r) > f && T(e);
				}
				(a.x !== h.xSnapped || a.y !== h.ySnapped) && s && d && (l = X(e.sourceEvent, u), C(h));
			}
		}).on(`end`, (e) => {
			if (!d || m) {
				m && s.size > 0 && t().updateNodePositions(s, !1);
				return;
			}
			if (c = !1, d = !1, cancelAnimationFrame(o), s.size > 0) {
				let { nodeLookup: n, updateNodePositions: r, onNodeDragStop: a, onSelectionDragStop: o } = t();
				if (h &&= (r(s, !1), !1), i || a || !x && o) {
					let [t, r] = Vt({
						nodeId: x,
						dragItems: s,
						nodeLookup: n,
						dragging: !1
					});
					i?.(e.sourceEvent, s, t, r), a?.(e.sourceEvent, t, r), x || o?.(e.sourceEvent, r);
				}
			}
		}).filter((e) => {
			let t = e.target;
			return !e.button && (!_ || !zt(t, `.${_}`, y)) && (!v || zt(t, v, y));
		});
		p.call(E);
	}
	function v() {
		p?.on(`.drag`, null);
	}
	return {
		update: _,
		destroy: v
	};
}
function Wt(e, t, n) {
	let r = [], i = {
		x: e.x - n,
		y: e.y - n,
		width: n * 2,
		height: n * 2
	};
	for (let e of t.values()) Ee(i, Se(e)) > 0 && r.push(e);
	return r;
}
var Gt = 250;
function Kt(e, t, n, r) {
	let i = [], a = Infinity, o = Wt(e, n, t + Gt);
	for (let n of o) {
		let o = [...n.internals.handleBounds?.source ?? [], ...n.internals.handleBounds?.target ?? []];
		for (let s of o) {
			if (r.nodeId === s.nodeId && r.type === s.type && r.id === s.id) continue;
			let { x: o, y: c } = gt(n, s, s.position, !0), l = Math.sqrt((o - e.x) ** 2 + (c - e.y) ** 2);
			l > t || (l < a ? (i = [{
				...s,
				x: o,
				y: c
			}], a = l) : l === a && i.push({
				...s,
				x: o,
				y: c
			}));
		}
	}
	if (!i.length) return null;
	if (i.length > 1) {
		let e = r.type === `source` ? `target` : `source`;
		return i.find((t) => t.type === e) ?? i[0];
	}
	return i[0];
}
function qt(e, t, n, r, i, a = !1) {
	let o = r.get(e);
	if (!o) return null;
	let s = i === `strict` ? o.internals.handleBounds?.[t] : [...o.internals.handleBounds?.source ?? [], ...o.internals.handleBounds?.target ?? []], c = (n ? s?.find((e) => e.id === n) : s?.[0]) ?? null;
	return c && a ? {
		...c,
		...gt(o, c, c.position, !0)
	} : c;
}
function Jt(e, t) {
	return e || (t?.classList.contains(`target`) ? `target` : t?.classList.contains(`source`) ? `source` : null);
}
function Yt(e, t) {
	let n = null;
	return t ? n = !0 : e && !t && (n = !1), n;
}
var Xt = () => !0;
function Zt(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: i, edgeUpdaterType: a, isTarget: o, domNode: s, nodeLookup: c, lib: l, autoPanOnConnect: u, flowId: d, panBy: f, cancelConnection: p, onConnectStart: m, onConnect: h, onConnectEnd: g, isValidConnection: _ = Xt, onReconnectEnd: v, updateConnection: y, getTransform: b, getFromHandle: x, autoPanSpeed: S, dragThreshold: C = 1, handleDomNode: w }) {
	let T = Ge(e.target), E = 0, D, { x: O, y: k } = X(e), A = Jt(a, w), j = s?.getBoundingClientRect(), M = !1;
	if (!j || !A) return;
	let N = qt(i, A, r, c, t);
	if (!N) return;
	let P = X(e, j), F = !1, I = null, L = !1, R = null;
	function z() {
		if (!u || !j) return;
		let [e, t] = ve(P, j, S);
		f({
			x: e,
			y: t
		}), E = requestAnimationFrame(z);
	}
	let B = {
		...N,
		nodeId: i,
		type: A,
		position: N.position
	}, V = c.get(i), H = {
		inProgress: !0,
		isValid: null,
		from: gt(V, B, K.Left, !0),
		fromHandle: B,
		fromPosition: B.position,
		fromNode: V,
		to: P,
		toHandle: null,
		toPosition: te[B.position],
		toNode: null,
		pointer: P
	};
	function U() {
		M = !0, y(H), m?.(e, {
			nodeId: i,
			handleId: r,
			handleType: A
		});
	}
	C === 0 && U();
	function W(e) {
		if (!M) {
			let { x: t, y: n } = X(e), r = t - O, i = n - k;
			if (!(r * r + i * i > C * C)) return;
			U();
		}
		if (!x() || !B) {
			G(e);
			return;
		}
		let a = b();
		P = X(e, j), D = Kt(Ae(P, a, !1, [1, 1]), n, c, B), F ||= (z(), !0);
		let s = Qt(e, {
			handle: D,
			connectionMode: t,
			fromNodeId: i,
			fromHandleId: r,
			fromType: o ? `target` : `source`,
			isValidConnection: _,
			doc: T,
			lib: l,
			flowId: d,
			nodeLookup: c
		});
		R = s.handleDomNode, I = s.connection, L = Yt(!!D, s.isValid);
		let u = c.get(i), f = u ? gt(u, B, K.Left, !0) : H.from, p = {
			...H,
			from: f,
			isValid: L,
			to: s.toHandle && L ? je({
				x: s.toHandle.x,
				y: s.toHandle.y
			}, a) : P,
			toHandle: s.toHandle,
			toPosition: L && s.toHandle ? s.toHandle.position : te[B.position],
			toNode: s.toHandle ? c.get(s.toHandle.nodeId) : null,
			pointer: P
		};
		y(p), H = p;
	}
	function G(e) {
		if (!(`touches` in e && e.touches.length > 0)) {
			if (M) {
				(D || R) && I && L && h?.(I);
				let { inProgress: t, ...n } = H, r = {
					...n,
					toPosition: H.toHandle ? H.toPosition : null
				};
				g?.(e, r), a && v?.(e, r);
			}
			p(), cancelAnimationFrame(E), F = !1, L = !1, I = null, R = null, T.removeEventListener(`mousemove`, W), T.removeEventListener(`mouseup`, G), T.removeEventListener(`touchmove`, W), T.removeEventListener(`touchend`, G);
		}
	}
	T.addEventListener(`mousemove`, W), T.addEventListener(`mouseup`, G), T.addEventListener(`touchmove`, W), T.addEventListener(`touchend`, G);
}
function Qt(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: i, fromType: a, doc: o, lib: s, flowId: c, isValidConnection: l = Xt, nodeLookup: u }) {
	let d = a === `target`, f = t ? o.querySelector(`.${s}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: p, y: m } = X(e), h = o.elementFromPoint(p, m), g = h?.classList.contains(`${s}-flow__handle`) ? h : f, _ = {
		handleDomNode: g,
		isValid: !1,
		connection: null,
		toHandle: null
	};
	if (g) {
		let e = Jt(void 0, g), t = g.getAttribute(`data-nodeid`), a = g.getAttribute(`data-handleid`), o = g.classList.contains(`connectable`), s = g.classList.contains(`connectableend`);
		if (!t || !e) return _;
		let c = {
			source: d ? t : r,
			sourceHandle: d ? a : i,
			target: d ? r : t,
			targetHandle: d ? i : a
		};
		_.connection = c, _.isValid = o && s && (n === V.Strict ? d && e === `source` || !d && e === `target` : t !== r || a !== i) && l(c), _.toHandle = qt(t, e, a, u, n, !0);
	}
	return _;
}
var $t = {
	onPointerDown: Zt,
	isValid: Qt
};
function en({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
	let i = f(e);
	function a({ translateExtent: e, width: a, height: o, zoomStep: s = 1, pannable: c = !0, zoomable: l = !0, inversePan: u = !1 }) {
		let d = (e) => {
			if (e.sourceEvent.type !== `wheel` || !t) return;
			let r = n(), i = e.sourceEvent.ctrlKey && Ie() ? 10 : 1, a = -e.sourceEvent.deltaY * (e.sourceEvent.deltaMode === 1 ? .05 : e.sourceEvent.deltaMode ? 1 : .002) * s, o = r[2] * 2 ** (a * i);
			t.scaleTo(o);
		}, f = [0, 0], p = C().on(`start`, (e) => {
			(e.sourceEvent.type === `mousedown` || e.sourceEvent.type === `touchstart`) && (f = [e.sourceEvent.clientX ?? e.sourceEvent.touches[0].clientX, e.sourceEvent.clientY ?? e.sourceEvent.touches[0].clientY]);
		}).on(`zoom`, c ? (i) => {
			let s = n();
			if (i.sourceEvent.type !== `mousemove` && i.sourceEvent.type !== `touchmove` || !t) return;
			let c = [i.sourceEvent.clientX ?? i.sourceEvent.touches[0].clientX, i.sourceEvent.clientY ?? i.sourceEvent.touches[0].clientY], l = [c[0] - f[0], c[1] - f[1]];
			f = c;
			let d = r() * Math.max(s[2], Math.log(s[2])) * (u ? -1 : 1), p = {
				x: s[0] - l[0] * d,
				y: s[1] - l[1] * d
			}, m = [[0, 0], [a, o]];
			t.setViewportConstrained({
				x: p.x,
				y: p.y,
				zoom: s[2]
			}, m, e);
		} : null).on(`zoom.wheel`, l ? d : null);
		i.call(p, {});
	}
	function o() {
		i.on(`zoom`, null);
	}
	return {
		update: a,
		destroy: o,
		pointer: h
	};
}
var tn = (e) => ({
	x: e.x,
	y: e.y,
	zoom: e.k
}), nn = ({ x: e, y: t, zoom: n }) => y.translate(e, t).scale(n), rn = (e, t) => e.target.closest(`.${t}`), an = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), on = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, sn = (e, t = 0, n = on, r = () => {}) => {
	let i = typeof t == `number` && t > 0;
	return i || r(), i ? e.transition().duration(t).ease(n).on(`end`, r) : e;
}, cn = (e) => {
	let t = e.ctrlKey && Ie() ? 10 : 1;
	return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * t;
};
function ln({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: i, panOnScrollSpeed: a, zoomOnPinch: o, onPanZoomStart: s, onPanZoom: c, onPanZoomEnd: l }) {
	return (u) => {
		if (rn(u, t)) return u.ctrlKey && u.preventDefault(), !1;
		u.preventDefault(), u.stopImmediatePropagation();
		let d = n.property(`__zoom`).k || 1;
		if (u.ctrlKey && o) {
			let e = h(u), t = d * 2 ** cn(u);
			r.scaleTo(n, t, e, u);
			return;
		}
		let f = u.deltaMode === 1 ? 20 : 1, p = i === H.Vertical ? 0 : u.deltaX * f, m = i === H.Horizontal ? 0 : u.deltaY * f;
		!Ie() && u.shiftKey && i !== H.Vertical && (p = u.deltaY * f, m = 0), r.translateBy(n, -(p / d) * a, -(m / d) * a, { internal: !0 });
		let g = tn(n.property(`__zoom`));
		clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (c?.(u, g), e.panScrollTimeout = setTimeout(() => {
			l?.(u, g), e.isPanScrolling = !1;
		}, 150)) : (e.isPanScrolling = !0, s?.(u, g));
	};
}
function un({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
	return function(r, i) {
		let a = r.type === `wheel`, o = !t && a && !r.ctrlKey, s = rn(r, e);
		if (r.ctrlKey && a && s && r.preventDefault(), o || s) return null;
		r.preventDefault(), n.call(this, r, i);
	};
}
function dn({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
	return (r) => {
		if (r.sourceEvent?.internal) return;
		let i = tn(r.transform);
		e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = i, r.sourceEvent?.type === `mousedown` && t(!0), n && n?.(r.sourceEvent, i);
	};
}
function fn({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: i }) {
	return (a) => {
		e.usedRightMouseButton = !!(n && an(t, e.mouseButton ?? 0)), a.sourceEvent?.sync || r([
			a.transform.x,
			a.transform.y,
			a.transform.k
		]), i && !a.sourceEvent?.internal && i?.(a.sourceEvent, tn(a.transform));
	};
}
function pn({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: i, onPaneContextMenu: a }) {
	return (o) => {
		if (!o.sourceEvent?.internal && (e.isZoomingOrPanning = !1, a && an(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && o.sourceEvent && a(o.sourceEvent), e.usedRightMouseButton = !1, r(!1), i)) {
			let t = tn(o.transform);
			e.prevViewport = t, clearTimeout(e.timerId), e.timerId = setTimeout(() => {
				i?.(o.sourceEvent, t);
			}, n ? 150 : 0);
		}
	};
}
function mn({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: i, zoomOnDoubleClick: a, userSelectionActive: o, noWheelClassName: s, noPanClassName: c, lib: l, connectionInProgress: u }) {
	return (d) => {
		let f = e || t, p = n && d.ctrlKey, m = d.type === `wheel`;
		if (d.button === 1 && d.type === `mousedown` && (rn(d, `${l}-flow__node`) || rn(d, `${l}-flow__edge`))) return !0;
		if (!r && !f && !i && !a && !n || o || u && !m || rn(d, s) && m || rn(d, c) && (!m || i && m && !e) || !n && d.ctrlKey && m) return !1;
		if (!n && d.type === `touchstart` && d.touches?.length > 1) return d.preventDefault(), !1;
		if (!f && !i && !p && m || !r && (d.type === `mousedown` || d.type === `touchstart`) || Array.isArray(r) && !r.includes(d.button) && d.type === `mousedown`) return !1;
		let h = Array.isArray(r) && r.includes(d.button) || !d.button || d.button <= 1;
		return (!d.ctrlKey || m) && h;
	};
}
function hn({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: i, onPanZoom: a, onPanZoomStart: o, onPanZoomEnd: s, onDraggingChange: c }) {
	let l = {
		isZoomingOrPanning: !1,
		usedRightMouseButton: !1,
		prevViewport: {},
		mouseButton: 0,
		timerId: void 0,
		panScrollTimeout: void 0,
		isPanScrolling: !1
	}, u = e.getBoundingClientRect(), d = C().scaleExtent([t, n]).translateExtent(r), p = f(e).call(d);
	b({
		x: i.x,
		y: i.y,
		zoom: he(i.zoom, t, n)
	}, [[0, 0], [u.width, u.height]], r);
	let m = p.on(`wheel.zoom`), h = p.on(`dblclick.zoom`);
	d.wheelDelta(cn);
	async function g(e, t) {
		return p ? new Promise((n) => {
			d?.interpolate(t?.interpolate === `linear` ? _ : S).transform(sn(p, t?.duration, t?.ease, () => n(!0)), e);
		}) : !1;
	}
	function v({ noWheelClassName: e, noPanClassName: t, onPaneContextMenu: n, userSelectionActive: r, panOnScroll: i, panOnDrag: u, panOnScrollMode: f, panOnScrollSpeed: g, preventScrolling: _, zoomOnPinch: v, zoomOnScroll: b, zoomOnDoubleClick: x, zoomActivationKeyPressed: S, lib: C, onTransformChange: w, connectionInProgress: T, paneClickDistance: E, selectionOnDrag: D }) {
		r && !l.isZoomingOrPanning && y();
		let O = i && !S && !r;
		d.clickDistance(D ? Infinity : !J(E) || E < 0 ? 0 : E);
		let k = O ? ln({
			zoomPanValues: l,
			noWheelClassName: e,
			d3Selection: p,
			d3Zoom: d,
			panOnScrollMode: f,
			panOnScrollSpeed: g,
			zoomOnPinch: v,
			onPanZoomStart: o,
			onPanZoom: a,
			onPanZoomEnd: s
		}) : un({
			noWheelClassName: e,
			preventScrolling: _,
			d3ZoomHandler: m
		});
		p.on(`wheel.zoom`, k, { passive: !1 });
		let A = dn({
			zoomPanValues: l,
			onDraggingChange: c,
			onPanZoomStart: o
		});
		d.on(`start`, A);
		let j = fn({
			zoomPanValues: l,
			panOnDrag: u,
			onPaneContextMenu: !!n,
			onPanZoom: a,
			onTransformChange: w
		});
		d.on(`zoom`, j);
		let M = pn({
			zoomPanValues: l,
			panOnDrag: u,
			panOnScroll: i,
			onPaneContextMenu: n,
			onPanZoomEnd: s,
			onDraggingChange: c
		});
		d.on(`end`, M);
		let N = mn({
			zoomActivationKeyPressed: S,
			panOnDrag: u,
			zoomOnScroll: b,
			panOnScroll: i,
			zoomOnDoubleClick: x,
			zoomOnPinch: v,
			userSelectionActive: r,
			noPanClassName: t,
			noWheelClassName: e,
			lib: C,
			connectionInProgress: T
		});
		d.filter(N), x ? p.on(`dblclick.zoom`, h) : p.on(`dblclick.zoom`, null);
	}
	function y() {
		d.on(`zoom`, null);
	}
	async function b(e, t, n) {
		let r = nn(e), i = d?.constrain()(r, t, n);
		return i && await g(i), i;
	}
	async function w(e, t) {
		let n = nn(e);
		return await g(n, t), n;
	}
	function T(e) {
		if (p) {
			let t = nn(e), n = p.property(`__zoom`);
			(n.k !== e.zoom || n.x !== e.x || n.y !== e.y) && d?.transform(p, t, null, { sync: !0 });
		}
	}
	function E() {
		let e = p ? x(p.node()) : {
			x: 0,
			y: 0,
			k: 1
		};
		return {
			x: e.x,
			y: e.y,
			zoom: e.k
		};
	}
	async function D(e, t) {
		return p ? new Promise((n) => {
			d?.interpolate(t?.interpolate === `linear` ? _ : S).scaleTo(sn(p, t?.duration, t?.ease, () => n(!0)), e);
		}) : !1;
	}
	async function O(e, t) {
		return p ? new Promise((n) => {
			d?.interpolate(t?.interpolate === `linear` ? _ : S).scaleBy(sn(p, t?.duration, t?.ease, () => n(!0)), e);
		}) : !1;
	}
	function k(e) {
		d?.scaleExtent(e);
	}
	function A(e) {
		d?.translateExtent(e);
	}
	function j(e) {
		let t = !J(e) || e < 0 ? 0 : e;
		d?.clickDistance(t);
	}
	return {
		update: v,
		destroy: y,
		setViewport: w,
		setViewportConstrained: b,
		getViewport: E,
		scaleTo: D,
		scaleBy: O,
		setScaleExtent: k,
		setTranslateExtent: A,
		syncViewport: T,
		setClickDistance: j
	};
}
var gn;
(function(e) {
	e.Line = `line`, e.Handle = `handle`;
})(gn ||= {});
function _n({ width: e, prevWidth: t, height: n, prevHeight: r, affectsX: i, affectsY: a }) {
	let o = e - t, s = n - r, c = [o > 0 ? 1 : o < 0 ? -1 : 0, s > 0 ? 1 : s < 0 ? -1 : 0];
	return o && i && (c[0] *= -1), s && a && (c[1] *= -1), c;
}
function vn(e) {
	return {
		isHorizontal: e.includes(`right`) || e.includes(`left`),
		isVertical: e.includes(`bottom`) || e.includes(`top`),
		affectsX: e.includes(`left`),
		affectsY: e.includes(`top`)
	};
}
function yn(e, t) {
	return Math.max(0, t - e);
}
function bn(e, t) {
	return Math.max(0, e - t);
}
function xn(e, t, n) {
	return Math.max(0, t - e, e - n);
}
function Sn(e, t) {
	return e ? !t : t;
}
function Cn(e, t, n, r, i, a, o, s) {
	let { affectsX: c, affectsY: l } = t, { isHorizontal: u, isVertical: d } = t, f = u && d, { xSnapped: p, ySnapped: m } = n, { minWidth: h, maxWidth: g, minHeight: _, maxHeight: v } = r, { x: y, y: b, width: x, height: S, aspectRatio: C } = e, w = Math.floor(u ? p - e.pointerX : 0), T = Math.floor(d ? m - e.pointerY : 0), E = x + (c ? -w : w), D = S + (l ? -T : T), O = -a[0] * x, k = -a[1] * S, A = xn(E, h, g), j = xn(D, _, v);
	if (o) {
		let e = 0, t = 0;
		c && w < 0 ? e = yn(y + w + O, o[0][0]) : !c && w > 0 && (e = bn(y + E + O, o[1][0])), l && T < 0 ? t = yn(b + T + k, o[0][1]) : !l && T > 0 && (t = bn(b + D + k, o[1][1])), A = Math.max(A, e), j = Math.max(j, t);
	}
	if (s) {
		let e = 0, t = 0;
		c && w > 0 ? e = bn(y + w, s[0][0]) : !c && w < 0 && (e = yn(y + E, s[1][0])), l && T > 0 ? t = bn(b + T, s[0][1]) : !l && T < 0 && (t = yn(b + D, s[1][1])), A = Math.max(A, e), j = Math.max(j, t);
	}
	if (i) {
		if (u) {
			let e = xn(E / C, _, v) * C;
			if (A = Math.max(A, e), o) {
				let e = 0;
				e = !c && !l || c && !l && f ? bn(b + k + E / C, o[1][1]) * C : yn(b + k + (c ? w : -w) / C, o[0][1]) * C, A = Math.max(A, e);
			}
			if (s) {
				let e = 0;
				e = !c && !l || c && !l && f ? yn(b + E / C, s[1][1]) * C : bn(b + (c ? w : -w) / C, s[0][1]) * C, A = Math.max(A, e);
			}
		}
		if (d) {
			let e = xn(D * C, h, g) / C;
			if (j = Math.max(j, e), o) {
				let e = 0;
				e = !c && !l || l && !c && f ? bn(y + D * C + O, o[1][0]) / C : yn(y + (l ? T : -T) * C + O, o[0][0]) / C, j = Math.max(j, e);
			}
			if (s) {
				let e = 0;
				e = !c && !l || l && !c && f ? yn(y + D * C, s[1][0]) / C : bn(y + (l ? T : -T) * C, s[0][0]) / C, j = Math.max(j, e);
			}
		}
	}
	T += T < 0 ? j : -j, w += w < 0 ? A : -A, i && (f ? E > D * C ? T = (Sn(c, l) ? -w : w) / C : w = (Sn(c, l) ? -T : T) * C : u ? (T = w / C, l = c) : (w = T * C, c = l));
	let M = c ? y + w : y, N = l ? b + T : b;
	return {
		width: x + (c ? -w : w),
		height: S + (l ? -T : T),
		x: a[0] * w * (c ? -1 : 1) + M,
		y: a[1] * T * (l ? -1 : 1) + N
	};
}
var wn = {
	width: 0,
	height: 0,
	x: 0,
	y: 0
}, Tn = {
	...wn,
	pointerX: 0,
	pointerY: 0,
	aspectRatio: 1
};
function En(e, t, n) {
	let r = t.position.x + e.position.x, i = t.position.y + e.position.y, a = e.measured.width ?? 0, o = e.measured.height ?? 0, s = n[0] * a, c = n[1] * o;
	return [[r - s, i - c], [r + a - s, i + o - c]];
}
function Dn({ domNode: e, nodeId: t, getStoreItems: n, onChange: r, onEnd: i }) {
	let a = f(e), o = {
		controlDirection: vn(`bottom-right`),
		boundaries: {
			minWidth: 0,
			minHeight: 0,
			maxWidth: Number.MAX_VALUE,
			maxHeight: Number.MAX_VALUE
		},
		resizeDirection: void 0,
		keepAspectRatio: !1
	};
	function s({ controlPosition: e, boundaries: s, keepAspectRatio: c, resizeDirection: l, onResizeStart: u, onResize: d, onResizeEnd: f, shouldResize: p }) {
		let m = { ...wn }, h = { ...Tn };
		o = {
			boundaries: s,
			resizeDirection: l,
			keepAspectRatio: c,
			controlDirection: vn(e)
		};
		let g, _ = null, v = [], y, b, x, S = !1, C = I().on(`start`, (e) => {
			let { nodeLookup: r, transform: i, snapGrid: a, snapToGrid: o, nodeOrigin: s, paneDomNode: c } = n();
			if (g = r.get(t), !g) return;
			_ = c?.getBoundingClientRect() ?? null;
			let { xSnapped: l, ySnapped: d } = Ue(e.sourceEvent, {
				transform: i,
				snapGrid: a,
				snapToGrid: o,
				containerBounds: _
			});
			m = {
				width: g.measured.width ?? 0,
				height: g.measured.height ?? 0,
				x: g.position.x ?? 0,
				y: g.position.y ?? 0
			}, h = {
				...m,
				pointerX: l,
				pointerY: d,
				aspectRatio: m.width / m.height
			}, y = void 0, b = Le(g.extent) ? g.extent : void 0, g.parentId && (g.extent === `parent` || g.expandParent) && (y = r.get(g.parentId)), y && g.extent === `parent` && (b = [[0, 0], [y.measured.width, y.measured.height]]), v = [], x = void 0;
			for (let [e, n] of r) if (n.parentId === t && (v.push({
				id: e,
				position: { ...n.position },
				extent: n.extent
			}), n.extent === `parent` || n.expandParent)) {
				let e = En(n, g, n.origin ?? s);
				x = x ? [[Math.min(e[0][0], x[0][0]), Math.min(e[0][1], x[0][1])], [Math.max(e[1][0], x[1][0]), Math.max(e[1][1], x[1][1])]] : e;
			}
			u?.(e, { ...m });
		}).on(`drag`, (e) => {
			let { transform: t, snapGrid: i, snapToGrid: a, nodeOrigin: s } = n(), c = Ue(e.sourceEvent, {
				transform: t,
				snapGrid: i,
				snapToGrid: a,
				containerBounds: _
			}), l = [];
			if (!g) return;
			let { x: u, y: f, width: C, height: w } = m, T = {}, E = g.origin ?? s, { width: D, height: O, x: k, y: A } = Cn(h, o.controlDirection, c, o.boundaries, o.keepAspectRatio, E, b, x), j = D !== C, M = O !== w, N = k !== u && j, P = A !== f && M;
			if (!N && !P && !j && !M) return;
			if ((N || P || E[0] === 1 || E[1] === 1) && (T.x = N ? k : m.x, T.y = P ? A : m.y, m.x = T.x, m.y = T.y, v.length > 0)) {
				let e = k - u, t = A - f;
				for (let n of v) n.position = {
					x: n.position.x - e + E[0] * (D - C),
					y: n.position.y - t + E[1] * (O - w)
				}, l.push(n);
			}
			if ((j || M) && (T.width = j && (!o.resizeDirection || o.resizeDirection === `horizontal`) ? D : m.width, T.height = M && (!o.resizeDirection || o.resizeDirection === `vertical`) ? O : m.height, m.width = T.width, m.height = T.height), y && g.expandParent) {
				let e = E[0] * (T.width ?? 0);
				T.x && T.x < e && (m.x = e, h.x -= T.x - e);
				let t = E[1] * (T.height ?? 0);
				T.y && T.y < t && (m.y = t, h.y -= T.y - t);
			}
			let F = _n({
				width: m.width,
				prevWidth: C,
				height: m.height,
				prevHeight: w,
				affectsX: o.controlDirection.affectsX,
				affectsY: o.controlDirection.affectsY
			}), I = {
				...m,
				direction: F
			};
			p?.(e, I) !== !1 && (S = !0, d?.(e, I), r(T, l));
		}).on(`end`, (e) => {
			S &&= (f?.(e, { ...m }), i?.({ ...m }), !1);
		});
		a.call(C);
	}
	function c() {
		a.on(`.drag`, null);
	}
	return {
		update: s,
		destroy: c
	};
}
var On = n(((e) => {
	var n = t();
	function r(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var i = typeof Object.is == `function` ? Object.is : r, a = n.useState, o = n.useEffect, s = n.useLayoutEffect, c = n.useDebugValue;
	function l(e, t) {
		var n = t(), r = a({ inst: {
			value: n,
			getSnapshot: t
		} }), i = r[0].inst, l = r[1];
		return s(function() {
			i.value = n, i.getSnapshot = t, u(i) && l({ inst: i });
		}, [
			e,
			n,
			t
		]), o(function() {
			return u(i) && l({ inst: i }), e(function() {
				u(i) && l({ inst: i });
			});
		}, [e]), c(n), n;
	}
	function u(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !i(e, n);
		} catch {
			return !0;
		}
	}
	function d(e, t) {
		return t();
	}
	var f = typeof window > `u` || window.document === void 0 || window.document.createElement === void 0 ? d : l;
	e.useSyncExternalStore = n.useSyncExternalStore === void 0 ? f : n.useSyncExternalStore;
})), kn = n(((e, t) => {
	t.exports = On();
})), An = n(((e) => {
	var n = t(), r = kn();
	function i(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var a = typeof Object.is == `function` ? Object.is : i, o = r.useSyncExternalStore, s = n.useRef, c = n.useEffect, l = n.useMemo, u = n.useDebugValue;
	e.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
		var d = s(null);
		if (d.current === null) {
			var f = {
				hasValue: !1,
				value: null
			};
			d.current = f;
		} else f = d.current;
		d = l(function() {
			function e(e) {
				if (!o) {
					if (o = !0, s = e, e = r(e), i !== void 0 && f.hasValue) {
						var t = f.value;
						if (i(t, e)) return c = t;
					}
					return c = e;
				}
				if (t = c, a(s, e)) return t;
				var n = r(e);
				return i !== void 0 && i(t, n) ? (s = e, t) : (s = e, c = n);
			}
			var o = !1, s, c, l = n === void 0 ? null : n;
			return [function() {
				return e(t());
			}, l === null ? void 0 : function() {
				return e(l());
			}];
		}, [
			t,
			n,
			r,
			i
		]);
		var p = o(e, d[0], d[1]);
		return c(function() {
			f.hasValue = !0, f.value = p;
		}, [p]), u(p), p;
	};
})), jn = e(n(((e, t) => {
	t.exports = An();
}))(), 1), Mn = (e) => {
	let t, n = /* @__PURE__ */ new Set(), r = (e, r) => {
		let i = typeof e == `function` ? e(t) : e;
		if (!Object.is(i, t)) {
			let e = t;
			t = r ?? (typeof i != `object` || !i) ? i : Object.assign({}, t, i), n.forEach((n) => n(t, e));
		}
	}, i = () => t, a = {
		setState: r,
		getState: i,
		getInitialState: () => o,
		subscribe: (e) => (n.add(e), () => n.delete(e)),
		destroy: () => {
			n.clear();
		}
	}, o = t = e(r, i, a);
	return a;
}, Nn = (e) => e ? Mn(e) : Mn, { useDebugValue: Pn } = D.default, { useSyncExternalStoreWithSelector: Fn } = jn.default, In = (e) => e;
function Ln(e, t = In, n) {
	let r = Fn(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
	return Pn(r), r;
}
var Rn = (e, t) => {
	let n = Nn(e), r = (e, r = t) => Ln(n, e, r);
	return Object.assign(r, n), r;
}, zn = (e, t) => e ? Rn(e, t) : Rn;
function Z(e, t) {
	if (Object.is(e, t)) return !0;
	if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
	if (e instanceof Map && t instanceof Map) {
		if (e.size !== t.size) return !1;
		for (let [n, r] of e) if (!Object.is(r, t.get(n))) return !1;
		return !0;
	}
	if (e instanceof Set && t instanceof Set) {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	}
	let n = Object.keys(e);
	if (n.length !== Object.keys(t).length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || !Object.is(e[r], t[r])) return !1;
	return !0;
}
i();
var Bn = (0, D.createContext)(null), Vn = Bn.Provider, Hn = L.error001(`react`);
function Q(e, t) {
	let n = (0, D.useContext)(Bn);
	if (n === null) throw Error(Hn);
	return Ln(n, e, t);
}
function $() {
	let e = (0, D.useContext)(Bn);
	if (e === null) throw Error(Hn);
	return (0, D.useMemo)(() => ({
		getState: e.getState,
		setState: e.setState,
		subscribe: e.subscribe
	}), [e]);
}
var Un = { display: `none` }, Wn = {
	position: `absolute`,
	width: 1,
	height: 1,
	margin: -1,
	border: 0,
	padding: 0,
	overflow: `hidden`,
	clip: `rect(0px, 0px, 0px, 0px)`,
	clipPath: `inset(100%)`
}, Gn = `react-flow__node-desc`, Kn = `react-flow__edge-desc`, qn = `react-flow__aria-live`, Jn = (e) => e.ariaLiveMessage, Yn = (e) => e.ariaLabelConfig;
function Xn({ rfId: e }) {
	let t = Q(Jn);
	return (0, O.jsx)(`div`, {
		id: `${qn}-${e}`,
		"aria-live": `assertive`,
		"aria-atomic": `true`,
		style: Wn,
		children: t
	});
}
function Zn({ rfId: e, disableKeyboardA11y: t }) {
	let n = Q(Yn);
	return (0, O.jsxs)(O.Fragment, { children: [
		(0, O.jsx)(`div`, {
			id: `${Gn}-${e}`,
			style: Un,
			children: t ? n[`node.a11yDescription.default`] : n[`node.a11yDescription.keyboardDisabled`]
		}),
		(0, O.jsx)(`div`, {
			id: `${Kn}-${e}`,
			style: Un,
			children: n[`edge.a11yDescription.default`]
		}),
		!t && (0, O.jsx)(Xn, { rfId: e })
	] });
}
var Qn = (0, D.forwardRef)(({ position: e = `top-left`, children: t, className: n, style: r, ...i }, a) => (0, O.jsx)(`div`, {
	className: k([
		`react-flow__panel`,
		n,
		...`${e}`.split(`-`)
	]),
	style: r,
	ref: a,
	...i,
	children: t
}));
Qn.displayName = `Panel`;
var $n = `https://reactflow.dev?utm_source=attribution`;
function er({ proOptions: e, position: t = `bottom-right` }) {
	return e?.hideAttribution ? null : (0, O.jsx)(Qn, {
		position: t,
		className: `react-flow__attribution`,
		"data-message": `Please only hide this attribution when you are subscribed to React Flow Pro: ${$n}`,
		children: (0, O.jsx)(`a`, {
			href: $n,
			target: `_blank`,
			rel: `noopener noreferrer`,
			"aria-label": `React Flow attribution`,
			children: `React Flow`
		})
	});
}
var tr = (e) => {
	let t = [], n = [];
	for (let [, n] of e.nodeLookup) n.selected && t.push(n.internals.userNode);
	for (let [, t] of e.edgeLookup) t.selected && n.push(t);
	return {
		selectedNodes: t,
		selectedEdges: n
	};
}, nr = (e) => e.id;
function rr(e, t) {
	return Z(e.selectedNodes.map(nr), t.selectedNodes.map(nr)) && Z(e.selectedEdges.map(nr), t.selectedEdges.map(nr));
}
function ir({ onSelectionChange: e }) {
	let t = $(), { selectedNodes: n, selectedEdges: r } = Q(tr, rr);
	return (0, D.useEffect)(() => {
		let i = {
			nodes: n,
			edges: r
		};
		e?.(i), t.getState().onSelectionChangeHandlers.forEach((e) => e(i));
	}, [
		n,
		r,
		e
	]), null;
}
var ar = (e) => !!e.onSelectionChangeHandlers;
function or({ onSelectionChange: e }) {
	let t = Q(ar);
	return e || t ? (0, O.jsx)(ir, { onSelectionChange: e }) : null;
}
var sr = [0, 0], cr = {
	x: 0,
	y: 0,
	zoom: 1
}, lr = [...`nodes.edges.defaultNodes.defaultEdges.onConnect.onConnectStart.onConnectEnd.onClickConnectStart.onClickConnectEnd.nodesDraggable.autoPanOnNodeFocus.nodesConnectable.nodesFocusable.edgesFocusable.edgesReconnectable.elevateNodesOnSelect.elevateEdgesOnSelect.minZoom.maxZoom.nodeExtent.onNodesChange.onEdgesChange.elementsSelectable.connectionMode.snapGrid.snapToGrid.translateExtent.connectOnClick.defaultEdgeOptions.fitView.fitViewOptions.onNodesDelete.onEdgesDelete.onDelete.onNodeDrag.onNodeDragStart.onNodeDragStop.onSelectionDrag.onSelectionDragStart.onSelectionDragStop.onMoveStart.onMove.onMoveEnd.noPanClassName.nodeOrigin.autoPanOnConnect.autoPanOnNodeDrag.onError.connectionRadius.isValidConnection.selectNodesOnDrag.nodeDragThreshold.connectionDragThreshold.onBeforeDelete.debug.autoPanSpeed.ariaLabelConfig.zIndexMode`.split(`.`), `rfId`], ur = (e) => ({
	setNodes: e.setNodes,
	setEdges: e.setEdges,
	setMinZoom: e.setMinZoom,
	setMaxZoom: e.setMaxZoom,
	setTranslateExtent: e.setTranslateExtent,
	setNodeExtent: e.setNodeExtent,
	reset: e.reset,
	setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), dr = {
	translateExtent: R,
	nodeOrigin: sr,
	minZoom: .5,
	maxZoom: 2,
	elementsSelectable: !0,
	noPanClassName: `nopan`,
	rfId: `1`
};
function fr(e) {
	let { setNodes: t, setEdges: n, setMinZoom: r, setMaxZoom: i, setTranslateExtent: a, setNodeExtent: o, reset: s, setDefaultNodesAndEdges: c } = Q(ur, Z), l = $();
	(0, D.useEffect)(() => (c(e.defaultNodes, e.defaultEdges), () => {
		u.current = dr, s();
	}), []);
	let u = (0, D.useRef)(dr);
	return (0, D.useEffect)(() => {
		for (let s of lr) {
			let c = e[s];
			c !== u.current[s] && e[s] !== void 0 && (s === `nodes` ? t(c) : s === `edges` ? n(c) : s === `minZoom` ? r(c) : s === `maxZoom` ? i(c) : s === `translateExtent` ? a(c) : s === `nodeExtent` ? o(c) : s === `ariaLabelConfig` ? l.setState({ ariaLabelConfig: He(c) }) : s === `fitView` ? l.setState({ fitViewQueued: c }) : s === `fitViewOptions` ? l.setState({ fitViewOptions: c }) : l.setState({ [s]: c }));
		}
		u.current = e;
	}, lr.map((t) => e[t])), null;
}
function pr() {
	return typeof window > `u` || !window.matchMedia ? null : window.matchMedia(`(prefers-color-scheme: dark)`);
}
function mr(e) {
	let [t, n] = (0, D.useState)(e === `system` ? null : e);
	return (0, D.useEffect)(() => {
		if (e !== `system`) {
			n(e);
			return;
		}
		let t = pr(), r = () => n(t?.matches ? `dark` : `light`);
		return r(), t?.addEventListener(`change`, r), () => {
			t?.removeEventListener(`change`, r);
		};
	}, [e]), t === null ? pr()?.matches ? `dark` : `light` : t;
}
var hr = typeof document < `u` ? document : null;
function gr(e = null, t = {
	target: hr,
	actInsideInputWithModifier: !0
}) {
	let [n, r] = (0, D.useState)(!1), i = (0, D.useRef)(!1), a = (0, D.useRef)(/* @__PURE__ */ new Set([])), [o, s] = (0, D.useMemo)(() => {
		if (e !== null) {
			let t = (Array.isArray(e) ? e : [e]).filter((e) => typeof e == `string`).map((e) => e.replace(`+`, `
`).replace(`

`, `
+`).split(`
`));
			return [t, t.reduce((e, t) => e.concat(...t), [])];
		}
		return [[], []];
	}, [e]);
	return (0, D.useEffect)(() => {
		let n = t?.target ?? hr, c = t?.actInsideInputWithModifier ?? !0;
		if (e !== null) {
			let e = (e) => {
				if (i.current = e.ctrlKey || e.metaKey || e.shiftKey || e.altKey, (!i.current || i.current && !c) && qe(e)) return !1;
				let n = vr(e.code, s);
				if (a.current.add(e[n]), _r(o, a.current, !1)) {
					let n = e.composedPath?.()?.[0] || e.target, a = n?.nodeName === `BUTTON` || n?.nodeName === `A`;
					t.preventDefault !== !1 && (i.current || !a) && e.preventDefault(), r(!0);
				}
			}, l = (e) => {
				let t = vr(e.code, s);
				_r(o, a.current, !0) ? (r(!1), a.current.clear()) : a.current.delete(e[t]), e.key === `Meta` && a.current.clear(), i.current = !1;
			}, u = () => {
				a.current.clear(), r(!1);
			};
			return n?.addEventListener(`keydown`, e), n?.addEventListener(`keyup`, l), window.addEventListener(`blur`, u), window.addEventListener(`contextmenu`, u), () => {
				n?.removeEventListener(`keydown`, e), n?.removeEventListener(`keyup`, l), window.removeEventListener(`blur`, u), window.removeEventListener(`contextmenu`, u);
			};
		}
	}, [e, r]), n;
}
function _r(e, t, n) {
	return e.filter((e) => n || e.length === t.size).some((e) => e.every((e) => t.has(e)));
}
function vr(e, t) {
	return t.includes(e) ? `code` : `key`;
}
var yr = () => {
	let e = $();
	return (0, D.useMemo)(() => ({
		zoomIn: async (t) => {
			let { panZoom: n } = e.getState();
			return n ? n.scaleBy(1.2, t) : !1;
		},
		zoomOut: async (t) => {
			let { panZoom: n } = e.getState();
			return n ? n.scaleBy(1 / 1.2, t) : !1;
		},
		zoomTo: async (t, n) => {
			let { panZoom: r } = e.getState();
			return r ? r.scaleTo(t, n) : !1;
		},
		getZoom: () => e.getState().transform[2],
		setViewport: async (t, n) => {
			let { transform: [r, i, a], panZoom: o } = e.getState();
			return o ? (await o.setViewport({
				x: t.x ?? r,
				y: t.y ?? i,
				zoom: t.zoom ?? a
			}, n), !0) : !1;
		},
		getViewport: () => {
			let [t, n, r] = e.getState().transform;
			return {
				x: t,
				y: n,
				zoom: r
			};
		},
		setCenter: async (t, n, r) => e.getState().setCenter(t, n, r),
		fitBounds: async (t, n) => {
			let { width: r, height: i, minZoom: a, maxZoom: o, panZoom: s } = e.getState(), c = Fe(t, r, i, a, o, n?.padding ?? .1);
			return s ? (await s.setViewport(c, {
				duration: n?.duration,
				ease: n?.ease,
				interpolate: n?.interpolate
			}), !0) : !1;
		},
		screenToFlowPosition: (t, n = {}) => {
			let { transform: r, snapGrid: i, snapToGrid: a, domNode: o } = e.getState();
			if (!o) return t;
			let { x: s, y: c } = o.getBoundingClientRect(), l = {
				x: t.x - s,
				y: t.y - c
			}, u = n.snapGrid ?? i;
			return Ae(l, r, n.snapToGrid ?? a, u);
		},
		flowToScreenPosition: (t) => {
			let { transform: n, domNode: r } = e.getState();
			if (!r) return t;
			let { x: i, y: a } = r.getBoundingClientRect(), o = je(t, n);
			return {
				x: o.x + i,
				y: o.y + a
			};
		}
	}), []);
};
function br(e, t) {
	let n = [], r = /* @__PURE__ */ new Map(), i = [];
	for (let t of e) if (t.type === `add`) {
		i.push(t);
		continue;
	} else if (t.type === `remove` || t.type === `replace`) r.set(t.id, [t]);
	else {
		let e = r.get(t.id);
		e ? e.push(t) : r.set(t.id, [t]);
	}
	for (let e of t) {
		let t = r.get(e.id);
		if (!t) {
			n.push(e);
			continue;
		}
		if (t[0].type === `remove`) continue;
		if (t[0].type === `replace`) {
			n.push({ ...t[0].item });
			continue;
		}
		let i = { ...e };
		for (let e of t) xr(e, i);
		n.push(i);
	}
	return i.length && i.forEach((e) => {
		e.index === void 0 ? n.push({ ...e.item }) : n.splice(e.index, 0, { ...e.item });
	}), n;
}
function xr(e, t) {
	switch (e.type) {
		case `select`:
			t.selected = e.selected;
			break;
		case `position`:
			e.position !== void 0 && (t.position = e.position), e.dragging !== void 0 && (t.dragging = e.dragging);
			break;
		case `dimensions`:
			e.dimensions !== void 0 && (t.measured = { ...e.dimensions }, e.setAttributes && ((e.setAttributes === !0 || e.setAttributes === `width`) && (t.width = e.dimensions.width), (e.setAttributes === !0 || e.setAttributes === `height`) && (t.height = e.dimensions.height))), typeof e.resizing == `boolean` && (t.resizing = e.resizing);
			break;
	}
}
function Sr(e, t) {
	return br(e, t);
}
function Cr(e, t) {
	return br(e, t);
}
function wr(e, t) {
	return {
		id: e,
		type: `select`,
		selected: t
	};
}
function Tr(e, t = /* @__PURE__ */ new Set(), n = !1) {
	let r = [];
	for (let [i, a] of e) {
		let e = t.has(i);
		!(a.selected === void 0 && !e) && a.selected !== e && (n && (a.selected = e), r.push(wr(a.id, e)));
	}
	return r;
}
function Er({ items: e = [], lookup: t }) {
	let n = [], r = new Map(e.map((e) => [e.id, e]));
	for (let [r, i] of e.entries()) {
		let e = t.get(i.id), a = e?.internals?.userNode ?? e;
		a !== void 0 && a !== i && n.push({
			id: i.id,
			item: i,
			type: `replace`
		}), a === void 0 && n.push({
			item: i,
			type: `add`,
			index: r
		});
	}
	for (let [e] of t) r.get(e) === void 0 && n.push({
		id: e,
		type: `remove`
	});
	return n;
}
function Dr(e) {
	return {
		id: e.id,
		type: `remove`
	};
}
var Or = Oe(`React Flow`, `https://reactflow.dev/`);
function kr(e, t, n = {}) {
	return at(e, t, {
		...n,
		onError: n.onError ?? Or
	});
}
var Ar = (e) => ie(e), jr = (e) => re(e);
function Mr(e) {
	return (0, D.forwardRef)(e);
}
var Nr = typeof window < `u` ? D.useLayoutEffect : D.useEffect;
function Pr(e) {
	let [t, n] = (0, D.useState)(BigInt(0)), [r] = (0, D.useState)(() => Fr(() => n((e) => e + BigInt(1))));
	return Nr(() => {
		let t = r.get();
		t.length && (e(t), r.reset());
	}, [t]), r;
}
function Fr(e) {
	let t = [];
	return {
		get: () => t,
		reset: () => {
			t = [];
		},
		push: (n) => {
			t.push(n), e();
		}
	};
}
var Ir = (0, D.createContext)(null);
function Lr({ children: e }) {
	let t = $(), n = Pr((0, D.useCallback)((e) => {
		let { nodes: n = [], setNodes: r, hasDefaultNodes: i, onNodesChange: a, nodeLookup: o, fitViewQueued: s, onNodesChangeMiddlewareMap: c } = t.getState(), l = n;
		for (let t of e) l = typeof t == `function` ? t(l) : t;
		let u = Er({
			items: l,
			lookup: o
		});
		for (let e of c.values()) u = e(u);
		i && r(l), u.length > 0 ? a?.(u) : s && window.requestAnimationFrame(() => {
			let { fitViewQueued: e, nodes: n, setNodes: r } = t.getState();
			e && r(n);
		});
	}, [])), r = Pr((0, D.useCallback)((e) => {
		let { edges: n = [], setEdges: r, hasDefaultEdges: i, onEdgesChange: a, edgeLookup: o } = t.getState(), s = n;
		for (let t of e) s = typeof t == `function` ? t(s) : t;
		i ? r(s) : a && a(Er({
			items: s,
			lookup: o
		}));
	}, [])), i = (0, D.useMemo)(() => ({
		nodeQueue: n,
		edgeQueue: r
	}), []);
	return (0, O.jsx)(Ir.Provider, {
		value: i,
		children: e
	});
}
function Rr() {
	let e = (0, D.useContext)(Ir);
	if (!e) throw Error(`useBatchContext must be used within a BatchProvider`);
	return e;
}
var zr = (e) => !!e.panZoom;
function Br() {
	let e = yr(), t = $(), n = Rr(), r = Q(zr), i = (0, D.useMemo)(() => {
		let e = (e) => t.getState().nodeLookup.get(e), r = (e) => {
			n.nodeQueue.push(e);
		}, i = (e) => {
			n.edgeQueue.push(e);
		}, a = (e) => {
			let { nodeLookup: n, nodeOrigin: r } = t.getState(), i = Ar(e) ? e : n.get(e.id), a = i.parentId ? ze(i.position, i.measured, i.parentId, n, r) : i.position;
			return Se({
				...i,
				position: a,
				width: i.measured?.width ?? i.width,
				height: i.measured?.height ?? i.height
			});
		}, o = (e, t, n = { replace: !1 }) => {
			r((r) => r.map((r) => {
				if (r.id === e) {
					let e = typeof t == `function` ? t(r) : t;
					return n.replace && Ar(e) ? e : {
						...r,
						...e
					};
				}
				return r;
			}));
		}, s = (e, t, n = { replace: !1 }) => {
			i((r) => r.map((r) => {
				if (r.id === e) {
					let e = typeof t == `function` ? t(r) : t;
					return n.replace && jr(e) ? e : {
						...r,
						...e
					};
				}
				return r;
			}));
		};
		return {
			getNodes: () => t.getState().nodes.map((e) => ({ ...e })),
			getNode: (t) => e(t)?.internals.userNode,
			getInternalNode: e,
			getEdges: () => {
				let { edges: e = [] } = t.getState();
				return e.map((e) => ({ ...e }));
			},
			getEdge: (e) => t.getState().edgeLookup.get(e),
			setNodes: r,
			setEdges: i,
			addNodes: (e) => {
				let t = Array.isArray(e) ? e : [e];
				n.nodeQueue.push((e) => [...e, ...t]);
			},
			addEdges: (e) => {
				let t = Array.isArray(e) ? e : [e];
				n.edgeQueue.push((e) => [...e, ...t]);
			},
			toObject: () => {
				let { nodes: e = [], edges: n = [], transform: r } = t.getState(), [i, a, o] = r;
				return {
					nodes: e.map((e) => ({ ...e })),
					edges: n.map((e) => ({ ...e })),
					viewport: {
						x: i,
						y: a,
						zoom: o
					}
				};
			},
			deleteElements: async ({ nodes: e = [], edges: n = [] }) => {
				let { nodes: r, edges: i, onNodesDelete: a, onEdgesDelete: o, triggerNodeChanges: s, triggerEdgeChanges: c, onDelete: l, onBeforeDelete: u } = t.getState(), { nodes: d, edges: f } = await me({
					nodesToRemove: e,
					edgesToRemove: n,
					nodes: r,
					edges: i,
					onBeforeDelete: u
				}), p = f.length > 0, m = d.length > 0;
				if (p) {
					let e = f.map(Dr);
					o?.(f), c(e);
				}
				if (m) {
					let e = d.map(Dr);
					a?.(d), s(e);
				}
				return (m || p) && l?.({
					nodes: d,
					edges: f
				}), {
					deletedNodes: d,
					deletedEdges: f
				};
			},
			getIntersectingNodes: (e, n = !0, r) => {
				let i = De(e), o = i ? e : a(e), s = r !== void 0;
				return o ? (r || t.getState().nodes).filter((r) => {
					let a = t.getState().nodeLookup.get(r.id);
					if (a && !i && (r.id === e.id || !a.internals.positionAbsolute)) return !1;
					let c = Se(s ? r : a), l = Ee(c, o);
					return n && l > 0 || l >= c.width * c.height || l >= o.width * o.height;
				}) : [];
			},
			isNodeIntersecting: (e, t, n = !0) => {
				let r = De(e) ? e : a(e);
				if (!r) return !1;
				let i = Ee(r, t);
				return n && i > 0 || i >= t.width * t.height || i >= r.width * r.height;
			},
			updateNode: o,
			updateNodeData: (e, t, n = { replace: !1 }) => {
				o(e, (e) => {
					let r = typeof t == `function` ? t(e) : t;
					return n.replace ? {
						...e,
						data: r
					} : {
						...e,
						data: {
							...e.data,
							...r
						}
					};
				}, n);
			},
			updateEdge: s,
			updateEdgeData: (e, t, n = { replace: !1 }) => {
				s(e, (e) => {
					let r = typeof t == `function` ? t(e) : t;
					return n.replace ? {
						...e,
						data: r
					} : {
						...e,
						data: {
							...e.data,
							...r
						}
					};
				}, n);
			},
			getNodesBounds: (e) => {
				let { nodeLookup: n, nodeOrigin: r } = t.getState();
				return se(e, {
					nodeLookup: n,
					nodeOrigin: r
				});
			},
			getHandleConnections: ({ type: e, id: n, nodeId: r }) => Array.from(t.getState().connectionLookup.get(`${r}-${e}${n ? `-${n}` : ``}`)?.values() ?? []),
			getNodeConnections: ({ type: e, handleId: n, nodeId: r }) => Array.from(t.getState().connectionLookup.get(`${r}${e ? n ? `-${e}-${n}` : `-${e}` : ``}`)?.values() ?? []),
			fitView: async (e) => {
				let r = t.getState().fitViewResolver ?? Ve();
				return t.setState({
					fitViewQueued: !0,
					fitViewOptions: e,
					fitViewResolver: r
				}), n.nodeQueue.push((e) => [...e]), r.promise;
			}
		};
	}, []);
	return (0, D.useMemo)(() => ({
		...i,
		...e,
		viewportInitialized: r
	}), [r]);
}
var Vr = (e) => e.selected, Hr = typeof window < `u` ? window : void 0;
function Ur({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
	let n = $(), { deleteElements: r } = Br(), i = gr(e, { actInsideInputWithModifier: !1 }), a = gr(t, { target: Hr });
	(0, D.useEffect)(() => {
		if (i) {
			let { edges: e, nodes: t } = n.getState();
			r({
				nodes: t.filter(Vr),
				edges: e.filter(Vr)
			}), n.setState({ nodesSelectionActive: !1 });
		}
	}, [i]), (0, D.useEffect)(() => {
		n.setState({ multiSelectionActive: a });
	}, [a]);
}
function Wr(e) {
	let t = $();
	(0, D.useEffect)(() => {
		let n = () => {
			if (!e.current || !(e.current.checkVisibility?.() ?? !0)) return !1;
			let n = We(e.current);
			(n.height === 0 || n.width === 0) && t.getState().onError?.(`004`, L.error004()), t.setState({
				width: n.width || 500,
				height: n.height || 500
			});
		};
		if (e.current) {
			n(), window.addEventListener(`resize`, n);
			let t = new ResizeObserver(() => n());
			return t.observe(e.current), () => {
				window.removeEventListener(`resize`, n), t && e.current && t.unobserve(e.current);
			};
		}
	}, []);
}
var Gr = {
	position: `absolute`,
	width: `100%`,
	height: `100%`,
	top: 0,
	left: 0
}, Kr = (e) => ({
	userSelectionActive: e.userSelectionActive,
	lib: e.lib,
	connectionInProgress: e.connection.inProgress
});
function qr({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: r = !1, panOnScrollSpeed: i = .5, panOnScrollMode: a = H.Free, zoomOnDoubleClick: o = !0, panOnDrag: s = !0, defaultViewport: c, translateExtent: l, minZoom: u, maxZoom: d, zoomActivationKeyCode: f, preventScrolling: p = !0, children: m, noWheelClassName: h, noPanClassName: g, onViewportChange: _, isControlledViewport: v, paneClickDistance: y, selectionOnDrag: b }) {
	let x = $(), S = (0, D.useRef)(null), { userSelectionActive: C, lib: w, connectionInProgress: T } = Q(Kr, Z), E = gr(f), k = (0, D.useRef)();
	Wr(S);
	let A = (0, D.useCallback)((e) => {
		_?.({
			x: e[0],
			y: e[1],
			zoom: e[2]
		}), v || x.setState({ transform: e });
	}, [_, v]);
	return (0, D.useEffect)(() => {
		if (S.current) {
			k.current = hn({
				domNode: S.current,
				minZoom: u,
				maxZoom: d,
				translateExtent: l,
				viewport: c,
				onDraggingChange: (e) => x.setState((t) => t.paneDragging === e ? t : { paneDragging: e }),
				onPanZoomStart: (e, t) => {
					let { onViewportChangeStart: n, onMoveStart: r } = x.getState();
					r?.(e, t), n?.(t);
				},
				onPanZoom: (e, t) => {
					let { onViewportChange: n, onMove: r } = x.getState();
					r?.(e, t), n?.(t);
				},
				onPanZoomEnd: (e, t) => {
					let { onViewportChangeEnd: n, onMoveEnd: r } = x.getState();
					r?.(e, t), n?.(t);
				}
			});
			let { x: e, y: t, zoom: n } = k.current.getViewport();
			return x.setState({
				panZoom: k.current,
				transform: [
					e,
					t,
					n
				],
				domNode: S.current.closest(`.react-flow`)
			}), () => {
				k.current?.destroy();
			};
		}
	}, []), (0, D.useEffect)(() => {
		k.current?.update({
			onPaneContextMenu: e,
			zoomOnScroll: t,
			zoomOnPinch: n,
			panOnScroll: r,
			panOnScrollSpeed: i,
			panOnScrollMode: a,
			zoomOnDoubleClick: o,
			panOnDrag: s,
			zoomActivationKeyPressed: E,
			preventScrolling: p,
			noPanClassName: g,
			userSelectionActive: C,
			noWheelClassName: h,
			lib: w,
			onTransformChange: A,
			connectionInProgress: T,
			selectionOnDrag: b,
			paneClickDistance: y
		});
	}, [
		e,
		t,
		n,
		r,
		i,
		a,
		o,
		s,
		E,
		p,
		g,
		C,
		h,
		w,
		A,
		T,
		b,
		y
	]), (0, O.jsx)(`div`, {
		className: `react-flow__renderer`,
		ref: S,
		style: Gr,
		children: m
	});
}
var Jr = (e) => ({
	userSelectionActive: e.userSelectionActive,
	userSelectionRect: e.userSelectionRect
});
function Yr() {
	let { userSelectionActive: e, userSelectionRect: t } = Q(Jr, Z);
	return e && t ? (0, O.jsx)(`div`, {
		className: `react-flow__selection react-flow__container`,
		style: {
			width: t.width,
			height: t.height,
			transform: `translate(${t.x}px, ${t.y}px)`
		}
	}) : null;
}
var Xr = (e, t) => (n) => {
	n.target === t.current && e?.(n);
}, Zr = (e) => ({
	userSelectionActive: e.userSelectionActive,
	elementsSelectable: e.elementsSelectable,
	dragging: e.paneDragging,
	panBy: e.panBy,
	autoPanSpeed: e.autoPanSpeed
});
function Qr({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = U.Full, panOnDrag: r, autoPanOnSelection: i, paneClickDistance: a, selectionOnDrag: o, onSelectionStart: s, onSelectionEnd: c, onPaneClick: l, onPaneContextMenu: u, onPaneScroll: d, onPaneMouseEnter: f, onPaneMouseMove: p, onPaneMouseLeave: m, children: h }) {
	let g = (0, D.useRef)(0), _ = $(), { userSelectionActive: v, elementsSelectable: y, dragging: b, panBy: x, autoPanSpeed: S } = Q(Zr, Z), C = y && (e || v), w = (0, D.useRef)(null), T = (0, D.useRef)(), E = (0, D.useRef)(/* @__PURE__ */ new Set()), A = (0, D.useRef)(/* @__PURE__ */ new Set()), j = (0, D.useRef)(!1), M = (0, D.useRef)(!1), N = (0, D.useRef)({
		x: 0,
		y: 0
	}), P = (0, D.useRef)(!1), F = (e) => {
		if (M.current || j.current || _.getState().connection.inProgress) {
			M.current = !1, j.current = !1;
			return;
		}
		l?.(e), _.getState().resetSelectedElements(), _.setState({ nodesSelectionActive: !1 });
	}, I = (e) => {
		if (Array.isArray(r) && r?.includes(2)) {
			e.preventDefault();
			return;
		}
		u?.(e);
	}, L = d ? (e) => d(e) : void 0, R = (e) => {
		M.current &&= (e.stopPropagation(), !1);
	}, z = (n) => {
		let { domNode: r, transform: i } = _.getState();
		if (T.current = r?.getBoundingClientRect(), !T.current) return;
		let a = n.target === w.current;
		if (!a && n.target.closest(`.nokey`) || !e || !(o && a || t) || n.button !== 0 || !n.isPrimary) return;
		n.target?.setPointerCapture?.(n.pointerId), M.current = !1;
		let { x: s, y: c } = X(n.nativeEvent, T.current), l = Ae({
			x: s,
			y: c
		}, i);
		_.setState({ userSelectionRect: {
			width: 0,
			height: 0,
			startX: l.x,
			startY: l.y,
			x: s,
			y: c
		} }), a || (n.stopPropagation(), n.preventDefault());
	};
	function B(e, t) {
		let { userSelectionRect: r } = _.getState();
		if (!r) return;
		let { transform: i, nodeLookup: a, edgeLookup: o, connectionLookup: s, triggerNodeChanges: c, triggerEdgeChanges: l, defaultEdgeOptions: u } = _.getState(), d = {
			x: r.startX,
			y: r.startY
		}, { x: f, y: p } = je(d, i), m = {
			startX: d.x,
			startY: d.y,
			x: e < f ? e : f,
			y: t < p ? t : p,
			width: Math.abs(e - f),
			height: Math.abs(t - p)
		}, h = E.current, g = A.current;
		E.current = new Set(le(a, m, i, n === U.Partial, !0).map((e) => e.id)), A.current = /* @__PURE__ */ new Set();
		let v = u?.selectable ?? !0;
		for (let e of E.current) {
			let t = s.get(e);
			if (t) for (let { edgeId: e } of t.values()) {
				let t = o.get(e);
				t && (t.selectable ?? v) && A.current.add(e);
			}
		}
		Be(h, E.current) || c(Tr(a, E.current, !0)), Be(g, A.current) || l(Tr(o, A.current)), _.setState({
			userSelectionRect: m,
			userSelectionActive: !0,
			nodesSelectionActive: !1
		});
	}
	function V() {
		if (!i || !T.current) return;
		let [e, t] = ve(N.current, T.current, S);
		x({
			x: e,
			y: t
		}).then((e) => {
			if (!M.current || !e) {
				g.current = requestAnimationFrame(V);
				return;
			}
			let { x: t, y: n } = N.current;
			B(t, n), g.current = requestAnimationFrame(V);
		});
	}
	let H = () => {
		cancelAnimationFrame(g.current), g.current = 0, P.current = !1;
	};
	return (0, D.useEffect)(() => () => H(), []), (0, O.jsxs)(`div`, {
		className: k([`react-flow__pane`, {
			draggable: r === !0 || Array.isArray(r) && r.includes(0),
			dragging: b,
			selection: e
		}]),
		onClick: C ? void 0 : Xr(F, w),
		onContextMenu: Xr(I, w),
		onWheel: Xr(L, w),
		onPointerEnter: C ? void 0 : f,
		onPointerMove: C ? (e) => {
			let { userSelectionRect: n, transform: r, resetSelectedElements: i } = _.getState();
			if (!T.current || !n) return;
			let { x: o, y: c } = X(e.nativeEvent, T.current);
			N.current = {
				x: o,
				y: c
			};
			let l = je({
				x: n.startX,
				y: n.startY
			}, r);
			if (!M.current) {
				let n = t ? 0 : a;
				if (Math.hypot(o - l.x, c - l.y) <= n) return;
				i(), s?.(e);
			}
			M.current = !0, P.current ||= (V(), !0), B(o, c);
		} : p,
		onPointerUp: (e) => {
			if (!C) {
				e.target === w.current && _.getState().connection.inProgress && (j.current = !0);
				return;
			}
			e.button === 0 && (e.target?.releasePointerCapture?.(e.pointerId), !v && e.target === w.current && _.getState().userSelectionRect && F?.(e), _.setState({
				userSelectionActive: !1,
				userSelectionRect: null
			}), M.current && (c?.(e), _.setState({ nodesSelectionActive: E.current.size > 0 })), H());
		},
		onPointerCancel: C ? (e) => {
			e.target?.releasePointerCapture?.(e.pointerId), H();
		} : void 0,
		onPointerDownCapture: C ? z : void 0,
		onClickCapture: C ? R : void 0,
		onPointerLeave: m,
		ref: w,
		style: Gr,
		children: [h, (0, O.jsx)(Yr, {})]
	});
}
function $r({ id: e, store: t, unselect: n = !1, nodeRef: r }) {
	let { addSelectedNodes: i, unselectNodesAndEdges: a, multiSelectionActive: o, nodeLookup: s, onError: c } = t.getState(), l = s.get(e);
	if (!l) {
		c?.(`012`, L.error012(e));
		return;
	}
	t.setState({ nodesSelectionActive: !1 }), l.selected ? (n || l.selected && o) && (a({
		nodes: [l],
		edges: []
	}), requestAnimationFrame(() => r?.current?.blur())) : i([e]);
}
function ei({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: r, nodeId: i, isSelectable: a, nodeClickDistance: o }) {
	let s = $(), [c, l] = (0, D.useState)(!1), u = (0, D.useRef)();
	return (0, D.useEffect)(() => {
		u.current = Ut({
			getStoreItems: () => s.getState(),
			onNodeMouseDown: (t) => {
				$r({
					id: t,
					store: s,
					nodeRef: e
				});
			},
			onDragStart: () => {
				l(!0);
			},
			onDragStop: () => {
				l(!1);
			}
		});
	}, []), (0, D.useEffect)(() => {
		if (!(t || !e.current || !u.current)) return u.current.update({
			noDragClassName: n,
			handleSelector: r,
			domNode: e.current,
			isSelectable: a,
			nodeId: i,
			nodeClickDistance: o
		}), () => {
			u.current?.destroy();
		};
	}, [
		n,
		r,
		t,
		a,
		e,
		i,
		o
	]), c;
}
var ti = (e) => (t) => t.selected && (t.draggable || e && t.draggable === void 0);
function ni() {
	let e = $();
	return (0, D.useCallback)((t) => {
		let { nodeExtent: n, snapToGrid: r, snapGrid: i, nodesDraggable: a, onError: o, updateNodePositions: s, nodeLookup: c, nodeOrigin: l } = e.getState(), u = /* @__PURE__ */ new Map(), d = ti(a), f = r ? i[0] : 5, p = r ? i[1] : 5, m = t.direction.x * f * t.factor, h = t.direction.y * p * t.factor;
		for (let [, e] of c) {
			if (!d(e)) continue;
			let t = {
				x: e.internals.positionAbsolute.x + m,
				y: e.internals.positionAbsolute.y + h
			};
			r && (t = ke(t, i));
			let { position: a, positionAbsolute: s } = pe({
				nodeId: e.id,
				nextPosition: t,
				nodeLookup: c,
				nodeExtent: n,
				nodeOrigin: l,
				onError: o
			});
			e.position = a, e.internals.positionAbsolute = s, u.set(e.id, e);
		}
		s(u);
	}, []);
}
var ri = (0, D.createContext)(null), ii = ri.Provider;
ri.Consumer;
var ai = () => (0, D.useContext)(ri), oi = (e) => ({
	connectOnClick: e.connectOnClick,
	noPanClassName: e.noPanClassName,
	rfId: e.rfId
}), si = (0, D.createContext)(null);
function ci({ children: e }) {
	let t = Q(oi, Z);
	return (0, O.jsx)(si.Provider, {
		value: t,
		children: e
	});
}
function li() {
	let e = (0, D.useContext)(si);
	if (!e) throw Error(`useHandleConfig must be used within a HandleConfigProvider`);
	return e;
}
var ui = {
	connectingFrom: !1,
	connectingTo: !1,
	clickConnecting: !1,
	isPossibleEndHandle: !0,
	connectionInProcess: !1,
	clickConnectionInProcess: !1,
	valid: !1
}, di = (e, t, n) => (r) => {
	let { connectionClickStartHandle: i, connectionMode: a, connection: o } = r, { fromHandle: s, toHandle: c, isValid: l } = o;
	if (!s && !i) return ui;
	let u = c?.nodeId === e && c?.id === t && c?.type === n;
	return {
		connectingFrom: s?.nodeId === e && s?.id === t && s?.type === n,
		connectingTo: u,
		clickConnecting: i?.nodeId === e && i?.id === t && i?.type === n,
		isPossibleEndHandle: a === V.Strict ? s?.type !== n : e !== s?.nodeId || t !== s?.id,
		connectionInProcess: !!s,
		clickConnectionInProcess: !!i,
		valid: u && l
	};
};
function fi({ type: e = `source`, position: t = K.Top, isValidConnection: n, isConnectable: r = !0, isConnectableStart: i = !0, isConnectableEnd: a = !0, id: o, onConnect: s, children: c, className: l, onMouseDown: u, onTouchStart: d, ...f }, p) {
	let m = o || null, h = e === `target`, g = $(), _ = ai(), { connectOnClick: v, noPanClassName: y, rfId: b } = li(), { connectingFrom: x, connectingTo: S, clickConnecting: C, isPossibleEndHandle: w, connectionInProcess: T, clickConnectionInProcess: E, valid: D } = Q(di(_, m, e), Z);
	_ || g.getState().onError?.(`010`, L.error010());
	let A = (e) => {
		let { defaultEdgeOptions: t, onConnect: n, hasDefaultEdges: r } = g.getState(), i = {
			...t,
			...e
		};
		if (r) {
			let { edges: e, setEdges: t, onError: n } = g.getState();
			t(kr(i, e, { onError: n }));
		}
		n?.(i), s?.(i);
	}, j = (e) => {
		if (!_) return;
		let t = Je(e.nativeEvent);
		if (i && (t && e.button === 0 || !t)) {
			let t = g.getState();
			$t.onPointerDown(e.nativeEvent, {
				handleDomNode: e.currentTarget,
				autoPanOnConnect: t.autoPanOnConnect,
				connectionMode: t.connectionMode,
				connectionRadius: t.connectionRadius,
				domNode: t.domNode,
				nodeLookup: t.nodeLookup,
				lib: t.lib,
				isTarget: h,
				handleId: m,
				nodeId: _,
				flowId: t.rfId,
				panBy: t.panBy,
				cancelConnection: t.cancelConnection,
				onConnectStart: t.onConnectStart,
				onConnectEnd: (...e) => g.getState().onConnectEnd?.(...e),
				updateConnection: t.updateConnection,
				onConnect: A,
				isValidConnection: n || ((...e) => g.getState().isValidConnection?.(...e) ?? !0),
				getTransform: () => g.getState().transform,
				getFromHandle: () => g.getState().connection.fromHandle,
				autoPanSpeed: t.autoPanSpeed,
				dragThreshold: t.connectionDragThreshold
			});
		}
		t ? u?.(e) : d?.(e);
	};
	return (0, O.jsx)(`div`, {
		"data-handleid": m,
		"data-nodeid": _,
		"data-handlepos": t,
		"data-id": `${b}-${_}-${m}-${e}`,
		className: k([
			`react-flow__handle`,
			`react-flow__handle-${t}`,
			`nodrag`,
			y,
			l,
			{
				source: !h,
				target: h,
				connectable: r,
				connectablestart: i,
				connectableend: a,
				clickconnecting: C,
				connectingfrom: x,
				connectingto: S,
				valid: D,
				connectionindicator: r && (!T || w) && (T || E ? a : i)
			}
		]),
		onMouseDown: j,
		onTouchStart: j,
		onClick: v ? (t) => {
			let { onClickConnectStart: r, onClickConnectEnd: a, connectionClickStartHandle: o, connectionMode: s, isValidConnection: c, lib: l, rfId: u, nodeLookup: d, connection: f } = g.getState();
			if (!_ || !o && !i) return;
			if (!o) {
				r?.(t.nativeEvent, {
					nodeId: _,
					handleId: m,
					handleType: e
				}), g.setState({ connectionClickStartHandle: {
					nodeId: _,
					type: e,
					id: m
				} });
				return;
			}
			let p = Ge(t.target), h = n || c, { connection: v, isValid: y } = $t.isValid(t.nativeEvent, {
				handle: {
					nodeId: _,
					id: m,
					type: e
				},
				connectionMode: s,
				fromNodeId: o.nodeId,
				fromHandleId: o.id || null,
				fromType: o.type,
				isValidConnection: h,
				flowId: u,
				doc: p,
				lib: l,
				nodeLookup: d
			});
			y && v && A(v);
			let b = structuredClone(f);
			delete b.inProgress, b.toPosition = b.toHandle ? b.toHandle.position : null, a?.(t, b), g.setState({ connectionClickStartHandle: null });
		} : void 0,
		ref: p,
		...f,
		children: c
	});
}
var pi = (0, D.memo)(Mr(fi));
function mi({ data: e, isConnectable: t, sourcePosition: n = K.Bottom }) {
	return (0, O.jsxs)(O.Fragment, { children: [e?.label, (0, O.jsx)(pi, {
		type: `source`,
		position: n,
		isConnectable: t
	})] });
}
function hi({ data: e, isConnectable: t, targetPosition: n = K.Top, sourcePosition: r = K.Bottom }) {
	return (0, O.jsxs)(O.Fragment, { children: [
		(0, O.jsx)(pi, {
			type: `target`,
			position: n,
			isConnectable: t
		}),
		e?.label,
		(0, O.jsx)(pi, {
			type: `source`,
			position: r,
			isConnectable: t
		})
	] });
}
function gi() {
	return null;
}
function _i({ data: e, isConnectable: t, targetPosition: n = K.Top }) {
	return (0, O.jsxs)(O.Fragment, { children: [(0, O.jsx)(pi, {
		type: `target`,
		position: n,
		isConnectable: t
	}), e?.label] });
}
var vi = {
	ArrowUp: {
		x: 0,
		y: -1
	},
	ArrowDown: {
		x: 0,
		y: 1
	},
	ArrowLeft: {
		x: -1,
		y: 0
	},
	ArrowRight: {
		x: 1,
		y: 0
	}
}, yi = {
	input: mi,
	default: hi,
	output: _i,
	group: gi
};
function bi(e) {
	return e.internals.handleBounds === void 0 ? {
		width: e.width ?? e.initialWidth ?? e.style?.width,
		height: e.height ?? e.initialHeight ?? e.style?.height
	} : {
		width: e.width ?? e.style?.width,
		height: e.height ?? e.style?.height
	};
}
var xi = (e) => {
	let { width: t, height: n, x: r, y: i } = ce(e.nodeLookup, { filter: (e) => !!e.selected });
	return {
		width: J(t) ? t : null,
		height: J(n) ? n : null,
		userSelectionActive: e.userSelectionActive,
		transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${i}px)`
	};
};
function Si({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
	let r = $(), { width: i, height: a, transformString: o, userSelectionActive: s } = Q(xi, Z), c = ni(), l = (0, D.useRef)(null);
	(0, D.useEffect)(() => {
		n || l.current?.focus({ preventScroll: !0 });
	}, [n]);
	let u = !s && i !== null && a !== null;
	if (ei({
		nodeRef: l,
		disabled: !u
	}), !u) return null;
	let d = e ? (t) => {
		e(t, r.getState().nodes.filter((e) => e.selected));
	} : void 0;
	return (0, O.jsx)(`div`, {
		className: k([
			`react-flow__nodesselection`,
			`react-flow__container`,
			t
		]),
		style: { transform: o },
		children: (0, O.jsx)(`div`, {
			ref: l,
			className: `react-flow__nodesselection-rect`,
			onContextMenu: d,
			tabIndex: n ? void 0 : -1,
			onKeyDown: n ? void 0 : (e) => {
				Object.prototype.hasOwnProperty.call(vi, e.key) && (e.preventDefault(), c({
					direction: vi[e.key],
					factor: e.shiftKey ? 4 : 1
				}));
			},
			style: {
				width: i,
				height: a
			}
		})
	});
}
var Ci = typeof window < `u` ? window : void 0, wi = (e) => ({
	nodesSelectionActive: e.nodesSelectionActive,
	userSelectionActive: e.userSelectionActive
});
function Ti({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: i, onPaneContextMenu: a, onPaneScroll: o, paneClickDistance: s, deleteKeyCode: c, selectionKeyCode: l, selectionOnDrag: u, selectionMode: d, onSelectionStart: f, onSelectionEnd: p, multiSelectionKeyCode: m, panActivationKeyCode: h, zoomActivationKeyCode: g, elementsSelectable: _, zoomOnScroll: v, zoomOnPinch: y, panOnScroll: b, panOnScrollSpeed: x, panOnScrollMode: S, zoomOnDoubleClick: C, panOnDrag: w, autoPanOnSelection: T, defaultViewport: E, translateExtent: D, minZoom: k, maxZoom: A, preventScrolling: j, onSelectionContextMenu: M, noWheelClassName: N, noPanClassName: P, disableKeyboardA11y: F, onViewportChange: I, isControlledViewport: L }) {
	let { nodesSelectionActive: R, userSelectionActive: z } = Q(wi, Z), B = gr(l, { target: Ci }), V = gr(h, { target: Ci }), H = V || w, U = V || b, W = u && H !== !0, G = B || z || W;
	return Ur({
		deleteKeyCode: c,
		multiSelectionKeyCode: m
	}), (0, O.jsx)(qr, {
		onPaneContextMenu: a,
		elementsSelectable: _,
		zoomOnScroll: v,
		zoomOnPinch: y,
		panOnScroll: U,
		panOnScrollSpeed: x,
		panOnScrollMode: S,
		zoomOnDoubleClick: C,
		panOnDrag: !B && H,
		defaultViewport: E,
		translateExtent: D,
		minZoom: k,
		maxZoom: A,
		zoomActivationKeyCode: g,
		preventScrolling: j,
		noWheelClassName: N,
		noPanClassName: P,
		onViewportChange: I,
		isControlledViewport: L,
		paneClickDistance: s,
		selectionOnDrag: W,
		children: (0, O.jsxs)(Qr, {
			onSelectionStart: f,
			onSelectionEnd: p,
			onPaneClick: t,
			onPaneMouseEnter: n,
			onPaneMouseMove: r,
			onPaneMouseLeave: i,
			onPaneContextMenu: a,
			onPaneScroll: o,
			panOnDrag: H,
			autoPanOnSelection: T,
			isSelecting: !!G,
			selectionMode: d,
			selectionKeyPressed: B,
			paneClickDistance: s,
			selectionOnDrag: W,
			children: [e, R && (0, O.jsx)(Si, {
				onSelectionContextMenu: M,
				noPanClassName: P,
				disableKeyboardA11y: F
			})]
		})
	});
}
Ti.displayName = `FlowRenderer`;
var Ei = (0, D.memo)(Ti), Di = (e) => (t) => e ? le(t.nodeLookup, {
	x: 0,
	y: 0,
	width: t.width,
	height: t.height
}, t.transform, !0).map((e) => e.id) : Array.from(t.nodeLookup.keys());
function Oi(e) {
	return Q((0, D.useCallback)(Di(e), [e]), Z);
}
var ki = (e) => e.updateNodeInternals;
function Ai() {
	let e = Q(ki), [t] = (0, D.useState)(() => typeof ResizeObserver > `u` ? null : new ResizeObserver((t) => {
		let n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = e.target.getAttribute(`data-id`);
			n.set(t, {
				id: t,
				nodeElement: e.target,
				force: !0
			});
		}), e(n);
	}));
	return (0, D.useEffect)(() => () => {
		t?.disconnect();
	}, [t]), t;
}
function ji({ node: e, nodeType: t, hasDimensions: n, resizeObserver: r }) {
	let i = $(), a = (0, D.useRef)(null), o = (0, D.useRef)(null), s = (0, D.useRef)(e.sourcePosition), c = (0, D.useRef)(e.targetPosition), l = (0, D.useRef)(t), u = n && !!e.internals.handleBounds;
	return (0, D.useEffect)(() => {
		a.current && !e.hidden && (!u || o.current !== a.current) && (o.current && r?.unobserve(o.current), r?.observe(a.current), o.current = a.current);
	}, [u, e.hidden]), (0, D.useEffect)(() => () => {
		o.current &&= (r?.unobserve(o.current), null);
	}, []), (0, D.useEffect)(() => {
		if (a.current) {
			let n = l.current !== t, r = s.current !== e.sourcePosition, o = c.current !== e.targetPosition;
			(n || r || o) && (l.current = t, s.current = e.sourcePosition, c.current = e.targetPosition, i.getState().updateNodeInternals(/* @__PURE__ */ new Map([[e.id, {
				id: e.id,
				nodeElement: a.current,
				force: !0
			}]])));
		}
	}, [
		e.id,
		t,
		e.sourcePosition,
		e.targetPosition
	]), a;
}
function Mi({ id: e, onClick: t, onMouseEnter: n, onMouseMove: r, onMouseLeave: i, onContextMenu: a, onDoubleClick: o, nodesDraggable: s, elementsSelectable: c, nodesConnectable: l, nodesFocusable: u, resizeObserver: d, noDragClassName: f, noPanClassName: p, disableKeyboardA11y: m, rfId: h, nodeTypes: g, nodeClickDistance: _, onError: v }) {
	let { node: y, internals: b, isParent: x } = Q((t) => {
		let n = t.nodeLookup.get(e), r = t.parentLookup.has(e);
		return {
			node: n,
			internals: n.internals,
			isParent: r
		};
	}, Z), S = y.type || `default`, C = g?.[S] || yi[S];
	C === void 0 && (v?.(`003`, L.error003(S)), S = `default`, C = g?.default || yi.default);
	let w = !!(y.draggable || s && y.draggable === void 0), T = !!(y.selectable || c && y.selectable === void 0), E = !!(y.connectable || l && y.connectable === void 0), D = !!(y.focusable || u && y.focusable === void 0), A = $(), j = Re(y), M = ji({
		node: y,
		nodeType: S,
		hasDimensions: j,
		resizeObserver: d
	}), N = ei({
		nodeRef: M,
		disabled: y.hidden || !w,
		noDragClassName: f,
		handleSelector: y.dragHandle,
		nodeId: e,
		isSelectable: T,
		nodeClickDistance: _
	}), P = ni();
	if (y.hidden) return null;
	let F = Y(y), I = bi(y), R = T || w || t || n || r || i, B = n ? (e) => n(e, { ...b.userNode }) : void 0, V = r ? (e) => r(e, { ...b.userNode }) : void 0, H = i ? (e) => i(e, { ...b.userNode }) : void 0, U = a ? (e) => a(e, { ...b.userNode }) : void 0, W = o ? (e) => o(e, { ...b.userNode }) : void 0, G = (n) => {
		let { selectNodesOnDrag: r, nodeDragThreshold: i } = A.getState();
		T && (!r || !w || i > 0) && $r({
			id: e,
			store: A,
			nodeRef: M
		}), t && t(n, { ...b.userNode });
	}, ee = (t) => {
		if (!(qe(t.nativeEvent) || m)) {
			if (z.includes(t.key) && T) {
				let n = t.key === `Escape`;
				$r({
					id: e,
					store: A,
					unselect: n,
					nodeRef: M
				});
			} else if (w && y.selected && Object.prototype.hasOwnProperty.call(vi, t.key)) {
				t.preventDefault();
				let { ariaLabelConfig: e } = A.getState();
				A.setState({ ariaLiveMessage: e[`node.a11yDescription.ariaLiveMessage`]({
					direction: t.key.replace(`Arrow`, ``).toLowerCase(),
					x: ~~b.positionAbsolute.x,
					y: ~~b.positionAbsolute.y
				}) }), P({
					direction: vi[t.key],
					factor: t.shiftKey ? 4 : 1
				});
			}
		}
	}, K = () => {
		if (m || !M.current?.matches(`:focus-visible`)) return;
		let { transform: t, width: n, height: r, autoPanOnNodeFocus: i, setCenter: a } = A.getState();
		i && (le(/* @__PURE__ */ new Map([[e, y]]), {
			x: 0,
			y: 0,
			width: n,
			height: r
		}, t, !0).length > 0 || a(y.position.x + F.width / 2, y.position.y + F.height / 2, { zoom: t[2] }));
	};
	return (0, O.jsx)(`div`, {
		className: k([
			`react-flow__node`,
			`react-flow__node-${S}`,
			{ [p]: w },
			y.className,
			{
				selected: y.selected,
				selectable: T,
				parent: x,
				draggable: w,
				dragging: N
			}
		]),
		ref: M,
		style: {
			zIndex: b.z,
			transform: `translate(${b.positionAbsolute.x}px,${b.positionAbsolute.y}px)`,
			pointerEvents: R ? `all` : `none`,
			visibility: j ? `visible` : `hidden`,
			...y.style,
			...I
		},
		"data-id": e,
		"data-testid": `rf__node-${e}`,
		onMouseEnter: B,
		onMouseMove: V,
		onMouseLeave: H,
		onContextMenu: U,
		onClick: G,
		onDoubleClick: W,
		onKeyDown: D ? ee : void 0,
		tabIndex: D ? 0 : void 0,
		onFocus: D ? K : void 0,
		role: y.ariaRole ?? (D ? `group` : void 0),
		"aria-roledescription": `node`,
		"aria-describedby": m ? void 0 : `${Gn}-${h}`,
		"aria-label": y.ariaLabel,
		...y.domAttributes,
		children: (0, O.jsx)(ii, {
			value: e,
			children: (0, O.jsx)(C, {
				id: e,
				data: y.data,
				type: S,
				positionAbsoluteX: b.positionAbsolute.x,
				positionAbsoluteY: b.positionAbsolute.y,
				selected: y.selected ?? !1,
				selectable: T,
				draggable: w,
				deletable: y.deletable ?? !0,
				isConnectable: E,
				sourcePosition: y.sourcePosition,
				targetPosition: y.targetPosition,
				dragging: N,
				dragHandle: y.dragHandle,
				zIndex: b.z,
				parentId: y.parentId,
				...F
			})
		})
	});
}
var Ni = (0, D.memo)(Mi), Pi = (e) => ({
	nodesDraggable: e.nodesDraggable,
	nodesConnectable: e.nodesConnectable,
	nodesFocusable: e.nodesFocusable,
	elementsSelectable: e.elementsSelectable,
	onError: e.onError
});
function Fi(e) {
	let { nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: i, onError: a } = Q(Pi, Z), o = Oi(e.onlyRenderVisibleElements), s = Ai();
	return (0, O.jsx)(`div`, {
		className: `react-flow__nodes`,
		style: Gr,
		children: o.map((o) => (0, O.jsx)(Ni, {
			id: o,
			nodeTypes: e.nodeTypes,
			nodeExtent: e.nodeExtent,
			onClick: e.onNodeClick,
			onMouseEnter: e.onNodeMouseEnter,
			onMouseMove: e.onNodeMouseMove,
			onMouseLeave: e.onNodeMouseLeave,
			onContextMenu: e.onNodeContextMenu,
			onDoubleClick: e.onNodeDoubleClick,
			noDragClassName: e.noDragClassName,
			noPanClassName: e.noPanClassName,
			rfId: e.rfId,
			disableKeyboardA11y: e.disableKeyboardA11y,
			resizeObserver: s,
			nodesDraggable: t,
			nodesConnectable: n,
			nodesFocusable: r,
			elementsSelectable: i,
			nodeClickDistance: e.nodeClickDistance,
			onError: a
		}, o))
	});
}
Fi.displayName = `NodeRenderer`;
var Ii = (0, D.memo)(Fi);
function Li(e) {
	return Q((0, D.useCallback)((t) => {
		if (!e) return t.edges.map((e) => e.id);
		let n = [];
		if (t.width && t.height) for (let e of t.edges) {
			let r = t.nodeLookup.get(e.source), i = t.nodeLookup.get(e.target);
			r && i && nt({
				sourceNode: r,
				targetNode: i,
				width: t.width,
				height: t.height,
				transform: t.transform
			}) && n.push(e.id);
		}
		return n;
	}, [e]), Z);
}
var Ri = ({ color: e = `none`, strokeWidth: t = 1 }) => (0, O.jsx)(`polyline`, {
	className: `arrow`,
	style: {
		strokeWidth: t,
		...e && { stroke: e }
	},
	strokeLinecap: `round`,
	fill: `none`,
	strokeLinejoin: `round`,
	points: `-5,-4 0,0 -5,4`
}), zi = ({ color: e = `none`, strokeWidth: t = 1 }) => (0, O.jsx)(`polyline`, {
	className: `arrowclosed`,
	style: {
		strokeWidth: t,
		...e && {
			stroke: e,
			fill: e
		}
	},
	strokeLinecap: `round`,
	strokeLinejoin: `round`,
	points: `-5,-4 0,0 -5,4 -5,-4`
}), Bi = {
	[ee.Arrow]: Ri,
	[ee.ArrowClosed]: zi
};
function Vi(e) {
	let t = $();
	return (0, D.useMemo)(() => Object.prototype.hasOwnProperty.call(Bi, e) ? Bi[e] : (t.getState().onError?.(`009`, L.error009(e)), null), [e]);
}
var Hi = ({ id: e, type: t, color: n, width: r = 12.5, height: i = 12.5, markerUnits: a = `strokeWidth`, strokeWidth: o, orient: s = `auto-start-reverse` }) => {
	let c = Vi(t);
	return c ? (0, O.jsx)(`marker`, {
		className: `react-flow__arrowhead`,
		id: e,
		markerWidth: `${r}`,
		markerHeight: `${i}`,
		viewBox: `-10 -10 20 20`,
		markerUnits: a,
		orient: s,
		refX: `0`,
		refY: `0`,
		children: (0, O.jsx)(c, {
			color: n,
			strokeWidth: o
		})
	}) : null;
}, Ui = ({ defaultColor: e, rfId: t }) => {
	let n = Q((e) => e.edges), r = Q((e) => e.defaultEdgeOptions), i = (0, D.useMemo)(() => yt(n, {
		id: t,
		defaultColor: e,
		defaultMarkerStart: r?.markerStart,
		defaultMarkerEnd: r?.markerEnd
	}), [
		n,
		r,
		t,
		e
	]);
	return i.length ? (0, O.jsx)(`svg`, {
		className: `react-flow__marker`,
		"aria-hidden": `true`,
		children: (0, O.jsx)(`defs`, { children: i.map((e) => (0, O.jsx)(Hi, {
			id: e.id,
			type: e.type,
			color: e.color,
			width: e.width,
			height: e.height,
			markerUnits: e.markerUnits,
			strokeWidth: e.strokeWidth,
			orient: e.orient
		}, e.id)) })
	}) : null;
};
Ui.displayName = `MarkerDefinitions`;
var Wi = (0, D.memo)(Ui);
function Gi({ x: e, y: t, label: n, labelStyle: r, labelShowBg: i = !0, labelBgStyle: a, labelBgPadding: o = [2, 4], labelBgBorderRadius: s = 2, children: c, className: l, ...u }) {
	let [d, f] = (0, D.useState)({
		x: 1,
		y: 0,
		width: 0,
		height: 0
	}), p = k([`react-flow__edge-textwrapper`, l]), m = (0, D.useRef)(null);
	return (0, D.useEffect)(() => {
		if (m.current) {
			let e = m.current.getBBox();
			f({
				x: e.x,
				y: e.y,
				width: e.width,
				height: e.height
			});
		}
	}, [n]), n ? (0, O.jsxs)(`g`, {
		transform: `translate(${e - d.width / 2} ${t - d.height / 2})`,
		className: p,
		visibility: d.width ? `visible` : `hidden`,
		...u,
		children: [
			i && (0, O.jsx)(`rect`, {
				width: d.width + 2 * o[0],
				x: -o[0],
				y: -o[1],
				height: d.height + 2 * o[1],
				className: `react-flow__edge-textbg`,
				style: a,
				rx: s,
				ry: s
			}),
			(0, O.jsx)(`text`, {
				className: `react-flow__edge-text`,
				y: d.height / 2,
				dy: `0.3em`,
				ref: m,
				style: r,
				children: n
			}),
			c
		]
	}) : null;
}
Gi.displayName = `EdgeText`;
var Ki = (0, D.memo)(Gi);
function qi({ path: e, labelX: t, labelY: n, label: r, labelStyle: i, labelShowBg: a, labelBgStyle: o, labelBgPadding: s, labelBgBorderRadius: c, interactionWidth: l = 20, ...u }) {
	return (0, O.jsxs)(O.Fragment, { children: [
		(0, O.jsx)(`path`, {
			...u,
			d: e,
			fill: `none`,
			className: k([`react-flow__edge-path`, u.className])
		}),
		l ? (0, O.jsx)(`path`, {
			d: e,
			fill: `none`,
			strokeOpacity: 0,
			strokeWidth: l,
			className: `react-flow__edge-interaction`
		}) : null,
		r && J(t) && J(n) ? (0, O.jsx)(Ki, {
			x: t,
			y: n,
			label: r,
			labelStyle: i,
			labelShowBg: a,
			labelBgStyle: o,
			labelBgPadding: s,
			labelBgBorderRadius: c
		}) : null
	] });
}
function Ji({ pos: e, x1: t, y1: n, x2: r, y2: i }) {
	return e === K.Left || e === K.Right ? [.5 * (t + r), n] : [t, .5 * (n + i)];
}
function Yi({ sourceX: e, sourceY: t, sourcePosition: n = K.Bottom, targetX: r, targetY: i, targetPosition: a = K.Top }) {
	let [o, s] = Ji({
		pos: n,
		x1: e,
		y1: t,
		x2: r,
		y2: i
	}), [c, l] = Ji({
		pos: a,
		x1: r,
		y1: i,
		x2: e,
		y2: t
	}), [u, d, f, p] = Xe({
		sourceX: e,
		sourceY: t,
		targetX: r,
		targetY: i,
		sourceControlX: o,
		sourceControlY: s,
		targetControlX: c,
		targetControlY: l
	});
	return [
		`M${e},${t} C${o},${s} ${c},${l} ${r},${i}`,
		u,
		d,
		f,
		p
	];
}
function Xi(e) {
	return (0, D.memo)(({ id: t, sourceX: n, sourceY: r, targetX: i, targetY: a, sourcePosition: o, targetPosition: s, label: c, labelStyle: l, labelShowBg: u, labelBgStyle: d, labelBgPadding: f, labelBgBorderRadius: p, style: m, markerEnd: h, markerStart: g, interactionWidth: _ }) => {
		let [v, y, b] = Yi({
			sourceX: n,
			sourceY: r,
			sourcePosition: o,
			targetX: i,
			targetY: a,
			targetPosition: s
		});
		return (0, O.jsx)(qi, {
			id: e.isInternal ? void 0 : t,
			path: v,
			labelX: y,
			labelY: b,
			label: c,
			labelStyle: l,
			labelShowBg: u,
			labelBgStyle: d,
			labelBgPadding: f,
			labelBgBorderRadius: p,
			style: m,
			markerEnd: h,
			markerStart: g,
			interactionWidth: _
		});
	});
}
var Zi = Xi({ isInternal: !1 }), Qi = Xi({ isInternal: !0 });
Zi.displayName = `SimpleBezierEdge`, Qi.displayName = `SimpleBezierEdgeInternal`;
function $i(e) {
	return (0, D.memo)(({ id: t, sourceX: n, sourceY: r, targetX: i, targetY: a, label: o, labelStyle: s, labelShowBg: c, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: d, style: f, sourcePosition: p = K.Bottom, targetPosition: m = K.Top, markerEnd: h, markerStart: g, pathOptions: _, interactionWidth: v }) => {
		let [y, b, x] = ft({
			sourceX: n,
			sourceY: r,
			sourcePosition: p,
			targetX: i,
			targetY: a,
			targetPosition: m,
			borderRadius: _?.borderRadius,
			offset: _?.offset,
			stepPosition: _?.stepPosition
		});
		return (0, O.jsx)(qi, {
			id: e.isInternal ? void 0 : t,
			path: y,
			labelX: b,
			labelY: x,
			label: o,
			labelStyle: s,
			labelShowBg: c,
			labelBgStyle: l,
			labelBgPadding: u,
			labelBgBorderRadius: d,
			style: f,
			markerEnd: h,
			markerStart: g,
			interactionWidth: v
		});
	});
}
var ea = $i({ isInternal: !1 }), ta = $i({ isInternal: !0 });
ea.displayName = `SmoothStepEdge`, ta.displayName = `SmoothStepEdgeInternal`;
function na(e) {
	return (0, D.memo)(({ id: t, ...n }) => {
		let r = e.isInternal ? void 0 : t;
		return (0, O.jsx)(ea, {
			...n,
			id: r,
			pathOptions: (0, D.useMemo)(() => ({
				borderRadius: 0,
				offset: n.pathOptions?.offset
			}), [n.pathOptions?.offset])
		});
	});
}
var ra = na({ isInternal: !1 }), ia = na({ isInternal: !0 });
ra.displayName = `StepEdge`, ia.displayName = `StepEdgeInternal`;
function aa(e) {
	return (0, D.memo)(({ id: t, sourceX: n, sourceY: r, targetX: i, targetY: a, label: o, labelStyle: s, labelShowBg: c, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: d, style: f, markerEnd: p, markerStart: m, interactionWidth: h }) => {
		let [g, _, v] = ot({
			sourceX: n,
			sourceY: r,
			targetX: i,
			targetY: a
		});
		return (0, O.jsx)(qi, {
			id: e.isInternal ? void 0 : t,
			path: g,
			labelX: _,
			labelY: v,
			label: o,
			labelStyle: s,
			labelShowBg: c,
			labelBgStyle: l,
			labelBgPadding: u,
			labelBgBorderRadius: d,
			style: f,
			markerEnd: p,
			markerStart: m,
			interactionWidth: h
		});
	});
}
var oa = aa({ isInternal: !1 }), sa = aa({ isInternal: !0 });
oa.displayName = `StraightEdge`, sa.displayName = `StraightEdgeInternal`;
function ca(e) {
	return (0, D.memo)(({ id: t, sourceX: n, sourceY: r, targetX: i, targetY: a, sourcePosition: o = K.Bottom, targetPosition: s = K.Top, label: c, labelStyle: l, labelShowBg: u, labelBgStyle: d, labelBgPadding: f, labelBgBorderRadius: p, style: m, markerEnd: h, markerStart: g, pathOptions: _, interactionWidth: v }) => {
		let [y, b, x] = $e({
			sourceX: n,
			sourceY: r,
			sourcePosition: o,
			targetX: i,
			targetY: a,
			targetPosition: s,
			curvature: _?.curvature
		});
		return (0, O.jsx)(qi, {
			id: e.isInternal ? void 0 : t,
			path: y,
			labelX: b,
			labelY: x,
			label: c,
			labelStyle: l,
			labelShowBg: u,
			labelBgStyle: d,
			labelBgPadding: f,
			labelBgBorderRadius: p,
			style: m,
			markerEnd: h,
			markerStart: g,
			interactionWidth: v
		});
	});
}
var la = ca({ isInternal: !1 }), ua = ca({ isInternal: !0 });
la.displayName = `BezierEdge`, ua.displayName = `BezierEdgeInternal`;
var da = {
	default: ua,
	straight: sa,
	step: ia,
	smoothstep: ta,
	simplebezier: Qi
}, fa = {
	sourceX: null,
	sourceY: null,
	targetX: null,
	targetY: null,
	sourcePosition: null,
	targetPosition: null,
	zIndex: void 0
}, pa = (e, t, n) => n === K.Left ? e - t : n === K.Right ? e + t : e, ma = (e, t, n) => n === K.Top ? e - t : n === K.Bottom ? e + t : e, ha = `react-flow__edgeupdater`;
function ga({ position: e, centerX: t, centerY: n, radius: r = 10, onMouseDown: i, onMouseEnter: a, onMouseOut: o, type: s }) {
	return (0, O.jsx)(`circle`, {
		onMouseDown: i,
		onMouseEnter: a,
		onMouseOut: o,
		className: k([ha, `${ha}-${s}`]),
		cx: pa(t, r, e),
		cy: ma(n, r, e),
		r,
		stroke: `transparent`,
		fill: `transparent`
	});
}
function _a({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: r, sourceY: i, targetX: a, targetY: o, sourcePosition: s, targetPosition: c, onReconnect: l, onReconnectStart: u, onReconnectEnd: d, setReconnecting: f, setUpdateHover: p }) {
	let m = $(), h = (e, t) => {
		if (e.button !== 0) return;
		let { autoPanOnConnect: r, domNode: i, connectionMode: a, connectionRadius: o, lib: s, onConnectStart: c, cancelConnection: p, nodeLookup: h, rfId: g, panBy: _, updateConnection: v } = m.getState(), y = t.type === `target`;
		$t.onPointerDown(e.nativeEvent, {
			autoPanOnConnect: r,
			connectionMode: a,
			connectionRadius: o,
			domNode: i,
			handleId: t.id,
			nodeId: t.nodeId,
			nodeLookup: h,
			isTarget: y,
			edgeUpdaterType: t.type,
			lib: s,
			flowId: g,
			cancelConnection: p,
			panBy: _,
			isValidConnection: (...e) => m.getState().isValidConnection?.(...e) ?? !0,
			onConnect: (e) => l?.(n, e),
			onConnectStart: (r, i) => {
				f(!0), u?.(e, n, t.type), c?.(r, i);
			},
			onConnectEnd: (...e) => m.getState().onConnectEnd?.(...e),
			onReconnectEnd: (e, r) => {
				f(!1), d?.(e, n, t.type, r);
			},
			updateConnection: v,
			getTransform: () => m.getState().transform,
			getFromHandle: () => m.getState().connection.fromHandle,
			dragThreshold: m.getState().connectionDragThreshold,
			handleDomNode: e.currentTarget
		});
	}, g = (e) => h(e, {
		nodeId: n.target,
		id: n.targetHandle ?? null,
		type: `target`
	}), _ = (e) => h(e, {
		nodeId: n.source,
		id: n.sourceHandle ?? null,
		type: `source`
	}), v = () => p(!0), y = () => p(!1);
	return (0, O.jsxs)(O.Fragment, { children: [(e === !0 || e === `source`) && (0, O.jsx)(ga, {
		position: s,
		centerX: r,
		centerY: i,
		radius: t,
		onMouseDown: g,
		onMouseEnter: v,
		onMouseOut: y,
		type: `source`
	}), (e === !0 || e === `target`) && (0, O.jsx)(ga, {
		position: c,
		centerX: a,
		centerY: o,
		radius: t,
		onMouseDown: _,
		onMouseEnter: v,
		onMouseOut: y,
		type: `target`
	})] });
}
function va({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: r, onClick: i, onDoubleClick: a, onContextMenu: o, onMouseEnter: s, onMouseMove: c, onMouseLeave: l, reconnectRadius: u, onReconnect: d, onReconnectStart: f, onReconnectEnd: p, rfId: m, edgeTypes: h, noPanClassName: g, onError: _, disableKeyboardA11y: v }) {
	let y = Q((t) => t.edgeLookup.get(e)), b = Q((e) => e.defaultEdgeOptions);
	y = b ? {
		...b,
		...y
	} : y;
	let x = y.type || `default`, S = h?.[x] || da[x];
	S === void 0 && (_?.(`011`, L.error011(x)), x = `default`, S = h?.default || da.default);
	let C = !!(y.focusable || t && y.focusable === void 0), w = d !== void 0 && (y.reconnectable || n && y.reconnectable === void 0), T = !!(y.selectable || r && y.selectable === void 0), E = (0, D.useRef)(null), [A, j] = (0, D.useState)(!1), [M, N] = (0, D.useState)(!1), P = $(), { zIndex: F = y.zIndex, sourceX: I, sourceY: R, targetX: B, targetY: V, sourcePosition: H, targetPosition: U } = Q((0, D.useCallback)((t) => {
		let n = t.nodeLookup.get(y.source), r = t.nodeLookup.get(y.target);
		if (!n || !r) return fa;
		let i = mt({
			id: e,
			sourceNode: n,
			targetNode: r,
			sourceHandle: y.sourceHandle || null,
			targetHandle: y.targetHandle || null,
			connectionMode: t.connectionMode,
			onError: _
		}), a = tt({
			selected: y.selected,
			zIndex: y.zIndex,
			sourceNode: n,
			targetNode: r,
			elevateOnSelect: t.elevateEdgesOnSelect,
			zIndexMode: t.zIndexMode
		});
		return {
			...i || fa,
			zIndex: a
		};
	}, [
		y.source,
		y.target,
		y.sourceHandle,
		y.targetHandle,
		y.selected,
		y.zIndex
	]), Z), W = (0, D.useMemo)(() => y.markerStart ? `url('#${vt(y.markerStart, m)}')` : void 0, [y.markerStart, m]), G = (0, D.useMemo)(() => y.markerEnd ? `url('#${vt(y.markerEnd, m)}')` : void 0, [y.markerEnd, m]);
	if (y.hidden || I === null || R === null || B === null || V === null) return null;
	let ee = (t) => {
		let { addSelectedEdges: n, unselectNodesAndEdges: r, multiSelectionActive: a } = P.getState();
		T && (P.setState({ nodesSelectionActive: !1 }), y.selected && a ? (r({
			nodes: [],
			edges: [y]
		}), E.current?.blur()) : n([e])), i && i(t, y);
	}, K = a ? (e) => {
		a(e, { ...y });
	} : void 0, te = o ? (e) => {
		o(e, { ...y });
	} : void 0, ne = s ? (e) => {
		s(e, { ...y });
	} : void 0, re = c ? (e) => {
		c(e, { ...y });
	} : void 0, ie = l ? (e) => {
		l(e, { ...y });
	} : void 0;
	return (0, O.jsx)(`svg`, {
		style: { zIndex: F },
		children: (0, O.jsxs)(`g`, {
			className: k([
				`react-flow__edge`,
				`react-flow__edge-${x}`,
				y.className,
				g,
				{
					selected: y.selected,
					animated: y.animated,
					inactive: !T && !i,
					updating: A,
					selectable: T
				}
			]),
			onClick: ee,
			onDoubleClick: K,
			onContextMenu: te,
			onMouseEnter: ne,
			onMouseMove: re,
			onMouseLeave: ie,
			onKeyDown: C ? (t) => {
				if (!v && z.includes(t.key) && T) {
					let { unselectNodesAndEdges: n, addSelectedEdges: r } = P.getState();
					t.key === `Escape` ? (E.current?.blur(), n({ edges: [y] })) : r([e]);
				}
			} : void 0,
			tabIndex: C ? 0 : void 0,
			role: y.ariaRole ?? (C ? `group` : `img`),
			"aria-roledescription": `edge`,
			"data-id": e,
			"data-testid": `rf__edge-${e}`,
			"aria-label": y.ariaLabel === null ? void 0 : y.ariaLabel || `Edge from ${y.source} to ${y.target}`,
			"aria-describedby": C ? `${Kn}-${m}` : void 0,
			ref: E,
			...y.domAttributes,
			children: [!M && (0, O.jsx)(S, {
				id: e,
				source: y.source,
				target: y.target,
				type: y.type,
				selected: y.selected,
				animated: y.animated,
				selectable: T,
				deletable: y.deletable ?? !0,
				label: y.label,
				labelStyle: y.labelStyle,
				labelShowBg: y.labelShowBg,
				labelBgStyle: y.labelBgStyle,
				labelBgPadding: y.labelBgPadding,
				labelBgBorderRadius: y.labelBgBorderRadius,
				sourceX: I,
				sourceY: R,
				targetX: B,
				targetY: V,
				sourcePosition: H,
				targetPosition: U,
				data: y.data,
				style: y.style,
				sourceHandleId: y.sourceHandle,
				targetHandleId: y.targetHandle,
				markerStart: W,
				markerEnd: G,
				pathOptions: `pathOptions` in y ? y.pathOptions : void 0,
				interactionWidth: y.interactionWidth
			}), w && (0, O.jsx)(_a, {
				edge: y,
				isReconnectable: w,
				reconnectRadius: u,
				onReconnect: d,
				onReconnectStart: f,
				onReconnectEnd: p,
				sourceX: I,
				sourceY: R,
				targetX: B,
				targetY: V,
				sourcePosition: H,
				targetPosition: U,
				setUpdateHover: j,
				setReconnecting: N
			})]
		})
	});
}
var ya = (0, D.memo)(va), ba = (e) => ({
	edgesFocusable: e.edgesFocusable,
	edgesReconnectable: e.edgesReconnectable,
	elementsSelectable: e.elementsSelectable,
	connectionMode: e.connectionMode,
	onError: e.onError
});
function xa({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: r, noPanClassName: i, onReconnect: a, onEdgeContextMenu: o, onEdgeMouseEnter: s, onEdgeMouseMove: c, onEdgeMouseLeave: l, onEdgeClick: u, reconnectRadius: d, onEdgeDoubleClick: f, onReconnectStart: p, onReconnectEnd: m, disableKeyboardA11y: h }) {
	let { edgesFocusable: g, edgesReconnectable: _, elementsSelectable: v, onError: y } = Q(ba, Z), b = Li(t);
	return (0, O.jsxs)(`div`, {
		className: `react-flow__edges`,
		children: [(0, O.jsx)(Wi, {
			defaultColor: e,
			rfId: n
		}), b.map((e) => (0, O.jsx)(ya, {
			id: e,
			edgesFocusable: g,
			edgesReconnectable: _,
			elementsSelectable: v,
			noPanClassName: i,
			onReconnect: a,
			onContextMenu: o,
			onMouseEnter: s,
			onMouseMove: c,
			onMouseLeave: l,
			onClick: u,
			reconnectRadius: d,
			onDoubleClick: f,
			onReconnectStart: p,
			onReconnectEnd: m,
			rfId: n,
			onError: y,
			edgeTypes: r,
			disableKeyboardA11y: h
		}, e))]
	});
}
xa.displayName = `EdgeRenderer`;
var Sa = (0, D.memo)(xa), Ca = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function wa({ children: e }) {
	return (0, O.jsx)(`div`, {
		className: `react-flow__viewport xyflow__viewport react-flow__container`,
		style: { transform: Q(Ca) },
		children: e
	});
}
function Ta(e) {
	let t = Br(), n = (0, D.useRef)(!1);
	(0, D.useEffect)(() => {
		!n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
	}, [e, t.viewportInitialized]);
}
var Ea = (e) => e.panZoom?.syncViewport;
function Da(e) {
	let t = Q(Ea), n = $();
	return (0, D.useEffect)(() => {
		e && (t?.(e), n.setState({ transform: [
			e.x,
			e.y,
			e.zoom
		] }));
	}, [e, t]), null;
}
function Oa(e) {
	return e.connection.inProgress ? {
		...e.connection,
		to: Ae(e.connection.to, e.transform)
	} : { ...e.connection };
}
function ka(e) {
	return e ? (t) => e(Oa(t)) : Oa;
}
function Aa(e) {
	return Q(ka(e), Z);
}
var ja = (e) => ({
	nodesConnectable: e.nodesConnectable,
	isValid: e.connection.isValid,
	inProgress: e.connection.inProgress,
	width: e.width,
	height: e.height
});
function Ma({ containerStyle: e, style: t, type: n, component: r }) {
	let { nodesConnectable: i, width: a, height: o, isValid: s, inProgress: c } = Q(ja, Z);
	return a && i && c ? (0, O.jsx)(`svg`, {
		style: e,
		width: a,
		height: o,
		className: `react-flow__connectionline react-flow__container`,
		children: (0, O.jsx)(`g`, {
			className: k([`react-flow__connection`, ne(s)]),
			children: (0, O.jsx)(Na, {
				style: t,
				type: n,
				CustomComponent: r,
				isValid: s
			})
		})
	}) : null;
}
var Na = ({ style: e, type: t = G.Bezier, CustomComponent: n, isValid: r }) => {
	let { inProgress: i, from: a, fromNode: o, fromHandle: s, fromPosition: c, to: l, toNode: u, toHandle: d, toPosition: f, pointer: p } = Aa();
	if (!i) return;
	if (n) return (0, O.jsx)(n, {
		connectionLineType: t,
		connectionLineStyle: e,
		fromNode: o,
		fromHandle: s,
		fromX: a.x,
		fromY: a.y,
		toX: l.x,
		toY: l.y,
		fromPosition: c,
		toPosition: f,
		connectionStatus: ne(r),
		toNode: u,
		toHandle: d,
		pointer: p
	});
	let m = ``, h = {
		sourceX: a.x,
		sourceY: a.y,
		sourcePosition: c,
		targetX: l.x,
		targetY: l.y,
		targetPosition: f
	};
	switch (t) {
		case G.Bezier:
			[m] = $e(h);
			break;
		case G.SimpleBezier:
			[m] = Yi(h);
			break;
		case G.Step:
			[m] = ft({
				...h,
				borderRadius: 0
			});
			break;
		case G.SmoothStep:
			[m] = ft(h);
			break;
		default: [m] = ot(h);
	}
	return (0, O.jsx)(`path`, {
		d: m,
		fill: `none`,
		className: `react-flow__connection-path`,
		style: e
	});
};
Na.displayName = `ConnectionLine`;
var Pa = {};
function Fa(e = Pa) {
	(0, D.useRef)(e), $(), (0, D.useEffect)(() => {}, [e]);
}
function Ia() {
	$(), (0, D.useRef)(!1), (0, D.useEffect)(() => {}, []);
}
function La({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: r, onEdgeClick: i, onNodeDoubleClick: a, onEdgeDoubleClick: o, onNodeMouseEnter: s, onNodeMouseMove: c, onNodeMouseLeave: l, onNodeContextMenu: u, onSelectionContextMenu: d, onSelectionStart: f, onSelectionEnd: p, connectionLineType: m, connectionLineStyle: h, connectionLineComponent: g, connectionLineContainerStyle: _, selectionKeyCode: v, selectionOnDrag: y, selectionMode: b, multiSelectionKeyCode: x, panActivationKeyCode: S, zoomActivationKeyCode: C, deleteKeyCode: w, onlyRenderVisibleElements: T, elementsSelectable: E, defaultViewport: D, translateExtent: k, minZoom: A, maxZoom: j, preventScrolling: M, defaultMarkerColor: N, zoomOnScroll: P, zoomOnPinch: F, panOnScroll: I, panOnScrollSpeed: L, panOnScrollMode: R, zoomOnDoubleClick: z, panOnDrag: B, autoPanOnSelection: V, onPaneClick: H, onPaneMouseEnter: U, onPaneMouseMove: W, onPaneMouseLeave: G, onPaneScroll: ee, onPaneContextMenu: K, paneClickDistance: te, nodeClickDistance: ne, onEdgeContextMenu: re, onEdgeMouseEnter: ie, onEdgeMouseMove: ae, onEdgeMouseLeave: oe, reconnectRadius: se, onReconnect: ce, onReconnectStart: le, onReconnectEnd: ue, noDragClassName: de, noWheelClassName: fe, noPanClassName: pe, disableKeyboardA11y: me, nodeExtent: he, rfId: q, viewport: ge, onViewportChange: _e }) {
	return Fa(e), Fa(t), Ia(), Ta(n), Da(ge), (0, O.jsx)(Ei, {
		onPaneClick: H,
		onPaneMouseEnter: U,
		onPaneMouseMove: W,
		onPaneMouseLeave: G,
		onPaneContextMenu: K,
		onPaneScroll: ee,
		paneClickDistance: te,
		deleteKeyCode: w,
		selectionKeyCode: v,
		selectionOnDrag: y,
		selectionMode: b,
		onSelectionStart: f,
		onSelectionEnd: p,
		multiSelectionKeyCode: x,
		panActivationKeyCode: S,
		zoomActivationKeyCode: C,
		elementsSelectable: E,
		zoomOnScroll: P,
		zoomOnPinch: F,
		zoomOnDoubleClick: z,
		panOnScroll: I,
		panOnScrollSpeed: L,
		panOnScrollMode: R,
		panOnDrag: B,
		autoPanOnSelection: V,
		defaultViewport: D,
		translateExtent: k,
		minZoom: A,
		maxZoom: j,
		onSelectionContextMenu: d,
		preventScrolling: M,
		noDragClassName: de,
		noWheelClassName: fe,
		noPanClassName: pe,
		disableKeyboardA11y: me,
		onViewportChange: _e,
		isControlledViewport: !!ge,
		children: (0, O.jsxs)(wa, { children: [
			(0, O.jsx)(Sa, {
				edgeTypes: t,
				onEdgeClick: i,
				onEdgeDoubleClick: o,
				onReconnect: ce,
				onReconnectStart: le,
				onReconnectEnd: ue,
				onlyRenderVisibleElements: T,
				onEdgeContextMenu: re,
				onEdgeMouseEnter: ie,
				onEdgeMouseMove: ae,
				onEdgeMouseLeave: oe,
				reconnectRadius: se,
				defaultMarkerColor: N,
				noPanClassName: pe,
				disableKeyboardA11y: me,
				rfId: q
			}),
			(0, O.jsx)(Ma, {
				style: h,
				type: m,
				component: g,
				containerStyle: _
			}),
			(0, O.jsx)(`div`, { className: `react-flow__edgelabel-renderer` }),
			(0, O.jsx)(Ii, {
				nodeTypes: e,
				onNodeClick: r,
				onNodeDoubleClick: a,
				onNodeMouseEnter: s,
				onNodeMouseMove: c,
				onNodeMouseLeave: l,
				onNodeContextMenu: u,
				nodeClickDistance: ne,
				onlyRenderVisibleElements: T,
				noPanClassName: pe,
				noDragClassName: de,
				disableKeyboardA11y: me,
				nodeExtent: he,
				rfId: q
			}),
			(0, O.jsx)(`div`, { className: `react-flow__viewport-portal` })
		] })
	});
}
La.displayName = `GraphView`;
var Ra = (0, D.memo)(La), za = Oe(`React Flow`, `https://reactflow.dev/`), Ba = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: i, height: a, fitView: o, fitViewOptions: s, minZoom: c = .5, maxZoom: l = 2, nodeOrigin: u, nodeExtent: d, zIndexMode: f = `basic` } = {}) => {
	let p = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), _ = r ?? t ?? [], v = n ?? e ?? [], y = u ?? [0, 0], b = d ?? R;
	Lt(h, g, _);
	let { nodesInitialized: x } = Ot(v, p, m, {
		nodeOrigin: y,
		nodeExtent: b,
		zIndexMode: f
	}), S = [
		0,
		0,
		1
	];
	if (o && i && a) {
		let { x: e, y: t, zoom: n } = Fe(ce(p, { filter: (e) => !!((e.width || e.initialWidth) && (e.height || e.initialHeight)) }), i, a, c, l, s?.padding ?? .1);
		S = [
			e,
			t,
			n
		];
	}
	return {
		rfId: `1`,
		width: i ?? 0,
		height: a ?? 0,
		transform: S,
		nodes: v,
		nodesInitialized: x,
		nodeLookup: p,
		parentLookup: m,
		edges: _,
		edgeLookup: g,
		connectionLookup: h,
		onNodesChange: null,
		onEdgesChange: null,
		hasDefaultNodes: n !== void 0,
		hasDefaultEdges: r !== void 0,
		panZoom: null,
		minZoom: c,
		maxZoom: l,
		translateExtent: R,
		nodeExtent: b,
		nodesSelectionActive: !1,
		userSelectionActive: !1,
		userSelectionRect: null,
		connectionMode: V.Strict,
		domNode: null,
		paneDragging: !1,
		noPanClassName: `nopan`,
		nodeOrigin: y,
		nodeDragThreshold: 1,
		connectionDragThreshold: 1,
		snapGrid: [15, 15],
		snapToGrid: !1,
		nodesDraggable: !0,
		nodesConnectable: !0,
		nodesFocusable: !0,
		edgesFocusable: !0,
		edgesReconnectable: !0,
		elementsSelectable: !0,
		elevateNodesOnSelect: !0,
		elevateEdgesOnSelect: !0,
		selectNodesOnDrag: !0,
		multiSelectionActive: !1,
		fitViewQueued: o ?? !1,
		fitViewOptions: s,
		fitViewResolver: null,
		connection: { ...W },
		connectionClickStartHandle: null,
		connectOnClick: !0,
		ariaLiveMessage: ``,
		autoPanOnConnect: !0,
		autoPanOnNodeDrag: !0,
		autoPanOnNodeFocus: !0,
		autoPanSpeed: 15,
		connectionRadius: 20,
		onError: za,
		isValidConnection: void 0,
		onSelectionChangeHandlers: [],
		lib: `react`,
		debug: !1,
		ariaLabelConfig: B,
		zIndexMode: f,
		onNodesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
		onEdgesChangeMiddlewareMap: /* @__PURE__ */ new Map()
	};
}, Va = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: i, height: a, fitView: o, fitViewOptions: s, minZoom: c, maxZoom: l, nodeOrigin: u, nodeExtent: d, zIndexMode: f }) => zn((p, m) => {
	async function h() {
		let { nodeLookup: e, panZoom: t, fitViewOptions: n, fitViewResolver: r, width: i, height: a, minZoom: o, maxZoom: s } = m();
		t && (await fe({
			nodes: e,
			width: i,
			height: a,
			panZoom: t,
			minZoom: o,
			maxZoom: s
		}, n), r?.resolve(!0), p({ fitViewResolver: null }));
	}
	return {
		...Ba({
			nodes: e,
			edges: t,
			width: i,
			height: a,
			fitView: o,
			fitViewOptions: s,
			minZoom: c,
			maxZoom: l,
			nodeOrigin: u,
			nodeExtent: d,
			defaultNodes: n,
			defaultEdges: r,
			zIndexMode: f
		}),
		setNodes: (e) => {
			let { nodeLookup: t, parentLookup: n, nodeOrigin: r, elevateNodesOnSelect: i, fitViewQueued: a, zIndexMode: o, nodesSelectionActive: s } = m(), { nodesInitialized: c, hasSelectedNodes: l } = Ot(e, t, n, {
				nodeOrigin: r,
				nodeExtent: d,
				elevateNodesOnSelect: i,
				checkEquality: !0,
				zIndexMode: o
			}), u = s && l;
			a && c ? (h(), p({
				nodes: e,
				nodesInitialized: c,
				fitViewQueued: !1,
				fitViewOptions: void 0,
				nodesSelectionActive: u
			})) : p({
				nodes: e,
				nodesInitialized: c,
				nodesSelectionActive: u
			});
		},
		setEdges: (e) => {
			let { connectionLookup: t, edgeLookup: n } = m();
			Lt(t, n, e), p({ edges: e });
		},
		setDefaultNodesAndEdges: (e, t) => {
			if (e) {
				let { setNodes: t } = m();
				t(e), p({ hasDefaultNodes: !0 });
			}
			if (t) {
				let { setEdges: e } = m();
				e(t), p({ hasDefaultEdges: !0 });
			}
		},
		updateNodeInternals: (e) => {
			let { triggerNodeChanges: t, nodeLookup: n, parentLookup: r, domNode: i, nodeOrigin: a, nodeExtent: o, debug: s, fitViewQueued: c, zIndexMode: l } = m(), { changes: u, updatedInternals: d } = Pt(e, n, r, i, a, o, l);
			d && (Tt(n, r, {
				nodeOrigin: a,
				nodeExtent: o,
				zIndexMode: l
			}), c ? (h(), p({
				fitViewQueued: !1,
				fitViewOptions: void 0
			})) : p({}), u?.length > 0 && (s && console.log(`React Flow: trigger node changes`, u), t?.(u)));
		},
		updateNodePositions: (e, t = !1) => {
			let n = [], r = [], { nodeLookup: i, triggerNodeChanges: a, connection: o, updateConnection: s, onNodesChangeMiddlewareMap: c } = m();
			for (let [a, c] of e) {
				let e = i.get(a), l = !!(e?.expandParent && e?.parentId && c?.position), u = {
					id: a,
					type: `position`,
					position: l ? {
						x: Math.max(0, c.position.x),
						y: Math.max(0, c.position.y)
					} : c.position,
					dragging: t
				};
				if (e && o.inProgress && o.fromNode.id === e.id) {
					let t = gt(e, o.fromHandle, K.Left, !0);
					s({
						...o,
						from: t
					});
				}
				l && e.parentId && n.push({
					id: a,
					parentId: e.parentId,
					rect: {
						...c.internals.positionAbsolute,
						width: c.measured.width ?? 0,
						height: c.measured.height ?? 0
					}
				}), r.push(u);
			}
			if (n.length > 0) {
				let { parentLookup: e, nodeOrigin: t } = m(), a = Nt(n, i, e, t);
				r.push(...a);
			}
			for (let e of c.values()) r = e(r);
			a(r);
		},
		triggerNodeChanges: (e) => {
			let { onNodesChange: t, setNodes: n, nodes: r, hasDefaultNodes: i, debug: a } = m();
			e?.length && (i && n(Sr(e, r)), a && console.log(`React Flow: trigger node changes`, e), t?.(e));
		},
		triggerEdgeChanges: (e) => {
			let { onEdgesChange: t, setEdges: n, edges: r, hasDefaultEdges: i, debug: a } = m();
			e?.length && (i && n(Cr(e, r)), a && console.log(`React Flow: trigger edge changes`, e), t?.(e));
		},
		addSelectedNodes: (e) => {
			let { multiSelectionActive: t, edgeLookup: n, nodeLookup: r, triggerNodeChanges: i, triggerEdgeChanges: a } = m();
			if (t) {
				i(e.map((e) => wr(e, !0)));
				return;
			}
			i(Tr(r, /* @__PURE__ */ new Set([...e]), !0)), a(Tr(n));
		},
		addSelectedEdges: (e) => {
			let { multiSelectionActive: t, edgeLookup: n, nodeLookup: r, triggerNodeChanges: i, triggerEdgeChanges: a } = m();
			if (t) {
				a(e.map((e) => wr(e, !0)));
				return;
			}
			a(Tr(n, /* @__PURE__ */ new Set([...e]))), i(Tr(r, /* @__PURE__ */ new Set(), !0));
		},
		unselectNodesAndEdges: ({ nodes: e, edges: t } = {}) => {
			let { edges: n, nodes: r, nodeLookup: i, triggerNodeChanges: a, triggerEdgeChanges: o } = m(), s = e || r, c = t || n, l = [];
			for (let e of s) {
				if (!e.selected) continue;
				let t = i.get(e.id);
				t && (t.selected = !1), l.push(wr(e.id, !1));
			}
			let u = [];
			for (let e of c) e.selected && u.push(wr(e.id, !1));
			a(l), o(u);
		},
		setMinZoom: (e) => {
			let { panZoom: t, maxZoom: n } = m();
			t?.setScaleExtent([e, n]), p({ minZoom: e });
		},
		setMaxZoom: (e) => {
			let { panZoom: t, minZoom: n } = m();
			t?.setScaleExtent([n, e]), p({ maxZoom: e });
		},
		setTranslateExtent: (e) => {
			m().panZoom?.setTranslateExtent(e), p({ translateExtent: e });
		},
		resetSelectedElements: () => {
			let { edges: e, nodes: t, triggerNodeChanges: n, triggerEdgeChanges: r, elementsSelectable: i } = m();
			if (!i) return;
			let a = t.reduce((e, t) => t.selected ? [...e, wr(t.id, !1)] : e, []), o = e.reduce((e, t) => t.selected ? [...e, wr(t.id, !1)] : e, []);
			n(a), r(o);
		},
		setNodeExtent: (e) => {
			let { nodes: t, nodeLookup: n, parentLookup: r, nodeOrigin: i, elevateNodesOnSelect: a, nodeExtent: o, zIndexMode: s } = m();
			e[0][0] === o[0][0] && e[0][1] === o[0][1] && e[1][0] === o[1][0] && e[1][1] === o[1][1] || (Ot(t, n, r, {
				nodeOrigin: i,
				nodeExtent: e,
				elevateNodesOnSelect: a,
				checkEquality: !1,
				zIndexMode: s
			}), p({ nodeExtent: e }));
		},
		panBy: (e) => {
			let { transform: t, width: n, height: r, panZoom: i, translateExtent: a } = m();
			return Ft({
				delta: e,
				panZoom: i,
				transform: t,
				translateExtent: a,
				width: n,
				height: r
			});
		},
		setCenter: async (e, t, n) => {
			let { width: r, height: i, maxZoom: a, panZoom: o } = m();
			if (!o) return !1;
			let s = n?.zoom === void 0 ? a : n.zoom;
			return await o.setViewport({
				x: r / 2 - e * s,
				y: i / 2 - t * s,
				zoom: s
			}, {
				duration: n?.duration,
				ease: n?.ease,
				interpolate: n?.interpolate
			}), !0;
		},
		cancelConnection: () => {
			p({ connection: { ...W } });
		},
		updateConnection: (e) => {
			p({ connection: e });
		},
		reset: () => p({ ...Ba() })
	};
}, Object.is);
function Ha({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: r, initialWidth: i, initialHeight: a, initialMinZoom: o, initialMaxZoom: s, initialFitViewOptions: c, fitView: l, nodeOrigin: u, nodeExtent: d, zIndexMode: f, children: p }) {
	let [m] = (0, D.useState)(() => Va({
		nodes: e,
		edges: t,
		defaultNodes: n,
		defaultEdges: r,
		width: i,
		height: a,
		fitView: l,
		minZoom: o,
		maxZoom: s,
		fitViewOptions: c,
		nodeOrigin: u,
		nodeExtent: d,
		zIndexMode: f
	}));
	return (0, O.jsx)(Vn, {
		value: m,
		children: (0, O.jsx)(Lr, { children: (0, O.jsx)(ci, { children: p }) })
	});
}
function Ua({ children: e, nodes: t, edges: n, defaultNodes: r, defaultEdges: i, width: a, height: o, fitView: s, fitViewOptions: c, minZoom: l, maxZoom: u, nodeOrigin: d, nodeExtent: f, zIndexMode: p }) {
	return (0, D.useContext)(Bn) ? (0, O.jsx)(O.Fragment, { children: e }) : (0, O.jsx)(Ha, {
		initialNodes: t,
		initialEdges: n,
		defaultNodes: r,
		defaultEdges: i,
		initialWidth: a,
		initialHeight: o,
		fitView: s,
		initialFitViewOptions: c,
		initialMinZoom: l,
		initialMaxZoom: u,
		nodeOrigin: d,
		nodeExtent: f,
		zIndexMode: p,
		children: e
	});
}
var Wa = {
	width: `100%`,
	height: `100%`,
	overflow: `hidden`,
	position: `relative`,
	zIndex: 0
};
function Ga({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, className: i, nodeTypes: a, edgeTypes: o, onNodeClick: s, onEdgeClick: c, onInit: l, onMove: u, onMoveStart: d, onMoveEnd: f, onConnect: p, onConnectStart: m, onConnectEnd: h, onClickConnectStart: g, onClickConnectEnd: _, onNodeMouseEnter: v, onNodeMouseMove: y, onNodeMouseLeave: b, onNodeContextMenu: x, onNodeDoubleClick: S, onNodeDragStart: C, onNodeDrag: w, onNodeDragStop: T, onNodesDelete: E, onEdgesDelete: A, onDelete: j, onSelectionChange: M, onSelectionDragStart: N, onSelectionDrag: P, onSelectionDragStop: F, onSelectionContextMenu: I, onSelectionStart: L, onSelectionEnd: z, onBeforeDelete: B, connectionMode: V, connectionLineType: W = G.Bezier, connectionLineStyle: ee, connectionLineComponent: K, connectionLineContainerStyle: te, deleteKeyCode: ne = `Backspace`, selectionKeyCode: re = `Shift`, selectionOnDrag: ie = !1, selectionMode: ae = U.Full, panActivationKeyCode: oe = `Space`, multiSelectionKeyCode: se = Ie() ? `Meta` : `Control`, zoomActivationKeyCode: ce = Ie() ? `Meta` : `Control`, snapToGrid: le, snapGrid: ue, onlyRenderVisibleElements: de = !1, selectNodesOnDrag: fe, nodesDraggable: pe, autoPanOnNodeFocus: me, nodesConnectable: he, nodesFocusable: q, nodeOrigin: ge = sr, edgesFocusable: _e, edgesReconnectable: ve, elementsSelectable: ye = !0, defaultViewport: be = cr, minZoom: xe = .5, maxZoom: Se = 2, translateExtent: Ce = R, preventScrolling: we = !0, nodeExtent: Te, defaultMarkerColor: Ee = `#b1b1b7`, zoomOnScroll: De = !0, zoomOnPinch: J = !0, panOnScroll: Oe = !1, panOnScrollSpeed: ke = .5, panOnScrollMode: Ae = H.Free, zoomOnDoubleClick: je = !0, panOnDrag: Me = !0, onPaneClick: Ne, onPaneMouseEnter: Pe, onPaneMouseMove: Fe, onPaneMouseLeave: Le, onPaneScroll: Y, onPaneContextMenu: Re, paneClickDistance: ze = 1, nodeClickDistance: Be = 0, children: Ve, onReconnect: He, onReconnectStart: Ue, onReconnectEnd: We, onEdgeContextMenu: Ge, onEdgeDoubleClick: Ke, onEdgeMouseEnter: qe, onEdgeMouseMove: Je, onEdgeMouseLeave: X, reconnectRadius: Ye = 10, onNodesChange: Xe, onEdgesChange: Ze, noDragClassName: Qe = `nodrag`, noWheelClassName: $e = `nowheel`, noPanClassName: et = `nopan`, fitView: tt, fitViewOptions: nt, connectOnClick: rt, attributionPosition: it, proOptions: at, defaultEdgeOptions: ot, elevateNodesOnSelect: st = !0, elevateEdgesOnSelect: ct = !1, disableKeyboardA11y: lt = !1, autoPanOnConnect: ut, autoPanOnNodeDrag: dt, autoPanOnSelection: ft = !0, autoPanSpeed: pt, connectionRadius: mt, isValidConnection: ht, onError: gt, style: _t, id: vt, nodeDragThreshold: yt, connectionDragThreshold: bt, viewport: xt, onViewportChange: St, width: Ct, height: wt, colorMode: Tt = `light`, debug: Et, onScroll: Dt, ariaLabelConfig: Ot, zIndexMode: kt = `basic`, ...At }, jt) {
	let Mt = vt || `1`, Nt = mr(Tt), Pt = (0, D.useCallback)((e) => {
		e.currentTarget.scrollTo({
			top: 0,
			left: 0,
			behavior: `instant`
		}), Dt?.(e);
	}, [Dt]);
	return (0, O.jsx)(`div`, {
		"data-testid": `rf__wrapper`,
		...At,
		onScroll: Pt,
		style: {
			..._t,
			...Wa
		},
		ref: jt,
		className: k([
			`react-flow`,
			i,
			Nt
		]),
		id: vt,
		role: `application`,
		children: (0, O.jsxs)(Ua, {
			nodes: e,
			edges: t,
			width: Ct,
			height: wt,
			fitView: tt,
			fitViewOptions: nt,
			minZoom: xe,
			maxZoom: Se,
			nodeOrigin: ge,
			nodeExtent: Te,
			zIndexMode: kt,
			children: [
				(0, O.jsx)(fr, {
					nodes: e,
					edges: t,
					defaultNodes: n,
					defaultEdges: r,
					onConnect: p,
					onConnectStart: m,
					onConnectEnd: h,
					onClickConnectStart: g,
					onClickConnectEnd: _,
					nodesDraggable: pe,
					autoPanOnNodeFocus: me,
					nodesConnectable: he,
					nodesFocusable: q,
					edgesFocusable: _e,
					edgesReconnectable: ve,
					elementsSelectable: ye,
					elevateNodesOnSelect: st,
					elevateEdgesOnSelect: ct,
					minZoom: xe,
					maxZoom: Se,
					nodeExtent: Te,
					onNodesChange: Xe,
					onEdgesChange: Ze,
					snapToGrid: le,
					snapGrid: ue,
					connectionMode: V,
					translateExtent: Ce,
					connectOnClick: rt,
					defaultEdgeOptions: ot,
					fitView: tt,
					fitViewOptions: nt,
					onNodesDelete: E,
					onEdgesDelete: A,
					onDelete: j,
					onNodeDragStart: C,
					onNodeDrag: w,
					onNodeDragStop: T,
					onSelectionDrag: P,
					onSelectionDragStart: N,
					onSelectionDragStop: F,
					onMove: u,
					onMoveStart: d,
					onMoveEnd: f,
					noPanClassName: et,
					nodeOrigin: ge,
					rfId: Mt,
					autoPanOnConnect: ut,
					autoPanOnNodeDrag: dt,
					autoPanSpeed: pt,
					onError: gt,
					connectionRadius: mt,
					isValidConnection: ht,
					selectNodesOnDrag: fe,
					nodeDragThreshold: yt,
					connectionDragThreshold: bt,
					onBeforeDelete: B,
					debug: Et,
					ariaLabelConfig: Ot,
					zIndexMode: kt
				}),
				(0, O.jsx)(Ra, {
					onInit: l,
					onNodeClick: s,
					onEdgeClick: c,
					onNodeMouseEnter: v,
					onNodeMouseMove: y,
					onNodeMouseLeave: b,
					onNodeContextMenu: x,
					onNodeDoubleClick: S,
					nodeTypes: a,
					edgeTypes: o,
					connectionLineType: W,
					connectionLineStyle: ee,
					connectionLineComponent: K,
					connectionLineContainerStyle: te,
					selectionKeyCode: re,
					selectionOnDrag: ie,
					selectionMode: ae,
					deleteKeyCode: ne,
					multiSelectionKeyCode: se,
					panActivationKeyCode: oe,
					zoomActivationKeyCode: ce,
					onlyRenderVisibleElements: de,
					defaultViewport: be,
					translateExtent: Ce,
					minZoom: xe,
					maxZoom: Se,
					preventScrolling: we,
					zoomOnScroll: De,
					zoomOnPinch: J,
					zoomOnDoubleClick: je,
					panOnScroll: Oe,
					panOnScrollSpeed: ke,
					panOnScrollMode: Ae,
					panOnDrag: Me,
					autoPanOnSelection: ft,
					onPaneClick: Ne,
					onPaneMouseEnter: Pe,
					onPaneMouseMove: Fe,
					onPaneMouseLeave: Le,
					onPaneScroll: Y,
					onPaneContextMenu: Re,
					paneClickDistance: ze,
					nodeClickDistance: Be,
					onSelectionContextMenu: I,
					onSelectionStart: L,
					onSelectionEnd: z,
					onReconnect: He,
					onReconnectStart: Ue,
					onReconnectEnd: We,
					onEdgeContextMenu: Ge,
					onEdgeDoubleClick: Ke,
					onEdgeMouseEnter: qe,
					onEdgeMouseMove: Je,
					onEdgeMouseLeave: X,
					reconnectRadius: Ye,
					defaultMarkerColor: Ee,
					noDragClassName: Qe,
					noWheelClassName: $e,
					noPanClassName: et,
					rfId: Mt,
					disableKeyboardA11y: lt,
					nodeExtent: Te,
					viewport: xt,
					onViewportChange: St
				}),
				(0, O.jsx)(or, { onSelectionChange: M }),
				Ve,
				(0, O.jsx)(er, {
					proOptions: at,
					position: it
				}),
				(0, O.jsx)(Zn, {
					rfId: Mt,
					disableKeyboardA11y: lt
				})
			]
		})
	});
}
var Ka = Mr(Ga);
function qa(e) {
	let [t, n] = (0, D.useState)(e);
	return [
		t,
		n,
		(0, D.useCallback)((e) => n((t) => Sr(e, t)), [])
	];
}
function Ja(e) {
	let [t, n] = (0, D.useState)(e);
	return [
		t,
		n,
		(0, D.useCallback)((e) => n((t) => Cr(e, t)), [])
	];
}
L.error014();
function Ya({ dimensions: e, lineWidth: t, variant: n, className: r }) {
	return (0, O.jsx)(`path`, {
		strokeWidth: t,
		d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`,
		className: k([
			`react-flow__background-pattern`,
			n,
			r
		])
	});
}
function Xa({ radius: e, className: t }) {
	return (0, O.jsx)(`circle`, {
		cx: e,
		cy: e,
		r: e,
		className: k([
			`react-flow__background-pattern`,
			`dots`,
			t
		])
	});
}
var Za;
(function(e) {
	e.Lines = `lines`, e.Dots = `dots`, e.Cross = `cross`;
})(Za ||= {});
var Qa = {
	[Za.Dots]: 1,
	[Za.Lines]: 1,
	[Za.Cross]: 6
}, $a = (e) => ({
	transform: e.transform,
	patternId: `pattern-${e.rfId}`
});
function eo({ id: e, variant: t = Za.Dots, gap: n = 20, size: r, lineWidth: i = 1, offset: a = 0, color: o, bgColor: s, style: c, className: l, patternClassName: u }) {
	let d = (0, D.useRef)(null), { transform: f, patternId: p } = Q($a, Z), m = r || Qa[t], h = t === Za.Dots, g = t === Za.Cross, _ = Array.isArray(n) ? n : [n, n], v = [_[0] * f[2] || 1, _[1] * f[2] || 1], y = m * f[2], b = Array.isArray(a) ? a : [a, a], x = g ? [y, y] : v, S = [b[0] * f[2] || 1 + x[0] / 2, b[1] * f[2] || 1 + x[1] / 2], C = `${p}${e || ``}`;
	return (0, O.jsxs)(`svg`, {
		className: k([`react-flow__background`, l]),
		style: {
			...c,
			...Gr,
			"--xy-background-color-props": s,
			"--xy-background-pattern-color-props": o
		},
		ref: d,
		"data-testid": `rf__background`,
		children: [(0, O.jsx)(`pattern`, {
			id: C,
			x: f[0] % v[0],
			y: f[1] % v[1],
			width: v[0],
			height: v[1],
			patternUnits: `userSpaceOnUse`,
			patternTransform: `translate(-${S[0]},-${S[1]})`,
			children: h ? (0, O.jsx)(Xa, {
				radius: y / 2,
				className: u
			}) : (0, O.jsx)(Ya, {
				dimensions: x,
				lineWidth: i,
				variant: t,
				className: u
			})
		}), (0, O.jsx)(`rect`, {
			x: `0`,
			y: `0`,
			width: `100%`,
			height: `100%`,
			fill: `url(#${C})`
		})]
	});
}
eo.displayName = `Background`;
var to = (0, D.memo)(eo);
function no() {
	return (0, O.jsx)(`svg`, {
		xmlns: `http://www.w3.org/2000/svg`,
		viewBox: `0 0 32 32`,
		children: (0, O.jsx)(`path`, { d: `M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z` })
	});
}
function ro() {
	return (0, O.jsx)(`svg`, {
		xmlns: `http://www.w3.org/2000/svg`,
		viewBox: `0 0 32 5`,
		children: (0, O.jsx)(`path`, { d: `M0 0h32v4.2H0z` })
	});
}
function io() {
	return (0, O.jsx)(`svg`, {
		xmlns: `http://www.w3.org/2000/svg`,
		viewBox: `0 0 32 30`,
		children: (0, O.jsx)(`path`, { d: `M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z` })
	});
}
function ao() {
	return (0, O.jsx)(`svg`, {
		xmlns: `http://www.w3.org/2000/svg`,
		viewBox: `0 0 25 32`,
		children: (0, O.jsx)(`path`, { d: `M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z` })
	});
}
function oo() {
	return (0, O.jsx)(`svg`, {
		xmlns: `http://www.w3.org/2000/svg`,
		viewBox: `0 0 25 32`,
		children: (0, O.jsx)(`path`, { d: `M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z` })
	});
}
function so({ children: e, className: t, ...n }) {
	return (0, O.jsx)(`button`, {
		type: `button`,
		className: k([`react-flow__controls-button`, t]),
		...n,
		children: e
	});
}
var co = (e) => ({
	isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
	minZoomReached: e.transform[2] <= e.minZoom,
	maxZoomReached: e.transform[2] >= e.maxZoom,
	ariaLabelConfig: e.ariaLabelConfig
});
function lo({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: r = !0, fitViewOptions: i, onZoomIn: a, onZoomOut: o, onFitView: s, onInteractiveChange: c, className: l, children: u, position: d = `bottom-left`, orientation: f = `vertical`, "aria-label": p }) {
	let m = $(), { isInteractive: h, minZoomReached: g, maxZoomReached: _, ariaLabelConfig: v } = Q(co, Z), { zoomIn: y, zoomOut: b, fitView: x } = Br();
	return (0, O.jsxs)(Qn, {
		className: k([
			`react-flow__controls`,
			f === `horizontal` ? `horizontal` : `vertical`,
			l
		]),
		position: d,
		style: e,
		"data-testid": `rf__controls`,
		"aria-label": p ?? v[`controls.ariaLabel`],
		children: [
			t && (0, O.jsxs)(O.Fragment, { children: [(0, O.jsx)(so, {
				onClick: () => {
					y(), a?.();
				},
				className: `react-flow__controls-zoomin`,
				title: v[`controls.zoomIn.ariaLabel`],
				"aria-label": v[`controls.zoomIn.ariaLabel`],
				disabled: _,
				children: (0, O.jsx)(no, {})
			}), (0, O.jsx)(so, {
				onClick: () => {
					b(), o?.();
				},
				className: `react-flow__controls-zoomout`,
				title: v[`controls.zoomOut.ariaLabel`],
				"aria-label": v[`controls.zoomOut.ariaLabel`],
				disabled: g,
				children: (0, O.jsx)(ro, {})
			})] }),
			n && (0, O.jsx)(so, {
				className: `react-flow__controls-fitview`,
				onClick: () => {
					x(i), s?.();
				},
				title: v[`controls.fitView.ariaLabel`],
				"aria-label": v[`controls.fitView.ariaLabel`],
				children: (0, O.jsx)(io, {})
			}),
			r && (0, O.jsx)(so, {
				className: `react-flow__controls-interactive`,
				onClick: () => {
					m.setState({
						nodesDraggable: !h,
						nodesConnectable: !h,
						elementsSelectable: !h
					}), c?.(!h);
				},
				title: v[`controls.interactive.ariaLabel`],
				"aria-label": v[`controls.interactive.ariaLabel`],
				children: h ? (0, O.jsx)(oo, {}) : (0, O.jsx)(ao, {})
			}),
			u
		]
	});
}
lo.displayName = `Controls`;
var uo = (0, D.memo)(lo);
function fo({ id: e, x: t, y: n, width: r, height: i, style: a, color: o, strokeColor: s, strokeWidth: c, className: l, borderRadius: u, shapeRendering: d, selected: f, onClick: p }) {
	let { background: m, backgroundColor: h } = a || {}, g = o || m || h;
	return (0, O.jsx)(`rect`, {
		className: k([
			`react-flow__minimap-node`,
			{ selected: f },
			l
		]),
		x: t,
		y: n,
		rx: u,
		ry: u,
		width: r,
		height: i,
		style: {
			fill: g,
			stroke: s,
			strokeWidth: c
		},
		shapeRendering: d,
		onClick: p ? (t) => p(t, e) : void 0
	});
}
var po = (0, D.memo)(fo), mo = (e) => e.nodes.map((e) => e.id), ho = (e) => e instanceof Function ? e : () => e;
function go({ nodeStrokeColor: e, nodeColor: t, nodeClassName: n = ``, nodeBorderRadius: r = 5, nodeStrokeWidth: i, nodeComponent: a = po, onClick: o }) {
	let s = Q(mo, Z), c = ho(t), l = ho(e), u = ho(n), d = typeof window > `u` || window.chrome ? `crispEdges` : `geometricPrecision`;
	return (0, O.jsx)(O.Fragment, { children: s.map((e) => (0, O.jsx)(vo, {
		id: e,
		nodeColorFunc: c,
		nodeStrokeColorFunc: l,
		nodeClassNameFunc: u,
		nodeBorderRadius: r,
		nodeStrokeWidth: i,
		NodeComponent: a,
		onClick: o,
		shapeRendering: d
	}, e)) });
}
function _o({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: r, nodeBorderRadius: i, nodeStrokeWidth: a, shapeRendering: o, NodeComponent: s, onClick: c }) {
	let { node: l, x: u, y: d, width: f, height: p } = Q((t) => {
		let n = t.nodeLookup.get(e);
		if (!n) return {
			node: void 0,
			x: 0,
			y: 0,
			width: 0,
			height: 0
		};
		let r = n.internals.userNode, { x: i, y: a } = n.internals.positionAbsolute, { width: o, height: s } = Y(r);
		return {
			node: r,
			x: i,
			y: a,
			width: o,
			height: s
		};
	}, Z);
	return !l || l.hidden || !Re(l) ? null : (0, O.jsx)(s, {
		x: u,
		y: d,
		width: f,
		height: p,
		style: l.style,
		selected: !!l.selected,
		className: r(l),
		color: t(l),
		borderRadius: i,
		strokeColor: n(l),
		strokeWidth: a,
		shapeRendering: o,
		onClick: c,
		id: l.id
	});
}
var vo = (0, D.memo)(_o), yo = (0, D.memo)(go), bo = 200, xo = 150, So = (e) => !e.hidden, Co = (e) => {
	let t = {
		x: -e.transform[0] / e.transform[2],
		y: -e.transform[1] / e.transform[2],
		width: e.width / e.transform[2],
		height: e.height / e.transform[2]
	};
	return {
		viewBB: t,
		boundingRect: e.nodeLookup.size > 0 ? we(ce(e.nodeLookup, { filter: So }), t) : t,
		rfId: e.rfId,
		panZoom: e.panZoom,
		translateExtent: e.translateExtent,
		flowWidth: e.width,
		flowHeight: e.height,
		ariaLabelConfig: e.ariaLabelConfig
	};
}, wo = `react-flow__minimap-desc`;
function To({ style: e, className: t, nodeStrokeColor: n, nodeColor: r, nodeClassName: i = ``, nodeBorderRadius: a = 5, nodeStrokeWidth: o, nodeComponent: s, bgColor: c, maskColor: l, maskStrokeColor: u, maskStrokeWidth: d, position: f = `bottom-right`, onClick: p, onNodeClick: m, pannable: h = !1, zoomable: g = !1, ariaLabel: _, inversePan: v, zoomStep: y = 1, offsetScale: b = 5 }) {
	let x = $(), S = (0, D.useRef)(null), { boundingRect: C, viewBB: w, rfId: T, panZoom: E, translateExtent: A, flowWidth: j, flowHeight: M, ariaLabelConfig: N } = Q(Co, Z), P = e?.width ?? bo, F = e?.height ?? xo, I = C.width / P, L = C.height / F, R = Math.max(I, L), z = R * P, B = R * F, V = b * R, H = C.x - (z - C.width) / 2 - V, U = C.y - (B - C.height) / 2 - V, W = z + V * 2, G = B + V * 2, ee = `${wo}-${T}`, K = (0, D.useRef)(0), te = (0, D.useRef)();
	K.current = R, (0, D.useEffect)(() => {
		if (S.current && E) return te.current = en({
			domNode: S.current,
			panZoom: E,
			getTransform: () => x.getState().transform,
			getViewScale: () => K.current
		}), () => {
			te.current?.destroy();
		};
	}, [E]), (0, D.useEffect)(() => {
		te.current?.update({
			translateExtent: A,
			width: j,
			height: M,
			inversePan: v,
			pannable: h,
			zoomStep: y,
			zoomable: g
		});
	}, [
		h,
		g,
		v,
		y,
		A,
		j,
		M
	]);
	let ne = p ? (e) => {
		let [t, n] = te.current?.pointer(e) || [0, 0];
		p(e, {
			x: t,
			y: n
		});
	} : void 0, re = m ? (0, D.useCallback)((e, t) => {
		let n = x.getState().nodeLookup.get(t).internals.userNode;
		m(e, n);
	}, []) : void 0, ie = _ ?? N[`minimap.ariaLabel`];
	return (0, O.jsx)(Qn, {
		position: f,
		style: {
			...e,
			"--xy-minimap-background-color-props": typeof c == `string` ? c : void 0,
			"--xy-minimap-mask-background-color-props": typeof l == `string` ? l : void 0,
			"--xy-minimap-mask-stroke-color-props": typeof u == `string` ? u : void 0,
			"--xy-minimap-mask-stroke-width-props": typeof d == `number` ? d * R : void 0,
			"--xy-minimap-node-background-color-props": typeof r == `string` ? r : void 0,
			"--xy-minimap-node-stroke-color-props": typeof n == `string` ? n : void 0,
			"--xy-minimap-node-stroke-width-props": typeof o == `number` ? o : void 0
		},
		className: k([`react-flow__minimap`, t]),
		"data-testid": `rf__minimap`,
		children: (0, O.jsxs)(`svg`, {
			width: P,
			height: F,
			viewBox: `${H} ${U} ${W} ${G}`,
			className: `react-flow__minimap-svg`,
			role: `img`,
			"aria-labelledby": ee,
			ref: S,
			onClick: ne,
			children: [
				ie && (0, O.jsx)(`title`, {
					id: ee,
					children: ie
				}),
				(0, O.jsx)(yo, {
					onClick: re,
					nodeColor: r,
					nodeStrokeColor: n,
					nodeBorderRadius: a,
					nodeClassName: i,
					nodeStrokeWidth: o,
					nodeComponent: s
				}),
				(0, O.jsx)(`path`, {
					className: `react-flow__minimap-mask`,
					d: `M${H - V},${U - V}h${W + V * 2}v${G + V * 2}h${-W - V * 2}z
        M${w.x},${w.y}h${w.width}v${w.height}h${-w.width}z`,
					fillRule: `evenodd`,
					pointerEvents: `none`
				})
			]
		})
	});
}
To.displayName = `MiniMap`;
var Eo = (0, D.memo)(To), Do = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, Oo = {
	[gn.Line]: `right`,
	[gn.Handle]: `bottom-right`
};
function ko({ nodeId: e, position: t, variant: n = gn.Handle, className: r, style: i = void 0, children: a, color: o, minWidth: s = 10, minHeight: c = 10, maxWidth: l = Number.MAX_VALUE, maxHeight: u = Number.MAX_VALUE, keepAspectRatio: d = !1, resizeDirection: f, autoScale: p = !0, shouldResize: m, onResizeStart: h, onResize: g, onResizeEnd: _ }) {
	let v = ai(), y = typeof e == `string` ? e : v, b = $(), x = (0, D.useRef)(null), S = n === gn.Handle, C = Q((0, D.useCallback)(Do(S && p), [S, p]), Z), w = (0, D.useRef)(null), T = t ?? Oo[n];
	return (0, D.useEffect)(() => {
		if (!(!x.current || !y)) return w.current ||= Dn({
			domNode: x.current,
			nodeId: y,
			getStoreItems: () => {
				let { nodeLookup: e, transform: t, snapGrid: n, snapToGrid: r, nodeOrigin: i, domNode: a } = b.getState();
				return {
					nodeLookup: e,
					transform: t,
					snapGrid: n,
					snapToGrid: r,
					nodeOrigin: i,
					paneDomNode: a
				};
			},
			onChange: (e, t) => {
				let { triggerNodeChanges: n, nodeLookup: r, parentLookup: i, nodeOrigin: a } = b.getState(), o = [], s = {
					x: e.x,
					y: e.y
				}, c = r.get(y);
				if (c && c.expandParent && c.parentId) {
					let t = c.origin ?? a, n = e.width ?? c.measured.width ?? 0, l = e.height ?? c.measured.height ?? 0, u = Nt([{
						id: c.id,
						parentId: c.parentId,
						rect: {
							width: n,
							height: l,
							...ze({
								x: e.x ?? c.position.x,
								y: e.y ?? c.position.y
							}, {
								width: n,
								height: l
							}, c.parentId, r, t)
						}
					}], r, i, a);
					o.push(...u), s.x = e.x ? Math.max(t[0] * n, e.x) : void 0, s.y = e.y ? Math.max(t[1] * l, e.y) : void 0;
				}
				if (s.x !== void 0 && s.y !== void 0) {
					let e = {
						id: y,
						type: `position`,
						position: { ...s }
					};
					o.push(e);
				}
				if (e.width !== void 0 && e.height !== void 0) {
					let t = {
						id: y,
						type: `dimensions`,
						resizing: !0,
						setAttributes: f ? f === `horizontal` ? `width` : `height` : !0,
						dimensions: {
							width: e.width,
							height: e.height
						}
					};
					o.push(t);
				}
				for (let e of t) {
					let t = {
						...e,
						type: `position`
					};
					o.push(t);
				}
				n(o);
			},
			onEnd: ({ width: e, height: t }) => {
				let n = {
					id: y,
					type: `dimensions`,
					resizing: !1,
					dimensions: {
						width: e,
						height: t
					}
				};
				b.getState().triggerNodeChanges([n]);
			}
		}), w.current.update({
			controlPosition: T,
			boundaries: {
				minWidth: s,
				minHeight: c,
				maxWidth: l,
				maxHeight: u
			},
			keepAspectRatio: d,
			resizeDirection: f,
			onResizeStart: h,
			onResize: g,
			onResizeEnd: _,
			shouldResize: m
		}), () => {
			w.current?.destroy();
		};
	}, [
		T,
		s,
		c,
		l,
		u,
		d,
		h,
		g,
		_,
		m
	]), (0, O.jsx)(`div`, {
		className: k([
			`react-flow__resize-control`,
			`nodrag`,
			...T.split(`-`),
			n,
			r
		]),
		ref: x,
		style: {
			...i,
			scale: C,
			...o && { [S ? `backgroundColor` : `borderColor`]: o }
		},
		children: a
	});
}
(0, D.memo)(ko);
function Ao(e, t, n, r) {
	let i = e;
	for (;;) {
		let e = t(i);
		if (e.length === 1 && !r(i)) {
			i = e[0];
			continue;
		}
		break;
	}
	let a = t(i).filter((e) => e !== null).map((e) => Ao(e, t, n, r));
	return n(i, a);
}
function jo(e) {
	return Ao(e, (e) => (e.Syntactic?.children ?? []).filter((e) => e !== null), (e, t) => {
		let n = structuredClone(e);
		return n.Syntactic ? {
			...n,
			Syntactic: {
				...n.Syntactic,
				children: structuredClone(t)
			}
		} : n;
	}, (e) => e.Syntactic?.prodInfo.some((e) => e.type === `terminal`) ?? !1);
}
function Mo(e, t = 0, n = null, r = 1) {
	let i = e.Syntactic?.children.filter((e) => e !== null) ?? [], a = {
		ast: e,
		children: [],
		x: 0,
		y: t * 200,
		mod: 0,
		ancestor: null,
		change: 0,
		shift: 0,
		number: r,
		parent: n
	};
	return a.ancestor = a, a.children = i.map((e, n) => Mo(e, t + 1, a, n + 1)), a;
}
function No(e) {
	if (e.children.length === 0) Ho(e) ? e.x = Ho(e).x + 300 : e.x = 0;
	else {
		let t = e.children[0];
		for (let n of e.children) No(n), t = Po(n, t);
		Io(e);
		let n = (e.children[0].x + e.children[e.children.length - 1].x) / 2, r = Ho(e);
		r ? (e.x = r.x + 300, e.mod = e.x - n) : e.x = n;
	}
}
function Po(e, t) {
	let n = Ho(e);
	if (!n) return t;
	let r = e, i = e, a = n, o = zo(e), s = r.mod, c = i.mod, l = a.mod, u = o.mod;
	for (; Vo(a) && Bo(r);) {
		a = Vo(a), r = Bo(r), o = Bo(o), i = Vo(i);
		let n = a.x + l - (r.x + s) + 300;
		n > 0 && (Fo(Ro(a, e, t), e, n), s += n, c += n), l += a.mod, s += r.mod, u += o.mod, c += i.mod;
	}
	return Vo(a) && !Vo(i) && (i.thread = Vo(a), i.mod += l - c), Bo(r) && !Bo(o) && (o.thread = Bo(r), o.mod += s - u), t;
}
function Fo(e, t, n) {
	let r = t.number - e.number;
	t.change -= n / r, t.shift += n, e.change += n / r, t.x += n, t.mod += n;
}
function Io(e) {
	let t = 0, n = 0;
	for (let r = e.children.length - 1; r >= 0; r--) {
		let i = e.children[r];
		i.x += t, i.mod += t, n += i.change, t += i.shift + n;
	}
}
function Lo(e, t = 0) {
	e.x += t;
	for (let n of e.children) Lo(n, t + e.mod);
}
function Ro(e, t, n) {
	return t.parent.children.includes(e.ancestor) ? e.ancestor : n;
}
function zo(e) {
	return e.parent.children[0];
}
function Bo(e) {
	return e.children.length > 0 ? e.children[0] : e.thread;
}
function Vo(e) {
	return e.children.length > 0 ? e.children[e.children.length - 1] : e.thread;
}
function Ho(e) {
	if (!e.parent) return null;
	let t = e.parent.children.indexOf(e);
	return t > 0 ? e.parent.children[t - 1] : null;
}
function Uo(e) {
	return {
		node: e.ast,
		x: e.x,
		y: e.y,
		children: e.children.map(Uo)
	};
}
function Wo(e) {
	let t = Mo(e);
	return No(t), Lo(t), Uo(t);
}
function Go(e) {
	let t = [], n = [], r = 0;
	function i(e, a = null) {
		let o = String(r++), s = e.node.Syntactic ? e.node.Syntactic.name : `${e.node.Lexical.str} : ${e.node.Lexical.name}`, c = e.node.Syntactic ? `syntactic` : `lexical`;
		t.push({
			id: o,
			position: {
				x: e.x,
				y: e.y
			},
			data: {
				label: s,
				ast: e.node,
				index: 0,
				depth: e.y
			},
			type: c
		}), a !== null && n.push({
			id: `e${a}-${o}`,
			source: a,
			target: o
		});
		for (let t of e.children) i(t, o);
		return o;
	}
	return i(e), {
		nodes: t,
		edges: n
	};
}
function Ko(e) {
	return Go(Wo(e));
}
function qo([e, t], n) {
	let [r, i] = n ?? [-1, -1];
	if (!(e === -1 || t === -1 || r === -1 || i === -1)) return e === r && i === t ? `exact` : e <= r && i <= t ? `descendants` : e >= r && i >= t ? `ancestors` : void 0;
}
var Jo = `w-[256px] h-fit py-4 pl-2 dark:bg-neutral-900
  data-[highlight=exact]:bg-yellow-400 data-[highlight=ancestors]:bg-yellow-50 data-[highlight=descendants]:bg-yellow-200
  data-[highlight=exact]:dark:bg-yellow-600 data-[highlight=ancestors]:dark:bg-yellow-950  data-[highlight=descendants]:dark:bg-yellow-800
  rounded-lg border-2 border-neutral-300 dark:border-neutral-700 transition-colors
  `, Yo = {
	syntactic: (0, D.memo)(({ data: e }) => {
		let t = o(c), { Syntactic: n } = e.ast;
		return (0, O.jsxs)(O.Fragment, { children: [
			(0, O.jsx)(pi, {
				type: `target`,
				position: K.Top
			}),
			(0, O.jsxs)(`div`, {
				"data-highlight": qo(t, n?.loc),
				className: Jo,
				children: [(0, O.jsxs)(`div`, {
					className: `line-clamp-1 font-serif`,
					children: [n?.name, ` :`]
				}), (0, O.jsx)(`div`, {
					className: `space-x-1 line-clamp-1`,
					children: n?.prodInfo.map(({ type: e, value: t }) => (0, O.jsx)(`span`, {
						"data-prod-type": e,
						className: `data-[prod-type=terminal]:font-mono data-[prod-type=nonterminal]:font-serif`,
						children: t
					}, t))
				})]
			}),
			(0, O.jsx)(pi, {
				type: `source`,
				position: K.Bottom
			})
		] });
	}),
	lexical: (0, D.memo)(({ data: e }) => {
		let t = o(c), { Lexical: n } = e.ast;
		return (0, O.jsxs)(O.Fragment, { children: [
			(0, O.jsx)(pi, {
				type: `target`,
				position: K.Top
			}),
			(0, O.jsxs)(`div`, {
				"data-highlight": qo(t, n?.loc),
				className: Jo,
				children: [(0, O.jsx)(`div`, {
					className: `line-clamp-1 font-serif`,
					children: n?.name
				}), (0, O.jsx)(`div`, {
					className: `font-mono`,
					children: n?.str
				})]
			}),
			(0, O.jsx)(pi, {
				type: `source`,
				position: K.Bottom
			})
		] });
	})
}, Xo = a((e) => {
	let t = e(u);
	if (!t) return null;
	let { nodes: n, edges: r } = Ko(t);
	return {
		nodes: n,
		edges: r
	};
}), Zo = a((e) => {
	let t = e(u);
	if (!t) return null;
	let { nodes: n, edges: r } = Ko(jo(t));
	return {
		nodes: n,
		edges: r
	};
}), Qo = a(!0);
function $o() {
	let [e, t] = s(Qo), n = (0, D.useRef)(null), r = o(Zo), i = o(Xo), a = o(c), [l, u, d] = qa([]), [f, p, m] = Ja([]);
	(0, D.useEffect)(() => {
		e || (i ? (u([...i.nodes]), p([...i.edges])) : (u([]), p([])));
	}, [
		e,
		i,
		u,
		p
	]), (0, D.useEffect)(() => {
		e && (r ? (u([...r.nodes]), p([...r.edges])) : (u([]), p([])));
	}, [
		e,
		r,
		u,
		p
	]);
	let h = (0, D.useMemo)(() => JSON.stringify(l.filter((e) => {
		let t = qo(a, e.data.ast.Syntactic?.loc ?? e.data.ast.Lexical?.loc);
		return t === `exact` || t === `descendants`;
	}).map((e) => e.id)), [l, a]), g = (0, D.useCallback)(() => {
		let [e, t] = a;
		if (n.current && e !== -1 && t !== -1) {
			let e = JSON.parse(h);
			n.current.fitView({
				nodes: l.filter((t) => e.includes(t.id)),
				duration: es,
				padding: ts
			});
		} else setTimeout(() => {
			n.current?.fitView({
				duration: es,
				padding: ts
			});
		});
	}, [h, a]);
	return (0, D.useEffect)(() => {
		setTimeout(() => {
			g();
		}, 1);
	}, [g]), (0, O.jsx)(`div`, {
		className: `size-full`,
		children: (0, O.jsxs)(Ka, {
			nodes: l,
			edges: f,
			colorMode: `system`,
			minZoom: .0625,
			onNodesChange: d,
			onEdgesChange: m,
			onInit: (e) => {
				n.current = e;
			},
			nodesDraggable: !1,
			edgesFocusable: !1,
			edgesReconnectable: !1,
			nodesConnectable: !1,
			elementsSelectable: !1,
			nodeTypes: Yo,
			onlyRenderVisibleElements: !0,
			children: [
				(0, O.jsx)(uo, { children: (0, O.jsx)(so, {
					onClick: () => t((e) => !e),
					title: e ? `Expand AST` : `Compress AST`,
					children: e ? (0, O.jsx)(E, {}) : (0, O.jsx)(T, {})
				}) }),
				l.length === 0 && (0, O.jsx)(`div`, {
					className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-500`,
					children: `No AST to display.`
				}),
				(0, O.jsx)(Eo, {
					zoomable: !0,
					pannable: !0
				}),
				(0, O.jsx)(to, {
					variant: Za.Dots,
					gap: 16,
					size: 0
				})
			]
		})
	});
}
var es = 500, ts = .1;
export { $o as default };

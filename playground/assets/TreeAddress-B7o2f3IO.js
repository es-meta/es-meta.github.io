import { c as e, n as t, t as n } from "./jsx-runtime-CqwARRmJ.js";
import { b as r, x as i } from "./utils-CcSgwp0X.js";
import { Ct as a, a as o, d as s, f as c, ht as l, kt as u } from "./index-QWim6Jbc.js";
import { n as d, r as f, t as p } from "./tooltip-iTuHEADK.js";
var m = u(`chevron-down`, [[`path`, {
	d: `m6 9 6 6 6-6`,
	key: `qrunsl`
}]]), h = u(`chevron-up`, [[`path`, {
	d: `m18 15-6-6-6 6`,
	key: `153udz`
}]]), g = u(`search`, [[`path`, {
	d: `m21 21-4.34-4.34`,
	key: `14j7rj`
}], [`circle`, {
	cx: `11`,
	cy: `11`,
	r: `8`,
	key: `4ej97u`
}]]);
function _() {
	for (var e = 0, t, n, r = ``; e < arguments.length;) (t = arguments[e++]) && (n = v(t)) && (r && (r += ` `), r += n);
	return r;
}
function v(e) {
	if (typeof e == `string`) return e;
	for (var t, n = ``, r = 0; r < e.length; r++) e[r] && (t = v(e[r])) && (n && (n += ` `), n += t);
	return n;
}
var y = `-`;
function b(e) {
	var t = te(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, i = r === void 0 ? {} : r;
	function a(e) {
		var n = e.split(y);
		return n[0] === `` && n.length !== 1 && n.shift(), x(n, t) || ee(e);
	}
	function o(e, t) {
		var r = n[e] || [];
		return t && i[e] ? [].concat(r, i[e]) : r;
	}
	return {
		getClassGroupId: a,
		getConflictingClassGroupIds: o
	};
}
function x(e, t) {
	if (e.length === 0) return t.classGroupId;
	var n = e[0], r = t.nextPart.get(n), i = r ? x(e.slice(1), r) : void 0;
	if (i) return i;
	if (t.validators.length !== 0) {
		var a = e.join(y);
		return t.validators.find(function(e) {
			var t = e.validator;
			return t(a);
		})?.classGroupId;
	}
}
var S = /^\[(.+)\]$/;
function ee(e) {
	if (S.test(e)) {
		var t = S.exec(e)[1], n = t?.substring(0, t.indexOf(`:`));
		if (n) return `arbitrary..` + n;
	}
}
function te(e) {
	var t = e.theme, n = e.prefix, r = {
		nextPart: /* @__PURE__ */ new Map(),
		validators: []
	};
	return E(Object.entries(e.classGroups), n).forEach(function(e) {
		var n = e[0], i = e[1];
		C(i, r, n, t);
	}), r;
}
function C(e, t, n, r) {
	e.forEach(function(e) {
		if (typeof e == `string`) {
			var i = e === `` ? t : w(t, e);
			i.classGroupId = n;
			return;
		}
		if (typeof e == `function`) {
			if (T(e)) {
				C(e(r), t, n, r);
				return;
			}
			t.validators.push({
				validator: e,
				classGroupId: n
			});
			return;
		}
		Object.entries(e).forEach(function(e) {
			var i = e[0], a = e[1];
			C(a, w(t, i), n, r);
		});
	});
}
function w(e, t) {
	var n = e;
	return t.split(y).forEach(function(e) {
		n.nextPart.has(e) || n.nextPart.set(e, {
			nextPart: /* @__PURE__ */ new Map(),
			validators: []
		}), n = n.nextPart.get(e);
	}), n;
}
function T(e) {
	return e.isThemeGetter;
}
function E(e, t) {
	return t ? e.map(function(e) {
		return [e[0], e[1].map(function(e) {
			return typeof e == `string` ? t + e : typeof e == `object` ? Object.fromEntries(Object.entries(e).map(function(e) {
				var n = e[0], r = e[1];
				return [t + n, r];
			})) : e;
		})];
	}) : e;
}
function D(e) {
	if (e < 1) return {
		get: function() {},
		set: function() {}
	};
	var t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
	function i(i, a) {
		n.set(i, a), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
	}
	return {
		get: function(e) {
			var t = n.get(e);
			if (t !== void 0) return t;
			if ((t = r.get(e)) !== void 0) return i(e, t), t;
		},
		set: function(e, t) {
			n.has(e) ? n.set(e, t) : i(e, t);
		}
	};
}
function O(e) {
	var t = e.separator || `:`, n = t.length === 1, r = t[0], i = t.length;
	return function(e) {
		for (var a = [], o = 0, s = 0, c, l = 0; l < e.length; l++) {
			var u = e[l];
			if (o === 0) {
				if (u === r && (n || e.slice(l, l + i) === t)) {
					a.push(e.slice(s, l)), s = l + i;
					continue;
				}
				if (u === `/`) {
					c = l;
					continue;
				}
			}
			u === `[` ? o++ : u === `]` && o--;
		}
		var d = a.length === 0 ? e : e.substring(s), f = d.startsWith(`!`);
		return {
			modifiers: a,
			hasImportantModifier: f,
			baseClassName: f ? d.substring(1) : d,
			maybePostfixModifierPosition: c && c > s ? c - s : void 0
		};
	};
}
function k(e) {
	if (e.length <= 1) return e;
	var t = [], n = [];
	return e.forEach(function(e) {
		e[0] === `[` ? (t.push.apply(t, n.sort().concat([e])), n = []) : n.push(e);
	}), t.push.apply(t, n.sort()), t;
}
function A(e) {
	return {
		cache: D(e.cacheSize),
		splitModifiers: O(e),
		...b(e)
	};
}
var j = /\s+/;
function M(e, t) {
	var n = t.splitModifiers, r = t.getClassGroupId, i = t.getConflictingClassGroupIds, a = /* @__PURE__ */ new Set();
	return e.trim().split(j).map(function(e) {
		var t = n(e), i = t.modifiers, a = t.hasImportantModifier, o = t.baseClassName, s = t.maybePostfixModifierPosition, c = r(s ? o.substring(0, s) : o), l = !!s;
		if (!c) {
			if (!s || (c = r(o), !c)) return {
				isTailwindClass: !1,
				originalClassName: e
			};
			l = !1;
		}
		var u = k(i).join(`:`);
		return {
			isTailwindClass: !0,
			modifierId: a ? u + `!` : u,
			classGroupId: c,
			originalClassName: e,
			hasPostfixModifier: l
		};
	}).reverse().filter(function(e) {
		if (!e.isTailwindClass) return !0;
		var t = e.modifierId, n = e.classGroupId, r = e.hasPostfixModifier, o = t + n;
		return a.has(o) ? !1 : (a.add(o), i(n, r).forEach(function(e) {
			return a.add(t + e);
		}), !0);
	}).reverse().map(function(e) {
		return e.originalClassName;
	}).join(` `);
}
function N() {
	var e = [...arguments], t, n, r, i = a;
	function a(a) {
		var s = e[0];
		return t = A(e.slice(1).reduce(function(e, t) {
			return t(e);
		}, s())), n = t.cache.get, r = t.cache.set, i = o, o(a);
	}
	function o(e) {
		var i = n(e);
		if (i) return i;
		var a = M(e, t);
		return r(e, a), a;
	}
	return function() {
		return i(_.apply(null, arguments));
	};
}
function P(e) {
	var t = function(t) {
		return t[e] || [];
	};
	return t.isThemeGetter = !0, t;
}
var F = /^\[(?:([a-z-]+):)?(.+)\]$/i, I = /^\d+\/\d+$/, L = /* @__PURE__ */ new Set([
	`px`,
	`full`,
	`screen`
]), ne = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, re = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ie = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function R(e) {
	return B(e) || L.has(e) || I.test(e) || ae(e);
}
function ae(e) {
	return G(e, `length`, de);
}
function oe(e) {
	return G(e, `size`, fe);
}
function se(e) {
	return G(e, `position`, fe);
}
function ce(e) {
	return G(e, `url`, pe);
}
function z(e) {
	return G(e, `number`, B);
}
function B(e) {
	return !Number.isNaN(Number(e));
}
function le(e) {
	return e.endsWith(`%`) && B(e.slice(0, -1));
}
function V(e) {
	return me(e) || G(e, `number`, me);
}
function H(e) {
	return F.test(e);
}
function U() {
	return !0;
}
function W(e) {
	return ne.test(e);
}
function ue(e) {
	return G(e, ``, he);
}
function G(e, t, n) {
	var r = F.exec(e);
	return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function de(e) {
	return re.test(e);
}
function fe() {
	return !1;
}
function pe(e) {
	return e.startsWith(`url(`);
}
function me(e) {
	return Number.isInteger(Number(e));
}
function he(e) {
	return ie.test(e);
}
function ge() {
	var e = P(`colors`), t = P(`spacing`), n = P(`blur`), r = P(`brightness`), i = P(`borderColor`), a = P(`borderRadius`), o = P(`borderSpacing`), s = P(`borderWidth`), c = P(`contrast`), l = P(`grayscale`), u = P(`hueRotate`), d = P(`invert`), f = P(`gap`), p = P(`gradientColorStops`), m = P(`gradientColorStopPositions`), h = P(`inset`), g = P(`margin`), _ = P(`opacity`), v = P(`padding`), y = P(`saturate`), b = P(`scale`), x = P(`sepia`), S = P(`skew`), ee = P(`space`), te = P(`translate`), C = function() {
		return [
			`auto`,
			`contain`,
			`none`
		];
	}, w = function() {
		return [
			`auto`,
			`hidden`,
			`clip`,
			`visible`,
			`scroll`
		];
	}, T = function() {
		return [
			`auto`,
			H,
			t
		];
	}, E = function() {
		return [H, t];
	}, D = function() {
		return [``, R];
	}, O = function() {
		return [
			`auto`,
			B,
			H
		];
	}, k = function() {
		return [
			`bottom`,
			`center`,
			`left`,
			`left-bottom`,
			`left-top`,
			`right`,
			`right-bottom`,
			`right-top`,
			`top`
		];
	}, A = function() {
		return [
			`solid`,
			`dashed`,
			`dotted`,
			`double`,
			`none`
		];
	}, j = function() {
		return [
			`normal`,
			`multiply`,
			`screen`,
			`overlay`,
			`darken`,
			`lighten`,
			`color-dodge`,
			`color-burn`,
			`hard-light`,
			`soft-light`,
			`difference`,
			`exclusion`,
			`hue`,
			`saturation`,
			`color`,
			`luminosity`,
			`plus-lighter`
		];
	}, M = function() {
		return [
			`start`,
			`end`,
			`center`,
			`between`,
			`around`,
			`evenly`,
			`stretch`
		];
	}, N = function() {
		return [
			``,
			`0`,
			H
		];
	}, F = function() {
		return [
			`auto`,
			`avoid`,
			`all`,
			`avoid-page`,
			`page`,
			`left`,
			`right`,
			`column`
		];
	}, I = function() {
		return [B, z];
	}, L = function() {
		return [B, H];
	};
	return {
		cacheSize: 500,
		theme: {
			colors: [U],
			spacing: [R],
			blur: [
				`none`,
				``,
				W,
				H
			],
			brightness: I(),
			borderColor: [e],
			borderRadius: [
				`none`,
				``,
				`full`,
				W,
				H
			],
			borderSpacing: E(),
			borderWidth: D(),
			contrast: I(),
			grayscale: N(),
			hueRotate: L(),
			invert: N(),
			gap: E(),
			gradientColorStops: [e],
			gradientColorStopPositions: [le, ae],
			inset: T(),
			margin: T(),
			opacity: I(),
			padding: E(),
			saturate: I(),
			scale: I(),
			sepia: N(),
			skew: L(),
			space: E(),
			translate: E()
		},
		classGroups: {
			aspect: [{ aspect: [
				`auto`,
				`square`,
				`video`,
				H
			] }],
			container: [`container`],
			columns: [{ columns: [W] }],
			"break-after": [{ "break-after": F() }],
			"break-before": [{ "break-before": F() }],
			"break-inside": [{ "break-inside": [
				`auto`,
				`avoid`,
				`avoid-page`,
				`avoid-column`
			] }],
			"box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
			box: [{ box: [`border`, `content`] }],
			display: [
				`block`,
				`inline-block`,
				`inline`,
				`flex`,
				`inline-flex`,
				`table`,
				`inline-table`,
				`table-caption`,
				`table-cell`,
				`table-column`,
				`table-column-group`,
				`table-footer-group`,
				`table-header-group`,
				`table-row-group`,
				`table-row`,
				`flow-root`,
				`grid`,
				`inline-grid`,
				`contents`,
				`list-item`,
				`hidden`
			],
			float: [{ float: [
				`right`,
				`left`,
				`none`
			] }],
			clear: [{ clear: [
				`left`,
				`right`,
				`both`,
				`none`
			] }],
			isolation: [`isolate`, `isolation-auto`],
			"object-fit": [{ object: [
				`contain`,
				`cover`,
				`fill`,
				`none`,
				`scale-down`
			] }],
			"object-position": [{ object: [].concat(k(), [H]) }],
			overflow: [{ overflow: w() }],
			"overflow-x": [{ "overflow-x": w() }],
			"overflow-y": [{ "overflow-y": w() }],
			overscroll: [{ overscroll: C() }],
			"overscroll-x": [{ "overscroll-x": C() }],
			"overscroll-y": [{ "overscroll-y": C() }],
			position: [
				`static`,
				`fixed`,
				`absolute`,
				`relative`,
				`sticky`
			],
			inset: [{ inset: [h] }],
			"inset-x": [{ "inset-x": [h] }],
			"inset-y": [{ "inset-y": [h] }],
			start: [{ start: [h] }],
			end: [{ end: [h] }],
			top: [{ top: [h] }],
			right: [{ right: [h] }],
			bottom: [{ bottom: [h] }],
			left: [{ left: [h] }],
			visibility: [
				`visible`,
				`invisible`,
				`collapse`
			],
			z: [{ z: [`auto`, V] }],
			basis: [{ basis: T() }],
			"flex-direction": [{ flex: [
				`row`,
				`row-reverse`,
				`col`,
				`col-reverse`
			] }],
			"flex-wrap": [{ flex: [
				`wrap`,
				`wrap-reverse`,
				`nowrap`
			] }],
			flex: [{ flex: [
				`1`,
				`auto`,
				`initial`,
				`none`,
				H
			] }],
			grow: [{ grow: N() }],
			shrink: [{ shrink: N() }],
			order: [{ order: [
				`first`,
				`last`,
				`none`,
				V
			] }],
			"grid-cols": [{ "grid-cols": [U] }],
			"col-start-end": [{ col: [
				`auto`,
				{ span: [`full`, V] },
				H
			] }],
			"col-start": [{ "col-start": O() }],
			"col-end": [{ "col-end": O() }],
			"grid-rows": [{ "grid-rows": [U] }],
			"row-start-end": [{ row: [
				`auto`,
				{ span: [V] },
				H
			] }],
			"row-start": [{ "row-start": O() }],
			"row-end": [{ "row-end": O() }],
			"grid-flow": [{ "grid-flow": [
				`row`,
				`col`,
				`dense`,
				`row-dense`,
				`col-dense`
			] }],
			"auto-cols": [{ "auto-cols": [
				`auto`,
				`min`,
				`max`,
				`fr`,
				H
			] }],
			"auto-rows": [{ "auto-rows": [
				`auto`,
				`min`,
				`max`,
				`fr`,
				H
			] }],
			gap: [{ gap: [f] }],
			"gap-x": [{ "gap-x": [f] }],
			"gap-y": [{ "gap-y": [f] }],
			"justify-content": [{ justify: [`normal`].concat(M()) }],
			"justify-items": [{ "justify-items": [
				`start`,
				`end`,
				`center`,
				`stretch`
			] }],
			"justify-self": [{ "justify-self": [
				`auto`,
				`start`,
				`end`,
				`center`,
				`stretch`
			] }],
			"align-content": [{ content: [`normal`].concat(M(), [`baseline`]) }],
			"align-items": [{ items: [
				`start`,
				`end`,
				`center`,
				`baseline`,
				`stretch`
			] }],
			"align-self": [{ self: [
				`auto`,
				`start`,
				`end`,
				`center`,
				`stretch`,
				`baseline`
			] }],
			"place-content": [{ "place-content": [].concat(M(), [`baseline`]) }],
			"place-items": [{ "place-items": [
				`start`,
				`end`,
				`center`,
				`baseline`,
				`stretch`
			] }],
			"place-self": [{ "place-self": [
				`auto`,
				`start`,
				`end`,
				`center`,
				`stretch`
			] }],
			p: [{ p: [v] }],
			px: [{ px: [v] }],
			py: [{ py: [v] }],
			ps: [{ ps: [v] }],
			pe: [{ pe: [v] }],
			pt: [{ pt: [v] }],
			pr: [{ pr: [v] }],
			pb: [{ pb: [v] }],
			pl: [{ pl: [v] }],
			m: [{ m: [g] }],
			mx: [{ mx: [g] }],
			my: [{ my: [g] }],
			ms: [{ ms: [g] }],
			me: [{ me: [g] }],
			mt: [{ mt: [g] }],
			mr: [{ mr: [g] }],
			mb: [{ mb: [g] }],
			ml: [{ ml: [g] }],
			"space-x": [{ "space-x": [ee] }],
			"space-x-reverse": [`space-x-reverse`],
			"space-y": [{ "space-y": [ee] }],
			"space-y-reverse": [`space-y-reverse`],
			w: [{ w: [
				`auto`,
				`min`,
				`max`,
				`fit`,
				H,
				t
			] }],
			"min-w": [{ "min-w": [
				`min`,
				`max`,
				`fit`,
				H,
				R
			] }],
			"max-w": [{ "max-w": [
				`0`,
				`none`,
				`full`,
				`min`,
				`max`,
				`fit`,
				`prose`,
				{ screen: [W] },
				W,
				H
			] }],
			h: [{ h: [
				H,
				t,
				`auto`,
				`min`,
				`max`,
				`fit`
			] }],
			"min-h": [{ "min-h": [
				`min`,
				`max`,
				`fit`,
				H,
				R
			] }],
			"max-h": [{ "max-h": [
				H,
				t,
				`min`,
				`max`,
				`fit`
			] }],
			"font-size": [{ text: [
				`base`,
				W,
				ae
			] }],
			"font-smoothing": [`antialiased`, `subpixel-antialiased`],
			"font-style": [`italic`, `not-italic`],
			"font-weight": [{ font: [
				`thin`,
				`extralight`,
				`light`,
				`normal`,
				`medium`,
				`semibold`,
				`bold`,
				`extrabold`,
				`black`,
				z
			] }],
			"font-family": [{ font: [U] }],
			"fvn-normal": [`normal-nums`],
			"fvn-ordinal": [`ordinal`],
			"fvn-slashed-zero": [`slashed-zero`],
			"fvn-figure": [`lining-nums`, `oldstyle-nums`],
			"fvn-spacing": [`proportional-nums`, `tabular-nums`],
			"fvn-fraction": [`diagonal-fractions`, `stacked-fractons`],
			tracking: [{ tracking: [
				`tighter`,
				`tight`,
				`normal`,
				`wide`,
				`wider`,
				`widest`,
				H
			] }],
			"line-clamp": [{ "line-clamp": [
				`none`,
				B,
				z
			] }],
			leading: [{ leading: [
				`none`,
				`tight`,
				`snug`,
				`normal`,
				`relaxed`,
				`loose`,
				H,
				R
			] }],
			"list-image": [{ "list-image": [`none`, H] }],
			"list-style-type": [{ list: [
				`none`,
				`disc`,
				`decimal`,
				H
			] }],
			"list-style-position": [{ list: [`inside`, `outside`] }],
			"placeholder-color": [{ placeholder: [e] }],
			"placeholder-opacity": [{ "placeholder-opacity": [_] }],
			"text-alignment": [{ text: [
				`left`,
				`center`,
				`right`,
				`justify`,
				`start`,
				`end`
			] }],
			"text-color": [{ text: [e] }],
			"text-opacity": [{ "text-opacity": [_] }],
			"text-decoration": [
				`underline`,
				`overline`,
				`line-through`,
				`no-underline`
			],
			"text-decoration-style": [{ decoration: [].concat(A(), [`wavy`]) }],
			"text-decoration-thickness": [{ decoration: [
				`auto`,
				`from-font`,
				R
			] }],
			"underline-offset": [{ "underline-offset": [
				`auto`,
				H,
				R
			] }],
			"text-decoration-color": [{ decoration: [e] }],
			"text-transform": [
				`uppercase`,
				`lowercase`,
				`capitalize`,
				`normal-case`
			],
			"text-overflow": [
				`truncate`,
				`text-ellipsis`,
				`text-clip`
			],
			indent: [{ indent: E() }],
			"vertical-align": [{ align: [
				`baseline`,
				`top`,
				`middle`,
				`bottom`,
				`text-top`,
				`text-bottom`,
				`sub`,
				`super`,
				H
			] }],
			whitespace: [{ whitespace: [
				`normal`,
				`nowrap`,
				`pre`,
				`pre-line`,
				`pre-wrap`,
				`break-spaces`
			] }],
			break: [{ break: [
				`normal`,
				`words`,
				`all`,
				`keep`
			] }],
			hyphens: [{ hyphens: [
				`none`,
				`manual`,
				`auto`
			] }],
			content: [{ content: [`none`, H] }],
			"bg-attachment": [{ bg: [
				`fixed`,
				`local`,
				`scroll`
			] }],
			"bg-clip": [{ "bg-clip": [
				`border`,
				`padding`,
				`content`,
				`text`
			] }],
			"bg-opacity": [{ "bg-opacity": [_] }],
			"bg-origin": [{ "bg-origin": [
				`border`,
				`padding`,
				`content`
			] }],
			"bg-position": [{ bg: [].concat(k(), [se]) }],
			"bg-repeat": [{ bg: [`no-repeat`, { repeat: [
				``,
				`x`,
				`y`,
				`round`,
				`space`
			] }] }],
			"bg-size": [{ bg: [
				`auto`,
				`cover`,
				`contain`,
				oe
			] }],
			"bg-image": [{ bg: [
				`none`,
				{ "gradient-to": [
					`t`,
					`tr`,
					`r`,
					`br`,
					`b`,
					`bl`,
					`l`,
					`tl`
				] },
				ce
			] }],
			"bg-color": [{ bg: [e] }],
			"gradient-from-pos": [{ from: [m] }],
			"gradient-via-pos": [{ via: [m] }],
			"gradient-to-pos": [{ to: [m] }],
			"gradient-from": [{ from: [p] }],
			"gradient-via": [{ via: [p] }],
			"gradient-to": [{ to: [p] }],
			rounded: [{ rounded: [a] }],
			"rounded-s": [{ "rounded-s": [a] }],
			"rounded-e": [{ "rounded-e": [a] }],
			"rounded-t": [{ "rounded-t": [a] }],
			"rounded-r": [{ "rounded-r": [a] }],
			"rounded-b": [{ "rounded-b": [a] }],
			"rounded-l": [{ "rounded-l": [a] }],
			"rounded-ss": [{ "rounded-ss": [a] }],
			"rounded-se": [{ "rounded-se": [a] }],
			"rounded-ee": [{ "rounded-ee": [a] }],
			"rounded-es": [{ "rounded-es": [a] }],
			"rounded-tl": [{ "rounded-tl": [a] }],
			"rounded-tr": [{ "rounded-tr": [a] }],
			"rounded-br": [{ "rounded-br": [a] }],
			"rounded-bl": [{ "rounded-bl": [a] }],
			"border-w": [{ border: [s] }],
			"border-w-x": [{ "border-x": [s] }],
			"border-w-y": [{ "border-y": [s] }],
			"border-w-s": [{ "border-s": [s] }],
			"border-w-e": [{ "border-e": [s] }],
			"border-w-t": [{ "border-t": [s] }],
			"border-w-r": [{ "border-r": [s] }],
			"border-w-b": [{ "border-b": [s] }],
			"border-w-l": [{ "border-l": [s] }],
			"border-opacity": [{ "border-opacity": [_] }],
			"border-style": [{ border: [].concat(A(), [`hidden`]) }],
			"divide-x": [{ "divide-x": [s] }],
			"divide-x-reverse": [`divide-x-reverse`],
			"divide-y": [{ "divide-y": [s] }],
			"divide-y-reverse": [`divide-y-reverse`],
			"divide-opacity": [{ "divide-opacity": [_] }],
			"divide-style": [{ divide: A() }],
			"border-color": [{ border: [i] }],
			"border-color-x": [{ "border-x": [i] }],
			"border-color-y": [{ "border-y": [i] }],
			"border-color-t": [{ "border-t": [i] }],
			"border-color-r": [{ "border-r": [i] }],
			"border-color-b": [{ "border-b": [i] }],
			"border-color-l": [{ "border-l": [i] }],
			"divide-color": [{ divide: [i] }],
			"outline-style": [{ outline: [``].concat(A()) }],
			"outline-offset": [{ "outline-offset": [H, R] }],
			"outline-w": [{ outline: [R] }],
			"outline-color": [{ outline: [e] }],
			"ring-w": [{ ring: D() }],
			"ring-w-inset": [`ring-inset`],
			"ring-color": [{ ring: [e] }],
			"ring-opacity": [{ "ring-opacity": [_] }],
			"ring-offset-w": [{ "ring-offset": [R] }],
			"ring-offset-color": [{ "ring-offset": [e] }],
			shadow: [{ shadow: [
				``,
				`inner`,
				`none`,
				W,
				ue
			] }],
			"shadow-color": [{ shadow: [U] }],
			opacity: [{ opacity: [_] }],
			"mix-blend": [{ "mix-blend": j() }],
			"bg-blend": [{ "bg-blend": j() }],
			filter: [{ filter: [``, `none`] }],
			blur: [{ blur: [n] }],
			brightness: [{ brightness: [r] }],
			contrast: [{ contrast: [c] }],
			"drop-shadow": [{ "drop-shadow": [
				``,
				`none`,
				W,
				H
			] }],
			grayscale: [{ grayscale: [l] }],
			"hue-rotate": [{ "hue-rotate": [u] }],
			invert: [{ invert: [d] }],
			saturate: [{ saturate: [y] }],
			sepia: [{ sepia: [x] }],
			"backdrop-filter": [{ "backdrop-filter": [``, `none`] }],
			"backdrop-blur": [{ "backdrop-blur": [n] }],
			"backdrop-brightness": [{ "backdrop-brightness": [r] }],
			"backdrop-contrast": [{ "backdrop-contrast": [c] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [l] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
			"backdrop-invert": [{ "backdrop-invert": [d] }],
			"backdrop-opacity": [{ "backdrop-opacity": [_] }],
			"backdrop-saturate": [{ "backdrop-saturate": [y] }],
			"backdrop-sepia": [{ "backdrop-sepia": [x] }],
			"border-collapse": [{ border: [`collapse`, `separate`] }],
			"border-spacing": [{ "border-spacing": [o] }],
			"border-spacing-x": [{ "border-spacing-x": [o] }],
			"border-spacing-y": [{ "border-spacing-y": [o] }],
			"table-layout": [{ table: [`auto`, `fixed`] }],
			caption: [{ caption: [`top`, `bottom`] }],
			transition: [{ transition: [
				`none`,
				`all`,
				``,
				`colors`,
				`opacity`,
				`shadow`,
				`transform`,
				H
			] }],
			duration: [{ duration: L() }],
			ease: [{ ease: [
				`linear`,
				`in`,
				`out`,
				`in-out`,
				H
			] }],
			delay: [{ delay: L() }],
			animate: [{ animate: [
				`none`,
				`spin`,
				`ping`,
				`pulse`,
				`bounce`,
				H
			] }],
			transform: [{ transform: [
				``,
				`gpu`,
				`none`
			] }],
			scale: [{ scale: [b] }],
			"scale-x": [{ "scale-x": [b] }],
			"scale-y": [{ "scale-y": [b] }],
			rotate: [{ rotate: [V, H] }],
			"translate-x": [{ "translate-x": [te] }],
			"translate-y": [{ "translate-y": [te] }],
			"skew-x": [{ "skew-x": [S] }],
			"skew-y": [{ "skew-y": [S] }],
			"transform-origin": [{ origin: [
				`center`,
				`top`,
				`top-right`,
				`right`,
				`bottom-right`,
				`bottom`,
				`bottom-left`,
				`left`,
				`top-left`,
				H
			] }],
			accent: [{ accent: [`auto`, e] }],
			appearance: [`appearance-none`],
			cursor: [{ cursor: [
				`auto`,
				`default`,
				`pointer`,
				`wait`,
				`text`,
				`move`,
				`help`,
				`not-allowed`,
				`none`,
				`context-menu`,
				`progress`,
				`cell`,
				`crosshair`,
				`vertical-text`,
				`alias`,
				`copy`,
				`no-drop`,
				`grab`,
				`grabbing`,
				`all-scroll`,
				`col-resize`,
				`row-resize`,
				`n-resize`,
				`e-resize`,
				`s-resize`,
				`w-resize`,
				`ne-resize`,
				`nw-resize`,
				`se-resize`,
				`sw-resize`,
				`ew-resize`,
				`ns-resize`,
				`nesw-resize`,
				`nwse-resize`,
				`zoom-in`,
				`zoom-out`,
				H
			] }],
			"caret-color": [{ caret: [e] }],
			"pointer-events": [{ "pointer-events": [`none`, `auto`] }],
			resize: [{ resize: [
				`none`,
				`y`,
				`x`,
				``
			] }],
			"scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
			"scroll-m": [{ "scroll-m": E() }],
			"scroll-mx": [{ "scroll-mx": E() }],
			"scroll-my": [{ "scroll-my": E() }],
			"scroll-ms": [{ "scroll-ms": E() }],
			"scroll-me": [{ "scroll-me": E() }],
			"scroll-mt": [{ "scroll-mt": E() }],
			"scroll-mr": [{ "scroll-mr": E() }],
			"scroll-mb": [{ "scroll-mb": E() }],
			"scroll-ml": [{ "scroll-ml": E() }],
			"scroll-p": [{ "scroll-p": E() }],
			"scroll-px": [{ "scroll-px": E() }],
			"scroll-py": [{ "scroll-py": E() }],
			"scroll-ps": [{ "scroll-ps": E() }],
			"scroll-pe": [{ "scroll-pe": E() }],
			"scroll-pt": [{ "scroll-pt": E() }],
			"scroll-pr": [{ "scroll-pr": E() }],
			"scroll-pb": [{ "scroll-pb": E() }],
			"scroll-pl": [{ "scroll-pl": E() }],
			"snap-align": [{ snap: [
				`start`,
				`end`,
				`center`,
				`align-none`
			] }],
			"snap-stop": [{ snap: [`normal`, `always`] }],
			"snap-type": [{ snap: [
				`none`,
				`x`,
				`y`,
				`both`
			] }],
			"snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
			touch: [{ touch: [
				`auto`,
				`none`,
				`pinch-zoom`,
				`manipulation`,
				{ pan: [
					`x`,
					`left`,
					`right`,
					`y`,
					`up`,
					`down`
				] }
			] }],
			select: [{ select: [
				`none`,
				`text`,
				`all`,
				`auto`
			] }],
			"will-change": [{ "will-change": [
				`auto`,
				`scroll`,
				`contents`,
				`transform`,
				H
			] }],
			fill: [{ fill: [e, `none`] }],
			"stroke-w": [{ stroke: [R, z] }],
			stroke: [{ stroke: [e, `none`] }],
			sr: [`sr-only`, `not-sr-only`]
		},
		conflictingClassGroups: {
			overflow: [`overflow-x`, `overflow-y`],
			overscroll: [`overscroll-x`, `overscroll-y`],
			inset: [
				`inset-x`,
				`inset-y`,
				`start`,
				`end`,
				`top`,
				`right`,
				`bottom`,
				`left`
			],
			"inset-x": [`right`, `left`],
			"inset-y": [`top`, `bottom`],
			flex: [
				`basis`,
				`grow`,
				`shrink`
			],
			gap: [`gap-x`, `gap-y`],
			p: [
				`px`,
				`py`,
				`ps`,
				`pe`,
				`pt`,
				`pr`,
				`pb`,
				`pl`
			],
			px: [`pr`, `pl`],
			py: [`pt`, `pb`],
			m: [
				`mx`,
				`my`,
				`ms`,
				`me`,
				`mt`,
				`mr`,
				`mb`,
				`ml`
			],
			mx: [`mr`, `ml`],
			my: [`mt`, `mb`],
			"font-size": [`leading`],
			"fvn-normal": [
				`fvn-ordinal`,
				`fvn-slashed-zero`,
				`fvn-figure`,
				`fvn-spacing`,
				`fvn-fraction`
			],
			"fvn-ordinal": [`fvn-normal`],
			"fvn-slashed-zero": [`fvn-normal`],
			"fvn-figure": [`fvn-normal`],
			"fvn-spacing": [`fvn-normal`],
			"fvn-fraction": [`fvn-normal`],
			rounded: [
				`rounded-s`,
				`rounded-e`,
				`rounded-t`,
				`rounded-r`,
				`rounded-b`,
				`rounded-l`,
				`rounded-ss`,
				`rounded-se`,
				`rounded-ee`,
				`rounded-es`,
				`rounded-tl`,
				`rounded-tr`,
				`rounded-br`,
				`rounded-bl`
			],
			"rounded-s": [`rounded-ss`, `rounded-es`],
			"rounded-e": [`rounded-se`, `rounded-ee`],
			"rounded-t": [`rounded-tl`, `rounded-tr`],
			"rounded-r": [`rounded-tr`, `rounded-br`],
			"rounded-b": [`rounded-br`, `rounded-bl`],
			"rounded-l": [`rounded-tl`, `rounded-bl`],
			"border-spacing": [`border-spacing-x`, `border-spacing-y`],
			"border-w": [
				`border-w-s`,
				`border-w-e`,
				`border-w-t`,
				`border-w-r`,
				`border-w-b`,
				`border-w-l`
			],
			"border-w-x": [`border-w-r`, `border-w-l`],
			"border-w-y": [`border-w-t`, `border-w-b`],
			"border-color": [
				`border-color-t`,
				`border-color-r`,
				`border-color-b`,
				`border-color-l`
			],
			"border-color-x": [`border-color-r`, `border-color-l`],
			"border-color-y": [`border-color-t`, `border-color-b`],
			"scroll-m": [
				`scroll-mx`,
				`scroll-my`,
				`scroll-ms`,
				`scroll-me`,
				`scroll-mt`,
				`scroll-mr`,
				`scroll-mb`,
				`scroll-ml`
			],
			"scroll-mx": [`scroll-mr`, `scroll-ml`],
			"scroll-my": [`scroll-mt`, `scroll-mb`],
			"scroll-p": [
				`scroll-px`,
				`scroll-py`,
				`scroll-ps`,
				`scroll-pe`,
				`scroll-pt`,
				`scroll-pr`,
				`scroll-pb`,
				`scroll-pl`
			],
			"scroll-px": [`scroll-pr`, `scroll-pl`],
			"scroll-py": [`scroll-pt`, `scroll-pb`]
		},
		conflictingClassGroupModifiers: { "font-size": [`leading`] }
	};
}
var _e = N(ge), K = e(t()), ve = `a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`), ye = Symbol(`isTwElement?`), be = (e, t) => e.reduce((e, n, r) => e.concat(n || [], t[r] || []), []), xe = (e, t = ``) => {
	let n = e.join(` `).trim().replace(/\n/g, ` `).replace(/\s{2,}/g, ` `).split(` `).filter((e) => e !== `,`), r = t ? t.split(` `) : [];
	return _e(...n.concat(r).filter((e) => e !== ` `));
}, Se = ([e]) => e.charAt(0) !== `$`, q = (e) => e[ye] === !0, Ce = (e) => (t, ...n) => {
	let r = (i = []) => {
		let a = K.forwardRef((r, a) => {
			let { $as: o = e, style: s = {}, ...c } = r, l = q(e) ? e : o, u = i ? i.reduce((e, t) => Object.assign(e, typeof t == `function` ? t(r) : t), {}) : {}, d = q(l) ? c : Object.fromEntries(Object.entries(c).filter(Se));
			return K.createElement(l, {
				...d,
				style: {
					...u,
					...s
				},
				ref: a,
				className: xe(be(t, n.map((e) => e({
					...c,
					$as: o
				}))), c.className),
				...q(e) ? { $as: o } : {}
			});
		});
		return a[ye] = !0, typeof e == `string` ? a.displayName = `tw.` + e : a.displayName = e.displayName || e.name || `tw.Component`, a.withStyle = (e) => r(i.concat(e)), a;
	};
	return r();
}, we = ve.reduce((e, t) => ({
	...e,
	[t]: Ce(t)
}), {}), J = Object.assign(Ce, we), Y = n(), Te = J.ul`list-inside list-disc border-y`, X = J.li`border-b`, Z = J.span`font-600`;
function Ee({ obj: e, singleMode: t, address: n }) {
	let r = e?.type, i = r === `RecordObj` ? `Record[${e.tname}]` : r === `YetObj` ? `Yet[${e.tname}]` : r === `MapObj` ? `Map` : `List`;
	return (0, Y.jsxs)(Y.Fragment, { children: [
		e.type === `RecordObj` && (0, Y.jsxs)(Te, { children: [t && (0, Y.jsxs)(`li`, {
			className: `break-all list-none`,
			children: [i, (0, Y.jsx)(Q, { address: n })]
		}), Object.keys(e.map).length === 0 ? (0, Y.jsx)(`p`, { children: `No values` }) : Object.entries(e.map).map(([e, t]) => t && t.startsWith(`#`) ? (0, Y.jsx)($, {
			field: e,
			address: t
		}) : (0, Y.jsxs)(X, {
			className: `font-mono text-wrap break-all overflow-hidden gap-2`,
			children: [
				(0, Y.jsx)(Z, { children: e }),
				`\xA0:\xA0`,
				t
			]
		}))] }),
		e.type === `MapObj` && (0, Y.jsxs)(Te, { children: [t && (0, Y.jsxs)(`li`, {
			className: `break-all list-none`,
			children: [i, (0, Y.jsx)(Q, { address: n })]
		}), Object.keys(e.map).length === 0 ? (0, Y.jsx)(Y.Fragment, { children: (0, Y.jsx)(`tr`, { children: (0, Y.jsx)(`td`, {
			colSpan: 2,
			children: `No values`
		}) }) }) : Object.entries(e.map).map(([e, t]) => t && t.startsWith(`#`) ? (0, Y.jsx)($, {
			field: e,
			address: t
		}) : (0, Y.jsxs)(X, {
			className: `font-mono text-wrap break-all overflow-hidden gap-2`,
			children: [
				(0, Y.jsx)(Z, { children: e }),
				`\xA0:\xA0`,
				t
			]
		}))] }),
		e.type === `ListObj` && (0, Y.jsxs)(Te, { children: [t && (0, Y.jsxs)(`li`, {
			className: `break-all list-none`,
			children: [i, (0, Y.jsx)(Q, { address: n })]
		}), Object.keys(e.values).length === 0 ? (0, Y.jsx)(X, { children: `No values` }) : e.values.map((e, t) => e && e.startsWith(`#`) ? (0, Y.jsx)($, {
			field: t.toString(),
			address: e
		}) : (0, Y.jsxs)(X, {
			className: `font-mono text-wrap break-all overflow-hidden gap-2`,
			children: [
				(0, Y.jsx)(Z, { children: t }),
				`\xA0:\xA0`,
				e
			]
		}))] }),
		e.type === `YetObj` && (0, Y.jsx)(`div`, {
			className: `font-mono p-1 text-center`,
			children: `this object is not yet supported in ESMeta`
		})
	] });
}
function Q({ address: e }) {
	let t = i(o);
	return e && e.startsWith(`#`) && !Number.isNaN(Number(e.substring(1))) && (0, Y.jsxs)(p, { children: [(0, Y.jsx)(f, {
		className: ` text-blue-400 inline cursor-pointer hover:text-blue-600 active:scale-75 transition-all`,
		onClick: () => t(e),
		children: (0, Y.jsx)(a, {
			size: 16,
			className: `inline`
		})
	}), (0, Y.jsx)(d, { children: `Go back to provenance` })] });
}
function De({ address: e }) {
	let t = i(s), n = i(c);
	return (0, Y.jsxs)(p, { children: [(0, Y.jsx)(f, {
		className: `text-es-500 inline cursor-pointer hover:text-es-900 active:scale-75 transition-all`,
		content: e,
		onClick: () => {
			t(e), n(`heap`);
		},
		children: (0, Y.jsx)(g, { size: 16 })
	}), (0, Y.jsx)(d, { children: (0, Y.jsx)(`p`, { children: `Inspect in heap viewer` }) })] });
}
function Oe(e) {
	if (!e) return ``;
	let t = e?.type;
	return t === `RecordObj` ? `: Record[${e.tname}]` : t === `YetObj` ? `: Yet[${e.tname}]` : t === `MapObj` ? `: Map` : `: List`;
}
function $({ field: e, address: t, singleMode: n, defaultFold: i = !1 }) {
	let [a, o] = (0, K.useState)(n === void 0 ? i : n), s = r(l)[t];
	return (0, Y.jsxs)(Y.Fragment, { children: [!n && (0, Y.jsxs)(`li`, {
		className: `border-b`,
		children: [
			(0, Y.jsx)(`b`, {
				className: `font-600 font-mono`,
				children: e
			}),
			`\xA0`,
			Oe(s),
			`\xA0`,
			(0, Y.jsxs)(`span`, {
				className: `inline-flex flex-row items-center`,
				children: [
					(0, Y.jsx)(Q, { address: t }),
					(0, Y.jsx)(De, { address: t }),
					(0, Y.jsx)(`a`, {
						className: `inline cursor-pointer text-es-500 hover:text-es-900 active:scale-75 transition-all`,
						onClick: () => o((e) => !e),
						children: a ? (0, Y.jsx)(h, {
							size: 16,
							className: `inline`
						}) : (0, Y.jsx)(m, {
							size: 16,
							className: `inline`
						})
					})
				]
			})
		]
	}), a && (s ? (0, Y.jsx)(Ee, {
		address: t,
		singleMode: n,
		obj: s
	}) : (0, Y.jsx)(`div`, { children: `Not found` }))] });
}
export { m as i, J as n, h as r, $ as t };

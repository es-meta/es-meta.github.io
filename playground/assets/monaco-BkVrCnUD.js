import { c as e, n as t, t as n } from "./jsx-runtime-CqwARRmJ.js";
import { u as r } from "./utils-CcSgwp0X.js";
import { u as i } from "./index-QWim6Jbc.js";
import { t as a } from "./use-preferred-color-scheme-uj_IJKVG.js";
var o = e(t(), 1);
function s(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function c(e) {
	if (Array.isArray(e)) return e;
}
function l(e, t, n) {
	return (t = v(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function u(e, t) {
	var n = e == null ? null : typeof Symbol < `u` && e[Symbol.iterator] || e[`@@iterator`];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t !== 0) for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function d() {
	throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function f(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function p(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? f(Object(n), !0).forEach(function(t) {
			l(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function m(e, t) {
	if (e == null) return {};
	var n, r, i = h(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function h(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function g(e, t) {
	return c(e) || u(e, t) || y(e, t) || d();
}
function _(e, t) {
	if (typeof e != `object` || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t);
		if (typeof r != `object`) return r;
		throw TypeError(`@@toPrimitive must return a primitive value.`);
	}
	return (t === `string` ? String : Number)(e);
}
function v(e) {
	var t = _(e, `string`);
	return typeof t == `symbol` ? t : t + ``;
}
function y(e, t) {
	if (e) {
		if (typeof e == `string`) return s(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === `Object` && e.constructor && (n = e.constructor.name), n === `Map` || n === `Set` ? Array.from(e) : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0;
	}
}
function b(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function x(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function S(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? x(Object(n), !0).forEach(function(t) {
			b(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function C() {
	var e = [...arguments];
	return function(t) {
		return e.reduceRight(function(e, t) {
			return t(e);
		}, t);
	};
}
function w(e) {
	return function t() {
		var n = this, r = [...arguments];
		return r.length >= e.length ? e.apply(this, r) : function() {
			var e = [...arguments];
			return t.apply(n, [].concat(r, e));
		};
	};
}
function T(e) {
	return {}.toString.call(e).includes(`Object`);
}
function E(e) {
	return !Object.keys(e).length;
}
function D(e) {
	return typeof e == `function`;
}
function O(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
function k(e, t) {
	return T(t) || P(`changeType`), Object.keys(t).some(function(t) {
		return !O(e, t);
	}) && P(`changeField`), t;
}
function A(e) {
	D(e) || P(`selectorType`);
}
function j(e) {
	D(e) || T(e) || P(`handlerType`), T(e) && Object.values(e).some(function(e) {
		return !D(e);
	}) && P(`handlersType`);
}
function M(e) {
	e || P(`initialIsRequired`), T(e) || P(`initialType`), E(e) && P(`initialContent`);
}
function N(e, t) {
	throw Error(e[t] || e.default);
}
var P = w(N)({
	initialIsRequired: `initial state is required`,
	initialType: `initial state should be an object`,
	initialContent: `initial state shouldn't be an empty object`,
	handlerType: `handler should be an object or a function`,
	handlersType: `all handlers should be a functions`,
	selectorType: `selector should be a function`,
	changeType: `provided value of changes should be an object`,
	changeField: `it seams you want to change a field in the state which is not specified in the "initial" state`,
	default: "an unknown error accured in `state-local` package"
}), F = {
	changes: k,
	selector: A,
	handler: j,
	initial: M
};
function I(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	F.initial(e), F.handler(t);
	var n = { current: e }, r = w(te)(n, t), i = w(ee)(n), a = w(F.changes)(e), o = w(L)(n);
	function s() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(e) {
			return e;
		};
		return F.selector(e), e(n.current);
	}
	function c(e) {
		C(r, i, a, o)(e);
	}
	return [s, c];
}
function L(e, t) {
	return D(t) ? t(e.current) : t;
}
function ee(e, t) {
	return e.current = S(S({}, e.current), t), t;
}
function te(e, t, n) {
	return D(t) ? t(e.current) : Object.keys(n).forEach(function(n) {
		return t[n]?.call(t, e.current[n]);
	}), n;
}
var ne = { create: I }, re = { paths: { vs: `https://cdn.jsdelivr.net/npm/monaco-editor@0.54.0/min/vs` } };
function ie(e) {
	return function t() {
		var n = this, r = [...arguments];
		return r.length >= e.length ? e.apply(this, r) : function() {
			var e = [...arguments];
			return t.apply(n, [].concat(r, e));
		};
	};
}
function ae(e) {
	return {}.toString.call(e).includes(`Object`);
}
function oe(e) {
	return e || z(`configIsRequired`), ae(e) || z(`configType`), e.urls ? (se(), { paths: { vs: e.urls.monacoBase } }) : e;
}
function se() {
	console.warn(R.deprecation);
}
function ce(e, t) {
	throw Error(e[t] || e.default);
}
var R = {
	configIsRequired: `the configuration object is required`,
	configType: `the configuration object should be an object`,
	default: "an unknown error accured in `@monaco-editor/loader` package",
	deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `
}, z = ie(ce)(R), le = { config: oe }, ue = function() {
	var e = [...arguments];
	return function(t) {
		return e.reduceRight(function(e, t) {
			return t(e);
		}, t);
	};
};
function B(e, t) {
	return Object.keys(t).forEach(function(n) {
		t[n] instanceof Object && e[n] && Object.assign(t[n], B(e[n], t[n]));
	}), p(p({}, e), t);
}
var de = {
	type: `cancelation`,
	msg: `operation is manually canceled`
};
function V(e) {
	var t = !1, n = new Promise(function(n, r) {
		e.then(function(e) {
			return t ? r(de) : n(e);
		}), e.catch(r);
	});
	return n.cancel = function() {
		return t = !0;
	}, n;
}
var fe = [`monaco`], H = g(ne.create({
	config: re,
	isInitialized: !1,
	resolve: null,
	reject: null,
	monaco: null
}), 2), U = H[0], W = H[1];
function pe(e) {
	var t = le.config(e), n = t.monaco, r = m(t, fe);
	W(function(e) {
		return {
			config: B(e.config, r),
			monaco: n
		};
	});
}
function me() {
	var e = U(function(e) {
		return {
			monaco: e.monaco,
			isInitialized: e.isInitialized,
			resolve: e.resolve
		};
	});
	if (!e.isInitialized) {
		if (W({ isInitialized: !0 }), e.monaco) return e.resolve(e.monaco), V(K);
		if (window.monaco && window.monaco.editor) return G(window.monaco), e.resolve(window.monaco), V(K);
		ue(he, _e)(ve);
	}
	return V(K);
}
function he(e) {
	return document.body.appendChild(e);
}
function ge(e) {
	var t = document.createElement(`script`);
	return e && (t.src = e), t;
}
function _e(e) {
	var t = U(function(e) {
		return {
			config: e.config,
			reject: e.reject
		};
	}), n = ge(`${t.config.paths.vs}/loader.js`);
	return n.onload = function() {
		return e();
	}, n.onerror = t.reject, n;
}
function ve() {
	var e = U(function(e) {
		return {
			config: e.config,
			resolve: e.resolve,
			reject: e.reject
		};
	}), t = window.require;
	t.config(e.config), t([`vs/editor/editor.main`], function(t) {
		var n = t.m;
		G(n), e.resolve(n);
	}, function(t) {
		e.reject(t);
	});
}
function G(e) {
	U().monaco || W({ monaco: e });
}
function ye() {
	return U(function(e) {
		return e.monaco;
	});
}
var K = new Promise(function(e, t) {
	return W({
		resolve: e,
		reject: t
	});
}), q = {
	config: pe,
	init: me,
	__getMonacoInstance: ye
}, J = {
	wrapper: {
		display: `flex`,
		position: `relative`,
		textAlign: `initial`
	},
	fullWidth: { width: `100%` },
	hide: { display: `none` }
}, be = { container: {
	display: `flex`,
	height: `100%`,
	width: `100%`,
	justifyContent: `center`,
	alignItems: `center`
} };
function xe({ children: e }) {
	return o.createElement(`div`, { style: be.container }, e);
}
var Se = xe;
function Ce({ width: e, height: t, isEditorReady: n, loading: r, _ref: i, className: a, wrapperProps: s }) {
	return o.createElement(`section`, {
		style: {
			...J.wrapper,
			width: e,
			height: t
		},
		...s
	}, !n && o.createElement(Se, null, r), o.createElement(`div`, {
		ref: i,
		style: {
			...J.fullWidth,
			...!n && J.hide
		},
		className: a
	}));
}
var we = (0, o.memo)(Ce);
function Te(e) {
	(0, o.useEffect)(e, []);
}
var Ee = Te;
function De(e, t, n = !0) {
	let r = (0, o.useRef)(!0);
	(0, o.useEffect)(r.current || !n ? () => {
		r.current = !1;
	} : e, t);
}
var Y = De;
function X() {}
function Z(e, t, n, r) {
	return Oe(e, r) || ke(e, t, n, r);
}
function Oe(e, t) {
	return e.editor.getModel(Ae(e, t));
}
function ke(e, t, n, r) {
	return e.editor.createModel(t, n, r ? Ae(e, r) : void 0);
}
function Ae(e, t) {
	return e.Uri.parse(t);
}
function je({ original: e, modified: t, language: n, originalLanguage: r, modifiedLanguage: i, originalModelPath: a, modifiedModelPath: s, keepCurrentOriginalModel: c = !1, keepCurrentModifiedModel: l = !1, theme: u = `light`, loading: d = `Loading...`, options: f = {}, height: p = `100%`, width: m = `100%`, className: h, wrapperProps: g = {}, beforeMount: _ = X, onMount: v = X }) {
	let [y, b] = (0, o.useState)(!1), [x, S] = (0, o.useState)(!0), C = (0, o.useRef)(null), w = (0, o.useRef)(null), T = (0, o.useRef)(null), E = (0, o.useRef)(v), D = (0, o.useRef)(_), O = (0, o.useRef)(!1);
	Ee(() => {
		let e = q.init();
		return e.then((e) => (w.current = e) && S(!1)).catch((e) => e?.type !== `cancelation` && console.error(`Monaco initialization: error:`, e)), () => C.current ? j() : e.cancel();
	}), Y(() => {
		if (C.current && w.current) {
			let t = C.current.getOriginalEditor(), i = Z(w.current, e || ``, r || n || `text`, a || ``);
			i !== t.getModel() && t.setModel(i);
		}
	}, [a], y), Y(() => {
		if (C.current && w.current) {
			let e = C.current.getModifiedEditor(), r = Z(w.current, t || ``, i || n || `text`, s || ``);
			r !== e.getModel() && e.setModel(r);
		}
	}, [s], y), Y(() => {
		let e = C.current.getModifiedEditor();
		e.getOption(w.current.editor.EditorOption.readOnly) ? e.setValue(t || ``) : t !== e.getValue() && (e.executeEdits(``, [{
			range: e.getModel().getFullModelRange(),
			text: t || ``,
			forceMoveMarkers: !0
		}]), e.pushUndoStop());
	}, [t], y), Y(() => {
		C.current?.getModel()?.original.setValue(e || ``);
	}, [e], y), Y(() => {
		let { original: e, modified: t } = C.current.getModel();
		w.current.editor.setModelLanguage(e, r || n || `text`), w.current.editor.setModelLanguage(t, i || n || `text`);
	}, [
		n,
		r,
		i
	], y), Y(() => {
		w.current?.editor.setTheme(u);
	}, [u], y), Y(() => {
		C.current?.updateOptions(f);
	}, [f], y);
	let k = (0, o.useCallback)(() => {
		if (!w.current) return;
		D.current(w.current);
		let o = Z(w.current, e || ``, r || n || `text`, a || ``), c = Z(w.current, t || ``, i || n || `text`, s || ``);
		C.current?.setModel({
			original: o,
			modified: c
		});
	}, [
		n,
		t,
		i,
		e,
		r,
		a,
		s
	]), A = (0, o.useCallback)(() => {
		!O.current && T.current && (C.current = w.current.editor.createDiffEditor(T.current, {
			automaticLayout: !0,
			...f
		}), k(), w.current?.editor.setTheme(u), b(!0), O.current = !0);
	}, [
		f,
		u,
		k
	]);
	(0, o.useEffect)(() => {
		y && E.current(C.current, w.current);
	}, [y]), (0, o.useEffect)(() => {
		!x && !y && A();
	}, [
		x,
		y,
		A
	]);
	function j() {
		let e = C.current?.getModel();
		c || e?.original?.dispose(), l || e?.modified?.dispose(), C.current?.dispose();
	}
	return o.createElement(we, {
		width: m,
		height: p,
		isEditorReady: y,
		loading: d,
		_ref: T,
		className: h,
		wrapperProps: g
	});
}
(0, o.memo)(je);
function Me(e) {
	let t = (0, o.useRef)();
	return (0, o.useEffect)(() => {
		t.current = e;
	}, [e]), t.current;
}
var Ne = Me, Q = /* @__PURE__ */ new Map();
function Pe({ defaultValue: e, defaultLanguage: t, defaultPath: n, value: r, language: i, path: a, theme: s = `light`, line: c, loading: l = `Loading...`, options: u = {}, overrideServices: d = {}, saveViewState: f = !0, keepCurrentModel: p = !1, width: m = `100%`, height: h = `100%`, className: g, wrapperProps: _ = {}, beforeMount: v = X, onMount: y = X, onChange: b, onValidate: x = X }) {
	let [S, C] = (0, o.useState)(!1), [w, T] = (0, o.useState)(!0), E = (0, o.useRef)(null), D = (0, o.useRef)(null), O = (0, o.useRef)(null), k = (0, o.useRef)(y), A = (0, o.useRef)(v), j = (0, o.useRef)(), M = (0, o.useRef)(r), N = Ne(a), P = (0, o.useRef)(!1), F = (0, o.useRef)(!1);
	Ee(() => {
		let e = q.init();
		return e.then((e) => (E.current = e) && T(!1)).catch((e) => e?.type !== `cancelation` && console.error(`Monaco initialization: error:`, e)), () => D.current ? L() : e.cancel();
	}), Y(() => {
		let o = Z(E.current, e || r || ``, t || i || ``, a || n || ``);
		o !== D.current?.getModel() && (f && Q.set(N, D.current?.saveViewState()), D.current?.setModel(o), f && D.current?.restoreViewState(Q.get(a)));
	}, [a], S), Y(() => {
		D.current?.updateOptions(u);
	}, [u], S), Y(() => {
		!D.current || r === void 0 || (D.current.getOption(E.current.editor.EditorOption.readOnly) ? D.current.setValue(r) : r !== D.current.getValue() && (F.current = !0, D.current.executeEdits(``, [{
			range: D.current.getModel().getFullModelRange(),
			text: r,
			forceMoveMarkers: !0
		}]), D.current.pushUndoStop(), F.current = !1));
	}, [r], S), Y(() => {
		let e = D.current?.getModel();
		e && i && E.current?.editor.setModelLanguage(e, i);
	}, [i], S), Y(() => {
		c !== void 0 && D.current?.revealLine(c);
	}, [c], S), Y(() => {
		E.current?.editor.setTheme(s);
	}, [s], S);
	let I = (0, o.useCallback)(() => {
		if (!(!O.current || !E.current) && !P.current) {
			A.current(E.current);
			let o = a || n, l = Z(E.current, r || e || ``, t || i || ``, o || ``);
			D.current = E.current?.editor.create(O.current, {
				model: l,
				automaticLayout: !0,
				...u
			}, d), f && D.current.restoreViewState(Q.get(o)), E.current.editor.setTheme(s), c !== void 0 && D.current.revealLine(c), C(!0), P.current = !0;
		}
	}, [
		e,
		t,
		n,
		r,
		i,
		a,
		u,
		d,
		f,
		s,
		c
	]);
	(0, o.useEffect)(() => {
		S && k.current(D.current, E.current);
	}, [S]), (0, o.useEffect)(() => {
		!w && !S && I();
	}, [
		w,
		S,
		I
	]), M.current = r, (0, o.useEffect)(() => {
		S && b && (j.current?.dispose(), j.current = D.current?.onDidChangeModelContent((e) => {
			F.current || b(D.current.getValue(), e);
		}));
	}, [S, b]), (0, o.useEffect)(() => {
		if (S) {
			let e = E.current.editor.onDidChangeMarkers((e) => {
				let t = D.current.getModel()?.uri;
				if (t && e.find((e) => e.path === t.path)) {
					let e = E.current.editor.getModelMarkers({ resource: t });
					x?.(e);
				}
			});
			return () => {
				e?.dispose();
			};
		}
		return () => {};
	}, [S, x]);
	function L() {
		j.current?.dispose(), p ? f && Q.set(a, D.current.saveViewState()) : D.current.getModel()?.dispose(), D.current.dispose();
	}
	return o.createElement(we, {
		width: m,
		height: h,
		isEditorReady: S,
		loading: l,
		_ref: O,
		className: g,
		wrapperProps: _
	});
}
var Fe = (0, o.memo)(Pe);
function Ie(e, t, n) {
	let r = e.substring(t, n), i = (r.match(/^\s*/)?.[0] ?? ``).length, a = (r.match(/\s*$/)?.[0] ?? ``).length;
	return Le(e, t + i, n - a);
}
function Le(e, t, n) {
	let r = e.split(`
`), i = 0, a = 1, o = 1, s = 1, c = 1;
	for (let e = 0; e < r.length; e++) {
		let l = r[e].length;
		if (t >= i && t <= i + l && (a = e + 1, o = t - i + 1), n >= i && n <= i + l) {
			s = e + 1, c = n - i + 1;
			break;
		}
		i += l + 1;
	}
	return {
		startLineNumber: a,
		startColumn: o,
		endLineNumber: s,
		endColumn: c
	};
}
var $ = n();
function Re({ code: e, onChange: t, start: n, end: s, readOnly: c }) {
	let l = a(), u = (0, o.useRef)(null), d = (0, o.useRef)(null), f = (0, o.useRef)(null), p = (0, o.useCallback)((t, n) => {
		if (t === -1 || n === -1) {
			f.current?.clear();
			return;
		} else if (u.current && f.current) {
			let r = Ie(e, t, n);
			f.current.set([{
				range: new u.current.Range(r.startLineNumber, r.startColumn, r.endLineNumber, r.endColumn),
				options: { inlineClassName: `my-highlight` }
			}]);
		}
	}, [e]);
	(0, o.useEffect)(() => {
		p(n, s);
	}, [
		p,
		n,
		s
	]);
	let m = (0, o.useCallback)((e) => {
		e.editor.defineTheme(`my-vs-dark`, {
			base: `vs-dark`,
			inherit: !0,
			rules: [],
			colors: { "editor.background": `#00000000` }
		});
	}, []), h = (0, o.useCallback)((e, t) => {
		t.languages.typescript.javascriptDefaults.setCompilerOptions({
			noLib: !0,
			allowNonTsExtensions: !0
		}), t.languages.typescript.javascriptDefaults.setExtraLibs([{ content: `declare function print(value: any): void;` }]), t.editor.addKeybindingRule({
			keybinding: t.KeyMod.CtrlCmd | t.KeyCode.KeyK,
			command: null,
			when: null
		}), u.current = t, d.current = e, f.current = e.createDecorationsCollection(), p(n, s);
	}, []), g = (0, o.useMemo)(() => ({
		scrollbar: { alwaysConsumeMouseWheel: !1 },
		minimap: { enabled: !1 },
		wordWrap: `on`,
		readOnly: c,
		lineNumbers: `on`,
		fontSize: 14,
		tabSize: 2,
		fontFamily: `"Fira code", "Fira Mono", monospace`,
		automaticLayout: !0,
		lineNumbersMinChars: 3,
		glyphMargin: !1,
		folding: !1
	}), [c]);
	return (0, o.useEffect)(() => {
		if (!u.current || !f.current || !d.current) {
			r.info?.(`no monaco or decorations`);
			return;
		}
		p(n, s);
	}, [
		e,
		n,
		s
	]), (0, $.jsx)($.Fragment, { children: (0, $.jsx)(Fe, {
		loading: (0, $.jsx)(i, {}),
		language: `javascript`,
		value: e,
		onChange: (e) => t(e || ``),
		beforeMount: m,
		onMount: h,
		theme: l === `light` ? `light` : `my-vs-dark`,
		options: g
	}) });
}
export { Re as default };

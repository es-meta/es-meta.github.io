import { c as e, n as t, t as n } from "./jsx-runtime-CqwARRmJ.js";
import { b as r, f as i, g as a, r as o, s, t as c, x as l, y as u } from "./utils-CcSgwp0X.js";
import { i as d, n as f, r as p, t as m } from "./combobox-BPUMM4Si.js";
import { t as h } from "./switch-BkA1CI8L.js";
import { _ as g, g as _, h as v, kt as y, m as b, o as x, rt as S, st as C, vt as w, yt as T } from "./index-QWim6Jbc.js";
import { n as E, r as D, t as O } from "./tooltip-iTuHEADK.js";
import { n as k } from "./AlgoViewerHeader-Dveoc7_Q.js";
import { t as A } from "./StateViewerItem-Ct_uJg8B.js";
var j = y(`octagon-pause`, [
	[`path`, {
		d: `M10 15V9`,
		key: `1lckn7`
	}],
	[`path`, {
		d: `M14 15V9`,
		key: `1muqhk`
	}],
	[`path`, {
		d: `M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z`,
		key: `2d38gg`
	}]
]), M = y(`octagon`, [[`path`, {
	d: `M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z`,
	key: `2d38gg`
}]]), N = y(`x`, [[`path`, {
	d: `M18 6 6 18`,
	key: `1bl5f8`
}], [`path`, {
	d: `m6 6 12 12`,
	key: `d8bk6v`
}]]), P = e(t(), 1), F = n();
function I(e, t) {
	return t[e]?.nameForCallstack ?? e;
}
function L(e, t) {
	return s(e, t.replace(` `, ``), .2, (e) => e.search);
}
function R({ values: e, value: t, onChange: n, placeholder: i }) {
	let [a, s] = (0, P.useState)(``), c = r(b), l = (0, P.useMemo)(() => e.map((e) => ({
		name: e,
		search: I(e, c),
		view: (0, F.jsx)(k, { name: e })
	})), [e, c]), u = (0, P.useMemo)(() => L(l, a), [a, e]), h = (0, P.useMemo)(() => l.find((e) => e.name === t), [t, l]);
	return (0, F.jsxs)(f, {
		immediate: !0,
		as: `div`,
		className: `relative size-full`,
		virtual: { options: u },
		value: h,
		onChange: (e) => n(e?.name ?? null),
		children: [(0, F.jsx)(d, {
			placeholder: i,
			onChange: (e) => s(e.target.value)
		}), (0, F.jsx)(p, {
			transition: !0,
			anchor: `bottom`,
			className: `bg-white dark:bg-neutral-800 font-mono text-sm z-101 shadow-lg w-(--input-width) origin-top transition duration-200 ease-out empty:invisible data-closed:scale-95 data-closed:opacity-0 h-96 overflow-scroll rounded-lg`,
			children: ({ option: e }) => (0, F.jsx)(m, {
				value: e,
				as: P.Fragment,
				children: ({ focus: t }) => (0, F.jsx)(`div`, {
					className: o(`even:bg-white odd:bg-neutral-50`, `dark:even:bg-neutral-800 dark:odd:bg-neutral-900`, `p-2 cursor-pointer w-full break-all`, t && `even:bg-blue-200 odd:bg-blue-200 dark:even:bg-blue-950 dark:odd:bg-blue-950`),
					title: e.name,
					children: e.view
				})
			}, e.name)
		})]
	});
}
function z(e) {
	let { idx: t, onToggleClick: n, onRemoveClick: r, data: i } = e, a = (0, P.useMemo)(() => t % 2 == 0, [t]), { viewName: s, enabled: l } = i, u = (0, P.useCallback)(() => {
		n(t);
	}, [n, t]), d = (0, P.useCallback)(() => {
		r(t);
	}, [r, t]);
	return (0, F.jsx)(F.Fragment, { children: (0, F.jsxs)(`tr`, {
		className: o(` hover:bg-neutral-500/25 transition-all`, a ? `bg-white dark:bg-neutral-900` : `bg-neutral-100 dark:bg-neutral-800`),
		children: [
			(0, F.jsx)(`td`, {
				className: `lowercase border-r overflow-hidden text-wrap text-center`,
				children: c(i.steps)
			}),
			(0, F.jsx)(`td`, {
				className: `border-r overflow-hidden break-before-all text-wrap pb-1`,
				children: (0, F.jsx)(k, { name: s })
			}),
			(0, F.jsx)(`td`, {
				className: `border-r text-center`,
				children: (0, F.jsx)(h, {
					checked: l,
					onChange: () => u()
				})
			}),
			(0, F.jsx)(`td`, {
				className: ``,
				children: (0, F.jsx)(`button`, {
					className: `h-full size-full items-center flex justify-center hover:text-red-600 active:scale-90 transition-all`,
					onClick: () => d(),
					children: (0, F.jsx)(N, {})
				})
			})
		]
	}) });
}
function B(e, t, n, r, a) {
	let o = t === null ? null : r[t]?.name, s = Object.values(r).map((e) => e.name);
	if (t === null || o === null) return o;
	let c = [1], l = `${c} @ ${o}`, u = n.some(({ duplicateCheckId: e }) => e === l);
	return s.includes(o) && !u ? a({
		type: w.Spec,
		duplicateCheckId: l,
		algoName: r[t].info?.name ?? (console.error(`require spec info`), ``),
		viewName: o,
		steps: c,
		enabled: !0
	}) : u ? i.warning(`Breakpoint already set: ${l}`) : i.warning(`Wrong algorithm name: ${o}`), o;
}
function V() {
	let e = r(b), t = (0, P.useMemo)(() => new Set(Object.values(e).map((e) => e.info?.name ?? ``)).values().toArray().filter((e) => e !== ``), [e]), n = r(_), [i, o] = u(C), s = r(S), c = s === T.INIT || s === T.JS_INPUT, [d, f] = (0, P.useState)(null), p = l(g), m = l(v), h = (0, P.useCallback)((t) => {
		let r = Object.values(e).find((e) => e.name === t)?.fid ?? null;
		f(B(!0, r, n, e, m));
	}, [n, e]);
	return (0, F.jsxs)(A, {
		header: `Breakpoints`,
		headerItems: (0, F.jsxs)(O, { children: [(0, F.jsx)(D, {
			asChild: !0,
			children: (0, F.jsx)(x, {
				position: `single`,
				disabled: c,
				onClick: (0, P.useCallback)(() => {
					o((e) => !e);
				}, [o]),
				className: i ? `h-6 bg-blue-600 hover:bg-blue-500 dark:bg-blue-600 hover:dark:bg-blue-500 text-white hover:text-white` : `h-6`,
				icon: i ? (0, F.jsx)(M, {}) : (0, F.jsx)(j, {}),
				label: i ? (0, F.jsx)(`span`, { children: `skipping breakpoints` }) : (0, F.jsx)(`span`, { children: `using breakpoints` })
			})
		}), (0, F.jsx)(E, { children: (0, F.jsx)(`p`, { children: `If this is toggled on, skip breakpoints when doing steps` }) })] }),
		children: [(0, F.jsx)(`div`, {
			className: `flex flex-row items-center w-full text-xs`,
			children: (0, F.jsx)(R, {
				value: d,
				values: t,
				onChange: h,
				placeholder: `search by name`
			})
		}), (0, F.jsxs)(`table`, {
			className: `w-full text-xs border-t`,
			children: [(0, F.jsx)(`thead`, {
				className: `font-200 text-neutral-500 dark:text-neutral-400`,
				children: (0, F.jsxs)(`tr`, { children: [
					(0, F.jsx)(`th`, {
						className: `border-r`,
						children: `Step`
					}),
					(0, F.jsx)(`th`, {
						className: `border-r w-auto`,
						children: `Name`
					}),
					(0, F.jsx)(`th`, {
						className: `border-r w-4`,
						children: `Enable`
					}),
					(0, F.jsx)(`th`, {
						className: `w-1`,
						children: `Remove`
					})
				] })
			}), (0, F.jsx)(`tbody`, { children: n.length > 0 ? n.map((e, t) => (0, F.jsx)(z, {
				data: e,
				idx: t,
				onRemoveClick: (e) => p(e),
				onToggleClick: () => null
			}, a())) : (0, F.jsx)(`tr`, { children: (0, F.jsx)(`td`, {
				colSpan: 4,
				className: `text-center text-neutral-500 dark:text-neutral-400 p-4 text-sm`,
				children: `No breakpoints. Add Breakpoint by clicking on steps in spec viewer or by searching name`
			}) }) })]
		})]
	});
}
export { B as addBreakHandler, V as default };

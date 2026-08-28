import { c as e, n as t, t as n } from "./jsx-runtime-CqwARRmJ.js";
import { T as r, b as i, m as a } from "./utils-CcSgwp0X.js";
import { n as o, t as s } from "./TreeAddress-B7o2f3IO.js";
import { dt as c, kt as l, nt as u, pt as d, ut as f } from "./index-QWim6Jbc.js";
import { t as p } from "./StateViewerItem-Ct_uJg8B.js";
var m = l(`book-text`, [
	[`path`, {
		d: `M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,
		key: `k3hazp`
	}],
	[`path`, {
		d: `M8 11h8`,
		key: `vwpz6n`
	}],
	[`path`, {
		d: `M8 7h6`,
		key: `1f0q6e`
	}]
]), h = l(`square-code`, [
	[`path`, {
		d: `m10 9-3 3 3 3`,
		key: `1oro0q`
	}],
	[`path`, {
		d: `m14 15 3-3-3-3`,
		key: `bz13h7`
	}],
	[`rect`, {
		x: `3`,
		y: `3`,
		width: `18`,
		height: `18`,
		rx: `2`,
		key: `h1oib`
	}]
]), g = n(), _ = o.li`border-b`, v = o.span`font-600`;
function y() {
	let e = i(d);
	return (0, g.jsx)(p, {
		header: `JavaScript\xA0Environment`,
		icon: (0, g.jsx)(h, { size: 14 }),
		children: (0, g.jsx)(u, {
			intentional: !0,
			loading: (0, g.jsx)(`div`, {
				className: `size-full flex items-center justify-center`,
				children: `Loading...`
			}),
			children: (0, g.jsx)(`ul`, {
				className: `px-1 list-disc list-inside`,
				children: e.length === 0 ? (0, g.jsx)(`aside`, {
					className: `text-center py-4`,
					children: `No environment variables.`
				}) : e.map(([e, t]) => t === void 0 ? null : t.startsWith(`#`) ? (0, g.jsx)(s, {
					field: e,
					address: t,
					defaultFold: !0
				}) : (0, g.jsxs)(_, { children: [
					(0, g.jsx)(v, { children: e }),
					`\xA0:\xA0`,
					t
				] }))
			})
		})
	});
}
var b = e(t(), 1), x = Symbol();
function S(e) {
	let [t = [], n = []] = e;
	return [...t, ...n.map((e) => [x, e])];
}
function C() {
	let e = i(f), t = i(c), n = (0, b.useMemo)(() => S(e[t]?.env ?? []), [e, t]), o = (0, b.useMemo)(() => n.filter((e) => {
		let [t] = e;
		return !(typeof t == `string` && t.startsWith(`__`) && t.endsWith(`__`));
	}).slice().sort((e, t) => typeof e[0] == `symbol` ? -1 : typeof t[0] == `symbol` ? 1 : e[0].localeCompare(t[0])).map(([e, t]) => typeof e == `symbol` ? [`RETURN`, t] : [e, t]), [n]);
	return (0, g.jsx)(p, {
		header: `Specification\xA0Environment`,
		icon: (0, g.jsx)(m, { size: 14 }),
		children: (0, g.jsx)(u, {
			fatal: !0,
			loading: (0, g.jsx)(`div`, {
				className: `size-full flex items-center justify-center`,
				children: `Loading...`
			}),
			children: o.length === 0 ? (0, g.jsx)(`aside`, {
				className: `text-center py-4`,
				children: `No environment variables.`
			}) : o.map(([e, t]) => (0, g.jsx)(`ul`, {
				className: r(a(`list-inside list-disc px-1`, `hover:bg-neutral-500/25 transition-all`)),
				children: t.startsWith(`#`) ? (0, g.jsx)(s, {
					field: e,
					address: t
				}) : (0, g.jsxs)(`li`, {
					className: `border-b text-wrap break-all text-left overflow-hidden gap-2 justify-center items-center`,
					children: [
						(0, g.jsx)(`b`, {
							className: `font-600`,
							children: e
						}),
						`\xA0:\xA0`,
						t
					]
				})
			}, e))
		})
	});
}
function w() {
	return (0, g.jsxs)(g.Fragment, { children: [(0, g.jsx)(u, {
		fatal: !0,
		children: (0, g.jsx)(C, {})
	}), (0, g.jsx)(u, {
		fatal: !0,
		children: (0, g.jsx)(y, {})
	})] });
}
export { w as default };

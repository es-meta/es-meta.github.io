import { c as e, n as t, t as n } from "./jsx-runtime-CqwARRmJ.js";
import { y as r } from "./utils-CcSgwp0X.js";
import { B as i, E as a, N as o, R as s, a as c, j as l, n as u, r as d, x as f, y as p, z as m } from "./label-D5dZ6Xu5.js";
import { t as h } from "./switch-DGn_ufbb.js";
import { at as g, ot as _ } from "./index-CYaaQPEq.js";
var v = e(t(), 1), y = `div`;
function b(e, t) {
	let n = `headlessui-control-${(0, a.useId)()}`, [r, o] = u(), [d, h] = c(), g = s(), { disabled: _ = g || !1, ...b } = e, x = i({ disabled: _ }), S = {
		ref: t,
		disabled: _ || void 0,
		"aria-disabled": _ || void 0
	}, C = l();
	return v.createElement(m, { value: _ }, v.createElement(o, { value: r }, v.createElement(h, { value: d }, v.createElement(p, { id: n }, C({
		ourProps: S,
		theirProps: {
			...b,
			children: v.createElement(f, null, typeof b.children == `function` ? b.children(x) : b.children)
		},
		slot: x,
		defaultTag: y,
		name: `Field`
	})))));
}
var x = o(b), S = n();
function C() {
	let [e, t] = r(g), [n, i] = r(_), a = (0, v.useCallback)(() => t((e) => !e), []), o = (0, v.useCallback)(() => i((e) => !e), []);
	return (0, S.jsx)(`div`, {
		className: `space-y-6`,
		children: (0, S.jsxs)(`article`, {
			className: `space-y-2`,
			children: [(0, S.jsxs)(x, {
				className: `flex flex-row items-center justify-between`,
				children: [(0, S.jsxs)(d, {
					className: `font-500`,
					children: [`Developer Mode`, (0, S.jsx)(`aside`, { children: `This mode enables some internal features, to debug the debugger application itself.` })]
				}), (0, S.jsx)(h, {
					checked: e,
					onChange: a
				})]
			}), (0, S.jsxs)(x, {
				className: `flex flex-row items-center justify-between`,
				children: [(0, S.jsx)(d, {
					className: `font-500`,
					children: `Show Visited Steps\xA0`
				}), (0, S.jsx)(h, {
					checked: n,
					onChange: o
				})]
			})]
		})
	});
}
export { C as default };

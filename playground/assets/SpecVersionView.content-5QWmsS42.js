import { t as e } from "./jsx-runtime-CqwARRmJ.js";
import { b as t, r as n } from "./utils-CcSgwp0X.js";
import { Dt as r, p as i, xt as a } from "./index-QWim6Jbc.js";
var o = e(), s = n(`flex flex-row items-center gap-[2px] px-1`, `[&>svg]:size-4`, `uppercase text-sm`);
function c() {
	let { spec: e, esmeta: n, client: c } = t(i);
	return (0, o.jsxs)(o.Fragment, { children: [
		(0, o.jsx)(`h4`, { children: `ECMA-262 (Specification) Version` }),
		(0, o.jsxs)(`div`, {
			className: `flex flex-col`,
			children: [(0, o.jsxs)(`div`, {
				className: s,
				children: [(0, o.jsx)(a, {}), e.tag || `unknown tag`]
			}), (0, o.jsxs)(`div`, {
				className: s,
				children: [(0, o.jsx)(r, {}), e.hash || `unknown commit hash`]
			})]
		}),
		(0, o.jsx)(`h4`, { children: `ESMeta Version` }),
		(0, o.jsx)(`div`, {
			className: s,
			children: n ?? `unknown version`
		}),
		(0, o.jsx)(`h4`, { children: `ESMeta Debugger Client Version` }),
		(0, o.jsx)(`div`, {
			className: s,
			children: c
		})
	] });
}
export { c as default };

import { t as e } from "./jsx-runtime-CqwARRmJ.js";
import { Tt as t, c as n, l as r, nt as i } from "./index-QWim6Jbc.js";
var a = e();
function o(e) {
	let { header: o, children: s, headerItems: c, icon: l } = e;
	return (0, a.jsxs)(r, {
		className: `rounded-none border-b`,
		children: [(0, a.jsx)(n, {
			icon: l ?? null,
			title: o,
			children: c
		}), (0, a.jsx)(i, {
			recoverable: !0,
			loading: (0, a.jsx)(`div`, {
				className: `size-full flex items-center justify-center`,
				children: (0, a.jsx)(t, { className: `animate-spin` })
			}),
			children: (0, a.jsx)(`div`, {
				className: `relative size-full overflow-y-scroll `,
				children: s
			})
		})]
	});
}
export { o as t };

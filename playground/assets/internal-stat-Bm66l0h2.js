import { t as e } from "./jsx-runtime-CqwARRmJ.js";
import { b as t } from "./utils-CcSgwp0X.js";
import { gt as n } from "./index-CYaaQPEq.js";
var r = e();
function i() {
	let [e, i] = t(n), a = i.stepCnt, o = i.instCnt;
	return (0, r.jsxs)(`div`, {
		className: `data-[stale=true]:opacity-50`,
		"data-stale": e,
		children: [(0, r.jsx)(`h1`, { children: `Internal Stat Viewer` }), (0, r.jsxs)(`pre`, {
			className: `whitespace-pre-line`,
			children: [
				`Step: `,
				a,
				`instCnt: `,
				o
			]
		})]
	});
}
export { i as default };

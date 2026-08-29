import { a as e, c as t, n, t as r } from "./jsx-runtime-CqwARRmJ.js";
import { N as i, b as a, r as o } from "./utils-CcSgwp0X.js";
import { at as s, m as c } from "./index-CYaaQPEq.js";
import { t as l } from "./use-transient-B3cnmA1F.js";
import { n as u, r as d, t as f } from "./tooltip-C6i4gjJP.js";
var p = t(n(), 1);
function m(e) {
	let [t, n] = l(null, 1e3);
	return [t, (0, p.useCallback)(() => {
		let t = typeof e == `function` ? e() : e;
		(typeof t == `string` ? navigator.clipboard.writeText(t) : navigator.clipboard.write(t)).then(() => n(!0)).catch(() => n(!1));
	}, [e, n])];
}
var h = r();
function g({ fid: e }) {
	let t = a(s), n = a(c)[e], r = n.info, o = r !== void 0, [l, p] = m(n.algoCode);
	return o ? (0, h.jsxs)(h.Fragment, { children: [
		r.isClo && (0, h.jsx)(_, { from: n.nameForContext }),
		r.isCont && (0, h.jsx)(v, { from: n.nameForContext }),
		(0, h.jsxs)(f, { children: [(0, h.jsx)(d, {
			asChild: !0,
			className: `font-sans text-xs ml-1 font-600 px-1`,
			children: (0, h.jsx)(`a`, {
				href: `${i}#${r.htmlId}`,
				target: `_blank`,
				children: `🔗`
			})
		}), (0, h.jsx)(u, { children: `${i}#${r.htmlId}` })] }),
		t && (0, h.jsx)(`button`, {
			className: `font-sans text-xs ml-1 px-1`,
			onClick: p,
			children: l ? `✅` : `📃`
		})
	] }) : null;
}
function _({ from: e }) {
	return (0, h.jsxs)(f, { children: [(0, h.jsx)(d, {
		className: `inline rounded-full bg-yellow-400 text-black font-sans text-xs ml-1 font-600 px-1`,
		children: `Abstract Closure`
	}), (0, h.jsxs)(u, { children: [
		`This is an Abstract Closure captured at `,
		e,
		`.`
	] })] });
}
function v({ from: e }) {
	return (0, h.jsxs)(f, { children: [(0, h.jsx)(d, {
		className: `inline rounded-full bg-green-700 text-white font-sans text-xs ml-1 font-600 px-1`,
		children: `Continuation`
	}), (0, h.jsxs)(u, { children: [
		`This is a continuation captured at `,
		e,
		`, to model ECMA-262's behaviour.`
	] })] });
}
var y = e({
	AlgoViewerHeaderUsingAlgoName: () => x,
	default: () => b
});
function b({ fid: e }) {
	let t = a(c)[e], n = t.info, r = n?.isSdo === !0, i = (n?.isSdo === !0 || n?.isMethod === !0 ? t.params.slice(1) : t.params).map(({ name: e, optional: t }) => t ? e + `?` : e).join(`, `), s = n?.sdoInfo?.prod?.prodInfo;
	return (0, h.jsxs)(h.Fragment, { children: [
		(0, h.jsxs)(`div`, {
			className: `pt-2 px-2 font-es font-600 text-lg`,
			children: [
				(0, h.jsx)(`b`, { children: t.nameForContext }),
				(0, h.jsxs)(`span`, {
					className: `algo-parameters`,
					children: [
						`(`,
						i,
						`)`
					]
				}),
				(0, h.jsx)(g, { fid: e })
			]
		}),
		r && (0, h.jsx)(`div`, {
			className: `px-2 flex flex-col mb-1`,
			children: s && (0, h.jsxs)(`p`, {
				className: `ml-4`,
				children: [
					(0, h.jsx)(`b`, {
						className: `inline font-300 italic`,
						children: n.sdoInfo?.prod?.astName
					}),
					(0, h.jsx)(`b`, {
						className: `inline font-700`,
						children: `\xA0:`
					}),
					s.map((e, t) => (0, h.jsxs)(`b`, {
						className: o(`inline`, e.type === `terminal` && `font-700 font-mono text-sm`, e.type === `nonterminal` && `font-300 italic`),
						children: [`\xA0`, e.value]
					}, t))
				]
			})
		}),
		n?.methodInfo && (0, h.jsx)(`div`, {
			className: `px-2 flex flex-col mb-1`,
			children: (0, h.jsxs)(`p`, {
				className: `px-2 font-300`,
				children: [
					(0, h.jsx)(`b`, {
						className: `size-14 text-[#2aa198] italic font-es`,
						children: t.params[0].name
					}),
					` `,
					`: `,
					(0, h.jsx)(`b`, {
						className: `size-14 font-es`,
						children: n?.methodInfo[0]
					})
				]
			})
		})
	] });
}
function x({ name: e }) {
	let t = a(c), n = Object.values(t).find((t) => t.name === e), r = n?.info, i = r?.isSdo === !0, s = r?.sdoInfo?.prod?.prodInfo;
	return (0, h.jsxs)(h.Fragment, { children: [
		(0, h.jsx)(`div`, {
			className: `pt-2 px-2 font-es font-600 text-lg`,
			children: (0, h.jsx)(`b`, { children: n?.nameForContext ?? e })
		}),
		i && (0, h.jsx)(`div`, {
			className: `px-2 flex flex-col mb-1 font-es`,
			children: s && (0, h.jsxs)(`p`, {
				className: `ml-4`,
				children: [
					(0, h.jsx)(`b`, {
						className: `inline font-300 italic`,
						children: r.sdoInfo?.prod?.astName
					}),
					(0, h.jsx)(`b`, {
						className: `inline font-700`,
						children: `\xA0:`
					}),
					s.map((e, t) => (0, h.jsxs)(`b`, {
						className: o(`inline`, e.type === `terminal` && `font-700 font-mono text-sm`, e.type === `nonterminal` && `font-300 italic`),
						children: [`\xA0`, e.value]
					}, t))
				]
			})
		}),
		r?.methodInfo && (0, h.jsx)(`div`, {
			className: `px-2 flex flex-col mb-1`,
			children: (0, h.jsx)(`p`, {
				className: `px-2 font-300`,
				children: (0, h.jsx)(`b`, {
					className: `size-14 font-es`,
					children: r?.methodInfo[0]
				})
			})
		})
	] });
}
export { x as n, y as r, b as t };

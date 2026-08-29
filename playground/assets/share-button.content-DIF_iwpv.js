import { c as e, n as t, t as n } from "./jsx-runtime-CqwARRmJ.js";
import { M as r, b as i, j as a, r as o } from "./utils-CcSgwp0X.js";
import { St as s, _t as c, bt as l, ct as u, kt as d } from "./index-CYaaQPEq.js";
import { t as f } from "./use-transient-B3cnmA1F.js";
var p = d(`copy-check`, [
	[`path`, {
		d: `m12 15 2 2 4-4`,
		key: `2c609p`
	}],
	[`rect`, {
		width: `14`,
		height: `14`,
		x: `8`,
		y: `8`,
		rx: `2`,
		ry: `2`,
		key: `17jyea`
	}],
	[`path`, {
		d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,
		key: `zix9uf`
	}]
]), m = d(`copy-x`, [
	[`line`, {
		x1: `12`,
		x2: `18`,
		y1: `12`,
		y2: `18`,
		key: `1rg63v`
	}],
	[`line`, {
		x1: `12`,
		x2: `18`,
		y1: `18`,
		y2: `12`,
		key: `ebkxgr`
	}],
	[`rect`, {
		width: `14`,
		height: `14`,
		x: `8`,
		y: `8`,
		rx: `2`,
		ry: `2`,
		key: `17jyea`
	}],
	[`path`, {
		d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,
		key: `zix9uf`
	}]
]), h = d(`copy`, [[`rect`, {
	width: `14`,
	height: `14`,
	x: `8`,
	y: `8`,
	rx: `2`,
	ry: `2`,
	key: `17jyea`
}], [`path`, {
	d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,
	key: `zix9uf`
}]]), g = e(t(), 1), _ = n();
function v({ content: e, getContent: t, className: n }) {
	let [r, i] = f(0, 1e3), a = (0, g.useCallback)(() => {
		let n = e === void 0 ? t() : e;
		navigator.share(n).then(() => {
			i(2);
		}).catch(() => {
			i(3);
		});
	}, [
		e,
		i,
		t
	]);
	return (0, _.jsx)(`button`, {
		className: o(`inline-flex justify-center items-end h-[1em] [&>svg]:size-[1em] motion-safe:active:scale-75 motion-safe:transition-all`, `print:hidden`, n),
		onClick: a,
		children: (0, _.jsx)(y, { state: r })
	});
}
function y({ state: e }) {
	switch (e) {
		default: return (0, _.jsx)(s, { className: `inline` });
	}
}
function b({ content: e, className: t }) {
	let [n, r] = f(null, 1e3), i = (0, g.useCallback)(() => {
		navigator.clipboard.writeText(e.toString()).then(() => r(!0)).catch(() => r(!1));
	}, [e, r]);
	return (0, _.jsxs)(`div`, {
		className: o(`flex flex-row font-pixel justify-between items-center w-full text-xl bg-neutral-50 dark:bg-neutral-900 rounded-lg overflow-hidden`, t),
		children: [(0, _.jsxs)(`div`, {
			className: `group/copybox  flex flex-row items-center grow gap-4`,
			onClick: i,
			children: [(0, _.jsx)(`textarea`, {
				readOnly: !0,
				spellCheck: !1,
				rows: 1,
				value: e.toString(),
				className: o(`resize-none`, `align-middle`, `transition-colors grow pl-4 py-4`, `w-full text-base text-center overflow-x-auto overflow-y-hidden whitespace-nowrap`, n === !0 && `text-green-300`, n === !1 && `text-red-300`)
			}), (0, _.jsx)(`button`, {
				className: `group-active/copybox:scale-[0.85] [&>svg]:size-[1em] pr-4 group-hover/copybox:opacity-75 group-hover/copybox:scale-105 transition-all`,
				children: n === null ? (0, _.jsx)(h, {}) : n ? (0, _.jsx)(p, {}) : (0, _.jsx)(m, {})
			})]
		}), (0, _.jsx)(v, {
			className: `mr-4`,
			content: { url: e.toString() }
		})]
	});
}
function x() {
	i(l).api;
	let e = i(u), t = i(c), n = new URL(window.location.href);
	n.search = ``;
	let o = n.toString();
	n.searchParams.set(r, e);
	let s = n.toString();
	t !== null && n.searchParams.set(a, String(t));
	let d = t === null ? null : n.toString();
	return (0, _.jsxs)(`div`, {
		className: `space-y-6`,
		children: [
			(0, _.jsxs)(`article`, {
				className: `space-y-2 mt-6`,
				children: [
					(0, _.jsx)(`h3`, {
						className: `font-500`,
						children: `Share this website:`
					}),
					(0, _.jsx)(`div`, {
						className: `flex flex-row`,
						children: (0, _.jsx)(b, { content: o })
					}),
					(0, _.jsx)(S, { length: o.length })
				]
			}),
			(0, _.jsxs)(`article`, {
				className: `space-y-2`,
				children: [
					(0, _.jsx)(`h3`, {
						className: `font-500`,
						children: `Share with code:`
					}),
					(0, _.jsx)(b, { content: s }),
					(0, _.jsx)(S, { length: s.length })
				]
			}),
			(0, _.jsxs)(`article`, {
				className: `space-y-2`,
				children: [
					(0, _.jsx)(`h3`, {
						className: `font-500`,
						children: `Share code and current state:`
					}),
					(0, _.jsxs)(`aside`, { children: [
						"This link enables `resume` button, which will start the program from the current state.",
						` `,
						(0, _.jsx)(`span`, {
							className: `text-red-500 dark:text-red-400`,
							children: `Please note that this link might break after ECMA-262 or ESMeta updates.`
						})
					] }),
					d === null ? (0, _.jsx)(`aside`, {
						className: `text-es-500 dark:text-es-400`,
						children: `Something went wrong, this link is not available for now. You might need to start debugging to get this link.`
					}) : (0, _.jsx)(b, { content: d }),
					(0, _.jsx)(S, { length: d?.length ?? 0 })
				]
			})
		]
	});
}
function S({ length: e }) {
	return e > 2e3 ? (0, _.jsx)(`aside`, {
		className: `text-es-500 dark:text-es-400`,
		children: `Note: The URL is extremely long, some platforms may have issues handling it.`
	}) : null;
}
export { x as default };

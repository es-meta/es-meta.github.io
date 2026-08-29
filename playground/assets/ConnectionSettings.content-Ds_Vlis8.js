import { n as e, t } from "./jsx-runtime-CqwARRmJ.js";
import { Et as n, kt as r, v as i, wt as a, y as o } from "./index-CYaaQPEq.js";
var s = r(`square-check-big`, [[`path`, {
	d: `M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344`,
	key: `2acyp4`
}], [`path`, {
	d: `m9 11 3 3L22 4`,
	key: `1pflzl`
}]]);
e();
var c = t();
function l({ selected: e, options: t, setSelected: n, getId: r, getIcon: a, getLabel: l, getDescription: u }) {
	return (0, c.jsx)(`div`, {
		className: `w-full`,
		children: (0, c.jsx)(`div`, {
			className: `mx-auto w-full max-w-md`,
			children: (0, c.jsx)(o, {
				value: e,
				onChange: n,
				"aria-label": `Server size`,
				className: `space-y-2`,
				children: t.map((e) => (0, c.jsx)(i, {
					value: e,
					className: `group hover:scale-[1.03125] active:scale-95 relative flex cursor-pointer rounded-lg bg-neutral-500/10 py-4 px-5 transition
              focus:outline-hidden data-focus:outline-1 data-focus:outline-es-900 data-checked:bg-linear-to-r data-checked:from-es-500/60 dark:data-checked:from-es-900/60 data-checked:to-es-500/5 dark:data-checked:to-es-900/5`,
					children: (0, c.jsxs)(`div`, {
						className: `flex w-full items-center justify-between`,
						children: [(0, c.jsxs)(`div`, {
							className: `flex flex-col text-sm gap-2`,
							children: [(0, c.jsxs)(`header`, {
								className: `[&>svg]:inline-block items-center font-600 text-base`,
								children: [
									a(e),
									` `,
									l(e)
								]
							}), u(e)]
						}), (0, c.jsx)(`div`, {
							className: `min-w-6`,
							children: (0, c.jsx)(s, { className: `size-6 opacity-0 transition group-data-checked:opacity-100` })
						})]
					})
				}, r(e)))
			})
		})
	});
}
function u({ selected: e, setSelected: t, saveToLocal: n, url: r, setUrl: i }) {
	return (0, c.jsxs)(c.Fragment, { children: [
		(0, c.jsx)(`h4`, {
			className: `font-500`,
			children: `Connection Mode`
		}),
		(0, c.jsx)(l, {
			selected: e,
			setSelected: t,
			options: d,
			getId: (e) => e.id,
			getIcon: (e) => e.icon,
			getLabel: (e) => e.name,
			getDescription: (e) => e.description
		}),
		(0, c.jsx)(`h4`, {
			className: `font-500`,
			children: `API Address`
		}),
		(0, c.jsx)(`input`, {
			type: `text`,
			className: `rounded-lg`,
			placeholder: `Enter API Address`,
			disabled: e.id === `browser`,
			value: r,
			onChange: (e) => i(e.target.value)
		}),
		(0, c.jsx)(`aside`, { children: (0, c.jsx)(`p`, { children: `This settings needs to be saved.` }) }),
		(0, c.jsxs)(`div`, {
			className: `flex justify-end gap-2`,
			children: [(0, c.jsx)(`button`, {
				className: `button-styled`,
				"data-dialog-control": `close`,
				children: `Cancel`
			}), (0, c.jsx)(`button`, {
				className: `button-styled`,
				onClick: () => {
					n(`params`);
				},
				children: `Save for this Tab (Refresh)`
			})]
		})
	] });
}
var d = [{
	id: `http`,
	name: `Connect to ESMeta API Server`,
	description: (0, c.jsxs)(`p`, {
		className: `inline`,
		children: [
			`Install ESMeta and run`,
			` `,
			(0, c.jsx)(`code`, {
				className: `inline rounded`,
				children: `esmeta web`
			})
		]
	}),
	icon: (0, c.jsx)(a, {})
}, {
	id: `browser`,
	name: `Run ESMeta on Web Browser`,
	description: (0, c.jsx)(`p`, {
		className: `inline`,
		children: `No configuration needed.`
	}),
	icon: (0, c.jsx)(n, {})
}];
export { u as default };

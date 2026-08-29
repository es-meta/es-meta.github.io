import { c as e, n as t, r as n, t as r } from "./jsx-runtime-CqwARRmJ.js";
import { T as i, b as a, h as o, x as s } from "./utils-CcSgwp0X.js";
import { _ as c, dt as l, g as u, h as d, m as f, ot as p, ut as m, vt as h } from "./index-CYaaQPEq.js";
import { t as g } from "./AlgoViewerHeader-ChoinCK1.js";
var _ = n(((e, t) => {
	var n = /["'&<>]/;
	t.exports = r;
	function r(e) {
		var t = `` + e, r = n.exec(t);
		if (!r) return t;
		var i, a = ``, o = 0, s = 0;
		for (o = r.index; o < t.length; o++) {
			switch (t.charCodeAt(o)) {
				case 34:
					i = `&quot;`;
					break;
				case 38:
					i = `&amp;`;
					break;
				case 39:
					i = `&#39;`;
					break;
				case 60:
					i = `&lt;`;
					break;
				case 62:
					i = `&gt;`;
					break;
				default: continue;
			}
			s !== o && (a += t.substring(s, o)), s = o + 1, a += i;
		}
		return s === o ? a : a + t.substring(s, o);
	}
})), v = n(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = /^\[\[[a-zA-Z0-9_]+\]\]/, n = /^<[/!]?(\w[\w-]*)(\s+\w[\w-]*(\s*=\s*("[^"]*"|'[^']*'|[^><"'=`]+))?)*\s*>/, r = /^<!--[\w\W]*?-->/, i = /^\[ *[\w-]+ *(?:= *"(?:[^"\\\x00-\x1F]|\\["\\/bfnrt]|\\u[a-fA-F]{4})*")? *(?:, *[\w-]+ *(?:= *"(?:[^"\\\x00-\x1F]|\\["\\/bfnrt]|\\u[a-fA-F]{4})*")? *)*] /, a = /\d/, o = /* @__PURE__ */ new Set([
		`emu-grammar`,
		`emu-production`,
		`pre`,
		`code`,
		`script`,
		`style`
	]);
	e.Tokenizer = class {
		constructor(e) {
			this.str = e, this._eof = !1, this.pos = 0, this.line = 1, this.column = 1, this.queue = [], this._newline = !0, this._lookahead = [], this.previous = void 0;
		}
		scanDigits() {
			let e = this.pos;
			for (; this.pos < this.str.length && this.str[this.pos].match(a);) this.pos++;
			return this.str.slice(e, this.pos);
		}
		scanWhitespace() {
			let e = this.pos;
			for (; this.pos < this.str.length && s(this.str[this.pos]);) this.pos++;
			return this.str.slice(e, this.pos);
		}
		scanEscape() {
			if (this.pos++, this.pos === this.str.length) return `\\`;
			let e = this.str[this.pos];
			return this.pos++, l(e) || e === `\\` ? e : `\\` + e;
		}
		scanChars() {
			let e = this.str.length, t = ``, n;
			for (; this.pos < e;) if (n = this.str[this.pos], n === `\\`) t += this.scanEscape();
			else if (c(n)) t += n, this.pos++;
			else if (n === `[`) {
				if (this.tryScanFieldOrSlot()) break;
				t += n, this.pos++;
			} else if (n === `<`) {
				if (this.tryScanComment() || this.tryScanTag()) break;
				t += n, this.pos++;
			} else break;
			return t;
		}
		scanToEndTag(e) {
			let t = this.pos, n = this.str.length;
			for (; this.pos < n;) {
				let t = this.tryScanTag();
				if (t) {
					if (this.pos += t[0].length, t[1] === e && t[0][1] === `/`) break;
				} else this.pos++;
			}
			return this.str.slice(t, this.pos);
		}
		tryScanFieldOrSlot() {
			let e = this.str.slice(this.pos).match(t);
			if (e) return e[0];
		}
		tryScanTag() {
			let e = this.str.slice(this.pos).match(n);
			if (e) return e;
		}
		tryScanComment() {
			let e = this.str.slice(this.pos).match(r);
			if (e) return e[0];
		}
		tryScanListItemAttributes() {
			let e = this.str.slice(this.pos), t = e.match(i);
			if (!t) return e.startsWith(`[`) && this.raise(`could not parse attributes for step`, this.getLocation()), [];
			let n = t[0].matchAll(/([\w-]+) *(?:= *("(?:[^"\\\x00-\x1F]|\\["\\/bfnrt]|\\u[a-fA-F]{4})*"))?/g), r = [], a = 0;
			for (let { 0: e, 1: t, 2: i, index: o } of n) {
				this.pos += o - a, this.column += o - a;
				let n = this.getLocation(), s = {
					name: `attr`,
					key: t,
					value: i == null ? `` : JSON.parse(i)
				};
				this.pos += e.length, this.locate(s, n), a = o + e.length, r.push(s);
			}
			return this.pos += t[0].length - a, this.column += t[0].length - a, r;
		}
		matchToken() {
			let e = this.str;
			for (;;) {
				if (this.pos === e.length) {
					this._eof = !0, this.enqueue({
						name: `EOF`,
						done: !0
					}, this.getLocation());
					return;
				}
				if (this._newline) {
					this._newline = !1;
					let t = this.getLocation(), n = this.scanWhitespace();
					if (this.pos >= e.length) {
						if (n.length > 0) {
							this.enqueue({
								name: `whitespace`,
								contents: n
							}, t);
							return;
						}
					} else if (e[this.pos].match(/\d/)) {
						let r = this.scanDigits();
						if (e[this.pos] === `.` && e[this.pos + 1] === ` `) {
							this.pos += 2, this.enqueue({
								name: `ol`,
								contents: n + r + `. `
							}, t);
							return;
						} else {
							n.length > 0 && this.enqueue({
								name: `whitespace`,
								contents: n
							}, t), this.enqueue({
								name: `text`,
								contents: r + this.scanChars()
							}, t);
							return;
						}
					} else if (e[this.pos] === `*` && e[this.pos + 1] === ` `) {
						this.pos += 2, this.enqueue({
							name: `ul`,
							contents: n + `* `
						}, t);
						return;
					} else if (e[this.pos] === `<`) {
						let e = this.tryScanTag();
						if (e) {
							if (o.has(e[1]) && e[2] !== `/`) {
								this.pos += e[0].length;
								let r = this.scanToEndTag(e[1]);
								this.enqueue({
									name: `opaqueTag`,
									contents: n + e[0] + r
								}, t);
							} else {
								n.length > 0 && this.enqueue({
									name: `whitespace`,
									contents: n
								}, t);
								let r = this.getLocation();
								this.pos += e[0].length, this.enqueue({
									name: `tag`,
									contents: e[0]
								}, r);
							}
							return;
						}
						let r = this.tryScanComment();
						if (r) {
							this.pos += r.length, this.enqueue({
								name: `comment`,
								contents: n + r
							}, t);
							return;
						}
					} else if (n.length > 0) {
						this.enqueue({
							name: `whitespace`,
							contents: n
						}, t);
						return;
					}
				}
				let t = this.getLocation(), n = e[this.pos];
				switch (n) {
					case `*`:
						this.pos++, this.enqueue({
							name: `star`,
							contents: n
						}, t);
						return;
					case `_`:
						this.pos++, this.enqueue({
							name: `underscore`,
							contents: n
						}, t);
						return;
					case "`":
						this.pos++, this.enqueue({
							name: `tick`,
							contents: n
						}, t);
						return;
					case `|`:
						this.pos++, this.enqueue({
							name: `pipe`,
							contents: n
						}, t);
						return;
					case `~`:
						this.pos++, this.enqueue({
							name: `tilde`,
							contents: n
						}, t);
						return;
					case `
`:
						this._newline = !0;
						{
							let n = this.pos, r = n + 1;
							for (; r < e.length && e[r] === `
`;) r++;
							this.pos = r, r === n + 1 ? this.enqueue({
								name: `linebreak`,
								contents: `
`
							}, t) : this.enqueue({
								name: `parabreak`,
								contents: e.slice(n, r)
							}, t);
						}
						return;
					default: if (s(n)) {
						this.enqueue({
							name: `whitespace`,
							contents: this.scanWhitespace()
						}, t);
						return;
					} else if (c(n)) {
						this.enqueue({
							name: `text`,
							contents: this.scanChars()
						}, t);
						return;
					} else if (n === `[`) {
						let e = this.tryScanFieldOrSlot();
						if (e) {
							this.pos += e.length, this.enqueue({
								name: `double-brackets`,
								contents: e.slice(2, -2)
							}, t);
							return;
						}
						this.enqueue({
							name: `text`,
							contents: this.scanChars()
						}, t);
					} else if (n === `<`) {
						if (this.str[this.pos + 1] === `!` && this.str[this.pos + 2] === `-` && this.str[this.pos + 3] === `-`) {
							let e = this.tryScanComment();
							if (e) {
								this.pos += e.length, this.enqueue({
									name: `comment`,
									contents: e
								}, t);
								return;
							}
						} else {
							let e = this.tryScanTag();
							if (e) {
								if (this.pos += e[0].length, o.has(e[1]) && e[2] !== `/`) {
									let n = this.scanToEndTag(e[1]);
									this.enqueue({
										name: `opaqueTag`,
										contents: e[0] + n
									}, t);
								} else this.enqueue({
									name: `tag`,
									contents: e[0]
								}, t);
								return;
							}
						}
						this.enqueue({
							name: `text`,
							contents: this.scanChars()
						}, t);
						return;
					} else this.raise(`Unexpected token ${n}`, t);
				}
			}
		}
		getLocation() {
			return {
				offset: this.pos,
				line: this.line,
				column: this.column
			};
		}
		enqueue(e, t) {
			if (this.locate(e, t), this.queue.push(e), this._lookahead.length !== 0) {
				for (let e = 0; e < this._lookahead.length; e++) this.queue.push(this._lookahead[e]);
				this._lookahead = [];
			}
		}
		dequeue() {
			return this.queue.shift();
		}
		peek(e = 1) {
			for (; !this._eof && this.queue.length < e;) this.matchToken();
			return this.queue.length < e ? this.queue[this.queue.length - 1] : this.queue[e - 1];
		}
		next() {
			return this.previous = this.peek(), this.previous.name !== `EOF` && this.dequeue(), this.previous;
		}
		locate(e, t) {
			if (e.name === `linebreak`) this.column = 1, ++this.line;
			else if (e.name === `parabreak`) {
				let t = e.contents.length;
				this.column = 1, this.line += t;
			} else {
				let e = this.pos - t.offset;
				this.column += e;
			}
			e.location = {
				start: t,
				end: this.getLocation()
			};
		}
		expect(e) {
			let t = this.peek();
			t.name !== e && this.raise(`Unexpected token ${t.name}; expected ${e}`, t.location.start);
		}
		raise(e, t) {
			let n = SyntaxError(e);
			throw n.offset = t.offset, n.line = t.line, n.column = t.column, n;
		}
	};
	function s(e) {
		return e === ` ` || e === `	`;
	}
	function c(e) {
		return !l(e) && e !== `
` && e !== ` ` && e !== `	` && e !== `[`;
	}
	function l(e) {
		return e === `*` || e === `_` || e === "`" || e === `<` || e === `|` || e === `~`;
	}
})), y = n(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 });
	var n = t(_()), r = v();
	e.Parser = class e {
		constructor(e) {
			this._t = e, this._posStack = [];
		}
		static parseAlgorithm(t) {
			let n = new r.Tokenizer(t);
			return new e(n).parseAlgorithm();
		}
		static parseFragment(t) {
			let n = new r.Tokenizer(t), i = new e(n).parseFragment({});
			return n.expect(`EOF`), i;
		}
		parseAlgorithm() {
			for (;;) {
				let e = this._t.peek();
				if (e.name === `EOF`) break;
				if (e.name === `parabreak` || e.name === `linebreak`) {
					this._t.next();
					continue;
				}
				break;
			}
			this._t.expect(`ol`), this.pushPos();
			let e = this.finish({
				name: `algorithm`,
				contents: this.parseList()
			});
			return this._t.expect(`EOF`), e;
		}
		parseList() {
			this.pushPos();
			let e = this._t.peek(), t;
			if (e.name === `ul`) t = {
				name: `ul`,
				indent: e.contents.match(/(\s*)\* /)[1].length,
				contents: []
			};
			else {
				let n = e.contents.match(/(\s*)([^.]+)\. /);
				t = {
					name: `ol`,
					indent: n[1].length,
					start: Number(n[2]),
					contents: []
				};
			}
			for (;;) {
				let e = this._t.peek();
				if (e.name !== t.name || e.contents.match(/\s*/)[0].length !== t.indent) break;
				t.contents.push(this.parseListItem(t.name, t.indent));
			}
			return this.finish(t);
		}
		parseListItem(e, t) {
			this.pushPos(), this._t.next();
			let n = this._t.tryScanListItemAttributes(), r = this.parseFragment({ inList: !0 }), i = this._t.peek(), a = null;
			s(i) && i.contents.match(/^(\s*)/)[1].length > t && (a = this.parseList());
			let o = e === `ol` ? `ordered-list-item` : `unordered-list-item`;
			return this.finish({
				name: o,
				contents: r,
				sublist: a,
				attrs: n
			});
		}
		parseFragment(e, t) {
			let n = [];
			for (;;) {
				let r = this._t.peek();
				if (r.name === `EOF`) break;
				if (r.name === `parabreak`) {
					this._t.peek(2).name === `EOF` && (this.pushPos(), this._t.next(), u(n, this.finish({
						name: `text`,
						contents: r.contents
					})));
					break;
				} else if (r.name === `text` || r.name === `whitespace` || r.name === `linebreak`) {
					let r = this.parseText(e, t);
					r !== null && u(n, r);
				} else if (i(r)) if (t !== void 0) {
					if (r.name === t) break;
					this.pushPos(), this._t.next(), u(n, this.finish({
						name: `text`,
						contents: r.contents
					}));
				} else {
					let t = this.parseFormat(r.name, e);
					t.length === 1 && t[0].name === `text` ? u(n, t[0]) : n = n.concat(t);
				}
				else if (r.name === `comment` || r.name === `tag` || r.name === `opaqueTag` || r.name === `double-brackets`) n.push(r), this._t.next();
				else if (s(r)) {
					if (e.inList) break;
					this.pushPos(), this._t.next(), u(n, this.finish({
						name: `text`,
						contents: r.contents
					}));
				} else throw Error(`Unknown token type ${r.name}. This is a bug in ecmarkdown; please report it.`);
			}
			return n;
		}
		parseText(e, t) {
			this.pushPos();
			let n = ``, r = null;
			for (;;) {
				let o = this._t.peek(), u = ``, d = null;
				for (; a(o);) u += o.contents, d = o, this._t.next(), o = this._t.peek();
				if (o.name === `EOF` || o.name === `parabreak` || e.inList && s(o)) {
					e.inList || (n += u, d !== null && (r = d));
					break;
				}
				if (n += u, d !== null && (r = d), o.name === `opaqueTag` || o.name === `comment` || o.name === `tag` || o.name === `double-brackets`) break;
				if (i(o)) {
					if (o.name === `tick`) break;
					if (t === void 0 || o.name === t) {
						let e = this._t.previous, n = this._t.peek(2), r = o.name === t;
						if (!r && c(e, o, n) || r && l(e, o)) break;
					}
				}
				r = o, n += o.contents, this._t.next();
			}
			if (n === ``) return this.popPos(), null;
			let o = r?.location.end;
			return this.finish({
				name: `text`,
				contents: n
			}, void 0, o);
		}
		parseFormat(e, t) {
			let r = this._t.next(), i = this.getPos(r), a = [];
			e === `underscore` ? this._t.peek().name === `text` && (a = [this._t.next()]) : a = this.parseFragment(t, e);
			let o = this._t.peek();
			if (o.name !== e) {
				let e = a[a.length - 1] ?? r;
				return d(a, this.finish({
					name: `text`,
					contents: r.contents
				}, i, e.location.end)), a;
			}
			let s = o.location.end;
			if (this._t.next(), a.length === 0) return [this.finish({
				name: `text`,
				contents: r.contents + o.contents
			}, i, s)];
			if (e === `tick`) a = a.map((e) => e.name === `tag` ? {
				...e,
				name: `text`,
				contents: n.default(e.contents)
			} : e);
			else if (e === `pipe`) {
				let e = p(a[0].contents);
				if (e === null) {
					let e = this.getPos(a[0]), t = this.getEnd(a[a.length - 1]);
					return d(a, this.finish({
						name: `text`,
						contents: `|`
					}, i, e)), u(a, this.finish({
						name: `text`,
						contents: `|`
					}, t, s)), a;
				} else return [this.finish(e, i, s)];
			} else if (e === `underscore`) return [this.finish({
				name: `underscore`,
				contents: a[0].contents
			}, i, s)];
			return [this.finish({
				name: e,
				contents: a
			}, i, s)];
		}
		pushPos() {
			this._posStack.push(this.getPos());
		}
		popPos() {
			return this._posStack.pop();
		}
		getPos(e = this._t.peek()) {
			return e.location.start;
		}
		getEnd(e) {
			return e.location.end;
		}
		finish(e, t, n) {
			return e.location = {
				start: t ?? this.popPos(),
				end: n ?? (this._t.previous === void 0 ? {
					line: 1,
					column: 1,
					offset: 0
				} : { ...this._t.previous.location.end })
			}, e;
		}
	};
	function i(e) {
		return e.name === `star` || e.name === `underscore` || e.name === `tilde` || e.name === `tick` || e.name === `pipe`;
	}
	function a(e) {
		return e.name === `whitespace` || e.name === `linebreak`;
	}
	function o(e) {
		return e ? !!e.match(/[\w\d]/) : !1;
	}
	function s(e) {
		return e.name === `ol` || e.name === `ul`;
	}
	function c(e, t, n) {
		return t.name === `tick` ? !0 : !o(e.contents[e.contents.length - 1]) && !a(n);
	}
	function l(e, t) {
		return t.name === `tick` ? !0 : !a(e);
	}
	function u(e, t) {
		let n = e[e.length - 1];
		e.length > 0 && n.name === `text` ? (n.contents += t.contents, n.location.end = t.location.end) : e.push(t);
	}
	function d(e, t) {
		let n = e[0];
		e.length > 0 && n.name === `text` ? (n.contents = t.contents + n.contents, n.location.start = t.location.start) : e.unshift(t);
	}
	var f = /^([A-Za-z0-9]+)(?:\[([^\]]+)\])?(_opt|\?)?$/;
	function p(e) {
		let t = e.match(f);
		return t ? {
			name: `pipe`,
			nonTerminal: t[1],
			params: t[2],
			optional: !!t[3],
			contents: null
		} : null;
	}
})), b = n(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = {
		opaqueTag: [],
		tag: [],
		comment: [],
		algorithm: [`contents`],
		text: [],
		"double-brackets": [],
		star: [`contents`],
		underscore: [],
		tick: [`contents`],
		tilde: [`contents`],
		pipe: [],
		ul: [`contents`],
		ol: [`contents`],
		"ordered-list-item": [`contents`, `sublist`],
		"unordered-list-item": [`contents`, `sublist`]
	};
	function n(e, r) {
		var i, a;
		if (Array.isArray(e)) {
			e.forEach((e) => n(e, r));
			return;
		}
		(i = r.enter) == null || i.call(r, e);
		for (let i of t[e.name]) {
			let t = e[i];
			if (t !== null) if (Array.isArray(t)) for (let e of t) n(e, r);
			else n(t, r);
		}
		(a = r.exit) == null || a.call(r, e);
	}
	e.visit = n;
})), x = n(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.Emitter = class e {
		constructor() {
			this.str = ``;
		}
		emit(e) {
			return this.emitNode(e), this.str;
		}
		static emit(t) {
			return new e().emit(t);
		}
		emitNode(e) {
			if (Array.isArray(e)) {
				this.emitFragment(e);
				return;
			}
			switch (e.name) {
				case `algorithm`:
					this.emitAlgorithm(e);
					break;
				case `ol`:
					this.emitOrderedList(e);
					break;
				case `ul`:
					this.emitUnorderedList(e);
					break;
				case `ordered-list-item`:
				case `unordered-list-item`:
					this.emitListItem(e);
					break;
				case `text`:
					this.emitText(e);
					break;
				case `pipe`:
					this.emitPipe(e);
					break;
				case `star`:
					this.emitStar(e);
					break;
				case `underscore`:
					this.emitUnderscore(e);
					break;
				case `tick`:
					this.emitTick(e);
					break;
				case `tilde`:
					this.emitTilde(e);
					break;
				case `double-brackets`:
					this.emitFieldOrSlot(e);
					break;
				case `comment`:
				case `tag`:
				case `opaqueTag`:
					this.emitTag(e);
					break;
				default: throw Error(`Can't emit ` + e.name);
			}
		}
		emitAlgorithm(e) {
			this.emitOrderedList(e.contents);
		}
		emitOrderedList(e) {
			this.str += `<ol`, e.start !== 1 && (this.str += ` start="` + e.start + `"`), this.str += `>`, e.contents.forEach((e) => this.emitListItem(e)), this.str += `</ol>`;
		}
		emitUnorderedList(e) {
			this.str += `<ul>`, e.contents.forEach((e) => this.emitListItem(e)), this.str += `</ul>`;
		}
		emitListItem(e) {
			let t = e.attrs.map((e) => ` ${e.key}=${JSON.stringify(e.value)}`).join(``);
			this.str += `<li${t}>`, this.emitFragment(e.contents), e.sublist !== null && (e.sublist.name === `ol` ? this.emitOrderedList(e.sublist) : this.emitUnorderedList(e.sublist)), this.str += `</li>`;
		}
		emitStar(e) {
			this.wrapFragment(`emu-val`, e.contents);
		}
		emitUnderscore(e) {
			this.str += `<var>${e.contents}</var>`;
		}
		emitFieldOrSlot(e) {
			this.str += `<var class="field">[[${e.contents}]]</var>`;
		}
		emitTag(e) {
			this.str += e.contents;
		}
		emitText(e) {
			this.str += e.contents;
		}
		emitTick(e) {
			this.wrapFragment(`code`, e.contents);
		}
		emitTilde(e) {
			this.wrapFragment(`emu-const`, e.contents);
		}
		emitFragment(e) {
			e.forEach((e) => this.emitNode(e));
		}
		emitPipe(e) {
			this.str += `<emu-nt`, e.params && (this.str += ` params="` + e.params + `"`), e.optional && (this.str += ` optional`), this.str += `>` + e.nonTerminal + `</emu-nt>`;
		}
		wrapFragment(e, t, n = ``) {
			this.str += `<${e}${n}>`, this.emitFragment(t), this.str += `</${e}>`;
		}
	};
})), S = n(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = y();
	e.visit = b().visit;
	var n = x();
	t.Parser.parseFragment, e.parseAlgorithm = t.Parser.parseAlgorithm, n.Emitter.emit;
})), C = e(t(), 1), w = S();
function T(e, t) {
	return e === t || e.length === t.length && e.every((e, n) => e === t[n]);
}
var E = r();
function D({ stringifiedSteps: e }) {
	let t = (0, C.useMemo)(() => JSON.parse(e), [e]), n = a(m), r = a(l), i = a(u), o = a(f), s = n[r], c = o[s.fid];
	return (0, E.jsx)(`div`, {
		className: `algo-step-prefix`,
		"data-this-step": e,
		children: (0, C.useMemo)(() => s === void 0 ? [] : i.map((e) => {
			if (e.type === h.Spec && e.algoName === c.info?.name) return e.steps;
		}).filter((e) => e !== void 0), [s, i]).some((e) => T(t, e)) ? `●` : `\xA0`
	});
}
function O({ listNode: e, stringifiedSteps: t, currentSteps: n, isExit: r, showOnlyVisited: i, visitedStepList: a, scrollOnHighlight: o }) {
	let s = JSON.parse(t);
	return (0, E.jsx)(`ol`, { children: e.contents.map((e, t) => (0, E.jsx)(k, {
		contents: e.contents,
		sublist: e.sublist,
		stringifiedSteps: JSON.stringify(s.concat([t + 1])),
		isExit: r,
		currentSteps: n,
		showOnlyVisited: i,
		visitedStepList: a,
		scrollOnHighlight: o
	})) });
}
function k({ stringifiedSteps: e, currentSteps: t, isExit: n, contents: r, sublist: s, showOnlyVisited: c, visitedStepList: l, scrollOnHighlight: u }) {
	let d = (0, C.useRef)(null), f = a(p), m = (0, C.useMemo)(() => JSON.parse(e), [e]), h = (0, C.useMemo)(() => T(m, t), [m, t]), g = (0, C.useMemo)(() => l.some((e) => T(e, m)), [m, l]), _ = c && !g && !h, v = (0, C.useMemo)(() => i([
		`algo-step`,
		h && n ? `exit-highlight` : h ? `highlight` : ``,
		!h && f && g ? `visited` : ``,
		_ ? `hidden` : ``
	]), [
		h,
		f,
		g,
		c,
		n,
		_
	]), y = (0, C.useMemo)(() => o(r), [r]);
	return (0, C.useEffect)(() => {
		u && h && d.current?.scrollIntoView({
			behavior: `smooth`,
			block: `nearest`,
			inline: `nearest`
		});
	}, [h]), (0, E.jsxs)(E.Fragment, { children: [
		!_ && (0, E.jsx)(D, { stringifiedSteps: e }),
		(0, E.jsx)(`li`, {
			ref: d,
			className: i(`hover:bg-neutral-400/10 active:bg-neutral-400/20 transition-all cursor-pointer scroll-m-8`, v),
			"data-this-step": e,
			children: y
		}),
		s === null || s.name === `ul` ? null : (0, E.jsx)(O, {
			listNode: s,
			stringifiedSteps: e,
			isExit: n,
			currentSteps: t,
			showOnlyVisited: c,
			visitedStepList: l,
			scrollOnHighlight: u
		})
	] });
}
function A({ context: e, showOnlyVisited: t, scrollOnHighlight: n }) {
	let r = a(f), i = a(u), o = s(d), l = s(c), p = e.fid, m = r[p], h = (0, C.useMemo)(() => e?.steps ?? [], [e]), _ = (0, C.useCallback)((e) => {
		let t = e.target;
		if (!(t instanceof HTMLElement)) return;
		let n = t.closest(`[data-this-step]`) ?? t;
		if (!(n instanceof HTMLElement)) return;
		let r = n.dataset.thisStep;
		if (r === void 0) return;
		let a = JSON.parse(r);
		M(i, o, l, m.info?.name ?? (console.error(`error: required spec info`), ``), m.name, a);
	}, [
		i,
		o,
		l,
		m.fid,
		m.name
	]), v = (0, C.useMemo)(() => (0, w.parseAlgorithm)(m.algoCode), [m.algoCode]);
	if (e === void 0 || m.algoCode === void 0 || m.algoCode.trim() === ``) throw Error(`Algorithm not found`);
	return (0, E.jsxs)(`div`, {
		className: `algo-container w-full h-fit break-before-column wrap-break-word hyphens-auto`,
		onClick: _,
		children: [(0, E.jsx)(g, { fid: p }), (0, E.jsx)(O, {
			listNode: v.contents,
			stringifiedSteps: j,
			currentSteps: h,
			isExit: e.isExit,
			showOnlyVisited: t,
			visitedStepList: e.visited,
			scrollOnHighlight: n
		})]
	});
}
var j = JSON.stringify([]);
function M(e, t, n, r, i, a) {
	let o = e.findIndex((e) => e.type === h.Spec ? e.algoName === r && e.steps.length === a.length && e.steps.every((e, t) => e === a[t]) : !1);
	if (o !== -1) n(o);
	else {
		let e = `${a} @ ${i}`;
		t({
			type: h.Spec,
			duplicateCheckId: e,
			algoName: r,
			viewName: i,
			steps: a,
			enabled: !0
		});
	}
}
export { A as default };

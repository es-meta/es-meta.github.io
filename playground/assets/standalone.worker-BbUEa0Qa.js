//#region src/api/standalone.worker.ts
let input = null;
let { resolve, promise: _standaloneDebugger } = Promise.withResolvers();
const doGetRequest = async (endpoint, queryObj) => {
	switch (endpoint) {
		case "spec/func": return JSON.parse((await _standaloneDebugger).spec_func());
		case "meta/version": return JSON.parse((await _standaloneDebugger).meta_version());
		case "meta/iter": return 1;
		case "meta/debugString": return "";
		case "spec/version": return JSON.parse((await _standaloneDebugger).spec_version());
		default: throw apiError(endpoint);
	}
};
const doWriteRequest = async (method, endpoint, bodyObj) => {
	switch (endpoint) {
		case "breakpoint": switch (method) {
			case "POST": return JSON.parse((await _standaloneDebugger).breakpoint_add(bodyObj !== void 0 ? JSON.stringify(bodyObj) : void 0));
			case "DELETE": return JSON.parse((await _standaloneDebugger).breakpoint_remove(bodyObj !== void 0 ? JSON.stringify(bodyObj) : void 0));
			case "PUT": return JSON.parse((await _standaloneDebugger).breakpoint_toggle(bodyObj !== void 0 ? JSON.stringify(bodyObj) : void 0));
			default: throw apiError(endpoint);
		}
		case "exec/run": return JSON.parse((await _standaloneDebugger).exec_run(bodyObj !== void 0 ? JSON.stringify(bodyObj) : void 0));
		case "exec/resumeFromIter": return JSON.parse((await _standaloneDebugger).exec_resumeFromIter(bodyObj !== void 0 ? JSON.stringify(bodyObj) : void 0));
		case "exec/backToProvenance": return JSON.parse((await _standaloneDebugger).exec_backToProvenance(bodyObj !== void 0 ? JSON.stringify(bodyObj) : void 0));
		case "exec/specStep": return JSON.parse((await _standaloneDebugger).exec_step(coerceBoolean(bodyObj)));
		case "exec/specStepOver": return JSON.parse((await _standaloneDebugger).exec_stepOver(coerceBoolean(bodyObj)));
		case "exec/specStepOut": return JSON.parse((await _standaloneDebugger).exec_stepOut(coerceBoolean(bodyObj)));
		case "exec/specContinue": return JSON.parse((await _standaloneDebugger).exec_continue());
		case "exec/specRewind": return JSON.parse((await _standaloneDebugger).exec_rewind());
		case "exec/specStepBack": return JSON.parse((await _standaloneDebugger).exec_stepBack(coerceBoolean(bodyObj)));
		case "exec/specStepBackOut": return JSON.parse((await _standaloneDebugger).exec_stepBackOut(coerceBoolean(bodyObj)));
		case "exec/specStepBackOver": return JSON.parse((await _standaloneDebugger).exec_stepBackOver(coerceBoolean(bodyObj)));
		case "exec/esAstStep": return JSON.parse((await _standaloneDebugger).exec_esAstStep(coerceBoolean(bodyObj)));
		case "exec/esStatementStep": return JSON.parse((await _standaloneDebugger).exec_esStatementStep(coerceBoolean(bodyObj)));
		case "exec/esStepOver": return JSON.parse((await _standaloneDebugger).exec_esStepOver(coerceBoolean(bodyObj)));
		case "exec/esStepOut": return JSON.parse((await _standaloneDebugger).exec_esStepOut(coerceBoolean(bodyObj)));
		case "exec/irStep": return JSON.parse((await _standaloneDebugger).exec_irStep(coerceBoolean(bodyObj)));
		case "exec/irStepOver": return JSON.parse((await _standaloneDebugger).exec_irStepOver(coerceBoolean(bodyObj)));
		case "exec/irStepOut": return JSON.parse((await _standaloneDebugger).exec_irStepOut(coerceBoolean(bodyObj)));
		case "exec/stepCntPlus": return JSON.parse((await _standaloneDebugger).exec_stepCntPlus(coerceBoolean(bodyObj)));
		case "exec/stepCntMinus": return JSON.parse((await _standaloneDebugger).exec_stepCntMinus(coerceBoolean(bodyObj)));
		case "exec/instCntPlus": return JSON.parse((await _standaloneDebugger).exec_instCntPlus(coerceBoolean(bodyObj)));
		case "exec/instCntMinus": return JSON.parse((await _standaloneDebugger).exec_instCntMinus(coerceBoolean(bodyObj)));
		default: throw apiError(endpoint);
	}
};
self.onmessage = async (e) => {
	const { id, type, endpoint, data } = e.data;
	try {
		let result;
		switch (type) {
			case "META":
				input = data;
				await import("./main-Da_zz6t-.js").then(async (m) => resolve(await m.StandaloneDebugger.buildFrom(input, (rate) => {
					self.postMessage({
						id: void 0,
						type: "RATE",
						data: rate
					});
				})));
				await _standaloneDebugger;
				break;
			case "GET":
				result = await doGetRequest(endpoint, data);
				break;
			case "POST":
			case "PUT":
			case "DELETE":
				result = await doWriteRequest(type, endpoint, data);
				break;
			default: throw new Error(`Unsupported request type: ${type}`);
		}
		self.postMessage({
			id,
			success: true,
			data: result
		});
	} catch (error) {
		console.error("error", error);
		self.postMessage({
			id,
			success: false,
			error: error.message
		});
	}
};
/** auxiliaries */
function coerceBoolean(bodyObj) {
	if (typeof bodyObj === "boolean") return bodyObj;
	console.error("Invalid boolean value:", bodyObj);
	return false;
}
function apiError(s) {
	return /* @__PURE__ */ new Error(`Unknown API endpoint ${s}`);
}
//#endregion

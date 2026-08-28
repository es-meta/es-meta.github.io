//#region src/api/http.worker.ts
let API_HOST = "http://localhost:8080";
const mkJSONHeader = () => {
	const headers = {};
	headers["Content-Type"] = "application/json";
	headers["Accept"] = "application/json";
	return headers;
};
const trim_slash = (input) => {
	return input.replace(/\/+$/, "").replace(/^\/+/, "");
};
const mkURL = (host, endpoint, queryObj = {}) => {
	let url = `${trim_slash(host)}/${trim_slash(endpoint)}`;
	const listParams = [];
	for (const key in queryObj) {
		const entry = queryObj[key];
		if (typeof entry === "string" || typeof entry === "number" || typeof entry === "boolean") {
			const param = `${encodeURIComponent(key)}=${encodeURIComponent(entry.toString())}`;
			listParams.push(param);
		} else if (entry !== void 0 || entry !== null) throw new Error(`Not supported entry type: ${typeof entry}(${entry})`);
	}
	if (listParams.length > 0) {
		const querystring = listParams.join("&");
		url += `?${querystring}`;
	}
	return url;
};
const doGetRequest = async (host, endpoint, queryObj) => {
	const url = mkURL(host, endpoint, queryObj);
	const response = await fetch(url, { method: "GET" });
	if (!response.ok) throw new Error(`GET request to ${url} failed with ${response.status}`);
	return await response.json();
};
const doWriteRequest = async (host, method, endpoint, bodyObj) => {
	const url = mkURL(host, endpoint);
	const response = await fetch(url, {
		method,
		headers: { ...bodyObj ? mkJSONHeader() : void 0 },
		body: bodyObj !== void 0 ? JSON.stringify(bodyObj) : void 0
	});
	if (!response.ok) throw new Error(`${method} request to ${url} failed with ${response.status}`);
	return await response.json();
};
self.onmessage = async (e) => {
	const { id, type, endpoint, data } = e.data;
	try {
		let result;
		switch (type) {
			case "META":
				new URL(data);
				API_HOST = data;
				break;
			case "GET":
				result = await doGetRequest(API_HOST, endpoint, data);
				break;
			case "POST":
				result = await doWriteRequest(API_HOST, "POST", endpoint, data);
				break;
			case "PUT":
				result = await doWriteRequest(API_HOST, "PUT", endpoint, data);
				break;
			case "DELETE":
				result = await doWriteRequest(API_HOST, "DELETE", endpoint, data);
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
//#endregion

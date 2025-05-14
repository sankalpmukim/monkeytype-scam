const acc = () => {
	let coll = ``;
	const words = Array.from(document.querySelectorAll(".word, .word.active"));
	if (words.length === 0) {
		throw new Error("page maybe changed");
	}
	const index = words.findIndex(v => Array.from(v.classList).includes("active"))
	words.slice(index).forEach((word, i) => {
		const letters = Array.from(word
			.children)
			.map(child => child.innerText)
			.join("");
		coll += `${letters} `
	})
	return coll;
};

const send = async () => {
	const data = acc();
	const url = `http://192.168.43.38/text`;
	const response = await fetch(url, {
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			text: data,
		}),
		method: "POST",
		mode: "cors"
	});
	console.log(response.ok);
};

let enabled = false;

const sendAll = async () => {
	try {
		while (true) {
			if (enabled) {

				await send();
				console.count();
			} else {
				await Promise.resolve();
			}
		}
	} catch {
		console.countReset();
		console.log("It ended")
	}
};

const stop = () => {
	enabled = false;
	console.log("stopped");
};

const start = () => {
	enabled = true;
	sendAll();
	console.log("start");
};

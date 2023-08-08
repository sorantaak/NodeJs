// (function (exports, require, module, __filename, __dirname) {
const EventEmitter = require("node:events");
class Logger extends EventEmitter {
	log(message) {
		console.log(message);
		this.emit("messageLogged", { id: 1, url: "http://" });
	}
}
// module.exports.log = log;
module.exports = Logger; // in this line export directly log function
// module.exports.endPoinUrl = url;
// });

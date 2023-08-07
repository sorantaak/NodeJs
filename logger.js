// (function (exports, require, module, __filename, __dirname) {
    console.log(__filename);
    console.log(__dirname);
	var url = "http://google.com";
	function log(message) {
		console.log(message);
	}
	// module.exports.log = log;
	module.exports = log; // in this line export directly log function
	// module.exports.endPoinUrl = url;
// });

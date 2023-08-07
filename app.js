const fs = require("node:fs");

// const files = fs.readdirSync("./aaaaa");
// console.log(files);

fs.readdir(".", function (err, files) {
	if (err) console.log("Error: ", err);
	if (files) console.log("Files: ", files);
});

const os = require("node:os");
var totalMemory = os.totalmem;
var freeMemory = os.freemem;
console.log(`Total Memory: ${totalMemory} - Free Memory: ${freeMemory}`);
// console.log("Free Memory: " + os.freemem);

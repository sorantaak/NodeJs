// const EventEmitter = require("node:events");
// const emitter = new EventEmitter();

const Logger = require("./logger");
const logger = new Logger();

// Register a Listener
logger.on("messageLogged", (args) => {
	console.log("Listener Called", args);
});
logger.log("message");

const EventEmitter = require("node:events");
const emitter = new EventEmitter();

// Register a Listener
emitter.on("messageLogged", () => {
	console.log("Listener Called");
});

// Raise an Event
emitter.emit("messageLogged");

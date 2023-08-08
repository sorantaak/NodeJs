const EventEmitter = require("node:events");
const emitter = new EventEmitter();

// Register a Listener
emitter.on("messageLogged", (args) => {
	console.log("Listener Called", args);
});

// Raise an Event
emitter.emit("messageLogged", { id: 1, url: "http://" });
//Raise : Logging (data:message)

"use strict";
const fs = require("fs");
const singleton = Symbol();
const singletonEnforcer = Symbol();
const fileName = 'app.log';

var fileLoggerInstance = {
    log: function (msg) {
        var newMsg = "";
        if (msg instanceof  Error) {
            newMsg = msg.stack;
        }
        else if (typeof msg === 'object') {
            newMsg = JSON.stringify(msg);
        } else {
            newMsg = msg;
        }
        fs.appendFile(fileName, newMsg, (err) => {
            if (err) throw err;
        });
    }
};
class FileLogger {
    constructor(enforcer) {
        if (enforcer != singletonEnforcer) throw "Cannot construct FileLogger";
    }

    static get instance() {
        if (!this[singleton]) {
            this[singleton] = fileLoggerInstance;
        }
        return this[singleton];
    }
}
module.exports = FileLogger;
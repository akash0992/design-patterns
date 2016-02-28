"use strict";
let singleton = Symbol();
let singletonEnforcer = Symbol();
var loggers = [];
class Logger {
    constructor(enforcer) {
        throw "Cannot construct ConsoleLogger";
    }

    static getLogger(index) {
        var logger = loggers[index];
        if ("undefined" === typeof logger)
            logger = loggers[0];
        return logger
    }

    static registerLogger(instance) {
        return loggers.push(instance);
    }
}
Logger.registerLogger(require("./ConsoleLogger").instance);
module.exports = Logger;
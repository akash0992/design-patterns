"use strict";
const singleton = Symbol();
const singletonEnforcer = Symbol();
var consoleInstance = {
    log: function () {
        console.log.apply(this, arguments);
    }
};
class ConsoleLogger {
    constructor(enforcer) {
        if (enforcer != singletonEnforcer) throw "Cannot construct ConsoleLogger";
    }

    static get instance() {
        if (!this[singleton]) {
            this[singleton] = consoleInstance;
        }
        return this[singleton];
    }
}

module.exports = ConsoleLogger;
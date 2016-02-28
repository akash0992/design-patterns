"use strict";
//import ConsoleLogger from "logger/ConsoleLogger"
var Logger = require("./logger");
var consoleLogger = Logger.getLogger(0);
Logger.registerLogger(require('./logger/FileLogger').instance);
consoleLogger.log("help", "Hu hahahaha");
var fileLogger = Logger.getLogger(1);

fileLogger.log(new Error("Huh!!"));
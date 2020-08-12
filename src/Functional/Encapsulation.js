'use strict';

/**
 * Because javascript has higher order functions
 * we can write more declarative code
 * and write reusable code similar to OOP.
 *

/**
 * Set standard format for 
 * generic message
 */
function format(msg) {
    return Date.now() + "::" + msg;
}

/**
 * Log message to console.
 */
function consoleWriter(msg) {
    console.log(msg);
}

/**
 * Log message to a log file.
 */
function fileWriter(msg) {
    let logFile = "logfile.log";
    writeToFileSync(logFile, msg);
}

/**
 * Dynamically create a function
 * with custom behavior based on
 * function arguments passed.
 */
function logger(writer, format) {
    return (msg) => {
        writer(format(msg));
    }
}

/**
 * For other languages that do not support returning
 * functions, declare separate logger functions.
 */
function consoleLoggerFunc(msg) {
    consoleWriter(format(msg));
}

function fileLoggerFunc(msg) {
    fileWriter(format(msg));
}

/*
Make use of the simple functions above by 
combining them together.
*/
let consoleLogger = logger(consoleWriter, format);
let fileLogger = logger(fileWriter, format);
consoleLogger('Foo');
consoleLoggerFunc('Foo');

'use strict';

/**
 * Because javascript has higher order functions
 * we can write more declarative code
 * and write reusable code similar to OOP.
 *

/**
 * Set standard format for 
 * generic message.
 *
 * This will be the function we want
 * to encapsulate and reuse in other
 * functions
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
 * Dynamically create a logger function
 * based on the writer and formatter
 * functions provided.
 */
function logger(writer, formatter) {
    return (msg) => {
        writer(formatter(msg));
    }
}

/*
Make use of the simple functions above by 
combining them together.
*/
let consoleLogger = logger(consoleWriter, format);
let fileLogger = logger(fileWriter, format);

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

consoleLogger('Foo');
consoleLoggerFunc('Foo');

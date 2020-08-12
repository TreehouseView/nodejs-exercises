'use strict';

/**
 * Currying is the act of turning
 * a multi-parameter function into a 
 * function that receives less and has
 * the extra parameters fixed.
 */

console.log('Start');

/*
 * Simple example.
 *
 * Here we have a function add10() that exposes
 * one argument and uses adder() internally to perform the
 * sum operation.
 */
let adder = (a,b) => {return a + b;}
let add10 = (x) => {return adder(x, 10);}
console.log(adder(1, 10));
console.log(add10(1));

/*
 * Another example.
 *
 * Instead of calling log() and passing three arguments
 * every time, we create dedicated log functions
 * that predefine the "msgPrefix" and "output"
 * arguments.
 */
function log(msg, msgPrefix, output) {
    output(' ' + msgPrefix + ' ' +  msg);
}

function consoleOutput(msg) {
    console.log(msg);
}

function fileOutput(msg) {
    console.log(msg);
}

let consoleLog = (msg) => {log(msg, '>>', consoleOutput);};
let fileLog = (msg) => {log(msg, '>>', fileOutput);};
consoleLog('Hello');

console.log('End');

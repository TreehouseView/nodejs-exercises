'use strict';

/**
 * Exercise on variable scope 
 * in class functions
 */
class Pot {
    constructor() {
    }

    main(arg_a, a) {
        /*
         * This assignment will change the global y
         */
        y += 6;

        /*
         * This assignment will create a local copy
         */
        let z = 555;

        /*
         * This assignment will create a local copy
         * even thought the argument was passed.
         */
        a += 1;

        /*
         * This assignment will create a local copy
         * even thought the source variable was passed
         */
        arg_a += 1;

        /*
         * Return a closure
         */
        return (new_a = undefined, new_z = undefined, new_y = undefined) => {
            if (new_a) {
                a = new_a;
            }
            if (new_z) {
                z = new_z;
            }
            if (new_y) {
                y = new_y;
            }
            classLog();
        }

        /*
         * Closure not accessible from outside.
         * Called from the closure that is returned
         * by main()
         *
         */
        function classLog() {
            console.log('x' ,x);
            console.log('y' ,y);
            console.log('z' ,z);
            console.log('a' ,a);
            console.log('arg_a' ,arg_a);
            console.log('----');
        }
    }
}

/**
 * Log our global variables
 */
function log() {
    console.log('x' ,x);
    console.log('y' ,y);
    console.log('z' ,z);
    console.log('a' ,a);
    console.log('----');
}

const x = 1;
let y = 2;
var z = 3
var a = 4;

log();
const myObject = new Pot();
const innerLog = myObject.main(a, a);
log();
const callInnerLog = (logFunc) => {
    logFunc('abc', '123', 'foo');
}

callInnerLog(innerLog);
innerLog();
log();

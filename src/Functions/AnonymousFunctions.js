'use strict';

/**
 * Assigning a function to 
 * a variable
 */
var myFunction = (message) => {
    console.log(message);
}
myFunction('Hello all!');



/*
 * Another way to define and call
 * functions
 */
((message) => console.log(message))('Hello all!');

/*
 * Yet another
 */
console.log(((message) => message 
    + ' bar')('foo'));

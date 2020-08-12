'use strict';

/**
 * Function composition is an act or mechanism
 * to combine simple functions to build more
 * complicated ones. Like the usual composition of 
 * functions in mathematics, the result of each 
 * function is passed as the argumentn of the next
 * and the result of the last one is the result of the
 * whole.
 */

console.log('Start');

/*
 * We start with some distinct functions
 * and we'll compose them in different ways
 */


/**
 * @return string
 */
function lowercase(str) {
    return str.toLowerCase();
}

/**
 * @return function
 */
function findMatchesOf(word) {
    return function(str) {
        let exp = new RegExp(word, 'g');
        let matches = str.match(exp);
        if (matches == null) return "";
        if (matches.length == 0) return ""; 
        return matches.join(", ");
    }
}

/**
 * @return function
 */
function replace(oldStr, newStr) {
    return function(str) {
        let exp = new RegExp(oldStr, 'g');
        return str.replace(exp, newStr);
    }
}

/**
 * @return int
 */
function countWords(str) {
    if (!str) return 0;
    return str.split(" ").length;
}

/**
 * @return function
 */
const compose = (...fs) => {
    return (x) => {
        return fs.reduce((acc, f) => {
            return f(acc);
        }, x);
    }
}

let myStr = 'Hello, world!';
console.log(compose(lowercase, replace('hello', 'yo'))(myStr));
console.log(compose(lowercase, replace('world', 'My name is Jay'))(myStr));
console.log(compose(lowercase, findMatchesOf('world'))(myStr));

console.log('End');

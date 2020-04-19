'use strict';

/*
 * Go five steps to the east
 */
class LoopExercise {
    /**
     * Initialize object
     */
    constructor() {
    }

    /**
     * loop through an array of numbers
     */
    loop(myList) {
        console.log('Looping');
        let mySteps = myList;
        let listLength = mySteps.length;
        for (let step = 0; step < listLength; step++) {
            console.log(mySteps[step]);
        }
    }

    /**
     * Reverse loop through a list
     */
    reverseLoop(myList) {
        console.log('Looping');
        let mySteps = myList;
        let listLength = mySteps.length;
        for (let step = listLength - 1; step >= 0; step--) {
            console.log(mySteps[step]);
        }
    }

    for_in(fruit) {
        console.log('For...In');
        for (let x in fruit) {
            console.log(x + ' = ' + fruit[x]);
        }
    }
}


const myObject = new LoopExercise();

/*
 * Simple loop on an array
 */
myObject.loop([1,2,3,4,5]);

/*
 * Can we loop through a string?
 * Apparently we can.
 */
myObject.loop('The quick brown fox');

/*
 * Let's do a reverse loop
 */
myObject.reverseLoop('The quick brown fox');

/*
 * Loop through a user-defined object
 */
myObject.for_in({
    name: 'Mango',
    sugar: '500mg',
    zone_requirement: '10'
});

/*
 * Loop through an array 
 * using for...in.
 * This method, however is not recommended
 */
myObject.for_in([1,2,3,4,5]);

/*
 * Loop through a string
 */
myObject.for_in('The quick brown fox');

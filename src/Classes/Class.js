
'use strict';

/**
 * My fancy nodejs class
 */
const MyLibrary = class {
 
 /**
  * Initialize object
  */
 constructor() {

 }

 /**
  * Entrypoint to object
  */
 main(message) {
   this.greet(message);
 }

 /**
  * Greet everyone
  */
 greet(message) {
   console.log(message);
 }
}


const myObject = new MyLibrary();
myObject.main('Hello');

'use strict';


console.log('\n--myFunc--');

const showPrototypeChain = (obj, title = 'Object') => {
    if (obj !== null) {
        console.log(title + ' = ', obj);
        showPrototypeChain(obj.__proto__, 'Prototype');
    }
    else {
        console.log(title + ' = ', obj);
    }
}

// Start with a simple function
// intended to be used as a constructor 
const myFunc = function () {

    // this property only appears
    // on the newly created object
    // and not on the myFunc prototype
    this.a1 = 'value a1';
}

// Set the function prototype's property
Object.getPrototypeOf(myFunc).a = 'value a';
Object.getPrototypeOf(myFunc).b = 'value b';

// This defines the prototype of objects created 
// by myFunc when used as a constructor
myFunc.prototype.c = 'value c';

// This is another way to set a property on 
// the object's prototype
myFunc.__proto__.d = 'value d';


// Trigger the function of myFunc()
// will produce an error
//console.log(myFunc());

// Retrieve the property we defined in myFunc()
console.log('myFunc.a = ', myFunc.a);
console.log('myFunc.a1 = ', myFunc.a1);
console.log('myFunc.b = ', myFunc.b);
console.log('myFunc.c = ', myFunc.c);
console.log('myFunc.d = ', myFunc.d);
console.log('myFunc instance prototype = ', myFunc.prototype);
showPrototypeChain(myFunc);


console.log('\n--myFuncObject--');
// Here we create an object using myFunc() as a constructor
// so we obtain prototype with property 'c'
const myFuncObject = new myFunc();


// Set additional properties to myFuncObject
myFuncObject.foo = 'bar';

// Use 'function' if using 'this'
myFuncObject.getFoo = function() {
    return this.foo;
}

// Otherwise this will not work
myFuncObject.getFoo2 = () => {
    return this.foo;
}

// New object does not inherit own prototype property 'a' of myFunc
console.log('myFuncObject.a = ', myFuncObject.a);
console.log('myFuncObject.a1 = ', myFuncObject.a1);
console.log('myFuncObject.b = ', myFuncObject.b);
// But inherits prototype property 'c'
console.log('myFuncObject.c = ', myFuncObject.c);
console.log('myFuncObject.d = ', myFuncObject.d);
console.log('myFuncObject.getFoo() = ', myFuncObject.getFoo());
console.log('myFuncObject.getFoo2() = ', myFuncObject.getFoo2());
showPrototypeChain(myFuncObject);

console.log('\n--myFuncObject2--');
const myFuncObject2 = Object.create(myFuncObject);
myFuncObject2.brand = 'Samick';
myFuncObject2.instrument = 'guitar';
myFuncObject2.type = 'acoustic';

console.log('myFuncObject2.a = ', myFuncObject2.a);
console.log('myFuncObject2.a1 = ', myFuncObject2.a1);
console.log('myFuncObject2.b = ', myFuncObject2.b);
console.log('myFuncObject2.c = ', myFuncObject2.c);
console.log('myFuncObject2.d = ', myFuncObject2.d);
console.log('myFuncObject2.getFoo() = ', myFuncObject2.getFoo());
console.log('myFuncObject2.getFoo2() = ', myFuncObject2.getFoo2());
showPrototypeChain(myFuncObject2);



// Object reference
// Changing myFuncObject.foo
// will also change myFuncObject2's prototype
// and myFuncObject2's eventual value of foo
console.log('\n--Object Reference--');
myFuncObject.foo = 'bar2';
console.log('myFuncObject.getFoo() = ', myFuncObject.getFoo());
console.log('myFuncObject2.getFoo() = ', myFuncObject2.getFoo());
console.log('myFuncObject = ', myFuncObject);
console.log('myFuncObject2 = ', myFuncObject2);

// In effect, the prototype of myFuncObject2 is equal to and is
// the same object as myFuncObject
console.log('(myFuncObject == myFuncObject2.__proto__) = ', Object.is(myFuncObject, Object.getPrototypeOf(myFuncObject2)));

// If we change myFuncObject2.foo, it should
// only impact myFuncObject2, not myFuncObject
myFuncObject2.foo = 'bar3';
console.log('myFuncObject.getFoo() = ', myFuncObject.getFoo());
console.log('myFuncObject2.getFoo() = ', myFuncObject2.getFoo());
console.log('myFuncObject = ', myFuncObject);
console.log('myFuncObject2 = ', myFuncObject2);


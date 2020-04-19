'use strict';

const obj = {
    foo() {
        return 'bar';
    },

    sum(a, b) {
        return this.sumNumbers(a, b);
    },

    sumNumbers(a, b) {
        return a + b;
    }
}


console.log(obj.foo());
console.log(obj.sum(100,1000));

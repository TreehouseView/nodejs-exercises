/**
 * Hoisting in javascript loads function and variable declaration in
 * memory during compile time so that these functions and variables are
 * accessible.
 */
class Hoisting {

    /**
     * Entrypoint to object
     */
    main() {

        /*
        * This results in undefined because the variable
        * declaration is hoisted but not the value set to
        * the variable.
        */
        console.log('myVariable: ', myVariable);

        /*
        * These will fail
        */
        //console.log('foo: ', foo);
        //console.log('bar: ', bar);

        /*
        * Declare and set variable
        */
        var myVariable = 1;

        /*
        * These declarations however are not hoisted.
        */
        const foo = 'foo-val';
        let bar;

        /*
        * Since myVariable is already set, 
        * output will show the value.
        */
        console.log('myVariable: ', myVariable);
        console.log('foo: ', foo);
        console.log('bar: ', bar);
    }
}

const myObject = new Hoisting();
myObject.main();

//'use strict';


class Mug {

    constructor() {

    }

    main(...myArgs) {
        console.log('Calling main()');
        const result = this.getLargest([
            {
                name: 'one',
                value: 1
            },{
                name: 'two',
                value: 2
            },{
                name: 'three',
                value: 3
            },{
                name: 'one hundred',
                value: 100
            },{
                name: 'negative one hundred',
                value: -100
            }
        ]);
        console.log(result);
    }

    getLargest(toSort) {
        return toSort.reduce((previous, current) => {
            if (current.value > previous.value) {
                return current;
            }
            return previous;
        });
    }

}



const myObject = new Mug();
myObject.main(1,2,3);

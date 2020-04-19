'use strict';

function fun(a,b) {
    'use strict';
    let v = 122;

    /*
     * In strict mode, this line is supposed to
     * trigger an error. Instead I'm seeing
     * this line getting compiled successfully.
     */
    return arguments.caller;
}


fun(1,2);

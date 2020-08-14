'use strict';

/**
 * Convert string binary to hex equivalent
 */
function BinaryToHex(binaryInput) {

    let hexResult = '';
    let accumulator = 0;
    let counter = 0;
    let multiplier = 1;
    let result = '';
    let invalid = false;

    // Loop through input in reverse
    for (let x = binaryInput.length-1; x>=0;x--) {

        // Validation
        if (binaryInput[x] !== '1'
          && binaryInput[x] !== '0') {
            hexResult = '';
            invalid = true;
            break;
        }
        
        // Compute base number
        // and accumulate
        accumulator += binaryInput[x] * multiplier;

        // Iterate counters
        multiplier = multiplier * 2;
        counter++;
    
        // Evaluate if accumulated
        // 4 values then:
        //  1. Get hex value
        //  2. reset counter
        if (counter % 4 == 0) {
            hexResult += getHexValue(accumulator);
            multiplier = 1;
            accumulator = 0;
        }
    }
   
    // If there is trailing
    // get hex value
    if (accumulator > 0
     || (!invalid
     && hexResult.length == 0
         && binaryInput.length > 0)) {
        hexResult += getHexValue(accumulator);
    }

    // Unravel stack
    for (let x=hexResult.length-1;x>=0;x--) {
        result += hexResult[x];
    }
    
    return result;
}

function getHexValue(decimal) {
    if (decimal >= 0
      && decimal <= 9) {
        return decimal;
    }
    switch (decimal) {
        case 10:
            return 'A';
        case 11:
            return 'B';
        case 12:
            return 'C';
        case 13:
            return 'D';
        case 14:
            return 'E';
        case 15:
            return 'F';
    }
    return null;
}


module.exports.BinaryToHex = BinaryToHex;

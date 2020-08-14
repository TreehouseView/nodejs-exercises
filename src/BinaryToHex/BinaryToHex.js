'use strict';

/**
 * Convert string binary to hex equivalent
 */
function BinaryToHex(binaryInput) {
    var hexResult = '';
    let iterator = 0;
    let multiplier = 1;
    let accumulator = 0;

    if (binaryInput == '0') {
        hexResult = '0';
    }

    for (let x=binaryInput.length-1;x>=0;x--) {

        // Validate
        if (binaryInput[x] != '1'
          && binaryInput[x] != '0') {
            hexResult = '';
            accumulator = 0;
            break;
        }

        // Compute
        accumulator += binaryInput[x] * multiplier;

        // Iterate
        iterator++;
        multiplier = multiplier * 2;
        
        // Evaluate
        if (iterator%4 == 0) {
            hexResult += getHexValue(accumulator);
            multiplier = 1;
            accumulator = 0;
        }
    }

    if (accumulator > 0) {
        hexResult += getHexValue(accumulator);
    }

    //unravel stack
    let result = '';
    for (let x=hexResult.length-1;x>=0;x--) {
        result += hexResult[x];
    }
    return result;
}

function getHexValue(decimal) {
    if (decimal >= 0 && decimal <= 9) {
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

}

module.exports.BinaryToHex = BinaryToHex;

/*
console.log(BinaryToHex('1010101010101010')); // 0xAAAA
console.log('====');
console.log(BinaryToHex('10101010101010')); // 0x2AAA
console.log('====');
console.log(BinaryToHex('000111010')); // 0x3A
console.log('====');
console.log(BinaryToHex('0')); // 0x0
console.log('====');
console.log(BinaryToHex('1')); // 0x1
console.log('====');
console.log(BinaryToHex('1111')); // 0xF
console.log('====');
console.log(BinaryToHex('111111111111')); // 0xFFF
console.log('====');
console.log(BinaryToHex('1')); // 0x1
console.log('====');
console.log(BinaryToHex('10')); // 0x2
console.log('====');
console.log(BinaryToHex('10000')); // 0x10
console.log('====');
console.log(BinaryToHex('100000')); // 0x20
console.log('====');
*/

'use strict';

module.exports.HexToBinary = (hexValue) => {
    let binaryResult = '';
    let decimalValue = null;
    // Loop through each character
    // {
    for (let x = 0;x < hexValue.length; x++) {
    
        // Validate character
        // If not proper hex character
        // break;
        if (['0','1','2','3','4','5','6','7','8'
            ,'9','A','B','C','D','E','F'].findIndex((value) => {
                return hexValue[x] == value;
            }) < 0) {
            binaryResult = '';
            break;
        }
    
        // Get binary equivalent of hex character
        // and accumulate
        decimalValue = hexValue[x];
        switch (decimalValue) {
            case 'A':
                decimalValue = 10;
                break
            case 'B':
                decimalValue = 11;
                break
            case 'C':
                decimalValue = 12;
                break
            case 'D':
                decimalValue = 13;
                break
            case 'E':
                decimalValue = 14;
                break
            case 'F':
                decimalValue = 15;
                break
        }
        binaryResult += getBinaryFromDecimal(decimalValue);
    }
    return binaryResult;
}


function getBinaryFromDecimal(decimal) {
    let result = '';
    if (decimal <= 0) {
        return '0';
    }

    // Get binary headers up to decimal
    // example:
    // Input: 15
    // Binary Headers: [1,2,4,8]
    let binaryHeaders = [];
    let currentHeader = 1;
    while (currentHeader <= decimal) {
        binaryHeaders.push(currentHeader);
        currentHeader = currentHeader * 2;
    }
    
    // Loop through binary headers starting from 
    // most significant and turn on (set "1")
    // if the accumulated value is "=" or "<"
    // than provided decimal else turn off (set "0")
    let accumulator = 0;
    let x = binaryHeaders.length - 1;
    let temp = 0;
    while (x >= 0) {
        temp = accumulator + binaryHeaders[x];
        if (temp <= decimal) {
            accumulator += binaryHeaders[x];
            result += '1';
        }
        else {
            result += '0';
        }

        // Iterator
        x--;
    }

    // Add leading zeroes
    let subjectLength = result.length;
    for (let x = 0;x<(4-subjectLength);x++) {
        result = '0' + result;
    }
    
    // Return accumulated binary string
    return result;
}

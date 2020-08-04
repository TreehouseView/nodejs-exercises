

/**
 * Given nested list of integers, return sum
 * of all integers in the list weighted by 
 * their depth.
 */
function sumNestedIntegers(myList, depth = 1) {
    let result = 0;
    for(let x = 0;x < myList.length; x++) {
        if (Array.isArray(myList[x])) {
            result += sumNestedIntegers(myList[x], depth + 1);
        }
        else {
            result += myList[x]  * depth;
        }
    }
    return result;
}


/**
 * Given nested list of integers, return sum
 * of all integers in the list weighted by 
 * their depth.
 */
function sumNestedIntegers2(data, depth = 1) {
    let result = 0;
    for(let x=0;x<data.length;x++) {
        if (Array.isArray(data[x])) {
            result += sumNestedIntegers2(data[x], depth + 1);
        } else if (Number.isInteger(data[x])) {
            result += data[x] * depth;
        }
    }
    return result;
}



const data = [
    [
        1
        ,1
    ]
    ,2
    ,[
        1
        ,[
            5
            ,[100]
        ]
        ,1
    ]
];
const result = sumNestedIntegers(data);
const result2 = sumNestedIntegers2(data);
console.log(result == result2, ': Answers are the same');
console.log(result == 425, ': Answer is correct');

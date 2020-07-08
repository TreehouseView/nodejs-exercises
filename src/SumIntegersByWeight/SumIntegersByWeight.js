

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



const result = sumNestedIntegers([
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
]);
console.log(result);

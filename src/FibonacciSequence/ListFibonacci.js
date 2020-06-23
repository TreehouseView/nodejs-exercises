
/**
 * Given a number, return the fibonacci
 * sequence up to number provided.
 *
 * Last sequence should be less than
 * number provided
 * 
 * @param {int} limit
 *
 */
function listFibonacci(limit) {
    let sequence = [];
    let current = 0;
    while (current <= limit) {
        sequence.push(current);
        if (current == 0) {
            current = 1;
        }
        else {
            current = sequence[sequence.length-2] + sequence[sequence.length-1];
        }
    }
    return sequence;
}


console.log(listFibonacci(1000));

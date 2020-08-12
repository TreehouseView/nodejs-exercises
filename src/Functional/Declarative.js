'use strict';
console.log('Start');

/**
 * Take a list of words
 * and reverse the letters
 */
let wordList = ['abc','def','ghi'];
let expected = ['cba','fed','ihg'];

/*
 * Imperative way
 */
let reversedList = [];
for (let x=0;x<wordList.length;x++) { //O(n)
    let word = wordList[x]; //O(1)
    let reversed = ''; //O(1)
    for (let y=word.length-1;y>=0;y--) { //O(y)
        reversed += word[y]; //O(1)
    }
    reversedList.push(reversed); //O(1)
}
console.log(reversedList);

/*
 * Declarative way
 */
reversedList = wordList.map((word) => {
    return word.split('').reduceRight((acc, letter) => {return acc + letter;}, '');
});
console.log(reversedList);


console.log('End');

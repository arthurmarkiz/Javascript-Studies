/* Write a function which accepts two arrays. The function should return true
if every value in the first array has its corresponding value squared in the
second array. The frequency of values must be the same.  */

const hasCorrespondingSquared = (array, arraySquared) => {
    if (array.length !== arraySquared.length) return false;

    let frequencyCounterArray = {};
    let frequencyCounterArraySquared = {};

    for (let val of array) {
        frequencyCounterArray[val] = (frequencyCounterArray[val] || 0) + 1;
    }
    for (let val of arraySquared) {
        frequencyCounterArraySquared[val] = (frequencyCounterArraySquared[val] || 0) + 1;
    }
    for (let key in frequencyCounterArray) {
        if (!(key ** 2 in frequencyCounterArraySquared)) return false;

        if (frequencyCounterArraySquared[key ** 2] !== frequencyCounterArray[key]) return false;
    }
    return true;
} 
console.log(hasCorrespondingSquared([9, 2, 3, 1], [1, 4, 81, 9]));

// ------------------------------------------------------------------
// Given two strings, write a function to determine if the second string is an Anagram.

const isAnagram = (firstString, secondString) => {
    if (firstString.length !== secondString.length) return false;

    const lowerFirstString = firstString.toLowerCase()
    const lowerSecondString = secondString.toLowerCase()

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of lowerFirstString) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of lowerSecondString) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) return false;

        if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
    }
    return true;
}
console.log(isAnagram('Hello', 'Olyel'));

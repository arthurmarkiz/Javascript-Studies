/* #1 
Using Frequency Counter write a function which accepts two positive integers,
find out if the two numbers have the same frequency of digits. */

const hasSameFrequency = (n1, n2) => {
    if (n1.length !== n2.length) return false;

    const number1 = n1.toString();
    const number2 = n2.toString();

    let frequency1 = {};
    let frequency2 = {};

    for (let val of number1) {
        frequency1[val] = (frequency1[val] || 0) + 1;
    }
    for (let val of number2) {
        frequency2[val] = (frequency2[val] || 0) + 1;
    }
    for (let key in frequency1) {
        if (!(key in frequency2)) return false;

        if (frequency1[key] !== frequency2[key]) return false;
    }
    return true;
};
// console.log(hasSameFrequency(123,321)); // true
// ------------------------------------------------------------------
/* #2 
Implement a function which accepts a variable number of arguments,
and checks whether there are any duplicates among the arguments
passed in. */

// Using Frequency Counter
const hasDuplicatesFQ = (...args) => {
    let collection = {}
  for(let val in args){
    collection[args[val]] = (collection[args[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}
// console.log(hasDuplicatesFQ('a', 'b', 'c', 'a')); // true

// Using Multiple Pointers
const hasDuplicatesMP = (...args) => {
    args.sort();

    let start = 0;
    let next = 1;

    while (next < args.length) {
        if (args[start] === args[next]) return true;
        start++;
        next++;
    }
    return false;
};
// console.log(hasDuplicatesMP('a', 'b', 'c')); // false
// console.log(hasDuplicatesMP(1, 2, 3, 1)); // true
// ------------------------------------------------------------------
/* #3 
Write a function which accepts a sorted array of integers
and a target average, determine if there is a pair of values
in the array where the average of the pair equals the target average.
There may be more than one pair that matches the average target.
*/

// Using Multiple Pointers
const averagePair = (array, target) => {
    if (array.length <= 0) return false;
    let start = 0;
    let end = array.length - 1;

    while (start < end) {
        let average = (array[start] + array[end]) / 2;
        if (average === target) return true;
        average > target ? end-- : start++;
    }
    return false;
};
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8)); // true
// ------------------------------------------------------------------
/* #4 
Write a function which takes two strings and checks whether the
characters in the first string form a subsequence of the characters
in the second string. In other words, check whether the characters
in the first string appear somewhere in the second string.
without their order changing.
*/

// Using Multiple Pointers
const hasSubsequence = (stringSubs, stringFull) => {
    let index = 0;
    let scout = 0;
    while (scout < stringFull.length) {
        if (stringFull[scout] === stringSubs[index]) {
            index++;
        } else if (index === stringSubs.length) {
            return true;
        } else {
            scout++;
        }
    }
    return false;
};
// console.log(hasSubsequence('aeo', 'hello world')); // false
// ------------------------------------------------------------------
/* #5
Given an array of integers and a number, write a function which
finds the maximum sum of a subarray with the length of the number
passed to the function.
*/

// Using Siliding Window
const maxSubarraySum = (array, number) => {
    if (array.length < number) return null;

    let total = 0;
    for (let i = 0; i < number; i++) {
        total += array[i];
    }
    let currentTotal = total;
    for (let i = number; i < array.length; i++) {
        currentTotal += array[i] - array[i - number];
        total = Math.max(total, currentTotal); 
    }
    return total;
};
// console.log(maxSubarraySum([100,200,300,400], 2)); // 700

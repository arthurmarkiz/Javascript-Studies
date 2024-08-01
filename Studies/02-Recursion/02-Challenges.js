/* #1
Write a function called power which accepts a base 
and an exponent. The function should return the power
of the base to the exponent. Should mimic Math.pow();
*/
const power = (base, exponent) => {
    if (exponent === 0) return 1;
    if (exponent === 1) return base;
    return base * power(base, exponent - 1);
};
// console.log(power(2,2)); // 4
// ------------------------------------------------------------
/* #2
Write a function called productOfArray which takes in an array 
of numbers and returns the product of them all.
*/
const productOfArray = (array) => {
    if (array.length === 0) return 1;
    return array[0] * productOfArray(array.slice(1));
};
// console.log(productOfArray([1,2,3])); // 6
// ------------------------------------------------------------
/* #3
Write a function called recursiveRange which accepts a number 
and adds up all the numbers from 0 to the number passed to the function.
*/
const recursiveRange = (number) => {
    if (number === 1) return 1;
    return number + recursiveRange(number - 1);
};
// console.log(recursiveRange(6)); // 21
// ------------------------------------------------------------
/* #4
Write a recursive function called reverse which accepts a string 
and returns a new string in reverse.
*/
const reverse = (string) => {
    if (string.length === 0) return string;
    return reverse(string.slice(1)) + string[0];
};
// console.log(reverse('hello')); // olleh
// ------------------------------------------------------------
/* #5
Write a recursive function called isPalindrome which returns true 
if the string passed to it is a palindrome 
(reads the same forward and backward). 
Otherwise it returns false.
*/
const isPalindrome = (string) => {
    if (string.length === 1) return true;

    if (string.length === 2) return string[0] === string[1];

    if (string[0] === string.slice(-1)) 
        return isPalindrome(string.slice(1, -1));

    return false;
};
// console.log(isPalindrome('tacocat')); // true
// ------------------------------------------------------------
/* #6
Write a recursive function called someRecursive which accepts 
an array and a callback. The function returns true if a single 
value in the array returns true when passed to the callback. 
Otherwise it returns false.
*/
const someRecursive = (array, callback) => {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1), callback);
};
const isOdd = (val) => val % 2 !== 0;

// console.log(someRecursive([2, 4, 6, 8], isOdd)); // false
// ------------------------------------------------------------
/* #7
Write a recursive function called capitalizeFirst. 
Given an array of strings, capitalize the first letter 
of each string in the array.
*/
const capitalizeFirst = (array) => {
    if (array.length === 1)
        return [array[0][0].toUpperCase() + array[0].slice(1)];

    let result = capitalizeFirst(array.slice(0, -1));

    let string = array.slice(array.length - 1)[0][0].toUpperCase() 
    + array.slice(array.length - 1)[0].slice(1);
    
    result.push(string);
    return result;
};
// console.log(capitalizeFirst(['banana', 'table', 'door']));
// ------------------------------------------------------------
/* #8 
Write a recursive function called capitalizeWords. Given an array of words, 
return a new array containing each word capitalized.
*/
const capitalizeWords = (array) => {
    if (array.length === 1)
        return [array[0].toUpperCase()]

    let result = capitalizeWords(array.slice(0, -1));

    result.push(array.slice(array.length - 1)[0].toUpperCase());
    return result;
};
// console.log(capitalizeWords(['banana', 'table', 'door']));
// ------------------------------------------------------------

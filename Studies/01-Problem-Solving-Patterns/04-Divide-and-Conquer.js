/* This pattern involves dividing a data set into smaller chunks
and then repeting a process with a subset of data. 

This pattern can tremendously decrease time complexity. */

// --------------------------------------------------------------

/* Given a sorted array of integers, write a function
that accepts a value and returns the index where the
value passed to the function is located.
If the value is not found, return -1. 

e.g 
search([1,2,3,4,5,6], 4) return "3"
*/

// THAT'S BINARY SEARCH ALGORITHM !!!
const searchIndex = (array, number) => {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentIndex = array[middle];
        
        if (currentIndex < number) {
            min = middle + 1;
        } else if (currentIndex > number) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
};
console.log(searchIndex([1,2,3,4,5,6], 4));

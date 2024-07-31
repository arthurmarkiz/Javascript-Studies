/* Creating pointers or values that correspond to an index
or position and move towards the beginning, end or middle
based on a certain condition.

Very efficient for solving problems with minimal
space complexity as well. 
----------------------------------------------------------- */

/* Write a function which accepts a sorted array of integers.
The function should find the first pair where the sum is 0.
Return an array that includes both values that sum to zero
or undefined if a pair does not exist. */

const pairSumIsZero = (array) => {
    let leftPointer = 0;
    let rightPointer = array.length - 1;

    while (leftPointer < rightPointer) {
        let sum = array[leftPointer] + array[rightPointer];
        if (sum === 0) return [array[leftPointer], array[rightPointer]];
        if (sum > 0) rightPointer--;
        leftPointer++;
    };
};

console.log(pairSumIsZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));
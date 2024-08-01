/* This involves creating a WINDOW which can either be an array 
or number from one position to another.

Depending on a certain condition, the window either increases
or closes (and a new window is created) 

Very useful for keeping track of a subset of data in a array/string etc. */

// -----------------------------------------------------------------------

/* Write a function which accepts an array of integers and a number N.
The function should calculate the maximum sum of N consecutive
elements in the array. 

e.g 
array[1,2,5,2,8,1,5] number(2) 
return: "the max sum between 2 numbers is 10" */

// for now it seems a bit hard for me
const maxSumOfSubarray = (array, number) => {
    if (array.length < number) return null;

    let maxSum = 0;
    let tempSum = 0;

    for (let index = 0; index < number; index++) {
        maxSum += array[index];
    }

    tempSum = maxSum;

    // Here it looks like a window that slides through the array
    for (let index = number; index < array.length; index++) {
        // Remove the back one and add the front one
        tempSum = tempSum - array[index - number] + array[index];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
};

console.log(maxSumOfSubarray([1,2,5,2,8,1,5], 2));
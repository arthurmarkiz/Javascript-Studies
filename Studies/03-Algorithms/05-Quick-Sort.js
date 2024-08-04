/* PIVOT PSEUDOCODE: 

- It will help to accept three arguments: an array, a start index,
and an end index (these can default to 0 and the array length minus 1).
- Grab the pivot from the start, middle or the end of the array.
- Store the current pivot index in avariable (this will keep track of
where the pivot should end up).
- Loop through the array from the start until the end:
    - If the pivot is greater than the current element, increment the
    pivot index variable and then swap the current element with the
    element at the pivot index.
- Swap the starting element (the pivot) with the pivot index.
*/

const pivot = (arr, start = 0, end = arr.length - 1) => {
    const swap = (arr, x, y) => {
        [arr[x], arr[y]] = [arr[y], arr[x]];
    };
    
    let pivot = arr[end];
    let swapIndex = start;

    for (var i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
};

/* QUICK SORT PSEUDOCODE:

- Call the pivot helper on the array.
- When the pivot helper returns to you the updated pivot index,
recursively call the pivot helper on the subarray to the left
of that index, and the subarray to the right of that index.
- Your base case occurs when you consider a subarray with 
less than 2 elements.
*/
const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left <= right) { 
        let pivotIndex = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIndex - 1);
        //right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
};
console.log(quickSort([4, 8, 2, 10, 1, 5, 7, 6, 9, 3]));

/* ---------------------------------------------------------------------
The difference between Merge Sort and Quick Sort, is that merge sort 
divides into subarrays to reorganize. Quick sort, on the other hand, 
reorganizes the values ​​within the array itself, just storing its 
indexes in the correct places.
*/
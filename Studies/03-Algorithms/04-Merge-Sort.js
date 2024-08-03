/* MERGING ARRAYS 
- It's a combination of two things - marging and sorting!
- Exploits the fact that arrays of 0 or 1 element are always sorted.
- Works by decomposing an array into smaller arrays of 0 or 1 elements,
then building up a newly sorted array. 

MERGE PSEUDOCODE: 
- Create a empty array, take a look at the smallest values in each input array.
- While there are still values we haven't looked at...
    - If the value in the first array is smaller than the value in the second array,
    push the value in the first array into our result and move on to the next value
    in the first array.
    - If the value in the first array is larger than the value in the second array,
    push the value inthe second array into our results and move on to the next value
    in the second array. 
*/
const merge = (arr1, arr2) => {
    let results = [];
    let index1 = 0;
    let index2 = 0;

    while(index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] < arr2[index2]) {
            results.push(arr1[index1]);
            index1++;
        } else {
            results.push(arr2[index2]);
            index2++;
        }
    }
    // adding the remaining of the elements in the arrays
    while(index1 < arr1.length) {
        results.push(arr1[index1]);
        index1++;
    }
    while(index2 < arr2.length) {
        results.push(arr2[index2]);
        index2++;
    }
    return results;
};
/* ---------------------------------------------------------- 
MERGE SORT PSEUDOCODE:
- Break up the array into halves until you have arrays that
are empty or have one element.
- Once you have smaller sorted arrays, merge those arrays
with other sorted arrays until you are back at the full
length of the array.
- Once the array has been merged back together, return
the merged (and sorted!) array.
*/
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left ,right);
};
console.log(mergeSort([10, 24, 76, 73, 62, 1, 9]));
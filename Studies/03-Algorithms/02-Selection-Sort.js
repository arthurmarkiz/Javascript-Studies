/* Similar to bubble sort, but instead of first placing
large values, it places small values into sorted positions.

PSEUDOCODE:
- Store the first element as the smallest value you've seen so far.
- Compare this item to the next item in the array until you find
  a smaller number.
- If a smaller number is found, designate that smaller number to
  be the new "minimum" and continue until the end of the array.
- If the "minimum" is not the value (index) you initially began
  with, swap the two values.
- Repeat this with the next element until the array is sorted.
*/
// ------------------------------------------------------------------
const selectionSort = (arr) => {
    // First create a function for implement the swap
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) swap(arr, i, lowest);
    }
    return arr;
};
// console.log(selectionSort([45, 24, 82, 75, 14])); // -> [14, 24, 45, 75, 82]

/* Builds up the sort by gradually creating a larger left half
which is always sorted.

PSEUDOCODE:
- Start by picking the second element in the array.
- Now compare the second element with the one before
  it and swap if necessary.
- Continue to the next element and if it is in the
  incorrect order, iterate through the sorted portion
  (the left side) to place the element in the
  correct place.
- Repeat until the array is sorted.
*/
// ------------------------------------------------------------------
// That's a little hard to understand...
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];

        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
           arr[j+1] = arr[j];
        }
        
        arr[j+1] = currentVal;
    }
    return arr;
};
// console.log(insertionSort([45, 24, 82, 75, 14])); // -> [14, 24, 45, 75, 82]

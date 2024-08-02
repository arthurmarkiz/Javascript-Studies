/* A sorting algorithm where the largest values
bubble up to the top! 

PSEUDOCODE:
- Start looping from with a variable called i in the
  end of the array towards the beginning.
- Start an inner loop with a variable called j from
  the beginning until i - 1.
- if array[j] is greater than array[j+1],
  swap those two values!
*/
// ------------------------------------------------------------------
const optimazedBubbleSort = (array) => {
    // First create a function for implement the swap
    const swap = (array, index1, index2) => {
        [array[index1], array[index2]] = [array[index2], array[index1]];
    };

    let hasSwaps;
    for (let i = array.length; i > 0; i--) {
        hasSwaps = false;

        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j+1]) {
                swap(array, j, j+1);
                hasSwaps = true;
            }   
        }
        if (!hasSwaps) break;
    }
    return array;
};
// console.log(optimazedBubbleSort([45, 24, 82, 75, 14])); // -> [14, 24, 45, 75, 82]

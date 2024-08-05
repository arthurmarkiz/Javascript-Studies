/* ### RADIX SORT ###
- Is a special sorting algorithm that works
on lists of numbers.
- It never makes comparisons between elements!
- It exploits the fact that information about the size
of a number is encoded in the number of digits.
- More digits means a bigger number!

=======================================================

### RADIX SORT HELPERS ### 

# getDigit(num, place) - returns the digit in num at the
given place value...
e.g:
    getDigit(29452, 0); // 2
    getDigit(29452, 1); // 5
    getDigit(29452, 2); // 4
    ...
------------------------------
# digitCount(num) - returns the number of digits in num.
e.g:
    digitCount(1); // 1
    digitCount(25); // 2
    digitCount(314); // 3
------------------------------
# mostDigits(nums) - Given an array of numbers, returns
the number of digits in the largest number in the list.
e.g:
    mostDigits([1234, 56, 7]); // 4
    mostDigits([1, 90, 765]); // 3

=======================================================

### RADIX SORT PSEUDOCODE ###

- Define a function that accepts a list of numbers;
- Figure out how many digits the largest number has;
- Loop from k = 0 up to this largest number of digits;
- For each iteration of the loop:
    - Create buckets for each digit (0 to 9);
    - Place each number in the corresponding bucket
    based on its Kth digit;
- Replace our existing array with values in our buckets,
starting with 0 and going up to 9;
- Return the list at the end!
*/
const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (arr) => {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
};

const radixSort = (arr) => {
    let maxDigitCount = mostDigits(arr);

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k);
            digitBuckets[digit].push(arr[i]);
        }
        arr = [].concat(...digitBuckets);
    }
    return arr;
};
console.log(radixSort([52, 1853, 12, 74, 85, 24, 9, 2, 1, 143, 274, 3]));
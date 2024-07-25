// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size

const arrChunk = (arr, size) => {
  const chunked = [];

  for (let element of arr) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
};

console.log(arrChunk([1, 26, 3, 42], 2));

// Solution #2 using Slice

const arrChunk2 = (arr, size) => {
  const chunked = [];
  let index = 0;
  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size));
    index += size;
  }
  return chunked;
};

console.log(arrChunk2([1, 26, 3, 42], 2));

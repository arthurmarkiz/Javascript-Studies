// Make a frequency counter for the Max Characters function

const maxCharacter = (str) => {
  // Char Counter
  const frequencyCounter = {};

  let maxValue = 0;
  let charKey = "";

  for (let char of str) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }

  for (let value in frequencyCounter) {
    if (frequencyCounter[value] > maxValue) {
      maxValue = frequencyCounter[value];
      charKey = value;
    }
  }
  return console.log(charKey.toUpperCase());
};

maxCharacter("Hello World");

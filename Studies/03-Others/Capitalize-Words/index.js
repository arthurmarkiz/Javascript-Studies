const capitalize = (str) => {
  const words = [];

  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(" ");
};

console.log(capitalize("good morning and have a good code time"));

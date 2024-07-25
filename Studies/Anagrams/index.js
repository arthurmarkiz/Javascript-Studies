// Solution #1
const anagrams = (str1, str2) => {
  const strMap1 = buildCharMap(str1);
  const strMap2 = buildCharMap(str2);

  if (Object.keys(strMap1).length !== Object.keys(strMap2).length) return false;

  for (let char in strMap1) {
    if (strMap1[char] !== strMap2[char]) return false;
  }
  return true;
};

// Helper Function
const buildCharMap = (str) => {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = (charMap[char] || 0) + 1;
  }
  return charMap;
};

console.log(anagrams("hello", "ollhe"));
console.log(anagrams("kaka", "wewe"));
console.log("------");

// ============================================================
// Solution #2

const anagrams2 = (str1, str2) => {
  return cleanStr(str1) === cleanStr(str2);
};

const cleanStr = (str) => {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
};
console.log(anagrams2("hello", "ollhe"));
console.log(anagrams2("kaka", "wewe"));

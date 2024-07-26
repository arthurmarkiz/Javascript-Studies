// Palindrome with the Reverse Method

const isPalindrome = (str) => {
  const reversed = String(str).split("").reverse().join("");

  if (str === reversed) return true;
  return false;
};

console.log(isPalindrome("cabac"));
console.log(isPalindrome("awoffs"));

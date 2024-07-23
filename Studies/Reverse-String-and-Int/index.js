// 01. Reverse String with the Reverse Method (ez way)

const reverse = (str = "") => {
  if (str == "") return str;
  const string = String(str);
  return console.log(`${string} = ${string.split("").reverse().join("")}`);
};

console.log("Method 1");
reverse(123);
reverse("apple");
console.log("--------");
// ===================================================

// 02. Reverse String with For of loop and temporary variable

const reverse2 = (str = "") => {
  const string = String(str);
  let reversed = "";

  for (let char of string) {
    reversed = char + reversed;
  }
  return console.log(string + " = " + reversed);
};

console.log("Method 2");
reverse2(123);
reverse2("apple");
console.log("--------");

// ===================================================

// 3. Reverse String with the Reduce Method

const reverse3 = (str = "") => {
  const string = String(str);
  return console.log(
    `${string} = ${string.split("").reduce((rev, char) => char + rev, "")}`
  );
};

console.log("Method 3");
reverse3(123);
reverse3("apple");

// ===================================================

// 4. Reverse an Integer with the Reverse Method

const reverseInt = (n) => {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
};

console.log("--------");
console.log("Reverse Integer");
console.log(reverseInt(129948));

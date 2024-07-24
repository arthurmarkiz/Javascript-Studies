// Multiples of three => "fizz"
// Multiples of five => "buzz"
// Multiple of both => "fizzbuzz"

const fizzBuzz = (n) => {
  for (let val = 1; val <= n; val++) {
    if (val % 3 === 0) console.log(val + " fizz");
    if (val % 5 === 0) console.log(val + " buzz");
    if (val % 3 === 0 && val % 5 === 0) console.log(val + " fizzbuzz");
    if (val % 3 !== 0 && val % 5 !== 0) console.log(val);
  }
};

fizzBuzz(100);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

 
const countLetters = function(string) {
  const result = {};
  for (let letter of string) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

console.log(countLetters("L H L"));
console.log(countLetters("lighthouse in the house"));
console.log(countLetters("   "));

console.log(assertEqual((countLetters("LHL"))["L"], 2));
console.log(assertEqual((countLetters("LHL"))["H"], 1));

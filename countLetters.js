const assertEqual = function(actual, expected) { //Using assertEqual function
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

 
const countLetters = function(string) { // Defining a function countLetters to count occurrences of each letter in a string
  const result = {}; // Initialize an empty object to store letter counts
  for (let letter of string) { // Iterate through each character in the string
    if (letter !== " ") { // Ignore spaces
      if (result[letter]) {
        result[letter] += 1; // If the letter already exists in the result, increment its count
      } else {
        result[letter] = 1; // If the letter does not exist in the result, set its count to 1
      }
    }
  }
  return result; // Return the object containing letter counts
};


// Testing the countLetters function with different strings
console.log(countLetters("L H L"));
console.log(countLetters("lighthouse in the house"));
console.log(countLetters("   "));

console.log(assertEqual((countLetters("LHL"))["L"], 2));
console.log(assertEqual((countLetters("LHL"))["H"], 1));

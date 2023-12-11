const assertEqual = function(actual, expected) { // Using the assertEqual function
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) { // Function to find a key in an object based on a given value
  for (const key of Object.keys(object)) {   // Looping through the keys of the object
    if (object[key] === value) {  // Checking if the current key's value matches the given value
      return key; // Returning the key if a match is found
    }
  }
  return undefined; // Returning undefined if no key matches the value

};

// Object containing TV shows categorized by genre
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// Testing the findKeyByValue function with various cases
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "drama");
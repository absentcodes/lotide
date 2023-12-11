
const assertEqual = function(actual, expected) { // Defining the assertEqual function that checks equality between two values
  if (actual === expected) {  // Checking if the actual and expected values are strictly equal
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertEqual;
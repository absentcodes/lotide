const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) { // Defining the assertArraysEqual function that checks equality between two arrays
  const arraysAreEqual = eqArrays(arr1, arr2);   // Calling eqArrays function to check if the arrays are equal

  if (arraysAreEqual) {  // Checking the result of the comparison and logging the appropriate message
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} != ${arr2}`);
    
  }
};

module.exports = assertArraysEqual;
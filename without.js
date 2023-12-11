const assertArraysEqual = function(arr1, arr2) { // Using the assertArraysEqual function
  const arraysAreEqual = eqArrays(arr1, arr2);

  if (arraysAreEqual) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} != ${arr2}`);
    
  }
};


const eqArrays = function(arr1, arr2) { // Using the eqArrays function
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const without = function(source, itemsToRemove) {
  const filteredArray = []; // Array to store filtered elements

  for (let i = 0; i < source.length; i++) {  // Loop through the source array
    if (!itemsToRemove.includes(source[i])) { // If the current element is not in itemsToRemove, add it to the filteredArray
      filteredArray.push(source[i]);
    }
  }

  return filteredArray; // Return the filtered array

};

// Test cases
const words = ["hello", "world", "lighthouse"];

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // Should pass
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // Should pass

without(words, ["lighthouse"]); // No need to capture return value
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // Should pass

const takeUntil = function(array, callback) {
  const result = [];  // Initialize an empty array to store results
  for (const item of array) {
    if (!callback(item)) {
      result.push(item); // Push items to result until the callback condition is met
    } else {
      break; // Stop iteration if the callback condition is met
    }
  }
  return result; // Return the resulting array
};


// Assertion Tests
const eqArrays = function(arr1, arr2) { // Using the eqArrays fucntion
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

const assertArraysEqual = function(arr1, arr2) { // Using the assertArraysEqual function
  const arraysAreEqual = eqArrays(arr1, arr2);

  if (arraysAreEqual) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} != ${arr2}`);
    
  }
};


// Test Cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1,2,5,7,2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
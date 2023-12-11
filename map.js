const words = ["ground", "control", "to", "major", "tom"]; // Array of words


const map = function(array, callback) { // Function that maps each element of an array using a callback function
  const results = [];  // Initialize an empty array to store the results
  for (let item of array) { // Loop through each element in the input array
    results.push(callback(item)); // Apply the callback function to each element and store the result
  }

  return results;
};

//Tests
const results1 = map(words, word => word[0]);
console.log(results1);


//AssertionTests
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

const assertArraysEqual = function(arr1, arr2) { // Using the assertArraysEqual Function
  const arraysAreEqual = eqArrays(arr1, arr2);

  if (arraysAreEqual) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} != ${arr2}`);
    
  }
};

//Test Cases
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);



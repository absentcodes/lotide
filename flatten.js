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


const flatten = function(array) { // Function to flatten a nested array
  const flattenedArray = []; // Initialize an empty array to store flattened elements

  for (const element of array) {  // Loop through each element in the input array
    if (Array.isArray(element)) {     // Check if the element is an array
      for (const nestedElement of element) { // If the element is an array, loop through its elements and push them to the flattenedArray
        flattenedArray.push(nestedElement);
      }
    } else {
      flattenedArray.push(element);  // If the element is not an array, push it directly to the flattenedArray
    }
  }

  return flattenedArray; // Return the flattened array
};

// Testing the flatten function with an example
const result = flatten([1, 2, [3, 4], 5, [6]]);

// Assertion to check if the result of flattening matches the expected flattened array
assertArraysEqual(result, [1, 2, 3, 4, 5, 6]);
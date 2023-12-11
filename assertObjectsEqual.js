const eqArrays = function(arr1, arr2) { // Using eqArrays function 
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


const eqObjects = function(object1, object2) { //Using eqObjects function
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (Array.isArray(object1[key]) && (Array.isArray(object2[key]))) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};



const assertObjectEqual = function(actual, expected) { // Defining assertObjectEqual function to assert the equality of two objects
  const inspect = require('util').inspect;  // Utilizing inspect to convert objects into strings for better comparison output
  const areEqual = eqObjects(actual, expected);

  if (areEqual) { // Checking if the objects are equal and logging the assertion result
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


// Test cases to check object equality using assertObjectEqual function
const oldPalestine = {
  children: "more than half",
  adults: "less than half"
};

const newPalestine = {
  children: "more than half",
  adults: "less than half"
};

assertObjectEqual(oldPalestine, newPalestine);

const canada = {
  children: "less than half",
  adults: "more than half"
};

assertObjectEqual(oldPalestine, canada);
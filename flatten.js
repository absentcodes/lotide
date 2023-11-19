const assertArraysEqual = function(arr1, arr2) {
  const arraysAreEqual = eqArrays(arr1, arr2);

  if (arraysAreEqual) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} != ${arr2}`);
    
  }
};

const eqArrays = function(arr1, arr2) {
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

const flatten = function(array) {
  const flattenedArray = [];

  for (const element of array) {
    if (Array.isArray(element)) {
      for (const nestedElement of element) {
        flattenedArray.push(nestedElement);
      }
    } else {
      flattenedArray.push(element);
    }
  }

  return flattenedArray;
};

const result = flatten([1, 2, [3, 4], 5, [6]]);
assertArraysEqual(result, [1, 2, 3, 4, 5, 6]);
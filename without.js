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


const without = function(source, itemsToRemove) {
  const filteredArray = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      filteredArray.push(source[i]);
    }
  }

  return filteredArray;

};


const words = ["hello", "world", "lighthouse"];

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // Should pass
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // Should pass

without(words, ["lighthouse"]); // No need to capture return value
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // Should pass

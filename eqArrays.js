const eqArrays = function(arr1, arr2) { // Defining a function eqArrays to compare two arrays for equality
  if (arr1.length !== arr2.length) {  // Check if the lengths of the arrays are different
    return false; // If different, the arrays are not equal
  }
  
  for (let i = 0; i < arr1.length; i++) {  // Iterate through each element of the arrays
    if (arr1[i] !== arr2[i]) { // Check if the elements at the current index are not equal
      return false; // If not equal, the arrays are not equal
    }
  }
  return true; // If all elements match, the arrays are equal
};

module.exports = eqArrays;
 
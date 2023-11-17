const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  if (arr.length <= 1) {
    return [];
  }
  return arr.slice(1);
};


// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check the returned array for one element
const resultTwo = tail(["Hello"]);
assertEqual(resultTwo.length, 0); 
assertEqual(resultTwo[0], undefined); 


// Test Case 3: Check the returned array for an empty array
const resultThree = tail([]);
assertEqual(resultThree.length, undefined); 
assertEqual(resultThree[0], undefined); 



// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
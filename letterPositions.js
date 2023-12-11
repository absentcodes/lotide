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


const assertArraysEqual = function(arr1, arr2) { // Using the assertArraysEqual function
  const arraysAreEqual = eqArrays(arr1, arr2);

  if (arraysAreEqual) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} != ${arr2}`);
    
  }
};


const letterPositions = function(sentence) { // Function that returns the positions of each letter in a string
  const results = {}; // Object to store letters and their positions

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i]; // Current character in the sentence

    if (letter !== " ") { // Ignore spaces
      if (!results[letter]) { // If the letter isn't already in the results object
        results[letter] = []; // Create an empty array to store its positions
      }
      results[letter].push(i); // Add the current position to the letter's array
    }
  }

  return results; // Return the object containing letters and their positions
};

// Test cases
console.log(letterPositions("Lighthouse in the house"));

// Assertions
assertArraysEqual(letterPositions("Lighthouse in the house").i, [1, 11,]);
assertArraysEqual(letterPositions("hello").e, [1]);
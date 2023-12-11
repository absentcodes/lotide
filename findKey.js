const assertEqual = function(actual, expected) { // Using the assertEqual function
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) { // Function to find a key in an object based on a callback condition
  for (let key in object) {  // Looping through the keys of the object
    if (callback(object[key])) { // Checking if the callback condition is met for the current key's value
      return key; // Returning the key if condition is met
    }
  }
  return undefined; // Returning undefined if no key satisfies the condition

};

// Object containing restaurant names and their star ratings
const restaurants = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

// Test case using findKey function to find keys based on star ratings
const results1 = findKey(restaurants, x => x.stars === 2);
assertEqual(results1, "noma");

const results2 = findKey(restaurants, x => x.stars === 3);
assertEqual(results2, "Akaleri");

const results3 = findKey(restaurants, x => x.stars === 5);
assertEqual(results3, undefined);
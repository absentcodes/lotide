const assertEqual = function(actual, expected) { //Using assertEqual function
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};



const countOnly = function(allItems, itemsToCount) { // Defining a function countOnly to count specific items in an array
  const results = {};// Initialize an empty object to store counts of specific items

  for (const item of allItems) { // Iterate through each item in the allItems array
    if (itemsToCount[item]) { // Check if the current item exists in itemsToCount
      if (results[item]) {
        results[item] += 1;  // If the item already exists in the results, increment its count
      } else {
        results[item] = 1; // If the item does not exist in the results, set its count to 1
      }
    }
  
  }

  return results; 

};

// Test data - an array of first names
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


// Count specific items in the firstNames array based on the given criteria
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// Testing the counts of specific items using assertEqual function
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
const assertEqual = function(actual, expected) { // Using the assertEqual function
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
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



const eqObjects = function(object1, object2) { // Function to check equality of two objects
    // Getting keys of both objects
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // If number of keys differ, objects are not equal
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {  // Looping through keys of the first object
    if (Array.isArray(object1[key]) && (Array.isArray(object2[key]))) { // Checking if the current key holds an array in both objects
      if (!eqArrays(object1[key], object2[key])) {  // If arrays don't match using eqArrays function, objects are not equal
        return false; 
      }
    } else if (object1[key] !== object2[key]) {
      return false; // If values of non-array keys don't match, objects are not equal
    }
  }
  return true;
};









// Primitive Test Cases
const shirtObject = {
  color: "red",
  size: "medium"
};

const anotherShirtObject = {
  size: "medium",
  color: "red"
};

eqObjects(shirtObject, anotherShirtObject);
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);


const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long"
};

eqObjects(shirtObject, longSleeveShirtObject);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);


//Array as Values Test Cases

const multiColorShirtObject = {
  colors: ["red", "blue"],
  size: "medium"
};

const anotherMultColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"]
};

eqObjects(multiColorShirtObject, anotherMultColorShirtObject);
assertEqual(eqObjects(multiColorShirtObject, anotherMultColorShirtObject), true);

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLenggth: "long"
};

eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject);
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
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




// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
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
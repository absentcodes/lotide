const head = function(arr) { // Retrieves the first element of an array if the array is not empty
  if (Array.isArray(arr) && arr.length > 0) {  // Check if the provided input is an array and if it contains elements
    return arr[0]; // Return the first element of the array
  }
  return undefined;  // If the input is not an array or is empty, return undefined
};

module.exports = head;

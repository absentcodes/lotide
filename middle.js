const middle = function(array) {
  const length = array.length; // Get the length of the input array

  if (length <= 2) {
    return []; // Return an empty array if input has 2 or fewer elements
  }

  const middleIndex = Math.floor(length / 2); // Calculate the middle index

  if (length % 2 === 0) {
    return array.slice(middleIndex - 1, middleIndex + 1); // If the array has an even number of elements, return two middle elements
  } else {
    return [array[middleIndex]];  // If the array has an odd number of elements, return the middle element
  }
};

module.exports = middle;
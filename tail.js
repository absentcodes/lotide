const tail = function(arr) {
  if (arr.length <= 1) {
    return []; // Return an empty array if input has 1 or fewer elements
  }
  return arr.slice(1);  // Return all elements except the first one
};

module.exports = tail;
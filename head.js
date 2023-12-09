const head = function(arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    return arr[0];
  }
  return undefined;
};

module.exports = head;

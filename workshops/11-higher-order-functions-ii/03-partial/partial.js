// YOUR CODE BELOW
function partial(callback, a) {
  function newFunction(b) {
    return callback(a, b);
  }

  return newFunction;
}

// YOUR CODE BELOW
function stringify(callback) {
  function newFunction() {
    return String(callback());
  }

  return newFunction;
}

// YOUR CODE BELOW
function callCount() {
  let counter = 0;
  function newFunction() {
    counter++;
    return counter;
  }

  return newFunction;
}

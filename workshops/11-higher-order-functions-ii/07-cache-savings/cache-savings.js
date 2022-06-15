// YOUR CODE BELOW
function cacheSavings(callback) {
  let myCache = {};
  function newFunc(arg) {
    if (arg in myCache) {
      return myCache[arg];
    } else {
      myCache[arg] = callback(arg);
      return myCache[arg];
    }
  }
  return newFunc;
}

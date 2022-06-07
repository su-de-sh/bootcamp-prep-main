// YOUR CODE BELOW
function myIncludes(array, searchValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchValue) return true;
  }
  return false;
}
console.log(myIncludes([10, 20, 30], 20));
console.log(myIncludes(["apples", "bananas", "citrus"], "pears"));

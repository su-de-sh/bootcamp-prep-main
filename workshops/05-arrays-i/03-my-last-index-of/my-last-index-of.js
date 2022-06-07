// YOUR CODE BELOW
function myLastIndexOf(array, searchValue, startIdx = 0) {
  let myIdx;
  for (let i = startIdx; i < array.length; i++) {
    if (array[i] === searchValue) {
      myIdx = i - startIdx;
    }
  }
  if (myIdx === undefined) return -1;
  return myIdx;
}
console.log(myLastIndexOf(["gee", "gee", "gee", "gee", "baby", "baby"], "gee"));
console.log(myLastIndexOf(["Tiffany", "Sunny", "Yoona"], "Jessica"));

// YOUR CODE BELOW
function mySlice(originalArray, startIdx = 0, endIdx = originalArray.length) {
  debugger;
  let newArray = [];
  if (startIdx < 0) {
    startIdx = originalArray.length + startIdx;
  }
  if (endIdx < 0) {
    endIdx = originalArray.length + endIdx;
  }
  for (let i = startIdx; i < endIdx; i++) {
    newArray.push(originalArray[i]);
  }
  return newArray;
}
console.log(mySlice(["bagel", "baguette", "bialy", "brioche"], -1, 2));

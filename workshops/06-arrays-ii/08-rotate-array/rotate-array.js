// YOUR CODE BELOW
function rotateArray(originalArray, rotateNum) {
  let newArray = originalArray.splice(
    originalArray.length - rotateNum,
    rotateNum
  );
  return newArray.concat(originalArray);
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));

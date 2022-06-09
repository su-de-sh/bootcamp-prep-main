// YOUR CODE BELOW
function rotateArray(originalArray, rotateNum) {
  if (rotateNum < 0) {
    let newArray = originalArray.splice(0, -rotateNum);
    return originalArray.concat(newArray);
  } else {
    let newArray = originalArray.splice(
      originalArray.length - rotateNum,
      rotateNum
    );
    return newArray.concat(originalArray);
  }
}

console.log(rotateArray([1, 2, 3, 4, 5], -2));

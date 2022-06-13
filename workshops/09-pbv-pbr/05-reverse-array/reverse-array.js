// YOUR CODE BELOW
function reverseArray(myArray) {
  let requiredArray = [];
  for (let i = myArray.length - 1; i >= 0; i--) {
    requiredArray.push(myArray[i]);
  }

  while (myArray.length) {
    myArray.pop();
  }

  for (let i = 0; i < requiredArray.length; i++) {
    myArray.push(requiredArray[i]);
  }
  return myArray;
}

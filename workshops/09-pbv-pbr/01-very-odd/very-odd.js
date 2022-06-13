// YOUR CODE BELOW
function veryOdd(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

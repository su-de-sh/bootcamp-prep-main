// YOUR CODE BELOW
function evenAndOdd(array) {
  let newArray = [[], []];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      newArray[1].push(array[i]);
    } else {
      newArray[0].push(array[i]);
    }
  }
  return newArray;
}

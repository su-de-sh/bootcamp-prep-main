// YOUR CODE BELOW
function oddCouple(array) {
  if (array.length === 0) return [];
  numArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      numArray.push(array[i]);
      if (numArray.length === 2) break;
    }
  }
  return numArray;
}

console.log(oddCouple([1, 2, 3, 4, 5]));

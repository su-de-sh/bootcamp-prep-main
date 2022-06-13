// YOUR CODE BELOW
function deeperCopy(array) {
  let requiredArrray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      let tempArray = [];
      for (let j = 0; j < array[i].length; j++) {
        tempArray.push(array[i][j]);
      }
      requiredArrray.push(tempArray);
    } else {
      requiredArrray.push(array[i]);
    }
  }
  return requiredArrray;
}

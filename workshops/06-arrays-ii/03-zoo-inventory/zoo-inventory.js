// YOUR CODE BELOW
function zooInventory(array) {
  newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(
      array[i][0] + " the " + array[i][1][0] + " is " + array[i][1][1] + "."
    );
  }
  return newArray;
}

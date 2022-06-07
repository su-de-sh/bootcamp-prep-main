// YOUR CODE BELOW
function myReverse(array) {
  let newArray = [];
  for (let i = array.length; i > 0; i--) {
    newArray.push(array.pop());
  }
  return newArray;
}
console.log(myReverse([1, 2, 3]));

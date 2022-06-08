// YOUR CODE BELOW
function myJoin(array, separator = ",") {
  let myStr = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i] === null) array[i] = "";
    if (i === array.length - 1) myStr += array[i];
    else myStr += array[i] + separator;
  }
  return myStr;
}

console.log(myJoin(["a", "b", "c"], "+"));
console.log(myJoin([null, "came, ", "saw, ", "conquered."], "I "));

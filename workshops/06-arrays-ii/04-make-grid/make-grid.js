// YOUR CODE BELOW
function makeGrid(number1, number2) {
  let newArry = [];
  for (let i = 1; i <= number2; i++) {
    let arr = [];
    for (let j = 1; j <= number1; j++) {
      arr.push(j);
    }

    newArry.push(arr);
  }
  return newArry;
}

console.log(makeGrid(3, 4));

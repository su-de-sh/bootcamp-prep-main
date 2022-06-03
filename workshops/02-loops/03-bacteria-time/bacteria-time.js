// YOUR CODE BELOW
function bacteriaTime(currentNum, targetNum) {
  if (currentNum > targetNum) return "targetNum must be larger than currentNum";
  else {
    let count = 0;
    while (targetNum > currentNum) {
      currentNum *= 2;
      count += 1;
    }
    return count * 20;
  }
}

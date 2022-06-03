// YOUR CODE BELOW
function onlyOdds(num) {
  if (num < 0) return 0;
  else {
    sum = 0;
    for (let i = 0; i <= num; i++) {
      rem = i % 2;
      if (rem === 1) {
        sum += i;
      }
    }
    return sum;
  }
}

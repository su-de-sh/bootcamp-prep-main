// YOUR CODE BELOW
function exponentiate(base, power) {
  if (power < 0) return 0;
  else {
    let product = 1;
    for (let i = 1; i <= power; i++) {
      product *= base;
    }
    return product;
  }
}

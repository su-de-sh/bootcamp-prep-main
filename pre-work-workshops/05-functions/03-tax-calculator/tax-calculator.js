// YOUR CODE BELOW
function taxCalculator(price, state) {
  if (state === "NY") {
    return price + price * (4 / 100);
  } else if (state === "NJ") {
    return price + price * (6.625 / 100);
  }
}

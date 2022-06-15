// YOUR CODE BELOW
function billerBuilder(state) {
  if (state === "NY") {
    function newYorkBiller(price) {
      return price * 1.03 * 1.04;
    }
    return newYorkBiller;
  }
  if (state === "NJ") {
    function newJersBiller(price) {
      return price * 1.05 * 1.06625;
    }
    return newJersBiller;
  }
}

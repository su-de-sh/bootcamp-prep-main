// YOUR CODE BELOW
function chainReaction(startingVal, arrayOfFunc) {
  arrayOfFunc.forEach((element) => {
    startingVal = element(startingVal);
  });

  return startingVal;
}

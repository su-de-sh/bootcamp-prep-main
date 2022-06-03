// YOUR CODE BELOW
function crazyCaps(myString) {
  let finalString = "";
  for (let i = 0; i <= myString.length - 1; i++) {
    rem = i % 2;
    if (rem === 1) {
      finalString += myString[i].toUpperCase();
    } else {
      finalString += myString[i];
    }
  }
  return finalString;
}

// YOUR CODE BELOW
function myMnemonic(str1, str2, str3, str4) {
  let finalString = "";

  if (str1) {
    finalString = str1[0];
  }
  if (str2) {
    finalString += str2[0];
  }
  if (str3) {
    finalString += str3[0];
  }
  if (str4) {
    finalString += str4[0];
  }
  return finalString;
}

// YOUR CODE BELOW
function mySlice(originalString, startIdx, endIdx) {
  finalString = "";
  if (startIdx && endIdx) {
    for (let i = startIdx; i <= endIdx - 1; i++) {
      finalString += originalString[i];
    }
  } else if (startIdx) {
    for (let i = startIdx; i <= originalString.length - 1; i++) {
      finalString += originalString[i];
    }
  } else if (endIdx) {
    for (let i = 0; i <= endIdx; i++) {
      finalString += originalString[i];
    }
  } else {
    finalString = originalString;
  }

  return finalString;
}

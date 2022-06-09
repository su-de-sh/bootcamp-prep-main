// YOUR CODE BELOW
function frequencyAnalysis(str) {
  str = str.toLowerCase();

  let myObj = {};
  debugger;
  for (let i = 0; i < str.length; i++) {
    if (str[i] in myObj) {
      myObj[str[i]]++;
    } else myObj[str[i]] = 1;
  }

  return myObj;
}

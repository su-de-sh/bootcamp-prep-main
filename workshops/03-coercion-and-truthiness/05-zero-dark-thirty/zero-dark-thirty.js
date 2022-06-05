// YOUR CODE BELOW

function zeroDarkThirty(num) {
  if (num === 0) return NaN;
  let strnum = String(num);
  let newStr = "";

  for (let i = 0; i < strnum.length; i++) {
    if (strnum[i] === "0") {
      continue;
    } else {
      newStr += strnum[i];
    }
  }
  return Number(newStr);
}

// YOUR CODE BELOW
function compareObjects(object1, object2) {
  let lengthOfObjOne = Object.keys(object1).length;
  let lengthOfObjTwo = Object.keys(object2).length;

  console.log(lengthOfObjOne);
  console.log(lengthOfObjTwo);
  if (lengthOfObjOne !== lengthOfObjTwo) {
    return false;
  }
  for (keys in object2) {
    if (object2[keys] !== object1[keys]) {
      return false;
    }
  }
  return true;
}

compareObjects({ name: "nick" }, { name: "nick" });

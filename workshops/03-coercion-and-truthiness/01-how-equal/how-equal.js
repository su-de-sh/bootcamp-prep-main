// YOUR CODE BELOW
function howEqual(arg1, arg2) {
  if (arg1 === arg2) {
    return "strictly";
  }
  if (arg1 == arg2) {
    return "loosely";
  }

  return "not equal";
}

// YOUR CODE BELOW
function isTruthy(arg1) {
  if (arg1) {
    return true;
  } else {
    if (arg1 === false) {
      return "The boolean value false is falsey";
    }
    if (arg1 === null) {
      return "The null value is falsey";
    }
    if (arg1 === 0) {
      return "The number 0 is falsey (the only falsey number)";
    }
    if (arg1 === undefined) {
      return "undefined is falsey";
    }
    if (arg1 === "") {
      return "The empty string is falsey (the only falsey string)";
    }
  }
}

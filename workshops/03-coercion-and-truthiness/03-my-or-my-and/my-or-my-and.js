// YOUR CODE BELOW
function myOr(arg1, arg2, arg3) {
  if (!!arg1) return arg1;
  if (!!arg2) return arg2;
  if (!!arg3) return arg3;
  return arg3;
}

function myAnd(arg1, arg2, arg3) {
  if (!arg1) return arg1;
  if (!arg2) return arg2;
  if (!arg3) return arg3;
  return arg3;
}

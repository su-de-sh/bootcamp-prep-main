// YOUR CODE BELOW
// function onlyOne(arg1, arg2, arg3) {
//   count = 0;
//   if (arg1) count++;
//   if (arg2) count++;
//   if (arg3) count++;
//   if (count === 1) {
//     return true;
//   } else return false;
// }

function onlyOne(arg1, arg2, arg3) {
  if (
    (arg1 && !arg2 && !arg3) ||
    (!arg1 && arg2 && !arg3) ||
    (!arg1 && !arg2 && arg3)
  )
    return true;
  else return false;
}

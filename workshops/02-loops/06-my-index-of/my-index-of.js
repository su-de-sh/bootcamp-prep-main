// YOUR CODE BELOW
// function myIndexOf(source, searchValue, startIdx) {
//   length = searchValue.length;

//   if (startIdx) {
//     for (let i = startIdx; i < source.length - searchValue.length; i++) {
//       let sliced = source.slice(i, length + i);
//       console.log(sliced);
//       if (sliced === searchValue) {
//         return i;
//       }
//     } else return -1;
//   } else {
//     for (let i = 0; i <= source.length - searchValue.length; i++) {
//       if (source.slice(i, length) === searchValue) {
//         return i;
//       } else return -1;
//     }
//   }
// }

function myIndexOf(source, searchValue, startIdx = 0) {
  for (i = startIdx; i <= source.length - searchValue.length; i++) {
    let slicedString = source.slice(i, i + searchValue.length);

    if (slicedString === searchValue) {
      return i;
    }
  }
  return -1;
}

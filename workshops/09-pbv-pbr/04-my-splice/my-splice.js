// //[1,2,3,4]
// function mySplice(array, startIdx, numberOfRepeatation, word) {
//   let myArray = [];
//   let removedElements = [];

//   if (!word) {
//     // console.log("word not present");
//     for (let i = 0; i < array.length; i++) {
//       if (i === startIdx) {
//         for (let j = startIdx; j < startIdx + numberOfRepeatation; j++) {
//           removedElements.push(array[j]);
//         }
//         console.log(removedElements);
//         i = startIdx + numberOfRepeatation - 1;
//         // console.log(i);
//       } else {
//         myArray.push(array[i]);
//       }
//     }
//   } else {
//     for (let i = 0; i < array.length; i++) {//['food', 'trash', 'clothes']
//       if (i === startIdx) {
//         myArray[i] = word;

//         for (let j = startIdx; j < startIdx + numberOfRepeatation; j++) {
//           removedElements.push(array[j]);
//         }
//       } else {
//         myArray.push(array[i]);
//       }
//     }
//   }
//   console.log(myArray);
//   while (array.length) {
//     array.pop();
//   }

//   for (let i = 0; i < myArray.length; i++) {
//     array.push(myArray[i]);
//   }

//   console.log(myArray);
//   return removedElements;
// }

function mySplice(array, startIdx, deleteCount, word) {
  const deletedArray = [];
  const requiredArray = [];

  for (let i = 0; i < startIdx; i++) {
    requiredArray.push(array[i]);
  }
  if (word) {
    requiredArray.push(word);
  }
  for (let i = startIdx; i < startIdx + deleteCount; i++) {
    deletedArray.push(array[i]);
  }
  for (let i = startIdx + deleteCount; i < array.length; i++) {
    requiredArray.push(array[i]);
  }

  while (array.length) {
    array.pop();
  }

  for (let i = 0; i < requiredArray.length; i++) {
    array.push(requiredArray[i]);
  }

  return deletedArray;
}

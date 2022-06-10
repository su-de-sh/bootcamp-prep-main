// YOUR CODE BELOW,
function callThemAll(object, value) {
  let myArray = [];
  debugger;
  for (let keys in object) {
    if (typeof object[keys] === "function") {
      myArray.push(object[keys](value));
    }
  }

  return myArray;
}

// let addsNums = {
//   addTen: function (num) {
//     return num + 10;
//   },

//   addTwenty: function (num) {
//     return num + 20;
//   },

//   someProperty: "value",
// };

// console.log(callThemAll({}, 100)); // => [110, 120]

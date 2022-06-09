// YOUR CODE BELOW
function dogBreeder(name = "Steve", age = 0) {
  let myObj = {};
  if (typeof name === "string") {
    myObj.name = name;
    myObj.age = age;
  } else {
    myObj.name = "Steve";
    myObj.age = name;
  }
  return myObj;
}

// YOUR CODE BELOW
function getDogBreeder(name, age) {
  function dogBreeder(name1 = name, age1 = age) {
    if (typeof name1 === "number") {
      return { name: name, age: name1 };
    }
    return { name: name1, age: age1 };
  }

  return dogBreeder;
}

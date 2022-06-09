let classRoom = [
  {
    Marnie: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true },
    ],
  },
  {
    Lena: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
      { Friday: true },
    ],
  },
  {
    Shoshanna: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: false },
    ],
  },
  {
    Jessa: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true },
    ],
  },
];

// YOUR CODE BELOW
function attendanceCheck(day) {
  let presentPerson = [];
  for (let i = 0; i < classRoom.length; i++) {
    myObj = classRoom[i];
    currName = Object.keys(myObj)[0];
    let array2 = myObj[currName];
    for (let j = 0; j < array2.length; j++) {
      let obj2 = array2[j];
      let currDay = Object.keys(obj2)[0];
      if (currDay === day) {
        if (obj2[day]) {
          presentPerson.push(currName);
        }
      }
    }
  }
  return presentPerson;
}

attendanceCheck("tuesday");

// YOUR CODE BELOW
function whosASpecial(petsArray) {
  let myStr = "";
  petsArray.forEach((element) => {
    myStr += `${element.name} the ${element.species} is very special! `;
  });

  return myStr.trim();
}

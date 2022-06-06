// Edit the code below
let place1 = "Planet Earth";

function fullstackHQ() {
  return middleFunction("United States");

  function middleFunction(place2) {
    return innerFunction("New York State");

    function innerFunction(place3) {
      return innermostFunction("New York City");

      function innermostFunction(place4) {
        return (
          "Fullstack HQ is at " +
          place1 +
          ", " +
          place2 +
          ", " +
          place3 +
          ", " +
          place4
        );
      }
    }
  }
}

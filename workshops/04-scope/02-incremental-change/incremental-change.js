let counter = 0;
function incrementalChange(increment) {
  if (increment < 0) {
    for (let i = 1; i <= -increment; i++) {
      counter--;
    }
    return counter;
  }
  for (let i = 1; i <= increment; i++) {
    counter++;
  }

  return counter;
}

// YOUR CODE BELOW

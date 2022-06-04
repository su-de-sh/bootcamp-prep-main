// YOUR CODE BELOW
function mostVowels(string) {
  lastLetter = string[string.length - 1];

  if (lastLetter === ".") {
    string = string.slice(0, string.length - 1);
  }
  let vowels = "aeiou";
  let words = string.split(" ");

  let wordIndex = 0;
  let currentVowelCount = 0;
  let maxVowelCount = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    for (let j = 0; j < word.length; j++) {
      for (let k = 0; k < vowels.length; k++) {
        if (word[j] === vowels[k]) {
          currentVowelCount++;
        }
      }
    }

    if (currentVowelCount > maxVowelCount) {
      maxVowelCount = currentVowelCount;

      wordIndex = i;
    }
    currentVowelCount = 0;
  }

  if (maxVowelCount === 0) return "";
  return words[wordIndex];
}

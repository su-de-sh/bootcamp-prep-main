let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let leetChars = [
  "@",
  "8",
  "(",
  "|)",
  "3",
  "ph",
  "g",
  "#",
  "l",
  "_|",
  "|<",
  "1",
  "|'|'|",
  "//",
  "0",
  "|D",
  "(,)",
  "|2",
  "5",
  "+",
  "|_|",
  "|/",
  "|/|/'",
  "><",
  "j",
  "2",
];

// YOUR CODE BELOW

function leetTranslator(str) {
  str = str.toLowerCase();
  let myStr = "";
  let myLeetMap = {};
  for (let i = 0; i < letters.length; i++) {
    let letter = letters[i];
    myLeetMap[letter] = leetChars[i];
  }
  for (let j = 0; j < str.length; j++) {
    myStr += myLeetMap[str[j]];
  }
  return myStr;
}

leetTranslator("sudesh");

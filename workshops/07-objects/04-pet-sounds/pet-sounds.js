let animalNoises = [
  {
    dog: {
      America: "Woof! Woof!",
      Germany: "Wau Wau!",
      England: "Bow wow!",
      Uruguay: "Jua jua!",
      Afrikaans: "Blaf!",
      Korea: "Mong mong!",
      Iceland: "Voff voff!",
      Albania: "Ham!",
      Algeria: "Ouaf ouaf!",
    },
  },
  {
    cat: {
      America: "Meow",
      Germany: "Miauw!",
      England: "mew mew",
      Uruguay: "Miau Miau!",
      Afrikaans: "Purr",
      Korea: "Nyaong!",
      Iceland: "Kurnau!",
      Albania: "Miau",
      Algeria: "Miaou!",
    },
  },
  {
    chicken: {
      America: "Cluck cluck",
      Germany: "tock tock tock",
      England: "Cluck Cluck",
      Uruguay: "gut gut gdak",
      Afrikaans: "kukeleku",
      Korea: "ko-ko-ko",
      Iceland: "Chuck-chuck!",
      Albania: "Kotkot",
      Algeria: "Cotcotcodet",
    },
  },
];

// YOUR CODE BELOW
function petSounds(animal, country) {
  let myStr = "";
  for (let i = 0; i < animalNoises.length; i++) {
    myObj = animalNoises[i];
    keys = Object.keys(myObj);
    if (keys[0] === animal) {
      let sound = myObj[keys[0]][country];
      myStr +=
        animal[0].toUpperCase() +
        animal.slice(1, animal.length) +
        "s" +
        " in " +
        country +
        " say " +
        sound;
    }
  }

  return myStr;
}

console.log(petSounds("cat", "America"));

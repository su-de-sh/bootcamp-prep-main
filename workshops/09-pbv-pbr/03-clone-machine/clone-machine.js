// YOUR CODE BELOW
function cloneMachine(animal) {
  let animalClone = {};

  animalClone.name = animal.name + "Clone";
  animalClone.species = animal.species;
  animalClone.offspring = [];
  animal.offspring.push(animalClone.name);
  return animalClone;
}

// arguments objects - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments); // arguments works only with standart functions, not arrows
  return a + b;
};
console.log(add(55, 13, 1));

// this keyword - no longer bound

const user = {
  name: "Giedre",
  cities: ["Klaipeda", "Vilnius", "Sofia"],
  printPlacesLived() {
    return this.cities.map((city) => this.name + " has lived in " + city);
  },
};
console.log(user.printPlacesLived());

const multiplier = {
  numbers: [2, 3, 4],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy);
  },
};

console.log(multiplier.multiply());

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
    const cityMessages = this.cities.map((city) => {
      return this.name + " has lived in " + city;
    });

    return cityMessages;
  },
};
console.log(user.printPlacesLived());

"use strict";

// arguments objects - no longer bound with arrow functions

var add = function add(a, b) {
  // console.log(arguments); // arguments works only with standart functions, not arrows
  return a + b;
};
console.log(add(55, 13, 1));

// this keyword - no longer bound

var user = {
  name: "Giedre",
  cities: ["Klaipeda", "Vilnius", "Sofia"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + " has lived in " + city;
    });
  }
};
console.log(user.printPlacesLived());

var multiplier = {
  numbers: [2, 3, 4],
  multiplyBy: 3,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (num) {
      return num * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());

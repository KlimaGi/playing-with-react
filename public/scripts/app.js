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

    var cityMessages = this.cities.map(function (city) {
      return _this.name + " has lived in " + city;
    });

    return cityMessages;
  }
};
console.log(user.printPlacesLived());

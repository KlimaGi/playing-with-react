var nameVar = "Giedre";
var nameVar = "Mike";
console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet = "julie";
console.log("nameLet", nameLet);

const nameConst = "frank";
console.log("nameConst", nameConst);

// Block scoping
function getPetName() {
  const petName = "Hal";
  return petName;
}

const petName = getPetName();
console.log(petName);

const fullName = "Jen Klima";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);

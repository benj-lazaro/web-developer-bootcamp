const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

// Copy & combine elements of existing arrays into a new one using spread syntax
// Elements of the original arrays remains UNCHANGED
const allPets1 = [...cats, ...dogs];
console.log(allPets1);

const allPets2 = [1, 2, 3, ...dogs, ...cats, "Speedy"];
console.log(allPets2);

let stringSample = "hello";

// Copy the string as individual elements of a new array
const strArray = [...stringSample];
console.log(strArray);

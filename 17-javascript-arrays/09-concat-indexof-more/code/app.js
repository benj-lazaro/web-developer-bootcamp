// Array Methods Concat, IndexOf, Includes & Reverse

let cats = ["blue", "kitty"];
let dogs = ["rusty", "wyatt"];

let petList1 = cats.concat(dogs);
console.log(petList1);
console.log(cats);
console.log(dogs);

let petList2 = dogs.concat(cats);
console.log(petList2);
console.log(cats);
console.log(dogs);

let catSearch = cats.includes("blue");
console.log(catSearch);

catCheck = cats.includes("garfield");
console.log(catCheck);

let petIndex = petList1.indexOf("blue");
console.log(petIndex);

petIndex = petList1.indexOf("rusty");
console.log(petIndex);

petIndex = petList1.indexOf("felix");
console.log(petIndex);

let reversedPetList = petList1.reverse();
console.log(reversedPetList);
console.log(petList1);

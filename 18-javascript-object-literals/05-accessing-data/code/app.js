// Accessing Data Out of Objects

// Object litera with the same type of properties
const person = {
  firstName: "Mick",
  lastName: "Jagger",
};

// Accessing an object's property via []
console.log(person["firstName"]);
console.log(person["last" + "Name"]);

// Object literal with different types of properties
const kitchenSink = {
  faveNum: 93219023,
  isFunny: true,
  colors: ["red", "orange"],
};

// Accessing an object's property via "."
console.log(kitchenSink.faveNum);
console.log(kitchenSink.colors);

const dumbdumb = {
  true: "dat",
  null: 12345,
};

console.log(dumbdumb);
console.log(dumbdumb.true);
console.log(dumbdumb.null);

// Demonstration of keys implicitly converted into string
const years = {
  1999: "Good",
  2020: "Bad",
};

console.log(years);
console.log(years["1999"]);
console.log(years[2020]);

// Demonstration of using the value assigned to a variable as key
let birthYear = 2020;
console.log(years.birthYear); // Rerturns "undefined"; does NOT work with dot syntax
console.log(years[birthYear]); // Works with [] syntax

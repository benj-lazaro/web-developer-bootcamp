const feline = {
  legs: 4,
  family: "Felidae",
};

const canine = {
  isFurry: true,
  family: "Caninae",
};

// Using spread syntax on object literals
const lion = {
  ...feline,
  genus: "Panthera",
};
console.log(lion);

const felixTheCat = {
  ...feline,
  color: "Black",
};
console.log(felixTheCat);

const dog = {
  ...canine,
  isPet: true,
};
console.log(dog);

// Conflicting prorperty "family" from source object literals
// Recent value (i.e. caninae) overwrites the former (i.e. felidae)
const catDog = {
  ...feline,
  ...canine,
};
console.log(catDog);

const comboMash = {
  ...feline,
  ...canine,
  family: "Steele",
};
console.log(comboMash);

// Spread syntax on an array literal inside an object literal
const nums = [2, 4, 6, 8, 10];
const objectNums = { ...nums };
console.log(objectNums);

// Spread syntax on a string literal inside an object literal
const greet = "Hi there!";
const objectGreet = { ...greet };
console.log(objectGreet);

// Spread syntax on a user-submitted form data stored in an object literal
const dataFromForm = {
  email: "blueman@gmail.com",
  password: "tobias123!",
  username: "tfunke",
};
console.log(dataFromForm);

// Insert additional properties in preperation for registering the user account
const newUser = {
  ...dataFromForm,
  id: 2345,
  isAdming: false,
};
console.log(newUser);

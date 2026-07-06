const user = {
  email: "harvey@gmail.com",
  password: "sCoT1984sMiTh",
  firstName: "Harvey",
  lastName: "Milk",
  born: 1930,
  died: 1978,
  bio: "Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors",
  city: "San Francisco",
  state: "California",
};

const { email, firstName, lastName, city, bio } = user;
console.log(email);
console.log(firstName);
console.log(lastName);
console.log(city);
console.log(bio);

// Rename existing property name
const { born: birthYear } = user;
console.log(birthYear);

const user2 = {
  email: "stacy@gmail.com",
  firstName: "Stacy",
  lastName: "Gonzales",
  born: 1987,
  city: "Tulsa",
  state: "Oklahoma",
};

// Assign default value to a non-existent property name
const { state, died = "N/A" } = user2;
console.log(state);
console.log(died);

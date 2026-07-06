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

// Destructuring a function's parameter (params) list
function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
console.log(fullName(user));

const movies = [
  { title: "Amadeus", score: 99, year: 1984 },
  { title: "Sharknado", score: 35, year: 2014 },
  { title: "Stand By Me", score: 85, year: 1986 },
  { title: "13 Going On 30", score: 70, year: 2004 },
  { title: "Water World", score: 62, year: 1995 },
  { title: "Jingle All The Way", score: 71, year: 1996 },
  { title: "Parasite", score: 95, year: 2019 },
  { title: "Notting Hill", score: 77, year: 1999 },
  { title: "Alien", score: 90, year: 1979 },
];

// Destructuring an Arrow function's parameter (params) list
const bestMovies = movies.filter(({ score }) => score >= 90);
console.log(bestMovies);

const movieList = movies.map(({ title, year, score }) => {
  return `${title} (${year}) is rated ${score}`;
});
console.log(movieList);

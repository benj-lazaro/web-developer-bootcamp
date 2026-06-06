const examScores = [80, 98, 92, 78, 70, 90, 89, 84, 81, 77];

// Checks if EVERY score passed over the grade of 75
const didEveryonePassed = examScores.every((score) => score >= 75);
console.log(didEveryonePassed);

const didSomePassed = examScores.some((score) => score >= 75);
console.log(didSomePassed);

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

const post2015Films = movies.some((movies) => movies.year > 2015);
console.log(post2015Films);

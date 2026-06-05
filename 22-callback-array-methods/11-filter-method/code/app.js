const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const oddNumbers = numbers.filter((number) => number % 2 === 1);
console.log(oddNumbers);

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

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

const goodMovies = movies.filter((movie) => movie.score > 80);
console.log(goodMovies);

const badMovies = movies.filter((movie) => movie.score < 70);
console.log(badMovies);

const recentMovies = movies.filter((movie) => movie.year > 2000);
console.log(recentMovies);

// Chained methods "filter()" & "map()"
const goodTitles = movies
  .filter((movie) => movie.score > 80)
  .map((movie) => movie.title);

console.log(goodTitles);

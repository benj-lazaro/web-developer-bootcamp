// Array of objects
const movies = [
  { title: "Amadeus", score: 99 },
  { title: "Stand by me", score: 85 },
  { title: "Parasite", score: 95 },
  { title: "Alien", score: 90 },
];

// Arrow function passed as argument to the method ".map()"
const movieTitles = movies.map(
  (movie) => `${movie.title} - ${movie.score / 10}`,
);

console.log(movies);
console.log(movieTitles);

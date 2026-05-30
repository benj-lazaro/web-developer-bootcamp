// Array of strings
const text = ["rofl", "lol", "omg", "ttyl"];
const caps = text.map(function (stringElement) {
  return stringElement.toUpperCase();
});

console.log(text);
console.log(caps);

// Array of numbers
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const timesTwo = numbers.map(function (numberElement) {
  return numberElement * 2;
});

console.log(numbers);
console.log(timesTwo);

// Array of objects
const movies = [
  { title: "Amadeus", score: 99 },
  { title: "Stand by me", score: 85 },
  { title: "Parasite", score: 95 },
  { title: "Alien", score: 90 },
];

const movieTitles = movies.map(function (movie) {
  return movie.title.toUpperCase();
});

console.log(movies);
console.log(movieTitles);

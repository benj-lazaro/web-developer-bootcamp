const examScores = [80, 98, 92, 78, 70, 90, 89, 84, 81, 77];

// Get the sum & average of exam scores
// const sumScore = examScores.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
// );
const sumScore = examScores.reduce((total, score) => total + score);
console.log(`Score Sum: ${sumScore}`);
console.log(`Score Average: ${sumScore / examScores.length}`);

const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// Get the sum of prices
const totalPurchase = prices.reduce((total, price) => total + price);
console.log(`Total Purchase: $${totalPurchase}`);

// Get the lowest price value
const minPrice = prices.reduce((minimum, price) => {
  if (price < minimum) {
    return price;
  }
  return minimum;
});
console.log(`Lowest Price: ${minPrice}`);

// Get the highest price value
const maxPrice = prices.reduce((maximum, price) => {
  if (price > maximum) {
    return price;
  }
  return maximum;
});
console.log(`Highest Price: ${maxPrice}`);

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

// Get the highest rated film
const highestRatedMovie = movies.reduce((highRatedMovie, movie) => {
  if (movie.score > highRatedMovie.score) {
    return movie;
  }
  return highRatedMovie;
});
console.log(
  `Highest Rated Movie: ${highestRatedMovie.title} released on ${highestRatedMovie.year} with a score of ${highestRatedMovie.score}%`,
);

// Setting an initial value for the "accumulator"
const evenNumbers = [2, 4, 6, 8];

// NO initial value passed for the "accumulator"
let sumEven = evenNumbers.reduce((sum, evenNumber) => sum + evenNumber);
console.log(sumEven);

// Initial value of 100 assigned for the "accumulator"
sumEven = evenNumbers.reduce((sum, evenNumber) => sum + evenNumber, 100);
console.log(sumEven);

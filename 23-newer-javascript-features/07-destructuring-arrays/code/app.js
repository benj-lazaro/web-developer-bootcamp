const scores = [92931, 89931, 88838, , 772839, 543671, 243567, 111934];
console.log(scores);

// Destructuring an array
const [gold, silver, bronze, ...everyoneElse] = scores;
console.log(gold);
console.log(silver);
console.log(bronze);
console.log(everyoneElse);

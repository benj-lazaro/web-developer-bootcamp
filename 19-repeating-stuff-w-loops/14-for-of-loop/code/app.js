// One dimensional array
const subreddits = [
  "cringe",
  "books",
  "chickens",
  "funny",
  "pics",
  "soccer",
  "gunners",
];

// Multi-dimensional array
const seatingChart = [
  ["Kristen", "Erik", "Namita"],
  ["Geoffrey", "Juanita", "Antonio", "Kevin"],
  ["Yuma", "Sakura", "Jack", "Erika"],
];

// Iterate using a "for" loop
for (let index = 0; index < subreddits.length; index++) {
  console.log(`Visit reddit.com/r/${subreddits[index]}`);
}

for (let index = 0; index < seatingChart.length; index++) {
  const row = seatingChart[index];

  for (let index = 0; index < row.length; index++) {
    console.log(row[index]);
  }
}
console.log("======");

// Iterate Using a "for..of" loop
for (const subreddit of subreddits) {
  console.log(`Visit reddit.com/r/${subreddit}`);
}

for (const row of seatingChart) {
  for (const student of row) {
    console.log(student);
  }
}

for (const char of "this is a test") {
  console.log(char);
}
console.log("======");

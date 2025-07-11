// Nested loops

// Outer loop
// for (let i = 1; i <= 10; i++) {
//   console.log(`i is ${i}`);

//   // Inner loop
//   for (let j = 1; j <= 3; j++) {
//     console.log(`   j is ${j}`);
//   }
// }

// Iterate through nested arrays
const seatingChart = [
  ["Kristen", "Erik", "Namita"],
  ["Geoffrey", "Juanita", "Antonio", "Kevin"],
  ["Yuma", "Sakura", "Jack", "Erika"],
];

for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  console.log(`Row #${i + 1}`);

  for (let j = 0; j < row.length; j++) {
    console.log(`Seat #${j + 1}: ${row[j]}`);
  }
}

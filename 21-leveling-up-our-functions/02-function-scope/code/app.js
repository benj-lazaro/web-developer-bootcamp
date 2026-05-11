// Global scope
let totalEggs = 0;

function collectEggs() {
  totalEggs = 6;
}

console.log(`Total Eggs: ${totalEggs}`);

collectEggs();
console.log(`Total Eggs: ${totalEggs}`);
console.log("-------------------");

let bird = "Scarlet Macaw";

function birdWatch() {
  // Function scope
  let bird = "Great Blue Heron";

  console.log(`Bird watch: ${bird}`);
}

console.log(`Bird watch: ${bird}`);
birdWatch();

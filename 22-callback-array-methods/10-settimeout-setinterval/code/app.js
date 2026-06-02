// "setTimeout" method
console.log("Hello!");
setTimeout(() => console.log("Are you still there?"), 2000);

// "setInterval" method
const id = setInterval(() => console.log(Math.random()), 3000);

// Using the "setTimout" to stop the "setInterval" method
setTimeout(() => clearInterval(id), 10000);

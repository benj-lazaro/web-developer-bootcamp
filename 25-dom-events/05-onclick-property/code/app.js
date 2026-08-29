function scream() {
  console.log("Hey!");
  console.log("Stop touching me!");
}

// Selecting the 2nd HTML element <button> & assigning events
const btn = document.querySelector("#v2");
btn.onclick = function () {
  console.log("You clicked me.");
  console.log("I hope it worked.");
};
btn.onmouseenter = scream;

// Selecting the HTML element <h1> & assigning events
const h1 = document.querySelector("h1");
h1.onclick = function () {
  alert("You have clicked the <h1> element.");
};
h1.onmouseenter = scream;

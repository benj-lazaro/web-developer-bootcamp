// Get the value of the property ".innerText" from the 1st matching HTML element <p>
const innerTextP = document.querySelector("p").innerText;
console.log(innerTextP);

// Get the value of the property ".textContent" from the 1st matching HTML element <p>
const textContentP = document.querySelector("p").textContent;
console.log(textContentP);

// Setting the property ".innerText" of ALL matching HTML element <a>
const allLinks = document.querySelectorAll("a");
console.log(allLinks);

// Replace the "inner text" of ALL HTML element <a>
for (let link of allLinks) {
  link.innerText = "I am a link";
}

// Setting the property ".innerText" w/ content containing embedded HTML element(s)
document.querySelector("h1").innerText = "<b>DANGER</b>";

// Setting the property ".innerHTML" w/ content containing embedded HTML element(s)
document.querySelector("h1").innerHTML = "<b>DANGER</b>";
document.querySelector("h1").innerHTML += "<sup>To the max</sup>";

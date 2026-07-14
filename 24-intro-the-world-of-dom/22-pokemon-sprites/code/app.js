// Source: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

// Iterate through a 151 still images from the baseURL
for (let i = 1; i <= 151; i++) {
  // Create a new HTML element <div>
  const pokemon = document.createElement("div");

  // Add the HTML attribute "class" w/ the pre-defined CSS Class selector
  pokemon.classList.add("pokemon");

  // Create a new HTML element <span> & assign the image's URL id
  const label = document.createElement("span");
  label.innerText = `#${i}`;

  // Create a new HTML element <img> w/ the corresponding URL
  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;

  // Add the HTML elements <img> & <span> to the parent element <div> as children
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);

  // Append the HTML element <div> to the parent element <section>
  container.appendChild(pokemon);
}

const cat = {
  name: "Bruns",
  color: "dirty white",
  breed: "half-persian",
  meow() {
    // Keyword "this" refers to the object "cat"
    console.log("This is ", this);
    console.log(`${this.name} says "Meow!"`);
  },
};

// Access object method
cat.meow();

// Assigns the method "meow()" of the object "cat"
const meow2 = cat.meow;

// Keyword "this" does NOT refer to the object "cat" but of the object "Window" instead
meow2();

// This function gets added to the "Window" object
function scream() {
  console.log("I scream!!!");
}

// Called as a standalone function
scream();

// Called as a function of the object "Window"
window.scream();

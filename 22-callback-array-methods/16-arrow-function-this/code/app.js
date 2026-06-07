// Object w/ a method using a regular function
const person1 = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullname: function () {
    return `${this.firstName} ${this.lastName}`; // Keyword "this" refers to "person1"
  },
  shoutName: function () {
    setTimeout(function () {
      console.log(this); // Keyword "this" refers to "Window" due to changes in execution context
      console.log(this.fullname()); // Flags a TypeError; fullname() doesn't exists in "Window"
    }, 3000);
  },
};

person1.shoutName();

// Object w/ a method using an Arrow function
const person2 = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullname: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this); // Keyword "this" refers to "person2"; the scope where it was created in
      console.log(this.fullname());
    }, 6000);
  },
};

person2.shoutName();

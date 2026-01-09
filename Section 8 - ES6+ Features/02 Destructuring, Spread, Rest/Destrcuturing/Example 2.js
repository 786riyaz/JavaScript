// The order of the properties does not matter:

// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {lastName, firstName} = person;

console.log(person)
console.log("First Name :: ", firstName);
console.log("Last Name :: ", lastName);

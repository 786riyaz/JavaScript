/*
https://www.w3schools.com/js/js_destructuring.asp
The destructuring assignment syntax unpack object properties into variables:
let {firstName, lastName} = person;

It can also unpack arrays and any other iterables:
let [firstName, lastName] = person;
*/

// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };
  
  // Destructuring
  let {firstName, lastName} = person;

  console.log(person)
  console.log("First Name :: ", firstName);
  console.log("Last Name :: ", lastName);

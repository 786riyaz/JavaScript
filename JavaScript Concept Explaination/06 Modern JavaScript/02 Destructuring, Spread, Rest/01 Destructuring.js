// Destructuring: Extracting values from arrays/objects into distinct variables.

const person = { name: 'Zion', age: 30 };
const colors = ['red', 'green', 'blue'];

const { name, age } = person; // Object Destructuring
const [first, , third] = colors; // Array Destructuring (skipping 'green')

console.log(name, first, third); // Output: Zion red blue
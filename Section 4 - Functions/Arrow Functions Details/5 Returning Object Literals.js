// When directly returning an object literal, wrap the literal in parantheses to differentiate it from the function block.

const makePerson = (firstName, lastName) => ({first:firstName, last:lastName});
console.log(makePerson("Riyaz","Pathan"));          // { first: 'Riyaz', last: 'Pathan' }
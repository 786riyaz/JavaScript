// Rest (`...`): Gathers remaining elements/properties into a new array/object. Used in function signatures or destructuring.

// Example (Function Arguments):

function sumAll(first, ...rest) { // 'rest' collects all remaining arguments
  return first + rest.reduce((acc, val) => acc + val, 0);
}
console.log(sumAll(1, 2, 3, 4)); // first=1, rest=[2, 3, 4]. Output: 10
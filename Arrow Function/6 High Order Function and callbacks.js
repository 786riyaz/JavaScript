// Arrow functions are particularly popular when used as short callbacks.

const numbers = [1,2,3,4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);           // [ 2, 4, 6, 8 ]
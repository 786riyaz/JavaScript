let array1 = ["a","b","c"];
let array2 = ["a","c","e"];

console.log(array1.includes("1"));      // false
console.log(array1.includes("A"));      // false
console.log(array1.includes("a"));      // true
console.log(array1.includes("e"));      // false
console.log(array1.includes("E"));      // false
console.log(array1.includes("Z"));      // false
console.log(array1.includes("z"));      // false
console.log();
console.log(array2.includes("1"));      // false
console.log(array2.includes("A"));      // false
console.log(array2.includes("a"));      // true
console.log(array2.includes("e"));      // true
console.log(array2.includes("E"));      // false
console.log(array2.includes("Z"));      // false
console.log(array2.includes("z"));      // false
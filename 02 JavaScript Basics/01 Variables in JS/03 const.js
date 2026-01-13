console.log("Demonstrating the use of const in JavaScript");
const PI = 3.14159;
console.log("The value of PI is:", PI);

// SyntaxError: Missing initializer in const declaration
const test;         // 'const' declarations must be initialized
test = 1;
console.log(test);
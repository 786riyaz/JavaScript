let PI = Math.PI;                   // 3.141592653589793

Math.round(4.4);                    // 4
Math.round(4.5);                    // 5
Math.round(4.6);                    // 5

Math.ceil(3.14);                    // 4
Math.ceil(3.99);                    // 4
Math.floor(3.14);                   // 3
Math.floor(3.99);                   // 3

Math.pow(2, 8);                      // 256 ---> 2^8
Math.sqrt(49);                      // 7  --->  square root
Math.abs(-3.14);                    // 3.14     absolute, positive value

Math.min(0, 3, 5, -1, -5, 100);     // -5   Minimum Number
Math.min(0, 3, 5, -1, -5, 100);     // 100      Maximum Number

Math.log(1);                        // 0    Natural Logarithm
Math.exp(1);                        // 2.718281828459045 pow(E,x)

Math.random();                      // Random Number between 0 to 1
Math.floor(Math.random() * 10);     // Random integer from 1 to 5

console.log("Sine of 0 degrees is: " + Math.sin(0).toFixed(2));
console.log("Sine of 30 degrees is: " + Math.sin(Math.PI / 6).toFixed(2));
console.log("Sine of 90 degrees is: " + Math.sin(Math.PI / 2).toFixed(2));
console.log("Sine of 180 degrees is: " + Math.sin(Math.PI).toFixed(2));
console.log("Sine of 210 degrees is: " + Math.sin(Math.PI * 3 / 2).toFixed(2));
console.log("Sine of 360 degrees is: " + Math.sin(Math.PI * 2).toFixed(2));
console.log("");

console.log("Cosine of 0 degrees is: " + Math.cos(0).toFixed(2));
console.log("Cosine of 30 degrees is: " + Math.cos(Math.PI / 6).toFixed(2));
console.log("Cosine of 90 degrees is: " + Math.cos(Math.PI / 2).toFixed(2));
console.log("Cosine of 180 degrees is: " + Math.cos(Math.PI).toFixed(2));
console.log("Cosine of 210 degrees is: " + Math.cos(Math.PI * 3 / 2).toFixed(2));
console.log("Cosine of 360 degrees is: " + Math.cos(Math.PI * 2).toFixed(2));
// OTHERS :: tan, atan, asin, acos
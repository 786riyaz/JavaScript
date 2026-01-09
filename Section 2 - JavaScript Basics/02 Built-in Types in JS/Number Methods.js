let PI = Math.PI;

console.log(PI.toFixed(0));                     // 3
console.log(PI.toFixed(1));                     // 3.1
console.log(PI.toFixed(2));                     // 3.14
console.log(PI.toFixed(3));                     // 3.142

console.log(PI.toPrecision(1));                 // 3
console.log(PI.toPrecision(2));                 // 3.1
console.log(PI.toPrecision(3));                 // 3.14

console.log(parseInt("3.5 months"));            // 3
console.log(parseFloat("3.5 months"));          // 3.5

console.log(PI.valueOf());                      // 3.141592653589793
console.log(Number(PI));                        // 3.141592653589793
console.log(Number(true));                      // 1
console.log(Number(false));                     // 0
console.log(Number(new Date()));                // 1717918292663

console.log(Number.MAX_VALUE);                  // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);                  // 5e-324

console.log(Number.NEGATIVE_INFINITY);          // -Infinity
console.log(Number.POSITIVE_INFINITY);          // Infinity

console.log(Number.MAX_SAFE_INTEGER);           // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);           // -9007199254740991
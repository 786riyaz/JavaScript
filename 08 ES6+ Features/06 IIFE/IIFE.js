/*
IIFE (Immediately Invoked Function Expression)

A function that is executed immediately after it is defined.
  * **Purpose:** To create a **private scope** for variables, preventing them from polluting the global scope.
*/
(function() {
  const secretKey = '12345'; // Only visible inside this IIFE
  console.log('IIFE ran immediately.');
})();

// console.log(secretKey); // ❌ ReferenceError
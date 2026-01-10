/*
Null vs Undefined

Both denote the absence of a value, but in different contexts.

  * **`undefined`:**
      * A variable has been **declared but not assigned** a value.
      * A function implicitly returns this if it has no explicit `return` statement.
      * A non-existent object property.
  * **`null`:**
      * An **assignment value** that represents the intentional absence of any object value.
      * It is explicitly set by a programmer to mean "empty" or "unknown value."
*/

let a;
console.log(a);       // Output: undefined

a = null;
console.log(a);       // Output: null

console.log(typeof undefined); // Output: 'undefined'
console.log(typeof null);      // Output: 'object' (A known historical bug in JavaScript)
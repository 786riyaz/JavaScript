/*
Type Coercion (`==` vs `===`)

**Type Coercion** is JavaScript automatically converting types during operations, mainly with the loose equality operator (`==`).

  * **Loose Equality (`==`):** Converts operands to the same type *before* comparison.
      * `[] == false` is **true** because:
        1.  `[]` (array) converts to `''` (empty string).
        2.  `false` (boolean) converts to `0` (number).
        3.  `''` (string) converts to `0` (number).
        4.  $0 == 0$ is **true**.
  * **Strict Equality (`===`):** Compares value **and** type without coercion. This is the **preferred** operator.
      * `[] === false` is **false** because they are different types (Array vs. Boolean).


====================================================
 TYPE COERCION IN JAVASCRIPT  (==  vs  ===)
====================================================

JavaScript performs type coercion only with loose equality (==).
Strict equality (===) compares without coercion.

----------------------------------------------------
 1. LOOSE EQUALITY (==) → TYPE COERCION HAPPENS
----------------------------------------------------
Example:
    [] == false   // true

Why?

Step 1: Convert [] to a primitive
    String([]) → ""

Step 2: Convert false to number
    Number(false) → 0

Step 3: Convert "" to number
    Number("") → 0

Final comparison:
    0 == 0  → true
*/

console.log([] == false);     // true
console.log(String([]));      // ""
console.log(Number(false));   // 0
console.log(Number(""));      // 0


/*
----------------------------------------------------
 2. STRICT EQUALITY (===) → NO TYPE COERCION
----------------------------------------------------
[] === false is false because:
    - [] is an object
    - false is a boolean
Types are different → always false.
*/

console.log([] === false);    // false
console.log(typeof []);       // "object"
console.log(typeof false);    // "boolean"


/*
----------------------------------------------------
 MORE EXAMPLES OF TYPE COERCION
----------------------------------------------------
*/

// "0" == 0 → true (string turns into number)
console.log("0" == 0);        // true

// "" == 0 → true (empty string becomes 0)
console.log("" == 0);         // true

// null == undefined → true (special rule)
console.log(null == undefined);   // true

// null === undefined → false (different types)
console.log(null === undefined);  // false


/*
====================================================
 SUMMARY
====================================================

==  → Loose equality
      - Converts values to same type before comparison.
      - Example: "0" == 0 → true

=== → Strict equality
      - No conversion, compares value + type.
      - Example: "0" === 0 → false

BEST PRACTICE:
      Always prefer === unless you intentionally want coercion.
*/
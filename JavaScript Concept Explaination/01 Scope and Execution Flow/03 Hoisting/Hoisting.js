/*
Hoisting
**Hoisting** is JavaScript's mechanism where variable and function declarations are moved to the top of their scope during compilation.

  * **`var`:** The declaration is hoisted and initialized to **`undefined`**.

  * **`let`/`const`:** The declaration is hoisted, but they are not initialized. Attempting to access them before the declaration results in the **Temporal Dead Zone (TDZ)**, which throws a `ReferenceError`.

  * **Functions:** The entire function body is hoisted.
*/

console.log(varTest);   // Output: undefined (var is hoisted and initialized)
console.log(letTest); // ❌ ReferenceError: Cannot access 'letTest' before initialization (TDZ)

var varTest = 'I am var';
let letTest = 'I am let';

hoistedFunction(); // Output: I am a hoisted function!
// hoistedArrow();    // ❌ TypeError: hoistedArrow is not a function (function expressions are hoisted like variables)

function hoistedFunction() {
  console.log('I am a hoisted function!');
}

const hoistedArrow = () => {
  // ...
};

/*
HOISTING EXPLAINED (CLEAR TEXT FORMAT)

Hoisting is JavaScript's behavior where variable and function declarations
are moved to the top of their scope before the code starts executing.

However, different types of variables behave differently when hoisted.

------------------------------------------------------------
1. VAR HOISTING
------------------------------------------------------------
- `var` is hoisted AND automatically initialized to `undefined`.
- Because it is initialized, you can access it before the actual line
  where it appears in the code.

Example:
console.log(a);  // Output: undefined
var a = 10;

What actually happens internally:
var a;           // hoisted and initialized
console.log(a);  // undefined
a = 10;          // assignment happens here


------------------------------------------------------------
2. LET / CONST HOISTING
------------------------------------------------------------
- `let` and `const` are also hoisted.
- BUT they are NOT initialized during hoisting.
- Until the code execution reaches their declaration line,
  the variable is in the "Temporal Dead Zone" (TDZ).
- Accessing the variable in the TDZ causes a ReferenceError.

Example:
console.log(b);   // ❌ ReferenceError (b is in TDZ)
let b = 20;

What internally happens:
let b;            // hoisted but NOT initialized (in TDZ)
console.log(b);   // ❌ cannot access before initialization
b = 20;           // TDZ ends here → now initialized


------------------------------------------------------------
3. FUNCTION HOISTING
------------------------------------------------------------
There are two types of functions:

A) Function Declarations
- Fully hoisted (both name + function body).
- Can be called before their definition.

Example:
greet();          // Output: Hello!
function greet() {
  console.log("Hello!");
}


B) Function Expressions / Arrow Functions
- These behave like variables declared with let/const.
- Their variable name is hoisted but NOT initialized.
- Calling them before initialization gives an error.

Example:
sayHi();          // ❌ TypeError: sayHi is not a function
const sayHi = () => {
  console.log("Hi");
};


------------------------------------------------------------
4. WHY LET/CONST GIVE ReferenceError EVEN IF HOISTED?
------------------------------------------------------------
Because hoisting does two things:
1. RESERVE memory for the variable (declaration is known)
2. INITIALIZE the variable (var = yes, let/const = no)

For let/const:
- Memory is reserved at the top.
- But the variable remains uninitialized until the actual line.
- This uninitialized period is called the TDZ.
- Accessing the variable inside the TDZ causes ReferenceError.

Visualization:

START OF SCOPE
  |
  | (TDZ: variable exists but not initialized)
  | console.log(x);  → ReferenceError
  |
  | let x = 50;  ← TDZ ends here
  |
AFTER DECLARATION
  |
  | console.log(x);  → works fine (50)


------------------------------------------------------------
SUMMARY TABLE
------------------------------------------------------------

| Keyword | Hoisted? | Initialized? | Accessible before declaration? |
|---------|----------|--------------|--------------------------------|
| var     | Yes      | Yes (undefined) | Yes                          |
| let     | Yes      | No              | No (ReferenceError)          |
| const   | Yes      | No              | No (ReferenceError)          |
| function declaration | Yes | Yes | Yes                            |
| function expression / arrow | Yes | No | No (TypeError)           |

------------------------------------------------------------
MAIN REASON FOR ERROR
------------------------------------------------------------
Even though `let` is hoisted, it is NOT initialized during hoisting.
It stays in the Temporal Dead Zone until its declaration line.
Accessing it before that line gives:

ReferenceError: Cannot access 'variableName' before initialization

*/
// Example (Creating a multiplier)
// A function that adds three arguments
const add = a => b => c => a + b + c;

// Example Usage:
console.log(add(10)(20)(30)); // Output: 60

// Currying allows partial application (creating a new specialized function)
const addTen = add(10); // 'addTen' remembers 'a' = 10
const addTenAndTwenty = addTen(20); // 'addTenAndTwenty' remembers 'a'=10 and 'b'=20

console.log(addTen(5)(5));     // Output: 20 (10 + 5 + 5)
console.log(addTenAndTwenty(5)); // Output: 35 (10 + 20 + 5)

/*Currying
**Currying** is a technique that transforms a function that takes multiple arguments into a sequence of functions, each taking a single argument.

  * **Detail:** It creates specialized functions that can be reused and composed, often seen in functional programming.
*/

/*
Currying
--------

Currying is a technique where a function that normally takes multiple parameters
is broken down into a series (chain) of functions.  
Each function takes **only one argument** and returns another function until
all arguments are received.

Let’s break down your example step-by-step.


1) Defining a curried function
------------------------------

const add = a => b => c => a + b + c;

• "a => b => c => a + b + c" means:
    - The first function takes argument 'a'
    - It returns another function that takes argument 'b'
    - That returns another function that takes argument 'c'
    - That returns the final result: a + b + c

It is the same as writing:

function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}


2) Using the curried function
-----------------------------

console.log(add(10)(20)(30)); // Output: 60

Explanation:
• add(10) → returns a new function that remembers a = 10
• add(10)(20) → the second function runs, remembers b = 20
• add(10)(20)(30) → the third function runs, remembers c = 30
• Then it returns 10 + 20 + 30 = 60


3) Partial Application (Reusing stored arguments)
-------------------------------------------------

const addTen = add(10);

• addTen becomes a function where 'a' is permanently remembered as 10.
• Now addTen = b => c => 10 + b + c

const addTenAndTwenty = addTen(20);

• addTen(20) fixes 'b' also.
• Now addTenAndTwenty = c => 10 + 20 + c


4) Using partially applied functions
------------------------------------

console.log(addTen(5)(5));

• addTen(5) → b = 5
• addTen(5)(5) → c = 5
• Output → 10 + 5 + 5 = 20


console.log(addTenAndTwenty(5));

• addTenAndTwenty(5) → c = 5
• Output → 10 + 20 + 5 = 35


Summary
-------

• Currying breaks a function (a, b, c) into three nested functions: a → b → c
• Each argument is taken one-by-one.
• You can "store" earlier arguments and reuse them anytime.
• It helps in making reusable, flexible functions in JavaScript.
*/


/*

can we pass less argument like add(5) or add (5)(4)


Short answer: **Yes, you can *call* them with fewer arguments — but the result will be another function, not the final number.**
Because a curried function always expects **one argument at a time** until all arguments are provided.

Let me explain clearly.

---

## ✅ What happens if you call fewer arguments?

### **1) Calling only one argument**

```js
const x = add(5);
```

What happens?

* Only `a = 5` is provided.
* `add(5)` returns a **function that expects b**.

So:

```js
console.log(x);      
// Output: function(b) { ... }
```

It is NOT a number yet, because you haven’t given `b` and `c`.

---

### **2) Calling two arguments**

```js
const y = add(5)(4);
```

What happens?

* `a = 5`
* `b = 4`
* Still missing `c`

So:

```js
console.log(y);
// Output: function(c) { ... }
```

It is still a function waiting for the last argument `c`.

---

### **3) You only get the final number when you give all 3 arguments**

```js
add(5)(4)(3); // gives the output (5 + 4 + 3 = 12)
```

---

## 📌 Final Summary

| Call           | Meaning               | Output                             |
| -------------- | --------------------- | ---------------------------------- |
| `add(5)`       | only `a` given        | returns a function waiting for `b` |
| `add(5)(4)`    | `a` and `b` given     | returns a function waiting for `c` |
| `add(5)(4)(3)` | all 3 arguments given | returns final result               |

---

If you want, I can also show you **how to make a flexible curried function** that automatically handles missing arguments like `add(5)` or `add(5)(4)` and detects when to compute the result.

*/
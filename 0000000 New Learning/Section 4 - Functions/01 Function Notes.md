# ✅ JavaScript Functions & Advanced Concepts — Complete Explanation

---

## 1️⃣ Function Declarations & Function Expressions

*(With parameters and empty functions)*

---

## 1.1 Function Declaration

### Meaning

A **function declaration** defines a named function using the `function` keyword.

### Syntax

```js
function functionName(parameters) {
  // function body
}
```

### Example (With Parameters)

```js
function add(a, b) {
  return a + b;
}

add(2, 3); // 5
```

### Example (Empty Function)

```js
function sayHello() {
}

sayHello(); // undefined
```

✔ Function exists even if body is empty
✔ Returns `undefined` by default

---

### Key Characteristics

* **Hoisted** (can be used before declaration)
* Has its own `this`
* Preferred for reusable logic

---

## 1.2 Function Expression

### Meaning

A **function expression** assigns a function to a variable.

### Syntax

```js
const fn = function(parameters) {
  // function body
};
```

### Example

```js
const multiply = function(a, b) {
  return a * b;
};

multiply(2, 3); // 6
```

---

### Example (Empty Function Expression)

```js
const test = function() {};

test(); // undefined
```

---

### Key Differences (Interview Important)

| Feature               | Declaration | Expression |
| --------------------- | ----------- | ---------- |
| Hoisting              | ✅ Yes       | ❌ No       |
| Can be anonymous      | ❌ No        | ✅ Yes      |
| Use before definition | ✅           | ❌          |

---

## 2️⃣ Arrow Functions

---

### Meaning

Arrow functions are **shorter syntax** for function expressions and **do not have their own `this`**.

---

### Syntax

```js
const fn = (params) => {
  return value;
};
```

---

### Example

```js
const add = (a, b) => a + b;

add(3, 4); // 7
```

---

### Arrow Function with One Parameter

```js
const square = x => x * x;

square(4); // 16
```

---

### Arrow Function (No Parameters)

```js
const greet = () => "Hello";

greet(); // "Hello"
```

---

### ⚠️ Important Limitation

Arrow functions **do NOT have**:

* `this`
* `arguments`
* `prototype`

```js
const obj = {
  name: "Riyaz",
  getName: () => this.name
};

obj.getName(); // undefined
```

---

### When to Use Arrow Functions

✔ Callbacks
✔ Functional programming
❌ Object methods

---

## 3️⃣ Default Parameters in Functions

---

### Meaning

Default parameters allow you to **set default values** if arguments are missing or `undefined`.

---

### Syntax

```js
function fn(param = defaultValue) {}
```

---

### Example

```js
function greet(name = "Guest") {
  return `Hello ${name}`;
}

greet();        // "Hello Guest"
greet("Riyaz"); // "Hello Riyaz"
```

---

### Default with Multiple Parameters

```js
function add(a = 0, b = 0) {
  return a + b;
}

add();       // 0
add(5);      // 5
add(5, 5);   // 10
```

---

### Important Note

Default values apply **only when argument is `undefined`**, not `null`.

```js
greet(null); // "Hello null"
```

---

## 4️⃣ Higher-Order Functions & Callbacks

---

## 4.1 Higher-Order Functions (HOF)

### Meaning

A **higher-order function**:

* Takes **another function as argument**, OR
* Returns a function

---

### Example (Function as Argument)

```js
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

calculate(5, 3, add); // 8
```

---

### Example (Function Returning Function)

```js
function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}

const double = multiplier(2);
double(5); // 10
```

---

### Common Built-in HOFs

* `map`
* `filter`
* `reduce`
* `forEach`

---

## 4.2 Callback Functions

### Meaning

A **callback** is a function **passed as an argument** and executed later.

---

### Example

```js
function greet(name, callback) {
  callback();
  console.log(name);
}

greet("Riyaz", () => console.log("Hello"));
// Output:
// Hello
// Riyaz
```

---

### Asynchronous Callback Example

```js
setTimeout(() => {
  console.log("Executed later");
}, 1000);
```

---

## 5️⃣ Scope, Closures, and IIFE

---

## 5.1 Scope

### Meaning

Scope determines **where variables are accessible**.

---

### Types of Scope

| Scope    | Keyword               |
| -------- | --------------------- |
| Global   | `var`, `let`, `const` |
| Function | `var`                 |
| Block    | `let`, `const`        |

---

### Example

```js
let x = 10;

function test() {
  let y = 20;
  console.log(x); // accessible
}

console.log(y); // ❌ Error
```

---

## 5.2 Closures (Very Important)

### Meaning

A **closure** is created when a function **remembers variables from its outer scope**, even after the outer function finishes execution.

---

### Example

```js
function outer() {
  let count = 0;

  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3
```

✔ `inner` remembers `count`
✔ `count` is not destroyed

---

### Real-World Use

* Data privacy
* Counters
* Memoization

---

## 5.3 IIFE (Immediately Invoked Function Expression)

---

### Meaning

An IIFE is a function that **runs immediately after it is defined**.

---

### Syntax

```js
(function() {
  // code
})();
```

---

### Example

```js
(function() {
  console.log("IIFE executed");
})();
// Output: "IIFE executed"
```

---

### With Parameters

```js
(function(name) {
  console.log("Hello " + name);
})("Riyaz");
// Output: Hello Riyaz
```

---

### Why IIFE Is Used

✔ Avoid global pollution
✔ Create private scope

---

## 6️⃣ Currying

---

### Meaning

**Currying** transforms a function with multiple arguments into a **series of functions each taking one argument**.

---

### Normal Function

```js
function add(a, b, c) {
  return a + b + c;
}

add(1, 2, 3); // 6
```

---

### Curried Version

```js
function curryAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

curryAdd(1)(2)(3); // 6
```

---

### Arrow Function Version

```js
const curryAdd = a => b => c => a + b + c;

curryAdd(1)(2)(3); // 6
```

---

### Why Currying Is Useful

✔ Partial application
✔ Functional composition
✔ Cleaner reusable logic

---

## 🧠 Final Interview Summary

| Topic                 | Key Point                 |
| --------------------- | ------------------------- |
| Function Declaration  | Hoisted                   |
| Function Expression   | Not hoisted               |
| Arrow Function        | No own `this`             |
| Default Params        | Used when `undefined`     |
| Higher-Order Function | Takes/returns function    |
| Callback              | Passed & executed later   |
| Closure               | Remembers outer variables |
| IIFE                  | Runs immediately          |
| Currying              | One argument at a time    |
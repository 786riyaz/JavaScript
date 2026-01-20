In JavaScript, **code pollution** (more precisely called **namespace pollution** or **global scope pollution**) refers to the practice of unintentionally introducing variables, functions, or objects into a shared scope—most commonly the **global scope**—thereby increasing the risk of **naming collisions, side effects, bugs, and maintenance difficulties**.

---

## What Code (Namespace) Pollution Means

Code pollution occurs when multiple, unrelated pieces of code share the same execution context and interfere with one another because they:

* Define identifiers in the global scope
* Mutate shared objects unexpectedly
* Lack proper encapsulation or isolation

JavaScript historically made this easy because **everything declared outside a function was global** (before ES6 modules).

---

## Common Causes of Code Pollution

### 1. Accidental Global Variables

```js
function calculate() {
  total = 100; // ❌ becomes a global variable
}
```

This happens when variables are declared **without `let`, `const`, or `var`**.

---

### 2. Excessive Use of Global Variables

```js
var config = {};
var user = {};
```

If multiple scripts define `config` or `user`, they overwrite each other.

---

### 3. Modifying Built-in Prototypes

```js
Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b, 0);
};
```

This affects **all arrays**, including those in third-party libraries.

---

### 4. Large Script Files Without Modularization

All logic placed in one file or scope increases coupling and reduces maintainability.

---

### 5. Shared Mutable State

```js
window.appState = {};
```

Any script can change this, often unpredictably.

---

## Why Code Pollution Is Dangerous

* Name collisions between libraries
* Hard-to-debug side effects
* Unexpected runtime behavior
* Reduced readability and maintainability
* Difficult testing and refactoring

In large applications, this becomes a **critical architectural risk**.

---

## How to Prevent Code Pollution

### 1. Use Block-Scoped Declarations

```js
let count = 0;
const MAX = 10;
```

---

### 2. Encapsulate Code Using Functions or IIFE

```js
(function () {
  const secret = 42;
})();
```

---

### 3. Use ES Modules (Best Practice)

```js
// math.js
export function add(a, b) {
  return a + b;
}
```

```js
// app.js
import { add } from "./math.js";
```

Each module has its **own scope**, preventing pollution.

---

### 4. Avoid Modifying Global Objects

Never extend native prototypes unless absolutely necessary.

---

### 5. Use Frameworks and Modern Build Tools

Frameworks like React, Angular, or Vue enforce component-level isolation and modularity.

---

## Interview-Ready One-Line Definition

> **Code pollution in JavaScript refers to the unintended contamination of the global or shared scope with variables, functions, or side effects, leading to conflicts, bugs, and reduced maintainability.**

---

If you want, I can also explain:

* Code pollution vs side effects
* How React and Next.js prevent code pollution
* Real interview questions and answers on this topic

Just let me know.

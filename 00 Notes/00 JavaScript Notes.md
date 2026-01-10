# 📘 JavaScript Revision Notes (Basic to Advanced)

---

## 1. JavaScript Execution Model

### Execution Types

* **Synchronous**
* **Promise-based (Microtasks)**
* **setTimeout / setInterval (Macrotasks)**

```text
sync → promise → setTimeout
```

### Event Loop Order Example

```js
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
```

**Output**

```text
Start → End → Promise → Timeout
```

---

## 2. Variables & Scope

### `var`

* Function scoped
* Hoisted with `undefined`
* Attached to `window` (browser)

```js
var x = 10;
console.log(window.x); // 10
```

### `let` & `const`

* Block scoped
* Hoisted but not initialized
* Exist in Temporal Dead Zone (TDZ)

### Scope Types

* Global Scope
* Function Scope (`var`)
* Block Scope (`let`, `const`)

---

## 3. Temporal Dead Zone (TDZ)

Applies to `let` and `const`. Variables exist but cannot be accessed before declaration.

```js
console.log(a); // ReferenceError
let a = 10;
```

---

## 4. Data Types & Type Coercion

```js
13 == "13"   // true
13 === "13"  // false
[] == false   // true
```

### `NaN` Behavior

```js
NaN === NaN   // false
isNaN(NaN)    // true
```

### Null vs Undefined

* `undefined`: declared but not assigned
* `null`: intentional absence of value

---

## 5. Operators

### Exponent Operator

```js
2 ** 3; // 8
```

### Logical OR vs Nullish Coalescing

```js
const a = data || 50;
const b = data ?? 50;
```

---

## 6. Functions Fundamentals

### Function Types

* Pure Function
* Impure Function
* Arrow Function

### IIFE (Immediately Invoked Function Expression)

```js
(function () {
  console.log("IIFE");
})();
```

---

## 7. Closures & Lexical Scope

A closure allows a function to remember variables from its lexical scope.

```js
function counter() {
  let count = 0;
  return () => ++count;
}
const inc = counter();
inc(); // 1
inc(); // 2
```

---

## 8. `this` Keyword

Depends on execution context.

```js
const obj = {
  name: 'JS',
  greet: () => console.log(this.name) // undefined
};
```

---

## 9. Call, Apply & Bind

Used to explicitly control function execution context.

---

## 10. Currying

```js
const add = a => b => c => a + b + c;
add(1)(2)(3); // 6
```

```js
const addNumber = a => b => a + b;
addNumber(3)(4); // 7
```

---

## 11. Arrays & Iteration Methods

### forEach

```js
arr.forEach(val => console.log(val + 10));
```

### map

```js
numbers.map(num => num * 2);
```

### filter

```js
numbers.filter(num => num % 2 === 0);
```

### reduce

```js
numbers.reduce((acc, curr) => acc + curr, 0);
```

### some & every

```js
arr.some(val => val < 35);
arr.every(val => val % 2 === 0);
```

### flat

```js
nestedArray.flat(2);
```

---

## 12. Objects & Utilities

### Destructuring (Including Special Keys)

```js
const user = { "first-name": "Riyaz" };
const { "first-name": firstName } = user;
```

### Spread Operator

```js
const arr2 = [...arr];
```

### Object Utility Methods

```js
Object.keys(obj);
Object.values(obj);
Object.entries(obj);
```

```js
Object.entries(course).forEach(([key, value]) => {
  console.log(key, value);
});
```

---

## 13. Prototypes & Inheritance

* Prototype chain
* `Object.create()`

---

## 14. Asynchronous JavaScript

### Promises

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(30), 2000);
});
```

```js
waitingForDataToUpdate
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

### Async / Await (Fetch API)

```js
async function fetchData() {
  const res = await fetch("https://api.github.com/users/nykz");
  if (!res.ok) throw new Error(res.status);
  return await res.json();
}
```

---

## 15. DOM Manipulation

### DOM Selection

```js
document.getElementById('id');
document.getElementsByClassName('class');
document.getElementsByTagName('h1');
document.querySelector('.container #special');
document.querySelectorAll('.container #special');
```

### Creating Elements

```js
const button = document.createElement('button');
button.textContent = 'Click';
button.addEventListener('click', () => alert('Clicked'));
document.body.appendChild(button);
```

---

## 16. Events & Event Delegation

```js
button.addEventListener('click', event => {
  alert('Button clicked');
});
```

### Common Events

* click
* input
* mouseover
* mousedown

---

## 17. Forms & Input Handling

### FormData API

```js
const formData = new FormData(formElement);
formData.get('username');
```

### Input Event

```js
input.addEventListener('input', () => {
  console.log(input.value);
});
```

---

## 18. Web Storage APIs

### Local Storage

```js
localStorage.setItem('username', 'Riyaz');
localStorage.getItem('username');
localStorage.removeItem('username');
localStorage.clear();
```

### Session Storage

```js
sessionStorage.setItem('username', 'Riyaz');
sessionStorage.getItem('username');
sessionStorage.removeItem('username');
sessionStorage.clear();
```

---

## 19. ES6+ Features

* Modules (`import` / `export`)
* Optional Chaining (`?.`)
* Symbols
* Generators & Iterators

```js
export const greet = () => console.log('Hello');
```

```js
import { greet } from './features.js';
```

```js
const id = Symbol('id');
```

---

## 20. Node.js Specific

### `process.stdout.write`

```js
process.stdout.write('Hello ');
process.stdout.write('World');
```

---

## 21. Performance & Best Practices

* Debouncing & Throttling
* Event Delegation
* Avoid memory leaks
* Prefer pure functions
* Shallow vs Deep Copy (`structuredClone`)

---

## 22. Interview-Oriented Checklist

* Hoisting
* Scope
* Closures
* Event Loop
* Promises vs Async/Await
* Prototype Chain
* Type Coercion
* Memory Management

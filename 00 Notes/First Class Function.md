## 1️⃣ First-Class Function

### Definition

> A function is **first-class** if it can be **treated like any other value**.

In JavaScript, **functions are first-class citizens**.

### What This Means

Functions can be:

* Assigned to variables
* Passed as arguments
* Returned from other functions
* Stored in arrays/objects

### Example

```js
function greet() {
  return "Hello";
}

const sayHello = greet;      // assigned to variable
console.log(sayHello());    // Hello
```

### Why It Matters

First-class functions enable:

* Callbacks
* Closures
* Higher-order functions
* Functional programming
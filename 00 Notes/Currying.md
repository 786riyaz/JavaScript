## 1️⃣ What Is Currying?

### Definition

> **Currying** is a functional programming technique where a function that takes **multiple arguments** is transformed into a sequence of **functions that each take one argument**.

### Normal Function

```js
function add(a, b, c) {
  return a + b + c;
}
```

### Curried Version

```js
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

add(1)(2)(3); // 6
```

Each function:

* Takes **one argument**
* Returns another function
* Uses **closure** to remember previous arguments

---

## 2️⃣ Why Currying Is Useful

### 1. Function Reusability

```js
const multiply = a => b => a * b;

const double = multiply(2);
const triple = multiply(3);
```

### 2. Partial Application

```js
const withTax = tax => price => price + price * tax;
```

### 3. Cleaner Composition

* Makes functions easier to combine
* Common in functional libraries

---

## 3️⃣ Currying Uses Closures

```js
function greet(greeting) {
  return function (name) {
    return `${greeting}, ${name}`;
  };
}
```

* `greeting` is remembered via **closure**
* `name` is supplied later
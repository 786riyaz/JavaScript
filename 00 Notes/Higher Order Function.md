## 3️⃣ Higher-Order Function (HOF)

### Definition

> A **higher-order function** is a function that **accepts another function as an argument, returns a function, or both**.

### Example (Function as Argument)

```js
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

calculate(2, 3, add);
```

### Example (Function as Return Value)

```js
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
```
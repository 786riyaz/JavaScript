# ✅ Rest vs Spread Operator in JavaScript

---

## 1️⃣ Key Idea (One-Line Definition)

| Operator   | Meaning               |
| ---------- | --------------------- |
| **Spread** | **Expands** elements  |
| **Rest**   | **Collects** elements |

---

## 2️⃣ Syntax Difference

* **Spread** → used while **calling / creating**
* **Rest** → used while **receiving / defining**

---

## 3️⃣ Spread Operator (`...`) — Expand Values

### Definition

The **spread operator** expands an iterable (array, object, string) into **individual elements**.

---

### Spread in Arrays

```js
let a = [1, 2];
let b = [...a, 3, 4];

// b = [1, 2, 3, 4]
```

---

### Spread in Objects

```js
let user = { name: "Riyaz" };
let details = { ...user, age: 25 };

// details = { name: "Riyaz", age: 25 }
```

---

### Spread in Function Calls

```js
function add(a, b, c) {
  return a + b + c;
}

let nums = [1, 2, 3];
add(...nums); // 6
```

---

### Spread in Strings

```js
[..."JS"]; // ["J", "S"]
```

---

### Spread Summary

| Feature   | Spread                          |
| --------- | ------------------------------- |
| Direction | Expands                         |
| Used in   | Function calls, arrays, objects |
| Converts  | Iterable → individual values    |

---

## 4️⃣ Rest Operator (`...`) — Collect Values

### Definition

The **rest operator** collects multiple values into **a single array**.

---

### Rest in Function Parameters

```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3); // 6
```

➡️ All arguments are collected into `numbers`.

---

### Rest in Destructuring (Arrays)

```js
let [a, b, ...rest] = [1, 2, 3, 4];

// a = 1
// b = 2
// rest = [3, 4]
```

---

### Rest in Destructuring (Objects)

```js
let { name, ...rest } = { name: "Riyaz", age: 25, city: "Delhi" };

// name = "Riyaz"
// rest = { age: 25, city: "Delhi" }
```

---

### Rest Summary

| Feature   | Rest                               |
| --------- | ---------------------------------- |
| Direction | Collects                           |
| Used in   | Function parameters, destructuring |
| Converts  | Multiple values → array            |

---

## 5️⃣ Core Differences (Interview Table)

| Feature      | Spread                   | Rest                      |
| ------------ | ------------------------ | ------------------------- |
| Purpose      | Expand values            | Collect values            |
| Position     | Right side               | Left side                 |
| Used in      | Function calls, literals | Parameters, destructuring |
| Result       | Individual values        | Array                     |
| Mutates data | ❌ No                     | ❌ No                      |

---

## 6️⃣ Same Syntax, Different Meaning

```js
function test(...rest) {   // REST
  console.log(rest);
}

test(...[1, 2, 3]);       // SPREAD
// rest = [1, 2, 3]
```

✔ Meaning depends on **context**, not syntax.

---

## 7️⃣ Common Mistakes

❌ Using rest in function call
❌ Using spread in function parameter
❌ Assuming both return arrays
❌ Forgetting rest must be **last parameter**

```js
function fn(a, ...b, c) {} // ❌ Error
```

---

## 8️⃣ Interview-Ready Definition

> The **spread operator** expands iterable values into individual elements, while the **rest operator** collects multiple values into a single array. Both use `...`, but their behavior depends on context.

---

## 9️⃣ One-Line Memory Trick

> **Spread spreads out. Rest gathers up.**
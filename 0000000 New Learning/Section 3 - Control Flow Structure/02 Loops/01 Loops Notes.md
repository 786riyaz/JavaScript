# ✅ Loops in JavaScript — Complete Notes

Loops are used to **execute a block of code repeatedly** based on a condition or over a collection of values.

---

## 1️⃣ `for` Loop

### Purpose

Used when the **number of iterations is known in advance**.

---

### Syntax

```js
for (initialization; condition; increment/decrement) {
  // code to execute
}
```

---

### How It Works

1. Initialization runs once
2. Condition is checked
3. If `true`, loop body executes
4. Increment/decrement runs
5. Repeat until condition becomes `false`

---

### Example

```js
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
// Output:
// 1
// 2
// 3
```

---

### Best Use Case

✔ Counting loops
✔ Index-based iteration

---

## 2️⃣ `while` Loop

### Purpose

Used when the **number of iterations is not known**, but depends on a condition.

---

### Syntax

```js
while (condition) {
  // code
}
```

---

### How It Works

* Condition checked **before** loop body
* If condition is `false` initially, loop never runs

---

### Example

```js
let i = 1;

while (i <= 3) {
  console.log(i);
  i++;
}
// Output:
// 1
// 2
// 3
```

---

### Best Use Case

✔ Condition-controlled loops
✔ Reading data until condition fails

---

## 3️⃣ `do...while` Loop

### Purpose

Ensures the loop body **executes at least once**, even if condition is false.

---

### Syntax

```js
do {
  // code
} while (condition);
```

---

### How It Works

* Loop body runs first
* Condition checked **after execution**

---

### Example

```js
let i = 5;

do {
  console.log(i);
  i++;
} while (i < 3);

// Output:
// 5
```

---

### Key Difference

| Loop       | Condition Checked |
| ---------- | ----------------- |
| `while`    | Before execution  |
| `do-while` | After execution   |

---

## 4️⃣ `for...in` Loop

### Purpose

Used to **iterate over object keys (properties)**.

---

### Syntax

```js
for (let key in object) {
  // code
}
```

---

### Example (Object)

```js
let user = { name: "Riyaz", age: 25 };

for (let key in user) {
  console.log(key, user[key]);
}
// Output:
// name Riyaz
// age 25
```

---

### ⚠️ Important Notes

* Iterates over **keys**, not values
* Includes **enumerable properties**
* Not recommended for arrays (order not guaranteed)

---

### `for...in` with Array (Not Recommended)

```js
let arr = [10, 20, 30];

for (let i in arr) {
  console.log(i, arr[i]);
}
// i = index (string)
```

---

## 5️⃣ `for...of` Loop (ES6)

### Purpose

Used to **iterate over iterable values** (arrays, strings, maps, sets).

---

### Syntax

```js
for (let value of iterable) {
  // code
}
```

---

### Example (Array)

```js
let arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);
}
// Output:
// 10
// 20
// 30
```

---

### Example (String)

```js
for (let ch of "JS") {
  console.log(ch);
}
// Output:
// J
// S
```

---

### Best Use Case

✔ Arrays
✔ Strings
✔ Map / Set
✔ Cleaner than `for` loop

---

## 6️⃣ `break` Statement

### Purpose

Immediately **terminates the loop**.

---

### Example

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}
// Output:
// 1
// 2
```

---

## 7️⃣ `continue` Statement

### Purpose

Skips current iteration and moves to **next iteration**.

---

### Example

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Output:
// 1
// 2
// 4
// 5
```

---

## 8️⃣ Nested Loops

### Purpose

Loop inside another loop.

---

### Example

```js
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(i, j);
  }
}
// Output:
// 1 1
// 1 2
// 2 1
// 2 2
```

---

## 9️⃣ Infinite Loop (⚠️ Dangerous)

Occurs when condition **never becomes false**.

---

### Example

```js
while (true) {
  console.log("Loop");
}
```

✔ Always ensure exit condition.

---

## 🔟 Loop Comparison Table (Interview Gold)

| Loop       | Best For      | Iterates Over |
| ---------- | ------------- | ------------- |
| `for`      | Known count   | Index         |
| `while`    | Unknown count | Condition     |
| `do-while` | At least once | Condition     |
| `for...in` | Objects       | Keys          |
| `for...of` | Iterables     | Values        |

---

## 1️⃣1️⃣ Common Mistakes

❌ Using `for...in` for arrays
❌ Forgetting increment → infinite loop
❌ Modifying loop variable incorrectly
❌ Using wrong loop for data structure

---

## 1️⃣2️⃣ Interview-Ready Definition

> Loops in JavaScript are control structures that allow repeated execution of code blocks based on conditions or over iterable data structures such as arrays, objects, and strings.

---

## 1️⃣3️⃣ When to Use What?

| Scenario              | Recommended Loop |
| --------------------- | ---------------- |
| Count from 1 to N     | `for`            |
| Run until condition   | `while`          |
| Run at least once     | `do-while`       |
| Object properties     | `for...in`       |
| Array / string values | `for...of`       |

# ✅ Conditional Statements in JavaScript (Complete Notes)

Conditional statements allow JavaScript to **execute different blocks of code based on conditions**.

---

## 1️⃣ `if` Statement

### Purpose

Executes a block of code **only if the condition is true**.

---

### Syntax

```js
if (condition) {
  // code runs if condition is true
}
```

---

### How it Works

* Condition is converted to **boolean**
* If **truthy → executes**
* If **falsy → skipped**

---

### Example

```js
let age = 20;

if (age >= 18) {
  console.log("Eligible to vote");
}
// Output: "Eligible to vote"
```

---

### Important Notes

* No `else` required
* Condition can be any expression
* Uses **truthy/falsy**, not just `true/false`

---

## 2️⃣ `if...else` Statement

### Purpose

Executes **one block if condition is true**, otherwise executes **another block**.

---

### Syntax

```js
if (condition) {
  // runs if true
} else {
  // runs if false
}
```

---

### Example

```js
let age = 15;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
// Output: "Minor"
```

---

### Key Point

* Exactly **one block** executes

---

## 3️⃣ `else if` Ladder

### Purpose

Used to check **multiple conditions sequentially**.

---

### Syntax

```js
if (condition1) {
  // runs if condition1 true
} else if (condition2) {
  // runs if condition2 true
} else {
  // runs if all conditions false
}
```

---

### How It Works

* Conditions checked **top to bottom**
* First `true` block executes
* Remaining conditions are ignored

---

### Example

```js
let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
// Output: "Grade B"
```

---

### Best Practice

✔ Keep conditions **ordered logically**
✔ Avoid deep nesting

---

## 4️⃣ `switch` Statement

### Purpose

Executes code based on **matching a value** against multiple cases.

---

### Syntax

```js
switch (expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // code
}
```

---

### How It Works

* Expression evaluated **once**
* Compared using **strict equality (`===`)**
* Matching `case` executes

---

### Example

```js
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
// Output: "Wednesday"
```

---

### `break` Statement (IMPORTANT)

Without `break`, execution **falls through** to next case.

```js
let x = 1;

switch (x) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
}
// Output:
// One
// Two
```

---

### When to Use `switch`

✔ Multiple fixed values
✔ Cleaner than long `else if` chains

---

## 5️⃣ Ternary Operator (`?:`)

### Purpose

Short-hand conditional expression for **simple decisions**.

---

### Syntax

```js
condition ? valueIfTrue : valueIfFalse
```

---

### Example

```js
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";
console.log(result);
// Output: "Adult"
```

---

### Nested Ternary (Use Carefully)

```js
let marks = 85;

let grade =
  marks >= 90 ? "A" :
  marks >= 75 ? "B" :
  marks >= 60 ? "C" :
  "Fail";

console.log(grade);
// Output: "B"
```

---

### Best Practice

✔ Use for **simple logic only**
❌ Avoid complex nested ternaries

---

## 6️⃣ Comparison Table (Interview Gold)

| Feature             | if   | if-else | else-if | switch | ternary |
| ------------------- | ---- | ------- | ------- | ------ | ------- |
| Multiple conditions | ❌    | ❌       | ✅       | ✅      | ❌       |
| Readability         | High | High    | Medium  | High   | Medium  |
| Expression based    | ❌    | ❌       | ❌       | ❌      | ✅       |
| Returns value       | ❌    | ❌       | ❌       | ❌      | ✅       |
| Strict comparison   | ❌    | ❌       | ❌       | ✅      | ❌       |

---

## 7️⃣ Common Mistakes

❌ Forgetting `break` in switch
❌ Using ternary for complex logic
❌ Using `==` instead of `===`
❌ Deep nested `if` blocks

---

## 8️⃣ Truthy / Falsy Reminder

Falsy values:

```js
false, 0, "", null, undefined, NaN
```

Everything else is **truthy**.

---

## 9️⃣ Interview-Ready Definition

> Conditional statements in JavaScript control program flow by executing different blocks of code based on whether specified conditions evaluate to true or false.

---

## 🔟 When to Use What?

| Situation        | Best Choice |
| ---------------- | ----------- |
| Single condition | `if`        |
| Two outcomes     | `if-else`   |
| Many ranges      | `else if`   |
| Fixed values     | `switch`    |
| Short decision   | `ternary`   |

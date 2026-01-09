# ✅ Section 8 – ES6+ Features (Complete Notes)

---

## 1️⃣ Basic ES6+ Features (07:49:27)

ES6 (ECMAScript 2015) introduced **modern syntax and features** to make JavaScript:

* Cleaner
* More readable
* More powerful

---

### 1.1 `let` and `const`

#### `let`

* Block scoped
* Can be reassigned
* Not hoisted like `var`

```js
let x = 10;
x = 20;
```

#### `const`

* Block scoped
* Cannot be reassigned
* Must be initialized

```js
const PI = 3.14;
// PI = 3.15 ❌ Error
```

⚠️ Objects declared with `const` are still mutable.

---

### 1.2 Template Literals

Use backticks `` ` `` for strings.

```js
let name = "Riyaz";
console.log(`Hello ${name}`);
// Hello Riyaz
```

✔ Supports multiline strings
✔ Supports expressions

---

### 1.3 Arrow Functions

Shorter syntax for functions.

```js
const add = (a, b) => a + b;
add(2, 3); // 5
```

⚠️ Arrow functions do **not** have their own `this`.

---

### 1.4 Destructuring (Quick Recap)

```js
const user = { name: "Riyaz", age: 25 };
const { name, age } = user;

const arr = [1, 2, 3];
const [a, b] = arr;
```

---

### 1.5 Spread & Rest (Quick Recap)

```js
// Spread
const arr2 = [...arr, 4];

// Rest
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
```

---

## 2️⃣ Modules (07:55:46)

---

### 2.1 What Are Modules?

Modules allow you to **split code into separate files** and reuse it.

✔ Better structure
✔ Avoid global scope pollution
✔ Maintainable code

---

### 2.2 Exporting from a Module

#### Named Export

```js
// math.js
export function add(a, b) {
  return a + b;
}

export const PI = 3.14;
```

#### Default Export

```js
// greet.js
export default function greet() {
  console.log("Hello");
}
```

---

### 2.3 Importing Modules

```js
import { add, PI } from "./math.js";
import greet from "./greet.js";

add(2, 3); // 5
```

---

### 2.4 Module Rules

* Use `type="module"` in browser
* Modules are **strict mode by default**
* Each module has its own scope

```html
<script type="module" src="app.js"></script>
```

---

## 3️⃣ Symbols (08:00:32)

---

### 3.1 What is a Symbol?

A **Symbol** is a **primitive data type** that creates **unique identifiers**.

```js
const id = Symbol("id");
```

Even with the same description, symbols are unique:

```js
Symbol("x") === Symbol("x"); // false
```

---

### 3.2 Why Symbols Are Needed

✔ Avoid property name collisions
✔ Create hidden object properties
✔ Used internally by JS (well-known symbols)

---

### 3.3 Symbol as Object Key

```js
const userId = Symbol("id");

const user = {
  name: "Riyaz",
  [userId]: 101
};

user[userId]; // 101
```

✔ Symbol keys are **not enumerable**

---

### 3.4 Well-Known Symbols (Examples)

```js
Symbol.iterator
Symbol.toStringTag
Symbol.asyncIterator
```

Used internally by JS for advanced behavior.

---

## 4️⃣ Maps & Sets (08:06:38)

---

## 4.1 Map

### What is a Map?

A **Map** stores key–value pairs where:

* Keys can be **any type**
* Maintains insertion order

---

### Creating a Map

```js
const map = new Map();

map.set("name", "Riyaz");
map.set(1, "one");
```

---

### Accessing Map Data

```js
map.get("name"); // "Riyaz"
map.has(1);      // true
map.size;        // 2
```

---

### Iterating a Map

```js
for (let [key, value] of map) {
  console.log(key, value);
}
```

---

### Map vs Object

| Feature     | Object         | Map             |
| ----------- | -------------- | --------------- |
| Key type    | String/Symbol  | Any             |
| Order       | Not guaranteed | Guaranteed      |
| Size        | Manual         | `size` property |
| Performance | Lower          | Better          |

---

## 4.2 Set

### What is a Set?

A **Set** stores **unique values only**.

---

### Creating a Set

```js
const set = new Set([1, 2, 2, 3]);
```

---

### Set Operations

```js
set.add(4);
set.has(2);   // true
set.delete(1);
set.size;     // 3
```

---

### Iterating a Set

```js
for (let value of set) {
  console.log(value);
}
```

---

### Use Cases for Set

✔ Remove duplicates
✔ Unique collections
✔ Fast lookups

---

## 5️⃣ Special ES6+ Features (08:18:58)

---

### 5.1 Optional Chaining (`?.`)

Safely access nested properties.

```js
user?.profile?.email;
```

✔ Prevents runtime errors
✔ Returns `undefined` if not found

---

### 5.2 Nullish Coalescing (`??`)

Returns default value **only if `null` or `undefined`**.

```js
let score = 0;
score ?? 100; // 0
```

---

### 5.3 Logical Assignment Operators

```js
x ||= y;   // x = x || y
x &&= y;   // x = x && y
x ??= y;   // x = x ?? y
```

---

### 5.4 `Object.fromEntries()`

Convert key–value pairs to object.

```js
const entries = [["a", 1], ["b", 2]];
Object.fromEntries(entries);
// { a: 1, b: 2 }
```

---

### 5.5 `Array.at()`

Supports negative indexing.

```js
const arr = [10, 20, 30];
arr.at(-1); // 30
```

---

## 6️⃣ Interview-Ready Summary

* ES6+ improves readability & safety
* Modules help structure large apps
* Symbols create unique, hidden keys
* Maps & Sets solve object/array limitations
* Optional chaining prevents crashes
* Nullish coalescing handles defaults correctly

---

## 🧠 One-Line Memory Tricks

* **Modules** → split & reuse
* **Symbol** → unique & hidden
* **Map** → any key
* **Set** → unique values
* **Optional chaining** → safe access
* **Nullish** → only null/undefined
Flat Methods for Array to flatten the array defualt parameter is 1.
Numeric separators = 1_000_000_000
sortedArray = array.toSorted()
reversedArray = array.toReversed();
toSpliced

Finding last element
const array = [1,2,3,4,5,6,7]
console.log(array.findLast( x => x < 4 )) // 3
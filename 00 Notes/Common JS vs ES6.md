## 1. CommonJS (CJS)

**CommonJS** is a module system originally designed for **server-side JavaScript**, especially **Node.js**.

### Key Characteristics

* **Synchronous loading** (modules are loaded at runtime)
* Designed for **backend environments**
* Uses `require()` and `module.exports`
* Modules are evaluated **when imported**

### Syntax Example

```js
// math.js
function add(a, b) {
  return a + b;
}
module.exports = add;

// app.js
const add = require('./math');
console.log(add(2, 3));
```

### Where It Is Used

* Node.js (default before ES6 support)
* Older backend codebases
* Some npm packages for backward compatibility

### Limitations

* Not statically analyzable (harder for bundlers to optimize)
* No native browser support
* Less suitable for tree shaking

---

## 2. ES6 Modules (ESM)

**ES6 Modules**, introduced in **ECMAScript 2015**, are the **modern standard** for JavaScript modules.

### Key Characteristics

* **Static module structure** (analyzed at compile time)
* Supports **tree shaking**
* Works in **browsers and Node.js**
* Uses `import` / `export`
* Supports **async loading**

### Syntax Example

```js
// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from './math.js';
console.log(add(2, 3));
```

### Where It Is Used

* Modern frontend frameworks (React, Vue, Angular)
* Modern Node.js projects
* Browser-based JavaScript

---

## 3. Side-by-Side Comparison

| Feature            | CommonJS           | ES6 Modules      |
| ------------------ | ------------------ | ---------------- |
| Standard           | No (Node-specific) | Yes (ECMAScript) |
| Import syntax      | `require()`        | `import`         |
| Export syntax      | `module.exports`   | `export`         |
| Module loading     | Runtime            | Compile-time     |
| Tree shaking       | ❌ No               | ✅ Yes            |
| Browser support    | ❌ No               | ✅ Yes            |
| Default in Node.js | Older versions     | Newer versions   |

---

## 4. How Node.js Handles Both

Node.js supports **both systems**, but the configuration matters.

### CommonJS (default)

```js
// package.json
{
  "type": "commonjs"
}
```

### ES Module

```js
// package.json
{
  "type": "module"
}
```

Or by using file extensions:

* `.cjs` → CommonJS
* `.mjs` → ES Module

---

## 5. Important Conceptual Difference (Interview Focus)

### CommonJS

* Modules are **loaded dynamically**
* You can conditionally `require()`

```js
if (condition) {
  const lib = require('lib');
}
```

### ES6 Modules

* Imports are **hoisted and static**
* Cannot be conditional

```js
// ❌ Not allowed
if (condition) {
  import lib from 'lib';
}
```

(Use dynamic `import()` instead)

---

## 6. When to Use What

### Use CommonJS When:

* Maintaining legacy Node.js projects
* Working with older tooling

### Use ES6 Modules When:

* Building modern frontend or backend applications
* Performance optimization (tree shaking)
* Writing future-proof code

---

## 7. One-Line Interview Answer

> **CommonJS** is a Node.js-specific, runtime-loaded module system, while **ES6 Modules** are the JavaScript standard with static imports that enable better optimization and browser compatibility.

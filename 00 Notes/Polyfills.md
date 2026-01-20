### What are **Polyfills** in JavaScript?

A **polyfill** in JavaScript is **code that provides modern functionality in older browsers that do not natively support it**.

In simple terms:

> **Polyfill = fallback implementation for missing JavaScript features**

---

## Why Polyfills Are Needed

JavaScript evolves continuously (ES6, ES7, ES2020, etc.), but **not all browsers support new features at the same time**, especially older versions.

Polyfills allow developers to:

* Write **modern JavaScript**
* Maintain **backward compatibility**
* Ensure consistent behavior across browsers

---

## How Polyfills Work

A polyfill:

1. **Checks if a feature exists**
2. **Defines it only if it is missing**

### Example: `Array.prototype.includes`

Older browsers do not support `includes()`.

```js
if (!Array.prototype.includes) {
  Array.prototype.includes = function (value) {
    return this.indexOf(value) !== -1;
  };
}
```

Now this works even in older browsers:

```js
[1, 2, 3].includes(2); // true
```

---

## Common Examples of Polyfilled Features

| Feature             | Purpose                 |
| ------------------- | ----------------------- |
| `Promise`           | Handle async operations |
| `fetch`             | HTTP requests           |
| `Array.includes`    | Check array values      |
| `Object.assign`     | Merge objects           |
| `String.startsWith` | String matching         |

---

## Real-World Polyfill Example: `fetch`

Older browsers (like IE) do not support `fetch`.

### Without polyfill:

```js
fetch("/api/data");
```

### With polyfill:

```bash
npm install whatwg-fetch
```

```js
import "whatwg-fetch";
```

Now `fetch()` works everywhere.

---

## Polyfills vs Transpilers (Important Interview Point)

| Aspect  | Polyfill                  | Transpiler         |
| ------- | ------------------------- | ------------------ |
| Purpose | Adds missing features     | Converts syntax    |
| Example | `Promise`, `fetch`        | `let → var`        |
| Tool    | `core-js`, `whatwg-fetch` | `Babel`            |
| Runtime | Runs in browser           | Runs at build time |

> **Babel handles syntax**, **polyfills handle missing APIs**.

---

## Popular Polyfill Libraries

* **core-js** (most widely used)
* **whatwg-fetch**
* **es-shims**
* **polyfill.io**

---

## Polyfill in Modern Projects (React / Next.js)

In React or Next.js:

* Polyfills are **automatically added** via Babel + `core-js`
* You configure target browsers using **`browserslist`**

```json
"browserslist": [
  ">0.2%",
  "not dead",
  "not ie <= 11"
]
```

Only required polyfills are included → optimized bundle size.

---

## Interview-Ready Definition

> **A polyfill is a JavaScript implementation that adds support for modern features in older browsers where those features are not available natively.**

---

## When NOT to Use Polyfills

* If your app targets **modern browsers only**
* If bundle size is critical and legacy support is unnecessary

---

If you want, I can also explain:

* Difference between **polyfill vs shim**
* How **polyfills work internally**
* Polyfills used in **React / Next.js**
* Real interview questions related to polyfills

Just tell me how deep you want to go.

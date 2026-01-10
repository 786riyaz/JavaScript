**Tree-shakable** means **unused code gets automatically removed** from the final JavaScript bundle.

Think of it like **shaking a tree**—the dead leaves (unused functions, unused variables, unused exports) fall off, and only the parts your program actually uses remain.

---

# ✅ **Simple Meaning**

**Tree shaking = automatic removal of unused code during bundling.**

Tools that do tree-shaking:

* Webpack
* Rollup
* ESBuild
* Vite

---

# ✅ **Why ES Modules support tree shaking but CommonJS doesn’t**

### ✔ ES Modules (import/export)

* Static imports → compiler knows exactly what is used.
* Example:

```js
// utils.js
export function add() {}
export function sub() {}   // UNUSED
```

```js
// main.js
import { add } from "./utils.js";
```

The bundler sees that **sub() is never used**, so it removes it completely.

---

### ✖ CommonJS (require)

* Dynamic, runtime-based → bundler cannot safely analyze usage.

```js
const utils = require("./utils");

// utils could be anything → cannot remove parts safely
```

Result: **no tree shaking**.

---

# ✅ **Real-Life Example**

Imagine you import a big utility library:

```js
import { formatDate } from "big-utils";
```

You only use **1 function**, but that library has **100 functions**.

✔ With tree shaking → your bundle includes **only that one function**
✖ Without tree shaking → your bundle includes **all 100 functions → slower, larger file**

---

# 📌 **Why does this matter?**

Tree shaking helps:

* **Reduce bundle size**
* **Improve website performance**
* **Speed up loading**
* **Remove dead/unused code automatically**

---

# 🎯 One-line answer

**Tree-shakable means JavaScript modules can be optimized to remove unused code, reducing final bundle size.**

---

If you want, I can also show you:
✔ examples of tree shaking
✔ how to enable it in Webpack/Vite/Rollup
✔ difference between sideEffects and pure functions

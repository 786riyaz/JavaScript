# ✅ **Garbage Collection (GC) in JavaScript**
JavaScript uses **automatic garbage collection**, meaning **you don’t manually free memory**.
The most common algorithm used is **Mark-and-Sweep**.

### ✔ How GC Works (Simple Explanation)
1. JavaScript starts from **root objects** (like `window`, global scope).
2. It **marks** all objects reachable from the roots.
3. Anything **not reachable** anymore is considered **garbage**.
4. GC **clears** that memory.

👉 **In short:**
If nothing references an object anymore, it gets removed.

---

## **Example: No Memory Leak (GC works normally)**

```js
function createUser() {
  let user = { name: "Riyaz" };  
  return user;
}

let u = createUser();

// Now u refers to the object → GC does NOT delete it
console.log(u); 

u = null; // No references → GC WILL clean it
```

✔ After `u = null`, the object becomes unreachable → **GC frees memory**.

---

# ❌ **Memory Leaks**

A **memory leak** happens when objects are **still referenced**, even though your program no longer needs them.

Below are the **most common memory leak scenarios in JS**.

---

# 1️⃣ **Memory Leak due to setInterval()**

If you use `setInterval` and forget to clear it, the function still holds references.

### 🚫 Wrong — Memory Leak

```js
function start() {
  let counter = 0;
  setInterval(() => {
    console.log(counter++); // counter remains in memory forever!
  }, 1000);
}

start();
```

✔ `counter` is **never released**, because the callback function still references it.

### ✅ Fix — Always clear interval

```js
const id = setInterval(() => {
  console.log("running...");
}, 1000);

setTimeout(() => {
  clearInterval(id); // stops retaining references
}, 5000);
```

---

# 2️⃣ **Memory Leak due to Event Listeners**

If you attach event listeners but don’t remove them, they stay in memory.

### 🚫 Wrong — Event listener not removed

```js
const btn = document.getElementById("btn");

function handler() {
  console.log("clicked");
}

btn.addEventListener("click", handler);

// Later the button is removed…
btn.remove(); 
// BUT listener still exists in memory → leak!
```

### ✅ Fix — Remove listener before removing element

```js
btn.removeEventListener("click", handler);
btn.remove();
```

---

# 3️⃣ **Memory Leak due to Global Variables**

If you store big data in global variables, GC cannot clean them.

### 🚫 Wrong — Global variable leaking memory

```js
window.bigArray = new Array(1000000).fill("data"); // never gets collected
```

GC never removes this because it is on the `window` object.

### ✅ Fix

```js
let bigArray = new Array(1000000).fill("data");
bigArray = null;
```

---

# 4️⃣ **Memory Leak due to Closures**

Closures keep referenced variables alive.

### 🚫 Wrong — Unintentional closure holding memory

```js
function outer() {
  let hugeData = new Array(5000000).fill("x");

  return function inner() {
    console.log("hello");
  };
}

const fn = outer(); // hugeData stays in memory!
```

Even though `hugeData` is unused, closure keeps it alive.

### ✅ Fix — avoid unnecessary closures

```js
function outer() {
  console.log("hello");
}
```

---

# 🎯 **Summary Table**
| Concept              | Meaning                          | Example of Leak                              | Fix                                 |
| -------------------- | -------------------------------- | -------------------------------------------- | ----------------------------------- |
| **GC**               | Auto-removes unreachable objects | —                                            | —                                   |
| **Memory Leak**      | Object still referenced          | `setInterval` not cleared                    | `clearInterval()`                   |
| Event Listener Leak  | Listener stays in memory         | `addEventListener` w/o `removeEventListener` | Remove listener                     |
| Global Variable Leak | Stored globally                  | `window.x = ...`                             | Limit globals                       |
| Closure Leak         | Internal reference kept alive    | Unneeded huge variables                      | Avoid storing large data in closure |
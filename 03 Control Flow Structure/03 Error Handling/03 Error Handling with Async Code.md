## The Code in Question

```js
try { 
  setTimeout(() => {
    throw new Error("Async error");
  }, 1000);
} catch {
  console.log("Won't catch");
}
```

You observed:

* In VS Code / browser console, the error appears **after 1 second**
* But `catch` **never runs**

This behavior is **100% correct JavaScript behavior**.

---

## 1️⃣ Key Rule (Very Important)

> **`try...catch` only catches synchronous errors, not asynchronous ones.**

---

## 2️⃣ What Actually Happens (Step by Step)

### Step 1: JavaScript Executes the `try` Block

```js
setTimeout(() => {
  throw new Error("Async error");
}, 1000);
```

* `setTimeout` is **asynchronous**
* It **does NOT execute the callback immediately**
* It just **registers the callback** and returns

✔ No error happens at this moment

---

### Step 2: `try` Block Finishes

* Since **no error occurred synchronously**, JavaScript:

  * Skips `catch`
  * Exits the `try...catch` block

---

### Step 3: After 1 Second…

* The callback inside `setTimeout` runs
* That callback runs **outside** the original `try` block
* The error is thrown in a **different call stack**

```js
throw new Error("Async error");
```

❌ There is **no surrounding try-catch at this moment**

---

## 3️⃣ Why `catch` Cannot Catch It

### Because of the **Event Loop**

* `try...catch` works **only within the same call stack**
* `setTimeout` callback runs later via the **event loop**
* By the time the error is thrown:

  * The `try` block is already gone
  * The stack frame is destroyed

So `catch` has **nothing to catch**

---

## 4️⃣ Visual Execution Timeline

```
Call Stack
──────────
try block
 └─ setTimeout() registered ✔
try block ends ✔

(Event loop waits 1 second)

New Call Stack
──────────────
setTimeout callback
 └─ throw Error ❌ (uncaught)
```

---

## 5️⃣ Why You Still “See” the Error in VS Code

VS Code / browser console shows:

```
Uncaught Error: Async error
```

This is because:

* The runtime **detects an unhandled exception**
* It logs it globally
* But it is **NOT caught by your code**

---

## 6️⃣ ❌ Why This Will NEVER Work

```js
try {
  setTimeout(() => {
    throw new Error("Async error");
  }, 1000);
} catch {}
```

Because:

* `throw` happens **after** `try` finishes
* `try` cannot cross async boundaries

---

## 7️⃣ ✅ Correct Ways to Handle This

### ✅ Option 1: Put `try...catch` INSIDE the async callback

```js
setTimeout(() => {
  try {
    throw new Error("Async error");
  } catch (e) {
    console.log("Caught:", e.message);
  }
}, 1000);

// Output after 1 second:
// Caught: Async error
```

---

### ✅ Option 2: Use Promises + `catch`

```js
new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error("Async error"));
  }, 1000);
})
.catch(e => console.log("Caught:", e.message));

// Output:
// Caught: Async error
```

---

### ✅ Option 3: `async/await` with `try...catch` (BEST PRACTICE)

```js
async function test() {
  try {
    await new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Async error")), 1000);
    });
  } catch (e) {
    console.log("Caught:", e.message);
  }
}

test();

// Output:
// Caught: Async error
```

---

## 8️⃣ Interview-Ready Explanation (Very Important)

> `try...catch` only catches synchronous errors. Errors thrown inside asynchronous callbacks like `setTimeout`, promises, or event handlers occur in a different call stack and must be handled inside the async context or using promise-based error handling.

---

## 9️⃣ One-Line Memory Rule

> **`try...catch` does NOT cross async boundaries.**

---

## 🔟 Common Interview Question

**Q:** Why does `try...catch` not catch errors inside `setTimeout`?
**A:** Because `setTimeout` executes the callback asynchronously in a new call stack, outside the scope of the original `try` block.

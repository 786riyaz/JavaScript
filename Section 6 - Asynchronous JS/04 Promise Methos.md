# ✅ JavaScript Promise Methods — Complete Notes

---

## 0️⃣ Quick Refresher: What a Promise Is

A **Promise** represents a value that will be available **later**.

**States**

* `pending`
* `fulfilled` (resolved)
* `rejected`

---

## 1️⃣ `Promise.resolve()`

### Purpose

Creates a **fulfilled Promise** with a given value.

### Syntax

```js
Promise.resolve(value)
```

### Return Type

* `Promise<value>`

### Example

```js
Promise.resolve(10).then(v => console.log(v));
// 10
```

### Notes

* If `value` is already a Promise, it is returned as-is.

---

## 2️⃣ `Promise.reject()`

### Purpose

Creates a **rejected Promise** with a given reason.

### Syntax

```js
Promise.reject(reason)
```

### Return Type

* `Promise<never>`

### Example

```js
Promise.reject("Failed").catch(err => console.log(err));
// Failed
```

---

## 3️⃣ `promise.then()`

### Purpose

Handles a **fulfilled** Promise and optionally transforms the value.

### Syntax

```js
promise.then(onFulfilled, onRejected?)
```

### Return Type

* **New Promise** (important)

### Example

```js
Promise.resolve(5)
  .then(v => v * 2)
  .then(v => console.log(v));
// 10
```

### Notes

* Whatever you `return` is passed to the next `.then()`.
* Throwing inside `.then()` turns the next Promise into **rejected**.

---

## 4️⃣ `promise.catch()`

### Purpose

Handles **rejections**.

### Syntax

```js
promise.catch(onRejected)
```

### Return Type

* **New Promise**

### Example

```js
Promise.reject("Error")
  .catch(err => console.log(err));
// Error
```

### Notes

* Equivalent to `.then(null, onRejected)`.

---

## 5️⃣ `promise.finally()`

### Purpose

Runs **always** (cleanup), regardless of success or failure.

### Syntax

```js
promise.finally(onFinally)
```

### Return Type

* **New Promise** (passes through original result)

### Example

```js
Promise.resolve("OK")
  .finally(() => console.log("Done"))
  .then(v => console.log(v));
// Done
// OK
```

### Notes

* Cannot modify the resolved value (unless it throws).

---

## 6️⃣ `Promise.all()`

### Purpose

Waits for **all Promises to fulfill**.

### Syntax

```js
Promise.all(iterable)
```

### Resolves With

* Array of results (same order)

### Rejects When

* **Any one Promise rejects** (fail-fast)

### Example

```js
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(res => console.log(res));
// [1, 2, 3]
```

### Rejection Example

```js
Promise.all([
  Promise.resolve(1),
  Promise.reject("Fail"),
  Promise.resolve(3)
]).catch(err => console.log(err));
// Fail
```

### Use Case

* Multiple dependent API calls where **all must succeed**

---

## 7️⃣ `Promise.allSettled()`

### Purpose

Waits for **all Promises to settle** (fulfilled or rejected).

### Syntax

```js
Promise.allSettled(iterable)
```

### Resolves With

* Array of result objects:

```js
{ status: "fulfilled", value: ... }
{ status: "rejected", reason: ... }
```

### Example

```js
Promise.allSettled([
  Promise.resolve(1),
  Promise.reject("Fail")
]).then(res => console.log(res));
```

**Output**

```js
[
  { status: "fulfilled", value: 1 },
  { status: "rejected", reason: "Fail" }
]
```

### Use Case

* Show partial results
* Logging/reporting outcomes

---

## 8️⃣ `Promise.race()`

### Purpose

Settles with the **first Promise that settles** (fulfilled or rejected).

### Syntax

```js
Promise.race(iterable)
```

### Example (Resolve Wins)

```js
Promise.race([
  new Promise(res => setTimeout(() => res("Fast"), 100)),
  new Promise(res => setTimeout(() => res("Slow"), 500))
]).then(v => console.log(v));
// Fast
```

### Example (Reject Wins)

```js
Promise.race([
  new Promise((_, rej) => setTimeout(() => rej("Error"), 100)),
  new Promise(res => setTimeout(() => res("OK"), 500))
]).catch(err => console.log(err));
// Error
```

### Use Case

* Timeouts
* First response wins

---

## 9️⃣ `Promise.any()`

### Purpose

Resolves with the **first fulfilled Promise**.

### Syntax

```js
Promise.any(iterable)
```

### Resolves When

* **Any one Promise fulfills**

### Rejects When

* **All Promises reject**

### Example

```js
Promise.any([
  Promise.reject("Fail 1"),
  Promise.resolve("Success"),
  Promise.reject("Fail 2")
]).then(v => console.log(v));
// Success
```

### All Reject Example

```js
Promise.any([
  Promise.reject("A"),
  Promise.reject("B")
]).catch(err => console.log(err.errors));
// ["A", "B"]
```

### Error Type

* `AggregateError`

### Use Case

* Fallback APIs (first success wins)

---

## 🔟 Comparison Table (Interview Gold)

| Method       | Waits For     | Resolves When | Rejects When  |
| ------------ | ------------- | ------------- | ------------- |
| `all`        | All           | All fulfill   | Any rejects   |
| `allSettled` | All           | Always        | Never         |
| `race`       | First         | First settles | First rejects |
| `any`        | First success | Any fulfills  | All reject    |

---

## 1️⃣1️⃣ Visual Summary

```
Promise.all        → ALL success required
Promise.allSettled → ALL outcomes reported
Promise.race       → FIRST finished (success or fail)
Promise.any        → FIRST success only
```

---

## 1️⃣2️⃣ Common Mistakes

❌ Forgetting to `return` inside `.then()`
❌ Using `Promise.all` when partial success is acceptable
❌ Expecting `fetch()` to reject on HTTP 404
❌ Reading response body multiple times

---

## 1️⃣3️⃣ async/await Equivalents

```js
// Promise.all
const results = await Promise.all(promises);

// Promise.any
const firstSuccess = await Promise.any(promises);

// Promise.allSettled
const report = await Promise.allSettled(promises);
```

---

## 1️⃣4️⃣ Interview-Ready Definition

> Promise utility methods (`all`, `allSettled`, `race`, `any`) coordinate multiple asynchronous operations by defining how and when a combined Promise resolves or rejects.

---

## 🧠 One-Line Memory Rules

* **all** → “All or nothing”
* **allSettled** → “Report everything”
* **race** → “First done wins”
* **any** → “First success wins”
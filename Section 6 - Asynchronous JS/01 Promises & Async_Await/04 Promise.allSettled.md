# ✅ **Promise.allSettled(): Explained Simply and Clearly**

### **What it does**

`Promise.allSettled()` waits for **all promises** to finish —
✔ whether they **resolve**
✔ or **reject**

It NEVER throws an error.
It ALWAYS returns an array describing **each promise result**.

---

# 📌 Why was this created?

Because `Promise.all()` stops everything if **any one** promise rejects → ❌ not always useful.

But in real apps, sometimes you want to:

* Run all tasks
* Even if some of them fail
* And then see which succeeded / failed

This is exactly what `Promise.allSettled()` does.

---

# 🧠 **Syntax**

```js
Promise.allSettled([promise1, promise2, promise3])
  .then(result => console.log(result));
```

---

# 📌 **Output format**

Each promise returns an object:

### ✔ If promise **Resolved**

```js
{
  status: "fulfilled",
  value: ...
}
```

### ❌ If promise **Rejected**

```js
{
  status: "rejected",
  reason: ...
}
```

---

# 🔥 Example (with success + failure)

```js
const p1 = Promise.resolve("Success 1");
const p2 = Promise.reject("Failed 2");
const p3 = new Promise(res => setTimeout(() => res("Success 3"), 1000));

Promise.allSettled([p1, p2, p3]).then(result => {
  console.log(result);
});
```

### ✔ Output:

```js
[
  { status: "fulfilled", value: "Success 1" },
  { status: "rejected", reason: "Failed 2" },
  { status: "fulfilled", value: "Success 3" }
]
```

### ✔ Notice:

* **Everything is returned**
* Even the rejected one
* No error thrown

---

# 🎯 When should you use allSettled()?

### Use when:

✔ You want to run multiple async tasks
✔ And collect ALL their results — success + failure
✔ Without stopping in the middle

### Real examples:

* Fetch 10 URLs (some may fail)
* Run multiple user actions (upload, save, notify)
* Validate multiple inputs asynchronously
* Perform API calls where failures are expected

---

# 🚀 **Comparison Table (Very Important for Interviews)**

| Feature        | `Promise.all`            | `Promise.allSettled`        |
| -------------- | ------------------------ | --------------------------- |
| Waits for all? | ❌ Stops on first failure | ✔ Yes                       |
| Returns?       | Only values              | Status + value/reason       |
| If one fails?  | Throws error             | Still returns all results   |
| Good for?      | All MUST succeed         | Mixed success/failure tasks |

---

# ⭐ Interview-friendly Explanation (Short and Strong)

> "`Promise.allSettled()` lets you run multiple promises in parallel and returns the result of **every promise**, regardless of whether it resolved or rejected. It doesn't fail fast like `Promise.all()` and is useful when you need a full report of all operations."
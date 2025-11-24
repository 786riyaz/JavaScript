# ✅ **What is `Promise.any()` ?**

**Promise.any()** returns the **first promise that *successfully resolves***
—even if **other promises fail**.

If **all** promises fail → it throws an **AggregateError**.

---

# 🧠 **Simple Explanation**

Imagine you ask **3 friends** for notes.

* If **one friend gives notes**, you’re happy.
* Even if **other friends say NO**, you don’t care.
* You just need **the first YES**.

That’s exactly how `Promise.any()` behaves.

---

# 📦 **JavaScript Example**

```js
const p1 = new Promise((res, rej) => setTimeout(() => rej("Server 1 failed"), 200));
const p2 = new Promise((res, rej) => setTimeout(() => res("Server 2 success!"), 500));
const p3 = new Promise((res, rej) => setTimeout(() => rej("Server 3 failed"), 100));

Promise.any([p1, p2, p3])
  .then(result => console.log("FIRST SUCCESS:", result))
  .catch(err => console.log(err));
```

✔ Output:

```
FIRST SUCCESS: Server 2 success!
```

Because **p2 is the first one to succeed**, even though **p3 & p1 failed**.

---

# 🎯 **Real-Life Example: Fastest Available Delivery**

Imagine you want to order a **laptop**, but from whichever site delivers first.

You check:

* Amazon
* Flipkart
* Croma

You say:
➡ “Whoever confirms delivery earliest, I will buy from them.”

### **Code**

```js
const amazon = new Promise((res, rej) =>
  setTimeout(() => rej("Amazon out of stock"), 300)
);

const flipkart = new Promise((res, rej) =>
  setTimeout(() => res("Flipkart confirmed delivery"), 500)
);

const croma = new Promise((res, rej) =>
  setTimeout(() => rej("Croma delivery unavailable"), 200)
);

Promise.any([amazon, flipkart, croma])
  .then(msg => console.log("Order placed from:", msg))
  .catch(err => console.log("All stores failed"));
```

✔ **Flipkart wins**, because it's the **first to successfully confirm**.

---

# 🖼 **Diagram (DMMA / ASCII)**

```
           ┌──────────────┐
           │ Promise.any() │
           └───────┬──────┘
     ┌─────────────┼─────────────┬───────────────┐
     ▼             ▼             ▼               ▼
 Amazon       Flipkart        Croma         (More...)
 Fail ✖       Success ✔      Fail ✖

       Promise.any() returns Flipkart ✔
```

---

# 🏦 Another Real-Life Example: Online Bank Balance Check

You check your account balance using **3 servers**:

* SBI Server 1 → fails
* SBI Server 2 → fails
* SBI Server 3 → succeeds

You only need **one successful** result.

```js
Promise.any([
  checkBalance(server1),
  checkBalance(server2),
  checkBalance(server3)
])
.then(data => console.log("Balance:", data))
.catch(err => console.log("All servers failed"));
```

---

# ❌ When All Fail

```js
Promise.any([Promise.reject(), Promise.reject()])
  .catch(e => console.log(e instanceof AggregateError));
```

✔ Output:

```
true
```

---

# ✔ Summary

| Feature    | `Promise.any()`              |
| ---------- | ---------------------------- |
| Returns    | First **successful** promise |
| Ignores    | All failures                 |
| Fails when | **All promises fail**        |
| Error type | `AggregateError`             |

---

If you want, I can also explain:

* `Promise.all()`
* `Promise.allSettled()`
* `Promise.race()`
* `Promise.resolve()`
* `Promise.reject()`

With **real-life examples & diagrams**.

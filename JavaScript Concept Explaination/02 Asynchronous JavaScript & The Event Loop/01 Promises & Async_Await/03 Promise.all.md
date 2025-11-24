# ✅ **Real-Life Example: Load User Profile + User Orders Together**

Imagine an e-commerce website:

When a user opens their dashboard, you want to load:

1. **User Profile**
2. **User’s Order History**

Both API calls can run **in parallel** because they don’t depend on each other.

`Promise.all()` is perfect here.

---

# 🔵 **Dummy API Simulation**

We will fake two API calls using `setTimeout()`:

* `fetchUser()` → resolves in 2 seconds
* `fetchOrders()` → resolves in 3 seconds

```js
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Riyaz Khan" });
    }, 2000);
  });
}

function fetchOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { orderId: 101, product: "Laptop" },
        { orderId: 102, product: "Keyboard" },
      ]);
    }, 3000);
  });
}
```

---

# 🔵 **Using Promise.all()**

```js
Promise.all([fetchUser(), fetchOrders()])
  .then(([user, orders]) => {
    console.log("User:", user);
    console.log("Orders:", orders);
    console.log("Dashboard loaded!");
  })
  .catch((err) => {
    console.log("Something failed:", err);
  });
```

---

# 🟢 **How This Runs (LIVE Explanation)**

1. **Both functions start at the same time**
   → No waiting for one to finish before starting the other.

2. **Total time taken = 3 seconds**
   (because Promise.all waits for the *slowest* one)

3. After 3 seconds, output:

```
User: { id: 1, name: 'Riyaz Khan' }
Orders: [
  { orderId: 101, product: "Laptop" },
  { orderId: 102, product: "Keyboard" }
]
Dashboard loaded!
```

---

# ❌ **If Any One Fails → All Fail**

Here is a failed dummy API:

```js
function fetchOrders() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Orders service is down!");
    }, 3000);
  });
}

Promise.all([fetchUser(), fetchOrders()])
  .then(console.log)
  .catch((err) => console.log("Failed:", err));
```

Output:

```
Failed: Orders service is down!
```

---

# 🎁 **Even More Real-Life Example Ideas**

You can use Promise.all for:

✔ Load movie details + reviews + cast list
✔ Load cart items + product prices
✔ Save multiple form sections at once
✔ Send OTP to email + SMS together
✔ Upload multiple images

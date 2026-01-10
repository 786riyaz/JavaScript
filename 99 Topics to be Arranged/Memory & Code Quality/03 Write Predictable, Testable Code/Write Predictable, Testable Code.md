# ✅ **1. Predictable Code**

Predictable code = **easy to reason about**, produces the **same output for the same input**, and has **no hidden side effects**.

### ❌ **NOT Predictable (Impure Function)**

This function depends on global state → you can't predict the result just by looking at inputs.

```js
let discount = 10; // global state

function getFinalPrice(price) {
  // unpredictable because depends on discount elsewhere in program
  return price - discount;
}

console.log(getFinalPrice(100));  // depends on external variable
discount = 30; 
console.log(getFinalPrice(100));  // now gives different result
```

**Why it's unpredictable:**

* Behavior changes based on outside variables.
* Hard to debug → you don’t know where the discount is coming from.

---

### ✅ **Predictable Code (Pure Function)**

The function **depends only on its arguments**.

```js
function getFinalPrice(price, discount) {
  return price - discount;
}

console.log(getFinalPrice(100, 10)); // always 90
console.log(getFinalPrice(100, 30)); // always 70
```

**Why it's predictable:**

* No external state.
* Output **always** matches the input.
* Easy to test and reason about.

---

# ✅ **2. Testable Code**

Testable code = **easy to isolate**, **does one thing**, and **separates business logic from side effects**.

---

### ❌ **NOT Testable (Logic + DOM + API mixed together)**

This function does too much → impossible to test without a browser + server.

```js
async function loadUser() {
  const res = await fetch('/api/user');
  const user = await res.json();

  document.getElementById("name").textContent = user.name;

  return user.age > 18; // business logic mixed with DOM and API
}
```

**Why it's NOT testable:**

* Requires DOM → environment-specific.
* Requires API → cannot mock easily.
* Contains business logic → cannot test separately.

---

### ✅ **Testable Code (Separate logic from side-effects)**

### **A. Pure business logic (testable)**

```js
function isAdult(age) {
  return age >= 18;
}
```

You can easily test this with:

```js
console.log(isAdult(20)); // true
console.log(isAdult(10)); // false
```

---

### **B. Data Fetching (separate layer)**

```js
async function fetchUser(api) {
  const res = await api.get('/user');
  return res.data;
}
```

You can mock `api.get()` → test independently.

---

### **C. DOM Update (separate layer)**

```js
function renderUserName(user) {
  document.getElementById("name").textContent = user.name;
}
```

DOM code is isolated → easy to mock or skip in tests.

---

### **D. Combined Orchestration (still clean)**

```js
async function loadUser(api) {
  const user = await fetchUser(api);
  renderUserName(user);
  return isAdult(user.age);
}
```

---

# ⭐ Why This Code Is Testable

| Part               | Purpose               | Testable?                  |
| ------------------ | --------------------- | -------------------------- |
| `isAdult()`        | Pure logic            | **Yes – 100% predictable** |
| `fetchUser()`      | API layer             | **Yes – using mock API**   |
| `renderUserName()` | DOM update            | **Yes – using DOM mocks**  |
| `loadUser()`       | Combines 3 operations | **Yes – using mocks**      |

---

# 🎯 Summary (Simple Words)

### **Predictable Code:**

* Behavior depends **only on inputs**.
* No global variables.
* No random behavior.
* Pure functions = predictable.

### **Testable Code:**

* Small functions with **one responsibility**.
* Business logic separated from:

  * API calls
  * DOM manipulation
  * I/O
* Easy to mock dependencies.
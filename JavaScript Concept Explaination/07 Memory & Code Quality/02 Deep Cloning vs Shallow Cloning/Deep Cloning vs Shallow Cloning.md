# ⭐ Shallow Copy vs Deep Copy in JavaScript (With Code & Explanation)

## **1. What is a Shallow Copy?**

A **shallow copy** creates a *new* object/array, but **nested objects inside it are still shared** (same reference).

That means:

* Changing **primitive values** → does NOT affect original
* Changing **nested objects/arrays** → DOES affect original (because same reference)

### ✅ Common shallow copy methods

* Spread operator: `{ ...obj }`, `[ ...arr ]`
* `Object.assign({}, obj)`
* `Array.prototype.slice()`

---

# ✅ **Example of Shallow Copy**

```js
const original = {
  name: "Riyaz",
  address: {
    city: "Mumbai",
    pin: 400001
  }
};

// Shallow copy using spread operator
const shallowCopy = { ...original };

shallowCopy.name = "Khan";              // change primitive
shallowCopy.address.city = "Pune";      // change nested object

console.log(original);
console.log(shallowCopy);

// { name: 'Riyaz', address: { city: 'Pune', pin: 400001 } }
// { name: 'Khan', address: { city: 'Pune', pin: 400001 } }
```

### 🔍 **Explanation**

| Change                     | What happens?              | Why?                   |
| -------------------------- | -------------------------- | ---------------------- |
| `shallowCopy.name`         | Only shallowCopy changes   | primitive value copied |
| `shallowCopy.address.city` | **Original also changes!** | nested object *shared* |

### 🔥 Output

```
original.address.city  // "Pune"  <-- changed!
```

Because both objects point to the **same address object** in memory.

---

---

# **2. What is a Deep Copy?**

A **deep copy** creates a *brand-new* copy of all nested objects & arrays.

So:

* Changes in deep copy do **NOT affect** the original
* No references are shared

### ⭐ Deep copy methods

1. `JSON.parse(JSON.stringify(obj))` (fast but limited)
2. `structuredClone(obj)` (modern, recommended)
3. Libraries: Lodash `_.cloneDeep()`

---

# ✅ **Example of Deep Copy**

```js
const original = {
  name: "Riyaz",
  address: {
    city: "Mumbai",
    pin: 400001
  }
};

// Deep copy (modern and safe)
const deepCopy = structuredClone(original);

deepCopy.name = "Khan";               // change primitive
deepCopy.address.city = "Pune";       // change nested object

console.log(original);   
console.log(deepCopy);
```

### 🔍 **Explanation**

| Change                  | What happens?                | Why?                       |
| ----------------------- | ---------------------------- | -------------------------- |
| `deepCopy.name`         | affects only deepCopy        | primitive is separate      |
| `deepCopy.address.city` | **original stays unchanged** | nested object fully cloned |

### 🎉 Output

```
original.address.city  // "Mumbai" (unchanged)
```

Because the nested object is **not shared**.

---

---

# ⭐ Deep Copy Using `JSON.parse(JSON.stringify())`

```js
const obj = {
  name: "test",
  date: new Date(),
  fun: () => console.log("hi"),
  undef: undefined
};

const copy = JSON.parse(JSON.stringify(obj));

console.log(copy);
```

### ⚠️ **Limitations**

| Element          | Copied as?     |
| ---------------- | -------------- |
| `Date`           | becomes string |
| `undefined`      | removed        |
| `function`       | removed        |
| Circular objects | ❌ error        |

So it’s only good for **simple objects**.

---

---

# ⭐ Deep Copy Using Lodash (Best for Production)

```js
const _ = require("lodash");

const copy = _.cloneDeep(original);
```

Useful when working with large nested structures (React, Node, databases).

---

---

# 🧠 Summary Table

| Operation                          | Shared Nested Objects? | Supports Functions? | Best Use                                    |
| ---------------------------------- | ---------------------- | ------------------- | ------------------------------------------- |
| **Shallow Copy (`...`, `assign`)** | ✔ YES                  | ✔ YES               | Fast, common, but risky with nested objects |
| **`JSON.parse(JSON.stringify`)**   | ❌ NO                   | ❌ NO                | Simple deep copy, no functions              |
| **`structuredClone()`**            | ❌ NO                   | ❌ NO                | Modern deep copy, recommended               |
| **Lodash `_.cloneDeep()`**         | ❌ NO                   | ✔ YES               | Best for production, full-featured          |

---

---

# ✔ Final Tip (Very Important)

### If your object looks like this:

```js
const user = {
  id: 1,
  details: {
    address: { city: "Mumbai" }
  }
};
```

✔ Use **deep copy**
if you want to safely modify nested data without affecting the original.

✔ Use **shallow copy**
if object is flat (no nested objects).
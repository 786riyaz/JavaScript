## 4️⃣ Relationship Between the Three (Very Important)

### Core Relationship

> **Higher-order functions are possible only because functions are first-class.**

### Concept Flow

```text
First-Class Function
        ↓
Higher-Order Function
```

* First-class → capability
* Higher-order → usage
* First-order → absence of function interaction

---

## 5️⃣ Side-by-Side Comparison

| Concept               | Meaning                     | Example               |
| --------------------- | --------------------------- | --------------------- |
| First-Class Function  | Functions treated as values | `const fn = () => {}` |
| First-Order Function  | No function input/output    | `add(a, b)`           |
| Higher-Order Function | Takes/returns functions     | `map()`, `filter()`   |

---

## 6️⃣ Real-World JavaScript Examples

### Higher-Order Functions You Already Use

```js
array.map(fn)
array.filter(fn)
array.reduce(fn)
setTimeout(fn)
addEventListener(fn)
```

---

## 7️⃣ Interview-Perfect One-Liners

* **First-class function:**

  > Functions can be assigned, passed, and returned like values.

* **First-order function:**

  > A function that neither takes nor returns another function.

* **Higher-order function:**

  > A function that operates on other functions by taking or returning them.

---

## 8️⃣ Common Interview Trick Question

**Q: Are all higher-order functions first-class functions?**
**A:** No. Functions are first-class by nature; higher-order is a usage pattern enabled by first-class behavior.

---

## 9️⃣ One-Line Summary

> First-class functions describe what functions *are*, first-order functions describe what they *don’t do*, and higher-order functions describe how they *operate on other functions*.
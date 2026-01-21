## 5️⃣ Currying vs Higher-Order Function

### Key Insight

> **Currying is a specific use case of a Higher-Order Function.**

---

### Comparison Table

| Aspect                  | Currying                                       | Higher-Order Function |
| ----------------------- | ---------------------------------------------- | --------------------- |
| Definition              | Breaks multi-arg function into unary functions | Operates on functions |
| Returns function        | Always                                         | Sometimes             |
| Takes function as input | No                                             | Often                 |
| Uses closure            | Yes                                            | Often                 |
| Purpose                 | Partial application, composition               | Abstraction, reuse    |
| Scope                   | Specific technique                             | Broad concept         |

---

## 6️⃣ Example Showing the Difference

### HOF (Not Currying)

```js
function logger(fn) {
  return function (...args) {
    console.log("Calling function");
    return fn(...args);
  };
}
```

### Currying (Always HOF)

```js
const add = a => b => c => a + b + c;
```

✔ Currying → HOF
❌ HOF → Not always currying

---

## 7️⃣ Interview-Perfect Explanation

> Currying is a functional technique where a function is transformed into a chain of single-argument functions, while a higher-order function is any function that takes or returns another function. Currying is a specific form of higher-order function.

---

## 8️⃣ One-Line Summary

> Currying is about **how arguments are applied**, while higher-order functions are about **how functions operate on other functions**.

---

## 9️⃣ Common Interview Follow-Up

**Q: Is currying possible without closures?**
**A:** No. Closures are required to remember previously supplied arguments.

---

If you want, I can also explain:

* Currying vs Partial Application
* How currying is used in React hooks
* Implementing a generic `curry()` function
* Real interview coding questions on currying

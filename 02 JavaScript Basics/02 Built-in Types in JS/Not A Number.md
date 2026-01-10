## 🔷 What Creates NaN?
```js
NaN
0 / 0
10 / "a"
parseInt("x")
Math.sqrt(-1)
```

---

## 🔷 NaN Characteristics
* NaN = **Not a Number**
* Type of NaN is **"number"**

```js
typeof NaN // "number"
```

---

## 🔷 NaN Comparisons
NaN is **never equal to anything**, not even itself.
```js
NaN == NaN      // false
NaN === NaN     // false
```

✔ Only real way to check is **isNaN()** or **Number.isNaN()**

---

## 🔷 isNaN() vs Number.isNaN()

### ❌ `isNaN()` — Loose, Converts Values
```js
isNaN(NaN)        // true
isNaN("abc")      // true (⚠ "abc" → NaN → true)
```

### ✅ `Number.isNaN()` — Strict, Safer
```js
Number.isNaN(NaN)     // true
Number.isNaN("abc")   // false (no conversion)
```

---

## 🔷 Quick Comparison Table
| Expression            | Result   | Why                          |
| --------------------- | -------- | ---------------------------- |
| `typeof NaN`          | "number" | NaN is numeric invalid value |
| `NaN === NaN`         | false    | NaN is never equal           |
| `isNaN("abc")`        | true     | Converts → NaN               |
| `Number.isNaN("abc")` | false    | No conversion                |
| `Number.isNaN(NaN)`   | true     | Correct way                  |

---

## 🔷 Best Practice
✔ Always use **Number.isNaN(value)**
❌ Avoid using plain **isNaN()**
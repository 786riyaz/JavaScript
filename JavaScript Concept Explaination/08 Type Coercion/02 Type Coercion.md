# ✅ **Why does `+[]` become `0`?**

Because the **unary plus operator (`+`)** tries to convert its operand into a **number**.

So JavaScript does:

```
+[]  → Number([])
```

Now the question becomes:

# ✅ **What is `Number([])`?**

To convert **any value** into a number, JavaScript follows this path:

```
Value → ToPrimitive → ToString → ToNumber
```

Let’s apply that to an empty array `[]`.

---

# ⭐ Step-by-step conversion of `[]`:

### **1️⃣ `[]` → ToPrimitive**

An empty array, when converted to primitive, becomes an empty string:

```js
[].toString()   // ""
```

Why?
Because `[].toString()` joins all elements with commas — and there are no elements.

---

### **2️⃣ `""` → ToNumber**

Now JavaScript converts `""` to a number:

```js
Number("")  // 0
```

This is a built-in JavaScript rule.

---

# 🎉 Final result:

```
+[] 
= Number([])
= Number("")
= 0
```

So `"empty array"` becomes `"empty string"` which becomes number `0`.

---

# 🧪 Try more examples to understand it deeply:

### Example 1:

```js
+["5"]
```

```
["5"] → "5" → 5
```

### Example 2:

```js
+[1,2]
```

```
[1,2] → "1,2" → Number("1,2") → NaN
```

### Example 3:

```js
+[""]
```

```
[""] → "" → 0
```

---

# 🧠 **Simple memory trick**

| Value               | As Number |
| ------------------- | --------- |
| `""` (empty string) | `0`       |
| `" "` (space)       | `0`       |
| `[]`                | `0`       |
| `{}`                | `NaN`     |
| `["5"]`             | `5`       |
| `[1,2]`             | `NaN`     |

---

# ✔ Final Answer

**An empty array becomes `0` because:**

```
[] → "" → 0
```

The unary `+` forces numeric conversion, and an **empty string always converts to `0`** in JavaScript.

---

If you want, I can also explain
✔ why `" " == 0` is true
✔ why `[] == ![]` is true
✔ why `{}` becomes NaN
✔ or draw a flowchart of coercion steps.
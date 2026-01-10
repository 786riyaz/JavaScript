console.log(false == false)               // true
console.log(false == !false)              // false
console.log(false == "0")                 // true

console.log("10" - "4" - "3" - 2 + "5");  // 15
console.log("5" - - "3");                 // 8

console.log([] == []);                    // false
console.log([] == ![]);                   // true
console.log({} + []);                     // 0

| Expression                   | Output  | Reason                      |
| ---------------------------- | ------- | --------------------------- |
| `false == false`             | `true`  | both false                  |
| `false == !false`            | `false` | false == true               |
| `false == "0"`               | `true`  | both become 0               |
| `"10" - "4" - "3" - 2 + "5"` | `"15"`  | last `+` does string concat |
| `"5" - - "3"`                | `8`     | 5 - (-3)                    |
| `[] == []`                   | `false` | different references        |
| `[] == ![]`                  | `true`  | both sides → 0              |
| `{ } + []`                   | `0`     | `{}` is block, `+[]` → 0    |

Below is a **clear, simple, interview-friendly explanation** for **each line** of your code.

---

# ✅ **1. `false == false`**

```js
console.log(false == false);
```

### ✔ Output: `true`

Because both sides are **boolean false** → equal.

---

# ✅ **2. `false == !false`**

```js
console.log(false == !false);
```

### ✔ Step-by-step:

* `!false` → `true`
* So expression becomes → `false == true`

### ✔ Output: `false`

---

# ✅ **3. `false == "0"`**

```js
console.log(false == "0");
```

### ✔ Explanation:

`==` does **type coercion**

* `false` becomes `0`
* `"0"` becomes `0`

So you compare:

```
0 == 0  → true
```

### ✔ Output: `true`

---

# ✅ **4. `"10" - "4" - "3" - 2 + "5"`**

```js
console.log("10" - "4" - "3" - 2 + "5");
```

### ✔ Step-by-step:

`-` converts strings → numbers
`+` becomes string concat if ANY side is string.

```
"10" - "4" = 6
6 - "3" = 3
3 - 2 = 1
1 + "5" → "1" + "5" = "15"
```

### ✔ Output: `"15"`

---

# ✅ **5. `"5" - - "3"`**

```js
console.log("5" - - "3");
```

This is actually:

```
"5" - ( - "3")
```

* `"5"` → 5
* `"3"` → 3
* `- "3"` → −3

  So:
```
5 - (-3) = 8
```

### ✔ Output: `8`

---

# ✅ **6. `[] == []`**

```js
console.log([] == []);
```

### ✔ Explanation

Arrays are **objects**.
Objects are compared by **reference**, not by content.

Two different array literals → two different references.

```
[] === [] → false
```

### ✔ Output: `false`

---

# ✅ **7. `[] == ![]`**

```js
console.log([] == ![]);
```

### Step-by-step:

#### **Step A:** evaluate `![]`

* `[]` is **truthy**
* `![]` → `false`

Expression becomes:

```
[] == false
```

#### **Step B:** when comparing object with boolean:

JS converts:

```
[] → "" → 0
false → 0
```

So:

```
0 == 0 → true
```

### ✔ Output: `true`

---

# ✅ **8. `{ } + []`**

```js
console.log({} + []);
```

### ✔ Why tricky?

Because `{}` at start of line is treated as a **block**, not an object.

So engine interprets this as:

```
{}   // empty block ignored
+ [] // unary + operator
```

Unary `+` converts array to number:

`[] → "" → 0`

So final expression becomes:

```
+[] → 0
```

### ✔ Output: `0`

(If written as `({} + [])` you would get `"[object Object]"` + `""` → `"[object Object]"`)

---

# 🎉 **Final Outputs Summary**
| Expression                   | Output  | Reason                      |
| ---------------------------- | ------- | --------------------------- |
| `false == false`             | `true`  | both false                  |
| `false == !false`            | `false` | false == true               |
| `false == "0"`               | `true`  | both become 0               |
| `"10" - "4" - "3" - 2 + "5"` | `"15"`  | last `+` does string concat |
| `"5" - - "3"`                | `8`     | 5 - (-3)                    |
| `[] == []`                   | `false` | different references        |
| `[] == ![]`                  | `true`  | both sides → 0              |
| `{ } + []`                   | `0`     | `{}` is block, `+[]` → 0    |
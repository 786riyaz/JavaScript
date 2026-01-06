# ✅ Operator Precedence in JavaScript (In Depth)

---

## 1️⃣ What Is Operator Precedence?

**Operator precedence** determines **the order in which operators are evaluated** in an expression **when parentheses are not used**.

> JavaScript follows a **fixed precedence table** to decide which operation runs first.

---

## 2️⃣ Basic Rule (Very Important)

> **Higher precedence operators are evaluated before lower precedence operators.**

```js
5 + 2 * 3;
```

### Evaluation Order

1. `*` has higher precedence than `+`
2. `2 * 3 = 6`
3. `5 + 6 = 11`

```js
// Output
11
```

---

## 3️⃣ Parentheses Have Highest Priority

Parentheses **override operator precedence**.

```js
(5 + 2) * 3; // 21
```

---

## 4️⃣ Operator Associativity (Closely Related)

When two operators have **the same precedence**, **associativity** decides direction.

| Associativity | Direction   |
| ------------- | ----------- |
| Left-to-right | `+ - * / %` |
| Right-to-left | `= ** ??`   |

---

### Example: Left-to-Right

```js
10 - 5 - 2;
```

Evaluates as:

```js
(10 - 5) - 2 = 3
```

---

### Example: Right-to-Left

```js
let x = y = z = 10;
```

Evaluates as:

```js
x = (y = (z = 10))
```

---

## 5️⃣ Complete Operator Precedence Table (High → Low)

| Precedence  | Operators                    |   |   |
| ----------- | ---------------------------- | - | - |
| 1 (Highest) | `()`                         |   |   |
| 2           | `++ --` (postfix)            |   |   |
| 3           | `! ~ + - typeof void delete` |   |   |
| 4           | `**`                         |   |   |
| 5           | `* / %`                      |   |   |
| 6           | `+ -`                        |   |   |
| 7           | `<< >> >>>`                  |   |   |
| 8           | `< <= > >= in instanceof`    |   |   |
| 9           | `== != === !==`              |   |   |
| 10          | `&`                          |   |   |
| 11          | `^`                          |   |   |
| 12          | `                            | ` |   |
| 13          | `&&`                         |   |   |
| 14          | `                            |   | ` |
| 15          | `??`                         |   |   |
| 16          | `?:`                         |   |   |
| 17          | `= += -= *= /=`              |   |   |
| 18 (Lowest) | `,`                          |   |   |

---

## 6️⃣ Step-by-Step Evaluation Examples

---

### Example 1: Arithmetic + Comparison

```js
10 + 5 * 2 > 20;
```

Steps:

1. `5 * 2 = 10`
2. `10 + 10 = 20`
3. `20 > 20 = false`

```js
// Output
false
```

---

### Example 2: Logical Operators

```js
true || false && false;
```

Steps:

1. `&&` evaluated first
2. `false && false = false`
3. `true || false = true`

```js
// Output
true
```

---

### Example 3: Assignment + Arithmetic

```js
let x = 10 + 5 * 2;
```

Steps:

1. `5 * 2 = 10`
2. `10 + 10 = 20`
3. `x = 20`

---

## 7️⃣ Tricky & Interview-Favorite Cases

---

### `&&` vs `||`

```js
false && true || true;
```

Steps:

1. `false && true = false`
2. `false || true = true`

```js
// Output
true
```

---

### Nullish Coalescing vs OR

```js
0 || 10;     // 10
0 ?? 10;     // 0
```

✔ `??` has **lower precedence than `||`**
✔ Parentheses often required

---

### `??` with `||` and `&&` (IMPORTANT RULE)

❌ This causes syntax error:

```js
null || undefined ?? "default";
```

✔ Correct:

```js
(null || undefined) ?? "default";
```

---

## 8️⃣ Unary vs Binary Operator Precedence

```js
-3 ** 2;  // ❌ Error
```

Correct:

```js
-(3 ** 2); // -9
```

✔ Exponentiation has **higher precedence than unary minus**

---

## 9️⃣ Pre-Increment vs Post-Increment

```js
let x = 5;
let y = x++ + 2;
```

Steps:

1. `x++` returns `5`
2. `y = 5 + 2 = 7`
3. `x = 6`

---

## 🔟 Ternary Operator Precedence

```js
let result = true ? 10 : 5 + 2;
// result = 10
```

```js
let result = false ? 10 : 5 + 2;
// result = 7
```

---

## 1️⃣1️⃣ Comma Operator (Lowest Precedence)

```js
let x = (1, 2, 3);
```

```js
// Output
3
```

---

## 1️⃣2️⃣ Best Practices (VERY IMPORTANT)

✔ Always use parentheses for clarity
✔ Never rely on memorizing entire precedence table
✔ Especially use parentheses with:

* `&&` + `||`
* `??` + logical operators
* Ternary operators

---

## 1️⃣3️⃣ Interview-Ready Definition

> Operator precedence defines the order in which JavaScript evaluates operators in an expression. Operators with higher precedence execute before lower precedence ones, and parentheses can override the default order.

---

## 1️⃣4️⃣ Memory Trick

> **BODMAS for JS + Logic**

* `()`
* `**`
* `* / %`
* `+ -`
* Comparisons
* Logical (`&& ||`)
* Assignment

---

## 1️⃣5️⃣ Common Interview Questions

**Q:** Why does `5 + 2 * 3 = 11`?
**A:** `*` has higher precedence than `+`.

**Q:** Why does `true || false && false` return true?
**A:** `&&` is evaluated before `||`.
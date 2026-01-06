## The Code

```js
console.log((0 || "zero") && ("" || "empty")); // "empty"
```

---

## 1️⃣ Operator Precedence (Why parentheses matter)

Precedence order here is:

1. `()` parentheses
2. `||` (OR)
3. `&&` (AND)

Because of parentheses, **each OR expression is evaluated first**, then `&&` is applied.

So JavaScript sees this as:

```js
("zero") && ("empty")
```

---

## 2️⃣ Evaluate Left Side: `(0 || "zero")`

### Rule of `||` (OR):

> Returns the **first truthy value**, or the **last value** if none are truthy.

* `0` → falsy
* `"zero"` → truthy

```js
0 || "zero"   // "zero"
```

✔ Left side becomes `"zero"`

---

## 3️⃣ Evaluate Right Side: `("" || "empty")`

* `""` (empty string) → falsy
* `"empty"` → truthy

```js
"" || "empty"   // "empty"
```

✔ Right side becomes `"empty"`

---

## 4️⃣ Final Expression

Now substitute the evaluated values:

```js
"zero" && "empty"
```

---

## 5️⃣ Evaluate `&&` (AND)

### Rule of `&&`:

> Returns the **first falsy value**, or the **last value** if all are truthy.

* `"zero"` → truthy
* `"empty"` → truthy

Since **both are truthy**, `&&` returns the **last operand**.

```js
"zero" && "empty"   // "empty"
```

---

## ✅ Final Output

```js
"empty"
```

That’s why this line prints:

```js
// "empty"
```

---

## 6️⃣ Key Truthy / Falsy Reminder

| Value     | Truthy/Falsy |
| --------- | ------------ |
| `0`       | ❌ falsy      |
| `""`      | ❌ falsy      |
| `"zero"`  | ✅ truthy     |
| `"empty"` | ✅ truthy     |

---

## 7️⃣ One-Line Explanation (Interview-Ready)

> The OR (`||`) operators return the first truthy values (`"zero"` and `"empty"`), and since both are truthy, the AND (`&&`) operator returns the last operand, which is `"empty"`.

---

## 8️⃣ Memory Trick

* `||` → **first truthy**
* `&&` → **last truthy**
* Parentheses decide **grouping**

---

## 9️⃣ Similar Practice Examples

```js
(null || "A") && (false || "B"); // "B"
(0 && "A") || "B";               // "B"
("X" && 0) || "Y";               // "Y"
```
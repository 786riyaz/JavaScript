# ✅ JavaScript Operators — Complete Notes

---

## 1️⃣ Arithmetic Operators

Used to perform mathematical operations.

| Operator | Meaning             |
| -------- | ------------------- |
| `+`      | Addition            |
| `-`      | Subtraction         |
| `*`      | Multiplication      |
| `/`      | Division            |
| `%`      | Modulus (remainder) |
| `**`     | Exponentiation      |
| `++`     | Increment           |
| `--`     | Decrement           |

---

### `+` (Addition / Concatenation)

```js
10 + 5;          // 15
"10" + 5;        // "105"   (string concatenation)
```

**Return Type:** `number` or `string`

---

### `- * / % **`

```js
10 - 3;          // 7
10 * 2;          // 20
10 / 2;          // 5
10 % 3;          // 1
2 ** 3;          // 8
```

**Return Type:** `number`

---

### `++` / `--` (Pre & Post)

```js
let x = 5;
x++;   // 5 (post-increment)
++x;   // 7 (pre-increment)
```

---

## 2️⃣ Assignment Operators

Used to assign values.

| Operator | Meaning           |
| -------- | ----------------- |
| `=`      | Assign            |
| `+=`     | Add & assign      |
| `-=`     | Subtract & assign |
| `*=`     | Multiply & assign |
| `/=`     | Divide & assign   |
| `%=`     | Modulus & assign  |
| `**=`    | Exponent & assign |

---

```js
let x = 10;
x += 5;     // 15
x *= 2;     // 30
```

**Return Type:** assigned value

---

## 3️⃣ Comparison Operators

Used to compare values.

| Operator | Meaning           |
| -------- | ----------------- |
| `==`     | Loose equality    |
| `===`    | Strict equality   |
| `!=`     | Loose inequality  |
| `!==`    | Strict inequality |
| `>`      | Greater than      |
| `<`      | Less than         |
| `>=`     | Greater or equal  |
| `<=`     | Less or equal     |

---

### `==` vs `===` (VERY IMPORTANT)

```js
5 == "5";     // true   (type coercion)
5 === "5";    // false  (no coercion)
```

**Return Type:** `boolean`

✔ Always prefer `===` and `!==`

---

## 4️⃣ Logical Operators

Used for boolean logic.

| Operator | Meaning |   |    |
| -------- | ------- | - | -- |
| `&&`     | AND     |   |    |
| `        |         | ` | OR |
| `!`      | NOT     |   |    |

---

### `&&` (AND)

```js
true && false;    // false
```

---

### `||` (OR)

```js
false || true;    // true
```

---

### `!` (NOT)

```js
!true;            // false
```

**Return Type:** `boolean`

---

## 5️⃣ Logical Short-Circuit Behavior

```js
"Riyaz" || "Guest";   // "Riyaz"
"" || "Guest";        // "Guest"

0 && "Hello";         // 0
true && "Hello";      // "Hello"
```

✔ Returns **last evaluated operand**, not necessarily boolean.

---

## 6️⃣ Nullish Coalescing Operator (`??`)

Returns right operand **only if left is `null` or `undefined`**.

```js
null ?? "Default";        // "Default"
undefined ?? "Default";   // "Default"
0 ?? 100;                 // 0
```

**Return Type:** any

✔ Better than `||` when `0` or `""` are valid values.

---

## 7️⃣ Conditional (Ternary) Operator

```js
condition ? value1 : value2
```

```js
let age = 20;
age >= 18 ? "Adult" : "Minor";   // "Adult"
```

**Return Type:** depends on operands

---

## 8️⃣ Type Operators

---

### `typeof`

```js
typeof 10;          // "number"
typeof "hi";        // "string"
typeof null;        // "object" ❌ (JS bug)
```

---

### `instanceof`

```js
[] instanceof Array;     // true
{} instanceof Object;    // true
```

**Return Type:** `boolean`

---

## 9️⃣ Bitwise Operators

Operate on **binary (32-bit)** values.

| Operator | Meaning               |    |
| -------- | --------------------- | -- |
| `&`      | AND                   |    |
| `        | `                     | OR |
| `^`      | XOR                   |    |
| `~`      | NOT                   |    |
| `<<`     | Left shift            |    |
| `>>`     | Right shift           |    |
| `>>>`    | Zero-fill right shift |    |

---

```js
5 & 1;    // 1
5 | 1;    // 5
5 ^ 1;    // 4
```

**Return Type:** `number`

---

## 🔟 String Operators

### `+` (Concatenation)

```js
"Hello" + " World";   // "Hello World"
```

---

## 1️⃣1️⃣ Spread Operator (`...`)

Expands iterable values.

```js
let a = [1, 2];
let b = [...a, 3, 4];   // [1, 2, 3, 4]
```

Used in:

* Arrays
* Objects
* Function arguments

---

## 1️⃣2️⃣ Rest Operator (`...`)

Collects multiple values.

```js
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3); // 6
```

---

## 1️⃣3️⃣ Optional Chaining (`?.`)

Safely access nested properties.

```js
user?.profile?.name;   // undefined (no error)
```

**Return Type:** value | `undefined`

---

## 1️⃣4️⃣ Comma Operator (Rare)

```js
let x = (1, 2, 3);
x; // 3
```

Returns **last expression**.

---

## 1️⃣5️⃣ Unary Operators

| Operator | Meaning           |
| -------- | ----------------- |
| `+x`     | Convert to number |
| `-x`     | Negate            |
| `!x`     | Logical NOT       |
| `delete` | Remove property   |
| `void`   | Returns undefined |

---

```js
+"10";       // 10
delete obj.a;
void 0;      // undefined
```

---

## 1️⃣6️⃣ Relational Operators

### `in`

```js
"a" in { a: 1 };   // true
```

---

## 1️⃣7️⃣ Assignment Logical Operators (ES2021)

```js
x ||= y;    // x = x || y
x &&= y;    // x = x && y
x ??= y;    // x = x ?? y
```

---

## 1️⃣8️⃣ Operator Precedence (Important)

```js
5 + 2 * 3;    // 11
(5 + 2) * 3;  // 21
```

✔ Parentheses have highest priority.

---

## 🧠 Interview-Critical Notes

* Use `===` over `==`
* `typeof null` is `"object"` (JS bug)
* `&&` and `||` return operands, not booleans
* `??` ignores `0`, `false`, `""`
* Spread ≠ Rest (context matters)

---

## ✅ Final Summary

| Category      | Examples           |   |       |
| ------------- | ------------------ | - | ----- |
| Arithmetic    | `+ - * / % **`     |   |       |
| Comparison    | `=== !== > <`      |   |       |
| Logical       | `&&                |   | ?? !` |
| Assignment    | `= += &&=`         |   |       |
| Object Access | `?. in instanceof` |   |       |
| Modern JS     | `... ?? ?. &&=`    |   |       |

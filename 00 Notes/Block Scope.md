This example demonstrates **block scope vs function/global scope** in JavaScript. I will explain **exactly what happens**, why it happens, and what the output is.

---

## The Code

```js
{
    var a = 1;
    let b = 2;
    const c = 3;
}
console.log(a, b, c);
```

---

## What Is This `{}` Block?

* This `{}` is a **block scope**
* Blocks are created by:

  * `{}` with `let` / `const`
  * `if`, `for`, `while`
* Blocks **do not create scope for `var`**

---

## Variable-by-Variable Explanation

### 1️⃣ `var a = 1`

* `var` is **function-scoped**, not block-scoped
* This block **does NOT create a new scope** for `var`
* `a` is hoisted to the **nearest function or global scope**

✔️ `a` is accessible outside the block

---

### 2️⃣ `let b = 2`

* `let` is **block-scoped**
* `b` exists **only inside `{}`**
* Destroyed after block execution

❌ Not accessible outside the block

---

### 3️⃣ `const c = 3`

* `const` is **block-scoped**
* Same scoping rules as `let`

❌ Not accessible outside the block

---

## What Happens at `console.log`

```js
console.log(a, b, c);
```

* `a` → exists → prints `1`
* `b` → **ReferenceError**
* `c` → **ReferenceError**

### Actual Result

```
ReferenceError: b is not defined
```

> The error occurs before `c` is evaluated.

---

## Why This Happens (Key Rule)

| Keyword | Scope             |
| ------- | ----------------- |
| `var`   | Function / Global |
| `let`   | Block             |
| `const` | Block             |

---

## Visual Scope Model

```text
Global / Function Scope
 ├─ a = 1   ← var
 └─ { Block Scope
      ├─ b = 2
      └─ c = 3
    }
```

---

## Interview-Grade Explanation

> `var` ignores block scope and leaks outside, while `let` and `const` are strictly block-scoped and inaccessible outside the block.

---

## How to Make All Variables Block-Scoped

```js
{
  let a = 1;
  let b = 2;
  const c = 3;
}
console.log(a, b, c); // ReferenceError
```

---

## Common Follow-Up Interview Question

**Q: Why was `let` introduced?**
**A:** To prevent variable leakage and bugs caused by `var`’s function-level scoping.

---

## One-Line Summary

> `var` escapes block scope, but `let` and `const` are confined to the block.

---

If you want, I can also explain:

* Temporal Dead Zone (TDZ)
* Hoisting differences (`var` vs `let`)
* Why `const` doesn’t mean immutable
* How block scope works internally in JS engines

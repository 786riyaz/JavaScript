# ✅ Error Handling in JavaScript (Complete Notes)

Error handling allows JavaScript programs to **gracefully handle runtime errors** without crashing the application.

---

## 1️⃣ What Is an Error in JavaScript?

An **error** is a problem that occurs during program execution and stops normal flow.

### Common Error Types

* `SyntaxError` – Invalid syntax
* `ReferenceError` – Variable not defined
* `TypeError` – Wrong operation on a value
* `RangeError` – Value out of range
* `Error` – Generic error

---

## 2️⃣ `try...catch` Block

### Purpose

Used to **handle runtime (execution-time) errors**.

---

### Syntax

```js
try {
  // risky code
} catch (error) {
  // error handling code
}
```

---

### How It Works

1. Code inside `try` is executed
2. If error occurs → control jumps to `catch`
3. Program continues (does not crash)

---

### Example

```js
try {
  let x = y + 10;   // y is not defined
} catch (error) {
  console.log(error.message);
}
// Output:
// y is not defined
```

---

### Important Notes

* `try` **must** be followed by `catch` or `finally`
* Only **runtime errors** are caught (not syntax errors)

---

## 3️⃣ `catch(error)` Block

### Purpose

Captures the thrown error object.

---

### Syntax

```js
catch (error) {
  // handle error
}
```

---

### Error Object Properties

| Property        | Meaning                |
| --------------- | ---------------------- |
| `error.name`    | Error type             |
| `error.message` | Error description      |
| `error.stack`   | Call stack (debugging) |

---

### Example

```js
try {
  null.toUpperCase();
} catch (e) {
  console.log(e.name);     // TypeError
  console.log(e.message);  // Cannot read properties of null
}
```

---

## 4️⃣ `finally` Block

### Purpose

Executes **always**, whether error occurs or not.

---

### Syntax

```js
try {
  // code
} catch (err) {
  // error handling
} finally {
  // always executes
}
```

---

### Example

```js
try {
  console.log("Try block");
} catch {
  console.log("Catch block");
} finally {
  console.log("Finally block");
}
// Output:
// Try block
// Finally block
```

---

### Typical Use Cases

✔ Close files
✔ Release resources
✔ Cleanup operations

---

## 5️⃣ `throw` Statement (Custom Errors)

### Purpose

Manually throws an error.

---

### Syntax

```js
throw new Error("message");
```

---

### Example

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

try {
  divide(10, 0);
} catch (e) {
  console.log(e.message);
}
// Output:
// Division by zero
```

---

## 6️⃣ Throwing Custom Error Types

```js
throw new TypeError("Invalid type");
throw new RangeError("Out of range");
```

---

## 7️⃣ `try...catch...finally` Flow Diagram (Logic)

```
try
 ├─ success → finally
 └─ error → catch → finally
```

---

## 8️⃣ `catch` Without Error Variable (ES2019+)

If you don’t need error details:

```js
try {
  JSON.parse("{bad json}");
} catch {
  console.log("Invalid JSON");
}
```

---

## 9️⃣ Nested `try...catch`

```js
try {
  try {
    throw new Error("Inner error");
  } catch (e) {
    console.log("Handled inside");
  }
} catch {
  console.log("Outer catch");
}
// Output:
// Handled inside
```

---

## 🔟 `try...catch` with Functions

```js
function risky() {
  throw new Error("Something went wrong");
}

try {
  risky();
} catch (e) {
  console.log(e.message);
}
// Output:
// Something went wrong
```

---

## 1️⃣1️⃣ Error Handling with `JSON.parse()`

```js
try {
  JSON.parse('{"a":1}');
  JSON.parse('{bad}');
} catch {
  console.log("Invalid JSON");
}
// Output:
// Invalid JSON
```

---

## 1️⃣2️⃣ Synchronous vs Asynchronous Errors

### ❌ This will NOT work

```js
try {
  setTimeout(() => {
    throw new Error("Async error");
  }, 1000);
} catch {
  console.log("Won't catch");
}
```

---

### ✅ Correct Way (Async/Await)

```js
async function test() {
  try {
    await Promise.reject("Failed");
  } catch (e) {
    console.log(e);
  }
}

test();
// Output:
// Failed
```

---

## 1️⃣3️⃣ Error Handling with Promises

```js
fetch(url)
  .then(res => res.json())
  .catch(err => console.log(err))
  .finally(() => console.log("Done"));
```

---

## 1️⃣4️⃣ Common Mistakes

❌ Catching errors silently
❌ Using `try...catch` everywhere
❌ Ignoring error messages
❌ Using try-catch for control flow

---

## 1️⃣5️⃣ Best Practices (Interview Gold)

✔ Use `try...catch` only for risky code
✔ Always log or handle errors meaningfully
✔ Use custom errors for validation
✔ Prefer `async/await` with `try...catch`
✔ Never swallow errors silently

---

## 1️⃣6️⃣ Comparison Table

| Feature         | try | catch | finally |
| --------------- | --- | ----- | ------- |
| Mandatory       | ✅   | ❌     | ❌       |
| Handles error   | ❌   | ✅     | ❌       |
| Always executes | ❌   | ❌     | ✅       |

---

## 1️⃣7️⃣ Interview-Ready Definition

> Error handling in JavaScript is done using `try`, `catch`, `finally`, and `throw` to manage runtime errors and prevent program crashes while maintaining control flow.

---

## 1️⃣8️⃣ When to Use What?

| Scenario     | Best Tool     |
| ------------ | ------------- |
| Risky code   | `try...catch` |
| Cleanup      | `finally`     |
| Validation   | `throw`       |
| Async errors | `async/await` |
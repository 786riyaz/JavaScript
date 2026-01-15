# JavaScript – Important Concepts & Interview Questions

---

## What is the `this` Keyword in JavaScript?

The **`this` keyword** refers to the **context** in which a function is executed.  
Its value depends on **how the function is invoked**.

### Common Scenarios

- **Regular Function**
  - Refers to the **global object** (`window` in browsers)
  - In **strict mode**, it is `undefined`

- **Object Method**
  - Refers to the **object that owns the method**

- **Event Handler**
  - Refers to the **HTML element** that triggered the event

---

## Can a `for...in` Loop Iterate Over Arrays?

**Yes**, but it is **not recommended**.

### Reason:
- `for...in` iterates over **all enumerable properties**
- It may include:
  - Custom properties
  - Prototype properties

### Best Practice:
- Use `for`, `for...of`, or array methods like `forEach()` for arrays

---

## What Does `[] == ![]` Return and Why?

**Output:** `true`

### Explanation:
- `![]` → `false` (because an empty array is truthy, negation makes it false)
- `[]` is coerced to `false` during comparison
- Final comparison:  
  `false == false` → `true`

---

## What is the Output of `typeof NaN`?

**Output:** `number`

### Explanation:
- `NaN` stands for **Not-a-Number**
- Despite the name, JavaScript treats it as a **numeric type**
- This is a known JavaScript quirk

---

## What is a Closure in JavaScript?

A **closure** occurs when a function **retains access to variables from its lexical scope**, even after the outer function has finished execution.

### Key Points:
- Functions remember their scope
- Enables data encapsulation
- Commonly used in callbacks and functional programming

---

## What is the Event Loop in JavaScript?

The **event loop** is a mechanism that enables **non-blocking, asynchronous execution**.

### How It Works:
- Continuously checks:
  - **Call Stack** – for tasks to execute
  - **Event Queue** – for pending asynchronous callbacks
- Ensures smooth handling of async operations like:
  - Timers
  - Promises
  - API calls

---

## What is Event Delegation in JavaScript?

**Event delegation** is a technique where a **single event listener** is attached to a **parent element** instead of multiple listeners on child elements.

### Advantages:
- Improves performance
- Reduces memory usage
- Works using **event bubbling**

---

## Define Anonymous Function

An **anonymous function** is a function **without a name**.

### Characteristics:
- Used for short-lived, one-time tasks
- Commonly used as:
  - Callback functions
  - Inline functions

---


### What is a **Shim** in JavaScript?

A **shim** in JavaScript is **code that intercepts or adapts existing functionality to match a desired API or behavior**, especially when there are differences between environments (browsers, JS engines, or versions).

---

## Interview-Ready Definition

> **A shim is a compatibility layer that adapts existing code or APIs so that newer or standardized behavior works in older or different environments.**

---

## Shim vs Polyfill (Key Difference)

| Aspect                    | Shim                          | Polyfill             |
| ------------------------- | ----------------------------- | -------------------- |
| Purpose                   | Adapts or intercepts behavior | Adds missing feature |
| Can override existing API | Yes                           | No (ideally)         |
| Use case                  | Normalize inconsistent APIs   | Provide missing APIs |
| Risk                      | Higher (can change behavior)  | Lower                |

**Important:**

* A **polyfill only adds** a feature if it does not exist
* A **shim may modify or wrap** an existing feature

---

## Example: Shim Concept

Suppose two browsers implement the same API differently.

### Browser A

```js
element.addEventListener("click", handler);
```

### Browser B (old)

```js
element.attachEvent("onclick", handler);
```

A shim adapts the old behavior:

```js
if (!Element.prototype.addEventListener) {
  Element.prototype.addEventListener = function (event, handler) {
    this.attachEvent("on" + event, handler);
  };
}
```

This **wraps existing behavior**, not just adds a missing method.

---

## Real-World Shim Example

### jQuery (Classic Shim Layer)

jQuery historically acted as a **shim**:

* Normalized DOM APIs
* Handled browser inconsistencies
* Abstracted event handling

```js
$(element).on("click", handler);
```

Internally, jQuery adjusted behavior per browser.

---

## Shim in Modern Tooling

In modern JavaScript:

* **Polyfills** are preferred
* **Shims** are used when APIs exist but behave differently

Examples:

* DOM event normalization
* Legacy browser fixes
* Cross-environment compatibility (browser vs Node.js)

---

## When to Use a Shim

Use a shim when:

* An API exists but is **inconsistent**
* You need to **normalize behavior**
* You must support legacy environments

Avoid shims when:

* A feature is completely missing → use a polyfill
* Modifying native behavior introduces risk

---

## Interview-Level Summary

> **A shim is a compatibility layer that modifies or adapts existing JavaScript APIs to behave consistently across environments, whereas a polyfill adds missing features.**

---

## One-Line Comparison (Interview)

> **Polyfill adds; Shim adapts.**

---

If you want, I can also explain:

* Why shims are considered risky
* Real examples from legacy browsers
* How shims were used before ES6
* Polyfill vs Shim vs Transpiler (full comparison)

Tell me your preference.

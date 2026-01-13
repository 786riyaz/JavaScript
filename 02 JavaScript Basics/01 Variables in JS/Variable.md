## 1. What Are Variables?

Variables are **containers for storing values** in JavaScript.

---

## 2. History of JavaScript Variable Keywords

- The `var` keyword was used in all JavaScript code from **1995 to 2015**.
- The `let` and `const` keywords were introduced in **ES6 (2015)**.
- The `var` keyword should **only be used** in code written for **older browsers**.

---

## 3. When to Use `var`, `let`, or `const`

### Best Practices
1. **Always declare variables**
2. **Always use `const`** if the value should not be changed
3. **Always use `const`** if the type should not be changed (Arrays and Objects)
4. **Use `let` only if you cannot use `const`**
5. **Use `var` only if you MUST support old browsers**

---

## 4. JavaScript Identifiers (Variable Names)

All JavaScript variables must be identified with **unique names**, called **identifiers**.

### Examples
- Short names: `x`, `y`
- Descriptive names: `age`, `sum`, `totalVolume`

### Rules for Variable Names
- Names can contain **letters, digits, underscores (`_`), and dollar signs (`$`)**
- Names must begin with a **letter**
- Names can also begin with `$` or `_` (not recommended in this tutorial)
- Names are **case-sensitive** (`y` and `Y` are different variables)
- **Reserved words** (JavaScript keywords) cannot be used as variable names

---

## 5. Undefined Variables

After declaring a variable **without assigning a value**, it has no value.

Technically, it is `undefined`.

```js
let x;
````

To assign a value, use the **equal (`=`) sign**.

```js
x = 10;
```

---

## 6. Re-Declaring JavaScript Variables

### Using `var`

If you re-declare a variable declared with `var`, it **does not lose its value**.

```js
var carName = "Volvo";
var carName;

console.log(carName); // Volvo
```

---

## 7. JavaScript Scope

### Before ES6 (2015)

JavaScript only had:

* **Global Scope**
* **Function Scope**

### After ES6

ES6 introduced:

* `let`
* `const`

These keywords added **Block Scope** to JavaScript.

---

## 8. Global Scope

* Variables declared with `var` **always have global scope**
* `var` **does NOT support block scope**

```js
{
  var x = 10;
}
console.log(x); // 10
```

---

## 9. Redeclaration Rules

* Variables declared with `let` **cannot be redeclared**
* Variables declared with `var` **can be redeclared**
* `let` prevents accidental redeclaration

---

## 10. What Is Good?

### Advantages of `let` and `const`

* Have **block scope**
* Cannot be **redeclared**
* Must be **declared before use**
* Do **not bind to `this`**
* Are **not hoisted**

---

## 11. What Is Not Good?

### Problems with `var`

* Does **not have to be declared**
* Is **hoisted**
* **Binds to `this`**

---

## 12. Difference Between `var`, `let`, and `const`

| Keyword | Block Scope | Redeclare | Reassign | Hoisted | Binds `this` |
| ------- | ----------- | --------- | -------- | ------- | ------------ |
| var     | No          | Yes       | Yes      | Yes     | Yes          |
| let     | Yes         | No        | Yes      | No      | No           |
| const   | Yes         | No        | No       | No      | No           |

---

## 13. Hoisting Behavior (`var`)

Variables declared with `var` are **hoisted to the top** and can be initialized at any time.

This means you can use the variable **before it is declared**.

```js
carName = "Volvo";
var carName;
```

---

## 14. Key Takeaways

* Prefer `const` by default
* Use `let` only when reassignment is required
* Avoid `var` unless supporting legacy browsers
* Understand scope and hoisting to avoid bugs
* Always declare variables explicitly
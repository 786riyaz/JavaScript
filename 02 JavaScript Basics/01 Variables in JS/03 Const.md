## 1. Must Be Assigned at Declaration

In JavaScript, variables declared using `const` **must be assigned a value at the time of declaration**.

### ✅ Correct
```js
const PI = 3.14159265359;
````

### ❌ Incorrect

```js
const PI;
PI = 3.14159265359; // Error
```

A `const` variable **cannot be declared first and assigned later**.

---

## 2. When to Use JavaScript `const`

Always use `const` when you know that the variable’s value **should not be reassigned**.

### Use `const` when declaring:

* A new **Array**
* A new **Object**
* A new **Function**
* A new **RegExp**

Using `const` improves code safety, readability, and helps prevent accidental reassignment.

---

## 3. Constant Objects and Arrays

The keyword `const` can be misleading.

`const` **does not define a constant value**.
It defines a **constant reference** to a value.

### Because of this, you **cannot**:

* Reassign a constant value
* Reassign a constant array
* Reassign a constant object

### But you **can**:

* Change the elements of a constant array
* Change the properties of a constant object

---

## 4. Constant Arrays

You **can modify the contents** of a constant array.

### Example

```js
// Create a constant array
const cars = ["Saab", "Volvo", "BMW"];

// Change an element
cars[0] = "Toyota";

// Add a new element
cars.push("Audi");
```

You **cannot reassign** the array itself.

### ❌ Not Allowed

```js
const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"]; // ERROR
```

---

## 5. Constant Objects

You **can modify the properties** of a constant object.

### Example

```js
// Create a constant object
const car = { type: "Fiat", model: "500", color: "white" };

// Change a property
car.color = "red";

// Add a new property
car.owner = "Johnson";
```

You **cannot reassign** the object itself.

### ❌ Not Allowed

```js
const car = { type: "Fiat", model: "500", color: "white" };

car = { type: "Volvo", model: "EX60", color: "red" }; // ERROR
```

---

## 6. Hoisting Behavior

### `var` Hoisting

Variables declared with `var` are **hoisted to the top** and **initialized**.

This means you can use them before declaration.

```js
carName = "Volvo";
var carName; // OK
```

---

### `const` Hoisting

Variables declared with `const` are **hoisted**, but **not initialized**.

* They exist in a **Temporal Dead Zone (TDZ)**.
* Using them before declaration results in a **ReferenceError**.

```js
carName = "Volvo";
const carName; // ReferenceError
```

---

## 7. Key Takeaways

* `const` must be **assigned at declaration**
* `const` prevents **reassignment**, not **mutation**
* Arrays and objects declared with `const` can be **modified internally**
* `const` variables are hoisted but **not usable before declaration**
* Prefer `const` by default for safer and cleaner JavaScript code
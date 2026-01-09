## 1. Method Shorthand (Recommended – ES6+)

This is the **cleanest and most commonly used** way.

```js
let a = {
  name: "Riyaz",
  getName() {
    return this.name;
  }
};

a.getName(); // "Riyaz"
```

### Why this is preferred

* Short syntax
* Automatically binds `this` to the object
* Industry standard

---

## 2. Function Expression as Property

Traditional and still valid.

```js
let a = {
  name: "Riyaz",
  getName: function () {
    return this.name;
  }
};

a.getName(); // "Riyaz"
```

---

## 3. Arrow Function (⚠️ Use with Caution)

```js
let a = {
  name: "Riyaz",
  getName: () => {
    return this.name;
  }
};

a.getName(); // undefined
```

### Why this fails

* Arrow functions **do not have their own `this`**
* `this` refers to outer scope, not the object

❌ **Not recommended for object methods**

---

## 4. Adding Method After Object Creation

```js
let a = {
  name: "Riyaz"
};

a.getName = function () {
  return this.name;
};

a.getName(); // "Riyaz"
```

---

## 5. Using `this` Keyword (Important)

```js
let user = {
  firstName: "Riyaz",
  lastName: "Khan",
  fullName() {
    return this.firstName + " " + this.lastName;
  }
};

user.fullName(); // "Riyaz Khan"
```

➡️ `this` refers to the **current object**

---

## 6. Using Computed Property Names

```js
let methodName = "getName";

let a = {
  name: "Riyaz",
  [methodName]() {
    return this.name;
  }
};

a.getName(); // "Riyaz"
```

---

## 7. Using Constructor Function

```js
function User(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  };
}

let u1 = new User("Riyaz");
u1.getName(); // "Riyaz"
```

⚠️ Each object gets its own copy of the function.

---

## 8. Using Prototype (Memory Efficient)

```js
function User(name) {
  this.name = name;
}

User.prototype.getName = function () {
  return this.name;
};

let u1 = new User("Riyaz");
u1.getName(); // "Riyaz"
```

✔ Best for multiple objects.

---

## 9. Using Class Syntax (Modern)

```js
class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

let u1 = new User("Riyaz");
u1.getName(); // "Riyaz"
```

---

## 10. Interview Comparison Table

| Method              | Uses `this` correctly | Recommended             |
| ------------------- | --------------------- | ----------------------- |
| Method shorthand    | ✅                     | ✅ Yes                   |
| Function expression | ✅                     | ✅ Yes                   |
| Arrow function      | ❌                     | ❌ No                    |
| Prototype method    | ✅                     | ✅ Best for many objects |
| Class method        | ✅                     | ✅ Modern                |

---

## 11. Correct Completion of Your Example

You wrote:

```js
let a = { name:"Riyaz", getname
```

Correct version:

```js
let a = {
  name: "Riyaz",
  getName() {
    return this.name;
  }
};
```

---

## 12. Interview-Ready Definition

> In JavaScript, functions added inside objects are called **methods**. They can be defined using method shorthand, function expressions, constructors, or prototypes. Arrow functions should not be used when `this` is required.

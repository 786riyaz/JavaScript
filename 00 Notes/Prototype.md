### What is **Prototype** in JavaScript?

In JavaScript, a **prototype** is a **mechanism that enables objects to inherit properties and methods from other objects**.

JavaScript uses **prototype-based inheritance**, not class-based inheritance like Java or C++.

---

## Core Definition (Interview-Ready)

> **A prototype is an internal object from which other objects inherit properties and methods in JavaScript.**

Every JavaScript object has an internal reference called **`[[Prototype]]`**.

---

## The Prototype Chain

When you access a property on an object:

1. JavaScript checks the object itself
2. If not found, it checks its prototype
3. Then the prototype’s prototype
4. Continues until `null`

This lookup path is called the **prototype chain**.

![Image](https://djcodes.wordpress.com/wp-content/uploads/2015/11/protodiagram1.png)

![Image](https://uploads.toptal.io/blog/image/392/toptal-blog-image-1399822383211.png)

---

## Example: Prototype in Action

```js
const person = {
  greet() {
    console.log("Hello");
  }
};

const user = Object.create(person);

user.greet(); // "Hello"
```

Explanation:

* `user` does not have `greet`
* JavaScript looks up `person`
* Finds `greet` and executes it

---

## `__proto__` vs `prototype` (Very Important)

| Concept     | Used By               | Purpose                          |
| ----------- | --------------------- | -------------------------------- |
| `__proto__` | Objects               | Points to the object's prototype |
| `prototype` | Constructor functions | Defines shared properties        |

### Example:

```js
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  console.log("Hi " + this.name);
};

const u1 = new User("Riyaz");

u1.sayHi(); // Hi Riyaz
```

Internally:

```text
u1.__proto__ === User.prototype // true
```

---

## How `new` Works (Interview Favorite)

When you use `new User()`:

1. Creates a new empty object
2. Links it to `User.prototype`
3. Executes constructor with `this`
4. Returns the object

---

## Prototype Chain Example

```js
function Animal() {}
Animal.prototype.eat = function () {
  console.log("Eating");
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);

const dog = new Dog();
dog.eat(); // Eating
```

Chain:

```text
dog → Dog.prototype → Animal.prototype → Object.prototype → null
```

---

## Built-in Prototypes

JavaScript provides default prototypes:

```js
Array.prototype.map
String.prototype.toUpperCase
Object.prototype.hasOwnProperty
```

That is why:

```js
[].map();
"abc".toUpperCase();
```

work without manual definitions.

---

## ES6 Classes Are Prototype-Based

```js
class User {
  sayHi() {
    console.log("Hi");
  }
}
```

Internally, this is still:

```js
User.prototype.sayHi
```

Classes are **syntactic sugar** over prototypes.

---

## Common Interview Traps

### 1. Modifying `Object.prototype` (Bad Practice)

```js
Object.prototype.test = "danger";
```

Affects all objects → avoid.

---

### 2. Arrow Functions and Prototypes

Arrow functions **do not have a `prototype`**.

---

### 3. Prototype vs Inheritance

JavaScript **does not copy methods**.
Objects **reference** their prototype.

---

## Key Takeaways

* Every object has a **prototype**
* Prototypes enable **inheritance**
* Property lookup follows the **prototype chain**
* ES6 classes still use prototypes internally

---

If you want, I can also explain:

* `Object.create()` in depth
* Difference between **class inheritance vs prototype inheritance**
* `hasOwnProperty` vs prototype properties
* Real **interview questions** with answers

Just let me know.

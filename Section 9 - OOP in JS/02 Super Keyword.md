The **super** keyword in JavaScript is used inside classes to refer to the parent (base) class. It plays a role in **inheritance** and allows a child class to access methods and constructors of its parent class.

JavaScript introduced classes with ES6, and **super** is specifically designed to work with this class-based inheritance.

---

## Main Uses of `super`

There are **two primary purposes** of the super keyword:

### 1. Calling the Parent Class Constructor

When a class extends another class, the child class must call the parent constructor using `super()` before using `this`.

#### Example:

```javascript
class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name);        // calls Parent constructor
    this.age = age;
  }
}

const obj = new Child("Riyaz", 25);
console.log(obj.name);  // Riyaz
console.log(obj.age);   // 25
```

#### Important Rule:

* In a derived (child) class constructor, **`super()` must be called first**.
* If you don’t call `super()` and try to use `this`, JavaScript will throw an error.

---

### 2. Accessing Parent Class Methods

`super` can also be used to call methods from the parent class inside the child class.

#### Example:

```javascript
class Parent {
  greet() {
    return "Hello from Parent";
  }
}

class Child extends Parent {
  greet() {
    return super.greet() + " and Hello from Child";
  }
}

const obj = new Child();
console.log(obj.greet());
```

#### Output:

```
Hello from Parent and Hello from Child
```

Here, the child class overrides `greet()`, but still uses `super.greet()` to reuse the parent logic.

---

## Summary

* `super` gives access to the **parent class**
* `super()` → calls parent constructor
* `super.methodName()` → calls parent class method
* It is only meaningful in classes that use `extends`

---

### Where `super` Cannot Be Used

* Outside classes
* In objects or regular functions
* In classes that do not extend another class

---

## Final Note

The `super` keyword improves code reuse and ensures proper initialization when using inheritance in JavaScript OOP. It is essential whenever you work with class hierarchies.

If you want, I can also explain how `super` works with static methods and getters/setters in JS classes.

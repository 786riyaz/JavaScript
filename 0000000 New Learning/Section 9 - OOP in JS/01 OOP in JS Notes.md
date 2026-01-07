# ✅ Section 9 – Object-Oriented Programming (OOP) in JavaScript

---

## 1️⃣ What is OOP? (08:37:10)

---

### Definition

**Object-Oriented Programming (OOP)** is a programming paradigm based on **objects** that contain:

* **Properties** (data)
* **Methods** (behavior)

> OOP models real-world entities using code.

---

### Real-World Analogy

| Real World       | Code       |
| ---------------- | ---------- |
| Car              | Class      |
| Color, Speed     | Properties |
| Drive(), Brake() | Methods    |

---

### Example (Without OOP ❌)

```js
let name = "Riyaz";
let age = 25;

function getDetails() {
  return name + " " + age;
}
```

❌ Data & behavior are scattered

---

### Example (With OOP ✅)

```js
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `${this.name} ${this.age}`;
  }
}

const user1 = new User("Riyaz", 25);
user1.getDetails(); // "Riyaz 25"
```

✔ Data + behavior grouped together

---

## 2️⃣ Why Use OOP? (08:39:44)

---

### Problems Without OOP

* Code duplication
* Hard to maintain
* Poor scalability
* Tight coupling

---

### Advantages of OOP

✔ Code reusability
✔ Better organization
✔ Easier maintenance
✔ Scalability
✔ Real-world modeling

---

### Interview Answer (Short)

> OOP helps structure complex applications by grouping related data and behavior into reusable, maintainable objects.

---

## 3️⃣ Classes & Objects (08:41:50)

---

## 3.1 Class

### Definition

A **class** is a **blueprint** for creating objects.

---

### Syntax (ES6)

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, I am ${this.name}`;
  }
}
```

---

## 3.2 Object

### Definition

An **object** is an **instance of a class**.

---

### Example

```js
const p1 = new Person("Riyaz", 25);
const p2 = new Person("Ali", 30);

p1.greet(); // "Hello, I am Riyaz"
p2.greet(); // "Hello, I am Ali"
```

---

### Key Notes

* `constructor()` runs automatically
* `this` refers to the current object
* Methods are stored in **prototype** (memory efficient)

---

## 4️⃣ Encapsulation (08:53:50)

---

### Definition

**Encapsulation** means **hiding internal data** and exposing only what is necessary.

> “Wrap data + methods and protect them”

---

## 4.1 Encapsulation Using Public & Private Fields

### Private Fields (`#`) – ES2022

```js
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(100);
acc.getBalance(); // 100
```

❌ `acc.#balance` → Error

---

### Benefits

✔ Data security
✔ Controlled access
✔ Prevents misuse

---

### Interview One-Liner

> Encapsulation restricts direct access to object data and allows controlled interaction through methods.

---

## 5️⃣ Inheritance (09:00:27)

---

### Definition

**Inheritance** allows one class to **reuse properties and methods of another class**.

> “Child inherits from Parent”

---

### Syntax (`extends`)

```js
class Animal {
  speak() {
    return "Animal sound";
  }
}

class Dog extends Animal {
  bark() {
    return "Bark";
  }
}

const dog = new Dog();
dog.speak(); // "Animal sound"
dog.bark();  // "Bark"
```

---

### `super` Keyword

Used to call parent constructor or methods.

```js
class User {
  constructor(name) {
    this.name = name;
  }
}

class Admin extends User {
  constructor(name, role) {
    super(name);
    this.role = role;
  }
}
```

---

### Benefits

✔ Code reuse
✔ Logical hierarchy
✔ Cleaner architecture

---

## 6️⃣ Polymorphism (09:03:28)

---

### Definition

**Polymorphism** means **same method name, different behavior**.

> “One interface, many forms”

---

### Example

```js
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  area() {
    return "Circle Area";
  }
}

class Square extends Shape {
  area() {
    return "Square Area";
  }
}

const shapes = [new Circle(), new Square()];

shapes.forEach(s => console.log(s.area()));
```

### Output

```
Circle Area
Square Area
```

---

### Key Concept

* Method overriding
* Decided at runtime

---

### Interview Definition

> Polymorphism allows objects of different classes to respond to the same method in different ways.

---

## 7️⃣ Abstraction (09:06:57)

---

### Definition

**Abstraction** means **hiding implementation details** and showing only **essential features**.

> “What to do, not how to do”

---

## 7.1 Abstraction Using Methods

```js
class Car {
  start() {
    this.#injectFuel();
    this.#ignite();
    console.log("Car started");
  }

  #injectFuel() {}
  #ignite() {}
}

const car = new Car();
car.start(); // "Car started"
```

✔ User doesn’t know internal steps

---

### JavaScript Limitation

* No native abstract classes
* Achieved via:

  * Method enforcement
  * Throwing errors
  * Interfaces via convention

---

### Example (Simulated Abstraction)

```js
class Shape {
  area() {
    throw new Error("Method must be implemented");
  }
}
```

---

## 8️⃣ OOP Pillars Summary (Interview Gold)

| Pillar        | Meaning                         |
| ------------- | ------------------------------- |
| Encapsulation | Data hiding                     |
| Inheritance   | Code reuse                      |
| Polymorphism  | Same method, different behavior |
| Abstraction   | Hide implementation             |

---

## 9️⃣ Practice Problems (09:20:01)

---

### Problem 1: Student Class

```js
class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  isPass() {
    return this.marks >= 40;
  }
}

const s1 = new Student("Riyaz", 75);
s1.isPass(); // true
```

---

### Problem 2: Employee Inheritance

```js
class Employee {
  getSalary() {
    return 30000;
  }
}

class Manager extends Employee {
  getSalary() {
    return 50000;
  }
}
```

---

### Problem 3: Polymorphism Practice

```js
class Payment {
  pay() {
    return "Processing payment";
  }
}

class CardPayment extends Payment {
  pay() {
    return "Paid via Card";
  }
}

class UpiPayment extends Payment {
  pay() {
    return "Paid via UPI";
  }
}
```

---

## 🔟 Interview-Ready Final Summary

* JS supports OOP using classes & prototypes
* ES6 made OOP syntax cleaner
* OOP improves maintainability & scalability
* Private fields improve encapsulation
* Inheritance + polymorphism enable reuse
* Abstraction hides complexity

---

## 🧠 One-Line Memory Tricks

* **Class** → blueprint
* **Object** → real thing
* **Encapsulation** → hide data
* **Inheritance** → reuse
* **Polymorphism** → same method, different result
* **Abstraction** → hide how

# ✅ Section 5 – Objects, Arrays & Destructuring (Complete Notes)

---

## 1️⃣ Objects (04:01:56)

---

## 1.1 What is an Object?

An **object** is a collection of **key–value pairs** used to store related data and behavior.

> Keys are strings (or symbols), values can be **any data type**.

---

## 1.2 Object Syntax

```js
let user = {
  name: "Riyaz",
  age: 25,
  isAdmin: true
};
```

---

## 1.3 Accessing Object Properties

### Dot Notation (preferred)

```js
user.name; // "Riyaz"
```

### Bracket Notation

```js
user["age"]; // 25
```

✔ Bracket notation allows dynamic keys

```js
let key = "name";
user[key]; // "Riyaz"
```

---

## 1.4 Adding, Updating, Deleting Properties

```js
user.city = "Delhi";     // add
user.age = 26;           // update
delete user.isAdmin;     // delete
```

---

## 1.5 Object Methods (Functions inside Objects)

```js
let user = {
  name: "Riyaz",
  getName() {
    return this.name;
  }
};

user.getName(); // "Riyaz"
```

✔ `this` refers to the current object

---

## 1.6 Iterating Over Objects

### `for...in`

```js
for (let key in user) {
  console.log(key, user[key]);
}
// name Riyaz
// age 26
```

---

## 1.7 Key Notes (Interview)

* Objects are **mutable**
* Stored by **reference**
* Keys are **unique**
* Order is not guaranteed (except some modern rules)

---

## 2️⃣ Arrays (04:10:12)

---

## 2.1 What is an Array?

An **array** is an ordered collection of values stored using **index positions**.

---

## 2.2 Array Syntax

```js
let numbers = [10, 20, 30];
```

Indexes start from `0`.

```js
numbers[0]; // 10
numbers[2]; // 30
```

---

## 2.3 Arrays Can Hold Any Data Type

```js
let arr = [1, "JS", true, { a: 1 }, [10, 20]];
```

---

## 2.4 Common Array Operations

### Add / Remove

```js
numbers.push(40);   // add end
numbers.pop();      // remove end
numbers.unshift(5); // add start
numbers.shift();    // remove start
```

---

## 2.5 Looping Over Arrays

### `for` loop

```js
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

### `for...of` (recommended)

```js
for (let value of numbers) {
  console.log(value);
}
```

---

## 2.6 Arrays vs Objects (Quick)

| Feature  | Array             | Object          |
| -------- | ----------------- | --------------- |
| Order    | Indexed           | Key-based       |
| Use case | Lists             | Structured data |
| Loop     | `for`, `for...of` | `for...in`      |

---

## 3️⃣ Object & Array Destructuring (04:21:40)

Destructuring allows you to **extract values from arrays or objects into variables**.

---

## 3.1 Array Destructuring

### Basic Example

```js
let arr = [10, 20, 30];

let [a, b, c] = arr;

a; // 10
b; // 20
c; // 30
```

---

### Skipping Values

```js
let [x, , z] = [1, 2, 3];

x; // 1
z; // 3
```

---

### Default Values

```js
let [p = 5, q = 10] = [1];

p; // 1
q; // 10
```

---

## 3.2 Object Destructuring

### Basic Example

```js
let user = { name: "Riyaz", age: 25 };

let { name, age } = user;

name; // "Riyaz"
age;  // 25
```

---

### Renaming Variables

```js
let { name: userName } = user;

userName; // "Riyaz"
```

---

### Default Values

```js
let { city = "Delhi" } = user;

city; // "Delhi"
```

---

### Nested Destructuring

```js
let user = {
  profile: {
    email: "test@mail.com"
  }
};

let { profile: { email } } = user;

email; // "test@mail.com"
```

---

## 4️⃣ Spread Operator (04:27:41)

---

## 4.1 What is Spread Operator?

The **spread operator (`...`) expands values** from arrays, objects, or iterables.

> Think: **“Spread = expand”**

---

## 4.2 Spread with Arrays

```js
let a = [1, 2];
let b = [...a, 3, 4];

b; // [1, 2, 3, 4]
```

---

## 4.3 Spread with Objects

```js
let user = { name: "Riyaz" };
let details = { ...user, age: 25 };

details;
// { name: "Riyaz", age: 25 }
```

---

## 4.4 Spread in Function Calls

```js
function add(a, b, c) {
  return a + b + c;
}

let nums = [1, 2, 3];

add(...nums); // 6
```

---

## 4.5 Spread Creates Shallow Copy

```js
let obj1 = { a: 1 };
let obj2 = { ...obj1 };

obj1 !== obj2; // true
```

---

## 5️⃣ Rest Operator (04:37:56)

---

## 5.1 What is Rest Operator?

The **rest operator (`...`) collects multiple values into an array**.

> Think: **“Rest = collect”**

---

## 5.2 Rest in Function Parameters

```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3); // 6
```

---

## 5.3 Rest in Array Destructuring

```js
let [a, b, ...rest] = [1, 2, 3, 4];

a;    // 1
b;    // 2
rest; // [3, 4]
```

---

## 5.4 Rest in Object Destructuring

```js
let user = { name: "Riyaz", age: 25, city: "Delhi" };

let { name, ...rest } = user;

name; // "Riyaz"
rest; // { age: 25, city: "Delhi" }
```

---

## 6️⃣ Spread vs Rest (Quick Comparison)

| Feature   | Spread                   | Rest                      |
| --------- | ------------------------ | ------------------------- |
| Purpose   | Expand values            | Collect values            |
| Used in   | Function calls, literals | Parameters, destructuring |
| Direction | Outward                  | Inward                    |
| Result    | Individual values        | Array                     |

---

## 7️⃣ Interview-Ready Summary

* Objects → key-value data
* Arrays → indexed lists
* Destructuring → clean extraction
* Spread → expand data
* Rest → gather data
* Both use `...` but **context matters**
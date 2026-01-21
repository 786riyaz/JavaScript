Below is a **clear, interview-ready explanation** of **Map**, followed by a **direct comparison of Hash Table vs Object vs Map**, with JavaScript-specific accuracy.

---

## 1. What Is `Map` in JavaScript?

A **`Map`** is a built-in JavaScript **collection object** that stores **key–value pairs**, where **keys can be of any data type** (objects, functions, primitives).

Internally, a `Map` is implemented using a **hash table**.

### Basic Example

```js
const map = new Map();

map.set("name", "Riyaz");
map.set(1, "one");
map.set({ id: 1 }, "object key");

console.log(map.get("name")); // Riyaz
```

---

## 2. Why `Map` Exists (Problem with Objects)

Objects were **not designed primarily as key–value stores**.

### Limitations of Objects

* Keys are **strings or symbols only**
* Prototype pollution issues
* No reliable size property
* Enumeration quirks

`Map` was introduced to solve these issues cleanly.

---
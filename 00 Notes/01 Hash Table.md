A **hash table** is a **data structure** that stores **key–value pairs** and provides **very fast access** to values—typically in **O(1)** average time—by using a **hash function** to map keys to array indices.

---

## 1. Core Idea

Instead of searching linearly, a hash table:

1. Takes a **key**
2. Applies a **hash function**
3. Converts the key into an **index**
4. Stores or retrieves the value at that index

```text
key ──hash()──► index ──► value
```

---

## 2. Simple Example

```js
// Conceptual representation
{
  "name": "Riyaz",
  "age": 25,
  "role": "Developer"
}
```

Access:

```js
obj["age"]   // O(1)
```

In JavaScript, **Objects** and **Maps** are implemented using hash tables internally.

---

## 3. Hash Function

A **hash function**:

* Converts a key into a number
* Produces the same output for the same key
* Distributes keys uniformly

### Example

```text
hash("apple") → 3
hash("banana") → 8
```

---

## 4. Collision (Important Concept)

A **collision** occurs when **two different keys produce the same index**.

```text
hash("cat") → 5
hash("dog") → 5   ❌ collision
```

### Collision Handling Techniques

#### 1. Chaining

Each index stores a list (array/linked list) of key–value pairs.

```text
Index 5 → [ ("cat", 10), ("dog", 20) ]
```

#### 2. Open Addressing

Find another empty slot:

* Linear probing
* Quadratic probing
* Double hashing

---

## 5. Time Complexity

| Operation | Average Case | Worst Case |
| --------- | ------------ | ---------- |
| Insert    | O(1)         | O(n)       |
| Search    | O(1)         | O(n)       |
| Delete    | O(1)         | O(n)       |

Worst case happens when **many collisions** occur.

---

## 6. Hash Table vs Array

| Feature | Array       | Hash Table        |
| ------- | ----------- | ----------------- |
| Access  | Index-based | Key-based         |
| Lookup  | O(1)        | O(1)              |
| Order   | Fixed       | Unordered         |
| Keys    | Integers    | Any hashable type |

---

## 7. Hash Table in JavaScript

### Object (basic)

```js
const user = {
  name: "Riyaz",
  age: 25
};
```

### Map (recommended)

```js
const map = new Map();
map.set("name", "Riyaz");
map.set(1, "one");
```

**Why Map is better than Object:**

* Any type as key
* Maintains insertion order
* Better performance guarantees

---

## 8. Real-World Uses

* Database indexing
* Caching (Redis, Memcached)
* Symbol tables (compilers)
* Session storage
* Password hashing lookup

---

## 9. Common Interview Question

**Q: Why is a hash table fast?**
**A:** Because it avoids searching by computing a direct index using a hash function.

---

## 10. One-Line Interview Answer

> A hash table is a data structure that stores key–value pairs and uses a hash function to provide constant-time average lookup, insertion, and deletion.

If you want, I can also explain:

* Hash table vs Map vs Object
* Load factor and rehashing
* How collisions affect performance
* How hashing differs from encryption

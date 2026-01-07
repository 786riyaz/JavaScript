## 1. What is Web Storage?

The **Web Storage API** is a browser feature that allows websites to **store data directly in the user’s browser** in the form of key-value pairs.

It provides two main mechanisms:

* **localStorage**
* **sessionStorage**

Both are part of HTML5 and are accessible through the global `window` object.

### Definition

Web Storage is a way to:

* Persist small amounts of data
* Save user preferences
* Cache application state
* Reduce server dependency
* Maintain data across pages

---

## Why Web Storage is Used

### Common Real-World Uses

Web Storage is typically used for:

* Remembering login status
* Storing theme (dark/light mode)
* Saving form data temporarily
* Keeping shopping cart items
* Saving user settings
* Holding tokens like JWT
* Offline data storage

---

## Features of Web Storage

* Data stored as **strings**
* Works on **same-origin policy**
* Larger capacity than cookies (around 5MB)
* Easy to use
* No expiration (for localStorage)

---

## 2. localStorage vs sessionStorage

Although both store data in similar ways, they differ in scope and lifetime.

### Differences

| Feature      | localStorage                                | sessionStorage                      |
| ------------ | ------------------------------------------- | ----------------------------------- |
| Lifetime     | Permanent until manually deleted            | Exists only for browser tab session |
| Data Sharing | Shared across all tabs/windows of same site | Not shared between tabs             |
| Expiration   | No expiration                               | Cleared when tab is closed          |
| Use Case     | Long-term persistence                       | Temporary session-based storage     |

---

## Where They Exist

```js
window.localStorage
window.sessionStorage
```

You can directly access them as:

```js
localStorage
sessionStorage
```

---

# 3. localStorage with CRUD Operations

### What is CRUD?

CRUD means:

* **Create**
* **Read**
* **Update**
* **Delete**

localStorage supports all these operations.

---

### (a) CREATE – Storing Data

To add data:

```js
localStorage.setItem("username", "Riyaz");
```

* First parameter → key
* Second parameter → value

---

### (b) READ – Getting Data

```js
const user = localStorage.getItem("username");
console.log(user);
```

Returns the stored value as a string.

---

### (c) UPDATE – Modifying Data

Updating is done using the same `setItem` method:

```js
localStorage.setItem("username", "Riyaz Khan");
```

If the key already exists, value gets replaced.

---

### (d) DELETE – Removing Data

Remove a specific key:

```js
localStorage.removeItem("username");
```

Clear all storage:

```js
localStorage.clear();
```

---

## Checking Number of Stored Items

```js
console.log(localStorage.length);
```

---

# Storing Objects in localStorage

Since Web Storage stores only strings, objects must be converted.

### Example

```js
const user = {
  name: "Riyaz",
  age: 25
};

localStorage.setItem("userData", JSON.stringify(user));
```

### Retrieving Object

```js
const data = JSON.parse(localStorage.getItem("userData"));
console.log(data.name);
```

---

## Iterating localStorage

```js
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  console.log(key, localStorage.getItem(key));
}
```

---

# 4. sessionStorage with CRUD

sessionStorage has **exactly the same methods** as localStorage.

Only difference is lifetime.

---

### CREATE

```js
sessionStorage.setItem("token", "abc123");
```

### READ

```js
sessionStorage.getItem("token");
```

### UPDATE

```js
sessionStorage.setItem("token", "updatedToken");
```

### DELETE

```js
sessionStorage.removeItem("token");
sessionStorage.clear();
```

---

# Important Methods Summary

| Operation        | Method                |
| ---------------- | --------------------- |
| Add/Update       | `setItem(key, value)` |
| Get              | `getItem(key)`        |
| Remove One       | `removeItem(key)`     |
| Remove All       | `clear()`             |
| Count            | `length`              |
| Get Key by Index | `key(index)`          |

---

# 5. Storage Scope Rules

### Same-Origin Policy

Data stored by:

```
http://example.com
```

cannot be accessed by:

```
https://example.com
http://another.com
```

Storage is isolated per:

* Protocol
* Domain
* Port

---

# 6. Storage Events

Browsers fire a `storage` event when localStorage is changed in another tab.

```js
window.addEventListener("storage", function(event) {
  console.log("Storage changed:", event.key);
});
```

This helps in multi-tab synchronization.

---

# 7. Best Practices

* Do not store sensitive plaintext passwords
* Always validate data from storage
* Use try-catch when parsing JSON
* Prefer meaningful key names
* Remove unused keys to avoid clutter

---

# 8. Limitations

* Only string data type
* Not a replacement for databases
* Synchronous API
* Storage limits depend on browser

---

# Final Summary

* Web Storage API enables client-side persistence
* Two types: localStorage and sessionStorage
* Both support full CRUD operations
* Main difference is data lifetime
* Essential for modern frontend applications

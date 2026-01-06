# ✅ Section 6 – Asynchronous JavaScript (Complete Notes)

---

## 1️⃣ What is Asynchronous JavaScript (04:45:26)

---

### Definition

**Asynchronous JavaScript** allows the program to **start a task and move on without waiting** for that task to finish.

> JavaScript is **single-threaded**, but async behavior allows **non-blocking execution**.

---

### Why Async JS is Needed

Without async:

* Browser would freeze
* Network requests would block UI
* Long tasks would stop execution

---

### Real-World Example

* Fetching data from server
* Reading files
* Timers (`setTimeout`)
* API calls

---

## 2️⃣ Synchronous vs Asynchronous (04:46:55)

---

## 2.1 Synchronous JavaScript

### Meaning

Code is executed **line by line**, and **each line waits** for the previous one to finish.

---

### Example

```js
console.log("Start");
console.log("Middle");
console.log("End");
```

**Output**

```
Start
Middle
End
```

✔ Blocking behavior
✔ Predictable order

---

## 2.2 Asynchronous JavaScript

### Meaning

Some tasks are **delegated**, and execution continues without waiting.

---

### Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 1000);

console.log("End");
```

**Output**

```
Start
End
Async Task
```

✔ Non-blocking
✔ Uses **Event Loop**

---

### Key Difference Table

| Feature     | Synchronous | Asynchronous |
| ----------- | ----------- | ------------ |
| Blocking    | Yes         | No           |
| Execution   | Sequential  | Concurrent   |
| UI Freeze   | Possible    | Avoided      |
| Performance | Lower       | Higher       |

---

## 3️⃣ Callbacks (04:51:35)

---

### Definition

A **callback function** is a function **passed as an argument** and executed later.

---

### Syntax

```js
function main(callback) {
  callback();
}
```

---

### Example

```js
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("Riyaz", () => console.log("Welcome!"));
```

**Output**

```
Hello Riyaz
Welcome!
```

---

### Asynchronous Callback Example

```js
setTimeout(() => {
  console.log("Executed after 1 second");
}, 1000);
```

---

### ❌ Callback Hell (Problem)

```js
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);
```

Problems:

* Hard to read
* Hard to maintain
* Difficult error handling

---

## 4️⃣ Promises (05:02:02)

---

## 4.1 What is a Promise?

A **Promise** represents a value that will be:

* **Resolved** (success)
* **Rejected** (failure)
* **Pending** (initial state)

---

### Promise States

| State     | Meaning |
| --------- | ------- |
| Pending   | Initial |
| Fulfilled | Success |
| Rejected  | Failed  |

---

## 4.2 Promise Syntax

```js
const promise = new Promise((resolve, reject) => {
  // async task
});
```

---

### Example

```js
const promise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    success ? resolve("Data received") : reject("Error occurred");
  }, 1000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log("Done"));
```

**Output**

```
Data received
Done
```

---

### Advantages Over Callbacks

✔ Better readability
✔ Chaining with `.then()`
✔ Centralized error handling

---

## 5️⃣ async / await (05:17:35)

---

### Definition

`async/await` is **syntactic sugar over Promises** that makes async code look **synchronous**.

---

### Syntax

```js
async function fn() {
  const result = await promise;
}
```

---

### Example

```js
function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data Loaded"), 1000);
  });
}

async function fetchData() {
  const data = await getData();
  console.log(data);
}

fetchData();
```

**Output**

```
Data Loaded
```

---

### Error Handling with `try...catch`

```js
async function fetchData() {
  try {
    await Promise.reject("Failed");
  } catch (e) {
    console.log(e);
  }
}

fetchData();
// Output: Failed
```

---

### Why async/await is Preferred

✔ Clean syntax
✔ Easy debugging
✔ Better error handling

---

## 6️⃣ What is an API? (05:39:06)

---

### Definition

**API (Application Programming Interface)** allows **two applications to communicate**.

---

### Real-World Analogy

Restaurant:

* You → Client
* Menu → API
* Kitchen → Server

---

### API Types

* REST API
* GraphQL API
* SOAP API

---

### Example API Response (JSON)

```json
{
  "id": 1,
  "name": "Riyaz",
  "role": "Developer"
}
```

---

## 7️⃣ `fetch()` for APIs (05:54:29)

---

## 7.1 What is `fetch()`

`fetch()` is a **modern API** used to make HTTP requests.

---

### Basic Syntax

```js
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

---

### Example (GET Request)

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(data => console.log(data.name));
```

---

### Using async/await with fetch

```js
async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await res.json();
  console.log(data.name);
}

getUser();
```

---

### Important Notes

* `fetch` **does not reject on HTTP errors (404, 500)**
* Must manually check `response.ok`

---

## 8️⃣ AJAX with XMLHttpRequest & Axios (06:31:58)

---

## 8.1 XMLHttpRequest (Old Way)

### Syntax

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.send();

xhr.onload = () => {
  console.log(xhr.responseText);
};
```

---

### Example

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1");
xhr.send();

xhr.onload = () => {
  const data = JSON.parse(xhr.responseText);
  console.log(data.name);
};
```

---

### Drawbacks

❌ Verbose
❌ Complex
❌ Poor error handling

---

## 8.2 Axios (Modern Library)

---

### What is Axios?

Axios is a **promise-based HTTP client**.

---

### GET Request Example

```js
axios.get("https://jsonplaceholder.typicode.com/users/1")
  .then(res => console.log(res.data.name))
  .catch(err => console.log(err));
```

---

### POST Request Example

```js
axios.post("/users", {
  name: "Riyaz"
});
```

---

### Axios Advantages

✔ Automatic JSON parsing
✔ Better error handling
✔ Cleaner syntax
✔ Supports interceptors

---

## 9️⃣ Comparison Table (Interview Gold)

| Feature        | Callback | Promise | async/await |
| -------------- | -------- | ------- | ----------- |
| Readability    | Low      | Medium  | High        |
| Error Handling | Hard     | Better  | Best        |
| Chaining       | ❌        | ✅       | ✅           |
| Modern Usage   | ❌        | ✅       | ✅           |

---

## 🔟 Final Interview Summary

* JS is **single-threaded**
* Async prevents blocking
* Callbacks → Promises → async/await (evolution)
* APIs enable communication
* `fetch` is native, Axios is powerful
* Event loop enables async behavior
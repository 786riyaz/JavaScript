```js
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    console.log(res.ok);
    console.log(res.status);
    console.log(res.json());
    return res.json();
  })
  .then((data) => console.log(data?.name));
```

---

## ❌ The Error You See

```
TypeError: Body is unusable: Body has already been read
```

This error is **correct and expected behavior**.

---

## 1️⃣ Key Rule (VERY IMPORTANT)

> **The response body can be read only ONCE.**

`res.json()` **consumes the response body stream**.

Once consumed:

* The body is **locked**
* Any further attempt to read it throws this error

---

## 2️⃣ What Exactly Is Going Wrong (Step by Step)

### Step 1: `fetch()` resolves

```js
res = Response { ... }
```

So far, everything is fine.

---

### Step 2: First `res.json()` (inside `console.log`)

```js
console.log(res.json());
```

* `res.json()` is called
* It **starts reading the response body**
* It returns a **Promise**
* The body is now **consumed**

Even though you only logged it, **the body is already used**.

---

### Step 3: Second `res.json()` (return statement)

```js
return res.json();
```

Now JavaScript says:

❌ “Sorry, the body was already read earlier.”

Hence:

```
TypeError: Body is unusable: Body has already been read
```

---

## 3️⃣ Important Clarification

This line:

```js
console.log(res.json());
```

does **NOT** log the JSON data.

It logs:

```js
Promise { <pending> }
```

But **calling it still consumes the body**.

---

## 4️⃣ Why This Is Different from `res.ok` and `res.status`

These do **NOT** read the body:

```js
res.ok      // metadata
res.status  // metadata
```

✔ Safe to call multiple times
❌ `res.json()`, `res.text()`, `res.blob()` → only once

---

## 5️⃣ Correct Way to Fix This (BEST PRACTICE)

### ✅ Read the body ONCE, then reuse the parsed data

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    console.log(res.ok);
    console.log(res.status);
    return res.json(); // read body ONCE
  })
  .then((data) => {
    console.log(data);        // full object
    console.log(data.name);   // "Leanne Graham"
  });
```

---

## 6️⃣ If You Want to Log Before Returning (Still Safe)

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(async (res) => {
    const data = await res.json(); // body read ONCE
    console.log(data);
    return data;
  })
  .then(data => console.log(data.name));
```

---

## 7️⃣ Why This Error Message Mentions `undici`

```
node:internal/deps/undici/undici
```

Explanation:

* You are running this in **Node.js**
* Node uses **Undici** internally for `fetch`
* Browser console would show a similar message, just worded differently

✔ This is not your mistake
✔ This is Node’s internal HTTP client

---

## 8️⃣ Interview-Ready Explanation

> The error occurs because `res.json()` consumes the response body stream. Once the body is read, it cannot be read again. Calling `res.json()` more than once results in a “Body has already been read” error.

---

## 9️⃣ One-Line Memory Rule

> **A fetch response body is a one-time stream — read it once.**

---

## 🔟 Related Methods with Same Rule

These all consume the body (only one allowed):

```js
res.json()
res.text()
res.blob()
res.arrayBuffer()
res.formData()
```

---

## ✅ Correct Mental Model

```
Response
 ├─ status / ok / headers  → reusable
 └─ body (stream)          → read ONCE
```
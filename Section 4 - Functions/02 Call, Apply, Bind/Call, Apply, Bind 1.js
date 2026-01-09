/*
Call, Apply, Bind
These three methods are used on functions to explicitly set the value of `this` and enable function borrowing or reuse across objects.

| Method | Execution | Argument Passing | Purpose |
| :--- | :--- | :--- | :--- |
| **`call`** | **Immediately** executes the function. | **Individual** arguments. | Quick execution with a specified `this`. |
| **`apply`** | **Immediately** executes the function. | **Array** of arguments. | Useful when arguments are already in an array. |
| **`bind`** | **Returns a *new* function** with `this` permanently set. | **Individual** or partial arguments. | Creating a permanently bound function for later use (e.g., event listeners). |

*/
const person1 = { firstName: 'Morpheus', city: 'Zion' };
const person2 = { firstName: 'Trinity', city: 'The Matrix' };

function getDetails(age, occupation) {
  console.log(`${this.firstName} is ${age} years old and lives in ${this.city}. Occupation: ${occupation}`);
}

// Call: Executes immediately, args passed individually
getDetails.call(person1, 40, 'Leader'); 
// Output: Morpheus is 40 years old and lives in Zion. Occupation: Leader

// Apply: Executes immediately, args passed as an array
getDetails.apply(person2, [35, 'Hacker']); 
// Output: Trinity is 35 years old and lives in The Matrix. Occupation: Hacker

// Bind: Creates a new function
const getMorpheusDetails = getDetails.bind(person1, 45); // Partial argument binding
getMorpheusDetails('The One'); 
// Output: Morpheus is 45 years old and lives in Zion. Occupation: The One

/*
Sure! Here is a **clear, simple explanation** of your `call`, `apply`, and `bind` example — in plain text and easy to understand.

---

# ✅ **Understanding `call`, `apply`, and `bind` in JavaScript**

In JavaScript, **functions are objects**, and they come with special methods like:

* **`call()`**
* **`apply()`**
* **`bind()`**

All three methods let you **manually control what `this` refers to** inside a function.

---

# 📌 **Why do we need these?**

Sometimes you want to use a function **with another object**, even if that function is not inside that object.

Example:

```js
function getDetails(age, occupation) {
  console.log(`${this.firstName} is ${age} years old and lives in ${this.city}. Occupation: ${occupation}`);
}
```

This function needs:

* `this.firstName`
* `this.city`

So `this` must point to some *person object*.

---

# ✅ 1. **`call()` → calls function immediately, pass arguments normally**

```js
getDetails.call(person1, 40, 'Leader');
```

Meaning:

* “Hey `getDetails`, run right now.
* And inside this function, treat `person1` as `this`.”

So `this.firstName` becomes `"Morpheus"`.

➡️ **Output:**

```
Morpheus is 40 years old and lives in Zion. Occupation: Leader
```

---

# ✅ 2. **`apply()` → calls function immediately, but arguments must be in an array**

```js
getDetails.apply(person2, [35, 'Hacker']);
```

Same as `call`, **but arguments are passed in an array**.

➡️ **Output:**

```
Trinity is 35 years old and lives in The Matrix. Occupation: Hacker
```

---

# 🔍 Why both `call` and `apply` exist?

* Use **`call`** when you have separate arguments.
* Use **`apply`** when arguments are already in an **array** (e.g., from API, math functions).

---

# ✅ 3. **`bind()` → does NOT run the function, returns a *new function***

```js
const getMorpheusDetails = getDetails.bind(person1, 45);
```

This means:

* Create a **new function**
* Fix `this` permanently to `person1`
* Also pre-fill (`45`) as the first argument (partial application)

Now call the new function:

```js
getMorpheusDetails('The One');
```

The remaining argument `"The One"` becomes occupation.

➡️ **Output:**

```
Morpheus is 45 years old and lives in Zion. Occupation: The One
```

---

# 🎯 **Quick Summary**

| Method  | Runs Immediately? | Arguments   | What It Does                             |
| ------- | ----------------- | ----------- | ---------------------------------------- |
| `call`  | ✔ Yes             | Normal args | Call function with custom `this`         |
| `apply` | ✔ Yes             | Array       | Same as call, but uses array             |
| `bind`  | ✖ No              | Normal args | Returns a new function with fixed `this` |
*/
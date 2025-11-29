Here is a **very simple, real-life example** that makes `call`, `apply`, and `bind` easy to understand 👇

---

# 🏡 **Real-Life Example: Borrowing Someone Else’s Skill**

Imagine you have **a cook** who knows how to make food.

```js
function cook(dish, time) {
  console.log(`${this.name} is cooking ${dish} for ${time} minutes.`);
}
```

And you have two people:

```js
const person1 = { name: "Riyaz" };
const person2 = { name: "Aman" };
```

---

# 🍳 **1. `call()` → You ask a person to cook *right now***

```js
cook.call(person1, "Biryani", 30);
```

Meaning in real life:

👉 “Riyaz, **cook biryani right now**, for 30 minutes.”

Output:

```
Riyaz is cooking Biryani for 30 minutes.
```

---

# 🍱 **2. `apply()` → Same as call, but recipe comes in a list**

```js
cook.apply(person2, ["Pizza", 15]);
```

Real life meaning:

👉 “Aman, cook Pizza right now.
Here is the recipe as a *list*.”

Output:

```
Aman is cooking Pizza for 15 minutes.
```

---

# 🕒 **3. `bind()` → You schedule cooking for later**

```js
const riyazWillCookLater = cook.bind(person1, "Pasta");
```

Real life meaning:

👉 “Riyaz, remember you will cook **Pasta** later.
I will tell you *when*.”

Now, later you call:

```js
riyazWillCookLater(20);
```

Output:

```
Riyaz is cooking Pasta for 20 minutes.
```

---

# 🎯 **Real-Life Summary**

| Method    | Real-Life Meaning                                                           |
| --------- | --------------------------------------------------------------------------- |
| `call()`  | Tell a person to do the job **immediately**                                 |
| `apply()` | Tell a person to do the job immediately but give **instructions as a list** |
| `bind()`  | Schedule the job for **later**, with the person already decided             |

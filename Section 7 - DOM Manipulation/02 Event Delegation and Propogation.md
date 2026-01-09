# ✅ Event Delegation & Event Capturing vs Bubbling (Complete Notes)

---

## 1️⃣ What Is Event Propagation?

When an event occurs on an element, it does **not stay on that element only**.
It **travels through the DOM tree**. This traveling is called **event propagation**.

There are **three phases**:

1. **Capturing phase** (top → down)
2. **Target phase** (actual element)
3. **Bubbling phase** (bottom → up)

---

## 2️⃣ Event Bubbling

---

### Definition

**Event bubbling** means the event starts from the **target element** and then **bubbles up** to its parent elements.

> This is the **default behavior** in JavaScript.

---

### Order (Bottom → Top)

```
button → div → body → html → document
```

---

### Example

```html
<div id="parent">
  <button id="child">Click</button>
</div>
```

```js
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
```

### Output when clicking the button

```
Child clicked
Parent clicked
```

✔ Event bubbles from child to parent

---

### Why Bubbling Exists

* Efficient event handling
* Enables **event delegation**
* Avoids attaching many listeners

---

## 3️⃣ Event Capturing (Trickling)

---

### Definition

**Event capturing** means the event starts from the **top of the DOM** and goes **down to the target element**.

> Capturing is **disabled by default**.

---

### Order (Top → Bottom)

```
document → html → body → div → button
```

---

### How to Enable Capturing

You must pass `true` as the **third parameter** to `addEventListener`.

```js
element.addEventListener("click", handler, true);
```

---

### Example

```js
document.getElementById("parent").addEventListener(
  "click",
  () => console.log("Parent (capture)"),
  true
);

document.getElementById("child").addEventListener(
  "click",
  () => console.log("Child"),
  true
);
```

### Output

```
Parent (capture)
Child
```

---

## 4️⃣ Bubbling vs Capturing (Comparison Table)

| Feature            | Bubbling     | Capturing    |
| ------------------ | ------------ | ------------ |
| Direction          | Bottom → Top | Top → Bottom |
| Default            | ✅ Yes        | ❌ No         |
| Commonly used      | ✅ Yes        | ❌ Rare       |
| Third param        | `false`      | `true`       |
| Used in delegation | ✅ Yes        | ❌ No         |

---

## 5️⃣ What Is Event Delegation?

---

### Definition

**Event delegation** is a technique where **a single event listener is attached to a parent element** instead of adding listeners to multiple child elements.

It works because of **event bubbling**.

---

### Why Event Delegation Is Needed

✔ Better performance
✔ Less memory usage
✔ Works for dynamically added elements
✔ Cleaner code

---

## 6️⃣ Event Delegation Example (IMPORTANT)

### HTML

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

---

### JavaScript (With Delegation)

```js
document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});
```

---

### Output (Clicking any `<li>`)

```
Item 1
```

or

```
Item 2
```

✔ Only **one listener**
✔ Works even if new `<li>` elements are added later

---

## 7️⃣ Without Delegation (❌ Not Recommended)

```js
document.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", () => {
    console.log(li.textContent);
  });
});
```

Problems:

* Too many listeners
* New elements won’t work automatically
* More memory usage

---

## 8️⃣ `event.target` vs `event.currentTarget`

### `event.target`

* The **actual element clicked**

### `event.currentTarget`

* The element where the listener is attached

---

### Example

```js
parent.addEventListener("click", (e) => {
  console.log(e.target);        // child
  console.log(e.currentTarget); // parent
});
```

---

## 9️⃣ Stopping Event Propagation

---

### `event.stopPropagation()`

Stops the event from bubbling or capturing further.

```js
child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child only");
});
```

---

### Output

```
Child only
```

✔ Parent listener will NOT run

---

## 🔟 `stopImmediatePropagation()`

Stops:

* Event bubbling
* Other listeners on the same element

---

## 1️⃣1️⃣ Real-World Use Cases

| Scenario               | Best Choice      |
| ---------------------- | ---------------- |
| Large lists            | Event delegation |
| Dynamic elements       | Event delegation |
| One-time special logic | Direct listener  |
| Security checks        | Capturing (rare) |

---

## 1️⃣2️⃣ Interview-Ready Definitions

**Event Bubbling:**

> The process where an event propagates from the target element upward through its ancestors.

**Event Capturing:**

> The process where an event travels from the root of the DOM down to the target element.

**Event Delegation:**

> A technique that uses event bubbling to handle events efficiently by attaching a single listener to a parent element.

---

## 🧠 One-Line Memory Tricks

* **Bubbling:** child → parent
* **Capturing:** parent → child
* **Delegation:** parent listens, child triggers

---

## 🔥 Common Interview Questions

**Q:** Why does event delegation work?
**A:** Because of event bubbling.

**Q:** Which phase is default?
**A:** Bubbling.

**Q:** Which is better for performance?
**A:** Event delegation.

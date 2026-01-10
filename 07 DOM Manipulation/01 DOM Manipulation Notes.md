# ✅ Section 7 – DOM Manipulation (Complete Notes)

---

## 1️⃣ DOM Element Selection Methods (06:38:11)

---

## 1.1 What is the DOM?

**DOM (Document Object Model)** is a **tree-like representation of HTML** that JavaScript can read and manipulate.

> Every HTML element becomes a **node/object** in JavaScript.

---

## 1.2 Selecting Elements (Core Methods)

---

### `document.getElementById()`

**Purpose:** Selects **one element** by `id`.

```js
const title = document.getElementById("heading");
```

* Returns: `HTMLElement | null`
* Fastest method
* IDs must be unique

---

### `document.getElementsByClassName()`

```js
const items = document.getElementsByClassName("item");
```

* Returns: **HTMLCollection** (live)
* Access by index: `items[0]`

---

### `document.getElementsByTagName()`

```js
const paragraphs = document.getElementsByTagName("p");
```

* Returns: **HTMLCollection**
* Live collection

---

### `document.querySelector()` ✅ (Most used)

```js
const el = document.querySelector(".box");
```

* Uses **CSS selectors**
* Returns **first matching element**
* Returns: `Element | null`

---

### `document.querySelectorAll()`

```js
const boxes = document.querySelectorAll(".box");
```

* Returns: **NodeList** (static)
* Can use `forEach`

---

### Selection Summary (Interview Gold)

| Method                 | Returns        | Live? | CSS Selector |
| ---------------------- | -------------- | ----- | ------------ |
| getElementById         | Element        | ❌     | ❌            |
| getElementsByClassName | HTMLCollection | ✅     | ❌            |
| querySelector          | Element        | ❌     | ✅            |
| querySelectorAll       | NodeList       | ❌     | ✅            |

---

## 2️⃣ Modifying, Adding & Removing Elements (06:56:54)

---

## 2.1 Modifying Content

---

### `textContent`

```js
element.textContent = "Hello";
```

* Sets plain text
* Safer than `innerHTML`

---

### `innerHTML`

```js
element.innerHTML = "<b>Hello</b>";
```

* Parses HTML
* ⚠️ Risk of XSS if user input is used

---

### `innerText`

```js
element.innerText = "Hello";
```

* Respects CSS (`display: none`)
* Slower

---

## 2.2 Modifying Attributes

---

### `getAttribute()` / `setAttribute()`

```js
img.setAttribute("src", "image.png");
img.getAttribute("src");
```

---

### Direct Property Access (Preferred)

```js
img.src = "image.png";
input.value = "Riyaz";
```

---

## 2.3 Modifying Styles

```js
element.style.color = "red";
element.style.backgroundColor = "yellow";
```

✔ Inline styles
❌ Not scalable for large apps

---

### Class Manipulation (`classList`) ✅

```js
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("open");
element.classList.contains("active"); // true/false
```

---

## 2.4 Creating & Adding Elements

---

### `document.createElement()`

```js
const div = document.createElement("div");
div.textContent = "New Element";
```

---

### Adding to DOM

```js
parent.appendChild(div);       // end
parent.prepend(div);           // start
parent.append(div1, div2);     // multiple
```

---

## 2.5 Removing Elements

```js
element.remove();
parent.removeChild(child);
```

---

## 3️⃣ Event Handling (07:15:34)

---

## 3.1 What is an Event?

An **event** is an action:

* click
* input
* submit
* keypress
* mouseover

---

## 3.2 Adding Event Listeners

### `addEventListener()` ✅

```js
button.addEventListener("click", () => {
  console.log("Clicked");
});
```

✔ Multiple listeners allowed
✔ Cleaner than inline handlers

---

### Event Object

```js
button.addEventListener("click", (event) => {
  console.log(event.target);
});
```

---

## 3.3 Common Events

| Event   | Trigger      |
| ------- | ------------ |
| click   | Mouse click  |
| input   | Typing       |
| change  | Input change |
| submit  | Form submit  |
| keydown | Key pressed  |

---

## 3.4 Removing Event Listeners

```js
function handler() {}
button.addEventListener("click", handler);
button.removeEventListener("click", handler);
```

---

## 4️⃣ Event Delegation (07:27:08)

---

## 4.1 What is Event Delegation?

**Event delegation** uses **event bubbling** to handle events on child elements using a **single parent listener**.

---

## 4.2 Why Event Delegation?

✔ Better performance
✔ Works with dynamically added elements
✔ Less memory usage

---

## 4.3 Example (Without Delegation ❌)

```js
buttons.forEach(btn => {
  btn.addEventListener("click", handleClick);
});
```

---

## 4.4 Example (With Delegation ✅)

```js
document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});
```

---

## 4.5 Event Bubbling Flow

```
Child → Parent → Document → Window
```

---

## 5️⃣ Form Handling & Real-Time Validation (07:31:26)

---

## 5.1 Handling Form Submit

```js
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page reload
  console.log("Form submitted");
});
```

---

## 5.2 Reading Form Values

```js
const name = input.value;
const checked = checkbox.checked;
```

---

## 5.3 Real-Time Input Validation

### Using `input` Event

```js
input.addEventListener("input", () => {
  if (input.value.length < 3) {
    error.textContent = "Minimum 3 characters";
  } else {
    error.textContent = "";
  }
});
```

---

## 5.4 Email Validation Example

```js
input.addEventListener("input", () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  error.textContent = regex.test(input.value)
    ? ""
    : "Invalid email";
});
```

---

## 5.5 Preventing Invalid Submission

```js
form.addEventListener("submit", (e) => {
  if (!isValid) {
    e.preventDefault();
  }
});
```

---

## 6️⃣ Best Practices (Interview Gold)

✔ Use `querySelector` / `querySelectorAll`
✔ Use `classList` instead of inline styles
✔ Prefer event delegation for lists
✔ Always `preventDefault()` in form submit
✔ Avoid `innerHTML` with user input

---

## 7️⃣ Common Mistakes

❌ Forgetting `preventDefault()`
❌ Adding too many event listeners
❌ Using `for...in` on NodeLists
❌ Manipulating DOM excessively (performance hit)

---

## 8️⃣ Interview-Ready Summary

* DOM = HTML represented as JS objects
* Selection → Modification → Events
* Event delegation uses bubbling
* Forms need validation + controlled input
* Clean DOM code improves performance
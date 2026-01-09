# 🟦 What Is Event Capturing?

When an event happens (like a click), it goes through **three phases**:

1. **Capturing Phase** → event travels **from top to bottom**
2. **Target Phase** → the exact element clicked
3. **Bubbling Phase** → event travels **from bottom to top**

**Event capturing** = catching the event **while it travels DOWN the tree first**.

---

# 🔽 Event Propagation Path (Capturing + Bubbling)

Imagine you click on an `<li>` inside this structure:

```
document → html → body → ul → li  (capturing / going down)
li → ul → body → html → document  (bubbling / going up)
```

---

# 🟥 Bubbling (default behavior)

Most events bubble *up* the tree.

You already used it in event delegation:

```js
element.addEventListener('click', handler);
```

This listens during the **bubbling** phase.

---

# 🟦 Capturing (optional)

To listen during capturing, you add a **third parameter = true**:

```js
element.addEventListener('click', handler, true);
```

### ✔ Now it fires **before** the bubbling listeners.

---

# 🔍 Example Showing Capturing vs Bubbling

Try this in a simple HTML:

```html
<div id="outer">
  <div id="inner">
    <button id="btn">Click me</button>
  </div>
</div>
```

### JavaScript:

```js
document.getElementById('outer').addEventListener('click', () => {
  console.log('Outer - Bubbling');
});

document.getElementById('inner').addEventListener('click', () => {
  console.log('Inner - Bubbling');
});

document.getElementById('btn').addEventListener('click', () => {
  console.log('Button - Bubbling');
});

// CAPTURING
document.getElementById('outer').addEventListener('click', () => {
  console.log('Outer - Capturing');
}, true);

document.getElementById('inner').addEventListener('click', () => {
  console.log('Inner - Capturing');
}, true);

document.getElementById('btn').addEventListener('click', () => {
  console.log('Button - Capturing');
}, true);
```

---

# 🟩 When You Click the Button

The output will be:

```
Outer - Capturing
Inner - Capturing
Button - Capturing
Button - Bubbling
Inner - Bubbling
Outer - Bubbling
```

This shows the full propagation cycle:

### 🔽 Capturing phase (top → down)

1. outer (captures)
2. inner (captures)
3. button (captures)

### 🎯 Target phase

The button is clicked

### 🔼 Bubbling phase (bottom → up)

4. button (bubbles)
5. inner (bubbles)
6. outer (bubbles)

---

# 🟡 Why Is Capturing Rarely Used?

Because developers mostly need bubbling (bottom → up):

✔ easier for event delegation
✔ most browser UIs are designed around bubbling
✔ capturing can create confusing order issues

---

# 🟣 When Is Capturing Useful?

Capturing is useful when:

### ✔ 1. You want the **parent to handle the event before the target**

Example: stop something **before it reaches** inner elements.

### ✔ 2. You want to intercept events early

Like clicking inside a dropdown before children react.

### ✔ 3. You want to block specific interactions

By using:

```js
event.stopPropagation();
```

but early in capturing.
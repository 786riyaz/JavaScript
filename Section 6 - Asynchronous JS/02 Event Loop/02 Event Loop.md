# ============================
# ✅ **EVENT LOOP BASICS**
# ============================
# 11. **setTimeout()**

Schedules function after a **minimum delay**.

```js
setTimeout(() => console.log("Hello"), 1000);
```

Goes to: **Macro-task Queue**

---

# 12. **setImmediate()** (Node.js)

Executes callback **immediately after current poll phase**.

```js
setImmediate(() => console.log("Immediate"));
```

Usually runs faster than `setTimeout(0)`.

---

# 13. **process.nextTick()** (Node.js)

Executes **before** the event loop continues.

It is **highest priority** among async tasks.

```js
process.nextTick(() => console.log("Next tick"));
```

Order:

1. Sync code
2. `process.nextTick()`
3. Promise microtasks
4. `setTimeout / setImmediate`

⚠ Using too many `nextTick()` calls can block the loop.

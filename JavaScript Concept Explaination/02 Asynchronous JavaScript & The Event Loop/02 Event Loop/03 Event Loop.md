**1. `setTimeout()`**
Runs your callback **after at least X ms**; goes to the **macrotask queue**.

**2. `setImmediate()`** (Node.js)
Runs the callback **right after the current I/O phase**, usually faster than `setTimeout(0)`.

**3. `process.nextTick()`** (Node.js)
Runs **before the event loop continues**, even before Promises — **highest priority task**.

**4. Priority Order**
**Synchronous → nextTick → Promises → setTimeout → setImmediate**

**5. In I/O callbacks**
`setImmediate` always runs **before** `setTimeout(0)`.
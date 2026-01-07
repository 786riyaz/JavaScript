## 1. Why Optimize JavaScript?

### Purpose of Optimization

JavaScript runs in a single-threaded environment. Poorly written code can cause:

* Slow page rendering
* Laggy user interface
* High CPU usage
* Excessive memory consumption
* Poor user experience

### Why Optimization is Important

Optimization is required because JS is used for:

* Dynamic web apps
* Real-time dashboards
* Animations
* Games
* Large data processing
* Backend services (Node.js)

Even small inefficiencies multiply when:

* Code runs inside loops
* Many users access the app
* Large DOM trees exist
* Frequent events fire

---

### Core Goals

When optimizing JS we aim to:

* Reduce execution time
* Lower memory footprint
* Avoid blocking the main thread
* Improve concurrency
* Minimize re-renders and repaints

---

## 2. Prevent Memory Leaks – Memory Management

### What is a Memory Leak?

A memory leak occurs when:

> Objects that are no longer needed are **not released from memory**.

Over time this leads to:

* Increasing RAM usage
* Browser tab crashes
* Node process slowdown

---

### Common Causes

#### (a) Uncleared Timers

```js
let timer = setInterval(() => {
  console.log("Running");
}, 1000);
```

If not cleared, the callback keeps references alive.

**Fix**

```js
clearInterval(timer);
```

---

#### (b) Unremoved Event Listeners

```js
window.addEventListener("resize", handler);
```

If DOM elements are deleted but listeners remain, memory cannot be freed.

**Fix**

```js
window.removeEventListener("resize", handler);
```

---

#### (c) Global Variables

```js
window.data = largeObject;
```

Anything attached to window lives forever.

**Avoid**

* Unnecessary globals
* Accidental closures

---

#### (d) Closures Holding References

```js
function outer() {
  const bigData = new Array(1000000);

  return function inner() {
    console.log(bigData.length);
  };
}
```

The inner function prevents `bigData` from being garbage collected.

---

### Memory Leak Prevention Rules

* Clear intervals and timeouts
* Detach listeners
* Avoid storing DOM nodes in JS objects
* Use local scope instead of globals
* Break circular references

---

### Garbage Collection Basics

JS automatically frees memory when:

* No references point to an object

But GC fails when references remain unintentionally.

---

## 3. Event Loop & Concurrency

### Event Loop Recap

JavaScript executes code using:

* Call Stack
* Web APIs
* Callback Queue
* Microtask Queue
* Event Loop Scheduler

---

### Concurrency Concept

Although JS is single-threaded, it handles multiple tasks through:

* Asynchronous callbacks
* Promises
* `async/await`

---

### Microtasks vs Macrotasks

| Type      | Examples                            |
| --------- | ----------------------------------- |
| Microtask | Promises, queueMicrotask            |
| Macrotask | setTimeout, setInterval, DOM events |

Microtasks run **before** macrotasks, enabling efficient scheduling.

---

### Avoid Blocking the Event Loop

Bad practice:

```js
while(true) {}    // freezes UI
```

Long-running operations should be broken into async chunks.

---

### Using Asynchronous Patterns

```js
setTimeout(processNextBatch, 0);
```

This yields control back to browser.

---

## 4. Performance Profiling

### What is Profiling?

Profiling means:

> Measuring and analyzing where time and memory are being spent.

---

### Tools for Profiling

Browsers provide:

* Chrome DevTools Performance tab
* Memory tab
* Profiler / Sources
* Lighthouse

---

## How to Profile

1. Open DevTools (F12)
2. Go to **Performance Tab**
3. Click Record
4. Interact with page
5. Stop Recording

---

### What You Can Detect

Profiling reveals:

* Slow functions
* Expensive layouts
* Forced reflows
* Heavy scripting tasks
* FPS drops

---

### Using console for Profiling

```js
console.profile("test");
heavyFunction();
console.profileEnd("test");
```

---

## 5. Code Optimization Techniques

### Core Ideas

* Reduce unnecessary work
* Optimize DOM access
* Cache values
* Avoid redundant calculations

---

### (a) Minimize DOM Manipulation

Slow:

```js
for(let i=0;i<100;i++){
  document.body.innerHTML += i;
}
```

This updates DOM 100 times.

**Optimized**

```js
let str="";
for(let i=0;i<100;i++){
  str += i;
}
document.body.innerHTML = str;
```

---

### (b) Batch Updates

* Use DocumentFragment
* Update offscreen
* Modify classes instead of styles

---

### (c) Debouncing & Throttling

Limit frequent events like scroll and resize.

---

### (d) Avoid Deep Nesting

Simpler logic is faster and easier for engines to optimize.

---

### (e) Use Proper Data Structures

* Maps for lookup
* Sets for uniqueness
* Typed arrays for numeric data

---

## 6. Memoization

### What is Memoization?

Memoization is:

> Caching results of expensive function calls so future calls are fast.

---

### Example Concept

```js
function square(n) {
  return n * n;
}
```

If called repeatedly with same input, we can cache.

---

### Memoized Version

```js
function memoize(fn) {
  const cache = {};

  return function(n) {
    if (cache[n]) {
      return cache[n];
    }
    cache[n] = fn(n);
    return cache[n];
  };
}

const fastSquare = memoize(square);

fastSquare(5);   // calculated
fastSquare(5);   // returned from cache
```

---

### Where Used

* Recursive functions
* Dynamic programming
* React component rendering
* API response caching

---

## 7. Efficient Algorithmic Approaches

Performance is not only about syntax but about **logic efficiency**.

---

### Time Complexity Matters

| Approach      | Complexity |
| ------------- | ---------- |
| Linear Search | O(n)       |
| Nested Loops  | O(n²)      |
| Hash Lookup   | O(1)       |

Choosing the right algorithm drastically improves performance.

---

### Example: Lookup Optimization

Slow:

```js
arr.includes(value);
```

inside a loop causes repeated scans.

**Better**

```js
const set = new Set(arr);
set.has(value);      // O(1)
```

---

## 8. async / defer Script Loading

HTML level optimization:

```html
<script src="app.js" defer></script>
```

Prevents render-blocking.

---

## 9. Lazy Loading Code

* Split bundles
* Load modules only when required

Used with:

* Dynamic `import()`

---

## 10. Avoid Recalculating Inside Loops

Bad:

```js
for(let i=0;i<arr.length;i++){}
```

`arr.length` is checked every iteration.

Optimized:

```js
const len = arr.length;
for(let i=0;i<len;i++){}
```

---

## 11. Use Web Workers for Heavy Tasks

* Move CPU-intensive logic to background thread

---

## 12.20 – Memoization in Recursion

Classic example: Fibonacci

---

### Non-Optimized

```js
function fib(n){
  if(n<=1) return n;
  return fib(n-1)+fib(n-2);
}
```

Very slow: exponential O(2ⁿ)

---

### Optimized with Memoization

```js
function fibMemo(n, cache={}) {
  if (n<=1) return n;

  if (cache[n]) return cache[n];

  cache[n] = fibMemo(n-1, cache) + fibMemo(n-2, cache);
  return cache[n];
}
```

Now complexity reduced to **O(n)**.

---

# 13. Algorithmic Thinking Approaches

To write high-performance JS:

* Prefer iterative over recursive where possible
* Use divide-and-conquer
* Reduce nested iterations
* Apply caching
* Use binary search instead of linear
* Stream data instead of loading all at once

---

## 14. Performance Profiling Metrics

While profiling look for:

* Script execution time
* Rendering time
* Painting time
* Idle time
* Frames per second

---

## 15. Practical Code Optimization Checklist

* Use template literals instead of +
* Avoid excessive try-catch in loops
* Replace large switch with map lookup
* Use `requestAnimationFrame` for animations
* Debounce high-frequency handlers
* Release unused references

---

# Final Summary of the Section

* Optimization improves UX and scalability
* Memory leaks degrade long-term performance
* Event Loop understanding helps write non-blocking code
* Profiling identifies real bottlenecks
* Memoization avoids repeated expensive calculations
* Algorithmic efficiency gives the largest gains

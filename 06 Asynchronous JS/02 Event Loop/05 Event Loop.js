/*
Event Loop - The Most Important Interview Topic
The event loop determines execution order of asynchronous tasks.

### Order of execution:
1. **Synchronous code**
2. **process.nextTick()**
3. **Promise microtasks (then, catch)**
4. **Timers (setTimeout)**
5. **I/O callbacks**
6. **setImmediate**
7. **close events**
*/

console.log("1");
setTimeout(() => console.log("timeout"), 0);
setImmediate(() => console.log("immediate"));
Promise.resolve().then(() => console.log("promise"));
process.nextTick(() => console.log("nextTick"));
console.log("2");

/*
Output:
=============================
1
2
nextTick
promise
timeout / immediate (depends)
immediate / timeout

*/
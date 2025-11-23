/*
Event Loop
The **Event Loop** is the core mechanism that allows JavaScript (a single-threaded language) to perform non-blocking I/O operations by offloading tasks to the browser/system APIs and handling their callbacks efficiently.

  * **Call Stack:** Executes synchronous code.

  * **Microtasks Queue:** Holds **Promise** callbacks (`.then()`, `.catch()`, `.finally()`). Cleared *before* the Macrotask Queue is checked.

  * **Macrotasks Queue (Task Queue):** Holds tasks like **`setTimeout()`**, `setInterval()`, I/O, and UI rendering.
*/
console.log('Start Sync'); // 1. Runs immediately
setTimeout(() => console.log('3. Macrotask (Timeout)'), 0); // Goes to Macrotask Queue
Promise.resolve().then(() => console.log('2. Microtask (Promise)')); // Goes to Microtask Queue
console.log('End Sync'); // 4. Runs immediately

// Output Order:
// Start Sync
// End Sync
// Microtask (Promise)  <- Call Stack empty, Microtasks run first
// Macrotask (Timeout)  <- Microtasks empty, Macrotasks run next


/*
Explanation of Event Loop Behavior
---------------------------------

JavaScript is single-threaded, meaning it executes one thing at a time through the **Call Stack**.
But it can still handle asynchronous tasks using the **Event Loop**, which manages:

1. Call Stack       → Runs all normal synchronous code
2. Microtask Queue  → Promise callbacks
3. Macrotask Queue  → setTimeout, setInterval, I/O tasks

Important Rule:
---------------
After the Call Stack becomes empty, the Event Loop ALWAYS checks the
**Microtask Queue first** before checking the Macrotask Queue.

Now look at the code:

----------------------------------------------------
console.log('Start Sync'); 
setTimeout(() => console.log('3. Macrotask (Timeout)'), 0);
Promise.resolve().then(() => console.log('2. Microtask (Promise)'));
console.log('End Sync');
----------------------------------------------------

Step-by-step Execution:
-----------------------

1) console.log("Start Sync")
   - This is synchronous.
   - Immediately printed.

2) setTimeout(...)
   - This is asynchronous.
   - Its callback is sent to the **Macrotask Queue**.
   - BUT it will NOT run now.

3) Promise.resolve().then(...)
   - This is also asynchronous.
   - The `.then()` callback is added to the **Microtask Queue**.
   - Microtasks have **higher priority** than Macrotasks.

4) console.log("End Sync")
   - Still synchronous.
   - Printed immediately.

Now the Call Stack becomes empty.
The Event Loop decides what to run next:

✓ First: Run ALL Microtasks
   → Prints: "2. Microtask (Promise)"

✓ After Microtasks are empty: Run Macrotasks
   → The setTimeout callback finally runs
   → Prints: "3. Macrotask (Timeout)"

Therefore, the exact output is:

Start Sync  
End Sync  
2. Microtask (Promise)  
3. Macrotask (Timeout)

This happens because **Promises (Microtasks) ALWAYS run before setTimeout (Macrotasks)**.

*/
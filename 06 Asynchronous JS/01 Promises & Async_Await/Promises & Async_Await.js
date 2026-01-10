/*
Promises & Async/Await
**Promises** manage asynchronous operations. They are placeholder objects that represent the eventual success or failure of an async operation. **`async`/`await`** is modern syntax to work with Promises, making async code read like sync code.

| State | Description |
| :--- | :--- |
| **Pending** | Initial state; the operation is still ongoing. |
| **Fulfilled** | The operation completed successfully. |
| **Rejected** | The operation failed. |
*/

// Promise
function fetchData(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve('Data fetched successfully!');
      } else {
        reject('Error: Network failed.');
      }
    }, 500);
  });
}

// Async/Await (Cleaner syntax)
async function runAsync() {
  try {
    const data = await fetchData(true);
    console.log(data); // Output: Data fetched successfully!
    
    await fetchData(false); // This will jump to catch
  } catch (error) {
    console.error(error); // Output: Error: Network failed.
  }
}

runAsync();
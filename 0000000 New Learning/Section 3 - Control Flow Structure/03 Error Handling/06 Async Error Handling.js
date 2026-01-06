new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error("Async error"));
  }, 1000);
})
.catch(e => console.log("Caught:", e.message));

// Output:
// Caught: Async error

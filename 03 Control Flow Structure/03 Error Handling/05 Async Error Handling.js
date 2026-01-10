setTimeout(() => {
  try {
    throw new Error("Async error");
  } catch (e) {
    console.log("Caught:", e.message);
  }
}, 1000);

// Output after 1 second:
// Caught: Async error

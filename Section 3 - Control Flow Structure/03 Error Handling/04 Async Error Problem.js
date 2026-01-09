try {
  setTimeout(() => {
    throw new Error("Async error");
  }, 2000);
} catch {
  console.log("Won't catch");
}

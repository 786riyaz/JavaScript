// Spread (`...`):** Expands an iterable into its elements. Used to create copies or merge arrays/objects.

// Example (Copy & Merge):
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2, 5]; // [1, 2, 3, 4, 5]
const copied = { ...person, age: 31 }; // Shallow copy and override age
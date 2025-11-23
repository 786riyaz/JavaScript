// Optional Chaining (`?.`): Safely accesses nested properties. If any part of the chain is `null` or `undefined`, the expression short-circuits and returns **`undefined`** instead of throwing an error.
const agent = { name: 'Smith', details: { id: 101 } };
// const agent = null; // Test case 2

// console.log(agent.details.id);   // ❌ Error if agent is null
console.log(agent?.details?.id); // Output: 101 (or undefined if agent is null)
/*
Generators & Iterators
  * **Iterators:** An object that knows how to access items from a collection one at a time, keeping track of its current position. It must implement a `next()` method returning `{ value: any, done: boolean }`.

  * **Generators:** Functions defined with `function*` that can be paused and resumed. They use the **`yield`** keyword to produce a sequence of values on demand (lazy evaluation).
*/

// Example (Generator):**
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++; // Pause execution and return value
  }
}

const generator = idGenerator();
console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
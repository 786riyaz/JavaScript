### ✅ Pure Functions & Side Effects

Principles from functional programming for writing predictable and testable code.
  * **Pure Function:**
    1.  Given the same input, always returns the same output (referential transparency).
    2.  Has **no observable side effects**.
  * **Side Effect:** Any interaction with the outside world (e.g., logging to console, modifying global state, making an API call, changing the DOM).

======================================================================================

```javascript

let total = 0;

// Impure function (modifies global 'total')
function addToTotalImpure(num) {
  total += num; // Side effect: modifying external state
  return total;
}

// Pure function (uses only its inputs)
function addPure(a, b) {
  return a + b; // No side effects, always returns same output for same input
}

console.log(addPure(5, 5)); // Output: 10
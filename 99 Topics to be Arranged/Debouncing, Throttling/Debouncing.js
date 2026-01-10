/*
Debouncing & Throttling
These are techniques to control how often a function is executed, typically for high-frequency events like scrolling, resizing, or keypresses.

  * **Debouncing:** Ensures a function is called only **after a specified time has passed** without any further event triggers. (e.g., waiting for a user to finish typing before searching).

  * **Throttling:** Ensures a function is called at **most once** within a specified time period. (e.g., limiting the rate of updates during a window resize).
*/

//   Example (Conceptual Debounce):
// Simplified concept (utility function needed for actual use)
let timeoutId;
function debounce(fn, delay) {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    fn();
  }, delay);
}

// Every keypress calls this, but 'search' only runs 500ms after the last keypress
document.getElementById('search-input').addEventListener('keypress', () => {
    debounce(() => console.log('Searching...'), 500);
}); 
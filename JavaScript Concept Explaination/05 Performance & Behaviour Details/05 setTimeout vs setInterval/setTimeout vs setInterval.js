/*
setTimeout vs setInterval

Both schedule code to run later, but differ in repetition and accuracy.

  * **`setTimeout(fn, delay)`:** Executes `fn` **once** after `delay` milliseconds.

  * **`setInterval(fn, delay)`:** Executes `fn` **repeatedly** every `delay` milliseconds until stopped with `clearInterval()`.

      * **Note:** Neither guarantees execution *exactly* at the delay interval; they guarantee execution *no sooner* than the delay, depending on Call Stack availability.
*/
const intervalId = setInterval(() => {
  console.log('Running every 1 second...');
}, 1000);

// Stop the interval after 5 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log('Interval stopped.');
}, 5000);
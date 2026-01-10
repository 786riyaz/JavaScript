/*
Closures
A **closure** is the ability of a function to **remember and access its lexical scope** (the variables defined where it was created), even after the outer function has finished executing and its execution context is gone.

  * **Detail:** Closures are crucial for data privacy and creating factory functions. The inner function retains a persistent reference to the outer function's environment.
*/

function createGreeter(greeting) {
  // 'greeting' is the variable retained by the closure
//   console.log("Inside createGreeter with greeting:", greeting); // This will print when the function is executed
  return function(name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const sayHello = createGreeter('Hello');
const sayHi = createGreeter('Hi');

sayHello('Alice'); // Output: Hello, Alice!
sayHi('Bob');     // Output: Hi, Bob!
// 'sayHello' still remembers 'Hello', and 'sayHi' remembers 'Hi'.
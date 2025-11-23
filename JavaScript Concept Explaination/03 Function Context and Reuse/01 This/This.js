/*
`This` Keyword
The value of **`this`** is determined by **how a function is called**, known as its call-site.

  * **Method Call (`obj.method()`):** `this` refers to the owning object (`obj`).

  * **Simple Function Call (non-strict mode):** `this` refers to the global object (`window`/`global`).

  * **Constructor Call (`new Func()`):** `this` refers to the newly created object.

  * **Arrow Functions:** `this` is **lexically scoped** (inherited from the surrounding code) and cannot be changed.
*/

const user = {
  name: 'Neo',
  
  // 1. Regular function: 'this' is 'user'
  greet: function() {
    console.log(`Hello, I am ${this.name}.`);
  },
  
  // 2. Arrow function: 'this' inherits from global/module scope (not 'user')
  arrowGreet: () => {
    console.log(`Hello, arrow function 'this.name' is ${this.name}.`);
  }
};

user.greet();      // Output: Hello, I am Neo.
user.arrowGreet(); // Output: Hello, arrow function 'this.name' is undefined. (Unless a global 'name' exists)
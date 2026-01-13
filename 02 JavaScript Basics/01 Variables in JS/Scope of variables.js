/*
 Scope (Global, Function, Block)
**Scope** determines where variables, functions, and objects are accessible in your code.

  * **Global Scope:** Declared outside of any function or block. Accessible from anywhere.

  * **Function (Local) Scope:** Created by function declarations. Variables declared inside are only accessible within that function. `var` is function-scoped.

  * **Block Scope:** Created by curly braces `{}` (e.g., `if` blocks, `for` loops). Variables declared with **`let`** and **`const`** are block-scoped.
*/
const globalVar = 'Global';

function exampleScope() {
  const functionVar = 'Function';
  
  if (true) {
    let blockVar = 'Block';
    console.log(globalVar, functionVar, blockVar); // All accessible
  }
  
  // console.log(blockVar); // ❌ ReferenceError: blockVar is not defined
  console.log(functionVar); // Accessible
}

// console.log(functionVar); // ❌ ReferenceError: functionVar is not defined
exampleScope(); // Output: Global Function Block 

/*
Peek: Returns the top element on the stack.
*/

console.clear();
console.log("Application Started - Returning the top element of the stack");
// let stack = [];
let stack = [1, 2, 3, 4, 5, 10, 20, 50, 100];

let top_Element = stack.length - 1;

let isEmpty = function () {
    if (top_Element == -1) { return true; }
    else { return false; }
}

if (isEmpty()) { console.log("Stack is Empty !!!"); }
else { console.log("Top Element ::", stack[top_Element]); }
/*
Pop: Removes and returns the top element from the stack.
*/

console.clear();
console.log("Application Started - Poping Element from the Stack...");
// let stack = [];
let stack = [1, 2, 3, 4, 5, 10, 20, 50, 100];

let top_Element = stack.length - 1;

let popFromStack = function () {
    let element = stack.pop();
    console.log("Poped Element ::", element, "From index ::", top_Element);
    update_Top_Element();
}

let update_Top_Element = function () {
    top_Element = stack.length - 1;
}

popFromStack();
popFromStack();
popFromStack();
popFromStack();
popFromStack();
popFromStack();
popFromStack();
popFromStack();
popFromStack();
popFromStack();
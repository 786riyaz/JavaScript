/*
isEmpty: Checks if the stack is empty.
*/

console.clear();
console.log("Application Started - Checking if Stack is Empty?");
// let stack = [];
let stack = [1];

let top_Element = stack.length - 1;
// console.log(top_Element);

let isEmpty = function () {
    console.log("inside the Is_Empty Function....");
    if (top_Element == -1) {
        console.log("Stack Array is Empty !!!");
        return true;
    } else {
        console.log("Stack Array is not Empty !!!");
        return false;
    }
}

console.log("\n\nIs Array Empty ?", isEmpty());
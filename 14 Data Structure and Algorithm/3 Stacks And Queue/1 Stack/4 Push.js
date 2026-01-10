/*
Peek: Returns the top element on the stack.
*/

console.clear();
console.log("Application Started - Pushing Element to the Stack...");
// let stack = [];
let stack = [1, 2, 3, 4, 5];

let top_Element = stack.length - 1;

let pushInStack = function (element) {
    stack.push(element);
    let index = update_Top_Element();
    return index;
}

let update_Top_Element = function () {
    top_Element = stack.length - 1;
    return top_Element;
}

console.log("Pushed Element at ::", pushInStack(9));
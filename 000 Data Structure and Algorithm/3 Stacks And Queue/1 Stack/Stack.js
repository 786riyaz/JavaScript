let stack = [1, 2, 4];
let top_Element = stack.length - 1;
console.log("Top Element at Starting ::", top_Element);

document.addEventListener('DOMContentLoaded', (event) => {
    let currentArrayElement = document.getElementById("currentArray");

    let updateCurrentArray = function () {
        currentArrayElement.innerHTML = "Current Stack :: " + JSON.stringify(stack);
    }

    let isEmpty = function () {
        console.log("Is Empty Function....");
    }

    let update_Top_Element = function () {
        top_Element = stack.length - 1;
        console.log("Updated the Top Element :::", top_Element);
    }

    let find_Size = function () {
        console.log("Size of Stack :::", top_Element);
    }

    let peek = function () {
        console.log("Peek Function....");
    }

    let push = function () {
        console.log("Push Function....");
    }

    let pull = function () {
        console.log("Pull Function....");
    }

    updateCurrentArray();
});
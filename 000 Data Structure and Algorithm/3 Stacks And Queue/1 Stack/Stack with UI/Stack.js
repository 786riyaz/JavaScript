let stack = [1, 2, 4];
let top_Element = stack.length - 1;
console.log("Top Element at Starting ::", top_Element);

document.addEventListener('DOMContentLoaded', (event) => {
    let currentArrayElement = document.getElementById("currentArray");

    let updateCurrentArrayOnWeb = function () {
        let message = "Current Stack :: [ ";
        for (let i = 0; i < stack.length; i++) {
            if (i == stack.length - 1) {
                message += stack[i];
            } else {
                message += stack[i] + ", ";
            }
        }
        message += " ]";
        currentArrayElement.innerHTML = message;
        // console.log("Current Stack :: " + JSON.stringify(stack));
    }

    let note = document.getElementById("Note");
    note.style.display = "none";

    let pushButton = document.getElementById("PushButton");
    let popButton = document.getElementById("PopButton");
    let peekButton = document.getElementById("PeekButton");

    let pushText = document.getElementById("PushText");
    let popText = document.getElementById("PopText");
    let peekText = document.getElementById("PeekText");


    peekButton.addEventListener('click', function (event) {
        console.log("Peek Button Clicked...");
        // console.log('Input Value :: ' + event.target.value);
        // RadioButtonClicked(event.target.value);
        peek();
    });
    pushButton.addEventListener('click', function (event) {
        console.log("Push Button Clicked...");
        push();
    });
    popButton.addEventListener('click', function (event) {
        console.log("pop Button Clicked...");
        pop();
    });

    let isEmpty = function () {
        console.log("Is Empty Function....");
        if (top_Element == -1) { return true; }
        else { return false; }
    }

    let update_Top_Element = function () {
        top_Element = stack.length - 1;
        console.log("Updated the Top Element :::", top_Element);
    }

    let peek = function () {
        console.log("Inside - Peek Function....");
        if (!(isEmpty())) {
            console.log("Top Element :: " + stack[top_Element]);
            peekText.value = stack[top_Element];
            note.style.display = "none";
            popText.value = "";
            pushText.value = "";
        } else {
            peekText.value = "";
            popText.value = "";
            pushText.value = "";
            note.textContent = "Note :: Stack is Empty!"
            note.style.display = "block";
        }
    }

    let push = function () {
        console.log("Inside - Push Function....");
        let value = pushText.value;
        console.log("Value to be pushed :: " + value);
        if (checkValue(value)) {
            stack.push(value);
            updateCurrentArrayOnWeb();
            update_Top_Element();
            note.style.display = "none";
            popText.value = "";
            pushText.value = "";
            peekText.value = "";
        } else {
            note.textContent = "Note :: Invalid Value to be pushed !"
            note.style.display = "block";
            popText.value = "";
            peekText.value = "";
        }
    }

    let pop = function () {
        console.log("Inside - Pop Function....");
        if (!(isEmpty())) {
        let top_Value = stack.pop();
        popText.value = top_Value;
        updateCurrentArrayOnWeb();
        update_Top_Element();
        note.style.display = "none";
        pushText.value = "";
        peekText.value = "";
        } else {
            popText.value = "";
            note.textContent = "Note :: Stack is Empty!"
            note.style.display = "block";
        }
    }

    updateCurrentArrayOnWeb();
});

checkValue = function (value) {
    if ([undefined, null, ""].indexOf(value) > -1) {
        console.log("Invalid Value to be pushed.");
        return false;
    } else {
        console.log("Valid value to be pushed.");
        return true;
    }
}
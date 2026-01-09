let queue = [1, 2, 4];
let top_Element = queue.length - 1;
console.log("Top Element at Starting ::", top_Element);

document.addEventListener('DOMContentLoaded', (event) => {
    let currentArrayElement = document.getElementById("currentArray");

    let updateCurrentArrayOnWeb = function () {
        let message = "Current Queue :: [ ";
        for (let i = 0; i < queue.length; i++) {
            if (i == queue.length - 1) {
                message += queue[i];
            } else {
                message += queue[i] + ", ";
            }
        }
        message += " ]";
        currentArrayElement.innerHTML = message;
        // console.log("Current Queue :: " + JSON.stringify(queue));
    }

    let note = document.getElementById("Note");
    note.style.display = "none";

    let enQueueButton = document.getElementById("EnQueueButton");
    let deQueueButton = document.getElementById("DeQueueButton");
    let peekButton = document.getElementById("PeekButton");

    let enQueueText = document.getElementById("EnQueueText");
    let deQueueText = document.getElementById("DeQueueText");
    let peekText = document.getElementById("PeekText");


    peekButton.addEventListener('click', function (event) {
        console.log("Peek Button Clicked...");
        // console.log('Input Value :: ' + event.target.value);
        // RadioButtonClicked(event.target.value);
        peek();
    });
    enQueueButton.addEventListener('click', function (event) {
        console.log("EnQueue Button Clicked...");
        enQueue();
    });
    deQueueButton.addEventListener('click', function (event) {
        console.log("deQueue Button Clicked...");
        deQueue();
    });

    let isEmpty = function () {
        console.log("Is Empty Function....");
        if (top_Element == -1) { return true; }
        else { return false; }
    }

    let update_Top_Element = function () {
        top_Element = queue.length - 1;
        console.log("Updated the Top Element :::", top_Element);
    }

    let peek = function () {
        console.log("Inside - Peek Function....");
        if (!(isEmpty())) {
            console.log("Top Element :: " + queue[top_Element]);
            peekText.value = queue[top_Element];
            note.style.display = "none";
            deQueueText.value = "";
            enQueueText.value = "";
        } else {
            peekText.value = "";
            deQueueText.value = "";
            enQueueText.value = "";
            note.textContent = "Note :: Queue is Empty!"
            note.style.display = "block";
        }
    }

    let enQueue = function () {
        console.log("Inside - EnQueue Function....");
        let value = enQueueText.value;
        console.log("Value to be enQueued :: " + value);
        if (checkValue(value)) {
            queue.push(value);
            updateCurrentArrayOnWeb();
            update_Top_Element();
            note.style.display = "none";
            deQueueText.value = "";
            enQueueText.value = "";
            peekText.value = "";
        } else {
            note.textContent = "Note :: Invalid Value to be enQueued !"
            note.style.display = "block";
            deQueueText.value = "";
            peekText.value = "";
        }
    }

    let deQueue = function () {
        console.log("Inside - DeQueue Function....");
        if (!(isEmpty())) {
            queue.reverse();
            let top_Value = queue.pop();
            queue.reverse();
            deQueueText.value = top_Value;
            updateCurrentArrayOnWeb();
            update_Top_Element();
            note.style.display = "none";
            enQueueText.value = "";
            peekText.value = "";
        } else {
            deQueueText.value = "";
            note.textContent = "Note :: Queue is Empty!"
            note.style.display = "block";
        }
    }

    updateCurrentArrayOnWeb();
});

checkValue = function (value) {
    if ([undefined, null, ""].indexOf(value) > -1) {
        console.log("Invalid Value to be enQueued.");
        return false;
    } else {
        console.log("Valid value to be enQueued.");
        return true;
    }
}
console.clear();
console.log("Application Started...");

/*
The oninput event occurs when an element gets input.
The oninput event occurs when the value of an <input> or <textarea> element is changed.
The oninput event does NOT occur when a <select> element changes.
*/

let inputText = document.getElementById('inputText');
let textArea = document.getElementById('textarea');

inputText.addEventListener('input', function () {
    console.log("Input Text Feild Event-Lister Detected for 'input'");
    console.log("Entered Value in text ::: " + this.value);
})

inputText.addEventListener('textInput', function () {
    console.log("Input Text Feild Event-Lister Detected for 'Text input'");
    console.log("Entered Value in text ::: " + this.value);
})

// textArea.oninput = function () { console.log("Text Area's onInput attribute detected") }

onInputAttributeFunction = function (input) {
    console.log("Text Area onInput-Attribute-Function is called");
    console.log("Entered value in Text Area ::: ");
    console.log(input);

    // I think the javascript is not calling this function from element attribute method via inline property
    // when there are 3 codes are wtitter for the same input fileds, JS compiler only executes 2 of them
}


// what is the difference between onInput attribute and onInput method of an element
/* 

what is the meaning of use capture :: 
https://www.google.com/search?q=what+is+the+meaning+usecapture+in+javascript&rlz=1C1CHBD_enIN1075IN1075&oq=what+is+the+meaning+usecapture+&gs_lcrp=EgZjaHJvbWUqBwgBECEYoAEyBggAEEUYOTIHCAEQIRigATIHCAIQIRigAdIBCTEyMTMyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8

What is “propagation”?
Propagation refers to how events travel through the Document Object Model (DOM) tree. The DOM tree is the structure which contains parent/child/sibling elements in relation to each other. You can think of propagation as electricity running through a wire, until it reaches its destination. The event needs to pass through every node on the DOM until it reaches the end, or if it is forcibly stopped.

*/
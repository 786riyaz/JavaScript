console.clear();
console.log("Application Started...");

let inputText = document.getElementById('inputText');

inputText.addEventListener('textInput', function () {
    console.log("Input Text Feild Event-Lister Detected for 'Text input'");
    console.log("Entered Value in text ::: " + this.value);
})

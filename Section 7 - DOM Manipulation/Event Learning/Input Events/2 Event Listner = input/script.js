console.clear();
console.log("Application Started...");

let inputText = document.getElementById('inputText');

inputText.addEventListener('input', function () {
    console.log("~~~~~ Input Text Feild Event-Lister Detected for 'input' ~~~~~");
    console.log("Entered Value in text ::: " + this.value + "\n\n");
})

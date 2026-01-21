console.clear();
let inputs = ["Riyaz Khan", "123,,123,12 3", "134", "1234567890", "123,123,132", "1,234,567,890"];
inputs.forEach(validateInput);      // Calling a function as a call back of loop

function validateInput(input) {
    let USpattern = /^((\d{1,3},)*\d{3}|\d{1,3})$/gm;
    let NumberPattern = /^\d{1,}$/gm;
    let result = USpattern.test(input);
    console.log("~~~~~~~~~~~~~ Before ~~~~~~~~~~~~~~~~~");
    console.log("US Amount Pattern Matched ?", input, "::", result);

    if (!result) {
        console.log("\nBefore Trim :::", input);
        input = input.replaceAll(",", "");           // Removing all Commas
        input = input.replaceAll(" ", "");           // Removing all Spaces
        console.log("After Trim :::", input);

        // Rechecking of All Digit
        let result = NumberPattern.test(input);
        if (!result) {
            console.log("----------------   Please Enter only Numbers   ---------------");
            console.log("-----------------------------------------------------------------")
            console.log("-----------------------------------------------------------------")
            console.log("-----------------------------------------------------------------")
            return;
        }

        let temp = input;
        let final = "";
        while (temp.length > 3) {
            let last3digit = temp.slice(-3, temp.length);
            final = "," + last3digit + final;
            temp = temp.slice(0, -3);
        }
        final = temp + final;

        result = USpattern.test(final);
        console.log("\n~~~~~~~~~~~~~ After ~~~~~~~~~~~~~~~~~");
        console.log("US Amount Pattern Matched ?", final, "::", result);
        console.log("\n");

        if (result) {
            console.log("Setting the correct value in the input field ---- Done");
        } else {
            console.log("Please enter amount in proper US number format ---- Wrong");
        }
    }
    console.log("-----------------------------------------------------------------")
    console.log("-----------------------------------------------------------------")
    console.log("-----------------------------------------------------------------")
}
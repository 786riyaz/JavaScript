/*Question :
Cut and Add
Harry and Potter took a word string. Harry chose a number M (less than the length of the
string) and Potter chose N (less than the length of the string). Harry will cut M alphabets
from the end of the string and then add it to the beginning and will give it to Potter. Then,
Potter will also cut N alphabets from the end of the string, add it to the beginning and then
give to Harry. This process will continue till they get the original word string back.
For a given string and given values of M and N, find the number of turns in which they wi
get the original word string back.
*/
function performCutting(inputString, m, n) {
    console.log("Function Starts...");
    
    let counter = 0;
    let newString = inputString;
    const mapping = { H: m, R: n };
    let flag = "H";

    do {
        counter++;
        let cutLength = mapping[flag];
        newString = newString.slice(-cutLength) + newString.slice(0, newString.length - cutLength);
        flag = flag === "H" ? "R" : "H";
    } while (newString !== inputString);

    console.log(`Turns required to make original string: ${counter}`);
    console.log("Function Ends...");
}

// Test cases
console.clear();
performCutting("AbcDef", 2, 1);
console.log();
performCutting("AbcAbc", 2, 1);

/*
Changes:
Removed tempString since newString alone is sufficient.
Used do-while to ensure the loop runs at least once.
Simplified flag toggling with flag = flag === "H" ? "R" : "H";
Kept essential logs for better readability.
This should perform slightly better while maintaining clarity. 🚀 Let me know if you need further refinements!
*/
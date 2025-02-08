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
performCutting = function (inputString, m, n) {
    console.log("Function Starts.......");
    // console.log("Input String ::", inputString);
    // console.log("Harry Input ::", m);
    // console.log("Ron Input ::", n);

    let counter = 0;
    let tempString = "";
    let newString = inputString;
    console.log("Original String :: ",counter," :: ", newString);

    let mapping = {
        "H": m,
        "R": n
    };
    let flag = "H";
    while (tempString != inputString) {
        counter++;

        let endString = newString.slice(-(mapping[flag]));
        let beginningString = newString.slice(0, newString.length - mapping[flag]);
        tempString = endString + beginningString;
        console.log("New String :: ", counter, " :: ", tempString);
        newString = tempString;
        if (flag == "H") { flag = "R" }
        else { flag = "H" }
    }

    console.log("Turns required to Make Original String :: ", counter);
    console.log("Function Ends.......");
}
console.clear();
performCutting("AbcDef", 2, 1);
console.log();
performCutting("AbcAbc", 2, 1);
/* Question of Puzzle ------------->
let say ABCD * 4 = DCBA
find the value of A+B+C+D
*/
console.clear();
let number = 1000;
let digit1, digit2, digit3, digit4;
let count = 0;
let matchCount = 0;
let FinalAnswer, FinalMsg;

for (let i = number; i <= 9999; i++) {
    let numberString = i + "";
    digit1 = numberString[3];
    digit2 = numberString[2];
    digit3 = numberString[1];
    digit4 = numberString[0];
    let multipliedByFour = i * 4;
    let multipliedByFourString = multipliedByFour + "";
    if (digit1 != digit2 && digit1 != digit3 && digit1 != digit4 &&
        digit2 != digit3 && digit2 != digit4 &&
        digit3 != digit4 &&
        i / 1000 < 3) {
        count++;
        // console.log(numberString);
        let newNumberString = digit1 + digit2 + digit3 + digit4;
        if (newNumberString == multipliedByFourString) {
            matchCount++;
            console.log("Final Answer -------------");
            console.log("Number :: " + i);
            console.log("Reverse :: " + newNumberString);
            FinalAnswer = parseInt(digit1) + parseInt(digit2) + parseInt(digit3) + parseInt(digit4);
            FinalMsg = `${digit1} + ${digit2} + ${digit3} + ${digit4}`;
        }
    }
}
console.log("Sum of the digits :: " + FinalMsg + " = "+ FinalAnswer)
// console.log("----------------------------\nTotal Count :: " + count);
// console.log("Total Match :: "+matchCount);
console.clear();
console.log("Finding Riddle Answer......");

let AlwaysWrongDigits = ["0", "5", "6", "7"];
let CorrectDigits = ["8","4","3","1"];
let PossibleAnswer = [];
let count = 0;
// for (let i = 1110; i <= 1200; i++) {
for (let i = 1000; i <= 9999; i++) {
    let flag = 1;
    let temp = i + "";        // converting to string

    let d0 = temp[0];
    let d1 = temp[1];
    let d2 = temp[2];
    let d3 = temp[3];

    // checking for repeat digit
    if (d0 == d1 || d0 == d2 || d0 == d3 || d1 == d2 || d1 == d3 || d2 == d3) {
        flag = 0;
    }

    if (flag) {
        // checking for wrong digit array
        for (let j = 0; j < 4; j++) {
            let currentDigit = temp[j];
            if (AlwaysWrongDigits.indexOf(currentDigit) >= 0) {
                flag = 0;
                break;
            }
        }
    }

    if (flag) {
        // checking for correct digit array
        for (let k = 0; k < CorrectDigits.length; k++) {
            if (!temp.includes(CorrectDigits[k])) {
                flag = 0;
                break;
            }
        }
    }

    if (flag) {
        // Checking for all other condition -- Riyaz
        if(d3 != "1" || d2 == "8" || d2 == "3" || d0 == "8" || d3 == "4"){
            flag = 0;
        }
    }

    // if flag is not reset then this is the possible number
    if (flag) {
        PossibleAnswer.push(temp);
        count++;
    }
}

console.log(JSON.stringify(PossibleAnswer));
console.log("Total Combination :: " + count);
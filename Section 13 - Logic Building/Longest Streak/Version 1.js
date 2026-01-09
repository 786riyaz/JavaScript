/*
You are given a binary String, "binary_string" which represents people standing in a line.
A binary string is string which contains only 0s and 1s.
A 0, in this case, represents a person wearing a black shirt and a 1 represents a person wearing a white shirt.
You are required to find the length of the longest set of consecutive people wearing white shirts, Given that you are allowed to perform at most one swap between a person wearing a white shirt and a black one.

11111000 ===>  5
11011000 ===>  4

*/


const findCount = function (inputString) {
    console.log("Find Count function started....");
    console.log("Input string :::", inputString);
    let sum = 0;
    for (let i = 0; i < inputString.length; i++) {
        sum += parseInt(inputString[i]);
    }

    console.log("Find Count function ended....");
    return sum;
}

let input = "11111000";
console.log("Max Streak for", input, "::", findCount("11111000"));
console.log("===================================================================");
input = "11011000";
console.log("Max Streak for", input, "::", findCount("11111000"));
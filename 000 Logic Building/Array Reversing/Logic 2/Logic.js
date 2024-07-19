// Problem Statement :: Create a Reverse Array in without using Another array
console.clear();

let InputArray = [1, 2, 3, 4, 5, 6, 7, 8];
let tempVariable;
let Message = "Reversed Array :: [";

console.log("Entered List of Characters :: [1, 2, 3, 4, 5, 6, 7, 8]");
// Adding Array Variable in new Array in reverce order
for (let i = 0; i < InputArray.length / 2; i++) {
    tempVariable = InputArray[i];
    InputArray[i] = InputArray[(InputArray.length - 1) - i];
    InputArray[(InputArray.length - 1) - i] = tempVariable;
}

for (let i = 0; i < InputArray.length; i++) {
    Message += InputArray[i] + ", ";
}

// Removing last 2 character from the string
if (Message.endsWith(", ")) {
    Message = Message.substring(0, Message.length - 2)
}

// Adding a bracket at the last
Message += "]";

// Printing the Message
console.log(Message);
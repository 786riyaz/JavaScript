// Problem Statement :: Create a Reverse Array in another variable
console.clear();

let InputArray = [1, 2, 3, 4, 5, 6, 7, 8];
let OutputArray = [];
let Message = "Reversed Array :: [";

console.log("Entered List of Characters :: [1, 2, 3, 4, 5, 6, 7, 8]");
// Adding Array Variable in new Array in reverce order
for (let i = InputArray.length - 1; i >= 0; i--) {
    OutputArray.push(InputArray[i]);
}

// Creating a message to print at last
for (let i = 0; i < OutputArray.length; i++) {
    Message += OutputArray[i] + ", ";
}

// Removing last 2 character from the string
if(Message.endsWith(", ")){
    Message = Message.substring(0, Message.length - 2)
}

// Adding a bracket at the last
Message += "]";

// Printing the Message
console.log(Message);
const num = [0,1,2,3,4,5,6,7,8,9];
const foundElement = num.findLast((element) => element % 2 === 0);
console.log("Found Element Value ::", foundElement);      // 8

const numbers = [5, 12, 50, 130, 44];
const lastBigNumber = numbers.findLast(num => num > 45);
console.log("Last Big Number :: ", lastBigNumber);  // 130

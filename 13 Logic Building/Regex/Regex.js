let input;
// input = item.getValue();
input = "1234567890"
// console.log("Item Change :::" + input);

let USpattern  = /^\d{10}$/gm;
let result = USpattern.test(input);
console.log("Result :: ", result)

console.log("Time Started");
console.time("Label-1");

console.log("\n 1st Time ------")
console.timeLog("Label-1");

let temp = 0;

for(let i=0;i<1000;i++){        temp++;     }

console.log("\n 2nd Time ------");
console.timeLog("Label-1");

for(let i=0;i<10000;i++){       temp++;     }

console.log("\n 3rd Time ------");
console.timeLog("Label-1");

console.log("\nTime Ends------");
console.timeEnd("Label-1");
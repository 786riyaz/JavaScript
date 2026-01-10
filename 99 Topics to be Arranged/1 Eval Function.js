console.log("Calculation ::: ", eval("10 * 20"));               // Calculation :::  200
console.log(eval("1+1==1"));                     // false
console.log(eval("1+1==2"));                     // true
console.log(eval("1+1==2 && 1+1==2"), " && ", eval("1+1==2 && 1+1==1"));    // true  &&  false
console.log(eval("1==1?'Yes':'No'"));               // Yes
let a = [4, 5, 6, 7, 8, 9, 10, 12];

let expectedSum = ((a[0] + a[a.length - 1]) * (a.length + 1)) / 2;
let actualSum = a.reduce((sum, val) => sum + val, 0);

console.log("Expected Sum =", expectedSum);
console.log("Actual Sum =", actualSum);
console.log("Missing Number =", expectedSum - actualSum);

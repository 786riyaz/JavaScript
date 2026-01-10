const num = [0,1,2,3,4,5,6,7,8,9];
const foundIndex = num.findLastIndex((element) => element % 2 === 0);
console.log("Found Index ::", foundIndex);      // 8
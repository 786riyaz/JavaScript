console.clear()
const numbers = [15.5, 2.3, 1.1, 4.7];

let a= numbers.reduce(getSum, 0);
console.log("Answer with 0 element ::: ",a);
console.log("----------------------------------------------")
a= numbers.reduce(getSum);
console.log("Answer without 0 element ::: ",a);

function getSum(total, num, currentIndex) {
// function getSum(total, num) {
console.log(currentIndex,"---> Total = ",total,":: Number = ",num);
let answer = total + Math.round(num);
console.log(answer)
return answer
}
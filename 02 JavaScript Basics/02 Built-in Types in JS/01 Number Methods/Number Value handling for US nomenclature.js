console.log(" :::: Entered a Wrong Number :::: ")
const amount1 = 1234567890.123456;
console.log(amount1.toLocaleString('en-US',{style:'currency',currency:'USD'}));
console.log(new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(amount1))
console.log();

console.log(" :::: Entered a String :::: ");
const amount2 = "1234567890.123456";
console.log(amount2.toLocaleString('en-US',{style:'currency',currency:'USD'}));
console.log(new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(amount2))
console.log();

console.log(" :::: Entered Wrong String :::: ")
const amount3 = "1234,567,890.123456";
console.log(amount3.toLocaleString('en-US',{style:'currency',currency:'USD'}));
console.log(new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(amount3))


/* Reffered Links ::: 
Number toLocaleString() ::: https://www.w3schools.com/jsref/jsref_tolocalestring_number.asp
Intl.NumberFormat() ::: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
*/
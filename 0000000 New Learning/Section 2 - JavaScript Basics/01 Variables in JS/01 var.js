console.log("Hello, World!");

console.log(x);
var x;
printX();
function printX() {
    var x = 10;
    if(x > 5) {
        var x = 20;
        console.log(x);
        x = 30;
    }
    console.log(x);
}
console.log(x);
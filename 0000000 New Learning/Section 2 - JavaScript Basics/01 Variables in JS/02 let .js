console.log("Hello, World!");

console.log(x);
let x;
printX();
function printX() {
    let x = 10;
    // let x;
    if(x > 5) {
        let x = 20;
        console.log(x);
        x = 30;
    }
    console.log(x);
}
console.log(x);
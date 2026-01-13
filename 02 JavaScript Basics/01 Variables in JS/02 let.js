console.log("Hello, World!");

console.log(x);             // ReferenceError: Cannot access 'x' before initialization
let x;
printX();
function printX() {
    let x = 10;
    // let x;           // Can not redeclare block scoped variable 'x'
    if(x > 5) {
        let x = 20;
        console.log(x);
        x = 30;
    }
    console.log(x);
}
console.log(x);
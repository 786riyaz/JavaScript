console.clear();
console.log("Application Started.....");
let steps = 20;

function fibo(element0, element1) {
    steps--;
    console.log(element0 + element1);
    if (steps > 0) {
        fibo(element1, element0 + element1);
    }
}

console.log(0);
console.log(1);
fibo(0, 1);
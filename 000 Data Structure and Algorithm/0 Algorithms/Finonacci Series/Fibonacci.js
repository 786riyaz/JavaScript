console.clear();
console.log("Application Started.....");

let element0 = 0;
let element1 = 1
let element2;
let steps = 20;
let i=0;

console.log(0);
console.log(1);

while(i<steps-2) {
    let element2 = element0 + element1;
    console.log(element2);
    element0 = element1;
    element1 = element2;
    i++;
}
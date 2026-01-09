console.log("Applicatoin started.");

{
    let a = 0;
    const b = 1;
    var c = 2;
}

console.log(typeof a); // undefined
console.log(typeof b); // undefined
console.log(typeof c); // number

console.log("C :: " + c); // C :: 2
console.log("A :: " + a); // A :: undefined
console.log("B :: " + b); // B :: undefined


/*
Applicatoin started.
undefined
undefined
number
C :: 2

console.log("A :: " + a); // A :: undefined
                      ^

ReferenceError: a is not defined
*/
Variables are used to store data that can be used or modified later in the program.

declaration in JS :: 
var
let
const

Each type of variable has specific rules for scope, re-declation and reassignment.

=================================================

var
Introduced : introduced in Early JavaScript version
Scopre : Function Scope ( Not Block Scoped)
Redeclaration : Allowed in the same scope
Hoisting : Hoisted to the top of its scope but initialized as undefined.
Use Case : Outdated, Avoid using in modern JavaScript.

if(true){
    var x = 10;
}
console.log(x);         // 10

====================================================

let 
Scope : Block Scoped
Redeclaration : Not allowed in the same scope
Hoisting : Hoisted but not initialized (Throws ReferenceError if accessed before declaration.)

if(true){
    let x = 10;
}
console.log(x);1        // Error : x is not defined
======================================================

const
Introduced : ES6(2015)
Scope : Block Scoped
ReDeclaration : Not allowed
Reassignment : Not Allowed after the initial assignment;
Hoisting : Hoisted but not initialized (Throws ReferenceError if accessed before declaration)
Use Case : Use for Fixed values or constants.

const x = 10;
x = 20;   // Error : assignment to constant variable
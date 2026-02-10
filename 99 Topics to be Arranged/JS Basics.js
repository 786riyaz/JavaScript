// this JS is included in Practice4.html
console.log("Hello World\n\t\tThis is JavaScript");
// delaring and initializing variable
let x = 34;//"string"     true        null        undefined
var a = 786;
var b = "Riyaz";
console.log("This is varaible a : " + a);
console.log("This is varibale b : " + b);

console.log(a + b);
console.log("Addition : " + (5 + 6));
console.log("Concatanation : " + 5 + 6);
// Operator     + - * / ** ++ --

var str1 = "this is for single quote like 's";
var str2 = 'this is for double quote like ("s") this ';
var str3 = `This is both single' and double" quotes `;
var str4 = "This is for \\ backslash";
var str5 = `this is for any variables = ${a} like this and ${b} this`;
const PI = 3.14;//Constant Declaration
// this is for any variables = 786 like this and Riyaz this


//String Function --------------------------------------------
var length = str1.length;
console.log("Length of String 1 is " + length);
console.log(`Length of String 1 is ${length} `);

var y = new String("Riyaz");
console.log(y);


// Functions -----------------------------------------------------
function printGreet(name, time = "Morning") {
    let temp = 1;
    console.log("Good " + time + ` ${name} ` + temp++);
}

let name1 = "Riyaz";
let name2 = "Tasin";
printGreet(name1, "Morning");
printGreet(name2, "Evening");
printGreet(name2);

function Addition(num1 = 0, num2 = 0) {
    return (num1 + num2);
}
console.log("Addition : " + Addition(5, 6));
console.log(`Addition : ${Addition(5, 6)}`);


//If Else-------------------------------------------------------
var age = 21;
if (age >= 18) {
    console.log("You can drink");
}
else if (age < 18) {
    console.log("You cant drink");
}
else {
    console.log("Invalid Input");
}


//--------------------------------------------
var sem = 8;
switch (sem) {
    case 8: console.log("You are in sem 8");
        break;
    case 7: console.log("You are in sem 7");
        break;
    case 6: console.log("You are in sem 6");
        break;
    case 5: console.log("You are in sem 5");
        break;

    default: console.log("Wrong Input");
        break;
}


//Object--------------------------------------
let student = {
    name: "Riyaz",
    enroll: 27,
    'branch or department': "Computer",
}
console.log(student);
console.log(student.name);
console.log(student['name']);
// console.log(student.branch or department);//Not Accessible
console.log(student['branch or department']);



//Array-----------------------------------
let arr_ex = [1, 2.3, "tasin", null, undefined];
console.log(arr_ex);
console.log("Second Element : " + arr_ex[2]);
console.log(`Element at 0th Position : ${arr_ex[0]}`)
console.log("Length of Array : " + arr_ex.length);

let arr2 = new Array(7, 54, 3, 89, 21, "Riyaz", "Tasin", undefined, "Streebo");
arr2 = arr2.sort();//Sort the array
console.log(arr2);
arr2.push("This is Pushed");
console.log(arr2);
arr2 = arr2.sort();//Sort the array
console.log(arr2);

let arr3 = new Array(20);//Array with 20 Undefined variables
console.log(arr3);

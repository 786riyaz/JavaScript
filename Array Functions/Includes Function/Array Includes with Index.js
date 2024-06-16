let array1 = ["a","b","c","d","e","f","g","h","i","j"];
// Array_Name.includes(Value_To_Find, Start_Index)

console.log(array1.includes("a"));      // true
console.log(array1.includes("j"));      // true
console.log();

console.log(array1.includes("c",2));    // true
console.log(array1.includes("c",3));    // false
console.log();

console.log(array1.includes("a",0));    // true
console.log(array1.includes("a",1));    // false

/*
splice() is used to change the content of an array by removing, replacing, or adding elements
*/

let array = ['A','B','C','D','E','F'];
console.log("Whole Array ::: ");
console.log(array);
array.splice(1,3);      // Removes 3 elements starting from index 1
console.log("Array After Slice Operation ::: ");
console.log(array);
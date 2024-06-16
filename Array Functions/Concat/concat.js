/*
Requires another variable to store the result
*/
let array = ['A','B','C','D'];
console.log("Array Before Concat Operation ::: ");
console.log(array);

array.concat(['E','F']);
let array2 = array.concat(['E','F']);
console.log("Array After Concat Operation ::: ");
console.log(array);
console.log(array2);

console.clear();
console.log("Application Started - Redix Sort without Array\n");

let array = [131, 142, 143, 190, 241, 247, 264, 465, 508, 552];
let tempArray = [];
let index = 0;
console.log("Input Array ::: " + array);

// Ascending values with Unit Position Values
let matrix = [[], [], [], [], [], [], [], [], [], []];
for (let i = 0; i < array.length; i++) {
    let unitValue = array[i] % 10;
    matrix[unitValue].push(array[i]);
}
// console.log("Matrix Iteration 1 ::" + matrix);

index = 0;
for (let j = 0; j < matrix.length; j++) {
    for (let k = 0; k < matrix[j].length; k++) {
        tempArray[index] = matrix[j][k];
        index++;
    }
}
array = tempArray;
console.log("Sorted Unit :: " + array);

// Ascending values with 10th Position Values
matrix = [[], [], [], [], [], [], [], [], [], []];
for (let i = 0; i < array.length; i++) {
    let lastTwo = array[i] % 100;
    let tenthValue = parseInt(lastTwo / 10);
    matrix[tenthValue].push(array[i]);
}
// console.log("Matrix Iteration 2 ::" + matrix);

index = 0;
for (let j = 0; j < matrix.length; j++) {
    for (let k = 0; k < matrix[j].length; k++) {
        tempArray[index] = matrix[j][k];
        index++;
    }
}
array = tempArray;
console.log("Sorted Tenth :: " + array);

// Ascending values with 100th Position Values
matrix = [[], [], [], [], [], [], [], [], [], []];
for (let i = 0; i < array.length; i++) {
    let hundredValue = parseInt(array[i] / 100);
    matrix[hundredValue].push(array[i]);
}
// console.log("Matrix Iteration 3 ::" + matrix);

index = 0;
for (let j = 0; j < matrix.length; j++) {
    for (let k = 0; k < matrix[j].length; k++) {
        tempArray[index] = matrix[j][k];
        index++;
    }
}
array = tempArray;
console.log("Sorted Hundred :: " + array);
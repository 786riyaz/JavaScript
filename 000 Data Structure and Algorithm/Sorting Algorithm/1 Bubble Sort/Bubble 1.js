console.clear();
console.log("Application Started - Bubble Sort version 1\n");

let array = [1, 5, 3, 6, 8, 2, 7, 9, 4];
let temp;
console.log("Input Array ::", JSON.stringify(array), "\n");

for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
            temp = array[j + 1];
            array[j + 1] = array[j];
            array[j] = temp;
        }
    }
    console.log("Iteration ", i + 1, "::", JSON.stringify(array));
}

console.log("\nFinal Array ::", JSON.stringify(array));
// Added improvement :: if none element is swapped then stop the process
console.clear();
console.log("Application Started - Bubble Sort with improvement \n");

let array = [1, 5, 3, 6, 8, 2, 7, 9, 4];
let temp;
console.log("Input Array ::", JSON.stringify(array), "\n");

for (let i = 0; i < array.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
            temp = array[j + 1];
            array[j + 1] = array[j];
            array[j] = temp;
            swapped = true;
        }
    }
    if (swapped) {
        console.log("Iteration ", i + 1, "::", JSON.stringify(array));
    } else {
        break;
    }
}

console.log("\nFinal Sorted Array ::", JSON.stringify(array));
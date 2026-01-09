console.clear();
console.log("Application Started - Selection Sort with swapping\n");

// let array = [4, 5, 3, 6, 8, 2, 7, 9, 1];
let array = [1, 5, 3, 6, 8, 2, 7, 9, 4];
console.log("Input Array ::", JSON.stringify(array), "\n");

for (let i = 0; i < array.length-1 ; i++) {
    let lowest = array[i];
    let lowest_Index = i;
    for (let j = i; j < array.length; j++) {
        if (array[j] < lowest) {
            lowest = array[j];
            lowest_Index = j;
        }
    }
    if (lowest_Index != i) {
        let temp = array[lowest_Index];
        array[lowest_Index] = array[i];
        array[i] = temp;
    }
    console.log("Iteration ", i + 1, "::", JSON.stringify(array));
}

console.log("\nFinal Array ::", JSON.stringify(array));
console.clear();
console.log("Application Started - Insertion Sort - Shifting Array");

let array = [5, 4, 1, 6, 8, 2, 7, 9, 3];
// let array = [1, 2, 3, 5, 4, 2, 7, 9, 3];
console.log("Input Array ::", JSON.stringify(array), "\n");

for (let i = 1; i < array.length; i++) {
    // Inserting the new element before just largest number
    let temp = array[i];
    let k = -1;
    for (k = i; k > 0; k--) {
        if (array[k - 1] >= temp) { array[k] = array[k - 1]; } 
        else { break; }
    }
    array[k] = temp;
    console.log("Iteration", i, " ::", JSON.stringify(array));
}

console.log("\nFinal Array ::", JSON.stringify(array));
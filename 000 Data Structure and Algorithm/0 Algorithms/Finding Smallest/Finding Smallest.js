console.clear();
console.log("Application Started.....");

let smallest = Number.POSITIVE_INFINITY;
let array = [44, 55, 23, 74, 11, 34, 90, 43, 32, 87];
console.log("List of Values ::", array);

for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest)
        smallest = array[i];
}

console.log("Smallest Number found from the array ::", smallest);
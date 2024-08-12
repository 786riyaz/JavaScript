console.clear();
console.log("Application Started - Quick Sort with Dynamic Array");

let array = [1, 0, 5, 3, 3, 1, 3, 3, 4, 4];
console.log("Input Array :: " + array);

findMax = function (input) {
    let max = array[0];
    for (let i = 1; i < input.length; i++) {
        if (input[i] > max) { max = input[i]; }
    }
    return max + 1;
}

let countArray = Array(findMax(array));

for (let j = 0; j < countArray.length; j++) { countArray[j] = 0; }

for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    countArray[currentValue]++;
}
console.log("Count Array ::", countArray);

array = [];
for (let i = 0; i < countArray.length; i++) {
    if (countArray[i] != 0) {
        for (j = 1; j <= countArray[i]; j++) { array.push(i); }
    }
}
console.log("Output Array :: " + array);
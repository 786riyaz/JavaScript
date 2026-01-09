console.clear();
console.log("Application Started - Quick Sort with static array");

let array = [1, 0, 5, 3, 3, 1, 3, 3, 4, 4];
console.log("Input Array :: " + array);

let countArray = [0, 0, 0, 0, 0, 0];
// console.log(countArray.length);;
for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    countArray[currentValue]++;
}
console.log("Count Array ::", countArray);

array = [];
for (let i = 0; i < countArray.length; i++) {
    if (countArray[i] != 0) {
        for (j = 1; j <= countArray[i]; j++) {
            array.push(i);
        }
    }
}
console.log("Output Array :: " + array);
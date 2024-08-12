/*
Input Array must be in the sorted form to perform Binary Search
*/
console.clear();
console.log("Application Started - Binary Search with Loop\n");

function binarySearch(arr, targetVal) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === targetVal) {
            return mid;
        }

        if (arr[mid] < targetVal) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

const myArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const myTarget = 18;

const result = binarySearch(myArray, myTarget);

if (result !== -1) {
    console.log("Value", myTarget, "found at index", result);
} else {
    console.log("Target not found in array.");
}

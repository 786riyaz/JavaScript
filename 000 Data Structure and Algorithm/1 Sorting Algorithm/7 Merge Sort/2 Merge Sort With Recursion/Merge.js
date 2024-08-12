console.clear();
console.log("Application Started - Merge Sort with Recursion");

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    // console.log("Left ::", sortedLeft, "Right ::", sortedRight);
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    // console.log("Result ::" + result.concat(left.slice(i)).concat(right.slice(j)));
    return result.concat(left.slice(i)).concat(right.slice(j));
}

const unsortedArr = [3, 7, 6, -10, 15, 23.5, 55, -13, 0];
console.log("Input array :: " + unsortedArr);
const sortedArr = mergeSort(unsortedArr);
console.log("Sorted array :: " + sortedArr);
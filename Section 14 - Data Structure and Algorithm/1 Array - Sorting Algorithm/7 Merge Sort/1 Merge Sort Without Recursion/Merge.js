function merge(left, right) {
    let result = [];
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
    // Concatenate the remaining elements
    result = result.concat(left.slice(i)).concat(right.slice(j));
    return result;
}

function mergeSort(arr) {
    let step = 1;  // Starting with sub-arrays of length 1
    const length = arr.length;
    while (step < length) {
        for (let i = 0; i < length; i += 2 * step) {
            const left = arr.slice(i, i + step);
            const right = arr.slice(i + step, i + 2 * step);
            const merged = merge(left, right);
            // Place the merged array back into the original array
            for (let j = 0; j < merged.length; j++) {
                arr[i + j] = merged[j];
            }
        }
        step *= 2;  // Double the sub-array length for the next iteration
    }
    return arr;
}
console.clear();
console.log("Application Started - Merge Sort without Recursion");
const unsortedArr = [3, 7, 6, -10, 15, 23.5, 55, -13];
console.log("Input Array :: " + unsortedArr);
const sortedArr = mergeSort(unsortedArr);
console.log("Sorted array :: " + sortedArr);
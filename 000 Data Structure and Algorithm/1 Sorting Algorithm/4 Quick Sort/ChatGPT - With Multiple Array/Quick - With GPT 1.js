/*
Created with chatGPT - in which the logic use multiple array to reach the goal
Chat ID :: https://chatgpt.com/c/e1fe21ab-c272-4c15-a224-c25f2b8909f6
=============================================================================================================
Explanation
Base Case: The recursion stops when the array has 0 or 1 element, as such arrays are already sorted.

Pivot Selection: We select the last element of the array as the pivot, though you can choose any element. The pivot helps partition the array.

Partitioning: We partition the array into two parts:

Left: Contains elements less than the pivot.
Right: Contains elements greater than or equal to the pivot.
Recursion: The quickSort function is called recursively on both the left and right arrays, which are then concatenated with the pivot to form the sorted array.

Concatenation: The final sorted array is constructed by combining the sorted left array, the pivot, and the sorted right array.
=============================================================================================================
Complexity
Time Complexity:

Average Case: O(n log n)
Worst Case: O(n²) - occurs when the smallest or largest element is always chosen as the pivot
Space Complexity: O(log n) - due to recursive function calls
=============================================================================================================
Optimizations
To improve the performance of Quick Sort, consider the following optimizations:

1) Randomized Pivot: Randomly selecting the pivot element can help reduce the likelihood of encountering the worst-case scenario.

2) Three-Way Partitioning: Handling duplicates more efficiently by using three partitions (less than, equal to, and greater than the pivot).

3) Switching to Insertion Sort for Small Arrays: For very small subarrays, using Insertion Sort may be faster than recursive Quick Sort due to lower overhead.
=============================================================================================================
Usage
You can use this code to sort any array of numbers. Simply pass your unsorted array to the quickSort function, and it will return a new sorted array.

javascript
Copy code
const unsortedArray = [9, -3, 5, 2, 6, 8, -6, 1, 3];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // Output: [-6, -3, 1, 2, 3, 5, 6, 8, 9]
=============================================================================================================
*/

// Quick Sort implementation in JavaScript
function quickSort(arr) {
    // Base case: Arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Select a pivot element from the array (commonly the last element)
    const pivot = arr[arr.length - 1];

    // Arrays to hold elements less than, greater than, or equal to the pivot
    const left = [];
    const right = [];

    // Partition the array into left and right arrays based on the pivot
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort the left and right arrays, and concatenate them with the pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
// const unsortedArray = [34, 7, 23, 32, 5, 62];
const unsortedArray = [-56, 0, -9, 99, 34, 7, 23, 32, 5, 62];
const sortedArray = quickSort(unsortedArray);

console.clear();
// console.log('Unsorted Array:', unsortedArray);
console.log('Unsorted Array:', JSON.stringify(unsortedArray));
// console.log('Sorted Array:', unsortedArray);
console.log('Sorted Array:', JSON.stringify(sortedArray));
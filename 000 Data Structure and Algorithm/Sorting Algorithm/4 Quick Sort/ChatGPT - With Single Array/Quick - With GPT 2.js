/*
Chat ID :: https://chatgpt.com/c/e1fe21ab-c272-4c15-a224-c25f2b8909f6
===================================================================================================================================
Explanation
In this version of Quick Sort, we use in-place partitioning to sort the array without using any additional arrays. Here are the steps and explanations:

Global Array: The input array is sorted in-place, modifying the original array instead of creating new arrays.

Recursive Function quickSort:

Takes three arguments: the array arr, and two indices low and high to indicate the portion of the array to be sorted.
Base case: Stops recursion when low is no longer less than high.
Calls the partition function to find the pivot index, and then recursively sorts the two sub-arrays: the elements before and after the pivot.
Partition Function partition:

Selects the last element of the current sub-array as the pivot.
Rearranges elements such that all elements less than the pivot come before it, and all elements greater come after it.
Swaps elements in place using array destructuring to avoid temporary arrays.
Returns the final index of the pivot after partitioning.
Swapping Elements:

Swapping is done using destructuring assignment: [arr[i], arr[j]] = [arr[j], arr[i]];.
This allows us to swap elements directly in the array without needing extra space.
Example Usage:

An unsorted array is provided, and quickSort is called to sort it in place.
The sorted array is printed out, demonstrating the function's effectiveness.

===================================================================================================================================
Complexity Analysis
Time Complexity:

Average Case: O(n log n) - Typical performance with random pivots.
Worst Case: O(n²) - Occurs when the smallest or largest element is always chosen as the pivot, resulting in unbalanced partitions.
Space Complexity: O(log n) - Due to recursive stack space.
===================================================================================================================================
Optimizations
Random Pivot: Randomly selecting the pivot element can reduce the likelihood of hitting the worst-case scenario.

Hybrid Approach: For very small subarrays, switching to a simpler sorting algorithm like Insertion Sort can improve performance due to reduced overhead.
===================================================================================================================================
*/

// Quick Sort implementation with a single global array in JavaScript
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Partition the array and get the pivot index
        const pivotIndex = partition(arr, low, high);
        
        // Recursively sort the elements before and after partition
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

// Partition function to rearrange elements around the pivot
function partition(arr, low, high) {
    // Select the last element as pivot
    const pivot = arr[high];
    
    // i will track the right position of pivot element
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            // Increment i and swap elements
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap using destructuring
        }
    }

    // Place the pivot element in its correct position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap using destructuring
    return i + 1; // Return the index of the pivot element
}

// Example usage
// const unsortedArray = [34, 7, 23, 32, 5, 62];
const unsortedArray = [-56, 0, -9, 99, 34, 7, 23, 32, 5, 62];

// console.log('Unsorted Array:', unsortedArray);
console.log('Unsorted Array:', JSON.stringify(unsortedArray));
quickSort(unsortedArray);

// console.log('Sorted Array:', unsortedArray);
console.log('Sorted Array:', JSON.stringify(unsortedArray));
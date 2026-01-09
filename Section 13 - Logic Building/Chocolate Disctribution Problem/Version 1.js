/*
Given an array arr[] of n integers where arr[i] represents the number of chocolates in ith packet. Each packet can have a variable number of chocolates. There are m students, the task is to distribute chocolate packets such that: 

Each student gets exactly one packet.
The difference between the maximum and minimum number of chocolates in the packets given to the students is minimized.

Examples:
Input: arr[] = {7, 3, 2, 4, 9, 12, 56}, m = 3 
Output: 2 
Explanation: If we distribute chocolate packets {3, 2, 4}, we will get the minimum difference, that is 2. 

Input: arr[] = {7, 3, 2, 4, 9, 12, 56}, m = 5 
Output: 7
Explanation: If we distribute chocolate packets {3, 2, 4, 9, 7}, we will get the minimum difference, that is 9 – 2 = 7. 
*/

// JavaScript program to solve chocolate distribution
// problem using Sliding Window

function findMinDiff(arr, m) {
    let n = arr.length;

    // Sort the given packets
    arr.sort((a, b) => a - b);
    console.log("Sorted Array :: " + arr);

    let minDiff = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i + m - 1 < n; i++) {

        // calculate difference of current window
        let diff = arr[i + m - 1] - arr[i];

        // if current difference is smaller
        // then update the minimum difference
        if (diff < minDiff)
            minDiff = diff;
    }
    return minDiff;
}

let arr = [];
let m = 0;

arr = [7, 3, 2, 4, 9, 12, 56];
m = 2
console.log("Student ::",m, "-------- Difference ::", findMinDiff(arr, m));

arr = [7, 3, 2, 4, 9, 12, 56];
m = 5
console.log("Student ::",m, "-------- Difference ::", findMinDiff(arr, m));

arr = [7, 3, 2, 4, 9, 12, 56];
m = 7
console.log("Student ::",m, "-------- Difference ::", findMinDiff(arr, m));

arr = [7, 3, 2, 4, 9, 12, 56];
m = 9
console.log("Student ::",m, "-------- Difference ::", findMinDiff(arr, m));

/*
Understanding the Problem
We have an array arr[] representing packets of chocolates, where arr[i] is the number of chocolates in the i-th packet. The goal is to distribute chocolates among m students such that:

Each student gets exactly one packet.
The difference between the maximum and minimum chocolates in the selected packets is minimized.
Code Breakdown

function findMinDiff(arr, m) {
    let n = arr.length;
We define a function findMinDiff(arr, m) that takes an array arr (chocolate packets) and an integer m (number of students).
n = arr.length stores the number of packets available.

    // Sort the given packets
    arr.sort((a, b) => a - b);
    console.log("Sorted Array :: " + arr);
We sort the array in ascending order using .sort((a, b) => a - b).
Sorting ensures that we can efficiently find a subarray of m packets with the smallest difference.
The sorted array is printed for reference.

    let minDiff = Number.MAX_SAFE_INTEGER;
We initialize minDiff to a very large number (Number.MAX_SAFE_INTEGER).
This is used to keep track of the smallest difference found so far.

    for (let i = 0; i + m - 1 < n; i++) {
We iterate over possible windows of size m in the sorted array.
The condition i + m - 1 < n ensures that we don’t go out of bounds when selecting m elements.

        let diff = arr[i + m - 1] - arr[i];
Finding the difference:
The i-th element (arr[i]) is the smallest in the current window.
The (i + m - 1)-th element (arr[i + m - 1]) is the largest in the current window.
The difference (diff) between them is calculated.

        if (diff < minDiff)
            minDiff = diff;
If the current difference (diff) is smaller than minDiff, we update minDiff.

    return minDiff;
}
The function returns the minimum difference found across all possible windows of size m.

Final Summary
Sorting ensures that the closest values are next to each other.
Sliding window approach finds the best m consecutive packets.
The minimum difference is updated dynamically.
The approach runs in O(n log n) time complexity due to sorting and O(n) for scanning, making it efficient.
*/
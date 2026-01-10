function findMinDiff(arr, m) {
    let n = arr.length;

    // Edge cases
    if (m === 0 || n === 0) return 0;
    if (m > n) {
        console.log("Number of students exceeds packets available.");
        return -1;
    }

    // Sort packets in ascending order
    arr.sort((a, b) => a - b);

    let minDiff = Number.MAX_SAFE_INTEGER;

    // Sliding window approach
    for (let i = 0; i + m - 1 < n; i++) {
        let diff = arr[i + m - 1] - arr[i];
        minDiff = Math.min(minDiff, diff);
    }
    return minDiff;
}

// Test cases
const testCases = [
    { arr: [7, 3, 2, 4, 9, 12, 56], m: 2 },
    { arr: [7, 3, 2, 4, 9, 12, 56], m: 5 },
    { arr: [7, 3, 2, 4, 9, 12, 56], m: 7 },
    { arr: [7, 3, 2, 4, 9, 12, 56], m: 9 }, // Invalid case
];

testCases.forEach(({ arr, m }) => {
    console.log(`Students: ${m}, Min Difference: ${findMinDiff([...arr], m)}`);
});

function maxWhiteShirts(binaryString) {
    let n = binaryString.length;
    let totalOnes = [...binaryString].filter(ch => ch === '1').length;

    // If there are no '1's, return 0
    if (totalOnes === 0) return 0;

    // If there are no '0's, return total number of '1's
    if (totalOnes === n) return totalOnes;

    let maxConsecutiveOnes = 0;
    let currentCount = 0;
    let groups = [];
    let zeroIndices = [];

    // Step 1: Identify all groups of consecutive '1's and positions of '0's
    for (let i = 0; i < n; i++) {
        if (binaryString[i] === '1') {
            currentCount++;
        } else {
            if (currentCount > 0) groups.push(currentCount);
            zeroIndices.push(i);
            currentCount = 0;
        }
    }
    if (currentCount > 0) groups.push(currentCount);

    // Step 2: Find the longest consecutive ones without swapping
    maxConsecutiveOnes = Math.max(...groups);

    // Step 3: Try swapping each '0' with a '1' to maximize the sequence
    for (let i = 0; i < zeroIndices.length; i++) {
        let pos = zeroIndices[i];

        let leftCount = 0, rightCount = 0;

        // Count consecutive '1's to the left
        let leftIndex = pos - 1;
        while (leftIndex >= 0 && binaryString[leftIndex] === '1') {
            leftCount++;
            leftIndex--;
        }

        // Count consecutive '1's to the right
        let rightIndex = pos + 1;
        while (rightIndex < n && binaryString[rightIndex] === '1') {
            rightCount++;
            rightIndex++;
        }

        // Merge left and right groups by swapping 0 with 1
        let mergedOnes = leftCount + rightCount + 1;

        // Ensure we do not exceed the total number of '1's
        maxConsecutiveOnes = Math.max(maxConsecutiveOnes, Math.min(mergedOnes, totalOnes));
    }

    return maxConsecutiveOnes;
}

// Test Cases
console.log(maxWhiteShirts("11111000")); // Expected: 5 ✅
console.log(maxWhiteShirts("11011000")); // Expected: 4 ✅
console.log(maxWhiteShirts("11000110")); // Expected: 3 ✅
console.log(maxWhiteShirts("11111"));    // Expected: 5 ✅
console.log(maxWhiteShirts("00000"));    // Expected: 0 ✅
console.log(maxWhiteShirts("00010"));    // Expected: 1 ✅
console.log(maxWhiteShirts("101011"));   // Expected: 4 ✅ 
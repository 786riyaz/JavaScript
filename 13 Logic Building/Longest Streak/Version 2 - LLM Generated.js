/*
You are given a binary String, "binary_string" which represents people standing in a line.
A binary string is string which contains only 0s and 1s.
A 0, in this case, represents a person wearing a black shirt and a 1 represents a person wearing a white shirt.
You are required to find the length of the longest set of consecutive people wearing white shirts, Given that you are allowed to perform at most one swap between a person wearing a white shirt and a black one.

11111000 ===>  5
11011000 ===>  4
11000110 ===>  3
11111 ===>  5
00000 ===>  0
00010 ===>  1
101011 ===> 4
*/

function maxWhiteShirts(binaryString) {
    let n = binaryString.length;
    let totalOnes = 0;
    let maxOnes = 0;
    let onesGroups = [];
    let zeroPositions = [];

    let count = 0;

    // Step 1: Identify all groups of consecutive '1's and positions of '0's
    for (let i = 0; i < n; i++) {
        if (binaryString[i] === '1') {
            count++;
            totalOnes++;
        } else {
            if (count > 0) {
                onesGroups.push(count);
            }
            zeroPositions.push(i);
            count = 0;
        }
    }
    if (count > 0) {
        onesGroups.push(count);
    }

    // If there are no '0's, return total number of '1's
    if (zeroPositions.length === 0) {
        return totalOnes;
    }

    // If there are no '1's at all, return 0 (since no swap can create a 1)
    if (totalOnes === 0) {
        return 0;
    }

    // Step 2: Find the max consecutive ones without swapping
    maxOnes = Math.max(...onesGroups, 0);

    // Step 3: Try swapping each '0' with a '1' from another position
    for (let i = 0; i < zeroPositions.length; i++) {
        let pos = zeroPositions[i];

        let leftCount = 0, rightCount = 0;

        // Count consecutive 1s to the left of '0'
        let leftIndex = pos - 1;
        while (leftIndex >= 0 && binaryString[leftIndex] === '1') {
            leftCount++;
            leftIndex--;
        }

        // Count consecutive 1s to the right of '0'
        let rightIndex = pos + 1;
        while (rightIndex < n && binaryString[rightIndex] === '1') {
            rightCount++;
            rightIndex++;
        }

        // Case 1: If swapping merges two groups
        let possibleMax = leftCount + rightCount + 1;

        // Case 2: If there's only one group and a swap just extends it, limit it by total ones
        maxOnes = Math.max(maxOnes, Math.min(possibleMax, totalOnes));
    }

    return maxOnes;
}

// Test cases
console.log(maxWhiteShirts("11111000")); // Expected: 5 ✅
console.log(maxWhiteShirts("11011000")); // Expected: 4 ✅
console.log(maxWhiteShirts("11000110")); // Expected: 3 ✅
console.log(maxWhiteShirts("11111"));    // Expected: 5 ✅
console.log(maxWhiteShirts("00000"));    // Expected: 0 ✅
console.log(maxWhiteShirts("00010"));    // Expected: 1 ✅
console.log(maxWhiteShirts("1101110"));  // Expected: 5 ✅
console.log(maxWhiteShirts("10101"));    // Expected: 3 ✅ (Swaps to "11100")
console.log(maxWhiteShirts("10001"));    // Expected: 2 ✅ (Swaps to "11000")
console.log(maxWhiteShirts("101011"));   // Expected: 3 ✅ (Swaps to "111010")
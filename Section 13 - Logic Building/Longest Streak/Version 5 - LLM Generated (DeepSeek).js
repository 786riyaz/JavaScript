function getMaxConsecutiveOnes(binaryString) {
    const s = binaryString.split('').map(c => parseInt(c));
    const n = s.length;
    
    // Compute total number of 1s
    const totalOnes = s.reduce((acc, val) => acc + val, 0);
    if (totalOnes === 0) return 0;
    
    // Compute left array where left[i] is the number of consecutive 1s ending at i
    const left = new Array(n).fill(0);
    left[0] = s[0];
    for (let i = 1; i < n; i++) {
        left[i] = s[i] ? left[i-1] + 1 : 0;
    }
    
    // Compute right array where right[i] is the number of consecutive 1s starting at i
    const right = new Array(n).fill(0);
    right[n-1] = s[n-1];
    for (let i = n-2; i >= 0; i--) {
        right[i] = s[i] ? right[i+1] + 1 : 0;
    }
    
    let maxLen = Math.max(...left); // Initial max with no swaps
    
    for (let i = 0; i < n; i++) {
        if (s[i] === 0) {
            const leftLen = (i > 0) ? left[i-1] : 0;
            const rightLen = (i < n - 1) ? right[i+1] : 0;
            const sum = leftLen + rightLen;
            // If there's at least one '1' outside the left and right groups, add 1
            const possible = sum + (totalOnes > sum ? 1 : 0);
            maxLen = Math.max(maxLen, possible);
        }
    }
    
    return maxLen;
}


// Test cases
console.log(getMaxConsecutiveOnes("11111000")); // Expected: 5 ✅
console.log(getMaxConsecutiveOnes("11011000")); // Expected: 4 ✅
console.log(getMaxConsecutiveOnes("11000110")); // Expected: 3 ✅
console.log(getMaxConsecutiveOnes("11111"));    // Expected: 5 ✅
console.log(getMaxConsecutiveOnes("00000"));    // Expected: 0 ✅
console.log(getMaxConsecutiveOnes("00010"));    // Expected: 1 ✅
console.log(getMaxConsecutiveOnes("1101110"));  // Expected: 5 ✅
console.log(getMaxConsecutiveOnes("10101"));    // Expected: 3 ✅
console.log(getMaxConsecutiveOnes("10001"));    // Expected: 2 ✅
console.log(getMaxConsecutiveOnes("101011"));   // Expected: 4 ✅
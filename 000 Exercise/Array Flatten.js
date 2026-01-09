console.log("Applicatoin Started...");

function flattenArray(arr, depth = 1) {
  // if (depth < 1) return arr.slice();
  if (depth < 1) return arr;

  return arr.reduce((acc, val) => {
    
    return Array.isArray(val)
      ? acc.concat(flattenArray(val, depth - 1))
      : acc.concat(val)
    },[]
);
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
const flatArray = flattenArray(nestedArray, 2);
console.log("Flattened Array:", flatArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

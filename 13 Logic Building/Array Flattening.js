let input = [1, [null], 2, [3, 4], 5, [[[6, 7, 8]]]];

let flattenedArray = [];

function flattenArray(a) {
  // console.log("Input Array :: ", a);
  for (let i = 0; i < a.length; i++) {
    // console.log("Current element :: ", a[i], "isArray :: ", Array.isArray(a[i]));
    if (Array.isArray(a[i])) {
      // console.log("Element is an array, calling flattenArray recursively :: ", a[i]);
      flattenArray(a[i]);
    } else {
      //   console.log("Pushing element :: ", a[i]);
      flattenedArray.push(a[i]);
      //   console.log("--------------");
    }
  }
  return flattenedArray;
}

console.log("Final Array :: ", flattenArray(input));

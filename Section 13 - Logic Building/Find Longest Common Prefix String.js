/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
 
Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""

Explanation: There is no common prefix among the input strings.
 
 */
let strs = [];
strs = ["dog", "racecar", "car"];
strs = ["flower", "flow", "flight"];
strs = ["flower", "flow"];

function findPreFix(arr) {
  let common = [];
  let arrayFormatString = [];
  for (let i = 0; i < arr.length; i++) {
    arrayFormatString.push(arr[i].split(""));
  }

  for (let j = 0; j < arrayFormatString[0].length; j++) {
    let matched = true;
    for (let i = 1; i < arrayFormatString.length; i++) {
      if (arrayFormatString[0][j] != arrayFormatString[i][j]) {
        matched = false;
        break;
      }
    }
    if (matched) {
      common.push(arrayFormatString[0][j]);
    } else {
      break;
    }
  }
  return common.join("");
}
console.log("Output:", findPreFix(strs));

let stringVariable = "Riyaz Khan";
/* index of varaibles
R = 0
i = 1
y = 2
a = 3
z = 4
  = 5
K = 6
h = 7
a = 8
n = 9
*/
console.log(stringVariable.slice(4,8));             //z Kh
console.log(stringVariable.substring(4,8));         //z Kh

// The slice function will return an emply string if the start index is greateer than end index
console.log(stringVariable.slice(8,4));             //""
console.log(stringVariable.substring(8,4));         //z Kh

// If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0.
console.log("Minus Example for Substring")
console.log(stringVariable.substring(-5, 2));       // "Ri"
console.log(stringVariable.substring(-5, -2));      // ""

// slice() also treats NaN arguments as 0, but when it is given negative values it counts backwards from the end of the string to find the indexes.
console.log("Minus Example for Slice")
console.log(stringVariable.slice(-5, 2));           // ""
console.log(stringVariable.slice(-5, -2));          //" Kh"
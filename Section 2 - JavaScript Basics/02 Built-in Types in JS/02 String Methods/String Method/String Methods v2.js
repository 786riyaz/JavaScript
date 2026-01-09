let str1 = "String Text for 1";
var str2 = 'String Text for \'2\' \nThis is new line';
var length = str1.length;       // Length of the String 

str1.indexOf("Text");           // Find Substring, position of a substring
str1.lastIndexOf("r");          // Find Last Occurance
str1.slice(3,6);                // Cuts our a substring
str1.replace("Text","texts");   // Find and replace the first occurance
str1.replaceAll("r","R");       // Find and replace the all occurance
str1.toUpperCase();             // Convert to UpperCase
str1.toLowerCase();             // Convert to LowerCase
str1.concat(" ", str2);         // str1 + " " + str2
str1.charAt(2);                 // Character at position/index
str1[6];                        // Unsafe, Character at position/index 
str1[7] = "0"                   // doesn't work
str1.charCodeAt(2);             // character code at index
str1.split("for");              // Splitting a string on the mentioned character(s), creates an array
str1.split("");                 // Splitting on characters


console.log('c'.toString(16));               // number to hex(16), octal or binary
let num = 100;
console.log(num.toString(16));
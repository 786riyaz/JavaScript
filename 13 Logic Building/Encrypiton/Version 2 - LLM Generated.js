/**
 * Encrypts a given string using a numerical key based on letter-to-number mapping.
 *
 * Each letter in the input string is converted to its corresponding number (a=1, b=2, ..., z=26),
 * then added to the corresponding digit of the repeating key.
 *
 * @param {string} inputString - The string to be encrypted (only lowercase letters expected).
 * @param {number} key - The numerical key used for encryption.
 * @returns {string} - The encrypted message as a comma-separated string of numbers.
 */
const encrypt = (inputString, key) => {
    console.log("Encryption Function Starts.....");
    console.log("Input Message:", inputString);
    console.log("Encryption Key:", key);
    
    key = key.toString();
    const mapping = Object.fromEntries(Array.from({ length: 26 }, (_, i) => [String.fromCharCode(97 + i), i + 1]));
    
    const encryptedMessage = inputString
        .split("")
        .map((char, i) => mapping[char] + parseInt(key[i % key.length]))
        .join(",");
    
    console.log("Encrypted Message:", encryptedMessage);
    console.log("Encryption Function Ends.....");
    return encryptedMessage;
};

console.log(encrypt("india", 1234));
console.log("===================================================");
console.log(encrypt("ahmedabad", 786));
console.log("===================================================");
console.log(encrypt("gujarat", 27));

/*
Understanding charCode in Object.fromEntries(Array.from(...))
This line dynamically creates a mapping of letters (a to z) to numbers (1 to 26):

const mapping = Object.fromEntries(
    Array.from({ length: 26 }, (_, i) => [String.fromCharCode(97 + i), i + 1])
);

Let’s analyze it step by step:
1)) Array.from({ length: 26 }, (_, i) => [...])
This creates an array of length 26, where i iterates from 0 to 25.
_ is a placeholder (we don't need the first argument, so we ignore it).

2)) String.fromCharCode(97 + i)
String.fromCharCode(n) converts a Unicode number (n) into a character.
Unicode for 'a' is 97, 'b' is 98, ..., 'z' is 122.
Adding i (0 to 25) to 97 gives all letters from 'a' to 'z'.

3)) Creating the Mapping
This generates key-value pairs:
[
  ['a', 1], ['b', 2], ['c', 3], ..., ['z', 26]
]
Then, Object.fromEntries([...]) converts this array into an object:
{
  a: 1, b: 2, c: 3, ..., z: 26
}


How It Works in Encryption
const encryptedMessage = inputString
    .split("")
    .map((char, i) => mapping[char] + parseInt(key[i % key.length]))
    .join(",");
.split("") converts "india" → ["i", "n", "d", "i", "a"]
.map((char, i) => mapping[char] + parseInt(key[i % key.length]))
Finds mapping[char] (letter’s number).
Adds corresponding digit from repeating key.
For "india" with key = 1234:

'i' → 9 + 1 = 10
'n' → 14 + 2 = 16
'd' → 4 + 3 = 7
'i' → 9 + 4 = 13
'a' → 1 + 1 = 2
Final output: "10,16,7,13,2"

Why Use charCode?
Eliminates Manual Mapping: Instead of hardcoding { a: 1, b: 2, ... }, we generate it dynamically.
More Scalable: Works for any character set (e.g., uppercase letters can be mapped similarly).
Cleaner Code: Reduces redundancy and makes it easier to maintain.
Let me know if anything needs further clarification! 🚀
*/
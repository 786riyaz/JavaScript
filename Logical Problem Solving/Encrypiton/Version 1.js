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
const encrypt = function (inputString, key) {
    console.log("Encryption Function Starts.....");
    let encryptedMessage = "";
    let correspondValueArray = [];
    let addedValueArray = [];
    let mapping = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8,
        "i": 9,
        "j": 10,
        "k": 11,
        "l": 12,
        "m": 13,
        "n": 14,
        "o": 15,
        "p": 16,
        "q": 17,
        "r": 18,
        "s": 19,
        "t": 20,
        "u": 21,
        "v": 22,
        "w": 23,
        "x": 24,
        "y": 25,
        "z": 26
    };

    console.log("Input Message ::", inputString);
    console.log("Input Message ::", key);
    key += "";

    for (let i = 0; i < inputString.length; i++) {
        // console.log(inputString[i], "::", mapping[inputString[i]]);
        correspondValueArray.push(mapping[inputString[i]]);
    }
    // console.log("Mapped Values :: " + correspondValueArray);

    for (let i = 0; i < correspondValueArray.length; i++) {
        console.log(inputString[i], "\t::\t", mapping[inputString[i]], "\t::\t", correspondValueArray[i], "+", parseInt(key[i % key.length]), " \t::\t ", correspondValueArray[i] + parseInt(key[i % key.length]));
        addedValueArray.push(correspondValueArray[i] + parseInt(key[i % key.length]));
    }
    // console.log(addedValueArray);

    for (let i = 0; i < addedValueArray.length; i++) {
        encryptedMessage += addedValueArray[i]
        if (i != addedValueArray.length - 1) {
            encryptedMessage += ","
        }
    }
    console.log("Encryption Function Ends.....");
    return encryptedMessage
}

console.log(encrypt("india", 1234));
console.log("===================================================");
console.log(encrypt("ahmedabad", 786));
console.log("===================================================");
console.log(encrypt("gujarat", 27));
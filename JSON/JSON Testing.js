/**
 * Function to check if string is valid JSON or not
 * @param {​​​​​string}​​​​​ str - String
 * @returns - true or false
*/

const isValidJSON = (str) => {
    try {
        if (typeof str === 'string' && str.startsWith('{') && str.endsWith('}')) {
            JSON.parse(str);
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
    return true;
};

// Main Logic
let isJsonValid = false;
isJsonValid = isValidJSON("{ruuyr}");
console.log(isJsonValid);
isJsonValid = isValidJSON(`{"key":"Value"}`);
console.log(isJsonValid);
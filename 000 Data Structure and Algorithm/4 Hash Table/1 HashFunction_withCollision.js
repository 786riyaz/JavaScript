function hashFunction(value) {
    let sumOfChars = 0;
    for (let char of value) {
        sumOfChars += char.charCodeAt(0);
    }
    // return sumOfChars % 3;
    return sumOfChars % 10;
    // return sumOfChars % 20;
}

console.log("'Riyaz' has hash code:", hashFunction('Riyaz'));
console.log("'XYZ' has hash code:", hashFunction('XYZ'));
console.log("'ABC' has hash code:", hashFunction('ABC'));
console.log("'Arbaz' has hash code:", hashFunction('Arbaz'));
console.log("'Bob' has hash code:", hashFunction('Bob'));

// After this we have to handle the collision using Array Format
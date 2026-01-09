/*
The includes() returns true if an element is in an array of false if it is not.
The following examples iterates over elements of an array and adds to a new array onle elements that are not already there.
*/

let array1 = ["a", "a", "b", "b", "c", "d"];
console.log("Printing Array before removing the duplicates ::: ");
console.log(array1);

let uniqueValues = [];
array1.forEach((c) => {
    if(!uniqueValues.includes(c)) {
        uniqueValues.push(c);
    }
})

console.log("Printing the array After removing the duplicate values ::::");
console.log(uniqueValues);
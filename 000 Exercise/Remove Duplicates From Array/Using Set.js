/*
A Set is a collection of unique values.
To remove duplicates from an Array ::: 
    First, convert an array of duplicates to a Set. (The new set will implicitly remoce duplicate elements)
    Then convert the Set back to the array.
*/

let array1 = ["a", "a", "b", "b", "c", "d"];
console.log("Printing Array before removing the duplicates ::: ");
console.log(array1);

let uniqueValues = [... new Set(array1)];

console.log("Printing the array After removing the duplicate values ::::");
console.log(uniqueValues);
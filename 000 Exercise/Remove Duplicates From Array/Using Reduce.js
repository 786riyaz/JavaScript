/*
The reduce() method is used to reduce the elements of the array and combine them into a final array based on some reducer function that you pass.
*/

let array1 = ["a", "a", "b", "b", "c", "d"];
console.log("Printing Array before removing the duplicates ::: ");
console.log(array1);
console.log();

function removeDuplicate(arr){
    let unique = arr.reduce(function (acc,curr){
        if(!acc.includes(curr))
            acc.push(curr);
        return acc;
    },[]);
    return unique;
}

console.log("Printing the array After removing the duplicate values ::::");
console.log(removeDuplicate(array1));
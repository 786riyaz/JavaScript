/*
to remove the duplicates, you use the filter() method to include only elements whose indexes match their indexOf values
*/

let array1 = ["a", "a", "b", "b", "c", "d"];
console.log("Printing Array before removing the duplicates ::: ");
console.log(array1);

let uniqueValues = array1.filter((c,index) => {
    return array1.indexOf(c) == index;
})

console.log("Printing the array After removing the duplicate values ::::");
console.log(uniqueValues);
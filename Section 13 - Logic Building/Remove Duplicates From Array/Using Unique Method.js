/*
In javascript  the array prototype constructor allows you to add new properties and methods to the array object.
*/

let array1 = ["a", "a", "b", "b", "c", "d"];
console.log("Printing Array before removing the duplicates ::: ");
console.log(array1);
console.log();

Array.prototype.unique = function (){
    var unique = [];
    for (i=0; i < this.length ; i++){
        var current = this[i];
        if (unique.indexOf(current) < 0)
            unique.push(current)
    }
    return unique;
}

console.log("Printing the array After removing the duplicate values ::::");
console.log(array1.unique());
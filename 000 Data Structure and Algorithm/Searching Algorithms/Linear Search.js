/* 
Here is the details of linear search
The Linear Search algorithm searches through an array and returns the index of the value it searches for.
https://www.w3schools.com/dsa/dsa_algo_linearsearch.php
*/

console.clear();
console.log("Application Started.....");

let array = [1, 5, 2, 6, 9, 3, 8, 0, 4, 7];
console.log("Array of values :: ", array);

let element_Found_At = -1;
let element = 99;
console.log("Element to be search ::", element);

for (let i = 0; i < array.length; i++) {
    console.log("Current Element ::", array[i]);
    if(array[i] == element){
        console.log("\n\nElement found at position :: ", i);
        element_Found_At = i;
        break;
    }
}

if(element_Found_At == -1){
    console.log("\n\n Element not found!!!");
}
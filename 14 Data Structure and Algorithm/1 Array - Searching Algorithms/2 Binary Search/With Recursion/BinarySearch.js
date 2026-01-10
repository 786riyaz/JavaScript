/*
Input Array must be in the sorted form to perform Binary Search
*/
console.clear();
console.log("Application Started - Binary Search with Recursion\n");

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let element_To_Search = 17;

function BinarySearch(start, end) {
    // console.log("Start ::", start, " End ::", end);
    let centerIndex = parseInt((start + end) / 2);
    let centerValue = array[centerIndex];

    if (element_To_Search == centerValue) {
        console.log("Element Found At index ::", centerIndex);
    } else {
        if (start != end) {
            if (element_To_Search < centerValue) {
                BinarySearch(start, centerIndex - 1);
            } else if ((element_To_Search > centerValue)) {
                BinarySearch(centerIndex + 1, end);
            }
        } else {
            console.log("Element not Found");
        }
    }
}

let result = BinarySearch(0, array.length - 1);
let arr1 = [1, 2, 3];
let arr2 = ["a", "b", "c"];
let arr3 = [1, "two", 3, true, null, undefined, { key: 'value' }, [4, 5]];

let arrayOfObjects1 = [{ id: 1 }, { id: 2 }];
let arrayOfObjects2 = [{ id: 1 }, { id: "2" }];
let arrayOfObjects3 = [
    { name: "Riyaz", age: 26, isStudent: false },
    { name: "Arbaz", age: 25, isStudent: false },
    { name: "Tasin", age: 26, isStudent: true },
];

// =====================================

let a = [1,2,3,4,5,6,7,8,9,10];
let key = a.keys();
let values = a.values();
let entries = a.entries();

console.log("Array :: " + a);       // Array :: 1,2,3,4,5,6,7,8,9,10
console.log("Keys ::", ...key);     // Keys :: 0 1 2 3 4 5 6 7 8 9
console.log("Values ::", ...values);  // Values :: 1 2 3 4 5 6 7 8 9 10
console.log("Entries ::", ...entries); // Entries :: [ 0, 1 ] [ 1, 2 ] [ 2, 3 ] [ 3, 4 ] [ 4, 5 ] [ 5, 6 ] [ 6, 7 ] [ 7, 8 ] [ 8, 9 ] [ 9, 10 ]
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Array Before Splicing ::: " + fruits);         // Banana,Orange,Apple,Mango
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log("Array after Splicing ::: " + fruits);          // Banana,Orange,Lemon,Kiwi,Apple,Mango
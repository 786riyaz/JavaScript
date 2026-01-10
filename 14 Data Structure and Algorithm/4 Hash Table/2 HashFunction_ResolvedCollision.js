function hashFunction(value) {
    let sumOfChars = 0;
    for (let char of value) {
        sumOfChars += char.charCodeAt(0);
    }
    return sumOfChars % 10;
}

let NameArray = ['Riyaz', 'XYZ', 'ABC', 'Arbaz', 'Bob'];
let HashSet = [[],[],[],[],[],[],[],[],[],[]];

for(let i=0; i<NameArray.length;i++){
    let index = hashFunction(NameArray[i]);
    console.log("'"+NameArray[i]+"' has hash code:", index);
    HashSet[index].push(NameArray[i]);
}
console.log("\nHash Set :: \n", HashSet);
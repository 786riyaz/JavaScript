function hashFunction(value) {
    let sumOfChars = 0;
    for (let char of value) {
        sumOfChars += char.charCodeAt(0);
    }
    return sumOfChars % 10;
}

let NameArray = ['Riyaz', 'XYZ', 'ABC', 'Arbaz', 'Bob'];
let HashSet = [[], [], [], [], [], [], [], [], [], []];

for (let i = 0; i < NameArray.length; i++) {
    let index = hashFunction(NameArray[i]);
    HashSet[index].push(NameArray[i]);
}
// console.log("Hash Set :: " + HashSet + "\n");
console.log("Hash Set :: \n", HashSet);
{
    let NameToSearch = "Bobby";
    let FindInIndex = hashFunction(NameToSearch);
    console.log("Name to found :: " + NameToSearch);

    if (HashSet[FindInIndex].indexOf(NameToSearch) > -1) {
        console.log("Found \n");
    } else {
        console.log("Not Found \n");
    }
}
{
    let NameToSearch = "Bob";
    let FindInIndex = hashFunction(NameToSearch);
    console.log("Name to found :: " + NameToSearch);

    if (HashSet[FindInIndex].indexOf(NameToSearch) > -1) {
        console.log("Found \n");
    } else {
        console.log("Not Found \n");
    }
}
let NameToSearch = "Rob";
let FindInIndex = hashFunction(NameToSearch);
console.log("Name to found :: " + NameToSearch);

if(HashSet[FindInIndex].indexOf(NameToSearch) > -1){
    console.log("Found \n");
} else {
    console.log("Not Found \n");
}
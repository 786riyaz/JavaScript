const Object1 = {
    Name : "Riyaz",
    Age : 24,
    "Home Adress" : "Ahmedabad",
    Languages : ["Java", "JavaScript", "Python"]
}

console.log("Printing Whole Object using Console Log :::::");
console.log(Object1);
console.log();

console.log("Priting the Key Names of the Object :::: ");
for(let data in Object1){       // data Varibale will works as Index of the loop
    console.log(data);      
}
console.log();

console.log("Printing Object using For Loop ::::: ");
let i = 0;
for(let key in Object1){
    i++;
    console.log(`Pair ${i} ==> ${key} :: ${Object1[key]}`);
}
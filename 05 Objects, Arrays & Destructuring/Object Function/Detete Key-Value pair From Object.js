let TestObject = {
    Name:"Riyaz",
    Age:24,
    "sys-number":6
}
console.log();
console.log("Object Before Deletion ::: ");
console.log(TestObject);

delete TestObject["sys-number"];

console.log();
console.log("Object After Deletion 1 ::: ");
console.log(TestObject);

delete TestObject.Age;

console.log();
console.log("Object After Deletion 2 ::: ");
console.log(TestObject);
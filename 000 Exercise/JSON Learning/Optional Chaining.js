console.clear();
let Sample_JSON = {
    "A":"Value of A",
    "B" : {
        "a" : "Value of a",
        "b" : {
            "Test":"Test"
        }
    }
}

console.log(Sample_JSON);
console.log(Sample_JSON.B);
console.log(Sample_JSON.B.b);
console.log(Sample_JSON?.B?.b);
console.log(Sample_JSON?.A?.b);
console.log(Sample_JSON.A.b);


/*
Key Points:
Optional chaining is short-circuiting, meaning it stops the evaluation as soon as it encounters null or undefined.
It's useful for handling objects where some properties may not exist without requiring extensive checks.
It helps make code cleaner and more readable.
*/


const users = [{ name: "Riyaz" }];
// Without optional chaining
const firstUserName = users && users[0] && users[0].name; // "Riyaz"
// With optional chaining
const firstUserName2 = users?.[0]?.name; // "Riyaz"

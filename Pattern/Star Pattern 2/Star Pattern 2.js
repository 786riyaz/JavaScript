/*
9 8 7 6 5 4 3 2 1 0
9 8 7 6 5 4 3 2 1 0
9 8 7 6 5 4 3 2 1 0
9 8 7 6 5 4 3 2 1 0
9 8 7 6 5 4 3 2 1 0
9 8 7 6 5 4 3 2 1 0
9 8 7 6 5 4 3 2 1 0
9 8 7 6 5 4 3 2 1 0
9 8 7 6 5 4 3 2 1 0
9 8 7 6 5 4 3 2 1 0
*/

let finalMsessage = "";
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        finalMsessage += 9 - j + " ";
    }
    finalMsessage += "\n";
}
console.log(finalMsessage);
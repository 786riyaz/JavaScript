let array = [131, 142, 143, 190, 241, 247, 264, 465, 508, 552];
let tempArray = [];
let index = 0;
console.log("Input Array ::: " + array + "\n");

for (let z = 1; z <= 3; z++) {
    // Ascending values with Position Values
    let matrix = [[], [], [], [], [], [], [], [], [], []];
    for (let i = 0; i < array.length; i++) {
        let Remainder = array[i] % Math.pow(10, z);
        let Devident
        if (z == 1) {
            Devident = Remainder;
        } else {
            Devident = parseInt(Remainder / Math.pow(10, z - 1));
        }
        matrix[Devident].push(array[i]);
    }
    // console.log("Matrix Iteration", z, ":: " + matrix);

    index = 0;
    for (let j = 0; j < matrix.length; j++) {
        for (let k = 0; k < matrix[j].length; k++) {
            tempArray[index] = matrix[j][k];
            index++;
        }
    }
    array = tempArray;
    console.log("Sorted Iteration", z, ":: " + array + "\n");
}
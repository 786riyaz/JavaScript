// finding the missing Number
// We can sum all the elements
// output :: 11
let a = [4, 5, 6, 7, 8, 9, 10, 12];

let index = 0;

for (let i = a[0]; i < a[a.length - 1]; i++) {
  if (a[index] !== a[index + 1] - 1) {
    console.log("Missing Number = ", i + 1);
    break;
  }
  index++;
}

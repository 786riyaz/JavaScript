const numbers = [65, 44, 12, 4];
console.log("Output of 2nd Function~~~~~~~~~~~~~")
numbers.forEach(myFunction2);
console.log("Output of 1st Function~~~~~~~~~~~~~")
numbers.forEach(myFunction1);

function myFunction1(item, index, arr) {
  arr[index] = item * 10;
  console.log(arr[index])
}

function myFunction2(item){
    console.log(item)
}
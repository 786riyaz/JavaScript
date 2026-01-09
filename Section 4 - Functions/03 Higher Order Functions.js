function calculate(a, b, operation=add) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(calculate(5, 3, add)); // 8
console.log(calculate(5, 3)); // 8

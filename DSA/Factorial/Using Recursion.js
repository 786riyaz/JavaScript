function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

let input = 10;
let result = factorial(input);
console.log(`Factorial of ${input} :: ${result}`);
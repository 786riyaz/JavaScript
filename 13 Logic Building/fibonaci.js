function fib(n){
    console.log("Calculating fib(" + n + ")");
    if(n <= 1)
        return n;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(6)); // Output:8
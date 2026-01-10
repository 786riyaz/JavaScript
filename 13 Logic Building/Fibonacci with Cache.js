console.log("Application started")
let count = 0;
let cache = {};
function fibonacci(n){
    console.log("Calculating Fibonacci of: " + n);
    count++;
    if (n in cache) {
        console.log("Fetching from cache for: " + n);
        return cache[n];
    }

    if (n <= 1) {
        cache[n] = n;
        return n;
    } else {
        cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return cache[n];
    }
}

console.log("Fibonacci of 6 is: " + fibonacci(6))
console.log("Fibonacci function was called " + count + " times");
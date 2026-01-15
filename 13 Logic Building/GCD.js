// This function calculates the greatest common divisor (GCD) of two numbers A and B using the Euclidean algorithm.
function fun(A,B){
    console.log("A:", A, "B:", B);
    if (B === 0) 
        return A;
    return fun(B, A % B);
}

var ans = fun(100, 2000);
console.log(ans); // Output: 100
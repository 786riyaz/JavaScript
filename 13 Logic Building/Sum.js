function solve() {
    var i = 0;
    var sum = 0;
    while (i < 100) {
        sum = sum + i;
        sum = i + sum;
        i++;
        // console.log(i, sum);
    }
    console.log(sum);
}

solve();
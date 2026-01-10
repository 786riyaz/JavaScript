console.log("X Pattern");
printPattern(9); // Size of the pattern
console.log("=================================");
printPattern(7); // Size of the pattern
console.log("=================================");
printPattern(5); // Size of the pattern
console.log("=================================");
printPattern(3); // Size of the pattern

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == j || j == n - 1 - i) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}
/*
X Pattern
*       *
 *     *
  *   *
   * *
    *
   * *
  *   *
 *     *
*       *
=================================
*     *
 *   *
  * *
   *
  * *
 *   *
*     *
=================================
*   *
 * *
  *
 * *
*   *
=================================
* *
 *
* *
*/
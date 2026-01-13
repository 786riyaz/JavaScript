const d = new Date();
console.log("Date Object:");
console.log(d.valueOf());                               // miliseconds since January 1, 1970 ---- 1768301102340
console.log(d.toString());                              // Tue Jan 13 2026 16:15:02 GMT+0530 (India Standard Time)
console.log(d);                                         // 2026-01-13T10:45:02.340Z
console.log();

console.log("Locale String Format:");
let text = d.toLocaleString();
console.log(text);                                      // 13/1/2026, 4:15:02 pm
console.log();

console.log("US Locale String Format:");
text = d.toLocaleString("en-US");
console.log(text);                                      // 1/13/2026, 4:15:02 PM
console.log();

console.log("German Locale String Format:");
text = d.toLocaleString("de-DE");                       // 13.1.2026, 16:15:02
console.log(text);
console.log();

console.log("Japanese Locale String Format:");
text = d.toLocaleString("ja-JP");
console.log(text);                                      // 2026/1/13 16:15:02
console.log();
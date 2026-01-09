let stringVariable = "   Riyaz Khan   ";
console.log(stringVariable.length);                             //16

console.log(stringVariable.charAt(4));                          //i
console.log(stringVariable.indexOf("a"));                       //6
console.log(stringVariable.lastIndexOf("a"));                   //11

console.log(stringVariable.concat(" ", "Pathan"));              //   Riyaz Khan    Pathan

console.log(stringVariable.startsWith("R"));                    //false
console.log(stringVariable.startsWith("K"));                    //false
console.log(stringVariable.endsWith("z"));                      //false
console.log(stringVariable.endsWith("n"));                      //false

console.log(stringVariable.includes("A"));                      //false
console.log(stringVariable.includes("z"));                      //true

console.log(stringVariable.match(/[A-Z]/g));                    //[ 'R', 'K' ]
console.log(stringVariable.match(/[a-z]/g));                    //['i', 'y', 'a', 'z', 'h', 'a', 'n']

console.log(stringVariable.padStart(20, " ~"));                 //~ ~   Riyaz Khan
console.log(stringVariable.padStart(20, "~"));                  //~~~~   Riyaz Khan
console.log(stringVariable.padEnd(20, " ~"));                   //   Riyaz Khan    ~ ~
console.log(stringVariable.padEnd(20, "~"));                    //   Riyaz Khan   ~~~~

console.log(stringVariable.repeat(3));                          //   Riyaz Khan      Riyaz Khan      Riyaz Khan
console.log(stringVariable + "-".repeat(3));                    //   Riyaz Khan   ---
console.log((stringVariable + "-").repeat(3));                  //   Riyaz Khan   -   Riyaz Khan   -   Riyaz Khan   -

console.log(stringVariable.replace("Khan", "Pathan"));          //   Riyaz Pathan
console.log(stringVariable.replace("a", "A"));                  //   RiyAz Khan
console.log(stringVariable.replaceAll("a", "A"));               //   RiyAz KhAn

console.log(stringVariable.search("a"));                        //6
console.log(stringVariable.search("an"));                       //11
console.log(stringVariable.search("az"));                       //6
console.log(stringVariable.search("A"));                        //-1
console.log(stringVariable.search("P"));                        //-1
console.log((stringVariable + " Pathan").search("P"));          //17

console.log(stringVariable.slice(4,6));                         //iy
console.log(stringVariable.slice(4,9));                         //iyaz
console.log(stringVariable.split("a"));                         //[ '   Riy', 'z Kh', 'n   ' ]
console.log(stringVariable.split(""));                          //[' ', ' ', ' ', 'R','i', 'y', 'a', 'z',' ', 'K', 'h', 'a',  'n', ' ', ' ', ' ']
console.log(stringVariable.substring(4,6));                     //iy
console.log(stringVariable.substring(4,9));                     //iyaz

console.log(stringVariable.toLocaleLowerCase());                //   riyaz khan
console.log(stringVariable.toLowerCase());                      //   riyaz khan
console.log(stringVariable.toLocaleUpperCase());                //   RIYAZ KHAN
console.log(stringVariable.toUpperCase());                      //   RIYAZ KHAN

console.log(stringVariable.trim());                             //Riyaz Khan
console.log(stringVariable.trimStart());                        //Riyaz Khan
console.log(stringVariable.trimEnd());                          //   Riyaz Khan
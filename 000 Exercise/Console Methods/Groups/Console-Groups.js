console.log("Outside of the Groups - Line 0");

console.group("Log Group 1");
console.log("Group 1 - Line 1");
console.log("Group 1 - Line 2");
console.groupEnd();

console.log("Outside of the Groups - Line 1");

console.groupCollapsed("Log Group 2");
console.log("Group 2 - Line 1");
console.log("Group 2 - Line 2");
console.groupEnd();

console.log("Outside of the Groups - Line 2");
let temp1 = "";

if ([null, "null", "Null", undefined, "undefined", "Undefined", "", [], "[]", {}, "{}"].indexOf(temp1) == -1) {
    console.log("Element has some value.....");
} else {
    console.log("Element is either null, undefined or blank (has no value)");
}
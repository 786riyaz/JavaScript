const lang = ["HTML", "CSS", "JavaScript", "PHP", "Python"];

console.log("Before Edit :::", lang);
const myLang = lang.with(2, "TypeScript");

console.log("After Edit :::", myLang);
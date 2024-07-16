// If the Function body has more than one statement, you need to use curley braces and specify the return keyword (if you want return something)

const greetPerson = name => {
    const greeting = "Hello, " + name + "!";
    return greeting;
}

console.log(greetPerson("Riyaz"));          // Hello, Riyaz!
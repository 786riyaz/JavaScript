/*
Prototypes & Inheritance
JavaScript uses **Prototypal Inheritance**. Every object has an internal link to another object called its **prototype**. When you try to access a property, if it's not on the object itself, JavaScript traverses the **prototype chain** until it finds the property or reaches `null`.

  * **Detail:** This mechanism allows objects to inherit properties and methods from their prototype.
  * **Example (`Object.create()`):**
*/
const animalPrototype = {
  makeSound: function() {
    console.log(`The ${this.species} makes a noise.`);
  }
};

// Create a new object that inherits from animalPrototype
const dog = Object.create(animalPrototype); 
dog.species = 'Dog'; // Own property
dog.makeSound = function() { // Overrides prototype's method
    console.log(`The ${this.species} barks!`);
}

dog.makeSound(); // Output: The Dog barks! (Uses dog's own method)
// The object linked to dog's internal prototype is animalPrototype.
console.log(Object.getPrototypeOf(dog) === animalPrototype); // Output: true
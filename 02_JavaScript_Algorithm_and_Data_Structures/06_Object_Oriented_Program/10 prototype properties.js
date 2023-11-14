/**
 * ? WHAT IS A PROTOTYPE?
 * * Properties in the protoype are shared across all instances of the constructor
 * * Think of it as a way to reduce duplicated variables when you have multiple objects
 * ? WHAT IS THE SYNTAX?
 * * Construct.prototype.property
 */

function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog("Snoopy");
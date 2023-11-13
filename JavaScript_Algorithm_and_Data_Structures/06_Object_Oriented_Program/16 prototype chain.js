/**
 * * The hasOwnProperty method is defined in Object.prototype
 * * A prototype can have its own prototype
 */

function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);
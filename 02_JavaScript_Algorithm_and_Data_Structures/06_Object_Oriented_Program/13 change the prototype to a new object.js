/**
 * * Create a new object to assign multiple prototype properties
 * ? SYNTAX
 * * Do not use this keyword when assigning prototype properties
 */

function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function() {
        console.log("nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};
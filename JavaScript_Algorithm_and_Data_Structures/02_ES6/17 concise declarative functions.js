/* 
* When declaring a function in an object, can 
* omit the ": function()

! ES5
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};

! ES6
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};


 */

// Only change code below this line
const bicycle = {
    gear: 2,
    setGear (newGear) {
        this.gear = newGear;
    }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
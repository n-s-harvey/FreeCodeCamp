/**
 * * Use the instanceof keyword to determine if an object
 * * is an instance of a constructor
 * 
 * ? SYNTAX
 * * objectName instanceof Object
 */

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// Only change code below this line

let myHouse = new House(5);
myHouse instanceof House;
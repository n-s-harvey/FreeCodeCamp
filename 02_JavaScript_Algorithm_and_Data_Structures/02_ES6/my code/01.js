const myObject = {
    property1: "cheese",
    property2: "parentheses"
};

myObject.property1 = "parmesan";

const butterSpread = "garlic";
const isToasted = true;

const bread = {
    spread: butterSpread,
    toasted: isToasted
};

// console.log(bread);

// bread.newProperty = bread;

// console.log(bread);

/* () => {
    const {property1: typeOfCheese, property2: symbol} = myObject;
    bread.secondNewProperty = typeOfCheese;
    bread.thirdNewProperty = symbol;
}

console.log(bread);
console.log(property1); */

function butter(bread, type) {
    bread.butterSpread = type;
}

butter(bread, butterSpread);

console.log(bread);

const addCheese = (obj) => {
    obj.cheese = "mozerella";
}

console.log(addCheese(bread));


const squareList = arr => {
    // Only change code below this line

    const positiveIntegers = (arr => {
        return arr.filter(
            (element, index, array) => {
                return Number.isInteger(element) && element > 0;
            }
        );
    })(arr);

    const squaredIntegers = (positiveIntegers => {
        return positiveIntegers.map(
            (element, index, array) => {
                return element * element;
            }
        );
    })(positiveIntegers);
    
    return squaredIntegers;
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
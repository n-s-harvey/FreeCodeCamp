Array.prototype.myMap = function (callback) {
    const newArray = [];
    // Only change code below this line

    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }

    // Only change code above this line
    return newArray;
};

[1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0]);
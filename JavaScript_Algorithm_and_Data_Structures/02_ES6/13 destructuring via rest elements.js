/* 

? WHAT IS DESTRUCTURING VIA REST ELEMENTS?
* Lets you unpack the remaining elements in an array
* (Does not work as the last element)

 */

function removeFirstTwo(list) {
    const [a, b, ...output] = list;
    return output;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
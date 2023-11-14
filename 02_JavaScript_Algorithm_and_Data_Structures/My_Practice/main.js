function wrapper() {
    const square = function (number) {
        return number * number;
    };
}

const anonFunction = () => console.log("test");

function namedFunction() {

}

/* 
* square is within the scope of wrapper()
* IntelliSense does not recognize it as a symbol
*/
// console.log(square(4)); 

// console.log(square(16));

console.log(anonFunction());
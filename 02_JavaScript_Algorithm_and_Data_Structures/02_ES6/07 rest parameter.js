/* 

? WHAT ARE REST PARAMETERS?
* Create functions with variable num of arguments
* Args are stored in an array, accessible by function

? HOW DO I USE?
* Prepend an argument name with an ellipsis
*/

const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}
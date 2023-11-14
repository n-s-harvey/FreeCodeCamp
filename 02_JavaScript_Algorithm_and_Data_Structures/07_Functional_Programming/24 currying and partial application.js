/**
 * ? ARITY
 * * the number of arguments a function requires
 * ? CURRYING
 * * convert a function of N arity into N functions of arity 1
 * 
 * ? EXAMPLE
 * *  function unCurried(x, y) {
 * *   return x + y;
 * * }
 * * 
 * * function curried(x) {
 * *   return function(y) {
 * *     return x + y;
 * *   }
 * * }
 * * 
 * * const curried = x => y => x + y
 * * 
 * * curried(1)(2)
 * 
 * ? SAVING FUNCTION CALLS
 * * const funcForY = curried(1);
 * * console.log(funcForY(2)); // 3
 * 
 * ? PARTIAL APPLICATION
 * * Applying a few arguments to a function and returning 
 * * another function that is applied to more arguments
 * * function impartial(x, y, z) {
 * *   return x + y + z;
 * * }
 * * 
 * * const partialFn = impartial.bind(this, 1, 2);
 * * partialFn(10); // 13
 * 
 */

function add(x) {
    // Only change code below this line

    return function(y) {
        return function(z) {
            return x + y +z;
        }
    }

    
    // Only change code above this line
}

add(10)(20)(30);
console.log(add(10)(20));
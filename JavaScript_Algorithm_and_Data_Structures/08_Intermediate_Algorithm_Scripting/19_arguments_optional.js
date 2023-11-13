/* 
Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

*/

function addTogether(x) {

  const EXPECTED_NUMBER_ARGS = 2;
  
  const firstArgument = arguments[0];
  
  if (!isDefined(firstArgument)) return undefined;
  if (isNumber(firstArgument)) return undefined;
  
  if (arguments.length == EXPECTED_NUMBER_ARGS) {
    
    const secondArgument = arguments[1];

    if (isNumber(secondArgument)) return undefined;

    if (arguments.length == 2) {
      return firstArgument + secondArgument;
    }

    
  }

  else {

    return function (y) {

      if (isDefined(y) || isNumber(y)) return undefined;
      
      return x + y;

    }
  }
}

function isNumber(object) {
  return typeof(object) == "number";
}

function isDefined(object) {
  return object != undefined;
}

// console.log(addTogether(2, 3));
console.log(addTogether(5));
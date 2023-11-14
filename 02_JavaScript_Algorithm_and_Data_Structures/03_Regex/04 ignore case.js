/* 
* Ignore case: add the i flag after the closing /
 */

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
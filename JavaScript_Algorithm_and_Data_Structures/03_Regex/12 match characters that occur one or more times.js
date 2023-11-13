/* 
* To find a match of one or more times in a row, +
 */

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);
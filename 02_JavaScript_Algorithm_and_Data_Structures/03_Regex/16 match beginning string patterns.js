/* 
* Use a ^ outside of [] to find a match at the 
* beginning of a string
 */

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
/* 
* Can extract matches by calling .match() member function
! The function is called on the string, not on the 
! regex
 */

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
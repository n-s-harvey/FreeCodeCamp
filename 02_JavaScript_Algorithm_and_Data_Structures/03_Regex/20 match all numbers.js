/* 
* To match all digits or numbers, use \d
* equal to [0-9]
 */

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
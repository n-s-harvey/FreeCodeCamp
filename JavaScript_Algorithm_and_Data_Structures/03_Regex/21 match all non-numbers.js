/* 
* Match all non-numbers with \D
* equal to [^0-9]
 */

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
/* 
* To find a match at the end of strings, 
* use $ at the end of a regex (anchor)
 */

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
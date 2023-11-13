/* 
* Can search for whitespace using lowercase s-
* \s
* (matches whitespace, carriage return, tab, form feed,
    * newline characters
    * [ \r\t\f\n\v]
    * )
 */

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
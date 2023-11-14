/* 
* Shorthand character class for
* [A-za-z0-9_]
* is \w
 */

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
/* 
? WHAT IS REGEX?
* Matches part of a string

? WHAT IS THE SYNTAX?
* The regular expression is surrounded by / / 
* one way to test a regex is using .test()
* notice that the function is called as a member
*   of the regex and the argument is the testee
 */

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
/**
 * * Can call .replace(regex, arg2) on
 * *    a string
 * *    arg2 -> string or function call
 * *
 * ! can use $ to access capture groups in the string
 */

let str = "one two three";
let fixRegex = /(\w+) (\w+) (\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
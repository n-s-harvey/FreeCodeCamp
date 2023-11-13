/**
 * * Capture groups - 
 * *    1. enclose in parentheses
 * *    2. saved to a temporary "variable" accessed
 * *    by using a backslash and the num of the capture group
 * ?    let repeatRegex = /(\w+) \1 \1/;
 */

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/ // Change this line
let result = reRegex.test(repeatNum);
/**
 ** To match a minimum number, use {n,}
 */

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
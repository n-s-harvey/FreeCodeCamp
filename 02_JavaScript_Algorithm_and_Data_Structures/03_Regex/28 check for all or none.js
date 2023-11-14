/**
 * * Use ? - checks for 0 or one of the preceding
 * * AKA optional
 */

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
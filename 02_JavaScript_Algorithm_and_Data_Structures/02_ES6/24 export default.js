/* 
? WHAT IS AN EXPORT DEFAULT?
* Use if only one value is being exported from a file
* Also used to create a fallback value for a file or module
* Can only have one default
* Cannot use "export default" with "var", "let", or "const"
 */

export default function subtract(x, y) {
    return x - y;
}
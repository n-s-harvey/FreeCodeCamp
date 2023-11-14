/* 
{
    * to search with a quantity specifier, use {}
    * {n,m}
    * meaning that it will match when the preceding
    * is matched between n and m times (inclusive)
    * 
}
 */

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);
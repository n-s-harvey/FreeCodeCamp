/* 
* In regex, a greedy match finds the longest possible
* part of a string that fits the pattern and returns it 
* as a match

* alternative is lazy match - finds smallest part
* use a ? after *
 */

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
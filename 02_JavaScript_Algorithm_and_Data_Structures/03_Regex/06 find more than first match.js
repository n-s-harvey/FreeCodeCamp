/* 
* To search or extract a pattern more than once, use 
* global search flag: g
* .match() returns array of matches
 */

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
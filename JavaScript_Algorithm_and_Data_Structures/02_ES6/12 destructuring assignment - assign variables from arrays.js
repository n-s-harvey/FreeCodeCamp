/* 

? WHAT IS ARRAY DESTRUCTURING?
* Can pick and choose array elements

? WHAT IS THE SYNTAX?
* const [a, b] = [1, 2, 3, 4, 5, 6];
* console.log(a, b);

* const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
* console.log(a, b, c); // c=5

* The LHS of the assignment defines what values to unpack
 */

let a = 8, b = 6;
// Only change code below this line
[a,b] = [b,a];
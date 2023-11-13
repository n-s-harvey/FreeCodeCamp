/* 

? WHAT IS A SPREAD OPERATOR?
* Expand arrays & expressions where multiple parameters
* or elements are expected
! IT RETURNS AN UNPACKED ARRAY
* for example, Math.max() expects comma-separated - would 
* need to spread 

*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);
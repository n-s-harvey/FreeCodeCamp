/* 
! WHY USE ANONYMOUS FUNCTIONS?
* 1. To pass a function as an argument to another function
* 2. Define single-use functions
* 3. Improve code readability

! HOW DO I USE ARROW NOTATION?
* const myFunc = () => {
*  const myVar = "value";
*  return myVar;
* }

* const myFunc = () => "value";
 */

const magic = () => {
    return new Date();
}
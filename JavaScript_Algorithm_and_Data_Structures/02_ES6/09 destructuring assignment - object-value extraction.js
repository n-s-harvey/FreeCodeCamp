/* 

? WHAT IS DESTRUCTURING?
* Used to take values directly from an object

? SYNTAX
* The identifiers are matched to properties of the object
* const user = { name: 'John Doe', age: 34 };
* const { name, age } = user;


 */

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
const {today, tomorrow} = HIGH_TEMPERATURES;

  // Only change code above this line
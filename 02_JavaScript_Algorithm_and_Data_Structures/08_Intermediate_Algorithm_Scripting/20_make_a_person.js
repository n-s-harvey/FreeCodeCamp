/* 
Make a Person

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(first, last)

Run the tests to see the expected output for each method. These methods must be the only available means of interacting with the object. Each test will declare a new Person instance as new Person('Bob', 'Ross').

*/

let firstName, lastName;

const Person = function (first, last) {

  firstName = first;
  lastName = last;
  
  
  this.getFullName = function () {
    return firstName + " " + lastName;
  }
  
  this.getFirstName = function () {
    return firstName;
  }
  
  this.getLastName = function () {
    return lastName;
  }
  
  this.setFirstName = function (first) {
    firstName = first;
  }
  
  this.setLastName = function (last) {
  lastName = last;
  }
  
  this.setFullName = function (first, last) {
    firstName = first;
    lastName = last;
  }
  
  return first + " " + last;

};

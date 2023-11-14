/* 


Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object
from the collection if it is to be included in the returned array.

For example, if the first argument is 
[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is 
{ last: "Capulet" }, then you must return the third object from the array (the first argument), 
because it contains the name and its value, that was passed on as the second argument.

 */

/**
 * @param {Array<Object>} collection 
 * @param {Object} source 
 */
function whatIsInAName(collection, source) {

  /* return collection.filter(
    (object, index, array) => {
      for (const key in source) {
        if (object.hasOwnProperty(key)) {
          return object[key] == source[key]; 
        }
      }
    }
  ); */

  // ! Welcome to callback hell
  const returnVal = collection.filter(
    (object, index, array) => {
      return Object.keys(source).every(
        (sourceKey, sourceIndex, sourceArray) => {
          if (object.hasOwnProperty(sourceKey)) {
            return object[sourceKey] == source[sourceKey];
          }
          else return false;
        }
      )
    }
  )
  
  return returnVal;
}

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
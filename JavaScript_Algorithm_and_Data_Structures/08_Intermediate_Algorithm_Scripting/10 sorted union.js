/**
 * Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

 */

function uniteUnique(...arr) {

  /*   let args = [...arr];
  
    const loadArgs = new Promise((resolve, reject) => {
      allElements = [];
      for (const array of args) {
        allElements.push(...array);
      }
      resolve(allElements);
    });
  
    const findUniqueElements = elements => {
      elementsInAll = [];
  
      for (const number of elements) {
          if (!elementsInAll.includes(number)) {
            elementsInAll.push(number);
          }
      }
  
      return elementsInAll;
  
    };
  
    let returnValue = loadArgs
      .then(findUniqueElements)
      .then(data => returnValue = data);
  
    return returnValue; */

  let pipe = (...functions) => (value) => {
    // debugger;

    return functions.reduce((currentValue, currentFunction) => {
      // debugger;

      return currentFunction(currentValue);
    }, value);
  };

  const loadElementsFromArguments = args => {
    let allElements = [];
    for (const array of args) {
      allElements.push(...array);
    }
    return allElements;
  };

  const findUniqueElements = elements => {

    const insertUniqueElements = (uniqueElements, element) => {
      const isInArray = uniqueElements.includes(element);

      if (!isInArray) {
        return uniqueElements.concat(element);
      }
      else return uniqueElements;
    };

    return elements.reduce(
      insertUniqueElements, []);

  };

  // const findUnique = pipe(loadAllElements, findUniqueElements);

  return pipe(
    loadElementsFromArguments, 
    findUniqueElements
    )(arguments);

}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
/* 
? WHAT IS EXPORTING?
* Allows you to export function or variable
* for use in another file

? WHAT IS THE SYNTAX?
export const add = (x, y) => {
  return x + y;
}


const add = (x, y) => {
  return x + y;
}

export { add };
export { add, subtract };

 */

const uppercaseString = (string) => {
    return string.toUpperCase();
}

const lowercaseString = (string) => {
    return string.toLowerCase()
}

export {uppercaseString, lowercaseString};
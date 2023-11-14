/**
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */

function convertHTML(str) {

  let convertAmpersand = str => {
    let regex = /&/g;
    let htmlEntity = "&amp;";
    return str.replace(regex, htmlEntity);
  }

  
  let convertLessThan = str => {
    let regex = /</g;
    let htmlEntity = "&lt;";
    return str.replace(regex, htmlEntity);
  }

  
  let convertGreaterThan = str => {
    let regex = />/g;
    let htmlEntity = "&gt;";
    return str.replace(regex, htmlEntity);
  }
  
  
  let convertDoubleQuote = str => {
    let regex = /"/g;
    let htmlEntity = "&quot;";
    return str.replace(regex, htmlEntity);
  }
  
  
  let convertApostrophe = str => {
    let regex = /'/g;
    let htmlEntity = "&apos;";
    return str.replace(regex, htmlEntity);
  }
  
  let pipe = 
  (...functions) => 
  (currentValue) => 
    functions.reduce((val, func) => func(val), currentValue);

  return pipe(
    convertAmpersand,
    convertApostrophe,
    convertDoubleQuote,
    convertGreaterThan,
    convertLessThan
  )(str);
  
}

convertHTML("Dolce & Gabbana");
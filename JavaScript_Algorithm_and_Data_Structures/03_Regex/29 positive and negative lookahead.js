/**
 * * positive lookahead - make sure element is in there
 * * but won't match it
 * ?  (?=...) and ... is the required part not matched
 * 
 * * negative lookahead - make sure element isn't there
 * * but won't match it
 * ? (?!...) and ... is the required part not matched
 */

let sampleWord = "astronaut";
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);
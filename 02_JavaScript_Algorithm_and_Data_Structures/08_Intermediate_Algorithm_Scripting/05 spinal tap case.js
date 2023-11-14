/**
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */

function spinalCase(str) {

  let regexWords = /[A-Z][a-z]+|[a-z]+/g;
  
  let match = str.match(regexWords);
  
  match = match.toString();

  match = match.toLowerCase();

  let regexComma = /,/g;

  match = match.replace(regexComma, "-");

  return match;
  
}

spinalCase('This Is Spinal Tap');
spinalCase("The_Andy_Griffith_Show");
spinalCase("thisIsSpinalTap");
spinalCase("AllThe-small Things");
spinalCase("Teletubbies say Eh-oh");
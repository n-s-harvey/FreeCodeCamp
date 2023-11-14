/* 
Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

 */

/**
 * @param {String} str 
 */
function rot13(str) {

  const NUM_LETTERS_IN_ALPHABET = 26;
  const ROTARY_AMOUNT = 13;

  // TODO this is index -> letter
  let numToChar = new Map();
  //TODO this is letter -> index
  let charToNum = new Map();

  for (let i = 0; i < NUM_LETTERS_IN_ALPHABET; i++) {
    numToChar.set(i, String.fromCharCode(65 + i));
    charToNum.set(String.fromCharCode(65 + i), i);
  }

  const INDEX_FINAL_LETTER = NUM_LETTERS_IN_ALPHABET - 1;
  
  let lettersOfString = [];

  let output = "";
  
  for (const char of str) {
    let letterIndex = charToNum.get(char);

    if (letterIndex != undefined) {
      letterIndex = shift(letterIndex);
      let transformedLetter = numToChar.get(letterIndex);
      output = output.concat(transformedLetter);
    }
    
    else output = output.concat(char);
    
  }

  function shift(index) {
   
    let midpoint = NUM_LETTERS_IN_ALPHABET / 2;

    if (index < midpoint) {
      return index + ROTARY_AMOUNT;
    }

    else return index - ROTARY_AMOUNT;
    
  }
  
  return output;
  
}

console.log(rot13("SERR PBQR PNZC"));
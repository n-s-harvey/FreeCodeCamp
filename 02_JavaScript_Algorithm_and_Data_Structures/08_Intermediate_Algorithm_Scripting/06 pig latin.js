/**
 * Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

 */

function translatePigLatin(str) {

  let regexConsonant = /^[^aeiou]+/;

  let consonantString = str.match(regexConsonant);

  let pigLatin = "";


  if (regexConsonant.test(str)) {
    pigLatin = str.slice(consonantString[0].length);

    pigLatin = pigLatin.concat(consonantString);

    pigLatin = pigLatin.concat("ay");

  }

  else {
    pigLatin = str.concat("way");
  }


  return pigLatin;

}

translatePigLatin("consonant");
translatePigLatin("algorithm");
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("schwartz"));
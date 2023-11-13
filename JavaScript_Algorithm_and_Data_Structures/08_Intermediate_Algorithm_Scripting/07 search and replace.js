/**
 * Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

 */

function myReplace(str, before, after) {

  let beforeRegex = new RegExp(before, "gi");

  let [matchedWord] = str.match(beforeRegex);
  
  let firstLetter = matchedWord[0];
  
  let isCapitalized = firstLetter == firstLetter.toUpperCase();

  let wordMatchingCapitalization = ((word, isCapitalized) => {

    if (isCapitalized) {
      return word[0].toUpperCase().concat(word.slice(1));
    }
    else {
      return word[0].toLowerCase().concat(word.slice(1));
    }
  })(after, isCapitalized);
  
  return str.replace(beforeRegex, wordMatchingCapitalization);

}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
console.log(myReplace("Let us go to the store", "store", "mall"));
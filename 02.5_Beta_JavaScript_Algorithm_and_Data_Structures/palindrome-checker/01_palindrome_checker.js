/* 
Palindrome Checker

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

 */

function palindrome(str) {

  // TODO we keep numbers and letters, remove all else

  // if (isEmpty(str)) window.alert("Please input a value");

  const letterRegex = /[a-z0-9]/gi;

  const lettersFromString = str.match(letterRegex);

  const lowercaseLetters =
    lettersFromString.map(letter => letter.toLowerCase());

  const stringLength = lowercaseLetters.length;

  let isPalindrome = true;

  for (let i = 0; i < stringLength; i++) {
    const letter = lowercaseLetters[i];

    let inverseIndex = (stringLength - 1) - i;

    if (letter != lowercaseLetters[inverseIndex]) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;

}

function isEmpty(str) {
  if (str.length == 0) return true;
  else return false;
}

// palindrome("eye");
// palindrome("not a palindrome");
palindrome("1 eye for of 1 eye.");

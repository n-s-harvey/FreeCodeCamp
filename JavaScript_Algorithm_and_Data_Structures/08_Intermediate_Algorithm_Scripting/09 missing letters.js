/**
 * Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

 */

function fearNotLetter(str) {

  let alphaArray = [];
  for (let i = 97; i <= 122; i++) {
    alphaArray.push(String.fromCharCode(i));
  }

  let alphaRegex = /\w/gi;

  let lettersFromStr = str.match(alphaRegex);


  // * Accumulator: letter, differenceFromPrior
  let lettersAndDistance = lettersFromStr.reduce((accumulator, letter, index, array) => {

    // * first pass: letter,  
    if (index == 0) {
      accumulator.push({ letter: letter, difference: 1 });
      return accumulator;
    }

    else {



      let positionInAlpha = alphaArray.indexOf(letter);
      let positionInAlphaPrevious = alphaArray.indexOf(accumulator[index - 1].letter);
      let difference = positionInAlpha - positionInAlphaPrevious;
      accumulator.push({ letter: letter, difference: difference });
      return accumulator;
    }

  }, []);

  let [differentLetter] = lettersAndDistance.filter(
    (element, index, array) => {
      return element.difference == 2;
    }
  );

  if (differentLetter == undefined) {
    return undefined;
  }

  else {
    let indexOfFollowingLetter = alphaArray.indexOf(differentLetter.letter);

    return alphaArray[indexOfFollowingLetter - 1];

  }

}

// fearNotLetter("abce");
// console.log(fearNotLetter("stvwx"));
fearNotLetter("abcdefghijklmnopqrstuvwxyz");
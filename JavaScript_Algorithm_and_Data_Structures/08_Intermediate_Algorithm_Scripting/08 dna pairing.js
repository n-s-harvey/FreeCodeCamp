/**
 * DNA Pairing

Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

 */

function pairElement(str) {

  const TA = ["T", "A"];
  const AT = ["A", "T"];
  const CG = ["C", "G"];
  const GC = ["G", "C"];
  
  const pairs = [TA, AT, CG, GC];
  
  let letterRegex = /\w/gi;

  /**
   * @type {Array<string>}
   */
  let letters = str.match(letterRegex);

  function matchPairing(accumulatorArray, letter, index, array) {
    return accumulatorArray.concat(pairs.filter(
      (pair, index, array) => {
        return letter == pair[0];
      }
    ));
  };
 
  return letters.reduce(matchPairing, []);

}

// console.log(pairElement("GCG"));
console.info(pairElement("ATCGA"));
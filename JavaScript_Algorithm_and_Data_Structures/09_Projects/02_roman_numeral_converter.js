/* 
Roman Numeral Converter

Convert the given number into a roman numeral.
Roman numerals 	Arabic numerals
M 	1000
CM 	900
D 	500
CD 	400
C 	100
XC 	90
L 	50
XL 	40
X 	10
IX 	9
V 	5
IV 	4
I 	1

All roman numerals answers should be provided in upper-case.

 */

class RomanNumerals {
  static #definedNumerals = new Map([

    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"]

  ]);

  static #countingNumerals = new Map([

    [1, "I"],
    [10, "X"],
    [100, "C"],
    [1000, "M"],

  ]);

  static get(string) {
    if (this.#definedNumerals.has(string)) {
      return this.#definedNumerals.get(string);
    }
    else return undefined;
  }

  static getCountingNumeral(number) {
    return this.#countingNumerals.get(number);
  }

  static getFloorDecimal(string) {
    let iterator = this.#definedNumerals.keys();
    let isFound = false;
    let key = iterator.next().value;
    let previousKey;
    let floorRomanNumeral = this.#definedNumerals.get(key);

    do {
      floorRomanNumeral = this.#definedNumerals.get(previousKey);
      if (key >= string) {
        isFound = true;
        break;
      }
      previousKey = key;
      key = iterator.next().value;

    } while (isFound == false);

    return previousKey;

  }

  static checkFloorNumeral(string) {
    let iterator = this.#definedNumerals.keys();
    let isFound = false;
    let key = iterator.next().value;
    let previousKey;
    let floorRomanNumeral = this.#definedNumerals.get(key);

    do {
      floorRomanNumeral = this.#definedNumerals.get(previousKey);
      if (key >= string) {
        isFound = true;
        break;
      }
      previousKey = key;
      key = iterator.next().value;

    } while (isFound == false);

    return floorRomanNumeral;

  }

  static convertDigitToNumeral(digitString) {

    let digit = Number.parseInt(digitString);

    let ones = this.get(digitString);

    if (ones == undefined) {
      // TODO this doesn't work when digitString is not ones
      ones = this.checkFloorNumeral(digitString);

      let countingNumeral = this.getCountingNumeral(1 * digitString.length);

      let floorDigit = this.getFloorDecimal(digitString);

      // * We have floor numeral, now how many times do we add the counting numeral?

      let timesToAddNumeral = digit - floorDigit;

      for (let j = 0; j < timesToAddNumeral; j++) {
        ones += countingNumeral;
      }

    }

    return ones;
  }

}

function convertToRoman(num) {

  let thousands, hundreds, tens, ones;

  let numberString = num.toString();

  let length = numberString.length;

  let output;

  /* 
   * String "36" -> length 2
   * 3 is position 0 => length - 2
   * 6 is position 1 => length - 1
   * 
   */

  /* 
   * string "3456" -> length 4
   * 3 is position 0 => length - 4
   * 4 is position 1 => length - 3 
   * 5 is position 2 => length - 2
   * 6 is position 3 => length - 1
   */

  /* 
   ! Length - 1 is always ones, length - 2 is tens, etc
   */

  for (let i = length - 1; i >= 0; i--) {

    let digit = numberString[i];
    let digitString = digit.toString();

    // thousands
    if (i == length - 4) {
    }

    // hundreds
    if (i == length - 3) {
      // tens
    }

    //tens
    if (i == length - 2) {
      tens = RomanNumerals.convertDigitToNumeral(digit * 10);
    }

    // ones
    if (i == (length - 1)) {
      // thousands
      ones = RomanNumerals.convertDigitToNumeral(digit);
    }

  }

}

convertToRoman(36);
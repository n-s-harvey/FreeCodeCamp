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


  let numSigDigits = Math.ceil(Math.log10(num));

  console.log(numSigDigits);

  // TODO check that num != 1
  function romanify(number) {

    // TODO strength & test base case
    if (number == 0) return "";

    else {

      let base10power = Math.ceil(Math.log10(number));

      let multipler = Math.pow(10, base10power - 1);
      let digitValue = Math.floor(number / multipler);


      // * example: 2946; 2000 is the isolate
      let isolate = digitValue * multipler;

      let numeral = RomanNumerals.get(digitValue);

      let midpointNumeral;

      if (numeral == undefined) {

        numeral = "";

        let numTimesToIncrement = digitValue;

        // get counter numeral
        let counterNumeral = RomanNumerals.getCountingNumeral(multipler);

        // special case for 0: skip
        if (digitValue == 0) {
          
        }

        // need to get midpoint and increment
        else if (digitValue > 5) {
          // pull 5 * power of place
          midpointNumeral = RomanNumerals.get(
            5 * Math.pow(10, base10power - 1)
          );

          numeral = midpointNumeral;
          numTimesToIncrement -= 5;
        }

        for (let i = 0; i < numTimesToIncrement; i++) {
          numeral += counterNumeral;
        }

      }

      // TODO make this recursive by subtracting isolate
      return numeral + romanify(number - isolate);

    }


  }

  romanify(num);

}
// convertToRoman(36);
convertToRoman(1);
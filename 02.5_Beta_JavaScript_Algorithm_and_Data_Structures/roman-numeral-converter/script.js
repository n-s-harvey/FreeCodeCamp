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


}

let number = document.getElementById("text-input").value;
/**
  * @description Main entry point for conversion.
  */
function convertToRoman(number) {


  // TODO strength & test base case
  if (number == 0) return "";

  else {

    let base10power = Math.ceil(Math.log10(number));

    let multipler = Math.pow(10, base10power - 1);
    let digitValue = Math.floor(number / multipler);


    // * example: 2946; 2000 is the isolate
    let isolate = digitValue * multipler;

    let numeral = RomanNumerals.get(isolate);

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
    return numeral + convertToRoman(number - isolate);

  }


}


// convertToRoman(36);
console.log(convertToRoman(1));
// TODO this test fails
// convertToRoman(12);

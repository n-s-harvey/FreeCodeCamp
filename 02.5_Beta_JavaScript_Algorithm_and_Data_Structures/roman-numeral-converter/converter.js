
import RomanNumerals from "./numerals.js";


/**
  * @description Main entry point for conversion.
  * @param {number}
  */
export function convertToRoman(number) {

  // debugger;

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

    return numeral + convertToRoman(number - isolate);

  }


}

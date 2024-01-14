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

const inputField = document.getElementById("number");
inputField.addEventListener("input", () => { document.getElementById("output").innerText = "" });
inputField.addEventListener("keydown", (event) => {
  if (event.key == "Enter") convert();
});

function convert() {

  let userInput = parseInt(document.getElementById("number").value);
  let output = document.getElementById("output");

  const result = checkInput(userInput);
  if (result != "valid") output.innerHTML = `<span class="animate__animated animate__flash animate__slow">${result}</span>`;
  else {
    output.innerHTML = `<span class="animate__animated animate__fadeIn">${convertToRoman(userInput)}</span>`;
  }

}

/**
 * @param {number | string} input 
 * @returns {string}
 * */
function checkInput(input) {
  debugger;
  if (typeof input !== "number") {
    debugger;
    return "Please enter a valid number";
  }

  if (input < 1) {
    return "Please enter a number greater than or equal to 1";
  }

  if (input > 3999) {
    return "Please enter a number less than or equal to 3999";
  }

  return "valid";
}

/**
  * @description Main entry point for conversion.
  * @param {number} [number=userInput] 
  */
function convertToRoman(number) {

  debugger;

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
// convertToRoman(1);
// TODO this test fails
// convertToRoman(12);

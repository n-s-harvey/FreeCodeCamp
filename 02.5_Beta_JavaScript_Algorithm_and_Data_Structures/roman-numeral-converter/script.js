import RomanNumerals from "./numerals.js";
// import convertToRoman from "./converter.js";

let article = document.querySelector('article');

const inputField = document.getElementById("number");
inputField.addEventListener("input", () => {
  document.getElementById("output").innerHTML = "";
  // article.style.height = "auto";
  redrawArticle();
});
inputField.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    convert();

    redrawArticle();
  }
});

function redrawArticle() {
  // debugger;
  const article = document.querySelector('article');
  const wrapper = document.querySelector("section");

  if (output.innerText == "") {
    article.classList.remove("expanded");
    article.style.height = `${wrapper.scrollHeight}px`;
  }
  else {
    article.classList.add("expanded");
    article.style.height = `${wrapper.scrollHeight}px`;
  }
}
/**
 * @description Main entry point for conversion
 */
function convert() {

  // debugger;
  let userInput = parseInt(document.getElementById("number").value);
  let output = document.getElementById("output");


  const result = checkInput(userInput);
  if (result != "valid") {
    output.innerHTML = `<span class="animate__animated animate__flash animate__slow">${result}</span>`;
    // article.classList.toggle("expanded");
  }

  else {
    output.innerHTML = `<span class="animate__animated animate__fadeIn">${convertToRoman(userInput)}</span>`;
  }

  redrawArticle();
}

window.convert = convert;

/**
 * @param {number | string} input
 * @returns {string}
 * */
function checkInput(input) {
  // debugger;
  if (typeof input !== "number") {
    // debugger;
    return "Please enter a valid number";
  }

  if (input < 1) {
    return "Please enter a number greater than or equal to 1";
  }

  if (input > 3999) {
    return "Please enter a number less than or equal to 3999";
  }

  if (typeof input === "number") return "valid";
}

/**
  * @description Main entry point for conversion.
  * @param {number}
  */
function convertToRoman(number) {

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

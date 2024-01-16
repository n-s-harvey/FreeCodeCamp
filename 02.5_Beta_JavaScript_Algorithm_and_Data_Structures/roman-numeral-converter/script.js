// import RomanNumerals from "./numerals.js";
import { convertToRoman } from "./converter.js";

const inputField = document.getElementById("number");
const output = document.getElementById("output");
inputField.addEventListener("input", () => {
  document.getElementById("output").innerHTML = "";
  redrawArticle();
});
inputField.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    convert(inputField.value, output);
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
function convert(inputVal, outputNode) {

  // debugger;
  // inputNodeVal = parseInt(document.getElementById("number").value);
  // outputNode = document.getElementById("output");


  const result = checkInput(parseInt(inputVal));
  if (!result.isValid) {
    outputNode.innerHTML =
      `<span class="animate__animated animate__flash animate__slow">
        ${result.inputError}
      </span>`;
  }

  else {
    outputNode.innerHTML =
      `<span class="animate__animated animate__fadeIn">
        ${convertToRoman(inputVal)}
      </span>`;
  }

  redrawArticle();
}

window.convert = convert;

/**
 * @param {number | string} input
 * @returns {{isValid: string, inputError: string}}
 * */
function checkInput(input) {
  debugger;
  if (typeof input !== "number") {
    // debugger;
    return {
      isValid: false,
      inputError: "Please enter a valid number"
    }
  }

  else if (Number.isNaN(input)) {
    // debugger;
    return {
      isValid: false,
      inputError: "Please enter a valid number"
    }
  }

  else if (input < 1) {
    return {
      isValid: false,
      inputError: "Please enter a number greater than or equal to 1"
    }
  }

  else if (input > 3999) {
    return {
      isValid: false,
      inputError: "Please enter a number less than or equal to 3999"
    }
  }

  else if (typeof input === "number") {
    return {
      isValid: true,
      inputError: ""
    }
  }

  else {
    return {
      isValid: false,
      inputError: "Please enter a valid number between 1 and 3999"
    }
  }
}




/**
 * @description Main entry point for checking telephone number.
 * @param {String} userInput
 * @param {Element} outputElement
 */
function check(userInput, outputElement) {
  if (userInput == "") {
    alert("Please provide a phone number");
    return;
  };

  outputElement.innerHTML += `
  ${telephoneCheck(userInput)
      ? "<span class='text-success'><i class='bi bi-check-circle-fill'></i> Valid US number: "
      : "<span class='text-danger'><i class='bi bi-x-circle-fill'></i> Invalid US number: "
    }${userInput}</span > <br />`;


}
/**
 * @param {Element} outputElement
 */
function clearOutput(outputElement) {
  outputElement.innerHTML = "";
}

window.check = check;
window.clearOutput = clearOutput;

/**
 * @param {String} str 
 */
function telephoneCheck(str) {


  let firstValid =
    // 555-555-5555
    /(?<=^1.?)\d{3}-\d{3}-\d{4}|^\d{3}-\d{3}-\d{4}/

  let secondValid =
    // (555)555-5555
    /(?<=^1.?)\(\d{3}\)\d{3}-\d{4}|^\(\d{3}\)\d{3}-\d{4}/;

  let thirdValid =
    // (555) 555-5555
    /(?<=^1.?)\(\d{3}\)\s\d{3}-\d{4}|^\(\d{3}\)\s\d{3}-\d{4}/;

  let fourthValid =
    // 555 555 5555
    /(?<=^1.?)\d{3}\s\d{3}\s\d{4}|^\d{3}\s\d{3}\s\d{4}/;

  let fifthValid =
    // 5555555555
    /(?<=1.?)\d{10}$|^\d{10}$/;

  /**
   * @type {RegExp}
   */
  // let validPhoneNumber =
  //   /1*.\d{3}-\d{3}-\d{4}|1*.(\d{3})\d{3}-\d{4}|1*.(\d{3})\s\d{3}-\d{4}|1*.\d{3}\s\d{3}\s\d{4}|1*.\d{10}/;

  // return str.match(validPhoneNumber);

  if (str.match(firstValid)) return true;
  else if (str.match(secondValid)) return true;
  else if (str.match(thirdValid)) return true;
  else if (str.match(fourthValid)) return true;
  else if (str.match(fifthValid)) return true;

  else return false;


}

window.telephoneCheck = telephoneCheck;

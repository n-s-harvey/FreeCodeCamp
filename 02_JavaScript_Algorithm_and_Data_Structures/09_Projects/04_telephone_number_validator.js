/* 
Telephone Number Validator

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

 */

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

// telephoneCheck("555-555-5555");
// telephoneCheck("1 555-555-5555")
// telephoneCheck("1 (555) 555-5555")
// telephoneCheck("(6054756961)");
// telephoneCheck("2 (757) 622-7382")
// telephoneCheck("-1 (757) 622-7382")
telephoneCheck("11 555-555-5555")
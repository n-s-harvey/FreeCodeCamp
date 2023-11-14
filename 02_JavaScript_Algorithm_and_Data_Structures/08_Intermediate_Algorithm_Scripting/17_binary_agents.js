/* 
Binary Agents

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

*/

function binaryAgent(str) {

  // Convert from binary to char

  let spaceRegex = /[^\s]+/g;

  let binaryValues = str.match(spaceRegex);


  let convertToDecimal = string => {

    let letters = [];

    for (const letter of string) {
      letters.push(letter);
    }

    return letters.reduce(
      (decimal, bit, index, array) => {

        // the power of the digit is array.length - 1 - index
        let power = array.length - 1 - index;

        if (bit != 0) {

          decimal += Math.pow((bit * 2), power);

        }

        return decimal;

      }, 0)

  }

  let decimalValues = binaryValues.map(convertToDecimal);

  // console.table(decimalValues);


  // console.log(String.fromCharCode(...decimalValues));

  return String.fromCharCode(...decimalValues);

}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
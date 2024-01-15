
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

export default RomanNumerals;

/* 
Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

 */


class Exponential {

  base;
  exponent;

  constructor(base, exponent) {
    this.base = base;
    this.exponent = exponent;
  }

  get base() {
    return this.base;
  }

  get exponent() {
    return this.exponent;
  }

  set exponent(num) {
    this.exponent += num;
  }

  set base(num) {
    this.base = num;
  }

}


/**
 * @description Finds prime factors for a number in the constructor.
 */
class PrimeFactors {

  /**
   * @type {Array<Exponential>}
   */
  exponentials = [];

  uniqueBases = new Set();

  /**
   * @param {Exponential} newExponential 
   */
  addExponential(newExponential) {

    for (const element of this.exponentials) {

      let isBaseEqual = element.base == newExponential.base;

      if (isBaseEqual == true) {
        element.exponent += newExponential.exponent;
        return undefined;
      }
    }

    this.exponentials.push(newExponential);
    this.uniqueBases.add(newExponential.base);


  }

  /**
   * @param {Number} base 
   * @returns {Exponential}
   */
  getExponentialMatchingBase(base) {

    let isBaseEqual;
    let element;

    for (element of this.exponentials) {
      isBaseEqual = element.base == base;

      if (isBaseEqual == true) {
        break;
      }

    }

    if (isBaseEqual == true) return element;

    else return new Exponential(0, 1);

  }

  get uniqueBases() {
    return this.uniqueBases;
  }

  hasBase(num) {
    return this.uniqueBases.has(num);
  }


  constructor(number) {
    this.number = number;

    /**
     * @type {Array<Exponential>}
     */
    this.primeFactors = [];

    let isFactored = false;

    let factors = [number];

    let i = 0;

    do {

      // * iterate over factors
      // * check if each factor is prime
      while (i < factors.length) {
        let factor = factors[i];
        let skipReset = false;

        for (let j = 2; j < factor; j++) {
          if (factor % j == 0) {


            let factor1 = j;
            let factor2 = factor / j;

            factors.splice(i, 1);
            factors = factors.concat(factor1).concat(factor2);
            skipReset = true;

            // Reset and check elements from the beginning
            i = 0;

            break;
          }
        }

        i += !skipReset;

      }

      if (i == factors.length) isFactored = true;


    } while (isFactored == false);

    factors.sort((a, b) => a - b);

    for (const number of factors) {
      let thisExponential = new Exponential(number, 1);

      ((newExponential) => {

        for (const element of this.exponentials) {

          let isBaseEqual = element.base == newExponential.base;

          if (isBaseEqual == true) {
            element.exponent += newExponential.exponent;
            return undefined;
          }
        }

        this.exponentials.push(newExponential);
        this.uniqueBases.add(newExponential.base);


      })(thisExponential);
    }

  }

  hasBase(num) {
    return this.uniqueBases.has(num);
  }

}

class PackageToFactorialize {

  
  /**
   * @type {Array<PrimeFactors>}
   */
  allFactors = [];
  lowerBound;
  upperBound;
  allUniqueBases = new Set();
  /**
   * @type {Array<Exponential>}
   */
  factorsOfLCM = [];

  
  
  constructor(array) {

    array.sort((a, b) => a - b);
    this.lowerBound = array[0];
    this.upperBound = array[1];

    for (let i = this.lowerBound; i <= this.upperBound; i++) {
      this.allFactors.push(new PrimeFactors(i));
    }

    for (const primeFactorList of this.allFactors) {
      for (const base of primeFactorList.uniqueBases) {
        this.allUniqueBases.add(base);
      }
    }

    for (const base of this.allUniqueBases) {
      let highestExponentOfBase = 0;

      for (const numberPackage of this.allFactors) {

        let setContainsBase = numberPackage.hasBase(base);
        if (setContainsBase) {
          const exponential = numberPackage.getExponentialMatchingBase(base);
          if (exponential.exponent > highestExponentOfBase) {
            highestExponentOfBase = exponential.exponent;
          }
        }
      }

      this.factorsOfLCM.push(new Exponential(base, highestExponentOfBase));

    }


  }



  get leastCommonMultiple() {
    return this.factorsOfLCM.reduce(
      (result, exponential) => result * Math.pow(exponential.base, exponential.exponent)
      , 1);
  }

}


function smallestCommons(arr) {


  let result = new PackageToFactorialize(arr);

  return result.leastCommonMultiple;
}

// console.log(smallestCommons([1, 5]));
console.log(smallestCommons([2, 10]));
/* 
Design a cash register drawer function checkCashRegister() that accepts purchase price 
as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
 */

/* 
* Things to consider:
*   price == cash
*   how to determine correct amount of change?
*     - maybe start with highest denomination & go down
* 
* {status: "INSUFFICIENT_FUNDS", change: []}
* {status: "CLOSED", change: [...]} // if CID == change
* {status: "OPEN", change: [...]}
* 
* 
 */

/*
 *
 * How to determine correct amount of change?
 * 1. Subtracting by the largest possible denomination that is less than or equal to amount owed
 * 2. Reduce CID by amount from step 1
 * 3. Repeat (recursive function? - base case: 0 balance OR no change left in drawer)
 * 
 */
class Currencies {
  static values = new Map([
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.10],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ]);
}

class Denomination {
  #_value;
  name;
  constructor(name) {
    /**
     * @type {String}
     */
    this.name = name;
    /**
    * @type {Number}
    */
    this.value = Currencies.values.get(name);

  }
  get value() {
    return this.#_value;
  }
  set value(amount) {
    this.#_value = amount;
  }
}

class Drawer {
  /**
   * @type {{currency: Denomination, amount: number}[]}
   */
  #cash = [];
  /**
   * @param {Array<Array>} cid 
   */
  constructor(cid) {
    this.#cash = cid.map(
      element => {
        let name = element[0];
        let amount = element[1];
        return {
          currency: new Denomination(name),
          amount: amount
        }
      }
    )
  }
  getBalance(currencyName) {
    for (const element of this.#cash) {
      if (element.currency.name == currencyName) return element.amount;
    }
    return undefined;
  }
  /**
   * @param {string} currencyName 
   * @param {number} amount 
   */
  addToBalance(currencyName, amount) {
    for (const element of this.#cash) {
      if (element.currency.name == currencyName) {
        element.amount += amount;
      }
    }
  }
}

let penny = new Denomination("PENNY");
console.log(penny.value);
function checkCashRegister(price, cash, cid) {
  let change;
  let balance = price;
  let drawer = new Drawer(cid);

  while (balance > 0) {

  }

  /**
   * @param {number} amount 
   * @param {Drawer} drawer 
   */
  function reduceBalance(amount, drawer) {
    for (const currency of Currencies.values) {
      if (drawer.getBalance(currency) > 0) {
        drawer.addToBalance(-amount);
      }
    }
  }
  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
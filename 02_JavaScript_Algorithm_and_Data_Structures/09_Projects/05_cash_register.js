/* 
Design a cash register drawer function checkCashRegister() that accepts purchase price 
as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
 */

function toPennies(dollarAmount) {
  let dollarString = (dollarAmount * 100).toString();
  return parseInt(dollarString);
}
function toDollars(pennyAmount) {
  let pennyString = (pennyAmount / 100).toString();
  return parseFloat(pennyString);
}
/**
 * @description Key-value pairs of the name of the currency and its value in pennies.
 */
class Currencies {
  static values = new Map([
    ["ONE HUNDRED", 10000],
    ["TWENTY", 2000],
    ["TEN", 1000],
    ["FIVE", 500],
    ["ONE", 100],
    ["QUARTER", 25],
    ["DIME", 10],
    ["NICKEL", 5],
    ["PENNY", 1],
  ]);
}

class CashCollection {
  /**
   * @type {Map<string, {amount: number, value: number}>}
   */
  #cashmap = new Map();

  constructor() {
    Currencies.values.forEach(
      (currencyValue, currencyName) => {
        this.#cashmap.set(
          currencyName,
          {
            amount: 0,
            value: currencyValue
          }
        )
      }
    )
  }

  load(cid) {
    cid.forEach(
      element => {
        let name = element[0];
        let amount = toPennies(element[1]);
        this.#cashmap.get(name).amount = amount;
      }
    )
  }

  unload() {
    let amount = [];

    this.#cashmap.forEach(
      (value, key, map) => {
        if (value.amount != 0) {
          amount.push([key, toDollars(value.amount)])
        }
      }
    )

    return amount;

  }

  getTotal() {
    let accumulator = 0;
    this.#cashmap.forEach(
      value => accumulator += value.amount
    );
    return accumulator;
  }

  /**
   * @param {string} currencyName 
   * @param {number} amount 
   */
  add(currencyName, amount) {
    this.#cashmap.get(currencyName).amount += amount;
  }

  /**
   * @param {string} currencyName 
   * @param {number} amount 
   */
  deduct(currencyName, amount) {
    this.#cashmap.get(currencyName).amount -= amount;
  }
  /**
   * @param {number} amount 
   * @returns {string}
   */
  getLargestAvailable(amount) {
    for (const currencyName of this.#cashmap) {
      if (currencyName[1].amount == 0) continue;
      if (currencyName[1].value <= amount) {
        return currencyName[0];
      }
    }
    return undefined;
  }

}
// TODO rewrite this...
function checkCashRegister(price, cash, cid) {
  let balance = {
    amount: toPennies(cash - price),
  };
  let drawer = new CashCollection();
  drawer.load(cid);
  let change = new CashCollection()
  let status;

  if (drawer.getTotal() == balance.amount) {
    return {
      status: "CLOSED", change: cid
    };
  }

  else if (balance.amount > drawer.getTotal()) {
    return {
      status: "INSUFFICIENT_FUNDS", change: []
    };
  }

  else if (balance.amount < drawer.getTotal()) status = OPEN;
  let result; 
  do {
    result = reduceBalance(balance, drawer, change)
  } while (balance.amount > 0 && result == true);

  if (result == undefined) return {
      status: "INSUFFICIENT_FUNDS", change: []
    }
  
  return { status: OPEN, change: change.unload() }

}


/**
 * @param {{amount: number}} balance 
 * @param {CashCollection} drawer 
 * @param {CashCollection} change 
 */
function reduceBalance(balance, drawer, change) {
  let largest = drawer.getLargestAvailable(balance.amount);
  let amountOfLargest = Currencies.values.get(largest);

  if (amountOfLargest == undefined) {
    return undefined;
  }

  change.add(largest, amountOfLargest);
  balance.amount -= amountOfLargest;
  drawer.deduct(largest, amountOfLargest);
  return true;
}
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// console.table(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
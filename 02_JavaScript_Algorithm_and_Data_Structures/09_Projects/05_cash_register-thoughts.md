# Prompt

Design a cash register drawer function `checkCashRegister()` that accepts purchase price as the first argument (`price`), payment as the second argument (`cash`), and cash-in-drawer (`cid`) as the third argument.

`cid` is a 2D array listing available currency.

The `checkCashRegister()` function should always return an object with a status key and a change key.

Return `{status: "INSUFFICIENT_FUNDS", change: []}` if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return `{status: "CLOSED", change: [...]}` with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return `{status: "OPEN", change: [...]}`, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

## My Challenges

### Drawer & Change Objects

My initial thought was to have a class for the drawer. I didn't have a concrete plan for the change - I think I was considering just pushing it into an array.  
However, I recognized that both the drawer and the change pending being delivered to the customer was just a collection of cash, so I wrote the `CashCollection` class. The `drawer` and the `change` objects are instances of the `CashCollection`.

Part of my solution was to also change the approach to the constructor for the `CashCollection` class. Originally, I passed the `cid` from the `checkCashRegister()` to initialize; however, this doesn't work for the `change` object. Instead, I wrote a the constructor to initialize the drawer as empty (the amount of each denomination was 0) and wrote a separate `load()` function to pass in the denominations present.

### Floating Point Precision Errors

Floating point precision error was not something I'd originally considered. In one of the original tests, the amount of change needed was simply two quarters - since these were both stored as decimal values `0.25`, they were represented accurately by floating point numbers. However, when I needed to provide pennies for change, I ran into a floating point precision error - the `findLargestAvailable()` function was returning `undefined` since there was a fraction of a penny left.

The solution to this was to change the values of `Currencies` to hold all denominations in units of pennies. The challenge in this is the argument of `checkCashRegister` was expressed as a floating point number, and the return value required floating point numbers for the tests to pass. So, I rewrote the `load()` and `unload()` functions to convert to/from dollars expressed as fractions.
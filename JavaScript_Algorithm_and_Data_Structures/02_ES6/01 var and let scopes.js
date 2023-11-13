/* 
* var = global scope (local if inside function)
* let is similar. let inside a block, statement, or
* expression = scope limited to that block, statement,
* or expression
*/

function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
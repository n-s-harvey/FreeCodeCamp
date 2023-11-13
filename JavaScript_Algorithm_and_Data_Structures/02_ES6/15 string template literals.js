/* 

? WHAT ARE STRING TEMPLATE LITERALS?
* Multi-line strings and string interpolation
* A newline in a string template literal outputs a newline
* Allows for expressions, like ${a  + b}

? WHAT IS THE SYNTAX?
* Wrap template literal in backticks (`)
* Use ${} when inserting variables or expressions

 */

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Only change code below this line
    const failureItems = [];

    for (let i = 0; i < 3; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }

    // Only change code above this line

    return failureItems;
}

const failuresList = makeList(result.failure);
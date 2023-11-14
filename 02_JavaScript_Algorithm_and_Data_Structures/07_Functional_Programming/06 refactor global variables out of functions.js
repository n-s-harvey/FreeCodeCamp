/**
 * ? WHAT ARE THE FUNCTIONAL PROGRAMMING PRINCIPLES (SO FAR)?
 * * 1. Don't alter a variable or object (beware of const newObj = obj)
 * * 2. Declare function parameters
 * * in the below code - we refactored code to pass in the array instead of relying on a global
 */

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(list, bookName) {

    const newList = [...list];
    newList.push(bookName);
    return newList;

    // Change code above this line
}

// Change code below this line
function remove(list, bookName) {

    const newList = [...list]

    const book_index = newList.indexOf(bookName);
    if (book_index >= 0) {

        newList.splice(book_index, 1);
        return newList;

        // Change code above this line
    }
}
function sentensify(str) {
    // Only change code below this line

    let wordArray = str.split(/[^a-z]/i);

    return wordArray.join(" ");

    // Only change code above this line
}

sentensify("May-the-force-be-with-you");
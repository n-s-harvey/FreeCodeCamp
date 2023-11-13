function titleCase(str) {

    let answer = "";

    let upperCaseLetterRegex = /[A-Z]/g;

    function toLower(match) {
        return match.toLowerCase();
    }

    let newStr = str.replaceAll(upperCaseLetterRegex, toLower);
    console.log(newStr);
    
    function toUpper(match) {
        let value = "";
        value += match[0].toUpperCase(); 
        value += match.slice(1);
        return value;

    }

    let wholeWordRegex = /\S+/g;

    newStr = newStr.replaceAll(wholeWordRegex, toUpper);
    console.log(newStr);
    
    return newStr;
    
}

titleCase("I'm a LITTLe tea pot");
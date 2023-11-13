function mutation(arr) {

    let string1 = arr[0];
    let string2 = arr[1];
    let regexArray = [];
    let isMatch = true;

    for (let i = 0; i < string2.length; i++) {
        regexArray.push(new RegExp(string2[i], "i"));
    }

    for (let i = 0; i < regexArray.length; i++) {
        if (regexArray[i].test(string1) == false) {
            isMatch = false;
        }
    }

    return isMatch;
    
}

mutation(["hello", "hey"]);
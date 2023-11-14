function confirmEnding(str, target) {
    let regex = new RegExp(`${target}$`, );
    let test = regex.test(str);
    return test;
}

confirmEnding("Bastian", "n");
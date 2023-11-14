function alphabeticalOrder(arr) {
    // Only change code below this line

    let newArr = [...arr];

    newArr.sort(
        (a,b) => {
            if (a === b) return 0;
            else if (a > b) return 1;
            else if (a < b) return -1;
        }
    );
    
    return newArr;
    // Only change code above this line
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

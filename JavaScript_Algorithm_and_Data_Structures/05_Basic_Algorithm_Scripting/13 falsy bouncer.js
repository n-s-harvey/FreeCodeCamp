function bouncer(arr) {

    let array = [];

    for (let i = 0; i < arr.length; i++) {
        if (Boolean(arr[i])) {
            array.push(arr[i]);
        }
    }
    
    return array;
}

bouncer([7, "ate", "", false, 9]);
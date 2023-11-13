function chunkArrayInGroups(arr, size) {

    let array = [];

    while (arr.length > 0) {
        array.push(arr.slice(0, size));
        arr.splice(0, size);
    }

    return array;
    
}

// chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
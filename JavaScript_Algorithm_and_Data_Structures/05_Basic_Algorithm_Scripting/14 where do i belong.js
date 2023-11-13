function getIndexToIns(arr, num) {

    let array = [...arr];
    array.push(num);

    function compareElements(a, b) {
        if (a > b) return 1;
        else if (a == b) return 0;
        else return -1;
    }
    
    array.sort(compareElements);
    
    let index = array.indexOf(num);

    return index;
    
}

// getIndexToIns([40, 60], 50);
// getIndexToIns([10, 20, 30, 40, 50], 35);
getIndexToIns([3, 10, 5], 3);
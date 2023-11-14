function rangeOfNumbers(startNum, endNum) {

    if (startNum == endNum) {
        return [startNum];
    }

    else {
        let range = rangeOfNumbers(startNum, endNum - 1);
        range.push(endNum);
        return range;
    }
    
}

rangeOfNumbers(1, 5);
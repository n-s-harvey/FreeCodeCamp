function largestOfFour(arr) {
    let arrayOfLargest = [];

    for (let i = 0; i < arr.length; i++) {
        const subarray = arr[i];
        
        let largestElement = subarray[0];
        
        for (let j = 0; j < subarray.length; j++) {
            if (subarray[j] > largestElement) {
                largestElement = subarray[j];
            }
        }
        
        arrayOfLargest.push(largestElement);
        
    }
    
    return arrayOfLargest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
/* 
Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

 */

function sumAll(arr) {

    // * start with sorting least to biggest
    let orderedArray = (arr => {
        let sorted = [...arr];

        sorted.sort((a,b) => a-b);
        
        return sorted;
        
    })(arr);

    //* create an array based off start and end nums

    let fillArray = (arr => {

        let start = arr[0];
        let end = arr[1];
        let range = end - start;
        let filledArray = [];
        

        for (let i = 0; i <= range; i++) {
            filledArray.push(start + i);
        }

        return filledArray;
        
    })(orderedArray);
    
    let sum = (arr => {
        return arr.reduce((accumulator, element, index, array) => {
            return accumulator + element;
        }, 0);
    })(fillArray);

    return sum;
    
}



sumAll([1, 4]);
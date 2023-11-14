/* 


Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

*/

function diffArray(arr1, arr2) {

    /**
     * @description Returns an array of elements in arr1 not found in arr2
     */
    function findDifferences(arr1, arr2) {

        return arr1.filter(
            (element, index, array) => {
                return !(arr2.includes(element));
            }
        );
        
    }

    const differencesArray = ((arr1, arr2) => {

        let array = findDifferences(arr1, arr2);
        array = array.concat(findDifferences(arr2, arr1));
        return array;
        
    })(arr1, arr2);

    return differencesArray;
    
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
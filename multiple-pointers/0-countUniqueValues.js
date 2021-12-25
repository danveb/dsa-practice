/* Write a function that accepts a "sorted" array and counts unique values in array.
There can be negative numbers in the array, but will always be sorted 

input = [1, 1, 1, 1, 1, 2] // 2 (unique values are 1 and 2)
input = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13] // 7 (unique values are 1, 2, 3, 4, 7, 12, 13)

*/

function countUniqueValues(array) {
    // main check: if array.length === 0 return 0 
    if (array.length === 0) return 0 
    
    // initialize i pointer
    let i = 0
    
    // for loop: 
    for (let j = 1; j < array.length; j++) {
        // check: if array[i] !== array[j] 
        if (array[i] !== array[j]) {
            array[++i] = array[j]
        }
    }
    return i + 1; 
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 4, 7, 8, 12, 13])); // 8
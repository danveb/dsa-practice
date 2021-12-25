/* Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

Constraints:

Time Complexity: O(log N)

Examples:

countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0
*/

function countZeroes(array) {
    // initialize count var that keeps track of target (0) 
    let count = 0
    // initialize target to be 0 
    let target = 0
    // for loop
    for (let i = 0; i < array.length; i++) {
        // if array[i] matches the target
        if (array[i] === target) {
            // increase count ++
            count += 1
        }
    }
    // return final count 
    return count; 
}

console.log(countZeroes([1, 1, 1, 1, 0, 0])) 
console.log(countZeroes([1, 0, 0, 0, 0]))
console.log(countZeroes([0, 0, 0]))
console.log(countZeroes([1,1,1,1]))
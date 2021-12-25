/* Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

Constraints:

Time Complexity: O(log N)

Examples:

sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1

*/

// Time: O(n)  

function sortedFrequency(array, num) {
    // initialize count var that keeps track of the count
    let count = 0
    // for loop (continue looping until we reach array.length)
    for (let i = 0; i < array.length; i++) {
        // check: if(array[i] === num) we increase count++ 
        if (array[i] === num) {
            count++
        }
    }
    // return count
    return count; 
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2))

// Time: O(log n) 

function sortedFrequency2(array, num) {
    // initialize 2 pointers: left/right 
    let left = 0 
    let right = array.length - 1
    for (let i = 0; i < array.length; i++) {
        
    }
}
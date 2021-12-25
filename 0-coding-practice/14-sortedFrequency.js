/* sortedFrequency
Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

Constraints:

Time Complexity: O(log N)

Examples:

sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1

[1,1,2,2,2,2,3], 2 = 4 times appearing 
initialize count as 0

*/ 

// Linear Search: O(n) 
function sortedFrequency(array, num) {
    if(array.length === 0) return -1 
    let count = 0
    for(let i = 0; i < array.length; i++) {
        if(array[i] === num) {
            count++
        }
    }
    return count 
}

console.log(sortedFrequency([1,1,2,2,2,2,3], 2))
console.log(sortedFrequency([1,1,2,2,2,2,3], 3))
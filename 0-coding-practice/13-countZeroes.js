/* countZeroes
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

Constraints:

Time Complexity: O(log N)

Examples:

countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0

array = [1, 1, 1, 1, 0, 0] 
         l       m      0
count at 0 
2 pointer strategy: left/right

check: if array[i] === 0 
increase count++ 

*/ 

// O(n) time 
// function countZeroes(array) {
//     // if array is empty return 0 
//     if(array.length === 0) return 0 
//     // initialize count var at 0
//     let count = 0

//     // for loop: iterate over each element 
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] === 0) {
//             count++
//         }
//     }
//     return count; 
// }

// O(log n) time 
function countZeroes(array) {
    if(array.length === 0) return 0 
    let left = 0 
    let right = array.length - 1
    let count = 0
    while(left < right) {
        let mid = Math.floor((array[left] + array[right])) / 2
        if(array[mid] === 0) {
            count++ 
        } else if(array[mid] < 1) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return count; 
}

console.log(countZeroes([1,1,1,1,0,0]))
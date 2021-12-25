/* countPairs
Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array.

Examples:

countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
countPairs([4,6,2,7], 10) // 1 (4,6)
countPairs([1,2,3,4,5], 10) // 0
countPairs([1,2,3,4,5], -3) // 0
countPairs([0,-4],-4) // 1
countPairs([1,2,3,0,-1,-2],0) // 2
Constraints

Time Complexity - O(N * log(N))
- manually sort the array .sort((a, b) => a - b)
- perform a 2 pointer strategy 

array = [3,1,5,4,2] target = 6 
sortedArr = [1,2,3,4,5] 
             l       r  target = 6
               l   r    target = 6
                l/r

or

Time Complexity - O(N)
- implement a Set from an array { 3, 1, 5, 4, 2 }
- when iterating over the array using a for OF loop 

*/ 

// Time: O(n log n) with sort + binary search 
// function countPairs(array, num) {
//     // manually sort the array using array.sort((a, b) => a - b) 
//     array.sort((a,b) => a - b)
//     // main check: if array is empty we return 0 
//     if(array.length === 0) return 0
//     // initialize left and right pointers 
//     let left = 0
//     let right = array.length - 1
//     // initialize count var that will keep track of how many pairs we can find 
//     let count = 0
//     // keep looping while left pointer is lower than right pointer 
//     while(left < right) {
//         // initialize sum var that equals to left + right 
//         let sum = array[left] + array[right] 
//         // check: if sum === num we found it! 
//         if(sum === num) {
//             // - increase count++ 
//             // - move left pointer up 
//             // - move right pointer down 
//             count++ 
//             left++
//             right--
//         } else if(sum > num) {
//             // check: if sum > num we'll move right pointer down 
//             right--
//         } else {
//             // check: else sum < num so we move left pointer up 
//             left++
//         }
//     }
//     return count; 
// }

// Implement Set that works O(n) time/space complexity
/* [3,1,5,4,2] MAKE IT A SET: { 3, 1, 5, 4, 2 }


*/

// function countPairs(array, num) {
//     // main check: if array is empty we'll return 0
//     if(array.length === 0) return 0
//     // initialize count to be 0 
//     let count = 0
//     // initialize a Set from an array
//     // - sets are much faster with methods
//     const set = new Set(array) 
//     // for loop: iterate over values of array so we can later check with the set 
//     for(let val of array) {
//         // delete all elements of val 
//         set.delete(val) 
//         // check:
//         if(set.has(num - val)) {
//             count++
//         }
//     }
//     return count; 
// }

function countPairs(array, num) {
    // check: if array is empty we will return 0
    if(array.length === 0) return 0
    // initialize count var that keeps track of how many times we can find a valid pair 
    let count = 0
    // initialize a Set from the input array  
    let set = new Set(array)
    console.log(set); // Set { 3, 1, 5, 4, 2 }
    // iterate over the array 
    for(let item of array) {
        set.delete(item); // empty Set now 
        console.log(set)
        console.log(set.has(num - item))
        if(set.has(num - item)) {
            count++
            console.log(count)
        }
    }
    return count; 
}

console.log(countPairs([3,1,5,4,2], 6)); 
// console.log(countPairs([4,6,2,7], 10)) // 1 (4,6)

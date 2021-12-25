/* 

countPairs
Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array.

Examples:

countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
countPairs([4,6,2,7], 10) // 1 (4,6)
countPairs([1,2,3,4,5], 10) // 0
countPairs([1,2,3,4,5], -3) // 0
countPairs([0,-4],-4) // 1
countPairs([1,2,3,0,-1,-2],0) // 2

Time/Space: 
- If we manually sort the array using sort at most we'd do O(n log n). O(n) to sort and O(log n) for binary search. 
- If we use a hash map (insert/search at O(1)) we can perform O(n) time. MOST EFFICIENT

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
function countPairs(array, num) {
    // main check: if array is empty we'll return 0
    if(array.length === 0) return 0

    // initialize count as 0 
    let count = 0
    
    // initialize a Set
    const set = new Set(array) 

    // for loop: iterate over values of array 
    for(let val of array) {
        // delete all elements of val 
        set.delete(val) 
        // check:
        if(set.has(num - val)) {
            count++
        }
    }
    return count; 
}

console.log(countPairs([3,1,5,4,2], 6)); // 2
// console.log(countPairs([0,-4],-4)); // 1
// console.log(countPairs([10,4,8,2,6,0], 10)); // 3
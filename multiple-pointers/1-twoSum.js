// function twoSum(nums, target) {
//     // manually sort the array on increasing order 
//     nums.sort((a, b) => a - b)
//     // main check: if array is empty return false 
//     if(nums.length === 0) return []
//     // initialize left pointer and right pointer 
//     let left = 0 
//     let right = nums.length - 1
//     // keep looping while left < right 
//     while(left < right) {
//         // initialize sum var as left + right 
//         let sum = nums[left] + nums[right]
//         if(sum > target) {
//             right--
//         } else if(sum < target) {
//             left++ 
//         } else {
//             return [[left], [right]]
//         }
//         // // check: if sum === target return [[left], [right]]
//         // if(sum === target) {
//         //     return [[left], [right]]
//         // } else if(sum > target) {
//         //     // else if: sum > target decrease right pointer by 1    
//         //     right--
//         // } else {
//         //     // else: sum < target so increase pointer by 1        
//         //     left++
//         // }
//     }
//     return []
// }

// console.log(twoSum([3,2,4], 6))
// console.log(twoSum([4,3,10], 13))
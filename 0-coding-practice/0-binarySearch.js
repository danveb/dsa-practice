/* Given an array of integers nums that is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

array = [1,2,3,4,5] target = 4
*binary search -> O(log n) time complexity 
*left pointer at beginning of the array 
*right pointer at the end of the array 
*create a while loop: loop will run as long as left < right 
*initialize a variable for mid, which is the index in the middle of the array 
*check: if value of mid is equal to the target we return its index 
*check: if value < target we will move left pointer mid + 1
*check: if value < target we will make right pointer mid - 1
return -1 if it does not exist 

[1, 2, 3, 4, 5] target = 4
 l     m     r  is mid === target? NO; it's less than target 
          l/m r  target = 4

*/ 

// Perform a binary search
const search = (nums, target) => {
    // pointers: left at 0; right at nums.length -1; 
    let left = 0; 
    let right = nums.length -1
    
    // while loop: as long as left pointer is less than right pointer
    while(left <= right) {
        // define middle index as midpoint 
        let mid = Math.floor((left + right) / 2)
        // check: if midpoint is equal to the target
        if(nums[mid] === target) {
            // we found the target; return its index
            return mid
            // else if nums[mid] is lower than target
        } else if(nums[mid] < target) {
            // move left pointer up by one
            left = mid + 1
            // else if nums[mid] is greater than target
        } else {
            // move right pointer down by one
            right = mid - 1
        }
    }
    // if above cases fail... return -1 since we haven't found anything...
    return -1
};

console.log(search([1,2,3,4,5], 5))
console.log(search([1,2,3,4,5], 8))
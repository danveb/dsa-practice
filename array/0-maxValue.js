/* Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

Solve this without using any built-in array methods.

You can assume that the array is non-empty. 
*/ 

const maxValue = (nums) => {
  // todo
  // initialize greatest as -Infinity 
  let greatest = -Infinity
  // for loop to iterate each element 
  for(let i = 0; i < nums.length; i++) {
    // check: if nums[i] > infinity set greatest to be nums[i]   
    if(nums[i] > greatest) greatest = nums[i] 
  }
  // return greatest number
  return greatest; 
};

console.log(maxValue([4, 7, 2, 8, 10, 9])); // 10 
console.log(maxValue([42]))
console.log(maxValue([1000, -5, -2, -2, 2000]))

// n = length of array
// Time: O(n)
// Space: O(1)
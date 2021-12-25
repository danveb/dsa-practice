/* Write a function which accepts a "sorted" array of integers. 
The function  should find the first pair where the sum is 0 
Return an array that includes both values that sum to zero or UNDEFINED 
if pair does NOT exist 

input = [-3, -2, -1, 0, 1, 2, 3] 
          l                   r
let sum = l + r 
if(sum === 0) we found it 
else if(sum > 0) move right --
else move left ++

*/

// implement pointer strategy to move left and right pointers 

function sumZero(array) {
    // main check: if array is empty we return 0 
    if(array.length === 0) return 0
    // initialize 2 pointers: left and right; left starts at 0 and right start at end of array.length -1
    let left = 0 
    let right = array.length - 1
    // keep looping while left < right
    while (left < right) {
        // initialize sum var that equals to left + right
        let sum = array[left] + array[right] 
        // check: if (sum === 0) we are going to return [array[left], array[right]]
        if (sum === 0) {
            return [array[left], array[right]]
        } else if (sum > 0) {
            // another case: sum > 0; decrease right pointer by 1 
            right --
        } else {
            // else: increase left pointer by 1    
            left ++
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))
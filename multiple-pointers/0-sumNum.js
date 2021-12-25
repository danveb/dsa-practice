/* Write a function that takes an array of unique numbers and a number. 
Return true if a pair of numbers in the array sum to the number given. 

input = [1,2,3,4,5] 
         l       r
sum = array[l] + array[r]
check: if sum === 7 we return true 
target = 7

*main check: if input array is empty then return false 
*left pointer at 0
*right pointer at array.length - 1

Time: O(n log n) we use a 2 pointer approach and sort
Space: O(n) complexity

*/ 

function sumNum(array, target) {
    // main check: if array is empty we just return false 
    if(array.length === 0) return false 
    // initialize left and right pointers
    let left = 0
    let right = array.length - 1
    // keep looping while left < right 
    while(left < right) {
        // initialize sum var that is array[left] + array[right] 
        let sum = array[left] + array[right] 
        // check: if sum === target num return true 
        if(sum === target) {
            return true; 
        } else if(sum > target) {
            // another check: if sum > target we should decrease right pointer
            right--
        } else {
            // final check: else increase left pointer
            left++
        }
    }
    // final: return false because we haven't found the match 
    return false; 
}

console.log(sumNum([1,2,3,4,5], 7)); 
console.log(sumNum([1,2,3,4], 10))
console.log(sumNum([], 0))
console.log(sumNum([-2, -1, 0, 1, 2, 5], 7))
console.log(sumNum([1,2], 3))
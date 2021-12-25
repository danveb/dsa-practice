/* averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Constraints:

Time Complexity: O(N)

Examples:

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false

array          target
[1, 2, 3]       2.5
 l     r avg(2) 
    l  r avg(2,5) YES! 

sum = 2 + 3 
average = sum / 2 = 2.5 

*initialize left pointer at beginning of array 
*initialize right pointer at end of array 
*while loop (iterate while left < right) 
*initialize variable sum which is array[left] + array[right] 
*initialize variable avg which is the average of sum divided by the # of elements 
*check: if avg === target we return true 
*if avg > target we will decrease right pointer
*if avg < target we will increase left pointer 

*/ 

function averagePair(array, target) {
    // main check: if array is empty we will return false
    if(array.length === 0) return false
    let left = 0 
    let right = array.length - 1
    while(left < right) {
        let sum = array[left] + array[right]
        let avg = sum / 2
        if(avg === target) {
            return true 
        } else if(avg > target) {
            right--
        } else {
            left++
        }
    }
    return false; 
}

console.log(averagePair([1,2,3], 2.5))
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) 
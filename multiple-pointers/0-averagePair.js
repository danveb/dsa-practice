/* 

averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Constraints:

Time Complexity: O(N)

Examples:

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false

*/ 

function averagePair(array, target) {
    // main check: if array is empty we will return false outright 
    if(array.length === 0) return false 
    // initialize left and right pointers for the array 
    // - left starts at the beginning of array
    let left = 0 
    // - right starts at the end of the array 
    let right = array.length - 1
    // keep looping while left pointer is lower than right pointer 
    while(left < right) {
        // initialize average var that takes (left + right) / 2 
        let average = (array[left] + array[right])/2
        // check: if average is equal to the target we return true 
        if(average === target) {
            return true 
        } else if(average > target) {
            // else if average is greater than target we decrease right pointer
            right--
        } else {
            // else average would be lower than target so we increase left pointer 
            left++
        }
    }
    // finally... if we haven't found anything we'll return false 
    return false; 
}

console.log(averagePair([1,2,3], 2.5)); // true 
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
console.log(averagePair([], 4)) // false
console.log(averagePair([0,4,5], 4.5)) // true

// console.log([3,11,28, 17, 18, 39,49,-34,10,1].sort((a,b) => a - b))
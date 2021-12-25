/* Write a function that returns the middle index of a "sorted" array 
If not found return -1 
*/ 

function binarySearch(array, target) {
    // main check: if array is empty we return -1 
    if(array.length === 0) return -1 
    // initialize left/right pointers 
    let left = 0
    let right = array.length - 1
    // keep looping while left < right 
    while(left <= right) {
        // let midIdx to be the average of (left + right) / 2
        let midIdx = Math.floor((left + right)/2)
        // initialize midVal at the index 
        let midVal = array[midIdx]
        // check: if midVal < target
        if(midVal < target) {
            left = midIdx + 1 
        } else if(midVal > target) {
            right = midIdx - 1
        } else {
            return midIdx 
        }
    }
    // returns -1 since we didn't find it 
    return -1
}


console.log(binarySearch([3,4,6,9,10,12,15,22,30], 12))
console.log(binarySearch([1,2,3,4,5,10,12,15,17,18,19,20], 20))
console.log(binarySearch([3,4,6,9,10,12,15,22,30,31], 22))
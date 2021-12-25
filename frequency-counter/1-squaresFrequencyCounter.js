/* Write a function that takes in 2 arrays. Make a frequency counter 

[2,2,4,1] | [4,4,16,1]

Frequency Counter {
    2: 2,
    4: 1,
    1: 1
}
{
    4: 2,
    16: 1,
    1: 1
}

// Write a helper function to create a Map 

*/

// Helper function for frequency counter
function makeFreqCounter(array) {
    // make Map for frequency Counter 
    const frequencies = new Map() 
    // for loop each value in the main array
    for (let val of array) {
        // get val 
        let valCount = frequencies.get(val) || 0 
        // set val 
        frequencies.set(val, valCount + 1)
    }
    return frequencies; 
}

function squares(nums1, nums2) {
    // check length of nums1 vs. nums2: if not same length we can't work on it
    if (nums1.length !== nums2.length) return false; 
    // make frequency for nums1 and nums2 
    const nums1Map = makeFreqCounter(nums1)
    const nums2Map = makeFreqCounter(nums2) 
    // console.log(nums1Freq, nums2Freq) 
    
    // check size of each Map 
    if(nums1Map.size !== nums2Map.size) return false 
    // iterate charMap1 and make sure it's present in charMap2 
    for(let key of nums1Map.keys()) {
        if(nums2Map.has(key ** 2) === false) return false 
    }
    // else return true 
    return true; 
}

console.log(squares([2, 2, 4, 1], [4, 4, 16, 1]))
console.log(squares([1, 2, 4], [1, 4, 16]))
console.log(squares([1, 2, 3], [1, 4, 8])) 
console.log(squares([2, 4], [4, 16, 25]))
console.log(squares([16,25], [4,5]))
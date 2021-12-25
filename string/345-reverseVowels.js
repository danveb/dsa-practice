/* Write a function that reverses only vowels in the string and return it */

function reverseVowels(str) {
    // split string into an array AS STRINGS ARE IMMUTABLE 
    let stringArr = str.split('') 
    // initialize left & right pointers based on stringArr [] 
    let left = 0 
    let right = stringArr.length - 1
    // main while loop: keep looping as long as left < right 
    while (left < right) {
        // inner while loop: loop continues as long as left < right
        while(left < right) {
            // check: if !isVowel(stringArr[left])
            if (!isVowel(stringArr[left])) {
                // increase left pointer by 1
                left++
            } else {
                // break the loop
                break;
            }
        }
        // inner while loop: loop continues as long as left < right
        while(left < right) {
            // check: if !isVowel(stringArr[right])
            if (!isVowel(stringArr[right])) {
                // decrease right pointer by 1
                right--
            } else {
                // break the loop
                break; 
            }
        }

        // initialize current var that takes reference of stringArr[left] 
        let current = stringArr[left] 
        // swap stringArr[left] with [right] 
        stringArr[left] = stringArr[right] 
        // swap stringArr[right] with [left] (on current var) 
        stringArr[right] = current 

        // increase left pointer by 1 & decrease right pointer by 1
        left++
        right--
    }
    // return the "joined" array to string 
    return stringArr.join('')
}

function isVowel(char) {
    let vowels = 'aeiou'
    return vowels.includes(char.toLowerCase())
}

console.log(reverseVowels('leetcode')); // 'leotcede'
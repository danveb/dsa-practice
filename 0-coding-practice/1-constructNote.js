/* constructNote
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Constraints:

Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

Examples:

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true

letter  msg
'aa'   'abc' 

*Frequency counter that counts the letters we have. 
*we will check if the letters are enough to write the message 

*/ 

function constructNote(str1, str2) {
    // initialize frequencies for both strings 
    let str1Frequency = frequencyCounter(str1)
    let str2Frequency = frequencyCounter(str2)
    // for OF loop: we loop over each character of frequencies.keys() 
    for(let character of str1Frequency.keys()) {
        // check: if str2Frequency has same characters of str1Frequency 
        if(str2Frequency.get(character) !== str1Frequency.get(character)) {
            return false; 
        }
    }
    return true; 
}

// build helper function for frequencyCounter 
function frequencyCounter(str) {
    // initialize frequencies as a new Map()
    let frequencies = new Map()
    // for OF loop: we will loop over each letter of the string 
    for(let letter of str) {
        // initialize letterCounter for frequencies.keys
        let letterCounter = frequencies.get(letter) || 0
        frequencies.set(letter, letterCounter + 1) 
    }
    return frequencies;
}

console.log(constructNote('aa', 'abc'))
console.log(constructNote('abc', 'dcba'))
console.log(constructNote('aabbcc', 'bcabcaddff'))

console.log(frequencyCounter('aabbcc'))
console.log(frequencyCounter('bcabcaddff'))
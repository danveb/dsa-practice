/* 

constructNote
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Constraints:

Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

Examples:

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true

*/ 

function constructNote(str1, str2) {
    // build frequencyCounter for str1/str2 
    let str1Freq = frequencyCounter(str1) 
    let str2Freq = frequencyCounter(str2) 
    // for OF Loop: iterate each letter OF frequency.keys() 
    for(let letter of str1Freq.keys()) {
        // check: if str2Freq does NOT same letter as str1Freq we return false 
        if(str2Freq.get(letter) !== str1Freq.get(letter)) {
            return false 
        }
    }
    // return...
    return true; 
}

// helper function frequencyCounter 
function frequencyCounter(str) {
    // initialize frequencies as a new Map() {} 
    let frequencies = new Map() 
    // for OF loop: we iterate each char OF the string
    for(let char of str) {
        // initialize charCount and get each char 
        let charCount = frequencies.get(char) || 0 
        // frequencies.set() 
        frequencies.set(char, charCount + 1) 
    }
    return frequencies; 
}

console.log(constructNote('aa', 'abc')); // false 
console.log(constructNote('abc', 'dcba')); // true
console.log(constructNote('aabbcc', 'aaccbb')); // true 
console.log(constructNote('aabbcc', 'bcabcaddff')); // TRUE! 
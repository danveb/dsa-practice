/* Given 2 strings check if the second string is an anagram of first string
Return true if anagram; else false 

str1 -> 'hello' Map { h: 1, e: 1, l: 2, o: 1 }
str2 -> 'olleh' Map { h: 1, e: 1, l: 2, o: 1 }

questions: can there be uppercase letters? If yes I would use .toLowerCase() method to convert the strings. 

// edge cases: 
- check the length of both strings; because if not it's NOT anagram 
- check the size of both frequencyCounters; because if they're not same it's NOT anagram

// implement a frequencyCounter as MAP - particularly MAPS work like objects and arrays. 

*/ 

function frequencyCounter(str) {
    // initialize frequencies as a new Map 
    let frequencies = new Map() 
    // iterate over each letter of the string 
    for(let letter of str) {
        // initialize letterCount and save reference to frequencies.get(letter) || 0
        let letterCount = frequencies.get(letter) || 0
        // frequencies.set(letter, letterCount + 1) -> key/value pairs 
        frequencies.set(letter, letterCount + 1) 
    }
    return frequencies; 
}

// console.log(frequencyCounter('Hello'.toLowerCase()))
// console.log(frequencyCounter('Olleh'.toLowerCase()))

function validAnagram(str1, str2) {
    // main check: if length of str1 and str2 are not equal we return false 
    if(str1.length !== str2.length) return false 
    // initialize frequencyCounter for both strings 
    let str1Frequency = frequencyCounter(str1)
    let str2Frequency = frequencyCounter(str2) 
    // check size of frequencyCounters; if size of the frequencyCounters not equal we return false 
    if(str1Frequency.size !== str2Frequency.size) return false 
    // iterate over each letter of str1Frequency.keys() 
    for(let letter of str1Frequency.keys()) {
        // check: if str2Frequency.get(letter) !== str1Frequency.get(letter) 
        if(str2Frequency.get(letter) !== str1Frequency.get(letter)) {
            // we return false 
            return false 
        }
    }
    // return true 
    return true; 
}

console.log(validAnagram('abba', 'bbaa'))
console.log(validAnagram('rail safety', 'fairy tales'))
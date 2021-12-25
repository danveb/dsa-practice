/* Given 2 strings check if the second string is an anagram of first string
Return true if anagram; else false */

// initialize a frequencyCounter that counts the letters and how many times it appears 
function frequencyCounter(str) {
    // initialize frequencies var as a new Map 
    let frequencies = new Map() 
    // for OF loop: loop the characters in the string 
    for (let char of str) {
        // Map.get(char) || 0 if not found 
        let charCount = frequencies.get(char) || 0
        // Map.set()
        frequencies.set(char, charCount + 1)
    }
    return frequencies; 
}

function isValidAnagram(str1, str2) {
    // main check: are length of str1/str2 equal? True; else false 
    if (str1.length !== str2.length) return false 
    // make frequencyCounter for str1/str2 
    const frequencyStr1 = frequencyCounter(str1)
    const frequencyStr2 = frequencyCounter(str2) 
    // check the size of both frequencies? True; else false 
    if (frequencyStr1.size !== frequencyStr2.size) return false 
    
    // for OF loop: loop over each letter in frequencyStr1 keys
    for (let letter of frequencyStr1.keys()) {
        // check: if letters of frequencyStr2 are NOT present in frequencyStr1 return false 
        if(frequencyStr2.get(letter) !== frequencyStr1.get(letter)) return false 
    }
    // return true 
    return true; 
}

console.log(isValidAnagram('anagram', 'nagaram'))
console.log(isValidAnagram('hello', 'ollhh'))
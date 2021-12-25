/* Given 2 strings return true if second string is an anagram of first string. 
Return false if NOT 
*/

// implement a frequencyCounter as MAP 
// check length of both strings 
// check size of frequencyCounters 

function frequencyCounter(str) {
    // initialize frequencies var as a new MAP 
    let frequencies = new Map() 
    // for loop each letter of the string 
    for (let char of str) {
        // initialize charCount var that checks char in the Map || 0 
        let charCount = frequencies.get(char) || 0
        // Map.set() 
        frequencies.set(char, charCount + 1) 
    }
    return frequencies; 
}

function isAnagram(str1, str2) {
    // main check: if length of the strings are NOT equal return false 
    if (str1.length !== str2.length) return false 
    // create frequencyCounter for str1/str2 
    const frequencyStr1 = frequencyCounter(str1)
    const frequencyStr2 = frequencyCounter(str2) 
    // check: size of frequencyCounters 
    if (frequencyStr1.size !== frequencyStr2.size) return false 
    
    // for OF loop: iterate each character of frequencyStr1 KEYS
    for (let letter of frequencyStr1.keys()) {
        // check: if frequencyStr2 also has the same letters as frequencyStr1 
        if(frequencyStr2.get(letter) !== frequencyStr1.get(letter)) return false 
    }
    // else returns true; we found anagram
    return true; 
}

console.log(isAnagram('hello', 'olleh')); // true 
/* Write a function given 2 positive integers (nums). 
Find out if the 2 numbers have same frequency of digits 

*main constraint: nums need to be converted to strings first 
*build a frequencyCounter 
*check size of frequencyCounter 
*check length of strNums 

*/ 

// Helper function 
function frequencyCounter(str) {
    // initialize frequencies var as new Map 
    let frequencies = new Map() 
    // for OF loop: we iterate over the char of the string 
    for(let char of str) {
        // initialize charCount as Map.get() || 0
        let charCount = frequencies.get(char) || 0
        // Map.set() 
        frequencies.set(char, charCount + 1)
    }
    return frequencies; 
}

function sameFrequency(num1, num2) {
    // first convert num1/num2 to strings 
    let strNum1 = num1.toString()
    let strNum2 = num2.toString() 

    // check if strNum1 and strNum2 are equal length; if not false... 
    if(strNum1.length !== strNum2.length) return false

    // prepare frequencyCounter for strNum1/strNum2 
    const strFreq1 = frequencyCounter(strNum1) 
    const strFreq2 = frequencyCounter(strNum2)
    // check if size of both frequencies are equal 
    if(strFreq1.size !== strFreq2.size) return false 

    // for OF loop: we iterate over the each letter in strFreq1.keys() 
    for(let letter of strFreq1.keys()) {
        // check: if strFreq2 has same letter as strFreq1
        if(strFreq2.get(letter) !== strFreq1.get(letter)) return false 
    }
    // finally... we return true 
    return true; 
}

console.log(frequencyCounter('787'))
console.log(frequencyCounter('877'))

console.log(sameFrequency(182, 281))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(34, 14))
console.log(sameFrequency(555, 444))
console.log(sameFrequency(181, 811))
console.log(sameFrequency(787, 877))
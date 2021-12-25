/* sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Examples:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
Constraints

Time Complexity - O(N + M) 

****************************************Since working with numbers we will need to convert to string first

num1 = 1 8 2
num1Freq { 1: 1, 8: 1, 2: 1 }

num2 = 2 8 1 
num2Freq { 2: 1, 8: 1, 1: 1 }

*/ 

function sameFrequency(num1, num2) {
    // convert num to string 
    let num1Str = num1.toString()
    let num2Str = num2.toString() 

    // check: if length of num1Str is NOT EQUAL to num2Str return false 
    if(num1Str.length !== num2Str.length) return false 
    
    // initialize frequencyCounter for num1Str and num2Str 
    let num1StrFrequency = frequencyCounter(num1Str)
    let num2StrFrequency = frequencyCounter(num2Str)
    // for OF loop: iterate over each element of num1StrFrequency.keys() 
    for(let element of num1StrFrequency.keys()) {
        // check if num2StrFrequency contains same element as num1StrFrequency 
        if(num2StrFrequency.get(element) !== num1StrFrequency.get(element)) {
            return false 
        }
    }
    return true; 
}

// helper function for frequencyCounter
function frequencyCounter(str) {
    // initialize frequencies as new Map()
    let frequencies = new Map() 
    // iterate over each element of the string 
    for(let element of str) {
        // initialize elementCounter 
        let elementCounter = frequencies.get(element) || 0 
        // frequencies.set()
        frequencies.set(element, elementCounter + 1) 
    }
    return frequencies; 
}

console.log(frequencyCounter('181'));

console.log(sameFrequency(182, 218))
console.log(sameFrequency(3589578, 5879385))
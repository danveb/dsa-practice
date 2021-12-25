/* Write a function that accepts an array of integers and checks for fizzBuzz. multiples of 3 should return fizz. multiples of 5 should return buzz and multiples of 3 & 5 return fizzBuzz. Return an array with the values 

array = [1,2,3,4,5,6,7,8,9,10]

*/ 

function fizzBuzz(array) {
    // initialize output array
    const output = []
    // if array is empty we return []
    if(array.length === 0) return []
    // iterate each item in the array 
    for(let i = 0; i < array.length; i++) {
        // check: if element % 3 === 0 (fizz) && element % 5 === 0 (both fizzBuzz) 
        if(array[i] % 3 === 0 && array[i] % 5 === 0) {
            output.push('fizzBuzz')
        } else if(array[i] % 3 === 0) {
            // check: if element % 3 === 0 (fizz)
            output.push('fizz')
        } else if(array[i] % 5 === 0) {
            // check: if element % 5 === 0 (buzz) 
            output.push('buzz')
        } else {
            output.push(array[i])
        }
    }
    return output;
}

function fizzBuzz2(n) {
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('fizzBuzz')
        } else if(i % 3 === 0) {
            console.log('fizz')
        } else if(i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}

console.log(fizzBuzz2(5)) 

console.log(fizzBuzz([1,3,15,18]))
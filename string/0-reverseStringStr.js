/* Write a function that reverses a string. The input string is given as a string of characters 
* JS strings are IMMUTABLE SO WE NEED TO FIRST SPLIT INTO ARRAY AND THEN JOIN BACK ALL...
*/

function reverseStr(str) {
    // split original string into an array
    let stringArr = str.split('') 
    // initialize 2 pointers
    let left = 0 
    let right = str.length - 1 
    // keep looping while left < right (0 vs. stringArr.length -1)
    while (left < right) {
        // initialize temp var that holds reference to stringArr[left] 
        let temp = stringArr[left] 
        // swap left & right 
        stringArr[left] = stringArr[right] 
        // another swap of right & left (with temp variable holding reference to stringArr[left])
        stringArr[right] = temp 
        // increase left && decrease right 
        left++ 
        right--
    }
    return stringArr.join(''); 
}

console.log(reverseStr('hello')) // 'olleh'
console.log(reverseStr('mademoisele')) // 'elesiomedam'
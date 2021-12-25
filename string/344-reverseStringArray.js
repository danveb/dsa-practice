/* Write a function that returns a reversed string. 
Mainly we will modify the array in-place with O(1) memory. 
Our input is an array with characters that form a word 

input: ['h','e','l','l','o'] 
        left            right
        curr 
             l  l/r  r  

output: ['o','l','l','e','h'] 

Steps: 
1. use 2 pointers; first at beginning of array, second at end of array 
2. swap 2 letters with pointers 
3. move the pointers 

Time: O(n) as we traverse once the array 
Space: O(1) as we don't need any more variables 

*/

function reverseString(s) {
    // initialize 2 pointers; first at beginning, second at end 
    let left = 0
    let right = s.length - 1
    // while loop: keep looping as long as left is less than right 
    while (left < right) {
        // initialize current var that holds s[left] 
        let current = s[left] 
        // swap left with right 
        s[left] = s[right]
        // set right to be current 
        s[right] = current 
        // increase left && decrease right
        left++
        right--
    }
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); // ['o', 'l', 'l', 'e', 'h']
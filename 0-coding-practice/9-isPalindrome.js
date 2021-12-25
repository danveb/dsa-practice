/* isPalindrome
Write a function that takes in a non-empty string and returns a boolean representing whether the string is a palindrome. A palindrome is defined as a string that's written the same forward and backward. Single-characters can be palindromes too. 

str = 'abcba' 
       l   r -> a YES 
        l r  -> b YES 
        l/r  -> c YES 

output = 'abcba' 

*Most optimal solution is to use pointers and move them
O(n) Time || O(1) Space 

*/

function isPalindrome(str) {
    // if string is empty return false as we can't find palindrome 
    if(str.length === 0) return false 
    // and if string of length 1 is considered a palindrome 
    if(str.length === 1) return true 

    // initialize left and right pointers 
    let left = 0 
    let right = str.length - 1
    // keep looping while left < right 
    while(left < right) {
        // check: if str[leftIdx] !== str[rightIdx] return false 
        if(str[left] !== str[right]) return false 
        // move left++
        left++
        // move right--
        right--
    }
    return true; 
}

console.log(isPalindrome('hello'))
console.log('')
console.log(isPalindrome('abcba'))
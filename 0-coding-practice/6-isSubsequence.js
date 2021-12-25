/* isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Constraints:

str1 = 'h e l l o'
        i
          i
            i
              i 
                 i
str2 = 'h e l l o w o r l d'
        i
          i
            i
              i
                i
*While loop that keeps running throught str2.length 
*check: if str2[idx] === str1[idx] increase str1Idx + 1
*check: if str1[idx] === str1.length return true and increase str2Idx + 1
*else returns false 

Time Complexity - O(N + M)

*/ 

function isSubsequence(str1, str2) {
    // initialize str1Idx and str2Idx both at 0 
    let str1Idx = 0;
    let str2Idx = 0;
    // if (!str1) return true;
    // while loop: keep looping as long as str2Idx is less than the length of str2
    while (str2Idx < str2.length) {
        // check
        if (str2[str2Idx] === str1[str1Idx]) {
            // h = h idx=0
            // e = e idx=1
            // l = l idx=2
            // l = l idx=3
            // o = o idx=4
            str1Idx++
        }
        if (str1Idx === str1.length) {
            // _ = w
            return true
        }
        // keep adding one to str2Idx
        str2Idx++
    }
    return false
}  

console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('abc', 'acb')) 
/* 

isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Constraints:

Time Complexity - O(N + M)

str1 = 'h e l l o'
        i
          i
str2 = 'h e l l o w o r l d'
        i
          i
*While loop that keeps running throught str2.length 
*check: if str2[idx] === str1[idx] increase str1Idx + 1
*check: if str1[idx] === str1.length return true and increase str2Idx + 1
*else returns false 

*/

function isSubsequence(str1, str2) {
  // initialize 2 pointers: str1Idx and str2Idx starting at 0
  let str1Idx = 0
  let str2Idx = 0
  // if(!str1) return true
  // keep looping the 2nd string as long as idx is less than the length of str2
  while(str2Idx < str2.length) {
    // check: if str2[idx] === str1[idx] increase idx of str1
    if(str2[str2Idx] === str1[str1Idx]) {
      str1Idx += 1
    }
    // check: if str1[idx] === length of str1 we return true
    if(str1[str1Idx] === str1.length) {
      return true;
    }
    // keep increasing idx of str2
    str2Idx += 1
  }
  // we couldnt check it so return false 
  return false; 
}

// console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false (order matters)

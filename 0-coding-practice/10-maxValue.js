/* Write a function, maxValue, that takes in array of numbers as an argument. 
The function should return the largest number in the array.
Solve this without using any built-in array methods.
You can assume that the array is non-empty. 

array = [1, 2, 3, 4, 5] -> MAX 5 
         c  
            c 
               c
                  c
                     c

// n = length of array
// Time: O(n) as we iterate over the array once
// Space: O(1)

*/ 

function maxValue(array) {
    // initialize max var as negative Infinity 
    let max = -Infinity 
    for(let i = 0; i < array.length; i++) {
        if(array[i] > max) {
            // set max to be this number 
            max = array[i]
        }
    }
    return max; 
}

console.log(maxValue([1,2,3,4,5])); // 5
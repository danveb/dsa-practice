/* Write a function, minValue, that takes in array of numbers as an argument. 
The function should return the smallest number in the array.
Solve this without using any built-in array methods.
You can assume that the array is non-empty. 

array = [-9, -3, -100, -1, 0, 39, 199, 240] MIN -> -100 
          c
             c  
                   c
                       c
                          c
                             c
                                 c
                                      c

// n = length of array
// Time: O(n) as we iterate over the array once
// Space: O(1)

*/

function minValue(array) {
    // initialize min as positive Infinity 
    let min = Infinity 
    for(let i = 0; i < array.length; i++) {
        // check: if array[i] < min
        // we set min as the current number 
        if(array[i] < min) min = array[i]
    }
    // return the min number 
    return min; 
}

console.log(minValue([-9, -3, -100, -1, 0, 39, 199, 240])); 
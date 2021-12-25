// exclusive multiplication (Leetcode 238)
// https://app.coderpad.io/7NZ3X4PW
// input: array of integers.
// output: another array of integers, multiplying all numbers together but exclude number in each position.2

// input = [2, 5, 4, 10]
// output = [200, 80, 100, 40]


// [2 -> 5 X 4 X 10 = 200]
// [5 -> 2 X 4 X 10 = 80]
// [4 -> 2 X 5 X 10 = 100] 
// [10 -> 2 X 5 X 4 = 40] 
//  5 X 4 X 10 
// 1
// 5
// 5 x 4
// 5 x 4 x 10

// brute force: 
// initialize idx var at 0 
// iterate over each element of the array 
// check: idx is at 0; we will multiply 
             
function exclusive(array) {
  let idx = 0 
  for(let i = 0; i < array.length; i++) {
    let multiplication = 1;
    for(let j = 0; j < array.length; j++) {
        if (i !== j) {
          multiplication = multiplication * array[j]; // 1 * arr(i), arr(i) * arr(i+1)
        }
    }
  }
}
                

/* sumZero
Write a function that takes in a sorted array of integers. Try to find if a pair of integers will sum to 0. If we find it return the pair. if not return undefined 

array = [-5, -4, -3, -2, 0, 3, 6, 8, 10]
          l                          r  = 5; so decrease right pointer 
          l                       r     = 3; so decrease right pointer 
          l                    r        = 1; so decrease right pointer 
          l                 r           = -2; so increase left pointer 
             l              r           = -1; so increase left pointer 
                  l         r           = 0; WE FOUND IT; [-3, 3] 

*/ 

function sumZero(array) {
    // main check: if the array is empty we return undefined, as there's no sum 
    if(array.length === 0) return undefined 
    // initialize left and right pointers 
    let left = 0
    let right = array.length - 1
    // we will keep looping as long as left < right pointer 
    while(left < right) {
        // initialize sum var of array[left] + array[right] 
        let sum = array[left] + array[right] 
        // check: if sum === 0 we will return [array[left], array[right]]
        if(sum === 0) {
            return [array[left], array[right]]
        } else if(sum > 0) {
            // check: if sum > 0 we will reduce right pointer
            right--
        } else {
            // check: if sum < 0 we will increase left pointer 
            left++
        }
    }
    // we couldn't find anything... return undefined 
    return undefined; 
}

console.log(sumZero([-5, -4, -3, -2, 0, 3, 6, 8, 10])); // [-3, 3]
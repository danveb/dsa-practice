/* Write a function that takes in the head of a linked list as argument. 
The function should return an array consisting of all values of the nodes in the linked list 
*/

class Node {
    constructor(val) {
        this.val = val 
        this.next = null 
    }
}

let head = new Node('a')
head.next = new Node('b') 
head.next.next = new Node('c')
head.next.next.next = new Node('d') 

const linkedListValues = (head) => {
    // initialize current var as the head 
    let current = head 
    // initialize values array that will hold the values of the nodes 
    let values = [] 
    // keep looping as long as current is NOT null
    // - while loop will break once current node reaches null 
    while (current !== null) {
        // push value of current node to the array 
        values.push(current.val) 
        // keep moving current node to be the next node 
        current = current.next
    }
    // finally... we return the array holding the values 
    return values 
}

console.log(linkedListValues(head)); // ['a', 'b', 'c', 'd']
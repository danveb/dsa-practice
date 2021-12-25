/* Write a function that returns the total sum of values of linked list nodes 
*/

class Node {
    constructor(val) {
        this.val = val 
        this.next = null 
    }
}

let head = new Node(2)
head.next = new Node(8)
head.next.next = new Node(3)
head.next.next.next = new Node(7) 

console.log(head) 

function sumLinkedList(head) {
    // initialize current to be the head node 
    let current = head
    // initialize sum var as 0; we will continue updating sum as we loop
    let sum = 0
    // keep looping as long as current is NOT null
    // - while loop will break once current node reaches NULL
    while (current !== null) {
        // update sum variable to value of current node 
        sum += current.val
        // move pointer to current.next 
        current = current.next
    }
    // return sum 
    return sum; 
}

console.log(sumLinkedList(head)) // 20
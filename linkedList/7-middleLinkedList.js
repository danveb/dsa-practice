/* Write a function that returns the middle node of a linked list given the "head" of a singly linked list. If there are 2 middle nodes return the second middle node. 
*/

class Node {
    constructor(val) {
        this.val = val 
        this.next = null 
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log(head) 

function middleNode(head) {
    // initialize 2 pointers (fast & slow to start at head) 
    let slow = head 
    let fast = head
    // keep looping until fast is NOT NULL && fast.next NOT NULL 
    // while loop will break once fast reaches null 
    while (fast !== null && fast.next !== null) {
        // keep moving slow to the next node
        slow = slow.next
        // fast pointer will move twice as fast as the slow pointer
        fast = fast.next.next
    }
    // slow pointer should reach the middle of the linked list by the time fast reaches null
    return slow; 
}

console.log(middleNode(head))
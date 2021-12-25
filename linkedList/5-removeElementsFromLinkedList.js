/* Write a function that removes elements from a Linked List when it matches the value passed as argument 

head = 1 -> 3 -> 6 -> 4 -> null 
val = 6

output = 1 -> 3 -> 4 -> null 

*/

class Node {
    constructor(val) {
        this.val = val 
        this.next = null 
    }
}

let head = new Node(1) 
head.next = new Node(3) 
head.next.next = new Node(6)
head.next.next.next = new Node(4) 

console.log(head) 

function removeElements(head, val) {
    // check: if head is null there's no linked list so we return null 
    if (head === null) {
        return null 
    }
    // initialize currentNode as new Node 
    let currentNode = new Node(-1) 
    // set currentNode.next to be the head 
    currentNode.next = head 
    // reassign head to be currentNode
    head = currentNode 
    // keep looping while currentNode.next !== null 
    while (currentNode.next !== null) {
        // check: if currentNode.next.val === val 
        if (currentNode.next.val === val) {
            // skip current.next node to go next next node 
            currentNode.next = currentNode.next.next
        } else {
            currentNode = currentNode.next
        }
    }
    // return head.next! We do this because we shuffled head to be -1 at beginning. 
    return head.next
}

console.log(removeElements(head, 6))
/*
Node {
    val: 1, 
    next: Node {
        val: 3, 
        next: Node {
            val: 4, 
            next: null 
        }
    }
}
*/ 
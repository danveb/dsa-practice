/* Write a function that removes duplicates from a sorted Linked List 

head = 1 -> 1 -> 3 -> 4 -> null 
output = 1 -> 3 -> 4

*/ 

class Node {
    constructor(val) {
        this.val = val 
        this.next = null 
    }
}

let head = new Node(1) 
head.next = new Node(1) 
head.next.next = new Node(3) 
head.next.next.next = new Node(4) 

console.log(head)
/*
Node {
    val: 1, 
    next: Node {
        val: 1, 
        next: Node {
            val: 3,
            next: Node {
                val: 4,
                next: null 
            }
        }
    }
}
*/

function removeDuplicates(head) {
    // initialize current to be the head of linked list 
    let current = head 
    // keep looping as long as current is NOT null && current.next is NOT null 
    while (current !== null && current.next !== null) {
        // compare: if value of currentNode is equal to value of currentNode.next 
        if (current.val === current.next.val) {
            // skip current.next node to go next next node 
            current.next = current.next.next
        } else {
            // else keep moving current to the next node
            current = current.next
        }
    }
    // finally... return the linked list (HEAD) 
    return head; 
}

console.log(removeDuplicates(head))
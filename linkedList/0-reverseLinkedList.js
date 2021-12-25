/* Write a function that reverses a linked list
It should return the new head of the linked list 
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

// 1 -> 2 -> 3 -> null 
// null <- 1 -> 2 -> 3 
// null <- 1 <- 2 -> 3
// null <- 1 <- 2 <- 3 
// 3 -> 2 -> 1 -> null 

// console.log(head) 

function reverseLinkedList(head) {
    // initialize current to be the head node 
    let current = head
    // initialize prev var and set as NULL; we will need prev pointer because we are reversing the linked list and this is the END
    let prev = null 
    // keep looping while current is NOT null; while loop will exit once current reaches to NULL
    while (current !== null) {
        // initialize next var and set to current.next (let's keep a reference)
        let next = current.next 
        // set current.next and point it towards prev   
        current.next = prev 
        // move prev to current's place
        prev = current
        // move current to next's place 
        current = next
    }
    // finally... return prev (which is the new head of the linked list) 
    return prev; 
}

console.log(reverseLinkedList(head))
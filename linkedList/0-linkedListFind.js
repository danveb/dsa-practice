/* Write a function that finds a target's node. 
It should return true if found; else return false 
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

console.log(head) 

function findTarget(head, target) {
    // initialize current to be the head node
    let current = head 
    // keep looping while current node is NOT null 
    // - while loop will break when current node reaches NULL
    while (current !== null) {
        // check: if current.val === target; we found it so return true
        if (current.val === target) return true
        // keep iterating current node to be the next node 
        current = current.next
    }
    // if we didn't find anything... return false 
    return false;    
}

console.log(findTarget(head, target=4))
console.log(findTarget(head, target=1))
console.log(findTarget(head, target=99))
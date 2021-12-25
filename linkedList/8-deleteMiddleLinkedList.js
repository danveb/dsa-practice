/* Given the "head" of a linked list delete the middle node and return the head of the modified linked list. 
*/

class Node {
    constructor(val) {
        this.val = val 
        this.next = null 
    }
}

let head = new Node(1) 
head.next = new Node(3)
head.next.next = new Node(4) 
head.next.next.next = new Node(7) 
head.next.next.next.next = new Node(1) 
head.next.next.next.next.next = new Node(2) 
head.next.next.next.next.next.next = new Node(6) 

console.log(head) 

function deleteMiddle(head) {
    // initial check: if head is null return null 
    if (head === null) {
        return null
    }
    // another check: if head.next is null return null
    if (head.next === null) {
        return null 
    }
    // initialize fast node as the head 
    let fast = head 
    // initialize slow as a new Node
    let slow = new Node(-1) 
    // slow will point to fast, which is the head
    slow.next = head 
    // keep looping as long as fast !== null && fast.next !== null
    while (fast !== null && fast.next !== null) {
        // move pointers for slow + 1 and fast + 2
        slow = slow.next 
        fast = fast.next.next
    }
    // once exited the while loop set slow pointer to point slow + 2 so we can delete the middle of the linked List 
    slow.next = slow.next.next
    // we return head
    return head; 
}

console.log(deleteMiddle(head))
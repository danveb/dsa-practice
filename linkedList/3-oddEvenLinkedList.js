/* 

Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]

Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]

*/

class Node {
    constructor(val) {
        this.val = val 
        this.next = null 
    }
}

////////////////////////////////////////////////////////////////

// const initializeLinkedListFromArray = (array) => {
//     if (array.length === 0) {
//         return []
//     }
//     let head = new Node(array[0])
//     let current = head 
//     for (let i = 0; i < array.length; i++) {
//         let newNode = new Node(array[i]) 
//         current.next = newNode 
//         current = current.next 
//     }
//     return head; 
// }

// const printLinkedList = (head) => {
//     let current = head 
//     let printStr = '' 
//     while (current) {
//         printStr + current.val + "->"; 
//         current = current.next 
//     }
//     console.log(printStr) 
// }

// const head = initializeLinkedListFromArray([1,2,3,4,5])
// printLinkedList(head); 

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// Create the manual linked list with nodes... 
// let head = new Node(1) 
// head.next = new Node(2)
// head.next.next = new Node(3)
// head.next.next.next = new Node(4) 
// head.next.next.next.next = new Node(5) 

let head = new Node(2) 
head.next = new Node(1)
head.next.next = new Node(3)
head.next.next.next = new Node(5) 
head.next.next.next.next = new Node(6) 

function oddEvenList(head) {
    // edge case: check if there's a head at all
    if(head === null) {
        return null 
    }
    
    // initialize pointers (odd, even, evenHead)
    let odd = head 
    let even = head.next 
    let evenHead = even
    
    // keep looping as long as even & even.next are NOT null 
    while(even !== null && even.next !== null) {
        // cases 
        odd.next = even.next 
        odd = odd.next 
        even.next = odd.next
        even = even.next
    }
    odd.next = evenHead; 
    return head;   
};

////////////////////////////////////////////////////////////////
// VISUALIZE CODE NOW: 
console.log(oddEvenList(head))


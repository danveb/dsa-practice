/* Write a function that reverses a linked list
It should return the new head of the linked list 

head = a -> b -> c -> d -> null 

p = prev 
c = current 
n = next 

       null -> a -> b -> c -> d -> null 
       null <- a -> b -> c -> d -> null 
       null <- a <- b -> c -> d -> null 
       null <- a <- b <- c -> d -> null 
       null <- a <- b <- c <- d 
       
       p       c    n
               p    c    n 
                    p    c    n
                         p    c     n
                              p     c (NULL) 
               

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

console.log(head)

function reverseLinkedList(head) {
    // initialize current var to be the head 
    let current = head 
    // initialize prev var as null (we'll use it when reversing the linked list) 
    let prev = null 
    // keep looping while current is present 
    while(current !== null) {
        // initialize next and save its reference 
        let next = current.next 
        // have current.next point towards prev (null) 
        current.next = prev 
        // move prev to current place 
        prev = current 
        // move current to next 
        current = next; 
    }
    // return the new head of linked list at prev 
    return prev; 
}

console.log(reverseLinkedList(head))
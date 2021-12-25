// Write a function that is passed two linked lists, a and b, both of which are already sorted.
// It should return a new linked list, in sorted order.

/*

Each LinkedList node has integer "value" and "next" node pointing to the next node in the list or to "null" if it's the tail of the linked list. 

Assume the linked lists always have at least one node. The heads will never be null. 

head1: 2 -> 6 -> 7 -> 8
p1Prev p1

head2: 1 -> 3 -> 4 -> 5 -> 9 -> 10
       p2

// 3 pointers: p1 to head1, p2 to head2, prev as null
// keep moving while we have a head; and set current to be current.next
// prev can move between p1 and p2
// if p1 is < p2 we "move forward" by moving p1 and p1Prev by 1 position (p1Prev becomes p1 and p1 becomes p1.next)
// if p1 is > p2 we "insert" p2 before p1. 

output: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10

*/

// function mergeLinkedLists(head1, head2) {
//     // initialize 3 different pointers
//     let p1 = head1
//     let p1Prev = null 
//     let p2 = head2 

//     // keep looping as long as p1 & p2 NOT null
//     while (p1 !== null && p2 !== null) {
//         // if p1 < p2
//         if (p1.value < p2.value) {
//             // update p1 and p1Prev
//             p1Prev = p1 
//             p1 = p1.next 
//         } else {
//             // if p1Prev is NOT NULL 
//             if (p1Prev !== null) {
//                 p1Prev.next = p2 
//             }
//             p1Prev = p2
//             p2 = p2.next 
//             p1Prev.next = p1
//         }
//     }
//     if (p1 === null) {
//         p1Prev.next = p2
//     }
//     return head1.value < head2.value ? head1 : head2; 
// }

//////////////////////////////////////////////////////////////////////////

/* 

1 -> 2 -> 4 

1 -> 3 -> 4 

pointer to keep track of current node (list1 and list2) a
check if list1 is < list2 and we move pointers accordingly 
*important: keep track of a dummy node (very useful for +/-)

*/

// initialize Node class to create a dummy node
class Node {
    constructor(val) {
        this.val = val
        this.next = null 
    }
}

// work on function here! 
function mergeTwoLists(list1, list2) {
    // initialize a dummy node so it can be in front of the head (becomes the new head) 
    let dummy = new Node(-1) 
    // make the head to be dummy 
    let head = dummy 

    // while loop: keep looping as long as list1 & list2 are NOT NULL 
    while (list1 !== null && list2 !== null) {
        // if value in list1 is less than value in list2
        if (list1.val < list2.val) {
            // set dummy.next to be list1 so that dummy can head to its correct node 
            dummy.next = list1 
            // keep moving list1 pointer 
            list1 = list1.next 
        } else {
            dummy.next = list2 
            list2 = list2.next 
        }
        // move dummy reference to dummy.next node 
        dummy = dummy.next 
    }
    // if list1 !== null we will attach remaining contents of list2
        if (list1 !== null) {
            dummy.next = list1
        }
        if (list2 !== null) {
            dummy.next = list2
        }
    // return the new head! (don't forget about DUMMY!) 
    return head.next 
}
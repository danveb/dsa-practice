/* Write a function to delete a NODE from a singly linked list. We are NOT given the "head" of the list, instead access to the node to be deleted directly. It is guaranteed that the node to be deleted is NOT a tail node in the list.

*/

class Node {
    constructor(val) {
        this.val = val
        this.next = null 
    }
}

function deleteNode(node) {
    // value of node will point to value of node.next 
    node.val = node.next.val
    // set node.next to be node.next.next
    node.next = node.next.next
}
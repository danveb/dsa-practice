/* Given a root node of a binary tree perform a BFS traversal 
Return an array with the values of each node

*/

class Node {
    constructor(val) {
        this.val = val 
        this.left = null 
        this.right = null 
    }
}

// instantiate 
const a = new Node('a') 
const b = new Node('b') 
const c = new Node('c') 
const d = new Node('d') 
const e = new Node('e') 
const f = new Node('f') 

a.left = b 
a.right = c 
b.left = d 
b.right = e 
c.right = f 

/* 

        a
      /  \ 
     b   c 
    / \   \
   d  e   f

*/

function BFSValues(root) {
    // main check: if root is null we return empty array [] 
    if(root === null) return [] 
    // implement as a QUEUE (BFS Traversing) and initialize root inside it
    const queue = [ root ]
    // initialize an empty array that will hold node's values 
    let result = []
    // keep looping while queue is NOT empty 
    while (queue.length > 0) {
        // initialize current node as the node that was removed from the front of queue 
        let current = queue.shift() 
        result.push(current.val) 
        // add any children into the queue (push to back) 
        if(current.left !== null) queue.push(current.left) 
        if(current.right !== null) queue.push(current.right) 
    }
    // return the result array 
    return result; 
}

console.log(BFSValues(a)); 
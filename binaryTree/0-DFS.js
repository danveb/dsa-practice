/* Given a root node of a binary tree perform a DFS traversal 
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


function DFSValues(root) {
    // first check: if root === null we return empty array 
    if(root === null) return []

    // implement a STACK (use pop/push) 
    // initialize result array as empty
    const result = [] 
    // initialize stack and add the ROOT node 
    const stack = [root] 
    // keep looping as long as the STACK has any elements (at least 1 will keep looping) 
    while (stack.length > 0) {
        // initialize current var and remove from the STACK 
        const current = stack.pop() 
        // console.log(current.val) 
        // push value of current node to result array 
        result.push(current.val) 

        // manually check: if current has a right child we push the right child
        if(current.right) stack.push(current.right) 
        // manually check: if current has a left child we push the left child 
        if(current.left) stack.push(current.left) 

    }
    return result; 
}

console.log(DFSValues(a)); 
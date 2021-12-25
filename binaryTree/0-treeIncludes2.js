/* Write a function that checks if a current node's value matches the target value 
We can implement either BFS or DFS 
Return true if found; else false 
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

function treeIncludes(root, target) {
    // main check: if root is NULL there's no tree; returns [] 
    if(root === null) return []
    // implement a STACK with root
    const stack = [ root ]
    // keep looping while STACK is NOT empty
    while (stack.length > 0) {
        // initialize current to be the first node the be removed (pop) from STACK
        let current = stack.pop() 
        // check: if value of current node matches target; return true
        if(current.val === target) return true 
        // check: if current has any children to the right; push to stack 
        if(current.right !== null) stack.push(current.right) 
        // check: if current has any children to the left; push to stack
        if(current.left !== null) stack.push(current.left) 
    }
    // return false; 
    return false; 
}

console.log(treeIncludes(a, 'e')); 
console.log(treeIncludes(a, 'f')); 
console.log(treeIncludes(a, 'x')); 
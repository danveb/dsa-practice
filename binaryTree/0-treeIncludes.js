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
    // main check: if root is null there's no tree; return empty [] 
    if(root === null) return [] 
    // implement a QUEUE to traverse BFS starting with the root
    const queue = [ root ]
    // keep looping while queue is NOT empty
    while (queue.length > 0) {   
        // initialize current to be the first node that is removed from front of queue
        let current = queue.shift() 
        // if value of current node is equal to the target we found it! Return true
        if(current.val === target) return true 
        // check: if current node has any children to the left; add to the queue
        if(current.left !== null) queue.push(current.left) 
        // check: if current node has any children to the right; add to the queue 
        if(current.right !== null) queue.push(current.right) 
    }
    // finally.. return false because we haven't found the target in our binary tree 
    return false; 
}

console.log(treeIncludes(a, 'e'))
console.log(treeIncludes(a, 'z'))
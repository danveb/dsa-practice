/* Write a function that returns the total sum of all node's values of a binary tree 
We can iterate BFS/DFS
Return total sum 
*/

class Node {
    constructor(val) {
        this.val = val 
        this.left = null 
        this.right = null 
    }
}

// instantiate 
const a = new Node(3) 
const b = new Node(11) 
const c = new Node(4) 
const d = new Node(4) 
const e = new Node(2) 
const f = new Node(1) 

a.left = b 
a.right = c 
b.left = d 
b.right = e 
c.right = f 

/* 

        3
      /  \ 
     11   4 
    / \   \
   4  2   1

*/

function treeSumBFS(root) {
    // main check: if root is null there's no tree so we return [] 
    if(root === null) return [] 
    // implement a QUEUE (BFS) with root node
    const queue = [ root ]
    // initialize totalSum var that will accumuluate the values of all nodes traversed
    let totalSum = 0
    // loop while queue is NOT empty
    while (queue.length > 0) {
        // initialize current and set it as the removed (shift) from the front
        let current = queue.shift() 
        // accumulate totalSum += current.val
        totalSum += current.val 
        // check: if current contains any children to the left; we push to the QUEUE
        if(current.left !== null) queue.push(current.left) 
        // check: if current contains any children to the right; we push to the QUEUE 
        if(current.right !== null) queue.push(current.right) 
    }
    // return totalSum     
    return totalSum;    
}

console.log(treeSumBFS(a)) // 25

function treeSumDFS(root) {
    if (root === null) return [] 
    const stack = [root]
    let totalSum = 0 
    while (stack.length > 0) {
        let current = stack.pop() 
        totalSum += current.val 
        if (current.right !== null) stack.push(current.right) 
        if (current.left !== null) stack.push(current.left) 
    }
    return totalSum; 
}

console.log(treeSumDFS(a)) // 25
/* Write a function that returns the smallest value from a binary tree 
OK to DFS/BFS 
*/

class Node {
    constructor(val) {
        this.val = val 
        this.left = null 
        this.right = null 
    }
}

// instantiate 
const a = new Node(5) 
const b = new Node(11) 
const c = new Node(3) 
const d = new Node(4) 
const e = new Node(15) 
const f = new Node(12) 

a.left = b 
a.right = c 
b.left = d 
b.right = e 
c.right = f 

/* 

        5
      /  \ 
     11   3 
    / \   \
   4  15  12

*/

function findSmallestDFS(root) {
    // initialize smallest var as "Infinity" 
    let smallest = Infinity
    // implement a stack and push the root
    const stack = [ root ]
    // keep looping while stack is NOT empty
    while (stack.length > 0) {
        // initialize current var and set it as the node that is "popped" from the top of stack
        let current = stack.pop() 
        // check: if current.val < smallest; we will make smallest to be current.val
        if(current.val < smallest) smallest = current.val 
        // check: if current node has any right children we will push to top of stack
        if(current.right !== null) stack.push(current.right)
        // check: if current node has any left children we will push to top of stack 
        if(current.left !== null) stack.push(current.left) 
    }
    // return smallest; 
    return smallest; 
}

console.log(findSmallestDFS(a)); 


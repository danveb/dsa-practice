/* Given the root of a binary tree, return the in-order traversal of its nodes values 
*/

class Node {
    constructor(val) {
        this.val = val 
        this.left = null 
        this.right = null 
    }
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)
const e = new Node(5)
const f = new Node(6) 

a.left = b 
a.right = c 
b.left = d
b.right = e 
c.left = f 

/* 

        1
     /     \ 
    2      3 
  /  \    /
 4   5   6 

DFS In-order traversal: 4, 2, 5, 1, 6, 3

*/

function inOrderTraversal(root) {
    // initialize results array, where we'll push all nodes values we traverse 
    const result = [] 
    // initialize current node as the "ROOT"
    let current = root 
    // main case: if root is null there's no tree so we just return empty
    if(root === null) return result 
    // implement a STACK as array without root node yet
    const stack = []
    // keep looping while stack is NOT empty 
    while (stack.length > 0) {
        // initialize current node as first value "popped" from stack 
        let current = stack.pop() 

        // 
    }
}
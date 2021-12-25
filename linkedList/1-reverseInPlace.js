// Write a function that reverses a linked list in place - not by creating a new list or new nodes. 

// time complexity: O(n) where "n" is the number of nodes in linked list
// space complexity: O(1) where we only store a couple variables (3 pointers)
function reverseInPlace(head) {
  // initialize pointers p1, p2
	// p1 is null; p2 points to the head
	let p1 = null 
	let p2 = head 
	
	// while loop: keep looping as long as p2 is NOT null (at the end of linked List)
	while(p2 !== null) {
		// steps to make it work well
		// p3 is p2.next
		let p3 = p2.next 
		// p2.next is p1
		p2.next = p1
		// p1 is equal to p2
		p1 = p2
		// p2 is equal to p3
		p2 = p3
	}
	// return p1 as the new head of reversed linked list 
	return p1
}

// Iterative
function reverseLinkedList(head) {
	// initialize 2 pointers: current and previous 
	let current = head 
	let previous = null 
	// keep looping while current is NOT null (so we can move across the linked list until the end)
	while (current !== null) {	
		// move around the pointers
		// initialize next to be current.next
		let next = current.next 
		// current.next becomes previous
		current.next = previous
		// previous is current
		previous = current
		// current is next 
		current = next
	}
	// return previous (which is the head node) 
	return previous; 
}

// Recursive 
function reverseRecursive(head) {
	return reverse(head, null) 
}

function reverse(head, newHead) {
	if (head === null) {
		return newHead 
	}
	// temporary node
	let next = head.next 
	head.next = newHead
	newHead = head
	head = next 
	return reverse(head, newHead)
}

//////////////////////////////////////////////////////////////////////////

class Node {
	constructor(val) {
		this.val = val 
		this.next = null 
	}
}

// Iterative (O(n) time complexity + O(1) space complexity)
function reverse(head) {
	// initialize 3 pointers: prev, current, next 
	let prev = null 
	let current = head 
	let next = null 

	// while loop: keep looping as long as we have a head 
	while (current !== null) {
		next = current.next 
		current.next = prev
		prev = current 
		current = next 
	}
	// returns the new head of reversed linked list (prev) 
	return prev; 
}

// instantiate some nodes: 
let head = new Node(1) 
head.next = new Node(2)
head.next.next = new Node(3) 
head.next.next.next = new Node(4) 
head.next.next.next.next = new Node(5) 

console.log(head) 
console.log(head.next)
console.log(head.next.next)
console.log(head.next.next.next)
console.log(head.next.next.next.next)

console.log(reverse(head));
// Node { val: 5, next: Node { val: 4, next: Node { val: 3, next: Node { val: 2, next: Node { val: 1, next: null }}}}}
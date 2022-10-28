//Leetcode 10-28-22

// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

var middleNode = function(head) {
  console.log(head.length)
  let len = head.length % 2 === 0 ? (head.length/2) : Math.ceil((head.length)/2) 
  console.log(len)
  return head.slice(-len)
  
};

console.log(middleNode([1,2,3,4,5]))
console.log(middleNode([1,2,3,4,5,6]))

//this doesn't work on leetcode for some reason
//Leetcode 10-28-22

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
 
// 10 - 28 - 22

// var twoSum = function(nums, target) {

//   for(let i = 0; i < nums.length; i++){

//     for (let j = i + 1; j < nums.length; j++){
//      if (nums[i] + nums[j] === target) {
//       return [i, j]
//      } 
//     }
//   }
// };

// 12-16-22

var twoSum = function (numsArr, target) {

  let numMap = {}
  let pairs = []

  for (const num of numsArr) {
    const num2 = target - num
    if (numMap[num2]) {
      pairs.push(num, num2)  
    } else {
      numMap[num]=1
    }
  }
  if (pairs.length = 2) {
    // console.log(pairs)
    return [numsArr.indexOf(pairs[0]), numsArr.lastIndexOf(pairs[1])]
  }
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([2,5,5,11], 10))
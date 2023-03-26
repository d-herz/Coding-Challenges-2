/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i+1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     } 
//   }
// };

var twoSum = function (nums, target) {
  const pairs = [];
  const numMap = {};

  for (const num1 of nums) {
    const num2 = target - num1

    if (numMap[num2]) {
      pairs.push(num1, num2)
    } else {
      numMap[num1] = 1;
    }
  }

  if (pairs.length = 2) {
    // console.log(pairs)
    return [nums.indexOf(pairs[0]), nums.lastIndexOf(pairs[1])]
  }
};


console.log(twoSum([2, 7, 11, 15], 9)) // [0,1]
console.log(twoSum([3, 2, 4], 6)) // [1,2]
console.log(twoSum([2, 5, 5, 11], 10)) // [1,2]
console.log(twoSum([2, 7, 11, 15], 9)) // [0,1]
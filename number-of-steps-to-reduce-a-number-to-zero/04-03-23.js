/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let count = 0;

  while (num != 0) {
    
    if (num % 2 === 0) {
      num = num / 2;
      count++
    } else {
      num -= 1;
      count++
    }
  }
  return count
};

console.log(numberOfSteps(14)) // 6
console.log(numberOfSteps(8)) // 4
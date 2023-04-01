/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let y = x.toString().split('').reverse().join('')
  return x == y ? true : false;
};

console.log(isPalindrome(53))
console.log(isPalindrome(636))
console.log(isPalindrome(929))
console.log(isPalindrome(954))
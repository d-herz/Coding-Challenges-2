//5-3-22

function isPalindrome(x) {
  let y = x.toLowerCase().split("").reverse().join('')
  
  return x.toLowerCase() === y ? true: false;
}
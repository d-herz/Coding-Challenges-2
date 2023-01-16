//Standup 32 
//02/02/23

//Non-recursive Solution
function mygcd(x, y) {

  for (let i = y; i > 0; i--) {
    if (x % i === 0 && y % i === 0) {
      return i
    }
  }
}

//Recursive with Euclidian Algorithm
// a = b * q + r 
function mygcd(a, b) {
  if (b === 0) {
    return a
  }
  return mygcd(b, a % b)
}

console.log(mygcd(30, 12))//6
console.log(mygcd(8, 9))//1
console.log(mygcd(1, 1)) //1
console.log(mygcd(18, 9)) //9
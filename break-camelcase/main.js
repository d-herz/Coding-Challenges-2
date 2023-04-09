// Complete the solution so that the function will break up camel casing, using a space between words.

//   Example
// "camelCasing"  => "camel Casing"
// "identifier"   => "identifier"
// ""             => ""


function solution(string) {
  let ans = ''

  for (let i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() === string[i]) {
      ans += " " + string[i]
    } else {
      ans += string[i]
    }
  }
  return ans
}


console.log(solution('camelCasing')) // 'camel Casing'
console.log(solution('camelCasingTest')) // 'camel Casing Test'
// console.log(solution())
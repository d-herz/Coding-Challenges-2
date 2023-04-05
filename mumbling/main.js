// This time no story, no theory.The examples below show you how to write function accum:

//   Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//PREP
//P: string, only alphabeticals
//R: string split at each letter and repeats number of times = to index 
//E: accum("ZpglnRxqenU") === "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"


function accum(s) {
  let ans = ''

  for (let i = 0; i < s.length; i++) {
    ans += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + "-"; 
  }
  return ans.slice(0, -1)
}

console.log(accum("abcd")) // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")) // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")) // "C-Ww-Aaa-Tttt"
console.log(accum("ZpglnRxqenU")) // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
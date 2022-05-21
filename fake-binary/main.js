// 5-21-22

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//PREP
//P: x, a string of digits
//R: return a string
//E: fakeBin('50505') === '10101'
/* 
*/

function fakeBin(x){
  let arr = x.split('')
  let arr2 = arr.map( num => +num)
  let arr3 = []
  for( let i = 0; i< arr2.length; i++){
    if(arr2[i] < 5){
      arr3.push('0')
    }else{
      arr3.push('1')
    }
  }
    return arr3.join('')
}
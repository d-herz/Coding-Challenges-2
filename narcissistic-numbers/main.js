// A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where l = 3 ( the number of digits in 153 )
// 13 + 53 + 33 = 153

// Write a function that, given n, returns whether or not n is a Narcissistic Number.

//PREP
//P:  a number
//R: boolean
//E: isNarc(153) === true
/*
P: function isNarc(n){ 
  number toString toArray 
}
*/

function isNarcissistic(n) {

  let pow = +String((Math.abs(n))).length
  let arr = n.toString().split('')
  let arr2 = arr.map(x => +x).map(x => x**pow).reduce((acc,c) => acc+c,0)
  return arr2 === n ? true: false ;
}
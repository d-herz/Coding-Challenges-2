// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

//PREP
//P: n, a number
//R: a number with an ending 0 removed (if it exists)
//E: noBoringZeros(1450) === 145

function noBoringZeros(n) {
  
  let str = n.toString()

  for(let i = 0; i<=str.length; i++){
    if(str.endsWith('0')){
       str = str.slice(0,-1)
    }else{
      return Number(str)
    }
  }
  return Number(str)
}
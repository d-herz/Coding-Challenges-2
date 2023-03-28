// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
  if(!str){
    return true
  }
  str = str.toLowerCase()
  if(!str.includes('x') && !str.includes('o')){
    return true
  }

  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < str.length; i++) {
    if(str[i] === 'x'){
      xCount++
    }else if(str[i] === 'o'){
      oCount++
    }
  }
  // console.log(xCount)
  // console.log(oCount)

  if ( xCount === oCount){
    return true
  }
  return false
}


console.log(XO('xo')) // true
console.log(XO("xxOo")) // true
console.log(XO("xxxm")) // false
console.log(XO("fdfsdfs")) // true
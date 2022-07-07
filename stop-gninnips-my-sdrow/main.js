// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

//PREP
//P: a string
//R: a string, but with 5 letter or more words reversed
//E: Stop Spinning my Words === Stop gninnipS My sdroW
/*
P:  function spinWords(string){
  arrayify the string
  for loop through array and check lenght of each index
  conditional if length >= 5, reverse
}
*/

function spinWords(string){
  let arr = string.split(' ')
  let str = ''
  arr.map( (x,i) => {
    if(x.length >= 5){
      arr[i] = x.split('').reverse().join('')
    }else{
      arr[i] = x
    }
    str = arr.join(' ') 
  })
  return str
}


